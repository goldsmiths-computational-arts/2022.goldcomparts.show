import{S as ye,i as qe,s as ke,l as o,a as h,u as S,m as c,c as g,p as f,v as W,h as n,q as a,L as G,b as $,I as i,n as L,K as Ie}from"../../chunks/index-be646fca.js";import{p as we}from"../../chunks/stores-5626e28b.js";import{d as Ee,b as De}from"../../chunks/env-b647a99d.js";import"../../chunks/app-bc003c81.js";import{D as Ve}from"../../chunks/artworks-50413e14.js";import"../../chunks/paths-86ffdd15.js";const $e="/internal/immutable/assets/icon-20-20-web-blackbg-a3f17882.svg",be="/internal/immutable/assets/icon-20-20-vimeo-blackbg-306518c0.svg",Me="/internal/immutable/assets/icon-20-20-instagram-blackbg-2c7ed331.svg";function Ce(r){let e,s,u;return{c(){e=o("a"),s=o("img"),this.h()},l(t){e=c(t,"A",{href:!0,target:!0});var l=f(e);s=c(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(n),this.h()},h(){G(s.src,u=$e)||a(s,"src",u),a(s,"class","img--social_icons svelte-9u9qya"),a(s,"alt","website icon"),a(e,"href",r[1](r[0].website)),a(e,"target","_blank")},m(t,l){$(t,e,l),i(e,s)},p:L,d(t){t&&n(e)}}}function Ge(r){let e,s,u;return{c(){e=o("a"),s=o("img"),this.h()},l(t){e=c(t,"A",{target:!0,href:!0});var l=f(e);s=c(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(n),this.h()},h(){G(s.src,u=Me)||a(s,"src",u),a(s,"class","img--social_icons svelte-9u9qya"),a(s,"alt","instagram icon"),a(e,"target","_blank"),a(e,"href","https://www.instagram.com/"+r[0].instagram+"/")},m(t,l){$(t,e,l),i(e,s)},p:L,d(t){t&&n(e)}}}function Le(r){let e,s,u;return{c(){e=o("a"),s=o("img"),this.h()},l(t){e=c(t,"A",{href:!0,target:!0});var l=f(e);s=c(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(n),this.h()},h(){G(s.src,u=be)||a(s,"src",u),a(s,"class","img--social_icons svelte-9u9qya"),a(s,"alt","vimeo icon"),a(e,"href",r[0].vimeo),a(e,"target","_blank")},m(t,l){$(t,e,l),i(e,s)},p:L,d(t){t&&n(e)}}}function Ae(r){let e,s,u;return{c(){e=o("a"),s=o("img"),this.h()},l(t){e=c(t,"A",{href:!0,target:!0});var l=f(e);s=c(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(n),this.h()},h(){G(s.src,u=be)||a(s,"src",u),a(s,"class","img--social_icons svelte-9u9qya"),a(s,"alt","youtube icon"),a(e,"href",r[0].youtube),a(e,"target","_blank")},m(t,l){$(t,e,l),i(e,s)},p:L,d(t){t&&n(e)}}}function He(r){let e,s,u;return{c(){e=o("div"),s=o("img"),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=f(e);s=c(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(n),this.h()},h(){a(s,"class","img_responsive_2 svelte-9u9qya"),G(s.src,u="/img/artworks/img2_"+(r[0].pref_name?r[0].pref_name.toLowerCase():r[0].name.toLowerCase())+".jpg")||a(s,"src",u),a(s,"alt",r[0].img2_txt),a(e,"class","content_container svelte-9u9qya")},m(t,l){$(t,e,l),i(e,s)},p:L,d(t){t&&n(e)}}}function je(r){let e,s,u,t,l,d,M,J=r[0].name+"",p,N,U,ce=r[0].title+"",O,Q,w,P,ne=r[0].subtitle+"",T,X,A,ue=r[0].description+"",Y,Z,x,ee,E,H,C,_e,te,D,j,me=r[0].bio+"",se,ae,v,re,le,ie,oe,b=r[0].website&&Ce(r),y=r[0].instagram&&Ge(r),q=r[0].vimeo&&Le(r),k=r[0].youtube&&Ae(r),I=r[0].img2_txt&&He(r);return{c(){e=o("img"),u=h(),t=o("div"),l=o("div"),d=o("div"),M=o("h1"),p=S(J),N=h(),U=o("h2"),O=S(ce),Q=h(),w=o("div"),P=o("h2"),T=S(ne),X=h(),A=o("p"),Y=S(ue),Z=h(),x=o("hr"),ee=h(),E=o("div"),H=o("div"),C=o("img"),te=h(),D=o("div"),j=o("p"),se=S(me),ae=h(),v=o("div"),b&&b.c(),re=h(),y&&y.c(),le=h(),q&&q.c(),ie=h(),k&&k.c(),oe=h(),I&&I.c(),this.h()},l(_){e=c(_,"IMG",{class:!0,src:!0,alt:!0}),u=g(_),t=c(_,"DIV",{class:!0});var m=f(t);l=c(m,"DIV",{class:!0});var B=f(l);d=c(B,"DIV",{class:!0});var K=f(d);M=c(K,"H1",{class:!0});var fe=f(M);p=W(fe,J),fe.forEach(n),N=g(K),U=c(K,"H2",{});var ve=f(U);O=W(ve,ce),ve.forEach(n),K.forEach(n),Q=g(B),w=c(B,"DIV",{class:!0});var R=f(w);P=c(R,"H2",{});var he=f(P);T=W(he,ne),he.forEach(n),X=g(R),A=c(R,"P",{class:!0});var ge=f(A);Y=W(ge,ue),ge.forEach(n),R.forEach(n),B.forEach(n),Z=g(m),x=c(m,"HR",{}),ee=g(m),E=c(m,"DIV",{class:!0});var z=f(E);H=c(z,"DIV",{class:!0});var de=f(H);C=c(de,"IMG",{src:!0,alt:!0,class:!0}),de.forEach(n),te=g(z),D=c(z,"DIV",{class:!0});var F=f(D);j=c(F,"P",{class:!0});var pe=f(j);se=W(pe,me),pe.forEach(n),ae=g(F),v=c(F,"DIV",{id:!0,class:!0});var V=f(v);b&&b.l(V),re=g(V),y&&y.l(V),le=g(V),q&&q.l(V),ie=g(V),k&&k.l(V),V.forEach(n),F.forEach(n),z.forEach(n),oe=g(m),I&&I.l(m),m.forEach(n),this.h()},h(){a(e,"class","img_responsive svelte-9u9qya"),G(e.src,s="/img/artworks/img1_"+(r[0].pref_name?r[0].pref_name.toLowerCase():r[0].name.toLowerCase())+".jpg")||a(e,"src",s),a(e,"alt",r[0].img1_txt),a(M,"class","svelte-9u9qya"),a(d,"class","artist_wrap svelte-9u9qya"),a(A,"class","svelte-9u9qya"),a(w,"class","txt_wrap svelte-9u9qya"),a(l,"class","content_container svelte-9u9qya"),G(C.src,_e="/img/headshot/img1_"+(r[0].pref_name?r[0].pref_name.toLowerCase():r[0].name.toLowerCase())+".jpg")||a(C,"src",_e),a(C,"alt",r[0].headshot_txt),a(C,"class","svelte-9u9qya"),a(H,"class","img_art svelte-9u9qya"),a(j,"class","svelte-9u9qya"),a(v,"id","icons"),a(v,"class","svelte-9u9qya"),a(D,"class","txt_wrap svelte-9u9qya"),a(E,"class","content_container svelte-9u9qya"),a(t,"class","page-container svelte-9u9qya")},m(_,m){$(_,e,m),$(_,u,m),$(_,t,m),i(t,l),i(l,d),i(d,M),i(M,p),i(d,N),i(d,U),i(U,O),i(l,Q),i(l,w),i(w,P),i(P,T),i(w,X),i(w,A),i(A,Y),i(t,Z),i(t,x),i(t,ee),i(t,E),i(E,H),i(H,C),i(E,te),i(E,D),i(D,j),i(j,se),i(D,ae),i(D,v),b&&b.m(v,null),i(v,re),y&&y.m(v,null),i(v,le),q&&q.m(v,null),i(v,ie),k&&k.m(v,null),i(t,oe),I&&I.m(t,null)},p(_,[m]){_[0].website&&b.p(_,m),_[0].instagram&&y.p(_,m),_[0].vimeo&&q.p(_,m),_[0].youtube&&k.p(_,m),_[0].img2_txt&&I.p(_,m)},i:L,o:L,d(_){_&&n(e),_&&n(u),_&&n(t),b&&b.d(),y&&y.d(),q&&q.d(),k&&k.d(),I&&I.d()}}}function Ue(r,e,s){let u;Ie(r,we,p=>s(5,u=p));const t=Ee,l=De,d=!0;return[Ve.getArtist(u.params.slug),p=>(p.includes("http")||(p="https://"+p),p),t,l,d]}class ze extends ye{constructor(e){super(),qe(this,e,Ue,je,ke,{hydrate:2,router:3,prerender:4})}get hydrate(){return this.$$.ctx[2]}get router(){return this.$$.ctx[3]}get prerender(){return this.$$.ctx[4]}}export{ze as default};
