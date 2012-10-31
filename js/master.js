/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test("Â ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);

/**
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 */
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});
/**
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

/**
 * Cufon
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());

/**
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Copyright (c) 2009 by Roman Shamin & Jovanny Lemonad. All rights reserved.
 * 
 * Trademark:
 * Hattori Hanzo Light is a trademark of Roman Shamin & Jovanny Lemonad.
 * 
 * Full name:
 * HattoriHanzo-Light
 * 
 * Description:
 * Copyright (c) 2009 by Roman Shamin & Jovanny Lemonad. All rights reserved.
 * 
 * Manufacturer:
 * Roman Shamin & Jovanny Lemonad
 * 
 * Designer:
 * Roman Shamin
 * 
 * Vendor URL:
 * http://www.jovanny.ru/
 */
Cufon.registerFont({"w":58,"face":{"font-family":"Hattori Hanzo","font-weight":300,"font-stretch":"normal","units-per-em":"360","panose-1":"2 0 5 6 2 0 0 2 0 3","ascent":"270","descent":"-90","bbox":"-17 -317 435 83","underline-thickness":"18","underline-position":"-18","stemh":"22","stemv":"22","unicode-range":"U+0020-U+2265"},"glyphs":{" ":{"w":90},"\u0411":{"d":"95,0r-77,0r0,-252r152,0r0,22r-128,0r0,78v78,-5,146,6,146,77v0,46,-31,75,-93,75xm42,-22v59,-2,121,14,121,-54v0,-69,-62,-51,-121,-54r0,108","w":198,"k":{"\u0410":11,"\u0443":7,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":7,"\u0442":14,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":11,"\u0430":7,"\u042f":11,"\u042d":14,"\u042a":18,"\u0427":11,"\u0425":14,"\u0424":7,"\u0423":14,"\u0422":22,"\u0421":7,"\u041e":7,"\u041b":14,"\u0417":11,"\u0416":7,"\u0414":14}},"\u0412":{"d":"175,-190v0,53,-43,52,-42,55v0,0,53,5,53,62v0,46,-22,73,-87,73r-81,0r0,-252r73,0v63,0,84,26,84,62xm41,-230r0,86v52,1,108,4,111,-46v3,-47,-62,-40,-111,-40xm41,-22v57,-4,121,18,121,-51v0,-60,-65,-48,-121,-49r0,100","w":200,"k":{"\u0410":11,"\u0443":11,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":7,"\u0442":11,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":11,"\u0431":4,"\u0430":7,"\u042f":11,"\u042d":14,"\u042a":18,"\u0427":11,"\u0425":14,"\u0424":7,"\u0423":14,"\u0422":22,"\u0421":7,"\u041e":7,"\u041b":14,"\u0417":11,"\u0416":7,"\u0414":14}},"\u0413":{"d":"18,-252r142,0r0,22r-119,0r0,230r-23,0r0,-252","w":167,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":25,"\u2013":25,"-":25,",":36,"\u0410":43,"\u0443":40,"\u0445":40,"\u0451":43,".":36,"\u0438":40,"\u044f":43,"\u044e":40,"\u044d":40,"\u044c":40,"\u044b":40,"\u044a":36,"\u0449":40,"\u0448":40,"\u0447":40,"\u0446":40,"\u0444":43,"\u0442":40,"\u0441":43,"\u0440":40,"\u043f":40,"\u043e":43,"\u043d":40,"\u043c":40,"\u043b":43,"\u043a":43,"\u0439":40,"\u0437":40,"\u0436":43,"\u0435":43,"\u0434":47,"\u0433":43,"\u0432":43,"\u0431":36,"\u0430":43,"\u042f":22,"\u042d":7,"\u0424":22,"\u0421":22,"\u041e":22,"\u041b":29,"\u0417":7,"\u0414":29}},"\u0414":{"d":"219,-22r0,88r-16,0r-9,-66r-167,0r-8,66r-15,0r0,-88r18,0v24,-22,34,-78,34,-230r138,0r0,230r25,0xm79,-230v0,103,-6,176,-30,208r122,0r0,-208r-92,0","w":225,"k":{"\u0443":7,"\u0451":7,"\u044f":4,"\u044d":7,"\u044a":11,"\u0447":11,"\u0444":7,"\u0442":14,"\u0441":7,"\u043e":7,"\u0437":4,"\u0435":7,"\u0431":7,"\u0430":7,"\u042f":7,"\u042d":7,"\u042a":14,"\u0427":11,"\u0424":11,"\u0423":11,"\u0422":14,"\u0421":11,"\u041e":11,"\u0417":7}},"\u0415":{"d":"166,0r-148,0r0,-252r147,0r0,22r-124,0r0,89r106,0r0,22r-106,0r0,97r125,0r0,22","w":177,"k":{"\u0443":14,"\u0451":11,"\u044f":4,"\u044d":4,"\u044a":14,"\u0447":14,"\u0444":11,"\u0442":14,"\u0441":11,"\u043e":11,"\u0437":4,"\u0435":11,"\u0431":11,"\u0430":14,"\u042f":7,"\u042d":11,"\u0424":7,"\u0423":7,"\u0421":11,"\u041e":11,"\u0417":11}},"\u0416":{"d":"226,-132v47,6,36,112,79,120r-3,17v-31,0,-45,-16,-59,-73v-13,-55,-30,-53,-77,-52r0,120r-23,0r0,-120v-47,-1,-64,-3,-77,52v-13,57,-27,73,-59,73r-3,-17v22,-5,26,-23,35,-56v10,-35,19,-55,44,-64v-38,-5,-31,-109,-75,-108r2,-16v31,0,51,9,64,67v12,54,25,46,69,47r0,-110r23,0r0,110v43,-1,57,7,69,-47v13,-58,32,-67,63,-67r3,16v-45,-1,-36,103,-75,108","w":308,"k":{"\u0443":11,"\u0451":7,"\u044d":4,"\u044a":14,"\u0447":22,"\u0444":7,"\u0442":22,"\u0441":7,"\u043e":7,"\u0437":4,"\u0435":7,"\u0431":7,"\u0430":4,"\u042d":7,"\u0427":7,"\u0424":11,"\u0421":11,"\u041e":11,"\u0417":7}},"\u0417":{"d":"149,-69v0,-46,-41,-61,-95,-55r0,-21v48,5,89,-7,89,-48v0,-28,-25,-42,-60,-42v-36,0,-62,13,-62,13r-7,-14v0,0,34,-20,73,-20v48,0,80,25,80,64v0,45,-42,54,-41,57v0,0,48,9,48,66v0,47,-38,74,-86,74v-46,0,-81,-22,-81,-22v7,-33,21,0,77,0v50,0,65,-26,65,-52","w":188,"k":{"\u0410":11,"\u0443":11,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":7,"\u0442":11,"\u043b":11,"\u0437":11,"\u0436":7,"\u0434":11,"\u0431":4,"\u0430":7,"\u042f":11,"\u042d":14,"\u042a":14,"\u0427":7,"\u0425":14,"\u0424":4,"\u0423":14,"\u0422":22,"\u0421":7,"\u041e":7,"\u041b":14,"\u0417":14,"\u0416":7,"\u0414":14}},"\u0418":{"d":"41,-37r134,-215r26,0r0,252r-23,0r0,-215r-134,215r-26,0r0,-252r23,0r0,215","w":218},"\u0419":{"d":"144,-309r22,0v0,23,-18,47,-55,47v-42,0,-56,-24,-56,-47r22,0v0,13,9,28,34,28v23,0,33,-15,33,-28xm41,-37r134,-215r26,0r0,252r-23,0r0,-215r-134,215r-26,0r0,-252r23,0r0,215","w":218},"\u041a":{"d":"109,-132v44,8,34,116,81,120r-3,17v-31,0,-52,-16,-64,-73v-13,-59,-30,-52,-82,-52r0,120r-23,0r0,-252r23,0r0,110v47,-2,66,11,78,-47v12,-58,33,-67,64,-67r2,16v-43,0,-39,103,-76,108","w":194,"k":{"\u0443":11,"\u0451":7,"\u044d":4,"\u044a":14,"\u0447":22,"\u0444":7,"\u0442":22,"\u0441":7,"\u043e":7,"\u0437":4,"\u0435":7,"\u0431":7,"\u0430":4,"\u042d":7,"\u0424":11,"\u0421":11,"\u041e":11,"\u0417":7}},"\u041b":{"d":"4,4r-4,-16v41,-12,55,-48,55,-240r144,0r0,252r-22,0r0,-230r-99,0v0,171,-8,227,-74,234","w":217},"\u041c":{"d":"41,0r-23,0r0,-252r23,0r93,178r88,-178r23,0r0,252r-23,0r0,-201r-77,153r-21,0r-83,-156r0,204","w":262},"\u041d":{"d":"173,-141r0,-111r23,0r0,252r-23,0r0,-119r-132,0r0,119r-23,0r0,-252r23,0r0,111r132,0","w":214},"\u041e":{"d":"117,-256v58,0,102,40,102,130v0,90,-44,131,-102,131v-58,0,-103,-41,-103,-131v0,-90,45,-130,103,-130xm117,-17v40,0,76,-29,76,-109v0,-80,-36,-108,-76,-108v-40,0,-77,28,-77,108v0,80,37,109,77,109","w":232,"k":{"\u0410":14,"\u0445":7,"\u043b":14,"\u0434":14,"\u0430":7,"\u042f":11,"\u042d":18,"\u042a":22,"\u0425":14,"\u0423":18,"\u0422":22,"\u041b":14,"\u0417":14,"\u0416":11,"\u0414":14}},"\u041f":{"d":"18,-252r173,0r0,252r-23,0r0,-230r-127,0r0,230r-23,0r0,-252","w":209},"\u0421":{"d":"125,-17v38,0,61,-17,61,-17r8,14v0,0,-27,25,-77,25v-51,0,-103,-30,-103,-128v0,-105,56,-133,102,-133v41,0,72,22,72,22v-7,30,-18,0,-64,0v-48,0,-84,28,-84,111v0,77,33,106,85,106","w":200,"k":{"\u0443":18,"\u0451":7,"\u044f":7,"\u044d":7,"\u044a":18,"\u0447":22,"\u0444":7,"\u0442":29,"\u0441":7,"\u043e":7,"\u043b":7,"\u0437":7,"\u0436":7,"\u0435":7,"\u0434":7,"\u0431":7,"\u0430":7,"\u042f":7,"\u042d":11,"\u042a":11,"\u0427":7,"\u0424":18,"\u0423":11,"\u0422":11,"\u0421":18,"\u041e":18,"\u0414":7}},"\u0422":{"d":"7,-252r173,0r0,22r-75,0r0,230r-23,0r0,-230r-75,0r0,-22","w":187,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":25,"\u2013":25,"-":25,",":36,"\u0410":36,"\u0443":29,"\u0445":29,"\u0451":36,".":36,"\u0438":29,"\u044f":36,"\u044e":29,"\u044d":29,"\u044c":29,"\u044b":29,"\u044a":29,"\u0449":29,"\u0448":29,"\u0447":29,"\u0446":29,"\u0444":36,"\u0442":29,"\u0441":36,"\u0440":29,"\u043f":29,"\u043e":36,"\u043d":29,"\u043c":29,"\u043b":36,"\u043a":36,"\u0439":29,"\u0437":29,"\u0436":36,"\u0435":36,"\u0434":36,"\u0433":36,"\u0432":36,"\u0431":36,"\u0430":36,"\u042f":22,"\u042d":11,"\u0424":22,"\u0421":22,"\u041e":22,"\u0417":7,"\u0414":29}},"\u0423":{"d":"174,-252r25,0r-79,207v-13,46,-54,65,-88,35r7,-13v21,11,50,10,59,-30r-91,-199r25,0r77,169","w":206,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":36,"\u2013":36,"-":36,",":36,"\u0410":36,"\u0443":29,"\u0445":29,"\u0451":36,".":36,"\u0438":29,"\u044f":32,"\u044e":29,"\u044d":29,"\u044c":29,"\u044b":29,"\u044a":29,"\u0449":29,"\u0448":29,"\u0447":29,"\u0446":29,"\u0444":36,"\u0442":29,"\u0441":36,"\u0440":29,"\u043f":29,"\u043e":36,"\u043d":29,"\u043c":29,"\u043b":36,"\u043a":29,"\u0439":29,"\u0437":29,"\u0436":29,"\u0435":36,"\u0434":43,"\u0433":29,"\u0432":29,"\u0431":29,"\u0430":36,"\u042f":18,"\u042d":11,"\u0424":14,"\u0422":11,"\u0421":14,"\u041e":14,"\u0417":14,"\u0414":29}},"\u0424":{"d":"148,-245v54,0,112,28,112,114v0,86,-58,114,-112,114r0,27r-25,0r0,-27v-54,0,-112,-28,-112,-114v0,-86,58,-114,112,-114r0,-21r25,0r0,21xm123,-39r0,-184v-36,0,-86,18,-86,92v0,74,50,92,86,92xm148,-39v36,0,86,-18,86,-92v0,-74,-50,-92,-86,-92r0,184","w":271,"k":{"\u0410":14,"\u0445":7,"\u044f":7,"\u044d":7,"\u043b":11,"\u0437":7,"\u0434":11,"\u0430":7,"\u042f":11,"\u042d":18,"\u042a":22,"\u0425":14,"\u0423":11,"\u0422":22,"\u0417":14,"\u0416":11,"\u0414":14}},"\u0425":{"d":"97,-149r4,0r67,-103r28,0r-82,125r84,127r-28,0r-71,-108r-71,108r-28,0r84,-127r-82,-125r28,0","w":198,"k":{"\u2014":25,"\u2013":25,"-":25,"\u0443":14,"\u0451":7,"\u044a":14,"\u0447":22,"\u0444":7,"\u0442":22,"\u0441":7,"\u043e":7,"\u0435":7,"\u0431":7,"\u0430":4,"\u042f":7,"\u0427":7,"\u0424":14,"\u0421":14,"\u041e":14,"\u0417":7}},"\u0426":{"d":"18,0r0,-252r23,0r0,230r122,0r0,-230r23,0r0,230r25,0r0,88r-16,0r-8,-66r-169,0","w":218,"k":{"\u0443":7,"\u0451":7,"\u044f":4,"\u044d":7,"\u044a":11,"\u0447":11,"\u0444":7,"\u0442":14,"\u0441":7,"\u043e":7,"\u0437":4,"\u0435":7,"\u0431":7,"\u0430":7,"\u042f":7,"\u042d":7,"\u042a":14,"\u0427":11,"\u0424":11,"\u0423":11,"\u0422":14,"\u0421":11,"\u041e":11,"\u0417":7}},"\u0427":{"d":"159,-123r0,-129r23,0r0,252r-23,0r0,-105v0,0,-30,12,-72,12v-87,0,-73,-80,-73,-159r23,0v2,62,-17,139,52,139v46,0,70,-10,70,-10","w":200},"\u0428":{"d":"275,0r-257,0r0,-252r23,0r0,230r94,0r0,-230r23,0r0,230r94,0r0,-230r23,0r0,252","w":293},"\u0429":{"d":"300,-22r0,88r-16,0r-8,-66r-258,0r0,-252r23,0r0,230r94,0r0,-230r23,0r0,230r95,0r0,-230r22,0r0,230r25,0","w":307,"k":{"\u0443":7,"\u0451":7,"\u044f":4,"\u044d":7,"\u044a":11,"\u0447":11,"\u0444":7,"\u0442":14,"\u0441":7,"\u043e":7,"\u0437":4,"\u0435":7,"\u0431":7,"\u0430":7,"\u042f":7,"\u042d":7,"\u042a":14,"\u0427":11,"\u0424":11,"\u0423":11,"\u0422":14,"\u0421":11,"\u041e":11,"\u0417":7}},"\u042a":{"d":"4,-230r0,-22r85,0r0,104v76,-5,142,9,142,73v0,74,-83,79,-165,75r0,-230r-62,0xm89,-22v57,-1,117,11,117,-53v0,-64,-61,-50,-117,-52r0,105","w":241,"k":{"\u2019":29,"\u2018":29,"\u201c":29,"\u201d":29,"\u00b0":29,"`":29,"^":29,"'":29,"\"":29,"*":29,"\u0410":7,"\u042f":14,"\u042d":14,"\u042a":36,"\u0427":18,"\u0425":11,"\u0423":22,"\u0422":43,"\u0417":11,"\u0416":7,"\u0414":11}},"\u042b":{"d":"234,-252r0,252r-23,0r0,-252r23,0xm179,-75v0,73,-80,80,-161,75r0,-252r24,0r0,104v75,-5,137,11,137,73xm42,-22v55,-1,112,9,112,-53v0,-62,-57,-51,-112,-52r0,105","w":252},"\u042c":{"d":"179,-75v0,73,-80,80,-161,75r0,-252r24,0r0,104v75,-5,137,11,137,73xm42,-22v55,-1,112,9,112,-53v0,-62,-57,-51,-112,-52r0,105","w":189,"k":{"\u2019":29,"\u2018":29,"\u201c":29,"\u201d":29,"\u00b0":29,"`":29,"^":29,"'":29,"\"":29,"*":29,"\u0410":7,"\u042f":14,"\u042d":14,"\u042a":36,"\u0427":18,"\u0425":11,"\u0423":22,"\u0422":43,"\u0417":11,"\u0416":7,"\u0414":11}},"\u042d":{"d":"87,-256v46,0,99,22,99,127v0,98,-47,134,-98,134v-50,0,-81,-25,-81,-25v7,-32,20,3,73,3v50,0,78,-31,80,-101r-115,0r0,-22r115,0v-3,-74,-36,-94,-81,-94v-31,0,-57,14,-57,14r-7,-14v0,0,31,-22,72,-22","w":200,"k":{"\u0410":14,"\u0445":7,"\u043b":14,"\u0434":14,"\u0430":7,"\u042f":7,"\u042d":18,"\u042a":22,"\u0425":14,"\u0423":18,"\u0422":22,"\u0417":14,"\u0416":11,"\u0414":14}},"\u042e":{"d":"177,-256v58,0,97,40,97,130v0,90,-39,131,-97,131v-56,0,-95,-39,-97,-124r-39,0r0,119r-23,0r0,-252r23,0r0,111r39,0v4,-80,43,-115,97,-115xm177,-17v40,0,71,-29,71,-109v0,-80,-31,-108,-71,-108v-40,0,-71,28,-71,108v0,80,31,109,71,109","w":288,"k":{"\u0410":14,"\u0445":7,"\u043b":14,"\u0434":14,"\u0430":7,"\u042d":18,"\u042a":14,"\u0425":14,"\u0423":18,"\u0422":22,"\u0417":14,"\u0416":11,"\u0414":14}},"\u042f":{"d":"22,-179v0,-75,84,-76,165,-73r0,252r-24,0r0,-103v-44,1,-76,-9,-88,44v-13,57,-40,64,-66,64r-2,-17v43,-1,38,-85,73,-97v-39,-8,-58,-32,-58,-70xm163,-125r0,-105v-55,2,-115,-14,-115,51v0,65,58,53,115,54","w":205},"D":{"d":"18,-252v107,-7,174,8,174,126v0,118,-67,134,-174,126r0,-252xm41,-22v81,5,125,-6,125,-104v0,-99,-44,-109,-125,-104r0,208","w":205,"k":{"X":14,"x":7,"a":7,"T":22,"A":14,"j":7,"g":7,"Z":14,"Y":18,"W":11,"V":14,"S":11,"J":7}},"F":{"d":"18,-252r147,0r0,22r-124,0r0,89r105,0r0,22r-105,0r0,119r-23,0r0,-252","w":172,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":18,"\u2013":18,"-":18,",":36,"y":14,"x":14,"p":14,"o":22,"e":22,"c":22,"a":22,"O":14,"C":14,"A":29,".":36,"z":22,"w":14,"v":14,"t":14,"s":14,"r":14,"q":22,"n":14,"m":14,"j":11,"i":11,"g":22,"f":14,"d":22,"S":7,"Q":14,"G":14}},"G":{"d":"171,-30r0,-99r23,0r0,110v0,0,-27,24,-77,24v-51,0,-103,-30,-103,-128v0,-100,56,-133,102,-133v41,0,72,22,72,22v-7,30,-18,0,-64,0v-47,0,-84,31,-84,111v0,101,68,124,131,93","w":211,"k":{"X":7,"y":4,"x":4,"T":11,"z":4,"w":4,"v":4,"Z":4,"Y":11,"W":11,"V":11}},"I":{"d":"41,-252r0,252r-23,0r0,-252r23,0"},"J":{"d":"41,-79r0,-173r22,0r0,173v0,28,-6,81,-60,84r-3,-17v25,-7,41,-21,41,-67","w":81,"k":{"A":14}},"K":{"d":"41,-91r0,91r-23,0r0,-252r23,0r0,127r107,-127r29,0r-95,112r108,140r-29,0r-94,-122","w":189,"k":{"y":22,"o":7,"e":7,"c":7,"a":7,"T":14,"O":22,"C":22,"w":18,"v":22,"u":7,"t":22,"s":4,"q":7,"g":7,"f":14,"d":7,"Y":14,"W":7,"V":7,"U":7,"S":14,"Q":22,"G":22}},"L":{"d":"166,0r-148,0r0,-252r23,0r0,230r125,0r0,22","w":173,"k":{"\u2019":36,"\u2018":36,"\u201c":36,"\u201d":36,"\u2014":25,"\u2013":25,"\u00b0":36,"`":36,"^":36,"'":36,"\"":36,"-":25,"*":36,"y":29,"o":7,"e":11,"c":7,"a":7,"T":43,"O":18,"C":18,"w":25,"v":29,"u":7,"t":22,"s":4,"q":7,"g":7,"f":22,"d":7,"Y":54,"W":43,"V":43,"U":22,"S":11,"Q":18,"G":18}},"N":{"d":"201,0r-26,0r-134,-215r0,215r-23,0r0,-252r26,0r134,215r0,-215r23,0r0,252","w":218},"Q":{"d":"149,0r72,45r-7,11v0,0,-28,-7,-97,-51v-58,0,-103,-41,-103,-131v0,-90,45,-130,103,-130v58,0,102,40,102,130v0,72,-29,113,-70,126xm40,-126v0,80,37,109,77,109v40,0,76,-29,76,-109v0,-80,-36,-108,-76,-108v-40,0,-77,28,-77,108","w":235,"k":{"X":14,"x":7,"a":7,"T":22,"A":14,"j":7,"g":7,"Z":14,"Y":18,"W":11,"V":14,"S":11,"J":7}},"R":{"d":"181,0r-25,0r-53,-104r-61,1r0,103r-24,0r0,-252v80,-3,163,-1,163,73v0,36,-18,61,-54,71xm42,-125v56,-1,114,10,114,-54v0,-63,-60,-49,-114,-51r0,105","w":191,"k":{"X":4,"o":7,"e":7,"c":7,"a":7,"T":14,"s":7,"q":7,"j":7,"g":7,"d":7,"Z":7,"Y":14,"W":7,"V":7}},"S":{"d":"156,-65v1,-63,-141,-46,-141,-123v0,-44,34,-68,82,-68v42,0,75,16,75,16v-2,33,-20,6,-68,6v-35,0,-64,10,-64,44v0,30,30,39,61,49v51,17,80,34,80,78v0,43,-34,68,-83,68v-60,0,-87,-24,-87,-24v5,-34,26,2,78,2v53,0,67,-22,67,-48","w":191,"k":{"X":7,"y":11,"x":11,"T":14,"O":7,"C":7,"A":7,"z":7,"w":11,"v":14,"t":14,"s":7,"j":7,"g":4,"f":11,"Z":7,"Y":14,"W":7,"V":7,"S":18,"Q":7,"G":7}},"U":{"d":"192,-252r0,166v0,71,-50,91,-87,91v-37,0,-87,-20,-87,-91r0,-166r23,0r0,166v0,46,24,69,64,69v40,0,64,-23,64,-69r0,-166r23,0","w":210,"k":{"A":14,"J":7}},"V":{"d":"116,0r-21,0r-95,-252r24,0r81,215r81,-215r24,0","w":210,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":25,"\u2013":25,"-":25,",":36,"y":14,"x":14,"p":14,"o":22,"e":22,"c":22,"a":22,"O":14,"C":14,"A":29,".":36,"z":14,"w":14,"v":14,"u":14,"t":7,"s":14,"r":14,"q":22,"n":14,"m":14,"j":7,"i":7,"g":22,"f":11,"d":22,"Q":14,"J":14,"G":14}},"W":{"d":"147,-228r25,0r60,183r63,-207r24,0r-76,252r-22,0r-62,-191r-61,191r-22,0r-76,-252r24,0r63,207","w":318,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":25,"\u2013":25,"-":25,",":36,"y":11,"x":11,"p":11,"o":18,"e":18,"c":18,"a":18,"O":11,"C":11,"A":22,".":36,"z":11,"w":11,"v":11,"u":11,"t":7,"s":11,"r":11,"q":18,"n":11,"m":11,"j":7,"i":7,"g":14,"f":11,"d":18,"Q":11,"J":14,"G":14}},"Y":{"d":"185,-252r26,0r-92,155r0,97r-23,0r0,-96r-96,-156r26,0r82,132","w":210,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":36,"\u2013":36,"-":36,",":36,"y":29,"x":29,"p":29,"o":36,"e":36,"c":36,"a":36,"O":18,"C":18,"A":36,".":36,"z":29,"w":29,"v":29,"u":29,"t":14,"s":29,"r":29,"q":36,"n":29,"m":29,"j":18,"i":18,"g":36,"f":18,"d":36,"S":7,"Q":18,"J":14,"G":18}},"Z":{"d":"12,-230r0,-22r165,0r0,22r-142,208r143,0r0,22r-171,0r0,-22r142,-208r-137,0","w":185,"k":{"\u2014":25,"\u2013":25,"-":25,"y":14,"o":4,"e":4,"c":4,"a":4,"O":11,"C":11,"w":14,"v":14,"u":4,"t":11,"s":4,"q":4,"g":4,"f":11,"d":4,"Q":11,"G":11}},"\u0430":{"d":"82,-170v39,0,59,16,59,71r0,99r-17,0v0,0,-2,-13,-3,-26v-19,33,-108,42,-108,-15v0,-34,30,-51,107,-58v0,-41,-12,-53,-43,-53v-23,0,-49,10,-49,10r-5,-13v0,0,28,-15,59,-15xm64,-17v20,0,40,-12,56,-31r0,-31v-53,0,-85,9,-85,37v0,19,13,25,29,25","w":159,"k":{"\u044a":4,"\u0447":4,"\u0442":11}},"\u0431":{"d":"86,-16v30,0,48,-20,48,-63v0,-37,-14,-60,-41,-60v-31,0,-53,23,-53,60v0,43,17,63,46,63xm40,-130v32,-49,116,-32,116,51v0,51,-24,83,-70,83v-56,0,-71,-63,-68,-134v5,-106,63,-105,135,-122r4,20r-35,7v-68,15,-79,37,-82,95","w":168,"k":{"\u0443":7,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":4,"\u0442":11,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":11,"\u0430":7}},"\u0432":{"d":"18,0r0,-168v50,0,113,-9,113,42v0,32,-27,34,-26,37v0,0,37,4,37,41v0,59,-67,47,-124,48xm111,-125v0,-29,-40,-25,-71,-25r0,53v32,1,71,3,71,-28xm121,-49v2,-34,-46,-29,-81,-29r0,60v35,1,88,3,81,-31","w":153,"k":{"\u0443":7,"\u0445":7,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":7,"\u0444":4,"\u0442":14,"\u0441":4,"\u043e":4,"\u043b":7,"\u0437":11,"\u0436":7,"\u0434":7,"\u0431":4,"\u0430":4}},"\u0433":{"d":"18,0r0,-168r102,0r0,19r-80,0r0,149r-22,0","w":126,"k":{"\u2026":18,"\u201a":18,"\u201e":18,"\u2014":14,"\u2013":14,"-":14,",":18,"\u0451":11,".":18,"\u044f":14,"\u044d":7,"\u0444":14,"\u0441":14,"\u043e":14,"\u043b":18,"\u0437":7,"\u0435":11,"\u0434":18,"\u0430":11}},"\u0434":{"d":"4,51r0,-70r10,0v16,-12,26,-47,26,-149r107,0r0,149r19,0r0,70r-14,0r-8,-51r-118,0r-8,51r-14,0xm41,-19r84,0r0,-130r-64,0v0,50,-2,102,-20,130","w":173,"k":{"\u0443":4,"\u0451":4,"\u044a":7,"\u0447":7,"\u0444":4,"\u0442":11,"\u0441":4,"\u043e":4,"\u0437":4,"\u0435":4,"\u0431":7,"\u0430":7}},"\u0435":{"d":"33,-82v-6,70,68,74,103,59r4,12v0,0,-22,15,-54,15v-44,0,-75,-31,-75,-86v0,-57,36,-90,73,-90v48,0,59,47,59,88xm84,-154v-23,0,-46,21,-51,58v7,-1,31,-5,88,-6v-1,-27,-13,-52,-37,-52","w":154,"k":{"\u0443":7,"\u0445":7,"\u044f":7,"\u044d":7,"\u044a":7,"\u0444":4,"\u0442":11,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":7,"\u0430":7}},"\u0436":{"d":"4,-14v32,-1,28,-71,59,-76v-9,0,-29,-18,-28,-32v-4,-27,-14,-30,-26,-34r3,-14v22,0,37,5,46,48v6,26,22,24,46,24r0,-70r22,0r0,70v24,0,41,2,47,-24v9,-43,24,-48,46,-48r3,14v-26,-1,-26,65,-54,67v11,1,27,20,29,37v3,26,15,34,30,38r-4,16v-26,0,-39,-9,-49,-54v-7,-31,-22,-28,-48,-28r0,80r-22,0r0,-80v-26,0,-40,-3,-47,28v-10,45,-23,54,-49,54","w":230,"k":{"\u2014":11,"\u2013":11,"-":11,"\u0451":7,"\u0447":7,"\u0444":7,"\u0441":7,"\u043e":7,"\u0435":7,"\u0431":4,"\u0430":7}},"\u0437":{"d":"106,-46v0,-33,-33,-34,-67,-32r0,-20v31,2,62,0,62,-30v0,-19,-16,-25,-39,-25v-24,0,-45,8,-45,8r-5,-13v0,0,27,-14,54,-14v32,0,57,15,57,45v0,29,-28,37,-28,37v0,0,33,5,33,45v0,32,-30,49,-62,49v-41,0,-71,-6,-54,-29v0,0,24,10,51,10v34,0,43,-15,43,-31","w":142,"k":{"\u0443":7,"\u0445":7,"\u0451":4,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":7,"\u0444":4,"\u0442":14,"\u0441":4,"\u043e":4,"\u043b":7,"\u0437":7,"\u0436":7,"\u0435":4,"\u0434":7,"\u0431":4,"\u0430":7}},"\u0439":{"d":"123,-130r-83,130r-22,0r0,-168r22,0r0,129r83,-129r22,0r0,168r-22,0r0,-130xm109,-225r20,0v0,20,-16,41,-47,41v-36,0,-47,-21,-47,-41r19,0v0,11,7,25,28,25v21,0,27,-14,27,-25","w":163},"\u043a":{"d":"87,-90v9,4,28,19,28,38v5,26,16,34,31,38r-4,16v-26,0,-40,-9,-50,-54v-8,-33,-23,-27,-52,-28r0,80r-22,0r0,-168r22,0r0,70v27,0,46,4,52,-24v9,-43,24,-48,46,-48r3,14v-27,-2,-23,65,-54,66","w":149,"k":{"\u2014":11,"\u2013":11,"-":11,"\u0451":7,"\u0447":7,"\u0444":7,"\u0441":7,"\u043e":7,"\u0435":7,"\u0431":4,"\u0430":7}},"\u043b":{"d":"4,2r-4,-16v28,-8,38,-35,38,-154r108,0r0,168r-22,0r0,-149r-64,0v0,113,-15,146,-56,151","w":164},"\u043c":{"d":"40,0r-22,0r0,-168r22,0r65,117r62,-117r22,0r0,168r-22,0r0,-126r-51,98r-21,0r-55,-100r0,128","w":207},"\u043d":{"d":"121,-77r-81,0r0,77r-22,0r0,-168r22,0r0,72r81,0r0,-72r22,0r0,168r-22,0r0,-77","w":160},"\u043e":{"d":"86,-172v38,0,75,30,75,88v0,117,-151,117,-150,0v0,-58,37,-88,75,-88xm85,-15v30,0,53,-22,53,-69v0,-47,-24,-69,-52,-69v-26,0,-53,22,-53,69v0,47,23,69,52,69","w":171,"k":{"\u0443":7,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":14,"\u0447":4,"\u0442":14,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":11,"\u0430":7}},"\u043f":{"d":"18,-168r127,0r0,168r-22,0r0,-149r-83,0r0,149r-22,0r0,-168","w":163},"\u0440":{"d":"18,78r0,-246r18,0v0,0,2,13,3,25v10,-12,29,-29,53,-29v44,0,58,39,58,81v0,89,-58,112,-110,83r0,86r-22,0xm127,-91v0,-31,-9,-63,-37,-63v-19,0,-35,14,-50,34r0,93v36,22,90,27,87,-64","w":164,"k":{"\u0443":7,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":4,"\u0442":14,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":11,"\u0430":7}},"\u0441":{"d":"87,-14v26,0,44,-10,44,-10v12,22,-5,28,-50,28v-38,0,-70,-31,-70,-86v0,-55,31,-90,70,-90v40,0,60,8,46,28v0,0,-18,-9,-41,-9v-31,0,-54,30,-54,71v0,41,24,68,55,68","w":142,"k":{"\u0451":7,"\u044d":4,"\u044a":4,"\u0447":4,"\u0444":7,"\u0442":4,"\u0441":7,"\u043e":7,"\u0437":4,"\u0435":7,"\u0431":4,"\u0430":7}},"\u0442":{"d":"7,-168r129,0r0,19r-53,0r0,149r-22,0r0,-149r-54,0r0,-19","w":143,"k":{"\u2026":18,"\u201a":18,"\u201e":18,"\u2014":14,"\u2013":14,"-":14,",":18,"\u0451":11,".":18,"\u044f":7,"\u0444":11,"\u0441":11,"\u043e":14,"\u043b":18,"\u0437":4,"\u0435":11,"\u0434":18,"\u0431":4,"\u0430":14}},"\u0444":{"d":"93,-165r0,-72r22,0r0,72v46,0,79,20,79,83v0,56,-33,79,-79,79r0,81r-22,0r0,-81v-46,0,-79,-23,-79,-79v0,-63,33,-83,79,-83xm93,-146v-40,0,-56,17,-56,64v0,43,21,60,56,60r0,-124xm115,-22v35,0,56,-17,56,-60v0,-47,-16,-64,-56,-64r0,124","w":208,"k":{"\u0443":7,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":11,"\u0442":11,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":11,"\u0430":7}},"\u0446":{"d":"164,-19r0,70r-14,0r-8,-51r-124,0r0,-168r22,0r0,149r83,0r0,-149r22,0r0,149r19,0","w":171,"k":{"\u0443":4,"\u0451":4,"\u044a":7,"\u0447":7,"\u0444":4,"\u0442":11,"\u0441":4,"\u043e":4,"\u0435":4,"\u0431":7,"\u0430":7}},"\u0447":{"d":"116,-86r0,-82r22,0r0,168r-22,0r0,-67v0,0,-22,7,-50,7v-55,0,-55,-53,-52,-108r22,0v3,39,-12,90,30,90v28,0,50,-8,50,-8","w":156},"\u0448":{"d":"210,0r-192,0r0,-168r22,0r0,149r63,0r0,-149r22,0r0,149r63,0r0,-149r22,0r0,168","w":228},"\u0449":{"d":"229,-19r0,70r-15,0r-8,-51r-188,0r0,-168r22,0r0,149r63,0r0,-149r22,0r0,149r63,0r0,-149r22,0r0,149r19,0","w":235,"k":{"\u0443":4,"\u0451":4,"\u044a":7,"\u0447":7,"\u0444":4,"\u0442":11,"\u0441":4,"\u0435":7,"\u0431":7,"\u0430":7}},"\u044a":{"d":"68,-102v52,-4,98,7,98,52v0,52,-64,53,-120,50r0,-148r-42,0r0,-20r64,0r0,66xm68,-19v35,3,83,-2,76,-31v6,-27,-40,-38,-76,-33r0,64","w":176,"k":{"\u2019":18,"\u2018":18,"\u201c":18,"\u201d":18,"\u00b0":18,"`":18,"^":18,"'":18,"\"":18,"*":18,"\u0443":11,"\u0445":7,"\u044f":7,"\u044d":4,"\u044a":22,"\u0447":14,"\u0444":4,"\u0442":22,"\u0441":4,"\u043e":4,"\u043b":7,"\u0437":7,"\u0436":7,"\u0434":7,"\u0431":7,"\u0430":4}},"\u044b":{"d":"183,-168r0,168r-22,0r0,-168r22,0xm40,-19v35,3,83,-2,76,-31v6,-27,-40,-38,-76,-33r0,64xm40,-102v52,-4,98,7,98,52v0,52,-64,53,-120,50r0,-168r22,0r0,66","w":200},"\u044c":{"d":"40,-19v35,3,83,-2,76,-31v6,-27,-40,-38,-76,-33r0,64xm40,-102v52,-4,98,7,98,52v0,52,-64,53,-120,50r0,-168r22,0r0,66","w":148,"k":{"\u2019":18,"\u2018":18,"\u201c":18,"\u201d":18,"\u00b0":18,"`":18,"^":18,"'":18,"\"":18,"*":18,"\u0443":11,"\u0445":7,"\u044d":4,"\u044a":22,"\u0447":14,"\u0444":4,"\u0442":22,"\u0441":4,"\u043e":4,"\u043b":7,"\u0437":7,"\u0436":7,"\u0434":7,"\u0431":7,"\u0430":4}},"\u044d":{"d":"59,-172v39,0,71,30,71,85v0,60,-33,91,-72,91v-43,0,-60,-8,-46,-28v0,0,16,10,43,10v32,0,49,-26,51,-66r-76,0r0,-17v41,0,64,3,76,5v-1,-39,-22,-61,-52,-61v-23,0,-41,9,-41,9v-12,-21,6,-28,46,-28","w":140,"k":{"\u0443":7,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":4,"\u0442":11,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":11,"\u0430":7}},"\u044e":{"d":"138,-172v38,0,67,30,67,88v0,58,-30,88,-68,88v-37,0,-67,-29,-68,-84r-29,0r0,80r-22,0r0,-168r22,0r0,69r30,0v5,-48,33,-73,68,-73xm137,-15v30,0,45,-22,45,-69v0,-47,-17,-69,-44,-69v-26,0,-47,22,-47,69v0,47,17,69,46,69","w":215,"k":{"\u0443":7,"\u0445":11,"\u044f":7,"\u044d":7,"\u044a":11,"\u0447":4,"\u0442":11,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":11,"\u0430":7}},"\u044f":{"d":"60,-74v-20,-1,-43,-21,-43,-46v0,-51,64,-51,119,-48r0,168r-22,0r0,-68v-29,1,-45,-6,-54,27v-9,35,-23,43,-49,43r-4,-16v31,3,30,-54,53,-60xm114,-87r0,-62v-34,-1,-78,-3,-77,29v2,37,41,33,77,33","w":150},"\u0438":{"d":"123,-130r-83,130r-22,0r0,-168r22,0r0,129r83,-129r22,0r0,168r-22,0r0,-130","w":163},"b":{"d":"40,-161v48,-26,113,-6,113,72v0,55,-29,93,-77,93v-35,0,-58,-17,-58,-17r0,-239r22,0r0,91xm40,-22v46,20,91,-5,91,-67v0,-62,-58,-79,-91,-50r0,117","w":164,"k":{"\u2019":14,"\u2018":14,"\u201c":14,"\u201d":14,"\u00b0":14,"`":14,"^":14,"'":14,"\"":14,"*":14,"y":7,"x":11,"a":7,"z":11,"w":7,"v":7,"t":7,"j":7,"f":7}},"d":{"d":"143,-246r0,246r-17,0v0,0,-3,-13,-4,-25v-10,12,-29,29,-53,29v-44,0,-58,-39,-58,-81v0,-89,59,-112,110,-82r0,-87r22,0xm34,-77v0,31,9,63,37,63v19,0,35,-14,50,-34r0,-93v-36,-22,-90,-27,-87,64","w":161},"f":{"d":"115,-230v-16,-7,-63,-20,-56,31r0,31r43,0r0,19v-19,0,-33,-1,-43,-2r0,151r-22,0r0,-149r-30,0r0,-19r30,0v-3,-48,6,-94,46,-88v28,5,45,9,32,26","w":108,"k":{"\u2026":18,"\u201a":18,"\u201e":18,"\u2014":14,"\u2013":14,"-":14,",":18,"o":7,"e":7,"c":11,"a":11,".":18,"s":7,"q":7,"g":11,"d":7}},"g":{"d":"123,-152v2,0,19,29,16,43v3,49,-52,75,-94,53v-7,8,-17,28,5,28v50,1,100,-10,100,49v0,40,-33,55,-75,55v-75,0,-81,-62,-48,-92v-18,-9,-3,-43,6,-48v-33,-36,-8,-106,45,-106v13,0,24,3,33,8v3,-1,19,-6,42,-6r0,17v-23,0,-30,-1,-30,-1xm78,-152v-26,0,-40,17,-40,43v0,25,11,43,40,43v26,0,40,-18,40,-43v0,-26,-11,-43,-40,-43xm76,58v23,0,53,-6,53,-37v0,-40,-47,-30,-87,-31v0,0,-14,10,-14,34v0,31,27,34,48,34","w":156,"k":{"o":4,"e":4,"c":4,"a":7,"q":4,"d":4}},"h":{"d":"95,-172v79,1,41,104,50,172r-22,0r0,-111v4,-64,-60,-46,-83,-11r0,122r-22,0r0,-252r22,0r0,107v12,-12,32,-27,55,-27","w":162,"k":{"\u2019":14,"\u2018":14,"\u201c":14,"\u201d":14,"\u00b0":14,"`":14,"^":14,"'":14,"\"":14,"*":14}},"i":{"d":"20,-168r22,0r0,168r-22,0r0,-168xm44,-208v0,7,-6,12,-13,12v-7,0,-13,-5,-13,-12v0,-7,6,-13,13,-13v7,0,13,6,13,13","w":62},"j":{"d":"28,0r0,-168r22,0r0,168v0,28,-1,80,-55,83r-2,-14v25,-7,35,-23,35,-69xm52,-208v0,7,-6,12,-13,12v-8,0,-13,-5,-13,-12v0,-7,5,-13,13,-13v7,0,13,6,13,13","w":70,"k":{"w":7,"v":7}},"k":{"d":"75,-98r72,98r-27,0r-60,-81r-20,22r0,59r-22,0r0,-252r22,0r0,163r72,-79r27,0","w":150,"k":{"y":7,"x":7,"o":11,"e":11,"c":11,"a":14,"z":7,"w":7,"v":7,"u":7,"t":7,"s":7,"q":11,"j":11,"g":11,"f":7,"d":11}},"l":{"d":"40,-81v0,39,0,62,15,72r-2,13v-36,-4,-35,-47,-35,-85r0,-171r22,0r0,171","w":66,"k":{"y":7,"a":7,"w":7,"v":7,"t":7,"j":7,"g":7}},"m":{"d":"184,-172v72,-2,45,105,50,172r-22,0r0,-96v0,-31,-5,-58,-29,-58v-19,0,-32,14,-46,34r0,120r-22,0r0,-103v0,-27,-6,-51,-29,-51v-19,0,-32,15,-46,34r0,120r-22,0r0,-168r18,0v0,0,2,13,3,25v9,-12,24,-29,48,-29v26,0,39,12,45,34v8,-12,24,-34,52,-34","w":251},"n":{"d":"92,-172v73,-2,52,101,55,172r-22,0v-4,-56,17,-154,-34,-154v-20,0,-36,14,-51,34r0,120r-22,0r0,-168r18,0v0,0,2,12,3,25v10,-12,29,-29,53,-29","w":164},"q":{"d":"124,-8v-46,28,-113,8,-113,-71v0,-55,29,-93,77,-93v35,0,58,16,58,16r0,234r-22,0r0,-86xm124,-147v-48,-18,-91,7,-91,68v0,62,58,79,91,50r0,-118","w":164},"r":{"d":"40,-123v8,-24,27,-46,71,-47r0,23v-62,0,-71,49,-71,49r0,98r-22,0r0,-168r18,0v0,0,5,31,4,45","w":114,"k":{"\u2014":18,"\u2013":18,"-":18,"o":7,"e":7,"c":7,"a":7,"q":7,"g":7,"d":7}},"s":{"d":"110,-46v-2,-43,-98,-24,-98,-79v0,-34,28,-47,60,-47v37,0,64,4,48,23v-13,-3,-96,-16,-87,23v0,17,18,22,40,28v35,11,58,17,58,53v0,32,-27,49,-60,49v-41,0,-60,-16,-60,-16v3,-24,17,-3,53,-3v36,0,46,-13,46,-31","w":141,"k":{"y":7,"a":7,"z":7,"w":7,"v":7,"t":7,"s":7,"g":4,"f":7}},"t":{"d":"115,-22v13,18,-4,23,-33,26v-61,7,-42,-94,-45,-153r-30,0r0,-19r30,0v4,-27,-8,-71,22,-59r0,59r43,0r0,19v-18,0,-33,-1,-43,-2r0,98v-6,52,38,38,56,31","w":123,"k":{"\u2019":14,"\u2018":14,"\u201c":14,"\u201d":14,"\u2014":18,"\u2013":18,"\u00b0":14,"`":14,"^":14,"'":14,"\"":14,"-":18,"*":14,"y":7,"o":11,"e":11,"c":11,"a":11,"w":7,"v":7,"u":7,"t":11,"s":7,"q":11,"j":7,"g":7,"f":11,"d":11}},"u":{"d":"72,4v-73,2,-50,-102,-54,-172r22,0v4,56,-17,154,34,154v20,0,36,-14,51,-34r0,-120r22,0r0,168r-18,0v0,0,-2,-13,-3,-26v-10,12,-30,30,-54,30","w":164},"v":{"d":"22,-168r53,132r50,-132r22,0r-63,168r-18,0r-66,-168r22,0","w":146,"k":{"\u2026":18,"\u201a":18,"\u201e":18,",":18,"o":7,"e":7,"c":7,"a":11,".":18,"q":7,"j":7,"g":7,"d":7}},"w":{"d":"102,-152r20,0r41,113r40,-129r22,0r-52,168r-18,0r-43,-118r-43,118r-17,0r-52,-168r21,0r40,129","w":224,"k":{"\u2026":18,"\u201a":18,"\u201e":18,",":18,"o":7,"e":7,"c":7,"a":7,".":18,"q":7,"j":7,"g":7,"d":7}},"z":{"d":"10,-148r0,-20r118,0r0,20r-95,128r96,0r0,20r-122,0r0,-19r95,-129r-92,0","w":136,"k":{"\u2014":7,"\u2013":7,"-":7,"o":7,"e":7,"c":7,"a":7,"q":7,"g":7,"d":7}},"0":{"d":"102,-256v58,0,87,40,87,130v0,90,-29,131,-87,131v-58,0,-88,-41,-88,-131v0,-90,30,-130,88,-130xm102,-17v40,0,60,-29,60,-109v0,-80,-20,-108,-60,-108v-40,0,-61,28,-61,108v0,80,21,109,61,109","w":203,"k":{"8":4,"7":14,"3":18,"2":11,"1":11}},"1":{"d":"7,-229v24,-7,40,-23,72,-23r0,252r-24,0r0,-226r-48,15r0,-18","w":96},"2":{"d":"157,-190v0,80,-104,91,-123,168r120,0r0,22r-143,0v-15,-100,119,-117,121,-189v0,-29,-10,-45,-51,-45v-31,0,-56,20,-56,20r-9,-15v0,0,29,-27,70,-27v46,0,71,22,71,66","w":167,"k":{"8":7,"7":7,"4":18}},"3":{"d":"84,-149v25,0,80,6,80,79v0,46,-33,75,-81,75v-47,0,-76,-22,-76,-22v8,-33,16,0,72,0v50,0,60,-28,60,-54v0,-31,-11,-57,-52,-57r-38,0r0,-14r75,-88r-109,0r0,-22r139,0r0,22","w":174,"k":{"9":11,"7":11,"5":7,"3":11,"2":7,"1":7}},"4":{"d":"170,-93r0,22r-25,0r0,71r-23,0r0,-71r-115,0r0,-22r94,-163r26,0r-94,163r89,0r0,-75r23,0r0,75r25,0","w":177,"k":{"9":7,"7":18,"5":11,"3":11,"1":18}},"5":{"d":"31,-252r127,0r0,22r-106,0r-7,80v48,-23,116,1,116,70v0,46,-35,85,-83,85v-47,0,-67,-22,-67,-22v10,-31,6,1,62,0v50,0,63,-39,63,-61v0,-37,-15,-60,-52,-60v-46,1,-40,22,-63,12","w":172,"k":{"9":7,"7":7,"5":7,"3":7}},"6":{"d":"91,5v-68,0,-77,-62,-77,-129v0,-129,87,-153,143,-112v-9,26,-10,2,-48,0v-54,-2,-77,51,-72,115v6,-13,26,-36,59,-36v43,0,72,30,72,79v0,51,-36,83,-77,83xm100,-136v-45,0,-60,42,-62,51v4,37,15,70,53,70v27,0,54,-20,54,-63v0,-35,-18,-58,-45,-58","w":178,"k":{"9":11,"7":14,"5":11,"3":11,"1":7}},"7":{"d":"7,-252r150,0r0,22r-75,230r-25,0r74,-230r-124,0r0,-22","w":163,"k":{"\u2026":36,"\u201a":36,"\u201e":36,",":36,".":36,"8":7,"6":4,"5":4,"4":14,"0":4}},"8":{"d":"116,-135v39,21,57,39,57,73v0,40,-29,67,-81,67v-51,0,-79,-26,-79,-65v0,-44,42,-69,56,-75v-64,-27,-62,-120,24,-121v44,0,67,25,67,59v0,32,-30,54,-44,62xm48,-198v-1,26,21,39,49,53v14,-5,41,-22,41,-50v0,-27,-18,-40,-45,-40v-23,0,-45,9,-45,37xm93,-16v41,0,56,-20,56,-46v0,-27,-20,-46,-61,-63v-12,5,-53,27,-53,62v0,25,15,47,58,47","w":185,"k":{"9":11,"7":18,"5":11,"3":11,"2":7,"1":14,"0":4}},"9":{"d":"87,-256v68,0,78,62,78,129v0,129,-87,153,-143,112v9,-26,10,-1,48,0v54,1,75,-48,73,-115v-11,10,-24,35,-60,35v-43,0,-72,-30,-72,-79v0,-51,35,-82,76,-82xm78,-115v45,0,61,-42,63,-51v-4,-37,-16,-70,-54,-70v-27,0,-53,19,-53,62v0,35,17,59,44,59","w":178,"k":{"7":18,"3":14,"2":11,"1":11}},"\u20ac":{"d":"127,-17v32,0,51,-16,51,-16r10,13v0,0,-17,25,-67,25v-41,0,-80,-24,-88,-99r-33,0r5,-17r27,0r0,-26r-32,0r5,-17r28,0v9,-80,52,-102,85,-102v41,0,59,22,59,22v-9,25,-11,1,-51,0v-35,0,-60,21,-67,80r104,0r-5,17r-100,0r-1,26r96,0r-5,17r-89,0v6,55,29,77,68,77","w":195},"$":{"d":"95,-140v89,19,87,134,0,144r0,29r-18,0r0,-29v-47,-3,-66,-23,-66,-23v9,-30,18,2,66,1r0,-102v-36,-13,-62,-34,-62,-69v0,-40,27,-63,62,-67r0,-23r18,0r0,23v47,9,68,8,50,31v0,0,-23,-10,-49,-10v-3,29,0,64,-1,95xm40,-190v0,23,14,35,37,44r0,-87v-22,4,-37,16,-37,43xm95,-19v57,-14,57,-76,0,-94r0,94","w":171},"&":{"d":"200,-120v0,31,-7,55,-17,73r38,33r-10,14v-10,-5,-24,-16,-40,-30v-40,55,-160,45,-160,-32v0,-33,22,-53,55,-77v-18,-23,-29,-43,-29,-62v0,-71,116,-73,117,-8v0,30,-21,47,-59,73v22,26,48,52,72,74v11,-21,14,-44,14,-58r19,0xm97,-236v-56,0,-39,57,-12,87v27,-20,48,-34,48,-59v0,-19,-17,-28,-36,-28xm34,-63v0,62,102,57,122,19r-44,-43v-12,-13,-24,-26,-34,-38v-26,19,-44,36,-44,62","w":224},"\u2122":{"d":"150,-180r38,-72r16,0r0,106r-16,0r0,-73r-30,57r-14,0r-33,-58r0,74r-17,0r0,-106r17,0xm0,-237r0,-15r84,0r0,15r-34,0r0,91r-17,0r0,-91r-33,0","w":211},"\u00a9":{"d":"146,-57v36,0,35,-22,44,0v0,0,-17,18,-49,18v-32,0,-68,-21,-68,-84v0,-94,77,-98,114,-70v-6,21,-10,1,-42,1v-30,0,-51,16,-51,69v0,49,19,66,52,66xm138,-256v70,0,127,46,127,130v0,83,-60,131,-127,131v-66,0,-127,-47,-127,-131v0,-85,61,-130,127,-130xm138,-8v59,0,111,-38,111,-118v-1,-157,-221,-157,-222,0v0,80,52,118,111,118","w":275},"\u00ae":{"d":"130,-207v70,-9,84,80,28,94r35,71r-19,0r-34,-68r-32,0r0,68r-18,0r0,-165r40,0xm108,-126v33,1,67,2,67,-33v0,-36,-35,-31,-67,-31r0,64xm138,-256v70,0,127,46,127,130v0,83,-60,131,-127,131v-66,0,-127,-47,-127,-131v0,-85,61,-130,127,-130xm138,-8v59,0,111,-38,111,-118v-1,-157,-221,-157,-222,0v0,80,52,118,111,118","w":275},"@":{"d":"33,-121v1,145,155,159,224,85r10,9v-79,101,-256,57,-256,-94v0,-100,78,-159,155,-159v83,0,131,50,131,121v0,73,-47,121,-79,121v-10,0,-29,-5,-26,-42v0,0,-14,42,-54,42v-28,0,-56,-22,-56,-74v0,-68,66,-133,124,-92r1,-8r21,0r-16,126v-2,13,-3,28,9,28v15,0,58,-24,58,-101v0,-68,-51,-103,-113,-103v-55,0,-133,43,-133,141xm197,-129r6,-57v-48,-37,-98,15,-98,72v0,26,6,56,36,56v39,0,56,-71,56,-71","w":307},"!":{"d":"55,-13v0,10,-9,18,-19,18v-10,0,-18,-8,-18,-18v0,-10,8,-18,18,-18v10,0,19,8,19,18xm49,-252r-4,201r-18,0r-3,-201r25,0","w":72},".":{"d":"48,-13v0,10,-9,18,-19,18v-10,0,-18,-8,-18,-18v0,-10,8,-18,18,-18v10,0,19,8,19,18"},",":{"d":"27,5v-21,-1,-20,-37,2,-36v19,1,24,21,16,39v-11,24,-21,40,-32,23v0,0,11,-11,14,-26"},"\u00ab":{"d":"82,-170r-49,85r48,83r-10,6v0,0,-23,-19,-64,-90v41,-72,63,-91,63,-91xm130,-8r-12,7v0,0,-19,-14,-60,-86v41,-72,60,-85,60,-85r11,6r-45,78","w":137},"\u00b6":{"d":"11,-182v0,-69,65,-75,137,-70r0,330r-20,0r0,-308r-25,0r0,308r-20,0r0,-191v-35,0,-72,-29,-72,-69","w":166},")":{"d":"54,-96v0,-102,-52,-149,-52,-149r8,-11v0,0,69,37,69,160v0,123,-69,159,-69,159r-8,-10v0,0,52,-47,52,-149","w":93},"*":{"d":"31,-158v8,-14,18,-26,25,-34r-45,0r0,-20v16,0,31,2,42,4r-22,-39r17,-10v8,14,14,29,18,39r22,-39r17,10v-8,14,-18,26,-25,35r45,0r0,20v-16,0,-31,-3,-42,-5r22,39r-17,10v-8,-14,-13,-28,-17,-38r-23,38","w":135},"[":{"d":"92,60r-74,0r0,-312r74,0r0,21r-51,0r0,270r51,0r0,21","w":93},"]":{"d":"76,60r-74,0r0,-21r51,0r0,-270r-51,0r0,-21r74,0r0,312","w":93},"%":{"d":"75,-256v32,0,64,26,64,75v0,49,-32,74,-65,74v-32,0,-63,-25,-63,-74v0,-49,31,-75,64,-75xm74,-126v26,0,41,-15,41,-55v0,-40,-17,-55,-40,-55v-22,0,-41,15,-41,55v0,40,16,55,40,55xm229,-145v33,0,63,26,63,75v0,100,-127,99,-127,0v0,-49,32,-75,64,-75xm228,-15v26,0,41,-15,41,-55v0,-40,-16,-55,-40,-55v-22,0,-41,15,-41,55v0,40,15,55,40,55xm260,-252r-190,252r-27,0r190,-252r27,0","w":303},"=":{"d":"7,-158r166,0r0,22r-166,0r0,-22xm7,-80r166,0r0,22r-166,0r0,-22","w":180},"+":{"d":"102,-119r71,0r0,22r-71,0r0,71r-24,0r0,-71r-71,0r0,-22r71,0r0,-72r24,0r0,72","w":180},"-":{"d":"7,-105r108,0r0,22r-108,0r0,-22","w":122,"k":{"X":25,"T":25,"7":18,"3":18,"1":25,"z":7,"f":14,"\u044a":18,"\u0442":14,"\u0436":11,"Z":18,"Y":36,"W":25,"V":25,"S":25,"\u042a":25,"\u0425":25,"\u0423":36,"\u0422":25}},"\u2260":{"d":"72,-54r-24,28r-29,0r25,-28r-37,0r0,-22r55,0r55,-63r-110,0r0,-22r129,0r26,-29r29,0r-26,29r37,0r0,22r-56,0r-55,63r111,0r0,22r-130,0","w":208},"\u00f7":{"d":"7,-119r195,0r0,22r-195,0r0,-22xm122,-181v0,9,-8,16,-18,16v-10,0,-17,-7,-17,-16v0,-9,7,-17,17,-17v10,0,18,8,18,17xm122,-35v0,9,-8,17,-18,17v-10,0,-17,-8,-17,-17v0,-9,7,-17,17,-17v10,0,18,8,18,17","w":208},"\u00b1":{"d":"116,-163r86,0r0,22r-86,0r0,71r-23,0r0,-71r-86,0r0,-22r86,0r0,-71r23,0r0,71xm7,-41r195,0r0,22r-195,0r0,-22","w":208},"\u2264":{"d":"45,-124r156,62r0,24r-190,-77r0,-18r190,-73r0,25xm11,-22r190,0r0,22r-190,0r0,-22","w":211},"\u2265":{"d":"167,-124r-156,-57r0,-25r190,73r0,18r-190,77r0,-24xm11,-22r190,0r0,22r-190,0r0,-22","w":211},"\u00d7":{"d":"94,-125r71,-70r16,16r-71,71r71,70r-16,16r-71,-70r-71,70r-16,-16r71,-70r-71,-71r16,-16","w":187},"A":{"d":"173,0r-26,-76r-93,0r-24,76r-23,0r80,-252r23,0r88,252r-25,0xm61,-97r79,0r-41,-119","w":204,"k":{"\u2019":29,"\u2018":29,"\u201c":29,"\u201d":29,"\u00b0":29,"`":29,"^":29,"'":29,"\"":29,"*":29,"y":18,"o":7,"e":7,"c":7,"a":4,"T":36,"O":14,"C":14,"w":18,"v":22,"u":7,"t":22,"s":4,"q":7,"l":7,"j":7,"g":11,"f":22,"d":7,"b":7,"Y":36,"W":22,"V":29,"U":14,"S":14,"Q":14,"G":14}},"C":{"d":"125,-17v38,0,61,-17,61,-17r8,14v0,0,-27,25,-77,25v-51,0,-103,-30,-103,-128v0,-105,56,-133,102,-133v41,0,72,22,72,22v-7,30,-18,0,-64,0v-48,0,-84,28,-84,111v0,77,33,106,85,106","w":200,"k":{"y":18,"o":7,"e":7,"c":7,"a":7,"T":11,"O":18,"C":18,"z":7,"w":18,"v":18,"u":7,"t":18,"s":7,"q":7,"g":7,"f":18,"d":7,"Y":7,"S":7,"Q":18,"G":18}},"E":{"d":"166,0r-148,0r0,-252r147,0r0,22r-124,0r0,89r106,0r0,22r-106,0r0,97r125,0r0,22","w":177,"k":{"y":14,"o":11,"e":11,"c":11,"a":14,"O":11,"C":11,"w":14,"v":14,"u":11,"t":18,"s":7,"q":11,"j":7,"g":11,"f":18,"d":11,"S":11,"Q":11,"G":11}},"M":{"d":"41,0r-23,0r0,-252r23,0r93,178r88,-178r23,0r0,252r-23,0r0,-201r-77,153r-21,0r-83,-156r0,204","w":262},"O":{"d":"117,-256v58,0,102,40,102,130v0,90,-44,131,-102,131v-58,0,-103,-41,-103,-131v0,-90,45,-130,103,-130xm117,-17v40,0,76,-29,76,-109v0,-80,-36,-108,-76,-108v-40,0,-77,28,-77,108v0,80,37,109,77,109","w":232,"k":{"X":14,"x":7,"a":7,"T":22,"A":14,"j":7,"g":7,"Z":14,"Y":18,"W":11,"V":14,"S":11,"J":7}},"P":{"d":"18,-252v80,-3,163,-1,163,73v0,62,-62,82,-139,76r0,103r-24,0r0,-252xm156,-179v0,-63,-60,-49,-114,-51r0,105v56,-1,114,9,114,-54","w":191,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":18,"\u2013":18,"-":18,",":36,"X":14,"x":7,"p":7,"o":14,"e":14,"c":14,"a":14,"T":14,"A":29,".":36,"z":7,"u":7,"s":11,"r":7,"q":14,"n":7,"m":7,"j":7,"g":14,"d":14,"Z":18,"Y":14,"W":7,"V":7,"S":7,"J":14}},"T":{"d":"7,-252r173,0r0,22r-75,0r0,230r-23,0r0,-230r-75,0r0,-22","w":187,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":25,"\u2013":25,"-":25,",":36,"y":29,"x":29,"p":29,"o":36,"e":36,"c":36,"a":36,"O":22,"C":22,"A":36,".":36,"z":29,"w":36,"v":36,"u":29,"t":22,"s":36,"r":29,"q":36,"n":22,"m":29,"j":14,"i":14,"g":36,"f":18,"d":36,"S":11,"Q":22,"J":14,"G":22}},"\u0451":{"d":"33,-82v-6,70,68,74,103,59r4,12v0,0,-22,15,-54,15v-44,0,-75,-31,-75,-86v0,-57,36,-90,73,-90v48,0,59,47,59,88xm84,-154v-23,0,-46,21,-51,58v7,-1,31,-5,88,-6v-1,-27,-13,-52,-37,-52xm65,-199v0,8,-7,15,-15,15v-9,0,-16,-7,-16,-15v0,-8,7,-15,16,-15v8,0,15,7,15,15xm127,-199v0,8,-6,15,-15,15v-8,0,-16,-7,-16,-15v0,-8,8,-15,16,-15v9,0,15,7,15,15","w":154,"k":{"\u0443":7,"\u0445":7,"\u044f":7,"\u044d":7,"\u044a":7,"\u0444":4,"\u0442":11,"\u043b":11,"\u0437":7,"\u0436":7,"\u0434":7,"\u0430":7}},"a":{"d":"82,-170v39,0,59,16,59,71r0,99r-17,0v0,0,-2,-13,-3,-26v-19,33,-108,42,-108,-15v0,-34,30,-51,107,-58v0,-41,-12,-53,-43,-53v-23,0,-49,10,-49,10r-5,-13v0,0,28,-15,59,-15xm64,-17v20,0,40,-12,56,-31r0,-31v-53,0,-85,9,-85,37v0,19,13,25,29,25","w":159,"k":{"w":4,"v":4,"t":4,"f":4}},"c":{"d":"87,-14v26,0,44,-10,44,-10v12,22,-5,28,-50,28v-38,0,-70,-31,-70,-86v0,-55,31,-90,70,-90v40,0,60,8,46,28v0,0,-18,-9,-41,-9v-31,0,-54,30,-54,71v0,41,24,68,55,68","w":142,"k":{"o":7,"e":7,"c":7,"a":7,"t":4,"q":7,"j":4,"g":4,"f":4,"d":7}},"e":{"d":"33,-82v-6,70,68,74,103,59r4,12v0,0,-22,15,-54,15v-44,0,-75,-31,-75,-86v0,-57,36,-90,73,-90v48,0,59,47,59,88xm84,-154v-23,0,-46,21,-51,58v7,-1,31,-5,88,-6v-1,-27,-13,-52,-37,-52","w":154,"k":{"y":7,"x":7,"a":7,"z":7,"w":7,"v":7,"t":7,"f":7}},"o":{"d":"86,-172v38,0,75,30,75,88v0,117,-151,117,-150,0v0,-58,37,-88,75,-88xm85,-15v30,0,53,-22,53,-69v0,-47,-24,-69,-52,-69v-26,0,-53,22,-53,69v0,47,23,69,52,69","w":171,"k":{"y":7,"x":11,"a":7,"z":11,"w":7,"v":7,"t":7,"f":7}},"p":{"d":"18,78r0,-246r18,0v0,0,2,13,3,25v10,-12,29,-29,53,-29v44,0,58,39,58,81v0,89,-58,112,-110,83r0,86r-22,0xm127,-91v0,-31,-9,-63,-37,-63v-19,0,-35,14,-50,34r0,93v36,22,90,27,87,-64","w":161,"k":{"y":7,"x":11,"a":7,"z":11,"w":7,"v":7,"t":7,"f":7}},"x":{"d":"70,-105r3,0r41,-63r25,0r-53,81r57,87r-25,0r-46,-69r-46,69r-26,0r57,-87r-53,-81r25,0","w":143,"k":{"o":11,"e":7,"c":11,"a":7,"q":11,"g":7,"d":11}},"y":{"d":"124,-168r23,0r-60,195v-10,46,-49,67,-83,39r8,-12v34,22,54,-19,60,-54r-15,0r-57,-168r24,0r53,154","w":146,"k":{"\u2026":18,"\u201a":18,"\u201e":18,",":18,"o":7,"e":7,"c":7,"a":7,".":18,"q":7,"g":7,"d":7}},"X":{"d":"97,-149r4,0r67,-103r28,0r-82,125r84,127r-28,0r-71,-108r-71,108r-28,0r84,-127r-82,-125r28,0","w":198,"k":{"\u2014":25,"\u2013":25,"-":25,"y":14,"o":7,"e":7,"c":7,"a":4,"O":14,"C":14,"w":14,"v":14,"u":7,"t":14,"q":7,"g":7,"f":14,"d":7,"Q":14,"G":14}},"\u0420":{"d":"18,-252v80,-3,163,-1,163,73v0,62,-62,82,-139,76r0,103r-24,0r0,-252xm156,-179v0,-63,-60,-49,-114,-51r0,105v56,-1,114,9,114,-54","w":191,"k":{"\u2026":36,"\u201a":36,"\u201e":36,"\u2014":18,"\u2013":18,"-":18,",":36,"\u0410":29,"\u0445":7,"\u0451":14,".":36,"\u044f":11,"\u044d":11,"\u0447":7,"\u0444":14,"\u0442":7,"\u0441":14,"\u043e":14,"\u043b":22,"\u0437":11,"\u0436":11,"\u0435":14,"\u0434":22,"\u0431":11,"\u0430":14,"\u042f":11,"\u042d":14,"\u042a":14,"\u0425":14,"\u0423":11,"\u0422":14,"\u0417":14,"\u0416":11,"\u0414":29}},"\u0445":{"d":"70,-105r3,0r41,-63r25,0r-53,81r57,87r-25,0r-46,-69r-46,69r-26,0r57,-87r-53,-81r25,0","w":143,"k":{"\u0451":7,"\u0447":7,"\u0444":11,"\u0441":11,"\u043e":11,"\u0435":7,"\u0431":7,"\u0430":7}},"\u0443":{"d":"124,-168r23,0r-60,195v-10,46,-49,67,-83,39r8,-12v34,22,54,-19,60,-54r-15,0r-57,-168r24,0r53,154","w":146,"k":{"\u2026":18,"\u201a":18,"\u201e":18,",":18,"\u0451":7,".":18,"\u044f":7,"\u0444":7,"\u0441":7,"\u043e":7,"\u043b":11,"\u0435":7,"\u0434":11,"\u0430":7}},"B":{"d":"175,-190v0,53,-43,52,-42,55v0,0,53,5,53,62v0,46,-22,73,-87,73r-81,0r0,-252r73,0v63,0,84,26,84,62xm41,-230r0,86v52,1,108,4,111,-46v3,-47,-62,-40,-111,-40xm41,-22v57,-4,121,18,121,-51v0,-60,-65,-48,-121,-49r0,100","w":200,"k":{"X":14,"y":11,"x":11,"a":7,"T":22,"O":7,"C":7,"A":11,"z":11,"w":11,"v":11,"s":7,"j":7,"g":7,"f":7,"Z":7,"Y":18,"W":11,"V":14,"S":11,"Q":7,"J":7,"G":7}},"H":{"d":"173,-141r0,-111r23,0r0,252r-23,0r0,-119r-132,0r0,119r-23,0r0,-252r23,0r0,111r132,0","w":214},"?":{"d":"85,-13v0,10,-8,18,-18,18v-10,0,-19,-8,-19,-18v0,-10,9,-18,19,-18v10,0,18,8,18,18xm148,-184v0,73,-72,65,-72,133r-19,0v0,-82,66,-69,66,-132v0,-32,-19,-51,-54,-51v-31,0,-56,20,-56,20r-9,-15v0,0,29,-27,70,-27v46,0,74,27,74,72","w":155},"\u0401":{"d":"166,0r-148,0r0,-252r147,0r0,22r-124,0r0,89r106,0r0,22r-106,0r0,97r125,0r0,22xm76,-288v0,8,-7,14,-15,14v-9,0,-15,-6,-15,-14v0,-8,6,-15,15,-15v8,0,15,7,15,15xm139,-288v0,8,-7,14,-16,14v-8,0,-15,-6,-15,-14v0,-8,7,-15,15,-15v9,0,16,7,16,15","w":177,"k":{"\u0443":14,"\u0451":11,"\u044f":4,"\u044d":4,"\u044a":14,"\u0447":14,"\u0444":11,"\u0442":14,"\u0441":11,"\u043e":11,"\u0437":4,"\u0435":11,"\u0431":11,"\u0430":14}},"\u2116":{"d":"201,0r-26,0r-134,-215r0,215r-23,0r0,-252r26,0r134,215r0,-215r23,0r0,252xm284,-256v32,0,64,26,64,75v0,49,-32,74,-65,74v-32,0,-63,-25,-63,-74v0,-49,31,-75,64,-75xm283,-126v26,0,41,-15,41,-55v0,-40,-17,-55,-40,-55v-22,0,-41,15,-41,55v0,40,16,55,40,55xm227,-90r114,0r0,22r-114,0r0,-22","w":358},"<":{"d":"7,-103r169,-87r0,24r-140,72r140,73r0,24r-169,-88r0,-18","w":183},">":{"d":"7,-190r169,87r0,18r-169,88r0,-24r141,-73r-141,-72r0,-24","w":183},"\u2039":{"d":"7,-103r169,-87r0,24r-140,72r140,73r0,24r-169,-88r0,-18","w":183},"\u203a":{"d":"7,-190r169,87r0,18r-169,88r0,-24r141,-73r-141,-72r0,-24","w":183},":":{"d":"48,-13v0,10,-9,18,-19,18v-10,0,-18,-8,-18,-18v0,-10,8,-18,18,-18v10,0,19,8,19,18xm48,-154v0,10,-9,17,-19,17v-10,0,-18,-7,-18,-17v0,-10,8,-18,18,-18v10,0,19,8,19,18"},";":{"d":"48,-154v0,10,-9,17,-19,17v-10,0,-18,-7,-18,-17v0,-10,8,-18,18,-18v10,0,19,8,19,18xm27,5v-21,-1,-20,-37,2,-36v19,1,24,21,16,39v-11,24,-21,40,-32,23v0,0,11,-11,14,-26"},"\"":{"d":"40,-142r-14,0v0,0,-8,-34,-8,-110r22,0r0,110xm75,-142r-15,0r0,-110r22,0v0,76,-7,110,-7,110","w":100,"k":{"\u0410":29,"A":29,"d":14,"\u043b":18,"\u0434":18,"\u041b":22,"\u0414":22}},"'":{"d":"39,-142r-20,0r-1,-110r22,0","w":57},"\u00a7":{"d":"141,-114v0,17,-7,29,-17,38v30,32,-1,80,-49,80v-41,0,-60,-16,-60,-16v5,-24,17,-3,54,-3v36,0,45,-15,45,-31v0,-49,-100,-26,-100,-93v0,-17,7,-30,17,-38v-29,-33,4,-87,50,-79v36,5,62,3,48,23v0,0,-21,-5,-44,-5v-23,0,-44,7,-44,28v0,49,100,29,100,96xm120,-115v0,-35,-44,-35,-74,-50v-6,6,-10,15,-10,25v0,34,42,35,72,51v7,-6,12,-15,12,-26","w":155},"^":{"d":"54,-252r18,0r54,86r-24,0r-39,-63r-39,63r-24,0","w":126},"_":{"d":"0,0r108,0r0,22r-108,0r0,-22","w":108},"\/":{"d":"141,-252r-118,252r-23,0r119,-252r22,0","w":141},"\\":{"d":"119,0r-119,-252r23,0r118,252r-22,0","w":141},"#":{"d":"27,-180r52,0r19,-72r23,0r-19,72r66,0r19,-72r23,0r-19,72r48,0r0,22r-53,0r-17,64r47,0r0,22r-53,0r-18,72r-23,0r19,-72r-67,0r-18,72r-23,0r18,-72r-47,0r0,-22r53,0r17,-64r-47,0r0,-22xm96,-158r-16,64r67,0r16,-64r-67,0","w":243},"\u2030":{"d":"75,-256v32,0,64,26,64,75v0,49,-32,74,-65,74v-32,0,-63,-25,-63,-74v0,-49,31,-75,64,-75xm74,-126v26,0,41,-15,41,-55v0,-40,-17,-55,-40,-55v-22,0,-41,15,-41,55v0,40,16,55,40,55xm229,-145v33,0,63,26,63,75v0,100,-127,99,-127,0v0,-49,32,-75,64,-75xm228,-15v26,0,41,-15,41,-55v0,-40,-16,-55,-40,-55v-22,0,-41,15,-41,55v0,40,15,55,40,55xm260,-252r-190,252r-27,0r190,-252r27,0xm371,-145v33,0,64,26,64,75v0,98,-128,99,-128,0v0,-49,32,-75,64,-75xm370,-15v26,0,41,-15,41,-55v0,-40,-16,-55,-40,-55v-22,0,-41,15,-41,55v0,40,15,55,40,55","w":445},"`":{"d":"80,-180r-22,0r-58,-72r31,0","w":79},"\u0454":{"d":"59,-172v39,0,71,30,71,85v0,60,-33,91,-72,91v-43,0,-60,-8,-46,-28v0,0,16,10,43,10v32,0,49,-26,51,-66r-76,0r0,-17v41,0,64,3,76,5v-1,-39,-22,-61,-52,-61v-23,0,-41,9,-41,9v-12,-21,6,-28,46,-28","w":140},"\u0458":{"d":"28,0r0,-168r22,0r0,168v0,28,-1,80,-55,83r-2,-14v25,-7,35,-23,35,-69xm52,-208v0,7,-6,12,-13,12v-8,0,-13,-5,-13,-12v0,-7,5,-13,13,-13v7,0,13,6,13,13","w":70},"\u0405":{"d":"156,-65v1,-63,-141,-46,-141,-123v0,-44,34,-68,82,-68v42,0,75,16,75,16v-2,33,-20,6,-68,6v-35,0,-64,10,-64,44v0,30,30,39,61,49v51,17,80,34,80,78v0,43,-34,68,-83,68v-60,0,-87,-24,-87,-24v5,-34,26,2,78,2v53,0,67,-22,67,-48","w":191},"\u0455":{"d":"110,-46v-2,-43,-98,-24,-98,-79v0,-34,28,-47,60,-47v37,0,64,4,48,23v-13,-3,-96,-16,-87,23v0,17,18,22,40,28v35,11,58,17,58,53v0,32,-27,49,-60,49v-41,0,-60,-16,-60,-16v3,-24,17,-3,53,-3v36,0,46,-13,46,-31","w":141},"\u0406":{"d":"41,-252r0,252r-23,0r0,-252r23,0"},"\u0456":{"d":"20,-168r22,0r0,168r-22,0r0,-168xm44,-208v0,7,-6,12,-13,12v-7,0,-13,-5,-13,-12v0,-7,6,-13,13,-13v7,0,13,6,13,13","w":62},"\u00b0":{"d":"72,-256v32,0,63,26,63,75v0,49,-31,74,-64,74v-32,0,-64,-25,-64,-74v0,-49,32,-75,65,-75xm71,-126v26,0,41,-15,41,-55v0,-40,-17,-55,-40,-55v-22,0,-41,15,-41,55v0,40,16,55,40,55","w":142},"{":{"d":"11,-89r0,-16v13,0,30,-7,30,-35v-2,-51,-4,-118,45,-112r20,0r0,18v-29,-1,-42,-2,-42,39r0,50v0,42,-24,48,-24,48v0,0,24,5,24,47v0,33,-5,97,25,90r17,0r0,18v-43,3,-65,-9,-65,-57r0,-55v0,-28,-17,-35,-30,-35","w":107},"}":{"d":"97,-105r0,16v-13,0,-30,7,-30,35v2,51,4,118,-45,112r-20,0r0,-18v29,1,42,2,42,-39r0,-51v0,-42,24,-47,24,-47v0,0,-24,-6,-24,-48v0,-33,5,-96,-25,-89r-17,0r0,-18v43,-3,65,9,65,57r0,55v0,28,17,35,30,35","w":107},"|":{"d":"41,-277r0,302r-23,0r0,-302r23,0"},"\u0404":{"d":"87,-256v46,0,99,22,99,127v0,98,-47,134,-98,134v-50,0,-81,-25,-81,-25v7,-32,20,3,73,3v50,0,78,-31,80,-101r-115,0r0,-22r115,0v-3,-74,-36,-94,-81,-94v-31,0,-57,14,-57,14r-7,-14v0,0,31,-22,72,-22","w":200},"\u2013":{"d":"7,-105r183,0r0,22r-183,0r0,-22","w":197,"k":{"X":25,"T":25,"7":18,"3":18,"1":25,"z":7,"f":14,"\u044a":18,"\u0442":14,"\u0436":11,"Z":18,"Y":36,"W":25,"V":25,"S":25,"\u042a":25,"\u0425":25,"\u0423":36,"\u0422":25}},"\u2014":{"d":"7,-105r227,0r0,22r-227,0r0,-22","w":241,"k":{"X":25,"T":25,"7":18,"3":18,"1":25,"z":7,"f":14,"\u044a":18,"\u0442":14,"\u0436":11,"Z":18,"Y":36,"W":25,"V":25,"S":25,"\u042a":25,"\u0425":25,"\u0423":36,"\u0422":25}},"\u201d":{"d":"41,-142r-14,0v0,0,-9,-27,-9,-110r23,0r0,110xm81,-252r0,110r-21,0r0,-110r21,0","w":99},"\u201c":{"d":"27,-252r13,0r0,110r-22,0v0,-82,9,-110,9,-110xm60,-252r22,0r0,110r-22,0r0,-110","w":100},"\u2018":{"d":"27,-252r13,0r0,110r-22,0v0,-82,9,-110,9,-110","w":57},"\u2019":{"d":"41,-142r-14,0v0,0,-9,-27,-9,-110r23,0r0,110"},"\u201e":{"d":"41,63r-14,0v0,0,-9,-27,-9,-110r23,0r0,110xm81,-47r0,110r-21,0r0,-110r21,0","w":99},"\u201a":{"d":"41,63r-14,0v0,0,-9,-27,-9,-110r23,0r0,110"},"\u2026":{"d":"48,-13v0,10,-9,18,-19,18v-10,0,-18,-8,-18,-18v0,-10,8,-18,18,-18v10,0,19,8,19,18xm120,-13v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18v0,-10,8,-18,18,-18v10,0,18,8,18,18xm193,-13v0,10,-8,18,-18,18v-10,0,-19,-8,-19,-18v0,-10,9,-18,19,-18v10,0,18,8,18,18","w":203},"\u0408":{"d":"41,-79r0,-173r22,0r0,173v0,28,-6,81,-60,84r-3,-17v25,-7,41,-21,41,-67","w":81},"\u040e":{"d":"174,-252r25,0r-79,207v-13,46,-54,65,-88,35r7,-13v21,11,50,10,59,-30r-91,-199r25,0r77,169xm139,-309r22,0v0,23,-19,47,-56,47v-42,0,-55,-24,-55,-47r22,0v0,13,8,28,33,28v23,0,34,-15,34,-28","w":206},"\u045e":{"d":"124,-168r23,0r-60,195v-10,46,-49,67,-83,39r8,-12v34,22,54,-19,60,-54r-15,0r-57,-168r24,0r53,154xm102,-225r19,0v0,20,-16,41,-47,41v-36,0,-47,-21,-47,-41r19,0v0,11,7,25,28,25v21,0,28,-14,28,-25","w":146},"\u00a6":{"d":"41,-277r0,129r-23,0r0,-129r23,0xm41,25r-23,0r0,-129r23,0r0,129"},"\u2020":{"d":"7,-188r54,0r0,-89r23,0r0,89r54,0r0,22r-54,0r0,191r-23,0r0,-191r-54,0r0,-22","w":145},"\u2021":{"d":"7,-198r54,0r0,-79r23,0r0,79r54,0r0,22r-54,0r0,100r54,0r0,22r-54,0r0,79r-23,0r0,-79r-54,0r0,-22r54,0r0,-100r-54,0r0,-22","w":145},"\u0407":{"d":"41,-252r0,252r-23,0r0,-252r23,0xm13,-288v0,8,-7,14,-15,14v-9,0,-15,-6,-15,-14v0,-8,6,-15,15,-15v8,0,15,7,15,15xm76,-288v0,8,-7,14,-16,14v-8,0,-15,-6,-15,-14v0,-8,7,-15,15,-15v9,0,16,7,16,15"},"\u0457":{"d":"20,-168r22,0r0,168r-22,0r0,-168xm15,-199v0,8,-7,15,-15,15v-9,0,-15,-7,-15,-15v0,-8,6,-15,15,-15v8,0,15,7,15,15xm78,-199v0,8,-7,15,-16,15v-8,0,-15,-7,-15,-15v0,-8,7,-15,15,-15v9,0,16,7,16,15","w":62},"\u0490":{"d":"160,-288r0,58r-119,0r0,230r-23,0r0,-252r119,0r0,-36r23,0","w":167},"\u0491":{"d":"120,-200r0,51r-80,0r0,149r-22,0r0,-168r80,0r0,-32r22,0","w":126},"\u040c":{"d":"109,-132v44,8,34,116,81,120r-3,17v-31,0,-52,-16,-64,-73v-13,-59,-30,-52,-82,-52r0,120r-23,0r0,-252r23,0r0,110v47,-2,66,11,78,-47v12,-58,33,-67,64,-67r2,16v-43,0,-39,103,-76,108xm98,-252r-22,0r36,-54r31,0","w":194},"\u0403":{"d":"18,-252r142,0r0,22r-119,0r0,230r-23,0r0,-252xm97,-263r-22,0r36,-54r32,0","w":167},"\u045c":{"d":"87,-90v9,4,28,19,28,38v5,26,16,34,31,38r-4,16v-26,0,-40,-9,-50,-54v-8,-33,-23,-27,-52,-28r0,80r-22,0r0,-168r22,0r0,70v27,0,46,4,52,-24v9,-43,24,-48,46,-48r3,14v-27,-2,-23,65,-54,66xm81,-171r-22,0r36,-54r32,0","w":149},"\u0453":{"d":"18,0r0,-168r102,0r0,19r-80,0r0,149r-22,0xm81,-182r-22,0r36,-54r32,0","w":126},"\u040f":{"d":"18,0r0,-252r23,0r0,230r122,0r0,-230r23,0r0,252r-72,0r-2,66r-20,0r-2,-66r-72,0","w":204},"\u045f":{"d":"93,0r-2,51r-18,0r-2,-51r-53,0r0,-168r22,0r0,149r83,0r0,-149r22,0r0,168r-52,0","w":163},"\u00ad":{"d":"7,-105r108,0r0,22r-108,0r0,-22","w":122},"\u00ac":{"d":"149,-127r0,58r-23,0r0,-36r-119,0r0,-22r142,0","w":156},"\u0409":{"d":"337,-75v0,72,-79,80,-160,75r0,-230r-99,0v0,171,-8,227,-74,234r-4,-16v41,-12,55,-48,55,-240r144,0r0,104v75,-5,138,11,138,73xm199,-22v55,-1,113,9,113,-53v0,-62,-58,-51,-113,-52r0,105","w":347},"\u040a":{"d":"333,-75v0,72,-79,80,-160,75r0,-127r-132,0r0,127r-23,0r0,-252r23,0r0,103r132,0r0,-103r23,0r0,104v75,-5,137,11,137,73xm196,-22v55,-1,113,9,113,-53v0,-62,-58,-51,-113,-52r0,105","w":344},"\u0459":{"d":"146,-102v52,-4,98,7,98,52v0,52,-64,53,-120,50r0,-149r-64,0v0,113,-15,146,-56,151r-4,-16v28,-8,38,-35,38,-154r108,0r0,66xm146,-19v35,3,83,-2,76,-31v6,-27,-40,-38,-76,-33r0,64","w":254},"\u045a":{"d":"143,-102v52,-4,97,7,97,52v0,52,-63,53,-119,50r0,-83r-81,0r0,83r-22,0r0,-168r22,0r0,65r81,0r0,-65r22,0r0,66xm143,-19v35,3,83,-2,76,-31v6,-27,-40,-38,-76,-33r0,64","w":251},"\u00b5":{"d":"126,-26v-13,23,-65,46,-86,13r0,91r-22,0r0,-246r22,0v2,56,-13,152,36,152v18,0,34,-14,49,-34r0,-118r22,0r0,168r-18,0v0,0,-2,-13,-3,-26","w":164},"\u03bc":{"d":"126,-26v-13,23,-65,46,-86,13r0,91r-22,0r0,-246r22,0v2,56,-13,152,36,152v18,0,34,-14,49,-34r0,-118r22,0r0,168r-18,0v0,0,-2,-13,-3,-26","w":164},"\u045b":{"d":"111,-158v75,0,43,93,50,158r-22,0r0,-97v4,-64,-60,-46,-83,-11r0,108r-22,0r0,-191r-30,0r0,-19r30,0r0,-42r22,0r0,42r42,0r0,19v-18,0,-32,-1,-42,-2r0,61v12,-12,32,-26,55,-26","w":175},"\u0452":{"d":"104,23v39,-2,35,-69,35,-120v0,-64,-60,-46,-83,-11r0,108r-22,0r0,-191r-30,0r0,-19r30,0r0,-42r22,0r0,42r42,0r0,19v-18,0,-32,-1,-42,-2r0,61v12,-12,32,-26,55,-26v60,-1,49,57,50,111v0,28,-1,80,-55,83","w":175},"\u040b":{"d":"75,-129r0,129r-23,0r0,-252r23,0r0,105v0,0,30,-12,72,-12v87,0,73,80,73,159r-23,0v-2,-62,17,-139,-52,-139v-46,0,-70,10,-70,10xm0,-252r135,0r0,22r-135,0r0,-22","w":234},"\u0402":{"d":"0,-252r135,0r0,22r-135,0r0,-22xm161,23v36,-3,36,-58,36,-109v0,-34,-17,-53,-52,-53v-46,0,-70,10,-70,10r0,129r-23,0r0,-252r23,0r0,105v0,0,30,-12,72,-12v68,0,73,46,73,112v0,28,-2,80,-56,83","w":230},"\u00a4":{"d":"4,-90r3,-18r18,0r0,-9r-21,0r3,-17r18,0r0,-118v78,-4,163,1,163,69v0,55,-67,71,-139,66r0,9v57,-1,92,-1,114,43r32,65r-25,0v-21,-30,-30,-92,-76,-90r-45,0r0,90r-24,0r0,-90r-21,0xm49,-134v54,-1,114,9,114,-49v0,-57,-62,-46,-114,-47r0,96","w":199},"\u00bb":{"d":"19,-1r-12,-7r47,-80r-45,-78r10,-6v0,0,20,13,61,85v-41,72,-61,86,-61,86xm105,-85r-50,-85r13,-7v0,0,21,19,62,91v-41,71,-63,90,-63,90r-10,-6","w":137},"\u0410":{"d":"173,0r-26,-76r-93,0r-24,76r-23,0r80,-252r23,0r88,252r-25,0xm61,-97r79,0r-41,-119","w":204,"k":{"\u2019":29,"\u2018":29,"\u201c":29,"\u201d":29,"\u00b0":29,"`":29,"^":29,"'":29,"\"":29,"*":29,"\u0443":18,"\u0451":7,"\u044f":4,"\u044d":4,"\u044a":22,"\u0447":22,"\u0444":7,"\u0442":22,"\u0441":7,"\u043e":7,"\u0437":4,"\u0435":7,"\u0431":11,"\u0430":7,"\u042f":7,"\u042a":29,"\u0427":22,"\u0424":14,"\u0423":36,"\u0422":36,"\u0421":14,"\u041e":14,"\u0417":7,"\u0414":14}},"~":{"d":"179,-100v-35,72,-115,-27,-160,20r-12,-7v34,-74,115,26,160,-20","w":186},"\u00b7":{"d":"63,-126v0,10,-8,17,-18,17v-10,0,-18,-7,-18,-17v0,-10,8,-18,18,-18v10,0,18,8,18,18","w":90},"\u2022":{"d":"97,-126v0,23,-16,40,-39,40v-23,0,-40,-17,-40,-40v0,-23,17,-40,40,-40v23,0,39,17,39,40","w":115},"\u00a0":{"w":90},"(":{"d":"39,-96v0,102,53,149,53,149r-9,10v0,0,-69,-36,-69,-159v0,-123,69,-160,69,-160r9,11v0,0,-53,47,-53,149","w":93}}});

