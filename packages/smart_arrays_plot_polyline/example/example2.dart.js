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
a[c]=function(){a[c]=function(){H.hq(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.dV(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={dN:function dN(){},
dH:function(a,b,c){if(H.dv(a,"$iF",[b],"$aF"))return new H.cX(a,[b,c])
return new H.bg(a,[b,c])},
ce:function(){return new P.bF("No element")},
bh:function bh(a,b){this.a=a
this.$ti=b},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bj:function bj(a,b){this.a=a
this.$ti=b},
bf:function bf(a,b){this.a=a
this.$ti=b},
cV:function cV(){},
c4:function c4(a,b){this.a=a
this.$ti=b},
bg:function bg(a,b){this.a=a
this.$ti=b},
cX:function cX(a,b){this.a=a
this.$ti=b},
cW:function cW(){},
aL:function aL(a,b){this.a=a
this.$ti=b},
aM:function aM(a,b){this.a=a
this.$ti=b},
c5:function c5(a,b){this.a=a
this.b=b},
F:function F(){},
aW:function aW(){},
bv:function bv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bn:function bn(){},
bL:function bL(){},
aI:function(a){var u,t=H.hr(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
hb:function(a){return v.types[H.W(a)]},
hg:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.G(a).$ibs},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ba(a)
if(typeof u!=="string")throw H.j(H.bO(a))
return u},
aX:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
fD:function(a,b){var u,t
if(typeof a!=="string")H.aH(H.bO(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.a(u,3)
t=H.y(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
fC:function(a){var u,t
if(typeof a!=="string")H.aH(H.bO(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.fe(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bB:function(a){return H.fB(a)+H.dU(H.ar(a),0,null)},
fB:function(a){var u,t,s,r,q,p,o,n=J.G(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.aC||!!n.$iaf){r=C.W(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aI(t.length>1&&C.b.Z(t,0)===36?C.b.b4(t,1):t)},
T:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aH(u,10))>>>0,56320|u&1023)}throw H.j(P.am(a,0,1114111,null,null))},
f:function(a){throw H.j(H.bO(a))},
a:function(a,b){if(a==null)J.R(a)
throw H.j(H.aD(a,b))},
aD:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=H.W(J.R(a))
if(!(b<0)){if(typeof u!=="number")return H.f(u)
t=b>=u}else t=!0
if(t)return P.dK(b,a,s,null,u)
return P.cx(b,s)},
bO:function(a){return new P.ag(!0,a,null,null)},
j:function(a){var u
if(a==null)a=new P.bA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.eR})
u.name=""}else u.toString=H.eR
return u},
eR:function(){return J.ba(this.dartException)},
aH:function(a){throw H.j(a)},
eQ:function(a){throw H.j(P.bm(a))},
a9:function(a){var u,t,s,r,q,p
a=H.eO(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.m([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
en:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ej:function(a,b){return new H.cu(a,b==null?null:b.method)},
dO:function(a,b){var u=b==null,t=u?null:b.method
return new H.ci(a,t,u?null:b.receiver)},
Y:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.dE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dO(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ej(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.eT()
q=$.eU()
p=$.eV()
o=$.eW()
n=$.eZ()
m=$.f_()
l=$.eY()
$.eX()
k=$.f1()
j=$.f0()
i=r.D(u)
if(i!=null)return f.$1(H.dO(H.y(u),i))
else{i=q.D(u)
if(i!=null){i.method="call"
return f.$1(H.dO(H.y(u),i))}else{i=p.D(u)
if(i==null){i=o.D(u)
if(i==null){i=n.D(u)
if(i==null){i=m.D(u)
if(i==null){i=l.D(u)
if(i==null){i=o.D(u)
if(i==null){i=k.D(u)
if(i==null){i=j.D(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ej(H.y(u),i))}}return f.$1(new H.cN(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.bE()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.bE()
return a},
as:function(a){var u
if(a==null)return new H.bK(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.bK(a)},
h7:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
hf:function(a,b,c,d,e,f){H.k(a,"$idJ")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(new P.d0("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hf)
a.$identity=u
return u},
fl:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.cE().constructor.prototype):Object.create(new H.aJ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a6
if(typeof t!=="number")return t.m()
$.a6=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.eb(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.fh(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.eb(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
fh:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.hb,a)
if(typeof a=="function")if(b)return a
else{u=c?H.e9:H.dG
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.j("Error in functionType of tearoff")},
fi:function(a,b,c,d){var u=H.dG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
eb:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fk(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.fi(t,!r,u,b)
if(t===0){r=$.a6
if(typeof r!=="number")return r.m()
$.a6=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.aK
return new Function(r+H.b(q==null?$.aK=H.c2("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a6
if(typeof r!=="number")return r.m()
$.a6=r+1
o+=r
r="return function("+o+"){return this."
q=$.aK
return new Function(r+H.b(q==null?$.aK=H.c2("self"):q)+"."+H.b(u)+"("+o+");}")()},
fj:function(a,b,c,d){var u=H.dG,t=H.e9
switch(b?-1:a){case 0:throw H.j(H.fF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fk:function(a,b){var u,t,s,r,q,p,o,n=$.aK
if(n==null)n=$.aK=H.c2("self")
u=$.e8
if(u==null)u=$.e8=H.c2("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.fj(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.a6
if(typeof u!=="number")return u.m()
$.a6=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.a6
if(typeof u!=="number")return u.m()
$.a6=u+1
return new Function(n+u+"}")()},
dV:function(a,b,c,d,e,f,g){return H.fl(a,b,c,d,!!e,!!f,g)},
dG:function(a){return a.a},
e9:function(a){return a.c},
c2:function(a){var u,t,s,r=new H.aJ("self","target","receiver","name"),q=J.dL(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
du:function(a){if(a==null)H.h0("boolean expression must not be null")
return a},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.a5(a,"String"))},
eC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.a5(a,"double"))},
hM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.a5(a,"num"))},
hI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.a5(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.a5(a,"int"))},
eM:function(a,b){throw H.j(H.a5(a,H.aI(H.y(b).substring(2))))},
hm:function(a,b){throw H.j(H.ea(a,H.aI(H.y(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.eM(a,b)},
eI:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else u=!0
if(u)return a
H.hm(a,b)},
hi:function(a){if(a==null)return a
if(!!J.G(a).$in)return a
throw H.j(H.a5(a,"List<dynamic>"))},
hh:function(a,b){var u
if(a==null)return a
u=J.G(a)
if(!!u.$in)return a
if(u[b])return a
H.eM(a,b)},
eD:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.W(u)]
else return a.$S()}return},
aE:function(a,b){var u
if(typeof a=="function")return!0
u=H.eD(J.G(a))
if(u==null)return!1
return H.es(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.dR)return a
$.dR=!0
try{if(H.aE(a,b))return a
u=H.bQ(b)
t=H.a5(a,u)
throw H.j(t)}finally{$.dR=!1}},
dW:function(a,b){if(a!=null&&!H.dw(a,b))H.aH(H.a5(a,H.bQ(b)))
return a},
a5:function(a,b){return new H.cL("TypeError: "+P.aS(a)+": type '"+H.b(H.ex(a))+"' is not a subtype of type '"+b+"'")},
ea:function(a,b){return new H.c3("CastError: "+P.aS(a)+": type '"+H.b(H.ex(a))+"' is not a subtype of type '"+b+"'")},
ex:function(a){var u,t=J.G(a)
if(!!t.$iaO){u=H.eD(t)
if(u!=null)return H.bQ(u)
return"Closure"}return H.bB(a)},
h0:function(a){throw H.j(new H.cQ(a))},
hq:function(a){throw H.j(new P.c8(a))},
fF:function(a){return new H.cy(a)},
eG:function(a){return v.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ar:function(a){if(a==null)return
return a.$ti},
hL:function(a,b,c){return H.aG(a["$a"+H.b(c)],H.ar(b))},
dX:function(a,b,c,d){var u=H.aG(a["$a"+H.b(c)],H.ar(b))
return u==null?null:u[d]},
N:function(a,b,c){var u=H.aG(a["$a"+H.b(b)],H.ar(a))
return u==null?null:u[c]},
d:function(a,b){var u=H.ar(a)
return u==null?null:u[b]},
bQ:function(a){return H.ap(a,null)},
ap:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aI(a[0].name)+H.dU(a,1,b)
if(typeof a=="function")return H.aI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.W(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a(b,t)
return H.b(b[t])}if('func' in a)return H.fU(a,b)
if('futureOr' in a)return"FutureOr<"+H.ap("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
fU:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.m([],[P.e])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.n(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.a(a0,m)
p=C.b.m(p,a0[m])
l=u[q]
if(l!=null&&l!==P.o)p+=" extends "+H.ap(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.ap(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.ap(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.ap(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.h6(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.y(n[g])
i=i+h+H.ap(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
dU:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.az("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.ap(p,c)}return"<"+u.i(0)+">"},
aG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dv:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ar(a)
t=J.G(a)
if(t[b]==null)return!1
return H.eA(H.aG(t[d],u),null,c,null)},
x:function(a,b,c,d){if(a==null)return a
if(H.dv(a,b,c,d))return a
throw H.j(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aI(b.substring(2))+H.dU(c,0,null),v.mangledGlobalNames)))},
eA:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.a2(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.a2(a[t],b,c[t],d))return!1
return!0},
hJ:function(a,b,c){return a.apply(b,H.aG(J.G(b)["$a"+H.b(c)],H.ar(b)))},
eJ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="o"||a.name==="w"||a===-1||a===-2||H.eJ(u)}return!1},
dw:function(a,b){var u,t
if(a==null)return b==null||b.name==="o"||b.name==="w"||b===-1||b===-2||H.eJ(b)
if(b==null||b===-1||b.name==="o"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aE(a,b)}u=J.G(a).constructor
t=H.ar(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.a2(u,null,b,null)},
X:function(a,b){if(a!=null&&!H.dw(a,b))throw H.j(H.ea(a,H.bQ(b)))
return a},
p:function(a,b){if(a!=null&&!H.dw(a,b))throw H.j(H.a5(a,H.bQ(b)))
return a},
a2:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="o"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="o"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a2(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="w")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.a2("type" in a?a.type:l,b,s,d)
else if(H.a2(a,b,s,d))return!0
else{if(!('$i'+"aT" in t.prototype))return!1
r=t.prototype["$a"+"aT"]
q=H.aG(r,u?a.slice(1):l)
return H.a2(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.es(a,b,c,d)
if('func' in a)return c.name==="dJ"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.eA(H.aG(m,u),b,p,d)},
es:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.a2(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.a2(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.a2(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.a2(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.hl(h,b,g,d)},
hl:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.a2(c[s],d,a[s],b))return!1}return!0},
hK:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hj:function(a){var u,t,s,r,q=H.y($.eH.$1(a)),p=$.dx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.y($.ez.$2(a,q))
if(q!=null){p=$.dx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dD(u)
$.dx[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.dC[q]=u
return u}if(s==="-"){r=H.dD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.eL(a,u)
if(s==="*")throw H.j(P.eo(q))
if(v.leafTags[q]===true){r=H.dD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.eL(a,u)},
eL:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.dZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dD:function(a){return J.dZ(a,!1,null,!!a.$ibs)},
hk:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dD(u)
else return J.dZ(u,c,null,null)},
hd:function(){if(!0===$.dY)return
$.dY=!0
H.he()},
he:function(){var u,t,s,r,q,p,o,n
$.dx=Object.create(null)
$.dC=Object.create(null)
H.hc()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.eN.$1(q)
if(p!=null){o=H.hk(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
hc:function(){var u,t,s,r,q,p,o=C.av()
o=H.aB(C.aw,H.aB(C.ax,H.aB(C.X,H.aB(C.X,H.aB(C.ay,H.aB(C.az,H.aB(C.aA(C.W),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.eH=new H.dz(r)
$.ez=new H.dA(q)
$.eN=new H.dB(p)},
aB:function(a,b){return a(b)||b},
eP:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
h5:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
eO:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ho:function(a,b,c){var u=H.hp(a,b,c)
return u},
hp:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.eO(b),'g'),H.h5(c))},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cu:function cu(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.a=a},
dE:function dE(a){this.a=a},
bK:function bK(a){this.a=a
this.b=null},
aO:function aO(){},
cI:function cI(){},
cE:function cE(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a){this.a=a},
c3:function c3(a){this.a=a},
cy:function cy(a){this.a=a},
cQ:function cQ(a){this.a=a},
ae:function ae(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ch:function ch(a){this.a=a},
co:function co(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cp:function cp(a,b){this.a=a
this.$ti=b},
cq:function cq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dz:function dz(a){this.a=a},
dA:function dA(a){this.a=a},
dB:function dB(a){this.a=a},
er:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.aD(b,a))},
bz:function bz(){},
bx:function bx(){},
by:function by(){},
bw:function bw(){},
b2:function b2(){},
b3:function b3(){},
h6:function(a){return J.fq(a?Object.keys(a):[],null)},
hr:function(a){return v.mangledGlobalNames[a]}},J={
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.dY==null){H.hd()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.j(P.eo("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.e_()]
if(r!=null)return r
r=H.hj(a)
if(r!=null)return r
if(typeof a=="function")return C.aD
u=Object.getPrototypeOf(a)
if(u==null)return C.ac
if(u===Object.prototype)return C.ac
if(typeof s=="function"){Object.defineProperty(s,$.e_(),{value:C.L,enumerable:false,writable:true,configurable:true})
return C.L}return C.L},
fq:function(a,b){return J.dL(H.m(a,[b]))},
dL:function(a){a.fixed$length=Array
return a},
ed:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fr:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.Z(a,b)
if(t!==32&&t!==13&&!J.ed(t))break;++b}return b},
fs:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.aL(a,u)
if(t!==32&&t!==13&&!J.ed(t))break}return b},
G:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aV.prototype
return J.br.prototype}if(typeof a=="string")return J.ak.prototype
if(a==null)return J.cg.prototype
if(typeof a=="boolean")return J.cf.prototype
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.o)return a
return J.bP(a)},
h8:function(a){if(typeof a=="number")return J.aj.prototype
if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.o)return a
return J.bP(a)},
aq:function(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.o)return a
return J.bP(a)},
aF:function(a){if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.o)return a
return J.bP(a)},
h9:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aV.prototype
return J.aj.prototype}if(a==null)return a
if(!(a instanceof P.o))return J.af.prototype
return a},
eE:function(a){if(typeof a=="number")return J.aj.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.af.prototype
return a},
eF:function(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.af.prototype
return a},
dy:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.o)return a
return J.bP(a)},
ha:function(a){if(a==null)return a
if(!(a instanceof P.o))return J.af.prototype
return a},
f2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.h8(a).m(a,b)},
b9:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).R(a,b)},
D:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aq(a).h(a,b)},
e1:function(a,b,c){return J.aF(a).j(a,b,c)},
f3:function(a,b,c,d){return J.dy(a).bd(a,b,c,d)},
f4:function(a,b,c,d){return J.dy(a).bn(a,b,c,d)},
f5:function(a,b,c){return J.dy(a).bo(a,b,c)},
bR:function(a,b,c){return J.dy(a).bp(a,b,c)},
f6:function(a,b){return J.ha(a).w(a,b)},
e2:function(a,b){return J.aF(a).J(a,b)},
f7:function(a,b,c){return J.aF(a).N(a,b,c)},
f8:function(a,b){return J.aF(a).G(a,b)},
f9:function(a){return J.aF(a).ga4(a)},
bS:function(a){return J.G(a).gu(a)},
e3:function(a){return J.aq(a).gt(a)},
fa:function(a){return J.aq(a).gL(a)},
bT:function(a){return J.aF(a).gv(a)},
fb:function(a){return J.aF(a).ga7(a)},
R:function(a){return J.aq(a).gk(a)},
fc:function(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.h9(a).gau(a)},
at:function(a){return J.eE(a).E(a)},
ba:function(a){return J.G(a).i(a)},
fd:function(a,b){return J.eE(a).c5(a,b)},
fe:function(a){return J.eF(a).aV(a)},
O:function O(){},
cf:function cf(){},
cg:function cg(){},
bt:function bt(){},
cv:function cv(){},
af:function af(){},
ad:function ad(){},
ac:function ac(a){this.$ti=a},
dM:function dM(a){this.$ti=a},
bb:function bb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aj:function aj(){},
aV:function aV(){},
br:function br(){},
ak:function ak(){}},P={
fM:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.h1()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b7(new P.cS(s),1)).observe(u,{childList:true})
return new P.cR(s,u,t)}else if(self.setImmediate!=null)return P.h2()
return P.h3()},
fN:function(a){self.scheduleImmediate(H.b7(new P.cT(H.l(a,{func:1,ret:-1})),0))},
fO:function(a){self.setImmediate(H.b7(new P.cU(H.l(a,{func:1,ret:-1})),0))},
fP:function(a){H.l(a,{func:1,ret:-1})
P.fS(0,a)},
fS:function(a,b){var u=new P.dn()
u.bc(a,b)
return u},
fQ:function(a,b){var u,t,s
b.a=1
try{a.aU(new P.d2(b),new P.d3(b),null)}catch(s){u=H.Y(s)
t=H.as(s)
P.hn(new P.d4(b,u,t))}},
eq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iU")
if(u>=4){t=b.ah()
b.a=a.a
b.c=a.c
P.b1(b,t)}else{t=H.k(b.c,"$iaa")
b.a=2
b.c=a
a.aG(t)}},
b1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iM")
P.b6(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b1(h.a,b)}g=h.a
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
if(m){H.k(q,"$iM")
P.b6(i,i,g.b,q.a,q.b)
return}l=$.z
if(l!==n)$.z=n
else l=i
g=b.c
if((g&15)===8)new P.d8(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.d7(u,b,q).$0()}else if((g&2)!==0)new P.d6(h,u,b).$0()
if(l!=null)$.z=l
g=u.b
if(!!J.G(g).$iaT){if(g.a>=4){k=H.k(o.c,"$iaa")
o.c=null
b=o.a2(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.eq(g,o)
return}}j=b.b
k=H.k(j.c,"$iaa")
j.c=null
b=j.a2(k)
g=u.a
p=u.b
if(!g){H.p(p,H.d(j,0))
j.a=4
j.c=p}else{H.k(p,"$iM")
j.a=8
j.c=p}h.a=j
g=j}},
fY:function(a,b){if(H.aE(a,{func:1,args:[P.o,P.B]}))return b.aR(a,null,P.o,P.B)
if(H.aE(a,{func:1,args:[P.o]}))return H.l(a,{func:1,ret:null,args:[P.o]})
throw H.j(P.e4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
fW:function(){var u,t
for(;u=$.aA,u!=null;){$.b5=null
t=u.b
$.aA=t
if(t==null)$.b4=null
u.a.$0()}},
h_:function(){$.dS=!0
try{P.fW()}finally{$.b5=null
$.dS=!1
if($.aA!=null)$.e0().$1(P.eB())}},
ew:function(a){var u=new P.bH(a)
if($.aA==null){$.aA=$.b4=u
if(!$.dS)$.e0().$1(P.eB())}else $.b4=$.b4.b=u},
fZ:function(a){var u,t,s=$.aA
if(s==null){P.ew(a)
$.b5=$.b4
return}u=new P.bH(a)
t=$.b5
if(t==null){u.b=s
$.aA=$.b5=u}else{u.b=t.b
$.b5=t.b=u
if(u.b==null)$.b4=u}},
hn:function(a){var u=null,t=$.z
if(C.c===t){P.dt(u,u,C.c,a)
return}P.dt(u,u,t,H.l(t.aK(a),{func:1,ret:-1}))},
b6:function(a,b,c,d,e){var u={}
u.a=d
P.fZ(new P.ds(u,e))},
et:function(a,b,c,d,e){var u,t=$.z
if(t===c)return d.$0()
$.z=c
u=t
try{t=d.$0()
return t}finally{$.z=u}},
ev:function(a,b,c,d,e,f,g){var u,t=$.z
if(t===c)return d.$1(e)
$.z=c
u=t
try{t=d.$1(e)
return t}finally{$.z=u}},
eu:function(a,b,c,d,e,f,g,h,i){var u,t=$.z
if(t===c)return d.$2(e,f)
$.z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.z=u}},
dt:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.aK(d):c.bB(d,-1)
P.ew(d)},
cS:function cS(a){this.a=a},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
dn:function dn(){},
dp:function dp(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
U:function U(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
d1:function d1(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a){this.a=a},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a){this.a=a
this.b=null},
an:function an(){},
cG:function cG(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
aY:function aY(){},
a8:function a8(){},
M:function M(a,b){this.a=a
this.b=b},
dq:function dq(){},
ds:function ds(a,b){this.a=a
this.b=b},
dj:function dj(){},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function(a,b){return new H.ae([a,b])},
q:function(a,b,c){return H.x(H.h7(a,new H.ae([b,c])),"$ieh",[b,c],"$aeh")},
fu:function(a,b){return new H.ae([a,b])},
fp:function(a,b,c){var u,t
if(P.dT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.m([],[P.e])
C.a.n($.Q,a)
try{P.fV(a,u)}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}t=P.em(b,H.hh(u,"$iI"),", ")+c
return t.charCodeAt(0)==0?t:t},
ec:function(a,b,c){var u,t
if(P.dT(a))return b+"..."+c
u=new P.az(b)
C.a.n($.Q,a)
try{t=u
t.a=P.em(t.a,a,", ")}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dT:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
fV:function(a,b){var u,t,s,r,q,p,o,n=a.gv(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.b(n.gq())
C.a.n(b,u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.a(b,-1)
t=b.pop()
if(0>=b.length)return H.a(b,-1)
s=b.pop()}else{r=n.gq();++l
if(!n.p()){if(l<=4){C.a.n(b,H.b(r))
return}t=H.b(r)
if(0>=b.length)return H.a(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gq();++l
for(;n.p();r=q,q=p){p=n.gq();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.a(b,-1)
m-=b.pop().length+2;--l}C.a.n(b,"...")
return}}s=H.b(r)
t=H.b(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.n(b,o)
C.a.n(b,s)
C.a.n(b,t)},
Z:function(a,b,c){var u=P.ft(b,c)
a.A(0,new P.cr(u,b,c))
return u},
ei:function(a){var u,t={}
if(P.dT(a))return"{...}"
u=new P.az("")
try{C.a.n($.Q,a)
u.a+="{"
t.a=!0
a.A(0,new P.ct(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(){},
cs:function cs(){},
ct:function ct(a,b){this.a=a
this.b=b},
a_:function a_(){},
fX:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.j(H.bO(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.Y(s)
r=P.dI(String(t),null)
throw H.j(r)}r=P.dr(u)
return r},
dr:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.dc(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.dr(a[u])
return a},
ee:function(a,b,c){return new P.bu(a,b)},
fT:function(a){return a.ci()},
fR:function(a,b,c){var u,t=new P.az(""),s=new P.df(t,[],P.h4())
s.aa(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
dc:function dc(a,b){this.a=a
this.b=b
this.c=null},
de:function de(a){this.a=a},
dd:function dd(a){this.a=a},
bk:function bk(){},
ab:function ab(){},
bu:function bu(a,b){this.a=a
this.b=b},
ck:function ck(a,b){this.a=a
this.b=b},
cj:function cj(){},
cm:function cm(a){this.b=a},
cl:function cl(a){this.a=a},
dg:function dg(){},
dh:function dh(a,b){this.a=a
this.b=b},
df:function df(a,b,c){this.c=a
this.a=b
this.b=c},
t:function(a){var u=H.fD(a,null)
if(u!=null)return u
throw H.j(P.dI(a,null))},
V:function(a){var u=H.fC(a)
if(u!=null)return u
throw H.j(P.dI("Invalid double",a))},
fo:function(a){if(a instanceof H.aO)return a.i(0)
return"Instance of '"+H.b(H.bB(a))+"'"},
fv:function(a,b,c){var u,t=[c],s=H.m([],t)
for(u=J.bT(a);u.p();)C.a.n(s,H.p(u.gq(),c))
if(b)return s
return H.x(J.dL(s),"$in",t,"$an")},
em:function(a,b,c){var u=J.bT(b)
if(!u.p())return a
if(c.length===0){do a+=H.b(u.gq())
while(u.p())}else{a+=H.b(u.gq())
for(;u.p();)a=a+c+H.b(u.gq())}return a},
aS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ba(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fo(a)},
e4:function(a,b,c){return new P.ag(!0,a,b,c)},
cx:function(a,b){return new P.bC(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.bC(b,c,!0,a,d,"Invalid value")},
fE:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.j(P.am(a,0,null,b,null))},
dK:function(a,b,c,d,e){var u=H.W(e==null?J.R(b):e)
return new P.cd(u,!0,a,c,"Index out of range")},
ao:function(a){return new P.cO(a)},
eo:function(a){return new P.cM(a)},
fJ:function(a){return new P.bF(a)},
bm:function(a){return new P.c6(a)},
dI:function(a,b){return new P.cc(a,b)},
fw:function(a,b,c,d,e){return new H.aM(a,[b,c,d,e])},
aC:function aC(){},
E:function E(){},
aw:function aw(){},
bW:function bW(){},
bA:function bA(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cd:function cd(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cO:function cO(a){this.a=a},
cM:function cM(a){this.a=a},
bF:function bF(a){this.a=a},
c6:function c6(a){this.a=a},
bE:function bE(){},
c8:function c8(a){this.a=a},
d0:function d0(a){this.a=a},
cc:function cc(a,b){this.a=a
this.b=b},
L:function L(){},
I:function I(){},
n:function n(){},
v:function v(){},
w:function w(){},
b8:function b8(){},
o:function o(){},
B:function B(){},
e:function e(){},
az:function az(a){this.a=a},
db:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bD:function(a,b,c,d,e){var u,t
if(typeof c!=="number")return c.M()
if(c<0)u=-c*0
else u=c
H.p(u,e)
if(typeof d!=="number")return d.M()
if(d<0)t=-d*0
else t=d
return new P.a0(a,b,u,H.p(t,e),[e])},
da:function da(){},
di:function di(){},
a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bG:function(){var u=H.k(C.j.F(document,"http://www.w3.org/2000/svg","svg"),"$ii")
u.setAttribute("version","1.1")
return H.k(u,"$ia1")},
aN:function aN(){},
a7:function a7(){},
S:function S(){},
al:function al(){},
ay:function ay(){},
K:function K(){},
i:function i(){},
a1:function a1(){},
aZ:function aZ(){},
a4:function a4(){},
b_:function b_(){},
bo:function bo(){}},W={
dQ:function(a,b,c,d,e){var u=c==null?null:W.ey(new W.d_(c),W.c)
u=new W.cZ(a,b,u,!1,[e])
u.aI()
return u},
ey:function(a,b){var u=$.z
if(u===C.c)return a
return u.bC(a,b)},
h:function h(){},
bU:function bU(){},
bV:function bV(){},
au:function au(){},
ah:function ah(){},
aP:function aP(){},
c7:function c7(){},
av:function av(){},
aQ:function aQ(){},
c9:function c9(){},
aR:function aR(){},
c:function c(){},
ai:function ai(){},
cb:function cb(){},
bp:function bp(){},
J:function J(){},
cA:function cA(){},
b0:function b0(){},
H:function H(){},
bJ:function bJ(){},
cY:function cY(){},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cZ:function cZ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
d_:function d_(a){this.a=a},
aU:function aU(){},
ca:function ca(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bI:function bI(){},
bM:function bM(){},
bN:function bN(){}},F={
fm:function(a1,a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a5==null)a5=1024
if(a5<=0)a5=a1.length
if(C.e.b1(a5,2)!==0)++a5
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
if(m<0||m>=s)return H.a(a1,m)
k=a1[m]
if(l<0||l>=n)return H.a(p,l)
p[l]=k}}s=p.length
if(s<=2*a5){o=new Array(s)
o.fixed$length=Array
j=H.m(o,[P.L])
for(m=0;m<s;++m)C.a.j(j,m,u+m)
return new F.bl(p,j)}o=a5*2
j=F.fn(p,o,u)
i=new Float64Array(o)
for(h=0,m=0;o=j.length,m<o;m=f){g=j[m]-u
f=m+2
n=o-1
l=f>n
if(l&&m+1>n)e=C.a.ga7(j)
else if(l){n=m+1
if(n>=o)return H.a(j,n)
e=j[n]-u}else e=j[f]-u
d=new Float64Array(e-g)
for(o=d.length,c=g;c<e;++c){n=c-g
if(c<0||c>=s)return H.a(p,c)
l=p[c]
if(n<0||n>=o)return H.a(d,n)
d[n]=l}b=E.ff(d)
o=b.length
if(0>=o)return H.a(b,0)
C.v.j(i,h,b[0]);++h
if(1>=b.length)return H.a(b,1)
C.v.j(i,h,b[1]);++h}for(s=o-1,a=1,m=0;m<s;m=f){f=m+1
a0=j[f]-j[m]
if(a0>a)a=a0}return new F.bl(i,j)},
fn:function(a,b,c){var u,t,s,r=H.m([],[P.L]),q=a.length,p=q/b
for(u=0;u<b;++u){t=C.h.E(u*p)
C.a.n(r,t+c)
if(t>=q)break}s=r.length
q=q-1+c
if(s<b)C.a.n(r,q)
else C.a.j(r,s-1,q)
return r},
bl:function bl(a,b){this.a=a
this.d=b}},M={
fg:function(a,b,c,d,e,f,g,h,i,j,k){var u=new M.bc(e,i)
u.av(null,a,b,c,d,null,null,e,f,g,h,i,new M.bX(j).$0(),k,{})
return u},
e7:function(a,b){var u,t,s
if(Math.abs(a)<0.000001)return 0.000001
u=C.q.an(Math.log(a)/2.302585092994046)
t=a/Math.pow(10,u)
if(b)if(t<1.5)s=1
else if(t<3)s=2
else s=t<7?5:10
else if(t<=1)s=1
else if(t<=2)s=2
else s=t<=5?5:10
return s*Math.pow(10,u)},
be:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
if(a>b){u=a
t=b}else{u=b
t=a}s=M.e7(u-t,!1)
if(typeof c!=="number")return c.l()
r=M.e7(s/(c-1),!0)
q=C.q.an(t/r)*r
p=C.q.bE(u/r)
o=Math.max(-C.q.an(Math.log(r)/2.302585092994046),0)
o=o
n=H.m([],[P.e])
for(p=p*r+0.5*r,m=q;m<p;m+=r)C.a.n(n,C.h.c6(m,o))
return n},
bc:function bc(a,b){var _=this
_.e=_.d=_.c=_.b=_.a=null
_.f=!1
_.r=a
_.x=b},
bX:function bX(a){this.a=a},
c0:function c0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c1:function c1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bY:function bY(a,b){this.a=a
this.b=b},
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
u:function u(a){this.b=a}},S={
ep:function(a,b,c,d,e){var u=new S.cP(c,d,a,b)
u.sbA(0,P.Z($.fL,M.u,P.e))
if(e!=null)u.b.w(0,e)
u.bD()
return u},
cP:function cP(a,b,c,d){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=c
_.f=d}},D={cn:function cn(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.e=null
_.z=d
_.ch=_.Q=null
_.cx=e
_.db=_.cy=null},C:function C(a){this.b=a},
fy:function(a,b,c,d){var u=new D.cw(a,c)
u.b7(a,!1,c,d)
return u},
cw:function cw(a,b){var _=this
_.a=null
_.b=a
_.c=null
_.d=b
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
P:function P(a){this.b=a},
ek:function(a,b,c){var u
if(c!=null&&b!=null&&Math.abs(b)>1e-8){if(typeof c!=="number")return H.f(c)
if(typeof b!=="number")return H.f(b)
u=a*c/b}else u=a
return u}},V={
fA:function(a,b,c,d,e,f,g,h,i){var u=new V.ax(H.m([],[P.a7]),d,e,b,c,a,f)
u.b8(a,b,c,d,e,f,g,h,i)
return u},
ax:function ax(a,b,c,d,e,f,g){var _=this
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
_.O=_.bO=_.y2=_.y1=_.x2=null
_.cg=g
_.am=_.a3=_.B=_.P=_.aN=_.aM=null},
r:function r(a){this.b=a}},X={
fG:function(a,b,c,d,e,f,g,h){var u=new X.cB(g,h,a,b,e,c,d,H.m(["blue","red","magenta","green","orange","cyan","lightgreen","crimson","darkred","darkgreen"],[P.e]),f)
u.b9(a,b,c,d,e,f,g,h)
return u},
fH:function(a,b){var u,t,s,r,q,p,o,n="legend",m=D.C,l=P.e,k=P.Z($.eg,m,l)
if(a!=null)k.w(0,a)
if(k.h(0,C.o)==null)return
if(k.h(0,C.r)!=null){u=H.x(J.e2(C.n.ak(0,k.h(0,C.r)),l),"$in",[l],"$an")
t=J.R(u.a)}else{t=0
u=null}s=new H.ae([l,[P.v,D.C,P.e]])
r=P.bG()
q=new D.cn(s,new H.ae([l,P.a4]),new H.ae([l,P.K]),r,t)
q.cy=t
s.j(0,n,P.Z($.eg,m,l))
m=k.gL(k)
if(m)J.f6(s.h(0,n),k)
r.setAttribute("x",H.y(J.D(s.h(0,n),C.t)))
r.setAttribute("y",H.y(J.D(s.h(0,n),C.u)))
q.r=P.t(J.D(s.h(0,n),C.a9))
m=H.y(J.D(s.h(0,n),C.o))
q.db=m
if(m!=null&&m.length!==0)q.aO("TOP_TITLE_ID",m,null)
p=P.fv(C.a.b3(b,0,t),!0,l)
for(o=t-1,m=H.d(u,1);o>=0;--o){l=""+(o+1)
s=H.X(J.D(u.a,o),m)
if(o>=p.length)return H.a(p,o)
q.b2(l,s,p[o])}return q},
cB:function cB(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.r=_.f=null
_.x=d
_.y=e
_.z=f
_.Q=g
_.ch=h
_.cx=i}},B={
fK:function(a){if(a==="true")return!0
return!1},
ef:function(a){var u=P.e
return H.x(J.f7(C.n.ak(0,a),u,u),"$iv",[u,u],"$av")},
A:function(a,b){b.A(0,new B.cz(a))},
cz:function cz(a){this.a=a}},G={
fI:function(a,b,c,d,e){var u=new G.cC()
u.ba(a,b,c,d,e)
return u},
cC:function cC(){this.b=this.a=null}},R={
el:function(a,b,c,d,e,f){var u=new R.cD()
u.bb(a,b,c,d,e,f)
return u},
cD:function cD(){this.a=null}},E={
e5:function(a){var u,t,s,r,q,p=-17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q>t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
e6:function(a){var u,t,s,r,q,p=17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q<t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
ff:function(a){var u,t,s,r,q,p,o
for(u=a.length,t=-1,s=-17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q>s){s=q
t=r}}for(p=-1,o=17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q<o){o=q
p=r}}u=[P.E]
if(p<=t)return H.m([o,s],u)
else return H.m([s,o],u)}},Z={
eK:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="100 * sin(x) / x",d="Number of periods (2*\u03c0)",c=G.fI(1000,100,0,8,0).a,b=R.el(2000,20,0,8,0,0).a,a=R.el(600,50,1.5707963,6,0,0).a,a0=[P.bo],a1=[H.m([c,b],a0),H.m([c],a0),H.m([a],a0)]
a0=new Array(3)
a0.fixed$length=Array
u=H.m(a0,[[P.n,[P.v,V.r,P.e]]])
a0=new Array(3)
a0.fixed$length=Array
t=[[P.v,M.u,P.e]]
s=H.m(a0,t)
a0=new Array(3)
a0.fixed$length=Array
r=H.m(a0,t)
t=new Array(3)
t.fixed$length=Array
q=H.m(t,[[P.v,D.C,P.e]])
t=V.r
a0=P.e
p=[[P.v,V.r,P.e]]
C.a.j(u,0,H.m([P.q([C.i,"0.8"],t,a0),P.q([C.i,"0.8"],t,a0)],p))
C.a.j(u,1,H.m([P.q([C.i,"0.8"],t,a0)],p))
C.a.j(u,2,H.m([P.q([C.i,"0.5",C.I,"0.85",C.f,"magenta"],t,a0)],p))
p=M.u
C.a.j(s,0,P.q([C.l,"0",C.m,"8",C.d,d],p,a0))
C.a.j(s,1,P.q([C.l,"0",C.m,"8",C.d,d],p,a0))
C.a.j(s,2,P.q([C.l,"0",C.m,"600",C.d,"Number of points"],p,a0))
C.a.j(r,0,P.q([C.d,"Value"],p,a0))
C.a.j(r,1,P.q([C.d,"Intensity"],p,a0))
C.a.j(r,2,P.q([C.d,"Pressure"],p,a0))
p=[a0]
t=D.C
C.a.j(q,0,P.q([C.o,"Multi-plot (1) in same div",C.r,C.n.al(H.m([e," 20 * sin(x)"],p)),C.t,"35",C.u,"15"],t,a0))
C.a.j(q,1,P.q([C.o,"Multi-plot (2) in same div",C.r,C.n.al(H.m([e],p)),C.t,"35",C.u,"15"],t,a0))
C.a.j(q,2,P.q([C.o,"Multi-plot (3) in same div",C.r,C.n.al(H.m(["50 * cosine(x)"],p)),C.t,"35",C.u,"15"],t,a0))
o=[H.m(["blue","red"],p),H.m(["darkred"],p),H.m(["magenta"],p)]
p=document
n=H.eI(p.querySelector("#app_div"),"$iav")
m=H.eI(p.querySelector("#plot_div"),"$iav")
p=m.style
a0=H.b(n.clientWidth)+"px"
p.width=a0
a0=H.b(n.clientHeight)+"px"
p.height=a0
a0=[P.E]
l=D.fy(m,!1,H.m([H.m([0,0,0.5,0.5],a0),H.m([0.5,0,0.5,0.5],a0),H.m([0.1,0.5,0.7,0.5],a0)],[[P.n,P.E]]),null)
for(a0=u.length,t=s.length,p=r.length,k=q.length,j=0;j<3;++j){i=a1[j]
if(j>=a0)return H.a(u,j)
h=u[j]
if(j>=t)return H.a(s,j)
g=s[j]
if(j>=p)return H.a(r,j)
f=r[j]
if(j>=k)return H.a(q,j)
X.fG(i,h,g,f,q[j],o[j],l,j)}}}
var w=[C,H,J,P,W,F,M,S,D,V,X,B,G,R,E,Z]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dN.prototype={}
J.O.prototype={
R:function(a,b){return a===b},
gu:function(a){return H.aX(a)},
i:function(a){return"Instance of '"+H.b(H.bB(a))+"'"}}
J.cf.prototype={
i:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$iaC:1}
J.cg.prototype={
R:function(a,b){return null==b},
i:function(a){return"null"},
gu:function(a){return 0}}
J.bt.prototype={
gu:function(a){return 0},
i:function(a){return String(a)}}
J.cv.prototype={}
J.af.prototype={}
J.ad.prototype={
i:function(a){var u=a[$.eS()]
if(u==null)return this.b6(a)
return"JavaScript function for "+H.b(J.ba(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$idJ:1}
J.ac.prototype={
J:function(a,b){return new H.aL(a,[H.d(a,0),b])},
n:function(a,b){H.p(b,H.d(a,0))
if(!!a.fixed$length)H.aH(P.ao("add"))
a.push(b)},
G:function(a,b){H.W(b)
if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
b3:function(a,b,c){var u=a.length
if(b>u)throw H.j(P.am(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.j(P.am(c,b,a.length,"end",null))
if(b===c)return H.m([],[H.d(a,0)])
return H.m(a.slice(b,c),[H.d(a,0)])},
ga4:function(a){if(a.length>0)return a[0]
throw H.j(H.ce())},
ga7:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.j(H.ce())},
gt:function(a){return a.length===0},
gL:function(a){return a.length!==0},
i:function(a){return P.ec(a,"[","]")},
gv:function(a){return new J.bb(a,a.length,[H.d(a,0)])},
gu:function(a){return H.aX(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.aH(P.ao("set length"))
if(b<0)throw H.j(P.am(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.j(H.aD(a,b))
return a[b]},
j:function(a,b,c){H.p(c,H.d(a,0))
if(!!a.immutable$list)H.aH(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.j(H.aD(a,b))
a[b]=c},
$iF:1,
$iI:1,
$in:1}
J.dM.prototype={}
J.bb.prototype={
gq:function(){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.j(H.eQ(s))
u=t.c
if(u>=r){t.saB(null)
return!1}t.saB(s[u]);++t.c
return!0},
saB:function(a){this.d=H.p(a,H.d(this,0))},
$ibq:1}
J.aj.prototype={
gaP:function(a){return a===0?1/a<0:a<0},
gau:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
bE:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.j(P.ao(""+a+".ceil()"))},
an:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.j(P.ao(""+a+".floor()"))},
E:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.ao(""+a+".round()"))},
c6:function(a,b){var u
if(b<0||b>20)throw H.j(P.am(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaP(a))return"-"+u
return u},
c5:function(a,b){var u
if(b>20)throw H.j(P.am(b,0,20,"fractionDigits",null))
u=a.toExponential(b)
if(a===0&&this.gaP(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b1:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
V:function(a,b){return(a|0)===a?a/b|0:this.br(a,b)},
br:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.j(P.ao("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.bq(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
bq:function(a,b){return b>31?0:a>>>b},
$iE:1,
$ib8:1}
J.aV.prototype={
gau:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
$iL:1}
J.br.prototype={}
J.ak.prototype={
aL:function(a,b){if(b<0)throw H.j(H.aD(a,b))
if(b>=a.length)H.aH(H.aD(a,b))
return a.charCodeAt(b)},
Z:function(a,b){if(b>=a.length)throw H.j(H.aD(a,b))
return a.charCodeAt(b)},
m:function(a,b){H.y(b)
if(typeof b!=="string")throw H.j(P.e4(b,null,null))
return a+b},
T:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.j(P.cx(b,null))
if(b>c)throw H.j(P.cx(b,null))
if(c>a.length)throw H.j(P.cx(c,null))
return a.substring(b,c)},
b4:function(a,b){return this.T(a,b,null)},
aV:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.Z(r,0)===133){u=J.fr(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aL(r,t)===133?J.fs(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
bF:function(a,b,c){if(c>a.length)throw H.j(P.am(c,0,a.length,null,null))
return H.eP(a,b,c)},
K:function(a,b){return this.bF(a,b,0)},
i:function(a){return a},
gu:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ifx:1,
$ie:1}
H.bh.prototype={
a8:function(a,b,c,d){var u,t
H.l(a,{func:1,ret:-1,args:[H.d(this,1)]})
u=this.a.aQ(null,!0,H.l(c,{func:1,ret:-1}))
t=new H.bi(u,$.z,this.$ti)
u.ao(t.gbk())
t.ao(a)
t.ap(0,d)
return t},
aQ:function(a,b,c){return this.a8(a,b,c,null)},
J:function(a,b){return new H.bh(this.a,[H.d(this,0),b])},
$aan:function(a,b){return[b]}}
H.bi.prototype={
ao:function(a){var u=H.d(this,1)
H.l(a,{func:1,ret:-1,args:[u]})
this.sbi(a==null?null:H.l(a,{func:1,ret:null,args:[u]}))},
ap:function(a,b){var u,t=this
t.a.ap(0,b)
if(b==null)t.d=null
else{u=P.o
if(H.aE(b,{func:1,args:[P.w,P.w]}))t.d=t.b.aR(H.l(b,{func:1,args:[P.o,P.B]}),null,u,P.B)
else t.d=H.l(H.l(b,{func:1,args:[P.o]}),{func:1,ret:null,args:[u]})}},
bl:function(a){var u,t,s,r,q,p,o,n,m=this,l=null
H.p(a,H.d(m,0))
r=m.c
if(r==null)return
u=null
try{u=H.X(a,H.d(m,1))}catch(q){t=H.Y(q)
s=H.as(q)
r=m.d
if(r==null)P.b6(l,l,m.b,t,H.k(s,"$iB"))
else{p=H.aE(r,{func:1,args:[P.w,P.w]})
o=m.b
n=m.d
if(p)o.c2(H.l(n,{func:1,ret:-1,args:[,P.B]}),t,s,l,P.B)
else o.ar(H.l(n,{func:1,ret:-1,args:[,]}),t,l)}return}m.b.ar(r,u,H.d(m,1))},
sbi:function(a){this.c=H.l(a,{func:1,ret:-1,args:[H.d(this,1)]})},
$iaY:1,
$aaY:function(a,b){return[b]}}
H.bj.prototype={
N:function(a,b,c){return new H.bj(this.a,[H.d(this,0),H.d(this,1),b,c])},
$acF:function(a,b,c,d){return[c,d]},
$aa8:function(a,b,c,d){return[c,d]}}
H.bf.prototype={
N:function(a,b,c){return new H.bf(this.a,[H.d(this,0),H.d(this,1),b,c])},
$acF:function(a,b,c,d){return[c,d]},
$aa8:function(a,b,c,d){return[c,d]},
$aab:function(a,b,c,d){return[c,d]}}
H.cV.prototype={
gv:function(a){return new H.c4(J.bT(this.gI()),this.$ti)},
gk:function(a){return J.R(this.gI())},
gt:function(a){return J.e3(this.gI())},
gL:function(a){return J.fa(this.gI())},
G:function(a,b){H.W(b)
return H.X(J.f8(this.gI(),b),H.d(this,1))},
i:function(a){return J.ba(this.gI())},
$aI:function(a,b){return[b]}}
H.c4.prototype={
p:function(){return this.a.p()},
gq:function(){return H.X(this.a.gq(),H.d(this,1))},
$ibq:1,
$abq:function(a,b){return[b]}}
H.bg.prototype={
J:function(a,b){return H.dH(this.a,H.d(this,0),b)},
gI:function(){return this.a}}
H.cX.prototype={$iF:1,
$aF:function(a,b){return[b]}}
H.cW.prototype={
h:function(a,b){return H.X(J.D(this.a,b),H.d(this,1))},
$iF:1,
$aF:function(a,b){return[b]},
$aa3:function(a,b){return[b]},
$in:1,
$an:function(a,b){return[b]}}
H.aL.prototype={
J:function(a,b){return new H.aL(this.a,[H.d(this,0),b])},
gI:function(){return this.a}}
H.aM.prototype={
N:function(a,b,c){return new H.aM(this.a,[H.d(this,0),H.d(this,1),b,c])},
h:function(a,b){return H.X(this.a.h(0,b),H.d(this,3))},
j:function(a,b,c){var u=this
H.p(b,H.d(u,2))
H.p(c,H.d(u,3))
u.a.j(0,H.X(b,H.d(u,0)),H.X(c,H.d(u,1)))},
w:function(a,b){var u=this,t=H.d(u,2),s=H.d(u,3)
u.a.w(0,new H.aM(H.x(b,"$iv",[t,s],"$av"),[t,s,H.d(u,0),H.d(u,1)]))},
A:function(a,b){var u=this
u.a.A(0,new H.c5(u,H.l(b,{func:1,ret:-1,args:[H.d(u,2),H.d(u,3)]})))},
gC:function(){return H.dH(this.a.gC(),H.d(this,0),H.d(this,2))},
gk:function(a){var u=this.a
return u.gk(u)},
gt:function(a){var u=this.a
return u.gt(u)},
$aa_:function(a,b,c,d){return[c,d]},
$av:function(a,b,c,d){return[c,d]}}
H.c5.prototype={
$2:function(a,b){var u=this.a
H.p(a,H.d(u,0))
H.p(b,H.d(u,1))
this.b.$2(H.X(a,H.d(u,2)),H.X(b,H.d(u,3)))},
$S:function(){var u=this.a
return{func:1,ret:P.w,args:[H.d(u,0),H.d(u,1)]}}}
H.F.prototype={}
H.aW.prototype={
gv:function(a){var u=this
return new H.bv(u,u.gk(u),[H.N(u,"aW",0)])},
gt:function(a){return this.gk(this)===0}}
H.bv.prototype={
gq:function(){return this.d},
p:function(){var u,t=this,s=t.a,r=J.aq(s),q=r.gk(s)
if(t.b!==q)throw H.j(P.bm(s))
u=t.c
if(u>=q){t.saw(null)
return!1}t.saw(r.G(s,u));++t.c
return!0},
saw:function(a){this.d=H.p(a,H.d(this,0))},
$ibq:1}
H.bn.prototype={}
H.bL.prototype={}
H.cJ.prototype={
D:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.cu.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ci.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.cN.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.dE.prototype={
$1:function(a){if(!!J.G(a).$iaw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.bK.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iB:1}
H.aO.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$idJ:1,
gcd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cI.prototype={}
H.cE.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aI(u)+"'"}}
H.aJ.prototype={
R:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.aJ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gu:function(a){var u,t=this.c
if(t==null)u=H.aX(this.a)
else u=typeof t!=="object"?J.bS(t):H.aX(t)
return(u^H.aX(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.bB(u))+"'")}}
H.cL.prototype={
i:function(a){return this.a}}
H.c3.prototype={
i:function(a){return this.a}}
H.cy.prototype={
i:function(a){return"RuntimeError: "+H.b(this.a)}}
H.cQ.prototype={
i:function(a){return"Assertion failed: "+P.aS(this.a)}}
H.ae.prototype={
gk:function(a){return this.a},
gt:function(a){return this.a===0},
gL:function(a){return!this.gt(this)},
gC:function(){return new H.cp(this,[H.d(this,0)])},
W:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.bh(u,a)}else{t=this.bQ(a)
return t}},
bQ:function(a){var u=this,t=u.d
if(t==null)return!1
return u.a6(u.a0(t,u.a5(a)),a)>=0},
w:function(a,b){H.x(b,"$iv",this.$ti,"$av").A(0,new H.ch(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a1(r,b)
s=t==null?null:t.b
return s}else return q.bR(b)},
bR:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.a0(r,s.a5(a))
t=s.a6(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
H.p(b,H.d(s,0))
H.p(c,H.d(s,1))
if(typeof b==="string"){u=s.b
s.ay(u==null?s.b=s.af():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.ay(t==null?s.c=s.af():t,b,c)}else s.bT(b,c)},
bT:function(a,b){var u,t,s,r,q=this
H.p(a,H.d(q,0))
H.p(b,H.d(q,1))
u=q.d
if(u==null)u=q.d=q.af()
t=q.a5(a)
s=q.a0(u,t)
if(s==null)q.ai(u,t,[q.ag(a,b)])
else{r=q.a6(s,a)
if(r>=0)s[r].b=b
else s.push(q.ag(a,b))}},
aS:function(a,b){var u=this.bS(b)
return u},
bS:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=q.a5(a)
t=q.a0(p,u)
s=q.a6(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bs(r)
if(t.length===0)q.aC(p,u)
return r.b},
A:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.d(s,0),H.d(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.j(P.bm(s))
u=u.c}},
ay:function(a,b,c){var u,t=this
H.p(b,H.d(t,0))
H.p(c,H.d(t,1))
u=t.a1(a,b)
if(u==null)t.ai(a,b,t.ag(b,c))
else u.b=c},
aE:function(){this.r=this.r+1&67108863},
ag:function(a,b){var u,t=this,s=new H.co(H.p(a,H.d(t,0)),H.p(b,H.d(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aE()
return s},
bs:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aE()},
a5:function(a){return J.bS(a)&0x3ffffff},
a6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.b9(a[t].a,b))return t
return-1},
i:function(a){return P.ei(this)},
a1:function(a,b){return a[b]},
a0:function(a,b){return a[b]},
ai:function(a,b,c){a[b]=c},
aC:function(a,b){delete a[b]},
bh:function(a,b){return this.a1(a,b)!=null},
af:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ai(t,u,t)
this.aC(t,u)
return t},
$ieh:1}
H.ch.prototype={
$2:function(a,b){var u=this.a
u.j(0,H.p(a,H.d(u,0)),H.p(b,H.d(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.w,args:[H.d(u,0),H.d(u,1)]}}}
H.co.prototype={}
H.cp.prototype={
gk:function(a){return this.a.a},
gt:function(a){return this.a.a===0},
gv:function(a){var u=this.a,t=new H.cq(u,u.r,this.$ti)
t.c=u.e
return t}}
H.cq.prototype={
gq:function(){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.j(P.bm(t))
else{t=u.c
if(t==null){u.sax(null)
return!1}else{u.sax(t.a)
u.c=u.c.c
return!0}}},
sax:function(a){this.d=H.p(a,H.d(this,0))},
$ibq:1}
H.dz.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.dA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dB.prototype={
$1:function(a){return this.a(H.y(a))},
$S:10}
H.bz.prototype={}
H.bx.prototype={
gk:function(a){return a.length},
$ibs:1,
$abs:function(){}}
H.by.prototype={
h:function(a,b){H.er(b,a,a.length)
return a[b]},
j:function(a,b,c){H.eC(c)
H.er(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.E]},
$abn:function(){return[P.E]},
$aa3:function(){return[P.E]},
$iI:1,
$aI:function(){return[P.E]},
$in:1,
$an:function(){return[P.E]}}
H.bw.prototype={$ibo:1}
H.b2.prototype={}
H.b3.prototype={}
P.cS.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.cR.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:11}
P.cT.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cU.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dn.prototype={
bc:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b7(new P.dp(this,b),0),a)
else throw H.j(P.ao("`setTimeout()` not found."))}}
P.dp.prototype={
$0:function(){this.b.$0()},
$S:1}
P.aa.prototype={
bU:function(a){if((this.c&15)!==6)return!0
return this.b.b.aq(H.l(this.d,{func:1,ret:P.aC,args:[P.o]}),a.a,P.aC,P.o)},
bP:function(a){var u=this.e,t=P.o,s={futureOr:1,type:H.d(this,1)},r=this.b.b
if(H.aE(u,{func:1,args:[P.o,P.B]}))return H.dW(r.c1(u,a.a,a.b,null,t,P.B),s)
else return H.dW(r.aq(H.l(u,{func:1,args:[P.o]}),a.a,null,t),s)}}
P.U.prototype={
aU:function(a,b,c){var u,t,s,r=H.d(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.z
if(u!==C.c){H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.fY(b,u)}t=new P.U($.z,[c])
s=b==null?1:3
this.az(new P.aa(t,s,a,b,[r,c]))
return t},
c4:function(a,b){return this.aU(a,null,b)},
az:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iaa")
t.c=a}else{if(s===2){u=H.k(t.c,"$iU")
s=u.a
if(s<4){u.az(a)
return}t.a=s
t.c=u.c}P.dt(null,null,t.b,H.l(new P.d1(t,a),{func:1,ret:-1}))}},
aG:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iaa")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iU")
u=q.a
if(u<4){q.aG(a)
return}p.a=u
p.c=q.c}o.a=p.a2(a)
P.dt(null,null,p.b,H.l(new P.d5(o,p),{func:1,ret:-1}))}},
ah:function(){var u=H.k(this.c,"$iaa")
this.c=null
return this.a2(u)},
a2:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aA:function(a){var u,t,s=this,r=H.d(s,0)
H.dW(a,{futureOr:1,type:r})
u=s.$ti
if(H.dv(a,"$iaT",u,"$aaT"))if(H.dv(a,"$iU",u,null))P.eq(a,s)
else P.fQ(a,s)
else{t=s.ah()
H.p(a,r)
s.a=4
s.c=a
P.b1(s,t)}},
a_:function(a,b){var u,t=this
H.k(b,"$iB")
u=t.ah()
t.a=8
t.c=new P.M(a,b)
P.b1(t,u)},
bg:function(a){return this.a_(a,null)},
$iaT:1}
P.d1.prototype={
$0:function(){P.b1(this.a,this.b)},
$S:0}
P.d5.prototype={
$0:function(){P.b1(this.b,this.a.a)},
$S:0}
P.d2.prototype={
$1:function(a){var u=this.a
u.a=0
u.aA(a)},
$S:6}
P.d3.prototype={
$2:function(a,b){H.k(b,"$iB")
this.a.a_(a,b)},
$1:function(a){return this.$2(a,null)},
$S:13}
P.d4.prototype={
$0:function(){this.a.a_(this.b,this.c)},
$S:0}
P.d8.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.aT(H.l(s.d,{func:1}),null)}catch(r){u=H.Y(r)
t=H.as(r)
if(o.d){s=H.k(o.a.a.c,"$iM").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iM")
else q.b=new P.M(u,t)
q.a=!0
return}if(!!J.G(n).$iaT){if(n instanceof P.U&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iM")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.c4(new P.d9(p),null)
s.a=!1}},
$S:1}
P.d9.prototype={
$1:function(a){return this.a},
$S:14}
P.d7.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.d(s,0)
q=H.p(n.c,r)
p=H.d(s,1)
n.a.b=s.b.b.aq(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.Y(o)
t=H.as(o)
s=n.a
s.b=new P.M(u,t)
s.a=!0}},
$S:1}
P.d6.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iM")
r=m.c
if(H.du(r.bU(u))&&r.e!=null){q=m.b
q.b=r.bP(u)
q.a=!1}}catch(p){t=H.Y(p)
s=H.as(p)
r=H.k(m.a.a.c,"$iM")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.M(t,s)
n.a=!0}},
$S:1}
P.bH.prototype={}
P.an.prototype={
gk:function(a){var u={},t=new P.U($.z,[P.L])
u.a=0
this.a8(new P.cG(u,this),!0,new P.cH(u,t),t.gbf())
return t},
J:function(a,b){return new H.bh(this,[H.N(this,"an",0),b])}}
P.cG.prototype={
$1:function(a){H.p(a,H.N(this.b,"an",0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.N(this.b,"an",0)]}}}
P.cH.prototype={
$0:function(){this.b.aA(this.a.a)},
$S:0}
P.aY.prototype={}
P.a8.prototype={
N:function(a,b,c){return new H.bj(this,[H.N(this,"a8",0),H.N(this,"a8",1),b,c])},
$icF:1}
P.M.prototype={
i:function(a){return H.b(this.a)},
$iaw:1}
P.dq.prototype={$ihG:1}
P.ds.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bA():s
s=this.b
if(s==null)throw H.j(t)
u=H.j(t)
u.stack=s.i(0)
throw u},
$S:0}
P.dj.prototype={
c3:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.c===$.z){a.$0()
return}P.et(r,r,this,a,-1)}catch(s){u=H.Y(s)
t=H.as(s)
P.b6(r,r,this,u,H.k(t,"$iB"))}},
ar:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.p(b,c)
try{if(C.c===$.z){a.$1(b)
return}P.ev(r,r,this,a,b,-1,c)}catch(s){u=H.Y(s)
t=H.as(s)
P.b6(r,r,this,u,H.k(t,"$iB"))}},
c2:function(a,b,c,d,e){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[d,e]})
H.p(b,d)
H.p(c,e)
try{if(C.c===$.z){a.$2(b,c)
return}P.eu(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.Y(s)
t=H.as(s)
P.b6(r,r,this,u,H.k(t,"$iB"))}},
bB:function(a,b){return new P.dl(this,H.l(a,{func:1,ret:b}),b)},
aK:function(a){return new P.dk(this,H.l(a,{func:1,ret:-1}))},
bC:function(a,b){return new P.dm(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
aT:function(a,b){H.l(a,{func:1,ret:b})
if($.z===C.c)return a.$0()
return P.et(null,null,this,a,b)},
aq:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.p(b,d)
if($.z===C.c)return a.$1(b)
return P.ev(null,null,this,a,b,c,d)},
c1:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.p(b,e)
H.p(c,f)
if($.z===C.c)return a.$2(b,c)
return P.eu(null,null,this,a,b,c,d,e,f)},
aR:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}}
P.dl.prototype={
$0:function(){return this.a.aT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.dk.prototype={
$0:function(){return this.a.c3(this.b)},
$S:1}
P.dm.prototype={
$1:function(a){var u=this.c
return this.a.ar(this.b,H.p(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cr.prototype={
$2:function(a,b){this.a.j(0,H.p(a,this.b),H.p(b,this.c))},
$S:4}
P.a3.prototype={
gv:function(a){return new H.bv(a,this.gk(a),[H.dX(this,a,"a3",0)])},
G:function(a,b){return this.h(a,H.W(b))},
gt:function(a){return this.gk(a)===0},
gL:function(a){return!this.gt(a)},
ga4:function(a){if(this.gk(a)===0)throw H.j(H.ce())
return this.h(a,0)},
ga7:function(a){if(this.gk(a)===0)throw H.j(H.ce())
return this.h(a,this.gk(a)-1)},
J:function(a,b){return new H.aL(a,[H.dX(this,a,"a3",0),b])},
i:function(a){return P.ec(a,"[","]")}}
P.cs.prototype={}
P.ct.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:4}
P.a_.prototype={
N:function(a,b,c){return P.fw(this,H.N(this,"a_",0),H.N(this,"a_",1),b,c)},
A:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.N(s,"a_",0),H.N(s,"a_",1)]})
for(u=J.bT(s.gC());u.p();){t=u.gq()
b.$2(t,s.h(0,t))}},
w:function(a,b){var u,t
H.x(b,"$iv",[H.N(this,"a_",0),H.N(this,"a_",1)],"$av")
for(u=b.gC(),u=u.gv(u);u.p();){t=u.gq()
this.j(0,t,b.h(0,t))}},
gk:function(a){return J.R(this.gC())},
gt:function(a){return J.e3(this.gC())},
i:function(a){return P.ei(this)},
$iv:1}
P.dc.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.bm(b):u}},
gk:function(a){var u
if(this.b==null){u=this.c
u=u.gk(u)}else u=this.U().length
return u},
gt:function(a){return this.gk(this)===0},
gC:function(){if(this.b==null)return this.c.gC()
return new P.dd(this)},
j:function(a,b,c){var u,t,s=this
H.y(b)
if(s.b==null)s.c.j(0,b,c)
else if(s.W(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.bu().j(0,b,c)},
w:function(a,b){H.x(b,"$iv",[P.e,null],"$av").A(0,new P.de(this))},
W:function(a){if(this.b==null)return this.c.W(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
A:function(a,b){var u,t,s,r,q=this
H.l(b,{func:1,ret:-1,args:[P.e,,]})
if(q.b==null)return q.c.A(0,b)
u=q.U()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.dr(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.j(P.bm(q))}},
U:function(){var u=H.hi(this.c)
if(u==null)u=this.c=H.m(Object.keys(this.a),[P.e])
return u},
bu:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.fu(P.e,null)
t=p.U()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.j(0,q,p.h(0,q))}if(r===0)C.a.n(t,null)
else C.a.sk(t,0)
p.a=p.b=null
return p.c=u},
bm:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.dr(this.a[a])
return this.b[a]=u},
$aa_:function(){return[P.e,null]},
$av:function(){return[P.e,null]}}
P.de.prototype={
$2:function(a,b){this.a.j(0,H.y(a),b)},
$S:15}
P.dd.prototype={
gk:function(a){var u=this.a
return u.gk(u)},
G:function(a,b){var u
H.W(b)
u=this.a
if(u.b==null)u=u.gC().G(0,b)
else{u=u.U()
if(b<0||b>=u.length)return H.a(u,b)
u=u[b]}return u},
gv:function(a){var u=this.a
if(u.b==null){u=u.gC()
u=u.gv(u)}else{u=u.U()
u=new J.bb(u,u.length,[H.d(u,0)])}return u},
$aF:function(){return[P.e]},
$aaW:function(){return[P.e]},
$aI:function(){return[P.e]}}
P.bk.prototype={}
P.ab.prototype={
N:function(a,b,c){return new H.bf(this,[H.N(this,"ab",0),H.N(this,"ab",1),b,c])}}
P.bu.prototype={
i:function(a){var u=P.aS(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.ck.prototype={
i:function(a){return"Cyclic error in JSON stringify"}}
P.cj.prototype={
ak:function(a,b){var u=P.fX(b,this.gbM().a)
return u},
al:function(a){var u=P.fR(a,this.gbN().b,null)
return u},
gbN:function(){return C.aF},
gbM:function(){return C.aE},
$abk:function(){return[P.o,P.e]}}
P.cm.prototype={
$acF:function(){return[P.o,P.e]},
$aa8:function(){return[P.o,P.e]},
$aab:function(){return[P.o,P.e]}}
P.cl.prototype={
$acF:function(){return[P.e,P.o]},
$aa8:function(){return[P.e,P.o]},
$aab:function(){return[P.e,P.o]}}
P.dg.prototype={
aX:function(a){var u,t,s,r,q,p,o,n=a.length
for(u=J.eF(a),t=this.c,s=0,r=0;r<n;++r){q=u.Z(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.b.T(a,s,r)
s=r+1
p=t.a+=H.T(92)
switch(q){case 8:t.a=p+H.T(98)
break
case 9:t.a=p+H.T(116)
break
case 10:t.a=p+H.T(110)
break
case 12:t.a=p+H.T(102)
break
case 13:t.a=p+H.T(114)
break
default:p+=H.T(117)
t.a=p
p+=H.T(48)
t.a=p
p+=H.T(48)
t.a=p
o=q>>>4&15
p+=H.T(o<10?48+o:87+o)
t.a=p
o=q&15
t.a=p+H.T(o<10?48+o:87+o)
break}}else if(q===34||q===92){if(r>s)t.a+=C.b.T(a,s,r)
s=r+1
p=t.a+=H.T(92)
t.a=p+H.T(q)}}if(s===0)t.a+=H.b(a)
else if(s<n)t.a+=u.T(a,s,n)},
ac:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.j(new P.ck(a,null))}C.a.n(u,a)},
aa:function(a){var u,t,s,r,q=this
if(q.aW(a))return
q.ac(a)
try{u=q.b.$1(a)
if(!q.aW(u)){s=P.ee(a,null,q.gaF())
throw H.j(s)}s=q.a
if(0>=s.length)return H.a(s,-1)
s.pop()}catch(r){t=H.Y(r)
s=P.ee(a,t,q.gaF())
throw H.j(s)}},
aW:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.h.i(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.aX(a)
u.a+='"'
return!0}else{u=J.G(a)
if(!!u.$in){s.ac(a)
s.c7(a)
u=s.a
if(0>=u.length)return H.a(u,-1)
u.pop()
return!0}else if(!!u.$iv){s.ac(a)
t=s.c8(a)
u=s.a
if(0>=u.length)return H.a(u,-1)
u.pop()
return t}else return!1}},
c7:function(a){var u,t,s=this.c
s.a+="["
u=J.aq(a)
if(u.gL(a)){this.aa(u.h(a,0))
for(t=1;t<u.gk(a);++t){s.a+=","
this.aa(u.h(a,t))}}s.a+="]"},
c8:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gt(a)){o.c.a+="{}"
return!0}u=a.gk(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.A(0,new P.dh(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.aX(H.y(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.a(t,p)
o.aa(t[p])}r.a+="}"
return!0}}
P.dh.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.j(u,t.a++,a)
C.a.j(u,t.a++,b)},
$S:4}
P.df.prototype={
gaF:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.aC.prototype={}
P.E.prototype={}
P.aw.prototype={}
P.bW.prototype={
i:function(a){return"Assertion failed"}}
P.bA.prototype={
i:function(a){return"Throw of null."}}
P.ag.prototype={
gae:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gad:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gae()+o+u
if(!q.a)return t
s=q.gad()
r=P.aS(q.b)
return t+s+": "+r}}
P.bC.prototype={
gae:function(){return"RangeError"},
gad:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.cd.prototype={
gae:function(){return"RangeError"},
gad:function(){var u,t=H.W(this.b)
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gk:function(a){return this.f}}
P.cO.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cM.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bF.prototype={
i:function(a){return"Bad state: "+this.a}}
P.c6.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aS(u)+"."}}
P.bE.prototype={
i:function(a){return"Stack Overflow"},
$iaw:1}
P.c8.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d0.prototype={
i:function(a){return"Exception: "+this.a}}
P.cc.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.b.T(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.L.prototype={}
P.I.prototype={
J:function(a,b){return H.dH(this,H.N(this,"I",0),b)},
gk:function(a){var u,t=this.gv(this)
for(u=0;t.p();)++u
return u},
gt:function(a){return!this.gv(this).p()},
gL:function(a){return!this.gt(this)},
G:function(a,b){var u,t,s
H.W(b)
P.fE(b,"index")
for(u=this.gv(this),t=0;u.p();){s=u.gq()
if(b===t)return s;++t}throw H.j(P.dK(b,this,"index",null,t))},
i:function(a){return P.fp(this,"(",")")}}
P.n.prototype={$iF:1,$iI:1}
P.v.prototype={}
P.w.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
i:function(a){return"null"}}
P.b8.prototype={}
P.o.prototype={constructor:P.o,$io:1,
R:function(a,b){return this===b},
gu:function(a){return H.aX(this)},
i:function(a){return"Instance of '"+H.b(H.bB(this))+"'"},
toString:function(){return this.i(this)}}
P.B.prototype={}
P.e.prototype={$ifx:1}
P.az.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ihv:1}
W.h.prototype={}
W.bU.prototype={
i:function(a){return String(a)}}
W.bV.prototype={
i:function(a){return String(a)}}
W.au.prototype={$iau:1}
W.ah.prototype={
gk:function(a){return a.length}}
W.aP.prototype={
gk:function(a){return a.length}}
W.c7.prototype={}
W.av.prototype={$iav:1}
W.aQ.prototype={
F:function(a,b,c){var u=a.createElementNS(b,c)
return u}}
W.c9.prototype={
i:function(a){return String(a)}}
W.aR.prototype={
i:function(a){return a.localName},
bp:function(a,b,c){return a.setAttribute(b,c)},
$iaR:1}
W.c.prototype={$ic:1}
W.ai.prototype={
bd:function(a,b,c,d){return a.addEventListener(b,H.b7(H.l(c,{func:1,args:[W.c]}),1),!1)},
bn:function(a,b,c,d){return a.removeEventListener(b,H.b7(H.l(c,{func:1,args:[W.c]}),1),!1)},
$iai:1}
W.cb.prototype={
gk:function(a){return a.length}}
W.bp.prototype={}
W.J.prototype={
a9:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
c0:function(a,b){var u,t
try{u=a.parentNode
J.f5(u,b,a)}catch(t){H.Y(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.b5(a):u},
bz:function(a,b){return a.appendChild(b)},
bo:function(a,b,c){return a.replaceChild(b,c)},
$iJ:1}
W.cA.prototype={
gk:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.H.prototype={$iH:1}
W.bJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.dK(b,a,null,null,null))
return a[b]},
G:function(a,b){H.W(b)
if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.J]},
$ibs:1,
$abs:function(){return[W.J]},
$aa3:function(){return[W.J]},
$iI:1,
$aI:function(){return[W.J]},
$in:1,
$an:function(){return[W.J]},
$aaU:function(){return[W.J]}}
W.cY.prototype={
a8:function(a,b,c,d){var u=H.d(this,0)
H.l(a,{func:1,ret:-1,args:[u]})
H.l(c,{func:1,ret:-1})
return W.dQ(this.a,this.b,a,!1,u)},
aQ:function(a,b,c){return this.a8(a,b,c,null)}}
W.dP.prototype={}
W.cZ.prototype={
ao:function(a){var u=this
H.l(a,{func:1,ret:-1,args:[H.d(u,0)]})
if(u.b==null)throw H.j(P.fJ("Subscription has been canceled."))
u.bt()
u.sbj(W.ey(H.l(a,{func:1,ret:-1,args:[W.c]}),W.c))
u.aI()},
ap:function(a,b){},
aI:function(){var u,t=this.d,s=t!=null
if(s&&!0){u=this.b
u.toString
H.l(t,{func:1,args:[W.c]})
if(s)J.f3(u,this.c,t,!1)}},
bt:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.l(t,{func:1,args:[W.c]})
if(s)J.f4(u,this.c,t,!1)}},
sbj:function(a){this.d=H.l(a,{func:1,args:[W.c]})}}
W.d_.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ic"))},
$S:16}
W.aU.prototype={
gv:function(a){return new W.ca(a,a.length,[H.dX(this,a,"aU",0)])}}
W.ca.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.a(s,t)
u.saD(s[t])
u.c=t
return!0}u.saD(null)
u.c=s
return!1},
gq:function(){return this.d},
saD:function(a){this.d=H.p(a,H.d(this,0))},
$ibq:1}
W.bI.prototype={}
W.bM.prototype={}
W.bN.prototype={}
P.da.prototype={
bV:function(){return Math.random()}}
P.di.prototype={
i:function(a){var u=this
return"Rectangle ("+H.b(u.a)+", "+H.b(u.b)+") "+H.b(u.c)+" x "+H.b(u.d)},
R:function(a,b){var u,t,s,r,q,p,o,n=this
if(b==null)return!1
if(!!J.G(b).$ia0){u=n.a
t=b.a
if(u==t){s=n.b
r=b.b
if(s==r){q=n.c
if(typeof u!=="number")return u.m()
if(typeof q!=="number")return H.f(q)
p=H.d(n,0)
q=H.p(u+q,p)
u=b.c
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.f(u)
o=H.d(b,0)
if(q===H.p(t+u,o)){u=n.d
if(typeof s!=="number")return s.m()
if(typeof u!=="number")return H.f(u)
p=H.p(s+u,p)
u=b.d
if(typeof r!=="number")return r.m()
if(typeof u!=="number")return H.f(u)
o=p===H.p(r+u,o)
u=o}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gu:function(a){var u,t,s=this,r=s.a,q=J.bS(r),p=s.b,o=J.bS(p),n=s.c
if(typeof r!=="number")return r.m()
if(typeof n!=="number")return H.f(n)
u=H.d(s,0)
n=C.e.gu(H.p(r+n,u))
r=s.d
if(typeof p!=="number")return p.m()
if(typeof r!=="number")return H.f(r)
u=C.e.gu(H.p(p+r,u))
u=P.db(P.db(P.db(P.db(0,q),o),n),u)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)}}
P.a0.prototype={}
P.aN.prototype={$iaN:1}
P.a7.prototype={$ia7:1}
P.S.prototype={}
P.al.prototype={$ial:1}
P.ay.prototype={$iay:1}
P.K.prototype={$iK:1}
P.i.prototype={$ii:1}
P.a1.prototype={$ia1:1}
P.aZ.prototype={}
P.a4.prototype={$ia4:1}
P.b_.prototype={}
P.bo.prototype={$iF:1,
$aF:function(){return[P.E]},
$iI:1,
$aI:function(){return[P.E]},
$in:1,
$an:function(){return[P.E]}}
F.bl.prototype={}
M.bc.prototype={
av:function(c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="rotate(90) translate(",c7=e1.h(0,C.d),c8=e1.h(0,C.x)
if(J.aq(c8).K(c8,"-"))c4.f=!0
p=!C.b.K(c8,"y")||!1
if(C.b.K(c8,"x2")){p=!1
o=!0}else o=!1
if(c4.r==null)c4.r=0
n=new M.c0(c4,d2,d3,c9,d4,d5)
m=new M.c1(c4,d2,d3,c9,d4,d5)
l=P.e
c4.sbe(0,P.Z($.bd,M.u,l))
c4.e.w(0,e1)
k=B.ef(c4.e.h(0,C.U))
j=B.ef(c4.e.h(0,C.V))
e3.a=6
i=!p
h=i?j:k
h.A(0,new M.bY(e3,d7))
u=d0
t=d1
g=c4.r
if(g!=null&&c4.f){if(typeof g!=="number")return g.l()
u=g-d0
t=g-d1}s=null
f=P.t(c4.e.h(0,C.p))
if(p){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.be(n.$1(u),n.$1(t),e3.a,c5,!1)
if(J.R(s)>2){e=P.V(J.f9(s))
d=P.V(J.fb(s))
g=u
if(typeof e!=="number")return e.M()
if(typeof g!=="number")return H.f(g)
if(!(e<g)){g=t
if(typeof d!=="number")return d.ab()
if(typeof g!=="number")return H.f(g)
g=d>g}else g=!0
if(g){g=e3.a
if(typeof g!=="number")return g.m()
e3.a=g+1
s=M.be(n.$1(u),n.$1(t),e3.a,c5,!1)}}g=J.R(s)
c=J.D(s,J.R(s)/2|0)
if(typeof f!=="number")return H.f(f)
g=C.h.E(g*c.length*f*0.6)
if(typeof d7!=="number")return H.f(d7)
if(g>d7){g=e3.a
if(typeof g!=="number")return H.f(g)
e3.a=C.q.E(0.8*g)
s=M.be(n.$1(u),n.$1(t),e3.a,c5,!1)}b=P.t(c4.e.h(0,C.k))
if(typeof b!=="number")return b.m()
a=b+f+4
g=P.t(c4.e.h(0,C.E))
if(typeof g!=="number")return H.f(g)
a0=a+g
if(C.b.K(c8,"t")){g=P.t(c4.e.h(0,C.k))
if(typeof d8!=="number")return d8.l()
if(typeof g!=="number")return H.f(g)
b=d8-g
a=b-4
g=P.t(c4.e.h(0,C.E))
if(typeof g!=="number")return H.f(g)
a0=a-g
a1=d8}else a1=0
a2=c4.e.h(0,C.Q)}else{if(o){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.be(n.$1(u),n.$1(t),e3.a,c5,!1)}else try{r=d2
q=d3
s=M.be(D.ek(u,r,q),D.ek(t,r,q),e3.a,c5,!1)}catch(a3){H.Y(a3)
s=H.m(["0.0"],[l])}g=P.t(c4.e.h(0,C.k))
if(typeof d8!=="number")return d8.l()
if(typeof g!=="number")return H.f(g)
b=d8-g
g=P.t(c4.e.h(0,C.D))
if(typeof g!=="number")return H.f(g)
a=b-g
g=P.t(c4.e.h(0,C.F))
if(typeof g!=="number")return H.f(g)
a0=a-g
if(C.b.K(c8,"t")){b=P.t(c4.e.h(0,C.k))
g=P.t(c4.e.h(0,C.D))
if(typeof b!=="number")return b.m()
if(typeof g!=="number")return H.f(g)
a=b+g
g=P.t(c4.e.h(0,C.T))
if(typeof g!=="number")return H.f(g)
a0=a+g
a1=0}else a1=d8
a2=c4.e.h(0,C.R)}a4=H.m([],[P.L])
c4.a=P.bG()
c4.c=P.t(c4.e.h(0,C.M))
c4.d=P.t(c4.e.h(0,C.N))
for(g=d3!=null,c=d2!=null,a5=c5,a6=a5,a7=a6,a8=a7,a9=a8,b0="middle",b1="0",b2=0;b2<J.R(s);++b2){b3=P.V(J.D(s,b2))
if(!i||o){b4=H.eC(m.$1(b3))
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.l()
if(typeof b4!=="number")return H.f(b4)
b4=b5-b4}b6=J.at(c4.x.$1(b4))}else{if(g&&c){if(typeof b3!=="number")return b3.X()
if(typeof d3!=="number")return H.f(d3)
b7=b3*d2/d3}else b7=b3
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.l()
if(typeof b7!=="number")return H.f(b7)
b4=b5-b7}else b4=b7
b6=J.at(c4.x.$1(b4))}if(b6<0)continue
if(typeof d7!=="number")return H.f(d7)
if(b6>d7)continue
C.a.n(a4,b6)
b5=document
b8=b5.createElementNS("http://www.w3.org/2000/svg","text")
b8=H.k(H.k(b8,"$ii"),"$ia4")
if(J.D(s,b2).length>4){if(typeof b3!=="number")return b3.aJ()
b9=Math.abs(b3)>99999}else b9=!1
if(b9){J.e1(s,b2,J.fd(b3,2))
b9=s
c0=J.D(s,b2)
J.e1(b9,b2,H.ho(c0,"e",""))}b8.textContent=J.D(s,b2)
if(p){b9=c4.c
if(typeof b9!=="number")return H.f(b9)
a6=b6+b9
a5=a}else{b9=c4.d
if(typeof b9!=="number")return H.f(b9)
a5=b6+b9
b0=H.eP(c8,"t",0)?"start":"end"
a6=a
b1="-33%"}B.A(b8,P.q(["x",""+a6,"y",""+a5,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.p),"text-anchor",b0,"baseline-shift",b1,"cursor","default"],l,l))
c4.a.appendChild(b8)
if(c4.e.W(C.k)){b9=P.t(c4.e.h(0,C.k))
if(typeof b9!=="number")return b9.ab()
b9=b9>0}else b9=!1
if(b9){c1=b5.createElementNS("http://www.w3.org/2000/svg","line")
c1=H.k(H.k(c1,"$ii"),"$ial")
if(p){b5=c4.c
if(typeof b5!=="number")return H.f(b5)
a7=b6+b5}else{b5=c4.d
if(typeof b5!=="number")return H.f(b5)
a7=b6+b5}if(p)B.A(c1,P.q(["x1",""+a7,"y1",""+a1,"x2",""+a7,"y2",""+b],l,l))
else B.A(c1,P.q(["x1",""+a1,"y1",""+a7,"x2",""+b,"y2",""+a7],l,l))
B.A(c1,P.q(["stroke",c4.e.h(0,C.O),"stroke-width",c4.e.h(0,C.P)],l,l))
c4.a.appendChild(c1)
a8=c1}a9=b8}if(C.b.K(c8,"g")&&d9!=null&&d9>0)if(p)c4.b=S.ep(a4,c5,c5,d9,e1)
else c4.b=S.ep(c5,a4,d9,c5,e1)
if(c7!=null&&C.b.aV(c7).length!==0){a9=H.k(H.k(C.j.F(document,"http://www.w3.org/2000/svg","text"),"$ii"),"$ia4")
a9.textContent=c7
if(p){if(typeof d7!=="number")return d7.H()
i=c4.c
if(typeof i!=="number")return H.f(i)
B.A(a9,P.q(["x",H.b(d7/2+i),"y",""+a0,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.p),"text-anchor","middle","cursor","default"],l,l))}else{c2=P.t(c4.e.h(0,C.F))
if(typeof d7!=="number")return d7.S()
c3="rotate(-90) translate("+H.b(-d7/2)+", "+H.b(c2)+")"
if(J.b9(c4.e.h(0,C.S),"tb")){i=d7/2
g=c6+H.b(i)+", "
if(typeof c2!=="number")return c2.S()
c3=g+-c2+")"
if(C.b.K(c8,"t")){i=c6+H.b(i)+", "
if(typeof d8!=="number")return d8.S()
c3=i+(-d8+C.h.E(d8*0.22))+")"}}B.A(a9,P.q(["x","0","y","0","fill",a2,"stroke","none","font-size",c4.e.h(0,C.p),"text-anchor","middle","transform",c3,"cursor","default"],l,l))}l=W.b0
i={func:1,ret:-1,args:[l]}
W.dQ(a9,"touchstart",H.l(new M.bZ(e2),i),!1,l)
W.dQ(a9,"touchmove",H.l(new M.c_(e2),i),!1,l)
c4.a.appendChild(a9)}},
sbe:function(a,b){this.e=H.x(b,"$iv",[M.u,P.e],"$av")}}
M.bX.prototype={
$0:function(){var u=this.a
u.j(0,C.x,J.f2(u.h(0,C.x),"y"))
return u},
$S:17}
M.c0.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.H()
if(typeof p!=="number")return H.f(p)
u=q/p
if(!H.du(s.e))u=-u
if(o){if(typeof r!=="number")return r.m()
t=r+(a+0.5)*u}else{if(typeof r!=="number")return r.m()
t=r+a*u}return t},
$S:2}
M.c1.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.H()
if(typeof p!=="number")return H.f(p)
u=q/p
if(!H.du(s.e))u=-u
if(o){if(typeof a!=="number")return a.l()
if(typeof r!=="number")return H.f(r)
t=(a-r)/u-0.5}else{if(typeof a!=="number")return a.l()
if(typeof r!=="number")return H.f(r)
t=(a-r)/u}return t},
$S:2}
M.bY.prototype={
$2:function(a,b){var u,t
H.y(a)
H.y(b)
u=this.b
t=P.t(a)
if(typeof u!=="number")return u.ab()
if(typeof t!=="number")return H.f(t)
if(u>t){this.a.a=P.t(b)
return}},
$S:18}
M.bZ.prototype={
$1:function(a){H.k(a,"$iH").preventDefault()},
$S:7}
M.c_.prototype={
$1:function(a){H.k(a,"$iH").preventDefault()},
$S:7}
M.u.prototype={
i:function(a){return this.b}}
S.cP.prototype={
bD:function(){var u,t,s,r,q,p,o,n,m=this,l="stroke-dasharray",k=P.bG(),j=m.e,i=j!=null
if(i)for(u=m.d,t=P.e,s=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.k(H.k(p,"$ii"),"$ial")
if(r>=j.length)return H.a(j,r)
q=""+j[r]
if(r>=j.length)return H.a(j,r)
B.A(p,P.q(["x1",q,"y1","0","x2",""+j[r],"y2",H.b(u),"stroke",m.b.h(0,C.y),"stroke-width",m.b.h(0,C.z),"stroke-opacity",m.b.h(0,C.A),l,m.b.h(0,C.B)],t,t))
k.appendChild(p)
s=p}j=m.f
i=j!=null
if(i)for(u=m.c,t=P.e,o=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.k(H.k(p,"$ii"),"$ial")
if(r>=j.length)return H.a(j,r)
q=""+j[r]
n=H.b(u)
if(r>=j.length)return H.a(j,r)
B.A(p,P.q(["x1","0","y1",q,"x2",n,"y2",""+j[r],"stroke",m.b.h(0,C.y),"stroke-width",m.b.h(0,C.z),"stroke-opacity",m.b.h(0,C.A),l,m.b.h(0,C.B)],t,t))
k.appendChild(p)
o=p}m.a=k},
sbA:function(a,b){this.b=H.x(b,"$iv",[M.u,P.e],"$av")}}
D.cn.prototype={
aO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/2000/svg",h="legend",g=j.c,f=document
g.j(0,a,H.k(H.k(C.j.F(f,i,"text"),"$ii"),"$ia4"))
g.h(0,a).textContent=b
u=j.b
j.ch=P.t(J.D(u.h(0,h),C.H))
J.bR(g.h(0,a),"font-size",H.b(j.ch))
t=g.h(0,a)
s=J.D(u.h(0,h),C.a6)
t.toString
J.bR(t,"fill",H.y(s))
s=j.ch
t=P.t(J.D(u.h(0,h),C.ab))
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.f(t)
r=s+t
t=j.cy
s=t*r
j.e=s
q=c!=null
if(q){p=j.r
if(typeof p!=="number")return H.f(p)
o=12+p}else o=12
if(j.db!=null)j.e=s+2*r
s=a==="TOP_TITLE_ID"
if(s){j.e=r
p=j.r
if(typeof p!=="number")return p.Y()
o=12-C.e.V(p,2)}j.cy=t-1
t=j.z
C.aM.bz(t,g.h(0,a))
J.bR(g.h(0,a),"x",""+o)
J.bR(g.h(0,a),"y",H.b(j.e))
if(!s&&q){g=j.e
if(typeof g!=="number")return g.l()
n=H.k(H.k(C.j.F(f,i,"rect"),"$ii"),"$iK")
m=P.t(J.D(u.h(0,h),C.aa))
l=j.r
k=P.t(J.D(u.h(0,h),C.H))
if(typeof k!=="number")return k.Y()
u=C.e.V(k,2)
n.setAttribute("x","6")
n.setAttribute("y",""+(g-r+u))
n.setAttribute("width",H.b(l))
n.setAttribute("height",H.b(m))
n.setAttribute("fill",c)
j.d.j(0,a,n)
t.appendChild(n)}},
b2:function(a,b,c){var u,t=this,s=t.c
if(s.W(a)){u=s.h(0,a)
u.textContent=b;(u&&C.au).c0(u,u)}else t.aO(a,b,c)
t.bv(t.e)},
bv:function(a){var u,t,s,r=this,q="legend",p=r.Q
if(p!=null)C.at.a9(p)
r.Q=H.k(H.k(C.j.F(document,"http://www.w3.org/2000/svg","rect"),"$ii"),"$iK")
p=r.b
u=P.t(J.D(p.h(0,q),C.a7))
if(u===0)return
t=P.t(J.D(p.h(0,q),C.a8))
r.Q.setAttribute("x","0")
r.Q.setAttribute("y","0")
s=r.Q
s.toString
s.setAttribute("width",H.b(u))
s=r.Q
s.toString
s.setAttribute("height",H.b(t))
s=r.Q
s.toString
s.setAttribute("fill",H.y(J.D(p.h(0,q),C.a4)))
s=r.Q
s.toString
s.setAttribute("fill-opacity",H.y(J.D(p.h(0,q),C.a5)))
r.z.appendChild(r.Q)}}
D.C.prototype={
i:function(a){return this.b}}
D.cw.prototype={
b7:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=P.e
a1.saj(P.Z($.fz,D.P,a2))
u=P.t(a1.a.h(0,C.Y))
t=P.t(a1.a.h(0,C.Z))
s=P.t(a1.a.h(0,C.a_))
r=P.t(a1.a.h(0,C.a0))
q=a1.d
q.length
p=new Array(3)
p.fixed$length=Array
o=[P.a1]
a1.sbK(H.m(p,o))
p=new Array(3)
p.fixed$length=Array
a1.sbY(H.m(p,o))
o=new Array(3)
o.fixed$length=Array
p=[P.K]
a1.sbI(H.m(o,p))
o=new Array(3)
o.fixed$length=Array
a1.sbW(H.m(o,p))
p=new Array(3)
p.fixed$length=Array
o=[[P.a0,P.L]]
a1.sbX(H.m(p,o))
p=new Array(3)
p.fixed$length=Array
a1.sbJ(H.m(p,o))
p=new Array(3)
p.fixed$length=Array
a1.sc9(H.m(p,o))
p=new Array(3)
p.fixed$length=Array
a1.scb(H.m(p,o))
o=new Array(3)
o.fixed$length=Array
a1.sbG(H.m(o,[W.au]))
o=P.L
a1.sbL(P.bD(s,s,0,0,o))
n=P.bG()
p=a1.b
m=p.clientWidth
if(typeof m!=="number")return m.l()
m=""+(m-2)
l=p.clientHeight
if(typeof l!=="number")return l.l()
B.A(n,P.q(["width",m,"height",""+(l-2)],a2,a2))
for(k=0;k<3;++k){m=p.clientWidth
l=q[k]
j=l[0]
if(typeof m!=="number")return m.X()
i=C.h.E(m*j)
j=p.clientHeight
h=l[1]
if(typeof j!=="number")return j.X()
g=C.h.E(j*h)
h=l[2]
if(typeof s!=="number")return H.f(s)
f=2*s
if(typeof r!=="number")return H.f(r)
e=2*r
d=C.h.E(m*h-2-f-e)
c=C.h.E(j*l[3]-2-f-e)
e=a1.z;(e&&C.a).j(e,k,P.bD(i,g,d,c,o))
e=a1.Q
f=a1.c
l=f.b
j=a1.z
if(k>=j.length)return H.a(j,k)
j=j[k]
h=j.c
if(typeof h!=="number")return h.l()
if(typeof t!=="number")return H.f(t)
f=f.a
if(typeof f!=="number")return H.f(f)
j=j.d
if(typeof j!=="number")return j.l()
if(typeof u!=="number")return H.f(u);(e&&C.a).j(e,k,P.bD(t,l,h-t-f,j-u,o))
j=a1.ch
f=a1.Q
if(k>=f.length)return H.a(f,k)
f=f[k]
h=f.a
l=f.b
e=f.d
if(typeof l!=="number")return l.m()
if(typeof e!=="number")return H.f(e);(j&&C.a).j(j,k,P.bD(h,l+e,f.c,u,o))
f=a1.cx
e=a1.Q
if(k>=e.length)return H.a(e,k)
e=e[k]
l=e.a
if(typeof l!=="number")return l.l();(f&&C.a).j(f,k,P.bD(l-t,e.b,t,e.d,o))
e=a1.e
l=document
m=l.createElementNS("http://www.w3.org/2000/svg","svg")
H.k(m,"$ii")
m.setAttribute("version","1.1");(e&&C.a).j(e,k,H.k(m,"$ia1"))
m=a1.e
if(k>=m.length)return H.a(m,k)
m=m[k]
j=a1.z
if(k>=j.length)return H.a(j,k)
j=H.b(j[k].a)
h=a1.z
if(k>=h.length)return H.a(h,k)
h=H.b(h[k].b)
f=a1.z
if(k>=f.length)return H.a(f,k)
f=H.b(f[k].c)
e=a1.z
if(k>=e.length)return H.a(e,k)
B.A(m,P.q(["x",j,"y",h,"width",f,"height",H.b(e[k].d)],a2,a2))
e=a1.y
b=l.createElementNS("http://www.w3.org/2000/svg","rect");(e&&C.a).j(e,k,H.k(H.k(b,"$ii"),"$iK"))
a=P.t(a1.a.h(0,C.G))
m=a1.y
if(k>=m.length)return H.a(m,k)
m=m[k]
j=a1.z
if(k>=j.length)return H.a(j,k)
j=j[k].a
if(typeof j!=="number")return j.m()
if(typeof a!=="number")return H.f(a)
j=""+(j+a)
h=a1.z
if(k>=h.length)return H.a(h,k)
h=h[k].b
if(typeof h!=="number")return h.m()
h=""+(h+a)
f=a1.z
if(k>=f.length)return H.a(f,k)
f=f[k].c
e=2*a
if(typeof f!=="number")return f.l()
f=""+(f-e)
a0=a1.z
if(k>=a0.length)return H.a(a0,k)
a0=a0[k].d
if(typeof a0!=="number")return a0.l()
B.A(m,P.q(["x",j,"y",h,"width",f,"height",""+(a0-e),"fill","none","stroke",a1.a.h(0,C.a3),"stroke-width",a1.a.h(0,C.G)],a2,a2))
e=a1.f
m=l.createElementNS("http://www.w3.org/2000/svg","svg")
H.k(m,"$ii")
m.setAttribute("version","1.1");(e&&C.a).j(e,k,H.k(m,"$ia1"))
m=a1.f
if(k>=m.length)return H.a(m,k)
m=m[k]
j=a1.Q
if(k>=j.length)return H.a(j,k)
j=H.b(j[k].a)
h=a1.Q
if(k>=h.length)return H.a(h,k)
h=H.b(h[k].b)
f=a1.Q
if(k>=f.length)return H.a(f,k)
f=H.b(f[k].c)
e=a1.Q
if(k>=e.length)return H.a(e,k)
B.A(m,P.q(["x",j,"y",h,"width",f,"height",H.b(e[k].d)],a2,a2))
e=a1.x
b=l.createElementNS("http://www.w3.org/2000/svg","rect");(e&&C.a).j(e,k,H.k(H.k(b,"$ii"),"$iK"))
m=a1.x
if(k>=m.length)return H.a(m,k)
m=m[k]
l=a1.Q
if(k>=l.length)return H.a(l,k)
l=H.b(l[k].a)
j=a1.Q
if(k>=j.length)return H.a(j,k)
j=H.b(j[k].b)
h=a1.Q
if(k>=h.length)return H.a(h,k)
h=H.b(h[k].c)
f=a1.Q
if(k>=f.length)return H.a(f,k)
B.A(m,P.q(["x",l,"y",j,"width",h,"height",H.b(f[k].d),"fill","none","stroke",a1.a.h(0,C.a1),"stroke-width",a1.a.h(0,C.a2)],a2,a2))
m=p.style
m.position="relative"
m=a1.e
if(k>=m.length)return H.a(m,k)
m=m[k]
l=a1.f
if(k>=l.length)return H.a(l,k)
m.appendChild(l[k])
l=a1.e
if(k>=l.length)return H.a(l,k)
l=l[k]
m=a1.x
if(k>=m.length)return H.a(m,k)
l.appendChild(m[k])
m=a1.r
if(k>=m.length)return H.a(m,k)
m=m[k]
if(m!=null)n.appendChild(m)
m=a1.e
if(k>=m.length)return H.a(m,k)
n.appendChild(m[k])
if(a>0){m=a1.y
if(k>=m.length)return H.a(m,k)
n.appendChild(m[k])}}p.appendChild(n)},
saj:function(a){this.a=H.x(a,"$iv",[D.P,P.e],"$av")},
sbL:function(a){this.c=H.x(a,"$ia0",[P.L],"$aa0")},
sbY:function(a){this.e=H.x(a,"$in",[P.a1],"$an")},
sbK:function(a){this.f=H.x(a,"$in",[P.a1],"$an")},
sbG:function(a){this.r=H.x(a,"$in",[W.au],"$an")},
sbI:function(a){this.x=H.x(a,"$in",[P.K],"$an")},
sbW:function(a){this.y=H.x(a,"$in",[P.K],"$an")},
sbX:function(a){this.z=H.x(a,"$in",[[P.a0,P.L]],"$an")},
sbJ:function(a){this.Q=H.x(a,"$in",[[P.a0,P.L]],"$an")},
sc9:function(a){this.ch=H.x(a,"$in",[[P.a0,P.L]],"$an")},
scb:function(a){this.cx=H.x(a,"$in",[[P.a0,P.L]],"$an")}}
D.P.prototype={
i:function(a){return this.b}}
V.ax.prototype={
b8:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q=this
q.saj(P.Z($.dF(),V.r,P.e))
if(i!=null)q.a.w(0,i)
if(q.a.h(0,C.J)!=null){q.cy=P.t(q.a.h(0,C.J))
q.a.aS(0,C.J)}if(q.a.h(0,C.K)!=null){q.db=P.t(q.a.h(0,C.K))
q.a.aS(0,C.K)}u=q.cy
if(u==null)u=q.cy=0
t=q.db
if(t==null){t=q.r2.length-1
q.db=t}if(t<=u)t=q.db=u+1
if(u<0||u>q.r2.length-1)q.cy=0
u=q.r2
s=u.length-1
if(t>s||t<0)q.db=s
q.y2=B.fK(q.a.h(0,C.ao))
q.f=P.t(q.a.h(0,C.aq))
q.x=q.r=P.t(q.a.h(0,C.ar))
u=F.fm(u,q.cy,q.db,!1,P.t(q.a.h(0,C.ah)))
q.b=u
u=u.d.length
q.rx=new Float64Array(u)
for(r=0;u=q.b.d,r<u.length;++r){t=q.rx
u=u[r]
u.toString;(t&&C.v).j(t,r,u)}q.aM=E.e6(q.rx)[0]
q.aN=E.e5(q.rx)[0]
q.P=E.e6(q.b.a)[0]
q.B=E.e5(q.b.a)[0]
q.O=P.bG()
q.b0()},
b0:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a.h(0,C.w)==null||J.b9(j.a.h(0,C.w),"null")?j.cx=null:j.cx=P.V(j.a.h(0,C.w))
if(i!=null){u=j.B
if(typeof u!=="number")return u.aJ()
u=Math.abs(u)>0.0001}else u=!1
if(u){u=j.B
if(typeof i!=="number")return i.H()
if(typeof u!=="number")return H.f(u)
t=i/u
i=j.P
if(typeof i!=="number")return H.f(i)
j.P=t*i
j.B=t*u}j.k1=P.t(j.a.h(0,C.aj))
j.k2=P.t(j.a.h(0,C.am))
j.k3=P.t(j.a.h(0,C.an))
j.k4=P.V(j.a.h(0,C.ai))
j.r1=P.V(j.a.h(0,C.I))
if(j.a.h(0,C.al)!=null){i=j.r1
u=P.V(j.a.h(0,C.al))
if(typeof i!=="number")return i.X()
if(typeof u!=="number")return H.f(u)
j.r1=i*u}i=j.y
u=j.f
if(typeof u!=="number")return H.f(u)
if(typeof i!=="number")return i.l()
j.Q=i-2*u
u=j.z
i=j.r
if(typeof u!=="number")return u.l()
if(typeof i!=="number")return H.f(i)
s=j.x
if(typeof s!=="number")return H.f(s)
j.ch=u-i-s
r=j.rx.length
j.fx=1e6
j.fy=0
for(i=r-1,q=null,p=null,o=0,u="";o<r;++o){s=j.rx
if(o>=s.length)return H.a(s,o)
s=s[o]
n=j.k4
if(typeof n!=="number")return H.f(n)
m=j.b.a
if(o>=m.length)return H.a(m,o)
l=m[o]
q=J.at(j.as(s*n))
p=J.at(j.at(l))
if(!H.du(j.y2))if(p<0)p=2
else{s=j.ch
if(typeof s!=="number")return H.f(s)
if(p>s)p=s-1}s=o===i
u=s?u+(""+q+" "+p):u+(""+q+" "+p+",")
if(s)j.dy=q
s=j.fy
if(typeof s!=="number")return H.f(s)
if(p>s)j.fy=p
s=j.fx
if(typeof s!=="number")return H.f(s)
if(p<s)j.fx=p}i=j.c
if(i!=null)C.aG.a9(i)
j.c=H.k(H.k(C.j.F(document,"http://www.w3.org/2000/svg","polyline"),"$ii"),"$iay")
k=j.a.h(0,C.f)
i=P.t(j.a.h(0,C.ag))
j.bO=i
j.x1=!1
j.c.setAttribute("stroke-width",H.b(i))
i=j.ry
if(i!=null){s=P.e
B.A(i,P.q(["stroke",H.b(k),"fill","none"],s,s))}i=j.c
s=j.a.h(0,C.f)
i.toString
i.setAttribute("stroke",H.y(s))
i.setAttribute("fill","none")
i.setAttribute("points",u.charCodeAt(0)==0?u:u)
if(j.a.h(0,C.ad)!=null){i=j.c
u=j.a.h(0,C.ad)
i.toString
i.setAttribute("transform",H.y(u))}j.O.appendChild(j.c)
j.fr=p
if(J.b9(j.a.h(0,C.ap),"true"))j.by(q,p)
j.bx()
j.bw(q,p)},
as:function(a){var u,t,s,r,q=this,p=q.aN,o=q.aM
if(typeof p!=="number")return p.l()
if(typeof o!=="number")return H.f(o)
p-=o
if(Math.abs(p)<0.000001)u=a
else{if(typeof a!=="number")return a.l()
t=q.Q
if(typeof t!=="number")return H.f(t)
s=q.f
if(typeof s!=="number")return H.f(s)
r=q.k1
if(typeof r!=="number")return H.f(r)
u=(a-o)*t/p+s+r}return u},
aZ:function(a){var u,t,s=this,r=s.a3
if(r==null||s.am==null)return
if(typeof r!=="number")return r.aJ()
u=Math.abs(r)<1e-10
if(u){if(typeof a!=="number")return a.cf()
t=a<=0}else t=!1
if(t){r=s.B
u=s.r1
if(typeof r!=="number")return r.H()
if(typeof u!=="number")return H.f(u)
return r/u}if(u){u=s.z
if(typeof a!=="number")return a.ce()
if(typeof u!=="number")return H.f(u)
u=a>=u}else u=!1
if(u){r=s.B
if(typeof r!=="number")return r.S()
u=s.r1
if(typeof u!=="number")return H.f(u)
return-r/u}u=s.am
if(typeof a!=="number")return a.l()
if(typeof u!=="number")return H.f(u)
return-(a-u)/r},
at:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ch,i=P.V(l.a.h(0,C.i))
P.V(l.a.h(0,C.ak))
u=l.r1
if(typeof u!=="number")return H.f(u)
t=1-u
if(typeof i!=="number")return H.f(i)
if(t>i)t=i-0.01
if(typeof j!=="number")return H.f(j)
s=l.r
if(typeof s!=="number")return H.f(s)
r=i*j+s
q=l.P
if(typeof q!=="number")return q.M()
if(q<0){p=l.B
if(typeof p!=="number")return p.M()
p=p<0}else p=!1
o=l.B
if(p){if(typeof a!=="number")return a.S()
a=-a
if(typeof o!=="number")return o.S()
n=l.B=-q
l.P=-o
o=n}if(typeof o!=="number")return o.l()
q=o-0
p=Math.abs(q)<0.000001
if(p){if(typeof a!=="number")return a.X()
u=a*Math.abs(u)<0.000001}else u=!1
if(u)u=l.a3=0
else if(p){l.a3=0
u=0}else{u=-(t*j+s-r)/q
l.a3=u}s=l.k2
if(typeof s!=="number")return H.f(s)
q=l.k3
if(typeof q!=="number")return H.f(q)
q=r+u*0+s+q
l.am=q
if(typeof a!=="number")return H.f(a)
k=-u*a+q
try{J.at(k)
u=k
return u}catch(m){H.Y(m)
u=l.z
if(typeof u!=="number")return u.H()
return u/2}},
by:function(a,b){var u,t,s,r=this,q=r.ry
if(q!=null)C.at.a9(q)
if(a==null){a=r.x2
if(a!=null&&r.y1!=null)b=r.y1
else{a=r.dy
if(a!=null&&r.fr!=null)b=r.fr
else return}}u=P.t(r.a.h(0,C.ae))
if(J.b9(r.a.h(0,C.af),"true")){q=r.y
t=r.f
if(typeof t!=="number")return t.Y()
t=C.e.V(t,2)
if(typeof q!=="number")return q.l()
if(typeof a!=="number")return a.ab()
t=a>q-t
q=t}else q=!1
if(q){q=r.y
if(typeof q!=="number")return q.l()
if(typeof u!=="number")return H.f(u)
a=q-u}if(typeof a!=="number")return a.m()
r.x2=a+2
if(typeof u!=="number")return u.Y()
q=C.e.V(u,2)
if(typeof b!=="number")return b.l()
r.y1=b-q
s=r.a.h(0,C.f)
q=H.k(H.k(C.j.F(document,"http://www.w3.org/2000/svg","rect"),"$ii"),"$iK")
r.ry=q
t=P.e
B.A(q,P.q(["x",H.b(r.x2),"y",H.b(r.y1),"width",""+u,"height",""+u,"stroke",H.b(s),"fill","white"],t,t))
r.O.appendChild(r.ry)},
bx:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.d,b=c.length
if(b!==0){for(u=0;u<c.length;c.length===b||(0,H.eQ)(c),++u){t=c[u]
s=t.parentNode
if(s!=null)s.removeChild(t)}C.a.sk(c,0)}r=d.a.h(0,C.aH)
if(r==null||r.length===0)return
b=P.e
q=H.x(J.e2(C.n.ak(0,r),b),"$in",[b],"$an")
t=q.ga4(q)
s=q.a
p=J.aq(s)
if(p.gk(s)<4)return
for(o=t==="POLYLINE_POINT_SHAPE_CIRCLE_EMPTY",n=t==="POLYLINE_POINT_SHAPE_SQUARE_EMPTY",m=H.d(q,1),l=2;l<p.gk(s);l+=2){k=P.V(H.X(p.h(s,l),m))
j=P.V(H.X(p.h(s,l+1),m))
i=J.at(d.as(k))
h=J.at(d.at(j))
g=d.a.h(0,C.aI)
if(g==null)g=d.a.h(0,C.f)
if(n){f=document.createElementNS("http://www.w3.org/2000/svg","rect")
f=H.k(H.k(f,"$ii"),"$iK")
B.A(f,P.q(["x",H.b(i+18626451505319996e-25),"y",H.b(h+18626451505319996e-25),"width","8","height","8","stroke",H.b(g),"fill","white"],b,b))
e=f}else if(o){f=document.createElementNS("http://www.w3.org/2000/svg","circle")
f=H.k(H.k(f,"$ii"),"$iaN")
B.A(f,P.q(["cx",""+i,"cy",""+h,"r","6","stroke",H.b(g),"fill","white"],b,b))
e=f}else e=null
C.a.n(c,e)
d.O.appendChild(e)}d.a.j(0,C.C,H.X(p.h(s,1),m))},
bw:function(a,b){var u,t,s,r,q=this,p=q.e
if(p!=null)C.au.a9(p)
if(q.a.h(0,C.C)==null||J.R(q.a.h(0,C.C))===0)return
p=H.k(H.k(C.j.F(document,"http://www.w3.org/2000/svg","text"),"$ii"),"$ia4")
q.e=p
p.textContent=H.y(q.a.h(0,C.C))
u=P.t(q.a.h(0,C.as))
p=q.e
if(typeof a!=="number")return a.m()
t=""+(a+8)
if(typeof u!=="number")return u.Y()
s=C.e.V(u,4)
if(typeof b!=="number")return b.m()
r=P.e
B.A(p,P.q(["x",t,"y",""+(b+s),"font-size",""+u,"fill",q.a.h(0,C.f),"stroke","none"],r,r))
q.O.appendChild(q.e)},
saj:function(a){this.a=H.x(a,"$iv",[V.r,P.e],"$av")}}
V.r.prototype={
i:function(a){return this.b}}
X.cB.prototype={
b9:function(a,a0,a1,a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
c.bH()
u=c.f
if(0>=u.length)return H.a(u,0)
u=u[0]
t=M.u
s=P.e
if(c.z==null){c.saY(P.Z($.bd,t,s))
c.z.j(0,C.d,"Point number")}else{r=P.Z($.bd,t,s)
r.w(0,c.z)
c.saY(r)}if(c.Q==null){c.sb_(P.Z($.bd,t,s))
c.Q.j(0,C.d,"Function value")}else{r=P.Z($.bd,t,s)
r.w(0,c.Q)
c.sb_(r)}t=u.r2.length
q=t-1
if(c.z.h(0,C.l)!=null&&J.R(c.z.h(0,C.l))!==0&&c.z.h(0,C.m)!=null&&J.R(c.z.h(0,C.m))!==0){p=P.V(c.z.h(0,C.l))
q=P.V(c.z.h(0,C.m))}else p=0
o=u.rx
o=(o&&C.v).ga4(o)
n=u.rx
n=(n&&C.v).ga7(n)
m=c.a
l=m.Q
k=c.b
if(k>=l.length)return H.a(l,k)
l=l[k]
j=l.c
i=m.ch
if(k>=i.length)return H.a(i,k)
i=i[k].d
l=l.d
h=u.gca()
g=new M.bc(b,h)
g.av(t,o,n,p,q,!0,b,b,j,i,l,h,c.z,b,{})
c.c=g
h=g.a
l=m.ch
if(k>=l.length)return H.a(l,k)
l=l[k].a
g=g.c
if(typeof l!=="number")return l.l()
if(typeof g!=="number")return H.f(g)
g=""+(l-g)
l=m.ch
if(k>=l.length)return H.a(l,k)
B.A(h,P.q(["x",g,"y",H.b(l[k].b)],s,s))
l=c.c.b.a
g=m.Q
if(k>=g.length)return H.a(g,k)
g=H.b(g[k].a)
h=m.Q
if(k>=h.length)return H.a(h,k)
B.A(l,P.q(["x",g,"y",H.b(h[k].b)],s,s))
f=u.aZ(0)
h=m.Q
if(k>=h.length)return H.a(h,k)
e=u.aZ(h[k].d)
if(f==null)f=u.P
if(e==null)e=u.B
t=u.r1
if(typeof f!=="number")return f.H()
if(typeof t!=="number")return H.f(t)
if(typeof e!=="number")return e.H()
o=m.Q
if(k>=o.length)return H.a(o,k)
o=o[k]
n=o.d
l=m.cx
if(k>=l.length)return H.a(l,k)
u=M.fg(f/t,e/t,b,b,b,n,l[k].c,o.c,u.gcc(),c.Q,b)
c.d=u
u=u.a
o=m.cx
if(k>=o.length)return H.a(o,k)
o=H.b(o[k].a)
l=m.cx
if(k>=l.length)return H.a(l,k)
l=l[k].b
n=c.d.d
if(typeof l!=="number")return l.l()
if(typeof n!=="number")return H.f(n)
B.A(u,P.q(["x",o,"y",""+(l-n)],s,s))
n=c.d.b.a
l=m.Q
if(k>=l.length)return H.a(l,k)
l=H.b(l[k].a)
o=m.Q
if(k>=o.length)return H.a(o,k)
B.A(n,P.q(["x",l,"y",H.b(o[k].b)],s,s))
s=c.y
c.r=X.fH(s,c.cx)
for(u=c.e,d=0;d<u.length;++d){t=m.f
if(k>=t.length)return H.a(t,k)
t=t[k]
o=c.f
if(d>=o.length)return H.a(o,d)
t.appendChild(o[d].O)}if(s!=null){u=m.f
if(k>=u.length)return H.a(u,k)
u[k].appendChild(c.r.z)}u=m.e
if(k>=u.length)return H.a(u,k)
u[k].appendChild(c.c.a)
u=m.e
if(k>=u.length)return H.a(u,k)
u[k].appendChild(c.d.a)
u=m.e
if(k>=u.length)return H.a(u,k)
u[k].appendChild(c.c.b.a)
m=m.e
if(k>=m.length)return H.a(m,k)
m[k].appendChild(c.d.b.a)},
bH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.e,g=new Array(h.length)
g.fixed$length=Array
i.sc_(H.m(g,[V.ax]))
for(g=i.a,u=i.b,t=V.r,s=P.e,r=[[P.v,V.r,P.e]],q=0;p=h.length,q<p;++q){if(q===0){o=i.x
o=o==null||o.length!==p}else o=!1
if(o){p=new Array(p)
p.fixed$length=Array
i.sbZ(H.m(p,r))}p=i.x
if(q>=p.length)return H.a(p,q)
o=p[q]
if(o==null){(p&&C.a).j(p,q,P.Z($.dF(),t,s))
p=i.x
if(q>=p.length)return H.a(p,q)
p[q].j(0,C.i,"0.8")
p=i.x
if(q>=p.length)return H.a(p,q)
p=p[q]
o=i.cx
if(q>=o.length)return H.a(o,q)
p.j(0,C.f,o[q])}else{if(o.h(0,C.i)==null){p=i.x
if(q>=p.length)return H.a(p,q)
p[q].j(0,C.i,"0.8")}p=i.x
if(q>=p.length)return H.a(p,q)
if(p[q].h(0,C.f)==null){p=i.x
if(q>=p.length)return H.a(p,q)
p=p[q]
o=i.cx
if(q>=o.length)return H.a(o,q)
p.j(0,C.f,o[q])}n=P.Z($.dF(),t,s)
p=i.x
if(q>=p.length)return H.a(p,q)
n.w(0,p[q])
p=i.x;(p&&C.a).j(p,q,n)}if(q>0){p=i.x
if(q>=p.length)return H.a(p,q)
p=p[q]
o=i.f
if(0>=o.length)return H.a(o,0)
p.j(0,C.w,H.b(o[0].B))}p=i.f
if(q>=h.length)return H.a(h,q)
o=h[q]
m=o.length
l=g.Q
if(u>=l.length)return H.a(l,u)
l=l[u]
k=l.c
l=l.d
j=i.x
if(q>=j.length)return H.a(j,q);(p&&C.a).j(p,q,V.fA(o,0,m-1,k,l,null,null,null,j[q]))}},
sc_:function(a){this.f=H.x(a,"$in",[V.ax],"$an")},
sbZ:function(a){this.x=H.x(a,"$in",[[P.v,V.r,P.e]],"$an")},
saY:function(a){this.z=H.x(a,"$iv",[M.u,P.e],"$av")},
sb_:function(a){this.Q=H.x(a,"$iv",[M.u,P.e],"$av")}}
B.cz.prototype={
$2:function(a,b){this.a.setAttribute(H.y(a),H.y(b))
return},
$S:19}
G.cC.prototype={
ba:function(a,b,c,d,e){var u,t,s,r,q,p,o=this,n=6.283185307179586*d
o.b=new Float64Array(a)
o.a=new Float64Array(a)
for(u=Math.abs(c)<0.00001,t=0;t<a;++t){s=t*n/a
if(t===0&&u)r=b
else{q=s+c
r=b*Math.sin(q)/q}p=o.b
if(t>=p.length)return H.a(p,t)
p[t]=s
p=o.a
if(t>=p.length)return H.a(p,t)
p[t]=r+e}}}
R.cD.prototype={
bb:function(a,b,c,d,e,f){var u,t,s,r,q,p=6.283185307179586*d
this.a=new Float64Array(a)
new Float64Array(a)
for(u=e*b,t=0;t<a;++t){s=Math.sin(t*p/a+c)
r=this.a
q=J.fc(2*C.aB.bV()-1)
if(t>=r.length)return H.a(r,t)
r[t]=b*s+f+u*q}}};(function aliases(){var u=J.O.prototype
u.b5=u.i
u=J.bt.prototype
u.b6=u.i})();(function installTearOffs(){var u=hunkHelpers._instance_1u,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff
u(H.bi.prototype,"gbk","bl",8)
t(P,"h1","fN",5)
t(P,"h2","fO",5)
t(P,"h3","fP",5)
s(P,"eB","h_",1)
r(P.U.prototype,"gbf",0,1,null,["$2","$1"],["a_","bg"],12,0)
t(P,"h4","fT",3)
var q
u(q=V.ax.prototype,"gca","as",2)
u(q,"gcc","at",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.o,null)
s(P.o,[H.dN,J.O,J.bb,P.an,H.bi,P.a8,P.I,H.c4,P.a_,H.aO,H.bv,H.bn,H.cJ,P.aw,H.bK,H.co,H.cq,P.dn,P.aa,P.U,P.bH,P.aY,P.M,P.dq,P.a3,P.bk,P.dg,P.aC,P.b8,P.bE,P.d0,P.cc,P.n,P.v,P.w,P.B,P.e,P.az,W.c7,W.aU,W.ca,P.da,P.di,P.bo,F.bl,M.bc,M.u,S.cP,D.cn,D.C,D.cw,D.P,V.ax,V.r,X.cB,G.cC,R.cD])
s(J.O,[J.cf,J.cg,J.bt,J.ac,J.aj,J.ak,H.bz,W.ai,W.bI,W.c9,W.c,W.bM])
s(J.bt,[J.cv,J.af,J.ad])
t(J.dM,J.ac)
s(J.aj,[J.aV,J.br])
s(P.an,[H.bh,W.cY])
s(P.a8,[H.bj,P.ab])
s(P.ab,[H.bf,P.cm,P.cl])
s(P.I,[H.cV,H.F])
s(H.cV,[H.bg,H.bL])
t(H.cX,H.bg)
t(H.cW,H.bL)
t(H.aL,H.cW)
t(P.cs,P.a_)
s(P.cs,[H.aM,H.ae,P.dc])
s(H.aO,[H.c5,H.dE,H.cI,H.ch,H.dz,H.dA,H.dB,P.cS,P.cR,P.cT,P.cU,P.dp,P.d1,P.d5,P.d2,P.d3,P.d4,P.d8,P.d9,P.d7,P.d6,P.cG,P.cH,P.ds,P.dl,P.dk,P.dm,P.cr,P.ct,P.de,P.dh,W.d_,M.bX,M.c0,M.c1,M.bY,M.bZ,M.c_,B.cz])
s(H.F,[H.aW,H.cp])
s(P.aw,[H.cu,H.ci,H.cN,H.cL,H.c3,H.cy,P.bW,P.bu,P.bA,P.ag,P.cO,P.cM,P.bF,P.c6,P.c8])
s(H.cI,[H.cE,H.aJ])
t(H.cQ,P.bW)
t(H.bx,H.bz)
t(H.b2,H.bx)
t(H.b3,H.b2)
t(H.by,H.b3)
t(H.bw,H.by)
t(P.dj,P.dq)
t(P.dd,H.aW)
t(P.ck,P.bu)
t(P.cj,P.bk)
t(P.df,P.dg)
s(P.b8,[P.E,P.L])
s(P.ag,[P.bC,P.cd])
t(W.J,W.ai)
s(W.J,[W.aR,W.ah,W.aQ])
s(W.aR,[W.h,P.i])
s(W.h,[W.bU,W.bV,W.au,W.av,W.cb,W.cA])
t(W.aP,W.bI)
t(W.bp,W.aQ)
t(W.H,W.c)
t(W.b0,W.H)
t(W.bN,W.bM)
t(W.bJ,W.bN)
t(W.dP,W.cY)
t(W.cZ,P.aY)
t(P.a0,P.di)
t(P.S,P.i)
s(P.S,[P.a7,P.a1,P.aZ])
s(P.a7,[P.aN,P.al,P.ay,P.K])
t(P.b_,P.aZ)
t(P.a4,P.b_)
u(H.bL,P.a3)
u(H.b2,P.a3)
u(H.b3,H.bn)
u(W.bI,W.c7)
u(W.bM,P.a3)
u(W.bN,W.aU)})()
var v={mangledGlobalNames:{L:"int",E:"double",b8:"num",e:"String",aC:"bool",w:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.w},{func:1,ret:-1},{func:1,ret:P.E,args:[P.E]},{func:1,args:[,]},{func:1,ret:P.w,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.w,args:[,]},{func:1,ret:P.w,args:[W.H]},{func:1,ret:-1,args:[P.o]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.o],opt:[P.B]},{func:1,ret:P.w,args:[,],opt:[P.B]},{func:1,ret:[P.U,,],args:[,]},{func:1,ret:P.w,args:[P.e,,]},{func:1,args:[W.c]},{func:1,ret:[P.v,M.u,P.e]},{func:1,ret:P.w,args:[P.e,P.e]},{func:1,ret:-1,args:[P.e,P.e]}],interceptorsByTag:null,leafTags:null};(function constants(){C.j=W.bp.prototype
C.aC=J.O.prototype
C.a=J.ac.prototype
C.q=J.br.prototype
C.e=J.aV.prototype
C.h=J.aj.prototype
C.b=J.ak.prototype
C.aD=J.ad.prototype
C.v=H.bw.prototype
C.ac=J.cv.prototype
C.aG=P.ay.prototype
C.at=P.K.prototype
C.aM=P.a1.prototype
C.au=P.a4.prototype
C.L=J.af.prototype
C.M=new M.u("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X")
C.N=new M.u("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y")
C.l=new M.u("AxA.PHYS_X_START")
C.m=new M.u("AxA.PHYS_X_WIDTH")
C.x=new M.u("AxA.POSITION")
C.O=new M.u("AxA.STROKE")
C.P=new M.u("AxA.STROKE_WIDTH")
C.Q=new M.u("AxA.TEXT_COLOR_X")
C.R=new M.u("AxA.TEXT_COLOR_Y")
C.k=new M.u("AxA.TICK_LENGTH")
C.S=new M.u("AxA.YLEGENDTEXT_DIRECTION")
C.y=new M.u("AxA.XYGRID_STROKE")
C.p=new M.u("AxA.FONT_SIZE")
C.z=new M.u("AxA.XYGRID_STROKE_WIDTH")
C.A=new M.u("AxA.XYGRID_STROKE_OPACITY")
C.B=new M.u("AxA.XYGRID_STROKE_DASH")
C.D=new M.u("AxA.LABELS_OFFSET_Y")
C.d=new M.u("AxA.LEGENDTEXT")
C.E=new M.u("AxA.LEGENDTEXT_OFFSET_X")
C.F=new M.u("AxA.LEGENDTEXT_LEFT_OFFSET_Y")
C.T=new M.u("AxA.LEGENDTEXT_RIGHT_OFFSET_Y")
C.U=new M.u("AxA.NLABELS_X")
C.V=new M.u("AxA.NLABELS_Y")
C.W=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.av=function() {
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
C.aA=function(getTagFallback) {
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
C.aw=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.ax=function(hooks) {
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
C.az=function(hooks) {
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
C.ay=function(hooks) {
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
C.X=function(hooks) { return hooks; }

C.n=new P.cj()
C.aB=new P.da()
C.c=new P.dj()
C.aE=new P.cl(null)
C.aF=new P.cm(null)
C.Y=new D.P("LayA.X_AXIS_AREA_HEIGHT")
C.Z=new D.P("LayA.Y_AXIS_AREA_WIDTH")
C.a_=new D.P("LayA.BORDER_AREA_SIZE")
C.a0=new D.P("LayA.FRAME_SIZE")
C.a1=new D.P("LayA.DATA_AREA_BORDER_COLOR")
C.a2=new D.P("LayA.DATA_AREA_BORDER_WIDTH")
C.a3=new D.P("LayA.PLOT_AREA_BORDER_COLOR")
C.G=new D.P("LayA.PLOT_AREA_BORDER_WIDTH")
C.a4=new D.C("LegA.BG_COLOR")
C.a5=new D.C("LegA.BG_OPACITY")
C.a6=new D.C("LegA.TEXT_COLOR")
C.o=new D.C("LegA.TOP_TITLE")
C.r=new D.C("LegA.SUB_TITLES")
C.a7=new D.C("LegA.BG_WIDTH")
C.a8=new D.C("LegA.BG_HEIGTH")
C.a9=new D.C("LegA.COLORED_RECT_WIDTH")
C.aa=new D.C("LegA.COLORED_RECT_HEIGHT")
C.H=new D.C("LegA.FONT_SIZE")
C.ab=new D.C("LegA.LINESEP")
C.t=new D.C("LegA.X")
C.u=new D.C("LegA.Y")
C.aH=new V.r("PyA.POINT_LIST")
C.aI=new V.r("PyA.POINT_LIST_STROKE")
C.w=new V.r("PyA.REFYMAX")
C.ad=new V.r("PyA.ROTATE")
C.ae=new V.r("PyA.SELECTION_ICON_WIDTH")
C.af=new V.r("PyA.SELECTION_ICON_OUTSIDE")
C.aJ=new V.r("PyA.SHOW_LEGEND")
C.f=new V.r("PyA.STROKE")
C.ag=new V.r("PyA.STROKE_WIDTH")
C.ah=new V.r("PyA.COMPRESSION_LENGTH")
C.aK=new V.r("PyA.STROKE_WIDTH_HILITE")
C.ai=new V.r("PyA.XSCALE")
C.aj=new V.r("PyA.XSHIFT")
C.ak=new V.r("PyA.YIX1")
C.I=new V.r("PyA.YSCALE")
C.al=new V.r("PyA.YSCALE2")
C.am=new V.r("PyA.YSHIFT1")
C.an=new V.r("PyA.YSHIFT2")
C.i=new V.r("PyA.YPOSITION_ZERO")
C.aL=new V.r("PyA.YPOSITION_ZERO_RESET")
C.ao=new V.r("PyA.DRAW_OUTSIDE_Y_VIEWPORT")
C.J=new V.r("PyA.OVERRIDE_IXFIRST")
C.K=new V.r("PyA.OVERRIDE_IXLAST")
C.ap=new V.r("PyA.DRAW_SELECTION_ICON")
C.aq=new V.r("PyA.INSETX")
C.ar=new V.r("PyA.INSETY")
C.C=new V.r("PyA.MARKER_TEXT")
C.as=new V.r("PyA.MARKER_FONTSIZE")})();(function staticFields(){$.a6=0
$.aK=null
$.e8=null
$.dR=!1
$.eH=null
$.ez=null
$.eN=null
$.dx=null
$.dC=null
$.dY=null
$.aA=null
$.b4=null
$.b5=null
$.dS=!1
$.z=C.c
$.Q=[]
$.bd=P.q([C.p,"18",C.M,"50",C.N,"10",C.D,"2",C.d,"",C.E,"20",C.F,"30",C.T,"30",C.U,'{"100":"2", "200":"4", "300":"8", "400":"10", "500":"10", "600":"10", "700":"10"}',C.V,'{"100":"7", "200":"7", "300":"12", "400":"12", "500":"12", "600":"12", "700":"12"}',C.x,"bg",C.O,"black",C.P,"1",C.Q,"black",C.R,"black",C.k,"6",C.S,"bt",C.y,"#A9A9A9",C.z,"1.0",C.A,"0.3",C.B,"0,0"],M.u,P.e)
$.fL=P.q([C.y,"#A9A9A9",C.z,"1.0",C.A,"0.3",C.B,"0,0"],M.u,P.e)
$.eg=P.q([C.a4,"lightgrey",C.a5,"0.2",C.a7,"0",C.a8,"100",C.a9,"20",C.aa,"12",C.H,"16",C.ab,"4",C.t,"12",C.u,"12",C.a6,"black",C.o,""],D.C,P.e)
$.fz=P.q([C.Y,"70",C.Z,"80",C.a_,"15",C.a0,"0",C.a1,"darkgreen",C.a2,"1",C.a3,"darkgreen",C.G,"0"],D.P,P.e)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"hs","eS",function(){return H.eG("_$dart_dartClosure")})
u($,"ht","e_",function(){return H.eG("_$dart_js")})
u($,"hw","eT",function(){return H.a9(H.cK({
toString:function(){return"$receiver$"}}))})
u($,"hx","eU",function(){return H.a9(H.cK({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"hy","eV",function(){return H.a9(H.cK(null))})
u($,"hz","eW",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hC","eZ",function(){return H.a9(H.cK(void 0))})
u($,"hD","f_",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hB","eY",function(){return H.a9(H.en(null))})
u($,"hA","eX",function(){return H.a9(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"hF","f1",function(){return H.a9(H.en(void 0))})
u($,"hE","f0",function(){return H.a9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"hH","e0",function(){return P.fM()})
u($,"hu","dF",function(){return P.q([C.ah,"1024",C.ao,"true",C.ap,"false",C.aq,"16",C.ar,"12",C.as,"16",C.w,"null",C.ae,"16",C.af,"false",C.aJ,"true",C.f,"blue",C.ag,"1",C.aK,"2",C.ai,"1.0",C.aj,"0",C.ak,"0.0",C.I,"1",C.am,"0",C.an,"0",C.i,"0.9",C.aL,"0.9"],V.r,P.e)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.O,MediaError:J.O,Navigator:J.O,NavigatorConcurrentHardware:J.O,NavigatorUserMediaError:J.O,OverconstrainedError:J.O,PositionError:J.O,SQLError:J.O,ArrayBufferView:H.bz,Float64Array:H.bw,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,HTMLAnchorElement:W.bU,HTMLAreaElement:W.bV,HTMLCanvasElement:W.au,CDATASection:W.ah,CharacterData:W.ah,Comment:W.ah,ProcessingInstruction:W.ah,Text:W.ah,CSSStyleDeclaration:W.aP,MSStyleCSSProperties:W.aP,CSS2Properties:W.aP,HTMLDivElement:W.av,XMLDocument:W.aQ,Document:W.aQ,DOMException:W.c9,Element:W.aR,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,WebGLContextEvent:W.c,Event:W.c,InputEvent:W.c,Window:W.ai,DOMWindow:W.ai,EventTarget:W.ai,HTMLFormElement:W.cb,HTMLDocument:W.bp,DocumentFragment:W.J,ShadowRoot:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,HTMLSelectElement:W.cA,TouchEvent:W.b0,CompositionEvent:W.H,FocusEvent:W.H,KeyboardEvent:W.H,MouseEvent:W.H,DragEvent:W.H,PointerEvent:W.H,TextEvent:W.H,WheelEvent:W.H,UIEvent:W.H,NamedNodeMap:W.bJ,MozNamedAttrMap:W.bJ,SVGCircleElement:P.aN,SVGEllipseElement:P.a7,SVGPathElement:P.a7,SVGPolygonElement:P.a7,SVGGeometryElement:P.a7,SVGAElement:P.S,SVGClipPathElement:P.S,SVGDefsElement:P.S,SVGForeignObjectElement:P.S,SVGGElement:P.S,SVGImageElement:P.S,SVGSwitchElement:P.S,SVGUseElement:P.S,SVGGraphicsElement:P.S,SVGLineElement:P.al,SVGPolylineElement:P.ay,SVGRectElement:P.K,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPatternElement:P.i,SVGRadialGradientElement:P.i,SVGScriptElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSymbolElement:P.i,SVGTitleElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGSVGElement:P.a1,SVGTextPathElement:P.aZ,SVGTextContentElement:P.aZ,SVGTextElement:P.a4,SVGTSpanElement:P.b_,SVGTextPositioningElement:P.b_})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Float64Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGCircleElement:true,SVGEllipseElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGImageElement:true,SVGSwitchElement:true,SVGUseElement:true,SVGGraphicsElement:false,SVGLineElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPatternElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTextElement:true,SVGTSpanElement:true,SVGTextPositioningElement:false})
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.b2.$nativeSuperclassTag="ArrayBufferView"
H.b3.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Z.eK,[])
else Z.eK([])})})()
//# sourceMappingURL=example2.dart.js.map
