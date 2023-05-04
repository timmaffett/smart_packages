{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.hZ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ea"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ea"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ea(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={e1:function e1(){},
dW:function(a,b,c){if(H.dG(a,"$iH",[b],"$aH"))return new H.d7(a,[b,c])
return new H.bl(a,[b,c])},
cf:function(){return new P.bK("No element")},
h7:function(a,b,c){H.bI(a,0,J.Q(a)-1,b,c)},
bI:function(a,b,c,d,e){if(c-b<=32)H.h6(a,b,c,d,e)
else H.h5(a,b,c,d,e)},
h6:function(a,b,c,d,e){var u,t,s,r,q,p
for(u=b+1,t=J.a8(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.u()
q=q>0}else q=!1
if(!q)break
p=r-1
t.i(a,r,t.h(a,p))
r=p}t.i(a,r,s)}},
h5:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j=C.b.E(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.E(a4+a5,2),f=g-j,e=g+j,d=J.a8(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.u()
if(a2>0){u=a1
a1=a0
a0=u}d.i(a3,i,c)
d.i(a3,g,a)
d.i(a3,h,a1)
d.i(a3,f,d.h(a3,a4))
d.i(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.T(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.J()
if(p<0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.u()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.i(a3,r,d.h(a3,t))
n=t+1
d.i(a3,t,d.h(a3,s))
d.i(a3,s,q)
s=o
t=n
break}else{d.i(a3,r,d.h(a3,s))
d.i(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.J()
if(l<0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.u()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.u()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.J()
o=s-1
if(p<0){d.i(a3,r,d.h(a3,t))
n=t+1
d.i(a3,t,d.h(a3,s))
d.i(a3,s,q)
t=n}else{d.i(a3,r,d.h(a3,s))
d.i(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.i(a3,a4,d.h(a3,a2))
d.i(a3,a2,b)
a2=s+1
d.i(a3,a5,d.h(a3,a2))
d.i(a3,a2,a0)
H.bI(a3,a4,t-2,a6,a7)
H.bI(a3,s+2,a5,a6,a7)
if(m)return
if(t<i&&s>h){for(;J.T(a6.$2(d.h(a3,t),b),0);)++t
for(;J.T(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.J()
o=s-1
if(p<0){d.i(a3,r,d.h(a3,t))
n=t+1
d.i(a3,t,d.h(a3,s))
d.i(a3,s,q)
t=n}else{d.i(a3,r,d.h(a3,s))
d.i(a3,s,q)}s=o
break}}H.bI(a3,t,s,a6,a7)}else H.bI(a3,t,s,a6,a7)},
bm:function bm(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bo:function bo(a,b){this.a=a
this.$ti=b},
bk:function bk(a,b){this.a=a
this.$ti=b},
d5:function d5(){},
c5:function c5(a,b){this.a=a
this.$ti=b},
bl:function bl(a,b){this.a=a
this.$ti=b},
d7:function d7(a,b){this.a=a
this.$ti=b},
d6:function d6(){},
aR:function aR(a,b){this.a=a
this.$ti=b},
aS:function aS(a,b){this.a=a
this.$ti=b},
c6:function c6(a,b){this.a=a
this.b=b},
H:function H(){},
b1:function b1(){},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
br:function br(){},
bP:function bP(){},
aO:function(a){var u,t=H.i_(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
hF:function(a){return v.types[H.J(a)]},
hK:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.G(a).$ibv},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.bf(a)
if(typeof u!=="string")throw H.d(H.aK(a))
return u},
b2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
h0:function(a,b){var u,t
if(typeof a!=="string")H.a9(H.aK(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.i(u,3)
t=H.A(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
h_:function(a){var u,t
if(typeof a!=="string")H.a9(H.aK(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.fx(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bE:function(a){return H.fZ(a)+H.e9(H.az(a),0,null)},
fZ:function(a){var u,t,s,r,q,p,o,n=J.G(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.ay||!!n.$iap){r=C.V(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aO(t.length>1&&C.c.a0(t,0)===36?C.c.b9(t,1):t)},
V:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.b.aM(u,10))>>>0,56320|u&1023)}throw H.d(P.au(a,0,1114111,null,null))},
l:function(a){throw H.d(H.aK(a))},
i:function(a,b){if(a==null)J.Q(a)
throw H.d(H.ay(a,b))},
ay:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,s,null)
u=H.J(J.Q(a))
if(!(b<0)){if(typeof u!=="number")return H.l(u)
t=b>=u}else t=!0
if(t)return P.dZ(b,a,s,null,u)
return P.bG(b,s)},
aK:function(a){return new P.ar(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.bD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.f8})
u.name=""}else u.toString=H.f8
return u},
f8:function(){return J.bf(this.dartException)},
a9:function(a){throw H.d(a)},
f7:function(a){throw H.d(P.ai(a))},
af:function(a){var u,t,s,r,q,p
a=H.f6(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.n([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cV:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
eG:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
eC:function(a,b){return new H.cz(a,b==null?null:b.method)},
e2:function(a,b){var u=b==null,t=u?null:b.method
return new H.cj(a,t,u?null:b.receiver)},
Z:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.dQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.b.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.e2(H.c(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.eC(H.c(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.fa()
q=$.fb()
p=$.fc()
o=$.fd()
n=$.fg()
m=$.fh()
l=$.ff()
$.fe()
k=$.fj()
j=$.fi()
i=r.H(u)
if(i!=null)return f.$1(H.e2(H.A(u),i))
else{i=q.H(u)
if(i!=null){i.method="call"
return f.$1(H.e2(H.A(u),i))}else{i=p.H(u)
if(i==null){i=o.H(u)
if(i==null){i=n.H(u)
if(i==null){i=m.H(u)
if(i==null){i=l.H(u)
if(i==null){i=o.H(u)
if(i==null){i=k.H(u)
if(i==null){i=j.H(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.eC(H.A(u),i))}}return f.$1(new H.cY(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.bJ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ar(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.bJ()
return a},
aA:function(a){var u
if(a==null)return new H.bO(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.bO(a)},
hB:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.i(0,a[u],a[t])}return b},
hJ:function(a,b,c,d,e,f){H.k(a,"$idY")
switch(H.J(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.db("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hJ)
a.$identity=u
return u},
fF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.cP().constructor.prototype):Object.create(new H.aP(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aa
if(typeof t!=="number")return t.q()
$.aa=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.et(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.fB(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.et(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
fB:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.hF,a)
if(typeof a=="function")if(b)return a
else{u=c?H.er:H.dV
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
fC:function(a,b,c,d){var u=H.dV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
et:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fE(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.fC(t,!r,u,b)
if(t===0){r=$.aa
if(typeof r!=="number")return r.q()
$.aa=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.aQ
return new Function(r+H.c(q==null?$.aQ=H.c3("self"):q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aa
if(typeof r!=="number")return r.q()
$.aa=r+1
o+=r
r="return function("+o+"){return this."
q=$.aQ
return new Function(r+H.c(q==null?$.aQ=H.c3("self"):q)+"."+H.c(u)+"("+o+");}")()},
fD:function(a,b,c,d){var u=H.dV,t=H.er
switch(b?-1:a){case 0:throw H.d(H.h2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fE:function(a,b){var u,t,s,r,q,p,o,n=$.aQ
if(n==null)n=$.aQ=H.c3("self")
u=$.eq
if(u==null)u=$.eq=H.c3("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.fD(s,!q,t,b)
if(s===1){n="return function(){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+");"
u=$.aa
if(typeof u!=="number")return u.q()
$.aa=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+", "+o+");"
u=$.aa
if(typeof u!=="number")return u.q()
$.aa=u+1
return new Function(n+u+"}")()},
ea:function(a,b,c,d,e,f,g){return H.fF(a,b,c,d,!!e,!!f,g)},
dV:function(a){return a.a},
er:function(a){return a.c},
c3:function(a){var u,t,s,r=new H.aP("self","target","receiver","name"),q=J.e_(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
dF:function(a){if(a==null)H.ht("boolean expression must not be null")
return a},
A:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a7(a,"String"))},
eV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a7(a,"double"))},
hS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a7(a,"num"))},
ih:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a7(a,"bool"))},
J:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a7(a,"int"))},
ee:function(a,b){throw H.d(H.a7(a,H.aO(H.A(b).substring(2))))},
hU:function(a,b){throw H.d(H.es(a,H.aO(H.A(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.ee(a,b)},
f0:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else u=!0
if(u)return a
H.hU(a,b)},
f3:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.G(a)[b])return a
H.ee(a,b)},
hN:function(a){if(a==null)return a
if(!!J.G(a).$ij)return a
throw H.d(H.a7(a,"List<dynamic>"))},
hM:function(a,b){var u
if(a==null)return a
u=J.G(a)
if(!!u.$ij)return a
if(u[b])return a
H.ee(a,b)},
eW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.J(u)]
else return a.$S()}return},
aM:function(a,b){var u
if(typeof a=="function")return!0
u=H.eW(J.G(a))
if(u==null)return!1
return H.eL(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.e6)return a
$.e6=!0
try{if(H.aM(a,b))return a
u=H.bT(b)
t=H.a7(a,u)
throw H.d(t)}finally{$.e6=!1}},
eb:function(a,b){if(a!=null&&!H.dH(a,b))H.a9(H.a7(a,H.bT(b)))
return a},
a7:function(a,b){return new H.cW("TypeError: "+P.aY(a)+": type '"+H.c(H.eQ(a))+"' is not a subtype of type '"+b+"'")},
es:function(a,b){return new H.c4("CastError: "+P.aY(a)+": type '"+H.c(H.eQ(a))+"' is not a subtype of type '"+b+"'")},
eQ:function(a){var u,t=J.G(a)
if(!!t.$iaU){u=H.eW(t)
if(u!=null)return H.bT(u)
return"Closure"}return H.bE(a)},
ht:function(a){throw H.d(new H.d0(a))},
hZ:function(a){throw H.d(new P.c9(a))},
h2:function(a){return new H.cK(a)},
eZ:function(a){return v.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
az:function(a){if(a==null)return
return a.$ti},
ik:function(a,b,c){return H.aN(a["$a"+H.c(c)],H.az(b))},
dK:function(a,b,c,d){var u=H.aN(a["$a"+H.c(c)],H.az(b))
return u==null?null:u[d]},
M:function(a,b,c){var u=H.aN(a["$a"+H.c(b)],H.az(a))
return u==null?null:u[c]},
b:function(a,b){var u=H.az(a)
return u==null?null:u[b]},
bT:function(a){return H.ax(a,null)},
ax:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aO(a[0].name)+H.e9(a,1,b)
if(typeof a=="function")return H.aO(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.J(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.c(b[t])}if('func' in a)return H.hk(a,b)
if('futureOr' in a)return"FutureOr<"+H.ax("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
hk:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.n([],[P.e])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.l(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.i(a0,m)
p=C.c.q(p,a0[m])
l=u[q]
if(l!=null&&l!==P.o)p+=" extends "+H.ax(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.ax(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.ax(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.ax(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.hA(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.A(n[g])
i=i+h+H.ax(d[c],a0)+(" "+H.c(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
e9:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aG("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.ax(p,c)}return"<"+u.j(0)+">"},
aN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dG:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.az(a)
t=J.G(a)
if(t[b]==null)return!1
return H.eT(H.aN(t[d],u),null,c,null)},
v:function(a,b,c,d){if(a==null)return a
if(H.dG(a,b,c,d))return a
throw H.d(H.a7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aO(b.substring(2))+H.e9(c,0,null),v.mangledGlobalNames)))},
eT:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.a3(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.a3(a[t],b,c[t],d))return!1
return!0},
ii:function(a,b,c){return a.apply(b,H.aN(J.G(b)["$a"+H.c(c)],H.az(b)))},
f1:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="o"||a.name==="x"||a===-1||a===-2||H.f1(u)}return!1},
dH:function(a,b){var u,t
if(a==null)return b==null||b.name==="o"||b.name==="x"||b===-1||b===-2||H.f1(b)
if(b==null||b===-1||b.name==="o"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dH(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aM(a,b)}u=J.G(a).constructor
t=H.az(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.a3(u,null,b,null)},
P:function(a,b){if(a!=null&&!H.dH(a,b))throw H.d(H.es(a,H.bT(b)))
return a},
p:function(a,b){if(a!=null&&!H.dH(a,b))throw H.d(H.a7(a,H.bT(b)))
return a},
a3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="o"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="o"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a3(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="x")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.a3("type" in a?a.type:l,b,s,d)
else if(H.a3(a,b,s,d))return!0
else{if(!('$i'+"aZ" in t.prototype))return!1
r=t.prototype["$a"+"aZ"]
q=H.aN(r,u?a.slice(1):l)
return H.a3(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.eL(a,b,c,d)
if('func' in a)return c.name==="dY"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.eT(H.aN(m,u),b,p,d)},
eL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.a3(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.a3(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.a3(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.a3(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.hR(h,b,g,d)},
hR:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.a3(c[s],d,a[s],b))return!1}return!0},
ij:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hO:function(a){var u,t,s,r,q=H.A($.f_.$1(a)),p=$.dI[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dO[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.A($.eS.$2(a,q))
if(q!=null){p=$.dI[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dO[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dP(u)
$.dI[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.dO[q]=u
return u}if(s==="-"){r=H.dP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.f4(a,u)
if(s==="*")throw H.d(P.eH(q))
if(v.leafTags[q]===true){r=H.dP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.f4(a,u)},
f4:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ed(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dP:function(a){return J.ed(a,!1,null,!!a.$ibv)},
hP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dP(u)
else return J.ed(u,c,null,null)},
hH:function(){if(!0===$.ec)return
$.ec=!0
H.hI()},
hI:function(){var u,t,s,r,q,p,o,n
$.dI=Object.create(null)
$.dO=Object.create(null)
H.hG()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.f5.$1(q)
if(p!=null){o=H.hP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
hG:function(){var u,t,s,r,q,p,o=C.ar()
o=H.aJ(C.as,H.aJ(C.at,H.aJ(C.W,H.aJ(C.W,H.aJ(C.au,H.aJ(C.av,H.aJ(C.aw(C.V),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.f_=new H.dL(r)
$.eS=new H.dM(q)
$.f5=new H.dN(p)},
aJ:function(a,b){return a(b)||b},
ef:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
hz:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
f6:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hX:function(a,b,c){var u=H.hY(a,b,c)
return u},
hY:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.f6(b),'g'),H.hz(c))},
cU:function cU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cz:function cz(a,b){this.a=a
this.b=b},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.a=a},
dQ:function dQ(a){this.a=a},
bO:function bO(a){this.a=a
this.b=null},
aU:function aU(){},
cT:function cT(){},
cP:function cP(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cW:function cW(a){this.a=a},
c4:function c4(a){this.a=a},
cK:function cK(a){this.a=a},
d0:function d0(a){this.a=a},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ci:function ci(a){this.a=a},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cr:function cr(a,b){this.a=a
this.$ti=b},
cs:function cs(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
hj:function(a){return a},
eK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.ay(b,a))},
bC:function bC(){},
bA:function bA(){},
bB:function bB(){},
bz:function bz(){},
b8:function b8(){},
b9:function b9(){},
hA:function(a){return J.fK(a?Object.keys(a):[],null)},
i_:function(a){return v.mangledGlobalNames[a]}},J={
ed:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bS:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ec==null){H.hH()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.eH("Return interceptor for "+H.c(u(a,q))))}s=a.constructor
r=s==null?null:s[$.eg()]
if(r!=null)return r
r=H.hO(a)
if(r!=null)return r
if(typeof a=="function")return C.az
u=Object.getPrototypeOf(a)
if(u==null)return C.a7
if(u===Object.prototype)return C.a7
if(typeof s=="function"){Object.defineProperty(s,$.eg(),{value:C.K,enumerable:false,writable:true,configurable:true})
return C.K}return C.K},
fK:function(a,b){return J.e_(H.n(a,[b]))},
e_:function(a){a.fixed$length=Array
return a},
fL:function(a,b){return J.fq(H.f3(a,"$iah"),H.f3(b,"$iah"))},
ev:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fM:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.a0(a,b)
if(t!==32&&t!==13&&!J.ev(t))break;++b}return b},
fN:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.aQ(a,u)
if(t!==32&&t!==13&&!J.ev(t))break}return b},
G:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b0.prototype
return J.bu.prototype}if(typeof a=="string")return J.am.prototype
if(a==null)return J.ch.prototype
if(typeof a=="boolean")return J.cg.prototype
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.o)return a
return J.bS(a)},
hC:function(a){if(typeof a=="number")return J.al.prototype
if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.o)return a
return J.bS(a)},
a8:function(a){if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.o)return a
return J.bS(a)},
aq:function(a){if(a==null)return a
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.o)return a
return J.bS(a)},
hD:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b0.prototype
return J.al.prototype}if(a==null)return a
if(!(a instanceof P.o))return J.ap.prototype
return a},
eX:function(a){if(typeof a=="number")return J.al.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.ap.prototype
return a},
hE:function(a){if(typeof a=="number")return J.al.prototype
if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.ap.prototype
return a},
eY:function(a){if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.ap.prototype
return a},
dJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.o)return a
return J.bS(a)},
fk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hC(a).q(a,b)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).T(a,b)},
E:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a8(a).h(a,b)},
dS:function(a,b,c){return J.aq(a).i(a,b,c)},
fl:function(a,b,c,d){return J.dJ(a).bi(a,b,c,d)},
fm:function(a,b,c,d){return J.dJ(a).br(a,b,c,d)},
fn:function(a,b,c){return J.dJ(a).bs(a,b,c)},
bU:function(a,b,c){return J.dJ(a).bt(a,b,c)},
fo:function(a,b){return J.aq(a).A(a,b)},
ei:function(a,b){return J.aq(a).M(a,b)},
fp:function(a,b,c){return J.aq(a).P(a,b,c)},
fq:function(a,b){return J.hE(a).aR(a,b)},
ej:function(a,b){return J.a8(a).B(a,b)},
fr:function(a,b){return J.aq(a).I(a,b)},
ek:function(a,b){return J.aq(a).p(a,b)},
fs:function(a){return J.aq(a).ga6(a)},
el:function(a){return J.G(a).gt(a)},
em:function(a){return J.a8(a).gv(a)},
ft:function(a){return J.a8(a).gO(a)},
be:function(a){return J.aq(a).gw(a)},
fu:function(a){return J.aq(a).ga9(a)},
Q:function(a){return J.a8(a).gk(a)},
fv:function(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.hD(a).gax(a)},
a4:function(a){return J.eX(a).Y(a)},
bf:function(a){return J.G(a).j(a)},
fw:function(a,b){return J.eX(a).ce(a,b)},
fx:function(a){return J.eY(a).b0(a)},
R:function R(){},
cg:function cg(){},
ch:function ch(){},
bw:function bw(){},
cI:function cI(){},
ap:function ap(){},
an:function an(){},
ak:function ak(a){this.$ti=a},
e0:function e0(a){this.$ti=a},
bg:function bg(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
al:function al(){},
b0:function b0(){},
bu:function bu(){},
am:function am(){}},P={
hb:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.hu()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bd(new P.d2(s),1)).observe(u,{childList:true})
return new P.d1(s,u,t)}else if(self.setImmediate!=null)return P.hv()
return P.hw()},
hc:function(a){self.scheduleImmediate(H.bd(new P.d3(H.m(a,{func:1,ret:-1})),0))},
hd:function(a){self.setImmediate(H.bd(new P.d4(H.m(a,{func:1,ret:-1})),0))},
he:function(a){H.m(a,{func:1,ret:-1})
P.hh(0,a)},
hh:function(a,b){var u=new P.dz()
u.bh(a,b)
return u},
hf:function(a,b){var u,t,s
b.a=1
try{a.b_(new P.dd(b),new P.de(b),null)}catch(s){u=H.Z(s)
t=H.aA(s)
P.hW(new P.df(b,u,t))}},
eJ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iX")
if(u>=4){t=b.am()
b.a=a.a
b.c=a.c
P.b7(b,t)}else{t=H.k(b.c,"$iag")
b.a=2
b.c=a
a.aL(t)}},
b7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iN")
P.bc(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b7(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.k(q,"$iN")
P.bc(i,i,g.b,q.a,q.b)
return}l=$.B
if(l!==n)$.B=n
else l=i
g=b.c
if((g&15)===8)new P.dj(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.di(u,b,q).$0()}else if((g&2)!==0)new P.dh(h,u,b).$0()
if(l!=null)$.B=l
g=u.b
if(!!J.G(g).$iaZ){if(g.a>=4){k=H.k(o.c,"$iag")
o.c=null
b=o.a4(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.eJ(g,o)
return}}j=b.b
k=H.k(j.c,"$iag")
j.c=null
b=j.a4(k)
g=u.a
p=u.b
if(!g){H.p(p,H.b(j,0))
j.a=4
j.c=p}else{H.k(p,"$iN")
j.a=8
j.c=p}h.a=j
g=j}},
hp:function(a,b){if(H.aM(a,{func:1,args:[P.o,P.D]}))return b.aX(a,null,P.o,P.D)
if(H.aM(a,{func:1,args:[P.o]}))return H.m(a,{func:1,ret:null,args:[P.o]})
throw H.d(P.en(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
hn:function(){var u,t
for(;u=$.aI,u!=null;){$.bb=null
t=u.b
$.aI=t
if(t==null)$.ba=null
u.a.$0()}},
hr:function(){$.e7=!0
try{P.hn()}finally{$.bb=null
$.e7=!1
if($.aI!=null)$.eh().$1(P.eU())}},
eP:function(a){var u=new P.bL(a)
if($.aI==null){$.aI=$.ba=u
if(!$.e7)$.eh().$1(P.eU())}else $.ba=$.ba.b=u},
hq:function(a){var u,t,s=$.aI
if(s==null){P.eP(a)
$.bb=$.ba
return}u=new P.bL(a)
t=$.bb
if(t==null){u.b=s
$.aI=$.bb=u}else{u.b=t.b
$.bb=t.b=u
if(u.b==null)$.ba=u}},
hW:function(a){var u=null,t=$.B
if(C.d===t){P.dE(u,u,C.d,a)
return}P.dE(u,u,t,H.m(t.aP(a),{func:1,ret:-1}))},
bc:function(a,b,c,d,e){var u={}
u.a=d
P.hq(new P.dD(u,e))},
eM:function(a,b,c,d,e){var u,t=$.B
if(t===c)return d.$0()
$.B=c
u=t
try{t=d.$0()
return t}finally{$.B=u}},
eO:function(a,b,c,d,e,f,g){var u,t=$.B
if(t===c)return d.$1(e)
$.B=c
u=t
try{t=d.$1(e)
return t}finally{$.B=u}},
eN:function(a,b,c,d,e,f,g,h,i){var u,t=$.B
if(t===c)return d.$2(e,f)
$.B=c
u=t
try{t=d.$2(e,f)
return t}finally{$.B=u}},
dE:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.aP(d):c.bG(d,-1)
P.eP(d)},
d2:function d2(a){this.a=a},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
dz:function dz(){},
dA:function dA(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
X:function X(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dc:function dc(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a){this.a=a},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a){this.a=a
this.b=null},
av:function av(){},
cR:function cR(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
b3:function b3(){},
ae:function ae(){},
N:function N(a,b){this.a=a
this.b=b},
dB:function dB(){},
dD:function dD(a,b){this.a=a
this.b=b},
dv:function dv(){},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function(a,b){return new H.a6([a,b])},
y:function(a,b,c){return H.v(H.hB(a,new H.a6([b,c])),"$iez",[b,c],"$aez")},
fP:function(a,b){return new H.a6([a,b])},
fJ:function(a,b,c){var u,t
if(P.e8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.n([],[P.e])
C.a.l($.S,a)
try{P.hm(a,u)}finally{if(0>=$.S.length)return H.i($.S,-1)
$.S.pop()}t=P.eF(b,H.hM(u,"$iI"),", ")+c
return t.charCodeAt(0)==0?t:t},
eu:function(a,b,c){var u,t
if(P.e8(a))return b+"..."+c
u=new P.aG(b)
C.a.l($.S,a)
try{t=u
t.a=P.eF(t.a,a,", ")}finally{if(0>=$.S.length)return H.i($.S,-1)
$.S.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
e8:function(a){var u,t
for(u=$.S.length,t=0;t<u;++t)if(a===$.S[t])return!0
return!1},
hm:function(a,b){var u,t,s,r,q,p,o,n=a.gw(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.m())return
u=H.c(n.gn())
C.a.l(b,u)
m+=u.length+2;++l}if(!n.m()){if(l<=5)return
if(0>=b.length)return H.i(b,-1)
t=b.pop()
if(0>=b.length)return H.i(b,-1)
s=b.pop()}else{r=n.gn();++l
if(!n.m()){if(l<=4){C.a.l(b,H.c(r))
return}t=H.c(r)
if(0>=b.length)return H.i(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gn();++l
for(;n.m();r=q,q=p){p=n.gn();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.i(b,-1)
m-=b.pop().length+2;--l}C.a.l(b,"...")
return}}s=H.c(r)
t=H.c(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.l(b,o)
C.a.l(b,s)
C.a.l(b,t)},
ac:function(a,b,c){var u=P.fO(b,c)
a.p(0,new P.ct(u,b,c))
return u},
eB:function(a){var u,t={}
if(P.e8(a))return"{...}"
u=new P.aG("")
try{C.a.l($.S,a)
u.a+="{"
t.a=!0
a.p(0,new P.cx(t,u))
u.a+="}"}finally{if(0>=$.S.length)return H.i($.S,-1)
$.S.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(){},
cw:function cw(){},
cx:function cx(a,b){this.a=a
this.b=b},
a0:function a0(){},
ho:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.d(H.aK(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.Z(s)
r=P.dX(String(t),null)
throw H.d(r)}r=P.dC(u)
return r},
dC:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.dn(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.dC(a[u])
return a},
ew:function(a,b,c){return new P.bx(a,b)},
hi:function(a){return a.cq()},
hg:function(a,b,c){var u,t=new P.aG(""),s=new P.dr(t,[],P.hy())
s.ad(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
dn:function dn(a,b){this.a=a
this.b=b
this.c=null},
dq:function dq(a){this.a=a},
dp:function dp(a){this.a=a},
bp:function bp(){},
aj:function aj(){},
bx:function bx(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
ck:function ck(){},
cn:function cn(a){this.b=a},
cm:function cm(a){this.a=a},
ds:function ds(){},
dt:function dt(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c){this.c=a
this.a=b
this.b=c},
w:function(a){var u=H.h0(a,null)
if(u!=null)return u
throw H.d(P.dX(a,null))},
Y:function(a){var u=H.h_(a)
if(u!=null)return u
throw H.d(P.dX("Invalid double",a))},
fI:function(a){if(a instanceof H.aU)return a.j(0)
return"Instance of '"+H.c(H.bE(a))+"'"},
eA:function(a,b,c){var u,t=[c],s=H.n([],t)
for(u=J.be(a);u.m();)C.a.l(s,H.p(u.gn(),c))
if(b)return s
return H.v(J.e_(s),"$ij",t,"$aj")},
eF:function(a,b,c){var u=J.be(b)
if(!u.m())return a
if(c.length===0){do a+=H.c(u.gn())
while(u.m())}else{a+=H.c(u.gn())
for(;u.m();)a=a+c+H.c(u.gn())}return a},
aY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bf(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fI(a)},
en:function(a,b,c){return new P.ar(!0,a,b,c)},
bG:function(a,b){return new P.bF(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.bF(b,c,!0,a,d,"Invalid value")},
h1:function(a,b){if(typeof a!=="number")return a.J()
if(a<0)throw H.d(P.au(a,0,null,b,null))},
dZ:function(a,b,c,d,e){var u=H.J(e==null?J.Q(b):e)
return new P.ce(u,!0,a,c,"Index out of range")},
W:function(a){return new P.cZ(a)},
eH:function(a){return new P.cX(a)},
h8:function(a){return new P.bK(a)},
ai:function(a){return new P.c7(a)},
dX:function(a,b){return new P.cd(a,b)},
fU:function(a,b,c,d,e){return new H.aS(a,[b,c,d,e])},
aL:function aL(){},
z:function z(){},
aD:function aD(){},
bX:function bX(){},
bD:function bD(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ce:function ce(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cZ:function cZ(a){this.a=a},
cX:function cX(a){this.a=a},
bK:function bK(a){this.a=a},
c7:function c7(a){this.a=a},
bJ:function bJ(){},
c9:function c9(a){this.a=a},
db:function db(a){this.a=a},
cd:function cd(a,b){this.a=a
this.b=b},
q:function q(){},
I:function I(){},
j:function j(){},
u:function u(){},
x:function x(){},
aB:function aB(){},
o:function o(){},
D:function D(){},
e:function e(){},
aG:function aG(a){this.a=a},
dm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bH:function(a,b,c,d,e){var u=H.p(c<0?-c*0:c,e)
return new P.O(a,b,u,H.p(d<0?-d*0:d,e),[e])},
dl:function dl(){},
du:function du(){},
O:function O(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aw:function(){var u=H.k(C.e.D(document,"http://www.w3.org/2000/svg","svg"),"$ih")
u.setAttribute("version","1.1")
return H.k(u,"$iaH")},
aT:function aT(){},
ab:function ab(){},
U:function U(){},
ao:function ao(){},
aF:function aF(){},
a1:function a1(){},
h:function h(){},
aH:function aH(){},
b4:function b4(){},
a2:function a2(){},
b5:function b5(){},
a5:function a5(){}},W={
e5:function(a,b,c,d,e){var u=c==null?null:W.eR(new W.da(c),W.a)
u=new W.d9(a,b,u,!1,[e])
u.aN()
return u},
eR:function(a,b){var u=$.B
if(u===C.d)return a
return u.bH(a,b)},
f:function f(){},
bV:function bV(){},
bW:function bW(){},
bj:function bj(){},
as:function as(){},
aV:function aV(){},
c8:function c8(){},
aC:function aC(){},
aW:function aW(){},
ca:function ca(){},
aX:function aX(){},
a:function a(){},
at:function at(){},
cc:function cc(){},
bs:function bs(){},
L:function L(){},
cM:function cM(){},
b6:function b6(){},
K:function K(){},
bN:function bN(){},
d8:function d8(){},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d9:function d9(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
da:function da(a){this.a=a},
b_:function b_(){},
cb:function cb(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bM:function bM(){},
bQ:function bQ(){},
bR:function bR(){}},F={
fG:function(a1,a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a5==null)a5=1024
if(a5<=0)a5=a1.length
if(C.b.b6(a5,2)!==0)++a5
u=a2==null?0:a2
t=a3==null?a1.length-1:a3
if(t<=u)t=u+1
if(u<0||u>a1.length-1)u=0
s=a1.length
r=s-1
if(t>r||t<0)t=r
q=t-u+1
if(q===s)p=a1
else{p=new Float64Array(q)
for(o=t+1,n=p.length,m=u;m<o;++m){l=m-u
if(m<0||m>=s)return H.i(a1,m)
k=a1[m]
if(l<0||l>=n)return H.i(p,l)
p[l]=k}}s=p.length
if(s<=2*a5){o=new Array(s)
o.fixed$length=Array
j=H.n(o,[P.q])
for(m=0;m<s;++m)C.a.i(j,m,u+m)
return new F.bq(p,j)}o=a5*2
j=F.fH(p,o,u)
i=new Float64Array(o)
for(h=0,m=0;o=j.length,m<o;m=f){g=j[m]-u
f=m+2
n=o-1
l=f>n
if(l&&m+1>n)e=C.a.ga9(j)
else if(l){n=m+1
if(n>=o)return H.i(j,n)
e=j[n]-u}else e=j[f]-u
d=new Float64Array(e-g)
for(o=d.length,c=g;c<e;++c){n=c-g
if(c<0||c>=s)return H.i(p,c)
l=p[c]
if(n<0||n>=o)return H.i(d,n)
d[n]=l}b=E.fy(d)
o=b.length
if(0>=o)return H.i(b,0)
C.f.i(i,h,b[0]);++h
if(1>=b.length)return H.i(b,1)
C.f.i(i,h,b[1]);++h}for(s=o-1,a=1,m=0;m<s;m=f){f=m+1
a0=j[f]-j[m]
if(a0>a)a=a0}return new F.bq(i,j)},
fH:function(a,b,c){var u,t,s,r=H.n([],[P.q]),q=a.length,p=q/b
for(u=0;u<b;++u){t=C.j.Y(u*p)
C.a.l(r,t+c)
if(t>=q)break}s=r.length
q=q-1+c
if(s<b)C.a.l(r,q)
else C.a.i(r,s-1,q)
return r},
bq:function bq(a,b){this.a=a
this.d=b}},X={
e3:function(a,b,c,d,e,f,g){var u
if(f==="positive")u=X.cA(a,b,c,d,e,!1,g)
else if(f==="pos+neg"){u=X.cA(a,b,c,d,e,!1,g)
C.a.A(u,X.cA(a,b,c,d,e,!0,g))
C.a.ay(u)}else u=f==="negative"?X.cA(a,b,c,d,e,!0,g):null
return u},
cA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=X.fX(a,b,c,d,!0,e,f)[0]
if(g<=0||p.length<=g)return p
u=H.n([],[P.z])
for(t=a&&C.f,s=0;s<p.length;++s)C.a.l(u,t.h(a,p[s]))
r=H.n([],[P.q])
for(s=0;s<g;++s){q=H.J(E.dT(new Float64Array(H.hj(u)))[1])
if(q<0||q>=p.length)return H.i(p,q)
C.a.l(r,p[q])
C.a.aY(u,q)
C.a.aY(p,q)}C.a.ay(r)
return r},
fX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i={}
i.a=f
u=new X.cC(i,g,b,c,a)
u.$0()
t=a.length
if(b>=t)return H.i(a,b)
s=a[b]
r=[P.q]
q=H.n([],r)
p=H.n([],r)
for(o=s,n=b,m=n,l=m,k=!0;l<c;++l){if(l<0||l>=t)return H.i(a,l)
j=a[l]
if(j>s){s=j
m=l}if(j<o){o=j
n=l}if(k&&j<s-d){if(m<0||m>=t)return H.i(a,m)
if(a[m]>i.a)C.a.l(q,m)
l=m-1
o=a[m]
n=m
k=!1}else if(!k&&j>o+d){if(n<0||n>=t)return H.i(a,n)
if(a[n]>i.a)C.a.l(p,n)
l=n-1
s=a[n]
m=n
k=!0}}C.a.p(P.eA(p,!0,null),new X.cB(i,a,p))
u.$0()
return H.n([q,p],[[P.j,P.q]])},
cC:function cC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.a=a},
ad:function ad(a){this.b=a},
h3:function(a,b,c,d,e,f,g){var u=new X.cN(a,c,f,d,e,H.n(["blue","red","magenta","green","orange","cyan","lightgreen","crimson","darkred","darkgreen"],[P.e]),g)
u.bf(a,b,c,d,e,f,g)
return u},
eE:function(a,b){var u,t,s,r,q,p,o,n=null,m="legend",l=D.F,k=P.e,j=P.ac($.ey,l,k)
j.A(0,a)
if(j.h(0,C.o)==null)return
if(j.h(0,C.y)!=null){u=H.v(J.ei(C.m.ao(0,j.h(0,C.y)),k),"$ij",[k],"$aj")
t=J.Q(u.a)}else{u=n
t=0}s=new H.a6([k,[P.u,D.F,P.e]])
r=P.aw()
q=new D.co(s,new H.a6([k,P.a2]),new H.a6([k,P.a1]),r,t)
q.cy=t
s.i(0,m,P.ac($.ey,l,k))
l=j.gO(j)
if(l)J.fo(s.h(0,m),j)
r.setAttribute("x",H.A(J.E(s.h(0,m),C.z)))
r.setAttribute("y",H.A(J.E(s.h(0,m),C.A)))
q.r=P.w(J.E(s.h(0,m),C.a0))
l=H.A(J.E(s.h(0,m),C.o))
q.db=l
if(l!=null&&l.length!==0)q.aV("TOP_TITLE_ID",l,n)
p=b!=null?P.eA(C.a.b8(b,0,t),!0,k):n
for(o=t-1,l=H.b(u,1),k=p==null;o>=0;--o){s=o+1
if(k)q.aw(""+s,H.P(J.E(u.a,o),l),n)
else{s=""+s
r=H.P(J.E(u.a,o),l)
if(o>=p.length)return H.i(p,o)
q.aw(s,r,p[o])}}return q},
cN:function cN(a,b,c,d,e,f,g){var _=this
_.c=_.b=_.a=null
_.d=a
_.f=_.e=null
_.r=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g}},V={cD:function cD(){this.b=this.a=null},cF:function cF(a,b){this.a=a
this.b=b},cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},cH:function cH(a){this.a=a},cG:function cG(a,b){this.a=a
this.b=b},
fY:function(a,b,c,d,e,f,g,h,i){var u=new V.aE(H.n([],[P.ab]),d,e,b,c,a,f)
u.be(a,b,c,d,e,f,g,h,i)
return u},
aE:function aE(a,b,c,d,e,f,g){var _=this
_.c=_.b=_.a=null
_.d=a
_.x=_.r=_.f=_.e=null
_.y=b
_.z=c
_.cx=_.ch=_.Q=null
_.cy=d
_.db=e
_.r1=_.k4=_.k3=_.k2=_.k1=_.fy=_.fx=_.fr=_.dy=null
_.r2=f
_.ry=_.rx=null
_.x1=!1
_.N=_.bW=_.y2=_.y1=_.x2=null
_.cp=g
_.ap=_.a5=_.F=_.R=_.aU=_.aT=null},
r:function r(a){this.b=a}},M={
fA:function(a,b,c,d,e,f,g,h,i,j,k){var u=new M.bh(e,i)
u.az(null,a,b,c,d,null,null,e,f,g,h,i,new M.bY(j).$0(),k,{})
return u},
ep:function(a,b){var u,t,s
if(Math.abs(a)<0.000001)return 0.000001
u=C.n.aq(Math.log(a)/2.302585092994046)
t=a/Math.pow(10,u)
if(b)if(t<1.5)s=1
else if(t<3)s=2
else s=t<7?5:10
else if(t<=1)s=1
else if(t<=2)s=2
else s=t<=5?5:10
return s*Math.pow(10,u)},
bi:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
if(a>b){u=a
t=b}else{u=b
t=a}s=M.ep(u-t,!1)
if(typeof c!=="number")return c.C()
r=M.ep(s/(c-1),!0)
q=C.n.aq(t/r)*r
p=C.n.bJ(u/r)
o=Math.max(-C.n.aq(Math.log(r)/2.302585092994046),0)
o=o
n=H.n([],[P.e])
for(p=p*r+0.5*r,m=q;m<p;m+=r)C.a.l(n,C.j.av(m,o))
return n},
bh:function bh(a,b){var _=this
_.e=_.d=_.c=_.b=_.a=null
_.f=!1
_.r=a
_.x=b},
bY:function bY(a){this.a=a},
c1:function c1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c2:function c2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bZ:function bZ(a,b){this.a=a
this.b=b},
c_:function c_(a){this.a=a},
c0:function c0(a){this.a=a},
t:function t(a){this.b=a},
fz:function(a,b){var u,t,s,r,q=a.length
if(0>=q)return H.i(a,0)
q=b>=a[0].length
if(q)return
u=a.length
t=new Float64Array(u)
for(q=t.length,s=0;s<u;++s){r=a[s]
if(b>=r.length)return H.i(r,b)
r=r[b]
if(s>=q)return H.i(t,s)
t[s]=r}return t}},S={
eI:function(a,b,c,d,e){var u=new S.d_(c,d,a,b)
u.sbF(0,P.ac($.ha,M.t,P.e))
if(e!=null)u.b.A(0,e)
u.bI()
return u},
d_:function d_(a,b,c,d){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=c
_.f=d}},D={co:function co(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.e=null
_.z=d
_.ch=_.Q=null
_.cx=e
_.db=_.cy=null},F:function F(a){this.b=a},cJ:function cJ(a){var _=this
_.d=a
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
eD:function(a,b,c){var u
if(c!=null&&b!=null&&Math.abs(b)>1e-8){if(typeof c!=="number")return H.l(c)
if(typeof b!=="number")return H.l(b)
u=a*c/b}else u=a
return u}},B={
h9:function(a){if(a==="true")return!0
return!1},
ex:function(a){var u=P.e
return H.v(J.fp(C.m.ao(0,a),u,u),"$iu",[u,u],"$au")},
C:function(a,b){b.p(0,new B.cL(a))},
cL:function cL(a){this.a=a},
fR:function(a,b,c,d,e){var u=new B.cv()
u.bd(a,b,c,d,e,null)
return u},
fS:function(a,b){var u,t,s,r,q,p,o
for(u=a.length,t=b.length,s=0;s<u;++s)for(r=0;r<a[0].length;++r){q=a[s]
if(r>=q.length)return H.i(q,r)
p=q[r]
if(s>=t)return H.i(b,s)
o=b[s]
if(r>=o.length)return H.i(o,r)
q[r]=p+o[r]}return a},
cv:function cv(){this.c=this.b=this.a=null}},G={
h4:function(a,b,c,d,e){var u=new G.cO()
u.bg(a,b,c,d,e)
return u},
cO:function cO(){this.b=this.a=null}},T={
fQ:function(a,b,c,d,e,f){var u=new T.cu(4*Math.log(2),b,c,d,a,e,f)
u.bc(a,b,c,d,e,f)
return u},
fT:function(a,b,c,d,e,f){var u,t,s,r,q,p,o=T.fQ(b,c,d,e,null,null),n=a[0],m=a[1],l=new Array(n)
l.fixed$length=Array
u=H.n(l,[P.a5])
for(l=[P.z],t=0;t<n;++t){s=new Float64Array(m)
for(r=s.length,q=0;q<m;++q){p=o.b5(H.n([t,q],l))
if(q>=r)return H.i(s,q)
s[q]=p}C.a.i(u,t,s)}return u},
cu:function cu(a,b,c,d,e,f,g){var _=this
_.e=a
_.r=b
_.x=c
_.y=d
_.z=e
_.Q=null
_.ch=0
_.cx=f
_.cy=g},
cp:function cp(){}},E={
dT:function(a){var u,t,s,r,q,p=-17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q>t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
eo:function(a){var u,t,s,r,q,p=17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q<t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
fy:function(a){var u,t,s,r,q,p,o
for(u=a.length,t=-1,s=-17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q>s){s=q
t=r}}for(p=-1,o=17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q<o){o=q
p=r}}u=[P.z]
if(p<=t)return H.n([o,s],u)
else return H.n([s,o],u)}},U={
f2:function(){var u,t,s,r,q=G.h4(1000,100,0,8,0).a
for(u=q.length,t=0;t<u;++t)q[t]=q[t]+J.fv(2*C.ax.c2()-1)
s=X.e3(q,0,u,2,0.001,"pos+neg",0)
r=B.fR($.hV,$.hs,$.hx,$.hL,$.hQ).a
u=r.length
if(0>=u)return H.i(r,0)
U.hT(q,r,s,new V.cD().bR(r,0,u,0,r[0].length,0,0,"pos+neg",0),null)},
hT:function(a,a0,a1,a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=document,c=H.f0(d.querySelector("#app_div"),"$iaC"),b=H.f0(d.querySelector("#plot_div"),"$iaC")
d=b.style
u=H.c(c.clientWidth)+"px"
d.width=u
u=H.c(c.clientHeight)+"px"
d.height=u
d=P.e
t=H.n([P.y([C.k,"0.8"],V.r,d)],[[P.u,V.r,P.e]])
u=M.t
s=P.y([C.p,"0",C.q,""+a.length,C.x,"Number of points"],u,d)
r=P.y([C.x,"Function value"],u,d)
u=[d]
q=D.F
p=P.y([C.o,"Peak picking a noisy sinc function: Red ticks = positive peaks, green ticks = negative peaks",C.y,C.m.aS(H.n(["100 * sin(x) / x"],u)),C.z,"45",C.A,"15"],q,d)
o=X.h3(H.n([a],[P.a5]),b,t,s,r,p,null)
n=new Array(a1.length)
n.fixed$length=Array
m=P.z
l=H.n(n,[m])
n=new Array(a1.length)
n.fixed$length=Array
k=H.n(n,[d])
for(j=0;j<a1.length;++j){i=a1[j]
i.toString
C.a.i(l,j,i)
C.a.i(k,j,H.c(i)+" / "+C.j.av(C.f.h(a,i),2))}n=o.e
if(0>=n.length)return H.i(n,0)
n=n[0]
n.toString
new X.cy(n).bU(H.v(l,"$ij",[m],"$aj"),H.v(k,"$ij",u,"$aj"),a3)
h=H.n([],u)
C.a.l(h,"Result of Lorentz-Gauss matrix peak picking")
C.a.l(h,"# / row / col / value: ")
for(j=0;j<a2.length;){u=a2[j]
g=u[0]
f=u[1];++j
u=""+j+" / "+H.c(g)+" / "+H.c(f)+" / "
n=C.a.h(a0,g)
C.a.l(h,u+C.j.av((n&&C.f).h(n,f),2))}e=X.eE(P.y([C.o,"2D peak picking result:",C.y,C.m.aS(h),C.G,"darkgreen",C.z,""+C.b.E(o.a.z.c,3),C.A,"100"],q,d),null)
o.a.r.appendChild(e.z)}}
var w=[C,H,J,P,W,F,X,V,M,S,D,B,G,T,E,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.e1.prototype={}
J.R.prototype={
T:function(a,b){return a===b},
gt:function(a){return H.b2(a)},
j:function(a){return"Instance of '"+H.c(H.bE(a))+"'"}}
J.cg.prototype={
j:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$iaL:1}
J.ch.prototype={
T:function(a,b){return null==b},
j:function(a){return"null"},
gt:function(a){return 0}}
J.bw.prototype={
gt:function(a){return 0},
j:function(a){return String(a)}}
J.cI.prototype={}
J.ap.prototype={}
J.an.prototype={
j:function(a){var u=a[$.f9()]
if(u==null)return this.bb(a)
return"JavaScript function for "+H.c(J.bf(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$idY:1}
J.ak.prototype={
M:function(a,b){return new H.aR(a,[H.b(a,0),b])},
l:function(a,b){H.p(b,H.b(a,0))
if(!!a.fixed$length)H.a9(P.W("add"))
a.push(b)},
aY:function(a,b){if(!!a.fixed$length)H.a9(P.W("removeAt"))
if(b<0||b>=a.length)throw H.d(P.bG(b,null))
return a.splice(b,1)[0]},
ac:function(a,b){var u
if(!!a.fixed$length)H.a9(P.W("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
A:function(a,b){var u
H.v(b,"$iI",[H.b(a,0)],"$aI")
if(!!a.fixed$length)H.a9(P.W("addAll"))
for(u=J.be(b);u.m();)a.push(u.gn())},
p:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.b(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.ai(a))}},
I:function(a,b){H.J(b)
if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
b8:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.au(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.au(c,b,a.length,"end",null))
if(b===c)return H.n([],[H.b(a,0)])
return H.n(a.slice(b,c),[H.b(a,0)])},
ga6:function(a){if(a.length>0)return a[0]
throw H.d(H.cf())},
ga9:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.cf())},
b7:function(a,b){var u=H.b(a,0)
H.m(b,{func:1,ret:P.q,args:[u,u]})
if(!!a.immutable$list)H.a9(P.W("sort"))
H.h7(a,b==null?J.hl():b,u)},
ay:function(a){return this.b7(a,null)},
B:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
gv:function(a){return a.length===0},
gO:function(a){return a.length!==0},
j:function(a){return P.eu(a,"[","]")},
gw:function(a){return new J.bg(a,a.length,[H.b(a,0)])},
gt:function(a){return H.b2(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.a9(P.W("set length"))
if(b<0)throw H.d(P.au(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.ay(a,b))
if(b>=a.length||b<0)throw H.d(H.ay(a,b))
return a[b]},
i:function(a,b,c){H.p(c,H.b(a,0))
if(!!a.immutable$list)H.a9(P.W("indexed set"))
if(b>=a.length||b<0)throw H.d(H.ay(a,b))
a[b]=c},
$iH:1,
$iI:1,
$ij:1}
J.e0.prototype={}
J.bg.prototype={
gn:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.f7(s))
u=t.c
if(u>=r){t.saA(null)
return!1}t.saA(s[u]);++t.c
return!0},
saA:function(a){this.d=H.p(a,H.b(this,0))},
$ibt:1}
J.al.prototype={
aR:function(a,b){var u
H.hS(b)
if(typeof b!=="number")throw H.d(H.aK(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gX(b)
if(this.gX(a)===u)return 0
if(this.gX(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gX:function(a){return a===0?1/a<0:a<0},
gax:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
bJ:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.d(P.W(""+a+".ceil()"))},
aq:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.W(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.W(""+a+".round()"))},
av:function(a,b){var u
if(b<0||b>20)throw H.d(P.au(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gX(a))return"-"+u
return u},
ce:function(a,b){var u
if(b>20)throw H.d(P.au(b,0,20,"fractionDigits",null))
u=a.toExponential(b)
if(a===0&&this.gX(a))return"-"+u
return u},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b6:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
E:function(a,b){return(a|0)===a?a/b|0:this.bv(a,b)},
bv:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.W("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.bu(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
bu:function(a,b){return b>31?0:a>>>b},
$iah:1,
$aah:function(){return[P.aB]},
$iz:1,
$iaB:1}
J.b0.prototype={
gax:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
$iq:1}
J.bu.prototype={}
J.am.prototype={
aQ:function(a,b){if(b<0)throw H.d(H.ay(a,b))
if(b>=a.length)H.a9(H.ay(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(b>=a.length)throw H.d(H.ay(a,b))
return a.charCodeAt(b)},
q:function(a,b){H.A(b)
if(typeof b!=="string")throw H.d(P.en(b,null,null))
return a+b},
U:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bG(b,null))
if(b>c)throw H.d(P.bG(b,null))
if(c>a.length)throw H.d(P.bG(c,null))
return a.substring(b,c)},
b9:function(a,b){return this.U(a,b,null)},
b0:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.a0(r,0)===133){u=J.fM(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aQ(r,t)===133?J.fN(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
bL:function(a,b,c){if(c>a.length)throw H.d(P.au(c,0,a.length,null,null))
return H.ef(a,b,c)},
B:function(a,b){return this.bL(a,b,0)},
aR:function(a,b){var u
H.A(b)
if(typeof b!=="string")throw H.d(H.aK(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
j:function(a){return a},
gt:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$iah:1,
$aah:function(){return[P.e]},
$ifW:1,
$ie:1}
H.bm.prototype={
aa:function(a,b,c,d){var u,t
H.m(a,{func:1,ret:-1,args:[H.b(this,1)]})
u=this.a.aW(null,!0,H.m(c,{func:1,ret:-1}))
t=new H.bn(u,$.B,this.$ti)
u.ar(t.gbo())
t.ar(a)
t.as(0,d)
return t},
aW:function(a,b,c){return this.aa(a,b,c,null)},
M:function(a,b){return new H.bm(this.a,[H.b(this,0),b])},
$aav:function(a,b){return[b]}}
H.bn.prototype={
ar:function(a){var u=H.b(this,1)
H.m(a,{func:1,ret:-1,args:[u]})
this.sbm(a==null?null:H.m(a,{func:1,ret:null,args:[u]}))},
as:function(a,b){var u,t=this
t.a.as(0,b)
if(b==null)t.d=null
else{u=P.o
if(H.aM(b,{func:1,args:[P.x,P.x]}))t.d=t.b.aX(H.m(b,{func:1,args:[P.o,P.D]}),null,u,P.D)
else t.d=H.m(H.m(b,{func:1,args:[P.o]}),{func:1,ret:null,args:[u]})}},
bp:function(a){var u,t,s,r,q,p,o,n,m=this,l=null
H.p(a,H.b(m,0))
r=m.c
if(r==null)return
u=null
try{u=H.P(a,H.b(m,1))}catch(q){t=H.Z(q)
s=H.aA(q)
r=m.d
if(r==null)P.bc(l,l,m.b,t,H.k(s,"$iD"))
else{p=H.aM(r,{func:1,args:[P.x,P.x]})
o=m.b
n=m.d
if(p)o.cb(H.m(n,{func:1,ret:-1,args:[,P.D]}),t,s,l,P.D)
else o.au(H.m(n,{func:1,ret:-1,args:[,]}),t,l)}return}m.b.au(r,u,H.b(m,1))},
sbm:function(a){this.c=H.m(a,{func:1,ret:-1,args:[H.b(this,1)]})},
$ib3:1,
$ab3:function(a,b){return[b]}}
H.bo.prototype={
P:function(a,b,c){return new H.bo(this.a,[H.b(this,0),H.b(this,1),b,c])},
$acQ:function(a,b,c,d){return[c,d]},
$aae:function(a,b,c,d){return[c,d]}}
H.bk.prototype={
P:function(a,b,c){return new H.bk(this.a,[H.b(this,0),H.b(this,1),b,c])},
$acQ:function(a,b,c,d){return[c,d]},
$aae:function(a,b,c,d){return[c,d]},
$aaj:function(a,b,c,d){return[c,d]}}
H.d5.prototype={
gw:function(a){return new H.c5(J.be(this.gK()),this.$ti)},
gk:function(a){return J.Q(this.gK())},
gv:function(a){return J.em(this.gK())},
gO:function(a){return J.ft(this.gK())},
I:function(a,b){H.J(b)
return H.P(J.fr(this.gK(),b),H.b(this,1))},
B:function(a,b){return J.ej(this.gK(),b)},
j:function(a){return J.bf(this.gK())},
$aI:function(a,b){return[b]}}
H.c5.prototype={
m:function(){return this.a.m()},
gn:function(){return H.P(this.a.gn(),H.b(this,1))},
$ibt:1,
$abt:function(a,b){return[b]}}
H.bl.prototype={
M:function(a,b){return H.dW(this.a,H.b(this,0),b)},
gK:function(){return this.a}}
H.d7.prototype={$iH:1,
$aH:function(a,b){return[b]}}
H.d6.prototype={
h:function(a,b){return H.P(J.E(this.a,b),H.b(this,1))},
i:function(a,b,c){J.dS(this.a,b,H.P(H.p(c,H.b(this,1)),H.b(this,0)))},
$iH:1,
$aH:function(a,b){return[b]},
$aa_:function(a,b){return[b]},
$ij:1,
$aj:function(a,b){return[b]}}
H.aR.prototype={
M:function(a,b){return new H.aR(this.a,[H.b(this,0),b])},
gK:function(){return this.a}}
H.aS.prototype={
P:function(a,b,c){return new H.aS(this.a,[H.b(this,0),H.b(this,1),b,c])},
h:function(a,b){return H.P(this.a.h(0,b),H.b(this,3))},
i:function(a,b,c){var u=this
H.p(b,H.b(u,2))
H.p(c,H.b(u,3))
u.a.i(0,H.P(b,H.b(u,0)),H.P(c,H.b(u,1)))},
A:function(a,b){var u=this,t=H.b(u,2),s=H.b(u,3)
u.a.A(0,new H.aS(H.v(b,"$iu",[t,s],"$au"),[t,s,H.b(u,0),H.b(u,1)]))},
p:function(a,b){var u=this
u.a.p(0,new H.c6(u,H.m(b,{func:1,ret:-1,args:[H.b(u,2),H.b(u,3)]})))},
gG:function(){return H.dW(this.a.gG(),H.b(this,0),H.b(this,2))},
gk:function(a){var u=this.a
return u.gk(u)},
gv:function(a){var u=this.a
return u.gv(u)},
$aa0:function(a,b,c,d){return[c,d]},
$au:function(a,b,c,d){return[c,d]}}
H.c6.prototype={
$2:function(a,b){var u=this.a
H.p(a,H.b(u,0))
H.p(b,H.b(u,1))
this.b.$2(H.P(a,H.b(u,2)),H.P(b,H.b(u,3)))},
$S:function(){var u=this.a
return{func:1,ret:P.x,args:[H.b(u,0),H.b(u,1)]}}}
H.H.prototype={}
H.b1.prototype={
gw:function(a){var u=this
return new H.by(u,u.gk(u),[H.M(u,"b1",0)])},
gv:function(a){return this.gk(this)===0},
B:function(a,b){var u,t=this,s=t.gk(t)
for(u=0;u<s;++u){if(J.T(t.I(0,u),b))return!0
if(s!==t.gk(t))throw H.d(P.ai(t))}return!1}}
H.by.prototype={
gn:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=J.a8(s),q=r.gk(s)
if(t.b!==q)throw H.d(P.ai(s))
u=t.c
if(u>=q){t.saB(null)
return!1}t.saB(r.I(s,u));++t.c
return!0},
saB:function(a){this.d=H.p(a,H.b(this,0))},
$ibt:1}
H.br.prototype={}
H.bP.prototype={}
H.cU.prototype={
H:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.cz.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.cj.prototype={
j:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.c(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.c(t.a)+")"
return s+r+"' on '"+u+"' ("+H.c(t.a)+")"}}
H.cY.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.dQ.prototype={
$1:function(a){if(!!J.G(a).$iaD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.bO.prototype={
j:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iD:1}
H.aU.prototype={
j:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$idY:1,
gco:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cT.prototype={}
H.cP.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aO(u)+"'"}}
H.aP.prototype={
T:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.aP))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gt:function(a){var u,t=this.c
if(t==null)u=H.b2(this.a)
else u=typeof t!=="object"?J.el(t):H.b2(t)
return(u^H.b2(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.c(H.bE(u))+"'")}}
H.cW.prototype={
j:function(a){return this.a}}
H.c4.prototype={
j:function(a){return this.a}}
H.cK.prototype={
j:function(a){return"RuntimeError: "+H.c(this.a)}}
H.d0.prototype={
j:function(a){return"Assertion failed: "+P.aY(this.a)}}
H.a6.prototype={
gk:function(a){return this.a},
gv:function(a){return this.a===0},
gO:function(a){return!this.gv(this)},
gG:function(){return new H.cr(this,[H.b(this,0)])},
L:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.aG(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.aG(t,a)}else return s.bY(a)},
bY:function(a){var u=this,t=u.d
if(t==null)return!1
return u.a8(u.a2(t,u.a7(a)),a)>=0},
A:function(a,b){H.v(b,"$iu",this.$ti,"$au").p(0,new H.ci(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a3(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a3(r,b)
s=t==null?null:t.b
return s}else return q.bZ(b)},
bZ:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.a2(r,s.a7(a))
t=s.a8(u,a)
if(t<0)return
return u[t].b},
i:function(a,b,c){var u,t,s=this
H.p(b,H.b(s,0))
H.p(c,H.b(s,1))
if(typeof b==="string"){u=s.b
s.aD(u==null?s.b=s.ak():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.aD(t==null?s.c=s.ak():t,b,c)}else s.c0(b,c)},
c0:function(a,b){var u,t,s,r,q=this
H.p(a,H.b(q,0))
H.p(b,H.b(q,1))
u=q.d
if(u==null)u=q.d=q.ak()
t=q.a7(a)
s=q.a2(u,t)
if(s==null)q.an(u,t,[q.al(a,b)])
else{r=q.a8(s,a)
if(r>=0)s[r].b=b
else s.push(q.al(a,b))}},
ac:function(a,b){var u=this.c_(b)
return u},
c_:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=q.a7(a)
t=q.a2(p,u)
s=q.a8(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bw(r)
if(t.length===0)q.aI(p,u)
return r.b},
p:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.b(s,0),H.b(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.ai(s))
u=u.c}},
aD:function(a,b,c){var u,t=this
H.p(b,H.b(t,0))
H.p(c,H.b(t,1))
u=t.a3(a,b)
if(u==null)t.an(a,b,t.al(b,c))
else u.b=c},
aJ:function(){this.r=this.r+1&67108863},
al:function(a,b){var u,t=this,s=new H.cq(H.p(a,H.b(t,0)),H.p(b,H.b(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aJ()
return s},
bw:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aJ()},
a7:function(a){return J.el(a)&0x3ffffff},
a8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
j:function(a){return P.eB(this)},
a3:function(a,b){return a[b]},
a2:function(a,b){return a[b]},
an:function(a,b,c){a[b]=c},
aI:function(a,b){delete a[b]},
aG:function(a,b){return this.a3(a,b)!=null},
ak:function(){var u="<non-identifier-key>",t=Object.create(null)
this.an(t,u,t)
this.aI(t,u)
return t},
$iez:1}
H.ci.prototype={
$2:function(a,b){var u=this.a
u.i(0,H.p(a,H.b(u,0)),H.p(b,H.b(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.x,args:[H.b(u,0),H.b(u,1)]}}}
H.cq.prototype={}
H.cr.prototype={
gk:function(a){return this.a.a},
gv:function(a){return this.a.a===0},
gw:function(a){var u=this.a,t=new H.cs(u,u.r,this.$ti)
t.c=u.e
return t},
B:function(a,b){return this.a.L(b)}}
H.cs.prototype={
gn:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.ai(t))
else{t=u.c
if(t==null){u.saC(null)
return!1}else{u.saC(t.a)
u.c=u.c.c
return!0}}},
saC:function(a){this.d=H.p(a,H.b(this,0))},
$ibt:1}
H.dL.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.dM.prototype={
$2:function(a,b){return this.a(a,b)},
$S:11}
H.dN.prototype={
$1:function(a){return this.a(H.A(a))},
$S:12}
H.bC.prototype={}
H.bA.prototype={
gk:function(a){return a.length},
$ibv:1,
$abv:function(){}}
H.bB.prototype={
h:function(a,b){H.eK(b,a,a.length)
return a[b]},
i:function(a,b,c){H.eV(c)
H.eK(b,a,a.length)
a[b]=c},
$iH:1,
$aH:function(){return[P.z]},
$abr:function(){return[P.z]},
$aa_:function(){return[P.z]},
$iI:1,
$aI:function(){return[P.z]},
$ij:1,
$aj:function(){return[P.z]}}
H.bz.prototype={$ia5:1}
H.b8.prototype={}
H.b9.prototype={}
P.d2.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.d1.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:13}
P.d3.prototype={
$0:function(){this.a.$0()},
$S:0}
P.d4.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dz.prototype={
bh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bd(new P.dA(this,b),0),a)
else throw H.d(P.W("`setTimeout()` not found."))}}
P.dA.prototype={
$0:function(){this.b.$0()},
$S:1}
P.ag.prototype={
c1:function(a){if((this.c&15)!==6)return!0
return this.b.b.at(H.m(this.d,{func:1,ret:P.aL,args:[P.o]}),a.a,P.aL,P.o)},
bX:function(a){var u=this.e,t=P.o,s={futureOr:1,type:H.b(this,1)},r=this.b.b
if(H.aM(u,{func:1,args:[P.o,P.D]}))return H.eb(r.ca(u,a.a,a.b,null,t,P.D),s)
else return H.eb(r.at(H.m(u,{func:1,args:[P.o]}),a.a,null,t),s)}}
P.X.prototype={
b_:function(a,b,c){var u,t,s,r=H.b(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.B
if(u!==C.d){H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.hp(b,u)}t=new P.X($.B,[c])
s=b==null?1:3
this.aE(new P.ag(t,s,a,b,[r,c]))
return t},
cd:function(a,b){return this.b_(a,null,b)},
aE:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iag")
t.c=a}else{if(s===2){u=H.k(t.c,"$iX")
s=u.a
if(s<4){u.aE(a)
return}t.a=s
t.c=u.c}P.dE(null,null,t.b,H.m(new P.dc(t,a),{func:1,ret:-1}))}},
aL:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iag")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iX")
u=q.a
if(u<4){q.aL(a)
return}p.a=u
p.c=q.c}o.a=p.a4(a)
P.dE(null,null,p.b,H.m(new P.dg(o,p),{func:1,ret:-1}))}},
am:function(){var u=H.k(this.c,"$iag")
this.c=null
return this.a4(u)},
a4:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aF:function(a){var u,t,s=this,r=H.b(s,0)
H.eb(a,{futureOr:1,type:r})
u=s.$ti
if(H.dG(a,"$iaZ",u,"$aaZ"))if(H.dG(a,"$iX",u,null))P.eJ(a,s)
else P.hf(a,s)
else{t=s.am()
H.p(a,r)
s.a=4
s.c=a
P.b7(s,t)}},
a1:function(a,b){var u,t=this
H.k(b,"$iD")
u=t.am()
t.a=8
t.c=new P.N(a,b)
P.b7(t,u)},
bl:function(a){return this.a1(a,null)},
$iaZ:1}
P.dc.prototype={
$0:function(){P.b7(this.a,this.b)},
$S:0}
P.dg.prototype={
$0:function(){P.b7(this.b,this.a.a)},
$S:0}
P.dd.prototype={
$1:function(a){var u=this.a
u.a=0
u.aF(a)},
$S:4}
P.de.prototype={
$2:function(a,b){H.k(b,"$iD")
this.a.a1(a,b)},
$1:function(a){return this.$2(a,null)},
$S:15}
P.df.prototype={
$0:function(){this.a.a1(this.b,this.c)},
$S:0}
P.dj.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.aZ(H.m(s.d,{func:1}),null)}catch(r){u=H.Z(r)
t=H.aA(r)
if(o.d){s=H.k(o.a.a.c,"$iN").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iN")
else q.b=new P.N(u,t)
q.a=!0
return}if(!!J.G(n).$iaZ){if(n instanceof P.X&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iN")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.cd(new P.dk(p),null)
s.a=!1}},
$S:1}
P.dk.prototype={
$1:function(a){return this.a},
$S:16}
P.di.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.b(s,0)
q=H.p(n.c,r)
p=H.b(s,1)
n.a.b=s.b.b.at(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.Z(o)
t=H.aA(o)
s=n.a
s.b=new P.N(u,t)
s.a=!0}},
$S:1}
P.dh.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iN")
r=m.c
if(H.dF(r.c1(u))&&r.e!=null){q=m.b
q.b=r.bX(u)
q.a=!1}}catch(p){t=H.Z(p)
s=H.aA(p)
r=H.k(m.a.a.c,"$iN")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.N(t,s)
n.a=!0}},
$S:1}
P.bL.prototype={}
P.av.prototype={
gk:function(a){var u={},t=new P.X($.B,[P.q])
u.a=0
this.aa(new P.cR(u,this),!0,new P.cS(u,t),t.gbk())
return t},
M:function(a,b){return new H.bm(this,[H.M(this,"av",0),b])}}
P.cR.prototype={
$1:function(a){H.p(a,H.M(this.b,"av",0));++this.a.a},
$S:function(){return{func:1,ret:P.x,args:[H.M(this.b,"av",0)]}}}
P.cS.prototype={
$0:function(){this.b.aF(this.a.a)},
$S:0}
P.b3.prototype={}
P.ae.prototype={
P:function(a,b,c){return new H.bo(this,[H.M(this,"ae",0),H.M(this,"ae",1),b,c])},
$icQ:1}
P.N.prototype={
j:function(a){return H.c(this.a)},
$iaD:1}
P.dB.prototype={$iie:1}
P.dD.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bD():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.j(0)
throw u},
$S:0}
P.dv.prototype={
cc:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.d===$.B){a.$0()
return}P.eM(r,r,this,a,-1)}catch(s){u=H.Z(s)
t=H.aA(s)
P.bc(r,r,this,u,H.k(t,"$iD"))}},
au:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.p(b,c)
try{if(C.d===$.B){a.$1(b)
return}P.eO(r,r,this,a,b,-1,c)}catch(s){u=H.Z(s)
t=H.aA(s)
P.bc(r,r,this,u,H.k(t,"$iD"))}},
cb:function(a,b,c,d,e){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[d,e]})
H.p(b,d)
H.p(c,e)
try{if(C.d===$.B){a.$2(b,c)
return}P.eN(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.Z(s)
t=H.aA(s)
P.bc(r,r,this,u,H.k(t,"$iD"))}},
bG:function(a,b){return new P.dx(this,H.m(a,{func:1,ret:b}),b)},
aP:function(a){return new P.dw(this,H.m(a,{func:1,ret:-1}))},
bH:function(a,b){return new P.dy(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
aZ:function(a,b){H.m(a,{func:1,ret:b})
if($.B===C.d)return a.$0()
return P.eM(null,null,this,a,b)},
at:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.p(b,d)
if($.B===C.d)return a.$1(b)
return P.eO(null,null,this,a,b,c,d)},
ca:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.p(b,e)
H.p(c,f)
if($.B===C.d)return a.$2(b,c)
return P.eN(null,null,this,a,b,c,d,e,f)},
aX:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}}
P.dx.prototype={
$0:function(){return this.a.aZ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.dw.prototype={
$0:function(){return this.a.cc(this.b)},
$S:1}
P.dy.prototype={
$1:function(a){var u=this.c
return this.a.au(this.b,H.p(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ct.prototype={
$2:function(a,b){this.a.i(0,H.p(a,this.b),H.p(b,this.c))},
$S:5}
P.a_.prototype={
gw:function(a){return new H.by(a,this.gk(a),[H.dK(this,a,"a_",0)])},
I:function(a,b){return this.h(a,H.J(b))},
p:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.dK(s,a,"a_",0)]})
u=s.gk(a)
for(t=0;t<u;++t){b.$1(s.h(a,t))
if(u!==s.gk(a))throw H.d(P.ai(a))}},
gv:function(a){return this.gk(a)===0},
gO:function(a){return!this.gv(a)},
ga6:function(a){if(this.gk(a)===0)throw H.d(H.cf())
return this.h(a,0)},
ga9:function(a){if(this.gk(a)===0)throw H.d(H.cf())
return this.h(a,this.gk(a)-1)},
B:function(a,b){var u,t=this.gk(a)
for(u=0;u<t;++u){if(J.T(this.h(a,u),b))return!0
if(t!==this.gk(a))throw H.d(P.ai(a))}return!1},
M:function(a,b){return new H.aR(a,[H.dK(this,a,"a_",0),b])},
j:function(a){return P.eu(a,"[","]")}}
P.cw.prototype={}
P.cx.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.c(a)
t.a=u+": "
t.a+=H.c(b)},
$S:5}
P.a0.prototype={
P:function(a,b,c){return P.fU(this,H.M(this,"a0",0),H.M(this,"a0",1),b,c)},
p:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.M(s,"a0",0),H.M(s,"a0",1)]})
for(u=J.be(s.gG());u.m();){t=u.gn()
b.$2(t,s.h(0,t))}},
A:function(a,b){var u,t
H.v(b,"$iu",[H.M(this,"a0",0),H.M(this,"a0",1)],"$au")
for(u=b.gG(),u=u.gw(u);u.m();){t=u.gn()
this.i(0,t,b.h(0,t))}},
gk:function(a){return J.Q(this.gG())},
gv:function(a){return J.em(this.gG())},
j:function(a){return P.eB(this)},
$iu:1}
P.dn.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.bq(b):u}},
gk:function(a){var u
if(this.b==null){u=this.c
u=u.gk(u)}else u=this.W().length
return u},
gv:function(a){return this.gk(this)===0},
gG:function(){if(this.b==null)return this.c.gG()
return new P.dp(this)},
i:function(a,b,c){var u,t,s=this
H.A(b)
if(s.b==null)s.c.i(0,b,c)
else if(s.L(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.by().i(0,b,c)},
A:function(a,b){H.v(b,"$iu",[P.e,null],"$au").p(0,new P.dq(this))},
L:function(a){if(this.b==null)return this.c.L(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
p:function(a,b){var u,t,s,r,q=this
H.m(b,{func:1,ret:-1,args:[P.e,,]})
if(q.b==null)return q.c.p(0,b)
u=q.W()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.dC(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.d(P.ai(q))}},
W:function(){var u=H.hN(this.c)
if(u==null)u=this.c=H.n(Object.keys(this.a),[P.e])
return u},
by:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.fP(P.e,null)
t=p.W()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.i(0,q,p.h(0,q))}if(r===0)C.a.l(t,null)
else C.a.sk(t,0)
p.a=p.b=null
return p.c=u},
bq:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.dC(this.a[a])
return this.b[a]=u},
$aa0:function(){return[P.e,null]},
$au:function(){return[P.e,null]}}
P.dq.prototype={
$2:function(a,b){this.a.i(0,H.A(a),b)},
$S:17}
P.dp.prototype={
gk:function(a){var u=this.a
return u.gk(u)},
I:function(a,b){var u
H.J(b)
u=this.a
if(u.b==null)u=u.gG().I(0,b)
else{u=u.W()
if(b<0||b>=u.length)return H.i(u,b)
u=u[b]}return u},
gw:function(a){var u=this.a
if(u.b==null){u=u.gG()
u=u.gw(u)}else{u=u.W()
u=new J.bg(u,u.length,[H.b(u,0)])}return u},
B:function(a,b){return this.a.L(b)},
$aH:function(){return[P.e]},
$ab1:function(){return[P.e]},
$aI:function(){return[P.e]}}
P.bp.prototype={}
P.aj.prototype={
P:function(a,b,c){return new H.bk(this,[H.M(this,"aj",0),H.M(this,"aj",1),b,c])}}
P.bx.prototype={
j:function(a){var u=P.aY(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.cl.prototype={
j:function(a){return"Cyclic error in JSON stringify"}}
P.ck.prototype={
ao:function(a,b){var u=P.ho(b,this.gbP().a)
return u},
aS:function(a){var u=P.hg(a,this.gbV().b,null)
return u},
gbV:function(){return C.aB},
gbP:function(){return C.aA},
$abp:function(){return[P.o,P.e]}}
P.cn.prototype={
$acQ:function(){return[P.o,P.e]},
$aae:function(){return[P.o,P.e]},
$aaj:function(){return[P.o,P.e]}}
P.cm.prototype={
$acQ:function(){return[P.e,P.o]},
$aae:function(){return[P.e,P.o]},
$aaj:function(){return[P.e,P.o]}}
P.ds.prototype={
b2:function(a){var u,t,s,r,q,p,o,n=a.length
for(u=J.eY(a),t=this.c,s=0,r=0;r<n;++r){q=u.a0(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.c.U(a,s,r)
s=r+1
p=t.a+=H.V(92)
switch(q){case 8:t.a=p+H.V(98)
break
case 9:t.a=p+H.V(116)
break
case 10:t.a=p+H.V(110)
break
case 12:t.a=p+H.V(102)
break
case 13:t.a=p+H.V(114)
break
default:p+=H.V(117)
t.a=p
p+=H.V(48)
t.a=p
p+=H.V(48)
t.a=p
o=q>>>4&15
p+=H.V(o<10?48+o:87+o)
t.a=p
o=q&15
t.a=p+H.V(o<10?48+o:87+o)
break}}else if(q===34||q===92){if(r>s)t.a+=C.c.U(a,s,r)
s=r+1
p=t.a+=H.V(92)
t.a=p+H.V(q)}}if(s===0)t.a+=H.c(a)
else if(s<n)t.a+=u.U(a,s,n)},
ag:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.d(new P.cl(a,null))}C.a.l(u,a)},
ad:function(a){var u,t,s,r,q=this
if(q.b1(a))return
q.ag(a)
try{u=q.b.$1(a)
if(!q.b1(u)){s=P.ew(a,null,q.gaK())
throw H.d(s)}s=q.a
if(0>=s.length)return H.i(s,-1)
s.pop()}catch(r){t=H.Z(r)
s=P.ew(a,t,q.gaK())
throw H.d(s)}},
b1:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.j.j(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.b2(a)
u.a+='"'
return!0}else{u=J.G(a)
if(!!u.$ij){s.ag(a)
s.cf(a)
u=s.a
if(0>=u.length)return H.i(u,-1)
u.pop()
return!0}else if(!!u.$iu){s.ag(a)
t=s.cg(a)
u=s.a
if(0>=u.length)return H.i(u,-1)
u.pop()
return t}else return!1}},
cf:function(a){var u,t,s=this.c
s.a+="["
u=J.a8(a)
if(u.gO(a)){this.ad(u.h(a,0))
for(t=1;t<u.gk(a);++t){s.a+=","
this.ad(u.h(a,t))}}s.a+="]"},
cg:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gv(a)){o.c.a+="{}"
return!0}u=a.gk(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.p(0,new P.dt(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.b2(H.A(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.i(t,p)
o.ad(t[p])}r.a+="}"
return!0}}
P.dt.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.i(u,t.a++,a)
C.a.i(u,t.a++,b)},
$S:5}
P.dr.prototype={
gaK:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.aL.prototype={}
P.z.prototype={}
P.aD.prototype={}
P.bX.prototype={
j:function(a){return"Assertion failed"}}
P.bD.prototype={
j:function(a){return"Throw of null."}}
P.ar.prototype={
gai:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gah:function(){return""},
j:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gai()+o+u
if(!q.a)return t
s=q.gah()
r=P.aY(q.b)
return t+s+": "+r}}
P.bF.prototype={
gai:function(){return"RangeError"},
gah:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.c(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.c(s)
else if(t>s)u=": Not in range "+H.c(s)+".."+H.c(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.c(s)}return u}}
P.ce.prototype={
gai:function(){return"RangeError"},
gah:function(){var u,t=H.J(this.b)
if(typeof t!=="number")return t.J()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.c(u)},
gk:function(a){return this.f}}
P.cZ.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.cX.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bK.prototype={
j:function(a){return"Bad state: "+this.a}}
P.c7.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aY(u)+"."}}
P.bJ.prototype={
j:function(a){return"Stack Overflow"},
$iaD:1}
P.c9.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.db.prototype={
j:function(a){return"Exception: "+this.a}}
P.cd.prototype={
j:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.c(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.c.U(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.q.prototype={}
P.I.prototype={
M:function(a,b){return H.dW(this,H.M(this,"I",0),b)},
B:function(a,b){var u
for(u=this.gw(this);u.m();)if(J.T(u.gn(),b))return!0
return!1},
p:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[H.M(this,"I",0)]})
for(u=this.gw(this);u.m();)b.$1(u.gn())},
gk:function(a){var u,t=this.gw(this)
for(u=0;t.m();)++u
return u},
gv:function(a){return!this.gw(this).m()},
gO:function(a){return!this.gv(this)},
I:function(a,b){var u,t,s
H.J(b)
P.h1(b,"index")
for(u=this.gw(this),t=0;u.m();){s=u.gn()
if(b===t)return s;++t}throw H.d(P.dZ(b,this,"index",null,t))},
j:function(a){return P.fJ(this,"(",")")}}
P.j.prototype={$iH:1,$iI:1}
P.u.prototype={}
P.x.prototype={
gt:function(a){return P.o.prototype.gt.call(this,this)},
j:function(a){return"null"}}
P.aB.prototype={$iah:1,
$aah:function(){return[P.aB]}}
P.o.prototype={constructor:P.o,$io:1,
T:function(a,b){return this===b},
gt:function(a){return H.b2(this)},
j:function(a){return"Instance of '"+H.c(H.bE(this))+"'"},
toString:function(){return this.j(this)}}
P.D.prototype={}
P.e.prototype={$iah:1,
$aah:function(){return[P.e]},
$ifW:1}
P.aG.prototype={
gk:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ii3:1}
W.f.prototype={}
W.bV.prototype={
j:function(a){return String(a)}}
W.bW.prototype={
j:function(a){return String(a)}}
W.bj.prototype={$ibj:1}
W.as.prototype={
gk:function(a){return a.length}}
W.aV.prototype={
gk:function(a){return a.length}}
W.c8.prototype={}
W.aC.prototype={$iaC:1}
W.aW.prototype={
D:function(a,b,c){var u=a.createElementNS(b,c)
return u}}
W.ca.prototype={
j:function(a){return String(a)}}
W.aX.prototype={
j:function(a){return a.localName},
bt:function(a,b,c){return a.setAttribute(b,c)},
$iaX:1}
W.a.prototype={$ia:1}
W.at.prototype={
bi:function(a,b,c,d){return a.addEventListener(b,H.bd(H.m(c,{func:1,args:[W.a]}),1),!1)},
br:function(a,b,c,d){return a.removeEventListener(b,H.bd(H.m(c,{func:1,args:[W.a]}),1),!1)},
$iat:1}
W.cc.prototype={
gk:function(a){return a.length}}
W.bs.prototype={}
W.L.prototype={
ab:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
c8:function(a,b){var u,t
try{u=a.parentNode
J.fn(u,b,a)}catch(t){H.Z(t)}return a},
j:function(a){var u=a.nodeValue
return u==null?this.ba(a):u},
bD:function(a,b){return a.appendChild(b)},
bs:function(a,b,c){return a.replaceChild(b,c)},
$iL:1}
W.cM.prototype={
gk:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.K.prototype={$iK:1}
W.bN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.dZ(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.k(c,"$iL")
throw H.d(P.W("Cannot assign element of immutable List."))},
I:function(a,b){H.J(b)
if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.L]},
$ibv:1,
$abv:function(){return[W.L]},
$aa_:function(){return[W.L]},
$iI:1,
$aI:function(){return[W.L]},
$ij:1,
$aj:function(){return[W.L]},
$ab_:function(){return[W.L]}}
W.d8.prototype={
aa:function(a,b,c,d){var u=H.b(this,0)
H.m(a,{func:1,ret:-1,args:[u]})
H.m(c,{func:1,ret:-1})
return W.e5(this.a,this.b,a,!1,u)},
aW:function(a,b,c){return this.aa(a,b,c,null)}}
W.e4.prototype={}
W.d9.prototype={
ar:function(a){var u=this
H.m(a,{func:1,ret:-1,args:[H.b(u,0)]})
if(u.b==null)throw H.d(P.h8("Subscription has been canceled."))
u.bx()
u.sbn(W.eR(H.m(a,{func:1,ret:-1,args:[W.a]}),W.a))
u.aN()},
as:function(a,b){},
aN:function(){var u,t=this.d,s=t!=null
if(s&&!0){u=this.b
u.toString
H.m(t,{func:1,args:[W.a]})
if(s)J.fl(u,this.c,t,!1)}},
bx:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.m(t,{func:1,args:[W.a]})
if(s)J.fm(u,this.c,t,!1)}},
sbn:function(a){this.d=H.m(a,{func:1,args:[W.a]})}}
W.da.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ia"))},
$S:18}
W.b_.prototype={
gw:function(a){return new W.cb(a,a.length,[H.dK(this,a,"b_",0)])}}
W.cb.prototype={
m:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.i(s,t)
u.saH(s[t])
u.c=t
return!0}u.saH(null)
u.c=s
return!1},
gn:function(){return this.d},
saH:function(a){this.d=H.p(a,H.b(this,0))},
$ibt:1}
W.bM.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
P.dl.prototype={
c2:function(){return Math.random()}}
P.du.prototype={
j:function(a){var u=this
return"Rectangle ("+u.a+", "+u.b+") "+u.c+" x "+u.d},
T:function(a,b){var u,t,s,r,q,p,o=this
if(b==null)return!1
if(!!J.G(b).$iO){u=o.a
t=b.a
if(u===t){s=o.b
r=b.b
if(s===r){q=H.b(o,0)
p=H.b(b,0)
u=H.p(u+o.c,q)===H.p(t+b.c,p)&&H.p(s+o.d,q)===H.p(r+b.d,p)}else u=!1}else u=!1}else u=!1
return u},
gt:function(a){var u,t=this,s=t.a,r=C.b.gt(s),q=t.b,p=C.b.gt(q),o=H.b(t,0)
s=C.b.gt(H.p(s+t.c,o))
o=C.b.gt(H.p(q+t.d,o))
o=P.dm(P.dm(P.dm(P.dm(0,r),p),s),o)
u=536870911&o+((67108863&o)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)}}
P.O.prototype={}
P.aT.prototype={$iaT:1}
P.ab.prototype={$iab:1}
P.U.prototype={}
P.ao.prototype={$iao:1}
P.aF.prototype={$iaF:1}
P.a1.prototype={$ia1:1}
P.h.prototype={$ih:1}
P.aH.prototype={$iaH:1}
P.b4.prototype={}
P.a2.prototype={$ia2:1}
P.b5.prototype={}
P.a5.prototype={$iH:1,
$aH:function(){return[P.z]},
$iI:1,
$aI:function(){return[P.z]},
$ij:1,
$aj:function(){return[P.z]}}
F.bq.prototype={}
X.cC.prototype={
$0:function(){var u,t,s,r=this
if(r.b){for(u=r.c,t=r.d,s=r.e;u<t;++u){if(u>=s.length)return H.i(s,u)
s[u]=-s[u]}t=r.a
t.a=Math.abs(t.a)}},
$S:1}
X.cB.prototype={
$1:function(a){var u=this.b
H.J(a)
if((u&&C.f).h(u,a)<this.a.a)C.a.ac(this.c,a)},
$S:4}
V.cD.prototype={
bR:function(a,b,c,d,e,f,g,h,i){var u,t=this
H.v(a,"$ij",[P.a5],"$aj")
t.bS(a,b,c,d,e,f,g,h,i)
t.bQ(a,b,c,d,e,f,g,h,i)
u=H.n([],[[P.j,P.q]])
t.a.p(0,new V.cF(t,u))
return u},
bS:function(a,b,c,d,e,f,g,h,i){var u,t,s,r
H.v(a,"$ij",[P.a5],"$aj")
u=[P.j,P.q]
this.sc9(new H.a6([P.q,u]))
for(t=b;t<c;++t){if(t>=a.length)return H.i(a,t)
s=X.e3(a[t],d,e,f,g,h,i)
if(s.length!==0)this.a.i(0,t,s)}r=H.n([],[u])
this.a.p(0,new V.cH(r))
return r},
bQ:function(a,b,c,d,e,f,g,h,i){var u,t
H.v(a,"$ij",[P.a5],"$aj")
this.sbK(new H.a6([P.q,[P.j,P.q]]))
for(u=d;u<e;++u){t=X.e3(M.fz(a,u),b,c,f,g,h,i)
if(t.length!==0)this.b.i(0,u,t)}},
sc9:function(a){this.a=H.v(a,"$iu",[P.q,[P.j,P.q]],"$au")},
sbK:function(a){this.b=H.v(a,"$iu",[P.q,[P.j,P.q]],"$au")}}
V.cF.prototype={
$2:function(a,b){H.J(a)
J.ek(H.v(b,"$ij",[P.q],"$aj"),new V.cE(this.a,a,this.b))},
$S:7}
V.cE.prototype={
$1:function(a){var u,t=this
H.J(a)
u=t.a
if(u.b.L(a)&&J.ej(u.b.h(0,a),t.b))C.a.l(t.c,H.n([t.b,a],[P.q]))},
$S:8}
V.cH.prototype={
$2:function(a,b){H.J(a)
J.ek(H.v(b,"$ij",[P.q],"$aj"),new V.cG(this.a,a))},
$S:7}
V.cG.prototype={
$1:function(a){C.a.l(this.a,H.n([this.b,H.J(a)],[P.q]))},
$S:8}
M.bh.prototype={
az:function(c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="rotate(90) translate(",c7=e1.h(0,C.x),c8=e1.h(0,C.r)
if(J.a8(c8).B(c8,"-"))c4.f=!0
p=!C.c.B(c8,"y")||!1
if(C.c.B(c8,"x2")){p=!1
o=!0}else o=!1
if(c4.r==null)c4.r=0
n=new M.c1(c4,d2,d3,c9,d4,d5)
m=new M.c2(c4,d2,d3,c9,d4,d5)
l=P.e
c4.sbj(0,P.ac($.dU,M.t,l))
c4.e.A(0,e1)
k=B.ex(c4.e.h(0,C.T))
j=B.ex(c4.e.h(0,C.U))
e3.a=6
i=!p
h=i?j:k
h.p(0,new M.bZ(e3,d7))
u=d0
t=d1
g=c4.r
if(g!=null&&c4.f){if(typeof g!=="number")return g.C()
u=g-d0
t=g-d1}s=null
f=P.w(c4.e.h(0,C.l))
if(p){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.bi(n.$1(u),n.$1(t),e3.a,c5,!1)
if(J.Q(s)>2){e=P.Y(J.fs(s))
d=P.Y(J.fu(s))
g=u
if(typeof e!=="number")return e.J()
if(typeof g!=="number")return H.l(g)
if(!(e<g)){g=t
if(typeof d!=="number")return d.u()
if(typeof g!=="number")return H.l(g)
g=d>g}else g=!0
if(g){g=e3.a
if(typeof g!=="number")return g.q()
e3.a=g+1
s=M.bi(n.$1(u),n.$1(t),e3.a,c5,!1)}}g=J.Q(s)
c=J.E(s,J.Q(s)/2|0)
if(typeof f!=="number")return H.l(f)
if(C.j.Y(g*c.length*f*0.6)>d7){g=e3.a
if(typeof g!=="number")return H.l(g)
e3.a=C.n.Y(0.8*g)
s=M.bi(n.$1(u),n.$1(t),e3.a,c5,!1)}b=P.w(c4.e.h(0,C.i))
if(typeof b!=="number")return b.q()
a=b+f+4
g=P.w(c4.e.h(0,C.E))
if(typeof g!=="number")return H.l(g)
a0=a+g
if(C.c.B(c8,"t")){g=P.w(c4.e.h(0,C.i))
if(typeof g!=="number")return H.l(g)
b=d8-g
a=b-4
g=P.w(c4.e.h(0,C.E))
if(typeof g!=="number")return H.l(g)
a0=a-g
a1=d8}else a1=0
a2=c4.e.h(0,C.P)}else{if(o){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.bi(n.$1(u),n.$1(t),e3.a,c5,!1)}else try{r=d2
q=d3
s=M.bi(D.eD(u,r,q),D.eD(t,r,q),e3.a,c5,!1)}catch(a3){H.Z(a3)
s=H.n(["0.0"],[l])}g=P.w(c4.e.h(0,C.i))
if(typeof g!=="number")return H.l(g)
b=d8-g
g=P.w(c4.e.h(0,C.D))
if(typeof g!=="number")return H.l(g)
a=b-g
g=P.w(c4.e.h(0,C.F))
if(typeof g!=="number")return H.l(g)
a0=a-g
if(C.c.B(c8,"t")){b=P.w(c4.e.h(0,C.i))
g=P.w(c4.e.h(0,C.D))
if(typeof b!=="number")return b.q()
if(typeof g!=="number")return H.l(g)
a=b+g
g=P.w(c4.e.h(0,C.S))
if(typeof g!=="number")return H.l(g)
a0=a+g
a1=0}else a1=d8
a2=c4.e.h(0,C.Q)}a4=H.n([],[P.q])
c4.a=P.aw()
c4.c=P.w(c4.e.h(0,C.L))
c4.d=P.w(c4.e.h(0,C.M))
for(g=d3!=null,c=d2!=null,a5=c5,a6=a5,a7=a6,a8=a7,a9=a8,b0="middle",b1="0",b2=0;b2<J.Q(s);++b2){b3=P.Y(J.E(s,b2))
if(!i||o){b4=H.eV(m.$1(b3))
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.C()
if(typeof b4!=="number")return H.l(b4)
b4=b5-b4}b6=J.a4(c4.x.$1(b4))}else{if(g&&c){if(typeof b3!=="number")return b3.af()
if(typeof d3!=="number")return H.l(d3)
b7=b3*d2/d3}else b7=b3
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.C()
if(typeof b7!=="number")return H.l(b7)
b4=b5-b7}else b4=b7
b6=J.a4(c4.x.$1(b4))}C.a.l(a4,b6)
if(b6<0)continue
if(b6>d7)continue
b5=document
b8=b5.createElementNS("http://www.w3.org/2000/svg","text")
b8=H.k(H.k(b8,"$ih"),"$ia2")
if(J.E(s,b2).length>4){if(typeof b3!=="number")return b3.aO()
b9=Math.abs(b3)>99999}else b9=!1
if(b9){J.dS(s,b2,J.fw(b3,2))
b9=s
c0=J.E(s,b2)
J.dS(b9,b2,H.hX(c0,"e",""))}b8.textContent=J.E(s,b2)
if(p){b9=c4.c
if(typeof b9!=="number")return H.l(b9)
a6=b6+b9
a5=a}else{b9=c4.d
if(typeof b9!=="number")return H.l(b9)
a5=b6+b9
b0=H.ef(c8,"t",0)?"start":"end"
a6=a
b1="-33%"}B.C(b8,P.y(["x",""+a6,"y",""+a5,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.l),"text-anchor",b0,"baseline-shift",b1,"cursor","default"],l,l))
c4.a.appendChild(b8)
if(c4.e.L(C.i)){b9=P.w(c4.e.h(0,C.i))
if(typeof b9!=="number")return b9.u()
b9=b9>0}else b9=!1
if(b9){c1=b5.createElementNS("http://www.w3.org/2000/svg","line")
c1=H.k(H.k(c1,"$ih"),"$iao")
if(p){b5=c4.c
if(typeof b5!=="number")return H.l(b5)
a7=b6+b5}else{b5=c4.d
if(typeof b5!=="number")return H.l(b5)
a7=b6+b5}if(p)B.C(c1,P.y(["x1",""+a7,"y1",""+a1,"x2",""+a7,"y2",""+b],l,l))
else B.C(c1,P.y(["x1",""+a1,"y1",""+a7,"x2",""+b,"y2",""+a7],l,l))
B.C(c1,P.y(["stroke",c4.e.h(0,C.N),"stroke-width",c4.e.h(0,C.O)],l,l))
c4.a.appendChild(c1)
a8=c1}if(H.ef(c8,"g",0))b5=d9>0
else b5=!1
if(b5)if(p)c4.b=S.eI(a4,c5,c5,d9,e1)
else c4.b=S.eI(c5,a4,d9,c5,e1)
a9=b8}if(c7!=null&&C.c.b0(c7).length!==0){a9=H.k(H.k(C.e.D(document,"http://www.w3.org/2000/svg","text"),"$ih"),"$ia2")
a9.textContent=c7
if(p){i=c4.c
if(typeof i!=="number")return H.l(i)
B.C(a9,P.y(["x",H.c(d7/2+i),"y",""+a0,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.l),"text-anchor","middle","cursor","default"],l,l))}else{c2=P.w(c4.e.h(0,C.F))
c3="rotate(-90) translate("+H.c(-d7/2)+", "+H.c(c2)+")"
if(J.T(c4.e.h(0,C.R),"tb")){i=d7/2
g=c6+H.c(i)+", "
if(typeof c2!=="number")return c2.a_()
c3=g+-c2+")"
if(C.c.B(c8,"t"))c3=c6+H.c(i)+", "+(-d8+C.j.Y(d8*0.22))+")"}B.C(a9,P.y(["x","0","y","0","fill",a2,"stroke","none","font-size",c4.e.h(0,C.l),"text-anchor","middle","transform",c3,"cursor","default"],l,l))}l=W.b6
i={func:1,ret:-1,args:[l]}
W.e5(a9,"touchstart",H.m(new M.c_(e2),i),!1,l)
W.e5(a9,"touchmove",H.m(new M.c0(e2),i),!1,l)
c4.a.appendChild(a9)}},
sbj:function(a,b){this.e=H.v(b,"$iu",[M.t,P.e],"$au")}}
M.bY.prototype={
$0:function(){var u=this.a
u.i(0,C.r,J.fk(u.h(0,C.r),"y"))
return u},
$S:19}
M.c1.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.S()
if(typeof p!=="number")return H.l(p)
u=q/p
if(!H.dF(s.e))u=-u
if(o){if(typeof r!=="number")return r.q()
t=r+(a+0.5)*u}else{if(typeof r!=="number")return r.q()
t=r+a*u}return t},
$S:2}
M.c2.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.S()
if(typeof p!=="number")return H.l(p)
u=q/p
if(!H.dF(s.e))u=-u
if(o){if(typeof a!=="number")return a.C()
if(typeof r!=="number")return H.l(r)
t=(a-r)/u-0.5}else{if(typeof a!=="number")return a.C()
if(typeof r!=="number")return H.l(r)
t=(a-r)/u}return t},
$S:2}
M.bZ.prototype={
$2:function(a,b){var u
H.A(a)
H.A(b)
u=P.w(a)
if(typeof u!=="number")return H.l(u)
if(this.b>u){this.a.a=P.w(b)
return}},
$S:20}
M.c_.prototype={
$1:function(a){H.k(a,"$iK").preventDefault()},
$S:9}
M.c0.prototype={
$1:function(a){H.k(a,"$iK").preventDefault()},
$S:9}
M.t.prototype={
j:function(a){return this.b}}
S.d_.prototype={
bI:function(){var u,t,s,r,q,p,o,n,m=this,l="stroke-dasharray",k=P.aw(),j=m.e,i=j!=null
if(i)for(u=m.d,t=P.e,s=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.k(H.k(p,"$ih"),"$iao")
if(r>=j.length)return H.i(j,r)
q=""+j[r]
if(r>=j.length)return H.i(j,r)
B.C(p,P.y(["x1",q,"y1","0","x2",""+j[r],"y2",H.c(u),"stroke",m.b.h(0,C.t),"stroke-width",m.b.h(0,C.u),"stroke-opacity",m.b.h(0,C.v),l,m.b.h(0,C.w)],t,t))
k.appendChild(p)
s=p}j=m.f
i=j!=null
if(i)for(u=m.c,t=P.e,o=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.k(H.k(p,"$ih"),"$iao")
if(r>=j.length)return H.i(j,r)
q=""+j[r]
n=H.c(u)
if(r>=j.length)return H.i(j,r)
B.C(p,P.y(["x1","0","y1",q,"x2",n,"y2",""+j[r],"stroke",m.b.h(0,C.t),"stroke-width",m.b.h(0,C.u),"stroke-opacity",m.b.h(0,C.v),l,m.b.h(0,C.w)],t,t))
k.appendChild(p)
o=p}m.a=k},
sbF:function(a,b){this.b=H.v(b,"$iu",[M.t,P.e],"$au")}}
D.co.prototype={
aV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/2000/svg",h="legend",g=j.c,f=document
g.i(0,a,H.k(H.k(C.e.D(f,i,"text"),"$ih"),"$ia2"))
g.h(0,a).textContent=b
u=j.b
j.ch=P.w(J.E(u.h(0,h),C.H))
J.bU(g.h(0,a),"font-size",H.c(j.ch))
t=g.h(0,a)
s=J.E(u.h(0,h),C.G)
t.toString
J.bU(t,"fill",H.A(s))
s=j.ch
t=P.w(J.E(u.h(0,h),C.a2))
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return H.l(t)
r=s+t
t=j.cy
s=t*r
j.e=s
q=c!=null
if(q){p=j.r
if(typeof p!=="number")return H.l(p)
o=12+p}else o=12
if(j.db!=null)j.e=s+2*r
s=a==="TOP_TITLE_ID"
if(s){j.e=r
p=j.r
if(typeof p!=="number")return p.V()
o=12-C.b.E(p,2)}j.cy=t-1
t=j.z
C.aJ.bD(t,g.h(0,a))
J.bU(g.h(0,a),"x",""+o)
J.bU(g.h(0,a),"y",H.c(j.e))
if(!s&&q){g=j.e
if(typeof g!=="number")return g.C()
n=H.k(H.k(C.e.D(f,i,"rect"),"$ih"),"$ia1")
m=P.w(J.E(u.h(0,h),C.a1))
l=j.r
k=P.w(J.E(u.h(0,h),C.H))
if(typeof k!=="number")return k.V()
u=C.b.E(k,2)
n.setAttribute("x","6")
n.setAttribute("y",""+(g-r+u))
n.setAttribute("width",H.c(l))
n.setAttribute("height",H.c(m))
n.setAttribute("fill",c)
j.d.i(0,a,n)
t.appendChild(n)}},
aw:function(a,b,c){var u,t=this,s=t.c
if(s.L(a)){u=s.h(0,a)
u.textContent=b;(u&&C.aq).c8(u,u)}else t.aV(a,b,c)
t.bz(t.e)},
bz:function(a){var u,t,s,r=this,q="legend",p=r.Q
if(p!=null)C.ap.ab(p)
r.Q=H.k(H.k(C.e.D(document,"http://www.w3.org/2000/svg","rect"),"$ih"),"$ia1")
p=r.b
u=P.w(J.E(p.h(0,q),C.Z))
if(u===0)return
t=P.w(J.E(p.h(0,q),C.a_))
r.Q.setAttribute("x","0")
r.Q.setAttribute("y","0")
s=r.Q
s.toString
s.setAttribute("width",H.c(u))
s=r.Q
s.toString
s.setAttribute("height",H.c(t))
s=r.Q
s.toString
s.setAttribute("fill",H.A(J.E(p.h(0,q),C.X)))
s=r.Q
s.toString
s.setAttribute("fill-opacity",H.A(J.E(p.h(0,q),C.Y)))
r.z.appendChild(r.Q)}}
D.F.prototype={
j:function(a){return this.b}}
X.cy.prototype={
bU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
H.v(a,"$ij",[P.z],"$aj")
H.v(b,"$ij",[P.e],"$aj")
u=P.aw()
t=P.aw()
s=a.length
r=b.length
if(r!==s)throw H.d("markerIndices and markerLabels must have same length!")
for(q=this.a,p=q.r2,o=p.length,n=0;n<s;++n){m=a[n]
l=J.a4(m)
if(l<0||l>=o)return H.i(p,l)
k=p[l]
if(n>=r)return H.i(b,n)
this.bT(u,t,m,b[n],k,0,null)}r=q.N
r.appendChild(u)
r.appendChild(t)},
bT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k="http://www.w3.org/2000/svg",j=P.e
g=P.ac($.fV,X.ad,j)
u=this.a
t=J.a4(u.ae(c))
s=J.a4(u.Z(e))-10
r=s-30
if(e<0){s=J.a4(u.Z(0))-10
r=s-30
q=g.h(0,C.a6)}else q=g.h(0,C.a5)
u=document
p=H.k(H.k(C.e.D(u,k,"line"),"$ih"),"$iao")
B.C(p,P.y(["x1",""+t,"y1",""+s,"x2",""+t,"y2",""+r,"stroke",q,"stroke-width","1"],j,j))
a.appendChild(p)
o=P.w(g.h(0,C.a3))
if(typeof o!=="number")return o.V()
n=t-C.b.E(o,3)
if(n>f+o){m=H.k(H.k(C.e.D(u,k,"text"),"$ih"),"$ia2")
m.textContent=d
l=r-C.b.E(o*d.length,2)
B.C(m,P.y(["x",""+n+"px","y",""+l+"px","fill",g.h(0,C.a4),"stroke","none","font-size",""+o+"px","transform","rotate(90, "+n+", "+l+")","cursor","default"],j,j))
b.appendChild(m)
return n}return f}}
X.ad.prototype={
j:function(a){return this.b}}
D.cJ.prototype={
sc4:function(a){this.y=H.v(a,"$iO",[P.q],"$aO")},
sbN:function(a){this.z=H.v(a,"$iO",[P.q],"$aO")},
scj:function(a){this.Q=H.v(a,"$iO",[P.q],"$aO")},
scm:function(a){this.ch=H.v(a,"$iO",[P.q],"$aO")},
sbO:function(a){this.cx=H.v(a,"$iO",[P.q],"$aO")}}
V.aE.prototype={
be:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q=this
q.sbE(P.ac($.dR(),V.r,P.e))
if(i!=null)q.a.A(0,i)
if(q.a.h(0,C.I)!=null){q.cy=P.w(q.a.h(0,C.I))
q.a.ac(0,C.I)}if(q.a.h(0,C.J)!=null){q.db=P.w(q.a.h(0,C.J))
q.a.ac(0,C.J)}u=q.cy
if(u==null)u=q.cy=0
t=q.db
if(t==null){t=q.r2.length-1
q.db=t}if(t<=u)t=q.db=u+1
if(u<0||u>q.r2.length-1)q.cy=0
u=q.r2
s=u.length-1
if(t>s||t<0)q.db=s
q.y2=B.h9(q.a.h(0,C.ak))
q.f=P.w(q.a.h(0,C.am))
q.x=q.r=P.w(q.a.h(0,C.an))
u=F.fG(u,q.cy,q.db,!1,P.w(q.a.h(0,C.ac)))
q.b=u
u=u.d.length
q.rx=new Float64Array(u)
for(r=0;u=q.b.d,r<u.length;++r){t=q.rx
u=u[r]
u.toString;(t&&C.f).i(t,r,u)}q.aT=E.eo(q.rx)[0]
q.aU=E.dT(q.rx)[0]
q.R=E.eo(q.b.a)[0]
q.F=E.dT(q.b.a)[0]
q.N=P.aw()
q.b4()},
b4:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a.h(0,C.B)==null||J.T(j.a.h(0,C.B),"null")?j.cx=null:j.cx=P.Y(j.a.h(0,C.B))
if(i!=null){u=j.F
if(typeof u!=="number")return u.aO()
u=Math.abs(u)>0.0001}else u=!1
if(u){u=j.F
if(typeof i!=="number")return i.S()
if(typeof u!=="number")return H.l(u)
t=i/u
i=j.R
if(typeof i!=="number")return H.l(i)
j.R=t*i
j.F=t*u}j.k1=P.w(j.a.h(0,C.ae))
j.k2=P.w(j.a.h(0,C.ai))
j.k3=P.w(j.a.h(0,C.aj))
j.k4=P.Y(j.a.h(0,C.ad))
j.r1=P.Y(j.a.h(0,C.ag))
if(j.a.h(0,C.ah)!=null){i=j.r1
u=P.Y(j.a.h(0,C.ah))
if(typeof i!=="number")return i.af()
if(typeof u!=="number")return H.l(u)
j.r1=i*u}i=j.f
if(typeof i!=="number")return H.l(i)
j.Q=j.y-2*i
i=j.r
if(typeof i!=="number")return H.l(i)
u=j.x
if(typeof u!=="number")return H.l(u)
j.ch=j.z-i-u
s=j.rx.length
j.fx=1e6
j.fy=0
for(i=s-1,r=null,q=null,p=0,u="";p<s;++p){o=j.rx
if(p>=o.length)return H.i(o,p)
o=o[p]
n=j.k4
if(typeof n!=="number")return H.l(n)
m=j.b.a
if(p>=m.length)return H.i(m,p)
l=m[p]
r=J.a4(j.ae(o*n))
q=J.a4(j.Z(l))
if(!H.dF(j.y2))if(q<0)q=2
else{o=j.ch
if(typeof o!=="number")return H.l(o)
if(q>o)q=o-1}o=p===i
u=o?u+(""+r+" "+q):u+(""+r+" "+q+",")
if(o)j.dy=r
o=j.fy
if(typeof o!=="number")return H.l(o)
if(q>o)j.fy=q
o=j.fx
if(typeof o!=="number")return H.l(o)
if(q<o)j.fx=q}i=j.c
if(i!=null)C.aD.ab(i)
j.c=H.k(H.k(C.e.D(document,"http://www.w3.org/2000/svg","polyline"),"$ih"),"$iaF")
k=j.a.h(0,C.h)
i=P.w(j.a.h(0,C.ab))
j.bW=i
j.x1=!1
j.c.setAttribute("stroke-width",H.c(i))
i=j.ry
if(i!=null){o=P.e
B.C(i,P.y(["stroke",H.c(k),"fill","none"],o,o))}i=j.c
o=j.a.h(0,C.h)
i.toString
i.setAttribute("stroke",H.A(o))
i.setAttribute("fill","none")
i.setAttribute("points",u.charCodeAt(0)==0?u:u)
if(j.a.h(0,C.a8)!=null){i=j.c
u=j.a.h(0,C.a8)
i.toString
i.setAttribute("transform",H.A(u))}j.N.appendChild(j.c)
j.fr=q
if(J.T(j.a.h(0,C.al),"true"))j.bC(r,q)
j.bB()
j.bA(r,q)},
ae:function(a){var u,t,s,r,q=this,p=q.aU,o=q.aT
if(typeof p!=="number")return p.C()
if(typeof o!=="number")return H.l(o)
p-=o
if(Math.abs(p)<0.000001)u=a
else{if(typeof a!=="number")return a.C()
t=q.Q
if(typeof t!=="number")return H.l(t)
s=q.f
if(typeof s!=="number")return H.l(s)
r=q.k1
if(typeof r!=="number")return H.l(r)
u=(a-o)*t/p+s+r}return u},
b3:function(a){var u,t=this,s=t.a5
if(s==null||t.ap==null)return
if(typeof s!=="number")return s.aO()
u=Math.abs(s)<1e-10
if(u&&a<=0){s=t.F
u=t.r1
if(typeof s!=="number")return s.S()
if(typeof u!=="number")return H.l(u)
return s/u}if(u&&a>=t.z){s=t.F
if(typeof s!=="number")return s.a_()
u=t.r1
if(typeof u!=="number")return H.l(u)
return-s/u}u=t.ap
if(typeof u!=="number")return H.l(u)
return-(a-u)/s},
Z:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ch,i=P.Y(l.a.h(0,C.k))
P.Y(l.a.h(0,C.af))
u=l.r1
if(typeof u!=="number")return H.l(u)
t=1-u
if(typeof i!=="number")return H.l(i)
if(t>i)t=i-0.01
if(typeof j!=="number")return H.l(j)
s=l.r
if(typeof s!=="number")return H.l(s)
r=i*j+s
q=l.R
if(typeof q!=="number")return q.J()
if(q<0){p=l.F
if(typeof p!=="number")return p.J()
p=p<0}else p=!1
o=l.F
if(p){if(typeof a!=="number")return a.a_()
a=-a
if(typeof o!=="number")return o.a_()
n=l.F=-q
l.R=-o
o=n}if(typeof o!=="number")return o.C()
q=o-0
p=Math.abs(q)<0.000001
if(p){if(typeof a!=="number")return a.af()
u=a*Math.abs(u)<0.000001}else u=!1
if(u)u=l.a5=0
else if(p){l.a5=0
u=0}else{u=-(t*j+s-r)/q
l.a5=u}s=l.k2
if(typeof s!=="number")return H.l(s)
q=l.k3
if(typeof q!=="number")return H.l(q)
q=r+u*0+s+q
l.ap=q
if(typeof a!=="number")return H.l(a)
k=-u*a+q
try{J.a4(k)
u=k
return u}catch(m){H.Z(m)
return l.z/2}},
bC:function(a,b){var u,t,s,r=this,q=r.ry
if(q!=null)C.ap.ab(q)
if(a==null){a=r.x2
if(a!=null&&r.y1!=null)b=r.y1
else{a=r.dy
if(a!=null&&r.fr!=null)b=r.fr
else return}}u=P.w(r.a.h(0,C.a9))
if(J.T(r.a.h(0,C.aa),"true")){q=r.f
if(typeof q!=="number")return q.V()
q=C.b.E(q,2)
if(typeof a!=="number")return a.u()
q=a>r.y-q}else q=!1
if(q){if(typeof u!=="number")return H.l(u)
a=r.y-u}if(typeof a!=="number")return a.q()
r.x2=a+2
if(typeof u!=="number")return u.V()
q=C.b.E(u,2)
if(typeof b!=="number")return b.C()
r.y1=b-q
t=r.a.h(0,C.h)
q=H.k(H.k(C.e.D(document,"http://www.w3.org/2000/svg","rect"),"$ih"),"$ia1")
r.ry=q
s=P.e
B.C(q,P.y(["x",H.c(r.x2),"y",H.c(r.y1),"width",""+u,"height",""+u,"stroke",H.c(t),"fill","white"],s,s))
r.N.appendChild(r.ry)},
bB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.d,b=c.length
if(b!==0){for(u=0;u<c.length;c.length===b||(0,H.f7)(c),++u){t=c[u]
s=t.parentNode
if(s!=null)s.removeChild(t)}C.a.sk(c,0)}r=d.a.h(0,C.aE)
if(r==null||r.length===0)return
b=P.e
q=H.v(J.ei(C.m.ao(0,r),b),"$ij",[b],"$aj")
t=q.ga6(q)
s=q.a
p=J.a8(s)
if(p.gk(s)<4)return
for(o=t==="POLYLINE_POINT_SHAPE_CIRCLE_EMPTY",n=t==="POLYLINE_POINT_SHAPE_SQUARE_EMPTY",m=H.b(q,1),l=2;l<p.gk(s);l+=2){k=P.Y(H.P(p.h(s,l),m))
j=P.Y(H.P(p.h(s,l+1),m))
i=J.a4(d.ae(k))
h=J.a4(d.Z(j))
g=d.a.h(0,C.aF)
if(g==null)g=d.a.h(0,C.h)
if(n){f=document.createElementNS("http://www.w3.org/2000/svg","rect")
f=H.k(H.k(f,"$ih"),"$ia1")
B.C(f,P.y(["x",H.c(i+18626451505319996e-25),"y",H.c(h+18626451505319996e-25),"width","8","height","8","stroke",H.c(g),"fill","white"],b,b))
e=f}else if(o){f=document.createElementNS("http://www.w3.org/2000/svg","circle")
f=H.k(H.k(f,"$ih"),"$iaT")
B.C(f,P.y(["cx",""+i,"cy",""+h,"r","6","stroke",H.c(g),"fill","white"],b,b))
e=f}else e=null
C.a.l(c,e)
d.N.appendChild(e)}d.a.i(0,C.C,H.P(p.h(s,1),m))},
bA:function(a,b){var u,t,s,r,q=this,p=q.e
if(p!=null)C.aq.ab(p)
if(q.a.h(0,C.C)==null||J.Q(q.a.h(0,C.C))===0)return
p=H.k(H.k(C.e.D(document,"http://www.w3.org/2000/svg","text"),"$ih"),"$ia2")
q.e=p
p.textContent=H.A(q.a.h(0,C.C))
u=P.w(q.a.h(0,C.ao))
p=q.e
if(typeof a!=="number")return a.q()
t=""+(a+8)
if(typeof u!=="number")return u.V()
s=C.b.E(u,4)
if(typeof b!=="number")return b.q()
r=P.e
B.C(p,P.y(["x",t,"y",""+(b+s),"font-size",""+u,"fill",q.a.h(0,C.h),"stroke","none"],r,r))
q.N.appendChild(q.e)},
sbE:function(a){this.a=H.v(a,"$iu",[V.r,P.e],"$au")}}
V.r.prototype={
j:function(a){return this.b}}
X.cN.prototype={
bf:function(a,b,c,d,a0,a1,a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new D.cJ(b),e=b.clientWidth
if(typeof e!=="number")return e.C()
u=b.clientHeight
if(typeof u!=="number")return u.C()
t=P.q
f.sc4(P.bH(15,15,e-30,u-30,t))
f.sbO(P.bH(15,15,0,0,t))
u=f.cx
e=f.y
f.sbN(P.bH(80,u.b,e.c-80-u.a,e.d-70,t))
e=f.z
f.scj(P.bH(e.a,e.b+e.d,e.c,70,t))
e=f.z
f.scm(P.bH(e.a-80,e.b,80,e.d,t))
t=P.aw()
f.f=t
e=P.e
B.C(t,P.y(["width",""+f.y.c,"height",""+f.y.d],e,e))
t=P.aw()
f.r=t
B.C(t,P.y(["x",""+f.z.a,"y",""+f.z.b,"width",""+f.z.c,"height",""+f.z.d],e,e))
t=H.k(H.k(C.e.D(document,"http://www.w3.org/2000/svg","rect"),"$ih"),"$ia1")
f.x=t
B.C(t,P.y(["x",""+f.z.a,"y",""+f.z.b,"width",""+f.z.c,"height",""+f.z.d,"fill","none","stroke","darkgreen","stroke-width","2"],e,e))
u=b.style
u.position="relative"
f.f.appendChild(f.r)
f.f.appendChild(f.x)
u=f.e
if(u!=null)b.appendChild(u)
b.appendChild(f.f)
h.a=f
h.bM()
f=h.e
if(0>=f.length)return H.i(f,0)
f=f[0]
u=M.t
s=P.ac($.dU,u,e)
s.A(0,h.y)
h.sci(s)
s=P.ac($.dU,u,e)
s.A(0,h.z)
h.scl(s)
u=f.r2.length
r=u-1
if(h.y.h(0,C.p)!=null&&J.Q(h.y.h(0,C.p))!==0&&h.y.h(0,C.q)!=null&&J.Q(h.y.h(0,C.q))!==0){q=P.Y(h.y.h(0,C.p))
r=P.Y(h.y.h(0,C.q))}else q=0
t=f.rx
t=(t&&C.f).ga6(t)
p=f.rx
p=(p&&C.f).ga9(p)
o=h.a
n=o.z
o=o.Q
m=f.gck()
l=new M.bh(g,m)
l.az(u,t,p,q,r,!0,g,g,n.c,o.d,n.d,m,h.y,g,{})
h.b=l
m=l.a
n=h.a.Q
l=l.c
if(typeof l!=="number")return H.l(l)
B.C(m,P.y(["x",""+(n.a-l),"y",""+h.a.Q.b],e,e))
B.C(h.b.b.a,P.y(["x",""+h.a.z.a,"y",""+h.a.z.b],e,e))
k=f.b3(0)
j=f.b3(h.a.z.d)
if(k==null)k=f.R
if(j==null)j=f.F
u=f.r1
if(typeof k!=="number")return k.S()
if(typeof u!=="number")return H.l(u)
if(typeof j!=="number")return j.S()
t=h.a
p=t.z
f=M.fA(k/u,j/u,g,g,g,p.d,t.ch.c,p.c,f.gcn(),h.z,g)
h.c=f
f=f.a
p=""+h.a.ch.a
t=h.a.ch
u=h.c.d
if(typeof u!=="number")return H.l(u)
B.C(f,P.y(["x",p,"y",""+(t.b-u)],e,e))
B.C(h.c.b.a,P.y(["x",""+h.a.z.a,"y",""+h.a.z.b],e,e))
h.f=X.eE(h.x,h.ch)
for(i=0;i<1;++i){f=h.a.r
e=h.e
if(i>=e.length)return H.i(e,i)
f.appendChild(e[i].N)}h.a.r.appendChild(h.f.z)
h.a.f.appendChild(h.b.a)
h.a.f.appendChild(h.c.a)
h.a.f.appendChild(h.b.b.a)
h.a.f.appendChild(h.c.b.a)},
bM:function(){var u,t,s,r,q,p,o,n,m,l=this,k=new Array(1)
k.fixed$length=Array
l.sc7(H.n(k,[V.aE]))
if(l.ch==null)l.sc6(l.Q)
for(k=l.d,u=V.r,t=P.e,s=[[P.u,V.r,P.e]],r=0;r<1;++r){q=l.r.length!==1
if(q){q=new Array(1)
q.fixed$length=Array
l.sc5(H.n(q,s))}q=l.r
if(r>=q.length)return H.i(q,r)
p=q[r]
if(p==null){C.a.i(q,r,P.ac($.dR(),u,t))
q=l.r
if(r>=q.length)return H.i(q,r)
q[r].i(0,C.k,"0.8")
q=l.r
if(r>=q.length)return H.i(q,r)
q[r].i(0,C.h,l.ch[r])}else{if(p.h(0,C.k)==null){q=l.r
if(r>=q.length)return H.i(q,r)
q[r].i(0,C.k,"0.8")}q=l.r
if(r>=q.length)return H.i(q,r)
if(q[r].h(0,C.h)==null){q=l.r
if(r>=q.length)return H.i(q,r)
q[r].i(0,C.h,l.ch[r])}o=P.ac($.dR(),u,t)
q=l.r
if(r>=q.length)return H.i(q,r)
o.A(0,q[r])
C.a.i(l.r,r,o)}q=l.e
p=k[r]
n=l.a.z
m=l.r
if(r>=m.length)return H.i(m,r);(q&&C.a).i(q,r,V.fY(p,0,p.length-1,n.c,n.d,null,null,null,m[r]))}},
sc7:function(a){this.e=H.v(a,"$ij",[V.aE],"$aj")},
sc5:function(a){this.r=H.v(a,"$ij",[[P.u,V.r,P.e]],"$aj")},
sci:function(a){this.y=H.v(a,"$iu",[M.t,P.e],"$au")},
scl:function(a){this.z=H.v(a,"$iu",[M.t,P.e],"$au")},
sc6:function(a){this.ch=H.v(a,"$ij",[P.e],"$aj")}}
B.cL.prototype={
$2:function(a,b){this.a.setAttribute(H.A(a),H.A(b))
return},
$S:21}
G.cO.prototype={
bg:function(a,b,c,d,e){var u,t,s,r,q,p,o=this,n=6.283185307179586*d
o.b=new Float64Array(a)
o.a=new Float64Array(a)
for(u=Math.abs(c)<0.00001,t=0;t<a;++t){s=t*n/a
if(t===0&&u)r=b
else{q=s+c
r=b*Math.sin(q)/q}p=o.b
if(t>=p.length)return H.i(p,t)
p[t]=s
p=o.a
if(t>=p.length)return H.i(p,t)
p[t]=r+e}}}
T.cu.prototype={
bc:function(a,b,c,d,e,f){var u,t,s,r,q,p,o,n=this
if(n.cx==null)n.cx=n.e
if(n.cy==null)n.cy=4
u=n.r
u.length
n.ch=2
t=n.x
t.length
s=n.y
s.length
r=new Array(7)
r.fixed$length=Array
n.sc3(H.n(r,[P.z]))
r=n.Q;(r&&C.a).i(r,0,n.z)
for(q=0;q<n.ch;q=p){r=n.Q
p=q+1
if(q>=2)return H.i(u,q);(r&&C.a).i(r,p,u[q])
r=n.Q;(r&&C.a).i(r,p+n.ch,t[q])
r=n.Q
o=n.ch;(r&&C.a).i(r,p+o+o,s[q])}},
b5:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.v(a,"$ij",[P.z],"$aj")
u=k.ch
if(u!==2)throw H.d("Illegal dimension. Should be "+u)
for(u=k.y,t=k.r,s=k.x,r=1,q=0,p=0;p<k.ch;++p){if(p>=2)return H.i(a,p)
o=(a[p]-t[p])/s[p]
o*=o
n=u[p]
m=k.cy
if(typeof m!=="number")return m.af()
l=n/(1+m*o)
n=1-n
if(n>0.001){m=k.cx
if(typeof m!=="number")return m.a_()
q=n*Math.exp(-m*o)
r*=l+q}else r*=l}return r*k.z},
sc3:function(a){this.Q=H.v(a,"$ij",[P.z],"$aj")}}
T.cp.prototype={}
B.cv.prototype={
bd:function(a,b,c,d,e,f){var u,t,s,r,q,p,o=this,n=a[0],m=a[1],l=new Array(n)
l.fixed$length=Array
o.saj(H.n(l,[P.a5]))
o.b=new Float64Array(m)
o.c=new Float64Array(n)
for(u=0;u<2;++u){t=T.fT(a,b[u],c[u],d[u],e[u],f)
if(u===0)o.saj(t)
else o.saj(B.fS(o.a,t))}for(l=o.b,s=m-1,r=o.c,q=n-1,u=0;u<n;++u){if(u>=r.length)return H.i(r,u)
r[u]=u/q
for(p=0;p<m;++p){if(p>=l.length)return H.i(l,p)
l[p]=p/s}}},
saj:function(a){this.a=H.v(a,"$ij",[P.a5],"$aj")}};(function aliases(){var u=J.R.prototype
u.ba=u.j
u=J.bw.prototype
u.bb=u.j})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._instance_1u,s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installInstanceTearOff
u(J,"hl","fL",22)
t(H.bn.prototype,"gbo","bp",10)
s(P,"hu","hc",6)
s(P,"hv","hd",6)
s(P,"hw","he",6)
r(P,"eU","hr",1)
q(P.X.prototype,"gbk",0,1,null,["$2","$1"],["a1","bl"],14,0)
s(P,"hy","hi",3)
var p
t(p=V.aE.prototype,"gck","ae",2)
t(p,"gcn","Z",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.o,null)
s(P.o,[H.e1,J.R,J.bg,P.av,H.bn,P.ae,P.I,H.c5,P.a0,H.aU,H.by,H.br,H.cU,P.aD,H.bO,H.cq,H.cs,P.dz,P.ag,P.X,P.bL,P.b3,P.N,P.dB,P.a_,P.bp,P.ds,P.aL,P.aB,P.bJ,P.db,P.cd,P.j,P.u,P.x,P.D,P.e,P.aG,W.c8,W.b_,W.cb,P.dl,P.du,P.a5,F.bq,V.cD,M.bh,M.t,S.d_,D.co,D.F,X.cy,X.ad,D.cJ,V.aE,V.r,X.cN,G.cO,T.cp,B.cv])
s(J.R,[J.cg,J.ch,J.bw,J.ak,J.al,J.am,H.bC,W.at,W.bM,W.ca,W.a,W.bQ])
s(J.bw,[J.cI,J.ap,J.an])
t(J.e0,J.ak)
s(J.al,[J.b0,J.bu])
s(P.av,[H.bm,W.d8])
s(P.ae,[H.bo,P.aj])
s(P.aj,[H.bk,P.cn,P.cm])
s(P.I,[H.d5,H.H])
s(H.d5,[H.bl,H.bP])
t(H.d7,H.bl)
t(H.d6,H.bP)
t(H.aR,H.d6)
t(P.cw,P.a0)
s(P.cw,[H.aS,H.a6,P.dn])
s(H.aU,[H.c6,H.dQ,H.cT,H.ci,H.dL,H.dM,H.dN,P.d2,P.d1,P.d3,P.d4,P.dA,P.dc,P.dg,P.dd,P.de,P.df,P.dj,P.dk,P.di,P.dh,P.cR,P.cS,P.dD,P.dx,P.dw,P.dy,P.ct,P.cx,P.dq,P.dt,W.da,X.cC,X.cB,V.cF,V.cE,V.cH,V.cG,M.bY,M.c1,M.c2,M.bZ,M.c_,M.c0,B.cL])
s(H.H,[H.b1,H.cr])
s(P.aD,[H.cz,H.cj,H.cY,H.cW,H.c4,H.cK,P.bX,P.bx,P.bD,P.ar,P.cZ,P.cX,P.bK,P.c7,P.c9])
s(H.cT,[H.cP,H.aP])
t(H.d0,P.bX)
t(H.bA,H.bC)
t(H.b8,H.bA)
t(H.b9,H.b8)
t(H.bB,H.b9)
t(H.bz,H.bB)
t(P.dv,P.dB)
t(P.dp,H.b1)
t(P.cl,P.bx)
t(P.ck,P.bp)
t(P.dr,P.ds)
s(P.aB,[P.z,P.q])
s(P.ar,[P.bF,P.ce])
t(W.L,W.at)
s(W.L,[W.aX,W.as,W.aW])
s(W.aX,[W.f,P.h])
s(W.f,[W.bV,W.bW,W.bj,W.aC,W.cc,W.cM])
t(W.aV,W.bM)
t(W.bs,W.aW)
t(W.K,W.a)
t(W.b6,W.K)
t(W.bR,W.bQ)
t(W.bN,W.bR)
t(W.e4,W.d8)
t(W.d9,P.b3)
t(P.O,P.du)
t(P.U,P.h)
s(P.U,[P.ab,P.aH,P.b4])
s(P.ab,[P.aT,P.ao,P.aF,P.a1])
t(P.b5,P.b4)
t(P.a2,P.b5)
t(T.cu,T.cp)
u(H.bP,P.a_)
u(H.b8,P.a_)
u(H.b9,H.br)
u(W.bM,W.c8)
u(W.bQ,P.a_)
u(W.bR,W.b_)})()
var v={mangledGlobalNames:{q:"int",z:"double",aB:"num",e:"String",aL:"bool",x:"Null",j:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.x},{func:1,ret:-1},{func:1,ret:P.z,args:[P.z]},{func:1,args:[,]},{func:1,ret:P.x,args:[,]},{func:1,ret:P.x,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.x,args:[P.q,[P.j,P.q]]},{func:1,ret:P.x,args:[P.q]},{func:1,ret:P.x,args:[W.K]},{func:1,ret:-1,args:[P.o]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.x,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.o],opt:[P.D]},{func:1,ret:P.x,args:[,],opt:[P.D]},{func:1,ret:[P.X,,],args:[,]},{func:1,ret:P.x,args:[P.e,,]},{func:1,args:[W.a]},{func:1,ret:[P.u,M.t,P.e]},{func:1,ret:P.x,args:[P.e,P.e]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.q,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){C.e=W.bs.prototype
C.ay=J.R.prototype
C.a=J.ak.prototype
C.n=J.bu.prototype
C.b=J.b0.prototype
C.j=J.al.prototype
C.c=J.am.prototype
C.az=J.an.prototype
C.f=H.bz.prototype
C.a7=J.cI.prototype
C.aD=P.aF.prototype
C.ap=P.a1.prototype
C.aJ=P.aH.prototype
C.aq=P.a2.prototype
C.K=J.ap.prototype
C.L=new M.t("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X")
C.M=new M.t("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y")
C.p=new M.t("AxA.PHYS_X_START")
C.q=new M.t("AxA.PHYS_X_WIDTH")
C.r=new M.t("AxA.POSITION")
C.N=new M.t("AxA.STROKE")
C.O=new M.t("AxA.STROKE_WIDTH")
C.P=new M.t("AxA.TEXT_COLOR_X")
C.Q=new M.t("AxA.TEXT_COLOR_Y")
C.i=new M.t("AxA.TICK_LENGTH")
C.R=new M.t("AxA.YLEGENDTEXT_DIRECTION")
C.t=new M.t("AxA.XYGRID_STROKE")
C.l=new M.t("AxA.FONT_SIZE")
C.u=new M.t("AxA.XYGRID_STROKE_WIDTH")
C.v=new M.t("AxA.XYGRID_STROKE_OPACITY")
C.w=new M.t("AxA.XYGRID_STROKE_DASH")
C.D=new M.t("AxA.LABELS_OFFSET_Y")
C.x=new M.t("AxA.LEGENDTEXT")
C.E=new M.t("AxA.LEGENDTEXT_OFFSET_X")
C.F=new M.t("AxA.LEGENDTEXT_LEFT_OFFSET_Y")
C.S=new M.t("AxA.LEGENDTEXT_RIGHT_OFFSET_Y")
C.T=new M.t("AxA.NLABELS_X")
C.U=new M.t("AxA.NLABELS_Y")
C.V=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.ar=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.aw=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.as=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.at=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.av=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.au=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.W=function(hooks) { return hooks; }

C.m=new P.ck()
C.ax=new P.dl()
C.d=new P.dv()
C.aA=new P.cm(null)
C.aB=new P.cn(null)
C.X=new D.F("LegA.BG_COLOR")
C.Y=new D.F("LegA.BG_OPACITY")
C.G=new D.F("LegA.TEXT_COLOR")
C.o=new D.F("LegA.TOP_TITLE")
C.y=new D.F("LegA.SUB_TITLES")
C.Z=new D.F("LegA.BG_WIDTH")
C.a_=new D.F("LegA.BG_HEIGTH")
C.a0=new D.F("LegA.COLORED_RECT_WIDTH")
C.a1=new D.F("LegA.COLORED_RECT_HEIGHT")
C.H=new D.F("LegA.FONT_SIZE")
C.a2=new D.F("LegA.LINESEP")
C.z=new D.F("LegA.X")
C.A=new D.F("LegA.Y")
C.a3=new X.ad("MarA.PEAKLAB_FONT_SIZE")
C.aC=new X.ad("MarA.PEAKLAB_CHARS_AFTER_DECPOINTS")
C.a4=new X.ad("MarA.PEAKLAB_CHARS_FILL")
C.a5=new X.ad("MarA.PEAKLAB_MARKER_STROKE_POS")
C.a6=new X.ad("MarA.PEAKLAB_MARKER_STROKE_NEG")
C.aE=new V.r("PyA.POINT_LIST")
C.aF=new V.r("PyA.POINT_LIST_STROKE")
C.B=new V.r("PyA.REFYMAX")
C.a8=new V.r("PyA.ROTATE")
C.a9=new V.r("PyA.SELECTION_ICON_WIDTH")
C.aa=new V.r("PyA.SELECTION_ICON_OUTSIDE")
C.aG=new V.r("PyA.SHOW_LEGEND")
C.h=new V.r("PyA.STROKE")
C.ab=new V.r("PyA.STROKE_WIDTH")
C.ac=new V.r("PyA.COMPRESSION_LENGTH")
C.aH=new V.r("PyA.STROKE_WIDTH_HILITE")
C.ad=new V.r("PyA.XSCALE")
C.ae=new V.r("PyA.XSHIFT")
C.af=new V.r("PyA.YIX1")
C.ag=new V.r("PyA.YSCALE")
C.ah=new V.r("PyA.YSCALE2")
C.ai=new V.r("PyA.YSHIFT1")
C.aj=new V.r("PyA.YSHIFT2")
C.k=new V.r("PyA.YPOSITION_ZERO")
C.aI=new V.r("PyA.YPOSITION_ZERO_RESET")
C.ak=new V.r("PyA.DRAW_OUTSIDE_Y_VIEWPORT")
C.I=new V.r("PyA.OVERRIDE_IXFIRST")
C.J=new V.r("PyA.OVERRIDE_IXLAST")
C.al=new V.r("PyA.DRAW_SELECTION_ICON")
C.am=new V.r("PyA.INSETX")
C.an=new V.r("PyA.INSETY")
C.C=new V.r("PyA.MARKER_TEXT")
C.ao=new V.r("PyA.MARKER_FONTSIZE")})();(function staticFields(){$.aa=0
$.aQ=null
$.eq=null
$.e6=!1
$.f_=null
$.eS=null
$.f5=null
$.dI=null
$.dO=null
$.ec=null
$.aI=null
$.ba=null
$.bb=null
$.e7=!1
$.B=C.d
$.S=[]
$.dU=P.y([C.l,"18",C.L,"50",C.M,"10",C.D,"2",C.x,"",C.E,"20",C.F,"30",C.S,"30",C.T,'{"100":"2", "200":"4", "300":"8", "400":"10", "500":"10", "600":"10", "700":"10"}',C.U,'{"100":"7", "200":"7", "300":"12", "400":"12", "500":"12", "600":"12", "700":"12"}',C.r,"bg",C.N,"black",C.O,"1",C.P,"black",C.Q,"black",C.i,"6",C.R,"bt",C.t,"#A9A9A9",C.u,"1.0",C.v,"0.3",C.w,"0,0"],M.t,P.e)
$.ha=P.y([C.t,"#A9A9A9",C.u,"1.0",C.v,"0.3",C.w,"0,0"],M.t,P.e)
$.ey=P.y([C.X,"lightgrey",C.Y,"0.2",C.Z,"0",C.a_,"100",C.a0,"20",C.a1,"12",C.H,"16",C.a2,"4",C.z,"12",C.A,"12",C.G,"black",C.o,""],D.F,P.e)
$.fV=P.y([C.a3,"12",C.aC,"4",C.a5,"red",C.a6,"DarkCyan",C.a4,"DarkRed"],X.ad,P.e)
$.hV=H.n([200,300],[P.q])
$.hs=H.n([100,-150],[P.z])
$.hx=function(){var u=[P.z]
return H.n([H.n([80,100],u),H.n([150,200],u)],[[P.j,P.z]])}()
$.hL=function(){var u=[P.z]
return H.n([H.n([15,15],u),H.n([20,20],u)],[[P.j,P.z]])}()
$.hQ=function(){var u=[P.z]
return H.n([H.n([0,0],u),H.n([0,0],u)],[[P.j,P.z]])}()})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"i0","f9",function(){return H.eZ("_$dart_dartClosure")})
u($,"i1","eg",function(){return H.eZ("_$dart_js")})
u($,"i4","fa",function(){return H.af(H.cV({
toString:function(){return"$receiver$"}}))})
u($,"i5","fb",function(){return H.af(H.cV({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"i6","fc",function(){return H.af(H.cV(null))})
u($,"i7","fd",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ia","fg",function(){return H.af(H.cV(void 0))})
u($,"ib","fh",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"i9","ff",function(){return H.af(H.eG(null))})
u($,"i8","fe",function(){return H.af(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"id","fj",function(){return H.af(H.eG(void 0))})
u($,"ic","fi",function(){return H.af(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ig","eh",function(){return P.hb()})
u($,"i2","dR",function(){return P.y([C.ac,"1024",C.ak,"true",C.al,"false",C.am,"16",C.an,"12",C.ao,"16",C.B,"null",C.a9,"16",C.aa,"false",C.aG,"true",C.h,"blue",C.ab,"1",C.aH,"2",C.ad,"1.0",C.ae,"0",C.af,"0.0",C.ag,"1",C.ai,"0",C.aj,"0",C.k,"0.9",C.aI,"0.9"],V.r,P.e)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.R,MediaError:J.R,Navigator:J.R,NavigatorConcurrentHardware:J.R,NavigatorUserMediaError:J.R,OverconstrainedError:J.R,PositionError:J.R,SQLError:J.R,ArrayBufferView:H.bC,Float64Array:H.bz,HTMLAudioElement:W.f,HTMLBRElement:W.f,HTMLBaseElement:W.f,HTMLBodyElement:W.f,HTMLButtonElement:W.f,HTMLContentElement:W.f,HTMLDListElement:W.f,HTMLDataElement:W.f,HTMLDataListElement:W.f,HTMLDetailsElement:W.f,HTMLDialogElement:W.f,HTMLEmbedElement:W.f,HTMLFieldSetElement:W.f,HTMLHRElement:W.f,HTMLHeadElement:W.f,HTMLHeadingElement:W.f,HTMLHtmlElement:W.f,HTMLIFrameElement:W.f,HTMLImageElement:W.f,HTMLInputElement:W.f,HTMLLIElement:W.f,HTMLLabelElement:W.f,HTMLLegendElement:W.f,HTMLLinkElement:W.f,HTMLMapElement:W.f,HTMLMediaElement:W.f,HTMLMenuElement:W.f,HTMLMetaElement:W.f,HTMLMeterElement:W.f,HTMLModElement:W.f,HTMLOListElement:W.f,HTMLObjectElement:W.f,HTMLOptGroupElement:W.f,HTMLOptionElement:W.f,HTMLOutputElement:W.f,HTMLParagraphElement:W.f,HTMLParamElement:W.f,HTMLPictureElement:W.f,HTMLPreElement:W.f,HTMLProgressElement:W.f,HTMLQuoteElement:W.f,HTMLScriptElement:W.f,HTMLShadowElement:W.f,HTMLSlotElement:W.f,HTMLSourceElement:W.f,HTMLSpanElement:W.f,HTMLStyleElement:W.f,HTMLTableCaptionElement:W.f,HTMLTableCellElement:W.f,HTMLTableDataCellElement:W.f,HTMLTableHeaderCellElement:W.f,HTMLTableColElement:W.f,HTMLTableElement:W.f,HTMLTableRowElement:W.f,HTMLTableSectionElement:W.f,HTMLTemplateElement:W.f,HTMLTextAreaElement:W.f,HTMLTimeElement:W.f,HTMLTitleElement:W.f,HTMLTrackElement:W.f,HTMLUListElement:W.f,HTMLUnknownElement:W.f,HTMLVideoElement:W.f,HTMLDirectoryElement:W.f,HTMLFontElement:W.f,HTMLFrameElement:W.f,HTMLFrameSetElement:W.f,HTMLMarqueeElement:W.f,HTMLElement:W.f,HTMLAnchorElement:W.bV,HTMLAreaElement:W.bW,HTMLCanvasElement:W.bj,CDATASection:W.as,CharacterData:W.as,Comment:W.as,ProcessingInstruction:W.as,Text:W.as,CSSStyleDeclaration:W.aV,MSStyleCSSProperties:W.aV,CSS2Properties:W.aV,HTMLDivElement:W.aC,XMLDocument:W.aW,Document:W.aW,DOMException:W.ca,Element:W.aX,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,Window:W.at,DOMWindow:W.at,EventTarget:W.at,HTMLFormElement:W.cc,HTMLDocument:W.bs,DocumentFragment:W.L,ShadowRoot:W.L,Attr:W.L,DocumentType:W.L,Node:W.L,HTMLSelectElement:W.cM,TouchEvent:W.b6,CompositionEvent:W.K,FocusEvent:W.K,KeyboardEvent:W.K,MouseEvent:W.K,DragEvent:W.K,PointerEvent:W.K,TextEvent:W.K,WheelEvent:W.K,UIEvent:W.K,NamedNodeMap:W.bN,MozNamedAttrMap:W.bN,SVGCircleElement:P.aT,SVGEllipseElement:P.ab,SVGPathElement:P.ab,SVGPolygonElement:P.ab,SVGGeometryElement:P.ab,SVGAElement:P.U,SVGClipPathElement:P.U,SVGDefsElement:P.U,SVGForeignObjectElement:P.U,SVGGElement:P.U,SVGImageElement:P.U,SVGSwitchElement:P.U,SVGUseElement:P.U,SVGGraphicsElement:P.U,SVGLineElement:P.ao,SVGPolylineElement:P.aF,SVGRectElement:P.a1,SVGAnimateElement:P.h,SVGAnimateMotionElement:P.h,SVGAnimateTransformElement:P.h,SVGAnimationElement:P.h,SVGDescElement:P.h,SVGDiscardElement:P.h,SVGFEBlendElement:P.h,SVGFEColorMatrixElement:P.h,SVGFEComponentTransferElement:P.h,SVGFECompositeElement:P.h,SVGFEConvolveMatrixElement:P.h,SVGFEDiffuseLightingElement:P.h,SVGFEDisplacementMapElement:P.h,SVGFEDistantLightElement:P.h,SVGFEFloodElement:P.h,SVGFEFuncAElement:P.h,SVGFEFuncBElement:P.h,SVGFEFuncGElement:P.h,SVGFEFuncRElement:P.h,SVGFEGaussianBlurElement:P.h,SVGFEImageElement:P.h,SVGFEMergeElement:P.h,SVGFEMergeNodeElement:P.h,SVGFEMorphologyElement:P.h,SVGFEOffsetElement:P.h,SVGFEPointLightElement:P.h,SVGFESpecularLightingElement:P.h,SVGFESpotLightElement:P.h,SVGFETileElement:P.h,SVGFETurbulenceElement:P.h,SVGFilterElement:P.h,SVGLinearGradientElement:P.h,SVGMarkerElement:P.h,SVGMaskElement:P.h,SVGMetadataElement:P.h,SVGPatternElement:P.h,SVGRadialGradientElement:P.h,SVGScriptElement:P.h,SVGSetElement:P.h,SVGStopElement:P.h,SVGStyleElement:P.h,SVGSymbolElement:P.h,SVGTitleElement:P.h,SVGViewElement:P.h,SVGGradientElement:P.h,SVGComponentTransferFunctionElement:P.h,SVGFEDropShadowElement:P.h,SVGMPathElement:P.h,SVGElement:P.h,SVGSVGElement:P.aH,SVGTextPathElement:P.b4,SVGTextContentElement:P.b4,SVGTextElement:P.a2,SVGTSpanElement:P.b5,SVGTextPositioningElement:P.b5})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Float64Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGCircleElement:true,SVGEllipseElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGImageElement:true,SVGSwitchElement:true,SVGUseElement:true,SVGGraphicsElement:false,SVGLineElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPatternElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTextElement:true,SVGTSpanElement:true,SVGTextPositioningElement:false})
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.b8.$nativeSuperclassTag="ArrayBufferView"
H.b9.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.f2,[])
else U.f2([])})})()
//# sourceMappingURL=example.dart.js.map
