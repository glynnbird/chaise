(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{415:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h}));var r=n(421),o=n(1),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),h=Object(o.h)("v-card__title");r.a},417:function(t,e,n){"use strict";var r,o,c,l,d,h,v,f,m,_,x=n(22),w=(n(65),n(68),n(25),n(101).default),y=function(){var t=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r,o,data){var c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={method:n,baseURL:e.state.session.currentService.host,validateStatus:function(){return!0},url:r,params:o,data:data,withCredentials:!0},e.state.session.currentService.host.startsWith("http://localhost")&&(c.auth={username:e.state.session.currentService.username,password:e.state.session.currentService.password}),t.prev=2,t.next=5,w(c);case 5:if(401!==(l=t.sent).status){t.next=15;break}return console.log("401 - getting new session"),t.next=10,O.getSession(e.state.session.currentService.host,e.state.session.currentService.username,e.state.session.currentService.password);case 10:if(!t.sent){t.next=15;break}return t.next=14,w(c);case 14:l=t.sent;case 15:if(!(l.status>300)){t.next=17;break}throw new Error(l);case 17:return t.abrupt("return",l.data);case 20:return t.prev=20,t.t0=t.catch(2),console.error(t.t0),t.abrupt("return",null);case 24:case"end":return t.stop()}}),t,null,[[2,20]])})));return function(e,n,r,o,c){return t.apply(this,arguments)}}(),O={getSession:(_=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"post",baseURL:e,url:"/_session",data:{name:n,password:r},withCredentials:!0},t.prev=1,t.next=4,w(o);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),function(t,e,n){return _.apply(this,arguments)}),loadDbs:(m=Object(x.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e,"get","/_all_dbs",{},void 0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return m.apply(this,arguments)}),getDBInfo:(f=Object(x.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/".concat(encodeURIComponent(n)),t.next=3,y(e,"get",r,{},void 0);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return f.apply(this,arguments)}),getDocs:(v=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r,o){var c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o||(o=1),c="/".concat(encodeURIComponent(n),"/_all_docs"),l={include_docs:!0,skip:20*(o-1),limit:20},r&&(l.startkey=JSON.stringify(r),l.endkey=JSON.stringify(r+"z")),t.next=6,y(e,"get",c,l,void 0);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)}))),function(t,e,n,r){return v.apply(this,arguments)}),getDoc:(h=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/".concat(encodeURIComponent(n),"/").concat(r),t.next=3,y(e,"get",o,{},void 0);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e,n){return h.apply(this,arguments)}),putDB:(d=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/".concat(encodeURIComponent(n)),t.next=3,y(e,"put",o,r,void 0);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e,n){return d.apply(this,arguments)}),postDoc:(l=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/".concat(encodeURIComponent(n)),t.next=3,y(e,"post",o,{},r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e,n){return l.apply(this,arguments)}),deleteDoc:(c=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/".concat(encodeURIComponent(n),"/").concat(r._id),t.next=3,y(e,"delete",o,{rev:r._rev},void 0);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e,n){return c.apply(this,arguments)}),explain:(o=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/".concat(encodeURIComponent(n),"/_explain"),t.next=3,y(e,"post",o,{},r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e,n){return o.apply(this,arguments)}),find:(r=Object(x.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/".concat(encodeURIComponent(n),"/_find"),t.next=3,y(e,"post",o,{},r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e,n){return r.apply(this,arguments)})};e.a=O},421:function(t,e,n){"use strict";n(9),n(5),n(7),n(12),n(10),n(13);var r=n(2),o=(n(29),n(185),n(431),n(103)),c=n(425),l=n(57),d=n(8);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},431:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("e23b7040",content,!0,{sourceMap:!1})},432:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},444:function(t,e,n){"use strict";var r=n(0),o=n(1);e.a=r.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.i}}})},451:function(t,e,n){n(4)({target:"Object",stat:!0},{is:n(260)})},461:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("12a190a6",content,!0,{sourceMap:!1})},462:function(t,e,n){var r=n(14)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=r},463:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2e2bc7da",content,!0,{sourceMap:!1})},464:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},738:function(t,e,n){"use strict";n(9),n(5),n(7),n(12),n(10),n(13);var r=n(113),o=n(2),c=(n(17),n(69),n(461),n(463),n(47)),l=n(443),d=n(87),h=n(0).a.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),v=n(444),f=n(8);function m(t){t.preventDefault()}var _=Object(f.a)(l.a,h,v.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=l.a.options.methods.genLabel.call(this);return label?(label.data.on={click:m},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),x=["title"];function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=_.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return y(y({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,x));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",y(y({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},743:function(t,e,n){"use strict";n.r(e);var r,o=n(22),c=(n(65),n(31),n(124),n(26),n(417)),l=n(99),d={data:function(){return{name:"",partitioned:!1}},computed:{formDisabled:function(){return!this.name.match(/^[a-z][a-z0-9_$()+/-]*$/)}},methods:{onCreateDatbase:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.putDB(this.$store,this.name,{partitioned:this.partitioned});case 2:(e=t.sent)&&e.ok?(this.$store.commit("cache/addDb",this.name),this.$store.commit("alert/insertAlert",{alertMessage:"Database added",alertType:"success"}),this.$router.push(l.a.db(this.name))):this.$store.commit("alert/insertAlert",{alertMessage:"Failed to add database"});case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},h=n(39),v=n(53),f=n.n(v),m=n(115),_=n(421),x=n(415),w=n(738),y=n(2),O=(n(40),n(61),n(188),n(7),n(10),n(60),n(119),n(9),n(5),n(12),n(13),n(8)),k=n(91),j=n(140);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function V(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R=Object(O.a)(k.a,Object(j.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:V({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),S=n(737),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[t._v("Add new database")]),t._v(" "),n("v-card-subtitle",[t._v("\n     The data base name must begin with a lowercase letter (a-z) and then consist of only \n     lowercase characters (a-z), digits (0-9) and any of the characters _, $, (, ), +, -, and /.\n  ")]),t._v(" "),n("v-card-text",[n("v-form",{ref:"form"},[n("v-text-field",{attrs:{label:"Database name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Is the database to be partitioned?",required:""},model:{value:t.partitioned,callback:function(e){t.partitioned=e},expression:"partitioned"}}),t._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{disabled:t.formDisabled,color:"success"},on:{click:t.onCreateDatbase}},[t._v("\n        Create\n      ")])],1)],1),t._v(" "),n("v-card-actions")],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:m.a,VCard:_.a,VCardActions:x.a,VCardSubtitle:x.b,VCardText:x.c,VCardTitle:x.d,VCheckbox:w.a,VForm:R,VTextField:S.a})}}]);