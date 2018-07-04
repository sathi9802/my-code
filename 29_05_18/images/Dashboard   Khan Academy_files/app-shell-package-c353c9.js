KAdefine("javascript/app-shell-package/app.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _reactRouter=require("react-router")
var _reactRedux=require("react-redux")
var _aphrodite=require("aphrodite")
var _appStore=require("./store/app-store.js")
var _statefulHeader=require("../page-package/stateful-header.jsx")
var _statefulHeader2=babelHelpers.interopRequireDefault(_statefulHeader)
var _statefulFooter=require("./stateful-footer.jsx")
var _statefulFooter2=babelHelpers.interopRequireDefault(_statefulFooter)
var _topLevelRoute=require("./top-level-route.jsx")
var _topLevelRoute2=babelHelpers.interopRequireDefault(_topLevelRoute)
var _topLevelCoachRoute=require("./top-level-coach-route.jsx")
var _topLevelCoachRoute2=babelHelpers.interopRequireDefault(_topLevelCoachRoute)
var _utils=require("./utils.js")
var _importLegacyCss=require.importLegacyCSS
var _importLegacyCss2=babelHelpers.interopRequireDefault(_importLegacyCss)
var _parseQueryString2=require("../shared-package/parse-query-string.js")
var _parseQueryString3=babelHelpers.interopRequireDefault(_parseQueryString2)
var _footerUtils=require("./store/footer-utils.js")
var App=function(e){babelHelpers.inherits(t,e)
function t(a){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this))
r.state={clientHistory:[],extraHeaderProps:{}}
r.handleHistoryChanged=function(e){var t=r.state.clientHistory
r.setState({clientHistory:[].concat(t,[e.pathname])})}
r.updateHeaderProps=function(e){r.setState({extraHeaderProps:e})}
var o={footer:{attribution:(0,_footerUtils.extractAttribution)(a.componentProps)}}
r._store=(0,_appStore.createAppStore)(o)
return r}t.prototype.componentDidMount=function a(){if(!this._router){return}var e=this._router.history
this.promptLoginIfRequested(e.location)
this._unlisten=e.listen(this.handleHistoryChanged)
this.handleHistoryChanged(e.location)}
t.prototype.componentWillUnmount=function r(){if(this._unlisten){this._unlisten()}}
t.prototype.promptLoginIfRequested=function o(e){var t=(0,_parseQueryString3.default)(e.search),a=t.prompt_login
if(a==="true"&&!this.props.loggedIn){require.dynimport("../signup-link-package/launch-signup-login-in-modal.js").then(function(t){var a=e.pathname+e.search+e.hash
t(undefined,a,"login")})}}
t.prototype.initialProps=function n(){var e=this.state.clientHistory
if(e.length<=1){return this.props.componentProps}}
t.prototype.getSharedProps=function p(){var e=this.state.clientHistory
return{initialComponentProps:this.initialProps(),extraComponentProps:{clientHistory:e},updateHeaderProps:this.updateHeaderProps}}
t.prototype.renderRoutes=function s(){var e=this
var t=this.getSharedProps()
return _react2.default.createElement(_reactRouter.BrowserRouter,{ref:function a(t){return e._router=t}},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.wrapper)},_react2.default.createElement(_statefulHeader2.default,babelHelpers.extends({},this.props.headerProps,this.state.extraHeaderProps,{allowDomainTheming:true})),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.mainContent)},_react2.default.createElement(_reactRouter.Switch,null,_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/app-shell-example",component:function r(){return require.dynimport("../app-shell-example-package/example.jsx")}})),_react2.default.createElement(_topLevelCoachRoute2.default,babelHelpers.extends({},t,{path:"/coach/campaign/:campaignId/videos/:stepId",component:function o(){return require.dynimport("../teacher-campaign-package/video-page.jsx")},extraHeaderProps:{pageDomain:"default",transparent:true}})),_react2.default.createElement(_topLevelCoachRoute2.default,babelHelpers.extends({},t,{path:"/coach/campaign/:campaignId/response/:stepId",component:function n(){return require.dynimport("../teacher-campaign-package/response-page.jsx")},extraHeaderProps:{pageDomain:"default",transparent:true}})),_react2.default.createElement(_topLevelCoachRoute2.default,babelHelpers.extends({},t,{path:"/coach/class/__demo__/program/:campaignId",component:function p(){return require.dynimport("../learnstorm-editable-package/demo-dashboard.jsx")},extraHeaderProps:{pageDomain:"default",transparent:true}})),_react2.default.createElement(_topLevelCoachRoute2.default,babelHelpers.extends({},t,{path:"/coach/class/:classId/program/:campaignId",component:function s(){return require.dynimport("../learnstorm-editable-package/class-dashboard.jsx")},extraHeaderProps:{pageDomain:"default",transparent:true}})),_react2.default.createElement(_topLevelCoachRoute2.default,babelHelpers.extends({},t,{path:"/coach/class/:classId/student/:studentKaid",component:function l(){return require.dynimport("../class-package/student/student-page.jsx")},extraHeaderProps:{pageDomain:"default"}})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/coach/class/:classId",component:function i(){return require.dynimport("../class-package/class.jsx")},dependencies:function u(){return(0,_importLegacyCss2.default)("assignments.css")},extraHeaderProps:{pageDomain:"default"}})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/devadmin/mpp/learnstorm/:id",component:function c(){return require.dynimport("../learnstorm-editable-package/admin/editor.jsx")},extraHeaderProps:{pageDomain:"default",fullBleed:true}})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/devadmin/mpp/learnstorm",component:function d(){return require.dynimport("../learnstorm-editable-package/admin/editor.jsx")},extraHeaderProps:{pageDomain:"default",fullBleed:true}})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/devadmin/mpp/teacher-campaign/:id",component:function m(){return require.dynimport("../teacher-campaign-package/admin/editor.jsx")},extraHeaderProps:{pageDomain:"default",fullBleed:true}})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/devadmin/mpp/teacher-campaign",component:function f(){return require.dynimport("../teacher-campaign-package/admin/editor.jsx")},extraHeaderProps:{pageDomain:"default",fullBleed:true}})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/*/:kind(e|q|u)/:slug/:maybeDemoSlug(report|demo-report)",component:function h(){return require.dynimport("../coach-report-exercise-package/exercise.jsx")},dependencies:function g(){return Promise.all([(0,_importLegacyCss2.default)("perseus-renderer.css"),(0,_importLegacyCss2.default)("tasks.css")])},extraHeaderProps:{pageDomain:"default"}})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/:domain/*/modal/:type/:id",maintainScrollPosition:true,maintainExistingRouteDuringTransition:"always",component:function _(){return require.dynimport("../content-library-package/content-library-curation-page.jsx")},needsProps:true})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/:domain/*/(v|e|a|p[a-z]?)/:slug",maintainExistingRouteDuringTransition:"between-same-path",component:function b(){return require.dynimport("../tutorial-page-package/tutorial-page.jsx")},dependencies:_utils.getDependenciesForLessonRoute,needsProps:true})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/:domain/:subject/:unit",component:function x(){return require.dynimport("../content-library-package/content-library-curation-page.jsx")},needsProps:true})),_react2.default.createElement(_topLevelCoachRoute2.default,babelHelpers.extends({},t,{path:"/coach/*",component:function v(){return require.dynimport("../coach-dashboard-package/coach.jsx")},extraHeaderProps:{pageDomain:"default"}})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/:domain/:subject",component:function H(){return require.dynimport("../content-library-package/content-library-curation-page.jsx")},needsProps:true})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/:domain",component:function R(){return require.dynimport("../content-library-package/content-library-curation-page.jsx")},needsProps:true})),_react2.default.createElement(_topLevelRoute2.default,babelHelpers.extends({},t,{path:"/",component:function y(){return e.props.loggedIn?require.dynimport("../dashboard-package/bibliotron-homepage-with-nav.jsx"):require.dynimport("../logged-out-homepage-package/logged-out-homepage-module-list.jsx")},dependencies:function P(){return(0,_utils.getDependenciesForHomePageRoute)(e.props.loggedIn)},needsProps:true,extraHeaderProps:this.props.loggedIn?null:{transparent:true}})))),_react2.default.createElement("div",{id:"footer"},_react2.default.createElement(_statefulFooter2.default,this.props.footerProps))))}
t.prototype.render=function l(){return _react2.default.createElement(_reactRedux.Provider,{store:this._store},this.renderRoutes())}
return t}(_react.PureComponent)
var styles=_aphrodite.StyleSheet.create({wrapper:{display:"flex",flexDirection:"column",minHeight:"100vh"},mainContent:{}});(function(){return require.dynimport("../coach-report-exercise-package/exercise.jsx")})
exports.default=App
});
KAdefine("javascript/app-shell-package/store/app-store.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.createAppStore=createAppStore
var _redux=require("redux")
var _footerReducer=require("./footer-reducer.js")
var _footerReducer2=babelHelpers.interopRequireDefault(_footerReducer)
var reducers={footer:_footerReducer2.default}
function createAppStore(e){return(0,_redux.createStore)((0,_redux.combineReducers)(reducers),e)}
});
KAdefine("javascript/app-shell-package/store/footer-reducer.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _footerUtils=require("./footer-utils.js")
var defaultFooterState={attribution:undefined}
var footer=function t(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:defaultFooterState
var e=arguments[1]
switch(e.type){case"COMPLETE_LOADING_NEW_ROUTE":if(!e.componentProps){return t}return babelHelpers.extends({},t,{attribution:(0,_footerUtils.extractAttribution)(e.componentProps)})
default:return t}}
exports.default=footer
});
KAdefine("javascript/app-shell-package/store/footer-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.extractAttribution=extractAttribution
function extractAttribution(t){if(!t){return undefined}return t.attribution||t.curation&&t.curation.attribution}
});
KAdefine("javascript/app-shell-package/store/actions.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.startLoadingRoute=startLoadingRoute
exports.completeLoadingRoute=completeLoadingRoute
function startLoadingRoute(){return{type:"START_LOADING_NEW_ROUTE"}}function completeLoadingRoute(e){return{type:"COMPLETE_LOADING_NEW_ROUTE",componentProps:e}}
});
KAdefine("javascript/app-shell-package/lazy-route-handler.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.LazyRouteHandler=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRedux=require("react-redux")
var _aphrodite=require("aphrodite")
var _analytics=require("../analytics-package/analytics.js")
var _analytics2=babelHelpers.interopRequireDefault(_analytics)
var _formatQueryString=require("../shared-package/format-query-string.js")
var _formatQueryString2=babelHelpers.interopRequireDefault(_formatQueryString)
var _khanFetch=require("../shared-package/khan-fetch.js")
var _parseQueryString=require("../shared-package/parse-query-string.js")
var _parseQueryString2=babelHelpers.interopRequireDefault(_parseQueryString)
var _scrollUtils=require("../scroll-utils-package/scroll-utils.js")
var _spinner=require("../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _actions=require("./store/actions.js")
var getIsInitialPageLoad=function e(t){return!!t.extraComponentProps&&t.extraComponentProps.clientHistory.length<=1}
var LazyRouteHandler=exports.LazyRouteHandler=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,n
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,s=Array(o),i=0;i<o;i++){s[i]=arguments[i]}return n=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a),a.state={componentProps:a.props.initialComponentProps,Component:null,showLoadingIndicator:true},a.handleRouteChangeStart=function(e,t){if(e){a.setState({showLoadingIndicator:true})}if(!t){_analytics2.default.handleStartRouterNavigation()}},a.handleRouteChangeEnd=function(e,t,r){var n=a.props.onRouteChangeComplete
a.setState(babelHelpers.extends({showLoadingIndicator:false},e))
if(!r){_analytics2.default.handleRouterNavigation()}if(!t){(0,_scrollUtils.scrollToOffset)(0,0)}n(e.componentProps)},a.extractFetchResults=function(e){var t=e[0],r=e[1]
var a={}
if(t){a.Component=t}if(r){a.componentProps=r}return a},a.fetchPackages=function(e,t){var r=a.props.computedMatch
var n=[e()]
if(t){var o=r?r.params:{}
n.push(t(o))}return Promise.all(n).then(function(e){var t=e[0]
return t&&t.default?t.default:t})},r),babelHelpers.possibleConstructorReturn(a,n)}t.prototype.componentDidMount=function r(){this.processRouteChange({needsPackages:true,needsProps:this.props.needsProps&&!this.props.initialComponentProps,propsUrl:this.props.propsUrl,search:this.props.search,component:this.props.component,dependencies:this.props.dependencies,isLoadingIndicatorRequired:true,isScrollPositionMaintained:false,computedMatch:this.props.computedMatch,extraHeaderProps:this.props.extraHeaderProps,isInitialPageLoad:getIsInitialPageLoad(this.props)})}
t.prototype.componentWillReceiveProps=function a(e){if(this.props.propsUrl===e.propsUrl){return}var t=this.props.path!==e.path
var r=e.needsProps
var a=this.calculateLoadingIndicatorNecessary(e)
var n=this.props.maintainScrollPosition||e.maintainScrollPosition
this.processRouteChange({needsPackages:t,needsProps:!!r,isLoadingIndicatorRequired:a,isScrollPositionMaintained:n,propsUrl:e.propsUrl,search:e.search,component:e.component,dependencies:e.dependencies,computedMatch:e.computedMatch,extraHeaderProps:e.extraHeaderProps,isInitialPageLoad:getIsInitialPageLoad(e)})}
t.prototype.shouldComponentUpdate=function n(e,t){var r=this.props.needsProps
if(this.state.Component===t.Component&&r&&this.state.componentProps===t.componentProps&&this.state.showLoadingIndicator===t.showLoadingIndicator){return false}return true}
t.prototype.calculateLoadingIndicatorNecessary=function o(e){var t=this.props.path===e.path
var r=!t
var a=["always","between-same-path"]
var n=["always","between-different-path"]
var o=a.includes(e.maintainExistingRouteDuringTransition)
var s=n.includes(this.props.maintainExistingRouteDuringTransition)||n.includes(e.maintainExistingRouteDuringTransition)
if(t&&o){return false}if(r&&s){return false}return r||!!e.needsProps}
t.prototype.processRouteChange=function s(e){var t=this
var r=e.needsPackages,a=e.needsProps,n=e.component,o=e.dependencies,s=e.propsUrl,i=e.search,p=e.isLoadingIndicatorRequired,c=e.isScrollPositionMaintained,l=e.computedMatch,u=e.extraHeaderProps,d=e.isInitialPageLoad
this.handleRouteChangeStart(p,d)
var h=this.props.updateHeaderProps
var m=null
if(l){m=u&&u.pageDomain||l.params.domain
h({pageDomain:m})}var g=[r&&n&&this.fetchPackages(n,o),a&&this.fetchProps(s,i)]
Promise.all(g).then(this.extractFetchResults).then(function(e){t.handleRouteChangeEnd(e,c,d)
h(babelHelpers.extends({pageDomain:m},u))})}
t.prototype.fetchProps=function i(e,t){var r=babelHelpers.extends({},(0,_parseQueryString2.default)(t),{"defeat-browser-cache":1})
var a=(0,_formatQueryString2.default)(r,true)
var n=""+e+a
return(0,_khanFetch.khanFetch)(n,{headers:{Accept:"application/json"},method:"GET"}).then(function(e){return e.json()}).then(function(e){return e.componentProps})}
t.prototype.render=function p(){var e=this.props,t=e.extraComponentProps,r=e.computedMatch
var a=this.state,n=a.Component,o=a.componentProps,s=a.showLoadingIndicator
if(s||!n){return React.createElement("div",{className:(0,_aphrodite.css)(styles.spinnerWrapper)},React.createElement(_spinner2.default,{size:"small"}))}var i=r?r.params:{}
return React.createElement(n,babelHelpers.extends({"aria-live":"polite"},i,o,t))}
return t}(_react.Component)
LazyRouteHandler.defaultProps={maintainScrollPosition:false,maintainExistingRouteDuringTransition:"never",needsProps:false}
var styles=_aphrodite.StyleSheet.create({spinnerWrapper:{marginTop:"40px",marginBottom:"40px"}})
var mapDispatchToProps={onRouteChangeComplete:_actions.completeLoadingRoute}
exports.default=(0,_reactRedux.connect)(null,mapDispatchToProps)(LazyRouteHandler)
});
KAdefine("javascript/app-shell-package/stateful-footer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _reactRedux=require("react-redux")
var _footer=require("../page-package/footer.jsx")
var _footer2=babelHelpers.interopRequireDefault(_footer)
var mapStateToFooterProps=function e(r){var t=r.footer
return{attribution:t.attribution}}
exports.default=(0,_reactRedux.connect)(mapStateToFooterProps)(_footer2.default)
});
KAdefine("javascript/app-shell-package/top-level-coach-route.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRouter=require("react-router")
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _topLevelRoute=require("./top-level-route.jsx")
var _topLevelRoute2=babelHelpers.interopRequireDefault(_topLevelRoute)
var TopLevelCoachRoute=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.shouldRedirect=function t(){var e=_ka2.default.getUserProfile()
if(!e){return true}return e.get("isChildAccount")||e.get("isPhantom")}
r.prototype.render=function a(){if(this.shouldRedirect()){return React.createElement(_reactRouter.Redirect,{to:"/"})}return React.createElement(_topLevelRoute2.default,this.props)}
return r}(React.Component)
exports.default=TopLevelCoachRoute
});
KAdefine("javascript/app-shell-package/top-level-route.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRouter=require("react-router")
var _lazyRouteHandler=require("./lazy-route-handler.jsx")
var _lazyRouteHandler2=babelHelpers.interopRequireDefault(_lazyRouteHandler)
exports.default=function(e){return React.createElement(_reactRouter.Route,{path:e.path,render:function r(a){return React.createElement(_lazyRouteHandler2.default,babelHelpers.extends({propsUrl:a.location.pathname,search:a.location.search},e))}})}
});
KAdefine("javascript/app-shell-package/utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getDependenciesForLessonRoute=exports.getDependenciesForHomePageRoute=undefined
var _importLegacyCss=require.importLegacyCSS
var _importLegacyCss2=babelHelpers.interopRequireDefault(_importLegacyCss)
var getDependenciesForHomePageRoute=exports.getDependenciesForHomePageRoute=function e(s){if(s){return Promise.all([(0,_importLegacyCss2.default)("dashboard.css"),(0,_importLegacyCss2.default)("avatar-customizer.css"),(0,_importLegacyCss2.default)("homepage.css")])}return Promise.resolve()}
var getDependenciesForLessonRoute=exports.getDependenciesForLessonRoute=function s(e){var s=e["1"]
switch(s){case"v":return Promise.all([require.dynimport("../tutorial-video-package/video-page.jsx"),(0,_importLegacyCss2.default)("video.css"),(0,_importLegacyCss2.default)("discussion.css"),(0,_importLegacyCss2.default)("clarifications.css"),(0,_importLegacyCss2.default)("moderation.css")])
case"e":{return Promise.all([require.dynimport("../tutorial-exercise-package/exercise-page.jsx"),(0,_importLegacyCss2.default)("perseus-renderer.css"),(0,_importLegacyCss2.default)("tasks.css")])}case"a":return Promise.all([require.dynimport("../tutorial-article-package/article-page.jsx"),(0,_importLegacyCss2.default)("perseus-renderer.css"),(0,_importLegacyCss2.default)("discussion.css"),(0,_importLegacyCss2.default)("moderation.css")])
case"p":return Promise.all([require.dynimport("../tutorial-scratchpad-package/scratchpad-page.jsx")])
case"pt":return Promise.all([require.dynimport("../tutorial-scratchpad-package/scratchpad-page.jsx")])}}
});
KAdefine("javascript/app-shell-package/types.js", function(require, module, exports) {
});
; KAdefine.updatePathToPackageMap({"javascript/app-shell-example-package/example.jsx": "app-shell-example.js", "javascript/class-package/class.jsx": "class.js", "javascript/class-package/student/student-page.jsx": "class.js", "javascript/coach-dashboard-package/coach.jsx": "coach-dashboard.js", "javascript/coach-report-exercise-package/exercise.jsx": "coach-report-exercise.js", "javascript/content-library-package/content-library-curation-page.jsx": "content-library.js", "javascript/dashboard-package/bibliotron-homepage-with-nav.jsx": "dashboard.js", "javascript/learnstorm-editable-package/admin/editor.jsx": "learnstorm-editable-admin.js", "javascript/learnstorm-editable-package/class-dashboard.jsx": "learnstorm-editable.js", "javascript/learnstorm-editable-package/demo-dashboard.jsx": "learnstorm-editable.js", "javascript/logged-out-homepage-package/logged-out-homepage-module-list.jsx": "logged-out-homepage.js", "javascript/signup-link-package/launch-signup-login-in-modal.js": "signup-link.js", "javascript/teacher-campaign-package/admin/editor.jsx": "teacher-campaign-admin.js", "javascript/teacher-campaign-package/response-page.jsx": "teacher-campaign.js", "javascript/teacher-campaign-package/video-page.jsx": "teacher-campaign.js", "javascript/tutorial-article-package/article-page.jsx": "tutorial-article.js", "javascript/tutorial-exercise-package/exercise-page.jsx": "tutorial-exercise.js", "javascript/tutorial-page-package/tutorial-page.jsx": "tutorial-page.js", "javascript/tutorial-scratchpad-package/scratchpad-page.jsx": "tutorial-scratchpad.js", "javascript/tutorial-video-package/video-page.jsx": "tutorial-video.js"});
