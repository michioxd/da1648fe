(self.webpackChunk=self.webpackChunk||[]).push([[9601],{"../node_modules/date-fns/esm/formatDistance/index.js":function(L,D,a){"use strict";a.d(D,{Z:function(){return R}});var f=a("../node_modules/date-fns/esm/_lib/defaultOptions/index.js"),g=a("../node_modules/date-fns/esm/toDate/index.js"),v=a("../node_modules/date-fns/esm/_lib/requiredArgs/index.js");function _(l,d){(0,v.Z)(2,arguments);var u=(0,g.Z)(l),y=(0,g.Z)(d),x=u.getTime()-y.getTime();return x<0?-1:x>0?1:x}function C(l,d){(0,v.Z)(2,arguments);var u=(0,g.Z)(l),y=(0,g.Z)(d),x=u.getFullYear()-y.getFullYear(),o=u.getMonth()-y.getMonth();return x*12+o}function j(l){(0,v.Z)(1,arguments);var d=(0,g.Z)(l);return d.setHours(23,59,59,999),d}function M(l){(0,v.Z)(1,arguments);var d=(0,g.Z)(l),u=d.getMonth();return d.setFullYear(d.getFullYear(),u+1,0),d.setHours(23,59,59,999),d}function E(l){(0,v.Z)(1,arguments);var d=(0,g.Z)(l);return j(d).getTime()===M(d).getTime()}function P(l,d){(0,v.Z)(2,arguments);var u=(0,g.Z)(l),y=(0,g.Z)(d),x=_(u,y),o=Math.abs(C(u,y)),n;if(o<1)n=0;else{u.getMonth()===1&&u.getDate()>27&&u.setDate(30),u.setMonth(u.getMonth()-x*o);var i=_(u,y)===-x;E((0,g.Z)(l))&&o===1&&_(l,y)===1&&(i=!1),n=x*(o-Number(i))}return n===0?0:n}function O(l,d){return(0,v.Z)(2,arguments),(0,g.Z)(l).getTime()-(0,g.Z)(d).getTime()}var $={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(d){return d<0?Math.ceil(d):Math.floor(d)}},N="trunc";function A(l){return l?$[l]:$[N]}function b(l,d,u){(0,v.Z)(2,arguments);var y=O(l,d)/1e3;return A(u==null?void 0:u.roundingMethod)(y)}var S=a("../node_modules/date-fns/esm/_lib/defaultLocale/index.js");function s(l,d){if(l==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&(l[u]=d[u]);return l}function e(l){return s({},l)}var t=a("../node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),r=1440,c=2520,p=43200,h=86400;function R(l,d,u){var y,x;(0,v.Z)(2,arguments);var o=(0,f.j)(),n=(y=(x=u==null?void 0:u.locale)!==null&&x!==void 0?x:o.locale)!==null&&y!==void 0?y:S.Z;if(!n.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=_(l,d);if(isNaN(i))throw new RangeError("Invalid time value");var m=s(e(u),{addSuffix:Boolean(u==null?void 0:u.addSuffix),comparison:i}),T,Z;i>0?(T=(0,g.Z)(d),Z=(0,g.Z)(l)):(T=(0,g.Z)(l),Z=(0,g.Z)(d));var w=b(Z,T),F=((0,t.Z)(Z)-(0,t.Z)(T))/1e3,I=Math.round((w-F)/60),B;if(I<2)return u!=null&&u.includeSeconds?w<5?n.formatDistance("lessThanXSeconds",5,m):w<10?n.formatDistance("lessThanXSeconds",10,m):w<20?n.formatDistance("lessThanXSeconds",20,m):w<40?n.formatDistance("halfAMinute",0,m):w<60?n.formatDistance("lessThanXMinutes",1,m):n.formatDistance("xMinutes",1,m):I===0?n.formatDistance("lessThanXMinutes",1,m):n.formatDistance("xMinutes",I,m);if(I<45)return n.formatDistance("xMinutes",I,m);if(I<90)return n.formatDistance("aboutXHours",1,m);if(I<r){var W=Math.round(I/60);return n.formatDistance("aboutXHours",W,m)}else{if(I<c)return n.formatDistance("xDays",1,m);if(I<p){var G=Math.round(I/r);return n.formatDistance("xDays",G,m)}else if(I<h)return B=Math.round(I/p),n.formatDistance("aboutXMonths",B,m)}if(B=P(Z,T),B<12){var K=Math.round(I/p);return n.formatDistance("xMonths",K,m)}else{var z=B%12,U=Math.floor(B/12);return z<3?n.formatDistance("aboutXYears",U,m):z<9?n.formatDistance("overXYears",U,m):n.formatDistance("almostXYears",U+1,m)}}},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/git-version/diff.vue?vue&type=style&index=0&id=0d3bfb2c&prod&lang=scss&scoped=true&":function(){},"./js/composables/dateFilter.ts":function(L,D,a){"use strict";a.d(D,{W:function(){return C},f:function(){return v.f}});var f=a("../node_modules/ramda/es/index.js"),g=a("../node_modules/date-fns/esm/format/index.js"),v=a("./js/modules/date-formats.ts"),_=a("./js/modules/customizations/date-formats/default.ts");const C=f.WAo((j,M)=>{if(M)try{return(0,g.Z)(M,v.f.value[j])}catch(E){return console.warn(`Given ${j} format is incorrect:
${E.message}`),(0,g.Z)(M,_.d[j])}return""})},"./js/composables/filters.ts":function(L,D,a){"use strict";a.d(D,{Q0:function(){return b},aS:function(){return s},d5:function(){return S},eB:function(){return $},hT:function(){return P},kC:function(){return E},n9:function(){return A},zM:function(){return O}});var f=a("../node_modules/date-fns/esm/formatDistance/index.js"),g=a("../node_modules/punycode/punycode.es6.js"),v=a("./js/composables/dateFilter.ts"),_=a("./js/composables/gettext.ts");const{$gettext:C,$ngettext:j,$gettextInterpolate:M}=(0,_.Z)(),E=t=>{var r;return t?((r=t.at(0))===null||r===void 0?void 0:r.toUpperCase())+t.slice(1):""},P=(t,r="datetime")=>(0,v.W)(r,t),O=t=>(0,f.Z)(t,new Date),$=(t,r=1024)=>{const c=Number(t);if(!c)return"0 B";const p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],h=Math.floor(Math.log(c)/Math.log(r));return`${parseFloat((c/r**h).toFixed(2))} ${p[h]}`},N=t=>{try{return(0,g.xX)(t)}catch(r){return t}},A=t=>(0,g.xX)(t),b=t=>{if(!t||!t.includes("@"))return t;const[r,c]=t.split("@");return[r,N(c)].join("@")},S=t=>{if(t<60)return C("less than a minute");const r=Math.floor(t/60)%60,c=Math.floor(t/3600)%24,p=Math.floor(t/(3600*24)),h=[p?j("%{days} day","%{days} days",p):null,c?j("%{hours} hour","%{hours} hours",c):null,r?j("%{minutes} minute","%{minutes} minutes",r):null].filter(Boolean).join(", ");return M(h,{days:p,hours:c,minutes:r})},s=(t,r)=>t.length<=r?t:`${t.substring(0,r)}...`,e=()=>({capitalize:E,date:P,distanceFromNow:O,humanReadableSize:$,p6eUnicode:A,p6eUnicodeEmail:b,formatUptime:S,truncateString:s})},"./js/pages/user/git-version/refs.ts":function(L,D,a){"use strict";a.d(D,{R:function(){return C},T0:function(){return P},YU:function(){return j},lP:function(){return M},nw:function(){return _},yI:function(){return E},z2:function(){return O}});var f=a("../node_modules/vue/dist/vue.common.prod.js"),g=a.n(f),v=a("./js/composables/domain.ts");const{domain:_}=(0,v.a)(),C=(0,f.ref)([]),j=(0,f.ref)({branches:[],deploy_branch:"",deploy_dir:"",keyfile:"",name:"",remote:"",url:"",uuid:"",valid:!1,webhook_url:""}),M=(0,f.ref)({commits:[],more_newer:!1,more_older:!1}),E=(0,f.ref)(""),P=(0,f.ref)(0),O=(0,f.ref)({commit:{author:{name:"",email:""},hash:"",message:"",time:""},diff:[]})},"./js/pages/user/git-version/request.ts":function(L,D,a){"use strict";a.d(D,{cQ:function(){return x},ER:function(){return c},Je:function(){return R},h2:function(){return p},pD:function(){return h},LJ:function(){return l},tQ:function(){return u},St:function(){return d},gJ:function(){return y}});var f=a("./js/api/openapi/index.ts"),g=a("../node_modules/runtypes/lib/index.js"),v=a("./js/openapi/web.types.ts");const _=(0,f.$d)(),C=f.an.Default(async(o,n)=>{const{data:i}=await _.get(`/api/git/domain/${o}`,n);return i.status==="success"&&g.Array(v.Uu).guard(i.data)===!1?_.failure({type:"INVALID_RESPONSE",response:i.data}):i}),j=f.an.Default(async(o,n)=>{const{data:i}=await _.get(`/api/git/uuid/${o}`,n);return i.status==="success"&&v.Uu.guard(i.data)===!1?_.failure({type:"INVALID_RESPONSE",response:i.data}):i}),M=f.an.Default(async(o,n,i,m)=>{const{data:T}=await _.get(`/api/git/uuid/${o}/branch/${n}`,Object.assign({},m||{},{params:i}));return T.status==="success"&&v.B_.guard(T.data)===!1?_.failure({type:"INVALID_RESPONSE",response:T.data}):T}),E=f.an.Default(async(o,n,i)=>{const{data:m}=await _.get(`/api/git/uuid/${o}/commit/${n}`,i);return m.status==="success"&&v.IK.guard(m.data)===!1?_.failure({type:"INVALID_RESPONSE",response:m.data}):m}),P=f.an.Default(async(o,n)=>{const{data:i}=await _.post(`/api/git/uuid/${o}/deploy`,n);return i}),O=f.an.Default(async(o,n,i)=>{const{data:m}=await _.post(`/api/git/domain/${o}`,n,i);return m.status==="success"&&v.Uu.guard(m.data)===!1?_.failure({type:"INVALID_RESPONSE",response:m.data}):m}),$=f.an.Default(async(o,n)=>{const{data:i}=await _.post(`/api/git/uuid/${o}/fetch`,n);return i}),N=f.an.Default(async(o,n,i)=>{const{data:m}=await _.put(`/api/git/uuid/${o}`,n,i);return m}),A=f.an.Default(async(o,n)=>{const{data:i}=await _.delete(`/api/git/uuid/${o}`,n);return i});var b=a("./js/composables/notify.ts"),S=a("./js/composables/gettext.ts"),s=a("./js/composables/useErrorMessages.ts");const{$gettext:e}=(0,S.Z)(),t=(0,b.d$)(),r=(0,s.L)({GIT_DEPLOY_BRANCH_NOT_SET:e("Git deploy branch is not set"),GIT_DEPLOY_DIR_NOT_SET:e("Git deploy directory is not set"),GIT_DIRECTORY_EXISTS:e("Git directory exists %{ directory }"),GIT_REMOTE_PERMISSION_DENIED:e("Lacking authorization to connect to the remote repository"),GIT_REMOTE_CONNECTION_ERROR:e("Server failed to connect to the remote repository")}),c=async o=>{const n=await C(o);return n.error&&r(n.error),n},p=async o=>{const n=await j(o);return n.error&&r(n.error),n},h=async(o,n,i)=>{const m=await M(o,n,i);return m.error&&r(m.error),m},R=async(o,n)=>{const i=await E(o,n);return i.error&&r(i.error),i},l=async o=>{const n=await P(o);return n.error?r(n.error):t.success({title:e("Git Deploy"),content:e("Deployment completed")}),n},d=async(o,n)=>{const i=await O(o,n);return i.error?r(i.error):t.success({title:e("Git"),content:e("Repository created")}),i},u=async o=>{const n=await $(o);return n.error?r(n.error):t.success({title:e("Git Fetch"),content:e("Fetch completed")}),n},y=async(o,n)=>{const i=await N(o,n);return i.error?r(i.error):t.success({title:e("Git Modify"),content:e("Repository modified")}),i},x=async o=>{const n=await A(o);return n.error?r(n.error):t.success({title:e("Delete"),content:e("Repository deleted")}),n}},"./js/pages/user/git-version/diff.vue":function(L,D,a){"use strict";a.r(D),a.d(D,{default:function(){return b}});var f=function(){var s=this,e=s._self._c,t=s._self._setupProxy;return e("app-page",{attrs:{id:"template-diff"}},[e("app-page-section",{scopedSlots:s._u([{key:"footer:buttons",fn:function(){return[e("ui-button",{attrs:{theme:"primary"},on:{click:function(r){return r.preventDefault(),t.back.apply(null,arguments)}}},[e("span",{domProps:{textContent:s._s(s.$gettext("Go back to Log view"))}})])]},proxy:!0}])}),s._v(" "),e("app-page-section",[e("ui-form-element",{scopedSlots:s._u([{key:"title",fn:function(){return[e("span",{domProps:{textContent:s._s(s.$gettext("Time"))}})]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"element-text"},[s._v(`
                    `+s._s(t.date(new Date(t.commitInfo.commit.time),"datetime"))+`
                `)])]},proxy:!0}])}),s._v(" "),e("ui-form-element",{scopedSlots:s._u([{key:"title",fn:function(){return[e("span",{domProps:{textContent:s._s(s.$gettext("Commit"))}})]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"element-text"},[s._v(`
                    `+s._s(t.commitInfo.commit.hash)+`
                `)])]},proxy:!0}])}),s._v(" "),e("ui-form-element",{scopedSlots:s._u([{key:"title",fn:function(){return[e("span",{domProps:{textContent:s._s(s.$gettext("Message"))}})]},proxy:!0},{key:"content",fn:function(){return[e("pre",{staticClass:"element-text comment",domProps:{textContent:s._s(t.commitInfo.commit.message)}})]},proxy:!0}])}),s._v(" "),e("ui-form-element",{scopedSlots:s._u([{key:"title",fn:function(){return[e("span",{domProps:{textContent:s._s(s.$gettext("Author"))}})]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"element-text"},[s._v(`
                    `+s._s(t.commitInfo.commit.author.name+" "+t.commitInfo.commit.author.email)+`
                `)])]},proxy:!0}])})],1),s._v(" "),e("app-page-section",{staticClass:"element-text"},[e("span",{domProps:{textContent:s._s(s.$gettext("Showing"))}}),s._v(" "),e("span",{domProps:{textContent:s._s(s.$gettextInterpolate(s.$ngettext("%{n} changed file with","%{n} changed files with",t.filesChanged),{n:t.filesChanged}))}}),s._v(" "),e("span",{domProps:{textContent:s._s(s.$gettextInterpolate(s.$ngettext("%{n} addition and","%{n} additions and",t.stats.plus),{n:t.stats.plus}))}}),s._v(" "),e("span",{domProps:{textContent:s._s(s.$gettextInterpolate(s.$ngettext("%{n} deletion.","%{n} deletions.",t.stats.minus),{n:t.stats.minus}))}})]),s._v(" "),s._l(t.commitInfo.diff,function(r){return e("app-page-section",{key:r.filename,staticClass:"diff-wrapper"},[e("table",{staticClass:"diff-table"},s._l(r.diffs,function(c,p){return e("tr",{key:p,class:["diff-line",c.type]},[c.type==="header"?[e("td",{attrs:{colspan:"2"}},[e("pre",{staticClass:"diff-line-content",domProps:{textContent:s._s(c.line)}})])]:[e("td",{staticClass:"sign"},[c.type==="minus"?[s._v("-")]:c.type==="plus"?[s._v(`
                            +
                        `)]:s._e()],2),s._v(" "),e("td",[e("pre",{staticClass:"diff-line-content",domProps:{textContent:s._s(c.line)}})])]],2)}),0)])})],2)},g=[],v=a("../node_modules/vue/dist/vue.common.prod.js"),_=a("./js/composables/filters.ts"),C=a("../node_modules/vue-router/composables.mjs"),j=a("./js/pages/user/git-version/request.ts"),M=a("./js/pages/user/git-version/refs.ts");const E=(0,v.defineComponent)({async beforeRouteEnter(S,s,e){const{data:t,error:r}=await(0,j.Je)(S.params.uuid,S.params.commit);if(r){e(!1);return}M.z2.value=t,e()}});var P=(0,v.defineComponent)({...E,__name:"diff",emits:[],setup(S){const s=(0,C.tv)(),e=(0,v.computed)(()=>M.z2.value.diff.length),t=(0,v.computed)(()=>M.z2.value.diff.reduce((c,p)=>(p.diffs.forEach(h=>c[h.type]++),c),{plus:0,minus:0}));function r(){s.go(-1)}return{__sfc:!0,router:s,filesChanged:e,stats:t,back:r,date:_.hT,commitInfo:M.z2}}}),O=P,$=a("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/git-version/diff.vue?vue&type=style&index=0&id=0d3bfb2c&prod&lang=scss&scoped=true&"),N=a("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),A=(0,N.Z)(O,f,g,!1,null,"0d3bfb2c",null),b=A.exports},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/git-version/diff.vue?vue&type=style&index=0&id=0d3bfb2c&prod&lang=scss&scoped=true&":function(L,D,a){var f=a("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/git-version/diff.vue?vue&type=style&index=0&id=0d3bfb2c&prod&lang=scss&scoped=true&");f.__esModule&&(f=f.default),typeof f=="string"&&(f=[[L.id,f,""]]),f.locals&&(L.exports=f.locals);var g=a("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,v=g("e1aeaf14",f,!0,{})},"../node_modules/vue-router/composables.mjs":function(L,D,a){"use strict";a.d(D,{tv:function(){return v},yj:function(){return _}});var f=a("../node_modules/vue/dist/vue.common.prod.js");/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */function g(e){if(!getCurrentInstance())throw new Error("[vue-router]: Missing current instance. "+e+"() must be called inside <script setup> or setup().")}function v(){return(0,f.getCurrentInstance)().proxy.$root.$router}function _(){var e=(0,f.getCurrentInstance)().proxy.$root;if(!e._$route){var t=(0,f.effectScope)(!0).run(function(){return(0,f.shallowReactive)(Object.assign({},e.$router.currentRoute))});e._$route=t,e.$router.afterEach(function(r){Object.assign(t,r)})}return e._$route}function C(e){return O(e,j)}function j(e,t,r){var c=e.matched,p=t.matched;return c.length>=r&&c.slice(0,r+1).every(function(h,R){return h===p[R]})}function M(e,t,r){var c=e.matched,p=t.matched;return c.length<r||c[r]!==p[r]}function E(e){return O(e,M)}var P=function(){};function O(e,t){for(var r=getCurrentInstance(),c=v(),p=r.proxy;p&&p.$vnode&&p.$vnode.data&&p.$vnode.data.routerViewDepth==null;)p=p.$parent;var h=p&&p.$vnode&&p.$vnode.data?p.$vnode.data.routerViewDepth:null;if(h!=null){var R=c.beforeEach(function(l,d,u){return t(l,d,h)?e(l,d,u):u()});return onUnmounted(R),R}return P}function $(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function N(e,t){var r=function(h){var R=t[h],l=e[h];if(typeof R=="string"){if(R!==l)return{v:!1}}else if(!Array.isArray(l)||l.length!==R.length||R.some(function(d,u){return d!==l[u]}))return{v:!1}};for(var c in t){var p=r(c);if(p)return p.v}return!0}function A(e,t){return Array.isArray(e)?b(e,t):Array.isArray(t)?b(t,e):e===t}function b(e,t){return Array.isArray(t)?e.length===t.length&&e.every(function(r,c){return r===t[c]}):e.length===1&&e[0]===t}function S(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e)if(!A(e[r],t[r]))return!1;return!0}function s(e){var t=v(),r=_(),c=computed(function(){return t.resolve(unref(e.to),r)}),p=computed(function(){var d=c.value.route,u=d.matched,y=u.length,x=u[y-1],o=r.matched;if(!x||!o.length)return-1;var n=o.indexOf(x);if(n>-1)return n;var i=o[o.length-2];return y>1&&i&&i===x.parent}),h=computed(function(){return p.value>-1&&N(r.params,c.value.route.params)}),R=computed(function(){return p.value>-1&&p.value===r.matched.length-1&&S(r.params,c.value.route.params)}),l=function(d){var u=c.value.route;return $(d)?e.replace?t.replace(u):t.push(u):Promise.resolve()};return{href:computed(function(){return c.value.href}),route:computed(function(){return c.value.route}),isExactActive:R,isActive:h,navigate:l}}}}]);
