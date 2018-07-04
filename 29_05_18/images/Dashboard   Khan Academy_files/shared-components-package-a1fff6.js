KAdefine("javascript/shared-components-package/deprecated-modal.jsx", function(require, module, exports) {
var _fullScreenOnMobile
var React=require("react")
var classNames=require("classnames")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var constants=require("../shared-styles-package/constants.js")
var Icon=require("../shared-styles-package/icon.jsx")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var closeIcon="\nM6.26353762,4.99851587 L9.73097464,1.53107884 C10.0836373,1.17841618\n10.0842213,0.612127047 9.73530496,0.263210718 C9.38395604,-0.0881381913\n8.81874474,-0.0837668714 8.46743686,0.267541014 L4.99999981,3.73497806\nL1.5325628,0.267541051 C1.1812549,-0.0837668481 0.616043606,\n-0.0881381955 0.264694717,0.263210694 C-0.0842215912,0.612127004\n-0.0836375768,1.17841613 0.269025093,1.5310788 L3.73646206,4.9985158\nL0.269025109,8.46595276 C-0.083637537,8.81861541 -0.0842215923,\n9.38490462 0.264694642,9.73382106 C0.616043456,10.0851701 1.18125469,\n10.0807988 1.53256259,9.72949093 L4.99999988,6.26205363 L8.46743739,\n9.72949117 C8.8187453,10.0807991 9.38395655,10.0851704 9.73530537,\n9.73382138 C10.0842216,9.38490498 10.0836375,8.81861579 9.73097488,\n8.46595313 L6.26353762,4.99851587 Z"
var Modal=function(e){babelHelpers.inherits(t,e)
function t(){var o,s,i
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,r=Array(n),a=0;a<n;a++){r[a]=arguments[a]}return i=(o=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),s),s.state={visible:true,activeElement:null},s.handleEsc=function(e){if(e.keyCode===27){s.handleClose()}},o),babelHelpers.possibleConstructorReturn(s,i)}t.width=function o(e){return{margin:"0 0 0 "+-e/2+"px",width:e,maxWidth:e}}
t.prototype.componentWillMount=function s(){this.setState({activeElement:document.activeElement})}
t.prototype.componentDidMount=function i(){var e=this
if(this.shouldRestrictTabbing()){this._restrictedFocusHandler=function(t){return e._restrictedFocus(t)}
document.addEventListener("focus",this._restrictedFocusHandler,true)}if(this.props.keyboard){window.addEventListener("keydown",this.handleEsc,true)}this.oldOverflow=document.body.style.overflow
if(this.props.preventBodyScroll&&this.state.visible){document.body.style.overflow="hidden"}if(this.props.elementToFocus){var t=this.props.elementToFocus()
if(t){setTimeout(function(){return t.focus()},100)}}}
t.prototype.componentDidUpdate=function n(e,t){if(this.state.visible!==t.visible&&this.props.preventBodyScroll){document.body.style.overflow=this.state.visible?"hidden":this.oldOverflow}}
t.prototype.componentWillUnmount=function r(){if(this.props.keyboard){window.removeEventListener("keydown",this.handleEsc,true)}if(this.props.preventBodyScroll){document.body.style.overflow=this.oldOverflow}if(this.state.activeElement&&this.props.refocusActiveElement){this.state.activeElement.focus()}if(this.shouldRestrictTabbing()){document.removeEventListener("focus",this._restrictedFocusHandler,true)}}
t.prototype.shouldRestrictTabbing=function a(){return!this.props.inline&&this.props.restrictTabbing}
t.prototype._restrictedFocus=function l(e){if(e.target instanceof HTMLElement&&this.modal&&!this.modal.contains(e.target)){this.modal.focus()}}
t.prototype.handleClose=function d(){this.setState({visible:false})
this.props.onClose()
if(this.state.activeElement&&this.props.refocusActiveElement){this.state.activeElement.focus()}if(this.props.restrictTabbing){document.removeEventListener("focus",this._restrictedFocusHandler,true)}}
t.prototype.render=function c(){var e=this
if(!this.state.visible&&this.props.shouldHandleClose){return React.createElement("div",null)}var t=this.props,o=t.showCloseButton,s=t.showCloseButtonAbsolute
var i=(o||s)&&React.createElement("a",{"aria-label":this.props.ariaCloseLabel,className:css(styles.close,s&&styles.closeAbsolute),href:"javascript: void 0",onClick:function r(){return e.handleClose()}},React.createElement(Icon,{icon:closeIcon,size:14}))
var n=this.props.children
if(this.props.title||this.props.footer){n=React.createElement("div",null,this.props.title&&React.createElement("div",{className:css(styles.header)},React.createElement("h2",{id:"modalTitle",className:css(styles.heading)},this.props.title)),React.createElement("div",{className:css(styles.body)},this.props.children),this.props.footer&&React.createElement("div",{className:css(styles.footer)},this.props.footer))}return React.createElement("div",{className:css(styles.wrap,this.props.inline&&styles.inlineWrap)},React.createElement("div",{tabIndex:"-1",className:classNames(css.apply(undefined,[styles.modal,this.props.padded&&styles.padded,this.props.forceTop&&styles.forceTop,this.props.wide&&styles.wide,this.props.extraWide&&styles.extraWide,this.props.fullScreen&&styles.fullScreen,this.props.fullScreenOnMobile&&styles.fullScreenOnMobile,this.props.inline&&styles.inlineModal,this.props.responsive&&styles.responsiveModal,this.props.responsive&&this.props.responsiveHeight&&styles.responsiveHeight].concat(this.props.extraStyles)),this.props.className),ref:function a(t){if(t&&e.props.preventScrollOnShow){t.style.top=window.scrollY+"px"}e.modal=t},role:this.props.alert?"alertdialog":"dialog","aria-labelledby":"modalTitle"},i,n),!!this.props.backdrop&&React.createElement("div",{className:css(styles.backdrop,this.props.inline&&styles.inlineBackdrop,this.props.forceTop&&styles.forceTopBackdrop),onClick:this.props.backdrop!=="static"?function(){return e.handleClose()}:null}))}
return t}(React.Component)
Modal.defaultProps={ariaCloseLabel:"Close",alert:false,backdrop:true,className:"",extraStyles:[],extraWide:false,forceTop:false,fullScreen:false,fullScreenOnMobile:false,inline:false,keyboard:true,onClose:function e(){},padded:true,preventBodyScroll:false,preventScrollOnShow:false,refocusActiveElement:true,responsive:false,responsiveHeight:true,restrictTabbing:true,showCloseButton:false,shouldHandleClose:true,showCloseButtonAbsolute:false,title:"",wide:false}
var defaultWidth=560
var wideWidth=700
var extraWideWidth=1e3
var margin=30
var styles=StyleSheet.create({wrap:{display:"inline-block"},inlineWrap:{display:"block",overflow:"auto",position:"relative"},modal:babelHelpers.extends({},Modal.width(defaultWidth),{backgroundColor:constants.white,backgroundClip:"padding-box",border:"1px solid rgba(0, 0, 0, 0.3)",borderRadius:constants.borderRadiusLarge,boxShadow:"0 3px 7px rgba(0, 0, 0, 0.3)",color:constants.textColor,left:"50%",outline:"none",position:"fixed",top:"10%",zIndex:constants.zindexModal}),padded:{padding:constants.modalDialogPadding},inlineModal:{marginBottom:10,marginTop:10,position:"relative"},responsiveModal:{overflow:"auto",width:"75%",marginLeft:0,transform:"translate(-50%, 0)"},responsiveHeight:{bottom:"10%"},forceTop:{zIndex:2147000001},wide:Modal.width(wideWidth),extraWide:Modal.width(extraWideWidth),fullScreen:{bottom:margin,left:margin,minHeight:500-2*margin,minWidth:parseFloat(constants.minContainerWidth)-2*margin,position:"fixed",right:margin,top:margin,width:"auto"},fullScreenOnMobile:(_fullScreenOnMobile={},_fullScreenOnMobile[mediaQueries.smOrSmaller]={border:"none",borderRadius:0,boxSizing:"border-box",height:"100%",left:0,margin:0,maxWidth:"none",position:"fixed",top:0,width:"100%"},_fullScreenOnMobile),backdrop:{backgroundColor:constants.dark,bottom:0,left:0,opacity:.72,position:"fixed",right:0,top:0,zIndex:constants.zindexModalBackdrop},forceTopBackdrop:{zIndex:2147e6},inlineBackdrop:{position:"absolute"},close:{color:constants.black,cursor:"pointer","float":"right",fontSize:constants.baseLineHeight,fontWeight:"bold",lineHeight:constants.baseLineHeight,opacity:.2,textShadow:"0 1px 0 "+constants.white,textDecoration:"none",":hover":{opacity:.41},":focus":{opacity:.41}},closeAbsolute:{position:"absolute",fontSize:28,lineHeight:"28px",right:0,top:0,paddingLeft:8,paddingRight:8,zIndex:constants.zindexAboveModal},header:{borderBottom:"1px solid "+constants.grayLighter,padding:"0 0 "+constants.modalSectionPadding+" 0"},heading:{color:constants.grayDark,fontFamily:"inherit",fontWeight:"bold",marginBottom:0,paddingTop:constants.modalSectionPadding},body:{margin:0,maxHeight:"none",padding:constants.contentPadding+" 0 "+(constants.modalSectionPadding+" 0"),position:"relative"},footer:{backgroundColor:constants.white,borderTop:"1px solid "+constants.grayLighter,marginBottom:0,padding:constants.modalDialogPadding+" 0 0 0",overflow:"hidden",textAlign:"right"}})
module.exports=Modal
});
KAdefine("javascript/shared-components-package/kui-button.jsx", function(require, module, exports) {
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var React=require("react")
var styleConstants=require("../shared-styles-package/constants.js")
var Color=require("../shared-styles-package/color.js")
var i18n=require("../shared-package/i18n.js")
var KUIButton=function(e){babelHelpers.inherits(o,e)
function o(){babelHelpers.classCallCheck(this,o)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}o.prototype.getLabel=function r(){return this.props.label!=null?this.props.label:this.props.type==="submit"?i18n._("Submit"):""}
o.prototype.handleLinkClick=function t(e){if(this.props.disabled){e.preventDefault()
return}var o=void 0
if(this.props.onClick){o=this.props.onClick(e)}if(this.props.type==="submit"&&o!==false&&!e.defaultPrevented){var r=e.target
var t=r.parentNode
var a=r.ownerDocument.createElement("button")
a.type="submit"
a.style.display="none"
if(t){t.insertBefore(a,r)
a.click()
t.removeChild(a)}}if(!this.props.href){e.preventDefault()}return o}
o.prototype.render=function a(){var e=this
var o=this.props,r=o.borderless,t=o.disabled,a=o.domainSlug,s=o.progress,n=o.size,l=o.transparent,i=o.type,p=o.use
var d=this.props.typeStyle||i
var h=p==="gray"
var m=p==="white"
var c=d==="button"&&p!=="white"
var C=d==="submit"&&p!=="white"
var b=m&&!l
var u=null
if(a){u=domainThemes[a]||domainThemes.default}else if(p!=="gray"&&p!=="white"){u=themes[p]}var y=!!a&&d==="button"&&s!=="complete"
var f=css(styles.base,r&&styles.borderless,!t&&styles.notDisabled,n==="small"&&styles.small,h&&grayTheme.base,h&&!l&&grayTheme.notTransparent,h&&t&&grayTheme.disabled,h&&!t&&grayTheme.notDisabled,m&&l&&whiteTheme.transparent.base,m&&l&&t&&whiteTheme.transparent.disabled,m&&l&&!t&&whiteTheme.transparent.notDisabled,m&&!l&&whiteTheme.notTransparent.base,m&&!l&&t&&whiteTheme.notTransparent.disabled,m&&!l&&!t&&whiteTheme.notTransparent.notDisabled,!!u&&c&&u.plainNotWhite.base,!!u&&c&&!l&&u.plainNotWhite.notTransparent,!!u&&c&&t&&u.plainNotWhite.disabled,!!u&&c&&!t&&u.plainNotWhite.notDisabled,!!u&&C&&u.submitNotWhite.base,!!u&&C&&t&&u.submitNotWhite.disabled,!!u&&C&&!t&&u.submitNotWhite.notDisabled,!!u&&b&&u.whiteNotTransparent.base,!!u&&b&&t&&u.whiteNotTransparent.disabled,!!u&&b&&!t&&u.whiteNotTransparent.notDisabled,y&&incompletedTheme.base,y&&!l&&incompletedTheme.notTransparent,y&&t&&incompletedTheme.disabled,y&&!t&&incompletedTheme.notDisabled)
return React.createElement("a",{role:"button","aria-disabled":this.props.disabled?"true":"false",onClick:function g(o){return e.handleLinkClick(o)},href:this.props.href||"javascript:void(0)",target:this.props.target,className:"kui-button "+f,style:{width:this.props.width}},this.getLabel())}
return o}(React.Component)
KUIButton.defaultProps={use:"primary",width:"auto",progress:"complete",borderless:false,shadow:false,transparent:false,disabled:false,size:"normal"}
var styles=StyleSheet.create({base:{background:"transparent",border:"1px solid",borderRadius:19,boxSizing:"border-box",lineHeight:"18px",margin:"5px 0",padding:"10px 30px",position:"relative",display:"inline-block",textAlign:"center",textDecoration:"none",":hover":{transition:"all 0.2s ease"}},borderless:{border:"none",boxShadow:"0 1px 5px rgba(0, 0, 0, 0.2)"},notDisabled:{cursor:"pointer"},small:{padding:"7px 20px",margin:0}})
var disabled1="#fdfdfd"
var disabled2="#d7d7d7"
var disabledColor=styleConstants.grayLight
function borderStyles(e){var o=Color.format(e)
var r=Color.format(Color.fade(e,.15))
var t=Color.format(Color.darken(e,.2))
return StyleSheet.create({base:{color:o,":focus":{outline:"none","::before":{border:"1px solid "+o,borderRadius:23,content:'""',display:"block",height:"100%",left:-4,paddingBottom:6,paddingRight:6,position:"absolute",top:-4,width:"100%"}}},notTransparent:{background:"#fff"},disabled:{color:disabledColor,cursor:"default",opacity:.5},notDisabled:{":hover":{backgroundColor:r,color:o},":focus":{backgroundColor:r,color:o,boxShadow:"0px 0px 5px "+r},":active":{color:t}}})}function backgroundStyles(e,o,r){var t=Color.format(e)
var a=Color.format(o)
var s=Color.format(Color.darken(e,.05))
var n=Color.format(Color.darken(o,.05))
return StyleSheet.create({base:{background:"linear-gradient("+t+", "+a+")",color:r,":focus":{outline:"none",":before":{border:"1px solid "+a,borderRadius:21,content:'""',display:"block",height:"100%",left:-3,paddingBottom:4,paddingRight:4,position:"absolute",top:-3,width:"100%"}}},disabled:{background:"linear-gradient("+disabled1+", "+disabled2+")",color:disabledColor,cursor:"default",opacity:.8},notDisabled:{":hover":{background:"linear-gradient("+s+", "+n+")",color:r},":focus":{background:"linear-gradient("+s+", "+n+")",color:r},":active":{background:"linear-gradient("+n+", "+s+")",color:r}}})}var parsedWhite=Color.parse("#ffffff")
function makeTheme(e,o){return{plainNotWhite:borderStyles(o),submitNotWhite:backgroundStyles(e,o,"#fff"),whiteNotTransparent:backgroundStyles(parsedWhite,parsedWhite,Color.format(o))}}var parsedKaGreen=Color.parse(styleConstants.kaGreen)
var parsedKaBlue=Color.parse(styleConstants.kaBlue)
var parsedLearnstormBlue=Color.parse(styleConstants.learnstormBlue)
var themes={primary:makeTheme(Color.lighten(parsedKaGreen,.05),Color.darken(parsedKaGreen,.05)),secondary:makeTheme(Color.lighten(parsedKaBlue,.1),Color.darken(parsedKaBlue,.05)),blue:makeTheme(Color.lighten(parsedLearnstormBlue,.05),Color.darken(parsedLearnstormBlue,.05))}
var grayTheme=borderStyles(Color.parse(styleConstants.grayLight))
var whiteTheme={transparent:borderStyles(parsedWhite),notTransparent:backgroundStyles(parsedWhite,parsedWhite,styleConstants.textColor)}
var incompletedTheme=borderStyles(Color.parse("#aaaaaa"))
var domainThemes={"default":makeTheme(Color.parse(styleConstants.defaultSubjectColor),Color.parse(styleConstants.defaultDomainColor)),science:makeTheme(Color.parse(styleConstants.scienceSubjectColor),Color.parse(styleConstants.scienceDomainColor)),humanities:makeTheme(Color.parse(styleConstants.humanitiesSubjectColor),Color.parse(styleConstants.humanitiesDomainColor)),"economics-finance-domain":makeTheme(Color.parse(styleConstants.economicsSubjectColor),Color.parse(styleConstants.economicsDomainColor)),cs:makeTheme(Color.parse(styleConstants.csSubjectColor),Color.parse(styleConstants.csDomainColor)),"hour-of-code":makeTheme(Color.parse(styleConstants.csSubjectColor),Color.parse(styleConstants.csDomainColor)),"computer-programming":makeTheme(Color.parse(styleConstants.csSubjectColor),Color.parse(styleConstants.csDomainColor)),computing:makeTheme(Color.parse(styleConstants.csSubjectColor),Color.parse(styleConstants.csDomainColor)),"partner-content":makeTheme(Color.parse(styleConstants.partnerContentSubjectColor),Color.parse(styleConstants.partnerContentDomainColor)),math:makeTheme(Color.parse(styleConstants.mathSubjectColor),Color.parse(styleConstants.mathDomainColor)),"test-prep":makeTheme(Color.parse(styleConstants.testPrepSubjectColor),Color.parse(styleConstants.testPrepDomainColor)),sat:makeTheme(Color.parse(styleConstants.satSubjectColor),Color.parse(styleConstants.satDomainColor)),"college-careers-more":makeTheme(Color.parse(styleConstants.collegeCareersMoreSubjectColor),Color.parse(styleConstants.collegeCareersMoreDomainColor))}
module.exports=KUIButton
});
KAdefine("javascript/shared-components-package/labeled-field.jsx", function(require, module, exports) {
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var uniqueIdCounter=0
var warningSign={path:"M57.379 77.077l0-10.633q0-.784-.539-1.323t-1.225-.539l-10.78 0q-.784 0-1.274.539t-.49 1.323l0 10.633q0 .784.539 1.323t1.225.539l10.78 0q.784 0 1.274-.539t.49-1.323zm-2.009-19.649q1.813 0 1.911-1.274l1.029-25.725q.049-.686-.637-1.176t-1.274-.49l-12.348 0q-.686 0-1.274.49t-.637 1.274l.98 25.627q0 1.176 1.911 1.274l10.339 0zm37.877 35.819l-86.044 0q-4.165 0-6.174-3.528t-.098-7.056l43.022-78.841q.98-1.715 2.646-2.744 3.577-2.156 7.252 0 1.715 1.029 2.646 2.744l43.022 78.841q1.96 3.528-.147 7.056-.931 1.568-2.597 2.548t-3.528.98z",width:100,height:92.816}
var KUILabeledField=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var s=babelHelpers.possibleConstructorReturn(this,e.call(this,r))
s.id="kui_labeled_field_"+(r.id||uniqueIdCounter++)
return s}t.prototype.getInputElem=function r(){return this.input}
t.prototype.handleTitleClick=function s(){this.input.focus()}
t.prototype.render=function i(){var e=this
var t=this.props.warning!=null
var r=this.props.hasError===undefined?this.props.error:this.props.hasError
var s=null
if(r){s=React.createElement("div",{id:this.id+"-error",className:css(styles.error)},this.props.error)}else if(!this.props.showTitle){s=React.createElement("div",{id:this.id,className:"sr-only"},this.props.placeholder)}return React.createElement("div",{className:"kui-labeledfield "+css(styles.base)},this.props.showTitle&&React.createElement("div",{className:css(styles.title),onClick:function i(){return e.handleTitleClick()},id:this.id,style:this.props.titleStyle},this.props.title,this.props.warning&&React.createElement("span",{title:this.props.warning},React.createElement(_icon2.default,{color:"#ffCC00",className:css(styles.warningIcon),icon:warningSign}))),s,React.createElement("input",{ref:function o(t){return e.input=t},"aria-invalid":!!this.props.error,"aria-labelledby":this.id+(this.props.error?"-error":""),autoFocus:this.props.autoFocus,className:css(styles.input,t&&styles.inputWarning,r&&styles.inputError,this.props.transparent&&styles.inputTransparent),"data-test-id":this.props.testId,defaultValue:this.props.defaultValue,disabled:this.props.disabled,name:this.props.name,placeholder:this.props.placeholder,pattern:this.props.pattern,type:this.props.type,value:this.props.value,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onChange:this.props.onChange,onClick:this.props.onClick,onKeyPress:this.props.onKeyPress}),this.props.caption&&React.createElement("div",{className:css(styles.caption)},this.props.caption))}
return t}(React.Component)
KUILabeledField.defaultProps={type:"text",showTitle:true,transparent:false}
var errorColor="#c52717"
var styles=StyleSheet.create({base:{lineHeight:1.4,marginBottom:20},title:{color:"#777",cursor:"default","float":"left",fontSize:14,fontWeight:"bold",textTransform:"uppercase"},error:{color:errorColor,"float":"right",marginLeft:20,textAlign:"right"},input:{background:"#fcfcfc",border:"1px solid #ccc",boxSizing:"border-box",clear:"both",font:"inherit",padding:"8px 10px",margin:"5px 0 0",verticalAlign:"baseline",width:"100%",":focus":{outline:"none",boxShadow:"0px 0px 10px rgba(99, 155, 36, 0.8)"}},inputError:{background:"#fbe2e0",borderColor:errorColor,":focus":{boxShadow:"0px 0px 10px rgba(197, 39, 23, 0.4)"}},inputWarning:{background:"#ffEECC",borderColor:"#ffCC00"},inputTransparent:{background:"transparent",color:"#fff"},caption:{color:"#999",marginTop:5,textAlign:"right"},warningIcon:{marginLeft:4,position:"relative",top:1}})
module.exports=KUILabeledField
});
KAdefine("javascript/shared-components-package/scroll-tracking.jsx", function(require, module, exports) {
var React=require("react")
var _=require("../../third_party/javascript-khansrc/lodash/lodash.js")
var ScrollTracking=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function r(){if(this.props.children==null){this.trackNode(window)}}
t.prototype.componentWillUnmount=function n(){this.reset()}
t.prototype.reset=function o(){this.node.removeEventListener("scroll",this.boundHandler)}
t.prototype.trackNode=function l(e){if(this.boundHandler!=null){this.reset()}var t=this.props,r=t.debounce,n=t.delayMs,o=t.onScroll
var l=r?_.debounce:_.throttle
this.boundHandler=l(function(t){var r=e===window?window.pageYOffset:t.target.scrollTop
o(r,t)},n)
this.node=e
this.node.addEventListener("scroll",this.boundHandler)}
t.prototype.render=function s(){var e=this
if(this.props.children){return React.cloneElement(React.Children.only(this.props.children),{ref:function t(r){return r&&e.trackNode(r)}})}else{return null}}
return t}(React.Component)
ScrollTracking.defaultProps={debounce:false,delayMs:250}
module.exports=ScrollTracking
});
KAdefine("javascript/shared-components-package/spinner.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var Spinner=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function n(){var e=this.props,r=e.size,n=e.theme,a=e.inline
var t=n==="dark"?"/images/spinner-dark.svg":"/images/spinner-light.svg"
var i=void 0
switch(r){case"small":i=48
break
case"xsmall":i=16
break
default:i=96}return React.createElement("div",{className:css(styles.spinnerContainer,a&&styles.inlineSpinnerContainer)},React.createElement("img",{src:KA.staticUrl(t),alt:i18n._("Loading"),className:css(styles.loadingSpinner),style:{height:i,width:i}}))}
return r}(React.Component)
Spinner.defaultProps={size:"default",theme:"dark"}
var rotateKeyFrames={"0%":{transform:"rotate(0deg)"},"50%":{transform:"rotate(180deg)"},"100%":{transform:"rotate(360deg)"}}
var styles=StyleSheet.create({spinnerContainer:{display:"flex",justifyContent:"center"},inlineSpinnerContainer:{display:"inline"},loadingSpinner:{animationName:rotateKeyFrames,animationDuration:"1.1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}})
module.exports=Spinner
});
KAdefine("javascript/shared-components-package/checkbox.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),css=_require.css,StyleSheet=_require.StyleSheet
var styleConstants=require("../shared-styles-package/constants.js")
var color=require("../shared-styles-package/color.js")
var Icon=require("../shared-styles-package/icon.jsx")
var KUICheckbox=function(e){babelHelpers.inherits(s,e)
function s(){var t,r,o
babelHelpers.classCallCheck(this,s)
for(var a=arguments.length,c=Array(a),i=0;i<a;i++){c[i]=arguments[i]}return o=(t=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(c))),r),r.state={focused:false},t),babelHelpers.possibleConstructorReturn(r,o)}s.prototype.handleFocus=function t(e){this.setState({focused:true})
if(this.props.onFocus){return this.props.onFocus(e)}}
s.prototype.handleBlur=function r(e){this.setState({focused:false})
if(this.props.onBlur){return this.props.onBlur(e)}}
s.prototype.render=function o(){var e=this
return React.createElement("div",{className:css(styles.checkbox,this.props.checked&&!this.props.disabled&&styles.checked,this.props.disabled&&styles.disabled,this.state.focused&&styles.focused)},this.props.checked&&React.createElement(Icon,{icon:okIcon,size:9,className:css(styles.checkboxIcon)}),React.createElement("input",{type:"checkbox","aria-label":this.props.ariaLabel,className:css(styles.input,this.props.disabled&&styles.inputDisabled),name:this.props.name,checked:this.props.checked,disabled:this.props.disabled,onChange:this.props.onChange,onFocus:function s(t){return e.handleFocus(t)},onBlur:function t(s){return e.handleBlur(s)}}))}
return s}(React.Component)
var okIcon={path:"M37.964 76.048q-2.576 0-4.368-1.792l-31.864-31.864q-1.792-1.792-1.792-4.368t1.792-4.368l8.736-8.68q1.792-1.792 4.368-1.792t4.312 1.792l18.816 18.872 42-42.056q1.792-1.792 4.368-1.792t4.312 1.792l8.736 8.736q1.792 1.792 1.792 4.368t-1.792 4.312l-55.048 55.048q-1.792 1.792-4.368 1.792z",width:100,height:76.637}
var kaGreen=color.parse(styleConstants.kaGreen)
var styles=StyleSheet.create({checkbox:{backgroundImage:"linear-gradient(#fff, #ddd)",border:"1px solid #aaa",borderRadius:3,boxSizing:"border-box",display:"inline-block",height:16,margin:3,marginTop:1.5,overflow:"hidden",position:"relative",verticalAlign:"top",width:16},checked:{background:color.format(color.darken(kaGreen,.1)),color:"#fff"},disabled:{color:"#999",opacity:.4},focused:{boxShadow:"0px 0px 3px "+color.format(color.fade(kaGreen,.8))},checkboxIcon:{display:"block",margin:"2px 0 0 1px"},input:{cursor:"pointer",height:"100%",left:0,margin:0,opacity:0,position:"absolute",top:0,width:"100%"},inputDisabled:{cursor:"default"}})
module.exports=KUICheckbox
});
KAdefine("javascript/shared-components-package/select.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),css=_require.css,StyleSheet=_require.StyleSheet
var _require2=require("../shared-package/i18n.js"),$_=_require2.$_
var Select=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.onChange=function t(e){if(this.props.onChange){this.props.onChange(e.target.value)}}
r.prototype.render=function a(){var e=this
var r=this.props,t=r.blankText,a=r.blankValue,n=r.hideBlank,o=r.className,l=r.options,s=babelHelpers.objectWithoutProperties(r,["blankText","blankValue","hideBlank","className","options"])
var i=l
var u={paddingTop:0,paddingBottom:0}
if(!n&&a!==undefined&&t!==undefined){i=[[a,t]].concat(i)}var c=[css(styles.default),o].filter(function(e){return e}).join(" ")
return React.createElement("select",babelHelpers.extends({},s,{style:u,onChange:function p(r){return e.onChange(r)},className:c}),i.map(function(e){return React.createElement("option",{value:e[0],key:e[0]},e[1])}))}
return r}(React.Component)
Select.defaultProps={blankText:$_(null,"Unspecified"),blankValue:"unspecified",disabled:false}
var styles=StyleSheet.create({"default":{backgroundColor:"#fafafa",border:"1px solid #C6D1AD",borderRadius:4,fontSize:10,padding:0,height:24,width:160,outline:"none",":focus":{boxShadow:"0 0 5px 1px rgba(115, 152, 44, .5)",borderColor:"rgba(100, 140, 30, .5)"},":disabled":{color:"#999"}}})
module.exports=Select
});
KAdefine("javascript/shared-components-package/labeled-textarea.jsx", function(require, module, exports) {
var _uniqueId=require("../shared-package/unique-id.js")
var _uniqueId2=babelHelpers.interopRequireDefault(_uniqueId)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var classNames=require("classnames")
var styleConstants=require("../shared-styles-package/constants.js")
var color=require("../shared-styles-package/color.js")
var KUITextArea=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
var t=babelHelpers.possibleConstructorReturn(this,e.call(this))
var o=new _uniqueId2.default("kui-textarea")
t.textAreaId=o.get("")
t.labelId=o.get("label")
return t}r.prototype.render=function t(){return React.createElement("div",{className:classNames(css(styles.default),this.props.className)},React.createElement("label",{id:this.labelId,htmlFor:this.textAreaId,className:css(styles.title)},this.props.title),this.props.error&&React.createElement("div",{className:css(styles.error)},this.props.error),React.createElement("textarea",{id:this.textAreaId,"aria-labelledby":this.labelId,autoFocus:this.props.autoFocus,className:css(styles.input,this.props.error&&styles.inputError),disabled:this.props.disabled,defaultValue:this.props.defaultValue,placeholder:this.props.placeholder,value:this.props.value,rows:this.props.rows,onChange:this.props.onChange,onClick:this.props.onClick,onKeyDown:this.props.onKeyDown,style:{height:this.props.height}}),this.props.caption&&React.createElement("div",{className:css(styles.caption)},this.props.caption))}
return r}(React.Component)
var errorColor=color.parse("#c52717")
var kaGreen=color.parse(styleConstants.kaGreen)
var styles=StyleSheet.create({"default":{lineHeight:1.4,marginBottom:20},title:{color:"#777",cursor:"default","float":"left",fontSize:14,fontWeight:"bold",textTransform:"uppercase"},error:{color:color.format(errorColor),"float":"right",marginLeft:20,textAlign:"right"},input:{background:"#fcfcfc",border:"1px solid #ccc",boxSizing:"border-box",clear:"both",font:"inherit",padding:"8px 10px",margin:"5px 0 0",verticalAlign:"baseline",width:"100%",":focus":{outline:"none",boxShadow:"0px 0px 10px "+color.format(color.fade(kaGreen,.8))}},inputError:{background:color.format(color.lighten(errorColor,.5)),borderColor:color.format(errorColor),":focus":{boxShadow:"0px 0px 10px "+color.format(color.fade(errorColor,.4))}},caption:{color:"#999",marginTop:5,textAlign:"right"}})
module.exports=KUITextArea
});
