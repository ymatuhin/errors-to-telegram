/*! 1.0.8 */
!function(e,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.telebug=i():e.telebug=i()}(this,function(){return function(e){function i(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var o={};return i.m=e,i.c=o,i.i=function(e){return e},i.d=function(e,o,r){i.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="./dist/",i(i.s=5)}([function(e,i,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var t=o(12);Object.defineProperty(i,"isObject",{enumerable:!0,get:function(){return r(t).default}});var n=o(6);Object.defineProperty(i,"consolePatch",{enumerable:!0,get:function(){return r(n).default}});var s=o(17);Object.defineProperty(i,"validateParam",{enumerable:!0,get:function(){return r(s).default}});var a=o(1);Object.defineProperty(i,"errorFactory",{enumerable:!0,get:function(){return r(a).default}});var d=o(7);Object.defineProperty(i,"createErrorMessage",{enumerable:!0,get:function(){return r(d).default}});var u=o(13);Object.defineProperty(i,"unhandledBrowserError",{enumerable:!0,get:function(){return r(u).default}});var l=o(14);Object.defineProperty(i,"unhandledNodeError",{enumerable:!0,get:function(){return r(l).default}});var c=o(15);Object.defineProperty(i,"unhandledPromise",{enumerable:!0,get:function(){return r(c).default}});i.httpPost=o(11).default,i.getCommonInfo=o(9).default},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return new Error("❗️ Error: "+e)}},function(e,i){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,i,o){"use strict";function r(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var t=function(){function e(e,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(i,o,r){return o&&e(i.prototype,o),r&&e(i,r),i}}(),n=o(4),s=o(0),a=function(){function e(i){var o=i.botId,t=i.chatId,n=i.activeHosts,s=i.customMessages,a=i.disableCorsMessage;r(this,e),this.botId=o,this.chatId=t,this.customMessages=s||[],this.disableCorsMessage=a,this.apiUrl="https://api.telegram.org/bot"+o+"/sendMessage";var d=location.hostname||location.host;n&&n.length&&-1===n.indexOf(d)||this.init()}return t(e,[{key:"init",value:function(){(0,s.unhandledNodeError)(this.onNodeError.bind(this)),(0,s.unhandledBrowserError)(this.onBrowserError.bind(this)),(0,s.unhandledPromise)(this.onPromiseReject.bind(this)),(0,s.consolePatch)(this.onConsole.bind(this))}},{key:"onNodeError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i={};e.message&&(i.message=e.message),e.stack&&(i.stack=e.stack),this.beforeSend(i)}},{key:"onBrowserError",value:function(e,i,o,r,t){var n={};n.message=t&&t.message?t.message:e,i&&(n.filename=i+":"+o+":"+r),t&&t.stack&&(n.stack=t.stack),this.beforeSend(n)}},{key:"onPromiseReject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i={},o=e.message||e.type;o&&(i.message=o),e.reason&&(i.reason=e.reason),e.stack&&(i.stack=e.stack),this.beforeSend(i)}},{key:"onConsole",value:function(e){for(var i=arguments.length,o=Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];var t={console:e,consoleData:o};this.beforeSend(t)}},{key:"beforeSend",value:function(e){var i=/^Script error\.?$/.test(e.message);if(!this.disableCorsMessage||!i){i&&(e.message=n.corsError);var o=(0,s.getCommonInfo)(this.customMessages),r=(0,s.createErrorMessage)(e);this.sendMessage(""+o+r)}}},{key:"sendMessage",value:function(e){(0,s.httpPost)(this.apiUrl,{chat_id:this.chatId,disable_web_page_preview:!0,parse_mode:"html",text:e})}},{key:"addCustomMessage",value:function(e){"string"==typeof e&&this.customMessages.push(e)}}]),e}();i.default=a},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.corsError='Error in script from another domain. You should add crossorigin="anonymous" attribute to the script tag or set Access-Control-Allow-Origin header on the server.'},function(e,i,o){"use strict";var r=o(0),t=o(3),n=function(e){return e&&e.__esModule?e:{default:e}}(t);e.exports=function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.inited)throw(0,r.errorFactory)("Telebug is already inited");return(0,r.validateParam)("config",i,Object,!0),(0,r.validateParam)("botId",i.botId,String,!0),(0,r.validateParam)("chatId",i.chatId,String,!0),(0,r.validateParam)("activeHosts",i.activeHosts,Array),(0,r.validateParam)("customMessages",i.customMessages,Array),(0,r.validateParam)("disableCorsMessage",i.disableCorsMessage,Boolean),e.inited=!0,e.version="1.0.8",new n.default(i)}},function(e,i,o){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(i){if("function"!=typeof i)throw new Error("consolePatch: fn must be a function");var o=["error","exception","warn"],r=e.console||window.console||{};o.forEach(function(e){r[e]=function(){for(var o=arguments.length,r=Array(o),t=0;t<o;t++)r[t]=arguments[t];return i.apply(void 0,[e].concat(r))}})}}).call(i,o(2))},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=o(18);i.default=function(e){var i="";if(e.file&&(i+="\nFile: "+r(e.file)),e.stack&&e.message&&-1===e.stack.indexOf(e.message)&&(i+="\nMessage: <code>"+r(e.message)+"</code>"),e.reason&&(i+="\nReason: <code>"+r(e.reason)+"</code>"),e.stack&&(i+="\n<pre>"+r(e.stack)+"</pre>"),e.console){var o=(e.consoleData||[]).reduce(function(e,i,o){return e+(0===o?"":", ")+JSON.stringify(i)},"");i+="\n<pre>console."+e.console+"("+o+")</pre>"}return i}},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(){return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight]}},function(e,i,o){"use strict";function r(e){var i="",o=n(navigator.userAgent||"");if(o&&o.browser&&o.browser.name&&o.os&&o.os.name){var r=(o.browser.version||"").split(".")[0],a=o.browser.name?o.browser.name+" "+r:"",d=o.os.name?o.os.name+" "+(o.os.version||""):"";i+="<strong>"+a+"</strong> on "+d+" by telebug 1.0.8"}else i+=navigator.userAgent+" by telebug 1.0.8";var u=s(),l=t(u,2),c=l[0],f=l[1];return c&&f&&(i+="\nWindow: "+c+"x"+f),i+="\nUrl: "+location.href,e.forEach(function(e){return i+="\n"+e}),i}Object.defineProperty(i,"__esModule",{value:!0});var t=function(){function e(e,i){var o=[],r=!0,t=!1,n=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(o.push(s.value),!i||o.length!==i);r=!0);}catch(e){t=!0,n=e}finally{try{!r&&a.return&&a.return()}finally{if(t)throw n}}return o}return function(i,o){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return e(i,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();i.default=r;var n=o(19),s=o(8).default},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=o(16),n=function(e){return e&&e.__esModule?e:{default:e}}(t);i.default=function(e){return e&&e.constructor?e.constructor.name:(0,n.default)(void 0===e?"undefined":r(e))}},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i){var o=new XMLHttpRequest;o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.send(JSON.stringify(i))}},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i.default=function(e){return"object"===(void 0===e?"undefined":r(e))&&!(e instanceof Array)&&null!==e}},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){var i=window.onerror;window.onerror=function(){e.apply(void 0,arguments),i&&i.apply(void 0,arguments)}}},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){}},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){window.addEventListener("unhandledrejection",e)}},function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e[0].toUpperCase()+e.slice(1)}},function(e,i,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var t=o(1),n=r(t),s=o(10),a=r(s);i.default=function(e,i,o,r){if(r||void 0!==i){if(r&&void 0===i)throw(0,n.default)("Property “"+e+"” is required");var t=(0,a.default)(i);if(t!==o.name){var s=/^[AEIOUY].*/.test(o.name),d=s?"an":"a";throw(0,n.default)("The “"+e+"” property must be "+d+" "+o.name+", but recieved "+t)}}}},function(e,i,o){(function(i){function o(e){if("string"==typeof e)return e;if(t(e))return y?y.call(e):"";var i=e+"";return"0"==i&&1/e==-a?"-0":i}function r(e){return!!e&&"object"==typeof e}function t(e){return"symbol"==typeof e||r(e)&&v.call(e)==d}function n(e){return null==e?"":o(e)}function s(e){return e=n(e),e&&l.test(e)?e.replace(u,p):e}var a=1/0,d="[object Symbol]",u=/[&<>"'`]/g,l=RegExp(u.source),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},f="object"==typeof i&&i&&i.Object===Object&&i,w="object"==typeof self&&self&&self.Object===Object&&self,b=f||w||Function("return this")(),p=function(e){return function(i){return null==e?void 0:e[i]}}(c),m=Object.prototype,v=m.toString,h=b.Symbol,g=h?h.prototype:void 0,y=g?g.toString:void 0;e.exports=s}).call(i,o(2))},function(e,i,o){var r;!function(t,n){"use strict";var s="model",a="name",d="type",u="vendor",l="version",c="mobile",f="tablet",w={extend:function(e,i){var o={};for(var r in e)i[r]&&i[r].length%2==0?o[r]=i[r].concat(e[r]):o[r]=e[r];return o},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},b={rgx:function(e,i){for(var o,r,t,n,s,a,d=0;d<i.length&&!s;){var u=i[d],l=i[d+1];for(o=r=0;o<u.length&&!s;)if(s=u[o++].exec(e))for(t=0;t<l.length;t++)a=s[++r],n=l[t],"object"==typeof n&&n.length>0?2==n.length?"function"==typeof n[1]?this[n[0]]=n[1].call(this,a):this[n[0]]=n[1]:3==n.length?"function"!=typeof n[1]||n[1].exec&&n[1].test?this[n[0]]=a?a.replace(n[1],n[2]):void 0:this[n[0]]=a?n[1].call(this,a,n[2]):void 0:4==n.length&&(this[n[0]]=a?n[3].call(this,a.replace(n[1],n[2])):void 0):this[n]=a||void 0;d+=2}},str:function(e,i){for(var o in i)if("object"==typeof i[o]&&i[o].length>0){for(var r=0;r<i[o].length;r++)if(w.has(i[o][r],e))return"?"===o?void 0:o}else if(w.has(i[o],e))return"?"===o?void 0:o;return e}},p={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},m={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,l],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],l],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],l],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],[a,l],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],l],[/(edge)\/((\d+)?[\w\.]+)/i],[a,l],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],l],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],l],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],l],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],l],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],l],[/(QQ)\/([\d\.]+)/i],[a,l],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,l],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[l,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[l,[a,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[l,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],l],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],l],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[l,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,l],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],l],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],l],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],l],[/fxios\/([\w\.-]+)/i],[l,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[l,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[l,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],l],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[l,b.str,p.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[a,l],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],l],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[s,u,[d,f]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[u,"Apple"],[d,f]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[u,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[u,s,[d,f]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[s,[u,"Amazon"],[d,f]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[s,b.str,p.device.amazon.model],[u,"Amazon"],[d,c]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,u,[d,c]],[/\((ip[honed|\s\w*]+);/i],[s,[u,"Apple"],[d,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[u,s,[d,c]],[/\(bb10;\s(\w+)/i],[s,[u,"BlackBerry"],[d,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[s,[u,"Asus"],[d,f]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[u,"Sony"],[s,"Xperia Tablet"],[d,f]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[s,[u,"Sony"],[d,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[u,s,[d,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[u,"Nvidia"],[d,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[u,"Sony"],[d,"console"]],[/(sprint\s(\w+))/i],[[u,b.str,p.device.sprint.vendor],[s,b.str,p.device.sprint.model],[d,c]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[u,s,[d,f]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[u,[s,/_/g," "],[d,c]],[/(nexus\s9)/i],[s,[u,"HTC"],[d,f]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[s,[u,"Huawei"],[d,c]],[/(microsoft);\s(lumia[\s\w]+)/i],[u,s,[d,c]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[u,"Microsoft"],[d,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[u,"Microsoft"],[d,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[u,"Motorola"],[d,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[u,"Motorola"],[d,f]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[u,w.trim],[s,w.trim],[d,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[u,"Samsung"],[d,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[s,[u,"Sharp"],[d,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[u,"Samsung"],s,[d,f]],[/smart-tv.+(samsung)/i],[u,[d,"smarttv"],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[u,"Samsung"],s,[d,c]],[/sie-(\w+)*/i],[s,[u,"Siemens"],[d,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[u,"Nokia"],s,[d,c]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[s,[u,"Acer"],[d,f]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[u,"LG"],[d,f]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[u,"LG"],s,[d,f]],[/(lg) netcast\.tv/i],[u,s,[d,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[u,"LG"],[d,c]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[u,"Lenovo"],[d,f]],[/linux;.+((jolla));/i],[u,s,[d,c]],[/((pebble))app\/[\d\.]+\s/i],[u,s,[d,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[u,s,[d,c]],[/crkey/i],[[s,"Chromecast"],[u,"Google"]],[/android.+;\s(glass)\s\d/i],[s,[u,"Google"],[d,"wearable"]],[/android.+;\s(pixel c)\s/i],[s,[u,"Google"],[d,f]],[/android.+;\s(pixel xl|pixel)\s/i],[s,[u,"Google"],[d,c]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[s,/_/g," "],[u,"Xiaomi"],[d,c]],[/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[s,/_/g," "],[u,"Xiaomi"],[d,f]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[u,"Meizu"],[d,f]],[/android.+a000(1)\s+build/i],[s,[u,"OnePlus"],[d,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[u,"RCA"],[d,f]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[s,[u,"Dell"],[d,f]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[u,"Verizon"],[d,f]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[u,"Barnes & Noble"],s,[d,f]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[u,"NuVision"],[d,f]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[u,"ZTE"],s,[d,f]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[u,"Swiss"],[d,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[u,"Swiss"],[d,f]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[u,"Zeki"],[d,f]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[u,"Dragon Touch"],s,[d,f]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[s,[u,"Insignia"],[d,f]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[s,[u,"NextBook"],[d,f]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[u,"Voice"],s,[d,c]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[u,"LvTel"],s,[d,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[u,"Envizen"],[d,f]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[u,s,[d,f]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[u,"MachSpeed"],[d,f]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[u,s,[d,f]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[u,"Rotor"],[d,f]],[/android.+(KS(.+))\s+build/i],[s,[u,"Amazon"],[d,f]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[u,s,[d,f]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[d,w.lowerize],u,s],[/(android.+)[;\/].+build/i],[s,[u,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[l,[a,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,l],[/rv\:([\w\.]+).*(gecko)/i],[l,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,l],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[l,b.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[l,b.str,p.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],l],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[a,l],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[a,"Symbian"],l],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],l],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[a,l],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],l],[/(sunos)\s?([\w\.]+\d)*/i],[[a,"Solaris"],l],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[a,l],[/(haiku)\s(\w+)/i],[a,l],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[l,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[l,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[a,l]]},v=function(e,i){if("object"==typeof e&&(i=e,e=void 0),!(this instanceof v))return new v(e,i).getResult();var o=e||(t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),r=i?w.extend(m,i):m;return this.getBrowser=function(){var e={name:void 0,version:void 0};return b.rgx.call(e,o,r.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return b.rgx.call(e,o,r.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return b.rgx.call(e,o,r.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return b.rgx.call(e,o,r.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return b.rgx.call(e,o,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=e,this},this};v.VERSION="0.7.17",v.BROWSER={NAME:a,MAJOR:"major",VERSION:l},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:s,VENDOR:u,TYPE:d,CONSOLE:"console",MOBILE:c,SMARTTV:"smarttv",TABLET:f,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:l},v.OS={NAME:a,VERSION:l},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=v),i.UAParser=v):o(20)?void 0!==(r=function(){return v}.call(i,o,i,e))&&(e.exports=r):t&&(t.UAParser=v);var h=t&&(t.jQuery||t.Zepto);if(void 0!==h){var g=new v;h.ua=g.getResult(),h.ua.get=function(){return g.getUA()},h.ua.set=function(e){g.setUA(e);var i=g.getResult();for(var o in i)h.ua[o]=i[o]}}}("object"==typeof window?window:this)},function(e,i){(function(i){e.exports=i}).call(i,{})}])});
//# sourceMappingURL=index.umd.js.map