/**
 * Krio Image Loader Jquery Plugin v1
 * http://krio.me/jquery-image-loader-plugin
*/
(function($){$.fn.krioImageLoader=function(options){var opts=$.extend({},$.fn.krioImageLoader.defaults,options);var imagesToLoad=$(this).find("img").css({opacity:0,visibility:"hidden"}).addClass("krioImageLoader");var imagesToLoadCount=imagesToLoad.size();var checkIfLoadedTimer=setInterval(function(){if(!imagesToLoadCount){clearInterval(checkIfLoadedTimer);return;}else{imagesToLoad.filter(".krioImageLoader").each(function(){if(this.complete){fadeImageIn(this);imagesToLoadCount--;}});}},opts.loadedCheckEvery);var fadeImageIn=function(imageToLoad){$(imageToLoad).css({visibility:"visible"}).animate({opacity:1},opts.imageEnterDelay,removeKrioImageClass(imageToLoad));};var removeKrioImageClass=function(imageToRemoveClass){$(imageToRemoveClass).removeClass("krioImageLoader");};};$.fn.krioImageLoader.defaults={loadedCheckEvery:350,imageEnterDelay:900};})(jQuery);

/**
 * tipsy, facebook style tooltips for jquery
 * version 1.0.0a
 * (c) 2008-2010 jason frame [jason@onehackoranother.com]
 * released under the MIT license
 */
