"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8219],{"./js/components/local/layouts/sidebar-layout.vue":function(E,_,o){o.r(_),o.d(_,{default:function(){return I}});var g=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"row"},expression:"{ dir: 'row' }"}],staticClass:"app-content width:100% --sidebar-layout",class:{"-is-blurred":t.isBlurred}},[s("Aside",{ref:"aside"}),t._v(" "),s("main",[s("Header"),t._v(" "),t._t("page:content",function(){return[s("Content")]})],2)],1)},m=[],l=o("./js/vue-globals/helpers.js"),y=function(){var t=this,s=t._self._c;return s("aside",{staticClass:"app-sidebar"},[s("div",{staticClass:"app-sidebar-header",class:{"--white-background":t.whiteBackground}},[s("ui-link",{staticClass:"app-sidebar-header-logo no:hover",attrs:{path:"/",title:"DirectAdmin"}})],1),t._v(" "),s("MainMenu",{key:t.$_useStore("user").mode,on:{update:function(z){return t.$emit("update")}}}),t._v(" "),s("div",{staticClass:"app-sidebar-footer"},[t.showLanguageSelector?s("div",{staticClass:"app-sidebar-language"},[s("language-selector")],1):t._e(),t._v(" "),s("div",{staticClass:"app-sidebar-copyright"},[s("span",{domProps:{textContent:t._s(t.$gettextInterpolate(t.$gettext("\xA9 %{ year } JBMC Software"),{year:t.year}))}})])])],1)},f=[],h=o("./js/components/local/layouts/sidebar/main-menu.vue"),C=function(){var t=this,s=t._self._c;return s("div",{staticClass:"app-sidebar-language-selector",class:{"--open":t.isOpen}},[s("div",{staticClass:"current-language",on:{click:t.toggleDropdown}},[t._v(`
        `+t._s(t.languages[t.language])+`
        `),s("ui-icon",{class:{"rotate:180":t.isOpen},attrs:{id:"caret-down",size:8}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"language-dropdown"},t._l(t.languages,function(z,T){return s("span",{key:T,staticClass:"language",class:{"--current":z===T},on:{click:function(Y){return t.setLanguage(T)}}},[t._v(`
            `+t._s(z)+`
        `)])}),0)])},x=[],u=o("../node_modules/pinia/dist/pinia.mjs"),b=o("./js/modules/dom/index.js"),v=o("./js/stores/index.ts"),w={data:()=>({isOpen:!1}),computed:(0,u.rn)((0,v.Kz)(PiniaStores.LANG),{language:"current",languages:"availableLanguages"}),methods:{setLanguage(d){(0,v.oR)(PiniaStores.LANG).setLanguage(d),this.isOpen=!1},toggleDropdown(){this.isOpen=!this.isOpen,this.isOpen&&(0,b.J)([this.$el],()=>{this.isOpen=!1})}}},j=w,c=o("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),N=(0,c.Z)(j,C,x,!1,null,null,null),R=N.exports,k={name:"SidebarAside",components:{MainMenu:h.Z,LanguageSelector:R},data:()=>({rand:Date.now()}),computed:{whiteBackground(){return this.$_ctx.options["sidebar-layout/force-white-sidebar-header"]},year(){return new Date().getFullYear()},showLanguageSelector(){return(0,v.oR)(PiniaStores.LANG).showSelector}},watch:{userName(){this.rand=Date.now()}}},S=k,L=(0,c.Z)(S,y,f,!1,null,null,null),Z=L.exports,$=o("./js/components/local/layouts/shared/content.vue"),M=function(){var t=this,s=t._self._c;return s("div",{staticClass:"app-header"},[s("search",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}]}),t._v(" "),s("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"row",cross:"center"},expression:"{ dir: 'row', cross: 'center' }"}]},[s("AccessLevelDropdown"),t._v(" "),t.$_useStore("user").mode==="user"?s("DomainsDropdown",{directives:[{name:"margin",rawName:"v-margin",value:[0,0,0,1],expression:"[0, 0, 0, 1]"}]}):t._e(),t._v(" "),s("app-task-list",{directives:[{name:"margin",rawName:"v-margin:left",value:2,expression:"2",arg:"left"}]}),t._v(" "),s("UserBar")],1)],1)},O=[],D=o("./js/components/local/layouts/shared/user-bar.vue"),A=o("./js/components/local/layouts/shared/domains-dropdown.vue"),B=o("./js/components/local/layouts/shared/search.vue"),P=o("./js/components/local/layouts/shared/access-level-dropdown.vue"),F={components:{UserBar:D.Z,DomainsDropdown:A.Z,Search:B.Z,AccessLevelDropdown:P.Z},computed:{layout:(0,l.YM)("skin/layout")}},i=F,e=(0,c.Z)(i,M,O,!1,null,null,null),a=e.exports,n={components:{Content:$.Z,Header:a,Aside:Z},props:{hasRouteLoaded:Boolean,isBlurred:Boolean},mounted(){window.document.body.classList.add("--sidebar-layout"),l.uY.emit("layout:mounted")},destroyed(){window.document.body.classList.remove("--sidebar-layout")}},r=n,p=o("./sass/layouts/sidebar/index.scss?vue&type=style&index=0&prod&lang=scss&"),G=(0,c.Z)(r,g,m,!1,null,null,null),I=G.exports},"./js/components/local/layouts/sidebar/main-menu.vue":function(E,_,o){o.d(_,{Z:function(){return F}});var g=function(){var e=this,a=e._self._c,n=e._self._setupProxy;return a("div",{staticClass:"app-sidebar-navigation"},[a("div",{staticClass:"app-sidebar-navigation-filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:n.navigation.searchTerm,expression:"navigation.searchTerm"}],attrs:{type:"text",placeholder:e.$gettext("Navigation filter")},domProps:{value:n.navigation.searchTerm},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:n.navigation.openFirstResult.apply(null,arguments)},input:function(r){r.target.composing||e.$set(n.navigation,"searchTerm",r.target.value)}}}),e._v(" "),a("ui-icon",{attrs:{id:"search",theme:"light",size:18}})],1),e._v(" "),n.navigation.searchActive?a(n.MenuSearchCategory,{attrs:{"have-results":n.navigation.haveSearchResults},on:{"clear-search-results":function(r){n.navigation.searchTerm=""}}},e._l(n.navigation.searchResults,function(r){return a(n.MenuEntry,{key:r.id,attrs:{entry:r}})}),1):e._l(n.navigation.categories,function(r){return a(n.MenuCategory,{key:r.id,attrs:{category:r,"is-opened":n.openedCategory===r.id},on:{toggle:function(p){return n.toggleCategory(r.id)}}},e._l(r.entries,function(p){return a(n.MenuEntry,{key:p.id,attrs:{entry:p}})}),1)})],2)},m=[],l=o("../node_modules/vue/dist/vue.common.prod.js"),y=function(){var e=this,a=e._self._c,n=e._self._setupProxy;return a("div",{staticClass:"navigation-category",class:{"--opened":e.isOpened}},[a("div",{staticClass:"navigation-category-header",on:{click:function(r){return n.emit("toggle")}}},[a("img",{staticClass:"navigation-category-icon",attrs:{src:n.useCategoryIcon(n.props.category.icon),width:"20",height:"20px"}}),e._v(" "),a("ui-link",e._b({staticClass:"navigation-category-name"},"ui-link",e.category.link,!1),[a("ui-updates-bubble",{attrs:{label:e.category.label,content:e.category.updates,float:!1}})],1),e._v(" "),e.category.link.path?e._e():a("ui-icon",{staticClass:"navigation-category-caret",attrs:{id:"caret-down",size:8,theme:"light"}})],1),e._v(" "),a("transition",{attrs:{name:"fade"}},[a("nav",{staticClass:"navigation-category-entries",style:{"--entries-count":e.category.entries.length}},[e._t("default")],2)])],1)},f=[],h=o("./js/composables/icons.ts"),C=(0,l.defineComponent)({__name:"category",props:{category:null,isOpened:{type:Boolean}},emits:["toggle"],setup(i,{emit:e}){return{__sfc:!0,props:i,emit:e,useCategoryIcon:h.Sy}}}),x=C,u=o("../node_modules/vue-loader/lib/runtime/componentNormalizer.js"),b=(0,u.Z)(x,y,f,!1,null,null,null),v=b.exports,w=function(){var e=this,a=e._self._c,n=e._self._setupProxy;return a("ui-link",e._b({staticClass:"navigation-category-entry",class:{"--active":e.entry.active}},"ui-link",e.entry.link,!1),[a("ui-updates-bubble",{attrs:{label:e.entry.label,content:e.entry.updates,float:!1}})],1)},j=[],c=(0,l.defineComponent)({__name:"entry",props:{entry:null},setup(i){return{__sfc:!0}}}),N=c,R=(0,u.Z)(N,w,j,!1,null,null,null),k=R.exports,S=function(){var e=this,a=e._self._c,n=e._self._setupProxy;return a("div",{staticClass:"navigation-category"},[a("div",{staticClass:"navigation-category-header"},[a("ui-icon",{staticClass:"navigation-category-icon",attrs:{id:"search",color:"#fff",size:20}}),e._v(" "),a("span",{staticClass:"navigation-category-name",domProps:{textContent:e._s(e.$gettext("Search Results"))}}),e._v(" "),a("ui-button-icon",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{shrink:!1},expression:"{ shrink: false }"},{name:"padding",rawName:"v-padding",value:.5,expression:"0.5"}],ref:"close",attrs:{theme:"light",icon:"close",title:e.$gettext("Close")},on:{click:function(r){return n.emit("clear-search-results")}}})],1),e._v(" "),e.haveResults?a("nav",{staticClass:"navigation-category-entries",style:{height:"auto"}},[e._t("default")],2):a("div",{staticClass:"navigation-category-empty"},[a("span",{domProps:{textContent:e._s(e.$gettext("No Results"))}})])])},L=[],Z=(0,l.defineComponent)({__name:"search-category",props:{haveResults:{type:Boolean}},emits:["clear-search-results"],setup(i,{emit:e}){return{__sfc:!0,emit:e}}}),$=Z,M=(0,u.Z)($,S,L,!1,null,null,null),O=M.exports,D=o("./js/composables/index.ts"),A=(0,l.defineComponent)({__name:"main-menu",setup(i){const e=(0,D.oR)("navigation"),a=(0,l.ref)(null);return{__sfc:!0,navigation:e,openedCategory:a,toggleCategory:r=>{a.value=a.value===r?null:r},MenuCategory:v,MenuEntry:k,MenuSearchCategory:O}}}),B=A,P=(0,u.Z)(B,g,m,!1,null,null,null),F=P.exports}}]);
