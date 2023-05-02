"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7984],{"./js/pages/admin/history.vue":function(v,r,s){s.r(r),s.d(r,{default:function(){return m}});var n=function(){var t=this,e=t._self._c;return e("app-page",{scopedSlots:t._u([{key:"default",fn:function(){return[e("app-page-section",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center",main:"between"},expression:"{ cross: 'center', main: 'between' }"},{name:"gutter",rawName:"v-gutter:padding",value:4,expression:"4",arg:"padding"}],staticClass:"filters"},[e("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter",value:1,expression:"1"}]},[e("span",{staticClass:"txt:bold",domProps:{textContent:t._s(t.$gettext("Show as:"))}}),t._v(" "),e("input-radio",{attrs:{value:"table"},model:{value:t.showAs,callback:function(a){t.showAs=a},expression:"showAs"}},[e("span",{domProps:{textContent:t._s(t.$gettext("Table"))}})]),t._v(" "),e("input-radio",{attrs:{value:"chart"},model:{value:t.showAs,callback:function(a){t.showAs=a},expression:"showAs"}},[e("span",{domProps:{textContent:t._s(t.$gettext("Chart"))}})])],1)]),t._v(" "),e("transition",{attrs:{name:"fadeBounce"}},[t.showAs==="table"?e("history-table",{key:"table",attrs:{history:t.history,"hide-links":""}}):e("history-chart",t._b({key:"chart",attrs:{"hide-links":""}},"history-chart",{history:t.history,type:t.type},!1))],1)]},proxy:!0}])})},i=[],o=s("./js/api/commands/history.js"),l=s("./js/components/local/history/table.vue"),u=s("./js/components/local/history/chart.vue"),c={preload:o.pB,api:[{command:o.pB,bind:"history"}],components:{HistoryChart:u.Z,HistoryTable:l.Z},data(){return{showAs:"table",show:{bandwidth:!0,quota:!0,inode:!1},type:"volumes"}},computed:{history(){return this.$api.history}}},h=c,d=s("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),p=(0,d.Z)(h,n,i,!1,null,null,null),m=p.exports}}]);
