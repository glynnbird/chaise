(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8],{414:function(e,t,r){"use strict";var n,o,c,l,d,m,f,v,h,x=r(21),_=(r(25),r(62),r(98).default),y=function(){var e=Object(x.a)(regeneratorRuntime.mark((function e(t,r,n,o,data){var c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:r,baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:n,params:o,data:data,withCredentials:!0},e.prev=1,e.next=4,_(c);case 4:return l=e.sent,e.abrupt("return",l.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r,n,o,c){return e.apply(this,arguments)}}(),D={loadDbs:(h=Object(x.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,"get","/_all_dbs",{},void 0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)}),getDBInfo:(v=Object(x.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/".concat(encodeURIComponent(r)),e.next=3,y(t,"get",n,{},void 0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return v.apply(this,arguments)}),getDocs:(f=Object(x.a)(regeneratorRuntime.mark((function e(t,r,n,o){var c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o||(o=1),c="/".concat(encodeURIComponent(r),"/_all_docs"),l={include_docs:!0,skip:20*(o-1),limit:20},n&&(l.startkey=JSON.stringify(n),l.endkey=JSON.stringify(n+"z")),e.next=6,y(t,"get",c,l,void 0);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t,r,n){return f.apply(this,arguments)}),getDoc:(m=Object(x.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r),"/").concat(n),e.next=3,y(t,"get",o,{},void 0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return m.apply(this,arguments)}),putDB:(d=Object(x.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r)),e.next=3,y(t,"put",o,n,void 0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return d.apply(this,arguments)}),putDoc:(l=Object(x.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r)),e.next=3,y(t,"put",o,{},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return l.apply(this,arguments)}),deleteDoc:(c=Object(x.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r),"/").concat(n._id),e.next=3,y(t,"delete",o,{rev:n._rev},void 0);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return c.apply(this,arguments)}),explain:(o=Object(x.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r),"/_explain"),e.next=3,y(t,"post",o,{},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return o.apply(this,arguments)}),find:(n=Object(x.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="/".concat(encodeURIComponent(r),"/_find"),e.next=3,y(t,"post",o,{},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return n.apply(this,arguments)})};t.a=D},579:function(e,t,r){var content=r(730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("c7f7411c",content,!0,{sourceMap:!1})},581:function(e,t,r){"use strict";r.r(t);var n={props:{title:String,text:String,verb:String,displayDialog:Boolean},methods:{confirm:function(){this.$emit("confirm")},cancel:function(){this.$emit("cancel")}}},o=r(50),c=r(64),l=r.n(c),d=r(112),m=r(415),f=r(408),v=r(737),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{"max-width":"500px"},on:{"click:outside":e.cancel},model:{value:e.displayDialog,callback:function(t){e.displayDialog=t},expression:"displayDialog"}},[r("v-card",[r("v-card-title",[e._v(e._s(e.title))]),e._v(" "),r("v-card-text",[e._v("\n      "+e._s(e.text)+"\n    ")]),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:e.cancel}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:e.confirm}},[e._v(e._s(e.verb))])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VDialog:v.a})},729:function(e,t,r){"use strict";r(579)},730:function(e,t,r){var n=r(14)(!1);n.push([e.i,".jsoneditor{border:1px solid #ccc}.jsoneditor-menu{border-bottom:1px solid #ccc;background-color:#ccc!important}",""]),e.exports=n},744:function(e,t,r){"use strict";r.r(t);var n,o,c,l,d=r(21),m=(r(62),r(414)),f={data:function(){return{title:"title",dbName:null,id:null,doc:null,originalJson:"",options:{mode:"code",mainMenuBar:!1},displayDeleteDialog:!1,readonly:!1}},asyncData:(l=Object(d.a)(regeneratorRuntime.mark((function e(t){var r,n,o,c,l,d,f,title;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.route,o=n.params.dbname,c=n.params.id,r.commit("cache/setCurrentDB",o),r.commit("cache/addToRecents",o),e.next=7,m.a.getDoc(r,o,c);case 7:return l=e.sent,d=JSON.stringify(l),r.commit("cache/setCurrentID",c),f=!!r.state.session.currentService.readonly,title="Edit document",f&&(title="View document"),e.abrupt("return",{dbName:o,id:c,doc:l,originalJson:d,readonly:f,title:title});case 14:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)}),computed:{saveDisabled:function(){if(JSON.stringify(this.doc)===this.originalJson)return!0;if(!this.doc._id)return!0;var e=JSON.parse(this.originalJson);return!(!e._rev||this.doc._rev===e._rev)||!(!e._id||this.doc._id===e._id)}},methods:{onSave:(c=Object(d.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.putDoc(this.$store,this.dbName,this.doc);case 2:(t=e.sent)&&t.ok?(this.doc._rev=t.rev,this.originalJson=JSON.stringify(this.doc),this.$store.commit("alert/insertAlert",{alertType:"success",alertMessage:"Successfully edited document"})):this.$store.commit("alert/insertAlert",{alertMessage:"Failed to add document"});case 4:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),onDelete:(o=Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.displayDeleteDialog=!0;case 1:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),doDelete:(n=Object(d.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.displayDeleteDialog=!1,e.next=3,m.a.deleteDoc(this.$store,this.dbName,this.doc);case 3:(t=e.sent)&&t.ok?(this.$store.commit("alert/insertAlert",{alertType:"success",alertMessage:"Document deleted"}),this.$router.push("/db/".concat(encodeURIComponent(this.dbName)))):this.$store.commit("alert/insertAlert",{alertMessage:"Failed to delete document"});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),cancelDelete:function(){this.displayDeleteDialog=!1}}},v=(r(729),r(50)),h=r(64),x=r.n(h),_=r(112),y=r(415),D=r(408),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(e._s(e.title))]),e._v(" "),r("v-card-text",[e.readonly?e._e():r("v-jsoneditor",{attrs:{options:e.options,plus:!1,height:"600px"},model:{value:e.doc,callback:function(t){e.doc=t},expression:"doc"}}),e._v(" "),e.readonly?r("pre",[e._v(e._s(JSON.stringify(e.doc,null,"  ")))]):e._e(),e._v(" "),r("ConfirmDialog",{attrs:{displayDialog:e.displayDeleteDialog,title:"Are you sure?",text:"Confirm deletion of this document?",verb:"Delete"},on:{confirm:e.doDelete,cancel:e.cancelDelete}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"success",disabled:e.saveDisabled||e.readonly},on:{click:e.onSave}},[e._v("Save")]),e._v(" "),r("v-btn",{attrs:{color:"error",disabled:e.readonly},on:{click:e.onDelete}},[e._v("Delete")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{ConfirmDialog:r(581).default}),x()(component,{VBtn:_.a,VCard:y.a,VCardActions:D.a,VCardText:D.c,VCardTitle:D.d})}}]);