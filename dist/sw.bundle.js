if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let f={};const t=e=>i(e,n),d={module:{uri:n},exports:f,require:t};a[n]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(s(...e),f)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"8e5a5ef4fc55848079a168d52388f164"},{url:"946.bundle.js",revision:"b7de763a51bcf81d0f41c842f8ce4cf9"},{url:"app.webmanifest",revision:"5b57e9b86039625eb382cd9c0719a060"},{url:"app~4e5ec22b.bundle.js",revision:"ffbb86f02bf14cee2458f3520b0aa922"},{url:"app~a51fa3f5.bundle.js",revision:"530072f56e99b8ac371d27f73a5c7d25"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"9d6600b2a885983ef027221c98b833b5"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"8541b3ddaa1eb85a38f0ba00b65a1e4b"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"b05be68348d0a27662f8a5af6a42f85d"},{url:"image/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"index.html",revision:"05f93e6bf17f5b0795a85b1aa6558983"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"the-restaurants-cache",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"the-restaurants-images-cache",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
