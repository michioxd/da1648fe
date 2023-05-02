"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5747],{"./js/pages/admin/brute-force-monitor/user_list.vue":function(S,o,r){r.r(o),r.d(o,{default:function(){return k}});var i=function(){var e=this,t=e._self._c;return t("app-page",{attrs:{id:"brute-force-monitor"},scopedSlots:e._u([{key:"default",fn:function(){return[t("tabs",{attrs:{id:"failed-usernames"}},[t("ui-api-table",e._b({on:{"action:skip":function(s){e.$dialog("ADD_USERS_TO_SKIP_LIST").open()}},scopedSlots:e._u([{key:"col:user",fn:function({user:s}){return[t("ui-link",{attrs:{name:"admin/brute-force-monitor",query:{user:s}}},[e._v(`
                        `+e._s(s)+`
                    `)])]}},{key:"col:first_entry",fn:function({first_entry:s}){return[e._v(`
                    `+e._s(e.date(s,"datetime"))+`
                `)]}},{key:"col:last_entry",fn:function({last_entry:s}){return[e._v(`
                    `+e._s(e.date(s,"datetime"))+`
                `)]}},{key:"col:notified",fn:function({notified:s}){return[t("ui-badge",{attrs:{theme:s?"primary":"danger",size:"small"}},[t("span",{domProps:{textContent:e._s(s?e.$gettext("Yes"):e.$gettext("No"))}})])]}}]),model:{value:e.select,callback:function(s){e.select=s},expression:"select"}},"ui-api-table",{command:e.$commands.getUserList,rowID:"user",columns:{user:{label:e.$gettext("User"),grow:!0},login_failures:e.$gettext("Login Failures"),first_entry:{label:e.$gettext("First")},last_entry:{label:e.$gettext("Last")},notified:e.$gettext("Notified")},actions:{skip:e.$gettext("Skip")},initialSort:{key:"login_failures",order:"DESC"}},!1))],1),e._v(" "),t("skip-users-dialog",e._b({},"skip-users-dialog",{select:e.select},!1))]},proxy:!0}])})},l=[],n=r("./js/api/commands/admin/brute-force-monitor.js"),u=r("./js/composables/filters.ts"),d=r("./js/pages/admin/brute-force-monitor/_components/tabs.vue"),c=function(){var e=this,t=e._self._c;return t("ui-dialog",{attrs:{id:"ADD_USERS_TO_SKIP_LIST",theme:"danger",title:e.$gettext("Add to skip list")},scopedSlots:e._u([{key:"content",fn:function(){return[t("span",{domProps:{textContent:e._s(e.$ngettext("Are you sure you want to add selected user to skip list?","Are you sure you want to add selected users to skip list?",e.select.length))}})]},proxy:!0},{key:"buttons",fn:function(){return[t("ui-button",{attrs:{theme:"danger"},on:{click:e.submit}},[t("span",{domProps:{textContent:e._s(e.$gettext("Add"))}})])]},proxy:!0}])})},_=[],p={props:{select:{type:Array,required:!0,default:()=>[]}},methods:{submit(){(0,n.T0)({user:this.select})}}},m=p,a=r("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),f=(0,a.Z)(m,c,_,!1,null,null,null),g=f.exports,v={preload:[n.JP,n.lE],commands:{getUserList:n.lE},components:{Tabs:d.Z,SkipUsersDialog:g},data:()=>({select:[]}),methods:{date:u.hT}},y=v,b=(0,a.Z)(y,i,l,!1,null,null,null),k=b.exports}}]);
