(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(t,e,n){"use strict";var r=window.localStorage,o="chaise_session",c={loadProfile:function(){var t=r.getItem(o);return null!==t?JSON.parse(t):null},saveProfile:function(t){r.setItem(o,JSON.stringify(t))},deleteProfile:function(){r.clear()}};e.a=c},114:function(t,e,n){"use strict";n(30);var r={db:function(t){var e=encodeURIComponent(t);return"/db/".concat(e)},doc:function(t,e){var n=encodeURIComponent(e);return"".concat(this.db(t),"/").concat(n)}};e.a=r},204:function(t,e,n){"use strict";n(11),n(4),n(23),n(67);var r=n(0);r.a.filter("stripDoc",(function(t){var e=JSON.parse(JSON.stringify(t));return delete e._id,delete e._rev,JSON.stringify(e)})),r.a.filter("truncateRev",(function(t){return t.split("-")[0]}))},205:function(t,e,n){"use strict";var r=n(0),o=n(287),c=n.n(o);r.a.use(c.a)},271:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("36dde220",content,!0,{sourceMap:!1})},272:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("dbc82af6",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";var r={methods:{onClickNavDrawerReveal:function(){this.$refs.drawer.show=!this.$refs.drawer.show}}},o=n(45),c=n(59),l=n.n(c),v=n(462),f=n(466),d=n(463),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavDrawer",{ref:"drawer"}),t._v(" "),n("AppBar",{on:{revealNavDrawer:t.onClickNavDrawerReveal}}),t._v(" "),n("v-main",[n("Alert"),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{NavDrawer:n(441).default,AppBar:n(444).default,Alert:n(443).default}),l()(component,{VApp:v.a,VContainer:f.a,VMain:d.a})},296:function(t,e,n){n(297),t.exports=n(298)},334:function(t,e,n){"use strict";n.r(e);var r=n(26),o=(n(70),n(49),n(72),n(106));function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.store,r=e.redirect,c=e.route,null!==(l=o.a.loadProfile())&&n.commit("session/loadServices",l.services),l&&null!==n.state.session.currentService||["/settings","/about"].includes(c.path)||r("/settings");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},347:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("e622d370",content,!0,{sourceMap:!1})},348:function(t,e,n){var r=n(17)(!1);r.push([t.i,"",""]),t.exports=r},396:function(t,e,n){"use strict";n(271)},397:function(t,e,n){var r=n(17)(!1);r.push([t.i,".v-application a,a.nuxt-link-active,a.nuxt-link-exact-active{text-decoration:none}",""]),t.exports=r},398:function(t,e,n){"use strict";n(272)},399:function(t,e,n){var r=n(17)(!1);r.push([t.i,".v-breadcrumbs[data-v-3172b18c]{padding-top:7px}",""]),t.exports=r},419:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{alertData:null}},o={insertAlert:function(t,e){e.alertType||(e.alertType="error"),t.alertData=e},clearAlert:function(t){t.alertData=null}}},420:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"mutations",(function(){return l}));n(213),n(115),n(40),n(4),n(31),n(51),n(39),n(23),n(8),n(52),n(60),n(41);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,v=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){v=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(v)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c=function(){return{dbList:[],currentDB:null,currentID:null,lastDBInfo:null,recents:[],lastSQL:null,lastSQLDBName:null,lastSQLResults:null}},l={reset:function(t){t.dbList=[],t.currentDB=null,t.currentID=null,t.lastDBInfo=null,t.recents=[]},setDbList:function(t,e){t.dbList=e},addDb:function(t,e){t.dbList.push(e),t.dbList.sort()},deleteDb:function(t,e){var n=t.dbList.indexOf(e);t.dbList.splice(n,1)},setCurrentDB:function(t,e){t.currentDB=e},setCurrentID:function(t,e){t.currentID=e},setLastDBInfo:function(t,e){t.lastDBInfo=e},addToRecents:function(t,e){var n,o=r(t.recents);try{for(o.s();!(n=o.n()).done;){if(n.value===e)return}}catch(t){o.e(t)}finally{o.f()}t.recents.unshift(e),t.recents.length>10&&t.recents.splice(10)},setLastSQL:function(t,e){t.lastSQL=e},setLastSQLDBName:function(t,e){t.lastSQLDBName=e},setLastSQLResults:function(t,e){t.lastSQLResults=e}}},421:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c}));n(115);var r=n(106),o=function(){return{services:[],currentService:null}},c={loadServices:function(t,e){t.services=e},addService:function(t,e){t.services.push(e),r.a.saveProfile({services:t.services})},deleteService:function(t,e){for(var n in t.services){if(t.services[n].id===e){t.services.splice(n,1),r.a.saveProfile({services:t.services});break}}},deleteAllServices:function(t){t.services=[],r.a.deleteProfile()},setCurrentService:function(t,e){t.currentService=e}}},441:function(t,e,n){"use strict";n.r(e);var r=n(26),o=(n(70),n(114)),c={data:function(){return{items:[],show:!1}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.abrupt("return",{items:n.state.cache.dbList});case 2:case"end":return e.stop()}}),e)})))()},methods:{chooseRecent:function(t){this.$router.push(o.a.db(t))},onHome:function(){this.$router.push("/")},onSettings:function(){this.$router.push("/settings")},onAbout:function(){this.$router.push("/about")}}},l=n(45),v=n(59),f=n.n(v),d=n(447),h=n(194),m=n(195),_=n(135),D=n(199),S=n(65),w=n(111),y=n(467),$=n(448),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.$store.state.session.currentService?n("v-list-item",[n("v-list-item-avatar",[n("v-icon",[t._v("mdi-cloud")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v("\n        "+t._s(t.$store.state.session.currentService.name)+"\n      ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n        "+t._s(t.$store.state.session.currentService.host)+"\n      ")])],1)],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-list-item",{on:{click:t.onHome}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n          Home\n        ")])],1)],1),t._v(" "),n("v-list-item",{on:{click:t.onSettings}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n          Settings\n        ")])],1)],1),t._v(" "),n("v-list-item",{on:{click:t.onAbout}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n          About\n        ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),t.$store.state.cache.recents.length>0?n("v-subheader",[t._v("Recents")]):t._e(),t._v(" "),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.$store.state.cache.recents,(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.chooseRecent(e)}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-database")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e))])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VDivider:d.a,VIcon:h.a,VList:m.a,VListItem:_.a,VListItemAvatar:D.a,VListItemContent:S.a,VListItemIcon:w.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VNavigationDrawer:y.a,VSubheader:$.a})},442:function(t,e,n){"use strict";n.r(e);var r=n(114),o={props:["title"],data:function(){return{separator:"/"}},computed:{items:function(){var t=[];return this.$store.state.cache.currentDB&&t.push({to:r.a.db(this.$store.state.cache.currentDB),text:this.$store.state.cache.currentDB}),this.$store.state.cache.currentID&&t.push({to:r.a.doc(this.$store.state.cache.currentDB,this.$store.state.cache.currentID),text:this.$store.state.cache.currentID}),t}}},c=(n(396),n(398),n(45)),l=n(59),v=n.n(l),f=n(194),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("NuxtLink",{attrs:{to:"/"}},[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,(function(e){return n("span",{key:e.to},[t._v("\n    "+t._s(t.separator)+"\n    "),e.icon?n("v-icon",[t._v(t._s(e.icon))]):t._e(),t._v(" "),n("NuxtLink",{attrs:{to:e.to}},[t._v(t._s(e.text))])],1)}))],2)}),[],!1,null,"3172b18c",null);e.default=component.exports;v()(component,{VIcon:f.a})},443:function(t,e,n){"use strict";n.r(e);n(66);var r={data:function(){return{showAlert:!1}},computed:{alertData:function(){if(this.$store.state.alert.alertData){this.showAlert=!0;var t=this;setTimeout((function(){t.showAlert=!1}),5e3)}return this.$store.state.alert.alertData}}},o=n(45),c=n(59),l=n.n(c),v=n(465),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.alertData?n("v-alert",{attrs:{type:t.alertData.alertType,dismissible:""},model:{value:t.showAlert,callback:function(e){t.showAlert=e},expression:"showAlert"}},[t._v("\n  "+t._s(t.alertData.alertMessage)+"\n")]):t._e()}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAlert:v.a})},444:function(t,e,n){"use strict";n.r(e);var r=n(45),o=n(59),c=n.n(o),l=n(464),v=n(460),f=n(136),d=n(449),h=n(194),m=n(461),_=n(218),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.session.currentService?n("v-app-bar",{attrs:{color:"blue-grey lighten-4",app:"",dense:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.$emit("revealNavDrawer")}}}),t._v(" "),n("v-toolbar-title",[n("Breadcrumb",{attrs:{title:t.$store.state.session.currentService.name}})],1),t._v(" "),n("v-spacer"),t._v(" "),t.$store.state.session.currentService.readonly?n("v-chip",[t._v("\n    Read only\n  ")]):t._e(),t._v(" "),t.$store.state.session.currentService.readonly||!t.$store.state.cache.currentDB||t.$store.state.cache.currentID?t._e():n("v-btn",{attrs:{nuxt:"",to:"/doc_add",icon:""}},[n("v-icon",[t._v("mdi-file-plus")])],1),t._v(" "),t.$store.state.session.currentService.readonly||t.$store.state.cache.currentDB?t._e():n("v-btn",{attrs:{nuxt:"",to:"/db_add",icon:""}},[n("v-icon",[t._v("mdi-database-plus")])],1),t._v(" "),n("v-btn",{attrs:{nuxt:"",to:"/db_query",icon:""}},[n("v-icon",[t._v("mdi-database-search")])],1),t._v(" "),n("v-btn",{attrs:{nuxt:"",to:"/settings",icon:""}},[n("v-icon",[t._v("mdi-cog")])],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;c()(component,{Breadcrumb:n(442).default}),c()(component,{VAppBar:l.a,VAppBarNavIcon:v.a,VBtn:f.a,VChip:d.a,VIcon:h.a,VSpacer:m.a,VToolbarTitle:_.a})}},[[296,20,6,21]]]);