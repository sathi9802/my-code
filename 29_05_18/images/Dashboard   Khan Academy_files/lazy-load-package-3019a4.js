KAdefine("javascript/components/lazy-load-package/lazy-load-component.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var LazyLoadComponent=function(e){babelHelpers.inherits(t,e)
function t(){var n,o,r
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,s=Array(a),i=0;i<a;i++){s[i]=arguments[i]}return r=(n=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),o),o.state={components:undefined},o._isMounted=false,n),babelHelpers.possibleConstructorReturn(o,r)}t.prototype.componentDidMount=function n(){this._isMounted=true
var e=this.props.load
this.loadComponent(e)}
t.prototype.componentWillUnmount=function o(){this._isMounted=false}
t.prototype.componentWillReceiveProps=function r(e){if(this.props.loadKey!==e.loadKey){this.loadComponent(e.load)}}
t.prototype.loadComponent=function a(e){var t=this
this.setState({components:undefined})
e().then(function(e){if(!t._isMounted){return}var n=Array.isArray(e)?e:[e]
t.setState({components:n.map(function(e){return e&&e.default||e})})})}
t.prototype.render=function s(){var e=this.state.components
var t=this.props,n=t.children,o=t.loadingIndicator
if(e&&n){return n.apply(undefined,e)}return o()}
return t}(React.Component)
LazyLoadComponent.defaultProps={loadingIndicator:function e(){return React.createElement(_spinner2.default,null)}}
exports.default=LazyLoadComponent
});
KAdefine("javascript/components/lazy-load-package/create-moment-loader.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var createMomentLoader=function e(t){return function(e){babelHelpers.inherits(r,e)
function r(){var t,n,o
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,s=Array(a),l=0;l<a;l++){s[l]=arguments[l]}return o=(t=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),n),n.state={moment:null},t),babelHelpers.possibleConstructorReturn(n,o)}r.prototype.componentDidMount=function n(){var e=this
require.dynimport("moment").then(function(t){e.setState({moment:t})})}
r.prototype.render=function o(){return React.createElement(t,babelHelpers.extends({},this.props,{moment:this.state.moment}))}
return r}(React.Component)}
exports.default=createMomentLoader
});
; KAdefine.updatePathToPackageMap({"javascript/node_modules/moment/index.js": "corelibs-legacy.js"});
