!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire9dd9;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire9dd9=o);var r=o("eWrZJ");document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".loader"),t=document.querySelector(".error"),n=document.querySelector(".cat-info"),o=document.querySelector(".breed-select"),i=document.querySelector(".breed-name"),c=document.querySelector(".description"),d=document.querySelector(".temperament"),l=document.querySelector(".cat-info img");function a(){var e=o.value;u(),p();try{(0,r.fetchCatByBreed)(e).then((function(e){i.textContent=e.breed,c.textContent=e.description,d.textContent=e.temperament,l.src=e.image,n.style.display="block",s()})).catch((function(){y("Ooops! Something went wrong! Try reloading the page!"),s()}))}catch(e){y("Ooops! Something went wrong! Try reloading the page!"),s()}}function u(){e.style.display="block"}function s(){e.style.display="none"}function y(e){t.style.display="block",t.textContent=e}function p(){n.style.display="none"}!function(){u(),t.style.display="none",p(),o.style.display="none";try{(0,r.fetchBreeds)().then((function(e){e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,o.appendChild(t)})),o.addEventListener("change",a),s(),o.style.display="block"})).catch((function(){y("Ooops! Something went wrong! Try reloading the page!"),s()}))}catch(e){y("Ooops! Something went wrong! Try reloading the page!"),s()}}()}))}();
//# sourceMappingURL=index.a7f932ec.js.map