(function(a){function b(a,b){return typeof a=="function"?a.call(b):a}function c(b,c){this.$element=a(b);this.options=c;this.enabled=true;this.fixTitle()}c.prototype={show:function(){var c=this.getTitle();if(c&&this.enabled){var d=this.tip();d.find(".tipsy-inner")[this.options.html?"html":"text"](c);d[0].className="tipsy";d.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var e=a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var f=d[0].offsetWidth,g=d[0].offsetHeight,h=b(this.options.gravity,this.$element[0]);var i;switch(h.charAt(0)){case"n":i={top:e.top+e.height+this.options.offset,left:e.left+e.width/2-f/2};break;case"s":i={top:e.top-g-this.options.offset,left:e.left+e.width/2-f/2};break;case"e":i={top:e.top+e.height/2-g/2,left:e.left-f-this.options.offset};break;case"w":i={top:e.top+e.height/2-g/2,left:e.left+e.width+this.options.offset};break}if(h.length==2){if(h.charAt(1)=="w"){i.left=e.left+e.width/2-15}else{i.left=e.left+e.width/2-f+15}}d.css(i).addClass("tipsy-"+h);d.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+h.charAt(0);if(this.options.className){d.addClass(b(this.options.className,this.$element[0]))}if(this.options.fade){d.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{d.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){a(this).remove()})}else{this.tip().remove()}},fixTitle:function(){var a=this.$element;if(a.attr("title")||typeof a.attr("original-title")!="string"){a.attr("original-title",a.attr("title")||"").removeAttr("title")}},getTitle:function(){var a,b=this.$element,c=this.options;this.fixTitle();var a,c=this.options;if(typeof c.title=="string"){a=b.attr(c.title=="title"?"original-title":c.title)}else if(typeof c.title=="function"){a=c.title.call(b[0])}a=(""+a).replace(/(^\s*|\s*$)/,"");return a||c.fallback},tip:function(){if(!this.$tip){this.$tip=a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};a.fn.tipsy=function(b){function e(d){var e=a.data(d,"tipsy");if(!e){e=new c(d,a.fn.tipsy.elementOptions(d,b));a.data(d,"tipsy",e)}return e}function f(){var a=e(this);a.hoverState="in";if(b.delayIn==0){a.show()}else{a.fixTitle();setTimeout(function(){if(a.hoverState=="in")a.show()},b.delayIn)}}function g(){var a=e(this);a.hoverState="out";if(b.delayOut==0){a.hide()}else{setTimeout(function(){if(a.hoverState=="out")a.hide()},b.delayOut)}}if(b===true){return this.data("tipsy")}else if(typeof b=="string"){var d=this.data("tipsy");if(d)d[b]();return this}b=a.extend({},a.fn.tipsy.defaults,b);if(!b.live)this.each(function(){e(this)});if(b.trigger!="manual"){var h=b.live?"live":"bind",i=b.trigger=="hover"?"mouseenter":"focus",j=b.trigger=="hover"?"mouseleave":"blur";this[h](i,f)[h](j,g)}return this};a.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:.8,title:"title",trigger:"hover"};a.fn.tipsy.elementOptions=function(b,c){return a.metadata?a.extend({},c,a(b).metadata()):c};a.fn.tipsy.autoNS=function(){return a(this).offset().top>a(document).scrollTop()+a(window).height()/2?"s":"n"};a.fn.tipsy.autoWE=function(){return a(this).offset().left>a(document).scrollLeft()+a(window).width()/2?"e":"w"};a.fn.tipsy.autoBounds=function(b,c){return function(){var d={ns:c[0],ew:c.length>1?c[1]:false},e=a(document).scrollTop()+b,f=a(document).scrollLeft()+b,g=a(this);if(g.offset().top<e)d.ns="n";if(g.offset().left<f)d.ew="w";if(a(window).width()+a(document).scrollLeft()-g.offset().left<b)d.ew="e";if(a(window).height()+a(document).scrollTop()-g.offset().top<b)d.ns="s";return d.ns+(d.ew?d.ew:"")}}})(jQuery);

/*
 * jQuery Nivo Slider v3.1
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    var NivoSlider = function(element, options){
        // Defaults are below
        var settings = $.extend({}, $.fn.nivoSlider.defaults, options);

        // Useful variables. Play carefully.
        var vars = {
            currentSlide: 0,
            currentImage: '',
            totalSlides: 0,
            running: false,
            paused: false,
            stop: false,
            controlNavEl: false
        };

        // Get this slider
        var slider = $(element);
        slider.data('nivo:vars', vars).addClass('nivoSlider');

        // Find our slider children
        var kids = slider.children();
        kids.each(function() {
            var child = $(this);
            var link = '';
            if(!child.is('img')){
                if(child.is('a')){
                    child.addClass('nivo-imageLink');
                    link = child;
                }
                child = child.find('img:first');
            }
            // Get img width & height
            var childWidth = (childWidth === 0) ? child.attr('width') : child.width(),
                childHeight = (childHeight === 0) ? child.attr('height') : child.height();

            if(link !== ''){
                link.css('display','none');
            }
            child.css('display','none');
            vars.totalSlides++;
        });
         
        // If randomStart
        if(settings.randomStart){
            settings.startSlide = Math.floor(Math.random() * vars.totalSlides);
        }
        
        // Set startSlide
        if(settings.startSlide > 0){
            if(settings.startSlide >= vars.totalSlides) { settings.startSlide = vars.totalSlides - 1; }
            vars.currentSlide = settings.startSlide;
        }
        
        // Get initial image
        if($(kids[vars.currentSlide]).is('img')){
            vars.currentImage = $(kids[vars.currentSlide]);
        } else {
            vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
        }
        
        // Show initial link
        if($(kids[vars.currentSlide]).is('a')){
            $(kids[vars.currentSlide]).css('display','block');
        }
        
        // Set first background
        var sliderImg = $('<img class="nivo-main-image" src="#" />');
        sliderImg.attr('src', vars.currentImage.attr('src')).show();
        slider.append(sliderImg);

        // Detect Window Resize
        $(window).resize(function() {
            slider.children('img').width(slider.width());
            sliderImg.attr('src', vars.currentImage.attr('src'));
            sliderImg.stop().height('auto');
            $('.nivo-slice').remove();
            $('.nivo-box').remove();
        });

        //Create caption
        slider.append($('<div class="nivo-caption"></div>'));
        
        // Process caption function
        var processCaption = function(settings){
            var nivoCaption = $('.nivo-caption', slider);
            if(vars.currentImage.attr('title') != '' && vars.currentImage.attr('title') != undefined){
                var title = vars.currentImage.attr('title');
                if(title.substr(0,1) == '#') title = $(title).html();   

                if(nivoCaption.css('display') == 'block'){
                    setTimeout(function(){
                        nivoCaption.html(title);
                    }, settings.animSpeed);
                } else {
                    nivoCaption.html(title);
                    nivoCaption.stop().fadeIn(settings.animSpeed);
                }
            } else {
                nivoCaption.stop().fadeOut(settings.animSpeed);
            }
        }
        
        //Process initial  caption
        processCaption(settings);
        
        // In the words of Super Mario "let's a go!"
        var timer = 0;
        if(!settings.manualAdvance && kids.length > 1){
            timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
        }
        
        // Add Direction nav
        if(settings.directionNav){
            slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+ settings.prevText +'</a><a class="nivo-nextNav">'+ settings.nextText +'</a></div>');
            
            $('a.nivo-prevNav', slider).live('click', function(){
                if(vars.running) { return false; }
                clearInterval(timer);
                timer = '';
                vars.currentSlide -= 2;
                nivoRun(slider, kids, settings, 'prev');
            });
            
            $('a.nivo-nextNav', slider).live('click', function(){
                if(vars.running) { return false; }
                clearInterval(timer);
                timer = '';
                nivoRun(slider, kids, settings, 'next');
            });
        }
        
        // Add Control nav
        if(settings.controlNav){
            vars.controlNavEl = $('<div class="nivo-controlNav"></div>');
            slider.after(vars.controlNavEl);
            for(var i = 0; i < kids.length; i++){
                if(settings.controlNavThumbs){
                    vars.controlNavEl.addClass('nivo-thumbs-enabled');
                    var child = kids.eq(i);
                    if(!child.is('img')){
                        child = child.find('img:first');
                    }
                    if(child.attr('data-thumb')) vars.controlNavEl.append('<a class="nivo-control" rel="'+ i +'"><img src="'+ child.attr('data-thumb') +'" alt="" /></a>');
                } else {
                    vars.controlNavEl.append('<a class="nivo-control" rel="'+ i +'">'+ (i + 1) +'</a>');
                }
            }

            //Set initial active link
            $('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
            
            $('a', vars.controlNavEl).bind('click', function(){
                if(vars.running) return false;
                if($(this).hasClass('active')) return false;
                clearInterval(timer);
                timer = '';
                sliderImg.attr('src', vars.currentImage.attr('src'));
                vars.currentSlide = $(this).attr('rel') - 1;
                nivoRun(slider, kids, settings, 'control');
            });
        }
        
        //For pauseOnHover setting
        if(settings.pauseOnHover){
            slider.hover(function(){
                vars.paused = true;
                clearInterval(timer);
                timer = '';
            }, function(){
                vars.paused = false;
                // Restart the timer
                if(timer === '' && !settings.manualAdvance){
                    timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
                }
            });
        }
        
        // Event when Animation finishes
        slider.bind('nivo:animFinished', function(){
            sliderImg.attr('src', vars.currentImage.attr('src'));
            vars.running = false; 
            // Hide child links
            $(kids).each(function(){
                if($(this).is('a')){
                   $(this).css('display','none');
                }
            });
            // Show current link
            if($(kids[vars.currentSlide]).is('a')){
                $(kids[vars.currentSlide]).css('display','block');
            }
            // Restart the timer
            if(timer === '' && !vars.paused && !settings.manualAdvance){
                timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
            }
            // Trigger the afterChange callback
            settings.afterChange.call(this);
        }); 
        
        // Add slices for slice animations
        var createSlices = function(slider, settings, vars) {
        	if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
            $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var sliceHeight = ($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a')) ? $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().height() : $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height();

            for(var i = 0; i < settings.slices; i++){
                var sliceWidth = Math.round(slider.width()/settings.slices);
                
                if(i === settings.slices-1){
                    slider.append(
                        $('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({ 
                            left:(sliceWidth*i)+'px', 
                            width:(slider.width()-(sliceWidth*i))+'px',
                            height:sliceHeight+'px', 
                            opacity:'0',
                            overflow:'hidden'
                        })
                    );
                } else {
                    slider.append(
                        $('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({ 
                            left:(sliceWidth*i)+'px', 
                            width:sliceWidth+'px',
                            height:sliceHeight+'px',
                            opacity:'0',
                            overflow:'hidden'
                        })
                    );
                }
            }
            
            $('.nivo-slice', slider).height(sliceHeight);
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };
        
        // Add boxes for box animations
        var createBoxes = function(slider, settings, vars){
        	if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
            $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var boxWidth = Math.round(slider.width()/settings.boxCols),
                boxHeight = Math.round($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);
            
                        
            for(var rows = 0; rows < settings.boxRows; rows++){
                for(var cols = 0; cols < settings.boxCols; cols++){
                    if(cols === settings.boxCols-1){
                        slider.append(
                            $('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({ 
                                opacity:0,
                                left:(boxWidth*cols)+'px', 
                                top:(boxHeight*rows)+'px',
                                width:(slider.width()-(boxWidth*cols))+'px'
                                
                            })
                        );
                        $('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
                    } else {
                        slider.append(
                            $('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({ 
                                opacity:0,
                                left:(boxWidth*cols)+'px', 
                                top:(boxHeight*rows)+'px',
                                width:boxWidth+'px'
                            })
                        );
                        $('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
                    }
                }
            }
            
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };

        // Private run method
        var nivoRun = function(slider, kids, settings, nudge){          
            // Get our vars
            var vars = slider.data('nivo:vars');
            
            // Trigger the lastSlide callback
            if(vars && (vars.currentSlide === vars.totalSlides - 1)){ 
                settings.lastSlide.call(this);
            }
            
            // Stop
            if((!vars || vars.stop) && !nudge) { return false; }
            
            // Trigger the beforeChange callback
            settings.beforeChange.call(this);

            // Set current background before change
            if(!nudge){
                sliderImg.attr('src', vars.currentImage.attr('src'));
            } else {
                if(nudge === 'prev'){
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
                if(nudge === 'next'){
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
            }
            
            vars.currentSlide++;
            // Trigger the slideshowEnd callback
            if(vars.currentSlide === vars.totalSlides){ 
                vars.currentSlide = 0;
                settings.slideshowEnd.call(this);
            }
            if(vars.currentSlide < 0) { vars.currentSlide = (vars.totalSlides - 1); }
            // Set vars.currentImage
            if($(kids[vars.currentSlide]).is('img')){
                vars.currentImage = $(kids[vars.currentSlide]);
            } else {
                vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
            }
            
            // Set active links
            if(settings.controlNav){
                $('a', vars.controlNavEl).removeClass('active');
                $('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
            }
            
            // Process caption
            processCaption(settings);            
            
            // Remove any slices from last transition
            $('.nivo-slice', slider).remove();
            
            // Remove any boxes from last transition
            $('.nivo-box', slider).remove();
            
            var currentEffect = settings.effect,
                anims = '';
                
            // Generate random effect
            if(settings.effect === 'random'){
                anims = new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade',
                'boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');
                currentEffect = anims[Math.floor(Math.random()*(anims.length + 1))];
                if(currentEffect === undefined) { currentEffect = 'fade'; }
            }
            
            // Run random effect from specified set (eg: effect:'fold,fade')
            if(settings.effect.indexOf(',') !== -1){
                anims = settings.effect.split(',');
                currentEffect = anims[Math.floor(Math.random()*(anims.length))];
                if(currentEffect === undefined) { currentEffect = 'fade'; }
            }
            
            // Custom transition as defined by "data-transition" attribute
            if(vars.currentImage.attr('data-transition')){
                currentEffect = vars.currentImage.attr('data-transition');
            }
        
            // Run effects
            vars.running = true;
            var timeBuff = 0,
                i = 0,
                slices = '',
                firstSlice = '',
                totalBoxes = '',
                boxes = '';
            
            if(currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceDownLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    slice.css({ 'top': '0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'sliceUp' || currentEffect === 'sliceUpRight' || currentEffect === 'sliceUpLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceUpLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    slice.css({ 'bottom': '0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'sliceUpDown' || currentEffect === 'sliceUpDownRight' || currentEffect === 'sliceUpDownLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                var v = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceUpDownLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    if(i === 0){
                        slice.css('top','0px');
                        i++;
                    } else {
                        slice.css('bottom','0px');
                        i = 0;
                    }
                    
                    if(v === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    v++;
                });
            } else if(currentEffect === 'fold'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                
                $('.nivo-slice', slider).each(function(){
                    var slice = $(this);
                    var origWidth = slice.width();
                    slice.css({ top:'0px', width:'0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'fade'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': slider.width() + 'px'
                });
    
                firstSlice.animate({ opacity:'1.0' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
            } else if(currentEffect === 'slideInRight'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
            } else if(currentEffect === 'slideInLeft'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1',
                    'left': '',
                    'right': '0px'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ 
                    // Reset positioning
                    firstSlice.css({
                        'left': '0px',
                        'right': ''
                    });
                    slider.trigger('nivo:animFinished'); 
                });
            } else if(currentEffect === 'boxRandom'){
                createBoxes(slider, settings, vars);
                
                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;

                boxes = shuffle($('.nivo-box', slider));
                boxes.each(function(){
                    var box = $(this);
                    if(i === totalBoxes-1){
                        setTimeout(function(){
                            box.animate({ opacity:'1' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            box.animate({ opacity:'1' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 20;
                    i++;
                });
            } else if(currentEffect === 'boxRain' || currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse'){
                createBoxes(slider, settings, vars);
                
                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;
                
                // Split boxes into 2D array
                var rowIndex = 0;
                var colIndex = 0;
                var box2Darr = [];
                box2Darr[rowIndex] = [];
                boxes = $('.nivo-box', slider);
                if(currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrowReverse'){
                    boxes = $('.nivo-box', slider)._reverse();
                }
                boxes.each(function(){
                    box2Darr[rowIndex][colIndex] = $(this);
                    colIndex++;
                    if(colIndex === settings.boxCols){
                        rowIndex++;
                        colIndex = 0;
                        box2Darr[rowIndex] = [];
                    }
                });
                
                // Run animation
                for(var cols = 0; cols < (settings.boxCols * 2); cols++){
                    var prevCol = cols;
                    for(var rows = 0; rows < settings.boxRows; rows++){
                        if(prevCol >= 0 && prevCol < settings.boxCols){
                            /* Due to some weird JS bug with loop vars 
                            being used in setTimeout, this is wrapped
                            with an anonymous function call */
                            (function(row, col, time, i, totalBoxes) {
                                var box = $(box2Darr[row][col]);
                                var w = box.width();
                                var h = box.height();
                                if(currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse'){
                                    box.width(0).height(0);
                                }
                                if(i === totalBoxes-1){
                                    setTimeout(function(){
                                        box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3, '', function(){ slider.trigger('nivo:animFinished'); });
                                    }, (100 + time));
                                } else {
                                    setTimeout(function(){
                                        box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3);
                                    }, (100 + time));
                                }
                            })(rows, prevCol, timeBuff, i, totalBoxes);
                            i++;
                        }
                        prevCol--;
                    }
                    timeBuff += 100;
                }
            }           
        };
        
        // Shuffle an array
        var shuffle = function(arr){

			/* KF */
            /* for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x); */
			for(var j, x, i = arr.length; i;)
			{
				j = parseInt(Math.random() * i, 10);
				x = arr[--i];
				arr[i] = arr[j];
				arr[j] = x
			}
            return arr;
        };
        
        // For debugging
        var trace = function(msg){
            if(this.console && typeof console.log !== 'undefined') { console.log(msg); }
        };
        
        // Start / Stop
        this.stop = function(){
            if(!$(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = true;
                trace('Stop Slider');
            }
        };
        
        this.start = function(){
            if($(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = false;
                trace('Start Slider');
            }
        };
        
        // Trigger the afterLoad callback
        settings.afterLoad.call(this);
        
        return this;
    };
        
    $.fn.nivoSlider = function(options) {
        return this.each(function(key, value){
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('nivoslider')) { return element.data('nivoslider'); }
            // Pass options to plugin constructor
            var nivoslider = new NivoSlider(this, options);
            // Store plugin object in this element's data
            element.data('nivoslider', nivoslider);
        });
    };
    
    //Default settings
    $.fn.nivoSlider.defaults = {
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function(){},
        afterChange: function(){},
        slideshowEnd: function(){},
        lastSlide: function(){},
        afterLoad: function(){}
    };

    $.fn._reverse = [].reverse;
    
})(jQuery);

