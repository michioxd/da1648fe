(self.webpackChunk=self.webpackChunk||[]).push([[6126],{"./js/api/commands/admin/httpd.js":function(c,i,u){"use strict";u.d(i,{J_:function(){return _},Nk:function(){return O},Pw:function(){return S},Yy:function(){return m},ad:function(){return T},ay:function(){return r},du:function(){return f},hF:function(){return a},tl:function(){return n}});var s=u("./js/api/command/index.js"),e=u("./js/modules/utils/index.js");const l=e.fp.flow(e.fp.convert.toAppString,e.fp.convert.toLines),o=e.fp.flow(t=>t||"",e.fp.convert.toAppString,e.fp.convert.toAppText),p="/CMD_CUSTOM_HTTPD",O=s.Z.get({id:"CUSTOM_HTTPD_DOMAINS",url:p,pagination:!0,after:()=>e.fp.flow(e.fp.mapProp("domains",e.fp.toTable()),e.fp.mapProp("file",e.fp.feedWith(1,t=>["nginx","nginx_proxy","openlitespeed","httpd"].find(d=>t[`have_${d}`]==="1")||"httpd")))}),f=s.Z.post({url:p,params:{action:"all",rewrite_confs:!0}}),m=s.Z.get({url:p,id:"CH_DOMAIN_CONFIG",schema:{domain:s.Z.REQUIRED_STRING,proxy:s.Z.OPTIONAL_BOOL},after:()=>e.fp.flow(t=>({tokens:t.AVAILABLE_TOKENS,error:t.CONFIG_ERROR,test:t.CONFIG_TEST,data:t.HTTPD,templates:t}),e.fp.mapProps({error:e.fp.isEqual("1"),nginx:e.fp.isEqual("1"),data:l,test:o,templates:e.fp.flow(e.fp.filter((t,d)=>d.includes("VH")),e.fp.filter(e.fp.getProp("data")),e.fp.toArray,e.fp.mapArrayProps({data:l,custom:e.fp.isEqual("1")})),tokens:e.fp.flow(e.fp.mapValues((t,d)=>({token:d,value:t})),e.fp.toArray)}))}),_=s.Z.get({url:p,id:"CH_DOMAIN_CUSTOMIZATION_VALUES",schema:{domain:s.Z.REQUIRED_STRING,proxy:s.Z.OPTIONAL_BOOL},after:()=>e.fp.flow(e.fp.project({config:"CONFIG",custom1:"CUSTOM1",custom2:"CUSTOM2",custom3:"CUSTOM3",custom4:"CUSTOM4",custom5:"CUSTOM5",custom6:"CUSTOM6",custom7:"CUSTOM7",custom8:"CUSTOM8",tokens:"AVAILABLE_TOKENS",appendix:"VH1.custom_global_pre_post",tokensCount:"NUM_CUSTOM_TOKENS"}),e.fp.mapProps({config:o,custom1:o,custom2:o,custom3:o,custom4:o,custom5:o,custom6:o,custom7:o,custom8:o,nginx:e.fp.convert.toAppBoolean,tokensCount:e.fp.convert.toAppNumber,tokens:e.fp.flow(e.fp.mapValues((t,d)=>({token:d,value:t})),e.fp.toArray),appendix:e.fp.flow(e.fp.setDefault({}),e.fp.filter((t,d)=>d.includes("CUSTOM")),e.fp.mapValues(o),e.fp.transformObject((t,d)=>{const[,I]=d.match(/^.*(CUSTOM.*)$/);return{[I]:{data:t,name:d}}}))}))}),S=s.Z.post({url:p,schema:{proxy:s.Z.OPTIONAL_STRING,domain:s.Z.REQUIRED_STRING,config:s.Z.OPTIONAL_STRING,custom1:s.Z.OPTIONAL_STRING,custom2:s.Z.OPTIONAL_STRING,custom3:s.Z.OPTIONAL_STRING,custom4:s.Z.OPTIONAL_STRING,custom5:s.Z.OPTIONAL_STRING,custom6:s.Z.OPTIONAL_STRING,custom7:s.Z.OPTIONAL_STRING,custom8:s.Z.OPTIONAL_STRING}}),n=s.Z.get({url:p,id:"CH_PHP_FPM_CONFIGURATION",schema:{user:s.Z.REQUIRED_STRING,"php-fpm":s.Z.REQUIRED_STRING},after:()=>e.fp.flow(e.fp.project({error:"CONFIG_ERROR",test:"CONFIG_TEST",custom1:"CUSTOM1",custom2:"CUSTOM2",global_custom1:"GLOBAL_CUSTOM1",global_custom2:"GLOBAL_CUSTOM2","config.data":"FPM_CONFIG","config.file":"FPM_CONFIG_FILE","config.version":"FPM_VER","template.custom":"PHP_FPM_IS_CUSTOM_TEMPLATE","template.data":"PHP_FPM_TEMPLATE","template.name":"PHP_FPM_TEMPLATE_NAME","template.short":"PHP_FPM_TEMPLATE_NAME_SHORT"}),e.fp.mapProps({error:e.fp.isEqual("1"),test:o,custom1:o,custom2:o,config:e.fp.mapProp("data",l),template:e.fp.mapProps({custom:e.fp.isEqual("1"),data:l})}))}),a=s.Z.get({id:"CH_PHP_FPM_TOKENS",url:p,schema:{user:s.Z.REQUIRED_STRING,"php-fpm":s.Z.REQUIRED_STRING},after:()=>e.fp.flow(e.fp.getProp("AVAILABLE_TOKENS"),e.fp.mapValues((t,d)=>({token:d,value:t})),e.fp.toArray)}),r=s.Z.post({url:p,schema:{user:s.Z.REQUIRED_STRING,"php-fpm":s.Z.REQUIRED_STRING,custom1:s.Z.OPTIONAL_STRING,custom2:s.Z.OPTIONAL_STRING,all_php_versions:s.Z.OPTIONAL_BOOL}}),T=s.Z.get({id:"CH_DIFF",url:"/CMD_TEMPLATE_DIFF",schema:{name:s.Z.REQUIRED_STRING},after:()=>e.fp.flow(e.fp.deleteProp("lines"),e.fp.mapValues((t,d)=>({...t,number:d})),e.fp.toArray,e.fp.mapArray(e.fp.moveProp("line","content")),e.fp.mapArrayProps({number:e.fp.convert.toAppNumber,content:t=>t?t.replace(/\t/g,"    "):""}),e.fp.sortBy("number"))})},"../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/admin/custom-httpd/diff.vue?vue&type=style&index=0&id=421f045a&prod&lang=scss&scoped=true&":function(){},"./js/pages/admin/custom-httpd/diff.vue":function(c,i,u){"use strict";u.r(i),u.d(i,{default:function(){return _}});var s=function(){var n=this,a=n._self._c;return a("app-page",{attrs:{id:"template-diff"},scopedSlots:n._u([{key:"page:title",fn:function(){return[a("span",{domProps:{textContent:n._s(n.$gettextInterpolate(n.$gettext("Template Diff: %{ name }"),{name:n.name}))}})]},proxy:!0},{key:"default",fn:function(){return[a("app-page-section",{staticClass:"diff-wrapper"},[a("table",{staticClass:"diff-table"},n._l(n.$api.diff,function(r,T){return a("tr",{key:T,class:["diff-line",r.type]},[r.type==="header"?[a("td",{attrs:{colspan:"2"}},[a("pre",{staticClass:"diff-line-content",domProps:{textContent:n._s(r.content)}})])]:[a("td",{staticClass:"sign"},[r.type==="minus"?[n._v(`
                                -
                            `)]:r.type==="plus"?[n._v(`
                                +
                            `)]:n._e()],2),n._v(" "),a("td",[a("pre",{staticClass:"diff-line-content",domProps:{textContent:n._s(r.content)}})])]],2)}),0)])]},proxy:!0}])})},e=[],l=u("./js/api/commands/admin/httpd.js"),o={preload:l.ad,api:[{command:l.ad,bind:"diff"}],props:{name:{type:String,required:!0}}},p=o,O=u("../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/admin/custom-httpd/diff.vue?vue&type=style&index=0&id=421f045a&prod&lang=scss&scoped=true&"),f=u("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),m=(0,f.Z)(p,s,e,!1,null,"421f045a",null),_=m.exports},"../node_modules/vue-style-loader/index.js!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/admin/custom-httpd/diff.vue?vue&type=style&index=0&id=421f045a&prod&lang=scss&scoped=true&":function(c,i,u){var s=u("../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[1]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[4]!../node_modules/vue-loader/lib/index.js??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./js/pages/admin/custom-httpd/diff.vue?vue&type=style&index=0&id=421f045a&prod&lang=scss&scoped=true&");s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[c.id,s,""]]),s.locals&&(c.exports=s.locals);var e=u("../node_modules/vue-style-loader/lib/addStylesClient.js").Z,l=e("74aee3dc",s,!0,{})}}]);
