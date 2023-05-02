"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4647],{"./js/pages/user/redirects.vue":function(v,c,o){o.r(c),o.d(c,{default:function(){return h}});var s={};o.r(s),o.d(s,{createRedirect:function(){return l},deleteRedirects:function(){return d},getRedirects:function(){return u}});var p=function(){var e=this,t=e._self._c;return t("app-page",{attrs:{actions:[{handler:e.$dialog("CREATE_REDIRECT_DIALOG").open,label:e.$gettext("Create New Redirect"),icon:"#plus-fill"}]},scopedSlots:e._u([{key:"default",fn:function(){return[t("app-page-section",[t("ui-api-table",e._b({on:{"action:del":function(r){e.$dialog("DELETE_REDIRECTS_DIALOG").open()}},scopedSlots:e._u([{key:"col:local_url_path",fn:function({local_url_path:r}){return[t("ui-link",{attrs:{href:`//${e.$domain}${r}`}},[e._v(`
                        `+e._s(r)+`
                    `)])]}},{key:"col:redirect_url",fn:function({redirect_url:r}){return[t("ui-link",{attrs:{href:r}},[e._v(`
                        `+e._s(r)+`
                    `)])]}},{key:"col:type",fn:function({type:r}){return[t("span",{key:r},[r==="301"?t("span",{domProps:{textContent:e._s(e.$gettext("301 \u2014 Permanent"))}}):r==="302"?t("span",{domProps:{textContent:e._s(e.$gettext("302 \u2014 Temporary"))}}):r==="303"?t("span",{domProps:{textContent:e._s(e.$gettext("303 \u2014 Replaced"))}}):e._e()])]}}]),model:{value:e.select,callback:function(r){e.select=r},expression:"select"}},"ui-api-table",{command:e.$commands.getRedirects,rowID:"local_url_path",columns:{local_url_path:e.$gettext("Local URL Path"),type:e.$gettext("Type"),redirect_url:e.$gettext("Redirect URL")},actions:{del:e.$gettext("Delete")},editable:!1},!1))],1),e._v(" "),t("ui-dialog",{attrs:{id:"CREATE_REDIRECT_DIALOG",theme:"safe",size:"normal",title:e.$gettext("Add New Redirect")},scopedSlots:e._u([{key:"content",fn:function(){return[t("ui-form-element",{attrs:{group:"redirect",validators:{required:!0,validateFrom:e.validateFrom},vertical:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Local URL Path"))}})]},proxy:!0},{key:"tooltip",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext('e.g. "/redirect", "/"'))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-text",{attrs:{prefix:e.$domainUnicode},model:{value:e.create.from,callback:function(r){e.$set(e.create,"from",r)},expression:"create.from"}})]},proxy:!0},{key:"error:validateFrom",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext('Should start with a forward slash "/"'))}})]},proxy:!0}])}),e._v(" "),t("ui-form-element",{attrs:{vertical:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Redirect Type"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-select",{attrs:{options:{301:e.$gettext("301 \u2014 Permanent"),302:e.$gettext("302 \u2014 Temporary"),303:e.$gettext("303 \u2014 Replaced")},width:"46.3rem"},model:{value:e.create.type,callback:function(r){e.$set(e.create,"type",r)},expression:"create.type"}})]},proxy:!0}])}),e._v(" "),t("ui-form-element",{attrs:{group:"redirect",validators:{required:!0,isURL:e.isURL},vertical:e.clientStore.isPhone},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Destination URL"))}})]},proxy:!0},{key:"tooltip",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext('e.g. "http://www.redirected.com"'))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-text",{model:{value:e.create.to,callback:function(r){e.$set(e.create,"to",r)},expression:"create.to"}})]},proxy:!0},{key:"error:isURL",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Should be valid URL"))}})]},proxy:!0}])})]},proxy:!0},{key:"buttons",fn:function(){return[t("ui-button",{attrs:{theme:"primary","validate-group":"redirect"},on:{click:e.createRedirect}},[t("span",{domProps:{textContent:e._s(e.$gettext("Create"))}})])]},proxy:!0}])}),e._v(" "),t("ui-dialog-delete-items",{attrs:{id:"DELETE_REDIRECTS_DIALOG",subject:e.$ngettext("Redirect","Redirects",e.select.length)},on:{"click:confirm":e.deleteRedirects}})]},proxy:!0}])})},f=[],m=o("./js/stores/index.ts"),a=o("./js/api/command/index.js");const i="/CMD_REDIRECT",u=a.Z.get({id:"REDIRECTS",url:i,domain:!0,pagination:!0,after:n=>n.flow(n.processTableInfo("redirects"),n.moveProp("redirects","rows"),n.mapProps({rows:n.toArray}))}),l=a.Z.post({url:i,params:{action:"add"},domain:!0,schema:{from:a.Z.REQUIRED_STRING,type:a.Z.REQUIRED_STRING,to:a.Z.REQUIRED_STRING}}),d=a.Z.select({url:i,domain:!0,params:{action:"delete"}});var x={preload:u,commands:s,data:()=>({select:[],create:{from:"/",type:"301",to:"http://"}}),computed:{...(0,m.Kc)(["client"])},watch:{$domain:"$reloadApiTable"},methods:{createRedirect(){l(this.create).then(this.$reloadApiTable)},async deleteRedirects(){d({select:this.select}).then(this.$reloadApiTable)},isURL(n){if(!n)return!0;const e="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",t=new RegExp(e,"i");return n.length<2083&&t.test(n)},validateFrom:n=>!n||n.startsWith("/")}},R=x,g=o("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),y=(0,g.Z)(R,p,f,!1,null,null,null),h=y.exports}}]);
