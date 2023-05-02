(self.webpackChunk=self.webpackChunk||[]).push([[1037],{"./js/api/commands/user/domains/index.js":function(I,_,n){"use strict";n.d(_,{x6:function(){return T},R6:function(){return g},Fj:function(){return b},Uq:function(){return w},Ak:function(){return E},fp:function(){return A},ge:function(){return d},Px:function(){return C},Qv:function(){return Z},Nk:function(){return o},gP:function(){return j},v$:function(){return M},xh:function(){return S},$A:function(){return L},ql:function(){return P}});var t=n("./js/api/command/index.js"),u=n("../node_modules/ramda/es/index.js"),l=n("./js/api/commands/converters/index.ts");const h=u.zGw(Number,Number.isFinite),p=s=>({domain:s.domain,active:(0,l.sw)(s.active),defaultdomain:(0,l.sw)(s.defaultdomain),subdomain:(0,l.He)(s.subdomain),bandwidth:(0,l.cc)({usage:h(s.bandwidth)?s.bandwidth:"0",limit:s.bandwidth_limit}),quota:(0,l.cc)({usage:h(s.quota)?s.quota:"0",limit:s.quota_limit}),pointers:u.zGw(u.yAE({}),u.XPQ,u.UID(String))(s.pointers)}),v=s=>({bandwidth:s.bandwidth,quota:s.quota,ssl:s.ssl==="ON",cgi:s.cgi==="ON",php:s.php==="ON",show_ips:s.has_multiple_ips==="yes",show_php:s.has_php_selector==="yes",force_ssl:s.force_ssl==="yes",private_html:s.private_html==="link"?"symlink":"directory",force_redirect:s.force_redirect||"none",modsecurity:s.modsecurity==="yes",nginx:s.nginx==="1",hasPerDomainNginx:s.HAS_PER_DOMAIN_NGINX==="yes"}),y=s=>({type:"checkbox",value:s.value==="ON"||s.checked==="yes",description:s.desc||"",label:s.string||"",api_only:s.api_only==="yes",hidden:s.hidden==="yes"}),i=s=>({type:"text",description:s.desc||"",label:s.string||"",value:s.value||"",api_only:s.api_only==="yes",hidden:s.hidden==="yes"}),c=s=>{const x=Object.keys(s).filter(D=>/^item\d+val*$/.test(D)).reduce((D,R)=>({...D,[s[R]]:s[R.replace("val","txt")]||""}),{});return{type:"select",description:s.desc||"",label:s.string||"",value:s.value||s.default||"",options:x,api_only:s.api_only==="yes",hidden:s.hidden==="yes"}},m=s=>s.split("&").reduce((x,D)=>{const[R="",N=""]=D.split("=");return{...x,[R]:N}},{}),a=s=>{switch(s.type){case"listbox":return c(s);case"checkbox":return y(s);default:return i(s)}};var e={getDomains:s=>u.UID(p,u.VO0(s)),getDomain:{domain:v,custom_items:s=>{const x=u.IDH(m,s.custom_domain_items||{}),D=u.zXx(u.XPQ(x),s),R=u.viO(u.IDH(k=>({value:k}),D),x);return u.IDH(a,R)}},getPhpVersions:s=>{if(s.has_php_selector==="yes"){if(typeof s.php1_select=="object")return{enabled:!0,legacy:s.php_selector_count==="2",versions:(0,l.M1)(s.php1_select)};const x=u.eiS(u.UID(D=>`php${D}_select`,u.w6H(1,5)),s.options);return{enabled:!0,versions:{value:s.php1_select,options:x},legacy:s.php_selector_count==="2"}}else return{enabled:!1,legacy:!1,versions:{options:{},value:""}}}};const o=t.Z.get({id:"GET_DOMAINS",url:"/CMD_ADDITIONAL_DOMAINS",params:{bytes:!0},response:[],mapResponse:e.getDomains}),d=t.Z.get({id:"GET_DOMAIN",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view"},schema:{domain:t.Z.DOMAIN},mapResponse:e.getDomain}),A=t.Z.get({id:"DOMAIN_CUSTOM_ITEMS",url:"/HTM_ADD_DOMAIN",mapResponse:e.getDomain.custom_items}),O=t.Z.select({url:"/CMD_DOMAIN"}),S=O.extend({params:{default:!0}}),g=O.extend({params:{reason:"Other",suspend:!0}}),E=O.extend({params:{delete:!0,confirmed:!0,delete_data_aware:!0},schema:{delete_data:t.Z.REQUIRED_BOOL}}),b=t.Z.post({url:"/CMD_DOMAIN",params:{action:"create"},schema:{domain:t.Z.REQUIRED_STRING,bandwidth:t.Z.OPTIONAL_STRING,unbandwidth:t.Z.OPTIONAL_STRING,quota:t.Z.OPTIONAL_STRING,uquota:t.Z.OPTIONAL_STRING,ssl:t.Z.OPTIONAL_STRING,cgi:t.Z.OPTIONAL_STRING,php:t.Z.OPTIONAL_STRING},notifySuccess:!0,notifyError:!0}),M=t.Z.post({url:"/CMD_CHANGE_DOMAIN",params:{json:!0},schema:{old_domain:t.Z.REQUIRED_STRING,new_domain:t.Z.REQUIRED_STRING}}),j=t.Z.post({url:"/CMD_DOMAIN",params:{action:"modify",form_version:"1.1"},body:{domain:t.Z.DOMAIN,bandwidth:t.Z.REQUIRED_STRING,ubandwidth:t.Z.REQUIRED_STRING,quota:t.Z.REQUIRED_STRING,uquota:t.Z.REQUIRED_STRING,ssl:t.Z.REQUIRED_STRING,php:t.Z.REQUIRED_STRING,cgi:t.Z.REQUIRED_STRING,www_pointers:t.Z.OPTIONAL_STRING,force_redirect:t.Z.REQUIRED_STRING}}),P=t.Z.post({url:"/CMD_DOMAIN",params:{action:"private_html"},schema:{domain:t.Z.DOMAIN,val:{...t.Z.REQUIRED_STRING,validator:s=>["directory","symlink"].includes(s)},force_ssl:t.Z.OPTIONAL_BOOL},notifySuccess:!1}),T=t.Z.post({url:"/CMD_DOMAIN",params:{action:"multi_ip",add:!0},schema:{domain:t.Z.DOMAIN,ip:t.Z.REQUIRED_STRING,dns:t.Z.OPTIONAL_BOOL}}),C=t.Z.get({id:"DOMAIN_IPS",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view",ips:!0},schema:{domain:t.Z.DOMAIN},after:s=>s.flow(s.project({assigned:"assigned_ips",available:"available_ips"}),s.mapProp("assigned",s.mapArray(x=>({ip:x}))))}),w=t.Z.post({url:"/CMD_DOMAIN",params:{action:"multi_ip",delete:!0},schema:{domain:t.Z.DOMAIN,select:t.Z.ROWS,removedns:t.Z.OPTIONAL_BOOL}}),Z=t.Z.get({id:"DOMAIN_PHP_VERSIONS",url:"/CMD_ADDITIONAL_DOMAINS",params:{action:"view"},domain:!0,mapResponse:e.getPhpVersions}),L=t.Z.post({url:"/CMD_DOMAIN",method:"POST",params:{action:"php_selector",save:!0},domain:!0,schema:{php1_select:t.Z.REQUIRED_STRING}})},"./js/api/commands/validation/index.js":function(I,_,n){"use strict";n.d(_,{i9:function(){return e},ty:function(){return f},l7:function(){return m},OE:function(){return r},ub:function(){return O},oH:function(){return y},U5:function(){return i},k_:function(){return v},PR:function(){return a},uo:function(){return A},Jj:function(){return d},rV:function(){return o}});var t=n("./js/api/command/index.js"),u=n("../node_modules/punycode/punycode.es6.js"),l=n("./js/api/commands/converters/index.ts"),h={isValid(g){return typeof g.error=="undefined"},getMessage(g){return(0,l.S8)(g.error||"")}};const p=t.Z.get({url:"/CMD_JSON_VALIDATE",schema:{value:t.Z.REQUIRED_STRING},response:{valid:!0,message:""},mapResponse:{valid:h.isValid,message:h.getMessage}}),v=p.extend({id:"VALIDATE_FORWARDER",params:{type:"forwarder",ignore_system_default:!0}}),y=p.extend({id:"VALIDATE_EMAIL",params:{type:"email",check_mailing_list:!0},schema:{check_exists:{type:Boolean,required:!1,default:!0}}}),i=p.extend({id:"VALIDATE_FTP",params:{type:"ftp"},domain:!0}),c=p.extend({params:{type:"dns"},domain:!0,schema:{record:t.Z.REQUIRED_STRING}}),m=c.extend({id:"VALIDATE_DNS_VALUE",params:{check:"value",name:!0},domain:!0,schema:{value:t.Z.REQUIRED_STRING}}),a=m.extend({id:"VALIDATE_MX_VALUE",params:{record:"MX"},before:({value:g})=>({value:"10",mx_value:g})}),f=c.extend({id:"VALIDATE_DNS_NAME",params:{check:"name",value:!0,mx_value:!0},schema:{name:t.Z.REQUIRED_STRING,value:null}}),r=p.extend({id:"VALIDATE_DATABASE",params:{type:"dbname"}}),e=p.extend({id:"VALIDATE_DATABASE_USER",params:{type:"dbusername"}}),o=p.extend({id:"VALIDATE_USERNAME",params:{type:"username"}}),d=p.extend({id:"VALIDATE_SUBDOMAIN",domain:!0,params:{type:"subdomain"}}),A=p.extend({id:"VALIDATE_PASSWORD",params:{type:"password"}}),O=p.extend({id:"VALIDATE_DOMAIN",params:{type:"domain"},before:({value:g})=>({value:u.ZP.toASCII(g)})}),S=p.extend({id:"VALIDATE_IP_RANGE_LIST",params:{type:"ip_range_list"}})},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/domains/add.vue?vue&type=style&index=0&id=25f15463&prod&lang=scss&":function(){},"./js/api/commands/converters/customItems.ts":function(I,_,n){"use strict";n.d(_,{CR:function(){return p}});var t=n("../node_modules/ramda/es/index.js"),u=n("./js/api/commands/converters/index.ts"),l=n("./js/api/commands/utils/transduce.ts"),h=n("./js/api/commands/converters/toSelectData.ts");const p=i=>{const c={name:i.name,type:i.type==="listbox"?"select":i.type,label:i.string,description:i.desc||"",value:i.type==="checkbox"?(0,u.sw)(i.checked||"no"):i.value||""};return c.type==="select"?t.BPw(c,(0,h.M1)(i.select||{})):c},v=i=>(0,l.vr)([(0,l.uD)(c=>/^item\d+val$/.test(c)),(0,l.r5)(c=>{const m=c,a=c.replace("val","txt"),f=i[m],r=i[a];return{[f]:r}})],Object.keys(i)),y=(i,c)=>t.qCK(a=>{const f={name:a.name,type:a.type==="listbox"?"select":a.type,description:a.desc||"",value:a.value||"",label:a.string};return a.type==="listbox"?(f.value=a.default,f.options=v(a)):a.type==="checkbox"&&(f.value=a.checked==="yes"),f},t.BPw({name:i}),(0,l.vr)([(0,l.r5)(a=>{const[f,r]=t.Vl2("=",a);return{[f]:r}})]),t.Vl2("&"))(c);_.ZP={fromObject:p,fromString:y}},"./js/api/commands/converters/index.ts":function(I,_,n){"use strict";n.d(_,{l$:function(){return m.ZP},t0:function(){return t.t0},S8:function(){return t.S8},ql:function(){return t.ql},sw:function(){return t.sw},Qu:function(){return t.Qu},He:function(){return t.He},M1:function(){return c.M1},sf:function(){return f},cc:function(){return i}});var t=n("./js/api/commands/converters/primitive.ts"),u=n("../node_modules/monet/dist/monet.js"),l=n("./js/api/commands/types.ts");const h=r=>typeof r=="object"?u.Either.Right(r):u.Either.Left(new Error("Passed param is not an object")),p=r=>typeof r.usage=="string"?u.Either.Right(r):u.Either.Left(new Error("usage property is required")),v=r=>({usage:(0,t.He)(r.usage),limit:(0,t.Qu)(r.limit)}),y=({usage:r,limit:e})=>{let o=l.H.Normal;const d=Math.floor(r/e*100);return d>=100?o=l.H.OverUsed:d>80&&(o=l.H.AlmostUsed),{usage:r,limit:e,status:o}},i=r=>{const e=u.Either.Right(r).flatMap(h).flatMap(p).map(v).map(y);if(e.isLeft())throw e.left();return e.right()};var c=n("./js/api/commands/converters/toSelectData.ts"),m=n("./js/api/commands/converters/customItems.ts"),a=n("../node_modules/ramda/es/index.js");const f=r=>e=>{const{info:o}=e,d=a.CEd(["info"],e);return{columns:o.columns,rowsCount:Number(o.rows),rows:a.UID(r,a.VO0(d))}}},"./js/api/commands/converters/toSelectData.ts":function(I,_,n){"use strict";n.d(_,{M1:function(){return y}});var t=n("../node_modules/monet/dist/monet.js"),u=n.n(t),l=n("./js/api/commands/utils/transduce.ts"),h=n("../node_modules/ramda/es/index.js");const p=i=>t.Maybe.Some(i).flatMap(c=>{const m=c.find(a=>a.selected==="yes");return m?t.Maybe.Some(m):t.Maybe.None()}).flatMap(c=>t.Maybe.fromNull(c.value)).orSome(""),v=(0,l.vr)([(0,l.r5)(i=>({[i.value]:i.text}))]),y=i=>{const c=(0,h.VO0)(i);return{value:p(c),options:v(c)}}},"./js/api/commands/types.ts":function(I,_,n){"use strict";n.d(_,{H:function(){return t}});var t;(function(u){u.Normal="normal",u.AlmostUsed="almost_used",u.OverUsed="overused"})(t||(t={}))},"./js/api/commands/utils/transduce.ts":function(I,_,n){"use strict";n.d(_,{Re:function(){return h},r5:function(){return u},uD:function(){return l},vr:function(){return c},zh:function(){return y}});var t=n("../node_modules/ramda/es/index.js");const u=m=>a=>(f,r)=>{const e=m(r);return a(f,e)},l=m=>a=>(f,r)=>m(r)?a(f,r):f,h=(m,a)=>(m.push(a),m),p=(m,a)=>t.BPw(m,a),v=(m,a,f,r)=>{const e=t.qCK(...f);return r.reduce(e(a),m)},y=t.WAo(v),i=y([],h),c=y({},p)},"./js/pages/user/domains/add.vue":function(I,_,n){"use strict";n.r(_),n.d(_,{default:function(){return f}});var t=function(){var e=this,o=e._self._c;return o("app-page",{scopedSlots:e._u([{key:"footer:buttons",fn:function(){return[o("ui-button",{attrs:{theme:"primary","validate-group":"createDomain"},on:{click:e.createDomain}},[o("span",{domProps:{textContent:e._s(e.$gettext("Create"))}})])]},proxy:!0},{key:"default",fn:function(){return[o("app-page-section",[o("ui-form-element",{attrs:{group:"createDomain",validators:{required:!0,api:e.$commands.validateDomain},vertical:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.$gettext("Domain:")))]},proxy:!0},{key:"tooltip",fn:function(){return[e._v(`
                    `+e._s(e.$gettext("Do not use CAPS, www, or http:// in your domain name"))+`
                `)]},proxy:!0},{key:"content",fn:function(){return[o("input-text",{model:{value:e.domain,callback:function(d){e.domain=d},expression:"domain"}})]},proxy:!0}])}),e._v(" "),o("ui-form-element",{attrs:{vertical:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Bandwidth"))}})]},proxy:!0},{key:"content",fn:function(){return[o("ui-input-group",{scopedSlots:e._u([{key:"input",fn:function(){return[o("input-text",{staticClass:"grouped-input",style:{width:"1px"},attrs:{number:"",disabled:e.ubandwidth,suffix:"MB"},on:{blur:e.checkBandwidth},model:{value:e.bandwidth,callback:function(d){e.bandwidth=d},expression:"bandwidth"}})]},proxy:!0},{key:"additions:right",fn:function(){return[o("input-checkbox-button",{model:{value:e.ubandwidth,callback:function(d){e.ubandwidth=d},expression:"ubandwidth"}},[o("span",{staticClass:"wrap:nowrap",domProps:{textContent:e._s(e.$gettext("Same as Main account"))}})])]},proxy:!0}])})]},proxy:!0}])}),e._v(" "),o("ui-form-element",{attrs:{vertical:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.$gettext("Disk Usage")))]},proxy:!0},{key:"content",fn:function(){return[o("ui-input-group",{scopedSlots:e._u([{key:"input",fn:function(){return[o("input-text",{staticClass:"grouped-input",style:{width:"1px"},attrs:{disabled:e.uquota,number:"",suffix:"MB"},on:{blur:e.checkQuota},model:{value:e.quota,callback:function(d){e.quota=d},expression:"quota"}})]},proxy:!0},{key:"additions:right",fn:function(){return[o("input-checkbox-button",{model:{value:e.uquota,callback:function(d){e.uquota=d},expression:"uquota"}},[o("span",{staticClass:"wrap:nowrap",domProps:{textContent:e._s(e.$gettext("Same as Main account"))}})])]},proxy:!0}])})]},proxy:!0}])}),e._v(" "),o("ui-form-element",{attrs:{underline:!1},scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(e.$gettext("Options"))}})]},proxy:!0},{key:"content",fn:function(){return[o("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:e.clientStore.isMobile?"column":"row",cross:e.clientStore.isMobile?"start":"center"},expression:`{
                            dir: clientStore.isMobile ? 'column' : 'row',
                            cross: clientStore.isMobile
                                ? 'start'
                                : 'center',
                        }`},{name:"gutter",rawName:"v-gutter",value:1,expression:"1"}]},[o("input-checkbox",{model:{value:e.ssl,callback:function(d){e.ssl=d},expression:"ssl"}},[o("span",{domProps:{textContent:e._s(e.$gettext("Secure SSL"))}})]),e._v(" "),o("input-checkbox",{model:{value:e.cgi,callback:function(d){e.cgi=d},expression:"cgi"}},[o("span",{domProps:{textContent:e._s(e.$gettext("CGI Access"))}})]),e._v(" "),o("input-checkbox",{model:{value:e.php,callback:function(d){e.php=d},expression:"php"}},[o("span",{domProps:{textContent:e._s(e.$gettext("PHP Access"))}})])],1)]},proxy:!0}])})],1),e._v(" "),Object.keys(e.visibleCustomItems).length?o("app-page-section",{scopedSlots:e._u([{key:"section:title",fn:function(){return[e._v(`
                `+e._s(e.$gettext("Custom Items"))+`
            `)]},proxy:!0}],null,!1,460331e3)},[e._v(" "),e._l(e.visibleCustomItems,function(d,A){return o("ui-form-element",{key:A,scopedSlots:e._u([{key:"title",fn:function(){return[o("span",{domProps:{textContent:e._s(d.label)}})]},proxy:!0},d.description?{key:"tooltip",fn:function(){return[o("span",{domProps:{textContent:e._s(d.description)}})]},proxy:!0}:null,{key:"content",fn:function(){return[o(e.getComponent(d),{tag:"component",attrs:{options:d.options||{},disabled:d.api_only},model:{value:e.custom[A],callback:function(O){e.$set(e.custom,A,O)},expression:"custom[id]"}})]},proxy:!0}],null,!0)})})],2):e._e()]},proxy:!0}])})},u=[],l=n("./js/stores/index.ts"),h=n("./js/api/commands/user/domains/index.js"),p=n("./js/api/commands/validation/index.js"),v=n("../node_modules/ramda/es/index.js"),y={preload:h.fp,api:[{command:h.fp,bind:"customItems"}],commands:{validateDomain:p.ub},data(){return{domain:"",bandwidth:"1000",ubandwidth:!0,quota:"0",uquota:!0,ssl:!0,cgi:!1,php:!0,custom:{}}},computed:{customItemsData(){const r=v.XPQ(v.hXT(e=>!e.api_only,this.$api.customItems));return v.UID(e=>typeof e=="boolean"?e?"ON":"OFF":e,v.eiS(r,this.custom))},requestData(){return{ssl:this.ssl?"ON":null,cgi:this.cgi?"ON":null,php:this.php?"ON":null,bandwidth:this.ubandwidth?null:this.bandwidth,quota:this.uquota?null:this.quota,ubandwidth:this.ubandwidth?"unlimited":null,uquota:this.uquota?"unlimited":null,...this.customItemsData}},visibleCustomItems(){return v.hXT(v.CyQ(v.vgT("hidden")),this.$api.customItems)},...(0,l.Kc)(["client"])},created(){Object.keys(this.$api.customItems).forEach(r=>this.$set(this.custom,r,this.$api.customItems[r].value))},methods:{getComponent({type:r}){return{text:"input-text",checkbox:"input-checkbox",select:"input-select"}[r]},async createDomain(){const r=this.$p6e.toA(this.domain);this.domain!==r&&this.$notifications.info({title:this.$gettext("Domain name punycoded"),content:this.$gettext("Domain name has been automatically converted to punycode format. Punycode is used to encode internationalized domain names (IDN) by converting Unicode characters to ASCII.")}),await(0,h.Fj)({...this.requestData,domain:r})&&(await this.$_ctx.session.loadUserConfig(),this.$router.push({name:"user/domains"}))},checkQuota(){this.quota||(this.quota="0")},checkBandwidth(){this.bandwidth||(this.bandwidth="0")}}},i=y,c=n("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/domains/add.vue?vue&type=style&index=0&id=25f15463&prod&lang=scss&"),m=n("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=(0,m.Z)(i,t,u,!1,null,null,null),f=a.exports},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/domains/add.vue?vue&type=style&index=0&id=25f15463&prod&lang=scss&":function(I,_,n){var t=n("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/user/domains/add.vue?vue&type=style&index=0&id=25f15463&prod&lang=scss&");t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[I.id,t,""]]),t.locals&&(I.exports=t.locals);var u=n("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,l=u("79fe8382",t,!0,{})}}]);
