(function(t){function a(a){for(var n,i,s=a[0],c=a[1],l=a[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(n=!1)}n&&(r.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3e49f5e3"}[t]+".js"}function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var a=[],e=o[t];if(0!==e)if(e)a.push(e[2]);else{var n=new Promise((function(a,n){e=o[t]=[a,n]}));a.push(e[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;r=function(a){c.onerror=c.onload=null,clearTimeout(u);var e=o[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,e[1](l)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var p=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"warning",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-icon",{attrs:{large:""}},[t._v("mdi-bookshelf")]),e("h2",{staticClass:"pl-5"},[t._v("BuscaLibros")])],1),e("v-spacer"),e("div",{staticClass:"text-center"},[e("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,o=a.attrs;return[e("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",o,!1),n),[e("v-icon",{attrs:{large:""}},[t._v("mdi-information")])],1)]}}]),model:{value:t.modalInfo,callback:function(a){t.modalInfo=a},expression:"modalInfo"}},[e("v-card",[e("v-card-title",{staticClass:"text-h5  white--text warning lighten-1"},[t._v(" Programado por Pedro Muñoz L. ")]),e("v-card-text",{staticClass:"mt-4"},[t._v(" Esta página fue diseñada exclusivamente para la postulación de Frontend de Simplex, usando VueJs con el framework Vuetify, axios y deploy de Firebase. ")]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.modalInfo=!1}}},[t._v(" Cerrar ")])],1)],1)],1)],1)],1),e("v-main",[e("router-view")],1)],1)},r=[],i={name:"Buscalibros",data:function(){return{modalInfo:!1}}},s=i,c=e("2877"),l=e("6544"),u=e.n(l),p=e("7496"),d=e("40dc"),f=e("8336"),v=e("b0af"),m=e("99d9"),g=e("169a"),h=e("ce7e"),b=e("132d"),_=e("f6c4"),x=e("2fa4"),y=Object(c["a"])(s,o,r,!1,null,null,null),k=y.exports;u()(y,{VApp:p["a"],VAppBar:d["a"],VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VDialog:g["a"],VDivider:h["a"],VIcon:b["a"],VMain:_["a"],VSpacer:x["a"]});e("d3b7"),e("3ca3"),e("ddb0");var w=e("8c4f"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{},[e("h1",{staticClass:"primary--text"},[t._v("Buscador de Libros")]),e("div",{staticClass:"d-flex justify-center"},[e("v-text-field",{staticClass:"my-5",attrs:{dense:"",color:"warning","prepend-icon":"mdi-magnify",label:"Ingresa un nombre o titulo"},model:{value:t.inputBook,callback:function(a){t.inputBook=a},expression:"inputBook"}}),e("v-btn",{staticClass:"ml-10 mt-3 ",attrs:{color:"warning"},on:{click:function(a){t.vamos(t.inputBook),t.buscas=!0}}},[t._v("buscar "),e("v-icon",{attrs:{right:"",dark:"",small:""}},[t._v("mdi-magnify-scan")])],1)],1),t.buscas?e("h3",{staticClass:"mb-4 mt-0"},[t._v("Estas buscando..."+t._s(t.inputBook))]):t._e(),e("v-row",t._l(t.visiblePages,(function(a,n){void 0===a&&(a=t.libro);var o=a.cover_i,r=a.title,i=a.author_name,s=a.key;return e("v-col",{key:n,attrs:{cols:"2"}},[e("v-card",{staticClass:"my-1",attrs:{"min-width":"100px","max-width":"200px","max-height":"260px","min-height":"260px"}},[e("v-container",{staticClass:"pa-0"},[e("v-img",o?{staticClass:"ma-0 ",attrs:{position:"top center",src:"https://covers.openlibrary.org/b/ID/"+o+"-M.jpg","max-height":"20vh","min-height":"20vh"}}:{attrs:{src:"https://agencias.assist1.com.co/assets/images/no-image.png","max-height":"20vh","min-height":"20vh"}}),e("h5",{staticClass:"text-truncate pt-5 pl-3"},[t._v(t._s(r))]),e("v-row",{attrs:{justify:"space-around"}},[e("v-col",{attrs:{cols:"auto"}},[e("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600",eager:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,r=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"text-center mt-10 px-2",attrs:{tile:"",height:"1.3rem",color:"warning",dense:"","append-icon":"arrow_drop_down"},on:{click:function(a){return t.modalOn(n,s)}}},"v-btn",r,!1),o),[t._v("Más Info "),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-information")])],1)]}},{key:"default",fn:function(a){return[e("v-card",[e("v-toolbar",{attrs:{color:"warning",dark:""}},[e("h3",[t._v(t._s(t.infoBook.title))])]),e("v-card-text",[e("div",{staticClass:"my-5"},[e("v-img",o?{attrs:{contain:"",width:"80vw",height:"50vh",position:"top center",src:"http://covers.openlibrary.org/b/ID/"+o+"-L.jpg"}}:{attrs:{contain:"",src:"https://agencias.assist1.com.co/assets/images/no-image.png"}}),e("p",{staticClass:"pt-10"},[t._v("Title: "+t._s(t.infoBook.title))]),e("p",[t._v("Author(s):"+t._s(i.join(" - ")))]),t.infoBook.description?e("div",[t.infoBook.description?e("p",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.infoBook.description.value)+" ")]):e("p",[t._v(t._s(t.infoBook.description))])]):e("div",[t._v("Descripción No disponible")])],1)]),e("v-card-actions",{staticClass:"align-end"},[e("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(t){a.value=!1}}},[t._v("Cerrar")])],1)],1)]}}],null,!0)})],1)],1)],1)],1)],1)})),1),e("v-pagination",{staticClass:"mt-16",attrs:{circle:"",color:"warning",length:Math.ceil(t.dataBooks.length/t.perPage)},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)},B=[],V=e("1da1"),j=(e("96cf"),e("fb6a"),e("bc3a")),I=e.n(j),O={data:function(){return{dataBooks:[],inputBook:"",urlImg:"",infoBook:{},page:1,perPage:12,buscas:!1}},computed:{visiblePages:function(){return this.dataBooks.slice((this.page-1)*this.perPage,this.page*this.perPage)}},methods:{vamos:function(){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,I.a.get("https://openlibrary.org/search.json?q=".concat(t.inputBook)).then((function(a){return t.dataBooks=a.data.docs})).then((function(t){console.log(t)})).catch((function(t){console.log("error => "+t)}));case 2:case"end":return a.stop()}}),a)})))()},modalOn:function(t,a){var e=this;return console.log(t+a),I.a.get("https://openlibrary.org".concat(a,".json")).then((function(t){return e.infoBook=t.data})).then((function(t){return console.log(t)})),this.infoBook},getLibroInfo:function(){return this.modalOn()}}},P=O,S=e("62ad"),T=e("a523"),A=e("adda"),M=e("891e"),E=e("0fd9"),L=e("8654"),D=e("71d9"),z=Object(c["a"])(P,C,B,!1,null,null,null),q=z.exports;u()(z,{VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCol:S["a"],VContainer:T["a"],VDialog:g["a"],VIcon:b["a"],VImg:A["a"],VPagination:M["a"],VRow:E["a"],VTextField:L["a"],VToolbar:D["a"]}),n["a"].use(w["a"]);var F=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],J=new w["a"]({mode:"history",base:"/",routes:F}),R=J,$=e("2f62");n["a"].use($["a"]);var N=new $["a"].Store({state:{bdLibros:[]},mutations:{},actions:{getBooksInfo:function(t){I.a.get("".concat(t))}},modules:{}}),H=(e("5363"),e("f309"));n["a"].use(H["a"]);var K=new H["a"]({icons:{iconfont:"mdi"}}),Q=e("1196"),X=e("260b");n["a"].config.productionTip=!1;var Y={apiKey:"AIzaSyCVAz4gnXeoQbNSt8v76xY2snqv0yZr0xE",authDomain:"prueba-simplex.firebaseapp.com",projectId:"prueba-simplex",storageBucket:"prueba-simplex.appspot.com",messagingSenderId:"878640069260",appId:"1:878640069260:web:47105ac98ed92c4bae99a9"};Object(X["a"])(Y);Q["a"].initializeApp(Y),new n["a"]({router:R,store:N,vuetify:K,axios:I.a,firebase:Q["a"],render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.5f93f397.js.map