/**
 * Quicksand 1.2.2
 *
 * Reorder and filter items with a nice shuffling animation.
 * 
 * Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
 * Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.
 *
 * Dual licensed under the MIT and GPL version 2 licenses.
 * http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
 * http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt
 *
 * Project site: http://razorjack.net/quicksand
 * Github site: http://github.com/razorjack/quicksand
 */
(function($){$.fn.quicksand=function(collection,customOptions){var options={duration:750,easing:'swing',attribute:'data-id',adjustHeight:'auto',useScaling:true,enhancement:function(c){},selector:'> *',dx:0,dy:0};$.extend(options,customOptions);if($.browser.msie||(typeof($.fn.scale)=='undefined')){options.useScaling=false;}var callbackFunction;if(typeof(arguments[1])=='function'){var callbackFunction=arguments[1];}else if(typeof(arguments[2]=='function')){var callbackFunction=arguments[2];}return this.each(function(i){var val;var animationQueue=[];var $collection=$(collection).clone();var $sourceParent=$(this);var sourceHeight=$(this).css('height');var destHeight;var adjustHeightOnCallback=false;var offset=$($sourceParent).offset();var offsets=[];var $source=$(this).find(options.selector);if($.browser.msie&&$.browser.version.substr(0,1)<7){$sourceParent.html('').append($collection);return;}var postCallbackPerformed=0;var postCallback=function(){if(!postCallbackPerformed){postCallbackPerformed=1;$toDelete=$sourceParent.find('> *');$sourceParent.prepend($dest.find('> *'));$toDelete.remove();if(adjustHeightOnCallback){$sourceParent.css('height',destHeight);}options.enhancement($sourceParent);if(typeof callbackFunction=='function'){callbackFunction.call(this);}}};var $correctionParent=$sourceParent.offsetParent();var correctionOffset=$correctionParent.offset();if($correctionParent.css('position')=='relative'){if($correctionParent.get(0).nodeName.toLowerCase()=='body'){}else{correctionOffset.top+=(parseFloat($correctionParent.css('border-top-width'))||0);correctionOffset.left+=(parseFloat($correctionParent.css('border-left-width'))||0);}}else{correctionOffset.top-=(parseFloat($correctionParent.css('border-top-width'))||0);correctionOffset.left-=(parseFloat($correctionParent.css('border-left-width'))||0);correctionOffset.top-=(parseFloat($correctionParent.css('margin-top'))||0);correctionOffset.left-=(parseFloat($correctionParent.css('margin-left'))||0);}if(isNaN(correctionOffset.left)){correctionOffset.left=0;}if(isNaN(correctionOffset.top)){correctionOffset.top=0;}correctionOffset.left-=options.dx;correctionOffset.top-=options.dy;$sourceParent.css('height',$(this).height());$source.each(function(i){offsets[i]=$(this).offset();});$(this).stop();var dx=0;var dy=0;$source.each(function(i){$(this).stop();var rawObj=$(this).get(0);if(rawObj.style.position=='absolute'){dx=-options.dx;dy=-options.dy;}else{dx=options.dx;dy=options.dy;}rawObj.style.position='absolute';rawObj.style.margin='0';rawObj.style.top=(offsets[i].top-parseFloat(rawObj.style.marginTop)-correctionOffset.top+dy)+'px';rawObj.style.left=(offsets[i].left-parseFloat(rawObj.style.marginLeft)-correctionOffset.left+dx)+'px';});var $dest=$($sourceParent).clone();var rawDest=$dest.get(0);rawDest.innerHTML='';rawDest.setAttribute('id','');rawDest.style.height='auto';rawDest.style.width=$sourceParent.width()+'px';$dest.append($collection);$dest.insertBefore($sourceParent);$dest.css('opacity',0.0);rawDest.style.zIndex=-1;rawDest.style.margin='0';rawDest.style.position='absolute';rawDest.style.top=offset.top-correctionOffset.top+'px';rawDest.style.left=offset.left-correctionOffset.left+'px';if(options.adjustHeight==='dynamic'){$sourceParent.animate({height:$dest.height()},options.duration,options.easing);}else if(options.adjustHeight==='auto'){destHeight=$dest.height();if(parseFloat(sourceHeight)<parseFloat(destHeight)){$sourceParent.css('height',destHeight);}else{adjustHeightOnCallback=true;}}$source.each(function(i){var destElement=[];if(typeof(options.attribute)=='function'){val=options.attribute($(this));$collection.each(function(){if(options.attribute(this)==val){destElement=$(this);return false;}});}else{destElement=$collection.filter('['+options.attribute+'='+$(this).attr(options.attribute)+']');}if(destElement.length){if(!options.useScaling){animationQueue.push({element:$(this),animation:{top:destElement.offset().top-correctionOffset.top,left:destElement.offset().left-correctionOffset.left,opacity:1.0}});}else{animationQueue.push({element:$(this),animation:{top:destElement.offset().top-correctionOffset.top,left:destElement.offset().left-correctionOffset.left,opacity:1.0,scale:'1.0'}});}}else{if(!options.useScaling){animationQueue.push({element:$(this),animation:{opacity:'0.0'}});}else{animationQueue.push({element:$(this),animation:{opacity:'0.0',scale:'0.0'}});}}});$collection.each(function(i){var sourceElement=[];var destElement=[];if(typeof(options.attribute)=='function'){val=options.attribute($(this));$source.each(function(){if(options.attribute(this)==val){sourceElement=$(this);return false;}});$collection.each(function(){if(options.attribute(this)==val){destElement=$(this);return false;}});}else{sourceElement=$source.filter('['+options.attribute+'='+$(this).attr(options.attribute)+']');destElement=$collection.filter('['+options.attribute+'='+$(this).attr(options.attribute)+']');}var animationOptions;if(sourceElement.length===0){if(!options.useScaling){animationOptions={opacity:'1.0'};}else{animationOptions={opacity:'1.0',scale:'1.0'};}d=destElement.clone();var rawDestElement=d.get(0);rawDestElement.style.position='absolute';rawDestElement.style.margin='0';rawDestElement.style.top=destElement.offset().top-correctionOffset.top+'px';rawDestElement.style.left=destElement.offset().left-correctionOffset.left+'px';d.css('opacity',0.0);if(options.useScaling){d.css('transform','scale(0.0)');}d.appendTo($sourceParent);animationQueue.push({element:$(d),animation:animationOptions});}});$dest.remove();options.enhancement($sourceParent);for(i=0;i<animationQueue.length;i++){animationQueue[i].element.animate(animationQueue[i].animation,options.duration,options.easing,postCallback);}});};})(jQuery);

// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2011 Todd Matthews & Steve Purcell
// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2011 Todd Matthews & Steve Purcell
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['jquery'], factory); // AMD support for RequireJS etc.
  else
    factory(jQuery);
}(function ($) {
  $.fn.tweet = function(o){
    var s = $.extend({
      username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
      list: null,                               // [string]   optional name of list belonging to username
      favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
      query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
      avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
      count: 3,                                 // [integer]  how many tweets to display?
      fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
      page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
      retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
//      intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
//      outro_text: null,                         // [string]   do you want text AFTER your tweets?
//      join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
//      auto_join_text_default: "I said,",        // [string]   auto text for non verb: "I said" bullocks
//      auto_join_text_ed: "I",                   // [string]   auto text for past tense: "I" surfed
//      auto_join_text_ing: "I am",               // [string]   auto tense for present tense: "I was" surfing
//      auto_join_text_reply: "I replied to",     // [string]   auto tense for replies: "I replied to" @someone "with"
//      auto_join_text_url: "I was looking at",   // [string]   auto tense for urls: "I was looking at" http:...
      loading_text: null,                       // [string]   optional loading text, displayed while tweets load
      refresh_interval: null,                   // [integer]  optional number of seconds after which to reload tweets
      twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
      twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
      twitter_search_url: "search.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
      template: "{avatar}{time}{join}{text}",   // [string or function] template used to construct each tweet <li> - see code for available vars
      comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
        return tweet2["tweet_time"] - tweet1["tweet_time"];
      },
      filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
        return true;
      }
      // You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
      //   "loaded" -- triggered when tweets have been fetched and rendered
    }, o);

    // See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
    var url_regexp = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

    // Expand values inside simple string templates with {placeholders}
    function t(template, info) {
      if (typeof template === "string") {
        var result = template;
        for(var key in info) {
          var val = info[key];
          result = result.replace(new RegExp('{'+key+'}','g'), val === null ? '' : val);
        }
        return result;
      } else return template(info);
    }
    // Export the t function for use when passing a function as the 'template' option
    $.extend({tweet: {t: t}});

    function replacer (regex, replacement) {
      return function() {
        var returning = [];
        this.each(function() {
          returning.push(this.replace(regex, replacement));
        });
        return $(returning);
      };
    }

    function escapeHTML(s) {
      return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
    }

    $.fn.extend({
      linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<a href=\"http://"+s.twitter_url+"/$2\">@$2</a>"),
      // Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
      linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
                         ' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+
                         ((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+
                         '" class="tweet_hashtag">#$1</a>'),
      makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    });

    function linkURLs(text, entities) {
      return text.replace(url_regexp, function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        var text = match;
        for(var i = 0; i < entities.length; ++i) {
          var entity = entities[i];
          if (entity.url == url && entity.expanded_url) {
            url = entity.expanded_url;
            text = entity.display_url;
            break;
          }
        }
        return "<a href=\""+escapeHTML(url)+"\" target=\"_blank\">"+escapeHTML(text)+"</a>";
      });
    }
