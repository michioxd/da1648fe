(self.webpackChunk=self.webpackChunk||[]).push([[9,8952],{"./js/api/commands/reseller/backup.js":function(h,d,n){"use strict";n.d(d,{Fi:function(){return e},Gw:function(){return j},Q0:function(){return S},VP:function(){return v},dO:function(){return y},dh:function(){return _},fz:function(){return g},hd:function(){return f},ld:function(){return c},o7:function(){return l},pZ:function(){return I},pi:function(){return o},v6:function(){return u}});var t=n("./js/api/command/index.js");const i="/CMD_USER_BACKUP",c=t.Z.get({id:"USER_BACKUPS",url:i,after:s=>s.flow(r=>({rows:r.crons,location:r.files_location}),s.processTableInfo("rows"),s.mapProps({rows:s.flow(s.toArray,s.mapArrayProps({where:s.flow(s.moveProp("encryption_password","encrypted"),s.mapProps({encrypted:s.flow(s.setDefault("0"),s.isEqual("1")),path:r=>r.replace("<span class='green_lock'>&#128274;</span>","").trim()}))}))}))}),a=t.Z.get({id:"HAS_USER_BACKUPS",url:i,response:!1,mapResponse:s=>s.crons.length!==0}),u=t.Z.get({id:"BACKUP_ENCRYPTION_STATUS",url:i,after:s=>s.flow(s.project({enabled:"settings.allow_backup_encryption",password:"settings.encryption_password"}),s.mapProp("enabled",s.convert.toAppBoolean))}),f=t.Z.select({url:i,params:{duplicate:!0}}),_=t.Z.select({url:i,params:{delete:!0}}),v=t.Z.post({url:i,params:{action:"setting"},schema:{message:t.Z.REQUIRED_BOOL,local_ns:t.Z.REQUIRED_BOOL,restore_spf:t.Z.REQUIRED_BOOL}}),j=t.Z.get({id:"USER_BACKUP_SETTINGS",url:i,after:s=>s.flow(s.project({local_ns:"settings.local_ns",message:"settings.message",restore_spf:"settings.restore_spf"}),s.mapValues(s.convert.toAppBoolean))}),y=t.Z.get({id:"USER_BACKUP_SCHEDULE_OPTIONS",url:i,after:s=>s.flow(s.project({settings:"settings","settings.append":"append_to_path",where:"where",users:"users",location:"files_location"}),s.mapProps({users:s.flow(s.deleteProp("info"),s.toArray,s.mapArray(s.getProp("user"))),settings:s.flow(s.project({ip:"ftp_ip",password:"ftp_password",path:"ftp_path",port:"ftp_port",secure:"ftp_secure",username:"ftp_username",append:"append"}),s.mapProps({secure:s.convert.toAppBoolean,append:r=>{const p=Object.values(r),m=p.find(x=>x.selected),P=(x,R)=>({...x,[R.value]:R.text}),O=p.reduce(P,{});return{value:m.value,options:O}}}))}))}),I=t.Z.get({id:"USER_BACKUP_RESTORE_OPTIONS",url:i,after:s=>s.flow(s.project({settings:"settings",where:"where",location:"files_location",ips:"ip_list",files:"files"}),s.mapProps({files:s.flow(s.deleteProp("info"),s.toArray),settings:s.flow(s.getProps(["ftp_ip","ftp_password","ftp_path","ftp_port","ftp_secure","ftp_username"]),s.mapProps({ftp_secure:s.convert.toAppBoolean})),ips:r=>{const p=Object.values(r),m=p.find(x=>x.selected),P=(x,R)=>({...x,[R.value]:R.text}),O=p.reduce(P,{});return{value:m.value,options:O}}}))}),g=t.Z.post({url:i,params:{action:"create",form_version:"3"},schema:{who:t.Z.REQUIRED_STRING,select:{type:Array,required:!1},skip_suspended:t.Z.OPTIONAL_BOOL,when:t.Z.REQUIRED_STRING,minute:t.Z.OPTIONAL_STRING,hour:t.Z.OPTIONAL_STRING,dayofmonth:t.Z.OPTIONAL_STRING,month:t.Z.OPTIONAL_STRING,dayofweek:t.Z.OPTIONAL_STRING,where:t.Z.REQUIRED_STRING,ftp_ip:t.Z.OPTIONAL_STRING,ftp_username:t.Z.OPTIONAL_STRING,ftp_password:t.Z.OPTIONAL_STRING,ftp_path:t.Z.OPTIONAL_STRING,ftp_port:t.Z.OPTIONAL_STRING,ftp_secure:t.Z.OPTIONAL_STRING,append_to_path:t.Z.OPTIONAL_STRING,custom_append:t.Z.OPTIONAL_STRING,encryption_password:t.Z.OPTIONAL_STRING}}),e=t.Z.get({url:i,id:"USER_BACKUP_RESTORE_FILES",params:{action:"update_files"},schema:{where:t.Z.REQUIRED_STRING,ftp_ip:t.Z.OPTIONAL_STRING,ftp_username:t.Z.OPTIONAL_STRING,ftp_password:t.Z.OPTIONAL_STRING,ftp_path:t.Z.OPTIONAL_STRING,ftp_port:t.Z.OPTIONAL_STRING,ftp_secure:t.Z.OPTIONAL_STRING},after:s=>s.flow(s.getProp("files"),s.deleteProp("info"),s.toArray)}),o=t.Z.post({url:i,params:{action:"restore"},schema:{where:t.Z.REQUIRED_STRING,ftp_ip:t.Z.OPTIONAL_STRING,ftp_username:t.Z.OPTIONAL_STRING,ftp_password:t.Z.OPTIONAL_STRING,ftp_path:t.Z.OPTIONAL_STRING,ftp_port:t.Z.OPTIONAL_STRING,ftp_secure:t.Z.OPTIONAL_STRING,ip_choice:t.Z.REQUIRED_STRING,ip:t.Z.OPTIONAL_STRING,select:{type:Array,required:!0},encryption_password:t.Z.OPTIONAL_STRING}}),l=t.Z.post({url:"/CMD_USER_BACKUP_MODIFY",id:"USER_BACKUP_CRON",schema:{id:t.Z.REQUIRED_STRING},notifySuccess:!1,notifyError:!0,after:s=>s.flow(s.moveProp({append_to_path:"append","settings.where":"where"}),s.mapProps({settings:s.mapProp("ftp_secure",s.convert.toAppBoolean),who:s.mapProps({skip_suspended:s.convert.toAppBoolean,users:s.flow(s.deleteProp("info"),s.toArray,s.mapArray(s.getProp("user"))),select:s.feedWith(1,s.flow(s.getProp("users"),s.deleteProp("info"),s.filter(s.flow(s.getProp("checkbox"),s.isEqual("checked"))),s.mapValues(s.getProp("user")),s.toArray))}),append:s.flow(s.mapProps({options:s.feedWith(1,s.transformObject(({value:r,text:p})=>({[r]:p}))),value:s.feedWith(1,s.flow(s.find(s.getProp("selected")),s.getProp("value")))}),s.getProps(["value","options"])),custom_append:s.feedWith(1,s.getProp("append.custom_append"))}))}),S=t.Z.post({url:i,params:{action:"modify",when:"cron",form_version:"3"},schema:{id:t.Z.REQUIRED_STRING,who:t.Z.REQUIRED_STRING,select:{type:Array,required:!1},skip_suspended:t.Z.OPTIONAL_BOOL,minute:t.Z.REQUIRED_STRING,hour:t.Z.REQUIRED_STRING,dayofmonth:t.Z.REQUIRED_STRING,month:t.Z.REQUIRED_STRING,dayofweek:t.Z.REQUIRED_STRING,where:t.Z.REQUIRED_STRING,ftp_ip:t.Z.OPTIONAL_STRING,ftp_username:t.Z.OPTIONAL_STRING,ftp_password:t.Z.OPTIONAL_STRING,ftp_path:t.Z.OPTIONAL_STRING,ftp_port:t.Z.OPTIONAL_STRING,ftp_secure:t.Z.OPTIONAL_STRING,append_to_path:t.Z.REQUIRED_STRING,custom_append:t.Z.OPTIONAL_STRING}})},"./js/vue-globals/mixins.js":function(h,d,n){"use strict";n.r(d),n.d(d,{$bindTab:function(){return s},$clickOutside:function(){return e},$resizeListener:function(){return S},$scrollListener:function(){return o}});var t=n("../node_modules/vue/dist/vue.common.prod.js"),i=n.n(t),c=n("../node_modules/ramda/es/index.js"),a=n("./js/modules/file.js"),u=n("./js/modules/utils/index.js"),f=n("./js/modules/constants.js"),_=n("./js/modules/utils/css.js"),v=n("../node_modules/punycode/punycode.es6.js"),j=n("./js/vue-globals/helpers.js"),y=n("./js/stores/index.ts");const I=n("./js/vue-globals/mixins sync recursive \\.js$");(0,a.s)(I,r=>i().mixin(r.module)),i().mixin({data:()=>({isMounted:!1}),mounted(){this.isMounted=!0}}),i().mixin({methods:{$dialog(r){return{open:()=>j.uY.emit("dialog:open",r),close:()=>j.uY.emit("dialog:close",r)}}}}),i().mixin({computed:{$domain(){return this.$_ctx.session.domain},$domainUnicode(){return v.ZP.toUnicode(this.$domain)}}}),i().mixin({beforeCreate(){const r=(0,y.oR)(PiniaStores.VALIDATION);this.$valid=r.isValid.bind(r)}}),i().mixin({created(){this.regexps=f.gk}}),i().mixin({computed:{$p6e(){const r=p=>m=>{try{return p(m)}catch(P){return m}};return{toA:r(v.ZP.toASCII),toU:r(v.ZP.toUnicode),email2ascii:p=>{if(!p||!p.includes("@"))return p;const[m,P]=p.split("@");return[m,v.ZP.toASCII(P)].join("@")},email2unicode:p=>{if(!p||!p.includes("@"))return p;const[m,P]=p.split("@");return[m,v.ZP.toUnicode(P)].join("@")}}}}}),i().mixin({computed:{$_layout:(0,j.YM)("skin/layout")}}),i().mixin({methods:{$_useStore(r){return(0,y.oR)(r)}}});const g=[];document.body.addEventListener("click",r=>{g.forEach(p=>p(r.target))}),window.addEventListener("touchmove",r=>{g.forEach(p=>p(r.target))});const e={methods:{$clickOutsideListener(r,p){const m=O=>c.zGw(c.Bxt(p),c.qhW(Array.isArray,x=>[x]),c.hXT(c.CyQ(c.kKJ)),c.YPD(x=>x===O||x.contains(O)))(),P=O=>{m(O)&&this.$emit(`clickOutside:${r}`)};g.push(P)}}},o={methods:{__getScroller(){return this.$_layout==="sidebar"?window.document.querySelector("main"):window},__emitScroll(){this.$emit("window:scroll",window.pageYOffset)}},mounted(){const r=this.__getScroller();r&&r.addEventListener("scroll",this.__emitScroll)},destroyed(){const r=this.__getScroller();r&&r.removeEventListener("scroll",this.__emitScroll)}},l=[];window.addEventListener("resize",()=>{l.forEach(r=>r())});const S={created(){this.$resizeListener=()=>{this.$emit("window:resize",window.innerWidth)},l.push(this.$resizeListener)},destroyed(){l.splice(l.indexOf(this.$resizeListener),1)}},s=({param:r="tab",defaultTab:p}={param:"tab"})=>({computed:{[r]:{get(){return this.$route.params[r]||p},set(m){this.$route.params[r]!==m&&this.$router.replace(u._.merge({},this.$route,{params:{[r]:m}}))}}}})},"./js/vue-globals/mixins/bindApi.js":function(h,d,n){"use strict";n.r(d);var t=n("../node_modules/ramda/es/index.js");const i=(c,a)=>t.ETc(c.split("."),a);d.default={beforeCreate(){this.$options.commands&&(this.$commands=this.$options.commands)},computed:{$api(){if(!this.$options.api)return[];const c=this.$options.api;return typeof c=="function"?c.data.response:t.u4g((u,{command:f,bind:_})=>{if(typeof _=="string")return{...u,[_]:f.data.response};const v=t.u4g((j,[y,I])=>{const g=y.includes(".")?i(y,f.data):f.data[y]||f.data.response[y];return{...j,[I]:g}},{},t.Zpf(_));return{...u,...v}},{},c)}}}},"./js/vue-globals/mixins/local/clickOutside.js":function(h,d,n){"use strict";n.r(d),n.d(d,{$clickOutside:function(){return a}});var t=n("../node_modules/ramda/es/index.js");const i=[];document.body.addEventListener("click",u=>{i.forEach(t.gH4(u))}),window.addEventListener("touchstart",u=>{i.forEach(t.gH4(u))});const c=(u,f)=>t.zGw(t.qhW(Array.isArray,_=>[_]),t.hXT(t.CyQ(t.kKJ)),t.YPD(_=>_===u||_.contains(u)))(f),a={methods:{$clickOutsideListener(u,f){const _=v=>{c(v.target,f)&&this.$emit(`clickOutside:${u}`)};i.push(_)}}}},"./js/vue-globals/mixins/local/inputValidation.js":function(h,d,n){"use strict";n.r(d),n.d(d,{$inputValidation:function(){return c}});var t=n("./js/vue-globals/helpers.js"),i=n("./js/stores/index.ts");const c={inject:{groupID:{default:null},inputID:{default:null},validators:{default:()=>({})}},props:{id:{type:String,required:!1,default(){return this.inputID}},group:{type:String,required:!1,default(){return this.groupID}},novalidate:{type:Boolean,required:!1,default(){return!Object.keys(this.validators).length}}},computed:{validationStore(){return(0,i.oR)(PiniaStores.VALIDATION)},valid(){return this.validationStore.isValid(this.group,this.id)},errorState(){return!this.novalidate&&this.isUpdated&&!this.valid},isUpdated(){var a;const u=(a=this.validationStore.groups[this.group])==null?void 0:a[this.id];return typeof u=="undefined"?!1:u.updated}},methods:{$validate(a){this.id&&!this.novalidate&&this.validationStore.validate(this.groupID,this.id,a,this.validators)}},created(){if(!this.novalidate){const{validate:a}=this.$options;a&&this.$watch(a,(0,t.Ds)(this.$validate,{trailing:!0,leading:!1,delay:200}),{immediate:!0})}},destroyed(){this.novalidate||this.validationStore.deleteInput(this.group,this.id)}}},"./js/vue-globals/mixins/notification.js":function(h,d,n){"use strict";n.r(d);var t=n("./js/composables/index.ts");d.default={created(){const i=new t.d$;this.$notifications=i}}},"./js/vue-globals/mixins/reloadApiTable.js":function(h,d,n){"use strict";n.r(d);var t=n("./js/modules/constants.js");const i=a=>a.$options&&a.$options.name==="UiApiTable",c=a=>{const u=[a];let f=a;for(;f=u.shift();){if(i(f))return f;f.$children.length&&u.push(...f.$children)}return!1};d.default={methods:{$reloadApiTable({reset:a=!0}={}){const u=c(this);if(!u){t.Vi.DEV&&console.warn("$reloadApiTable called without any ui-api-table child");return}u.reloadTable(),a&&Object.assign(this.$data,this.$options.data.apply(this))}}}},"./js/vue-globals/mixins/session.js":function(h,d,n){"use strict";n.r(d);var t=n("./js/context/index.ts");d.default={computed:{$_ctx(){return t.T},$_flags(){return t.T.session.features},$_session(){return t.T.session.allValues}},methods:{$_cmd(i){return t.T.session.allowedCommands.includes(i)}}}},"./js/vue-globals/mixins/staticData.js":function(h,d,n){"use strict";n.r(d),d.default={created(){this.$options.staticData&&Object.entries(this.$options.staticData).forEach(([t,i])=>{this[t]=typeof i=="function"?i.bind(this)():i})}}},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/reseller/backups/restore.vue?vue&type=style&index=0&id=5dc8fadc&prod&lang=scss&scoped=true&":function(){},"./js/pages/reseller/backups/restore.vue":function(h,d,n){"use strict";n.r(d),n.d(d,{default:function(){return I}});var t=function(){var e=this,o=e._self._c;return o("app-page",{attrs:{id:"restore-reseller-backup"},scopedSlots:e._u([{key:"default",fn:function(){return[o("app-page-section",[o("ui-steps",{attrs:{steps:[{id:"where",label:e.$gettext("Step 1: From Where"),desc:e.$gettext("Select directory for restore."),completed:e.validWhere},{id:"ip_choice",label:e.$gettext("Step 2: Select IP"),desc:e.$gettext(" Select IP address used for restore.")},{id:"files",label:e.$gettext("Step 3: Select File(s)"),desc:e.$gettext("Select backup files to restore."),completed:e.validFiles}],current:e.step,"hide-buttons":""},on:{"update:current":function(l){e.step=l}},scopedSlots:e._u([{key:"buttons",fn:function(){return[e.step==="where"&&e.where==="ftp"?o("ui-button",{key:"reload",attrs:{theme:"primary"},on:{click:e.reloadFiles}},[o("span",{domProps:{textContent:e._s(e.$gettext("Reload Files"))}})]):e._e(),e._v(" "),e.step==="files"?o("ui-button",{key:"restore",attrs:{theme:"primary",disabled:!e.validFiles||!e.validWhere},on:{click:e.restoreBackup}},[o("span",{domProps:{textContent:e._s(e.$gettext("Restore"))}})]):e._e()]},proxy:!0},{key:"step:where",fn:function(){return[o("div",{key:"where"},[o("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettextInterpolate(e.$gettext("Local: %{ location }"),{location:e.options.location}))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-radio",{attrs:{value:"local"},model:{value:e.where,callback:function(l){e.where=l},expression:"where"}})]},proxy:!0}])}),e._v(" "),o("ui-form-element",{attrs:{underline:e.where==="ftp","vertical-on-phone":!1,reverse:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("FTP"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-radio",{attrs:{value:"ftp"},model:{value:e.where,callback:function(l){e.where=l},expression:"where"}})]},proxy:!0}])}),e._v(" "),o("transition",{attrs:{name:"fade"}},[e.where==="ftp"?o("ui-form-element",{attrs:{underline:!1},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("FTP Settings"))}})]},proxy:!0},{key:"content",fn:function(){return[o("div",[o("ui-form-element",{attrs:{group:"restoreBackupWhere",validators:{required:!0}},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("IP"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-text",{model:{value:e.ftp_ip,callback:function(l){e.ftp_ip=l},expression:"ftp_ip"}})]},proxy:!0}],null,!1,2594831566)}),e._v(" "),o("ui-form-element",{attrs:{group:"restoreBackupWhere",validators:{required:!0}},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Username"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-text",{model:{value:e.ftp_username,callback:function(l){e.ftp_username=l},expression:"ftp_username"}})]},proxy:!0}],null,!1,1625864782)}),e._v(" "),o("ui-form-element",{attrs:{group:"restoreBackupWhere",validators:{required:!0}},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Password"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-password",{model:{value:e.ftp_password,callback:function(l){e.ftp_password=l},expression:"ftp_password"}})]},proxy:!0}],null,!1,1515196044)}),e._v(" "),o("ui-form-element",{attrs:{group:"restoreBackupWhere",validators:{required:!0}},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Remote Path"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-text",{model:{value:e.ftp_path,callback:function(l){e.ftp_path=l},expression:"ftp_path"}})]},proxy:!0}],null,!1,980711526)}),e._v(" "),o("ui-form-element",{attrs:{group:"restoreBackupWhere",validators:{required:!0}},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Port"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-text",{attrs:{number:""},model:{value:e.ftp_port,callback:function(l){e.ftp_port=l},expression:"ftp_port"}})]},proxy:!0}],null,!1,556239399)}),e._v(" "),o("ui-form-element",{attrs:{"vertical-on-phone":!1,reverse:e.clientStore.isPhone,vertical:!1},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Secure FTP"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-checkbox",{model:{value:e.ftp_secure,callback:function(l){e.ftp_secure=l},expression:"ftp_secure"}})]},proxy:!0}],null,!1,2830040462)})],1)]},proxy:!0}],null,!1,2539423655)}):e._e()],1)],1)]},proxy:!0},{key:"step:ip_choice",fn:function(){return[o("div",{key:"ip_choice"},[o("ui-form-element",{attrs:{underline:e.ip_choice==="select"},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Use the IP stored in the backup"))}})]},proxy:!0},{key:"content",fn:function(){return[o("ui-grid",{attrs:{column:e.clientStore.isPhone,cross:e.clientStore.isPhone?"start":"center"}},[o("input-radio",{attrs:{value:"file"},model:{value:e.ip_choice,callback:function(l){e.ip_choice=l},expression:"ip_choice"}},[o("span",{domProps:{textContent:e._s(e.$gettext("stored in the backup"))}})]),e._v(" "),o("input-radio",{attrs:{value:"select"},model:{value:e.ip_choice,callback:function(l){e.ip_choice=l},expression:"ip_choice"}},[o("span",{domProps:{textContent:e._s(e.$gettext("from the list"))}})])],1)]},proxy:!0}])}),e._v(" "),o("transition",{attrs:{name:"fade"}},[e.ip_choice==="select"?o("ui-form-element",{attrs:{underline:!1},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("IP Address"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-select",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}],attrs:{options:e.options.ips.options},model:{value:e.ip,callback:function(l){e.ip=l},expression:"ip"}})]},proxy:!0}],null,!1,262921593)}):e._e()],1),e._v(" "),o("ul",[o("li",{domProps:{textContent:e._s(e.$gettext("Note that you must set the IP to be shared if you want to add multiple users to it. If you select a non-shared IP, you can only restore 1 user to it."))}}),e._v(" "),o("li",{domProps:{textContent:e._s(e.$gettext("If the user already exists, this setting will have no effect."))}})])],1)]},proxy:!0},{key:"step:files",fn:function(){return[o("div",{key:"files"},[o("ui-form-element",{scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Location"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-text",{attrs:{disabled:"",value:e.options.location}})]},proxy:!0}])}),e._v(" "),o("ui-form-element",{attrs:{underline:e.encryptionEnabled},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Files"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-select-multiple",{attrs:{options:e.files.map(l=>l.file)},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}})]},proxy:!0}])},[e._v(`
                            []
                            `)]),e._v(" "),e.encryptionEnabled?[o("ui-form-element",{attrs:{underline:!!e.decrypt,"vertical-on-phone":!1,reverse:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Backup Decryption"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-checkbox",{model:{value:e.decrypt,callback:function(l){e.decrypt=l},expression:"decrypt"}})]},proxy:!0}],null,!1,3596436891)}),e._v(" "),o("transition",{attrs:{name:"fadeBounce"}},[e.decrypt?o("ui-form-element",{attrs:{group:"restoreBackupFiles",validators:{required:!0},underline:!1},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Password"))}})]},proxy:!0},{key:"content",fn:function(){return[o("input-password",{model:{value:e.password,callback:function(l){e.password=l},expression:"password"}})]},proxy:!0}],null,!1,3464064881)}):e._e()],1)]:e._e()],2)]},proxy:!0}])})],1)]},proxy:!0}])})},i=[],c=n("./js/stores/index.ts"),a=n("./js/api/commands/reseller/backup.js"),u=n("./js/vue-globals/mixins.js"),f={preload:[a.pZ,a.v6],api:[{command:a.pZ,bind:"options"},{command:a.v6,bind:"encryption"},{command:a.Fi,bind:{isDone:"filesLoaded",response:"files"}}],mixins:[(0,u.$bindTab)({defaultTab:"where",param:"step"})],data(){return{where:"local",ftp_ip:"",ftp_username:"",ftp_password:"",ftp_path:"",ftp_port:"",ftp_secure:"",ip_choice:"select",ip:"",select:[],decrypt:!1,password:""}},computed:{validWhere(){return this.where==="local"||!!this.ftp_ip&&!!this.ftp_username&&!!this.ftp_password&&!!this.ftp_path&&!!this.ftp_port},validFiles(){return!!this.select.length&&(!this.decrypt||!!this.password)},options(){return this.$api.options},files(){return this.$api.filesLoaded?this.$api.files:this.$api.options.files},encryptionEnabled(){return this.$api.encryption.enabled},ftpData(){return this.where==="local"?{}:{ftp_ip:this.ftp_ip,ftp_username:this.ftp_username,ftp_password:this.ftp_password,ftp_path:this.ftp_path,ftp_port:this.ftp_port,ftp_secure:this.ftp_secure?"ftps":"no"}},requestData(){const g={where:this.where,ip_choice:this.ip_choice,select:this.select},e=this.ip_choice==="file"?{}:{ip:this.ip};return{...g,...this.ftpData,...e,encryption_password:this.password}},...(0,c.Kc)(["client"])},watch:{step(g,e){e==="where"&&this.where==="ftp"&&this.reloadFiles()}},created(){this.ip=this.options.ips.value,this.ftp_ip=this.options.settings.ftp_ip,this.ftp_username=this.options.settings.ftp_username,this.ftp_password=this.options.settings.ftp_password,this.ftp_path=this.options.settings.ftp_path,this.ftp_port=this.options.settings.ftp_port,this.ftp_ip=this.options.settings.ftp_ip,this.ftp_secure=this.options.settings.ftp_secure},methods:{reloadFiles(){(0,a.Fi)({where:this.where,...this.ftpData})},async restoreBackup(){await(0,a.pi)(this.requestData)&&this.$router.push({name:"reseller/backups"})}}},_=f,v=n("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/reseller/backups/restore.vue?vue&type=style&index=0&id=5dc8fadc&prod&lang=scss&scoped=true&"),j=n("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),y=(0,j.Z)(_,t,i,!1,null,"5dc8fadc",null),I=y.exports},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/reseller/backups/restore.vue?vue&type=style&index=0&id=5dc8fadc&prod&lang=scss&scoped=true&":function(h,d,n){var t=n("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/reseller/backups/restore.vue?vue&type=style&index=0&id=5dc8fadc&prod&lang=scss&scoped=true&");t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[h.id,t,""]]),t.locals&&(h.exports=t.locals);var i=n("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,c=i("b171a232",t,!0,{})},"./js/vue-globals/mixins sync recursive \\.js$":function(h,d,n){var t={"./bindApi.js":"./js/vue-globals/mixins/bindApi.js","./local/clickOutside.js":"./js/vue-globals/mixins/local/clickOutside.js","./local/inputValidation.js":"./js/vue-globals/mixins/local/inputValidation.js","./notification.js":"./js/vue-globals/mixins/notification.js","./reloadApiTable.js":"./js/vue-globals/mixins/reloadApiTable.js","./session.js":"./js/vue-globals/mixins/session.js","./staticData.js":"./js/vue-globals/mixins/staticData.js","vue-globals/mixins/bindApi.js":"./js/vue-globals/mixins/bindApi.js","vue-globals/mixins/local/clickOutside.js":"./js/vue-globals/mixins/local/clickOutside.js","vue-globals/mixins/local/inputValidation.js":"./js/vue-globals/mixins/local/inputValidation.js","vue-globals/mixins/notification.js":"./js/vue-globals/mixins/notification.js","vue-globals/mixins/reloadApiTable.js":"./js/vue-globals/mixins/reloadApiTable.js","vue-globals/mixins/session.js":"./js/vue-globals/mixins/session.js","vue-globals/mixins/staticData.js":"./js/vue-globals/mixins/staticData.js"};function i(a){var u=c(a);return n(u)}function c(a){if(!n.o(t,a)){var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}return t[a]}i.keys=function(){return Object.keys(t)},i.resolve=c,h.exports=i,i.id="./js/vue-globals/mixins sync recursive \\.js$"}}]);
