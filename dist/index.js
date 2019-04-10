module.exports = {"id":"symbol-translator","name":"Symbol Translator","description":"Adapter for translating text into symbols","version":"1.0.0","tags":["aac","symbols"],"script":"!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,\"a\",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p=\"\",r(r.s=0)}([function(e,t){addEventListener(\"click\",e=>{e=e||window.event,console.log(e.target);let t=e.target||e.srcElement,r=t.textContent.trim()||t.innerText.trim();if(\"\"===r)return;if(r!==t.innerHTML)return;let n=r.replace(/\\./g,\"\").toLowerCase().split(\" \"),o=\"\",i=[];n.forEach(e=>{o+='<div style=\"background-color: #fff; color: #000; border-radius: 3px; padding: 2px; margin: 2px; display: inline-block; text-align: center\"><div style=\"margin: auto; width: 50px; height: 50px; background-size: cover;\" class=\"symboltranslator-'+e+'\"></div><div>'+e+\"</div></div>\",-1===i.indexOf(e)&&(i.push(e),aw.request(\"https://www.opensymbols.org/api/v1/symbols/search?q=\"+e).then(t=>{if(0===t.length)return;let r=t[0].image_url,n=document.getElementsByClassName(\"symboltranslator-\"+e);for(let e=0;e<n.length;e++)n[e].style.backgroundImage=\"url(\"+r+\")\"}))}),t.innerHTML=o})}]);"};