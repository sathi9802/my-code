KAdefine("javascript/assignments-async-loader-package/async-create-assignment-header.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _assignmentLoadingInd
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _lazyLoadComponent=require("../components/lazy-load-package/lazy-load-component.jsx")
var _lazyLoadComponent2=babelHelpers.interopRequireDefault(_lazyLoadComponent)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _spinner=require("../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _importLegacyCss=require.importLegacyCSS
var _importLegacyCss2=babelHelpers.interopRequireDefault(_importLegacyCss)
var _subjectSlug=require("./subject-slug.js")
var KA=require("../shared-package/ka.js")
var AsyncCreateAssignmentHeader=function(e){babelHelpers.inherits(a,e)
function a(){babelHelpers.classCallCheck(this,a)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}a.prototype.render=function r(){var e=this
if(!KA.featureFlag("SHOW_ASSIGNMENTS")){return null}var a=this.props.domain
var r=(0,_globalStyles.domainColors)(a).domain1
return React.createElement(_lazyLoadComponent2.default,{load:function t(){return Promise.all([require.dynimport("../assignments-package/create-assignment-header.jsx"),(0,_subjectSlug.getAllSubjectSlugs)(),(0,_importLegacyCss2.default)("assignments.css")])},loadingIndicator:function s(){return React.createElement("div",{style:{backgroundColor:r},className:(0,_aphrodite.css)(styles.assignmentLoadingIndicator)},React.createElement(_spinner2.default,{size:"xsmall",theme:"light"}))}},function(a,r){return React.createElement(a,babelHelpers.extends({},e.props,{subjectSlug:(0,_subjectSlug.getMostRelevantSubjectSlugFromUrl)(r)}))})}
return a}(_react.Component)
var styles=_aphrodite.StyleSheet.create({assignmentLoadingIndicator:(_assignmentLoadingInd={display:"flex",alignItems:"center",justifyContent:"center",height:_globalStyles.constants.topBarHeightDesktop},_assignmentLoadingInd[_mediaQueries2.default.smOrSmaller]={height:_globalStyles.constants.topBarHeightMobile},_assignmentLoadingInd)})
exports.default=AsyncCreateAssignmentHeader
});
KAdefine("javascript/assignments-async-loader-package/subject-slug.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getMostRelevantSubjectSlugFromUrl=exports.getAllSubjectSlugs=undefined
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getAllSubject {\n        domains: studentListTopics {\n            subjects: topics {\n                id\n                slug\n            }\n        }\n    }\n"],["\n    query getAllSubject {\n        domains: studentListTopics {\n            subjects: topics {\n                id\n                slug\n            }\n        }\n    }\n"])
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _apolloFetch=require("../apollo-package/apollo-fetch.js")
var _apolloFetch2=babelHelpers.interopRequireDefault(_apolloFetch)
var DATA_QUERY=(0,_graphqlTag2.default)(_templateObject)
var getAllSubjectSlugs=exports.getAllSubjectSlugs=function e(){return(0,_apolloFetch2.default)(DATA_QUERY,null,"cache-first").then(function(e){var t=e.data
var r=[]
for(var a=t.domains,l=Array.isArray(a),n=0,a=l?a:a[Symbol.iterator]();;){var o
if(l){if(n>=a.length)break
o=a[n++]}else{n=a.next()
if(n.done)break
o=n.value}var u=o
for(var s=u.subjects,i=Array.isArray(s),c=0,s=i?s:s[Symbol.iterator]();;){var p
if(i){if(c>=s.length)break
p=s[c++]}else{c=s.next()
if(c.done)break
p=c.value}var g=p
r.push(g.slug)}}return r})}
var getMostRelevantSubjectSlugFromUrl=exports.getMostRelevantSubjectSlugFromUrl=function t(e,r){var a=(r||window.location.pathname).slice(1).split("/")
var l=a.reverse().find(function(t){return e.includes(t)})
return l||"other"}
});
; KAdefine.updatePathToPackageMap({"javascript/assignments-package/create-assignment-header.jsx": "assignments.js"});
