KAdefine("javascript/components/layout-package/spring.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var Spring=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function t(){return React.createElement("div",{className:css(styles.grow)})}
return r}(React.Component)
var styles=StyleSheet.create({grow:{flexGrow:1}})
module.exports=Spring
});
KAdefine("javascript/components/layout-package/strut.jsx", function(require, module, exports) {
var React=require("react")
var Strut=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function t(){return React.createElement("div",{style:flexBasis(this.props.size)})}
return r}(React.Component)
var flexBasis=function e(r){return{MsFlexBasis:r,MsFlexPreferredSize:r,WebkitFlexBasis:r,flexBasis:r,flexShrink:0}}
module.exports=Strut
});
KAdefine("javascript/components/layout-package/vertical-expander.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var VerticalExpander=function(e){babelHelpers.inherits(t,e)
function t(){var r,i,a
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,o=Array(s),n=0;n<s;n++){o[n]=arguments[n]}return a=(r=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),i),i.state={height:0},i.updateHeight=function(){if(i.measurer){var e=i.measurer.getBoundingClientRect()
i.setState({height:e.bottom-e.top})}},r),babelHelpers.possibleConstructorReturn(i,a)}t.prototype.componentDidMount=function r(){this.timers=[]
var e=setTimeout(this.updateHeight,16)
this.timers.push(e)}
t.prototype.componentDidUpdate=function i(e){if(this.props.children!==e.children){var t=setTimeout(this.updateHeight,16)
this.timers.push(t)}}
t.prototype.componentWillUnmount=function a(){this.timers.forEach(clearTimeout)}
t.prototype.render=function s(){var e=this
return React.createElement("div",{className:(0,_aphrodite.css)(styles.wrapper),style:{height:this.state.height}},React.createElement("div",{ref:function t(r){return e.measurer=r}},this.props.children))}
return t}(_react.Component)
exports.default=VerticalExpander
var styles=_aphrodite.StyleSheet.create({wrapper:{transition:"height .3s ease-out",overflow:"hidden"}})
});
KAdefine("javascript/components/layout-package/full-bleed.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var FullBleed=function e(r){var t=r.children
return React.createElement("div",{className:(0,_aphrodite.css)(styles.fullBleed)},t)}
var styles=_aphrodite.StyleSheet.create({fullBleed:{width:"100vw",position:"relative",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw"}})
exports.default=FullBleed
});
