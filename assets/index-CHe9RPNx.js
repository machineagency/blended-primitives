(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();var le=typeof window<"u"?window:null,pt=le===null,_e=pt?void 0:le.document,ce="addEventListener",de="removeEventListener",rt="getBoundingClientRect",Re="_a",ue="_b",ge="_c",Ue="horizontal",he=function(){return!1},Fn=pt?"calc":["","-webkit-","-moz-","-o-"].filter(function(r){var t=_e.createElement("div");return t.style.cssText="width:"+r+"calc(9px)",!!t.style.length}).shift()+"calc",nn=function(r){return typeof r=="string"||r instanceof String},xt=function(r){if(nn(r)){var t=_e.querySelector(r);if(!t)throw new Error("Selector "+r+" did not match a DOM element");return t}return r},re=function(r,t,o){var e=r[t];return e!==void 0?e:o},Ge=function(r,t,o,e){if(t){if(e==="end")return 0;if(e==="center")return r/2}else if(o){if(e==="start")return 0;if(e==="center")return r/2}return r},In=function(r,t){var o=_e.createElement("div");return o.className="gutter gutter-"+t,o},Xn=function(r,t,o){var e={};return nn(t)?e[r]=t:e[r]=Fn+"("+t+"% - "+o+"px)",e},zn=function(r,t){var o;return o={},o[r]=t+"px",o},On=function(r,t){if(t===void 0&&(t={}),pt)return{};var o=r,e,n,s,i,a,l;Array.from&&(o=Array.from(o));var c=xt(o[0]),d=c.parentNode,u=getComputedStyle?getComputedStyle(d):null,h=u?u.flexDirection:null,p=re(t,"sizes")||o.map(function(){return 100/o.length}),g=re(t,"minSize",100),y=Array.isArray(g)?g:o.map(function(){return g}),w=re(t,"maxSize",1/0),x=Array.isArray(w)?w:o.map(function(){return w}),L=re(t,"expandToMin",!1),P=re(t,"gutterSize",10),S=re(t,"gutterAlign","center"),N=re(t,"snapOffset",30),X=Array.isArray(N)?N:o.map(function(){return N}),z=re(t,"dragInterval",1),_=re(t,"direction",Ue),ae=re(t,"cursor",_===Ue?"col-resize":"row-resize"),ye=re(t,"gutter",In),be=re(t,"elementStyle",Xn),se=re(t,"gutterStyle",zn);_===Ue?(e="width",n="clientX",s="left",i="right",a="clientWidth"):_==="vertical"&&(e="height",n="clientY",s="top",i="bottom",a="clientHeight");function ee($,E,B,T){var H=be(e,E,B,T);Object.keys(H).forEach(function(V){$.style[V]=H[V]})}function D($,E,B){var T=se(e,E,B);Object.keys(T).forEach(function(H){$.style[H]=T[H]})}function J(){return l.map(function($){return $.size})}function fe($){return"touches"in $?$.touches[0][n]:$[n]}function f($){var E=l[this.a],B=l[this.b],T=E.size+B.size;E.size=$/this.size*T,B.size=T-$/this.size*T,ee(E.element,E.size,this[ue],E.i),ee(B.element,B.size,this[ge],B.i)}function M($){var E,B=l[this.a],T=l[this.b];this.dragging&&(E=fe($)-this.start+(this[ue]-this.dragOffset),z>1&&(E=Math.round(E/z)*z),E<=B.minSize+B.snapOffset+this[ue]?E=B.minSize+this[ue]:E>=this.size-(T.minSize+T.snapOffset+this[ge])&&(E=this.size-(T.minSize+this[ge])),E>=B.maxSize-B.snapOffset+this[ue]?E=B.maxSize+this[ue]:E<=this.size-(T.maxSize-T.snapOffset+this[ge])&&(E=this.size-(T.maxSize+this[ge])),f.call(this,E),re(t,"onDrag",he)(J()))}function k(){var $=l[this.a].element,E=l[this.b].element,B=$[rt](),T=E[rt]();this.size=B[e]+T[e]+this[ue]+this[ge],this.start=B[s],this.end=B[i]}function C($){if(!getComputedStyle)return null;var E=getComputedStyle($);if(!E)return null;var B=$[a];return B===0?null:(_===Ue?B-=parseFloat(E.paddingLeft)+parseFloat(E.paddingRight):B-=parseFloat(E.paddingTop)+parseFloat(E.paddingBottom),B)}function A($){var E=C(d);if(E===null||y.reduce(function(V,j){return V+j},0)>E)return $;var B=0,T=[],H=$.map(function(V,j){var ne=E*V/100,ke=Ge(P,j===0,j===$.length-1,S),We=y[j]+ke;return ne<We?(B+=We-ne,T.push(0),We):(T.push(ne-We),ne)});return B===0?$:H.map(function(V,j){var ne=V;if(B>0&&T[j]-B>0){var ke=Math.min(B,T[j]-B);B-=ke,ne=V-ke}return ne/E*100})}function R(){var $=this,E=l[$.a].element,B=l[$.b].element;$.dragging&&re(t,"onDragEnd",he)(J()),$.dragging=!1,le[de]("mouseup",$.stop),le[de]("touchend",$.stop),le[de]("touchcancel",$.stop),le[de]("mousemove",$.move),le[de]("touchmove",$.move),$.stop=null,$.move=null,E[de]("selectstart",he),E[de]("dragstart",he),B[de]("selectstart",he),B[de]("dragstart",he),E.style.userSelect="",E.style.webkitUserSelect="",E.style.MozUserSelect="",E.style.pointerEvents="",B.style.userSelect="",B.style.webkitUserSelect="",B.style.MozUserSelect="",B.style.pointerEvents="",$.gutter.style.cursor="",$.parent.style.cursor="",_e.body.style.cursor=""}function F($){if(!("button"in $&&$.button!==0)){var E=this,B=l[E.a].element,T=l[E.b].element;E.dragging||re(t,"onDragStart",he)(J()),$.preventDefault(),E.dragging=!0,E.move=M.bind(E),E.stop=R.bind(E),le[ce]("mouseup",E.stop),le[ce]("touchend",E.stop),le[ce]("touchcancel",E.stop),le[ce]("mousemove",E.move),le[ce]("touchmove",E.move),B[ce]("selectstart",he),B[ce]("dragstart",he),T[ce]("selectstart",he),T[ce]("dragstart",he),B.style.userSelect="none",B.style.webkitUserSelect="none",B.style.MozUserSelect="none",B.style.pointerEvents="none",T.style.userSelect="none",T.style.webkitUserSelect="none",T.style.MozUserSelect="none",T.style.pointerEvents="none",E.gutter.style.cursor=ae,E.parent.style.cursor=ae,_e.body.style.cursor=ae,k.call(E),E.dragOffset=fe($)-E.end}}p=A(p);var I=[];l=o.map(function($,E){var B={element:xt($),size:p[E],minSize:y[E],maxSize:x[E],snapOffset:X[E],i:E},T;if(E>0&&(T={a:E-1,b:E,dragging:!1,direction:_,parent:d},T[ue]=Ge(P,E-1===0,!1,S),T[ge]=Ge(P,!1,E===o.length-1,S),h==="row-reverse"||h==="column-reverse")){var H=T.a;T.a=T.b,T.b=H}if(E>0){var V=ye(E,_,B.element);D(V,P,E),T[Re]=F.bind(T),V[ce]("mousedown",T[Re]),V[ce]("touchstart",T[Re]),d.insertBefore(V,B.element),T.gutter=V}return ee(B.element,B.size,Ge(P,E===0,E===o.length-1,S),E),E>0&&I.push(T),B});function W($){var E=$.i===I.length,B=E?I[$.i-1]:I[$.i];k.call(B);var T=E?B.size-$.minSize-B[ge]:$.minSize+B[ue];f.call(B,T)}l.forEach(function($){var E=$.element[rt]()[e];E<$.minSize&&(L?W($):$.minSize=E)});function Z($){var E=A($);E.forEach(function(B,T){if(T>0){var H=I[T-1],V=l[H.a],j=l[H.b];V.size=E[T-1],j.size=B,ee(V.element,V.size,H[ue],V.i),ee(j.element,j.size,H[ge],j.i)}})}function G($,E){I.forEach(function(B){if(E!==!0?B.parent.removeChild(B.gutter):(B.gutter[de]("mousedown",B[Re]),B.gutter[de]("touchstart",B[Re])),$!==!0){var T=be(e,B.a.size,B[ue]);Object.keys(T).forEach(function(H){l[B.a].element.style[H]="",l[B.b].element.style[H]=""})}})}return{setSizes:Z,getSizes:J,collapse:function(E){W(l[E])},destroy:G,parent:d,pairs:I}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=globalThis,Qe=Ne.trustedTypes,Et=Qe?Qe.createPolicy("lit-html",{createHTML:r=>r}):void 0,rn="$lit$",we=`lit$${Math.random().toFixed(9).slice(2)}$`,on="?"+we,Hn=`<${on}>`,Ce=document,Fe=()=>Ce.createComment(""),Ie=r=>r===null||typeof r!="object"&&typeof r!="function",gt=Array.isArray,Vn=r=>gt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",it=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Mt=/>/g,Me=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Ct=/"/g,sn=/^(?:script|style|textarea|title)$/i,an=r=>(t,...o)=>({_$litType$:r,strings:t,values:o}),O=an(1),Ee=an(2),$e=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Bt=new WeakMap,Le=Ce.createTreeWalker(Ce,129);function ln(r,t){if(!gt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}const Yn=(r,t)=>{const o=r.length-1,e=[];let n,s=t===2?"<svg>":t===3?"<math>":"",i=Te;for(let a=0;a<o;a++){const l=r[a];let c,d,u=-1,h=0;for(;h<l.length&&(i.lastIndex=h,d=i.exec(l),d!==null);)h=i.lastIndex,i===Te?d[1]==="!--"?i=kt:d[1]!==void 0?i=Mt:d[2]!==void 0?(sn.test(d[2])&&(n=RegExp("</"+d[2],"g")),i=Me):d[3]!==void 0&&(i=Me):i===Me?d[0]===">"?(i=n??Te,u=-1):d[1]===void 0?u=-2:(u=i.lastIndex-d[2].length,c=d[1],i=d[3]===void 0?Me:d[3]==='"'?Ct:Lt):i===Ct||i===Lt?i=Me:i===kt||i===Mt?i=Te:(i=Me,n=void 0);const p=i===Me&&r[a+1].startsWith("/>")?" ":"";s+=i===Te?l+Hn:u>=0?(e.push(c),l.slice(0,u)+rn+l.slice(u)+we+p):l+we+(u===-2?a:p)}return[ln(r,s+(r[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),e]};class Xe{constructor({strings:t,_$litType$:o},e){let n;this.parts=[];let s=0,i=0;const a=t.length-1,l=this.parts,[c,d]=Yn(t,o);if(this.el=Xe.createElement(c,e),Le.currentNode=this.el.content,o===2||o===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=Le.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(rn)){const h=d[i++],p=n.getAttribute(u).split(we),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:g[2],strings:p,ctor:g[1]==="."?Un:g[1]==="?"?Gn:g[1]==="@"?Kn:tt}),n.removeAttribute(u)}else u.startsWith(we)&&(l.push({type:6,index:s}),n.removeAttribute(u));if(sn.test(n.tagName)){const u=n.textContent.split(we),h=u.length-1;if(h>0){n.textContent=Qe?Qe.emptyScript:"";for(let p=0;p<h;p++)n.append(u[p],Fe()),Le.nextNode(),l.push({type:2,index:++s});n.append(u[h],Fe())}}}else if(n.nodeType===8)if(n.data===on)l.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf(we,u+1))!==-1;)l.push({type:7,index:s}),u+=we.length-1}s++}}static createElement(t,o){const e=Ce.createElement("template");return e.innerHTML=t,e}}function Pe(r,t,o=r,e){var i,a;if(t===$e)return t;let n=e!==void 0?(i=o._$Co)==null?void 0:i[e]:o._$Cl;const s=Ie(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,o,e)),e!==void 0?(o._$Co??(o._$Co=[]))[e]=n:o._$Cl=n),n!==void 0&&(t=Pe(r,n._$AS(r,t.values),n,e)),t}class Wn{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:e}=this._$AD,n=((t==null?void 0:t.creationScope)??Ce).importNode(o,!0);Le.currentNode=n;let s=Le.nextNode(),i=0,a=0,l=e[0];for(;l!==void 0;){if(i===l.index){let c;l.type===2?c=new Ve(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new qn(s,this,t)),this._$AV.push(c),l=e[++a]}i!==(l==null?void 0:l.index)&&(s=Le.nextNode(),i++)}return Le.currentNode=Ce,n}p(t){let o=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(t,e,o),o+=e.strings.length-2):e._$AI(t[o])),o++}}class Ve{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,o,e,n){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=e,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Pe(this,t,o),Ie(t)?t===te||t==null||t===""?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==$e&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==te&&Ie(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ce.createTextNode(t)),this._$AH=t}$(t){var s;const{values:o,_$litType$:e}=t,n=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=Xe.createElement(ln(e.h,e.h[0]),this.options)),e);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(o);else{const i=new Wn(n,this),a=i.u(this.options);i.p(o),this.T(a),this._$AH=i}}_$AC(t){let o=Bt.get(t.strings);return o===void 0&&Bt.set(t.strings,o=new Xe(t)),o}k(t){gt(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let e,n=0;for(const s of t)n===o.length?o.push(e=new Ve(this.O(Fe()),this.O(Fe()),this,this.options)):e=o[n],e._$AI(s),n++;n<o.length&&(this._$AR(e&&e._$AB.nextSibling,n),o.length=n)}_$AR(t=this._$AA.nextSibling,o){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,o);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var o;this._$AM===void 0&&(this._$Cv=t,(o=this._$AP)==null||o.call(this,t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,e,n,s){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=o,this._$AM=n,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=te}_$AI(t,o=this,e,n){const s=this.strings;let i=!1;if(s===void 0)t=Pe(this,t,o,0),i=!Ie(t)||t!==this._$AH&&t!==$e,i&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Pe(this,a[e+l],o,l),c===$e&&(c=this._$AH[l]),i||(i=!Ie(c)||c!==this._$AH[l]),c===te?t=te:t!==te&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!n&&this.j(t)}j(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Un extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===te?void 0:t}}class Gn extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class Kn extends tt{constructor(t,o,e,n,s){super(t,o,e,n,s),this.type=5}_$AI(t,o=this){if((t=Pe(this,t,o,0)??te)===$e)return;const e=this._$AH,n=t===te&&e!==te||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,s=t!==te&&(e===te||n);n&&this.element.removeEventListener(this.name,this,e),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,t):this._$AH.handleEvent(t)}}class qn{constructor(t,o,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){Pe(this,t)}}const ot=Ne.litHtmlPolyfillSupport;ot==null||ot(Xe,Ve),(Ne.litHtmlVersions??(Ne.litHtmlVersions=[])).push("3.2.1");const cn=(r,t,o)=>{const e=t;let n=e._$litPart$;return n===void 0&&(e._$litPart$=n=new Ve(t.insertBefore(Fe(),null),null,void 0,{})),n._$AI(r),n},Dn="modulepreload",Jn=function(r){return"/blended-primitives/"+r},$t={},Q=function(t,o,e){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(o.map(l=>{if(l=Jn(l),l in $t)return;$t[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Dn,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return n.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},dn=6,un=.6,jn=Object.assign({"../examples/Blank Swatch.json":()=>Q(()=>import("./Blank Swatch-C-MJK9lC.js"),[]),"../examples/Intarsia Circle.json":()=>Q(()=>import("./Intarsia Circle-CZToiUAM.js"),[]),"../examples/Lacy Leaf.json":()=>Q(()=>import("./Lacy Leaf-Bo9-0scE.js"),[]),"../examples/Layered Boundaries.json":()=>Q(()=>import("./Layered Boundaries-AoQhZRgJ.js"),[]),"../examples/Simple Intarsia.json":()=>Q(()=>import("./Simple Intarsia-DnwgVRRd.js"),[]),"../examples/Smiley.json":()=>Q(()=>import("./Smiley-BuuI_Uff.js"),[]),"../examples/asymmetric cables.json":()=>Q(()=>import("./asymmetric cables-CptDBWbT.js"),[]),"../examples/braid.json":()=>Q(()=>import("./braid-3154ALlV.js"),[]),"../examples/crisscross.json":()=>Q(()=>import("./crisscross-BE-knAYd.js"),[]),"../examples/diamond lace.json":()=>Q(()=>import("./diamond lace-CDqIbH9U.js"),[]),"../examples/doodlecowl.json":()=>Q(()=>import("./doodlecowl-w3zk-Z7A.js"),[]),"../examples/interdigital.json":()=>Q(()=>import("./interdigital-D5e0mtIR.js"),[]),"../examples/lace.json":()=>Q(()=>import("./lace-BJ-drJtA.js"),[]),"../examples/lace32.json":()=>Q(()=>import("./lace32-CN-KQvXC.js"),[]),"../examples/multicolor cable.json":()=>Q(()=>import("./multicolor cable-DA4feHV9.js"),[]),"../examples/openwork cables.json":()=>Q(()=>import("./openwork cables-DT-Or0AY.js"),[]),"../examples/origami herringbone.json":()=>Q(()=>import("./origami herringbone-CEZaxXVG.js"),[]),"../examples/test.json":()=>Q(()=>import("./test-BoJmIop9.js"),[]),"../examples/twist.json":()=>Q(()=>import("./twist-BLcQt4ka.js"),[]),"../examples/volume.json":()=>Q(()=>import("./volume-CbPidi55.js"),[])}),hn=new Set(["PURL","BT","BXR1","BXR2","BXR3","BXL1","BXL2","BXL3"]),ve={EMPTY:{pathdata:"M 0.25 0.25 L 0.75 0.75 M 0.25 0.75 L 0.75 0.25",path:new Path2D("M 0.25 0.25 L 0.75 0.75 M 0.25 0.75 L 0.75 0.25"),color:"#555555",stroke:"#ffffff",description:"Empty - a yarn never passes this needle."},KNIT:{pathdata:"M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.3 0.8 0.5 0.8 C 0.7 0.8 0.7 0.5 0.4 0.5 L 0 0.5",path:new Path2D("M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.3 0.8 0.5 0.8 C 0.7 0.8 0.7 0.5 0.4 0.5 L 0 0.5"),color:"#08ccab",description:"Knit - loop pulled from back to front."},PURL:{pathdata:"M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.7 0.2 0.5 0.2 C 0.3 0.2 0.3 0.5 0.6 0.5 L 1 0.5",path:new Path2D("M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.7 0.2 0.5 0.2 C 0.3 0.2 0.3 0.5 0.6 0.5 L 1 0.5"),color:"#079e85",description:"Purl - loop pulled from front to back."},FM:{pathdata:"M 0 0.5 L 1 0.5",path:new Path2D("M 0 0.5 L 1 0.5"),color:"#fbacda",yarnModeColor:"#FFFFFF",description:"Front miss"},BM:{pathdata:"M 0 0.5 L 1 0.5",path:new Path2D("M 0 0.5 L 1 0.5"),color:"#de75b2",yarnModeColor:"#FFFFFF",description:"Back miss"},FT:{pathdata:"M 1 0.5 L 0.8 0.5 C 0.7 0.5 0.65 0.5 0.6 0.55 C 0.55 0.6 0.6 0.8 0.5 0.8 C 0.4 0.8 0.45 0.6 0.4 0.55 C 0.35 0.5 0.3 0.5 0.2 0.5 L 0 0.5",path:new Path2D("M 1 0.5 L 0.8 0.5 C 0.7 0.5 0.65 0.5 0.6 0.55 C 0.55 0.6 0.6 0.8 0.5 0.8 C 0.4 0.8 0.45 0.6 0.4 0.55 C 0.35 0.5 0.3 0.5 0.2 0.5 L 0 0.5"),color:"#eb4034",yarnModeColor:"#FFFFFF",description:"Front tuck"},BT:{pathdata:"M 0 0.5 L 0.2 0.5 C 0.3 0.5 0.35 0.5 0.4 0.45 C 0.45 0.4 0.4 0.2 0.5 0.2 C 0.6 0.2 0.55 0.4 0.6 0.45 C 0.65 0.5 0.7 0.5 0.8 0.5 L 1 0.5",path:new Path2D("M 0 0.5 L 0.2 0.5 C 0.3 0.5 0.35 0.5 0.4 0.45 C 0.45 0.4 0.4 0.2 0.5 0.2 C 0.6 0.2 0.55 0.4 0.6 0.45 C 0.65 0.5 0.7 0.5 0.8 0.5 L 1 0.5"),color:"#b03027",yarnModeColor:"#FFFFFF",description:"Back tuck"},FXR1:{pathdata:"M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.869 0.771 0.867 C 0.932 0.869 0.7 0.5 0.4 0.5 L 0 0.5 M 0.18 0.65 L 0.25 0.57 V 0.85 M 0.18 0.85 H 0.32",path:new Path2D("M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.869 0.771 0.867 C 0.932 0.869 0.7 0.5 0.4 0.5 L 0 0.5 M 0.18 0.65 L 0.25 0.57 V 0.85 M 0.18 0.85 H 0.32"),color:"#9557b4",description:"1x front transfer right"},FXR2:{pathdata:"M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.869 0.771 0.867 C 0.932 0.869 0.7 0.5 0.4 0.5 L 0 0.5 M 0.176 0.69 c 0.028 -0.136 0.186 -0.041 0.127 0.023 l -0.124 0.129 h 0.141",path:new Path2D("M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.869 0.771 0.867 C 0.932 0.869 0.7 0.5 0.4 0.5 L 0 0.5 M 0.176 0.69 c 0.028 -0.136 0.186 -0.041 0.127 0.023 l -0.124 0.129 h 0.141"),color:"#9557b4",description:"2x front transfer right"},FXR3:{pathdata:"M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.869 0.771 0.867 C 0.932 0.869 0.7 0.5 0.4 0.5 L 0 0.5 M 0.187 0.61 c 0.112 -0.071 0.151 0.108 0.034 0.106 c 0.116 0.003 0.099 0.175 -0.03 0.122",path:new Path2D("M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.869 0.771 0.867 C 0.932 0.869 0.7 0.5 0.4 0.5 L 0 0.5 M 0.187 0.61 c 0.112 -0.071 0.151 0.108 0.034 0.106 c 0.116 0.003 0.099 0.175 -0.03 0.122"),color:"#9557b4",description:"3x front transfer right"},FXL1:{pathdata:"M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.869 0.229 0.867 C 0.068 0.869 0.3 0.5 0.6 0.5 L 1 0.5 M 0.68 0.65 L 0.75 0.57 V 0.85 M 0.68 0.85 H 0.82",path:new Path2D("M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.869 0.229 0.867 C 0.068 0.869 0.3 0.5 0.6 0.5 L 1 0.5 M 0.68 0.65 L 0.75 0.57 V 0.85 M 0.68 0.85 H 0.82"),color:"#de9321",description:"1x front transfer left"},FXL2:{pathdata:"M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.869 0.229 0.867 C 0.068 0.869 0.3 0.5 0.6 0.5 L 1 0.5 M 0.661 0.687 c 0.028 -0.136 0.186 -0.041 0.127 0.023 l -0.124 0.129 h 0.141",path:new Path2D("M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.869 0.229 0.867 C 0.068 0.869 0.3 0.5 0.6 0.5 L 1 0.5 M 0.661 0.687 c 0.028 -0.136 0.186 -0.041 0.127 0.023 l -0.124 0.129 h 0.141"),color:"#de9321",description:"2x front transfer left"},FXL3:{pathdata:"M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.869 0.229 0.867 C 0.068 0.869 0.3 0.5 0.6 0.5 L 1 0.5 M 0.708 0.612 c 0.112 -0.071 0.151 0.108 0.034 0.106 c 0.116 0.003 0.099 0.175 -0.03 0.122",path:new Path2D("M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.869 0.229 0.867 C 0.068 0.869 0.3 0.5 0.6 0.5 L 1 0.5 M 0.708 0.612 c 0.112 -0.071 0.151 0.108 0.034 0.106 c 0.116 0.003 0.099 0.175 -0.03 0.122"),color:"#de9321",description:"3x front transfer left"},BXR1:{pathdata:"M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.131 0.771 0.133 C 0.932 0.131 0.7 0.5 0.4 0.5 L 0 0.5 M 0.18 0.2 L 0.25 0.12 V 0.4 M 0.18 0.4 H 0.32",path:new Path2D("M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.131 0.771 0.133 C 0.932 0.131 0.7 0.5 0.4 0.5 L 0 0.5 M 0.18 0.2 L 0.25 0.12 V 0.4 M 0.18 0.4 H 0.32"),color:"#74448d",description:"1x back transfer right"},BXR2:{pathdata:"M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.131 0.771 0.133 C 0.932 0.131 0.7 0.5 0.4 0.5 L 0 0.5 M 0.156 0.213 c 0.028 -0.136 0.186 -0.041 0.127 0.023 l -0.124 0.129 h 0.141",path:new Path2D("M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.131 0.771 0.133 C 0.932 0.131 0.7 0.5 0.4 0.5 L 0 0.5 M 0.156 0.213 c 0.028 -0.136 0.186 -0.041 0.127 0.023 l -0.124 0.129 h 0.141"),color:"#74448d",description:"2x back transfer right"},BXR3:{pathdata:"M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.131 0.771 0.133 C 0.932 0.131 0.7 0.5 0.4 0.5 L 0 0.5 M 0.198 0.158 c 0.112 -0.071 0.151 0.108 0.034 0.106 c 0.116 0.003 0.099 0.175 -0.03 0.122",path:new Path2D("M 1 0.5 L 0.6 0.5 C 0.3 0.5 0.621 0.131 0.771 0.133 C 0.932 0.131 0.7 0.5 0.4 0.5 L 0 0.5 M 0.198 0.158 c 0.112 -0.071 0.151 0.108 0.034 0.106 c 0.116 0.003 0.099 0.175 -0.03 0.122"),color:"#74448d",description:"3x back transfer right"},BXL1:{pathdata:"M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.131 0.229 0.133 C 0.068 0.131 0.3 0.5 0.6 0.5 L 1 0.5 M 0.68 0.2 L 0.75 0.12 V 0.4 M 0.68 0.4 H 0.82",path:new Path2D("M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.131 0.229 0.133 C 0.068 0.131 0.3 0.5 0.6 0.5 L 1 0.5 M 0.68 0.2 L 0.75 0.12 V 0.4 M 0.68 0.4 H 0.82"),color:"#b47619",description:"1x back transfer left"},BXL2:{pathdata:"M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.131 0.229 0.133 C 0.068 0.131 0.3 0.5 0.6 0.5 L 1 0.5 M 0.666 0.212 c 0.028 -0.136 0.186 -0.041 0.127 0.023 l -0.124 0.129 h 0.141",path:new Path2D("M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.131 0.229 0.133 C 0.068 0.131 0.3 0.5 0.6 0.5 L 1 0.5 M 0.666 0.212 c 0.028 -0.136 0.186 -0.041 0.127 0.023 l -0.124 0.129 h 0.141"),color:"#b47619",description:"2x back transfer left"},BXL3:{pathdata:"M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.131 0.229 0.133 C 0.068 0.131 0.3 0.5 0.6 0.5 L 1 0.5 M 0.711 0.144 c 0.112 -0.071 0.151 0.108 0.034 0.106 c 0.116 0.003 0.099 0.175 -0.03 0.122",path:new Path2D("M 0 0.5 L 0.4 0.5 C 0.7 0.5 0.379 0.131 0.229 0.133 C 0.068 0.131 0.3 0.5 0.6 0.5 L 1 0.5 M 0.711 0.144 c 0.112 -0.071 0.151 0.108 0.034 0.106 c 0.116 0.003 0.099 0.175 -0.03 0.122"),color:"#b47619",description:"3x back transfer left"},TRANSPARENT:{pathdata:"",path:new Path2D,color:"#dfdfdf7f",description:"transparent"},FTB:{color:"#fcff46"},BTF:{color:"#afff46"},FL1:{color:"#de9321"},FL2:{color:"#de9321"},FL3:{color:"#de9321"},FR1:{color:"#9557b4"},FR2:{color:"#9557b4"},FR3:{color:"#9557b4"},BL1:{color:"#b47619"},BL2:{color:"#b47619"},BL3:{color:"#b47619"},BR1:{color:"#74448d"},BR2:{color:"#74448d"},BR3:{color:"#74448d"}},fn={brush:{icon:"fa-solid fa-paintbrush",hotkey:"b"},flood:{icon:"fa-solid fa-fill-drip fa-flip-horizontal",hotkey:"f"},rect:{icon:"fa-solid fa-vector-square",hotkey:"r"},line:{icon:"fa-solid fa-minus",hotkey:"l"},shift:{icon:"fa-solid fa-right-left",hotkey:"s"},move:{hotkey:"h"}},m={EMPTY:0,KNIT:1,PURL:2,FM:3,BM:4,FT:5,BT:6,FXR1:7,FXR2:8,FXR3:9,FXL1:10,FXL2:11,FXL3:12,BXR1:13,BXR2:14,BXR3:15,BXL1:16,BXL2:17,BXL3:18,TRANSPARENT:19,FTB:20,BTF:21,FR1:22,FR2:23,FR3:24,FL1:25,FL2:26,FL3:27,BR1:28,BR2:29,BR3:30,BL1:31,BL2:32,BL3:33},dt=Object.keys(m),Y={ECN:0,PCN:1,ACN:2,UACN:3},xe=6,Pt=20;let v={exampleLibrary:jn,heldKeys:new Set,snapshots:[],lastSnapshot:0,transforming:!1,colorMode:"yarn",annotations:!1,interactionMode:"boundary",pointer:[0,0],locked:!1,cellAspect:11/7,activeTool:"pointer",activeSymbol:1,activeYarn:1,boundaries:[],regions:[],paths:[],blocks:[],blockEditMode:null,activeBlockTool:"brush",selectedBoundary:null,selectedPath:null,selectedBlock:null,stitchSelect:null,tucks:!1,chart:null,yarnChart:null,machineChart:null,rowMap:null,yarnSequence:[],passSchedule:[],yarnSchedule:[],timeNeedle:null,scale:15,cellWidth:15/7,cellHeight:15/11,chartPan:{x:0,y:0},bbox:{xMin:0,yMin:0},simScale:1,simPan:{x:0,y:0},flipped:!1,simLive:!0,kYarn:.06,yarnPalette:null,yarnWidth:.25,showSettings:!1,showDownload:!1,showUpload:!1,showExampleLibrary:!1,yarnExpanded:!1,showTimeNeedleView:!1,reverseScroll:!1};function Zn(r){return v={...v,...r},v}function At(r){return Zn(r)}function Qn(){if(v.snapshots.length<1)return;const r=Object.keys(v.snapshots[0]);v={...v,...v.snapshots[0],lastSnapshot:0,snapshots:v.snapshots.slice(1)},Be.syncState(v,r)}function b(r,t=!1){const o=Object.keys(r);t?(At(r),Be.requestRender(),Be.syncState(v,o)):Be.syncState(At(r),o)}const Be=(()=>{const r=[];function t(e,n){r.forEach(s=>{s.syncState(e,n)})}function o(e){e.forEach(n=>r.push(n({state:v})))}return{register:o,syncState:t}})(),oe={add([r,t],[o,e]){return[r+o,t+e]},sub([r,t],[o,e]){return[r-o,t-e]},scale([r,t],o){return[r*o,t*o]},abs([r,t]){return[Math.abs(r),Math.abs(t)]},mag([r,t]){return Math.sqrt(r*r+t*t)},dot([r,t],[o,e]){return r*o+t*e},normalize(r){return this.scale(r,1/this.mag(r))}};function pn([r,t],[o,e],[n,s],[i,a],l=0){function c([x,L],[P,S]){return Math.sqrt(Math.hypot(P-x,S-L))}const d=c([r,t],[o,e]),u=c([o,e],[n,s]),h=c([n,s],[i,a]),p=(1-l)*(n-o+u*((o-r)/d-(n-r)/(d+u))),g=(1-l)*(s-e+u*((e-t)/d-(s-t)/(d+u))),y=(1-l)*(n-o+u*((i-n)/h-(i-o)/(u+h))),w=(1-l)*(s-e+u*((a-s)/h-(a-e)/(u+h)));return[[p,g],[y,w]]}function ut([r,t],[o,e],[n,s],[i,a],l=0){const[[c,d],[u,h]]=pn([r,t],[o,e],[n,s],[i,a],l),p=[o+c/3,e+d/3],g=[n-u/3,s-h/3];return[[o,e],p,g,[n,s]]}function er(r,[t,o],[e,n],s,i=0){const[a,l]=pn(r,[t,o],[e,n],s,i),c=oe.add(oe.scale(oe.sub([t,o],[e,n]),2),oe.add(a,l)),d=oe.sub(oe.sub(oe.sub(oe.scale(oe.sub([t,o],[e,n]),-3),a),a),l),u=a,h=[t,o],p=oe.add(oe.add(oe.add(oe.scale(c,.5*.5*.5),oe.scale(d,.5*.5)),oe.scale(u,.5)),h);return[ut(r,[t,o],p,[e,n]),ut([t,o],p,[e,n],s)]}const pe={add(r,t){return{x:r.x+t.x,y:r.y+t.y}},sub(r,t){return{x:r.x-t.x,y:r.y-t.y}},scale(r,t){return{x:r.x*t,y:r.y*t}},abs(r){return{x:Math.abs(r.x),y:Math.abs(r.y)}},mag(r){return Math.sqrt(r.x*r.x+r.y*r.y)},dot(r,t){return r.x*t.x+r.y*t.y},normalize(r){return this.scale(r,1/this.mag(r))}};function tr(r=.05,t=.001,o=0,e=5,n=.5){let s=1,i=t,a=o,l=1-Math.pow(i,1/300),c=!0;console.log("simulating!!");function d(p,g,y,w){const x=pe.sub(p.pos,g.pos),L=pe.mag(x);if(L<y)return{x:0,y:0};const P=w*(L-y),S=pe.normalize(x),N=pe.scale(S,-P*s);p.f.x+=N.x,p.f.y+=N.y,g.f.x-=N.x,g.f.y-=N.y}function u(p,g){let y=0;for(var w=0;w<e;++w)s+=(a-s)*l,Object.entries(p).forEach(([x,L])=>{L.forEach(({sourceIndex:P,targetIndex:S,restLength:N,yarnIndex:X})=>{d(g[P],g[S],N,r)})}),g.forEach(x=>{x.v.x=(x.v.x+x.f.x)*n,x.v.y=(x.v.y+x.f.y)*n,x.pos=pe.add(x.pos,x.v),y+=pe.mag(x.f),x.f.x=0,x.f.y=0});s<i&&h()}function h(){c=!1,console.log("Stop!")}return{tick:u,stop:h,alpha:()=>s,running:()=>c}}function gn(r,t,o){let e=r-xe<0?0:r-xe,n=r+xe>=o.width?o.width-1:r+xe;const s=[];for(let i=e;i<=n;i++){let a=o.MV(i,t)[0];a!=null&&i+a==r&&s.push([i,t])}return s}function St(r,t,o){let e=[],n=t;for(;n>=0;){const[s,i,a]=o.CN(r,n),l=gn(r,n,o);if(i==Y.ECN&&a[0]==null&&a[1]==null||i==Y.ECN&&a[0]==0&&a[1]==-1||i==Y.PCN&&l.length>0){e=e.concat(l);let c=t-n;a[0]==null&&a[1]==null?o.setMV(r,n,[0,c]):o.CN(r,n)[2][1]=c}else if(i==Y.UACN&&l.length>0)e=e.concat(l);else return e;n=n-1}return e}function Rt(r,t,o){const e=o.CN(r+1,t-1),n=o.CN(r-1,t-1);return e[1]==Y.ACN&&e[2][0]==0&&e[2][1]==0&&r+1<o.width||n[1]==Y.ACN&&n[2][0]==0&&n[2][1]==0&&r>0}function K(r,t,o,e){const[n,s,i]=e.CN(r,t);if(e.setST(r,t,o),s==Y.PCN){if(i[0]==0){const a=gn(r,t,e);for(const[l,c]of a)e.AV(l,c)==Y.PCN&&e.setAV(l,c,Y.ACN)}}else if(s==Y.UACN){const a=St(r,t,e);for(const[l,c]of a)e.AV(l,c)==Y.PCN&&e.setAV(l,c,Y.ACN);Rt(r,t,e)&&e.setAV(r,t,Y.ACN)}else if(s==Y.ECN){const a=St(r,t,e);for(const[l,c]of a){let d=e.AV(l,c);(d==Y.PCN||d==Y.UACN&&Rt(l,c,e))&&e.setAV(l,c,Y.ACN)}}}function Tt(r,t,o){o.setAV(r,t+1,Y.ECN),o.setMV(r,t+1,[0,-1])}function Nt(r,t,o){o.setAV(r,t+1,Y.UACN),o.setMV(r,t+1,[0,0])}function Ke(r,t,o){if(o.MV(r,t)[1]>-1)o.MV(r,t)[1]=1;else{let e=!1,n=t;for(;n>0&&!e;)o.MV(r,n)[1]>0&&(o.MV(r,n)[1]+=1,e=!0),n=n-1}}function _t(r,t,o){o.setMV(r,t+1,[0,0]);const[e,n,s]=o.CN(r,t);n==Y.ACN&&s[0]==0&&s[1]==0?o.setAV(r,t+1,Y.PCN):o.setAV(r,t+1,Y.UACN)}function q(r,t,o,e){if(r+o<0||r+o>=e.width){console.error("Error! Attempting to transfer outside pattern bounds");return}e.setMV(r,t+1,[o,0]),e.setAV(r,t+1,Y.UACN)}function Ft(r,t,o,e,n){r==m.KNIT||r==m.PURL?(K(t,e,r,n),K(o,e,r,n),_t(t,e,n),_t(o,e,n)):r==m.FT||r==m.BT?(Ke(t,e,n),Ke(o,e,n),Nt(t,e,n),Nt(o,e,n)):r==m.FM||r==m.BM?(Ke(t,e,n),Ke(o,e,n),Tt(t,e,n),Tt(o,e,n)):r==m.FXL1?(K(t,e,m.KNIT,n),K(o,e,m.KNIT,n),q(t,e,-2,n),q(o,e,-2,n)):r==m.BXL1?(K(t,e,m.PURL,n),K(o,e,m.PURL,n),q(t,e,-2,n),q(o,e,-2,n)):r==m.FXR1?(K(t,e,m.KNIT,n),K(o,e,m.KNIT,n),q(t,e,2,n),q(o,e,2,n)):r==m.BXR1?(K(t,e,m.PURL,n),K(o,e,m.PURL,n),q(t,e,2,n),q(o,e,2,n)):r==m.FXL2?(K(t,e,m.KNIT,n),K(o,e,m.KNIT,n),q(t,e,-4,n),q(o,e,-4,n)):r==m.BXL2?(K(t,e,m.PURL,n),K(o,e,m.PURL,n),q(t,e,-4,n),q(o,e,-4,n)):r==m.FXR2?(K(t,e,m.KNIT,n),K(o,e,m.KNIT,n),q(t,e,4,n),q(o,e,4,n)):r==m.BXR2?(K(t,e,m.PURL,n),K(o,e,m.PURL,n),q(t,e,4,n),q(o,e,4,n)):r==m.FXL3?(K(t,e,m.KNIT,n),K(o,e,m.KNIT,n),q(t,e,-6,n),q(o,e,-6,n)):r==m.BXL3?(K(t,e,m.PURL,n),K(o,e,m.PURL,n),q(t,e,-6,n),q(o,e,-6,n)):r==m.FXR3?(K(t,e,m.KNIT,n),K(o,e,m.KNIT,n),q(t,e,6,n),q(o,e,6,n)):r==m.BXR3?(K(t,e,m.PURL,n),K(o,e,m.PURL,n),q(t,e,6,n),q(o,e,6,n)):r==m.EMPTY||console.error(`Stitch operation ${r} not supported`)}function nr(r,t){for(let o=0;o<r.height;o++){const e=o;if(r.carriagePasses[o]=="right")for(let n=0;n<r.width;n++){const s=r.op(n,o);Ft(s,2*n,2*n+1,e,t)}else if(r.carriagePasses[o]=="left")for(let n=r.width-1;n>-1;n--){const s=r.op(n,o);Ft(s,2*n+1,2*n,e,t)}}}function rr(r,t=!0){let o=2*r.width,e=r.height+1,n=Array.from({length:o*e},()=>[null,Y.ECN,[null,null],[],[],[]]);if(t)for(let i=0;i<2*r.width;i++)(r.op(Math.floor(i/2),0)==m.KNIT||r.op(Math.floor(i/2),0)==m.PURL)&&(n[i][1]=Y.PCN,n[i][2]=[0,0],n[i][4]=[-1]);const s={width:o,height:e,data:n,get length(){return this.data.length},CN(i,a){return this.data[a*o+i]},ST(i,a){return this.CN(i,a)[0]},AV(i,a){return this.CN(i,a)[1]},MV(i,a){return this.CN(i,a)[2]},CNL(i,a){return this.CN(i,a)[3]},YPI(i,a){return this.CN(i,a)[4]},CNO(i,a){return this.CN(i,a)[5]},setST(i,a,l){this.CN(i,a)[0]=l},setAV(i,a,l){this.CN(i,a)[1]=l},setMV(i,a,l){this.CN(i,a)[2]=l},setCNL(i,a,l){this.CN(i,a)[3]=l},setYPI(i,a,l){this.CN(i,a)[4]=l},setCNO(i,a,l){this.CN(i,a)[5]=l}};return nr(r,s),s}function ir(r,t,o){let e=0,n=0,s=!0,i=0,a=0;const l={},c=[];let d=0;for(;n<r.height;){const u=o[i]=="right";let h=t[i];const p=e%2==0,g=u===p?"F":"L";if(vn(e,n,s,c,r,o)){const y=mn(e,n,r);r.setCNL(e,n,y);let w;if(s){w=[e,n];for(const[L,P]of y)r.YPI(L,P).push(a)}else w=ze(e,n,r),w[0],w[1],g+"",r.YPI(e,n).push(a);let x=-1;for(const[L,[P,S]]of r.CNO(...w).entries())if(s&&r.YPI(P,S)[1]==a||!s&&r.YPI(P,S)[0]==a){x=L;break}x<0&&console.log(`Couldn't find the stack index for cn (${e},${n}), ypi${a}  `),x>d&&(d=x),c.push([...w,i,x]),h in l||(l[h]=[]),l[h].push([...w,i,x]),a++}({i:e,j:n,legNode:s,currentStitchRow:i}=yn(e,n,s,i,r,o))}return r.maxCNStack=d+1,l}function vn(r,t,o,e,n,s){if(o)return mn(r,t,n).length>0;{let i=n.AV(r,t);if(i==Y.ECN)return!1;if(i==Y.UACN){let a,l,c,d;const u=s[t-1]=="right",h=r%2==0;if(u!=h)[a,l,c,d]=e.at(-1);else{let y=!1,w=r,x=t,L=o,P=t-1;for(;!y;){const S=yn(w,x,L,P,n,s);if(S.i>=n.width||S.j>=n.height){console.error(`Error! Couldn't find the next CN when checking CN (${r}, ${t})`);break}vn(S.i,S.j,S.legNode,e,n,s)&&(y=!0,[a,l]=ze(S.i,S.j,n)),w=S.i,x=S.j,L=S.legNode,P=S.currentStitchRow}}const[p,g]=ze(r,t,n);return l<=g?(t<n.height-1&&n.setAV(r,t,Y.ACN),!0):!1}else return!0}}function ze(r,t,o){const[e,n]=o.MV(r,t);return e==0&&n==0?[r,t]:e!=0?ht(r+e,t,o):ht(r,t+n,o)}function ht(r,t,o){(r<0||r>=o.width||t<0||t>=o.height)&&(console.warn("Trying to move outside chart bounds"),console.log(r,t));const e=o.CN(r,t);return e[0]==m.KNIT||e[0]==m.PURL?[r,t]:e[2][0]==null&&e[2][1]==null?[r,t]:t==o.height-1?[r,t]:ht(r,t+e[2][1],o)}function mn(r,t,o){if(r>=o.width||t>=o.height)return[];const e=6,n=10;let s=r-e<0?0:r-e,i=r+e>=o.width?o.width-1:r+e,a=t-n<0?0:t-n,l=t;const c=[];for(let d=a;d<=l;d++)for(let u=s;u<=i;u++){let[h,p]=ze(u,d,o);h==r&&p==t&&o.AV(u,d)==Y.ACN&&c.push([u,d])}return c}function yn(r,t,o,e,n,s){const i=s[e]=="right",a=r%2==0;let l=r,c=t,d=o;return o?i?a?(c=t+1,d=!1):l=r+1:a?l=r-1:(c=t+1,d=!1):i?a?l=r+1:(c=t-1,d=!0):a?(c=t-1,d=!0):l=r-1,l<0||l>=n.width?{i:s[e+1]=="right"?0:n.width-1,j:e+1,legNode:!0,currentStitchRow:e+1}:{i:l,j:c,legNode:d,currentStitchRow:e}}function or(r,t){let o=[],e=Array.from(t.ops.slice((r-1)*t.width,r*t.width));const n=[m.FXL1,m.FXL2,m.FXL3,m.FXR1,m.FXR2,m.FXR3],s=[m.BXL1,m.BXL2,m.BXL3,m.BXR1,m.BXR2,m.BXR3];return e.some(i=>n.includes(i))?o=[m.KNIT,m.FXL1,m.BXL1,m.FXR1,m.BXR1,m.FXL2,m.BXL2,m.FXR2,m.BXR2,m.FXL3,m.BXL3,m.FXR3,m.BXR3,m.PURL]:e.some(i=>s.includes(i))?o=[m.KNIT,m.BXL3,m.BXR3,m.BXL2,m.BXR2,m.BXL1,m.BXR1,m.PURL]:o=[m.KNIT,m.PURL],e.includes(m.FT)&&o.splice(0,0,m.FT),e.includes(m.BT)&&o.push(m.BT),o}function sr(r,t,o){if(r>=o.width||t>=o.height)return[];let e=r-xe<0?0:r-xe,n=r+xe>=o.width?o.width-1:r+xe,s=t-Pt<0?0:t-Pt,i=t;const a=[];for(let l=s;l<=i;l++)for(let c=e;c<=n;c++){let[d,u]=ze(c,l,o);d==r&&u==t&&a.push([c,l])}return a}function ar(r,t){for(let o=0;o<r.height;o++)for(let e=0;e<r.width;e++)r.setCNO(e,o,lr(e,o,t,r))}function lr(r,t,o,e){let n=[],s=sr(r,t,e);if(s.length==0)return n;let i=cr(s,o);return i.toSorted((a,l)=>a[1]-l[1]),bn(i,o,n)}function bn(r,t,o){if(r.length!=0){let e=[],n=r[0][1],s=or(n,t),i=0;for(const[a,l,c]of r)if(l==n)e.push([a,l,c]),i++;else break;return r.splice(0,i),s.at(-1)==m.BT?o=It(e,s).concat(o):o=o.concat(It(e,s)),bn(r,t,o)}return o}function It(r,t){let o=[],e=[];for(const[s,i,a]of r)o.push([t.indexOf(a),s,i]);let n=o.toSorted((s,i)=>s[0]-i[0]);for(const[s,i,a]of n)e.push([i,a]);return e}function cr(r,t){let o=[];for(const[e,n]of r){let s=n-1,i;e%2==0?i=e/2:i=(e-1)/2,o.push([e,n,t.op(i,s)])}return o}function dr(r,t,o,e=1,n=.75){const s=e/2,i=e*n;return r.data.map((a,l)=>{const c=l%r.width,d=(l-c)/r.width,u=d<o.length?o[d]:t.height;return{pos:{x:c*s,y:(t.height-u)*i},f:{x:0,y:0},v:{x:0,y:0}}})}function ur(r,t,o,e=1,n=.75){const s=r.maxCNStack,i=Object.fromEntries(Object.keys(t).map(a=>[a,[]]));return Object.entries(t).forEach(([a,l])=>{for(let c=0;c<l.length-1;c++){const[d,u,h,p]=l[c],[g,y,w,x]=l[c+1];let L=d+u*r.width,P=g+y*r.width;const S=r.CN(d,u),N=r.CN(g,y);let X=S[4][1]===c,z=N[4][1]===c+1;const _=X==z,ae=X!=z,ye=d%2!=0,be=g%2!=0,se=ye==be;let ee,D,J;S[0]==m.KNIT?se||ae&&!se&&u>y?D=X?4*s:4*s-2*p:D=X?2*s+1:4*s-2*p-1:S[0]==m.PURL&&(se||ae&&!se?D=X?1:2*s-2*p-1:D=X?2*s:2*s-2*p),N[0]==m.KNIT?se||ae&&!se&&y>u?J=z?4*s:4*s-2*x:J=z?2*s+1:4*s-2*x-1:N[0]==m.PURL&&(se||ae&&!se?J=z?1:2*s-2*x-1:J=z?2*s:2*s-2*x),h!=w&&(S[0]==m.KNIT?D=D=X?1:2*s-2*p-1:S[0]==m.PURL&&(D=X?2*s+1:4*s-2*p-1),N[0]==m.KNIT?J=z?1:2*s-2*x-1:S[0]==m.PURL&&(J=z?2*s+1:4*s-2*p-1)),D==J?ee=D:D==null||J==null?ee=D??J:ee=[D,J],ee==null&&(ee=2*s);let fe=_?pe.mag(pe.sub(o[L].pos,o[P].pos))*n*.7:pe.mag(pe.sub(o[L].pos,o[P].pos))*.7;i[a].push({source:[d,u],target:[g,y],sourceIndex:L,targetIndex:P,restLength:fe,row:w,layer:ee,path:null})}}),i}function hr(r,t){let o=!1,e,n,s,i,a;const l=v.cellAspect,c=document.getElementById("canvas-container"),d=document.getElementById("sim-container").getBoundingClientRect(),u=d.width*t,h=d.height*t,p=devicePixelRatio*u,g=devicePixelRatio*h,y=[];D();let w,x;w=rr(r),ar(w,r),x=ir(w,r.yarnSequence,r.carriagePasses);const L=dr(w,v.chart,v.rowMap,n,l),P=ur(w,x,L,n,l),S=w.maxCNStack*4;J(),ee();function N(){return n*v.yarnWidth}function X([k,C],A,[R,F],[I,W]){const Z=r.carriagePasses[A]=="right",G=C==A,$=R-I,E=F-W,B=Math.sqrt($**2+E**2);if(B==0)return[0,0];const T=Z!=G?[-E/B,$/B]:[E/B,-$/B],[H,V]=_([k,C]);return[H+N()/2*T[0],V+N()/2*T[1]]}function z([k,C],A){const R=r.carriagePasses[A]=="right",[F,I]=_([k,C]);return R?[F-N()*.75,I+N()/3]:[F+N()*.75,I+N()/3]}function _([k,C]){return[L[k+C*w.width].pos.x,L[k+C*w.width].pos.y]}function ae([[k,C],[A,R],[F,I],[W,Z]]){return`M ${k} ${C} C${A} ${R} ${F} ${I} ${W} ${Z}`}function ye(k){Object.entries(k).map(([C,A])=>{if(A.length==0){console.warn(`Segment array for yarn ${C} is empty`);return}let R=[L[0].pos.x-n,L[0].pos.y],F=X(A[0].source,A[0].row,R,_(A[0].target)),I=X(A[0].target,A[0].row,F,_(A[1].target)),W=A[0].row;A.forEach((Z,G)=>{let $;if(G==A.length-1){let[V,j]=_(A[G].target),ne=A[G].row;$=[r.carriagePasses[ne]=="right"?V+n:V-n,j]}else if(G==A.length-2){let[V,j]=_(A[G].target);$=X(A[G+1].target,A[G].row,I,[V+n,j])}else A[G+2].row!=W?($=z(A[G+1].target,A[G].row),W=A[G+2].row):$=X(A[G+1].target,A[G].row,I,_(A[G+2].target));let E=_(A[G].source),B=_(A[G].target);const T=Math.abs(Math.hypot(E[0]-B[0],E[1]-B[1])),H=(1-Z.restLength/T)*.5;if(Z.layer.length==2){const V=er(R,F,I,$,H);Z.path=V.map(j=>ae(j))}else{const V=ut(R,F,I,$,H);Z.path=ae(V)}R=F,F=I,I=$})})}function be(k){Object.entries(k).forEach(([C,A])=>{const R=Array.from(Array(y.length),()=>[]);A.toReversed().forEach(({layer:F,path:I})=>{if(I)if(F.length==2)F.forEach((W,Z)=>{let G=v.flipped?S-W:W-1;R[G].push(I[Z])});else{let W=v.flipped?S-F:F-1;R[W].push(I)}}),R.forEach((F,I)=>{let W=y[I];W.strokeStyle=v.yarnPalette[C-1],W.stroke(new Path2D(F))})})}function se(){y.forEach(k=>{k.save(),k.resetTransform(),k.clearRect(0,0,p,g),k.restore()})}function ee(){se(),ye(P),be(P)}function D(){n=Math.min(p*.9/r.width,g*.9/v.chart.height/l),e=n*l,i=N()+(p-r.width*n)/2,a=-N()+(g-v.chart.height*e)/2}function J(){for(;c.firstChild;)c.removeChild(c.firstChild);for(let k=0;k<S;k++){let C=document.createElement("canvas");C.width=p,C.height=g;let A=Math.floor((S-1-k)/2)%w.maxCNStack,R=.2/w.maxCNStack,F;k<w.maxCNStack*2?F=k%2==0?.6-A*R:.8-A*R:F=k%2==0?.75-A*R:1-A*R,C.style.cssText=`width: ${u}px; height: ${h}px; z-index: ${k}; filter: brightness(${F});`;let I=C.getContext("2d");I.translate(i,a),I.lineWidth=N(),y.push(I),c.appendChild(C)}v.flipped?c.classList.add("mirrored"):c.classList.remove("mirrored")}function fe(){s&&s.running()&&(s.tick(P,L),ee(),requestAnimationFrame(fe))}function f(){o||(s=tr(v.kYarn),fe(),o=!0)}function M(){s&&s.stop()}return{relax:f,stopSim:M}}class fr{constructor(t,o,e){this.ops=t.pixels,this.width=t.width,this.height=t.height,this.yarnSequence=o,this.yarns=Array.from(o.filter((n,s,i)=>i.indexOf(n)===s)),this.carriagePasses=e.map(n=>n%2==0?"right":"left")}op(t,o){return t>this.width-1||t<0||o>this.height-1||o<0?-1:this.ops.at(t+o*this.width)}}function pr(r,t){let o=null;return(...e)=>{window.clearTimeout(o),o=window.setTimeout(()=>{r.apply(null,e)},t)}}function Ze(){if(v.showTimeNeedleView)return;v.stopSim&&v.stopSim();let{stopSim:r,relax:t}=hr(new fr(v.machineChart,v.yarnSequence,v.rowMap),v.simScale);v.relax=t,v.simStop=r}function gr(){return()=>{const r=pr(Ze,30);return Ze(),{syncState(t,o){if(!t.simLive)return;["yarnPalette","yarnSequence","machineChart","flipped","showTimeNeedleView"].some(n=>o.includes(n))&&r(),o.includes("simScale")&&Ze()}}}}const ft="#dfdfdf7f",wn="#0000002a";function vr(r,t,o,e,n,s,i,a=null,l=null){const{width:c,height:d}=o,u=r.getContext("2d");u.lineWidth=.03;for(let h=0;h<d;h++)for(let p=0;p<c;p++){let g=o.pixel(p,h),y=e.pixel(p,h);if(a==null||l==null||a.pixel(p,h)!=g||l.pixel(p,h)!=y){u.save(),u.translate(p*s,(d-h-1)*i),u.scale(s,i);const w=dt[g];t=="operation"?(u.fillStyle=ve[w].color,u.fillRect(0,0,1,1)):t=="yarn"&&(y==0?u.fillStyle=ve.EMPTY.color:u.fillStyle=n[y-1],u.fillRect(0,0,1,1),hn.has(w)&&(u.fillStyle=wn,u.fillRect(0,0,1,1)));const{path:x}=ve[w];x&&u.stroke(x),u.restore()}}}function vt(r,t,[o,e],n,s,i,a,l=null){const{width:c,height:d}=t,u=r.getContext("2d");u.lineWidth=.03;for(let h=0;h<d;h++)for(let p=0;p<c;p++){let g=t.pixel(p,h);(l==null||l.pixel(p,h)!=g)&&(u.save(),u.translate(p*i,(d-h-1)*a),u.scale(i,a),g==0?u.fillStyle=s[n.pixel(p+o,h+e)-1]:u.fillStyle=s[g-1],u.fillRect(0,0,1,1),g==0&&(u.fillStyle=ft,u.fillRect(0,0,1,1)),u.restore())}}function mt(r,t,o,[e,n],s,i,a,l,c,d=null){const{width:u,height:h}=o,p=r.getContext("2d");p.lineWidth=.03;for(let g=0;g<h;g++)for(let y=0;y<u;y++){let w=o.pixel(y,g);if(d==null||d.pixel(y,g)!=w){p.save(),p.translate(y*l,(h-g-1)*c),p.scale(l,c);let x=dt[w],L;x=="TRANSPARENT"?L=dt[i.pixel(y+e,g+n)]:L=x;let P=null;if(ve[L]){if(t=="operation")p.fillStyle=ve[L].color,P=ve[L].path,p.fillRect(0,0,1,1);else if(t=="yarn"){let S=s.pixel(y+e,g+n)-1;p.fillStyle=S>=0?a[S]:ft,P=ve[L].path}p.fillRect(0,0,1,1),hn.has(L)&&(p.fillStyle=wn,p.fillRect(0,0,1,1))}else p.fillStyle="transparent",p.fillRect(0,0,1,1);P&&p.stroke(P),x=="TRANSPARENT"&&(p.fillStyle=ft,p.fillRect(0,0,1,1)),p.restore()}}}function xn(){b({showExampleLibrary:!1,showSettings:!1,showDownload:!1,showUpload:!1})}function En(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`),document.documentElement.style.setProperty("--vw",`${window.innerWidth*.01}px`)}function Ye(r,t,o){r.width=t,r.height=o,r.style.width=`${t}px`,r.style.height=`${o}px`}function mr(r){const t=r.currentTarget.getBoundingClientRect();return[r.clientX-t.left,t.height-(r.clientY-t.top)]}function kn(r,t){const o=t.getBoundingClientRect();return[r.clientX-o.left,o.height-(r.clientY-o.top)]}function yr(){const r="0123456789ABCDEF";let t="#";for(let o=0;o<6;o++)t+=r[Math.floor(Math.random()*16)];return t}function br(r){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}function wr(r){let t=1/0,o=1/0,e=-1/0,n=-1/0;return r.forEach(([s,i])=>{s<t&&(t=s),i<o&&(o=i),s>e&&(e=s),i>n&&(n=i)}),{width:Math.abs(e-t),height:Math.abs(n-o),xMin:t,yMin:o,xMax:e,yMax:n}}function xr(){return({state:r})=>{let{scale:t,chart:o,colorMode:e,yarnPalette:n,yarnChart:s}=r,i=o.width,a=o.height,l=s,c=o;return{syncState(d){(t!=d.scale||i!=d.chart.width||a!=d.chart.height||e!=d.colorMode||n!=d.yarnPalette)&&(i=d.chart.width,a=d.chart.height,t=d.scale,e=d.colorMode,n=d.yarnPalette,Ye(document.getElementById("chart-canvas"),Math.round(d.cellWidth*i),Math.round(d.cellHeight*a)),c=null,l=null),(c!=d.chart||l!=d.yarnChart)&&(vr(document.getElementById("chart-canvas"),d.colorMode,d.chart,d.yarnChart,d.yarnPalette,t,t*d.cellAspect,c,l),l=d.yarnChart,c=d.chart)}}}}function Se(r){let t=1/0,o=1/0,e=-1/0,n=-1/0;for(const s of r)s.forEach(([i,a])=>{i<t&&(t=i),a<o&&(o=a),i>e&&(e=i),a>n&&(n=a)});return{width:Math.abs(e-t),height:Math.abs(n-o),xMin:t,yMin:o,xMax:e,yMax:n}}function Er(r){const t=r[0].length*r.length,o=r.flat(),e=new ImageData(r[0].length,r.length),n=Object.values(ve).map(({color:s})=>br(s));for(let s=0;s<t;s++){const i=o[s],a=n[i];e.data[s*4]=a[0],e.data[s*4+1]=a[1],e.data[s*4+2]=a[2],e.data[s*4+3]=255}return e}function Xt(r){return r.map(t=>({bitmap:null,pos:[...t.pos],width:null,height:null}))}function kr(r,t,o,e){r.forEach((n,s)=>{let i=t=="stitch"?n.stitchBlock:n.yarnBlock;Ye(document.querySelector(`[data-blockindex="${s}"]`),Math.round(i.width*o),Math.round(i.height*e))})}function Mr(){return({state:r})=>{let{scale:t,blocks:o,blockEditMode:e,colorMode:n,interactionMode:s}=r,i=Xt(o);return{syncState(a){if(Object.keys(i).length!=Object.keys(a.blocks).length||t!=a.scale||e!=a.blockEditMode||o!=a.blocks||n!=a.colorMode||s!=a.interactionMode){if(t=a.scale,e=a.blockEditMode,o=a.blocks,n=a.colorMode,s=a.interactionMode,s!="block")return;kr(a.blocks,a.blockEditMode,a.cellWidth,a.cellHeight),i=Xt(a.blocks)}a.blocks.forEach((l,c)=>{let d=e=="stitch"?l.stitchBlock:l.yarnBlock;if((i[c].width!=d.width||i[c].height!=d.height)&&(Ye(document.querySelector(`[data-blockindex="${c}"]`),Math.round(d.width*a.cellWidth),Math.round(d.height*a.cellHeight)),i[c].width=d.width,i[c].height=d.height),i[c].bitmap!=d){const u=Se(a.boundaries);let h=[l.pos[0]-u.xMin,l.pos[1]-u.yMin];e=="stitch"?mt(document.querySelector(`[data-blockindex="${c}"]`),a.colorMode,d,h,a.yarnChart,a.chart,a.yarnPalette,t,t*a.cellAspect,i[c].bitmap):e=="yarn"&&vt(document.querySelector(`[data-blockindex="${c}"]`),d,h,a.yarnChart,a.yarnPalette,t,t*a.cellAspect,i[c].bitmap),i[c].bitmap=d}})}}}}function Lr(){return({state:r})=>{let{scale:t,colorMode:o,yarnPalette:e,blockEditMode:n}=r,s=null,i=null,a=null,l=null,c=null,d=null,u=null;return{syncState(h){if(h.selectedBoundary==null||h.blockEditMode==null){s=null,i=null,a=null;return}let p=h.regions[h.selectedBoundary],g=h.blockEditMode=="stitch"?p.stitchBlock:p.yarnBlock;const y=Se(h.boundaries);let w=[p.pos[0]-y.xMin,p.pos[1]-y.yMin];(t!=h.scale||i!=g.width||a!=g.height||o!=h.colorMode||e!=h.yarnPalette||n!=h.blockEditMode||d!=h.yarnChart||u!=h.chart||l!=p.pos[0]||c!=p.pos[1])&&(i=g.width,a=g.height,t=h.scale,o=h.colorMode,e=h.yarnPalette,n=h.blockEditMode,l=p.pos[0],c=p.pos[1],d=h.yarnChart,u=h.chart,Ye(document.getElementById("block-fill-canvas"),Math.round(g.width*h.cellWidth),Math.round(g.height*h.cellHeight)),s=null),s!=g&&(h.blockEditMode=="stitch"?mt(document.getElementById("block-fill-canvas"),h.colorMode,g,w,d,u,h.yarnPalette,t,t*h.cellAspect,s):h.blockEditMode=="yarn"&&vt(document.getElementById("block-fill-canvas"),g,w,d,h.yarnPalette,t,t*h.cellAspect,s),s=g)}}}}class U{constructor(t,o,e){this.width=t,this.height=o,this.pixels=new Uint8ClampedArray(e)}static fromJSON(t){return new U(t.width,t.height,t.pixels)}static empty(t,o,e){let n=new Array(t*o).fill(e);return new U(t,o,n)}static fromTile(t,o,e){let n=[];for(let s=0;s<o;s++)for(let i=0;i<t;i++)n.push(e.pixel(i%e.width,s%e.height));return new U(t,o,n)}overlay(t,o,e,n){const s=[];for(let i=0;i<t.height;i++)for(let a=0;a<t.width;a++){let l=t.pixel(a,i);typeof e<"u"&&e!==null&&l==e||typeof n<"u"&&n!==null&&this.pixel(a,i)==n||s.push({x:o[0]+a,y:o[1]+i,color:l})}return this.draw(s)}toJSON(){return{pixels:Array.from(this.pixels),width:this.width,height:this.height}}pad(t,o,e){const n=Array(o*(this.width+2*t)).fill(e),s=Array(t).fill(e);let i=this.make2d();return new U(this.width+2*t,this.height+2*o,[...i.reduce((a,l)=>[...a,...s,...l,...s],[...n]),...n])}resize(t,o,e=1){let n=[];for(let s=0;s<o;s++)for(let i=0;i<t;i++)s>=this.height||i>=this.width?n.push(e):n.push(this.pixel(i,s));return new U(t,o,n)}make2d(){let t=Array.from(this.pixels).slice(),o=[];for(;t.length>0;)o.push(t.splice(0,this.width));return o}vMirror(){return new U(this.width,this.height,this.make2d().toReversed().flat())}vFlip(){return new U(this.width,this.height,this.make2d().toReversed().flat())}hFlip(){return new U(this.width,this.height,this.make2d().map(t=>t.toReversed()).flat())}pixel(t,o){return t>this.width-1||t<0||o>this.height-1||o<0?-1:this.pixels.at(t+o*this.width)}pixelAt(t,o){return t>=this.width||o>=this.height?-1:(t<0&&(t=this.width+t),o<0&&(o=this.height+o),this.pixels.at(t+o*this.width))}draw(t){let o=this.pixels.slice();for(let{x:e,y:n,color:s}of t)e<0||n<0||e>=this.width||n>=this.height||(o[e+n*this.width]=s);return new U(this.width,this.height,o)}indexedDraw(t){let o=this.pixels.slice();for(let{index:e,color:n}of t)e>=this.pixels.length||(o[e]=n);return new U(this.width,this.height,o)}indexedBrush(t,o){return this.indexedDraw([{index:t,color:o}])}brush({x:t,y:o},e){let n={x:t,y:o,color:e};return this.draw([n])}flood({x:t,y:o},e){const n=this.pixel(t,o);if(n===e)return this.draw([]);const s=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}];let i=[{x:t,y:o,color:e}];for(let a=0;a<i.length;a++)for(let{dx:l,dy:c}of s){let d=i[a].x+l,u=i[a].y+c;d>=0&&d<this.width&&u>=0&&u<this.height&&this.pixel(d,u)==n&&!i.some(h=>h.x==d&&h.y==u)&&i.push({x:d,y:u,color:e})}return this.draw(i)}shift(t,o){let e=[];for(let n=0;n<this.height;n++)for(let s=0;s<this.width;s++)e.push({x:(s-t%this.width+this.width)%this.width,y:(n-o%this.height+this.height)%this.height,color:this.pixel(s,n)});return this.draw(e)}rect(t,o,e){let n=Math.min(t.x,o.x),s=Math.min(t.y,o.y),i=Math.max(t.x,o.x),a=Math.max(t.y,o.y),l=[];for(let c=s;c<=a;c++)for(let d=n;d<=i;d++)l.push({x:d,y:c,color:e});return this.draw(l)}line(t,o,e){if(t.x==o.x&&t.y==o.y)return this.draw([{x:t.x,y:t.y,color:e}]);let n=[];if(Math.abs(t.x-o.x)>Math.abs(t.y-o.y)){t.x>o.x&&([t,o]=[o,t]);let s=(o.y-t.y)/(o.x-t.x);for(let{x:i,y:a}=t;i<=o.x;i++)n.push({x:i,y:Math.round(a),color:e}),a+=s}else{t.y>o.y&&([t,o]=[o,t]);let s=(o.x-t.x)/(o.y-t.y);for(let{x:i,y:a}=t;a<=o.y;a++)n.push({x:Math.round(i),y:a,color:e}),i+=s}return this.draw(n)}}function Cr(r,[t,o],[e,n]){if(o===n)return;o>n&&([t,e]=[e,t],[o,n]=[n,o]);let s=(e-t)/(n-o);r.push({x:t+s/2,yMin:o,yMax:n,dx:s,xLast:t})}function Br(r,t,o,e,n,s,i){if(i<1)return r;let a=o-n.xLast,l=e-s.xLast;return Math.abs(n.dx)<=1&&(a===1?r=r.line({x:n.xLast,y:t-1},{x:n.xLast+i-1,y:t-1},m.FXR1):a===-1&&(r=r.line({x:n.xLast,y:t-1},{x:n.xLast+i-1,y:t-1},m.FXL1))),Math.abs(s.dx)<=1&&(l===-1?r=r.line({x:s.xLast-i,y:t-1},{x:s.xLast-1,y:t-1},m.FXL1):l===1&&(r=r.line({x:s.xLast-i,y:t-1},{x:s.xLast-1,y:t-1},m.FXR1))),n.xLast=o,s.xLast=e,r}function $r(r,t,o,{stitchBlock:e,yarnBlock:n,pos:s,shaping:i}){let a=[];for(let d=0;d<o.length;d++)Cr(a,o[d],o[(d+1)%o.length]);a.sort((d,u)=>d.yMin-u.yMin);let l=[],c=0;for(;a.length>0||l.length>0;){for(;a.length>0&&a[0].yMin==c;)l.push(a.shift());l.sort((d,u)=>d.x-u.x);for(let d=0;d<l.length;d=d+2){if(d+1>=l.length){console.error("index out of range");continue}const u=Math.round(l[d].x),h=Math.round(l[d+1].x);if(u==h)continue;let p=[],g=(c-s[1])%e.height;for(let x=u;x<h;x++){let L=(x-s[0])%e.width,P=e.pixelAt(L,g);P!=m.TRANSPARENT&&p.push({x,y:c,color:P})}r=r.draw(p);let y=[],w=(c-s[1])%n.height;for(let x=u;x<h;x++){let L=(x-s[0])%n.width,P=n.pixelAt(L,w);if(P==0){t.pixel(x,c)==0&&y.push({x,y:c,color:1});continue}y.push({x,y:c,color:P})}t=t.draw(y),r=Br(r,c,u,h,l[d],l[d+1],i)}c++,l=l.filter(d=>d.yMax>c);for(let d=0;d<l.length;d++)l[d].x+=l[d].dx}return{stitch:r,yarn:t}}function zt([r,t],[o,e],n,s,i,a,l){let c=Math.abs(o-r),d=r<o?1:-1,u=-Math.abs(e-t),h=t<e?1:-1,p=c+u,g=r,y=t;for(;a=="overlap"?s=s.overlay(i,[r+n[0],t+n[1]],l):a=="tiled"?(g==null||y==null||Math.abs(r-g)>=i.width||Math.abs(t-y)>=i.height)&&(s=s.overlay(i,[r+n[0],t+n[1]],l),g=r,y=t):a=="xDiff"?r!=g&&(s=s.overlay(i,[r+n[0],t+n[1]],l),g=r,y=t):a=="yDiff"&&t!=y&&(s=s.overlay(i,[r+n[0],t+n[1]],l),g=r,y=t),!(r==o&&t==e);){let w=2*p;if(w>=u){if(r==o)break;p=p+u,r=r+d}if(w<=c){if(t==e)break;p=p+c,t=t+h}}return s}function Pr(r,t,{pts:o,offset:e,yarnBlock:n,stitchBlock:s,tileMode:i}){for(let a=0;a<o.length-1;a++)r=zt(o[a],o[a+1],e,r,s,i,m.TRANSPARENT),t=zt(o[a],o[a+1],e,t,n,i,0);return{stitch:r,yarn:t}}function Ar(r,t,o,e){let n=[];for(let i=0;i<r.length;i++){const a=o=="right"?i:r.length-i-1,l=r[a];!n.includes(l)&&l!=0&&n.push(l)}const s=n.map(()=>Array(r.length).fill(m.BM));for(let i=0;i<r.length;i++){const a=o=="right"?i:r.length-i-1,l=r[a],c=t[a],d=n.indexOf(l);if(c==m.EMPTY)s.forEach(u=>{u[a]=c});else{if(d<0)continue;s[d][a]=c;let u=o=="right"?a+1:a-1,h=r[u];if(h!=null&&h!=0&&h!=l){const p=n.indexOf(h);v.tucks&&(s[p][a]=m.FT)}}}return{passes:s,sequence:n}}function Sr(r,t){let o=r.make2d(),e=t.make2d(),n="right",s=[],i=[],a=[];for(let c=0;c<e.length;c++){let d=o[c],u=e[c],{passes:h,sequence:p}=Ar(u,d,n);s=s.concat(h),i.push(...p),a.push(...Array(h.length).fill(c)),n=n=="right"?"left":"right"}return{machineChart:new U(s[0].length,s.length,s.flat()),yarnSequence:i,rowMap:a}}function Rr(r,t,o,e,n){return{boundaries:t.map(s=>s.map(([i,a])=>[i-r.xMin,a-r.yMin])),regions:o.map(s=>({...s,pos:[s.pos[0]-r.xMin,s.pos[1]-r.yMin]})),blocks:e.map(s=>({...s,pos:[s.pos[0]-r.xMin,s.pos[1]-r.yMin]})),paths:n.map(s=>({...s,pts:s.pts.map(([i,a])=>[i-r.xMin,a-r.yMin])}))}}function Mn(r,t,o,e){const n=Se(r),{boundaries:s,regions:i,blocks:a,paths:l}=Rr(n,r,t,o,e),c=n.width,d=n.height;let u=U.empty(c,d,m.EMPTY),h=U.empty(c,d,0);i.forEach((w,x)=>{let{stitch:L,yarn:P}=$r(u,h,s[x],w);u=L,h=P}),l.forEach(w=>{let{stitch:x,yarn:L}=Pr(u,h,w);u=x,h=L});for(const{stitchBlock:w,yarnBlock:x,pos:L}of a)u=u.overlay(w,L,m.TRANSPARENT),h=h.overlay(x,L,0);const{machineChart:p,yarnSequence:g,rowMap:y}=Sr(u,h);return{stitchChart:u,yarnChart:h,machineChart:p,yarnSequence:g,rowMap:y}}const Tr=new Set([m.KNIT,m.FXR1,m.FXR2,m.FXR3,m.FXL1,m.FXL2,m.FXL3]),Nr=new Set([m.PURL,m.BXR1,m.BXR2,m.BXR3,m.BXL1,m.BXL2,m.BXL3]),_r=new Set([m.FTB,m.FL1,m.FL2,m.FL3,m.FR1,m.FR2,m.FR3]),Fr=new Set([m.BTF,m.BL1,m.BL2,m.BL3,m.BR1,m.BR2,m.BR3]),Ln=[m.FXR1,m.FXR2,m.FXR3,m.FXL1,m.FXL2,m.FXL3,m.BXR1,m.BXR2,m.BXR3,m.BXL1,m.BXL2,m.BXL3],Ot=new Set(Ln),Ir=[1,2,3,-1,-2,-3,1,2,3,-1,-2,-3],Ht=[[m.FTB,m.BTF],[m.BL1,m.FL1],[m.BL2,m.FL2],[m.BL3,m.FL3],[m.BR1,m.FR1],[m.BR2,m.FR2],[m.BR3,m.FR3]];function Vt(r){let t=[],o,e,n,s;for(let i=0;i<r.length;i++){let a=r[i];_r.has(a)?i%2==0?(o==null&&(o=new Array(r.length).fill(0),t.push(o)),o[i]=a):(e==null&&(e=new Array(r.length).fill(0),t.push(e)),e[i]=a):Fr.has(a)&&(i%2==0?(n==null&&(n=new Array(r.length).fill(0),t.push(n)),n[i]=a):(s==null&&(s=new Array(r.length).fill(0),t.push(s)),s[i]=a))}return t}function Xr(r,t){let o=new Array(r.length).fill(0),e=new Set;for(let a=0;a<t.length;a++)t[a]!=0&&(e.add(t[a]),r[a]==m.KNIT?o[a]=m.FTB:r[a]==m.PURL&&(o[a]=m.BTF));const n=Vt(o),s=Array.from(e);s.sort((a,l)=>Math.abs(a)-Math.abs(l));const i=[];for(const a of s){let l=new Array(r.length).fill(0);for(let c=0;c<t.length;c++)t[c]==a&&(r[c]==m.KNIT?l[c]=Ht.at(a)[0]:r[c]==m.PURL&&(l[c]=Ht.at(a)[1]));i.push(...Vt(l))}return[...n,...i]}function Cn(r,t){let o=r.make2d(),e=[],n=[];for(let s=0;s<r.height;s++){let i=[],a=o[s],l=new Array(r.width).fill(m.EMPTY),c=new Array(r.width).fill(0),d=!1;for(let u=0;u<a.length;u++){let h=a[u];Ot.has(h)?Ot.has(h)&&(d=!0,Tr.has(h)?l[u]=m.KNIT:Nr.has(h)&&(l[u]=m.PURL),c[u]=Ir[Ln.indexOf(h)]):l[u]=h}d&&(i=Xr(l,c)),e.push(l,...i),n.push(t[s],...Array(i.length).fill(0))}return{passes:e,yarns:n}}function zr(r,t){let o=null;return(...e)=>{window.clearTimeout(o),o=window.setTimeout(()=>{r.apply(null,e)},t)}}function Yt(){const{boundaries:r,regions:t,blocks:o,paths:e}=v;let{stitchChart:n,yarnChart:s,machineChart:i,yarnSequence:a,rowMap:l}=Mn(r,t,o,e);const{passes:c,yarns:d}=Cn(i,a),u=Er(c.toReversed()),h=document.getElementById("timeneedlebitmap");h&&(h.width=c[0].length,h.height=c.length,h.getContext("2d").putImageData(u,0,0)),b({chart:n,yarnChart:s,machineChart:i,yarnSequence:a,rowMap:l,bbox:Se(r),passSchedule:c,timeNeedle:u,yarnSchedule:d})}function Or(){return()=>{const r=zr(Yt,30);return Yt(),{syncState(t,o){["boundaries","regions","blocks","paths","tucks","showTimeNeedleView"].some(n=>o.includes(n))&&r()}}}}function Hr(){return({state:r})=>{let{scale:t,colorMode:o,yarnPalette:e,blockEditMode:n}=r,s=null,i=null,a=null,l=null,c=null,d=null,u=null;return{syncState(h){if(h.selectedPath==null||h.blockEditMode==null){s=null,i=null,a=null;return}let p=document.getElementById("path-tile-canvas");if(!p)return;let g=h.paths[h.selectedPath],y=h.blockEditMode=="stitch"?g.stitchBlock:g.yarnBlock;const w=Se(h.boundaries);let x=[g.pts[0][0]+g.offset[0]-w.xMin,g.pts[0][1]+g.offset[1]-w.yMin];(t!=h.scale||i!=y.width||a!=y.height||o!=h.colorMode||e!=h.yarnPalette||n!=h.blockEditMode||d!=h.yarnChart||u!=h.chart||l!=g.offset[0]||c!=g.offset[1])&&(i=y.width,a=y.height,t=h.scale,o=h.colorMode,e=h.yarnPalette,n=h.blockEditMode,l=g.offset[0],c=g.offset[1],d=h.yarnChart,u=h.chart,Ye(p,Math.round(y.width*h.cellWidth),Math.round(y.height*h.cellHeight)),s=null),s!=y&&(h.blockEditMode=="stitch"?mt(p,h.colorMode,y,x,d,u,h.yarnPalette,t,t*h.cellAspect,s):h.blockEditMode=="yarn"&&vt(p,y,x,d,h.yarnPalette,t,t*h.cellAspect,s),s=y)}}}}function Oe(r){const t={x:r.clientX,y:r.clientY},o=v.chartPan;document.body.classList.add("moving");function e(s){if(s.buttons==0)n();else{const i=t.x-s.clientX,a=t.y-s.clientY;b({chartPan:{x:Math.floor(o.x-i),y:Math.floor(o.y+a)}})}}function n(){document.body.classList.remove("moving"),window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",n),window.removeEventListener("pointerleave",n)}window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),window.addEventListener("pointerleave",n)}function yt(){const{cellAspect:r,chart:t,bbox:o}=v,{width:e,height:n}=document.getElementById("svg-layer").getBoundingClientRect(),s=Math.floor(.9*Math.min(Math.floor(e/t.width),Math.floor(n/(t.height*r)))),i=(e-s*t.width)/2,a=(n-s*t.height*r)/2;b({scale:s,cellWidth:s,cellHeight:s*r,chartPan:{x:Math.round(i-o.xMin*s),y:Math.round(a-o.yMin*s*r)}})}function Bn(r,t){const{chartPan:o,cellAspect:e,scale:n}=v,s={x:(r.x-o.x)/n,y:(r.y-o.y)/n};b({scale:t,cellWidth:t,cellHeight:t*e,chartPan:{x:Math.round(r.x-s.x*t),y:Math.round(r.y-s.y*t)}})}function st(r){let t=document.getElementById("svg-layer").getBoundingClientRect();Bn({x:t.width/2,y:t.height/2},r)}function Wt(r){const t=r.currentTarget.getBoundingClientRect();let{scale:o}=v;Math.sign(r.deltaY)<0?o=v.reverseScroll?Math.floor(o*.9):Math.ceil(o*1.1):o=v.reverseScroll?Math.ceil(o*1.1):Math.floor(o*.9),o=o<2?2:o,Bn({x:r.clientX-t.left,y:t.height-(r.clientY-t.top)},o)}const nt={brush:Vr,flood:Yr,rect:Wr,line:Ur,shift:Gr};function Vr(r,t,o){function e(n){return r=r.line({x:t.x,y:t.y},{x:n.x,y:n.y},o),t=n,r}return e}function Yr(r,t,o){function e(n){return r=r.flood(n,o),r}return e}function Wr(r,t,o){function e(n){return r.rect({x:t.x,y:t.y},{x:n.x,y:n.y},o)}return e}function Ur(r,t,o){function e(n){return r.line({x:t.x,y:t.y},{x:n.x,y:n.y},o)}return e}function Gr(r,t,o){function e(n){return r.shift(t.x-n.x,t.y-n.y)}return e}function Ut(r,t){let o=document.querySelector(`[data-blockindex="${t}"]`).getBoundingClientRect();return{x:Math.floor((r.clientX-o.left)/v.cellWidth),y:Math.floor((o.bottom-r.clientY)/v.cellHeight)}}function Kr(){const{stitchSelect:r,blocks:t}=v;let[o,e]=r,[n,s]=[e[0]-o[0],e[1]-o[1]],i=[...t];i.push({pos:o,stitchBlock:U.empty(n,s,m.TRANSPARENT),yarnBlock:U.empty(n,s,0)}),b({stitchSelect:null,blocks:i,selectedBlock:i.length-1,interactionMode:"block"},!0)}function $n(r){const t=[...v.blocks];t.splice(r,1),b({blocks:t,selectedBlock:null},!0)}function qe(r,t,o){const{blocks:e,blockEditMode:n,activeSymbol:s,activeYarn:i}=v,a=n=="stitch"?"stitchBlock":"yarnBlock",l=n=="stitch"?m.TRANSPARENT:0,c=e[t][a],[d,u]=e[t].pos;let h=[0,0];const p={x:r.clientX,y:r.clientY};b({transforming:!0,locked:!0});function g(w){if(w.buttons==0)y();else{const{scale:x,cellAspect:L,blocks:P}=v;let S=Math.round((p.x-w.clientX)/x),N=Math.round((p.y-w.clientY)/x/L);if(h[0]==S&&h[1]==N)return;let X=[...P];if(o=="up"){let z=c.height+N;if(z<1)return;X[t][a]=c.resize(c.width,z,l)}else if(o=="right"){let z=c.width-S;if(z<1)return;X[t][a]=c.resize(z,c.height,l)}else if(o=="down"){let z=c.height-N;if(z<1)return;X[t][a]=c.vFlip().resize(c.width,z,l).vFlip(),X[t].pos=[d,u+N]}else if(o=="left"){let z=c.width+S;if(z<1)return;X[t][a]=c.hFlip().resize(z,c.height,l).hFlip(),X[t].pos=[d-S,u]}h=[S,N],b({blocks:X})}}function y(){window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",y),window.removeEventListener("pointerleave",y),b({transforming:!1,locked:!1})}window.addEventListener("pointermove",g),window.addEventListener("pointerup",y),window.addEventListener("pointerleave",y)}function qr(r,t){const[o,e]=v.blocks[t].pos;let n=[0,0];const s={x:r.clientX,y:r.clientY};b({transforming:!0});function i(l){if(l.buttons==0)a();else{const{scale:c,cellAspect:d,blocks:u}=v;let h=Math.round((s.x-l.clientX)/c),p=Math.round((s.y-l.clientY)/c/d);if(n[0]==h&&n[1]==p)return;let g=[...u];g[t].pos=[o-h,e+p],n=[h,p],b({blocks:g})}}function a(){window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",a),window.removeEventListener("pointerleave",a),b({transforming:!1})}window.addEventListener("pointermove",i),window.addEventListener("pointerup",a),window.addEventListener("pointerleave",a)}function Dr(r,t){if(r.which==2){Oe(r);return}const{blocks:o,blockEditMode:e,activeBlockTool:n,activeSymbol:s,activeYarn:i}=v,a=e=="stitch"?"stitchBlock":"yarnBlock";let l=nt[n];if(!l)return;let c=Ut(r,t);b({transforming:!0});let d=o[t][a],u=l(d,c,e=="stitch"?s:i);if(!u)return;let h=[...o];h[t][a]=u(c),b({blocks:h});function p(y){if(y.buttons==0)g();else{let w=Ut(y,t);if(w.x==c.x&&w.y==c.y)return;let x=[...o];x[t][a]=u(w),b({blocks:x}),c=w}}function g(){b({transforming:!1}),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g),window.removeEventListener("pointerleave",g)}window.addEventListener("pointermove",p),window.addEventListener("pointerup",g),window.addEventListener("pointerleave",g)}function Gt(r){const{cellWidth:t,cellHeight:o,bbox:e}=v;let[n,s]=kn(r,document.getElementById("chart-canvas"));return[Math.floor(n/t)+e.xMin,Math.floor(s/o)+e.yMin]}function et(r){const[t,o]=Gt(r);let[e,n]=[t,o];b({transforming:!0}),document.body.classList.add("crosshair");function s(a){if(a.buttons==0)i();else{const[l,c]=Gt(a);if(e==l&&n==c)return;let[d,u]=[t,l].toSorted((g,y)=>g-y),[h,p]=[o,c].toSorted((g,y)=>g-y);if(e=l,n=c,d==u||h==p)return;b({stitchSelect:[[d,h],[u,p]]})}}function i(){document.body.classList.remove("crosshair"),window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointerleave",i),b({transforming:!1})}window.addEventListener("pointermove",s),window.addEventListener("pointerup",i),window.addEventListener("pointerleave",i)}function Jr(r){const t=r.target.classList;t.contains("point")?si(r):t.contains("path")?ai(r):t.contains("boundary")?r.shiftKey?r.shiftKey&&(b({selectedBoundary:null}),et(r)):v.selectedBoundary==Number(r.target.dataset.boundaryindex)?li(r):qt(r):qt(r)}function jr(r){const t=[...v.boundaries],o=[...v.regions];let e=t.splice(r,1),n=o.splice(r,1);t.splice(v.boundaries.length-1,0,e[0]),o.splice(v.boundaries.length-1,0,n[0]),b({boundaries:t,regions:o,selectedBoundary:v.boundaries.length-1})}function Zr(r){const t=[...v.boundaries],o=[...v.regions];let e=t.splice(r,1),n=o.splice(r,1);t.splice(0,0,e[0]),o.splice(0,0,n[0]),b({boundaries:t,regions:o,selectedBoundary:0})}function Qr(r){if(r<=0)return;const t=[...v.boundaries],o=[...v.regions];let e=t.splice(r,1),n=o.splice(r,1);t.splice(r-1,0,e[0]),o.splice(r-1,0,n[0]),b({boundaries:t,regions:o,selectedBoundary:r-1})}function ei(r){if(r>=v.boundaries.length-1)return;const t=[...v.boundaries],o=[...v.regions];let e=t.splice(r,1),n=o.splice(r,1);t.splice(r+1,0,e[0]),o.splice(r+1,0,n[0]),b({boundaries:t,regions:o,selectedBoundary:r+1})}function ti(r){r.target.classList.contains("point")?oi(r):r.target.classList.contains("path")&&ii(r)}function Kt(r,t){const o=[...v.regions];o[r].joinMode=t,b({regions:o})}function at(r,t){const o=[...v.regions];o[r].shaping=t,b({regions:o})}function Pn(r){const{boundaries:t,regions:o}=v;if(t.length==1){alert("You need at least one boundary!");return}b({boundaries:t.slice(0,r).concat(t.slice(r+1)),regions:o.slice(0,r).concat(o.slice(r+1)),selectedBoundary:null,blockEditMode:null},!0)}function ni(){const{boundaries:r,regions:t,stitchSelect:[[o,e],[n,s]]}=v;r.push([[o,e],[o,s],[n,s],[n,e]]),t.push({pos:[o+Math.floor((n-o)/2),e+Math.floor((s-e)/2)],shaping:0,joinMode:"none",yarnBlock:new U(1,1,[0]),stitchBlock:new U(1,1,[m.TRANSPARENT])}),b({boundaries:r,regions:t,selectedBoundary:r.length-1,stitchSelect:null,interactionMode:"boundary",selectedBlock:null})}function ri(r){const t=[...v.boundaries],o=[...v.regions],e=o[r],n={shaping:e.shaping,joinMode:e.tileMode,pos:[...e.pos],yarnBlock:e.yarnBlock,stitchBlock:e.stitchBlock},s=[...t[r]];o.push(n),t.push(s),b({regions:o,boundaries:t,selectedBoundary:t.length-1})}function ii(r){const t=r.currentTarget.getBoundingClientRect(),o=Number(r.target.dataset.boundaryindex),e=Number(r.target.dataset.index),{scale:n,cellAspect:s,boundaries:i,chartPan:{x:a,y:l}}=v;let c=[Math.round((r.clientX-t.left-a)/n),Math.round((t.height-(r.clientY-t.top)-l)/n/s)],d=[...i];d[o].splice(e+1,0,c),b({boundaries:d})}function oi(r){const t=Number(r.target.dataset.boundaryindex),o=Number(r.target.dataset.index);let e=[...v.boundaries];e[t].splice(o,1),b({boundaries:e})}function si(r){const t=Number(r.target.dataset.boundaryindex),o=Number(r.target.dataset.index),[e,n]=v.boundaries[t][o];let s=[0,0];const i={x:r.clientX,y:r.clientY};b({transforming:!0}),document.body.classList.add("grabbing");function a(c){if(c.buttons==0)l();else{const{scale:d,cellAspect:u,boundaries:h}=v;let p=Math.round((i.x-c.clientX)/d),g=Math.round((i.y-c.clientY)/d/u);if(s[0]==p&&s[1]==g)return;let y=[...h];y[t][o]=[e-p,n+g],s=[p,g],b({boundaries:y})}}function l(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l),window.removeEventListener("pointerleave",l),b({transforming:!1})}window.addEventListener("pointermove",a),window.addEventListener("pointerup",l),window.addEventListener("pointerleave",l)}function ai(r){const t=Number(r.target.dataset.boundaryindex),o=Number(r.target.dataset.index),e=v.boundaries[t],[n,s]=e[o],[i,a]=e[(o+1)%e.length];let l=[0,0];const c={x:r.clientX,y:r.clientY};b({transforming:!0}),document.body.classList.add("grabbing");function d(h){if(h.buttons==0)u();else{const{cellWidth:p,cellHeight:g,boundaries:y}=v;let w=Math.round((c.x-h.clientX)/p),x=Math.round((c.y-h.clientY)/g);if(l[0]==w&&l[1]==x)return;let L=[...y];L[t][o]=[n-w,s+x],L[t][(o+1)%e.length]=[i-w,a+x],l=[w,x],b({boundaries:L})}}function u(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",u),window.removeEventListener("pointerleave",u),b({transforming:!1})}window.addEventListener("pointermove",d),window.addEventListener("pointerup",u),window.addEventListener("pointerleave",u)}function li(r){const t=Number(r.target.dataset.boundaryindex);if(v.selectedBoundary!=t)return;const o=v.boundaries[t],e={x:r.clientX,y:r.clientY},[n,s]=v.regions[t].pos;let i=[0,0];b({transforming:!0}),document.body.classList.add("moving");function a(c){if(c.buttons==0)l();else{const{scale:d,cellAspect:u,boundaries:h}=v;let p=Math.round((e.x-c.clientX)/d),g=Math.round((e.y-c.clientY)/d/u);if(i[0]==p&&i[1]==g)return;let y=[...h];y[t]=o.map(([x,L])=>[x-p,L+g]),i=[p,g];let w=[...v.regions];w[t].pos=[n-p,s+g],b({boundaries:y,regions:w})}}function l(){document.body.classList.remove("moving"),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l),window.removeEventListener("pointerleave",l),b({transforming:!1})}window.addEventListener("pointermove",a),window.addEventListener("pointerup",l),window.addEventListener("pointerleave",l)}function ci(r){const t=Number(r.target.dataset.boundaryindex);b({selectedBoundary:t,stitchSelect:null},!0)}function De(r,t){const{selectedBoundary:o,regions:e,blockEditMode:n}=v,{stitchBlock:s,yarnBlock:i,pos:a}=e[o],l=n=="stitch"?s:i,[c,d]=a;let u=[0,0];const h={x:r.clientX,y:r.clientY};b({transforming:!0,locked:!0}),document.body.classList.add("grabbing");function p(y){if(y.buttons==0)g();else{const{scale:w,cellAspect:x}=v;let L=Math.round((h.x-y.clientX)/w),P=Math.round((h.y-y.clientY)/w/x);if(u[0]==L&&u[1]==P)return;let S,N=[...a],X;if(n=="stitch"?X=e.length==1?m.KNIT:m.TRANSPARENT:X=0,t=="up"){let _=l.height+P;if(_<1)return;S=l.resize(l.width,_,X)}else if(t=="right"){let _=l.width-L;if(_<1)return;S=l.resize(_,l.height,X)}else if(t=="down"){let _=l.height-P;if(_<1)return;S=l.vFlip().resize(l.width,_,X).vFlip(),N=[c,d+P]}else if(t=="left"){let _=l.width+L;if(_<1)return;S=l.hFlip().resize(_,l.height,X).hFlip(),N=[c-L,d]}u=[L,P];let z=[...e];z[o].pos=N,n=="stitch"?z[o].stitchBlock=S:z[o].yarnBlock=S,b({regions:z})}}function g(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g),window.removeEventListener("pointerleave",g),b({transforming:!1,locked:!1})}window.addEventListener("pointermove",p),window.addEventListener("pointerup",g),window.addEventListener("pointerleave",g)}function qt(r){const t={x:r.clientX,y:r.clientY};r.shiftKey&&(b({selectedBoundary:null}),et(r));let o=!1;b({transforming:!0});function e(s){let i=Math.abs(t.x-s.clientX),a=Math.abs(t.y-s.clientY);s.buttons==0?n(s):o?(b({selectedBoundary:null}),n(s),et(s)):(i>5||a>5)&&(o=!0)}function n(s){!o&&s.target.classList.contains("boundary")&&ci(s),window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",n),window.removeEventListener("pointerleave",n),b({transforming:!1})}window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),window.addEventListener("pointerleave",n)}function Dt(r){let t=document.getElementById("block-fill-canvas").getBoundingClientRect();return{x:Math.floor((r.clientX-t.left)/v.cellWidth),y:Math.floor((t.bottom-r.clientY)/v.cellHeight)}}function di(r){const{selectedBoundary:t,regions:o}=v,{pos:e}=o[t],[n,s]=e;let i=[0,0];const a={x:r.clientX,y:r.clientY};b({transforming:!0,locked:!0}),document.body.classList.add("grabbing");function l(d){if(d.buttons==0)c();else{const{cellWidth:u,cellHeight:h}=v;let p=Math.round((a.x-d.clientX)/u),g=Math.round((a.y-d.clientY)/h);if(i[0]==p&&i[1]==g)return;let y=[...o];y[t].pos=[n-p,s+g],i=[p,g],b({regions:y})}}function c(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",c),window.removeEventListener("pointerleave",c),b({transforming:!1,locked:!1})}window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),window.addEventListener("pointerleave",c)}function ui(r){if(r.which==2){Oe(r);return}const{selectedBoundary:t,regions:o,blockEditMode:e,activeBlockTool:n,activeSymbol:s,activeYarn:i}=v;let a=nt[n];if(!a)return;const{stitchBlock:l,yarnBlock:c}=o[t],d=e=="stitch";let u=Dt(r);b({locked:!0});let p=a(d?l:c,u,d?s:i);if(!p)return;let g=[...o];d?g[t].stitchBlock=p(u):g[t].yarnBlock=p(u),b({regions:g});function y(x){if(x.buttons==0)w();else{let L=Dt(x);if(L.x==u.x&&L.y==u.y)return;let P=[...o];d?P[t].stitchBlock=p(L):P[t].yarnBlock=p(L),b({regions:P}),u=L}}function w(){b({locked:!1}),window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",w),window.removeEventListener("pointerleave",w)}window.addEventListener("pointermove",y),window.addEventListener("pointerup",w),window.addEventListener("pointerleave",w)}function hi(r){if(v.transforming)return;const t=r.target.classList;t.contains("point")?ki(r):t.contains("path")?Ei(r):t.contains("background-path-hover")?yi(r):v.selectedPath==null?Ci(r):v.selectedPath!=null&&b({selectedPath:null,blockEditMode:null},!0)}function fi(r){r.target.classList.contains("point")?xi(r):r.target.classList.contains("path")&&wi(r)}function pi(r){const t=[...v.paths];let o=t.splice(r,1);t.splice(v.paths.length-1,0,o[0]),b({paths:t,selectedPath:v.paths.length-1})}function gi(r){const t=[...v.paths];let o=t.splice(r,1);t.splice(0,0,o[0]),b({paths:t,selectedPath:0})}function vi(r){if(r<=0)return;const t=[...v.paths];let o=t.splice(r,1);t.splice(r-1,0,o[0]),b({paths:t,selectedPath:r-1})}function mi(r){if(r>=v.paths.length-1)return;const t=[...v.paths];let o=t.splice(r,1);t.splice(r+1,0,o[0]),b({paths:t,selectedPath:r+1})}function yi(r){const t=Number(r.target.dataset.pathindex);b({selectedPath:t},!0)}function Je(r,t){const o=[...v.paths];o[r].tileMode=t,b({paths:o})}function bi(r){const t=[...v.paths],o=t[r],e={tileMode:o.tileMode,offset:[...o.offset],pts:o.pts.map(n=>[...n]),yarnBlock:o.yarnBlock,stitchBlock:o.stitchBlock};t.push(e),b({paths:t})}function wi(r){const t=r.currentTarget.getBoundingClientRect(),o=Number(r.target.dataset.pathindex),e=Number(r.target.dataset.index),{scale:n,cellAspect:s,paths:i,chartPan:{x:a,y:l}}=v;let c=[Math.round((r.clientX-t.left-a)/n),Math.round((t.height-(r.clientY-t.top)-l)/n/s)],d=[...i];d[o].pts.splice(e+1,0,c),b({paths:d})}function xi(r){const t=Number(r.target.dataset.pathindex),o=Number(r.target.dataset.pointindex);let e=[...v.paths];e[t].pts.length<3||(e[t].pts.splice(o,1),b({paths:e}))}function An(r){const{paths:t}=v;b({paths:t.slice(0,r).concat(t.slice(r+1)),selectedPath:null,blockEditMode:null},!0)}function Ei(r){const t=Number(r.target.dataset.pathindex),o=Number(r.target.dataset.index),e=v.paths[t],n=e.pts.map(p=>[p[0],p[1]]),[s,i]=e.pts[o],[a,l]=e.pts[o+1];let c=[0,0];const d={x:r.clientX,y:r.clientY};b({transforming:!0}),document.body.classList.add("grabbing");function u(p){if(p.buttons==0)h();else{const{cellWidth:g,cellHeight:y,paths:w}=v;let x=Math.round((d.x-p.clientX)/g),L=Math.round((d.y-p.clientY)/y);if(c[0]==x&&c[1]==L)return;let P=[...w];if(p.shiftKey)P[t].pts[o]=[s-x,i+L],P[t].pts[o+1]=[a-x,l+L];else for(let S=0;S<P[t].pts.length;S++)P[t].pts[S]=[n[S][0]-x,n[S][1]+L];c=[x,L],b({paths:P})}}function h(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",h),window.removeEventListener("pointerleave",h),b({transforming:!1})}window.addEventListener("pointermove",u),window.addEventListener("pointerup",h),window.addEventListener("pointerleave",h)}function ki(r){document.body.classList.add("grabbing");const t=Number(r.target.dataset.pathindex),o=Number(r.target.dataset.pointindex);let[e,n]=v.paths[t].pts[o];const s={x:r.clientX,y:r.clientY};let i=[0,0];b({transforming:!0});function a(c){if(c.buttons==0)l();else{const{cellWidth:d,cellHeight:u,paths:h}=v;let p=Math.round((s.x-c.clientX)/d),g=Math.round((s.y-c.clientY)/u);if(i[0]==p&&i[1]==g)return;let y=[...h];y[t].pts[o]=[e-p,n+g],i=[p,g],b({paths:y})}}function l(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l),window.removeEventListener("pointerleave",l),b({transforming:!1})}window.addEventListener("pointermove",a),window.addEventListener("pointerup",l),window.addEventListener("pointerleave",l)}function je(r,t){const{selectedPath:o,paths:e,blockEditMode:n}=v,{stitchBlock:s,yarnBlock:i,offset:a}=e[o],l=n=="stitch"?s:i,c=n=="stitch"?m.TRANSPARENT:0,[d,u]=a;let h=[0,0];const p={x:r.clientX,y:r.clientY};b({transforming:!0}),document.body.classList.add("grabbing");function g(w){if(w.buttons==0)y();else{const{cellWidth:x,cellHeight:L}=v;let P=Math.round((p.x-w.clientX)/x),S=Math.round((p.y-w.clientY)/L);if(h[0]==P&&h[1]==S)return;let N,X=[...a];if(t=="up"){let _=l.height+S;if(_<1)return;N=l.resize(l.width,_,c)}else if(t=="right"){let _=l.width-P;if(_<1)return;N=l.resize(_,l.height,c)}else if(t=="down"){let _=l.height-S;if(_<1)return;N=l.vFlip().resize(l.width,_,c).vFlip(),X=[d,u+S]}else if(t=="left"){let _=l.width+P;if(_<1)return;N=l.hFlip().resize(_,l.height,c).hFlip(),X=[d-P,u]}h=[P,S];let z=[...e];z[o].offset=X,n=="stitch"?z[o].stitchBlock=N:z[o].yarnBlock=N,b({paths:z})}}function y(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",y),window.removeEventListener("pointerleave",y),b({transforming:!1})}window.addEventListener("pointermove",g),window.addEventListener("pointerup",y),window.addEventListener("pointerleave",y)}function Mi(r){const{selectedPath:t,paths:o}=v,{offset:e}=o[t],[n,s]=e;let i=[0,0];const a={x:r.clientX,y:r.clientY};b({transforming:!0}),document.body.classList.add("grabbing");function l(d){if(d.buttons==0)c();else{const{cellWidth:u,cellHeight:h}=v;let p=Math.round((a.x-d.clientX)/u),g=Math.round((a.y-d.clientY)/h);if(i[0]==p&&i[1]==g)return;let y=[...o];o[t].offset=[n-p,s+g],i=[p,g],b({paths:y})}}function c(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",c),window.removeEventListener("pointerleave",c),b({transforming:!1})}window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),window.addEventListener("pointerleave",c)}function Jt(r){let t=document.getElementById("path-tile-canvas").getBoundingClientRect();return{x:Math.floor((r.clientX-t.left)/v.cellWidth),y:Math.floor((t.bottom-r.clientY)/v.cellHeight)}}function Li(r){if(r.which==2){Oe(r);return}const{selectedPath:t,paths:o,blockEditMode:e,activeBlockTool:n,activeSymbol:s,activeYarn:i}=v;let a=nt[n];if(!a)return;const{stitchBlock:l,yarnBlock:c}=o[t],d=e=="stitch";let u=Jt(r);b({transforming:!0});let p=a(d?l:c,u,d?s:i);if(!p)return;let g=[...o];d?g[t].stitchBlock=p(u):g[t].yarnBlock=p(u),b({paths:g});function y(x){if(x.buttons==0)w();else{let L=Jt(x);if(L.x==u.x&&L.y==u.y)return;let P=[...o];d?P[t].stitchBlock=p(L):P[t].yarnBlock=p(L),b({paths:P}),u=L}}function w(){b({transforming:!1}),window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",w),window.removeEventListener("pointerleave",w)}window.addEventListener("pointermove",y),window.addEventListener("pointerup",w),window.addEventListener("pointerleave",w)}function Ci(r){const{transforming:t,paths:o}=v;if(t)return;const e={x:r.clientX,y:r.clientY},n=i(r);document.body.classList.add("grabbing");const s=[...o];s.push({pts:[[...n],[...n]],offset:[0,0],yarnBlock:new U(1,1,[0]),stitchBlock:new U(1,1,[m.TRANSPARENT]),tileMode:"overlap"}),b({transforming:!0,paths:s,selectedPath:s.length-1,interactionMode:"path",stitchSelect:null,selectedBlock:null,blockEditMode:null});function i(h){const{cellWidth:p,cellHeight:g,bbox:y}=v;let[w,x]=kn(h,document.getElementById("chart-canvas"));return[Math.round(w/p)+y.xMin,Math.round(x/g)+y.yMin]}function a(h){const{paths:p}=v,g=[...p],y=p.length-1,w=p[y].pts.length-1;g[y].pts[w]=i(h),b({paths:g})}function l(h){const{paths:p}=v,g=[...p];g[p.length-1].pts.push(i(h)),b({paths:g})}function c(h){if(h.key=="Escape"){const p=[...v.paths];p.at(-1).pts.length>2?(p[p.length-1].pts.pop(),b({paths:p})):(p.pop(),b({paths:p,selectedPath:null})),u()}}function d(h){const p=e.x-h.clientX,g=e.y-h.clientY;if(p<10&&g<10){const y=[...v.paths];y[y.length-1].pts.pop(),b({paths:y}),window.addEventListener("click",l),window.removeEventListener("pointerup",d)}else window.removeEventListener("pointerup",d),u()}function u(){document.body.classList.remove("grabbing"),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",u),window.removeEventListener("pointerleave",u),window.removeEventListener("click",l),window.removeEventListener("keydown",c),b({transforming:!1})}window.addEventListener("pointermove",a),window.addEventListener("pointerup",d),window.addEventListener("pointerleave",u),window.addEventListener("keydown",c)}function Bi(){v.transforming||(b({selectedBlock:null,selectedBoundary:null,selectedPath:null,stitchSelect:null,blockEditMode:null},!0),xn())}function $i(){let{selectedBlock:r,selectedBoundary:t,selectedPath:o}=v;r!=null?$n(r):t!=null?Pn(t):o!=null&&An(o)}const jt={z:()=>Qn()},Zt={...Object.fromEntries(Object.entries(fn).map(([r,t])=>[t.hotkey,()=>b({interactionMode:r})])),Escape:Bi,Delete:$i};function Pi(r){console.debug(`${r} key pressed`)}function Ai(r){r.ctrlKey&&r.key.toLowerCase()in jt?(r.preventDefault(),jt[r.key.toLowerCase()]()):r.key in Zt?Zt[r.key]():/^[0-9]$/i.test(r.key)&&Pi(Number(r.key));const t=new Set(v.heldKeys);t.add(r.key),b({heldKeys:t})}function Si(r){const t=new Set(v.heldKeys);t.delete(r.key),b({heldKeys:t})}function bt(r){let{cellAspect:t=7/11,yarnPalette:o=["#ebe9bbff"],boundaries:e=[],regions:n=[],blocks:s=[],paths:i=[],annotations:a=!0,simLive:l=!0}=r;Ti({annotations:a,simLive:l,cellAspect:t,yarnPalette:o,boundaries:e,regions:n.map(({pos:c,joinMode:d="none",shaping:u=0,yarnBlock:h,stitchBlock:p})=>({pos:c,joinMode:d,shaping:u,yarnBlock:U.fromJSON(h),stitchBlock:U.fromJSON(p)})),paths:i.map(({pts:c,offset:d,tileMode:u="tiled",yarnBlock:h,stitchBlock:p})=>({pts:c,offset:d,tileMode:u,yarnBlock:U.fromJSON(h),stitchBlock:U.fromJSON(p)})),blocks:s.map(({pos:c,yarnBlock:d,stitchBlock:u})=>({pos:c,yarnBlock:U.fromJSON(d),stitchBlock:U.fromJSON(u)}))})}function Ri(r){let t=document.createElement("input");t.setAttribute("type","file"),t.style.display="none",t.onchange=o=>{const e=new FileReader;e.readAsText(o.target.files[0]),e.onload=()=>r(e.result)},document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Ti(r){const{boundaries:t,regions:o,blocks:e,paths:n}=r;let{stitchChart:s,yarnChart:i,machineChart:a,yarnSequence:l,rowMap:c}=Mn(t,o,e,n);b({...r,chart:s,yarnChart:i,machineChart:a,yarnSequence:l,rowMap:c,bbox:Se(t),selectedBoundary:null,selectedPath:null,selectedBlock:null,blockEditMode:null}),setTimeout(()=>yt())}function Ni(){Ri(r=>bt(JSON.parse(r))),b({showUpload:!1})}function _i(r){b({showExampleLibrary:!1}),v.exampleLibrary[r]().then(t=>bt(t))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(r,t,o){return r?t(r):o==null?void 0:o(r)}function Fi(){return!(!window.document.fullscreenElement&&!window.document.mozFullScreenElement&&!window.document.webkitFullscreenElement&&!window.document.msFullscreenElement)}function Ii(){var r=window.document,t=r.documentElement,o=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,e=r.exitFullscreen||r.mozCancelFullScreen||r.webkitExitFullscreen||r.msExitFullscreen;!r.fullscreenElement&&!r.mozFullScreenElement&&!r.webkitFullscreenElement&&!r.msFullscreenElement?o.call(t):e.call(r)}function Xi(){const{showExampleLibrary:r,showDownload:t,showUpload:o,showSettings:e,showTimeNeedleView:n}=v;return O` <div id="taskbar">
    <h1 class="site-title">blended-primitives</h1>
    <div class="button-group">
      <div class="radio-group">
        <button
          class="${n?"selected":""}"
          @click=${()=>b({showTimeNeedleView:!0})}>
          program
        </button>
        <button
          class="${n?"":"selected"}"
          @click=${()=>b({showTimeNeedleView:!1})}>
          yarn
        </button>
      </div>

      <button
        class="btn icon ${r?"open":""}"
        @click=${()=>b({showExampleLibrary:!0})}>
        <i class="fa-solid fa-book"></i>
      </button>
      <button
        class="btn icon ${t?"open":""}"
        @click=${()=>b({showDownload:!0})}>
        <i class="fa-solid fa-download"></i>
      </button>
      <button
        class="btn icon ${o?"open":""}"
        @click=${()=>b({showUpload:!0})}>
        <i class="fa-solid fa-upload"></i>
      </button>
      <button
        class="btn icon ${e?"open":""}"
        @click=${()=>b({showSettings:!e})}>
        <i class="fa-solid fa-gear"></i>
      </button>
      <button class="btn icon" @click=${()=>Ii()}>
        <i
          class="fa-solid fa-${Fi()?"down-left-and-up-right-to-center":"up-right-and-down-left-from-center"}"></i>
      </button>
    </div>
  </div>`}function lt(r){let t=document.getElementById("sim-container").getBoundingClientRect();Sn({x:t.width/2,y:t.height/2},r)}function Sn(r,t){if(t<un||t>dn)return;const o={x:(r.x-v.simPan.x)/v.simScale,y:(r.y-v.simPan.y)/v.simScale};b({simScale:t,simPan:{x:r.x-o.x*t,y:r.y-o.y*t}})}function zi(r){const t={x:r.clientX,y:r.clientY},o=v.simPan;function e(s){if(s.buttons==0)n();else{const i=t.x-s.clientX,a=t.y-s.clientY;b({simPan:{x:o.x-i,y:o.y-a}})}}function n(){window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",n),window.removeEventListener("pointerleave",n)}window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),window.addEventListener("pointerleave",n)}function Oi(r){let t;const o=r.currentTarget.getBoundingClientRect();Math.sign(r.deltaY)<0?t=v.reverseScroll?v.simScale*.9:v.simScale*1.1:t=v.reverseScroll?v.simScale*1.1:v.simScale*.9,Sn({x:(r.clientX-o.left)/2,y:(r.clientY-o.top)/2},t)}function Hi(){let{x:r,y:t}=v.simPan;return O`
    <div id="sim-pane" @pointerdown=${zi} @wheel=${Oi}>
      ${Vi()}

      <div id="sim-container">
        <div
          id="canvas-container"
          style="transform: translate(${r}px, ${t}px)"></div>
      </div>
      ${Yi()}
    </div>
  `}function Vi(){const{relax:r}=v;return O`<div class="sim-action-bar">
    <button @click=${Ze} class="btn solid">
      <i class="fa-solid fa-rotate"></i>refresh
    </button>
    <button @click=${r} class="btn solid">
      <i class="fa-solid fa-couch"></i>
      relax
    </button>
  </div>`}function Yi(){const{simScale:r,simLive:t,flipped:o}=v;return O` <div class="sim-toolbar">
    <div class="radio-group">
      <span>view</span>
      <button
        class="${o?"":"selected"}"
        @click=${()=>b({flipped:!1})}>
        front
      </button>
      <button
        class="${o?"selected":""}"
        @click=${()=>b({flipped:!0})}>
        back
      </button>
    </div>
    <div class="radio-group">
      <span>auto regen</span>
      <button
        class="${t?"selected":""}"
        @click=${()=>b({simLive:!0})}>
        on
      </button>
      <button
        class="${t?"":"selected"}"
        @click=${()=>b({simLive:!1})}>
        off
      </button>
    </div>

    <div class="panzoom-controls">
      <button
        class="btn icon"
        @click=${()=>lt(r*.9)}>
        <i class="fa-solid fa-magnifying-glass-minus"></i>
      </button>
      <input
        type="range"
        min=${un}
        max=${dn}
        step="0.1"
        .value=${String(r)}
        @input=${e=>lt(Number(e.target.value))} />
      <button
        class="btn icon"
        @click=${()=>lt(r*1.1)}>
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </button>
      <button
        @click=${()=>b({simPan:{x:0,y:0},simScale:1})}
        class="btn icon">
        <i class="fa-solid fa-expand"></i>
      </button>
    </div>
  </div>`}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ui=r=>(...t)=>({_$litDirective$:r,values:t});class Gi{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,e){this._$Ct=t,this._$AM=o,this._$Ci=e}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=Ui(class extends Gi{constructor(r){var t;if(super(r),r.type!==Wi.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,n;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((e=this.nt)!=null&&e.has(s))&&this.st.add(s);return this.render(t)}const o=r.element.classList;for(const s of this.st)s in t||(o.remove(s),this.st.delete(s));for(const s in t){const i=!!t[s];i===this.st.has(s)||(n=this.nt)!=null&&n.has(s)||(i?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return $e}});function Qt(r){if(r.which==2){Oe(r);return}const{interactionMode:t}=v;v.locked||(t=="path"?hi(r):t=="boundary"?Jr(r):t=="block"?(b({stitchSelect:null}),et(r)):Oe(r))}function en(r){r.preventDefault();const{interactionMode:t}=v;t=="path"?fi(r):t=="boundary"&&ti(r)}function Ki(r,t,o,e){return t.map(([n,s],i)=>Ee`
<circle
  class="point"
  data-boundaryindex="${r}"
  data-index="${i}"
  cx="${n*o}"
  cy="${s*e}" />
<g transform="translate(${n*o} ${s*e})  scale (1, -1)">
  <rect x="10" y="-30" width="70" height="20" class="annotation-container" rx="5" fill="#e7e09c"></rect>
  <text x="15" y="-15" textLength="60" class="annotation">[${n-v.bbox.xMin},${s-v.bbox.yMin}]</text>
</g>
      `)}function qi(r,t,o,e){let n=[];for(let s=0;s<t.length;s++){let[i,a]=t[s],[l,c]=t[(s+1)%t.length];n.push(Ee`<line
      class="path bottom"
      data-boundaryindex="${r}"
      data-index="${s}"
      x1=${i*o}
      y1=${a*e}
      x2=${l*o}
      y2=${c*e}>
      </line>
      <line
      class="path top"
      data-boundaryindex="${r}"
      data-index="${s}"
      x1=${i*o}
      y1=${a*e}
      x2=${l*o}
      y2=${c*e}></line>

<g transform="translate(
  ${(i-(i-l)/2)*o}
  ${(a-(a-c)/2)*e})
  scale (1, -1)">
  <rect x="0" y="0" width="60" height="20" class="annotation-container" rx="5" fill="#9ce7b2"></rect>
  <text x="10" y="14" textLength="40" class="annotation">
    ${((a-c)/(i-l)).toFixed(1)}
  </text>
</g>`)}return n}function Di(){const{selectedBoundary:r,regions:t,cellWidth:o,cellHeight:e,blockEditMode:n}=v;if(n==null||r==null)return;const{pos:s}=t[r];return O`<div
    class="block"
    style="left: ${Math.round(s[0]*o)}px; bottom: ${Math.round(s[1]*e)}px;">
    <canvas id="block-fill-canvas" @pointerdown=${ui}></canvas>
    <div class="block-inset-shadow"></div>
    <button class="move-block" @pointerdown=${i=>di(i)}>
      <i class="fa-solid fa-arrows-up-down-left-right"></i>
    </button>
    <button class="dragger up" @pointerdown=${i=>De(i,"up")}>
      <i class="fa-solid fa-angle-up"></i>
    </button>
    <button
      class="dragger down"
      @pointerdown=${i=>De(i,"down")}>
      <i class="fa-solid fa-angle-down"></i>
    </button>
    <button
      class="dragger left"
      @pointerdown=${i=>De(i,"left")}>
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button
      class="dragger right"
      @pointerdown=${i=>De(i,"right")}>
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>`}function Ji(r,t,o,e){return Ee`<path
      data-boundaryindex="${r}"
      class="boundary active" d="M ${t.reduce((n,[s,i])=>`${n} ${s*o} ${i*e}`,"")} Z">`}function ji(r,t,o,e){return Ee`<path
      data-boundaryindex="${r}"
      class="boundary inactive" d="M ${t.reduce((n,[s,i])=>`${n} ${s*o} ${i*e}`,"")} Z">`}function Zi(){let{boundaries:r,selectedBoundary:t,scale:o,cellAspect:e}=v;const n=o*e;return Object.entries(r).map(([s,i])=>s==t?Ji(s,i,o,n):ji(s,i,o,n))}function Qi(){let{boundaries:r,selectedBoundary:t,scale:o,cellAspect:e}=v;if(t==null)return;const n=o*e;return[qi(t,r[t],o,n),Ki(t,r[t],o,n)]}function eo(){const{blocks:r,cellWidth:t,cellHeight:o,selectedBlock:e}=v;return r.map((n,s)=>O`<div
        class="block"
        style="left: ${Math.round(n.pos[0]*t)-1}px; bottom: ${Math.round(n.pos[1]*o)}px;">
        <canvas
          data-blockindex=${s}
          @pointerdown=${i=>{e==s&&Dr(i,s)}}></canvas>
        <div class="block-inset-shadow"></div>
        ${ie(e==s,()=>to(s),()=>O` <div class="hover-overlay">
            <button
              class=" btn solid"
              @click=${()=>b({selectedBlock:s})}>
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>`)}
      </div>`)}function to(r){return O`<button
      class="move-block"
      @pointerdown=${t=>qr(t,r)}>
      <i class="fa-solid fa-arrows-up-down-left-right"></i>
    </button>
    <button
      class="dragger up"
      @pointerdown=${t=>qe(t,r,"up")}>
      <i class="fa-solid fa-angle-up"></i>
    </button>
    <button
      class="dragger down"
      @pointerdown=${t=>qe(t,r,"down")}>
      <i class="fa-solid fa-angle-down"></i>
    </button>
    <button
      class="dragger left"
      @pointerdown=${t=>qe(t,r,"left")}>
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button
      class="dragger right"
      @pointerdown=${t=>qe(t,r,"right")}>
      <i class="fa-solid fa-angle-right"></i>
    </button>`}function no(r,t,o,e){const n=[];for(let s=0;s<t.length-1;s++){const[i,a]=t[s],[l,c]=t[s+1];n.push(Ee`<line
      class="path bottom"
      data-pathindex="${r}"
      data-index="${s}"
      x1=${i*o}
      y1=${a*e}
      x2=${l*o}
      y2=${c*e}>
      </line>
      <line
      class="path top"
      data-pathindex="${r}"
      data-index="${s}"
      x1=${i*o}
      y1=${a*e}
      x2=${l*o}
      y2=${c*e}></line>
<g transform="translate(
  ${(i-(i-l)/2)*o}
  ${(a-(a-c)/2)*e})
  scale (1, -1)">
  <rect x="0" y="0" width="60" height="20" class="annotation-container" rx="5" fill="#9ce7b2"></rect>
  <text x="10" y="14" textLength="40" class="annotation">
    ${((a-c)/(i-l)).toFixed(1)}
  </text>
</g>`)}return n}function ro(r,t,o,e){return t.map(([n,s],i)=>Ee`<circle
      class="point"
      data-pathindex="${r}"
      data-pointindex="${i}"
      cx="${n*o}"
      cy="${s*e}" />

<g transform="translate(${n*o} ${s*e})  scale (1, -1)" >
  <rect x="10" y="-30" width="70" height="20" class="annotation-container" rx="5" fill="#e7e09c"></rect>
  <text x="15" y="-15" textLength="60" class="annotation">[${n-v.bbox.xMin},${s-v.bbox.yMin}]</text>
</g>`)}function io(){const{selectedPath:r,paths:t,cellWidth:o,cellHeight:e,blockEditMode:n}=v;if(n==null||r==null)return;const{offset:s,pts:i}=t[r];return O`<div
    class="block"
    style="left: ${Math.round((i[0][0]+s[0])*o)}px; bottom: ${Math.round((i[0][1]+s[1])*e)}px;">
    <canvas id="path-tile-canvas" @pointerdown=${Li}></canvas>
    <div class="block-inset-shadow"></div>
    <button class="move-block" @pointerdown=${a=>Mi(a)}>
      <i class="fa-solid fa-arrows-up-down-left-right"></i>
    </button>
    <button class="dragger up" @pointerdown=${a=>je(a,"up")}>
      <i class="fa-solid fa-angle-up"></i>
    </button>
    <button
      class="dragger down"
      @pointerdown=${a=>je(a,"down")}>
      <i class="fa-solid fa-angle-down"></i>
    </button>
    <button
      class="dragger left"
      @pointerdown=${a=>je(a,"left")}>
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button
      class="dragger right"
      @pointerdown=${a=>je(a,"right")}>
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>`}function oo(){let{paths:r,selectedPath:t,scale:o,cellHeight:e}=v;if(!(t==null||!r[t]))return[no(t,r[t].pts,o,e),ro(t,r[t].pts,o,e)]}function so(r,t,o,e){const n=[];for(let s=0;s<t.length-1;s++){const[i,a]=t[s],[l,c]=t[s+1];n.push(Ee`<line
      class="background-path"
      data-pathindex="${r}"
      x1=${i*o}
      y1=${a*e}
      x2=${l*o}
      y2=${c*e}>
      </line>
      <line
      class="background-path-hover"
      data-pathindex="${r}"
      x1=${i*o}
      y1=${a*e}
      x2=${l*o}
      y2=${c*e}></line>`)}return n}function ao(){let{paths:r,selectedPath:t,scale:o,cellHeight:e}=v;return Object.entries(r).map(([n,s])=>{if(t!=n)return so(n,s.pts,o,e)})}function lo(){const{stitchSelect:[r,t],cellWidth:o,cellHeight:e,interactionMode:n}=v;if(n!="path")return O`<div
    class="stitch-select-box"
    style="width: ${(t[0]-r[0])*o}px; height: ${(t[1]-r[1])*e}px; left: ${r[0]*o}px; bottom: ${r[1]*e}px;">
    <svg>
      <rect class="stitch-select" width="100%" height="100%"></rect>
    </svg>
    <div class="select-tools">
      ${ie(n=="block",()=>O`<button class="add-block" @click=${Kr}>
          <i class="fa-solid fa-plus"></i>
          block
        </button>`)}
      ${ie(n=="boundary",()=>O`<button class="add-block" @click=${ni}>
          <i class="fa-solid fa-plus"></i>
          boundary
        </button>`)}
      <button
        class="add-block"
        @click=${()=>b({stitchSelect:null})}>
        <i class="fa-solid fa-cancel"></i>
        cancel
      </button>
    </div>
  </div>`}function ct(r){b({interactionMode:r,stitchSelect:null,selectedBlock:null,selectedBoundary:null,selectedPath:null,blockEditMode:null},!0)}function co(){const{pointer:r,colorMode:t,annotations:o,interactionMode:e,scale:n}=v;return O`<div class="chart-bottom-bar">
    <div class="h-group">
      <div class="radio-group">
        <span>color mode</span>
        <button
          class="${t=="operation"?"selected":""}"
          @click=${()=>b({colorMode:"operation"})}>
          command
        </button>
        <button
          class="${t=="yarn"?"selected":""}"
          @click=${()=>b({colorMode:"yarn"})}>
          yarn
        </button>
      </div>
      <div class="radio-group">
        <span>annotations</span>
        <button
          class="${o?"selected":""}"
          @click=${()=>b({annotations:!0})}>
          on
        </button>
        <button
          class="${o?"":"selected"}"
          @click=${()=>b({annotations:!1})}>
          off
        </button>
      </div>
      <div class="radio-group">
        <span>editing</span>
        <button
          class="${e=="boundary"?"selected":""}"
          @click=${()=>ct("boundary")}>
          boundaries
        </button>
        <button
          class="${e=="path"?"selected":""}"
          @click=${()=>ct("path")}>
          paths
        </button>
        <button
          class="${e=="block"?"selected":""}"
          @click=${()=>ct("block")}>
          blocks
        </button>
      </div>
    </div>

    <div class="h-group">
      <div class="pointer-pos">
        <div><span>col</span> <span>${r[0]}</span></div>
        <div><span>row</span> <span>${r[1]}</span></div>
      </div>
      <div class="chart-scale">
        <input
          class="input"
          type="number"
          min="2"
          max="200"
          step="1"
          .value=${String(n)}
          @change=${s=>st(Number(s.target.value))} />
        <div class="spinners">
          <button @click=${()=>st(n+1)}>
            <i class="fa-solid fa-angle-up fa-xs"></i>
          </button>
          <button @click=${()=>st(n-1)}>
            <i class="fa-solid fa-angle-down fa-xs"></i>
          </button>
        </div>
      </div>
      <button class="btn" @click=${yt}>
        <i class="fa-solid fa-expand"></i>
      </button>
    </div>
  </div>`}function uo(){const{blockEditMode:r,selectedBlock:t}=v;return t==null?O`
      <div class="toolbar-message">
        Select a block to edit it. Drag to add a new block.
      </div>
    </div> `:O`<div class="mode-toolbar">
    <div class="h-group">
      <div class="has-dropdown">
        <button class="btn dropdown-toggle">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div class="dropdown above">
          <button class="btn delete" @click=${()=>$n(t)}>
            <i class="fa-solid fa-trash fa-sm"></i>
            Remove
          </button>
        </div>
      </div>
      <span class="toolbar-message">Editing block ${t}</span>
    </div>

    <div class="has-dropdown">
      <button class="btn dropdown-toggle">edit</button>
      <div class="dropdown above align-right">
        <button
          class="btn ${r=="yarn"?"solid":""}"
          @click=${o=>{b({blockEditMode:"yarn"},!0),o.target.blur()}}>
          yarn
        </button>
        <button
          class="btn ${r=="stitch"?"solid":""}"
          @click=${o=>{b({blockEditMode:"stitch"},!0),o.target.blur()}}>
          stitch
        </button>
      </div>
    </div>
  </div>`}function ho(){const{blockEditMode:r,selectedPath:t,paths:o}=v;if(t==null)return O`
      <div class="toolbar-message">
        Select a path to edit it. Drag to add a new path.
      </div>
    `;const e=o[t];return O`
    <div class="h-group">
      <div class="has-dropdown">
        <button class="btn dropdown-toggle">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div class="dropdown above">
          <button class="btn delete" @click=${()=>An(t)}>
            <i class="fa-solid fa-trash fa-sm"></i>
            Remove
          </button>
        </div>
      </div>
      <span class="toolbar-message">
        Editing ${r!=null?`${r} tile of `:""} path
        ${t}
      </span>
      <button class="btn" @click=${()=>bi(t)}>
        <i class="fa-solid fa-copy"></i>
      </button>
      <button class="btn" @click=${()=>gi(t)}>
        <i class="fa-solid fa-arrows-down-to-line"></i>
      </button>
      <button class="btn" @click=${()=>vi(t)}>
        <i class="fa-solid fa-arrow-down"></i>
      </button>
      <button class="btn" @click=${()=>mi(t)}>
        <i class="fa-solid fa-arrow-up"></i>
      </button>
      <button class="btn" @click=${()=>pi(t)}>
        <i class="fa-solid fa-arrows-up-to-line"></i>
      </button>
    </div>

    <div class="radio-group">
      <button
        class="${e.tileMode=="overlap"?"selected":""}"
        @click=${()=>Je(t,"overlap")}>
        overlap
      </button>
      <button
        class="${e.tileMode=="tiled"?"selected":""}"
        @click=${()=>Je(t,"tiled")}>
        tiled
      </button>
      <button
        class="${e.tileMode=="xDiff"?"selected":""}"
        @click=${()=>Je(t,"xDiff")}>
        X
      </button>
      <button
        class="${e.tileMode=="yDiff"?"selected":""}"
        @click=${()=>Je(t,"yDiff")}>
        Y
      </button>
    </div>

    <div class="h-group">
      <button
        class="btn ${r=="yarn"?"solid":""}"
        @click=${n=>{b({blockEditMode:"yarn"},!0),n.target.blur()}}>
        yarn tile
      </button>
      <button
        class="btn ${r=="stitch"?"solid":""}"
        @click=${n=>{b({blockEditMode:"stitch"},!0),n.target.blur()}}>
        stitch tile
      </button>
    </div>
  `}function fo(){const{blockEditMode:r,selectedBoundary:t,boundaries:o,regions:e}=v;if(t==null)return O`
      <div class="toolbar-message">
        Select a boundary to edit it. Drag to add a new boundary.
      </div>
    `;let n=wr(o[t]),s=e[t];return O` <div class="h-group">
      <div class="has-dropdown">
        <button class="btn dropdown-toggle">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div class="dropdown above">
          <button
            class="btn delete"
            @click=${()=>Pn(t)}>
            <i class="fa-solid fa-trash fa-sm"></i>
            Remove
          </button>
        </div>
      </div>
      <span class="toolbar-message">
        Editing ${r!=null?`${r} fill of `:""}
        boundary ${t}
      </span>
      <button class="btn" @click=${()=>ri(t)}>
        <i class="fa-solid fa-copy"></i>
      </button>
      <button class="btn" @click=${()=>Zr(t)}>
        <i class="fa-solid fa-arrows-down-to-line"></i>
      </button>
      <button class="btn" @click=${()=>Qr(t)}>
        <i class="fa-solid fa-arrow-down"></i>
      </button>
      <button class="btn" @click=${()=>ei(t)}>
        <i class="fa-solid fa-arrow-up"></i>
      </button>
      <button
        class="btn"
        @click=${()=>jr(t)}>
        <i class="fa-solid fa-arrows-up-to-line"></i>
      </button>
    </div>

    <div class="radio-group">
      <span>yarn join</span>
      <!-- <button
        class="${s.joinMode=="none"?"selected":""}"
        @click=${()=>Kt(t,"none")}>
        none
      </button>
      <button
        class="${s.joinMode=="tucks"?"selected":""}"
        @click=${()=>Kt(t,"tucks")}>
        tucks
      </button> -->
      <button
        class="${v.tucks?"":"selected"}"
        @click=${()=>b({tucks:!1})}>
        none
      </button>
      <button
        class="${v.tucks?"selected":""}"
        @click=${()=>b({tucks:!0})}>
        tucks
      </button>
      <span>shaping</span>
      <div class="chart-scale">
        <input
          class="input"
          type="number"
          min="0"
          max="7"
          step="1"
          .value=${String(s.shaping)}
          @change=${i=>at(Number(i.target.value))} />
        <div class="spinners">
          <button
            @click=${()=>at(t,s.shaping+1)}>
            <i class="fa-solid fa-angle-up fa-xs"></i>
          </button>
          <button
            @click=${()=>at(t,s.shaping-1)}>
            <i class="fa-solid fa-angle-down fa-xs"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="h-group">
      <button
        class="btn ${r=="yarn"?"solid":""}"
        @click=${i=>{b({blockEditMode:"yarn"},!0),i.target.blur()}}>
        yarn tile
      </button>
      <button
        class="btn ${r=="stitch"?"solid":""}"
        @click=${i=>{b({blockEditMode:"stitch"},!0),i.target.blur()}}>
        stitch tile
      </button>
    </div>

    <span class="area-size">
      ${n.width}<i class="fa-solid fa-xmark fa-xs"></i>${n.height}
    </span>`}function po(){const{interactionMode:r}=v;return O`<div class="mode-toolbar">
    ${ie(r=="boundary",fo)}
    ${ie(r=="path",ho)}
    ${ie(r=="block",uo)}
  </div>`}const go="#585858";function vo(){const{blocks:r,selectedBlock:t,blockEditMode:o,selectedBoundary:e,regions:n,selectedPath:s,paths:i}=v;let a=null;return e!=null?a=o=="stitch"?n[e].stitchBlock:n[e].yarnBlock:t!=null?a=o=="stitch"?r[t].stitchBlock:r[t].yarnBlock:s!=null&&(a=o=="stitch"?i[s].stitchBlock:i[s].yarnBlock),a}function mo(r,t,o){if(r=="EMPTY"||r=="BM"||m[r]>19)return;const e={selected:v.activeSymbol==o};return O`<button
    class=${wt(e)}
    @click=${()=>b({activeSymbol:o})}>
    <svg viewBox="0 0 1 1">
      <rect fill=${t.color} width="100%" height="100%"></rect>
      <path
        fill="none"
        stroke="black"
        stroke-width="0.04"
        d="${t.pathdata}" />
    </svg>
  </button>`}function tn(r,t){const o={selected:v.activeYarn==r};return O`<button
    style="--color: ${t};"
    class=${wt(o)}
    @click=${()=>b({activeYarn:r})}></button>`}function yo(){const{blockEditMode:r,yarnPalette:t}=v;return O`<div
    class="picker-container ${r==null?"hidden":"shown"}">
    ${bo()}

    <div class="palette scroller">
      <button
        class="btn close-picker"
        @click=${()=>b({blockEditMode:null},!0)}>
        <i class="fa-solid fa-circle-xmark fa-xl"></i>
      </button>
      ${ie(r=="stitch",()=>Object.entries(ve).map(([o,e],n)=>mo(o,e,n)),()=>O`${tn(0,go)}
        ${t.map((o,e)=>tn(e+1,o))}`)}
    </div>
  </div>`}function bo(){const{activeBlockTool:r,blockEditMode:t}=v;if(t==null)return;let o=vo();if(o!=null)return O`<div class="tool-picker">
    <span class="block-size">${o.width}x${o.height} </span>

    ${Object.keys(nt).map(e=>O`<button
        class="btn solid ${r==e?"current":""}"
        @click=${()=>b({activeBlockTool:e})}>
        <i class=${fn[e].icon}></i>
      </button>`)}
  </div>`}function wo(r){const{cellWidth:t,cellHeight:o,chartPan:e,bbox:n}=v;let[s,i]=mr(r);v.pointer=[Math.floor((s-e.x)/t-n.xMin),Math.floor((i-e.y)/o-n.yMin)]}function xo(){const{cellWidth:r,cellHeight:t,chartPan:o,chart:e,bbox:n,transforming:s,interactionMode:i,stitchSelect:a,annotations:l}=v,c=Math.round(n.xMin*r),d=Math.round(n.yMin*t),u=Math.round(r*e.width),h=Math.round(t*e.height),p={allowHover:!s&&(i=="boundary"||i=="path"),boundaryMode:i=="boundary",pathMode:i=="path",blockMode:i=="block",showAnnotations:l};return O`
    <div
      class="desktop ${wt(p)}"
      @pointermove=${g=>wo(g)}
      @wheel=${Wt}>
      <div
        style="position: absolute; bottom: 0; left: 0; transform: translate(${o.x}px,${-o.y}px);">
        <canvas
          style="transform: translate(${c}px,${-d}px); outline: 1px solid black;"
          id="chart-canvas"></canvas>
      </div>
      <svg
        id="svg-layer"
        preserveAspectRatio="xMidYMid meet"
        style="position: absolute;"
        width="100%"
        height="100%"
        @pointerdown=${Qt}
        @contextmenu=${en}>
        <g transform="scale (1, -1)" transform-origin="center">
          <g transform="translate(${o.x} ${o.y})">
            <g transform="translate(${c} ${d})">
              ${t>10?Ee`
              <rect
                width=${u}
                height=${h}
                fill="url(#grid)">
              </rect>`:""}
            </g>
            ${Zi()} ${ao()}
          </g>
        </g>
      </svg>
      <div
        style="position: absolute; bottom: 0; left: 0;
      transform: translate(${o.x}px, ${-o.y}px); ">
        ${ie(i=="boundary",Di)}
        ${ie(i=="path",io)}
        ${ie(i=="block",eo)}
        ${ie(a,lo)}
      </div>
      <svg
        preserveAspectRatio="xMidYMid meet"
        class="vector-overlay"
        style="position: absolute; "
        width="100%"
        height="100%"
        @pointerdown=${Qt}
        @contextmenu=${en}
        @wheel=${Wt}>
        <g transform="scale (1, -1)" transform-origin="center">
          <g transform="translate(${o.x} ${o.y})">
            ${Qi()} ${oo()}
          </g>
        </g>
      </svg>

      ${yo()}
      <div class="bottom-bars-container">${po()} ${co()}</div>
    </div>
  `}let me=15,He=35,Ae=0;function Eo(){const{passSchedule:r,yarnSchedule:t,yarnPalette:o}=v;return O`<div id="time-needle-pane" @wheel=${Mo} @pointerdown=${Lo}>
    <div
      class="yarn-assignments"
      style="height: ${Math.round(r.length*me)}px; transform: translateY(${Ae}px)">
      ${t.map((e,n)=>O`<div style="--color: ${o[e-1]}" class="yarn-cell">
            <!-- <span>${n}</span> -->
          </div>`)}
    </div>
    <div
      class="time-needle-container"
      style="height: ${r.length*me}px; transform: translate(${He}px, ${Ae}px)">
      <canvas id="timeneedlebitmap"></canvas>
    </div>
  </div> `}function ko(r,t){if(t<1||t>100)return;const o={x:(r.x-He)/me,y:(r.y-Ae)/me};me=t,He=Math.round(r.x-o.x*t),Ae=Math.round(r.y-o.y*t)}function Mo(r){let t;const o=r.currentTarget.getBoundingClientRect();Math.sign(r.deltaY)<0?t=v.reverseScroll?me*.9:me*1.1:t=v.reverseScroll?me*1.1:me*.9,ko({x:r.clientX-o.left,y:r.clientY-o.top},t)}function Lo(r){r.preventDefault();const t={x:r.clientX,y:r.clientY},o={x:He,y:Ae};function e(s){if(s.buttons==0)n();else{const i=t.x-s.clientX,a=t.y-s.clientY;He=Math.round(o.x-i),Ae=Math.round(o.y-a)}}function n(){window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",n),window.removeEventListener("pointerleave",n)}window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),window.addEventListener("pointerleave",n)}var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bo(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Rn={exports:{}};/**
 * jscolor - JavaScript Color Picker
 *
 * @link    http://jscolor.com
 * @license For open source use: GPLv3
 *          For commercial use: JSColor Commercial License
 * @author  Jan Odvarko - East Desire
 *
 * See usage examples at http://jscolor.com/examples/
 */(function(r){(function(t,o){{r.exports=t.document?o(t):function(e){if(!e.document)throw new Error("jscolor needs a window with document");return o(e)};return}})(typeof window<"u"?window:Co,function(t){var o=function(){var e={initialized:!1,instances:[],readyQueue:[],register:function(){typeof t<"u"&&t.document&&(t.document.readyState!=="loading"?e.pub.init():t.document.addEventListener("DOMContentLoaded",e.pub.init,!1))},installBySelector:function(n,s){if(s=s?e.node(s):t.document,!s)throw new Error("Missing root node");for(var i=s.querySelectorAll(n),a=new RegExp("(^|\\s)("+e.pub.lookupClass+")(\\s*(\\{[^}]*\\})|\\s|$)","i"),l=0;l<i.length;l+=1)if(!(i[l].jscolor&&i[l].jscolor instanceof e.pub)&&!(i[l].type!==void 0&&i[l].type.toLowerCase()=="color"&&e.isColorAttrSupported)){var c,d;if((c=e.getDataAttr(i[l],"jscolor"))!==null||i[l].className&&(d=i[l].className.match(a))){var u=i[l],h="";c!==null?h=c:d&&(console.warn('Installation using class name is DEPRECATED. Use data-jscolor="" attribute instead.'+e.docsRef),d[4]&&(h=d[4]));var p=null;if(h.trim())try{p=e.parseOptionsStr(h)}catch(g){console.warn(g+`
`+h)}try{new e.pub(u,p)}catch(g){console.warn(g)}}}},parseOptionsStr:function(n){var s=null;try{s=JSON.parse(n)}catch(i){if(e.pub.looseJSON)try{s=new Function("var opts = ("+n+'); return typeof opts === "object" ? opts : {};')()}catch(a){throw new Error("Could not evaluate jscolor options: "+a)}else throw new Error("Could not parse jscolor options as JSON: "+i)}return s},getInstances:function(){for(var n=[],s=0;s<e.instances.length;s+=1)e.instances[s]&&e.instances[s].targetElement&&n.push(e.instances[s]);return n},createEl:function(n){var s=t.document.createElement(n);return e.setData(s,"gui",!0),s},node:function(n){if(!n)return null;if(typeof n=="string"){var s=n,i=null;try{i=t.document.querySelector(s)}catch(a){return console.warn(a),null}return i||console.warn("No element matches the selector: %s",s),i}return e.isNode(n)?n:(console.warn("Invalid node of type %s: %s",typeof n,n),null)},isNode:function(n){return typeof Node=="object"?n instanceof Node:n&&typeof n=="object"&&typeof n.nodeType=="number"&&typeof n.nodeName=="string"},nodeName:function(n){return n&&n.nodeName?n.nodeName.toLowerCase():!1},removeChildren:function(n){for(;n.firstChild;)n.removeChild(n.firstChild)},isTextInput:function(n){return n&&e.nodeName(n)==="input"&&n.type.toLowerCase()==="text"},isButton:function(n){if(!n)return!1;var s=e.nodeName(n);return s==="button"||s==="input"&&["button","submit","reset"].indexOf(n.type.toLowerCase())>-1},isButtonEmpty:function(n){switch(e.nodeName(n)){case"input":return!n.value||n.value.trim()==="";case"button":return n.textContent.trim()===""}return null},isPassiveEventSupported:function(){var n=!1;try{var s=Object.defineProperty({},"passive",{get:function(){n=!0}});t.addEventListener("testPassive",null,s),t.removeEventListener("testPassive",null,s)}catch{}return n}(),isColorAttrSupported:function(){var n=t.document.createElement("input");return!!(n.setAttribute&&(n.setAttribute("type","color"),n.type.toLowerCase()=="color"))}(),dataProp:"_data_jscolor",setData:function(){var n=arguments[0];if(arguments.length===3){var s=n.hasOwnProperty(e.dataProp)?n[e.dataProp]:n[e.dataProp]={},i=arguments[1],a=arguments[2];return s[i]=a,!0}else if(arguments.length===2&&typeof arguments[1]=="object"){var s=n.hasOwnProperty(e.dataProp)?n[e.dataProp]:n[e.dataProp]={},l=arguments[1];for(var i in l)l.hasOwnProperty(i)&&(s[i]=l[i]);return!0}throw new Error("Invalid arguments")},removeData:function(){var n=arguments[0];if(!n.hasOwnProperty(e.dataProp))return!0;for(var s=1;s<arguments.length;s+=1){var i=arguments[s];delete n[e.dataProp][i]}return!0},getData:function(n,s,i){if(!n.hasOwnProperty(e.dataProp))if(i!==void 0)n[e.dataProp]={};else return;var a=n[e.dataProp];return!a.hasOwnProperty(s)&&i!==void 0&&(a[s]=i),a[s]},getDataAttr:function(n,s){var i="data-"+s,a=n.getAttribute(i);return a},setDataAttr:function(n,s,i){var a="data-"+s;n.setAttribute(a,i)},_attachedGroupEvents:{},attachGroupEvent:function(n,s,i,a){e._attachedGroupEvents.hasOwnProperty(n)||(e._attachedGroupEvents[n]=[]),e._attachedGroupEvents[n].push([s,i,a]),s.addEventListener(i,a,!1)},detachGroupEvents:function(n){if(e._attachedGroupEvents.hasOwnProperty(n)){for(var s=0;s<e._attachedGroupEvents[n].length;s+=1){var i=e._attachedGroupEvents[n][s];i[0].removeEventListener(i[1],i[2],!1)}delete e._attachedGroupEvents[n]}},preventDefault:function(n){n.preventDefault&&n.preventDefault(),n.returnValue=!1},triggerEvent:function(n,s,i,a){if(n){var l=null;return typeof Event=="function"?l=new Event(s,{bubbles:i,cancelable:a}):(l=t.document.createEvent("Event"),l.initEvent(s,i,a)),l?(e.setData(l,"internal",!0),n.dispatchEvent(l),!0):!1}},triggerInputEvent:function(n,s,i,a){n&&e.isTextInput(n)&&e.triggerEvent(n,s,i,a)},eventKey:function(n){var s={9:"Tab",13:"Enter",27:"Escape"};return typeof n.code=="string"?n.code:n.keyCode!==void 0&&s.hasOwnProperty(n.keyCode)?s[n.keyCode]:null},strList:function(n){return n?n.replace(/^\s+|\s+$/g,"").split(/\s+/):[]},hasClass:function(n,s){return s?n.classList!==void 0?n.classList.contains(s):(" "+n.className.replace(/\s+/g," ")+" ").indexOf(" "+s+" ")!=-1:!1},addClass:function(n,s){var i=e.strList(s);if(n.classList!==void 0){for(var a=0;a<i.length;a+=1)n.classList.add(i[a]);return}for(var a=0;a<i.length;a+=1)e.hasClass(n,i[a])||(n.className+=(n.className?" ":"")+i[a])},removeClass:function(n,s){var i=e.strList(s);if(n.classList!==void 0){for(var a=0;a<i.length;a+=1)n.classList.remove(i[a]);return}for(var a=0;a<i.length;a+=1){var l=new RegExp("^\\s*"+i[a]+"\\s*|\\s*"+i[a]+"\\s*$|\\s+"+i[a]+"(\\s+)","g");n.className=n.className.replace(l,"$1")}},getCompStyle:function(n){var s=t.getComputedStyle?t.getComputedStyle(n):n.currentStyle;return s||{}},setStyle:function(n,s,i,a){var l=i?"important":"",c=null;for(var d in s)if(s.hasOwnProperty(d)){var u=null;s[d]===null?(c||(c=e.getData(n,"origStyle")),c&&c.hasOwnProperty(d)&&(u=c[d])):(a&&(c||(c=e.getData(n,"origStyle",{})),c.hasOwnProperty(d)||(c[d]=n.style[d])),u=s[d]),u!==null&&n.style.setProperty(d,u,l)}},appendCss:function(n){var s=document.querySelector("head"),i=document.createElement("style");i.innerText=n,s.appendChild(i)},appendDefaultCss:function(n){e.appendCss([".jscolor-wrap, .jscolor-wrap div, .jscolor-wrap canvas { position:static; display:block; visibility:visible; overflow:visible; margin:0; padding:0; border:none; border-radius:0; outline:none; z-index:auto; float:none; width:auto; height:auto; left:auto; right:auto; top:auto; bottom:auto; min-width:0; min-height:0; max-width:none; max-height:none; background:none; clip:auto; opacity:1; transform:none; box-shadow:none; box-sizing:content-box; }",".jscolor-wrap { clear:both; }",".jscolor-wrap .jscolor-picker { position:relative; }",".jscolor-wrap .jscolor-shadow { position:absolute; left:0; top:0; width:100%; height:100%; }",".jscolor-wrap .jscolor-border { position:relative; }",".jscolor-wrap .jscolor-palette { position:absolute; }",".jscolor-wrap .jscolor-palette-sw { position:absolute; display:block; cursor:pointer; }",".jscolor-wrap .jscolor-btn { position:absolute; overflow:hidden; white-space:nowrap; font:13px sans-serif; text-align:center; cursor:pointer; }"].join(`
`))},hexColor:function(n,s,i){return"#"+(("0"+Math.round(n).toString(16)).slice(-2)+("0"+Math.round(s).toString(16)).slice(-2)+("0"+Math.round(i).toString(16)).slice(-2)).toUpperCase()},hexaColor:function(n,s,i,a){return"#"+(("0"+Math.round(n).toString(16)).slice(-2)+("0"+Math.round(s).toString(16)).slice(-2)+("0"+Math.round(i).toString(16)).slice(-2)+("0"+Math.round(a*255).toString(16)).slice(-2)).toUpperCase()},rgbColor:function(n,s,i){return"rgb("+Math.round(n)+","+Math.round(s)+","+Math.round(i)+")"},rgbaColor:function(n,s,i,a){return"rgba("+Math.round(n)+","+Math.round(s)+","+Math.round(i)+","+Math.round((a??1)*100)/100+")"},linearGradient:function(){function n(){for(var i="linear-gradient",a=["","-webkit-","-moz-","-o-","-ms-"],l=t.document.createElement("div"),c=0;c<a.length;c+=1){var d=a[c]+i,u=d+"(to right, rgba(0,0,0,0), rgba(0,0,0,0))";if(l.style.background=u,l.style.background)return d}return i}var s=n();return function(){return s+"("+Array.prototype.join.call(arguments,", ")+")"}}(),setBorderRadius:function(n,s){e.setStyle(n,{"border-radius":s||"0"})},setBoxShadow:function(n,s){e.setStyle(n,{"box-shadow":s||"none"})},getElementPos:function(n,s){var i=0,a=0,l=n.getBoundingClientRect();if(i=l.left,a=l.top,!s){var c=e.getViewPos();i+=c[0],a+=c[1]}return[i,a]},getElementSize:function(n){return[n.offsetWidth,n.offsetHeight]},getAbsPointerPos:function(n){var s=0,i=0;return typeof n.changedTouches<"u"&&n.changedTouches.length?(s=n.changedTouches[0].clientX,i=n.changedTouches[0].clientY):typeof n.clientX=="number"&&(s=n.clientX,i=n.clientY),{x:s,y:i}},getRelPointerPos:function(n){var s=n.target||n.srcElement,i=s.getBoundingClientRect(),a=0,l=0,c=0,d=0;return typeof n.changedTouches<"u"&&n.changedTouches.length?(c=n.changedTouches[0].clientX,d=n.changedTouches[0].clientY):typeof n.clientX=="number"&&(c=n.clientX,d=n.clientY),a=c-i.left,l=d-i.top,{x:a,y:l}},getViewPos:function(){var n=t.document.documentElement;return[(t.pageXOffset||n.scrollLeft)-(n.clientLeft||0),(t.pageYOffset||n.scrollTop)-(n.clientTop||0)]},getViewSize:function(){var n=t.document.documentElement;return[t.innerWidth||n.clientWidth,t.innerHeight||n.clientHeight]},RGB_HSV:function(n,s,i){n/=255,s/=255,i/=255;var a=Math.min(Math.min(n,s),i),l=Math.max(Math.max(n,s),i),c=l-a;if(c===0)return[null,0,100*l];var d=n===a?3+(i-s)/c:s===a?5+(n-i)/c:1+(s-n)/c;return[60*(d===6?0:d),100*(c/l),100*l]},HSV_RGB:function(n,s,i){var a=255*(i/100);if(n===null)return[a,a,a];n/=60,s/=100;var l=Math.floor(n),c=l%2?n-l:1-(n-l),d=a*(1-s),u=a*(1-s*c);switch(l){case 6:case 0:return[a,u,d];case 1:return[u,a,d];case 2:return[d,a,u];case 3:return[d,u,a];case 4:return[u,d,a];case 5:return[a,d,u]}},parseColorString:function(n){var s={rgba:null,format:null},i;if(i=n.match(/^\W*([0-9A-F]{3,8})\W*$/i)){if(i[1].length===8)s.format="hexa",s.rgba=[parseInt(i[1].slice(0,2),16),parseInt(i[1].slice(2,4),16),parseInt(i[1].slice(4,6),16),parseInt(i[1].slice(6,8),16)/255];else if(i[1].length===6)s.format="hex",s.rgba=[parseInt(i[1].slice(0,2),16),parseInt(i[1].slice(2,4),16),parseInt(i[1].slice(4,6),16),null];else if(i[1].length===3)s.format="hex",s.rgba=[parseInt(i[1].charAt(0)+i[1].charAt(0),16),parseInt(i[1].charAt(1)+i[1].charAt(1),16),parseInt(i[1].charAt(2)+i[1].charAt(2),16),null];else return!1;return s}if(i=n.match(/^\W*rgba?\(([^)]*)\)\W*$/i)){var a=i[1].split(","),l=/^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/,c,d,u,h;if(a.length>=3&&(c=a[0].match(l))&&(d=a[1].match(l))&&(u=a[2].match(l)))return s.format="rgb",s.rgba=[parseFloat(c[1])||0,parseFloat(d[1])||0,parseFloat(u[1])||0,null],a.length>=4&&(h=a[3].match(l))&&(s.format="rgba",s.rgba[3]=parseFloat(h[1])||0),s}return!1},parsePaletteValue:function(n){var s=[];typeof n=="string"?n.replace(/#[0-9A-F]{3}\b|#[0-9A-F]{6}([0-9A-F]{2})?\b|rgba?\(([^)]*)\)/ig,function(c){s.push(c)}):Array.isArray(n)&&(s=n);for(var i=[],a=0;a<s.length;a++){var l=e.parseColorString(s[a]);l&&i.push(l)}return i},containsTranparentColor:function(n){for(var s=0;s<n.length;s++){var i=n[s].rgba[3];if(i!==null&&i<1)return!0}return!1},isAlphaFormat:function(n){switch(n.toLowerCase()){case"hexa":case"rgba":return!0}return!1},scaleCanvasForHighDPR:function(n){var s=t.devicePixelRatio||1;n.width*=s,n.height*=s;var i=n.getContext("2d");i.scale(s,s)},genColorPreviewCanvas:function(n,s,i,a){var l=Math.round(e.pub.previewSeparator.length),c=e.pub.chessboardSize,d=e.pub.chessboardColor1,u=e.pub.chessboardColor2,h=i||c*2,p=c*2,g=e.createEl("canvas"),y=g.getContext("2d");g.width=h,g.height=p,a&&e.scaleCanvasForHighDPR(g),y.fillStyle=d,y.fillRect(0,0,h,p),y.fillStyle=u;for(var w=0;w<h;w+=c*2)y.fillRect(w,0,c,c),y.fillRect(w+c,c,c,c);n&&(y.fillStyle=n,y.fillRect(0,0,h,p));var x=null;switch(s){case"left":x=0,y.clearRect(0,0,l/2,p);break;case"right":x=h-l,y.clearRect(h-l/2,0,l/2,p);break}if(x!==null){y.lineWidth=1;for(var L=0;L<e.pub.previewSeparator.length;L+=1)y.beginPath(),y.strokeStyle=e.pub.previewSeparator[L],y.moveTo(.5+x+L,0),y.lineTo(.5+x+L,p),y.stroke()}return{canvas:g,width:h,height:p}},genColorPreviewGradient:function(n,s,i){var a=[];return s&&i?a=["to "+{left:"right",right:"left"}[s],n+" 0%",n+" "+i+"px","rgba(0,0,0,0) "+(i+1)+"px","rgba(0,0,0,0) 100%"]:a=["to right",n+" 0%",n+" 100%"],e.linearGradient.apply(this,a)},redrawPosition:function(){if(!(!e.picker||!e.picker.owner)){var n=e.picker.owner;if(n.container!==t.document.body)e._drawPosition(n,0,0,"relative",!1);else{var s,i;n.fixed?(s=e.getElementPos(n.targetElement,!0),i=[0,0]):(s=e.getElementPos(n.targetElement),i=e.getViewPos());var a=e.getElementSize(n.targetElement),l=e.getViewSize(),c=e.getPickerDims(n),d=[c.borderW,c.borderH],u,h,p;switch(n.position.toLowerCase()){case"left":u=1,h=0,p=-1;break;case"right":u=1,h=0,p=1;break;case"top":u=0,h=1,p=-1;break;default:u=0,h=1,p=1;break}var g=(a[h]+d[h])/2;if(n.smartPosition)var y=[-i[u]+s[u]+d[u]>l[u]&&-i[u]+s[u]+a[u]/2>l[u]/2&&s[u]+a[u]-d[u]>=0?s[u]+a[u]-d[u]:s[u],-i[h]+s[h]+a[h]+d[h]-g+g*p>l[h]?-i[h]+s[h]+a[h]/2>l[h]/2&&s[h]+a[h]-g-g*p>=0?s[h]+a[h]-g-g*p:s[h]+a[h]-g+g*p:s[h]+a[h]-g+g*p>=0?s[h]+a[h]-g+g*p:s[h]+a[h]-g-g*p];else var y=[s[u],s[h]+a[h]-g+g*p];var w=y[u],x=y[h],L=n.fixed?"fixed":"absolute",P=(y[0]+d[0]>s[0]||y[0]<s[0]+a[0])&&y[1]+d[1]<s[1]+a[1];e._drawPosition(n,w,x,L,P)}}},_drawPosition:function(n,s,i,a,l){var c=l?0:n.shadowBlur;e.picker.wrap.style.position=a,(Math.round(parseFloat(e.picker.wrap.style.left))!==Math.round(s)||Math.round(parseFloat(e.picker.wrap.style.top))!==Math.round(i))&&(e.picker.wrap.style.left=s+"px",e.picker.wrap.style.top=i+"px"),e.setBoxShadow(e.picker.boxS,n.shadow?new e.BoxShadow(0,c,n.shadowBlur,0,n.shadowColor):null)},getPickerDims:function(n){var s=2*n.controlBorderWidth+n.width,i=2*n.controlBorderWidth+n.height,a=2*n.controlBorderWidth+2*e.getControlPadding(n)+n.sliderSize;e.getSliderChannel(n)&&(s+=a),n.hasAlphaChannel()&&(s+=a);var l=e.getPaletteDims(n,s);l.height&&(i+=l.height+n.padding),n.closeButton&&(i+=2*n.controlBorderWidth+n.padding+n.buttonHeight);var c=s+2*n.padding,d=i+2*n.padding;return{contentW:s,contentH:i,paddedW:c,paddedH:d,borderW:c+2*n.borderWidth,borderH:d+2*n.borderWidth,palette:l}},getPaletteDims:function(n,s){var i=0,a=0,l=0,c=0,d=0,u=n._palette?n._palette.length:0;return u&&(i=n.paletteCols,a=i>0?Math.ceil(u/i):0,l=Math.max(1,Math.floor((s-(i-1)*n.paletteSpacing)/i)),c=n.paletteHeight?Math.min(n.paletteHeight,l):l),a&&(d=a*c+(a-1)*n.paletteSpacing),{cols:i,rows:a,cellW:l,cellH:c,width:s,height:d}},getControlPadding:function(n){return Math.max(n.padding/2,2*n.pointerBorderWidth+n.pointerThickness-n.controlBorderWidth)},getPadYChannel:function(n){switch(n.mode.charAt(1).toLowerCase()){case"v":return"v"}return"s"},getSliderChannel:function(n){if(n.mode.length>2)switch(n.mode.charAt(2).toLowerCase()){case"s":return"s";case"v":return"v"}return null},triggerCallback:function(n,s){if(n[s]){var i=null;if(typeof n[s]=="string")try{i=new Function(n[s])}catch(a){console.error(a)}else i=n[s];i&&i.call(n)}},triggerGlobal:function(n){for(var s=e.getInstances(),i=0;i<s.length;i+=1)s[i].trigger(n)},_pointerMoveEvent:{mouse:"mousemove",touch:"touchmove"},_pointerEndEvent:{mouse:"mouseup",touch:"touchend"},_pointerOrigin:null,onDocumentKeyUp:function(n){["Tab","Escape"].indexOf(e.eventKey(n))!==-1&&e.picker&&e.picker.owner&&e.picker.owner.tryHide()},onWindowResize:function(n){e.redrawPosition()},onWindowScroll:function(n){e.redrawPosition()},onParentScroll:function(n){e.picker&&e.picker.owner&&e.picker.owner.tryHide()},onDocumentMouseDown:function(n){var s=n.target||n.srcElement;if(s.jscolor&&s.jscolor instanceof e.pub)s.jscolor.showOnClick&&!s.disabled&&s.jscolor.show();else if(e.getData(s,"gui")){var i=e.getData(s,"control");i&&e.onControlPointerStart(n,s,e.getData(s,"control"),"mouse")}else e.picker&&e.picker.owner&&e.picker.owner.tryHide()},onPickerTouchStart:function(n){var s=n.target||n.srcElement;e.getData(s,"control")&&e.onControlPointerStart(n,s,e.getData(s,"control"),"touch")},onControlPointerStart:function(n,s,i,a){var l=e.getData(s,"instance");e.preventDefault(n);var c=function(g,y){e.attachGroupEvent("drag",g,e._pointerMoveEvent[a],e.onDocumentPointerMove(n,s,i,a,y)),e.attachGroupEvent("drag",g,e._pointerEndEvent[a],e.onDocumentPointerEnd(n,s,i,a))};if(c(t.document,[0,0]),t.parent&&t.frameElement){var d=t.frameElement.getBoundingClientRect(),u=[-d.left,-d.top];c(t.parent.window.document,u)}var h=e.getAbsPointerPos(n),p=e.getRelPointerPos(n);switch(e._pointerOrigin={x:h.x-p.x,y:h.y-p.y},i){case"pad":e.getSliderChannel(l)==="v"&&l.channels.v===0&&l.fromHSVA(null,null,100,null),e.setPad(l,n,0,0);break;case"sld":e.setSld(l,n,0);break;case"asld":e.setASld(l,n,0);break}l.trigger("input")},onDocumentPointerMove:function(n,s,i,a,l){return function(c){var d=e.getData(s,"instance");switch(i){case"pad":e.setPad(d,c,l[0],l[1]);break;case"sld":e.setSld(d,c,l[1]);break;case"asld":e.setASld(d,c,l[1]);break}d.trigger("input")}},onDocumentPointerEnd:function(n,s,i,a){return function(l){var c=e.getData(s,"instance");e.detachGroupEvents("drag"),c.trigger("input"),c.trigger("change")}},onPaletteSampleClick:function(n){var s=n.currentTarget,i=e.getData(s,"instance"),a=e.getData(s,"color");i.format.toLowerCase()==="any"&&(i._setFormat(a.format),e.isAlphaFormat(i.getFormat())||(a.rgba[3]=1)),a.rgba[3]===null&&(i.paletteSetsAlpha===!0||i.paletteSetsAlpha==="auto"&&i._paletteHasTransparency)&&(a.rgba[3]=1),i.fromRGBA.apply(i,a.rgba),i.trigger("input"),i.trigger("change"),i.hideOnPaletteClick&&i.hide()},setPad:function(n,s,i,a){var l=e.getAbsPointerPos(s),c=i+l.x-e._pointerOrigin.x-n.padding-n.controlBorderWidth,d=a+l.y-e._pointerOrigin.y-n.padding-n.controlBorderWidth,u=c*(360/(n.width-1)),h=100-d*(100/(n.height-1));switch(e.getPadYChannel(n)){case"s":n.fromHSVA(u,h,null,null);break;case"v":n.fromHSVA(u,null,h,null);break}},setSld:function(n,s,i){var a=e.getAbsPointerPos(s),l=i+a.y-e._pointerOrigin.y-n.padding-n.controlBorderWidth,c=100-l*(100/(n.height-1));switch(e.getSliderChannel(n)){case"s":n.fromHSVA(null,c,null,null);break;case"v":n.fromHSVA(null,null,c,null);break}},setASld:function(n,s,i){var a=e.getAbsPointerPos(s),l=i+a.y-e._pointerOrigin.y-n.padding-n.controlBorderWidth,c=1-l*(1/(n.height-1));if(c<1){var d=n.getFormat();n.format.toLowerCase()==="any"&&!e.isAlphaFormat(d)&&n._setFormat(d==="hex"?"hexa":"rgba")}n.fromHSVA(null,null,null,c)},createPadCanvas:function(){var n={elm:null,draw:null},s=e.createEl("canvas"),i=s.getContext("2d"),a=function(l,c,d){s.width=l,s.height=c,i.clearRect(0,0,s.width,s.height);var u=i.createLinearGradient(0,0,s.width,0);u.addColorStop(0/6,"#F00"),u.addColorStop(1/6,"#FF0"),u.addColorStop(2/6,"#0F0"),u.addColorStop(3/6,"#0FF"),u.addColorStop(4/6,"#00F"),u.addColorStop(5/6,"#F0F"),u.addColorStop(6/6,"#F00"),i.fillStyle=u,i.fillRect(0,0,s.width,s.height);var h=i.createLinearGradient(0,0,0,s.height);switch(d.toLowerCase()){case"s":h.addColorStop(0,"rgba(255,255,255,0)"),h.addColorStop(1,"rgba(255,255,255,1)");break;case"v":h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,1)");break}i.fillStyle=h,i.fillRect(0,0,s.width,s.height)};return n.elm=s,n.draw=a,n},createSliderGradient:function(){var n={elm:null,draw:null},s=e.createEl("canvas"),i=s.getContext("2d"),a=function(l,c,d,u){s.width=l,s.height=c,i.clearRect(0,0,s.width,s.height);var h=i.createLinearGradient(0,0,0,s.height);h.addColorStop(0,d),h.addColorStop(1,u),i.fillStyle=h,i.fillRect(0,0,s.width,s.height)};return n.elm=s,n.draw=a,n},createASliderGradient:function(){var n={elm:null,draw:null},s=e.createEl("canvas"),i=s.getContext("2d"),a=function(l,c,d){s.width=l,s.height=c,i.clearRect(0,0,s.width,s.height);var u=s.width/2,h=e.pub.chessboardColor1,p=e.pub.chessboardColor2;if(i.fillStyle=h,i.fillRect(0,0,s.width,s.height),u>0)for(var g=0;g<s.height;g+=u*2)i.fillStyle=p,i.fillRect(0,g,u,u),i.fillRect(u,g+u,u,u);var y=i.createLinearGradient(0,0,0,s.height);y.addColorStop(0,d),y.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=y,i.fillRect(0,0,s.width,s.height)};return n.elm=s,n.draw=a,n},BoxShadow:function(){var n=function(s,i,a,l,c,d){this.hShadow=s,this.vShadow=i,this.blur=a,this.spread=l,this.color=c,this.inset=!!d};return n.prototype.toString=function(){var s=[Math.round(this.hShadow)+"px",Math.round(this.vShadow)+"px",Math.round(this.blur)+"px",Math.round(this.spread)+"px",this.color];return this.inset&&s.push("inset"),s.join(" ")},n}(),flags:{leaveValue:1,leaveAlpha:2,leavePreview:4},enumOpts:{format:["auto","any","hex","hexa","rgb","rgba"],previewPosition:["left","right"],mode:["hsv","hvs","hs","hv"],position:["left","right","top","bottom"],alphaChannel:["auto",!0,!1],paletteSetsAlpha:["auto",!0,!1]},deprecatedOpts:{styleElement:"previewElement",onFineChange:"onInput",overwriteImportant:"forceStyle",closable:"closeButton",insetWidth:"controlBorderWidth",insetColor:"controlBorderColor",refine:null},docsRef:" See https://jscolor.com/docs/",pub:function(n,s){var i=this;s||(s={}),this.channels={r:255,g:255,b:255,h:0,s:0,v:100,a:1},this.format="auto",this.value=void 0,this.alpha=void 0,this.random=!1,this.onChange=void 0,this.onInput=void 0,this.valueElement=void 0,this.alphaElement=void 0,this.previewElement=void 0,this.previewPosition="left",this.previewSize=32,this.previewPadding=8,this.required=!0,this.hash=!0,this.uppercase=!0,this.forceStyle=!0,this.width=181,this.height=101,this.mode="HSV",this.alphaChannel="auto",this.position="bottom",this.smartPosition=!0,this.showOnClick=!0,this.hideOnLeave=!0,this.palette=[],this.paletteCols=10,this.paletteSetsAlpha="auto",this.paletteHeight=16,this.paletteSpacing=4,this.hideOnPaletteClick=!1,this.sliderSize=16,this.crossSize=8,this.closeButton=!1,this.closeText="Close",this.buttonColor="rgba(0,0,0,1)",this.buttonHeight=18,this.padding=12,this.backgroundColor="rgba(255,255,255,1)",this.borderWidth=1,this.borderColor="rgba(187,187,187,1)",this.borderRadius=8,this.controlBorderWidth=1,this.controlBorderColor="rgba(187,187,187,1)",this.shadow=!0,this.shadowBlur=15,this.shadowColor="rgba(0,0,0,0.2)",this.pointerColor="rgba(76,76,76,1)",this.pointerBorderWidth=1,this.pointerBorderColor="rgba(255,255,255,1)",this.pointerThickness=2,this.zIndex=5e3,this.container=void 0,this.minS=0,this.maxS=100,this.minV=0,this.maxV=100,this.minA=0,this.maxA=1,this.option=function(){if(!arguments.length)throw new Error("No option specified");if(arguments.length===1&&typeof arguments[0]=="string"){try{return l(arguments[0])}catch(C){console.warn(C)}return!1}else if(arguments.length>=2&&typeof arguments[0]=="string"){try{if(!a(arguments[0],arguments[1]))return!1}catch(C){return console.warn(C),!1}return this.redraw(),this.exposeColor(),!0}else if(arguments.length===1&&typeof arguments[0]=="object"){var f=arguments[0],M=!0;for(var k in f)if(f.hasOwnProperty(k))try{a(k,f[k])||(M=!1)}catch(C){console.warn(C),M=!1}return this.redraw(),this.exposeColor(),M}throw new Error("Invalid arguments")},this.channel=function(f,M){if(typeof f!="string")throw new Error("Invalid value for channel name: "+f);if(M===void 0)return this.channels.hasOwnProperty(f.toLowerCase())?this.channels[f.toLowerCase()]:(console.warn("Getting unknown channel: "+f),!1);var k=!1;switch(f.toLowerCase()){case"r":k=this.fromRGBA(M,null,null,null);break;case"g":k=this.fromRGBA(null,M,null,null);break;case"b":k=this.fromRGBA(null,null,M,null);break;case"h":k=this.fromHSVA(M,null,null,null);break;case"s":k=this.fromHSVA(null,M,null,null);break;case"v":k=this.fromHSVA(null,null,M,null);break;case"a":k=this.fromHSVA(null,null,null,M);break;default:return console.warn("Setting unknown channel: "+f),!1}return k?(this.redraw(),!0):!1},this.trigger=function(f){for(var M=e.strList(f),k=0;k<M.length;k+=1){var C=M[k].toLowerCase(),A=null;switch(C){case"input":A="onInput";break;case"change":A="onChange";break}A&&e.triggerCallback(this,A),e.triggerInputEvent(this.valueElement,C,!0,!0)}},this.fromHSVA=function(f,M,k,C,A){if(f===void 0&&(f=null),M===void 0&&(M=null),k===void 0&&(k=null),C===void 0&&(C=null),f!==null){if(isNaN(f))return!1;this.channels.h=Math.max(0,Math.min(360,f))}if(M!==null){if(isNaN(M))return!1;this.channels.s=Math.max(0,Math.min(100,this.maxS,M),this.minS)}if(k!==null){if(isNaN(k))return!1;this.channels.v=Math.max(0,Math.min(100,this.maxV,k),this.minV)}if(C!==null){if(isNaN(C))return!1;this.channels.a=this.hasAlphaChannel()?Math.max(0,Math.min(1,this.maxA,C),this.minA):1}var R=e.HSV_RGB(this.channels.h,this.channels.s,this.channels.v);return this.channels.r=R[0],this.channels.g=R[1],this.channels.b=R[2],this.exposeColor(A),!0},this.fromRGBA=function(f,M,k,C,A){if(f===void 0&&(f=null),M===void 0&&(M=null),k===void 0&&(k=null),C===void 0&&(C=null),f!==null){if(isNaN(f))return!1;f=Math.max(0,Math.min(255,f))}if(M!==null){if(isNaN(M))return!1;M=Math.max(0,Math.min(255,M))}if(k!==null){if(isNaN(k))return!1;k=Math.max(0,Math.min(255,k))}if(C!==null){if(isNaN(C))return!1;this.channels.a=this.hasAlphaChannel()?Math.max(0,Math.min(1,this.maxA,C),this.minA):1}var R=e.RGB_HSV(f===null?this.channels.r:f,M===null?this.channels.g:M,k===null?this.channels.b:k);R[0]!==null&&(this.channels.h=Math.max(0,Math.min(360,R[0]))),R[2]!==0&&(this.channels.s=Math.max(0,this.minS,Math.min(100,this.maxS,R[1]))),this.channels.v=Math.max(0,this.minV,Math.min(100,this.maxV,R[2]));var F=e.HSV_RGB(this.channels.h,this.channels.s,this.channels.v);return this.channels.r=F[0],this.channels.g=F[1],this.channels.b=F[2],this.exposeColor(A),!0},this.fromHSV=function(f,M,k,C){return console.warn("fromHSV() method is DEPRECATED. Using fromHSVA() instead."+e.docsRef),this.fromHSVA(f,M,k,null,C)},this.fromRGB=function(f,M,k,C){return console.warn("fromRGB() method is DEPRECATED. Using fromRGBA() instead."+e.docsRef),this.fromRGBA(f,M,k,null,C)},this.fromString=function(f,M){if(!this.required&&f.trim()==="")return this.setPreviewElementBg(null),this.setValueElementValue(""),!0;var k=e.parseColorString(f);return k?(this.format.toLowerCase()==="any"&&(this._setFormat(k.format),e.isAlphaFormat(this.getFormat())||(k.rgba[3]=1)),this.fromRGBA(k.rgba[0],k.rgba[1],k.rgba[2],k.rgba[3],M),!0):!1},this.randomize=function(f,M,k,C,A,R,F,I){f===void 0&&(f=0),M===void 0&&(M=100),k===void 0&&(k=0),C===void 0&&(C=100),A===void 0&&(A=0),R===void 0&&(R=359),F===void 0&&(F=1),I===void 0&&(I=1),this.fromHSVA(A+Math.floor(Math.random()*(R-A+1)),k+Math.floor(Math.random()*(C-k+1)),f+Math.floor(Math.random()*(M-f+1)),(100*F+Math.floor(Math.random()*(100*(I-F)+1)))/100)},this.toString=function(f){switch(f===void 0&&(f=this.getFormat()),f.toLowerCase()){case"hex":return this.toHEXString();case"hexa":return this.toHEXAString();case"rgb":return this.toRGBString();case"rgba":return this.toRGBAString()}return!1},this.toHEXString=function(){return e.hexColor(this.channels.r,this.channels.g,this.channels.b)},this.toHEXAString=function(){return e.hexaColor(this.channels.r,this.channels.g,this.channels.b,this.channels.a)},this.toRGBString=function(){return e.rgbColor(this.channels.r,this.channels.g,this.channels.b)},this.toRGBAString=function(){return e.rgbaColor(this.channels.r,this.channels.g,this.channels.b,this.channels.a)},this.toGrayscale=function(){return .213*this.channels.r+.715*this.channels.g+.072*this.channels.b},this.toCanvas=function(){return e.genColorPreviewCanvas(this.toRGBAString()).canvas},this.toDataURL=function(){return this.toCanvas().toDataURL()},this.toBackground=function(){return e.pub.background(this.toRGBAString())},this.isLight=function(){return this.toGrayscale()>127.5},this.hide=function(){g()&&c()},this.show=function(){d()},this.redraw=function(){g()&&d()},this.getFormat=function(){return this._currentFormat},this._setFormat=function(f){this._currentFormat=f.toLowerCase()},this.hasAlphaChannel=function(){return this.alphaChannel==="auto"?this.format.toLowerCase()==="any"||e.isAlphaFormat(this.getFormat())||this.alpha!==void 0||this.alphaElement!==void 0:this.alphaChannel},this.processValueInput=function(f){this.fromString(f)||this.exposeColor()},this.processAlphaInput=function(f){this.fromHSVA(null,null,null,parseFloat(f))||this.exposeColor()},this.exposeColor=function(f){var M=this.toString(),k=this.getFormat();if(e.setDataAttr(this.targetElement,"current-color",M),!(f&e.flags.leaveValue)&&this.valueElement&&((k==="hex"||k==="hexa")&&(this.uppercase||(M=M.toLowerCase()),this.hash||(M=M.replace(/^#/,""))),this.setValueElementValue(M)),!(f&e.flags.leaveAlpha)&&this.alphaElement){var C=Math.round(this.channels.a*100)/100;this.setAlphaElementValue(C)}!(f&e.flags.leavePreview)&&this.previewElement&&((e.isTextInput(this.previewElement)||e.isButton(this.previewElement)&&!e.isButtonEmpty(this.previewElement))&&this.previewPosition,this.setPreviewElementBg(this.toRGBAString())),g()&&(u(),h(),p())},this.setPreviewElementBg=function(f){if(this.previewElement){var M=null,k=null;(e.isTextInput(this.previewElement)||e.isButton(this.previewElement)&&!e.isButtonEmpty(this.previewElement))&&(M=this.previewPosition,k=this.previewSize);var C=[];if(!f)C.push({image:"none",position:"left top",size:"auto",repeat:"no-repeat",origin:"padding-box"});else{C.push({image:e.genColorPreviewGradient(f,M,k?k-e.pub.previewSeparator.length:null),position:"left top",size:"auto",repeat:M?"repeat-y":"repeat",origin:"padding-box"});var A=e.genColorPreviewCanvas("rgba(0,0,0,0)",M?{left:"right",right:"left"}[M]:null,k,!0);C.push({image:"url('"+A.canvas.toDataURL()+"')",position:(M||"left")+" top",size:A.width+"px "+A.height+"px",repeat:M?"repeat-y":"repeat",origin:"padding-box"})}for(var R={image:[],position:[],size:[],repeat:[],origin:[]},F=0;F<C.length;F+=1)R.image.push(C[F].image),R.position.push(C[F].position),R.size.push(C[F].size),R.repeat.push(C[F].repeat),R.origin.push(C[F].origin);var W={"background-image":R.image.join(", "),"background-position":R.position.join(", "),"background-size":R.size.join(", "),"background-repeat":R.repeat.join(", "),"background-origin":R.origin.join(", ")};e.setStyle(this.previewElement,W,this.forceStyle);var I={left:null,right:null};M&&(I[M]=this.previewSize+this.previewPadding+"px");var W={"padding-left":I.left,"padding-right":I.right};e.setStyle(this.previewElement,W,this.forceStyle,!0)}},this.setValueElementValue=function(f){this.valueElement&&(e.nodeName(this.valueElement)==="input"?this.valueElement.value=f:this.valueElement.innerHTML=f)},this.setAlphaElementValue=function(f){this.alphaElement&&(e.nodeName(this.alphaElement)==="input"?this.alphaElement.value=f:this.alphaElement.innerHTML=f)},this._processParentElementsInDOM=function(){if(!this._parentElementsProcessed){this._parentElementsProcessed=!0;var f=this.targetElement;do{var M=e.getCompStyle(f);M.position&&M.position.toLowerCase()==="fixed"&&(this.fixed=!0),f!==this.targetElement&&(e.getData(f,"hasScrollListener")||(f.addEventListener("scroll",e.onParentScroll,!1),e.setData(f,"hasScrollListener",!0)))}while((f=f.parentNode)&&e.nodeName(f)!=="body")}},this.tryHide=function(){this.hideOnLeave&&this.hide()},this.set__palette=function(f){this.palette=f,this._palette=e.parsePaletteValue(f),this._paletteHasTransparency=e.containsTranparentColor(this._palette)};function a(f,M){if(typeof f!="string")throw new Error("Invalid value for option name: "+f);if(e.enumOpts.hasOwnProperty(f)&&(typeof M=="string"&&(M=M.toLowerCase()),e.enumOpts[f].indexOf(M)===-1))throw new Error("Option '"+f+"' has invalid value: "+M);if(e.deprecatedOpts.hasOwnProperty(f)){var k=f,C=e.deprecatedOpts[f];if(C)console.warn("Option '%s' is DEPRECATED, using '%s' instead."+e.docsRef,k,C),f=C;else throw new Error("Option '"+f+"' is DEPRECATED")}var A="set__"+f;if(typeof i[A]=="function")return i[A](M),!0;if(f in i)return i[f]=M,!0;throw new Error("Unrecognized configuration option: "+f)}function l(f){if(typeof f!="string")throw new Error("Invalid value for option name: "+f);if(e.deprecatedOpts.hasOwnProperty(f)){var M=f,k=e.deprecatedOpts[f];if(k)console.warn("Option '%s' is DEPRECATED, using '%s' instead."+e.docsRef,M,k),f=k;else throw new Error("Option '"+f+"' is DEPRECATED")}var C="get__"+f;if(typeof i[C]=="function")return i[C](value);if(f in i)return i[f];throw new Error("Unrecognized configuration option: "+f)}function c(){e.removeClass(i.targetElement,e.pub.activeClassName),e.picker.wrap.parentNode.removeChild(e.picker.wrap),delete e.picker.owner}function d(){i._processParentElementsInDOM(),e.picker||(e.picker={owner:null,wrap:e.createEl("div"),box:e.createEl("div"),boxS:e.createEl("div"),boxB:e.createEl("div"),pad:e.createEl("div"),padB:e.createEl("div"),padM:e.createEl("div"),padCanvas:e.createPadCanvas(),cross:e.createEl("div"),crossBY:e.createEl("div"),crossBX:e.createEl("div"),crossLY:e.createEl("div"),crossLX:e.createEl("div"),sld:e.createEl("div"),sldB:e.createEl("div"),sldM:e.createEl("div"),sldGrad:e.createSliderGradient(),sldPtrS:e.createEl("div"),sldPtrIB:e.createEl("div"),sldPtrMB:e.createEl("div"),sldPtrOB:e.createEl("div"),asld:e.createEl("div"),asldB:e.createEl("div"),asldM:e.createEl("div"),asldGrad:e.createASliderGradient(),asldPtrS:e.createEl("div"),asldPtrIB:e.createEl("div"),asldPtrMB:e.createEl("div"),asldPtrOB:e.createEl("div"),pal:e.createEl("div"),btn:e.createEl("div"),btnT:e.createEl("div")},e.picker.pad.appendChild(e.picker.padCanvas.elm),e.picker.padB.appendChild(e.picker.pad),e.picker.cross.appendChild(e.picker.crossBY),e.picker.cross.appendChild(e.picker.crossBX),e.picker.cross.appendChild(e.picker.crossLY),e.picker.cross.appendChild(e.picker.crossLX),e.picker.padB.appendChild(e.picker.cross),e.picker.box.appendChild(e.picker.padB),e.picker.box.appendChild(e.picker.padM),e.picker.sld.appendChild(e.picker.sldGrad.elm),e.picker.sldB.appendChild(e.picker.sld),e.picker.sldB.appendChild(e.picker.sldPtrOB),e.picker.sldPtrOB.appendChild(e.picker.sldPtrMB),e.picker.sldPtrMB.appendChild(e.picker.sldPtrIB),e.picker.sldPtrIB.appendChild(e.picker.sldPtrS),e.picker.box.appendChild(e.picker.sldB),e.picker.box.appendChild(e.picker.sldM),e.picker.asld.appendChild(e.picker.asldGrad.elm),e.picker.asldB.appendChild(e.picker.asld),e.picker.asldB.appendChild(e.picker.asldPtrOB),e.picker.asldPtrOB.appendChild(e.picker.asldPtrMB),e.picker.asldPtrMB.appendChild(e.picker.asldPtrIB),e.picker.asldPtrIB.appendChild(e.picker.asldPtrS),e.picker.box.appendChild(e.picker.asldB),e.picker.box.appendChild(e.picker.asldM),e.picker.box.appendChild(e.picker.pal),e.picker.btn.appendChild(e.picker.btnT),e.picker.box.appendChild(e.picker.btn),e.picker.boxB.appendChild(e.picker.box),e.picker.wrap.appendChild(e.picker.boxS),e.picker.wrap.appendChild(e.picker.boxB),e.picker.wrap.addEventListener("touchstart",e.onPickerTouchStart,e.isPassiveEventSupported?{passive:!1}:!1));var f=e.picker,M=!!e.getSliderChannel(i),k=i.hasAlphaChannel(),C=e.getPickerDims(i),A=2*i.pointerBorderWidth+i.pointerThickness+2*i.crossSize,R=e.getControlPadding(i),F=Math.min(i.borderRadius,Math.round(i.padding*Math.PI)),I="crosshair";f.wrap.className="jscolor-wrap",f.wrap.style.width=C.borderW+"px",f.wrap.style.height=C.borderH+"px",f.wrap.style.zIndex=i.zIndex,f.box.className="jscolor-picker",f.box.style.width=C.paddedW+"px",f.box.style.height=C.paddedH+"px",f.boxS.className="jscolor-shadow",e.setBorderRadius(f.boxS,F+"px"),f.boxB.className="jscolor-border",f.boxB.style.border=i.borderWidth+"px solid",f.boxB.style.borderColor=i.borderColor,f.boxB.style.background=i.backgroundColor,e.setBorderRadius(f.boxB,F+"px"),f.padM.style.background="rgba(255,0,0,.2)",f.sldM.style.background="rgba(0,255,0,.2)",f.asldM.style.background="rgba(0,0,255,.2)",f.padM.style.opacity=f.sldM.style.opacity=f.asldM.style.opacity="0",f.pad.style.position="relative",f.pad.style.width=i.width+"px",f.pad.style.height=i.height+"px",f.padCanvas.draw(i.width,i.height,e.getPadYChannel(i)),f.padB.style.position="absolute",f.padB.style.left=i.padding+"px",f.padB.style.top=i.padding+"px",f.padB.style.border=i.controlBorderWidth+"px solid",f.padB.style.borderColor=i.controlBorderColor,f.padM.style.position="absolute",f.padM.style.left="0px",f.padM.style.top="0px",f.padM.style.width=i.padding+2*i.controlBorderWidth+i.width+R+"px",f.padM.style.height=2*i.controlBorderWidth+2*i.padding+i.height+"px",f.padM.style.cursor=I,e.setData(f.padM,{instance:i,control:"pad"}),f.cross.style.position="absolute",f.cross.style.left=f.cross.style.top="0",f.cross.style.width=f.cross.style.height=A+"px",f.crossBY.style.position=f.crossBX.style.position="absolute",f.crossBY.style.background=f.crossBX.style.background=i.pointerBorderColor,f.crossBY.style.width=f.crossBX.style.height=2*i.pointerBorderWidth+i.pointerThickness+"px",f.crossBY.style.height=f.crossBX.style.width=A+"px",f.crossBY.style.left=f.crossBX.style.top=Math.floor(A/2)-Math.floor(i.pointerThickness/2)-i.pointerBorderWidth+"px",f.crossBY.style.top=f.crossBX.style.left="0",f.crossLY.style.position=f.crossLX.style.position="absolute",f.crossLY.style.background=f.crossLX.style.background=i.pointerColor,f.crossLY.style.height=f.crossLX.style.width=A-2*i.pointerBorderWidth+"px",f.crossLY.style.width=f.crossLX.style.height=i.pointerThickness+"px",f.crossLY.style.left=f.crossLX.style.top=Math.floor(A/2)-Math.floor(i.pointerThickness/2)+"px",f.crossLY.style.top=f.crossLX.style.left=i.pointerBorderWidth+"px",f.sld.style.overflow="hidden",f.sld.style.width=i.sliderSize+"px",f.sld.style.height=i.height+"px",f.sldGrad.draw(i.sliderSize,i.height,"#000","#000"),f.sldB.style.display=M?"block":"none",f.sldB.style.position="absolute",f.sldB.style.left=i.padding+i.width+2*i.controlBorderWidth+2*R+"px",f.sldB.style.top=i.padding+"px",f.sldB.style.border=i.controlBorderWidth+"px solid",f.sldB.style.borderColor=i.controlBorderColor,f.sldM.style.display=M?"block":"none",f.sldM.style.position="absolute",f.sldM.style.left=i.padding+i.width+2*i.controlBorderWidth+R+"px",f.sldM.style.top="0px",f.sldM.style.width=i.sliderSize+2*R+2*i.controlBorderWidth+(k?0:Math.max(0,i.padding-R))+"px",f.sldM.style.height=2*i.controlBorderWidth+2*i.padding+i.height+"px",f.sldM.style.cursor="default",e.setData(f.sldM,{instance:i,control:"sld"}),f.sldPtrIB.style.border=f.sldPtrOB.style.border=i.pointerBorderWidth+"px solid "+i.pointerBorderColor,f.sldPtrOB.style.position="absolute",f.sldPtrOB.style.left=-(2*i.pointerBorderWidth+i.pointerThickness)+"px",f.sldPtrOB.style.top="0",f.sldPtrMB.style.border=i.pointerThickness+"px solid "+i.pointerColor,f.sldPtrS.style.width=i.sliderSize+"px",f.sldPtrS.style.height=e.pub.sliderInnerSpace+"px",f.asld.style.overflow="hidden",f.asld.style.width=i.sliderSize+"px",f.asld.style.height=i.height+"px",f.asldGrad.draw(i.sliderSize,i.height,"#000"),f.asldB.style.display=k?"block":"none",f.asldB.style.position="absolute",f.asldB.style.left=i.padding+i.width+2*i.controlBorderWidth+R+(M?i.sliderSize+3*R+2*i.controlBorderWidth:0)+"px",f.asldB.style.top=i.padding+"px",f.asldB.style.border=i.controlBorderWidth+"px solid",f.asldB.style.borderColor=i.controlBorderColor,f.asldM.style.display=k?"block":"none",f.asldM.style.position="absolute",f.asldM.style.left=i.padding+i.width+2*i.controlBorderWidth+R+(M?i.sliderSize+2*R+2*i.controlBorderWidth:0)+"px",f.asldM.style.top="0px",f.asldM.style.width=i.sliderSize+2*R+2*i.controlBorderWidth+Math.max(0,i.padding-R)+"px",f.asldM.style.height=2*i.controlBorderWidth+2*i.padding+i.height+"px",f.asldM.style.cursor="default",e.setData(f.asldM,{instance:i,control:"asld"}),f.asldPtrIB.style.border=f.asldPtrOB.style.border=i.pointerBorderWidth+"px solid "+i.pointerBorderColor,f.asldPtrOB.style.position="absolute",f.asldPtrOB.style.left=-(2*i.pointerBorderWidth+i.pointerThickness)+"px",f.asldPtrOB.style.top="0",f.asldPtrMB.style.border=i.pointerThickness+"px solid "+i.pointerColor,f.asldPtrS.style.width=i.sliderSize+"px",f.asldPtrS.style.height=e.pub.sliderInnerSpace+"px",f.pal.className="jscolor-palette",f.pal.style.display=C.palette.rows?"block":"none",f.pal.style.left=i.padding+"px",f.pal.style.top=2*i.controlBorderWidth+2*i.padding+i.height+"px",f.pal.innerHTML="";for(var W=e.genColorPreviewCanvas("rgba(0,0,0,0)"),Z=0,G=0;G<C.palette.rows;G++)for(var $=0;$<C.palette.cols&&Z<i._palette.length;$++,Z++){var E=i._palette[Z],B=e.rgbaColor.apply(null,E.rgba),T=e.createEl("div");T.style.width=C.palette.cellW-2*i.controlBorderWidth+"px",T.style.height=C.palette.cellH-2*i.controlBorderWidth+"px",T.style.backgroundColor=B;var H=e.createEl("div");H.className="jscolor-palette-sw",H.style.left=(C.palette.cols<=1?0:Math.round(10*($*((C.contentW-C.palette.cellW)/(C.palette.cols-1))))/10)+"px",H.style.top=G*(C.palette.cellH+i.paletteSpacing)+"px",H.style.border=i.controlBorderWidth+"px solid",H.style.borderColor=i.controlBorderColor,E.rgba[3]!==null&&E.rgba[3]<1&&(H.style.backgroundImage="url('"+W.canvas.toDataURL()+"')",H.style.backgroundRepeat="repeat",H.style.backgroundPosition="center center"),e.setData(H,{instance:i,control:"palette-sw",color:E}),H.addEventListener("click",e.onPaletteSampleClick,!1),H.appendChild(T),f.pal.appendChild(H)}function V(){var ne=i.controlBorderColor.split(/\s+/),ke=ne.length<2?ne[0]:ne[1]+" "+ne[0]+" "+ne[0]+" "+ne[1];f.btn.style.borderColor=ke}var j=15;f.btn.className="jscolor-btn jscolor-btn-close",f.btn.style.display=i.closeButton?"block":"none",f.btn.style.left=i.padding+"px",f.btn.style.bottom=i.padding+"px",f.btn.style.padding="0 "+j+"px",f.btn.style.maxWidth=C.contentW-2*i.controlBorderWidth-2*j+"px",f.btn.style.height=i.buttonHeight+"px",f.btn.style.border=i.controlBorderWidth+"px solid",V(),f.btn.style.color=i.buttonColor,f.btn.onmousedown=function(){i.hide()},f.btnT.style.display="inline",f.btnT.style.lineHeight=i.buttonHeight+"px",f.btnT.innerText=i.closeText,u(),h(),p(),e.picker.owner&&e.picker.owner!==i&&e.removeClass(e.picker.owner.targetElement,e.pub.activeClassName),e.picker.owner=i,e.redrawPosition(),f.wrap.parentNode!==i.container&&i.container.appendChild(f.wrap),e.addClass(i.targetElement,e.pub.activeClassName)}function u(){var f=e.getPadYChannel(i),M=Math.round(i.channels.h/360*(i.width-1)),k=Math.round((1-i.channels[f]/100)*(i.height-1)),C=2*i.pointerBorderWidth+i.pointerThickness+2*i.crossSize,A=-Math.floor(C/2);switch(e.picker.cross.style.left=M+A+"px",e.picker.cross.style.top=k+A+"px",e.getSliderChannel(i)){case"s":var R=e.HSV_RGB(i.channels.h,100,i.channels.v),F=e.HSV_RGB(i.channels.h,0,i.channels.v),W="rgb("+Math.round(R[0])+","+Math.round(R[1])+","+Math.round(R[2])+")",Z="rgb("+Math.round(F[0])+","+Math.round(F[1])+","+Math.round(F[2])+")";e.picker.sldGrad.draw(i.sliderSize,i.height,W,Z);break;case"v":var I=e.HSV_RGB(i.channels.h,i.channels.s,100),W="rgb("+Math.round(I[0])+","+Math.round(I[1])+","+Math.round(I[2])+")",Z="#000";e.picker.sldGrad.draw(i.sliderSize,i.height,W,Z);break}e.picker.asldGrad.draw(i.sliderSize,i.height,i.toHEXString())}function h(){var f=e.getSliderChannel(i);if(f){var M=Math.round((1-i.channels[f]/100)*(i.height-1));e.picker.sldPtrOB.style.top=M-(2*i.pointerBorderWidth+i.pointerThickness)-Math.floor(e.pub.sliderInnerSpace/2)+"px"}e.picker.asldGrad.draw(i.sliderSize,i.height,i.toHEXString())}function p(){var f=Math.round((1-i.channels.a)*(i.height-1));e.picker.asldPtrOB.style.top=f-(2*i.pointerBorderWidth+i.pointerThickness)-Math.floor(e.pub.sliderInnerSpace/2)+"px"}function g(){return e.picker&&e.picker.owner===i}function y(f){e.eventKey(f)==="Enter"&&(i.valueElement&&i.processValueInput(i.valueElement.value),i.tryHide())}function w(f){e.eventKey(f)==="Enter"&&(i.alphaElement&&i.processAlphaInput(i.alphaElement.value),i.tryHide())}function x(f){if(!e.getData(f,"internal")){var M=i.valueElement.value;i.processValueInput(i.valueElement.value),e.triggerCallback(i,"onChange"),i.valueElement.value!==M&&e.triggerInputEvent(i.valueElement,"change",!0,!0)}}function L(f){if(!e.getData(f,"internal")){var M=i.alphaElement.value;i.processAlphaInput(i.alphaElement.value),e.triggerCallback(i,"onChange"),e.triggerInputEvent(i.valueElement,"change",!0,!0),i.alphaElement.value!==M&&e.triggerInputEvent(i.alphaElement,"change",!0,!0)}}function P(f){e.getData(f,"internal")||(i.valueElement&&i.fromString(i.valueElement.value,e.flags.leaveValue),e.triggerCallback(i,"onInput"))}function S(f){e.getData(f,"internal")||(i.alphaElement&&i.fromHSVA(null,null,null,parseFloat(i.alphaElement.value),e.flags.leaveAlpha),e.triggerCallback(i,"onInput"),e.triggerInputEvent(i.valueElement,"input",!0,!0))}if(e.pub.options){for(var N in e.pub.options)if(e.pub.options.hasOwnProperty(N))try{a(N,e.pub.options[N])}catch(f){console.warn(f)}}var X=[];s.preset&&(typeof s.preset=="string"?X=s.preset.split(/\s+/):Array.isArray(s.preset)?X=s.preset.slice():console.warn("Unrecognized preset value")),X.indexOf("default")===-1&&X.push("default");for(var z=X.length-1;z>=0;z-=1){var _=X[z];if(_){if(!e.pub.presets.hasOwnProperty(_)){console.warn("Unknown preset: %s",_);continue}for(var N in e.pub.presets[_])if(e.pub.presets[_].hasOwnProperty(N))try{a(N,e.pub.presets[_][N])}catch(M){console.warn(M)}}}var ae=["preset"];for(var N in s)if(s.hasOwnProperty(N)&&ae.indexOf(N)===-1)try{a(N,s[N])}catch(M){console.warn(M)}if(this.container===void 0?this.container=t.document.body:this.container=e.node(this.container),!this.container)throw new Error("Cannot instantiate color picker without a container element");if(this.targetElement=e.node(n),!this.targetElement){if(typeof n=="string"&&/^[a-zA-Z][\w:.-]*$/.test(n)){var ye=n;throw new Error("If '"+ye+"' is supposed to be an ID, please use '#"+ye+"' or any valid CSS selector.")}throw new Error("Cannot instantiate color picker without a target element")}if(this.targetElement.jscolor&&this.targetElement.jscolor instanceof e.pub)throw new Error("Color picker already installed on this element");if(this.targetElement.jscolor=this,e.addClass(this.targetElement,e.pub.className),e.instances.push(this),e.isButton(this.targetElement)&&(this.targetElement.type.toLowerCase()!=="button"&&(this.targetElement.type="button"),e.isButtonEmpty(this.targetElement))){e.removeChildren(this.targetElement),this.targetElement.appendChild(t.document.createTextNode(" "));var be=e.getCompStyle(this.targetElement),se=parseFloat(be["min-width"])||0;se<this.previewSize&&e.setStyle(this.targetElement,{"min-width":this.previewSize+"px"},this.forceStyle)}if(this.valueElement===void 0?e.isTextInput(this.targetElement)&&(this.valueElement=this.targetElement):this.valueElement===null||(this.valueElement=e.node(this.valueElement)),this.alphaElement&&(this.alphaElement=e.node(this.alphaElement)),this.previewElement===void 0?this.previewElement=this.targetElement:this.previewElement===null||(this.previewElement=e.node(this.previewElement)),this.valueElement&&e.isTextInput(this.valueElement)){var ee={onInput:this.valueElement.oninput};this.valueElement.oninput=null,this.valueElement.addEventListener("keydown",y,!1),this.valueElement.addEventListener("change",x,!1),this.valueElement.addEventListener("input",P,!1),ee.onInput&&this.valueElement.addEventListener("input",ee.onInput,!1),this.valueElement.setAttribute("autocomplete","off"),this.valueElement.setAttribute("autocorrect","off"),this.valueElement.setAttribute("autocapitalize","off"),this.valueElement.setAttribute("spellcheck",!1)}this.alphaElement&&e.isTextInput(this.alphaElement)&&(this.alphaElement.addEventListener("keydown",w,!1),this.alphaElement.addEventListener("change",L,!1),this.alphaElement.addEventListener("input",S,!1),this.alphaElement.setAttribute("autocomplete","off"),this.alphaElement.setAttribute("autocorrect","off"),this.alphaElement.setAttribute("autocapitalize","off"),this.alphaElement.setAttribute("spellcheck",!1));var D="FFFFFF";this.value!==void 0?D=this.value:this.valueElement&&this.valueElement.value!==void 0&&(D=this.valueElement.value);var J=void 0;if(this.alpha!==void 0?J=""+this.alpha:this.alphaElement&&this.alphaElement.value!==void 0&&(J=this.alphaElement.value),this._currentFormat=null,["auto","any"].indexOf(this.format.toLowerCase())>-1){var fe=e.parseColorString(D);this._currentFormat=fe?fe.format:"hex"}else this._currentFormat=this.format.toLowerCase();this.processValueInput(D),J!==void 0&&this.processAlphaInput(J),this.random&&this.randomize.apply(this,Array.isArray(this.random)?this.random:[])}};return e.pub.className="jscolor",e.pub.activeClassName="jscolor-active",e.pub.looseJSON=!0,e.pub.presets={},e.pub.presets.default={},e.pub.presets.light={backgroundColor:"rgba(255,255,255,1)",controlBorderColor:"rgba(187,187,187,1)",buttonColor:"rgba(0,0,0,1)"},e.pub.presets.dark={backgroundColor:"rgba(51,51,51,1)",controlBorderColor:"rgba(153,153,153,1)",buttonColor:"rgba(240,240,240,1)"},e.pub.presets.small={width:101,height:101,padding:10,sliderSize:14,paletteCols:8},e.pub.presets.medium={width:181,height:101,padding:12,sliderSize:16,paletteCols:10},e.pub.presets.large={width:271,height:151,padding:12,sliderSize:24,paletteCols:15},e.pub.presets.thin={borderWidth:1,controlBorderWidth:1,pointerBorderWidth:1},e.pub.presets.thick={borderWidth:2,controlBorderWidth:2,pointerBorderWidth:2},e.pub.sliderInnerSpace=3,e.pub.chessboardSize=8,e.pub.chessboardColor1="#666666",e.pub.chessboardColor2="#999999",e.pub.previewSeparator=["rgba(255,255,255,.65)","rgba(128,128,128,.65)"],e.pub.init=function(){if(!e.initialized)for(t.document.addEventListener("mousedown",e.onDocumentMouseDown,!1),t.document.addEventListener("keyup",e.onDocumentKeyUp,!1),t.addEventListener("resize",e.onWindowResize,!1),t.addEventListener("scroll",e.onWindowScroll,!1),e.appendDefaultCss(),e.pub.install(),e.initialized=!0;e.readyQueue.length;){var n=e.readyQueue.shift();n()}},e.pub.install=function(n){var s=!0;try{e.installBySelector("[data-jscolor]",n)}catch(i){s=!1,console.warn(i)}if(e.pub.lookupClass)try{e.installBySelector("input."+e.pub.lookupClass+", button."+e.pub.lookupClass,n)}catch{}return s},e.pub.ready=function(n){return typeof n!="function"?(console.warn("Passed value is not a function"),!1):(e.initialized?n():e.readyQueue.push(n),!0)},e.pub.trigger=function(n){var s=function(){e.triggerGlobal(n)};e.initialized?s():e.pub.ready(s)},e.pub.hide=function(){e.picker&&e.picker.owner&&e.picker.owner.hide()},e.pub.chessboard=function(n){n||(n="rgba(0,0,0,0)");var s=e.genColorPreviewCanvas(n);return s.canvas.toDataURL()},e.pub.background=function(n){var s=[];s.push(e.genColorPreviewGradient(n));var i=e.genColorPreviewCanvas();return s.push(["url('"+i.canvas.toDataURL()+"')","left top","repeat"].join(" ")),s.join(", ")},e.pub.options={},e.pub.lookupClass="jscolor",e.pub.installByClassName=function(){return console.error('jscolor.installByClassName() is DEPRECATED. Use data-jscolor="" attribute instead of a class name.'+e.docsRef),!1},e.register(),e.pub}();return typeof t.jscolor>"u"&&(t.jscolor=t.JSColor=o),o})})(Rn);var $o=Rn.exports;const Po=Bo($o);function Ao(r){const{yarnPalette:t,yarnChart:o}=v;if(t.length==1){alert("you need some color in your life");return}const e=t.filter((s,i)=>i!=r),n=o.pixels.map(s=>s==r?0:s>r?s-1:s);b({yarnPalette:e,yarnChart:new U(v.yarnChart.width,v.yarnChart.height,n)})}function So(r,t){const o=r.target;if(!o.closest(".delete-color-button")){if(!o.jscolor){const e=new Po(o,{preset:"dark large",format:"hexa",value:v.yarnPalette[t],onInput:()=>{const n=[...v.yarnPalette];n[t]=e.toRGBAString(),b({yarnPalette:n})},previewElement:null})}o.jscolor.show()}}function Ro(){let r=[...v.yarnPalette];r.push(yr()),b({yarnPalette:r})}function To(){const{cellHeight:r,chartPan:t,chart:o,bbox:e,yarnPalette:n,yarnExpanded:s}=v,i=Math.round(r*o.height),a=t.y+Math.round(e.yMin*r);return O` <div
    class="yarn-panel ${s?"expanded":"collapsed"}">
    <div
      class="yarn-row-assignments"
      style="transform: translate(0px, ${-a}px);
      height: ${i}px;
      gap: ${r<10?0:1}px;">
      ${No()}
    </div>

    <div class="manage-yarns">
      <div class="yarn-btns">
        <div @click=${()=>b({yarnExpanded:!s})}>
          <i
            class="fa-solid ${s?"fa-angles-left":"fa-angles-right"}"></i>
        </div>
        <div @click=${Ro}>
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <div class="available-yarns">
        ${n.map((l,c)=>O`<div
              class="edit-yarn yarn-cell"
              style="--color: ${l};"
              @click=${d=>So(d,c)}>
              <i class="fa-solid fa-pen edit-yarn-icon"></i>
              <div class="delete-yarn">
                <button @click=${()=>Ao(c)}>
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
              </div>
            </div>`)}
      </div>
    </div>
  </div>`}function No(){let{yarnChart:r,yarnPalette:t,scale:o,cellAspect:e}=v;if(!r)return;let n=o*e,s=r.make2d();const i=[];for(let a=0;a<r.height;a++)i.push(O`<div
      data-yarnrow=${a}
      class="yarn-row"
      style="gap: ${n<10?0:1}px">
      ${t.map((l,c)=>O`<div
            data-yarnindex=${c}
            class="yarn-cell ${s[a].includes(c+1)?"active":"inactive"}"
            style="--color: ${l}"></div>`)}
    </div>`);return i}function _o(){return O` <div class="modal">
    <h2>Examples</h2>
    <div class="modal-content">
      ${Object.entries(v.exampleLibrary).map(([r,t])=>O`<div class="library-item">
            <span>${r.split("/").at(-1).split(".")[0]}</span>
            <button
              class="btn solid"
              @click=${()=>_i(r)}>
              <i class="fa-solid fa-upload"></i>
            </button>
          </div>`)}
    </div>
  </div>`}function Tn(r,t){const o=document.createElement("a");o.setAttribute("href",r),o.setAttribute("download",t),document.body.appendChild(o),o.click(),o.remove()}function Fo({cellAspect:r=7/11,yarnPalette:t=["#ebe9bbff"],boundaries:o=[],regions:e=[],blocks:n=[],paths:s=[],annotations:i=!0,simLive:a=!0}){const l="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({annotations:i,simLive:a,cellAspect:r,yarnPalette:t,boundaries:o,regions:e.map(({pos:c,joinMode:d,shaping:u,yarnBlock:h,stitchBlock:p})=>({pos:c,joinMode:d,shaping:u,yarnBlock:h.toJSON(),stitchBlock:p.toJSON()})),paths:s.map(({pts:c,offset:d,tileMode:u,yarnBlock:h,stitchBlock:p})=>({pts:c,offset:d,tileMode:u,yarnBlock:h.toJSON(),stitchBlock:p.toJSON()})),blocks:n.map(({pos:c,yarnBlock:d,stitchBlock:u})=>({pos:c,yarnBlock:d.toJSON(),stitchBlock:u.toJSON()}))}));Tn(l,"workspace.json")}const Io=".-,!#$%^&*()_+{}[]qwertyuiopasdfghjkl";function Xo({machineChart:r,yarnSequence:t}){const{passes:o,yarns:e}=Cn(r,t),s=`FILE FORMAT : DAK
YARNS
`+e.map(i=>new Array(r.width).fill(i).join("")).toReversed().join(`
`)+`
YARN PALETTE
STITCH SYMBOLS
`+o.toReversed().map(i=>i.map(a=>Io[a]).join("")).join(`
`)+`
END`;Tn("data:text/plain;charset=utf-8,"+encodeURIComponent(s),"pattern.txt")}function zo({passSchedule:r,timeNeedle:t}){const o=document.createElement("canvas");o.width=r[0].length,o.height=r.length,o.getContext("2d").putImageData(t,0,0),o.toBlob(n=>{const s=document.createElement("a");s.href=URL.createObjectURL(n),s.download="pattern.bmp",s.click()},"image/bmp")}function Oo(){return O` <div class="modal">
    <h2>Download</h2>
    <div class="modal-content">
      <button class="btn solid" @click=${()=>Fo(v)}>
        Workspace JSON
      </button>
      <button class="btn solid" @click=${()=>Xo(v)}>
        Kniterate TXT
      </button>
      <button
        class="btn solid"
        @click=${()=>zo(v)}>
        Time Needle BMP
      </button>
    </div>
  </div>`}function Ho(){return O` <div class="modal">
    <h2>Upload</h2>
    <div class="modal-content">
      <button class="btn solid" @click=${()=>Ni()}>
        Workspace JSON
      </button>
    </div>
  </div>`}function Vo(){return O` <div id="settings-modal" class="modal">
    <h2>Settings</h2>

    <div class="modal-content">
      <label class="form-control toggle">
        <input
          type="checkbox"
          ?checked=${v.reverseScroll}
          @change=${r=>b({reverseScroll:r.target.checked})} />
        Invert Scroll
      </label>
      <label class="form-control">
        K yarn
        <input
          class="input"
          type="number"
          min="0.01"
          max="0.2"
          step="0.01"
          .value=${String(v.kYarn)}
          @change=${r=>b({kYarn:Number(r.target.value)})} />
      </label>
      <button
        class="btn solid"
        style="align-self: center;"
        @click=${()=>window.open("https://github.com/machineagency/blended-primitives")}>
        <i class="fa-brands fa-github"></i>
      </button>
    </div>
  </div>`}function Nn(){return O`
    ${Xi()} ${ie(v.showDownload,Oo)}
    ${ie(v.showUpload,Ho)}
    ${ie(v.showExampleLibrary,_o)}
    ${ie(v.showSettings,Vo)}
    <div id="site" @pointerdown=${xn}>
      <div id="chart-pane">${To()} ${xo()}</div>
      <div id="view-pane">
        ${ie(v.showTimeNeedleView,Eo,Hi)}
      </div>
    </div>
  `}const Yo="test";function _n(){cn(Nn(),document.body),window.requestAnimationFrame(_n)}async function Wo(){const r=await v.exampleLibrary[`../examples/${Yo}.json`]();bt(r),_n(),On(["#chart-pane","#view-pane"],{sizes:[60,40],minSize:100,gutterSize:8}),window.addEventListener("keydown",Ai),window.addEventListener("keyup",Si),Be.requestRender=()=>cn(Nn(),document.body),Be.register([Or(),xr(),Mr(),Lr(),Hr(),gr()]),En(),setTimeout(()=>yt())}window.onload=Wo;window.onresize=En;
