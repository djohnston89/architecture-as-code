(()=>{"use strict";var e,t,r,a,o,c={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=c,f.c=n,e=[],f.O=(t,r,a,o)=>{if(!r){var c=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var n=!0,d=0;d<r.length;d++)(!1&o||c>=o)&&Object.keys(f.O).every((e=>f.O[e](r[d])))?r.splice(d--,1):(n=!1,o<c&&(c=o));if(n){e.splice(i--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,f.d(o,c),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({85:"1f391b9e",133:"e0719818",178:"309258c7",269:"a1f3cb2d",352:"65541770",361:"9dd9a767",368:"a94703ab",414:"393be207",425:"c2d2b46f",518:"a7bd4aaa",592:"common",629:"aba21aa0",661:"5e95c892",671:"0e384e19",702:"0d11b542",790:"fcb8443a",849:"6c6fce8b",910:"299c8e91",918:"17896441",980:"a7456010"}[e]||e)+"."+{16:"6127db46",85:"052268b7",109:"0c70701a",111:"be0e5a97",132:"47ca9e4a",133:"bb2890b2",138:"51d74d37",178:"d053dd31",183:"f1c6f179",238:"f13b07ce",240:"870c98ac",255:"29ce2c53",269:"8561e0bf",326:"2e39acb1",352:"0901316c",361:"3e522bf3",368:"d985a5d1",414:"9c67bd60",425:"f98a1853",504:"d4a58f15",518:"ced71ed2",592:"5a569ff4",619:"65d461f4",629:"07cbdb4f",648:"02a4ea42",661:"6b9dc54a",671:"73553198",693:"c5d2daab",696:"135e609a",700:"762954e8",702:"91a804a8",706:"3201a685",763:"4095aab1",772:"1d5bd77e",790:"fd5a72d2",820:"0b6d97f1",849:"bee485dc",886:"535a033c",893:"3543fc2a",910:"1194a844",918:"76e3faeb",943:"0f8e0113",955:"1dee8fea",978:"cfcfc241",980:"eb2ff304",985:"c477d6a2"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docs:",f.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,d;if(void 0!==r)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),d&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/architecture-as-code/",f.gca=function(e){return e={17896441:"918",65541770:"352","1f391b9e":"85",e0719818:"133","309258c7":"178",a1f3cb2d:"269","9dd9a767":"361",a94703ab:"368","393be207":"414",c2d2b46f:"425",a7bd4aaa:"518",common:"592",aba21aa0:"629","5e95c892":"661","0e384e19":"671","0d11b542":"702",fcb8443a:"790","6c6fce8b":"849","299c8e91":"910",a7456010:"980"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=f.p+f.u(t),n=new Error;f.l(c,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],d=r[2],b=0;if(c.some((t=>0!==e[t]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(d)var i=d(f)}for(t&&t(r);b<c.length;b++)o=c[b],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(i)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();