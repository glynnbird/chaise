(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10],{414:function(e,t,r){"use strict";var n,o,c,l,d,h,m,f,v,w=r(21),R=(r(25),r(62),r(98).default),x={loadDbs:(v=Object(w.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/_all_dbs",withCredentials:!0},e.prev=1,e.next=4,R(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e){return v.apply(this,arguments)}),getDBInfo:(f=Object(w.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,R(n);case 4:return o=e.sent,e.abrupt("return",o.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t){return f.apply(this,arguments)}),getDocs:(m=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n,o){var c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o||(o=1),c={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r)+"/_all_docs",params:{include_docs:!0,skip:20*(o-1),limit:20},withCredentials:!0},n&&(c.params.startkey=JSON.stringify(n),c.params.endkey=JSON.stringify(n+"z")),e.prev=3,e.next=6,R(c);case 6:return l=e.sent,e.abrupt("return",l.data);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[3,10]])}))),function(e,t,r,n){return m.apply(this,arguments)}),getDoc:(h=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r)+"/"+encodeURIComponent(n),withCredentials:!0},e.prev=1,e.next=4,R(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return h.apply(this,arguments)}),putDB:(d=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"put",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},params:n||{},url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,R(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return d.apply(this,arguments)}),putDoc:(l=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,R(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return l.apply(this,arguments)}),deleteDoc:(c=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"delete",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/").concat(n._id),params:{rev:n._rev},withCredentials:!0},e.prev=1,e.next=4,R(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return c.apply(this,arguments)}),explain:(o=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/_explain"),withCredentials:!0},e.prev=1,e.next=4,R(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return o.apply(this,arguments)}),find:(n=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/_find"),withCredentials:!0},e.prev=1,e.next=4,R(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return n.apply(this,arguments)})};t.a=x},451:function(e,t,r){"use strict";r.r(t);r(34),r(26),r(44),r(5),r(39),r(51);var n=r(18),o=r(117),c=r(21);r(62),r(25),r(17),r(455),r(32),r(456),r(457),r(458),r(459),r(460),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(468),r(469),r(470),r(471),r(35),r(63),r(8);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var h,m={props:["docs","dbName","showDoc"],data:function(){return{itemsPerPage:20}},methods:{onClickDoc:(h=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=encodeURIComponent(this.dbName),n=encodeURIComponent(t._id),this.$router.push("/db/".concat(r,"/").concat(n));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},computed:{headers:function(){var e,t=new Set,r=l(this.docs);try{for(r.s();!(e=r.n()).done;)for(var c=e.value,d=0,h=Object.keys(c);d<h.length;d++){var m=h[d];"_rev"!==m&&"object"!==Object(n.a)(c[m])&&t.add(m)}}catch(e){r.e(e)}finally{r.f()}return Object(o.a)(t).map((function(e){return{text:e,value:e}}))}}},f=r(50),v=r(64),w=r.n(v),R=r(737),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.docs,"items-per-page":e.itemsPerPage,"hide-default-footer":"","disable-sort":"",dense:""},on:{"click:row":e.onClickDoc}})}),[],!1,null,null,null);t.default=component.exports;w()(component,{VDataTable:R.a})},452:function(e,t,r){"use strict";r.r(t);var n={props:["isBusy"]},o=r(50),c=r(64),l=r.n(c),d=r(411),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isBusy?r("div",{staticClass:"text-center"},[r("v-progress-linear",{attrs:{indeterminate:"",color:"light-blue"}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports;l()(component,{VProgressLinear:d.a})},739:function(e,t,r){"use strict";r.r(t);var n,o,c,l,d,h=r(21),m=(r(43),r(66),r(116),r(62),r(414)),f=r(595),v=r.n(f),w={data:function(){return{sql:"",compiled:null,dbName:"",explain:null,appendIcon:"",data:null,page:1,nextBookmark:null,busy:!1}},asyncData:(d=Object(h.a)(regeneratorRuntime.mark((function e(t){var r,n,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=r.state.cache.lastSQL,data=r.state.cache.lastSQLResults,o=r.state.cache.lastSQLDBName,e.abrupt("return",{sql:n,data:data,dbName:o});case 5:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)}),mounted:(l=Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.data){e.next=3;break}return e.next=3,this.onResetSQL();case 3:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),methods:{next:(c=Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.page++,this.bookmark=this.nextBookmark,e.next=4,this.onChangeSQL();case 4:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),onResetSQL:(o=Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.page=1,this.nextBookmark=null,this.bookmark=null,e.next=5,this.onChangeSQL();case 5:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),onChangeSQL:(n=Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.appendIcon=null,this.compiled=v.a.parse(this.sql),this.dbName=this.compiled.table,delete this.compiled.table,this.compiled.selector=this.compiled.selector||{},this.compiled.fields=this.compiled.fields||[],this.compiled.limit=this.compiled.limit||20,this.compiled.fields.length>0&&!this.compiled.fields.includes("_id")&&this.compiled.fields.push("_id"),this.bookmark&&(this.compiled.bookmark=this.bookmark),this.busy=!0,this.data=null,this.compiled.bookmark){e.next=17;break}return e.next=15,m.a.explain(this.$store,this.dbName,this.compiled);case 15:this.explain=e.sent,this.explain.index.ddoc?this.appendIcon="mdi-thumb-up":this.appendIcon="mdi-thumb-down";case 17:return this.$store.commit("cache/setLastSQL",this.sql),console.log(JSON.stringify(this.compiled)),e.next=21,m.a.find(this.$store,this.dbName,this.compiled);case 21:this.data=e.sent,this.nextBookmark=this.data.bookmark,this.$store.commit("cache/setLastSQLResults",this.data),this.$store.commit("cache/setLastSQLDBName",this.dbName),this.busy=!1,e.next=32;break;case 28:e.prev=28,e.t0=e.catch(0),this.$store.commit("alert/insertAlert",{alertMessage:"Could not parse SQL"}),this.busy=!1;case 32:case"end":return e.stop()}}),e,this,[[0,28]])}))),function(){return n.apply(this,arguments)})}},R=r(50),x=r(64),S=r.n(x),k=r(112),y=r(169),_=r(402),C=r(732),L=r(49),component=Object(R.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{color:"blue lighten-5"}},[r("v-text-field",{attrs:{"prepend-icon":"mdi-database-search","append-icon":e.appendIcon,hint:"query a database using SQL e.g. SELECT * FROM cities WHERE country='GB'","single-line":""},on:{change:e.onResetSQL},model:{value:e.sql,callback:function(t){e.sql=t},expression:"sql"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{small:"",outlined:"",disabled:""}},[e._v(e._s(e.page))]),e._v(" "),r("v-btn",{attrs:{small:"",icon:"",disabled:!e.data||e.data.docs.length<20},on:{click:e.next}},[r("v-icon",[e._v("mdi-chevron-right")])],1),e._v("\n     \n    "),r("v-btn",{attrs:{small:"",icon:""},on:{click:e.onChangeSQL}},[r("v-icon",[e._v("mdi-refresh")])],1)],1),e._v(" "),r("br"),e._v(" "),e.data?r("DocTable",{attrs:{docs:e.data.docs,dbName:e.dbName,showDoc:"true"}}):e._e(),e._v(" "),r("Busy",{attrs:{isBusy:e.busy}})],1)}),[],!1,null,null,null);t.default=component.exports;S()(component,{DocTable:r(451).default,Busy:r(452).default}),S()(component,{VBtn:k.a,VIcon:y.a,VSpacer:_.a,VTextField:C.a,VToolbar:L.a})}}]);