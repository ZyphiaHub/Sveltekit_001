import{s as x,n as P,o as G,a as Q,r as W}from"../chunks/scheduler.CszMd_qe.js";import{S as X,i as Z,e as g,s as A,c as b,g as j,a as H,b as C,d as u,f as y,h as T,l as N,j as M,t as F,k as J,m as $,n as D,o as R,p as ee}from"../chunks/index.B2ovvTLf.js";import{e as S}from"../chunks/each.D6YF6ztN.js";function V(n,e,l){const t=n.slice();return t[6]=e[l],t[7]=e,t[8]=l,t}function I(n,e,l){const t=n.slice();return t[9]=e[l],t[10]=e,t[11]=l,t}function K(n,e,l){const t=n.slice();return t[12]=e[l],t}function te(n,e,l){const t=n.slice();return t[15]=e[l],t}function le(n){let e,l;return{c(){e=g("th"),l=F(n[15])},l(t){e=b(t,"TH",{});var a=C(e);l=J(a,n[15]),a.forEach(u)},m(t,a){y(t,e,a),T(e,l)},p:P,d(t){t&&u(e)}}}function L(n){let e,l=n[12].title+"",t,a;return{c(){e=g("option"),t=F(l),this.h()},l(o){e=b(o,"OPTION",{});var f=C(e);t=J(f,l),f.forEach(u),this.h()},h(){e.__value=a=n[12].title,D(e,e.__value)},m(o,f){y(o,e,f),T(e,t)},p(o,f){f&2&&l!==(l=o[12].title+"")&&ee(t,l),f&2&&a!==(a=o[12].title)&&(e.__value=a,D(e,e.__value))},d(o){o&&u(e)}}}function U(n){let e,l,t,a="Válassz receptet",o,f,r=S(n[1]),c=[];for(let i=0;i<r.length;i+=1)c[i]=L(K(n,r,i));function p(){n[3].call(l,n[11],n[8])}return{c(){e=g("td"),l=g("select"),t=g("option"),t.textContent=a;for(let i=0;i<c.length;i+=1)c[i].c();this.h()},l(i){e=b(i,"TD",{});var m=C(e);l=b(m,"SELECT",{});var _=C(l);t=b(_,"OPTION",{"data-svelte-h":!0}),j(t)!=="svelte-sjomet"&&(t.textContent=a);for(let k=0;k<c.length;k+=1)c[k].l(_);_.forEach(u),m.forEach(u),this.h()},h(){t.__value="",D(t,t.__value),t.disabled=!0,t.selected=!0,n[0][n[11]][n[8]]===void 0&&Q(p)},m(i,m){y(i,e,m),T(e,l),T(l,t);for(let _=0;_<c.length;_+=1)c[_]&&c[_].m(l,null);R(l,n[0][n[11]][n[8]],!0),o||(f=[N(l,"change",p),N(l,"change",n[2])],o=!0)},p(i,m){if(n=i,m&2){r=S(n[1]);let _;for(_=0;_<r.length;_+=1){const k=K(n,r,_);c[_]?c[_].p(k,m):(c[_]=L(k),c[_].c(),c[_].m(l,null))}for(;_<c.length;_+=1)c[_].d(1);c.length=r.length}m&3&&R(l,n[0][n[11]][n[8]])},d(i){i&&u(e),M(c,i),o=!1,W(f)}}}function q(n){let e,l,t=S(n[0]),a=[];for(let o=0;o<t.length;o+=1)a[o]=U(I(n,t,o));return{c(){e=g("tr");for(let o=0;o<a.length;o+=1)a[o].c();l=A()},l(o){e=b(o,"TR",{});var f=C(e);for(let r=0;r<a.length;r+=1)a[r].l(f);l=H(f),f.forEach(u)},m(o,f){y(o,e,f);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(e,null);T(e,l)},p(o,f){if(f&7){t=S(o[0]);let r;for(r=0;r<t.length;r+=1){const c=I(o,t,r);a[r]?a[r].p(c,f):(a[r]=U(c),a[r].c(),a[r].m(e,l))}for(;r<a.length;r+=1)a[r].d(1);a.length=t.length}},d(o){o&&u(e),M(a,o)}}}function ne(n){let e,l="Heti Menü",t,a,o,f,r,c,p,i,m="Menü mentése",_,k,Y=S(["Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat","Vasárnap"]),w=[];for(let s=0;s<7;s+=1)w[s]=le(te(n,Y,s));let O=S(Array(5)),d=[];for(let s=0;s<O.length;s+=1)d[s]=q(V(n,O,s));return{c(){e=g("h1"),e.textContent=l,t=A(),a=g("table"),o=g("thead"),f=g("tr");for(let s=0;s<7;s+=1)w[s].c();r=A(),c=g("tbody");for(let s=0;s<d.length;s+=1)d[s].c();p=A(),i=g("button"),i.textContent=m},l(s){e=b(s,"H1",{"data-svelte-h":!0}),j(e)!=="svelte-vfdtr6"&&(e.textContent=l),t=H(s),a=b(s,"TABLE",{});var v=C(a);o=b(v,"THEAD",{});var h=C(o);f=b(h,"TR",{});var z=C(f);for(let E=0;E<7;E+=1)w[E].l(z);z.forEach(u),h.forEach(u),r=H(v),c=b(v,"TBODY",{});var B=C(c);for(let E=0;E<d.length;E+=1)d[E].l(B);B.forEach(u),v.forEach(u),p=H(s),i=b(s,"BUTTON",{"data-svelte-h":!0}),j(i)!=="svelte-pewvzl"&&(i.textContent=m)},m(s,v){y(s,e,v),y(s,t,v),y(s,a,v),T(a,o),T(o,f);for(let h=0;h<7;h+=1)w[h]&&w[h].m(f,null);T(a,r),T(a,c);for(let h=0;h<d.length;h+=1)d[h]&&d[h].m(c,null);y(s,p,v),y(s,i,v),_||(k=N(i,"click",n[2]),_=!0)},p(s,[v]){if(v&7){O=S(Array(5));let h;for(h=0;h<O.length;h+=1){const z=V(s,O,h);d[h]?d[h].p(z,v):(d[h]=q(z),d[h].c(),d[h].m(c,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=O.length}},i:P,o:P,d(s){s&&(u(e),u(t),u(a),u(p),u(i)),M(w,s),M(d,s),_=!1,k()}}}function ae(n){return["Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat","Vasárnap"][n]}function oe(n,e,l){let t=Array(7).fill().map(()=>Array(5).fill("")),a=[];async function o(){const p=await fetch("/api/menu");if(p.ok){const i=await p.json();l(0,t=i.menu.map(m=>m.recipes))}}async function f(){(await fetch("/api/menu",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({menu:t.map((i,m)=>({day:ae(m),recipes:i}))})})).ok||console.error("Failed to save menu")}G(()=>{o(),r()});async function r(){const p=await fetch("/api/recipes");l(1,a=await p.json())}function c(p,i){t[p][i]=$(this),l(0,t),l(1,a)}return[t,a,f,c]}class ce extends X{constructor(e){super(),Z(this,e,oe,ne,x,{})}}export{ce as component};
