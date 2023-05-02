(self.webpackChunk=self.webpackChunk||[]).push([[4327],{"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/login-keys/_components/command-box.vue?vue&type=style&index=0&id=da28a64c&prod&lang=scss&":function(){},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/login-keys/modify.vue?vue&type=style&index=0&id=8a7d98bc&prod&lang=scss&scoped=true&":function(){},"./js/pages/user/login-keys/_components/command-box.vue":function(x,j,a){"use strict";a.d(j,{Z:function(){return N}});var r=function(){var e=this,s=e._self._c,p=e._self._setupProxy;return s("div",{staticClass:"CommandBox"},[s("table",{staticClass:"table-elem --horizontal"},[s("thead",{},[s("tr",{staticClass:"table-row"},[s("th",{attrs:{width:"auto"}},[s("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"row",main:"between",cross:"center"},expression:`{
                            dir: 'row',
                            main: 'between',
                            cross: 'center',
                        }`}]},[s("span",{domProps:{textContent:e._s(e.$gettext("Command"))}}),e._v(" "),s("input-text",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!1},expression:"{ grow: false }"}],attrs:{placeholder:e.$gettext("Search")},model:{value:p.search,callback:function(u){p.search=u},expression:"search"}})],1)]),e._v(" "),s("th",{staticClass:"--min-content",attrs:{width:"auto"}},[s("input-checkbox",{attrs:{model:p.isAllAllowed,label:e.$gettext("Allow")},on:{change:p.toggleAllowAll}})],1),e._v(" "),s("th",{staticClass:"--min-content",attrs:{width:"auto"}},[s("input-checkbox",{attrs:{model:p.isAllDenied,label:e.$gettext("Deny")},on:{change:p.toggleDenyAll}})],1)])]),e._v(" "),s("tbody",e._l(p.tableRows,function(u){return s("tr",{directives:[{name:"show",rawName:"v-show",value:u.isVisible,expression:"row.isVisible"}],key:u.command},[s("td",[s("div",{staticClass:"command-description"},[s("span",{staticClass:"command-name",domProps:{textContent:e._s(u.command)}}),e._v(" "),u.hint?s("span",{staticClass:"command-hint",domProps:{textContent:e._s(u.hint)}}):e._e()])]),e._v(" "),s("td",[s("input-checkbox",{staticClass:"CommandBox__Checkbox",attrs:{model:u.isAllowed},on:{change:function(b){return p.toggleAllow(u)}}})],1),e._v(" "),s("td",[s("input-checkbox",{staticClass:"CommandBox__Checkbox",attrs:{model:u.isDenied},on:{change:function(b){return p.toggleDeny(u)}}})],1)])}),0),e._v(" "),p.filteredCommands.length===0?s("tbody",[s("tr",[s("td",{staticClass:"NoResults",attrs:{colspan:"3"}},[s("span",{domProps:{textContent:e._s(e.$gettext("No commands matching this filter..."))}})])])]):e._e()])])},_=[],m=a("../node_modules/vue/dist/vue.common.prod.js"),i=a("../node_modules/ramda/es/index.js"),k=a("./js/composables/gettext.ts");const h=()=>{const w=(0,m.computed)(()=>{const{$pgettext:e}=(0,k.Z)();return{ALL_ADMIN:e("cmd-description","All admin commands"),ALL_RESELLER:e("cmd-description","All reseller commands"),ALL_USER:e("cmd-description","All user commands"),license:e("cmd-description","View licensing information"),version:e("cmd-description","Check DirectAdmin version, change update channel, trigger DA update"),restart:e("cmd-description","Restart DirectAdmin service"),"skin-customization":e("cmd-description","Make Evolution customizations"),"skin-global-options":e("cmd-description","Make login page (global) Evolution customizations"),"convert-reseller-to-user":e("cmd-description","Tool for converting reseller account to user account, used by the reseller_to_user.sh script"),"convert-user-to-reseller":e("cmd-description","Tool for converting user account to reseller account, used by the user_to_reseller.sh script"),"email-log":e("cmd-description","E-Mail Tracking reports"),"email-logs-summary":e("cmd-description","E-Mail Summary reports"),"email-config":e("cmd-description","Downloading email account configuration for Apple devices (iOS/MacOS)"),emailvacation:e("cmd-description","Manage email vacation messages"),execute:e("cmd-description","Execute arbitrary commands on behalf of the user, API only"),clamav:e("cmd-description","Start on-demand ClamAV scans of user owned directories"),maintenance:e("cmd-description","Check and run admin maintenance tasks"),git:e("cmd-description","Create and manage user owned git repositories"),imapsync:e("cmd-description","Sync local and external mailboxes over IMAP"),redis:e("cmd-description","Start/stop user owned Redis instance, replacement for CMD_REDIS command"),"cpanel-import":e("cmd-description","Import user accounts from remote cPanel server over SSH"),"system-info":e("cmd-description","View general system and system services information"),terminal:e("cmd-description","Start web terminal with user shell"),custombuild:e("cmd-description","Install, update, remove and reconfigure software managed by CustomBuild"),wordpress:e("cmd-description","Manage WordPress installations"),"login-keys":e("cmd-description","Create and manage user login keys, replacement for CMD_LOGIN_KEYS")}});return e=>{var s;return(s=w.value[e])!==null&&s!==void 0?s:""}};var A=(0,m.defineComponent)({__name:"command-box",props:{commands:null,allow:null,deny:null},emits:["update:allow","update:deny"],setup(w,{emit:e}){const s=w,p=(0,m.ref)(""),u=(0,m.computed)(()=>s.commands.filter(l=>l.toLowerCase().includes(p.value.toLowerCase()))),b=l=>i.q9t(l,s.allow),S=l=>i.q9t(l,s.deny),D=h(),g=(0,m.computed)(()=>i.UID(l=>({command:l,isAllowed:b(l),isDenied:S(l),isVisible:u.value.includes(l),hint:D(l)}),s.commands)),t=l=>{l.isDenied&&e("update:deny",i.zud([l.command],s.deny)),e("update:allow",l.isAllowed?i.zud([l.command],s.allow):i.jj$([l.command,...s.allow]))},n=l=>{l.isAllowed&&e("update:allow",i.zud([l.command],s.allow)),e("update:deny",l.isDenied?i.zud([l.command],s.deny):i.jj$([l.command,...s.deny]))},o=(0,m.computed)(()=>g.value.every(l=>l.isAllowed)),d=(0,m.computed)(()=>g.value.every(l=>l.isDenied));return{__sfc:!0,props:s,emit:e,search:p,filteredCommands:u,isAllowed:b,isDenied:S,getCommandHint:D,tableRows:g,toggleAllow:t,toggleDeny:n,isAllAllowed:o,isAllDenied:d,toggleAllowAll:l=>{if(l){const C=i.jj$([...s.allow,...u.value]);e("update:allow",C),e("update:deny",i.zud(u.value,s.deny))}else e("update:allow",i.zud(u.value,s.allow))},toggleDenyAll:l=>{l?(e("update:deny",i.jj$([...s.deny,...u.value])),e("update:allow",i.zud(u.value,s.allow))):e("update:deny",i.zud(u.value,s.deny))}}}}),$=A,E=a("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/login-keys/_components/command-box.vue?vue&type=style&index=0&id=da28a64c&prod&lang=scss&"),y=a("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),R=(0,y.Z)($,r,_,!1,null,null,null),N=R.exports},"./js/pages/user/login-keys/modify.vue":function(x,j,a){"use strict";a.r(j),a.d(j,{default:function(){return D}});var r=function(){var t=this,n=t._self._c,o=t._self._setupProxy;return n("app-page",{scopedSlots:t._u([{key:"default",fn:function(){return[o.requestData?n("app-page-section",[n("ui-form-element",{attrs:{validators:{required:!1,minLength:3,maxLength:256},group:"modifyKey"},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{domProps:{textContent:t._s(o.$gettext("Key Value:"))}})]},proxy:!0},{key:"content",fn:function(){return[n("input-password",{attrs:{"external-generator":o.randKey,type:"text"},model:{value:o.requestData.password,callback:function(d){t.$set(o.requestData,"password",d)},expression:"requestData.password"}})]},proxy:!0}],null,!1,4117457319)}),t._v(" "),n("ui-form-element",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{domProps:{textContent:t._s(o.$gettext("Expires On"))}})]},proxy:!0},{key:"tooltip",fn:function(){return[n("p",[n("span",{staticClass:"disp:block",domProps:{textContent:t._s(o.$gettext("If unchecked key never expires."))}})])]},proxy:!0},{key:"content",fn:function(){return[n("div",[n("div",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}]},[n("input-checkbox",{model:{value:o.requestData.hasExpiry,callback:function(d){t.$set(o.requestData,"hasExpiry",d)},expression:"requestData.hasExpiry"}},[n("span",{domProps:{textContent:t._s(o.$gettext("Has expiry date"))}})])],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[o.requestData.hasExpiry?n("div",{directives:[{name:"gutter",rawName:"v-gutter",value:1,expression:"1"},{name:"flex",rawName:"v-flex",value:o.client.isPhone?{dir:"column",cross:"start"}:{dir:"row",cross:"center"},expression:`
                                    client.isPhone
                                        ? { dir: 'column', cross: 'start' }
                                        : { dir: 'row', cross: 'center' }
                                `}]},[n("input-datetime",{model:{value:o.expiryDate,callback:function(d){o.expiryDate=d},expression:"expiryDate"}})],1):t._e()])],1)]},proxy:!0}],null,!1,1656122516)}),t._v(" "),n("ui-form-element",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{domProps:{textContent:t._s(o.$gettext("Clear Key:"))}})]},proxy:!0},{key:"content",fn:function(){return[n("input-check",{model:{value:o.requestData.autoRemove,callback:function(d){t.$set(o.requestData,"autoRemove",d)},expression:"requestData.autoRemove"}},[n("span",{domProps:{textContent:t._s(o.$gettext("Automatically delete the key once the key expires."))}})])]},proxy:!0}],null,!1,1799233759)}),t._v(" "),n("ui-form-element",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{domProps:{textContent:t._s(o.$gettext("Allow Login:"))}})]},proxy:!0},{key:"content",fn:function(){return[n("input-check",{model:{value:o.requestData.allowLogin,callback:function(d){t.$set(o.requestData,"allowLogin",d)},expression:"requestData.allowLogin"}},[n("span",{domProps:{textContent:t._s(o.$gettext("Allow using key to log into DirectAdmin web interface, when not enabled login key can only be used for API access."))}})])]},proxy:!0}],null,!1,4225672284)}),t._v(" "),n("ui-form-element",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{domProps:{textContent:t._s(o.$gettext("Commands:"))}})]},proxy:!0},{key:"content",fn:function(){return[n(o.CommandBox,{attrs:{commands:o.availableCommands,allow:o.requestData.allowCommands,deny:o.requestData.denyCommands},on:{"update:allow":function(d){o.requestData.allowCommands=d},"update:deny":function(d){o.requestData.denyCommands=d}}})]},proxy:!0}],null,!1,2265983787)}),t._v(" "),n("ui-form-element",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{domProps:{textContent:t._s(o.$gettext("Allowed IPs:"))}})]},proxy:!0},{key:"tooltip",fn:function(){return[n("p",[n("span",{staticClass:"disp:block",domProps:{textContent:t._s(o.$gettext("IP's in CIDR format."))}}),t._v(" "),n("span",{staticClass:"disp:block",domProps:{textContent:t._s(o.$gettext("IP without CIDR prefix will be automatically assigned with 32 IPV4 and 128 IPV6 CIDR prefix."))}})])]},proxy:!0},{key:"content",fn:function(){return[n("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}]},t._l(o.ips,function(d,P){return n(o.InputCidr,{directives:[{name:"margin",rawName:"v-margin",value:["5px",0],expression:"['5px', 0]"}],key:`ip-${P}`,attrs:{netmask:d.netmask,version:d.version,"convert-cidr-to-netmask":!1},on:{"update:netmask":function(f){d.netmask=f},"update:version":function(f){d.version=f}},model:{value:d.value,callback:function(f){t.$set(d,"value",f)},expression:"ip.value"}})}),1)]},proxy:!0}],null,!1,982633425)}),t._v(" "),n("ui-form-element",{attrs:{validators:{required:!0},group:"modifyKey"},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{domProps:{textContent:t._s(o.$gettext("Current Password:"))}})]},proxy:!0},{key:"content",fn:function(){return[n("input-password",{model:{value:o.requestData.currentPassword,callback:function(d){t.$set(o.requestData,"currentPassword",d)},expression:"requestData.currentPassword"}})]},proxy:!0}],null,!1,1800920560)})],1):t._e()]},proxy:!0},{key:"footer:buttons",fn:function(){return[n("ui-button",{attrs:{theme:"safe","validate-group":"modifyKey",disabled:!o.isNetworksValid},on:{click:o.modifyKey}},[n("span",{domProps:{textContent:t._s(o.$gettext("Modify Key"))}})])]},proxy:!0}])})},_=[],m=a("../node_modules/vue/dist/vue.common.prod.js"),i=a("../node_modules/ramda/es/index.js"),k=a("./js/openapi/formats.types.ts"),h=a("./js/composables/index.ts"),A=a("./js/pages/user/login-keys/_components/command-box.vue"),$=a("../node_modules/vue-router/composables.mjs"),E=a("./js/components/local/input-cidr.vue"),y=a("./js/pages/user/login-keys/requests.ts"),R=a("./js/pages/user/login-keys/utils.login-keys.ts"),N=a("../node_modules/date-fns/esm/addMonths/index.js"),w=a("./js/stores/index.ts");const e=(0,m.defineComponent)({name:"LoginKeyModify",async beforeRouteEnter(g,t,n){const o=await(0,y.tq)(g.params.keyname);if(y.CN.value||await(0,y.Ju)(),y.CN.value&&o&&!o.readOnly)return n();n(!1)}});var s=(0,m.defineComponent)({...e,props:{keyname:null},emits:[],setup(g){var t;const n=g,{$gettext:o}=(0,h.st)(),d=(0,$.tv)(),P=(0,w.oR)("client"),f=(0,m.ref)((0,N.Z)(new Date,1)),l=(0,m.ref)([]),{ips:C,allowedNetworks:I,isValid:V}=(0,R.KC)(),c=(0,m.ref)({allowCommands:[],allowLogin:!1,allowNetworks:[],autoRemove:!1,currentPassword:"",denyCommands:[],expires:(0,k.j)(f.value),hasExpiry:!0,password:""}),M=(v,z)=>{c.value.allowLogin=v.allowLogin,c.value.autoRemove=v.autoRemove,c.value.hasExpiry=v.hasExpiry,c.value.allowCommands=v.allowCommands,c.value.denyCommands=v.denyCommands,l.value=z,v.expires&&(f.value=new Date(v.expires)),C.value=[{value:"",netmask:"",version:"v4"}],v.allowNetworks.length&&(C.value=i.UID(L=>{const[K,q]=L.split("/");return{value:K,netmask:q,version:K.includes(":")?"v6":"v4"}},v.allowNetworks))},Z=async()=>{if(!c.value)return;const v={currentPassword:c.value.currentPassword,allowLogin:c.value.allowLogin,allowCommands:c.value.allowCommands,denyCommands:c.value.denyCommands,autoRemove:c.value.autoRemove,hasExpiry:c.value.hasExpiry,expires:(0,k.j)(f.value),allowNetworks:I.value};if(c.value.password&&(v.password=c.value.password),await(0,y.a9)(n.keyname,v)){const L=o("Login key modified. Take note of it and keep it safe.");(0,h.d$)().success({extended:!0,title:o("Login Keys"),content:`${L}
<strong>${c.value.password}</strong>`}),d.back()}};return y.AD.value&&M(y.AD.value,((t=y.CN.value)===null||t===void 0?void 0:t.commands)||[]),{__sfc:!0,$gettext:o,router:d,client:P,props:n,expiryDate:f,availableCommands:l,ips:C,allowedNetworks:I,isNetworksValid:V,requestData:c,setupKey:M,modifyKey:Z,CommandBox:A.Z,InputCidr:E.Z,randKey:R.Ql}}}),p=s,u=a("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/login-keys/modify.vue?vue&type=style&index=0&id=8a7d98bc&prod&lang=scss&scoped=true&"),b=a("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),S=(0,b.Z)(p,r,_,!1,null,"8a7d98bc",null),D=S.exports},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/login-keys/_components/command-box.vue?vue&type=style&index=0&id=da28a64c&prod&lang=scss&":function(x,j,a){var r=a("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/login-keys/_components/command-box.vue?vue&type=style&index=0&id=da28a64c&prod&lang=scss&");r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[x.id,r,""]]),r.locals&&(x.exports=r.locals);var _=a("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,m=_("7fbd27aa",r,!0,{})},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/login-keys/modify.vue?vue&type=style&index=0&id=8a7d98bc&prod&lang=scss&scoped=true&":function(x,j,a){var r=a("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/login-keys/modify.vue?vue&type=style&index=0&id=8a7d98bc&prod&lang=scss&scoped=true&");r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[x.id,r,""]]),r.locals&&(x.exports=r.locals);var _=a("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,m=_("22d0ad9a",r,!0,{})}}]);
