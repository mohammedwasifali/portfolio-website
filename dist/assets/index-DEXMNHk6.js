(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},ll={},ns={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),kc=Symbol.for("react.portal"),Sc=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Ec=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),Tc=Symbol.for("react.memo"),Mc=Symbol.for("react.lazy"),Vo=Symbol.iterator;function Lc(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ls=Object.assign,is={};function cn(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}cn.prototype.isReactComponent={};cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function os(){}os.prototype=cn.prototype;function Wi(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}var Gi=Wi.prototype=new os;Gi.constructor=Wi;ls(Gi,cn.prototype);Gi.isPureReactComponent=!0;var $o=Array.isArray,as=Object.prototype.hasOwnProperty,Qi={current:null},ss={key:!0,ref:!0,__self:!0,__source:!0};function us(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)as.call(t,r)&&!ss.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Zn,type:e,key:i,ref:a,props:l,_owner:Qi.current}}function _c(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Ac(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wo=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ac(""+e.key):t.toString(36)}function Sr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zn:case kc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Nl(a,0):r,$o(l)?(n="",e!=null&&(n=e.replace(Wo,"$&/")+"/"),Sr(l,t,n,"",function(d){return d})):l!=null&&(Ki(l)&&(l=_c(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Wo,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",$o(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Nl(i,s);a+=Sr(i,t,n,u,l)}else if(u=Lc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Nl(i,s++),a+=Sr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ir(e,t,n){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Ic(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},jr={transition:null},bc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Qi};function cs(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!Ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=cn;_.Fragment=Sc;_.Profiler=Nc;_.PureComponent=Wi;_.StrictMode=jc;_.Suspense=Pc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bc;_.act=cs;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ls({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)as.call(t,u)&&!ss.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Zn,type:e.type,key:l,ref:i,props:r,_owner:a}};_.createContext=function(e){return e={$$typeof:Ec,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cc,_context:e},e.Consumer=e};_.createElement=us;_.createFactory=function(e){var t=us.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:zc,render:e}};_.isValidElement=Ki;_.lazy=function(e){return{$$typeof:Mc,_payload:{_status:-1,_result:e},_init:Ic}};_.memo=function(e,t){return{$$typeof:Tc,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};_.unstable_act=cs;_.useCallback=function(e,t){return ce.current.useCallback(e,t)};_.useContext=function(e){return ce.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};_.useEffect=function(e,t){return ce.current.useEffect(e,t)};_.useId=function(){return ce.current.useId()};_.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return ce.current.useMemo(e,t)};_.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};_.useRef=function(e){return ce.current.useRef(e)};_.useState=function(e){return ce.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return ce.current.useTransition()};_.version="18.3.1";ns.exports=_;var R=ns.exports;const je=wc(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=R,Rc=Symbol.for("react.element"),Fc=Symbol.for("react.fragment"),Oc=Object.prototype.hasOwnProperty,Bc=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uc={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Oc.call(t,r)&&!Uc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Rc,type:e,key:i,ref:a,props:l,_owner:Bc.current}}ll.Fragment=Fc;ll.jsx=ds;ll.jsxs=ds;ts.exports=ll;var o=ts.exports,Zl={},fs={exports:{}},ke={},ps={exports:{}},ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var L=z.length;z.push(M);e:for(;0<L;){var G=L-1>>>1,Z=z[G];if(0<l(Z,M))z[G]=M,z[L]=Z,L=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],L=z.pop();if(L!==M){z[0]=L;e:for(var G=0,Z=z.length,rr=Z>>>1;G<rr;){var kt=2*(G+1)-1,jl=z[kt],St=kt+1,lr=z[St];if(0>l(jl,L))St<Z&&0>l(lr,jl)?(z[G]=lr,z[St]=L,G=St):(z[G]=jl,z[kt]=L,G=kt);else if(St<Z&&0>l(lr,L))z[G]=lr,z[St]=L,G=St;else break e}}return M}function l(z,M){var L=z.sortIndex-M.sortIndex;return L!==0?L:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],v=1,g=null,m=3,y=!1,w=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var M=n(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=z)r(d),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(d)}}function h(z){if(S=!1,p(z),!w)if(n(u)!==null)w=!0,kl(k);else{var M=n(d);M!==null&&Sl(h,M.startTime-z)}}function k(z,M){w=!1,S&&(S=!1,f(E),E=-1),y=!0;var L=m;try{for(p(M),g=n(u);g!==null&&(!(g.expirationTime>M)||z&&!J());){var G=g.callback;if(typeof G=="function"){g.callback=null,m=g.priorityLevel;var Z=G(g.expirationTime<=M);M=e.unstable_now(),typeof Z=="function"?g.callback=Z:g===n(u)&&r(u),p(M)}else r(u);g=n(u)}if(g!==null)var rr=!0;else{var kt=n(d);kt!==null&&Sl(h,kt.startTime-M),rr=!1}return rr}finally{g=null,m=L,y=!1}}var N=!1,j=null,E=-1,I=5,P=-1;function J(){return!(e.unstable_now()-P<I)}function He(){if(j!==null){var z=e.unstable_now();P=z;var M=!0;try{M=j(!0,z)}finally{M?qe():(N=!1,j=null)}}else N=!1}var qe;if(typeof c=="function")qe=function(){c(He)};else if(typeof MessageChannel<"u"){var Ho=new MessageChannel,xc=Ho.port2;Ho.port1.onmessage=He,qe=function(){xc.postMessage(null)}}else qe=function(){T(He,0)};function kl(z){j=z,N||(N=!0,qe())}function Sl(z,M){E=T(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,kl(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var L=m;m=M;try{return z()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=m;m=z;try{return M()}finally{m=L}},e.unstable_scheduleCallback=function(z,M,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,z={id:v++,callback:M,priorityLevel:z,startTime:L,expirationTime:Z,sortIndex:-1},L>G?(z.sortIndex=L,t(d,z),n(u)===null&&z===n(d)&&(S?(f(E),E=-1):S=!0,Sl(h,L-G))):(z.sortIndex=Z,t(u,z),w||y||(w=!0,kl(k))),z},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(z){var M=m;return function(){var L=m;m=M;try{return z.apply(this,arguments)}finally{m=L}}}})(ms);ps.exports=ms;var Hc=ps.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=R,we=Hc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hs=new Set,bn={};function bt(e,t){nn(e,t),nn(e+"Capture",t)}function nn(e,t){for(bn[e]=t,e=0;e<t.length;e++)hs.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Go={},Qo={};function Wc(e){return ql.call(Qo,e)?!0:ql.call(Go,e)?!1:$c.test(e)?Qo[e]=!0:(Go[e]=!0,!1)}function Gc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qc(e,t,n,r){if(t===null||typeof t>"u"||Gc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yi=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yi,Xi);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yi,Xi);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yi,Xi);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ji(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qc(t,n,l,r)&&(n=null),r||l===null?Wc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),gs=Symbol.for("react.provider"),vs=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),ys=Symbol.for("react.offscreen"),Ko=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Cl;function kn(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var El=!1;function zl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Kc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Ft:return"Portal";case ei:return"Profiler";case Zi:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vs:return(e.displayName||"Context")+".Consumer";case gs:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eo:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function Yc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xc(e){var t=xs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Xc(e))}function ws(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ks(e,t){t=t.checked,t!=null&&Ji(e,"checked",t,!1)}function ii(e,t){ks(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&oi(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oi(e,t,n){(t!=="number"||Ir(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Xt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Sn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function Ss(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function js(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?js(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,Ns=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function Cs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function Es(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Cs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Zc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(Zc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,Jt=null,Zt=null;function qo(e){if(e=tr(e)){if(typeof fi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ul(t),fi(e.stateNode,e.type,t))}}function zs(e){Jt?Zt?Zt.push(e):Zt=[e]:Jt=e}function Ps(){if(Jt){var e=Jt,t=Zt;if(Zt=Jt=null,qo(e),t)for(e=0;e<t.length;e++)qo(t[e])}}function Ts(e,t){return e(t)}function Ms(){}var Pl=!1;function Ls(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Ts(e,t,n)}finally{Pl=!1,(Jt!==null||Zt!==null)&&(Ms(),Ps())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var pi=!1;if(Ke)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){pi=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{pi=!1}function qc(e,t,n,r,l,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var En=!1,br=null,Dr=!1,mi=null,ed={onError:function(e){En=!0,br=e}};function td(e,t,n,r,l,i,a,s,u){En=!1,br=null,qc.apply(ed,arguments)}function nd(e,t,n,r,l,i,a,s,u){if(td.apply(this,arguments),En){if(En){var d=br;En=!1,br=null}else throw Error(x(198));Dr||(Dr=!0,mi=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ea(e){if(Dt(e)!==e)throw Error(x(188))}function rd(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ea(l),e;if(i===r)return ea(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function As(e){return e=rd(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var bs=we.unstable_scheduleCallback,ta=we.unstable_cancelCallback,ld=we.unstable_shouldYield,id=we.unstable_requestPaint,Q=we.unstable_now,od=we.unstable_getCurrentPriorityLevel,no=we.unstable_ImmediatePriority,Ds=we.unstable_UserBlockingPriority,Rr=we.unstable_NormalPriority,ad=we.unstable_LowPriority,Rs=we.unstable_IdlePriority,il=null,Be=null;function sd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:dd,ud=Math.log,cd=Math.LN2;function dd(e){return e>>>=0,e===0?32:31-(ud(e)/cd|0)|0}var ur=64,cr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=jn(s):(i&=a,i!==0&&(r=jn(i)))}else a=n&~l,a!==0?r=jn(a):i!==0&&(r=jn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ie(i),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=fd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fs(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var b=0;function Os(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bs,lo,Us,Hs,Vs,gi=!1,dr=[],st=null,ut=null,ct=null,Fn=new Map,On=new Map,lt=[],hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function na(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=tr(t),t!==null&&lo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function gd(e,t,n,r,l){switch(t){case"focusin":return st=hn(st,e,t,n,r,l),!0;case"dragenter":return ut=hn(ut,e,t,n,r,l),!0;case"mouseover":return ct=hn(ct,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Fn.set(i,hn(Fn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,hn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function $s(e){var t=Ct(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=_s(n),t!==null){e.blockedOn=t,Vs(e.priority,function(){Us(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);di=r,n.target.dispatchEvent(r),di=null}else return t=tr(n),t!==null&&lo(t),e.blockedOn=n,!1;t.shift()}return!0}function ra(e,t,n){Nr(e)&&n.delete(t)}function vd(){gi=!1,st!==null&&Nr(st)&&(st=null),ut!==null&&Nr(ut)&&(ut=null),ct!==null&&Nr(ct)&&(ct=null),Fn.forEach(ra),On.forEach(ra)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,vd)))}function Bn(e){function t(l){return gn(l,e)}if(0<dr.length){gn(dr[0],e);for(var n=1;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&gn(st,e),ut!==null&&gn(ut,e),ct!==null&&gn(ct,e),Fn.forEach(t),On.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)$s(n),n.blockedOn===null&&lt.shift()}var qt=Ze.ReactCurrentBatchConfig,Or=!0;function yd(e,t,n,r){var l=b,i=qt.transition;qt.transition=null;try{b=1,io(e,t,n,r)}finally{b=l,qt.transition=i}}function xd(e,t,n,r){var l=b,i=qt.transition;qt.transition=null;try{b=4,io(e,t,n,r)}finally{b=l,qt.transition=i}}function io(e,t,n,r){if(Or){var l=vi(e,t,n,r);if(l===null)Ol(e,t,r,Br,n),na(e,r);else if(gd(l,e,t,n,r))r.stopPropagation();else if(na(e,r),t&4&&-1<hd.indexOf(e)){for(;l!==null;){var i=tr(l);if(i!==null&&Bs(i),i=vi(e,t,n,r),i===null&&Ol(e,t,r,Br,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Br=null;function vi(e,t,n,r){if(Br=null,e=to(r),e=Ct(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function Ws(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case no:return 1;case Ds:return 4;case Rr:case ad:return 16;case Rs:return 536870912;default:return 16}default:return 16}}var ot=null,oo=null,Cr=null;function Gs(){if(Cr)return Cr;var e,t=oo,n=t.length,r,l="value"in ot?ot.value:ot.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Cr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function la(){return!1}function Se(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fr:la,this.isPropagationStopped=la,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Se(dn),er=$({},dn,{view:0,detail:0}),wd=Se(er),Ml,Ll,vn,ol=$({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ml=e.screenX-vn.screenX,Ll=e.screenY-vn.screenY):Ll=Ml=0,vn=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),ia=Se(ol),kd=$({},ol,{dataTransfer:0}),Sd=Se(kd),jd=$({},er,{relatedTarget:0}),_l=Se(jd),Nd=$({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cd=Se(Nd),Ed=$({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zd=Se(Ed),Pd=$({},dn,{data:0}),oa=Se(Pd),Td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _d(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ld[e])?!!t[e]:!1}function so(){return _d}var Ad=$({},er,{key:function(e){if(e.key){var t=Td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=Se(Ad),bd=$({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aa=Se(bd),Dd=$({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),Rd=Se(Dd),Fd=$({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=Se(Fd),Bd=$({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ud=Se(Bd),Hd=[9,13,27,32],uo=Ke&&"CompositionEvent"in window,zn=null;Ke&&"documentMode"in document&&(zn=document.documentMode);var Vd=Ke&&"TextEvent"in window&&!zn,Qs=Ke&&(!uo||zn&&8<zn&&11>=zn),sa=" ",ua=!1;function Ks(e,t){switch(e){case"keyup":return Hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ys(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function $d(e,t){switch(e){case"compositionend":return Ys(t);case"keypress":return t.which!==32?null:(ua=!0,sa);case"textInput":return e=t.data,e===sa&&ua?null:e;default:return null}}function Wd(e,t){if(Bt)return e==="compositionend"||!uo&&Ks(e,t)?(e=Gs(),Cr=oo=ot=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qs&&t.locale!=="ko"?null:t.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gd[e.type]:t==="textarea"}function Xs(e,t,n,r){zs(r),t=Ur(t,"onChange"),0<t.length&&(n=new ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Un=null;function Qd(e){au(e,0)}function al(e){var t=Vt(e);if(ws(t))return e}function Kd(e,t){if(e==="change")return t}var Js=!1;if(Ke){var Al;if(Ke){var Il="oninput"in document;if(!Il){var da=document.createElement("div");da.setAttribute("oninput","return;"),Il=typeof da.oninput=="function"}Al=Il}else Al=!1;Js=Al&&(!document.documentMode||9<document.documentMode)}function fa(){Pn&&(Pn.detachEvent("onpropertychange",Zs),Un=Pn=null)}function Zs(e){if(e.propertyName==="value"&&al(Un)){var t=[];Xs(t,Un,e,to(e)),Ls(Qd,t)}}function Yd(e,t,n){e==="focusin"?(fa(),Pn=t,Un=n,Pn.attachEvent("onpropertychange",Zs)):e==="focusout"&&fa()}function Xd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Un)}function Jd(e,t){if(e==="click")return al(t)}function Zd(e,t){if(e==="input"||e==="change")return al(t)}function qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:qd;function Hn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ql.call(t,l)||!De(e[l],t[l]))return!1}return!0}function pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ma(e,t){var n=pa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pa(n)}}function qs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eu(){for(var e=window,t=Ir();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ef(e){var t=eu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qs(n.ownerDocument.documentElement,n)){if(r!==null&&co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ma(n,i);var a=ma(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tf=Ke&&"documentMode"in document&&11>=document.documentMode,Ut=null,yi=null,Tn=null,xi=!1;function ha(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xi||Ut==null||Ut!==Ir(r)||(r=Ut,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Hn(Tn,r)||(Tn=r,r=Ur(yi,"onSelect"),0<r.length&&(t=new ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ut)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},bl={},tu={};Ke&&(tu=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function sl(e){if(bl[e])return bl[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tu)return bl[e]=t[n];return e}var nu=sl("animationend"),ru=sl("animationiteration"),lu=sl("animationstart"),iu=sl("transitionend"),ou=new Map,ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){ou.set(e,t),bt(t,[e])}for(var Dl=0;Dl<ga.length;Dl++){var Rl=ga[Dl],nf=Rl.toLowerCase(),rf=Rl[0].toUpperCase()+Rl.slice(1);yt(nf,"on"+rf)}yt(nu,"onAnimationEnd");yt(ru,"onAnimationIteration");yt(lu,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(iu,"onTransitionEnd");nn("onMouseEnter",["mouseout","mouseover"]);nn("onMouseLeave",["mouseout","mouseover"]);nn("onPointerEnter",["pointerout","pointerover"]);nn("onPointerLeave",["pointerout","pointerover"]);bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nd(r,t,void 0,e),e.currentTarget=null}function au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;va(l,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;va(l,s,d),i=u}}}if(Dr)throw e=mi,Dr=!1,mi=null,e}function O(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(su(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),su(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[mr]){e[mr]=!0,hs.forEach(function(n){n!=="selectionchange"&&(lf.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Fl("selectionchange",!1,t))}}function su(e,t,n,r){switch(Ws(t)){case 1:var l=yd;break;case 4:l=xd;break;default:l=io}n=l.bind(null,t,n,e),l=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Ct(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Ls(function(){var d=i,v=to(n),g=[];e:{var m=ou.get(e);if(m!==void 0){var y=ao,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":y=Id;break;case"focusin":w="focus",y=_l;break;case"focusout":w="blur",y=_l;break;case"beforeblur":case"afterblur":y=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Rd;break;case nu:case ru:case lu:y=Cd;break;case iu:y=Od;break;case"scroll":y=wd;break;case"wheel":y=Ud;break;case"copy":case"cut":case"paste":y=zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=aa}var S=(t&4)!==0,T=!S&&e==="scroll",f=S?m!==null?m+"Capture":null:m;S=[];for(var c=d,p;c!==null;){p=c;var h=p.stateNode;if(p.tag===5&&h!==null&&(p=h,f!==null&&(h=Rn(c,f),h!=null&&S.push($n(c,h,p)))),T)break;c=c.return}0<S.length&&(m=new y(m,w,null,n,v),g.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==di&&(w=n.relatedTarget||n.fromElement)&&(Ct(w)||w[Ye]))break e;if((y||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=d,w=w?Ct(w):null,w!==null&&(T=Dt(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=d),y!==w)){if(S=ia,h="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=aa,h="onPointerLeave",f="onPointerEnter",c="pointer"),T=y==null?m:Vt(y),p=w==null?m:Vt(w),m=new S(h,c+"leave",y,n,v),m.target=T,m.relatedTarget=p,h=null,Ct(v)===d&&(S=new S(f,c+"enter",w,n,v),S.target=p,S.relatedTarget=T,h=S),T=h,y&&w)t:{for(S=y,f=w,c=0,p=S;p;p=Rt(p))c++;for(p=0,h=f;h;h=Rt(h))p++;for(;0<c-p;)S=Rt(S),c--;for(;0<p-c;)f=Rt(f),p--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=Rt(S),f=Rt(f)}S=null}else S=null;y!==null&&ya(g,m,y,S,!1),w!==null&&T!==null&&ya(g,T,w,S,!0)}}e:{if(m=d?Vt(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=Kd;else if(ca(m))if(Js)k=Zd;else{k=Xd;var N=Yd}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Jd);if(k&&(k=k(e,d))){Xs(g,k,n,v);break e}N&&N(e,m,d),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&oi(m,"number",m.value)}switch(N=d?Vt(d):window,e){case"focusin":(ca(N)||N.contentEditable==="true")&&(Ut=N,yi=d,Tn=null);break;case"focusout":Tn=yi=Ut=null;break;case"mousedown":xi=!0;break;case"contextmenu":case"mouseup":case"dragend":xi=!1,ha(g,n,v);break;case"selectionchange":if(tf)break;case"keydown":case"keyup":ha(g,n,v)}var j;if(uo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Bt?Ks(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Qs&&n.locale!=="ko"&&(Bt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Bt&&(j=Gs()):(ot=v,oo="value"in ot?ot.value:ot.textContent,Bt=!0)),N=Ur(d,E),0<N.length&&(E=new oa(E,e,null,n,v),g.push({event:E,listeners:N}),j?E.data=j:(j=Ys(n),j!==null&&(E.data=j)))),(j=Vd?$d(e,n):Wd(e,n))&&(d=Ur(d,"onBeforeInput"),0<d.length&&(v=new oa("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:d}),v.data=j))}au(g,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rn(e,n),i!=null&&r.unshift($n(e,i,l)),i=Rn(e,t),i!=null&&r.push($n(e,i,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ya(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Rn(n,i),u!=null&&a.unshift($n(n,u,s))):l||(u=Rn(n,i),u!=null&&a.push($n(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var of=/\r\n?/g,af=/\u0000|\uFFFD/g;function xa(e){return(typeof e=="string"?e:""+e).replace(of,`
`).replace(af,"")}function hr(e,t,n){if(t=xa(t),xa(e)!==t&&n)throw Error(x(425))}function Hr(){}var wi=null,ki=null;function Si(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,wa=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof wa<"u"?function(e){return wa.resolve(null).then(e).catch(cf)}:ji;function cf(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Bn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),Oe="__reactFiber$"+fn,Wn="__reactProps$"+fn,Ye="__reactContainer$"+fn,Ni="__reactEvents$"+fn,df="__reactListeners$"+fn,ff="__reactHandles$"+fn;function Ct(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ka(e);e!==null;){if(n=e[Oe])return n;e=ka(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Oe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ul(e){return e[Wn]||null}var Ci=[],$t=-1;function xt(e){return{current:e}}function B(e){0>$t||(e.current=Ci[$t],Ci[$t]=null,$t--)}function F(e,t){$t++,Ci[$t]=e.current,e.current=t}var vt={},ae=xt(vt),me=xt(!1),Mt=vt;function rn(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Vr(){B(me),B(ae)}function Sa(e,t,n){if(ae.current!==vt)throw Error(x(168));F(ae,t),F(me,n)}function uu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Yc(e)||"Unknown",l));return $({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Mt=ae.current,F(ae,e),F(me,me.current),!0}function ja(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=uu(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,B(me),B(ae),F(ae,e)):B(me),F(me,n)}var $e=null,cl=!1,Ul=!1;function cu(e){$e===null?$e=[e]:$e.push(e)}function pf(e){cl=!0,cu(e)}function wt(){if(!Ul&&$e!==null){Ul=!0;var e=0,t=b;try{var n=$e;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,cl=!1}catch(l){throw $e!==null&&($e=$e.slice(e+1)),bs(no,wt),l}finally{b=t,Ul=!1}}return null}var Wt=[],Gt=0,Wr=null,Gr=0,Ne=[],Ce=0,Lt=null,We=1,Ge="";function jt(e,t){Wt[Gt++]=Gr,Wt[Gt++]=Wr,Wr=e,Gr=t}function du(e,t,n){Ne[Ce++]=We,Ne[Ce++]=Ge,Ne[Ce++]=Lt,Lt=e;var r=We;e=Ge;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var i=32-Ie(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,We=1<<32-Ie(t)+l|n<<l|r,Ge=i+e}else We=1<<i|n<<l|r,Ge=e}function fo(e){e.return!==null&&(jt(e,1),du(e,1,0))}function po(e){for(;e===Wr;)Wr=Wt[--Gt],Wt[Gt]=null,Gr=Wt[--Gt],Wt[Gt]=null;for(;e===Lt;)Lt=Ne[--Ce],Ne[Ce]=null,Ge=Ne[--Ce],Ne[Ce]=null,We=Ne[--Ce],Ne[Ce]=null}var xe=null,ye=null,U=!1,Ae=null;function fu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:We,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(U){var t=ye;if(t){var n=t;if(!Na(e,t)){if(Ei(e))throw Error(x(418));t=dt(n.nextSibling);var r=xe;t&&Na(e,t)?fu(r,n):(e.flags=e.flags&-4097|2,U=!1,xe=e)}}else{if(Ei(e))throw Error(x(418));e.flags=e.flags&-4097|2,U=!1,xe=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function gr(e){if(e!==xe)return!1;if(!U)return Ca(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Si(e.type,e.memoizedProps)),t&&(t=ye)){if(Ei(e))throw pu(),Error(x(418));for(;t;)fu(e,t),t=dt(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?dt(e.stateNode.nextSibling):null;return!0}function pu(){for(var e=ye;e;)e=dt(e.nextSibling)}function ln(){ye=xe=null,U=!1}function mo(e){Ae===null?Ae=[e]:Ae.push(e)}var mf=Ze.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ea(e){var t=e._init;return t(e._payload)}function mu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=ht(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,h){return c===null||c.tag!==6?(c=Kl(p,f.mode,h),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,h){var k=p.type;return k===Ot?v(f,c,p.props.children,h,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===tt&&Ea(k)===c.type)?(h=l(c,p.props),h.ref=yn(f,c,p),h.return=f,h):(h=Ar(p.type,p.key,p.props,null,f.mode,h),h.ref=yn(f,c,p),h.return=f,h)}function d(f,c,p,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yl(p,f.mode,h),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function v(f,c,p,h,k){return c===null||c.tag!==7?(c=Tt(p,f.mode,h,k),c.return=f,c):(c=l(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Kl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case or:return p=Ar(c.type,c.key,c.props,null,f.mode,p),p.ref=yn(f,null,c),p.return=f,p;case Ft:return c=Yl(c,f.mode,p),c.return=f,c;case tt:var h=c._init;return g(f,h(c._payload),p)}if(Sn(c)||pn(c))return c=Tt(c,f.mode,p,null),c.return=f,c;vr(f,c)}return null}function m(f,c,p,h){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,c,""+p,h);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case or:return p.key===k?u(f,c,p,h):null;case Ft:return p.key===k?d(f,c,p,h):null;case tt:return k=p._init,m(f,c,k(p._payload),h)}if(Sn(p)||pn(p))return k!==null?null:v(f,c,p,h,null);vr(f,p)}return null}function y(f,c,p,h,k){if(typeof h=="string"&&h!==""||typeof h=="number")return f=f.get(p)||null,s(c,f,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case or:return f=f.get(h.key===null?p:h.key)||null,u(c,f,h,k);case Ft:return f=f.get(h.key===null?p:h.key)||null,d(c,f,h,k);case tt:var N=h._init;return y(f,c,p,N(h._payload),k)}if(Sn(h)||pn(h))return f=f.get(p)||null,v(c,f,h,k,null);vr(c,h)}return null}function w(f,c,p,h){for(var k=null,N=null,j=c,E=c=0,I=null;j!==null&&E<p.length;E++){j.index>E?(I=j,j=null):I=j.sibling;var P=m(f,j,p[E],h);if(P===null){j===null&&(j=I);break}e&&j&&P.alternate===null&&t(f,j),c=i(P,c,E),N===null?k=P:N.sibling=P,N=P,j=I}if(E===p.length)return n(f,j),U&&jt(f,E),k;if(j===null){for(;E<p.length;E++)j=g(f,p[E],h),j!==null&&(c=i(j,c,E),N===null?k=j:N.sibling=j,N=j);return U&&jt(f,E),k}for(j=r(f,j);E<p.length;E++)I=y(j,f,E,p[E],h),I!==null&&(e&&I.alternate!==null&&j.delete(I.key===null?E:I.key),c=i(I,c,E),N===null?k=I:N.sibling=I,N=I);return e&&j.forEach(function(J){return t(f,J)}),U&&jt(f,E),k}function S(f,c,p,h){var k=pn(p);if(typeof k!="function")throw Error(x(150));if(p=k.call(p),p==null)throw Error(x(151));for(var N=k=null,j=c,E=c=0,I=null,P=p.next();j!==null&&!P.done;E++,P=p.next()){j.index>E?(I=j,j=null):I=j.sibling;var J=m(f,j,P.value,h);if(J===null){j===null&&(j=I);break}e&&j&&J.alternate===null&&t(f,j),c=i(J,c,E),N===null?k=J:N.sibling=J,N=J,j=I}if(P.done)return n(f,j),U&&jt(f,E),k;if(j===null){for(;!P.done;E++,P=p.next())P=g(f,P.value,h),P!==null&&(c=i(P,c,E),N===null?k=P:N.sibling=P,N=P);return U&&jt(f,E),k}for(j=r(f,j);!P.done;E++,P=p.next())P=y(j,f,E,P.value,h),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?E:P.key),c=i(P,c,E),N===null?k=P:N.sibling=P,N=P);return e&&j.forEach(function(He){return t(f,He)}),U&&jt(f,E),k}function T(f,c,p,h){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case or:e:{for(var k=p.key,N=c;N!==null;){if(N.key===k){if(k=p.type,k===Ot){if(N.tag===7){n(f,N.sibling),c=l(N,p.props.children),c.return=f,f=c;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===tt&&Ea(k)===N.type){n(f,N.sibling),c=l(N,p.props),c.ref=yn(f,N,p),c.return=f,f=c;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Ot?(c=Tt(p.props.children,f.mode,h,p.key),c.return=f,f=c):(h=Ar(p.type,p.key,p.props,null,f.mode,h),h.ref=yn(f,c,p),h.return=f,f=h)}return a(f);case Ft:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Yl(p,f.mode,h),c.return=f,f=c}return a(f);case tt:return N=p._init,T(f,c,N(p._payload),h)}if(Sn(p))return w(f,c,p,h);if(pn(p))return S(f,c,p,h);vr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Kl(p,f.mode,h),c.return=f,f=c),a(f)):n(f,c)}return T}var on=mu(!0),hu=mu(!1),Qr=xt(null),Kr=null,Qt=null,ho=null;function go(){ho=Qt=Kr=null}function vo(e){var t=Qr.current;B(Qr),e._currentValue=t}function Pi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function en(e,t){Kr=e,ho=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(ho!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(Kr===null)throw Error(x(308));Qt=e,Kr.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var Et=null;function yo(e){Et===null?Et=[e]:Et.push(e)}function gu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,yo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,yo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var l=e.updateQueue;nt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==a&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;a=0,v=d=u=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,S=s;switch(m=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){g=w.call(y,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(y,g,m):w,m==null)break e;g=$({},g,m);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=y,u=g):v=v.next=y,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);At|=a,e.lanes=a,e.memoizedState=g}}function Pa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var nr={},Ue=xt(nr),Gn=xt(nr),Qn=xt(nr);function zt(e){if(e===nr)throw Error(x(174));return e}function wo(e,t){switch(F(Qn,t),F(Gn,e),F(Ue,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=si(t,e)}B(Ue),F(Ue,t)}function an(){B(Ue),B(Gn),B(Qn)}function yu(e){zt(Qn.current);var t=zt(Ue.current),n=si(t,e.type);t!==n&&(F(Gn,e),F(Ue,n))}function ko(e){Gn.current===e&&(B(Ue),B(Gn))}var H=xt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function So(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Pr=Ze.ReactCurrentDispatcher,Vl=Ze.ReactCurrentBatchConfig,_t=0,V=null,Y=null,q=null,Jr=!1,Mn=!1,Kn=0,hf=0;function le(){throw Error(x(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function No(e,t,n,r,l,i){if(_t=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?xf:wf,e=n(r,l),Mn){i=0;do{if(Mn=!1,Kn=0,25<=i)throw Error(x(301));i+=1,q=Y=null,t.updateQueue=null,Pr.current=kf,e=n(r,l)}while(Mn)}if(Pr.current=Zr,t=Y!==null&&Y.next!==null,_t=0,q=Y=V=null,Jr=!1,t)throw Error(x(300));return e}function Co(){var e=Kn!==0;return Kn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function Te(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?V.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(x(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function Yn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Te(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,d=i;do{var v=d.lane;if((_t&v)===v)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,V.lanes|=v,At|=v}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,De(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,At|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=Te(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);De(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xu(){}function wu(e,t){var n=V,r=Te(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Eo(ju.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Xn(9,Su.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(x(349));_t&30||ku(n,t,l)}return l}function ku(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Su(e,t,n,r){t.value=n,t.getSnapshot=r,Nu(t)&&Cu(e)}function ju(e,t,n){return n(function(){Nu(t)&&Cu(e)})}function Nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Cu(e){var t=Xe(e,1);t!==null&&be(t,e,1,-1)}function Ta(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=yf.bind(null,V,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Eu(){return Te().memoizedState}function Tr(e,t,n,r){var l=Fe();V.flags|=e,l.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(Y!==null){var a=Y.memoizedState;if(i=a.destroy,r!==null&&jo(r,a.deps)){l.memoizedState=Xn(t,n,i,r);return}}V.flags|=e,l.memoizedState=Xn(1|t,n,i,r)}function Ma(e,t){return Tr(8390656,8,e,t)}function Eo(e,t){return dl(2048,8,e,t)}function zu(e,t){return dl(4,2,e,t)}function Pu(e,t){return dl(4,4,e,t)}function Tu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,Tu.bind(null,t,e),n)}function zo(){}function Lu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _u(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Au(e,t,n){return _t&21?(De(n,t)||(n=Fs(),V.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function gf(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{b=n,Vl.transition=r}}function Iu(){return Te().memoizedState}function vf(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bu(e))Du(t,n);else if(n=gu(e,t,n,r),n!==null){var l=ue();be(n,e,r,l),Ru(n,t,r)}}function yf(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bu(e))Du(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,De(s,a)){var u=t.interleaved;u===null?(l.next=l,yo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=gu(e,t,l,r),n!==null&&(l=ue(),be(n,e,r,l),Ru(n,t,r))}}function bu(e){var t=e.alternate;return e===V||t!==null&&t===V}function Du(e,t){Mn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ru(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}var Zr={readContext:Pe,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},xf={readContext:Pe,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Ma,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,Tu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ta,useDebugValue:zo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ta(!1),t=e[0];return e=gf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Fe();if(U){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ee===null)throw Error(x(349));_t&30||ku(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ma(ju.bind(null,r,i,e),[e]),r.flags|=2048,Xn(9,Su.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=ee.identifierPrefix;if(U){var n=Ge,r=We;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wf={readContext:Pe,useCallback:Lu,useContext:Pe,useEffect:Eo,useImperativeHandle:Mu,useInsertionEffect:zu,useLayoutEffect:Pu,useMemo:_u,useReducer:$l,useRef:Eu,useState:function(){return $l(Yn)},useDebugValue:zo,useDeferredValue:function(e){var t=Te();return Au(t,Y.memoizedState,e)},useTransition:function(){var e=$l(Yn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:wu,useId:Iu,unstable_isNewReconciler:!1},kf={readContext:Pe,useCallback:Lu,useContext:Pe,useEffect:Eo,useImperativeHandle:Mu,useInsertionEffect:zu,useLayoutEffect:Pu,useMemo:_u,useReducer:Wl,useRef:Eu,useState:function(){return Wl(Yn)},useDebugValue:zo,useDeferredValue:function(e){var t=Te();return Y===null?t.memoizedState=e:Au(t,Y.memoizedState,e)},useTransition:function(){var e=Wl(Yn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:wu,useId:Iu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=mt(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(be(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=mt(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(be(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=mt(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(be(t,e,r,n),zr(t,e,r))}};function La(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(l,i):!0}function Fu(e,t,n){var r=!1,l=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(l=he(t)?Mt:ae.current,r=t.contextTypes,i=(r=r!=null)?rn(e,l):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function _a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function Mi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},xo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Pe(i):(i=he(t)?Mt:ae.current,l.context=rn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ti(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&fl.enqueueReplaceState(l,l.state,null),Yr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var n="",r=t;do n+=Kc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sf=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){el||(el=!0,Ui=r),Li(e,t)},n}function Bu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Aa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Df.bind(null,e,t,n),t.then(e,e))}function Ia(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ba(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var jf=Ze.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?hu(t,null,n,r):on(t,e.child,n,r)}function Da(e,t,n,r,l){n=n.render;var i=t.ref;return en(t,l),r=No(e,t,n,r,i,l),n=Co(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(U&&n&&fo(t),t.flags|=1,se(e,t,r,l),t.child)}function Ra(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!bo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Uu(e,t,i,r,l)):(e=Ar(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(a,r)&&e.ref===t.ref)return Je(e,t,l)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Hn(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,l)}return _i(e,t,n,r,l)}function Hu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Yt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Yt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(Yt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(Yt,ve),ve|=r;return se(e,t,l,n),t.child}function Vu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _i(e,t,n,r,l){var i=he(n)?Mt:ae.current;return i=rn(t,i),en(t,l),n=No(e,t,n,r,i,l),r=Co(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(U&&r&&fo(t),t.flags|=1,se(e,t,n,l),t.child)}function Fa(e,t,n,r,l){if(he(n)){var i=!0;$r(t)}else i=!1;if(en(t,l),t.stateNode===null)Mr(e,t),Fu(t,n,r),Mi(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Pe(d):(d=he(n)?Mt:ae.current,d=rn(t,d));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&_a(t,a,r,d),nt=!1;var m=t.memoizedState;a.state=m,Yr(t,r,a,l),u=t.memoizedState,s!==r||m!==u||me.current||nt?(typeof v=="function"&&(Ti(t,n,v,r),u=t.memoizedState),(s=nt||La(t,n,s,r,m,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Le(t.type,s),a.props=d,g=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pe(u):(u=he(n)?Mt:ae.current,u=rn(t,u));var y=n.getDerivedStateFromProps;(v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||m!==u)&&_a(t,a,r,u),nt=!1,m=t.memoizedState,a.state=m,Yr(t,r,a,l);var w=t.memoizedState;s!==g||m!==w||me.current||nt?(typeof y=="function"&&(Ti(t,n,y,r),w=t.memoizedState),(d=nt||La(t,n,d,r,m,w,u)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ai(e,t,n,r,i,l)}function Ai(e,t,n,r,l,i){Vu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&ja(t,n,!1),Je(e,t,i);r=t.stateNode,jf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=on(t,e.child,null,i),t.child=on(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&ja(t,n,!0),t.child}function $u(e){var t=e.stateNode;t.pendingContext?Sa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sa(e,t.context,!1),wo(e,t.containerInfo)}function Oa(e,t,n,r,l){return ln(),mo(l),t.flags|=256,se(e,t,n,r),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wu(e,t,n){var r=t.pendingProps,l=H.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(H,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=hl(a,r,0,null),e=Tt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bi(n),t.memoizedState=Ii,e):Po(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Nf(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ht(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ht(s,i):(i=Tt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?bi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Po(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&mo(r),on(t,e.child,null,n),e=Po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(x(422))),yr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=hl({mode:"visible",children:r.children},l,0,null),i=Tt(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&on(t,e.child,null,a),t.child.memoizedState=bi(a),t.memoizedState=Ii,i);if(!(t.mode&1))return yr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(x(419)),r=Gl(i,r,void 0),yr(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),be(r,e,l,-1))}return Io(),r=Gl(Error(x(421))),yr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Rf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=dt(l.nextSibling),xe=t,U=!0,Ae=null,e!==null&&(Ne[Ce++]=We,Ne[Ce++]=Ge,Ne[Ce++]=Lt,We=e.id,Ge=e.overflow,Lt=t),t=Po(t,r.children),t.flags|=4096,t)}function Ba(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pi(e.return,t,n)}function Ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Gu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ba(e,n,t);else if(e.tag===19)Ba(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cf(e,t,n){switch(t.tag){case 3:$u(t),ln();break;case 5:yu(t);break;case 1:he(t.type)&&$r(t);break;case 4:wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(Qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Wu(e,t,n):(F(H,H.current&1),e=Je(e,t,n),e!==null?e.sibling:null);F(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Hu(e,t,n)}return Je(e,t,n)}var Qu,Di,Ku,Yu;Qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Di=function(){};Ku=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(Ue.current);var i=null;switch(n){case"input":l=li(e,l),r=li(e,r),i=[];break;case"select":l=$({},l,{value:void 0}),r=$({},r,{value:void 0}),i=[];break;case"textarea":l=ai(e,l),r=ai(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}ui(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(bn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(bn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Yu=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ef(e,t,n){var r=t.pendingProps;switch(po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&Vr(),ie(t),null;case 3:return r=t.stateNode,an(),B(me),B(ae),So(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&($i(Ae),Ae=null))),Di(e,t),ie(t),null;case 5:ko(t);var l=zt(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ku(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ie(t),null}if(e=zt(Ue.current),gr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Oe]=t,r[Wn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<Nn.length;l++)O(Nn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Yo(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Jo(r,i),O("invalid",r)}ui(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",""+s]):bn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&O("scroll",r)}switch(n){case"input":ar(r),Xo(r,i,!0);break;case"textarea":ar(r),Zo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Hr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=js(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Oe]=t,e[Wn]=r,Qu(e,t,!1,!1),t.stateNode=e;e:{switch(a=ci(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nn.length;l++)O(Nn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Yo(e,r),l=li(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=$({},r,{value:void 0}),O("invalid",e);break;case"textarea":Jo(e,r),l=ai(e,r),O("invalid",e);break;default:l=r}ui(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Es(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ns(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(bn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&O("scroll",e):u!=null&&Ji(e,i,u,a))}switch(n){case"input":ar(e),Xo(e,r,!1);break;case"textarea":ar(e),Zo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Xt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Yu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=zt(Qn.current),zt(Ue.current),gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return ie(t),null;case 13:if(B(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ye!==null&&t.mode&1&&!(t.flags&128))pu(),ln(),t.flags|=98560,i=!1;else if(i=gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Oe]=t}else ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Ae!==null&&($i(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?X===0&&(X=3):Io())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return an(),Di(e,t),e===null&&Vn(t.stateNode.containerInfo),ie(t),null;case 10:return vo(t.type._context),ie(t),null;case 17:return he(t.type)&&Vr(),ie(t),null;case 19:if(B(H),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)xn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Xr(e),a!==null){for(t.flags|=128,xn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>un&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!U)return ie(t),null}else 2*Q()-i.renderingStartTime>un&&n!==1073741824&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=H.current,F(H,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Ao(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function zf(e,t){switch(po(t),t.tag){case 1:return he(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(),B(me),B(ae),So(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ko(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return an(),null;case 10:return vo(t.type._context),null;case 22:case 23:return Ao(),null;case 24:return null;default:return null}}var xr=!1,oe=!1,Pf=typeof WeakSet=="function"?WeakSet:Set,C=null;function Kt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Ri(e,t,n){try{n()}catch(r){W(e,t,r)}}var Ua=!1;function Tf(e,t){if(wi=Or,e=eu(),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,v=0,g=e,m=null;t:for(;;){for(var y;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==i||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)m=g,g=y;for(;;){if(g===e)break t;if(m===n&&++d===l&&(s=a),m===i&&++v===r&&(u=a),(y=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},Or=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,T=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Le(t.type,S),T);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(h){W(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=Ua,Ua=!1,w}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ri(t,n,i)}l=l.next}while(l!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Wn],delete t[Ni],delete t[df],delete t[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function Ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var te=null,_e=!1;function et(e,t,n){for(n=n.child;n!==null;)Zu(e,t,n),n=n.sibling}function Zu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:oe||Kt(n,t);case 6:var r=te,l=_e;te=null,et(e,t,n),te=r,_e=l,te!==null&&(_e?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(_e?(e=te,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),Bn(e)):Bl(te,n.stateNode));break;case 4:r=te,l=_e,te=n.stateNode.containerInfo,_e=!0,et(e,t,n),te=r,_e=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ri(n,t,a),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!oe&&(Kt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){W(n,t,s)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,et(e,t,n),oe=r):et(e,t,n);break;default:et(e,t,n)}}function Va(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pf),t.forEach(function(r){var l=Ff.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,_e=!1;break e;case 3:te=s.stateNode.containerInfo,_e=!0;break e;case 4:te=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(te===null)throw Error(x(160));Zu(i,a,l),te=null,_e=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){W(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qu(t,e),t=t.sibling}function qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Re(e),r&4){try{Ln(3,e,e.return),pl(3,e)}catch(S){W(e,e.return,S)}try{Ln(5,e,e.return)}catch(S){W(e,e.return,S)}}break;case 1:Me(t,e),Re(e),r&512&&n!==null&&Kt(n,n.return);break;case 5:if(Me(t,e),Re(e),r&512&&n!==null&&Kt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(S){W(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ks(l,i),ci(s,a);var d=ci(s,i);for(a=0;a<u.length;a+=2){var v=u[a],g=u[a+1];v==="style"?Es(l,g):v==="dangerouslySetInnerHTML"?Ns(l,g):v==="children"?Dn(l,g):Ji(l,v,g,d)}switch(s){case"input":ii(l,i);break;case"textarea":Ss(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Xt(l,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?Xt(l,!!i.multiple,i.defaultValue,!0):Xt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wn]=i}catch(S){W(e,e.return,S)}}break;case 6:if(Me(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(S){W(e,e.return,S)}}break;case 3:if(Me(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(S){W(e,e.return,S)}break;case 4:Me(t,e),Re(e);break;case 13:Me(t,e),Re(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Lo=Q())),r&4&&Va(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||v,Me(t,e),oe=d):Me(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(C=e,v=e.child;v!==null;){for(g=C=v;C!==null;){switch(m=C,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ln(4,m,m.return);break;case 1:Kt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){W(r,n,S)}}break;case 5:Kt(m,m.return);break;case 22:if(m.memoizedState!==null){Wa(g);continue}}y!==null?(y.return=m,C=y):Wa(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Cs("display",a))}catch(S){W(e,e.return,S)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(S){W(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Me(t,e),Re(e),r&4&&Va(e);break;case 21:break;default:Me(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ju(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var i=Ha(e);Bi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ha(e);Oi(e,s,a);break;default:throw Error(x(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mf(e,t,n){C=e,ec(e)}function ec(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||xr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||oe;s=xr;var d=oe;if(xr=a,(oe=u)&&!d)for(C=l;C!==null;)a=C,u=a.child,a.tag===22&&a.memoizedState!==null?Ga(l):u!==null?(u.return=a,C=u):Ga(l);for(;i!==null;)C=i,ec(i),i=i.sibling;C=l,xr=s,oe=d}$a(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):$a(e)}}function $a(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pa(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pa(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Bn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}oe||t.flags&512&&Fi(t)}catch(m){W(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Wa(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Ga(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(u){W(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){W(t,l,u)}}var i=t.return;try{Fi(t)}catch(u){W(t,i,u)}break;case 5:var a=t.return;try{Fi(t)}catch(u){W(t,a,u)}}}catch(u){W(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Lf=Math.ceil,qr=Ze.ReactCurrentDispatcher,To=Ze.ReactCurrentOwner,ze=Ze.ReactCurrentBatchConfig,A=0,ee=null,K=null,ne=0,ve=0,Yt=xt(0),X=0,Jn=null,At=0,ml=0,Mo=0,_n=null,fe=null,Lo=0,un=1/0,Ve=null,el=!1,Ui=null,pt=null,wr=!1,at=null,tl=0,An=0,Hi=null,Lr=-1,_r=0;function ue(){return A&6?Q():Lr!==-1?Lr:Lr=Q()}function mt(e){return e.mode&1?A&2&&ne!==0?ne&-ne:mf.transition!==null?(_r===0&&(_r=Fs()),_r):(e=b,e!==0||(e=window.event,e=e===void 0?16:Ws(e.type)),e):1}function be(e,t,n,r){if(50<An)throw An=0,Hi=null,Error(x(185));qn(e,n,r),(!(A&2)||e!==ee)&&(e===ee&&(!(A&2)&&(ml|=n),X===4&&it(e,ne)),ge(e,r),n===1&&A===0&&!(t.mode&1)&&(un=Q()+500,cl&&wt()))}function ge(e,t){var n=e.callbackNode;pd(e,t);var r=Fr(e,e===ee?ne:0);if(r===0)n!==null&&ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ta(n),t===1)e.tag===0?pf(Qa.bind(null,e)):cu(Qa.bind(null,e)),uf(function(){!(A&6)&&wt()}),n=null;else{switch(Os(r)){case 1:n=no;break;case 4:n=Ds;break;case 16:n=Rr;break;case 536870912:n=Rs;break;default:n=Rr}n=sc(n,tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tc(e,t){if(Lr=-1,_r=0,A&6)throw Error(x(327));var n=e.callbackNode;if(tn()&&e.callbackNode!==n)return null;var r=Fr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=nl(e,r);else{t=r;var l=A;A|=2;var i=rc();(ee!==e||ne!==t)&&(Ve=null,un=Q()+500,Pt(e,t));do try{If();break}catch(s){nc(e,s)}while(!0);go(),qr.current=i,A=l,K!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(l=hi(e),l!==0&&(r=l,t=Vi(e,l))),t===1)throw n=Jn,Pt(e,0),it(e,r),ge(e,Q()),n;if(t===6)it(e,r);else{if(l=e.current.alternate,!(r&30)&&!_f(l)&&(t=nl(e,r),t===2&&(i=hi(e),i!==0&&(r=i,t=Vi(e,i))),t===1))throw n=Jn,Pt(e,0),it(e,r),ge(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Nt(e,fe,Ve);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Lo+500-Q(),10<t)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ji(Nt.bind(null,e,fe,Ve),t);break}Nt(e,fe,Ve);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ie(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lf(r/1960))-r,10<r){e.timeoutHandle=ji(Nt.bind(null,e,fe,Ve),r);break}Nt(e,fe,Ve);break;case 5:Nt(e,fe,Ve);break;default:throw Error(x(329))}}}return ge(e,Q()),e.callbackNode===n?tc.bind(null,e):null}function Vi(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=nl(e,t),e!==2&&(t=fe,fe=n,t!==null&&$i(t)),e}function $i(e){fe===null?fe=e:fe.push.apply(fe,e)}function _f(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Mo,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Qa(e){if(A&6)throw Error(x(327));tn();var t=Fr(e,0);if(!(t&1))return ge(e,Q()),null;var n=nl(e,t);if(e.tag!==0&&n===2){var r=hi(e);r!==0&&(t=r,n=Vi(e,r))}if(n===1)throw n=Jn,Pt(e,0),it(e,t),ge(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,fe,Ve),ge(e,Q()),null}function _o(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(un=Q()+500,cl&&wt())}}function It(e){at!==null&&at.tag===0&&!(A&6)&&tn();var t=A;A|=1;var n=ze.transition,r=b;try{if(ze.transition=null,b=1,e)return e()}finally{b=r,ze.transition=n,A=t,!(A&6)&&wt()}}function Ao(){ve=Yt.current,B(Yt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:an(),B(me),B(ae),So();break;case 5:ko(r);break;case 4:an();break;case 13:B(H);break;case 19:B(H);break;case 10:vo(r.type._context);break;case 22:case 23:Ao()}n=n.return}if(ee=e,K=e=ht(e.current,null),ne=ve=t,X=0,Jn=null,Mo=ml=At=0,fe=_n=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Et=null}return e}function nc(e,t){do{var n=K;try{if(go(),Pr.current=Zr,Jr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(_t=0,q=Y=V=null,Mn=!1,Kn=0,To.current=null,n===null||n.return===null){X=1,Jn=t,K=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,v=s,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Ia(a);if(y!==null){y.flags&=-257,ba(y,a,s,i,t),y.mode&1&&Aa(i,d,t),t=y,u=d;var w=t.updateQueue;if(w===null){var S=new Set;S.add(u),t.updateQueue=S}else w.add(u);break e}else{if(!(t&1)){Aa(i,d,t),Io();break e}u=Error(x(426))}}else if(U&&s.mode&1){var T=Ia(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ba(T,a,s,i,t),mo(sn(u,s));break e}}i=u=sn(u,s),X!==4&&(X=2),_n===null?_n=[i]:_n.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ou(i,u,t);za(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var h=Bu(i,s,t);za(i,h);break e}}i=i.return}while(i!==null)}ic(n)}catch(k){t=k,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function rc(){var e=qr.current;return qr.current=Zr,e===null?Zr:e}function Io(){(X===0||X===3||X===2)&&(X=4),ee===null||!(At&268435455)&&!(ml&268435455)||it(ee,ne)}function nl(e,t){var n=A;A|=2;var r=rc();(ee!==e||ne!==t)&&(Ve=null,Pt(e,t));do try{Af();break}catch(l){nc(e,l)}while(!0);if(go(),A=n,qr.current=r,K!==null)throw Error(x(261));return ee=null,ne=0,X}function Af(){for(;K!==null;)lc(K)}function If(){for(;K!==null&&!ld();)lc(K)}function lc(e){var t=ac(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?ic(e):K=t,To.current=null}function ic(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=Ef(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function Nt(e,t,n){var r=b,l=ze.transition;try{ze.transition=null,b=1,bf(e,t,n,r)}finally{ze.transition=l,b=r}return null}function bf(e,t,n,r){do tn();while(at!==null);if(A&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(md(e,i),e===ee&&(K=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,sc(Rr,function(){return tn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var a=b;b=1;var s=A;A|=4,To.current=null,Tf(e,n),qu(n,e),ef(ki),Or=!!wi,ki=wi=null,e.current=n,Mf(n),id(),A=s,b=a,ze.transition=i}else e.current=n;if(wr&&(wr=!1,at=e,tl=l),i=e.pendingLanes,i===0&&(pt=null),sd(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(el)throw el=!1,e=Ui,Ui=null,e;return tl&1&&e.tag!==0&&tn(),i=e.pendingLanes,i&1?e===Hi?An++:(An=0,Hi=e):An=0,wt(),null}function tn(){if(at!==null){var e=Os(tl),t=ze.transition,n=b;try{if(ze.transition=null,b=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,tl=0,A&6)throw Error(x(331));var l=A;for(A|=4,C=e.current;C!==null;){var i=C,a=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(C=d;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:Ln(8,v,i)}var g=v.child;if(g!==null)g.return=v,C=g;else for(;C!==null;){v=C;var m=v.sibling,y=v.return;if(Xu(v),v===d){C=null;break}if(m!==null){m.return=y,C=m;break}C=y}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}C=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,C=a;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ln(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){a=C;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,C=p;else e:for(a=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pl(9,s)}}catch(k){W(s,s.return,k)}if(s===a){C=null;break e}var h=s.sibling;if(h!==null){h.return=s.return,C=h;break e}C=s.return}}if(A=l,wt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{b=n,ze.transition=t}}return!1}function Ka(e,t,n){t=sn(n,t),t=Ou(e,t,1),e=ft(e,t,1),t=ue(),e!==null&&(qn(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)Ka(e,e,n);else for(;t!==null;){if(t.tag===3){Ka(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=sn(n,e),e=Bu(t,e,1),t=ft(t,e,1),e=ue(),t!==null&&(qn(t,1,e),ge(t,e));break}}t=t.return}}function Df(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>Q()-Lo?Pt(e,0):Mo|=n),ge(e,t)}function oc(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=ue();e=Xe(e,t),e!==null&&(qn(e,t,n),ge(e,n))}function Rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),oc(e,n)}function Ff(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),oc(e,n)}var ac;ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Cf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&du(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var l=rn(t,ae.current);en(t,n),l=No(null,t,r,e,l,n);var i=Co();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,$r(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,xo(t),l.updater=fl,t.stateNode=l,l._reactInternals=t,Mi(t,r,e,n),t=Ai(null,t,r,!0,i,n)):(t.tag=0,U&&i&&fo(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Bf(r),e=Le(r,e),l){case 0:t=_i(null,t,r,e,n);break e;case 1:t=Fa(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Ra(null,t,r,Le(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Fa(e,t,r,l,n);case 3:e:{if($u(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,vu(e,t),Yr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=sn(Error(x(423)),t),t=Oa(e,t,r,n,l);break e}else if(r!==l){l=sn(Error(x(424)),t),t=Oa(e,t,r,n,l);break e}else for(ye=dt(t.stateNode.containerInfo.firstChild),xe=t,U=!0,Ae=null,n=hu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ln(),r===l){t=Je(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return yu(t),e===null&&zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Si(r,l)?a=null:i!==null&&Si(r,i)&&(t.flags|=32),Vu(e,t),se(e,t,a,n),t.child;case 6:return e===null&&zi(t),null;case 13:return Wu(e,t,n);case 4:return wo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=on(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Da(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,F(Qr,r._currentValue),r._currentValue=a,i!==null)if(De(i.value,a)){if(i.children===l.children&&!me.current){t=Je(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qe(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?u.next=u:(u.next=v.next,v.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Pi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(x(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Pi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,en(t,n),l=Pe(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Ra(e,t,r,l,n);case 15:return Uu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Mr(e,t),t.tag=1,he(r)?(e=!0,$r(t)):e=!1,en(t,n),Fu(t,r,l),Mi(t,r,l,n),Ai(null,t,r,!0,e,n);case 19:return Gu(e,t,n);case 22:return Hu(e,t,n)}throw Error(x(156,t.tag))};function sc(e,t){return bs(e,t)}function Of(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Of(e,t,n,r)}function bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bf(e){if(typeof e=="function")return bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===eo)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ar(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")bo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ot:return Tt(n.children,l,i,t);case Zi:a=8,l|=8;break;case ei:return e=Ee(12,n,t,l|2),e.elementType=ei,e.lanes=i,e;case ti:return e=Ee(13,n,t,l),e.elementType=ti,e.lanes=i,e;case ni:return e=Ee(19,n,t,l),e.elementType=ni,e.lanes=i,e;case ys:return hl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gs:a=10;break e;case vs:a=9;break e;case qi:a=11;break e;case eo:a=14;break e;case tt:a=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ee(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Tt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=ys,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Do(e,t,n,r,l,i,a,s,u){return e=new Uf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xo(i),e}function Hf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uc(e){if(!e)return vt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(he(n))return uu(e,n,t)}return t}function cc(e,t,n,r,l,i,a,s,u){return e=Do(n,r,!0,e,l,i,a,s,u),e.context=uc(null),n=e.current,r=ue(),l=mt(n),i=Qe(r,l),i.callback=t??null,ft(n,i,l),e.current.lanes=l,qn(e,l,r),ge(e,r),e}function gl(e,t,n,r){var l=t.current,i=ue(),a=mt(l);return n=uc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,a),e!==null&&(be(e,l,a,i),zr(e,l,a)),a}function rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ya(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Ya(e,t),(e=e.alternate)&&Ya(e,t)}function Vf(){return null}var dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fo(e){this._internalRoot=e}vl.prototype.render=Fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));gl(e,t,null,null)};vl.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){gl(null,e,null,null)}),t[Ye]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&$s(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xa(){}function $f(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=rl(a);i.call(d)}}var a=cc(t,r,e,0,null,!1,!1,"",Xa);return e._reactRootContainer=a,e[Ye]=a.current,Vn(e.nodeType===8?e.parentNode:e),It(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=rl(u);s.call(d)}}var u=Do(e,0,!1,null,null,!1,!1,"",Xa);return e._reactRootContainer=u,e[Ye]=u.current,Vn(e.nodeType===8?e.parentNode:e),It(function(){gl(t,u,n,r)}),u}function xl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=rl(a);s.call(u)}}gl(t,a,e,l)}else a=$f(n,t,e,l,r);return rl(a)}Bs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(ro(t,n|1),ge(t,Q()),!(A&6)&&(un=Q()+500,wt()))}break;case 13:It(function(){var r=Xe(e,1);if(r!==null){var l=ue();be(r,e,1,l)}}),Ro(e,1)}};lo=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ue();be(t,e,134217728,n)}Ro(e,134217728)}};Us=function(e){if(e.tag===13){var t=mt(e),n=Xe(e,t);if(n!==null){var r=ue();be(n,e,t,r)}Ro(e,t)}};Hs=function(){return b};Vs=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};fi=function(e,t,n){switch(t){case"input":if(ii(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(x(90));ws(r),ii(r,l)}}}break;case"textarea":Ss(e,n);break;case"select":t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}};Ts=_o;Ms=It;var Wf={usingClientEntryPoint:!1,Events:[tr,Vt,ul,zs,Ps,_o]},wn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=As(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{il=kr.inject(Gf),Be=kr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(t))throw Error(x(200));return Hf(e,t,null,n)};ke.createRoot=function(e,t){if(!Oo(e))throw Error(x(299));var n=!1,r="",l=dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Do(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Fo(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=As(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return It(e)};ke.hydrate=function(e,t,n){if(!yl(t))throw Error(x(200));return xl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Oo(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=dc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=cc(t,null,e,1,n??null,l,!1,i,a),e[Ye]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new vl(t)};ke.render=function(e,t,n){if(!yl(t))throw Error(x(200));return xl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!yl(e))throw Error(x(40));return e._reactRootContainer?(It(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=_o;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return xl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)}catch(e){console.error(e)}}fc(),fs.exports=ke;var Qf=fs.exports,Ja=Qf;Zl.createRoot=Ja.createRoot,Zl.hydrateRoot=Ja.hydrateRoot;const Kf=()=>{const e=R.useRef(null);return R.useEffect(()=>{const t=window.innerWidth<768;if(t)return;const n=e.current;if(!n)return;const r=n.getContext("2d");let l,i=n.width=window.innerWidth,a=n.height=window.innerHeight;const s=()=>{i=n.width=window.innerWidth,a=n.height=window.innerHeight,window.innerWidth<768&&f()};window.addEventListener("resize",s);const u=["rgba(16, 42, 67,","rgba(37, 99, 235,","rgba(100, 116, 139,","rgba(6, 182, 212,","rgba(16, 185, 129,"],d=15,v=[];for(let c=0;c<d;c++)v.push({x:Math.random()*i,y:Math.random()*a,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*3,baseRadius:Math.random()*(i*.15)+(t?100:150),radius:0,colorBase:u[c%u.length],angle:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.02+.01});let g=i/2,m=a/2,y=i/2,w=a/2;const S=c=>{t||(y=c.clientX,w=c.clientY)},T=c=>{t||c.touches.length>0&&(y=c.touches[0].clientX,w=c.touches[0].clientY)};window.addEventListener("mousemove",S),window.addEventListener("touchmove",T,{passive:!0});const f=()=>{r.clearRect(0,0,i,a),g+=(y-g)*.05,m+=(w-m)*.05,r.globalCompositeOperation=t?"source-over":"screen",v.forEach((c,p)=>{c.angle+=c.pulseSpeed,c.radius=c.baseRadius+Math.sin(c.angle)*(c.baseRadius*.4),c.x+=c.vx,c.y+=c.vy,c.x<-c.radius&&(c.vx*=-1),c.x>i+c.radius&&(c.vx*=-1),c.y<-c.radius&&(c.vy*=-1),c.y>a+c.radius&&(c.vy*=-1);const h=c.x-g,k=c.y-m,N=Math.sqrt(h*h+k*k);if(N<400){const E=(400-N)/400;c.x+=h/N*E*3,c.y+=k/N*E*3}const j=r.createRadialGradient(c.x,c.y,0,c.x,c.y,c.radius);j.addColorStop(0,c.colorBase+"0.7)"),j.addColorStop(.5,c.colorBase+"0.3)"),j.addColorStop(1,c.colorBase+"0)"),r.fillStyle=j,r.beginPath(),r.arc(c.x,c.y,c.radius,0,Math.PI*2),r.fill()}),t||(l=requestAnimationFrame(f))};return f(),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",S),window.removeEventListener("touchmove",T),l&&cancelAnimationFrame(l)}},[]),o.jsx("canvas",{ref:e,className:"lava-canvas",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})},Yf=({onOpenResume:e})=>o.jsxs("section",{id:"about",className:"hero-apple-section",children:[o.jsx("div",{className:"container hero-apple-container",children:o.jsxs("div",{className:"hero-intro-card animate-fade-in",style:{animationDelay:"0.1s"},children:[o.jsxs("div",{className:"hero-card-top",children:[o.jsx("div",{className:"hero-card-grain"}),o.jsxs("div",{className:"hero-card-top-bg",children:[o.jsx("div",{className:"mesh-blob mesh-blob-1"}),o.jsx("div",{className:"mesh-blob mesh-blob-2"}),o.jsx("div",{className:"mesh-blob mesh-blob-3"}),o.jsx("div",{className:"mesh-blob mesh-blob-4"})]}),o.jsx("div",{className:"hero-photo-wrapper",children:o.jsx("img",{src:"/IMG_1984.jpeg",alt:"Mohammed Wasif Ali",className:"hero-photo"})})]}),o.jsxs("div",{className:"hero-card-bottom",children:[o.jsx("h1",{className:"hero-apple-title",children:"Mohammed Wasif Ali."}),o.jsx("p",{className:"hero-apple-subtitle",children:"CS student with hands-on experience in full-stack development, machine learning, and applied AI research. Built end-to-end systems using Python, PyTorch, FastAPI, React, and SQL across healthcare and social-impact projects, backed by peer-reviewed conference papers and a Best Paper Award."})]})]})}),o.jsx("style",{children:`
        .hero-apple-section {
          padding-top: 5rem;
          padding-bottom: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-apple-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 92%;
          max-width: 1400px;
        }

        /* Intro Card */
        .hero-intro-card {
          width: 100%;
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-glass);
          border-radius: 24px;
          overflow: hidden; /* This hides the bottom corners of the card itself */
          
          /* CRITICAL BUGFIX FOR SAFARI IPHONE: 
             Forces border-radius clipping on elements that use filter: blur() or transforms */
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          transform: translateZ(0);

          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
          position: relative;
        }

        /* Top Half Container */
        .hero-card-top {
          height: 240px;
          position: relative;
          background: #0a1118; /* Restored deep base color for rich gas effect */
        }

        /* Grain Overlay (sits above the blur, below the photo) */
        .hero-card-grain {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.15;
          mix-blend-mode: overlay;
          z-index: 2;
          pointer-events: none;
        }

        /* The Background Layer that holds the mesh */
        .hero-card-top-bg {
          position: absolute;
          inset: 0;
          overflow: hidden; 
          filter: blur(25px); /* Single blur melts the colors into gas */
          -webkit-filter: blur(25px);
          transform: scale(1.2); /* Prevents edge bleeding */
          z-index: 1;
        }

        /* Dynamic Mesh Blobs */
        .mesh-blob {
          position: absolute;
          border-radius: 50%;
          will-change: transform;
        }

        .mesh-blob-1 {
          top: -30%; left: -10%;
          width: 70%; height: 130%;
          background: rgba(37, 99, 235, 0.9); /* Sapphire */
          animation: meshSway1 6s infinite alternate ease-in-out;
        }

        .mesh-blob-2 {
          bottom: -40%; right: -10%;
          width: 80%; height: 110%;
          background: rgba(6, 182, 212, 0.9); /* Cyber Cyan */
          animation: meshSway2 8s infinite alternate ease-in-out;
        }

        .mesh-blob-3 {
          top: 20%; left: 30%;
          width: 60%; height: 110%;
          background: rgba(16, 185, 129, 0.8); /* Emerald Green */
          animation: meshSway3 7s infinite alternate ease-in-out;
        }
        
        .mesh-blob-4 {
          top: -20%; right: 20%;
          width: 70%; height: 100%;
          background: rgba(79, 70, 229, 0.9); /* Indigo */
          animation: meshSway4 9s infinite alternate ease-in-out;
        }

        @keyframes meshSway1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(40%, 20%) scale(1.4) rotate(45deg); }
          100% { transform: translate(10%, 40%) scale(0.9) rotate(90deg); }
        }
        
        @keyframes meshSway2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-40%, -20%) scale(1.3) rotate(-45deg); }
          100% { transform: translate(-50%, 20%) scale(1.1) rotate(-90deg); }
        }
        
        @keyframes meshSway3 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-30%, -40%) scale(0.8) rotate(30deg); }
          100% { transform: translate(30%, -30%) scale(1.3) rotate(60deg); }
        }
        
        @keyframes meshSway4 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(40%, -20%) scale(1.2) rotate(-30deg); }
          100% { transform: translate(-30%, 40%) scale(0.9) rotate(45deg); }
        }

        /* Photo Wrapper */
        .hero-photo-wrapper {
          position: absolute;
          bottom: -90px;
          left: 60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          padding: 2px;
          background: #ffffff;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          border-radius: 50%;
        }

        /* Bottom Half */
        .hero-card-bottom {
          padding: 5rem 3rem 3rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hero-apple-title {
          font-size: 2.8rem;
          line-height: 1.1;
          letter-spacing: -0.04em;
          font-weight: 700;
          color: var(--text-main);
          margin-top: 1rem;
        }

        .hero-apple-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-weight: 400;
          max-width: 1000px;
        }

        @media (max-width: 768px) {
          .hero-apple-section {
            padding-top: 3rem; 
            padding-bottom: 1rem;
          }
          .hero-apple-container {
            width: 92%; 
          }
          .hero-intro-card {
            margin-bottom: 1rem;
            border-radius: 20px;
          }
          .hero-card-top {
            height: 140px; 
          }
          .hero-photo-wrapper {
            width: 90px; /* Smaller photo since it's on the left */
            height: 90px;
            bottom: -45px; /* Overlaps exactly halfway */
            left: 1.5rem; /* Left-aligned */
            transform: none; /* Remove center transform */
          }
          .hero-card-bottom {
            padding: 3.5rem 1.5rem 1.5rem 1.5rem; /* Padding matches the left alignment */
            text-align: left; /* Left-align the text to match the photo */
          }
          .hero-apple-title {
            font-size: 2rem; 
            margin-top: 0;
          }
          .hero-apple-subtitle {
            font-size: 0.95rem; 
            line-height: 1.5;
          }
        }
      `})]});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),D=(e,t)=>{const n=R.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:u,...d},v)=>R.createElement("svg",{ref:v,...Xf,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Jf(e)}`,s].join(" "),...d},[...t.map(([g,m])=>R.createElement(g,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=D("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=D("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=D("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=D("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=D("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=D("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=D("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=D("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=D("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=D("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=D("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=D("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=D("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=D("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=D("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=D("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=D("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=D("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=D("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=D("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=D("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=D("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=D("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=D("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=D("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=D("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=D("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),cp=({onModalChange:e})=>{const[t,n]=R.useState(null),[r,l]=R.useState(null),[i,a]=R.useState(!1),[s,u]=R.useState({x:0,y:0}),d=()=>{a(!0),setTimeout(()=>{n(null),a(!1)},650)};je.useEffect(()=>{e&&e(!!t)},[t,e]);const v=[{id:"sci-2026-rare-syndrome",title:"Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images",venue:"SCI 2026 Conference",award:"Best Paper Award 🏆",status:"Published / Accepted",year:"2026",role:"Lead Model Development & ArcFace Pipeline",summary:"Engineered an ArcFace deep metric learning pipeline paired with prototypical classifiers to identify rare genetic syndromes from limited clinical facial imagery.",metrics:[{label:"Paper Distinction",val:"Best Paper Award"},{label:"Architecture",val:"ArcFace + Prototypical Nets"},{label:"Domain",val:"Rare Disease Clinical AI"}],tags:["ArcFace","Few-Shot Learning","Clinical AI","PyTorch"],abstract:"Rare genetic syndromes pose a severe diagnostic bottleneck due to scarce clinical samples. In this paper, we propose a few-shot deep metric learning model leveraging customized ArcFace loss and metric-space prototypical embeddings. The system projects high-dimensional facial dysmorphology features into a tightly clustered embedding space, enabling robust zero/few-shot syndrome classification even with fewer than 5 clinical photos per syndrome class.",citation:'Ali, M.W. et al. "Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images" — SCI 2026 Conference. (Best Paper Award)'},{id:"cml-2026-fgdd",title:"Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset",venue:"CML 2026 Conference",award:null,status:"Accepted",year:"2026",role:"Designed Framework & Led Experiments",summary:"Achieved high accuracy by combining architectures for the FGDD multi-modal genetic dataset.",metrics:[{label:"Model",val:"Few-Shot Framework"},{label:"Dataset",val:"FGDD Multimodal"},{label:"Domain",val:"Clinical Genetics"}],tags:["FGDD","Few-Shot","Clinical AI"],abstract:"Designed the few-shot framework and led experiments for the detection of genetic syndromes using the FGDD dataset.",citation:'Ali, M.W. et al. "Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset" — CML 2026 Conference.'},{id:"iccis-2026-rag",title:"Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support",venue:"ICCIS 2026 (Springer LNNS, Scopus-indexed)",award:null,status:"Accepted",year:"2026",role:"Author",summary:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.",metrics:[{label:"Model",val:"Multimodal RAG"},{label:"Domain",val:"Mental Health"},{label:"Publisher",val:"Springer LNNS"}],tags:["Multimodal RAG","Emotion AI","SpeechBrain"],abstract:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses.",citation:'Ali, M.W. et al. "Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support" — Accepted, ICCIS 2026 (Springer LNNS, Scopus-indexed).'},{id:"uav-video-2026",title:"Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning",venue:"Manuscript in Preparation",award:null,status:"In Preparation / 2026",year:"2026",role:"Author",summary:"Developed a Video Swin Transformer framework tailored for aerial spatial-temporal event categorization on the benchmark ERA dataset.",metrics:[{label:"Backbone",val:"Deep Spatio-Temporal"},{label:"Domain",val:"UAV Spatio-Temporal"},{label:"Status",val:"In Preparation"}],tags:["Spatio-Temporal","UAV Vision","PyTorch"],abstract:"Unmanned Aerial Vehicle (UAV) video streams suffer from severe perspective shifts, camera jitter, and complex spatial dynamics. This research implements deep spatio-temporal learning to capture long-range spatial and temporal attention across aerial video frames.",citation:'Ali, M.W. et al. "Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning" — Manuscript in preparation, 2026.'}],g=m=>{navigator.clipboard.writeText(m.citation),l(m.id),setTimeout(()=>l(null),2500)};return o.jsxs("section",{id:"research",className:"section-padding research-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Research & Publications"}),o.jsx("h2",{children:"Peer-Reviewed Works"}),o.jsx("p",{children:"Bridging state-of-the-art computer vision, few-shot metric learning, and clinical AI frameworks."})]}),o.jsxs("div",{className:"featured-apple-card glass-card",children:[o.jsxs("div",{className:"featured-header",children:[o.jsxs("span",{className:"badge badge-gold",children:[o.jsx(Za,{size:13})," Best Paper Award"]}),o.jsx("span",{className:"badge badge-ai",children:"SCI 2026 Conference"})]}),o.jsxs("div",{className:"featured-content",children:[o.jsxs("div",{className:"featured-info",children:[o.jsx("h3",{className:"featured-title",children:"Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images"}),o.jsx("p",{className:"featured-summary",children:"Pioneered an ArcFace deep metric learning pipeline capable of classifying rare dysmorphological genetic syndromes from minimal sample counts."}),o.jsxs("div",{className:"featured-tags",children:[o.jsx("span",{className:"tech-pill",children:"ArcFace"}),o.jsx("span",{className:"tech-pill",children:"Prototypical Networks"}),o.jsx("span",{className:"tech-pill",children:"Few-Shot AI"}),o.jsx("span",{className:"tech-pill",children:"Clinical Diagnostics"})]})]}),o.jsxs("div",{className:"featured-action-box",children:[o.jsxs("div",{className:"feat-stat",children:[o.jsx("span",{className:"stat-big",children:"SCI 2026"}),o.jsx("span",{className:"stat-desc",children:"Best Paper Distinction"})]}),o.jsxs("button",{onClick:m=>{const y=m.currentTarget.getBoundingClientRect(),w=y.left+y.width/2-window.innerWidth/2,S=y.top-window.innerHeight/2;u({x:w,y:S}),n(v[0])},className:"btn btn-primary w-full",children:[o.jsx("span",{children:"Read Overview"}),o.jsx(rt,{size:15})]})]})]})]}),o.jsx("div",{className:"publications-apple-grid",children:v.map(m=>o.jsxs("div",{className:"pub-apple-card glass-card",children:[o.jsxs("div",{className:"pub-card-top",children:[m.award?o.jsxs("span",{className:"badge badge-gold",children:[o.jsx(Za,{size:12})," ",m.award]}):o.jsx("span",{className:"badge badge-cyan",children:m.venue}),o.jsx("span",{className:"code-font text-dim",style:{fontSize:"0.78rem"},children:m.year})]}),o.jsx("h4",{className:"pub-title",children:m.title}),o.jsx("p",{className:"pub-role",children:m.role}),o.jsx("p",{className:"pub-desc",children:m.summary}),o.jsx("div",{className:"pub-tags",children:m.tags.map((y,w)=>o.jsx("span",{className:"tech-pill",children:y},w))}),o.jsxs("div",{className:"pub-actions",children:[o.jsxs("button",{onClick:y=>{const w=y.currentTarget.getBoundingClientRect(),S=w.left+w.width/2-window.innerWidth/2,T=w.top-window.innerHeight/2;u({x:S,y:T}),n(m)},className:"btn btn-secondary btn-sm",children:[o.jsx(mc,{size:14}),o.jsx("span",{children:"Abstract"})]}),o.jsx("button",{onClick:()=>g(m),className:"btn btn-secondary btn-sm",children:r===m.id?o.jsx("span",{className:"text-emerald",children:"Copied"}):o.jsxs(o.Fragment,{children:[o.jsx(es,{size:14}),o.jsx("span",{children:"Cite"})]})})]})]},m.id))})]}),t&&o.jsx("div",{className:`modal-backdrop ${i?"closing":""}`,onClick:d,children:o.jsxs("div",{className:`modal-content glass-card ${i?"closing":""}`,onClick:m=>m.stopPropagation(),style:{transformOrigin:`calc(50% + ${s.x}px) calc(50% + ${s.y}px)`},children:[o.jsx("button",{className:"modal-close-btn",onClick:d,children:o.jsx(Uo,{size:18})}),o.jsxs("div",{className:"modal-header",children:[o.jsx("span",{className:"badge badge-cyan",children:t.venue}),o.jsx("h3",{className:"modal-title mt-2",children:t.title}),o.jsx("p",{className:"modal-authors",children:"Authors: Mohammed Wasif Ali et al."})]}),o.jsxs("div",{className:"modal-body",children:[o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"Abstract"}),o.jsx("p",{className:"abstract-text",children:t.abstract})]}),o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"Key Metrics & Architecture"}),o.jsx("div",{className:"modal-metrics-grid",children:t.metrics.map((m,y)=>o.jsxs("div",{className:"modal-metric-card",children:[o.jsx("div",{className:"modal-m-val",children:m.val}),o.jsx("div",{className:"modal-m-lbl",children:m.label})]},y))})]})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsxs("button",{onClick:()=>g(t),className:"btn btn-secondary",children:[o.jsx(es,{size:15}),o.jsx("span",{children:r===t.id?"Citation Copied":"Copy Citation"})]}),o.jsx("button",{onClick:d,className:"btn btn-primary",children:o.jsx("span",{children:"Close"})})]})]})}),o.jsx("style",{children:`
        .featured-apple-card {
          padding: 2.5rem;
          margin-bottom: 3rem;
        }

        .featured-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .featured-content {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 2.5rem;
          align-items: center;
        }

        .featured-title {
          font-size: 1.85rem;
          line-height: 1.25;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .featured-summary {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .featured-action-box {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-left: 2rem;
          border-left: 1px solid var(--border-glass);
        }

        .feat-stat {
          display: flex;
          flex-direction: column;
        }

        .stat-big {
          font-size: 1.6rem;
          font-weight: 600;
          color: #d97706;
        }

        .stat-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Grid */
        .publications-apple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .pub-apple-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .pub-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .pub-title {
          font-size: 1.25rem;
          line-height: 1.35;
          margin-bottom: 0.4rem;
          color: var(--text-main);
        }

        .pub-role {
          font-size: 0.82rem;
          color: var(--accent-apple-blue);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .pub-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .pub-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.5rem;
        }

        .pub-actions {
          display: flex;
          gap: 0.75rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.25rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.82rem;
          flex: 1;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(15px);
          z-index: 300;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          width: 100%;
          max-width: 640px;
          padding: 2.25rem;
          background: #ffffff;
          position: relative;
          border-radius: 28px;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          background: none; border: none;
          color: var(--text-dim);
          cursor: pointer;
          &:hover { color: var(--text-main); }
        }

        .modal-title { font-size: 1.4rem; line-height: 1.3; color: var(--text-main); }
        .modal-authors { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.4rem; }

        .modal-section {
          margin-top: 1.5rem;
          h4 { font-size: 0.92rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 500; }
        }

        .abstract-text {
          font-size: 0.94rem;
          color: var(--text-main);
          line-height: 1.6;
          background: rgba(0, 0, 0, 0.03);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .modal-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .modal-metric-card {
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-glass);
          padding: 0.85rem;
          border-radius: 12px;
          text-align: center;
        }

        .modal-m-val { font-weight: 600; font-size: 1.05rem; color: var(--text-main); }
        .modal-m-lbl { font-size: 0.72rem; color: var(--text-muted); }

        .modal-footer {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-glass);
          .btn { flex: 1; }
        }

        @media (max-width: 850px) {
          .featured-content { grid-template-columns: 1fr; }
          .featured-action-box { padding-left: 0; border-left: none; border-top: 1px solid var(--border-glass); padding-top: 1.5rem; }
        }
      `})]})},dp=({onModalChange:e})=>{const[t,n]=R.useState("All"),[r,l]=R.useState(null),[i,a]=R.useState({left:0,width:0,opacity:0}),[s,u]=R.useState(!1),[d,v]=R.useState({x:0,y:0}),g=je.useRef([]),m=je.useRef(null),y=je.useRef(null),w=je.useRef(!1),S=()=>{u(!0),setTimeout(()=>{l(null),u(!1)},650)},T=["All","Clinical AI","Few-Shot Learning","Generative AI","Blockchain","Systems & Networks","Computer Vision"],f=[...T,...T,...T];je.useEffect(()=>{e&&e(!!r)},[r,e]),je.useEffect(()=>{const h=T.indexOf(t),k=g.current[h];k&&window.innerWidth>768&&a({left:k.offsetLeft,width:k.offsetWidth,opacity:1})},[t,T]),je.useEffect(()=>{if(window.innerWidth>768)return;const h=m.current;if(!h)return;if(!w.current){const N=T.length,j=g.current[N];if(j){const E=h.offsetWidth/2,I=j.offsetLeft+j.offsetWidth/2;h.scrollTo({left:I-E,behavior:"auto"}),w.current=!0}}const k=()=>{y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{const N=h.getBoundingClientRect().left+h.offsetWidth/2;let j=-1,E=1/0;if(g.current.forEach((I,P)=>{if(!I)return;const J=I.getBoundingClientRect(),He=J.left+J.width/2,qe=Math.abs(N-He);qe<E&&(E=qe,j=P)}),j!==-1){const I=f[j];if(n(P=>P!==I?I:P),j<T.length||j>=T.length*2){const P=j%T.length+T.length,J=g.current[P];if(J){const He=J.offsetLeft+J.offsetWidth/2;h.scrollTo({left:He-h.offsetWidth/2,behavior:"auto"})}}}},50)};return h.addEventListener("scroll",k,{passive:!0}),()=>h.removeEventListener("scroll",k)},[]);const c=[{id:"few-shot-fgdd",title:"Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset",category:"Few-Shot Learning",period:"Sept 2025 - Feb 2026",role:"Team Lead (Size: 4)",icon:In,highlightBadge:"96.56% Acc",accuracy:"Top-5: 96.56%",summary:"Designed a few-shot learning framework integrating FT-Transformer and Prototypical Networks using PyTorch for tabular clinical data.",tech:["PyTorch","Python","FT-Transformer","Prototypical Networks"],features:["Integrated FT-Transformer and Prototypical Networks.","Applied to tabular clinical data classification of genetic syndromes.","Achieved 96.56% Top-5 accuracy in a 10-way, 3-shot evaluation.","Demonstrated a privacy-preserving alternative to image-based diagnostics."],deepDive:"Designed a few-shot learning framework integrating FT-Transformer and Prototypical Networks using PyTorch and Python for tabular clinical data classification of genetic syndromes. Achieved 96.56% Top-5 accuracy in a 10-way, 3-shot evaluation, demonstrating a privacy-preserving alternative to image-based diagnostics."},{id:"event-recognition-uav",title:"Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning",category:"Computer Vision",period:"Sept 2025 - Feb 2026",role:"Team Member (Size: 4)",icon:up,highlightBadge:"69.52% Acc",accuracy:"69.52% Acc",summary:"Developed a Video Swin Transformer-based spatio-temporal model using PyTorch and CUDA for UAV aerial event classification.",tech:["PyTorch","CUDA","Video Swin Transformer"],features:["Developed a Video Swin Transformer-based spatio-temporal model.","Trained the model on the university GPU server.","Achieved 69.52% classification accuracy on the ERA dataset, outperforming the FuTH-Net baseline.","Implemented the model training pipeline and video preprocessing."],deepDive:"Developed a Video Swin Transformer-based spatio-temporal model using PyTorch and CUDA for UAV aerial event classification on the ERA dataset. Trained the model on the university GPU server and achieved 69.52% classification accuracy, outperforming the FuTH-Net baseline. Implemented the model training pipeline and video preprocessing."},{id:"subway-route-opt",title:"Subway System Route Optimization Model",category:"Systems & Networks",period:"Aug 2024 - Nov 2024",role:"Team Lead (Size: 4)",icon:Jl,highlightBadge:"Algorithm Opt",accuracy:"Optimal Route",summary:"Designed a graph-based metro routing optimization system using C++ and Python implementing Dijkstra’s shortest-path algorithm.",tech:["C++","Python","Graph Algorithms"],features:["Designed a graph-based metro routing optimization system.","Implemented Dijkstra’s shortest-path algorithm to compute optimal routes.","Minimized travel time between stations.","Simulated traffic conditions to evaluate routing efficiency for smart city transportation."],deepDive:"Designed a graph-based metro routing optimization system using C++ and Python implementing Dijkstra’s shortest-path algorithm to compute optimal routes between stations and minimize travel time. Simulated traffic conditions to evaluate routing efficiency for smart city transportation planning."},{id:"cevi-clinical-ai",title:"Multimodal Framework for Venous Disease Assessment (CEVI)",category:"Clinical AI",period:"Jan 2026 - Present",role:"Team Member (Size: 4)",icon:sp,highlightBadge:"Clinical AI Deployment",accuracy:"77.17% CEAP Acc",summary:"Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection.",tech:["PyTorch","MedSAM","FastAPI","React","SQL"],features:["Achieved 77.17% CEAP classification accuracy to support clinical decision-making.","MedSAM zero-shot segmentation for automated venous ulcer and lesion region highlighting.","Doppler reflux detection to support diagnostics.","Built a longitudinal patient data pipeline using PyTorch, React, and FastAPI."],deepDive:"Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection to support clinical decision-making. Achieved 77.17% CEAP classification accuracy and built a longitudinal patient data pipeline using PyTorch, React, and FastAPI."},{id:"few-shot-syndromes",title:"Few-Shot Recognition of Rare Genetic Syndromes",category:"Few-Shot Learning",period:"Sept 2025 - Dec 2025",role:"Team Lead (Size: 4)",icon:In,highlightBadge:"Best Paper Award",accuracy:"Improved Top-K",summary:"Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure.",tech:["PyTorch","ArcFace","Few-Shot Learning","Python"],features:["Prototype-based few-shot recognition system using ArcFace embeddings.","Handled severe class imbalance during training on GPU-accelerated infrastructure.","Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset.","Research earned a Best Paper Award at SCI 2026."],deepDive:"Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure. Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset in low-data settings; work earned a Best Paper Award."},{id:"emotion-aware-rag",title:"Emotion-Aware Multimodal RAG for Mental Health Support",category:"Generative AI",period:"Jan 2026 - May 2026",role:"Team Member (Size: 4)",icon:In,highlightBadge:"ICCIS 2026 Paper",accuracy:"Multimodal",summary:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.",tech:["PyTorch","BLIP","Whisper","SpeechBrain","TTS"],features:["Emotion-aware multimodal Retrieval-Augmented Generation framework.","Integrates BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.","Processes image, text, and voice input to retrieve emotionally aligned responses.","Accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed)."],deepDive:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses; accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed)."},{id:"blockchain-access",title:"Blockchain-Based Tokenised Access Control System",category:"Blockchain",period:"Jan 2026 - May 2026",role:"Team Lead (Size: 4)",icon:Jl,highlightBadge:"Decentralised Auth",accuracy:"Immutable Log",summary:"Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask.",tech:["Solidity","Ethereum","Hardhat","Ethers.js","MetaMask"],features:["Decentralised corporate access-control system on Solidity/Ethereum.","Implemented role-based token authorisation.","Enabled token expiry and secure transfer mechanisms.","Provided an immutable blockchain audit log for compliance and security."],deepDive:"Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask. Implemented role-based token authorisation, token expiry/transfer, and an immutable blockchain audit log."},{id:"5g-network-slicing",title:"5G Network Slice Orchestration with Dynamic Resource Mgmt",category:"Systems & Networks",period:"Jan 2026 - May 2026",role:"Team Lead (Size: 4)",icon:Jl,highlightBadge:"Network Simulation",accuracy:"Dynamic Allocation",summary:"Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes.",tech:["Python","Flask","React.js","Scapy"],features:["5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes.","Dynamic resource allocation based on real-time demands.","Real-time traffic monitoring and visualization.","Built using Python, Flask, React.js, and Scapy."],deepDive:"Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes. Built dynamic resource allocation and real-time traffic monitoring using Python, Flask, React.js, and Scapy."}],p=t==="All"?c:c.filter(h=>h.category===t);return o.jsxs("section",{id:"projects",className:"section-padding projects-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Portfolio & Systems"}),o.jsx("h2",{children:"Featured AI Projects"}),o.jsx("p",{children:"End-to-end machine learning pipelines, clinical diagnostic tools, and high-performance algorithms."})]}),o.jsxs("div",{className:"segmented-wrapper",style:{position:"relative"},children:[o.jsx("div",{className:"mobile-fixed-bubble",style:{width:`${i.width}px`}}),o.jsx("div",{className:"segmented-control-container",ref:m,children:o.jsxs("div",{className:"segmented-control",style:{position:"relative"},children:[o.jsx("div",{className:"desktop-slider-bubble",style:{position:"absolute",top:"4px",height:"calc(100% - 8px)",left:`${i.left}px`,width:`${i.width}px`,opacity:i.opacity,transition:"all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",borderRadius:"9999px",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)",backdropFilter:"blur(30px) saturate(250%)",WebkitBackdropFilter:"blur(30px) saturate(250%)",border:"1px solid rgba(255, 255, 255, 0.6)",boxShadow:"inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2)",zIndex:1}}),f.map((h,k)=>o.jsx("button",{ref:N=>g.current[k]=N,onClick:N=>{if(n(h),window.innerWidth<=768){const j=m.current;if(j){const E=j.offsetWidth/2,I=N.currentTarget.offsetLeft+N.currentTarget.offsetWidth/2;j.scrollTo({left:I-E,behavior:"smooth"})}}},className:`segment-btn ${t===h?"active":""} ${k>=T.length?"mobile-only-tab":""}`,style:{position:"relative",zIndex:t===h?2:0,transition:"color 0.8s ease"},children:h},`${h}-${k}`))]})})]}),o.jsx("div",{className:"projects-apple-grid",children:p.map(h=>o.jsxs("div",{className:"project-apple-card glass-card",children:[o.jsxs("div",{className:"card-top-row",children:[o.jsx("span",{className:"badge badge-ai",children:h.category}),o.jsx("span",{className:"metric-tag code-font",children:h.accuracy})]}),o.jsx("h3",{className:"project-apple-title",children:h.title}),o.jsx("p",{className:"project-apple-summary",children:h.summary}),o.jsx("div",{className:"project-apple-tech",children:h.tech.map((k,N)=>o.jsx("span",{className:"tech-pill",children:k},N))}),o.jsxs("div",{className:"project-apple-footer",children:[o.jsx("span",{className:"role-text",children:h.role}),o.jsxs("button",{onClick:k=>{const N=k.currentTarget.getBoundingClientRect(),j=N.left+N.width/2-window.innerWidth/2,E=N.top-window.innerHeight/2;v({x:j,y:E}),l(h)},className:"btn btn-secondary btn-sm pill-action",children:[o.jsx("span",{children:"Details"}),o.jsx(rt,{size:14})]})]})]},h.id))})]}),r&&o.jsx("div",{className:`modal-backdrop ${s?"closing":""}`,onClick:S,children:o.jsxs("div",{className:`modal-content glass-card ${s?"closing":""}`,onClick:h=>h.stopPropagation(),style:{transformOrigin:`calc(50% + ${d.x}px) calc(50% + ${d.y}px)`},children:[o.jsx("button",{className:"modal-close-btn",onClick:S,children:o.jsx(Uo,{size:18})}),o.jsxs("div",{className:"modal-header",children:[o.jsx("span",{className:"badge badge-cyan",children:r.category}),o.jsx("h3",{className:"modal-title mt-2",children:r.title}),o.jsxs("p",{className:"modal-authors",children:[r.role," • ",r.period]})]}),o.jsxs("div",{className:"modal-body",children:[o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"System Architecture Overview"}),o.jsx("p",{className:"abstract-text",children:r.deepDive})]}),o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"Key Capabilities"}),o.jsx("ul",{className:"modal-bullet-list",children:r.features.map((h,k)=>o.jsxs("li",{children:[o.jsx(ep,{size:14,className:"text-blue flex-shrink-0"}),o.jsx("span",{children:h})]},k))})]}),o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"Tech Stack"}),o.jsx("div",{className:"project-apple-tech",children:r.tech.map((h,k)=>o.jsx("span",{className:"tech-pill",children:h},k))})]})]}),o.jsx("div",{className:"modal-footer",children:o.jsx("button",{onClick:S,className:"btn btn-primary w-full",children:o.jsx("span",{children:"Close"})})})]})}),o.jsx("style",{children:`
        .segmented-control-container {
          display: flex;
          justify-content: center;
          margin-bottom: 3.5rem;
        }

        .segmented-control {
          display: inline-flex;
          background: rgba(0, 0, 0, 0.05);
          padding: 4px;
          border-radius: 9999px;
          border: 1px solid var(--border-glass);
          gap: 2px;
          flex-wrap: wrap;
        }

        .segment-btn {
          padding: 0.5rem 1.15rem;
          border-radius: 9999px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-apple);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover { color: var(--text-main); }

          &.active {
            color: #1d1d1f;
            font-weight: 600;
          }
        }

        .projects-apple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.75rem;
        }

        .project-apple-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .metric-tag {
          font-size: 0.78rem;
          color: var(--accent-apple-blue);
          font-weight: 600;
        }

        .project-apple-title {
          font-size: 1.35rem;
          line-height: 1.3;
          margin-bottom: 0.65rem;
          color: var(--text-main);
        }

        .project-apple-summary {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .project-apple-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.5rem;
        }

        .project-apple-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.25rem;
        }

        .role-text {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .pill-action {
          padding: 0.4rem 0.9rem;
          font-size: 0.8rem;
        }

        .modal-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted); }
        }

        .mobile-fixed-bubble {
          display: none;
        }

        @media (min-width: 769px) {
          .mobile-only-tab {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .segmented-control-container {
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            /* Allow scrolling edge-to-edge on iPhone */
            margin-left: -5%;
            margin-right: -5%;
            /* Add enough padding so first and last items can reach the center */
            padding-left: calc(50vw - 40px);
            padding-right: calc(50vw - 40px);
            padding-bottom: 1rem;
            scroll-snap-type: x mandatory;
            position: relative;
            z-index: 2; /* Forces text to render completely ON TOP of the fixed bubble so it isn't blurred! */
          }
          
          .segmented-control-container::-webkit-scrollbar {
            display: none; /* Hide scrollbar for clean iOS look */
          }

          .segmented-control {
            flex-wrap: nowrap; /* Prevents wrapping which breaks the slider bubble */
            white-space: nowrap;
            background: transparent !important; /* Removes track background so bubble is visible */
            border: none !important;
          }

          .segment-btn {
            scroll-snap-align: center;
          }

          .desktop-slider-bubble {
            display: none; /* Hide desktop sliding bubble */
          }

          .mobile-fixed-bubble {
            display: block;
            position: absolute;
            top: 4px;
            height: calc(100% - 24px); /* Account for padding-bottom */
            left: 50%;
            transform: translateX(-50%);
            /* Copy the beautiful glass style */
            background: linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%);
            backdrop-filter: blur(30px) saturate(250%);
            -webkit-backdrop-filter: blur(30px) saturate(250%);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2);
            border-radius: 9999px;
            pointer-events: none;
            transition: width 0.3s ease;
            z-index: 1; /* Sits UNDER the text container (z-index 2) */
          }
        }
      `})]})},fp=()=>{const[e,t]=R.useState("All"),[n,r]=R.useState({left:0,width:0,opacity:0}),l=je.useRef([]),i=["All","ML & Deep Learning","Languages & Core CS","Data & Analytics","Systems & Infrastructure"];je.useEffect(()=>{const s=i.indexOf(e),u=l.current[s];u&&r({left:u.offsetLeft,width:u.offsetWidth,opacity:1})},[e,i]);const a=[{category:"ML & Deep Learning",icon:In,color:"#5e5ce6",skills:["PyTorch","Scikit-learn","Few-Shot Learning","Transformer Architectures","Deep Learning"]},{category:"Languages & Core CS",icon:pc,color:"#ff9500",skills:["Python","C","C++","SQL","Data Structures & Algorithms","OS, DBMS & OOP"]},{category:"Data & Analytics",icon:tp,color:"#30b0c7",skills:["Pandas","NumPy","Exploratory Data Analysis","Data Preprocessing","Feature Engineering"]},{category:"Systems & Infrastructure",icon:ap,color:"#34c759",skills:["Linux","Git","Cloud Computing Concepts","FastAPI","React"]}];return o.jsxs("section",{id:"skills",className:"section-padding skills-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Technical Competencies"}),o.jsx("h2",{children:"Skills & Technologies"}),o.jsx("p",{children:"Frameworks, languages, and infrastructure tools utilized in ML engineering and clinical systems."})]}),o.jsx("div",{className:"segmented-control-container",style:{display:"flex",justifyContent:"center",marginBottom:"3rem"},children:o.jsxs("div",{className:"segmented-control",style:{display:"inline-flex",background:"rgba(0,0,0,0.05)",padding:"4px",borderRadius:"9999px",flexWrap:"wrap",justifyContent:"center",gap:"2px",position:"relative"},children:[o.jsx("div",{style:{position:"absolute",top:"4px",height:"calc(100% - 8px)",left:`${n.left}px`,width:`${n.width}px`,opacity:n.opacity,transition:"all 1.4s cubic-bezier(0.22, 1, 0.36, 1)",borderRadius:"9999px",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)",backdropFilter:"blur(30px) saturate(250%)",WebkitBackdropFilter:"blur(30px) saturate(250%)",border:"1px solid rgba(255, 255, 255, 0.6)",boxShadow:"inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2)",zIndex:1}}),i.map((s,u)=>o.jsx("button",{ref:d=>l.current[u]=d,onClick:()=>t(s),style:{padding:"0.6rem 1.2rem",borderRadius:"9999px",border:"none",background:"transparent",color:e===s?"#1d1d1f":"#6e6e73",fontWeight:e===s?"600":"500",fontSize:"0.9rem",cursor:"pointer",transition:"all 0.8s ease",position:"relative",zIndex:e===s?2:0},children:s},s))]})}),o.jsx("div",{className:"skills-apple-grid",children:a.filter(s=>e==="All"||s.category===e).map(s=>{const u=s.icon;return o.jsxs("div",{className:"skill-apple-card glass-card",children:[o.jsxs("div",{className:"group-card-header",children:[o.jsx("div",{className:"icon-wrapper",style:{color:s.color,background:`${s.color}15`},children:o.jsx(u,{size:22})}),o.jsx("h3",{children:s.category})]}),o.jsx("div",{className:"premium-skills-container",children:s.skills.map(d=>o.jsxs("div",{className:"premium-skill-pill",children:[o.jsx("span",{className:"pill-dot",style:{background:s.color,boxShadow:`0 0 8px ${s.color}`}}),d]},d))})]},s.category)})})]}),o.jsx("style",{children:`
        .skills-apple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
        }

        .skill-apple-card {
          padding: 2.5rem;
          border-radius: 28px;
        }

        .group-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);

          h3 { font-size: 1.35rem; color: var(--text-main); font-weight: 600; letter-spacing: -0.02em; margin: 0; }
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
        }

        .premium-skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .premium-skill-pill {
          padding: 0.7rem 1.25rem;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-main);
          box-shadow: 0 4px 15px rgba(0,0,0,0.03), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          cursor: default;
        }

        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .premium-skill-pill:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255, 255, 255, 1);
        }

        @media (max-width: 900px) {
          .skills-apple-grid { grid-template-columns: 1fr; }
          .skill-apple-card { padding: 1.75rem; }
        }
      `})]})},pp=()=>{const e=[{type:"Education",title:"B.E. in Computer Science & Engineering",institution:"KLE Technological University, Hubballi",period:"Aug 2023 – Jun 2027",grade:"CGPA: 8.96 / 10",details:["Relevant Coursework: DSA, ML & Deep Learning, Generative AI, DBMS, Cloud Computing."]},{type:"Certification",title:"Mastering Data Structures & Algorithms using C and C++",institution:"Udemy (76 hours)",period:"2026",grade:"Certificate",details:["Comprehensive study of data structures and algorithms."]},{type:"Certification",title:"JNCIA-Junos (Junos Associate)",institution:"HPE Juniper Networking",period:"2025",grade:"Certificate",details:["Foundational networking and routing knowledge."]},{type:"Certification",title:"Jenkins & DevOps Mindset",institution:"Infosys Springboard",period:"2025",grade:"Certificate",details:["Completed courses: Jenkins Configuration for DevOps & Understanding DevOps Tools."]},{type:"Award",title:"Best Paper Award",institution:"SCI 2026 Conference",period:"2026",grade:"Winner",details:["Awarded for few-shot rare syndrome recognition research."]},{type:"Hackathon",title:'Participant — "Innovate with GolStats"',institution:"University Grants Commission (MoE)",period:"2025",grade:"Participant",details:["Participated in the national hackathon."]},{type:"Outreach",title:"Volunteer Organiser",institution:"DTSI Community Outreach Initiative, Dharwad",period:"2022",grade:"Organizer",details:["Engaged with 50+ residents for community tech outreach."]}],t=[{name:"English",fluency:"Proficient"},{name:"Hindi",fluency:"Fluent"},{name:"Kannada",fluency:"Fluent"},{name:"Urdu",fluency:"Native"}];return o.jsxs("section",{id:"education",className:"section-padding education-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Academic & Experience"}),o.jsx("h2",{children:"Education & Leadership"}),o.jsx("p",{children:"Academic standing at KLE Tech, research accomplishments, and community outreach."})]}),o.jsxs("div",{className:"edu-apple-grid",children:[o.jsx("div",{className:"timeline-apple-column",children:o.jsx("div",{className:"timeline-apple-list",children:e.map((n,r)=>o.jsxs("div",{className:"timeline-apple-item glass-card",children:[o.jsxs("div",{className:"item-top-bar",children:[o.jsx("span",{className:"badge badge-outline",children:n.type}),o.jsx("span",{className:"item-date code-font",children:n.period})]}),o.jsx("h4",{className:"item-title",children:n.title}),o.jsx("p",{className:"item-inst",children:n.institution}),o.jsx("div",{className:"item-grade",children:n.grade}),o.jsx("ul",{className:"item-bullets",children:n.details.map((l,i)=>o.jsx("li",{children:o.jsx("span",{children:l})},i))})]},r))})}),o.jsxs("div",{className:"edu-side-column",children:[o.jsxs("div",{className:"glass-card kle-apple-card",children:[o.jsxs("div",{className:"kle-header",children:[o.jsx("span",{className:"badge badge-cyan",children:"Degree Program"}),o.jsxs("span",{className:"kle-loc code-font",children:[o.jsx(Bo,{size:13})," Hubballi, IN"]})]}),o.jsx("h3",{className:"kle-degree",children:"B.E. Computer Science"}),o.jsx("p",{className:"kle-inst-name",children:"KLE Technological University"}),o.jsxs("div",{className:"cgpa-box mt-3",children:[o.jsx("span",{className:"cgpa-val",children:"8.96"}),o.jsx("span",{className:"cgpa-lbl",children:"CGPA out of 10.0"})]}),o.jsxs("div",{className:"mt-3",children:[o.jsx("span",{className:"cw-lbl",children:"Relevant Modules:"}),o.jsxs("div",{className:"project-apple-tech mt-2",children:[o.jsx("span",{className:"tech-pill",children:"DSA"}),o.jsx("span",{className:"tech-pill",children:"Machine Learning"}),o.jsx("span",{className:"tech-pill",children:"Deep Learning"}),o.jsx("span",{className:"tech-pill",children:"Generative AI"}),o.jsx("span",{className:"tech-pill",children:"DBMS"}),o.jsx("span",{className:"tech-pill",children:"Cloud"})]})]})]}),o.jsxs("div",{className:"glass-card lang-apple-card",children:[o.jsxs("div",{className:"lang-header",children:[o.jsx(rp,{size:18,className:"text-muted"}),o.jsx("h4",{children:"Languages"})]}),o.jsx("div",{className:"lang-apple-grid",children:t.map(n=>o.jsxs("div",{className:"lang-apple-item",children:[o.jsx("span",{className:"l-name",children:n.name}),o.jsx("span",{className:"l-fluency code-font",children:n.fluency})]},n.name))})]})]})]})]}),o.jsx("style",{children:`
        .edu-apple-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
        }

        .timeline-apple-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .timeline-apple-item {
          padding: 1.75rem;
        }

        .item-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .item-date { font-size: 0.78rem; color: var(--text-muted); }

        .item-title { font-size: 1.2rem; line-height: 1.3; margin-bottom: 0.3rem; color: var(--text-main); }

        .item-inst { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; }

        .item-grade { font-size: 0.82rem; font-weight: 600; color: var(--accent-apple-blue); margin-bottom: 0.85rem; font-family: var(--font-code); }

        .item-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          li { font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; }
        }

        /* Side Column */
        .edu-side-column {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .kle-apple-card, .lang-apple-card {
          padding: 2rem;
        }

        .kle-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
        .kle-loc { font-size: 0.78rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.2rem; }

        .kle-degree { font-size: 1.4rem; margin-bottom: 0.25rem; color: var(--text-main); }
        .kle-inst-name { font-size: 0.9rem; color: var(--text-muted); }

        .cgpa-box {
          background: rgba(52, 199, 89, 0.08);
          border: 1px solid rgba(52, 199, 89, 0.2);
          padding: 1rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cgpa-val { font-size: 2rem; font-weight: 600; color: #16a34a; }
        .cgpa-lbl { font-size: 0.78rem; color: var(--text-muted); }

        .cw-lbl { font-size: 0.8rem; color: var(--text-muted); }

        .lang-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem; h4 { font-size: 1.1rem; color: var(--text-main); } }

        .lang-apple-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .lang-apple-item {
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-glass);
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
        }

        .l-name { font-size: 0.88rem; font-weight: 500; color: var(--text-main); }
        .l-fluency { font-size: 0.72rem; color: var(--text-muted); }

        @media (max-width: 900px) {
          .edu-apple-grid { grid-template-columns: 1fr; }
        }
      `})]})},mp=({size:e=18})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),hp=()=>{const[e,t]=R.useState({name:"",email:"",subject:"",message:""}),[n,r]=R.useState(!1),[l,i]=R.useState(!1),[a,s]=R.useState(null),u=g=>{const{name:m,value:y}=g.target;t(w=>({...w,[m]:y}))},d=g=>{g.preventDefault(),!(!e.email||!e.message)&&(r(!0),setTimeout(()=>{r(!1),i(!0),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>i(!1),5e3)},1e3))},v=(g,m)=>{navigator.clipboard.writeText(g),s(m),setTimeout(()=>s(null),2500)};return o.jsxs("section",{id:"contact",className:"section-padding contact-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Get in Touch"}),o.jsx("h2",{children:"Connect & Collaborate"}),o.jsx("p",{children:"Open for AI Engineering positions, clinical research initiatives, or technical inquiries."})]}),o.jsxs("div",{className:"contact-apple-grid",children:[o.jsxs("div",{className:"contact-apple-info",children:[o.jsxs("div",{className:"glass-card contact-card-apple",children:[o.jsx("h3",{children:"Contact Details"}),o.jsx("p",{className:"card-sub-apple",children:"Reach out directly via email or phone."}),o.jsxs("div",{className:"contact-row-apple",children:[o.jsx(wl,{size:18,className:"text-muted"}),o.jsxs("div",{className:"c-text",children:[o.jsx("span",{className:"c-lbl",children:"Email"}),o.jsx("span",{className:"c-val code-font",children:"mdwali0912@gmail.com"})]}),o.jsx("button",{onClick:()=>v("mdwali0912@gmail.com","email"),className:"btn-copy-apple",title:"Copy Email",children:a==="email"?o.jsx(Xl,{size:15,className:"text-emerald"}):o.jsx(qa,{size:15})})]}),o.jsxs("div",{className:"contact-row-apple",children:[o.jsx(yc,{size:18,className:"text-muted"}),o.jsxs("div",{className:"c-text",children:[o.jsx("span",{className:"c-lbl",children:"Phone"}),o.jsx("span",{className:"c-val code-font",children:"+91 9482892540"})]}),o.jsx("button",{onClick:()=>v("+91 9482892540","phone"),className:"btn-copy-apple",title:"Copy Phone",children:a==="phone"?o.jsx(Xl,{size:15,className:"text-emerald"}):o.jsx(qa,{size:15})})]}),o.jsxs("div",{className:"contact-row-apple",children:[o.jsx(Bo,{size:18,className:"text-muted"}),o.jsxs("div",{className:"c-text",children:[o.jsx("span",{className:"c-lbl",children:"Location"}),o.jsx("span",{className:"c-val",children:"Hubballi, Karnataka, India"})]})]})]}),o.jsxs("div",{className:"glass-card social-card-apple",children:[o.jsx("h4",{children:"Profiles"}),o.jsxs("div",{className:"social-apple-row",children:[o.jsxs("a",{href:"https://github.com/mohammedwasifali",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(hc,{size:18}),o.jsx("span",{children:"GitHub"}),o.jsx(rt,{size:14})]}),o.jsxs("a",{href:"https://www.linkedin.com/in/mohammed-wasif-ali-27484b2a2/",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(vc,{size:18}),o.jsx("span",{children:"LinkedIn"}),o.jsx(rt,{size:14})]}),o.jsxs("a",{href:"https://leetcode.com/u/3IggeK1dwH/",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(pc,{size:18}),o.jsx("span",{children:"LeetCode"}),o.jsx(rt,{size:14})]}),o.jsxs("a",{href:"https://www.instagram.com/mohammed_wasif_ali/",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(lp,{size:18}),o.jsx("span",{children:"Instagram"}),o.jsx(rt,{size:14})]}),o.jsxs("a",{href:"https://www.threads.com/@mohammed_wasif_ali",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(ip,{size:18}),o.jsx("span",{children:"Threads"}),o.jsx(rt,{size:14})]}),o.jsxs("a",{href:"https://x.com/wasif51606",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(mp,{size:18}),o.jsx("span",{children:"X"}),o.jsx(rt,{size:14})]})]})]})]}),o.jsx("div",{className:"contact-apple-form-col",children:o.jsxs("div",{className:"glass-card form-card-apple",children:[o.jsx("h3",{children:"Send Message"}),l?o.jsxs("div",{className:"form-success-apple",children:[o.jsx(Xl,{size:40,className:"text-emerald"}),o.jsx("h4",{children:"Message Delivered"}),o.jsx("p",{children:"Mohammed Wasif Ali will respond to your email shortly."})]}):o.jsxs("form",{onSubmit:d,className:"contact-apple-form mt-3",children:[o.jsxs("div",{className:"form-row-2",children:[o.jsxs("div",{className:"input-group-apple",children:[o.jsx("label",{htmlFor:"name",children:"Name"}),o.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:u,placeholder:"Your Name",required:!0})]}),o.jsxs("div",{className:"input-group-apple",children:[o.jsx("label",{htmlFor:"email",children:"Email"}),o.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:u,placeholder:"you@example.com",required:!0})]})]}),o.jsxs("div",{className:"input-group-apple",children:[o.jsx("label",{htmlFor:"subject",children:"Subject"}),o.jsx("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:u,placeholder:"e.g. AI Engineering Collaboration"})]}),o.jsxs("div",{className:"input-group-apple",children:[o.jsx("label",{htmlFor:"message",children:"Message"}),o.jsx("textarea",{id:"message",name:"message",rows:"4",value:e.message,onChange:u,placeholder:"Share your message or opportunity details...",required:!0})]}),o.jsx("button",{type:"submit",className:"btn btn-primary w-full mt-2",disabled:n,children:n?"Sending...":"Send Message"})]})]})})]})]}),o.jsx("style",{children:`
        .contact-apple-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }

        .contact-apple-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-card-apple, .social-card-apple, .form-card-apple {
          padding: 2.25rem;
          h3, h4 { color: var(--text-main); }
        }

        .card-sub-apple { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem; }

        .contact-row-apple {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 14px;
          margin-bottom: 0.85rem;
        }

        .c-text { display: flex; flex-direction: column; flex-grow: 1; }
        .c-lbl { font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase; }
        .c-val { font-size: 0.9rem; font-weight: 500; color: var(--text-main); }

        .btn-copy-apple {
          background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 0.4rem;
          &:hover { color: var(--text-main); }
        }

        .social-card-apple h4 { font-size: 1.1rem; margin-bottom: 1rem; }

        .social-apple-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .social-apple-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 14px;
          color: var(--text-main);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background 0.2s ease;

          &:hover { background: rgba(0, 0, 0, 0.06); }
        }

        /* Form */
        .contact-apple-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .input-group-apple {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;

          label { font-size: 0.82rem; color: var(--text-muted); }

          input, textarea {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid var(--border-glass);
            border-radius: 12px;
            padding: 0.75rem 1rem;
            color: var(--text-main);
            font-family: var(--font-apple);
            font-size: 0.92rem;
            outline: none;
            transition: border-color 0.2s ease;

            &:focus {
              border-color: var(--accent-apple-blue);
              box-shadow: 0 0 10px rgba(0, 113, 227, 0.15);
            }
          }
        }

        .form-success-apple {
          text-align: center;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          h4 { color: var(--text-main); }
          p { color: var(--text-muted); }
        }

        @media (max-width: 900px) {
          .contact-apple-grid { grid-template-columns: 1fr; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `})]})},gp=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs("footer",{className:"footer-container",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"footer-top",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx("a",{href:"#about",className:"apple-logo"}),o.jsx("p",{className:"footer-tagline",children:"Engineering intelligent deep learning models, metric learning systems, and clinical AI frameworks."})]}),o.jsxs("div",{className:"footer-links-group",children:[o.jsxs("div",{className:"footer-col",children:[o.jsx("span",{className:"col-title",children:"Navigation"}),o.jsx("a",{href:"#about",children:"Overview"}),o.jsx("a",{href:"#research",children:"Research"}),o.jsx("a",{href:"#projects",children:"Projects"}),o.jsx("a",{href:"#skills",children:"Skills"}),o.jsx("a",{href:"#education",children:"Education"}),o.jsx("a",{href:"#contact",children:"Contact"})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("span",{className:"col-title",children:"Featured Works"}),o.jsx("a",{href:"#research",children:"SCI 2026 Best Paper"}),o.jsx("a",{href:"#research",children:"CML 2026 FGDD"}),o.jsx("a",{href:"#projects",children:"CEVI Clinical AI"}),o.jsx("a",{href:"#projects",children:"UAV Spatio-Temporal"})]})]})]}),o.jsxs("div",{className:"footer-bottom",children:[o.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," Mohammed Wasif Ali. All rights reserved."]}),o.jsxs("div",{className:"footer-right-actions",children:[o.jsxs("div",{className:"social-icons",children:[o.jsx("a",{href:"https://github.com/mohammedwasifali",target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"GitHub",children:o.jsx(hc,{size:16})}),o.jsx("a",{href:"https://www.linkedin.com/in/mohammed-wasif-ali-27484b2a2/",target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"LinkedIn",children:o.jsx(vc,{size:16})}),o.jsx("a",{href:"mailto:mdwali0912@gmail.com",className:"social-btn",title:"Email",children:o.jsx(wl,{size:16})})]}),o.jsx("button",{onClick:e,className:"btn-back-to-top",title:"Scroll to Top",children:o.jsx(Zf,{size:16})})]})]})]}),o.jsx("style",{children:`
        .footer-container {
          background: #ffffff;
          border-top: 1px solid var(--border-glass);
          padding: 4rem 0 2rem 0;
          position: relative;
          z-index: 10;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: var(--text-muted);
          max-width: 380px;
          line-height: 1.6;
        }

        .footer-links-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.88rem;
            transition: color 0.2s ease;

            &:hover {
              color: var(--accent-apple-blue);
            }
          }
        }

        .col-title {
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-glass);
        }

        .copyright-text {
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .footer-right-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .social-icons {
          display: flex;
          gap: 0.5rem;
        }

        .social-btn {
          width: 34px; height: 34px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;

          &:hover {
            color: var(--text-main);
            background: rgba(0, 0, 0, 0.08);
          }
        }

        .btn-back-to-top {
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background: #1d1d1f;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;

          &:hover {
            background: #333336;
            transform: translateY(-2px);
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `})]})},vp=({onClose:e})=>{const[t,n]=je.useState(!1),r=()=>{n(!0),setTimeout(()=>{e()},650)},l=()=>{window.print()};return o.jsxs("div",{className:`modal-backdrop ${t?"closing":""}`,onClick:r,children:[o.jsxs("div",{className:`modal-content resume-modal-card ${t?"closing":""}`,onClick:i=>i.stopPropagation(),children:[o.jsxs("div",{className:"resume-modal-top-bar no-print",children:[o.jsxs("div",{className:"bar-title",children:[o.jsx(gc,{size:18,className:"icon-cyan"}),o.jsx("span",{children:"Mohammed Wasif Ali - Curriculum Vitae"})]}),o.jsxs("div",{className:"bar-actions",children:[o.jsxs("button",{onClick:l,className:"resume-print-btn",children:[o.jsx(op,{size:14}),o.jsx("span",{children:"Print / Save PDF"})]}),o.jsx("button",{onClick:r,className:"modal-close-btn-static",children:o.jsx(Uo,{size:20})})]})]}),o.jsxs("div",{className:"printable-resume-body",children:[o.jsxs("div",{className:"resume-header",children:[o.jsx("h1",{className:"resume-name",children:"MOHAMMED WASIF ALI"}),o.jsxs("div",{className:"resume-contact-line code-font",children:[o.jsxs("span",{children:[o.jsx(Bo,{size:12})," Karnataka, India"]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:[o.jsx(wl,{size:12})," mdwali0912@gmail.com"]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:[o.jsx(yc,{size:12})," +91 9482892540"]}),o.jsx("span",{children:"•"}),o.jsx("span",{children:o.jsx("a",{href:"https://github.com/mohammedwasifali",style:{color:"inherit",textDecoration:"none"},children:"GitHub"})}),o.jsx("span",{children:"•"}),o.jsx("span",{children:o.jsx("a",{href:"https://www.linkedin.com/in/mohammed-wasif-ali-27484b2a2/",style:{color:"inherit",textDecoration:"none"},children:"LinkedIn"})})]}),o.jsx("p",{className:"resume-summary-text",children:"Final-year CS student with hands-on experience in full-stack development, machine learning, and applied AI research. Built end-to-end systems using Python, PyTorch, FastAPI, React, and SQL across healthcare and social-impact projects, backed by peer-reviewed conference papers and a Best Paper Award."})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"EDUCATION"}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"B.E. in Computer Science & Engineering"})," — KLE Technological University, Hubballi",o.jsx("span",{className:"resume-date",children:"Aug 2023 – Jun 2027"})]}),o.jsxs("div",{className:"resume-item-sub",children:[o.jsx("strong",{children:"CGPA: 8.96 / 10"})," | Relevant Coursework: DSA, ML & Deep Learning, Generative AI, DBMS, Cloud Computing"]})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"TECHNICAL SKILLS"}),o.jsxs("div",{className:"resume-skills-block",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Programming:"})," Python (3 yrs), C (3 yrs), C++ (2 yrs), SQL (2 yrs)"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Machine Learning & AI:"})," PyTorch, Scikit-learn, Few-Shot Learning, Transformer Architectures, Deep Learning"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Data & Analytics:"})," Pandas, NumPy, Exploratory Data Analysis, Data Preprocessing & Feature Engineering"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Core CS:"})," Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Systems & Cloud:"})," Linux, Cloud Computing Concepts, Git"]})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"PROJECTS"}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"Multimodal Framework for Venous Disease Assessment (CEVI)"}),o.jsx("span",{className:"resume-date",children:"Jan 2026 – Present"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Member"}),o.jsx("p",{className:"resume-item-body",children:"Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection to support clinical decision-making. Achieved 77.17% CEAP classification accuracy and built a longitudinal patient data pipeline using PyTorch, React, and FastAPI."})]}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images"}),o.jsx("span",{className:"resume-date",children:"Sept 2025 – Dec 2025"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Lead"}),o.jsx("p",{className:"resume-item-body",children:"Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure. Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset in low-data settings; work earned a Best Paper Award."})]}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"Emotion-Aware Multimodal RAG for Mental Health Support"}),o.jsx("span",{className:"resume-date",children:"Jan 2026 – May 2026"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Member"}),o.jsx("p",{className:"resume-item-body",children:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses; accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed)."})]}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"Blockchain-Based Tokenised Access Control System"}),o.jsx("span",{className:"resume-date",children:"Jan 2026 – May 2026"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Lead"}),o.jsx("p",{className:"resume-item-body",children:"Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask. Implemented role-based token authorisation, token expiry/transfer, and an immutable blockchain audit log."})]}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"5G Network Slice Orchestration with Dynamic Resource Management"}),o.jsx("span",{className:"resume-date",children:"Jan 2026 – May 2026"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Lead"}),o.jsx("p",{className:"resume-item-body",children:"Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes. Built dynamic resource allocation and real-time traffic monitoring using Python, Flask, React.js, and Scapy."})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"RESEARCH & PUBLICATIONS"}),o.jsxs("ul",{className:"resume-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Ali, M.W. et al."}),' "Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset" — ',o.jsx("em",{children:"CML 2026 Conference"}),". Designed the few-shot framework and led experiments."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Ali, M.W. et al."}),' "Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images" — ',o.jsx("em",{children:"SCI 2026 Conference"}),". ",o.jsx("strong",{children:"Best Paper Award"}),". Led model development and ArcFace pipeline."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Ali, M.W. et al."}),' "Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support" — ',o.jsx("em",{children:"Accepted, ICCIS 2026 (Springer LNNS, Scopus-indexed)"}),"."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Ali, M.W. et al."}),' "Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning" — ',o.jsx("em",{children:"Manuscript in preparation, 2026"}),"."]})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"CERTIFICATIONS & ADDITIONAL COURSES"}),o.jsxs("ul",{className:"resume-list",children:[o.jsx("li",{children:"Mastering Data Structures & Algorithms using C and C++ — Udemy, 76 hours, 2026"}),o.jsx("li",{children:"JNCIA-Junos (Junos Associate) — HPE Juniper Networking, 2025"}),o.jsx("li",{children:"Jenkins for DevOps: Jenkins Configuration for DevOps — Infosys Springboard, 2025"}),o.jsx("li",{children:"DevOps Mindset: Understanding DevOps Tools — Infosys Springboard, 2025"}),o.jsx("li",{children:"Programming in C, C++, Java, and Python — KR Computers, Hubballi, India, 2023"})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"ACHIEVEMENTS & ACTIVITIES"}),o.jsxs("ul",{className:"resume-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Best Paper Award"})," — SCI 2026 Conference, for few-shot rare syndrome recognition research."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Participant"}),' — "Innovate with GolStats" Hackathon, University Grants Commission (MoE), 2025.']}),o.jsxs("li",{children:[o.jsx("strong",{children:"Volunteer Organiser"})," — DTSI Community Outreach Initiative, Dharwad (50+ residents engaged), 2022."]})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"LANGUAGES"}),o.jsx("p",{className:"resume-lang-text",children:"English (proficient) | Hindi (fluent) | Kannada (fluent) | Urdu (native)"})]})]})]}),o.jsx("style",{children:`
        .resume-modal-card {
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          background: #000000;
          color: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .resume-modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .bar-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1rem;
          color: #ffffff;
        }

        .bar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .resume-print-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: 500;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .resume-print-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .modal-close-btn-static {
          background: none;
          border: none;
          color: #aaaaaa;
          cursor: pointer;
          transition: color 0.2s;
        }
        .modal-close-btn-static:hover { 
          color: #ffffff; 
        }

        .printable-resume-body {
          color: #ffffff;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .resume-header {
          text-align: center;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
        }

        .resume-name {
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          margin-bottom: 0.3rem;
          color: #ffffff;
        }

        .resume-contact-line {
          font-size: 0.8rem;
          color: #00d2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;

          span { display: inline-flex; align-items: center; gap: 0.2rem; }
        }

        .resume-summary-text {
          font-style: italic;
          font-size: 0.88rem;
          color: #dddddd;
          max-width: 680px;
          margin: 0 auto;
        }

        .resume-section {
          margin-bottom: 1.25rem;
        }

        .resume-sec-title {
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #00d2ff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 0.25rem;
          margin-bottom: 0.75rem;
        }

        .resume-item {
          margin-bottom: 0.85rem;
        }

        .resume-item-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.92rem;
          color: #ffffff;
        }

        .resume-date {
          font-family: var(--font-code);
          font-size: 0.78rem;
          color: #bbbbbb;
        }

        .resume-item-sub {
          font-size: 0.82rem;
          color: #bbbbbb;
          margin-bottom: 0.25rem;
        }

        .resume-item-body {
          font-size: 0.88rem;
          color: #dddddd;
        }

        .resume-list {
          padding-left: 1.25rem;
          li { margin-bottom: 0.4rem; color: #dddddd; }
        }

        .resume-skills-block {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.88rem;
          color: #dddddd;
          strong { color: #ffffff; }
        }

        .resume-lang-text {
          font-size: 0.88rem;
          color: #dddddd;
        }

        @media print {
          /* Force display:none on all main app elements so they take up 0 space */
          main, footer, canvas, .ambient-background, .grid-overlay {
            display: none !important;
          }

          /* Reset structural elements so they don't force page breaks */
          html, body, #root, .app-main-wrapper {
            height: auto !important;
            min-height: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
          }
          
          /* Only show the modal content cleanly */
          .resume-modal-card {
            position: static !important;
            max-width: none !important;
            max-height: none !important;
            overflow: visible !important;
            box-shadow: none !important;
            border: none !important;
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Hide UI buttons and backdrop during print */
          .no-print, .no-print * { 
            display: none !important; 
          }
          .modal-backdrop { 
            position: static !important; 
            background: none !important; 
            backdrop-filter: none !important; 
            padding: 0 !important;
          }

          /* Force text to solid black/dark grays for clean printing */
          .printable-resume-body, .printable-resume-body * { 
            color: #000000 !important; 
          }
          .resume-sec-title { 
            color: #000000 !important; 
            border-bottom: 1px solid #000000 !important; 
          }
          .resume-contact-line { 
            color: #333333 !important; 
          }
          .resume-item-body, .resume-list li { 
            color: #222222 !important; 
          }
        }
      `})]})},yp=({onOpenResume:e,isHidden:t})=>{const[n,r]=R.useState(!1);R.useEffect(()=>{let i=window.scrollY,a=!1;const s=()=>{a||(window.requestAnimationFrame(()=>{const d=window.scrollY;d>i&&d>150?r(!0):r(!1),i=d,a=!1}),a=!0)},u=d=>{d.clientY<100&&r(!1)};return window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("mousemove",u,{passive:!0}),()=>{window.removeEventListener("scroll",s),window.removeEventListener("mousemove",u)}},[]);const l=t||n;return o.jsxs("div",{className:`sticky-nav-wrapper ${l?"whoosh-out":""}`,children:[o.jsxs("div",{className:"hero-nav-tabs animate-fade-in",style:{animationDelay:"0.3s"},children:[o.jsxs("a",{href:"#projects",className:"hero-nav-tab",children:[o.jsx(np,{size:16}),o.jsx("span",{children:"Projects"})]}),o.jsxs("a",{href:"#research",className:"hero-nav-tab",children:[o.jsx(qf,{size:16}),o.jsx("span",{children:"Research"})]}),o.jsxs("a",{href:"#skills",className:"hero-nav-tab",children:[o.jsx(In,{size:16}),o.jsx("span",{children:"Skills"})]}),o.jsxs("a",{href:"#education",className:"hero-nav-tab",children:[o.jsx(gc,{size:16}),o.jsx("span",{children:"Education"})]}),o.jsxs("a",{href:"#contact",className:"hero-nav-tab",children:[o.jsx(wl,{size:16}),o.jsx("span",{children:"Contact"})]}),o.jsxs("button",{onClick:e,className:"hero-nav-tab",children:[o.jsx(mc,{size:16}),o.jsx("span",{children:"CV"})]})]}),o.jsx("style",{children:`
        .sticky-nav-wrapper {
          position: sticky;
          top: 1.5rem;
          z-index: 1000;
          width: 100%;
          display: flex;
          justify-content: center;
          pointer-events: none;
          margin-bottom: 2rem;
          margin-top: -2rem; /* Pull it slightly up closer to the hero section */
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .whoosh-out {
          transform: translateY(-100px) scale(0.5) rotate(5deg);
          opacity: 0;
          pointer-events: none;
        }

        .hero-nav-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding: 0.5rem;
          pointer-events: auto;
        }

        .hero-nav-tab {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          /* Shiny 3D bubble background */
          background: radial-gradient(120% 120% at 50% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.15) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          /* Bubble edges */
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 9999px; /* Pill/Bubble shape */
          color: var(--text-main);
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          /* Glossy inner highlights and soft drop shadow */
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.05), 
            inset 0 4px 8px rgba(255, 255, 255, 1), 
            inset 0 -4px 8px rgba(255, 255, 255, 0.2);
        }

        .hero-nav-tab:hover {
          background: radial-gradient(120% 120% at 50% 0%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.25) 100%);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 15px 35px rgba(0,0,0,0.1), 
            inset 0 6px 10px rgba(255, 255, 255, 1), 
            inset 0 -4px 8px rgba(255, 255, 255, 0.4);
          color: var(--accent-apple-blue);
        }
        
        @media (max-width: 768px) {
          .sticky-nav-wrapper {
            top: 0.5rem;
            margin-top: -1rem;
          }
          .hero-nav-tabs {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
            padding: 0 1rem;
            width: 100%;
          }
          .hero-nav-tab {
            padding: 0.75rem 0.2rem;
            font-size: 0.75rem;
            flex-direction: column;
            gap: 0.4rem;
            justify-content: center;
            border-radius: 22px; /* iOS Squircle bubble */
          }
        }
      `})]})};function xp(){const[e,t]=R.useState(!1),[n,r]=R.useState(!1),l=e||n;return o.jsxs("div",{className:"app-main-wrapper",children:[o.jsx(Kf,{}),o.jsxs("div",{className:"mobile-animated-bg",children:[o.jsx("div",{className:"mobile-blob mobile-blob-1"}),o.jsx("div",{className:"mobile-blob mobile-blob-2"}),o.jsx("div",{className:"mobile-blob mobile-blob-3"}),o.jsx("div",{className:"mobile-blob mobile-blob-4"})]}),o.jsx("div",{className:"grid-overlay"}),o.jsxs("main",{children:[o.jsx(Yf,{onOpenResume:()=>t(!0)}),o.jsx(yp,{onOpenResume:()=>t(!0),isHidden:l}),o.jsx(cp,{onModalChange:r}),o.jsx(dp,{onModalChange:r}),o.jsx(fp,{}),o.jsx(pp,{}),o.jsx(hp,{})]}),o.jsx(gp,{}),e&&o.jsx(vp,{onClose:()=>t(!1)})]})}Zl.createRoot(document.getElementById("root")).render(o.jsx(je.StrictMode,{children:o.jsx(xp,{})}));
