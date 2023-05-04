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
a[c]=function(){a[c]=function(){H.ht(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.dU(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={dM:function dM(){},
dG:function(a,b,c){if(H.dt(a,"$iF",[b],"$aF"))return new H.cV(a,[b,c])
return new H.bg(a,[b,c])},
cd:function(){return new P.bE("No element")},
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
cT:function cT(){},
c3:function c3(a,b){this.a=a
this.$ti=b},
bg:function bg(a,b){this.a=a
this.$ti=b},
cV:function cV(a,b){this.a=a
this.$ti=b},
cU:function cU(){},
aM:function aM(a,b){this.a=a
this.$ti=b},
aN:function aN(a,b){this.a=a
this.$ti=b},
c4:function c4(a,b){this.a=a
this.b=b},
F:function F(){},
aX:function aX(){},
bv:function bv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bn:function bn(){},
bK:function bK(){},
au:function(a){var u,t=H.hu(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
he:function(a){return v.types[H.S(a)]},
hj:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.G(a).$ibs},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.bb(a)
if(typeof u!=="string")throw H.h(H.bN(a))
return u},
aY:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
fD:function(a,b){var u,t
if(typeof a!=="string")H.aJ(H.bN(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.a(u,3)
t=H.y(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
fC:function(a){var u,t
if(typeof a!=="string")H.aJ(H.bN(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.fc(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bB:function(a){return H.fB(a)+H.dT(H.as(a),0,null)},
fB:function(a){var u,t,s,r,q,p,o,n=J.G(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.aC||!!n.$iag){r=C.W(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.au(t.length>1&&C.c.a0(t,0)===36?C.c.b2(t,1):t)},
W:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.b.aI(u,10))>>>0,56320|u&1023)}throw H.h(P.an(a,0,1114111,null,null))},
e:function(a){throw H.h(H.bN(a))},
a:function(a,b){if(a==null)J.U(a)
throw H.h(H.aF(a,b))},
aF:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ab(!0,b,s,null)
u=H.S(J.U(a))
if(!(b<0)){if(typeof u!=="number")return H.e(u)
t=b>=u}else t=!0
if(t)return P.dJ(b,a,s,null,u)
return P.cw(b,s)},
h7:function(a,b,c){var u="Invalid value"
if(a>c)return new P.aA(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.aA(a,c,!0,b,"end",u)
return new P.ab(!0,b,"end",null)},
bN:function(a){return new P.ab(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.bA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.eP})
u.name=""}else u.toString=H.eP
return u},
eP:function(){return J.bb(this.dartException)},
aJ:function(a){throw H.h(a)},
eO:function(a){throw H.h(P.bm(a))},
a9:function(a){var u,t,s,r,q,p
a=H.eM(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.v([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
el:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ei:function(a,b){return new H.ct(a,b==null?null:b.method)},
dN:function(a,b){var u=b==null,t=u?null:b.method
return new H.ch(a,t,u?null:b.receiver)},
Z:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.dC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.b.aI(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dN(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ei(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.eR()
q=$.eS()
p=$.eT()
o=$.eU()
n=$.eX()
m=$.eY()
l=$.eW()
$.eV()
k=$.f_()
j=$.eZ()
i=r.D(u)
if(i!=null)return f.$1(H.dN(H.y(u),i))
else{i=q.D(u)
if(i!=null){i.method="call"
return f.$1(H.dN(H.y(u),i))}else{i=p.D(u)
if(i==null){i=o.D(u)
if(i==null){i=n.D(u)
if(i==null){i=m.D(u)
if(i==null){i=l.D(u)
if(i==null){i=o.D(u)
if(i==null){i=k.D(u)
if(i==null){i=j.D(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ei(H.y(u),i))}}return f.$1(new H.cL(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.bD()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ab(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.bD()
return a},
at:function(a){var u
if(a==null)return new H.bJ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.bJ(a)},
ha:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
hi:function(a,b,c,d,e,f){H.k(a,"$idI")
switch(H.S(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.cZ("Unsupported number of arguments for wrapped closure"))},
b8:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hi)
a.$identity=u
return u},
fj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.cC().constructor.prototype):Object.create(new H.aK(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a5
if(typeof t!=="number")return t.m()
$.a5=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ea(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ff(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ea(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ff:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.he,a)
if(typeof a=="function")if(b)return a
else{u=c?H.e8:H.dF
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
fg:function(a,b,c,d){var u=H.dF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ea:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fi(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.fg(t,!r,u,b)
if(t===0){r=$.a5
if(typeof r!=="number")return r.m()
$.a5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.aL
return new Function(r+H.b(q==null?$.aL=H.c1("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a5
if(typeof r!=="number")return r.m()
$.a5=r+1
o+=r
r="return function("+o+"){return this."
q=$.aL
return new Function(r+H.b(q==null?$.aL=H.c1("self"):q)+"."+H.b(u)+"("+o+");}")()},
fh:function(a,b,c,d){var u=H.dF,t=H.e8
switch(b?-1:a){case 0:throw H.h(H.fF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fi:function(a,b){var u,t,s,r,q,p,o,n=$.aL
if(n==null)n=$.aL=H.c1("self")
u=$.e7
if(u==null)u=$.e7=H.c1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.fh(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.a5
if(typeof u!=="number")return u.m()
$.a5=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.a5
if(typeof u!=="number")return u.m()
$.a5=u+1
return new Function(n+u+"}")()},
dU:function(a,b,c,d,e,f,g){return H.fj(a,b,c,d,!!e,!!f,g)},
dF:function(a){return a.a},
e8:function(a){return a.c},
c1:function(a){var u,t,s,r=new H.aK("self","target","receiver","name"),q=J.dK(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ds:function(a){if(a==null)H.h2("boolean expression must not be null")
return a},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a4(a,"String"))},
eA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a4(a,"double"))},
hP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a4(a,"num"))},
hL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a4(a,"bool"))},
S:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a4(a,"int"))},
eK:function(a,b){throw H.h(H.a4(a,H.au(H.y(b).substring(2))))},
hp:function(a,b){throw H.h(H.e9(a,H.au(H.y(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.eK(a,b)},
eG:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else u=!0
if(u)return a
H.hp(a,b)},
hl:function(a){if(a==null)return a
if(!!J.G(a).$im)return a
throw H.h(H.a4(a,"List<dynamic>"))},
hk:function(a,b){var u
if(a==null)return a
u=J.G(a)
if(!!u.$im)return a
if(u[b])return a
H.eK(a,b)},
eB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.S(u)]
else return a.$S()}return},
aG:function(a,b){var u
if(typeof a=="function")return!0
u=H.eB(J.G(a))
if(u==null)return!1
return H.eq(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.dQ)return a
$.dQ=!0
try{if(H.aG(a,b))return a
u=H.bP(b)
t=H.a4(a,u)
throw H.h(t)}finally{$.dQ=!1}},
dV:function(a,b){if(a!=null&&!H.du(a,b))H.aJ(H.a4(a,H.bP(b)))
return a},
a4:function(a,b){return new H.cJ("TypeError: "+P.aT(a)+": type '"+H.b(H.ev(a))+"' is not a subtype of type '"+b+"'")},
e9:function(a,b){return new H.c2("CastError: "+P.aT(a)+": type '"+H.b(H.ev(a))+"' is not a subtype of type '"+b+"'")},
ev:function(a){var u,t=J.G(a)
if(!!t.$iaP){u=H.eB(t)
if(u!=null)return H.bP(u)
return"Closure"}return H.bB(a)},
h2:function(a){throw H.h(new H.cO(a))},
ht:function(a){throw H.h(new P.c7(a))},
fF:function(a){return new H.cx(a)},
eE:function(a){return v.getIsolateTag(a)},
v:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
hO:function(a,b,c){return H.aI(a["$a"+H.b(c)],H.as(b))},
dW:function(a,b,c,d){var u=H.aI(a["$a"+H.b(c)],H.as(b))
return u==null?null:u[d]},
O:function(a,b,c){var u=H.aI(a["$a"+H.b(b)],H.as(a))
return u==null?null:u[c]},
d:function(a,b){var u=H.as(a)
return u==null?null:u[b]},
bP:function(a){return H.aq(a,null)},
aq:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.au(a[0].name)+H.dT(a,1,b)
if(typeof a=="function")return H.au(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.S(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a(b,t)
return H.b(b[t])}if('func' in a)return H.fW(a,b)
if('futureOr' in a)return"FutureOr<"+H.aq("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
fW:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.v([],[P.i])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.n(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.a(a0,m)
p=C.c.m(p,a0[m])
l=u[q]
if(l!=null&&l!==P.n)p+=" extends "+H.aq(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aq(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aq(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aq(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.h9(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.y(n[g])
i=i+h+H.aq(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
dT:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aB("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aq(p,c)}return"<"+u.i(0)+">"},
aI:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dt:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.as(a)
t=J.G(a)
if(t[b]==null)return!1
return H.ey(H.aI(t[d],u),null,c,null)},
x:function(a,b,c,d){if(a==null)return a
if(H.dt(a,b,c,d))return a
throw H.h(H.a4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.au(b.substring(2))+H.dT(c,0,null),v.mangledGlobalNames)))},
ey:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.Y(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.Y(a[t],b,c[t],d))return!1
return!0},
hM:function(a,b,c){return a.apply(b,H.aI(J.G(b)["$a"+H.b(c)],H.as(b)))},
eH:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="w"||a===-1||a===-2||H.eH(u)}return!1},
du:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="w"||b===-1||b===-2||H.eH(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.du(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aG(a,b)}u=J.G(a).constructor
t=H.as(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.Y(u,null,b,null)},
T:function(a,b){if(a!=null&&!H.du(a,b))throw H.h(H.e9(a,H.bP(b)))
return a},
o:function(a,b){if(a!=null&&!H.du(a,b))throw H.h(H.a4(a,H.bP(b)))
return a},
Y:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="n"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="n"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Y(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.Y(b[H.S(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="w")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.Y("type" in a?a.type:l,b,s,d)
else if(H.Y(a,b,s,d))return!0
else{if(!('$i'+"aU" in t.prototype))return!1
r=t.prototype["$a"+"aU"]
q=H.aI(r,u?a.slice(1):l)
return H.Y(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.eq(a,b,c,d)
if('func' in a)return c.name==="dI"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ey(H.aI(m,u),b,p,d)},
eq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.Y(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.Y(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.Y(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.Y(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ho(h,b,g,d)},
ho:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.Y(c[s],d,a[s],b))return!1}return!0},
hN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hm:function(a){var u,t,s,r,q=H.y($.eF.$1(a)),p=$.dv[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dA[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.y($.ex.$2(a,q))
if(q!=null){p=$.dv[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dA[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dB(u)
$.dv[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.dA[q]=u
return u}if(s==="-"){r=H.dB(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.eJ(a,u)
if(s==="*")throw H.h(P.em(q))
if(v.leafTags[q]===true){r=H.dB(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.eJ(a,u)},
eJ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.dY(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dB:function(a){return J.dY(a,!1,null,!!a.$ibs)},
hn:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dB(u)
else return J.dY(u,c,null,null)},
hg:function(){if(!0===$.dX)return
$.dX=!0
H.hh()},
hh:function(){var u,t,s,r,q,p,o,n
$.dv=Object.create(null)
$.dA=Object.create(null)
H.hf()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.eL.$1(q)
if(p!=null){o=H.hn(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
hf:function(){var u,t,s,r,q,p,o=C.av()
o=H.aD(C.aw,H.aD(C.ax,H.aD(C.X,H.aD(C.X,H.aD(C.ay,H.aD(C.az,H.aD(C.aA(C.W),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.eF=new H.dx(r)
$.ex=new H.dy(q)
$.eL=new H.dz(p)},
aD:function(a,b){return a(b)||b},
eN:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
h8:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
eM:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hr:function(a,b,c){var u=H.hs(a,b,c)
return u},
hs:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.eM(b),'g'),H.h8(c))},
cH:function cH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ct:function ct(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a){this.a=a},
dC:function dC(a){this.a=a},
bJ:function bJ(a){this.a=a
this.b=null},
aP:function aP(){},
cG:function cG(){},
cC:function cC(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cJ:function cJ(a){this.a=a},
c2:function c2(a){this.a=a},
cx:function cx(a){this.a=a},
cO:function cO(a){this.a=a},
af:function af(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cg:function cg(a){this.a=a},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
co:function co(a,b){this.a=a
this.$ti=b},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
dz:function dz(a){this.a=a},
fV:function(a){return a},
ep:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.aF(b,a))},
fT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.h7(a,b,c))
return b},
bz:function bz(){},
bx:function bx(){},
by:function by(){},
bw:function bw(){},
b3:function b3(){},
b4:function b4(){},
h9:function(a){return J.fr(a?Object.keys(a):[],null)},
hu:function(a){return v.mangledGlobalNames[a]}},J={
dY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bO:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.dX==null){H.hg()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.em("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.dZ()]
if(r!=null)return r
r=H.hm(a)
if(r!=null)return r
if(typeof a=="function")return C.aD
u=Object.getPrototypeOf(a)
if(u==null)return C.ac
if(u===Object.prototype)return C.ac
if(typeof s=="function"){Object.defineProperty(s,$.dZ(),{value:C.L,enumerable:false,writable:true,configurable:true})
return C.L}return C.L},
fr:function(a,b){return J.dK(H.v(a,[b]))},
dK:function(a){a.fixed$length=Array
return a},
ec:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fs:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.a0(a,b)
if(t!==32&&t!==13&&!J.ec(t))break;++b}return b},
ft:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.aN(a,u)
if(t!==32&&t!==13&&!J.ec(t))break}return b},
G:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aW.prototype
return J.br.prototype}if(typeof a=="string")return J.al.prototype
if(a==null)return J.cf.prototype
if(typeof a=="boolean")return J.ce.prototype
if(a.constructor==Array)return J.ad.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ae.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
hb:function(a){if(typeof a=="number")return J.ak.prototype
if(typeof a=="string")return J.al.prototype
if(a==null)return a
if(a.constructor==Array)return J.ad.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ae.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
ar:function(a){if(typeof a=="string")return J.al.prototype
if(a==null)return a
if(a.constructor==Array)return J.ad.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ae.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
aH:function(a){if(a==null)return a
if(a.constructor==Array)return J.ad.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ae.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
hc:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aW.prototype
return J.ak.prototype}if(a==null)return a
if(!(a instanceof P.n))return J.ag.prototype
return a},
eC:function(a){if(typeof a=="number")return J.ak.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.ag.prototype
return a},
eD:function(a){if(typeof a=="string")return J.al.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.ag.prototype
return a},
dw:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ae.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
hd:function(a){if(a==null)return a
if(!(a instanceof P.n))return J.ag.prototype
return a},
f0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hb(a).m(a,b)},
ba:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).T(a,b)},
C:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hj(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ar(a).h(a,b)},
e0:function(a,b,c){return J.aH(a).j(a,b,c)},
f1:function(a,b,c,d){return J.dw(a).ba(a,b,c,d)},
f2:function(a,b,c,d){return J.dw(a).bk(a,b,c,d)},
f3:function(a,b,c){return J.dw(a).bl(a,b,c)},
bQ:function(a,b,c){return J.dw(a).bm(a,b,c)},
f4:function(a,b){return J.hd(a).w(a,b)},
e1:function(a,b){return J.aH(a).J(a,b)},
f5:function(a,b,c){return J.aH(a).P(a,b,c)},
f6:function(a,b){return J.aH(a).G(a,b)},
f7:function(a){return J.aH(a).ga6(a)},
bR:function(a){return J.G(a).gu(a)},
e2:function(a){return J.ar(a).gt(a)},
f8:function(a){return J.ar(a).gL(a)},
bS:function(a){return J.aH(a).gv(a)},
f9:function(a){return J.aH(a).ga9(a)},
U:function(a){return J.ar(a).gk(a)},
fa:function(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.hc(a).gav(a)},
ah:function(a){return J.eC(a).E(a)},
bb:function(a){return J.G(a).i(a)},
fb:function(a,b){return J.eC(a).c4(a,b)},
fc:function(a){return J.eD(a).aX(a)},
P:function P(){},
ce:function ce(){},
cf:function cf(){},
bt:function bt(){},
cu:function cu(){},
ag:function ag(){},
ae:function ae(){},
ad:function ad(a){this.$ti=a},
dL:function dL(a){this.$ti=a},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ak:function ak(){},
aW:function aW(){},
br:function br(){},
al:function al(){}},P={
fM:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.h3()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b8(new P.cQ(s),1)).observe(u,{childList:true})
return new P.cP(s,u,t)}else if(self.setImmediate!=null)return P.h4()
return P.h5()},
fN:function(a){self.scheduleImmediate(H.b8(new P.cR(H.l(a,{func:1,ret:-1})),0))},
fO:function(a){self.setImmediate(H.b8(new P.cS(H.l(a,{func:1,ret:-1})),0))},
fP:function(a){H.l(a,{func:1,ret:-1})
P.fS(0,a)},
fS:function(a,b){var u=new P.dl()
u.b9(a,b)
return u},
fQ:function(a,b){var u,t,s
b.a=1
try{a.aW(new P.d0(b),new P.d1(b),P.w)}catch(s){u=H.Z(s)
t=H.at(s)
P.hq(new P.d2(b,u,t))}},
eo:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iX")
if(u>=4){t=b.ai()
b.a=a.a
b.c=a.c
P.b2(b,t)}else{t=H.k(b.c,"$iaa")
b.a=2
b.c=a
a.aH(t)}},
b2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iM")
P.b7(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b2(h.a,b)}g=h.a
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
P.b7(i,i,g.b,q.a,q.b)
return}l=$.z
if(l!==n)$.z=n
else l=i
g=b.c
if((g&15)===8)new P.d6(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.d5(u,b,q).$0()}else if((g&2)!==0)new P.d4(h,u,b).$0()
if(l!=null)$.z=l
g=u.b
if(!!J.G(g).$iaU){if(g.a>=4){k=H.k(o.c,"$iaa")
o.c=null
b=o.a4(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.eo(g,o)
return}}j=b.b
k=H.k(j.c,"$iaa")
j.c=null
b=j.a4(k)
g=u.a
p=u.b
if(!g){H.o(p,H.d(j,0))
j.a=4
j.c=p}else{H.k(p,"$iM")
j.a=8
j.c=p}h.a=j
g=j}},
h_:function(a,b){if(H.aG(a,{func:1,args:[P.n,P.B]}))return b.aT(a,null,P.n,P.B)
if(H.aG(a,{func:1,args:[P.n]}))return H.l(a,{func:1,ret:null,args:[P.n]})
throw H.h(P.e3(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
fY:function(){var u,t
for(;u=$.aC,u!=null;){$.b6=null
t=u.b
$.aC=t
if(t==null)$.b5=null
u.a.$0()}},
h1:function(){$.dR=!0
try{P.fY()}finally{$.b6=null
$.dR=!1
if($.aC!=null)$.e_().$1(P.ez())}},
eu:function(a){var u=new P.bG(a)
if($.aC==null){$.aC=$.b5=u
if(!$.dR)$.e_().$1(P.ez())}else $.b5=$.b5.b=u},
h0:function(a){var u,t,s=$.aC
if(s==null){P.eu(a)
$.b6=$.b5
return}u=new P.bG(a)
t=$.b6
if(t==null){u.b=s
$.aC=$.b6=u}else{u.b=t.b
$.b6=t.b=u
if(u.b==null)$.b5=u}},
hq:function(a){var u=null,t=$.z
if(C.d===t){P.dr(u,u,C.d,a)
return}P.dr(u,u,t,H.l(t.aM(a),{func:1,ret:-1}))},
b7:function(a,b,c,d,e){var u={}
u.a=d
P.h0(new P.dq(u,e))},
er:function(a,b,c,d,e){var u,t=$.z
if(t===c)return d.$0()
$.z=c
u=t
try{t=d.$0()
return t}finally{$.z=u}},
et:function(a,b,c,d,e,f,g){var u,t=$.z
if(t===c)return d.$1(e)
$.z=c
u=t
try{t=d.$1(e)
return t}finally{$.z=u}},
es:function(a,b,c,d,e,f,g,h,i){var u,t=$.z
if(t===c)return d.$2(e,f)
$.z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.z=u}},
dr:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.aM(d):c.by(d,-1)
P.eu(d)},
cQ:function cQ(a){this.a=a},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
dl:function dl(){},
dm:function dm(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e){var _=this
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
d_:function d_(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a){this.a=a},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a){this.a=a
this.b=null},
ao:function ao(){},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
a8:function a8(){},
M:function M(a,b){this.a=a
this.b=b},
dn:function dn(){},
dq:function dq(a,b){this.a=a
this.b=b},
dh:function dh(){},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function(a,b){return new H.af([a,b])},
u:function(a,b,c){return H.x(H.ha(a,new H.af([b,c])),"$ieg",[b,c],"$aeg")},
fv:function(a,b){return new H.af([a,b])},
fq:function(a,b,c){var u,t
if(P.dS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.v([],[P.i])
C.a.n($.R,a)
try{P.fX(a,u)}finally{if(0>=$.R.length)return H.a($.R,-1)
$.R.pop()}t=P.ek(b,H.hk(u,"$iI"),", ")+c
return t.charCodeAt(0)==0?t:t},
eb:function(a,b,c){var u,t
if(P.dS(a))return b+"..."+c
u=new P.aB(b)
C.a.n($.R,a)
try{t=u
t.a=P.ek(t.a,a,", ")}finally{if(0>=$.R.length)return H.a($.R,-1)
$.R.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dS:function(a){var u,t
for(u=$.R.length,t=0;t<u;++t)if(a===$.R[t])return!0
return!1},
fX:function(a,b){var u,t,s,r,q,p,o,n=a.gv(a),m=0,l=0
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
a7:function(a,b,c){var u=P.fu(b,c)
a.A(0,new P.cq(u,b,c))
return u},
eh:function(a){var u,t={}
if(P.dS(a))return"{...}"
u=new P.aB("")
try{C.a.n($.R,a)
u.a+="{"
t.a=!0
a.A(0,new P.cs(t,u))
u.a+="}"}finally{if(0>=$.R.length)return H.a($.R,-1)
$.R.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(){},
cr:function cr(){},
cs:function cs(a,b){this.a=a
this.b=b},
a_:function a_(){},
fZ:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.h(H.bN(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.Z(s)
r=P.dH(String(t),null)
throw H.h(r)}r=P.dp(u)
return r},
dp:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.da(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.dp(a[u])
return a},
ed:function(a,b,c){return new P.bu(a,b)},
fU:function(a){return a.cj()},
fR:function(a,b,c){var u,t=new P.aB(""),s=new P.dd(t,[],P.h6())
s.ac(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
da:function da(a,b){this.a=a
this.b=b
this.c=null},
dc:function dc(a){this.a=a},
db:function db(a){this.a=a},
bk:function bk(){},
ac:function ac(){},
bu:function bu(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
ci:function ci(){},
cl:function cl(a){this.b=a},
ck:function ck(a){this.a=a},
de:function de(){},
df:function df(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c){this.c=a
this.a=b
this.b=c},
p:function(a){var u=H.fD(a,null)
if(u!=null)return u
throw H.h(P.dH(a,null))},
N:function(a){var u=H.fC(a)
if(u!=null)return u
throw H.h(P.dH("Invalid double",a))},
fm:function(a){if(a instanceof H.aP)return a.i(0)
return"Instance of '"+H.b(H.bB(a))+"'"},
fw:function(a,b,c){var u,t=[c],s=H.v([],t)
for(u=J.bS(a);u.p();)C.a.n(s,H.o(u.gq(),c))
if(b)return s
return H.x(J.dK(s),"$im",t,"$am")},
ek:function(a,b,c){var u=J.bS(b)
if(!u.p())return a
if(c.length===0){do a+=H.b(u.gq())
while(u.p())}else{a+=H.b(u.gq())
for(;u.p();)a=a+c+H.b(u.gq())}return a},
aT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bb(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fm(a)},
e3:function(a,b,c){return new P.ab(!0,a,b,c)},
cw:function(a,b){return new P.aA(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.aA(b,c,!0,a,d,"Invalid value")},
fE:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.h(P.an(a,0,null,b,null))},
dJ:function(a,b,c,d,e){var u=H.S(e==null?J.U(b):e)
return new P.cc(u,!0,a,c,"Index out of range")},
ap:function(a){return new P.cM(a)},
em:function(a){return new P.cK(a)},
fI:function(a){return new P.bE(a)},
bm:function(a){return new P.c5(a)},
dH:function(a,b){return new P.cb(a,b)},
fx:function(a,b,c,d,e){return new H.aN(a,[b,c,d,e])},
aE:function aE(){},
E:function E(){},
ax:function ax(){},
bV:function bV(){},
bA:function bA(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aA:function aA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cc:function cc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cM:function cM(a){this.a=a},
cK:function cK(a){this.a=a},
bE:function bE(a){this.a=a},
c5:function c5(a){this.a=a},
bD:function bD(){},
c7:function c7(a){this.a=a},
cZ:function cZ(a){this.a=a},
cb:function cb(a,b){this.a=a
this.b=b},
L:function L(){},
I:function I(){},
m:function m(){},
t:function t(){},
w:function w(){},
b9:function b9(){},
n:function n(){},
B:function B(){},
i:function i(){},
aB:function aB(a){this.a=a},
d9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bC:function(a,b,c,d,e){var u,t
if(typeof c!=="number")return c.M()
if(c<0)u=-c*0
else u=c
H.o(u,e)
if(typeof d!=="number")return d.M()
if(d<0)t=-d*0
else t=d
return new P.a0(a,b,u,H.o(t,e),[e])},
d8:function d8(){},
dg:function dg(){},
a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bF:function(){var u=H.k(C.f.F(document,"http://www.w3.org/2000/svg","svg"),"$ij")
u.setAttribute("version","1.1")
return H.k(u,"$ia1")},
aO:function aO(){},
a6:function a6(){},
V:function V(){},
am:function am(){},
az:function az(){},
K:function K(){},
j:function j(){},
a1:function a1(){},
b_:function b_(){},
a3:function a3(){},
b0:function b0(){},
bo:function bo(){}},W={
dP:function(a,b,c,d,e){var u=c==null?null:W.ew(new W.cY(c),W.c)
u=new W.cX(a,b,u,!1,[e])
u.aK()
return u},
ew:function(a,b){var u=$.z
if(u===C.d)return a
return u.bz(a,b)},
f:function f(){},
bT:function bT(){},
bU:function bU(){},
av:function av(){},
ai:function ai(){},
aQ:function aQ(){},
c6:function c6(){},
aw:function aw(){},
aR:function aR(){},
c8:function c8(){},
aS:function aS(){},
c:function c(){},
aj:function aj(){},
ca:function ca(){},
bp:function bp(){},
J:function J(){},
cz:function cz(){},
b1:function b1(){},
H:function H(){},
bI:function bI(){},
cW:function cW(){},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cX:function cX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cY:function cY(a){this.a=a},
aV:function aV(){},
c9:function c9(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bH:function bH(){},
bL:function bL(){},
bM:function bM(){}},F={
fk:function(a1,a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a5==null)a5=1024
if(a5<=0)a5=a1.length
if(C.b.b1(a5,2)!==0)++a5
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
j=H.v(o,[P.L])
for(m=0;m<s;++m)C.a.j(j,m,u+m)
return new F.bl(p,j)}o=a5*2
j=F.fl(p,o,u)
i=new Float64Array(o)
for(h=0,m=0;o=j.length,m<o;m=f){g=j[m]-u
f=m+2
n=o-1
l=f>n
if(l&&m+1>n)e=C.a.ga9(j)
else if(l){n=m+1
if(n>=o)return H.a(j,n)
e=j[n]-u}else e=j[f]-u
d=new Float64Array(e-g)
for(o=d.length,c=g;c<e;++c){n=c-g
if(c<0||c>=s)return H.a(p,c)
l=p[c]
if(n<0||n>=o)return H.a(d,n)
d[n]=l}b=E.fd(d)
o=b.length
if(0>=o)return H.a(b,0)
C.h.j(i,h,b[0]);++h
if(1>=b.length)return H.a(b,1)
C.h.j(i,h,b[1]);++h}for(s=o-1,a=1,m=0;m<s;m=f){f=m+1
a0=j[f]-j[m]
if(a0>a)a=a0}return new F.bl(i,j)},
fl:function(a,b,c){var u,t,s,r=H.v([],[P.L]),q=a.length,p=q/b
for(u=0;u<b;++u){t=C.m.E(u*p)
C.a.n(r,t+c)
if(t>=q)break}s=r.length
q=q-1+c
if(s<b)C.a.n(r,q)
else C.a.j(r,s-1,q)
return r},
bl:function bl(a,b){this.a=a
this.d=b}},M={
fe:function(a,b,c,d,e,f,g,h,i,j,k){var u=new M.bd(e,i)
u.aw(null,a,b,c,d,null,null,e,f,g,h,i,new M.bW(j).$0(),k,{})
return u},
e6:function(a,b){var u,t,s
if(Math.abs(a)<0.000001)return 0.000001
u=C.l.an(Math.log(a)/2.302585092994046)
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
t=a}s=M.e6(u-t,!1)
if(typeof c!=="number")return c.l()
r=M.e6(s/(c-1),!0)
q=C.l.an(t/r)*r
p=C.l.bB(u/r)
o=Math.max(-C.l.an(Math.log(r)/2.302585092994046),0)
o=o
n=H.v([],[P.i])
for(p=p*r+0.5*r,m=q;m<p;m+=r)C.a.n(n,C.m.c5(m,o))
return n},
bd:function bd(a,b){var _=this
_.e=_.d=_.c=_.b=_.a=null
_.f=!1
_.r=a
_.x=b},
bW:function bW(a){this.a=a},
c_:function c_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c0:function c0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bX:function bX(a,b){this.a=a
this.b=b},
bY:function bY(a){this.a=a},
bZ:function bZ(a){this.a=a},
r:function r(a){this.b=a}},S={
en:function(a,b,c,d,e){var u=new S.cN(c,d,a,b)
u.sbx(0,P.a7($.fL,M.r,P.i))
if(e!=null)u.b.w(0,e)
u.bA()
return u},
cN:function cN(a,b,c,d){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=c
_.f=d}},D={cm:function cm(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.e=null
_.z=d
_.ch=_.Q=null
_.cx=e
_.db=_.cy=null},D:function D(a){this.b=a},cv:function cv(a,b){var _=this
_.a=null
_.b=a
_.c=null
_.d=b
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},Q:function Q(a){this.b=a},
ej:function(a,b,c){var u
if(c!=null&&b!=null&&Math.abs(b)>1e-8){if(typeof c!=="number")return H.e(c)
if(typeof b!=="number")return H.e(b)
u=a*c/b}else u=a
return u}},V={
fA:function(a,b,c,d,e,f,g,h,i){var u=new V.ay(H.v([],[P.a6]),d,e,b,c,a,f)
u.b6(a,b,c,d,e,f,g,h,i)
return u},
ay:function ay(a,b,c,d,e,f,g){var _=this
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
_.R=_.bM=_.y2=_.y1=_.x2=null
_.ci=g
_.am=_.a5=_.B=_.S=_.aP=_.aO=null},
q:function q(a){this.b=a}},X={
fG:function(a,b){var u,t,s,r,q,p,o,n=null,m="legend",l=D.D,k=P.i,j=P.a7($.ef,l,k)
j.w(0,a)
if(j.h(0,C.y)==null)return
if(j.h(0,C.E)!=null){u=H.x(J.e1(C.x.al(0,j.h(0,C.E)),k),"$im",[k],"$am")
t=J.U(u.a)}else{u=n
t=0}s=new H.af([k,[P.t,D.D,P.i]])
r=P.bF()
q=new D.cm(s,new H.af([k,P.a3]),new H.af([k,P.K]),r,t)
q.cy=t
s.j(0,m,P.a7($.ef,l,k))
l=j.gL(j)
if(l)J.f4(s.h(0,m),j)
r.setAttribute("x",H.y(J.C(s.h(0,m),C.G)))
r.setAttribute("y",H.y(J.C(s.h(0,m),C.H)))
q.r=P.p(J.C(s.h(0,m),C.a9))
l=H.y(J.C(s.h(0,m),C.y))
q.db=l
if(l!=null&&l.length!==0)q.aQ("TOP_TITLE_ID",l,n)
p=b!=null?P.fw(C.a.V(b,0,t),!0,k):n
for(o=t-1,l=H.d(u,1),k=p==null;o>=0;--o){s=o+1
if(k)q.au(""+s,H.T(J.C(u.a,o),l),n)
else{s=""+s
r=H.T(J.C(u.a,o),l)
if(o>=p.length)return H.a(p,o)
q.au(s,r,p[o])}}return q},
cA:function cA(a,b,c,d,e,f,g,h,i){var _=this
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
fJ:function(a){if(a==="true")return!0
return!1},
ee:function(a){var u=P.i
return H.x(J.f5(C.x.al(0,a),u,u),"$it",[u,u],"$at")},
A:function(a,b){b.A(0,new B.cy(a))},
cy:function cy(a){this.a=a},
fo:function(a,b){var u=a.length
if(u!==b.length)throw H.h("Mismatched lengths")
if(u===0)return
else if((u&u-1)>>>0===0)B.fp(a,b)
else throw H.h("array size is not a power of 2!")},
fp:function(a1,a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.length,a0=a2.length
if(a!==a0)throw H.h("Mismatched lengths")
if(a===1)return
for(u=-1,t=0;t<32;++t)if(C.b.bn(1,t)===a)u=t
if(u===-1)throw H.h("Length is not a power of 2")
s=a/2|0
r=new Float64Array(s)
q=new Float64Array(s)
for(s=a/2,p=r.length,o=q.length,t=0;t<s;++t){n=6.283185307179586*t/a
m=Math.cos(n)
if(t>=p)return H.a(r,t)
r[t]=m
n=Math.sin(n)
if(t>=o)return H.a(q,t)
q[t]=n}for(t=0;t<a;++t){l=B.fn(t,u)
if(l>t){if(t>=a)return H.a(a1,t)
k=a1[t]
if(l>=a)return H.a(a1,l)
a1[t]=a1[l]
a1[l]=k
if(t>=a0)return H.a(a2,t)
k=a2[t]
if(l>=a0)return H.a(a2,l)
a2[t]=a2[l]
a2[l]=k}}for(j=2;j<=a;j*=2){i=C.b.O(j,2)
h=C.b.N(a,j)
for(t=0;t<a;t+=j)for(s=t+i,l=t,g=0;l<s;++l,g+=h){n=l+i
if(n<0||n>=a)return H.a(a1,n)
m=a1[n]
if(g>=p)return H.a(r,g)
f=r[g]
if(n>=a0)return H.a(a2,n)
e=a2[n]
if(g>=o)return H.a(q,g)
d=q[g]
c=m*f+e*d
b=-m*d+e*f
if(l<0||l>=a)return H.a(a1,l)
a1[n]=a1[l]-c
if(l>=a0)return H.a(a2,l)
a2[n]=a2[l]-b
a1[l]=a1[l]+c
a2[l]=a2[l]+b}}},
fn:function(a,b){var u,t
for(u=0,t=0;t<b;++t,a=a>>>1)u=(u<<1|a&1)>>>0
return u}},R={
fH:function(a,b,c,d,e,f){var u=new R.cB()
u.b8(a,b,c,d,e,f)
return u},
cB:function cB(){this.a=null}},E={
e4:function(a){var u,t,s,r,q,p=-17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q>t){s=r
t=q}}else{t=p
s=-1}return[t,s]},
e5:function(a){var u,t,s,r,q,p=17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q<t){s=r
t=q}}else{t=p
s=-1}return[t,s]},
fd:function(a){var u,t,s,r,q,p,o
for(u=a.length,t=-1,s=-17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q>s){s=q
t=r}}for(p=-1,o=17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q<o){o=q
p=r}}u=[P.E]
if(p<=t)return H.v([o,s],u)
else return H.v([s,o],u)}},L={
fK:function(a,b,c,d){var u,t,s,r=P.N(d)
if(typeof r!=="number")return r.Z()
r=r>0
u=r?J.ah(P.N(d)):0
t=Math.exp(b)
for(r=a.length,s=1;!0;){s*=t;++u
if(u>=r)break
if(u<0)return H.a(a,u)
a[u]=a[u]*s}}},U={
eI:function(){var u,t,s,r,q,p,o,n,m,l,k=R.fH(512,100,1.5707963267948966,50,0,0).a,j=k.length,i=new Float64Array(j)
L.fK(k,-3/(j-1),!1,"0")
u=new Float64Array(H.fV(k))
B.fo(k,i)
j=H.v([(k&&C.h).V(k,0,j/2|0),C.h.V(i,0,i.length/2|0),C.h.V(u,0,u.length/2|0)],[P.bo])
t=document
s=H.eG(t.querySelector("#app_div"),"$iaw")
r=H.eG(t.querySelector("#plot_div"),"$iaw")
t=r.style
q=H.b(s.clientWidth)+"px"
t.width=q
q=H.b(s.clientHeight)+"px"
t.height=q
t=V.q
q=P.i
p=H.v([P.u([C.i,"0.6"],t,q),P.u([C.i,"0.6"],t,q),P.u([C.i,"0.895",C.I,"5"],t,q)],[[P.t,V.q,P.i]])
t=M.r
o=P.u([C.o,"0",C.p,""+j[0].length,C.w,"Number of points"],t,q)
n=P.u([C.w,"Relative units"],t,q)
t=[q]
m=P.u([C.y,"Fourier Transform of a decaying cosine with 50 periods",C.E,C.x.bK(H.v(["Real part after transform","Imaginary part after transform","Decaying cosine (first half, vertically expanded and shifted down)"],t)),C.G,"45",C.H,"15"],D.D,q)
q=H.v([H.v([0,0,1,1],[P.E])],[[P.m,P.E]])
l=new D.cv(r,q)
l.b5(r,!1,q,null)
new X.cA(l,0,j,p,m,o,n,H.v(["blue","red","magenta","green","orange","cyan","lightgreen","crimson","darkred","darkgreen"],t),null).b7(j,p,o,n,m,null,l,0)}}
var w=[C,H,J,P,W,F,M,S,D,V,X,B,R,E,L,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dM.prototype={}
J.P.prototype={
T:function(a,b){return a===b},
gu:function(a){return H.aY(a)},
i:function(a){return"Instance of '"+H.b(H.bB(a))+"'"}}
J.ce.prototype={
i:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$iaE:1}
J.cf.prototype={
T:function(a,b){return null==b},
i:function(a){return"null"},
gu:function(a){return 0},
$iw:1}
J.bt.prototype={
gu:function(a){return 0},
i:function(a){return String(a)}}
J.cu.prototype={}
J.ag.prototype={}
J.ae.prototype={
i:function(a){var u=a[$.eQ()]
if(u==null)return this.b4(a)
return"JavaScript function for "+H.b(J.bb(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$idI:1}
J.ad.prototype={
J:function(a,b){return new H.aM(a,[H.d(a,0),b])},
n:function(a,b){H.o(b,H.d(a,0))
if(!!a.fixed$length)H.aJ(P.ap("add"))
a.push(b)},
G:function(a,b){H.S(b)
if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
V:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.an(b,0,u,"start",null))
if(c<b||c>u)throw H.h(P.an(c,b,u,"end",null))
if(b===c)return H.v([],[H.d(a,0)])
return H.v(a.slice(b,c),[H.d(a,0)])},
ga6:function(a){if(a.length>0)return a[0]
throw H.h(H.cd())},
ga9:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.cd())},
gt:function(a){return a.length===0},
gL:function(a){return a.length!==0},
i:function(a){return P.eb(a,"[","]")},
gv:function(a){return new J.bc(a,a.length,[H.d(a,0)])},
gu:function(a){return H.aY(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.aJ(P.ap("set length"))
if(b<0)throw H.h(P.an(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.h(H.aF(a,b))
return a[b]},
j:function(a,b,c){H.o(c,H.d(a,0))
if(!!a.immutable$list)H.aJ(P.ap("indexed set"))
if(b>=a.length||b<0)throw H.h(H.aF(a,b))
a[b]=c},
$iF:1,
$iI:1,
$im:1}
J.dL.prototype={}
J.bc.prototype={
gq:function(){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.eO(s))
u=t.c
if(u>=r){t.sax(null)
return!1}t.sax(s[u]);++t.c
return!0},
sax:function(a){this.d=H.o(a,H.d(this,0))},
$ibq:1}
J.ak.prototype={
gaR:function(a){return a===0?1/a<0:a<0},
gav:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
bB:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.h(P.ap(""+a+".ceil()"))},
an:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ap(""+a+".floor()"))},
E:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ap(""+a+".round()"))},
c5:function(a,b){var u
if(b<0||b>20)throw H.h(P.an(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaR(a))return"-"+u
return u},
c4:function(a,b){var u
if(b>20)throw H.h(P.an(b,0,20,"fractionDigits",null))
u=a.toExponential(b)
if(a===0&&this.gaR(a))return"-"+u
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
N:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aJ(a,b)},
O:function(a,b){return(a|0)===a?a/b|0:this.aJ(a,b)},
aJ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ap("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
bn:function(a,b){return b>31?0:a<<b>>>0},
aI:function(a,b){var u
if(a>0)u=this.bo(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
bo:function(a,b){return b>31?0:a>>>b},
$iE:1,
$ib9:1}
J.aW.prototype={
gav:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
$iL:1}
J.br.prototype={}
J.al.prototype={
aN:function(a,b){if(b<0)throw H.h(H.aF(a,b))
if(b>=a.length)H.aJ(H.aF(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(b>=a.length)throw H.h(H.aF(a,b))
return a.charCodeAt(b)},
m:function(a,b){H.y(b)
if(typeof b!=="string")throw H.h(P.e3(b,null,null))
return a+b},
W:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cw(b,null))
if(b>c)throw H.h(P.cw(b,null))
if(c>a.length)throw H.h(P.cw(c,null))
return a.substring(b,c)},
b2:function(a,b){return this.W(a,b,null)},
aX:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.a0(r,0)===133){u=J.fs(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aN(r,t)===133?J.ft(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
bC:function(a,b,c){var u=a.length
if(c>u)throw H.h(P.an(c,0,u,null,null))
return H.eN(a,b,c)},
K:function(a,b){return this.bC(a,b,0)},
i:function(a){return a},
gu:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ify:1,
$ii:1}
H.bh.prototype={
aa:function(a,b,c,d){var u,t
H.l(a,{func:1,ret:-1,args:[H.d(this,1)]})
u=this.a.aS(null,!0,H.l(c,{func:1,ret:-1}))
t=new H.bi(u,$.z,this.$ti)
u.ao(t.gbh())
t.ao(a)
t.ap(0,d)
return t},
aS:function(a,b,c){return this.aa(a,b,c,null)},
J:function(a,b){return new H.bh(this.a,[H.d(this,0),b])},
$aao:function(a,b){return[b]}}
H.bi.prototype={
ao:function(a){var u=H.d(this,1)
H.l(a,{func:1,ret:-1,args:[u]})
this.sbf(a==null?null:H.l(a,{func:1,ret:null,args:[u]}))},
ap:function(a,b){var u,t=this
t.a.ap(0,b)
if(b==null)t.d=null
else{u=P.n
if(H.aG(b,{func:1,args:[P.w,P.w]}))t.d=t.b.aT(H.l(b,{func:1,args:[P.n,P.B]}),null,u,P.B)
else t.d=H.l(H.l(b,{func:1,args:[P.n]}),{func:1,ret:null,args:[u]})}},
bi:function(a){var u,t,s,r,q,p,o,n,m=this,l=null
H.o(a,H.d(m,0))
r=m.c
if(r==null)return
u=null
try{u=H.T(a,H.d(m,1))}catch(q){t=H.Z(q)
s=H.at(q)
r=m.d
if(r==null)P.b7(l,l,m.b,t,H.k(s,"$iB"))
else{p=H.aG(r,{func:1,args:[P.w,P.w]})
o=m.b
n=m.d
if(p)o.c1(H.l(n,{func:1,ret:-1,args:[,P.B]}),t,s,l,P.B)
else o.ar(H.l(n,{func:1,ret:-1,args:[,]}),t,l)}return}m.b.ar(r,u,H.d(m,1))},
sbf:function(a){this.c=H.l(a,{func:1,ret:-1,args:[H.d(this,1)]})},
$iaZ:1,
$aaZ:function(a,b){return[b]}}
H.bj.prototype={
P:function(a,b,c){return new H.bj(this.a,[H.d(this,0),H.d(this,1),b,c])},
$acD:function(a,b,c,d){return[c,d]},
$aa8:function(a,b,c,d){return[c,d]}}
H.bf.prototype={
P:function(a,b,c){return new H.bf(this.a,[H.d(this,0),H.d(this,1),b,c])},
$acD:function(a,b,c,d){return[c,d]},
$aa8:function(a,b,c,d){return[c,d]},
$aac:function(a,b,c,d){return[c,d]}}
H.cT.prototype={
gv:function(a){return new H.c3(J.bS(this.gI()),this.$ti)},
gk:function(a){return J.U(this.gI())},
gt:function(a){return J.e2(this.gI())},
gL:function(a){return J.f8(this.gI())},
G:function(a,b){H.S(b)
return H.T(J.f6(this.gI(),b),H.d(this,1))},
i:function(a){return J.bb(this.gI())},
$aI:function(a,b){return[b]}}
H.c3.prototype={
p:function(){return this.a.p()},
gq:function(){return H.T(this.a.gq(),H.d(this,1))},
$ibq:1,
$abq:function(a,b){return[b]}}
H.bg.prototype={
J:function(a,b){return H.dG(this.a,H.d(this,0),b)},
gI:function(){return this.a}}
H.cV.prototype={$iF:1,
$aF:function(a,b){return[b]}}
H.cU.prototype={
h:function(a,b){return H.T(J.C(this.a,b),H.d(this,1))},
$iF:1,
$aF:function(a,b){return[b]},
$aa2:function(a,b){return[b]},
$im:1,
$am:function(a,b){return[b]}}
H.aM.prototype={
J:function(a,b){return new H.aM(this.a,[H.d(this,0),b])},
gI:function(){return this.a}}
H.aN.prototype={
P:function(a,b,c){return new H.aN(this.a,[H.d(this,0),H.d(this,1),b,c])},
h:function(a,b){return H.T(this.a.h(0,b),H.d(this,3))},
j:function(a,b,c){var u=this
H.o(b,H.d(u,2))
H.o(c,H.d(u,3))
u.a.j(0,H.T(b,H.d(u,0)),H.T(c,H.d(u,1)))},
w:function(a,b){var u=this,t=H.d(u,2),s=H.d(u,3)
u.a.w(0,new H.aN(H.x(b,"$it",[t,s],"$at"),[t,s,H.d(u,0),H.d(u,1)]))},
A:function(a,b){var u=this
u.a.A(0,new H.c4(u,H.l(b,{func:1,ret:-1,args:[H.d(u,2),H.d(u,3)]})))},
gC:function(){return H.dG(this.a.gC(),H.d(this,0),H.d(this,2))},
gk:function(a){var u=this.a
return u.gk(u)},
gt:function(a){var u=this.a
return u.gt(u)},
$aa_:function(a,b,c,d){return[c,d]},
$at:function(a,b,c,d){return[c,d]}}
H.c4.prototype={
$2:function(a,b){var u=this.a
H.o(a,H.d(u,0))
H.o(b,H.d(u,1))
this.b.$2(H.T(a,H.d(u,2)),H.T(b,H.d(u,3)))},
$S:function(){var u=this.a
return{func:1,ret:P.w,args:[H.d(u,0),H.d(u,1)]}}}
H.F.prototype={}
H.aX.prototype={
gv:function(a){var u=this
return new H.bv(u,u.gk(u),[H.O(u,"aX",0)])},
gt:function(a){return this.gk(this)===0}}
H.bv.prototype={
gq:function(){return this.d},
p:function(){var u,t=this,s=t.a,r=J.ar(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.bm(s))
u=t.c
if(u>=q){t.say(null)
return!1}t.say(r.G(s,u));++t.c
return!0},
say:function(a){this.d=H.o(a,H.d(this,0))},
$ibq:1}
H.bn.prototype={}
H.bK.prototype={}
H.cH.prototype={
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
H.ct.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ch.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.cL.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.dC.prototype={
$1:function(a){if(!!J.G(a).$iax)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.bJ.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iB:1}
H.aP.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.au(t==null?"unknown":t)+"'"},
$idI:1,
gce:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cG.prototype={}
H.cC.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.au(u)+"'"}}
H.aK.prototype={
T:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.aK))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gu:function(a){var u,t=this.c
if(t==null)u=H.aY(this.a)
else u=typeof t!=="object"?J.bR(t):H.aY(t)
return(u^H.aY(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.bB(u))+"'")}}
H.cJ.prototype={
i:function(a){return this.a}}
H.c2.prototype={
i:function(a){return this.a}}
H.cx.prototype={
i:function(a){return"RuntimeError: "+H.b(this.a)}}
H.cO.prototype={
i:function(a){return"Assertion failed: "+P.aT(this.a)}}
H.af.prototype={
gk:function(a){return this.a},
gt:function(a){return this.a===0},
gL:function(a){return!this.gt(this)},
gC:function(){return new H.co(this,[H.d(this,0)])},
Y:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.be(u,a)}else{t=this.bO(a)
return t}},
bO:function(a){var u=this,t=u.d
if(t==null)return!1
return u.a8(u.a2(t,u.a7(a)),a)>=0},
w:function(a,b){H.x(b,"$it",this.$ti,"$at").A(0,new H.cg(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a3(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a3(r,b)
s=t==null?null:t.b
return s}else return q.bP(b)},
bP:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.a2(r,s.a7(a))
t=s.a8(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
H.o(b,H.d(s,0))
H.o(c,H.d(s,1))
if(typeof b==="string"){u=s.b
s.aA(u==null?s.b=s.ag():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.aA(t==null?s.c=s.ag():t,b,c)}else s.bR(b,c)},
bR:function(a,b){var u,t,s,r,q=this
H.o(a,H.d(q,0))
H.o(b,H.d(q,1))
u=q.d
if(u==null)u=q.d=q.ag()
t=q.a7(a)
s=q.a2(u,t)
if(s==null)q.aj(u,t,[q.ah(a,b)])
else{r=q.a8(s,a)
if(r>=0)s[r].b=b
else s.push(q.ah(a,b))}},
aU:function(a,b){var u=this.bQ(b)
return u},
bQ:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=q.a7(a)
t=q.a2(p,u)
s=q.a8(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bp(r)
if(t.length===0)q.aE(p,u)
return r.b},
A:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.d(s,0),H.d(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bm(s))
u=u.c}},
aA:function(a,b,c){var u,t=this
H.o(b,H.d(t,0))
H.o(c,H.d(t,1))
u=t.a3(a,b)
if(u==null)t.aj(a,b,t.ah(b,c))
else u.b=c},
aF:function(){this.r=this.r+1&67108863},
ah:function(a,b){var u,t=this,s=new H.cn(H.o(a,H.d(t,0)),H.o(b,H.d(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aF()
return s},
bp:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aF()},
a7:function(a){return J.bR(a)&0x3ffffff},
a8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.ba(a[t].a,b))return t
return-1},
i:function(a){return P.eh(this)},
a3:function(a,b){return a[b]},
a2:function(a,b){return a[b]},
aj:function(a,b,c){a[b]=c},
aE:function(a,b){delete a[b]},
be:function(a,b){return this.a3(a,b)!=null},
ag:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aj(t,u,t)
this.aE(t,u)
return t},
$ieg:1}
H.cg.prototype={
$2:function(a,b){var u=this.a
u.j(0,H.o(a,H.d(u,0)),H.o(b,H.d(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.w,args:[H.d(u,0),H.d(u,1)]}}}
H.cn.prototype={}
H.co.prototype={
gk:function(a){return this.a.a},
gt:function(a){return this.a.a===0},
gv:function(a){var u=this.a,t=new H.cp(u,u.r,this.$ti)
t.c=u.e
return t}}
H.cp.prototype={
gq:function(){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bm(t))
else{t=u.c
if(t==null){u.saz(null)
return!1}else{u.saz(t.a)
u.c=u.c.c
return!0}}},
saz:function(a){this.d=H.o(a,H.d(this,0))},
$ibq:1}
H.dx.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.dy.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dz.prototype={
$1:function(a){return this.a(H.y(a))},
$S:10}
H.bz.prototype={}
H.bx.prototype={
gk:function(a){return a.length},
$ibs:1,
$abs:function(){}}
H.by.prototype={
h:function(a,b){H.ep(b,a,a.length)
return a[b]},
j:function(a,b,c){H.eA(c)
H.ep(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.E]},
$abn:function(){return[P.E]},
$aa2:function(){return[P.E]},
$iI:1,
$aI:function(){return[P.E]},
$im:1,
$am:function(){return[P.E]}}
H.bw.prototype={
V:function(a,b,c){return new Float64Array(a.subarray(b,H.fT(b,c,a.length)))},
$ibo:1}
H.b3.prototype={}
H.b4.prototype={}
P.cQ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.cP.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:11}
P.cR.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cS.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dl.prototype={
b9:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b8(new P.dm(this,b),0),a)
else throw H.h(P.ap("`setTimeout()` not found."))}}
P.dm.prototype={
$0:function(){this.b.$0()},
$S:1}
P.aa.prototype={
bS:function(a){if((this.c&15)!==6)return!0
return this.b.b.aq(H.l(this.d,{func:1,ret:P.aE,args:[P.n]}),a.a,P.aE,P.n)},
bN:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.d(this,1)},r=this.b.b
if(H.aG(u,{func:1,args:[P.n,P.B]}))return H.dV(r.c0(u,a.a,a.b,null,t,P.B),s)
else return H.dV(r.aq(H.l(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.X.prototype={
aW:function(a,b,c){var u,t,s,r=H.d(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.z
if(u!==C.d){H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.h_(b,u)}t=new P.X($.z,[c])
s=b==null?1:3
this.aB(new P.aa(t,s,a,b,[r,c]))
return t},
c3:function(a,b){return this.aW(a,null,b)},
aB:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iaa")
t.c=a}else{if(s===2){u=H.k(t.c,"$iX")
s=u.a
if(s<4){u.aB(a)
return}t.a=s
t.c=u.c}P.dr(null,null,t.b,H.l(new P.d_(t,a),{func:1,ret:-1}))}},
aH:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iaa")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iX")
u=q.a
if(u<4){q.aH(a)
return}p.a=u
p.c=q.c}o.a=p.a4(a)
P.dr(null,null,p.b,H.l(new P.d3(o,p),{func:1,ret:-1}))}},
ai:function(){var u=H.k(this.c,"$iaa")
this.c=null
return this.a4(u)},
a4:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aC:function(a){var u,t,s=this,r=H.d(s,0)
H.dV(a,{futureOr:1,type:r})
u=s.$ti
if(H.dt(a,"$iaU",u,"$aaU"))if(H.dt(a,"$iX",u,null))P.eo(a,s)
else P.fQ(a,s)
else{t=s.ai()
H.o(a,r)
s.a=4
s.c=a
P.b2(s,t)}},
a1:function(a,b){var u,t=this
H.k(b,"$iB")
u=t.ai()
t.a=8
t.c=new P.M(a,b)
P.b2(t,u)},
bd:function(a){return this.a1(a,null)},
$iaU:1}
P.d_.prototype={
$0:function(){P.b2(this.a,this.b)},
$S:0}
P.d3.prototype={
$0:function(){P.b2(this.b,this.a.a)},
$S:0}
P.d0.prototype={
$1:function(a){var u=this.a
u.a=0
u.aC(a)},
$S:6}
P.d1.prototype={
$2:function(a,b){H.k(b,"$iB")
this.a.a1(a,b)},
$1:function(a){return this.$2(a,null)},
$S:13}
P.d2.prototype={
$0:function(){this.a.a1(this.b,this.c)},
$S:0}
P.d6.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.aV(H.l(s.d,{func:1}),null)}catch(r){u=H.Z(r)
t=H.at(r)
if(o.d){s=H.k(o.a.a.c,"$iM").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iM")
else q.b=new P.M(u,t)
q.a=!0
return}if(!!J.G(n).$iaU){if(n instanceof P.X&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iM")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.c3(new P.d7(p),null)
s.a=!1}},
$S:1}
P.d7.prototype={
$1:function(a){return this.a},
$S:14}
P.d5.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.d(s,0)
q=H.o(n.c,r)
p=H.d(s,1)
n.a.b=s.b.b.aq(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.Z(o)
t=H.at(o)
s=n.a
s.b=new P.M(u,t)
s.a=!0}},
$S:1}
P.d4.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iM")
r=m.c
if(H.ds(r.bS(u))&&r.e!=null){q=m.b
q.b=r.bN(u)
q.a=!1}}catch(p){t=H.Z(p)
s=H.at(p)
r=H.k(m.a.a.c,"$iM")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.M(t,s)
n.a=!0}},
$S:1}
P.bG.prototype={}
P.ao.prototype={
gk:function(a){var u={},t=new P.X($.z,[P.L])
u.a=0
this.aa(new P.cE(u,this),!0,new P.cF(u,t),t.gbc())
return t},
J:function(a,b){return new H.bh(this,[H.O(this,"ao",0),b])}}
P.cE.prototype={
$1:function(a){H.o(a,H.O(this.b,"ao",0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.O(this.b,"ao",0)]}}}
P.cF.prototype={
$0:function(){this.b.aC(this.a.a)},
$S:0}
P.aZ.prototype={}
P.a8.prototype={
P:function(a,b,c){return new H.bj(this,[H.O(this,"a8",0),H.O(this,"a8",1),b,c])},
$icD:1}
P.M.prototype={
i:function(a){return H.b(this.a)},
$iax:1}
P.dn.prototype={$ihJ:1}
P.dq.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bA():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:0}
P.dh.prototype={
c2:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.d===$.z){a.$0()
return}P.er(r,r,this,a,-1)}catch(s){u=H.Z(s)
t=H.at(s)
P.b7(r,r,this,u,H.k(t,"$iB"))}},
ar:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.o(b,c)
try{if(C.d===$.z){a.$1(b)
return}P.et(r,r,this,a,b,-1,c)}catch(s){u=H.Z(s)
t=H.at(s)
P.b7(r,r,this,u,H.k(t,"$iB"))}},
c1:function(a,b,c,d,e){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[d,e]})
H.o(b,d)
H.o(c,e)
try{if(C.d===$.z){a.$2(b,c)
return}P.es(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.Z(s)
t=H.at(s)
P.b7(r,r,this,u,H.k(t,"$iB"))}},
by:function(a,b){return new P.dj(this,H.l(a,{func:1,ret:b}),b)},
aM:function(a){return new P.di(this,H.l(a,{func:1,ret:-1}))},
bz:function(a,b){return new P.dk(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
aV:function(a,b){H.l(a,{func:1,ret:b})
if($.z===C.d)return a.$0()
return P.er(null,null,this,a,b)},
aq:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.o(b,d)
if($.z===C.d)return a.$1(b)
return P.et(null,null,this,a,b,c,d)},
c0:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.o(b,e)
H.o(c,f)
if($.z===C.d)return a.$2(b,c)
return P.es(null,null,this,a,b,c,d,e,f)},
aT:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}}
P.dj.prototype={
$0:function(){return this.a.aV(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.di.prototype={
$0:function(){return this.a.c2(this.b)},
$S:1}
P.dk.prototype={
$1:function(a){var u=this.c
return this.a.ar(this.b,H.o(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cq.prototype={
$2:function(a,b){this.a.j(0,H.o(a,this.b),H.o(b,this.c))},
$S:4}
P.a2.prototype={
gv:function(a){return new H.bv(a,this.gk(a),[H.dW(this,a,"a2",0)])},
G:function(a,b){return this.h(a,H.S(b))},
gt:function(a){return this.gk(a)===0},
gL:function(a){return!this.gt(a)},
ga6:function(a){if(this.gk(a)===0)throw H.h(H.cd())
return this.h(a,0)},
ga9:function(a){if(this.gk(a)===0)throw H.h(H.cd())
return this.h(a,this.gk(a)-1)},
J:function(a,b){return new H.aM(a,[H.dW(this,a,"a2",0),b])},
i:function(a){return P.eb(a,"[","]")}}
P.cr.prototype={}
P.cs.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:4}
P.a_.prototype={
P:function(a,b,c){return P.fx(this,H.O(this,"a_",0),H.O(this,"a_",1),b,c)},
A:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.O(s,"a_",0),H.O(s,"a_",1)]})
for(u=J.bS(s.gC());u.p();){t=u.gq()
b.$2(t,s.h(0,t))}},
w:function(a,b){var u,t
H.x(b,"$it",[H.O(this,"a_",0),H.O(this,"a_",1)],"$at")
for(u=b.gC(),u=u.gv(u);u.p();){t=u.gq()
this.j(0,t,b.h(0,t))}},
gk:function(a){return J.U(this.gC())},
gt:function(a){return J.e2(this.gC())},
i:function(a){return P.eh(this)},
$it:1}
P.da.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.bj(b):u}},
gk:function(a){var u
if(this.b==null){u=this.c
u=u.gk(u)}else u=this.X().length
return u},
gt:function(a){return this.gk(this)===0},
gC:function(){if(this.b==null)return this.c.gC()
return new P.db(this)},
j:function(a,b,c){var u,t,s=this
H.y(b)
if(s.b==null)s.c.j(0,b,c)
else if(s.Y(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.br().j(0,b,c)},
w:function(a,b){H.x(b,"$it",[P.i,null],"$at").A(0,new P.dc(this))},
Y:function(a){if(this.b==null)return this.c.Y(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
A:function(a,b){var u,t,s,r,q=this
H.l(b,{func:1,ret:-1,args:[P.i,,]})
if(q.b==null)return q.c.A(0,b)
u=q.X()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.dp(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.h(P.bm(q))}},
X:function(){var u=H.hl(this.c)
if(u==null)u=this.c=H.v(Object.keys(this.a),[P.i])
return u},
br:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.fv(P.i,null)
t=p.X()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.j(0,q,p.h(0,q))}if(r===0)C.a.n(t,null)
else C.a.sk(t,0)
p.a=p.b=null
return p.c=u},
bj:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.dp(this.a[a])
return this.b[a]=u},
$aa_:function(){return[P.i,null]},
$at:function(){return[P.i,null]}}
P.dc.prototype={
$2:function(a,b){this.a.j(0,H.y(a),b)},
$S:15}
P.db.prototype={
gk:function(a){var u=this.a
return u.gk(u)},
G:function(a,b){var u
H.S(b)
u=this.a
if(u.b==null)u=u.gC().G(0,b)
else{u=u.X()
if(b<0||b>=u.length)return H.a(u,b)
u=u[b]}return u},
gv:function(a){var u=this.a
if(u.b==null){u=u.gC()
u=u.gv(u)}else{u=u.X()
u=new J.bc(u,u.length,[H.d(u,0)])}return u},
$aF:function(){return[P.i]},
$aaX:function(){return[P.i]},
$aI:function(){return[P.i]}}
P.bk.prototype={}
P.ac.prototype={
P:function(a,b,c){return new H.bf(this,[H.O(this,"ac",0),H.O(this,"ac",1),b,c])}}
P.bu.prototype={
i:function(a){var u=P.aT(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.cj.prototype={
i:function(a){return"Cyclic error in JSON stringify"}}
P.ci.prototype={
al:function(a,b){var u=P.fZ(b,this.gbJ().a)
return u},
bK:function(a){var u=P.fR(a,this.gbL().b,null)
return u},
gbL:function(){return C.aF},
gbJ:function(){return C.aE},
$abk:function(){return[P.n,P.i]}}
P.cl.prototype={
$acD:function(){return[P.n,P.i]},
$aa8:function(){return[P.n,P.i]},
$aac:function(){return[P.n,P.i]}}
P.ck.prototype={
$acD:function(){return[P.i,P.n]},
$aa8:function(){return[P.i,P.n]},
$aac:function(){return[P.i,P.n]}}
P.de.prototype={
aZ:function(a){var u,t,s,r,q,p,o,n=a.length
for(u=J.eD(a),t=this.c,s=0,r=0;r<n;++r){q=u.a0(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.c.W(a,s,r)
s=r+1
p=t.a+=H.W(92)
switch(q){case 8:t.a=p+H.W(98)
break
case 9:t.a=p+H.W(116)
break
case 10:t.a=p+H.W(110)
break
case 12:t.a=p+H.W(102)
break
case 13:t.a=p+H.W(114)
break
default:p+=H.W(117)
t.a=p
p+=H.W(48)
t.a=p
p+=H.W(48)
t.a=p
o=q>>>4&15
p+=H.W(o<10?48+o:87+o)
t.a=p
o=q&15
t.a=p+H.W(o<10?48+o:87+o)
break}}else if(q===34||q===92){if(r>s)t.a+=C.c.W(a,s,r)
s=r+1
p=t.a+=H.W(92)
t.a=p+H.W(q)}}if(s===0)t.a+=H.b(a)
else if(s<n)t.a+=u.W(a,s,n)},
ad:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.h(new P.cj(a,null))}C.a.n(u,a)},
ac:function(a){var u,t,s,r,q=this
if(q.aY(a))return
q.ad(a)
try{u=q.b.$1(a)
if(!q.aY(u)){s=P.ed(a,null,q.gaG())
throw H.h(s)}s=q.a
if(0>=s.length)return H.a(s,-1)
s.pop()}catch(r){t=H.Z(r)
s=P.ed(a,t,q.gaG())
throw H.h(s)}},
aY:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.m.i(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.aZ(a)
u.a+='"'
return!0}else{u=J.G(a)
if(!!u.$im){s.ad(a)
s.c6(a)
u=s.a
if(0>=u.length)return H.a(u,-1)
u.pop()
return!0}else if(!!u.$it){s.ad(a)
t=s.c7(a)
u=s.a
if(0>=u.length)return H.a(u,-1)
u.pop()
return t}else return!1}},
c6:function(a){var u,t,s=this.c
s.a+="["
u=J.ar(a)
if(u.gL(a)){this.ac(u.h(a,0))
for(t=1;t<u.gk(a);++t){s.a+=","
this.ac(u.h(a,t))}}s.a+="]"},
c7:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gt(a)){o.c.a+="{}"
return!0}u=a.gk(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.A(0,new P.df(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.aZ(H.y(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.a(t,p)
o.ac(t[p])}r.a+="}"
return!0}}
P.df.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.j(u,t.a++,a)
C.a.j(u,t.a++,b)},
$S:4}
P.dd.prototype={
gaG:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.aE.prototype={}
P.E.prototype={}
P.ax.prototype={}
P.bV.prototype={
i:function(a){return"Assertion failed"}}
P.bA.prototype={
i:function(a){return"Throw of null."}}
P.ab.prototype={
gaf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gae:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaf()+o+u
if(!q.a)return t
s=q.gae()
r=P.aT(q.b)
return t+s+": "+r}}
P.aA.prototype={
gaf:function(){return"RangeError"},
gae:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.cc.prototype={
gaf:function(){return"RangeError"},
gae:function(){var u,t=H.S(this.b)
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gk:function(a){return this.f}}
P.cM.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cK.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bE.prototype={
i:function(a){return"Bad state: "+this.a}}
P.c5.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aT(u)+"."}}
P.bD.prototype={
i:function(a){return"Stack Overflow"},
$iax:1}
P.c7.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.cb.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.c.W(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.L.prototype={}
P.I.prototype={
J:function(a,b){return H.dG(this,H.O(this,"I",0),b)},
gk:function(a){var u,t=this.gv(this)
for(u=0;t.p();)++u
return u},
gt:function(a){return!this.gv(this).p()},
gL:function(a){return!this.gt(this)},
G:function(a,b){var u,t,s
H.S(b)
P.fE(b,"index")
for(u=this.gv(this),t=0;u.p();){s=u.gq()
if(b===t)return s;++t}throw H.h(P.dJ(b,this,"index",null,t))},
i:function(a){return P.fq(this,"(",")")}}
P.m.prototype={$iF:1,$iI:1}
P.t.prototype={}
P.w.prototype={
gu:function(a){return P.n.prototype.gu.call(this,this)},
i:function(a){return"null"}}
P.b9.prototype={}
P.n.prototype={constructor:P.n,$in:1,
T:function(a,b){return this===b},
gu:function(a){return H.aY(this)},
i:function(a){return"Instance of '"+H.b(H.bB(this))+"'"},
toString:function(){return this.i(this)}}
P.B.prototype={}
P.i.prototype={$ify:1}
P.aB.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ihy:1}
W.f.prototype={}
W.bT.prototype={
i:function(a){return String(a)}}
W.bU.prototype={
i:function(a){return String(a)}}
W.av.prototype={$iav:1}
W.ai.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={
gk:function(a){return a.length}}
W.c6.prototype={}
W.aw.prototype={$iaw:1}
W.aR.prototype={
F:function(a,b,c){var u=a.createElementNS(b,c)
return u}}
W.c8.prototype={
i:function(a){return String(a)}}
W.aS.prototype={
i:function(a){return a.localName},
bm:function(a,b,c){return a.setAttribute(b,c)},
$iaS:1}
W.c.prototype={$ic:1}
W.aj.prototype={
ba:function(a,b,c,d){return a.addEventListener(b,H.b8(H.l(c,{func:1,args:[W.c]}),1),!1)},
bk:function(a,b,c,d){return a.removeEventListener(b,H.b8(H.l(c,{func:1,args:[W.c]}),1),!1)},
$iaj:1}
W.ca.prototype={
gk:function(a){return a.length}}
W.bp.prototype={}
W.J.prototype={
ab:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
c_:function(a,b){var u,t
try{u=a.parentNode
J.f3(u,b,a)}catch(t){H.Z(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.b3(a):u},
bw:function(a,b){return a.appendChild(b)},
bl:function(a,b,c){return a.replaceChild(b,c)},
$iJ:1}
W.cz.prototype={
gk:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.H.prototype={$iH:1}
W.bI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.dJ(b,a,null,null,null))
return a[b]},
G:function(a,b){H.S(b)
if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.J]},
$ibs:1,
$abs:function(){return[W.J]},
$aa2:function(){return[W.J]},
$iI:1,
$aI:function(){return[W.J]},
$im:1,
$am:function(){return[W.J]},
$aaV:function(){return[W.J]}}
W.cW.prototype={
aa:function(a,b,c,d){var u=H.d(this,0)
H.l(a,{func:1,ret:-1,args:[u]})
H.l(c,{func:1,ret:-1})
return W.dP(this.a,this.b,a,!1,u)},
aS:function(a,b,c){return this.aa(a,b,c,null)}}
W.dO.prototype={}
W.cX.prototype={
ao:function(a){var u=this
H.l(a,{func:1,ret:-1,args:[H.d(u,0)]})
if(u.b==null)throw H.h(P.fI("Subscription has been canceled."))
u.bq()
u.sbg(W.ew(H.l(a,{func:1,ret:-1,args:[W.c]}),W.c))
u.aK()},
ap:function(a,b){},
aK:function(){var u,t=this.d,s=t!=null
if(s&&!0){u=this.b
u.toString
H.l(t,{func:1,args:[W.c]})
if(s)J.f1(u,this.c,t,!1)}},
bq:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.l(t,{func:1,args:[W.c]})
if(s)J.f2(u,this.c,t,!1)}},
sbg:function(a){this.d=H.l(a,{func:1,args:[W.c]})}}
W.cY.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ic"))},
$S:16}
W.aV.prototype={
gv:function(a){return new W.c9(a,a.length,[H.dW(this,a,"aV",0)])}}
W.c9.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.a(s,t)
u.saD(s[t])
u.c=t
return!0}u.saD(null)
u.c=s
return!1},
gq:function(){return this.d},
saD:function(a){this.d=H.o(a,H.d(this,0))},
$ibq:1}
W.bH.prototype={}
W.bL.prototype={}
W.bM.prototype={}
P.d8.prototype={
bT:function(){return Math.random()}}
P.dg.prototype={
i:function(a){var u=this
return"Rectangle ("+H.b(u.a)+", "+H.b(u.b)+") "+H.b(u.c)+" x "+H.b(u.d)},
T:function(a,b){var u,t,s,r,q,p,o,n=this
if(b==null)return!1
if(!!J.G(b).$ia0){u=n.a
t=b.a
if(u==t){s=n.b
r=b.b
if(s==r){q=n.c
if(typeof u!=="number")return u.m()
if(typeof q!=="number")return H.e(q)
p=H.d(n,0)
q=H.o(u+q,p)
u=b.c
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.e(u)
o=H.d(b,0)
if(q===H.o(t+u,o)){u=n.d
if(typeof s!=="number")return s.m()
if(typeof u!=="number")return H.e(u)
p=H.o(s+u,p)
u=b.d
if(typeof r!=="number")return r.m()
if(typeof u!=="number")return H.e(u)
o=p===H.o(r+u,o)
u=o}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gu:function(a){var u,t,s=this,r=s.a,q=J.bR(r),p=s.b,o=J.bR(p),n=s.c
if(typeof r!=="number")return r.m()
if(typeof n!=="number")return H.e(n)
u=H.d(s,0)
n=C.b.gu(H.o(r+n,u))
r=s.d
if(typeof p!=="number")return p.m()
if(typeof r!=="number")return H.e(r)
u=C.b.gu(H.o(p+r,u))
u=P.d9(P.d9(P.d9(P.d9(0,q),o),n),u)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)}}
P.a0.prototype={}
P.aO.prototype={$iaO:1}
P.a6.prototype={$ia6:1}
P.V.prototype={}
P.am.prototype={$iam:1}
P.az.prototype={$iaz:1}
P.K.prototype={$iK:1}
P.j.prototype={$ij:1}
P.a1.prototype={$ia1:1}
P.b_.prototype={}
P.a3.prototype={$ia3:1}
P.b0.prototype={}
P.bo.prototype={$iF:1,
$aF:function(){return[P.E]},
$iI:1,
$aI:function(){return[P.E]},
$im:1,
$am:function(){return[P.E]}}
F.bl.prototype={}
M.bd.prototype={
aw:function(c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="rotate(90) translate(",c7=e1.h(0,C.w),c8=e1.h(0,C.q)
if(J.ar(c8).K(c8,"-"))c4.f=!0
p=!C.c.K(c8,"y")||!1
if(C.c.K(c8,"x2")){p=!1
o=!0}else o=!1
if(c4.r==null)c4.r=0
n=new M.c_(c4,d2,d3,c9,d4,d5)
m=new M.c0(c4,d2,d3,c9,d4,d5)
l=P.i
c4.sbb(0,P.a7($.dE,M.r,l))
c4.e.w(0,e1)
k=B.ee(c4.e.h(0,C.U))
j=B.ee(c4.e.h(0,C.V))
e3.a=6
i=!p
h=i?j:k
h.A(0,new M.bX(e3,d7))
u=d0
t=d1
g=c4.r
if(g!=null&&c4.f){if(typeof g!=="number")return g.l()
u=g-d0
t=g-d1}s=null
f=P.p(c4.e.h(0,C.k))
if(p){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.be(n.$1(u),n.$1(t),e3.a,c5,!1)
if(J.U(s)>2){e=P.N(J.f7(s))
d=P.N(J.f9(s))
g=u
if(typeof e!=="number")return e.M()
if(typeof g!=="number")return H.e(g)
if(!(e<g)){g=t
if(typeof d!=="number")return d.Z()
if(typeof g!=="number")return H.e(g)
g=d>g}else g=!0
if(g){g=e3.a
if(typeof g!=="number")return g.m()
e3.a=g+1
s=M.be(n.$1(u),n.$1(t),e3.a,c5,!1)}}g=J.U(s)
c=J.C(s,J.U(s)/2|0)
if(typeof f!=="number")return H.e(f)
g=C.m.E(g*c.length*f*0.6)
if(typeof d7!=="number")return H.e(d7)
if(g>d7){g=e3.a
if(typeof g!=="number")return H.e(g)
e3.a=C.l.E(0.8*g)
s=M.be(n.$1(u),n.$1(t),e3.a,c5,!1)}b=P.p(c4.e.h(0,C.j))
if(typeof b!=="number")return b.m()
a=b+f+4
g=P.p(c4.e.h(0,C.B))
if(typeof g!=="number")return H.e(g)
a0=a+g
if(C.c.K(c8,"t")){g=P.p(c4.e.h(0,C.j))
if(typeof d8!=="number")return d8.l()
if(typeof g!=="number")return H.e(g)
b=d8-g
a=b-4
g=P.p(c4.e.h(0,C.B))
if(typeof g!=="number")return H.e(g)
a0=a-g
a1=d8}else a1=0
a2=c4.e.h(0,C.Q)}else{if(o){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.be(n.$1(u),n.$1(t),e3.a,c5,!1)}else try{r=d2
q=d3
s=M.be(D.ej(u,r,q),D.ej(t,r,q),e3.a,c5,!1)}catch(a3){H.Z(a3)
s=H.v(["0.0"],[l])}g=P.p(c4.e.h(0,C.j))
if(typeof d8!=="number")return d8.l()
if(typeof g!=="number")return H.e(g)
b=d8-g
g=P.p(c4.e.h(0,C.A))
if(typeof g!=="number")return H.e(g)
a=b-g
g=P.p(c4.e.h(0,C.C))
if(typeof g!=="number")return H.e(g)
a0=a-g
if(C.c.K(c8,"t")){b=P.p(c4.e.h(0,C.j))
g=P.p(c4.e.h(0,C.A))
if(typeof b!=="number")return b.m()
if(typeof g!=="number")return H.e(g)
a=b+g
g=P.p(c4.e.h(0,C.T))
if(typeof g!=="number")return H.e(g)
a0=a+g
a1=0}else a1=d8
a2=c4.e.h(0,C.R)}a4=H.v([],[P.L])
c4.a=P.bF()
c4.c=P.p(c4.e.h(0,C.M))
c4.d=P.p(c4.e.h(0,C.N))
for(g=d3!=null,c=d2!=null,a5=c5,a6=a5,a7=a6,a8=a7,a9=a8,b0="middle",b1="0",b2=0;b2<J.U(s);++b2){b3=P.N(J.C(s,b2))
if(!i||o){b4=H.eA(m.$1(b3))
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.l()
if(typeof b4!=="number")return H.e(b4)
b4=b5-b4}b6=J.ah(c4.x.$1(b4))}else{if(g&&c){if(typeof b3!=="number")return b3.a_()
if(typeof d3!=="number")return H.e(d3)
b7=b3*d2/d3}else b7=b3
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.l()
if(typeof b7!=="number")return H.e(b7)
b4=b5-b7}else b4=b7
b6=J.ah(c4.x.$1(b4))}if(b6<0)continue
if(typeof d7!=="number")return H.e(d7)
if(b6>d7)continue
C.a.n(a4,b6)
b5=document
b8=b5.createElementNS("http://www.w3.org/2000/svg","text")
b8=H.k(H.k(b8,"$ij"),"$ia3")
if(J.C(s,b2).length>4){if(typeof b3!=="number")return b3.aL()
b9=Math.abs(b3)>99999}else b9=!1
if(b9){J.e0(s,b2,J.fb(b3,2))
b9=s
c0=J.C(s,b2)
J.e0(b9,b2,H.hr(c0,"e",""))}b8.textContent=J.C(s,b2)
if(p){b9=c4.c
if(typeof b9!=="number")return H.e(b9)
a6=b6+b9
a5=a}else{b9=c4.d
if(typeof b9!=="number")return H.e(b9)
a5=b6+b9
b0=H.eN(c8,"t",0)?"start":"end"
a6=a
b1="-33%"}B.A(b8,P.u(["x",""+a6,"y",""+a5,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.k),"text-anchor",b0,"baseline-shift",b1,"cursor","default"],l,l))
c4.a.appendChild(b8)
if(c4.e.Y(C.j)){b9=P.p(c4.e.h(0,C.j))
if(typeof b9!=="number")return b9.Z()
b9=b9>0}else b9=!1
if(b9){c1=b5.createElementNS("http://www.w3.org/2000/svg","line")
c1=H.k(H.k(c1,"$ij"),"$iam")
if(p){b5=c4.c
if(typeof b5!=="number")return H.e(b5)
a7=b6+b5}else{b5=c4.d
if(typeof b5!=="number")return H.e(b5)
a7=b6+b5}if(p)B.A(c1,P.u(["x1",""+a7,"y1",""+a1,"x2",""+a7,"y2",""+b],l,l))
else B.A(c1,P.u(["x1",""+a1,"y1",""+a7,"x2",""+b,"y2",""+a7],l,l))
B.A(c1,P.u(["stroke",c4.e.h(0,C.O),"stroke-width",c4.e.h(0,C.P)],l,l))
c4.a.appendChild(c1)
a8=c1}a9=b8}if(C.c.K(c8,"g")&&d9!=null&&d9>0)if(p)c4.b=S.en(a4,c5,c5,d9,e1)
else c4.b=S.en(c5,a4,d9,c5,e1)
if(c7!=null&&C.c.aX(c7).length!==0){a9=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","text"),"$ij"),"$ia3")
a9.textContent=c7
if(p){if(typeof d7!=="number")return d7.H()
i=c4.c
if(typeof i!=="number")return H.e(i)
B.A(a9,P.u(["x",H.b(d7/2+i),"y",""+a0,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.k),"text-anchor","middle","cursor","default"],l,l))}else{c2=P.p(c4.e.h(0,C.C))
if(typeof d7!=="number")return d7.U()
c3="rotate(-90) translate("+H.b(-d7/2)+", "+H.b(c2)+")"
if(J.ba(c4.e.h(0,C.S),"tb")){i=d7/2
g=c6+H.b(i)+", "
if(typeof c2!=="number")return c2.U()
c3=g+-c2+")"
if(C.c.K(c8,"t")){i=c6+H.b(i)+", "
if(typeof d8!=="number")return d8.U()
c3=i+(-d8+C.m.E(d8*0.22))+")"}}B.A(a9,P.u(["x","0","y","0","fill",a2,"stroke","none","font-size",c4.e.h(0,C.k),"text-anchor","middle","transform",c3,"cursor","default"],l,l))}l=W.b1
i={func:1,ret:-1,args:[l]}
W.dP(a9,"touchstart",H.l(new M.bY(e2),i),!1,l)
W.dP(a9,"touchmove",H.l(new M.bZ(e2),i),!1,l)
c4.a.appendChild(a9)}},
sbb:function(a,b){this.e=H.x(b,"$it",[M.r,P.i],"$at")}}
M.bW.prototype={
$0:function(){var u=this.a
u.j(0,C.q,J.f0(u.h(0,C.q),"y"))
return u},
$S:17}
M.c_.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.H()
if(typeof p!=="number")return H.e(p)
u=q/p
if(!H.ds(s.e))u=-u
if(o){if(typeof r!=="number")return r.m()
t=r+(a+0.5)*u}else{if(typeof r!=="number")return r.m()
t=r+a*u}return t},
$S:2}
M.c0.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.H()
if(typeof p!=="number")return H.e(p)
u=q/p
if(!H.ds(s.e))u=-u
if(o){if(typeof a!=="number")return a.l()
if(typeof r!=="number")return H.e(r)
t=(a-r)/u-0.5}else{if(typeof a!=="number")return a.l()
if(typeof r!=="number")return H.e(r)
t=(a-r)/u}return t},
$S:2}
M.bX.prototype={
$2:function(a,b){var u,t
H.y(a)
H.y(b)
u=this.b
t=P.p(a)
if(typeof u!=="number")return u.Z()
if(typeof t!=="number")return H.e(t)
if(u>t){this.a.a=P.p(b)
return}},
$S:18}
M.bY.prototype={
$1:function(a){H.k(a,"$iH").preventDefault()},
$S:7}
M.bZ.prototype={
$1:function(a){H.k(a,"$iH").preventDefault()},
$S:7}
M.r.prototype={
i:function(a){return this.b}}
S.cN.prototype={
bA:function(){var u,t,s,r,q,p,o,n,m=this,l="stroke-dasharray",k=P.bF(),j=m.e,i=j!=null
if(i)for(u=m.d,t=P.i,s=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.k(H.k(p,"$ij"),"$iam")
if(r>=j.length)return H.a(j,r)
q=""+j[r]
if(r>=j.length)return H.a(j,r)
B.A(p,P.u(["x1",q,"y1","0","x2",""+j[r],"y2",H.b(u),"stroke",m.b.h(0,C.r),"stroke-width",m.b.h(0,C.t),"stroke-opacity",m.b.h(0,C.u),l,m.b.h(0,C.v)],t,t))
k.appendChild(p)
s=p}j=m.f
i=j!=null
if(i)for(u=m.c,t=P.i,o=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.k(H.k(p,"$ij"),"$iam")
if(r>=j.length)return H.a(j,r)
q=""+j[r]
n=H.b(u)
if(r>=j.length)return H.a(j,r)
B.A(p,P.u(["x1","0","y1",q,"x2",n,"y2",""+j[r],"stroke",m.b.h(0,C.r),"stroke-width",m.b.h(0,C.t),"stroke-opacity",m.b.h(0,C.u),l,m.b.h(0,C.v)],t,t))
k.appendChild(p)
o=p}m.a=k},
sbx:function(a,b){this.b=H.x(b,"$it",[M.r,P.i],"$at")}}
D.cm.prototype={
aQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/2000/svg",h="legend",g=j.c,f=document
g.j(0,a,H.k(H.k(C.f.F(f,i,"text"),"$ij"),"$ia3"))
g.h(0,a).textContent=b
u=j.b
j.ch=P.p(J.C(u.h(0,h),C.F))
J.bQ(g.h(0,a),"font-size",H.b(j.ch))
t=g.h(0,a)
s=J.C(u.h(0,h),C.a6)
t.toString
J.bQ(t,"fill",H.y(s))
s=j.ch
t=P.p(J.C(u.h(0,h),C.ab))
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.e(t)
r=s+t
t=j.cy
s=t*r
j.e=s
q=c!=null
if(q){p=j.r
if(typeof p!=="number")return H.e(p)
o=12+p}else o=12
if(j.db!=null)j.e=s+2*r
s=a==="TOP_TITLE_ID"
if(s){j.e=r
p=j.r
if(typeof p!=="number")return p.N()
o=12-C.b.O(p,2)}j.cy=t-1
t=j.z
C.aM.bw(t,g.h(0,a))
J.bQ(g.h(0,a),"x",""+o)
J.bQ(g.h(0,a),"y",H.b(j.e))
if(!s&&q){g=j.e
if(typeof g!=="number")return g.l()
n=H.k(H.k(C.f.F(f,i,"rect"),"$ij"),"$iK")
m=P.p(J.C(u.h(0,h),C.aa))
l=j.r
k=P.p(J.C(u.h(0,h),C.F))
if(typeof k!=="number")return k.N()
u=C.b.O(k,2)
n.setAttribute("x","6")
n.setAttribute("y",""+(g-r+u))
n.setAttribute("width",H.b(l))
n.setAttribute("height",H.b(m))
n.setAttribute("fill",c)
j.d.j(0,a,n)
t.appendChild(n)}},
au:function(a,b,c){var u,t=this,s=t.c
if(s.Y(a)){u=s.h(0,a)
u.textContent=b;(u&&C.au).c_(u,u)}else t.aQ(a,b,c)
t.bs(t.e)},
bs:function(a){var u,t,s,r=this,q="legend",p=r.Q
if(p!=null)C.at.ab(p)
r.Q=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","rect"),"$ij"),"$iK")
p=r.b
u=P.p(J.C(p.h(0,q),C.a7))
if(u===0)return
t=P.p(J.C(p.h(0,q),C.a8))
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
s.setAttribute("fill",H.y(J.C(p.h(0,q),C.a4)))
s=r.Q
s.toString
s.setAttribute("fill-opacity",H.y(J.C(p.h(0,q),C.a5)))
r.z.appendChild(r.Q)}}
D.D.prototype={
i:function(a){return this.b}}
D.cv.prototype={
b5:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=P.i
a1.sak(P.a7($.fz,D.Q,a2))
u=P.p(a1.a.h(0,C.Y))
t=P.p(a1.a.h(0,C.Z))
s=P.p(a1.a.h(0,C.a_))
r=P.p(a1.a.h(0,C.a0))
q=a1.d
q.length
p=new Array(1)
p.fixed$length=Array
o=[P.a1]
a1.sbH(H.v(p,o))
p=new Array(1)
p.fixed$length=Array
a1.sbW(H.v(p,o))
o=new Array(1)
o.fixed$length=Array
p=[P.K]
a1.sbF(H.v(o,p))
o=new Array(1)
o.fixed$length=Array
a1.sbU(H.v(o,p))
p=new Array(1)
p.fixed$length=Array
o=[[P.a0,P.L]]
a1.sbV(H.v(p,o))
p=new Array(1)
p.fixed$length=Array
a1.sbG(H.v(p,o))
p=new Array(1)
p.fixed$length=Array
a1.sc9(H.v(p,o))
p=new Array(1)
p.fixed$length=Array
a1.scc(H.v(p,o))
o=new Array(1)
o.fixed$length=Array
a1.sbD(H.v(o,[W.av]))
o=P.L
a1.sbI(P.bC(s,s,0,0,o))
n=P.bF()
p=a1.b
m=p.clientWidth
if(typeof m!=="number")return m.l()
m=""+(m-2)
l=p.clientHeight
if(typeof l!=="number")return l.l()
B.A(n,P.u(["width",m,"height",""+(l-2)],a2,a2))
for(k=0;k<1;++k){m=p.clientWidth
l=q[k]
j=l[0]
if(typeof m!=="number")return m.a_()
i=C.b.E(m*j)
j=p.clientHeight
h=l[1]
if(typeof j!=="number")return j.a_()
g=C.b.E(j*h)
h=l[2]
if(typeof s!=="number")return H.e(s)
f=2*s
if(typeof r!=="number")return H.e(r)
e=2*r
d=C.b.E(m*h-2-f-e)
c=C.b.E(j*l[3]-2-f-e)
e=a1.z;(e&&C.a).j(e,k,P.bC(i,g,d,c,o))
e=a1.Q
f=a1.c
l=f.b
j=a1.z
if(k>=j.length)return H.a(j,k)
j=j[k]
h=j.c
if(typeof h!=="number")return h.l()
if(typeof t!=="number")return H.e(t)
f=f.a
if(typeof f!=="number")return H.e(f)
j=j.d
if(typeof j!=="number")return j.l()
if(typeof u!=="number")return H.e(u);(e&&C.a).j(e,k,P.bC(t,l,h-t-f,j-u,o))
j=a1.ch
f=a1.Q
if(k>=f.length)return H.a(f,k)
f=f[k]
h=f.a
l=f.b
e=f.d
if(typeof l!=="number")return l.m()
if(typeof e!=="number")return H.e(e);(j&&C.a).j(j,k,P.bC(h,l+e,f.c,u,o))
f=a1.cx
e=a1.Q
if(k>=e.length)return H.a(e,k)
e=e[k]
l=e.a
if(typeof l!=="number")return l.l();(f&&C.a).j(f,k,P.bC(l-t,e.b,t,e.d,o))
e=a1.e
l=document
m=l.createElementNS("http://www.w3.org/2000/svg","svg")
H.k(m,"$ij")
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
B.A(m,P.u(["x",j,"y",h,"width",f,"height",H.b(e[k].d)],a2,a2))
e=a1.y
b=l.createElementNS("http://www.w3.org/2000/svg","rect");(e&&C.a).j(e,k,H.k(H.k(b,"$ij"),"$iK"))
a=P.p(a1.a.h(0,C.D))
m=a1.y
if(k>=m.length)return H.a(m,k)
m=m[k]
j=a1.z
if(k>=j.length)return H.a(j,k)
j=j[k].a
if(typeof j!=="number")return j.m()
if(typeof a!=="number")return H.e(a)
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
B.A(m,P.u(["x",j,"y",h,"width",f,"height",""+(a0-e),"fill","none","stroke",a1.a.h(0,C.a3),"stroke-width",a1.a.h(0,C.D)],a2,a2))
e=a1.f
m=l.createElementNS("http://www.w3.org/2000/svg","svg")
H.k(m,"$ij")
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
B.A(m,P.u(["x",j,"y",h,"width",f,"height",H.b(e[k].d)],a2,a2))
e=a1.x
b=l.createElementNS("http://www.w3.org/2000/svg","rect");(e&&C.a).j(e,k,H.k(H.k(b,"$ij"),"$iK"))
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
B.A(m,P.u(["x",l,"y",j,"width",h,"height",H.b(f[k].d),"fill","none","stroke",a1.a.h(0,C.a1),"stroke-width",a1.a.h(0,C.a2)],a2,a2))
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
sak:function(a){this.a=H.x(a,"$it",[D.Q,P.i],"$at")},
sbI:function(a){this.c=H.x(a,"$ia0",[P.L],"$aa0")},
sbW:function(a){this.e=H.x(a,"$im",[P.a1],"$am")},
sbH:function(a){this.f=H.x(a,"$im",[P.a1],"$am")},
sbD:function(a){this.r=H.x(a,"$im",[W.av],"$am")},
sbF:function(a){this.x=H.x(a,"$im",[P.K],"$am")},
sbU:function(a){this.y=H.x(a,"$im",[P.K],"$am")},
sbV:function(a){this.z=H.x(a,"$im",[[P.a0,P.L]],"$am")},
sbG:function(a){this.Q=H.x(a,"$im",[[P.a0,P.L]],"$am")},
sc9:function(a){this.ch=H.x(a,"$im",[[P.a0,P.L]],"$am")},
scc:function(a){this.cx=H.x(a,"$im",[[P.a0,P.L]],"$am")}}
D.Q.prototype={
i:function(a){return this.b}}
V.ay.prototype={
b6:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q=this
q.sak(P.a7($.dD(),V.q,P.i))
if(i!=null)q.a.w(0,i)
if(q.a.h(0,C.J)!=null){q.cy=P.p(q.a.h(0,C.J))
q.a.aU(0,C.J)}if(q.a.h(0,C.K)!=null){q.db=P.p(q.a.h(0,C.K))
q.a.aU(0,C.K)}u=q.cy
if(u==null)u=q.cy=0
t=q.db
if(t==null){t=q.r2.length-1
q.db=t}if(t<=u)t=q.db=u+1
if(u<0||u>q.r2.length-1)q.cy=0
u=q.r2
s=u.length-1
if(t>s||t<0)q.db=s
q.y2=B.fJ(q.a.h(0,C.ao))
q.f=P.p(q.a.h(0,C.aq))
q.x=q.r=P.p(q.a.h(0,C.ar))
u=F.fk(u,q.cy,q.db,!1,P.p(q.a.h(0,C.ah)))
q.b=u
u=u.d.length
q.rx=new Float64Array(u)
for(r=0;u=q.b.d,r<u.length;++r){t=q.rx
u=u[r]
u.toString;(t&&C.h).j(t,r,u)}q.aO=E.e5(q.rx)[0]
q.aP=E.e4(q.rx)[0]
q.S=E.e5(q.b.a)[0]
q.B=E.e4(q.b.a)[0]
q.R=P.bF()
q.b0()},
b0:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a.h(0,C.n)==null||J.ba(j.a.h(0,C.n),"null")?j.cx=null:j.cx=P.N(j.a.h(0,C.n))
if(i!=null){u=j.B
if(typeof u!=="number")return u.aL()
u=Math.abs(u)>0.0001}else u=!1
if(u){u=j.B
if(typeof i!=="number")return i.H()
if(typeof u!=="number")return H.e(u)
t=i/u
i=j.S
if(typeof i!=="number")return H.e(i)
j.S=t*i
j.B=t*u}j.k1=P.p(j.a.h(0,C.aj))
j.k2=P.p(j.a.h(0,C.am))
j.k3=P.p(j.a.h(0,C.an))
j.k4=P.N(j.a.h(0,C.ai))
j.r1=P.N(j.a.h(0,C.I))
if(j.a.h(0,C.al)!=null){i=j.r1
u=P.N(j.a.h(0,C.al))
if(typeof i!=="number")return i.a_()
if(typeof u!=="number")return H.e(u)
j.r1=i*u}i=j.y
u=j.f
if(typeof u!=="number")return H.e(u)
if(typeof i!=="number")return i.l()
j.Q=i-2*u
u=j.z
i=j.r
if(typeof u!=="number")return u.l()
if(typeof i!=="number")return H.e(i)
s=j.x
if(typeof s!=="number")return H.e(s)
j.ch=u-i-s
r=j.rx.length
j.fx=1e6
j.fy=0
for(i=r-1,q=null,p=null,o=0,u="";o<r;++o){s=j.rx
if(o>=s.length)return H.a(s,o)
s=s[o]
n=j.k4
if(typeof n!=="number")return H.e(n)
m=j.b.a
if(o>=m.length)return H.a(m,o)
l=m[o]
q=J.ah(j.as(s*n))
p=J.ah(j.at(l))
if(!H.ds(j.y2))if(p<0)p=2
else{s=j.ch
if(typeof s!=="number")return H.e(s)
if(p>s)p=s-1}s=o===i
u=s?u+(""+q+" "+p):u+(""+q+" "+p+",")
if(s)j.dy=q
s=j.fy
if(typeof s!=="number")return H.e(s)
if(p>s)j.fy=p
s=j.fx
if(typeof s!=="number")return H.e(s)
if(p<s)j.fx=p}i=j.c
if(i!=null)C.aG.ab(i)
j.c=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","polyline"),"$ij"),"$iaz")
k=j.a.h(0,C.e)
i=P.p(j.a.h(0,C.ag))
j.bM=i
j.x1=!1
j.c.setAttribute("stroke-width",H.b(i))
i=j.ry
if(i!=null){s=P.i
B.A(i,P.u(["stroke",H.b(k),"fill","none"],s,s))}i=j.c
s=j.a.h(0,C.e)
i.toString
i.setAttribute("stroke",H.y(s))
i.setAttribute("fill","none")
i.setAttribute("points",u.charCodeAt(0)==0?u:u)
if(j.a.h(0,C.ad)!=null){i=j.c
u=j.a.h(0,C.ad)
i.toString
i.setAttribute("transform",H.y(u))}j.R.appendChild(j.c)
j.fr=p
if(J.ba(j.a.h(0,C.ap),"true"))j.bv(q,p)
j.bu()
j.bt(q,p)},
as:function(a){var u,t,s,r,q=this,p=q.aP,o=q.aO
if(typeof p!=="number")return p.l()
if(typeof o!=="number")return H.e(o)
p-=o
if(Math.abs(p)<0.000001)u=a
else{if(typeof a!=="number")return a.l()
t=q.Q
if(typeof t!=="number")return H.e(t)
s=q.f
if(typeof s!=="number")return H.e(s)
r=q.k1
if(typeof r!=="number")return H.e(r)
u=(a-o)*t/p+s+r}return u},
b_:function(a){var u,t,s=this,r=s.a5
if(r==null||s.am==null)return
if(typeof r!=="number")return r.aL()
u=Math.abs(r)<1e-10
if(u){if(typeof a!=="number")return a.cg()
t=a<=0}else t=!1
if(t){r=s.B
u=s.r1
if(typeof r!=="number")return r.H()
if(typeof u!=="number")return H.e(u)
return r/u}if(u){u=s.z
if(typeof a!=="number")return a.cf()
if(typeof u!=="number")return H.e(u)
u=a>=u}else u=!1
if(u){r=s.B
if(typeof r!=="number")return r.U()
u=s.r1
if(typeof u!=="number")return H.e(u)
return-r/u}u=s.am
if(typeof a!=="number")return a.l()
if(typeof u!=="number")return H.e(u)
return-(a-u)/r},
at:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ch,i=P.N(l.a.h(0,C.i))
P.N(l.a.h(0,C.ak))
u=l.r1
if(typeof u!=="number")return H.e(u)
t=1-u
if(typeof i!=="number")return H.e(i)
if(t>i)t=i-0.01
if(typeof j!=="number")return H.e(j)
s=l.r
if(typeof s!=="number")return H.e(s)
r=i*j+s
q=l.S
if(typeof q!=="number")return q.M()
if(q<0){p=l.B
if(typeof p!=="number")return p.M()
p=p<0}else p=!1
o=l.B
if(p){if(typeof a!=="number")return a.U()
a=-a
if(typeof o!=="number")return o.U()
n=l.B=-q
l.S=-o
o=n}if(typeof o!=="number")return o.l()
q=o-0
p=Math.abs(q)<0.000001
if(p){if(typeof a!=="number")return a.a_()
u=a*Math.abs(u)<0.000001}else u=!1
if(u)u=l.a5=0
else if(p){l.a5=0
u=0}else{u=-(t*j+s-r)/q
l.a5=u}s=l.k2
if(typeof s!=="number")return H.e(s)
q=l.k3
if(typeof q!=="number")return H.e(q)
q=r+u*0+s+q
l.am=q
if(typeof a!=="number")return H.e(a)
k=-u*a+q
try{J.ah(k)
u=k
return u}catch(m){H.Z(m)
u=l.z
if(typeof u!=="number")return u.H()
return u/2}},
bv:function(a,b){var u,t,s,r=this,q=r.ry
if(q!=null)C.at.ab(q)
if(a==null){a=r.x2
if(a!=null&&r.y1!=null)b=r.y1
else{a=r.dy
if(a!=null&&r.fr!=null)b=r.fr
else return}}u=P.p(r.a.h(0,C.ae))
if(J.ba(r.a.h(0,C.af),"true")){q=r.y
t=r.f
if(typeof t!=="number")return t.N()
t=C.b.O(t,2)
if(typeof q!=="number")return q.l()
if(typeof a!=="number")return a.Z()
t=a>q-t
q=t}else q=!1
if(q){q=r.y
if(typeof q!=="number")return q.l()
if(typeof u!=="number")return H.e(u)
a=q-u}if(typeof a!=="number")return a.m()
r.x2=a+2
if(typeof u!=="number")return u.N()
q=C.b.O(u,2)
if(typeof b!=="number")return b.l()
r.y1=b-q
s=r.a.h(0,C.e)
q=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","rect"),"$ij"),"$iK")
r.ry=q
t=P.i
B.A(q,P.u(["x",H.b(r.x2),"y",H.b(r.y1),"width",""+u,"height",""+u,"stroke",H.b(s),"fill","white"],t,t))
r.R.appendChild(r.ry)},
bu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.d,b=c.length
if(b!==0){for(u=0;u<c.length;c.length===b||(0,H.eO)(c),++u){t=c[u]
s=t.parentNode
if(s!=null)s.removeChild(t)}C.a.sk(c,0)}r=d.a.h(0,C.aH)
if(r==null||r.length===0)return
b=P.i
q=H.x(J.e1(C.x.al(0,r),b),"$im",[b],"$am")
t=q.ga6(q)
s=q.a
p=J.ar(s)
if(p.gk(s)<4)return
for(o=t==="POLYLINE_POINT_SHAPE_CIRCLE_EMPTY",n=t==="POLYLINE_POINT_SHAPE_SQUARE_EMPTY",m=H.d(q,1),l=2;l<p.gk(s);l+=2){k=P.N(H.T(p.h(s,l),m))
j=P.N(H.T(p.h(s,l+1),m))
i=J.ah(d.as(k))
h=J.ah(d.at(j))
g=d.a.h(0,C.aI)
if(g==null)g=d.a.h(0,C.e)
if(n){f=document.createElementNS("http://www.w3.org/2000/svg","rect")
f=H.k(H.k(f,"$ij"),"$iK")
B.A(f,P.u(["x",H.b(i+18626451505319996e-25),"y",H.b(h+18626451505319996e-25),"width","8","height","8","stroke",H.b(g),"fill","white"],b,b))
e=f}else if(o){f=document.createElementNS("http://www.w3.org/2000/svg","circle")
f=H.k(H.k(f,"$ij"),"$iaO")
B.A(f,P.u(["cx",""+i,"cy",""+h,"r","6","stroke",H.b(g),"fill","white"],b,b))
e=f}else e=null
C.a.n(c,e)
d.R.appendChild(e)}d.a.j(0,C.z,H.T(p.h(s,1),m))},
bt:function(a,b){var u,t,s,r,q=this,p=q.e
if(p!=null)C.au.ab(p)
if(q.a.h(0,C.z)==null||J.U(q.a.h(0,C.z))===0)return
p=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","text"),"$ij"),"$ia3")
q.e=p
p.textContent=H.y(q.a.h(0,C.z))
u=P.p(q.a.h(0,C.as))
p=q.e
if(typeof a!=="number")return a.m()
t=""+(a+8)
if(typeof u!=="number")return u.N()
s=C.b.O(u,4)
if(typeof b!=="number")return b.m()
r=P.i
B.A(p,P.u(["x",t,"y",""+(b+s),"font-size",""+u,"fill",q.a.h(0,C.e),"stroke","none"],r,r))
q.R.appendChild(q.e)},
sak:function(a){this.a=H.x(a,"$it",[V.q,P.i],"$at")}}
V.q.prototype={
i:function(a){return this.b}}
X.cA.prototype={
b7:function(a,a0,a1,a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
c.bE()
u=c.f
if(0>=u.length)return H.a(u,0)
u=u[0]
t=M.r
s=P.i
r=P.a7($.dE,t,s)
r.w(0,c.z)
c.sc8(r)
r=P.a7($.dE,t,s)
r.w(0,c.Q)
c.scb(r)
t=u.r2.length
q=t-1
if(c.z.h(0,C.o)!=null&&J.U(c.z.h(0,C.o))!==0&&c.z.h(0,C.p)!=null&&J.U(c.z.h(0,C.p))!==0){p=P.N(c.z.h(0,C.o))
q=P.N(c.z.h(0,C.p))}else p=0
o=u.rx
o=(o&&C.h).ga6(o)
n=u.rx
n=(n&&C.h).ga9(n)
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
g=new M.bd(b,h)
g.aw(t,o,n,p,q,!0,b,b,j,i,l,h,c.z,b,{})
c.c=g
h=g.a
l=m.ch
if(k>=l.length)return H.a(l,k)
l=l[k].a
g=g.c
if(typeof l!=="number")return l.l()
if(typeof g!=="number")return H.e(g)
g=""+(l-g)
l=m.ch
if(k>=l.length)return H.a(l,k)
B.A(h,P.u(["x",g,"y",H.b(l[k].b)],s,s))
l=c.c.b.a
g=m.Q
if(k>=g.length)return H.a(g,k)
g=H.b(g[k].a)
h=m.Q
if(k>=h.length)return H.a(h,k)
B.A(l,P.u(["x",g,"y",H.b(h[k].b)],s,s))
f=u.b_(0)
h=m.Q
if(k>=h.length)return H.a(h,k)
e=u.b_(h[k].d)
if(f==null)f=u.S
if(e==null)e=u.B
t=u.r1
if(typeof f!=="number")return f.H()
if(typeof t!=="number")return H.e(t)
if(typeof e!=="number")return e.H()
o=m.Q
if(k>=o.length)return H.a(o,k)
o=o[k]
n=o.d
l=m.cx
if(k>=l.length)return H.a(l,k)
u=M.fe(f/t,e/t,b,b,b,n,l[k].c,o.c,u.gcd(),c.Q,b)
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
if(typeof n!=="number")return H.e(n)
B.A(u,P.u(["x",o,"y",""+(l-n)],s,s))
n=c.d.b.a
l=m.Q
if(k>=l.length)return H.a(l,k)
l=H.b(l[k].a)
o=m.Q
if(k>=o.length)return H.a(o,k)
B.A(n,P.u(["x",l,"y",H.b(o[k].b)],s,s))
c.r=X.fG(c.y,c.cx)
for(d=0;d<3;++d){u=m.f
if(k>=u.length)return H.a(u,k)
u=u[k]
t=c.f
if(d>=t.length)return H.a(t,d)
u.appendChild(t[d].R)}u=m.f
t=u.length
if(k>=t)return H.a(u,k)
u[k].appendChild(c.r.z)
u=m.e
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
bE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=new Array(3)
h.fixed$length=Array
i.sbZ(H.v(h,[V.ay]))
if(i.cx==null)i.sbY(i.ch)
for(h=i.e,u=i.a,t=i.b,s=V.q,r=P.i,q=[[P.t,V.q,P.i]],p=0;p<3;++p){if(p===0)o=i.x.length!==3
else o=!1
if(o){o=new Array(3)
o.fixed$length=Array
i.sbX(H.v(o,q))}o=i.x
if(p>=o.length)return H.a(o,p)
n=o[p]
if(n==null){C.a.j(o,p,P.a7($.dD(),s,r))
o=i.x
if(p>=o.length)return H.a(o,p)
o[p].j(0,C.i,"0.8")
o=i.x
if(p>=o.length)return H.a(o,p)
o[p].j(0,C.e,i.cx[p])}else{if(n.h(0,C.i)==null){o=i.x
if(p>=o.length)return H.a(o,p)
o[p].j(0,C.i,"0.8")}o=i.x
if(p>=o.length)return H.a(o,p)
if(o[p].h(0,C.e)==null){o=i.x
if(p>=o.length)return H.a(o,p)
o[p].j(0,C.e,i.cx[p])}m=P.a7($.dD(),s,r)
o=i.x
if(p>=o.length)return H.a(o,p)
m.w(0,o[p])
C.a.j(i.x,p,m)}if(p>0){o=i.x
if(p>=o.length)return H.a(o,p)
o=o[p]
n=i.f
if(0>=n.length)return H.a(n,0)
o.j(0,C.n,H.b(n[0].B))}o=i.f
n=h[p]
l=u.Q
if(t>=l.length)return H.a(l,t)
l=l[t]
k=l.c
l=l.d
j=i.x
if(p>=j.length)return H.a(j,p);(o&&C.a).j(o,p,V.fA(n,0,n.length-1,k,l,null,null,null,j[p]))}},
sbZ:function(a){this.f=H.x(a,"$im",[V.ay],"$am")},
sbX:function(a){this.x=H.x(a,"$im",[[P.t,V.q,P.i]],"$am")},
sc8:function(a){this.z=H.x(a,"$it",[M.r,P.i],"$at")},
scb:function(a){this.Q=H.x(a,"$it",[M.r,P.i],"$at")},
sbY:function(a){this.cx=H.x(a,"$im",[P.i],"$am")}}
B.cy.prototype={
$2:function(a,b){this.a.setAttribute(H.y(a),H.y(b))
return},
$S:19}
R.cB.prototype={
b8:function(a,b,c,d,e,f){var u,t,s,r,q,p=6.283185307179586*d
this.a=new Float64Array(a)
new Float64Array(a)
for(u=e*b,t=0;t<a;++t){s=Math.sin(t*p/a+c)
r=this.a
q=J.fa(2*C.aB.bT()-1)
if(t>=r.length)return H.a(r,t)
r[t]=b*s+f+u*q}}};(function aliases(){var u=J.P.prototype
u.b3=u.i
u=J.bt.prototype
u.b4=u.i})();(function installTearOffs(){var u=hunkHelpers._instance_1u,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff
u(H.bi.prototype,"gbh","bi",8)
t(P,"h3","fN",5)
t(P,"h4","fO",5)
t(P,"h5","fP",5)
s(P,"ez","h1",1)
r(P.X.prototype,"gbc",0,1,null,["$2","$1"],["a1","bd"],12,0)
t(P,"h6","fU",3)
var q
u(q=V.ay.prototype,"gca","as",2)
u(q,"gcd","at",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.dM,J.P,J.bc,P.ao,H.bi,P.a8,P.I,H.c3,P.a_,H.aP,H.bv,H.bn,H.cH,P.ax,H.bJ,H.cn,H.cp,P.dl,P.aa,P.X,P.bG,P.aZ,P.M,P.dn,P.a2,P.bk,P.de,P.aE,P.b9,P.bD,P.cZ,P.cb,P.m,P.t,P.w,P.B,P.i,P.aB,W.c6,W.aV,W.c9,P.d8,P.dg,P.bo,F.bl,M.bd,M.r,S.cN,D.cm,D.D,D.cv,D.Q,V.ay,V.q,X.cA,R.cB])
s(J.P,[J.ce,J.cf,J.bt,J.ad,J.ak,J.al,H.bz,W.aj,W.bH,W.c8,W.c,W.bL])
s(J.bt,[J.cu,J.ag,J.ae])
t(J.dL,J.ad)
s(J.ak,[J.aW,J.br])
s(P.ao,[H.bh,W.cW])
s(P.a8,[H.bj,P.ac])
s(P.ac,[H.bf,P.cl,P.ck])
s(P.I,[H.cT,H.F])
s(H.cT,[H.bg,H.bK])
t(H.cV,H.bg)
t(H.cU,H.bK)
t(H.aM,H.cU)
t(P.cr,P.a_)
s(P.cr,[H.aN,H.af,P.da])
s(H.aP,[H.c4,H.dC,H.cG,H.cg,H.dx,H.dy,H.dz,P.cQ,P.cP,P.cR,P.cS,P.dm,P.d_,P.d3,P.d0,P.d1,P.d2,P.d6,P.d7,P.d5,P.d4,P.cE,P.cF,P.dq,P.dj,P.di,P.dk,P.cq,P.cs,P.dc,P.df,W.cY,M.bW,M.c_,M.c0,M.bX,M.bY,M.bZ,B.cy])
s(H.F,[H.aX,H.co])
s(P.ax,[H.ct,H.ch,H.cL,H.cJ,H.c2,H.cx,P.bV,P.bu,P.bA,P.ab,P.cM,P.cK,P.bE,P.c5,P.c7])
s(H.cG,[H.cC,H.aK])
t(H.cO,P.bV)
t(H.bx,H.bz)
t(H.b3,H.bx)
t(H.b4,H.b3)
t(H.by,H.b4)
t(H.bw,H.by)
t(P.dh,P.dn)
t(P.db,H.aX)
t(P.cj,P.bu)
t(P.ci,P.bk)
t(P.dd,P.de)
s(P.b9,[P.E,P.L])
s(P.ab,[P.aA,P.cc])
t(W.J,W.aj)
s(W.J,[W.aS,W.ai,W.aR])
s(W.aS,[W.f,P.j])
s(W.f,[W.bT,W.bU,W.av,W.aw,W.ca,W.cz])
t(W.aQ,W.bH)
t(W.bp,W.aR)
t(W.H,W.c)
t(W.b1,W.H)
t(W.bM,W.bL)
t(W.bI,W.bM)
t(W.dO,W.cW)
t(W.cX,P.aZ)
t(P.a0,P.dg)
t(P.V,P.j)
s(P.V,[P.a6,P.a1,P.b_])
s(P.a6,[P.aO,P.am,P.az,P.K])
t(P.b0,P.b_)
t(P.a3,P.b0)
u(H.bK,P.a2)
u(H.b3,P.a2)
u(H.b4,H.bn)
u(W.bH,W.c6)
u(W.bL,P.a2)
u(W.bM,W.aV)})()
var v={mangledGlobalNames:{L:"int",E:"double",b9:"num",i:"String",aE:"bool",w:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.w},{func:1,ret:-1},{func:1,ret:P.E,args:[P.E]},{func:1,args:[,]},{func:1,ret:P.w,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.w,args:[,]},{func:1,ret:P.w,args:[W.H]},{func:1,ret:-1,args:[P.n]},{func:1,args:[,P.i]},{func:1,args:[P.i]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.n],opt:[P.B]},{func:1,ret:P.w,args:[,],opt:[P.B]},{func:1,ret:[P.X,,],args:[,]},{func:1,ret:P.w,args:[P.i,,]},{func:1,args:[W.c]},{func:1,ret:[P.t,M.r,P.i]},{func:1,ret:P.w,args:[P.i,P.i]},{func:1,ret:-1,args:[P.i,P.i]}],interceptorsByTag:null,leafTags:null};(function constants(){C.f=W.bp.prototype
C.aC=J.P.prototype
C.a=J.ad.prototype
C.l=J.br.prototype
C.b=J.aW.prototype
C.m=J.ak.prototype
C.c=J.al.prototype
C.aD=J.ae.prototype
C.h=H.bw.prototype
C.ac=J.cu.prototype
C.aG=P.az.prototype
C.at=P.K.prototype
C.aM=P.a1.prototype
C.au=P.a3.prototype
C.L=J.ag.prototype
C.M=new M.r("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X")
C.N=new M.r("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y")
C.o=new M.r("AxA.PHYS_X_START")
C.p=new M.r("AxA.PHYS_X_WIDTH")
C.q=new M.r("AxA.POSITION")
C.O=new M.r("AxA.STROKE")
C.P=new M.r("AxA.STROKE_WIDTH")
C.Q=new M.r("AxA.TEXT_COLOR_X")
C.R=new M.r("AxA.TEXT_COLOR_Y")
C.j=new M.r("AxA.TICK_LENGTH")
C.S=new M.r("AxA.YLEGENDTEXT_DIRECTION")
C.r=new M.r("AxA.XYGRID_STROKE")
C.k=new M.r("AxA.FONT_SIZE")
C.t=new M.r("AxA.XYGRID_STROKE_WIDTH")
C.u=new M.r("AxA.XYGRID_STROKE_OPACITY")
C.v=new M.r("AxA.XYGRID_STROKE_DASH")
C.A=new M.r("AxA.LABELS_OFFSET_Y")
C.w=new M.r("AxA.LEGENDTEXT")
C.B=new M.r("AxA.LEGENDTEXT_OFFSET_X")
C.C=new M.r("AxA.LEGENDTEXT_LEFT_OFFSET_Y")
C.T=new M.r("AxA.LEGENDTEXT_RIGHT_OFFSET_Y")
C.U=new M.r("AxA.NLABELS_X")
C.V=new M.r("AxA.NLABELS_Y")
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

C.x=new P.ci()
C.aB=new P.d8()
C.d=new P.dh()
C.aE=new P.ck(null)
C.aF=new P.cl(null)
C.Y=new D.Q("LayA.X_AXIS_AREA_HEIGHT")
C.Z=new D.Q("LayA.Y_AXIS_AREA_WIDTH")
C.a_=new D.Q("LayA.BORDER_AREA_SIZE")
C.a0=new D.Q("LayA.FRAME_SIZE")
C.a1=new D.Q("LayA.DATA_AREA_BORDER_COLOR")
C.a2=new D.Q("LayA.DATA_AREA_BORDER_WIDTH")
C.a3=new D.Q("LayA.PLOT_AREA_BORDER_COLOR")
C.D=new D.Q("LayA.PLOT_AREA_BORDER_WIDTH")
C.a4=new D.D("LegA.BG_COLOR")
C.a5=new D.D("LegA.BG_OPACITY")
C.a6=new D.D("LegA.TEXT_COLOR")
C.y=new D.D("LegA.TOP_TITLE")
C.E=new D.D("LegA.SUB_TITLES")
C.a7=new D.D("LegA.BG_WIDTH")
C.a8=new D.D("LegA.BG_HEIGTH")
C.a9=new D.D("LegA.COLORED_RECT_WIDTH")
C.aa=new D.D("LegA.COLORED_RECT_HEIGHT")
C.F=new D.D("LegA.FONT_SIZE")
C.ab=new D.D("LegA.LINESEP")
C.G=new D.D("LegA.X")
C.H=new D.D("LegA.Y")
C.aH=new V.q("PyA.POINT_LIST")
C.aI=new V.q("PyA.POINT_LIST_STROKE")
C.n=new V.q("PyA.REFYMAX")
C.ad=new V.q("PyA.ROTATE")
C.ae=new V.q("PyA.SELECTION_ICON_WIDTH")
C.af=new V.q("PyA.SELECTION_ICON_OUTSIDE")
C.aJ=new V.q("PyA.SHOW_LEGEND")
C.e=new V.q("PyA.STROKE")
C.ag=new V.q("PyA.STROKE_WIDTH")
C.ah=new V.q("PyA.COMPRESSION_LENGTH")
C.aK=new V.q("PyA.STROKE_WIDTH_HILITE")
C.ai=new V.q("PyA.XSCALE")
C.aj=new V.q("PyA.XSHIFT")
C.ak=new V.q("PyA.YIX1")
C.I=new V.q("PyA.YSCALE")
C.al=new V.q("PyA.YSCALE2")
C.am=new V.q("PyA.YSHIFT1")
C.an=new V.q("PyA.YSHIFT2")
C.i=new V.q("PyA.YPOSITION_ZERO")
C.aL=new V.q("PyA.YPOSITION_ZERO_RESET")
C.ao=new V.q("PyA.DRAW_OUTSIDE_Y_VIEWPORT")
C.J=new V.q("PyA.OVERRIDE_IXFIRST")
C.K=new V.q("PyA.OVERRIDE_IXLAST")
C.ap=new V.q("PyA.DRAW_SELECTION_ICON")
C.aq=new V.q("PyA.INSETX")
C.ar=new V.q("PyA.INSETY")
C.z=new V.q("PyA.MARKER_TEXT")
C.as=new V.q("PyA.MARKER_FONTSIZE")})();(function staticFields(){$.a5=0
$.aL=null
$.e7=null
$.dQ=!1
$.eF=null
$.ex=null
$.eL=null
$.dv=null
$.dA=null
$.dX=null
$.aC=null
$.b5=null
$.b6=null
$.dR=!1
$.z=C.d
$.R=[]
$.dE=P.u([C.k,"18",C.M,"50",C.N,"10",C.A,"2",C.w,"",C.B,"20",C.C,"30",C.T,"30",C.U,'{"100":"2", "200":"4", "300":"8", "400":"10", "500":"10", "600":"10", "700":"10"}',C.V,'{"100":"7", "200":"7", "300":"12", "400":"12", "500":"12", "600":"12", "700":"12"}',C.q,"bg",C.O,"black",C.P,"1",C.Q,"black",C.R,"black",C.j,"6",C.S,"bt",C.r,"#A9A9A9",C.t,"1.0",C.u,"0.3",C.v,"0,0"],M.r,P.i)
$.fL=P.u([C.r,"#A9A9A9",C.t,"1.0",C.u,"0.3",C.v,"0,0"],M.r,P.i)
$.ef=P.u([C.a4,"lightgrey",C.a5,"0.2",C.a7,"0",C.a8,"100",C.a9,"20",C.aa,"12",C.F,"16",C.ab,"4",C.G,"12",C.H,"12",C.a6,"black",C.y,""],D.D,P.i)
$.fz=P.u([C.Y,"70",C.Z,"80",C.a_,"15",C.a0,"0",C.a1,"darkgreen",C.a2,"1",C.a3,"darkgreen",C.D,"0"],D.Q,P.i)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"hv","eQ",function(){return H.eE("_$dart_dartClosure")})
u($,"hw","dZ",function(){return H.eE("_$dart_js")})
u($,"hz","eR",function(){return H.a9(H.cI({
toString:function(){return"$receiver$"}}))})
u($,"hA","eS",function(){return H.a9(H.cI({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"hB","eT",function(){return H.a9(H.cI(null))})
u($,"hC","eU",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hF","eX",function(){return H.a9(H.cI(void 0))})
u($,"hG","eY",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hE","eW",function(){return H.a9(H.el(null))})
u($,"hD","eV",function(){return H.a9(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"hI","f_",function(){return H.a9(H.el(void 0))})
u($,"hH","eZ",function(){return H.a9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"hK","e_",function(){return P.fM()})
u($,"hx","dD",function(){return P.u([C.ah,"1024",C.ao,"true",C.ap,"false",C.aq,"16",C.ar,"12",C.as,"16",C.n,"null",C.ae,"16",C.af,"false",C.aJ,"true",C.e,"blue",C.ag,"1",C.aK,"2",C.ai,"1.0",C.aj,"0",C.ak,"0.0",C.I,"1",C.am,"0",C.an,"0",C.i,"0.9",C.aL,"0.9"],V.q,P.i)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.P,MediaError:J.P,Navigator:J.P,NavigatorConcurrentHardware:J.P,NavigatorUserMediaError:J.P,OverconstrainedError:J.P,PositionError:J.P,SQLError:J.P,ArrayBufferView:H.bz,Float64Array:H.bw,HTMLAudioElement:W.f,HTMLBRElement:W.f,HTMLBaseElement:W.f,HTMLBodyElement:W.f,HTMLButtonElement:W.f,HTMLContentElement:W.f,HTMLDListElement:W.f,HTMLDataElement:W.f,HTMLDataListElement:W.f,HTMLDetailsElement:W.f,HTMLDialogElement:W.f,HTMLEmbedElement:W.f,HTMLFieldSetElement:W.f,HTMLHRElement:W.f,HTMLHeadElement:W.f,HTMLHeadingElement:W.f,HTMLHtmlElement:W.f,HTMLIFrameElement:W.f,HTMLImageElement:W.f,HTMLInputElement:W.f,HTMLLIElement:W.f,HTMLLabelElement:W.f,HTMLLegendElement:W.f,HTMLLinkElement:W.f,HTMLMapElement:W.f,HTMLMediaElement:W.f,HTMLMenuElement:W.f,HTMLMetaElement:W.f,HTMLMeterElement:W.f,HTMLModElement:W.f,HTMLOListElement:W.f,HTMLObjectElement:W.f,HTMLOptGroupElement:W.f,HTMLOptionElement:W.f,HTMLOutputElement:W.f,HTMLParagraphElement:W.f,HTMLParamElement:W.f,HTMLPictureElement:W.f,HTMLPreElement:W.f,HTMLProgressElement:W.f,HTMLQuoteElement:W.f,HTMLScriptElement:W.f,HTMLShadowElement:W.f,HTMLSlotElement:W.f,HTMLSourceElement:W.f,HTMLSpanElement:W.f,HTMLStyleElement:W.f,HTMLTableCaptionElement:W.f,HTMLTableCellElement:W.f,HTMLTableDataCellElement:W.f,HTMLTableHeaderCellElement:W.f,HTMLTableColElement:W.f,HTMLTableElement:W.f,HTMLTableRowElement:W.f,HTMLTableSectionElement:W.f,HTMLTemplateElement:W.f,HTMLTextAreaElement:W.f,HTMLTimeElement:W.f,HTMLTitleElement:W.f,HTMLTrackElement:W.f,HTMLUListElement:W.f,HTMLUnknownElement:W.f,HTMLVideoElement:W.f,HTMLDirectoryElement:W.f,HTMLFontElement:W.f,HTMLFrameElement:W.f,HTMLFrameSetElement:W.f,HTMLMarqueeElement:W.f,HTMLElement:W.f,HTMLAnchorElement:W.bT,HTMLAreaElement:W.bU,HTMLCanvasElement:W.av,CDATASection:W.ai,CharacterData:W.ai,Comment:W.ai,ProcessingInstruction:W.ai,Text:W.ai,CSSStyleDeclaration:W.aQ,MSStyleCSSProperties:W.aQ,CSS2Properties:W.aQ,HTMLDivElement:W.aw,XMLDocument:W.aR,Document:W.aR,DOMException:W.c8,Element:W.aS,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,WebGLContextEvent:W.c,Event:W.c,InputEvent:W.c,Window:W.aj,DOMWindow:W.aj,EventTarget:W.aj,HTMLFormElement:W.ca,HTMLDocument:W.bp,DocumentFragment:W.J,ShadowRoot:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,HTMLSelectElement:W.cz,TouchEvent:W.b1,CompositionEvent:W.H,FocusEvent:W.H,KeyboardEvent:W.H,MouseEvent:W.H,DragEvent:W.H,PointerEvent:W.H,TextEvent:W.H,WheelEvent:W.H,UIEvent:W.H,NamedNodeMap:W.bI,MozNamedAttrMap:W.bI,SVGCircleElement:P.aO,SVGEllipseElement:P.a6,SVGPathElement:P.a6,SVGPolygonElement:P.a6,SVGGeometryElement:P.a6,SVGAElement:P.V,SVGClipPathElement:P.V,SVGDefsElement:P.V,SVGForeignObjectElement:P.V,SVGGElement:P.V,SVGImageElement:P.V,SVGSwitchElement:P.V,SVGUseElement:P.V,SVGGraphicsElement:P.V,SVGLineElement:P.am,SVGPolylineElement:P.az,SVGRectElement:P.K,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPatternElement:P.j,SVGRadialGradientElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSymbolElement:P.j,SVGTitleElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGSVGElement:P.a1,SVGTextPathElement:P.b_,SVGTextContentElement:P.b_,SVGTextElement:P.a3,SVGTSpanElement:P.b0,SVGTextPositioningElement:P.b0})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Float64Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGCircleElement:true,SVGEllipseElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGImageElement:true,SVGSwitchElement:true,SVGUseElement:true,SVGGraphicsElement:false,SVGLineElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPatternElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTextElement:true,SVGTSpanElement:true,SVGTextPositioningElement:false})
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.b3.$nativeSuperclassTag="ArrayBufferView"
H.b4.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.eI,[])
else U.eI([])})})()
//# sourceMappingURL=example.dart.js.map
