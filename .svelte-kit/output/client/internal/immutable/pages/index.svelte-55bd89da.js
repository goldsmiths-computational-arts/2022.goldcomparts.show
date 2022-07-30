import{S as ce,i as ue,s as fe,l as m,m as _,n as b,h as p,p as l,b as te,R as Me,E as se,T as Ie,o as Be,U as me,V as Ce,F as z,a as N,r as j,G as $,c as P,u as H,q as _e,J as a,W as F,v as ne,X as De,K as Oe,w as ge,Q as Ne,x as ve,H as Pe,y as be,Y as ee,f as ye,t as Ee,B as we,Z as ke}from"../chunks/index-a8208fb1.js";import{b as Se}from"../chunks/paths-86ffdd15.js";import{_ as Re,w as Le}from"../chunks/preload-helper-57d23010.js";function Ae(e){let t,s,n;return{c(){t=m("div"),this.h()},l(r){t=_(r,"DIV",{style:!0,class:!0}),b(t).forEach(p),this.h()},h(){l(t,"style",e[0]),l(t,"class","m-0")},m(r,o){te(r,t,o),s||(n=Me(e[1].call(null,t)),s=!0)},p(r,[o]){o&1&&l(t,"style",r[0])},i:se,o:se,d(r){r&&p(t),s=!1,n()}}}function Ue(e,t){return t.forEach(([s,n])=>e[s]=n),e}function je(e,t,s){let{target:n=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:o="display: block;"}=t,{debug:i=!1}=t,c;const u=Ie(),f={ref(){u("ref",n)},instance(){u("instance",c)}};function D(d){return s(2,n=d),{destroy(){s(2,n=void 0)}}}return Be(async()=>{const d=await Re(()=>import("../chunks/p5.min-6dfa9e09.js").then(h=>h.p),[]),{default:k}=d,M=Object.entries(d).filter(([h,y])=>y instanceof Function&&h[0]!=="_"&&h!=="default");i&&console.log("available p5 native classes",M),c=new k(h=>(h=Ue(h,M),i&&console.log("p5 instance",h),window._p5Instance=h,r(h)),n),f.ref(),f.instance()}),e.$$set=d=>{"target"in d&&s(2,n=d.target),"sketch"in d&&s(3,r=d.sketch),"parentDivStyle"in d&&s(0,o=d.parentDivStyle),"debug"in d&&s(4,i=d.debug)},[o,D,n,r,i]}class He extends ce{constructor(t){super(),ue(this,t,je,Ae,fe,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function Te(e){return Object.prototype.toString.call(e)==="[object Date]"}function ie(e,t,s,n){if(typeof s=="number"||Te(s)){const r=n-s,o=(s-t)/(e.dt||1/60),i=e.opts.stiffness*r,c=e.opts.damping*o,u=(i-c)*e.inv_mass,f=(o+u)*e.dt;return Math.abs(f)<e.opts.precision&&Math.abs(r)<e.opts.precision?n:(e.settled=!1,Te(s)?new Date(s.getTime()+f):s+f)}else{if(Array.isArray(s))return s.map((r,o)=>ie(e,t[o],s[o],n[o]));if(typeof s=="object"){const r={};for(const o in s)r[o]=ie(e,t[o],s[o],n[o]);return r}else throw new Error(`Cannot spring ${typeof s} values`)}}function Ve(e,t={}){const s=Le(e),{stiffness:n=.15,damping:r=.8,precision:o=.01}=t;let i,c,u,f=e,D=e,d=1,k=0,S=!1;function M(y,g={}){D=y;const C=u={};if(e==null||g.hard||h.stiffness>=1&&h.damping>=1)return S=!0,i=me(),f=y,s.set(e=D),Promise.resolve();if(g.soft){const I=g.soft===!0?.5:+g.soft;k=1/(I*60),d=0}return c||(i=me(),S=!1,c=Ce(I=>{if(S)return S=!1,c=null,!1;d=Math.min(d+k,1);const B={inv_mass:d,opts:h,settled:!0,dt:(I-i)*60/1e3},T=ie(B,f,e,D);return i=I,f=e,s.set(e=T),B.settled&&(c=null),!B.settled})),new Promise(I=>{c.promise.then(()=>{C===u&&I()})})}const h={set:M,update:(y,g)=>M(y(D,e),g),subscribe:s.subscribe,stiffness:n,damping:r,precision:o};return h}function Ge(e){let t,s,n,r,o,i,c,u,f=Math.floor(e[1]+1)+"",D,d,k,S=Math.floor(e[1])+"",M,h,y,g,C,I,B;return{c(){t=m("div"),s=m("button"),n=z("svg"),r=z("path"),o=N(),i=m("div"),c=m("div"),u=m("strong"),D=j(f),d=N(),k=m("strong"),M=j(S),h=N(),y=m("button"),g=z("svg"),C=z("path"),this.h()},l(T){t=_(T,"DIV",{class:!0});var v=b(t);s=_(v,"BUTTON",{"aria-label":!0,class:!0});var G=b(s);n=$(G,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var R=b(n);r=$(R,"path",{d:!0,class:!0}),b(r).forEach(p),R.forEach(p),G.forEach(p),o=P(v),i=_(v,"DIV",{class:!0});var q=b(i);c=_(q,"DIV",{class:!0,style:!0});var w=b(c);u=_(w,"STRONG",{class:!0,"aria-hidden":!0});var W=b(u);D=H(W,f),W.forEach(p),d=P(w),k=_(w,"STRONG",{class:!0});var V=b(k);M=H(V,S),V.forEach(p),w.forEach(p),q.forEach(p),h=P(v),y=_(v,"BUTTON",{"aria-label":!0,class:!0});var x=b(y);g=$(x,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var L=b(g);C=$(L,"path",{d:!0,class:!0}),b(C).forEach(p),L.forEach(p),x.forEach(p),v.forEach(p),this.h()},h(){l(r,"d","M0,0.5 L1,0.5"),l(r,"class","svelte-sx9eo4"),l(n,"aria-hidden","true"),l(n,"viewBox","0 0 1 1"),l(n,"class","svelte-sx9eo4"),l(s,"aria-label","Decrease the counter by one"),l(s,"class","svelte-sx9eo4"),l(u,"class","hidden svelte-sx9eo4"),l(u,"aria-hidden","true"),l(k,"class","svelte-sx9eo4"),l(c,"class","counter-digits svelte-sx9eo4"),_e(c,"transform","translate(0, "+100*e[2]+"%)"),l(i,"class","counter-viewport svelte-sx9eo4"),l(C,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),l(C,"class","svelte-sx9eo4"),l(g,"aria-hidden","true"),l(g,"viewBox","0 0 1 1"),l(g,"class","svelte-sx9eo4"),l(y,"aria-label","Increase the counter by one"),l(y,"class","svelte-sx9eo4"),l(t,"class","counter svelte-sx9eo4")},m(T,v){te(T,t,v),a(t,s),a(s,n),a(n,r),a(t,o),a(t,i),a(i,c),a(c,u),a(u,D),a(c,d),a(c,k),a(k,M),a(t,h),a(t,y),a(y,g),a(g,C),I||(B=[F(s,"click",e[4]),F(y,"click",e[5])],I=!0)},p(T,[v]){v&2&&f!==(f=Math.floor(T[1]+1)+"")&&ne(D,f),v&2&&S!==(S=Math.floor(T[1])+"")&&ne(M,S),v&4&&_e(c,"transform","translate(0, "+100*T[2]+"%)")},i:se,o:se,d(T){T&&p(t),I=!1,De(B)}}}function qe(e,t){return(e%t+t)%t}function We(e,t,s){let n,r,o=0;const i=Ve();Oe(e,i,f=>s(1,r=f));const c=()=>s(0,o-=1),u=()=>s(0,o+=1);return e.$$.update=()=>{e.$$.dirty&1&&i.set(o),e.$$.dirty&2&&s(2,n=qe(r,1))},[o,r,n,i,c,u]}class xe extends ce{constructor(t){super(),ue(this,t,We,Ge,fe,{})}}function Ke(e){let t,s,n,r,o,i,c,u,f,D,d,k,S,M,h,y,g,C,I,B,T,v,G,R,q,w,W,V,x,L,re,A,ae,Y,K,le,de;return B=new xe({}),v=new He({props:{sketch:e[2]}}),{c(){t=m("meta"),s=N(),n=m("section"),r=m("h1"),o=m("span"),i=m("picture"),c=m("source"),u=N(),f=m("img"),d=j(`

		to your new`),k=m("br"),S=j("SvelteKit app"),M=N(),h=m("h2"),y=j("try editing "),g=m("strong"),C=j("src/routes/index.svelte"),I=N(),ge(B.$$.fragment),T=N(),ge(v.$$.fragment),G=N(),R=m("label"),q=j(`Width
		`),w=m("input"),W=N(),V=j(e[0]),x=N(),L=m("label"),re=j(`Height
		`),A=m("input"),ae=N(),Y=j(e[1]),this.h()},l(E){const U=Ne('[data-svelte="svelte-t32ptj"]',document.head);t=_(U,"META",{name:!0,content:!0}),U.forEach(p),s=P(E),n=_(E,"SECTION",{class:!0});var O=b(n);r=_(O,"H1",{class:!0});var J=b(r);o=_(J,"SPAN",{class:!0});var he=b(o);i=_(he,"PICTURE",{});var Z=b(i);c=_(Z,"SOURCE",{srcset:!0,type:!0}),u=P(Z),f=_(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(p),he.forEach(p),d=H(J,`

		to your new`),k=_(J,"BR",{}),S=H(J,"SvelteKit app"),J.forEach(p),M=P(O),h=_(O,"H2",{});var oe=b(h);y=H(oe,"try editing "),g=_(oe,"STRONG",{});var pe=b(g);C=H(pe,"src/routes/index.svelte"),pe.forEach(p),oe.forEach(p),I=P(O),ve(B.$$.fragment,O),T=P(O),ve(v.$$.fragment,O),G=P(O),R=_(O,"LABEL",{});var Q=b(R);q=H(Q,`Width
		`),w=_(Q,"INPUT",{type:!0,min:!0,max:!0,step:!0}),W=P(Q),V=H(Q,e[0]),Q.forEach(p),x=P(O),L=_(O,"LABEL",{});var X=b(L);re=H(X,`Height
		`),A=_(X,"INPUT",{type:!0,min:!0,max:!0,step:!0}),ae=P(X),Y=H(X,e[1]),X.forEach(p),O.forEach(p),this.h()},h(){document.title="Home",l(t,"name","description"),l(t,"content","Svelte demo app"),l(c,"srcset",Se+"/svelte-welcome.webp"),l(c,"type","image/webp"),Pe(f.src,D=Se+"/svelte-welcome.png")||l(f,"src",D),l(f,"alt","Welcome"),l(f,"class","svelte-1egtvge"),l(o,"class","welcome svelte-1egtvge"),l(r,"class","svelte-1egtvge"),l(w,"type","range"),l(w,"min","100"),l(w,"max","1000"),l(w,"step","0.01"),l(A,"type","range"),l(A,"min","100"),l(A,"max","1000"),l(A,"step","0.01"),l(n,"class","svelte-1egtvge")},m(E,U){a(document.head,t),te(E,s,U),te(E,n,U),a(n,r),a(r,o),a(o,i),a(i,c),a(i,u),a(i,f),a(r,d),a(r,k),a(r,S),a(n,M),a(n,h),a(h,y),a(h,g),a(g,C),a(n,I),be(B,n,null),a(n,T),be(v,n,null),a(n,G),a(n,R),a(R,q),a(R,w),ee(w,e[0]),a(R,W),a(R,V),a(n,x),a(n,L),a(L,re),a(L,A),ee(A,e[1]),a(L,ae),a(L,Y),K=!0,le||(de=[F(w,"change",e[3]),F(w,"input",e[3]),F(A,"change",e[4]),F(A,"input",e[4])],le=!0)},p(E,[U]){U&1&&ee(w,E[0]),(!K||U&1)&&ne(V,E[0]),U&2&&ee(A,E[1]),(!K||U&2)&&ne(Y,E[1])},i(E){K||(ye(B.$$.fragment,E),ye(v.$$.fragment,E),K=!0)},o(E){Ee(B.$$.fragment,E),Ee(v.$$.fragment,E),K=!1},d(E){p(t),E&&p(s),E&&p(n),we(B),we(v),le=!1,De(de)}}}const Ye=!0;function Fe(e,t,s){let n=55,r=55;const o=u=>{u.setup=()=>{u.createCanvas(400,400)},u.draw=()=>{u.ellipse(u.width/2,u.height/2,n,r)}};function i(){n=ke(this.value),s(0,n)}function c(){r=ke(this.value),s(1,r)}return[n,r,o,i,c]}class Ze extends ce{constructor(t){super(),ue(this,t,Fe,Ke,fe,{})}}export{Ze as default,Ye as prerender};
