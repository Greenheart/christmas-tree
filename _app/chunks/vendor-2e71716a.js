function b(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function J(){return Object.create(null)}function w(t){t.forEach(G)}function Z(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function xt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function et(t){return Object.keys(t).length===0}function bt(t,e,n,i){if(t){const c=K(t,e,n,i);return t[0](c)}}function K(t,e,n,i){return t[1]&&i?Y(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],s=Math.max(e.dirty.length,c.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|c[l];return u}return e.dirty|c}return e.dirty}function $t(t,e,n,i,c,u){if(c){const s=K(e,n,i,u);t.p(s,c)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let N=!1;function nt(){N=!0}function it(){N=!1}function rt(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,a=(c>0&&e[n[c]].claim_order<=o?c+1:rt(1,c,d=>e[n[d]].claim_order,o))-1;i[r]=n[a]+1;const _=a+1;n[_]=r,c=Math.max(_,c)}const u=[],s=[];let l=e.length-1;for(let r=n[c]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);l>=r;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<s.length;r++){for(;o<u.length&&s[r].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[r],a)}}function st(t,e){if(N){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){N&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode.removeChild(t)}function ot(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function St(){return B(" ")}function Nt(){return B("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,c=!1){at(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const r=n(l);return r===void 0?t.splice(s,1):t[s]=r,c||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const r=n(l);return r===void 0?t.splice(s,1):t[s]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function R(t,e,n,i){return Q(t,c=>c.nodeName===e,c=>{const u=[];for(let s=0;s<c.attributes.length;s++){const l=c.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>c.removeAttribute(s))},()=>i(e))}function At(t,e,n){return R(t,e,n,ot)}function Mt(t,e,n){return R(t,e,n,ut)}function dt(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Ct(t){return dt(t," ")}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e,n){t.classList[n?"add":"remove"](e)}let j;function v(t){j=t}function O(){if(!j)throw new Error("Function called outside component initialization");return j}function zt(t){O().$$.on_mount.push(t)}function Bt(t){O().$$.after_update.push(t)}function Ot(t,e){O().$$.context.set(t,e)}const $=[],W=[],A=[],U=[],_t=Promise.resolve();let T=!1;function ht(){T||(T=!0,_t.then(V))}function D(t){A.push(t)}let F=!1;const H=new Set;function V(){if(!F){F=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];v(e),mt(e.$$)}for(v(null),$.length=0;W.length;)W.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];H.has(e)||(H.add(e),e())}A.length=0}while($.length);for(;U.length;)U.pop()();T=!1,F=!1,H.clear()}}function mt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const M=new Set;let g;function Tt(){g={r:0,c:[],p:g}}function Dt(){g.r||w(g.c),g=g.p}function X(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Ht(t,e){t.d(1),e.delete(t.key)}function It(t,e,n,i,c,u,s,l,r,o,a,_){let d=t.length,m=u.length,h=d;const C={};for(;h--;)C[t[h].key]=h;const k=[],q=new Map,L=new Map;for(h=m;h--;){const f=_(c,u,h),p=n(f);let y=s.get(p);y?i&&y.p(f,e):(y=o(p,f),y.c()),q.set(p,k[h]=y),p in C&&L.set(p,Math.abs(h-C[p]))}const I=new Set,P=new Set;function z(f){X(f,1),f.m(l,a),s.set(f.key,f),a=f.first,m--}for(;d&&m;){const f=k[m-1],p=t[d-1],y=f.key,E=p.key;f===p?(a=f.first,d--,m--):q.has(E)?!s.has(y)||I.has(y)?z(f):P.has(E)?d--:L.get(y)>L.get(E)?(P.add(y),z(f)):(I.add(E),d--):(r(p,s),d--)}for(;d--;){const f=t[d];q.has(f.key)||r(f,s)}for(;m;)z(k[m-1]);return k}function Pt(t,e){const n={},i={},c={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=e[u];if(l){for(const r in s)r in l||(i[r]=1);for(const r in l)c[r]||(n[r]=l[r],c[r]=1);t[u]=l}else for(const r in s)c[r]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Gt(t){return typeof t=="object"&&t!==null?t:{}}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function pt(t,e,n,i){const{fragment:c,on_mount:u,on_destroy:s,after_update:l}=t.$$;c&&c.m(e,n),i||D(()=>{const r=u.map(G).filter(Z);s?s.push(...r):w(r),t.$$.on_mount=[]}),l.forEach(D)}function yt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&($.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,i,c,u,s,l=[-1]){const r=j;v(t);const o=t.$$={fragment:null,ctx:null,props:u,update:b,not_equal:c,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};s&&s(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return o.ctx&&c(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),a&&gt(t,_)),d}):[],o.update(),a=!0,w(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){nt();const _=ft(e.target);o.fragment&&o.fragment.l(_),_.forEach(lt)}else o.fragment&&o.fragment.c();e.intro&&X(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),it(),V()}v(r)}class Rt{$destroy(){yt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function Wt(t,e=b){let n;const i=new Set;function c(l){if(tt(t,l)&&(t=l,n)){const r=!x.length;for(const o of i)o[1](),x.push(o,t);if(r){for(let o=0;o<x.length;o+=2)x[o][0](x[o+1]);x.length=0}}}function u(l){c(l(t))}function s(l,r=b){const o=[l,r];return i.add(o),i.size===1&&(n=e(c)||b),l(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:c,update:u,subscribe:s}}export{zt as A,Y as B,Wt as C,bt as D,$t as E,kt as F,wt as G,st as H,b as I,Lt as J,jt as K,It as L,Ht as M,xt as N,w as O,W as P,ut as Q,Mt as R,Rt as S,ft as a,vt as b,At as c,lt as d,ot as e,Et as f,dt as g,qt as h,Qt as i,Jt as j,St as k,Nt as l,Kt as m,Ct as n,pt as o,Pt as p,Gt as q,Tt as r,tt as s,B as t,Ft as u,yt as v,Dt as w,X as x,Ot as y,Bt as z};
