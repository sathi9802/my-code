KAdefine("javascript/node_modules/whatwg-fetch/index.js", function(require, module, exports) {
require("../../../third_party/javascript-khansrc/fetch/fetch.js");
require("../../../third_party/javascript-khansrc/fetch/fetch.js")
});
KAdefine("javascript/node_modules/react-apollo/index.js", function(require, module, exports) {
require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js");
module.exports=require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js").ReactApollo
});
KAdefine("javascript/node_modules/apollo-client/index.js", function(require, module, exports) {
require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js");
module.exports=require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js").ApolloClient
});
KAdefine("javascript/node_modules/graphql-tag/index.js", function(require, module, exports) {
require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js");
module.exports=require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js").gql
});
KAdefine("javascript/node_modules/apollo-cache-inmemory/index.js", function(require, module, exports) {
require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js");
module.exports=require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js").ApolloCacheInMemory
});
KAdefine("javascript/node_modules/apollo-link-http/index.js", function(require, module, exports) {
require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js");
module.exports=require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js").ApolloLinkHTTP
});
KAdefine("javascript/node_modules/apollo-link-error/index.js", function(require, module, exports) {
require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js");
module.exports=require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js").ApolloLinkError
});
KAdefine("javascript/node_modules/apollo-link/index.js", function(require, module, exports) {
require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js");
module.exports=require("../../../third_party/javascript-khansrc/apollo-khansrc/apollo.js").ApolloLink
});
KAdefine("third_party/javascript-khansrc/apollo-khansrc/apollo.js", function(require, module, exports) {
require("../../../javascript/node_modules/react/index.js");
require("../../../javascript/node_modules/redux/index.js");
require("../../../javascript/node_modules/whatwg-fetch/index.js");
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t
if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.Apollo=e()}})(function(){var e,t,r
return function n(e,t,r){function i(a,u){if(!t[a]){if(!e[a]){var s=typeof require=="function"&&require
if(!u&&s)return s(a,!0)
if(o)return o(a,!0)
var c=new Error("Cannot find module '"+a+"'")
throw c.code="MODULE_NOT_FOUND",c}var l=t[a]={exports:{}}
e[a][0].call(l.exports,function(t){var r=e[a][1][t]
return i(r?r:t)},l,l.exports,n,e,t,r)}return t[a].exports}var o=typeof require=="function"&&require
for(var a=0;a<r.length;a++)i(r[a])
return i}({1:[function(e,t,r){e("es6-map/implement")
e("es6-weak-map/implement")
e("es6-set/implement")
var n=e("react-apollo")
var i=e("apollo-client")
var o=e("graphql-tag")
var a=e("apollo-cache-inmemory")
var u=e("apollo-link-http")
var s=e("apollo-link-error")
var c=e("apollo-link")
t.exports={ReactApollo:n,ApolloClient:i,gql:o,ApolloCacheInMemory:a,ApolloLinkHTTP:u,ApolloLinkError:s,ApolloLink:c}},{"apollo-cache-inmemory":2,"apollo-client":6,"apollo-link":14,"apollo-link-error":9,"apollo-link-http":12,"es6-map/implement":72,"es6-set/implement":78,"es6-weak-map/implement":88,"graphql-tag":97,"react-apollo":170}],2:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-utilities"),t("graphql/language/printer"),t("graphql-anywhere"),t("apollo-cache")):typeof e==="function"&&e.amd?e(["exports","apollo-utilities","graphql/language/printer","graphql-anywhere","apollo-cache"],o):o((i.apollo=i.apollo||{},i.apollo.cache=i.apollo.cache||{},i.apollo.cache.inmemory={}),i.apollo.utilities,i.printer,i.graphqlAnywhere,i.apolloCache.core)})(this,function(e,t,r,n,i){"use strict"
n=n&&n.hasOwnProperty("default")?n["default"]:n
var o=false
var a=function(){function e(){}e.prototype.ensureReady=function(){return Promise.resolve()}
e.prototype.canBypassInit=function(){return true}
e.prototype.match=function(e,r,n){var i=n.store.get(e.id)
if(!i){return false}if(!i.__typename){if(!o){console.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.")
console.warn("Could not find __typename on Fragment ",r,i)
console.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior "+"and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.")
if(!t.isTest()){o=true}}n.returnPartialData=true
return true}if(i.__typename===r){return true}t.warnOnceInDevelopment("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types.\n     Apollo Client will not be able to able to accurately map fragments."+"To make this error go away, use the IntrospectionFragmentMatcher as described in the docs: "+"https://www.apollographql.com/docs/react/recipes/fragment-matching.html","error")
n.returnPartialData=true
return true}
return e}()
var u=function(){function e(e){if(e&&e.introspectionQueryResultData){this.possibleTypesMap=this.parseIntrospectionResult(e.introspectionQueryResultData)
this.isReady=true}else{this.isReady=false}this.match=this.match.bind(this)}e.prototype.match=function(e,t,r){if(!this.isReady){throw new Error("FragmentMatcher.match() was called before FragmentMatcher.init()")}var n=r.store.get(e.id)
if(!n){return false}if(!n.__typename){throw new Error("Cannot match fragment because __typename property is missing: "+JSON.stringify(n))}if(n.__typename===t){return true}var i=this.possibleTypesMap[t]
if(i&&i.indexOf(n.__typename)>-1){return true}return false}
e.prototype.parseIntrospectionResult=function(e){var t={}
e.__schema.types.forEach(function(e){if(e.kind==="UNION"||e.kind==="INTERFACE"){t[e.name]=e.possibleTypes.map(function(e){return e.name})}})
return t}
return e}()
var s=function(){function e(e){if(e===void 0){e={}}this.data=e}e.prototype.toObject=function(){return this.data}
e.prototype.get=function(e){return this.data[e]}
e.prototype.set=function(e,t){this.data[e]=t}
e.prototype.delete=function(e){this.data[e]=undefined}
e.prototype.clear=function(){this.data={}}
e.prototype.replace=function(e){this.data=e||{}}
return e}()
function c(e){return new s(e)}var l=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var f=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var p=function(e){l(t,e)
function t(){var t=e!==null&&e.apply(this,arguments)||this
t.type="WriteError"
return t}return t}(Error)
function d(e,t){var n=new p("Error writing result to store for query:\n "+r.print(t))
n.message+="\n"+e.message
n.stack=e.stack
return n}function v(e){var r=e.result,n=e.query,i=e.storeFactory,o=i===void 0?c:i,a=e.store,u=a===void 0?o():a,s=e.variables,l=e.dataIdFromObject,f=e.fragmentMap,p=f===void 0?{}:f,v=e.fragmentMatcherFunction
var h=t.getQueryDefinition(n)
s=t.assign({},t.getDefaultValues(h),s)
try{return y({dataId:"ROOT_QUERY",result:r,selectionSet:h.selectionSet,context:{store:u,storeFactory:o,processedData:{},variables:s,dataIdFromObject:l,fragmentMap:p,fragmentMatcherFunction:v}})}catch(m){throw d(m,n)}}function h(e){var r=e.dataId,n=e.result,i=e.document,o=e.storeFactory,a=o===void 0?c:o,u=e.store,s=u===void 0?a():u,l=e.variables,f=e.dataIdFromObject,p=e.fragmentMatcherFunction
var v=t.getOperationDefinition(i)
var h=v.selectionSet
var m=t.createFragmentMap(t.getFragmentDefinitions(i))
l=t.assign({},t.getDefaultValues(v),l)
try{return y({result:n,dataId:r,selectionSet:h,context:{store:s,storeFactory:a,processedData:{},variables:l,dataIdFromObject:f,fragmentMap:m,fragmentMatcherFunction:p}})}catch(b){throw d(b,i)}}function y(e){var r=e.result,n=e.dataId,i=e.selectionSet,o=e.context
var a=o.variables,u=o.store,c=o.fragmentMap
i.selections.forEach(function(e){var i=t.shouldInclude(e,a)
if(t.isField(e)){var u=t.resultKeyNameFromField(e)
var l=r[u]
if(i){if(typeof l!=="undefined"){_({dataId:n,value:l,field:e,context:o})}else{var f=e.directives&&e.directives.length&&e.directives.some(function(e){return e.name&&e.name.value==="defer"})
if(!f&&o.fragmentMatcherFunction){if(!t.isProduction()){console.warn("Missing field "+u+" in "+JSON.stringify(r,null,2).substring(0,100))}}}}}else{var p=void 0
if(t.isInlineFragment(e)){p=e}else{p=(c||{})[e.name.value]
if(!p){throw new Error("No fragment named "+e.name.value+".")}}var d=true
if(o.fragmentMatcherFunction&&p.typeCondition){var v={type:"id",id:"self",generated:false}
var h={store:new s({self:r}),returnPartialData:false,hasMissingField:false,cacheRedirects:{}}
d=o.fragmentMatcherFunction(v,p.typeCondition.name.value,h)
if(!t.isProduction()&&h.returnPartialData){console.error("WARNING: heuristic fragment matching going on!")}}if(i&&d){y({result:r,selectionSet:p.selectionSet,dataId:n,context:o})}}})
return u}function m(e){return e[0]==="$"}function b(e,r,n){var i=n.get(e)
var o=n.get(r)
Object.keys(i).forEach(function(a){var u=i[a]
var s=o[a]
if(t.isIdValue(u)&&m(u.id)&&t.isIdValue(s)){b(u.id,s.id,n)}n.delete(e)
n.set(r,f({},i,o))})}function g(e,t,r){if(!r){return false}if(r[e]){if(r[e].indexOf(t)>=0){return true}else{r[e].push(t)}}else{r[e]=[t]}return false}function _(e){var n=e.field,i=e.value,o=e.dataId,a=e.context
var u=a.variables,s=a.dataIdFromObject,c=a.store
var l
var p
var d=t.storeKeyNameFromField(n,u)
var v=false
var h=""
if(!n.selectionSet||i===null){l=i!=null&&typeof i==="object"?{type:"json",json:i}:i}else if(Array.isArray(i)){var _=o+"."+d
l=w(i,_,n.selectionSet,a)}else{var O=o+"."+d
var E=true
if(!m(O)){O="$"+O}if(s){var k=s(i)
if(k&&m(k)){throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.')}if(k){O=k
E=false}}if(!g(O,n,a.processedData)){y({dataId:O,result:i,selectionSet:n.selectionSet,context:a})}l={type:"id",id:O,generated:E}
p=c.get(o)
if(p&&p[d]!==l){var x=p[d]
if(t.isIdValue(l)&&l.generated&&t.isIdValue(x)&&!x.generated){throw new Error("Store error: the application attempted to write an object with no provided id"+(" but the store already contains an id of "+x.id+" for this object. The selectionSet")+" that was trying to be written is:\n"+r.print(n))}if(t.isIdValue(x)&&x.generated){h=x.id
v=true}}}var j=f({},c.get(o),(T={},T[d]=l,T))
if(v){b(h,l.id,c)}p=c.get(o)
if(!p||l!==p[d]){c.set(o,j)}var T}function w(e,t,r,n){return e.map(function(e,i){if(e===null){return null}var o=t+"."+i
if(Array.isArray(e)){return w(e,o,r,n)}var a=true
if(n.dataIdFromObject){var u=n.dataIdFromObject(e)
if(u){o=u
a=false}}if(!g(o,r,n.processedData)){y({dataId:o,result:e,selectionSet:r,context:n})}var s={type:"id",id:o,generated:a}
return s})}var O=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var E=typeof Symbol!=="undefined"?Symbol("id"):"@@id"
function k(e){var t={returnPartialData:false}
return j(O({},e,t)).result}var x=function(e,r,n,i,o){var a=o.resultKey,u=o.directives
T(r)
var s=r.id
var c=i.store.get(s)
var l=t.getStoreKeyName(e,n,u)
var f=(c||{})[l]
if(typeof f==="undefined"){if(i.cacheRedirects&&c&&(c.__typename||s==="ROOT_QUERY")){var p=c.__typename||"Query"
var d=i.cacheRedirects[p]
if(d){var v=d[e]
if(v){f=v(c,n,{getCacheKey:function(e){return t.toIdValue(i.dataIdFromObject(e))}})}}}}if(typeof f==="undefined"){if(!i.returnPartialData){throw new Error("Can't find field "+l+" on object ("+s+") "+JSON.stringify(c,null,2)+".")}i.hasMissingField=true
return f}if(t.isJsonValue(f)){if(r.previousResult&&t.isEqual(r.previousResult[a],f.json)){return r.previousResult[a]}return f.json}if(r.previousResult){f=S(f,r.previousResult[a])}return f}
function j(e){var r=e.store,i=e.query,o=e.variables,a=e.previousResult,u=e.returnPartialData,s=u===void 0?true:u,c=e.rootId,l=c===void 0?"ROOT_QUERY":c,f=e.fragmentMatcherFunction,p=e.config
var d=t.getQueryDefinition(i)
o=t.assign({},t.getDefaultValues(d),o)
var v={store:r,returnPartialData:s,dataIdFromObject:p&&p.dataIdFromObject||null,cacheRedirects:p&&p.cacheRedirects||{},hasMissingField:false}
var h={type:"id",id:l,previousResult:a}
var y=n(x,i,h,v,o,{fragmentMatcher:f,resultMapper:P})
return{result:y,complete:!v.hasMissingField}}function T(e){if(!t.isIdValue(e)){throw new Error("Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.")}}function S(e,r){if(t.isIdValue(e)){return O({},e,{previousResult:r})}else if(Array.isArray(e)){var n=new Map
if(Array.isArray(r)){r.forEach(function(e){if(e&&e[E]){n.set(e[E],e)}})}return e.map(function(e,i){var o=r&&r[i]
if(t.isIdValue(e)){o=n.get(e.id)||o}return S(e,o)})}return e}function P(e,t){if(t.previousResult){var r=Object.keys(e)
var n=Object.keys(t.previousResult).reduce(function(e,t){return e&&r.indexOf(t)>-1},true)&&r.every(function(r){return I(e[r],t.previousResult[r])})
if(n){return t.previousResult}}Object.defineProperty(e,E,{enumerable:false,configurable:false,writable:false,value:t.id})
return e}function I(e,t){if(e===t){return true}if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length){return false}return e.every(function(e,r){return I(e,t[r])})}var N=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var D=function(){function e(e){if(e===void 0){e={}}this.data=e
this.recordedData={}}e.prototype.record=function(e){e(this)
var t=this.recordedData
this.recordedData={}
return t}
e.prototype.toObject=function(){return N({},this.data,this.recordedData)}
e.prototype.get=function(e){if(this.recordedData.hasOwnProperty(e)){return this.recordedData[e]}return this.data[e]}
e.prototype.set=function(e,t){if(this.get(e)!==t){this.recordedData[e]=t}}
e.prototype.delete=function(e){this.recordedData[e]=undefined}
e.prototype.clear=function(){var e=this
Object.keys(this.data).forEach(function(t){return e.delete(t)})
this.recordedData={}}
e.prototype.replace=function(e){this.clear()
this.recordedData=N({},e)}
return e}()
function q(e,t){var r=new D(e)
return r.record(t)}var F=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var R=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var A={fragmentMatcher:new a,dataIdFromObject:M,addTypename:true,storeFactory:c}
function M(e){if(e.__typename){if(e.id!==undefined){return e.__typename+":"+e.id}if(e._id!==undefined){return e.__typename+":"+e._id}}return null}var Q=function(e){F(r,e)
function r(t){if(t===void 0){t={}}var r=e.call(this)||this
r.optimistic=[]
r.watches=[]
r.silenceBroadcast=false
r.config=R({},A,t)
if(r.config.customResolvers){console.warn("customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.")
r.config.cacheRedirects=r.config.customResolvers}if(r.config.cacheResolvers){console.warn("cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.")
r.config.cacheRedirects=r.config.cacheResolvers}r.addTypename=r.config.addTypename
r.data=r.config.storeFactory()
return r}r.prototype.restore=function(e){if(e)this.data.replace(e)
return this}
r.prototype.extract=function(e){if(e===void 0){e=false}if(e&&this.optimistic.length>0){var t=this.optimistic.map(function(e){return e.data})
return Object.assign.apply(Object,[{},this.data.toObject()].concat(t))}return this.data.toObject()}
r.prototype.read=function(e){if(e.rootId&&this.data.get(e.rootId)===undefined){return null}return k({store:this.config.storeFactory(this.extract(e.optimistic)),query:this.transformDocument(e.query),variables:e.variables,rootId:e.rootId,fragmentMatcherFunction:this.config.fragmentMatcher.match,previousResult:e.previousResult,config:this.config})}
r.prototype.write=function(e){h({dataId:e.dataId,result:e.result,variables:e.variables,document:this.transformDocument(e.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:this.config.fragmentMatcher.match})
this.broadcastWatches()}
r.prototype.diff=function(e){return j({store:this.config.storeFactory(this.extract(e.optimistic)),query:this.transformDocument(e.query),variables:e.variables,returnPartialData:e.returnPartialData,previousResult:e.previousResult,fragmentMatcherFunction:this.config.fragmentMatcher.match,config:this.config})}
r.prototype.watch=function(e){var t=this
this.watches.push(e)
return function(){t.watches=t.watches.filter(function(t){return t!==e})}}
r.prototype.evict=function(e){throw new Error("eviction is not implemented on InMemory Cache")}
r.prototype.reset=function(){this.data.clear()
this.broadcastWatches()
return Promise.resolve()}
r.prototype.removeOptimistic=function(e){var t=this
var r=this.optimistic.filter(function(t){return t.id!==e})
this.optimistic=[]
r.forEach(function(e){t.recordOptimisticTransaction(e.transaction,e.id)})
this.broadcastWatches()}
r.prototype.performTransaction=function(e){var t=this.silenceBroadcast
this.silenceBroadcast=true
e(this)
if(!t){this.silenceBroadcast=false}this.broadcastWatches()}
r.prototype.recordOptimisticTransaction=function(e,t){var r=this
this.silenceBroadcast=true
var n=q(this.extract(true),function(t){var n=r.data
r.data=t
r.performTransaction(e)
r.data=n})
this.optimistic.push({id:t,transaction:e,data:n})
this.silenceBroadcast=false
this.broadcastWatches()}
r.prototype.transformDocument=function(e){if(this.addTypename)return t.addTypenameToDocument(e)
return e}
r.prototype.readQuery=function(e,t){if(t===void 0){t=false}return this.read({query:e.query,variables:e.variables,optimistic:t})}
r.prototype.readFragment=function(e,r){if(r===void 0){r=false}return this.read({query:this.transformDocument(t.getFragmentQueryDocument(e.fragment,e.fragmentName)),variables:e.variables,rootId:e.id,optimistic:r})}
r.prototype.writeQuery=function(e){this.write({dataId:"ROOT_QUERY",result:e.data,query:this.transformDocument(e.query),variables:e.variables})}
r.prototype.writeFragment=function(e){this.write({dataId:e.id,result:e.data,query:this.transformDocument(t.getFragmentQueryDocument(e.fragment,e.fragmentName)),variables:e.variables})}
r.prototype.broadcastWatches=function(){var e=this
if(this.silenceBroadcast)return
this.watches.forEach(function(t){var r=e.diff({query:t.query,variables:t.variables,previousResult:t.previousResult&&t.previousResult(),optimistic:t.optimistic})
t.callback(r)})}
return r}(i.ApolloCache)
e.InMemoryCache=Q
e.defaultDataIdFromObject=M
e.ID_KEY=E
e.readQueryFromStore=k
e.diffQueryAgainstStore=j
e.assertIdValue=T
e.WriteError=p
e.enhanceErrorWithDocument=d
e.writeQueryToStore=v
e.writeResultToStore=h
e.writeSelectionSetToStore=y
e.HeuristicFragmentMatcher=a
e.IntrospectionFragmentMatcher=u
e.ObjectCache=s
e.defaultNormalizedCacheFactory=c
e.RecordingCache=D
e.record=q
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-cache":3,"apollo-utilities":4,"graphql-anywhere":5,"graphql/language/printer":111}],3:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-utilities")):typeof e==="function"&&e.amd?e(["exports","apollo-utilities"],o):o((i.apollo=i.apollo||{},i.apollo.cache=i.apollo.cache||{},i.apollo.cache.core={}),i.apollo.utilities)})(this,function(e,t){"use strict"
function r(e){var t={kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:i(e)}
var r={kind:"Document",definitions:[t]}
return r}function n(e,t){var r={kind:"FragmentDefinition",typeCondition:{kind:"NamedType",name:{kind:"Name",value:t||"__FakeType"}},name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:i(e)}
var n={kind:"Document",definitions:[r]}
return n}function i(e){if(typeof e==="number"||typeof e==="boolean"||typeof e==="string"||typeof e==="undefined"||e===null){return null}if(Array.isArray(e)){return i(e[0])}var t=[]
Object.keys(e).forEach(function(r){var n={kind:"Field",name:{kind:"Name",value:r}}
var o=i(e[r])
if(o){n.selectionSet=o}t.push(n)})
var r={kind:"SelectionSet",selections:t}
return r}var o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:null}]}}]}
var a=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var u=function(){function e(){}e.prototype.transformDocument=function(e){return e}
e.prototype.transformForLink=function(e){return e}
e.prototype.readQuery=function(e,t){if(t===void 0){t=false}return this.read({query:e.query,variables:e.variables,optimistic:t})}
e.prototype.readFragment=function(e,r){if(r===void 0){r=false}return this.read({query:t.getFragmentQueryDocument(e.fragment,e.fragmentName),variables:e.variables,rootId:e.id,optimistic:r})}
e.prototype.writeQuery=function(e){this.write({dataId:"ROOT_QUERY",result:e.data,query:e.query,variables:e.variables})}
e.prototype.writeFragment=function(e){this.write({dataId:e.id,result:e.data,variables:e.variables,query:t.getFragmentQueryDocument(e.fragment,e.fragmentName)})}
e.prototype.writeData=function(e){var t=e.id,i=e.data
if(typeof t!=="undefined"){var u=null
try{u=this.read({rootId:t,optimistic:false,query:o})}catch(s){}var c=u&&u.__typename||"__ClientData"
var l=a({__typename:c},i)
this.writeFragment({id:t,fragment:n(l,c),data:l})}else{this.writeQuery({query:r(i),data:i})}}
return e}();(function(e){})(e.Cache||(e.Cache={}))
e.ApolloCache=u
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-utilities":4}],4:[function(t,r,n){(function(t){(function(t,i){typeof n==="object"&&typeof r!=="undefined"?i(n):typeof e==="function"&&e.amd?e(["exports"],i):i((t.apollo=t.apollo||{},t.apollo.utilities={}))})(this,function(e){"use strict"
function r(e){return["StringValue","BooleanValue","EnumValue"].indexOf(e.kind)>-1}function n(e){return["IntValue","FloatValue"].indexOf(e.kind)>-1}function i(e){return e.kind==="StringValue"}function o(e){return e.kind==="BooleanValue"}function a(e){return e.kind==="IntValue"}function u(e){return e.kind==="FloatValue"}function s(e){return e.kind==="Variable"}function c(e){return e.kind==="ObjectValue"}function l(e){return e.kind==="ListValue"}function f(e){return e.kind==="EnumValue"}function p(e){return e.kind==="NullValue"}function d(e,t,r,n){if(a(r)||u(r)){e[t.value]=Number(r.value)}else if(o(r)||i(r)){e[t.value]=r.value}else if(c(r)){var v={}
r.fields.map(function(e){return d(v,e.name,e.value,n)})
e[t.value]=v}else if(s(r)){var h=(n||{})[r.name.value]
e[t.value]=h}else if(l(r)){e[t.value]=r.values.map(function(e){var r={}
d(r,t,e,n)
return r[t.value]})}else if(f(r)){e[t.value]=r.value}else if(p(r)){e[t.value]=null}else{throw new Error('The inline argument "'+t.value+'" of kind "'+r.kind+'" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.')}}function v(e,t){var r=null
if(e.directives){r={}
e.directives.forEach(function(e){r[e.name.value]={}
if(e.arguments){e.arguments.forEach(function(n){var i=n.name,o=n.value
return d(r[e.name.value],i,o,t)})}})}var n=null
if(e.arguments&&e.arguments.length){n={}
e.arguments.forEach(function(e){var r=e.name,i=e.value
return d(n,r,i,t)})}return y(e.name.value,n,r)}var h=["connection","include","skip","client","rest","export"]
function y(e,t,r){if(r&&r["connection"]&&r["connection"]["key"]){if(r["connection"]["filter"]&&r["connection"]["filter"].length>0){var n=r["connection"]["filter"]?r["connection"]["filter"]:[]
n.sort()
var i=t
var o={}
n.forEach(function(e){o[e]=i[e]})
return r["connection"]["key"]+"("+JSON.stringify(o)+")"}else{return r["connection"]["key"]}}var a=e
if(t){var u=JSON.stringify(t)
a+="("+u+")"}if(r){Object.keys(r).forEach(function(e){if(h.indexOf(e)!==-1)return
if(r[e]&&Object.keys(r[e]).length){a+="@"+e+"("+JSON.stringify(r[e])+")"}else{a+="@"+e}})}return a}function m(e,t){if(e.arguments&&e.arguments.length){var r={}
e.arguments.forEach(function(e){var n=e.name,i=e.value
return d(r,n,i,t)})
return r}return null}function b(e){return e.alias?e.alias.value:e.name.value}function g(e){return e.kind==="Field"}function _(e){return e.kind==="InlineFragment"}function w(e){return e&&e.type==="id"}function O(e,t){if(t===void 0){t=false}return{type:"id",id:e,generated:t}}function E(e){return e!=null&&typeof e==="object"&&e.type==="json"}function k(e){throw new Error("Variable nodes are not supported by valueFromNode")}function x(e,t){if(t===void 0){t=k}switch(e.kind){case"Variable":return t(e)
case"NullValue":return null
case"IntValue":return parseInt(e.value)
case"FloatValue":return parseFloat(e.value)
case"ListValue":return e.values.map(function(e){return x(e,t)})
case"ObjectValue":{var r={}
for(var n=0,i=e.fields;n<i.length;n++){var o=i[n]
r[o.name.value]=x(o.value,t)}return r}default:return e.value}}function j(e,t){if(e.directives&&e.directives.length){var r={}
e.directives.forEach(function(e){r[e.name.value]=m(e,t)})
return r}return null}function T(e,t){if(t===void 0){t={}}if(!e.directives){return true}var r=true
e.directives.forEach(function(e){if(e.name.value!=="skip"&&e.name.value!=="include"){return}var n=e.arguments||[]
var i=e.name.value
if(n.length!==1){throw new Error("Incorrect number of arguments for the @"+i+" directive.")}var o=n[0]
if(!o.name||o.name.value!=="if"){throw new Error("Invalid argument for the @"+i+" directive.")}var a=n[0].value
var u=false
if(!a||a.kind!=="BooleanValue"){if(a.kind!=="Variable"){throw new Error("Argument for the @"+i+" directive must be a variable or a boolean value.")}else{u=t[a.name.value]
if(u===undefined){throw new Error("Invalid variable referenced in @"+i+" directive.")}}}else{u=a.value}if(i==="skip"){u=!u}if(!u){r=false}})
return r}function S(e){if(!e.selectionSet||!(e.selectionSet.selections.length>0))return[e]
return[e].concat(e.selectionSet.selections.map(function(e){return[e].concat(S(e))}).reduce(function(e,t){return e.concat(t)},[]))}var P=new Map
function I(e){var t=P.get(e)
if(t)return t
var r=e.definitions.filter(function(e){return e.selectionSet&&e.selectionSet.selections}).map(function(e){return S(e)}).reduce(function(e,t){return e.concat(t)},[]).filter(function(e){return e.directives&&e.directives.length>0}).map(function(e){return e.directives}).reduce(function(e,t){return e.concat(t)},[]).map(function(e){return e.name.value})
P.set(e,r)
return r}function N(e,t){return I(t).some(function(t){return e.indexOf(t)>-1})}var D=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
function q(e,t){var r=t
var n=[]
e.definitions.forEach(function(e){if(e.kind==="OperationDefinition"){throw new Error("Found a "+e.operation+" operation"+(e.name?" named '"+e.name.value+"'":"")+". "+"No operations are allowed when using a fragment as a query. Only fragments are allowed.")}if(e.kind==="FragmentDefinition"){n.push(e)}})
if(typeof r==="undefined"){if(n.length!==1){throw new Error("Found "+n.length+" fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")}r=n[0].name.value}var i=D({},e,{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}].concat(e.definitions)})
return i}function F(e){var t=[]
for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}t.forEach(function(t){if(typeof t==="undefined"||t===null){return}Object.keys(t).forEach(function(r){e[r]=t[r]})})
return e}function R(e){A(e)
var t=e.definitions.filter(function(e){return e.kind==="OperationDefinition"&&e.operation==="mutation"})[0]
if(!t){throw new Error("Must contain a mutation definition.")}return t}function A(e){if(e.kind!=="Document"){throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql')}var t=e.definitions.filter(function(e){return e.kind!=="FragmentDefinition"}).map(function(e){if(e.kind!=="OperationDefinition"){throw new Error('Schema type definitions not allowed in queries. Found: "'+e.kind+'"')}return e})
if(t.length>1){throw new Error("Ambiguous GraphQL document: contains "+t.length+" operations")}}function M(e){A(e)
return e.definitions.filter(function(e){return e.kind==="OperationDefinition"})[0]}function Q(e){var t=M(e)
if(!t){throw new Error("GraphQL document is missing an operation")}return t}function L(e){return e.definitions.filter(function(e){return e.kind==="OperationDefinition"&&e.name}).map(function(e){return e.name.value})[0]||null}function C(e){return e.definitions.filter(function(e){return e.kind==="FragmentDefinition"})}function V(e){var t=M(e)
if(!t||t.operation!=="query"){throw new Error("Must contain a query definition.")}return t}function K(e){if(e.kind!=="Document"){throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql')}if(e.definitions.length>1){throw new Error("Fragment must have exactly one definition.")}var t=e.definitions[0]
if(t.kind!=="FragmentDefinition"){throw new Error("Must be a fragment definition.")}return t}function B(e){A(e)
var t
for(var r=0,n=e.definitions;r<n.length;r++){var i=n[r]
if(i.kind==="OperationDefinition"){var o=i.operation
if(o==="query"||o==="mutation"||o==="subscription"){return i}}if(i.kind==="FragmentDefinition"&&!t){t=i}}if(t){return t}throw new Error("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.")}function U(e){if(e===void 0){e=[]}var t={}
e.forEach(function(e){t[e.name.value]=e})
return t}function W(e){if(e&&e.variableDefinitions&&e.variableDefinitions.length){var t=e.variableDefinitions.filter(function(e){var t=e.defaultValue
return t}).map(function(e){var t=e.variable,r=e.defaultValue
var n={}
d(n,t.name,r)
return n})
return F.apply(void 0,[{}].concat(t))}return{}}function z(e){var t=new Set
if(e.variableDefinitions){for(var r=0,n=e.variableDefinitions;r<n.length;r++){var i=n[r]
t.add(i.variable.name.value)}}return t}function G(e){if(Array.isArray(e)){return e.map(function(e){return G(e)})}if(e!==null&&typeof e==="object"){var t={}
for(var r in e){if(e.hasOwnProperty(r)){t[r]=G(e[r])}}return t}return e}var Y={kind:"Field",name:{kind:"Name",value:"__typename"}}
function J(e,t){return e.selectionSet.selections.filter(function(e){return!(e&&e.kind==="FragmentSpread"&&!J(t[e.name.value],t))}).length>0}function H(e){return function t(r){return e.some(function(e){if(e.name&&e.name===r.name.value)return true
if(e.test&&e.test(r))return true
return false})}}function X(e,t){if(t===void 0){t=false}if(e.selections){if(!t){var r=e.selections.some(function(e){return e.kind==="Field"&&e.name.value==="__typename"})
if(!r){e.selections.push(Y)}}e.selections.forEach(function(e){if(e.kind==="Field"){if(e.name.value.lastIndexOf("__",0)!==0&&e.selectionSet){X(e.selectionSet)}}else if(e.kind==="InlineFragment"){if(e.selectionSet){X(e.selectionSet)}}})}}function Z(e,t){if(!t.selections)return t
var r=e.some(function(e){return e.remove})
t.selections=t.selections.map(function(t){if(t.kind!=="Field"||!t||!t.directives)return t
var n=H(e)
var i
t.directives=t.directives.filter(function(e){var t=!n(e)
if(!i&&!t&&r)i=true
return t})
return i?null:t}).filter(function(e){return!!e})
t.selections.forEach(function(t){if((t.kind==="Field"||t.kind==="InlineFragment")&&t.selectionSet){Z(e,t.selectionSet)}})
return t}function et(e,t){var r=G(t)
r.definitions.forEach(function(t){Z(e,t.selectionSet)})
var n=Q(r)
var i=U(C(r))
return J(n,i)?r:null}var tt=new Map
function rt(e){A(e)
var t=tt.get(e)
if(t)return t
var r=G(e)
r.definitions.forEach(function(e){var t=e.kind==="OperationDefinition"
X(e.selectionSet,t)})
tt.set(e,r)
return r}var nt={test:function(e){var t=e.name.value==="connection"
if(t){if(!e.arguments||!e.arguments.some(function(e){return e.name.value==="key"})){console.warn("Removing an @connection directive even though it does not have a key. "+"You may want to use the key parameter to specify a store key.")}}return t}}
var it=new Map
function ot(e){A(e)
var t=it.get(e)
if(t)return t
var r=et([nt],e)
it.set(e,r)
return r}function at(e,t,r){if(r===void 0){r=true}if(!(t&&t.selections)){return false}var n=t.selections.filter(function(t){return ut(e,t,r)})
return n.length>0}function ut(e,t,r){if(r===void 0){r=true}if(t.kind!=="Field"||!t){return true}if(!t.directives){return false}var n=H(e)
var i=t.directives.filter(n)
return i.length>0||r&&at(e,t.selectionSet,r)}function st(e,t){t.selections=t.selections.filter(function(t){return ut(e,t,true)}).map(function(t){if(ut(e,t,false)){return t}if((t.kind==="Field"||t.kind==="InlineFragment")&&t.selectionSet){t.selectionSet=st(e,t.selectionSet)}return t})
return t}function ct(e,t,r){if(r===void 0){r=false}A(t)
var n=G(t)
n.definitions=n.definitions.map(function(t){if((t.kind==="OperationDefinition"||t.kind==="FragmentDefinition"&&!r)&&t.selectionSet){t.selectionSet=st(e,t.selectionSet)}return t})
var i=Q(n)
var o=U(C(n))
return J(i,o)?n:null}function lt(){if(typeof t!=="undefined"&&t.env.NODE_ENV){return t.env.NODE_ENV}return"development"}function ft(e){return lt()===e}function pt(){return ft("production")===true}function dt(){return ft("development")===true}function vt(){return ft("test")===true}function ht(e){try{return e()}catch(t){if(console.error){console.error(t)}}}function yt(e){return e.errors&&e.errors.length}function mt(e,t){if(e===t){return true}if(e instanceof Date&&t instanceof Date){return e.getTime()===t.getTime()}if(e!=null&&typeof e==="object"&&t!=null&&typeof t==="object"){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){if(!Object.prototype.hasOwnProperty.call(t,r)){return false}if(!mt(e[r],t[r])){return false}}}for(var r in t){if(!Object.prototype.hasOwnProperty.call(e,r)){return false}}return true}return false}function bt(e){Object.freeze(e)
Object.getOwnPropertyNames(e).forEach(function(t){if(e.hasOwnProperty(t)&&e[t]!==null&&(typeof e[t]==="object"||typeof e[t]==="function")&&!Object.isFrozen(e[t])){bt(e[t])}})
return e}function gt(e){if(dt()||vt()){return bt(e)}return e}var _t=Object.create({})
function wt(e,t){if(t===void 0){t="warn"}if(pt()){return}if(!_t[e]){if(!vt()){_t[e]=true}switch(t){case"error":console.error(e)
break
default:console.warn(e)}}}e.getDirectiveInfoFromField=j
e.shouldInclude=T
e.flattenSelections=S
e.getDirectiveNames=I
e.hasDirectives=N
e.getFragmentQueryDocument=q
e.getMutationDefinition=R
e.checkDocument=A
e.getOperationDefinition=M
e.getOperationDefinitionOrDie=Q
e.getOperationName=L
e.getFragmentDefinitions=C
e.getQueryDefinition=V
e.getFragmentDefinition=K
e.getMainDefinition=B
e.createFragmentMap=U
e.getDefaultValues=W
e.variablesInOperation=z
e.removeDirectivesFromDocument=et
e.addTypenameToDocument=rt
e.removeConnectionDirectiveFromDocument=ot
e.getDirectivesFromDocument=ct
e.isScalarValue=r
e.isNumberValue=n
e.valueToObjectRepresentation=d
e.storeKeyNameFromField=v
e.getStoreKeyName=y
e.argumentsObjectFromField=m
e.resultKeyNameFromField=b
e.isField=g
e.isInlineFragment=_
e.isIdValue=w
e.toIdValue=O
e.isJsonValue=E
e.valueFromNode=x
e.assign=F
e.cloneDeep=G
e.getEnv=lt
e.isEnv=ft
e.isProduction=pt
e.isDevelopment=dt
e.isTest=vt
e.tryFunctionOrLogError=ht
e.graphQLResultHasError=yt
e.isEqual=mt
e.maybeDeepFreeze=gt
e.warnOnceInDevelopment=wt
Object.defineProperty(e,"__esModule",{value:true})})}).call(this,t("_process"))},{_process:164}],5:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-utilities")):typeof e==="function"&&e.amd?e(["exports","apollo-utilities"],o):o(i.graphqlAnywhere={},i.apollo.utilities)})(this,function(e,t){"use strict"
function r(e,r,i,o,a,u){if(u===void 0){u={}}var s=t.getMainDefinition(r)
var c=t.getFragmentDefinitions(r)
var l=t.createFragmentMap(c)
var f=u.resultMapper
var p=u.fragmentMatcher||function(){return true}
var d={fragmentMap:l,contextValue:o,variableValues:a,resultMapper:f,resolver:e,fragmentMatcher:p}
return n(s.selectionSet,i,d)}function n(e,r,o){var u=o.fragmentMap,s=o.contextValue,c=o.variableValues
var l={}
e.selections.forEach(function(e){if(!t.shouldInclude(e,c)){return}if(t.isField(e)){var f=i(e,r,o)
var p=t.resultKeyNameFromField(e)
if(f!==undefined){if(l[p]===undefined){l[p]=f}else{a(l[p],f)}}}else{var d=void 0
if(t.isInlineFragment(e)){d=e}else{d=u[e.name.value]
if(!d){throw new Error("No fragment named "+e.name.value)}}var v=d.typeCondition.name.value
if(o.fragmentMatcher(r,v,s)){var h=n(d.selectionSet,r,o)
a(l,h)}}})
if(o.resultMapper){return o.resultMapper(l,r)}return l}function i(e,r,i){var a=i.variableValues,u=i.contextValue,s=i.resolver
var c=e.name.value
var l=t.argumentsObjectFromField(e,a)
var f={isLeaf:!e.selectionSet,resultKey:t.resultKeyNameFromField(e),directives:t.getDirectiveInfoFromField(e,a)}
var p=s(c,r,l,u,f)
if(!e.selectionSet){return p}if(p==null){return p}if(Array.isArray(p)){return o(e,p,i)}return n(e.selectionSet,p,i)}function o(e,t,r){return t.map(function(t){if(t===null){return null}if(Array.isArray(t)){return o(e,t,r)}return n(e.selectionSet,t,r)})}function a(e,t){if(t===null||typeof t!=="object"){return t}Object.keys(e).forEach(function(r){if(t.hasOwnProperty(r)){a(e[r],t[r])}})
Object.keys(t).forEach(function(r){if(!e.hasOwnProperty(r)){e[r]=t[r]}})}function u(e,t){var n=function(e,t,r,n,i){return t[i.resultKey]}
return r(n,e,t)}function s(e,t){var n=function(e,t,r,n,i){if(!{}.hasOwnProperty.call(t,i.resultKey)){throw new Error(i.resultKey+" missing on "+t)}return t[i.resultKey]}
r(n,e,t,{},{},{fragmentMatcher:function(){return false}})}var c="<<anonymous>>"
function l(e){this.message=e
this.stack=""}l.prototype=Error.prototype
var f={prop:"prop",context:"context",childContext:"child context"}
function p(e){function t(t,r,n,i,o,a){i=i||c
a=a||n
if(r[n]==null){var u=f[o]
if(t){if(r[n]===null){return new l("The "+u+" `"+a+"` is marked as required "+("in `"+i+"`, but its value is `null`."))}return new l("The "+u+" `"+a+"` is marked as required in "+("`"+i+"`, but its value is `undefined`."))}return null}else{return e(r,n,i,o,a)}}var r=t.bind(null,false)
r.isRequired=t.bind(null,true)
return r}function d(e){return p(function(t,r){var n=t[r]
try{s(e,n)
return null}catch(i){return i}})}e.default=r
e.filter=u
e.check=s
e.propType=d
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-utilities":4}],6:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-link"),t("symbol-observable"),t("apollo-utilities"),t("graphql/language/printer"),t("apollo-link-dedup")):typeof e==="function"&&e.amd?e(["exports","apollo-link","symbol-observable","apollo-utilities","graphql/language/printer","apollo-link-dedup"],o):o((i.apollo=i.apollo||{},i.apollo.core={}),i.apolloLink.core,i.$$observable,i.apollo.utilities,i.printer,i.apolloLink.dedup)})(this,function(e,t,r,n,i,o){"use strict"
r=r&&r.hasOwnProperty("default")?r["default"]:r;(function(e){e[e["loading"]=1]="loading"
e[e["setVariables"]=2]="setVariables"
e[e["fetchMore"]=3]="fetchMore"
e[e["refetch"]=4]="refetch"
e[e["poll"]=6]="poll"
e[e["ready"]=7]="ready"
e[e["error"]=8]="error"})(e.NetworkStatus||(e.NetworkStatus={}))
function a(e){return e<7}var u=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var s=function(e){u(t,e)
function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype[r]=function(){return this}
return t}(t.Observable)
var c=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
function l(e){return e.hasOwnProperty("graphQLErrors")}var f=function(e){var t=""
if(Array.isArray(e.graphQLErrors)&&e.graphQLErrors.length!==0){e.graphQLErrors.forEach(function(e){var r=e?e.message:"Error message not found."
t+="GraphQL error: "+r+"\n"})}if(e.networkError){t+="Network error: "+e.networkError.message+"\n"}t=t.replace(/\n$/,"")
return t}
var p=function(e){c(t,e)
function t(t){var r=t.graphQLErrors,n=t.networkError,i=t.errorMessage,o=t.extraInfo
var a=e.call(this,i)||this
a.graphQLErrors=r||[]
a.networkError=n||null
if(!i){a.message=f(a)}else{a.message=i}a.extraInfo=o
return a}return t}(Error);(function(e){e[e["normal"]=1]="normal"
e[e["refetch"]=2]="refetch"
e[e["poll"]=3]="poll"})(e.FetchType||(e.FetchType={}))
var d=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var v=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var h=function(e,t){if(t===void 0){t="none"}return e&&(e.graphQLErrors&&e.graphQLErrors.length>0&&t==="none"||e.networkError)}
var y=function(t){d(r,t)
function r(e){var r=e.scheduler,n=e.options,i=e.shouldSubscribe,o=i===void 0?true:i
var a=t.call(this,function(e){return a.onSubscribe(e)})||this
a.isCurrentlyPolling=false
a.isTornDown=false
a.options=n
a.variables=n.variables||{}
a.queryId=r.queryManager.generateQueryId()
a.shouldSubscribe=o
a.scheduler=r
a.queryManager=r.queryManager
a.observers=[]
a.subscriptionHandles=[]
return a}r.prototype.result=function(){var e=this
return new Promise(function(t,r){var n
var i={next:function(r){t(r)
if(!e.observers.some(function(e){return e!==i})){e.queryManager.removeQuery(e.queryId)}setTimeout(function(){n.unsubscribe()},0)},error:function(e){r(e)}}
n=e.subscribe(i)})}
r.prototype.currentResult=function(){if(this.isTornDown){return{data:this.lastError?{}:this.lastResult?this.lastResult.data:{},error:this.lastError,loading:false,networkStatus:e.NetworkStatus.error}}var t=this.queryManager.queryStore.get(this.queryId)
if(h(t,this.options.errorPolicy)){return{data:{},loading:false,networkStatus:t.networkStatus,error:new p({graphQLErrors:t.graphQLErrors,networkError:t.networkError})}}var r=this.queryManager.getCurrentQueryResult(this),n=r.data,i=r.partial
var o=!t||t.networkStatus===e.NetworkStatus.loading
var u=this.options.fetchPolicy==="network-only"&&o||i&&this.options.fetchPolicy!=="cache-only"
var s
if(t){s=t.networkStatus}else{s=u?e.NetworkStatus.loading:e.NetworkStatus.ready}var c={data:n,loading:a(s),networkStatus:s}
if(t&&t.graphQLErrors&&this.options.errorPolicy==="all"){c.errors=t.graphQLErrors}if(!i){var l=false
this.lastResult=v({},c,{stale:l})}return v({},c,{partial:i})}
r.prototype.getLastResult=function(){return this.lastResult}
r.prototype.getLastError=function(){return this.lastError}
r.prototype.resetLastResults=function(){delete this.lastResult
delete this.lastError
this.isTornDown=false}
r.prototype.refetch=function(t){if(this.options.fetchPolicy==="cache-only"){return Promise.reject(new Error("cache-only fetchPolicy option should not be used together with query refetch."))}if(!n.isEqual(this.variables,t)){this.variables=v({},this.variables,t)}if(!n.isEqual(this.options.variables,this.variables)){this.options.variables=v({},this.options.variables,this.variables)}var r=v({},this.options,{fetchPolicy:"network-only"})
return this.queryManager.fetchQuery(this.queryId,r,e.FetchType.refetch).then(function(e){return n.maybeDeepFreeze(e)})}
r.prototype.fetchMore=function(t){var r=this
if(!t.updateQuery){throw new Error("updateQuery option is required. This function defines how to update the query data with the new results.")}return Promise.resolve().then(function(){var n=r.queryManager.generateQueryId()
var i
if(t.query){i=t}else{i=v({},r.options,t,{variables:v({},r.variables,t.variables)})}i.fetchPolicy="network-only"
return r.queryManager.fetchQuery(n,i,e.FetchType.normal,r.queryId)}).then(function(e){r.updateQuery(function(r,n){var i=n.variables
return t.updateQuery(r,{fetchMoreResult:e.data,variables:i})})
return e})}
r.prototype.subscribeToMore=function(e){var t=this
var r=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables}).subscribe({next:function(r){if(e.updateQuery){t.updateQuery(function(t,n){var i=n.variables
return e.updateQuery(t,{subscriptionData:r,variables:i})})}},error:function(t){if(e.onError){e.onError(t)
return}console.error("Unhandled GraphQL subscription error",t)}})
this.subscriptionHandles.push(r)
return function(){var e=t.subscriptionHandles.indexOf(r)
if(e>=0){t.subscriptionHandles.splice(e,1)
r.unsubscribe()}}}
r.prototype.setOptions=function(e){var t=this.options
this.options=v({},this.options,e)
if(e.pollInterval){this.startPolling(e.pollInterval)}else if(e.pollInterval===0){this.stopPolling()}var r=t.fetchPolicy!=="network-only"&&e.fetchPolicy==="network-only"||t.fetchPolicy==="cache-only"&&e.fetchPolicy!=="cache-only"||t.fetchPolicy==="standby"&&e.fetchPolicy!=="standby"||false
return this.setVariables(this.options.variables,r,e.fetchResults)}
r.prototype.setVariables=function(e,t,r){if(t===void 0){t=false}if(r===void 0){r=true}this.isTornDown=false
var i=v({},this.variables,e)
if(n.isEqual(i,this.variables)&&!t){if(this.observers.length===0||!r){return new Promise(function(e){return e()})}return this.result()}else{this.lastVariables=this.variables
this.variables=i
this.options.variables=i
if(this.observers.length===0){return new Promise(function(e){return e()})}return this.queryManager.fetchQuery(this.queryId,v({},this.options,{variables:this.variables})).then(function(e){return n.maybeDeepFreeze(e)})}}
r.prototype.updateQuery=function(e){var t=this.queryManager.getQueryWithPreviousResult(this.queryId),r=t.previousResult,i=t.variables,o=t.document
var a=n.tryFunctionOrLogError(function(){return e(r,{variables:i})})
if(a){this.queryManager.dataStore.markUpdateQueryResult(o,i,a)
this.queryManager.broadcastQueries()}}
r.prototype.stopPolling=function(){if(this.isCurrentlyPolling){this.scheduler.stopPollingQuery(this.queryId)
this.options.pollInterval=undefined
this.isCurrentlyPolling=false}}
r.prototype.startPolling=function(e){if(this.options.fetchPolicy==="cache-first"||this.options.fetchPolicy==="cache-only"){throw new Error("Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.")}if(this.isCurrentlyPolling){this.scheduler.stopPollingQuery(this.queryId)
this.isCurrentlyPolling=false}this.options.pollInterval=e
this.isCurrentlyPolling=true
this.scheduler.startPollingQuery(this.options,this.queryId)}
r.prototype.onSubscribe=function(e){var t=this
if(e._subscription&&e._subscription._observer&&!e._subscription._observer.error){e._subscription._observer.error=function(e){console.error("Unhandled error",e.message,e.stack)}}this.observers.push(e)
if(e.next&&this.lastResult)e.next(this.lastResult)
if(e.error&&this.lastError)e.error(this.lastError)
if(this.observers.length===1)this.setUpQuery()
return function(){t.observers=t.observers.filter(function(t){return t!==e})
if(t.observers.length===0){t.tearDownQuery()}}}
r.prototype.setUpQuery=function(){var e=this
if(this.shouldSubscribe){this.queryManager.addObservableQuery(this.queryId,this)}if(!!this.options.pollInterval){if(this.options.fetchPolicy==="cache-first"||this.options.fetchPolicy==="cache-only"){throw new Error("Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.")}this.isCurrentlyPolling=true
this.scheduler.startPollingQuery(this.options,this.queryId)}var t={next:function(t){e.lastResult=t
e.observers.forEach(function(e){return e.next&&e.next(t)})},error:function(t){e.lastError=t
e.observers.forEach(function(e){return e.error&&e.error(t)})}}
this.queryManager.startQuery(this.queryId,this.options,this.queryManager.queryListenerForObserver(this.queryId,this.options,t))}
r.prototype.tearDownQuery=function(){this.isTornDown=true
if(this.isCurrentlyPolling){this.scheduler.stopPollingQuery(this.queryId)
this.isCurrentlyPolling=false}this.subscriptionHandles.forEach(function(e){return e.unsubscribe()})
this.subscriptionHandles=[]
this.queryManager.removeObservableQuery(this.queryId)
this.queryManager.stopQuery(this.queryId)
this.observers=[]}
return r}(s)
var m=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var b=function(){function t(e){var t=e.queryManager,r=e.ssrMode
this.inFlightQueries={}
this.registeredQueries={}
this.intervalQueries={}
this.pollingTimers={}
this.ssrMode=false
this.queryManager=t
this.ssrMode=r||false}t.prototype.checkInFlight=function(t){var r=this.queryManager.queryStore.get(t)
return r&&r.networkStatus!==e.NetworkStatus.ready&&r.networkStatus!==e.NetworkStatus.error}
t.prototype.fetchQuery=function(e,t,r){var n=this
return new Promise(function(i,o){n.queryManager.fetchQuery(e,t,r).then(function(e){i(e)}).catch(function(e){o(e)})})}
t.prototype.startPollingQuery=function(e,t,r){if(!e.pollInterval){throw new Error("Attempted to start a polling query without a polling interval.")}if(this.ssrMode)return t
this.registeredQueries[t]=e
if(r){this.queryManager.addQueryListener(t,r)}this.addQueryOnInterval(t,e)
return t}
t.prototype.stopPollingQuery=function(e){delete this.registeredQueries[e]}
t.prototype.fetchQueriesOnInterval=function(t){var r=this
this.intervalQueries[t]=this.intervalQueries[t].filter(function(n){if(!(r.registeredQueries.hasOwnProperty(n)&&r.registeredQueries[n].pollInterval===t)){return false}if(r.checkInFlight(n)){return true}var i=r.registeredQueries[n]
var o=m({},i)
o.fetchPolicy="network-only"
r.fetchQuery(n,o,e.FetchType.poll).catch(function(){})
return true})
if(this.intervalQueries[t].length===0){clearInterval(this.pollingTimers[t])
delete this.intervalQueries[t]}}
t.prototype.addQueryOnInterval=function(e,t){var r=this
var n=t.pollInterval
if(!n){throw new Error("A poll interval is required to start polling query with id '"+e+"'.")}if(this.intervalQueries.hasOwnProperty(n.toString())&&this.intervalQueries[n].length>0){this.intervalQueries[n].push(e)}else{this.intervalQueries[n]=[e]
this.pollingTimers[n]=setInterval(function(){r.fetchQueriesOnInterval(n)},n)}}
t.prototype.registerPollingQuery=function(e){if(!e.pollInterval){throw new Error("Attempted to register a non-polling query with the scheduler.")}return new y({scheduler:this,options:e})}
return t}()
var g=function(){function e(){this.store={}}e.prototype.getStore=function(){return this.store}
e.prototype.get=function(e){return this.store[e]}
e.prototype.initMutation=function(e,t,r){this.store[e]={mutationString:t,variables:r||{},loading:true,error:null}}
e.prototype.markMutationError=function(e,t){var r=this.store[e]
if(!r){return}r.loading=false
r.error=t}
e.prototype.markMutationResult=function(e){var t=this.store[e]
if(!t){return}t.loading=false
t.error=null}
e.prototype.reset=function(){this.store={}}
return e}()
var _=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var w=function(){function t(){this.store={}}t.prototype.getStore=function(){return this.store}
t.prototype.get=function(e){return this.store[e]}
t.prototype.initQuery=function(t){var r=this.store[t.queryId]
if(r&&r.queryString!==t.queryString){throw new Error("Internal Error: may not update existing query string in store")}var i=false
var o=null
if(t.storePreviousVariables&&r&&r.networkStatus!==e.NetworkStatus.loading){if(!n.isEqual(r.variables,t.variables)){i=true
o=r.variables}}var a
if(i){a=e.NetworkStatus.setVariables}else if(t.isPoll){a=e.NetworkStatus.poll}else if(t.isRefetch){a=e.NetworkStatus.refetch}else{a=e.NetworkStatus.loading}var u=[]
if(r&&r.graphQLErrors){u=r.graphQLErrors}this.store[t.queryId]={queryString:t.queryString,document:t.document,variables:t.variables,previousVariables:o,networkError:null,graphQLErrors:u,networkStatus:a,metadata:t.metadata}
if(typeof t.fetchMoreForQueryId==="string"){this.store[t.fetchMoreForQueryId].networkStatus=e.NetworkStatus.fetchMore}}
t.prototype.markQueryResult=function(t,r,n){if(!this.store[t])return
this.store[t].networkError=null
this.store[t].graphQLErrors=r.errors&&r.errors.length?r.errors:[]
this.store[t].previousVariables=null
this.store[t].networkStatus=e.NetworkStatus.ready
if(typeof n==="string"){this.store[n].networkStatus=e.NetworkStatus.ready}}
t.prototype.markQueryError=function(t,r,n){if(!this.store[t])return
this.store[t].networkError=r
this.store[t].networkStatus=e.NetworkStatus.error
if(typeof n==="string"){this.markQueryError(n,r,undefined)}}
t.prototype.markQueryResultClient=function(t,r){if(!this.store[t])return
this.store[t].networkError=null
this.store[t].previousVariables=null
this.store[t].networkStatus=r?e.NetworkStatus.ready:e.NetworkStatus.loading}
t.prototype.stopQuery=function(e){delete this.store[e]}
t.prototype.reset=function(t){var r=this
this.store=Object.keys(this.store).filter(function(e){return t.indexOf(e)>-1}).reduce(function(t,n){t[n]=_({},r.store[n],{networkStatus:e.NetworkStatus.loading})
return t},{})}
return t}()
var O=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var E={listeners:[],invalidated:false,document:null,newData:null,lastRequestId:null,observableQuery:null,subscriptions:[]}
var k=function(){function r(e){var r=e.link,n=e.queryDeduplication,i=n===void 0?false:n,a=e.store,u=e.onBroadcast,s=u===void 0?function(){return undefined}:u,c=e.ssrMode,l=c===void 0?false:c
this.mutationStore=new g
this.queryStore=new w
this.idCounter=1
this.queries=new Map
this.fetchQueryPromises=new Map
this.queryIdsByName={}
this.link=r
this.deduplicator=t.ApolloLink.from([new o.DedupLink,r])
this.queryDeduplication=i
this.dataStore=a
this.onBroadcast=s
this.scheduler=new b({queryManager:this,ssrMode:l})}r.prototype.mutate=function(e){var r=this
var o=e.mutation,a=e.variables,u=e.optimisticResponse,s=e.updateQueries,c=e.refetchQueries,l=c===void 0?[]:c,f=e.update,d=e.errorPolicy,v=d===void 0?"none":d,h=e.fetchPolicy,y=e.context,m=y===void 0?{}:y
if(!o){throw new Error("mutation option is required. You must specify your GraphQL document in the mutation option.")}if(h&&h!=="no-cache"){throw new Error("fetchPolicy for mutations currently only supports the 'no-cache' policy")}var b=this.generateQueryId()
var g=this.dataStore.getCache()
o=g.transformDocument(o),a=n.assign({},n.getDefaultValues(n.getMutationDefinition(o)),a)
var _=i.print(o)
this.setQuery(b,function(){return{document:o}})
var w=function(){var e={}
if(s){Object.keys(s).forEach(function(t){return(r.queryIdsByName[t]||[]).forEach(function(n){e[n]={updater:s[t],query:r.queryStore.get(n)}})})}return e}
this.mutationStore.initMutation(b,_,a)
this.dataStore.markMutationInit({mutationId:b,document:o,variables:a||{},updateQueries:w(),update:f,optimisticResponse:u})
this.broadcastQueries()
return new Promise(function(e,n){var i
var s
var c=r.buildOperationForLink(o,a,O({},m,{optimisticResponse:u}))
t.execute(r.link,c).subscribe({next:function(e){if(e.errors&&v==="none"){s=new p({graphQLErrors:e.errors})
return}r.mutationStore.markMutationResult(b)
if(h!=="no-cache"){r.dataStore.markMutationResult({mutationId:b,result:e,document:o,variables:a||{},updateQueries:w(),update:f})}i=e},error:function(e){r.mutationStore.markMutationError(b,e)
r.dataStore.markMutationComplete({mutationId:b,optimisticResponse:u})
r.broadcastQueries()
r.setQuery(b,function(){return{document:undefined}})
n(new p({networkError:e}))},complete:function(){if(s){r.mutationStore.markMutationError(b,s)}r.dataStore.markMutationComplete({mutationId:b,optimisticResponse:u})
r.broadcastQueries()
if(s){n(s)
return}if(typeof l==="function")l=l(i)
l.forEach(function(e){if(typeof e==="string"){r.refetchQueryByName(e)
return}r.query({query:e.query,variables:e.variables,fetchPolicy:"network-only"})})
r.setQuery(b,function(){return{document:undefined}})
if(v==="ignore"&&i&&i.errors){delete i.errors}e(i)}})})}
r.prototype.fetchQuery=function(t,r,o,a){var u=this
var s=r.variables,c=s===void 0?{}:s,f=r.metadata,d=f===void 0?null:f,v=r.fetchPolicy,h=v===void 0?"cache-first":v
var y=this.dataStore.getCache()
var m=y.transformDocument(r.query)
var b
var g=h==="network-only"||h==="no-cache"
if(o!==e.FetchType.refetch&&h!=="network-only"&&h!=="no-cache"){var _=this.dataStore.getCache().diff({query:m,variables:c,returnPartialData:true,optimistic:false}),w=_.complete,O=_.result
g=!w||h==="cache-and-network"
b=O}var E=g&&h!=="cache-only"&&h!=="standby"
if(n.hasDirectives(["live"],m))E=true
var k=this.generateRequestId()
var x=this.updateQueryWatch(t,m,r)
this.setQuery(t,function(){return{document:m,lastRequestId:k,invalidated:true,cancel:x}})
this.invalidate(true,a)
this.queryStore.initQuery({queryId:t,queryString:i.print(m),document:m,storePreviousVariables:E,variables:c,isPoll:o===e.FetchType.poll,isRefetch:o===e.FetchType.refetch,metadata:d,fetchMoreForQueryId:a})
this.broadcastQueries()
var j=!E||h==="cache-and-network"
if(j){this.queryStore.markQueryResultClient(t,!E)
this.invalidate(true,t,a)
this.broadcastQueries()}if(E){var T=this.fetchRequest({requestId:k,queryId:t,document:m,options:r,fetchMoreForQueryId:a}).catch(function(e){if(l(e)){throw e}else{var r=u.getQuery(t).lastRequestId
if(k>=(r||1)){u.queryStore.markQueryError(t,e,a)
u.invalidate(true,t,a)
u.broadcastQueries()}u.removeFetchQueryPromise(k)
throw new p({networkError:e})}})
if(h!=="cache-and-network"){return T}else{T.catch(function(){})}}return Promise.resolve({data:b})}
r.prototype.queryListenerForObserver=function(e,t,r){var i=this
var o=false
return function(u,s){i.invalidate(false,e)
if(!u)return
var c=i.getQuery(e).observableQuery
var l=c?c.options.fetchPolicy:t.fetchPolicy
if(l==="standby")return
var f=c?c.options.errorPolicy:t.errorPolicy
var d=c?c.getLastResult():null
var v=c?c.getLastError():null
var h=!s&&u.previousVariables!=null||l==="cache-only"||l==="cache-and-network"
var y=Boolean(d&&u.networkStatus!==d.networkStatus)
var m=f&&(v&&v.graphQLErrors)!==u.graphQLErrors&&f!=="none"
if(!a(u.networkStatus)||y&&t.notifyOnNetworkStatusChange||h){if((!f||f==="none")&&u.graphQLErrors&&u.graphQLErrors.length>0||u.networkError){var b=new p({graphQLErrors:u.graphQLErrors,networkError:u.networkError})
o=true
if(r.error){try{r.error(b)}catch(g){setTimeout(function(){throw g},0)}}else{setTimeout(function(){throw b},0)
if(!n.isProduction()){console.info("An unhandled error was thrown because no error handler is registered "+"for the query "+u.queryString)}}return}try{var _=void 0
var w=void 0
if(s){i.setQuery(e,function(){return{newData:null}})
_=s.result
w=!s.complete?!s.complete:false}else{if(d&&d.data&&!m){_=d.data
w=false}else{var O=i.getQuery(e).document
var E=i.dataStore.getCache().diff({query:O,variables:u.previousVariables||u.variables,optimistic:true})
_=E.result
w=!E.complete}}var k=void 0
if(w&&l!=="cache-only"){k={data:d&&d.data,loading:a(u.networkStatus),networkStatus:u.networkStatus,stale:true}}else{k={data:_,loading:a(u.networkStatus),networkStatus:u.networkStatus,stale:false}}if(f==="all"&&u.graphQLErrors&&u.graphQLErrors.length>0){k.errors=u.graphQLErrors}if(r.next){var x=!(d&&k&&d.networkStatus===k.networkStatus&&d.stale===k.stale&&d.data===k.data)
if(x||o){try{r.next(n.maybeDeepFreeze(k))}catch(g){setTimeout(function(){throw g},0)}}}o=false}catch(j){o=true
if(r.error)r.error(new p({networkError:j}))
return}}}}
r.prototype.watchQuery=function(e,t){if(t===void 0){t=true}if(e.fetchPolicy==="standby"){throw new Error('client.watchQuery cannot be called with fetchPolicy set to "standby"')}var r=n.getQueryDefinition(e.query)
if(r.variableDefinitions&&r.variableDefinitions.length){var i=n.getDefaultValues(r)
e.variables=n.assign({},i,e.variables)}if(typeof e.notifyOnNetworkStatusChange==="undefined"){e.notifyOnNetworkStatusChange=false}var o=O({},e)
return new y({scheduler:this.scheduler,options:o,shouldSubscribe:t})}
r.prototype.query=function(e){var t=this
if(!e.query){throw new Error("query option is required. You must specify your GraphQL document in the query option.")}if(e.query.kind!=="Document"){throw new Error('You must wrap the query string in a "gql" tag.')}if(e.returnPartialData){throw new Error("returnPartialData option only supported on watchQuery.")}if(e.pollInterval){throw new Error("pollInterval option only supported on watchQuery.")}if(typeof e.notifyOnNetworkStatusChange!=="undefined"){throw new Error('Cannot call "query" with "notifyOnNetworkStatusChange" option. Only "watchQuery" has that option.')}e.notifyOnNetworkStatusChange=false
var r=this.idCounter
var n=new Promise(function(i,o){t.addFetchQueryPromise(r,n,i,o)
return t.watchQuery(e,false).result().then(function(e){t.removeFetchQueryPromise(r)
i(e)}).catch(function(e){t.removeFetchQueryPromise(r)
o(e)})})
return n}
r.prototype.generateQueryId=function(){var e=this.idCounter.toString()
this.idCounter++
return e}
r.prototype.stopQueryInStore=function(e){this.queryStore.stopQuery(e)
this.invalidate(true,e)
this.broadcastQueries()}
r.prototype.addQueryListener=function(e,t){this.setQuery(e,function(e){var r=e.listeners,n=r===void 0?[]:r
return{listeners:n.concat([t]),invalidate:false}})}
r.prototype.updateQueryWatch=function(e,t,r){var n=this
var i=this.getQuery(e).cancel
if(i)i()
var o=function(){var t=null
var r=n.getQuery(e).observableQuery
if(r){var i=r.getLastResult()
if(i){t=i.data}}return t}
return this.dataStore.getCache().watch({query:t,variables:r.variables,optimistic:true,previousResult:o,callback:function(t){n.setQuery(e,function(){return{invalidated:true,newData:t}})}})}
r.prototype.addFetchQueryPromise=function(e,t,r,n){this.fetchQueryPromises.set(e.toString(),{promise:t,resolve:r,reject:n})}
r.prototype.removeFetchQueryPromise=function(e){this.fetchQueryPromises.delete(e.toString())}
r.prototype.addObservableQuery=function(e,t){this.setQuery(e,function(){return{observableQuery:t}})
var r=n.getQueryDefinition(t.options.query)
if(r.name&&r.name.value){var i=r.name.value
this.queryIdsByName[i]=this.queryIdsByName[i]||[]
this.queryIdsByName[i].push(t.queryId)}}
r.prototype.removeObservableQuery=function(e){var t=this.getQuery(e),r=t.observableQuery,i=t.cancel
if(i)i()
if(!r)return
var o=n.getQueryDefinition(r.options.query)
var a=o.name?o.name.value:null
this.setQuery(e,function(){return{observableQuery:null}})
if(a){this.queryIdsByName[a]=this.queryIdsByName[a].filter(function(e){return!(r.queryId===e)})}}
r.prototype.clearStore=function(){this.fetchQueryPromises.forEach(function(e){var t=e.reject
t(new Error("Store reset while query was in flight(not completed in link chain)"))})
var e=[]
this.queries.forEach(function(t,r){var n=t.observableQuery
if(n)e.push(r)})
this.queryStore.reset(e)
this.mutationStore.reset()
var t=this.dataStore.reset()
return t}
r.prototype.resetStore=function(){var e=this
return this.clearStore().then(function(){return e.reFetchObservableQueries()})}
r.prototype.getObservableQueryPromises=function(e){var t=this
var r=[]
this.queries.forEach(function(n,i){var o=n.observableQuery
if(!o)return
var a=o.options.fetchPolicy
o.resetLastResults()
if(a!=="cache-only"&&(e||a!=="standby")){r.push(o.refetch())}t.setQuery(i,function(){return{newData:null}})
t.invalidate(true,i)})
return r}
r.prototype.reFetchObservableQueries=function(e){var t=this.getObservableQueryPromises(e)
this.broadcastQueries()
return Promise.all(t)}
r.prototype.startQuery=function(e,t,r){this.addQueryListener(e,r)
this.fetchQuery(e,t).catch(function(){return undefined})
return e}
r.prototype.startGraphQLSubscription=function(e){var r=this
var i=e.query
var o=this.dataStore.getCache()
var a=o.transformDocument(i)
var u=n.assign({},n.getDefaultValues(n.getOperationDefinition(i)),e.variables)
var c
var l=[]
return new s(function(e){l.push(e)
if(l.length===1){var n={next:function(e){r.dataStore.markSubscriptionResult(e,a,u)
r.broadcastQueries()
l.forEach(function(t){if(t.next)t.next(e)})},error:function(e){l.forEach(function(t){if(t.error)t.error(e)})}}
var i=r.buildOperationForLink(a,u)
c=t.execute(r.link,i).subscribe(n)}return function(){l=l.filter(function(t){return t!==e})
if(l.length===0&&c){c.unsubscribe()}}})}
r.prototype.stopQuery=function(e){this.stopQueryInStore(e)
this.removeQuery(e)}
r.prototype.removeQuery=function(e){var t=this.getQuery(e).subscriptions
t.forEach(function(e){return e.unsubscribe()})
this.queries.delete(e)}
r.prototype.getCurrentQueryResult=function(e,t){if(t===void 0){t=true}var r=e.options,i=r.variables,o=r.query
var a=e.getLastResult()
var u=this.getQuery(e.queryId).newData
if(u){return n.maybeDeepFreeze({data:u.result,partial:false})}else{try{var s=this.dataStore.getCache().read({query:o,variables:i,previousResult:a?a.data:undefined,optimistic:t})
return n.maybeDeepFreeze({data:s,partial:false})}catch(c){return n.maybeDeepFreeze({data:{},partial:true})}}}
r.prototype.getQueryWithPreviousResult=function(e){var t
if(typeof e==="string"){var r=this.getQuery(e).observableQuery
if(!r){throw new Error("ObservableQuery with this id doesn't exist: "+e)}t=r}else{t=e}var n=t.options,i=n.variables,o=n.query
var a=this.getCurrentQueryResult(t,false).data
return{previousResult:a,variables:i,document:o}}
r.prototype.broadcastQueries=function(){var e=this
this.onBroadcast()
this.queries.forEach(function(t,r){if(!t.invalidated||!t.listeners)return
t.listeners.filter(function(e){return!!e}).forEach(function(n){n(e.queryStore.get(r),t.newData)})})}
r.prototype.fetchRequest=function(r){var n=this
var i=r.requestId,o=r.queryId,a=r.document,u=r.options,s=r.fetchMoreForQueryId
var c=u.variables,l=u.context,f=u.errorPolicy,d=f===void 0?"none":f,v=u.fetchPolicy
var h=this.buildOperationForLink(a,c,O({},l,{forceFetch:!this.queryDeduplication}))
var y
var m
var b=new Promise(function(r,u){n.addFetchQueryPromise(i,b,r,u)
var l=t.execute(n.deduplicator,h).subscribe({next:function(e){var t=n.getQuery(o).lastRequestId
if(i>=(t||1)){if(v!=="no-cache"){try{n.dataStore.markQueryResult(e,a,c,s,d==="ignore"||d==="all")}catch(r){u(r)
return}}n.queryStore.markQueryResult(o,e,s)
n.invalidate(true,o,s)
n.broadcastQueries()}if(e.errors&&d==="none"){u(new p({graphQLErrors:e.errors}))
return}else if(d==="all"){m=e.errors}if(s){y=e.data}else{try{y=n.dataStore.getCache().read({variables:c,query:a,optimistic:false})}catch(r){}}},error:function(e){n.removeFetchQueryPromise(i)
n.setQuery(o,function(e){var t=e.subscriptions
return{subscriptions:t.filter(function(e){return e!==l})}})
u(e)},complete:function(){n.removeFetchQueryPromise(i)
n.setQuery(o,function(e){var t=e.subscriptions
return{subscriptions:t.filter(function(e){return e!==l})}})
r({data:y,errors:m,loading:false,networkStatus:e.NetworkStatus.ready,stale:false})}})
n.setQuery(o,function(e){var t=e.subscriptions
return{subscriptions:t.concat([l])}})})
return b}
r.prototype.refetchQueryByName=function(e){var t=this
var r=this.queryIdsByName[e]
if(r===undefined)return
return Promise.all(r.map(function(e){return t.getQuery(e).observableQuery}).filter(function(e){return!!e}).map(function(e){return e.refetch()}))}
r.prototype.generateRequestId=function(){var e=this.idCounter
this.idCounter++
return e}
r.prototype.getQuery=function(e){return this.queries.get(e)||O({},E)}
r.prototype.setQuery=function(e,t){var r=this.getQuery(e)
var n=O({},r,t(r))
this.queries.set(e,n)}
r.prototype.invalidate=function(e,t,r){if(t)this.setQuery(t,function(){return{invalidated:e}})
if(r){this.setQuery(r,function(){return{invalidated:e}})}}
r.prototype.buildOperationForLink=function(e,t,r){var i=this.dataStore.getCache()
return{query:i.transformForLink?i.transformForLink(e):e,variables:t,operationName:n.getOperationName(e)||undefined,context:O({},r,{cache:i,getCacheKey:function(e){if(i.config){return i.config.dataIdFromObject(e)}else{throw new Error("To use context.getCacheKey, you need to use a cache that has a configurable dataIdFromObject, like apollo-cache-inmemory.")}}})}}
return r}()
var x=function(){function e(e){this.cache=e}e.prototype.getCache=function(){return this.cache}
e.prototype.markQueryResult=function(e,t,r,i,o){if(o===void 0){o=false}var a=!n.graphQLResultHasError(e)
if(o&&n.graphQLResultHasError(e)&&e.data){a=true}if(!i&&a){this.cache.write({result:e.data,dataId:"ROOT_QUERY",query:t,variables:r})}}
e.prototype.markSubscriptionResult=function(e,t,r){if(!n.graphQLResultHasError(e)){this.cache.write({result:e.data,dataId:"ROOT_SUBSCRIPTION",query:t,variables:r})}}
e.prototype.markMutationInit=function(e){var t=this
if(e.optimisticResponse){var r
if(typeof e.optimisticResponse==="function"){r=e.optimisticResponse(e.variables)}else{r=e.optimisticResponse}var n=function(){t.markMutationResult({mutationId:e.mutationId,result:{data:r},document:e.document,variables:e.variables,updateQueries:e.updateQueries,update:e.update})}
this.cache.recordOptimisticTransaction(function(e){var r=t.cache
t.cache=e
try{n()}finally{t.cache=r}},e.mutationId)}}
e.prototype.markMutationResult=function(e){var t=this
if(!n.graphQLResultHasError(e.result)){var r=[]
r.push({result:e.result.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables})
if(e.updateQueries){Object.keys(e.updateQueries).filter(function(t){return e.updateQueries[t]}).forEach(function(i){var o=e.updateQueries[i],a=o.query,u=o.updater
var s=t.cache.diff({query:a.document,variables:a.variables,returnPartialData:true,optimistic:false}),c=s.result,l=s.complete
if(!l){return}var f=n.tryFunctionOrLogError(function(){return u(c,{mutationResult:e.result,queryName:n.getOperationName(a.document)||undefined,queryVariables:a.variables})})
if(f){r.push({result:f,dataId:"ROOT_QUERY",query:a.document,variables:a.variables})}})}this.cache.performTransaction(function(e){r.forEach(function(t){return e.write(t)})})
var i=e.update
if(i){this.cache.performTransaction(function(t){n.tryFunctionOrLogError(function(){return i(t,e.result)})})}}}
e.prototype.markMutationComplete=function(e){var t=e.mutationId,r=e.optimisticResponse
if(!r)return
this.cache.removeOptimistic(t)}
e.prototype.markUpdateQueryResult=function(e,t,r){this.cache.write({result:r,dataId:"ROOT_QUERY",variables:t,query:e})}
e.prototype.reset=function(){return this.cache.reset()}
return e}()
var j="2.2.7"
var T=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var S=false
var P=new t.ApolloLink(function(e,t){e.query=n.removeConnectionDirectiveFromDocument(e.query)
return t(e)})
var I=function(){function e(e){var t=this
this.defaultOptions={}
this.resetStoreCallbacks=[]
var r=e.link,i=e.cache,o=e.ssrMode,a=o===void 0?false:o,u=e.ssrForceFetchDelay,s=u===void 0?0:u,c=e.connectToDevTools,l=e.queryDeduplication,f=l===void 0?true:l,p=e.defaultOptions
if(!r||!i){throw new Error("\n        In order to initialize Apollo Client, you must specify link & cache properties on the config object.\n        This is part of the required upgrade when migrating from Apollo Client 1.0 to Apollo Client 2.0.\n        For more information, please visit:\n          https://www.apollographql.com/docs/react/basics/setup.html\n        to help you get started.\n      ")}this.link=P.concat(r)
this.cache=i
this.store=new x(i)
this.disableNetworkFetches=a||s>0
this.queryDeduplication=f
this.ssrMode=a
this.defaultOptions=p||{}
if(s){setTimeout(function(){return t.disableNetworkFetches=false},s)}this.watchQuery=this.watchQuery.bind(this)
this.query=this.query.bind(this)
this.mutate=this.mutate.bind(this)
this.resetStore=this.resetStore.bind(this)
this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this)
var d=!n.isProduction()&&typeof window!=="undefined"&&!window.__APOLLO_CLIENT__
if(typeof c==="undefined"?d:c&&typeof window!=="undefined"){window.__APOLLO_CLIENT__=this}if(!S&&!n.isProduction()){S=true
if(typeof window!=="undefined"&&window.document&&window.top===window.self){if(typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__==="undefined"){if(navigator.userAgent.indexOf("Chrome")>-1){console.debug("Download the Apollo DevTools "+"for a better development experience: "+"https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")}}}}this.version=j}e.prototype.watchQuery=function(e){this.initQueryManager()
if(this.defaultOptions.watchQuery){e=T({},this.defaultOptions.watchQuery,e)}if(this.disableNetworkFetches&&e.fetchPolicy==="network-only"){e=T({},e,{fetchPolicy:"cache-first"})}return this.queryManager.watchQuery(e)}
e.prototype.query=function(e){this.initQueryManager()
if(this.defaultOptions.query){e=T({},this.defaultOptions.query,e)}if(e.fetchPolicy==="cache-and-network"){throw new Error("cache-and-network fetchPolicy can only be used with watchQuery")}if(this.disableNetworkFetches&&e.fetchPolicy==="network-only"){e=T({},e,{fetchPolicy:"cache-first"})}return this.queryManager.query(e)}
e.prototype.mutate=function(e){this.initQueryManager()
if(this.defaultOptions.mutate){e=T({},this.defaultOptions.mutate,e)}return this.queryManager.mutate(e)}
e.prototype.subscribe=function(e){this.initQueryManager()
return this.queryManager.startGraphQLSubscription(e)}
e.prototype.readQuery=function(e){return this.initProxy().readQuery(e)}
e.prototype.readFragment=function(e){return this.initProxy().readFragment(e)}
e.prototype.writeQuery=function(e){var t=this.initProxy().writeQuery(e)
this.queryManager.broadcastQueries()
return t}
e.prototype.writeFragment=function(e){var t=this.initProxy().writeFragment(e)
this.queryManager.broadcastQueries()
return t}
e.prototype.writeData=function(e){var t=this.initProxy().writeData(e)
this.queryManager.broadcastQueries()
return t}
e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e}
e.prototype.__requestRaw=function(e){return t.execute(this.link,e)}
e.prototype.initQueryManager=function(){var e=this
if(this.queryManager)return
this.queryManager=new k({link:this.link,store:this.store,queryDeduplication:this.queryDeduplication,ssrMode:this.ssrMode,onBroadcast:function(){if(e.devToolsHookCb){e.devToolsHookCb({action:{},state:{queries:e.queryManager.queryStore.getStore(),mutations:e.queryManager.mutationStore.getStore()},dataWithOptimisticResults:e.cache.extract(true)})}}})}
e.prototype.resetStore=function(){var e=this
return Promise.resolve().then(function(){return e.queryManager?e.queryManager.clearStore():Promise.resolve(null)}).then(function(){return Promise.all(e.resetStoreCallbacks.map(function(e){return e()}))}).then(function(){return e.queryManager?e.queryManager.reFetchObservableQueries():Promise.resolve(null)})}
e.prototype.onResetStore=function(e){var t=this
this.resetStoreCallbacks.push(e)
return function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter(function(t){return t!==e})}}
e.prototype.reFetchObservableQueries=function(e){return this.queryManager?this.queryManager.reFetchObservableQueries(e):Promise.resolve(null)}
e.prototype.extract=function(e){return this.initProxy().extract(e)}
e.prototype.restore=function(e){return this.initProxy().restore(e)}
e.prototype.initProxy=function(){if(!this.proxy){this.initQueryManager()
this.proxy=this.cache}return this.proxy}
return e}()
e.printAST=i.print
e.ApolloClient=I
e.default=I
e.ObservableQuery=y
e.ApolloError=p
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-link":14,"apollo-link-dedup":8,"apollo-utilities":7,"graphql/language/printer":111,"symbol-observable":171}],7:[function(e,t,r){arguments[4][4][0].apply(r,arguments)},{_process:164,dup:4}],8:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-link")):typeof e==="function"&&e.amd?e(["exports","apollo-link"],o):o((i.apolloLink=i.apolloLink||{},i.apolloLink.dedup={}),i.apolloLink.core)})(this,function(e,t){"use strict"
var r=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var n=function(e){r(n,e)
function n(){var t=e!==null&&e.apply(this,arguments)||this
t.inFlightRequestObservables=new Map
t.subscribers=new Map
return t}n.prototype.request=function(e,r){var n=this
if(e.getContext().forceFetch){return r(e)}var i=e.toKey()
var o=function(e){n.inFlightRequestObservables.delete(e)
var t=n.subscribers.get(e)
return t}
if(!this.inFlightRequestObservables.get(i)){var a=r(e)
var u
var s=new t.Observable(function(e){var t=n.subscribers.get(i)
if(!t)t={next:[],error:[],complete:[]}
n.subscribers.set(i,{next:t.next.concat([e.next.bind(e)]),error:t.error.concat([e.error.bind(e)]),complete:t.complete.concat([e.complete.bind(e)])})
if(!u){u=a.subscribe({next:function(e){var t=o(i)
n.subscribers.delete(i)
if(t){t.next.forEach(function(t){return t(e)})
t.complete.forEach(function(e){return e()})}},error:function(e){var t=o(i)
n.subscribers.delete(i)
if(t)t.error.forEach(function(t){return t(e)})}})}return function(){if(u)u.unsubscribe()
n.inFlightRequestObservables.delete(i)}})
this.inFlightRequestObservables.set(i,s)}return this.inFlightRequestObservables.get(i)}
return n}(t.ApolloLink)
e.DedupLink=n
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-link":14}],9:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-link")):typeof e==="function"&&e.amd?e(["exports","apollo-link"],o):o((i.apolloLink=i.apolloLink||{},i.apolloLink.error={}),i.apolloLink.core)})(this,function(e,t){"use strict"
var r=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var n=function(e){return new t.ApolloLink(function(r,n){return new t.Observable(function(t){var i
try{i=n(r).subscribe({next:function(n){if(n.errors){e({graphQLErrors:n.errors,response:n,operation:r})}t.next(n)},error:function(n){e({operation:r,networkError:n,graphQLErrors:n.result&&n.result.errors})
t.error(n)},complete:t.complete.bind(t)})}catch(o){e({networkError:o,operation:r})
t.error(o)}return function(){if(i)i.unsubscribe()}})})}
var i=function(e){r(t,e)
function t(t){var r=e.call(this)||this
r.link=n(t)
return r}t.prototype.request=function(e,t){return this.link.request(e,t)}
return t}(t.ApolloLink)
e.onError=n
e.ErrorLink=i
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-link":10}],10:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-utilities"),t("zen-observable-ts"),t("graphql/language/printer")):typeof e==="function"&&e.amd?e(["exports","apollo-utilities","zen-observable-ts","graphql/language/printer"],o):o((i.apolloLink=i.apolloLink||{},i.apolloLink.core={}),i.apollo.utilities,i.apolloLink.zenObservable,i.printer)})(this,function(e,t,r,n){"use strict"
r=r&&r.hasOwnProperty("default")?r["default"]:r
var i=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var o=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
function a(e){var t=["query","operationName","variables","extensions","context"]
for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r]
if(t.indexOf(i)<0){throw new Error("illegal argument: "+i)}}return e}var u=function(e){i(t,e)
function t(t,r){var n=e.call(this,t)||this
n.link=r
return n}return t}(Error)
function s(e){return e.request.length<=1}function c(e){var t=false
return new Promise(function(r,n){e.subscribe({next:function(e){if(t){console.warn("Promise Wrapper does not support multiple results from Observable")}else{t=true
r(e)}},error:n})})}var l=c
function f(e){return new r(function(t){e.then(function(e){t.next(e)
t.complete()}).catch(t.error.bind(t))})}function p(e){return new r(function(t){t.error(e)})}function d(e){var r={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query}
if(!r.operationName){r.operationName=typeof r.query!=="string"?t.getOperationName(r.query):""}return r}function v(e,t){var r=o({},e)
var n=function(e){if(typeof e==="function"){r=o({},r,e(r))}else{r=o({},r,e)}}
var i=function(){return o({},r)}
Object.defineProperty(t,"setContext",{enumerable:false,value:n})
Object.defineProperty(t,"getContext",{enumerable:false,value:i})
Object.defineProperty(t,"toKey",{enumerable:false,value:function(){return h(t)}})
return t}function h(e){return n.print(e.query)+"|"+JSON.stringify(e.variables)+"|"+e.operationName}var y=function(e,t){return t?t(e):r.of()}
var m=function(e){return typeof e==="function"?new O(e):e}
var b=function(){return new O(function(e,t){return r.of()})}
var g=function(e){if(e.length===0)return b()
return e.map(m).reduce(function(e,t){return e.concat(t)})}
var _=function(e,t,n){if(n===void 0){n=new O(y)}var i=m(t)
var o=m(n)
if(s(i)&&s(o)){return new O(function(t){return e(t)?i.request(t)||r.of():o.request(t)||r.of()})}else{return new O(function(t,n){return e(t)?i.request(t,n)||r.of():o.request(t,n)||r.of()})}}
var w=function(e,t){var n=m(e)
if(s(n)){console.warn(new u("You are calling concat on a terminating link, which will have no effect",n))
return n}var i=m(t)
if(s(i)){return new O(function(e){return n.request(e,function(e){return i.request(e)||r.of()})||r.of()})}else{return new O(function(e,t){return n.request(e,function(e){return i.request(e,t)||r.of()})||r.of()})}}
var O=function(){function e(e){if(e)this.request=e}e.prototype.split=function(t,r,n){if(n===void 0){n=new e(y)}return this.concat(_(t,r,n))}
e.prototype.concat=function(e){return w(this,e)}
e.prototype.request=function(e,t){throw new Error("request is not implemented")}
e.empty=b
e.from=g
e.split=_
e.execute=E
return e}()
function E(e,t){return e.request(v(t.context,d(a(t))))||r.of()}e.Observable=r
e.createOperation=v
e.makePromise=l
e.toPromise=c
e.fromPromise=f
e.fromError=p
e.empty=b
e.from=g
e.split=_
e.concat=w
e.ApolloLink=O
e.execute=E
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-utilities":18,"graphql/language/printer":111,"zen-observable-ts":174}],11:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("graphql/language/printer")):typeof e==="function"&&e.amd?e(["exports","graphql/language/printer"],o):o((i.apolloLink=i.apolloLink||{},i.apolloLink.httpCommon={}),i.printer)})(this,function(e,t){"use strict"
var r=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var n={includeQuery:true,includeExtensions:false}
var i={accept:"*/*","content-type":"application/json"}
var o={method:"POST"}
var a={http:n,headers:i,options:o}
var u=function(e,t,r){var n=new Error(r)
n.response=e
n.statusCode=e.status
n.result=t
throw n}
var s=function(e){return function(t){return t.text().then(function(e){try{return JSON.parse(e)}catch(r){var n=r
n.response=t
n.statusCode=t.status
n.bodyText=e
return Promise.reject(n)}}).then(function(r){if(t.status>=300){u(t,r,"Response not successful: Received status code "+t.status)}if(!Array.isArray(r)&&!r.hasOwnProperty("data")&&!r.hasOwnProperty("errors")){u(t,r,"Server response was missing for query '"+(Array.isArray(e)?e.map(function(e){return e.operationName}):e.operationName)+"'.")}return r})}}
var c=function(e){if(!e&&typeof fetch==="undefined"){var t="unfetch"
if(typeof window==="undefined")t="node-fetch"
throw new Error("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/"+t+".\n\nFor example:\nimport fetch from '"+t+"';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });")}}
var l=function(){if(typeof AbortController==="undefined")return{controller:false,signal:false}
var e=new AbortController
var t=e.signal
return{controller:e,signal:t}}
var f=function(e,n){var i=[]
for(var o=2;o<arguments.length;o++){i[o-2]=arguments[o]}var a=r({},n.options,{headers:n.headers,credentials:n.credentials})
var u=n.http
i.forEach(function(e){a=r({},a,e.options,{headers:r({},a.headers,e.headers)})
if(e.credentials)a.credentials=e.credentials
u=r({},u,e.http)})
var s=e.operationName,c=e.extensions,l=e.variables,f=e.query
var p={operationName:s,variables:l}
if(u.includeExtensions)p.extensions=c
if(u.includeQuery)p.query=t.print(f)
return{options:a,body:p}}
var p=function(e,t){var r
try{r=JSON.stringify(e)}catch(n){var i=new Error("Network request failed. "+t+" is not serializable: "+n.message)
i.parseError=n
throw i}return r}
var d=function(e,t){var r=e.getContext()
var n=r.uri
if(n){return n}else if(typeof t==="function"){return t(e)}else{return t||"/graphql"}}
e.fallbackHttpConfig=a
e.throwServerError=u
e.parseAndCheckHttpResponse=s
e.checkFetcher=c
e.createSignalIfSupported=l
e.selectHttpOptionsAndBody=f
e.serializeFetchParameter=p
e.selectURI=d
Object.defineProperty(e,"__esModule",{value:true})})},{"graphql/language/printer":111}],12:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-link"),t("apollo-link-http-common")):typeof e==="function"&&e.amd?e(["exports","apollo-link","apollo-link-http-common"],o):o((i.apolloLink=i.apolloLink||{},i.apolloLink.http={}),i.apolloLink.core,i.apolloLink.httpCommon)})(this,function(e,t,r){"use strict"
var n=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var i=undefined&&undefined.__rest||function(e,t){var r={}
for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0)r[n]=e[n]
if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)if(t.indexOf(n[i])<0)r[n[i]]=e[n[i]]
return r}
var o=function(e){if(e===void 0){e={}}var n=e.uri,o=n===void 0?"/graphql":n,u=e.fetch,s=e.includeExtensions,c=e.useGETForQueries,l=i(e,["uri","fetch","includeExtensions","useGETForQueries"])
r.checkFetcher(u)
if(!u){u=fetch}var f={http:{includeExtensions:s},options:l.fetchOptions,credentials:l.credentials,headers:l.headers}
return new t.ApolloLink(function(e){var n=r.selectURI(e,o)
var i=e.getContext()
var s={http:i.http,options:i.fetchOptions,credentials:i.credentials,headers:i.headers}
var l=r.selectHttpOptionsAndBody(e,r.fallbackHttpConfig,f,s),p=l.options,d=l.body
var v=r.createSignalIfSupported(),h=v.controller,y=v.signal
if(h)p.signal=y
var m=function(e){return e.kind==="OperationDefinition"&&e.operation==="mutation"}
if(c&&!e.query.definitions.some(m)){p.method="GET"}if(p.method==="GET"){var b=a(n,d),g=b.newURI,_=b.parseError
if(_){return t.fromError(_)}n=g}else{try{p.body=r.serializeFetchParameter(d,"Payload")}catch(_){return t.fromError(_)}}return new t.Observable(function(t){u(n,p).then(function(t){e.setContext({response:t})
return t}).then(r.parseAndCheckHttpResponse(e)).then(function(e){t.next(e)
t.complete()
return e}).catch(function(e){if(e.name==="AbortError")return
if(e.result&&e.result.errors&&e.result.data){t.next(e.result)}t.error(e)})
return function(){if(h)h.abort()}})})}
function a(e,t){var n=[]
var i=function(e,t){n.push(e+"="+encodeURIComponent(t))}
if("query"in t){i("query",t.query)}if(t.operationName){i("operationName",t.operationName)}if(t.variables){var o=void 0
try{o=r.serializeFetchParameter(t.variables,"Variables map")}catch(a){return{parseError:a}}i("variables",o)}if(t.extensions){var u=void 0
try{u=r.serializeFetchParameter(t.extensions,"Extensions map")}catch(a){return{parseError:a}}i("extensions",u)}var s="",c=e
var l=e.indexOf("#")
if(l!==-1){s=e.substr(l)
c=e.substr(0,l)}var f=c.indexOf("?")===-1?"?":"&"
var p=c+f+n.join("&")+s
return{newURI:p}}var u=function(e){n(t,e)
function t(t){return e.call(this,o(t).request)||this}return t}(t.ApolloLink)
e.createHttpLink=o
e.HttpLink=u
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-link":13,"apollo-link-http-common":11}],13:[function(e,t,r){arguments[4][10][0].apply(r,arguments)},{"apollo-utilities":18,dup:10,"graphql/language/printer":111,"zen-observable-ts":174}],14:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("apollo-utilities"),t("zen-observable-ts"),t("graphql/language/printer")):typeof e==="function"&&e.amd?e(["exports","apollo-utilities","zen-observable-ts","graphql/language/printer"],o):o((i.apolloLink=i.apolloLink||{},i.apolloLink.core={}),i.apollo.utilities,i.apolloLink.zenObservable,i.printer)})(this,function(e,t,r,n){"use strict"
r=r&&r.hasOwnProperty("default")?r["default"]:r
var i=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var o=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
function a(e){var t=["query","operationName","variables","extensions","context"]
for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r]
if(t.indexOf(i)<0){throw new Error("illegal argument: "+i)}}return e}var u=function(e){i(t,e)
function t(t,r){var n=e.call(this,t)||this
n.link=r
return n}return t}(Error)
function s(e){return e.request.length<=1}function c(e){var t=false
return new Promise(function(r,n){e.subscribe({next:function(e){if(t){console.warn("Promise Wrapper does not support multiple results from Observable")}else{t=true
r(e)}},error:n})})}var l=c
function f(e){return new r(function(t){e.then(function(e){t.next(e)
t.complete()}).catch(t.error.bind(t))})}function p(e){return new r(function(t){t.error(e)})}function d(e){var r={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query}
if(!r.operationName){r.operationName=typeof r.query!=="string"?t.getOperationName(r.query):""}return r}function v(e,t){var r=o({},e)
var n=function(e){if(typeof e==="function"){r=o({},r,e(r))}else{r=o({},r,e)}}
var i=function(){return o({},r)}
Object.defineProperty(t,"setContext",{enumerable:false,value:n})
Object.defineProperty(t,"getContext",{enumerable:false,value:i})
Object.defineProperty(t,"toKey",{enumerable:false,value:function(){return h(t)}})
return t}function h(e){return n.print(e.query)+"|"+JSON.stringify(e.variables)+"|"+e.operationName}var y=function(e,t){return t?t(e):r.of()}
var m=function(e){return typeof e==="function"?new O(e):e}
var b=function(){return new O(function(e,t){return r.of()})}
var g=function(e){if(e.length===0)return b()
return e.map(m).reduce(function(e,t){return e.concat(t)})}
var _=function(e,t,n){if(n===void 0){n=new O(y)}var i=m(t)
var o=m(n)
if(s(i)&&s(o)){return new O(function(t){return e(t)?i.request(t)||r.of():o.request(t)||r.of()})}else{return new O(function(t,n){return e(t)?i.request(t,n)||r.of():o.request(t,n)||r.of()})}}
var w=function(e,t){var n=m(e)
if(s(n)){console.warn(new u("You are calling concat on a terminating link, which will have no effect",n))
return n}var i=m(t)
if(s(i)){return new O(function(e){return n.request(e,function(e){return i.request(e)||r.of()})||r.of()})}else{return new O(function(e,t){return n.request(e,function(e){return i.request(e,t)||r.of()})||r.of()})}}
var O=function(){function e(e){if(e)this.request=e}e.prototype.split=function(t,r,n){if(n===void 0){n=new e(y)}return this.concat(_(t,r,n))}
e.prototype.concat=function(e){return w(this,e)}
e.prototype.request=function(e,t){throw new Error("request is not implemented")}
e.empty=b
e.from=g
e.split=_
e.execute=E
return e}()
function E(e,t){return e.request(v(t.context,d(a(t))))||r.of()}e.Observable=r
e.createOperation=v
e.makePromise=l
e.toPromise=c
e.fromPromise=f
e.fromError=p
e.empty=b
e.from=g
e.split=_
e.concat=w
e.ApolloLink=O
e.execute=E
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-utilities":18,"graphql/language/printer":111,"zen-observable-ts":15}],15:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("zen-observable")):typeof e==="function"&&e.amd?e(["exports","zen-observable"],o):o((i.apolloLink=i.apolloLink||{},i.apolloLink.zenObservable={}),i.Observable)})(this,function(e,t){"use strict"
t=t&&t.hasOwnProperty("default")?t["default"]:t
var r=t
e.default=r
e.Observable=r
Object.defineProperty(e,"__esModule",{value:true})})},{"zen-observable":16}],16:[function(e,t,r){t.exports=e("./lib/Observable.js").Observable},{"./lib/Observable.js":17}],17:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r)
if(n)e(t,n)
return t}}()
function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var o=function(){return typeof Symbol==="function"}
var a=function(e){return o()&&Boolean(Symbol[e])}
var u=function(e){return a(e)?Symbol[e]:"@@"+e}
if(o()&&!a("observable")){Symbol.observable=Symbol("observable")}function s(e,t){var r=e[t]
if(r==null)return undefined
if(typeof r!=="function")throw new TypeError(r+" is not a function")
return r}function c(e){var t=e.constructor
if(t!==undefined){t=t[u("species")]
if(t===null){t=undefined}}return t!==undefined?t:_}function l(e){return e instanceof _}function f(e){if(f.log){f.log(e)}else{setTimeout(function(){throw e})}}function p(e){Promise.resolve().then(function(){try{e()}catch(t){f(t)}})}function d(e){var t=e._cleanup
if(t===undefined)return
e._cleanup=undefined
if(!t){return}try{if(typeof t==="function"){t()}else{var r=s(t,"unsubscribe")
if(r){r.call(t)}}}catch(n){f(n)}}function v(e){e._observer=undefined
e._queue=undefined
e._state="closed"}function h(e){var t=e._queue
if(!t){return}e._queue=undefined
e._state="ready"
for(var r=0;r<t.length;++r){y(e,t[r].type,t[r].value)
if(e._state==="closed")break}}function y(e,t,r){e._state="running"
var n=e._observer
try{var i=s(n,t)
switch(t){case"next":if(i)i.call(n,r)
break
case"error":v(e)
if(i)i.call(n,r)
else throw r
break
case"complete":v(e)
if(i)i.call(n)
break}}catch(o){f(o)}if(e._state==="closed")d(e)
else if(e._state==="running")e._state="ready"}function m(e,t,r){if(e._state==="closed")return
if(e._state==="buffering"){e._queue.push({type:t,value:r})
return}if(e._state!=="ready"){e._state="buffering"
e._queue=[{type:t,value:r}]
p(function(){return h(e)})
return}y(e,t,r)}var b=function(){function e(t,r){i(this,e)
this._cleanup=undefined
this._observer=t
this._queue=undefined
this._state="initializing"
var n=new g(this)
try{this._cleanup=r.call(undefined,n)}catch(o){n.error(o)}if(this._state==="initializing")this._state="ready"}n(e,[{key:"unsubscribe",value:function t(){if(this._state!=="closed"){v(this)
d(this)}}},{key:"closed",get:function(){return this._state==="closed"}}])
return e}()
var g=function(){function e(t){i(this,e)
this._subscription=t}n(e,[{key:"next",value:function t(e){m(this._subscription,"next",e)}},{key:"error",value:function r(e){m(this._subscription,"error",e)}},{key:"complete",value:function o(){m(this._subscription,"complete")}},{key:"closed",get:function(){return this._subscription._state==="closed"}}])
return e}()
var _=r.Observable=function(){function e(t){i(this,e)
if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function")
if(typeof t!=="function")throw new TypeError("Observable initializer must be a function")
this._subscriber=t}n(e,[{key:"subscribe",value:function t(e){if(typeof e!=="object"||e===null){e={next:e,error:arguments[1],complete:arguments[2]}}return new b(e,this._subscriber)}},{key:"forEach",value:function r(e){var t=this
return new Promise(function(r,n){if(typeof e!=="function"){n(new TypeError(e+" is not a function"))
return}function i(){o.unsubscribe()
r()}var o=t.subscribe({next:function(t){try{e(t,i)}catch(r){n(r)
o.unsubscribe()}},error:n,complete:r})})}},{key:"map",value:function o(e){var t=this
if(typeof e!=="function")throw new TypeError(e+" is not a function")
var r=c(this)
return new r(function(r){return t.subscribe({next:function(t){try{t=e(t)}catch(n){return r.error(n)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})})}},{key:"filter",value:function f(e){var t=this
if(typeof e!=="function")throw new TypeError(e+" is not a function")
var r=c(this)
return new r(function(r){return t.subscribe({next:function(t){try{if(!e(t))return}catch(n){return r.error(n)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})})}},{key:"reduce",value:function d(e){var t=this
if(typeof e!=="function")throw new TypeError(e+" is not a function")
var r=c(this)
var n=arguments.length>1
var i=false
var o=arguments[1]
var a=o
return new r(function(r){return t.subscribe({next:function(t){var o=!i
i=true
if(!o||n){try{a=e(a,t)}catch(u){return r.error(u)}}else{a=t}},error:function(e){r.error(e)},complete:function(){if(!i&&!n)return r.error(new TypeError("Cannot reduce an empty sequence"))
r.next(a)
r.complete()}})})}},{key:"concat",value:function v(){var e=this
for(var t=arguments.length,r=Array(t),n=0;n<t;n++){r[n]=arguments[n]}var i=c(this)
return new i(function(t){var n=void 0
function o(e){n=e.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){if(r.length===0){n=undefined
t.complete()}else{o(i.from(r.shift()))}}})}o(e)
return function(){if(n){n=undefined
n.unsubscribe()}}})}},{key:"flatMap",value:function h(e){var t=this
if(typeof e!=="function")throw new TypeError(e+" is not a function")
var r=c(this)
return new r(function(n){var i=[]
var o=t.subscribe({next:function(t){if(e){try{t=e(t)}catch(o){return n.error(o)}}var u=r.from(t).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:function(){var e=i.indexOf(u)
if(e>=0)i.splice(e,1)
a()}})
i.push(u)},error:function(e){n.error(e)},complete:function(){a()}})
function a(){if(o.closed&&i.length===0)n.complete()}return function(){i.forEach(function(e){return e.unsubscribe()})
o.unsubscribe()}})}},{key:u("observable"),value:function(){return this}}],[{key:"from",value:function y(t){var r=typeof this==="function"?this:e
if(t==null)throw new TypeError(t+" is not an object")
var n=s(t,u("observable"))
if(n){var i=n.call(t)
if(Object(i)!==i)throw new TypeError(i+" is not an object")
if(l(i)&&i.constructor===r)return i
return new r(function(e){return i.subscribe(e)})}if(a("iterator")){n=s(t,u("iterator"))
if(n){return new r(function(e){p(function(){if(e.closed)return
var r=true
var i=false
var o=undefined
try{for(var a=n.call(t)[Symbol.iterator](),u;!(r=(u=a.next()).done);r=true){var s=u.value
e.next(s)
if(e.closed)return}}catch(c){i=true
o=c}finally{try{if(!r&&a.return){a.return()}}finally{if(i){throw o}}}e.complete()})})}}if(Array.isArray(t)){return new r(function(e){p(function(){if(e.closed)return
for(var r=0;r<t.length;++r){e.next(t[r])
if(e.closed)return}e.complete()})})}throw new TypeError(t+" is not observable")}},{key:"of",value:function m(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++){r[n]=arguments[n]}var i=typeof this==="function"?this:e
return new i(function(e){p(function(){if(e.closed)return
for(var t=0;t<r.length;++t){e.next(r[t])
if(e.closed)return}e.complete()})})}},{key:u("species"),get:function(){return this}}])
return e}()
if(o()){Object.defineProperty(_,Symbol("extensions"),{value:{symbol:u("observable"),hostReportError:f},configurabe:true})}},{}],18:[function(t,r,n){(function(t){(function(t,i){typeof n==="object"&&typeof r!=="undefined"?i(n):typeof e==="function"&&e.amd?e(["exports"],i):i((t.apollo=t.apollo||{},t.apollo.utilities={}))})(this,function(e){"use strict"
function r(e){return["StringValue","BooleanValue","EnumValue"].indexOf(e.kind)>-1}function n(e){return["IntValue","FloatValue"].indexOf(e.kind)>-1}function i(e){return e.kind==="StringValue"}function o(e){return e.kind==="BooleanValue"}function a(e){return e.kind==="IntValue"}function u(e){return e.kind==="FloatValue"}function s(e){return e.kind==="Variable"}function c(e){return e.kind==="ObjectValue"}function l(e){return e.kind==="ListValue"}function f(e){return e.kind==="EnumValue"}function p(e,t,r,n){if(a(r)||u(r)){e[t.value]=Number(r.value)}else if(o(r)||i(r)){e[t.value]=r.value}else if(c(r)){var d={}
r.fields.map(function(e){return p(d,e.name,e.value,n)})
e[t.value]=d}else if(s(r)){var v=(n||{})[r.name.value]
e[t.value]=v}else if(l(r)){e[t.value]=r.values.map(function(e){var r={}
p(r,t,e,n)
return r[t.value]})}else if(f(r)){e[t.value]=r.value}else{throw new Error('The inline argument "'+t.value+'" of kind "'+r.kind+'" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.')}}function d(e,t){var r=null
if(e.directives){r={}
e.directives.forEach(function(e){r[e.name.value]={}
if(e.arguments){e.arguments.forEach(function(n){var i=n.name,o=n.value
return p(r[e.name.value],i,o,t)})}})}var n=null
if(e.arguments&&e.arguments.length){n={}
e.arguments.forEach(function(e){var r=e.name,i=e.value
return p(n,r,i,t)})}return v(e.name.value,n,r)}function v(e,t,r){if(r&&r["connection"]&&r["connection"]["key"]){if(r["connection"]["filter"]&&r["connection"]["filter"].length>0){var n=r["connection"]["filter"]?r["connection"]["filter"]:[]
n.sort()
var i=t
var o={}
n.forEach(function(e){o[e]=i[e]})
return r["connection"]["key"]+"("+JSON.stringify(o)+")"}else{return r["connection"]["key"]}}if(t){var a=JSON.stringify(t)
return e+"("+a+")"}return e}function h(e,t){if(e.arguments&&e.arguments.length){var r={}
e.arguments.forEach(function(e){var n=e.name,i=e.value
return p(r,n,i,t)})
return r}return null}function y(e){return e.alias?e.alias.value:e.name.value}function m(e){return e.kind==="Field"}function b(e){return e.kind==="InlineFragment"}function g(e){return e&&e.type==="id"}function _(e,t){if(t===void 0){t=false}return{type:"id",id:e,generated:t}}function w(e){return e!=null&&typeof e==="object"&&e.type==="json"}function O(e){throw new Error("Variable nodes are not supported by valueFromNode")}function E(e,t){if(t===void 0){t=O}switch(e.kind){case"Variable":return t(e)
case"NullValue":return null
case"IntValue":return parseInt(e.value)
case"FloatValue":return parseFloat(e.value)
case"ListValue":return e.values.map(function(e){return E(e,t)})
case"ObjectValue":{var r={}
for(var n=0,i=e.fields;n<i.length;n++){var o=i[n]
r[o.name.value]=E(o.value,t)}return r}default:return e.value}}function k(e,t){if(e.directives&&e.directives.length){var r={}
e.directives.forEach(function(e){r[e.name.value]=h(e,t)})
return r}return null}function x(e,t){if(t===void 0){t={}}if(!e.directives){return true}var r=true
e.directives.forEach(function(e){if(e.name.value!=="skip"&&e.name.value!=="include"){return}var n=e.arguments||[]
var i=e.name.value
if(n.length!==1){throw new Error("Incorrect number of arguments for the @"+i+" directive.")}var o=n[0]
if(!o.name||o.name.value!=="if"){throw new Error("Invalid argument for the @"+i+" directive.")}var a=n[0].value
var u=false
if(!a||a.kind!=="BooleanValue"){if(a.kind!=="Variable"){throw new Error("Argument for the @"+i+" directive must be a variable or a bool ean value.")}else{u=t[a.name.value]
if(u===undefined){throw new Error("Invalid variable referenced in @"+i+" directive.")}}}else{u=a.value}if(i==="skip"){u=!u}if(!u){r=false}})
return r}function j(e){if(!e.selectionSet||!(e.selectionSet.selections.length>0))return[e]
return[e].concat(e.selectionSet.selections.map(function(e){return[e].concat(j(e))}).reduce(function(e,t){return e.concat(t)},[]))}var T=new Map
function S(e){var t=T.get(e)
if(t)return t
var r=e.definitions.filter(function(e){return e.selectionSet&&e.selectionSet.selections}).map(function(e){return j(e)}).reduce(function(e,t){return e.concat(t)},[]).filter(function(e){return e.directives&&e.directives.length>0}).map(function(e){return e.directives}).reduce(function(e,t){return e.concat(t)},[]).map(function(e){return e.name.value})
T.set(e,r)
return r}function P(e,t){return S(t).some(function(t){return e.indexOf(t)>-1})}var I=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
function N(e,t){var r=t
var n=[]
e.definitions.forEach(function(e){if(e.kind==="OperationDefinition"){throw new Error("Found a "+e.operation+" operation"+(e.name?" named '"+e.name.value+"'":"")+". "+"No operations are allowed when using a fragment as a query. Only fragments are allowed.")}if(e.kind==="FragmentDefinition"){n.push(e)}})
if(typeof r==="undefined"){if(n.length!==1){throw new Error("Found "+n.length+" fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")}r=n[0].name.value}var i=I({},e,{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}].concat(e.definitions)})
return i}function D(e){var t=[]
for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}t.forEach(function(t){if(typeof t==="undefined"||t===null){return}Object.keys(t).forEach(function(r){e[r]=t[r]})})
return e}function q(e){F(e)
var t=e.definitions.filter(function(e){return e.kind==="OperationDefinition"&&e.operation==="mutation"})[0]
if(!t){throw new Error("Must contain a mutation definition.")}return t}function F(e){if(e.kind!=="Document"){throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql')}var t=e.definitions.filter(function(e){return e.kind!=="FragmentDefinition"}).map(function(e){if(e.kind!=="OperationDefinition"){throw new Error('Schema type definitions not allowed in queries. Found: "'+e.kind+'"')}return e})
if(t.length>1){throw new Error("Ambiguous GraphQL document: contains "+t.length+" operations")}}function R(e){F(e)
return e.definitions.filter(function(e){return e.kind==="OperationDefinition"})[0]}function A(e){var t=R(e)
if(!t){throw new Error("GraphQL document is missing an operation")}return t}function M(e){return e.definitions.filter(function(e){return e.kind==="OperationDefinition"&&e.name}).map(function(e){return e.name.value})[0]||null}function Q(e){return e.definitions.filter(function(e){return e.kind==="FragmentDefinition"})}function L(e){var t=R(e)
if(!t||t.operation!=="query"){throw new Error("Must contain a query definition.")}return t}function C(e){if(e.kind!=="Document"){throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql')}if(e.definitions.length>1){throw new Error("Fragment must have exactly one definition.")}var t=e.definitions[0]
if(t.kind!=="FragmentDefinition"){throw new Error("Must be a fragment definition.")}return t}function V(e){F(e)
var t
for(var r=0,n=e.definitions;r<n.length;r++){var i=n[r]
if(i.kind==="OperationDefinition"){var o=i.operation
if(o==="query"||o==="mutation"||o==="subscription"){return i}}if(i.kind==="FragmentDefinition"&&!t){t=i}}if(t){return t}throw new Error("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.")}function K(e){if(e===void 0){e=[]}var t={}
e.forEach(function(e){t[e.name.value]=e})
return t}function B(e){if(e&&e.variableDefinitions&&e.variableDefinitions.length){var t=e.variableDefinitions.filter(function(e){var t=e.defaultValue
return t}).map(function(e){var t=e.variable,r=e.defaultValue
var n={}
p(n,t.name,r)
return n})
return D.apply(void 0,[{}].concat(t))}return{}}function U(e){var t=new Set
if(e.variableDefinitions){for(var r=0,n=e.variableDefinitions;r<n.length;r++){var i=n[r]
t.add(i.variable.name.value)}}return t}function W(e){if(Array.isArray(e)){return e.map(function(e){return W(e)})}if(e!==null&&typeof e==="object"){var t={}
for(var r in e){if(e.hasOwnProperty(r)){t[r]=W(e[r])}}return t}return e}var z={kind:"Field",name:{kind:"Name",value:"__typename"}}
function G(e,t){if(t===void 0){t=false}if(e.selections){if(!t){var r=e.selections.some(function(e){return e.kind==="Field"&&e.name.value==="__typename"})
if(!r){e.selections.push(z)}}e.selections.forEach(function(e){if(e.kind==="Field"){if(e.name.value.lastIndexOf("__",0)!==0&&e.selectionSet){G(e.selectionSet)}}else if(e.kind==="InlineFragment"){if(e.selectionSet){G(e.selectionSet)}}})}}function Y(e,t){if(!t.selections)return t
var r=e.some(function(e){return e.remove})
t.selections=t.selections.map(function(t){if(t.kind!=="Field"||!t||!t.directives)return t
var n
t.directives=t.directives.filter(function(t){var i=!e.some(function(e){if(e.name&&e.name===t.name.value)return true
if(e.test&&e.test(t))return true
return false})
if(!n&&!i&&r)n=true
return i})
return n?null:t}).filter(function(e){return!!e})
t.selections.forEach(function(t){if((t.kind==="Field"||t.kind==="InlineFragment")&&t.selectionSet){Y(e,t.selectionSet)}})
return t}function J(e,t){var r=W(t)
r.definitions.forEach(function(t){Y(e,t.selectionSet)})
var n=A(r)
var i=K(Q(r))
var o=function(e){return e.selectionSet.selections.filter(function(e){return!(e&&e.kind==="FragmentSpread"&&!o(i[e.name.value]))}).length>0}
return o(n)?r:null}var H=new Map
function X(e){F(e)
var t=H.get(e)
if(t)return t
var r=W(e)
r.definitions.forEach(function(e){var t=e.kind==="OperationDefinition"
G(e.selectionSet,t)})
H.set(e,r)
return r}var Z={test:function(e){var t=e.name.value==="connection"
if(t){if(!e.arguments||!e.arguments.some(function(e){return e.name.value==="key"})){console.warn("Removing an @connection directive even though it does not have a key. "+"You may want to use the key parameter to specify a store key.")}}return t}}
var et=new Map
function tt(e){F(e)
var t=et.get(e)
if(t)return t
var r=J([Z],e)
et.set(e,r)
return r}function rt(){if(typeof t!=="undefined"&&t.env.NODE_ENV){return t.env.NODE_ENV}return"development"}function nt(e){return rt()===e}function it(){return nt("production")===true}function ot(){return nt("development")===true}function at(){return nt("test")===true}function ut(e){try{return e()}catch(t){if(console.error){console.error(t)}}}function st(e){return e.errors&&e.errors.length}function ct(e,t){if(e===t){return true}if(e instanceof Date&&t instanceof Date){return e.getTime()===t.getTime()}if(e!=null&&typeof e==="object"&&t!=null&&typeof t==="object"){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){if(!Object.prototype.hasOwnProperty.call(t,r)){return false}if(!ct(e[r],t[r])){return false}}}for(var r in t){if(!Object.prototype.hasOwnProperty.call(e,r)){return false}}return true}return false}function lt(e){Object.freeze(e)
Object.getOwnPropertyNames(e).forEach(function(t){if(e.hasOwnProperty(t)&&e[t]!==null&&(typeof e[t]==="object"||typeof e[t]==="function")&&!Object.isFrozen(e[t])){lt(e[t])}})
return e}function ft(e){if(ot()||at()){return lt(e)}return e}var pt=Object.create({})
function dt(e,t){if(t===void 0){t="warn"}if(it()){return}if(!pt[e]){if(!at()){pt[e]=true}switch(t){case"error":console.error(e)
break
default:console.warn(e)}}}e.getDirectiveInfoFromField=k
e.shouldInclude=x
e.flattenSelections=j
e.getDirectiveNames=S
e.hasDirectives=P
e.getFragmentQueryDocument=N
e.getMutationDefinition=q
e.checkDocument=F
e.getOperationDefinition=R
e.getOperationDefinitionOrDie=A
e.getOperationName=M
e.getFragmentDefinitions=Q
e.getQueryDefinition=L
e.getFragmentDefinition=C
e.getMainDefinition=V
e.createFragmentMap=K
e.getDefaultValues=B
e.variablesInOperation=U
e.removeDirectivesFromDocument=J
e.addTypenameToDocument=X
e.removeConnectionDirectiveFromDocument=tt
e.isScalarValue=r
e.isNumberValue=n
e.valueToObjectRepresentation=p
e.storeKeyNameFromField=d
e.getStoreKeyName=v
e.argumentsObjectFromField=h
e.resultKeyNameFromField=y
e.isField=m
e.isInlineFragment=b
e.isIdValue=g
e.toIdValue=_
e.isJsonValue=w
e.valueFromNode=E
e.assign=D
e.cloneDeep=W
e.getEnv=rt
e.isEnv=nt
e.isProduction=it
e.isDevelopment=ot
e.isTest=at
e.tryFunctionOrLogError=ut
e.graphQLResultHasError=st
e.isEqual=ct
e.maybeDeepFreeze=ft
e.warnOnceInDevelopment=dt
Object.defineProperty(e,"__esModule",{value:true})})}).call(this,t("_process"))},{_process:164}],19:[function(e,t,r){"use strict"
var n=e("es5-ext/object/copy"),i=e("es5-ext/object/normalize-options"),o=e("es5-ext/object/valid-callable"),a=e("es5-ext/object/map"),u=e("es5-ext/object/valid-callable"),s=e("es5-ext/object/valid-value"),c=Function.prototype.bind,l=Object.defineProperty,f=Object.prototype.hasOwnProperty,p
p=function(e,t,r){var i=s(t)&&u(t.value),o
o=n(t)
delete o.writable
delete o.value
o.get=function(){if(!r.overwriteDefinition&&f.call(this,e))return i
t.value=c.call(i,r.resolveContext?r.resolveContext(this):this)
l(this,e,t)
return this[e]}
return o}
t.exports=function(e){var t=i(arguments[1])
if(t.resolveContext!=null)o(t.resolveContext)
return a(e,function(e,r){return p(r,e,t)})}},{"es5-ext/object/copy":42,"es5-ext/object/map":51,"es5-ext/object/normalize-options":52,"es5-ext/object/valid-callable":57,"es5-ext/object/valid-value":59}],20:[function(e,t,r){"use strict"
var n=e("es5-ext/object/assign"),i=e("es5-ext/object/normalize-options"),o=e("es5-ext/object/is-callable"),a=e("es5-ext/string/#/contains"),u
u=t.exports=function(e,t){var r,o,u,s,c
if(arguments.length<2||typeof e!=="string"){s=t
t=e
e=null}else{s=arguments[2]}if(e==null){r=u=true
o=false}else{r=a.call(e,"c")
o=a.call(e,"e")
u=a.call(e,"w")}c={value:t,configurable:r,enumerable:o,writable:u}
return!s?c:n(i(s),c)}
u.gs=function(e,t,r){var u,s,c,l
if(typeof e!=="string"){c=r
r=t
t=e
e=null}else{c=arguments[3]}if(t==null){t=undefined}else if(!o(t)){c=t
t=r=undefined}else if(r==null){r=undefined}else if(!o(r)){c=r
r=undefined}if(e==null){u=true
s=false}else{u=a.call(e,"c")
s=a.call(e,"e")}l={get:t,set:r,configurable:u,enumerable:s}
return!c?l:n(i(c),l)}},{"es5-ext/object/assign":39,"es5-ext/object/is-callable":45,"es5-ext/object/normalize-options":52,"es5-ext/string/#/contains":60}],21:[function(e,t,r){"use strict"
var n=e("../../object/valid-value")
t.exports=function(){n(this).length=0
return this}},{"../../object/valid-value":59}],22:[function(e,t,r){"use strict"
var n=e("../../number/is-nan"),i=e("../../number/to-pos-integer"),o=e("../../object/valid-value"),a=Array.prototype.indexOf,u=Object.prototype.hasOwnProperty,s=Math.abs,c=Math.floor
t.exports=function(e){var t,r,l,f
if(!n(e))return a.apply(this,arguments)
r=i(o(this).length)
l=arguments[1]
if(isNaN(l))l=0
else if(l>=0)l=c(l)
else l=i(this.length)-c(s(l))
for(t=l;t<r;++t){if(u.call(this,t)){f=this[t]
if(n(f))return t}}return-1}},{"../../number/is-nan":33,"../../number/to-pos-integer":37,"../../object/valid-value":59}],23:[function(e,t,r){"use strict"
t.exports=e("./is-implemented")()?Array.from:e("./shim")},{"./is-implemented":24,"./shim":25}],24:[function(e,t,r){"use strict"
t.exports=function(){var e=Array.from,t,r
if(typeof e!=="function")return false
t=["raz","dwa"]
r=e(t)
return Boolean(r&&r!==t&&r[1]==="dwa")}},{}],25:[function(e,t,r){"use strict"
var n=e("es6-symbol").iterator,i=e("../../function/is-arguments"),o=e("../../function/is-function"),a=e("../../number/to-pos-integer"),u=e("../../object/valid-callable"),s=e("../../object/valid-value"),c=e("../../object/is-value"),l=e("../../string/is-string"),f=Array.isArray,p=Function.prototype.call,d={configurable:true,enumerable:true,writable:true,value:null},v=Object.defineProperty
t.exports=function(e){var t=arguments[1],r=arguments[2],h,y,m,b,g,_,w,O,E,k
e=Object(s(e))
if(c(t))u(t)
if(!this||this===Array||!o(this)){if(!t){if(i(e)){g=e.length
if(g!==1)return Array.apply(null,e)
b=new Array(1)
b[0]=e[0]
return b}if(f(e)){b=new Array(g=e.length)
for(y=0;y<g;++y)b[y]=e[y]
return b}}b=[]}else{h=this}if(!f(e)){if((E=e[n])!==undefined){w=u(E).call(e)
if(h)b=new h
O=w.next()
y=0
while(!O.done){k=t?p.call(t,r,O.value,y):O.value
if(h){d.value=k
v(b,y,d)}else{b[y]=k}O=w.next();++y}g=y}else if(l(e)){g=e.length
if(h)b=new h
for(y=0,m=0;y<g;++y){k=e[y]
if(y+1<g){_=k.charCodeAt(0)
if(_>=55296&&_<=56319)k+=e[++y]}k=t?p.call(t,r,k,m):k
if(h){d.value=k
v(b,m,d)}else{b[m]=k}++m}g=m}}if(g===undefined){g=a(e.length)
if(h)b=new h(g)
for(y=0;y<g;++y){k=t?p.call(t,r,e[y],y):e[y]
if(h){d.value=k
v(b,y,d)}else{b[y]=k}}}if(h){d.value=null
b.length=g}return b}},{"../../function/is-arguments":26,"../../function/is-function":27,"../../number/to-pos-integer":37,"../../object/is-value":47,"../../object/valid-callable":57,"../../object/valid-value":59,"../../string/is-string":63,"es6-symbol":83}],26:[function(e,t,r){"use strict"
var n=Object.prototype.toString,i=n.call(function(){return arguments}())
t.exports=function(e){return n.call(e)===i}},{}],27:[function(e,t,r){"use strict"
var n=Object.prototype.toString,i=n.call(e("./noop"))
t.exports=function(e){return typeof e==="function"&&n.call(e)===i}},{"./noop":28}],28:[function(e,t,r){"use strict"
t.exports=function(){}},{}],29:[function(e,t,r){t.exports=function(){return this}()},{}],30:[function(e,t,r){"use strict"
t.exports=e("./is-implemented")()?Math.sign:e("./shim")},{"./is-implemented":31,"./shim":32}],31:[function(e,t,r){"use strict"
t.exports=function(){var e=Math.sign
if(typeof e!=="function")return false
return e(10)===1&&e(-20)===-1}},{}],32:[function(e,t,r){"use strict"
t.exports=function(e){e=Number(e)
if(isNaN(e)||e===0)return e
return e>0?1:-1}},{}],33:[function(e,t,r){"use strict"
t.exports=e("./is-implemented")()?Number.isNaN:e("./shim")},{"./is-implemented":34,"./shim":35}],34:[function(e,t,r){"use strict"
t.exports=function(){var e=Number.isNaN
if(typeof e!=="function")return false
return!e({})&&e(NaN)&&!e(34)}},{}],35:[function(e,t,r){"use strict"
t.exports=function(e){return e!==e}},{}],36:[function(e,t,r){"use strict"
var n=e("../math/sign"),i=Math.abs,o=Math.floor
t.exports=function(e){if(isNaN(e))return 0
e=Number(e)
if(e===0||!isFinite(e))return e
return n(e)*o(i(e))}},{"../math/sign":30}],37:[function(e,t,r){"use strict"
var n=e("./to-integer"),i=Math.max
t.exports=function(e){return i(0,n(e))}},{"./to-integer":36}],38:[function(e,t,r){"use strict"
var n=e("./valid-callable"),i=e("./valid-value"),o=Function.prototype.bind,a=Function.prototype.call,u=Object.keys,s=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(r,c){var l,f=arguments[2],p=arguments[3]
r=Object(i(r))
n(c)
l=u(r)
if(p){l.sort(typeof p==="function"?o.call(p,r):undefined)}if(typeof e!=="function")e=l[e]
return a.call(e,l,function(e,n){if(!s.call(r,e))return t
return a.call(c,f,r[e],e,r,n)})}}},{"./valid-callable":57,"./valid-value":59}],39:[function(e,t,r){"use strict"
t.exports=e("./is-implemented")()?Object.assign:e("./shim")},{"./is-implemented":40,"./shim":41}],40:[function(e,t,r){"use strict"
t.exports=function(){var e=Object.assign,t
if(typeof e!=="function")return false
t={foo:"raz"}
e(t,{bar:"dwa"},{trzy:"trzy"})
return t.foo+t.bar+t.trzy==="razdwatrzy"}},{}],41:[function(e,t,r){"use strict"
var n=e("../keys"),i=e("../valid-value"),o=Math.max
t.exports=function(e,t){var r,a,u=o(arguments.length,2),s
e=Object(i(e))
s=function(n){try{e[n]=t[n]}catch(i){if(!r)r=i}}
for(a=1;a<u;++a){t=arguments[a]
n(t).forEach(s)}if(r!==undefined)throw r
return e}},{"../keys":48,"../valid-value":59}],42:[function(e,t,r){"use strict"
var n=e("../array/from"),i=e("./assign"),o=e("./valid-value")
t.exports=function(e){var t=Object(o(e)),r=arguments[1],a=Object(arguments[2])
if(t!==e&&!r)return t
var u={}
if(r){n(r,function(t){if(a.ensure||t in e)u[t]=e[t]})}else{i(u,e)}return u}},{"../array/from":23,"./assign":39,"./valid-value":59}],43:[function(e,t,r){"use strict"
var n=Object.create,i
if(!e("./set-prototype-of/is-implemented")()){i=e("./set-prototype-of/shim")}t.exports=function(){var e,t,r
if(!i)return n
if(i.level!==1)return n
e={}
t={}
r={configurable:false,enumerable:false,writable:true,value:undefined}
Object.getOwnPropertyNames(Object.prototype).forEach(function(e){if(e==="__proto__"){t[e]={configurable:true,enumerable:false,writable:true,value:undefined}
return}t[e]=r})
Object.defineProperties(e,t)
Object.defineProperty(i,"nullPolyfill",{configurable:false,enumerable:false,writable:false,value:e})
return function(t,r){return n(t===null?e:t,r)}}()},{"./set-prototype-of/is-implemented":55,"./set-prototype-of/shim":56}],44:[function(e,t,r){"use strict"
t.exports=e("./_iterate")("forEach")},{"./_iterate":38}],45:[function(e,t,r){"use strict"
t.exports=function(e){return typeof e==="function"}},{}],46:[function(e,t,r){"use strict"
var n=e("./is-value")
var i={"function":true,object:true}
t.exports=function(e){return n(e)&&i[typeof e]||false}},{"./is-value":47}],47:[function(e,t,r){"use strict"
var n=e("../function/noop")()
t.exports=function(e){return e!==n&&e!==null}},{"../function/noop":28}],48:[function(e,t,r){"use strict"
t.exports=e("./is-implemented")()?Object.keys:e("./shim")},{"./is-implemented":49,"./shim":50}],49:[function(e,t,r){"use strict"
t.exports=function(){try{Object.keys("primitive")
return true}catch(e){return false}}},{}],50:[function(e,t,r){"use strict"
var n=e("../is-value")
var i=Object.keys
t.exports=function(e){return i(n(e)?Object(e):e)}},{"../is-value":47}],51:[function(e,t,r){"use strict"
var n=e("./valid-callable"),i=e("./for-each"),o=Function.prototype.call
t.exports=function(e,t){var r={},a=arguments[2]
n(t)
i(e,function(e,n,i,u){r[n]=o.call(t,a,e,n,i,u)})
return r}},{"./for-each":44,"./valid-callable":57}],52:[function(e,t,r){"use strict"
var n=e("./is-value")
var i=Array.prototype.forEach,o=Object.create
var a=function(e,t){var r
for(r in e)t[r]=e[r]}
t.exports=function(e){var t=o(null)
i.call(arguments,function(e){if(!n(e))return
a(Object(e),t)})
return t}},{"./is-value":47}],53:[function(e,t,r){"use strict"
var n=Array.prototype.forEach,i=Object.create
t.exports=function(e){var t=i(null)
n.call(arguments,function(e){t[e]=true})
return t}},{}],54:[function(e,t,r){"use strict"
t.exports=e("./is-implemented")()?Object.setPrototypeOf:e("./shim")},{"./is-implemented":55,"./shim":56}],55:[function(e,t,r){"use strict"
var n=Object.create,i=Object.getPrototypeOf,o={}
t.exports=function(){var e=Object.setPrototypeOf,t=arguments[0]||n
if(typeof e!=="function")return false
return i(e(t(null),o))===o}},{}],56:[function(e,t,r){"use strict"
var n=e("../is-object"),i=e("../valid-value"),o=Object.prototype.isPrototypeOf,a=Object.defineProperty,u={configurable:true,enumerable:false,writable:true,value:undefined},s
s=function(e,t){i(e)
if(t===null||n(t))return e
throw new TypeError("Prototype must be null or an object")}
t.exports=function(e){var t,r
if(!e)return null
if(e.level===2){if(e.set){r=e.set
t=function(e,t){r.call(s(e,t),t)
return e}}else{t=function(e,t){s(e,t).__proto__=t
return e}}}else{t=function n(e,t){var r
s(e,t)
r=o.call(n.nullPolyfill,e)
if(r)delete n.nullPolyfill.__proto__
if(t===null)t=n.nullPolyfill
e.__proto__=t
if(r)a(n.nullPolyfill,"__proto__",u)
return e}}return Object.defineProperty(t,"level",{configurable:false,enumerable:false,writable:false,value:e.level})}(function(){var e=Object.create(null),t={},r,n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__")
if(n){try{r=n.set
r.call(e,t)}catch(i){}if(Object.getPrototypeOf(e)===t)return{set:r,level:2}}e.__proto__=t
if(Object.getPrototypeOf(e)===t)return{level:2}
e={}
e.__proto__=t
if(Object.getPrototypeOf(e)===t)return{level:1}
return false}())
e("../create")},{"../create":43,"../is-object":46,"../valid-value":59}],57:[function(e,t,r){"use strict"
t.exports=function(e){if(typeof e!=="function")throw new TypeError(e+" is not a function")
return e}},{}],58:[function(e,t,r){"use strict"
var n=e("./is-object")
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not an Object")
return e}},{"./is-object":46}],59:[function(e,t,r){"use strict"
var n=e("./is-value")
t.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined")
return e}},{"./is-value":47}],60:[function(e,t,r){"use strict"
t.exports=e("./is-implemented")()?String.prototype.contains:e("./shim")},{"./is-implemented":61,"./shim":62}],61:[function(e,t,r){"use strict"
var n="razdwatrzy"
t.exports=function(){if(typeof n.contains!=="function")return false
return n.contains("dwa")===true&&n.contains("foo")===false}},{}],62:[function(e,t,r){"use strict"
var n=String.prototype.indexOf
t.exports=function(e){return n.call(this,e,arguments[1])>-1}},{}],63:[function(e,t,r){"use strict"
var n=Object.prototype.toString,i=n.call("")
t.exports=function(e){return typeof e==="string"||e&&typeof e==="object"&&(e instanceof String||n.call(e)===i)||false}},{}],64:[function(e,t,r){"use strict"
var n=Object.create(null),i=Math.random
t.exports=function(){var e
do{e=i().toString(36).slice(2)}while(n[e])
return e}},{}],65:[function(e,t,r){"use strict"
var n=e("es5-ext/object/set-prototype-of"),i=e("es5-ext/string/#/contains"),o=e("d"),a=e("es6-symbol"),u=e("./")
var s=Object.defineProperty,c
c=t.exports=function(e,t){if(!(this instanceof c))throw new TypeError("Constructor requires 'new'")
u.call(this,e)
if(!t)t="value"
else if(i.call(t,"key+value"))t="key+value"
else if(i.call(t,"key"))t="key"
else t="value"
s(this,"__kind__",o("",t))}
if(n)n(c,u)
delete c.prototype.constructor
c.prototype=Object.create(u.prototype,{_resolve:o(function(e){if(this.__kind__==="value")return this.__list__[e]
if(this.__kind__==="key+value")return[e,this.__list__[e]]
return e})})
s(c.prototype,a.toStringTag,o("c","Array Iterator"))},{"./":68,d:20,"es5-ext/object/set-prototype-of":54,"es5-ext/string/#/contains":60,"es6-symbol":83}],66:[function(e,t,r){"use strict"
var n=e("es5-ext/function/is-arguments"),i=e("es5-ext/object/valid-callable"),o=e("es5-ext/string/is-string"),a=e("./get")
var u=Array.isArray,s=Function.prototype.call,c=Array.prototype.some
t.exports=function(e,t){var r,l=arguments[2],f,p,d,v,h,y,m
if(u(e)||n(e))r="array"
else if(o(e))r="string"
else e=a(e)
i(t)
p=function(){d=true}
if(r==="array"){c.call(e,function(e){s.call(t,l,e,p)
return d})
return}if(r==="string"){h=e.length
for(v=0;v<h;++v){y=e[v]
if(v+1<h){m=y.charCodeAt(0)
if(m>=55296&&m<=56319)y+=e[++v]}s.call(t,l,y,p)
if(d)break}return}f=e.next()
while(!f.done){s.call(t,l,f.value,p)
if(d)return
f=e.next()}}},{"./get":67,"es5-ext/function/is-arguments":26,"es5-ext/object/valid-callable":57,"es5-ext/string/is-string":63}],67:[function(e,t,r){"use strict"
var n=e("es5-ext/function/is-arguments"),i=e("es5-ext/string/is-string"),o=e("./array"),a=e("./string"),u=e("./valid-iterable"),s=e("es6-symbol").iterator
t.exports=function(e){if(typeof u(e)[s]==="function")return e[s]()
if(n(e))return new o(e)
if(i(e))return new a(e)
return new o(e)}},{"./array":65,"./string":70,"./valid-iterable":71,"es5-ext/function/is-arguments":26,"es5-ext/string/is-string":63,"es6-symbol":83}],68:[function(e,t,r){"use strict"
var n=e("es5-ext/array/#/clear"),i=e("es5-ext/object/assign"),o=e("es5-ext/object/valid-callable"),a=e("es5-ext/object/valid-value"),u=e("d"),s=e("d/auto-bind"),c=e("es6-symbol")
var l=Object.defineProperty,f=Object.defineProperties,p
t.exports=p=function(e,t){if(!(this instanceof p))throw new TypeError("Constructor requires 'new'")
f(this,{__list__:u("w",a(e)),__context__:u("w",t),__nextIndex__:u("w",0)})
if(!t)return
o(t.on)
t.on("_add",this._onAdd)
t.on("_delete",this._onDelete)
t.on("_clear",this._onClear)}
delete p.prototype.constructor
f(p.prototype,i({_next:u(function(){var e
if(!this.__list__)return undefined
if(this.__redo__){e=this.__redo__.shift()
if(e!==undefined)return e}if(this.__nextIndex__<this.__list__.length)return this.__nextIndex__++
this._unBind()
return undefined}),next:u(function(){return this._createResult(this._next())}),_createResult:u(function(e){if(e===undefined)return{done:true,value:undefined}
return{done:false,value:this._resolve(e)}}),_resolve:u(function(e){return this.__list__[e]}),_unBind:u(function(){this.__list__=null
delete this.__redo__
if(!this.__context__)return
this.__context__.off("_add",this._onAdd)
this.__context__.off("_delete",this._onDelete)
this.__context__.off("_clear",this._onClear)
this.__context__=null}),toString:u(function(){return"[object "+(this[c.toStringTag]||"Object")+"]"})},s({_onAdd:u(function(e){if(e>=this.__nextIndex__)return;++this.__nextIndex__
if(!this.__redo__){l(this,"__redo__",u("c",[e]))
return}this.__redo__.forEach(function(t,r){if(t>=e)this.__redo__[r]=++t},this)
this.__redo__.push(e)}),_onDelete:u(function(e){var t
if(e>=this.__nextIndex__)return;--this.__nextIndex__
if(!this.__redo__)return
t=this.__redo__.indexOf(e)
if(t!==-1)this.__redo__.splice(t,1)
this.__redo__.forEach(function(t,r){if(t>e)this.__redo__[r]=--t},this)}),_onClear:u(function(){if(this.__redo__)n.call(this.__redo__)
this.__nextIndex__=0})})))
l(p.prototype,c.iterator,u(function(){return this}))},{d:20,"d/auto-bind":19,"es5-ext/array/#/clear":21,"es5-ext/object/assign":39,"es5-ext/object/valid-callable":57,"es5-ext/object/valid-value":59,"es6-symbol":83}],69:[function(e,t,r){"use strict"
var n=e("es5-ext/function/is-arguments"),i=e("es5-ext/object/is-value"),o=e("es5-ext/string/is-string")
var a=e("es6-symbol").iterator,u=Array.isArray
t.exports=function(e){if(!i(e))return false
if(u(e))return true
if(o(e))return true
if(n(e))return true
return typeof e[a]==="function"}},{"es5-ext/function/is-arguments":26,"es5-ext/object/is-value":47,"es5-ext/string/is-string":63,"es6-symbol":83}],70:[function(e,t,r){"use strict"
var n=e("es5-ext/object/set-prototype-of"),i=e("d"),o=e("es6-symbol"),a=e("./")
var u=Object.defineProperty,s
s=t.exports=function(e){if(!(this instanceof s))throw new TypeError("Constructor requires 'new'")
e=String(e)
a.call(this,e)
u(this,"__length__",i("",e.length))}
if(n)n(s,a)
delete s.prototype.constructor
s.prototype=Object.create(a.prototype,{_next:i(function(){if(!this.__list__)return undefined
if(this.__nextIndex__<this.__length__)return this.__nextIndex__++
this._unBind()
return undefined}),_resolve:i(function(e){var t=this.__list__[e],r
if(this.__nextIndex__===this.__length__)return t
r=t.charCodeAt(0)
if(r>=55296&&r<=56319)return t+this.__list__[this.__nextIndex__++]
return t})})
u(s.prototype,o.toStringTag,i("c","String Iterator"))},{"./":68,d:20,"es5-ext/object/set-prototype-of":54,"es6-symbol":83}],71:[function(e,t,r){"use strict"
var n=e("./is-iterable")
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not iterable")
return e}},{"./is-iterable":69}],72:[function(e,t,r){"use strict"
if(!e("./is-implemented")()){Object.defineProperty(e("es5-ext/global"),"Map",{value:e("./polyfill"),configurable:true,enumerable:false,writable:true})}},{"./is-implemented":73,"./polyfill":77,"es5-ext/global":29}],73:[function(e,t,r){"use strict"
t.exports=function(){var e,t,r
if(typeof Map!=="function")return false
try{e=new Map([["raz","one"],["dwa","two"],["trzy","three"]])}catch(n){return false}if(String(e)!=="[object Map]")return false
if(e.size!==3)return false
if(typeof e.clear!=="function")return false
if(typeof e.delete!=="function")return false
if(typeof e.entries!=="function")return false
if(typeof e.forEach!=="function")return false
if(typeof e.get!=="function")return false
if(typeof e.has!=="function")return false
if(typeof e.keys!=="function")return false
if(typeof e.set!=="function")return false
if(typeof e.values!=="function")return false
t=e.entries()
r=t.next()
if(r.done!==false)return false
if(!r.value)return false
if(r.value[0]!=="raz")return false
if(r.value[1]!=="one")return false
return true}},{}],74:[function(e,t,r){"use strict"
t.exports=function(){if(typeof Map==="undefined")return false
return Object.prototype.toString.call(new Map)==="[object Map]"}()},{}],75:[function(e,t,r){"use strict"
t.exports=e("es5-ext/object/primitive-set")("key","value","key+value")},{"es5-ext/object/primitive-set":53}],76:[function(e,t,r){"use strict"
var n=e("es5-ext/object/set-prototype-of"),i=e("d"),o=e("es6-iterator"),a=e("es6-symbol").toStringTag,u=e("./iterator-kinds"),s=Object.defineProperties,c=o.prototype._unBind,l
l=t.exports=function(e,t){if(!(this instanceof l))return new l(e,t)
o.call(this,e.__mapKeysData__,e)
if(!t||!u[t])t="key+value"
s(this,{__kind__:i("",t),__values__:i("w",e.__mapValuesData__)})}
if(n)n(l,o)
l.prototype=Object.create(o.prototype,{constructor:i(l),_resolve:i(function(e){if(this.__kind__==="value")return this.__values__[e]
if(this.__kind__==="key")return this.__list__[e]
return[this.__list__[e],this.__values__[e]]}),_unBind:i(function(){this.__values__=null
c.call(this)}),toString:i(function(){return"[object Map Iterator]"})})
Object.defineProperty(l.prototype,a,i("c","Map Iterator"))},{"./iterator-kinds":75,d:20,"es5-ext/object/set-prototype-of":54,"es6-iterator":68,"es6-symbol":83}],77:[function(e,t,r){"use strict"
var n=e("es5-ext/array/#/clear"),i=e("es5-ext/array/#/e-index-of"),o=e("es5-ext/object/set-prototype-of"),a=e("es5-ext/object/valid-callable"),u=e("es5-ext/object/valid-value"),s=e("d"),c=e("event-emitter"),l=e("es6-symbol"),f=e("es6-iterator/valid-iterable"),p=e("es6-iterator/for-of"),d=e("./lib/iterator"),v=e("./is-native-implemented"),h=Function.prototype.call,y=Object.defineProperties,m=Object.getPrototypeOf,b
t.exports=b=function(){var e=arguments[0],t,r,n
if(!(this instanceof b))throw new TypeError("Constructor requires 'new'")
if(v&&o&&Map!==b){n=o(new Map,m(this))}else{n=this}if(e!=null)f(e)
y(n,{__mapKeysData__:s("c",t=[]),__mapValuesData__:s("c",r=[])})
if(!e)return n
p(e,function(e){var n=u(e)[0]
e=e[1]
if(i.call(t,n)!==-1)return
t.push(n)
r.push(e)},n)
return n}
if(v){if(o)o(b,Map)
b.prototype=Object.create(Map.prototype,{constructor:s(b)})}c(y(b.prototype,{clear:s(function(){if(!this.__mapKeysData__.length)return
n.call(this.__mapKeysData__)
n.call(this.__mapValuesData__)
this.emit("_clear")}),"delete":s(function(e){var t=i.call(this.__mapKeysData__,e)
if(t===-1)return false
this.__mapKeysData__.splice(t,1)
this.__mapValuesData__.splice(t,1)
this.emit("_delete",t,e)
return true}),entries:s(function(){return new d(this,"key+value")}),forEach:s(function(e){var t=arguments[1],r,n
a(e)
r=this.entries()
n=r._next()
while(n!==undefined){h.call(e,t,this.__mapValuesData__[n],this.__mapKeysData__[n],this)
n=r._next()}}),get:s(function(e){var t=i.call(this.__mapKeysData__,e)
if(t===-1)return
return this.__mapValuesData__[t]}),has:s(function(e){return i.call(this.__mapKeysData__,e)!==-1}),keys:s(function(){return new d(this,"key")}),set:s(function(e,t){var r=i.call(this.__mapKeysData__,e),n
if(r===-1){r=this.__mapKeysData__.push(e)-1
n=true}this.__mapValuesData__[r]=t
if(n)this.emit("_add",r,e)
return this}),size:s.gs(function(){return this.__mapKeysData__.length}),values:s(function(){return new d(this,"value")}),toString:s(function(){return"[object Map]"})}))
Object.defineProperty(b.prototype,l.iterator,s(function(){return this.entries()}))
Object.defineProperty(b.prototype,l.toStringTag,s("c","Map"))},{"./is-native-implemented":74,"./lib/iterator":76,d:20,"es5-ext/array/#/clear":21,"es5-ext/array/#/e-index-of":22,"es5-ext/object/set-prototype-of":54,"es5-ext/object/valid-callable":57,"es5-ext/object/valid-value":59,"es6-iterator/for-of":66,"es6-iterator/valid-iterable":71,"es6-symbol":83,"event-emitter":92}],78:[function(e,t,r){"use strict"
if(!e("./is-implemented")()){Object.defineProperty(e("es5-ext/global"),"Set",{value:e("./polyfill"),configurable:true,enumerable:false,writable:true})}},{"./is-implemented":79,"./polyfill":82,"es5-ext/global":29}],79:[function(e,t,r){"use strict"
t.exports=function(){var e,t,r
if(typeof Set!=="function")return false
e=new Set(["raz","dwa","trzy"])
if(String(e)!=="[object Set]")return false
if(e.size!==3)return false
if(typeof e.add!=="function")return false
if(typeof e.clear!=="function")return false
if(typeof e.delete!=="function")return false
if(typeof e.entries!=="function")return false
if(typeof e.forEach!=="function")return false
if(typeof e.has!=="function")return false
if(typeof e.keys!=="function")return false
if(typeof e.values!=="function")return false
t=e.values()
r=t.next()
if(r.done!==false)return false
if(r.value!=="raz")return false
return true}},{}],80:[function(e,t,r){"use strict"
t.exports=function(){if(typeof Set==="undefined")return false
return Object.prototype.toString.call(Set.prototype)==="[object Set]"}()},{}],81:[function(e,t,r){"use strict"
var n=e("es5-ext/object/set-prototype-of"),i=e("es5-ext/string/#/contains"),o=e("d"),a=e("es6-iterator"),u=e("es6-symbol").toStringTag,s=Object.defineProperty,c
c=t.exports=function(e,t){if(!(this instanceof c))return new c(e,t)
a.call(this,e.__setData__,e)
if(!t)t="value"
else if(i.call(t,"key+value"))t="key+value"
else t="value"
s(this,"__kind__",o("",t))}
if(n)n(c,a)
c.prototype=Object.create(a.prototype,{constructor:o(c),_resolve:o(function(e){if(this.__kind__==="value")return this.__list__[e]
return[this.__list__[e],this.__list__[e]]}),toString:o(function(){return"[object Set Iterator]"})})
s(c.prototype,u,o("c","Set Iterator"))},{d:20,"es5-ext/object/set-prototype-of":54,"es5-ext/string/#/contains":60,"es6-iterator":68,"es6-symbol":83}],82:[function(e,t,r){"use strict"
var n=e("es5-ext/array/#/clear"),i=e("es5-ext/array/#/e-index-of"),o=e("es5-ext/object/set-prototype-of"),a=e("es5-ext/object/valid-callable"),u=e("d"),s=e("event-emitter"),c=e("es6-symbol"),l=e("es6-iterator/valid-iterable"),f=e("es6-iterator/for-of"),p=e("./lib/iterator"),d=e("./is-native-implemented"),v=Function.prototype.call,h=Object.defineProperty,y=Object.getPrototypeOf,m,b,g
if(d)g=Set
t.exports=m=function _(){var e=arguments[0],t
if(!(this instanceof m))throw new TypeError("Constructor requires 'new'")
if(d&&o)t=o(new g,y(this))
else t=this
if(e!=null)l(e)
h(t,"__setData__",u("c",[]))
if(!e)return t
f(e,function(e){if(i.call(this,e)!==-1)return
this.push(e)},t.__setData__)
return t}
if(d){if(o)o(m,g)
m.prototype=Object.create(g.prototype,{constructor:u(m)})}s(Object.defineProperties(m.prototype,{add:u(function(e){if(this.has(e))return this
this.emit("_add",this.__setData__.push(e)-1,e)
return this}),clear:u(function(){if(!this.__setData__.length)return
n.call(this.__setData__)
this.emit("_clear")}),"delete":u(function(e){var t=i.call(this.__setData__,e)
if(t===-1)return false
this.__setData__.splice(t,1)
this.emit("_delete",t,e)
return true}),entries:u(function(){return new p(this,"key+value")}),forEach:u(function(e){var t=arguments[1],r,n,i
a(e)
r=this.values()
n=r._next()
while(n!==undefined){i=r._resolve(n)
v.call(e,t,i,i,this)
n=r._next()}}),has:u(function(e){return i.call(this.__setData__,e)!==-1}),keys:u(b=function(){return this.values()}),size:u.gs(function(){return this.__setData__.length}),values:u(function(){return new p(this)}),toString:u(function(){return"[object Set]"})}))
h(m.prototype,c.iterator,u(b))
h(m.prototype,c.toStringTag,u("c","Set"))},{"./is-native-implemented":80,"./lib/iterator":81,d:20,"es5-ext/array/#/clear":21,"es5-ext/array/#/e-index-of":22,"es5-ext/object/set-prototype-of":54,"es5-ext/object/valid-callable":57,"es6-iterator/for-of":66,"es6-iterator/valid-iterable":71,"es6-symbol":83,"event-emitter":92}],83:[function(e,t,r){"use strict"
t.exports=e("./is-implemented")()?Symbol:e("./polyfill")},{"./is-implemented":84,"./polyfill":86}],84:[function(e,t,r){"use strict"
var n={object:true,symbol:true}
t.exports=function(){var e
if(typeof Symbol!=="function")return false
e=Symbol("test symbol")
try{String(e)}catch(t){return false}if(!n[typeof Symbol.iterator])return false
if(!n[typeof Symbol.toPrimitive])return false
if(!n[typeof Symbol.toStringTag])return false
return true}},{}],85:[function(e,t,r){"use strict"
t.exports=function(e){if(!e)return false
if(typeof e==="symbol")return true
if(!e.constructor)return false
if(e.constructor.name!=="Symbol")return false
return e[e.constructor.toStringTag]==="Symbol"}},{}],86:[function(e,t,r){"use strict"
var n=e("d"),i=e("./validate-symbol"),o=Object.create,a=Object.defineProperties,u=Object.defineProperty,s=Object.prototype,c,l,f,p=o(null),d
if(typeof Symbol==="function"){c=Symbol
try{String(c())
d=true}catch(v){}}var h=function(){var e=o(null)
return function(t){var r=0,i,o
while(e[t+(r||"")])++r
t+=r||""
e[t]=true
i="@@"+t
u(s,i,n.gs(null,function(e){if(o)return
o=true
u(this,i,n(e))
o=false}))
return i}}()
f=function y(e){if(this instanceof f)throw new TypeError("Symbol is not a constructor")
return l(e)}
t.exports=l=function m(e){var t
if(this instanceof m)throw new TypeError("Symbol is not a constructor")
if(d)return c(e)
t=o(f.prototype)
e=e===undefined?"":String(e)
return a(t,{__description__:n("",e),__name__:n("",h(e))})}
a(l,{"for":n(function(e){if(p[e])return p[e]
return p[e]=l(String(e))}),keyFor:n(function(e){var t
i(e)
for(t in p)if(p[t]===e)return t}),hasInstance:n("",c&&c.hasInstance||l("hasInstance")),isConcatSpreadable:n("",c&&c.isConcatSpreadable||l("isConcatSpreadable")),iterator:n("",c&&c.iterator||l("iterator")),match:n("",c&&c.match||l("match")),replace:n("",c&&c.replace||l("replace")),search:n("",c&&c.search||l("search")),species:n("",c&&c.species||l("species")),split:n("",c&&c.split||l("split")),toPrimitive:n("",c&&c.toPrimitive||l("toPrimitive")),toStringTag:n("",c&&c.toStringTag||l("toStringTag")),unscopables:n("",c&&c.unscopables||l("unscopables"))})
a(f.prototype,{constructor:n(l),toString:n("",function(){return this.__name__})})
a(l.prototype,{toString:n(function(){return"Symbol ("+i(this).__description__+")"}),valueOf:n(function(){return i(this)})})
u(l.prototype,l.toPrimitive,n("",function(){var e=i(this)
if(typeof e==="symbol")return e
return e.toString()}))
u(l.prototype,l.toStringTag,n("c","Symbol"))
u(f.prototype,l.toStringTag,n("c",l.prototype[l.toStringTag]))
u(f.prototype,l.toPrimitive,n("c",l.prototype[l.toPrimitive]))},{"./validate-symbol":87,d:20}],87:[function(e,t,r){"use strict"
var n=e("./is-symbol")
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol")
return e}},{"./is-symbol":85}],88:[function(e,t,r){"use strict"
if(!e("./is-implemented")()){Object.defineProperty(e("es5-ext/global"),"WeakMap",{value:e("./polyfill"),configurable:true,enumerable:false,writable:true})}},{"./is-implemented":89,"./polyfill":91,"es5-ext/global":29}],89:[function(e,t,r){"use strict"
t.exports=function(){var e,t
if(typeof WeakMap!=="function")return false
try{e=new WeakMap([[t={},"one"],[{},"two"],[{},"three"]])}catch(r){return false}if(String(e)!=="[object WeakMap]")return false
if(typeof e.set!=="function")return false
if(e.set({},1)!==e)return false
if(typeof e.delete!=="function")return false
if(typeof e.has!=="function")return false
if(e.get(t)!=="one")return false
return true}},{}],90:[function(e,t,r){"use strict"
t.exports=function(){if(typeof WeakMap!=="function")return false
return Object.prototype.toString.call(new WeakMap)==="[object WeakMap]"}()},{}],91:[function(e,t,r){"use strict"
var n=e("es5-ext/object/set-prototype-of"),i=e("es5-ext/object/valid-object"),o=e("es5-ext/object/valid-value"),a=e("es5-ext/string/random-uniq"),u=e("d"),s=e("es6-iterator/get"),c=e("es6-iterator/for-of"),l=e("es6-symbol").toStringTag,f=e("./is-native-implemented"),p=Array.isArray,d=Object.defineProperty,v=Object.prototype.hasOwnProperty,h=Object.getPrototypeOf,y
t.exports=y=function(){var e=arguments[0],t
if(!(this instanceof y))throw new TypeError("Constructor requires 'new'")
if(f&&n&&WeakMap!==y){t=n(new WeakMap,h(this))}else{t=this}if(e!=null){if(!p(e))e=s(e)}d(t,"__weakMapData__",u("c","$weakMap$"+a()))
if(!e)return t
c(e,function(e){o(e)
t.set(e[0],e[1])})
return t}
if(f){if(n)n(y,WeakMap)
y.prototype=Object.create(WeakMap.prototype,{constructor:u(y)})}Object.defineProperties(y.prototype,{"delete":u(function(e){if(v.call(i(e),this.__weakMapData__)){delete e[this.__weakMapData__]
return true}return false}),get:u(function(e){if(v.call(i(e),this.__weakMapData__)){return e[this.__weakMapData__]}}),has:u(function(e){return v.call(i(e),this.__weakMapData__)}),set:u(function(e,t){d(i(e),this.__weakMapData__,u("c",t))
return this}),toString:u(function(){return"[object WeakMap]"})})
d(y.prototype,l,u("c","WeakMap"))},{"./is-native-implemented":90,d:20,"es5-ext/object/set-prototype-of":54,"es5-ext/object/valid-object":58,"es5-ext/object/valid-value":59,"es5-ext/string/random-uniq":64,"es6-iterator/for-of":66,"es6-iterator/get":67,"es6-symbol":83}],92:[function(e,t,r){"use strict"
var n=e("d"),i=e("es5-ext/object/valid-callable"),o=Function.prototype.apply,a=Function.prototype.call,u=Object.create,s=Object.defineProperty,c=Object.defineProperties,l=Object.prototype.hasOwnProperty,f={configurable:true,enumerable:false,writable:true},p,d,v,h,y,m,b
p=function(e,t){var r
i(t)
if(!l.call(this,"__ee__")){r=f.value=u(null)
s(this,"__ee__",f)
f.value=null}else{r=this.__ee__}if(!r[e])r[e]=t
else if(typeof r[e]==="object")r[e].push(t)
else r[e]=[r[e],t]
return this}
d=function(e,t){var r,n
i(t)
n=this
p.call(this,e,r=function(){v.call(n,e,r)
o.call(t,this,arguments)})
r.__eeOnceListener__=t
return this}
v=function(e,t){var r,n,o,a
i(t)
if(!l.call(this,"__ee__"))return this
r=this.__ee__
if(!r[e])return this
n=r[e]
if(typeof n==="object"){for(a=0;o=n[a];++a){if(o===t||o.__eeOnceListener__===t){if(n.length===2)r[e]=n[a?0:1]
else n.splice(a,1)}}}else{if(n===t||n.__eeOnceListener__===t){delete r[e]}}return this}
h=function(e){var t,r,n,i,u
if(!l.call(this,"__ee__"))return
i=this.__ee__[e]
if(!i)return
if(typeof i==="object"){r=arguments.length
u=new Array(r-1)
for(t=1;t<r;++t)u[t-1]=arguments[t]
i=i.slice()
for(t=0;n=i[t];++t){o.call(n,this,u)}}else{switch(arguments.length){case 1:a.call(i,this)
break
case 2:a.call(i,this,arguments[1])
break
case 3:a.call(i,this,arguments[1],arguments[2])
break
default:r=arguments.length
u=new Array(r-1)
for(t=1;t<r;++t){u[t-1]=arguments[t]}o.call(i,this,u)}}}
y={on:p,once:d,off:v,emit:h}
m={on:n(p),once:n(d),off:n(v),emit:n(h)}
b=c({},m)
t.exports=r=function(e){return e==null?u(b):c(Object(e),m)}
r.methods=y},{d:20,"es5-ext/object/valid-callable":57}],93:[function(e,t,r){"use strict"
function n(e){return function(){return e}}var i=function o(){}
i.thatReturns=n
i.thatReturnsFalse=n(false)
i.thatReturnsTrue=n(true)
i.thatReturnsNull=n(null)
i.thatReturnsThis=function(){return this}
i.thatReturnsArgument=function(e){return e}
t.exports=i},{}],94:[function(e,t,r){(function(e){"use strict"
var r=function i(e){}
if(e.env.NODE_ENV!=="production"){r=function o(e){if(e===undefined){throw new Error("invariant requires an error message argument")}}}function n(e,t,n,i,o,a,u,s){r(t)
if(!e){var c
if(t===undefined){c=new Error("Minified exception occurred; use the non-minified dev environment "+"for the full error message and additional helpful warnings.")}else{var l=[n,i,o,a,u,s]
var f=0
c=new Error(t.replace(/%s/g,function(){return l[f++]}))
c.name="Invariant Violation"}c.framesToPop=1
throw c}}t.exports=n}).call(this,e("_process"))},{_process:164}],95:[function(e,t,r){"use strict"
var n=Object.prototype.hasOwnProperty
function i(e,t){if(e===t){return e!==0||t!==0||1/e===1/t}else{return e!==e&&t!==t}}function o(e,t){if(i(e,t)){return true}if(typeof e!=="object"||e===null||typeof t!=="object"||t===null){return false}var r=Object.keys(e)
var o=Object.keys(t)
if(r.length!==o.length){return false}for(var a=0;a<r.length;a++){if(!n.call(t,r[a])||!i(e[r[a]],t[r[a]])){return false}}return true}t.exports=o},{}],96:[function(e,t,r){(function(r){"use strict"
var n=e("./emptyFunction")
var i=n
if(r.env.NODE_ENV!=="production"){var o=function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++){r[n-1]=arguments[n]}var i=0
var o="Warning: "+e.replace(/%s/g,function(){return r[i++]})
if(typeof console!=="undefined"){console.error(o)}try{throw new Error(o)}catch(a){}}
i=function u(e,t){if(t===undefined){throw new Error("`warning(condition, format, ...args)` requires a warning "+"message argument")}if(t.indexOf("Failed Composite propType: ")===0){return}if(!e){for(var r=arguments.length,n=Array(r>2?r-2:0),i=2;i<r;i++){n[i-2]=arguments[i]}o.apply(undefined,[t].concat(n))}}}t.exports=i}).call(this,e("_process"))},{"./emptyFunction":93,_process:164}],97:[function(t,r,n){(function(t,i){typeof n==="object"&&typeof r!=="undefined"?i():typeof e==="function"&&e.amd?e(i):i()})(this,function(){"use strict"
var e=t("graphql/language/parser")
var n=e.parse
function i(e){return e.replace(/[\s,]+/g," ").trim()}var o={}
var a={}
function u(e){return i(e.source.body.substring(e.start,e.end))}function s(){o={}
a={}}var c=true
function l(e){var t={}
var r=[]
for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n]
if(i.kind==="FragmentDefinition"){var o=i.name.value
var s=u(i.loc)
if(a.hasOwnProperty(o)&&!a[o][s]){if(c){console.warn("Warning: fragment with name "+o+" already exists.\n"+"graphql-tag enforces all fragment names across your application to be unique; read more about\n"+"this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names")}a[o][s]=true}else if(!a.hasOwnProperty(o)){a[o]={}
a[o][s]=true}if(!t[s]){t[s]=true
r.push(i)}}else{r.push(i)}}e.definitions=r
return e}function f(){c=false}function p(e,t){var r=Object.prototype.toString.call(e)
if(r==="[object Array]"){return e.map(function(e){return p(e,t)})}if(r!=="[object Object]"){throw new Error("Unexpected input.")}if(t&&e.loc){delete e.loc}if(e.loc){delete e.loc.startToken
delete e.loc.endToken}var n=Object.keys(e)
var i
var o
var a
for(i in n){if(n.hasOwnProperty(i)){o=e[n[i]]
a=Object.prototype.toString.call(o)
if(a==="[object Object]"||a==="[object Array]"){e[n[i]]=p(o,true)}}}return e}function d(e){var t=i(e)
if(o[t]){return o[t]}var r=n(e)
if(!r||r.kind!=="Document"){throw new Error("Not a valid GraphQL document.")}r=l(r)
r=p(r,false)
o[t]=r
return r}function v(){var e=Array.prototype.slice.call(arguments)
var t=e[0]
var r=typeof t==="string"?t:t[0]
for(var n=1;n<e.length;n++){if(e[n]&&e[n].kind&&e[n].kind==="Document"){r+=e[n].loc.source.body}else{r+=e[n]}r+=t[n]}return d(r)}v.default=v
v.resetCaches=s
v.disableFragmentWarnings=f
r.exports=v})},{"graphql/language/parser":110}],98:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.GraphQLError=o
var n=e("./printError")
var i=e("../language/location")
function o(e,t,r,n,a,u,s){var c=Array.isArray(t)?t.length!==0?t:undefined:t?[t]:undefined
var l=r
if(!l&&c){var f=c[0]
l=f&&f.loc&&f.loc.source}var p=n
if(!p&&c){p=c.reduce(function(e,t){if(t.loc){e.push(t.loc.start)}return e},[])}if(p&&p.length===0){p=undefined}var d=void 0
if(n&&r){d=n.map(function(e){return(0,i.getLocation)(r,e)})}else if(c){d=c.reduce(function(e,t){if(t.loc){e.push((0,i.getLocation)(t.loc.source,t.loc.start))}return e},[])}Object.defineProperties(this,{message:{value:e,enumerable:true,writable:true},locations:{value:d||undefined,enumerable:true},path:{value:a||undefined,enumerable:true},nodes:{value:c||undefined},source:{value:l||undefined},positions:{value:p||undefined},originalError:{value:u},extensions:{value:s||u&&u.extensions}})
if(u&&u.stack){Object.defineProperty(this,"stack",{value:u.stack,writable:true,configurable:true})}else if(Error.captureStackTrace){Error.captureStackTrace(this,o)}else{Object.defineProperty(this,"stack",{value:Error().stack,writable:true,configurable:true})}}o.prototype=Object.create(Error.prototype,{constructor:{value:o},name:{value:"GraphQLError"},toString:{value:function a(){return(0,n.printError)(this)}}})},{"../language/location":109,"./printError":102}],99:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
r.formatError=u
var i=e("../jsutils/invariant")
var o=a(i)
function a(e){return e&&e.__esModule?e:{"default":e}}function u(e){!e?(0,o.default)(0,"Received null or undefined error."):void 0
return n({},e.extensions,{message:e.message||"An unknown error occurred.",locations:e.locations,path:e.path})}},{"../jsutils/invariant":104}],100:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=e("./GraphQLError")
Object.defineProperty(r,"GraphQLError",{enumerable:true,get:function s(){return n.GraphQLError}})
var i=e("./syntaxError")
Object.defineProperty(r,"syntaxError",{enumerable:true,get:function c(){return i.syntaxError}})
var o=e("./locatedError")
Object.defineProperty(r,"locatedError",{enumerable:true,get:function l(){return o.locatedError}})
var a=e("./printError")
Object.defineProperty(r,"printError",{enumerable:true,get:function f(){return a.printError}})
var u=e("./formatError")
Object.defineProperty(r,"formatError",{enumerable:true,get:function p(){return u.formatError}})},{"./GraphQLError":98,"./formatError":99,"./locatedError":101,"./printError":102,"./syntaxError":103}],101:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.locatedError=i
var n=e("./GraphQLError")
function i(e,t,r){if(e&&Array.isArray(e.path)){return e}return new n.GraphQLError(e&&e.message,e&&e.nodes||t,e&&e.source,e&&e.positions,r,e)}},{"./GraphQLError":98}],102:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.printError=i
var n=e("../language/location")
function i(e){var t=[]
if(e.nodes){e.nodes.forEach(function(e){if(e.loc){t.push(o(e.loc.source,(0,n.getLocation)(e.loc.source,e.loc.start)))}})}else if(e.source&&e.locations){var r=e.source
e.locations.forEach(function(e){t.push(o(r,e))})}return t.length===0?e.message:[e.message].concat(t).join("\n\n")+"\n"}function o(e,t){var r=t.line
var n=e.locationOffset.line-1
var i=a(e,t)
var o=r+n
var c=t.column+i
var l=(o-1).toString()
var f=o.toString()
var p=(o+1).toString()
var d=p.length
var v=e.body.split(/\r\n|[\n\r]/g)
v[0]=u(e.locationOffset.column-1)+v[0]
var h=[e.name+" ("+o+":"+c+")",r>=2&&s(d,l)+": "+v[r-2],s(d,f)+": "+v[r-1],u(2+d+c-1)+"^",r<v.length&&s(d,p)+": "+v[r]]
return h.filter(Boolean).join("\n")}function a(e,t){return t.line===1?e.locationOffset.column-1:0}function u(e){return Array(e+1).join(" ")}function s(e,t){return u(e-t.length)+t}},{"../language/location":109}],103:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.syntaxError=i
var n=e("./GraphQLError")
function i(e,t,r){return new n.GraphQLError("Syntax Error: "+r,undefined,e,[t])}},{"./GraphQLError":98}],104:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=n
function n(e,t){if(!e){throw new Error(t)}}},{}],105:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=n
function n(e){var t=e.split(/\r\n|[\n\r]/g)
var r=null
for(var n=1;n<t.length;n++){var a=t[n]
var u=i(a)
if(u<a.length&&(r===null||u<r)){r=u
if(r===0){break}}}if(r){for(var s=1;s<t.length;s++){t[s]=t[s].slice(r)}}while(t.length>0&&o(t[0])){t.shift()}while(t.length>0&&o(t[t.length-1])){t.pop()}return t.join("\n")}function i(e){var t=0
while(t<e.length&&(e[t]===" "||e[t]==="	")){t++}return t}function o(e){return i(e)===e.length}},{}],106:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=r.DirectiveLocation=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"})},{}],107:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=r.Kind=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",VARIABLE:"Variable",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension",DIRECTIVE_DEFINITION:"DirectiveDefinition"})},{}],108:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.TokenKind=undefined
r.createLexer=u
r.getTokenDesc=f
var n=e("../error")
var i=e("./blockStringValue")
var o=a(i)
function a(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var r=new v(l.SOF,0,0,0,0,null)
var n={source:e,options:t,lastToken:r,token:r,line:1,lineStart:0,advance:s,lookahead:c}
return n}function s(){this.lastToken=this.token
var e=this.token=this.lookahead()
return e}function c(){var e=this.token
if(e.kind!==l.EOF){do{e=e.next||(e.next=y(this,e))}while(e.kind===l.COMMENT)}return e}var l=r.TokenKind=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"})
function f(e){var t=e.value
return t?e.kind+' "'+t+'"':e.kind}var p=String.prototype.charCodeAt
var d=String.prototype.slice
function v(e,t,r,n,i,o,a){this.kind=e
this.start=t
this.end=r
this.line=n
this.column=i
this.value=a
this.prev=o
this.next=null}v.prototype.toJSON=v.prototype.inspect=function T(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}
function h(e){return isNaN(e)?l.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'+("00"+e.toString(16).toUpperCase()).slice(-4)+'"'}function y(e,t){var r=e.source
var i=r.body
var o=i.length
var a=b(i,t.end,e)
var u=e.line
var s=1+a-e.lineStart
if(a>=o){return new v(l.EOF,o,o,u,s,t)}var c=p.call(i,a)
if(c<32&&c!==9&&c!==10&&c!==13){throw(0,n.syntaxError)(r,a,"Cannot contain the invalid character "+h(c)+".")}switch(c){case 33:return new v(l.BANG,a,a+1,u,s,t)
case 35:return g(r,a,u,s,t)
case 36:return new v(l.DOLLAR,a,a+1,u,s,t)
case 38:return new v(l.AMP,a,a+1,u,s,t)
case 40:return new v(l.PAREN_L,a,a+1,u,s,t)
case 41:return new v(l.PAREN_R,a,a+1,u,s,t)
case 46:if(p.call(i,a+1)===46&&p.call(i,a+2)===46){return new v(l.SPREAD,a,a+3,u,s,t)}break
case 58:return new v(l.COLON,a,a+1,u,s,t)
case 61:return new v(l.EQUALS,a,a+1,u,s,t)
case 64:return new v(l.AT,a,a+1,u,s,t)
case 91:return new v(l.BRACKET_L,a,a+1,u,s,t)
case 93:return new v(l.BRACKET_R,a,a+1,u,s,t)
case 123:return new v(l.BRACE_L,a,a+1,u,s,t)
case 124:return new v(l.PIPE,a,a+1,u,s,t)
case 125:return new v(l.BRACE_R,a,a+1,u,s,t)
case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return j(r,a,u,s,t)
case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return _(r,a,c,u,s,t)
case 34:if(p.call(i,a+1)===34&&p.call(i,a+2)===34){return E(r,a,u,s,t)}return O(r,a,u,s,t)}throw(0,n.syntaxError)(r,a,m(c))}function m(e){if(e===39){return"Unexpected single quote character ('), did you mean to use "+'a double quote (")?'}return"Cannot parse the unexpected character "+h(e)+"."}function b(e,t,r){var n=e.length
var i=t
while(i<n){var o=p.call(e,i)
if(o===9||o===32||o===44||o===65279){++i}else if(o===10){++i;++r.line
r.lineStart=i}else if(o===13){if(p.call(e,i+1)===10){i+=2}else{++i}++r.line
r.lineStart=i}else{break}}return i}function g(e,t,r,n,i){var o=e.body
var a=void 0
var u=t
do{a=p.call(o,++u)}while(a!==null&&(a>31||a===9))
return new v(l.COMMENT,t,u,r,n,i,d.call(o,t+1,u))}function _(e,t,r,i,o,a){var u=e.body
var s=r
var c=t
var f=false
if(s===45){s=p.call(u,++c)}if(s===48){s=p.call(u,++c)
if(s>=48&&s<=57){throw(0,n.syntaxError)(e,c,"Invalid number, unexpected digit after 0: "+h(s)+".")}}else{c=w(e,c,s)
s=p.call(u,c)}if(s===46){f=true
s=p.call(u,++c)
c=w(e,c,s)
s=p.call(u,c)}if(s===69||s===101){f=true
s=p.call(u,++c)
if(s===43||s===45){s=p.call(u,++c)}c=w(e,c,s)}return new v(f?l.FLOAT:l.INT,t,c,i,o,a,d.call(u,t,c))}function w(e,t,r){var i=e.body
var o=t
var a=r
if(a>=48&&a<=57){do{a=p.call(i,++o)}while(a>=48&&a<=57)
return o}throw(0,n.syntaxError)(e,o,"Invalid number, expected digit but got: "+h(a)+".")}function O(e,t,r,i,o){var a=e.body
var u=t+1
var s=u
var c=0
var f=""
while(u<a.length&&(c=p.call(a,u))!==null&&c!==10&&c!==13){if(c===34){f+=d.call(a,s,u)
return new v(l.STRING,t,u+1,r,i,o,f)}if(c<32&&c!==9){throw(0,n.syntaxError)(e,u,"Invalid character within String: "+h(c)+".")}++u
if(c===92){f+=d.call(a,s,u-1)
c=p.call(a,u)
switch(c){case 34:f+='"'
break
case 47:f+="/"
break
case 92:f+="\\"
break
case 98:f+="\b"
break
case 102:f+="\f"
break
case 110:f+="\n"
break
case 114:f+="\r"
break
case 116:f+="	"
break
case 117:var y=k(p.call(a,u+1),p.call(a,u+2),p.call(a,u+3),p.call(a,u+4))
if(y<0){throw(0,n.syntaxError)(e,u,"Invalid character escape sequence: "+("\\u"+a.slice(u+1,u+5)+"."))}f+=String.fromCharCode(y)
u+=4
break
default:throw(0,n.syntaxError)(e,u,"Invalid character escape sequence: \\"+String.fromCharCode(c)+".")}++u
s=u}}throw(0,n.syntaxError)(e,u,"Unterminated string.")}function E(e,t,r,i,a){var u=e.body
var s=t+3
var c=s
var f=0
var y=""
while(s<u.length&&(f=p.call(u,s))!==null){if(f===34&&p.call(u,s+1)===34&&p.call(u,s+2)===34){y+=d.call(u,c,s)
return new v(l.BLOCK_STRING,t,s+3,r,i,a,(0,o.default)(y))}if(f<32&&f!==9&&f!==10&&f!==13){throw(0,n.syntaxError)(e,s,"Invalid character within String: "+h(f)+".")}if(f===92&&p.call(u,s+1)===34&&p.call(u,s+2)===34&&p.call(u,s+3)===34){y+=d.call(u,c,s)+'"""'
s+=4
c=s}else{++s}}throw(0,n.syntaxError)(e,s,"Unterminated string.")}function k(e,t,r,n){return x(e)<<12|x(t)<<8|x(r)<<4|x(n)}function x(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function j(e,t,r,n,i){var o=e.body
var a=o.length
var u=t+1
var s=0
while(u!==a&&(s=p.call(o,u))!==null&&(s===95||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122)){++u}return new v(l.NAME,t,u,r,n,i,d.call(o,t,u))}},{"../error":100,"./blockStringValue":105}],109:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.getLocation=n
function n(e,t){var r=/\r\n|[\n\r]/g
var n=1
var i=t+1
var o=void 0
while((o=r.exec(e.body))&&o.index<t){n+=1
i=t+1-(o.index+o[0].length)}return{line:n,column:i}}},{}],110:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.parse=s
r.parseValue=c
r.parseType=l
r.parseConstValue=N
r.parseTypeReference=Q
r.parseNamedType=L
var n=e("./source")
var i=e("../error")
var o=e("./lexer")
var a=e("./kinds")
var u=e("./directiveLocation")
function s(e,t){var r=typeof e==="string"?new n.Source(e):e
if(!(r instanceof n.Source)){throw new TypeError("Must provide Source. Received: "+String(r))}var i=(0,o.createLexer)(r,t||{})
return p(i)}function c(e,t){var r=typeof e==="string"?new n.Source(e):e
var i=(0,o.createLexer)(r,t||{})
wt(i,o.TokenKind.SOF)
var a=P(i,false)
wt(i,o.TokenKind.EOF)
return a}function l(e,t){var r=typeof e==="string"?new n.Source(e):e
var i=(0,o.createLexer)(r,t||{})
wt(i,o.TokenKind.SOF)
var a=Q(i)
wt(i,o.TokenKind.EOF)
return a}function f(e){var t=wt(e,o.TokenKind.NAME)
return{kind:a.Kind.NAME,value:t.value,loc:mt(e,t)}}function p(e){var t=e.token
wt(e,o.TokenKind.SOF)
var r=[]
do{r.push(d(e))}while(!_t(e,o.TokenKind.EOF))
return{kind:a.Kind.DOCUMENT,definitions:r,loc:mt(e,t)}}function d(e){if(gt(e,o.TokenKind.NAME)){switch(e.token.value){case"query":case"mutation":case"subscription":case"fragment":return v(e)
case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"extend":case"directive":return C(e)}}else if(gt(e,o.TokenKind.BRACE_L)){return v(e)}else if(V(e)){return C(e)}throw Et(e)}function v(e){if(gt(e,o.TokenKind.NAME)){switch(e.token.value){case"query":case"mutation":case"subscription":return h(e)
case"fragment":return T(e)}}else if(gt(e,o.TokenKind.BRACE_L)){return h(e)}throw Et(e)}function h(e){var t=e.token
if(gt(e,o.TokenKind.BRACE_L)){return{kind:a.Kind.OPERATION_DEFINITION,operation:"query",name:undefined,variableDefinitions:[],directives:[],selectionSet:_(e),loc:mt(e,t)}}var r=y(e)
var n=void 0
if(gt(e,o.TokenKind.NAME)){n=f(e)}return{kind:a.Kind.OPERATION_DEFINITION,operation:r,name:n,variableDefinitions:m(e),directives:A(e,false),selectionSet:_(e),loc:mt(e,t)}}function y(e){var t=wt(e,o.TokenKind.NAME)
switch(t.value){case"query":return"query"
case"mutation":return"mutation"
case"subscription":return"subscription"}throw Et(e,t)}function m(e){return gt(e,o.TokenKind.PAREN_L)?xt(e,o.TokenKind.PAREN_L,b,o.TokenKind.PAREN_R):[]}function b(e){var t=e.token
return{kind:a.Kind.VARIABLE_DEFINITION,variable:g(e),type:(wt(e,o.TokenKind.COLON),Q(e)),defaultValue:_t(e,o.TokenKind.EQUALS)?P(e,true):undefined,loc:mt(e,t)}}function g(e){var t=e.token
wt(e,o.TokenKind.DOLLAR)
return{kind:a.Kind.VARIABLE,name:f(e),loc:mt(e,t)}}function _(e){var t=e.token
return{kind:a.Kind.SELECTION_SET,selections:xt(e,o.TokenKind.BRACE_L,w,o.TokenKind.BRACE_R),loc:mt(e,t)}}function w(e){return gt(e,o.TokenKind.SPREAD)?j(e):O(e)}function O(e){var t=e.token
var r=f(e)
var n=void 0
var i=void 0
if(_t(e,o.TokenKind.COLON)){n=r
i=f(e)}else{i=r}return{kind:a.Kind.FIELD,alias:n,name:i,arguments:E(e,false),directives:A(e,false),selectionSet:gt(e,o.TokenKind.BRACE_L)?_(e):undefined,loc:mt(e,t)}}function E(e,t){var r=t?x:k
return gt(e,o.TokenKind.PAREN_L)?xt(e,o.TokenKind.PAREN_L,r,o.TokenKind.PAREN_R):[]}function k(e){var t=e.token
return{kind:a.Kind.ARGUMENT,name:f(e),value:(wt(e,o.TokenKind.COLON),P(e,false)),loc:mt(e,t)}}function x(e){var t=e.token
return{kind:a.Kind.ARGUMENT,name:f(e),value:(wt(e,o.TokenKind.COLON),N(e)),loc:mt(e,t)}}function j(e){var t=e.token
wt(e,o.TokenKind.SPREAD)
if(gt(e,o.TokenKind.NAME)&&e.token.value!=="on"){return{kind:a.Kind.FRAGMENT_SPREAD,name:S(e),directives:A(e,false),loc:mt(e,t)}}var r=void 0
if(e.token.value==="on"){e.advance()
r=L(e)}return{kind:a.Kind.INLINE_FRAGMENT,typeCondition:r,directives:A(e,false),selectionSet:_(e),loc:mt(e,t)}}function T(e){var t=e.token
Ot(e,"fragment")
if(e.options.experimentalFragmentVariables){return{kind:a.Kind.FRAGMENT_DEFINITION,name:S(e),variableDefinitions:m(e),typeCondition:(Ot(e,"on"),L(e)),directives:A(e,false),selectionSet:_(e),loc:mt(e,t)}}return{kind:a.Kind.FRAGMENT_DEFINITION,name:S(e),typeCondition:(Ot(e,"on"),L(e)),directives:A(e,false),selectionSet:_(e),loc:mt(e,t)}}function S(e){if(e.token.value==="on"){throw Et(e)}return f(e)}function P(e,t){var r=e.token
switch(r.kind){case o.TokenKind.BRACKET_L:return q(e,t)
case o.TokenKind.BRACE_L:return F(e,t)
case o.TokenKind.INT:e.advance()
return{kind:a.Kind.INT,value:r.value,loc:mt(e,r)}
case o.TokenKind.FLOAT:e.advance()
return{kind:a.Kind.FLOAT,value:r.value,loc:mt(e,r)}
case o.TokenKind.STRING:case o.TokenKind.BLOCK_STRING:return I(e)
case o.TokenKind.NAME:if(r.value==="true"||r.value==="false"){e.advance()
return{kind:a.Kind.BOOLEAN,value:r.value==="true",loc:mt(e,r)}}else if(r.value==="null"){e.advance()
return{kind:a.Kind.NULL,loc:mt(e,r)}}e.advance()
return{kind:a.Kind.ENUM,value:r.value,loc:mt(e,r)}
case o.TokenKind.DOLLAR:if(!t){return g(e)}break}throw Et(e)}function I(e){var t=e.token
e.advance()
return{kind:a.Kind.STRING,value:t.value,block:t.kind===o.TokenKind.BLOCK_STRING,loc:mt(e,t)}}function N(e){return P(e,true)}function D(e){return P(e,false)}function q(e,t){var r=e.token
var n=t?N:D
return{kind:a.Kind.LIST,values:kt(e,o.TokenKind.BRACKET_L,n,o.TokenKind.BRACKET_R),loc:mt(e,r)}}function F(e,t){var r=e.token
wt(e,o.TokenKind.BRACE_L)
var n=[]
while(!_t(e,o.TokenKind.BRACE_R)){n.push(R(e,t))}return{kind:a.Kind.OBJECT,fields:n,loc:mt(e,r)}}function R(e,t){var r=e.token
return{kind:a.Kind.OBJECT_FIELD,name:f(e),value:(wt(e,o.TokenKind.COLON),P(e,t)),loc:mt(e,r)}}function A(e,t){var r=[]
while(gt(e,o.TokenKind.AT)){r.push(M(e,t))}return r}function M(e,t){var r=e.token
wt(e,o.TokenKind.AT)
return{kind:a.Kind.DIRECTIVE,name:f(e),arguments:E(e,t),loc:mt(e,r)}}function Q(e){var t=e.token
var r=void 0
if(_t(e,o.TokenKind.BRACKET_L)){r=Q(e)
wt(e,o.TokenKind.BRACKET_R)
r={kind:a.Kind.LIST_TYPE,type:r,loc:mt(e,t)}}else{r=L(e)}if(_t(e,o.TokenKind.BANG)){return{kind:a.Kind.NON_NULL_TYPE,type:r,loc:mt(e,t)}}return r}function L(e){var t=e.token
return{kind:a.Kind.NAMED_TYPE,name:f(e),loc:mt(e,t)}}function C(e){var t=V(e)?e.lookahead():e.token
if(t.kind===o.TokenKind.NAME){switch(t.value){case"schema":return B(e)
case"scalar":return W(e)
case"type":return z(e)
case"interface":return Z(e)
case"union":return et(e)
case"enum":return rt(e)
case"input":return ot(e)
case"extend":return ut(e)
case"directive":return vt(e)}}throw Et(e,t)}function V(e){return gt(e,o.TokenKind.STRING)||gt(e,o.TokenKind.BLOCK_STRING)}function K(e){if(V(e)){return I(e)}}function B(e){var t=e.token
Ot(e,"schema")
var r=A(e,true)
var n=xt(e,o.TokenKind.BRACE_L,U,o.TokenKind.BRACE_R)
return{kind:a.Kind.SCHEMA_DEFINITION,directives:r,operationTypes:n,loc:mt(e,t)}}function U(e){var t=e.token
var r=y(e)
wt(e,o.TokenKind.COLON)
var n=L(e)
return{kind:a.Kind.OPERATION_TYPE_DEFINITION,operation:r,type:n,loc:mt(e,t)}}function W(e){var t=e.token
var r=K(e)
Ot(e,"scalar")
var n=f(e)
var i=A(e,true)
return{kind:a.Kind.SCALAR_TYPE_DEFINITION,description:r,name:n,directives:i,loc:mt(e,t)}}function z(e){var t=e.token
var r=K(e)
Ot(e,"type")
var n=f(e)
var i=G(e)
var o=A(e,true)
var u=Y(e)
return{kind:a.Kind.OBJECT_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:o,fields:u,loc:mt(e,t)}}function G(e){var t=[]
if(e.token.value==="implements"){e.advance()
_t(e,o.TokenKind.AMP)
do{t.push(L(e))}while(_t(e,o.TokenKind.AMP)||e.options.allowLegacySDLImplementsInterfaces&&gt(e,o.TokenKind.NAME))}return t}function Y(e){if(e.options.allowLegacySDLEmptyFields&&gt(e,o.TokenKind.BRACE_L)&&e.lookahead().kind===o.TokenKind.BRACE_R){e.advance()
e.advance()
return[]}return gt(e,o.TokenKind.BRACE_L)?xt(e,o.TokenKind.BRACE_L,J,o.TokenKind.BRACE_R):[]}function J(e){var t=e.token
var r=K(e)
var n=f(e)
var i=H(e)
wt(e,o.TokenKind.COLON)
var u=Q(e)
var s=A(e,true)
return{kind:a.Kind.FIELD_DEFINITION,description:r,name:n,arguments:i,type:u,directives:s,loc:mt(e,t)}}function H(e){if(!gt(e,o.TokenKind.PAREN_L)){return[]}return xt(e,o.TokenKind.PAREN_L,X,o.TokenKind.PAREN_R)}function X(e){var t=e.token
var r=K(e)
var n=f(e)
wt(e,o.TokenKind.COLON)
var i=Q(e)
var u=void 0
if(_t(e,o.TokenKind.EQUALS)){u=N(e)}var s=A(e,true)
return{kind:a.Kind.INPUT_VALUE_DEFINITION,description:r,name:n,type:i,defaultValue:u,directives:s,loc:mt(e,t)}}function Z(e){var t=e.token
var r=K(e)
Ot(e,"interface")
var n=f(e)
var i=A(e,true)
var o=Y(e)
return{kind:a.Kind.INTERFACE_TYPE_DEFINITION,description:r,name:n,directives:i,fields:o,loc:mt(e,t)}}function et(e){var t=e.token
var r=K(e)
Ot(e,"union")
var n=f(e)
var i=A(e,true)
var o=tt(e)
return{kind:a.Kind.UNION_TYPE_DEFINITION,description:r,name:n,directives:i,types:o,loc:mt(e,t)}}function tt(e){var t=[]
if(_t(e,o.TokenKind.EQUALS)){_t(e,o.TokenKind.PIPE)
do{t.push(L(e))}while(_t(e,o.TokenKind.PIPE))}return t}function rt(e){var t=e.token
var r=K(e)
Ot(e,"enum")
var n=f(e)
var i=A(e,true)
var o=nt(e)
return{kind:a.Kind.ENUM_TYPE_DEFINITION,description:r,name:n,directives:i,values:o,loc:mt(e,t)}}function nt(e){return gt(e,o.TokenKind.BRACE_L)?xt(e,o.TokenKind.BRACE_L,it,o.TokenKind.BRACE_R):[]}function it(e){var t=e.token
var r=K(e)
var n=f(e)
var i=A(e,true)
return{kind:a.Kind.ENUM_VALUE_DEFINITION,description:r,name:n,directives:i,loc:mt(e,t)}}function ot(e){var t=e.token
var r=K(e)
Ot(e,"input")
var n=f(e)
var i=A(e,true)
var o=at(e)
return{kind:a.Kind.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:n,directives:i,fields:o,loc:mt(e,t)}}function at(e){return gt(e,o.TokenKind.BRACE_L)?xt(e,o.TokenKind.BRACE_L,X,o.TokenKind.BRACE_R):[]}function ut(e){var t=e.lookahead()
if(t.kind===o.TokenKind.NAME){switch(t.value){case"scalar":return st(e)
case"type":return ct(e)
case"interface":return lt(e)
case"union":return ft(e)
case"enum":return pt(e)
case"input":return dt(e)}}throw Et(e,t)}function st(e){var t=e.token
Ot(e,"extend")
Ot(e,"scalar")
var r=f(e)
var n=A(e,true)
if(n.length===0){throw Et(e)}return{kind:a.Kind.SCALAR_TYPE_EXTENSION,name:r,directives:n,loc:mt(e,t)}}function ct(e){var t=e.token
Ot(e,"extend")
Ot(e,"type")
var r=f(e)
var n=G(e)
var i=A(e,true)
var o=Y(e)
if(n.length===0&&i.length===0&&o.length===0){throw Et(e)}return{kind:a.Kind.OBJECT_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:o,loc:mt(e,t)}}function lt(e){var t=e.token
Ot(e,"extend")
Ot(e,"interface")
var r=f(e)
var n=A(e,true)
var i=Y(e)
if(n.length===0&&i.length===0){throw Et(e)}return{kind:a.Kind.INTERFACE_TYPE_EXTENSION,name:r,directives:n,fields:i,loc:mt(e,t)}}function ft(e){var t=e.token
Ot(e,"extend")
Ot(e,"union")
var r=f(e)
var n=A(e,true)
var i=tt(e)
if(n.length===0&&i.length===0){throw Et(e)}return{kind:a.Kind.UNION_TYPE_EXTENSION,name:r,directives:n,types:i,loc:mt(e,t)}}function pt(e){var t=e.token
Ot(e,"extend")
Ot(e,"enum")
var r=f(e)
var n=A(e,true)
var i=nt(e)
if(n.length===0&&i.length===0){throw Et(e)}return{kind:a.Kind.ENUM_TYPE_EXTENSION,name:r,directives:n,values:i,loc:mt(e,t)}}function dt(e){var t=e.token
Ot(e,"extend")
Ot(e,"input")
var r=f(e)
var n=A(e,true)
var i=at(e)
if(n.length===0&&i.length===0){throw Et(e)}return{kind:a.Kind.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:n,fields:i,loc:mt(e,t)}}function vt(e){var t=e.token
var r=K(e)
Ot(e,"directive")
wt(e,o.TokenKind.AT)
var n=f(e)
var i=H(e)
Ot(e,"on")
var u=ht(e)
return{kind:a.Kind.DIRECTIVE_DEFINITION,description:r,name:n,arguments:i,locations:u,loc:mt(e,t)}}function ht(e){_t(e,o.TokenKind.PIPE)
var t=[]
do{t.push(yt(e))}while(_t(e,o.TokenKind.PIPE))
return t}function yt(e){var t=e.token
var r=f(e)
if(u.DirectiveLocation.hasOwnProperty(r.value)){return r}throw Et(e,t)}function mt(e,t){if(!e.options.noLocation){return new bt(t,e.lastToken,e.source)}}function bt(e,t,r){this.start=e.start
this.end=t.end
this.startToken=e
this.endToken=t
this.source=r}bt.prototype.toJSON=bt.prototype.inspect=function jt(){return{start:this.start,end:this.end}}
function gt(e,t){return e.token.kind===t}function _t(e,t){var r=e.token.kind===t
if(r){e.advance()}return r}function wt(e,t){var r=e.token
if(r.kind===t){e.advance()
return r}throw(0,i.syntaxError)(e.source,r.start,"Expected "+t+", found "+(0,o.getTokenDesc)(r))}function Ot(e,t){var r=e.token
if(r.kind===o.TokenKind.NAME&&r.value===t){e.advance()
return r}throw(0,i.syntaxError)(e.source,r.start,'Expected "'+t+'", found '+(0,o.getTokenDesc)(r))}function Et(e,t){var r=t||e.token
return(0,i.syntaxError)(e.source,r.start,"Unexpected "+(0,o.getTokenDesc)(r))}function kt(e,t,r,n){wt(e,t)
var i=[]
while(!_t(e,n)){i.push(r(e))}return i}function xt(e,t,r,n){wt(e,t)
var i=[r(e)]
while(!_t(e,n)){i.push(r(e))}return i}},{"../error":100,"./directiveLocation":106,"./kinds":107,"./lexer":108,"./source":112}],111:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.print=i
var n=e("./visitor")
function i(e){return(0,n.visit)(e,{leave:o})}var o={Name:function p(e){return e.value},Variable:function d(e){return"$"+e.name},Document:function v(e){return u(e.definitions,"\n\n")+"\n"},OperationDefinition:function h(e){var t=e.operation
var r=e.name
var n=c("(",u(e.variableDefinitions,", "),")")
var i=u(e.directives," ")
var o=e.selectionSet
return!r&&!i&&!n&&t==="query"?o:u([t,u([r,n]),i,o]," ")},VariableDefinition:function y(e){var t=e.variable,r=e.type,n=e.defaultValue
return t+": "+r+c(" = ",n)},SelectionSet:function m(e){var t=e.selections
return s(t)},Field:function b(e){var t=e.alias,r=e.name,n=e.arguments,i=e.directives,o=e.selectionSet
return u([c("",t,": ")+r+c("(",u(n,", "),")"),u(i," "),o]," ")},Argument:function g(e){var t=e.name,r=e.value
return t+": "+r},FragmentSpread:function _(e){var t=e.name,r=e.directives
return"..."+t+c(" ",u(r," "))},InlineFragment:function w(e){var t=e.typeCondition,r=e.directives,n=e.selectionSet
return u(["...",c("on ",t),u(r," "),n]," ")},FragmentDefinition:function O(e){var t=e.name,r=e.typeCondition,n=e.variableDefinitions,i=e.directives,o=e.selectionSet
return"fragment "+t+c("(",u(n,", "),")")+" "+("on "+r+" "+c("",u(i," ")," "))+o},IntValue:function E(e){var t=e.value
return t},FloatValue:function k(e){var t=e.value
return t},StringValue:function x(e,t){var r=e.value,n=e.block
return n?f(r,t==="description"):JSON.stringify(r)},BooleanValue:function j(e){var t=e.value
return t?"true":"false"},NullValue:function T(){return"null"},EnumValue:function S(e){var t=e.value
return t},ListValue:function P(e){var t=e.values
return"["+u(t,", ")+"]"},ObjectValue:function I(e){var t=e.fields
return"{"+u(t,", ")+"}"},ObjectField:function N(e){var t=e.name,r=e.value
return t+": "+r},Directive:function D(e){var t=e.name,r=e.arguments
return"@"+t+c("(",u(r,", "),")")},NamedType:function q(e){var t=e.name
return t},ListType:function F(e){var t=e.type
return"["+t+"]"},NonNullType:function R(e){var t=e.type
return t+"!"},SchemaDefinition:function A(e){var t=e.directives,r=e.operationTypes
return u(["schema",u(t," "),s(r)]," ")},OperationTypeDefinition:function M(e){var t=e.operation,r=e.type
return t+": "+r},ScalarTypeDefinition:a(function(e){var t=e.name,r=e.directives
return u(["scalar",t,u(r," ")]," ")}),ObjectTypeDefinition:a(function(e){var t=e.name,r=e.interfaces,n=e.directives,i=e.fields
return u(["type",t,c("implements ",u(r," & ")),u(n," "),s(i)]," ")}),FieldDefinition:a(function(e){var t=e.name,r=e.arguments,n=e.type,i=e.directives
return t+c("(",u(r,", "),")")+": "+n+c(" ",u(i," "))}),InputValueDefinition:a(function(e){var t=e.name,r=e.type,n=e.defaultValue,i=e.directives
return u([t+": "+r,c("= ",n),u(i," ")]," ")}),InterfaceTypeDefinition:a(function(e){var t=e.name,r=e.directives,n=e.fields
return u(["interface",t,u(r," "),s(n)]," ")}),UnionTypeDefinition:a(function(e){var t=e.name,r=e.directives,n=e.types
return u(["union",t,u(r," "),n&&n.length!==0?"= "+u(n," | "):""]," ")}),EnumTypeDefinition:a(function(e){var t=e.name,r=e.directives,n=e.values
return u(["enum",t,u(r," "),s(n)]," ")}),EnumValueDefinition:a(function(e){var t=e.name,r=e.directives
return u([t,u(r," ")]," ")}),InputObjectTypeDefinition:a(function(e){var t=e.name,r=e.directives,n=e.fields
return u(["input",t,u(r," "),s(n)]," ")}),ScalarTypeExtension:function Q(e){var t=e.name,r=e.directives
return u(["extend scalar",t,u(r," ")]," ")},ObjectTypeExtension:function L(e){var t=e.name,r=e.interfaces,n=e.directives,i=e.fields
return u(["extend type",t,c("implements ",u(r," & ")),u(n," "),s(i)]," ")},InterfaceTypeExtension:function C(e){var t=e.name,r=e.directives,n=e.fields
return u(["extend interface",t,u(r," "),s(n)]," ")},UnionTypeExtension:function V(e){var t=e.name,r=e.directives,n=e.types
return u(["extend union",t,u(r," "),n&&n.length!==0?"= "+u(n," | "):""]," ")},EnumTypeExtension:function K(e){var t=e.name,r=e.directives,n=e.values
return u(["extend enum",t,u(r," "),s(n)]," ")},InputObjectTypeExtension:function B(e){var t=e.name,r=e.directives,n=e.fields
return u(["extend input",t,u(r," "),s(n)]," ")},DirectiveDefinition:a(function(e){var t=e.name,r=e.arguments,n=e.locations
return"directive @"+t+c("(",u(r,", "),")")+" on "+u(n," | ")})}
function a(e){return function(t){return u([t.description,e(t)],"\n")}}function u(e,t){return e?e.filter(function(e){return e}).join(t||""):""}function s(e){return e&&e.length!==0?"{\n"+l(u(e,"\n"))+"\n}":""}function c(e,t,r){return t?e+t+(r||""):""}function l(e){return e&&"  "+e.replace(/\n/g,"\n  ")}function f(e,t){var r=e.replace(/"""/g,'\\"""')
return(e[0]===" "||e[0]==="	")&&e.indexOf("\n")===-1?'"""'+r.replace(/"$/,'"\n')+'"""':'"""\n'+(t?r:l(r))+'\n"""'}},{"./visitor":113}],112:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.Source=undefined
var n=e("../jsutils/invariant")
var i=o(n)
function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var u=r.Source=function s(e,t,r){a(this,s)
this.body=e
this.name=t||"GraphQL request"
this.locationOffset=r||{line:1,column:1}
!(this.locationOffset.line>0)?(0,i.default)(0,"line in locationOffset is 1-indexed and must be positive"):void 0
!(this.locationOffset.column>0)?(0,i.default)(0,"column in locationOffset is 1-indexed and must be positive"):void 0}},{"../jsutils/invariant":104}],113:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.visit=o
r.visitInParallel=u
r.visitWithTypeInfo=s
r.getVisitFn=c
var n=r.QueryDocumentKeys={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"]}
var i=r.BREAK={}
function o(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:n
var o=undefined
var u=Array.isArray(e)
var s=[e]
var l=-1
var f=[]
var p=undefined
var d=undefined
var v=undefined
var h=[]
var y=[]
var m=e
do{l++
var b=l===s.length
var g=b&&f.length!==0
if(b){d=y.length===0?undefined:h[h.length-1]
p=v
v=y.pop()
if(g){if(u){p=p.slice()}else{var _={}
for(var w in p){if(p.hasOwnProperty(w)){_[w]=p[w]}}p=_}var O=0
for(var E=0;E<f.length;E++){var k=f[E][0]
var x=f[E][1]
if(u){k-=O}if(u&&x===null){p.splice(k,1)
O++}else{p[k]=x}}}l=o.index
s=o.keys
f=o.edits
u=o.inArray
o=o.prev}else{d=v?u?l:s[l]:undefined
p=v?v[d]:m
if(p===null||p===undefined){continue}if(v){h.push(d)}}var j=void 0
if(!Array.isArray(p)){if(!a(p)){throw new Error("Invalid AST Node: "+JSON.stringify(p))}var T=c(t,p.kind,b)
if(T){j=T.call(t,p,d,v,h,y)
if(j===i){break}if(j===false){if(!b){h.pop()
continue}}else if(j!==undefined){f.push([d,j])
if(!b){if(a(j)){p=j}else{h.pop()
continue}}}}}if(j===undefined&&g){f.push([d,p])}if(b){h.pop()}else{o={inArray:u,index:l,keys:s,edits:f,prev:o}
u=Array.isArray(p)
s=u?p:r[p.kind]||[]
l=-1
f=[]
if(v){y.push(v)}v=p}}while(o!==undefined)
if(f.length!==0){m=f[f.length-1][1]}return m}function a(e){return Boolean(e&&typeof e.kind==="string")}function u(e){var t=new Array(e.length)
return{enter:function r(n){for(var o=0;o<e.length;o++){if(!t[o]){var a=c(e[o],n.kind,false)
if(a){var u=a.apply(e[o],arguments)
if(u===false){t[o]=n}else if(u===i){t[o]=i}else if(u!==undefined){return u}}}}},leave:function n(r){for(var n=0;n<e.length;n++){if(!t[n]){var o=c(e[n],r.kind,true)
if(o){var a=o.apply(e[n],arguments)
if(a===i){t[n]=i}else if(a!==undefined&&a!==false){return a}}}else if(t[n]===r){t[n]=null}}}}}function s(e,t){return{enter:function r(n){e.enter(n)
var i=c(t,n.kind,false)
if(i){var o=i.apply(t,arguments)
if(o!==undefined){e.leave(n)
if(a(o)){e.enter(o)}}return o}},leave:function n(r){var n=c(t,r.kind,true)
var i=void 0
if(n){i=n.apply(t,arguments)}e.leave(r)
return i}}}function c(e,t,r){var n=e[t]
if(n){if(!r&&typeof n==="function"){return n}var i=r?n.leave:n.enter
if(typeof i==="function"){return i}}else{var o=r?e.leave:e.enter
if(o){if(typeof o==="function"){return o}var a=o[t]
if(typeof a==="function"){return a}}}}},{}],114:[function(e,t,r){"use strict"
var n={childContextTypes:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,mixins:true,propTypes:true,type:true}
var i={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true}
var o=Object.defineProperty
var a=Object.getOwnPropertyNames
var u=Object.getOwnPropertySymbols
var s=Object.getOwnPropertyDescriptor
var c=Object.getPrototypeOf
var l=c&&c(Object)
t.exports=function f(e,t,r){if(typeof t!=="string"){if(l){var p=c(t)
if(p&&p!==l){f(e,p,r)}}var d=a(t)
if(u){d=d.concat(u(t))}for(var v=0;v<d.length;++v){var h=d[v]
if(!n[h]&&!i[h]&&(!r||!r[h])){var y=s(t,h)
try{o(e,h,y)}catch(m){}}}return e}return e}},{}],115:[function(e,t,r){(function(e){"use strict"
var r=function(t,r,n,i,o,a,u,s){if(e.env.NODE_ENV!=="production"){if(r===undefined){throw new Error("invariant requires an error message argument")}}if(!t){var c
if(r===undefined){c=new Error("Minified exception occurred; use the non-minified dev environment "+"for the full error message and additional helpful warnings.")}else{var l=[n,i,o,a,u,s]
var f=0
c=new Error(r.replace(/%s/g,function(){return l[f++]}))
c.name="Invariant Violation"}c.framesToPop=1
throw c}}
t.exports=r}).call(this,e("_process"))},{_process:164}],116:[function(e,t,r){var n=e("./_baseCreate"),i=e("./_baseLodash")
var o=4294967295
function a(e){this.__wrapped__=e
this.__actions__=[]
this.__dir__=1
this.__filtered__=false
this.__iteratees__=[]
this.__takeCount__=o
this.__views__=[]}a.prototype=n(i.prototype)
a.prototype.constructor=a
t.exports=a},{"./_baseCreate":122,"./_baseLodash":127}],117:[function(e,t,r){var n=e("./_baseCreate"),i=e("./_baseLodash")
function o(e,t){this.__wrapped__=e
this.__actions__=[]
this.__chain__=!!t
this.__index__=0
this.__values__=undefined}o.prototype=n(i.prototype)
o.prototype.constructor=o
t.exports=o},{"./_baseCreate":122,"./_baseLodash":127}],118:[function(e,t,r){var n=e("./_root")
var i=n.Symbol
t.exports=i},{"./_root":147}],119:[function(e,t,r){var n=e("./_getNative"),i=e("./_root")
var o=n(i,"WeakMap")
t.exports=o},{"./_getNative":137,"./_root":147}],120:[function(e,t,r){function n(e,t,r){switch(r.length){case 0:return e.call(t)
case 1:return e.call(t,r[0])
case 2:return e.call(t,r[0],r[1])
case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}t.exports=n},{}],121:[function(e,t,r){function n(e,t){var r=-1,n=t.length,i=e.length
while(++r<n){e[i+r]=t[r]}return e}t.exports=n},{}],122:[function(e,t,r){var n=e("./isObject")
var i=Object.create
var o=function(){function e(){}return function(t){if(!n(t)){return{}}if(i){return i(t)}e.prototype=t
var r=new e
e.prototype=undefined
return r}}()
t.exports=o},{"./isObject":159}],123:[function(e,t,r){var n=e("./_arrayPush"),i=e("./_isFlattenable")
function o(e,t,r,a,u){var s=-1,c=e.length
r||(r=i)
u||(u=[])
while(++s<c){var l=e[s]
if(t>0&&r(l)){if(t>1){o(l,t-1,r,a,u)}else{n(u,l)}}else if(!a){u[u.length]=l}}return u}t.exports=o},{"./_arrayPush":121,"./_isFlattenable":140}],124:[function(e,t,r){var n=e("./_Symbol"),i=e("./_getRawTag"),o=e("./_objectToString")
var a="[object Null]",u="[object Undefined]"
var s=n?n.toStringTag:undefined
function c(e){if(e==null){return e===undefined?u:a}return s&&s in Object(e)?i(e):o(e)}t.exports=c},{"./_Symbol":118,"./_getRawTag":138,"./_objectToString":144}],125:[function(e,t,r){var n=e("./_baseGetTag"),i=e("./isObjectLike")
var o="[object Arguments]"
function a(e){return i(e)&&n(e)==o}t.exports=a},{"./_baseGetTag":124,"./isObjectLike":160}],126:[function(e,t,r){var n=e("./isFunction"),i=e("./_isMasked"),o=e("./isObject"),a=e("./_toSource")
var u=/[\\^$.*+?()[\]{}|]/g
var s=/^\[object .+?Constructor\]$/
var c=Function.prototype,l=Object.prototype
var f=c.toString
var p=l.hasOwnProperty
var d=RegExp("^"+f.call(p).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
function v(e){if(!o(e)||i(e)){return false}var t=n(e)?d:s
return t.test(a(e))}t.exports=v},{"./_isMasked":142,"./_toSource":150,"./isFunction":158,"./isObject":159}],127:[function(e,t,r){function n(){}t.exports=n},{}],128:[function(e,t,r){var n=e("./constant"),i=e("./_defineProperty"),o=e("./identity")
var a=!i?o:function(e,t){return i(e,"toString",{configurable:true,enumerable:false,value:n(t),writable:true})}
t.exports=a},{"./_defineProperty":132,"./constant":152,"./identity":155}],129:[function(e,t,r){function n(e,t){var r=-1,n=e.length
t||(t=Array(n))
while(++r<n){t[r]=e[r]}return t}t.exports=n},{}],130:[function(e,t,r){var n=e("./_root")
var i=n["__core-js_shared__"]
t.exports=i},{"./_root":147}],131:[function(e,t,r){var n=e("./_LodashWrapper"),i=e("./_flatRest"),o=e("./_getData"),a=e("./_getFuncName"),u=e("./isArray"),s=e("./_isLaziable")
var c="Expected a function"
var l=8,f=32,p=128,d=256
function v(e){return i(function(t){var r=t.length,i=r,v=n.prototype.thru
if(e){t.reverse()}while(i--){var h=t[i]
if(typeof h!="function"){throw new TypeError(c)}if(v&&!y&&a(h)=="wrapper"){var y=new n([],true)}}i=y?i:r
while(++i<r){h=t[i]
var m=a(h),b=m=="wrapper"?o(h):undefined
if(b&&s(b[0])&&b[1]==(p|l|f|d)&&!b[4].length&&b[9]==1){y=y[a(b[0])].apply(y,b[3])}else{y=h.length==1&&s(h)?y[m]():y.thru(h)}}return function(){var e=arguments,n=e[0]
if(y&&e.length==1&&u(n)){return y.plant(n).value()}var i=0,o=r?t[i].apply(this,e):n
while(++i<r){o=t[i].call(this,o)}return o}})}t.exports=v},{"./_LodashWrapper":117,"./_flatRest":133,"./_getData":135,"./_getFuncName":136,"./_isLaziable":141,"./isArray":157}],132:[function(e,t,r){var n=e("./_getNative")
var i=function(){try{var e=n(Object,"defineProperty")
e({},"",{})
return e}catch(t){}}()
t.exports=i},{"./_getNative":137}],133:[function(e,t,r){var n=e("./flatten"),i=e("./_overRest"),o=e("./_setToString")
function a(e){return o(i(e,undefined,n),e+"")}t.exports=a},{"./_overRest":145,"./_setToString":148,"./flatten":153}],134:[function(e,t,r){(function(e){var r=typeof e=="object"&&e&&e.Object===Object&&e
t.exports=r}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],135:[function(e,t,r){var n=e("./_metaMap"),i=e("./noop")
var o=!n?i:function(e){return n.get(e)}
t.exports=o},{"./_metaMap":143,"./noop":161}],136:[function(e,t,r){var n=e("./_realNames")
var i=Object.prototype
var o=i.hasOwnProperty
function a(e){var t=e.name+"",r=n[t],i=o.call(n,t)?r.length:0
while(i--){var a=r[i],u=a.func
if(u==null||u==e){return a.name}}return t}t.exports=a},{"./_realNames":146}],137:[function(e,t,r){var n=e("./_baseIsNative"),i=e("./_getValue")
function o(e,t){var r=i(e,t)
return n(r)?r:undefined}t.exports=o},{"./_baseIsNative":126,"./_getValue":139}],138:[function(e,t,r){var n=e("./_Symbol")
var i=Object.prototype
var o=i.hasOwnProperty
var a=i.toString
var u=n?n.toStringTag:undefined
function s(e){var t=o.call(e,u),r=e[u]
try{e[u]=undefined
var n=true}catch(i){}var s=a.call(e)
if(n){if(t){e[u]=r}else{delete e[u]}}return s}t.exports=s},{"./_Symbol":118}],139:[function(e,t,r){function n(e,t){return e==null?undefined:e[t]}t.exports=n},{}],140:[function(e,t,r){var n=e("./_Symbol"),i=e("./isArguments"),o=e("./isArray")
var a=n?n.isConcatSpreadable:undefined
function u(e){return o(e)||i(e)||!!(a&&e&&e[a])}t.exports=u},{"./_Symbol":118,"./isArguments":156,"./isArray":157}],141:[function(e,t,r){var n=e("./_LazyWrapper"),i=e("./_getData"),o=e("./_getFuncName"),a=e("./wrapperLodash")
function u(e){var t=o(e),r=a[t]
if(typeof r!="function"||!(t in n.prototype)){return false}if(e===r){return true}var u=i(r)
return!!u&&e===u[0]}t.exports=u},{"./_LazyWrapper":116,"./_getData":135,"./_getFuncName":136,"./wrapperLodash":162}],142:[function(e,t,r){var n=e("./_coreJsData")
var i=function(){var e=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"")
return e?"Symbol(src)_1."+e:""}()
function o(e){return!!i&&i in e}t.exports=o},{"./_coreJsData":130}],143:[function(e,t,r){var n=e("./_WeakMap")
var i=n&&new n
t.exports=i},{"./_WeakMap":119}],144:[function(e,t,r){var n=Object.prototype
var i=n.toString
function o(e){return i.call(e)}t.exports=o},{}],145:[function(e,t,r){var n=e("./_apply")
var i=Math.max
function o(e,t,r){t=i(t===undefined?e.length-1:t,0)
return function(){var o=arguments,a=-1,u=i(o.length-t,0),s=Array(u)
while(++a<u){s[a]=o[t+a]}a=-1
var c=Array(t+1)
while(++a<t){c[a]=o[a]}c[t]=r(s)
return n(e,this,c)}}t.exports=o},{"./_apply":120}],146:[function(e,t,r){var n={}
t.exports=n},{}],147:[function(e,t,r){var n=e("./_freeGlobal")
var i=typeof self=="object"&&self&&self.Object===Object&&self
var o=n||i||Function("return this")()
t.exports=o},{"./_freeGlobal":134}],148:[function(e,t,r){var n=e("./_baseSetToString"),i=e("./_shortOut")
var o=i(n)
t.exports=o},{"./_baseSetToString":128,"./_shortOut":149}],149:[function(e,t,r){var n=800,i=16
var o=Date.now
function a(e){var t=0,r=0
return function(){var a=o(),u=i-(a-r)
r=a
if(u>0){if(++t>=n){return arguments[0]}}else{t=0}return e.apply(undefined,arguments)}}t.exports=a},{}],150:[function(e,t,r){var n=Function.prototype
var i=n.toString
function o(e){if(e!=null){try{return i.call(e)}catch(t){}try{return e+""}catch(t){}}return""}t.exports=o},{}],151:[function(e,t,r){var n=e("./_LazyWrapper"),i=e("./_LodashWrapper"),o=e("./_copyArray")
function a(e){if(e instanceof n){return e.clone()}var t=new i(e.__wrapped__,e.__chain__)
t.__actions__=o(e.__actions__)
t.__index__=e.__index__
t.__values__=e.__values__
return t}t.exports=a},{"./_LazyWrapper":116,"./_LodashWrapper":117,"./_copyArray":129}],152:[function(e,t,r){function n(e){return function(){return e}}t.exports=n},{}],153:[function(e,t,r){var n=e("./_baseFlatten")
function i(e){var t=e==null?0:e.length
return t?n(e,1):[]}t.exports=i},{"./_baseFlatten":123}],154:[function(e,t,r){var n=e("./_createFlow")
var i=n(true)
t.exports=i},{"./_createFlow":131}],155:[function(e,t,r){function n(e){return e}t.exports=n},{}],156:[function(e,t,r){var n=e("./_baseIsArguments"),i=e("./isObjectLike")
var o=Object.prototype
var a=o.hasOwnProperty
var u=o.propertyIsEnumerable
var s=n(function(){return arguments}())?n:function(e){return i(e)&&a.call(e,"callee")&&!u.call(e,"callee")}
t.exports=s},{"./_baseIsArguments":125,"./isObjectLike":160}],157:[function(e,t,r){var n=Array.isArray
t.exports=n},{}],158:[function(e,t,r){var n=e("./_baseGetTag"),i=e("./isObject")
var o="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",s="[object Proxy]"
function c(e){if(!i(e)){return false}var t=n(e)
return t==a||t==u||t==o||t==s}t.exports=c},{"./_baseGetTag":124,"./isObject":159}],159:[function(e,t,r){function n(e){var t=typeof e
return e!=null&&(t=="object"||t=="function")}t.exports=n},{}],160:[function(e,t,r){function n(e){return e!=null&&typeof e=="object"}t.exports=n},{}],161:[function(e,t,r){function n(){}t.exports=n},{}],162:[function(e,t,r){var n=e("./_LazyWrapper"),i=e("./_LodashWrapper"),o=e("./_baseLodash"),a=e("./isArray"),u=e("./isObjectLike"),s=e("./_wrapperClone")
var c=Object.prototype
var l=c.hasOwnProperty
function f(e){if(u(e)&&!a(e)&&!(e instanceof n)){if(e instanceof i){return e}if(l.call(e,"__wrapped__")){return s(e)}}return new i(e)}f.prototype=o.prototype
f.prototype.constructor=f
t.exports=f},{"./_LazyWrapper":116,"./_LodashWrapper":117,"./_baseLodash":127,"./_wrapperClone":151,"./isArray":157,"./isObjectLike":160}],163:[function(e,t,r){"use strict"
var n=Object.getOwnPropertySymbols
var i=Object.prototype.hasOwnProperty
var o=Object.prototype.propertyIsEnumerable
function a(e){if(e===null||e===undefined){throw new TypeError("Object.assign cannot be called with null or undefined")}return Object(e)}function u(){try{if(!Object.assign){return false}var e=new String("abc")
e[5]="de"
if(Object.getOwnPropertyNames(e)[0]==="5"){return false}var t={}
for(var r=0;r<10;r++){t["_"+String.fromCharCode(r)]=r}var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]})
if(n.join("")!=="0123456789"){return false}var i={}
"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e})
if(Object.keys(Object.assign({},i)).join("")!=="abcdefghijklmnopqrst"){return false}return true}catch(o){return false}}t.exports=u()?Object.assign:function(e,t){var r
var u=a(e)
var s
for(var c=1;c<arguments.length;c++){r=Object(arguments[c])
for(var l in r){if(i.call(r,l)){u[l]=r[l]}}if(n){s=n(r)
for(var f=0;f<s.length;f++){if(o.call(r,s[f])){u[s[f]]=r[s[f]]}}}}return u}},{}],164:[function(e,t,r){var n=t.exports={}
var i
var o
function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){i=setTimeout}else{i=a}}catch(e){i=a}try{if(typeof clearTimeout==="function"){o=clearTimeout}else{o=u}}catch(e){o=u}})()
function s(e){if(i===setTimeout){return setTimeout(e,0)}if((i===a||!i)&&setTimeout){i=setTimeout
return setTimeout(e,0)}try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}function c(e){if(o===clearTimeout){return clearTimeout(e)}if((o===u||!o)&&clearTimeout){o=clearTimeout
return clearTimeout(e)}try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}var l=[]
var f=false
var p
var d=-1
function v(){if(!f||!p){return}f=false
if(p.length){l=p.concat(l)}else{d=-1}if(l.length){h()}}function h(){if(f){return}var e=s(v)
f=true
var t=l.length
while(t){p=l
l=[]
while(++d<t){if(p){p[d].run()}}d=-1
t=l.length}p=null
f=false
c(e)}n.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}l.push(new y(e,t))
if(l.length===1&&!f){s(h)}}
function y(e,t){this.fun=e
this.array=t}y.prototype.run=function(){this.fun.apply(null,this.array)}
n.title="browser"
n.browser=true
n.env={}
n.argv=[]
n.version=""
n.versions={}
function m(){}n.on=m
n.addListener=m
n.once=m
n.off=m
n.removeListener=m
n.removeAllListeners=m
n.emit=m
n.prependListener=m
n.prependOnceListener=m
n.listeners=function(e){return[]}
n.binding=function(e){throw new Error("process.binding is not supported")}
n.cwd=function(){return"/"}
n.chdir=function(e){throw new Error("process.chdir is not supported")}
n.umask=function(){return 0}},{}],165:[function(e,t,r){(function(r){"use strict"
if(r.env.NODE_ENV!=="production"){var n=e("fbjs/lib/invariant")
var i=e("fbjs/lib/warning")
var o=e("./lib/ReactPropTypesSecret")
var a={}}function u(e,t,u,s,c){if(r.env.NODE_ENV!=="production"){for(var l in e){if(e.hasOwnProperty(l)){var f
try{n(typeof e[l]==="function","%s: %s type `%s` is invalid; it must be a function, usually from "+"the `prop-types` package, but received `%s`.",s||"React class",u,l,typeof e[l])
f=e[l](t,l,s,u,null,o)}catch(p){f=p}i(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker "+"function must return `null` or an `Error` but returned a %s. "+"You may have forgotten to pass an argument to the type checker "+"creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and "+"shape all require an argument).",s||"React class",u,l,typeof f)
if(f instanceof Error&&!(f.message in a)){a[f.message]=true
var d=c?c():""
i(false,"Failed %s type: %s%s",u,f.message,d!=null?d:"")}}}}}t.exports=u}).call(this,e("_process"))},{"./lib/ReactPropTypesSecret":169,_process:164,"fbjs/lib/invariant":94,"fbjs/lib/warning":96}],166:[function(e,t,r){"use strict"
var n=e("fbjs/lib/emptyFunction")
var i=e("fbjs/lib/invariant")
var o=e("./lib/ReactPropTypesSecret")
t.exports=function(){function e(e,t,r,n,a,u){if(u===o){return}i(false,"Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types")}e.isRequired=e
function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t}
r.checkPropTypes=n
r.PropTypes=r
return r}},{"./lib/ReactPropTypesSecret":169,"fbjs/lib/emptyFunction":93,"fbjs/lib/invariant":94}],167:[function(e,t,r){(function(r){"use strict"
var n=e("fbjs/lib/emptyFunction")
var i=e("fbjs/lib/invariant")
var o=e("fbjs/lib/warning")
var a=e("object-assign")
var u=e("./lib/ReactPropTypesSecret")
var s=e("./checkPropTypes")
t.exports=function(e,t){var c=typeof Symbol==="function"&&Symbol.iterator
var l="@@iterator"
function f(e){var t=e&&(c&&e[c]||e[l])
if(typeof t==="function"){return t}}var p="<<anonymous>>"
var d={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:b(),arrayOf:g,element:_(),instanceOf:w,node:x(),objectOf:E,oneOf:O,oneOfType:k,shape:j,exact:T}
function v(e,t){if(e===t){return e!==0||1/e===1/t}else{return e!==e&&t!==t}}function h(e){this.message=e
this.stack=""}h.prototype=Error.prototype
function y(e){if(r.env.NODE_ENV!=="production"){var n={}
var a=0}function s(s,c,l,f,d,v,y){f=f||p
v=v||l
if(y!==u){if(t){i(false,"Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use `PropTypes.checkPropTypes()` to call them. "+"Read more at http://fb.me/use-check-prop-types")}else if(r.env.NODE_ENV!=="production"&&typeof console!=="undefined"){var m=f+":"+l
if(!n[m]&&a<3){o(false,"You are manually calling a React.PropTypes validation "+"function for the `%s` prop on `%s`. This is deprecated "+"and will throw in the standalone `prop-types` package. "+"You may be seeing this warning due to a third-party PropTypes "+"library. See https://fb.me/react-warning-dont-call-proptypes "+"for details.",v,f)
n[m]=true
a++}}}if(c[l]==null){if(s){if(c[l]===null){return new h("The "+d+" `"+v+"` is marked as required "+("in `"+f+"`, but its value is `null`."))}return new h("The "+d+" `"+v+"` is marked as required in "+("`"+f+"`, but its value is `undefined`."))}return null}else{return e(c,l,f,d,v)}}var c=s.bind(null,false)
c.isRequired=s.bind(null,true)
return c}function m(e){function t(t,r,n,i,o,a){var u=t[r]
var s=I(u)
if(s!==e){var c=N(u)
return new h("Invalid "+i+" `"+o+"` of type "+("`"+c+"` supplied to `"+n+"`, expected ")+("`"+e+"`."))}return null}return y(t)}function b(){return y(n.thatReturnsNull)}function g(e){function t(t,r,n,i,o){if(typeof e!=="function"){return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.")}var a=t[r]
if(!Array.isArray(a)){var s=I(a)
return new h("Invalid "+i+" `"+o+"` of type "+("`"+s+"` supplied to `"+n+"`, expected an array."))}for(var c=0;c<a.length;c++){var l=e(a,c,n,i,o+"["+c+"]",u)
if(l instanceof Error){return l}}return null}return y(t)}function _(){function t(t,r,n,i,o){var a=t[r]
if(!e(a)){var u=I(a)
return new h("Invalid "+i+" `"+o+"` of type "+("`"+u+"` supplied to `"+n+"`, expected a single ReactElement."))}return null}return y(t)}function w(e){function t(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||p
var u=q(t[r])
return new h("Invalid "+i+" `"+o+"` of type "+("`"+u+"` supplied to `"+n+"`, expected ")+("instance of `"+a+"`."))}return null}return y(t)}function O(e){if(!Array.isArray(e)){r.env.NODE_ENV!=="production"?o(false,"Invalid argument supplied to oneOf, expected an instance of array."):void 0
return n.thatReturnsNull}function t(t,r,n,i,o){var a=t[r]
for(var u=0;u<e.length;u++){if(v(a,e[u])){return null}}var s=JSON.stringify(e)
return new h("Invalid "+i+" `"+o+"` of value `"+a+"` "+("supplied to `"+n+"`, expected one of "+s+"."))}return y(t)}function E(e){function t(t,r,n,i,o){if(typeof e!=="function"){return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.")}var a=t[r]
var s=I(a)
if(s!=="object"){return new h("Invalid "+i+" `"+o+"` of type "+("`"+s+"` supplied to `"+n+"`, expected an object."))}for(var c in a){if(a.hasOwnProperty(c)){var l=e(a,c,n,i,o+"."+c,u)
if(l instanceof Error){return l}}}return null}return y(t)}function k(e){if(!Array.isArray(e)){r.env.NODE_ENV!=="production"?o(false,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0
return n.thatReturnsNull}for(var t=0;t<e.length;t++){var i=e[t]
if(typeof i!=="function"){o(false,"Invalid argument supplied to oneOfType. Expected an array of check functions, but "+"received %s at index %s.",D(i),t)
return n.thatReturnsNull}}function a(t,r,n,i,o){for(var a=0;a<e.length;a++){var s=e[a]
if(s(t,r,n,i,o,u)==null){return null}}return new h("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`."))}return y(a)}function x(){function e(e,t,r,n,i){if(!S(e[t])){return new h("Invalid "+n+" `"+i+"` supplied to "+("`"+r+"`, expected a ReactNode."))}return null}return y(e)}function j(e){function t(t,r,n,i,o){var a=t[r]
var s=I(a)
if(s!=="object"){return new h("Invalid "+i+" `"+o+"` of type `"+s+"` "+("supplied to `"+n+"`, expected `object`."))}for(var c in e){var l=e[c]
if(!l){continue}var f=l(a,c,n,i,o+"."+c,u)
if(f){return f}}return null}return y(t)}function T(e){function t(t,r,n,i,o){var s=t[r]
var c=I(s)
if(c!=="object"){return new h("Invalid "+i+" `"+o+"` of type `"+c+"` "+("supplied to `"+n+"`, expected `object`."))}var l=a({},t[r],e)
for(var f in l){var p=e[f]
if(!p){return new h("Invalid "+i+" `"+o+"` key `"+f+"` supplied to `"+n+"`."+"\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "))}var d=p(s,f,n,i,o+"."+f,u)
if(d){return d}}return null}return y(t)}function S(t){switch(typeof t){case"number":case"string":case"undefined":return true
case"boolean":return!t
case"object":if(Array.isArray(t)){return t.every(S)}if(t===null||e(t)){return true}var r=f(t)
if(r){var n=r.call(t)
var i
if(r!==t.entries){while(!(i=n.next()).done){if(!S(i.value)){return false}}}else{while(!(i=n.next()).done){var o=i.value
if(o){if(!S(o[1])){return false}}}}}else{return false}return true
default:return false}}function P(e,t){if(e==="symbol"){return true}if(t["@@toStringTag"]==="Symbol"){return true}if(typeof Symbol==="function"&&t instanceof Symbol){return true}return false}function I(e){var t=typeof e
if(Array.isArray(e)){return"array"}if(e instanceof RegExp){return"object"}if(P(t,e)){return"symbol"}return t}function N(e){if(typeof e==="undefined"||e===null){return""+e}var t=I(e)
if(t==="object"){if(e instanceof Date){return"date"}else if(e instanceof RegExp){return"regexp"}}return t}function D(e){var t=N(e)
switch(t){case"array":case"object":return"an "+t
case"boolean":case"date":case"regexp":return"a "+t
default:return t}}function q(e){if(!e.constructor||!e.constructor.name){return p}return e.constructor.name}d.checkPropTypes=s
d.PropTypes=d
return d}}).call(this,e("_process"))},{"./checkPropTypes":165,"./lib/ReactPropTypesSecret":169,_process:164,"fbjs/lib/emptyFunction":93,"fbjs/lib/invariant":94,"fbjs/lib/warning":96,"object-assign":163}],168:[function(e,t,r){(function(r){if(r.env.NODE_ENV!=="production"){var n=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103
var i=function(e){return typeof e==="object"&&e!==null&&e.$$typeof===n}
var o=true
t.exports=e("./factoryWithTypeCheckers")(i,o)}else{t.exports=e("./factoryWithThrowingShims")()}}).call(this,e("_process"))},{"./factoryWithThrowingShims":166,"./factoryWithTypeCheckers":167,_process:164}],169:[function(e,t,r){"use strict"
var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
t.exports=n},{}],170:[function(t,r,n){(function(i,o){typeof n==="object"&&typeof r!=="undefined"?o(n,t("react"),t("prop-types"),t("apollo-client")):typeof e==="function"&&e.amd?e(["exports","react","prop-types","apollo-client"],o):o(i["react-apollo"]={},i.React,i.PropTypes,i.apolloClient)})(this,function(e,r,n,i){"use strict"
function o(e){return e.props||e.attributes}function a(e){return!!e.type}function u(e){return e.prototype&&(e.prototype.render||e.prototype.isReactComponent)}function s(e){return!!e.getChildContext}function c(e,t,n){if(Array.isArray(e)){e.forEach(function(e){return c(e,t,n)})
return}if(!e){return}if(a(e)){if(typeof e.type==="function"){var i=e.type
var l=Object.assign({},i.defaultProps,o(e))
var f=t
var p=void 0
if(u(i)){var d=new i(l,t)
d.props=d.props||l
d.context=d.context||t
d.state=d.state||null
d.setState=function(e){if(typeof e==="function"){e=e(d.state,d.props,d.context)}d.state=Object.assign({},d.state,e)}
if(d.componentWillMount){d.componentWillMount()}if(s(d)){f=Object.assign({},t,d.getChildContext())}if(n(e,d,t,f)===false){return}p=d.render()}else{if(n(e,null,t)===false){return}p=i(l,t)}if(p){if(Array.isArray(p)){p.forEach(function(e){return c(e,f,n)})}else{c(p,f,n)}}}else{if(n(e,null,t)===false){return}if(e.props&&e.props.children){r.Children.forEach(e.props.children,function(e){if(e){c(e,t,n)}})}}}else if(typeof e==="string"||typeof e==="number"){n(e,null,t)}}function l(e){return typeof e.fetchData==="function"}function f(e){return typeof e.then==="function"}function p(e){var t=e.rootElement,r=e.rootContext,n=r===void 0?{}:r
var i=[]
c(t,n,function(e,t,r,n){if(t&&l(t)){var o=t.fetchData()
if(f(o)){i.push({promise:o,context:n||r,instance:t})
return false}}})
return i}function d(e,t){if(t===void 0){t={}}var r=p({rootElement:e,rootContext:t})
if(!r.length){return Promise.resolve()}var n=[]
var i=r.map(function(e){var t=e.promise,r=e.context,i=e.instance
return t.then(function(e){return d(i.render(),r)}).catch(function(e){return n.push(e)})})
return Promise.all(i).then(function(e){if(n.length>0){var t=n.length===1?n[0]:new Error(n.length+" errors were thrown when executing your fetchData functions.")
t.queryErrors=n
throw t}})}var v=t("invariant")
var h=function(e,t){v(!!t.client,'Could not find "client" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>')
return e.children(t.client)}
h.contextTypes={client:n.object.isRequired}
h.propTypes={children:n.func.isRequired}
var y=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var m=t("invariant")
var b=function(e){y(t,e)
function t(t,r){var n=e.call(this,t,r)||this
n.operations=new Map
m(t.client,"ApolloClient was not passed a client instance. Make "+'sure you pass in your client via the "client" prop.')
if(!t.client.__operations_cache__){t.client.__operations_cache__=n.operations}return n}t.prototype.getChildContext=function(){return{client:this.props.client,operations:this.props.client.__operations_cache__}}
t.prototype.render=function(){return this.props.children}
t.propTypes={client:n.object.isRequired,children:n.element.isRequired}
t.childContextTypes={client:n.object.isRequired,operations:n.object}
return t}(r.Component)
var g=t("invariant")
var _;(function(e){e[e["Query"]=0]="Query"
e[e["Mutation"]=1]="Mutation"
e[e["Subscription"]=2]="Subscription"})(_||(_={}))
var w=new Map
function O(e){var t=w.get(e)
if(t)return t
var r,n,i
g(!!e&&!!e.kind,"Argument of "+e+" passed to parser was not a valid GraphQL "+"DocumentNode. You may need to use 'graphql-tag' or another method "+"to convert your operation into a document")
var o=e.definitions.filter(function(e){return e.kind==="FragmentDefinition"})
var a=e.definitions.filter(function(e){return e.kind==="OperationDefinition"&&e.operation==="query"})
var u=e.definitions.filter(function(e){return e.kind==="OperationDefinition"&&e.operation==="mutation"})
var s=e.definitions.filter(function(e){return e.kind==="OperationDefinition"&&e.operation==="subscription"})
g(!o.length||(a.length||u.length||s.length),"Passing only a fragment to 'graphql' is not yet supported. "+"You must include a query, subscription or mutation as well")
g(a.length+u.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+(e+" had "+a.length+" queries, "+s.length+" ")+("subscriptions and "+u.length+" mutations. ")+"You can use 'compose' to join multiple operation types to a component")
n=a.length?_.Query:_.Mutation
if(!a.length&&!u.length)n=_.Subscription
var c=a.length?a:u.length?u:s
g(c.length===1,"react-apollo only supports one defintion per HOC. "+e+" had "+(c.length+" definitions. ")+"You can use 'compose' to join multiple operation types to a component")
var l=c[0]
r=l.variableDefinitions||[]
if(l.name&&l.name.kind==="Name"){i=l.name.value}else{i="data"}var f={name:i,type:n,variables:r}
w.set(e,f)
return f}var E=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var k=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var x=undefined&&undefined.__rest||function(e,t){var r={}
for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0)r[n]=e[n]
if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)if(t.indexOf(n[i])<0)r[n[i]]=e[n[i]]
return r}
var j=t("fbjs/lib/shallowEqual")
var T=t("invariant")
function S(e){return Object.keys(e).reduce(function(t,r){if(e[r]!==undefined){t[r]=e[r]}return t},{})}function P(e){var t={variables:e.variables,refetch:e.refetch.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}
return t}var I=function(e){E(t,e)
function t(t,r){var n=e.call(this,t,r)||this
n.previousData={}
n.startQuerySubscription=function(){if(n.querySubscription)return
n.querySubscription=n.queryObservable.subscribe({next:n.updateCurrentData,error:function(e){n.resubscribeToQuery()
if(!e.hasOwnProperty("graphQLErrors"))throw e
n.updateCurrentData()}})}
n.removeQuerySubscription=function(){if(n.querySubscription){n.querySubscription.unsubscribe()
delete n.querySubscription}}
n.updateCurrentData=function(){if(n.hasMounted)n.forceUpdate()}
n.getQueryResult=function(){var e={data:Object.create(null)}
Object.assign(e,P(n.queryObservable))
var t=n.queryObservable.currentResult()
var r=t.loading,o=t.networkStatus,a=t.errors
var u=t.error
if(a&&a.length>0){u=new i.ApolloError({graphQLErrors:a})}Object.assign(e,{loading:r,networkStatus:o,error:u})
if(r){Object.assign(e.data,n.previousData,t.data)}else if(u){Object.assign(e,{data:(n.queryObservable.getLastResult()||{}).data})}else{Object.assign(e.data,t.data)
n.previousData=t.data}if(!n.querySubscription){e.refetch=function(e){return new Promise(function(t,r){n.refetcherQueue={resolve:t,reject:r,args:e}})}}e.client=n.client
return e}
n.client=t.client||r.client
T(!!n.client,'Could not find "client" in the context of Query or as passed props. Wrap the root component in an <ApolloProvider>')
n.initializeQueryObservable(t)
return n}t.prototype.fetchData=function(){if(this.props.skip)return false
var e=this.props,t=e.children,r=e.ssr,n=e.displayName,i=e.skip,o=e.client,a=x(e,["children","ssr","displayName","skip","client"])
var u=a.fetchPolicy
if(r===false)return false
if(u==="network-only"||u==="cache-and-network"){u="cache-first"}var s=this.client.watchQuery(k({},a,{fetchPolicy:u}))
var c=this.queryObservable.currentResult()
return c.loading?s.result():false}
t.prototype.componentDidMount=function(){this.hasMounted=true
if(this.props.skip)return
this.startQuerySubscription()
if(this.refetcherQueue){var e=this.refetcherQueue,t=e.args,r=e.resolve,n=e.reject
this.queryObservable.refetch(t).then(r).catch(n)}}
t.prototype.componentWillReceiveProps=function(e,t){if(e.skip&&!this.props.skip){this.removeQuerySubscription()
return}var r=e.client
if(j(this.props,e)&&(this.client===r||this.client===t.client)){return}if(this.client!==r&&this.client!==t.client){if(r){this.client=r}else{this.client=t.client}this.removeQuerySubscription()
this.queryObservable=null
this.previousData={}
this.updateQuery(e)}if(this.props.query!==e.query){this.removeQuerySubscription()}this.updateQuery(e)
if(e.skip)return
this.startQuerySubscription()}
t.prototype.componentWillUnmount=function(){this.removeQuerySubscription()
this.hasMounted=false}
t.prototype.render=function(){var e=this.props.children
var t=this.getQueryResult()
return e(t)}
t.prototype.extractOptsFromProps=function(e){var t=e.variables,r=e.pollInterval,n=e.fetchPolicy,i=e.errorPolicy,o=e.notifyOnNetworkStatusChange,a=e.query,u=e.displayName,s=u===void 0?"Query":u,c=e.context,l=c===void 0?{}:c
this.operation=O(a)
T(this.operation.type===_.Query,"The <Query /> component requires a graphql query, but got a "+(this.operation.type===_.Mutation?"mutation":"subscription")+".")
return S({variables:t,pollInterval:r,query:a,fetchPolicy:n,errorPolicy:i,notifyOnNetworkStatusChange:o,metadata:{reactComponent:{displayName:s}},context:l})}
t.prototype.initializeQueryObservable=function(e){var t=this.extractOptsFromProps(e)
if(this.context.operations){this.context.operations.set(this.operation.name,{query:t.query,variables:t.variables})}this.queryObservable=this.client.watchQuery(t)}
t.prototype.updateQuery=function(e){if(!this.queryObservable)this.initializeQueryObservable(e)
this.queryObservable.setOptions(this.extractOptsFromProps(e)).catch(function(){return null})}
t.prototype.resubscribeToQuery=function(){this.removeQuerySubscription()
var e=this.queryObservable.getLastError()
var t=this.queryObservable.getLastResult()
this.queryObservable.resetLastResults()
this.startQuerySubscription()
Object.assign(this.queryObservable,{lastError:e,lastResult:t})}
t.contextTypes={client:n.object.isRequired,operations:n.object}
t.propTypes={children:n.func.isRequired,fetchPolicy:n.string,notifyOnNetworkStatusChange:n.bool,pollInterval:n.number,query:n.object.isRequired,variables:n.object,ssr:n.bool}
return t}(r.Component)
var N=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var D=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var q=t("invariant")
var F=t("fbjs/lib/shallowEqual")
var R={loading:false,called:false,error:undefined,data:undefined}
var A=function(e){N(t,e)
function t(t,r){var n=e.call(this,t,r)||this
n.runMutation=function(e){if(e===void 0){e={}}n.onStartMutation()
var t=n.generateNewMutationId()
return n.mutate(e).then(function(e){n.onCompletedMutation(e,t)
return e}).catch(function(e){n.onMutationError(e,t)
if(!n.props.onError)throw e})}
n.mutate=function(e){var t=n.props,r=t.mutation,i=t.variables,o=t.optimisticResponse,a=t.update,u=t.context,s=u===void 0?{}:u
var c=e.refetchQueries||n.props.refetchQueries
if(c&&c.length&&Array.isArray(c)){c=c.map(function(e){if(typeof e==="string"&&n.context.operations)return n.context.operations.get(e)||e
return e})
delete e.refetchQueries}return n.client.mutate(D({mutation:r,variables:i,optimisticResponse:o,refetchQueries:c,update:a,context:s},e))}
n.onStartMutation=function(){if(!n.state.loading&&!n.props.ignoreResults){n.setState({loading:true,error:undefined,data:undefined,called:true})}}
n.onCompletedMutation=function(e,t){if(n.hasMounted===false){return}var r=n.props,i=r.onCompleted,o=r.ignoreResults
var a=e.data
var u=function(){return i?i(a):null}
if(n.isMostRecentMutation(t)&&!o){n.setState({loading:false,data:a},u)}else{u()}}
n.onMutationError=function(e,t){if(n.hasMounted===false){return}var r=n.props.onError
var i=function(){return r?r(e):null}
if(n.isMostRecentMutation(t)){n.setState({loading:false,error:e},i)}else{i()}}
n.generateNewMutationId=function(){n.mostRecentMutationId=n.mostRecentMutationId+1
return n.mostRecentMutationId}
n.isMostRecentMutation=function(e){return n.mostRecentMutationId===e}
n.verifyDocumentIsMutation=function(e){var t=O(e)
q(t.type===_.Mutation,"The <Mutation /> component requires a graphql mutation, but got a "+(t.type===_.Query?"query":"subscription")+".")}
n.verifyContext=function(e){q(!!e.client,'Could not find "client" in the context of Mutation. Wrap the root component in an <ApolloProvider>')}
n.verifyContext(r)
n.client=r.client
n.verifyDocumentIsMutation(t.mutation)
n.mostRecentMutationId=0
n.state=R
return n}t.prototype.componentDidMount=function(){this.hasMounted=true}
t.prototype.componentWillUnmount=function(){this.hasMounted=false}
t.prototype.componentWillReceiveProps=function(e,t){if(F(this.props,e)&&this.client===t.client){return}if(this.props.mutation!==e.mutation){this.verifyDocumentIsMutation(e.mutation)}if(this.client!==t.client){this.client=t.client
this.setState(R)}}
t.prototype.render=function(){var e=this.props.children
var t=this.state,r=t.loading,n=t.data,i=t.error,o=t.called
var a={called:o,loading:r,data:n,error:i}
return e(this.runMutation,a)}
t.contextTypes={client:n.object.isRequired,operations:n.object}
t.propTypes={mutation:n.object.isRequired,variables:n.object,optimisticResponse:n.object,refetchQueries:n.oneOfType([n.arrayOf(n.string),n.arrayOf(n.object),n.func]),update:n.func,children:n.func.isRequired,onCompleted:n.func,onError:n.func}
return t}(r.Component)
var M=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var Q=t("fbjs/lib/shallowEqual")
var L=t("invariant")
var C=function(e){M(t,e)
function t(t,r){var n=e.call(this,t,r)||this
n.initialize=function(e){if(n.queryObservable)return
n.queryObservable=n.client.subscribe({query:e.subscription,variables:e.variables})}
n.startSubscription=function(){if(n.querySubscription)return
n.querySubscription=n.queryObservable.subscribe({next:n.updateCurrentData,error:n.updateError})}
n.getInitialState=function(){return{loading:true,error:undefined,data:undefined}}
n.updateCurrentData=function(e){n.setState({data:e.data,loading:false,error:undefined})}
n.updateError=function(e){n.setState({error:e,loading:false})}
n.endSubscription=function(){if(n.querySubscription){n.querySubscription.unsubscribe()
delete n.querySubscription}}
L(!!r.client,'Could not find "client" in the context of Subscription. Wrap the root component in an <ApolloProvider>')
n.client=r.client
n.initialize(t)
n.state=n.getInitialState()
return n}t.prototype.componentDidMount=function(){this.startSubscription()}
t.prototype.componentWillReceiveProps=function(e,t){if(Q(this.props,e)&&this.client===t.client){return}var r=this.props.shouldResubscribe===false
if(this.client!==t.client){this.client=t.client}if(!r){this.endSubscription()
delete this.queryObservable
this.initialize(e)
this.startSubscription()
this.setState(this.getInitialState())
return}this.initialize(e)
this.startSubscription()}
t.prototype.componentWillUnmount=function(){this.endSubscription()}
t.prototype.render=function(){var e=Object.assign({},this.state,{variables:this.props.variables})
return this.props.children(e)}
t.contextTypes={client:n.object.isRequired}
t.propTypes={subscription:n.object.isRequired,variables:n.object,children:n.func.isRequired}
return t}(r.Component)
var V=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var K=t("invariant")
var B=function(){return{}}
var U=function(){return false}
function W(e){return e.displayName||e.name||"Component"}function z(e,t,r,n){var i={}
for(var o=0,a=e.variables;o<a.length;o++){var u=a[o],s=u.variable,c=u.type
if(!s.name||!s.name.value)continue
var l=s.name.value
var f=t[l]
if(typeof f!=="undefined"){i[l]=f
continue}if(c.kind!=="NonNullType"){i[l]=null
continue}if(e.type===_.Mutation)return
K(typeof f!=="undefined","The operation '"+e.name+"' wrapping '"+n+"' "+("is expecting a variable: '"+s.name.value+"' but it was not found in the props ")+("passed to '"+r+"'"))}return i}var G=function(e){V(t,e)
function t(t){var r=e.call(this,t)||this
r.setWrappedInstance=r.setWrappedInstance.bind(r)
return r}t.prototype.getWrappedInstance=function(){K(this.withRef,"To access the wrapped instance, you need to specify "+"{ withRef: true } in the options")
return this.wrappedInstance}
t.prototype.setWrappedInstance=function(e){this.wrappedInstance=e}
return t}(r.Component)
var Y=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var J=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var H=undefined&&undefined.__rest||function(e,t){var r={}
for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0)r[n]=e[n]
if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)if(t.indexOf(n[i])<0)r[n[i]]=e[n[i]]
return r}
var X=t("hoist-non-react-statics")
function Z(e,t){if(t===void 0){t={}}var n=O(e)
var i=t.options,o=i===void 0?B:i,a=t.skip,u=a===void 0?U:a,s=t.alias,c=s===void 0?"Apollo":s
var l=o
if(typeof l!=="function")l=function(){return o}
var f=u
if(typeof f!=="function")f=function(){return u}
var p
return function(i){var o=c+"("+W(i)+")"
var a=function(a){Y(u,a)
function u(){return a!==null&&a.apply(this,arguments)||this}u.prototype.render=function(){var a=this
var u=this.props
var s=f(u)
var c=s?Object.create(null):l(u)
if(!s&&!c.variables&&n.variables.length>0){c.variables=z(n,u,o,W(i))}return r.createElement(I,J({},c,{displayName:o,skip:s,query:e,warnUnhandledError:true}),function(e){var n=e.client,o=e.data,c=H(e,["client","data"])
if(t.withRef){a.withRef=true
u=Object.assign({},u,{ref:a.setWrappedInstance})}if(s)return r.createElement(i,J({},u))
var l=Object.assign(c,o||{})
var f=t.name||"data"
var d=(h={},h[f]=l,h)
if(t.props){var v=(y={},y[f]=l,y.ownProps=u,y)
p=t.props(v,p)
d=p}return r.createElement(i,J({},u,d))
var h,y})}
u.displayName=o
u.WrappedComponent=i
return u}(G)
return X(a,i,{})}}var et=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var tt=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var rt=t("hoist-non-react-statics")
function nt(e,t){if(t===void 0){t={}}var n=O(e)
var i=t.options,o=i===void 0?B:i,a=t.alias,u=a===void 0?"Apollo":a
var s=o
if(typeof s!=="function")s=function(){return o}
return function(i){var o=u+"("+W(i)+")"
var a=function(a){et(u,a)
function u(){return a!==null&&a.apply(this,arguments)||this}u.prototype.render=function(){var a=this.props
var u=s(a)
if(t.withRef){this.withRef=true
a=Object.assign({},a,{ref:this.setWrappedInstance})}if(!u.variables&&n.variables.length>0){u.variables=z(n,a,o,W(i))}return r.createElement(A,tt({},u,{mutation:e,ignoreResults:true}),function(e,n){var o=t.name||"mutate"
var u=(c={},c[o]=e,c)
if(t.props){var s=(l={},l[o]=e,l.ownProps=a,l)
u=t.props(s)}return r.createElement(i,tt({},a,u))
var c,l})}
u.displayName=o
u.WrappedComponent=i
return u}(G)
return rt(a,i,{})}}var it=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var ot=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var at=undefined&&undefined.__rest||function(e,t){var r={}
for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0)r[n]=e[n]
if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)if(t.indexOf(n[i])<0)r[n[i]]=e[n[i]]
return r}
var ut=t("hoist-non-react-statics")
function st(e,t){if(t===void 0){t={}}var n=O(e)
var i=t.options,o=i===void 0?B:i,a=t.skip,u=a===void 0?U:a,s=t.alias,c=s===void 0?"Apollo":s,l=t.shouldResubscribe
var f=o
if(typeof f!=="function")f=function(){return o}
var p=u
if(typeof p!=="function")p=function(){return u}
var d
return function(i){var o=c+"("+W(i)+")"
var a=function(a){it(u,a)
function u(e){var t=a.call(this,e)||this
t.state={resubscribe:false}
return t}u.prototype.componentWillReceiveProps=function(e){if(!l)return
this.setState({resubscribe:l(this.props,e)})}
u.prototype.render=function(){var a=this
var u=this.props
var s=p(u)
var c=s?Object.create(null):f(u)
if(!s&&!c.variables&&n.variables.length>0){c.variables=z(n,u,o,W(i))}return r.createElement(C,ot({},c,{displayName:o,skip:s,subscription:e,shouldResubscribe:this.state.resubscribe}),function(e){var n=e.data,o=at(e,["data"])
if(t.withRef){a.withRef=true
u=Object.assign({},u,{ref:a.setWrappedInstance})}if(s)return r.createElement(i,ot({},u))
var c=Object.assign(o,n||{})
var l=t.name||"data"
var f=(v={},v[l]=c,v)
if(t.props){var p=(h={},h[l]=c,h.ownProps=u,h)
d=t.props(p,d)
f=d}return r.createElement(i,ot({},u,f))
var v,h})}
u.displayName=o
u.WrappedComponent=i
return u}(G)
return ut(a,i,{})}}function ct(e,t){if(t===void 0){t={}}switch(O(e).type){case _.Mutation:return nt(e,t)
case _.Subscription:return st(e,t)
case _.Query:default:return Z(e,t)}}var lt=undefined&&undefined.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]}
return function(t,r){e(t,r)
function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}()
var ft=undefined&&undefined.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r]
for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}
var pt=t("invariant")
var dt=t("hoist-non-react-statics")
function vt(e){return e.displayName||e.name||"Component"}function ht(e,t){if(t===void 0){t={}}var n="withApollo("+vt(e)+")"
var i=function(i){lt(o,i)
function o(e){var t=i.call(this,e)||this
t.setWrappedInstance=t.setWrappedInstance.bind(t)
return t}o.prototype.getWrappedInstance=function(){pt(t.withRef,"To access the wrapped instance, you need to specify "+"{ withRef: true } in the options")
return this.wrappedInstance}
o.prototype.setWrappedInstance=function(e){this.wrappedInstance=e}
o.prototype.render=function(){var n=this
return r.createElement(h,null,function(i){var o=Object.assign({},n.props,{client:i,ref:t.withRef?n.setWrappedInstance:undefined})
return r.createElement(e,ft({},o))})}
o.displayName=n
o.WrappedComponent=e
return o}(r.Component)
return dt(i,e,{})}var yt=t("lodash/flowRight")
e.compose=yt
e.getDataFromTree=d
e.ApolloConsumer=h
e.ApolloProvider=b
e.Query=I
e.Mutation=A
e.Subscription=C
e.graphql=ct
e.withApollo=ht
e.walkTree=c
Object.defineProperty(e,"__esModule",{value:true})})},{"apollo-client":6,"fbjs/lib/shallowEqual":95,"hoist-non-react-statics":114,invariant:115,"lodash/flowRight":154,"prop-types":168,react:undefined}],171:[function(e,t,r){t.exports=e("./lib/index")},{"./lib/index":172}],172:[function(e,t,r){(function(n){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var i=e("./ponyfill.js")
var o=a(i)
function a(e){return e&&e.__esModule?e:{"default":e}}var u
if(typeof self!=="undefined"){u=self}else if(typeof window!=="undefined"){u=window}else if(typeof n!=="undefined"){u=n}else if(typeof t!=="undefined"){u=t}else{u=Function("return this")()}var s=(0,o["default"])(u)
r["default"]=s}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./ponyfill.js":173}],173:[function(e,t,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r["default"]=n
function n(e){var t
var r=e.Symbol
if(typeof r==="function"){if(r.observable){t=r.observable}else{t=r("observable")
r.observable=t}}else{t="@@observable"}return t}},{}],174:[function(t,r,n){(function(t,i){typeof n==="object"&&typeof r!=="undefined"?i(n):typeof e==="function"&&e.amd?e(["exports"],i):i((t.apolloLink=t.apolloLink||{},t.apolloLink.zenObservable={}))})(this,function(e){"use strict"
var r=t("zen-observable")
e.default=r
e.Observable=r
Object.defineProperty(e,"__esModule",{value:true})})},{"zen-observable":175}],175:[function(e,t,r){t.exports=e("./zen-observable.js").Observable},{"./zen-observable.js":176}],176:[function(e,t,r){"use strict";(function(e,n){if(typeof r!=="undefined"){e(r,t)}else if(typeof self!=="undefined"){var i=n==="*"?self:n?self[n]={}:{}
e(i,{exports:i})}})(function(e,t){function r(e){return typeof Symbol==="function"&&Boolean(Symbol[e])}function n(e){return r(e)?Symbol[e]:"@@"+e}if(typeof Symbol==="function"&&!Symbol.observable){Symbol.observable=Symbol("observable")}function i(e){setTimeout(function(){throw e})}function o(e,t){var r=e[t]
if(r==null)return undefined
if(typeof r!=="function")throw new TypeError(r+" is not a function")
return r}function a(e){var t=e.constructor
if(t!==undefined){t=t[n("species")]
if(t===null){t=undefined}}return t!==undefined?t:v}function u(e,t){Object.keys(t).forEach(function(r){var n=Object.getOwnPropertyDescriptor(t,r)
n.enumerable=false
Object.defineProperty(e,r,n)})}function s(e){var t=e._cleanup
if(!t)return
e._cleanup=undefined
try{t()}catch(r){i(r)}}function c(e){return e._observer===undefined}function l(e){if(c(e))return
e._observer=undefined
s(e)}function f(e){return function(){e.unsubscribe()}}function p(e,t){if(Object(e)!==e)throw new TypeError("Observer must be an object")
this._cleanup=undefined
this._observer=e
try{var r=o(e,"start")
if(r)r.call(e,this)}catch(n){i(n)}if(c(this))return
e=new d(this)
try{var a=t.call(undefined,e)
if(a!=null){if(typeof a.unsubscribe==="function")a=f(a)
else if(typeof a!=="function")throw new TypeError(a+" is not a function")
this._cleanup=a}}catch(n){e.error(n)
return}if(c(this))s(this)}u(p.prototype={},{get closed(){return c(this)},unsubscribe:function(){l(this)}})
function d(e){this._subscription=e}u(d.prototype={},{get closed(){return c(this._subscription)},next:function(e){var t=this._subscription
if(c(t))return
var r=t._observer
try{var n=o(r,"next")
if(n)n.call(r,e)}catch(a){i(a)}},error:function(e){var t=this._subscription
if(c(t)){i(e)
return}var r=t._observer
t._observer=undefined
try{var n=o(r,"error")
if(n)n.call(r,e)
else throw e}catch(a){i(a)}s(t)},complete:function(){var e=this._subscription
if(c(e))return
var t=e._observer
e._observer=undefined
try{var r=o(t,"complete")
if(r)r.call(t)}catch(n){i(n)}s(e)}})
function v(e){if(!(this instanceof v))throw new TypeError("Observable cannot be called as a function")
if(typeof e!=="function")throw new TypeError("Observable initializer must be a function")
this._subscriber=e}u(v.prototype,{subscribe:function(e){for(var t=[],r=1;r<arguments.length;++r)t.push(arguments[r])
if(typeof e==="function"){e={next:e,error:t[0],complete:t[1]}}else if(typeof e!=="object"||e===null){e={}}return new p(e,this._subscriber)},forEach:function(e){var t=this
return new Promise(function(r,n){if(typeof e!=="function")return Promise.reject(new TypeError(e+" is not a function"))
t.subscribe({_subscription:null,start:function(e){if(Object(e)!==e)throw new TypeError(e+" is not an object")
this._subscription=e},next:function(t){var r=this._subscription
if(r.closed)return
try{e(t)}catch(i){n(i)
r.unsubscribe()}},error:n,complete:r})})},map:function(e){var t=this
if(typeof e!=="function")throw new TypeError(e+" is not a function")
var r=a(this)
return new r(function(r){return t.subscribe({next:function(t){if(r.closed)return
try{t=e(t)}catch(n){return r.error(n)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})})},filter:function(e){var t=this
if(typeof e!=="function")throw new TypeError(e+" is not a function")
var r=a(this)
return new r(function(r){return t.subscribe({next:function(t){if(r.closed)return
try{if(!e(t))return}catch(n){return r.error(n)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})})},reduce:function(e){var t=this
if(typeof e!=="function")throw new TypeError(e+" is not a function")
var r=a(this)
var n=arguments.length>1
var i=false
var o=arguments[1]
var u=o
return new r(function(r){return t.subscribe({next:function(t){if(r.closed)return
var o=!i
i=true
if(!o||n){try{u=e(u,t)}catch(a){return r.error(a)}}else{u=t}},error:function(e){r.error(e)},complete:function(){if(!i&&!n){return r.error(new TypeError("Cannot reduce an empty sequence"))}r.next(u)
r.complete()}})})}})
Object.defineProperty(v.prototype,n("observable"),{value:function(){return this},writable:true,configurable:true})
u(v,{from:function(e){var t=typeof this==="function"?this:v
if(e==null)throw new TypeError(e+" is not an object")
var i=o(e,n("observable"))
if(i){var a=i.call(e)
if(Object(a)!==a)throw new TypeError(a+" is not an object")
if(a.constructor===t)return a
return new t(function(e){return a.subscribe(e)})}if(r("iterator")&&(i=o(e,n("iterator")))){return new t(function(t){for(var r=i.call(e)[Symbol.iterator](),n;n=r.next(),!n.done;){var o=n.value
t.next(o)
if(t.closed)return}t.complete()})}if(Array.isArray(e)){return new t(function(t){for(var r=0;r<e.length;++r){t.next(e[r])
if(t.closed)return}t.complete()})}throw new TypeError(e+" is not observable")},of:function(){for(var e=[],t=0;t<arguments.length;++t)e.push(arguments[t])
var r=typeof this==="function"?this:v
return new r(function(t){for(var r=0;r<e.length;++r){t.next(e[r])
if(t.closed)return}t.complete()})}})
Object.defineProperty(v,n("species"),{get:function(){return this},configurable:true})
Object.defineProperty(v,"extensions",{value:{observableSymbol:n("observable"),setHostReportError:function(e){i=e}}})
e.Observable=v},"*")},{}]},{},[1])(1)})
});
KAdefine("javascript/apollo-package/apollo-fetch.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.default=apolloFetch
exports.apolloMutate=apolloMutate
var _createClient=require("./create-client.js")
var _createClient2=babelHelpers.interopRequireDefault(_createClient)
function apolloFetch(e,t){var a=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"network-only"
var r=(0,_createClient2.default)()
return r.query({query:e,variables:t,fetchPolicy:a})}function apolloMutate(e,t){var a=(0,_createClient2.default)()
return a.mutate({mutation:e,variables:t})}
});
KAdefine("javascript/apollo-package/apollo-wrapper.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactApollo=require("react-apollo")
var _createClient=require("./create-client.js")
var _createClient2=babelHelpers.interopRequireDefault(_createClient)
var ApolloProviderWrapper=function e(r){var a=r.initialState,t=r.children
return React.createElement(_reactApollo.ApolloProvider,{client:(0,_createClient2.default)(a)},t)}
module.exports=ApolloProviderWrapper
});
KAdefine("javascript/apollo-package/create-client.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.createInMemoryCache=undefined
exports.default=createClient
exports.installOverrideClient=installOverrideClient
var _khanFetch=require("../shared-package/khan-fetch.js")
var _apolloClient=require("apollo-client")
var _apolloCacheInmemory=require("apollo-cache-inmemory")
var _apolloLinkHttp=require("apollo-link-http")
var _apolloLinkError=require("apollo-link-error")
var _fragmentTypes=require("../../genfiles/khan-apollo/{{lang}}/fragment-types.js")
var _fragmentTypes2=babelHelpers.interopRequireDefault(_fragmentTypes)
var errorLink=(0,_apolloLinkError.onError)(function(e){var r=e.networkError,n=e.graphQLErrors
if(r){console.log("GraphQL Network Error: ",r)}if(n){console.log("GraphQL Data Error: ",n)}})
var httpLink=(0,_apolloLinkHttp.createHttpLink)({uri:"/api/internal/graphql",fetch:_khanFetch.khanFetch})
var links=[httpLink,errorLink]
var _apolloClientSingleton=void 0
var _overrideApolloClientSingleton=null
var createInMemoryCache=exports.createInMemoryCache=function e(){return new _apolloCacheInmemory.InMemoryCache({fragmentMatcher:new _apolloCacheInmemory.IntrospectionFragmentMatcher({introspectionQueryResultData:_fragmentTypes2.default})})}
function createClient(e){var r=_overrideApolloClientSingleton||_apolloClientSingleton
if(r){return r}var n=createInMemoryCache().restore(e||{})
var o=links.reduce(function(e,r){return r.concat(e)})
_apolloClientSingleton=new _apolloClient.ApolloClient({cache:n,link:o})
return _apolloClientSingleton}function installOverrideClient(e){if(_overrideApolloClientSingleton){console.warn("Installing an override Apollo client when one is already in place.")}_overrideApolloClientSingleton=e
return function(){_overrideApolloClientSingleton=null}}
});
KAdefine("genfiles/khan-apollo/en/fragment-types.js", function(require, module, exports) {
module.exports={__schema:{types:[{kind:"INTERFACE",name:"LearnableContent",possibleTypes:[{name:"Video"},{name:"Article"},{name:"Exercise"},{name:"Scratchpad"},{name:"TopicQuiz"},{name:"TopicUnitTest"}]},{kind:"UNION",name:"TopicChildren",possibleTypes:[{name:"Topic"},{name:"Article"},{name:"Exercise"},{name:"Video"},{name:"Scratchpad"},{name:"TopicQuiz"},{name:"TopicUnitTest"}]},{kind:"INTERFACE",name:"ContentItemProgress",possibleTypes:[{name:"ArticleItemProgress"},{name:"ExerciseItemProgress"},{name:"ScratchpadItemProgress"},{name:"VideoItemProgress"}]},{kind:"INTERFACE",name:"TeacherCampaignStep",possibleTypes:[{name:"TeacherCampaignInfoStep"},{name:"TeacherCampaignResponseStep"},{name:"TeacherCampaignAwardStep"},{name:"TeacherCampaignVideoStep"}]}]}}
});
; KAdefine.updateFilenameRewriteMap({"genfiles/khan-apollo/{{lang}}/fragment-types.js": "../en/fragment-types.js"});
