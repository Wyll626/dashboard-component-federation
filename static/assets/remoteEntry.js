const u="modulepreload",m=function(t){return"/"+t},_={},p=function(r,s,a){if(!s||s.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=m(e),e in _)return;_[e]=!0;const n=e.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!a)for(let l=o.length-1;l>=0;l--){const c=o[l];if(c.href===e&&(!n||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":u,n||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),n)return new Promise((l,c)=>{i.addEventListener("load",l),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})},g=new Set(["Module","__esModule","default","_export_sfc"]);let h={"./Button":()=>(v([]),y("./__federation_expose_Button-b4635153.js").then(t=>Object.keys(t).every(r=>g.has(r))?()=>t.default:()=>t))};const d={},v=t=>{const r=import.meta.url;if(typeof r>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const s=r.substring(0,r.lastIndexOf("remoteEntry.js"));t.forEach(a=>{const o=s+a;if(o in d)return;d[o]=!0;const e=document.head.appendChild(document.createElement("link"));e.href=o,e.rel="stylesheet"})};async function y(t){return p(()=>import(t),[])}const b=t=>{if(!h[t])throw new Error("Can not find remote module "+t);return h[t]()},w=t=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(t).forEach(([r,s])=>{const a=Object.keys(s)[0],o=Object.values(s)[0],e=o.scope||"default";globalThis.__federation_shared__[e]=globalThis.__federation_shared__[e]||{};const n=globalThis.__federation_shared__[e];(n[r]=n[r]||{})[a]=o})};export{v as dynamicLoadingCss,b as get,w as init};