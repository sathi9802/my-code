KAdefine("javascript/components/modal-package/modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.ModalHeader=exports.ModalFooter=exports.default=exports.sharedModalStyles=undefined
var _modal,_modalDown,_modalUp,_animateInModal,_animateOutModal,_sideNav,_withTopBar
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _aphrodite=require("aphrodite")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _controlButton=require("../button-package/control-button.jsx")
var _controlButton2=babelHelpers.interopRequireDefault(_controlButton)
var _backIcon=require("../../reusable-components-package/back-icon.jsx")
var _backIcon2=babelHelpers.interopRequireDefault(_backIcon)
var _closeIcon=require("../../reusable-components-package/close-icon.jsx")
var _closeIcon2=babelHelpers.interopRequireDefault(_closeIcon)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _util=require("./util.js")
var _modalHeader=require("./modal-header.jsx")
var _modalHeader2=babelHelpers.interopRequireDefault(_modalHeader)
var _modalFooter=require("./modal-footer.jsx")
var _modalFooter2=babelHelpers.interopRequireDefault(_modalFooter)
var _scrollDisabler=require("./scroll-disabler.jsx")
var _scrollDisabler2=babelHelpers.interopRequireDefault(_scrollDisabler)
var _backdrop=require("./backdrop.jsx")
var _backdrop2=babelHelpers.interopRequireDefault(_backdrop)
var _uniqueId=require("../../shared-package/unique-id.js")
var _uniqueId2=babelHelpers.interopRequireDefault(_uniqueId)
var i18n=require("../../shared-package/i18n.js")
var MODAL_PARENT_ID="__MODAL_PARENT__"
function getModalParent(){var e=document.querySelector("#"+MODAL_PARENT_ID)
if(e){return e}e=(0,_util.getBody)().appendChild(document.createElement("div"))
e.id=MODAL_PARENT_ID
return e}var TRANSITION_ANIMATION_DURATION=300
var Modal=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
var o=babelHelpers.possibleConstructorReturn(this,e.call(this))
o.state={willBeVisible:false,isModalOpen:false,startAnimations:false,forceClosingAnimation:false,modalContainerElement:undefined}
o._initialModalFocus=function(){var e=function t(e){o._restrictedFocusHandler(e)
document.removeEventListener("focus",t,true)}
document.addEventListener("focus",e,true)
if(!o.modal||!o.state.willBeVisible){setTimeout(o._initialModalFocus,0)
return}o.modal&&o.modal.focus()}
o._setContainerState=function(e){if(e!==o.state.modalContainerElement){o.setState({modalContainerElement:e})}}
o.firstFocus=true
o._restrictedFocusHandler=function(e){if(!o.props.restrictFocusToModal){return}var t=e.relatedTarget
var a=!!o.modal
var l=a&&o.modal===e.target
var r=!t||o.state.modalContainerElement&&!o.state.modalContainerElement.contains(t)
var i=e.target instanceof HTMLElement&&e.target.className.indexOf("modal")!==-1
var n=a&&r&&!l&&!i
if(n||o.firstFocus){if(o.isShiftKeyDown&&!o.firstFocus){o.focusLastElementOrModal()}else{o.focusFirstElementOrModal()}e.preventDefault()
o.firstFocus=false}}
o.getAllFocusableChildren=function(e){if(!e){return[]}return Array.prototype.filter.call(e.querySelectorAll("button:not([tabindex='-1']):not([disabled]), "+"[href]:not([tabindex='-1']):not([disabled]), "+"input:not([tabindex='-1']):not([disabled]), "+"select:not([tabindex='-1']):not([disabled]), "+"textarea:not([tabindex='-1']):not([disabled]), "+"[tabindex]:not([tabindex='-1']):not([disabled])"),function(e){return!!e.offsetParent})}
o.focusLastElementOrModal=function(){if(!o.modal){return}var e=o.getAllFocusableChildren(o.modal)
if(e.length===0){o.modal&&o.modal.focus()}else{e[e.length-1].focus()}}
o.focusFirstElementOrModal=function(){if(!o.modal){return}var e=o.getAllFocusableChildren(o.firstFocus?o.modal.querySelector('[id="'+o.getChildrenId()+'"]'):o.modal)
if(e.length===0){o.modal&&o.modal.focus()}else{e[0].focus()}}
o.handleKeyDown=function(e){if(e.keyCode===27&&!o.props.preventDismissal){o.handleClose()}if(e.shiftKey){o.isShiftKeyDown=true}}
o.handleKeyUp=function(e){if(!e.shiftKey){o.isShiftKeyDown=false}}
o.handleClose=function(){if(o.props.onBack){o.props.onBack()}else{var e=o.props.onRequestClose()
if(e!==false){if(o.props.shouldAnimate){o.setState({forceClosingAnimation:true})}o.setState({willBeVisible:false})
o.closeTimeout=setTimeout(function(){return o.props.onClose()},TRANSITION_ANIMATION_DURATION)}}}
o.ids=new _uniqueId2.default("dialog")
return o}t.prototype.getChildContext=function o(){return{modalContainerElement:this.state.modalContainerElement}}
t.prototype.componentWillMount=function a(){(0,_util.getBody)().addEventListener("keydown",this.handleKeyDown);(0,_util.getBody)().addEventListener("keyup",this.handleKeyUp)}
t.prototype.componentDidMount=function l(){var e=this
document.addEventListener("focusout",this._restrictedFocusHandler,true)
if(this.props.shouldAnimate){var t=100
this.startAnimationsTimeout=setTimeout(function(){return e.setState({startAnimations:true})},0)
this.willBeVisibleTimeout=setTimeout(function(){e.setState({willBeVisible:true})
e._initialModalFocus()},t)
this.isModalOpenTimeout=setTimeout(function(){return e.setState({isModalOpen:true})},t+TRANSITION_ANIMATION_DURATION)}else{setTimeout(function(){e.setState({isModalOpen:true,willBeVisible:true},function(){return e._initialModalFocus()})},0)}this.updateBodyRender()}
t.prototype.componentDidUpdate=function r(){this.updateBodyRender()}
t.prototype.componentWillUnmount=function i(){document.removeEventListener("focusout",this._restrictedFocusHandler,true);(0,_util.getBody)().removeEventListener("keydown",this.handleKeyDown);(0,_util.getBody)().removeEventListener("keyup",this.handleKeyUp)
clearTimeout(this.startAnimationsTimeout)
clearTimeout(this.willBeVisibleTimeout)
clearTimeout(this.isModalOpenTimeout)
clearTimeout(this.closeTimeout)
if(this.props.hostInBody){_reactDom2.default.unmountComponentAtNode(getModalParent())}}
t.prototype.getChildrenId=function n(){return this.ids.get("children")}
t.prototype.getTitleId=function s(){return this.ids.get("title")}
t.prototype.updateBodyRender=function d(){if(this.props.hostInBody){_reactDom2.default.render(this.renderModal(),getModalParent())}}
t.prototype.renderModal=function c(){var e=this
var t=this.props,o=t.shouldAnimate,a=t.fromAnotherModal,l=t.navigator,r=t.preventDismissal,i=t.hideCloseIcon,n=t.shouldBackdropDismiss,s=t.topRightElements,d=t.useBackIcon,c=t.visible,u=t.inline,p=t.topBar,m=t.controlButtonColors
var f=this.state,h=f.startAnimations,_=f.willBeVisible,b=f.isModalOpen,y=f.forceClosingAnimation
var v=Array.isArray(this.props.style)?this.props.style:[this.props.style]
var g=o&&!a||y?[styles.modal,!b&&h&&styles.animateInModal,b&&h&&styles.animateOutModal,!_&&styles.modalDown,_&&styles.modalUp].concat(v):[styles.modal].concat(v)
var I=this.props.children
if(typeof I==="function"){I=I({closeModal:function w(){return e.handleClose()}})}var M=React.Children.toArray(I)
var T=M.filter(function(e){return e.type!==_modalFooter2.default&&e.type!==_modalHeader2.default})
var R=M.filter(function(e){return e.type===_modalHeader2.default})
if(R.length>1){console.warn("Modal can only display a single header")}var x=R[0]
var N=M.filter(function(e){return e.type===_modalFooter2.default})
if(N.length>1){console.warn("Modal can only display a single footer")}var A=N[0]
var C=(!r||d)&&!i&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topLeftCorner)},React.createElement(_controlButton2.default,{onClick:this.handleClose,padding:12,colors:m,testId:"close-modal-btn"},d?React.createElement(_backIcon2.default,null):React.createElement(_closeIcon2.default,{size:24,iconSize:12})))
var D=s&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topRightCorner),"data-test-id":"modal-top-right-element"},s)
var q=void 0
if(o&&!a||y){if(!b&&h){q="in"}else if(b&&h){q="out"}else{q=null}}else{q=null}return React.createElement("div",{ref:this._setContainerState,className:(0,_aphrodite.css)(styles.container,!c&&styles.hidden,u&&styles.inlineWrap,p&&styles.withTopBar)},!u&&React.createElement(_scrollDisabler2.default,null),p&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topBar)},p),React.createElement(_backdrop2.default,{inline:u,willBeVisible:_,animate:q,onClick:function S(){if(n()&&!r){e.handleClose()}}}),l&&l.hasPrev()&&React.createElement("div",{role:"button","aria-label":i18n._("previous"),"data-test-id":"prev-arrow",className:(0,_aphrodite.css)(styles.sideNav,styles.prev),onClick:function O(){return l.hasPrev()&&l.onPrev()}},React.createElement(_icon2.default,{icon:icons.angleLeft,size:17})),React.createElement("div",{"aria-labelledby":this.getTitleId(),"aria-describedby":this.getChildrenId(),className:_aphrodite.css.apply(undefined,g.concat([u&&styles.inlineModal])),ref:function E(t){return e.modal=t},role:this.props.alert?"alertdialog":"dialog",tabIndex:"-1"},x&&React.cloneElement(x,{id:this.getTitleId(),topLeftCorner:C,topRightCorner:D}),React.createElement("div",{id:this.getChildrenId(),className:(0,_aphrodite.css)(styles.dialogBody)},T),A,!x&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topLeftCornerInModal)},C),!x&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topRightCornerInModal)},D)),l&&l.hasNext()&&React.createElement("div",{role:"button","aria-label":i18n._("next"),"data-test-id":"next-arrow",className:(0,_aphrodite.css)(styles.sideNav,styles.next),onClick:function B(){return l.hasNext()&&l.onNext()}},React.createElement(_icon2.default,{icon:icons.angleRight,size:17})))}
t.prototype.render=function u(){var e=this.props.hostInBody
if(e){return null}return this.renderModal()}
return t}(_react.Component)
Modal.defaultProps={shouldAnimate:true,shouldBackdropDismiss:function e(){return true},fromAnotherModal:false,visible:true,onRequestClose:function t(){return true},onClose:function o(){},preventDismissal:false,hideCloseIcon:false,restrictFocusToModal:true}
Modal.childContextTypes={modalContainerElement:React.PropTypes.instanceOf(HTMLElement)}
var sharedModalStyles=exports.sharedModalStyles=_aphrodite.StyleSheet.create({subtitle:babelHelpers.extends({},_globalStyles.typography.modalSubtitle,{color:_globalStyles.colors.gray68})})
var styles=_aphrodite.StyleSheet.create({inlineWrap:{display:"block",overflow:"auto",position:"relative"},container:{position:"fixed",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",zIndex:_globalStyles.constants.zindexModal},dialogBody:{display:"flex",overflow:"scroll",flexDirection:"column",flexGrow:1,justifyContent:"center"},hidden:{visibility:"hidden"},topBar:{position:"fixed",top:0,left:0,right:0,zIndex:_globalStyles.constants.zindexAboveModal},modalWrapper:{position:"fixed",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},modal:(_modal={display:"flex",flexDirection:"column",position:"relative",maxHeight:"100%",maxWidth:"100%",backgroundColor:"white",borderRadius:_globalStyles.constants.baseBorderRadius},_modal[_globalStyles.queries.small]={borderRadius:0},_modal.outline="none",_modal.WebkitTapHighlightColor="rgba(0,0,0,0)",_modal),inlineModal:{margin:"10px auto",position:"relative",width:"75%",height:"100%"},modalDown:(_modalDown={transform:"translate(0px, 48px)",opacity:0},_modalDown[_globalStyles.queries.small]={transform:"translate(0vw, 100vh)",opacity:1},_modalDown),modalUp:(_modalUp={transform:"translate(0px, 0px)",opacity:1},_modalUp[_globalStyles.queries.small]={transform:"translate(0vw, 0vh)",opacity:1},_modalUp),animateInModal:(_animateInModal={transition:["transform "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0.25, 0.25, 0.25, 1)","opacity "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0, 0.25, 0.25, 1)"].join(", ")},_animateInModal[_globalStyles.queries.small]={transition:"transform "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0.25, 0.25, 0.25, 1)"},_animateInModal),animateOutModal:(_animateOutModal={transition:["transform "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0.25, 0.25, 0.25, 1)","opacity 0.2s cubic-bezier(0, 0.25, 0.25, 1)"].join(", ")},_animateOutModal[_globalStyles.queries.small]={transition:"transform "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0, 0.25, 0.25, 1)"},_animateOutModal),sideNav:(_sideNav={display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",maxWidth:"5%",width:48,top:0,height:"100%",color:"white",userSelect:"none",WebkitTapHighlightColor:"transparent",":hover":{color:_globalStyles.colors.white,opacity:.5,cursor:"pointer"}},_sideNav[_globalStyles.queries.small]={display:"none"},_sideNav),prev:{left:0},next:{right:0},topLeftCorner:{display:"flex",flexDirection:"row",alignItems:"center",height:60,paddingLeft:6,zIndex:1},topRightCorner:{display:"flex",flexDirection:"row",alignItems:"center",height:60,paddingRight:6,zIndex:1},topLeftCornerInModal:{position:"absolute",left:0,top:0},topRightCornerInModal:{position:"absolute",right:0,top:0},withTopBar:(_withTopBar={top:_globalStyles.constants.topBarHeightDesktop},_withTopBar[_globalStyles.queries.small]={top:_globalStyles.constants.topBarHeightMobile},_withTopBar)})
var icons={angleLeft:{path:"M58.622 8.272q0 1.32-1.056 2.376l-39.512 39.512 39.512 39.512q.968.968.968 2.288t-.968 2.288l-5.016 5.104q-.968.968-2.288.968t-2.376-.968l-46.816-46.904q-.968-.968-1.056-2.288 0-1.32 1.056-2.376l46.816-46.816q.968-.968 2.376-.968t2.288.968l5.016 5.016q1.056.968 1.056 2.288z",width:58.421,height:100},angleRight:{path:"M58.524 50.16q0 1.32-.968 2.288l-46.904 46.904q-.968.968-2.288.968t-2.376-.968l-5.016-5.104q-.968-.968-.968-2.288t.968-2.288l39.512-39.512-39.512-39.512q-.968-.968-.968-2.376t.968-2.288l5.016-5.016q.968-.968 2.376-.968t2.288.968l46.904 46.816q.968 1.056.968 2.376z",width:58.333,height:100}}
exports.default=Modal
exports.ModalFooter=_modalFooter2.default
exports.ModalHeader=_modalHeader2.default
});
KAdefine("javascript/components/modal-package/modal-header.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _largeCornerInHeader,_smallCornerInHeader,_babelHelpers$extends,_titleLong
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var ModalHeader=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function l(){var e=this.props,r=e.children,l=e.backgroundColor,a=e.borderColor,t=e.style,s=e.topLeftCorner,o=e.topRightCorner
var n=babelHelpers.extends({color:_globalStyles.colors.gray17},t,{boxShadow:"0 1px 0 0 "+(a||"")})
if(l){n.backgroundColor=l}var i=o?"large":s?"small":null
var d=typeof r==="string"&&r.length>32
return React.createElement("div",{style:n,className:(0,_aphrodite.css)(styles.header)},i&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topLeftCornerInHeader,i==="large"&&styles.largeCornerInHeader,i==="small"&&styles.smallCornerInHeader)},s),React.createElement("h1",{className:(0,_aphrodite.css)(styles.title,d&&styles.titleLong),"data-test-id":"modal-title",id:this.props.id},r),i&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topRightCornerInHeader,i==="large"&&styles.largeCornerInHeader,i==="small"&&styles.smallCornerInHeader)},o))}
return r}(_react.Component)
ModalHeader.defaultProps={borderColor:"rgba(0, 0, 0, 0.15)"}
var headerHeight=60
var styles=_aphrodite.StyleSheet.create({header:{display:"flex",flexDirection:"row",flexGrow:0,flexShrink:0,position:"relative",zIndex:1,height:headerHeight,borderTopLeftRadius:_constants2.default.baseBorderRadius,borderTopRightRadius:_constants2.default.baseBorderRadius},largeCornerInHeader:(_largeCornerInHeader={flexBasis:152},_largeCornerInHeader[_globalStyles.queries.small]={flexBasis:56},_largeCornerInHeader),smallCornerInHeader:(_smallCornerInHeader={flexBasis:56},_smallCornerInHeader[_globalStyles.queries.small]={flexBasis:56},_smallCornerInHeader),topLeftCornerInHeader:{justifyContent:"flex-start"},topRightCornerInHeader:{justifyContent:"flex-end"},title:babelHelpers.extends({},_globalStyles.typography.subheadingDesktop,(_babelHelpers$extends={flex:1,flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center",paddingLeft:6,paddingRight:6,marginBottom:0},_babelHelpers$extends[_globalStyles.queries.small]=babelHelpers.extends({},_globalStyles.typography.subheadingMobile),_babelHelpers$extends)),titleLong:(_titleLong={},_titleLong[_globalStyles.queries.small]=babelHelpers.extends({},_globalStyles.typography.smallHeadingMobile),_titleLong)})
exports.default=ModalHeader
});
KAdefine("javascript/components/modal-package/modal-footer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.ModalFooter=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var ModalFooter=exports.ModalFooter=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function t(){var e=this.props,r=e.children,t=e.style
return React.createElement("div",{className:(0,_aphrodite.css)(styles.footer),style:t},r)}
return r}(_react.Component)
var headerHeight=60
var styles=_aphrodite.StyleSheet.create({footer:{display:"flex",flexDirection:"row",alignItems:"center",boxShadow:"0 -1px 0 0 rgba(0, 0, 0, 0.15)",flexGrow:0,flexShrink:0,position:"relative",height:headerHeight}})
exports.default=ModalFooter
});
KAdefine("javascript/components/modal-package/modal-launcher.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var ModalLauncher=function(e){babelHelpers.inherits(r,e)
function r(){var o,t,a
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,l=Array(n),d=0;d<n;d++){l[d]=arguments[d]}return a=(o=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),t),t.showModal=function(e){var r=t.props.modal
e.preventDefault()
if(!t._modalContainer){var o=document.createElement("div")
o.setAttribute("role","dialog")
if(!document.body){throw new Error("No body found in document!")}document.body.appendChild(o)
var a=r&&React.cloneElement(r,{onClose:t.hideModal})
_reactDom2.default.render(a,o)
t._modalContainer=o}},t.hideModal=function(){var e=t.props.focusId
if(t._modalContainer){if(!document.body){throw new Error("No body found in document!")}document.body.removeChild(t._modalContainer)
_reactDom2.default.unmountComponentAtNode(t._modalContainer)
t._modalContainer=null}var r=document.getElementById(e)
if(r){r.focus()}},o),babelHelpers.possibleConstructorReturn(t,a)}r.prototype.render=function o(){var e=this.props,r=e.children,o=e.ariaLabel
return r(this.showModal,o)}
return r}(_react.Component)
module.exports=ModalLauncher
});
KAdefine("javascript/components/modal-package/scroll-disabler.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _util=require("./util.js")
var needsHackyMobileSafariScrollDisabler=function(){var e=window.navigator.userAgent
return e.indexOf("iPad")>-1||e.indexOf("iPhone")>-1}()
var ScrollDisabler=function(e){babelHelpers.inherits(l,e)
function l(){babelHelpers.classCallCheck(this,l)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}l.prototype.componentWillMount=function o(){if(l.numModalsOpened===0){var e=(0,_util.getBody)()
l.oldOverflow=e.style.overflow
l.oldScrollY=window.scrollY
if(needsHackyMobileSafariScrollDisabler){l.oldPosition=e.style.position
l.oldWidth=e.style.width
l.oldTop=e.style.top}e.style.overflow="hidden"
if(needsHackyMobileSafariScrollDisabler){e.style.position="fixed"
e.style.width="100%"
e.style.top=-l.oldScrollY+"px"}}l.numModalsOpened++}
l.prototype.componentWillUnmount=function t(){l.numModalsOpened--
if(l.numModalsOpened===0){var e=(0,_util.getBody)()
e.style.overflow=l.oldOverflow
if(needsHackyMobileSafariScrollDisabler){e.style.position=l.oldPosition
e.style.width=l.oldWidth
e.style.top=l.oldTop}window.scrollTo(0,l.oldScrollY)}}
l.prototype.render=function r(){return null}
return l}(_react.Component)
ScrollDisabler.numModalsOpened=0
exports.default=ScrollDisabler
});
KAdefine("javascript/components/modal-package/two-column-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.DefaultContentLayout=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _modal=require("./modal.jsx")
var _modal2=babelHelpers.interopRequireDefault(_modal)
var _wonderBlocksCore=require("wonder-blocks-core")
var _wonderBlocksColor=require("wonder-blocks-color")
var _wonderBlocksColor2=babelHelpers.interopRequireDefault(_wonderBlocksColor)
var TwoColumnModal=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function o(){var e=this.props,r=e.onClose,o=e.content,t=e.preview,l=e.footer,n=e.style,a=babelHelpers.objectWithoutProperties(e,["onClose","content","preview","footer","style"])
return React.createElement(_modal2.default,babelHelpers.extends({style:[styles.modal,n],onClose:r},a),React.createElement(_wonderBlocksCore.View,{style:styles.container},React.createElement(_wonderBlocksCore.View,{style:styles.previewContainer},t),React.createElement(_wonderBlocksCore.View,{style:styles.contentContainer},React.createElement(_wonderBlocksCore.View,{style:[l&&styles.scroll]},o),l&&React.createElement(_wonderBlocksCore.View,{style:styles.footer},l))))}
return r}(React.Component)
exports.default=TwoColumnModal
var DefaultContentLayout=exports.DefaultContentLayout=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function o(){return React.createElement(_wonderBlocksCore.View,{style:styles.content},this.props.children)}
return r}(React.Component)
var styles=_aphrodite.StyleSheet.create({modal:{height:464,width:888,display:"flex",flexDirection:"column",overflow:"hidden"},container:{display:"flex",flex:1,flexDirection:"row",minHeight:0},previewContainer:{display:"flex",backgroundColor:_wonderBlocksColor2.default.darkBlue,flex:1,overflow:"hidden"},contentContainer:{flex:1,display:"flex",flexDirection:"column"},content:{paddingTop:64,paddingRight:64,paddingLeft:52,flex:1},scroll:{overflow:"scroll",flex:1},footer:{borderTop:"solid 1px "+_wonderBlocksColor2.default.offBlack32,display:"flex",alignItems:"center",flexDirection:"row-reverse",height:72,padding:"0 16px"}})
});
KAdefine("javascript/components/modal-package/backdrop.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var Backdrop=function(e){babelHelpers.inherits(a,e)
function a(){babelHelpers.classCallCheck(this,a)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}a.prototype.render=function t(){var e=this.props,a=e.willBeVisible,t=e.inline,r=e.onClick,s=e.animate
var n=s!==null?[styles.backdrop,s==="in"&&styles.animateInBackdrop,s==="out"&&styles.animateOutBackdrop,!a&&styles.backdropTransparent,a&&styles.backdropSemiTransparent]:[styles.backdrop,styles.backdropSemiTransparent]
return React.createElement("div",{onClick:r,className:_aphrodite.css.apply(undefined,n.concat([t&&styles.inlineBackdrop]))})}
return a}(_react.Component)
var TRANSITION_ANIMATION_DURATION=300
var styles=_aphrodite.StyleSheet.create({backdrop:{backgroundColor:_constants2.default.dark,bottom:0,left:0,position:"fixed",right:0,top:0},inlineBackdrop:{position:"absolute"},backdropTransparent:{opacity:0},backdropSemiTransparent:{opacity:_globalStyles.modalBackdropOpacity},animateInBackdrop:{transition:"opacity "+TRANSITION_ANIMATION_DURATION+"ms\n            cubic-bezier(0.4, 0.0, 0.6, 1.0)"},animateOutBackdrop:{transition:"opacity "+TRANSITION_ANIMATION_DURATION+"ms\n            cubic-bezier(0.4, 0.0, 0.6, 1.0)"}})
exports.default=Backdrop
});
KAdefine("javascript/components/modal-package/util.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getBody=getBody
function getBody(){var e=document.body
if(!e){throw new Error("document.body does not exist")}return e}
});
KAdefine("javascript/components/modal-package/types.js", function(require, module, exports) {
});
KAdefine("javascript/components/modal-package/article-modal.jsx", function(require, module, exports) {
var _modal,_babelHelpers$extends
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _analytics=require("../../analytics-package/analytics.js")
var _analytics2=babelHelpers.interopRequireDefault(_analytics)
var _pageloadMarker=require("../../analytics-package/pageload-marker.jsx")
var _pageloadMarker2=babelHelpers.interopRequireDefault(_pageloadMarker)
var _modal2=require("./modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _interactionUtils=require("../../components/modal-package/interaction-utils.js")
var _scrollTracking=require("../../shared-components-package/scroll-tracking.jsx")
var _scrollTracking2=babelHelpers.interopRequireDefault(_scrollTracking)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _khanFetch=require("../../shared-package/khan-fetch.js")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _clientDomainLink=require("../../components/client-link-package/client-domain-link.jsx")
var _clientDomainLink2=babelHelpers.interopRequireDefault(_clientDomainLink)
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _asyncCreateAssignmentHeader=require("../../assignments-async-loader-package/async-create-assignment-header.jsx")
var _asyncCreateAssignmentHeader2=babelHelpers.interopRequireDefault(_asyncCreateAssignmentHeader)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _importLegacyCss=require.importLegacyCSS
var _importLegacyCss2=babelHelpers.interopRequireDefault(_importLegacyCss)
var _require=require("../../shared-package/i18n.js"),$_=_require.$_
var ArticleModal=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,n
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),l=0;l<s;l++){i[l]=arguments[l]}return n=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),r),r.state={Perseus:null,perseusContent:null,footerOpacity:1},r.handleScroll=function(e){var t=e.target,a=t.scrollTop,n=t.scrollHeight,s=t.offsetHeight
if(r._isMounted){var i=Math.min((n-(a+s))/footerHeight,1)
if(i!==r.state.footerOpacity){r.setState({footerOpacity:i})}}},r.trackScrollPosition=function(e,t){if(r._isMounted){var a=t.target,n=a.scrollTop,s=a.scrollHeight,i=a.offsetHeight
var l=(0,_interactionUtils.computeArticleScrollParams)(n,i,s,r._lastReportedParams)
if(l){r._lastReportedParams=l
r.logConversions("article_scroll",l)}}},r.onNavigateToContent=function(){var e=r.props,t=e.article,a=e.onClose
_bigbingo2.default.markConversionsWithExtras([{id:"content_modal_navigate_to_page",extra:{content_id:t.contentId,kind:t.kind,slug:t.slug}}])
a()},a),babelHelpers.possibleConstructorReturn(r,n)}t.prototype.componentDidMount=function a(){var e=this
this._isMounted=true
this.fetchContent()
Promise.all([require.dynimport("../../perseus-all-package/perseus.js"),require.dynimport("../../perseus-merged-extra-widgets-package/extra-widgets.js"),(0,_importLegacyCss2.default)("perseus-renderer.css"),(0,_importLegacyCss2.default)("discussion.css"),(0,_importLegacyCss2.default)("moderation.css")]).then(function(t){var a=t[0]
if(e._isMounted){a.init({skipMathJax:true,loadExtraWidgets:true}).then(function(){e.setState({Perseus:a})})}})}
t.prototype.componentWillReceiveProps=function r(e){if(this.props.article.slug!==e.article.slug){this.setState({perseusContent:null},this.fetchContent.bind(this))}}
t.prototype.componentDidUpdate=function n(e,t){var a=this
var r=t.Perseus&&t.perseusContent
var n=this.state.Perseus&&this.state.perseusContent
if(!r&&n){window.setTimeout(function(){return a.logConversions("article_view")},1e3)}}
t.prototype.componentWillUnmount=function s(){this._isMounted=false}
t.prototype.fetchContent=function i(){var e=this
var t=this.props.article.slug;(0,_khanFetch.khanFetch)("/api/internal/articles_by_slug/"+t).then(function(e){return e.json()}).then(function(t){if(e._isMounted&&t.perseusContent){e.setState({perseusContent:JSON.parse(t.perseusContent)})}})}
t.prototype.logConversions=function l(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{}
if(this._isMounted){var a=this.props.article.contentId
t.conversion_id=e
if(this.props.topicSlug){t.topic_slug=this.props.topicSlug}t.article_slug=this.props.article.slug
t.platform="web-client"
t.occurred_at_seconds=Math.floor(Date.now()/1e3)
t.ga_referrer=_analytics2.default.getGAReferrer()
var r=(0,_khanFetch.encodeParams)(t);(0,_khanFetch.khanFetch)("/api/internal/user/article/"+a+"/log?"+r,{method:"POST",headers:{"Content-Type":"application/json"}})
this.props.onArticleComplete()}}
t.prototype.renderContentLink=function o(){var e=this.props,t=e.domain,a=e.article,r=e.contentLink,n=e.openLinkInNewTab
var s=r||$_(null,"Go to lesson page")
return React.createElement("span",{className:(0,_aphrodite.css)(styles.navLink)},React.createElement(_clientDomainLink2.default,{target:n?"_blank":"_self",domain:t,to:a.nodeUrl,onClick:this.onNavigateToContent,juicy:t==="default"},s))}
t.prototype.renderAssignmentHeader=function c(){var e=this.props,t=e.domain,a=e.article,r=e.initialAssignment
var n=a.kind+":"+a.contentId
return React.createElement(_asyncCreateAssignmentHeader2.default,{domain:t,contentDescriptor:n,contentTitle:a.title,initialAssignment:r})}
t.prototype.render=function u(){var e=this
var t=this.props,a=t.linkToContent,r=t.nextItem,n=t.onClose,s=t.navigator,i=t.shouldAnimate,l=t.shouldBackdropDismiss,o=t.fromAnotherModal,c=t.visible,u=t.hideFooter,d=t.shouldRenderAssignmentHeader,p=t.title,g=t.referrer,_=t.hostInBody
var m=this.state,h=m.perseusContent,f=m.Perseus
var v=false
var b=_ka2.default.featureFlag("FINAL_MULTIPLE_CHOICE_STYLES")?"final":"intermediate"
var y={trackInteraction:function S(t){var a={widget_id:t.id,widget_status:t.status,widget_type:t.type}
e.logConversions("article_widget",a)},styling:{radioStyleVersion:b},isMobile:v,customKeypad:v,inModal:true}
var k=React.createElement("div",{className:(0,_aphrodite.css)(styles.spinnerContainer)},React.createElement(_spinner2.default,null))
if(h&&f){k=React.createElement(_scrollTracking2.default,{debounce:true,delayMs:2e3,onScroll:this.trackScrollPosition},React.createElement("div",{className:(0,_aphrodite.css)(styles.contentContainer),onScroll:function q(t){return e.handleScroll(t)}},React.createElement(f.ArticleRenderer,{apiOptions:y,json:h,useNewStyles:true})))}var C=void 0
var H={paddingLeft:_globalStyles2.default.constants.moduleHorizontalPaddingSmall,paddingRight:_globalStyles2.default.constants.moduleHorizontalPaddingSmall}
if(r){var R=null
if(g==="student-assignments-table"){R=$_(null,"Next assignment")}else if(r.kind==="Article"){R=$_(null,"Next article")}else if(r.kind==="Exercise"){R=$_(null,"Next exercise")}else if(r.kind==="Video"){R=$_(null,"Next video")}else if(r.kind==="InterspersedQuiz"){if(r.type==="quiz"){R=$_(null,"Take quiz")}else if(r.type==="test"){R=$_(null,"Take test")}else{console.warn("Unhandled InterspersedQuiz type: "+r.type)
R=$_(null,"Next item")}}else{R=$_(null,"Next item")
console.warn("Unhandled item type: "+r.kind)}C=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({justifyContent:"flex-end"},H)},React.createElement(_button2.default,{onClick:function x(){if(s&&s.onNext){s.onNext()}else{n()}},width:footerActionButtonWidth},R))}else{C=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({},H)})}if(u){C=null}return React.createElement("div",null,React.createElement(_modal3.default,{navigator:s,onClose:n,shouldAnimate:i,shouldBackdropDismiss:l,fromAnotherModal:o,topRightElements:a&&this.renderContentLink(),style:styles.modal,visible:c,restrictFocusToModal:!d,topBar:d&&this.renderAssignmentHeader(),hostInBody:_},React.createElement(_modal2.ModalHeader,null,p),k,C,React.createElement(_pageloadMarker2.default,{key:p,pageName:"article_modal",markFullyInteractiveOnMount:true,markSufficientlyUsable:"mounted"})))}
return t}(_react.Component)
ArticleModal.defaultProps={shouldRenderAssignmentHeader:_ka2.default.featureFlag("SHOW_ASSIGNMENTS")}
var footerHeight=96
var footerActionButtonWidth=136
var styles=_aphrodite.StyleSheet.create({contentContainer:{flexGrow:1,height:"100%",overflow:"scroll",paddingTop:32,WebkitOverflowScrolling:"touch"},modal:(_modal={width:"90%",maxWidth:_globalStyles2.default.constants.contentModalWidth,height:"90%"},_modal[_globalStyles2.default.queries.small]={width:"100%",height:"100%"},_modal),spinnerContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},navLink:babelHelpers.extends({},_globalStyles2.default.typography.labelMedium,(_babelHelpers$extends={paddingRight:24},_babelHelpers$extends[_globalStyles2.default.queries.small]={display:"none"},_babelHelpers$extends))})
module.exports=ArticleModal
});
KAdefine("javascript/components/modal-package/exercise-modal.jsx", function(require, module, exports) {
var _modal,_babelHelpers$extends
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _modal2=require("./modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _twoColumnModal=require("./two-column-modal.jsx")
var _twoColumnModal2=babelHelpers.interopRequireDefault(_twoColumnModal)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _asyncCreateAssignmentHeader=require("../../assignments-async-loader-package/async-create-assignment-header.jsx")
var _asyncCreateAssignmentHeader2=babelHelpers.interopRequireDefault(_asyncCreateAssignmentHeader)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _wonderBlocksColor=require("wonder-blocks-color")
var _wonderBlocksColor2=babelHelpers.interopRequireDefault(_wonderBlocksColor)
var _importLegacyCss=require.importLegacyCSS
var _importLegacyCss2=babelHelpers.interopRequireDefault(_importLegacyCss)
var _require=require("../../shared-package/i18n.js"),$_=_require.$_
var Analytics=require("../../analytics-package/analytics.js")
var editContentIcon={path:"M41.209 53.753l5.39 0l0 5.39l3.136 0l6.468-6.517-8.477-8.526-6.517 6.517l0 3.136zm33.173-34.937q-.882-.882-1.862.049l-19.6 19.6q-.931.98-.049 1.862t1.862-.049l19.6-19.6q.931-.98.049-1.862zm-38.563 45.668l0-16.121l37.632-37.632 16.17 16.121-37.632 37.632l-16.17 0zm43.022-12.397l0 10.633q-.049 6.713-4.753 11.417t-11.368 4.704l-46.599 0q-6.713 0-11.417-4.753t-4.704-11.368l0-46.599q0-6.664 4.753-11.417t11.368-4.704l46.599 0q3.528 0 6.566 1.372.833.392.98 1.323t-.49 1.617l-2.744 2.744q-.784.784-1.96.441t-2.352-.343l-46.599 0q-3.675 0-6.321 2.646t-2.646 6.321l0 46.599q0 3.675 2.646 6.321t6.321 2.646l46.599 0q3.675 0 6.321-2.646t2.646-6.321l0-7.056q0-.735.49-1.225l3.577-3.577q.833-.833 1.96-.392t1.127 1.617zm7.203-51.646q2.254 0 3.773 1.568l8.526 8.526q1.568 1.568 1.568 3.822t-1.568 3.773l-5.145 5.145-16.121-16.121 5.145-5.145q1.568-1.568 3.822-1.568z",width:100,height:78.912}
var editMetadataIcon={path:"M21.988 81.408q0-1.59-1.166-2.756-1.113-1.113-2.703-1.113t-2.756 1.166-1.166 2.703 1.166 2.703 2.756 1.166 2.756-1.166 1.113-2.703zm-21.995 3.869q0-3.286 2.279-5.512l41.287-41.234q2.385 5.936 6.943 10.494t10.494 6.943l-41.34 41.287q-2.173 2.226-5.353 2.226t-5.565-2.226l-6.466-6.519q-2.279-2.173-2.279-5.459zm99.375-55.544q0 2.226-1.378 6.307-2.862 8.109-9.964 13.144t-15.635 5.088q-11.183 0-19.186-7.95-7.95-7.897-7.95-19.133t7.95-19.186 19.186-8.003q3.498 0 7.367 1.007t6.466 2.809q1.007.689 1.007 1.696t-1.007 1.696l-17.702 10.229l0 13.568l11.66 6.466q.318-.159 8.374-5.088t8.904-4.876q1.908 0 1.908 2.226z",width:99.893,height:100}
var ExerciseModal=function(e){babelHelpers.inherits(t,e)
t.preloadResources=function a(){Promise.all([require.dynimport("../../exercises-package/components/practice-exercise.jsx"),require.dynimport("../../exercises-package/stateful-exercise-manager.jsx"),require.dynimport("../../perseus-all-package/perseus.js"),require.dynimport("../../perseus-merged-extra-widgets-package/extra-widgets.js"),(0,_importLegacyCss2.default)("perseus-renderer.css"),(0,_importLegacyCss2.default)("tasks.css")])}
function t(a){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this,a))
r._isMounted=false
r.handleNextTask=function(){r.props.onNextTask()
r.setState({displayCard:r.props.StartOfTaskCard?"start":"exercise"})}
r.handlePracticeAgain=function(){r.setState({displayCard:r.props.StartOfTaskCard?"start":"exercise"},r.props.onPracticeAgain)}
r.handleTaskComplete=function(e,t,a,s){var i=function o(){if(r.props.onTaskComplete){r.props.onTaskComplete(e,t,a,s)}}
if(r.props.SimpleEndOfTaskCard||r.props.EndOfQuizCard){r.setState({displayCard:"end"},i)}else{i()}}
r.onNavigateToContent=function(){if(r.props.type!=="Exercise"){return}var e=r.props,t=e.exercise,a=e.onClose
_bigbingo2.default.markConversionsWithExtras([{id:"content_modal_navigate_to_page",extra:{content_id:t.contentId,kind:t.kind,slug:t.slug}}])
if(a){a()}}
r.advancePastStartOfTaskCard=function(){r.setState({displayCard:"exercise"})}
var s=a.StartOfTaskCard||a.StartOfQuizCard
r.state={PracticeExercise:null,StatefulExerciseManager:null,displayCard:s?"start":"exercise",loaded:false}
return r}t.prototype.componentDidMount=function r(){var e=this
this._isMounted=true
Promise.all([require.dynimport("../../exercises-package/components/practice-exercise.jsx"),require.dynimport("../../exercises-package/stateful-exercise-manager.jsx"),require.dynimport("../../perseus-all-package/perseus.js"),require.dynimport("../../perseus-merged-extra-widgets-package/extra-widgets.js"),(0,_importLegacyCss2.default)("perseus-renderer.css"),(0,_importLegacyCss2.default)("tasks.css")]).then(function(t){var a=t[0],r=t[1],s=t[2]
if(e._isMounted){s.init({skipMathJax:true,loadExtraWidgets:true})
e.setState({PracticeExercise:a,StatefulExerciseManager:r,loaded:true})}})}
t.prototype.componentWillUnmount=function s(){this._isMounted=false}
t.prototype.reportPageTimings=function i(){Analytics.reportPageLifecycleTiming("exercise_modal",true,true)}
t.prototype.practiceAgain=function o(){var e=this.props.onPracticeAgain
if(this.exerciseManager){this.exerciseManager.loadData(true)
this.setState({displayCard:this.props.StartOfTaskCard?"start":"exercise"},e)}else{this.setState({displayCard:this.props.StartOfQuizCard?"start":"exercise"},e)}}
t.prototype.renderLoadedContents=function n(){var e=this
var t=this.props,a=t.domain,r=t.referrer,s=t.masteryEnabled,i=t.nextItem,o=t.onClose,n=t.onCheckAnswer,l=t.onReloadTask,d=t.practiceAgainMessage,p=t.inPractice
var c=this.state,u=c.PracticeExercise,m=c.StatefulExerciseManager
var h=void 0
var g=void 0
if(this.props.type==="Exercise"){var f=this.props,C=f.exercise,k=f.tutorial
h={exercise:C,exerciseName:C.slug,topic:k.slug}
g=C.contentId}else if(this.props.type==="Task"){var y=this.props,v=y.taskData,b=y.topicSlug
h={taskData:v,topic:b}
g=v.taskJson.id}else{throw new Error("Invalid props passed to ExerciseModal")}return React.createElement(m,babelHelpers.extends({key:g,ref:function _(t){return e.exerciseManager=t},ExerciseComponent:this.props.ExerciseComponent||u,EndOfTaskCard:this.props.EndOfTaskCard,domain:a,inPractice:p,initialCards:null,initialItem:null,inModal:true,referrer:r,masteryEnabled:s,nextItem:i,nextTaskKind:i?i.kind:null,onComponentUsable:this.reportPageTimings,onCloseTask:o,onCheckAnswer:n,onNextTask:this.handleNextTask,onPracticeAgain:this.handlePracticeAgain,onReloadTask:l,onTaskComplete:this.handleTaskComplete,onShowRelatedVideo:this.props.onShowRelatedVideo,practiceAgainMessage:d,onUpdateRecommendations:this.props.onUpdateRecommendations},h))}
t.prototype.maybeRenderEditorIcons=function l(){if(this.props.type!=="Exercise"||!this.props.showEditorShortcuts){return null}var e=this.props,t=e.exercise,a=e.tutorial
var r="/devadmin/content/exercises/"+t.contentId+"/items"
var s="/devadmin/content#"+a.id+"-Exercise:"+t.contentId
return[React.createElement("a",{key:"edit-items",href:r,style:{textDecoration:"none"},target:"_blank",title:"Edit this content"},React.createElement(_icon2.default,{icon:editContentIcon})),React.createElement("a",{key:"edit-meta",href:s,style:{margin:"0 8px",textDecoration:"none"},target:"_blank",title:"Edit metadata for this content"},React.createElement(_icon2.default,{icon:editMetadataIcon}))]}
t.prototype.maybeRenderContentLink=function d(){if(this.props.type==="Exercise"&&this.props.linkToContent){var e=this.props.exercise
return React.createElement("span",{className:(0,_aphrodite.css)(styles.navLink)},React.createElement(_clientLink2.default,{to:e.nodeUrl,onClick:this.onNavigateToContent,style:styles.lessonPageLink},$_(null,"Go to lesson page")))}}
t.prototype.renderAssignmentHeader=function p(){if(this.props.type==="Exercise"){var e=this.props,t=e.domain,a=e.exercise
var r=a.kind+":"+a.contentId
return React.createElement(_asyncCreateAssignmentHeader2.default,{domain:t,contentDescriptor:r,contentTitle:a.title})}if(this.props.type==="Task"&&this.props.contentDescriptor){var s=this.props,i=s.domain,o=s.contentDescriptor,n=s.title
return React.createElement(_asyncCreateAssignmentHeader2.default,{domain:i,contentDescriptor:o,contentTitle:n})}}
t.prototype.renderTopRightElements=function c(){var e=this.props.coachPreviewSwitcher
return e||this.maybeRenderEditorIcons()||this.maybeRenderContentLink()}
t.prototype.render=function u(){var e=this.props,t=e.shouldAnimate,a=e.onRequestClose,r=e.fromAnotherModal,s=e.onClose,i=e.navigator,o=e.shouldBackdropDismiss,n=e.title,l=e.type,d=e.visible,p=e.SimpleEndOfTaskCard,c=e.masteryEnabled,u=e.contentDescriptor
var m=this.state,h=m.displayCard,g=m.loaded
var f=g
if(this.props.type==="Task"){var C=this.props.taskData
f=f&&C}var k=this.props.shouldRenderAssignmentHeader&&(l==="Exercise"||l==="Task"&&u)
var y=c&&h==="start"&&this.props.StartOfQuizCard
var v=c&&h==="end"&&this.props.EndOfQuizCard
if(y){return React.createElement(_twoColumnModal2.default,{onRequestClose:a,onClose:s,navigator:i,shouldAnimate:t,shouldBackdropDismiss:o,fromAnotherModal:r,style:styles.modal,topRightElements:this.renderTopRightElements(),visible:d,restrictFocusToModal:!k,topBar:k&&this.renderAssignmentHeader(),footer:this.props.StartOfQuizCard&&this.props.StartOfQuizCard.Footer(this.advancePastStartOfTaskCard),content:this.props.StartOfQuizCard&&this.props.StartOfQuizCard.Summary,preview:this.props.StartOfQuizCard&&this.props.StartOfQuizCard.Cta})}else if(v){return React.createElement(_twoColumnModal2.default,{onRequestClose:a,onClose:s,navigator:i,shouldAnimate:t,shouldBackdropDismiss:o,fromAnotherModal:r,style:styles.modal,topRightElements:this.renderTopRightElements(),visible:d,restrictFocusToModal:!k,topBar:k&&this.renderAssignmentHeader(),footer:this.props.EndOfQuizCard&&this.props.EndOfQuizCard.Footer,content:this.props.EndOfQuizCard&&this.props.EndOfQuizCard.Summary,preview:this.props.EndOfQuizCard&&this.props.EndOfQuizCard.Cta})}else{return React.createElement("div",null,React.createElement(_modal3.default,{onRequestClose:a,onClose:s,navigator:i,shouldAnimate:t,shouldBackdropDismiss:o,fromAnotherModal:r||c,style:styles.modal,topRightElements:this.renderTopRightElements(),visible:d,restrictFocusToModal:!k,topBar:k&&this.renderAssignmentHeader()},React.createElement(_modal2.ModalHeader,null,n),h==="start"&&this.props.StartOfTaskCard&&this.props.StartOfTaskCard.Body,h==="start"&&this.props.StartOfTaskCard&&React.createElement(_modal2.ModalFooter,null,this.props.StartOfTaskCard.Footer(this.advancePastStartOfTaskCard)),React.createElement("div",{className:(0,_aphrodite.css)(styles.modalContents,h!=="exercise"&&this.props.StartOfTaskCard&&styles.hidden,c&&h!=="exercise"&&styles.none)+" bibliotron-exercise task-container"},!f&&!c&&React.createElement("div",{className:(0,_aphrodite.css)(styles.loadingContainer)},React.createElement(_spinner2.default,null)),f&&this.renderLoadedContents()),h==="end"&&p&&p.Body,h==="end"&&p&&React.createElement(_modal2.ModalFooter,null,p.Footer)))}}
return t}(React.Component)
ExerciseModal.defaultProps={onRequestClose:function e(){return true},layout:"standard",shouldRenderAssignmentHeader:_ka2.default.featureFlag("SHOW_ASSIGNMENTS")}
var exerciseFooterHeight=60
var styles=_aphrodite.StyleSheet.create({hidden:{visibility:"hidden",height:0,maxHeight:0},none:{display:"none"},modalContents:{display:"flex",position:"relative",overflow:"hidden",flexGrow:1,borderBottomLeftRadius:_globalStyles2.default.borderRadius,borderBottomRightRadius:_globalStyles2.default.borderRadius},modal:(_modal={padding:0,borderRadius:_globalStyles2.default.borderRadius,width:"90%",maxWidth:_globalStyles2.default.constants.contentModalWidth,height:"90%",maxHeight:768,overflow:"hidden"},_modal[_globalStyles2.default.queries.small]={minWidth:0,width:"100%",height:"100%",borderRadius:0},_modal),loadingContainer:{position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:exerciseFooterHeight},navLink:babelHelpers.extends({},_globalStyles2.default.typography.labelMedium,(_babelHelpers$extends={paddingRight:18},_babelHelpers$extends[_globalStyles2.default.queries.small]={display:"none"},_babelHelpers$extends)),lessonPageLink:{color:_wonderBlocksColor2.default.blue}})
module.exports=ExerciseModal
});
KAdefine("javascript/components/modal-package/video-modal.jsx", function(require, module, exports) {
var _practicePrompt,_modal,_contentContainer,_babelHelpers$extends
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _modal2=require("./modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _clientDomainLink=require("../../components/client-link-package/client-domain-link.jsx")
var _clientDomainLink2=babelHelpers.interopRequireDefault(_clientDomainLink)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _asyncCreateAssignmentHeader=require("../../assignments-async-loader-package/async-create-assignment-header.jsx")
var _asyncCreateAssignmentHeader2=babelHelpers.interopRequireDefault(_asyncCreateAssignmentHeader)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _importLegacyCss=require.importLegacyCSS
var _importLegacyCss2=babelHelpers.interopRequireDefault(_importLegacyCss)
var _constants3=require("../../video-package/constants.js")
var _util=require("../../video-package/util.js")
var Analytics=require("../../analytics-package/analytics.js")
var i18n=require("../../shared-package/i18n.js")
var $_=i18n.$_
var VideoModal=function(e){babelHelpers.inherits(t,e)
function t(){var a,n,o
babelHelpers.classCallCheck(this,t)
for(var r=arguments.length,i=Array(r),l=0;l<r;l++){i[l]=arguments[l]}return o=(a=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),n),n.state={PracticeExericse:null,StatefulExerciseManager:null,KAVideoWrapper:null,VideoPlayerState:null,loaded:false,playerModel:null,initializePlayerModel:null,useBackIcon:false},n._isMounted=false,n.saveProgressOnClose=function(){var e=n.state,t=e.VideoPlayerState,a=e.playerModel
if(t&&a){a.setPlayerState(t.PAUSED)}},n.onNavigateToContent=function(){var e=n.props,t=e.video,a=e.onClose
_bigbingo2.default.markConversionsWithExtras([{id:"content_modal_navigate_to_page",extra:{content_id:t.id,kind:t.kind,slug:t.slug}}])
a()},a),babelHelpers.possibleConstructorReturn(n,o)}t.prototype.componentDidMount=function a(){var e=this
this._isMounted=true
Promise.all([require.dynimport("../../video-package/ka-video-wrapper.jsx"),require.dynimport("../../video-package/constants.js"),require.dynimport("../../video-package/initialize-player-model.js"),require.dynimport("../../discussion-package/discussion.js"),(0,_importLegacyCss2.default)("clarifications.css")]).then(function(t){var a=t[0],n=t[1].VideoPlayerState,o=t[2],r=t[3]
if(!e._isMounted){return}var i=e._getPlayerModel(e.props,o)
r.init({clarificationsEnabled:true,focusKind:"video"},i,true)
e.setState({KAVideoWrapper:a,VideoPlayerState:n,initializePlayerModel:o,playerModel:i})})
window.addEventListener("beforeunload",this.saveProgressOnClose)}
t.prototype.componentWillReceiveProps=function n(e){var t=this.state.initializePlayerModel
if(this.props.video.youtubeId!==e.video.youtubeId&&t){this.setState({playerModel:this._getPlayerModel(e,t)})}}
t.prototype.componentWillUnmount=function o(){this._isMounted=false
this.saveProgressOnClose()
window.removeEventListener("beforeunload",this.saveProgressOnClose)}
t.prototype._getPlayerModel=function r(e,t){var a=e.video,n=e.topicSlug
return t&&t(a,{slug:n})}
t.prototype.renderContentLink=function i(){var e=this.props,t=e.domain,a=e.video,n=e.contentLink,o=e.openLinkInNewTab
var r=n||$_(null,"Go to lesson page")
return React.createElement("span",{className:(0,_aphrodite.css)(styles.navLink)},React.createElement(_clientDomainLink2.default,{target:o?"_blank":"_self",domain:t,to:a.kaUrl,onClick:this.onNavigateToContent,juicy:t==="default"},r))}
t.prototype.renderAssignmentHeader=function l(){var e=this.props,t=e.domain,a=e.video,n=e.initialAssignment
var o=a.kind+":"+a.id
return React.createElement(_asyncCreateAssignmentHeader2.default,{domain:t,contentDescriptor:o,contentTitle:a.translatedTitle,initialAssignment:n})}
t.prototype.reportPageTimings=function s(){Analytics.reportPageLifecycleTiming("video_modal",true,true)}
t.prototype.isVideoStarted=function d(e){if(e===_constants3.VideoPlayerState.ENDED||(0,_util.isUnstartedOrCued)(e)){return false}return true}
t.prototype.onVideoStateChange=function c(e){var t=this.props,a=t.onVideoPlay,n=t.onVideoComplete
if(e===_constants3.VideoPlayerState.ENDED&&n){n()}else if(this.isVideoStarted(e)&&a){a()}}
t.prototype.render=function u(){var e=this
var t=this.props,a=t.video,n=t.domain,o=t.footer,r=t.linkToContent,i=t.shouldAnimate,l=t.fromAnotherModal,s=t.referrer,d=t.onBack,c=t.onClose,u=t.onPractice,p=t.navigator,m=t.nextItem,_=t.shouldAutoplay,g=t.shouldBackdropDismiss,f=t.startTime,v=t.useBackIcon,y=t.visible,b=t.attribution,h=t.shouldRenderAssignmentHeader,k=t.title,C=t.hostInBody
var x=this.state,S=x.KAVideoWrapper,H=x.VideoPlayerState,R=x.playerModel
var P=R&&S
var M=f&&{lastSecondWatched:f}
var q=React.createElement("div",{className:(0,_aphrodite.css)(styles.contentContainer,P&&styles.contentContainerLoaded)},P&&S!=null&&H!=null?React.createElement(S,{domain:n,hasNavigated:false,shouldAutoplay:_,video:a,navigateToNextItem:p&&p.onNext,nextContentItem:_&&m&&{translatedTitle:m.title,translatedDescription:m.kind==="InterspersedQuiz"?i18n._("Check your understanding across a range of skills"):m.description},playerModel:R,onComponentInteractive:this.reportPageTimings,onStateChanged:function j(t){return e.onVideoStateChange(t)},userVideo:M,inModal:true,attribution:b}):React.createElement("div",{className:(0,_aphrodite.css)(styles.spinnerContainer)},React.createElement(_spinner2.default,null)))
var E=void 0
var A={paddingLeft:_globalStyles2.default.constants.moduleHorizontalPaddingSmall,paddingRight:_globalStyles2.default.constants.moduleHorizontalPaddingSmall}
if(o===null){E=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({},A)})}else if(o){E=o}else if(u){E=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({justifyContent:"center"},A)},React.createElement("span",{className:(0,_aphrodite.css)(styles.practicePrompt)},$_(null,"'Feeling confident about this material?')")),React.createElement("a",{className:(0,_aphrodite.css)(styles.practiceLink),onClick:function L(e){return u()}},$_(null,"Check your understanding!")))}else if(m){var D=null
if(s==="student-assignments-table"){D=$_(null,"Next assignment")}else if(m.kind==="Article"){D=$_(null,"Next article")}else if(m.kind==="Exercise"){D=$_(null,"Next exercise")}else if(m.kind==="Video"){D=$_(null,"Next video")}else if(m.kind==="InterspersedQuiz"){if(m.type==="quiz"){D=$_(null,"Take quiz")}else if(m.type==="test"){D=$_(null,"Take test")}else{console.warn("Unhandled InterspersedQuiz type: "+m.type)
D=$_(null,"Next item")}}else{D=$_(null,"Next item")
console.warn("Unhandled item type: "+m.kind)}E=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({justifyContent:"flex-end"},A)},React.createElement(_button2.default,{onClick:function N(){if(p&&p.onNext){p.onNext()}else{c()}},width:footerActionButtonWidth},D))}else if(!v){E=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({justifyContent:"flex-end"},A)},React.createElement(_button2.default,{onClick:function V(){return c()},width:footerActionButtonWidth},$_(null,"Onward")))}else{E=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({},A)})}return React.createElement("div",null,React.createElement(_modal3.default,{onBack:d,onClose:c,navigator:p,shouldAnimate:i,shouldBackdropDismiss:g,fromAnotherModal:l,style:styles.modal,topRightElements:r&&this.renderContentLink(),useBackIcon:v,visible:y,restrictFocusToModal:!h,topBar:h&&this.renderAssignmentHeader(),hostInBody:C},React.createElement(_modal2.ModalHeader,null,k),q,E))}
return t}(_react.Component)
VideoModal.defaultProps={domain:"math",shouldRenderAssignmentHeader:_ka2.default.featureFlag("SHOW_ASSIGNMENTS")}
var footerActionButtonWidth=136
var styles=_aphrodite.StyleSheet.create({practicePrompt:(_practicePrompt={},_practicePrompt[_globalStyles2.default.queries.small]={display:"none"},_practicePrompt),practiceLink:{color:_globalStyles2.default.colors.kaGreen,marginLeft:"0.3em",textDecoration:"none",":hover":{color:_globalStyles2.default.colors.kaGreenHover,textDecoration:"underline"}},modal:(_modal={width:"90%",maxWidth:_globalStyles2.default.constants.contentModalWidth},_modal[_globalStyles2.default.queries.small]={width:"100%",height:"100%"},_modal),contentContainer:(_contentContainer={position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",overflow:"hidden",paddingBottom:100/(16/9)+"%"},_contentContainer[_globalStyles2.default.queries.small]={overflow:"visible",width:"100%"},_contentContainer),contentContainerLoaded:{backgroundColor:"black",paddingBottom:0},spinnerContainer:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},navLink:babelHelpers.extends({},_globalStyles2.default.typography.labelMedium,(_babelHelpers$extends={paddingRight:24},_babelHelpers$extends[_globalStyles2.default.queries.small]={display:"none"},_babelHelpers$extends)),assignmentHeaderWrapper:{position:"fixed",top:0,left:0,right:0,zIndex:_constants2.default.zindexAboveModal}})
module.exports=VideoModal
});
KAdefine("javascript/components/modal-package/interaction-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.computeArticleScrollParams=computeArticleScrollParams
var PAGE_SCROLL_REPORTING_CHUNKS=100/6
var defaultParams={percentage:0,scrolled_amount:0}
function computeArticleScrollParams(e,r,a){var t=arguments.length>3&&arguments[3]!==undefined?arguments[3]:defaultParams
var l=(e+r)/a*100
if(l<0){l=0}if(l>100){l=100}var c=Math.ceil(l/PAGE_SCROLL_REPORTING_CHUNKS)
var u=t.percentage
var n=Math.ceil(u/PAGE_SCROLL_REPORTING_CHUNKS)
if(c!==n||l===100&&u<100||l<100&&u===100){return{percentage:l,scrolled_amount:e}}else{return null}}
});
KAdefine("javascript/video-package/constants.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var VideoPlayerState=exports.VideoPlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,VIDEO_CUED:5}
});
KAdefine("javascript/video-package/util.js", function(require, module, exports) {
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _constants=require("./constants.js")
var _FULLSCREEN_EVENT_NAMES=["webkitfullscreenchange","mozfullscreenchange","msfullscreenchange","fullscreenchange"]
function addFullscreenChangeHandler(e){_FULLSCREEN_EVENT_NAMES.forEach(function(n){return document.addEventListener(n,e)})}function removeFullscreenChangeHandler(e){_FULLSCREEN_EVENT_NAMES.forEach(function(n){return document.removeEventListener(n,e)})}var exitFullscreen=function(){var e=["exitFullscreen","mozCancelFullScreen","webkitExitFullscreen"].find(function(e){return document[e]})
return e?function(){return document[e]()}:function(){}}()
var linkTimestampsToModel=function(){var e=void 0
document.body.addEventListener("click",function(n){var r=n.target
if(!(e&&r.classList.contains("youTube"))){return}var t=parseInt(r.dataset.seconds)
e.playVideo()
e.seekTo(t)})
return function n(r){e=r}}()
function isUnstartedOrCued(e){return e===_constants.VideoPlayerState.UNSTARTED||e===_constants.VideoPlayerState.VIDEO_CUED}function isYouTubeBlocked(){return _ka2.default.isZeroRated||_ka2.default.featureFlag("BLOCK_YOUTUBE")}var requireYouTubeAPI=function(){var e={INITIAL:Symbol("INITIAL"),REQUESTED:Symbol("REQUESTED"),FAILED:Symbol("FAILED"),LOADED:Symbol("LOADED")}
var n=window.YT&&window.YT.loaded?e.LOADED:e.INITIAL
var r={success:[],failure:[]}
function t(e){r[e].forEach(function(e){if(typeof e==="function"){e()}})
r[e]=[]}return function u(a,o){switch(n){case e.LOADED:return a()
case e.FAILED:return o()
case e.REQUESTED:break
default:var c=window.setTimeout(function(){n=e.FAILED
t("failure")},5e3)
var i=window.onYouTubeIframeAPIReady
var s=function f(){if(typeof i==="function"){i()}n=e.LOADED
window.clearTimeout(c)
t("success")}
window.onYouTubeIframeAPIReady=s
var l=document.getElementsByTagName("head")[0]
var d=document.createElement("script")
d.src="https://www.youtube.com/iframe_api"
l.insertBefore(d,l.firstChild)
n=e.REQUESTED}r.success.push(a)
r.failure.push(o)
return function E(){r.success=r.success.filter(function(e){return e!==a})
r.failure=r.failure.filter(function(e){return e!==o})}}}()
module.exports={addFullscreenChangeHandler:addFullscreenChangeHandler,exitFullscreen:exitFullscreen,isUnstartedOrCued:isUnstartedOrCued,isYouTubeBlocked:isYouTubeBlocked,linkTimestampsToModel:linkTimestampsToModel,removeFullscreenChangeHandler:removeFullscreenChangeHandler,requireYouTubeAPI:requireYouTubeAPI}
});
; KAdefine.updatePathToPackageMap({"javascript/discussion-package/discussion.js": "discussion.js", "javascript/exercises-package/components/practice-exercise.jsx": "exercises.js", "javascript/exercises-package/stateful-exercise-manager.jsx": "exercises.js", "javascript/perseus-all-package/perseus.js": "perseus-all.js", "javascript/perseus-merged-extra-widgets-package/extra-widgets.js": "perseus-merged-extra-widgets.js", "javascript/video-package/constants.js": "modal.js", "javascript/video-package/initialize-player-model.js": "video.js", "javascript/video-package/ka-video-wrapper.jsx": "video.js"});
