(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{575:function(t,n,c){"use strict";c.r(n);var e={props:{title:String,text:String,verb:String,displayDialog:Boolean},methods:{confirm:function(){this.$emit("confirm")},cancel:function(){this.$emit("cancel")}}},l=c(50),o=c(53),r=c.n(o),d=c(113),v=c(415),_=c(409),f=c(734),component=Object(l.a)(e,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("v-dialog",{attrs:{"max-width":"500px"},on:{"click:outside":t.cancel},model:{value:t.displayDialog,callback:function(n){t.displayDialog=n},expression:"displayDialog"}},[c("v-card",[c("v-card-title",[t._v(t._s(t.title))]),t._v(" "),c("v-card-text",[t._v("\n      "+t._s(t.text)+"\n    ")]),t._v(" "),c("v-card-actions",[c("v-btn",{attrs:{text:""},on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),c("v-btn",{attrs:{text:""},on:{click:t.confirm}},[t._v(t._s(t.verb))])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;r()(component,{VBtn:d.a,VCard:v.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VDialog:f.a})}}]);