/*
    function parse_date(date_str) {
      // The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
      // cannot handle in IE. We therefore perform the following transformation:
      // "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
    }

    function extract_relative_time(date) {
      var toInt = function(val) { return parseInt(val, 10); };
      var relative_to = new Date();
      var delta = toInt((relative_to.getTime() - date) / 1000);
      if (delta < 1) delta = 0;
      return {
        days:    toInt(delta / 86400),
        hours:   toInt(delta / 3600),
        minutes: toInt(delta / 60),
        seconds: toInt(delta)
      };
    }

    function format_relative_time(time_ago) {
      if ( time_ago.days > 2 )     return 'about ' + time_ago.days + ' days ago';
      if ( time_ago.hours > 24 )   return 'about a day ago';
      if ( time_ago.hours > 2 )    return 'about ' + time_ago.hours + ' hours ago';
      if ( time_ago.minutes > 45 ) return 'about an hour ago';
      if ( time_ago.minutes > 2 )  return 'about ' + time_ago.minutes + ' minutes ago';
      if ( time_ago.seconds > 1 )  return 'about ' + time_ago.seconds + ' seconds ago';
      return 'just now';
    }

    function build_auto_join_text(text) {
      if (text.match(/^(@([A-Za-z0-9-_]+)) .* /i)) {
        return s.auto_join_text_reply;
      } else if (text.match(url_regexp)) {
        return s.auto_join_text_url;
      } else if (text.match(/^((\w+ed)|just) .* /im)) {
        return s.auto_join_text_ed;
      } else if (text.match(/^(\w*ing) .* /i)) {
        return s.auto_join_text_ing;
      } else {
        return s.auto_join_text_default;
      }
    }
*/
    function build_api_url() {
      var proto = ('https:' == document.location.protocol ? 'https:' : 'http:');
      var count = (s.fetch === null) ? s.count : s.fetch;
      var common_params = '&include_entities=1&callback=?';
      if (s.list) {
        return proto+"//"+s.twitter_api_url+"/1/"+s.username[0]+"/lists/"+s.list+"/statuses.json?page="+s.page+"&per_page="+count+common_params;
      } else if (s.favorites) {
        return proto+"//"+s.twitter_api_url+"/favorites/"+s.username[0]+".json?page="+s.page+"&count="+count+common_params;
      } else if (s.query === null && s.username.length == 1) {
        return proto+'//'+s.twitter_api_url+'/1/statuses/user_timeline.json?screen_name='+s.username[0]+'&count='+count+(s.retweets ? '&include_rts=1' : '')+'&page='+s.page+common_params;
      } else {
        var query = (s.query || 'from:'+s.username.join(' OR from:'));
        return proto+'//'+s.twitter_search_url+'/search.json?&q='+encodeURIComponent(query)+'&rpp='+count+'&page='+s.page+common_params;
      }
    }

    function extract_avatar_url(item, secure) {
      if (secure) {
        return ('user' in item) ?
          item.user.profile_image_url_https :
          extract_avatar_url(item, false).
            replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
      } else {
        return item.profile_image_url || item.user.profile_image_url;
      }
    }

    // Convert twitter API objects into data available for
    // constructing each tweet <li> using a template
    function extract_template_data(item){
      var o = {};
      o.item = item;
      o.source = item.source;
      o.screen_name = item.from_user || item.user.screen_name;
      // The actual user name is not returned by all Twitter APIs, so please do not
      // file an issue if it is empty:
      o.name = item.from_user_name || item.user.name;
      o.avatar_size = s.avatar_size;
      o.avatar_url = extract_avatar_url(item, (document.location.protocol === 'https:'));
      o.retweet = typeof(item.retweeted_status) != 'undefined';
 //     o.tweet_time = parse_date(item.created_at);
//		o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
      o.tweet_id = item.id_str;
      o.twitter_base = "http://"+s.twitter_url+"/";
      o.user_url = o.twitter_base+o.screen_name;
      o.tweet_url = o.user_url+"/status/"+o.tweet_id;
      o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
      o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
      o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
      o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
//o.tweet_relative_time = format_relative_time(extract_relative_time(o.tweet_time));
      o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
      o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
      o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
      o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];

      // Default spans, and pre-formatted blocks for common layouts
      o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
