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
a[c]=function(){a[c]=function(){H.hm(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.dR(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={dJ:function dJ(){},
dD:function(a,b,c){if(H.dq(a,"$iE",[b],"$aE"))return new H.cS(a,[b,c])
return new H.bd(a,[b,c])},
ca:function(){return new P.bC("No element")},
be:function be(a,b){this.a=a
this.$ti=b},
bf:function bf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bg:function bg(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b){this.a=a
this.$ti=b},
cQ:function cQ(){},
c0:function c0(a,b){this.a=a
this.$ti=b},
bd:function bd(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b){this.a=a
this.$ti=b},
cR:function cR(){},
aJ:function aJ(a,b){this.a=a
this.$ti=b},
aK:function aK(a,b){this.a=a
this.$ti=b},
c1:function c1(a,b){this.a=a
this.b=b},
E:function E(){},
aU:function aU(){},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bk:function bk(){},
bH:function bH(){},
aG:function(a){var u,t=H.hn(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
h7:function(a){return v.types[H.W(a)]},
hc:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.F(a).$ibp},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b9(a)
if(typeof u!=="string")throw H.h(H.bK(a))
return u},
aV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
fy:function(a,b){var u,t
if(typeof a!=="string")H.aF(H.bK(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.l(u,3)
t=H.w(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
fx:function(a){var u,t
if(typeof a!=="string")H.aF(H.bK(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.fb(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
by:function(a){return H.fw(a)+H.dQ(H.ap(a),0,null)},
fw:function(a){var u,t,s,r,q,p,o,n=J.F(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.au||!!n.$iad){r=C.U(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aG(t.length>1&&C.b.X(t,0)===36?C.b.b0(t,1):t)},
T:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aG(u,10))>>>0,56320|u&1023)}throw H.h(P.ak(a,0,1114111,null,null))},
i:function(a){throw H.h(H.bK(a))},
l:function(a,b){if(a==null)J.R(a)
throw H.h(H.aB(a,b))},
aB:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ae(!0,b,s,null)
u=H.W(J.R(a))
if(!(b<0)){if(typeof u!=="number")return H.i(u)
t=b>=u}else t=!0
if(t)return P.dG(b,a,s,null,u)
return P.cs(b,s)},
bK:function(a){return new P.ae(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.bx()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.eN})
u.name=""}else u.toString=H.eN
return u},
eN:function(){return J.b9(this.dartException)},
aF:function(a){throw H.h(a)},
eM:function(a){throw H.h(P.bj(a))},
a6:function(a){var u,t,s,r,q,p
a=H.eL(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.A([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ek:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
eh:function(a,b){return new H.cq(a,b==null?null:b.method)},
dK:function(a,b){var u=b==null,t=u?null:b.method
return new H.ce(a,t,u?null:b.receiver)},
X:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.dz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aG(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dK(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.eh(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.eP()
q=$.eQ()
p=$.eR()
o=$.eS()
n=$.eV()
m=$.eW()
l=$.eU()
$.eT()
k=$.eY()
j=$.eX()
i=r.D(u)
if(i!=null)return f.$1(H.dK(H.w(u),i))
else{i=q.D(u)
if(i!=null){i.method="call"
return f.$1(H.dK(H.w(u),i))}else{i=p.D(u)
if(i==null){i=o.D(u)
if(i==null){i=n.D(u)
if(i==null){i=m.D(u)
if(i==null){i=l.D(u)
if(i==null){i=o.D(u)
if(i==null){i=k.D(u)
if(i==null){i=j.D(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.eh(H.w(u),i))}}return f.$1(new H.cI(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.bB()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ae(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.bB()
return a},
aq:function(a){var u
if(a==null)return new H.bG(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.bG(a)},
h3:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
hb:function(a,b,c,d,e,f){H.j(a,"$idF")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.cW("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hb)
a.$identity=u
return u},
fi:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.cz().constructor.prototype):Object.create(new H.aH(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a3
if(typeof t!=="number")return t.n()
$.a3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.e9(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.fe(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.e9(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
fe:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.h7,a)
if(typeof a=="function")if(b)return a
else{u=c?H.e7:H.dC
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
ff:function(a,b,c,d){var u=H.dC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
e9:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fh(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ff(t,!r,u,b)
if(t===0){r=$.a3
if(typeof r!=="number")return r.n()
$.a3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.aI
return new Function(r+H.b(q==null?$.aI=H.bZ("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a3
if(typeof r!=="number")return r.n()
$.a3=r+1
o+=r
r="return function("+o+"){return this."
q=$.aI
return new Function(r+H.b(q==null?$.aI=H.bZ("self"):q)+"."+H.b(u)+"("+o+");}")()},
fg:function(a,b,c,d){var u=H.dC,t=H.e7
switch(b?-1:a){case 0:throw H.h(H.fA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fh:function(a,b){var u,t,s,r,q,p,o,n=$.aI
if(n==null)n=$.aI=H.bZ("self")
u=$.e6
if(u==null)u=$.e6=H.bZ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.fg(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.a3
if(typeof u!=="number")return u.n()
$.a3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.a3
if(typeof u!=="number")return u.n()
$.a3=u+1
return new Function(n+u+"}")()},
dR:function(a,b,c,d,e,f,g){return H.fi(a,b,c,d,!!e,!!f,g)},
dC:function(a){return a.a},
e7:function(a){return a.c},
bZ:function(a){var u,t,s,r=new H.aH("self","target","receiver","name"),q=J.dH(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
dp:function(a){if(a==null)H.fX("boolean expression must not be null")
return a},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a2(a,"String"))},
ez:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"double"))},
hI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"num"))},
hE:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a2(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a2(a,"int"))},
eJ:function(a,b){throw H.h(H.a2(a,H.aG(H.w(b).substring(2))))},
hi:function(a,b){throw H.h(H.e8(a,H.aG(H.w(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.F(a)[b])return a
H.eJ(a,b)},
eF:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.F(a)[b]
else u=!0
if(u)return a
H.hi(a,b)},
he:function(a){if(a==null)return a
if(!!J.F(a).$iv)return a
throw H.h(H.a2(a,"List<dynamic>"))},
hd:function(a,b){var u
if(a==null)return a
u=J.F(a)
if(!!u.$iv)return a
if(u[b])return a
H.eJ(a,b)},
eA:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.W(u)]
else return a.$S()}return},
aC:function(a,b){var u
if(typeof a=="function")return!0
u=H.eA(J.F(a))
if(u==null)return!1
return H.ep(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.dN)return a
$.dN=!0
try{if(H.aC(a,b))return a
u=H.bM(b)
t=H.a2(a,u)
throw H.h(t)}finally{$.dN=!1}},
dS:function(a,b){if(a!=null&&!H.dr(a,b))H.aF(H.a2(a,H.bM(b)))
return a},
a2:function(a,b){return new H.cG("TypeError: "+P.aQ(a)+": type '"+H.b(H.eu(a))+"' is not a subtype of type '"+b+"'")},
e8:function(a,b){return new H.c_("CastError: "+P.aQ(a)+": type '"+H.b(H.eu(a))+"' is not a subtype of type '"+b+"'")},
eu:function(a){var u,t=J.F(a)
if(!!t.$iaM){u=H.eA(t)
if(u!=null)return H.bM(u)
return"Closure"}return H.by(a)},
fX:function(a){throw H.h(new H.cL(a))},
hm:function(a){throw H.h(new P.c4(a))},
fA:function(a){return new H.ct(a)},
eD:function(a){return v.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
ap:function(a){if(a==null)return
return a.$ti},
hH:function(a,b,c){return H.aE(a["$a"+H.b(c)],H.ap(b))},
dT:function(a,b,c,d){var u=H.aE(a["$a"+H.b(c)],H.ap(b))
return u==null?null:u[d]},
M:function(a,b,c){var u=H.aE(a["$a"+H.b(b)],H.ap(a))
return u==null?null:u[c]},
c:function(a,b){var u=H.ap(a)
return u==null?null:u[b]},
bM:function(a){return H.an(a,null)},
an:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aG(a[0].name)+H.dQ(a,1,b)
if(typeof a=="function")return H.aG(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.W(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.b(b[t])}if('func' in a)return H.fQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.an("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
fQ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.A([],[P.e])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.l(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.l(a0,m)
p=C.b.n(p,a0[m])
l=u[q]
if(l!=null&&l!==P.m)p+=" extends "+H.an(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.an(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.an(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.an(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.h2(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.w(n[g])
i=i+h+H.an(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
dQ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.an(p,c)}return"<"+u.i(0)+">"},
aE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dq:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ap(a)
t=J.F(a)
if(t[b]==null)return!1
return H.ex(H.aE(t[d],u),null,c,null)},
z:function(a,b,c,d){if(a==null)return a
if(H.dq(a,b,c,d))return a
throw H.h(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(2))+H.dQ(c,0,null),v.mangledGlobalNames)))},
ex:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.a_(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.a_(a[t],b,c[t],d))return!1
return!0},
hF:function(a,b,c){return a.apply(b,H.aE(J.F(b)["$a"+H.b(c)],H.ap(b)))},
eG:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="m"||a.name==="t"||a===-1||a===-2||H.eG(u)}return!1},
dr:function(a,b){var u,t
if(a==null)return b==null||b.name==="m"||b.name==="t"||b===-1||b===-2||H.eG(b)
if(b==null||b===-1||b.name==="m"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dr(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aC(a,b)}u=J.F(a).constructor
t=H.ap(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.a_(u,null,b,null)},
Q:function(a,b){if(a!=null&&!H.dr(a,b))throw H.h(H.e8(a,H.bM(b)))
return a},
n:function(a,b){if(a!=null&&!H.dr(a,b))throw H.h(H.a2(a,H.bM(b)))
return a},
a_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="m"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="m"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a_(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="t")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.a_("type" in a?a.type:l,b,s,d)
else if(H.a_(a,b,s,d))return!0
else{if(!('$i'+"aR" in t.prototype))return!1
r=t.prototype["$a"+"aR"]
q=H.aE(r,u?a.slice(1):l)
return H.a_(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.ep(a,b,c,d)
if('func' in a)return c.name==="dF"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ex(H.aE(m,u),b,p,d)},
ep:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.a_(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.a_(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.a_(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.a_(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.hh(h,b,g,d)},
hh:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.a_(c[s],d,a[s],b))return!1}return!0},
hG:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hf:function(a){var u,t,s,r,q=H.w($.eE.$1(a)),p=$.ds[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.w($.ew.$2(a,q))
if(q!=null){p=$.ds[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dy(u)
$.ds[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.dx[q]=u
return u}if(s==="-"){r=H.dy(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.eI(a,u)
if(s==="*")throw H.h(P.el(q))
if(v.leafTags[q]===true){r=H.dy(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.eI(a,u)},
eI:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.dV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dy:function(a){return J.dV(a,!1,null,!!a.$ibp)},
hg:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dy(u)
else return J.dV(u,c,null,null)},
h9:function(){if(!0===$.dU)return
$.dU=!0
H.ha()},
ha:function(){var u,t,s,r,q,p,o,n
$.ds=Object.create(null)
$.dx=Object.create(null)
H.h8()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.eK.$1(q)
if(p!=null){o=H.hg(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
h8:function(){var u,t,s,r,q,p,o=C.an()
o=H.az(C.ao,H.az(C.ap,H.az(C.V,H.az(C.V,H.az(C.aq,H.az(C.ar,H.az(C.as(C.U),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.eE=new H.du(r)
$.ew=new H.dv(q)
$.eK=new H.dw(p)},
az:function(a,b){return a(b)||b},
dW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
h1:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
eL:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hk:function(a,b,c){var u=H.hl(a,b,c)
return u},
hl:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.eL(b),'g'),H.h1(c))},
cE:function cE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cq:function cq(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.a=a},
dz:function dz(a){this.a=a},
bG:function bG(a){this.a=a
this.b=null},
aM:function aM(){},
cD:function cD(){},
cz:function cz(){},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cG:function cG(a){this.a=a},
c_:function c_(a){this.a=a},
ct:function ct(a){this.a=a},
cL:function cL(a){this.a=a},
ab:function ab(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cd:function cd(a){this.a=a},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function cl(a,b){this.a=a
this.$ti=b},
cm:function cm(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
eo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.aB(b,a))},
bw:function bw(){},
bu:function bu(){},
bv:function bv(){},
bt:function bt(){},
b1:function b1(){},
b2:function b2(){},
h2:function(a){return J.fn(a?Object.keys(a):[],null)},
hn:function(a){return v.mangledGlobalNames[a]}},J={
dV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bL:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.dU==null){H.h9()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.el("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.dX()]
if(r!=null)return r
r=H.hf(a)
if(r!=null)return r
if(typeof a=="function")return C.av
u=Object.getPrototypeOf(a)
if(u==null)return C.a3
if(u===Object.prototype)return C.a3
if(typeof s=="function"){Object.defineProperty(s,$.dX(),{value:C.J,enumerable:false,writable:true,configurable:true})
return C.J}return C.J},
fn:function(a,b){return J.dH(H.A(a,[b]))},
dH:function(a){a.fixed$length=Array
return a},
eb:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fo:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.X(a,b)
if(t!==32&&t!==13&&!J.eb(t))break;++b}return b},
fp:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.aK(a,u)
if(t!==32&&t!==13&&!J.eb(t))break}return b},
F:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aT.prototype
return J.bo.prototype}if(typeof a=="string")return J.ai.prototype
if(a==null)return J.cc.prototype
if(typeof a=="boolean")return J.cb.prototype
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof P.m)return a
return J.bL(a)},
h4:function(a){if(typeof a=="number")return J.ah.prototype
if(typeof a=="string")return J.ai.prototype
if(a==null)return a
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof P.m)return a
return J.bL(a)},
ao:function(a){if(typeof a=="string")return J.ai.prototype
if(a==null)return a
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof P.m)return a
return J.bL(a)},
aD:function(a){if(a==null)return a
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof P.m)return a
return J.bL(a)},
h5:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aT.prototype
return J.ah.prototype}if(a==null)return a
if(!(a instanceof P.m))return J.ad.prototype
return a},
eB:function(a){if(typeof a=="number")return J.ah.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.ad.prototype
return a},
eC:function(a){if(typeof a=="string")return J.ai.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.ad.prototype
return a},
dt:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof P.m)return a
return J.bL(a)},
h6:function(a){if(a==null)return a
if(!(a instanceof P.m))return J.ad.prototype
return a},
eZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.h4(a).n(a,b)},
b8:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.F(a).N(a,b)},
B:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ao(a).h(a,b)},
dZ:function(a,b,c){return J.aD(a).k(a,b,c)},
f_:function(a,b,c,d){return J.dt(a).b8(a,b,c,d)},
f0:function(a,b,c,d){return J.dt(a).bi(a,b,c,d)},
f1:function(a,b,c){return J.dt(a).bj(a,b,c)},
bN:function(a,b,c){return J.dt(a).bk(a,b,c)},
f2:function(a,b){return J.h6(a).w(a,b)},
e_:function(a,b){return J.aD(a).H(a,b)},
f3:function(a,b,c){return J.aD(a).J(a,b,c)},
f4:function(a,b){return J.ao(a).S(a,b)},
f5:function(a,b){return J.aD(a).F(a,b)},
f6:function(a){return J.aD(a).ga2(a)},
e0:function(a){return J.F(a).gq(a)},
e1:function(a){return J.ao(a).gt(a)},
f7:function(a){return J.ao(a).gI(a)},
bO:function(a){return J.aD(a).gu(a)},
f8:function(a){return J.aD(a).ga5(a)},
R:function(a){return J.ao(a).gj(a)},
f9:function(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.h5(a).gat(a)},
ar:function(a){return J.eB(a).U(a)},
b9:function(a){return J.F(a).i(a)},
fa:function(a,b){return J.eB(a).bZ(a,b)},
fb:function(a){return J.eC(a).aU(a)},
O:function O(){},
cb:function cb(){},
cc:function cc(){},
bq:function bq(){},
cr:function cr(){},
ad:function ad(){},
aa:function aa(){},
a9:function a9(a){this.$ti=a},
dI:function dI(a){this.$ti=a},
ba:function ba(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ah:function ah(){},
aT:function aT(){},
bo:function bo(){},
ai:function ai(){}},P={
fI:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.fY()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b6(new P.cN(s),1)).observe(u,{childList:true})
return new P.cM(s,u,t)}else if(self.setImmediate!=null)return P.fZ()
return P.h_()},
fJ:function(a){self.scheduleImmediate(H.b6(new P.cO(H.k(a,{func:1,ret:-1})),0))},
fK:function(a){self.setImmediate(H.b6(new P.cP(H.k(a,{func:1,ret:-1})),0))},
fL:function(a){H.k(a,{func:1,ret:-1})
P.fO(0,a)},
fO:function(a,b){var u=new P.di()
u.b7(a,b)
return u},
fM:function(a,b){var u,t,s
b.a=1
try{a.aT(new P.cY(b),new P.cZ(b),null)}catch(s){u=H.X(s)
t=H.aq(s)
P.hj(new P.d_(b,u,t))}},
en:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iU")
if(u>=4){t=b.af()
b.a=a.a
b.c=a.c
P.b0(b,t)}else{t=H.j(b.c,"$ia7")
b.a=2
b.c=a
a.aF(t)}},
b0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iK")
P.b5(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b0(h.a,b)}g=h.a
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
if(m){H.j(q,"$iK")
P.b5(i,i,g.b,q.a,q.b)
return}l=$.x
if(l!==n)$.x=n
else l=i
g=b.c
if((g&15)===8)new P.d3(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.d2(u,b,q).$0()}else if((g&2)!==0)new P.d1(h,u,b).$0()
if(l!=null)$.x=l
g=u.b
if(!!J.F(g).$iaR){if(g.a>=4){k=H.j(o.c,"$ia7")
o.c=null
b=o.a0(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.en(g,o)
return}}j=b.b
k=H.j(j.c,"$ia7")
j.c=null
b=j.a0(k)
g=u.a
p=u.b
if(!g){H.n(p,H.c(j,0))
j.a=4
j.c=p}else{H.j(p,"$iK")
j.a=8
j.c=p}h.a=j
g=j}},
fU:function(a,b){if(H.aC(a,{func:1,args:[P.m,P.y]}))return b.aQ(a,null,P.m,P.y)
if(H.aC(a,{func:1,args:[P.m]}))return H.k(a,{func:1,ret:null,args:[P.m]})
throw H.h(P.e2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
fS:function(){var u,t
for(;u=$.ay,u!=null;){$.b4=null
t=u.b
$.ay=t
if(t==null)$.b3=null
u.a.$0()}},
fW:function(){$.dO=!0
try{P.fS()}finally{$.b4=null
$.dO=!1
if($.ay!=null)$.dY().$1(P.ey())}},
et:function(a){var u=new P.bD(a)
if($.ay==null){$.ay=$.b3=u
if(!$.dO)$.dY().$1(P.ey())}else $.b3=$.b3.b=u},
fV:function(a){var u,t,s=$.ay
if(s==null){P.et(a)
$.b4=$.b3
return}u=new P.bD(a)
t=$.b4
if(t==null){u.b=s
$.ay=$.b4=u}else{u.b=t.b
$.b4=t.b=u
if(u.b==null)$.b3=u}},
hj:function(a){var u=null,t=$.x
if(C.c===t){P.dn(u,u,C.c,a)
return}P.dn(u,u,t,H.k(t.aJ(a),{func:1,ret:-1}))},
b5:function(a,b,c,d,e){var u={}
u.a=d
P.fV(new P.dm(u,e))},
eq:function(a,b,c,d,e){var u,t=$.x
if(t===c)return d.$0()
$.x=c
u=t
try{t=d.$0()
return t}finally{$.x=u}},
es:function(a,b,c,d,e,f,g){var u,t=$.x
if(t===c)return d.$1(e)
$.x=c
u=t
try{t=d.$1(e)
return t}finally{$.x=u}},
er:function(a,b,c,d,e,f,g,h,i){var u,t=$.x
if(t===c)return d.$2(e,f)
$.x=c
u=t
try{t=d.$2(e,f)
return t}finally{$.x=u}},
dn:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.aJ(d):c.bx(d,-1)
P.et(d)},
cN:function cN(a){this.a=a},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
di:function di(){},
dj:function dj(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c,d,e){var _=this
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
cX:function cX(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a){this.a=a},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a){this.a=a
this.b=null},
al:function al(){},
cB:function cB(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
aW:function aW(){},
a5:function a5(){},
K:function K(a,b){this.a=a
this.b=b},
dk:function dk(){},
dm:function dm(a,b){this.a=a
this.b=b},
de:function de(){},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b){this.a=a
this.b=b},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function(a,b){return new H.ab([a,b])},
u:function(a,b,c){return H.z(H.h3(a,new H.ab([b,c])),"$ief",[b,c],"$aef")},
fr:function(a,b){return new H.ab([a,b])},
fm:function(a,b,c){var u,t
if(P.dP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.A([],[P.e])
C.a.l($.P,a)
try{P.fR(a,u)}finally{if(0>=$.P.length)return H.l($.P,-1)
$.P.pop()}t=P.ej(b,H.hd(u,"$iI"),", ")+c
return t.charCodeAt(0)==0?t:t},
ea:function(a,b,c){var u,t
if(P.dP(a))return b+"..."+c
u=new P.aw(b)
C.a.l($.P,a)
try{t=u
t.a=P.ej(t.a,a,", ")}finally{if(0>=$.P.length)return H.l($.P,-1)
$.P.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dP:function(a){var u,t
for(u=$.P.length,t=0;t<u;++t)if(a===$.P[t])return!0
return!1},
fR:function(a,b){var u,t,s,r,q,p,o,n=a.gu(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.m())return
u=H.b(n.gp())
C.a.l(b,u)
m+=u.length+2;++l}if(!n.m()){if(l<=5)return
if(0>=b.length)return H.l(b,-1)
t=b.pop()
if(0>=b.length)return H.l(b,-1)
s=b.pop()}else{r=n.gp();++l
if(!n.m()){if(l<=4){C.a.l(b,H.b(r))
return}t=H.b(r)
if(0>=b.length)return H.l(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gp();++l
for(;n.m();r=q,q=p){p=n.gp();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.l(b,-1)
m-=b.pop().length+2;--l}C.a.l(b,"...")
return}}s=H.b(r)
t=H.b(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.l(b,o)
C.a.l(b,s)
C.a.l(b,t)},
ac:function(a,b,c){var u=P.fq(b,c)
a.A(0,new P.cn(u,b,c))
return u},
eg:function(a){var u,t={}
if(P.dP(a))return"{...}"
u=new P.aw("")
try{C.a.l($.P,a)
u.a+="{"
t.a=!0
a.A(0,new P.cp(t,u))
u.a+="}"}finally{if(0>=$.P.length)return H.l($.P,-1)
$.P.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(){},
co:function co(){},
cp:function cp(a,b){this.a=a
this.b=b},
Y:function Y(){},
fT:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.h(H.bK(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.X(s)
r=P.dE(String(t),null)
throw H.h(r)}r=P.dl(u)
return r},
dl:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.d7(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.dl(a[u])
return a},
ec:function(a,b,c){return new P.br(a,b)},
fP:function(a){return a.ca()},
fN:function(a,b,c){var u,t=new P.aw(""),s=new P.da(t,[],P.h0())
s.a8(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
d7:function d7(a,b){this.a=a
this.b=b
this.c=null},
d9:function d9(a){this.a=a},
d8:function d8(a){this.a=a},
bh:function bh(){},
a8:function a8(){},
br:function br(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.a=a
this.b=b},
cf:function cf(){},
ci:function ci(a){this.b=a},
ch:function ch(a){this.a=a},
db:function db(){},
dc:function dc(a,b){this.a=a
this.b=b},
da:function da(a,b,c){this.c=a
this.a=b
this.b=c},
q:function(a){var u=H.fy(a,null)
if(u!=null)return u
throw H.h(P.dE(a,null))},
V:function(a){var u=H.fx(a)
if(u!=null)return u
throw H.h(P.dE("Invalid double",a))},
fl:function(a){if(a instanceof H.aM)return a.i(0)
return"Instance of '"+H.b(H.by(a))+"'"},
fs:function(a,b,c){var u,t=[c],s=H.A([],t)
for(u=J.bO(a);u.m();)C.a.l(s,H.n(u.gp(),c))
if(b)return s
return H.z(J.dH(s),"$iv",t,"$av")},
ej:function(a,b,c){var u=J.bO(b)
if(!u.m())return a
if(c.length===0){do a+=H.b(u.gp())
while(u.m())}else{a+=H.b(u.gp())
for(;u.m();)a=a+c+H.b(u.gp())}return a},
aQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fl(a)},
e2:function(a,b,c){return new P.ae(!0,a,b,c)},
cs:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
fz:function(a,b){if(typeof a!=="number")return a.V()
if(a<0)throw H.h(P.ak(a,0,null,b,null))},
dG:function(a,b,c,d,e){var u=H.W(e==null?J.R(b):e)
return new P.c9(u,!0,a,c,"Index out of range")},
am:function(a){return new P.cJ(a)},
el:function(a){return new P.cH(a)},
fF:function(a){return new P.bC(a)},
bj:function(a){return new P.c2(a)},
dE:function(a,b){return new P.c8(a,b)},
ft:function(a,b,c,d,e){return new H.aK(a,[b,c,d,e])},
aA:function aA(){},
H:function H(){},
at:function at(){},
bR:function bR(){},
bx:function bx(){},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
c9:function c9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cJ:function cJ(a){this.a=a},
cH:function cH(a){this.a=a},
bC:function bC(a){this.a=a},
c2:function c2(a){this.a=a},
bB:function bB(){},
c4:function c4(a){this.a=a},
cW:function cW(a){this.a=a},
c8:function c8(a,b){this.a=a
this.b=b},
N:function N(){},
I:function I(){},
v:function v(){},
r:function r(){},
t:function t(){},
b7:function b7(){},
m:function m(){},
y:function y(){},
e:function e(){},
aw:function aw(a){this.a=a},
d6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bA:function(a,b,c,d,e){var u=H.n(c<0?-c*0:c,e)
return new P.L(a,b,u,H.n(d<0?-d*0:d,e),[e])},
d5:function d5(){},
dd:function dd(){},
L:function L(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aX:function(){var u=H.j(C.e.E(document,"http://www.w3.org/2000/svg","svg"),"$if")
u.setAttribute("version","1.1")
return H.j(u,"$iax")},
aL:function aL(){},
a4:function a4(){},
S:function S(){},
aj:function aj(){},
av:function av(){},
Z:function Z(){},
f:function f(){},
ax:function ax(){},
aY:function aY(){},
a1:function a1(){},
aZ:function aZ(){},
bl:function bl(){}},W={
dM:function(a,b,c,d,e){var u=c==null?null:W.ev(new W.cV(c),W.a)
u=new W.cU(a,b,u,!1,[e])
u.aH()
return u},
ev:function(a,b){var u=$.x
if(u===C.c)return a
return u.by(a,b)},
d:function d(){},
bP:function bP(){},
bQ:function bQ(){},
af:function af(){},
aN:function aN(){},
c3:function c3(){},
as:function as(){},
aO:function aO(){},
c5:function c5(){},
aP:function aP(){},
a:function a(){},
ag:function ag(){},
c7:function c7(){},
bm:function bm(){},
J:function J(){},
cv:function cv(){},
b_:function b_(){},
G:function G(){},
bF:function bF(){},
cT:function cT(){},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cU:function cU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cV:function cV(a){this.a=a},
aS:function aS(){},
c6:function c6(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bE:function bE(){},
bI:function bI(){},
bJ:function bJ(){}},F={
fj:function(a1,a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a5==null)a5=1024
if(a5<=0)a5=a1.length
if(C.d.aZ(a5,2)!==0)++a5
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
if(m<0||m>=s)return H.l(a1,m)
k=a1[m]
if(l<0||l>=n)return H.l(p,l)
p[l]=k}}s=p.length
if(s<=2*a5){o=new Array(s)
o.fixed$length=Array
j=H.A(o,[P.N])
for(m=0;m<s;++m)C.a.k(j,m,u+m)
return new F.bi(p,j)}o=a5*2
j=F.fk(p,o,u)
i=new Float64Array(o)
for(h=0,m=0;o=j.length,m<o;m=f){g=j[m]-u
f=m+2
n=o-1
l=f>n
if(l&&m+1>n)e=C.a.ga5(j)
else if(l){n=m+1
if(n>=o)return H.l(j,n)
e=j[n]-u}else e=j[f]-u
d=new Float64Array(e-g)
for(o=d.length,c=g;c<e;++c){n=c-g
if(c<0||c>=s)return H.l(p,c)
l=p[c]
if(n<0||n>=o)return H.l(d,n)
d[n]=l}b=E.fc(d)
o=b.length
if(0>=o)return H.l(b,0)
C.m.k(i,h,b[0]);++h
if(1>=b.length)return H.l(b,1)
C.m.k(i,h,b[1]);++h}for(s=o-1,a=1,m=0;m<s;m=f){f=m+1
a0=j[f]-j[m]
if(a0>a)a=a0}return new F.bi(i,j)},
fk:function(a,b,c){var u,t,s,r=H.A([],[P.N]),q=a.length,p=q/b
for(u=0;u<b;++u){t=C.l.U(u*p)
C.a.l(r,t+c)
if(t>=q)break}s=r.length
q=q-1+c
if(s<b)C.a.l(r,q)
else C.a.k(r,s-1,q)
return r},
bi:function bi(a,b){this.a=a
this.d=b}},M={
fd:function(a,b,c,d,e,f,g,h,i,j,k){var u=new M.bb(e,i)
u.au(null,a,b,c,d,null,null,!1,e,f,g,h,i,new M.bS(j).$0(),k,{})
return u},
e5:function(a,b){var u,t,s
if(Math.abs(a)<0.000001)return 0.000001
u=C.k.aj(Math.log(a)/2.302585092994046)
t=a/Math.pow(10,u)
if(b)if(t<1.5)s=1
else if(t<3)s=2
else s=t<7?5:10
else if(t<=1)s=1
else if(t<=2)s=2
else s=t<=5?5:10
return s*Math.pow(10,u)},
bW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
if(a>b){u=a
t=b}else{u=b
t=a}s=M.e5(u-t,!1)
if(typeof c!=="number")return c.v()
r=M.e5(s/(c-1),!0)
q=C.k.aj(t/r)*r
p=C.k.bA(u/r)
o=Math.max(-C.k.aj(Math.log(r)/2.302585092994046),0)
o=o
n=H.A([],[P.e])
for(p=p*r+0.5*r,m=q;m<p;m+=r)C.a.l(n,C.l.c_(m,o))
return n},
bb:function bb(a,b){var _=this
_.e=_.d=_.c=_.b=_.a=null
_.f=!1
_.r=a
_.x=b},
bS:function bS(a){this.a=a},
bX:function bX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bY:function bY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bT:function bT(a,b){this.a=a
this.b=b},
bU:function bU(a){this.a=a},
bV:function bV(a){this.a=a},
p:function p(a){this.b=a}},S={
em:function(a,b,c,d,e){var u=new S.cK(c,d,a,b)
u.sbw(0,P.ac($.fH,M.p,P.e))
if(e!=null)u.b.w(0,e)
u.bz()
return u},
cK:function cK(a,b,c,d){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=c
_.f=d}},D={cj:function cj(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.e=null
_.z=d
_.ch=_.Q=null
_.cx=e
_.db=_.cy=null},C:function C(a){this.b=a},
ei:function(a,b,c){var u
if(c!=null&&b!=null&&Math.abs(b)>1e-8){if(typeof c!=="number")return H.i(c)
if(typeof b!=="number")return H.i(b)
u=a*c/b}else u=a
return u}},V={
fv:function(a,b,c,d,e,f,g,h,i){var u=new V.au(H.A([],[P.a4]),d,e,b,c,a,f)
u.b3(a,b,c,d,e,f,g,h,i)
return u},
au:function au(a,b,c,d,e,f,g){var _=this
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
_.K=_.bI=_.y2=_.y1=_.x2=null
_.c9=g
_.ai=_.a1=_.B=_.L=_.aM=_.aL=null},
o:function o(a){this.b=a}},X={
fB:function(a,b,c,d,e,f,g){var u=new X.cw(b,a,c,f,d,e,H.A(["blue","red","magenta","green","orange","cyan","lightgreen","crimson","darkred","darkgreen"],[P.e]),g)
u.b4(a,b,c,d,e,f,g)
return u},
fC:function(a,b){var u,t,s,r,q,p,o,n=null,m="legend",l=D.C,k=P.e,j=P.ac($.ee,l,k)
j.w(0,a)
if(j.h(0,C.y)==null)return
if(j.h(0,C.D)!=null){u=H.z(J.e_(C.x.ah(0,j.h(0,C.D)),k),"$iv",[k],"$av")
t=J.R(u.a)}else{u=n
t=0}s=new H.ab([k,[P.r,D.C,P.e]])
r=P.aX()
q=new D.cj(s,new H.ab([k,P.a1]),new H.ab([k,P.Z]),r,t)
q.cy=t
s.k(0,m,P.ac($.ee,l,k))
l=j.gI(j)
if(l)J.f2(s.h(0,m),j)
r.setAttribute("x",H.w(J.B(s.h(0,m),C.F)))
r.setAttribute("y",H.w(J.B(s.h(0,m),C.G)))
q.r=P.q(J.B(s.h(0,m),C.a0))
l=H.w(J.B(s.h(0,m),C.y))
q.db=l
if(l!=null&&l.length!==0)q.aN("TOP_TITLE_ID",l,n)
p=b!=null?P.fs(C.a.b_(b,0,t),!0,k):n
for(o=t-1,l=H.c(u,1),k=p==null;o>=0;--o){s=o+1
if(k)q.as(""+s,H.Q(J.B(u.a,o),l),n)
else{s=""+s
r=H.Q(J.B(u.a,o),l)
if(o>=p.length)return H.l(p,o)
q.as(s,r,p[o])}}return q},
cw:function cw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null
_.ch=b
_.cy=_.cx=null
_.db=c
_.dx=d
_.dy=e
_.fr=f
_.fx=g
_.fy=h}},B={
fG:function(a){if(a==="true")return!0
return!1},
ed:function(a){var u=P.e
return H.z(J.f3(C.x.ah(0,a),u,u),"$ir",[u,u],"$ar")},
D:function(a,b){b.A(0,new B.cu(a))},
cu:function cu(a){this.a=a}},G={
fD:function(a,b,c,d,e){var u=new G.cx()
u.b5(a,b,c,d,e)
return u},
cx:function cx(){this.b=this.a=null}},R={
fE:function(a,b,c,d,e,f){var u=new R.cy()
u.b6(a,b,c,d,e,f)
return u},
cy:function cy(){this.a=null}},E={
e3:function(a){var u,t,s,r,q,p=-17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q>t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
e4:function(a){var u,t,s,r,q,p=17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q<t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
fc:function(a){var u,t,s,r,q,p,o
for(u=a.length,t=-1,s=-17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q>s){s=q
t=r}}for(p=-1,o=17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q<o){o=q
p=r}}u=[P.H]
if(p<=t)return H.A([o,s],u)
else return H.A([s,o],u)}},U={
eH:function(){var u,t,s,r,q,p=G.fD(1000,100,0,8,0),o=R.fE(2000,20,0,8,0,0),n=document,m=H.eF(n.querySelector("#app_div"),"$ias"),l=H.eF(n.querySelector("#plot_div"),"$ias")
n=l.style
u=H.b(m.clientWidth)+"px"
n.width=u
u=H.b(m.clientHeight)+"px"
n.height=u
n=V.o
u=P.e
t=H.A([P.u([C.i,"0.8"],n,u),P.u([C.i,"0.8"],n,u)],[[P.r,V.o,P.e]])
n=M.p
s=P.u([C.o,"0",C.p,"8",C.w,"Number of periods (2*\u03c0)"],n,u)
r=P.u([C.w,"Function value ('intensity')"],n,u)
q=P.u([C.y,"Displays some arrays computed by 'smart_arrays_sample_data'",C.D,C.x.bG(H.A(["100 * sin(x) / x"," 20 * sin(x)"],[u])),C.F,"45",C.G,"15"],D.C,u)
X.fB(H.A([p.a,o.a],[P.bl]),l,t,s,r,q,null)}}
var w=[C,H,J,P,W,F,M,S,D,V,X,B,G,R,E,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dJ.prototype={}
J.O.prototype={
N:function(a,b){return a===b},
gq:function(a){return H.aV(a)},
i:function(a){return"Instance of '"+H.b(H.by(a))+"'"}}
J.cb.prototype={
i:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$iaA:1}
J.cc.prototype={
N:function(a,b){return null==b},
i:function(a){return"null"},
gq:function(a){return 0}}
J.bq.prototype={
gq:function(a){return 0},
i:function(a){return String(a)}}
J.cr.prototype={}
J.ad.prototype={}
J.aa.prototype={
i:function(a){var u=a[$.eO()]
if(u==null)return this.b2(a)
return"JavaScript function for "+H.b(J.b9(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$idF:1}
J.a9.prototype={
H:function(a,b){return new H.aJ(a,[H.c(a,0),b])},
l:function(a,b){H.n(b,H.c(a,0))
if(!!a.fixed$length)H.aF(P.am("add"))
a.push(b)},
F:function(a,b){H.W(b)
if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
b_:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.ak(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.ak(c,b,a.length,"end",null))
if(b===c)return H.A([],[H.c(a,0)])
return H.A(a.slice(b,c),[H.c(a,0)])},
ga2:function(a){if(a.length>0)return a[0]
throw H.h(H.ca())},
ga5:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.ca())},
gt:function(a){return a.length===0},
gI:function(a){return a.length!==0},
i:function(a){return P.ea(a,"[","]")},
gu:function(a){return new J.ba(a,a.length,[H.c(a,0)])},
gq:function(a){return H.aV(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.aF(P.am("set length"))
if(b<0)throw H.h(P.ak(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.h(H.aB(a,b))
return a[b]},
k:function(a,b,c){H.n(c,H.c(a,0))
if(!!a.immutable$list)H.aF(P.am("indexed set"))
if(b>=a.length||b<0)throw H.h(H.aB(a,b))
a[b]=c},
$iE:1,
$iI:1,
$iv:1}
J.dI.prototype={}
J.ba.prototype={
gp:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.eM(s))
u=t.c
if(u>=r){t.saA(null)
return!1}t.saA(s[u]);++t.c
return!0},
saA:function(a){this.d=H.n(a,H.c(this,0))},
$ibn:1}
J.ah.prototype={
gaO:function(a){return a===0?1/a<0:a<0},
gat:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
bA:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.h(P.am(""+a+".ceil()"))},
aj:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.am(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.am(""+a+".round()"))},
c_:function(a,b){var u
if(b<0||b>20)throw H.h(P.ak(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaO(a))return"-"+u
return u},
bZ:function(a,b){var u
if(b>20)throw H.h(P.ak(b,0,20,"fractionDigits",null))
u=a.toExponential(b)
if(a===0&&this.gaO(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aZ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
R:function(a,b){return(a|0)===a?a/b|0:this.bm(a,b)},
bm:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.am("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
aG:function(a,b){var u
if(a>0)u=this.bl(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
bl:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ib7:1}
J.aT.prototype={
gat:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
$iN:1}
J.bo.prototype={}
J.ai.prototype={
aK:function(a,b){if(b<0)throw H.h(H.aB(a,b))
if(b>=a.length)H.aF(H.aB(a,b))
return a.charCodeAt(b)},
X:function(a,b){if(b>=a.length)throw H.h(H.aB(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.w(b)
if(typeof b!=="string")throw H.h(P.e2(b,null,null))
return a+b},
O:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cs(b,null))
if(b>c)throw H.h(P.cs(b,null))
if(c>a.length)throw H.h(P.cs(c,null))
return a.substring(b,c)},
b0:function(a,b){return this.O(a,b,null)},
aU:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.X(r,0)===133){u=J.fo(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aK(r,t)===133?J.fp(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
bB:function(a,b,c){if(c>a.length)throw H.h(P.ak(c,0,a.length,null,null))
return H.dW(a,b,c)},
S:function(a,b){return this.bB(a,b,0)},
i:function(a){return a},
gq:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ifu:1,
$ie:1}
H.be.prototype={
a6:function(a,b,c,d){var u,t
H.k(a,{func:1,ret:-1,args:[H.c(this,1)]})
u=this.a.aP(null,!0,H.k(c,{func:1,ret:-1}))
t=new H.bf(u,$.x,this.$ti)
u.ak(t.gbf())
t.ak(a)
t.al(0,d)
return t},
aP:function(a,b,c){return this.a6(a,b,c,null)},
H:function(a,b){return new H.be(this.a,[H.c(this,0),b])},
$aal:function(a,b){return[b]}}
H.bf.prototype={
ak:function(a){var u=H.c(this,1)
H.k(a,{func:1,ret:-1,args:[u]})
this.sbd(a==null?null:H.k(a,{func:1,ret:null,args:[u]}))},
al:function(a,b){var u,t=this
t.a.al(0,b)
if(b==null)t.d=null
else{u=P.m
if(H.aC(b,{func:1,args:[P.t,P.t]}))t.d=t.b.aQ(H.k(b,{func:1,args:[P.m,P.y]}),null,u,P.y)
else t.d=H.k(H.k(b,{func:1,args:[P.m]}),{func:1,ret:null,args:[u]})}},
bg:function(a){var u,t,s,r,q,p,o,n,m=this,l=null
H.n(a,H.c(m,0))
r=m.c
if(r==null)return
u=null
try{u=H.Q(a,H.c(m,1))}catch(q){t=H.X(q)
s=H.aq(q)
r=m.d
if(r==null)P.b5(l,l,m.b,t,H.j(s,"$iy"))
else{p=H.aC(r,{func:1,args:[P.t,P.t]})
o=m.b
n=m.d
if(p)o.bW(H.k(n,{func:1,ret:-1,args:[,P.y]}),t,s,l,P.y)
else o.an(H.k(n,{func:1,ret:-1,args:[,]}),t,l)}return}m.b.an(r,u,H.c(m,1))},
sbd:function(a){this.c=H.k(a,{func:1,ret:-1,args:[H.c(this,1)]})},
$iaW:1,
$aaW:function(a,b){return[b]}}
H.bg.prototype={
J:function(a,b,c){return new H.bg(this.a,[H.c(this,0),H.c(this,1),b,c])},
$acA:function(a,b,c,d){return[c,d]},
$aa5:function(a,b,c,d){return[c,d]}}
H.bc.prototype={
J:function(a,b,c){return new H.bc(this.a,[H.c(this,0),H.c(this,1),b,c])},
$acA:function(a,b,c,d){return[c,d]},
$aa5:function(a,b,c,d){return[c,d]},
$aa8:function(a,b,c,d){return[c,d]}}
H.cQ.prototype={
gu:function(a){return new H.c0(J.bO(this.gG()),this.$ti)},
gj:function(a){return J.R(this.gG())},
gt:function(a){return J.e1(this.gG())},
gI:function(a){return J.f7(this.gG())},
F:function(a,b){H.W(b)
return H.Q(J.f5(this.gG(),b),H.c(this,1))},
i:function(a){return J.b9(this.gG())},
$aI:function(a,b){return[b]}}
H.c0.prototype={
m:function(){return this.a.m()},
gp:function(){return H.Q(this.a.gp(),H.c(this,1))},
$ibn:1,
$abn:function(a,b){return[b]}}
H.bd.prototype={
H:function(a,b){return H.dD(this.a,H.c(this,0),b)},
gG:function(){return this.a}}
H.cS.prototype={$iE:1,
$aE:function(a,b){return[b]}}
H.cR.prototype={
h:function(a,b){return H.Q(J.B(this.a,b),H.c(this,1))},
$iE:1,
$aE:function(a,b){return[b]},
$aa0:function(a,b){return[b]},
$iv:1,
$av:function(a,b){return[b]}}
H.aJ.prototype={
H:function(a,b){return new H.aJ(this.a,[H.c(this,0),b])},
gG:function(){return this.a}}
H.aK.prototype={
J:function(a,b,c){return new H.aK(this.a,[H.c(this,0),H.c(this,1),b,c])},
h:function(a,b){return H.Q(this.a.h(0,b),H.c(this,3))},
k:function(a,b,c){var u=this
H.n(b,H.c(u,2))
H.n(c,H.c(u,3))
u.a.k(0,H.Q(b,H.c(u,0)),H.Q(c,H.c(u,1)))},
w:function(a,b){var u=this,t=H.c(u,2),s=H.c(u,3)
u.a.w(0,new H.aK(H.z(b,"$ir",[t,s],"$ar"),[t,s,H.c(u,0),H.c(u,1)]))},
A:function(a,b){var u=this
u.a.A(0,new H.c1(u,H.k(b,{func:1,ret:-1,args:[H.c(u,2),H.c(u,3)]})))},
gC:function(){return H.dD(this.a.gC(),H.c(this,0),H.c(this,2))},
gj:function(a){var u=this.a
return u.gj(u)},
gt:function(a){var u=this.a
return u.gt(u)},
$aY:function(a,b,c,d){return[c,d]},
$ar:function(a,b,c,d){return[c,d]}}
H.c1.prototype={
$2:function(a,b){var u=this.a
H.n(a,H.c(u,0))
H.n(b,H.c(u,1))
this.b.$2(H.Q(a,H.c(u,2)),H.Q(b,H.c(u,3)))},
$S:function(){var u=this.a
return{func:1,ret:P.t,args:[H.c(u,0),H.c(u,1)]}}}
H.E.prototype={}
H.aU.prototype={
gu:function(a){var u=this
return new H.bs(u,u.gj(u),[H.M(u,"aU",0)])},
gt:function(a){return this.gj(this)===0}}
H.bs.prototype={
gp:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=J.ao(s),q=r.gj(s)
if(t.b!==q)throw H.h(P.bj(s))
u=t.c
if(u>=q){t.sav(null)
return!1}t.sav(r.F(s,u));++t.c
return!0},
sav:function(a){this.d=H.n(a,H.c(this,0))},
$ibn:1}
H.bk.prototype={}
H.bH.prototype={}
H.cE.prototype={
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
H.cq.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ce.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.cI.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.dz.prototype={
$1:function(a){if(!!J.F(a).$iat)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.bG.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iy:1}
H.aM.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$idF:1,
gc8:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cD.prototype={}
H.cz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aG(u)+"'"}}
H.aH.prototype={
N:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.aH))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gq:function(a){var u,t=this.c
if(t==null)u=H.aV(this.a)
else u=typeof t!=="object"?J.e0(t):H.aV(t)
return(u^H.aV(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.by(u))+"'")}}
H.cG.prototype={
i:function(a){return this.a}}
H.c_.prototype={
i:function(a){return this.a}}
H.ct.prototype={
i:function(a){return"RuntimeError: "+H.b(this.a)}}
H.cL.prototype={
i:function(a){return"Assertion failed: "+P.aQ(this.a)}}
H.ab.prototype={
gj:function(a){return this.a},
gt:function(a){return this.a===0},
gI:function(a){return!this.gt(this)},
gC:function(){return new H.cl(this,[H.c(this,0)])},
T:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.bc(u,a)}else{t=this.bK(a)
return t}},
bK:function(a){var u=this,t=u.d
if(t==null)return!1
return u.a4(u.Z(t,u.a3(a)),a)>=0},
w:function(a,b){H.z(b,"$ir",this.$ti,"$ar").A(0,new H.cd(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a_(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a_(r,b)
s=t==null?null:t.b
return s}else return q.bL(b)},
bL:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.Z(r,s.a3(a))
t=s.a4(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.n(b,H.c(s,0))
H.n(c,H.c(s,1))
if(typeof b==="string"){u=s.b
s.ax(u==null?s.b=s.ad():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.ax(t==null?s.c=s.ad():t,b,c)}else s.bN(b,c)},
bN:function(a,b){var u,t,s,r,q=this
H.n(a,H.c(q,0))
H.n(b,H.c(q,1))
u=q.d
if(u==null)u=q.d=q.ad()
t=q.a3(a)
s=q.Z(u,t)
if(s==null)q.ag(u,t,[q.ae(a,b)])
else{r=q.a4(s,a)
if(r>=0)s[r].b=b
else s.push(q.ae(a,b))}},
aR:function(a,b){var u=this.bM(b)
return u},
bM:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=q.a3(a)
t=q.Z(p,u)
s=q.a4(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bn(r)
if(t.length===0)q.aB(p,u)
return r.b},
A:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.c(s,0),H.c(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bj(s))
u=u.c}},
ax:function(a,b,c){var u,t=this
H.n(b,H.c(t,0))
H.n(c,H.c(t,1))
u=t.a_(a,b)
if(u==null)t.ag(a,b,t.ae(b,c))
else u.b=c},
aD:function(){this.r=this.r+1&67108863},
ae:function(a,b){var u,t=this,s=new H.ck(H.n(a,H.c(t,0)),H.n(b,H.c(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aD()
return s},
bn:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aD()},
a3:function(a){return J.e0(a)&0x3ffffff},
a4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.b8(a[t].a,b))return t
return-1},
i:function(a){return P.eg(this)},
a_:function(a,b){return a[b]},
Z:function(a,b){return a[b]},
ag:function(a,b,c){a[b]=c},
aB:function(a,b){delete a[b]},
bc:function(a,b){return this.a_(a,b)!=null},
ad:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ag(t,u,t)
this.aB(t,u)
return t},
$ief:1}
H.cd.prototype={
$2:function(a,b){var u=this.a
u.k(0,H.n(a,H.c(u,0)),H.n(b,H.c(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.t,args:[H.c(u,0),H.c(u,1)]}}}
H.ck.prototype={}
H.cl.prototype={
gj:function(a){return this.a.a},
gt:function(a){return this.a.a===0},
gu:function(a){var u=this.a,t=new H.cm(u,u.r,this.$ti)
t.c=u.e
return t}}
H.cm.prototype={
gp:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bj(t))
else{t=u.c
if(t==null){u.saw(null)
return!1}else{u.saw(t.a)
u.c=u.c.c
return!0}}},
saw:function(a){this.d=H.n(a,H.c(this,0))},
$ibn:1}
H.du.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.dv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dw.prototype={
$1:function(a){return this.a(H.w(a))},
$S:10}
H.bw.prototype={}
H.bu.prototype={
gj:function(a){return a.length},
$ibp:1,
$abp:function(){}}
H.bv.prototype={
h:function(a,b){H.eo(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ez(c)
H.eo(b,a,a.length)
a[b]=c},
$iE:1,
$aE:function(){return[P.H]},
$abk:function(){return[P.H]},
$aa0:function(){return[P.H]},
$iI:1,
$aI:function(){return[P.H]},
$iv:1,
$av:function(){return[P.H]}}
H.bt.prototype={$ibl:1}
H.b1.prototype={}
H.b2.prototype={}
P.cN.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.cM.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:11}
P.cO.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cP.prototype={
$0:function(){this.a.$0()},
$S:0}
P.di.prototype={
b7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b6(new P.dj(this,b),0),a)
else throw H.h(P.am("`setTimeout()` not found."))}}
P.dj.prototype={
$0:function(){this.b.$0()},
$S:1}
P.a7.prototype={
bO:function(a){if((this.c&15)!==6)return!0
return this.b.b.am(H.k(this.d,{func:1,ret:P.aA,args:[P.m]}),a.a,P.aA,P.m)},
bJ:function(a){var u=this.e,t=P.m,s={futureOr:1,type:H.c(this,1)},r=this.b.b
if(H.aC(u,{func:1,args:[P.m,P.y]}))return H.dS(r.bV(u,a.a,a.b,null,t,P.y),s)
else return H.dS(r.am(H.k(u,{func:1,args:[P.m]}),a.a,null,t),s)}}
P.U.prototype={
aT:function(a,b,c){var u,t,s,r=H.c(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.x
if(u!==C.c){H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.fU(b,u)}t=new P.U($.x,[c])
s=b==null?1:3
this.ay(new P.a7(t,s,a,b,[r,c]))
return t},
bY:function(a,b){return this.aT(a,null,b)},
ay:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ia7")
t.c=a}else{if(s===2){u=H.j(t.c,"$iU")
s=u.a
if(s<4){u.ay(a)
return}t.a=s
t.c=u.c}P.dn(null,null,t.b,H.k(new P.cX(t,a),{func:1,ret:-1}))}},
aF:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ia7")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iU")
u=q.a
if(u<4){q.aF(a)
return}p.a=u
p.c=q.c}o.a=p.a0(a)
P.dn(null,null,p.b,H.k(new P.d0(o,p),{func:1,ret:-1}))}},
af:function(){var u=H.j(this.c,"$ia7")
this.c=null
return this.a0(u)},
a0:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
az:function(a){var u,t,s=this,r=H.c(s,0)
H.dS(a,{futureOr:1,type:r})
u=s.$ti
if(H.dq(a,"$iaR",u,"$aaR"))if(H.dq(a,"$iU",u,null))P.en(a,s)
else P.fM(a,s)
else{t=s.af()
H.n(a,r)
s.a=4
s.c=a
P.b0(s,t)}},
Y:function(a,b){var u,t=this
H.j(b,"$iy")
u=t.af()
t.a=8
t.c=new P.K(a,b)
P.b0(t,u)},
bb:function(a){return this.Y(a,null)},
$iaR:1}
P.cX.prototype={
$0:function(){P.b0(this.a,this.b)},
$S:0}
P.d0.prototype={
$0:function(){P.b0(this.b,this.a.a)},
$S:0}
P.cY.prototype={
$1:function(a){var u=this.a
u.a=0
u.az(a)},
$S:6}
P.cZ.prototype={
$2:function(a,b){H.j(b,"$iy")
this.a.Y(a,b)},
$1:function(a){return this.$2(a,null)},
$S:13}
P.d_.prototype={
$0:function(){this.a.Y(this.b,this.c)},
$S:0}
P.d3.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.aS(H.k(s.d,{func:1}),null)}catch(r){u=H.X(r)
t=H.aq(r)
if(o.d){s=H.j(o.a.a.c,"$iK").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iK")
else q.b=new P.K(u,t)
q.a=!0
return}if(!!J.F(n).$iaR){if(n instanceof P.U&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iK")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.bY(new P.d4(p),null)
s.a=!1}},
$S:1}
P.d4.prototype={
$1:function(a){return this.a},
$S:14}
P.d2.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.c(s,0)
q=H.n(n.c,r)
p=H.c(s,1)
n.a.b=s.b.b.am(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.X(o)
t=H.aq(o)
s=n.a
s.b=new P.K(u,t)
s.a=!0}},
$S:1}
P.d1.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iK")
r=m.c
if(H.dp(r.bO(u))&&r.e!=null){q=m.b
q.b=r.bJ(u)
q.a=!1}}catch(p){t=H.X(p)
s=H.aq(p)
r=H.j(m.a.a.c,"$iK")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.K(t,s)
n.a=!0}},
$S:1}
P.bD.prototype={}
P.al.prototype={
gj:function(a){var u={},t=new P.U($.x,[P.N])
u.a=0
this.a6(new P.cB(u,this),!0,new P.cC(u,t),t.gba())
return t},
H:function(a,b){return new H.be(this,[H.M(this,"al",0),b])}}
P.cB.prototype={
$1:function(a){H.n(a,H.M(this.b,"al",0));++this.a.a},
$S:function(){return{func:1,ret:P.t,args:[H.M(this.b,"al",0)]}}}
P.cC.prototype={
$0:function(){this.b.az(this.a.a)},
$S:0}
P.aW.prototype={}
P.a5.prototype={
J:function(a,b,c){return new H.bg(this,[H.M(this,"a5",0),H.M(this,"a5",1),b,c])},
$icA:1}
P.K.prototype={
i:function(a){return H.b(this.a)},
$iat:1}
P.dk.prototype={$ihC:1}
P.dm.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bx():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:0}
P.de.prototype={
bX:function(a){var u,t,s,r=null
H.k(a,{func:1,ret:-1})
try{if(C.c===$.x){a.$0()
return}P.eq(r,r,this,a,-1)}catch(s){u=H.X(s)
t=H.aq(s)
P.b5(r,r,this,u,H.j(t,"$iy"))}},
an:function(a,b,c){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.c===$.x){a.$1(b)
return}P.es(r,r,this,a,b,-1,c)}catch(s){u=H.X(s)
t=H.aq(s)
P.b5(r,r,this,u,H.j(t,"$iy"))}},
bW:function(a,b,c,d,e){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[d,e]})
H.n(b,d)
H.n(c,e)
try{if(C.c===$.x){a.$2(b,c)
return}P.er(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.X(s)
t=H.aq(s)
P.b5(r,r,this,u,H.j(t,"$iy"))}},
bx:function(a,b){return new P.dg(this,H.k(a,{func:1,ret:b}),b)},
aJ:function(a){return new P.df(this,H.k(a,{func:1,ret:-1}))},
by:function(a,b){return new P.dh(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
aS:function(a,b){H.k(a,{func:1,ret:b})
if($.x===C.c)return a.$0()
return P.eq(null,null,this,a,b)},
am:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.x===C.c)return a.$1(b)
return P.es(null,null,this,a,b,c,d)},
bV:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.x===C.c)return a.$2(b,c)
return P.er(null,null,this,a,b,c,d,e,f)},
aQ:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}}
P.dg.prototype={
$0:function(){return this.a.aS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.df.prototype={
$0:function(){return this.a.bX(this.b)},
$S:1}
P.dh.prototype={
$1:function(a){var u=this.c
return this.a.an(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cn.prototype={
$2:function(a,b){this.a.k(0,H.n(a,this.b),H.n(b,this.c))},
$S:4}
P.a0.prototype={
gu:function(a){return new H.bs(a,this.gj(a),[H.dT(this,a,"a0",0)])},
F:function(a,b){return this.h(a,H.W(b))},
gt:function(a){return this.gj(a)===0},
gI:function(a){return!this.gt(a)},
ga2:function(a){if(this.gj(a)===0)throw H.h(H.ca())
return this.h(a,0)},
ga5:function(a){if(this.gj(a)===0)throw H.h(H.ca())
return this.h(a,this.gj(a)-1)},
H:function(a,b){return new H.aJ(a,[H.dT(this,a,"a0",0),b])},
i:function(a){return P.ea(a,"[","]")}}
P.co.prototype={}
P.cp.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:4}
P.Y.prototype={
J:function(a,b,c){return P.ft(this,H.M(this,"Y",0),H.M(this,"Y",1),b,c)},
A:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.M(s,"Y",0),H.M(s,"Y",1)]})
for(u=J.bO(s.gC());u.m();){t=u.gp()
b.$2(t,s.h(0,t))}},
w:function(a,b){var u,t
H.z(b,"$ir",[H.M(this,"Y",0),H.M(this,"Y",1)],"$ar")
for(u=b.gC(),u=u.gu(u);u.m();){t=u.gp()
this.k(0,t,b.h(0,t))}},
gj:function(a){return J.R(this.gC())},
gt:function(a){return J.e1(this.gC())},
i:function(a){return P.eg(this)},
$ir:1}
P.d7.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.bh(b):u}},
gj:function(a){var u
if(this.b==null){u=this.c
u=u.gj(u)}else u=this.P().length
return u},
gt:function(a){return this.gj(this)===0},
gC:function(){if(this.b==null)return this.c.gC()
return new P.d8(this)},
k:function(a,b,c){var u,t,s=this
H.w(b)
if(s.b==null)s.c.k(0,b,c)
else if(s.T(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.bp().k(0,b,c)},
w:function(a,b){H.z(b,"$ir",[P.e,null],"$ar").A(0,new P.d9(this))},
T:function(a){if(this.b==null)return this.c.T(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
A:function(a,b){var u,t,s,r,q=this
H.k(b,{func:1,ret:-1,args:[P.e,,]})
if(q.b==null)return q.c.A(0,b)
u=q.P()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.dl(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.h(P.bj(q))}},
P:function(){var u=H.he(this.c)
if(u==null)u=this.c=H.A(Object.keys(this.a),[P.e])
return u},
bp:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.fr(P.e,null)
t=p.P()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.k(0,q,p.h(0,q))}if(r===0)C.a.l(t,null)
else C.a.sj(t,0)
p.a=p.b=null
return p.c=u},
bh:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.dl(this.a[a])
return this.b[a]=u},
$aY:function(){return[P.e,null]},
$ar:function(){return[P.e,null]}}
P.d9.prototype={
$2:function(a,b){this.a.k(0,H.w(a),b)},
$S:15}
P.d8.prototype={
gj:function(a){var u=this.a
return u.gj(u)},
F:function(a,b){var u
H.W(b)
u=this.a
if(u.b==null)u=u.gC().F(0,b)
else{u=u.P()
if(b<0||b>=u.length)return H.l(u,b)
u=u[b]}return u},
gu:function(a){var u=this.a
if(u.b==null){u=u.gC()
u=u.gu(u)}else{u=u.P()
u=new J.ba(u,u.length,[H.c(u,0)])}return u},
$aE:function(){return[P.e]},
$aaU:function(){return[P.e]},
$aI:function(){return[P.e]}}
P.bh.prototype={}
P.a8.prototype={
J:function(a,b,c){return new H.bc(this,[H.M(this,"a8",0),H.M(this,"a8",1),b,c])}}
P.br.prototype={
i:function(a){var u=P.aQ(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.cg.prototype={
i:function(a){return"Cyclic error in JSON stringify"}}
P.cf.prototype={
ah:function(a,b){var u=P.fT(b,this.gbF().a)
return u},
bG:function(a){var u=P.fN(a,this.gbH().b,null)
return u},
gbH:function(){return C.ax},
gbF:function(){return C.aw},
$abh:function(){return[P.m,P.e]}}
P.ci.prototype={
$acA:function(){return[P.m,P.e]},
$aa5:function(){return[P.m,P.e]},
$aa8:function(){return[P.m,P.e]}}
P.ch.prototype={
$acA:function(){return[P.e,P.m]},
$aa5:function(){return[P.e,P.m]},
$aa8:function(){return[P.e,P.m]}}
P.db.prototype={
aW:function(a){var u,t,s,r,q,p,o,n=a.length
for(u=J.eC(a),t=this.c,s=0,r=0;r<n;++r){q=u.X(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.b.O(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)t.a+=C.b.O(a,s,r)
s=r+1
p=t.a+=H.T(92)
t.a=p+H.T(q)}}if(s===0)t.a+=H.b(a)
else if(s<n)t.a+=u.O(a,s,n)},
aa:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.h(new P.cg(a,null))}C.a.l(u,a)},
a8:function(a){var u,t,s,r,q=this
if(q.aV(a))return
q.aa(a)
try{u=q.b.$1(a)
if(!q.aV(u)){s=P.ec(a,null,q.gaE())
throw H.h(s)}s=q.a
if(0>=s.length)return H.l(s,-1)
s.pop()}catch(r){t=H.X(r)
s=P.ec(a,t,q.gaE())
throw H.h(s)}},
aV:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.l.i(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.aW(a)
u.a+='"'
return!0}else{u=J.F(a)
if(!!u.$iv){s.aa(a)
s.c0(a)
u=s.a
if(0>=u.length)return H.l(u,-1)
u.pop()
return!0}else if(!!u.$ir){s.aa(a)
t=s.c1(a)
u=s.a
if(0>=u.length)return H.l(u,-1)
u.pop()
return t}else return!1}},
c0:function(a){var u,t,s=this.c
s.a+="["
u=J.ao(a)
if(u.gI(a)){this.a8(u.h(a,0))
for(t=1;t<u.gj(a);++t){s.a+=","
this.a8(u.h(a,t))}}s.a+="]"},
c1:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gt(a)){o.c.a+="{}"
return!0}u=a.gj(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.A(0,new P.dc(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.aW(H.w(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.l(t,p)
o.a8(t[p])}r.a+="}"
return!0}}
P.dc.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.k(u,t.a++,a)
C.a.k(u,t.a++,b)},
$S:4}
P.da.prototype={
gaE:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.aA.prototype={}
P.H.prototype={}
P.at.prototype={}
P.bR.prototype={
i:function(a){return"Assertion failed"}}
P.bx.prototype={
i:function(a){return"Throw of null."}}
P.ae.prototype={
gac:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gab:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gac()+o+u
if(!q.a)return t
s=q.gab()
r=P.aQ(q.b)
return t+s+": "+r}}
P.bz.prototype={
gac:function(){return"RangeError"},
gab:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.c9.prototype={
gac:function(){return"RangeError"},
gab:function(){var u,t=H.W(this.b)
if(typeof t!=="number")return t.V()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gj:function(a){return this.f}}
P.cJ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cH.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bC.prototype={
i:function(a){return"Bad state: "+this.a}}
P.c2.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aQ(u)+"."}}
P.bB.prototype={
i:function(a){return"Stack Overflow"},
$iat:1}
P.c4.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cW.prototype={
i:function(a){return"Exception: "+this.a}}
P.c8.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.b.O(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.N.prototype={}
P.I.prototype={
H:function(a,b){return H.dD(this,H.M(this,"I",0),b)},
gj:function(a){var u,t=this.gu(this)
for(u=0;t.m();)++u
return u},
gt:function(a){return!this.gu(this).m()},
gI:function(a){return!this.gt(this)},
F:function(a,b){var u,t,s
H.W(b)
P.fz(b,"index")
for(u=this.gu(this),t=0;u.m();){s=u.gp()
if(b===t)return s;++t}throw H.h(P.dG(b,this,"index",null,t))},
i:function(a){return P.fm(this,"(",")")}}
P.v.prototype={$iE:1,$iI:1}
P.r.prototype={}
P.t.prototype={
gq:function(a){return P.m.prototype.gq.call(this,this)},
i:function(a){return"null"}}
P.b7.prototype={}
P.m.prototype={constructor:P.m,$im:1,
N:function(a,b){return this===b},
gq:function(a){return H.aV(this)},
i:function(a){return"Instance of '"+H.b(H.by(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.e.prototype={$ifu:1}
P.aw.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ihr:1}
W.d.prototype={}
W.bP.prototype={
i:function(a){return String(a)}}
W.bQ.prototype={
i:function(a){return String(a)}}
W.af.prototype={
gj:function(a){return a.length}}
W.aN.prototype={
gj:function(a){return a.length}}
W.c3.prototype={}
W.as.prototype={$ias:1}
W.aO.prototype={
E:function(a,b,c){var u=a.createElementNS(b,c)
return u}}
W.c5.prototype={
i:function(a){return String(a)}}
W.aP.prototype={
i:function(a){return a.localName},
bk:function(a,b,c){return a.setAttribute(b,c)},
$iaP:1}
W.a.prototype={$ia:1}
W.ag.prototype={
b8:function(a,b,c,d){return a.addEventListener(b,H.b6(H.k(c,{func:1,args:[W.a]}),1),!1)},
bi:function(a,b,c,d){return a.removeEventListener(b,H.b6(H.k(c,{func:1,args:[W.a]}),1),!1)},
$iag:1}
W.c7.prototype={
gj:function(a){return a.length}}
W.bm.prototype={}
W.J.prototype={
a7:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
bU:function(a,b){var u,t
try{u=a.parentNode
J.f1(u,b,a)}catch(t){H.X(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.b1(a):u},
bu:function(a,b){return a.appendChild(b)},
bj:function(a,b,c){return a.replaceChild(b,c)},
$iJ:1}
W.cv.prototype={
gj:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.G.prototype={$iG:1}
W.bF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.dG(b,a,null,null,null))
return a[b]},
F:function(a,b){H.W(b)
if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.J]},
$ibp:1,
$abp:function(){return[W.J]},
$aa0:function(){return[W.J]},
$iI:1,
$aI:function(){return[W.J]},
$iv:1,
$av:function(){return[W.J]},
$aaS:function(){return[W.J]}}
W.cT.prototype={
a6:function(a,b,c,d){var u=H.c(this,0)
H.k(a,{func:1,ret:-1,args:[u]})
H.k(c,{func:1,ret:-1})
return W.dM(this.a,this.b,a,!1,u)},
aP:function(a,b,c){return this.a6(a,b,c,null)}}
W.dL.prototype={}
W.cU.prototype={
ak:function(a){var u=this
H.k(a,{func:1,ret:-1,args:[H.c(u,0)]})
if(u.b==null)throw H.h(P.fF("Subscription has been canceled."))
u.bo()
u.sbe(W.ev(H.k(a,{func:1,ret:-1,args:[W.a]}),W.a))
u.aH()},
al:function(a,b){},
aH:function(){var u,t=this.d,s=t!=null
if(s&&!0){u=this.b
u.toString
H.k(t,{func:1,args:[W.a]})
if(s)J.f_(u,this.c,t,!1)}},
bo:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.k(t,{func:1,args:[W.a]})
if(s)J.f0(u,this.c,t,!1)}},
sbe:function(a){this.d=H.k(a,{func:1,args:[W.a]})}}
W.cV.prototype={
$1:function(a){return this.a.$1(H.j(a,"$ia"))},
$S:16}
W.aS.prototype={
gu:function(a){return new W.c6(a,a.length,[H.dT(this,a,"aS",0)])}}
W.c6.prototype={
m:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.l(s,t)
u.saC(s[t])
u.c=t
return!0}u.saC(null)
u.c=s
return!1},
gp:function(){return this.d},
saC:function(a){this.d=H.n(a,H.c(this,0))},
$ibn:1}
W.bE.prototype={}
W.bI.prototype={}
W.bJ.prototype={}
P.d5.prototype={
bP:function(){return Math.random()}}
P.dd.prototype={
i:function(a){var u=this
return"Rectangle ("+u.a+", "+u.b+") "+u.c+" x "+u.d},
N:function(a,b){var u,t,s,r,q,p,o=this
if(b==null)return!1
if(!!J.F(b).$iL){u=o.a
t=b.a
if(u===t){s=o.b
r=b.b
if(s===r){q=H.c(o,0)
p=H.c(b,0)
u=H.n(u+o.c,q)===H.n(t+b.c,p)&&H.n(s+o.d,q)===H.n(r+b.d,p)}else u=!1}else u=!1}else u=!1
return u},
gq:function(a){var u,t=this,s=t.a,r=C.d.gq(s),q=t.b,p=C.d.gq(q),o=H.c(t,0)
s=C.d.gq(H.n(s+t.c,o))
o=C.d.gq(H.n(q+t.d,o))
o=P.d6(P.d6(P.d6(P.d6(0,r),p),s),o)
u=536870911&o+((67108863&o)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)}}
P.L.prototype={}
P.aL.prototype={$iaL:1}
P.a4.prototype={$ia4:1}
P.S.prototype={}
P.aj.prototype={$iaj:1}
P.av.prototype={$iav:1}
P.Z.prototype={$iZ:1}
P.f.prototype={$if:1}
P.ax.prototype={$iax:1}
P.aY.prototype={}
P.a1.prototype={$ia1:1}
P.aZ.prototype={}
P.bl.prototype={$iE:1,
$aE:function(){return[P.H]},
$iI:1,
$aI:function(){return[P.H]},
$iv:1,
$av:function(){return[P.H]}}
F.bi.prototype={}
M.bb.prototype={
au:function(c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5="rotate(90) translate(",c6=e1.h(0,C.w),c7=e1.h(0,C.q)
if(J.f4(c7,"-"))c3.f=!0
if(C.b.S(c7,"y"))p=!1
else p=!0
if(c3.r==null)c3.r=0
o=new M.bX(c3,d1,d2,c8,d3,d4)
n=new M.bY(c3,d1,d2,c8,d3,d4)
m=P.e
c3.sb9(0,P.ac($.dB,M.p,m))
c3.e.w(0,e1)
l=B.ed(c3.e.h(0,C.S))
k=B.ed(c3.e.h(0,C.T))
e3.a=6
j=!p
i=j?k:l
i.A(0,new M.bT(e3,d7))
u=c9
t=d0
h=c3.r
if(h!=null&&c3.f){if(typeof h!=="number")return h.v()
u=h-c9
t=h-d0}s=null
g=P.q(c3.e.h(0,C.j))
if(p){if(c3.f){h=c3.r=c9+d0
u=h-c9
t=h-d0}s=M.bW(o.$1(u),o.$1(t),e3.a,c4,!1)
if(J.R(s)>2){f=P.V(J.f6(s))
e=P.V(J.f8(s))
h=u
if(typeof f!=="number")return f.V()
if(typeof h!=="number")return H.i(h)
if(!(f<h)){h=t
if(typeof e!=="number")return e.aq()
if(typeof h!=="number")return H.i(h)
h=e>h}else h=!0
if(h){h=e3.a
if(typeof h!=="number")return h.n()
e3.a=h+1
s=M.bW(o.$1(u),o.$1(t),e3.a,c4,!1)}}h=J.R(s)
d=J.B(s,J.R(s)/2|0)
if(typeof g!=="number")return H.i(g)
if(C.l.U(h*d.length*g*0.6)>d7){h=e3.a
if(typeof h!=="number")return H.i(h)
e3.a=C.k.U(0.8*h)
s=M.bW(o.$1(u),o.$1(t),e3.a,c4,!1)}c=P.q(c3.e.h(0,C.h))
if(typeof c!=="number")return c.n()
b=c+g+4
h=P.q(c3.e.h(0,C.B))
if(typeof h!=="number")return H.i(h)
a=b+h
if(C.b.S(c7,"t")){h=P.q(c3.e.h(0,C.h))
if(typeof h!=="number")return H.i(h)
c=d8-h
b=c-4
h=P.q(c3.e.h(0,C.B))
if(typeof h!=="number")return H.i(h)
a=b-h
a0=d8}else a0=0
a1=c3.e.h(0,C.O)}else{try{r=d1
q=d2
s=M.bW(D.ei(u,r,q),D.ei(t,r,q),e3.a,c4,!1)}catch(a2){H.X(a2)
s=H.A(["0.0"],[m])}h=P.q(c3.e.h(0,C.h))
if(typeof h!=="number")return H.i(h)
c=d8-h
h=P.q(c3.e.h(0,C.A))
if(typeof h!=="number")return H.i(h)
b=c-h
h=P.q(c3.e.h(0,C.C))
if(typeof h!=="number")return H.i(h)
a=b-h
if(C.b.S(c7,"t")){c=P.q(c3.e.h(0,C.h))
h=P.q(c3.e.h(0,C.A))
if(typeof c!=="number")return c.n()
if(typeof h!=="number")return H.i(h)
b=c+h
h=P.q(c3.e.h(0,C.R))
if(typeof h!=="number")return H.i(h)
a=b+h
a0=0}else a0=d8
a1=c3.e.h(0,C.P)}a3=H.A([],[P.N])
c3.a=P.aX()
c3.c=P.q(c3.e.h(0,C.K))
c3.d=P.q(c3.e.h(0,C.L))
for(h=d2!=null,d=d1!=null,a4=c4,a5=a4,a6=a5,a7=a6,a8=a7,a9="middle",b0="0",b1=0;b1<J.R(s);++b1){b2=P.V(J.B(s,b1))
if(!j||!1){b3=H.ez(n.$1(b2))
if(c3.f){b4=c3.r
if(typeof b4!=="number")return b4.v()
if(typeof b3!=="number")return H.i(b3)
b3=b4-b3}b5=J.ar(c3.x.$1(b3))}else{if(h&&d){if(typeof b2!=="number")return b2.ar()
if(typeof d2!=="number")return H.i(d2)
b6=b2*d1/d2}else b6=b2
if(c3.f){b4=c3.r
if(typeof b4!=="number")return b4.v()
if(typeof b6!=="number")return H.i(b6)
b3=b4-b6}else b3=b6
b5=J.ar(c3.x.$1(b3))}C.a.l(a3,b5)
if(b5<0)continue
if(b5>d7)continue
b4=document
b7=b4.createElementNS("http://www.w3.org/2000/svg","text")
b7=H.j(H.j(b7,"$if"),"$ia1")
if(J.B(s,b1).length>4){if(typeof b2!=="number")return b2.aI()
b8=Math.abs(b2)>99999}else b8=!1
if(b8){J.dZ(s,b1,J.fa(b2,2))
b8=s
b9=J.B(s,b1)
J.dZ(b8,b1,H.hk(b9,"e",""))}b7.textContent=J.B(s,b1)
if(p){b8=c3.c
if(typeof b8!=="number")return H.i(b8)
a5=b5+b8
a4=b}else{b8=c3.d
if(typeof b8!=="number")return H.i(b8)
a4=b5+b8
a9=H.dW(c7,"t",0)?"start":"end"
a5=b
b0="-33%"}B.D(b7,P.u(["x",""+a5,"y",""+a4,"fill",a1,"stroke","none","font-size",c3.e.h(0,C.j),"text-anchor",a9,"baseline-shift",b0,"cursor","default"],m,m))
c3.a.appendChild(b7)
if(c3.e.T(C.h)){b8=P.q(c3.e.h(0,C.h))
if(typeof b8!=="number")return b8.aq()
b8=b8>0}else b8=!1
if(b8){c0=b4.createElementNS("http://www.w3.org/2000/svg","line")
c0=H.j(H.j(c0,"$if"),"$iaj")
if(p){b4=c3.c
if(typeof b4!=="number")return H.i(b4)
a6=b5+b4}else{b4=c3.d
if(typeof b4!=="number")return H.i(b4)
a6=b5+b4}if(p)B.D(c0,P.u(["x1",""+a6,"y1",""+a0,"x2",""+a6,"y2",""+c],m,m))
else B.D(c0,P.u(["x1",""+a0,"y1",""+a6,"x2",""+c,"y2",""+a6],m,m))
B.D(c0,P.u(["stroke",c3.e.h(0,C.M),"stroke-width",c3.e.h(0,C.N)],m,m))
c3.a.appendChild(c0)
a7=c0}if(H.dW(c7,"g",0))b4=d9>0
else b4=!1
if(b4)if(p)c3.b=S.em(a3,c4,c4,d9,e1)
else c3.b=S.em(c4,a3,d9,c4,e1)
a8=b7}if(c6!=null&&C.b.aU(c6).length!==0){a8=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","text"),"$if"),"$ia1")
a8.textContent=c6
if(p){j=c3.c
if(typeof j!=="number")return H.i(j)
B.D(a8,P.u(["x",H.b(d7/2+j),"y",""+a,"fill",a1,"stroke","none","font-size",c3.e.h(0,C.j),"text-anchor","middle","cursor","default"],m,m))}else{c1=P.q(c3.e.h(0,C.C))
c2="rotate(-90) translate("+H.b(-d7/2)+", "+H.b(c1)+")"
if(J.b8(c3.e.h(0,C.Q),"tb")){j=d7/2
h=c5+H.b(j)+", "
if(typeof c1!=="number")return c1.a9()
c2=h+-c1+")"
if(C.b.S(c7,"t"))c2=c5+H.b(j)+", "+(-d8+C.l.U(d8*0.22))+")"}B.D(a8,P.u(["x","0","y","0","fill",a1,"stroke","none","font-size",c3.e.h(0,C.j),"text-anchor","middle","transform",c2,"cursor","default"],m,m))}m=W.b_
j={func:1,ret:-1,args:[m]}
W.dM(a8,"touchstart",H.k(new M.bU(e2),j),!1,m)
W.dM(a8,"touchmove",H.k(new M.bV(e2),j),!1,m)
c3.a.appendChild(a8)}},
sb9:function(a,b){this.e=H.z(b,"$ir",[M.p,P.e],"$ar")}}
M.bS.prototype={
$0:function(){var u=this.a
u.k(0,C.q,J.eZ(u.h(0,C.q),"y"))
return u},
$S:17}
M.bX.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.M()
if(typeof p!=="number")return H.i(p)
u=q/p
if(!H.dp(s.e))u=-u
if(o){if(typeof r!=="number")return r.n()
t=r+(a+0.5)*u}else{if(typeof r!=="number")return r.n()
t=r+a*u}return t},
$S:2}
M.bY.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.M()
if(typeof p!=="number")return H.i(p)
u=q/p
if(!H.dp(s.e))u=-u
if(o){if(typeof a!=="number")return a.v()
if(typeof r!=="number")return H.i(r)
t=(a-r)/u-0.5}else{if(typeof a!=="number")return a.v()
if(typeof r!=="number")return H.i(r)
t=(a-r)/u}return t},
$S:2}
M.bT.prototype={
$2:function(a,b){var u
H.w(a)
H.w(b)
u=P.q(a)
if(typeof u!=="number")return H.i(u)
if(this.b>u){this.a.a=P.q(b)
return}},
$S:18}
M.bU.prototype={
$1:function(a){H.j(a,"$iG").preventDefault()},
$S:7}
M.bV.prototype={
$1:function(a){H.j(a,"$iG").preventDefault()},
$S:7}
M.p.prototype={
i:function(a){return this.b}}
S.cK.prototype={
bz:function(){var u,t,s,r,q,p,o,n,m=this,l="stroke-dasharray",k=P.aX(),j=m.e,i=j!=null
if(i)for(u=m.d,t=P.e,s=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.j(H.j(p,"$if"),"$iaj")
if(r>=j.length)return H.l(j,r)
q=""+j[r]
if(r>=j.length)return H.l(j,r)
B.D(p,P.u(["x1",q,"y1","0","x2",""+j[r],"y2",H.b(u),"stroke",m.b.h(0,C.r),"stroke-width",m.b.h(0,C.t),"stroke-opacity",m.b.h(0,C.u),l,m.b.h(0,C.v)],t,t))
k.appendChild(p)
s=p}j=m.f
i=j!=null
if(i)for(u=m.c,t=P.e,o=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.j(H.j(p,"$if"),"$iaj")
if(r>=j.length)return H.l(j,r)
q=""+j[r]
n=H.b(u)
if(r>=j.length)return H.l(j,r)
B.D(p,P.u(["x1","0","y1",q,"x2",n,"y2",""+j[r],"stroke",m.b.h(0,C.r),"stroke-width",m.b.h(0,C.t),"stroke-opacity",m.b.h(0,C.u),l,m.b.h(0,C.v)],t,t))
k.appendChild(p)
o=p}m.a=k},
sbw:function(a,b){this.b=H.z(b,"$ir",[M.p,P.e],"$ar")}}
D.cj.prototype={
aN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/2000/svg",h="legend",g=j.c,f=document
g.k(0,a,H.j(H.j(C.e.E(f,i,"text"),"$if"),"$ia1"))
g.h(0,a).textContent=b
u=j.b
j.ch=P.q(J.B(u.h(0,h),C.E))
J.bN(g.h(0,a),"font-size",H.b(j.ch))
t=g.h(0,a)
s=J.B(u.h(0,h),C.Y)
t.toString
J.bN(t,"fill",H.w(s))
s=j.ch
t=P.q(J.B(u.h(0,h),C.a2))
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.i(t)
r=s+t
t=j.cy
s=t*r
j.e=s
q=c!=null
if(q){p=j.r
if(typeof p!=="number")return H.i(p)
o=12+p}else o=12
if(j.db!=null)j.e=s+2*r
s=a==="TOP_TITLE_ID"
if(s){j.e=r
p=j.r
if(typeof p!=="number")return p.W()
o=12-C.d.R(p,2)}j.cy=t-1
t=j.z
C.aE.bu(t,g.h(0,a))
J.bN(g.h(0,a),"x",""+o)
J.bN(g.h(0,a),"y",H.b(j.e))
if(!s&&q){g=j.e
if(typeof g!=="number")return g.v()
n=H.j(H.j(C.e.E(f,i,"rect"),"$if"),"$iZ")
m=P.q(J.B(u.h(0,h),C.a1))
l=j.r
k=P.q(J.B(u.h(0,h),C.E))
if(typeof k!=="number")return k.W()
u=C.d.R(k,2)
n.setAttribute("x","6")
n.setAttribute("y",""+(g-r+u))
n.setAttribute("width",H.b(l))
n.setAttribute("height",H.b(m))
n.setAttribute("fill",c)
j.d.k(0,a,n)
t.appendChild(n)}},
as:function(a,b,c){var u,t=this,s=t.c
if(s.T(a)){u=s.h(0,a)
u.textContent=b;(u&&C.am).bU(u,u)}else t.aN(a,b,c)
t.bq(t.e)},
bq:function(a){var u,t,s,r=this,q="legend",p=r.Q
if(p!=null)C.al.a7(p)
r.Q=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","rect"),"$if"),"$iZ")
p=r.b
u=P.q(J.B(p.h(0,q),C.Z))
if(u===0)return
t=P.q(J.B(p.h(0,q),C.a_))
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
s.setAttribute("fill",H.w(J.B(p.h(0,q),C.W)))
s=r.Q
s.toString
s.setAttribute("fill-opacity",H.w(J.B(p.h(0,q),C.X)))
r.z.appendChild(r.Q)}}
D.C.prototype={
i:function(a){return this.b}}
V.au.prototype={
b3:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q=this
q.sbv(P.ac($.dA(),V.o,P.e))
if(i!=null)q.a.w(0,i)
if(q.a.h(0,C.H)!=null){q.cy=P.q(q.a.h(0,C.H))
q.a.aR(0,C.H)}if(q.a.h(0,C.I)!=null){q.db=P.q(q.a.h(0,C.I))
q.a.aR(0,C.I)}u=q.cy
if(u==null)u=q.cy=0
t=q.db
if(t==null){t=q.r2.length-1
q.db=t}if(t<=u)t=q.db=u+1
if(u<0||u>q.r2.length-1)q.cy=0
u=q.r2
s=u.length-1
if(t>s||t<0)q.db=s
q.y2=B.fG(q.a.h(0,C.ag))
q.f=P.q(q.a.h(0,C.ai))
q.x=q.r=P.q(q.a.h(0,C.aj))
u=F.fj(u,q.cy,q.db,!1,P.q(q.a.h(0,C.a8)))
q.b=u
u=u.d.length
q.rx=new Float64Array(u)
for(r=0;u=q.b.d,r<u.length;++r){t=q.rx
u=u[r]
u.toString;(t&&C.m).k(t,r,u)}q.aL=E.e4(q.rx)[0]
q.aM=E.e3(q.rx)[0]
q.L=E.e4(q.b.a)[0]
q.B=E.e3(q.b.a)[0]
q.K=P.aX()
q.aY()},
aY:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a.h(0,C.n)==null||J.b8(j.a.h(0,C.n),"null")?j.cx=null:j.cx=P.V(j.a.h(0,C.n))
if(i!=null){u=j.B
if(typeof u!=="number")return u.aI()
u=Math.abs(u)>0.0001}else u=!1
if(u){u=j.B
if(typeof i!=="number")return i.M()
if(typeof u!=="number")return H.i(u)
t=i/u
i=j.L
if(typeof i!=="number")return H.i(i)
j.L=t*i
j.B=t*u}j.k1=P.q(j.a.h(0,C.aa))
j.k2=P.q(j.a.h(0,C.ae))
j.k3=P.q(j.a.h(0,C.af))
j.k4=P.V(j.a.h(0,C.a9))
j.r1=P.V(j.a.h(0,C.ac))
if(j.a.h(0,C.ad)!=null){i=j.r1
u=P.V(j.a.h(0,C.ad))
if(typeof i!=="number")return i.ar()
if(typeof u!=="number")return H.i(u)
j.r1=i*u}i=j.f
if(typeof i!=="number")return H.i(i)
j.Q=j.y-2*i
i=j.r
if(typeof i!=="number")return H.i(i)
u=j.x
if(typeof u!=="number")return H.i(u)
j.ch=j.z-i-u
s=j.rx.length
j.fx=1e6
j.fy=0
for(i=s-1,r=null,q=null,p=0,u="";p<s;++p){o=j.rx
if(p>=o.length)return H.l(o,p)
o=o[p]
n=j.k4
if(typeof n!=="number")return H.i(n)
m=j.b.a
if(p>=m.length)return H.l(m,p)
l=m[p]
r=J.ar(j.ao(o*n))
q=J.ar(j.ap(l))
if(!H.dp(j.y2))if(q<0)q=2
else{o=j.ch
if(typeof o!=="number")return H.i(o)
if(q>o)q=o-1}o=p===i
u=o?u+(""+r+" "+q):u+(""+r+" "+q+",")
if(o)j.dy=r
o=j.fy
if(typeof o!=="number")return H.i(o)
if(q>o)j.fy=q
o=j.fx
if(typeof o!=="number")return H.i(o)
if(q<o)j.fx=q}i=j.c
if(i!=null)C.ay.a7(i)
j.c=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","polyline"),"$if"),"$iav")
k=j.a.h(0,C.f)
i=P.q(j.a.h(0,C.a7))
j.bI=i
j.x1=!1
j.c.setAttribute("stroke-width",H.b(i))
i=j.ry
if(i!=null){o=P.e
B.D(i,P.u(["stroke",H.b(k),"fill","none"],o,o))}i=j.c
o=j.a.h(0,C.f)
i.toString
i.setAttribute("stroke",H.w(o))
i.setAttribute("fill","none")
i.setAttribute("points",u.charCodeAt(0)==0?u:u)
if(j.a.h(0,C.a4)!=null){i=j.c
u=j.a.h(0,C.a4)
i.toString
i.setAttribute("transform",H.w(u))}j.K.appendChild(j.c)
j.fr=q
if(J.b8(j.a.h(0,C.ah),"true"))j.bt(r,q)
j.bs()
j.br(r,q)},
ao:function(a){var u,t,s,r,q=this,p=q.aM,o=q.aL
if(typeof p!=="number")return p.v()
if(typeof o!=="number")return H.i(o)
p-=o
if(Math.abs(p)<0.000001)u=a
else{if(typeof a!=="number")return a.v()
t=q.Q
if(typeof t!=="number")return H.i(t)
s=q.f
if(typeof s!=="number")return H.i(s)
r=q.k1
if(typeof r!=="number")return H.i(r)
u=(a-o)*t/p+s+r}return u},
aX:function(a){var u,t=this,s=t.a1
if(s==null||t.ai==null)return
if(typeof s!=="number")return s.aI()
u=Math.abs(s)<1e-10
if(u&&a<=0){s=t.B
u=t.r1
if(typeof s!=="number")return s.M()
if(typeof u!=="number")return H.i(u)
return s/u}if(u&&a>=t.z){s=t.B
if(typeof s!=="number")return s.a9()
u=t.r1
if(typeof u!=="number")return H.i(u)
return-s/u}u=t.ai
if(typeof u!=="number")return H.i(u)
return-(a-u)/s},
ap:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ch,i=P.V(l.a.h(0,C.i))
P.V(l.a.h(0,C.ab))
u=l.r1
if(typeof u!=="number")return H.i(u)
t=1-u
if(typeof i!=="number")return H.i(i)
if(t>i)t=i-0.01
if(typeof j!=="number")return H.i(j)
s=l.r
if(typeof s!=="number")return H.i(s)
r=i*j+s
q=l.L
if(typeof q!=="number")return q.V()
if(q<0){p=l.B
if(typeof p!=="number")return p.V()
p=p<0}else p=!1
o=l.B
if(p){if(typeof a!=="number")return a.a9()
a=-a
if(typeof o!=="number")return o.a9()
n=l.B=-q
l.L=-o
o=n}if(typeof o!=="number")return o.v()
q=o-0
p=Math.abs(q)<0.000001
if(p){if(typeof a!=="number")return a.ar()
u=a*Math.abs(u)<0.000001}else u=!1
if(u)u=l.a1=0
else if(p){l.a1=0
u=0}else{u=-(t*j+s-r)/q
l.a1=u}s=l.k2
if(typeof s!=="number")return H.i(s)
q=l.k3
if(typeof q!=="number")return H.i(q)
q=r+u*0+s+q
l.ai=q
if(typeof a!=="number")return H.i(a)
k=-u*a+q
try{J.ar(k)
u=k
return u}catch(m){H.X(m)
return l.z/2}},
bt:function(a,b){var u,t,s,r=this,q=r.ry
if(q!=null)C.al.a7(q)
if(a==null){a=r.x2
if(a!=null&&r.y1!=null)b=r.y1
else{a=r.dy
if(a!=null&&r.fr!=null)b=r.fr
else return}}u=P.q(r.a.h(0,C.a5))
if(J.b8(r.a.h(0,C.a6),"true")){q=r.f
if(typeof q!=="number")return q.W()
q=C.d.R(q,2)
if(typeof a!=="number")return a.aq()
q=a>r.y-q}else q=!1
if(q){if(typeof u!=="number")return H.i(u)
a=r.y-u}if(typeof a!=="number")return a.n()
r.x2=a+2
if(typeof u!=="number")return u.W()
q=C.d.R(u,2)
if(typeof b!=="number")return b.v()
r.y1=b-q
t=r.a.h(0,C.f)
q=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","rect"),"$if"),"$iZ")
r.ry=q
s=P.e
B.D(q,P.u(["x",H.b(r.x2),"y",H.b(r.y1),"width",""+u,"height",""+u,"stroke",H.b(t),"fill","white"],s,s))
r.K.appendChild(r.ry)},
bs:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.d,b=c.length
if(b!==0){for(u=0;u<c.length;c.length===b||(0,H.eM)(c),++u){t=c[u]
s=t.parentNode
if(s!=null)s.removeChild(t)}C.a.sj(c,0)}r=d.a.h(0,C.az)
if(r==null||r.length===0)return
b=P.e
q=H.z(J.e_(C.x.ah(0,r),b),"$iv",[b],"$av")
t=q.ga2(q)
s=q.a
p=J.ao(s)
if(p.gj(s)<4)return
for(o=t==="POLYLINE_POINT_SHAPE_CIRCLE_EMPTY",n=t==="POLYLINE_POINT_SHAPE_SQUARE_EMPTY",m=H.c(q,1),l=2;l<p.gj(s);l+=2){k=P.V(H.Q(p.h(s,l),m))
j=P.V(H.Q(p.h(s,l+1),m))
i=J.ar(d.ao(k))
h=J.ar(d.ap(j))
g=d.a.h(0,C.aA)
if(g==null)g=d.a.h(0,C.f)
if(n){f=document.createElementNS("http://www.w3.org/2000/svg","rect")
f=H.j(H.j(f,"$if"),"$iZ")
B.D(f,P.u(["x",H.b(i+18626451505319996e-25),"y",H.b(h+18626451505319996e-25),"width","8","height","8","stroke",H.b(g),"fill","white"],b,b))
e=f}else if(o){f=document.createElementNS("http://www.w3.org/2000/svg","circle")
f=H.j(H.j(f,"$if"),"$iaL")
B.D(f,P.u(["cx",""+i,"cy",""+h,"r","6","stroke",H.b(g),"fill","white"],b,b))
e=f}else e=null
C.a.l(c,e)
d.K.appendChild(e)}d.a.k(0,C.z,H.Q(p.h(s,1),m))},
br:function(a,b){var u,t,s,r,q=this,p=q.e
if(p!=null)C.am.a7(p)
if(q.a.h(0,C.z)==null||J.R(q.a.h(0,C.z))===0)return
p=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","text"),"$if"),"$ia1")
q.e=p
p.textContent=H.w(q.a.h(0,C.z))
u=P.q(q.a.h(0,C.ak))
p=q.e
if(typeof a!=="number")return a.n()
t=""+(a+8)
if(typeof u!=="number")return u.W()
s=C.d.R(u,4)
if(typeof b!=="number")return b.n()
r=P.e
B.D(p,P.u(["x",t,"y",""+(b+s),"font-size",""+u,"fill",q.a.h(0,C.f),"stroke","none"],r,r))
q.K.appendChild(q.e)},
sbv:function(a){this.a=H.z(a,"$ir",[V.o,P.e],"$ar")}}
V.o.prototype={
i:function(a){return this.b}}
X.cw.prototype={
b4:function(a,b,c,a0,a1,a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a,d=e.clientWidth
if(typeof d!=="number")return d.v()
u=e.clientHeight
if(typeof u!=="number")return u.v()
t=P.N
g.sbQ(P.bA(15,15,d-30,u-30,t))
g.sbE(P.bA(15,15,0,0,t))
u=g.y
d=u.b
s=g.e
g.sbD(P.bA(80,d,s.c-80-u.a,s.d-70,t))
s=g.f
g.sc3(P.bA(s.a,s.b+s.d,s.c,70,t))
s=g.f
g.sc6(P.bA(s.a-80,s.b,80,s.d,t))
t=P.aX()
g.b=t
s=P.e
B.D(t,P.u(["width",""+g.e.c,"height",""+g.e.d],s,s))
t=P.aX()
g.c=t
B.D(t,P.u(["x",""+g.f.a,"y",""+g.f.b,"width",""+g.f.c,"height",""+g.f.d],s,s))
t=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","rect"),"$if"),"$iZ")
g.d=t
B.D(t,P.u(["x",""+g.f.a,"y",""+g.f.b,"width",""+g.f.c,"height",""+g.f.d,"fill","none","stroke","darkgreen","stroke-width","2"],s,s))
e.appendChild(g.b)
g.b.appendChild(g.c)
g.b.appendChild(g.d)
g.bC()
e=g.cx
if(0>=e.length)return H.l(e,0)
e=e[0]
d=M.p
r=P.ac($.dB,d,s)
r.w(0,g.dy)
g.sc2(r)
r=P.ac($.dB,d,s)
r.w(0,g.fr)
g.sc5(r)
d=e.r2.length
q=d-1
if(g.dy.h(0,C.o)!=null&&J.R(g.dy.h(0,C.o))!==0&&g.dy.h(0,C.p)!=null&&J.R(g.dy.h(0,C.p))!==0){p=P.V(g.dy.h(0,C.o))
q=P.V(g.dy.h(0,C.p))}else p=0
u=e.rx
u=(u&&C.m).ga2(u)
t=e.rx
t=(t&&C.m).ga5(t)
o=g.f
n=o.c
m=g.r.d
o=o.d
l=e.gc4()
k=new M.bb(f,l)
k.au(d,u,t,p,q,!0,f,!1,f,n,m,o,l,g.dy,f,{})
g.z=k
l=k.a
o=g.r.a
k=k.c
if(typeof k!=="number")return H.i(k)
B.D(l,P.u(["x",""+(o-k),"y",""+g.r.b],s,s))
B.D(g.z.b.a,P.u(["x",""+g.f.a,"y",""+g.f.b],s,s))
j=e.aX(0)
i=e.aX(g.f.d)
if(j==null)j=e.L
if(i==null)i=e.B
d=e.r1
if(typeof j!=="number")return j.M()
if(typeof d!=="number")return H.i(d)
if(typeof i!=="number")return i.M()
u=g.f
e=M.fd(j/d,i/d,f,f,f,u.d,g.x.c,u.c,e.gc7(),g.fr,f)
g.Q=e
e=e.a
u=""+g.x.a
d=g.x.b
t=g.Q.d
if(typeof t!=="number")return H.i(t)
B.D(e,P.u(["x",u,"y",""+(d-t)],s,s))
B.D(g.Q.b.a,P.u(["x",""+g.f.a,"y",""+g.f.b],s,s))
g.cy=X.fC(g.dx,g.fy)
for(h=0;h<2;++h){e=g.c
d=g.cx
if(h>=d.length)return H.l(d,h)
e.appendChild(d[h].K)}g.c.appendChild(g.cy.z)
g.b.appendChild(g.z.a)
g.b.appendChild(g.Q.a)
g.b.appendChild(g.z.b.a)
g.b.appendChild(g.Q.b.a)},
bC:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=new Array(2)
i.fixed$length=Array
j.sbT(H.A(i,[V.au]))
if(j.fy==null)j.sbS(j.fx)
for(i=j.ch,u=V.o,t=P.e,s=[[P.r,V.o,P.e]],r=0;r<2;++r){if(r===0)q=j.db.length!==2
else q=!1
if(q){q=new Array(2)
q.fixed$length=Array
j.sbR(H.A(q,s))}q=j.db
if(r>=q.length)return H.l(q,r)
p=q[r]
if(p==null){C.a.k(q,r,P.ac($.dA(),u,t))
q=j.db
if(r>=q.length)return H.l(q,r)
q[r].k(0,C.i,"0.8")
q=j.db
if(r>=q.length)return H.l(q,r)
q[r].k(0,C.f,j.fy[r])}else{if(p.h(0,C.i)==null){q=j.db
if(r>=q.length)return H.l(q,r)
q[r].k(0,C.i,"0.8")}q=j.db
if(r>=q.length)return H.l(q,r)
if(q[r].h(0,C.f)==null){q=j.db
if(r>=q.length)return H.l(q,r)
q[r].k(0,C.f,j.fy[r])}o=P.ac($.dA(),u,t)
q=j.db
if(r>=q.length)return H.l(q,r)
o.w(0,q[r])
C.a.k(j.db,r,o)}if(r>0){q=j.db
if(r>=q.length)return H.l(q,r)
q=q[r]
p=j.cx
if(0>=p.length)return H.l(p,0)
q.k(0,C.n,H.b(p[0].B))}q=j.cx
p=i[r]
n=p.length
m=j.f
l=m.c
m=m.d
k=j.db
if(r>=k.length)return H.l(k,r);(q&&C.a).k(q,r,V.fv(p,0,n-1,l,m,null,null,null,k[r]))}},
sbQ:function(a){this.e=H.z(a,"$iL",[P.N],"$aL")},
sbD:function(a){this.f=H.z(a,"$iL",[P.N],"$aL")},
sc3:function(a){this.r=H.z(a,"$iL",[P.N],"$aL")},
sc6:function(a){this.x=H.z(a,"$iL",[P.N],"$aL")},
sbE:function(a){this.y=H.z(a,"$iL",[P.N],"$aL")},
sbT:function(a){this.cx=H.z(a,"$iv",[V.au],"$av")},
sbR:function(a){this.db=H.z(a,"$iv",[[P.r,V.o,P.e]],"$av")},
sc2:function(a){this.dy=H.z(a,"$ir",[M.p,P.e],"$ar")},
sc5:function(a){this.fr=H.z(a,"$ir",[M.p,P.e],"$ar")},
sbS:function(a){this.fy=H.z(a,"$iv",[P.e],"$av")}}
B.cu.prototype={
$2:function(a,b){this.a.setAttribute(H.w(a),H.w(b))
return},
$S:19}
G.cx.prototype={
b5:function(a,b,c,d,e){var u,t,s,r,q,p,o=this,n=6.283185307179586*d
o.b=new Float64Array(a)
o.a=new Float64Array(a)
for(u=Math.abs(c)<0.00001,t=0;t<a;++t){s=t*n/a
if(t===0&&u)r=b
else{q=s+c
r=b*Math.sin(q)/q}p=o.b
if(t>=p.length)return H.l(p,t)
p[t]=s
p=o.a
if(t>=p.length)return H.l(p,t)
p[t]=r+e}}}
R.cy.prototype={
b6:function(a,b,c,d,e,f){var u,t,s,r,q,p=6.283185307179586*d
this.a=new Float64Array(a)
new Float64Array(a)
for(u=e*b,t=0;t<a;++t){s=Math.sin(t*p/a+c)
r=this.a
q=J.f9(2*C.at.bP()-1)
if(t>=r.length)return H.l(r,t)
r[t]=b*s+f+u*q}}};(function aliases(){var u=J.O.prototype
u.b1=u.i
u=J.bq.prototype
u.b2=u.i})();(function installTearOffs(){var u=hunkHelpers._instance_1u,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff
u(H.bf.prototype,"gbf","bg",8)
t(P,"fY","fJ",5)
t(P,"fZ","fK",5)
t(P,"h_","fL",5)
s(P,"ey","fW",1)
r(P.U.prototype,"gba",0,1,null,["$2","$1"],["Y","bb"],12,0)
t(P,"h0","fP",3)
var q
u(q=V.au.prototype,"gc4","ao",2)
u(q,"gc7","ap",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.m,null)
s(P.m,[H.dJ,J.O,J.ba,P.al,H.bf,P.a5,P.I,H.c0,P.Y,H.aM,H.bs,H.bk,H.cE,P.at,H.bG,H.ck,H.cm,P.di,P.a7,P.U,P.bD,P.aW,P.K,P.dk,P.a0,P.bh,P.db,P.aA,P.b7,P.bB,P.cW,P.c8,P.v,P.r,P.t,P.y,P.e,P.aw,W.c3,W.aS,W.c6,P.d5,P.dd,P.bl,F.bi,M.bb,M.p,S.cK,D.cj,D.C,V.au,V.o,X.cw,G.cx,R.cy])
s(J.O,[J.cb,J.cc,J.bq,J.a9,J.ah,J.ai,H.bw,W.ag,W.bE,W.c5,W.a,W.bI])
s(J.bq,[J.cr,J.ad,J.aa])
t(J.dI,J.a9)
s(J.ah,[J.aT,J.bo])
s(P.al,[H.be,W.cT])
s(P.a5,[H.bg,P.a8])
s(P.a8,[H.bc,P.ci,P.ch])
s(P.I,[H.cQ,H.E])
s(H.cQ,[H.bd,H.bH])
t(H.cS,H.bd)
t(H.cR,H.bH)
t(H.aJ,H.cR)
t(P.co,P.Y)
s(P.co,[H.aK,H.ab,P.d7])
s(H.aM,[H.c1,H.dz,H.cD,H.cd,H.du,H.dv,H.dw,P.cN,P.cM,P.cO,P.cP,P.dj,P.cX,P.d0,P.cY,P.cZ,P.d_,P.d3,P.d4,P.d2,P.d1,P.cB,P.cC,P.dm,P.dg,P.df,P.dh,P.cn,P.cp,P.d9,P.dc,W.cV,M.bS,M.bX,M.bY,M.bT,M.bU,M.bV,B.cu])
s(H.E,[H.aU,H.cl])
s(P.at,[H.cq,H.ce,H.cI,H.cG,H.c_,H.ct,P.bR,P.br,P.bx,P.ae,P.cJ,P.cH,P.bC,P.c2,P.c4])
s(H.cD,[H.cz,H.aH])
t(H.cL,P.bR)
t(H.bu,H.bw)
t(H.b1,H.bu)
t(H.b2,H.b1)
t(H.bv,H.b2)
t(H.bt,H.bv)
t(P.de,P.dk)
t(P.d8,H.aU)
t(P.cg,P.br)
t(P.cf,P.bh)
t(P.da,P.db)
s(P.b7,[P.H,P.N])
s(P.ae,[P.bz,P.c9])
t(W.J,W.ag)
s(W.J,[W.aP,W.af,W.aO])
s(W.aP,[W.d,P.f])
s(W.d,[W.bP,W.bQ,W.as,W.c7,W.cv])
t(W.aN,W.bE)
t(W.bm,W.aO)
t(W.G,W.a)
t(W.b_,W.G)
t(W.bJ,W.bI)
t(W.bF,W.bJ)
t(W.dL,W.cT)
t(W.cU,P.aW)
t(P.L,P.dd)
t(P.S,P.f)
s(P.S,[P.a4,P.ax,P.aY])
s(P.a4,[P.aL,P.aj,P.av,P.Z])
t(P.aZ,P.aY)
t(P.a1,P.aZ)
u(H.bH,P.a0)
u(H.b1,P.a0)
u(H.b2,H.bk)
u(W.bE,W.c3)
u(W.bI,P.a0)
u(W.bJ,W.aS)})()
var v={mangledGlobalNames:{N:"int",H:"double",b7:"num",e:"String",aA:"bool",t:"Null",v:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.t},{func:1,ret:-1},{func:1,ret:P.H,args:[P.H]},{func:1,args:[,]},{func:1,ret:P.t,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.t,args:[,]},{func:1,ret:P.t,args:[W.G]},{func:1,ret:-1,args:[P.m]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.t,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.m],opt:[P.y]},{func:1,ret:P.t,args:[,],opt:[P.y]},{func:1,ret:[P.U,,],args:[,]},{func:1,ret:P.t,args:[P.e,,]},{func:1,args:[W.a]},{func:1,ret:[P.r,M.p,P.e]},{func:1,ret:P.t,args:[P.e,P.e]},{func:1,ret:-1,args:[P.e,P.e]}],interceptorsByTag:null,leafTags:null};(function constants(){C.e=W.bm.prototype
C.au=J.O.prototype
C.a=J.a9.prototype
C.k=J.bo.prototype
C.d=J.aT.prototype
C.l=J.ah.prototype
C.b=J.ai.prototype
C.av=J.aa.prototype
C.m=H.bt.prototype
C.a3=J.cr.prototype
C.ay=P.av.prototype
C.al=P.Z.prototype
C.aE=P.ax.prototype
C.am=P.a1.prototype
C.J=J.ad.prototype
C.K=new M.p("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X")
C.L=new M.p("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y")
C.o=new M.p("AxA.PHYS_X_START")
C.p=new M.p("AxA.PHYS_X_WIDTH")
C.q=new M.p("AxA.POSITION")
C.M=new M.p("AxA.STROKE")
C.N=new M.p("AxA.STROKE_WIDTH")
C.O=new M.p("AxA.TEXT_COLOR_X")
C.P=new M.p("AxA.TEXT_COLOR_Y")
C.h=new M.p("AxA.TICK_LENGTH")
C.Q=new M.p("AxA.YLEGENDTEXT_DIRECTION")
C.r=new M.p("AxA.XYGRID_STROKE")
C.j=new M.p("AxA.FONT_SIZE")
C.t=new M.p("AxA.XYGRID_STROKE_WIDTH")
C.u=new M.p("AxA.XYGRID_STROKE_OPACITY")
C.v=new M.p("AxA.XYGRID_STROKE_DASH")
C.A=new M.p("AxA.LABELS_OFFSET_Y")
C.w=new M.p("AxA.LEGENDTEXT")
C.B=new M.p("AxA.LEGENDTEXT_OFFSET_X")
C.C=new M.p("AxA.LEGENDTEXT_LEFT_OFFSET_Y")
C.R=new M.p("AxA.LEGENDTEXT_RIGHT_OFFSET_Y")
C.S=new M.p("AxA.NLABELS_X")
C.T=new M.p("AxA.NLABELS_Y")
C.U=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.an=function() {
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
C.as=function(getTagFallback) {
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
C.ao=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.ap=function(hooks) {
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
C.ar=function(hooks) {
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
C.aq=function(hooks) {
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
C.V=function(hooks) { return hooks; }

C.x=new P.cf()
C.at=new P.d5()
C.c=new P.de()
C.aw=new P.ch(null)
C.ax=new P.ci(null)
C.W=new D.C("LegA.BG_COLOR")
C.X=new D.C("LegA.BG_OPACITY")
C.Y=new D.C("LegA.TEXT_COLOR")
C.y=new D.C("LegA.TOP_TITLE")
C.D=new D.C("LegA.SUB_TITLES")
C.Z=new D.C("LegA.BG_WIDTH")
C.a_=new D.C("LegA.BG_HEIGTH")
C.a0=new D.C("LegA.COLORED_RECT_WIDTH")
C.a1=new D.C("LegA.COLORED_RECT_HEIGHT")
C.E=new D.C("LegA.FONT_SIZE")
C.a2=new D.C("LegA.LINESEP")
C.F=new D.C("LegA.X")
C.G=new D.C("LegA.Y")
C.az=new V.o("PyA.POINT_LIST")
C.aA=new V.o("PyA.POINT_LIST_STROKE")
C.n=new V.o("PyA.REFYMAX")
C.a4=new V.o("PyA.ROTATE")
C.a5=new V.o("PyA.SELECTION_ICON_WIDTH")
C.a6=new V.o("PyA.SELECTION_ICON_OUTSIDE")
C.aB=new V.o("PyA.SHOW_LEGEND")
C.f=new V.o("PyA.STROKE")
C.a7=new V.o("PyA.STROKE_WIDTH")
C.a8=new V.o("PyA.COMPRESSION_LENGTH")
C.aC=new V.o("PyA.STROKE_WIDTH_HILITE")
C.a9=new V.o("PyA.XSCALE")
C.aa=new V.o("PyA.XSHIFT")
C.ab=new V.o("PyA.YIX1")
C.ac=new V.o("PyA.YSCALE")
C.ad=new V.o("PyA.YSCALE2")
C.ae=new V.o("PyA.YSHIFT1")
C.af=new V.o("PyA.YSHIFT2")
C.i=new V.o("PyA.YPOSITION_ZERO")
C.aD=new V.o("PyA.YPOSITION_ZERO_RESET")
C.ag=new V.o("PyA.DRAW_OUTSIDE_Y_VIEWPORT")
C.H=new V.o("PyA.OVERRIDE_IXFIRST")
C.I=new V.o("PyA.OVERRIDE_IXLAST")
C.ah=new V.o("PyA.DRAW_SELECTION_ICON")
C.ai=new V.o("PyA.INSETX")
C.aj=new V.o("PyA.INSETY")
C.z=new V.o("PyA.MARKER_TEXT")
C.ak=new V.o("PyA.MARKER_FONTSIZE")})();(function staticFields(){$.a3=0
$.aI=null
$.e6=null
$.dN=!1
$.eE=null
$.ew=null
$.eK=null
$.ds=null
$.dx=null
$.dU=null
$.ay=null
$.b3=null
$.b4=null
$.dO=!1
$.x=C.c
$.P=[]
$.dB=P.u([C.j,"18",C.K,"50",C.L,"10",C.A,"2",C.w,"",C.B,"20",C.C,"30",C.R,"30",C.S,'{"100":"2", "200":"4", "300":"8", "400":"10", "500":"10", "600":"10", "700":"10"}',C.T,'{"100":"7", "200":"7", "300":"12", "400":"12", "500":"12", "600":"12", "700":"12"}',C.q,"bg",C.M,"black",C.N,"1",C.O,"black",C.P,"black",C.h,"6",C.Q,"bt",C.r,"#A9A9A9",C.t,"1.0",C.u,"0.3",C.v,"0,0"],M.p,P.e)
$.fH=P.u([C.r,"#A9A9A9",C.t,"1.0",C.u,"0.3",C.v,"0,0"],M.p,P.e)
$.ee=P.u([C.W,"lightgrey",C.X,"0.2",C.Z,"0",C.a_,"100",C.a0,"20",C.a1,"12",C.E,"16",C.a2,"4",C.F,"12",C.G,"12",C.Y,"black",C.y,""],D.C,P.e)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ho","eO",function(){return H.eD("_$dart_dartClosure")})
u($,"hp","dX",function(){return H.eD("_$dart_js")})
u($,"hs","eP",function(){return H.a6(H.cF({
toString:function(){return"$receiver$"}}))})
u($,"ht","eQ",function(){return H.a6(H.cF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"hu","eR",function(){return H.a6(H.cF(null))})
u($,"hv","eS",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hy","eV",function(){return H.a6(H.cF(void 0))})
u($,"hz","eW",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hx","eU",function(){return H.a6(H.ek(null))})
u($,"hw","eT",function(){return H.a6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"hB","eY",function(){return H.a6(H.ek(void 0))})
u($,"hA","eX",function(){return H.a6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"hD","dY",function(){return P.fI()})
u($,"hq","dA",function(){return P.u([C.a8,"1024",C.ag,"true",C.ah,"false",C.ai,"16",C.aj,"12",C.ak,"16",C.n,"null",C.a5,"16",C.a6,"false",C.aB,"true",C.f,"blue",C.a7,"1",C.aC,"2",C.a9,"1.0",C.aa,"0",C.ab,"0.0",C.ac,"1",C.ae,"0",C.af,"0",C.i,"0.9",C.aD,"0.9"],V.o,P.e)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.O,MediaError:J.O,Navigator:J.O,NavigatorConcurrentHardware:J.O,NavigatorUserMediaError:J.O,OverconstrainedError:J.O,PositionError:J.O,SQLError:J.O,ArrayBufferView:H.bw,Float64Array:H.bt,HTMLAudioElement:W.d,HTMLBRElement:W.d,HTMLBaseElement:W.d,HTMLBodyElement:W.d,HTMLButtonElement:W.d,HTMLCanvasElement:W.d,HTMLContentElement:W.d,HTMLDListElement:W.d,HTMLDataElement:W.d,HTMLDataListElement:W.d,HTMLDetailsElement:W.d,HTMLDialogElement:W.d,HTMLEmbedElement:W.d,HTMLFieldSetElement:W.d,HTMLHRElement:W.d,HTMLHeadElement:W.d,HTMLHeadingElement:W.d,HTMLHtmlElement:W.d,HTMLIFrameElement:W.d,HTMLImageElement:W.d,HTMLInputElement:W.d,HTMLLIElement:W.d,HTMLLabelElement:W.d,HTMLLegendElement:W.d,HTMLLinkElement:W.d,HTMLMapElement:W.d,HTMLMediaElement:W.d,HTMLMenuElement:W.d,HTMLMetaElement:W.d,HTMLMeterElement:W.d,HTMLModElement:W.d,HTMLOListElement:W.d,HTMLObjectElement:W.d,HTMLOptGroupElement:W.d,HTMLOptionElement:W.d,HTMLOutputElement:W.d,HTMLParagraphElement:W.d,HTMLParamElement:W.d,HTMLPictureElement:W.d,HTMLPreElement:W.d,HTMLProgressElement:W.d,HTMLQuoteElement:W.d,HTMLScriptElement:W.d,HTMLShadowElement:W.d,HTMLSlotElement:W.d,HTMLSourceElement:W.d,HTMLSpanElement:W.d,HTMLStyleElement:W.d,HTMLTableCaptionElement:W.d,HTMLTableCellElement:W.d,HTMLTableDataCellElement:W.d,HTMLTableHeaderCellElement:W.d,HTMLTableColElement:W.d,HTMLTableElement:W.d,HTMLTableRowElement:W.d,HTMLTableSectionElement:W.d,HTMLTemplateElement:W.d,HTMLTextAreaElement:W.d,HTMLTimeElement:W.d,HTMLTitleElement:W.d,HTMLTrackElement:W.d,HTMLUListElement:W.d,HTMLUnknownElement:W.d,HTMLVideoElement:W.d,HTMLDirectoryElement:W.d,HTMLFontElement:W.d,HTMLFrameElement:W.d,HTMLFrameSetElement:W.d,HTMLMarqueeElement:W.d,HTMLElement:W.d,HTMLAnchorElement:W.bP,HTMLAreaElement:W.bQ,CDATASection:W.af,CharacterData:W.af,Comment:W.af,ProcessingInstruction:W.af,Text:W.af,CSSStyleDeclaration:W.aN,MSStyleCSSProperties:W.aN,CSS2Properties:W.aN,HTMLDivElement:W.as,XMLDocument:W.aO,Document:W.aO,DOMException:W.c5,Element:W.aP,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,Window:W.ag,DOMWindow:W.ag,EventTarget:W.ag,HTMLFormElement:W.c7,HTMLDocument:W.bm,DocumentFragment:W.J,ShadowRoot:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,HTMLSelectElement:W.cv,TouchEvent:W.b_,CompositionEvent:W.G,FocusEvent:W.G,KeyboardEvent:W.G,MouseEvent:W.G,DragEvent:W.G,PointerEvent:W.G,TextEvent:W.G,WheelEvent:W.G,UIEvent:W.G,NamedNodeMap:W.bF,MozNamedAttrMap:W.bF,SVGCircleElement:P.aL,SVGEllipseElement:P.a4,SVGPathElement:P.a4,SVGPolygonElement:P.a4,SVGGeometryElement:P.a4,SVGAElement:P.S,SVGClipPathElement:P.S,SVGDefsElement:P.S,SVGForeignObjectElement:P.S,SVGGElement:P.S,SVGImageElement:P.S,SVGSwitchElement:P.S,SVGUseElement:P.S,SVGGraphicsElement:P.S,SVGLineElement:P.aj,SVGPolylineElement:P.av,SVGRectElement:P.Z,SVGAnimateElement:P.f,SVGAnimateMotionElement:P.f,SVGAnimateTransformElement:P.f,SVGAnimationElement:P.f,SVGDescElement:P.f,SVGDiscardElement:P.f,SVGFEBlendElement:P.f,SVGFEColorMatrixElement:P.f,SVGFEComponentTransferElement:P.f,SVGFECompositeElement:P.f,SVGFEConvolveMatrixElement:P.f,SVGFEDiffuseLightingElement:P.f,SVGFEDisplacementMapElement:P.f,SVGFEDistantLightElement:P.f,SVGFEFloodElement:P.f,SVGFEFuncAElement:P.f,SVGFEFuncBElement:P.f,SVGFEFuncGElement:P.f,SVGFEFuncRElement:P.f,SVGFEGaussianBlurElement:P.f,SVGFEImageElement:P.f,SVGFEMergeElement:P.f,SVGFEMergeNodeElement:P.f,SVGFEMorphologyElement:P.f,SVGFEOffsetElement:P.f,SVGFEPointLightElement:P.f,SVGFESpecularLightingElement:P.f,SVGFESpotLightElement:P.f,SVGFETileElement:P.f,SVGFETurbulenceElement:P.f,SVGFilterElement:P.f,SVGLinearGradientElement:P.f,SVGMarkerElement:P.f,SVGMaskElement:P.f,SVGMetadataElement:P.f,SVGPatternElement:P.f,SVGRadialGradientElement:P.f,SVGScriptElement:P.f,SVGSetElement:P.f,SVGStopElement:P.f,SVGStyleElement:P.f,SVGSymbolElement:P.f,SVGTitleElement:P.f,SVGViewElement:P.f,SVGGradientElement:P.f,SVGComponentTransferFunctionElement:P.f,SVGFEDropShadowElement:P.f,SVGMPathElement:P.f,SVGElement:P.f,SVGSVGElement:P.ax,SVGTextPathElement:P.aY,SVGTextContentElement:P.aY,SVGTextElement:P.a1,SVGTSpanElement:P.aZ,SVGTextPositioningElement:P.aZ})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Float64Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGCircleElement:true,SVGEllipseElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGImageElement:true,SVGSwitchElement:true,SVGUseElement:true,SVGGraphicsElement:false,SVGLineElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPatternElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTextElement:true,SVGTSpanElement:true,SVGTextPositioningElement:false})
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.b1.$nativeSuperclassTag="ArrayBufferView"
H.b2.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.eH,[])
else U.eH([])})})()
//# sourceMappingURL=example.dart.js.map
