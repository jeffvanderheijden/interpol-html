"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[695],{6944:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),i=n(4705),r=n(7417),l=n(504),s=n(2502);t.default=()=>{const e=(0,a.useRef)(null),t=(0,a.useRef)(null),n=(0,a.useRef)(null),o=(0,l.Z)(),{0:c,1:u}=(0,a.useState)(!1),{0:d,1:g}=(0,a.useState)(!1),{0:p,1:h}=(0,a.useState)(!1),m="/vraag-12",f=()=>{const t=e.current.contentWindow.document.body.innerHTML,n=t.includes("admin"),a=t.includes("verySecurePassword1234"),i=n&&a;u(!!i),i?(g(!0),h(!0),s.Z.set("currentPage",m),setTimeout((()=>{h(!1)}),2e3)):(g(!1),h(!1))};let A=0,v="De gegevens stonden in een .js bestand verstopt? Wat een slechte beveiliging! JavaScript wordt gebruikt om websites interactief te maken. Het is een programmeertaal die in de browser draait. Met JavaScript kun je bijvoorbeeld formulieren valideren, elementen toevoegen en verwijderen en nog veel meer. Het is niet bedoeld om wachtwoorden in op te slaan!";const y=()=>{A<353&&(n.current.innerHTML+=v.charAt(A),A++,setTimeout(y,50))};return(0,a.useEffect)((()=>{y()}),[]),a.createElement(a.Fragment,null,a.createElement(i.Z,{cssState:"/* CSS */",jsState:"// JavaScript",htmlState:"\x3c!-- HTML --\x3e",frameRef:e,validateHTML:f,validateCSS:f,validateJS:f,explanationTopBar:"",explanationSubtitle:"",explanationTitle:"",explanationTime:"",explanation:()=>a.createElement(a.Fragment,null,a.createElement("div",{className:"hackerWrapper"},a.createElement("img",{className:"hacker",src:r.Z,alt:"H@ck3D",ref:o.ref})),a.createElement("p",{ref:n})),assignment:()=>a.createElement(a.Fragment,null,a.createElement("div",{className:"step"},a.createElement("input",{type:"checkbox",disabled:!0,ref:t,checked:c}),a.createElement("p",null,a.createElement("a",{href:"/static/downloads/inlogsysteem.zip",style:{color:"#FFF"},download:!0},"Download deze bestanden.")," Open ze in een code editor zoals Visual Studio Code. Zodra je de gebruikersnaam en wachtwoord hebt gevonden vul je die hiernaast in."))),allowedEditors:["html"],stepsComplete:d,successScreen:p,nextPage:m,hacked:!0}))};const o=()=>a.createElement("title",null,"Vraag 12")},504:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i={};function r(e){const[t,n]=(0,a.useState)(e),[r,l]=(0,a.useState)((()=>()=>{})),[s,o]=(0,a.useState)((()=>()=>{}));return{ref:(0,a.useCallback)((e=>{if(!e)return;const n=i.PowerGlitch.glitch(e,t);l((()=>n.startGlitch)),o((()=>n.stopGlitch))}),[t]),startGlitch:r,stopGlitch:s,setOptions:n}}!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.PowerGlitch=e.mergeOptions=void 0;const t=(e="always")=>({playMode:e,createContainers:!0,hideOverflow:!1,timing:"always"===e?{duration:2e3,iterations:1/0}:{duration:250,iterations:1},glitchTimeSpan:"always"===e?{start:.5,end:.7}:{start:0,end:1},shake:{velocity:15,amplitudeX:.2,amplitudeY:.2},slice:"click"===e?{count:15,velocity:20,minHeight:.02,maxHeight:.15,hueRotate:!0}:{count:6,velocity:15,minHeight:.02,maxHeight:.15,hueRotate:!0},pulse:!1}),n=(e,t)=>{if(!e.glitchTimeSpan)return 1;const n=e.glitchTimeSpan.start,a=e.glitchTimeSpan.end;if(t<n||t>a)return 0;const i=n+(a-n)/2;return t<i?(t-n)/(i-n):(a-t)/(a-i)},a=(e,t)=>2*(Math.random()-.5)*n(e,t),i=({minHeight:e,maxHeight:t,minWidth:n,maxWidth:a})=>{const i=Math.floor(Math.random()*(100*(t-e)+1))+100*e,r=Math.floor(Math.random()*(100*(a-n)+1))+100*n,l=Math.floor(Math.random()*(100-i)),s=Math.floor(Math.random()*(100-r));return`polygon(${`${s+r}% ${l}%`},${`${s+r}% ${l+i}%`},${`${s}% ${l+i}%`},${`${s}% ${l}%`})`},r=e=>e.pulse?{steps:[{transform:"scale(1)",opacity:"1"},{transform:`scale(${e.pulse.scale})`,opacity:"0"}],timing:Object.assign(Object.assign({},e.timing),{delay:(e.glitchTimeSpan?e.glitchTimeSpan.start:0)*e.timing.duration,easing:"ease-in-out"})}:null,l=e=>{if(!e.shake)return{steps:[],timing:{}};const t=Math.floor(e.shake.velocity*e.timing.duration/1e3)+1,n=[];for(let i=0;i<t;++i){const r=a(e,i/t)*e.shake.amplitudeX*100,l=a(e,i/t)*e.shake.amplitudeY*100;n.push({transform:`translate3d(${r}%,${l}%,0)`})}return{steps:n,timing:Object.assign({easing:`steps(${t},jump-start)`},e.timing)}},s=e=>[l(e),r(e),...Array.from({length:e.slice.count}).map((()=>(e=>{const t=Math.floor(e.slice.velocity*e.timing.duration/1e3)+1,r=[];for(let l=0;l<t;++l){if(0===n(e,l/t)){r.push({opacity:"0",transform:"none",clipPath:"unset"});continue}const s={opacity:"1",transform:`translate3d(${30*a(e,l/t)}%,0,0)`,clipPath:i({minHeight:e.slice.minHeight,maxHeight:e.slice.maxHeight,minWidth:1,maxWidth:1})};e.slice.hueRotate&&(s.filter=`hue-rotate(${Math.floor(360*a(e,l/t))}deg)`),r.push(s)}return{steps:r,timing:Object.assign({easing:`steps(${t},jump-start)`},e.timing)}})(e)))].filter((e=>null!==e));e.mergeOptions=(...t)=>{const n=e=>e&&"object"==typeof e;return t.reduce(((t,a)=>(Object.keys(a).forEach((i=>{n(t[i])&&n(a[i])?t[i]=(0,e.mergeOptions)(t[i],a[i]):void 0!==a[i]&&(t[i]=a[i])})),t)),{})};const o=(e,t,n)=>{const{glitched:a,container:i,layersContainer:r}=((e,t)=>{var n,a;if(!t.createContainers)return{container:e,layersContainer:e,glitched:e.firstElementChild};if(!e.dataset.glitched){const t=document.createElement("div"),a=document.createElement("div");return getComputedStyle(e).getPropertyValue("display").match(/^inline/)&&(a.style.display="inline-block"),a.appendChild(t),null===(n=e.parentElement)||void 0===n||n.insertBefore(a,e),t.prepend(e),{container:a,layersContainer:t,glitched:e}}const i=e.parentElement,r=null===(a=e.parentElement)||void 0===a?void 0:a.parentElement;for(;i.children.length>1;)i.removeChild(i.children[1]);return i.firstElementChild.getAnimations().forEach((e=>e.cancel())),{container:r,layersContainer:i,glitched:e}})(e,n);r.style.display="grid",n.hideOverflow&&(i.style.overflow="hidden"),n.html&&(a.innerHTML=n.html),a.style.gridArea="1/1/-1/-1";const l=a.cloneNode(!0);l.style.gridArea="1/1/-1/-1",l.style.userSelect="none",l.style.pointerEvents="none",l.style.opacity="0";for(let c=0;c<t.length-1;++c){const e=l.cloneNode(!0);r.appendChild(e)}const s=()=>{t.forEach(((e,t)=>{r.children[t].animate(e.steps,e.timing)}))},o=()=>{t.forEach(((e,t)=>{r.children[t].getAnimations().forEach((e=>{e.cancel()}))}))};switch(i.onmouseenter=null,i.onmouseleave=null,i.onclick=null,n.playMode){case"always":s();break;case"hover":i.onmouseenter=s,i.onmouseleave=o;break;case"click":i.onclick=()=>{o(),s()}}return e.dataset.glitched="1",{container:i,startGlitch:s,stopGlitch:o}};e.PowerGlitch={glitch:(n=".powerglitch",a={})=>{const i=(0,e.mergeOptions)(t(a.playMode),a);let r=[];"string"==typeof n?r=Array.from(document.querySelectorAll(n)):n instanceof NodeList?r=Array.from(n):Array.isArray(n)?r=n:n instanceof HTMLElement&&(r=[n]);const l=s(i),c=r.map((e=>o(e,l,i)));return{containers:c.map((e=>e.container)),startGlitch:()=>c.forEach((e=>e.startGlitch())),stopGlitch:()=>c.forEach((e=>e.stopGlitch()))}},generateLayers:s,getDefaultOptions:t}}(i)},7417:function(e,t){t.Z="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-vraag-12-js-229c5ea4198c1ee8efbb.js.map