KAdefine("javascript/components/button-package/button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _hoverBehavior=require("./hover-behavior.jsx")
var _hoverBehavior2=babelHelpers.interopRequireDefault(_hoverBehavior)
var _buttonBase=require("./button-base.jsx")
var _buttonBase2=babelHelpers.interopRequireDefault(_buttonBase)
var _buttonUtils=require("./button-utils.js")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var Button=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.focus=function r(){this.buttonBase.focus()}
t.prototype.getBoundingClientRect=function l(){return this.buttonBase.getBoundingClientRect()}
t.prototype.getStyle=function o(){var e=this.props.type
if(e==="primary"){return _buttonUtils.solidStyle}if(e==="secondary"){return _buttonUtils.outlineStyle}if(e==="text"){return _buttonUtils.textStyle}return _buttonUtils.solidStyle}
t.prototype.render=function a(){var e=this
var t=this.props,r=t.color,l=t.colors,o=t.hoverColor,a=t.hoverColors,s=t.highlighted,i=t.disabled,n=t.disabledStateIsOpaque,u=t.href,b=t.size,p=t.type,c=t.onClick,f=babelHelpers.objectWithoutProperties(t,["color","colors","hoverColor","hoverColors","highlighted","disabled","disabledStateIsOpaque","href","size","type","onClick"])
return React.createElement(_hoverBehavior2.default,{disabled:i,onClick:c},function(t,c){var d=e.getStyle(p)
var h=undefined
var v={}
var y={}
if(l){v=l}else if(r){v=d(r)}else{v=d(_globalStyles2.default.colors.kaGreen)}if(i){if(n){y=v
h=.5}else{y=d(_globalStyles2.default.colors.gray76)}}else if(t.hovered||s){if(a){y=a}else if(o){y=d(o)}else if(l){y=l}else if(r){y=d(r)}else{y=d(_globalStyles2.default.colors.kaGreenHover)}}else{y=v}var _=babelHelpers.extends({},y,c,f,{disabled:i,opacity:h,href:u,size:b||"default",tag:u?"a":"button"})
return React.createElement(_buttonBase2.default,babelHelpers.extends({},_,{ref:function g(t){return e.buttonBase=t}}))})}
return t}(_react.Component)
exports.default=Button
});
KAdefine("javascript/components/button-package/link-styled-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var LinkStyledButton=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,l
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,a=Array(o),i=0;i<o;i++){a[i]=arguments[i]}return l=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),n),n.handleKeyDownEvent=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault()
n.props.onClick(e)}},r),babelHelpers.possibleConstructorReturn(n,l)}t.prototype.render=function r(){var e=this.props,t=e.onClick,r=e.children,n=e.style,l=e.inlineStyle,o=babelHelpers.objectWithoutProperties(e,["onClick","children","style","inlineStyle"])
return React.createElement("button",babelHelpers.extends({onClick:t,className:(0,_aphrodite.css)(styles.notAButton,n&&n),style:l&&l},o),r)}
return t}(_react.Component)
exports.default=LinkStyledButton
var styles=_aphrodite.StyleSheet.create({notAButton:{backgroundColor:"transparent",border:"none",padding:0,textAlign:"left",display:"inline-block",width:"100%",cursor:"pointer"}})
});
KAdefine("javascript/components/button-package/button-base.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var ButtonBase=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.focus=function r(){this.tag.focus()}
t.prototype.getBoundingClientRect=function i(){return this.tag.getBoundingClientRect()}
t.prototype.render=function o(){var e=this
var t=this.props,r=t.children,i=t.textColor,o=t.borderColor,a=t.backgroundColor,p=t.corners,d=t.padding,n=t.size,l=t.width,s=t.tag,x=t.grow,h=t.shrink,c=t.weight,u=t.opacity,g=t.icon,b=t.testId,f=babelHelpers.objectWithoutProperties(t,["children","textColor","borderColor","backgroundColor","corners","padding","size","width","tag","grow","shrink","weight","opacity","icon","testId"])
var y={color:i,borderColor:o,backgroundColor:a,minWidth:l,flexGrow:0}
if(x!==undefined){y.flexGrow=x}if(h!==undefined){y.flexShrink=h}if(u!==undefined){y.opacity=u}var m={a:styles.link,button:styles.button}[s]
var S={}
if(d){S.padding="0 "+d+"px"}var v=g&&React.createElement("span",{className:(0,_aphrodite.css)(styles.iconContainer,iconContainerSizeStyles[n])},React.createElement(_icon2.default,{color:y.color,icon:g}))
var C=this.props.tag
return React.createElement(C,babelHelpers.extends({className:(0,_aphrodite.css)(m,styles.common,sizeStyles[n],cornerStyles[p],d!==undefined&&styles.noPadding,c==="normal"&&styles.normalWeight,g&&withIconStyles[n]),style:y,"data-test-id":b},f,{ref:function R(t){return e.tag=t}}),v,React.createElement("div",{className:(0,_aphrodite.css)(styles.inner),style:S},r))}
return t}(_react.Component)
ButtonBase.defaultProps={tag:"div",size:"default",textColor:"inherit",borderColor:"transparent",backgroundColor:"transparent",corners:"all"}
exports.default=ButtonBase
var radius=_globalStyles.borderRadius
var styles=_aphrodite.StyleSheet.create({common:{position:"relative",display:"inline-flex",fontFamily:"inherit",borderStyle:"solid",boxSizing:"border-box",alignItems:"center",flexShrink:0,whiteSpace:"nowrap",lineHeight:"normal",fontWeight:"bold",cursor:"pointer",appearance:"none",WebkitTapHighlightColor:"transparent"},inner:{verticalAlign:"middle",overflow:"hidden",textAlign:"center",textOverflow:"ellipsis",width:"100%"},noPadding:{padding:0},link:{textDecoration:"inherit"},button:{fontSize:"inherit",fontFamily:"inherit",padding:0,margin:0,"::-moz-focus-inner":{border:0}},normalWeight:{fontWeight:"normal"},iconContainer:{position:"absolute",left:0,top:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"}})
var sizeStyles=_aphrodite.StyleSheet.create({xsmall:{height:24,fontSize:12,padding:"0px 8px"},small:{height:32,fontSize:15,padding:"0px 12px"},"default":{height:40,fontSize:15,padding:"0px 16px"},large:{height:48,fontSize:15,padding:"0px 20px"},xlarge:{height:56,fontSize:15,padding:"0px 24px"}})
var withIconStyles=_aphrodite.StyleSheet.create({xsmall:{padding:"0px 24px"},small:{padding:"0px 32px"},"default":{padding:"0px 40px"},large:{padding:"0px 48px"},xlarge:{padding:"0px 56px"}})
var iconContainerSizeStyles=_aphrodite.StyleSheet.create({xsmall:{width:24},small:{width:32},"default":{width:40},large:{width:48},xlarge:{width:56}})
var cornerStyles=_aphrodite.StyleSheet.create({top:{borderWidth:"1px 1px 0px 1px",borderRadius:radius+"px "+radius+"px 0px 0px",paddingBottom:1},left:{borderWidth:"1px 0px 1px 1px",borderRadius:radius+"px 0px 0px "+radius+"px"},bottom:{borderWidth:"0px 1px 1px 1px",borderRadius:"0px 0px "+radius+"px "+radius+"px",paddingTop:1},right:{borderWidth:"1px 1px 1px 0px",borderRadius:"0px "+radius+"px "+radius+"px 0px"},topLeft:{borderWidth:"1px 0px 0px 1px",borderRadius:radius+"px 0px 0px 0px",paddingBottom:1},topRight:{borderWidth:"1px 1px 0px 0px",borderRadius:"0px "+radius+"px 0px 0px",paddingBottom:1},bottomRight:{borderWidth:"0px 1px 1px 0px",borderRadius:"0px 0px "+radius+"px 0px",paddingTop:1},bottomLeft:{borderWidth:"0px 0px 1px 1px",borderRadius:"0px 0px 0px "+radius+"px",paddingTop:1},topCenter:{borderWidth:"1px 0px 0px 0px",borderRadius:0,paddingBottom:1},rightCenter:{borderWidth:"0px 1px 0px 0px",borderRadius:0},bottomCenter:{borderWidth:"0px 0px 1px 0px",borderRadius:0,paddingTop:1},leftCenter:{borderWidth:"1px 0px 0px 1px",borderRadius:0},all:{borderWidth:1,borderRadius:4},none:{}})
});
KAdefine("javascript/components/button-package/button-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.solidStyle=solidStyle
exports.outlineStyle=outlineStyle
exports.textStyle=textStyle
function solidStyle(e){return{textColor:"white",backgroundColor:e,borderColor:e}}function outlineStyle(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"transparent"
return{textColor:e,backgroundColor:t,borderColor:e}}function textStyle(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"transparent"
return{textColor:e,backgroundColor:t,borderColor:"transparent"}}
});
KAdefine("javascript/components/button-package/control-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var ControlButton=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.getClassFromProps=function t(){var e
var r=this.props,t=r.colors,o=t.color,s=t.hoveredColor,l=r.padding
var a=_aphrodite.StyleSheet.create({button:(e={color:o,padding:l},e[":hover"]={color:s},e[":focus"]={color:s},e)})
return a.button}
r.prototype.render=function o(){var e=this.props,r=e.children,t=e.testId
return React.createElement("button",{onClick:this.props.onClick,className:(0,_aphrodite.css)(styles.resetButton,this.getClassFromProps()),"data-test-id":t},r)}
return r}(_react.Component)
ControlButton.defaultProps={padding:0,colors:{color:_globalStyles.colors.gray76,hoveredColor:_globalStyles.colors.gray68}}
exports.default=ControlButton
var styles=_aphrodite.StyleSheet.create({resetButton:{border:"none",background:"inherit",cursor:"pointer",lineHeight:0}})
});
KAdefine("javascript/components/button-package/domain-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _button=require("./button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var DomainButton=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function r(){var e=this.props,t=e.children,r=e.domain,a=e.juicy,o=babelHelpers.objectWithoutProperties(e,["children","domain","juicy"])
var l=(0,_globalStyles.domainColors)(r)
var n=babelHelpers.extends({},o,{color:a?l.domain1:l.domain3,hoverColor:a?l.domain3:l.domain4})
return React.createElement(_button2.default,n,t)}
return t}(_react.Component)
DomainButton.defaultProps={domain:"default",juicy:false}
exports.default=DomainButton
});
KAdefine("javascript/components/button-package/hover-behavior.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var HoverBehavior=function(e){babelHelpers.inherits(o,e)
function o(s){babelHelpers.classCallCheck(this,o)
var t=babelHelpers.possibleConstructorReturn(this,e.call(this,s))
t.handleClick=function(e){if(!t.props.disabled){if(t.props.shouldUpdate()){t.waitingForClick=false}if(t.props.onClick&&!t.props.disabled){t.props.onClick(e)}}}
t.handleMouseEnter=function(){if(!t.props.disabled&&t.props.shouldUpdate()&&!t.waitingForClick){t.setState({hovered:true})}}
t.handleMouseLeave=function(){if(!t.props.disabled&&t.props.shouldUpdate()&&!t.waitingForClick){t.setState({hovered:false})}}
t.handleTouchStart=function(){if(!t.props.disabled&&t.props.shouldUpdate()){t.setState({hovered:true})}}
t.handleTouchEnd=function(){if(!t.props.disabled&&t.props.shouldUpdate()){t.setState({hovered:false})
t.waitingForClick=true}}
t.handleMouseDown=function(){if(!t.props.disabled&&t.props.shouldUpdate()){t.setState({focused:false})
t.focusFlag=true}}
t.handleBlur=function(){if(!t.props.disabled&&t.props.shouldUpdate()){t.setState({focused:false})}}
t.handleFocus=function(){if(!t.props.disabled&&t.props.shouldUpdate()){if(t.focusFlag){t.focusFlag=false}else{t.setState({focused:true})}}}
t.state={focused:false,hovered:s.startHovered}
return t}o.prototype.render=function s(){var e={onBlur:this.handleBlur,onClick:this.handleClick,onFocus:this.handleFocus,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd}
var o=this.props.children
return o&&o(this.state,e)}
return o}(_react.Component)
HoverBehavior.defaultProps={startHovered:false,shouldUpdate:function e(){return true}}
exports.default=HoverBehavior
});
KAdefine("javascript/components/button-package/toolbar-domain-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _domainButton=require("./domain-button.jsx")
var _domainButton2=babelHelpers.interopRequireDefault(_domainButton)
var ToolbarDomainButton=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function r(){var e=this.props.children
return React.createElement(_domainButton2.default,babelHelpers.extends({size:"small",disabledStateIsOpaque:true},this.props),e)}
return t}(_react.Component)
exports.default=ToolbarDomainButton
});
KAdefine("javascript/components/button-package/types.js", function(require, module, exports) {
});
