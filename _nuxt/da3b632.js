(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{414:function(e,t,r){"use strict";var n,o,c,l,f,d,h,m,v,y=r(21),w=(r(25),r(62),r(98).default),R=function(){var e=Object(y.a)(regeneratorRuntime.mark((function e(t,r,n,o,data){var c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:r,baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:n,params:o,data:data,withCredentials:!0},e.prev=1,e.next=4,w(c);case 4:return l=e.sent,e.abrupt("return",l.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r,n,o,c){return e.apply(this,arguments)}}(),_={loadDbs:(v=Object(y.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,"get","/_all_dbs",{},void 0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return v.apply(this,arguments)}),getDBInfo:(m=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/".concat(encodeURIComponent(r)),e.next=3,R(t,"get",n,{},void 0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return m.apply(this,arguments)}),getDocs:(h=Object(y.a)(regeneratorRuntime.mark((function e(t,r,n,o){var c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o||(o=1),c="/".concat(encodeURIComponent(r),"/_all_docs"),l={include_docs:!0,skip:20*(o-1),limit:20},n&&(l.startkey=JSON.stringify(n),l.endkey=JSON.stringify(n+"z")),e.next=6,R(t,"get",c,l,void 0);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t,r,n){return h.apply(this,arguments)}),getDoc:(d=Object(y.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r),"/").concat(n),e.next=3,R(t,"get",o,{},void 0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return d.apply(this,arguments)}),putDB:(f=Object(y.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r)),e.next=3,R(t,"put",o,n,void 0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return f.apply(this,arguments)}),putDoc:(l=Object(y.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r)),e.next=3,R(t,"put",o,{},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return l.apply(this,arguments)}),deleteDoc:(c=Object(y.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r),"/").concat(n._id),e.next=3,R(t,"delete",o,{rev:n._rev},void 0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return c.apply(this,arguments)}),explain:(o=Object(y.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r),"/_explain"),e.next=3,R(t,"post",o,{},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return o.apply(this,arguments)}),find:(n=Object(y.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r),"/_find"),e.next=3,R(t,"post",o,{},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return n.apply(this,arguments)})};t.a=_},453:function(e,t,r){"use strict";r.r(t);r(34),r(26),r(44),r(5),r(39),r(51);var n=r(18),o=r(117),c=r(21);r(62),r(25),r(17),r(459),r(32),r(460),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(468),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(35),r(63),r(8);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var d,h={props:["docs","dbName","showDoc"],data:function(){return{itemsPerPage:20}},methods:{onClickDoc:(d=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=encodeURIComponent(this.dbName),n=encodeURIComponent(t._id),this.$router.push("/db/".concat(r,"/").concat(n));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},computed:{headers:function(){var e,t=new Set,r=l(this.docs);try{for(r.s();!(e=r.n()).done;)for(var c=e.value,f=0,d=Object.keys(c);f<d.length;f++){var h=d[f];"_rev"!==h&&"object"!==Object(n.a)(c[h])&&t.add(h)}}catch(e){r.e(e)}finally{r.f()}return Object(o.a)(t).map((function(e){return{text:e,value:e}}))}}},m=r(50),v=r(64),y=r.n(v),w=r(738),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.docs,"items-per-page":e.itemsPerPage,"hide-default-footer":"","disable-sort":"",dense:""},on:{"click:row":e.onClickDoc}})}),[],!1,null,null,null);t.default=component.exports;y()(component,{VDataTable:w.a})},454:function(e,t,r){"use strict";r.r(t);var n={props:["isBusy"]},o=r(50),c=r(64),l=r.n(c),f=r(411),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isBusy?r("div",{staticClass:"text-center"},[r("v-progress-linear",{attrs:{indeterminate:"",color:"light-blue"}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports;l()(component,{VProgressLinear:f.a})},743:function(e,t,r){"use strict";r.r(t);var n,o,c,l,f=r(21),d=(r(62),r(6),r(63),r(414)),h={data:function(){return{dbName:"",docs:[],filter:"",page:1,busy:!1}},asyncData:function(e){return Object(f.a)(regeneratorRuntime.mark((function t(){var r,n,o,filter,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.route,o=n.params.id,r.commit("cache/setCurrentID",null),r.commit("cache/setCurrentDB",o),r.commit("cache/addToRecents",o),filter=n.query.filter||"",c=n.query.page||1,t.next=9,d.a.getDocs(r,o,filter,c);case 9:return l=t.sent,t.abrupt("return",{dbName:o,filter:filter,docs:l.rows,page:c});case 11:case"end":return t.stop()}}),t)})))()},methods:{onClear:(l=Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.filter="",e.next=3,this.onChangeFilter();case 3:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),onChangeFilter:(c=Object(f.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.filter?this.$router.push({path:this.$route.path,query:{filter:this.filter,page:this.page}}):this.$router.push({path:this.$route.path,query:{page:this.page}}),this.busy=!0,e.next=4,d.a.getDocs(this.$store,this.dbName,this.filter,this.page);case 4:t=e.sent,this.busy=!1,this.docs=t.rows;case 7:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),next:(o=Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.page++,this.onChangeFilter();case 2:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),prev:(n=Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.page--,this.onChangeFilter();case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),sql:function(){this.$store.commit("cache/setLastSQL","SELECT * FROM ".concat(this.dbName)),this.$store.commit("cache/setLastSQLResults",null),this.$store.commit("cache/setLastSQLDBName",this.dbName),this.$router.push("/db_query")}},computed:{massagedDocs:function(){return this.docs.map((function(e){return Object.assign({_id:e.id,_rev:e.value.rev},e.doc)}))}}},m=r(50),v=r(64),y=r.n(v),w=r(112),R=r(169),_=r(402),x=r(733),k=r(49),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{color:"blue-grey lighten-5"}},[e.docs.length>0||e.filter?r("v-text-field",{attrs:{"prepend-icon":"mdi-filter",hint:"filter document list by start of _id",clearable:"","single-line":""},on:{change:function(t){e.page=1,e.onChangeFilter()},"click:clear":e.onClear},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}):e._e(),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{small:""},on:{click:e.sql}},[e._v("SQL")]),e._v(" "),r("v-btn",{attrs:{small:"",icon:"",disabled:e.page<2},on:{click:e.prev}},[r("v-icon",[e._v("mdi-chevron-left")])],1),e._v(" "),r("v-btn",{attrs:{small:"",outlined:"",disabled:""}},[e._v(e._s(e.page))]),e._v(" "),r("v-btn",{attrs:{small:"",icon:"",disabled:e.docs.length<20},on:{click:e.next}},[r("v-icon",[e._v("mdi-chevron-right")])],1),e._v("\n     \n    "),r("v-btn",{attrs:{small:"",icon:""},on:{click:e.onChangeFilter}},[r("v-icon",[e._v("mdi-refresh")])],1)],1),e._v(" "),r("br"),e._v(" "),0!==e.docs.length||e.filter?e._e():r("div",[e._v("\n    This database currently has no data. "),r("NuxtLink",{attrs:{to:"/doc_add"}},[e._v("Add a document")])],1),e._v(" "),0===e.docs.length&&e.filter?r("div",[e._v("\n    No matching documents\n  ")]):e._e(),e._v(" "),r("DocTable",{attrs:{docs:e.massagedDocs,dbName:e.dbName,showDoc:"true"}}),e._v(" "),r("Busy",{attrs:{isBusy:e.busy}})],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{DocTable:r(453).default,Busy:r(454).default}),y()(component,{VBtn:w.a,VIcon:R.a,VSpacer:_.a,VTextField:x.a,VToolbar:k.a})}}]);