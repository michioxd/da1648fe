(self.webpackChunk=self.webpackChunk||[]).push([[9573],{"./js/api/commands/reseller/users/packages/index.js":function(S,_,l){"use strict";l.d(_,{wI:function(){return P},kz:function(){return e},$o:function(){return N},xp:function(){return x},EV:function(){return p},Nx:function(){return c},$y:function(){return k}});var s=l("./js/api/command/index.js"),r=l("../node_modules/ramda/es/index.js"),u=l("./js/api/commands/converters/index.ts");const v=t=>r.VO0(t.custom_items||{}).map(u.l$.fromObject),y=t=>(0,u.M1)(t.create_user_home_override||{}),O=t=>{var n,d,g,A,b,j;return{aftp:(0,u.sw)(t.aftp.checked),catchall:(0,u.sw)(t.catchall.checked),cgi:(0,u.sw)(t.cgi.checked),cron:(0,u.sw)(t.cron.checked),dnscontrol:(0,u.sw)(t.dnscontrol.checked),login_keys:(0,u.sw)(t.login_keys.checked),php:(0,u.sw)(t.php.checked),spam:(0,u.sw)(t.spam.checked),ssh:(0,u.sw)(t.ssh.checked),ssl:(0,u.sw)(t.ssl.checked),suspend_at_limit:(0,u.sw)(t.suspend_at_limit.checked),sysinfo:(0,u.sw)(t.sysinfo.checked),jail:(0,u.sw)(((n=t.jail)===null||n===void 0?void 0:n.checked)||"no"),git:(0,u.sw)(((d=t.git)===null||d===void 0?void 0:d.checked)||"no"),wordpress:(0,u.sw)(((g=t.wordpress)===null||g===void 0?void 0:g.checked)||"no"),clamav:(0,u.sw)(((A=t.clamav)===null||A===void 0?void 0:A.checked)||"no"),nginx_unit:(0,u.sw)(((b=t.nginx_unit)===null||b===void 0?void 0:b.checked)||"no"),redis:(0,u.sw)(((j=t.redis)===null||j===void 0?void 0:j.checked)||"no")}},h=r.zGw(Number,r.CyQ(Number.isFinite)),f=({value:t})=>({unlimited:h(t),value:h(t)?"":t}),a=r.zGw(r.eiS(["bandwidth","domainptr","ftp","inode","mysql","nemailf","nemailml","nemailr","nemails","nsubdomains","quota","vdomains"]),r.IDH(f)),o=({skin:t})=>(0,u.M1)(t),i=({language:t})=>(0,u.M1)(t),m=({feature_sets:t})=>{const n=r.UID(r.vgT("name"),t),d=r.XPQ(r.hXT(r.OH4("checked","yes"),t));return{options:n,values:d}},p=s.Z.get({id:"USER_PACKAGES",url:"/CMD_MANAGE_USER_PACKAGES",params:{bytes:!0},pagination:!0,after:t=>t.toTable(t.mapArrayProps({bandwidth:t.convert.toAppLimit,quota:t.convert.toAppLimit}))}),x=s.Z.get({id:"USER_PACKAGE",url:"/CMD_SHOW_USER_PACKAGE",params:{bytes:!0},schema:{package:s.Z.OPTIONAL_STRING},mapResponse:{features:O,limits:a,homeOverride:y,language:i,skin:o,customItems:v,featureSets:m,cgroup:r.zGw(r.vgT("cgroup"),r.yAE({saved:{},options:{}}),t=>r.BPw(t.options||{},t.saved||{}),r.VO0),email_daily_limit:t=>{const n=t.email_daily_limit;return typeof n=="undefined"?!1:{disabled:n.disabled==="yes",unlimited:n.value==="unlimited",value:n.value==="unlimited"?"":n.value}},pluginRules:r.vgT("plugins")}}),k=s.Z.post({url:"/CMD_MANAGE_USER_PACKAGES",params:{add:!0},schema:{bandwidth:s.Z.OPTIONAL_STRING,ubandwidth:s.Z.OPTIONAL_BOOL,quota:s.Z.OPTIONAL_STRING,uquota:s.Z.OPTIONAL_BOOL,inode:s.Z.OPTIONAL_STRING,uinode:s.Z.OPTIONAL_BOOL,vdomains:s.Z.OPTIONAL_STRING,uvdomains:s.Z.OPTIONAL_BOOL,nsubdomains:s.Z.OPTIONAL_STRING,unsubdomains:s.Z.OPTIONAL_BOOL,nemails:s.Z.OPTIONAL_STRING,unemails:s.Z.OPTIONAL_BOOL,nemailf:s.Z.OPTIONAL_STRING,unemailf:s.Z.OPTIONAL_BOOL,nemailml:s.Z.OPTIONAL_STRING,unemailml:s.Z.OPTIONAL_BOOL,nemailr:s.Z.OPTIONAL_STRING,unemailr:s.Z.OPTIONAL_BOOL,mysql:s.Z.OPTIONAL_STRING,umysql:s.Z.OPTIONAL_BOOL,domainptr:s.Z.OPTIONAL_STRING,udomainptr:s.Z.OPTIONAL_BOOL,ftp:s.Z.OPTIONAL_STRING,uftp:s.Z.OPTIONAL_BOOL,aftp:s.Z.OPTIONAL_STRING,cgi:s.Z.OPTIONAL_STRING,git:s.Z.OPTIONAL_STRING,php:s.Z.OPTIONAL_STRING,spam:s.Z.OPTIONAL_STRING,catchall:s.Z.OPTIONAL_STRING,ssl:s.Z.OPTIONAL_STRING,ssh:s.Z.OPTIONAL_STRING,cron:s.Z.OPTIONAL_STRING,sysinfo:s.Z.OPTIONAL_STRING,login_keys:s.Z.OPTIONAL_STRING,dnscontrol:s.Z.OPTIONAL_STRING,suspend_at_limit:s.Z.OPTIONAL_STRING,language:s.Z.OPTIONAL_STRING,skin:s.Z.OPTIONAL_STRING,packagename:s.Z.OPTIONAL_STRING}}),P=s.Z.post({url:"/CMD_MANAGE_USER_PACKAGES",before:({select:t})=>t.reduce((n,d,g)=>({...n,[`delete${g}`]:d}),{delete:!0}),schema:{select:s.Z.ROWS}}),N=s.Z.post({url:"/CMD_MANAGE_USER_PACKAGES",schema:{select:s.Z.ROWS},params:{export:!0}}),c=s.Z.post({url:"/CMD_MANAGE_USER_PACKAGES",schema:{import:s.Z.REQUIRED_STRING},params:{action:"import"}}),e=s.Z.post({url:"/CMD_MANAGE_USER_PACKAGES",schema:{action:s.Z.REQUIRED_STRING,from:s.Z.REQUIRED_STRING,to:s.Z.REQUIRED_STRING},before:({from:t,to:n})=>({from:null,to:null,old_package:t,new_package:n})})},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/components/local/user-package.vue?vue&type=style&index=0&id=f27c063e&prod&lang=scss&":function(){},"./js/api/commands/converters/customItems.ts":function(S,_,l){"use strict";l.d(_,{CR:function(){return y}});var s=l("../node_modules/ramda/es/index.js"),r=l("./js/api/commands/converters/index.ts"),u=l("./js/api/commands/utils/transduce.ts"),v=l("./js/api/commands/converters/toSelectData.ts");const y=f=>{const a={name:f.name,type:f.type==="listbox"?"select":f.type,label:f.string,description:f.desc||"",value:f.type==="checkbox"?(0,r.sw)(f.checked||"no"):f.value||""};return a.type==="select"?s.BPw(a,(0,v.M1)(f.select||{})):a},O=f=>(0,u.vr)([(0,u.uD)(a=>/^item\d+val$/.test(a)),(0,u.r5)(a=>{const o=a,i=a.replace("val","txt"),m=f[o],p=f[i];return{[m]:p}})],Object.keys(f)),h=(f,a)=>s.qCK(i=>{const m={name:i.name,type:i.type==="listbox"?"select":i.type,description:i.desc||"",value:i.value||"",label:i.string};return i.type==="listbox"?(m.value=i.default,m.options=O(i)):i.type==="checkbox"&&(m.value=i.checked==="yes"),m},s.BPw({name:f}),(0,u.vr)([(0,u.r5)(i=>{const[m,p]=s.Vl2("=",i);return{[m]:p}})]),s.Vl2("&"))(a);_.ZP={fromObject:y,fromString:h}},"./js/api/commands/converters/index.ts":function(S,_,l){"use strict";l.d(_,{l$:function(){return o.ZP},t0:function(){return s.t0},S8:function(){return s.S8},ql:function(){return s.ql},sw:function(){return s.sw},Qu:function(){return s.Qu},He:function(){return s.He},M1:function(){return a.M1},sf:function(){return m},cc:function(){return f}});var s=l("./js/api/commands/converters/primitive.ts"),r=l("../node_modules/monet/dist/monet.js"),u=l("./js/api/commands/types.ts");const v=p=>typeof p=="object"?r.Either.Right(p):r.Either.Left(new Error("Passed param is not an object")),y=p=>typeof p.usage=="string"?r.Either.Right(p):r.Either.Left(new Error("usage property is required")),O=p=>({usage:(0,s.He)(p.usage),limit:(0,s.Qu)(p.limit)}),h=({usage:p,limit:x})=>{let k=u.H.Normal;const P=Math.floor(p/x*100);return P>=100?k=u.H.OverUsed:P>80&&(k=u.H.AlmostUsed),{usage:p,limit:x,status:k}},f=p=>{const x=r.Either.Right(p).flatMap(v).flatMap(y).map(O).map(h);if(x.isLeft())throw x.left();return x.right()};var a=l("./js/api/commands/converters/toSelectData.ts"),o=l("./js/api/commands/converters/customItems.ts"),i=l("../node_modules/ramda/es/index.js");const m=p=>x=>{const{info:k}=x,P=i.CEd(["info"],x);return{columns:k.columns,rowsCount:Number(k.rows),rows:i.UID(p,i.VO0(P))}}},"./js/api/commands/converters/toSelectData.ts":function(S,_,l){"use strict";l.d(_,{M1:function(){return h}});var s=l("../node_modules/monet/dist/monet.js"),r=l.n(s),u=l("./js/api/commands/utils/transduce.ts"),v=l("../node_modules/ramda/es/index.js");const y=f=>s.Maybe.Some(f).flatMap(a=>{const o=a.find(i=>i.selected==="yes");return o?s.Maybe.Some(o):s.Maybe.None()}).flatMap(a=>s.Maybe.fromNull(a.value)).orSome(""),O=(0,u.vr)([(0,u.r5)(f=>({[f.value]:f.text}))]),h=f=>{const a=(0,v.VO0)(f);return{value:y(a),options:O(a)}}},"./js/api/commands/types.ts":function(S,_,l){"use strict";l.d(_,{H:function(){return s}});var s;(function(r){r.Normal="normal",r.AlmostUsed="almost_used",r.OverUsed="overused"})(s||(s={}))},"./js/api/commands/utils/transduce.ts":function(S,_,l){"use strict";l.d(_,{Re:function(){return v},r5:function(){return r},uD:function(){return u},vr:function(){return a},zh:function(){return h}});var s=l("../node_modules/ramda/es/index.js");const r=o=>i=>(m,p)=>{const x=o(p);return i(m,x)},u=o=>i=>(m,p)=>o(p)?i(m,p):m,v=(o,i)=>(o.push(i),o),y=(o,i)=>s.BPw(o,i),O=(o,i,m,p)=>{const x=s.qCK(...m);return p.reduce(x(i),o)},h=s.WAo(O),f=h([],v),a=h({},y)},"./js/components/local/cgroups-editor.vue":function(S,_,l){"use strict";l.d(_,{Z:function(){return f}});var s=function(){var o=this,i=o._self._c;return o.enabled?i("app-page-section",{scopedSlots:o._u([{key:"section:title",fn:function(){return[i("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}]},[i("span",{domProps:{textContent:o._s(o.$gettext("Resource Limits"))}}),o._v(" "),o.$slots.tooltip||o.$scopedSlots.tooltip?i("ui-tooltip",{directives:[{name:"margin",rawName:"v-margin:left",value:.5,expression:"0.5",arg:"left"}]},[i("span",{domProps:{textContent:o._s(o.$gettext("Set maximum values reseller could set for his users."))}})]):o._e()],1)]},proxy:!0},{key:"default",fn:function(){return o._l(o.options,function(m){return i("ui-form-element",{key:m.name,scopedSlots:o._u([{key:"title",fn:function(){return[i("span",{domProps:{textContent:o._s(m.string)}})]},proxy:!0},{key:"tooltip",fn:function(){return[i("span",{domProps:{textContent:o._s(m.desc)}})]},proxy:!0},{key:"content",fn:function(){return[i("input-text",{attrs:{disabled:o.values[m.name].unlimited,placeholder:m.placeholder},on:{blur:function(p){return o.checkValue(m.name)}},scopedSlots:o._u([{key:"additions:right",fn:function(){return[i("input-checkbox-button",{attrs:{value:o.values[m.name].unlimited},on:{input:function(p){return o.setLimitState(m,p)}}},[i("span",{domProps:{textContent:o._s(o.$gettext("Unlimited"))}})])]},proxy:!0}],null,!0),model:{value:o.values[m.name].value,callback:function(p){o.$set(o.values[m.name],"value",p)},expression:"values[item.name].value"}})]},proxy:!0}],null,!0)})})},proxy:!0}],null,!1,4188802112)}):o._e()},r=[],u=l("../node_modules/ramda/es/index.js"),v={props:{options:{type:Array,required:!1,default:()=>[]}},data:()=>({values:{}}),computed:{enabled(){return this.options.length&&this.$_flags.server.cgroup},requestData(){return u.UID(a=>a.unlimited?"":a.value,this.values)}},watch:{requestData:{deep:!0,handler(a){this.$emit("update:cgroup-values",a)}}},created(){this.enabled&&this.options.forEach(a=>{const o=a.value||a.default,i=o==="";this.$set(this.values,a.name,{value:o,unlimited:i})})},methods:{setLimitState(a,o){this.values[a.name].unlimited=o,o===!1&&this.values[a.name].value===""&&(this.values[a.name].value=a.placeholder)},checkValue(a){this.values[a].value===""&&(this.values[a].unlimited=!0)}}},y=v,O=l("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),h=(0,O.Z)(y,s,r,!1,null,null,null),f=h.exports},"./js/components/local/user-package.vue":function(S,_,l){"use strict";l.d(_,{Z:function(){return N}});var s=function(){var e=this,t=e._self._c;return e.$api.isDone||e.initialData?t("div",{staticClass:"user-package"},[e._l(e.enabledLimits,function(n,d){return t("ui-form-element",{key:d,scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext(n))}})]},proxy:!0},{key:"content",fn:function(){return[t(["bandwidth","quota"].includes(d)?"input-size":"input-text",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}],tag:"component",attrs:{disabled:e.limits[d].unlimited||e.limits[d].disabled,number:""},on:{blur:function(g){return e.checkEmptyness(e.limits[d])}},scopedSlots:e._u([{key:"additions:right",fn:function(){return[t("ui-button",{attrs:{tabindex:"-1",disabled:e.limits[d].disabled},on:{click:function(g){e.limits[d].unlimited=!e.limits[d].unlimited}}},[t("input-checkbox",{attrs:{label:e.$gettext("Unlimited"),disabled:e.limits[d].disabled},model:{value:e.limits[d].unlimited,callback:function(g){e.$set(e.limits[d],"unlimited",g)},expression:"limits[key].unlimited"}})],1)]},proxy:!0}],null,!0),model:{value:e.limits[d].value,callback:function(g){e.$set(e.limits[d],"value",g)},expression:"limits[key].value"}})]},proxy:!0}],null,!0)})}),e._v(" "),e._l(e.enabledFeatures,function(n,d){return t("ui-form-element",{key:d,class:{dimmed:!e.features[d]},scopedSlots:e._u([{key:"title",fn:function(){return[e.clientStore.isPhone?e._e():t("span",{domProps:{textContent:e._s(n)}})]},proxy:!0},{key:"content",fn:function(){return[t("div",[t("input-checkbox",{model:{value:e.features[d],callback:function(g){e.$set(e.features,d,g)},expression:"features[key]"}},[e.clientStore.isPhone?[e._v(`
                        `+e._s(n)+`
                    `)]:e._e()],2)],1)]},proxy:!0}],null,!0)})}),e._v(" "),e.jailStatus!=="disabled"?t("ui-form-element",{scopedSlots:e._u([{key:"title",fn:function(){return[e.clientStore.isPhone?e._e():t("span",{domProps:{textContent:e._s(e.$gettext("Jailed"))}})]},proxy:!0},{key:"content",fn:function(){return[t("div",[e.jailStatus==="forced"?t("input-checkbox",{key:"forced",attrs:{disabled:"",model:""}},[e.clientStore.isPhone?t("span",{domProps:{textContent:e._s(e.$gettext("Jailed"))}}):e._e(),e._v(" "),t("ui-badge",{attrs:{theme:"primary"}},[t("span",{domProps:{textContent:e._s(e.$gettext("Forced"))}})])],1):t("input-checkbox",{key:"not-forced",model:{value:e.features.jail,callback:function(n){e.$set(e.features,"jail",n)},expression:"features.jail"}},[e.clientStore.isPhone?t("span",{domProps:{textContent:e._s(e.$gettext("Jailed"))}}):e._e()])],1)]},proxy:!0}],null,!1,2293542126)}):e._e(),e._v(" "),t("ui-form-element",{key:"skin",scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Skin"))}})]},proxy:!0},{key:"content",fn:function(){return[t("div",{directives:[{name:"flex",rawName:"v-flex"}]},[t("input-select",{attrs:{options:e.skinOptions},model:{value:e.skin,callback:function(n){e.skin=n},expression:"skin"}})],1)]},proxy:!0}],null,!1,724067237)}),e._v(" "),e.showLanguage?t("ui-form-element",{key:"show-language",scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Language"))}})]},proxy:!0},{key:"content",fn:function(){return[t("div",{directives:[{name:"flex",rawName:"v-flex"}]},[t("input-select",{attrs:{options:e.languageOptions},model:{value:e.language,callback:function(n){e.language=n},expression:"language"}})],1)]},proxy:!0}],null,!1,1311518984)}):e._e(),e._v(" "),e.canOverrideHome?t("ui-form-element",{key:"home-override",scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Home Directory"))}})]},proxy:!0},{key:"content",fn:function(){return[t("div",[t("input-select",{attrs:{options:e.homeOverride.options},model:{value:e.homeOverride.value,callback:function(n){e.$set(e.homeOverride,"value",n)},expression:"homeOverride.value"}})],1)]},proxy:!0}],null,!1,1883137892)}):e._e(),e._v(" "),e._l(e.customItems,function(n){return t("ui-form-element",{key:n.name,scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(n.label)}})]},proxy:!0},{key:"content",fn:function(){return[n.type==="checkbox"?t("input-checkbox",{model:{value:n.value,callback:function(d){e.$set(n,"value",d)},expression:"customItem.value"}},[e._v(`
                `+e._s(n.description)+`
            `)]):t(n.type==="text"?"input-text":"input-select",{tag:"component",attrs:{options:n.type==="select"?n.options:[]},scopedSlots:e._u([{key:"additions:right",fn:function(){return[n.description?t("ui-button",[e._v(`
                        `+e._s(n.description)+`
                    `)]):e._e()]},proxy:!0}],null,!0),model:{value:n.value,callback:function(d){e.$set(n,"value",d)},expression:"customItem.value"}})]},proxy:!0}],null,!0)})}),e._v(" "),e._t("default"),e._v(" "),t("app-page-section",{scopedSlots:e._u([{key:"section:title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Feature Sets"))}})]},proxy:!0}],null,!1,944918689)},[e._v(" "),t("ui-form-element",{scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Policy"))}})]},proxy:!0},{key:"content",fn:function(){return[t("div",[t("input-radio",{attrs:{value:"none"},model:{value:e.featureSets.policy,callback:function(n){e.$set(e.featureSets,"policy",n)},expression:"featureSets.policy"}},[t("span",{domProps:{textContent:e._s(e.$gettext("Allow All"))}})]),e._v(" "),t("input-radio",{attrs:{value:"select"},model:{value:e.featureSets.policy,callback:function(n){e.$set(e.featureSets,"policy",n)},expression:"featureSets.policy"}},[t("span",{domProps:{textContent:e._s(e.$gettext("Allow Selected"))}})])],1)]},proxy:!0}],null,!1,2161239313)}),e._v(" "),e.featureSets.policy!=="none"?t("ui-form-element",{scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Feature Set"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-select-multiple",{attrs:{options:e.featureSetOptions,"hide-header":""},scopedSlots:e._u([{key:"option:core_functions",fn:function(){return[t("ui-tooltip",{attrs:{theme:"primary"},scopedSlots:e._u([{key:"trigger",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Core Functions"))}}),e._v(" "),t("ui-icon",{attrs:{id:"question",theme:"neutral",size:"medium2"}})]},proxy:!0}],null,!1,1162947787)},[e._v(" "),t("span",{domProps:{textContent:e._s(e.$gettext("Core functions are needed for the skin to work. Disable it for API only."))}})])]},proxy:!0}],null,!1,1086937055),model:{value:e.featureSets.select,callback:function(n){e.$set(e.featureSets,"select",n)},expression:"featureSets.select"}})]},proxy:!0}],null,!1,1516423346)}):e._e()],1),e._v(" "),t("app-page-section",{scopedSlots:e._u([{key:"section:title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Plugins Allow/Deny"))}})]},proxy:!0}],null,!1,3854146942)},[e._v(" "),t("ui-form-element",{scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Policy"))}})]},proxy:!0},{key:"content",fn:function(){return[t("div",[t("input-radio",{attrs:{value:"none"},model:{value:e.plugins.policy,callback:function(n){e.$set(e.plugins,"policy",n)},expression:"plugins.policy"}},[t("span",{domProps:{textContent:e._s(e.$gettext("Allow All"))}})]),e._v(" "),t("input-radio",{attrs:{value:"deny"},model:{value:e.plugins.policy,callback:function(n){e.$set(e.plugins,"policy",n)},expression:"plugins.policy"}},[t("span",{domProps:{textContent:e._s(e.$gettext("Deny Selected"))}})]),e._v(" "),t("input-radio",{attrs:{value:"allow"},model:{value:e.plugins.policy,callback:function(n){e.$set(e.plugins,"policy",n)},expression:"plugins.policy"}},[t("span",{domProps:{textContent:e._s(e.$gettext("Allow Selected"))}})])],1)]},proxy:!0}],null,!1,466931957)}),e._v(" "),e.plugins.policy!=="none"?t("ui-form-element",{scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Select"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-select-multiple",{attrs:{options:e.pluginsList},model:{value:e.plugins[e.plugins.policy],callback:function(n){e.$set(e.plugins,e.plugins.policy,n)},expression:"plugins[plugins.policy]"}})]},proxy:!0}],null,!1,2780623909)}):e._e()],1),e._v(" "),e.cgroup!==null?t("cgroups-editor",{attrs:{options:e.cgroup},on:{"update:cgroup-values":function(n){e.cgroupValues=n}}}):e._e()],2):e._e()},r=[],u=l("./js/stores/index.ts"),v=l("./js/modules/utils/index.js"),y=l("./js/api/commands/reseller/users/packages/index.js"),O=l("../node_modules/ramda/es/index.js"),h=l("./js/components/local/cgroups-editor.vue"),f=l("./js/openapi/session.ts"),a=l("./js/composables/session.ts"),o=l("./js/composables/index.ts");const{$gettext:i}=(0,o.st)();var m={components:{CgroupsEditor:h.Z},api:[{command:y.xp,bind:{response:"package",isDone:"isDone"}}],props:{package:{type:String,required:!1,default:"newpackage"},initialData:{type:Object,required:!1,default:()=>null}},data(){return{features:{},limits:{},customItems:{},skin:"",language:"",homeOverride:{value:"",options:{}},featureSets:{policy:"none",select:["core_functions"]},plugins:{policy:"none",allow:[],deny:[]},cgroupValues:{},cgroup:null,resellerData:{}}},computed:{jailStatus(){const{session:c}=(0,a.kP)();switch(c.jail){default:return"disabled";case 1:return"enabled";case 2:return"forced"}},skinOptions(){return this.initialData?this.initialData.skin.options:this.$api.package.skin.options},languageOptions(){return this.initialData?{}:this.$api.package.language.options},showLanguage(){return!this.initialData},processedData(){const c=(d,g,A)=>({...d,[A]:["bandwidth","quota"].includes(A)?String(g.value/1048576):g.value,[`u${A}`]:!g.value||g.unlimited||null}),e=d=>d?"ON":null,t=(d,g)=>({...d,[g.name]:g.value===!0?"ON":g.value}),n={language:this.language,skin:this.skin,create_user_home_override:this.canOverrideHome?this.homeOverride.value:null,feature_sets:this.featureSets.policy==="none"?"":this.featureSets.select.join(":"),...v._.reduce(this.limits,c,{}),...v._.mapValues(this.features,e),...v._.reduce(this.customItems,t,{}),...this.pluginsRuleData,...this.cgroupValues,uemail_daily_limit:this.limits.email_daily_limit&&this.limits.email_daily_limit.unlimited||null};return this.jailStatus==="disabled"&&(n.jail=null),n},canOverrideHome(){return this.homeOverride&&!!Object.keys(this.homeOverride.options).length},enabledFeatures(){return O.D95((c,e)=>c&&typeof this.features[e]!="undefined"&&this.checkFeatureEnabled(e),this.featureLabels)},enabledLimits(){return O.D95((c,e)=>c&&this.limits[e],this.limitLabels)},featureSetOptions(){const c={core_functions:this.$gettext("Core Functions"),dns_only:this.$gettext("DNS Only"),email_only:this.$gettext("E-mail Only")},e=this.initialData||this.$api.package;return Object.keys(e.featureSets.options).reduce((t,n)=>({...t,[n]:c[n]||n}),{})},pluginsList(){return(this.initialData||this.$api.package).pluginRules.all_plugins},pluginsRuleData(){return{plugins_allow:this.plugins.policy==="allow"?this.plugins.allow.join(":"):"[clear]",plugins_deny:this.plugins.policy==="deny"?this.plugins.deny.join(":"):"[clear]"}},...(0,u.Kc)(["client"])},watch:{processedData(c){this.$emit("update",c)}},async created(){this.limitLabels={bandwidth:this.$gettext("Bandwidth (MB)"),quota:this.$gettext("Disk Space (MB)"),inode:this.$_flags.server.inode?this.$gettext("Inode"):void 0,vdomains:this.$gettext("Domains"),nsubdomains:this.$gettext("Sub-Domains"),nemails:this.$gettext("E-mail Accounts"),nemailf:this.$gettext("E-mail Forwarders"),nemailml:this.$gettext("Mailing Lists"),nemailr:this.$gettext("Autoresponders"),mysql:this.$gettext("MySQL Databases"),domainptr:this.$gettext("Domain Pointers"),ftp:this.$gettext("FTP Accounts"),email_daily_limit:this.$gettext("E-mail Daily Limit")},this.featureLabels={aftp:this.$gettext("Anonymous FTP Accounts"),cgi:this.$gettext("CGI Access"),git:this.$gettext("Git"),wordpress:this.$gettext("Wordpress"),clamav:this.$gettext("ClamAV"),nginx_unit:this.$gettext("Nginx Unit"),php:this.$gettext("PHP Access"),spam:this.$gettext("SpamAssassin"),catchall:this.$gettext("Catch-All E-mail"),ssl:this.$gettext("SSL Access"),ssh:this.$gettext("SSH Access"),cron:this.$gettext("Cron Jobs"),redis:this.$gettext("Redis"),sysinfo:this.$gettext("System Info"),login_keys:this.$gettext("Login Keys"),dnscontrol:this.$gettext("DNS Control"),suspend_at_limit:this.$gettext("Suspend at Limit")};const{data:c,error:e}=await(0,f.RF)();if(!c||e){(0,o.d$)().error({title:i("User Packages"),content:i("Could not load user package")}),this.$router.back();return}this.resellerData=c;const t=c;t.redis===!1&&delete this.featureLabels.redis,t.git===!1&&delete this.featureLabels.git,t.wordpress===!1&&delete this.featureLabels.wordpress,t.clamav===!1&&delete this.featureLabels.clamav,t.unit===!1&&delete this.featureLabels.nginx_unit,this.loadPackage()},methods:{checkEmptyness(c){c.value||(c.unlimited=!0)},async loadPackage(){const c=this.initialData||await(0,y.xp)({package:this.package||null});this.cgroup=c.cgroup,this.limits=v._.cloneDeep(c.limits),c.email_daily_limit&&this.$set(this.limits,"email_daily_limit",{...c.email_daily_limit,disabled:!1}),this.features=v._.cloneDeep(c.features),this.customItems=v._.cloneDeep(c.customItems),this.skin=c.skin.value,this.showLanguage&&(this.language=c.language.value),this.homeOverride=v._.cloneDeep(c.homeOverride),this.package===null&&(this.limits.bandwidth.value*=2**20,this.limits.quota.value*=2**20),c.featureSets.values.length&&(this.featureSets.policy="select",this.featureSets.select=c.featureSets.values);const e=c.pluginRules;this.plugins.allow=e.plugins_allow||[],this.plugins.deny=e.plugins_deny||[],typeof e.plugins_allow!="undefined"?this.plugins.policy="allow":typeof e.plugins_deny!="undefined"?this.plugins.policy="deny":this.plugins.policy="none"},checkFeatureEnabled(c){const e=n=>()=>this.resellerData[n],t={ssl:e("ssl"),catchall:e("catchAll"),cgi:e("cgi"),git:e("git"),wordpress:e("wordpress"),clamav:e("clamav"),nginx_unit:e("nginxUnit"),cron:e("cron"),aftp:e("aftp"),dnscontrol:e("dnsControl"),login_keys:e("loginKeys"),php:e("php"),spam:e("spam"),sysinfo:e("sysInfo"),ssh:e("userSsh")}[c];return t?t():!0}}},p=m,x=l("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/components/local/user-package.vue?vue&type=style&index=0&id=f27c063e&prod&lang=scss&"),k=l("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),P=(0,k.Z)(p,s,r,!1,null,null,null),N=P.exports},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/components/local/user-package.vue?vue&type=style&index=0&id=f27c063e&prod&lang=scss&":function(S,_,l){var s=l("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/components/local/user-package.vue?vue&type=style&index=0&id=f27c063e&prod&lang=scss&");s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[S.id,s,""]]),s.locals&&(S.exports=s.locals);var r=l("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,u=r("14e39408",s,!0,{})}}]);
