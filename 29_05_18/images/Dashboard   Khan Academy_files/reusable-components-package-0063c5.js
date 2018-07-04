KAdefine("javascript/reusable-components-package/back-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var i18n=require("../shared-package/i18n.js")
var BackIcon=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function r(){this.node.setAttribute("stroke-linejoin","round")}
t.prototype.render=function n(){var e=this
var t=i18n._("Back")
return _react2.default.createElement("svg",{width:"24",height:"24"},_react2.default.createElement("g",{ref:function r(t){return e.node=t},id:"source",fill:"none",transform:"translate(5, 5)",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},_react2.default.createElement("title",null,t),_react2.default.createElement("path",{d:"M1,7 L14,7"}),_react2.default.createElement("polyline",{points:"7 0 0 7 7 14"})))}
return t}(_react2.default.Component)
exports.default=BackIcon
});
KAdefine("javascript/reusable-components-package/close-icon.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var i18n=require("../shared-package/i18n.js")
var CloseIcon=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function r(){this.refs.g.setAttribute("stroke-linejoin","round")}
t.prototype.render=function a(){var e=this.props,t=e.size,r=e.iconSize,a=e.color
var l={stroke:a,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",fill:"none",fillRule:"evenodd"}
var n=(t-r)/2
var o=(t+r)/2
var i=i18n._("Close")
var s=i18n._("Closes this module.")
var c=i+" "+s
return _react2.default.createElement("svg",{width:t,height:t,viewBox:"0 0 "+t+" "+t,role:"img","aria-label":c},_react2.default.createElement("title",null,i),_react2.default.createElement("desc",null,s),_react2.default.createElement("g",babelHelpers.extends({ref:"g"},l),_react2.default.createElement("path",{d:"M"+o+","+n+" L"+n+","+o}),_react2.default.createElement("path",{d:"M"+n+","+n+" L"+o+","+o})))}
return t}(_react2.default.Component)
CloseIcon.defaultProps={color:"currentColor"}
module.exports=CloseIcon
});
