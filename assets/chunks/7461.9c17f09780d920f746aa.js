"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7461],{"./js/api/commands/user/handlers.js":function(c,s,e){e.r(s),e.d(s,{createHandler:function(){return d},deleteHandlerExtension:function(){return u},deleteHandlers:function(){return o},getHandlers:function(){return r},getSystemHandlers:function(){return l}});var n=e("./js/api/command/index.js");const r=n.Z.get({id:"HANDLERS",url:"/CMD_HANDLERS",domain:!0,pagination:!0,after:t=>t.flow(m=>({rows:m}),t.processTableInfo("rows"),t.mapProps({rows:t.toArray}))}),l=r.extend({id:"SYSTEM_HANDLERS",params:{action:"system"}}),d=n.Z.post({url:"/CMD_HANDLERS",params:{action:"add"},domain:!0,schema:{name:n.Z.REQUIRED_STRING,extension:n.Z.REQUIRED_STRING}}),o=n.Z.select({url:"/CMD_HANDLERS",params:{action:"multiple",button:"type"},domain:!0}),u=o.extend({params:{button:"extension"},schema:{extension:n.Z.REQUIRED_STRING}})},"./js/pages/user/handlers/system.vue":function(c,s,e){e.r(s),e.d(s,{default:function(){return m}});var n=function(){var a=this,i=a._self._c;return i("app-page",[i("app-page-section",[i("ui-api-table",a._b({attrs:{"equal-width-layout":"","disable-select":""}},"ui-api-table",{command:a.$commands.getSystemHandlers,columns:{handler:a.$gettext("Handler"),extensions:a.$gettext("Extensions")}},!1))],1)],1)},r=[],l=e("./js/api/commands/user/handlers.js"),d={preload:l.getSystemHandlers,commands:{getSystemHandlers:l.getSystemHandlers}},o=d,u=e("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),t=(0,u.Z)(o,n,r,!1,null,null,null),m=t.exports}}]);
