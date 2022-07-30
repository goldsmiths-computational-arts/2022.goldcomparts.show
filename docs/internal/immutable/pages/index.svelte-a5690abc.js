import{R as Ae,T as qe,S as je,i as De,s as Ie,l as p,M as ie,a as O,r as B,m,n as _,N as ce,h as u,c as N,u as C,p as r,q as Le,b as $,J as n,U as z,v as fe,E as de,V as Ke,Q as Ge,W as We,X as $e,o as Fe,w as Ee,K as Je,x as we,O as Qe,y as ke,Y as ue,f as Se,t as Te,B as Me,Z as He}from"../chunks/index-89970c11.js";import{w as Xe,_ as Ye}from"../chunks/preload-helper-35041ebb.js";import"../chunks/Header.svelte_svelte_type_style_lang-ede07635.js";import{H as Ze}from"../chunks/Header-d3950f20.js";import{b as Ue}from"../chunks/paths-86ffdd15.js";function Ve(e){return Object.prototype.toString.call(e)==="[object Date]"}function xe(e,t,s,a){if(typeof s=="number"||Ve(s)){const o=a-s,i=(s-t)/(e.dt||1/60),l=e.opts.stiffness*o,c=e.opts.damping*i,v=(l-c)*e.inv_mass,d=(i+v)*e.dt;return Math.abs(d)<e.opts.precision&&Math.abs(o)<e.opts.precision?a:(e.settled=!1,Ve(s)?new Date(s.getTime()+d):s+d)}else{if(Array.isArray(s))return s.map((o,i)=>xe(e,t[i],s[i],a[i]));if(typeof s=="object"){const o={};for(const i in s)o[i]=xe(e,t[i],s[i],a[i]);return o}else throw new Error(`Cannot spring ${typeof s} values`)}}function ze(e,t={}){const s=Xe(e),{stiffness:a=.15,damping:o=.8,precision:i=.01}=t;let l,c,v,d=e,w=e,h=1,b=0,M=!1;function x(y,E={}){w=y;const S=v={};if(e==null||E.hard||g.stiffness>=1&&g.damping>=1)return M=!0,l=Ae(),d=y,s.set(e=w),Promise.resolve();if(E.soft){const j=E.soft===!0?.5:+E.soft;b=1/(j*60),h=0}return c||(l=Ae(),M=!1,c=qe(j=>{if(M)return M=!1,c=null,!1;h=Math.min(h+b,1);const P={inv_mass:h,opts:g,settled:!0,dt:(j-l)*60/1e3},T=xe(P,d,e,w);return l=j,d=e,s.set(e=T),P.settled&&(c=null),!P.settled})),new Promise(j=>{c.promise.then(()=>{S===v&&j()})})}const g={set:x,update:(y,E)=>x(y(w,e),E),subscribe:s.subscribe,stiffness:a,damping:o,precision:i};return g}function et(e){let t,s,a,o,i,l,c,v,d=Math.floor(e[1]+1)+"",w,h,b,M=Math.floor(e[1])+"",x,g,y,E,S,j,P;return{c(){t=p("div"),s=p("button"),a=ie("svg"),o=ie("path"),i=O(),l=p("div"),c=p("div"),v=p("strong"),w=B(d),h=O(),b=p("strong"),x=B(M),g=O(),y=p("button"),E=ie("svg"),S=ie("path"),this.h()},l(T){t=m(T,"DIV",{class:!0});var k=_(t);s=m(k,"BUTTON",{"aria-label":!0,class:!0});var H=_(s);a=ce(H,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var Q=_(a);o=ce(Q,"path",{d:!0,class:!0}),_(o).forEach(u),Q.forEach(u),H.forEach(u),i=N(k),l=m(k,"DIV",{class:!0});var U=_(l);c=m(U,"DIV",{class:!0,style:!0});var V=_(c);v=m(V,"STRONG",{class:!0,"aria-hidden":!0});var A=_(v);w=C(A,d),A.forEach(u),h=N(V),b=m(V,"STRONG",{class:!0});var X=_(b);x=C(X,M),X.forEach(u),V.forEach(u),U.forEach(u),g=N(k),y=m(k,"BUTTON",{"aria-label":!0,class:!0});var D=_(y);E=ce(D,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var Y=_(E);S=ce(Y,"path",{d:!0,class:!0}),_(S).forEach(u),Y.forEach(u),D.forEach(u),k.forEach(u),this.h()},h(){r(o,"d","M0,0.5 L1,0.5"),r(o,"class","svelte-sx9eo4"),r(a,"aria-hidden","true"),r(a,"viewBox","0 0 1 1"),r(a,"class","svelte-sx9eo4"),r(s,"aria-label","Decrease the counter by one"),r(s,"class","svelte-sx9eo4"),r(v,"class","hidden svelte-sx9eo4"),r(v,"aria-hidden","true"),r(b,"class","svelte-sx9eo4"),r(c,"class","counter-digits svelte-sx9eo4"),Le(c,"transform","translate(0, "+100*e[2]+"%)"),r(l,"class","counter-viewport svelte-sx9eo4"),r(S,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),r(S,"class","svelte-sx9eo4"),r(E,"aria-hidden","true"),r(E,"viewBox","0 0 1 1"),r(E,"class","svelte-sx9eo4"),r(y,"aria-label","Increase the counter by one"),r(y,"class","svelte-sx9eo4"),r(t,"class","counter svelte-sx9eo4")},m(T,k){$(T,t,k),n(t,s),n(s,a),n(a,o),n(t,i),n(t,l),n(l,c),n(c,v),n(v,w),n(c,h),n(c,b),n(b,x),n(t,g),n(t,y),n(y,E),n(E,S),j||(P=[z(s,"click",e[4]),z(y,"click",e[5])],j=!0)},p(T,[k]){k&2&&d!==(d=Math.floor(T[1]+1)+"")&&fe(w,d),k&2&&M!==(M=Math.floor(T[1])+"")&&fe(x,M),k&4&&Le(c,"transform","translate(0, "+100*T[2]+"%)")},i:de,o:de,d(T){T&&u(t),j=!1,Ke(P)}}}function tt(e,t){return(e%t+t)%t}function st(e,t,s){let a,o,i=0;const l=ze();Ge(e,l,d=>s(1,o=d));const c=()=>s(0,i-=1),v=()=>s(0,i+=1);return e.$$.update=()=>{e.$$.dirty&1&&l.set(i),e.$$.dirty&2&&s(2,a=tt(o,1))},[i,o,a,l,c,v]}class nt extends je{constructor(t){super(),De(this,t,st,et,Ie,{})}}function rt(e){let t,s,a;return{c(){t=p("div"),this.h()},l(o){t=m(o,"DIV",{style:!0,class:!0}),_(t).forEach(u),this.h()},h(){r(t,"style",e[0]),r(t,"class","m-0")},m(o,i){$(o,t,i),s||(a=We(e[1].call(null,t)),s=!0)},p(o,[i]){i&1&&r(t,"style",o[0])},i:de,o:de,d(o){o&&u(t),s=!1,a()}}}function at(e,t){return t.forEach(([s,a])=>e[s]=a),e}function lt(e,t,s){let{target:a=void 0}=t,{sketch:o=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:l=!1}=t,c;const v=$e(),d={ref(){v("ref",a)},instance(){v("instance",c)}};function w(h){return s(2,a=h),{destroy(){s(2,a=void 0)}}}return Fe(async()=>{const h=await Ye(()=>import("../chunks/p5.min-6dfa9e09.js").then(g=>g.p),[]),{default:b}=h,x=Object.entries(h).filter(([g,y])=>y instanceof Function&&g[0]!=="_"&&g!=="default");l&&console.log("available p5 native classes",x),c=new b(g=>(g=at(g,x),l&&console.log("p5 instance",g),window._p5Instance=g,o(g)),a),d.ref(),d.instance()}),e.$$set=h=>{"target"in h&&s(2,a=h.target),"sketch"in h&&s(3,o=h.sketch),"parentDivStyle"in h&&s(0,i=h.parentDivStyle),"debug"in h&&s(4,l=h.debug)},[i,w,a,o,l]}class ot extends je{constructor(t){super(),De(this,t,lt,rt,Ie,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function it(e){let t,s,a,o,i,l,c,v,d,w,h,b,M,x,g,y,E,S,j,P,T,k,H,Q,U,V,A,X,D,Y,ne,he,K,pe,L,me,re,ae,q,G,ve,W,_e,ge,Z,be,Oe;return a=new Ze({}),H=new nt({}),U=new ot({props:{sketch:ct}}),{c(){t=p("meta"),s=O(),Ee(a.$$.fragment),o=O(),i=p("main"),l=p("section"),c=p("h1"),v=p("span"),d=p("picture"),w=p("source"),h=O(),b=p("img"),x=B(`

			to your new`),g=p("br"),y=B("SvelteKit app"),E=O(),S=p("h2"),j=B("try editing "),P=p("strong"),T=B("src/routes/index.svelte"),k=O(),Ee(H.$$.fragment),Q=O(),Ee(U.$$.fragment),V=O(),A=p("label"),X=B(`Width
			`),D=p("input"),Y=O(),ne=B(F),he=O(),K=p("label"),pe=B(`Height
			`),L=p("input"),me=O(),re=B(J),ae=O(),q=p("footer"),G=p("p"),ve=B("visit "),W=p("a"),_e=B("kit.svelte.dev"),ge=B(" to learn SvelteKit"),this.h()},l(f){const I=Je('[data-svelte="svelte-t32ptj"]',document.head);t=m(I,"META",{name:!0,content:!0}),I.forEach(u),s=N(f),we(a.$$.fragment,f),o=N(f),i=m(f,"MAIN",{class:!0});var Ne=_(i);l=m(Ne,"SECTION",{class:!0});var R=_(l);c=m(R,"H1",{class:!0});var ee=_(c);v=m(ee,"SPAN",{class:!0});var Be=_(v);d=m(Be,"PICTURE",{});var le=_(d);w=m(le,"SOURCE",{srcset:!0,type:!0}),h=N(le),b=m(le,"IMG",{src:!0,alt:!0,class:!0}),le.forEach(u),Be.forEach(u),x=C(ee,`

			to your new`),g=m(ee,"BR",{}),y=C(ee,"SvelteKit app"),ee.forEach(u),E=N(R),S=m(R,"H2",{});var ye=_(S);j=C(ye,"try editing "),P=m(ye,"STRONG",{});var Ce=_(P);T=C(Ce,"src/routes/index.svelte"),Ce.forEach(u),ye.forEach(u),k=N(R),we(H.$$.fragment,R),Q=N(R),we(U.$$.fragment,R),V=N(R),A=m(R,"LABEL",{});var te=_(A);X=C(te,`Width
			`),D=m(te,"INPUT",{type:!0,min:!0,max:!0,step:!0}),Y=N(te),ne=C(te,F),te.forEach(u),he=N(R),K=m(R,"LABEL",{});var se=_(K);pe=C(se,`Height
			`),L=m(se,"INPUT",{type:!0,min:!0,max:!0,step:!0}),me=N(se),re=C(se,J),se.forEach(u),R.forEach(u),Ne.forEach(u),ae=N(f),q=m(f,"FOOTER",{class:!0});var Pe=_(q);G=m(Pe,"P",{});var oe=_(G);ve=C(oe,"visit "),W=m(oe,"A",{href:!0,class:!0});var Re=_(W);_e=C(Re,"kit.svelte.dev"),Re.forEach(u),ge=C(oe," to learn SvelteKit"),oe.forEach(u),Pe.forEach(u),this.h()},h(){document.title="Home",r(t,"name","description"),r(t,"content","Svelte demo app"),r(w,"srcset",Ue+"/svelte-welcome.webp"),r(w,"type","image/webp"),Qe(b.src,M=Ue+"/svelte-welcome.png")||r(b,"src",M),r(b,"alt","Welcome"),r(b,"class","svelte-jwnn57"),r(v,"class","welcome svelte-jwnn57"),r(c,"class","svelte-jwnn57"),r(D,"type","range"),r(D,"min","100"),r(D,"max","1000"),r(D,"step","0.01"),r(L,"type","range"),r(L,"min","100"),r(L,"max","1000"),r(L,"step","0.01"),r(l,"class","svelte-jwnn57"),r(i,"class","svelte-jwnn57"),r(W,"href","https://kit.svelte.dev"),r(W,"class","svelte-jwnn57"),r(q,"class","svelte-jwnn57")},m(f,I){n(document.head,t),$(f,s,I),ke(a,f,I),$(f,o,I),$(f,i,I),n(i,l),n(l,c),n(c,v),n(v,d),n(d,w),n(d,h),n(d,b),n(c,x),n(c,g),n(c,y),n(l,E),n(l,S),n(S,j),n(S,P),n(P,T),n(l,k),ke(H,l,null),n(l,Q),ke(U,l,null),n(l,V),n(l,A),n(A,X),n(A,D),ue(D,F),n(A,Y),n(A,ne),n(l,he),n(l,K),n(K,pe),n(K,L),ue(L,J),n(K,me),n(K,re),$(f,ae,I),$(f,q,I),n(q,G),n(G,ve),n(G,W),n(W,_e),n(G,ge),Z=!0,be||(Oe=[z(D,"change",e[0]),z(D,"input",e[0]),z(L,"change",e[1]),z(L,"input",e[1])],be=!0)},p(f,[I]){I&0&&ue(D,F),(!Z||I&0)&&fe(ne,F),I&0&&ue(L,J),(!Z||I&0)&&fe(re,J)},i(f){Z||(Se(a.$$.fragment,f),Se(H.$$.fragment,f),Se(U.$$.fragment,f),Z=!0)},o(f){Te(a.$$.fragment,f),Te(H.$$.fragment,f),Te(U.$$.fragment,f),Z=!1},d(f){u(t),f&&u(s),Me(a,f),f&&u(o),f&&u(i),Me(H),Me(U),f&&u(ae),f&&u(q),be=!1,Ke(Oe)}}}const vt=!0;let F=55,J=55;const ct=e=>{e.setup=()=>{e.createCanvas(400,400)},e.draw=()=>{e.ellipse(e.width/2,e.height/2,F,J)}};function ut(e,t,s){function a(){F=He(this.value)}function o(){J=He(this.value)}return[a,o]}class _t extends je{constructor(t){super(),De(this,t,ut,it,Ie,{})}}export{_t as default,vt as prerender};
