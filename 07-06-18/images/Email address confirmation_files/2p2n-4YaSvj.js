if (self.CavalryLogger) { CavalryLogger.start_js(["FEt5G"]); }

__d("CavalryLoggerImpl",["Arbiter","Banzai","Bootloader","ImageTimingHelper","ISB","NavigationTimingHelper","PageEvents","PageletEventConstsJS","PageletEventsHelper","PerfXLogger","ResourceTimingBootloaderHelper","ScriptPath","performance","performanceAbsoluteNow","KillabyteProfilerConfig","__getTotalFactories","__getCompileTime","__getFactoryTime"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){__p&&__p();var u=b("KillabyteProfilerConfig").htmlProfilerModule,v=b("KillabyteProfilerConfig").profilerModule,w="cavalry",x=["t_start","t_paint","t_cstart"],y=window.CavalryLogger;Object.assign(y.prototype,{initializeInstrumentation:function(){__p&&__p();if(this.instrumentation_started)return;var c=this;g.subscribe("BigPipe/init",function(a,b){b.lid==c.lid&&b.arbiter&&(c._recordTTIEvent(b.arbiter,"tti_bigpipe"),c._recordDisplayedEvent(b.arbiter,"all_pagelets_displayed"),c._recordLoadedEvent(b.arbiter,"all_pagelets_loaded"),c._recordPageletEventsTime(b.arbiter))});g.subscribe("MRenderingScheduler/init",function(a,b){b.lid==c.lid&&(c._recordTTIEvent(b.arbiter,"MRenderingScheduler/tti"),c._recordDisplayedEvent(b.arbiter,"MRenderingScheduler/dd"),c._recordLoadedEvent(b.arbiter,"MRenderingScheduler/e2e"),c._recordPageletEventsTime(b.arbiter))});g.subscribe(m.BIGPIPE_ONLOAD,function(event,d){a.bigPipe&&c.lid===a.bigPipe.lid&&c.addPiggyback("cjs_factory_count_e2e",b("__getTotalFactories")()).addPiggyback("cjs_compile_time_e2e",b("__getCompileTime")()).addPiggyback("cjs_factory_time_e2e",b("__getFactoryTime")())});c.addPiggyback("script_path",r.getScriptPath());this.is_detailed_profiler&&o.init();this.instrumentation_started=!0},_recordTTIEvent:function(a,b){__p&&__p();var c=this;a.subscribe(b,function(event,a){if(a.lid==c.lid){if(a.metrics)for(var b in a.metrics)c.addPiggyback(b,a.metrics[b]);a.usageSnapshot&&(c.ttiUsageSnapshot=a.usageSnapshot);c._setTTIPhase(a.phase).measurePageLoad(!0,a.ts);c.setAbsTimeStamp("t_bigpipe_tti",a.ts,!0)}})},_recordDisplayedEvent:function(a,b){var c=this;a.subscribe(b,function(event,a){a.lid===c.lid&&(a.usageSnapshot&&(c.ddUsageSnapshot=a.usageSnapshot),c.setAbsTimeStamp("t_marker_all_pagelets_displayed",a.ts,!0))})},_recordLoadedEvent:function(a,b){var c=this;a.subscribe(b,function(event,a){a.lid===c.lid&&c.setAbsTimeStamp("t_marker_bigpipe_e2e",a.ts,!0)})},_recordPageletEventsTime:function(a){__p&&__p();if(this.is_detailed_profiler){var b=this;a.subscribe("pagelet_event",function(event,a){if(a.lid==b.lid){var c=a.id;b.events[c]=b.events[c]||{};b.events[c][a.event]=a.ts-window._cstart;a.event===n.ARRIVE_END&&(b.events[c].phase=a.phase)}})}},_setTTIPhase:function(a){this.addPiggyback("tti_phase",a);return this},setTimeStamp:function(a,b,c,d){this.mark(a);var e=this.values.t_cstart||this.values.t_start;e=d?e+d:t();this.setValue(a,e,b,c);this.tti_event&&a==this.tti_event&&this.measurePageLoad(b);return this},setAbsTimeStamp:function(a,b,c,d){this.setValue(a,b,c,d);this.tti_event&&a==this.tti_event&&this.measurePageLoad(c,b);return this},_logE2E:function(){var a={lid:this.lid,t_creport:t(),cavalry_e2e:!0};k.token&&(a.fb_isb=k.token);for(var b=0;b<x.length;b++)a[x[b]]=this.values[x[b]];h.post(w,a,{signal:!0,retry:!1});this.e2eLogged=!0},log:function(){__p&&__p();this.e2eLogged||this._logE2E();var a={lid:this.lid};k.token&&(a.fb_isb=k.token);this.addPiggyback("pagelet_events",o.getMetrics(this.lid));this.setValue("client_pixel_ratio_10x",parseInt((window.devicePixelRatio||1)*10,10));this._moveBootloaderData();a=babelHelpers["extends"]({t_creport:t()},a,this.values,this.piggy_values);var b=window.__bodyWrapper;if(b.getCodeUsage&&v){if(!this.start||!this.e2e||!this.dd)throw new Error("Timestamps are missing in Cavalry. Please report this to the Web Speed team");var c=v.findUsedCSSSelectors(document,v.getDocumentStylesheets(document));c={js_calls:JSON.stringify(b.getCodeUsage()),css_selectors:JSON.stringify(c),bootloads:JSON.stringify(this._getBootloadsUntil(this.e2e))};u&&(c.html=JSON.stringify(u.getKillabyteHTMLData()));var d=babelHelpers["extends"]({},v.getDataForSnapshot(this.ddUsageSnapshot),{bootloads:JSON.stringify(this._getBootloadsUntil(this.dd))});c={e2e:c,dd:d};if(this.ttiUsageSnapshot){if(!this.tti)throw new Error("tti timestamp should always be present if we have usage data");c.tti=babelHelpers["extends"]({},v.getDataForSnapshot(this.ttiUsageSnapshot),{bootloads:JSON.stringify(this._getBootloadsUntil(this.tti))})}g.inform("cavalry_usage_data_collected",{usageData:c,lid:this.lid},g.BEHAVIOR_STATE);b.clearCodeUsage()}d=p.getPayload(a.lid);d&&this._logPerfXPiggybacks(a,d);h.post(w,a,h.VITAL);c=this.values;this.values={};this.piggy_values={};for(var b=0;b<x.length;b++)this.values[x[b]]=c[x[b]];g.inform("cavalry_log_sent",a,g.BEHAVIOR_STATE)},_logPerfXPiggybacks:function(a,b){a.perfx_page=b.perfx_page,a.perfx_page_type=b.perfx_page_type,a.perfx_tti=b.tti,a.perfx_e2e=b.e2e},_moveBootloaderData:function(){this.log_resources&&this.addPiggyback("resource_timing_bootloader",q.mergeBootloaderMetricsAndResourceTimings(this.piggy_values.resource_timing_bootloader,this.bootloader_metrics,!1,{}))},_collectMetrics:function(a){(!this.metric_collected||a)&&(this.metric_collected=!0,this.addPiggyback("tag",document.getElementsByTagName("*").length))},_getBootloadsUntil:function(a){return Object.entries(i.getBootloadedComponents()).filter(function(b){b[0];b=b[1];return b>=this.start&&b<=a}.bind(this)).map(function(a){var b=a[0];a[1];return b})},measurePageLoad:function(a,b){b?this.setAbsTimeStamp("t_tti",b,a):this.setTimeStamp("t_tti",a),this._collectMetrics(a)},collectBrowserTiming:function(a){if(s.timing){this.start=s.timing.navigationStart;this.tti=this.values.t_bigpipe_tti;this.dd=this.values.t_marker_all_pagelets_displayed;this.e2e=this.values.t_onload;a=l.getNavTimings();this.addPiggyback("navigation_timing",a);this.log_resources&&(this.addPiggyback("resource_timing_bootloader",q.getMetrics(0,!1).data),this._collectTTIAndE2EWithImages())}},collectTimingForAsync:function(a,b){__p&&__p();if(!b)return;if(s.timing&&s.getEntriesByName){a=s.getEntriesByName(b);if(a.length===0)return;this.start=s.timing.navigationStart+a[0].startTime;this.tti=this.values.t_bigpipe_tti;this.e2e=this.values.t_onload;b=l.getAsyncRequestTimings(b);this.addPiggyback("navigation_timing",b);this.log_resources&&(this.addPiggyback("resource_timing_bootloader",q.getMetrics(a[0].startTime,!1).data),this._collectTTIAndE2EWithImages())}},_collectTTIAndE2EWithImages:function(){var a=s.timing.navigationStart,b=this.values.t_bigpipe_tti,c=this.values.t_marker_bigpipe_e2e,d=j.getImageTimings(this.lid);b=q.getLastTTIAndE2EImageResponseEnds(b,c,d);!isNaN(b.TTI)&&b.TTI!==a&&this.setAbsTimeStamp("t_tti_with_images",b.TTI);!isNaN(b.E2E)&&b.E2E!==a&&this.setAbsTimeStamp("t_marker_bigpipe_e2e_with_images",b.E2E)}});Object.assign(y,{startInstrumentation:function(){for(var a in y.instances){var b=y.instances[a];b.initializeInstrumentation();"t_tti"in b.values&&b.measurePageLoad(!1,b.values.t_tti)}},hookLogOnLoad:function(a){g.registerCallback(function(){y.setPageID(a),y.instances[a].log()},[m.NATIVE_ONLOAD])},hookCollectAndLogOnLoad:function(a){g.registerCallback(function(){y.getInstance(a).collectBrowserTiming(),y.getInstance(a).log()},[m.BIGPIPE_ONLOAD])}});e.exports=y}),null);