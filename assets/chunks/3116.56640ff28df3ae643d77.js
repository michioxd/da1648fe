(self.webpackChunk=self.webpackChunk||[]).push([[3116],{"../node_modules/date-fns/esm/formatDistance/index.js":function(O,y,a){"use strict";a.d(y,{Z:function(){return d}});var u=a("../node_modules/date-fns/esm/_lib/defaultOptions/index.js"),l=a("../node_modules/date-fns/esm/toDate/index.js"),g=a("../node_modules/date-fns/esm/_lib/requiredArgs/index.js");function f(r,n){(0,g.Z)(2,arguments);var t=(0,l.Z)(r),p=(0,l.Z)(n),_=t.getTime()-p.getTime();return _<0?-1:_>0?1:_}function S(r,n){(0,g.Z)(2,arguments);var t=(0,l.Z)(r),p=(0,l.Z)(n),_=t.getFullYear()-p.getFullYear(),h=t.getMonth()-p.getMonth();return _*12+h}function x(r){(0,g.Z)(1,arguments);var n=(0,l.Z)(r);return n.setHours(23,59,59,999),n}function j(r){(0,g.Z)(1,arguments);var n=(0,l.Z)(r),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function I(r){(0,g.Z)(1,arguments);var n=(0,l.Z)(r);return x(n).getTime()===j(n).getTime()}function E(r,n){(0,g.Z)(2,arguments);var t=(0,l.Z)(r),p=(0,l.Z)(n),_=f(t,p),h=Math.abs(S(t,p)),c;if(h<1)c=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-_*h);var N=f(t,p)===-_;I((0,l.Z)(r))&&h===1&&f(r,p)===1&&(N=!1),c=_*(h-Number(N))}return c===0?0:c}function D(r,n){return(0,g.Z)(2,arguments),(0,l.Z)(r).getTime()-(0,l.Z)(n).getTime()}var T={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(n){return n<0?Math.ceil(n):Math.floor(n)}},C="trunc";function R(r){return r?T[r]:T[C]}function A(r,n,t){(0,g.Z)(2,arguments);var p=D(r,n)/1e3;return R(t==null?void 0:t.roundingMethod)(p)}var $=a("../node_modules/date-fns/esm/_lib/defaultLocale/index.js");function P(r,n){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t]);return r}function L(r){return P({},r)}var i=a("../node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),m=1440,s=2520,e=43200,o=86400;function d(r,n,t){var p,_;(0,g.Z)(2,arguments);var h=(0,u.j)(),c=(p=(_=t==null?void 0:t.locale)!==null&&_!==void 0?_:h.locale)!==null&&p!==void 0?p:$.Z;if(!c.formatDistance)throw new RangeError("locale must contain formatDistance property");var N=f(r,n);if(isNaN(N))throw new RangeError("Invalid time value");var v=P(L(t),{addSuffix:Boolean(t==null?void 0:t.addSuffix),comparison:N}),b,F;N>0?(b=(0,l.Z)(n),F=(0,l.Z)(r)):(b=(0,l.Z)(r),F=(0,l.Z)(n));var Z=A(F,b),W=((0,i.Z)(F)-(0,i.Z)(b))/1e3,M=Math.round((Z-W)/60),U;if(M<2)return t!=null&&t.includeSeconds?Z<5?c.formatDistance("lessThanXSeconds",5,v):Z<10?c.formatDistance("lessThanXSeconds",10,v):Z<20?c.formatDistance("lessThanXSeconds",20,v):Z<40?c.formatDistance("halfAMinute",0,v):Z<60?c.formatDistance("lessThanXMinutes",1,v):c.formatDistance("xMinutes",1,v):M===0?c.formatDistance("lessThanXMinutes",1,v):c.formatDistance("xMinutes",M,v);if(M<45)return c.formatDistance("xMinutes",M,v);if(M<90)return c.formatDistance("aboutXHours",1,v);if(M<m){var z=Math.round(M/60);return c.formatDistance("aboutXHours",z,v)}else{if(M<s)return c.formatDistance("xDays",1,v);if(M<e){var H=Math.round(M/m);return c.formatDistance("xDays",H,v)}else if(M<o)return U=Math.round(M/e),c.formatDistance("aboutXMonths",U,v)}if(U=E(F,b),U<12){var X=Math.round(M/e);return c.formatDistance("xMonths",X,v)}else{var Y=U%12,B=Math.floor(U/12);return Y<3?c.formatDistance("aboutXYears",B,v):Y<9?c.formatDistance("overXYears",B,v):c.formatDistance("almostXYears",B+1,v)}}},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/imapsync/index.vue?vue&type=style&index=0&id=d9c68060&prod&lang=scss&":function(){},"./js/api/endpoint/index.ts":function(O,y,a){"use strict";a.d(y,{RA:function(){return m},yY:function(){return L},HT:function(){return R},a4:function(){return A},MA:function(){return T}});var u=a("./js/api/endpoint/request.ts"),l=a("../node_modules/vue/dist/vue.common.prod.js");const g=(s,e)=>{const o=(0,l.reactive)({data:s,params:e,state:{isLoading:!1,isOk:!0,isError:!1,error:null}});return{store:o,setData:t=>{o.data=t},setParams:t=>{o.params=t},setState:t=>{o.state=Object.assign({},{isLoading:!1,isOk:!1,isError:!1,error:null},t)}}};var f=a("../node_modules/ramda/es/index.js"),S=a("./js/context/index.ts");const x=(s,e)=>{if(s.includes(":")){const o=/:[a-z]*/g,d=[];return{url:s.replace(o,n=>{if(n===":domain"&&!e.domain)return S.T.session.domain;n=n.slice(1);const t=e[n].toString();if(typeof t=="undefined")throw new Error(`EndpointParamError: ${n} is not defined`);return d.push(n),t}),urlParams:d}}return{url:s,urlParams:[]}},j=(s,e,o={})=>{const{store:d,setData:r,setState:n,setParams:t}=g(o.data||{},{});return{store:d,setData:r,request:async _=>{const h={method:s,url:e,params:_||{},options:o};if(!(_ instanceof FormData)){const N=f.D95(b=>typeof b=="string"||typeof b=="number",h.params),v=x(e,N);h.url=v.url,_&&(h.params=f.CEd(v.urlParams,h.params))}t(_||{}),n({isLoading:!0,isError:!1,error:null,isOk:!0});const c=await(0,u.W)(h);return c.state==="success"&&s==="get"&&r(c.data),n({isLoading:!1}),c.state==="error"&&n({error:c,isError:!0,isOk:!1}),c}}},I=(s,e,o={})=>{const{store:d,setData:r,request:n}=j(s,e,o);return Object.freeze({get data(){return f.d9v(d.data)},set data(t){r(t)},get params(){return f.d9v(d.params)},get state(){return f.d9v(d.state)},request:n,bindData(t){return function(){return t?t(d.data):d.data}}})},E=(s,e,o={})=>{const{store:d,request:r}=j(s,e,o);return Object.freeze({get params(){return f.d9v(d.params)},get state(){return f.d9v(d.state)},request:r})},D=(s,e)=>(s.notify(),e(!1)),T=(s,e=D)=>async(o,d,r)=>{const t=(await Promise.all(s.map(p=>p(o,d)))).find(p=>p.state==="error");if(typeof t!="undefined"){const{error:p}=t;return e(p,r)}r()};var C=a("./js/gettext.js");const R=(s,e)=>I("get",s,e),A=(s,e)=>E("post",s,e),$=(s,e)=>createMutation("put",s,e),P=(s,e)=>createMutation("patch",s,e),L=(s,e)=>E("delete",s,e),i=null,m=C.$gettext},"./js/composables/dateFilter.ts":function(O,y,a){"use strict";a.d(y,{W:function(){return S},f:function(){return g.f}});var u=a("../node_modules/ramda/es/index.js"),l=a("../node_modules/date-fns/esm/format/index.js"),g=a("./js/modules/date-formats.ts"),f=a("./js/modules/customizations/date-formats/default.ts");const S=u.WAo((x,j)=>{if(j)try{return(0,l.Z)(j,g.f.value[x])}catch(I){return console.warn(`Given ${x} format is incorrect:
${I.message}`),(0,l.Z)(j,f.d[x])}return""})},"./js/composables/filters.ts":function(O,y,a){"use strict";a.d(y,{Q0:function(){return A},aS:function(){return P},d5:function(){return $},eB:function(){return T},hT:function(){return E},kC:function(){return I},n9:function(){return R},zM:function(){return D}});var u=a("../node_modules/date-fns/esm/formatDistance/index.js"),l=a("../node_modules/punycode/punycode.es6.js"),g=a("./js/composables/dateFilter.ts"),f=a("./js/composables/gettext.ts");const{$gettext:S,$ngettext:x,$gettextInterpolate:j}=(0,f.Z)(),I=i=>{var m;return i?((m=i.at(0))===null||m===void 0?void 0:m.toUpperCase())+i.slice(1):""},E=(i,m="datetime")=>(0,g.W)(m,i),D=i=>(0,u.Z)(i,new Date),T=(i,m=1024)=>{const s=Number(i);if(!s)return"0 B";const e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(s)/Math.log(m));return`${parseFloat((s/m**o).toFixed(2))} ${e[o]}`},C=i=>{try{return(0,l.xX)(i)}catch(m){return i}},R=i=>(0,l.xX)(i),A=i=>{if(!i||!i.includes("@"))return i;const[m,s]=i.split("@");return[m,C(s)].join("@")},$=i=>{if(i<60)return S("less than a minute");const m=Math.floor(i/60)%60,s=Math.floor(i/3600)%24,e=Math.floor(i/(3600*24)),o=[e?x("%{days} day","%{days} days",e):null,s?x("%{hours} hour","%{hours} hours",s):null,m?x("%{minutes} minute","%{minutes} minutes",m):null].filter(Boolean).join(", ");return j(o,{days:e,hours:s,minutes:m})},P=(i,m)=>i.length<=m?i:`${i.substring(0,m)}...`,L=()=>({capitalize:I,date:E,distanceFromNow:D,humanReadableSize:T,p6eUnicode:R,p6eUnicodeEmail:A,formatUptime:$,truncateString:P})},"./js/endpoints/imapsync/index.ts":function(O,y,a){"use strict";a.d(y,{Vv:function(){return g},gi:function(){return S},pv:function(){return f},uW:function(){return x}});var u=a("./js/api/endpoint/index.ts");const l={IMAPSYNC_AUTHENTICATION_FAILURE:(0,u.RA)("ImapSync authentication failure"),IMAPSYNC_CONNECTION_FAILURE:(0,u.RA)("ImapSync connection failure"),IMAPSYNC_CONNECTION_FAILURE_HOST_SRC:(0,u.RA)("ImapSync host source connection failure"),IMAPSYNC_CONNECTION_FAILURE_HOST_DST:(0,u.RA)("ImapSync host destination connection failure"),IMAPSYNC_AUTHENTICATION_FAILURE_USER_SRC:(0,u.RA)("ImapSync user source authentication failure"),IMAPSYNC_AUTHENTICATION_FAILURE_USER_DST:(0,u.RA)("ImapSync user destination authentication failure"),IMAPSYNC_MIGRATION_LIMIT_ERROR:(0,u.RA)("Destination email is currently being used for migration by another process")},g=(0,u.HT)("/imapsync/migrations"),f=(0,u.yY)("/imapsync/migrations/:id",{errorMessages:{IMAPSYNC_PROCESS_NOT_FOUND:(0,u.RA)("ImapSync process not found")}}),S=(0,u.a4)("/imapsync/import",{errorMessages:l}),x=(0,u.a4)("/imapsync/export",{errorMessages:l})},"./js/pages/user/imapsync/index.vue":function(O,y,a){"use strict";a.r(y),a.d(y,{default:function(){return m}});var u=function(){var e=this,o=e._self._c;return o("app-page",{attrs:{actions:[{label:e.$gettext("Import e-mails"),name:"user/imapsync/import",icon:"#import"},{label:e.$gettext("Export e-mails"),name:"user/imapsync/export",icon:"#export",theme:"safe"}]},scopedSlots:e._u([{key:"default",fn:function(){return[o("ui-r-table",e._b({attrs:{"disable-pagination":""},scopedSlots:e._u([{key:"buttons:before:end",fn:function(){return[o("ui-refresh-timer",{attrs:{options:{30:e.$gettext("30 seconds"),60:e.$gettext("1 minute"),120:e.$gettext("2 minutes"),300:e.$gettext("5 minutes")},"initial-delay":"60","on-refresh":e.getMigrationsData}})]},proxy:!0},{key:"col:to",fn:function({to:d,isImport:r}){return[e._v(`
                `+e._s(d.username)+`
                `),o("ui-tooltip",{directives:[{name:"margin",rawName:"v-margin:left",value:.5,expression:"0.5",arg:"left"}],attrs:{icon:r?"import":"export",theme:"primary"}},[o("span",{domProps:{textContent:e._s(r?e.$gettext("Import"):e.$gettext("Export"))}})])]}},{key:"col:from_username",fn:function({from:d}){return[e._v(`
                `+e._s(d.username)+`
            `)]}},{key:"col:to_server",fn:function({to:d}){return[e._v(`
                `+e._s(d.server)+`
            `)]}},{key:"col:from_server",fn:function({from:d}){return[e._v(`
                `+e._s(d.server)+`
            `)]}},{key:"col:started",fn:function({started:d}){return[e._v(`
                `+e._s(e.date(d,"datetime"))+`
            `)]}},{key:"row:actions",fn:function({item:d}){return[o("ui-button-icon",{attrs:{theme:"danger",icon:"cancel",title:e.$gettext("Cancel Process")},on:{click:function(r){return e.stopMigrationDialog(d)}}})]}},{key:"table:after",fn:function(){return[o("div",{directives:[{name:"margin",rawName:"v-margin:top",value:1.5,expression:"1.5",arg:"top"}]},[o("tt",{staticClass:"table-hint"},[e._v(`
                        `+e._s(e.$gettext("This page lists all active mailbox migrations started with IMAPSync tool. New migration can be started with the action button."))+`
                    `)]),e._v(" "),o("br"),e._v(" "),o("tt",{staticClass:"table-hint"},[o("span",{domProps:{textContent:e._s(e.$gettext("Read finished migration reports in the"))}}),e._v(" "),o("ui-link",{attrs:{path:"/user/messages"}},[o("span",{domProps:{textContent:e._s(e.$gettext("Message Area"))}})])],1)],1)]},proxy:!0}],null,!0)},"ui-r-table",{rows:e.processes,columns:[{id:"to",label:e.$gettext("Destination Email")},{id:"from_username",label:e.$gettext("Source Email")},{id:"to_server",label:e.$gettext("Destination Server")},{id:"from_server",label:e.$gettext("Source Server")},{id:"started",label:e.$gettext("Started At")}],verticalLayout:e.clientStore.isPhone,isCheckable:!1},!1)),e._v(" "),o("stop-migration-dialog",{attrs:{migration:e.currentItem},on:{stop:e.stopProcess}})]},proxy:!0}])})},l=[],g=a("./js/stores/index.ts"),f=a("./js/endpoints/imapsync/index.ts"),S=a("./js/api/endpoint/index.ts"),x=function(){var e=this,o=e._self._c;return o("ui-dialog",{attrs:{id:"STOP_MIGRATION_DIALOG",theme:"danger",title:e.$gettext("Stop Migration")},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Stop Migration"))}})]},proxy:!0},{key:"content",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettextInterpolate(e.$gettext("Are you sure you want to stop migration from %{ from } to %{ to }?"),{from:e.usernames.from,to:e.usernames.to}))}})]},proxy:!0},{key:"buttons",fn:function(){return[o("ui-button",{attrs:{theme:"danger"},on:{click:function(d){return e.$emit("stop",e.migration.id)}}},[o("span",{domProps:{textContent:e._s(e.$gettext("Stop Migration"))}})])]},proxy:!0}])})},j=[],I={props:{migration:{type:Object,required:!1,default:()=>null}},computed:{usernames(){return this.migration?{from:this.migration.from.username,to:this.migration.to.username}:{from:"",to:""}}},methods:{submit(){this.$emit("submit")}}},E=I,D=a("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),T=(0,D.Z)(E,x,j,!1,null,null,null),C=T.exports,R=a("../node_modules/ramda/es/index.js"),A=a("./js/composables/filters.ts"),$={name:"UserImapsync",components:{StopMigrationDialog:C},beforeRouteEnter:(0,S.MA)([()=>f.Vv.request()]),data:()=>({currentItem:null,processes:[]}),computed:{...(0,g.Kc)(["client"])},created(){this.getMigrationsData()},methods:{date:A.hT,async getMigrationsData(){const s=await f.Vv.request();this.processes=R.UID(e=>({...e,started:new Date(e.started),isImport:e.to.server==="localhost"}),s.data)},stopMigrationDialog(s){this.currentItem=s,this.$dialog("STOP_MIGRATION_DIALOG").open()},async stopProcess(){const{error:s}=await f.pv.request({id:this.currentItem.id});this.currentItem=null,s?s.notify():this.$notifications.success({title:this.$gettext("IMAPSync Manager"),content:this.$gettext("Migration canceled")}),f.Vv.request()}}},P=$,L=a("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/imapsync/index.vue?vue&type=style&index=0&id=d9c68060&prod&lang=scss&"),i=(0,D.Z)(P,u,l,!1,null,null,null),m=i.exports},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/imapsync/index.vue?vue&type=style&index=0&id=d9c68060&prod&lang=scss&":function(O,y,a){var u=a("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/imapsync/index.vue?vue&type=style&index=0&id=d9c68060&prod&lang=scss&");u.__esModule&&(u=u.default),typeof u=="string"&&(u=[[O.id,u,""]]),u.locals&&(O.exports=u.locals);var l=a("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,g=l("04fb06c4",u,!0,{})}}]);
