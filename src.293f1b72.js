parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,s,r){return s&&t(e.prototype,s),r&&t(e,r),e}require("./sass/main.scss");var r=function(){function t(s){var r=s.selector,a=s.targetDate;e(this,t),this.selector=r,this.targetDate=a,this.days=document.querySelector("".concat(this.selector,' [data-value="days"]')),this.hours=document.querySelector("".concat(this.selector,' [data-value="hours"]')),this.mins=document.querySelector("".concat(this.selector,' [data-value="mins"]')),this.secs=document.querySelector("".concat(this.selector,' [data-value="secs"]'))}return s(t,[{key:"updateTimer",value:function(e){var t=e.days,s=e.hours,r=e.mins,a=e.secs;this.days.textContent=t,this.hours.textContent=s,this.mins.textContent=r,this.secs.textContent=a}},{key:"setTimer",value:function(){var e=this;setInterval(function(){var t=Date.now(),s=a(e.targetDate-t);e.updateTimer(s)},1e3)}}]),t}(),a=function(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),mins:Math.floor(e%36e5/6e4),secs:Math.floor(e%6e4/1e3)}},n=new r({selector:"#timer-1",targetDate:new Date("Jul 27, 2021 12:00:00")});n.setTimer();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.293f1b72.js.map