//o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : ' ';
      o.avatar = o.avatar_size ?
        t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : '';
//      o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
      o.text = t('{tweet_text_fancy}', o);
//      o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}" target="_blank">reply</a>', o);
//      o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}" target="_blank">retweet</a>', o);
//      o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}" target="_blank">favorite</a>', o);
      return o;
    }

    function load(widget) {
//      var intro = '<p class="tweet_intro">'+s.intro_text+'</p>';
//      var outro = '<p class="tweet_outro">'+s.outro_text+'</p>';
      var loading = $('<p class="loading">'+s.loading_text+'</p>');
      if (s.loading_text) $(widget).not(":has(.tweet_list)").empty().append(loading);
      $.getJSON(build_api_url(), function(data){
        var list = $('<ul class="tweet_list">');
        var tweets = $.map(data.results || data, extract_template_data);
        tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
        list.append($.map(tweets, function(o) { return "<li><div>" + t(s.template, o) + "</div></li>"; }).join(''));

$(widget).empty().append(list);
//   if (s.intro_text) list.before(intro);
//	if (s.outro_text) list.after(outro);

        $(widget).trigger("loaded").trigger((tweets.length === 0 ? "empty" : "full"));
        if (s.refresh_interval) {
          window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
        }
      });
    }

    return this.each(function(i, widget){
      if(s.username && typeof(s.username) == "string"){
        s.username = [s.username];
      }

      $(widget).unbind("tweet:load").bind("tweet:load", function(){
        load(widget);
      }).trigger("tweet:load");
    });
  };
}));

