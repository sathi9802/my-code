KAdefine("javascript/components/client-link-package/client-link.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _utils=require("./utils.js")
var _link=require("../link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var ClientLink=function e(r,t){var i=t.router
var l=r.forceServer,n=r.to,a=r.onClick,o=r.conversions,s=babelHelpers.objectWithoutProperties(r,["forceServer","to","onClick","conversions"])
return _react2.default.createElement(_link2.default,babelHelpers.extends({},s,{href:n,element:(0,_utils.getLinkElement)(n,i,l),onClick:(0,_utils.onClickWithMarkConversions)(a,o)}))}
ClientLink.contextTypes={router:_react.PropTypes.any}
exports.default=ClientLink
});
KAdefine("javascript/components/client-link-package/client-domain-link.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _domainLink=require("../link-package/domain-link.jsx")
var _domainLink2=babelHelpers.interopRequireDefault(_domainLink)
var _utils=require("./utils.js")
var ClientDomainLink=function e(r,i){var n=i.router
var t=r.forceServer,a=r.to,o=r.domain,l=r.onClick,s=r.conversions,u=babelHelpers.objectWithoutProperties(r,["forceServer","to","domain","onClick","conversions"])
return _react2.default.createElement(_domainLink2.default,babelHelpers.extends({},u,{domain:o,href:a,element:(0,_utils.getLinkElement)(a,n,t),onClick:(0,_utils.onClickWithMarkConversions)(l,s)}))}
ClientDomainLink.contextTypes={router:_react.PropTypes.any}
exports.default=ClientDomainLink
});
KAdefine("javascript/components/client-link-package/utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.onClickWithMarkConversions=exports.getLinkElement=undefined
var _reactRouter=require("react-router")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var pathIsInShell=function e(r){if(r.indexOf("//")>=0){return false}if(r==="/computing/hour-of-code"){return false}if(r==="/mission/sat"){return false}if(r==="/sat"){return false}if(r.startsWith("/prep/")){return false}return true}
var getLinkElement=exports.getLinkElement=function r(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:""
var r=arguments[1]
var n=arguments[2]
if(!r||n||!pathIsInShell(e)){return"a"}return _reactRouter.Link}
var onClickWithMarkConversions=exports.onClickWithMarkConversions=function n(e,r){return function(n){if(e){e(n)}if(r){var t=[]
var i=[]
for(var a=r,s=Array.isArray(a),o=0,a=s?a:a[Symbol.iterator]();;){var u
if(s){if(o>=a.length)break
u=a[o++]}else{o=a.next()
if(o.done)break
u=o.value}var l=u
if(l.extra){i.push(babelHelpers.extends({},l))}else{t.push(l.id)}}t.length&&_bigbingo2.default.markConversions(t)
i.length&&_bigbingo2.default.markConversionsWithExtras(i)}}}
});
KAdefine("javascript/components/client-link-package/types.js", function(require, module, exports) {
});
