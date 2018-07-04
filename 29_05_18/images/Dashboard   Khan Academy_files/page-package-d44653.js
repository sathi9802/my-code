KAdefine("javascript/page-package/store.js", function(require, module, exports) {
var icepick=require("icepick")
var _require=require("redux"),combineReducers=_require.combineReducers,applyMiddleware=_require.applyMiddleware,createStore=_require.createStore
var thunkMiddleware=require("redux-thunk")
var ExerciseProgressUtils=require("../mobile-shared-package/exercise-progress-utils.js")
var constants=require("./constants.js")
function transformMissionPercentageData(e){var t={}
e.forEach(function(e){var i=ExerciseProgressUtils.getCountPerLevel(e.progressInfo)
var a=ExerciseProgressUtils.getProgressPercentage(i)
t[e.slug]=a})
return t}var initialMissionDataState=icepick.freeze({loading:false,missionPercentages:null})
function missionData(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialMissionDataState
var t=arguments[1]
switch(t.type){case constants.LOADING_MISSION_PERCENTAGE_DATA:return icepick.assign(e,{loading:true})
case constants.LOADED_MISSION_PERCENTAGE_DATA:return icepick.assign(e,{loading:false,missionPercentages:transformMissionPercentageData(t.missions)})
default:return e}}var initialNotificationsState=icepick.freeze({newNotificationCount:0,notifications:[],loading:false,everLoaded:false,lastCursor:null,hasMore:true,teaser:null})
function notifications(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialNotificationsState
var t=arguments[1]
switch(t.type){case constants.START_LOADING_NOTIFICATIONS:return icepick.assign(e,{loading:true,everLoaded:true})
case constants.LOADED_NOTIFICATIONS:return icepick.assign(e,{notifications:e.notifications.concat(t.notifications),lastCursor:t.cursor,hasMore:t.hasMore,loading:false})
case constants.NEW_NOTIFICATIONS:return icepick.assign(e,{notifications:!e.everLoaded?e.notifications:t.notifications.concat(e.notifications),newNotificationCount:e.newNotificationCount+t.notifications.length,teaser:t.notifications.length>0?t.notifications[0].translatedTeaser:null})
case constants.CLEAR_NOTIFICATIONS_TEASER:return icepick.assign(e,{teaser:null})
case constants.CLEARED_NEW_NOTIFICATIONS:return icepick.assign(e,{newNotificationCount:0})
default:return e}}var profileDataFromProfile=function e(t){return{hasChildStudents:t.get("hasChildStudents"),hasCoachHomepage:t.get("hasCoachHomepage"),hasParentHomepage:t.get("hasParentHomepage"),hasStudents:t.get("hasStudents"),isChildAccount:t.get("isChildAccount"),isMidsignupPhantom:t.get("isMidsignupPhantom"),isPhantom:t.get("isPhantom"),profileRoot:t.get("profileRoot"),nickname:t.get("nickname"),avatarSrc:t.get("avatarSrc")}}
function userProfileData(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null
var t=arguments[1]
switch(t.type){case constants.UPDATE_PROFILE:return t.profile&&icepick.freeze(profileDataFromProfile(t.profile))
default:return e}}var store=combineReducers({notifications:notifications,userProfileData:userProfileData,missionData:missionData})
var createWithMiddleware=applyMiddleware(thunkMiddleware)(createStore)
var create=function t(e,i){return createWithMiddleware(store,{notifications:icepick.assign(initialNotificationsState,{newNotificationCount:e}),userProfileData:i&&icepick.freeze(i)})}
module.exports={create:create,notifications:notifications,userProfileData:userProfileData,missionData:missionData}
});
KAdefine("javascript/page-package/constants.js", function(require, module, exports) {
function makeConstants(I){var A={}
Object.keys(I).forEach(function(I){A[I]="PAGE."+I})
return A}module.exports=makeConstants({START_LOADING_NOTIFICATIONS:null,LOADED_NOTIFICATIONS:null,NEW_NOTIFICATIONS:null,CLEARED_NEW_NOTIFICATIONS:null,LOADING_MISSION_PERCENTAGE_DATA:null,LOADED_MISSION_PERCENTAGE_DATA:null,UPDATE_PROFILE:null,CLEAR_NOTIFICATIONS_TEASER:null})
});
KAdefine("javascript/page-package/actions.js", function(require, module, exports) {
var _importLegacyCss=require.importLegacyCSS
var _importLegacyCss2=babelHelpers.interopRequireDefault(_importLegacyCss)
var _require=require("../shared-package/khan-fetch.js"),khanFetch=_require.khanFetch,encodeParams=_require.encodeParams
var constants=require("./constants.js")
function newNotifications(t){return{type:constants.NEW_NOTIFICATIONS,notifications:t}}function clearNotificationsTeaser(){return{type:constants.CLEAR_NOTIFICATIONS_TEASER}}function gotNewNotifications(t){return function(i,n){i(newNotifications(t))
setTimeout(function(){var t=n()
if(t.notifications.teaser!=null){i(clearNotificationsTeaser())}},5e3)}}function startLoadingNotifications(){return{type:constants.START_LOADING_NOTIFICATIONS}}function loadedNotifications(t,i,n){return{type:constants.LOADED_NOTIFICATIONS,notifications:t,cursor:i,hasMore:n}}function loadMoreNotifications(){return function(t,i){t(startLoadingNotifications())
var n=i()
var e=n.notifications.lastCursor
var o={casing:"camel"}
if(e){o.cursor=e}var a="/api/internal/user/notifications/readable?"+encodeParams(o)
var s=new Promise(function(t){Promise.all([require.dynimport("../notifications-package/notifications.js"),require.dynimport("../notifications-package/readable-notification-view.js"),require.dynimport("backbone"),require.dynimport("jquery"),(0,_importLegacyCss2.default)("notifications.css")]).then(t)})
Promise.all([khanFetch(a).then(function(t){return t.json()}),s]).then(function(i){var n=i[0],e=i[1]
t(loadedNotifications(n.notifications,n.cursor,n.hasMore))})}}function clearedNotifications(){return{type:constants.CLEARED_NEW_NOTIFICATIONS}}function clearNewNotifications(){return function(t){t(clearedNotifications())
khanFetch("/api/internal/user/notifications/clear_brand_new",{method:"POST"})}}function startLoadingMissionPercentages(){return{type:constants.LOADING_MISSION_PERCENTAGE_DATA}}function loadedMissionPercentages(t){return{type:constants.LOADED_MISSION_PERCENTAGE_DATA,missions:t}}function loadMissionPercentages(){return function(t){t(startLoadingMissionPercentages())
khanFetch("/api/internal/user/missions/progress_info?casing=camel").then(function(t){return t.json()}).then(function(i){t(loadedMissionPercentages(i))})}}function updateProfile(t){return{type:constants.UPDATE_PROFILE,profile:t}}module.exports={gotNewNotifications:gotNewNotifications,loadMoreNotifications:loadMoreNotifications,clearNewNotifications:clearNewNotifications,loadMissionPercentages:loadMissionPercentages,updateProfile:updateProfile}
});
KAdefine("javascript/page-package/urls.js", function(require, module, exports) {
var buildURLWithContinue=function n(t,i){return function(n){if(!n){n=location.pathname+location.search+location.hash}var o=i?i(n):null
return t+"?continue="+encodeURIComponent(o||n)}}
module.exports={getLoginURL:buildURLWithContinue("/login",function(n){switch(n){case"/sat":return"/mission/sat"
case"/signup":var t=/continue=([^&]+)/.exec(location.search)
if(t){return t[1]}}}),getSignupURL:buildURLWithContinue("/signup",function(n){switch(n){case"/sat":return"/mission/sat"
case"/login":var t=/continue=([^&]+)/.exec(location.search)
if(t){return t[1]}}}),getLogoutURL:buildURLWithContinue("/logout")}
});
KAdefine("javascript/page-package/big-bingo-links.js", function(require, module, exports) {
function buildUrlWithoutExtras(n,e){return"/bigbingo_redirect"+("?continue="+encodeURIComponent(e))+("&conversion_ids="+encodeURIComponent(n.join(",")))}function buildUrlWithExtras(n,e){return"/bigbingo_redirect"+("?continue="+encodeURIComponent(e))+("&conversions_json="+encodeURIComponent(JSON.stringify(n)))}function replaceHref(n,e,t){var r=n.currentTarget
if(r.getAttribute("data-has-big-bingo-href")===null){r.href=t(e,r.href)
r.setAttribute("data-has-big-bingo-href","")}}function handleMouseDown(n,e,t){replaceHref(n,e,t)}function handleKeyDown(n,e,t){if(n.key==="Enter"){replaceHref(n,e,t)}}function handleTouchStart(n,e,t){replaceHref(n,e,t)}function _handlers(n,e){return{onMouseDown:function t(r){return handleMouseDown(r,n,e)},onKeyDown:function r(t){return handleKeyDown(t,n,e)},onTouchStart:function o(t){return handleTouchStart(t,n,e)}}}function handlers(n){return _handlers(n,buildUrlWithoutExtras)}function handlersWithExtras(n){return _handlers(n,buildUrlWithExtras)}module.exports={handlers:handlers,handlersWithExtras:handlersWithExtras,buildUrlWithoutExtras:buildUrlWithoutExtras,buildUrlWithExtras:buildUrlWithExtras}
});
KAdefine("javascript/page-package/footer.jsx", function(require, module, exports) {
var _footerContainer,_mainBlock,_babelHelpers$extends,_missionAndLanguageSe,_babelHelpers$extends2,_mainLinksSection,_socialMediaContainer,_bottomLink,_languagePickerContai
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var absoluteLinks=require("../shared-package/absolute-links.js")
var i18n=require("../shared-package/i18n.js")
var $_=i18n.$_,$i18nDoNotTranslate=i18n.$i18nDoNotTranslate
var Spring=require("../components/layout-package/spring.jsx")
var FooterAttribution=require("./footer-attribution.jsx")
var globalStyles=require("../shared-styles-package/global-styles.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var styleA11y=require("../shared-styles-package/a11y.js")
var Icon=require("../shared-styles-package/icon.jsx")
var currentYear=(new Date).getFullYear()
var socialIconSize=24
var twitterUrl=absoluteLinks.safeLinkTo("https://twitter.com/khanacademy")
var facebookUrl=absoluteLinks.safeLinkTo("https://www.facebook.com/khanacademy")
var instagramUrl=absoluteLinks.safeLinkTo("https://instagram.com/khanacademy")
var twitterIcon={width:20,height:20,path:"M18.895 0H1.105C.495 0 0 .495 0 1.105V18.9c0 .605.495 1.1 1.105 1.1H18.9c.61 0 1.105-.495 1.105-1.105V1.105A1.113 1.113 0 0 0 18.895 0zM14.97 7.455c.005.11.005.22.005.33 0 3.385-2.58 7.295-7.295 7.295a7.293 7.293 0 0 1-3.925-1.145A5.142 5.142 0 0 0 7.55 12.87a2.564 2.564 0 0 1-2.395-1.78c.155.03.315.045.48.045.235 0 .46-.03.675-.09A2.57 2.57 0 0 1 4.255 8.53v-.035c.345.19.74.305 1.16.32A2.57 2.57 0 0 1 4.62 5.39a7.28 7.28 0 0 0 5.285 2.68 2.567 2.567 0 0 1 2.5-3.15c.735 0 1.4.31 1.87.81a5.1 5.1 0 0 0 1.63-.62 2.58 2.58 0 0 1-1.13 1.42c.52-.065 1.015-.2 1.475-.405-.345.515-.78.97-1.28 1.33z"}
var facebookIcon={width:15,height:15,path:"M14.172 0H.827A.827.827 0 0 0 0 .828v13.344c0 .458.37.828.828.828h7.184V9.19H6.057V6.925h1.955v-1.67c0-1.938 1.183-2.992 2.913-2.992.827 0 1.54.062 1.747.09v2.025h-1.197c-.94 0-1.123.447-1.123 1.102v1.445h2.243L12.3 9.19h-1.95V15h3.822c.458 0 .828-.37.828-.828V.827A.827.827 0 0 0 14.172 0z"}
var instagramIcon={width:24,height:24,path:"M18.24,7.28a2.67,2.67,0,0,0-1.52-1.52,4.33,4.33,0,0,0-1.49-.27c-.84,0-1.09,0-3.23,0s-2.39,0-3.23,0a4.33,4.33,0,0,0-1.49.27A2.67,2.67,0,0,0,5.76,7.28a4.33,4.33,0,0,0-.27,1.49c0,.84,0,1.09,0,3.23s0,2.39,0,3.23a4.33,4.33,0,0,0,.27,1.49,2.67,2.67,0,0,0,1.52,1.52,4.33,4.33,0,0,0,1.49.27c.84,0,1.09,0,3.23,0s2.39,0,3.23,0a4.33,4.33,0,0,0,1.49-.27,2.67,2.67,0,0,0,1.52-1.52,4.33,4.33,0,0,0,.27-1.49c0-.84,0-1.09,0-3.23s0-2.39,0-3.23A4.33,4.33,0,0,0,18.24,7.28ZM12,16.11A4.11,4.11,0,1,1,16.11,12,4.11,4.11,0,0,1,12,16.11Zm4.27-7.42a1,1,0,1,1,1-1A1,1,0,0,1,16.27,8.69Z M12,9.33A2.67,2.67,0,1,0,14.67,12,2.68,2.68,0,0,0,12,9.33Z M22,0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0ZM20,15.3a5.85,5.85,0,0,1-.37,1.94,4,4,0,0,1-2.34,2.34A5.85,5.85,0,0,1,15.3,20c-.85,0-1.13.05-3.3.05S9.55,20,8.7,20a5.85,5.85,0,0,1-1.94-.37,4,4,0,0,1-2.34-2.34,5.85,5.85,0,0,1-.37-1.94c0-.85,0-1.13,0-3.3s0-2.45,0-3.3a5.85,5.85,0,0,1,.37-1.94A4,4,0,0,1,6.76,4.42,5.85,5.85,0,0,1,8.7,4.05C9.55,4,9.83,4,12,4s2.45,0,3.3,0a5.85,5.85,0,0,1,1.94.37,4,4,0,0,1,2.34,2.34A5.85,5.85,0,0,1,20,8.7c0,.85.05,1.13.05,3.3S20,14.45,20,15.3Z"}
var iconDown={path:"M5,6L0,0L10,0",width:10,height:5.6239}
var playStoreUrl=absoluteLinks.safeLinkTo("https://play.google.com/store/apps/details?id=org.khanacademy.android&referrer=utm_source%3Dwebsite%2520footer%26utm_medium%3Dwebsite%2520footer%26utm_campaign%3Dwebsite%2520footer")
var appStoreUrl=absoluteLinks.safeLinkTo("https://itunes.apple.com/app/apple-store/id469863705?pt=698519&ct=website%20footer&mt=8")
var trackGaClick=function e(a){return new Promise(function(e,t){if(window.ga){window.ga("send","event","Click",a,{hitCallback:e})}else{e()}})}
var mainLinks=[{heading:$_(null,"About"),href:"/about",links:[{href:"/about/blog",text:$_(null,"News")},{href:"/about/impact",text:$_(null,"Impact")},{href:"/about/the-team",text:$_(null,"Our team")},{href:"/about/our-interns",text:$_(null,"Our interns")},{href:"/about/our-content-specialists",text:$_(null,"Our content specialists")},{href:"/about/our-board",text:$_(null,"Our leadership")},{href:"/about/our-supporters",text:$_(null,"Our supporters")},{href:"/contribute/credits",text:$_(null,"Our contributors")},{href:"/careers",text:$_(null,"Careers")},{href:"/careers/interns",text:$_(null,"Internships")}]},{heading:$_(null,"Contact"),links:[{href:absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/"),text:$_(null,"Help center")},{href:absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/hc/en-us/"+"community/topics"),text:$_(null,"Support community")},{href:"/stories",text:$_(null,"Share your story")},{href:absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/hc/"+"en-us/articles/202483630-PressRoom"),text:$_(null,"Press")}]},{heading:$_(null,"Download our apps"),links:[{href:appStoreUrl,text:$_(null,"iOS app")},{href:playStoreUrl,text:$_(null,"Android app")}]}]
var Footer=function(e){babelHelpers.inherits(a,e)
function a(){var t,n,s
babelHelpers.classCallCheck(this,a)
for(var r=arguments.length,i=Array(r),l=0;l<r;l++){i[l]=arguments[l]}return s=(t=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),n),n.state={curLanguage:n.props.curLanguage},n.handleLanguagePick=function(e){var a=e.target.value
n.setState({curLanguage:a})},t),babelHelpers.possibleConstructorReturn(n,s)}a.addMountListener=function t(e){a._mountListeners.push(e)}
a.removeMountListener=function n(e){a._mountListeners=a._mountListeners.filter(function(a){return a!==e})}
a.prototype.componentDidMount=function s(){this._triggerListenersAfterMount=setTimeout(function(){for(var e=a._mountListeners,t=Array.isArray(e),n=0,e=t?e:e[Symbol.iterator]();;){var s
if(t){if(n>=e.length)break
s=e[n++]}else{n=e.next()
if(n.done)break
s=n.value}var r=s
r()}},0)}
a.prototype.componentWillUnmount=function r(){clearTimeout(this._triggerListenersAfterMount)}
a.prototype.getCurLanguageName=function i(){var e=this
var a=this.props.languages.find(function(a){return a[0].toLowerCase()===e.state.curLanguage})
return a?a[1]:this.state.curLanguage}
a.prototype.renderGroupHeader=function l(e,a,t){if(e){return React.createElement("li",null,React.createElement("h3",{className:css(styles.li,styles.heading),key:"h"+t},React.createElement("a",{className:css(styles.link),href:e},a)))}else{return React.createElement("h3",{className:css(styles.li,styles.heading),key:"h"+t},a)}}
a.prototype.renderMainLinks=function o(){var e=this
var a=this.props.domains
return React.createElement("ul",{className:css(styles.mainLinksSection),role:"navigation"},mainLinks.map(function(a,t){return React.createElement("li",{className:css(styles.linkGroup),key:"g"+t},React.createElement("ul",null,e.renderGroupHeader(a.href||null,a.heading,t),a.links.map(function(e,a){return React.createElement("li",{className:css(styles.li),key:"link"+a},React.createElement("a",{className:css(styles.link),href:e.href},e.text))})))}),React.createElement("li",{className:css(styles.linkGroup),key:"g-subjects"},React.createElement("h3",{className:css(styles.li,styles.heading),key:"h-subject"},$_(null,"Subjects")),React.createElement("ul",null,a.map(function(e,a){var t=e.title,n=e.href
return React.createElement("li",{className:css(styles.li),key:a},React.createElement("a",{className:css(styles.link),href:n},t))}))))}
a.prototype.renderLanguagePicker=function c(){if(this.props.isUserLoggedIn){return React.createElement("div",{className:css(styles.languagePickerContainer)},React.createElement("a",{className:css(styles.link),href:"/settings/account"},$_(null,"Change language")))}else{return React.createElement("div",{className:css(styles.languagePickerContainer)},$_(null,"Language"),React.createElement("div",{className:css(styles.languagePickerInnerContainer)},React.createElement("select",{onChange:this.handleLanguagePick,id:"language_picker",value:this.state.curLanguage.toLowerCase(),"aria-label":i18n._("Change language"),className:css(styles.languagePicker)},React.createElement("option",{disabled:"disabled",value:"none"},i18n._("View Khan Academy in:")),this.props.languages.map(function(e,a){return React.createElement("option",{key:"lang"+a,value:e[0].toLowerCase(),lang:e[0].toLowerCase()},e[1])})),React.createElement(Icon,{className:css(styles.languagePickerIconDown),color:styleConstants.grayLighter,size:6,icon:iconDown})),React.createElement("a",{className:css(styles.languagePickerLink),href:"/intl/"+this.state.curLanguage,"aria-label":i18n._("Go to %(language)s version of Khan Academy",{language:this.getCurLanguageName()}),id:"language_picker_button"},React.createElement("span",{"aria-hidden":true},$_(null,"Go"))))}}
a.prototype.handleSocialMediaClick=function u(e,a){var t=e.currentTarget.href
trackGaClick(a).then(function(){window.location.href=t})}
a.prototype.render=function m(){var e=this
var a=React.createElement("a",{href:"/donate",className:css(styles.linkHeavy)},$_(null,"Donate"))
var t=React.createElement("a",{href:"/contribute",className:css(styles.linkHeavy)},$_(null,"volunteer"))
return React.createElement("footer",{className:css(styles.rootStyle)},React.createElement("h2",{className:css(styleA11y.srOnly)},$_(null,"Site Navigation")),React.createElement("div",{className:css(styles.footerContainer)},this.props.attribution&&React.createElement("div",{className:css(styles.attributionBlock)},React.createElement(FooterAttribution,this.props.attribution)),React.createElement("div",{className:css(styles.mainBlock)},React.createElement("div",{className:css(styles.missionAndLanguageSection)},React.createElement("p",{className:css(styles.missionParagraph)},$_(null,"Our mission is to provide a free, world-class education to anyone, anywhere.")),React.createElement("p",{className:css(styles.missionParagraphSpacer)}),React.createElement("p",{className:css(styles.missionParagraph)},$_(null,"Khan Academy is a 501(c)(3) nonprofit organization.")," ",$_({donate:a,volunteer:t},"%(donate)s or %(volunteer)s today!"))),this.renderMainLinks(),this.renderLanguagePicker()),React.createElement("div",{className:css(styles.bottomBlock)},React.createElement("div",{className:css(styles.bottomLink),title:i18n.i18nDoNotTranslate("Version: ")+this.props.kaGlobals.version},$i18nDoNotTranslate(null,"© "+currentYear+" Khan Academy"),React.createElement("br",null)),React.createElement("div",{className:css(styles.bottomLink)},React.createElement("span",null,React.createElement("a",{className:css(styles.link),href:"/about/tos"},$_(null,"Terms of use")))),React.createElement("div",{className:css(styles.bottomLink)},React.createElement("span",null,React.createElement("a",{className:css(styles.link),href:"/about/privacy-policy"},$_(null,"Privacy Policy")))),React.createElement(Spring,null),React.createElement("div",{className:css(styles.socialMediaContainer)},React.createElement("a",{href:facebookUrl,"aria-label":i18n._("Follow us on Facebook"),className:css(styles.socialIconLink),onClick:function n(a){e.handleSocialMediaClick(a,"Facebook-Join-Header")}},React.createElement(Icon,{size:socialIconSize,icon:facebookIcon})),React.createElement("a",{href:twitterUrl,"aria-label":i18n._("Follow us on Twitter"),className:css(styles.socialIconLink),onClick:function s(a){e.handleSocialMediaClick(a,"Twitter-Follow-Header")}},React.createElement(Icon,{size:socialIconSize,icon:twitterIcon})),React.createElement("a",{href:instagramUrl,"aria-label":i18n._("Follow us on Instagram"),className:css(styles.socialIconLink),onClick:function r(a){e.handleSocialMediaClick(a,"Instagram-Follow-Header")}},React.createElement(Icon,{size:socialIconSize,icon:instagramIcon}))))))}
return a}(React.Component)
Footer.defaultProps={isUserLoggedIn:false}
Footer._mountListeners=[]
var verticalSpacingBase=20
var linkColorHover="#ACD2F2"
var mainLinkHeight=32
var rootVerticalPadding=12
var styles=StyleSheet.create({rootStyle:{backgroundColor:styleConstants.kaBlue,clear:"both",color:styleConstants.white,position:"relative",padding:rootVerticalPadding+"px 20px",zIndex:10,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},footerContainer:(_footerContainer={boxSizing:"border-box",maxWidth:styleConstants.maxContainerWidth,position:"relative",margin:"0 auto",padding:"0 20px"},_footerContainer[mediaQueries.smOrSmaller]={padding:0},_footerContainer),mainBlock:(_mainBlock={padding:"36px 0 "+verticalSpacingBase+"px",position:"relative",display:"flex",flexDirection:"row"},_mainBlock[mediaQueries.smOrSmaller]={flexDirection:"column",paddingBottom:2*verticalSpacingBase},_mainBlock),attributionBlock:{borderBottom:"1px solid "+styleConstants.grayLighter,paddingBottom:rootVerticalPadding},bottomBlock:babelHelpers.extends({},globalStyles.typography.labelSmall,(_babelHelpers$extends={display:"flex",flexDirection:"row",alignItems:"center",borderTop:"1px solid "+styleConstants.grayLighter,padding:"8px 0"},_babelHelpers$extends[mediaQueries.smOrSmaller]={flexDirection:"column",justifyContent:"center",paddingTop:verticalSpacingBase},_babelHelpers$extends)),li:{paddingRight:8,height:mainLinkHeight,boxSizing:"border-box"},link:babelHelpers.extends({},globalStyles.typography.labelSmall,{color:styleConstants.white,textDecoration:"none",":hover":{textDecoration:"underline",color:linkColorHover}}),linkHeavy:{color:styleConstants.white,textDecoration:"underline",fontWeight:"bold",":hover":{color:linkColorHover}},heading:babelHelpers.extends({},globalStyles.typography.labelSmall,{fontWeight:"bold",marginBottom:0,color:"inherit"}),missionAndLanguageSection:(_missionAndLanguageSe={display:"flex",flexDirection:"column",height:"100%",width:"40%",paddingRight:40,paddingBottom:2*verticalSpacingBase},_missionAndLanguageSe[mediaQueries.smOrSmaller]={width:"auto",height:"auto",paddingTop:verticalSpacingBase,textAlign:"center",paddingRight:0},_missionAndLanguageSe),missionParagraph:babelHelpers.extends({},globalStyles.typography.bodyLarge,(_babelHelpers$extends2={margin:0,maxWidth:440},_babelHelpers$extends2[mediaQueries.smOrSmaller]={margin:"0 auto"},_babelHelpers$extends2)),missionParagraphSpacer:babelHelpers.extends({},globalStyles.typography.bodyLarge,{margin:0,height:"1em"}),mainLinksSection:(_mainLinksSection={position:"relative",flexGrow:1,columnCount:3},_mainLinksSection[mediaQueries.smOrSmaller]={columnCount:2},_mainLinksSection),linkGroup:{breakInside:"avoid-column",paddingBottom:mainLinkHeight},socialMediaContainer:(_socialMediaContainer={},_socialMediaContainer[mediaQueries.smOrSmaller]={marginTop:verticalSpacingBase},_socialMediaContainer),socialIconLink:{color:globalStyles.colors.white,opacity:.6,":not(:first-child)":{marginLeft:8},":hover":{opacity:1},display:"inline-block",height:24,width:24},bottomLink:(_bottomLink={":not(:first-child)":{marginLeft:16}},_bottomLink[mediaQueries.smOrSmaller]={":not(:first-child)":{marginLeft:0},marginTop:6,lineHeight:1.5},_bottomLink),languagePickerContainer:(_languagePickerContai={position:"absolute",left:0,bottom:verticalSpacingBase},_languagePickerContai[mediaQueries.smOrSmaller]={width:"100%",textAlign:"center"},_languagePickerContai),languagePickerInnerContainer:{display:"inline-block",position:"relative",marginLeft:10},languagePicker:babelHelpers.extends({},globalStyles.typography.labelSmall,{border:0,color:styleConstants.white,borderRadius:4,height:26,lineHeight:"27px",padding:"0 12px",backgroundColor:"#021e39",appearance:"none","::-ms-expand":{display:"none"}}),languagePickerIconDown:{position:"absolute",right:8,top:10,pointerEvents:"none"},languagePickerLink:{color:styleConstants.white,fontWeight:"bold",marginLeft:12,borderBottom:styleConstants.white+" 1px solid",textDecoration:"none",marginBottom:2}})
module.exports=Footer
});
KAdefine("javascript/page-package/footer-attribution.jsx", function(require, module, exports) {
var _root,_babelHelpers$extends,_desktopImage,_tabletImage,_mobileImage
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var FooterAttribution=function e(a){return React.createElement("div",{className:(0,_aphrodite.css)(styles.root,!a.imageBaselineAligned&&styles.verticalCenter)},React.createElement("div",{className:(0,_aphrodite.css)(styles.tagline,a.imageBaselineAligned&&styles.baslineAligned),dangerouslySetInnerHTML:{__html:a.taglineHtml}}),React.createElement("img",{className:(0,_aphrodite.css)(styles.desktopImage),alt:a.imageCaption,src:_ka2.default.staticUrl(a.imageUrl)}),React.createElement("img",{className:(0,_aphrodite.css)(styles.tabletImage),alt:a.imageCaption,src:_ka2.default.staticUrl(a.tabletImageUrl||a.mobileImageUrl||a.imageUrl)}),React.createElement("img",{className:(0,_aphrodite.css)(styles.mobileImage),alt:a.imageCaption,src:_ka2.default.staticUrl(a.mobileImageUrl||a.tabletImageUrl||a.imageUrl)}))}
var styles=_aphrodite.StyleSheet.create({root:(_root={display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"36px 0"},_root[_mediaQueries2.default.smOrSmaller]={flexDirection:"column",justifyContent:"initial",alignItems:"center",textAlign:"center"},_root),verticalCenter:{alignItems:"center"},tagline:babelHelpers.extends({},_globalStyles2.default.typography.bodyLarge,(_babelHelpers$extends={color:_globalStyles2.default.colors.white,marginRight:12},_babelHelpers$extends[_mediaQueries2.default.smOrSmaller]={marginRight:0},_babelHelpers$extends[_mediaQueries2.default.xs]=babelHelpers.extends({},_globalStyles2.default.typography.bodySmall),_babelHelpers$extends)),baslineAligned:{marginRight:8},desktopImage:(_desktopImage={display:"block"},_desktopImage[_mediaQueries2.default.smOrSmaller]={display:"none"},_desktopImage),tabletImage:(_tabletImage={display:"none",marginTop:12},_tabletImage[_mediaQueries2.default.smOrSmaller]={display:"block"},_tabletImage[_mediaQueries2.default.xsOrSmaller]={display:"none"},_tabletImage),mobileImage:(_mobileImage={display:"none",marginTop:12},_mobileImage[_mediaQueries2.default.xsOrSmaller]={display:"block"},_mobileImage)})
module.exports=FooterAttribution
});
KAdefine("javascript/page-package/dropdown-button.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _constants=require("../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var PropTypes=require("prop-types")
var DropdownButton=function(e){babelHelpers.inherits(n,e)
function n(){var o,t,r
babelHelpers.classCallCheck(this,n)
for(var s=arguments.length,p=Array(s),a=0;a<s;a++){p[a]=arguments[a]}return r=(o=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(p))),t),t.handleKeyDown=function(e){var n=t.props,o=n.onClick,r=n.onEscape,s=n.onArrowDown
if(e.key==="Enter"||e.key===" "){e.preventDefault()
o()}else if(e.key==="Escape"){e.preventDefault()
r()}else if(e.key==="Tab"){r()}else if(e.key==="ArrowDown"){s(e)}},o),babelHelpers.possibleConstructorReturn(t,r)}n.prototype.render=function o(){var e=this
return React.createElement("button",{ref:this.props.innerRef,"data-test-id":this.props.testId,className:_aphrodite.css.apply(undefined,[styles.notAButton,styles.button].concat(this.props.buttonStyles)),"aria-expanded":this.props.dropdownIsOpen,onClick:function n(){return e.props.onClick()},onKeyDown:function o(n){return e.handleKeyDown(n)},onMouseEnter:function t(){return e.props.onMouseEnter()},onFocus:function r(){return e.props.onMouseEnter()},onMouseLeave:function s(){return e.props.onMouseLeave()},onBlur:function p(){return e.props.onMouseLeave()}},this.props.children)}
return n}(_react.Component)
DropdownButton.propTypes={dropdownIsOpen:React.PropTypes.bool,innerRef:React.PropTypes.func,buttonStyles:PropTypes.arrayOf(PropTypes.any),children:PropTypes.node,onClick:PropTypes.func,onEscape:PropTypes.func.isRequired,onMouseEnter:PropTypes.func,onMouseLeave:PropTypes.func,onArrowDown:React.PropTypes.func,testId:PropTypes.string}
DropdownButton.defaultProps={innerRef:function e(){},buttonStyles:[],onClick:function n(){},onEscape:function o(){},onArrowDown:function t(){},onMouseEnter:function r(){},onMouseLeave:function s(){}}
var styles=_aphrodite.StyleSheet.create({notAButton:{backgroundColor:"transparent",border:"none",padding:"none"},button:{alignItems:"center",color:_constants2.default.textColor,display:"flex",justifyContent:"center",paddingLeft:0,paddingRight:0,textDecoration:"none"}})
module.exports=DropdownButton
});
KAdefine("javascript/page-package/header-dropdown.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _constants=require("../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var HeaderDropdown=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function o(){return _react2.default.createElement("ul",{className:_aphrodite.css.apply(undefined,[styles.dropdown,this.props.visible&&styles.dropdownOpen,this.props.hasBorder&&styles.dropdownBorder].concat(this.props.dropdownStyles)),id:this.props.id},this.props.children)}
return r}(_react.Component)
HeaderDropdown.propTypes={id:_propTypes2.default.string,children:_propTypes2.default.node,dropdownStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),hasBorder:_propTypes2.default.bool,visible:_propTypes2.default.bool}
HeaderDropdown.defaultProps={visible:false,hasBorder:true,dropdownStyles:[]}
var styles=_aphrodite.StyleSheet.create({dropdown:{display:"none",position:"absolute",zIndex:_constants2.default.zindexDropdown},dropdownOpen:{display:"block"},dropdownBorder:{border:"1px solid "+_constants2.default.grayLighter,boxShadow:"0 5px 8px rgba(0, 0, 0, 0.5)"}})
module.exports=HeaderDropdown
});
KAdefine("javascript/page-package/header-logo.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _constants=require("../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var HeaderLogo=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function l(){var e=_react2.default.createElement("svg",{className:(0,_aphrodite.css)(styles.logoSvg,this.props.transparent&&styles.transparent),"aria-hidden":true,viewBox:"0 0 276.7 34.7"},_react2.default.createElement("g",null,_react2.default.createElement("path",{fill:"inherit",d:"M49.5,24.7l-0.4,0.2L49.5,24.7l-3.1-6.3c-0.4-0.8-0.9-1.3-1.2-1.6c0.3-0.3,0.8-0.8,1.2-1.6l5.9-10.8h-6 l-5.1,9.5c-0.2,0.3-0.3,0.4-0.6,0.5c-0.2,0.1-0.6,0.1-1,0.1h-2.2V7.2c0-0.9-0.2-1.6-0.7-2.1c-0.5-0.5-1.2-0.7-2.1-0.7h-2.7v5.1v4 V30h5.5V19.2h1.9c0.5,0,0.9,0,1.2,0.1c0.3,0.1,0.4,0.2,0.6,0.5l4,8.1c0.4,0.8,0.9,1.4,1.5,1.7c0.6,0.3,1.4,0.4,2.3,0.4h3.3 l-0.3-0.7C51.9,29.3,49.8,25.4,49.5,24.7z"}),_react2.default.createElement("path",{fill:"inherit",d:"M72.9,4.4h-2.2c-0.9,0-1.6,0.2-2.1,0.7c-0.5,0.5-0.7,1.2-0.7,2.1v7.7h-8.2V7.2c0-0.9-0.2-1.6-0.7-2.1 c-0.5-0.5-1.2-0.7-2.1-0.7h-2.6v5.1v4.7V30h5.5V19.6h8.2V30h5.5V14.5v-5V4.4H72.9z"}),_react2.default.createElement("path",{fill:"inherit",d:"M89.6,4.4h-5.4l-0.1,0.3L74.9,30h3.4c0.9,0,1.6-0.1,2.1-0.5c0.6-0.4,0.9-1,1.2-1.8l1.4-4h7.7l1.4,4 c0.3,0.8,0.6,1.4,1.2,1.8c0.6,0.4,1.3,0.5,2.2,0.5h3.4L89.6,4.4z M86.9,11.3c0.2,0.7,0.4,1.5,0.6,2.1l1.9,5.6h-5l1.9-5.6 C86.5,12.8,86.7,12,86.9,11.3z"}),_react2.default.createElement("path",{fill:"inherit",d:"M119.9,4.4h-2.2c-0.9,0-1.6,0.2-2.1,0.7c-0.5,0.5-0.7,1.2-0.7,2.1v11.3c0,0.4,0,0.8,0,1.2 c-0.3-0.7-0.7-1.4-1.1-1.9l-8.1-13.4h-5.3v18v2.5V30h2.6c0,0,0,0,0,0c0.9,0,1.6-0.2,2.1-0.7c0.5-0.5,0.7-1.2,0.7-2.1V15.9 c0-0.4,0-0.8,0-1.2c0.3,0.7,0.7,1.4,1.1,1.9l8.2,13.4h5.2V13.4v-4V4.4H119.9z"}),_react2.default.createElement("path",{fill:"inherit",d:"M131.8,4.5h2.7l9.7,25.4h-0.8c-1.8,0-2.3-0.4-3-2.1l-2.3-6h-10.1l-2.3,6c-0.7,1.7-1.1,2.1-2.9,2.1h-0.7 L131.8,4.5z M137.5,19.7l-3.4-9.1c-0.4-1.2-1-3.3-1-3.3h-0.1c0,0-0.5,2.1-1,3.3l-3.3,9.1H137.5z"}),_react2.default.createElement("path",{fill:"inherit",d:"M163.1,10.7c-1-2.1-3.8-4.5-7.8-4.5c-5.6,0-10,4.4-10,10.6c0,6.1,4.3,11,10.1,11c2.8,0,5-0.9,6.3-1.9 c1.7-1.2,3.4,0.2,3.4,0.2s-3.5,4.1-9.8,4.1c-7.5,0-12.7-5.9-12.7-13.3c0-7.3,5.4-13,12.6-13c3.6,0,8.1,1.6,9.8,5.4 c0.8,1.7,0.9,2.6,0.9,2.6S163.8,12.1,163.1,10.7z"}),_react2.default.createElement("path",{fill:"inherit",d:"M175.3,4.5h2.7l9.7,25.4h-0.8c-1.8,0-2.3-0.4-3-2.1l-2.3-6h-10.1l-2.3,6c-0.7,1.7-1.1,2.1-2.9,2.1h-0.7 L175.3,4.5z M181,19.7l-3.4-9.1c-0.4-1.2-1-3.3-1-3.3h-0.1c0,0-0.5,2.1-1,3.3l-3.3,9.1H181z"}),_react2.default.createElement("path",{fill:"inherit",d:"M197.1,4.5h-7.9v2.2v2.2v18.8c0,1.6,0.7,2.2,2.2,2.2h5.6c7.7,0,12.8-4.6,12.8-12.7 C209.9,9.2,204.8,4.5,197.1,4.5z M196.8,27.7h-4.3c-0.5,0-0.8-0.3-0.8-0.8V6.8h5.1c6.2,0,10.4,3.7,10.4,10.5 C207.2,24,203.1,27.7,196.8,27.7z"}),_react2.default.createElement("path",{fill:"inherit",d:"M224.2,27.7h-2.6h-6.3c-0.5,0-0.8-0.3-0.8-0.8v-8.6h9.6V16h-9.6V6.8h6.5h2.2h3.2v0c0-1.6-0.7-2.2-2.2-2.2 H212v2.2v2.9v18.1c0,1.6,0.7,2.2,2.2,2.2h11c1.6,0,2.2-0.7,2.2-2.2v0H224.2z"}),_react2.default.createElement("path",{fill:"inherit",d:"M231.1,4.5h2.6l6.7,14.8c0.6,1.3,1.3,3,1.3,3h0.1c0,0,0.7-1.7,1.2-3l6.7-14.8h2.6l2.2,25.4h-0.7 c-1.6,0-2.1-0.7-2.2-2.2l-1.2-15.4c-0.1-1.4-0.1-3.5-0.1-3.5h-0.1c0,0-0.7,2.2-1.3,3.5l-6,12.9h-2.3l-6-12.9 c-0.6-1.3-1.3-3.6-1.3-3.6h-0.1c0,0,0,2.2-0.1,3.6l-1.2,15.4c-0.1,1.6-0.7,2.2-2.2,2.2H229L231.1,4.5z"}),_react2.default.createElement("path",{fill:"inherit",d:"M263.3,18.9l-8.9-14.4h0.8c1.7,0,2.4,0.3,3.5,2l4.3,7.2c0.8,1.3,1.6,2.9,1.6,2.9h0.1c0,0,0.8-1.5,1.6-2.9 l4.3-7.2c1.1-1.8,1.7-2,3.5-2h0.8l-8.9,14.4V30h-2.5V18.9z"})),_react2.default.createElement("path",{fill:"#9DB63B",d:"M3.4,28.4c0,0-4.1-9.7,3.2-16.9c6.6-6.6,16.5-7.6,18.3-7.6c0,0,2.7,8.8-4,18.7C14.2,32.5,5,29.8,5,29.8 s9.1-11.6,8-11.6C12.3,18.3,7.5,23.6,3.4,28.4z"}))
return _react2.default.createElement("a",babelHelpers.extends({},this.props.linkAttributes,{"data-test-id":"header-logo",href:"/","aria-label":"Khan Academy",className:_aphrodite.css.apply(undefined,this.props.logoStyles),onClick:this.props.onClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),e)}
return t}(_react2.default.Component)
HeaderLogo.propTypes={linkAttributes:_propTypes2.default.objectOf(_propTypes2.default.any),logoStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),onClick:_propTypes2.default.func,transparent:_propTypes2.default.bool}
HeaderLogo.defaultProps={onClick:function e(){}}
var styles=_aphrodite.StyleSheet.create({logoSvg:{width:150,fill:_constants2.default.textColor,":hover":{fill:"#1865F2"}},transparent:{fill:_constants2.default.white}})
module.exports=HeaderLogo
});
KAdefine("javascript/page-package/notifications-list.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var _require2=require("../shared-package/i18n.js"),$_=_require2.$_
var Spinner=require("../shared-components-package/spinner.jsx")
var NotificationsList=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
var i=babelHelpers.possibleConstructorReturn(this,e.call(this))
i.state={ReadableNotification:null}
i._hasUnmounted=false
i.navigableChildren=[]
return i}t.prototype.componentDidMount=function i(){var e=this
require.dynimport("../notifications-package/readable-notification.jsx").then(function(t){if(!e._hasUnmounted){e.setState({ReadableNotification:t})}})}
t.prototype.componentWillUnmount=function n(){this._hasUnmounted=true}
t.prototype.setLinkRef=function a(e,t){var i=this.props.captureFirstNavigableChildRef
this.navigableChildren[t]=e
if(t===0&&i){i(e)}}
t.prototype.getClickedNavigableIndex=function o(e){return parseInt(e.target.parentNode.getAttribute("data-navigable-index"))}
t.prototype.handleKeyDownLink=function r(e){var t=this.props.onDropdownClose
if(e.key==="Escape"){e.preventDefault()
if(t){this.onDropdownClose()}}else if(e.key==="Tab"){if(t){this.onDropdownClose()}}else if(e.key==="ArrowDown"){e.preventDefault()
var i=this.getClickedNavigableIndex(e)
if(i===this.navigableChildren.length-1){return}var n=this.navigableChildren[i+1]
n.firstChild.focus()}else if(e.key==="ArrowUp"){e.preventDefault()
var a=this.getClickedNavigableIndex(e)
if(a===0){this.props.navigateToNotificationsSwitch(e)}else{var o=this.navigableChildren[a-1]
o.firstChild.focus()}}}
t.prototype.render=function s(){var e=this
var t=this.props,i=t.loading,n=t.notifications,a=t.tabbable
var o=this.state.ReadableNotification
var r=n.length>0
var s=i||r&&!o
return React.createElement("ul",{"data-test-id":"notifications-dropdown"},!i&&!r&&React.createElement("li",{className:css(styles.empty)},$_(null,"No notifications. You can get back to learning!")),o&&n.map(function(t,i){return React.createElement("li",{key:i},React.createElement(o,babelHelpers.extends({},t,{innerRef:function n(t){return e.setLinkRef(t,i)},onKeyDown:function r(t){return e.handleKeyDownLink(t)},indexInNotificationsList:i,tabbable:a})))}),s&&React.createElement("li",{className:css(styles.empty,r&&styles.loadingMore)},React.createElement(Spinner,null)))}
return t}(React.Component)
NotificationsList.propTypes={loading:PropTypes.bool,notifications:PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,onDropdownClose:PropTypes.func,captureFirstNavigableChildRef:PropTypes.func,navigateToNotificationsSwitch:PropTypes.func,tabbable:React.PropTypes.bool}
NotificationsList.getDefaultProps={loading:false,notifications:[],onDropdownClose:function e(){},captureFirstNavigableChildRef:function t(){},navigateToNotificationsSwitch:function i(){}}
var styles=StyleSheet.create({empty:{alignItems:"center",display:"flex",height:150,justifyContent:"center"},loadingMore:{height:18}})
module.exports=NotificationsList
});
KAdefine("javascript/page-package/notifications-switch.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _iconAngleBracketLeft=require("../shared-styles-package/icon.angleBracketLeft.js")
var _iconAngleBracketLeft2=babelHelpers.interopRequireDefault(_iconAngleBracketLeft)
var _require=require("../shared-package/i18n.js"),$_=_require.$_
var NotificationsSwitch=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,o
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,s=Array(l),n=0;n<l;n++){s[n]=arguments[n]}return o=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a),a.handleClick=function(e){var t=a.props.onClick
if(t){e.preventDefault()
t()}},a.handleKeyDown=function(e){var t=a.props,r=t.onClick,o=t.onEscape,l=t.onArrowDown,s=t.onArrowUp
if((e.key==="Enter"||e.key===" ")&&r){e.preventDefault()
r()}else if(e.key==="Escape"&&o){e.preventDefault()
o()}else if(e.key==="Tab"&&o){o()}else if(e.key==="ArrowDown"&&l){e.preventDefault()
l()}else if(e.key==="ArrowUp"&&s){e.preventDefault()
s()}},r),babelHelpers.possibleConstructorReturn(a,o)}t.prototype.render=function r(){var e=this.props,t=e.buttonStyles,r=e.direction,a=e.notificationCount
return _react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.listItem)},_react2.default.createElement("button",{ref:this.props.innerRef,onClick:this.handleClick,onKeyDown:this.handleKeyDown,className:_aphrodite.css.apply(undefined,[styles.notAButton,styles.switch].concat(t)),"data-test-id":"header-notifications-switch"},r==="left"&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.switchArrow,styles.switchArrowLeft)},_react2.default.createElement(_icon2.default,{icon:_iconAngleBracketLeft2.default,size:15,color:_globalStyles2.default.colors.gray17})),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.switchText)},$_(null,"Notifications"),_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.dot)},"·"),a),r==="right"&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.switchArrow,styles.switchArrowRight)},_react2.default.createElement(_icon2.default,{icon:_iconAngleBracketLeft2.default,size:15,color:_globalStyles2.default.colors.gray17}))))}
return t}(_react.Component)
NotificationsSwitch.propTypes={buttonStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),direction:_propTypes2.default.oneOf(["left","right"]).isRequired,notificationCount:_propTypes2.default.number.isRequired,onClick:_propTypes2.default.func,onEscape:_propTypes2.default.func,onArrowDown:_propTypes2.default.func,onArrowUp:_propTypes2.default.func,innerRef:_propTypes2.default.func}
var styles=_aphrodite.StyleSheet.create({notAButton:{background:"transparent",border:"none",padding:"none",width:"100%",textAlign:"left"},dot:{padding:"0 7px"},listItem:{paddingTop:4,backgroundColor:_globalStyles2.default.colors.white,listStyleType:"none"},"switch":{alignItems:"center",borderBottom:"1px solid rgba(0, 0, 0, 0.1)",boxSizing:"border-box",color:"inherit",display:"flex",justifyContent:"space-around",padding:"8px 16px 12px 16px",textDecoration:"none"},switchText:babelHelpers.extends({},_globalStyles2.default.typography.bodyXsmallBold,{fontSize:15,fontWeight:600,lineHeight:"22px",flexGrow:1}),switchArrow:{alignItems:"center",display:"flex",justifyContent:"center"},switchArrowLeft:{marginRight:24},switchArrowRight:{transform:"scaleX(-1)"}})
module.exports=NotificationsSwitch
});
KAdefine("javascript/page-package/user-dropdown.jsx", function(require, module, exports) {
var _wrapper,_shortTrigger
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _bigBingoLinks=require("./big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var _dropdownButton=require("./dropdown-button.jsx")
var _dropdownButton2=babelHelpers.interopRequireDefault(_dropdownButton)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _headerDropdown=require("./header-dropdown.jsx")
var _headerDropdown2=babelHelpers.interopRequireDefault(_headerDropdown)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _notificationsList=require("./notifications-list.jsx")
var _notificationsList2=babelHelpers.interopRequireDefault(_notificationsList)
var _notificationsSwitch=require("./notifications-switch.jsx")
var _notificationsSwitch2=babelHelpers.interopRequireDefault(_notificationsSwitch)
var _userSettings=require("./user-settings.jsx")
var _userSettings2=babelHelpers.interopRequireDefault(_userSettings)
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var UserDropdown=function(e){babelHelpers.inherits(o,e)
function o(){var t,i,r
babelHelpers.classCallCheck(this,o)
for(var a=arguments.length,n=Array(a),s=0;s<a;s++){n[s]=arguments[s]}return r=(t=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),i),i.state={showNotifications:!!i.props.showNotifications},i.dropdownButton=null,i.notificationsSwitch=null,i.focusDropdownButton=function(){if(i.dropdownButton){i.dropdownButton.focus()}},i.handleDropdownClose=function(){i.focusDropdownButton()
i.props.onDropdownClose()},i.handleScroll=function(e){if(!i.state.showNotifications){return}var o=e.target,t=o.scrollHeight,r=o.clientHeight,a=o.scrollTop
var n=2
if(a+r>=t-n){i.props.onScrollToBottom()
e.preventDefault()}},i.handleNavigateToNotificationsSwitch=function(e){if(i.props.showDropdown&&i.notificationsSwitch){e.preventDefault()
i.notificationsSwitch.focus()}},i.handleToggleClick=function(){i.setState({showNotifications:!i.state.showNotifications})},i.handleArrowDownNotificationsSwitch=function(){if(i.firstNavigableChild&&i.firstNavigableChild.firstChild){i.firstNavigableChild.firstChild.focus()}},i.handleArrowUpNotificationsSwitch=function(){i.handleDropdownClose()},t),babelHelpers.possibleConstructorReturn(i,r)}o.prototype.componentDidMount=function t(){if(this.props.showNotifications){this.props.onOpenNotifications()}}
o.prototype.componentDidUpdate=function i(e,o){if(!o.showNotifications&&this.state.showNotifications){this.props.onOpenNotifications()
_bigbingo2.default.markConversion("global_nav_open_notifications",{view:"desktop"})}}
o.prototype.render=function r(){var e=this
var o=this.state.showNotifications
var t=this.props,i=t.profileData,r=t.newNotificationCount
var a=KA.featureFlag("SHOW_LOGGED_IN_DONATE_LINK")
var n=r>9?"9+":r
return _react2.default.createElement("div",{role:"navigation",className:(0,_aphrodite.css)(styles.wrapper)},_react2.default.createElement(_dropdownButton2.default,{dropdownIsOpen:this.props.showDropdown,innerRef:function s(o){return e.dropdownButton=o},buttonStyles:this.props.buttonStyles,onClick:this.props.onDropdownToggle,onArrowDown:this.handleNavigateToNotificationsSwitch,onEscape:this.handleDropdownClose,testId:"user-dropdown"},_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.trigger,a&&styles.shortTrigger),"data-test-id":"header-profile-button"},_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.nicknameDisplay)},i.nickName),r>0&&_react2.default.createElement("div",{"aria-label":i18n.ngettext("1 new notification","%(num)s new notifications",r),className:(0,_aphrodite.css)(styles.notificationsBadge)},n))),_react2.default.createElement(_headerDropdown2.default,{visible:this.props.showDropdown,hasBorder:false,dropdownStyles:[styles.dropdown]},_react2.default.createElement(_notificationsSwitch2.default,{innerRef:function l(o){return e.notificationsSwitch=o},direction:o?"left":"right",onClick:this.handleToggleClick,onArrowDown:this.handleArrowDownNotificationsSwitch,onArrowUp:this.handleArrowUpNotificationsSwitch,onEscape:this.handleDropdownClose,notificationCount:r,buttonStyles:[styles.notificationsSwitch]}),_react2.default.createElement("li",{className:(0,_aphrodite.css)(o&&styles.scrollDropdown),onScroll:this.handleScroll},o?_react2.default.createElement(_notificationsList2.default,{notifications:this.props.notifications,loading:this.props.loading,onDropdownClose:this.handleDropdownClose,navigateToNotificationsSwitch:this.handleNavigateToNotificationsSwitch,captureFirstNavigableChildRef:function p(o){return e.firstNavigableChild=o}}):_react2.default.createElement(_userSettings2.default,babelHelpers.extends({signUpUrl:this.props.signUpUrl},this.props.profileData,{profileLinkAttributes:_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_visit_profile",extra:{view:"desktop"}}]),onCloseDropdown:this.handleDropdownClose,navigateToNotificationsSwitch:this.handleNavigateToNotificationsSwitch,captureFirstNavigableChildRef:function d(o){return e.firstNavigableChild=o}})))))}
return o}(_react.Component)
UserDropdown.propTypes={buttonStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),currentUrl:_propTypes2.default.string,loading:_propTypes2.default.bool.isRequired,newNotificationCount:_propTypes2.default.number.isRequired,notifications:_notificationsList2.default.propTypes.notifications,onDropdownToggle:_propTypes2.default.func,onDropdownClose:_react2.default.PropTypes.func,onOpenNotifications:_propTypes2.default.func,onScrollToBottom:_propTypes2.default.func,profileData:_propTypes2.default.shape(_userSettings2.default.propTypes),showDropdown:_propTypes2.default.bool,showNotifications:_propTypes2.default.bool,signUpUrl:_propTypes2.default.string,teaser:_propTypes2.default.string}
UserDropdown.defaultProps={showDropdown:false,onDropdownToggle:function e(){},onDropdownClose:function o(){},onOpenNotifications:function t(){},onScrollToBottom:function i(){},buttonStyles:[]}
var BADGE_WIDTH=18
var styles=_aphrodite.StyleSheet.create({wrapper:(_wrapper={display:"inline-block",fontFamily:_globalStyles2.default.fonts.regular,height:"100%",position:"relative"},_wrapper[_mediaQueries2.default.smOrSmaller]={display:"none"},_wrapper),trigger:{maxWidth:205,position:"relative",whiteSpace:"nowrap"},shortTrigger:(_shortTrigger={},_shortTrigger[_mediaQueries2.default.mdOrLarger]={maxWidth:115},_shortTrigger[_mediaQueries2.default.lgOrLarger]={maxWidth:205},_shortTrigger),nicknameDisplay:{maxWidth:"100%",display:"block",overflow:"hidden",textOverflow:"ellipsis"},notificationsBadge:babelHelpers.extends({},_globalStyles2.default.typography.labelSmall,{backgroundColor:_globalStyles2.default.colors.kaGreen,borderRadius:BADGE_WIDTH/2,boxSizing:"border-box",color:_globalStyles2.default.colors.white,height:BADGE_WIDTH,lineHeight:BADGE_WIDTH+"px",paddingTop:1,position:"absolute",right:-10,textAlign:"center",top:-7,width:BADGE_WIDTH}),dropdown:{backgroundColor:_globalStyles2.default.colors.gray98,border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:3,right:-8,width:300},scrollDropdown:{height:220,overflowY:"scroll"},notificationsSwitch:{backgroundColor:_globalStyles2.default.colors.white,height:45,":hover":{backgroundColor:_globalStyles2.default.colors.gray95}}})
module.exports=UserDropdown
});
KAdefine("javascript/page-package/user-settings.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _absoluteLinks=require("../shared-package/absolute-links.js")
var _absoluteLinks2=babelHelpers.interopRequireDefault(_absoluteLinks)
var _facebookutil=require("../shared-package/facebookutil.js")
var _facebookutil2=babelHelpers.interopRequireDefault(_facebookutil)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _urls=require("./urls.js")
var _urls2=babelHelpers.interopRequireDefault(_urls)
var _clientLink=require("../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _require=require("../shared-package/i18n.js"),$_=_require.$_
var UserSettings=function(e){babelHelpers.inherits(t,e)
function t(){var a,n,r
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,i=Array(l),o=0;o<l;o++){i[o]=arguments[o]}return r=(a=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),n),n.state={logoutUrl:""},n.navigableChildren=[],n.setLinkRef=function(e,t){n.navigableChildren[t]=e
if(t===0&&n.props.captureFirstNavigableChildRef){n.props.captureFirstNavigableChildRef(e)}},n.getNavigableIndex=function(e){var t=n.props,a=t.showSignUpToSave,r=t.showLearningHome,l=t.showCoachingLinks,i=t.showSettings
var o=0
if(e==="signIn"){return o}else{if(a){o++}}if(e==="profile"){return o}else{o++}if(e==="learningHome"){return o}else{if(r){o++}}if(e==="coachDashboard"){return o}else{if(l){o++}}if(e==="parentDashboard"){return o}else{if(l){o++}}if(e==="settings"){return o}else{if(i){o++}}if(e==="help"){return o}else{o++}return o},n.getClickedNavigableIndex=function(e){var t=e.target.parentNode.getAttribute("data-navigable-index")
return t===undefined?null:parseInt(t)},n.handleLogoutClick=function(e){e.preventDefault()
var t=_urls2.default.getLogoutURL(n.props.currentUrl)
_facebookutil2.default.logout(function(){window.location=t})},n.logSignInClicked=function(){_bigbingo2.default.markConversion("global_nav_phantom_signin_clicked")},n.handleArrowDownLink=function(e){e.preventDefault()
var t=n.getClickedNavigableIndex(e)
if(t===n.navigableChildren.length-1){return}var a=n.navigableChildren[t+1]
a.firstChild.focus()},n.handleArrowUpLink=function(e){e.preventDefault()
var t=n.getClickedNavigableIndex(e)
if(t===0){n.props.navigateToNotificationsSwitch(e)}else{var a=n.navigableChildren[t-1]
a.firstChild.focus()}},n.handleLinkClick=function(e,t){var a=n.props.onCloseDropdown
e.preventDefault()
window.location.href=t
if(a){a()}},n.handleKeyDownLink=function(e,t){var a=n.props.onCloseDropdown
if(e.key==="Enter"||e.key===" "){n.handleLinkClick(e,t)}else if(e.key==="Escape"){e.preventDefault()
if(a){a()}}else if(e.key==="Tab"){if(a){a()}}else if(e.key==="ArrowDown"){n.handleArrowDownLink(e)}else if(e.key==="ArrowUp"){n.handleArrowUpLink(e)}},n.handleKeyDownLogSignIn=function(e){var t=n.props.profileUrl
if(e.key==="Enter"||e.key===" "){n.logSignInClicked(e)}n.handleKeyDownLink(e,t)},a),babelHelpers.possibleConstructorReturn(n,r)}t.prototype.componentDidMount=function a(){this.setState({logoutUrl:_urls2.default.getLogoutURL(this.props.currentUrl)})}
t.prototype.render=function n(){var e=this
var t=this.props,a=t.showSettings,n=t.showSignUpToSave,r=t.showLearningHome,l=t.showCoachingLinks,i=t.hasStudents,o=t.hasChildren,s=t.signUpUrl,u=t.profileUrl,d=t.isPhantom,c=t.tabbable
var p=_absoluteLinks2.default.safeLinkTo("https://khanacademy.zendesk.com")
var f="/coach/dashboard"
var g="/?learn=1"
return _react2.default.createElement("ul",{className:(0,_aphrodite.css)(styles.menu),"data-test-id":"header-user-settings"},n&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("signIn"),ref:function b(t){return e.setLinkRef(t,e.getNavigableIndex("signIn"))}},_react2.default.createElement("a",{href:s,className:(0,_aphrodite.css)(styles.item,styles.itemFirst,styles.signIn),onClick:this.logSignInClicked,onKeyDown:this.handleKeyDownLogSignIn,tabIndex:c?0:-1},$_(null,"Sign in to claim your points"))),_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("profile"),ref:function h(t){return e.setLinkRef(t,e.getNavigableIndex("profile"))}},_react2.default.createElement("a",babelHelpers.extends({},this.props.profileLinkAttributes,{href:u,onKeyDown:function _(t){return e.handleKeyDownLink(t,u)},className:(0,_aphrodite.css)(styles.item,!n&&styles.itemFirst),tabIndex:c?0:-1,ref:function k(t){return e.setLinkRef(t,e.getNavigableIndex("profile"))},"data-test-id":"user-settings-profile-link"}),$_(null,"Profile"))),r&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("learningHome"),ref:function v(t){return e.setLinkRef(t,e.getNavigableIndex("learningHome"))}},_react2.default.createElement(_clientLink2.default,{to:"/?learn=1",className:(0,_aphrodite.css)(styles.item),onClick:function y(t){return e.handleLinkClick(t,g)},onKeyDown:function m(t){return e.handleKeyDownLink(t,g)},tabIndex:c?0:-1},$_(null,"Learning home"))),l&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("coachDashboard"),ref:function L(t){return e.setLinkRef(t,e.getNavigableIndex("coachDashboard"))}},_react2.default.createElement(_clientLink2.default,{to:"/coach/dashboard",className:(0,_aphrodite.css)(styles.item),onClick:function w(t){return e.handleLinkClick(t,f)},onKeyDown:function D(t){return e.handleKeyDownLink(t,f)},tabIndex:c?0:-1},i?$_(null,"Coach dashboard"):$_(null,"Add students"))),l&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("parentDashboard"),ref:function x(t){return e.setLinkRef(t,e.getNavigableIndex("parentDashboard"))}},_react2.default.createElement("a",{href:"/parent",className:(0,_aphrodite.css)(styles.item),tabIndex:c?0:-1,onKeyDown:function C(t){return e.handleKeyDownLink(t,"/parent")}},o?$_(null,"Your children"):$_(null,"Add children"))),a&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("settings"),ref:function I(t){return e.setLinkRef(t,e.getNavigableIndex("settings"))}},_react2.default.createElement("a",{href:"/settings/account",className:(0,_aphrodite.css)(styles.item),tabIndex:c?0:-1,onKeyDown:function N(t){return e.handleKeyDownLink(t,"/settings/account")}},$_(null,"Settings"))),_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("help"),ref:function S(t){return e.setLinkRef(t,e.getNavigableIndex("help"))}},_react2.default.createElement("a",{href:p,className:(0,_aphrodite.css)(styles.item),tabIndex:c?0:-1,onKeyDown:function T(t){return e.handleKeyDownLink(t,p)}},$_(null,"Help"))),!d&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("logout"),ref:function R(t){return e.setLinkRef(t,e.getNavigableIndex("logout"))}},_react2.default.createElement("a",{className:(0,_aphrodite.css)(styles.item,styles.itemLast),onClick:this.handleLogoutClick,onKeyDown:function U(t){return e.handleKeyDownLink(t,e.state.logoutUrl)},href:this.state.logoutUrl,rel:"nofollow",tabIndex:c?0:-1,"data-test-id":"user-settings-logout-link"},$_(null,"Log out"))))}
return t}(_react2.default.Component)
UserSettings.propTypes={currentUrl:_propTypes2.default.string,hasChildren:_propTypes2.default.bool,hasStudents:_propTypes2.default.bool,profileLinkAttributes:_propTypes2.default.objectOf(_propTypes2.default.any),profileUrl:_propTypes2.default.string.isRequired,showCoachingLinks:_propTypes2.default.bool,showLearningHome:_propTypes2.default.bool,showSettings:_propTypes2.default.bool,showSignUpToSave:_propTypes2.default.bool,signUpUrl:_propTypes2.default.string,isPhantom:_propTypes2.default.bool.isRequired,captureFirstNavigableChildRef:_react2.default.PropTypes.func,onCloseDropdown:_react2.default.PropTypes.func,navigateToNotificationsSwitch:_react2.default.PropTypes.func,tabbable:_react2.default.PropTypes.bool}
var styles=_aphrodite.StyleSheet.create({menu:babelHelpers.extends({},_globalStyles2.default.typography.bodyXsmallBold),item:{backgroundColor:_globalStyles2.default.colors.gray98,color:_globalStyles2.default.colors.gray17,display:"block",padding:"8px 16px",textDecoration:"none",":hover":{backgroundColor:_globalStyles2.default.colors.gray95,color:_globalStyles2.default.domainColors("default").domain3}},itemFirst:{paddingTop:16},itemLast:{paddingBottom:12,marginBottom:4},signIn:{color:_globalStyles2.default.colors.kaGreen}})
module.exports=UserSettings
});
KAdefine("javascript/page-package/header-search-box.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var _require=require("aphrodite"),css=_require.css
var BibliotronHeaderSearchBox=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function s(){var e=this.props,r=e.onEscape,s=e.SearchBox,a=e.searchInputStyles,o=e.searchFormStyles,p=e.spacer,i=e.suggestionSource
var t=i18n._("Search for subjects, skills, and videos")
var n={searchSuggestion:i}
return React.createElement(s,{isBibliotron:true,inputClassName:css.apply(undefined,a),formClassName:css.apply(undefined,o),placeholder:t,dataSources:n,initiallyFocused:true,showGoogleResults:!KA.isZeroRated,extraFormArgs:{referer:window.location.pathname},spacer:p,onEscape:r})}
return r}(React.Component)
BibliotronHeaderSearchBox.propTypes={SearchBox:PropTypes.any.isRequired,onEscape:PropTypes.func.isRequired,searchFormStyles:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),searchInputStyles:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),spacer:PropTypes.node.isRequired,suggestionSource:PropTypes.shape({get:PropTypes.func.isRequired}).isRequired}
module.exports=BibliotronHeaderSearchBox
});
KAdefine("javascript/page-package/domain-utils.js", function(require, module, exports) {
var PropTypes=require("prop-types")
var i18n=require("../shared-package/i18n.js")
var domainObjectPropType=PropTypes.shape({translatedTitle:PropTypes.string.isRequired,icon:PropTypes.string,identifier:PropTypes.string.isRequired,href:PropTypes.string,numUntranslatedChildren:PropTypes.number.isRequired,children:PropTypes.arrayOf(PropTypes.shape({identifier:PropTypes.string.isRequired,translatedTitle:PropTypes.string.isRequired,translatedDescription:PropTypes.string,href:PropTypes.string.isRequired,missionSlug:PropTypes.string,gradeMenuTitle:PropTypes.string}).isRequired)})
var domainTransformers={math:function e(r,i){var t=r.childrenByGradeLevel
return["grades","secondary","fundamentals"].map(function(e){var r=t[e]
if(r){var n=r.children
if(e==="secondary"&&i){n=n.concat([{identifier:"all-of-math",translatedTitle:i18n._("All of math"),href:"/mission/math"}])}if(e==="grades"){n=n.map(function(e){return babelHelpers.extends({},e,{translatedTitle:e.gradeMenuTitle})})}return{identifier:e,title:r.header,children:n}}}).filter(function(e){return e})},humanities:function r(e){if(e.otherHumanitiesChildren&&e.artHistoryChildren){return[{identifier:"other-humanities",title:i18n._("Humanities"),children:e.otherHumanitiesChildren},{identifier:"art-history",title:i18n._("Art history"),children:e.artHistoryChildren}]}else{return domainTransformers["default"](e)}},"partner-content":function i(e){return[{identifier:"museum",title:i18n._("Museums"),children:e.museumChildren},{identifier:"other-partner-content",title:i18n._("Partners"),children:e.otherPartnerContentChildren}]},"test-prep":function t(e){return[{identifier:"sat-practice",title:i18n._("Official SAT Practice"),children:e.satChildren},{identifier:"other-test-prep-content",title:i18n._("Other tests"),children:e.otherTestPrepChildren}]},"default":function n(e){return[{identifier:e.identifier,title:i18n._("Subjects"),children:e.children}]}}
var transformDomainIntoSubgroups=function s(e,r){if(e.identifier in domainTransformers){return domainTransformers[e.identifier](e,r)}else{return domainTransformers["default"](e,r)}}
module.exports={transformDomainIntoSubgroups:transformDomainIntoSubgroups,domainObjectPropType:domainObjectPropType}
});
KAdefine("javascript/page-package/learn-menu.jsx", function(require, module, exports) {
var _wrapper
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _learnMenuContent=require("./learn-menu-content.jsx")
var _learnMenuContent2=babelHelpers.interopRequireDefault(_learnMenuContent)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _dropdownButton=require("./dropdown-button.jsx")
var _dropdownButton2=babelHelpers.interopRequireDefault(_dropdownButton)
var _headerDropdown=require("./header-dropdown.jsx")
var _headerDropdown2=babelHelpers.interopRequireDefault(_headerDropdown)
var i18n=require("../shared-package/i18n.js")
var $_=i18n.$_
var dropdownIcon="M5,6L0,0L10,0"
var pullupIcon="M5,0L10,6L0,6"
var LearnMenu=function(e){babelHelpers.inherits(r,e)
function r(){var o,t,a
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,l=Array(n),s=0;s<n;s++){l[s]=arguments[s]}return a=(o=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),t),t.state={hover:false},t.firstNavigableChild=null,t.handleLearnMenuClose=function(){if(t.dropdownButton){t.dropdownButton.focus()}t.props.onDropdownClose()},t.handleArrowDown=function(e){if(t.props.showDropdown&&t.firstNavigableChild&&t.firstNavigableChild.firstChild){e.preventDefault()
t.firstNavigableChild.firstChild.focus()}},o),babelHelpers.possibleConstructorReturn(t,a)}r.prototype.render=function o(){var e=this
if(this.props.domains.length===0){return _react2.default.createElement("div",null)}var r=this.props.transparent?"rgba(255, 255, 255, 0.48)":_globalStyles2.default.colors.gray76
if(this.state.hover){r=_globalStyles2.default.colors.kaGreen}return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.wrapper)},_react2.default.createElement(_dropdownButton2.default,{onClick:this.props.onDropdownToggle,onEscape:this.props.onDropdownClose,onArrowDown:this.handleArrowDown,buttonStyles:this.props.buttonStyles,onMouseEnter:function o(){return e.setState({hover:true})},onMouseLeave:function t(){return e.setState({hover:false})},testId:"learn-menu-dropdown",innerRef:function a(r){return e.dropdownButton=r}},_react2.default.createElement("span",{"data-learn-menu-trigger":true,"data-test-id":"learn-menu-button"},$_(null,"Subjects"),_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.triangle)},_react2.default.createElement(_icon2.default,{icon:this.props.showDropdown?pullupIcon:dropdownIcon,size:10,color:r})))),_react2.default.createElement(_headerDropdown2.default,{visible:this.props.showDropdown,hasBorder:false,dropdownStyles:[styles.dropdown,this.props.showWelcome&&styles.dropdownWelcome],id:"header-dropdown"},_react2.default.createElement(_learnMenuContent2.default,{domains:this.props.domains,missionPercentages:this.props.missionPercentages,onClickLink:this.props.onDropdownToggle,onEscape:function n(){return e.handleLearnMenuClose()},ref:function l(r){return e.learnMenuContent=r},captureFirstNavigableChildRef:function s(r){return e.firstNavigableChild=r}})))}
return r}(_react2.default.Component)
LearnMenu.propTypes={buttonStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),domains:_learnMenuContent2.default.propTypes.domains,missionPercentages:_propTypes2.default.objectOf(_propTypes2.default.number),onDropdownToggle:_propTypes2.default.func,onDropdownClose:_react2.default.PropTypes.func,showDropdown:_propTypes2.default.bool,showWelcome:_propTypes2.default.bool,transparent:_propTypes2.default.bool}
LearnMenu.defaultProps={onDropdownToggle:function e(){},onDropdownClose:function r(){},showDropdown:false,transparent:false,buttonStyles:[]}
var styles=_aphrodite.StyleSheet.create({wrapper:(_wrapper={display:"inline-block",height:"100%",whiteSpace:"nowrap"},_wrapper[_mediaQueries2.default.smOrSmaller]={display:"none"},_wrapper),dropdown:{background:_globalStyles2.default.colors.gray98,borderBottom:"1px solid "+_globalStyles2.default.colors.gray85,borderTop:"1px solid "+_globalStyles2.default.colors.gray85,left:0,opacity:.99,width:"100%"},dropdownWelcome:{overflowY:"scroll"},triangle:{marginLeft:6,position:"relative",top:3}})
module.exports=LearnMenu
});
KAdefine("javascript/page-package/learn-menu-content.jsx", function(require, module, exports) {
var _domainsFiveColumns
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _domainUtils=require("./domain-utils.js")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _clientLink=require("../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var i18n=require("../shared-package/i18n.js")
var $_=i18n.$_
var LearnMenuContent=function(e){babelHelpers.inherits(a,e)
function a(){var t,n,r
babelHelpers.classCallCheck(this,a)
for(var i=arguments.length,l=Array(i),o=0;o<i;o++){l[o]=arguments[o]}return r=(t=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),n),n.navigableChildren=[],n.setLinkRef=function(e,a){n.navigableChildren[a]=e
if(a===0){n.props.captureFirstNavigableChildRef(e)}},n.getNavigableIndex=function(e,a){if(a===null&&!e){return 0}var t=a!==null?e+1:e
var r=n.props.domains.slice(0,e)
var i=r.reduce(function(e,a){return e+=a.children.length},0)
var l=a||0
return t+i+l},n.getClickedNavigableIndex=function(e){return parseInt(e.target.parentNode.getAttribute("data-navigable-index"))},n.handleKeyDownLink=function(e,a){if(e.key==="Enter"||e.key===" "){e.preventDefault()
window.location.href=a
n.props.onClickLink()}else if(e.key==="Escape"){e.preventDefault()
n.props.onEscape()}else if(e.key==="Tab"){n.props.onEscape()}else if(e.key==="ArrowDown"){e.preventDefault()
var t=n.getClickedNavigableIndex(e)
if(t===n.navigableChildren.length-1){return}var r=n.navigableChildren[t+1]
r.firstChild.focus()}else if(e.key==="ArrowUp"){e.preventDefault()
var i=n.getClickedNavigableIndex(e)
if(i===0){n.props.onEscape()}else{var l=n.navigableChildren[i-1]
l.firstChild.focus()}}},n.renderLink=function(e,a,t,r){var i=_ka2.default.getUserProfile()
var l=i&&!i.isPhantom()
var o=!l&&e.loggedOutHref?e.loggedOutHref:e.href
var s=n.props.missionPercentages
var d=s&&s[e.identifier]
var u=n.getNavigableIndex(r,a)
return _react2.default.createElement("li",{key:e.identifier,"data-navigable-index":u,ref:function c(e){return n.setLinkRef(e,u)}},_react2.default.createElement(_clientLink2.default,{onClick:n.props.onClickLink,onKeyDown:function p(e){return n.handleKeyDownLink(e,o)},to:o,tabIndex:-1,style:[linkStyles[t.identifier]],conversions:[{id:"global_nav_choose_subject",extra:{domain:t.identifier,subject:e.identifier,view:"desktop"}}],"aria-label":e.translatedTitle},_react2.default.createElement("span",null,e.translatedTitle),!!d&&_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.missionPercentage)},$_({missionPercentage:d},"%(missionPercentage)s%"))))},n.renderHeaderLink=function(e,a){if(!e.href){return e.translatedTitle}var t=n.getNavigableIndex(a,null)
return _react2.default.createElement("li",{"data-navigable-index":t,ref:function r(e){return n.setLinkRef(e,t)}},_react2.default.createElement(_clientLink2.default,{onClick:n.props.onClickLink,onKeyDown:function i(a){return n.handleKeyDownLink(a,e.href)},tabIndex:-1,to:e.href,style:[headerLinkStyles[e.identifier]],conversions:[{id:"global_nav_choose_domain",extra:{domain:e.identifier,view:"desktop"}}]},e.translatedTitle))},n.renderDomain=function(e,a){return _react2.default.createElement("li",{key:a},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.domain)},_react2.default.createElement("h2",{"data-test-learn-menu-domain":e.identifier,className:(0,_aphrodite.css)(headerStyles[e.identifier])},n.renderHeaderLink(e,a)),_react2.default.createElement("ul",{className:(0,_aphrodite.css)(e.children.length&&styles.subjectsList)},e.children.map(function(t,r){return n.renderLink(t,r,e,a)}))))},t),babelHelpers.possibleConstructorReturn(n,r)}a.prototype.render=function t(){var e=this.props.domains.length>=7
return _react2.default.createElement("ul",{className:(0,_aphrodite.css)(styles.domains,e&&styles.domainsFiveColumns),"data-test-id":"learn-menu"},this.props.domains.map(this.renderDomain))}
return a}(_react.Component)
LearnMenuContent.propTypes={domains:_propTypes2.default.arrayOf(_domainUtils.domainObjectPropType).isRequired,missionPercentages:_propTypes2.default.objectOf(_propTypes2.default.number),onClickLink:_propTypes2.default.func,onEscape:_propTypes2.default.func,captureFirstNavigableChildRef:_propTypes2.default.func}
var linkFontSize=15
var linkLineHeight=1.75
var gapBetweenStackedDomains=Math.floor(linkFontSize*linkLineHeight)
var styles=_aphrodite.StyleSheet.create({domains:{boxSizing:"border-box",marginLeft:"auto",marginRight:"auto",maxWidth:1200,paddingLeft:20,paddingRight:20,paddingTop:28,paddingBottom:48-gapBetweenStackedDomains,columnCount:4},domainsFiveColumns:(_domainsFiveColumns={},_domainsFiveColumns[_mediaQueries2.default.xl]={columnCount:5},_domainsFiveColumns),domain:{display:"inline-block",marginBottom:gapBetweenStackedDomains-4,paddingTop:4,wordWrap:"break-word",width:"95%"},subjectsList:{borderTop:"1px solid "+_globalStyles2.default.colors.gray85,paddingTop:8},missionPercentage:{color:_globalStyles2.default.colors.gray68,marginLeft:8,textDecoration:"none"}})
var linkStyles=_globalStyles2.default.makeDomainStylesForTemplate(function(e){return{color:_globalStyles2.default.domainColors(e).domain3,fontFamily:_globalStyles2.default.fonts.regular,fontSize:linkFontSize,lineHeight:linkLineHeight,textDecoration:"none",display:"inline-block",width:"100%",":hover span:first-child":{textDecoration:"underline"}}})
var headerStyles=_globalStyles2.default.makeDomainStylesForTemplate(function(e){return{color:_globalStyles2.default.domainColors(e).domain3,fontFamily:"inherit",fontSize:linkFontSize,fontWeight:"bold",lineHeight:linkLineHeight,paddingBottom:8,marginBottom:0}})
var headerLinkStyles=_globalStyles2.default.makeDomainStylesForTemplate(function(e){return{color:_globalStyles2.default.colors.gray25,display:"inline-block",width:"100%",":hover":{color:_globalStyles2.default.domainColors(e).domain3,textDecoration:"none"}}})
module.exports=LearnMenuContent
});
KAdefine("javascript/page-package/responsive-nav-menu.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _aphroditeCssTransitionGroup=require("../shared-styles-package/aphrodite-css-transition-group.jsx")
var _aphroditeCssTransitionGroup2=babelHelpers.interopRequireDefault(_aphroditeCssTransitionGroup)
var _a11y=require("../shared-styles-package/a11y.js")
var _a11y2=babelHelpers.interopRequireDefault(_a11y)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _bigBingoLinks=require("./big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var _clientLink=require("../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _facebookutil=require("../shared-package/facebookutil.js")
var _facebookutil2=babelHelpers.interopRequireDefault(_facebookutil)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _notificationsList=require("./notifications-list.jsx")
var _notificationsList2=babelHelpers.interopRequireDefault(_notificationsList)
var _notificationsSwitch=require("./notifications-switch.jsx")
var _notificationsSwitch2=babelHelpers.interopRequireDefault(_notificationsSwitch)
var _urls=require("./urls.js")
var _urls2=babelHelpers.interopRequireDefault(_urls)
var _constants=require("../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _userSettings=require("./user-settings.jsx")
var _userSettings2=babelHelpers.interopRequireDefault(_userSettings)
var _domainUtils=require("./domain-utils.js")
var KA=require("../shared-package/ka.js")
var _require=require("../shared-package/i18n.js"),$_=_require.$_
var angleRightIcon={path:"M58.524 50.16q0 1.32-.968 2.288l-46.904 46.904q-.968.968-2.288.968t-2.376-.968l-5.016-5.104q-.968-.968-.968-2.288t.968-2.288l39.512-39.512-39.512-39.512q-.968-.968-.968-2.376t.968-2.288l5.016-5.016q.968-.968 2.376-.968t2.288.968l46.904 46.816q.968 1.056.968 2.376z",width:58.333,height:100}
var AccordionItem=function(e){babelHelpers.inherits(t,e)
function t(){var i,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,r=Array(o),l=0;l<o;l++){r[l]=arguments[l]}return a=(i=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),n),n.state={linkAttributes:{},open:false},n.handleClick=function(e){var t=n.state.open
if(n.props.children){e.preventDefault()
t=!t
n.setState({open:t})}if(n.props.onClick){n.props.onClick(t,e)}},i),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.render=function i(){var e=this.props,t=e.children,i=e.domain,n=e.href,a=e.linkAttributes,o=e.trigger,r=e.triggerStyles
var l=this.state.open&&i?_globalStyles2.default.domainColors(i.identifier).domain3:_globalStyles2.default.colors.gray76
var s=t?_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.navSectionIcon,this.state.open&&styles.navSectionIconOpen)},_react2.default.createElement(_icon2.default,{icon:angleRightIcon,size:12,color:l})):null
var c=n?_react2.default.createElement("a",babelHelpers.extends({},a,{className:_aphrodite.css.apply(undefined,[styles.navSectionTitle].concat(r)),href:n,onClick:this.handleClick}),o,s):_react2.default.createElement("button",babelHelpers.extends({},a,{className:_aphrodite.css.apply(undefined,[styles.notAButton,styles.navSectionTitle].concat(r)),onClick:this.handleClick}),o,s)
return _react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.navMenuSection)},c,_react2.default.createElement(_aphroditeCssTransitionGroup2.default,{transitionStyle:{enter:styles.navSectionClosed,enterActive:styles.navSectionOpen,leave:styles.navSectionOpen,leaveActive:styles.navSectionClosed},transitionEnterTimeout:250,transitionLeaveTimeout:250},this.state.open&&t))}
return t}(_react2.default.Component)
AccordionItem.propTypes={children:_propTypes2.default.node,domain:_domainUtils.domainObjectPropType,href:_propTypes2.default.string,linkAttributes:_propTypes2.default.objectOf(_propTypes2.default.any),onClick:_propTypes2.default.func,trigger:_propTypes2.default.node.isRequired,triggerStyles:_propTypes2.default.arrayOf(_propTypes2.default.any)}
var NavMenuSection=function(e){babelHelpers.inherits(t,e)
function t(){var i,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,r=Array(o),l=0;l<o;l++){r[l]=arguments[l]}return a=(i=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),n),n.getDomainConversions=function(){return[{id:"global_nav_choose_domain",extra:{domain:n.props.domain.identifier,view:"mobile"}}]},n.handleClick=function(e,t){if(n.props.domain.children.length){if(e){_bigbingo2.default.markConversionsWithExtras(n.getDomainConversions())}}else{}},i),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.render=function i(){var e=this
var t=this.props.domain
var i=t&&t.children.length!==0
if(!i&&this.props.hideNonSubmenuLinks){return null}var n=t.children.length-1
var a=t.children.map(function(i,a){return _react2.default.createElement("li",{key:i.identifier,className:(0,_aphrodite.css)(styles.navSectionChild)},_react2.default.createElement(_clientLink2.default,{className:(0,_aphrodite.css)(styles.navSectionChildLink,styles.navSectionContentText,a===0&&styles.firstNavSectionChildLink,a===n&&styles.lastNavSectionChildLink,childLinkStyles[t.identifier]),to:i.href,conversions:[{id:"global_nav_choose_subject",extra:{domain:t.identifier,subject:i.identifier,view:"mobile"}}],onClick:e.props.onClickLink},i.translatedTitle))})
var o=t.identifier
var r=null
if(i){r=_react2.default.createElement("ul",{key:o,"data-test-mobile-menu-domain":o,className:(0,_aphrodite.css)(styles.navSectionContents)},a)}var l=t.children.length===0?_bigBingoLinks2.default.handlersWithExtras(this.getDomainConversions()):{}
var s=babelHelpers.extends({},l,{"data-test-mobile-menu-header-domain":o})
return _react2.default.createElement(AccordionItem,{domain:t,trigger:t.translatedTitle,triggerStyles:[i&&styles.flexSpreadChildren,i&&_globalStyles2.default.linksWithoutVisited[o]],href:i?null:t.href,onClick:this.handleClick,linkAttributes:s},r)}
return t}(_react2.default.Component)
NavMenuSection.propTypes={domain:_domainUtils.domainObjectPropType,hideNonSubmenuLinks:_propTypes2.default.bool,onClickLink:_propTypes2.default.func}
var BibliotronResponsiveNavMenu=function(e){babelHelpers.inherits(t,e)
function t(){var i,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,r=Array(o),l=0;l<o;l++){r[l]=arguments[l]}return a=(i=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),n),n.state={showNotifications:false},n.notificationsSwitch=null,n.handleLogout=function(e){e.preventDefault()
var t=_urls2.default.getLogoutURL(n.props.currentUrl)
_facebookutil2.default.logout(function(){window.location=t})},n.handleScroll=function(e){if(!n.state.showNotifications||!n.props.loadNotifications){return}var t=e.target,i=t.scrollHeight,a=t.clientHeight,o=t.scrollTop
var r=2
if(o+a>=i-r){n.props.loadNotifications()
e.preventDefault()}},n.handleUserMenuToggle=function(e){if(e){_bigbingo2.default.markConversion("global_nav_open_user_menu",{view:"mobile"})}},n.handleNotificationsToggle=function(){if(!n.hasOpenedNotifications){n.props.loadNotifications()
n.hasOpenedNotifications=true}var e=!n.state.showNotifications
if(e){_bigbingo2.default.markConversion("global_nav_open_notifications",{view:"mobile"})}n.setState({showNotifications:e},function(){if(n.notificationsSwitch){n.notificationsSwitch.focus()}})},n.renderLoggedInFooter=function(){var e=n.props,t=e.profileData,i=e.notifications
return[_react2.default.createElement(AccordionItem,{key:"user-menu",trigger:t.isPhantom?"New user":t.nickName,triggerStyles:[styles.flexSpreadChildren],onClick:n.handleUserMenuToggle},_react2.default.createElement(_userSettings2.default,babelHelpers.extends({},t,{signUpUrl:"/signup",profileLinkAttributes:_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_visit_profile",extra:{view:"mobile"}}]),tabbable:true}))),_react2.default.createElement(_notificationsSwitch2.default,{innerRef:function a(e){return n.notificationsSwitch=e},key:"notifications-button",buttonStyles:[styles.navSectionTitle,styles.flexSpreadChildren],direction:"right",onClick:n.handleNotificationsToggle,notificationCount:i.newNotificationCount})]},i),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.componentDidUpdate=function i(e,t){if(!t.showNotifications&&this.state.showNotifications){this.props.onOpenNotifications()}}
t.prototype.render=function n(){var e=this
var t=this.props,i=t.profileData,n=t.hideNonSubmenuLinks,a=t.notifications
if(this.state.showNotifications){return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.container),onScroll:this.handleScroll},_react2.default.createElement(_notificationsSwitch2.default,{innerRef:function u(t){return e.notificationsSwitch=t},buttonStyles:[styles.navSectionTitle,styles.flexSpreadChildren],direction:"left",onClick:this.handleNotificationsToggle,notificationCount:a.newNotificationCount}),_react2.default.createElement(_notificationsList2.default,babelHelpers.extends({},a,{tabbable:true})))}var o=!i
var r=!!i&&i.isPhantom===false
var l=!!i&&i.isPhantom!==false
var s=this.props.domains.map(function(t,i){return _react2.default.createElement(NavMenuSection,{domain:t,key:i,hideNonSubmenuLinks:n,onClickLink:e.props.onClickLink})})
var c=[_react2.default.createElement("a",{key:"login",className:(0,_aphrodite.css)(styles.navSectionTitle,styles.splitLoginLink),href:_urls2.default.getLoginURL()},$_(null,"Login")),_react2.default.createElement("a",{key:"signup",className:(0,_aphrodite.css)(styles.navSectionTitle,styles.splitLoginLink),href:_urls2.default.getSignupURL()},$_(null,"Sign up"))]
var p=KA.featureFlag("SHOW_LOGGED_IN_DONATE_LINK")
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.container)},_react2.default.createElement("ul",{className:(0,_aphrodite.css)(styles.mainList)},(o||l)&&!n&&_react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.navMenuSection)},c),s,!o&&!n&&this.renderLoggedInFooter(),o&&!n&&_react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.navMenuSection)},_react2.default.createElement("a",{className:(0,_aphrodite.css)(styles.navSectionTitle,styles.informationLink),href:"/about"},_react2.default.createElement("span",{"aria-hidden":"true"},$_(null,"About")),_react2.default.createElement("span",{className:(0,_aphrodite.css)(_a11y2.default.srOnly)},$_(null,"About Khan Academy")))),(o||p)&&!n&&_react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.navMenuSection)},_react2.default.createElement(_link2.default,babelHelpers.extends({"data-test-id":"mobile-menu-donate-link",style:[styles.navSectionTitle,styles.informationLink]},_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_donate_clicked",extra:{view:"mobile",isLoggedIn:r,isPhantom:l}}]),{href:"/donate"}),$_(null,"Donate")))))}
return t}(_react2.default.Component)
BibliotronResponsiveNavMenu.propTypes={currentUrl:_propTypes2.default.string,domains:_propTypes2.default.arrayOf(_domainUtils.domainObjectPropType),hideNonSubmenuLinks:_propTypes2.default.bool,loadNotifications:_propTypes2.default.func,notifications:_propTypes2.default.shape({newNotificationCount:_propTypes2.default.number,notifications:_propTypes2.default.arrayOf(_propTypes2.default.any),loading:_propTypes2.default.bool,teaser:_propTypes2.default.string}),onOpenNotifications:_propTypes2.default.func,profileData:_propTypes2.default.shape(_userSettings2.default.propTypes),onClickLink:_propTypes2.default.func}
BibliotronResponsiveNavMenu.defaultProps={onOpenNotifications:function e(){},onClickLink:function t(){}}
var styles=_aphrodite.StyleSheet.create({container:{background:_globalStyles2.default.colors.gray98,height:"calc(100vh - 60px)",overflowY:"scroll"},mainList:{paddingTop:0,marginTop:5},navSectionChildLink:{display:"block",fontSize:15,padding:"8px 16px"},firstNavSectionChildLink:{paddingTop:0},lastNavSectionChildLink:{paddingBottom:16},navSectionContentText:{color:_globalStyles2.default.colors.gray25,cursor:"pointer",textDecoration:"none"},navSectionClosed:{overflow:"hidden",transition:"max-height .2s ease-out",maxHeight:0},navSectionOpen:{overflow:"hidden",transition:"max-height .2s ease-in",maxHeight:2e3},notAButton:{width:"100%",fontFamily:"inherit",lineHeight:"inherit",fontSize:"inherit",padding:0,margin:0},navSectionTitle:{color:_globalStyles2.default.colors.gray17,cursor:"pointer",display:"block",fontSize:16,fontWeight:"bold",padding:16,textDecoration:"none",":hover":{textDecoration:"underline"}},flexSpreadChildren:{alignItems:"center",display:"flex",justifyContent:"space-between"},navMenuSection:{borderBottom:"1px solid "+_constants2.default.tableBorder},navSectionIcon:{lineHeight:1,transform:"rotate(90deg)",transition:"transform 250ms ease-out"},navSectionIconOpen:{transform:"rotate(-90deg)"},loginLink:{backgroundColor:_constants2.default.kaGreen,color:_constants2.default.white,fontWeight:"normal",padding:"13px 0",textAlign:"center",":hover":{backgroundColor:"auto"}},splitLoginLink:{display:"inline-block",width:"42%",backgroundColor:_constants2.default.kaGreen,color:_constants2.default.white,fontWeight:"normal",padding:"13px 0",":first-of-type":{textAlign:"right",paddingRight:"8%"},":last-of-type":{textAlign:"left",paddingLeft:"8%"},":hover":{backgroundColor:"auto"}},informationLink:{color:_constants2.default.textColor,fontWeight:"normal",textAlign:"center",padding:"10px 20px"}})
var childLinkStyles=_globalStyles2.default.makeDomainStylesForTemplate(function(e){return{":hover":{color:_globalStyles2.default.domainColors(e).domain3}}})
module.exports=BibliotronResponsiveNavMenu
});
KAdefine("javascript/page-package/header.jsx", function(require, module, exports) {
var _headerActive,_logo,_alignLeft,_alignRight,_hideWhenSmall,_responsiveNavMenuWra,_responsiveMenuItemWr
var _importLegacyCss=require.importLegacyCSS
var _importLegacyCss2=babelHelpers.interopRequireDefault(_importLegacyCss)
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _bigBingoLinks=require("./big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var i18n=require("../shared-package/i18n.js")
var AphroditeCSSTransitionGroup=require("../shared-styles-package/aphrodite-css-transition-group.jsx")
var a11yStyles=require("../shared-styles-package/a11y.js")
var bigBingo=require("../shared-package/bigbingo.js")
var color=require("../shared-styles-package/color.js")
var globalStyles=require("../shared-styles-package/global-styles.js")
var Icon=require("../shared-styles-package/icon.jsx")
var KA=require("../shared-package/ka.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var ModalLauncher=require("../components/modal-package/modal-launcher.jsx")
var styleConstants=require("../shared-styles-package/constants.js")
var supports=require("../shared-package/supports.js")
var urls=require("./urls.js")
var HeaderSearchBox=require("./header-search-box.jsx")
var ResponsiveNavMenu=require("./responsive-nav-menu.jsx")
var HeaderLogo=require("./header-logo.jsx")
var LearnMenu=require("./learn-menu.jsx")
var UserDropdown=require("./user-dropdown.jsx")
var $_=i18n.$_
var reorderIcon={path:"M100.035 70.91l0 8.322q.057 1.653-1.197 2.907t-2.964 1.254l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.322q0-1.71 1.254-2.964t2.907-1.254l91.713 0q1.71 0 2.964 1.254t1.197 2.964zm0-33.402l0 8.379q.057 1.71-1.197 2.964t-2.964 1.197l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.379q0-1.653 1.254-2.907t2.907-1.254l91.713 0q1.71 0 2.964 1.254t1.197 2.907zm0-33.345l0 8.379q.057 1.653-1.197 2.907t-2.964 1.254l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.379q0-1.71 1.254-2.964t2.907-1.197l91.713 0q1.71-.057 2.964 1.197t1.197 2.964z",width:100,height:83.362}
var xThinIcon="M9.9,9.9C9.9,10,9.8,10,9.7,10c-0.1,0-0.2,0-0.2-0.1L5,5.4L0.5,9.9C\n    0.5,10,0.4,10,0.3,10c-0.1,0-0.2,0-0.2-0.1C0,9.8,0,9.6,0.1,9.5L4.6,5L\n    0.1,0.5C0,0.4,0,0.2,0.1,0.1C0.2,0,0.4,0,0.5,0.1L5,4.6l4.4-4.5C9.6,0,\n    9.8,0,9.9,0.1c0.1,0.1,0.1,0.3,0,0.4L5.4,5l4.5,4.5C10,9.6,10,9.8,9.9,\n    9.9z"
var searchIcon="M7.73732912,6.67985439 C7.75204857,6.69246326 7.76639529,\n    6.70573509 7.7803301,6.7196699 L9.65165045,8.59099025 C9.94454365,\n    8.8838835 9.94454365,9.3587572 9.65165045,9.65165045 C9.3587572,\n    9.94454365 8.8838835,9.94454365 8.59099025,9.65165045 L6.7196699,\n    7.7803301 C6.70573509,7.76639529 6.69246326,7.75204857 6.67985439,\n    7.73732912 C5.99121283,8.21804812 5.15353311,8.5 4.25,8.5 C1.90278981,\n    8.5 0,6.59721019 0,4.25 C0,1.90278981 1.90278981,0 4.25,0 C6.59721019,\n    0 8.5,1.90278981 8.5,4.25 C8.5,5.15353311 8.21804812,5.99121283\n    7.73732912,6.67985439 L7.73732912,6.67985439 Z M4.25,7.5 C6.04492544,\n    7.5 7.5,6.04492544 7.5,4.25 C7.5,2.45507456 6.04492544,1 4.25,1\n    C2.45507456,1 1,2.45507456 1,4.25 C1,6.04492544 2.45507456,7.5 4.25,\n    7.5 L4.25,7.5 Z"
var SkipToMainLink=React.createClass({displayName:"SkipToMainLink",render:function e(){return React.createElement("a",{href:"#main-content","data-skip-to-main":true,className:css(a11yStyles.skipToMain),tabIndex:1},$_(null,"Skip to main content"))}})
var LearnMenuSpacer=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function n(){return React.createElement("div",{className:css(styles.pad,styles.navItem,styles.learnMenuSpacer)},$_(null,"Subjects"))}
return t}(React.Component)
var Header=function(e){babelHelpers.inherits(t,e)
function t(){var n,a,r
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,o=Array(s),i=0;i<s;i++){o[i]=arguments[i]}return r=(n=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),a),a.state={openMenu:a.props.showWelcome?"learn-menu":null,currentUrl:a.props.initialUrl,hovered:false,learnMenuHasBeenClosed:!a.props.showWelcome,signupModal:null,responsiveMenuOpen:false,searchMenuOpen:false,hasLoadedTypeahead:false,SearchBox:null,suggestionSource:null,searchHover:false},a._isMounted=false,a.handleFocus=function(){if(supports.touchevents){return}a.setState({hovered:true})},a.handleBlur=function(e){var t=e.target.getAttribute("data-do-not-blur-header-on-search-bar-close")
if(t){return}a.setState({hovered:false})},a.handleBodyClick=function(e){if(!a._isMounted||a.state.openMenu===null||a.props.showWelcome&&!a.state.learnMenuHasBeenClosed){return}var t=ReactDOM.findDOMNode(a.refs.notificationsDropdown)
var n=ReactDOM.findDOMNode(a.refs.profileDropdown)
var r=ReactDOM.findDOMNode(a.refs.learnMenu)
var s=e.target
while(s!==document.body){if(s===t||s===n||s===r){return}s=s.parentNode}if(a.state.openMenu==="learn-menu"){a.hideDashboardSpacer()}a.setState({openMenu:null,learnMenuHasBeenClosed:true})},a.handleUserClick=function(){if(!a.hasOpenedNotifications){a.props.onLoadNotifications()
a.hasOpenedNotifications=true}if(a.state.openMenu!=="user"){bigBingo.markConversion("global_nav_open_user_menu",{view:"desktop"})
if(a.state.openMenu==="learn-menu"){a.hideDashboardSpacer()}a.setState({openMenu:"user"})}else{a.handleUserClose()}},a.handleUserClose=function(){a.setState({openMenu:null})},a.handleLearnMenuClick=function(){if(a.state.openMenu!=="learn-menu"&&!a.props.missionPercentages&&!!a.props.userProfileData){a.props.onRequestMissionPercentages()}if(a.state.openMenu==="learn-menu"){a.handleLearnMenuClose()}else{bigBingo.markConversion("global_nav_open_learn_menu")
a.setState({openMenu:"learn-menu"})}},a.handleLearnMenuClose=function(){a.setState({openMenu:null,learnMenuHasBeenClosed:true})
a.hideDashboardSpacer()},a.handleResponsiveMenuKeyboardEvent=function(e){if(e.key==="Enter"||e.key===" "||e.key==="Escape"&&a.state.responsiveMenuOpen){e.preventDefault()
a.handleResponsiveMenuToggle()}},a.handleResponsiveMenuToggle=function(){var e=!a.state.responsiveMenuOpen
var t=window.navigator.userAgent
var n=t.indexOf("Safari")>=0&&t.indexOf("Mobile")>=0&&t.indexOf("Chrome")<0
var r=a.getOuterWrapper()
if(e){document.body.style.overflowY="hidden"
if(n&&r){r.style.overflowY="hidden"
r.style.height="100vh"}}else{document.body.style.overflowY="auto"
if(n&&r){r.style.overflowY="auto"
r.style.height="auto"}}if(e){bigBingo.markConversion("global_nav_open_mobile")}a.setState({responsiveMenuOpen:e})},a.handleSearchClick=function(e){e.preventDefault()
bigBingo.markConversion("global_nav_start_search",{view:"desktop"})
if(!a.state.hasLoadedTypeahead){Promise.all([require.dynimport("../typeahead-package/search-box.jsx"),require.dynimport("../typeahead-package/suggestion-source.js"),(0,_importLegacyCss2.default)("typeahead.css")]).then(function(e){var t=e[0],n=e[1]
a.setState({SearchBox:t,suggestionSource:n,hasLoadedTypeahead:true,searchMenuOpen:true,searchHover:false})})}else{a.setState({searchMenuOpen:true,searchHover:false})}},a.handleSearchExit=function(e){e&&e.preventDefault()
if(a._isMounted){a.setState({searchMenuOpen:false})}},a.shouldUseLoginModal=function(){bigBingo.markConversion("global_nav_login_clicked")
var e=window.location.pathname==="/login"
var t=window.location.hostname.endsWith(".appspot.com")&&(window.location.hostname.startsWith("vm-dot-")||window.location.hostname.indexOf("-dot-vm-dot")!==-1)
var n=KA.isPhone||e||t
if(n){return false}return true},a.hideDashboardSpacer=function(){document.body.classList.add("bibliotron-hide-spacer")},a.getProfileDropdownData=function(){if(!a.props.userProfileData){return null}var e=a.props.userProfileData,t=e.hasChildStudents,n=e.hasCoachHomepage,r=e.hasParentHomepage,s=e.hasStudents,o=e.isChildAccount,i=e.isMidsignupPhantom,l=e.isPhantom,c=e.profileRoot,p=e.nickname,u=e.avatarSrc
return{profileUrl:c,avatarImage:u,nickName:p,isPhantom:l,showSignUpToSave:l&&!i,hasStudents:s,hasChildren:s&&t,showSettings:!l,showLearningHome:n||r,showCoachingLinks:!o}},a.getBackgroundColor=function(){if(a.getIsOpaque()){return NAV_ITEM_LIGHT_COLOR}else if(a.props.transparent){return"transparent"}else if(a.props.pageDomain&&a.props.allowDomainTheming){return globalStyles.domainColors(a.props.pageDomain).domain1}else{return"transparent"}},a.getSearchBackgroundColor=function(){if(a.state.searchHover){return globalStyles.colors.gray90}else if(a.getIsOpaque()){return globalStyles.colors.gray95}else if(a.props.pageDomain&&a.props.allowDomainTheming){var e=color.parse(globalStyles.domainColors(a.props.pageDomain).domain2)
return color.format(color.fade(e,.3))}else if(a.props.transparent){var t=color.parse(globalStyles.colors.white)
return color.format(color.fade(t,.2))}else{return"transparent"}},a.getUserIsPhantom=function(){return!!a.props.userProfileData&&a.props.userProfileData.isPhantom!==false},a.markSigninSignupLinkClicked=function(){bigBingo.markConversion("global_nav_signin_signup_clicked")},a.markSignupLinkClicked=function(){bigBingo.markConversion("global_nav_signup_clicked")},a.renderProminentSearchContents=function(){var e=a.getIsOpaque()?globalStyles.colors.gray68:NAV_ITEM_LIGHT_COLOR
var t=a.getSearchBackgroundColor()
var n=KA.featureFlag("WONDER_BLOCKS_TYPOGRAPHY")
if(a.state.searchMenuOpen){return React.createElement("div",{className:css(styles.headerContents,styles.alignLeft)},a.renderCloseSearchLink(),React.createElement(LearnMenuSpacer,null),React.createElement(AphroditeCSSTransitionGroup,{transitionStyle:{appear:styles.enterSearch,appearActive:styles.enterActiveSearch},transitionAppear:true,transitionAppearTimeout:300},React.createElement("div",{className:css(styles.searchWrapper,styles.activeSearchWrapper)},React.createElement("div",{style:{backgroundColor:t},className:css(styles.searchBackground)},React.createElement("div",{className:css(styles.searchBoxContainer)},React.createElement(HeaderSearchBox,{onFocus:a.handleSearchFocus,onEscape:a.handleSearchExit,isBibliotron:true,searchFormStyles:[styles.navItem,styles.navItemWhenOpaque,styles.searchForm,n&&styles.wonderBlocksNavItem],searchInputStyles:[styles.searchInput,styles.prominentSearchInput,n&&styles.wonderBlocksNavItem],SearchBox:a.state.SearchBox,spacer:a.renderProminentSearchSpacer(),suggestionSource:a.state.suggestionSource}),React.createElement(Icon,{icon:searchIcon,size:SEARCH_ICON_SIZE,color:e}))))))}else{return React.createElement("div",{className:css(styles.headerContents)},React.createElement("div",{className:css(styles.headerSection,styles.grow,styles.alignLeft)},a.renderLearnMenu(),React.createElement("div",{className:css(styles.searchWrapper)},React.createElement("a",{"data-hack-search-button-label":true,"aria-label":i18n._("Search for subjects, skills, and videos"),href:"/search",className:css(styles.navItem,a.getIsOpaque()&&styles.searchOpaque,styles.searchBackground),onClick:a.handleSearchClick,onMouseEnter:function r(){return a.setState({searchHover:true})},onMouseLeave:function s(){return a.setState({searchHover:false})},style:{backgroundColor:t},"data-test-id":"navbar-search-button"},React.createElement("div",{className:css(styles.searchBoxContainer)},React.createElement("span",{className:css(styles.inactiveSearch,n&&styles.wonderBlocksNavItem)},$_(null,"Search")),React.createElement(Icon,{icon:searchIcon,size:SEARCH_ICON_SIZE,color:e}))))),React.createElement("div",{className:css(styles.headerSection)},a.renderLogo()),React.createElement("div",{className:css(styles.headerSection,styles.grow,styles.alignRight)},a.getUserIsLoggedIn()?a.renderLoggedInItems():a.renderLoggedOutItems(),a.renderResponsiveMenuItems()))}},a.renderCloseSearchLink=function(){return React.createElement("a",{href:"javascript:void 0",className:css.apply(undefined,a.getNavItemStyles()),onClick:a.handleSearchExit,"data-test-id":"header-search-close","aria-label":"Close search"},React.createElement(Icon,{icon:xThinIcon,size:15,color:NAV_ITEM_DARK_COLOR}))},a.renderSearchResultsSpacer=function(){return React.createElement("div",{className:css(styles.searchResultsSpacer)},React.createElement(LearnMenuSpacer,null))},a.renderProminentSearchSpacer=function(){return React.createElement("div",{className:css(styles.prominentSearchResultsSpacer)},React.createElement(LearnMenuSpacer,null))},a.renderLogo=function(){return React.createElement(HeaderLogo,{logoStyles:[].concat(a.getNavItemStyles(),[styles.logo]),linkAttributes:_bigBingoLinks2.default.handlers(["global_nav_visit_home"]),transparent:!a.getIsOpaque()})},a.renderLearnMenu=function(){var e=a.props.domains
return React.createElement(LearnMenu,{ref:"learnMenu",domains:e,missionPercentages:a.props.missionPercentages,onDropdownToggle:a.handleLearnMenuClick,onDropdownClose:a.handleLearnMenuClose,showDropdown:a.state.openMenu==="learn-menu",buttonStyles:a.getNavItemStyles(),transparent:!a.getIsOpaque(),showWelcome:a.props.showWelcome})},a.renderResponsiveMenuItems=function(){var e=[]
if(!a.props.hideSearchBar){var t=a.getIsOpaque()?NAV_ITEM_DARK_COLOR:NAV_ITEM_LIGHT_COLOR
e=e.concat([React.createElement("div",{key:"responsive-search",className:css(styles.showWhenSmall,styles.responsiveMenuItemWrapper)},React.createElement("a",babelHelpers.extends({className:css.apply(undefined,a.getNavItemStyles().concat([styles.responsiveMenuLink,styles.responsiveSearchIcon]))},_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_start_search",extra:{view:"mobile"}}]),{href:"/search","data-test-id":"mobile-search-button"}),React.createElement("span",{className:css(a11yStyles.srOnly)},$_(null,"Search for subjects, skills, and videos")),React.createElement(Icon,{icon:searchIcon,size:SEARCH_ICON_SIZE,color:t})))])}if(!a.props.showWelcome){var n=a.getIsOpaque()?NAV_ITEM_DARK_COLOR:NAV_ITEM_LIGHT_COLOR
e=e.concat([React.createElement("div",{key:"responsive-dropdown-menu",className:css(styles.showWhenSmall,styles.responsiveMenuItemWrapper)},React.createElement("button",{onClick:a.handleResponsiveMenuToggle,onKeyDown:a.handleResponsiveMenuKeyboardEvent,className:css.apply(undefined,[styles.notAButton].concat(a.getNavItemStyles(),[styles.responsiveMenuLink])),"data-test-id":"mobile-header-menu-button","aria-haspopup":true},a.state.responsiveMenuOpen?React.createElement(Icon,{icon:xThinIcon,size:17,color:NAV_ITEM_DARK_COLOR}):React.createElement(Icon,{icon:reorderIcon,size:14,color:n})))])}return e},a.renderResponsiveNavMenu=function(){return React.createElement("div",{className:css(styles.responsiveNavMenuWrapper),"data-test-id":"responsive-nav-menu",role:"menu","aria-expanded":a.state.responsiveMenuOpen},React.createElement(AphroditeCSSTransitionGroup,{transitionStyle:{enter:styles.responsiveNavMenuClosed,enterActive:styles.responsiveNavMenuOpen,leave:styles.responsiveNavMenuOpen,leaveActive:styles.responsiveNavMenuClosed},transitionEnterTimeout:300,transitionLeaveTimeout:300},a.state.responsiveMenuOpen&&React.createElement(ResponsiveNavMenu,{domains:a.props.domains,profileData:a.getProfileDropdownData(),notifications:a.props.notifications,loadNotifications:a.props.onLoadNotifications,onOpenNotifications:a.props.onOpenNotifications,onClickLink:a.handleResponsiveMenuToggle})))},n),babelHelpers.possibleConstructorReturn(a,r)}t.prototype.componentDidMount=function n(){var e=this
this._isMounted=true
this.setState({currentUrl:location.pathname+location.hash})
require.dynimport("../login-package/signup-modal.jsx").then(function(t){e.setState({signupModal:t})})
if(this.props.showWelcome&&!this.props.missionPercentages){this.props.onRequestMissionPercentages()}document.body.addEventListener("click",this.handleBodyClick)
this.addSkipToMainToDOM()}
t.prototype.componentWillUnmount=function a(){document.body.removeEventListener("click",this.handleBodyClick)
this._isMounted=false
var e=this._skipToMainMountNode
if(!e){return}ReactDOM.unmountComponentAtNode(e)
this.props.rootElement.removeChild(e)}
t.prototype.getOuterWrapper=function r(){return document.getElementById("outer-wrapper")||document.body}
t.prototype.getNavItemStyles=function s(){var e=KA.featureFlag("WONDER_BLOCKS_TYPOGRAPHY")
return[styles.pad,styles.navItem,this.getIsOpaque()&&styles.navItemWhenOpaque,e&&styles.wonderBlocksNavItem]}
t.prototype.getDonateStyles=function o(){return[].concat(this.getNavItemStyles(),[styles.hideWhenSmall])}
t.prototype.getNavButtonStyles=function i(){return[styles.navButton,this.getIsOpaque()&&styles.navButtonWhenOpaque]}
t.prototype.getIsOpaque=function l(){if(!this.props.transparent&&!this.props.pageDomain){return true}return this.state.hovered||this.state.openMenu!==null||this.state.responsiveMenuOpen||this.state.searchMenuOpen}
t.prototype.getUserIsLoggedIn=function c(){return this.props.userProfileData&&this.props.userProfileData.isPhantom===false}
t.prototype.addSkipToMainToDOM=function p(){var e=this.getOuterWrapper()
if(!this.props.showSkipToMain||!e){return null}var t=document.createElement("div")
this._skipToMainMountNode=t
e.insertBefore(t,e.firstChild)
ReactDOM.render(React.createElement(SkipToMainLink,null),this._skipToMainMountNode)}
t.prototype.renderLoginLink=function u(){var e=this
if(this.shouldUseLoginModal()){return React.createElement(ModalLauncher,{ariaLabel:i18n._("Login (Opens a modal)"),focusId:"login-or-signup",key:"signin-link",modal:this.getSignupModal()},function(t,n){return React.createElement("a",{"aria-label":n,href:urls.getLoginURL(),id:"login-or-signup",onClick:t,rel:"nofollow",className:css.apply(undefined,e.getNavItemStyles().concat([styles.hideWhenSmall,styles.withLeftMargin]))},$_(null,"Login"))})}return React.createElement("a",{href:urls.getLoginURL(),id:"login-or-signup",key:"signin-link",rel:"nofollow",className:css.apply(undefined,this.getNavItemStyles().concat([styles.hideWhenSmall,styles.withLeftMargin]))},$_(null,"Login"))}
t.prototype.renderLoggedInItems=function d(){var e=this.props,t=e.notifications,n=e.onLoadNotifications,a=e.signUpUrl
var r=KA.featureFlag("SHOW_LOGGED_IN_DONATE_LINK")
var s=[React.createElement(UserDropdown,babelHelpers.extends({key:"user-dropdown",ref:"profileDropdown",onDropdownToggle:this.handleUserClick,onDropdownClose:this.handleUserClose,showDropdown:this.state.openMenu==="user",buttonStyles:[this.getNavItemStyles(),styles.withLeftMargin],currentUrl:this.state.currentUrl,signUpUrl:a,profileData:this.getProfileDropdownData()},t,{onOpenNotifications:this.props.onOpenNotifications,onScrollToBottom:n}))]
if(r){s.unshift([React.createElement(_link2.default,babelHelpers.extends({key:"donate-link","data-test-id":"header-donate-link"},_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_donate_clicked",extra:{view:"desktop",isLoggedIn:true,isPhantom:false}}]),{href:"/donate",style:[].concat(this.getDonateStyles())}),$_(null,"Donate"))])}return s}
t.prototype.getSignupModal=function h(){if(!this.state.signupModal){return}var e=location.pathname+location.search+location.hash
return React.createElement(this.state.signupModal.default,{continueUrl:e,initialType:"login"})}
t.prototype.renderLoggedOutItems=function g(){return[React.createElement(_link2.default,babelHelpers.extends({key:"donate-link","data-test-id":"header-donate-link"},_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_donate_clicked",extra:{view:"desktop",isLoggedIn:false,isPhantom:this.getUserIsPhantom()}}]),{href:"/donate",style:[].concat(this.getDonateStyles())}),$_(null,"Donate")),this.renderLoginLink(),React.createElement("a",{key:"signup-link",href:urls.getSignupURL(),rel:"nofollow",className:css.apply(undefined,this.getNavItemStyles().concat([styles.hideWhenSmall,styles.withLeftMargin])),onClick:this.markSignupLinkClicked},$_(null,"Sign up"))]}
t.prototype.render=function m(){return React.createElement("div",{className:css(styles.wrapper,this.props.transparent&&styles.wrapperFloat,this.getIsOpaque()&&styles.headerActive),style:{backgroundColor:this.getBackgroundColor()}},React.createElement("nav",{className:css(styles.header,this.props.fullBleed&&styles.headerFullBleed),onFocus:this.handleFocus,onBlur:this.handleBlur,onMouseEnter:this.handleFocus,onMouseLeave:this.handleBlur,role:"navigation"},this.renderProminentSearchContents()),this.renderResponsiveNavMenu())}
return t}(React.Component)
Header.propTypes={allowDomainTheming:PropTypes.bool,domains:LearnMenu.propTypes.domains,fullBleed:PropTypes.bool,hideSearchBar:PropTypes.bool,hideSignupInHeader:PropTypes.bool,initialUrl:PropTypes.string,missionPercentages:LearnMenu.propTypes.missionPercentages,notifications:ResponsiveNavMenu.propTypes.notifications,onLoadNotifications:PropTypes.func,onOpenNotifications:PropTypes.func,onRequestMissionPercentages:PropTypes.func,pageDomain:PropTypes.string,showSkipToMain:PropTypes.bool,showWelcome:PropTypes.bool,signUpUrl:PropTypes.string.isRequired,transparent:PropTypes.bool,userProfileData:PropTypes.shape({hasChildStudents:PropTypes.bool,hasCoachHomepage:PropTypes.bool,hasParentHomepage:PropTypes.bool,hasStudents:PropTypes.bool,isChildAccount:PropTypes.bool,isMidsignupPhantom:PropTypes.bool,isPhantom:PropTypes.bool,profileRoot:PropTypes.string,nickname:PropTypes.string,avatarSrc:PropTypes.string})}
Header.defaultProps={hideSearchBar:false,hideSignupInHeader:false,notifications:{newNotificationCount:0,notifications:[],loading:true,teaser:null},onLoadNotifications:function t(){},onOpenNotifications:function n(){},onRequestMissionPercentages:function a(){},showSkipToMain:true,showWelcome:false}
var NAV_ITEM_DARK_COLOR=globalStyles.colors.gray17
var NAV_ITEM_LIGHT_COLOR=globalStyles.colors.white
var SEARCH_ICON_LEFT_MARGIN=32
var SEARCH_INPUT_LEFT_MARGIN=20
var SEARCH_ICON_SIZE=20
var PROMINENT_SEARCH_INPUT_LEFT_PADDING=10
var ACTIVE_SEARCH_BAR_WIDTH=400
var styles=StyleSheet.create({wrapper:{borderTop:"1px solid transparent",borderBottom:"1px solid rgba(255, 255, 255, 0.3)",boxSizing:"border-box",height:globalStyles.pageHeaderHeight,left:0,position:"relative",right:0,zIndex:styleConstants.zindexHeader},wrapperFloat:{position:"absolute"},header:{maxWidth:styleConstants.maxContainerWidth,marginLeft:"auto",marginRight:"auto",width:"100%",height:"100%"},headerContents:{display:"flex",height:"100%",alignItems:"center"},headerActive:(_headerActive={borderTop:"1px solid "+globalStyles.colors.gray85,borderBottom:"1px solid "+globalStyles.colors.gray85},_headerActive[mediaQueries.smOrSmaller]={background:globalStyles.colors.gray98},_headerActive),headerFullBleed:{maxWidth:"none"},headerSection:{alignItems:"center",display:"flex",height:"100%"},learnMenuSpacer:{paddingRight:16,pointerEvents:"none",visibility:"hidden",whiteSpace:"nowrap"},searchResultsSpacer:{marginLeft:SEARCH_ICON_LEFT_MARGIN+SEARCH_ICON_SIZE+SEARCH_INPUT_LEFT_MARGIN},prominentSearchResultsSpacer:{marginLeft:SEARCH_ICON_LEFT_MARGIN+PROMINENT_SEARCH_INPUT_LEFT_PADDING},logo:(_logo={},_logo[mediaQueries.smOrSmaller]={paddingLeft:globalStyles.pageHeaderHorizontalPaddingMobile},_logo),grow:{flexGrow:1,width:0},alignLeft:(_alignLeft={justifyContent:"flex-start",paddingLeft:globalStyles.pageHeaderHorizontalPadding},_alignLeft[mediaQueries.smOrSmaller]={display:"none"},_alignLeft),alignRight:(_alignRight={justifyContent:"flex-end",paddingRight:globalStyles.pageHeaderHorizontalPadding},_alignRight[mediaQueries.smOrSmaller]={paddingRight:0},_alignRight),pad:{alignItems:"center",display:"flex",height:"100%"},navItem:{color:NAV_ITEM_LIGHT_COLOR,fontFamily:"inherit",fontSize:15,fontWeight:"bold",textDecoration:"none",":hover":{textDecoration:"none"}},navItemWhenOpaque:{color:NAV_ITEM_DARK_COLOR,":hover":{color:globalStyles.colors.kaGreen,textDecoration:"none"}},searchOpaque:{color:NAV_ITEM_DARK_COLOR},withLeftMargin:{marginLeft:32},searchForm:{flexGrow:1},searchInput:{border:"none",fontFamily:globalStyles.fonts.regular,fontSize:15,height:"auto",marginLeft:SEARCH_INPUT_LEFT_MARGIN,outline:"none",width:300},searchWrapper:{paddingTop:10,paddingBottom:10,marginLeft:SEARCH_ICON_LEFT_MARGIN,marginRight:SEARCH_ICON_LEFT_MARGIN,width:200,boxSizing:"border-box",height:"100%"},activeSearchWrapper:{maxWidth:"none",width:ACTIVE_SEARCH_BAR_WIDTH},enterSearch:{maxWidth:200,transition:"max-width 0.2s ease-out"},enterActiveSearch:{maxWidth:ACTIVE_SEARCH_BAR_WIDTH},searchBackground:{flex:1,height:40,display:"flex",flexDirection:"row",alignItems:"center",borderRadius:4},searchBoxContainer:{flex:1,display:"flex",alignItems:"center",paddingLeft:PROMINENT_SEARCH_INPUT_LEFT_PADDING,paddingRight:10},prominentSearchInput:{height:"100%",width:"100%",backgroundColor:"transparent",marginLeft:0},inactiveSearch:{flexGrow:1},hideWhenSmall:(_hideWhenSmall={},_hideWhenSmall[mediaQueries.smOrSmaller]={display:"none"},_hideWhenSmall),responsiveNavMenuWrapper:(_responsiveNavMenuWra={background:globalStyles.colors.white,left:0,position:"absolute",right:0},_responsiveNavMenuWra[mediaQueries.mdOrLarger]={display:"none"},_responsiveNavMenuWra),responsiveNavMenuOpen:{maxHeight:1e3,transition:"max-height .3s",overflow:"hidden"},responsiveNavMenuClosed:{maxHeight:0,transition:"max-height .3s",overflow:"hidden"},responsiveMenuItemWrapper:(_responsiveMenuItemWr={alignItems:"stretch",display:"none"},_responsiveMenuItemWr[mediaQueries.smOrSmaller]={display:"flex"},_responsiveMenuItemWr),responsiveMenuLink:{height:"auto",marginRight:globalStyles.pageHeaderHorizontalPaddingMobile},responsiveSearchIcon:{marginRight:25},notAButton:{backgroundColor:"transparent",border:"none"},wonderBlocksNavItem:babelHelpers.extends({},globalStyles.typography.wonderBlocksLabelLarge)})
module.exports=Header
});
KAdefine("javascript/page-package/stateful-header.jsx", function(require, module, exports) {
var _class,_temp2
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("react-redux"),Provider=_require.Provider,connect=_require.connect
var APIActionResults=require("../shared-package/api-action-results.js")
var KA=require("../shared-package/ka.js")
var updateDocumentTitle=require("../shared-package/update-document-title.js")
var urls=require("./urls.js")
var actions=require("./actions.js")
var Header=require("./header.jsx")
var _require2=require("./store.js"),create=_require2.create
var StatefulHeader=connect(function(e){return e})((_temp2=_class=function(e){babelHelpers.inherits(r,e)
function r(){var t,i,o
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,s=Array(a),n=0;n<a;n++){s[n]=arguments[n]}return o=(t=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),i),i._isMounted=false,i.handleLoadNotifications=function(){if(i.props.notifications.hasMore&&!i.props.notifications.loading){i.props.dispatch(actions.loadMoreNotifications())}},i.handleOpenNotifications=function(){if(i.props.notifications.newNotificationCount>0){i.props.dispatch(actions.clearNewNotifications())
updateDocumentTitle({noteCount:0})}},i.handleRequestMissionPercentages=function(){if(!i.props.missionData.loading){i.props.dispatch(actions.loadMissionPercentages())}},t),babelHelpers.possibleConstructorReturn(i,o)}r.prototype.componentDidMount=function t(){var e=this
this._isMounted=true
updateDocumentTitle()
APIActionResults.register("notifications_added",function(r){if(!e._isMounted){return}var t=r.readable
e.props.dispatch(actions.gotNewNotifications(t))
var i=KA.getUserProfile()
if(i){updateDocumentTitle({noteCount:i.get("countBrandNewNotifications")+t.length})}})
KA.addProfileChangeListener(function(r){e.props.dispatch(actions.updateProfile(r))})
var r=this.props.urgentNotification,t=r.urgentNotes,i=r.continuePath
if(t){require.dynimport("../shared-package/urgent-notification.js").then(function(e){e.renderUrgent(t,i)})}if(this.props.footer){var o=window.innerWidth>768
var a=this.props.footer.contentKind
var s=KA.featureFlag("isMobile")
if(o||!a||!s){Promise.all([require.dynimport("react-dom"),require.dynimport("../page-package/footer.jsx")]).then(function(r){var t=r[0],i=r[1]
var o=document.getElementById("footer")
if(o){t.render(React.createElement(i,e.props.footer),o)}})}}}
r.prototype.componentWillUnmount=function i(){this._isMounted=false}
r.prototype.render=function o(){return React.createElement(Header,{allowDomainTheming:this.props.allowDomainTheming,domains:this.props.domains,initialUrl:this.props.initialUrl,hideSignupInHeader:this.props.hideSignupInHeader,hideSearchBar:this.props.hideSearchBar,transparent:this.props.transparent,fullBleed:this.props.fullBleed,showWelcome:this.props.showWelcome,notifications:this.props.notifications,userProfileData:this.props.userProfileData,missionPercentages:this.props.missionData.missionPercentages,onLoadNotifications:this.handleLoadNotifications,onOpenNotifications:this.handleOpenNotifications,onRequestMissionPercentages:this.handleRequestMissionPercentages,signUpUrl:urls.getLoginURL("","/signup"),pageDomain:this.props.pageDomain})}
return r}(React.Component),_class.propTypes={allowDomainTheming:PropTypes.bool,dispatch:PropTypes.func,domains:Header.propTypes.domains,fullBleed:Header.propTypes.fullBleed,hideSearchBar:Header.propTypes.hideSearchBar,hideSignupInHeader:Header.propTypes.hideSignupInHeader,initialUrl:Header.propTypes.initialUrl,missionData:PropTypes.shape({loading:PropTypes.bool,missionPercentages:Header.propTypes.missionPercentages}),notifications:Header.propTypes.notifications,pageDomain:PropTypes.string,showWelcome:Header.propTypes.showWelcome,transparent:Header.propTypes.transparent,userProfileData:Header.propTypes.userProfileData,urgentNotification:PropTypes.shape({urgentNotes:PropTypes.arrayOf(PropTypes.any),continuePath:PropTypes.string}),footer:PropTypes.shape({curLanguage:PropTypes.string.isRequired,domains:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string.isRequired,href:PropTypes.string.isRequired}).isRequired).isRequired,kaGlobals:PropTypes.shape({version:PropTypes.string.isRequired}),languages:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string).isRequired).isRequired,isUserLoggedIn:PropTypes.bool,attribution:PropTypes.any,contentKind:PropTypes.string}),embeddedInWebview:PropTypes.bool},_temp2))
var StatefulHeaderWrapper=function(e){babelHelpers.inherits(r,e)
function r(){var t,i,o
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,s=Array(a),n=0;n<a;n++){s[n]=arguments[n]}return o=(t=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),i),i.state={store:create(i.props.initialNotificationCount,i.props.initialUserProfileData)},t),babelHelpers.possibleConstructorReturn(i,o)}r.prototype.render=function t(){return React.createElement(Provider,{store:this.state.store},React.createElement(StatefulHeader,this.props))}
return r}(React.Component)
StatefulHeaderWrapper.propTypes={domains:Header.propTypes.domains,fullBleed:Header.propTypes.fullBleed,hideSearchBar:Header.propTypes.hideSearchBar,hideSignupInHeader:Header.propTypes.hideSignupInHeader,initialNotificationCount:PropTypes.number,initialUrl:Header.propTypes.initialUrl,initialUserProfileData:Header.propTypes.userProfileData,showWelcome:Header.propTypes.showWelcome,transparent:Header.propTypes.transparent}
module.exports=StatefulHeaderWrapper
});
; KAdefine.updatePathToPackageMap({"javascript/login-package/signup-modal.jsx": "login.js", "javascript/node_modules/backbone/index.js": "corelibs-legacy.js", "javascript/node_modules/jquery/index.js": "corelibs-legacy.js", "javascript/node_modules/react-dom/index.js": "corelibs.js", "javascript/notifications-package/notifications.js": "notifications.js", "javascript/notifications-package/readable-notification-view.js": "notifications.js", "javascript/notifications-package/readable-notification.jsx": "notifications.js", "javascript/page-package/footer.jsx": "page.js", "javascript/shared-package/urgent-notification.js": "shared.js", "javascript/typeahead-package/search-box.jsx": "typeahead.js", "javascript/typeahead-package/suggestion-source.js": "typeahead.js"});
