function v(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function q(){return Object.create(null)}function p(t){t.forEach(P)}function T(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function I(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(G(n,e))}function at(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(n.dirty.length,r.length);for(let u=0;u<o;u+=1)s[u]=n.dirty[u]|r[u];return s}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,s){if(r){const o=B(n,e,i,s);t.p(o,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){return t==null?"":t}function mt(t){return t&&T(t.destroy)?t.destroy:v}let w=!1;function J(){w=!0}function K(){w=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:Q(1,r,g=>n[e[g]].claim_order,l))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const s=[],o=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);u>=c;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);s.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<s.length&&o[c].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(o[c],f)}}function U(t,n){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){w&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function W(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function gt(){return C(" ")}function xt(){return C("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){Y(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];e[u.name]||s.push(u.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(n))}function Et(t,n,e){return Z(t,n,e,W)}function tt(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function vt(t){return tt(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n,e){t.classList[e?"add":"remove"](n)}function nt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function jt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Ct(t){y().$$.on_mount.push(t)}function Nt(t){y().$$.after_update.push(t)}function St(){const t=y();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=nt(n,e,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}function qt(t,n){return y().$$.context.set(t,n),n}function Mt(t){return y().$$.context.get(t)}const _=[],M=[],$=[],L=[],D=Promise.resolve();let A=!1;function z(){A||(A=!0,D.then(F))}function Lt(){return z(),D}function j(t){$.push(t)}const k=new Set;let b=0;function F(){const t=m;do{for(;b<_.length;){const n=_[b];b++,h(n),et(n.$$)}for(h(null),_.length=0,b=0;M.length;)M.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];k.has(e)||(k.add(e),e())}$.length=0}while(_.length);for(;L.length;)L.pop()();A=!1,k.clear(),h(t)}function et(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const E=new Set;let d;function Pt(){d={r:0,c:[],p:d}}function Tt(){d.r||p(d.c),d=d.p}function it(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ot(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],u=n[s];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[s]=u}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Dt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:u}=t.$$;r&&r.m(n,e),i||j(()=>{const c=s.map(P).filter(T);o?o.push(...c):p(c),t.$$.on_mount=[]}),u.forEach(j)}function ct(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(_.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,s,o,u=[-1]){const c=m;h(t);const l=t.$$={fragment:null,ctx:null,props:s,update:v,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};o&&o(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,g,...N)=>{const S=N.length?N[0]:g;return l.ctx&&r(l.ctx[a],l.ctx[a]=S)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](S),f&&ot(t,a)),g}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){J();const a=X(n.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),K(),F()}h(c)}class It{$destroy(){ct(this,1),this.$destroy=v}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ot as A,Dt as B,ct as C,H as D,Lt as E,j as F,At as G,ht as H,U as I,bt as J,st as K,lt as L,yt as M,at as N,dt as O,_t as P,ft as Q,Mt as R,It as S,jt as T,mt as U,St as V,gt as a,pt as b,vt as c,Tt as d,xt as e,it as f,Pt as g,V as h,Ht as i,qt as j,Nt as k,W as l,Et as m,v as n,Ct as o,X as p,$t as q,kt as r,ut as s,Bt as t,C as u,tt as v,wt as w,zt as x,Ft as y,rt as z};