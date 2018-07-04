KAdefine("javascript/shared-styles-package/a11y.js", function(require, module, exports) {
var _aphrodite=require("aphrodite")
var _constants=require("./constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var srOnly={border:0,clip:"rect(0,0,0,0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}
module.exports=_aphrodite.StyleSheet.create({srOnly:srOnly,skipToMain:babelHelpers.extends({},srOnly,{backgroundColor:_constants2.default.white,left:60,lineHeight:"45px",padding:"0 10px",top:60,":focus":{clip:"auto",height:"auto",width:"auto",zIndex:9999},":active":{clip:"auto",height:"auto",width:"auto"}})})
});
KAdefine("javascript/shared-styles-package/color.js", function(require, module, exports) {
var colorRegexp=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i
var colorUtil={parse:function r(a){var t=a.match(colorRegexp)
if(t){return{r:parseInt(t[1],16)/255,g:parseInt(t[2],16)/255,b:parseInt(t[3],16)/255,a:1}}else{throw new Error("Failed to parse color: "+a)}},darken:function a(r,t){return{r:r.r*(1-t),g:r.g*(1-t),b:r.b*(1-t),a:r.a}},lighten:function t(r,a){return{r:r.r*(1+a),g:r.g*(1+a),b:r.b*(1+a),a:r.a}},fade:function o(r,a){return babelHelpers.extends({},r,{a:a})},mix:function e(r,a){return{r:r.r*r.a+a.r*(1-r.a),g:r.g*r.a+a.g*(1-r.a),b:r.b*r.a+a.b*(1-r.a),a:1}},mixWithBlack:function n(r,a){var t={r:0,g:0,b:0,a:a}
return colorUtil.mix(t,r)},mixWithWhite:function i(r,a){var t={r:1,g:1,b:1,a:a}
return colorUtil.mix(t,r)},format:function l(r){return"rgba("+(Math.floor(r.r*255)+", "+Math.floor(r.g*255)+", ")+(Math.floor(r.b*255)+", "+r.a.toFixed(2)+")")}}
module.exports=colorUtil
});
KAdefine("javascript/shared-styles-package/constants.js", function(require, module, exports) {
module.exports={black:"#000000",grayDarker:"#333333",grayDark:"#555555",gray:"#999999",grayLight:"#AAAAAA",grayLighter:"#DDDDDD",white:"#FFFFFF",blue:"#005A88",blueDark:"#2C3747",green:"#76A005",red:"#CF5044",yellow:"#FFC40D",orange:"#BF4F04",pink:"#C3325F",purple:"#7A43B6",bodyBackground:"#FFFFFF",textColor:"#444444",linkColor:"#005987",linkColorHover:"#678D00",sansFontFamily:"'Helvetica Neue',Helvetica,Arial,sans-serif",serifFontFamily:"Georgia,'Times New Roman',Times,serif",monoFontFamily:"Monaco,Menlo,Consolas,'Courier New',monospace",baseFontSize:"14px",baseFontFamily:"inherit",baseLineHeight:"20px",altFontFamily:"Georgia,'Times New Roman',Times,serif",headingsFontFamily:"inherit",headingsFontWeight:"bold",headingsColor:"inherit",fontSizeLarge:"18px",fontSizeSmall:"12px",fontSizeMini:"10.5px",paddingLarge:"11px 19px",paddingSmall:"2px 10px",paddingMini:"0 6px",baseBorderRadius:"4px",borderRadiusLarge:"6px",borderRadiusSmall:"3px",tableBackground:"#000000",tableBackgroundAccent:"#F9F9F9",tableBackgroundHover:"#F5F5F5",tableBorder:"#DDDDDD",btnBackground:"#FFFFFF",btnBackgroundHighlight:"rgb(230, 230, 230)",btnBorder:"#CCCCCC",btnPrimaryBackground:"#0088CC",btnPrimaryBackgroundHighlight:"rgb(0, 68, 204)",btnInfoBackground:"#5BC0DE",btnInfoBackgroundHighlight:"#2F96B4",btnSuccessBackground:"#62C462",btnSuccessBackgroundHighlight:"#51A351",btnWarningBackground:"rgb(251, 180, 81)",btnWarningBackgroundHighlight:"#F89406",btnDangerBackground:"#EE5F5B",btnDangerBackgroundHighlight:"#BD362F",btnInverseBackground:"#444444",btnInverseBackgroundHighlight:"#222222",inputBackground:"#FFFFFF",inputBorder:"#CCCCCC",inputBorderRadius:"4px",inputDisabledBackground:"#EEEEEE",formActionsBackground:"#F5F5F5",inputHeight:"30px",dropdownBackground:"#FFFFFF",dropdownBorder:"rgba(0, 0, 0, 0.2)",dropdownDividerTop:"#E5E5E5",dropdownDividerBottom:"#FFFFFF",dropdownLinkColor:"#333333",dropdownLinkColorHover:"#FFFFFF",dropdownLinkColorActive:"#FFFFFF",dropdownLinkBackgroundActive:"#0088CC",dropdownLinkBackgroundHover:"#0088CC",zindexDropdown:1e3,zindexPopover:1010,zindexTooltip:1030,zindexFixedNavbar:1030,zindexHeader:1060,zindexModalBackdrop:1070,zindexModal:1080,zindexAboveModal:1090,iconSpritePath:"../img/glyphicons-halflings.png",iconWhiteSpritePath:"../img/glyphicons-halflings-white.png",placeholderText:"#999999",hrBorder:"#EEEEEE",horizontalComponentOffset:"180px",wellBackground:"#F5F5F5",navbarCollapseWidth:"979px",navbarCollapseDesktopWidth:"980px",navbarHeight:"40px",navbarBackgroundHighlight:"#FFFFFF",navbarBackground:"rgb(242, 242, 242)",navbarBorder:"rgb(212, 212, 212)",navbarText:"#777777",navbarLinkColor:"#777777",navbarLinkColorHover:"#333333",navbarLinkColorActive:"#555555",navbarLinkBackgroundHover:"#000000",navbarLinkBackgroundActive:"rgb(230, 230, 230)",navbarBrandColor:"#777777",navbarInverseBackground:"#111111",navbarInverseBackgroundHighlight:"#222222",navbarInverseBorder:"#252525",navbarInverseText:"#999999",navbarInverseLinkColor:"#999999",navbarInverseLinkColorHover:"#FFFFFF",navbarInverseLinkColorActive:"#FFFFFF",navbarInverseLinkBackgroundHover:"#000000",navbarInverseLinkBackgroundActive:"#111111",navbarInverseSearchBackground:"rgb(82, 82, 82)",navbarInverseSearchBackgroundFocus:"#FFFFFF",navbarInverseSearchBorder:"#111111",navbarInverseSearchPlaceholderColor:"#CCCCCC",navbarInverseBrandColor:"#999999",paginationBackground:"#FFFFFF",paginationBorder:"#DDDDDD",paginationActiveBackground:"#F5F5F5",heroUnitBackground:"#EEEEEE",heroUnitHeadingColor:"inherit",heroUnitLeadColor:"inherit",warningText:"#C09853",warningBackground:"#FCF8E3",warningBorder:"rgb(251, 239, 213)",errorText:"#B94A48",errorBackground:"#F2DEDE",errorBorder:"rgb(238, 211, 215)",successText:"#468847",successBackground:"#DFF0D8",successBorder:"rgb(212, 232, 197)",infoText:"#4A7C17",infoBackground:"#EDF2DF",infoBorder:"rgb(228, 232, 197)",tooltipColor:"#FFFFFF",tooltipBackground:"#000000",tooltipArrowWidth:"5px",tooltipArrowColor:"#000000",popoverBackground:"#FFFFFF",popoverArrowWidth:"10px",popoverArrowColor:"#FFFFFF",popoverTitleBackground:"rgb(247, 247, 247)",popoverArrowOuterWidth:"11px",popoverArrowOuterColor:"rgba(0, 0, 0, 0.25)",gridColumns:"12",gridColumnWidth:"60px",gridGutterWidth:"20px",gridRowWidth:"940px",gridColumnWidth1200:"70px",gridGutterWidth1200:"30px",gridRowWidth1200:"1170px",gridColumnWidth768:"42px",gridGutterWidth768:"20px",gridRowWidth768:"724px",fluidGridColumnWidth:"6.382978723404255%",fluidGridGutterWidth:"2.127659574468085%",fluidGridColumnWidth1200:"5.982905982905983%",fluidGridGutterWidth1200:"2.564102564102564%",fluidGridColumnWidth768:"5.801104972375691%",fluidGridGutterWidth768:"2.7624309392265194%",kaGreen:"#71B307",kaGreenLight:"#BED47A",kaBlue:"#314453",kaBlueLight:"#4D6779",grayExtraDark:"#111111",grayExtraLight:"#EEEEEE",graySuperLight:"#F7F7F7",whiteDark:"#FDFDFD",dark:"#21242C",blueDarkUnsaturated:"#3B414E",blueDarkSaturated:"#1F3043",blueLight:"#A9C0D1",greenLight:"#C6D1AD",greenDark:"#356700",yellowGreen:"#9DB63B",okGreen:"#A7CF5B",alertRed:"#C42420",coral:"#EE6666",grayBlue:"#9AB3B9",lightPageBackground:"#FDFDFD",yclaBlue:"#49BAD5",yclaTeal:"#56D0B3",yclaTealDark:"#50C1A7",yclaGreenDark:"#3D9A82",yclaGreen:"#81C262",learnstormBlue:"#4898FC",homepageBlue:"#46A8BF",backgroundBlue:"#00294A",teacherSignupBlue:"#335d7d",homepageGreen:"#2B8E7B",streakColor:"#F79734",facebookColor:"#1A60A2",blueGoogleColor:"#2CAFE2",redGoogleColor:"#BF4434",homepageColor:"#2D585E",upgradedFontFamily:"'Proxima Nova','Helvetica','Corbel',sans-serif",lightTextColor:"#898989",fontSizeTiny:"11px",fontSizeNormal:"14px",fontSizeMedium:"16px",fontSizeExtraLarge:"24px",fontSizeHuge:"36px",fontSizeBakana:"48px",fontSizeBananas:"60px",fixedWidthFontFamily:"'Helvetica Neue',Helvetica,Arial,sans-serif",contentPadding:"20px",primaryButtonBackground:"#89B908",primaryButtonBorder:"#76A005",buttonTextColor:"rgb(122, 122, 122)",buttonBorderRadius:"3px",basicBorderColor:"#CCCCCC",minContainerWidth:"1000px",maxContainerWidth:"1200px",formHintColor:"#999999",guidelineExampleText:"#606060",hoverCardWidth:"450px",menuHighlightColor:"#96AB4F",menuHighlightBorderColor:"#76A005",menuActiveTextColor:"#FFFFFF",menuInactiveTextColor:"#444444",menuSubheaderTextColor:"rgb(120, 120, 120)",menuBorderColor:"#94A170",unreadBackgroundColor:"#ECEEF4",menuLineHeight:"18px",menuSubheaderLineHeight:"17px",menuSubheaderFontSize:"9px",notificationBarColor:"#4858A4",modalBodyTopPadding:"20px",modalDialogPadding:"15px",modalSectionPadding:"9px",mathDomain1:"#11ACCD",mathDomain2:"#63D9EA",mathDomain3:"#027d97",mathDomain4:"#085566",partnerContentDomain1:"#01A995",partnerContentDomain2:"#01D1C1",partnerContentDomain3:"#208170",partnerContentDomain4:"#144F44",csDomain1:"#1FAB54",csDomain2:"#74CF70",csDomain3:"#0D923F",csDomain4:"#085E29",economicsDomain1:"#E07D10",economicsDomain2:"#FFBE26",economicsDomain3:"#A75A05",economicsDomain4:"#953C02",collegeCareersMoreDomain1:"#01A995",collegeCareersMoreDomain2:"#01D1C1",collegeCareersMoreDomain3:"#208170",collegeCareersMoreDomain4:"#144F44",humanitiesDomain1:"#E84D39",humanitiesDomain2:"#FF8482",humanitiesDomain3:"#BE2612",humanitiesDomain4:"#8C1C0D",gtpDomain1:"#1865F2",gtpDomain2:"#1865F2",gtpDomain3:"#1865F2",gtpDomain4:"#1865F2",scienceDomain1:"#CA337C",scienceDomain2:"#FF92C6",scienceDomain3:"#9E034E",scienceDomain4:"#6B0235",testPrepDomain1:"#1865F2",testPrepDomain2:"#1865F2",testPrepDomain3:"#1865F2",testPrepDomain4:"#1865F2",defaultDomain1:"#1865F2",defaultDomain2:"#66afe9",defaultDomain3:"#1152b0",defaultDomain4:"#0d3d82",defaultDomainColor:"#314453",defaultSubjectColor:"#4D6779",defaultTopicColor:"#6A8DA6",defaultHoverColor:"#314453",defaultLinkColor:"#314453",defaultLinkHoverColor:"#6A8DA6",scienceDomainColor:"#94424F",scienceSubjectColor:"#9D4A5A",scienceTopicColor:"#C55F73",scienceHoverColor:"#94424F",scienceLinkColor:"#94424F",scienceLinkHoverColor:"#C55F73",humanitiesDomainColor:"#AD3434",humanitiesSubjectColor:"#C13B31",humanitiesTopicColor:"#D24A45",humanitiesHoverColor:"#AD3434",humanitiesLinkColor:"#AD3434",humanitiesLinkHoverColor:"#D24A45",economicsDomainColor:"#B77033",economicsSubjectColor:"#BF7B34",economicsTopicColor:"#D1933B",economicsHoverColor:"#B77033",economicsLinkColor:"#B77033",economicsLinkHoverColor:"#D1933B",csDomainColor:"#437A39",csSubjectColor:"#53893E",csTopicColor:"#689B51",csHoverColor:"#437A39",csLinkColor:"#437A39",csLinkHoverColor:"#689B51",partnerContentDomainColor:"#218270",partnerContentSubjectColor:"#2C8D7B",partnerContentTopicColor:"#329A86",partnerContentHoverColor:"#218270",partnerContentLinkColor:"#218270",partnerContentLinkHoverColor:"#329A86",essayDomainColor:"#0071B3",mathDomainColor:"#1C758A",mathSubjectColor:"#46A8BF",mathTopicColor:"#4FBAD4",mathHoverColor:"#1C758A",mathLinkColor:"#1C758A",mathLinkHoverColor:"#4FBAD4",testPrepDomainColor:"#644172",testPrepSubjectColor:"#7E5F8E",testPrepTopicColor:"#9A72AC",testPrepHoverColor:"#644172",testPrepLinkColor:"#644172",testPrepLinkHoverColor:"#9A72AC",collegeCareersMoreDomainColor:"#218270",collegeCareersMoreSubjectColor:"#2C8D7B",collegeCareersMoreTopicColor:"#329A86",collegeCareersMoreHoverColor:"#218270",collegeCareersMoreLinkColor:"#218270",collegeCareersMoreLinkHoverColor:"#329A86",satDomainColor:"#0084CE",satSubjectColor:"#0084CE",satTopicColor:"#0084CE",satHoverColor:"#0084CE",satLinkColor:"#0084CE",satLinkHoverColor:"#0084CE",colorProficient:"#1C758A",colorPracticed:"rgb(158, 221, 235)",colorMastery1:"rgb(90, 197, 221)",colorMastery2:"rgb(42, 174, 203)",colorMastery3:"#1C758A",colorSuggested:"#73982C",colorReview:"#E35D04",colorNotStarted:"#CCCCCC",colorStarted:"#C7E5F7",colorStruggling:"#C30202",colorCoachRec:"#4C7E99",colorPersonal:"#00809C",colorPractice:"#96D9FF",colorEnergyPoints:"#005987",pureSmMin:"568px",pureMdMin:"768px",pureLgMin:"1024px",pureXlMin:"1200px",pureXsMax:"567px",pureSmMax:"767px",pureMdMax:"1023px",pureLgMax:"1199px"}
});
KAdefine("javascript/shared-styles-package/aphrodite-css-transition-group.jsx", function(require, module, exports) {
var _require=require("aphrodite"),css=_require.css
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var ReactTransitionGroup=require("react-addons-transition-group")
var aphroditePropType=PropTypes.any
var addClass=function e(r,t){return r.classList.add(t)}
var removeClass=function r(e,t){return e.classList.remove(t)}
var TICK=17
var AphroditeCSSTransitionGroupChild=function(e){babelHelpers.inherits(r,e)
function r(){var t,o,i
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,s=Array(n),p=0;p<n;p++){s[p]=arguments[p]}return i=(t=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),o),o._isMounted=false,o.transition=function(e,r,t){var i=ReactDOM.findDOMNode(o)
if(!i){if(r){r()}return}var n=css(o.props.style[e])
var s=css(o.props.style[e],o.props.style[e+"Active"])
var p=null
var a=function u(){removeClass(i,s)
if(r){r()}}
addClass(i,n)
o.queueClass(n,s)
if(t){p=setTimeout(a,t)
o.transitionTimeouts.push(p)}},o.queueClass=function(e,r){o.classNameQueue.push([e,r])
if(!o.timeout){o.timeout=setTimeout(o.flushClassNameQueue,TICK)}},o.flushClassNameQueue=function(){if(o._isMounted){var e=ReactDOM.findDOMNode(o)
o.classNameQueue.forEach(function(r){var t=r[0],o=r[1]
addClass(e,o)
removeClass(e,t)})}o.classNameQueue.length=0
o.timeout=null},o.componentWillAppear=function(e){if(o.props.appearTimeout!=null){o.transition("appear",e,o.props.appearTimeout)}else{e()}},o.componentWillEnter=function(e){if(o.props.enterTimeout!=null){o.transition("enter",e,o.props.enterTimeout)}else{e()}},o.componentWillLeave=function(e){if(o.props.leaveTimeout!=null){o.transition("leave",e,o.props.leaveTimeout)}else{e()}},t),babelHelpers.possibleConstructorReturn(o,i)}r.prototype.componentWillMount=function t(){this.classNameQueue=[]
this.transitionTimeouts=[]}
r.prototype.componentDidMount=function o(){this._isMounted=true}
r.prototype.componentWillUnmount=function i(){this._isMounted=false
if(this.timeout){clearTimeout(this.timeout)}this.transitionTimeouts.forEach(function(e){clearTimeout(e)})}
r.prototype.render=function n(){return React.Children.only(this.props.children)}
return r}(React.Component)
AphroditeCSSTransitionGroupChild.propTypes={style:PropTypes.shape({enter:aphroditePropType,enterActive:aphroditePropType,leave:aphroditePropType,leaveActive:aphroditePropType,appear:aphroditePropType,appearActive:aphroditePropType}).isRequired,appearTimeout:PropTypes.number,enterTimeout:PropTypes.number,leaveTimeout:PropTypes.number,children:PropTypes.node}
var AphroditeCSSTransitionGroup=function(e){babelHelpers.inherits(r,e)
function r(){var t,o,i
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,s=Array(n),p=0;p<n;p++){s[p]=arguments[p]}return i=(t=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),o),o._wrapChild=function(e){return React.createElement(AphroditeCSSTransitionGroupChild,{style:o.props.transitionStyle,appearTimeout:o.props.transitionAppearTimeout,enterTimeout:o.props.transitionEnterTimeout,leaveTimeout:o.props.transitionLeaveTimeout},e)},t),babelHelpers.possibleConstructorReturn(o,i)}r.prototype.render=function t(){return React.createElement(ReactTransitionGroup,{childFactory:this._wrapChild},this.props.children)}
return r}(React.Component)
AphroditeCSSTransitionGroup.propTypes={transitionStyle:AphroditeCSSTransitionGroupChild.propTypes.style,transitionAppearTimeout:PropTypes.number,transitionEnterTimeout:PropTypes.number,transitionLeaveTimeout:PropTypes.number,children:PropTypes.node}
module.exports=AphroditeCSSTransitionGroup
});
KAdefine("javascript/shared-styles-package/global-styles.js", function(require, module, exports) {
var _wonderBlocksHeader,_wonderBlocksTitle,_defaultSpacing,_rightAlignment
var _aphrodite=require("aphrodite")
var _constants=require("./constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _mediaQueries=require("./media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _practiceTypes=require("../content-types-package/practice-types.js")
var alertRed=_constants2.default.alertRed,homepageBlue=_constants2.default.homepageBlue,kaGreen=_constants2.default.kaGreen,kaGreenLight=_constants2.default.kaGreenLight,kaBlue=_constants2.default.kaBlue,kaBlueLight=_constants2.default.kaBlueLight,learnstormBlue=_constants2.default.learnstormBlue,backgroundBlue=_constants2.default.backgroundBlue,lessDimensionConstants=babelHelpers.objectWithoutProperties(_constants2.default,["alertRed","homepageBlue","kaGreen","kaGreenLight","kaBlue","kaBlueLight","learnstormBlue","backgroundBlue"])
var constants=babelHelpers.extends({},lessDimensionConstants,{moduleHorizontalPadding:20,moduleHorizontalPaddingSmall:16,moduleVerticalPadding:48,moduleVerticalPaddingSmall:40,moduleVerticalPaddingCompactModifer:-16,moduleVerticalPaddingExpandedModifer:16,moduleWidthCentered:608,contentWidth:688,pageWidth:1200,sidebarWidthDesktopWide:295,sidebarWidthDesktop:207,contentModalWidth:1024,topBarHeightDesktop:44,topBarHeightMobile:60})
var borderRadius=4
var missionCalloutVerticalPadding=32
var pageHeaderHeight=62
var pageHeaderHorizontalPadding=20
var pageHeaderHorizontalPaddingMobile=16
var pageWidth=1200
var animations=_aphrodite.StyleSheet.create({simpleSpin:{animationName:{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},animationDuration:"2s",animationIterationCount:"infinite",animationTimingFunction:"linear",transformOrigin:"50% 50%"}})
var domainToColorsMap={math:{domain1:"#11accd",domain2:"#63d9ea",domain3:"#027d97",domain4:"#085566"},"partner-content":{domain1:"#01a995",domain2:"#01d1c1",domain3:"#208170",domain4:"#144f44"},computing:{domain1:"#1fab54",domain2:"#74cf70",domain3:"#0d923f",domain4:"#085e29"},"economics-finance-domain":{domain1:"#e07d10",domain2:"#ffbe26",domain3:"#a75a05",domain4:"#953c02"},gtp:{domain1:"#1865F2",domain2:"#669ff4",domain3:"#0449c9",domain4:"#013493"},humanities:{domain1:"#e84d39",domain2:"#ff8482",domain3:"#be2612",domain4:"#8c1c0d"},science:{domain1:"#ca337c",domain2:"#ff92c6",domain3:"#9e034e",domain4:"#6b0235"},"test-prep":{domain1:"#1865F2",domain2:"#669ff4",domain3:"#0449c9",domain4:"#013493"},"college-careers-more":{domain1:"#01a995",domain2:"#01d1c1",domain3:"#208170",domain4:"#144f44"},"default":{domain1:"#1865F2",domain2:"#66afe9",domain3:"#1152b0",domain4:"#0d3d82"}}
function domainColors(e){return domainToColorsMap[getValidDomainSlug(e)]}function getValidDomainSlug(e){if(e&&_practiceTypes.domainSlugMap[e]){return _practiceTypes.domainSlugMap[e]}return"default"}var oldDomainColors={math:"#3390A6","partner-content":constants.partnerContentDomainColor,computing:constants.csTopicColor,"economics-finance-domain":"#D79D68",humanities:constants.humanitiesDomainColor,science:constants.scienceDomainColor,"test-prep":constants.testPrepDomainColor,"college-careers-more":constants.collegeCareersMoreDomainColor,"default":constants.defaultSubjectColor}
var missionColors={math:{unstarted:"#cccccc",practiced:"#9cdceb",mastery1:"#58c4dd",mastery2:"#29abca",mastery3:"#1c758a",struggling:"#c30202"}}
var colors=babelHelpers.extends({white:"#FFFFFF",gray98:"#FAFAFA",gray97:"#F6F7F7",gray95:"#F0F1F2",gray90:"#E3E5E6",gray85:"#D6D8DA",gray76:"#BABEC2",gray68:"#888D93",gray55:"#707378",gray41:"#626569",gray25:"#3B3E40",gray17:"#21242C",gray10:"#1499af",black:"#000000",alertRed:alertRed,homepageBlue:homepageBlue,kaBlue:kaBlue,kaBlueLight:kaBlueLight,kaGreen:kaGreen,kaGreenLight:kaGreenLight,learnstormBlue:learnstormBlue,backgroundBlue:backgroundBlue,adminGreen:"#78C008",kaBlueExtraLight:"#39c2db",kaBlueHover:"#0c7f99",kaGreenHover:"#518005",skyDark:"#001f4d",recommendationGold:"#ffbe26",starAced:"#ff9c39"},domainToColorsMap,{mission:missionColors,google:"#C1432f",modernGoogle:"#be2612",modernGoogleHover:"#8c1c0d",facebook:"#4267B2",modernFacebook:"#4267B2",modernFacebookHover:"#00294a",wonderBlocksGold:"#FFB100",wonderBlocksLightBlue:"#37C5FD",breadcrumbs:"rgba(255, 255, 255, 0.7)"})
var fonts={regular:"inherit"}
var makeDomainStylesForTemplate=function e(o){return _aphrodite.StyleSheet.create(Object.keys(domainToColorsMap).reduce(function(e,t){e[t]=o(t)
return e},{}))}
var commonButtonStyle={appearance:"none",borderRadius:borderRadius,cursor:"pointer",display:"block",fontFamily:"inherit",fontWeight:"bold",textAlign:"center",fontSize:15,lineHeight:"18px",padding:"10px 16px",borderWidth:1,borderStyle:"solid",":hover":{textDecoration:"none"}}
function createButtonStyles(e){var o=e.initial,t=e.hover
return babelHelpers.extends({},commonButtonStyle,{background:o.backgroundColor||"transparent",borderColor:o.color,color:o.color,":hover":babelHelpers.extends({},commonButtonStyle[":hover"],{background:t.backgroundColor||undefined,border:"1px solid "+t.color,color:t.color})})}function createPrimaryButtonStyles(e){var o=e.initial,t=e.hover
return babelHelpers.extends({},commonButtonStyle,{borderColor:o.color,backgroundColor:o.color,color:"white",":hover":babelHelpers.extends({},commonButtonStyle[":hover"],{background:t.color||undefined,border:"1px solid "+t.color,color:"white"})})}function createSmallPrimaryButtonStyles(e){var o=e.initial,t=e.hover
return babelHelpers.extends({},createPrimaryButtonStyles({initial:o,hover:t}),{flexShrink:0,fontWeight:"normal",fontSize:12,height:30,paddingLeft:10,paddingRight:10,paddingTop:6,paddingBottom:0})}var buttons=makeDomainStylesForTemplate(function(e){return createButtonStyles({initial:{color:domainColors(e).domain3},hover:{color:domainColors(e).domain4}})})
buttons.create=createButtonStyles
var primaryButtons=makeDomainStylesForTemplate(function(e){return createPrimaryButtonStyles({initial:{color:domainColors(e).domain3},hover:{color:domainColors(e).domain4}})})
var smallPrimaryButtons=makeDomainStylesForTemplate(function(e){return createSmallPrimaryButtonStyles({initial:{color:domainColors(e).domain3},hover:{color:domainColors(e).domain4}})})
function createSmallButtonStyles(e){var o=e.initial,t=e.hover
return{appearance:"none",background:o.backgroundColor||"transparent",border:"1px solid "+o.color,borderRadius:borderRadius,color:o.color,cursor:"pointer",display:"block",fontFamily:"inherit",fontSize:12,fontWeight:"bold",height:30,paddingLeft:10,paddingRight:10,paddingTop:7,paddingBottom:0,textAlign:"center",":hover":{background:t.backgroundColor||undefined,border:"1px solid "+t.color,color:t.color,textDecoration:"none"}}}var smallButtons=makeDomainStylesForTemplate(function(e){return createSmallButtonStyles({initial:{color:domainColors(e).domain3},hover:{color:domainColors(e).domain4}})})
smallButtons.create=createSmallButtonStyles
var linksWithoutVisited=makeDomainStylesForTemplate(function(e){return{color:domainColors(e).domain3}})
var linksWithoutHover=makeDomainStylesForTemplate(function(e){return{color:domainColors(e).domain3,":hover":{color:domainColors(e).domain3}}})
var queries={small:_mediaQueries2.default.smOrSmaller,medium:_mediaQueries2.default.md,large:_mediaQueries2.default.lg,xlarge:_mediaQueries2.default.xl}
var breadcrumbStyles={color:colors.breadcrumbs,fontFamily:"inherit",fontSize:15,fontWeight:"bold",letterSpacing:.8,lineHeight:"19px",textTransform:"uppercase",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased"}
var typography={subjectHeadingDesktop:{fontFamily:"inherit",fontSize:50,fontWeight:"bold",lineHeight:"61px"},subjectHeadingMobile:{fontFamily:"inherit",fontSize:35,fontWeight:"bold",lineHeight:"37px"},conceptHeadingDesktop:{fontFamily:"inherit",fontSize:35,fontWeight:"bold",lineHeight:"37px"},conceptHeadingMobile:{fontFamily:"inherit",fontSize:23,fontWeight:"bold",lineHeight:"27px"},subheadingDesktop:{fontFamily:"inherit",fontSize:23,fontWeight:"bold",lineHeight:"27px"},subheadingMobile:{fontFamily:"inherit",fontSize:20,fontWeight:"bold",lineHeight:"24px"},smallSubheadingDesktop:{fontFamily:"inherit",fontSize:20,lineHeight:1.25},smallSubheadingMobile:{fontFamily:"inherit",fontSize:15,lineHeight:1.25},smallHeading:{color:colors.gray25,fontFamily:"inherit",fontSize:17,fontWeight:"bold",lineHeight:"23px"},smallHeadingMobile:{color:colors.gray25,fontFamily:"inherit",fontSize:15,fontWeight:"bold",lineHeight:"18px"},accentHeading:{color:colors.gray68,fontFamily:"inherit",fontSize:15,fontWeight:"bold",letterSpacing:.8,lineHeight:"19px",textTransform:"uppercase"},bodyLarge:{fontFamily:fonts.regular,fontSize:20,lineHeight:"30px"},bodySmall:{fontFamily:fonts.regular,fontSize:17,fontWeight:"normal",lineHeight:"23px"},bodySmallBold:{fontFamily:fonts.regular,fontSize:17,fontWeight:"bold",lineHeight:"23px"},bodyXsmall:{fontFamily:fonts.regular,fontSize:15,lineHeight:"22px"},bodyXsmallBold:{fontFamily:"inherit",fontSize:15,fontWeight:"bold",lineHeight:"22px"},breadcrumb:breadcrumbStyles,breadcrumbSmall:babelHelpers.extends({},breadcrumbStyles,{fontSize:12,lineHeight:"13px"}),labelLarge:{fontFamily:"inherit",fontSize:23,fontWeight:"bold",lineHeight:"27px"},labelMedium:{fontFamily:"inherit",fontSize:15,fontWeight:"bold",lineHeight:"18px"},labelSmall:{fontFamily:fonts.regular,fontSize:12,lineHeight:"14px"},caption:{fontFamily:fonts.regular,fontSize:14,fontStyle:"italic",lineHeight:"17px"},desktopScalingOnMobile:{MozTextSizeAdjust:"100%",MsTextSizeAdjust:"100%",WebkitTextSizeAdjust:"100%"},modalSubtitle:{fontSize:12,lineHeight:1.65,WebkitFontSmoothing:"antialiased",fontWeight:"bold"},wonderBlocksHeader:(_wonderBlocksHeader={paddingLeft:16,paddingRight:16,paddingBottom:24,paddingTop:34},_wonderBlocksHeader[_mediaQueries2.default.mdOrLarger]={paddingBottom:32},_wonderBlocksHeader),wonderBlocksTitle:(_wonderBlocksTitle={color:colors.white,fontWeight:900,fontSize:28,lineHeight:"32px",margin:0},_wonderBlocksTitle[_mediaQueries2.default.mdOrLarger]={fontSize:36,lineHeight:"40px"},_wonderBlocksTitle),wonderBlocksLabelLarge:{fontSize:16,lineHeight:"20px",fontWeight:700}}
var zIndexes={drawingArea:1,aboveDrawingArea:2,interactiveComponent:3}
var chromeSizes={exercisePhoneFooterHeight:60}
var moduleLayout={defaultAlignment:{marginLeft:"auto",marginRight:"auto",maxWidth:constants.pageWidth},defaultSpacing:(_defaultSpacing={paddingBottom:constants.moduleVerticalPadding,paddingLeft:constants.moduleHorizontalPadding,paddingRight:constants.moduleHorizontalPadding,paddingTop:constants.moduleVerticalPadding},_defaultSpacing[queries.small]={paddingBottom:constants.moduleVerticalPaddingSmall,paddingLeft:constants.moduleHorizontalPaddingSmall,paddingRight:constants.moduleHorizontalPaddingSmall,paddingTop:constants.moduleVerticalPaddingSmall},_defaultSpacing),rightAlignment:(_rightAlignment={},_rightAlignment[queries.large]={marginLeft:"calc(50% - ("+constants.moduleWidthCentered+"px / 2))",maxWidth:constants.moduleWidthCentered+(constants.pageWidth-constants.moduleWidthCentered)/2},_rightAlignment[queries.xlarge]={marginLeft:"calc(50% - ("+constants.moduleWidthCentered+"px / 2))",maxWidth:constants.moduleWidthCentered+(constants.pageWidth-constants.moduleWidthCentered)/2},_rightAlignment)}
var standardTransitionMs=200
var standardTransitionExtras="ease-out"
var standardTransition=standardTransitionMs/1e3+"s "+standardTransitionExtras
var modalBackdropOpacity=.72
module.exports={animations:animations,borderRadius:borderRadius,buttons:buttons,constants:constants,smallButtons:smallButtons,primaryButtons:primaryButtons,smallPrimaryButtons:smallPrimaryButtons,commonButtonStyle:commonButtonStyle,colors:colors,fonts:fonts,pageHeaderHeight:pageHeaderHeight,pageHeaderHorizontalPadding:pageHeaderHorizontalPadding,pageHeaderHorizontalPaddingMobile:pageHeaderHorizontalPaddingMobile,missionCalloutVerticalPadding:missionCalloutVerticalPadding,linksWithoutVisited:linksWithoutVisited,linksWithoutHover:linksWithoutHover,makeDomainStylesForTemplate:makeDomainStylesForTemplate,moduleLayout:moduleLayout,oldDomainColors:oldDomainColors,pageWidth:pageWidth,queries:queries,typography:typography,zIndexes:zIndexes,chromeSizes:chromeSizes,domainColors:domainColors,getValidDomainSlug:getValidDomainSlug,standardTransitionMs:standardTransitionMs,standardTransitionExtras:standardTransitionExtras,standardTransition:standardTransition,modalBackdropOpacity:modalBackdropOpacity}
});
KAdefine("javascript/shared-styles-package/icon.jsx", function(require, module, exports) {
"use strict"
var React=require("react")
var PropTypes=require("prop-types")
var BASE_ICON_SIZE=10
var Icon=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function t(){var e=this.props,r=e.color,t=e.pathClassName,s=e.className,p=e.title,a=e.style
var o=this.props,i=o.icon,l=o.size
var n=""
if(typeof i==="string"){i={path:i,width:BASE_ICON_SIZE,height:BASE_ICON_SIZE}}if(typeof l!=="number"){l=1
n="em"}var c=l
var h=c/i.height*i.width
var u=0
var y=0
return React.createElement("svg",{role:"img","aria-label":p,"aria-hidden":p?null:true,className:s,style:a,focusable:!!this.props.focusable,width:h+n,height:c+n,viewBox:u+" "+y+" "+i.width+" "+i.height},!!p&&React.createElement("title",null,p),React.createElement("path",{className:t,fill:r,d:i.path}))}
return r}(React.Component)
Icon.propTypes={className:PropTypes.string,style:React.PropTypes.any,title:PropTypes.string,color:PropTypes.string,focusable:PropTypes.bool,icon:PropTypes.oneOfType([PropTypes.shape({height:PropTypes.number.isRequired,path:PropTypes.string.isRequired,width:PropTypes.number.isRequired}),PropTypes.string]),pathClassName:PropTypes.string,size:PropTypes.number}
Icon.defaultProps={color:"currentColor"}
module.exports=Icon
});
KAdefine("javascript/shared-styles-package/icon.angleBracketLeft.js", function(require, module, exports) {
module.exports="M6.7,8.8L3,5l3.6-3.8c0.3-0.3,0.2-0.7,0-1c-0.2-0.3-0.7\n    -0.2-1,0l-4,4.3c-0.2,0.3-0.2,0.7,0,0.9l4.1,4.3c0.3,0.3,0.7,0.3,1,0\n    C7,9.5,7,9.1,6.7,8.8z"
});
KAdefine("javascript/shared-styles-package/media-queries.js", function(require, module, exports) {
var _require=require("./constants.js"),pureXsMax=_require.pureXsMax,pureSmMin=_require.pureSmMin,pureSmMax=_require.pureSmMax,pureMdMin=_require.pureMdMin,pureMdMax=_require.pureMdMax,pureLgMin=_require.pureLgMin,pureLgMax=_require.pureLgMax,pureXlMin=_require.pureXlMin
var unlabeledQueries={xs:"@media screen and (max-width: "+pureXsMax+")",sm:"@media screen and (min-width: "+pureSmMin+") and "+("(max-width: "+pureSmMax+")"),md:"@media screen and (min-width: "+pureMdMin+") and "+("(max-width: "+pureMdMax+")"),lg:"@media screen and (min-width: "+pureLgMin+") and "+("(max-width: "+pureLgMax+")"),xl:"@media screen and (min-width: "+pureXlMin+")",xsOrSmaller:"@media screen and (max-width: "+pureXsMax+")",smOrSmaller:"@media screen and (max-width: "+pureSmMax+")",mdOrSmaller:"@media screen and (max-width: "+pureMdMax+")",lgOrSmaller:"@media screen and (max-width: "+pureLgMax+")",smOrLarger:"@media screen and (min-width: "+pureSmMin+")",mdOrLarger:"@media screen and (min-width: "+pureMdMin+")",lgOrLarger:"@media screen and (min-width: "+pureLgMin+")",xlOrLarger:"@media screen and (min-width: "+pureXlMin+")"}
var labeledQueries={}
for(var _iterator=Object.keys(unlabeledQueries),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref
if(_isArray){if(_i>=_iterator.length)break
_ref=_iterator[_i++]}else{_i=_iterator.next()
if(_i.done)break
_ref=_i.value}var name=_ref
var unlabeledQuery=unlabeledQueries[name]
var labeledQuery=unlabeledQuery+" /* mediaQueries."+name+" */"
labeledQueries[name]=labeledQuery}module.exports=labeledQueries
});
