"use strict";(self["webpackChunkgamesopinion"]=self["webpackChunkgamesopinion"]||[]).push([[922],{102:function(n,e,i){i.r(e),i.d(e,{default:function(){return l}});var t=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",[i("h1",[n._v("Editando la opinión del juego "+n._s(n.opinion.nameGame))]),i("div",[i("form",{attrs:{action:""}},[n._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:n.newName,expression:"newName"}],attrs:{type:"text"},domProps:{value:n.newName},on:{input:function(e){e.target.composing||(n.newName=e.target.value)}}}),n._m(1),i("textarea",{directives:[{name:"model",rawName:"v-model",value:n.newOpinion,expression:"newOpinion"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:n.newOpinion},on:{input:function(e){e.target.composing||(n.newOpinion=e.target.value)}}})])]),i("div",[i("button",{staticClass:"btn btn-secondary btn-md",on:{click:n.ReturnOpinion}},[n._v("Regresar")]),i("button",{staticClass:"btn btn-info btn-md",on:{click:n.SaveBack}},[n._v("Guardar")])])])},o=[function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"title-nombre"},[i("label",{attrs:{for:""}},[n._v("Nombre")])])},function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"title-opinion"},[i("label",{attrs:{for:""}},[n._v("Opinión")])])}],a=i(629),s={name:"opinion-edit",props:{index:{type:Number}},data:function(){return{newOpinion:"",newGame:"",newName:""}},computed:{...(0,a.rn)(["opiniones"]),opinion(){return this.opiniones[this.index]}},methods:{...(0,a.nv)(["saveOpinion"]),ReturnOpinion(){this.$router.push("/admin-view")},SaveBack(){let n={opinion:this.newOpinion,nameGame:this.newGame,name:this.newName};this.saveOpinion({index:this.index,opinion:n}),this.ReturnOpinion()}},created(){console.log(this.opiniones[this.index]),this.newOpinion=this.opiniones[this.index].opinion,this.newGame=this.opiniones[this.index].nameGame,this.newName=this.opiniones[this.index].name}},r=s,m=i(1),p=(0,m.Z)(r,t,o,!1,null,"d8ef6c5a",null),l=p.exports}}]);
//# sourceMappingURL=edit.546e16dd.js.map