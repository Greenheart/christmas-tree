function E(){}function pe(n,o){for(const a in o)n[a]=o[a];return n}function Z(n){return n()}function K(){return Object.create(null)}function P(n){n.forEach(Z)}function me(n){return typeof n=="function"}function he(n,o){return n!=n?o==o:n!==o||n&&typeof n=="object"||typeof n=="function"}function ve(n){return Object.keys(n).length===0}function J(n,...o){if(n==null)return E;const a=n.subscribe(...o);return a.unsubscribe?()=>a.unsubscribe():a}function pt(n){let o;return J(n,a=>o=a)(),o}function mt(n,o,a){n.$$.on_destroy.push(J(o,a))}function ht(n,o,a,f){if(n){const d=ee(n,o,a,f);return n[0](d)}}function ee(n,o,a,f){return n[1]&&f?pe(a.ctx.slice(),n[1](f(o))):a.ctx}function vt(n,o,a,f){if(n[2]&&f){const d=n[2](f(a));if(o.dirty===void 0)return d;if(typeof d=="object"){const v=[],p=Math.max(o.dirty.length,d.length);for(let m=0;m<p;m+=1)v[m]=o.dirty[m]|d[m];return v}return o.dirty|d}return o.dirty}function yt(n,o,a,f,d,v){if(d){const p=ee(o,a,f,v);n.p(p,d)}}function gt(n){if(n.ctx.length>32){const o=[],a=n.ctx.length/32;for(let f=0;f<a;f++)o[f]=-1;return o}return-1}function bt(n){const o={};for(const a in n)a[0]!=="$"&&(o[a]=n[a]);return o}let F=!1;function ye(){F=!0}function ge(){F=!1}function be(n,o,a,f){for(;n<o;){const d=n+(o-n>>1);a(d)<=f?n=d+1:o=d}return n}function we(n){if(n.hydrate_init)return;n.hydrate_init=!0;let o=n.childNodes;if(n.nodeName==="HEAD"){const _=[];for(let h=0;h<o.length;h++){const T=o[h];T.claim_order!==void 0&&_.push(T)}o=_}const a=new Int32Array(o.length+1),f=new Int32Array(o.length);a[0]=-1;let d=0;for(let _=0;_<o.length;_++){const h=o[_].claim_order,T=(d>0&&o[a[d]].claim_order<=h?d+1:be(1,d,t=>o[a[t]].claim_order,h))-1;f[_]=a[T]+1;const e=T+1;a[e]=_,d=Math.max(e,d)}const v=[],p=[];let m=o.length-1;for(let _=a[d]+1;_!=0;_=f[_-1]){for(v.push(o[_-1]);m>=_;m--)p.push(o[m]);m--}for(;m>=0;m--)p.push(o[m]);v.reverse(),p.sort((_,h)=>_.claim_order-h.claim_order);for(let _=0,h=0;_<p.length;_++){for(;h<v.length&&p[_].claim_order>=v[h].claim_order;)h++;const T=h<v.length?v[h]:null;n.insertBefore(p[_],T)}}function Ae(n,o){if(F){for(we(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;o!==n.actual_end_child?(o.claim_order!==void 0||o.parentNode!==n)&&n.insertBefore(o,n.actual_end_child):n.actual_end_child=o.nextSibling}else(o.parentNode!==n||o.nextSibling!==null)&&n.appendChild(o)}function wt(n,o,a){F&&!a?Ae(n,o):(o.parentNode!==n||o.nextSibling!=a)&&n.insertBefore(o,a||null)}function Te(n){n.parentNode.removeChild(n)}function xe(n){return document.createElement(n)}function Se(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function H(n){return document.createTextNode(n)}function At(){return H(" ")}function Tt(){return H("")}function xt(n,o,a,f){return n.addEventListener(o,a,f),()=>n.removeEventListener(o,a,f)}function ke(n,o,a){a==null?n.removeAttribute(o):n.getAttribute(o)!==a&&n.setAttribute(o,a)}function St(n,o){const a=Object.getOwnPropertyDescriptors(n.__proto__);for(const f in o)o[f]==null?n.removeAttribute(f):f==="style"?n.style.cssText=o[f]:f==="__value"?n.value=n[f]=o[f]:a[f]&&a[f].set?n[f]=o[f]:ke(n,f,o[f])}function Ie(n){return Array.from(n.childNodes)}function Ee(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function te(n,o,a,f,d=!1){Ee(n);const v=(()=>{for(let p=n.claim_info.last_index;p<n.length;p++){const m=n[p];if(o(m)){const _=a(m);return _===void 0?n.splice(p,1):n[p]=_,d||(n.claim_info.last_index=p),m}}for(let p=n.claim_info.last_index-1;p>=0;p--){const m=n[p];if(o(m)){const _=a(m);return _===void 0?n.splice(p,1):n[p]=_,d?_===void 0&&n.claim_info.last_index--:n.claim_info.last_index=p,m}}return f()})();return v.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,v}function ne(n,o,a,f){return te(n,d=>d.nodeName===o,d=>{const v=[];for(let p=0;p<d.attributes.length;p++){const m=d.attributes[p];a[m.name]||v.push(m.name)}v.forEach(p=>d.removeAttribute(p))},()=>f(o))}function kt(n,o,a){return ne(n,o,a,xe)}function It(n,o,a){return ne(n,o,a,Se)}function Le(n,o){return te(n,a=>a.nodeType===3,a=>{const f=""+o;if(a.data.startsWith(f)){if(a.data.length!==f.length)return a.splitText(f.length)}else a.data=f},()=>H(o),!0)}function Et(n){return Le(n," ")}function Lt(n,o){o=""+o,n.wholeText!==o&&(n.data=o)}function Pt(n,o,a){n.classList[a?"add":"remove"](o)}let C;function M(n){C=n}function W(){if(!C)throw new Error("Function called outside component initialization");return C}function Bt(n){W().$$.on_mount.push(n)}function Ot(n){W().$$.after_update.push(n)}function $t(n,o){W().$$.context.set(n,o)}const B=[],re=[],j=[],ae=[],Pe=Promise.resolve();let q=!1;function Be(){q||(q=!0,Pe.then(oe))}function V(n){j.push(n)}let U=!1;const Q=new Set;function oe(){if(!U){U=!0;do{for(let n=0;n<B.length;n+=1){const o=B[n];M(o),Oe(o.$$)}for(M(null),B.length=0;re.length;)re.pop()();for(let n=0;n<j.length;n+=1){const o=j[n];Q.has(o)||(Q.add(o),o())}j.length=0}while(B.length);for(;ae.length;)ae.pop()();q=!1,U=!1,Q.clear()}}function Oe(n){if(n.fragment!==null){n.update(),P(n.before_update);const o=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,o),n.after_update.forEach(V)}}const N=new Set;let k;function Ft(){k={r:0,c:[],p:k}}function Ct(){k.r||P(k.c),k=k.p}function ie(n,o){n&&n.i&&(N.delete(n),n.i(o))}function Mt(n,o,a,f){if(n&&n.o){if(N.has(n))return;N.add(n),k.c.push(()=>{N.delete(n),f&&(a&&n.d(1),f())}),n.o(o)}}function jt(n,o){n.d(1),o.delete(n.key)}function Nt(n,o,a,f,d,v,p,m,_,h,T,e){let t=n.length,r=v.length,i=t;const s={};for(;i--;)s[n[i].key]=i;const l=[],u=new Map,c=new Map;for(i=r;i--;){const y=e(d,v,i),A=a(y);let x=p.get(A);x?f&&x.p(y,o):(x=h(A,y),x.c()),u.set(A,l[i]=x),A in s&&c.set(A,Math.abs(i-s[A]))}const g=new Set,w=new Set;function S(y){ie(y,1),y.m(m,T),p.set(y.key,y),T=y.first,r--}for(;t&&r;){const y=l[r-1],A=n[t-1],x=y.key,b=A.key;y===A?(T=y.first,t--,r--):u.has(b)?!p.has(x)||g.has(x)?S(y):w.has(b)?t--:c.get(x)>c.get(b)?(w.add(x),S(y)):(g.add(b),t--):(_(A,p),t--)}for(;t--;){const y=n[t];u.has(y.key)||_(y,p)}for(;r;)S(l[r-1]);return l}function Rt(n,o){const a={},f={},d={$$scope:1};let v=n.length;for(;v--;){const p=n[v],m=o[v];if(m){for(const _ in p)_ in m||(f[_]=1);for(const _ in m)d[_]||(a[_]=m[_],d[_]=1);n[v]=m}else for(const _ in p)d[_]=1}for(const p in f)p in a||(a[p]=void 0);return a}function Gt(n){return typeof n=="object"&&n!==null?n:{}}function Ht(n){n&&n.c()}function Wt(n,o){n&&n.l(o)}function $e(n,o,a,f){const{fragment:d,on_mount:v,on_destroy:p,after_update:m}=n.$$;d&&d.m(o,a),f||V(()=>{const _=v.map(Z).filter(me);p?p.push(..._):P(_),n.$$.on_mount=[]}),m.forEach(V)}function Fe(n,o){const a=n.$$;a.fragment!==null&&(P(a.on_destroy),a.fragment&&a.fragment.d(o),a.on_destroy=a.fragment=null,a.ctx=[])}function Ce(n,o){n.$$.dirty[0]===-1&&(B.push(n),Be(),n.$$.dirty.fill(0)),n.$$.dirty[o/31|0]|=1<<o%31}function qt(n,o,a,f,d,v,p,m=[-1]){const _=C;M(n);const h=n.$$={fragment:null,ctx:null,props:v,update:E,not_equal:d,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(_?_.$$.context:[])),callbacks:K(),dirty:m,skip_bound:!1,root:o.target||_.$$.root};p&&p(h.root);let T=!1;if(h.ctx=a?a(n,o.props||{},(e,t,...r)=>{const i=r.length?r[0]:t;return h.ctx&&d(h.ctx[e],h.ctx[e]=i)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](i),T&&Ce(n,e)),t}):[],h.update(),T=!0,P(h.before_update),h.fragment=f?f(h.ctx):!1,o.target){if(o.hydrate){ye();const e=Ie(o.target);h.fragment&&h.fragment.l(e),e.forEach(Te)}else h.fragment&&h.fragment.c();o.intro&&ie(n.$$.fragment),$e(n,o.target,o.anchor,o.customElement),ge(),oe()}M(_)}class Vt{$destroy(){Fe(this,1),this.$destroy=E}$on(o,a){const f=this.$$.callbacks[o]||(this.$$.callbacks[o]=[]);return f.push(a),()=>{const d=f.indexOf(a);d!==-1&&f.splice(d,1)}}$set(o){this.$$set&&!ve(o)&&(this.$$.skip_bound=!0,this.$$set(o),this.$$.skip_bound=!1)}}const L=[];function Ut(n,o=E){let a;const f=new Set;function d(m){if(he(n,m)&&(n=m,a)){const _=!L.length;for(const h of f)h[1](),L.push(h,n);if(_){for(let h=0;h<L.length;h+=2)L[h][0](L[h+1]);L.length=0}}}function v(m){d(m(n))}function p(m,_=E){const h=[m,_];return f.add(h),f.size===1&&(a=o(d)||E),m(n),()=>{f.delete(h),f.size===0&&(a(),a=null)}}return{set:d,update:v,subscribe:p}}function R(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}var Me=typeof global=="object"&&global&&global.Object===Object&&global,je=Me,Ne=typeof self=="object"&&self&&self.Object===Object&&self,Re=je||Ne||Function("return this")(),ue=Re,Ge=function(){return ue.Date.now()},D=Ge,He=/\s/;function We(n){for(var o=n.length;o--&&He.test(n.charAt(o)););return o}var qe=/^\s+/;function Ve(n){return n&&n.slice(0,We(n)+1).replace(qe,"")}var Ue=ue.Symbol,G=Ue,se=Object.prototype,Qe=se.hasOwnProperty,De=se.toString,O=G?G.toStringTag:void 0;function Xe(n){var o=Qe.call(n,O),a=n[O];try{n[O]=void 0;var f=!0}catch{}var d=De.call(n);return f&&(o?n[O]=a:delete n[O]),d}var ze=Object.prototype,Ye=ze.toString;function Ze(n){return Ye.call(n)}var Ke="[object Null]",Je="[object Undefined]",le=G?G.toStringTag:void 0;function et(n){return n==null?n===void 0?Je:Ke:le&&le in Object(n)?Xe(n):Ze(n)}function tt(n){return n!=null&&typeof n=="object"}var nt="[object Symbol]";function rt(n){return typeof n=="symbol"||tt(n)&&et(n)==nt}var fe=0/0,at=/^[-+]0x[0-9a-f]+$/i,ot=/^0b[01]+$/i,it=/^0o[0-7]+$/i,ut=parseInt;function de(n){if(typeof n=="number")return n;if(rt(n))return fe;if(R(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=R(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=Ve(n);var a=ot.test(n);return a||it.test(n)?ut(n.slice(2),a?2:8):at.test(n)?fe:+n}var st="Expected a function",lt=Math.max,ft=Math.min;function dt(n,o,a){var f,d,v,p,m,_,h=0,T=!1,e=!1,t=!0;if(typeof n!="function")throw new TypeError(st);o=de(o)||0,R(a)&&(T=!!a.leading,e="maxWait"in a,v=e?lt(de(a.maxWait)||0,o):v,t="trailing"in a?!!a.trailing:t);function r(y){var A=f,x=d;return f=d=void 0,h=y,p=n.apply(x,A),p}function i(y){return h=y,m=setTimeout(u,o),T?r(y):p}function s(y){var A=y-_,x=y-h,b=o-A;return e?ft(b,v-x):b}function l(y){var A=y-_,x=y-h;return _===void 0||A>=o||A<0||e&&x>=v}function u(){var y=D();if(l(y))return c(y);m=setTimeout(u,s(y))}function c(y){return m=void 0,t&&f?r(y):(f=d=void 0,p)}function g(){m!==void 0&&clearTimeout(m),h=0,f=_=d=m=void 0}function w(){return m===void 0?p:c(D())}function S(){var y=D(),A=l(y);if(f=arguments,d=this,_=y,A){if(m===void 0)return i(_);if(e)return clearTimeout(m),m=setTimeout(u,o),r(_)}return m===void 0&&(m=setTimeout(u,o)),p}return S.cancel=g,S.flush=w,S}var _t="Expected a function";function Qt(n,o,a){var f=!0,d=!0;if(typeof n!="function")throw new TypeError(_t);return R(a)&&(f="leading"in a?!!a.leading:f,d="trailing"in a?!!a.trailing:d),dt(n,o,{leading:f,maxWait:o,trailing:d})}var $=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ct={};/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(n){(function(){var o=function(){this.init()};o.prototype={init:function(){var e=this||a;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator=typeof window!="undefined"&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||a;if(e=parseFloat(e),t.ctx||T(),typeof e!="undefined"&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,a.ctx.currentTime);for(var r=0;r<t._howls.length;r++)if(!t._howls[r]._webAudio)for(var i=t._howls[r]._getSoundIds(),s=0;s<i.length;s++){var l=t._howls[r]._soundById(i[s]);l&&l._node&&(l._node.volume=l._volume*e)}return t}return t._volume},mute:function(e){var t=this||a;t.ctx||T(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,a.ctx.currentTime);for(var r=0;r<t._howls.length;r++)if(!t._howls[r]._webAudio)for(var i=t._howls[r]._getSoundIds(),s=0;s<i.length;s++){var l=t._howls[r]._soundById(i[s]);l&&l._node&&(l._node.muted=e?!0:l._muted)}return t},stop:function(){for(var e=this||a,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||a,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&typeof e.ctx.close!="undefined"&&(e.ctx.close(),e.ctx=null,T()),e},codecs:function(e){return(this||a)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||a;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if(typeof Audio!="undefined")try{var t=new Audio;typeof t.oncanplaythrough=="undefined"&&(e._canPlayEvent="canplay")}catch{e.noAudio=!0}else e.noAudio=!0;try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch{}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||a,t=null;try{t=typeof Audio!="undefined"?new Audio:null}catch{return e}if(!t||typeof t.canPlayType!="function")return e;var r=t.canPlayType("audio/mpeg;").replace(/^no$/,""),i=e._navigator?e._navigator.userAgent:"",s=i.match(/OPR\/([0-6].)/g),l=s&&parseInt(s[0].split("/")[1],10)<33,u=i.indexOf("Safari")!==-1&&i.indexOf("Chrome")===-1,c=i.match(/Version\/(.*?) /),g=u&&c&&parseInt(c[1],10)<15;return e._codecs={mp3:!!(!l&&(r||t.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!r,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!g&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!g&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||a;if(!(e._audioUnlocked||!e.ctx)){e._audioUnlocked=!1,e.autoUnlock=!1,!e._mobileUnloaded&&e.ctx.sampleRate!==44100&&(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(r){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var i=new Audio;i._unlocked=!0,e._releaseHtml5Audio(i)}catch{e.noAudio=!0;break}for(var s=0;s<e._howls.length;s++)if(!e._howls[s]._webAudio)for(var l=e._howls[s]._getSoundIds(),u=0;u<l.length;u++){var c=e._howls[s]._soundById(l[u]);c&&c._node&&!c._node._unlocked&&(c._node._unlocked=!0,c._node.load())}e._autoResume();var g=e.ctx.createBufferSource();g.buffer=e._scratchBuffer,g.connect(e.ctx.destination),typeof g.start=="undefined"?g.noteOn(0):g.start(0),typeof e.ctx.resume=="function"&&e.ctx.resume(),g.onended=function(){g.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var w=0;w<e._howls.length;w++)e._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||a;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=new Audio().play();return t&&typeof Promise!="undefined"&&(t instanceof Promise||typeof t.then=="function")&&t.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var t=this||a;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(!(!e.autoSuspend||!e.ctx||typeof e.ctx.suspend=="undefined"||!a.usingWebAudio)){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio){for(var r=0;r<e._howls[t]._sounds.length;r++)if(!e._howls[t]._sounds[r]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(!!e.autoSuspend){e._suspendTimer=null,e.state="suspending";var i=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(i,i)}},3e4),e}},_autoResume:function(){var e=this;if(!(!e.ctx||typeof e.ctx.resume=="undefined"||!a.usingWebAudio))return e.state==="running"&&e.ctx.state!=="interrupted"&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):e.state==="suspended"||e.state==="running"&&e.ctx.state==="interrupted"?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):e.state==="suspending"&&(e._resumeAfterSuspend=!0),e}};var a=new o,f=function(e){var t=this;if(!e.src||e.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}t.init(e)};f.prototype={init:function(e){var t=this;return a.ctx||T(),t._autoplay=e.autoplay||!1,t._format=typeof e.format!="string"?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload=typeof e.preload=="boolean"||e.preload==="metadata"?e.preload:!0,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src=typeof e.src!="string"?e.src:[e.src],t._volume=e.volume!==void 0?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:e.xhr&&e.xhr.withCredentials?e.xhr.withCredentials:!1},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=a.usingWebAudio&&!t._html5,typeof a.ctx!="undefined"&&a.ctx&&a.autoUnlock&&a._unlockAudio(),a._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t._preload!=="none"&&t.load(),t},load:function(){var e=this,t=null;if(a.noAudio){e._emit("loaderror",null,"No audio support.");return}typeof e._src=="string"&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var i,s;if(e._format&&e._format[r])i=e._format[r];else{if(s=e._src[r],typeof s!="string"){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}i=/^data:audio\/([^;,]+);/i.exec(s),i||(i=/\.([^.]+)$/.exec(s.split("?",1)[0])),i&&(i=i[1].toLowerCase())}if(i||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),i&&a.codecs(i)){t=e._src[r];break}}if(!t){e._emit("loaderror",null,"No codec support for selected audio sources.");return}return e._src=t,e._state="loading",window.location.protocol==="https:"&&t.slice(0,5)==="http:"&&(e._html5=!0,e._webAudio=!1),new d(e),e._webAudio&&p(e),e},play:function(e,t){var r=this,i=null;if(typeof e=="number")i=e,e=null;else{if(typeof e=="string"&&r._state==="loaded"&&!r._sprite[e])return null;if(typeof e=="undefined"&&(e="__default",!r._playLock)){for(var s=0,l=0;l<r._sounds.length;l++)r._sounds[l]._paused&&!r._sounds[l]._ended&&(s++,i=r._sounds[l]._id);s===1?e=null:i=null}}var u=i?r._soundById(i):r._inactiveSound();if(!u)return null;if(i&&!e&&(e=u._sprite||"__default"),r._state!=="loaded"){u._sprite=e,u._ended=!1;var c=u._id;return r._queue.push({event:"play",action:function(){r.play(c)}}),c}if(i&&!u._paused)return t||r._loadQueue("play"),u._id;r._webAudio&&a._autoResume();var g=Math.max(0,u._seek>0?u._seek:r._sprite[e][0]/1e3),w=Math.max(0,(r._sprite[e][0]+r._sprite[e][1])/1e3-g),S=w*1e3/Math.abs(u._rate),y=r._sprite[e][0]/1e3,A=(r._sprite[e][0]+r._sprite[e][1])/1e3;u._sprite=e,u._ended=!1;var x=function(){u._paused=!1,u._seek=g,u._start=y,u._stop=A,u._loop=!!(u._loop||r._sprite[e][2])};if(g>=A){r._ended(u);return}var b=u._node;if(r._webAudio){var X=function(){r._playLock=!1,x(),r._refreshBuffer(u);var I=u._muted||r._muted?0:u._volume;b.gain.setValueAtTime(I,a.ctx.currentTime),u._playStart=a.ctx.currentTime,typeof b.bufferSource.start=="undefined"?u._loop?b.bufferSource.noteGrainOn(0,g,86400):b.bufferSource.noteGrainOn(0,g,w):u._loop?b.bufferSource.start(0,g,86400):b.bufferSource.start(0,g,w),S!==1/0&&(r._endTimers[u._id]=setTimeout(r._ended.bind(r,u),S)),t||setTimeout(function(){r._emit("play",u._id),r._loadQueue()},0)};a.state==="running"&&a.ctx.state!=="interrupted"?X():(r._playLock=!0,r.once("resume",X),r._clearTimer(u._id))}else{var z=function(){b.currentTime=g,b.muted=u._muted||r._muted||a._muted||b.muted,b.volume=u._volume*a.volume(),b.playbackRate=u._rate;try{var I=b.play();if(I&&typeof Promise!="undefined"&&(I instanceof Promise||typeof I.then=="function")?(r._playLock=!0,x(),I.then(function(){r._playLock=!1,b._unlocked=!0,t?r._loadQueue():r._emit("play",u._id)}).catch(function(){r._playLock=!1,r._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),u._ended=!0,u._paused=!0})):t||(r._playLock=!1,x(),r._emit("play",u._id)),b.playbackRate=u._rate,b.paused){r._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}e!=="__default"||u._loop?r._endTimers[u._id]=setTimeout(r._ended.bind(r,u),S):(r._endTimers[u._id]=function(){r._ended(u),b.removeEventListener("ended",r._endTimers[u._id],!1)},b.addEventListener("ended",r._endTimers[u._id],!1))}catch(ce){r._emit("playerror",u._id,ce)}};b.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(b.src=r._src,b.load());var _e=window&&window.ejecta||!b.readyState&&a._navigator.isCocoonJS;if(b.readyState>=3||_e)z();else{r._playLock=!0,r._state="loading";var Y=function(){r._state="loaded",z(),b.removeEventListener(a._canPlayEvent,Y,!1)};b.addEventListener(a._canPlayEvent,Y,!1),r._clearTimer(u._id)}}return u._id},pause:function(e){var t=this;if(t._state!=="loaded"||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var r=t._getSoundIds(e),i=0;i<r.length;i++){t._clearTimer(r[i]);var s=t._soundById(r[i]);if(s&&!s._paused&&(s._seek=t.seek(r[i]),s._rateSeek=0,s._paused=!0,t._stopFade(r[i]),s._node))if(t._webAudio){if(!s._node.bufferSource)continue;typeof s._node.bufferSource.stop=="undefined"?s._node.bufferSource.noteOff(0):s._node.bufferSource.stop(0),t._cleanBuffer(s._node)}else(!isNaN(s._node.duration)||s._node.duration===1/0)&&s._node.pause();arguments[1]||t._emit("pause",s?s._id:null)}return t},stop:function(e,t){var r=this;if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"stop",action:function(){r.stop(e)}}),r;for(var i=r._getSoundIds(e),s=0;s<i.length;s++){r._clearTimer(i[s]);var l=r._soundById(i[s]);l&&(l._seek=l._start||0,l._rateSeek=0,l._paused=!0,l._ended=!0,r._stopFade(i[s]),l._node&&(r._webAudio?l._node.bufferSource&&(typeof l._node.bufferSource.stop=="undefined"?l._node.bufferSource.noteOff(0):l._node.bufferSource.stop(0),r._cleanBuffer(l._node)):(!isNaN(l._node.duration)||l._node.duration===1/0)&&(l._node.currentTime=l._start||0,l._node.pause(),l._node.duration===1/0&&r._clearSound(l._node))),t||r._emit("stop",l._id))}return r},mute:function(e,t){var r=this;if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"mute",action:function(){r.mute(e,t)}}),r;if(typeof t=="undefined")if(typeof e=="boolean")r._muted=e;else return r._muted;for(var i=r._getSoundIds(t),s=0;s<i.length;s++){var l=r._soundById(i[s]);l&&(l._muted=e,l._interval&&r._stopFade(l._id),r._webAudio&&l._node?l._node.gain.setValueAtTime(e?0:l._volume,a.ctx.currentTime):l._node&&(l._node.muted=a._muted?!0:e),r._emit("mute",l._id))}return r},volume:function(){var e=this,t=arguments,r,i;if(t.length===0)return e._volume;if(t.length===1||t.length===2&&typeof t[1]=="undefined"){var s=e._getSoundIds(),l=s.indexOf(t[0]);l>=0?i=parseInt(t[0],10):r=parseFloat(t[0])}else t.length>=2&&(r=parseFloat(t[0]),i=parseInt(t[1],10));var u;if(typeof r!="undefined"&&r>=0&&r<=1){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"volume",action:function(){e.volume.apply(e,t)}}),e;typeof i=="undefined"&&(e._volume=r),i=e._getSoundIds(i);for(var c=0;c<i.length;c++)u=e._soundById(i[c]),u&&(u._volume=r,t[2]||e._stopFade(i[c]),e._webAudio&&u._node&&!u._muted?u._node.gain.setValueAtTime(r,a.ctx.currentTime):u._node&&!u._muted&&(u._node.volume=r*a.volume()),e._emit("volume",u._id))}else return u=i?e._soundById(i):e._sounds[0],u?u._volume:0;return e},fade:function(e,t,r,i){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"fade",action:function(){s.fade(e,t,r,i)}}),s;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),r=parseFloat(r),s.volume(e,i);for(var l=s._getSoundIds(i),u=0;u<l.length;u++){var c=s._soundById(l[u]);if(c){if(i||s._stopFade(l[u]),s._webAudio&&!c._muted){var g=a.ctx.currentTime,w=g+r/1e3;c._volume=e,c._node.gain.setValueAtTime(e,g),c._node.gain.linearRampToValueAtTime(t,w)}s._startFadeInterval(c,e,t,r,l[u],typeof i=="undefined")}}return s},_startFadeInterval:function(e,t,r,i,s,l){var u=this,c=t,g=r-t,w=Math.abs(g/.01),S=Math.max(4,w>0?i/w:i),y=Date.now();e._fadeTo=r,e._interval=setInterval(function(){var A=(Date.now()-y)/i;y=Date.now(),c+=g*A,c=Math.round(c*100)/100,g<0?c=Math.max(r,c):c=Math.min(r,c),u._webAudio?e._volume=c:u.volume(c,e._id,!0),l&&(u._volume=c),(r<t&&c<=r||r>t&&c>=r)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(r,e._id),u._emit("fade",e._id))},S)},_stopFade:function(e){var t=this,r=t._soundById(e);return r&&r._interval&&(t._webAudio&&r._node.gain.cancelScheduledValues(a.ctx.currentTime),clearInterval(r._interval),r._interval=null,t.volume(r._fadeTo,e),r._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e=this,t=arguments,r,i,s;if(t.length===0)return e._loop;if(t.length===1)if(typeof t[0]=="boolean")r=t[0],e._loop=r;else return s=e._soundById(parseInt(t[0],10)),s?s._loop:!1;else t.length===2&&(r=t[0],i=parseInt(t[1],10));for(var l=e._getSoundIds(i),u=0;u<l.length;u++)s=e._soundById(l[u]),s&&(s._loop=r,e._webAudio&&s._node&&s._node.bufferSource&&(s._node.bufferSource.loop=r,r&&(s._node.bufferSource.loopStart=s._start||0,s._node.bufferSource.loopEnd=s._stop,e.playing(l[u])&&(e.pause(l[u],!0),e.play(l[u],!0)))));return e},rate:function(){var e=this,t=arguments,r,i;if(t.length===0)i=e._sounds[0]._id;else if(t.length===1){var s=e._getSoundIds(),l=s.indexOf(t[0]);l>=0?i=parseInt(t[0],10):r=parseFloat(t[0])}else t.length===2&&(r=parseFloat(t[0]),i=parseInt(t[1],10));var u;if(typeof r=="number"){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"rate",action:function(){e.rate.apply(e,t)}}),e;typeof i=="undefined"&&(e._rate=r),i=e._getSoundIds(i);for(var c=0;c<i.length;c++)if(u=e._soundById(i[c]),u){e.playing(i[c])&&(u._rateSeek=e.seek(i[c]),u._playStart=e._webAudio?a.ctx.currentTime:u._playStart),u._rate=r,e._webAudio&&u._node&&u._node.bufferSource?u._node.bufferSource.playbackRate.setValueAtTime(r,a.ctx.currentTime):u._node&&(u._node.playbackRate=r);var g=e.seek(i[c]),w=(e._sprite[u._sprite][0]+e._sprite[u._sprite][1])/1e3-g,S=w*1e3/Math.abs(u._rate);(e._endTimers[i[c]]||!u._paused)&&(e._clearTimer(i[c]),e._endTimers[i[c]]=setTimeout(e._ended.bind(e,u),S)),e._emit("rate",u._id)}}else return u=e._soundById(i),u?u._rate:e._rate;return e},seek:function(){var e=this,t=arguments,r,i;if(t.length===0)e._sounds.length&&(i=e._sounds[0]._id);else if(t.length===1){var s=e._getSoundIds(),l=s.indexOf(t[0]);l>=0?i=parseInt(t[0],10):e._sounds.length&&(i=e._sounds[0]._id,r=parseFloat(t[0]))}else t.length===2&&(r=parseFloat(t[0]),i=parseInt(t[1],10));if(typeof i=="undefined")return 0;if(typeof r=="number"&&(e._state!=="loaded"||e._playLock))return e._queue.push({event:"seek",action:function(){e.seek.apply(e,t)}}),e;var u=e._soundById(i);if(u)if(typeof r=="number"&&r>=0){var c=e.playing(i);c&&e.pause(i,!0),u._seek=r,u._ended=!1,e._clearTimer(i),!e._webAudio&&u._node&&!isNaN(u._node.duration)&&(u._node.currentTime=r);var g=function(){c&&e.play(i,!0),e._emit("seek",i)};if(c&&!e._webAudio){var w=function(){e._playLock?setTimeout(w,0):g()};setTimeout(w,0)}else g()}else if(e._webAudio){var S=e.playing(i)?a.ctx.currentTime-u._playStart:0,y=u._rateSeek?u._rateSeek-u._seek:0;return u._seek+(y+S*Math.abs(u._rate))}else return u._node.currentTime;return e},playing:function(e){var t=this;if(typeof e=="number"){var r=t._soundById(e);return r?!r._paused:!1}for(var i=0;i<t._sounds.length;i++)if(!t._sounds[i]._paused)return!0;return!1},duration:function(e){var t=this,r=t._duration,i=t._soundById(e);return i&&(r=t._sprite[i._sprite][1]/1e3),r},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,r=0;r<t.length;r++)t[r]._paused||e.stop(t[r]._id),e._webAudio||(e._clearSound(t[r]._node),t[r]._node.removeEventListener("error",t[r]._errorFn,!1),t[r]._node.removeEventListener(a._canPlayEvent,t[r]._loadFn,!1),t[r]._node.removeEventListener("ended",t[r]._endFn,!1),a._releaseHtml5Audio(t[r]._node)),delete t[r]._node,e._clearTimer(t[r]._id);var i=a._howls.indexOf(e);i>=0&&a._howls.splice(i,1);var s=!0;for(r=0;r<a._howls.length;r++)if(a._howls[r]._src===e._src||e._src.indexOf(a._howls[r]._src)>=0){s=!1;break}return v&&s&&delete v[e._src],a.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,r,i){var s=this,l=s["_on"+e];return typeof t=="function"&&l.push(i?{id:r,fn:t,once:i}:{id:r,fn:t}),s},off:function(e,t,r){var i=this,s=i["_on"+e],l=0;if(typeof t=="number"&&(r=t,t=null),t||r)for(l=0;l<s.length;l++){var u=r===s[l].id;if(t===s[l].fn&&u||!t&&u){s.splice(l,1);break}}else if(e)i["_on"+e]=[];else{var c=Object.keys(i);for(l=0;l<c.length;l++)c[l].indexOf("_on")===0&&Array.isArray(i[c[l]])&&(i[c[l]]=[])}return i},once:function(e,t,r){var i=this;return i.on(e,t,r,1),i},_emit:function(e,t,r){for(var i=this,s=i["_on"+e],l=s.length-1;l>=0;l--)(!s[l].id||s[l].id===t||e==="load")&&(setTimeout(function(u){u.call(this,t,r)}.bind(i,s[l].fn),0),s[l].once&&i.off(e,s[l].fn,s[l].id));return i._loadQueue(e),i},_loadQueue:function(e){var t=this;if(t._queue.length>0){var r=t._queue[0];r.event===e&&(t._queue.shift(),t._loadQueue()),e||r.action()}return t},_ended:function(e){var t=this,r=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var i=!!(e._loop||t._sprite[r][2]);if(t._emit("end",e._id),!t._webAudio&&i&&t.stop(e._id,!0).play(e._id),t._webAudio&&i){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=a.ctx.currentTime;var s=(e._stop-e._start)*1e3/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),s)}return t._webAudio&&!i&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),a._autoSuspend()),!t._webAudio&&!i&&t.stop(e._id,!0),t},_clearTimer:function(e){var t=this;if(t._endTimers[e]){if(typeof t._endTimers[e]!="function")clearTimeout(t._endTimers[e]);else{var r=t._soundById(e);r&&r._node&&r._node.removeEventListener("ended",t._endTimers[e],!1)}delete t._endTimers[e]}return t},_soundById:function(e){for(var t=this,r=0;r<t._sounds.length;r++)if(e===t._sounds[r]._id)return t._sounds[r];return null},_inactiveSound:function(){var e=this;e._drain();for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset();return new d(e)},_drain:function(){var e=this,t=e._pool,r=0,i=0;if(!(e._sounds.length<t)){for(i=0;i<e._sounds.length;i++)e._sounds[i]._ended&&r++;for(i=e._sounds.length-1;i>=0;i--){if(r<=t)return;e._sounds[i]._ended&&(e._webAudio&&e._sounds[i]._node&&e._sounds[i]._node.disconnect(0),e._sounds.splice(i,1),r--)}}},_getSoundIds:function(e){var t=this;if(typeof e=="undefined"){for(var r=[],i=0;i<t._sounds.length;i++)r.push(t._sounds[i]._id);return r}else return[e]},_refreshBuffer:function(e){var t=this;return e._node.bufferSource=a.ctx.createBufferSource(),e._node.bufferSource.buffer=v[t._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,a.ctx.currentTime),t},_cleanBuffer:function(e){var t=this,r=a._navigator&&a._navigator.vendor.indexOf("Apple")>=0;if(a._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),r))try{e.bufferSource.buffer=a._scratchBuffer}catch{}return e.bufferSource=null,t},_clearSound:function(e){var t=/MSIE |Trident\//.test(a._navigator&&a._navigator.userAgent);t||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var d=function(e){this._parent=e,this.init()};d.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++a._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,r=a._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=typeof a.ctx.createGain=="undefined"?a.ctx.createGainNode():a.ctx.createGain(),e._node.gain.setValueAtTime(r,a.ctx.currentTime),e._node.paused=!0,e._node.connect(a.masterGain)):a.noAudio||(e._node=a._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(a._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=t._src,e._node.preload=t._preload===!0?"auto":t._preload,e._node.volume=r*a.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++a._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(e._node.duration*10)/10,Object.keys(t._sprite).length===0&&(t._sprite={__default:[0,t._duration*1e3]}),t._state!=="loaded"&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(a._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,t=e._parent;t._duration===1/0&&(t._duration=Math.ceil(e._node.duration*10)/10,t._sprite.__default[1]===1/0&&(t._sprite.__default[1]=t._duration*1e3),t._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var v={},p=function(e){var t=e._src;if(v[t]){e._duration=v[t].duration,h(e);return}if(/^data:[^;]+;base64,/.test(t)){for(var r=atob(t.split(",")[1]),i=new Uint8Array(r.length),s=0;s<r.length;++s)i[s]=r.charCodeAt(s);_(i.buffer,e)}else{var l=new XMLHttpRequest;l.open(e._xhr.method,t,!0),l.withCredentials=e._xhr.withCredentials,l.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(u){l.setRequestHeader(u,e._xhr.headers[u])}),l.onload=function(){var u=(l.status+"")[0];if(u!=="0"&&u!=="2"&&u!=="3"){e._emit("loaderror",null,"Failed loading audio file with status: "+l.status+".");return}_(l.response,e)},l.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete v[t],e.load())},m(l)}},m=function(e){try{e.send()}catch{e.onerror()}},_=function(e,t){var r=function(){t._emit("loaderror",null,"Decoding audio data failed.")},i=function(s){s&&t._sounds.length>0?(v[t._src]=s,h(t,s)):r()};typeof Promise!="undefined"&&a.ctx.decodeAudioData.length===1?a.ctx.decodeAudioData(e).then(i).catch(r):a.ctx.decodeAudioData(e,i,r)},h=function(e,t){t&&!e._duration&&(e._duration=t.duration),Object.keys(e._sprite).length===0&&(e._sprite={__default:[0,e._duration*1e3]}),e._state!=="loaded"&&(e._state="loaded",e._emit("load"),e._loadQueue())},T=function(){if(!!a.usingWebAudio){try{typeof AudioContext!="undefined"?a.ctx=new AudioContext:typeof webkitAudioContext!="undefined"?a.ctx=new webkitAudioContext:a.usingWebAudio=!1}catch{a.usingWebAudio=!1}a.ctx||(a.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(a._navigator&&a._navigator.platform),t=a._navigator&&a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),r=t?parseInt(t[1],10):null;if(e&&r&&r<9){var i=/safari/.test(a._navigator&&a._navigator.userAgent.toLowerCase());a._navigator&&!i&&(a.usingWebAudio=!1)}a.usingWebAudio&&(a.masterGain=typeof a.ctx.createGain=="undefined"?a.ctx.createGainNode():a.ctx.createGain(),a.masterGain.gain.setValueAtTime(a._muted?0:a._volume,a.ctx.currentTime),a.masterGain.connect(a.ctx.destination)),a._setup()}};n.Howler=a,n.Howl=f,typeof $!="undefined"?($.HowlerGlobal=o,$.Howler=a,$.Howl=f,$.Sound=d):typeof window!="undefined"&&(window.HowlerGlobal=o,window.Howler=a,window.Howl=f,window.Sound=d)})()})(ct);export{Bt as A,pe as B,Ut as C,ht as D,yt as E,gt as F,vt as G,Ae as H,E as I,St as J,Qt as K,bt as L,re as M,pt as N,ct as O,Pt as P,xt as Q,mt as R,Vt as S,Nt as T,jt as U,Se as V,It as W,Ie as a,ke as b,kt as c,Te as d,xe as e,wt as f,Le as g,Lt as h,qt as i,Ht as j,At as k,Tt as l,Wt as m,Et as n,$e as o,Rt as p,Gt as q,Ft as r,he as s,H as t,Mt as u,Fe as v,Ct as w,ie as x,$t as y,Ot as z};
