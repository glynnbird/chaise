(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{180:function(t,e,n){"use strict";n(6),n(30),n(60);var r=n(0);r.a.filter("stripDoc",(function(t){var e=JSON.parse(JSON.stringify(t));return delete e._id,delete e._rev,JSON.stringify(e)})),r.a.filter("truncateRev",(function(t){return t.split("-")[0]}))},181:function(t,e,n){"use strict";var r=n(0),o=n(255),c=n.n(o);r.a.use(c.a)},230:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7388ab72",content,!0,{sourceMap:!1})},237:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("36dde220",content,!0,{sourceMap:!1})},238:function(t,e,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("dcee301a",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";var r={data:function(){return{}},methods:{onClickNavbarReveal:function(){this.$refs.drawer.show=!this.$refs.drawer.show,console.log(this.$refs.drawer.show)}}},o=n(50),c=n(53),l=n.n(c),v=n(400),f=n(404),d=n(401),h=n(113),m=n(407),_=n(170),D=n(402),S=n(403),y=n(253),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavDrawer",{ref:"drawer"}),t._v(" "),t.$store.state.session.currentService?n("v-app-bar",{attrs:{app:"",dense:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.onClickNavbarReveal.apply(null,arguments)}}}),t._v(" "),n("v-toolbar-title",[n("Breadcrumb",{attrs:{title:t.$store.state.session.currentService.name}})],1),t._v(" "),n("v-spacer"),t._v(" "),this.$store.state.cache.currentDB?n("v-btn",{attrs:{nuxt:"",to:"/doc_add",icon:""}},[n("v-icon",[t._v("mdi-file-plus")])],1):t._e(),t._v(" "),this.$store.state.cache.currentDB?t._e():n("v-btn",{attrs:{nuxt:"",to:"/db_add",icon:""}},[n("v-icon",[t._v("mdi-database-plus")])],1),t._v(" "),n("v-btn",{attrs:{nuxt:"",to:"/db_query",icon:""}},[n("v-icon",[t._v("mdi-crosshairs-question")])],1),t._v(" "),n("v-btn",{attrs:{nuxt:"",to:"/settings",icon:""}},[n("v-icon",[t._v("mdi-cog")])],1)],1):t._e(),t._v(" "),n("v-main",[n("Alert"),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{NavDrawer:n(386).default,Breadcrumb:n(387).default,Alert:n(388).default}),l()(component,{VApp:v.a,VAppBar:f.a,VAppBarNavIcon:d.a,VBtn:h.a,VContainer:m.a,VIcon:_.a,VMain:D.a,VSpacer:S.a,VToolbarTitle:y.a})},265:function(t,e,n){n(266),t.exports=n(267)},283:function(t,e,n){"use strict";n.r(e);var r=n(21),o=(n(63),n(93));function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.store,r=e.redirect,c=e.route,null!==(l=o.a.loadProfile())&&n.commit("session/loadServices",l.services),l&&null!==n.state.session.currentService||"/settings"!==c.path&&r("/settings");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},291:function(t,e,n){"use strict";n(230)},292:function(t,e,n){var r=n(14)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},297:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("e622d370",content,!0,{sourceMap:!1})},298:function(t,e,n){var r=n(14)(!1);r.push([t.i,"",""]),t.exports=r},346:function(t,e,n){"use strict";n(237)},347:function(t,e,n){var r=n(14)(!1);r.push([t.i,".v-application a,a.nuxt-link-active,a.nuxt-link-exact-active{color:#000;text-decoration:none}",""]),t.exports=r},348:function(t,e,n){"use strict";n(238)},349:function(t,e,n){var r=n(14)(!1);r.push([t.i,".v-breadcrumbs[data-v-0daf938f]{padding-top:7px}",""]),t.exports=r},365:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{alertData:null}},o={insertAlert:function(t,e){e.alertType||(e.alertType="error"),t.alertData=e},clearAlert:function(t){t.alertData=null}}},366:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"mutations",(function(){return l}));n(187),n(98),n(34),n(17),n(26),n(44),n(32),n(5),n(39),n(51),n(35);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,v=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){v=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(v)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c=function(){return{dbList:[],currentDB:null,currentID:null,lastDBInfo:null,recents:[],lastSQL:null,lastSQLDBName:null,lastSQLResults:null}},l={reset:function(t){t.dbList=[],t.currentDB=null,t.currentID=null,t.lastDBInfo=null,t.recents=[]},setDbList:function(t,e){t.dbList=e},addDb:function(t,e){t.dbList.push(e),t.dbList.sort()},deleteDb:function(t,e){var n=t.dbList.indexOf(e);t.dbList.splice(n,1)},setCurrentDB:function(t,e){t.currentDB=e},setCurrentID:function(t,e){t.currentID=e},setLastDBInfo:function(t,e){t.lastDBInfo=e},addToRecents:function(t,e){var n,o=r(t.recents);try{for(o.s();!(n=o.n()).done;){if(n.value===e)return}}catch(t){o.e(t)}finally{o.f()}t.recents.unshift(e),t.recents.length>10&&t.recents.splice(10)},setLastSQL:function(t,e){t.lastSQL=e},setLastSQLDBName:function(t,e){t.lastSQLDBName=e},setLastSQLResults:function(t,e){t.lastSQLResults=e}}},367:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c}));n(98);var r=n(93),o=function(){return{services:[],currentService:null}},c={loadServices:function(t,e){t.services=e},addService:function(t,e){t.services.push(e),r.a.saveProfile({services:t.services})},deleteService:function(t,e){for(var n in t.services){if(t.services[n].id===e){t.services.splice(n,1),r.a.saveProfile({services:t.services});break}}},deleteAllServices:function(t){t.services=[],r.a.deleteProfile()},setCurrentService:function(t,e){t.currentService=e}}},386:function(t,e,n){"use strict";n.r(e);var r=n(21),o=(n(63),{data:function(){return{items:[],show:!1}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,console.log("store",n.state.cache.dbList),e.abrupt("return",{items:n.state.cache.dbList});case 3:case"end":return e.stop()}}),e)})))()},methods:{chooseRecent:function(t){this.$router.push("/db/"+encodeURIComponent(t))},onHome:function(){this.$router.push("/")},onSettings:function(){this.$router.push("/settings")}}}),c=n(50),l=n(53),v=n.n(l),f=n(389),d=n(170),h=n(171),m=n(112),_=n(175),D=n(57),S=n(95),y=n(405),w=n(390),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.$store.state.session.currentService?n("v-list-item",[n("v-list-item-avatar",[n("v-icon",[t._v("mdi-cloud")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v("\n        "+t._s(t.$store.state.session.currentService.name)+"\n      ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n        "+t._s(t.$store.state.session.currentService.host)+"\n      ")])],1)],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-list-item",{on:{click:t.onHome}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n          Home\n        ")])],1)],1),t._v(" "),n("v-list-item",{on:{click:t.onSettings}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n          Settings\n        ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),t.$store.state.cache.recents.length>0?n("v-subheader",[t._v("Recents")]):t._e(),t._v(" "),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.$store.state.cache.recents,(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.chooseRecent(e)}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-database")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e))])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VDivider:f.a,VIcon:d.a,VList:h.a,VListItem:m.a,VListItemAvatar:_.a,VListItemContent:D.a,VListItemIcon:S.a,VListItemSubtitle:D.b,VListItemTitle:D.c,VNavigationDrawer:y.a,VSubheader:w.a})},387:function(t,e,n){"use strict";n.r(e);n(25);var r={props:["title"],data:function(){return{separator:"/"}},computed:{items:function(){var t,e=[];if(this.$store.state.cache.currentDB&&(t=encodeURIComponent(this.$store.state.cache.currentDB),e.push({to:"/db/".concat(t),text:t})),this.$store.state.cache.currentID){var n=encodeURIComponent(this.$store.state.cache.currentID);e.push({to:"/db/".concat(t,"/").concat(n),text:this.$store.state.cache.currentID})}return e}}},o=(n(346),n(348),n(50)),c=n(53),l=n.n(c),v=n(170),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("NuxtLink",{attrs:{to:"/"}},[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,(function(e){return n("span",{key:e.to},[t._v("\n    "+t._s(t.separator)+"\n    "),e.icon?n("v-icon",[t._v(t._s(e.icon))]):t._e(),t._v(" "),n("NuxtLink",{attrs:{to:e.to}},[t._v(t._s(e.text))])],1)}))],2)}),[],!1,null,"0daf938f",null);e.default=component.exports;l()(component,{VIcon:v.a})},388:function(t,e,n){"use strict";n.r(e);n(58);var r={data:function(){return{showAlert:!1}},computed:{alertData:function(){if(this.$store.state.alert.alertData){this.showAlert=!0;var t=this;setTimeout((function(){t.showAlert=!1}),5e3)}return this.$store.state.alert.alertData}}},o=n(50),c=n(53),l=n.n(c),v=n(406),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.alertData?n("v-alert",{attrs:{type:t.alertData.alertType,dismissible:""},model:{value:t.showAlert,callback:function(e){t.showAlert=e},expression:"showAlert"}},[t._v("\n  "+t._s(t.alertData.alertMessage)+"\n")]):t._e()}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAlert:v.a})},78:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(291),n(50)),c=n(53),l=n.n(c),v=n(400),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})},93:function(t,e,n){"use strict";var r=window.localStorage,o="chaise_session",c={loadProfile:function(){var t=r.getItem(o);return null!==t?JSON.parse(t):null},saveProfile:function(t){r.setItem(o,JSON.stringify(t))},deleteProfile:function(){r.clear()}};e.a=c}},[[265,18,6,19]]]);