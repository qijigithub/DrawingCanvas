(this.webpackJsonpdrawingcanvas=this.webpackJsonpdrawingcanvas||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),c=t(3),r=t.n(c),a=(t(8),t(9),t(0)),s=function(){var e,n;function t(t,o){e=t,n=o}return i.a.useEffect((function(){var e=document.querySelector("#canvas"),n=e.getContext("2d"),t=function(t){n.canvas.height=window.innerHeight,n.canvas.width=window.innerWidth,n.fillStyle="white",n.clearRect(0,0,e.width,e.height),n.fillRect(0,0,e.width,e.height)};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),window.addEventListener("load",(function(){var t=document.querySelector("#canvas"),o=t.getContext("2d");o.canvas.width=window.innerWidth,o.canvas.height=window.innerHeight,o.clearRect(0,0,t.width,t.height),o.fillRect(0,0,t.width,t.height);var i=!1;function c(e){i=!0,a(e)}function r(){i=!1,o.beginPath()}function a(t){i&&(t.preventDefault(),o.lineWidth=n,o.lineCap="round","touchmove"===t.type?o.lineTo(t.touches[0].clientX,t.touches[0].clientY):"mousemove"===t.type&&o.lineTo(t.clientX,t.clientY),o.stroke(),o.strokeStyle=e,o.lineWidth=n,o.beginPath(),"touchmove"===t.type?o.moveTo(t.touches[0].clientX,t.touches[0].clientY):"mousemove"===t.type&&o.moveTo(t.clientX,t.clientY))}t.addEventListener("mousedown",c),t.addEventListener("touchstart",c),t.addEventListener("mouseup",r),t.addEventListener("touchend",r),t.addEventListener("mousemove",a),t.addEventListener("touchmove",a)})),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{id:"colorButtonBox",children:[Object(a.jsx)("div",{id:"colorButton",className:"black",onClick:function(){return t("black",5)}}),Object(a.jsx)("div",{id:"colorButton",className:"red",onClick:function(){return t("red",5)}}),Object(a.jsx)("div",{id:"colorButton",className:"green",onClick:function(){return t("green",5)}}),Object(a.jsx)("div",{id:"colorButton",className:"blue",onClick:function(){return t("blue",5)}}),Object(a.jsx)("div",{id:"colorButton",className:"yellow",onClick:function(){return t("yellow",5)}}),Object(a.jsx)("div",{id:"colorButton",className:"purple",onClick:function(){return t("purple",5)}}),Object(a.jsx)("div",{id:"colorButton",className:"grey",onClick:function(){return t("grey",5)}}),Object(a.jsx)("div",{id:"eraserButton",onClick:function(){return t("white",100)}})]}),Object(a.jsx)("canvas",{id:"canvas"})]})},l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){console.log("regist"),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("installed work"),console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),c(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(s,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){console.log("serviceWorker register");var n=new URL(".",window.location.href);if(console.log(n.origin,window.location.origin),n.origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");l?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):(console.log("serviceWorker registerValidSW"),d(n,e))}))}}(),u()},8:function(e,n,t){},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.12487b5d.chunk.js.map