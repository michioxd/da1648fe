"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7969],{"./js/api/commands/reseller/users/message.js":function(d,o,s){s.d(o,{FC:function(){return a},TB:function(){return c},o6:function(){return i}});var r=s("./js/api/command/index.js");const n="/CMD_EDIT_USER_MESSAGE",a=r.Z.get({id:"USER_MESSAGE",url:n,after:u=>u.mapProp("message",u.convert.toAppText)}),i=r.Z.post({url:n,params:{save:!0},schema:{subject:r.Z.REQUIRED_STRING,message:r.Z.REQUIRED_STRING}}),c=r.Z.post({url:n,params:{reset:!0}})},"./js/pages/reseller/edit-user-message.vue":function(d,o,s){s.r(o),s.d(o,{default:function(){return m}});var r=function(){var e=this,t=e._self._c;return t("app-page",{attrs:{actions:[{handler:e.resetToDefault,label:e.$gettext("Reset to default"),icon:"#console",theme:"danger"}]},scopedSlots:e._u([{key:"default",fn:function(){return[t("app-page-section",[t("ui-form-element",{attrs:{group:"editUserMessage",validators:{required:!0}},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Subject"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-text",{model:{value:e.subject,callback:function(l){e.subject=l},expression:"subject"}})]},proxy:!0}])}),e._v(" "),t("ui-form-element",{attrs:{group:"editUserMessage",validators:{required:!0},underline:!1},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$gettext("Message"))}})]},proxy:!0},{key:"content",fn:function(){return[t("input-textarea",{attrs:{rows:"80"},model:{value:e.message,callback:function(l){e.message=l},expression:"message"}})]},proxy:!0}])})],1)]},proxy:!0},{key:"footer:buttons",fn:function(){return[t("ui-button",{attrs:{theme:"primary","validate-group":"editUserMessage"},on:{click:e.updateUserMessage}},[t("span",{domProps:{textContent:e._s(e.$gettext("Save"))}})])]},proxy:!0}])})},n=[],a=s("./js/api/commands/reseller/users/message.js"),i={preload:a.FC,api:[{command:a.FC,bind:"data"}],data(){return{message:"",subject:""}},created(){Object.assign(this,this.$api.data)},methods:{updateUserMessage(){a.o6({subject:this.subject,message:this.message})},async resetToDefault(){await a.TB(),Object.assign(this,await a.FC())}}},c=i,u=s("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),p=(0,u.Z)(c,r,n,!1,null,null,null),m=p.exports}}]);