/*
UItoTop jQuery Plugin 1.1
http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
*/
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'};var settings=$.extend(defaults,options);var containerIDhash='#'+settings.containerID;var containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().click(function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':$(window).scrollTop()+$(window).height()-50});}if(sd>settings.min)$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);

/*
Quicksand 1.2.2

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand
*/
(function ($) {
    $.fn.quicksand = function (collection, customOptions) {     
        var options = {
            duration: 750,
            easing: 'swing',
            attribute: 'data-id', // attribute to recognize same items within source and dest
            adjustHeight: 'auto', // 'dynamic' animates height during shuffling (slow), 'auto' adjusts it before or after the animation, false leaves height constant
            useScaling: true, // disable it if you're not using scaling effect or want to improve performance
            enhancement: function(c) {}, // Visual enhacement (eg. font replacement) function for cloned elements
            selector: '> *',
            dx: 0,
            dy: 0
        };
        $.extend(options, customOptions);
        
        if ($.browser.msie || (typeof($.fn.scale) == 'undefined')) {
            // Got IE and want scaling effect? Kiss my ass.
            options.useScaling = false;
        }
        
        var callbackFunction;
        if (typeof(arguments[1]) == 'function') {
            var callbackFunction = arguments[1];
        } else if (typeof(arguments[2] == 'function')) {
            var callbackFunction = arguments[2];
        }
    
        
        return this.each(function (i) {
            var val;
            var animationQueue = []; // used to store all the animation params before starting the animation; solves initial animation slowdowns
            var $collection = $(collection).clone(); // destination (target) collection
            var $sourceParent = $(this); // source, the visible container of source collection
            var sourceHeight = $(this).css('height'); // used to keep height and document flow during the animation
            
            var destHeight;
            var adjustHeightOnCallback = false;
            
            var offset = $($sourceParent).offset(); // offset of visible container, used in animation calculations
            var offsets = []; // coordinates of every source collection item            
            
            var $source = $(this).find(options.selector); // source collection items
            
            // Replace the collection and quit if IE6
            if ($.browser.msie && $.browser.version.substr(0,1)<7) {
                $sourceParent.html('').append($collection);
                return;
            }

            // Gets called when any animation is finished
            var postCallbackPerformed = 0; // prevents the function from being called more than one time
            var postCallback = function () {
                
                if (!postCallbackPerformed) {
                    postCallbackPerformed = 1;
                    
                    // hack: 
                    // used to be: $sourceParent.html($dest.html()); // put target HTML into visible source container
                    // but new webkit builds cause flickering when replacing the collections
                    $toDelete = $sourceParent.find('> *');
                    $sourceParent.prepend($dest.find('> *'));
                    $toDelete.remove();
                         
                    if (adjustHeightOnCallback) {
                        $sourceParent.css('height', destHeight);
                    }
                    options.enhancement($sourceParent); // Perform custom visual enhancements on a newly replaced collection
                    if (typeof callbackFunction == 'function') {
                        callbackFunction.call(this);
                    }                    
                }
            };
            
            // Position: relative situations
            var $correctionParent = $sourceParent.offsetParent();
            var correctionOffset = $correctionParent.offset();
            if ($correctionParent.css('position') == 'relative') {
                if ($correctionParent.get(0).nodeName.toLowerCase() == 'body') {

                } else {
                    correctionOffset.top += (parseFloat($correctionParent.css('border-top-width')) || 0);
                    correctionOffset.left +=( parseFloat($correctionParent.css('border-left-width')) || 0);
                }
            } else {
                correctionOffset.top -= (parseFloat($correctionParent.css('border-top-width')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('border-left-width')) || 0);
                correctionOffset.top -= (parseFloat($correctionParent.css('margin-top')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('margin-left')) || 0);
            }
            
            // perform custom corrections from options (use when Quicksand fails to detect proper correction)
            if (isNaN(correctionOffset.left)) {
                correctionOffset.left = 0;
            }
            if (isNaN(correctionOffset.top)) {
                correctionOffset.top = 0;
            }
            
            correctionOffset.left -= options.dx;
            correctionOffset.top -= options.dy;

            // keeps nodes after source container, holding their position
            $sourceParent.css('height', $(this).height());
            
            // get positions of source collections
            $source.each(function (i) {
                offsets[i] = $(this).offset();
            });
            
            // stops previous animations on source container
            $(this).stop();
            var dx = 0; var dy = 0;
            $source.each(function (i) {
                $(this).stop(); // stop animation of collection items
                var rawObj = $(this).get(0);
                if (rawObj.style.position == 'absolute') {
                    dx = -options.dx;
                    dy = -options.dy;
                } else {
                    dx = options.dx;
                    dy = options.dy;                    
                }

                rawObj.style.position = 'absolute';
                rawObj.style.margin = '0';

                rawObj.style.top = (offsets[i].top - parseFloat(rawObj.style.marginTop) - correctionOffset.top + dy) + 'px';
                rawObj.style.left = (offsets[i].left - parseFloat(rawObj.style.marginLeft) - correctionOffset.left + dx) + 'px';
            });
                    
            // create temporary container with destination collection
            var $dest = $($sourceParent).clone();
            var rawDest = $dest.get(0);
            rawDest.innerHTML = '';
            rawDest.setAttribute('id', '');
            rawDest.style.height = 'auto';
            rawDest.style.width = $sourceParent.width() + 'px';
            $dest.append($collection);      
            // insert node into HTML
            // Note that the node is under visible source container in the exactly same position
            // The browser render all the items without showing them (opacity: 0.0)
            // No offset calculations are needed, the browser just extracts position from underlayered destination items
            // and sets animation to destination positions.
            $dest.insertBefore($sourceParent);
            $dest.css('opacity', 0.0);
            rawDest.style.zIndex = -1;
            
            rawDest.style.margin = '0';
            rawDest.style.position = 'absolute';
            rawDest.style.top = offset.top - correctionOffset.top + 'px';
            rawDest.style.left = offset.left - correctionOffset.left + 'px';
            
            
    
            

            if (options.adjustHeight === 'dynamic') {
                // If destination container has different height than source container
                // the height can be animated, adjusting it to destination height
                $sourceParent.animate({height: $dest.height()}, options.duration, options.easing);
            } else if (options.adjustHeight === 'auto') {
                destHeight = $dest.height();
                if (parseFloat(sourceHeight) < parseFloat(destHeight)) {
                    // Adjust the height now so that the items don't move out of the container
                    $sourceParent.css('height', destHeight);
                } else {
                    //  Adjust later, on callback
                    adjustHeightOnCallback = true;
                }
            }
                
            // Now it's time to do shuffling animation
            // First of all, we need to identify same elements within source and destination collections    
            $source.each(function (i) {
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    
                    val = options.attribute($(this));
                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                if (destElement.length) {
                    // The item is both in source and destination collections
                    // It it's under different position, let's move it
                    if (!options.useScaling) {
                        animationQueue.push(
                                            {
                                                element: $(this), 
                                                animation: 
                                                    {top: destElement.offset().top - correctionOffset.top, 
                                                     left: destElement.offset().left - correctionOffset.left, 
                                                     opacity: 1.0
                                                    }
                                            });

                    } else {
                        animationQueue.push({
                                            element: $(this), 
                                            animation: {top: destElement.offset().top - correctionOffset.top, 
                                                        left: destElement.offset().left - correctionOffset.left, 
                                                        opacity: 1.0, 
                                                        scale: '1.0'
                                                       }
                                            });

                    }
                } else {
                    // The item from source collection is not present in destination collections
                    // Let's remove it
                    if (!options.useScaling) {
                        animationQueue.push({element: $(this), 
                                             animation: {opacity: '0.0'}});
                    } else {
                        animationQueue.push({element: $(this), animation: {opacity: '0.0', 
                                         scale: '0.0'}});
                    }
                }
            });
            
            $collection.each(function (i) {
                // Grab all items from target collection not present in visible source collection
                
                var sourceElement = [];
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    val = options.attribute($(this));
                    $source.each(function() {
                        if (options.attribute(this) == val) {
                            sourceElement = $(this);
                            return false;
                        }
                    });                 

                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    sourceElement = $source.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                
                var animationOptions;
                if (sourceElement.length === 0) {
                    // No such element in source collection...
                    if (!options.useScaling) {
                        animationOptions = {
                            opacity: '1.0'
                        };
                    } else {
                        animationOptions = {
                            opacity: '1.0',
                            scale: '1.0'
                        };
                    }
                    // Let's create it
                    d = destElement.clone();
                    var rawDestElement = d.get(0);
                    rawDestElement.style.position = 'absolute';
                    rawDestElement.style.margin = '0';
                    rawDestElement.style.top = destElement.offset().top - correctionOffset.top + 'px';
                    rawDestElement.style.left = destElement.offset().left - correctionOffset.left + 'px';
                    d.css('opacity', 0.0); // IE
                    if (options.useScaling) {
                        d.css('transform', 'scale(0.0)');
                    }
                    d.appendTo($sourceParent);
                    
                    animationQueue.push({element: $(d), 
                                         animation: animationOptions});
                }
            });
            
            $dest.remove();
            options.enhancement($sourceParent); // Perform custom visual enhancements during the animation
            for (i = 0; i < animationQueue.length; i++) {
                animationQueue[i].element.animate(animationQueue[i].animation, options.duration, options.easing, postCallback);
            }
        });
    };
})(jQuery);

/** @author: Kevin Fell. */
function form_on_submit(jqObj)
{
	alret('here');
}

$(document).ready(function(){

	/* Cache ajax calls by default. */
	$.ajaxSetup({
	  cache: true
	});

	/* Execute font replacement and bring them in when done. */
	Cufon.replace('h1,h2,h3,h4,h5,h6,.cufon');
	Cufon.now();
	$('h1,h2,h3,h4,h5,h6,.cufon').css('visibility', 'visible');
	
	/* Bring in images once loaded. */
	$('#content img').krioImageLoader({imageEnterDelay:400});

	/* Show zoom icon for linked images on hover. */
	$('#content a > img').each(function(){
	
		$(this).css({'visibility':'visible','opacity':'1'});

		/* Calculate the center point. */
		x = $(this).position().top+($(this).height()/2);
		y = $(this).position().left+($(this).width()/2);

		$(this).after('<span class="zoomIcon"></span>');

		jqImgZoom = $(this).next('.zoomIcon');
		jqImgZoom.css({'opacity':'0','top':Math.round(x-(jqImgZoom.width()/2))+'px','left':Math.round(y-(jqImgZoom.height()/2))+'px'});

		$(this).parent().hover(function(){

			jqObj = $(this).children('img:first-child');

			jqObj.stop(true,true).animate({opacity:0.25},300);
			jqObj.next('.zoomIcon').css('opacity', 1);

		},function(){

			jqObj = $(this).children('img:first-child');

			jqObj.next('.zoomIcon').css('opacity', 0);
			jqObj.stop(true,true).animate({opacity:1},300);
		});
	});

	$(document).UItoTop({min:100,easingType:'easeOutQuart'});

	/* Home page. */
	$('.nivoSlider').nivoSlider({effect:'sliceDown',slices:5,animSpeed:375,pauseTime:parseInt(5000),startSlide:0,directionNav:true,directionNavHide:false,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,keyboardNav:true,pauseOnHover:false,manualAdvance:false,captionHover:false,afterLoad:function(){/*$('#nivo_loading').css('display','none');$('#nivo_wrapper').css('visibility','visible');*/}});

	/* Load the latest tweets. */
	$('#tweets').tweet({username:"monoknot",template:'{text}',count:6,loading_text:"loading tweets...",intro_text:'<div>',outro_text:'</div>'});

	/* Project page. */
	jqObj = $('.projectFilters');

	if (jqObj.length)
	{
		jqObj.children('li').each(function(key, value){
		
			jqChildObj = $(this).children('a');

			if (!jqChildObj.length)
			{
				return;
			}
			
			jqChildObj.addClass('projectFilter'+jqChildObj.html());

			/* First option is selected by default. */
			if (key == 0)
			{
				jqChildObj.addClass('buttonDown');
			}
			
			jqChildObj.attr('title', 'Filter By: '+jqChildObj.html());

			jqChildObj.click(function(e){
			
				if (!$(this).hasClass('buttonDown'))
				{
					/* Remove the 'down' styling from. */
					$(this).parent().parent().find('li a').removeClass('buttonDown');
					$(this).addClass('buttonDown');
				}
			
				/* Processed programmatically. */
				e.preventDefault();
			});
		});
	}

	/* Forms. */
	jqFormObj = $('form');

	if (jqFormObj.length)
	{
		jqFormObj.bind('submit');
	}
	
	/* Apply tipsy tooltips. */
	$('a').filter('[title]').tipsy({fade:true,gravity:'s',offset:3});//.find('.tipsy-inner').css('z-index', 10001);

	/* Google analytics.
		We provide the the javascript file from our host computer to ensure we can control the hmtl header optimisations. */
	$.getScript('/js/ga.js', function(){

		var _gaq = _gaq || [];
		  _gaq.push(['_setAccount','UA-6405746-1']);
		  _gaq.push(['_trackPageview']);
	});
});