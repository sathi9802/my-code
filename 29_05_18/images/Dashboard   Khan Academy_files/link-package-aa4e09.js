KAdefine("javascript/components/link-package/domain-link.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var DomainLink=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function r(){var e=this.props,t=e.element,r=e.domain,a=e.children,l=e.href,o=e.target,i=e.onClick,n=e.testId,s=e.juicy
var c=_globalStyles2.default.domainColors(r)
var p=s?c.domain1:c.domain3
var d=t==="a"?{href:l}:{to:l}
var u=React.createElement(t,babelHelpers.extends({},d,{className:(0,_aphrodite.css)(styles.link),target:o,"data-test-id":n,onClick:i}),a)
return React.createElement("span",{style:{color:p}},u)}
return t}(_react.Component)
DomainLink.defaultProps={element:"a"}
exports.default=DomainLink
var styles=_aphrodite.StyleSheet.create({link:{color:"inherit",textDecoration:"none",":visited":{color:"inherit"},":hover":{textDecoration:"underline"}}})
});
KAdefine("javascript/components/link-package/link.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var DEFAULT_HREF="javascript:void(0)"
var Link=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function t(){var e=this.props,r=e.children,t=e.className,a=e.highlighted,i=e.href,l=e.inlineStyles,s=e.referrer,n=e.style,h=e.target,o=e.testId,p=e.element,c=babelHelpers.objectWithoutProperties(e,["children","className","highlighted","href","inlineStyles","referrer","style","target","testId","element"])
var d=i?i.split("#"):[DEFAULT_HREF],u=d[0],f=d[1]
var y=u
if(s){if(y.indexOf("?")>-1){y+="&ref="+s}else{y+="?ref="+s}}if(f){y+="#"+f}var b=[styles.link,a&&styles.highlighted]
if(Array.isArray(n)){b.push.apply(b,n)}else{b.push(n)}var g=t?" "+t:""
var v=p==="a"?{href:y}:{to:y}
return React.createElement(p,babelHelpers.extends({"data-test-id":o},c,v,{className:_aphrodite.css.apply(undefined,b)+g,style:l,target:h}),r)}
return r}(React.Component)
Link.defaultProps={highlighted:false,href:DEFAULT_HREF,style:[],element:"a"}
var styles=_aphrodite.StyleSheet.create({link:{backgroundColor:"transparent",color:"inherit",textDecoration:"none",":hover":{textDecoration:"underline"}},highlighted:{textDecoration:"underline"}})
module.exports=Link
});
