(function(t){function e(e){for(var a,i,s=e[0],o=e[1],u=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-norris/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2048:function(t,e,n){"use strict";var a=n("a5d0"),r=n.n(a);r.a},2127:function(t,e,n){t.exports=n.p+"img/avatar-active.e0cb7b27.svg"},"22ee":function(t,e,n){t.exports=n.p+"img/search.6f8ad347.svg"},3660:function(t,e,n){"use strict";var a=n("c31e"),r=n.n(a);r.a},"36e9":function(t,e,n){t.exports=n.p+"img/avatar-disabled.359167ce.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("frames",[t.isMobile?t._e():n("template",{slot:"left"},[n("container-left")],1),n("template",{slot:"right"},[t.isMobile?n("container-left"):t._e(),n("container-facts")],1)],2)],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frames"},[n("div",{staticClass:"frames_side left"},[t._t("left")],2),n("div",{staticClass:"frames_side right"},[t._t("right"),t._l(9,(function(t){return n("div",{key:"s-"+t,class:"square"+t})})),t._l(4,(function(t){return n("div",{key:"e-"+t,class:"elipsis"+t})}))],2)])},s=[],o={name:"Frames"},u=o,l=(n("b16a"),n("2877")),f=Object(l["a"])(u,i,s,!1,null,"1351f86a",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container_facts"},[t._l(3,(function(t,e){return n("input",{key:e,attrs:{id:"s"+e,type:"radio",name:"slider"},domProps:{value:e,checked:0===e}})})),t._l(t.availableFacts,(function(e,a){return n("fact",t._b({key:e.id,attrs:{id:"slide"+a,"for-check":"s"+a,active:t.lessThenSize===a,"total-facts":t.facts.length},on:{select:t.selectFact}},"fact",e,!1))}))],2)},v=[],h=(n("99af"),n("fb6a"),n("96cf"),n("1da1")),m=n("2909");function b(t){var e=t.state,n=t.mutations;return{state:a["a"].observable(e),commit:function(t){for(var a=arguments.length,r=new Array(a>1?a-1:0),c=1;c<a;c++)r[c-1]=arguments[c];n[t].apply(n,[e].concat(r))}}}var g=b({state:{query:""},mutations:{search:function(t,e){t.query=e}}}),_=g,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"fact_container",class:{disabled:!t.active},attrs:{id:t.id,for:t.forCheck},on:{click:t.selectFact}},[n("div",{staticClass:"fact_avatar"},[n("img",{attrs:{src:t.avatarUrl}})]),n("div",{staticClass:"fact_message",class:{disabled:!t.active}},[n("span",{staticClass:"fact_message-text"},[t._v(" "+t._s(t.value)+" ")]),n("div",{staticClass:"fact_info"},[n("a",{staticClass:"fact_info-link",class:{disabled:!t.active},attrs:{href:t.url,disabled:!t.active,target:"_blank"}},[t._v(" See more ")]),n("span",{staticClass:"fact_info-counter"},[t._v(" "+t._s(t.currentFact)+"/"+t._s(t.totalFacts)+" ")])])])])},k=[],w=(n("a9e3"),{name:"Fact",props:{forCheck:{type:String,default:""},id:{type:String,default:""},value:{type:String,default:""},url:{type:String,default:"#"},currentFact:{type:[Number,String],default:0},totalFacts:{type:[Number,String],default:0},active:{type:Boolean,default:!0}},computed:{avatarUrl:function(){var t=this.active?"active":"disabled";return n("7ac0")("./avatar-".concat(t,".svg"))}},methods:{selectFact:function(){this.$emit("select",this.currentFact)}}}),x=w,O=(n("a50d"),Object(l["a"])(x,y,k,!1,null,"3727242a",null)),C=O.exports,j=(n("d81d"),n("5530")),F=n("53ca"),S=n("bc3a"),E=n.n(S),R="https://api.chucknorris.io/jokes/",$=E.a.create({baseURL:R}),P=$,M=function(){return P.get("random")},T=function(t){return P.get("search?query=".concat(t))},q=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M();case 2:return e=t.sent,t.abrupt("return",L(e.data));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:return n=t.sent,t.abrupt("return",L(n.data.result));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(t){return!Array.isArray(t)&&"object"===Object(F["a"])(t)},L=function(t){return t?(N(t)&&(t=[t]),t.map((function(t,e){return Object(j["a"])({},t,{currentFact:e+1})}))):[]},U={name:"ContainerFacts",components:{Fact:C},data:function(){return{checker:1,facts:[]}},computed:{availableFacts:function(){var t=this.checker-2,e=this.checker+1,n=[];return 1!==this.checker&&2!==this.checker||(t=0),this.checker===this.facts.length&&1!==this.checker&&(n=this.facts.slice(0,1)),[].concat(Object(m["a"])(this.facts.slice(t,e)),Object(m["a"])(n))},lessThenSize:function(){return this.availableFacts.length>2?1:0},query:function(){return _.state.query}},watch:{query:function(t){this.getFacts(t)}},mounted:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t.facts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{selectFact:function(t){this.checker=t},getFacts:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,z(t);case 2:e.facts=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}},A=U,D=(n("3660"),Object(l["a"])(A,p,v,!1,null,"432c4977",null)),J=D.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container_left"},[t._m(0),n("span",{staticClass:"container_left-subtitle"},[t._v(" Type any word to know Chuck Norris facts ")]),n("search-fact")],1)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container_left-image"},[a("img",{staticClass:"image_icon",attrs:{src:n("700e")}}),a("p",{staticClass:"image_title"},[t._v(" Chuck Norris ")])])}],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search_fact"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"search_fact-input",attrs:{type:"text",placeholder:"Facts..."},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.value=e.target.value)}}}),a("img",{staticClass:"search_fact-icon",attrs:{src:n("22ee")},on:{click:t.search}})])},H=[],I={name:"SearchFact",data:function(){return{value:""}},methods:{search:function(){if(this.value){var t=this.value;this.value="",_.commit("search",t)}}}},K=I,Q=(n("2048"),Object(l["a"])(K,G,H,!1,null,"dcc7c96a",null)),V=Q.exports,X={name:"ContainerLeft",components:{SearchFact:V}},Y=X,Z=(n("85a5"),Object(l["a"])(Y,W,B,!1,null,"f11c05b6",null)),tt=Z.exports,et={name:"App",components:{Frames:d,ContainerFacts:J,ContainerLeft:tt},data:function(){return{width:window.innerWidth}},computed:{isMobile:function(){return this.width<=700}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.width=window.innerWidth}}},nt=et,at=(n("cf25"),Object(l["a"])(nt,r,c,!1,null,null,null)),rt=at.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(rt)}}).$mount("#app")},"59db":function(t,e,n){},"700e":function(t,e,n){t.exports=n.p+"img/little-chuck.311e528d.svg"},"7ac0":function(t,e,n){var a={"./avatar-active.svg":"2127","./avatar-disabled.svg":"36e9"};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=c,t.exports=r,r.id="7ac0"},"85a5":function(t,e,n){"use strict";var a=n("8847"),r=n.n(a);r.a},8847:function(t,e,n){},a50d:function(t,e,n){"use strict";var a=n("fc56"),r=n.n(a);r.a},a5d0:function(t,e,n){},b16a:function(t,e,n){"use strict";var a=n("59db"),r=n.n(a);r.a},c31e:function(t,e,n){},cf25:function(t,e,n){"use strict";var a=n("fea6"),r=n.n(a);r.a},fc56:function(t,e,n){},fea6:function(t,e,n){}});
//# sourceMappingURL=app.ee910d4a.js.map