function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ownKeys(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _regeneratorRuntime(){_regeneratorRuntime=function(){return i};var c,i={},t=Object.prototype,s=t.hasOwnProperty,f=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(c){a=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o,a,i,u,e=e&&e.prototype instanceof g?e:g,e=Object.create(e.prototype),n=new E(n||[]);return f(e,"_invoke",{value:(o=t,a=r,i=n,u=p,function(t,e){if(u===y)throw Error("Generator is already running");if(u===v){if("throw"===t)throw e;return{value:c,done:!0}}for(i.method=t,i.arg=e;;){var r=i.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(o===c)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=c,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=c),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}(r,i);if(r){if(r===d)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(u===p)throw u=v,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);u=y;r=l(o,a,i);if("normal"===r.type){if(u=i.done?v:h,r.arg===d)continue;return{value:r.arg,done:i.done}}"throw"===r.type&&(u=v,i.method="throw",i.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=u;var p="suspendedStart",h="suspendedYield",y="executing",v="completed",d={};function g(){}function m(){}function b(){}var e={},w=(a(e,n,function(){return this}),Object.getPrototypeOf),w=w&&w(w(j([]))),x=(w&&w!==t&&s.call(w,n)&&(e=w),b.prototype=g.prototype=Object.create(e));function _(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function O(i,u){var e;f(this,"_invoke",{value:function(r,n){function t(){return new u(function(t,e){!function e(t,r,n,o){var a,t=l(i[t],i,r);if("throw"!==t.type)return(r=(a=t.arg).value)&&"object"==_typeof(r)&&s.call(r,"__await")?u.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):u.resolve(r).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(e){if(e||""===e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=c,t.done=!0,t}).next=t}throw new TypeError(_typeof(e)+" is not iterable")}return f(x,"constructor",{value:m.prototype=b,configurable:!0}),f(b,"constructor",{value:m,configurable:!0}),m.displayName=a(b,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,a(t,o,"GeneratorFunction")),t.prototype=Object.create(x),t},i.awrap=function(t){return{__await:t}},_(O.prototype),a(O.prototype,r,function(){return this}),i.AsyncIterator=O,i.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var a=new O(u(t,e,r,n),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},_(x),a(x,o,"Generator"),a(x,n,function(){return this}),a(x,"toString",function(){return"[object Generator]"}),i.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return a.type="throw",a.arg=r,n.next=t,e&&(n.method="next",n.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=s.call(o,"catchLoc"),u=s.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,L(o)),n}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=c),d}},i}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(u){return function(){var t=this,i=arguments;return new Promise(function(e,r){var n=u.apply(t,i);function o(t){asyncGeneratorStep(n,e,r,o,a,"next",t)}function a(t){asyncGeneratorStep(n,e,r,o,a,"throw",t)}o(void 0)})}}function _createForOfIteratorHelper(t,e){var r,n,o,a,i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return o=!(n=!0),{s:function(){i=i.call(t)},n:function(){var t=i.next();return n=t.done,t},e:function(t){o=!0,r=t},f:function(){try{n||null==i.return||i.return()}finally{if(o)throw r}}};if(Array.isArray(t)||(i=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return i&&(t=i),a=0,{s:e=function(){},n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r={}.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}(()=>{function l(o){function t(t){var e=o.value;if(Array.isArray(e)){var r,n=_createForOfIteratorHelper(e);try{for(n.s();!(r=n.n()).done;)if(t(r.value))return!0}catch(t){n.e(t)}finally{n.f()}return!1}return t(e)}switch(o.flag){case"html":return function(t){return/\/$|\.html$/.test(t)};case"suf":return function(e){return t(function(t){return e.endsWith(t)})};case"pre":return function(e){return t(function(t){return e.startsWith(t)})};case"str":return function(e){return t(function(t){return e.includes(t)})};case"reg":return function(e){return t(function(t){return new RegExp(t,"i").test(e)})};default:throw o}}function p(t){return caches.match(t,{cacheName:y})}function o(){return p(v).then(function(t){var e;return null==t||null==(e=t.json)?void 0:e.call(t)})}function h(t){return t.tp=Date.now(),g(v,new Response(JSON.stringify(t)))}function t(t){"GET"===(t=t.request).method&&t.url.startsWith("http")&&new URL((t=t.url).endsWith("/index.html")?t.substring(0,t.length-10):t.endsWith(".html")?t.substring(0,t.length-5):t)}var y="kmarBlogCache",v="https://id.v3/",d="X-Swpp-Invalid",a="X-Swpp-Time",g=(()=>{var n=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r,n){var o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&((o=new Headers(r.headers)).set(a,(new Date).toISOString()),r=new Response(r.body,{status:r.status,headers:o})),t.next=3,caches.open(y);case 3:return o=t.sent,t.next=6,o.put(e,r);case 6:case"end":return t.stop()}},t)}));return function(t,e,r){return n.apply(this,arguments)}})(),i=(()=>{var r=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r){var n,o,a,i,u,c,s=arguments;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n=s.length,o=new Array(2<n?n-2:0),a=2;a<n;a++)o[a-2]=s[a];if(o.length){t.next=5;break}return t.next=4,clients.matchAll();case 4:o=t.sent;case 5:i={type:e,data:r},u=_createForOfIteratorHelper(o);try{for(u.s();!(c=u.n()).done;)c.value.postMessage(i)}catch(t){u.e(t)}finally{u.f()}case 8:case"end":return t.stop()}},t)}));return function(t,e){return r.apply(this,arguments)}})(),u=(()=>{var r=_asyncToGenerator(_regeneratorRuntime().mark(function t(i,e){var r,n,o,u,a,c,s,f;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e&&i&&Date.now()-i.tp<6e5)return t.abrupt("return");t.next=2;break;case 2:return t.next=4,fetch("swpp/update.json",{priority:"high"});case 4:return t.next=6,t.sent.json();case 6:if(n=t.sent,r=n.global,o={global:r,local:(n=n.info)[0].version,escape:0},i){t.next=13;break}return t.next=12,h(o);case 12:return t.abrupt("return",i?1:-1);case 13:if(i.global===r&&i.local===o.local)return t.abrupt("return");t.next=15;break;case 15:u=[],a=_createForOfIteratorHelper(n),t.prev=17,s=_regeneratorRuntime().mark(function t(){var e,a,r,n,o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=c.value).version===i.local)return a=[],t.next=5,caches.open(y).then(function(t){return t.keys()}).then((()=>{var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var r,o,n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=_createForOfIteratorHelper(e),t.prev=1,n=_regeneratorRuntime().mark(function t(){var e,n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.value,(n=e.url)===v||!u.find(function(t){return t(n)})){t.next=6;break}t.next=5;var r=e;return p(r).then(function(t){var e;if(t)return(e=new Headers(t.headers)).set(d,"1"),g(r,new Response(t.body,{status:t.status,headers:e}))});case 5:a.push(n);case 6:case"end":return t.stop()}},t)}),r.s();case 4:if((o=r.n()).done){t.next=8;break}return t.delegateYield(n(),"t0",6);case 6:t.next=4;break;case 8:t.next=13;break;case 10:t.prev=10,t.t1=t.catch(1),r.e(t.t1);case 13:return t.prev=13,r.f(),t.finish(13);case 16:case"end":return t.stop()}},t,null,[[1,10,13,16]])}));return function(t){return e.apply(this,arguments)}})());t.next=6;break;case 5:return t.abrupt("return",{v:a});case 6:if(r=e.change){n=_createForOfIteratorHelper(r);try{for(n.s();!(o=n.n()).done;)u.push(l(o.value))}catch(t){n.e(t)}finally{n.f()}}case 8:case"end":return t.stop()}},t)}),a.s();case 20:if((c=a.n()).done){t.next=27;break}return t.delegateYield(s(),"t0",22);case 22:if(f=t.t0)return t.abrupt("return",f.v);t.next=25;break;case 25:t.next=20;break;case 27:t.next=32;break;case 29:t.prev=29,t.t1=t.catch(17),a.e(t.t1);case 32:return t.prev=32,a.f(),t.finish(32);case 35:return t.next=37,caches.delete(y).then(function(){return h(o)});case 37:return t.abrupt("return",2);case 38:case"end":return t.stop()}},t,null,[[17,29,32,35]])}));return function(t,e){return r.apply(this,arguments)}})();self.addEventListener("install",function(t){skipWaiting()}),self.addEventListener("activate",function(t){return t.waitUntil(clients.claim())}),self.addEventListener("fetch",t),self.addEventListener("periodicSync",function(t){"update"===t.tag&&t.waitUntil(u(!0))}),self.addEventListener("message",(()=>{var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var r,n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e.data,t.t0=r.type,t.next="update"===t.t0?4:20;break;case 4:return t.next=6,o();case 6:return r=t.sent,t.next=9,u(r);case 9:if(n=t.sent){t.next=12;break}return t.abrupt("return");case 12:t.t1=n,t.next=-1===t.t1?15:1===t.t1?16:2===t.t1?17:18;break;case 15:return t.abrupt("return",i("new",null));case 16:return t.abrupt("return",i("revise",null));case 17:return t.abrupt("return",i("update",null));case 18:if(Array.isArray(n))return t.abrupt("return",i("update",n));t.next=20;break;case 20:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}})())})();