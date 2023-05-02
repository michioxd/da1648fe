"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7688],{"../node_modules/date-fns/esm/formatDistance/index.js":function(I,x,t){t.d(x,{Z:function(){return L}});var a=t("../node_modules/date-fns/esm/_lib/defaultOptions/index.js"),s=t("../node_modules/date-fns/esm/toDate/index.js"),c=t("../node_modules/date-fns/esm/_lib/requiredArgs/index.js");function D(l,n){(0,c.Z)(2,arguments);var e=(0,s.Z)(l),m=(0,s.Z)(n),p=e.getTime()-m.getTime();return p<0?-1:p>0?1:p}function r(l,n){(0,c.Z)(2,arguments);var e=(0,s.Z)(l),m=(0,s.Z)(n),p=e.getFullYear()-m.getFullYear(),R=e.getMonth()-m.getMonth();return p*12+R}function O(l){(0,c.Z)(1,arguments);var n=(0,s.Z)(l);return n.setHours(23,59,59,999),n}function E(l){(0,c.Z)(1,arguments);var n=(0,s.Z)(l),e=n.getMonth();return n.setFullYear(n.getFullYear(),e+1,0),n.setHours(23,59,59,999),n}function u(l){(0,c.Z)(1,arguments);var n=(0,s.Z)(l);return O(n).getTime()===E(n).getTime()}function f(l,n){(0,c.Z)(2,arguments);var e=(0,s.Z)(l),m=(0,s.Z)(n),p=D(e,m),R=Math.abs(r(e,m)),h;if(R<1)h=0;else{e.getMonth()===1&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-p*R);var C=D(e,m)===-p;u((0,s.Z)(l))&&R===1&&D(l,m)===1&&(C=!1),h=p*(R-Number(C))}return h===0?0:h}function v(l,n){return(0,c.Z)(2,arguments),(0,s.Z)(l).getTime()-(0,s.Z)(n).getTime()}var o={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(n){return n<0?Math.ceil(n):Math.floor(n)}},g="trunc";function d(l){return l?o[l]:o[g]}function y(l,n,e){(0,c.Z)(2,arguments);var m=v(l,n)/1e3;return d(e==null?void 0:e.roundingMethod)(m)}var T=t("../node_modules/date-fns/esm/_lib/defaultLocale/index.js");function Z(l,n){if(l==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e]);return l}function $(l){return Z({},l)}var i=t("../node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),M=1440,P=2520,b=43200,j=86400;function L(l,n,e){var m,p;(0,c.Z)(2,arguments);var R=(0,a.j)(),h=(m=(p=e==null?void 0:e.locale)!==null&&p!==void 0?p:R.locale)!==null&&m!==void 0?m:T.Z;if(!h.formatDistance)throw new RangeError("locale must contain formatDistance property");var C=D(l,n);if(isNaN(C))throw new RangeError("Invalid time value");var _=Z($(e),{addSuffix:Boolean(e==null?void 0:e.addSuffix),comparison:C}),z,A;C>0?(z=(0,s.Z)(n),A=(0,s.Z)(l)):(z=(0,s.Z)(l),A=(0,s.Z)(n));var U=y(A,z),W=((0,i.Z)(A)-(0,i.Z)(z))/1e3,S=Math.round((U-W)/60),B;if(S<2)return e!=null&&e.includeSeconds?U<5?h.formatDistance("lessThanXSeconds",5,_):U<10?h.formatDistance("lessThanXSeconds",10,_):U<20?h.formatDistance("lessThanXSeconds",20,_):U<40?h.formatDistance("halfAMinute",0,_):U<60?h.formatDistance("lessThanXMinutes",1,_):h.formatDistance("xMinutes",1,_):S===0?h.formatDistance("lessThanXMinutes",1,_):h.formatDistance("xMinutes",S,_);if(S<45)return h.formatDistance("xMinutes",S,_);if(S<90)return h.formatDistance("aboutXHours",1,_);if(S<M){var w=Math.round(S/60);return h.formatDistance("aboutXHours",w,_)}else{if(S<P)return h.formatDistance("xDays",1,_);if(S<b){var F=Math.round(S/M);return h.formatDistance("xDays",F,_)}else if(S<j)return B=Math.round(S/b),h.formatDistance("aboutXMonths",B,_)}if(B=f(A,z),B<12){var H=Math.round(S/b);return h.formatDistance("xMonths",H,_)}else{var K=B%12,N=Math.floor(B/12);return K<3?h.formatDistance("aboutXYears",N,_):K<9?h.formatDistance("overXYears",N,_):h.formatDistance("almostXYears",N+1,_)}}},"./js/api/commands/converters/customItems.ts":function(I,x,t){t.d(x,{CR:function(){return r}});var a=t("../node_modules/ramda/es/index.js"),s=t("./js/api/commands/converters/index.ts"),c=t("./js/api/commands/utils/transduce.ts"),D=t("./js/api/commands/converters/toSelectData.ts");const r=u=>{const f={name:u.name,type:u.type==="listbox"?"select":u.type,label:u.string,description:u.desc||"",value:u.type==="checkbox"?(0,s.sw)(u.checked||"no"):u.value||""};return f.type==="select"?a.BPw(f,(0,D.M1)(u.select||{})):f},O=u=>(0,c.vr)([(0,c.uD)(f=>/^item\d+val$/.test(f)),(0,c.r5)(f=>{const v=f,o=f.replace("val","txt"),g=u[v],d=u[o];return{[g]:d}})],Object.keys(u)),E=(u,f)=>a.qCK(o=>{const g={name:o.name,type:o.type==="listbox"?"select":o.type,description:o.desc||"",value:o.value||"",label:o.string};return o.type==="listbox"?(g.value=o.default,g.options=O(o)):o.type==="checkbox"&&(g.value=o.checked==="yes"),g},a.BPw({name:u}),(0,c.vr)([(0,c.r5)(o=>{const[g,d]=a.Vl2("=",o);return{[g]:d}})]),a.Vl2("&"))(f);x.ZP={fromObject:r,fromString:E}},"./js/api/commands/converters/index.ts":function(I,x,t){t.d(x,{l$:function(){return v.ZP},t0:function(){return a.t0},S8:function(){return a.S8},ql:function(){return a.ql},sw:function(){return a.sw},Qu:function(){return a.Qu},He:function(){return a.He},M1:function(){return f.M1},sf:function(){return g},cc:function(){return u}});var a=t("./js/api/commands/converters/primitive.ts"),s=t("../node_modules/monet/dist/monet.js"),c=t("./js/api/commands/types.ts");const D=d=>typeof d=="object"?s.Either.Right(d):s.Either.Left(new Error("Passed param is not an object")),r=d=>typeof d.usage=="string"?s.Either.Right(d):s.Either.Left(new Error("usage property is required")),O=d=>({usage:(0,a.He)(d.usage),limit:(0,a.Qu)(d.limit)}),E=({usage:d,limit:y})=>{let T=c.H.Normal;const Z=Math.floor(d/y*100);return Z>=100?T=c.H.OverUsed:Z>80&&(T=c.H.AlmostUsed),{usage:d,limit:y,status:T}},u=d=>{const y=s.Either.Right(d).flatMap(D).flatMap(r).map(O).map(E);if(y.isLeft())throw y.left();return y.right()};var f=t("./js/api/commands/converters/toSelectData.ts"),v=t("./js/api/commands/converters/customItems.ts"),o=t("../node_modules/ramda/es/index.js");const g=d=>y=>{const{info:T}=y,Z=o.CEd(["info"],y);return{columns:T.columns,rowsCount:Number(T.rows),rows:o.UID(d,o.VO0(Z))}}},"./js/api/commands/converters/toSelectData.ts":function(I,x,t){t.d(x,{M1:function(){return E}});var a=t("../node_modules/monet/dist/monet.js"),s=t.n(a),c=t("./js/api/commands/utils/transduce.ts"),D=t("../node_modules/ramda/es/index.js");const r=u=>a.Maybe.Some(u).flatMap(f=>{const v=f.find(o=>o.selected==="yes");return v?a.Maybe.Some(v):a.Maybe.None()}).flatMap(f=>a.Maybe.fromNull(f.value)).orSome(""),O=(0,c.vr)([(0,c.r5)(u=>({[u.value]:u.text}))]),E=u=>{const f=(0,D.VO0)(u);return{value:r(f),options:O(f)}}},"./js/api/commands/types.ts":function(I,x,t){t.d(x,{H:function(){return a}});var a;(function(s){s.Normal="normal",s.AlmostUsed="almost_used",s.OverUsed="overused"})(a||(a={}))},"./js/api/commands/utils/transduce.ts":function(I,x,t){t.d(x,{Re:function(){return D},r5:function(){return s},uD:function(){return c},vr:function(){return f},zh:function(){return E}});var a=t("../node_modules/ramda/es/index.js");const s=v=>o=>(g,d)=>{const y=v(d);return o(g,y)},c=v=>o=>(g,d)=>v(d)?o(g,d):g,D=(v,o)=>(v.push(o),v),r=(v,o)=>a.BPw(v,o),O=(v,o,g,d)=>{const y=a.qCK(...g);return d.reduce(y(o),v)},E=a.WAo(O),u=E([],D),f=E({},r)},"./js/composables/dateFilter.ts":function(I,x,t){t.d(x,{W:function(){return r},f:function(){return c.f}});var a=t("../node_modules/ramda/es/index.js"),s=t("../node_modules/date-fns/esm/format/index.js"),c=t("./js/modules/date-formats.ts"),D=t("./js/modules/customizations/date-formats/default.ts");const r=a.WAo((O,E)=>{if(E)try{return(0,s.Z)(E,c.f.value[O])}catch(u){return console.warn(`Given ${O} format is incorrect:
${u.message}`),(0,s.Z)(E,D.d[O])}return""})},"./js/composables/filters.ts":function(I,x,t){t.d(x,{Q0:function(){return y},aS:function(){return Z},d5:function(){return T},eB:function(){return o},hT:function(){return f},kC:function(){return u},n9:function(){return d},zM:function(){return v}});var a=t("../node_modules/date-fns/esm/formatDistance/index.js"),s=t("../node_modules/punycode/punycode.es6.js"),c=t("./js/composables/dateFilter.ts"),D=t("./js/composables/gettext.ts");const{$gettext:r,$ngettext:O,$gettextInterpolate:E}=(0,D.Z)(),u=i=>{var M;return i?((M=i.at(0))===null||M===void 0?void 0:M.toUpperCase())+i.slice(1):""},f=(i,M="datetime")=>(0,c.W)(M,i),v=i=>(0,a.Z)(i,new Date),o=(i,M=1024)=>{const P=Number(i);if(!P)return"0 B";const b=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],j=Math.floor(Math.log(P)/Math.log(M));return`${parseFloat((P/M**j).toFixed(2))} ${b[j]}`},g=i=>{try{return(0,s.xX)(i)}catch(M){return i}},d=i=>(0,s.xX)(i),y=i=>{if(!i||!i.includes("@"))return i;const[M,P]=i.split("@");return[M,g(P)].join("@")},T=i=>{if(i<60)return r("less than a minute");const M=Math.floor(i/60)%60,P=Math.floor(i/3600)%24,b=Math.floor(i/(3600*24)),j=[b?O("%{days} day","%{days} days",b):null,P?O("%{hours} hour","%{hours} hours",P):null,M?O("%{minutes} minute","%{minutes} minutes",M):null].filter(Boolean).join(", ");return E(j,{days:b,hours:P,minutes:M})},Z=(i,M)=>i.length<=M?i:`${i.substring(0,M)}...`,$=()=>({capitalize:u,date:f,distanceFromNow:v,humanReadableSize:o,p6eUnicode:d,p6eUnicodeEmail:y,formatUptime:T,truncateString:Z})},"./js/pages/user/disk-usage.vue":function(I,x,t){t.r(x),t.d(x,{default:function(){return l}});var a=function(){var e=this,m=e._self._c;return m("app-page",[m("app-page-section",[m("ui-tabs",{attrs:{tabs:[{id:"folders",label:e.$gettext("Disk Usage")},{id:"quotas",label:e.$gettext("System Quotas"),desc:e.$gettext("Entries already included in the System Quotas")}]},scopedSlots:e._u([{key:"tab:folders",fn:function(){return[m("ui-r-table",{key:"folders",attrs:{rows:e.folders,"is-checkable":!1,columns:[{id:"path",label:e.$gettext("Path")},{id:"size",label:e.$gettext("Disk Usage")}],"vertical-layout":e.clientStore.isPhone,"disable-pagination":""},scopedSlots:e._u([{key:"buttons:before",fn:function(){return[m("input-checkbox",{model:{value:e.hideZeroSized,callback:function(p){e.hideZeroSized=p},expression:"hideZeroSized"}},[m("span",{domProps:{textContent:e._s(e.$gettext("Hide entries which use 0 bytes"))}})])]},proxy:!0},{key:"col:size",fn:function({size:p}){return[e._v(`
                        `+e._s(e.humanReadableSize(p))+`
                    `)]}},e.$api.breakdown.total?{key:"col:after:path",fn:function(){return[m("span",{staticClass:"txt:bold",domProps:{textContent:e._s(e.$gettext("Total"))}})]},proxy:!0}:null,e.$api.breakdown.total?{key:"col:after:size",fn:function(){return[m("span",{staticClass:"txt:bold"},[e._v(`
                            `+e._s(e.humanReadableSize(e.$api.breakdown.total))+`
                        `)])]},proxy:!0}:null],null,!0)})]},proxy:!0},{key:"tab:quotas",fn:function(){return[m("ui-r-table",{key:"quotas",attrs:{rows:e.systemQuotas,"is-checkable":!1,columns:[{id:"path",label:e.$gettext("Path")},{id:"size",label:e.$gettext("Disk Usage")}],"vertical-layout":e.clientStore.isPhone,"disable-pagination":""},scopedSlots:e._u([{key:"buttons:before",fn:function(){return[m("input-checkbox",{model:{value:e.hideZeroSized,callback:function(p){e.hideZeroSized=p},expression:"hideZeroSized"}},[m("span",{domProps:{textContent:e._s(e.$gettext("Hide entries which use 0 bytes"))}})])]},proxy:!0},{key:"col:size",fn:function({size:p}){return[e._v(`
                        `+e._s(e.humanReadableSize(p))+`
                    `)]}}])})]},proxy:!0}])})],1)],1)},s=[],c=t("./js/stores/index.ts"),D=t("./js/api/command/index.js"),r=t("../node_modules/ramda/es/index.js"),O=t("../node_modules/monet/dist/monet.js"),E=t("./js/api/commands/converters/index.ts");const u=({descriptor:n})=>O.Maybe.Some(n).filter(r.q9t("owned")).map(r.Vl2(" ")).map(r.zud(["owned","files","by","in"])).map(r._Qy(["owner","path"])).orSome({path:n,owner:""}),f=n=>({counted:r.fS0("1",n.counted),size:(0,E.He)(n.size)}),v=n=>r.BPw(f(n),u(n)),o=r.zGw(r.CEd(["total","simpletotal","year","month"]),r.VO0,r.hXT(n=>typeof n!="string"),r.UID(v)),g=r.vgT("year"),d=r.vgT("month"),y=r.zGw(n=>n.total||n.simpletotal||"0",E.He),T=D.Z.get({id:"DISK_USAGE_BREAKDOWN",url:"/CMD_DU_BREAKDOWN",schema:{user:D.Z.OPTIONAL_STRING},mapResponse:{folders:o,year:g,month:d,total:y}});var Z=t("./js/composables/filters.ts");const $=n=>n,i=(0,r.vgT)("counted"),M=(0,r.CyQ)(i);var P={preload:T,data(){return{hideZeroSized:!0,onlyCounted:!0}},api:[{command:T,bind:"breakdown"}],computed:{counted(){return this.onlyCounted?(0,r.hXT)((0,r.vgT)("counted"),this.$api.breakdown.folders):this.$api.breakdown.folders},folders(){return this.getFolders(i)},systemQuotas(){return this.getFolders(M)},...(0,c.Kc)(["client"])},methods:{humanReadableSize:Z.eB,getFolders(n){return(0,r.zGw)((0,r.vgT)("folders"),(0,r.hXT)(n),this.hideZeroSized?(0,r.hXT)((0,r.vgT)("size")):$)(this.$api.breakdown)}}},b=P,j=t("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),L=(0,j.Z)(b,a,s,!1,null,null,null),l=L.exports}}]);
