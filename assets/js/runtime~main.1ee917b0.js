(()=>{"use strict";var e,a,t,c,r,d={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=d,b.c=f,e=[],b.O=(a,t,c,r)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],c=e[i][1],r=e[i][2];for(var f=!0,o=0;o<t.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(f=!1,r<d&&(d=r));if(f){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,c,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};a=a||[null,t({}),t([]),t(t)];for(var f=2&c&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(r,d),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({8:"418699ca",53:"935f2afb",141:"a5db8992",244:"903a8b3f",394:"6814a6f0",560:"bc423e1f",639:"abecdab9",661:"4f307e4d",708:"34db6aec",710:"a23079f0",905:"c6535077",1438:"d272bdb8",1926:"228659e5",2153:"545e0e9c",2166:"69318953",2288:"d22faf81",2612:"8219c730",2782:"fbf2aa84",3267:"8898ef3c",3751:"3720c009",3822:"d308fce0",4121:"55960ee5",4144:"c8c91ba7",4174:"7e0c78e5",4912:"ba3567f8",5207:"d7c30921",5671:"3d0e7f77",5925:"446aeb11",6025:"4f6e21c4",6060:"8b8b5a19",6093:"959a69ab",6425:"f07bd84b",6552:"2ddc9422",6849:"4a9247d0",6954:"7ae72938",7054:"9dd8a0d2",7405:"0873e228",7836:"b84b9a58",7918:"17896441",8059:"211590dd",8386:"7ecbfa63",8413:"f51c2b43",8421:"e41db38c",9176:"71f75941",9203:"bcfbe6b9",9265:"ed6c1c16",9514:"1be78505",9588:"2d963003",9659:"a547883e",9924:"df203c0f"}[e]||e)+"."+{8:"ec61babf",53:"6e47e257",141:"cd71fe9d",244:"88d683a2",394:"babfeb70",560:"37999176",639:"61533fab",661:"f42802c6",708:"32f210ad",710:"16f501e5",905:"dbdcd6ff",1438:"7daf9b9c",1926:"b853e40f",2153:"4d7a3810",2166:"022eb9e5",2288:"6fa56b8d",2572:"a0761333",2612:"e072c417",2782:"57571302",3267:"885bfb58",3751:"3d290d32",3822:"e0c3bb84",4121:"3898c397",4144:"d987e826",4174:"2929780f",4611:"8a37eccc",4912:"2b0f7724",4972:"469f1942",5207:"d358c244",5671:"71e037d3",5684:"43180bea",5925:"0a206ab5",6025:"1014b7ab",6060:"be49f493",6093:"b6916601",6316:"2c98e34e",6425:"455b21a0",6552:"785acb92",6849:"c832b701",6954:"1fe3fb59",7054:"c3e3708a",7405:"40e0fa80",7724:"e0f1ae7f",7836:"57529c5c",7918:"79e8f33a",8059:"7184e433",8386:"9b81e261",8413:"b7995dcd",8421:"a9b1a045",9176:"8a5b8d2b",9203:"0a644c02",9265:"edf21562",9487:"27514623",9514:"4fc2e00c",9588:"94bfb011",9659:"a649be01",9924:"82e80b7a"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},r="nyu-cs-wiki:",b.l=(e,a,t,d)=>{if(c[e])c[e].push(a);else{var f,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",r+t),f.src=e),c[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(s);var r=c[e];if(delete c[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918",69318953:"2166","418699ca":"8","935f2afb":"53",a5db8992:"141","903a8b3f":"244","6814a6f0":"394",bc423e1f:"560",abecdab9:"639","4f307e4d":"661","34db6aec":"708",a23079f0:"710",c6535077:"905",d272bdb8:"1438","228659e5":"1926","545e0e9c":"2153",d22faf81:"2288","8219c730":"2612",fbf2aa84:"2782","8898ef3c":"3267","3720c009":"3751",d308fce0:"3822","55960ee5":"4121",c8c91ba7:"4144","7e0c78e5":"4174",ba3567f8:"4912",d7c30921:"5207","3d0e7f77":"5671","446aeb11":"5925","4f6e21c4":"6025","8b8b5a19":"6060","959a69ab":"6093",f07bd84b:"6425","2ddc9422":"6552","4a9247d0":"6849","7ae72938":"6954","9dd8a0d2":"7054","0873e228":"7405",b84b9a58:"7836","211590dd":"8059","7ecbfa63":"8386",f51c2b43:"8413",e41db38c:"8421","71f75941":"9176",bcfbe6b9:"9203",ed6c1c16:"9265","1be78505":"9514","2d963003":"9588",a547883e:"9659",df203c0f:"9924"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>c=e[a]=[t,r]));t.push(c[2]=r);var d=b.p+b.u(a),f=new Error;b.l(d,(t=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var r=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",f.name="ChunkLoadError",f.type=r,f.request=d,c[1](f)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var c,r,d=t[0],f=t[1],o=t[2],n=0;if(d.some((a=>0!==e[a]))){for(c in f)b.o(f,c)&&(b.m[c]=f[c]);if(o)var i=o(b)}for(a&&a(t);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunknyu_cs_wiki=self.webpackChunknyu_cs_wiki||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();