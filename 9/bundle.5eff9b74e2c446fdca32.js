(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);i&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),e.push(c))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",u="quarter",c="year",d="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},g={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",y={};y[_]=m;var $=function(t){return t instanceof w},b=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;y[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},C=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},M=g;M.l=b,M.i=$,M.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return C(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<C(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!M.u(e)||e,p=M.p(t),h=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(o)},f=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,g=this.$D,_="set"+(this.$u?"UTC":"");switch(p){case c:return u?h(1,0):h(31,11);case l:return u?h(1,v):h(0,v+1);case a:var y=this.$locale().weekStart||0,$=(m<y?m+7:m)-y;return h(u?g-$:g+(6-$),v);case o:case d:return f(_+"Hours",0);case r:return f(_+"Minutes",1);case s:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,u=M.p(t),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[d]=p+"Date",a[l]=p+"Month",a[c]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[u],f=u===o?this.$D+(e-this.$W):e;if(u===l||u===c){var m=this.clone().set(d,1);m.$d[h](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(n,u){var d,p=this;n=Number(n);var h=M.p(u),f=function(t){var e=C(p);return M.w(e.date(e.date()+Math.round(t*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===c)return this.set(c,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,u=n.months,c=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return M.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:c(n.monthsShort,a,u,3),MMMM:c(u,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var h,f=M.p(d),m=C(n),v=(m.utcOffset()-this.utcOffset())*t,g=this-m,_=M.m(this,m);return _=(h={},h[c]=_/12,h[l]=_,h[u]=_/3,h[a]=(g-v)/6048e5,h[o]=(g-v)/864e5,h[r]=g/e,h[s]=g/t,h[i]=g/1e3,h)[f]||g,p?_:M.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),E=w.prototype;return C.prototype=E,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",c],["$D",d]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,w,C),t.$i=!0),C},C.locale=b,C.isDayjs=$,C.unix=function(t){return C(1e3*t)},C.en=y[_],C.Ls=y,C.p={},C}()},181:function(t){t.exports=function(){"use strict";return function(t,e,n){var i=function(t,e){if(!e||!e.length||!e[0]||1===e.length&&!e[0].length)return null;var n;1===e.length&&e[0].length>0&&(e=e[0]),n=e[0];for(var i=1;i<e.length;i+=1)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n};n.max=function(){var t=[].slice.call(arguments,0);return i("isAfter",t)},n.min=function(){var t=[].slice.call(arguments,0);return i("isBefore",t)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],u=i.base?l[0]+i.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),u=0;u<r.length;u++){var c=n(r[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),u=n(216),c=n.n(u),d=n(589),p=n.n(d),h=n(10),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=c(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}function g(t,e,n="beforeend"){if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function _(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function y(t){if(null!==t){if(!(t instanceof v))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var $=n(484),b=n.n($),C=n(181),M=n.n(C);function w(t,e){return t?b()(t).format(e):""}function E(t){return t&&b()(t).isAfter(b()(),"D")}function D(t){return t&&b()(t).isSame(b()(),"D")}function S(t){return t&&b()(t).isBefore(b()(),"D")}const A=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],x=["Amsterdam","Chamonix","Geneva","Rome","Warsaw","Moscow"],T=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. ","Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. ","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],k=[{EVERYTHING:function(t){return t.filter((t=>t))}},{FUTURE:function(t){return t.filter((t=>E(t.periodStart)))}},{PRESENT:function(t){return t.filter((t=>(S(t.periodStart)||D(t.periodStart))&&(E(t.periodEnd)||D(t.periodEnd))))}},{PAST:function(t){return t.filter((t=>S(t.periodEnd)))}}],I={DAY:{orderIndex:0,isDisable:!1,name:"day"},EVENT:{orderIndex:1,isDisable:!0,name:"event"},TIME:{orderIndex:2,isDisable:!1,name:"time"},PRICE:{orderIndex:3,isDisable:!1,name:"price"},OFFERS:{orderIndex:4,isDisable:!0,name:"offers"}},L=I.DAY;class O extends v{get template(){return'\n  <ul class="trip-events__list">\n  </ul>\n  '}}class F extends v{get template(){return'\n    <p class="trip-events__msg">\n      Click New Event to create your first point\n    </p>\n  '}}class H extends v{#e=null;constructor({onSortTypeChange:t}){super(),this.#e=t,this.element.addEventListener("click",this.#n)}get template(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      ${Object.values(I).sort(((t,e)=>t.orderIndex-e.orderIndex)).map((t=>{const{isDisable:e,name:n}=t;return`\n      <div class="trip-sort__item  trip-sort__item--${n}">\n        <input class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"\n          id="sort-${n}"\n          value="sort-${n}"\n          data-sort-type="${n}"\n          ${e?"disabled":""}\n          ${t===L?'checked=""':""}>\n        <label class="trip-sort__btn" for="sort-${n}">\n          ${n}\n        </label>\n      </div>\n    `})).join("")}\n    </form>\n  `}#n=t=>{"INPUT"===t.target.tagName&&(t.preventDefault(),this.#e(t.target.dataset.sortType))}}function B(t){return Math.floor(Math.random()*t)}function N(t){return t[B(t.length)]}function P(t){const e=[];return()=>{let n=B(t);if(e.length>=t)return null;for(;e.includes(n);)n=B(t);return e.push(n),n}}class q extends v{#i=null;#s=null;#r=null;#o=null;#a=null;constructor({point:t,pointDestination:e,onFormSubmit:n,offersByType:i,allDestinationsNames:s}){super(),this.#i=t,this.#s=e,this.#a=n,this.#r=i,this.#o=s,this.element.querySelector("form").addEventListener("submit",this.#l)}get template(){return function(t,e,n,i){const s=w(t.periodStart,"DD/MM/YY HH:mm"),r=w(t.periodEnd,"DD/MM/YY HH:mm"),o=A.map((e=>`\n      <div class="event__type-item">\n        <input id="event-type-${e.toLowerCase()}-${t.id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}">\n        <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-${t.id}">${e}</label>\n      </div>\n    `)).join(" "),a=i.map((t=>`\n    <option value="${t}"></option>\n    `)).join(" ");return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-${t.id}">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${t.type}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${t.id}" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${o}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${t.type}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${e.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${a}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${s}">\n            —\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${r}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              €${t.price}\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          ${function(t,e){return 0===e.length?"":`\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      <div class="event__available-offers">\n        ${e.map((e=>`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" type="checkbox" name="event-offer-luggage"\n        id="event-offer-luggage-${t.id}${e.id}"\n        ${t.chosenOffers.includes(e.id)?'checked="':""} ">\n      <label class="event__offer-label" for="event-offer-luggage-${t.id}${e.id}">\n        <span class="event__offer-title">${e.name}</span>\n        +€&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </label>\n    </div>\n  `)).join(" ")}\n      </div>\n    </section>\n  `}(t,n)}\n          ${function(t){return t.description||t.pictures?`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      ${0===t.description.length?"":`<p class="event__destination-description">\n      ${t.description}\n    </p>`}\n      ${e=t.pictures,0===e.length?"":`\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n        ${e.map((t=>`\n    <img class="event__photo" src="${t}" alt="Event photo"></img>\n  `)).join(" ")}\n      </div>\n    </div>`}\n    </section>\n  `:"";var e}(e)}\n        </section>\n      </form>\n    </li>\n  `}(this.#i,this.#s,this.#r,this.#o)}#l=t=>{t.preventDefault(),this.#a(this.#i)}}class Y extends v{#i=null;#u=null;#c=null;#d=null;#p=null;constructor({point:t,offers:e,destination:n,onEditClick:i,onFavoriteClick:s}){super(),this.#i=t,this.#u=e,this.#c=n,this.#d=i,this.#p=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#h),this.element.querySelector(".event__favorite-btn ").addEventListener("click",this.#f)}get template(){return function(t,e,n){const{type:i,periodStart:s,periodEnd:r,price:o,isFavorite:a,chosenOffers:l}=t,u=w(s,"MMM DD"),c=w(s,"HH:mm"),d=w(r,"HH:mm"),p=function(t,e){const n=b()(t),i=b()(e).diff(n,"minute"),s=Math.floor(i/525960),r=Math.floor(i%525960/43800),o=Math.floor(i%43800/1440),a=Math.floor(i%1440/60),l=Math.floor(i%60/1);let u="";return u+=s>0?`${s}Y `:"",u+=r>0?`${r}M `:"",u+=o>0?`${o}D `:"",u+=a>0?`${a}H `:"",u+=l>0?`${l}M`:"",u}(s,r),h=a?"event__favorite-btn--active":"",f=i.toLowerCase(),m=n.name,v=function(t,e){const n=[];return e.forEach((e=>{const i=t.find((t=>t.id===e));i&&n.push(i)})),n}(e,l);return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">${u}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${f}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${i} ${m}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">${c}</time>\n            —\n            <time class="event__end-time" datetime="2019-03-18T11:00">${d}</time>\n          </p>\n          <p class="event__duration">${p}</p>\n        </div>\n        <p class="event__price">\n          €&nbsp;<span class="event__price-value">${o}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${function(t){let e="";return t.forEach((t=>{e+=`\n      <li class="event__offer">\n        <span class="event__offer-title">${t.name}</span>\n        +€&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>\n    `})),e}(v)}\n        </ul>\n        <button class="event__favorite-btn ${h}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.#i,this.#u,this.#c)}#h=t=>{t.preventDefault(),this.#d()};#f=t=>{t.preventDefault(),this.#p()}}const j="DEFAULT",U="EDITING";class R{#m=null;#i=null;#v=null;#g=null;#_=null;#y=null;#$=null;#b=null;#C=j;constructor({pointListContainer:t,offersModel:e,destinationsModel:n,onDataChange:i,onModeChange:s}){this.#m=t,this.#_=e,this.#y=n,this.#$=i,this.#b=s}init(t){this.#i=t;const e=this.#v,n=this.#g;this.#v=new Y({point:this.#i,offers:this.#_.getOffersByIds(this.#i.chosenOffers),destination:this.#y.getDestinationById(this.#i.destinationId),onEditClick:this.#d,onFavoriteClick:this.#p}),this.#g=new q({point:this.#i,pointDestination:this.#y.getDestinationById(this.#i.destinationId),onFormSubmit:this.#a,offersByType:this.#_.getOffersByType(this.#i.type),allDestinationsNames:this.#y.allDestinationsNames}),null!==e&&null!==n?(this.#C===j&&_(this.#v,e),this.#C===U&&_(this.#g,n),y(e),y(n)):g(this.#v,this.#m)}destroy(){y(this.#v),y(this.#g)}resetView(){this.#C!==j&&this.#M()}#d=()=>{this.#w()};#a=t=>{this.#$(t),this.#M()};#p=()=>{this.#$({...this.#i,isFavorite:!this.#i.isFavorite})};#E=t=>{"Escape"===t.key&&(t.preventDefault(),this.#M())};#w(){_(this.#g,this.#v),document.addEventListener("keydown",this.#E),this.#b(this.#i.id),this.#C=U}#M(){_(this.#v,this.#g),document.removeEventListener("keydown",this.#E),this.#C=j}}const W=P(20);class V{constructor(){this.id=W(),this.type=N(A),this.name=`offer for ${this.type}`,this.price=B(1e3)}}const Z=Array.from({length:20},(()=>new V)),z=P(5);class J{constructor(){const t=`${B(12)+1}/${B(31)+1}/2023 ${B(24)}:${B(59)}`,e=`${B(12)+1}/${B(31)+1}/2023 ${B(24)}:${B(59)}`;this.id=z(),this.type=N(A),this.destinationId=B(x.length),this.periodStart=function(t,e){return b().extend(M()),b().min(b()(t),b()(e))}(t,e),this.periodEnd=function(t,e){return b().extend(M()),b().max(b()(t),b()(e))}(t,e),this.price=B(5e3),this.isFavorite=Boolean(B(2)),this.chosenOffers=function(t){const e=Z.filter((e=>e.type===t)),n=[];return e.forEach((t=>n.push(t.id))),Array.from({length:B(e.length)},(()=>N(n)))}(this.type)}}const X=Array.from({length:5},(()=>new J)),G=P(x.length),K=function(t){let e=0;return()=>{const n=t[e];return e++,n}}(x);class Q{constructor(){this.id=G(),this.name=K(),this.description=N(T),this.pictures=(10,Array.from({length:B(10)},(()=>`https://loremflickr.com/248/152?random=${B(100)}`)))}}const tt=Array.from({length:x.length},(()=>new Q)),et=document.querySelector(".trip-controls"),nt=document.querySelector(".trip-controls__filters"),it=document.querySelector(".trip-events"),st=new class{#D=X.slice();get points(){return this.#D}},rt=new class{#u=Z.slice();get offers(){return this.#u}getOffersByIds(t){if(0===t.length)return;const e=[];return t.forEach((t=>{const n=this.#u.find((e=>e.id===t));n&&e.push(n)})),e}getOffersByType(t){return this.#u.filter((e=>e.type===t))}},ot=new class{#S=tt.slice();get destinations(){return this.#S}get allDestinationsNames(){return this.#S.map((t=>t.name))}getDestinationById(t){return this.#S.find((e=>e.id===t))}},at=new class{#A=null;#x=null;#_=null;#y=null;#T=new O;#k=new F;#I=null;#D=[];#L=new Map;#O=null;constructor({boardContainer:t,pointsModel:e,offersModel:n,destinationsModel:i}){this.#A=t,this.#x=e,this.#_=n,this.#y=i}init(){this.#D=[...this.#x.points],this.#F()}#F(){0!==this.#D.length?(this.#H(),this.#B()):this.#N()}#N(){g(this.#k,this.#A)}#H(){this.#I=new H({onSortTypeChange:this.#e}),g(this.#I,this.#A)}#B(){g(this.#T,this.#A);for(const t of this.#D)this.#P(t)}#P(t){const e=new R({pointListContainer:this.#T.element,offersModel:this.#_,destinationsModel:this.#y,onDataChange:this.#q,onModeChange:this.#b});e.init(t),this.#L.set(t.id,e)}#q=t=>{var e,n;this.#D=(e=this.#D,n=t,e.map((t=>t.id===n.id?n:t))),this.#L.get(t.id).init(t)};#b=t=>{null!==this.#O&&this.#O!==t&&this.#L.get(this.#O).resetView(),this.#O=t};#e=t=>{console.log("sortType :>> ",t)};#Y(){this.#L.forEach((t=>t.destroy())),this.#L.clear()}}({boardContainer:it,pointsModel:st,offersModel:rt,destinationsModel:ot}),lt=function(t){const e={};return k.map((n=>{const[[i,s]]=Object.entries(n);e[i]=s(t).length})),e}(st.points);g(new class extends v{get template(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n\n        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>\n  '}},et,"beforebegin"),g(new class extends v{#j=null;constructor({filtersInformation:t}){super(),this.#j=t}get template(){return t=this.#j,`\n    <form class="trip-filters" action="#" method="get">\n      ${k.map(((e,n)=>{const[[i]]=Object.entries(e);return`\n      <div class="trip-filters__filter">\n        <input class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"\n          id="filter-${i.toLowerCase()}"\n          value="${i.toLowerCase()}"\n          ${0===t[i]?"disabled":""}\n          ${0===n?'checked=""':""}>\n        <label class="trip-filters__filter-label" for="filter-${i.toLowerCase()}">\n          ${i}\n        </label>\n      </div>\n    `})).join("")}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  `;var t}}({filtersInformation:lt}),nt),at.init()})()})();
//# sourceMappingURL=bundle.5eff9b74e2c446fdca32.js.map