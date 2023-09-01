import{s as R,n as H,o as J,f as N}from"../chunks/scheduler.292d8fbe.js";import{S as K,i as Q,g as T,s as I,h as y,x as O,c as S,j as $,f,k as b,a as C,A as z,m as D,n as A,l as F,y as j,z as W,o as G}from"../chunks/index.e8f90f00.js";import{e as M}from"../chunks/each.e59479a4.js";function L(a,l,n){const s=a.slice();return s[11]=l[n],s}function P(a,l,n){const s=a.slice();return s[14]=l[n],s}function U(a,l,n){const s=a.slice();return s[17]=l[n],s}function V(a){let l,n,s=a[17].name+"",c,u,_,d,h,k,w,r,E;function m(){return a[6](a[17])}return{c(){l=T("div"),n=T("p"),c=D(s),u=I(),_=T("button"),d=T("img"),w=I(),this.h()},l(e){l=y(e,"DIV",{});var o=$(l);n=y(o,"P",{class:!0});var t=$(n);c=A(t,s),t.forEach(f),u=S(o),_=y(o,"BUTTON",{});var p=$(_);d=y(p,"IMG",{src:!0,alt:!0,style:!0}),p.forEach(f),w=S(o),o.forEach(f),this.h()},h(){b(n,"class","text-left"),N(d.src,h=a[17].image)||b(d,"src",h),b(d,"alt",k=a[17].name),F(d,"width","70px"),F(d,"height","90px")},m(e,o){C(e,l,o),j(l,n),j(n,c),j(l,u),j(l,_),j(_,d),j(l,w),r||(E=W(_,"click",m),r=!0)},p(e,o){a=e,o&2&&s!==(s=a[17].name+"")&&G(c,s),o&2&&!N(d.src,h=a[17].image)&&b(d,"src",h),o&2&&k!==(k=a[17].name)&&b(d,"alt",k)},d(e){e&&f(l),r=!1,E()}}}function x(a){let l,n=a[14].name+"",s;return{c(){l=T("span"),s=D(n),this.h()},l(c){l=y(c,"SPAN",{class:!0,style:!0});var u=$(l);s=A(u,n),u.forEach(f),this.h()},h(){b(l,"class","badge svelte-193k8i0"),F(l,"background-color",a[14].color)},m(c,u){C(c,l,u),j(l,s)},p(c,u){u&1&&n!==(n=c[14].name+"")&&G(s,n),u&1&&F(l,"background-color",c[14].color)},d(c){c&&f(l)}}}function B(a){let l,n=a[11].title+"",s,c,u,_,d,h,k,w,r,E=`remove from favorites\r
    `,m,e,o=M(a[11].tags),t=[];for(let i=0;i<o.length;i+=1)t[i]=x(P(a,o,i));function p(){return a[7](a[11])}return{c(){l=T("li"),s=D(n),c=I();for(let i=0;i<t.length;i+=1)t[i].c();u=I(),_=T("div"),d=I(),h=T("iframe"),w=I(),r=T("button"),r.textContent=E,this.h()},l(i){l=y(i,"LI",{class:!0});var v=$(l);s=A(v,n),v.forEach(f),c=S(i);for(let q=0;q<t.length;q+=1)t[q].l(i);u=S(i),_=y(i,"DIV",{class:!0}),$(_).forEach(f),d=S(i),h=y(i,"IFRAME",{title:!0,src:!0,frameborder:!0,scrolling:!0,height:!0,width:!0});var g=$(h);g.forEach(f),w=S(i),r=y(i,"BUTTON",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-h1ad22"&&(r.textContent=E),this.h()},h(){b(l,"class","text-purple-800 text-center text-lg my-2 border-t-4 bg-green-100"),b(_,"class","my-2"),b(h,"title","mk1"),N(h.src,k=a[11].clip_source=="T"?`https://clips.twitch.tv/embed?clip=${a[11].clip}&parent=localhost`:`http://www.youtube.com/embed/${a[11].clip}`)||b(h,"src",k),b(h,"frameborder","0"),h.allowFullscreen="true",b(h,"scrolling","no"),b(h,"height",a[3]),b(h,"width",a[2]),b(r,"class","bg-orange-400 hover:bg-orange-600 text-white font-bold mt-2 mb-6 py-2 px-4 rounded-full")},m(i,v){C(i,l,v),j(l,s),C(i,c,v);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(i,v);C(i,u,v),C(i,_,v),C(i,d,v),C(i,h,v),C(i,w,v),C(i,r,v),m||(e=W(r,"click",p),m=!0)},p(i,v){if(a=i,v&1&&n!==(n=a[11].title+"")&&G(s,n),v&1){o=M(a[11].tags);let g;for(g=0;g<o.length;g+=1){const q=P(a,o,g);t[g]?t[g].p(q,v):(t[g]=x(q),t[g].c(),t[g].m(u.parentNode,u))}for(;g<t.length;g+=1)t[g].d(1);t.length=o.length}v&1&&!N(h.src,k=a[11].clip_source=="T"?`https://clips.twitch.tv/embed?clip=${a[11].clip}&parent=localhost`:`http://www.youtube.com/embed/${a[11].clip}`)&&b(h,"src",k),v&4&&b(h,"width",a[2])},d(i){i&&(f(l),f(c),f(u),f(_),f(d),f(h),f(w),f(r)),z(t,i),m=!1,e()}}}function X(a){let l,n="Choose your favorite characters:",s,c,u,_,d="Favorite combos:",h,k,w=M(a[1]),r=[];for(let e=0;e<w.length;e+=1)r[e]=V(U(a,w,e));let E=M(a[0]),m=[];for(let e=0;e<E.length;e+=1)m[e]=B(L(a,E,e));return{c(){l=T("h2"),l.textContent=n,s=I(),c=T("div");for(let e=0;e<r.length;e+=1)r[e].c();u=I(),_=T("h1"),_.textContent=d,h=I(),k=T("ul");for(let e=0;e<m.length;e+=1)m[e].c();this.h()},l(e){l=y(e,"H2",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-16ppbfh"&&(l.textContent=n),s=S(e),c=y(e,"DIV",{class:!0});var o=$(c);for(let p=0;p<r.length;p+=1)r[p].l(o);o.forEach(f),u=S(e),_=y(e,"H1",{class:!0,"data-svelte-h":!0}),O(_)!=="svelte-16j2fta"&&(_.textContent=d),h=S(e),k=y(e,"UL",{});var t=$(k);for(let p=0;p<m.length;p+=1)m[p].l(t);t.forEach(f),this.h()},h(){b(l,"class","my-8 text-lg text-purple-800 font-bold"),b(c,"class","grid grid-rows-2 grid-flow-col gap-4"),b(_,"class","my-8 text-lg text-purple-800 font-bold")},m(e,o){C(e,l,o),C(e,s,o),C(e,c,o);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(c,null);C(e,u,o),C(e,_,o),C(e,h,o),C(e,k,o);for(let t=0;t<m.length;t+=1)m[t]&&m[t].m(k,null)},p(e,[o]){if(o&34){w=M(e[1]);let t;for(t=0;t<w.length;t+=1){const p=U(e,w,t);r[t]?r[t].p(p,o):(r[t]=V(p),r[t].c(),r[t].m(c,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=w.length}if(o&29){E=M(e[0]);let t;for(t=0;t<E.length;t+=1){const p=L(e,E,t);m[t]?m[t].p(p,o):(m[t]=B(p),m[t].c(),m[t].m(k,null))}for(;t<m.length;t+=1)m[t].d(1);m.length=E.length}},i:H,o:H,d(e){e&&(f(l),f(s),f(c),f(u),f(_),f(h),f(k)),z(r,e),z(m,e)}}}function Y(a,l,n){let s=[],c=[],u=[],_=[],d=window.innerWidth,h=Math.round(d/2).toString();d<930&&(h=d.toString());let k=Math.round(h/1.64).toString();J(async()=>{let e={method:"GET",headers:{"Content-Type":"application/json",authorization:`Token ${localStorage.getItem("auth_token")}`}};const t=await fetch("http://127.0.0.1:8000/api/v1/combos/?is_favorited=1",e);n(0,s=await t.json()),_=[...s],c=s.map(p=>p.character),n(1,u=[...new Map(c.map(p=>[p.id,p])).values()])});const w=async e=>{let o=`http://localhost:8000/api/v1/combos/${e.id}/favorite/`,t={method:"DELETE",headers:{"Content-Type":"application/json",authorization:`Token ${localStorage.getItem("auth_token")}`}};await fetch(o,t).catch(g=>console.log(g));let p={method:"GET",headers:{"Content-Type":"application/json",authorization:`Token ${localStorage.getItem("auth_token")}`}};const v=await fetch("http://127.0.0.1:8000/api/v1/combos/?is_favorited=1",p);n(0,s=await v.json())},r=e=>{n(0,s=_.filter(o=>o.character.name==e))};return[s,u,h,k,w,r,e=>r(e.name),e=>w(e)]}class le extends K{constructor(l){super(),Q(this,l,Y,X,R,{})}}export{le as component};
