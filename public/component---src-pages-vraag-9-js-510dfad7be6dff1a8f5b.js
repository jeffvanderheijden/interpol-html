"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[610],{6832:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u}});var l=t(7294),a=t(4705),r=t(7736),i=t(2502);n.default=()=>{const e=(0,l.useRef)(null),n=(0,l.useRef)(null),t=(0,l.useRef)(null),u=(0,l.useRef)(null),c=(0,l.useRef)(null),{0:s,1:m}=(0,l.useState)(!1),{0:d,1:o}=(0,l.useState)(!1),{0:p,1:E}=(0,l.useState)(!1),{0:b,1:g}=(0,l.useState)(!1),{0:v,1:k}=(0,l.useState)(!1),{0:S,1:h}=(0,l.useState)(!1),f="/vraag-10",y=()=>{const n=e.current.contentWindow.document.body.innerHTML,t=!!n.includes('<div id="uniqueDiv">'),l=e.current.contentWindow.document.getElementsByTagName("style")[0].innerHTML,a=l.includes("#uniqueDiv"),r=l.includes("background-color: red;"),u=a&&r,c=!!n.includes('<div class="notUnique">'),s=l.includes(".notUnique"),d=l.includes("color: blue;"),p=s&&d;m(!!t),o(!!u),E(!!c),g(!!p),t&&u&&c&&p?(k(!0),h(!0),i.Z.set("currentPage",f),setTimeout((()=>{h(!1)}),2e3)):(k(!1),h(!1))};return l.createElement(l.Fragment,null,l.createElement(a.Z,{cssState:"/* CSS */",jsState:"// JavaScript",htmlState:"\x3c!-- HTML --\x3e",frameRef:e,validateHTML:y,validateCSS:y,validateJS:y,explanationTopBar:"Leren",explanationSubtitle:"Introductie CSS",explanationTitle:"ID's & Classes",explanationTime:"5 min",explanation:()=>l.createElement(l.Fragment,null,l.createElement("p",null,"We hebben tot nu toe CSS geschreven die iedere keer elk element styling gaf. (Bijvoorbeeld alle h1 elementen. Of alle p elementen). Maar wat nou als we slechts 1 van die elementen willen stylen?"),l.createElement("br",null),l.createElement("br",null),l.createElement("h3",null,"ID's"),l.createElement("br",null),l.createElement("p",null,'Om een specifiek element te kunnen stylen, moeten we deze kunnen "identificeren". Hiervoor wordt het "id" attribuut gebruikt. '),l.createElement("br",null),l.createElement(r.Z,{type:"assignment",language:"xml",readOnly:!0,lineWrapping:!0,value:'<div id="mijnId">Dit is een div met een id "mijnId"</div>'}),l.createElement("br",null),l.createElement("p",null,"Let op! Een id mag maar 1x per document voorkomen. Je kunt dus niet meerdere elementen hetzelfde id meegeven. Daarvoor gebruiken we iets anders, namelijk..."),l.createElement("br",null),l.createElement("br",null),l.createElement("h3",null,"Classes"),l.createElement("br",null),l.createElement("p",null,"Classes zijn in tegenstelling tot id's juist bedoeld om aan meerdere elementen mee te geven. Door een class te stylen kun je meerdere elementen tegerlijkertijd stylen."),l.createElement("br",null),l.createElement(r.Z,{type:"assignment",language:"xml",readOnly:!0,lineWrapping:!0,value:'<div class="mijnClass">Dit is een div met een class "mijnClass" </div>'}),l.createElement("br",null),l.createElement("br",null),l.createElement("h3",null,"Styling toepassen"),l.createElement("br",null),l.createElement("p",null,"Om de elementen met een id aan te roepen in onze CSS gebruiken we de ",l.createElement("code",null,"#")),l.createElement("br",null),l.createElement(r.Z,{type:"assignment",language:"css",readOnly:!0,lineWrapping:!0,value:"#mijnDiv {\n    background-color: red;\n}"}),l.createElement("br",null),l.createElement("p",null,"Om de elementen met een class aan te roepen in onze CSS gebruiken we de ",l.createElement("code",null,".")),l.createElement("br",null),l.createElement(r.Z,{type:"assignment",language:"css",readOnly:!0,lineWrapping:!0,value:".mijnClass {\n    background-color: green;\n}"}),l.createElement("br",null)),assignment:()=>l.createElement(l.Fragment,null,l.createElement("div",{className:"step"},l.createElement("input",{type:"checkbox",disabled:!0,ref:n,checked:s}),l.createElement("p",null,"Maak een ",l.createElement("code",null,"<div>"),' element aan met een id attribuut "uniqueDiv".')),l.createElement("div",{className:"step"},l.createElement("input",{type:"checkbox",disabled:!0,ref:t,checked:d}),l.createElement("p",null,"Maak de achtergrondkleur van het element met id uniqueDiv rood.")),l.createElement("div",{className:"step"},l.createElement("input",{type:"checkbox",disabled:!0,ref:u,checked:p}),l.createElement("p",null,"Maak nu 3 ",l.createElement("code",null,"<div>"),' elementen aan, geef de eerste twee een class attribuut "notUnique".')),l.createElement("div",{className:"step"},l.createElement("input",{type:"checkbox",disabled:!0,ref:c,checked:b}),l.createElement("p",null,"Maak de kleur van de elementen met class notUnique blauw.")),l.createElement("p",null,"Hier zie je dat de kleur van elk element met de class notUnique veranderd, maar niet dezelfde div elementen die de class niet hebben.")),allowedEditors:["html","css"],stepsComplete:v,successScreen:S,nextPage:f}))};const u=()=>l.createElement("title",null,"Vraag 9")}}]);
//# sourceMappingURL=component---src-pages-vraag-9-js-510dfad7be6dff1a8f5b.js.map