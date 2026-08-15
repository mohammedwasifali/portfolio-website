(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},ll={},ns={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),kc=Symbol.for("react.portal"),Sc=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Ec=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),Tc=Symbol.for("react.memo"),Mc=Symbol.for("react.lazy"),Vo=Symbol.iterator;function Lc(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ls=Object.assign,is={};function sn(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function os(){}os.prototype=sn.prototype;function Wi(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}var Gi=Wi.prototype=new os;Gi.constructor=Wi;ls(Gi,sn.prototype);Gi.isPureReactComponent=!0;var $o=Array.isArray,as=Object.prototype.hasOwnProperty,Qi={current:null},ss={key:!0,ref:!0,__self:!0,__source:!0};function us(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)as.call(t,r)&&!ss.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Zn,type:e,key:i,ref:a,props:l,_owner:Qi.current}}function _c(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Ac(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wo=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ac(""+e.key):t.toString(36)}function Sr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zn:case kc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Nl(a,0):r,$o(l)?(n="",e!=null&&(n=e.replace(Wo,"$&/")+"/"),Sr(l,t,n,"",function(d){return d})):l!=null&&(Ki(l)&&(l=_c(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Wo,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",$o(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Nl(i,s);a+=Sr(i,t,n,u,l)}else if(u=Lc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Nl(i,s++),a+=Sr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ir(e,t,n){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Dc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},jr={transition:null},Ic={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Qi};function cs(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!Ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=sn;L.Fragment=Sc;L.Profiler=Nc;L.PureComponent=Wi;L.StrictMode=jc;L.Suspense=Pc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ic;L.act=cs;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ls({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)as.call(t,u)&&!ss.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Zn,type:e.type,key:l,ref:i,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:Ec,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cc,_context:e},e.Consumer=e};L.createElement=us;L.createFactory=function(e){var t=us.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:zc,render:e}};L.isValidElement=Ki;L.lazy=function(e){return{$$typeof:Mc,_payload:{_status:-1,_result:e},_init:Dc}};L.memo=function(e,t){return{$$typeof:Tc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};L.unstable_act=cs;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";ns.exports=L;var R=ns.exports;const it=wc(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=R,Fc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),bc=Object.prototype.hasOwnProperty,Bc=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uc={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)bc.call(t,r)&&!Uc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Fc,type:e,key:i,ref:a,props:l,_owner:Bc.current}}ll.Fragment=Oc;ll.jsx=ds;ll.jsxs=ds;ts.exports=ll;var o=ts.exports,Zl={},fs={exports:{}},we={},ps={exports:{}},ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var M=N.length;N.push(T);e:for(;0<M;){var G=M-1>>>1,J=N[G];if(0<l(J,T))N[G]=T,N[M]=J,M=G;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],M=N.pop();if(M!==T){N[0]=M;e:for(var G=0,J=N.length,rr=J>>>1;G<rr;){var xt=2*(G+1)-1,jl=N[xt],wt=xt+1,lr=N[wt];if(0>l(jl,M))wt<J&&0>l(lr,jl)?(N[G]=lr,N[wt]=M,G=wt):(N[G]=jl,N[xt]=M,G=xt);else if(wt<J&&0>l(lr,M))N[G]=lr,N[wt]=M,G=wt;else break e}}return T}function l(N,T){var M=N.sortIndex-T.sortIndex;return M!==0?M:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],g=1,h=null,m=3,y=!1,w=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=N)r(d),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(d)}}function v(N){if(k=!1,p(N),!w)if(n(u)!==null)w=!0,kl(S);else{var T=n(d);T!==null&&Sl(v,T.startTime-N)}}function S(N,T){w=!1,k&&(k=!1,f(z),z=-1),y=!0;var M=m;try{for(p(T),h=n(u);h!==null&&(!(h.expirationTime>T)||N&&!Pe());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var J=G(h.expirationTime<=T);T=e.unstable_now(),typeof J=="function"?h.callback=J:h===n(u)&&r(u),p(T)}else r(u);h=n(u)}if(h!==null)var rr=!0;else{var xt=n(d);xt!==null&&Sl(v,xt.startTime-T),rr=!1}return rr}finally{h=null,m=M,y=!1}}var C=!1,E=null,z=-1,W=5,_=-1;function Pe(){return!(e.unstable_now()-_<W)}function dn(){if(E!==null){var N=e.unstable_now();_=N;var T=!0;try{T=E(!0,N)}finally{T?fn():(C=!1,E=null)}}else C=!1}var fn;if(typeof c=="function")fn=function(){c(dn)};else if(typeof MessageChannel<"u"){var Ho=new MessageChannel,xc=Ho.port2;Ho.port1.onmessage=dn,fn=function(){xc.postMessage(null)}}else fn=function(){P(dn,0)};function kl(N){E=N,C||(C=!0,fn())}function Sl(N,T){z=P(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,kl(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var M=m;m=T;try{return N()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=m;m=N;try{return T()}finally{m=M}},e.unstable_scheduleCallback=function(N,T,M){var G=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?G+M:G):M=G,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=M+J,N={id:g++,callback:T,priorityLevel:N,startTime:M,expirationTime:J,sortIndex:-1},M>G?(N.sortIndex=M,t(d,N),n(u)===null&&N===n(d)&&(k?(f(z),z=-1):k=!0,Sl(v,M-G))):(N.sortIndex=J,t(u,N),w||y||(w=!0,kl(S))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var T=m;return function(){var M=m;m=T;try{return N.apply(this,arguments)}finally{m=M}}}})(ms);ps.exports=ms;var Hc=ps.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=R,xe=Hc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hs=new Set,In={};function At(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(In[e]=t,e=0;e<t.length;e++)hs.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Go={},Qo={};function Wc(e){return ql.call(Qo,e)?!0:ql.call(Go,e)?!1:$c.test(e)?Qo[e]=!0:(Go[e]=!0,!1)}function Gc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qc(e,t,n,r){if(t===null||typeof t>"u"||Gc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yi=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yi,Xi);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yi,Xi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yi,Xi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ji(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qc(t,n,l,r)&&(n=null),r||l===null?Wc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Ft=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),gs=Symbol.for("react.provider"),vs=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ys=Symbol.for("react.offscreen"),Ko=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Cl;function kn(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var El=!1;function zl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Kc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ft:return"Fragment";case Rt:return"Portal";case ei:return"Profiler";case Zi:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vs:return(e.displayName||"Context")+".Consumer";case gs:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eo:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function Yc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xc(e){var t=xs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Xc(e))}function ws(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ks(e,t){t=t.checked,t!=null&&Ji(e,"checked",t,!1)}function ii(e,t){ks(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&oi(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oi(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Sn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function Ss(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function js(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?js(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,Ns=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function Cs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function Es(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Cs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Zc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(Zc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,Yt=null,Xt=null;function qo(e){if(e=tr(e)){if(typeof fi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ul(t),fi(e.stateNode,e.type,t))}}function zs(e){Yt?Xt?Xt.push(e):Xt=[e]:Yt=e}function Ps(){if(Yt){var e=Yt,t=Xt;if(Xt=Yt=null,qo(e),t)for(e=0;e<t.length;e++)qo(t[e])}}function Ts(e,t){return e(t)}function Ms(){}var Pl=!1;function Ls(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Ts(e,t,n)}finally{Pl=!1,(Yt!==null||Xt!==null)&&(Ms(),Ps())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var pi=!1;if(Ge)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){pi=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{pi=!1}function qc(e,t,n,r,l,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var En=!1,Ir=null,Rr=!1,mi=null,ed={onError:function(e){En=!0,Ir=e}};function td(e,t,n,r,l,i,a,s,u){En=!1,Ir=null,qc.apply(ed,arguments)}function nd(e,t,n,r,l,i,a,s,u){if(td.apply(this,arguments),En){if(En){var d=Ir;En=!1,Ir=null}else throw Error(x(198));Rr||(Rr=!0,mi=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ea(e){if(Dt(e)!==e)throw Error(x(188))}function rd(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ea(l),e;if(i===r)return ea(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function As(e){return e=rd(e),e!==null?Ds(e):null}function Ds(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ds(e);if(t!==null)return t;e=e.sibling}return null}var Is=xe.unstable_scheduleCallback,ta=xe.unstable_cancelCallback,ld=xe.unstable_shouldYield,id=xe.unstable_requestPaint,Q=xe.unstable_now,od=xe.unstable_getCurrentPriorityLevel,no=xe.unstable_ImmediatePriority,Rs=xe.unstable_UserBlockingPriority,Fr=xe.unstable_NormalPriority,ad=xe.unstable_LowPriority,Fs=xe.unstable_IdlePriority,il=null,be=null;function sd(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:dd,ud=Math.log,cd=Math.LN2;function dd(e){return e>>>=0,e===0?32:31-(ud(e)/cd|0)|0}var ur=64,cr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=jn(s):(i&=a,i!==0&&(r=jn(i)))}else a=n&~l,a!==0?r=jn(a):i!==0&&(r=jn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),l=1<<n,r|=e[n],t&=~l;return r}function fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ae(i),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=fd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Os(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ae(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function bs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bs,lo,Us,Hs,Vs,gi=!1,dr=[],ot=null,at=null,st=null,On=new Map,bn=new Map,tt=[],hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function na(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=tr(t),t!==null&&lo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function gd(e,t,n,r,l){switch(t){case"focusin":return ot=hn(ot,e,t,n,r,l),!0;case"dragenter":return at=hn(at,e,t,n,r,l),!0;case"mouseover":return st=hn(st,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,hn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,bn.set(i,hn(bn.get(i)||null,e,t,n,r,l)),!0}return!1}function $s(e){var t=jt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=_s(n),t!==null){e.blockedOn=t,Vs(e.priority,function(){Us(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);di=r,n.target.dispatchEvent(r),di=null}else return t=tr(n),t!==null&&lo(t),e.blockedOn=n,!1;t.shift()}return!0}function ra(e,t,n){Nr(e)&&n.delete(t)}function vd(){gi=!1,ot!==null&&Nr(ot)&&(ot=null),at!==null&&Nr(at)&&(at=null),st!==null&&Nr(st)&&(st=null),On.forEach(ra),bn.forEach(ra)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,vd)))}function Bn(e){function t(l){return gn(l,e)}if(0<dr.length){gn(dr[0],e);for(var n=1;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&gn(ot,e),at!==null&&gn(at,e),st!==null&&gn(st,e),On.forEach(t),bn.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)$s(n),n.blockedOn===null&&tt.shift()}var Jt=Xe.ReactCurrentBatchConfig,br=!0;function yd(e,t,n,r){var l=D,i=Jt.transition;Jt.transition=null;try{D=1,io(e,t,n,r)}finally{D=l,Jt.transition=i}}function xd(e,t,n,r){var l=D,i=Jt.transition;Jt.transition=null;try{D=4,io(e,t,n,r)}finally{D=l,Jt.transition=i}}function io(e,t,n,r){if(br){var l=vi(e,t,n,r);if(l===null)bl(e,t,r,Br,n),na(e,r);else if(gd(l,e,t,n,r))r.stopPropagation();else if(na(e,r),t&4&&-1<hd.indexOf(e)){for(;l!==null;){var i=tr(l);if(i!==null&&Bs(i),i=vi(e,t,n,r),i===null&&bl(e,t,r,Br,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var Br=null;function vi(e,t,n,r){if(Br=null,e=to(r),e=jt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function Ws(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case no:return 1;case Rs:return 4;case Fr:case ad:return 16;case Fs:return 536870912;default:return 16}default:return 16}}var rt=null,oo=null,Cr=null;function Gs(){if(Cr)return Cr;var e,t=oo,n=t.length,r,l="value"in rt?rt.value:rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Cr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function la(){return!1}function ke(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fr:la,this.isPropagationStopped=la,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=ke(un),er=V({},un,{view:0,detail:0}),wd=ke(er),Ml,Ll,vn,ol=V({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ml=e.screenX-vn.screenX,Ll=e.screenY-vn.screenY):Ll=Ml=0,vn=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),ia=ke(ol),kd=V({},ol,{dataTransfer:0}),Sd=ke(kd),jd=V({},er,{relatedTarget:0}),_l=ke(jd),Nd=V({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Cd=ke(Nd),Ed=V({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zd=ke(Ed),Pd=V({},un,{data:0}),oa=ke(Pd),Td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _d(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ld[e])?!!t[e]:!1}function so(){return _d}var Ad=V({},er,{key:function(e){if(e.key){var t=Td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dd=ke(Ad),Id=V({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aa=ke(Id),Rd=V({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),Fd=ke(Rd),Od=V({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),bd=ke(Od),Bd=V({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ud=ke(Bd),Hd=[9,13,27,32],uo=Ge&&"CompositionEvent"in window,zn=null;Ge&&"documentMode"in document&&(zn=document.documentMode);var Vd=Ge&&"TextEvent"in window&&!zn,Qs=Ge&&(!uo||zn&&8<zn&&11>=zn),sa=" ",ua=!1;function Ks(e,t){switch(e){case"keyup":return Hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ys(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function $d(e,t){switch(e){case"compositionend":return Ys(t);case"keypress":return t.which!==32?null:(ua=!0,sa);case"textInput":return e=t.data,e===sa&&ua?null:e;default:return null}}function Wd(e,t){if(Ot)return e==="compositionend"||!uo&&Ks(e,t)?(e=Gs(),Cr=oo=rt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qs&&t.locale!=="ko"?null:t.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gd[e.type]:t==="textarea"}function Xs(e,t,n,r){zs(r),t=Ur(t,"onChange"),0<t.length&&(n=new ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Un=null;function Qd(e){au(e,0)}function al(e){var t=Ut(e);if(ws(t))return e}function Kd(e,t){if(e==="change")return t}var Js=!1;if(Ge){var Al;if(Ge){var Dl="oninput"in document;if(!Dl){var da=document.createElement("div");da.setAttribute("oninput","return;"),Dl=typeof da.oninput=="function"}Al=Dl}else Al=!1;Js=Al&&(!document.documentMode||9<document.documentMode)}function fa(){Pn&&(Pn.detachEvent("onpropertychange",Zs),Un=Pn=null)}function Zs(e){if(e.propertyName==="value"&&al(Un)){var t=[];Xs(t,Un,e,to(e)),Ls(Qd,t)}}function Yd(e,t,n){e==="focusin"?(fa(),Pn=t,Un=n,Pn.attachEvent("onpropertychange",Zs)):e==="focusout"&&fa()}function Xd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Un)}function Jd(e,t){if(e==="click")return al(t)}function Zd(e,t){if(e==="input"||e==="change")return al(t)}function qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:qd;function Hn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ql.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ma(e,t){var n=pa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pa(n)}}function qs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eu(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ef(e){var t=eu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qs(n.ownerDocument.documentElement,n)){if(r!==null&&co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ma(n,i);var a=ma(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tf=Ge&&"documentMode"in document&&11>=document.documentMode,bt=null,yi=null,Tn=null,xi=!1;function ha(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xi||bt==null||bt!==Dr(r)||(r=bt,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Hn(Tn,r)||(Tn=r,r=Ur(yi,"onSelect"),0<r.length&&(t=new ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bt)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},Il={},tu={};Ge&&(tu=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function sl(e){if(Il[e])return Il[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tu)return Il[e]=t[n];return e}var nu=sl("animationend"),ru=sl("animationiteration"),lu=sl("animationstart"),iu=sl("transitionend"),ou=new Map,ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){ou.set(e,t),At(t,[e])}for(var Rl=0;Rl<ga.length;Rl++){var Fl=ga[Rl],nf=Fl.toLowerCase(),rf=Fl[0].toUpperCase()+Fl.slice(1);gt(nf,"on"+rf)}gt(nu,"onAnimationEnd");gt(ru,"onAnimationIteration");gt(lu,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(iu,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nd(r,t,void 0,e),e.currentTarget=null}function au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;va(l,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;va(l,s,d),i=u}}}if(Rr)throw e=mi,Rr=!1,mi=null,e}function O(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(su(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),su(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[mr]){e[mr]=!0,hs.forEach(function(n){n!=="selectionchange"&&(lf.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Ol("selectionchange",!1,t))}}function su(e,t,n,r){switch(Ws(t)){case 1:var l=yd;break;case 4:l=xd;break;default:l=io}n=l.bind(null,t,n,e),l=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=jt(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Ls(function(){var d=i,g=to(n),h=[];e:{var m=ou.get(e);if(m!==void 0){var y=ao,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":y=Dd;break;case"focusin":w="focus",y=_l;break;case"focusout":w="blur",y=_l;break;case"beforeblur":case"afterblur":y=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fd;break;case nu:case ru:case lu:y=Cd;break;case iu:y=bd;break;case"scroll":y=wd;break;case"wheel":y=Ud;break;case"copy":case"cut":case"paste":y=zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=aa}var k=(t&4)!==0,P=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Fn(c,f),v!=null&&k.push($n(c,v,p)))),P)break;c=c.return}0<k.length&&(m=new y(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==di&&(w=n.relatedTarget||n.fromElement)&&(jt(w)||w[Qe]))break e;if((y||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=d,w=w?jt(w):null,w!==null&&(P=Dt(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=d),y!==w)){if(k=ia,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=aa,v="onPointerLeave",f="onPointerEnter",c="pointer"),P=y==null?m:Ut(y),p=w==null?m:Ut(w),m=new k(v,c+"leave",y,n,g),m.target=P,m.relatedTarget=p,v=null,jt(g)===d&&(k=new k(f,c+"enter",w,n,g),k.target=p,k.relatedTarget=P,v=k),P=v,y&&w)t:{for(k=y,f=w,c=0,p=k;p;p=It(p))c++;for(p=0,v=f;v;v=It(v))p++;for(;0<c-p;)k=It(k),c--;for(;0<p-c;)f=It(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=It(k),f=It(f)}k=null}else k=null;y!==null&&ya(h,m,y,k,!1),w!==null&&P!==null&&ya(h,P,w,k,!0)}}e:{if(m=d?Ut(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=Kd;else if(ca(m))if(Js)S=Zd;else{S=Xd;var C=Yd}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Jd);if(S&&(S=S(e,d))){Xs(h,S,n,g);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&oi(m,"number",m.value)}switch(C=d?Ut(d):window,e){case"focusin":(ca(C)||C.contentEditable==="true")&&(bt=C,yi=d,Tn=null);break;case"focusout":Tn=yi=bt=null;break;case"mousedown":xi=!0;break;case"contextmenu":case"mouseup":case"dragend":xi=!1,ha(h,n,g);break;case"selectionchange":if(tf)break;case"keydown":case"keyup":ha(h,n,g)}var E;if(uo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ot?Ks(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Qs&&n.locale!=="ko"&&(Ot||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ot&&(E=Gs()):(rt=g,oo="value"in rt?rt.value:rt.textContent,Ot=!0)),C=Ur(d,z),0<C.length&&(z=new oa(z,e,null,n,g),h.push({event:z,listeners:C}),E?z.data=E:(E=Ys(n),E!==null&&(z.data=E)))),(E=Vd?$d(e,n):Wd(e,n))&&(d=Ur(d,"onBeforeInput"),0<d.length&&(g=new oa("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=E))}au(h,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Fn(e,n),i!=null&&r.unshift($n(e,i,l)),i=Fn(e,t),i!=null&&r.push($n(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ya(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Fn(n,i),u!=null&&a.unshift($n(n,u,s))):l||(u=Fn(n,i),u!=null&&a.push($n(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var of=/\r\n?/g,af=/\u0000|\uFFFD/g;function xa(e){return(typeof e=="string"?e:""+e).replace(of,`
`).replace(af,"")}function hr(e,t,n){if(t=xa(t),xa(e)!==t&&n)throw Error(x(425))}function Hr(){}var wi=null,ki=null;function Si(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,wa=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof wa<"u"?function(e){return wa.resolve(null).then(e).catch(cf)}:ji;function cf(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Bn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Oe="__reactFiber$"+cn,Wn="__reactProps$"+cn,Qe="__reactContainer$"+cn,Ni="__reactEvents$"+cn,df="__reactListeners$"+cn,ff="__reactHandles$"+cn;function jt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ka(e);e!==null;){if(n=e[Oe])return n;e=ka(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Oe]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ul(e){return e[Wn]||null}var Ci=[],Ht=-1;function vt(e){return{current:e}}function b(e){0>Ht||(e.current=Ci[Ht],Ci[Ht]=null,Ht--)}function F(e,t){Ht++,Ci[Ht]=e.current,e.current=t}var ht={},oe=vt(ht),pe=vt(!1),Pt=ht;function tn(e,t){var n=e.type.contextTypes;if(!n)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Vr(){b(pe),b(oe)}function Sa(e,t,n){if(oe.current!==ht)throw Error(x(168));F(oe,t),F(pe,n)}function uu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Yc(e)||"Unknown",l));return V({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Pt=oe.current,F(oe,e),F(pe,pe.current),!0}function ja(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=uu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,b(pe),b(oe),F(oe,e)):b(pe),F(pe,n)}var He=null,cl=!1,Ul=!1;function cu(e){He===null?He=[e]:He.push(e)}function pf(e){cl=!0,cu(e)}function yt(){if(!Ul&&He!==null){Ul=!0;var e=0,t=D;try{var n=He;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,cl=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),Is(no,yt),l}finally{D=t,Ul=!1}}return null}var Vt=[],$t=0,Wr=null,Gr=0,Se=[],je=0,Tt=null,Ve=1,$e="";function kt(e,t){Vt[$t++]=Gr,Vt[$t++]=Wr,Wr=e,Gr=t}function du(e,t,n){Se[je++]=Ve,Se[je++]=$e,Se[je++]=Tt,Tt=e;var r=Ve;e=$e;var l=32-Ae(r)-1;r&=~(1<<l),n+=1;var i=32-Ae(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Ve=1<<32-Ae(t)+l|n<<l|r,$e=i+e}else Ve=1<<i|n<<l|r,$e=e}function fo(e){e.return!==null&&(kt(e,1),du(e,1,0))}function po(e){for(;e===Wr;)Wr=Vt[--$t],Vt[$t]=null,Gr=Vt[--$t],Vt[$t]=null;for(;e===Tt;)Tt=Se[--je],Se[je]=null,$e=Se[--je],Se[je]=null,Ve=Se[--je],Se[je]=null}var ye=null,ve=null,B=!1,_e=null;function fu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(B){var t=ve;if(t){var n=t;if(!Na(e,t)){if(Ei(e))throw Error(x(418));t=ut(n.nextSibling);var r=ye;t&&Na(e,t)?fu(r,n):(e.flags=e.flags&-4097|2,B=!1,ye=e)}}else{if(Ei(e))throw Error(x(418));e.flags=e.flags&-4097|2,B=!1,ye=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function gr(e){if(e!==ye)return!1;if(!B)return Ca(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Si(e.type,e.memoizedProps)),t&&(t=ve)){if(Ei(e))throw pu(),Error(x(418));for(;t;)fu(e,t),t=ut(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?ut(e.stateNode.nextSibling):null;return!0}function pu(){for(var e=ve;e;)e=ut(e.nextSibling)}function nn(){ve=ye=null,B=!1}function mo(e){_e===null?_e=[e]:_e.push(e)}var mf=Xe.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ea(e){var t=e._init;return t(e._payload)}function mu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=pt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=Kl(p,f.mode,v),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,v){var S=p.type;return S===Ft?g(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&Ea(S)===c.type)?(v=l(c,p.props),v.ref=yn(f,c,p),v.return=f,v):(v=Ar(p.type,p.key,p.props,null,f.mode,v),v.ref=yn(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yl(p,f.mode,v),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,v,S){return c===null||c.tag!==7?(c=zt(p,f.mode,v,S),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Kl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case or:return p=Ar(c.type,c.key,c.props,null,f.mode,p),p.ref=yn(f,null,c),p.return=f,p;case Rt:return c=Yl(c,f.mode,p),c.return=f,c;case Ze:var v=c._init;return h(f,v(c._payload),p)}if(Sn(c)||pn(c))return c=zt(c,f.mode,p,null),c.return=f,c;vr(f,c)}return null}function m(f,c,p,v){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case or:return p.key===S?u(f,c,p,v):null;case Rt:return p.key===S?d(f,c,p,v):null;case Ze:return S=p._init,m(f,c,S(p._payload),v)}if(Sn(p)||pn(p))return S!==null?null:g(f,c,p,v,null);vr(f,p)}return null}function y(f,c,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case or:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,S);case Rt:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,S);case Ze:var C=v._init;return y(f,c,p,C(v._payload),S)}if(Sn(v)||pn(v))return f=f.get(p)||null,g(c,f,v,S,null);vr(c,v)}return null}function w(f,c,p,v){for(var S=null,C=null,E=c,z=c=0,W=null;E!==null&&z<p.length;z++){E.index>z?(W=E,E=null):W=E.sibling;var _=m(f,E,p[z],v);if(_===null){E===null&&(E=W);break}e&&E&&_.alternate===null&&t(f,E),c=i(_,c,z),C===null?S=_:C.sibling=_,C=_,E=W}if(z===p.length)return n(f,E),B&&kt(f,z),S;if(E===null){for(;z<p.length;z++)E=h(f,p[z],v),E!==null&&(c=i(E,c,z),C===null?S=E:C.sibling=E,C=E);return B&&kt(f,z),S}for(E=r(f,E);z<p.length;z++)W=y(E,f,z,p[z],v),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?z:W.key),c=i(W,c,z),C===null?S=W:C.sibling=W,C=W);return e&&E.forEach(function(Pe){return t(f,Pe)}),B&&kt(f,z),S}function k(f,c,p,v){var S=pn(p);if(typeof S!="function")throw Error(x(150));if(p=S.call(p),p==null)throw Error(x(151));for(var C=S=null,E=c,z=c=0,W=null,_=p.next();E!==null&&!_.done;z++,_=p.next()){E.index>z?(W=E,E=null):W=E.sibling;var Pe=m(f,E,_.value,v);if(Pe===null){E===null&&(E=W);break}e&&E&&Pe.alternate===null&&t(f,E),c=i(Pe,c,z),C===null?S=Pe:C.sibling=Pe,C=Pe,E=W}if(_.done)return n(f,E),B&&kt(f,z),S;if(E===null){for(;!_.done;z++,_=p.next())_=h(f,_.value,v),_!==null&&(c=i(_,c,z),C===null?S=_:C.sibling=_,C=_);return B&&kt(f,z),S}for(E=r(f,E);!_.done;z++,_=p.next())_=y(E,f,z,_.value,v),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?z:_.key),c=i(_,c,z),C===null?S=_:C.sibling=_,C=_);return e&&E.forEach(function(dn){return t(f,dn)}),B&&kt(f,z),S}function P(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Ft&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case or:e:{for(var S=p.key,C=c;C!==null;){if(C.key===S){if(S=p.type,S===Ft){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&Ea(S)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=yn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Ft?(c=zt(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Ar(p.type,p.key,p.props,null,f.mode,v),v.ref=yn(f,c,p),v.return=f,f=v)}return a(f);case Rt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Yl(p,f.mode,v),c.return=f,f=c}return a(f);case Ze:return C=p._init,P(f,c,C(p._payload),v)}if(Sn(p))return w(f,c,p,v);if(pn(p))return k(f,c,p,v);vr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Kl(p,f.mode,v),c.return=f,f=c),a(f)):n(f,c)}return P}var rn=mu(!0),hu=mu(!1),Qr=vt(null),Kr=null,Wt=null,ho=null;function go(){ho=Wt=Kr=null}function vo(e){var t=Qr.current;b(Qr),e._currentValue=t}function Pi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Kr=e,ho=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(ho!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Kr===null)throw Error(x(308));Wt=e,Kr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Nt=null;function yo(e){Nt===null?Nt=[e]:Nt.push(e)}function gu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,yo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,yo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;a=0,g=d=u=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(y,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(y,h,m):w,m==null)break e;h=V({},h,m);break e;case 2:qe=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=y,u=h):g=g.next=y,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Lt|=a,e.lanes=a,e.memoizedState=h}}function Pa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var nr={},Be=vt(nr),Gn=vt(nr),Qn=vt(nr);function Ct(e){if(e===nr)throw Error(x(174));return e}function wo(e,t){switch(F(Qn,t),F(Gn,e),F(Be,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=si(t,e)}b(Be),F(Be,t)}function ln(){b(Be),b(Gn),b(Qn)}function yu(e){Ct(Qn.current);var t=Ct(Be.current),n=si(t,e.type);t!==n&&(F(Gn,e),F(Be,n))}function ko(e){Gn.current===e&&(b(Be),b(Gn))}var U=vt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function So(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Pr=Xe.ReactCurrentDispatcher,Vl=Xe.ReactCurrentBatchConfig,Mt=0,H=null,Y=null,Z=null,Jr=!1,Mn=!1,Kn=0,hf=0;function re(){throw Error(x(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function No(e,t,n,r,l,i){if(Mt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?xf:wf,e=n(r,l),Mn){i=0;do{if(Mn=!1,Kn=0,25<=i)throw Error(x(301));i+=1,Z=Y=null,t.updateQueue=null,Pr.current=kf,e=n(r,l)}while(Mn)}if(Pr.current=Zr,t=Y!==null&&Y.next!==null,Mt=0,Z=Y=H=null,Jr=!1,t)throw Error(x(300));return e}function Co(){var e=Kn!==0;return Kn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?H.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(x(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function Yn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=ze(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,d=i;do{var g=d.lane;if((Mt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,a=r):u=u.next=h,H.lanes|=g,Lt|=g}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,Ie(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Lt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=ze(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Ie(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xu(){}function wu(e,t){var n=H,r=ze(),l=t(),i=!Ie(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,Eo(ju.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Xn(9,Su.bind(null,n,r,l,t),void 0,null),q===null)throw Error(x(349));Mt&30||ku(n,t,l)}return l}function ku(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Su(e,t,n,r){t.value=n,t.getSnapshot=r,Nu(t)&&Cu(e)}function ju(e,t,n){return n(function(){Nu(t)&&Cu(e)})}function Nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function Cu(e){var t=Ke(e,1);t!==null&&De(t,e,1,-1)}function Ta(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=yf.bind(null,H,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Eu(){return ze().memoizedState}function Tr(e,t,n,r){var l=Fe();H.flags|=e,l.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(Y!==null){var a=Y.memoizedState;if(i=a.destroy,r!==null&&jo(r,a.deps)){l.memoizedState=Xn(t,n,i,r);return}}H.flags|=e,l.memoizedState=Xn(1|t,n,i,r)}function Ma(e,t){return Tr(8390656,8,e,t)}function Eo(e,t){return dl(2048,8,e,t)}function zu(e,t){return dl(4,2,e,t)}function Pu(e,t){return dl(4,4,e,t)}function Tu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,Tu.bind(null,t,e),n)}function zo(){}function Lu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _u(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Au(e,t,n){return Mt&21?(Ie(n,t)||(n=Os(),H.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function gf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{D=n,Vl.transition=r}}function Du(){return ze().memoizedState}function vf(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iu(e))Ru(t,n);else if(n=gu(e,t,n,r),n!==null){var l=se();De(n,e,r,l),Fu(n,t,r)}}function yf(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))Ru(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,Ie(s,a)){var u=t.interleaved;u===null?(l.next=l,yo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=gu(e,t,l,r),n!==null&&(l=se(),De(n,e,r,l),Fu(n,t,r))}}function Iu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Ru(e,t){Mn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}var Zr={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},xf={readContext:Ee,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Ma,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,Tu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ta,useDebugValue:zo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ta(!1),t=e[0];return e=gf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Fe();if(B){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),q===null)throw Error(x(349));Mt&30||ku(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ma(ju.bind(null,r,i,e),[e]),r.flags|=2048,Xn(9,Su.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=q.identifierPrefix;if(B){var n=$e,r=Ve;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wf={readContext:Ee,useCallback:Lu,useContext:Ee,useEffect:Eo,useImperativeHandle:Mu,useInsertionEffect:zu,useLayoutEffect:Pu,useMemo:_u,useReducer:$l,useRef:Eu,useState:function(){return $l(Yn)},useDebugValue:zo,useDeferredValue:function(e){var t=ze();return Au(t,Y.memoizedState,e)},useTransition:function(){var e=$l(Yn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:wu,useId:Du,unstable_isNewReconciler:!1},kf={readContext:Ee,useCallback:Lu,useContext:Ee,useEffect:Eo,useImperativeHandle:Mu,useInsertionEffect:zu,useLayoutEffect:Pu,useMemo:_u,useReducer:Wl,useRef:Eu,useState:function(){return Wl(Yn)},useDebugValue:zo,useDeferredValue:function(e){var t=ze();return Y===null?t.memoizedState=e:Au(t,Y.memoizedState,e)},useTransition:function(){var e=Wl(Yn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:wu,useId:Du,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=ft(e),i=We(r,l);i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(De(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=ft(e),i=We(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(De(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ft(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=ct(e,l,r),t!==null&&(De(t,e,r,n),zr(t,e,r))}};function La(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(l,i):!0}function Ou(e,t,n){var r=!1,l=ht,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=me(t)?Pt:oe.current,r=t.contextTypes,i=(r=r!=null)?tn(e,l):ht),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function _a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function Mi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},xo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=me(t)?Pt:oe.current,l.context=tn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ti(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&fl.enqueueReplaceState(l,l.state,null),Yr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=Kc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sf=typeof WeakMap=="function"?WeakMap:Map;function bu(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){el||(el=!0,Ui=r),Li(e,t)},n}function Bu(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Aa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Rf.bind(null,e,t,n),t.then(e,e))}function Da(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ia(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var jf=Xe.ReactCurrentOwner,fe=!1;function ae(e,t,n,r){t.child=e===null?hu(t,null,n,r):rn(t,e.child,n,r)}function Ra(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=No(e,t,n,r,i,l),n=Co(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(B&&n&&fo(t),t.flags|=1,ae(e,t,r,l),t.child)}function Fa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Io(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Uu(e,t,i,r,l)):(e=Ar(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(a,r)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=pt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Hn(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return _i(e,t,n,r,l)}function Hu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Qt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Qt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(Qt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(Qt,ge),ge|=r;return ae(e,t,l,n),t.child}function Vu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _i(e,t,n,r,l){var i=me(n)?Pt:oe.current;return i=tn(t,i),Zt(t,l),n=No(e,t,n,r,i,l),r=Co(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(B&&r&&fo(t),t.flags|=1,ae(e,t,n,l),t.child)}function Oa(e,t,n,r,l){if(me(n)){var i=!0;$r(t)}else i=!1;if(Zt(t,l),t.stateNode===null)Mr(e,t),Ou(t,n,r),Mi(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=me(n)?Pt:oe.current,d=tn(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&_a(t,a,r,d),qe=!1;var m=t.memoizedState;a.state=m,Yr(t,r,a,l),u=t.memoizedState,s!==r||m!==u||pe.current||qe?(typeof g=="function"&&(Ti(t,n,g,r),u=t.memoizedState),(s=qe||La(t,n,s,r,m,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Me(t.type,s),a.props=d,h=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=me(n)?Pt:oe.current,u=tn(t,u));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||m!==u)&&_a(t,a,r,u),qe=!1,m=t.memoizedState,a.state=m,Yr(t,r,a,l);var w=t.memoizedState;s!==h||m!==w||pe.current||qe?(typeof y=="function"&&(Ti(t,n,y,r),w=t.memoizedState),(d=qe||La(t,n,d,r,m,w,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ai(e,t,n,r,i,l)}function Ai(e,t,n,r,l,i){Vu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&ja(t,n,!1),Ye(e,t,i);r=t.stateNode,jf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=rn(t,e.child,null,i),t.child=rn(t,null,s,i)):ae(e,t,s,i),t.memoizedState=r.state,l&&ja(t,n,!0),t.child}function $u(e){var t=e.stateNode;t.pendingContext?Sa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sa(e,t.context,!1),wo(e,t.containerInfo)}function ba(e,t,n,r,l){return nn(),mo(l),t.flags|=256,ae(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wu(e,t,n){var r=t.pendingProps,l=U.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(U,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=hl(a,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ii(n),t.memoizedState=Di,e):Po(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Nf(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=pt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=pt(s,i):(i=zt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ii(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return i=e.child,e=i.sibling,r=pt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Po(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&mo(r),rn(t,e.child,null,n),e=Po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(x(422))),yr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=hl({mode:"visible",children:r.children},l,0,null),i=zt(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&rn(t,e.child,null,a),t.child.memoizedState=Ii(a),t.memoizedState=Di,i);if(!(t.mode&1))return yr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(x(419)),r=Gl(i,r,void 0),yr(e,t,a,r)}if(s=(a&e.childLanes)!==0,fe||s){if(r=q,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),De(r,e,l,-1))}return Do(),r=Gl(Error(x(421))),yr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ff.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=ut(l.nextSibling),ye=t,B=!0,_e=null,e!==null&&(Se[je++]=Ve,Se[je++]=$e,Se[je++]=Tt,Ve=e.id,$e=e.overflow,Tt=t),t=Po(t,r.children),t.flags|=4096,t)}function Ba(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pi(e.return,t,n)}function Ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Gu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ae(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ba(e,n,t);else if(e.tag===19)Ba(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cf(e,t,n){switch(t.tag){case 3:$u(t),nn();break;case 5:yu(t);break;case 1:me(t.type)&&$r(t);break;case 4:wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(Qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Wu(e,t,n):(F(U,U.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);F(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Hu(e,t,n)}return Ye(e,t,n)}var Qu,Ri,Ku,Yu;Qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ri=function(){};Ku=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(Be.current);var i=null;switch(n){case"input":l=li(e,l),r=li(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=ai(e,l),r=ai(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}ui(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(In.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(In.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Yu=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ef(e,t,n){var r=t.pendingProps;switch(po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Vr(),le(t),null;case 3:return r=t.stateNode,ln(),b(pe),b(oe),So(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_e!==null&&($i(_e),_e=null))),Ri(e,t),le(t),null;case 5:ko(t);var l=Ct(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ku(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return le(t),null}if(e=Ct(Be.current),gr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Oe]=t,r[Wn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<Nn.length;l++)O(Nn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Yo(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Jo(r,i),O("invalid",r)}ui(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",""+s]):In.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&O("scroll",r)}switch(n){case"input":ar(r),Xo(r,i,!0);break;case"textarea":ar(r),Zo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Hr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=js(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Oe]=t,e[Wn]=r,Qu(e,t,!1,!1),t.stateNode=e;e:{switch(a=ci(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nn.length;l++)O(Nn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Yo(e,r),l=li(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":Jo(e,r),l=ai(e,r),O("invalid",e);break;default:l=r}ui(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Es(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ns(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Rn(e,u):typeof u=="number"&&Rn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(In.hasOwnProperty(i)?u!=null&&i==="onScroll"&&O("scroll",e):u!=null&&Ji(e,i,u,a))}switch(n){case"input":ar(e),Xo(e,r,!1);break;case"textarea":ar(e),Zo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Yu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Ct(Qn.current),Ct(Be.current),gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return le(t),null;case 13:if(b(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ve!==null&&t.mode&1&&!(t.flags&128))pu(),nn(),t.flags|=98560,i=!1;else if(i=gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Oe]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else _e!==null&&($i(_e),_e=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):Do())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return ln(),Ri(e,t),e===null&&Vn(t.stateNode.containerInfo),le(t),null;case 10:return vo(t.type._context),le(t),null;case 17:return me(t.type)&&Vr(),le(t),null;case 19:if(b(U),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)xn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Xr(e),a!==null){for(t.flags|=128,xn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>an&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!B)return le(t),null}else 2*Q()-i.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=U.current,F(U,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ao(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function zf(e,t){switch(po(t),t.tag){case 1:return me(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(),b(pe),b(oe),So(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ko(t),null;case 13:if(b(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(U),null;case 4:return ln(),null;case 10:return vo(t.type._context),null;case 22:case 23:return Ao(),null;case 24:return null;default:return null}}var xr=!1,ie=!1,Pf=typeof WeakSet=="function"?WeakSet:Set,j=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){$(e,t,r)}}var Ua=!1;function Tf(e,t){if(wi=br,e=eu(),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var y;h!==n||l!==0&&h.nodeType!==3||(s=a+l),h!==i||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=a),m===i&&++g===r&&(u=a),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},br=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,P=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Me(t.type,k),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){$(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=Ua,Ua=!1,w}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Fi(t,n,i)}l=l.next}while(l!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Wn],delete t[Ni],delete t[df],delete t[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function Ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var ee=null,Le=!1;function Je(e,t,n){for(n=n.child;n!==null;)Zu(e,t,n),n=n.sibling}function Zu(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:ie||Gt(n,t);case 6:var r=ee,l=Le;ee=null,Je(e,t,n),ee=r,Le=l,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),Bn(e)):Bl(ee,n.stateNode));break;case 4:r=ee,l=Le,ee=n.stateNode.containerInfo,Le=!0,Je(e,t,n),ee=r,Le=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Fi(n,t,a),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!ie&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){$(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Je(e,t,n),ie=r):Je(e,t,n);break;default:Je(e,t,n)}}function Va(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pf),t.forEach(function(r){var l=Of.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Le=!1;break e;case 3:ee=s.stateNode.containerInfo,Le=!0;break e;case 4:ee=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(ee===null)throw Error(x(160));Zu(i,a,l),ee=null,Le=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){$(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qu(t,e),t=t.sibling}function qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Re(e),r&4){try{Ln(3,e,e.return),pl(3,e)}catch(k){$(e,e.return,k)}try{Ln(5,e,e.return)}catch(k){$(e,e.return,k)}}break;case 1:Te(t,e),Re(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Te(t,e),Re(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var l=e.stateNode;try{Rn(l,"")}catch(k){$(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ks(l,i),ci(s,a);var d=ci(s,i);for(a=0;a<u.length;a+=2){var g=u[a],h=u[a+1];g==="style"?Es(l,h):g==="dangerouslySetInnerHTML"?Ns(l,h):g==="children"?Rn(l,h):Ji(l,g,h,d)}switch(s){case"input":ii(l,i);break;case"textarea":Ss(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Kt(l,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?Kt(l,!!i.multiple,i.defaultValue,!0):Kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wn]=i}catch(k){$(e,e.return,k)}}break;case 6:if(Te(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){$(e,e.return,k)}}break;case 3:if(Te(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(k){$(e,e.return,k)}break;case 4:Te(t,e),Re(e);break;case 13:Te(t,e),Re(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Lo=Q())),r&4&&Va(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||g,Te(t,e),ie=d):Te(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(h=j=g;j!==null;){switch(m=j,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ln(4,m,m.return);break;case 1:Gt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){$(r,n,k)}}break;case 5:Gt(m,m.return);break;case 22:if(m.memoizedState!==null){Wa(h);continue}}y!==null?(y.return=m,j=y):Wa(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Cs("display",a))}catch(k){$(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){$(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Te(t,e),Re(e),r&4&&Va(e);break;case 21:break;default:Te(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ju(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Rn(l,""),r.flags&=-33);var i=Ha(e);Bi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ha(e);bi(e,s,a);break;default:throw Error(x(161))}}catch(u){$(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mf(e,t,n){j=e,ec(e)}function ec(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||xr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ie;s=xr;var d=ie;if(xr=a,(ie=u)&&!d)for(j=l;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?Ga(l):u!==null?(u.return=a,j=u):Ga(l);for(;i!==null;)j=i,ec(i),i=i.sibling;j=l,xr=s,ie=d}$a(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):$a(e)}}function $a(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pa(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pa(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Bn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||t.flags&512&&Oi(t)}catch(m){$(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Wa(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Ga(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(u){$(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){$(t,l,u)}}var i=t.return;try{Oi(t)}catch(u){$(t,i,u)}break;case 5:var a=t.return;try{Oi(t)}catch(u){$(t,a,u)}}}catch(u){$(t,t.return,u)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var Lf=Math.ceil,qr=Xe.ReactCurrentDispatcher,To=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,A=0,q=null,K=null,te=0,ge=0,Qt=vt(0),X=0,Jn=null,Lt=0,ml=0,Mo=0,_n=null,de=null,Lo=0,an=1/0,Ue=null,el=!1,Ui=null,dt=null,wr=!1,lt=null,tl=0,An=0,Hi=null,Lr=-1,_r=0;function se(){return A&6?Q():Lr!==-1?Lr:Lr=Q()}function ft(e){return e.mode&1?A&2&&te!==0?te&-te:mf.transition!==null?(_r===0&&(_r=Os()),_r):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ws(e.type)),e):1}function De(e,t,n,r){if(50<An)throw An=0,Hi=null,Error(x(185));qn(e,n,r),(!(A&2)||e!==q)&&(e===q&&(!(A&2)&&(ml|=n),X===4&&nt(e,te)),he(e,r),n===1&&A===0&&!(t.mode&1)&&(an=Q()+500,cl&&yt()))}function he(e,t){var n=e.callbackNode;pd(e,t);var r=Or(e,e===q?te:0);if(r===0)n!==null&&ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ta(n),t===1)e.tag===0?pf(Qa.bind(null,e)):cu(Qa.bind(null,e)),uf(function(){!(A&6)&&yt()}),n=null;else{switch(bs(r)){case 1:n=no;break;case 4:n=Rs;break;case 16:n=Fr;break;case 536870912:n=Fs;break;default:n=Fr}n=sc(n,tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tc(e,t){if(Lr=-1,_r=0,A&6)throw Error(x(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Or(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=nl(e,r);else{t=r;var l=A;A|=2;var i=rc();(q!==e||te!==t)&&(Ue=null,an=Q()+500,Et(e,t));do try{Df();break}catch(s){nc(e,s)}while(!0);go(),qr.current=i,A=l,K!==null?t=0:(q=null,te=0,t=X)}if(t!==0){if(t===2&&(l=hi(e),l!==0&&(r=l,t=Vi(e,l))),t===1)throw n=Jn,Et(e,0),nt(e,r),he(e,Q()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!_f(l)&&(t=nl(e,r),t===2&&(i=hi(e),i!==0&&(r=i,t=Vi(e,i))),t===1))throw n=Jn,Et(e,0),nt(e,r),he(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:St(e,de,Ue);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Lo+500-Q(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ji(St.bind(null,e,de,Ue),t);break}St(e,de,Ue);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ae(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lf(r/1960))-r,10<r){e.timeoutHandle=ji(St.bind(null,e,de,Ue),r);break}St(e,de,Ue);break;case 5:St(e,de,Ue);break;default:throw Error(x(329))}}}return he(e,Q()),e.callbackNode===n?tc.bind(null,e):null}function Vi(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=nl(e,t),e!==2&&(t=de,de=n,t!==null&&$i(t)),e}function $i(e){de===null?de=e:de.push.apply(de,e)}function _f(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ie(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Mo,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function Qa(e){if(A&6)throw Error(x(327));qt();var t=Or(e,0);if(!(t&1))return he(e,Q()),null;var n=nl(e,t);if(e.tag!==0&&n===2){var r=hi(e);r!==0&&(t=r,n=Vi(e,r))}if(n===1)throw n=Jn,Et(e,0),nt(e,t),he(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,de,Ue),he(e,Q()),null}function _o(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(an=Q()+500,cl&&yt())}}function _t(e){lt!==null&&lt.tag===0&&!(A&6)&&qt();var t=A;A|=1;var n=Ce.transition,r=D;try{if(Ce.transition=null,D=1,e)return e()}finally{D=r,Ce.transition=n,A=t,!(A&6)&&yt()}}function Ao(){ge=Qt.current,b(Qt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:ln(),b(pe),b(oe),So();break;case 5:ko(r);break;case 4:ln();break;case 13:b(U);break;case 19:b(U);break;case 10:vo(r.type._context);break;case 22:case 23:Ao()}n=n.return}if(q=e,K=e=pt(e.current,null),te=ge=t,X=0,Jn=null,Mo=ml=Lt=0,de=_n=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Nt=null}return e}function nc(e,t){do{var n=K;try{if(go(),Pr.current=Zr,Jr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(Mt=0,Z=Y=H=null,Mn=!1,Kn=0,To.current=null,n===null||n.return===null){X=1,Jn=t,K=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Da(a);if(y!==null){y.flags&=-257,Ia(y,a,s,i,t),y.mode&1&&Aa(i,d,t),t=y,u=d;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){Aa(i,d,t),Do();break e}u=Error(x(426))}}else if(B&&s.mode&1){var P=Da(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ia(P,a,s,i,t),mo(on(u,s));break e}}i=u=on(u,s),X!==4&&(X=2),_n===null?_n=[i]:_n.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=bu(i,u,t);za(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dt===null||!dt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Bu(i,s,t);za(i,v);break e}}i=i.return}while(i!==null)}ic(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function rc(){var e=qr.current;return qr.current=Zr,e===null?Zr:e}function Do(){(X===0||X===3||X===2)&&(X=4),q===null||!(Lt&268435455)&&!(ml&268435455)||nt(q,te)}function nl(e,t){var n=A;A|=2;var r=rc();(q!==e||te!==t)&&(Ue=null,Et(e,t));do try{Af();break}catch(l){nc(e,l)}while(!0);if(go(),A=n,qr.current=r,K!==null)throw Error(x(261));return q=null,te=0,X}function Af(){for(;K!==null;)lc(K)}function Df(){for(;K!==null&&!ld();)lc(K)}function lc(e){var t=ac(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?ic(e):K=t,To.current=null}function ic(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=Ef(n,t,ge),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function St(e,t,n){var r=D,l=Ce.transition;try{Ce.transition=null,D=1,If(e,t,n,r)}finally{Ce.transition=l,D=r}return null}function If(e,t,n,r){do qt();while(lt!==null);if(A&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(md(e,i),e===q&&(K=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,sc(Fr,function(){return qt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var a=D;D=1;var s=A;A|=4,To.current=null,Tf(e,n),qu(n,e),ef(ki),br=!!wi,ki=wi=null,e.current=n,Mf(n),id(),A=s,D=a,Ce.transition=i}else e.current=n;if(wr&&(wr=!1,lt=e,tl=l),i=e.pendingLanes,i===0&&(dt=null),sd(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(el)throw el=!1,e=Ui,Ui=null,e;return tl&1&&e.tag!==0&&qt(),i=e.pendingLanes,i&1?e===Hi?An++:(An=0,Hi=e):An=0,yt(),null}function qt(){if(lt!==null){var e=bs(tl),t=Ce.transition,n=D;try{if(Ce.transition=null,D=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,tl=0,A&6)throw Error(x(331));var l=A;for(A|=4,j=e.current;j!==null;){var i=j,a=i.child;if(j.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(j=d;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:Ln(8,g,i)}var h=g.child;if(h!==null)h.return=g,j=h;else for(;j!==null;){g=j;var m=g.sibling,y=g.return;if(Xu(g),g===d){j=null;break}if(m!==null){m.return=y,j=m;break}j=y}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}j=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,j=a;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ln(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){a=j;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,j=p;else e:for(a=c;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pl(9,s)}}catch(S){$(s,s.return,S)}if(s===a){j=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,j=v;break e}j=s.return}}if(A=l,yt(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{D=n,Ce.transition=t}}return!1}function Ka(e,t,n){t=on(n,t),t=bu(e,t,1),e=ct(e,t,1),t=se(),e!==null&&(qn(e,1,t),he(e,t))}function $(e,t,n){if(e.tag===3)Ka(e,e,n);else for(;t!==null;){if(t.tag===3){Ka(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=on(n,e),e=Bu(t,e,1),t=ct(t,e,1),e=se(),t!==null&&(qn(t,1,e),he(t,e));break}}t=t.return}}function Rf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Q()-Lo?Et(e,0):Mo|=n),he(e,t)}function oc(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=se();e=Ke(e,t),e!==null&&(qn(e,t,n),he(e,n))}function Ff(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),oc(e,n)}function Of(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),oc(e,n)}var ac;ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,Cf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,B&&t.flags&1048576&&du(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var l=tn(t,oe.current);Zt(t,n),l=No(null,t,r,e,l,n);var i=Co();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,$r(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,xo(t),l.updater=fl,t.stateNode=l,l._reactInternals=t,Mi(t,r,e,n),t=Ai(null,t,r,!0,i,n)):(t.tag=0,B&&i&&fo(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Bf(r),e=Me(r,e),l){case 0:t=_i(null,t,r,e,n);break e;case 1:t=Oa(null,t,r,e,n);break e;case 11:t=Ra(null,t,r,e,n);break e;case 14:t=Fa(null,t,r,Me(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),_i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Oa(e,t,r,l,n);case 3:e:{if($u(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,vu(e,t),Yr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=on(Error(x(423)),t),t=ba(e,t,r,n,l);break e}else if(r!==l){l=on(Error(x(424)),t),t=ba(e,t,r,n,l);break e}else for(ve=ut(t.stateNode.containerInfo.firstChild),ye=t,B=!0,_e=null,n=hu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===l){t=Ye(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return yu(t),e===null&&zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Si(r,l)?a=null:i!==null&&Si(r,i)&&(t.flags|=32),Vu(e,t),ae(e,t,a,n),t.child;case 6:return e===null&&zi(t),null;case 13:return Wu(e,t,n);case 4:return wo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Ra(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,F(Qr,r._currentValue),r._currentValue=a,i!==null)if(Ie(i.value,a)){if(i.children===l.children&&!pe.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Pi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(x(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Pi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ee(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Me(r,t.pendingProps),l=Me(r.type,l),Fa(e,t,r,l,n);case 15:return Uu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Mr(e,t),t.tag=1,me(r)?(e=!0,$r(t)):e=!1,Zt(t,n),Ou(t,r,l),Mi(t,r,l,n),Ai(null,t,r,!0,e,n);case 19:return Gu(e,t,n);case 22:return Hu(e,t,n)}throw Error(x(156,t.tag))};function sc(e,t){return Is(e,t)}function bf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new bf(e,t,n,r)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bf(e){if(typeof e=="function")return Io(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===eo)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ar(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Io(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ft:return zt(n.children,l,i,t);case Zi:a=8,l|=8;break;case ei:return e=Ne(12,n,t,l|2),e.elementType=ei,e.lanes=i,e;case ti:return e=Ne(13,n,t,l),e.elementType=ti,e.lanes=i,e;case ni:return e=Ne(19,n,t,l),e.elementType=ni,e.lanes=i,e;case ys:return hl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gs:a=10;break e;case vs:a=9;break e;case qi:a=11;break e;case eo:a=14;break e;case Ze:a=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ne(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ys,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ro(e,t,n,r,l,i,a,s,u){return e=new Uf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xo(i),e}function Hf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uc(e){if(!e)return ht;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(me(n))return uu(e,n,t)}return t}function cc(e,t,n,r,l,i,a,s,u){return e=Ro(n,r,!0,e,l,i,a,s,u),e.context=uc(null),n=e.current,r=se(),l=ft(n),i=We(r,l),i.callback=t??null,ct(n,i,l),e.current.lanes=l,qn(e,l,r),he(e,r),e}function gl(e,t,n,r){var l=t.current,i=se(),a=ft(l);return n=uc(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(l,t,a),e!==null&&(De(e,l,a,i),zr(e,l,a)),a}function rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ya(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fo(e,t){Ya(e,t),(e=e.alternate)&&Ya(e,t)}function Vf(){return null}var dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oo(e){this._internalRoot=e}vl.prototype.render=Oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));gl(e,t,null,null)};vl.prototype.unmount=Oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){gl(null,e,null,null)}),t[Qe]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&$s(e)}};function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xa(){}function $f(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=rl(a);i.call(d)}}var a=cc(t,r,e,0,null,!1,!1,"",Xa);return e._reactRootContainer=a,e[Qe]=a.current,Vn(e.nodeType===8?e.parentNode:e),_t(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=rl(u);s.call(d)}}var u=Ro(e,0,!1,null,null,!1,!1,"",Xa);return e._reactRootContainer=u,e[Qe]=u.current,Vn(e.nodeType===8?e.parentNode:e),_t(function(){gl(t,u,n,r)}),u}function xl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=rl(a);s.call(u)}}gl(t,a,e,l)}else a=$f(n,t,e,l,r);return rl(a)}Bs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(ro(t,n|1),he(t,Q()),!(A&6)&&(an=Q()+500,yt()))}break;case 13:_t(function(){var r=Ke(e,1);if(r!==null){var l=se();De(r,e,1,l)}}),Fo(e,1)}};lo=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=se();De(t,e,134217728,n)}Fo(e,134217728)}};Us=function(e){if(e.tag===13){var t=ft(e),n=Ke(e,t);if(n!==null){var r=se();De(n,e,t,r)}Fo(e,t)}};Hs=function(){return D};Vs=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};fi=function(e,t,n){switch(t){case"input":if(ii(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(x(90));ws(r),ii(r,l)}}}break;case"textarea":Ss(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Ts=_o;Ms=_t;var Wf={usingClientEntryPoint:!1,Events:[tr,Ut,ul,zs,Ps,_o]},wn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=As(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{il=kr.inject(Gf),be=kr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bo(t))throw Error(x(200));return Hf(e,t,null,n)};we.createRoot=function(e,t){if(!bo(e))throw Error(x(299));var n=!1,r="",l=dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ro(e,1,!1,null,null,n,!1,r,l),e[Qe]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Oo(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=As(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return _t(e)};we.hydrate=function(e,t,n){if(!yl(t))throw Error(x(200));return xl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!bo(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=dc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=cc(t,null,e,1,n??null,l,!1,i,a),e[Qe]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new vl(t)};we.render=function(e,t,n){if(!yl(t))throw Error(x(200));return xl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!yl(e))throw Error(x(40));return e._reactRootContainer?(_t(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=_o;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return xl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)}catch(e){console.error(e)}}fc(),fs.exports=we;var Qf=fs.exports,Ja=Qf;Zl.createRoot=Ja.createRoot,Zl.hydrateRoot=Ja.hydrateRoot;const Kf=()=>{const e=R.useRef(null);return R.useEffect(()=>{const t=window.innerWidth<768;if(t)return;const n=e.current;if(!n)return;const r=n.getContext("2d");let l,i=n.width=window.innerWidth,a=n.height=window.innerHeight;const s=()=>{i=n.width=window.innerWidth,a=n.height=window.innerHeight,window.innerWidth<768&&f()};window.addEventListener("resize",s);const u=["rgba(16, 42, 67,","rgba(37, 99, 235,","rgba(100, 116, 139,","rgba(6, 182, 212,","rgba(16, 185, 129,"],d=15,g=[];for(let c=0;c<d;c++)g.push({x:Math.random()*i,y:Math.random()*a,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*3,baseRadius:Math.random()*(i*.15)+(t?100:150),radius:0,colorBase:u[c%u.length],angle:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.02+.01});let h=i/2,m=a/2,y=i/2,w=a/2;const k=c=>{t||(y=c.clientX,w=c.clientY)},P=c=>{t||c.touches.length>0&&(y=c.touches[0].clientX,w=c.touches[0].clientY)};window.addEventListener("mousemove",k),window.addEventListener("touchmove",P,{passive:!0});const f=()=>{r.clearRect(0,0,i,a),h+=(y-h)*.05,m+=(w-m)*.05,r.globalCompositeOperation=t?"source-over":"screen",g.forEach((c,p)=>{c.angle+=c.pulseSpeed,c.radius=c.baseRadius+Math.sin(c.angle)*(c.baseRadius*.4),c.x+=c.vx,c.y+=c.vy,c.x<-c.radius&&(c.vx*=-1),c.x>i+c.radius&&(c.vx*=-1),c.y<-c.radius&&(c.vy*=-1),c.y>a+c.radius&&(c.vy*=-1);const v=c.x-h,S=c.y-m,C=Math.sqrt(v*v+S*S);if(C<400){const z=(400-C)/400;c.x+=v/C*z*3,c.y+=S/C*z*3}const E=r.createRadialGradient(c.x,c.y,0,c.x,c.y,c.radius);E.addColorStop(0,c.colorBase+"0.7)"),E.addColorStop(.5,c.colorBase+"0.3)"),E.addColorStop(1,c.colorBase+"0)"),r.fillStyle=E,r.beginPath(),r.arc(c.x,c.y,c.radius,0,Math.PI*2),r.fill()}),t||(l=requestAnimationFrame(f))};return f(),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",k),window.removeEventListener("touchmove",P),l&&cancelAnimationFrame(l)}},[]),o.jsx("canvas",{ref:e,className:"lava-canvas",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})},Yf=({onOpenResume:e})=>o.jsxs("section",{id:"about",className:"hero-apple-section",children:[o.jsx("div",{className:"container hero-apple-container",children:o.jsxs("div",{className:"hero-intro-card animate-fade-in",style:{animationDelay:"0.1s"},children:[o.jsxs("div",{className:"hero-card-top",children:[o.jsx("div",{className:"hero-card-grain"}),o.jsxs("div",{className:"hero-card-top-bg",children:[o.jsx("div",{className:"mesh-blob mesh-blob-1"}),o.jsx("div",{className:"mesh-blob mesh-blob-2"}),o.jsx("div",{className:"mesh-blob mesh-blob-3"}),o.jsx("div",{className:"mesh-blob mesh-blob-4"})]}),o.jsx("div",{className:"hero-photo-wrapper",children:o.jsx("img",{src:"/IMG_1984.jpeg",alt:"Mohammed Wasif Ali",className:"hero-photo"})})]}),o.jsxs("div",{className:"hero-card-bottom",children:[o.jsx("h1",{className:"hero-apple-title",children:"Mohammed Wasif Ali."}),o.jsx("p",{className:"hero-apple-subtitle",children:"CS student with hands-on experience in full-stack development, machine learning, and applied AI research. Built end-to-end systems using Python, PyTorch, FastAPI, React, and SQL across healthcare and social-impact projects, backed by peer-reviewed conference papers and a Best Paper Award."})]})]})}),o.jsx("style",{children:`
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
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
          position: relative;
        }

        /* Top Half Container */
        .hero-card-top {
          height: 240px;
          position: relative;
          background: transparent; /* Changed from dark blue to transparent so it naturally merges with white card */
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
          /* Mask makes the gas naturally dissipate at the bottom into the white card */
          mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
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
          background: rgba(37, 99, 235, 0.8); /* Sapphire */
          animation: meshSway1 6s infinite alternate ease-in-out;
        }

        .mesh-blob-2 {
          bottom: -40%; right: -10%;
          width: 80%; height: 110%;
          background: rgba(6, 182, 212, 0.8); /* Cyber Cyan */
          animation: meshSway2 8s infinite alternate ease-in-out;
        }

        .mesh-blob-3 {
          top: 20%; left: 30%;
          width: 60%; height: 110%;
          background: rgba(16, 185, 129, 0.6); /* Emerald Green */
          animation: meshSway3 7s infinite alternate ease-in-out;
        }
        
        .mesh-blob-4 {
          top: -20%; right: 20%;
          width: 70%; height: 100%;
          background: rgba(79, 70, 229, 0.8); /* Indigo */
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
            height: 140px; /* Slight adjustment to fit the left-aligned layout perfectly */
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
 */const Jf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),I=(e,t)=>{const n=R.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:u,...d},g)=>R.createElement("svg",{ref:g,...Xf,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Jf(e)}`,s].join(" "),...d},[...t.map(([h,m])=>R.createElement(h,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=I("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=I("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=I("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=I("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=I("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=I("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=I("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=I("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=I("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=I("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=I("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=I("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=I("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=I("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=I("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=I("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=I("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=I("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=I("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=I("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=I("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=I("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=I("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=I("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=I("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=I("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=I("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=I("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),cp=({onModalChange:e})=>{const[t,n]=R.useState(null),[r,l]=R.useState(null),[i,a]=R.useState(!1),[s,u]=R.useState({x:0,y:0}),d=()=>{a(!0),setTimeout(()=>{n(null),a(!1)},650)};it.useEffect(()=>{e&&e(!!t)},[t,e]);const g=[{id:"sci-2026-rare-syndrome",title:"Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images",venue:"SCI 2026 Conference",award:"Best Paper Award 🏆",status:"Published / Accepted",year:"2026",role:"Lead Model Development & ArcFace Pipeline",summary:"Engineered an ArcFace deep metric learning pipeline paired with prototypical classifiers to identify rare genetic syndromes from limited clinical facial imagery.",metrics:[{label:"Paper Distinction",val:"Best Paper Award"},{label:"Architecture",val:"ArcFace + Prototypical Nets"},{label:"Domain",val:"Rare Disease Clinical AI"}],tags:["ArcFace","Few-Shot Learning","Clinical AI","PyTorch"],abstract:"Rare genetic syndromes pose a severe diagnostic bottleneck due to scarce clinical samples. In this paper, we propose a few-shot deep metric learning model leveraging customized ArcFace loss and metric-space prototypical embeddings. The system projects high-dimensional facial dysmorphology features into a tightly clustered embedding space, enabling robust zero/few-shot syndrome classification even with fewer than 5 clinical photos per syndrome class.",citation:'Ali, M.W. et al. "Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images" — SCI 2026 Conference. (Best Paper Award)'},{id:"cml-2026-fgdd",title:"Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset",venue:"CML 2026 Conference",award:null,status:"Accepted",year:"2026",role:"Designed Framework & Led Experiments",summary:"Achieved high accuracy by combining architectures for the FGDD multi-modal genetic dataset.",metrics:[{label:"Model",val:"Few-Shot Framework"},{label:"Dataset",val:"FGDD Multimodal"},{label:"Domain",val:"Clinical Genetics"}],tags:["FGDD","Few-Shot","Clinical AI"],abstract:"Designed the few-shot framework and led experiments for the detection of genetic syndromes using the FGDD dataset.",citation:'Ali, M.W. et al. "Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset" — CML 2026 Conference.'},{id:"iccis-2026-rag",title:"Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support",venue:"ICCIS 2026 (Springer LNNS, Scopus-indexed)",award:null,status:"Accepted",year:"2026",role:"Author",summary:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.",metrics:[{label:"Model",val:"Multimodal RAG"},{label:"Domain",val:"Mental Health"},{label:"Publisher",val:"Springer LNNS"}],tags:["Multimodal RAG","Emotion AI","SpeechBrain"],abstract:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses.",citation:'Ali, M.W. et al. "Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support" — Accepted, ICCIS 2026 (Springer LNNS, Scopus-indexed).'},{id:"uav-video-2026",title:"Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning",venue:"Manuscript in Preparation",award:null,status:"In Preparation / 2026",year:"2026",role:"Author",summary:"Developed a Video Swin Transformer framework tailored for aerial spatial-temporal event categorization on the benchmark ERA dataset.",metrics:[{label:"Backbone",val:"Deep Spatio-Temporal"},{label:"Domain",val:"UAV Spatio-Temporal"},{label:"Status",val:"In Preparation"}],tags:["Spatio-Temporal","UAV Vision","PyTorch"],abstract:"Unmanned Aerial Vehicle (UAV) video streams suffer from severe perspective shifts, camera jitter, and complex spatial dynamics. This research implements deep spatio-temporal learning to capture long-range spatial and temporal attention across aerial video frames.",citation:'Ali, M.W. et al. "Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning" — Manuscript in preparation, 2026.'}],h=m=>{navigator.clipboard.writeText(m.citation),l(m.id),setTimeout(()=>l(null),2500)};return o.jsxs("section",{id:"research",className:"section-padding research-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Research & Publications"}),o.jsx("h2",{children:"Peer-Reviewed Works"}),o.jsx("p",{children:"Bridging state-of-the-art computer vision, few-shot metric learning, and clinical AI frameworks."})]}),o.jsxs("div",{className:"featured-apple-card glass-card",children:[o.jsxs("div",{className:"featured-header",children:[o.jsxs("span",{className:"badge badge-gold",children:[o.jsx(Za,{size:13})," Best Paper Award"]}),o.jsx("span",{className:"badge badge-ai",children:"SCI 2026 Conference"})]}),o.jsxs("div",{className:"featured-content",children:[o.jsxs("div",{className:"featured-info",children:[o.jsx("h3",{className:"featured-title",children:"Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images"}),o.jsx("p",{className:"featured-summary",children:"Pioneered an ArcFace deep metric learning pipeline capable of classifying rare dysmorphological genetic syndromes from minimal sample counts."}),o.jsxs("div",{className:"featured-tags",children:[o.jsx("span",{className:"tech-pill",children:"ArcFace"}),o.jsx("span",{className:"tech-pill",children:"Prototypical Networks"}),o.jsx("span",{className:"tech-pill",children:"Few-Shot AI"}),o.jsx("span",{className:"tech-pill",children:"Clinical Diagnostics"})]})]}),o.jsxs("div",{className:"featured-action-box",children:[o.jsxs("div",{className:"feat-stat",children:[o.jsx("span",{className:"stat-big",children:"SCI 2026"}),o.jsx("span",{className:"stat-desc",children:"Best Paper Distinction"})]}),o.jsxs("button",{onClick:m=>{const y=m.currentTarget.getBoundingClientRect(),w=y.left+y.width/2-window.innerWidth/2,k=y.top-window.innerHeight/2;u({x:w,y:k}),n(g[0])},className:"btn btn-primary w-full",children:[o.jsx("span",{children:"Read Overview"}),o.jsx(et,{size:15})]})]})]})]}),o.jsx("div",{className:"publications-apple-grid",children:g.map(m=>o.jsxs("div",{className:"pub-apple-card glass-card",children:[o.jsxs("div",{className:"pub-card-top",children:[m.award?o.jsxs("span",{className:"badge badge-gold",children:[o.jsx(Za,{size:12})," ",m.award]}):o.jsx("span",{className:"badge badge-cyan",children:m.venue}),o.jsx("span",{className:"code-font text-dim",style:{fontSize:"0.78rem"},children:m.year})]}),o.jsx("h4",{className:"pub-title",children:m.title}),o.jsx("p",{className:"pub-role",children:m.role}),o.jsx("p",{className:"pub-desc",children:m.summary}),o.jsx("div",{className:"pub-tags",children:m.tags.map((y,w)=>o.jsx("span",{className:"tech-pill",children:y},w))}),o.jsxs("div",{className:"pub-actions",children:[o.jsxs("button",{onClick:y=>{const w=y.currentTarget.getBoundingClientRect(),k=w.left+w.width/2-window.innerWidth/2,P=w.top-window.innerHeight/2;u({x:k,y:P}),n(m)},className:"btn btn-secondary btn-sm",children:[o.jsx(mc,{size:14}),o.jsx("span",{children:"Abstract"})]}),o.jsx("button",{onClick:()=>h(m),className:"btn btn-secondary btn-sm",children:r===m.id?o.jsx("span",{className:"text-emerald",children:"Copied"}):o.jsxs(o.Fragment,{children:[o.jsx(es,{size:14}),o.jsx("span",{children:"Cite"})]})})]})]},m.id))})]}),t&&o.jsx("div",{className:`modal-backdrop ${i?"closing":""}`,onClick:d,children:o.jsxs("div",{className:`modal-content glass-card ${i?"closing":""}`,onClick:m=>m.stopPropagation(),style:{transformOrigin:`calc(50% + ${s.x}px) calc(50% + ${s.y}px)`},children:[o.jsx("button",{className:"modal-close-btn",onClick:d,children:o.jsx(Uo,{size:18})}),o.jsxs("div",{className:"modal-header",children:[o.jsx("span",{className:"badge badge-cyan",children:t.venue}),o.jsx("h3",{className:"modal-title mt-2",children:t.title}),o.jsx("p",{className:"modal-authors",children:"Authors: Mohammed Wasif Ali et al."})]}),o.jsxs("div",{className:"modal-body",children:[o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"Abstract"}),o.jsx("p",{className:"abstract-text",children:t.abstract})]}),o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"Key Metrics & Architecture"}),o.jsx("div",{className:"modal-metrics-grid",children:t.metrics.map((m,y)=>o.jsxs("div",{className:"modal-metric-card",children:[o.jsx("div",{className:"modal-m-val",children:m.val}),o.jsx("div",{className:"modal-m-lbl",children:m.label})]},y))})]})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsxs("button",{onClick:()=>h(t),className:"btn btn-secondary",children:[o.jsx(es,{size:15}),o.jsx("span",{children:r===t.id?"Citation Copied":"Copy Citation"})]}),o.jsx("button",{onClick:d,className:"btn btn-primary",children:o.jsx("span",{children:"Close"})})]})]})}),o.jsx("style",{children:`
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
      `})]})},dp=({onModalChange:e})=>{const[t,n]=R.useState("All"),[r,l]=R.useState(null),[i,a]=R.useState({left:0,width:0,opacity:0}),[s,u]=R.useState(!1),[d,g]=R.useState({x:0,y:0}),h=it.useRef([]),m=()=>{u(!0),setTimeout(()=>{l(null),u(!1)},650)},y=["All","Clinical AI","Few-Shot Learning","Generative AI","Blockchain","Systems & Networks","Computer Vision"];it.useEffect(()=>{e&&e(!!r)},[r,e]),it.useEffect(()=>{const P=y.indexOf(t),f=h.current[P];f&&a({left:f.offsetLeft,width:f.offsetWidth,opacity:1})},[t,y]);const w=[{id:"few-shot-fgdd",title:"Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset",category:"Few-Shot Learning",period:"Sept 2025 - Feb 2026",role:"Team Lead (Size: 4)",icon:Dn,highlightBadge:"96.56% Acc",accuracy:"Top-5: 96.56%",summary:"Designed a few-shot learning framework integrating FT-Transformer and Prototypical Networks using PyTorch for tabular clinical data.",tech:["PyTorch","Python","FT-Transformer","Prototypical Networks"],features:["Integrated FT-Transformer and Prototypical Networks.","Applied to tabular clinical data classification of genetic syndromes.","Achieved 96.56% Top-5 accuracy in a 10-way, 3-shot evaluation.","Demonstrated a privacy-preserving alternative to image-based diagnostics."],deepDive:"Designed a few-shot learning framework integrating FT-Transformer and Prototypical Networks using PyTorch and Python for tabular clinical data classification of genetic syndromes. Achieved 96.56% Top-5 accuracy in a 10-way, 3-shot evaluation, demonstrating a privacy-preserving alternative to image-based diagnostics."},{id:"event-recognition-uav",title:"Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning",category:"Computer Vision",period:"Sept 2025 - Feb 2026",role:"Team Member (Size: 4)",icon:up,highlightBadge:"69.52% Acc",accuracy:"69.52% Acc",summary:"Developed a Video Swin Transformer-based spatio-temporal model using PyTorch and CUDA for UAV aerial event classification.",tech:["PyTorch","CUDA","Video Swin Transformer"],features:["Developed a Video Swin Transformer-based spatio-temporal model.","Trained the model on the university GPU server.","Achieved 69.52% classification accuracy on the ERA dataset, outperforming the FuTH-Net baseline.","Implemented the model training pipeline and video preprocessing."],deepDive:"Developed a Video Swin Transformer-based spatio-temporal model using PyTorch and CUDA for UAV aerial event classification on the ERA dataset. Trained the model on the university GPU server and achieved 69.52% classification accuracy, outperforming the FuTH-Net baseline. Implemented the model training pipeline and video preprocessing."},{id:"subway-route-opt",title:"Subway System Route Optimization Model",category:"Systems & Networks",period:"Aug 2024 - Nov 2024",role:"Team Lead (Size: 4)",icon:Jl,highlightBadge:"Algorithm Opt",accuracy:"Optimal Route",summary:"Designed a graph-based metro routing optimization system using C++ and Python implementing Dijkstra’s shortest-path algorithm.",tech:["C++","Python","Graph Algorithms"],features:["Designed a graph-based metro routing optimization system.","Implemented Dijkstra’s shortest-path algorithm to compute optimal routes.","Minimized travel time between stations.","Simulated traffic conditions to evaluate routing efficiency for smart city transportation."],deepDive:"Designed a graph-based metro routing optimization system using C++ and Python implementing Dijkstra’s shortest-path algorithm to compute optimal routes between stations and minimize travel time. Simulated traffic conditions to evaluate routing efficiency for smart city transportation planning."},{id:"cevi-clinical-ai",title:"Multimodal Framework for Venous Disease Assessment (CEVI)",category:"Clinical AI",period:"Jan 2026 - Present",role:"Team Member (Size: 4)",icon:sp,highlightBadge:"Clinical AI Deployment",accuracy:"77.17% CEAP Acc",summary:"Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection.",tech:["PyTorch","MedSAM","FastAPI","React","SQL"],features:["Achieved 77.17% CEAP classification accuracy to support clinical decision-making.","MedSAM zero-shot segmentation for automated venous ulcer and lesion region highlighting.","Doppler reflux detection to support diagnostics.","Built a longitudinal patient data pipeline using PyTorch, React, and FastAPI."],deepDive:"Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection to support clinical decision-making. Achieved 77.17% CEAP classification accuracy and built a longitudinal patient data pipeline using PyTorch, React, and FastAPI."},{id:"few-shot-syndromes",title:"Few-Shot Recognition of Rare Genetic Syndromes",category:"Few-Shot Learning",period:"Sept 2025 - Dec 2025",role:"Team Lead (Size: 4)",icon:Dn,highlightBadge:"Best Paper Award",accuracy:"Improved Top-K",summary:"Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure.",tech:["PyTorch","ArcFace","Few-Shot Learning","Python"],features:["Prototype-based few-shot recognition system using ArcFace embeddings.","Handled severe class imbalance during training on GPU-accelerated infrastructure.","Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset.","Research earned a Best Paper Award at SCI 2026."],deepDive:"Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure. Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset in low-data settings; work earned a Best Paper Award."},{id:"emotion-aware-rag",title:"Emotion-Aware Multimodal RAG for Mental Health Support",category:"Generative AI",period:"Jan 2026 - May 2026",role:"Team Member (Size: 4)",icon:Dn,highlightBadge:"ICCIS 2026 Paper",accuracy:"Multimodal",summary:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.",tech:["PyTorch","BLIP","Whisper","SpeechBrain","TTS"],features:["Emotion-aware multimodal Retrieval-Augmented Generation framework.","Integrates BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.","Processes image, text, and voice input to retrieve emotionally aligned responses.","Accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed)."],deepDive:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses; accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed)."},{id:"blockchain-access",title:"Blockchain-Based Tokenised Access Control System",category:"Blockchain",period:"Jan 2026 - May 2026",role:"Team Lead (Size: 4)",icon:Jl,highlightBadge:"Decentralised Auth",accuracy:"Immutable Log",summary:"Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask.",tech:["Solidity","Ethereum","Hardhat","Ethers.js","MetaMask"],features:["Decentralised corporate access-control system on Solidity/Ethereum.","Implemented role-based token authorisation.","Enabled token expiry and secure transfer mechanisms.","Provided an immutable blockchain audit log for compliance and security."],deepDive:"Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask. Implemented role-based token authorisation, token expiry/transfer, and an immutable blockchain audit log."},{id:"5g-network-slicing",title:"5G Network Slice Orchestration with Dynamic Resource Mgmt",category:"Systems & Networks",period:"Jan 2026 - May 2026",role:"Team Lead (Size: 4)",icon:Jl,highlightBadge:"Network Simulation",accuracy:"Dynamic Allocation",summary:"Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes.",tech:["Python","Flask","React.js","Scapy"],features:["5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes.","Dynamic resource allocation based on real-time demands.","Real-time traffic monitoring and visualization.","Built using Python, Flask, React.js, and Scapy."],deepDive:"Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes. Built dynamic resource allocation and real-time traffic monitoring using Python, Flask, React.js, and Scapy."}],k=t==="All"?w:w.filter(P=>P.category===t);return o.jsxs("section",{id:"projects",className:"section-padding projects-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Portfolio & Systems"}),o.jsx("h2",{children:"Featured AI Projects"}),o.jsx("p",{children:"End-to-end machine learning pipelines, clinical diagnostic tools, and high-performance algorithms."})]}),o.jsx("div",{className:"segmented-control-container",children:o.jsxs("div",{className:"segmented-control",style:{position:"relative"},children:[o.jsx("div",{style:{position:"absolute",top:"4px",height:"calc(100% - 8px)",left:`${i.left}px`,width:`${i.width}px`,opacity:i.opacity,transition:"all 1.4s cubic-bezier(0.22, 1, 0.36, 1)",borderRadius:"9999px",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)",backdropFilter:"blur(30px) saturate(250%)",WebkitBackdropFilter:"blur(30px) saturate(250%)",border:"1px solid rgba(255, 255, 255, 0.6)",boxShadow:"inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2)",zIndex:1}}),y.map((P,f)=>o.jsx("button",{ref:c=>h.current[f]=c,onClick:()=>n(P),className:`segment-btn ${t===P?"active":""}`,style:{position:"relative",zIndex:t===P?2:0,transition:"color 0.8s ease"},children:P},P))]})}),o.jsx("div",{className:"projects-apple-grid",children:k.map(P=>o.jsxs("div",{className:"project-apple-card glass-card",children:[o.jsxs("div",{className:"card-top-row",children:[o.jsx("span",{className:"badge badge-ai",children:P.category}),o.jsx("span",{className:"metric-tag code-font",children:P.accuracy})]}),o.jsx("h3",{className:"project-apple-title",children:P.title}),o.jsx("p",{className:"project-apple-summary",children:P.summary}),o.jsx("div",{className:"project-apple-tech",children:P.tech.map((f,c)=>o.jsx("span",{className:"tech-pill",children:f},c))}),o.jsxs("div",{className:"project-apple-footer",children:[o.jsx("span",{className:"role-text",children:P.role}),o.jsxs("button",{onClick:f=>{const c=f.currentTarget.getBoundingClientRect(),p=c.left+c.width/2-window.innerWidth/2,v=c.top-window.innerHeight/2;g({x:p,y:v}),l(P)},className:"btn btn-secondary btn-sm pill-action",children:[o.jsx("span",{children:"Details"}),o.jsx(et,{size:14})]})]})]},P.id))})]}),r&&o.jsx("div",{className:`modal-backdrop ${s?"closing":""}`,onClick:m,children:o.jsxs("div",{className:`modal-content glass-card ${s?"closing":""}`,onClick:P=>P.stopPropagation(),style:{transformOrigin:`calc(50% + ${d.x}px) calc(50% + ${d.y}px)`},children:[o.jsx("button",{className:"modal-close-btn",onClick:m,children:o.jsx(Uo,{size:18})}),o.jsxs("div",{className:"modal-header",children:[o.jsx("span",{className:"badge badge-cyan",children:r.category}),o.jsx("h3",{className:"modal-title mt-2",children:r.title}),o.jsxs("p",{className:"modal-authors",children:[r.role," • ",r.period]})]}),o.jsxs("div",{className:"modal-body",children:[o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"System Architecture Overview"}),o.jsx("p",{className:"abstract-text",children:r.deepDive})]}),o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"Key Capabilities"}),o.jsx("ul",{className:"modal-bullet-list",children:r.features.map((P,f)=>o.jsxs("li",{children:[o.jsx(ep,{size:14,className:"text-blue flex-shrink-0"}),o.jsx("span",{children:P})]},f))})]}),o.jsxs("div",{className:"modal-section",children:[o.jsx("h4",{children:"Tech Stack"}),o.jsx("div",{className:"project-apple-tech",children:r.tech.map((P,f)=>o.jsx("span",{className:"tech-pill",children:P},f))})]})]}),o.jsx("div",{className:"modal-footer",children:o.jsx("button",{onClick:m,className:"btn btn-primary w-full",children:o.jsx("span",{children:"Close"})})})]})}),o.jsx("style",{children:`
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
      `})]})},fp=()=>{const[e,t]=R.useState("All"),[n,r]=R.useState({left:0,width:0,opacity:0}),l=it.useRef([]),i=["All","ML & Deep Learning","Languages & Core CS","Data & Analytics","Systems & Infrastructure"];it.useEffect(()=>{const s=i.indexOf(e),u=l.current[s];u&&r({left:u.offsetLeft,width:u.offsetWidth,opacity:1})},[e,i]);const a=[{category:"ML & Deep Learning",icon:Dn,color:"#5e5ce6",skills:["PyTorch","Scikit-learn","Few-Shot Learning","Transformer Architectures","Deep Learning"]},{category:"Languages & Core CS",icon:pc,color:"#ff9500",skills:["Python","C","C++","SQL","Data Structures & Algorithms","OS, DBMS & OOP"]},{category:"Data & Analytics",icon:tp,color:"#30b0c7",skills:["Pandas","NumPy","Exploratory Data Analysis","Data Preprocessing","Feature Engineering"]},{category:"Systems & Infrastructure",icon:ap,color:"#34c759",skills:["Linux","Git","Cloud Computing Concepts","FastAPI","React"]}];return o.jsxs("section",{id:"skills",className:"section-padding skills-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Technical Competencies"}),o.jsx("h2",{children:"Skills & Technologies"}),o.jsx("p",{children:"Frameworks, languages, and infrastructure tools utilized in ML engineering and clinical systems."})]}),o.jsx("div",{className:"segmented-control-container",style:{display:"flex",justifyContent:"center",marginBottom:"3rem"},children:o.jsxs("div",{className:"segmented-control",style:{display:"inline-flex",background:"rgba(0,0,0,0.05)",padding:"4px",borderRadius:"9999px",flexWrap:"wrap",justifyContent:"center",gap:"2px",position:"relative"},children:[o.jsx("div",{style:{position:"absolute",top:"4px",height:"calc(100% - 8px)",left:`${n.left}px`,width:`${n.width}px`,opacity:n.opacity,transition:"all 1.4s cubic-bezier(0.22, 1, 0.36, 1)",borderRadius:"9999px",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)",backdropFilter:"blur(30px) saturate(250%)",WebkitBackdropFilter:"blur(30px) saturate(250%)",border:"1px solid rgba(255, 255, 255, 0.6)",boxShadow:"inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2)",zIndex:1}}),i.map((s,u)=>o.jsx("button",{ref:d=>l.current[u]=d,onClick:()=>t(s),style:{padding:"0.6rem 1.2rem",borderRadius:"9999px",border:"none",background:"transparent",color:e===s?"#1d1d1f":"#6e6e73",fontWeight:e===s?"600":"500",fontSize:"0.9rem",cursor:"pointer",transition:"all 0.8s ease",position:"relative",zIndex:e===s?2:0},children:s},s))]})}),o.jsx("div",{className:"skills-apple-grid",children:a.filter(s=>e==="All"||s.category===e).map(s=>{const u=s.icon;return o.jsxs("div",{className:"skill-apple-card glass-card",children:[o.jsxs("div",{className:"group-card-header",children:[o.jsx("div",{className:"icon-wrapper",style:{color:s.color,background:`${s.color}15`},children:o.jsx(u,{size:22})}),o.jsx("h3",{children:s.category})]}),o.jsx("div",{className:"premium-skills-container",children:s.skills.map(d=>o.jsxs("div",{className:"premium-skill-pill",children:[o.jsx("span",{className:"pill-dot",style:{background:s.color,boxShadow:`0 0 8px ${s.color}`}}),d]},d))})]},s.category)})})]}),o.jsx("style",{children:`
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
      `})]})},mp=({size:e=18})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),hp=()=>{const[e,t]=R.useState({name:"",email:"",subject:"",message:""}),[n,r]=R.useState(!1),[l,i]=R.useState(!1),[a,s]=R.useState(null),u=h=>{const{name:m,value:y}=h.target;t(w=>({...w,[m]:y}))},d=h=>{h.preventDefault(),!(!e.email||!e.message)&&(r(!0),setTimeout(()=>{r(!1),i(!0),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>i(!1),5e3)},1e3))},g=(h,m)=>{navigator.clipboard.writeText(h),s(m),setTimeout(()=>s(null),2500)};return o.jsxs("section",{id:"contact",className:"section-padding contact-apple-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"sub-tag",children:"Get in Touch"}),o.jsx("h2",{children:"Connect & Collaborate"}),o.jsx("p",{children:"Open for AI Engineering positions, clinical research initiatives, or technical inquiries."})]}),o.jsxs("div",{className:"contact-apple-grid",children:[o.jsxs("div",{className:"contact-apple-info",children:[o.jsxs("div",{className:"glass-card contact-card-apple",children:[o.jsx("h3",{children:"Contact Details"}),o.jsx("p",{className:"card-sub-apple",children:"Reach out directly via email or phone."}),o.jsxs("div",{className:"contact-row-apple",children:[o.jsx(wl,{size:18,className:"text-muted"}),o.jsxs("div",{className:"c-text",children:[o.jsx("span",{className:"c-lbl",children:"Email"}),o.jsx("span",{className:"c-val code-font",children:"mdwali0912@gmail.com"})]}),o.jsx("button",{onClick:()=>g("mdwali0912@gmail.com","email"),className:"btn-copy-apple",title:"Copy Email",children:a==="email"?o.jsx(Xl,{size:15,className:"text-emerald"}):o.jsx(qa,{size:15})})]}),o.jsxs("div",{className:"contact-row-apple",children:[o.jsx(yc,{size:18,className:"text-muted"}),o.jsxs("div",{className:"c-text",children:[o.jsx("span",{className:"c-lbl",children:"Phone"}),o.jsx("span",{className:"c-val code-font",children:"+91 9482892540"})]}),o.jsx("button",{onClick:()=>g("+91 9482892540","phone"),className:"btn-copy-apple",title:"Copy Phone",children:a==="phone"?o.jsx(Xl,{size:15,className:"text-emerald"}):o.jsx(qa,{size:15})})]}),o.jsxs("div",{className:"contact-row-apple",children:[o.jsx(Bo,{size:18,className:"text-muted"}),o.jsxs("div",{className:"c-text",children:[o.jsx("span",{className:"c-lbl",children:"Location"}),o.jsx("span",{className:"c-val",children:"Hubballi, Karnataka, India"})]})]})]}),o.jsxs("div",{className:"glass-card social-card-apple",children:[o.jsx("h4",{children:"Profiles"}),o.jsxs("div",{className:"social-apple-row",children:[o.jsxs("a",{href:"https://github.com/mohammedwasifali",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(hc,{size:18}),o.jsx("span",{children:"GitHub"}),o.jsx(et,{size:14})]}),o.jsxs("a",{href:"https://www.linkedin.com/in/mohammed-wasif-ali-27484b2a2/",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(vc,{size:18}),o.jsx("span",{children:"LinkedIn"}),o.jsx(et,{size:14})]}),o.jsxs("a",{href:"https://leetcode.com/u/3IggeK1dwH/",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(pc,{size:18}),o.jsx("span",{children:"LeetCode"}),o.jsx(et,{size:14})]}),o.jsxs("a",{href:"https://www.instagram.com/mohammed_wasif_ali/",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(lp,{size:18}),o.jsx("span",{children:"Instagram"}),o.jsx(et,{size:14})]}),o.jsxs("a",{href:"https://www.threads.com/@mohammed_wasif_ali",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(ip,{size:18}),o.jsx("span",{children:"Threads"}),o.jsx(et,{size:14})]}),o.jsxs("a",{href:"https://x.com/wasif51606",target:"_blank",rel:"noopener noreferrer",className:"social-apple-btn",children:[o.jsx(mp,{size:18}),o.jsx("span",{children:"X"}),o.jsx(et,{size:14})]})]})]})]}),o.jsx("div",{className:"contact-apple-form-col",children:o.jsxs("div",{className:"glass-card form-card-apple",children:[o.jsx("h3",{children:"Send Message"}),l?o.jsxs("div",{className:"form-success-apple",children:[o.jsx(Xl,{size:40,className:"text-emerald"}),o.jsx("h4",{children:"Message Delivered"}),o.jsx("p",{children:"Mohammed Wasif Ali will respond to your email shortly."})]}):o.jsxs("form",{onSubmit:d,className:"contact-apple-form mt-3",children:[o.jsxs("div",{className:"form-row-2",children:[o.jsxs("div",{className:"input-group-apple",children:[o.jsx("label",{htmlFor:"name",children:"Name"}),o.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:u,placeholder:"Your Name",required:!0})]}),o.jsxs("div",{className:"input-group-apple",children:[o.jsx("label",{htmlFor:"email",children:"Email"}),o.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:u,placeholder:"you@example.com",required:!0})]})]}),o.jsxs("div",{className:"input-group-apple",children:[o.jsx("label",{htmlFor:"subject",children:"Subject"}),o.jsx("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:u,placeholder:"e.g. AI Engineering Collaboration"})]}),o.jsxs("div",{className:"input-group-apple",children:[o.jsx("label",{htmlFor:"message",children:"Message"}),o.jsx("textarea",{id:"message",name:"message",rows:"4",value:e.message,onChange:u,placeholder:"Share your message or opportunity details...",required:!0})]}),o.jsx("button",{type:"submit",className:"btn btn-primary w-full mt-2",disabled:n,children:n?"Sending...":"Send Message"})]})]})})]})]}),o.jsx("style",{children:`
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
      `})]})},vp=({onClose:e})=>{const[t,n]=it.useState(!1),r=()=>{n(!0),setTimeout(()=>{e()},650)},l=()=>{window.print()};return o.jsxs("div",{className:`modal-backdrop ${t?"closing":""}`,onClick:r,children:[o.jsxs("div",{className:`modal-content resume-modal-card ${t?"closing":""}`,onClick:i=>i.stopPropagation(),children:[o.jsxs("div",{className:"resume-modal-top-bar no-print",children:[o.jsxs("div",{className:"bar-title",children:[o.jsx(gc,{size:18,className:"icon-cyan"}),o.jsx("span",{children:"Mohammed Wasif Ali - Curriculum Vitae"})]}),o.jsxs("div",{className:"bar-actions",children:[o.jsxs("button",{onClick:l,className:"resume-print-btn",children:[o.jsx(op,{size:14}),o.jsx("span",{children:"Print / Save PDF"})]}),o.jsx("button",{onClick:r,className:"modal-close-btn-static",children:o.jsx(Uo,{size:20})})]})]}),o.jsxs("div",{className:"printable-resume-body",children:[o.jsxs("div",{className:"resume-header",children:[o.jsx("h1",{className:"resume-name",children:"MOHAMMED WASIF ALI"}),o.jsxs("div",{className:"resume-contact-line code-font",children:[o.jsxs("span",{children:[o.jsx(Bo,{size:12})," Karnataka, India"]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:[o.jsx(wl,{size:12})," mdwali0912@gmail.com"]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:[o.jsx(yc,{size:12})," +91 9482892540"]}),o.jsx("span",{children:"•"}),o.jsx("span",{children:o.jsx("a",{href:"https://github.com/mohammedwasifali",style:{color:"inherit",textDecoration:"none"},children:"GitHub"})}),o.jsx("span",{children:"•"}),o.jsx("span",{children:o.jsx("a",{href:"https://www.linkedin.com/in/mohammed-wasif-ali-27484b2a2/",style:{color:"inherit",textDecoration:"none"},children:"LinkedIn"})})]}),o.jsx("p",{className:"resume-summary-text",children:"Final-year CS student with hands-on experience in full-stack development, machine learning, and applied AI research. Built end-to-end systems using Python, PyTorch, FastAPI, React, and SQL across healthcare and social-impact projects, backed by peer-reviewed conference papers and a Best Paper Award."})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"EDUCATION"}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"B.E. in Computer Science & Engineering"})," — KLE Technological University, Hubballi",o.jsx("span",{className:"resume-date",children:"Aug 2023 – Jun 2027"})]}),o.jsxs("div",{className:"resume-item-sub",children:[o.jsx("strong",{children:"CGPA: 8.96 / 10"})," | Relevant Coursework: DSA, ML & Deep Learning, Generative AI, DBMS, Cloud Computing"]})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"TECHNICAL SKILLS"}),o.jsxs("div",{className:"resume-skills-block",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Programming:"})," Python (3 yrs), C (3 yrs), C++ (2 yrs), SQL (2 yrs)"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Machine Learning & AI:"})," PyTorch, Scikit-learn, Few-Shot Learning, Transformer Architectures, Deep Learning"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Data & Analytics:"})," Pandas, NumPy, Exploratory Data Analysis, Data Preprocessing & Feature Engineering"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Core CS:"})," Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Systems & Cloud:"})," Linux, Cloud Computing Concepts, Git"]})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"PROJECTS"}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"Multimodal Framework for Venous Disease Assessment (CEVI)"}),o.jsx("span",{className:"resume-date",children:"Jan 2026 – Present"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Member"}),o.jsx("p",{className:"resume-item-body",children:"Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection to support clinical decision-making. Achieved 77.17% CEAP classification accuracy and built a longitudinal patient data pipeline using PyTorch, React, and FastAPI."})]}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images"}),o.jsx("span",{className:"resume-date",children:"Sept 2025 – Dec 2025"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Lead"}),o.jsx("p",{className:"resume-item-body",children:"Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure. Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset in low-data settings; work earned a Best Paper Award."})]}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"Emotion-Aware Multimodal RAG for Mental Health Support"}),o.jsx("span",{className:"resume-date",children:"Jan 2026 – May 2026"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Member"}),o.jsx("p",{className:"resume-item-body",children:"Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses; accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed)."})]}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"Blockchain-Based Tokenised Access Control System"}),o.jsx("span",{className:"resume-date",children:"Jan 2026 – May 2026"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Lead"}),o.jsx("p",{className:"resume-item-body",children:"Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask. Implemented role-based token authorisation, token expiry/transfer, and an immutable blockchain audit log."})]}),o.jsxs("div",{className:"resume-item",children:[o.jsxs("div",{className:"resume-item-header",children:[o.jsx("strong",{children:"5G Network Slice Orchestration with Dynamic Resource Management"}),o.jsx("span",{className:"resume-date",children:"Jan 2026 – May 2026"})]}),o.jsx("div",{className:"resume-item-sub",children:"Team of 4 · Team Lead"}),o.jsx("p",{className:"resume-item-body",children:"Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes. Built dynamic resource allocation and real-time traffic monitoring using Python, Flask, React.js, and Scapy."})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"RESEARCH & PUBLICATIONS"}),o.jsxs("ul",{className:"resume-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Ali, M.W. et al."}),' "Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset" — ',o.jsx("em",{children:"CML 2026 Conference"}),". Designed the few-shot framework and led experiments."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Ali, M.W. et al."}),' "Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images" — ',o.jsx("em",{children:"SCI 2026 Conference"}),". ",o.jsx("strong",{children:"Best Paper Award"}),". Led model development and ArcFace pipeline."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Ali, M.W. et al."}),' "Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support" — ',o.jsx("em",{children:"Accepted, ICCIS 2026 (Springer LNNS, Scopus-indexed)"}),"."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Ali, M.W. et al."}),' "Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning" — ',o.jsx("em",{children:"Manuscript in preparation, 2026"}),"."]})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"CERTIFICATIONS & ADDITIONAL COURSES"}),o.jsxs("ul",{className:"resume-list",children:[o.jsx("li",{children:"Mastering Data Structures & Algorithms using C and C++ — Udemy, 76 hours, 2026"}),o.jsx("li",{children:"JNCIA-Junos (Junos Associate) — HPE Juniper Networking, 2025"}),o.jsx("li",{children:"Jenkins for DevOps: Jenkins Configuration for DevOps — Infosys Springboard, 2025"}),o.jsx("li",{children:"DevOps Mindset: Understanding DevOps Tools — Infosys Springboard, 2025"}),o.jsx("li",{children:"Programming in C, C++, Java, and Python — KR Computers, Hubballi, India, 2023"})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"ACHIEVEMENTS & ACTIVITIES"}),o.jsxs("ul",{className:"resume-list",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Best Paper Award"})," — SCI 2026 Conference, for few-shot rare syndrome recognition research."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Participant"}),' — "Innovate with GolStats" Hackathon, University Grants Commission (MoE), 2025.']}),o.jsxs("li",{children:[o.jsx("strong",{children:"Volunteer Organiser"})," — DTSI Community Outreach Initiative, Dharwad (50+ residents engaged), 2022."]})]})]}),o.jsxs("div",{className:"resume-section",children:[o.jsx("h2",{className:"resume-sec-title",children:"LANGUAGES"}),o.jsx("p",{className:"resume-lang-text",children:"English (proficient) | Hindi (fluent) | Kannada (fluent) | Urdu (native)"})]})]})]}),o.jsx("style",{children:`
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
      `})]})},yp=({onOpenResume:e,isHidden:t})=>{const[n,r]=R.useState(!1);R.useEffect(()=>{let i=window.scrollY,a=!1;const s=()=>{a||(window.requestAnimationFrame(()=>{const d=window.scrollY;d>i&&d>150?r(!0):r(!1),i=d,a=!1}),a=!0)},u=d=>{d.clientY<100&&r(!1)};return window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("mousemove",u,{passive:!0}),()=>{window.removeEventListener("scroll",s),window.removeEventListener("mousemove",u)}},[]);const l=t||n;return o.jsxs("div",{className:`sticky-nav-wrapper ${l?"whoosh-out":""}`,children:[o.jsxs("div",{className:"hero-nav-tabs animate-fade-in",style:{animationDelay:"0.3s"},children:[o.jsxs("a",{href:"#projects",className:"hero-nav-tab",children:[o.jsx(np,{size:16}),o.jsx("span",{children:"Projects"})]}),o.jsxs("a",{href:"#research",className:"hero-nav-tab",children:[o.jsx(qf,{size:16}),o.jsx("span",{children:"Research"})]}),o.jsxs("a",{href:"#skills",className:"hero-nav-tab",children:[o.jsx(Dn,{size:16}),o.jsx("span",{children:"Skills"})]}),o.jsxs("a",{href:"#education",className:"hero-nav-tab",children:[o.jsx(gc,{size:16}),o.jsx("span",{children:"Education"})]}),o.jsxs("a",{href:"#contact",className:"hero-nav-tab",children:[o.jsx(wl,{size:16}),o.jsx("span",{children:"Contact"})]}),o.jsxs("button",{onClick:e,className:"hero-nav-tab",children:[o.jsx(mc,{size:16}),o.jsx("span",{children:"CV"})]})]}),o.jsx("style",{children:`
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
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          color: var(--text-main);
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255, 255, 255, 0.5);
        }

        .hero-nav-tab:hover {
          background: rgba(255, 255, 255, 0.55);
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          color: var(--accent-apple-blue);
        }
        
        @media (max-width: 768px) {
          .sticky-nav-wrapper {
            top: 0.5rem;
            margin-top: -1rem;
          }
          .hero-nav-tab {
            padding: 0.75rem 1.25rem;
            font-size: 0.85rem;
          }
        }
      `})]})};function xp(){const[e,t]=R.useState(!1),[n,r]=R.useState(!1),l=e||n;return o.jsxs("div",{className:"app-main-wrapper",children:[o.jsx(Kf,{}),o.jsx("div",{className:"grid-overlay"}),o.jsxs("main",{children:[o.jsx(Yf,{onOpenResume:()=>t(!0)}),o.jsx(yp,{onOpenResume:()=>t(!0),isHidden:l}),o.jsx(cp,{onModalChange:r}),o.jsx(dp,{onModalChange:r}),o.jsx(fp,{}),o.jsx(pp,{}),o.jsx(hp,{})]}),o.jsx(gp,{}),e&&o.jsx(vp,{onClose:()=>t(!1)})]})}Zl.createRoot(document.getElementById("root")).render(o.jsx(it.StrictMode,{children:o.jsx(xp,{})}));
