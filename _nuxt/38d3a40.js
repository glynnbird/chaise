(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{414:function(e,t,r){"use strict";var n,o,c,l,d,m,v,h,f,w=r(21),x=(r(25),r(63),r(99).default),R={loadDbs:(f=Object(w.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/_all_dbs",withCredentials:!0},e.prev=1,e.next=4,x(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e){return f.apply(this,arguments)}),getDBInfo:(h=Object(w.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,x(n);case 4:return o=e.sent,e.abrupt("return",o.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t){return h.apply(this,arguments)}),getDocs:(v=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n,o){var c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r)+"/_all_docs",params:{include_docs:!0,limit:20},withCredentials:!0},n&&(c.params.startkey=JSON.stringify(n),c.params.endkey=JSON.stringify(n+"z")),e.prev=2,e.next=5,x(c);case 5:return l=e.sent,e.abrupt("return",l.data);case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),function(e,t,r,n){return v.apply(this,arguments)}),getDoc:(m=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r)+"/"+encodeURIComponent(n),withCredentials:!0},console.log(o.url),e.prev=2,e.next=5,x(o);case 5:return c=e.sent,e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),function(e,t,r){return m.apply(this,arguments)}),putDB:(d=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"put",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},params:n||{},url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,x(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return d.apply(this,arguments)}),putDoc:(l=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,x(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return l.apply(this,arguments)}),deleteDoc:(c=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"delete",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/").concat(n._id),params:{rev:n._rev},withCredentials:!0},e.prev=1,e.next=4,x(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return c.apply(this,arguments)}),explain:(o=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/_explain"),withCredentials:!0},e.prev=1,e.next=4,x(o);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return o.apply(this,arguments)}),find:(n=Object(w.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("_find",r,n),o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/_find"),withCredentials:!0},e.prev=2,e.next=5,x(o);case 5:return c=e.sent,e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),function(e,t,r){return n.apply(this,arguments)})};t.a=R},573:function(e,t,r){var content=r(727);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("c7f7411c",content,!0,{sourceMap:!1})},575:function(e,t,r){"use strict";r.r(t);var n={props:{title:String,text:String,verb:String,displayDialog:Boolean},methods:{confirm:function(){this.$emit("confirm")},cancel:function(){this.$emit("cancel")}}},o=r(50),c=r(53),l=r.n(c),d=r(113),m=r(415),v=r(409),h=r(734),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{"max-width":"500px"},on:{"click:outside":e.cancel},model:{value:e.displayDialog,callback:function(t){e.displayDialog=t},expression:"displayDialog"}},[r("v-card",[r("v-card-title",[e._v(e._s(e.title))]),e._v(" "),r("v-card-text",[e._v("\n      "+e._s(e.text)+"\n    ")]),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:e.cancel}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:e.confirm}},[e._v(e._s(e.verb))])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VDialog:h.a})},726:function(e,t,r){"use strict";r(573)},727:function(e,t,r){var n=r(14)(!1);n.push([e.i,".jsoneditor{border:1px solid #ccc}.jsoneditor-menu{border-bottom:1px solid #ccc;background-color:#ccc!important}",""]),e.exports=n},741:function(e,t,r){"use strict";r.r(t);var n,o,c,l,d=r(21),m=(r(63),r(414)),v={data:function(){return{dbName:null,id:null,doc:null,originalJson:"",options:{mode:"code"},displayDeleteDialog:!1}},asyncData:(l=Object(d.a)(regeneratorRuntime.mark((function e(t){var r,n,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.route,o=n.params.dbname,c=n.params.id,r.commit("cache/setCurrentDB",o),r.commit("cache/addToRecents",o),e.next=7,m.a.getDoc(r,o,c);case 7:return l=e.sent,d=JSON.stringify(l),r.commit("cache/setCurrentID",c),e.abrupt("return",{dbName:o,id:c,doc:l,originalJson:d});case 11:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)}),computed:{saveDisabled:function(){if(JSON.stringify(this.doc)===this.originalJson)return!0;if(!this.doc._id)return!0;var e=JSON.parse(this.originalJson);return!(!e._rev||this.doc._rev===e._rev)||!(!e._id||this.doc._id===e._id)}},methods:{onSave:(c=Object(d.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.putDoc(this.$store,this.dbName,this.doc);case 2:(t=e.sent)&&t.ok?(this.doc._rev=t.rev,this.originalJson=JSON.stringify(this.doc),this.$store.commit("alert/insertAlert",{alertType:"success",alertMessage:"Successfully edited document"})):this.$store.commit("alert/insertAlert",{alertMessage:"Failed to add document"});case 4:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),onDelete:(o=Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.displayDeleteDialog=!0;case 1:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),doDelete:(n=Object(d.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.displayDeleteDialog=!1,e.next=3,m.a.deleteDoc(this.$store,this.dbName,this.doc);case 3:(t=e.sent)&&t.ok?(this.$store.commit("alert/insertAlert",{alertType:"success",alertMessage:"Document deleted"}),this.$router.push("/db/".concat(encodeURIComponent(this.dbName)))):this.$store.commit("alert/insertAlert",{alertMessage:"Failed to delete document"});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),cancelDelete:function(){this.displayDeleteDialog=!1}}},h=(r(726),r(50)),f=r(53),w=r.n(f),x=r(113),R=r(415),D=r(409),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Edit Document")]),e._v(" "),r("v-card-text",[r("v-jsoneditor",{attrs:{options:e.options,plus:!1,height:"600px"},model:{value:e.doc,callback:function(t){e.doc=t},expression:"doc"}}),e._v(" "),r("ConfirmDialog",{attrs:{displayDialog:e.displayDeleteDialog,title:"Are you sure?",text:"Confirm deletion of this document?",verb:"Delete"},on:{confirm:e.doDelete,cancel:e.cancelDelete}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"success",disabled:e.saveDisabled},on:{click:e.onSave}},[e._v("Save")]),e._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:e.onDelete}},[e._v("Delete")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{ConfirmDialog:r(575).default}),w()(component,{VBtn:x.a,VCard:R.a,VCardActions:D.a,VCardText:D.c,VCardTitle:D.d})}}]);