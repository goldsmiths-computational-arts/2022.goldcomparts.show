import{S as be,i as we,s as Ee,F as Se,l as _,u as M,a as I,m as d,p,v as G,h as u,c as $,q as n,G as H,H as Y,b as L,I as c,J as K,n as fe,K as Ie,L as O,e as he,M as ke,N as $e,O as Ae,P as je,Q as De,f as X,t as Z,x as Me,y as Ge,z as He,C as Le}from"../chunks/index-be646fca.js";import{p as Ve}from"../chunks/stores-5626e28b.js";import{b as x}from"../chunks/paths-86ffdd15.js";function ue(o,e,s){const a=o.slice();return a[7]=e[s],a}function _e(o,e,s){const a=o.slice();return a[7]=e[s],a}function de(o){let e,s,a,t;return{c(){e=_("img"),this.h()},l(l){e=d(l,"IMG",{id:!0,src:!0,alt:!0,class:!0}),this.h()},h(){n(e,"id","hamburger-menu"),O(e.src,s="/img/"+(o[0]?"close":"hamburger")+".webp")||n(e,"src",s),n(e,"alt","menu icon"),n(e,"class","svelte-pa32fr"),H(e,"is-active",o[0])},m(l,r){L(l,e,r),a||(t=K(e,"click",o[4]),a=!0)},p(l,r){r&1&&!O(e.src,s="/img/"+(l[0]?"close":"hamburger")+".webp")&&n(e,"src",s),r&1&&H(e,"is-active",l[0])},d(l){l&&u(e),a=!1,t()}}}function me(o){let e,s=o[3],a=[];for(let t=0;t<s.length;t+=1)a[t]=ve(_e(o,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=he()},l(t){for(let l=0;l<a.length;l+=1)a[l].l(t);e=he()},m(t,l){for(let r=0;r<a.length;r+=1)a[r].m(t,l);L(t,e,l)},p(t,l){if(l&44){s=t[3];let r;for(r=0;r<s.length;r+=1){const i=_e(t,s,r);a[r]?a[r].p(i,l):(a[r]=ve(i),a[r].c(),a[r].m(e.parentNode,e))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}},d(t){ke(a,t),t&&u(e)}}}function ve(o){let e,s,a=o[7].label+"",t,l,r,i;return{c(){e=_("li"),s=_("a"),t=M(a),l=I(),this.h()},l(h){e=d(h,"LI",{class:!0});var f=p(e);s=d(f,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=p(s);t=G(m,a),m.forEach(u),l=$(f),f.forEach(u),this.h()},h(){n(s,"sveltekit:prefetch",""),n(s,"href",x+o[7].href),n(s,"class","svelte-pa32fr"),n(e,"class","svelte-pa32fr"),H(e,"active",o[2].url.pathname===o[7].href)},m(h,f){L(h,e,f),c(e,s),c(s,t),c(e,l),r||(i=K(e,"click",o[5]),r=!0)},p(h,f){f&12&&H(e,"active",h[2].url.pathname===h[7].href)},d(h){h&&u(e),r=!1,i()}}}function pe(o){let e,s,a=o[3],t=[];for(let l=0;l<a.length;l+=1)t[l]=ge(ue(o,a,l));return{c(){e=_("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=d(l,"DIV",{id:!0,class:!0});var r=p(e);for(let i=0;i<t.length;i+=1)t[i].l(r);r.forEach(u),this.h()},h(){n(e,"id","overlay"),n(e,"class",s=Y(o[0]?"menu-expanded":"menu-minimized")+" svelte-pa32fr")},m(l,r){L(l,e,r);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(l,r){if(r&44){a=l[3];let i;for(i=0;i<a.length;i+=1){const h=ue(l,a,i);t[i]?t[i].p(h,r):(t[i]=ge(h),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}r&1&&s!==(s=Y(l[0]?"menu-expanded":"menu-minimized")+" svelte-pa32fr")&&n(e,"class",s)},d(l){l&&u(e),ke(t,l)}}}function ge(o){let e,s,a=o[7].label+"",t,l,r,i;return{c(){e=_("li"),s=_("a"),t=M(a),l=I(),this.h()},l(h){e=d(h,"LI",{class:!0});var f=p(e);s=d(f,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=p(s);t=G(m,a),m.forEach(u),l=$(f),f.forEach(u),this.h()},h(){n(s,"sveltekit:prefetch",""),n(s,"href",x+o[7].href),n(s,"class","svelte-pa32fr"),n(e,"class","svelte-pa32fr"),H(e,"active",o[2].url.pathname===o[7].href)},m(h,f){L(h,e,f),c(e,s),c(s,t),c(e,l),r||(i=K(e,"click",o[5]),r=!0)},p(h,f){f&12&&H(e,"active",h[2].url.pathname===h[7].href)},d(h){h&&u(e),r=!1,i()}}}function ye(o){let e,s,a,t,l,r,i,h,f,m,A,j,B;Se(o[6]);let w=o[1]<600&&de(o),v=o[1]>600&&me(o),b=o[0]&&pe(o);return{c(){e=_("header"),s=_("nav"),a=_("div"),t=_("ul"),l=_("li"),r=_("a"),i=M("(SUB)SYSTEMS"),h=I(),w&&w.c(),f=I(),v&&v.c(),m=I(),b&&b.c(),this.h()},l(g){e=d(g,"HEADER",{class:!0});var k=p(e);s=d(k,"NAV",{"aria-label":!0,class:!0});var C=p(s);a=d(C,"DIV",{class:!0});var S=p(a);t=d(S,"UL",{class:!0});var E=p(t);l=d(E,"LI",{id:!0,class:!0});var D=p(l);r=d(D,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var q=p(r);i=G(q,"(SUB)SYSTEMS"),q.forEach(u),D.forEach(u),h=$(E),w&&w.l(E),f=$(E),v&&v.l(E),m=$(E),b&&b.l(E),E.forEach(u),S.forEach(u),C.forEach(u),k.forEach(u),this.h()},h(){n(r,"sveltekit:prefetch",""),n(r,"href",x+"/"),n(r,"class","svelte-pa32fr"),n(l,"id","logo"),n(l,"class","svelte-pa32fr"),H(l,"active",o[2].url.pathname==="/home"),n(t,"class","svelte-pa32fr"),n(a,"class","container"),n(s,"aria-label","main navigation"),n(s,"class",A=Y(o[0]?"menu-expanded":"")+" svelte-pa32fr"),n(e,"class","svelte-pa32fr")},m(g,k){L(g,e,k),c(e,s),c(s,a),c(a,t),c(t,l),c(l,r),c(r,i),c(t,h),w&&w.m(t,null),c(t,f),v&&v.m(t,null),c(t,m),b&&b.m(t,null),j||(B=K(window,"resize",o[6]),j=!0)},p(g,[k]){k&4&&H(l,"active",g[2].url.pathname==="/home"),g[1]<600?w?w.p(g,k):(w=de(g),w.c(),w.m(t,f)):w&&(w.d(1),w=null),g[1]>600?v?v.p(g,k):(v=me(g),v.c(),v.m(t,m)):v&&(v.d(1),v=null),g[0]?b?b.p(g,k):(b=pe(g),b.c(),b.m(t,null)):b&&(b.d(1),b=null),k&1&&A!==(A=Y(g[0]?"menu-expanded":"")+" svelte-pa32fr")&&n(s,"class",A)},i:fe,o:fe,d(g){g&&u(e),w&&w.d(),v&&v.d(),b&&b.d(),j=!1,B()}}}function Be(o,e,s){let a;Ie(o,Ve,m=>s(2,a=m));let t=!1,l,r=[{label:"Floor Plan",href:"/floor-plan"},{label:"Schedule",href:"/schedule"},{label:"Artworks",href:"/artworks"},{label:"About",href:"/about"}];function i(){s(0,t=!t)}function h(){s(0,t=!1)}function f(){s(1,l=window.innerWidth)}return[t,l,a,r,i,h,f]}class Ce extends be{constructor(e){super(),we(this,e,Be,ye,Ee,{})}}function Ne(o){let e,s;return e=new Ce({}),{c(){Me(e.$$.fragment)},l(a){Ge(e.$$.fragment,a)},m(a,t){He(e,a,t),s=!0},i(a){s||(X(e.$$.fragment,a),s=!0)},o(a){Z(e.$$.fragment,a),s=!1},d(a){Le(e,a)}}}function ze(o){let e,s,a,t,l,r,i,h,f,m,A,j,B,w,v,b,g,k,C,S,E,D,q,Q,N,V,ee,W,z,y,te;return{c(){e=_("footer"),s=_("div"),a=_("div"),t=_("h5"),l=M("St. James Hatcham Building "),r=_("br"),i=M(`
				25 St James's Goldsmiths, University of London `),h=_("br"),f=M(`
				New Cross London SE14 6AD`),m=I(),A=_("div"),j=_("h5"),B=M(`1st - 4th
					September 2022`),w=I(),v=_("div"),b=_("div"),g=_("h5"),k=M("Goldsmiths Computational Arts"),C=I(),S=_("div"),E=_("a"),D=_("img"),Q=I(),N=_("a"),V=_("img"),W=I(),z=_("a"),y=_("img"),this.h()},l(F){e=d(F,"FOOTER",{class:!0});var J=p(e);s=d(J,"DIV",{class:!0});var T=p(s);a=d(T,"DIV",{class:!0});var le=p(a);t=d(le,"H5",{class:!0});var U=p(t);l=G(U,"St. James Hatcham Building "),r=d(U,"BR",{}),i=G(U,`
				25 St James's Goldsmiths, University of London `),h=d(U,"BR",{}),f=G(U,`
				New Cross London SE14 6AD`),U.forEach(u),le.forEach(u),m=$(T),A=d(T,"DIV",{class:!0});var se=p(A);j=d(se,"H5",{class:!0});var ae=p(j);B=G(ae,`1st - 4th
					September 2022`),ae.forEach(u),se.forEach(u),T.forEach(u),w=$(J),v=d(J,"DIV",{class:!0});var P=p(v);b=d(P,"DIV",{class:!0});var re=p(b);g=d(re,"H5",{class:!0});var ie=p(g);k=G(ie,"Goldsmiths Computational Arts"),ie.forEach(u),re.forEach(u),C=$(P),S=d(P,"DIV",{class:!0});var R=p(S);E=d(R,"A",{href:!0});var ne=p(E);D=d(ne,"IMG",{src:!0,class:!0,alt:!0}),ne.forEach(u),Q=$(R),N=d(R,"A",{href:!0});var oe=p(N);V=d(oe,"IMG",{src:!0,class:!0,alt:!0}),oe.forEach(u),W=$(R),z=d(R,"A",{href:!0});var ce=p(z);y=d(ce,"IMG",{src:!0,class:!0,alt:!0}),ce.forEach(u),R.forEach(u),P.forEach(u),J.forEach(u),this.h()},h(){n(t,"class","svelte-1etrjhw"),n(a,"class","address_wrap"),n(j,"class","svelte-1etrjhw"),n(A,"class","date_wrap"),n(s,"class","content_container svelte-1etrjhw"),n(g,"class","svelte-1etrjhw"),n(b,"class","uni_wrap svelte-1etrjhw"),O(D.src,q="/svg/icon-20-20-web-blackbg.svg")||n(D,"src",q),n(D,"class","website svelte-1etrjhw"),n(D,"alt","website icon"),n(E,"href","https://www.gold.ac.uk/pg/mfa-computational-arts/"),O(V.src,ee="/svg/icon-20-20-instagram-blackbg.svg")||n(V,"src",ee),n(V,"class","instagram svelte-1etrjhw"),n(V,"alt","instagram icon"),n(N,"href","https://www.instagram.com/goldsmithscomparts/"),O(y.src,te="/svg/icon-20-20-vimeo-blackbg.svg")||n(y,"src",te),n(y,"class","vimeo svelte-1etrjhw"),n(y,"alt","vimeo icon"),n(z,"href","https://vimeo.com/showcase/9464762"),n(S,"class","icons_wrap svelte-1etrjhw"),n(v,"class","social_container svelte-1etrjhw"),n(e,"class","svelte-1etrjhw")},m(F,J){L(F,e,J),c(e,s),c(s,a),c(a,t),c(t,l),c(t,r),c(t,i),c(t,h),c(t,f),c(s,m),c(s,A),c(A,j),c(j,B),c(e,w),c(e,v),c(v,b),c(b,g),c(g,k),c(v,C),c(v,S),c(S,E),c(E,D),c(S,Q),c(S,N),c(N,V),c(S,W),c(S,z),c(z,y)},d(F){F&&u(e)}}}function Je(o){let e,s,a,t,l=Ne();const r=o[1].default,i=$e(r,o,o[0],null);let h=ze();return{c(){e=_("main"),l&&l.c(),s=I(),i&&i.c(),a=I(),h&&h.c(),this.h()},l(f){e=d(f,"MAIN",{class:!0});var m=p(e);l&&l.l(m),s=$(m),i&&i.l(m),a=$(m),h&&h.l(m),m.forEach(u),this.h()},h(){n(e,"class","svelte-1etrjhw")},m(f,m){L(f,e,m),l&&l.m(e,null),c(e,s),i&&i.m(e,null),c(e,a),h&&h.m(e,null),t=!0},p(f,[m]){i&&i.p&&(!t||m&1)&&Ae(i,r,f,f[0],t?De(r,f[0],m,null):je(f[0]),null)},i(f){t||(X(l),X(i,f),t=!0)},o(f){Z(l),Z(i,f),t=!1},d(f){f&&u(e),l&&l.d(),i&&i.d(f),h&&h.d()}}}function Ue(o,e,s){let{$$slots:a={},$$scope:t}=e;return o.$$set=l=>{"$$scope"in l&&s(0,t=l.$$scope)},[t,a]}class Oe extends be{constructor(e){super(),we(this,e,Ue,Je,Ee,{})}}export{Oe as default};