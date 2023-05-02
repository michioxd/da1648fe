(self.webpackChunk=self.webpackChunk||[]).push([[5135],{"../node_modules/date-fns/esm/formatDistance/index.js":function(k,E,r){"use strict";r.d(E,{Z:function(){return V}});var o=r("../node_modules/date-fns/esm/_lib/defaultOptions/index.js"),a=r("../node_modules/date-fns/esm/toDate/index.js"),c=r("../node_modules/date-fns/esm/_lib/requiredArgs/index.js");function D(_,m){(0,c.Z)(2,arguments);var l=(0,a.Z)(_),b=(0,a.Z)(m),O=l.getTime()-b.getTime();return O<0?-1:O>0?1:O}function p(_,m){(0,c.Z)(2,arguments);var l=(0,a.Z)(_),b=(0,a.Z)(m),O=l.getFullYear()-b.getFullYear(),T=l.getMonth()-b.getMonth();return O*12+T}function y(_){(0,c.Z)(1,arguments);var m=(0,a.Z)(_);return m.setHours(23,59,59,999),m}function j(_){(0,c.Z)(1,arguments);var m=(0,a.Z)(_),l=m.getMonth();return m.setFullYear(m.getFullYear(),l+1,0),m.setHours(23,59,59,999),m}function d(_){(0,c.Z)(1,arguments);var m=(0,a.Z)(_);return y(m).getTime()===j(m).getTime()}function v(_,m){(0,c.Z)(2,arguments);var l=(0,a.Z)(_),b=(0,a.Z)(m),O=D(l,b),T=Math.abs(p(l,b)),h;if(T<1)h=0;else{l.getMonth()===1&&l.getDate()>27&&l.setDate(30),l.setMonth(l.getMonth()-O*T);var U=D(l,b)===-O;d((0,a.Z)(_))&&T===1&&D(_,b)===1&&(U=!1),h=O*(T-Number(U))}return h===0?0:h}function g(_,m){return(0,c.Z)(2,arguments),(0,a.Z)(_).getTime()-(0,a.Z)(m).getTime()}var i={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(m){return m<0?Math.ceil(m):Math.floor(m)}},x="trunc";function u(_){return _?i[_]:i[x]}function R(_,m,l){(0,c.Z)(2,arguments);var b=g(_,m)/1e3;return u(l==null?void 0:l.roundingMethod)(b)}var $=r("../node_modules/date-fns/esm/_lib/defaultLocale/index.js");function I(_,m){if(_==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var l in m)Object.prototype.hasOwnProperty.call(m,l)&&(_[l]=m[l]);return _}function F(_){return I({},_)}var f=r("../node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),w=1440,S=2520,P=43200,L=86400;function V(_,m,l){var b,O;(0,c.Z)(2,arguments);var T=(0,o.j)(),h=(b=(O=l==null?void 0:l.locale)!==null&&O!==void 0?O:T.locale)!==null&&b!==void 0?b:$.Z;if(!h.formatDistance)throw new RangeError("locale must contain formatDistance property");var U=D(_,m);if(isNaN(U))throw new RangeError("Invalid time value");var M=I(F(l),{addSuffix:Boolean(l==null?void 0:l.addSuffix),comparison:U}),Z,B;U>0?(Z=(0,a.Z)(m),B=(0,a.Z)(_)):(Z=(0,a.Z)(_),B=(0,a.Z)(m));var N=R(B,Z),W=((0,f.Z)(B)-(0,f.Z)(Z))/1e3,A=Math.round((N-W)/60),n;if(A<2)return l!=null&&l.includeSeconds?N<5?h.formatDistance("lessThanXSeconds",5,M):N<10?h.formatDistance("lessThanXSeconds",10,M):N<20?h.formatDistance("lessThanXSeconds",20,M):N<40?h.formatDistance("halfAMinute",0,M):N<60?h.formatDistance("lessThanXMinutes",1,M):h.formatDistance("xMinutes",1,M):A===0?h.formatDistance("lessThanXMinutes",1,M):h.formatDistance("xMinutes",A,M);if(A<45)return h.formatDistance("xMinutes",A,M);if(A<90)return h.formatDistance("aboutXHours",1,M);if(A<w){var e=Math.round(A/60);return h.formatDistance("aboutXHours",e,M)}else{if(A<S)return h.formatDistance("xDays",1,M);if(A<P){var t=Math.round(A/w);return h.formatDistance("xDays",t,M)}else if(A<L)return n=Math.round(A/P),h.formatDistance("aboutXMonths",n,M)}if(n=v(B,Z),n<12){var s=Math.round(A/P);return h.formatDistance("xMonths",s,M)}else{var C=n%12,G=Math.floor(n/12);return C<3?h.formatDistance("aboutXYears",G,M):C<9?h.formatDistance("overXYears",G,M):h.formatDistance("almostXYears",G+1,M)}}},"./js/api/commands/validation/index.js":function(k,E,r){"use strict";r.d(E,{i9:function(){return R},ty:function(){return x},l7:function(){return g},OE:function(){return u},ub:function(){return f},oH:function(){return j},U5:function(){return d},k_:function(){return y},PR:function(){return i},uo:function(){return F},Jj:function(){return I},rV:function(){return $}});var o=r("./js/api/command/index.js"),a=r("../node_modules/punycode/punycode.es6.js"),c=r("./js/api/commands/converters/index.ts"),D={isValid(S){return typeof S.error=="undefined"},getMessage(S){return(0,c.S8)(S.error||"")}};const p=o.Z.get({url:"/CMD_JSON_VALIDATE",schema:{value:o.Z.REQUIRED_STRING},response:{valid:!0,message:""},mapResponse:{valid:D.isValid,message:D.getMessage}}),y=p.extend({id:"VALIDATE_FORWARDER",params:{type:"forwarder",ignore_system_default:!0}}),j=p.extend({id:"VALIDATE_EMAIL",params:{type:"email",check_mailing_list:!0},schema:{check_exists:{type:Boolean,required:!1,default:!0}}}),d=p.extend({id:"VALIDATE_FTP",params:{type:"ftp"},domain:!0}),v=p.extend({params:{type:"dns"},domain:!0,schema:{record:o.Z.REQUIRED_STRING}}),g=v.extend({id:"VALIDATE_DNS_VALUE",params:{check:"value",name:!0},domain:!0,schema:{value:o.Z.REQUIRED_STRING}}),i=g.extend({id:"VALIDATE_MX_VALUE",params:{record:"MX"},before:({value:S})=>({value:"10",mx_value:S})}),x=v.extend({id:"VALIDATE_DNS_NAME",params:{check:"name",value:!0,mx_value:!0},schema:{name:o.Z.REQUIRED_STRING,value:null}}),u=p.extend({id:"VALIDATE_DATABASE",params:{type:"dbname"}}),R=p.extend({id:"VALIDATE_DATABASE_USER",params:{type:"dbusername"}}),$=p.extend({id:"VALIDATE_USERNAME",params:{type:"username"}}),I=p.extend({id:"VALIDATE_SUBDOMAIN",domain:!0,params:{type:"subdomain"}}),F=p.extend({id:"VALIDATE_PASSWORD",params:{type:"password"}}),f=p.extend({id:"VALIDATE_DOMAIN",params:{type:"domain"},before:({value:S})=>({value:a.ZP.toASCII(S)})}),w=p.extend({id:"VALIDATE_IP_RANGE_LIST",params:{type:"ip_range_list"}})},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/email/_components/create-forwarder-dialog.vue?vue&type=style&index=0&id=f65c4b66&prod&lang=scss&":function(){},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/email/_components/modify-forwarder-dialog.vue?vue&type=style&index=0&id=0b882902&prod&lang=scss&":function(){},"./js/api/commands/converters/customItems.ts":function(k,E,r){"use strict";r.d(E,{CR:function(){return p}});var o=r("../node_modules/ramda/es/index.js"),a=r("./js/api/commands/converters/index.ts"),c=r("./js/api/commands/utils/transduce.ts"),D=r("./js/api/commands/converters/toSelectData.ts");const p=d=>{const v={name:d.name,type:d.type==="listbox"?"select":d.type,label:d.string,description:d.desc||"",value:d.type==="checkbox"?(0,a.sw)(d.checked||"no"):d.value||""};return v.type==="select"?o.BPw(v,(0,D.M1)(d.select||{})):v},y=d=>(0,c.vr)([(0,c.uD)(v=>/^item\d+val$/.test(v)),(0,c.r5)(v=>{const g=v,i=v.replace("val","txt"),x=d[g],u=d[i];return{[x]:u}})],Object.keys(d)),j=(d,v)=>o.qCK(i=>{const x={name:i.name,type:i.type==="listbox"?"select":i.type,description:i.desc||"",value:i.value||"",label:i.string};return i.type==="listbox"?(x.value=i.default,x.options=y(i)):i.type==="checkbox"&&(x.value=i.checked==="yes"),x},o.BPw({name:d}),(0,c.vr)([(0,c.r5)(i=>{const[x,u]=o.Vl2("=",i);return{[x]:u}})]),o.Vl2("&"))(v);E.ZP={fromObject:p,fromString:j}},"./js/api/commands/converters/index.ts":function(k,E,r){"use strict";r.d(E,{l$:function(){return g.ZP},t0:function(){return o.t0},S8:function(){return o.S8},ql:function(){return o.ql},sw:function(){return o.sw},Qu:function(){return o.Qu},He:function(){return o.He},M1:function(){return v.M1},sf:function(){return x},cc:function(){return d}});var o=r("./js/api/commands/converters/primitive.ts"),a=r("../node_modules/monet/dist/monet.js"),c=r("./js/api/commands/types.ts");const D=u=>typeof u=="object"?a.Either.Right(u):a.Either.Left(new Error("Passed param is not an object")),p=u=>typeof u.usage=="string"?a.Either.Right(u):a.Either.Left(new Error("usage property is required")),y=u=>({usage:(0,o.He)(u.usage),limit:(0,o.Qu)(u.limit)}),j=({usage:u,limit:R})=>{let $=c.H.Normal;const I=Math.floor(u/R*100);return I>=100?$=c.H.OverUsed:I>80&&($=c.H.AlmostUsed),{usage:u,limit:R,status:$}},d=u=>{const R=a.Either.Right(u).flatMap(D).flatMap(p).map(y).map(j);if(R.isLeft())throw R.left();return R.right()};var v=r("./js/api/commands/converters/toSelectData.ts"),g=r("./js/api/commands/converters/customItems.ts"),i=r("../node_modules/ramda/es/index.js");const x=u=>R=>{const{info:$}=R,I=i.CEd(["info"],R);return{columns:$.columns,rowsCount:Number($.rows),rows:i.UID(u,i.VO0(I))}}},"./js/api/commands/converters/toSelectData.ts":function(k,E,r){"use strict";r.d(E,{M1:function(){return j}});var o=r("../node_modules/monet/dist/monet.js"),a=r.n(o),c=r("./js/api/commands/utils/transduce.ts"),D=r("../node_modules/ramda/es/index.js");const p=d=>o.Maybe.Some(d).flatMap(v=>{const g=v.find(i=>i.selected==="yes");return g?o.Maybe.Some(g):o.Maybe.None()}).flatMap(v=>o.Maybe.fromNull(v.value)).orSome(""),y=(0,c.vr)([(0,c.r5)(d=>({[d.value]:d.text}))]),j=d=>{const v=(0,D.VO0)(d);return{value:p(v),options:y(v)}}},"./js/api/commands/types.ts":function(k,E,r){"use strict";r.d(E,{H:function(){return o}});var o;(function(a){a.Normal="normal",a.AlmostUsed="almost_used",a.OverUsed="overused"})(o||(o={}))},"./js/api/commands/utils/transduce.ts":function(k,E,r){"use strict";r.d(E,{Re:function(){return D},r5:function(){return a},uD:function(){return c},vr:function(){return v},zh:function(){return j}});var o=r("../node_modules/ramda/es/index.js");const a=g=>i=>(x,u)=>{const R=g(u);return i(x,R)},c=g=>i=>(x,u)=>g(u)?i(x,u):x,D=(g,i)=>(g.push(i),g),p=(g,i)=>o.BPw(g,i),y=(g,i,x,u)=>{const R=o.qCK(...x);return u.reduce(R(i),g)},j=o.WAo(y),d=j([],D),v=j({},p)},"./js/composables/dateFilter.ts":function(k,E,r){"use strict";r.d(E,{W:function(){return p},f:function(){return c.f}});var o=r("../node_modules/ramda/es/index.js"),a=r("../node_modules/date-fns/esm/format/index.js"),c=r("./js/modules/date-formats.ts"),D=r("./js/modules/customizations/date-formats/default.ts");const p=o.WAo((y,j)=>{if(j)try{return(0,a.Z)(j,c.f.value[y])}catch(d){return console.warn(`Given ${y} format is incorrect:
${d.message}`),(0,a.Z)(j,D.d[y])}return""})},"./js/composables/filters.ts":function(k,E,r){"use strict";r.d(E,{Q0:function(){return R},aS:function(){return I},d5:function(){return $},eB:function(){return i},hT:function(){return v},kC:function(){return d},n9:function(){return u},zM:function(){return g}});var o=r("../node_modules/date-fns/esm/formatDistance/index.js"),a=r("../node_modules/punycode/punycode.es6.js"),c=r("./js/composables/dateFilter.ts"),D=r("./js/composables/gettext.ts");const{$gettext:p,$ngettext:y,$gettextInterpolate:j}=(0,D.Z)(),d=f=>{var w;return f?((w=f.at(0))===null||w===void 0?void 0:w.toUpperCase())+f.slice(1):""},v=(f,w="datetime")=>(0,c.W)(w,f),g=f=>(0,o.Z)(f,new Date),i=(f,w=1024)=>{const S=Number(f);if(!S)return"0 B";const P=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],L=Math.floor(Math.log(S)/Math.log(w));return`${parseFloat((S/w**L).toFixed(2))} ${P[L]}`},x=f=>{try{return(0,a.xX)(f)}catch(w){return f}},u=f=>(0,a.xX)(f),R=f=>{if(!f||!f.includes("@"))return f;const[w,S]=f.split("@");return[w,x(S)].join("@")},$=f=>{if(f<60)return p("less than a minute");const w=Math.floor(f/60)%60,S=Math.floor(f/3600)%24,P=Math.floor(f/(3600*24)),L=[P?y("%{days} day","%{days} days",P):null,S?y("%{hours} hour","%{hours} hours",S):null,w?y("%{minutes} minute","%{minutes} minutes",w):null].filter(Boolean).join(", ");return j(L,{days:P,hours:S,minutes:w})},I=(f,w)=>f.length<=w?f:`${f.substring(0,w)}...`,F=()=>({capitalize:d,date:v,distanceFromNow:g,humanReadableSize:i,p6eUnicode:u,p6eUnicodeEmail:R,formatUptime:$,truncateString:I})},"./js/pages/user/email/forwarders.vue":function(k,E,r){"use strict";r.r(E),r.d(E,{default:function(){return A}});var o={};r.r(o),r.d(o,{createForwarder:function(){return j},createForwardersRaw:function(){return d},deleteForwarders:function(){return g},getForwarders:function(){return y},modifyForwarder:function(){return v}});var a=function(){var e=this,t=e._self._c;return t("app-page",{attrs:{actions:[{label:e.$gettext("Create E-mail Forwarder"),handler:e.$dialog("CREATE_FORWARDERS_DIALOG").open,icon:"#plus-fill",visible:e.canCreateForwarder&&e.$api.forwarders.length<=e.$_session.usage.emailForwarders.limit},{label:e.$gettext("Create forwarders from raw data"),handler:e.$dialog("CREATE_FORWARDERS_DIALOG_LEGACY").open,icon:"#console",visible:e.canCreateForwarder}]},scopedSlots:e._u([{key:"details",fn:function(){return[t("ui-infobar-item",{attrs:{title:e.$gettext("Details")}},[t("ui-infobar-stats",{attrs:{title:e.$gettext("Forwarders"),usage:e.$api.forwarders.length,limit:e.limit}})],1)]},proxy:!0},{key:"default",fn:function(){return[t("app-page-section",[t("ui-r-table",e._b({attrs:{"disable-pagination":"","vertical-layout":e.clientStore.isPhone},on:{"update:checkedRows":function(s){e.checkedRows=s}},scopedSlots:e._u([{key:"buttons:before",fn:function(){return[t("input-text",{attrs:{placeholder:e.$gettext("Filter forwarders")},scopedSlots:e._u([{key:"additions:left",fn:function(){return[t("ui-button",{attrs:{disabled:""}},[t("ui-icon",{attrs:{id:"search"}})],1)]},proxy:!0},{key:"additions:right",fn:function(){return[t("ui-button",{attrs:{disabled:""},on:{click:function(s){e.filter=""}}},[t("ui-icon",{attrs:{id:"cancel"}})],1)]},proxy:!0}]),model:{value:e.filter,callback:function(s){e.filter=s},expression:"filter"}})]},proxy:!0},{key:"table:actions",fn:function(){return[t("ui-table-action",{on:{click:function(s){e.$dialog("DELETE_ITEMS_DIALOG").open()}}},[t("span",{domProps:{textContent:e._s(e.$gettext("Delete"))}})])]},proxy:!0},{key:"col:name",fn:function({name:s}){return[e._v(`
                    `+e._s(s)+"@"+e._s(e.$domainUnicode)+`
                `)]}},{key:"col:value",fn:function({value:s}){return e._l(s,function(C){return t("div",{key:C},[e._v(`
                        `+e._s(e.p6eUnicodeEmail(C))+`
                    `)])})}},{key:"row:actions",fn:function({item:s}){return[t("ui-button-icon",{attrs:{icon:"pencil",title:e.$gettext("Edit")},on:{click:function(C){return e.modifyForwarderDialog(s)}}})]}}])},"ui-r-table",{rows:e.forwarders,checkedRows:e.checkedRows,columns:[{id:"name",label:e.$gettext("Forwarder")},{id:"value",label:e.$gettext("Value")}]},!1))],1),e._v(" "),t("create-forwarders-dialog"),e._v(" "),t("create-forwarders-dialog-legacy"),e._v(" "),t("modify-forwarder-dialog",e._b({on:{modified:e.resetData}},"modify-forwarder-dialog",e.modify,!1)),e._v(" "),t("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("forwarder","forwarders",e.checkedRows.length)},on:{"click:confirm":e.deleteForwarders}})]},proxy:!0}])})},c=[],D=r("./js/stores/index.ts"),p=r("./js/api/command/index.js");const y=p.Z.get({id:"FORWARDERS",url:"/CMD_EMAIL_FORWARDER",response:[],domain:!0,after:n=>n.flow(n.mapValues((e,t)=>({name:t,value:e})),n.toArray)}),j=p.Z.post({url:"/CMD_EMAIL_FORWARDER",params:{action:"create"},domain:!0,schema:{user:p.Z.REQUIRED_STRING,email:p.Z.REQUIRED_STRING}}),d=p.Z.post({url:"/CMD_EMAIL_FORWARDER",params:{action:"create"},schema:{forwarders:p.Z.REQUIRED_STRING},before:({forwarders:n})=>({forwarders:null,raw_forwarders:n})}),v=j.extend({params:{action:"modify"}}),g=p.Z.select({url:"/CMD_EMAIL_FORWARDER",method:"POST",params:{action:"delete",delete:!0},domain:!0});var i=function(){var e=this,t=e._self._c;return t("ui-dialog",{attrs:{id:"CREATE_FORWARDERS_DIALOG",size:"normal",title:e.$gettext("Create Forwarders")},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",[e.source.length?t("ui-table",{attrs:{items:e.source}},[t("ui-column",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{id:"value",label:e.$gettext("Forwarder Name")},scopedSlots:e._u([{key:"default",fn:function(s){return[e._v(`
                        `+e._s(s.value)+"@"+e._s(e.$domainUnicode)+`
                    `)]}}],null,!1,186098180)}),e._v(" "),t("ui-column",{attrs:{id:"remove",fit:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("ui-button-icon",{attrs:{icon:"delete",title:e.$gettext("Remove Forwarder")},on:{click:function(C){return e.removeSource(s.value)}}})]}}],null,!1,448510911)})],1):e._e(),e._v(" "),t("ui-form-element",{attrs:{vertical:"",group:"add-forwarder-name",validators:{required:!0,validateForwarder:e.validateForwarder,validateSpace:e.validateSpace,validateUniqueName:e.validateUniqueName}},scopedSlots:e._u([e.source.length?null:{key:"title",fn:function(){return[t("span",{attrs:{vertical:""},domProps:{textContent:e._s(e.$gettext("New Forwarder Name"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-text",{on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.addSource.apply(null,arguments)}},scopedSlots:e._u([{key:"additions:right",fn:function(){return[t("ui-button",{staticClass:"domainButton",attrs:{theme:"light",size:"normal",disabled:""}},[e._v(`
                                @`+e._s(e.$domainUnicode)+`
                            `)]),e._v(" "),t("ui-button",{attrs:{theme:"safe",size:"normal",icon:"plus-fill","validate-group":"add-forwarder-name"},on:{click:e.addSource}},[t("span",{domProps:{textContent:e._s(e.$gettext("Add"))}})])]},proxy:!0}]),model:{value:e.newSource,callback:function(s){e.newSource=s},expression:"newSource"}})]},proxy:!0},{key:"error:validateForwarder",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$api.validateForwarder.message)}})]},proxy:!0},{key:"error:validateSpace",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Should not contain spaces"))}})]},proxy:!0},{key:"error:validateUniqueName",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Name already in list"))}})]},proxy:!0}],null,!0)}),e._v(" "),e.destination.length?t("ui-table",{attrs:{items:e.destination}},[t("ui-column",{attrs:{id:"value",label:e.$gettext("Destination")}}),e._v(" "),t("ui-column",{attrs:{id:"remove",fit:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("ui-button-icon",{attrs:{icon:"delete",title:e.$gettext("Remove Destination")},on:{click:function(C){return e.removeDestination(s.value)}}})]}}],null,!1,3552980462)})],1):e._e(),e._v(" "),t("ui-form-element",{attrs:{vertical:""},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Add Destination"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-select",{attrs:{options:{email:e.$gettext("E-Mail"),pipe:e.$gettext("Pipe"),blackhole:":blackhole:",fail:":fail:"}},model:{value:e.newDestination.type,callback:function(s){e.$set(e.newDestination,"type",s)},expression:"newDestination.type"}})]},proxy:!0}])}),e._v(" "),e.newDestination.type==="email"?t("ui-form-element",{key:"emailDestination",attrs:{vertical:"",group:"add-forwarder-destination",validators:{required:!0,email:!0,validateUniqueDestination:e.validateUniqueDestination}},scopedSlots:e._u([{key:"content",fn:function(){return[t("input-text",{on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.addDestination.apply(null,arguments)}},scopedSlots:e._u([{key:"additions:right",fn:function(){return[t("ui-button",{attrs:{size:"normal",theme:"safe",icon:"plus-fill","validate-group":"add-forwarder-destination"},on:{click:e.addDestination}},[t("span",{domProps:{textContent:e._s(e.$gettext("Add"))}})])]},proxy:!0}],null,!1,3731281017),model:{value:e.newDestination.value,callback:function(s){e.$set(e.newDestination,"value",s)},expression:"newDestination.value"}})]},proxy:!0},{key:"error:validateUniqueDestination",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Destination already in list"))}})]},proxy:!0}],null,!1,3948165384)}):e.newDestination.type==="pipe"?t("ui-form-element",{key:"pipeDestination",attrs:{vertical:"",group:"add-forwarder-destination",validators:{required:!0,validateEmpty:e.validateEmpty,validateUniqueDestination:e.validateUniqueDestination}},scopedSlots:e._u([{key:"content",fn:function(){return[t("input-text",{on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.addDestination.apply(null,arguments)}},scopedSlots:e._u([{key:"additions:right",fn:function(){return[t("ui-button",{attrs:{size:"normal",theme:"safe",icon:"plus-fill","validate-group":"add-forwarder-destination"},on:{click:e.addDestination}},[t("span",{domProps:{textContent:e._s(e.$gettext("Add"))}})])]},proxy:!0}]),model:{value:e.newDestination.value,callback:function(s){e.$set(e.newDestination,"value",s)},expression:"newDestination.value"}})]},proxy:!0},{key:"error:validateEmpty",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Empty pipes are not allowed"))}})]},proxy:!0},{key:"error:validateUniqueDestination",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Destination already in list"))}})]},proxy:!0}])}):e._e()],1)]},proxy:!0},{key:"buttons",fn:function(){return[t("ui-button",{attrs:{theme:"primary",disabled:!e.fullSource.length||!e.fullDestination.length},on:{click:e.createForwarders}},[t("span",{domProps:{textContent:e._s(e.$gettext("Create"))}})])]},proxy:!0}])})},x=[],u=r("./js/api/commands/validation/index.js"),R={data:()=>({source:[],destination:[],newSource:"",newDestination:{type:"email",value:""}}),api:[{command:u.k_,bind:"validateForwarder"}],computed:{fullSource(){return this.$valid("add-forwarder-name")?[...this.source,{value:this.newSource}]:this.source},fullDestination(){return this.$valid("add-forwarder-destination")?[...this.destination,{value:this.getStringDestination(this.newDestination)}]:this.destination},validForwarder(){return this.destination.length&&this.source.length}},methods:{addSource(){this.newSource&&this.$valid("add-forwarder-name")&&(this.source.push({value:this.newSource}),this.newSource="",setTimeout(()=>{(0,D.oR)(PiniaStores.VALIDATION).touchGroupInputs("add-forwarder-name")},500))},removeSource(n){this.source=this.source.filter(e=>e.value!==n)},addDestination(){this.newDestination.value&&this.$valid("add-forwarder-destination")&&(this.destination.push({value:this.getStringDestination(this.newDestination)}),this.newDestination.value="",setTimeout(()=>{(0,D.oR)(PiniaStores.VALIDATION).touchGroupInputs("add-forwarder-destination")},500))},removeDestination(n){this.destination=this.destination.filter(e=>e.value!==n)},getStringDestination(n){return["blackhole","fail"].includes(n.type)?`:${n.type}:`:n.type==="email"||n.value.includes('"|')?n.value:`"|${n.value}"`},async createForwarders(){const n=this.fullSource.map(({value:t})=>t).join(","),e=this.fullDestination.map(({value:t})=>t).map(t=>t.includes('"|')?t:this.$p6e.email2ascii(t)).join(",");await j({user:n,email:e}),Object.assign(this.$data,this.$options.data.apply(this)),y()},validateSpace(n){return!(n&&n.includes(" "))},validateUniqueName(n){return n?!Boolean(this.source.find(e=>e.value===n)):!0},validateUniqueDestination(n){return n?!Boolean(this.destination.find(e=>e.value===this.getStringDestination(this.newDestination))):!0},validateEmpty(n){return n?!!n.trim():!0},async validateForwarder(n){if(!n)return!0;const{valid:e}=await(0,u.k_)({value:`${n}@${this.$domain}`});return e}}},$=R,I=r("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/email/_components/create-forwarder-dialog.vue?vue&type=style&index=0&id=f65c4b66&prod&lang=scss&"),F=r("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),f=(0,F.Z)($,i,x,!1,null,null,null),w=f.exports,S=function(){var e=this,t=e._self._c;return t("ui-dialog",{attrs:{id:"MODIFY_FORWARDER_DIALOG",size:"normal",title:e.$gettext("Modify Forwarder")},on:{"dialog:open":e.loadData},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",[t("ui-form-element",{attrs:{vertical:""},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Forwarder Name"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-text",{attrs:{disabled:"disabled",value:`${e.name}@${e.$domainUnicode}`}})]},proxy:!0}])}),e._v(" "),e.destination.length?t("ui-table",{attrs:{items:e.destination}},[t("ui-column",{attrs:{id:"value",label:e.$gettext("Destination")}}),e._v(" "),t("ui-column",{attrs:{id:"remove",fit:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("ui-button-icon",{attrs:{icon:"delete",title:e.$gettext("Remove Destination")},on:{click:function(C){return e.removeDestination(s.value)}}})]}}],null,!1,3552980462)})],1):e._e(),e._v(" "),t("ui-form-element",{attrs:{vertical:""},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Add Destination"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-select",{attrs:{options:{email:e.$gettext("E-Mail"),pipe:e.$gettext("Pipe"),blackhole:e.$gettext("Blackhole"),fail:e.$gettext("Fail")}},model:{value:e.newDestination.type,callback:function(s){e.$set(e.newDestination,"type",s)},expression:"newDestination.type"}})]},proxy:!0}])}),e._v(" "),e.newDestination.type==="email"?t("ui-form-element",{key:"emailDestination",attrs:{vertical:"",group:"add-forwarder-destination",validators:{required:!0,email:!0,validateUniqueDestination:e.validateUniqueDestination}},scopedSlots:e._u([{key:"content",fn:function(){return[t("input-text",{on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.addDestination.apply(null,arguments)}},scopedSlots:e._u([{key:"additions:right",fn:function(){return[t("ui-button",{attrs:{size:"normal",theme:"safe",icon:"plus-fill","validate-group":"add-forwarder-destination"},on:{click:e.addDestination}},[t("span",{domProps:{textContent:e._s(e.$gettext("Add"))}})])]},proxy:!0}],null,!1,3731281017),model:{value:e.newDestination.value,callback:function(s){e.$set(e.newDestination,"value",s)},expression:"newDestination.value"}})]},proxy:!0},{key:"error:validateUniqueDestination",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Destination already in list"))}})]},proxy:!0}],null,!1,3948165384)}):e.newDestination.type==="pipe"?t("ui-form-element",{key:"pipeDestination",attrs:{vertical:"",group:"add-forwarder-destination",validators:{required:!0,validateEmpty:e.validateEmpty,validateUniqueDestination:e.validateUniqueDestination}},scopedSlots:e._u([{key:"content",fn:function(){return[t("input-text",{on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.addDestination.apply(null,arguments)}},scopedSlots:e._u([{key:"additions:right",fn:function(){return[t("ui-button",{attrs:{size:"normal",theme:"safe",icon:"plus-fill","validate-group":"add-forwarder-destination"},on:{click:e.addDestination}},[t("span",{domProps:{textContent:e._s(e.$gettext("Add"))}})])]},proxy:!0}]),model:{value:e.newDestination.value,callback:function(s){e.$set(e.newDestination,"value",s)},expression:"newDestination.value"}})]},proxy:!0},{key:"error:validateEmpty",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Empty pipes are not allowed"))}})]},proxy:!0},{key:"error:validateUniqueDestination",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Destination already in list"))}})]},proxy:!0}])}):e._e()],1)]},proxy:!0},{key:"buttons",fn:function(){return[t("ui-button",{attrs:{theme:"primary","validate-group":"modifyForwarder",disabled:!e.fullDestination.length},on:{click:e.modifyForwarder}},[t("span",{domProps:{textContent:e._s(e.$gettext("Save"))}})])]},proxy:!0}])})},P=[],L={props:{name:{type:String,required:!0},value:{type:Array,required:!0}},data(){return{destination:[],newDestination:{type:"email",value:""}}},computed:{fullDestination(){return this.$valid("add-forwarder-destination")?[...this.destination,{value:this.getStringDestination(this.newDestination)}]:this.destination}},methods:{addDestination(){this.newDestination.value&&this.$valid("add-forwarder-destination")&&(this.destination.push({value:this.getStringDestination(this.newDestination)}),this.newDestination.value="",setTimeout(()=>{(0,D.oR)(PiniaStores.VALIDATION).touchGroupInputs("add-forwarder-destination")},500))},removeDestination(n){this.destination=this.destination.filter(e=>e.value!==n)},getStringDestination(n){return["blackhole","fail"].includes(n.type)?`:${n.type}:`:n.type==="email"||n.value.includes('"|')?n.value:`"|${n.value}"`},validateUniqueDestination(n){return n?!Boolean(this.destination.find(e=>e.value===this.getStringDestination(this.newDestination))):!0},validateEmpty(n){return n?!!n.trim():!0},async validateForwarder(n){if(!n)return!0;const{valid:e}=await validateForwarder({value:`${n}@${this.$domain}`});return e},loadData(){this.destination=this.value.map(n=>({value:n.includes('"|')?n:this.$p6e.email2unicode(n)}))},async modifyForwarder(){const n=this.fullDestination.map(({value:t})=>t).map(t=>t.includes('"|')?t:this.$p6e.email2ascii(t)).join(",");await v({user:this.name,email:n})&&(Object.assign(this.$data,this.$options.data.apply(this)),y(),this.$emit("modified"))}}},V=L,_=r("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/email/_components/modify-forwarder-dialog.vue?vue&type=style&index=0&id=0b882902&prod&lang=scss&"),m=(0,F.Z)(V,S,P,!1,null,null,null),l=m.exports,b=function(){var e=this,t=e._self._c;return t("ui-dialog",{attrs:{id:"CREATE_FORWARDERS_DIALOG_LEGACY",size:"normal",title:e.$gettext("Create Forwarder")},on:{"dialog:open":e.resetData},scopedSlots:e._u([{key:"content",fn:function(){return[t("ui-form-element",{attrs:{vertical:"",group:"create-forwarders-raw",validators:{required:!0,multilineValidator:e.multilineValidator}},scopedSlots:e._u([{key:"content",fn:function(){return[t("input-textarea",{staticClass:"width:100%",attrs:{placeholder:"info@test.com --> matt@test.com, nick@test.com, jeff@test.com, phil@test.com",rows:"1"},model:{value:e.data,callback:function(s){e.data=s},expression:"data"}})]},proxy:!0},{key:"error:multilineValidator",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("The raw forwarders create action does not support multiple lines."))}})]},proxy:!0}])})]},proxy:!0},{key:"buttons",fn:function(){return[t("ui-button",{attrs:{theme:"safe","validate-group":"create-forwarders-raw"},on:{click:e.createForwarders}},[t("span",{domProps:{textContent:e._s(e.$gettext("Save"))}})])]},proxy:!0}])})},O=[],T={data:()=>({data:""}),methods:{async createForwarders(){d({forwarders:this.data}).then(y)},multilineValidator(n){return n?n.includes(`
`)===!1:!0},resetData(){Object.assign(this.$data,this.$options.data.apply(this))}}},h=T,U=(0,F.Z)(h,b,O,!1,null,null,null),M=U.exports,Z=r("./js/composables/filters.ts"),B={name:"EmailForwarders",preload:y,commands:o,api:[{command:y,bind:"forwarders"}],components:{CreateForwardersDialog:w,ModifyForwarderDialog:l,CreateForwardersDialogLegacy:M},data(){return{checkedRows:[],modify:{name:"",value:[]},filter:""}},computed:{checkedForwarders(){return this.checkedRows.map(n=>n.name)},limit(){return this.$_session.usage.emailForwarders.limit},canCreateForwarder(){return this.limit>this.$api.forwarders.length},forwarders(){if(this.filter){const n=this.filter.toLowerCase(),e=t=>t.toLowerCase().includes(n);return this.$api.forwarders.filter(t=>e(t.name)||t.value.some(e))}return this.$api.forwarders},...(0,D.Kc)(["client"])},watch:{$domain(){y()}},methods:{p6eUnicodeEmail:Z.Q0,async deleteForwarders(){await g({select:this.checkedForwarders})&&(this.checkedRows=[],y())},async modifyForwarderDialog(n){this.modify.name=n.name,this.modify.value=[...n.value],this.$dialog("MODIFY_FORWARDER_DIALOG").open()},resetData(){Object.assign(this.$data,this.$options.data.apply(this))}}},N=B,W=(0,F.Z)(N,a,c,!1,null,null,null),A=W.exports},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/email/_components/create-forwarder-dialog.vue?vue&type=style&index=0&id=f65c4b66&prod&lang=scss&":function(k,E,r){var o=r("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/email/_components/create-forwarder-dialog.vue?vue&type=style&index=0&id=f65c4b66&prod&lang=scss&");o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[k.id,o,""]]),o.locals&&(k.exports=o.locals);var a=r("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,c=a("9db14f02",o,!0,{})},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/email/_components/modify-forwarder-dialog.vue?vue&type=style&index=0&id=0b882902&prod&lang=scss&":function(k,E,r){var o=r("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/email/_components/modify-forwarder-dialog.vue?vue&type=style&index=0&id=0b882902&prod&lang=scss&");o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[k.id,o,""]]),o.locals&&(k.exports=o.locals);var a=r("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,c=a("ab00c524",o,!0,{})}}]);
