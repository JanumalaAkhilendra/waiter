!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.waiter=t():e.waiter=t()}(self,(function(){return(()=>{var e={705:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(s)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);s&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},880:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}e.exports=function(e){var n,s,r=(s=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var s,r,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(o.push(s.value),!t||o.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw r}}return o}}(n,s)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t(e,n):void 0}}(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[1],a=r[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),A="/*# ".concat(l," */"),u=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(u).concat([A]).join("\n")}return[o].join("\n")}},88:function(e,t){!function(e){function t(e){void 0!==e.length?this._targetElement=e:this._targetElement=[e],void 0===window._progressjsId&&(window._progressjsId=1),void 0===window._progressjsIntervals&&(window._progressjsIntervals={}),this._options={theme:"blue",overlayMode:!1,considerTransition:!0}}function n(){void 0!==this._onBeforeStartCallback&&this._onBeforeStartCallback.call(this),p.call(this);for(var e=0,t=this._targetElement.length;e<t;e++)s.call(this,this._targetElement[e])}function s(e){if(!e.hasAttribute("data-progressjs")){var t=c.call(this,e);e.setAttribute("data-progressjs",window._progressjsId);var n=document.createElement("div");n.className="progressjs-progress progressjs-theme-"+this._options.theme,"body"===e.tagName.toLowerCase()?n.style.position="fixed":n.style.position="absolute",n.setAttribute("data-progressjs",window._progressjsId);var s=document.createElement("div");s.className="progressjs-inner";var r=document.createElement("div");r.className="progressjs-percent",r.innerHTML="1%",s.appendChild(r),this._options.overlayMode&&"body"===e.tagName.toLowerCase()?(n.style.left=0,n.style.right=0,n.style.top=0,n.style.bottom=0):(n.style.left=t.left+"px",n.style.top=t.top+"px","BODY"==e.nodeName?n.style.width="100%":n.style.width=t.width+"px",this._options.overlayMode&&(n.style.height=t.height+"px")),n.appendChild(s),document.querySelector(".progressjs-container").appendChild(n),o(e,1),++window._progressjsId}}function r(e){for(var t=0,n=this._targetElement.length;t<n;t++)o.call(this,this._targetElement[t],e)}function o(e,t){var n=this;t>=100&&(t=100),e.hasAttribute("data-progressjs")&&setTimeout((function(){void 0!==n._onProgressCallback&&n._onProgressCallback.call(n,e,t),(s=a(e)).style.width=parseInt(t)+"%";var s=s.querySelector(".progressjs-percent"),r=parseInt(s.innerHTML.replace("%",""));!function(e,t,n){var s=!0;t>n&&(s=!1);var r=10;!function e(t,n,o){var a=Math.abs(n-o);a<3?r=30:a<20?r=20:intervanIn=1,n-o!=0&&(t.innerHTML=(s?++n:--n)+"%",setTimeout((function(){e(t,n,o)}),r))}(e,t,n)}(s,r,parseInt(t))}),50)}function a(e){var t=parseInt(e.getAttribute("data-progressjs"));return document.querySelector('.progressjs-container > .progressjs-progress[data-progressjs="'+t+'"] > .progressjs-inner')}function i(e,t){var n=this,s=this._targetElement[0];if(s){var r=parseInt(s.getAttribute("data-progressjs"));void 0!==window._progressjsIntervals[r]&&clearInterval(window._progressjsIntervals[r]),window._progressjsIntervals[r]=setInterval((function(){l.call(n,e)}),t)}}function l(e){for(var t=0,n=this._targetElement.length;t<n;t++){var s=this._targetElement[t];if(s.hasAttribute("data-progressjs")){var r=a(s),i=parseInt(r.style.width.replace("%",""));i&&o.call(this,s,i+(e||1))}}}function A(){void 0!==this._onBeforeEndCallback&&(!0===this._options.considerTransition?a(this._targetElement[0]).addEventListener(function(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]}(),this._onBeforeEndCallback,!1):this._onBeforeEndCallback.call(this));var e=this._targetElement[0];if(e){for(var t=parseInt(e.getAttribute("data-progressjs")),n=0,s=this._targetElement.length;n<s;n++){var r=this._targetElement[n],i=a(r);if(!i)return;var l=parseInt(i.style.width.replace("%","")),A=1;l<100&&(o.call(this,r,100),A=500),function(e,t){setTimeout((function(){e.parentNode.className+=" progressjs-end",setTimeout((function(){e.parentNode.parentNode.removeChild(e.parentNode),t.removeAttribute("data-progressjs")}),1e3)}),A)}(i,r)}if(window._progressjsIntervals[t])try{clearInterval(window._progressjsIntervals[t]),window._progressjsIntervals[t]=null,delete window._progressjsIntervals[t]}catch(e){}}}function u(){var e=this._targetElement[0];if(e){for(var t=parseInt(e.getAttribute("data-progressjs")),n=0,s=this._targetElement.length;n<s;n++){var r=this._targetElement[n],o=a(r);if(!o)return;!function(e,t){e.parentNode.className+=" progressjs-end",setTimeout((function(){e.parentNode.parentNode.removeChild(e.parentNode),t.removeAttribute("data-progressjs")}),1e3)}(o,r)}if(window._progressjsIntervals[t])try{clearInterval(window._progressjsIntervals[t]),window._progressjsIntervals[t]=null,delete window._progressjsIntervals[t]}catch(e){}}}function p(){if(!document.querySelector(".progressjs-container")){var e=document.createElement("div");e.className="progressjs-container",document.body.appendChild(e)}}function c(e){var t={};"body"===e.tagName.toLowerCase()?(t.width=e.clientWidth,t.height=e.clientHeight):(t.width=e.offsetWidth,t.height=e.offsetHeight);for(var n=0,s=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft,s+=e.offsetTop,e=e.offsetParent;return t.top=s,t.left=n,t}var d=function(e){if("object"==typeof e)return new t(e);if("string"==typeof e){var n=document.querySelectorAll(e);if(n)return new t(n);throw new Error("There is no element with given selector.")}return new t(document.body)};d.version="0.1.0",d.fn=t.prototype={clone:function(){return new t(this)},setOption:function(e,t){return this._options[e]=t,this},setOptions:function(e){return this._options=function(e,t){var n={};for(var s in e)n[s]=e[s];for(var s in t)n[s]=t[s];return n}(this._options,e),this},start:function(){return n.call(this),this},set:function(e){return r.call(this,e),this},increase:function(e){return l.call(this,e),this},autoIncrease:function(e,t){return i.call(this,e,t),this},end:function(){return A.call(this),this},kill:function(){return u.call(this),this},onbeforeend:function(e){if("function"!=typeof e)throw new Error("Provided callback for onbeforeend was not a function");return this._onBeforeEndCallback=e,this},onbeforestart:function(e){if("function"!=typeof e)throw new Error("Provided callback for onbeforestart was not a function");return this._onBeforeStartCallback=e,this},onprogress:function(e){if("function"!=typeof e)throw new Error("Provided callback for onprogress was not a function");return this._onProgressCallback=e,this}},e.progressJs=d}(t)},577:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(880),r=n.n(s),o=n(705),a=n.n(o)()(r());a.push([e.id,"/* Custom */\n.waitress-overlay{\n  text-align: center;\n  z-index:999;\n}\n\n.waitress-overlay-content{\n  text-align: center;\n  position: absolute;\n  right: 50%;\n  margin-right: -35px;\n  top: 50%;\n  margin-top: -20px;\n}\n\n.waitress-notification{\n  max-width: 100%;\n  padding: 10px;\n  border-radius: 3px;\n}\n\n.notifications{\n  box-shadow:\n    0 3.1px 2px rgba(0, 0, 0, 0.02),\n    0 6.9px 4.7px rgba(0, 0, 0, 0.028),\n    0 12.8px 8.9px rgba(0, 0, 0, 0.035),\n    0 23.1px 15.9px rgba(0, 0, 0, 0.042),\n    0 43.2px 29.7px rgba(0, 0, 0, 0.05),\n    0 100px 71px rgba(0, 0, 0, 0.07);\n}\n\n@media (max-width: 500px) { \n  .waitress-notification {\n    width: 94%;\n    left: 0 !important;\n    right: 0 !important;\n    margin-left: 3%;\n    margin-right: 3%;\n  }\n}\n\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}","",{version:3,sources:["webpack://./srcjs/exts/waitress/css/overlay.css"],names:[],mappings:"AAAA,WAAW;AACX;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE;;;;;;oCAMkC;AACpC;;AAEA;EACE;IACE,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,6BAA6B;YACrB,qBAAqB;EAC/B;EACA;IACE,2BAA2B;YACnB,mBAAmB;EAC7B;AACF;AACA;EACE;IACE,6BAA6B;YACrB,qBAAqB;EAC/B;EACA;IACE,2BAA2B;YACnB,mBAAmB;EAC7B;AACF",sourcesContent:["/* Custom */\n.waitress-overlay{\n  text-align: center;\n  z-index:999;\n}\n\n.waitress-overlay-content{\n  text-align: center;\n  position: absolute;\n  right: 50%;\n  margin-right: -35px;\n  top: 50%;\n  margin-top: -20px;\n}\n\n.waitress-notification{\n  max-width: 100%;\n  padding: 10px;\n  border-radius: 3px;\n}\n\n.notifications{\n  box-shadow:\n    0 3.1px 2px rgba(0, 0, 0, 0.02),\n    0 6.9px 4.7px rgba(0, 0, 0, 0.028),\n    0 12.8px 8.9px rgba(0, 0, 0, 0.035),\n    0 23.1px 15.9px rgba(0, 0, 0, 0.042),\n    0 43.2px 29.7px rgba(0, 0, 0, 0.05),\n    0 100px 71px rgba(0, 0, 0, 0.07);\n}\n\n@media (max-width: 500px) { \n  .waitress-notification {\n    width: 94%;\n    left: 0 !important;\n    right: 0 !important;\n    margin-left: 3%;\n    margin-right: 3%;\n  }\n}\n\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}"],sourceRoot:""}]);const i=a},510:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(880),r=n.n(s),o=n(705),a=n.n(o)()(r());a.push([e.id,".progressjs-inner {\n    width: 0;\n}\n.progressjs-progress {\n    z-index: 9999999;\n}\n\n/* blue theme, like iOS 7 progress bar */\n.progressjs-theme-blue .progressjs-inner {\n    height: 2px;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blue.progressjs-end {\n    -webkit-transition: opacity 0.2s ease-out;\n    -moz-transition: opacity 0.2s ease-out;\n    -o-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n}\n.progressjs-theme-blue .progressjs-percent {\n    display: none;\n}\n\n/* blue theme with overlay layer, no percent bar */\n.progressjs-theme-blueOverlay {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.progressjs-theme-blueOverlay .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blueOverlay.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlay .progressjs-percent {\n    display: none;\n}\n\n/* blue theme with overlay layer, no percent bar */\n.progressjs-theme-blueOverlay {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.progressjs-theme-blueOverlay .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blueOverlay.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlay .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius and overlay layer */\n.progressjs-theme-blueOverlayRadius {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadius .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadius.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadius .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius and overlay layer */\n.progressjs-theme-blueOverlayRadiusHalfOpacity {\n    background-color: white;\n    opacity: 0.5;\n   -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius, overlay layer and percent bar */\n.progressjs-theme-blueOverlayRadiusWithPercentBar {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-percent {\n    width: 70px;\n    text-align: center;\n    height: 40px;\n    position: absolute;\n    right: 50%;\n    margin-right: -35px;\n    top: 50%;\n    margin-top: -20px;\n    font-size: 30px;\n    opacity: .5;\n}\n\n.progressjs-theme-blackRadiusInputs {\n    height: 10px;\n    border-radius: 10px;\n    overflow: hidden;\n}\n.progressjs-theme-blackRadiusInputs .progressjs-inner {\n    height: 2px;\n    -webkit-transition: all 1s ease-out;\n    -moz-transition: all 1s ease-out;\n    -o-transition: all 1s ease-out;\n    transition: all 1s ease-out;\n    background-color: #34495e;\n}\n.progressjs-theme-blackRadiusInputs.progressjs-end {\n    -webkit-transition: opacity 0.2s ease-out;\n    -moz-transition: opacity 0.2s ease-out;\n    -o-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n}\n.progressjs-theme-blackRadiusInputs .progressjs-percent {\n    display: none;\n}","",{version:3,sources:["webpack://./srcjs/exts/waitress/css/progress.css"],names:[],mappings:"AAAA;IACI,QAAQ;AACZ;AACA;IACI,gBAAgB;AACpB;;AAEA,wCAAwC;AACxC;IACI,WAAW;IACX,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,yCAAyC;IACzC,sCAAsC;IACtC,oCAAoC;IACpC,iCAAiC;IACjC,UAAU;AACd;AACA;IACI,aAAa;AACjB;;AAEA,kDAAkD;AAClD;IACI,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;;AAEA,kDAAkD;AAClD;IACI,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;;AAEA,oDAAoD;AACpD;IACI,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;;AAEA,oDAAoD;AACpD;IACI,uBAAuB;IACvB,YAAY;GACb,qCAAqC;IACpC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;;AAEA,iEAAiE;AACjE;IACI,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,QAAQ;IACR,iBAAiB;IACjB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,mCAAmC;IACnC,gCAAgC;IAChC,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;AAC7B;AACA;IACI,yCAAyC;IACzC,sCAAsC;IACtC,oCAAoC;IACpC,iCAAiC;IACjC,UAAU;AACd;AACA;IACI,aAAa;AACjB",sourcesContent:[".progressjs-inner {\n    width: 0;\n}\n.progressjs-progress {\n    z-index: 9999999;\n}\n\n/* blue theme, like iOS 7 progress bar */\n.progressjs-theme-blue .progressjs-inner {\n    height: 2px;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blue.progressjs-end {\n    -webkit-transition: opacity 0.2s ease-out;\n    -moz-transition: opacity 0.2s ease-out;\n    -o-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n}\n.progressjs-theme-blue .progressjs-percent {\n    display: none;\n}\n\n/* blue theme with overlay layer, no percent bar */\n.progressjs-theme-blueOverlay {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.progressjs-theme-blueOverlay .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blueOverlay.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlay .progressjs-percent {\n    display: none;\n}\n\n/* blue theme with overlay layer, no percent bar */\n.progressjs-theme-blueOverlay {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n.progressjs-theme-blueOverlay .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n}\n.progressjs-theme-blueOverlay.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlay .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius and overlay layer */\n.progressjs-theme-blueOverlayRadius {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadius .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadius.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadius .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius and overlay layer */\n.progressjs-theme-blueOverlayRadiusHalfOpacity {\n    background-color: white;\n    opacity: 0.5;\n   -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-percent {\n    display: none;\n}\n\n/* Blue theme with border radius, overlay layer and percent bar */\n.progressjs-theme-blueOverlayRadiusWithPercentBar {\n    background-color: white;\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-inner {\n    height: 100%;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    background-color: #3498db;\n    border-radius: 5px;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar.progressjs-end {\n    opacity: 0 !important;\n}\n.progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-percent {\n    width: 70px;\n    text-align: center;\n    height: 40px;\n    position: absolute;\n    right: 50%;\n    margin-right: -35px;\n    top: 50%;\n    margin-top: -20px;\n    font-size: 30px;\n    opacity: .5;\n}\n\n.progressjs-theme-blackRadiusInputs {\n    height: 10px;\n    border-radius: 10px;\n    overflow: hidden;\n}\n.progressjs-theme-blackRadiusInputs .progressjs-inner {\n    height: 2px;\n    -webkit-transition: all 1s ease-out;\n    -moz-transition: all 1s ease-out;\n    -o-transition: all 1s ease-out;\n    transition: all 1s ease-out;\n    background-color: #34495e;\n}\n.progressjs-theme-blackRadiusInputs.progressjs-end {\n    -webkit-transition: opacity 0.2s ease-out;\n    -moz-transition: opacity 0.2s ease-out;\n    -o-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n}\n.progressjs-theme-blackRadiusInputs .progressjs-percent {\n    display: none;\n}"],sourceRoot:""}]);const i=a},695:e=>{"use strict";var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var o={},a=[],i=0;i<e.length;i++){var l=e[i],A=s.base?l[0]+s.base:l[0],u=o[A]||0,p="".concat(A," ").concat(u);o[A]=u+1;var c=n(p),d={css:l[1],media:l[2],sourceMap:l[3]};-1!==c?(t[c].references++,t[c].updater(d)):t.push({identifier:p,updater:r(d,s),references:1}),a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=s(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var i=n(o[a]);t[i].references--}for(var l=s(e,r),A=0;A<o.length;A++){var u=n(o[A]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=l}}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s=n.css,r=n.media,o=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(s,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={id:s,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";n.r(s);var e=n(88);let t=new Map;var r=n(379),o=n.n(r),a=n(795),i=n.n(a),l=n(695),A=n.n(l),u=n(216),p=n.n(u),c=n(510),d={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=A()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};d.domAPI=i(),d.insertStyleElement=p(),o()(c.Z,d),c.Z&&c.Z.locals&&c.Z.locals;var C=n(577),g={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=A()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};g.domAPI=i(),g.insertStyleElement=p(),o()(C.Z,g),C.Z&&C.Z.locals&&C.Z.locals;let h=[],m=new Map,f=new Map;Shiny.addCustomMessageHandler("waitress-init",(function(t){let n,s;if(t.notify){n=document.createElement("DIV");let e=function(e){var t={},n=0,s=document.getElementsByClassName("waitress-notification");for(var r of s)n=n+10+r.offsetHeight;return"bl"==e?(t.top="auto",t.bottom=n+10+"px",t.left="10px",t.right="auto"):"tl"==e?(t.top=n+10+"px",t.bottom="auto",t.left="10px",t.right="auto"):"br"==e?(t.top="auto",t.bottom=n+10+"px",t.left="auto",t.right="10px"):"tr"==e&&(t.top=n+10+"px",t.bottom="auto",t.left="auto",t.right="10px"),t}(t.position);n.style.bottom=e.bottom,n.style.right=e.right,n.style.left=e.left,n.style.top=e.top,n.height="50px",n.style.color=t.text_color,n.style.backgroundColor=t.background_color,n.style.position="fixed",n.innerHTML=t.html,n.style.zIndex=9999,n.id=t.id,n.classList.add("waitress-notification"),n.classList.add("notifications"),document.body.appendChild(n),t.id="#"+t.id}s=null!=t.id?(0,e.progressJs)(t.id):(0,e.progressJs)(),s=s.setOptions(t.options),f.set(t.name,s)})),Shiny.addCustomMessageHandler("waitress-start",(function(e){f.get(e.name).start();let n,s,r,o,a=e.id,i=!1;if(e.hide_on_render&&m.set(e.name,{id:e.id,name:e.name,infinite:e.infinite,is_notification:e.is_notification}),e.html){if((e=>{if(null!==e&&!t.get(e)){t.set(e,!0);var n="#"+e+".recalculating {opacity: 1.0 !important; }",s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.id=e+"-waiter-recalculating",r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),s.appendChild(r)}})(a),s=document.getElementById(a),null==s)return void console.log("Cannot find",a);if(n=((e,t=0,n=0)=>({width:e.offsetWidth,height:e.offsetHeight+n,top:isNaN(e.offsetTop)?t:e.offsetTop+t,left:isNaN(e.offsetLeft)?0:e.offsetLeft}))(s,2,-2),s.childNodes.forEach((function(e){"waitress-overlay"===e.className&&(i=!0)})),!0===i)return void console.log("waitress on",a,"already exists");r=document.createElement("DIV"),o=document.createElement("DIV"),o.innerHTML=e.html,o.classList.add("waitress-overlay-content"),r.style.height=n.height+"px",r.style.width=n.width+"px",r.style.top=n.top+"px",r.style.left=n.left+"px",r.style.color=e.text_color,r.style.backgroundColor=e.background_color,r.style.position="absolute",r.style.zIndex=99999999,r.classList.add("waitress-overlay"),r.appendChild(o),setTimeout((function(){s.appendChild(r)}),10)}if(e.infinite){let t=0,n=0,s=100;h[e.name]=setInterval((function(){n=(s-t)/(s+t),t=Math.round(1e3*(t+n+Number.EPSILON))/1e3,f.get(e.name).set(t)}),350)}})),Shiny.addCustomMessageHandler("waitress-set",(function(e){f.get(e.name).set(e.percent)})),Shiny.addCustomMessageHandler("waitress-auto",(function(e){f.get(e.name).autoIncrease(e.percent,e.ms)})),Shiny.addCustomMessageHandler("waitress-increase",(function(e){f.get(e.name).increase(e.percent)})),Shiny.addCustomMessageHandler("waitress-end",(function(e){if(f.get(e.name).end(),e.id){var t=document.getElementById(e.id),n=t.getElementsByClassName("waitress-overlay");n.length>0&&t.removeChild(n[0])}if(e.infinite&&clearInterval(h[e.name]),e.is_notification){var s=document.getElementById(e.name);setTimeout((function(){s.remove()}),400)}})),$(document).on("shiny:value shiny:error shiny:recalculated",(function(e){let t=m.get(e.name);if(null!=t&&(t.infinite&&clearInterval(h[t.name]),f.get(t.name).end(),t.is_notification)){var n=document.getElementById(t.name);setTimeout((function(){null!=n&&n.remove()}),400)}}))})(),s})()}));
//# sourceMappingURL=waitress.js.map