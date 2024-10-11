function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return c};var u,c={},e=Object.prototype,l=e.hasOwnProperty,m=Object.defineProperty||function(e,t,n){e[t]=n.value},t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",r=t.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(u){i=function(e,t,n){return e[t]=n}}function a(e,t,n,o){var r,i,c,a,t=t&&t.prototype instanceof p?t:p,t=Object.create(t.prototype),o=new I(o||[]);return m(t,"_invoke",{value:(r=e,i=n,c=o,a=d,function(e,t){if(a===h)throw Error("Generator is already running");if(a===g){if("throw"===e)throw t;return{value:u,done:!0}}for(c.method=e,c.arg=t;;){var n=c.delegate;if(n){n=function e(t,n){var o=n.method,r=t.iterator[o];if(r===u)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=u,e(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),f;o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;r=o.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=u),n.delegate=null,f):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}(n,c);if(n){if(n===f)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(a===d)throw a=g,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);a=h;n=s(r,i,c);if("normal"===n.type){if(a=c.done?g:y,n.arg===f)continue;return{value:n.arg,done:c.done}}"throw"===n.type&&(a=g,c.method="throw",c.arg=n.arg)}})}),t}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}c.wrap=a;var d="suspendedStart",y="suspendedYield",h="executing",g="completed",f={};function p(){}function v(){}function w(){}var t={},E=(i(t,o,function(){return this}),Object.getPrototypeOf),E=E&&E(E(B([]))),b=(E&&E!==e&&l.call(E,o)&&(t=E),w.prototype=p.prototype=Object.create(t));function k(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function x(c,a){var t;m(this,"_invoke",{value:function(n,o){function e(){return new a(function(e,t){!function t(e,n,o,r){var i,e=s(c[e],c,n);if("throw"!==e.type)return(n=(i=e.arg).value)&&"object"==_typeof(n)&&l.call(n,"__await")?a.resolve(n.__await).then(function(e){t("next",e,o,r)},function(e){t("throw",e,o,r)}):a.resolve(n).then(function(e){i.value=e,o(i)},function(e){return t("throw",e,o,r)});r(e.arg)}(n,o,e,t)})}return t=t?t.then(e,e):e()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function B(t){if(t||""===t){var n,e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return n=-1,(e=function e(){for(;++n<t.length;)if(l.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=u,e.done=!0,e}).next=e}throw new TypeError(_typeof(t)+" is not iterable")}return m(b,"constructor",{value:v.prototype=w,configurable:!0}),m(w,"constructor",{value:v,configurable:!0}),v.displayName=i(w,r,"GeneratorFunction"),c.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,i(e,r,"GeneratorFunction")),e.prototype=Object.create(b),e},c.awrap=function(e){return{__await:e}},k(x.prototype),i(x.prototype,n,function(){return this}),c.AsyncIterator=x,c.async=function(e,t,n,o,r){void 0===r&&(r=Promise);var i=new x(a(e,t,n,o),r);return c.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(b),i(b,r,"Generator"),i(b,o,function(){return this}),i(b,"toString",function(){return"[object Generator]"}),c.keys=function(e){var t,n=Object(e),o=[];for(t in n)o.push(t);return o.reverse(),function e(){for(;o.length;){var t=o.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},c.values=B,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=u)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var o=this;function e(e,t){return i.type="throw",i.arg=n,o.next=e,t&&(o.method="next",o.arg=u),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t],i=r.completion;if("root"===r.tryLoc)return e("end");if(r.tryLoc<=this.prev){var c=l.call(r,"catchLoc"),a=l.call(r,"finallyLoc");if(c&&a){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!a)throw Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&l.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}var i=(r=r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc?null:r)?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n,o,r=this.tryEntries[t];if(r.tryLoc===e)return"throw"===(n=r.completion).type&&(o=n.arg,S(r)),o}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:B(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=u),f}},c}function asyncGeneratorStep(e,t,n,o,r,i,c){try{var a=e[i](c),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(o,r)}function _asyncToGenerator(a){return function(){var e=this,c=arguments;return new Promise(function(t,n){var o=a.apply(e,c);function r(e){asyncGeneratorStep(o,t,n,r,i,"next",e)}function i(e){asyncGeneratorStep(o,t,n,r,i,"throw",e)}r(void 0)})}}rm={};for(var aElements=document.getElementsByTagName("a"),i=0;i<aElements.length;i++){aElements[i].setAttribute("draggable","false");for(var imgElements=aElements[i].getElementsByTagName("img"),j=0;j<imgElements.length;j++)imgElements[j].setAttribute("draggable","false")}rm.showRightMenu=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=(console.info(t,n),document.getElementById("rightMenu"));o.style.top=t+"px",o.style.left=n+"px",e?(o.style.display="block",stopMaskScroll()):o.style.display="none"},rm.hideRightMenu=function(){rm.showRightMenu(!1),document.querySelector("#rightmenu-mask").style.display="none"};var rmWidth=document.getElementById("rightMenu").offsetWidth,rmHeight=document.getElementById("rightMenu").offsetHeight,domhref=(rm.reloadrmSize=function(){rightMenu.style.visibility="hidden",rightMenu.style.display="block",rmWidth=document.getElementById("rightMenu").offsetWidth,rmHeight=document.getElementById("rightMenu").offsetHeight,rightMenu.style.visibility="visible"},""),domImgSrc="",globalEvent=null,oncontextmenuFunction=function(e){var t,n,o,r,i,c,a,u,l,m,s,d,y,h,g,f,p,v,w,E,b,k;if(768<document.body.clientWidth)return t=e.clientX+10,n=e.clientY,o=document.querySelector(".rightMenuOther"),r=document.querySelector(".rightMenuPlugin"),k=document.querySelector("#menu-copytext"),i=document.querySelector("#menu-pastetext"),c=document.querySelector("#menu-commenttext"),a=document.querySelector("#menu-newwindow"),u=document.querySelector("#menu-newwindowimg"),l=document.querySelector("#menu-copylink"),m=document.querySelector("#menu-copyimg"),s=document.querySelector("#menu-downloadimg"),d=document.querySelector("#menu-search"),y=document.querySelector("#menu-searchBaidu"),h=document.querySelector("#menu-music-toggle"),g=document.querySelector("#menu-music-back"),f=document.querySelector("#menu-music-forward"),p=document.querySelector("#menu-music-playlist"),v=document.querySelector("#menu-music-copyMusicName"),w=e.target.href,E=e.target.currentSrc,b=!1,o.style.display="block",globalEvent=e,selectTextNow&&window.getSelection()?(b=!0,k.style.display="block",c.style.display="block",d.style.display="block",y.style.display="block"):(k.style.display="none",c.style.display="none",y.style.display="none",d.style.display="none"),w?(b=!0,a.style.display="block",l.style.display="block",domhref=w):(a.style.display="none",l.style.display="none"),E?(b=!0,m.style.display="block",s.style.display="block",u.style.display="block",document.getElementById("rightMenu").style.width="12rem",domImgSrc=E):(m.style.display="none",s.style.display="none",u.style.display="none"),"input"===e.target.tagName.toLowerCase()||"textarea"===e.target.tagName.toLowerCase()?(b=!0,i.style.display="block"):i.style.display="none",(k=document.querySelector("#nav-music"))&&k.contains(e.target)?(b=!0,h.style.display="block",g.style.display="block",f.style.display="block",p.style.display="block",v.style.display="block"):(h.style.display="none",g.style.display="none",f.style.display="none",p.style.display="none",v.style.display="none"),b?(o.style.display="none",r.style.display="block"):r.style.display="none",rm.reloadrmSize(),t+rmWidth>window.innerWidth&&(t-=rmWidth+10),window.innerHeight<n+rmHeight&&(n-=n+rmHeight-window.innerHeight),rm.showRightMenu(!0,n,t),!(document.getElementById("rightmenu-mask").style.display="flex")};function imageToBlob(e){var n=new Image,o=document.createElement("canvas"),r=o.getContext("2d");return n.crossOrigin="",n.src=e,new Promise(function(t){n.onload=function(){o.width=this.naturalWidth,o.height=this.naturalHeight,r.drawImage(this,0,0),o.toBlob(function(e){t(e)},"image/png",.75)}})}function copyImage(e){return _copyImage.apply(this,arguments)}function _copyImage(){return(_copyImage=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var n;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,imageToBlob(t);case 2:n=e.sent,n=new ClipboardItem({"image/png":n}),navigator.clipboard.write([n]);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function stopMaskScroll(){document.getElementById("rightmenu-mask")&&document.getElementById("rightmenu-mask").addEventListener("mousewheel",function(e){rm.hideRightMenu()},{passive:!0}),document.getElementById("rightMenu")&&document.getElementById("rightMenu").addEventListener("mousewheel",function(e){rm.hideRightMenu()},{passive:!0})}window.oncontextmenu=oncontextmenuFunction,rm.downloadimging=!1,rm.writeClipImg=function(e){console.log("按下复制"),rm.hideRightMenu(),anzhiyu.snackbarShow("正在下载中，请稍后",!1,1e4),0==rm.downloadimging&&(rm.downloadimging=!0,setTimeout(function(){copyImage(e),anzhiyu.snackbarShow("复制成功！图片已添加盲水印，请遵守版权协议"),rm.downloadimging=!1},"10000"))},rm.copyUrl=function(e){var t=document.createElement("input");t.id="copyVal",document.body.appendChild(t);t.value=e,t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),t.remove()},rm.rightmenuCopyText=function(e){navigator.clipboard&&navigator.clipboard.writeText(e),rm.hideRightMenu()},rm.copyPageUrl=function(e){e=e||window.location.href,rm.copyUrl(e),anzhiyu.snackbarShow("复制链接地址成功",!1,2e3),rm.hideRightMenu()};var selectTextNow="";function selceText(){var e=document.selection?document.selection.createRange().text:window.getSelection().toString();selectTextNow=""!==e?e:""}function replaceAll(e,t,n){return e.split(t).join(n)}function addRightMenuClickEvent(){document.getElementById("menu-backward").addEventListener("click",function(){window.history.back(),rm.hideRightMenu()}),document.getElementById("menu-forward").addEventListener("click",function(){window.history.forward(),rm.hideRightMenu()}),document.getElementById("menu-refresh").addEventListener("click",function(){window.location.reload()}),document.getElementById("menu-top").addEventListener("click",function(){anzhiyu.scrollToDest(0,500),rm.hideRightMenu()}),document.getElementById("menu-translate").addEventListener("click",function(){window.translateFn.translatePage(),rm.hideRightMenu()}),document.querySelectorAll(".menu-link").forEach(function(e){e.addEventListener("click",rm.hideRightMenu)}),document.getElementById("menu-home")&&document.getElementById("menu-home").addEventListener("click",function(){window.location.href=window.location.origin}),document.getElementById("menu-randomPost").addEventListener("click",function(){toRandomPost()}),document.getElementById("menu-commentBarrage").addEventListener("click",anzhiyu.switchCommentBarrage),document.getElementById("rightmenu-mask").addEventListener("click",rm.hideRightMenu),document.getElementById("rightmenu-mask").addEventListener("contextmenu",function(e){rm.hideRightMenu(),e.preventDefault()}),document.getElementById("menu-copy").addEventListener("click",function(){rm.copyPageUrl()}),document.getElementById("menu-pastetext").addEventListener("click",rm.pasteText),document.getElementById("menu-copytext").addEventListener("click",function(){rm.rightmenuCopyText(selectTextNow);var e=GLOBAL_CONFIG.copyright;e.copy&&anzhiyu.snackbarShow(e.languages.copySuccess)}),document.getElementById("menu-commenttext").addEventListener("click",function(){rm.rightMenuCommentText(selectTextNow)}),document.getElementById("menu-newwindow").addEventListener("click",function(){window.open(domhref,"_blank"),rm.hideRightMenu()}),document.getElementById("menu-copylink").addEventListener("click",rm.copyLink),document.getElementById("menu-downloadimg").addEventListener("click",function(){anzhiyu.downloadImage(domImgSrc,"anzhiyu")}),document.getElementById("menu-newwindowimg").addEventListener("click",function(){window.open(domImgSrc,"_blank"),rm.hideRightMenu()}),document.getElementById("menu-copyimg").addEventListener("click",function(){rm.writeClipImg(domImgSrc)}),document.getElementById("menu-searchBaidu").addEventListener("click",rm.searchBaidu),document.getElementById("menu-music-toggle").addEventListener("click",anzhiyu.musicToggle),document.getElementById("menu-music-back").addEventListener("click",anzhiyu.musicSkipBack),document.getElementById("menu-music-forward").addEventListener("click",anzhiyu.musicSkipForward),document.getElementById("menu-music-copyMusicName").addEventListener("click",function(){rm.rightmenuCopyText(anzhiyu.musicGetName()),anzhiyu.snackbarShow("复制歌曲名称成功",!1,3e3)})}document.onmouseup=document.ondblclick=selceText,rm.readClipboard=function(){navigator.clipboard&&navigator.clipboard.readText().then(function(e){return rm.insertAtCaret(globalEvent.target,e)})},rm.insertAtCaret=function(e,t){var n,o=e.selectionStart,r=e.selectionEnd;document.selection?(e.focus(),document.selection.createRange().text=t,e.focus()):o||"0"==o?(n=e.scrollTop,e.value=e.value.substring(0,o)+t+e.value.substring(r,e.value.length),e.focus(),e.selectionStart=o+t.length,e.selectionEnd=o+t.length,e.scrollTop=n):(e.value+=t,e.focus())},rm.pasteText=function(){rm.readClipboard();rm.hideRightMenu()},rm.rightMenuCommentText=function(r){rm.hideRightMenu();var e=document.getElementById("post-comment").offsetTop;window.scrollTo(0,e-80),"undefined"!=r&&"null"!=r||(r="好棒！"),function o(){setTimeout(function(){var e=document.getElementsByClassName("el-textarea__inner")[0],t=(e||o(),document.createEvent("HTMLEvents")),n=(t.initEvent("input",!0,!0),replaceAll(r,"\n","\n> "));e.value="> "+n+"\n\n",e.dispatchEvent(t),e.focus(),e.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")},100)}()},rm.searchBaidu=function(){anzhiyu.snackbarShow("即将跳转到百度搜索",!1,2e3),setTimeout(function(){window.open("https://www.baidu.com/s?wd="+selectTextNow)},"2000"),rm.hideRightMenu()},rm.copyLink=function(){rm.rightmenuCopyText(domhref),anzhiyu.snackbarShow("已复制链接地址")},addRightMenuClickEvent();