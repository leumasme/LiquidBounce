var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let c=i?()=>window.performance.now():()=>Date.now(),a=i?t=>requestAnimationFrame(t):t;const u=new Set;function f(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&a(f)}function d(t){let e;return 0===u.size&&a(f),{promise:new Promise((n=>{u.add(e={c:t,f:n})})),abort(){u.delete(e)}}}function g(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function y(){return v(" ")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}const x=new Set;let _,E=0;function C(t,e,n,o,r,l,s,i=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,d=t.ownerDocument;x.add(d);const g=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild($("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,g.insertRule(`@keyframes ${f} ${u}`,g.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${o}ms linear ${r}ms 1 both`,E+=1,f}function M(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||a((()=>{E||(x.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),x.clear())})))}function R(n,o,r,l){if(!o)return t;const s=n.getBoundingClientRect();if(o.left===s.left&&o.right===s.right&&o.top===s.top&&o.bottom===s.bottom)return t;const{delay:i=0,duration:a=300,easing:u=e,start:f=c()+i,end:g=f+a,tick:m=t,css:h}=r(n,{from:o,to:s},l);let p,$=!0,v=!1;function y(){h&&M(n,p),$=!1}return d((t=>{if(!v&&t>=f&&(v=!0),v&&t>=g&&(m(1,0),y()),!$)return!1;if(v){const e=0+1*u((t-f)/a);m(e,1-e)}return!0})),h&&(p=C(n,0,1,a,i,u,h)),i||(v=!0),m(0,1),y}function S(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,N(t,r)}}function N(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function B(t){_=t}function O(t){(function(){if(!_)throw new Error("Function called outside component initialization");return _})().$$.after_update.push(t)}const A=[],j=[],F=[],L=[],P=Promise.resolve();let T=!1;function q(t){F.push(t)}let z=!1;const I=new Set;function D(){if(!z){z=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];B(e),H(e.$$)}for(B(null),A.length=0;j.length;)j.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];I.has(e)||(I.add(e),e())}F.length=0}while(A.length);for(;L.length;)L.pop()();T=!1,z=!1,I.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let W;function K(){return W||(W=Promise.resolve(),W.then((()=>{W=null}))),W}function V(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const G=new Set;let J;function Q(){J={r:0,c:[],p:J}}function U(){J.r||r(J.c),J=J.p}function X(t,e){t&&t.i&&(G.delete(t),t.i(e))}function Y(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),J.c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const Z={duration:0};function tt(n,o,r){let s,i,a=o(n,r),u=!1,f=0;function g(){s&&M(n,s)}function m(){const{delay:o=0,duration:r=300,easing:l=e,tick:m=t,css:h}=a||Z;h&&(s=C(n,0,1,r,o,l,h,f++)),m(0,1);const p=c()+o,$=p+r;i&&i.abort(),u=!0,q((()=>V(n,!0,"start"))),i=d((t=>{if(u){if(t>=$)return m(1,0),V(n,!0,"end"),g(),u=!1;if(t>=p){const e=l((t-p)/r);m(e,1-e)}}return u}))}let h=!1;return{start(){h||(M(n),l(a)?(a=a(),K().then(m)):m())},invalidate(){h=!1},end(){u&&(g(),u=!1)}}}function et(n,o,s){let i,a=o(n,s),u=!0;const f=J;function g(){const{delay:o=0,duration:l=300,easing:s=e,tick:g=t,css:m}=a||Z;m&&(i=C(n,1,0,l,o,s,m));const h=c()+o,p=h+l;q((()=>V(n,!1,"start"))),d((t=>{if(u){if(t>=p)return g(0,1),V(n,!1,"end"),--f.r||r(f.c),!1;if(t>=h){const e=s((t-h)/l);g(1-e,e)}}return u}))}return f.r+=1,l(a)?K().then((()=>{a=a(),g()})):g(),{end(t){t&&a.tick&&a.tick(1,0),u&&(i&&M(n,i),u=!1)}}}function nt(t,e){t.f(),function(t,e){Y(t,1,1,(()=>{e.delete(t.key)}))}(t,e)}function ot(t,e,n,o,r,l,s,i,c,a,u,f){let d=t.length,g=l.length,m=d;const h={};for(;m--;)h[t[m].key]=m;const p=[],$=new Map,v=new Map;for(m=g;m--;){const t=f(r,l,m),i=n(t);let c=s.get(i);c?o&&c.p(t,e):(c=a(i,t),c.c()),$.set(i,p[m]=c),i in h&&v.set(i,Math.abs(m-h[i]))}const y=new Set,b=new Set;function w(t){X(t,1),t.m(i,u),s.set(t.key,t),u=t.first,g--}for(;d&&g;){const e=p[g-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,g--):$.has(r)?!s.has(o)||y.has(o)?w(e):b.has(r)?d--:v.get(o)>v.get(r)?(b.add(o),w(e)):(y.add(r),d--):(c(n,s),d--)}for(;d--;){const e=t[d];$.has(e.key)||c(e,s)}for(;g;)w(p[g-1]);return p}function rt(t){t&&t.c()}function lt(t,e,o,s){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,o),s||q((()=>{const e=c.map(n).filter(l);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(q)}function st(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(A.push(t),T||(T=!0,P.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(e,n,l,s,i,c,a=[-1]){const u=_;B(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(f.ctx=l?l(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&it(e,t)),n})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();n.intro&&X(e.$$.fragment),lt(e,n.target,n.anchor,n.customElement),D()}B(u)}class at{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ut(t){const e=t-1;return e*e*e+1}function ft(t,{delay:n=0,duration:o=400,easing:r=e}={}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*l}}function dt(t,{delay:e=0,duration:n=400,easing:o=ut,x:r=0,y:l=0,opacity:s=0}={}){const i=getComputedStyle(t),c=+i.opacity,a="none"===i.transform?"":i.transform,u=c*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*l}px);\n\t\t\topacity: ${c-u*e}`}}function gt(t){let e,n,o,r,l;return{c(){e=$("img"),e.src!==(n="img/tabgui/"+t[0].toLowerCase()+".svg")&&b(e,"src",n),b(e,"alt","icon"),b(e,"class","svelte-1882las")},m(t,n){m(t,e,n),l=!0},p(t,o){(!l||1&o&&e.src!==(n="img/tabgui/"+t[0].toLowerCase()+".svg"))&&b(e,"src",n)},i(t){l||(q((()=>{r&&r.end(1),o||(o=tt(e,ft,{duration:200})),o.start()})),l=!0)},o(t){o&&o.invalidate(),r=et(e,ft,{duration:200}),l=!1},d(t){t&&h(e),t&&r&&r.end()}}}function mt(t){let e,n,o,r,l;return{c(){e=$("img"),e.src!==(n="img/tabgui/"+t[0].toLowerCase()+"-active.svg")&&b(e,"src",n),b(e,"alt","icon"),b(e,"class","svelte-1882las")},m(t,n){m(t,e,n),l=!0},p(t,o){(!l||1&o&&e.src!==(n="img/tabgui/"+t[0].toLowerCase()+"-active.svg"))&&b(e,"src",n)},i(t){l||(q((()=>{r&&r.end(1),o||(o=tt(e,ft,{duration:200})),o.start()})),l=!0)},o(t){o&&o.invalidate(),r=et(e,ft,{duration:200}),l=!1},d(t){t&&h(e),t&&r&&r.end()}}}function ht(t){let e,n,o,r,l,s,i,c,a;const u=[mt,gt],f=[];function d(t,e){return t[1]?0:1}return o=d(t),r=f[o]=u[o](t),{c(){e=$("div"),n=$("div"),r.c(),l=y(),s=$("div"),i=v(t[0]),b(n,"class","category-icon svelte-1882las"),b(s,"class","category-name svelte-1882las"),b(e,"class",c="category "+(t[1]?"active":"")+" svelte-1882las")},m(t,r){m(t,e,r),g(e,n),f[o].m(n,null),g(e,l),g(e,s),g(s,i),a=!0},p(t,[l]){let s=o;o=d(t),o===s?f[o].p(t,l):(Q(),Y(f[s],1,1,(()=>{f[s]=null})),U(),r=f[o],r?r.p(t,l):(r=f[o]=u[o](t),r.c()),X(r,1),r.m(n,null)),(!a||1&l)&&w(i,t[0]),(!a||2&l&&c!==(c="category "+(t[1]?"active":"")+" svelte-1882las"))&&b(e,"class",c)},i(t){a||(X(r),a=!0)},o(t){Y(r),a=!1},d(t){t&&h(e),f[o].d()}}}function pt(t,e,n){let{name:o}=e,{active:r}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"active"in t&&n(1,r=t.active)},[o,r]}class $t extends at{constructor(t){super(),ct(this,t,pt,ht,s,{name:0,active:1})}}function vt(e){let n,o,r,l;return{c(){n=$("div"),o=$("div"),r=v(e[0]),b(o,"class","name svelte-5ugswk"),b(n,"class",l="module "+(e[1]?"active":"")+" "+(e[2]?"enabled":"")+" svelte-5ugswk")},m(t,l){m(t,n,l),g(n,o),g(o,r),e[4](n)},p(t,[e]){1&e&&w(r,t[0]),6&e&&l!==(l="module "+(t[1]?"active":"")+" "+(t[2]?"enabled":"")+" svelte-5ugswk")&&b(n,"class",l)},i:t,o:t,d(t){t&&h(n),e[4](null)}}}function yt(t,e,n){let o,{name:r}=e,{active:l}=e,{enabled:s}=e;return O((()=>{l&&o.scrollIntoView({block:"start",behavior:"smooth"})})),t.$$set=t=>{"name"in t&&n(0,r=t.name),"active"in t&&n(1,l=t.active),"enabled"in t&&n(2,s=t.enabled)},[r,l,s,o,function(t){j[t?"unshift":"push"]((()=>{o=t,n(3,o)}))}]}class bt extends at{constructor(t){super(),ct(this,t,yt,vt,s,{name:0,active:1,enabled:2})}}function wt(t,e,n){const o=t.slice();return o[10]=e[n],o[12]=n,o}function kt(t,e,n){const o=t.slice();return o[13]=e[n],o[12]=n,o}function xt(t){let e,n;return e=new $t({props:{name:t[13],active:t[12]===t[2]}}),{c(){rt(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.active=t[12]===t[2]),e.$set(o)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function _t(t){let e,n,o,r,l=t[0],s=[];for(let e=0;e<l.length;e+=1)s[e]=Et(wt(t,l,e));const i=t=>Y(s[t],1,1,(()=>{s[t]=null}));return{c(){e=$("div");for(let t=0;t<s.length;t+=1)s[t].c();k(e,"height",t[3].offsetHeight+"px"),b(e,"class","modules svelte-1hooe5i")},m(t,n){m(t,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null);r=!0},p(t,n){if(3&n){let o;for(l=t[0],o=0;o<l.length;o+=1){const r=wt(t,l,o);s[o]?(s[o].p(r,n),X(s[o],1)):(s[o]=Et(r),s[o].c(),X(s[o],1),s[o].m(e,null))}for(Q(),o=l.length;o<s.length;o+=1)i(o);U()}(!r||8&n)&&k(e,"height",t[3].offsetHeight+"px")},i(t){if(!r){for(let t=0;t<l.length;t+=1)X(s[t]);q((()=>{o&&o.end(1),n||(n=tt(e,dt,{x:-10,duration:200})),n.start()})),r=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)Y(s[t]);n&&n.invalidate(),o=et(e,dt,{x:-10,duration:200}),r=!1},d(t){t&&h(e),p(s,t),t&&o&&o.end()}}}function Et(t){let e,n;return e=new bt({props:{name:t[10].name,enabled:t[10].enabled,active:t[1]===t[12]}}),{c(){rt(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.name=t[10].name),1&n&&(o.enabled=t[10].enabled),2&n&&(o.active=t[1]===t[12]),e.$set(o)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function Ct(t){let e,n,o,r,l=t[4],s=[];for(let e=0;e<l.length;e+=1)s[e]=xt(kt(t,l,e));const i=t=>Y(s[t],1,1,(()=>{s[t]=null}));let c=t[0].length>0&&_t(t);return{c(){e=$("div"),n=$("div");for(let t=0;t<s.length;t+=1)s[t].c();o=y(),c&&c.c(),b(n,"class","categories svelte-1hooe5i"),b(e,"class","tabgui svelte-1hooe5i")},m(l,i){m(l,e,i),g(e,n);for(let t=0;t<s.length;t+=1)s[t].m(n,null);t[5](n),g(e,o),c&&c.m(e,null),r=!0},p(t,[o]){if(20&o){let e;for(l=t[4],e=0;e<l.length;e+=1){const r=kt(t,l,e);s[e]?(s[e].p(r,o),X(s[e],1)):(s[e]=xt(r),s[e].c(),X(s[e],1),s[e].m(n,null))}for(Q(),e=l.length;e<s.length;e+=1)i(e);U()}t[0].length>0?c?(c.p(t,o),1&o&&X(c,1)):(c=_t(t),c.c(),X(c,1),c.m(e,null)):c&&(Q(),Y(c,1,1,(()=>{c=null})),U())},i(t){if(!r){for(let t=0;t<l.length;t+=1)X(s[t]);X(c),r=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)Y(s[t]);Y(c),r=!1},d(n){n&&h(e),p(s,n),t[5](null),c&&c.d()}}}function Mt(t,e,n){const o=["Movement","Combat","Render","Exploit","Player","World","Misc","Fun"],r=[];try{const t=client.getModuleManager().iterator();for(;t.hasNext();){const e=t.next();r.push({name:e.getName(),category:e.getCategory().getReadableName(),enabled:e.getEnabled(),setEnabled:e.setEnabled})}}catch(t){console.log(t)}function l(){return r.filter((t=>t.category===o[c]))}let s=[],i=0,c=0,a=document.createElement("div");function u(t){if(1===t.getAction())switch(t.getKey().toString()){case"key.keyboard.down":0===s.length?n(2,c=c===o.length-1?0:c+1):n(1,i=i===s.length-1?0:i+1);break;case"key.keyboard.up":0===s.length?n(2,c=0===c?o.length-1:c-1):n(1,i=0===i?s.length-1:i-1);break;case"key.keyboard.right":n(0,s=[]),n(0,s=l()),n(1,i=0);break;case"key.keyboard.left":n(0,s=[]);break;case"key.keyboard.enter":if(-1!=i){const t=s[i];t.setEnabled(!t.enabled)}}}try{client.on("key",u),client.on("toggleModule",(function(t){r.find((e=>e.name===t.getModule().getName())).enabled=t.getNewState(),s.length>0&&n(0,s=l())}))}catch(t){window.addEventListener("keydown",u),console.log(t)}return[s,i,c,a,o,function(t){j[t?"unshift":"push"]((()=>{a=t,n(3,a)}))}]}class Rt extends at{constructor(t){super(),ct(this,t,Mt,Ct,s,{})}}function St(e){let n,o;return{c(){n=$("img"),b(n,"class","watermark svelte-l5vd49"),n.src!==(o="img/watermark/lb-logo.svg")&&b(n,"src","img/watermark/lb-logo.svg"),b(n,"alt","watermark")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Nt extends at{constructor(t){super(),ct(this,t,null,St,s,{})}}function Bt(t,e,n={}){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,s=e.from.width/t.clientWidth,i=e.from.height/t.clientHeight,c=(e.from.left-e.to.left)/s,a=(e.from.top-e.to.top)/i,u=Math.sqrt(c*c+a*a),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:g=ut}=n;return{delay:f,duration:l(d)?d(u):d,easing:g,css:(t,e)=>`transform: ${r} translate(${e*c}px, ${e*a}px);`}}function Ot(e){let n,o;return{c(){n=$("div"),o=v(e[0]),b(n,"class","module svelte-1r5j4px")},m(t,e){m(t,n,e),g(n,o)},p(t,[e]){1&e&&w(o,t[0])},i:t,o:t,d(t){t&&h(n)}}}function At(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}class jt extends at{constructor(t){super(),ct(this,t,At,Ot,s,{name:0})}}function Ft(t,e,n){const o=t.slice();return o[4]=e[n],o}function Lt(e,n){let o,r,l,s,i,c,a,u=t;return r=new jt({props:{name:n[4].name}}),{key:e,first:null,c(){o=$("div"),rt(r.$$.fragment),l=y(),this.first=o},m(t,e){m(t,o,e),lt(r,o,null),g(o,l),a=!0},p(t,e){n=t;const o={};1&e&&(o.name=n[4].name),r.$set(o)},r(){c=o.getBoundingClientRect()},f(){S(o),u(),N(o,c)},a(){u(),u=R(o,c,Bt,{duration:200})},i(t){a||(X(r.$$.fragment,t),q((()=>{i&&i.end(1),s||(s=tt(o,dt,{x:10,duration:200})),s.start()})),a=!0)},o(t){Y(r.$$.fragment,t),s&&s.invalidate(),i=et(o,dt,{x:10,duration:200}),a=!1},d(t){t&&h(o),st(r),t&&i&&i.end()}}}function Pt(t){let e,n,o=[],r=new Map,l=t[0];const s=t=>t[4];for(let e=0;e<l.length;e+=1){let n=Ft(t,l,e),i=s(n);r.set(i,o[e]=Lt(i,n))}return{c(){e=$("div");for(let t=0;t<o.length;t+=1)o[t].c();b(e,"class","arraylist svelte-1jiumb2")},m(t,r){m(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){if(1&n){l=t[0],Q();for(let t=0;t<o.length;t+=1)o[t].r();o=ot(o,n,s,1,t,l,r,e,nt,Lt,null,Ft);for(let t=0;t<o.length;t+=1)o[t].a();U()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)X(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)Y(o[t]);n=!1},d(t){t&&h(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Tt(t,e,n){function o(t){void 0===o.ruler&&(o.ruler=document.getElementById("ruler"));const e=o.ruler;return e.innerText=t,e.offsetWidth}function r(){n(0,l=l.sort(((t,e)=>o(e.name)-o(t.name))))}let l=[];try{const t=client.getModuleManager().iterator();for(;t.hasNext();){const e=t.next();e.getEnabled()&&l.push({name:e.getName()})}r()}catch(t){console.log(t)}try{client.on("toggleModule",(function(t){const e=t.getModule().getName();t.getNewState()?l.push({name:e}):n(0,l=l.filter((t=>t.name!=e))),r()}))}catch(t){console.log(t)}return[l]}class qt extends at{constructor(t){super(),ct(this,t,Tt,Pt,s,{})}}function zt(e){let n,o,r,l,s,i,c,a,u;return{c(){n=$("div"),o=$("div"),l=y(),s=$("div"),i=v(e[0]),c=y(),a=$("div"),u=v(e[1]),b(o,"class",r="icon "+("INFO"===e[2]?"info":"ERROR"===e[2]?"error":"success")+" svelte-1ken5ba"),b(s,"class","title svelte-1ken5ba"),b(a,"class","content svelte-1ken5ba"),b(n,"class","notification svelte-1ken5ba")},m(t,e){m(t,n,e),g(n,o),g(n,l),g(n,s),g(s,i),g(n,c),g(n,a),g(a,u)},p(t,[e]){4&e&&r!==(r="icon "+("INFO"===t[2]?"info":"ERROR"===t[2]?"error":"success")+" svelte-1ken5ba")&&b(o,"class",r),1&e&&w(i,t[0]),2&e&&w(u,t[1])},i:t,o:t,d(t){t&&h(n)}}}function It(t,e,n){let{title:o}=e,{content:r}=e,{severity:l}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"content"in t&&n(1,r=t.content),"severity"in t&&n(2,l=t.severity)},[o,r,l]}class Dt extends at{constructor(t){super(),ct(this,t,It,zt,s,{title:0,content:1,severity:2})}}function Ht(t,e,n){const o=t.slice();return o[2]=e[n],o}function Wt(e,n){let o,r,l,s,i,c,a,u=t;return r=new Dt({props:{title:n[2].title,content:n[2].content,severity:n[2].severity}}),{key:e,first:null,c(){o=$("div"),rt(r.$$.fragment),l=y(),this.first=o},m(t,e){m(t,o,e),lt(r,o,null),g(o,l),a=!0},p(t,e){n=t;const o={};1&e&&(o.title=n[2].title),1&e&&(o.content=n[2].content),1&e&&(o.severity=n[2].severity),r.$set(o)},r(){c=o.getBoundingClientRect()},f(){S(o),u(),N(o,c)},a(){u(),u=R(o,c,Bt,{duration:200})},i(t){a||(X(r.$$.fragment,t),q((()=>{i&&i.end(1),s||(s=tt(o,dt,{x:15,duration:200})),s.start()})),a=!0)},o(t){Y(r.$$.fragment,t),s&&s.invalidate(),i=et(o,dt,{x:15,duration:200}),a=!1},d(t){t&&h(o),st(r),t&&i&&i.end()}}}function Kt(t){let e,n,o=[],r=new Map,l=t[0];const s=t=>t[2];for(let e=0;e<l.length;e+=1){let n=Ht(t,l,e),i=s(n);r.set(i,o[e]=Wt(i,n))}return{c(){e=$("div");for(let t=0;t<o.length;t+=1)o[t].c();b(e,"class","notifications svelte-wyz01u")},m(t,r){m(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){if(1&n){l=t[0],Q();for(let t=0;t<o.length;t+=1)o[t].r();o=ot(o,n,s,1,t,l,r,e,nt,Wt,null,Ht);for(let t=0;t<o.length;t+=1)o[t].a();U()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)X(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)Y(o[t]);n=!1},d(t){t&&h(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Vt(t,e,n){let o=[];try{client.on("notification",(t=>{!function(t,e,r){const l=Date.now();n(0,o=[{id:l,title:t,content:e,severity:r},...o]),setTimeout((()=>{n(0,o=o.filter((t=>t.id!=l)))}),3e3)}(t.getTitle(),t.getMessage(),t.getSeverity())}))}catch(t){console.log(t)}return[o]}class Gt extends at{constructor(t){super(),ct(this,t,Vt,Kt,s,{})}}function Jt(e){let n,o,r,l,s,i,c,a,u;return o=new qt({}),l=new Nt({}),i=new Rt({}),a=new Gt({}),{c(){n=$("main"),rt(o.$$.fragment),r=y(),rt(l.$$.fragment),s=y(),rt(i.$$.fragment),c=y(),rt(a.$$.fragment)},m(t,e){m(t,n,e),lt(o,n,null),g(n,r),lt(l,n,null),g(n,s),lt(i,n,null),g(n,c),lt(a,n,null),u=!0},p:t,i(t){u||(X(o.$$.fragment,t),X(l.$$.fragment,t),X(i.$$.fragment,t),X(a.$$.fragment,t),u=!0)},o(t){Y(o.$$.fragment,t),Y(l.$$.fragment,t),Y(i.$$.fragment,t),Y(a.$$.fragment,t),u=!1},d(t){t&&h(n),st(o),st(l),st(i),st(a)}}}return new class extends at{constructor(t){super(),ct(this,t,null,Jt,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
