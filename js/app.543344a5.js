(function(t){function e(e){for(var a,o,l=e[0],s=e[1],c=e[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function l(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8513e31d"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"eded25f0"}[t]+".css",r=s.p+a,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===a||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64");a["default"].use(o["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:t.goDark}},[n("v-content",[n("v-container",{attrs:{"align-center":""}},[n("TheHeader",{attrs:{goDark:t.goDark},on:{changeTheme:function(e){return t.updateTheme(e)}}}),n("transition",{attrs:{name:"router-animation",mode:"out-in","enter-active-class":"animated fadeIn fast","leave-active-class":"animated fadeOut faster"}},[n("router-view")],1)],1)],1),n("TheFooter")],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:"",app:"",width:"150",height:"340"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"pt-4"},[n("v-list-tile",{attrs:{"active-class":"green--text",to:"/"}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("HOME")])],1)],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("RESUME")])],1),n("v-list-tile",{attrs:{"active-class":"green--text",to:"/services"}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("SERVICES")])],1)],1),n("v-list-tile",{attrs:{"active-class":"green--text",to:"/portfolio"}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("PORTFOLIO")])],1)],1),n("v-list-tile-content"),n("v-list-tile",{attrs:{"active-class":"green--text",to:"/contact"}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("CONTACT")])],1)],1)],1)],1),n("v-toolbar",{attrs:{flat:"",dense:"",color:"transparent","scroll-off-screen":""}},[n("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"headline"},[n("span",{staticClass:"font-weight-light"},[t._v("AGM")]),n("span",{staticClass:"green--text"},[t._v("Project")])]),n("v-spacer"),n("v-btn",{staticClass:"hidden-md-and-up",attrs:{depressed:"",small:"",icon:""},on:{click:t.changeTheme}},[1==t.goDark?n("v-icon",[t._v("fas fa-sun")]):n("v-icon",[t._v("fas fa-moon")])],1),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",to:"/","active-class":"green--text headline"}},[t._v("Home")]),n("v-btn",{attrs:{flat:"",to:"/services","active-class":"green--text headline"}},[t._v("Services")]),n("v-btn",{attrs:{flat:"",to:"/portfolio","active-class":"green--text headline"}},[t._v("Portfolio")]),n("v-btn",{attrs:{flat:"",to:"/contact","active-class":"green--text headline"}},[t._v("Contact")]),n("v-btn",{attrs:{depressed:"",small:"",icon:""},on:{click:t.changeTheme}},[1==t.goDark?n("v-icon",[t._v("fas fa-sun")]):n("v-icon",[t._v("fas fa-moon")])],1)],1)],1)],1)},s=[],c={props:{goDark:{type:Boolean}},data:function(){return{drawer:null}},methods:{changeTheme:function(){this.$emit("changeTheme",this.goDark)}}},u=c,d=n("2877"),p=n("6544"),f=n.n(p),v=n("8336"),m=n("132d"),h=n("8860"),g=n("ba95"),b=n("5d23"),y=n("f774"),w=n("9910"),_=n("71d9"),k=n("2a7f"),x=n("706c"),T=Object(d["a"])(u,l,s,!1,null,null,null),C=T.exports;f()(T,{VBtn:v["a"],VIcon:m["a"],VList:h["a"],VListTile:g["a"],VListTileContent:b["a"],VListTileTitle:b["b"],VNavigationDrawer:y["a"],VSpacer:w["a"],VToolbar:_["a"],VToolbarItems:k["a"],VToolbarSideIcon:x["a"],VToolbarTitle:k["b"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"pa-3"},[t._v("\n  Developed with miftah\n  "),n("v-icon",{attrs:{small:"",color:"red"}},[t._v("fas fa-heart")]),n("v-spacer"),n("div",[t._v("© "+t._s((new Date).getFullYear()))])],1)},E=[],P={},j=P,S=n("553a"),O=Object(d["a"])(j,V,E,!1,null,"d99a8e54",null),D=O.exports;f()(O,{VFooter:S["a"],VIcon:m["a"],VSpacer:w["a"]});var A={name:"App",metaInfo:{title:"Home",titleTemplate:"%s ← Eldin's Space",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Eldin Zaimovic's Portfolio"},{charset:"utf-8"},{property:"og:title",content:"Eldin' Space"},{property:"og:site_name",content:"Eldin' Space"},{property:"og:type",content:"website"},{property:"og:url",content:"https://eldin.space"},{property:"og:image",content:"https://i.imgur.com/Dcz2PGx.jpg"},{property:"og:description",content:"Eldin Zaimovic's Portfolio"}]},components:{TheHeader:C,TheFooter:D},data:function(){return{goDark:!1}},methods:{updateTheme:function(t){this.goDark=!t}}},I=A,L=(n("034f"),n("7496")),H=n("a523"),M=n("549c"),F=Object(d["a"])(I,r,i,!1,null,null,null),N=F.exports;f()(F,{VApp:L["a"],VContainer:H["a"],VContent:M["a"]});var B=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"mt-4 pt-2",attrs:{column:"","justify-center":"","align-center":""}},[n("br"),n("VueCompareImage",{staticClass:"hidden-md-and-down",staticStyle:{"{ minWidth":"'500px' }"},attrs:{leftImage:"adlinbagasslide.jpg",height:"600px",width:"1880px",rightImage:"miftahslide.jpg",sliderLineWidth:t.sliderLine,handleSize:10,hover:"",sliderPositionPercentage:t.sliderPosition}}),t._v(";\n   "),n("vue-typer",{staticClass:"headline",attrs:{repeat:0,text:"AGM"}}),n("vue-typer",{attrs:{text:t.text1,repeat:1/0,shuffle:!1,"initial-action":"erasing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":1980,"erase-delay":150,"erase-style":"select-back","erase-on-complete":!1,"caret-animation":"smooth"}}),n("br"),n("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:"",xl4:""}},[n("v-card",{attrs:{flat:"",color:"transparent","max-width":"500"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("vue-load-image",[n("img",{attrs:{slot:"image",src:""},slot:"image"}),n("div",{attrs:{slot:"error"},slot:"error"},[t._v("error message")])]),n("h3",{staticClass:"headline mb-0"},[n("span",[t._v("About")]),n("span",{staticClass:"green--text"},[t._v("Us")])]),n("div",[n("p",[t._v("\n              Hallo!kami dari AGM project,kawula muda yang ingin mendapatkan pekerjaan tetap maupun \n               "),n("span",{staticClass:"green--text font-weight-bold"},[t._v("Freelance")]),t._v(", basic kami ada di fotographer,videographer,IT support,dan Android Developer,Website ini adalah Portofolio kami\n             ")])])],1)]),n("v-card-actions",{staticClass:"hidden-sm-and-down"},t._l(t.icons,(function(e){return n("v-btn",{key:e.icon,attrs:{fab:"",dark:"",outline:"",color:"green",href:e.href,target:"_blank"}},[n("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))])],1)})),1),n("v-card-actions",{staticClass:"hidden-md-and-up justify-center"},t._l(t.icons,(function(e){return n("v-btn",{key:e.icon,attrs:{small:"",fab:"",dark:"",outline:"",color:"green",href:e.href,target:"_blank"}},[n("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))])],1)})),1)],1)],1)],1)},G=[],U=n("e956"),Z=n("83c1"),z=n.n(Z),R=n("118d"),W=n.n(R),q={metaInfo:{title:"Home",titleTemplate:"%s ← Eldin's Space",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Eldin Zaimovic's Portfolio"},{charset:"utf-8"},{property:"og:title",content:"Eldin' Space"},{property:"og:site_name",content:"Eldin' Space"},{property:"og:type",content:"website"},{property:"og:url",content:"https://eldin.space"},{property:"og:image",content:"https://i.imgur.com/Dcz2PGx.jpg"},{property:"og:description",content:"Eldin Zaimovic's Portfolio"}]},components:{"vue-typer":U["VueTyper"],VueCompareImage:z.a,"vue-load-image":W.a},data:function(){return{icons:[{href:"https://github.com/agmproject",icon:"fab fa-github"},{href:"https://stackoverflow.com/users/17482573/agmproject",icon:"fab fa-stack-overflow"},{href:"https://www.linkedin.com/in/miftah-akbar-44766b1b1/",icon:"fab fa-linkedin-in"},{href:"",icon:"fab fa-instagram"}],text1:["Android Developer","It Support","Videographer","Photographer"]}}},J=q,K=(n("cccb"),n("b0af")),Y=n("99d9"),Q=n("12b2"),X=n("0e8f"),tt=n("a722"),et=Object(d["a"])(J,$,G,!1,null,null,null),nt=et.exports;f()(et,{VBtn:v["a"],VCard:K["a"],VCardActions:Y["a"],VCardTitle:Q["a"],VFlex:X["a"],VIcon:m["a"],VLayout:tt["a"]});var at=n("0a89"),ot=n.n(at);a["default"].use(B["a"]),a["default"].use(ot.a);var rt=new B["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:nt},{path:"/contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/blog/:id",name:"blogPost",component:function(){return n.e("about").then(n.bind(null,"6b0f"))}},{path:"/services",name:"services",component:function(){return n.e("about").then(n.bind(null,"f23e"))}},{path:"/portfolio",name:"portfolio",component:function(){return n.e("about").then(n.bind(null,"d084"))}},{path:"/portfolio/video",name:"videoPortfolio",component:function(){return n.e("about").then(n.bind(null,"acf1"))}},{path:"/portfolio/android",name:"android",component:function(){return n.e("about").then(n.bind(null,"d070"))}},{path:"/portfolio/application",name:"application",component:function(){return n.e("about").then(n.bind(null,"7723"))}},{path:"/portfolio/photo",name:"android",component:function(){return n.e("about").then(n.bind(null,"1d5b"))}},{path:"/portfolio/network",name:"android",component:function(){return n.e("about").then(n.bind(null,"f940"))}},{path:"/portfolio/graphic",name:"graphicPortfolio",component:function(){return n.e("about").then(n.bind(null,"cc8b"))}},{path:"/portfolio/web",name:"webPortfolio",component:function(){return n.e("about").then(n.bind(null,"c753"))}},{path:"*",name:"Error",component:function(){return n.e("about").then(n.bind(null,"dda8"))}}]}),it=n("9747"),lt=n.n(it),st=n("0284"),ct=n.n(st);a["default"].config.productionTip=!1;var ut=!0;new a["default"]({router:rt,render:function(t){return t(N)}}).$mount("#app"),a["default"].use(lt.a),a["default"].use(ct.a,{id:"UA-139190314-1",router:rt,debug:{enabled:!ut,sendHitTask:ut}})},"64a9":function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("d563"),o=n.n(a);o.a},d563:function(t,e,n){}});
//# sourceMappingURL=app.543344a5.js.map