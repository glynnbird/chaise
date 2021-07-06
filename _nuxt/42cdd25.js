(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{412:function(e,t,r){"use strict";r(8),r(5),r(6),r(12),r(9),r(13);var n=r(2),o=(r(28),r(148),r(421),r(185)),l=r(120),c=r(31),d=r(119),h=r(186),m=r(22),f=r(1),v=r(10);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var y=Object(v.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,m.a);t.a=y.extend({name:"v-progress-linear",directives:{intersect:l.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(f.g)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(f.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(f.g)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(f.r)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},415:function(e,t,r){"use strict";var n,o,l,c,d,h,m,f,v,_=r(21),y=(r(25),r(63),r(99).default),w={loadDbs:(v=Object(_.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/_all_dbs",withCredentials:!0},e.prev=1,e.next=4,y(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e){return v.apply(this,arguments)}),getDBInfo:(f=Object(_.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,y(n);case 4:return o=e.sent,e.abrupt("return",o.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t){return f.apply(this,arguments)}),getDocs:(m=Object(_.a)(regeneratorRuntime.mark((function e(t,r,n,o){var l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o||(o=1),l={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r)+"/_all_docs",params:{include_docs:!0,skip:20*(o-1),limit:20},withCredentials:!0},n&&(l.params.startkey=JSON.stringify(n),l.params.endkey=JSON.stringify(n+"z")),e.prev=3,e.next=6,y(l);case 6:return c=e.sent,e.abrupt("return",c.data);case 10:return e.prev=10,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[3,10]])}))),function(e,t,r,n){return m.apply(this,arguments)}),getDoc:(h=Object(_.a)(regeneratorRuntime.mark((function e(t,r,n){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"get",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},url:"/"+encodeURIComponent(r)+"/"+encodeURIComponent(n),withCredentials:!0},console.log(o.url),e.prev=2,e.next=5,y(o);case 5:return l=e.sent,e.abrupt("return",l.data);case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),function(e,t,r){return h.apply(this,arguments)}),putDB:(d=Object(_.a)(regeneratorRuntime.mark((function e(t,r,n){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"put",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},params:n||{},url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,y(o);case 4:return l=e.sent,e.abrupt("return",l.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return d.apply(this,arguments)}),putDoc:(c=Object(_.a)(regeneratorRuntime.mark((function e(t,r,n){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/"+encodeURIComponent(r),withCredentials:!0},e.prev=1,e.next=4,y(o);case 4:return l=e.sent,e.abrupt("return",l.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return c.apply(this,arguments)}),deleteDoc:(l=Object(_.a)(regeneratorRuntime.mark((function e(t,r,n){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"delete",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/").concat(n._id),params:{rev:n._rev},withCredentials:!0},e.prev=1,e.next=4,y(o);case 4:return l=e.sent,e.abrupt("return",l.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return l.apply(this,arguments)}),explain:(o=Object(_.a)(regeneratorRuntime.mark((function e(t,r,n){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/_explain"),withCredentials:!0},e.prev=1,e.next=4,y(o);case 4:return l=e.sent,e.abrupt("return",l.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,r){return o.apply(this,arguments)}),find:(n=Object(_.a)(regeneratorRuntime.mark((function e(t,r,n){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("_find",r,n),o={method:"post",baseURL:t.state.session.currentService.host,auth:{username:t.state.session.currentService.username,password:t.state.session.currentService.password},data:n,url:"/".concat(encodeURIComponent(r),"/_find"),withCredentials:!0},e.prev=2,e.next=5,y(o);case 5:return l=e.sent,e.abrupt("return",l.data);case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),function(e,t,r){return n.apply(this,arguments)})};t.a=w},419:function(e,t,r){"use strict";r(28);var n=r(0),o=r(420);t.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},420:function(e,t,r){"use strict";var n=r(412);t.a=n.a},421:function(e,t,r){var content=r(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("cf87dc84",content,!0,{sourceMap:!1})},422:function(e,t,r){var n=r(14)(!1);n.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n},510:function(e,t){},511:function(e,t){},520:function(e,t){},521:function(e,t){},541:function(e,t){},543:function(e,t){},544:function(e,t){},547:function(e,t){},548:function(e,t){},553:function(e,t){},554:function(e,t){},562:function(e,t){},568:function(e,t){},571:function(e,t){},573:function(e,t,r){var content=r(726);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("0d20111a",content,!0,{sourceMap:!1})},725:function(e,t,r){"use strict";r(573)},726:function(e,t,r){var n=r(14)(!1);n.push([e.i,".jsoneditor{border:1px solid #ccc}.jsoneditor-menu{border-bottom:1px solid #ccc;background-color:#ccc!important}",""]),e.exports=n},741:function(e,t,r){"use strict";r.r(t);var n,o,l=r(21),c=(r(25),r(63),r(415)),d=r(505),h=r.n(d),m={data:function(){return{valid:!0,dbName:null,doc:null,options:{mode:"code",onChangeText:this.onChangeText}}},asyncData:(o=Object(l.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,t.route,n=r.state.cache.currentDB,e.abrupt("return",{dbName:n,doc:{_id:h.a.id()}});case 3:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)}),computed:{saveDisabled:function(){return!!this.doc._rev||!this.valid}},methods:{onChangeText:function(e){try{JSON.parse(e),this.valid=!0}catch(e){this.valid=!1}},onSave:(n=Object(l.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.putDoc(this.$store,this.dbName,this.doc);case 2:(t=e.sent)&&t.ok?(this.$store.commit("alert/insertAlert",{alertType:"success",alertMessage:"Successfully added document"}),this.$router.push("/db/".concat(this.dbName,"/").concat(encodeURIComponent(this.doc._id)))):this.$store.commit("alert/insertAlert",{alertMessage:"Failed to add document"});case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})}},f=(r(725),r(50)),v=r(53),_=r.n(v),y=r(406),w=r(113),k=r(416),x=r(409),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Add document")]),e._v(" "),r("v-card-text",[e.dbName?e._e():r("v-alert",[e._v("\n      Sorry bad link. "),r("NuxtLink",{attrs:{to:"/"}},[e._v("Go Home")]),e._v(".\n    ")],1),e._v(" "),e.dbName?r("v-jsoneditor",{attrs:{options:e.options,plus:!1,height:"600px"},model:{value:e.doc,callback:function(t){e.doc=t},expression:"doc"}}):e._e()],1),e._v(" "),r("v-card-actions",[e.dbName?r("v-btn",{attrs:{color:"success",disabled:e.saveDisabled},on:{click:e.onSave}},[e._v("Save")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VAlert:y.a,VBtn:w.a,VCard:k.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d})}}]);