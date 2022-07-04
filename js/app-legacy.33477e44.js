(function(){"use strict";var e={1288:function(e,t,a){a(6992),a(8674),a(9601),a(7727);var n=a(144),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("li",[n("router-link",{attrs:{tag:"li",to:"/"}},[n("img",{staticClass:"d-inline-block align-text-top",attrs:{src:a(1199),alt:"",width:"45",height:"45"}}),n("span",[e._v("Games Opinion")])])],1)]),e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[n("ul",{staticClass:"navbar-nav ms-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fa-solid fa-house-chimney icon"}),e._v("Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/opinion-view"}},[n("i",{staticClass:"fa-solid fa-comments icon"}),e._v("Opiniones")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/admin-view"}},[n("i",{staticClass:"fa-solid fa-users-gear icon"}),e._v("Administración")])],1)])])])]),n("router-view"),n("div",{staticClass:"card text-center pt-5 bg-dark"},[n("div",{staticClass:"card-footer text-muted"},[n("router-link",{attrs:{to:"/"}},[e._v("GAMES OPINION - ® Derechos Reservados - 2020 ")])],1)])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],r=a(1001),s={},d=(0,r.Z)(s,i,o,!1,null,"ce136bc8",null),c=d.exports,l=(a(1539),a(8783),a(3948),a(8345)),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("Listado de Juegos Disponibles")]),a("div",{staticClass:"row"},e._l(e.games,(function(e,t){return a("card-games",{key:e.name,staticClass:"col col-md-3 m-5",attrs:{game:e,index:t}})})),1)])},m=[],p=a(3019),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-md-4"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.game.background_image,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.game.name))]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[e._v("Rating: "+e._s(e.game.rating))]),a("li",{staticClass:"list-group-item"},[e._v("Released: "+e._s(e.game.released))]),a("li",{staticClass:"list-group-item"},[e._v("Updated: "+e._s(e.game.updated))])]),a("a",{staticClass:"btn btn-info",attrs:{href:"#","data-bs-toggle":"modal","data-bs-target":"#exampleModal"+e.index}},[e._v("Opinar")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal"+e.index,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v('Escribe tu opinión para el juego "'+e._s(e.game.name)+'"')]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),a("div",{staticClass:"modal-body"},[a("form",{attrs:{action:""}},[a("div",{staticClass:"input"},[a("label",{attrs:{for:""}},[e._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.nombre,expression:"nombre"}],attrs:{type:"text"},domProps:{value:e.nombre},on:{input:function(t){t.target.composing||(e.nombre=t.target.value)}}})]),a("div",{staticClass:"textarea"},[a("label",{attrs:{for:""}},[e._v("Opinión")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.opinion,expression:"opinion"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.opinion},on:{input:function(t){t.target.composing||(e.opinion=t.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[e._v("Cerrar")]),a("button",{staticClass:"btn btn-info",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:e.getSubmitForm}},[e._v("Guardar opinión")])])])])])])},g=[],b=(a(9653),a(8309),a(629)),v={name:"card-games",props:{game:{type:Object},index:{type:Number}},data:function(){return{nombre:"",opinion:""}},computed:{},methods:(0,p.Z)((0,p.Z)({},(0,b.nv)(["addOpinion"])),{},{getSubmitForm:function(){if(""!==this.nombre&&""!==this.opinion){var e={name:this.nombre,opinion:this.opinion,nameGame:this.game.name};this.addOpinion(e)}else alert("Rellenar toda la información: nombre y opinión.")}})},h=v,C=(0,r.Z)(h,f,g,!1,null,"53962b19",null),_=C.exports,y={name:"HomeView",components:{"card-games":_},computed:(0,p.Z)({},(0,b.rn)(["games"]))},w=y,k=(0,r.Z)(w,u,m,!1,null,"fb41ccec",null),O=k.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid bg-dark principal"},[n("h3",[e._v(" La página que buscas no existe 😕")]),n("img",{staticClass:"img-fluid",attrs:{src:a(4421),alt:"..."}})])}],E={name:"not-found",data:function(){return{}}},j=E,S=(0,r.Z)(j,x,N,!1,null,"01caf0b8",null),P=S.exports;n.Z.use(l.Z);var T=[{path:"/",name:"home",component:O},{path:"/opinion-view",name:"opinion",component:function(){return a.e(687).then(a.bind(a,7055))}},{path:"/admin-view",name:"admin",component:function(){return a.e(328).then(a.bind(a,7007))}},{path:"/opinion-edit/:index",name:"edit",props:!0,component:function(){return a.e(922).then(a.bind(a,9102))}},{path:"*",component:P}],A=new l.Z({mode:"history",base:"/gamesopinion/",routes:T}),I=A,Z=(a(561),JSON.parse('[{"name":"Grand Theft Auto V","rating":4.48,"released":"2013-09-17","updated":"2020-09-23","background_image":"https://cdn.forbes.com.mx/2020/05/Grand-Theft-Auto-V-640x360.jpg"},{"name":"Portal 2","rating":4.62,"released":"2011-04-18","updated":"2020-08-03","background_image":"https://pivigames.blog/wp-content/uploads/2018/07/portal-2-mac-2844-0-min.jpg"},{"name":"The Witcher 3: Wild Hunt","rating":4.67,"released":"2015-05-18","updated":"2022-01-02","background_image":"https://media.rawg.io/media/games/088/088b41ca3f9d22163e43be07acf42304.jpg"},{"name":"Tomb Raider (2013)","rating":4.05,"released":"2013-03-05","updated":"2022-04-19","background_image":"https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg"},{"name":"The Elder Scrolls V: Skyrim","rating":4.42,"released":"2011-11-11","updated":"2020-07-06","background_image":"https://media.rawg.io/media/games/148/1485f72434101885b098d4290bf0ba67.jpg"},{"name":"Counter-Strike: Global Offensive","rating":3.57,"released":"2012-08-21","updated":"2020-08-07","background_image":"https://media.rawg.io/media/games/ded/dedd631793c5666ffab9ef03975eb226.jpg"},{"name":"Left 4 Dead 2","rating":4.09,"released":"2009-11-17","updated":"2021-11-24","background_image":"https://media.rawg.io/media/games/c25/c25ebb8eb08790277ae2e2dce0d62174.jpg"},{"name":"Grand Theft Auto IV","rating":4.23,"released":"2008-04-29","updated":"2019-11-24","background_image":"https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"},{"name":"Life is Strange","rating":4.13,"released":"2015-01-29","updated":"2021-11-24","background_image":"https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"},{"name":"Portal","rating":4.49,"released":"2007-10-09","updated":"2020-11-24","background_image":"https://media.rawg.io/media/screenshots/19d/19d3effb85e8f40d0b5b004fb5ab5c76.jpg"},{"name":"BioShock Infinite","rating":4.36,"released":"2013-03-26","updated":"2021-10-2","background_image":"https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"},{"name":"half-life-2","rating":4.47,"released":"2004-11-16","updated":"2021-06-6","background_image":"https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"}]'));n.Z.use(b.ZP);var D=new b.ZP.Store({state:{games:Z,opiniones:[]},getters:{countOpiniones:function(e){return e.opiniones.length}},mutations:{ADD_OPINION:function(e,t){e.opiniones.push(t)},SAVE_OPINION:function(e,t){e.opiniones.splice(t.index,1,t.opinion)},DELETE_OPINION:function(e,t){e.opiniones.splice(t,1)}},actions:{addOpinion:function(e,t){var a=e.commit;a("ADD_OPINION",t)},saveOpinion:function(e,t){var a=e.commit;a("SAVE_OPINION",t)},deleteOpinion:function(e,t){var a=e.commit;a("DELETE_OPINION",t)}},modules:{}});a(7244);n.Z.config.productionTip=!1,new n.Z({router:I,store:D,render:function(e){return e(c)}}).$mount("#app")},1199:function(e,t,a){e.exports=a.p+"img/1.041b87bc.png"},4421:function(e,t,a){e.exports=a.p+"img/not-found.198d0af8.png"}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,o){if(!n){var r=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],o=e[l][2];for(var s=!0,d=0;d<n.length;d++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[d])}))?n.splice(d--,1):(s=!1,o<r&&(r=o));if(s){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+{328:"admin",687:"opinion",922:"edit"}[e]+"-legacy."+{328:"0c4520e4",687:"a18beb08",922:"58e108fe"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+{328:"admin",687:"opinion",922:"edit"}[e]+"."+{328:"043b8113",687:"f92dae12",922:"d1f0c772"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gamesopinion:";a.l=function(n,i,o,r){if(e[n])e[n].push(i);else{var s,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){s=u;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[i];var m=function(t,a){s.onerror=s.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),d&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/gamesopinion/"}(),function(){var e=function(e,t,a,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)a();else{var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=r,d.request=s,i.parentNode.removeChild(i),n(d)}};return i.onerror=i.onload=o,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var i=a[n],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){i=r[n],o=i.getAttribute("data-href");if(o===e||o===t)return i}},n=function(n){return new Promise((function(i,o){var r=a.miniCssF(n),s=a.p+r;if(t(r,s))return i();e(n,s,i,o)}))},i={143:0};a.f.miniCss=function(e,t){var a={328:1,687:1,922:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=n(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,n){var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise((function(a,n){i=e[t]=[a,n]}));n.push(i[2]=o);var r=a.p+a.u(t),s=new Error,d=function(n){if(a.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,i[1](s)}};a.l(r,d,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,r=n[0],s=n[1],d=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(d)var l=d(a)}for(t&&t(n);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},n=self["webpackChunkgamesopinion"]=self["webpackChunkgamesopinion"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1288)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.33477e44.js.map