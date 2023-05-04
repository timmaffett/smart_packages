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
a[c]=function(){a[c]=function(){H.hN(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ec"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ec"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ec(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={e3:function e3(){},
dY:function(a,b,c){if(H.aL(a,"$iI",[b],"$aI"))return new H.d5(a,[b,c])
return new H.bn(a,[b,c])},
cm:function(){return new P.bN("No element")},
bo:function bo(a,b){this.a=a
this.$ti=b},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bq:function bq(a,b){this.a=a
this.$ti=b},
bm:function bm(a,b){this.a=a
this.$ti=b},
d2:function d2(){},
cc:function cc(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b){this.a=a
this.$ti=b},
d3:function d3(){},
aR:function aR(a,b){this.a=a
this.$ti=b},
aS:function aS(a,b){this.a=a
this.$ti=b},
cd:function cd(a,b){this.a=a
this.b=b},
I:function I(){},
b1:function b1(){},
bD:function bD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bu:function bu(){},
bS:function bS(){},
aO:function(a){var u,t=H.hO(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
hx:function(a){return v.types[H.U(a)]},
hC:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.H(a).$ibz},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.W(a)
if(typeof u!=="string")throw H.k(H.be(a))
return u},
b3:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
h_:function(a,b){var u,t
if(typeof a!=="string")H.ao(H.be(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.b(u,3)
t=H.B(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
fZ:function(a){var u,t
if(typeof a!=="string")H.ao(H.be(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.fD(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bJ:function(a){return H.fY(a)+H.eb(H.ay(a),0,null)},
fY:function(a){var u,t,s,r,q,p,o,n=J.H(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.aw||!!n.$iaj){r=C.V(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aO(t.length>1&&C.b.a3(t,0)===36?C.b.br(t,1):t)},
Z:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aY(u,10))>>>0,56320|u&1023)}throw H.k(P.a9(a,0,1114111,null,null))},
c:function(a){throw H.k(H.be(a))},
b:function(a,b){if(a==null)J.L(a)
throw H.k(H.aw(a,b))},
aw:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,s,null)
u=H.U(J.L(a))
if(!(b<0)){if(typeof u!=="number")return H.c(u)
t=b>=u}else t=!0
if(t)return P.e0(b,a,s,null,u)
return P.cF(b,s)},
be:function(a){return new P.ad(!0,a,null,null)},
f1:function(a){if(typeof a!=="number")throw H.k(H.be(a))
return a},
k:function(a){var u
if(a==null)a=new P.b2()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.fe})
u.name=""}else u.toString=H.fe
return u},
fe:function(){return J.W(this.dartException)},
ao:function(a){throw H.k(a)},
fd:function(a){throw H.k(P.bt(a))},
ab:function(a){var u,t,s,r,q,p
a=H.fc(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.n([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
eI:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
eE:function(a,b){return new H.cC(a,b==null?null:b.method)},
e4:function(a,b){var u=b==null,t=u?null:b.method
return new H.cq(a,t,u?null:b.receiver)},
R:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.dU(a)
if(a==null)return
if(a instanceof H.aZ)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aY(t,16)&8191)===10)switch(s){case 438:return f.$1(H.e4(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.eE(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.fg()
q=$.fh()
p=$.fi()
o=$.fj()
n=$.fm()
m=$.fn()
l=$.fl()
$.fk()
k=$.fp()
j=$.fo()
i=r.F(u)
if(i!=null)return f.$1(H.e4(H.B(u),i))
else{i=q.F(u)
if(i!=null){i.method="call"
return f.$1(H.e4(H.B(u),i))}else{i=p.F(u)
if(i==null){i=o.F(u)
if(i==null){i=n.F(u)
if(i==null){i=m.F(u)
if(i==null){i=l.F(u)
if(i==null){i=o.F(u)
if(i==null){i=k.F(u)
if(i==null){i=j.F(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.eE(H.B(u),i))}}return f.$1(new H.cT(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.bM()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ad(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.bM()
return a},
an:function(a){var u
if(a instanceof H.aZ)return a.b
if(a==null)return new H.bR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.bR(a)},
hu:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.i(0,a[u],a[t])}return b},
hB:function(a,b,c,d,e,f){H.o(a,"$ie_")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(new P.d9("Unsupported number of arguments for wrapped closure"))},
bf:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hB)
a.$identity=u
return u},
fL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.cK().constructor.prototype):Object.create(new H.aP(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a7
if(typeof t!=="number")return t.l()
$.a7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ev(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.fH(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ev(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
fH:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.hx,a)
if(typeof a=="function")if(b)return a
else{u=c?H.et:H.dX
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.k("Error in functionType of tearoff")},
fI:function(a,b,c,d){var u=H.dX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ev:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fK(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.fI(t,!r,u,b)
if(t===0){r=$.a7
if(typeof r!=="number")return r.l()
$.a7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.aQ
return new Function(r+H.h(q==null?$.aQ=H.ca("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a7
if(typeof r!=="number")return r.l()
$.a7=r+1
o+=r
r="return function("+o+"){return this."
q=$.aQ
return new Function(r+H.h(q==null?$.aQ=H.ca("self"):q)+"."+H.h(u)+"("+o+");}")()},
fJ:function(a,b,c,d){var u=H.dX,t=H.et
switch(b?-1:a){case 0:throw H.k(H.h2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fK:function(a,b){var u,t,s,r,q,p,o,n=$.aQ
if(n==null)n=$.aQ=H.ca("self")
u=$.es
if(u==null)u=$.es=H.ca("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.fJ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.a7
if(typeof u!=="number")return u.l()
$.a7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.a7
if(typeof u!=="number")return u.l()
$.a7=u+1
return new Function(n+u+"}")()},
ec:function(a,b,c,d,e,f,g){return H.fL(a,b,c,d,!!e,!!f,g)},
dX:function(a){return a.a},
et:function(a){return a.c},
ca:function(a){var u,t,s,r=new H.aP("self","target","receiver","name"),q=J.e1(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
aK:function(a){if(a==null)H.hn("boolean expression must not be null")
return a},
B:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.a5(a,"String"))},
ed:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.a5(a,"double"))},
i9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.a5(a,"num"))},
i5:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.a5(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.a5(a,"int"))},
fa:function(a,b){throw H.k(H.a5(a,H.aO(H.B(b).substring(2))))},
hJ:function(a,b){throw H.k(H.eu(a,H.aO(H.B(b).substring(2))))},
o:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.fa(a,b)},
f7:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else u=!0
if(u)return a
H.hJ(a,b)},
hE:function(a){if(a==null)return a
if(!!J.H(a).$ia)return a
throw H.k(H.a5(a,"List<dynamic>"))},
hD:function(a,b){var u
if(a==null)return a
u=J.H(a)
if(!!u.$ia)return a
if(u[b])return a
H.fa(a,b)},
f2:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.U(u)]
else return a.$S()}return},
aM:function(a,b){var u
if(typeof a=="function")return!0
u=H.f2(J.H(a))
if(u==null)return!1
return H.eQ(u,null,b,null)},
p:function(a,b){var u,t
if(a==null)return a
if($.e8)return a
$.e8=!0
try{if(H.aM(a,b))return a
u=H.bX(b)
t=H.a5(a,u)
throw H.k(t)}finally{$.e8=!1}},
bg:function(a,b){if(a!=null&&!H.dK(a,b))H.ao(H.a5(a,H.bX(b)))
return a},
a5:function(a,b){return new H.cR("TypeError: "+P.aY(a)+": type '"+H.h(H.eW(a))+"' is not a subtype of type '"+b+"'")},
eu:function(a,b){return new H.cb("CastError: "+P.aY(a)+": type '"+H.h(H.eW(a))+"' is not a subtype of type '"+b+"'")},
eW:function(a){var u,t=J.H(a)
if(!!t.$iaU){u=H.f2(t)
if(u!=null)return H.bX(u)
return"Closure"}return H.bJ(a)},
hn:function(a){throw H.k(new H.cW(a))},
hN:function(a){throw H.k(new P.cg(a))},
h2:function(a){return new H.cG(a)},
f5:function(a){return v.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
ay:function(a){if(a==null)return
return a.$ti},
i8:function(a,b,c){return H.aN(a["$a"+H.h(c)],H.ay(b))},
ef:function(a,b,c,d){var u=H.aN(a["$a"+H.h(c)],H.ay(b))
return u==null?null:u[d]},
Q:function(a,b,c){var u=H.aN(a["$a"+H.h(b)],H.ay(a))
return u==null?null:u[c]},
i:function(a,b){var u=H.ay(a)
return u==null?null:u[b]},
bX:function(a){return H.av(a,null)},
av:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aO(a[0].name)+H.eb(a,1,b)
if(typeof a=="function")return H.aO(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.h(b[t])}if('func' in a)return H.hg(a,b)
if('futureOr' in a)return"FutureOr<"+H.av("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
hg:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.n([],[P.f])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.n(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.b.l(p,a0[m])
l=u[q]
if(l!=null&&l!==P.r)p+=" extends "+H.av(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.av(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.av(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.av(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ht(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.B(n[g])
i=i+h+H.av(d[c],a0)+(" "+H.h(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
eb:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aE("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.av(p,c)}return"<"+u.j(0)+">"},
aN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aL:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ay(a)
t=J.H(a)
if(t[b]==null)return!1
return H.f_(H.aN(t[d],u),null,c,null)},
j:function(a,b,c,d){if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.k(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aO(b.substring(2))+H.eb(c,0,null),v.mangledGlobalNames)))},
f_:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.a1(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.a1(a[t],b,c[t],d))return!1
return!0},
i6:function(a,b,c){return a.apply(b,H.aN(J.H(b)["$a"+H.h(c)],H.ay(b)))},
f8:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="r"||a.name==="y"||a===-1||a===-2||H.f8(u)}return!1},
dK:function(a,b){var u,t
if(a==null)return b==null||b.name==="r"||b.name==="y"||b===-1||b===-2||H.f8(b)
if(b==null||b===-1||b.name==="r"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aM(a,b)}u=J.H(a).constructor
t=H.ay(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.a1(u,null,b,null)},
V:function(a,b){if(a!=null&&!H.dK(a,b))throw H.k(H.eu(a,H.bX(b)))
return a},
q:function(a,b){if(a!=null&&!H.dK(a,b))throw H.k(H.a5(a,H.bX(b)))
return a},
a1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="r"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="r"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="y")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.a1("type" in a?a.type:l,b,s,d)
else if(H.a1(a,b,s,d))return!0
else{if(!('$i'+"X" in t.prototype))return!1
r=t.prototype["$a"+"X"]
q=H.aN(r,u?a.slice(1):l)
return H.a1(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.eQ(a,b,c,d)
if('func' in a)return c.name==="e_"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.f_(H.aN(m,u),b,p,d)},
eQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.a1(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.a1(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.a1(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.a1(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.hH(h,b,g,d)},
hH:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.a1(c[s],d,a[s],b))return!1}return!0},
i7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hF:function(a){var u,t,s,r,q=H.B($.f6.$1(a)),p=$.dL[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dQ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.B($.eZ.$2(a,q))
if(q!=null){p=$.dL[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dQ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dT(u)
$.dL[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.dQ[q]=u
return u}if(s==="-"){r=H.dT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.f9(a,u)
if(s==="*")throw H.k(P.eJ(q))
if(v.leafTags[q]===true){r=H.dT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.f9(a,u)},
f9:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.eh(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dT:function(a){return J.eh(a,!1,null,!!a.$ibz)},
hG:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dT(u)
else return J.eh(u,c,null,null)},
hz:function(){if(!0===$.eg)return
$.eg=!0
H.hA()},
hA:function(){var u,t,s,r,q,p,o,n
$.dL=Object.create(null)
$.dQ=Object.create(null)
H.hy()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.fb.$1(q)
if(p!=null){o=H.hG(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
hy:function(){var u,t,s,r,q,p,o=C.ap()
o=H.aJ(C.aq,H.aJ(C.ar,H.aJ(C.W,H.aJ(C.W,H.aJ(C.as,H.aJ(C.at,H.aJ(C.au(C.V),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.f6=new H.dN(r)
$.eZ=new H.dO(q)
$.fb=new H.dP(p)},
aJ:function(a,b){return a(b)||b},
ei:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
hs:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
fc:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hL:function(a,b,c){var u=H.hM(a,b,c)
return u},
hM:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.fc(b),'g'),H.hs(c))},
cP:function cP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cC:function cC(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a){this.a=a},
aZ:function aZ(a,b){this.a=a
this.b=b},
dU:function dU(a){this.a=a},
bR:function bR(a){this.a=a
this.b=null},
aU:function aU(){},
cO:function cO(){},
cK:function cK(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cR:function cR(a){this.a=a},
cb:function cb(a){this.a=a},
cG:function cG(a){this.a=a},
cW:function cW(a){this.a=a},
ah:function ah(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cp:function cp(a){this.a=a},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cx:function cx(a,b){this.a=a
this.$ti=b},
cy:function cy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dN:function dN(a){this.a=a},
dO:function dO(a){this.a=a},
dP:function dP(a){this.a=a},
hf:function(a){return a},
eP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.aw(b,a))},
bH:function bH(){},
bF:function bF(){},
bG:function bG(){},
bE:function bE(){},
b9:function b9(){},
ba:function ba(){},
ht:function(a){return J.fQ(a?Object.keys(a):[],null)},
hO:function(a){return v.mangledGlobalNames[a]}},J={
eh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bV:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.eg==null){H.hz()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.k(P.eJ("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ej()]
if(r!=null)return r
r=H.hF(a)
if(r!=null)return r
if(typeof a=="function")return C.ax
u=Object.getPrototypeOf(a)
if(u==null)return C.a3
if(u===Object.prototype)return C.a3
if(typeof s=="function"){Object.defineProperty(s,$.ej(),{value:C.K,enumerable:false,writable:true,configurable:true})
return C.K}return C.K},
fQ:function(a,b){return J.e1(H.n(a,[b]))},
e1:function(a){a.fixed$length=Array
return a},
ex:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fR:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.a3(a,b)
if(t!==32&&t!==13&&!J.ex(t))break;++b}return b},
fS:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.b2(a,u)
if(t!==32&&t!==13&&!J.ex(t))break}return b},
H:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b0.prototype
return J.by.prototype}if(typeof a=="string")return J.as.prototype
if(a==null)return J.co.prototype
if(typeof a=="boolean")return J.cn.prototype
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.r)return a
return J.bV(a)},
hv:function(a){if(typeof a=="number")return J.ar.prototype
if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.r)return a
return J.bV(a)},
am:function(a){if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.r)return a
return J.bV(a)},
ax:function(a){if(a==null)return a
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.r)return a
return J.bV(a)},
hw:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b0.prototype
return J.ar.prototype}if(a==null)return a
if(!(a instanceof P.r))return J.aj.prototype
return a},
ee:function(a){if(typeof a=="number")return J.ar.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aj.prototype
return a},
f3:function(a){if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aj.prototype
return a},
dM:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.r)return a
return J.bV(a)},
f4:function(a){if(a==null)return a
if(!(a instanceof P.r))return J.aj.prototype
return a},
fq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hv(a).l(a,b)},
ac:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).V(a,b)},
t:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.am(a).h(a,b)},
a2:function(a,b,c){return J.ax(a).i(a,b,c)},
fr:function(a,b,c,d){return J.dM(a).by(a,b,c,d)},
fs:function(a,b,c,d){return J.dM(a).bK(a,b,c,d)},
ft:function(a,b,c){return J.dM(a).bL(a,b,c)},
bY:function(a,b,c){return J.dM(a).bM(a,b,c)},
fu:function(a){if(typeof a==="number")return Math.abs(a)
return J.hw(a).P(a)},
bZ:function(a,b){return J.ax(a).n(a,b)},
fv:function(a,b){return J.f4(a).A(a,b)},
el:function(a,b){return J.ax(a).L(a,b)},
fw:function(a,b,c){return J.ax(a).R(a,b,c)},
fx:function(a,b){return J.ax(a).J(a,b)},
fy:function(a){return J.ax(a).ga9(a)},
em:function(a){return J.H(a).gu(a)},
en:function(a){return J.am(a).gv(a)},
fz:function(a){return J.am(a).gN(a)},
c_:function(a){return J.ax(a).gw(a)},
fA:function(a){return J.ax(a).gac(a)},
L:function(a){return J.am(a).gk(a)},
az:function(a){return J.ee(a).a1(a)},
fB:function(a,b){return J.f4(a).scw(a,b)},
W:function(a){return J.H(a).j(a)},
fC:function(a,b){return J.ee(a).cK(a,b)},
c0:function(a,b){return J.ee(a).bh(a,b)},
fD:function(a){return J.f3(a).bj(a)},
S:function S(){},
cn:function cn(){},
co:function co(){},
bA:function bA(){},
cD:function cD(){},
aj:function aj(){},
ag:function ag(){},
af:function af(a){this.$ti=a},
e2:function e2(a){this.$ti=a},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ar:function ar(){},
b0:function b0(){},
by:function by(){},
as:function as(){}},P={
h6:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ho()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bf(new P.d_(s),1)).observe(u,{childList:true})
return new P.cZ(s,u,t)}else if(self.setImmediate!=null)return P.hp()
return P.hq()},
h7:function(a){self.scheduleImmediate(H.bf(new P.d0(H.p(a,{func:1,ret:-1})),0))},
h8:function(a){self.setImmediate(H.bf(new P.d1(H.p(a,{func:1,ret:-1})),0))},
h9:function(a){H.p(a,{func:1,ret:-1})
P.hb(0,a)},
hb:function(a,b){var u=new P.dC()
u.bx(a,b)
return u},
eR:function(a){return new P.cX(new P.F($.A,[a]),[a])},
eO:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
hc:function(a,b){P.hd(a,b)},
eN:function(a,b){b.ar(0,a)},
eM:function(a,b){b.b3(H.R(a),H.an(a))},
hd:function(a,b){var u,t=null,s=new P.dF(b),r=new P.dG(b),q=J.H(a)
if(!!q.$iF)a.aZ(s,r,t)
else if(!!q.$iX)a.aF(s,r,t)
else{u=new P.F($.A,[null])
H.q(a,null)
u.a=4
u.c=a
u.aZ(s,t,t)}},
eX:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.A.aC(new P.dJ(u),P.y,P.K,null)},
eL:function(a,b){var u,t,s
b.a=1
try{a.aF(new P.de(b),new P.df(b),null)}catch(s){u=H.R(s)
t=H.an(s)
P.hK(new P.dg(b,u,t))}},
dd:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.o(a.c,"$iF")
if(u>=4){t=b.a6()
b.a=a.a
b.c=a.c
P.aG(b,t)}else{t=H.o(b.c,"$ia6")
b.a=2
b.c=a
a.aX(t)}},
aG:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.o(g.c,"$iO")
P.bd(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.aG(h.a,b)}g=h.a
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
if(m){H.o(q,"$iO")
P.bd(i,i,g.b,q.a,q.b)
return}l=$.A
if(l!==n)$.A=n
else l=i
g=b.c
if((g&15)===8)new P.dl(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.dk(u,b,q).$0()}else if((g&2)!==0)new P.dj(h,u,b).$0()
if(l!=null)$.A=l
g=u.b
if(!!J.H(g).$iX){if(g.a>=4){k=H.o(o.c,"$ia6")
o.c=null
b=o.a7(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.dd(g,o)
return}}j=b.b
k=H.o(j.c,"$ia6")
j.c=null
b=j.a7(k)
g=u.a
p=u.b
if(!g){H.q(p,H.i(j,0))
j.a=4
j.c=p}else{H.o(p,"$iO")
j.a=8
j.c=p}h.a=j
g=j}},
hk:function(a,b){if(H.aM(a,{func:1,args:[P.r,P.C]}))return b.aC(a,null,P.r,P.C)
if(H.aM(a,{func:1,args:[P.r]}))return H.p(a,{func:1,ret:null,args:[P.r]})
throw H.k(P.eo(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
hi:function(){var u,t
for(;u=$.aH,u!=null;){$.bc=null
t=u.b
$.aH=t
if(t==null)$.bb=null
u.a.$0()}},
hm:function(){$.e9=!0
try{P.hi()}finally{$.bc=null
$.e9=!1
if($.aH!=null)$.ek().$1(P.f0())}},
eV:function(a){var u=new P.bO(a)
if($.aH==null){$.aH=$.bb=u
if(!$.e9)$.ek().$1(P.f0())}else $.bb=$.bb.b=u},
hl:function(a){var u,t,s=$.aH
if(s==null){P.eV(a)
$.bc=$.bb
return}u=new P.bO(a)
t=$.bc
if(t==null){u.b=s
$.aH=$.bc=u}else{u.b=t.b
$.bc=t.b=u
if(u.b==null)$.bb=u}},
hK:function(a){var u=null,t=$.A
if(C.c===t){P.aI(u,u,C.c,a)
return}P.aI(u,u,t,H.p(t.b0(a),{func:1,ret:-1}))},
hS:function(a,b){if(a==null)H.ao(P.fE("stream"))
return new P.dB([b])},
bd:function(a,b,c,d,e){var u={}
u.a=d
P.hl(new P.dI(u,e))},
eS:function(a,b,c,d,e){var u,t=$.A
if(t===c)return d.$0()
$.A=c
u=t
try{t=d.$0()
return t}finally{$.A=u}},
eU:function(a,b,c,d,e,f,g){var u,t=$.A
if(t===c)return d.$1(e)
$.A=c
u=t
try{t=d.$1(e)
return t}finally{$.A=u}},
eT:function(a,b,c,d,e,f,g,h,i){var u,t=$.A
if(t===c)return d.$2(e,f)
$.A=c
u=t
try{t=d.$2(e,f)
return t}finally{$.A=u}},
aI:function(a,b,c,d){var u
H.p(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.b0(d):c.c0(d,-1)
P.eV(d)},
d_:function d_(a){this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
dC:function dC(){},
dD:function dD(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=!1
this.$ti=b},
dF:function dF(a){this.a=a},
dG:function dG(a){this.a=a},
dJ:function dJ(a){this.a=a},
d4:function d4(){},
cY:function cY(a,b){this.a=a
this.$ti=b},
a6:function a6(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
F:function F(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
da:function da(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dm:function dm(a){this.a=a},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a){this.a=a
this.b=null},
au:function au(){},
cM:function cM(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
b4:function b4(){},
aa:function aa(){},
dB:function dB(a){this.$ti=a},
O:function O(a,b){this.a=a
this.b=b},
dE:function dE(){},
dI:function dI(a,b){this.a=a
this.b=b},
dx:function dx(){},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fT:function(a,b){return new H.ah([a,b])},
z:function(a,b,c){return H.j(H.hu(a,new H.ah([b,c])),"$ieB",[b,c],"$aeB")},
eC:function(a,b){return new H.ah([a,b])},
fP:function(a,b,c){var u,t
if(P.ea(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.n([],[P.f])
C.a.n($.T,a)
try{P.hh(a,u)}finally{if(0>=$.T.length)return H.b($.T,-1)
$.T.pop()}t=P.eH(b,H.hD(u,"$iM"),", ")+c
return t.charCodeAt(0)==0?t:t},
ew:function(a,b,c){var u,t
if(P.ea(a))return b+"..."+c
u=new P.aE(b)
C.a.n($.T,a)
try{t=u
t.a=P.eH(t.a,a,", ")}finally{if(0>=$.T.length)return H.b($.T,-1)
$.T.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ea:function(a){var u,t
for(u=$.T.length,t=0;t<u;++t)if(a===$.T[t])return!0
return!1},
hh:function(a,b){var u,t,s,r,q,p,o,n=a.gw(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.h(n.gt())
C.a.n(b,u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gt();++l
if(!n.q()){if(l<=4){C.a.n(b,H.h(r))
return}t=H.h(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gt();++l
for(;n.q();r=q,q=p){p=n.gt();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}C.a.n(b,"...")
return}}s=H.h(r)
t=H.h(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.n(b,o)
C.a.n(b,s)
C.a.n(b,t)},
ai:function(a,b,c){var u=P.fT(b,c)
a.B(0,new P.cz(u,b,c))
return u},
eD:function(a){var u,t={}
if(P.ea(a))return"{...}"
u=new P.aE("")
try{C.a.n($.T,a)
u.a+="{"
t.a=!0
a.B(0,new P.cB(t,u))
u.a+="}"}finally{if(0>=$.T.length)return H.b($.T,-1)
$.T.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(){},
cA:function cA(){},
cB:function cB(a,b){this.a=a
this.b=b},
a_:function a_(){},
hj:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.k(H.be(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.R(s)
r=P.dZ(String(t),null)
throw H.k(r)}r=P.dH(u)
return r},
dH:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.dq(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.dH(a[u])
return a},
ey:function(a,b,c){return new P.bB(a,b)},
he:function(a){return a.cZ()},
ha:function(a,b,c){var u,t=new P.aE(""),s=new P.dt(t,[],P.hr())
s.af(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
dq:function dq(a,b){this.a=a
this.b=b
this.c=null},
ds:function ds(a){this.a=a},
dr:function dr(a){this.a=a},
br:function br(){},
ae:function ae(){},
bB:function bB(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
cr:function cr(){},
cu:function cu(a){this.b=a},
ct:function ct(a){this.a=a},
du:function du(){},
dv:function dv(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c){this.c=a
this.a=b
this.b=c},
x:function(a){var u=H.h_(a,null)
if(u!=null)return u
throw H.k(P.dZ(a,null))},
G:function(a){var u=H.fZ(a)
if(u!=null)return u
throw H.k(P.dZ("Invalid double",a))},
fO:function(a){if(a instanceof H.aU)return a.j(0)
return"Instance of '"+H.h(H.bJ(a))+"'"},
fU:function(a,b,c){var u,t=[c],s=H.n([],t)
for(u=J.c_(a);u.q();)C.a.n(s,H.q(u.gt(),c))
if(b)return s
return H.j(J.e1(s),"$ia",t,"$aa")},
eH:function(a,b,c){var u=J.c_(b)
if(!u.q())return a
if(c.length===0){do a+=H.h(u.gt())
while(u.q())}else{a+=H.h(u.gt())
for(;u.q();)a=a+c+H.h(u.gt())}return a},
aY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.W(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fO(a)},
eo:function(a,b,c){return new P.ad(!0,a,b,c)},
fE:function(a){return new P.ad(!1,null,a,"Must not be null")},
cF:function(a,b){return new P.bK(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.bK(b,c,!0,a,d,"Invalid value")},
h1:function(a,b,c){if(0>a||a>c)throw H.k(P.a9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.k(P.a9(b,a,c,"end",null))
return b}return c},
h0:function(a,b){if(typeof a!=="number")return a.I()
if(a<0)throw H.k(P.a9(a,0,null,b,null))},
e0:function(a,b,c,d,e){var u=H.U(e==null?J.L(b):e)
return new P.cl(u,!0,a,c,"Index out of range")},
ak:function(a){return new P.cU(a)},
eJ:function(a){return new P.cS(a)},
e5:function(a){return new P.bN(a)},
bt:function(a){return new P.ce(a)},
dZ:function(a,b){return new P.ck(a,b)},
fV:function(a,b,c,d,e){return new H.aS(a,[b,c,d,e])},
al:function al(){},
d:function d(){},
aB:function aB(){},
c3:function c3(){},
b2:function b2(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cl:function cl(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cU:function cU(a){this.a=a},
cS:function cS(a){this.a=a},
bN:function bN(a){this.a=a},
ce:function ce(a){this.a=a},
bM:function bM(){},
cg:function cg(a){this.a=a},
d9:function d9(a){this.a=a},
ck:function ck(a,b){this.a=a
this.b=b},
K:function K(){},
M:function M(){},
a:function a(){},
u:function u(){},
y:function y(){},
bh:function bh(){},
r:function r(){},
C:function C(){},
f:function f(){},
aE:function aE(a){this.a=a},
dp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bL:function(a,b,c,d,e){var u=H.q(c<0?-c*0:c,e)
return new P.P(a,b,u,H.q(d<0?-d*0:d,e),[e])},
dn:function dn(){},
dw:function dw(){},
P:function P(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function(){var u=H.o(C.e.G(document,"http://www.w3.org/2000/svg","svg"),"$im")
u.setAttribute("version","1.1")
return H.o(u,"$iaF")},
aT:function aT(){},
a8:function a8(){},
Y:function Y(){},
at:function at(){},
aD:function aD(){},
a0:function a0(){},
m:function m(){},
aF:function aF(){},
b6:function b6(){},
a4:function a4(){},
b7:function b7(){},
bv:function bv(){}},W={
e7:function(a,b,c,d,e){var u=c==null?null:W.eY(new W.d8(c),W.e)
u=new W.d7(a,b,u,!1,[e])
u.b_()
return u},
eY:function(a,b){var u=$.A
if(u===C.c)return a
return u.c1(a,b)},
l:function l(){},
c1:function c1(){},
c2:function c2(){},
bl:function bl(){},
ap:function ap(){},
aV:function aV(){},
cf:function cf(){},
aA:function aA(){},
aW:function aW(){},
ch:function ch(){},
aX:function aX(){},
e:function e(){},
aq:function aq(){},
cj:function cj(){},
bw:function bw(){},
N:function N(){},
cI:function cI(){},
b8:function b8(){},
J:function J(){},
bQ:function bQ(){},
d6:function d6(){},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d7:function d7(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
d8:function d8(a){this.a=a},
b_:function b_(){},
ci:function ci(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bP:function bP(){},
bT:function bT(){},
bU:function bU(){}},F={
fM:function(a1,a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a5==null)a5=1024
if(a5<=0)a5=a1.length
if(C.d.bp(a5,2)!==0)++a5
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
if(m<0||m>=s)return H.b(a1,m)
k=a1[m]
if(l<0||l>=n)return H.b(p,l)
p[l]=k}}s=p.length
if(s<=2*a5){o=new Array(s)
o.fixed$length=Array
j=H.n(o,[P.K])
for(m=0;m<s;++m)C.a.i(j,m,u+m)
return new F.bs(p,j)}o=a5*2
j=F.fN(p,o,u)
i=new Float64Array(o)
for(h=0,m=0;o=j.length,m<o;m=f){g=j[m]-u
f=m+2
n=o-1
l=f>n
if(l&&m+1>n)e=C.a.gac(j)
else if(l){n=m+1
if(n>=o)return H.b(j,n)
e=j[n]-u}else e=j[f]-u
d=new Float64Array(e-g)
for(o=d.length,c=g;c<e;++c){n=c-g
if(c<0||c>=s)return H.b(p,c)
l=p[c]
if(n<0||n>=o)return H.b(d,n)
d[n]=l}b=E.fF(d)
o=b.length
if(0>=o)return H.b(b,0)
C.o.i(i,h,b[0]);++h
if(1>=b.length)return H.b(b,1)
C.o.i(i,h,b[1]);++h}for(s=o-1,a=1,m=0;m<s;m=f){f=m+1
a0=j[f]-j[m]
if(a0>a)a=a0}return new F.bs(i,j)},
fN:function(a,b,c){var u,t,s,r=H.n([],[P.K]),q=a.length,p=q/b
for(u=0;u<b;++u){t=C.m.a1(u*p)
C.a.n(r,t+c)
if(t>=q)break}s=r.length
q=q-1+c
if(s<b)C.a.n(r,q)
else C.a.i(r,s-1,q)
return r},
bs:function bs(a,b){this.a=a
this.d=b}},M={bC:function bC(a){var _=this
_.a=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bI:function bI(){},
fG:function(a,b,c,d,e,f,g,h,i,j,k){var u=new M.bj(e,i)
u.aL(null,a,b,c,d,null,null,e,f,g,h,i,new M.c4(j).$0(),k,{})
return u},
er:function(a,b){var u,t,s
if(Math.abs(a)<0.000001)return 0.000001
u=C.l.aw(Math.log(a)/2.302585092994046)
t=a/Math.pow(10,u)
if(b)if(t<1.5)s=1
else if(t<3)s=2
else s=t<7?5:10
else if(t<=1)s=1
else if(t<=2)s=2
else s=t<=5?5:10
return s*Math.pow(10,u)},
bk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
if(a>b){u=a
t=b}else{u=b
t=a}s=M.er(u-t,!1)
if(typeof c!=="number")return c.m()
r=M.er(s/(c-1),!0)
q=C.l.aw(t/r)*r
p=C.l.c3(u/r)
o=Math.max(-C.l.aw(Math.log(r)/2.302585092994046),0)
o=o
n=H.n([],[P.f])
for(p=p*r+0.5*r,m=q;m<p;m+=r)C.a.n(n,C.m.bh(m,o))
return n},
bj:function bj(a,b){var _=this
_.e=_.d=_.c=_.b=_.a=null
_.f=!1
_.r=a
_.x=b},
c4:function c4(a){this.a=a},
c8:function c8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c9:function c9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c5:function c5(a,b){this.a=a
this.b=b},
c6:function c6(a){this.a=a},
c7:function c7(a){this.a=a},
w:function w(a){this.b=a}},S={
eK:function(a,b,c,d,e){var u=new S.cV(c,d,a,b)
u.sc_(0,P.ai($.h5,M.w,P.f))
if(e!=null)u.b.A(0,e)
u.c2()
return u},
cV:function cV(a,b,c,d){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=c
_.f=d}},D={cv:function cv(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.e=null
_.z=d
_.ch=_.Q=null
_.cx=e
_.db=_.cy=null},D:function D(a){this.b=a},cE:function cE(a){var _=this
_.d=a
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
eF:function(a,b,c){var u
if(c!=null&&b!=null&&Math.abs(b)>1e-8){if(typeof c!=="number")return H.c(c)
if(typeof b!=="number")return H.c(b)
u=a*c/b}else u=a
return u}},V={
fX:function(a,b,c,d,e,f,g,h,i){var u=new V.aC(H.n([],[P.a8]),d,e,b,c,a,f)
u.bv(a,b,c,d,e,f,g,h,i)
return u},
aC:function aC(a,b,c,d,e,f,g){var _=this
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
_.T=_.cf=_.y2=_.y1=_.x2=null
_.cY=g
_.av=_.a8=_.E=_.U=_.b8=_.b7=null},
v:function v(a){this.b=a}},X={
h3:function(a,b,c,d,e,f,g){var u=new X.cJ(a,c,f,d,e,H.n(["blue","red","magenta","green","orange","cyan","lightgreen","crimson","darkred","darkgreen"],[P.f]),g)
u.bw(a,b,c,d,e,f,g)
return u},
eG:function(a,b){var u,t,s,r,q,p,o,n=null,m="legend",l=D.D,k=P.f,j=P.ai($.eA,l,k)
j.A(0,a)
if(j.h(0,C.n)==null)return
if(j.h(0,C.y)!=null){u=H.j(J.el(C.i.as(0,j.h(0,C.y)),k),"$ia",[k],"$aa")
t=J.L(u.a)}else{u=n
t=0}s=new H.ah([k,[P.u,D.D,P.f]])
r=P.b5()
q=new D.cv(s,new H.ah([k,P.a4]),new H.ah([k,P.a0]),r,t)
q.cy=t
s.i(0,m,P.ai($.eA,l,k))
l=j.gN(j)
if(l)J.fv(s.h(0,m),j)
r.setAttribute("x",H.B(J.t(s.h(0,m),C.z)))
r.setAttribute("y",H.B(J.t(s.h(0,m),C.A)))
q.r=P.x(J.t(s.h(0,m),C.a0))
l=H.B(J.t(s.h(0,m),C.n))
q.db=l
if(l!=null&&l.length!==0)q.ba("TOP_TITLE_ID",l,n)
p=b!=null?P.fU(C.a.aK(b,0,t),!0,k):n
for(o=t-1,l=H.i(u,1),k=p==null;o>=0;--o){s=o+1
if(k)q.aI(""+s,H.V(J.t(u.a,o),l),n)
else{s=""+s
r=H.V(J.t(u.a,o),l)
if(o>=p.length)return H.b(p,o)
q.aI(s,r,p[o])}}return q},
cJ:function cJ(a,b,c,d,e,f,g){var _=this
_.c=_.b=_.a=null
_.d=a
_.f=_.e=null
_.r=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g}},B={
h4:function(a){if(a==="true")return!0
return!1},
ez:function(a){var u=P.f
return H.j(J.fw(C.i.as(0,a),u,u),"$iu",[u,u],"$au")},
E:function(a,b){b.B(0,new B.cH(a))},
cH:function cH(a){this.a=a}},U={
bW:function(){var u=0,t=P.eR(null),s,r,q,p,o,n,m,l,k
var $async$bW=P.eX(function(a,b){if(a===1)return P.eM(b,t)
while(true)switch(u){case 0:s=new U.dS()
r=new U.dR(50,s)
q=[P.d]
p=H.n([100,25,10,10],q)
o=r.$2(p,0.1)
n=P.f
m=[n]
u=2
return P.hc(new M.bC(new M.bI()).ay(s,null,o,H.n([80,22.5,12,10],q),P.z(["ftol",H.n(["1e-10"],m),"paramDeltaConverge",H.n(["0.0001"],m),"maxIterations",H.n(["200"],m),"parInfo",H.n([null,null,null,"y0 fixed null null"],m)],n,[P.a,P.f])),$async$bW)
case 2:l=b
k=H.n([P.G(J.t(l.h(0,"params"),0)),P.G(J.t(l.h(0,"params"),1)),P.G(J.t(l.h(0,"params"),2)),P.G(J.t(l.h(0,"params"),3))],q)
U.hI(o,r.$2(k,null),H.n(["exact Gaussian parameters (height, center, width, y offset)="+H.h(p),"initial parameters for fit="+H.h(l.h(0,"initialParams")),"fitted (iterated) parameters=["+J.c0(k[0],2)+",\n    "+J.c0(k[1],2)+",\n    "+J.c0(k[2],2)+",\n    "+J.c0(k[3],2)+"]","iterations="+H.h(J.t(l.h(0,"iterations"),0)),"stop reason="+H.h(J.t(l.h(0,"stopReason"),0)),"time [milliseconds]="+H.h(J.t(l.h(0,"time"),0)),"chi squared="+H.h(J.t(l.h(0,"chi2"),0)),"","Reload app to change the experimental points!"],m))
return P.eN(null,t)}})
return P.eO($async$bW,t)},
hI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=document,i=H.f7(j.querySelector("#app_div"),"$iaA"),h=H.f7(j.querySelector("#plot_div"),"$iaA")
j=h.style
u=H.h(i.clientWidth)+"px"
j.width=u
u=H.h(i.clientHeight)+"px"
j.height=u
t=a.length
j=P.f
u=[j]
s=H.n(["POLYLINE_POINT_SHAPE_CIRCLE_EMPTY",""],u)
for(r=0;r<t;++r){C.a.n(s,""+r)
C.a.n(s,H.h(a[r]))}q=H.n([P.z([C.j,"0.85",C.a4,C.i.au(s),C.a5,"red"],V.v,j)],[[P.u,V.v,P.f]])
p=M.w
o=P.z([C.p,"0",C.q,""+t,C.x,"Number of points"],p,j)
n=P.z([C.x,"Gaussian value"],p,j)
p=D.D
m=P.z([C.n,"Fitting a Gaussian to 'experimental' points",C.y,C.i.au(H.n(["Fitted curve","Experiment"],u)),C.z,"45",C.A,"15"],p,j)
l=X.h3(H.n([new Float64Array(H.hf(b))],[P.bv]),h,q,o,n,m,null)
k=X.eG(P.z([C.n,"Fit result:",C.y,C.i.au(c),C.G,"darkgreen",C.z,"45",C.A,"100"],p,j),null)
l.a.r.appendChild(k.z)},
dS:function dS(){},
dR:function dR(a,b){this.a=a
this.b=b}},E={
ep:function(a){var u,t,s,r,q,p=-17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q>t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
eq:function(a){var u,t,s,r,q,p=17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q<t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
fF:function(a){var u,t,s,r,q,p,o
for(u=a.length,t=-1,s=-17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q>s){s=q
t=r}}for(p=-1,o=17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q<o){o=q
p=r}}u=[P.d]
if(p<=t)return H.n([o,s],u)
else return H.n([s,o],u)}}
var w=[C,H,J,P,W,F,M,S,D,V,X,B,U,E]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.e3.prototype={}
J.S.prototype={
V:function(a,b){return a===b},
gu:function(a){return H.b3(a)},
j:function(a){return"Instance of '"+H.h(H.bJ(a))+"'"}}
J.cn.prototype={
j:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$ial:1}
J.co.prototype={
V:function(a,b){return null==b},
j:function(a){return"null"},
gu:function(a){return 0},
$iy:1}
J.bA.prototype={
gu:function(a){return 0},
j:function(a){return String(a)}}
J.cD.prototype={}
J.aj.prototype={}
J.ag.prototype={
j:function(a){var u=a[$.ff()]
if(u==null)return this.bu(a)
return"JavaScript function for "+H.h(J.W(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ie_:1}
J.af.prototype={
L:function(a,b){return new H.aR(a,[H.i(a,0),b])},
n:function(a,b){H.q(b,H.i(a,0))
if(!!a.fixed$length)H.ao(P.ak("add"))
a.push(b)},
J:function(a,b){H.U(b)
if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
aK:function(a,b,c){var u=a.length
if(b>u)throw H.k(P.a9(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.k(P.a9(c,b,a.length,"end",null))
if(b===c)return H.n([],[H.i(a,0)])
return H.n(a.slice(b,c),[H.i(a,0)])},
aJ:function(a,b){return this.aK(a,b,null)},
ga9:function(a){if(a.length>0)return a[0]
throw H.k(H.cm())},
gac:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.k(H.cm())},
a0:function(a,b,c,d){var u
H.q(d,H.i(a,0))
if(!!a.immutable$list)H.ao(P.ak("fill range"))
P.h1(b,c,a.length)
if(typeof c!=="number")return H.c(c)
u=b
for(;u<c;++u)a[u]=d},
gv:function(a){return a.length===0},
gN:function(a){return a.length!==0},
j:function(a){return P.ew(a,"[","]")},
gw:function(a){return new J.bi(a,a.length,[H.i(a,0)])},
gu:function(a){return H.b3(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.ao(P.ak("set length"))
if(b<0)throw H.k(P.a9(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.k(H.aw(a,b))
return a[b]},
i:function(a,b,c){H.q(c,H.i(a,0))
if(!!a.immutable$list)H.ao(P.ak("indexed set"))
if(b>=a.length||b<0)throw H.k(H.aw(a,b))
a[b]=c},
$iI:1,
$iM:1,
$ia:1}
J.e2.prototype={}
J.bi.prototype={
gt:function(){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.k(H.fd(s))
u=t.c
if(u>=r){t.saS(null)
return!1}t.saS(s[u]);++t.c
return!0},
saS:function(a){this.d=H.q(a,H.i(this,0))},
$ibx:1}
J.ar.prototype={
gbc:function(a){return a===0?1/a<0:a<0},
P:function(a){return Math.abs(a)},
c3:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.k(P.ak(""+a+".ceil()"))},
aw:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.k(P.ak(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(P.ak(""+a+".round()"))},
bh:function(a,b){var u
if(b<0||b>20)throw H.k(P.a9(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbc(a))return"-"+u
return u},
cK:function(a,b){var u
if(b>20)throw H.k(P.a9(b,0,20,"fractionDigits",null))
u=a.toExponential(b)
if(a===0&&this.gbc(a))return"-"+u
return u},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bp:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
Y:function(a,b){return(a|0)===a?a/b|0:this.bO(a,b)},
bO:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.k(P.ak("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aY:function(a,b){var u
if(a>0)u=this.bN(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
bN:function(a,b){return b>31?0:a>>>b},
$id:1,
$ibh:1}
J.b0.prototype={
P:function(a){return Math.abs(a)},
$iK:1}
J.by.prototype={}
J.as.prototype={
b2:function(a,b){if(b<0)throw H.k(H.aw(a,b))
if(b>=a.length)H.ao(H.aw(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(b>=a.length)throw H.k(H.aw(a,b))
return a.charCodeAt(b)},
l:function(a,b){H.B(b)
if(typeof b!=="string")throw H.k(P.eo(b,null,null))
return a+b},
W:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.k(P.cF(b,null))
if(b>c)throw H.k(P.cF(b,null))
if(c>a.length)throw H.k(P.cF(c,null))
return a.substring(b,c)},
br:function(a,b){return this.W(a,b,null)},
bj:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.a3(r,0)===133){u=J.fR(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.b2(r,t)===133?J.fS(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
c5:function(a,b,c){if(c>a.length)throw H.k(P.a9(c,0,a.length,null,null))
return H.ei(a,b,c)},
S:function(a,b){return this.c5(a,b,0)},
j:function(a){return a},
gu:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.k(H.aw(a,b))
return a[b]},
$ifW:1,
$if:1}
H.bo.prototype={
ad:function(a,b,c,d){var u,t
H.p(a,{func:1,ret:-1,args:[H.i(this,1)]})
u=this.a.bd(null,!0,H.p(c,{func:1,ret:-1}))
t=new H.bp(u,$.A,this.$ti)
u.az(t.gbH())
t.az(a)
t.aA(0,d)
return t},
bd:function(a,b,c){return this.ad(a,b,c,null)},
L:function(a,b){return new H.bo(this.a,[H.i(this,0),b])},
$aau:function(a,b){return[b]}}
H.bp.prototype={
az:function(a){var u=H.i(this,1)
H.p(a,{func:1,ret:-1,args:[u]})
this.sbF(a==null?null:H.p(a,{func:1,ret:null,args:[u]}))},
aA:function(a,b){var u,t=this
t.a.aA(0,b)
if(b==null)t.d=null
else{u=P.r
if(H.aM(b,{func:1,args:[P.y,P.y]}))t.d=t.b.aC(H.p(b,{func:1,args:[P.r,P.C]}),null,u,P.C)
else t.d=H.p(H.p(b,{func:1,args:[P.r]}),{func:1,ret:null,args:[u]})}},
bI:function(a){var u,t,s,r,q,p,o,n,m=this,l=null
H.q(a,H.i(m,0))
r=m.c
if(r==null)return
u=null
try{u=H.V(a,H.i(m,1))}catch(q){t=H.R(q)
s=H.an(q)
r=m.d
if(r==null)P.bd(l,l,m.b,t,H.o(s,"$iC"))
else{p=H.aM(r,{func:1,args:[P.y,P.y]})
o=m.b
n=m.d
if(p)o.cG(H.p(n,{func:1,ret:-1,args:[,P.C]}),t,s,l,P.C)
else o.aE(H.p(n,{func:1,ret:-1,args:[,]}),t,l)}return}m.b.aE(r,u,H.i(m,1))},
sbF:function(a){this.c=H.p(a,{func:1,ret:-1,args:[H.i(this,1)]})},
$ib4:1,
$ab4:function(a,b){return[b]}}
H.bq.prototype={
R:function(a,b,c){return new H.bq(this.a,[H.i(this,0),H.i(this,1),b,c])},
$acL:function(a,b,c,d){return[c,d]},
$aaa:function(a,b,c,d){return[c,d]}}
H.bm.prototype={
R:function(a,b,c){return new H.bm(this.a,[H.i(this,0),H.i(this,1),b,c])},
$acL:function(a,b,c,d){return[c,d]},
$aaa:function(a,b,c,d){return[c,d]},
$aae:function(a,b,c,d){return[c,d]}}
H.d2.prototype={
gw:function(a){return new H.cc(J.c_(this.gK()),this.$ti)},
gk:function(a){return J.L(this.gK())},
gv:function(a){return J.en(this.gK())},
gN:function(a){return J.fz(this.gK())},
J:function(a,b){H.U(b)
return H.V(J.fx(this.gK(),b),H.i(this,1))},
j:function(a){return J.W(this.gK())},
$aM:function(a,b){return[b]}}
H.cc.prototype={
q:function(){return this.a.q()},
gt:function(){return H.V(this.a.gt(),H.i(this,1))},
$ibx:1,
$abx:function(a,b){return[b]}}
H.bn.prototype={
L:function(a,b){return H.dY(this.a,H.i(this,0),b)},
gK:function(){return this.a}}
H.d5.prototype={$iI:1,
$aI:function(a,b){return[b]}}
H.d3.prototype={
h:function(a,b){return H.V(J.t(this.a,b),H.i(this,1))},
$iI:1,
$aI:function(a,b){return[b]},
$aa3:function(a,b){return[b]},
$ia:1,
$aa:function(a,b){return[b]}}
H.aR.prototype={
L:function(a,b){return new H.aR(this.a,[H.i(this,0),b])},
gK:function(){return this.a}}
H.aS.prototype={
R:function(a,b,c){return new H.aS(this.a,[H.i(this,0),H.i(this,1),b,c])},
h:function(a,b){return H.V(this.a.h(0,b),H.i(this,3))},
i:function(a,b,c){var u=this
H.q(b,H.i(u,2))
H.q(c,H.i(u,3))
u.a.i(0,H.V(b,H.i(u,0)),H.V(c,H.i(u,1)))},
A:function(a,b){var u=this,t=H.i(u,2),s=H.i(u,3)
u.a.A(0,new H.aS(H.j(b,"$iu",[t,s],"$au"),[t,s,H.i(u,0),H.i(u,1)]))},
B:function(a,b){var u=this
u.a.B(0,new H.cd(u,H.p(b,{func:1,ret:-1,args:[H.i(u,2),H.i(u,3)]})))},
gC:function(){return H.dY(this.a.gC(),H.i(this,0),H.i(this,2))},
gk:function(a){var u=this.a
return u.gk(u)},
gv:function(a){var u=this.a
return u.gv(u)},
$aa_:function(a,b,c,d){return[c,d]},
$au:function(a,b,c,d){return[c,d]}}
H.cd.prototype={
$2:function(a,b){var u=this.a
H.q(a,H.i(u,0))
H.q(b,H.i(u,1))
this.b.$2(H.V(a,H.i(u,2)),H.V(b,H.i(u,3)))},
$S:function(){var u=this.a
return{func:1,ret:P.y,args:[H.i(u,0),H.i(u,1)]}}}
H.I.prototype={}
H.b1.prototype={
gw:function(a){var u=this
return new H.bD(u,u.gk(u),[H.Q(u,"b1",0)])},
gv:function(a){return this.gk(this)===0}}
H.bD.prototype={
gt:function(){return this.d},
q:function(){var u,t=this,s=t.a,r=J.am(s),q=r.gk(s)
if(t.b!==q)throw H.k(P.bt(s))
u=t.c
if(u>=q){t.saM(null)
return!1}t.saM(r.J(s,u));++t.c
return!0},
saM:function(a){this.d=H.q(a,H.i(this,0))},
$ibx:1}
H.bu.prototype={}
H.bS.prototype={}
H.cP.prototype={
F:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.cC.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.cq.prototype={
j:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.cT.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.aZ.prototype={}
H.dU.prototype={
$1:function(a){if(!!J.H(a).$iaB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.bR.prototype={
j:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iC:1}
H.aU.prototype={
j:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ie_:1,
gcX:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cO.prototype={}
H.cK.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aO(u)+"'"}}
H.aP.prototype={
V:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.aP))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gu:function(a){var u,t=this.c
if(t==null)u=H.b3(this.a)
else u=typeof t!=="object"?J.em(t):H.b3(t)
return(u^H.b3(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.bJ(u))+"'")}}
H.cR.prototype={
j:function(a){return this.a}}
H.cb.prototype={
j:function(a){return this.a}}
H.cG.prototype={
j:function(a){return"RuntimeError: "+H.h(this.a)}}
H.cW.prototype={
j:function(a){return"Assertion failed: "+P.aY(this.a)}}
H.ah.prototype={
gk:function(a){return this.a},
gv:function(a){return this.a===0},
gN:function(a){return!this.gv(this)},
gC:function(){return new H.cx(this,[H.i(this,0)])},
Z:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.bD(u,a)}else{t=this.cn(a)
return t}},
cn:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ab(u.a4(t,u.aa(a)),a)>=0},
A:function(a,b){H.j(b,"$iu",this.$ti,"$au").B(0,new H.cp(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a5(r,b)
s=t==null?null:t.b
return s}else return q.co(b)},
co:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.a4(r,s.aa(a))
t=s.ab(u,a)
if(t<0)return
return u[t].b},
i:function(a,b,c){var u,t,s=this
H.q(b,H.i(s,0))
H.q(c,H.i(s,1))
if(typeof b==="string"){u=s.b
s.aO(u==null?s.b=s.ao():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.aO(t==null?s.c=s.ao():t,b,c)}else s.cq(b,c)},
cq:function(a,b){var u,t,s,r,q=this
H.q(a,H.i(q,0))
H.q(b,H.i(q,1))
u=q.d
if(u==null)u=q.d=q.ao()
t=q.aa(a)
s=q.a4(u,t)
if(s==null)q.aq(u,t,[q.ap(a,b)])
else{r=q.ab(s,a)
if(r>=0)s[r].b=b
else s.push(q.ap(a,b))}},
bf:function(a,b){var u=this.cp(b)
return u},
cp:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=q.aa(a)
t=q.a4(p,u)
s=q.ab(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bP(r)
if(t.length===0)q.aT(p,u)
return r.b},
B:function(a,b){var u,t,s=this
H.p(b,{func:1,ret:-1,args:[H.i(s,0),H.i(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.k(P.bt(s))
u=u.c}},
aO:function(a,b,c){var u,t=this
H.q(b,H.i(t,0))
H.q(c,H.i(t,1))
u=t.a5(a,b)
if(u==null)t.aq(a,b,t.ap(b,c))
else u.b=c},
aV:function(){this.r=this.r+1&67108863},
ap:function(a,b){var u,t=this,s=new H.cw(H.q(a,H.i(t,0)),H.q(b,H.i(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aV()
return s},
bP:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aV()},
aa:function(a){return J.em(a)&0x3ffffff},
ab:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.ac(a[t].a,b))return t
return-1},
j:function(a){return P.eD(this)},
a5:function(a,b){return a[b]},
a4:function(a,b){return a[b]},
aq:function(a,b,c){a[b]=c},
aT:function(a,b){delete a[b]},
bD:function(a,b){return this.a5(a,b)!=null},
ao:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aq(t,u,t)
this.aT(t,u)
return t},
$ieB:1}
H.cp.prototype={
$2:function(a,b){var u=this.a
u.i(0,H.q(a,H.i(u,0)),H.q(b,H.i(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.y,args:[H.i(u,0),H.i(u,1)]}}}
H.cw.prototype={}
H.cx.prototype={
gk:function(a){return this.a.a},
gv:function(a){return this.a.a===0},
gw:function(a){var u=this.a,t=new H.cy(u,u.r,this.$ti)
t.c=u.e
return t}}
H.cy.prototype={
gt:function(){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.k(P.bt(t))
else{t=u.c
if(t==null){u.saN(null)
return!1}else{u.saN(t.a)
u.c=u.c.c
return!0}}},
saN:function(a){this.d=H.q(a,H.i(this,0))},
$ibx:1}
H.dN.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.dO.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dP.prototype={
$1:function(a){return this.a(H.B(a))},
$S:10}
H.bH.prototype={}
H.bF.prototype={
gk:function(a){return a.length},
$ibz:1,
$abz:function(){}}
H.bG.prototype={
h:function(a,b){H.eP(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ed(c)
H.eP(b,a,a.length)
a[b]=c},
$iI:1,
$aI:function(){return[P.d]},
$abu:function(){return[P.d]},
$aa3:function(){return[P.d]},
$iM:1,
$aM:function(){return[P.d]},
$ia:1,
$aa:function(){return[P.d]}}
H.bE.prototype={$ibv:1}
H.b9.prototype={}
H.ba.prototype={}
P.d_.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.cZ.prototype={
$1:function(a){var u,t
this.a.a=H.p(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:11}
P.d0.prototype={
$0:function(){this.a.$0()},
$S:0}
P.d1.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dC.prototype={
bx:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bf(new P.dD(this,b),0),a)
else throw H.k(P.ak("`setTimeout()` not found."))}}
P.dD.prototype={
$0:function(){this.b.$0()},
$S:1}
P.cX.prototype={
ar:function(a,b){var u,t,s=this,r=H.i(s,0)
H.bg(b,{futureOr:1,type:r})
u=!s.b||H.aL(b,"$iX",s.$ti,"$aX")
t=s.a
if(u)t.ak(b)
else t.aR(H.q(b,r))},
b3:function(a,b){var u=this.a
if(this.b)u.O(a,b)
else u.aP(a,b)}}
P.dF.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:12}
P.dG.prototype={
$2:function(a,b){this.a.$2(1,new H.aZ(a,H.o(b,"$iC")))},
$S:13}
P.dJ.prototype={
$2:function(a,b){this.a(H.U(a),b)},
$S:14}
P.d4.prototype={
b3:function(a,b){var u
if(a==null)a=new P.b2()
u=this.a
if(u.a!==0)throw H.k(P.e5("Future already completed"))
u.aP(a,b)}}
P.cY.prototype={
ar:function(a,b){var u
H.bg(b,{futureOr:1,type:H.i(this,0)})
u=this.a
if(u.a!==0)throw H.k(P.e5("Future already completed"))
u.ak(b)}}
P.a6.prototype={
ct:function(a){if((this.c&15)!==6)return!0
return this.b.b.aD(H.p(this.d,{func:1,ret:P.al,args:[P.r]}),a.a,P.al,P.r)},
ck:function(a){var u=this.e,t=P.r,s={futureOr:1,type:H.i(this,1)},r=this.b.b
if(H.aM(u,{func:1,args:[P.r,P.C]}))return H.bg(r.cF(u,a.a,a.b,null,t,P.C),s)
else return H.bg(r.aD(H.p(u,{func:1,args:[P.r]}),a.a,null,t),s)}}
P.F.prototype={
aF:function(a,b,c){var u,t,s,r=H.i(this,0)
H.p(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.A
if(u!==C.c){H.p(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.hk(b,u)}t=new P.F($.A,[c])
s=b==null?1:3
this.aj(new P.a6(t,s,a,b,[r,c]))
return t},
cJ:function(a,b){return this.aF(a,null,b)},
aZ:function(a,b,c){var u,t=H.i(this,0)
H.p(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.F($.A,[c])
this.aj(new P.a6(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
aj:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.o(t.c,"$ia6")
t.c=a}else{if(s===2){u=H.o(t.c,"$iF")
s=u.a
if(s<4){u.aj(a)
return}t.a=s
t.c=u.c}P.aI(null,null,t.b,H.p(new P.da(t,a),{func:1,ret:-1}))}},
aX:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.o(p.c,"$ia6")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.o(p.c,"$iF")
u=q.a
if(u<4){q.aX(a)
return}p.a=u
p.c=q.c}o.a=p.a7(a)
P.aI(null,null,p.b,H.p(new P.di(o,p),{func:1,ret:-1}))}},
a6:function(){var u=H.o(this.c,"$ia6")
this.c=null
return this.a7(u)},
a7:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aQ:function(a){var u,t,s=this,r=H.i(s,0)
H.bg(a,{futureOr:1,type:r})
u=s.$ti
if(H.aL(a,"$iX",u,"$aX"))if(H.aL(a,"$iF",u,null))P.dd(a,s)
else P.eL(a,s)
else{t=s.a6()
H.q(a,r)
s.a=4
s.c=a
P.aG(s,t)}},
aR:function(a){var u,t=this
H.q(a,H.i(t,0))
u=t.a6()
t.a=4
t.c=a
P.aG(t,u)},
O:function(a,b){var u,t=this
H.o(b,"$iC")
u=t.a6()
t.a=8
t.c=new P.O(a,b)
P.aG(t,u)},
bC:function(a){return this.O(a,null)},
ak:function(a){var u=this
H.bg(a,{futureOr:1,type:H.i(u,0)})
if(H.aL(a,"$iX",u.$ti,"$aX")){u.bA(a)
return}u.a=1
P.aI(null,null,u.b,H.p(new P.dc(u,a),{func:1,ret:-1}))},
bA:function(a){var u=this,t=u.$ti
H.j(a,"$iX",t,"$aX")
if(H.aL(a,"$iF",t,null)){if(a.a===8){u.a=1
P.aI(null,null,u.b,H.p(new P.dh(u,a),{func:1,ret:-1}))}else P.dd(a,u)
return}P.eL(a,u)},
aP:function(a,b){this.a=1
P.aI(null,null,this.b,H.p(new P.db(this,a,b),{func:1,ret:-1}))},
$iX:1}
P.da.prototype={
$0:function(){P.aG(this.a,this.b)},
$S:0}
P.di.prototype={
$0:function(){P.aG(this.b,this.a.a)},
$S:0}
P.de.prototype={
$1:function(a){var u=this.a
u.a=0
u.aQ(a)},
$S:6}
P.df.prototype={
$2:function(a,b){H.o(b,"$iC")
this.a.O(a,b)},
$1:function(a){return this.$2(a,null)},
$S:16}
P.dg.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:0}
P.dc.prototype={
$0:function(){var u=this.a
u.aR(H.q(this.b,H.i(u,0)))},
$S:0}
P.dh.prototype={
$0:function(){P.dd(this.b,this.a)},
$S:0}
P.db.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:0}
P.dl.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.bg(H.p(s.d,{func:1}),null)}catch(r){u=H.R(r)
t=H.an(r)
if(o.d){s=H.o(o.a.a.c,"$iO").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.o(o.a.a.c,"$iO")
else q.b=new P.O(u,t)
q.a=!0
return}if(!!J.H(n).$iX){if(n instanceof P.F&&n.a>=4){if(n.a===8){s=o.b
s.b=H.o(n.c,"$iO")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.cJ(new P.dm(p),null)
s.a=!1}},
$S:1}
P.dm.prototype={
$1:function(a){return this.a},
$S:17}
P.dk.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.i(s,0)
q=H.q(n.c,r)
p=H.i(s,1)
n.a.b=s.b.b.aD(H.p(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.R(o)
t=H.an(o)
s=n.a
s.b=new P.O(u,t)
s.a=!0}},
$S:1}
P.dj.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.o(m.a.a.c,"$iO")
r=m.c
if(H.aK(r.ct(u))&&r.e!=null){q=m.b
q.b=r.ck(u)
q.a=!1}}catch(p){t=H.R(p)
s=H.an(p)
r=H.o(m.a.a.c,"$iO")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.O(t,s)
n.a=!0}},
$S:1}
P.bO.prototype={}
P.au.prototype={
gk:function(a){var u={},t=new P.F($.A,[P.K])
u.a=0
this.ad(new P.cM(u,this),!0,new P.cN(u,t),t.gbB())
return t},
L:function(a,b){return new H.bo(this,[H.Q(this,"au",0),b])}}
P.cM.prototype={
$1:function(a){H.q(a,H.Q(this.b,"au",0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.Q(this.b,"au",0)]}}}
P.cN.prototype={
$0:function(){this.b.aQ(this.a.a)},
$S:0}
P.b4.prototype={}
P.aa.prototype={
R:function(a,b,c){return new H.bq(this,[H.Q(this,"aa",0),H.Q(this,"aa",1),b,c])},
$icL:1}
P.dB.prototype={}
P.O.prototype={
j:function(a){return H.h(this.a)},
$iaB:1}
P.dE.prototype={$ii3:1}
P.dI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.b2():s
s=this.b
if(s==null)throw H.k(t)
u=H.k(t)
u.stack=s.j(0)
throw u},
$S:0}
P.dx.prototype={
cI:function(a){var u,t,s,r=null
H.p(a,{func:1,ret:-1})
try{if(C.c===$.A){a.$0()
return}P.eS(r,r,this,a,-1)}catch(s){u=H.R(s)
t=H.an(s)
P.bd(r,r,this,u,H.o(t,"$iC"))}},
aE:function(a,b,c){var u,t,s,r=null
H.p(a,{func:1,ret:-1,args:[c]})
H.q(b,c)
try{if(C.c===$.A){a.$1(b)
return}P.eU(r,r,this,a,b,-1,c)}catch(s){u=H.R(s)
t=H.an(s)
P.bd(r,r,this,u,H.o(t,"$iC"))}},
cG:function(a,b,c,d,e){var u,t,s,r=null
H.p(a,{func:1,ret:-1,args:[d,e]})
H.q(b,d)
H.q(c,e)
try{if(C.c===$.A){a.$2(b,c)
return}P.eT(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.R(s)
t=H.an(s)
P.bd(r,r,this,u,H.o(t,"$iC"))}},
c0:function(a,b){return new P.dz(this,H.p(a,{func:1,ret:b}),b)},
b0:function(a){return new P.dy(this,H.p(a,{func:1,ret:-1}))},
c1:function(a,b){return new P.dA(this,H.p(a,{func:1,ret:-1,args:[b]}),b)},
bg:function(a,b){H.p(a,{func:1,ret:b})
if($.A===C.c)return a.$0()
return P.eS(null,null,this,a,b)},
aD:function(a,b,c,d){H.p(a,{func:1,ret:c,args:[d]})
H.q(b,d)
if($.A===C.c)return a.$1(b)
return P.eU(null,null,this,a,b,c,d)},
cF:function(a,b,c,d,e,f){H.p(a,{func:1,ret:d,args:[e,f]})
H.q(b,e)
H.q(c,f)
if($.A===C.c)return a.$2(b,c)
return P.eT(null,null,this,a,b,c,d,e,f)},
aC:function(a,b,c,d){return H.p(a,{func:1,ret:b,args:[c,d]})}}
P.dz.prototype={
$0:function(){return this.a.bg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.dy.prototype={
$0:function(){return this.a.cI(this.b)},
$S:1}
P.dA.prototype={
$1:function(a){var u=this.c
return this.a.aE(this.b,H.q(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cz.prototype={
$2:function(a,b){this.a.i(0,H.q(a,this.b),H.q(b,this.c))},
$S:4}
P.a3.prototype={
gw:function(a){return new H.bD(a,this.gk(a),[H.ef(this,a,"a3",0)])},
J:function(a,b){return this.h(a,H.U(b))},
gv:function(a){return this.gk(a)===0},
gN:function(a){return!this.gv(a)},
ga9:function(a){if(this.gk(a)===0)throw H.k(H.cm())
return this.h(a,0)},
gac:function(a){if(this.gk(a)===0)throw H.k(H.cm())
return this.h(a,this.gk(a)-1)},
L:function(a,b){return new H.aR(a,[H.ef(this,a,"a3",0),b])},
j:function(a){return P.ew(a,"[","]")}}
P.cA.prototype={}
P.cB.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:4}
P.a_.prototype={
R:function(a,b,c){return P.fV(this,H.Q(this,"a_",0),H.Q(this,"a_",1),b,c)},
B:function(a,b){var u,t,s=this
H.p(b,{func:1,ret:-1,args:[H.Q(s,"a_",0),H.Q(s,"a_",1)]})
for(u=J.c_(s.gC());u.q();){t=u.gt()
b.$2(t,s.h(0,t))}},
A:function(a,b){var u,t
H.j(b,"$iu",[H.Q(this,"a_",0),H.Q(this,"a_",1)],"$au")
for(u=b.gC(),u=u.gw(u);u.q();){t=u.gt()
this.i(0,t,b.h(0,t))}},
gk:function(a){return J.L(this.gC())},
gv:function(a){return J.en(this.gC())},
j:function(a){return P.eD(this)},
$iu:1}
P.dq.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.bJ(b):u}},
gk:function(a){var u
if(this.b==null){u=this.c
u=u.gk(u)}else u=this.X().length
return u},
gv:function(a){return this.gk(this)===0},
gC:function(){if(this.b==null)return this.c.gC()
return new P.dr(this)},
i:function(a,b,c){var u,t,s=this
H.B(b)
if(s.b==null)s.c.i(0,b,c)
else if(s.Z(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.bR().i(0,b,c)},
A:function(a,b){H.j(b,"$iu",[P.f,null],"$au").B(0,new P.ds(this))},
Z:function(a){if(this.b==null)return this.c.Z(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
B:function(a,b){var u,t,s,r,q=this
H.p(b,{func:1,ret:-1,args:[P.f,,]})
if(q.b==null)return q.c.B(0,b)
u=q.X()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.dH(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.k(P.bt(q))}},
X:function(){var u=H.hE(this.c)
if(u==null)u=this.c=H.n(Object.keys(this.a),[P.f])
return u},
bR:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.eC(P.f,null)
t=p.X()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.i(0,q,p.h(0,q))}if(r===0)C.a.n(t,null)
else C.a.sk(t,0)
p.a=p.b=null
return p.c=u},
bJ:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.dH(this.a[a])
return this.b[a]=u},
$aa_:function(){return[P.f,null]},
$au:function(){return[P.f,null]}}
P.ds.prototype={
$2:function(a,b){this.a.i(0,H.B(a),b)},
$S:18}
P.dr.prototype={
gk:function(a){var u=this.a
return u.gk(u)},
J:function(a,b){var u
H.U(b)
u=this.a
if(u.b==null)u=u.gC().J(0,b)
else{u=u.X()
if(b<0||b>=u.length)return H.b(u,b)
u=u[b]}return u},
gw:function(a){var u=this.a
if(u.b==null){u=u.gC()
u=u.gw(u)}else{u=u.X()
u=new J.bi(u,u.length,[H.i(u,0)])}return u},
$aI:function(){return[P.f]},
$ab1:function(){return[P.f]},
$aM:function(){return[P.f]}}
P.br.prototype={}
P.ae.prototype={
R:function(a,b,c){return new H.bm(this,[H.Q(this,"ae",0),H.Q(this,"ae",1),b,c])}}
P.bB.prototype={
j:function(a){var u=P.aY(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.cs.prototype={
j:function(a){return"Cyclic error in JSON stringify"}}
P.cr.prototype={
as:function(a,b){var u=P.hj(b,this.gca().a)
return u},
au:function(a){var u=P.ha(a,this.gce().b,null)
return u},
gce:function(){return C.az},
gca:function(){return C.ay},
$abr:function(){return[P.r,P.f]}}
P.cu.prototype={
$acL:function(){return[P.r,P.f]},
$aaa:function(){return[P.r,P.f]},
$aae:function(){return[P.r,P.f]}}
P.ct.prototype={
$acL:function(){return[P.f,P.r]},
$aaa:function(){return[P.f,P.r]},
$aae:function(){return[P.f,P.r]}}
P.du.prototype={
bl:function(a){var u,t,s,r,q,p,o,n=a.length
for(u=J.f3(a),t=this.c,s=0,r=0;r<n;++r){q=u.a3(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.b.W(a,s,r)
s=r+1
p=t.a+=H.Z(92)
switch(q){case 8:t.a=p+H.Z(98)
break
case 9:t.a=p+H.Z(116)
break
case 10:t.a=p+H.Z(110)
break
case 12:t.a=p+H.Z(102)
break
case 13:t.a=p+H.Z(114)
break
default:p+=H.Z(117)
t.a=p
p+=H.Z(48)
t.a=p
p+=H.Z(48)
t.a=p
o=q>>>4&15
p+=H.Z(o<10?48+o:87+o)
t.a=p
o=q&15
t.a=p+H.Z(o<10?48+o:87+o)
break}}else if(q===34||q===92){if(r>s)t.a+=C.b.W(a,s,r)
s=r+1
p=t.a+=H.Z(92)
t.a=p+H.Z(q)}}if(s===0)t.a+=H.h(a)
else if(s<n)t.a+=u.W(a,s,n)},
al:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.k(new P.cs(a,null))}C.a.n(u,a)},
af:function(a){var u,t,s,r,q=this
if(q.bk(a))return
q.al(a)
try{u=q.b.$1(a)
if(!q.bk(u)){s=P.ey(a,null,q.gaW())
throw H.k(s)}s=q.a
if(0>=s.length)return H.b(s,-1)
s.pop()}catch(r){t=H.R(r)
s=P.ey(a,t,q.gaW())
throw H.k(s)}},
bk:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.m.j(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.bl(a)
u.a+='"'
return!0}else{u=J.H(a)
if(!!u.$ia){s.al(a)
s.cN(a)
u=s.a
if(0>=u.length)return H.b(u,-1)
u.pop()
return!0}else if(!!u.$iu){s.al(a)
t=s.cO(a)
u=s.a
if(0>=u.length)return H.b(u,-1)
u.pop()
return t}else return!1}},
cN:function(a){var u,t,s=this.c
s.a+="["
u=J.am(a)
if(u.gN(a)){this.af(u.h(a,0))
for(t=1;t<u.gk(a);++t){s.a+=","
this.af(u.h(a,t))}}s.a+="]"},
cO:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gv(a)){o.c.a+="{}"
return!0}u=a.gk(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.B(0,new P.dv(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.bl(H.B(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.b(t,p)
o.af(t[p])}r.a+="}"
return!0}}
P.dv.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.i(u,t.a++,a)
C.a.i(u,t.a++,b)},
$S:4}
P.dt.prototype={
gaW:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.al.prototype={}
P.d.prototype={}
P.aB.prototype={}
P.c3.prototype={
j:function(a){return"Assertion failed"}}
P.b2.prototype={
j:function(a){return"Throw of null."}}
P.ad.prototype={
gan:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gam:function(){return""},
j:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gan()+o+u
if(!q.a)return t
s=q.gam()
r=P.aY(q.b)
return t+s+": "+r}}
P.bK.prototype={
gan:function(){return"RangeError"},
gam:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.cl.prototype={
gan:function(){return"RangeError"},
gam:function(){var u,t=H.U(this.b)
if(typeof t!=="number")return t.I()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gk:function(a){return this.f}}
P.cU.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.cS.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bN.prototype={
j:function(a){return"Bad state: "+this.a}}
P.ce.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aY(u)+"."}}
P.bM.prototype={
j:function(a){return"Stack Overflow"},
$iaB:1}
P.cg.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d9.prototype={
j:function(a){return"Exception: "+this.a}}
P.ck.prototype={
j:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.h(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.b.W(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.K.prototype={}
P.M.prototype={
L:function(a,b){return H.dY(this,H.Q(this,"M",0),b)},
gk:function(a){var u,t=this.gw(this)
for(u=0;t.q();)++u
return u},
gv:function(a){return!this.gw(this).q()},
gN:function(a){return!this.gv(this)},
J:function(a,b){var u,t,s
H.U(b)
P.h0(b,"index")
for(u=this.gw(this),t=0;u.q();){s=u.gt()
if(b===t)return s;++t}throw H.k(P.e0(b,this,"index",null,t))},
j:function(a){return P.fP(this,"(",")")}}
P.a.prototype={$iI:1,$iM:1}
P.u.prototype={}
P.y.prototype={
gu:function(a){return P.r.prototype.gu.call(this,this)},
j:function(a){return"null"}}
P.bh.prototype={}
P.r.prototype={constructor:P.r,$ir:1,
V:function(a,b){return this===b},
gu:function(a){return H.b3(this)},
j:function(a){return"Instance of '"+H.h(H.bJ(this))+"'"},
toString:function(){return this.j(this)}}
P.C.prototype={}
P.f.prototype={$ifW:1}
P.aE.prototype={
gk:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ihT:1}
W.l.prototype={}
W.c1.prototype={
j:function(a){return String(a)}}
W.c2.prototype={
j:function(a){return String(a)}}
W.bl.prototype={$ibl:1}
W.ap.prototype={
gk:function(a){return a.length}}
W.aV.prototype={
gk:function(a){return a.length}}
W.cf.prototype={}
W.aA.prototype={$iaA:1}
W.aW.prototype={
G:function(a,b,c){var u=a.createElementNS(b,c)
return u}}
W.ch.prototype={
j:function(a){return String(a)}}
W.aX.prototype={
j:function(a){return a.localName},
bM:function(a,b,c){return a.setAttribute(b,c)},
$iaX:1}
W.e.prototype={$ie:1}
W.aq.prototype={
by:function(a,b,c,d){return a.addEventListener(b,H.bf(H.p(c,{func:1,args:[W.e]}),1),!1)},
bK:function(a,b,c,d){return a.removeEventListener(b,H.bf(H.p(c,{func:1,args:[W.e]}),1),!1)},
$iaq:1}
W.cj.prototype={
gk:function(a){return a.length}}
W.bw.prototype={}
W.N.prototype={
ae:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
cE:function(a,b){var u,t
try{u=a.parentNode
J.ft(u,b,a)}catch(t){H.R(t)}return a},
j:function(a){var u=a.nodeValue
return u==null?this.bt(a):u},
bY:function(a,b){return a.appendChild(b)},
bL:function(a,b,c){return a.replaceChild(b,c)},
$iN:1}
W.cI.prototype={
gk:function(a){return a.length}}
W.b8.prototype={$ib8:1}
W.J.prototype={$iJ:1}
W.bQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.e0(b,a,null,null,null))
return a[b]},
J:function(a,b){H.U(b)
if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.N]},
$ibz:1,
$abz:function(){return[W.N]},
$aa3:function(){return[W.N]},
$iM:1,
$aM:function(){return[W.N]},
$ia:1,
$aa:function(){return[W.N]},
$ab_:function(){return[W.N]}}
W.d6.prototype={
ad:function(a,b,c,d){var u=H.i(this,0)
H.p(a,{func:1,ret:-1,args:[u]})
H.p(c,{func:1,ret:-1})
return W.e7(this.a,this.b,a,!1,u)},
bd:function(a,b,c){return this.ad(a,b,c,null)}}
W.e6.prototype={}
W.d7.prototype={
az:function(a){var u=this
H.p(a,{func:1,ret:-1,args:[H.i(u,0)]})
if(u.b==null)throw H.k(P.e5("Subscription has been canceled."))
u.bQ()
u.sbG(W.eY(H.p(a,{func:1,ret:-1,args:[W.e]}),W.e))
u.b_()},
aA:function(a,b){},
b_:function(){var u,t=this.d,s=t!=null
if(s&&!0){u=this.b
u.toString
H.p(t,{func:1,args:[W.e]})
if(s)J.fr(u,this.c,t,!1)}},
bQ:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.p(t,{func:1,args:[W.e]})
if(s)J.fs(u,this.c,t,!1)}},
sbG:function(a){this.d=H.p(a,{func:1,args:[W.e]})}}
W.d8.prototype={
$1:function(a){return this.a.$1(H.o(a,"$ie"))},
$S:19}
W.b_.prototype={
gw:function(a){return new W.ci(a,a.length,[H.ef(this,a,"b_",0)])}}
W.ci.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.b(s,t)
u.saU(s[t])
u.c=t
return!0}u.saU(null)
u.c=s
return!1},
gt:function(){return this.d},
saU:function(a){this.d=H.q(a,H.i(this,0))},
$ibx:1}
W.bP.prototype={}
W.bT.prototype={}
W.bU.prototype={}
P.dn.prototype={
cv:function(){return Math.random()}}
P.dw.prototype={
j:function(a){var u=this
return"Rectangle ("+u.a+", "+u.b+") "+u.c+" x "+u.d},
V:function(a,b){var u,t,s,r,q,p,o=this
if(b==null)return!1
if(!!J.H(b).$iP){u=o.a
t=b.a
if(u===t){s=o.b
r=b.b
if(s===r){q=H.i(o,0)
p=H.i(b,0)
u=H.q(u+o.c,q)===H.q(t+b.c,p)&&H.q(s+o.d,q)===H.q(r+b.d,p)}else u=!1}else u=!1}else u=!1
return u},
gu:function(a){var u,t=this,s=t.a,r=C.d.gu(s),q=t.b,p=C.d.gu(q),o=H.i(t,0)
s=C.d.gu(H.q(s+t.c,o))
o=C.d.gu(H.q(q+t.d,o))
o=P.dp(P.dp(P.dp(P.dp(0,r),p),s),o)
u=536870911&o+((67108863&o)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)}}
P.P.prototype={}
P.aT.prototype={$iaT:1}
P.a8.prototype={$ia8:1}
P.Y.prototype={}
P.at.prototype={$iat:1}
P.aD.prototype={$iaD:1}
P.a0.prototype={$ia0:1}
P.m.prototype={$im:1}
P.aF.prototype={$iaF:1}
P.b6.prototype={}
P.a4.prototype={$ia4:1}
P.b7.prototype={}
P.bv.prototype={$iI:1,
$aI:function(){return[P.d]},
$iM:1,
$aM:function(){return[P.d]},
$ia:1,
$aa:function(){return[P.d]}}
F.bs.prototype={}
M.bC.prototype={
D:function(a){var u,t,s,r,q=this,p=P.d
H.j(a,"$ia",[p],"$aa")
u=new Array(q.d.length)
u.fixed$length=Array
t=H.n(u,[p])
for(s=0;p=q.d,s<p.length;++s){u=q.y
if(s>=u.length)return H.b(u,s)
u=u[s]
if(typeof u!=="number")return H.c(u)
r=q.e
if(s>=r.length)return H.b(r,s)
r=r[s]
p=p[s]
p=q.c.$2(p,a)
if(typeof r!=="number")return r.m()
if(typeof p!=="number")return H.c(p)
C.a.i(t,s,1/u*(r-p))}return t},
ai:function(a){H.j(a,"$ia",[P.d],"$aa")
return this.a.M(this.D(a),this.D(a))},
b1:function(a){var u,t,s,r,q,p,o=this
H.j(a,"$ia",[P.d],"$aa")
for(u=0,t=0;s=o.d,t<s.length;++t){s=s[t]
r=o.c.$2(s,a)
s=o.e
if(t>=s.length)return H.b(s,t)
q=s[t]
s=o.y
if(t>=s.length)return H.b(s,t)
p=s[t]
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.c(r)
s=Math.pow(q-r,2)
H.f1(p)
u+=s/Math.pow(p,2)}return u},
cb:function(a){var u,t,s,r,q,p,o,n
H.j(a,"$ia",[[P.a,P.d]],"$aa")
u=a.length
if(0>=u)return H.b(a,0)
t=a[0].length
s=this.a.a_(u,t,0)
for(r=s.length,q=0;q<u;++q)for(p=0;p<t;++p)if(q===p){if(q>=r)return H.b(s,q)
o=s[q]
n=a[q]
if(p>=n.length)return H.b(n,p);(o&&C.a).i(o,p,n[p])}return s},
ax:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
H.j(a,"$ia",[P.d],"$aa")
u=a.length
t=h.a.a_(h.d.length,u,0)
for(s=t.length,r=null,q=null,p=0;p<u;++p){o=C.a.aJ(a,0)
n=C.a.aJ(a,0)
if(p>=a.length)return H.b(a,p)
m=a[p]
l=h.b
if(typeof m!=="number")return m.p()
if(typeof l!=="number")return H.c(l)
k=Math.abs(m*l)
if(k<1e-25)k=l
C.a.i(o,p,m-k)
if(p>=a.length)return H.b(a,p)
m=a[p]
if(typeof m!=="number")return m.l()
C.a.i(n,p,m+k)
for(m=2*k,j=0;l=h.d,j<l.length;++j){l=l[j]
r=h.c.$2(l,n)
l=h.d
if(j>=l.length)return H.b(l,j)
l=l[j]
q=h.c.$2(l,o)
if(j>=s)return H.b(t,j)
l=t[j]
if(typeof r!=="number")return r.m()
if(typeof q!=="number")return H.c(q)
i=h.y
if(j>=i.length)return H.b(i,j)
i=i[j]
if(typeof i!=="number")return H.c(i);(l&&C.a).i(l,p,(r-q)/m/i)}}s=h.dx
if(typeof s!=="number")return s.l()
h.dx=s+1
return t},
b9:function(a){var u=this.ax(H.j(a,"$ia",[P.d],"$aa")),t=this.a
return t.at(2,t.b5(t.bi(u),u))},
b4:function(a){var u,t,s,r,q=this,p=q.b9(H.j(a,"$ia",[P.d],"$aa")),o=q.a
if(Math.abs(o.bs(p))>1e-8)u=o.bb(p)
else{t=p.length
if(0>=t)return H.b(p,0)
u=o.a_(t,p[0].length,0)}if(!H.aK(q.fr)){s=q.D(q.z)
t=o.M(s,s)
r=q.db
if(typeof r!=="number")return H.c(r)
u=o.at(t/r,u)}return u},
cz:function(){var u,t,s,r,q=this,p=q.cx
if(typeof p!=="number")return H.c(p)
p=new Array(p)
p.fixed$length=Array
u=H.n(p,[P.d])
C.a.a0(u,0,q.cx,0)
p=q.a
t=p.bq(p.bo(q.b4(q.z)))
for(p=t.length,s=0;s<q.z.length;++s){r=q.Q
if(s>=r.length)return H.b(r,s)
if(H.aK(r[s])){if(s>=p)return H.b(t,s)
C.a.i(u,s,t[s])}else C.a.i(u,s,0)}return u},
ci:function(a){var u,t,s,r,q,p,o,n,m,l
H.j(a,"$ia",[P.d],"$aa")
u=this.k2.h(0,"parInfo")
if(u!=null)for(t=a.length,s=0;s<t;++s){if(s>=u.length)return H.b(u,s)
r=u[s]
if(r==null)continue
q=r.split(" ")
p=q.length
if(2>=p)return H.b(q,2)
o=q[2]
if(!J.ac(o,"null")){if(3>=p)return H.b(q,3)
n=!J.ac(q[3],"null")}else n=!1
if(n){if(2>=p)return H.b(q,2)
m=P.G(o)
if(3>=p)return H.b(q,3)
l=P.G(q[3])
p=a[s]
if(typeof p!=="number")return p.I()
if(typeof m!=="number")return H.c(m)
if(p<m)C.a.i(a,s,m)
p=a[s]
if(typeof p!=="number")return p.ag()
if(typeof l!=="number")return H.c(l)
if(p>l)C.a.i(a,s,l)}if(J.ac(q[1],"fixed")){p=this.r
if(s>=p.length)return H.b(p,s)
C.a.i(a,s,p[s])}}return a},
be:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=P.d
H.j(a,"$ia",[h],"$aa")
H.j(b,"$ia",[[P.a,P.d]],"$aa")
u=i.cx
if(typeof u!=="number")return H.c(u)
u=new Array(u)
u.fixed$length=Array
t=H.n(u,[h])
C.a.a0(t,0,i.cx,0)
h=i.a
s=h.bi(b)
r=h.b5(s,b)
q=i.cb(r)
p=h.b6(s,i.D(a))
o=h.bT(r,h.at(i.fx,q))
for(u=o.length,n=0;n<u;++n){m=o[n]
if(n>=m.length)return H.b(m,n)
l=m[n]
if(typeof l!=="number")return l.P()
k=i.b
if(typeof k!=="number")return k.H()
if(Math.abs(l)<k/100)(m&&C.a).i(m,n,k)}j=h.b6(h.bb(o),p)
for(u=j.length,n=0;m=i.Q,n<m.length;++n)if(H.aK(m[n])){if(n>=u)return H.b(j,n)
C.a.i(t,n,j[n])}return h.bX(a,t)},
cr:function(a){var u,t,s,r,q,p,o,n=this,m=[P.d]
H.j(a,"$ia",m,"$aa")
u=n.ax(a)
t=0.5*n.ai(a)
s=n.ci(n.be(a,u))
r=0.5*n.ai(s)
if(r<t){q=n.fx
p=n.go
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.c(p)
n.fx=q*p}for(q=n.a;r>t;){p=n.fx
o=n.fy
if(typeof p!=="number")return p.p()
if(typeof o!=="number")return H.c(o)
n.fx=p*o
s=n.be(a,u)
H.j(s,"$ia",m,"$aa")
r=0.5*q.M(n.D(s),n.D(s))}return s},
cH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="maxIterations"
e.ai(e.z)
u=Date.now()
e.fx=0.01
e.saB(e.r)
e.dy=0
t=e.k2.h(0,d)
if(0>=t.length)return H.b(t,0)
s=P.x(t[0])
t=e.k2.h(0,"ftol")
if(0>=t.length)return H.b(t,0)
r=P.G(t[0])
if(typeof s!=="number")return H.c(s)
t=[P.d]
q=e.a
p=0
for(;p<s;++p){o=e.dy
if(typeof o!=="number")return o.l()
e.dy=o+1
n=e.z
H.j(n,"$ia",t,"$aa")
m=q.M(e.D(n),e.D(n))
e.saB(e.cr(n))
o=H.j(e.z,"$ia",t,"$aa")
l=q.M(e.D(o),e.D(o))
if(typeof r!=="number")return H.c(r)
if(l<r){e.id="ftol"
break}if(Math.abs((l-m)/l)<r){e.id="convergence"
break}}t=e.dy
q=e.k2.h(0,d)
if(0>=q.length)return H.b(q,0)
if(t==P.x(q[0]))e.id=d
t=e.z
q=e.cz()
o=e.k2.h(0,"parInfo")
k=e.b9(e.z)
j=e.ax(e.z)
i=e.b4(e.z)
h=e.b1(e.z)
g=e.b1(e.z)
f=e.db
if(typeof f!=="number")return H.c(f)
return P.z(["params",t,"parameterErrors",q,"parInfo",o,"hessian",k,"jac",j,"covar",i,"chi2",h,"chi2red",g/f,"dof",f,"iterations",e.dy,"stopReason",e.id,"initialParams",e.r,"xvals",e.d,"yvals",e.e,"residuals",e.D(e.z),"numJac",e.dx,"time",Date.now()-u,"warnings",e.k1],P.f,null)},
cl:function(){var u,t,s,r,q,p,o=this
o.b=2220446049250313e-29
u=o.d.length
o.ch=u
o.fr=!1
u=new Array(u)
u.fixed$length=Array
o.scM(H.n(u,[P.d]))
u=o.y;(u&&C.a).a0(u,0,o.ch,1)
o.saB(o.r)
u=o.r.length
o.cx=u
u=new Array(u)
u.fixed$length=Array
o.scj(H.n(u,[P.al]))
u=o.Q;(u&&C.a).a0(u,0,o.cx,!0)
u=o.z.length
o.cy=u
t=o.ch
if(typeof t!=="number")return t.m()
o.db=t-u
o.fx=0.1
o.fy=5
o.go=0.5
o.id=null
s=o.dx=0
u=P.f
t=[u]
r=P.z(["maxIterations",H.n(["200"],t),"debug",H.n(["false"],t),"ftol",H.n(["1e-10"],t),"chart",H.n(["false"],t),"paramDeltaConverge",H.n(["0.0001"],t)],u,[P.a,P.f])
u=o.d.length
if(u!==o.e.length)throw H.k("x and y arrays are different lengths")
if(u!==o.y.length)throw H.k("x and weights arrays are different lengths")
o.scg(r)
for(u=o.x.gC(),u=u.gw(u);u.q();){t=u.gt()
if(o.x.h(0,t)!=null)o.k2.i(0,t,o.x.h(0,t))}q=o.k2.h(0,"parInfo")
u=o.cx
o.cy=u
if(q!=null){if(q.length!==u)throw H.k("parInfo and params must be SAME length")
while(!0){u=o.cx
if(typeof u!=="number")return H.c(u)
if(!(s<u))break
c$0:{if(s>=q.length)return H.b(q,s)
p=q[s]
if(p==null)break c$0
u=p.split(" ")
if(1>=u.length)return H.b(u,1)
if(J.ac(u[1],"fixed")){u=o.Q;(u&&C.a).i(u,s,!1)
u=o.cy
if(typeof u!=="number")return u.m()
o.cy=u-1}}++s}u=o.ch
t=o.cy
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.c(t)
o.db=u-t}},
ay:function(a,b,c,d,e){var u
H.p(a,{func:1,ret:P.d,args:[P.d,[P.a,P.d]]})
u=[P.d]
H.j(c,"$ia",u,"$aa")
H.j(d,"$ia",u,"$aa")
H.j(e,"$iu",[P.f,[P.a,P.f]],"$au")
return this.cs(a,b,c,d,e)},
cs:function(a3,a4,a5,a6,a7){var u=0,t=P.eR([P.u,P.f,[P.a,P.f]]),s,r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ay=P.eX(function(a9,b0){if(a9===1)return P.eM(b0,t)
while(true)$async$outer:switch(u){case 0:if(a4==null){h=a5.length
g=new Array(h)
g.fixed$length=Array
a4=H.n(g,[P.d])
for(f=0;f<h;++f)J.a2(a4,f,f)}h=[P.u,P.f,[P.a,P.f]]
g=$.A
e=[h]
q=new M.bC(new M.bI())
d=P.f
c=[P.a,P.f]
p=P.eC(d,c)
o=null
n=null
try{b=q
a=a4
H.p(a3,{func:1,ret:P.d,args:[P.d,[P.a,P.d]]})
a0=[P.d]
H.j(a,"$ia",a0,"$aa")
H.j(a5,"$ia",a0,"$aa")
a1=H.j(n,"$ia",a0,"$aa")
H.j(a6,"$ia",a0,"$aa")
H.j(a7,"$iu",[d,c],"$au")
b.scu(a3)
b.scS(a)
b.scW(a5)
b.scL(a1)
b.scm(a6)
J.fB(b,a7)
b.id=null
b.k1=""
b.cl()
m=b.cH()
b=[d]
o=H.n([],b)
l=0
while(!0){a=l
a0=J.L(J.t(m,"params"))
if(typeof a!=="number"){s=a.I()
u=1
break $async$outer}if(!(a<a0))break
J.bZ(o,J.W(J.t(J.t(m,"params"),l)))
a=l
if(typeof a!=="number"){s=a.l()
u=1
break $async$outer}l=a+1}J.a2(p,"params",o)
o=H.n([],b)
k=0
while(!0){a=k
a0=J.L(J.t(m,"parameterErrors"))
if(typeof a!=="number"){s=a.I()
u=1
break $async$outer}if(!(a<a0))break
J.bZ(o,J.W(J.t(J.t(m,"parameterErrors"),k)))
a=k
if(typeof a!=="number"){s=a.l()
u=1
break $async$outer}k=a+1}J.a2(p,"parameterErrors",o)
J.a2(p,"chi2",H.n([J.W(J.t(m,"chi2"))],b))
J.a2(p,"chi2red",H.n([J.W(J.t(m,"chi2red"))],b))
J.a2(p,"iterations",H.n([J.W(J.t(m,"iterations"))],b))
J.a2(p,"stopReason",H.n([J.W(J.t(m,"stopReason"))],b))
o=H.n([],b)
j=0
while(!0){a=j
a0=J.L(J.t(m,"initialParams"))
if(typeof a!=="number"){s=a.I()
u=1
break $async$outer}if(!(a<a0))break
J.bZ(o,J.W(J.t(J.t(m,"initialParams"),j)))
a=j
if(typeof a!=="number"){s=a.l()
u=1
break $async$outer}j=a+1}J.a2(p,"initialParams",o)
o=H.n([],b)
J.bZ(o,J.W(J.t(m,"time")))
J.a2(p,"time",o)}catch(a8){i=H.R(a8)
p=P.z(["fiterror",H.n(["LMfit: 1000 error=<br>"+H.h(i)],[d])],d,c)}new P.cY(new P.F(g,e),[h]).ar(0,p)
h=p
e=new P.F($.A,e)
e.ak(h)
s=e
u=1
break
case 1:return P.eN(s,t)}})
return P.eO($async$ay,t)},
scu:function(a){this.c=H.p(a,{func:1,ret:P.d,args:[P.d,[P.a,P.d]]})},
scS:function(a){this.d=H.j(a,"$ia",[P.d],"$aa")},
scW:function(a){this.e=H.j(a,"$ia",[P.d],"$aa")},
scL:function(a){this.f=H.j(a,"$ia",[P.d],"$aa")},
scm:function(a){this.r=H.j(a,"$ia",[P.d],"$aa")},
scw:function(a,b){this.x=H.j(b,"$iu",[P.f,[P.a,P.f]],"$au")},
scM:function(a){this.y=H.j(a,"$ia",[P.d],"$aa")},
saB:function(a){this.z=H.j(a,"$ia",[P.d],"$aa")},
scj:function(a){this.Q=H.j(a,"$ia",[P.al],"$aa")},
scg:function(a){this.k2=H.j(a,"$iu",[P.f,[P.a,P.f]],"$au")}}
M.bI.prototype={
M:function(a,b){var u,t,s,r,q,p,o,n,m=[P.d]
H.j(a,"$ia",m,"$aa")
H.j(b,"$ia",m,"$aa")
u=a.length
m=u-1
if(m<0)return H.b(a,m)
t=a[m]
s=b.length
if(m>=s)return H.b(b,m)
m=b[m]
if(typeof t!=="number")return t.p()
if(typeof m!=="number")return H.c(m)
r=t*m
for(q=u-2;q>=1;q-=2){p=q-1
m=a[q]
if(q>=s)return H.b(b,q)
t=b[q]
if(typeof m!=="number")return m.p()
if(typeof t!=="number")return H.c(t)
o=a[p]
if(p>=s)return H.b(b,p)
n=b[p]
if(typeof o!=="number")return o.p()
if(typeof n!=="number")return H.c(n)
r+=m*t+o*n}if(q===0){if(0>=u)return H.b(a,0)
m=a[0]
if(0>=s)return H.b(b,0)
s=b[0]
if(typeof m!=="number")return m.p()
if(typeof s!=="number")return H.c(s)
r+=m*s}return r},
b6:function(a,b){var u,t,s,r
H.j(a,"$ia",[[P.a,P.d]],"$aa")
u=P.d
H.j(b,"$ia",[u],"$aa")
t=new Array(b.length)
t.fixed$length=Array
s=H.n(t,[u])
for(u=a.length,r=0;r<u;++r)C.a.i(s,r,this.M(a[r],b))
return s},
at:function(a,b){var u,t,s,r,q,p,o,n=[P.a,P.d]
H.j(b,"$ia",[n],"$aa")
u=b.length
t=new Array(u)
t.fixed$length=Array
s=H.n(t,[n])
for(n=s.length,t=[P.d],r=0;r<u;++r){q=new Array(b[0].length)
q.fixed$length=Array
C.a.i(s,r,H.n(q,t))
for(p=0;p<b[0].length;++p){if(r>=n)return H.b(s,r)
q=s[r]
o=b[r]
if(p>=o.length)return H.b(o,p)
o=o[p]
if(typeof o!=="number")return o.p()
if(typeof a!=="number")return H.c(a);(q&&C.a).i(q,p,o*a)}}return s},
bq:function(a){var u,t,s,r,q=P.d
H.j(a,"$ia",[q],"$aa")
u=a.length
t=new Array(u)
t.fixed$length=Array
s=H.n(t,[q])
for(r=0;r<u;++r)C.a.i(s,r,Math.sqrt(H.f1(a[r])))
return s},
cd:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=[P.a,P.d],b=[c]
H.j(a,"$ia",b,"$aa")
H.j(a0,"$ia",b,"$aa")
u=a.length
t=a0.length
if(0>=t)return H.b(a0,0)
s=a0[0].length
b=new Array(u)
b.fixed$length=Array
r=H.n(b,[c])
for(q=u-1,p=s-1,o=t-2,c=t-1,b=[P.d],n=null,m=null,l=null;q>=0;--q){k=new Array(s)
k.fixed$length=Array
j=H.n(k,b)
i=a[q]
for(h=p;h>=0;--h){k=i.length
if(c<0||c>=k)return H.b(i,c)
g=i[c]
f=a0[c]
if(h>=f.length)return H.b(f,h)
f=f[h]
if(typeof g!=="number")return g.p()
if(typeof f!=="number")return H.c(f)
l=g*f
for(n=o;n>=1;n-=2){m=n-1
if(n>=k)return H.b(i,n)
g=i[n]
f=a0[n]
if(h>=f.length)return H.b(f,h)
f=f[h]
if(typeof g!=="number")return g.p()
if(typeof f!=="number")return H.c(f)
if(m>=k)return H.b(i,m)
e=i[m]
d=a0[m]
if(h>=d.length)return H.b(d,h)
d=d[h]
if(typeof e!=="number")return e.p()
if(typeof d!=="number")return H.c(d)
l+=g*f+e*d}if(n===0){if(0>=k)return H.b(i,0)
k=i[0]
g=a0[0]
if(h>=g.length)return H.b(g,h)
g=g[h]
if(typeof k!=="number")return k.p()
if(typeof g!=="number")return H.c(g)
l+=k*g}C.a.i(j,h,l)}C.a.i(r,q,j)}return r},
bE:function(a,b,c){var u,t,s
H.j(a,"$ia",[[P.a,P.d]],"$aa")
H.j(c,"$ia",[P.d],"$aa")
u=a.length
for(t=u-1;t>0;--t){s=a[t]
if(b<0||b>=s.length)return H.b(s,b)
C.a.i(c,t,s[b]);--t
s=a[t]
if(b>=s.length)return H.b(s,b)
C.a.i(c,t,s[b])}if(t===0){if(0>=u)return H.b(a,0)
s=a[0]
if(b<0||b>=s.length)return H.b(s,b)
C.a.i(c,0,s[b])}},
cc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=[P.a,P.d],j=[k]
H.j(a,"$ia",j,"$aa")
H.j(b,"$ia",j,"$aa")
u=b.length
j=new Array(u)
j.fixed$length=Array
t=[P.d]
s=H.n(j,t)
r=a.length
if(0>=u)return H.b(b,0)
q=b[0].length
j=new Array(r)
j.fixed$length=Array
p=H.n(j,[k])
o=r-1
for(n=o;n!==-1;--n){k=new Array(q)
k.fixed$length=Array
C.a.i(p,n,H.n(k,t))}--q
for(k=p.length,n=q,m=null;n!==-1;--n){this.bE(b,n,s)
for(l=o;l!==-1;--l){if(l<0)return H.b(a,l)
m=a[l]
if(l>=k)return H.b(p,l)
j=p[l];(j&&C.a).i(j,n,this.M(m,s))}}return p},
b5:function(a,b){var u=[[P.a,P.d]]
H.j(a,"$ia",u,"$aa")
H.j(b,"$ia",u,"$aa")
if(b.length<10)return this.cd(a,b)
else return this.cc(a,b)},
bT:function(a,b){var u,t,s,r,q,p,o,n,m=[P.a,P.d],l=[m]
H.j(a,"$ia",l,"$aa")
H.j(b,"$ia",l,"$aa")
l=a.length
u=new Array(l)
u.fixed$length=Array
t=H.n(u,[m])
for(m=t.length,u=b.length,s=[P.d],r=0;r<l;++r){q=new Array(a[0].length)
q.fixed$length=Array
C.a.i(t,r,H.n(q,s))
for(p=0;p<a[0].length;++p){if(r>=m)return H.b(t,r)
q=t[r]
o=a[r]
if(p>=o.length)return H.b(o,p)
o=o[p]
if(r>=u)return H.b(b,r)
n=b[r]
if(p>=n.length)return H.b(n,p)
n=n[p]
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.c(n);(q&&C.a).i(q,p,o+n)}}return t},
bX:function(a,b){var u,t,s,r=P.d,q=[r]
H.j(a,"$ia",q,"$aa")
H.j(b,"$ia",q,"$aa")
q=new Array(a.length)
q.fixed$length=Array
u=H.n(q,[r])
for(r=b.length,t=0;t<a.length;++t){q=a[t]
if(t>=r)return H.b(b,t)
s=b[t]
if(typeof q!=="number")return q.l()
if(typeof s!=="number")return H.c(s)
C.a.i(u,t,q+s)}return u},
bs:function(a){var u,t,s,r,q
H.j(a,"$ia",[[P.a,P.d]],"$aa")
for(u=a.length,t=0,s=0;s<u;++s)for(r=0;r<a[0].length;++r){q=a[s]
if(r>=q.length)return H.b(q,r)
q=q[r]
if(typeof q!=="number")return H.c(q)
t+=q}return t},
a_:function(a,b,c){var u,t,s,r,q=new Array(a)
q.fixed$length=Array
u=H.n(q,[[P.a,P.d]])
for(q=[P.d],t=u.length,s=0;s<a;++s){r=new Array(b)
r.fixed$length=Array
C.a.i(u,s,H.n(r,q))
if(s>=t)return H.b(u,s)
r=u[s];(r&&C.a).a0(r,0,b,c)}return u},
c6:function(a,b){var u,t,s,r=this.a_(a,a,0)
for(u=r.length,t=0;t<a;++t){if(t>=u)return H.b(r,t)
s=r[t];(s&&C.a).i(s,t,b)}return r},
c4:function(a){var u,t,s,r,q,p,o,n
H.j(a,"$ia",[[P.a,P.d]],"$aa")
u=a.length
if(0>=u)return H.b(a,0)
t=a[0].length
s=this.a_(t,u,0)
for(r=s.length,q=0;q<t;++q)for(p=0;p<u;++p){if(q>=r)return H.b(s,q)
o=s[q]
if(q>=u)return H.b(a,q)
n=a[q]
if(p>=n.length)return H.b(n,p);(o&&C.a).i(o,p,n[p])}return s},
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=[P.a,P.d]
H.j(a,"$ia",[j],"$aa")
u=a.length
if(0>=u)return H.b(a,0)
t=a[0].length
s=new Array(t)
s.fixed$length=Array
r=H.n(s,[j])
for(j=[P.d],q=0;q<t;++q){s=new Array(u)
s.fixed$length=Array
C.a.i(r,q,H.n(s,j))}for(p=u-1,q=t-1,j=r.length,o=null;p>=1;p-=2){n=a[p]
u=p-1
m=a[u]
for(l=q;l>=1;--l){if(l>=j)return H.b(r,l)
o=r[l]
s=n.length
if(l>=s)return H.b(n,l);(o&&C.a).i(o,p,n[l])
k=m.length
if(l>=k)return H.b(m,l)
C.a.i(o,u,m[l]);--l
if(l>=j)return H.b(r,l)
o=r[l]
if(l>=s)return H.b(n,l);(o&&C.a).i(o,p,n[l])
if(l>=k)return H.b(m,l)
C.a.i(o,u,m[l])}if(l===0){if(0>=j)return H.b(r,0)
o=r[0]
if(0>=n.length)return H.b(n,0);(o&&C.a).i(o,p,n[0])
if(0>=m.length)return H.b(m,0)
C.a.i(o,u,m[0])}}if(p===0){m=a[0]
for(;q>=1;--q){if(q>=j)return H.b(r,q)
u=r[q]
s=m.length
if(q>=s)return H.b(m,q);(u&&C.a).i(u,0,m[q]);--q
if(q>=j)return H.b(r,q)
u=r[q]
if(q>=s)return H.b(m,q);(u&&C.a).i(u,0,m[q])}if(q===0){if(0>=j)return H.b(r,0)
j=r[0]
if(0>=m.length)return H.b(m,0);(j&&C.a).i(j,0,m[0])}}return r},
bb:function(a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.j(a4,"$ia",[[P.a,P.d]],"$aa")
u=a4.length
if(0>=u)return H.b(a4,0)
t=a4[0].length
s=this.c4(a4)
r=this.c6(u,1)
for(q=u-1,p=t-1,o=s.length,n=r.length,m=null,l=null,k=0,j=null;k<t;k=a0){for(i=k,h=-1,g=-1;i!==u;++i){if(i>=o)return H.b(s,i)
f=s[i]
if(k>=f.length)return H.b(f,k)
j=J.fu(f[k])
if(j>g){g=j
h=i}}if(h===-1)throw H.k("Matrix not invertible.")
if(h<0||h>=o)return H.b(s,h)
e=s[h]
if(k>=o)return H.b(s,k)
s[h]=s[k]
s[k]=e
if(h>=n)return H.b(r,h)
d=r[h]
if(k>=n)return H.b(r,k)
r[h]=r[k]
r[k]=d
f=e.length
if(k>=f)return H.b(e,k)
c=e[k]
for(b=k;b!==t;++b){if(b>=f)return H.b(e,b)
a=e[b]
if(typeof a!=="number")return a.H()
if(typeof c!=="number")return H.c(c)
C.a.i(e,b,a/c)}for(b=p;b!==-1;--b){if(b<0||b>=d.length)return H.b(d,b)
a=d[b]
if(typeof a!=="number")return a.H()
if(typeof c!=="number")return H.c(c)
C.a.i(d,b,a/c)}for(a0=k+1,i=q;i!==-1;--i)if(i!==k){if(i<0||i>=o)return H.b(s,i)
m=s[i]
if(i>=n)return H.b(r,i)
l=r[i]
a=m.length
if(k>=a)return H.b(m,k)
c=m[k]
for(b=a0;b!==t;++b){if(b>=a)return H.b(m,b)
a1=m[b]
if(b>=f)return H.b(e,b)
a2=e[b]
if(typeof a2!=="number")return a2.p()
if(typeof c!=="number")return H.c(c)
if(typeof a1!=="number")return a1.m()
C.a.i(m,b,a1-a2*c)}for(b=p;b>0;--b){a=l.length
if(b>=a)return H.b(l,b)
a1=l[b]
a2=d.length
if(b>=a2)return H.b(d,b)
a3=d[b]
if(typeof a3!=="number")return a3.p()
if(typeof c!=="number")return H.c(c)
if(typeof a1!=="number")return a1.m()
C.a.i(l,b,a1-a3*c);--b
if(b>=a)return H.b(l,b)
a=l[b]
if(b>=a2)return H.b(d,b)
a2=d[b]
if(typeof a2!=="number")return a2.p()
if(typeof a!=="number")return a.m()
C.a.i(l,b,a-a2*c)}if(b===0){if(0>=l.length)return H.b(l,0)
a=l[0]
if(0>=d.length)return H.b(d,0)
a1=d[0]
if(typeof a1!=="number")return a1.p()
if(typeof c!=="number")return H.c(c)
if(typeof a!=="number")return a.m()
C.a.i(l,0,a-a1*c)}}}return r},
bo:function(a){var u,t,s,r,q
H.j(a,"$ia",[[P.a,P.d]],"$aa")
u=a.length
if(0>=u)return H.b(a,0)
t=Math.min(u,a[0].length)
s=new Array(t)
s.fixed$length=Array
r=H.n(s,[P.d])
for(q=t-1;q>=1;--q){if(q>=u)return H.b(a,q)
s=a[q]
if(q>=s.length)return H.b(s,q)
C.a.i(r,q,s[q]);--q
if(q>=u)return H.b(a,q)
s=a[q]
if(q>=s.length)return H.b(s,q)
C.a.i(r,q,s[q])}if(q===0){u=a[0]
if(0>=u.length)return H.b(u,0)
C.a.i(r,0,u[0])}return r}}
M.bj.prototype={
aL:function(c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="rotate(90) translate(",c7=e1.h(0,C.x),c8=e1.h(0,C.r)
if(J.am(c8).S(c8,"-"))c4.f=!0
p=!C.b.S(c8,"y")||!1
if(C.b.S(c8,"x2")){p=!1
o=!0}else o=!1
if(c4.r==null)c4.r=0
n=new M.c8(c4,d2,d3,c9,d4,d5)
m=new M.c9(c4,d2,d3,c9,d4,d5)
l=P.f
c4.sbz(0,P.ai($.dW,M.w,l))
c4.e.A(0,e1)
k=B.ez(c4.e.h(0,C.T))
j=B.ez(c4.e.h(0,C.U))
e3.a=6
i=!p
h=i?j:k
h.B(0,new M.c5(e3,d7))
u=d0
t=d1
g=c4.r
if(g!=null&&c4.f){if(typeof g!=="number")return g.m()
u=g-d0
t=g-d1}s=null
f=P.x(c4.e.h(0,C.k))
if(p){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.bk(n.$1(u),n.$1(t),e3.a,c5,!1)
if(J.L(s)>2){e=P.G(J.fy(s))
d=P.G(J.fA(s))
g=u
if(typeof e!=="number")return e.I()
if(typeof g!=="number")return H.c(g)
if(!(e<g)){g=t
if(typeof d!=="number")return d.ag()
if(typeof g!=="number")return H.c(g)
g=d>g}else g=!0
if(g){g=e3.a
if(typeof g!=="number")return g.l()
e3.a=g+1
s=M.bk(n.$1(u),n.$1(t),e3.a,c5,!1)}}g=J.L(s)
c=J.t(s,J.L(s)/2|0)
if(typeof f!=="number")return H.c(f)
if(C.m.a1(g*c.length*f*0.6)>d7){g=e3.a
if(typeof g!=="number")return H.c(g)
e3.a=C.l.a1(0.8*g)
s=M.bk(n.$1(u),n.$1(t),e3.a,c5,!1)}b=P.x(c4.e.h(0,C.h))
if(typeof b!=="number")return b.l()
a=b+f+4
g=P.x(c4.e.h(0,C.E))
if(typeof g!=="number")return H.c(g)
a0=a+g
if(C.b.S(c8,"t")){g=P.x(c4.e.h(0,C.h))
if(typeof g!=="number")return H.c(g)
b=d8-g
a=b-4
g=P.x(c4.e.h(0,C.E))
if(typeof g!=="number")return H.c(g)
a0=a-g
a1=d8}else a1=0
a2=c4.e.h(0,C.P)}else{if(o){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.bk(n.$1(u),n.$1(t),e3.a,c5,!1)}else try{r=d2
q=d3
s=M.bk(D.eF(u,r,q),D.eF(t,r,q),e3.a,c5,!1)}catch(a3){H.R(a3)
s=H.n(["0.0"],[l])}g=P.x(c4.e.h(0,C.h))
if(typeof g!=="number")return H.c(g)
b=d8-g
g=P.x(c4.e.h(0,C.D))
if(typeof g!=="number")return H.c(g)
a=b-g
g=P.x(c4.e.h(0,C.F))
if(typeof g!=="number")return H.c(g)
a0=a-g
if(C.b.S(c8,"t")){b=P.x(c4.e.h(0,C.h))
g=P.x(c4.e.h(0,C.D))
if(typeof b!=="number")return b.l()
if(typeof g!=="number")return H.c(g)
a=b+g
g=P.x(c4.e.h(0,C.S))
if(typeof g!=="number")return H.c(g)
a0=a+g
a1=0}else a1=d8
a2=c4.e.h(0,C.Q)}a4=H.n([],[P.K])
c4.a=P.b5()
c4.c=P.x(c4.e.h(0,C.L))
c4.d=P.x(c4.e.h(0,C.M))
for(g=d3!=null,c=d2!=null,a5=c5,a6=a5,a7=a6,a8=a7,a9=a8,b0="middle",b1="0",b2=0;b2<J.L(s);++b2){b3=P.G(J.t(s,b2))
if(!i||o){b4=H.ed(m.$1(b3))
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.m()
if(typeof b4!=="number")return H.c(b4)
b4=b5-b4}b6=J.az(c4.x.$1(b4))}else{if(g&&c){if(typeof b3!=="number")return b3.p()
if(typeof d3!=="number")return H.c(d3)
b7=b3*d2/d3}else b7=b3
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.m()
if(typeof b7!=="number")return H.c(b7)
b4=b5-b7}else b4=b7
b6=J.az(c4.x.$1(b4))}C.a.n(a4,b6)
if(b6<0)continue
if(b6>d7)continue
b5=document
b8=b5.createElementNS("http://www.w3.org/2000/svg","text")
b8=H.o(H.o(b8,"$im"),"$ia4")
if(J.t(s,b2).length>4){if(typeof b3!=="number")return b3.P()
b9=Math.abs(b3)>99999}else b9=!1
if(b9){J.a2(s,b2,J.fC(b3,2))
b9=s
c0=J.t(s,b2)
J.a2(b9,b2,H.hL(c0,"e",""))}b8.textContent=J.t(s,b2)
if(p){b9=c4.c
if(typeof b9!=="number")return H.c(b9)
a6=b6+b9
a5=a}else{b9=c4.d
if(typeof b9!=="number")return H.c(b9)
a5=b6+b9
b0=H.ei(c8,"t",0)?"start":"end"
a6=a
b1="-33%"}B.E(b8,P.z(["x",""+a6,"y",""+a5,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.k),"text-anchor",b0,"baseline-shift",b1,"cursor","default"],l,l))
c4.a.appendChild(b8)
if(c4.e.Z(C.h)){b9=P.x(c4.e.h(0,C.h))
if(typeof b9!=="number")return b9.ag()
b9=b9>0}else b9=!1
if(b9){c1=b5.createElementNS("http://www.w3.org/2000/svg","line")
c1=H.o(H.o(c1,"$im"),"$iat")
if(p){b5=c4.c
if(typeof b5!=="number")return H.c(b5)
a7=b6+b5}else{b5=c4.d
if(typeof b5!=="number")return H.c(b5)
a7=b6+b5}if(p)B.E(c1,P.z(["x1",""+a7,"y1",""+a1,"x2",""+a7,"y2",""+b],l,l))
else B.E(c1,P.z(["x1",""+a1,"y1",""+a7,"x2",""+b,"y2",""+a7],l,l))
B.E(c1,P.z(["stroke",c4.e.h(0,C.N),"stroke-width",c4.e.h(0,C.O)],l,l))
c4.a.appendChild(c1)
a8=c1}if(H.ei(c8,"g",0))b5=d9>0
else b5=!1
if(b5)if(p)c4.b=S.eK(a4,c5,c5,d9,e1)
else c4.b=S.eK(c5,a4,d9,c5,e1)
a9=b8}if(c7!=null&&C.b.bj(c7).length!==0){a9=H.o(H.o(C.e.G(document,"http://www.w3.org/2000/svg","text"),"$im"),"$ia4")
a9.textContent=c7
if(p){i=c4.c
if(typeof i!=="number")return H.c(i)
B.E(a9,P.z(["x",H.h(d7/2+i),"y",""+a0,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.k),"text-anchor","middle","cursor","default"],l,l))}else{c2=P.x(c4.e.h(0,C.F))
c3="rotate(-90) translate("+H.h(-d7/2)+", "+H.h(c2)+")"
if(J.ac(c4.e.h(0,C.R),"tb")){i=d7/2
g=c6+H.h(i)+", "
if(typeof c2!=="number")return c2.ah()
c3=g+-c2+")"
if(C.b.S(c8,"t"))c3=c6+H.h(i)+", "+(-d8+C.m.a1(d8*0.22))+")"}B.E(a9,P.z(["x","0","y","0","fill",a2,"stroke","none","font-size",c4.e.h(0,C.k),"text-anchor","middle","transform",c3,"cursor","default"],l,l))}l=W.b8
i={func:1,ret:-1,args:[l]}
W.e7(a9,"touchstart",H.p(new M.c6(e2),i),!1,l)
W.e7(a9,"touchmove",H.p(new M.c7(e2),i),!1,l)
c4.a.appendChild(a9)}},
sbz:function(a,b){this.e=H.j(b,"$iu",[M.w,P.f],"$au")}}
M.c4.prototype={
$0:function(){var u=this.a
u.i(0,C.r,J.fq(u.h(0,C.r),"y"))
return u},
$S:20}
M.c8.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.H()
if(typeof p!=="number")return H.c(p)
u=q/p
if(!H.aK(s.e))u=-u
if(o){if(typeof r!=="number")return r.l()
t=r+(a+0.5)*u}else{if(typeof r!=="number")return r.l()
t=r+a*u}return t},
$S:2}
M.c9.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.H()
if(typeof p!=="number")return H.c(p)
u=q/p
if(!H.aK(s.e))u=-u
if(o){if(typeof a!=="number")return a.m()
if(typeof r!=="number")return H.c(r)
t=(a-r)/u-0.5}else{if(typeof a!=="number")return a.m()
if(typeof r!=="number")return H.c(r)
t=(a-r)/u}return t},
$S:2}
M.c5.prototype={
$2:function(a,b){var u
H.B(a)
H.B(b)
u=P.x(a)
if(typeof u!=="number")return H.c(u)
if(this.b>u){this.a.a=P.x(b)
return}},
$S:21}
M.c6.prototype={
$1:function(a){H.o(a,"$iJ").preventDefault()},
$S:7}
M.c7.prototype={
$1:function(a){H.o(a,"$iJ").preventDefault()},
$S:7}
M.w.prototype={
j:function(a){return this.b}}
S.cV.prototype={
c2:function(){var u,t,s,r,q,p,o,n,m=this,l="stroke-dasharray",k=P.b5(),j=m.e,i=j!=null
if(i)for(u=m.d,t=P.f,s=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.o(H.o(p,"$im"),"$iat")
if(r>=j.length)return H.b(j,r)
q=""+j[r]
if(r>=j.length)return H.b(j,r)
B.E(p,P.z(["x1",q,"y1","0","x2",""+j[r],"y2",H.h(u),"stroke",m.b.h(0,C.t),"stroke-width",m.b.h(0,C.u),"stroke-opacity",m.b.h(0,C.v),l,m.b.h(0,C.w)],t,t))
k.appendChild(p)
s=p}j=m.f
i=j!=null
if(i)for(u=m.c,t=P.f,o=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.o(H.o(p,"$im"),"$iat")
if(r>=j.length)return H.b(j,r)
q=""+j[r]
n=H.h(u)
if(r>=j.length)return H.b(j,r)
B.E(p,P.z(["x1","0","y1",q,"x2",n,"y2",""+j[r],"stroke",m.b.h(0,C.t),"stroke-width",m.b.h(0,C.u),"stroke-opacity",m.b.h(0,C.v),l,m.b.h(0,C.w)],t,t))
k.appendChild(p)
o=p}m.a=k},
sc_:function(a,b){this.b=H.j(b,"$iu",[M.w,P.f],"$au")}}
D.cv.prototype={
ba:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/2000/svg",h="legend",g=j.c,f=document
g.i(0,a,H.o(H.o(C.e.G(f,i,"text"),"$im"),"$ia4"))
g.h(0,a).textContent=b
u=j.b
j.ch=P.x(J.t(u.h(0,h),C.H))
J.bY(g.h(0,a),"font-size",H.h(j.ch))
t=g.h(0,a)
s=J.t(u.h(0,h),C.G)
t.toString
J.bY(t,"fill",H.B(s))
s=j.ch
t=P.x(J.t(u.h(0,h),C.a2))
if(typeof s!=="number")return s.l()
if(typeof t!=="number")return H.c(t)
r=s+t
t=j.cy
s=t*r
j.e=s
q=c!=null
if(q){p=j.r
if(typeof p!=="number")return H.c(p)
o=12+p}else o=12
if(j.db!=null)j.e=s+2*r
s=a==="TOP_TITLE_ID"
if(s){j.e=r
p=j.r
if(typeof p!=="number")return p.a2()
o=12-C.d.Y(p,2)}j.cy=t-1
t=j.z
C.aE.bY(t,g.h(0,a))
J.bY(g.h(0,a),"x",""+o)
J.bY(g.h(0,a),"y",H.h(j.e))
if(!s&&q){g=j.e
if(typeof g!=="number")return g.m()
n=H.o(H.o(C.e.G(f,i,"rect"),"$im"),"$ia0")
m=P.x(J.t(u.h(0,h),C.a1))
l=j.r
k=P.x(J.t(u.h(0,h),C.H))
if(typeof k!=="number")return k.a2()
u=C.d.Y(k,2)
n.setAttribute("x","6")
n.setAttribute("y",""+(g-r+u))
n.setAttribute("width",H.h(l))
n.setAttribute("height",H.h(m))
n.setAttribute("fill",c)
j.d.i(0,a,n)
t.appendChild(n)}},
aI:function(a,b,c){var u,t=this,s=t.c
if(s.Z(a)){u=s.h(0,a)
u.textContent=b;(u&&C.ao).cE(u,u)}else t.ba(a,b,c)
t.bS(t.e)},
bS:function(a){var u,t,s,r=this,q="legend",p=r.Q
if(p!=null)C.an.ae(p)
r.Q=H.o(H.o(C.e.G(document,"http://www.w3.org/2000/svg","rect"),"$im"),"$ia0")
p=r.b
u=P.x(J.t(p.h(0,q),C.Z))
if(u===0)return
t=P.x(J.t(p.h(0,q),C.a_))
r.Q.setAttribute("x","0")
r.Q.setAttribute("y","0")
s=r.Q
s.toString
s.setAttribute("width",H.h(u))
s=r.Q
s.toString
s.setAttribute("height",H.h(t))
s=r.Q
s.toString
s.setAttribute("fill",H.B(J.t(p.h(0,q),C.X)))
s=r.Q
s.toString
s.setAttribute("fill-opacity",H.B(J.t(p.h(0,q),C.Y)))
r.z.appendChild(r.Q)}}
D.D.prototype={
j:function(a){return this.b}}
D.cE.prototype={
scA:function(a){this.y=H.j(a,"$iP",[P.K],"$aP")},
sc8:function(a){this.z=H.j(a,"$iP",[P.K],"$aP")},
scQ:function(a){this.Q=H.j(a,"$iP",[P.K],"$aP")},
scU:function(a){this.ch=H.j(a,"$iP",[P.K],"$aP")},
sc9:function(a){this.cx=H.j(a,"$iP",[P.K],"$aP")}}
V.aC.prototype={
bv:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q=this
q.sbZ(P.ai($.dV(),V.v,P.f))
if(i!=null)q.a.A(0,i)
if(q.a.h(0,C.I)!=null){q.cy=P.x(q.a.h(0,C.I))
q.a.bf(0,C.I)}if(q.a.h(0,C.J)!=null){q.db=P.x(q.a.h(0,C.J))
q.a.bf(0,C.J)}u=q.cy
if(u==null)u=q.cy=0
t=q.db
if(t==null){t=q.r2.length-1
q.db=t}if(t<=u)t=q.db=u+1
if(u<0||u>q.r2.length-1)q.cy=0
u=q.r2
s=u.length-1
if(t>s||t<0)q.db=s
q.y2=B.h4(q.a.h(0,C.ai))
q.f=P.x(q.a.h(0,C.ak))
q.x=q.r=P.x(q.a.h(0,C.al))
u=F.fM(u,q.cy,q.db,!1,P.x(q.a.h(0,C.aa)))
q.b=u
u=u.d.length
q.rx=new Float64Array(u)
for(r=0;u=q.b.d,r<u.length;++r){t=q.rx
u=u[r]
u.toString;(t&&C.o).i(t,r,u)}q.b7=E.eq(q.rx)[0]
q.b8=E.ep(q.rx)[0]
q.U=E.eq(q.b.a)[0]
q.E=E.ep(q.b.a)[0]
q.T=P.b5()
q.bn()},
bn:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a.h(0,C.B)==null||J.ac(j.a.h(0,C.B),"null")?j.cx=null:j.cx=P.G(j.a.h(0,C.B))
if(i!=null){u=j.E
if(typeof u!=="number")return u.P()
u=Math.abs(u)>0.0001}else u=!1
if(u){u=j.E
if(typeof i!=="number")return i.H()
if(typeof u!=="number")return H.c(u)
t=i/u
i=j.U
if(typeof i!=="number")return H.c(i)
j.U=t*i
j.E=t*u}j.k1=P.x(j.a.h(0,C.ac))
j.k2=P.x(j.a.h(0,C.ag))
j.k3=P.x(j.a.h(0,C.ah))
j.k4=P.G(j.a.h(0,C.ab))
j.r1=P.G(j.a.h(0,C.ae))
if(j.a.h(0,C.af)!=null){i=j.r1
u=P.G(j.a.h(0,C.af))
if(typeof i!=="number")return i.p()
if(typeof u!=="number")return H.c(u)
j.r1=i*u}i=j.f
if(typeof i!=="number")return H.c(i)
j.Q=j.y-2*i
i=j.r
if(typeof i!=="number")return H.c(i)
u=j.x
if(typeof u!=="number")return H.c(u)
j.ch=j.z-i-u
s=j.rx.length
j.fx=1e6
j.fy=0
for(i=s-1,r=null,q=null,p=0,u="";p<s;++p){o=j.rx
if(p>=o.length)return H.b(o,p)
o=o[p]
n=j.k4
if(typeof n!=="number")return H.c(n)
m=j.b.a
if(p>=m.length)return H.b(m,p)
l=m[p]
r=J.az(j.aG(o*n))
q=J.az(j.aH(l))
if(!H.aK(j.y2))if(q<0)q=2
else{o=j.ch
if(typeof o!=="number")return H.c(o)
if(q>o)q=o-1}o=p===i
u=o?u+(""+r+" "+q):u+(""+r+" "+q+",")
if(o)j.dy=r
o=j.fy
if(typeof o!=="number")return H.c(o)
if(q>o)j.fy=q
o=j.fx
if(typeof o!=="number")return H.c(o)
if(q<o)j.fx=q}i=j.c
if(i!=null)C.aA.ae(i)
j.c=H.o(H.o(C.e.G(document,"http://www.w3.org/2000/svg","polyline"),"$im"),"$iaD")
k=j.a.h(0,C.f)
i=P.x(j.a.h(0,C.a9))
j.cf=i
j.x1=!1
j.c.setAttribute("stroke-width",H.h(i))
i=j.ry
if(i!=null){o=P.f
B.E(i,P.z(["stroke",H.h(k),"fill","none"],o,o))}i=j.c
o=j.a.h(0,C.f)
i.toString
i.setAttribute("stroke",H.B(o))
i.setAttribute("fill","none")
i.setAttribute("points",u.charCodeAt(0)==0?u:u)
if(j.a.h(0,C.a6)!=null){i=j.c
u=j.a.h(0,C.a6)
i.toString
i.setAttribute("transform",H.B(u))}j.T.appendChild(j.c)
j.fr=q
if(J.ac(j.a.h(0,C.aj),"true"))j.bW(r,q)
j.bV()
j.bU(r,q)},
aG:function(a){var u,t,s,r,q=this,p=q.b8,o=q.b7
if(typeof p!=="number")return p.m()
if(typeof o!=="number")return H.c(o)
p-=o
if(Math.abs(p)<0.000001)u=a
else{if(typeof a!=="number")return a.m()
t=q.Q
if(typeof t!=="number")return H.c(t)
s=q.f
if(typeof s!=="number")return H.c(s)
r=q.k1
if(typeof r!=="number")return H.c(r)
u=(a-o)*t/p+s+r}return u},
bm:function(a){var u,t=this,s=t.a8
if(s==null||t.av==null)return
if(typeof s!=="number")return s.P()
u=Math.abs(s)<1e-10
if(u&&a<=0){s=t.E
u=t.r1
if(typeof s!=="number")return s.H()
if(typeof u!=="number")return H.c(u)
return s/u}if(u&&a>=t.z){s=t.E
if(typeof s!=="number")return s.ah()
u=t.r1
if(typeof u!=="number")return H.c(u)
return-s/u}u=t.av
if(typeof u!=="number")return H.c(u)
return-(a-u)/s},
aH:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ch,i=P.G(l.a.h(0,C.j))
P.G(l.a.h(0,C.ad))
u=l.r1
if(typeof u!=="number")return H.c(u)
t=1-u
if(typeof i!=="number")return H.c(i)
if(t>i)t=i-0.01
if(typeof j!=="number")return H.c(j)
s=l.r
if(typeof s!=="number")return H.c(s)
r=i*j+s
q=l.U
if(typeof q!=="number")return q.I()
if(q<0){p=l.E
if(typeof p!=="number")return p.I()
p=p<0}else p=!1
o=l.E
if(p){if(typeof a!=="number")return a.ah()
a=-a
if(typeof o!=="number")return o.ah()
n=l.E=-q
l.U=-o
o=n}if(typeof o!=="number")return o.m()
q=o-0
p=Math.abs(q)<0.000001
if(p){if(typeof a!=="number")return a.p()
u=a*Math.abs(u)<0.000001}else u=!1
if(u)u=l.a8=0
else if(p){l.a8=0
u=0}else{u=-(t*j+s-r)/q
l.a8=u}s=l.k2
if(typeof s!=="number")return H.c(s)
q=l.k3
if(typeof q!=="number")return H.c(q)
q=r+u*0+s+q
l.av=q
if(typeof a!=="number")return H.c(a)
k=-u*a+q
try{J.az(k)
u=k
return u}catch(m){H.R(m)
return l.z/2}},
bW:function(a,b){var u,t,s,r=this,q=r.ry
if(q!=null)C.an.ae(q)
if(a==null){a=r.x2
if(a!=null&&r.y1!=null)b=r.y1
else{a=r.dy
if(a!=null&&r.fr!=null)b=r.fr
else return}}u=P.x(r.a.h(0,C.a7))
if(J.ac(r.a.h(0,C.a8),"true")){q=r.f
if(typeof q!=="number")return q.a2()
q=C.d.Y(q,2)
if(typeof a!=="number")return a.ag()
q=a>r.y-q}else q=!1
if(q){if(typeof u!=="number")return H.c(u)
a=r.y-u}if(typeof a!=="number")return a.l()
r.x2=a+2
if(typeof u!=="number")return u.a2()
q=C.d.Y(u,2)
if(typeof b!=="number")return b.m()
r.y1=b-q
t=r.a.h(0,C.f)
q=H.o(H.o(C.e.G(document,"http://www.w3.org/2000/svg","rect"),"$im"),"$ia0")
r.ry=q
s=P.f
B.E(q,P.z(["x",H.h(r.x2),"y",H.h(r.y1),"width",""+u,"height",""+u,"stroke",H.h(t),"fill","white"],s,s))
r.T.appendChild(r.ry)},
bV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.d,b=c.length
if(b!==0){for(u=0;u<c.length;c.length===b||(0,H.fd)(c),++u){t=c[u]
s=t.parentNode
if(s!=null)s.removeChild(t)}C.a.sk(c,0)}r=d.a.h(0,C.a4)
if(r==null||r.length===0)return
b=P.f
q=H.j(J.el(C.i.as(0,r),b),"$ia",[b],"$aa")
t=q.ga9(q)
s=q.a
p=J.am(s)
if(p.gk(s)<4)return
for(o=t==="POLYLINE_POINT_SHAPE_CIRCLE_EMPTY",n=t==="POLYLINE_POINT_SHAPE_SQUARE_EMPTY",m=H.i(q,1),l=2;l<p.gk(s);l+=2){k=P.G(H.V(p.h(s,l),m))
j=P.G(H.V(p.h(s,l+1),m))
i=J.az(d.aG(k))
h=J.az(d.aH(j))
g=d.a.h(0,C.a5)
if(g==null)g=d.a.h(0,C.f)
if(n){f=document.createElementNS("http://www.w3.org/2000/svg","rect")
f=H.o(H.o(f,"$im"),"$ia0")
B.E(f,P.z(["x",H.h(i+18626451505319996e-25),"y",H.h(h+18626451505319996e-25),"width","8","height","8","stroke",H.h(g),"fill","white"],b,b))
e=f}else if(o){f=document.createElementNS("http://www.w3.org/2000/svg","circle")
f=H.o(H.o(f,"$im"),"$iaT")
B.E(f,P.z(["cx",""+i,"cy",""+h,"r","6","stroke",H.h(g),"fill","white"],b,b))
e=f}else e=null
C.a.n(c,e)
d.T.appendChild(e)}d.a.i(0,C.C,H.V(p.h(s,1),m))},
bU:function(a,b){var u,t,s,r,q=this,p=q.e
if(p!=null)C.ao.ae(p)
if(q.a.h(0,C.C)==null||J.L(q.a.h(0,C.C))===0)return
p=H.o(H.o(C.e.G(document,"http://www.w3.org/2000/svg","text"),"$im"),"$ia4")
q.e=p
p.textContent=H.B(q.a.h(0,C.C))
u=P.x(q.a.h(0,C.am))
p=q.e
if(typeof a!=="number")return a.l()
t=""+(a+8)
if(typeof u!=="number")return u.a2()
s=C.d.Y(u,4)
if(typeof b!=="number")return b.l()
r=P.f
B.E(p,P.z(["x",t,"y",""+(b+s),"font-size",""+u,"fill",q.a.h(0,C.f),"stroke","none"],r,r))
q.T.appendChild(q.e)},
sbZ:function(a){this.a=H.j(a,"$iu",[V.v,P.f],"$au")}}
V.v.prototype={
j:function(a){return this.b}}
X.cJ.prototype={
bw:function(a,b,c,d,a0,a1,a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new D.cE(b),e=b.clientWidth
if(typeof e!=="number")return e.m()
u=b.clientHeight
if(typeof u!=="number")return u.m()
t=P.K
f.scA(P.bL(15,15,e-30,u-30,t))
f.sc9(P.bL(15,15,0,0,t))
u=f.cx
e=f.y
f.sc8(P.bL(80,u.b,e.c-80-u.a,e.d-70,t))
e=f.z
f.scQ(P.bL(e.a,e.b+e.d,e.c,70,t))
e=f.z
f.scU(P.bL(e.a-80,e.b,80,e.d,t))
t=P.b5()
f.f=t
e=P.f
B.E(t,P.z(["width",""+f.y.c,"height",""+f.y.d],e,e))
t=P.b5()
f.r=t
B.E(t,P.z(["x",""+f.z.a,"y",""+f.z.b,"width",""+f.z.c,"height",""+f.z.d],e,e))
t=H.o(H.o(C.e.G(document,"http://www.w3.org/2000/svg","rect"),"$im"),"$ia0")
f.x=t
B.E(t,P.z(["x",""+f.z.a,"y",""+f.z.b,"width",""+f.z.c,"height",""+f.z.d,"fill","none","stroke","darkgreen","stroke-width","2"],e,e))
u=b.style
u.position="relative"
f.f.appendChild(f.r)
f.f.appendChild(f.x)
u=f.e
if(u!=null)b.appendChild(u)
b.appendChild(f.f)
h.a=f
h.c7()
f=h.e
if(0>=f.length)return H.b(f,0)
f=f[0]
u=M.w
s=P.ai($.dW,u,e)
s.A(0,h.y)
h.scP(s)
s=P.ai($.dW,u,e)
s.A(0,h.z)
h.scT(s)
u=f.r2.length
r=u-1
if(h.y.h(0,C.p)!=null&&J.L(h.y.h(0,C.p))!==0&&h.y.h(0,C.q)!=null&&J.L(h.y.h(0,C.q))!==0){q=P.G(h.y.h(0,C.p))
r=P.G(h.y.h(0,C.q))}else q=0
t=f.rx
t=(t&&C.o).ga9(t)
p=f.rx
p=(p&&C.o).gac(p)
o=h.a
n=o.z
o=o.Q
m=f.gcR()
l=new M.bj(g,m)
l.aL(u,t,p,q,r,!0,g,g,n.c,o.d,n.d,m,h.y,g,{})
h.b=l
m=l.a
n=h.a.Q
l=l.c
if(typeof l!=="number")return H.c(l)
B.E(m,P.z(["x",""+(n.a-l),"y",""+h.a.Q.b],e,e))
B.E(h.b.b.a,P.z(["x",""+h.a.z.a,"y",""+h.a.z.b],e,e))
k=f.bm(0)
j=f.bm(h.a.z.d)
if(k==null)k=f.U
if(j==null)j=f.E
u=f.r1
if(typeof k!=="number")return k.H()
if(typeof u!=="number")return H.c(u)
if(typeof j!=="number")return j.H()
t=h.a
p=t.z
f=M.fG(k/u,j/u,g,g,g,p.d,t.ch.c,p.c,f.gcV(),h.z,g)
h.c=f
f=f.a
p=""+h.a.ch.a
t=h.a.ch
u=h.c.d
if(typeof u!=="number")return H.c(u)
B.E(f,P.z(["x",p,"y",""+(t.b-u)],e,e))
B.E(h.c.b.a,P.z(["x",""+h.a.z.a,"y",""+h.a.z.b],e,e))
h.f=X.eG(h.x,h.ch)
for(i=0;i<1;++i){f=h.a.r
e=h.e
if(i>=e.length)return H.b(e,i)
f.appendChild(e[i].T)}h.a.r.appendChild(h.f.z)
h.a.f.appendChild(h.b.a)
h.a.f.appendChild(h.c.a)
h.a.f.appendChild(h.b.b.a)
h.a.f.appendChild(h.c.b.a)},
c7:function(){var u,t,s,r,q,p,o,n,m,l=this,k=new Array(1)
k.fixed$length=Array
l.scD(H.n(k,[V.aC]))
if(l.ch==null)l.scC(l.Q)
for(k=l.d,u=V.v,t=P.f,s=[[P.u,V.v,P.f]],r=0;r<1;++r){q=l.r.length!==1
if(q){q=new Array(1)
q.fixed$length=Array
l.scB(H.n(q,s))}q=l.r
if(r>=q.length)return H.b(q,r)
p=q[r]
if(p==null){C.a.i(q,r,P.ai($.dV(),u,t))
q=l.r
if(r>=q.length)return H.b(q,r)
q[r].i(0,C.j,"0.8")
q=l.r
if(r>=q.length)return H.b(q,r)
q[r].i(0,C.f,l.ch[r])}else{if(p.h(0,C.j)==null){q=l.r
if(r>=q.length)return H.b(q,r)
q[r].i(0,C.j,"0.8")}q=l.r
if(r>=q.length)return H.b(q,r)
if(q[r].h(0,C.f)==null){q=l.r
if(r>=q.length)return H.b(q,r)
q[r].i(0,C.f,l.ch[r])}o=P.ai($.dV(),u,t)
q=l.r
if(r>=q.length)return H.b(q,r)
o.A(0,q[r])
C.a.i(l.r,r,o)}q=l.e
p=k[r]
n=l.a.z
m=l.r
if(r>=m.length)return H.b(m,r);(q&&C.a).i(q,r,V.fX(p,0,p.length-1,n.c,n.d,null,null,null,m[r]))}},
scD:function(a){this.e=H.j(a,"$ia",[V.aC],"$aa")},
scB:function(a){this.r=H.j(a,"$ia",[[P.u,V.v,P.f]],"$aa")},
scP:function(a){this.y=H.j(a,"$iu",[M.w,P.f],"$au")},
scT:function(a){this.z=H.j(a,"$iu",[M.w,P.f],"$au")},
scC:function(a){this.ch=H.j(a,"$ia",[P.f],"$aa")}}
B.cH.prototype={
$2:function(a,b){this.a.setAttribute(H.B(a),H.B(b))
return},
$S:22}
U.dS.prototype={
$2:function(a,b){var u,t,s,r,q,p
H.ed(a)
H.j(b,"$ia",[P.d],"$aa")
u=J.am(b)
t=u.h(b,0)
s=u.h(b,1)
r=u.h(b,2)
q=u.h(b,3)
u=Math.log(2)
if(typeof a!=="number")return a.m()
if(typeof s!=="number")return H.c(s)
if(typeof r!=="number")return H.c(r)
p=(a-s)/r
p=Math.exp(-(4*u)*p*p)
if(typeof t!=="number")return t.p()
if(typeof q!=="number")return q.l()
return q+t*p},
$S:23}
U.dR.prototype={
$2:function(a,b){var u,t,s,r,q,p,o,n=P.d
H.j(a,"$ia",[n],"$aa")
u=this.a
t=new Array(u)
t.fixed$length=Array
s=H.n(t,[n])
for(n=b!=null,t=this.b,r=s.length,q=0;q<u;++q){C.a.i(s,q,t.$2(q,a))
if(n){p=C.av.cv()
if(q>=r)return H.b(s,q)
o=s[q]
if(typeof o!=="number")return H.c(o)
C.a.i(s,q,o+(2*p-1)*o*b)}}return s},
$S:24};(function aliases(){var u=J.S.prototype
u.bt=u.j
u=J.bA.prototype
u.bu=u.j})();(function installTearOffs(){var u=hunkHelpers._instance_1u,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff
u(H.bp.prototype,"gbH","bI",8)
t(P,"ho","h7",5)
t(P,"hp","h8",5)
t(P,"hq","h9",5)
s(P,"f0","hm",1)
r(P.F.prototype,"gbB",0,1,null,["$2","$1"],["O","bC"],15,0)
t(P,"hr","he",3)
var q
u(q=V.aC.prototype,"gcR","aG",2)
u(q,"gcV","aH",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.r,null)
s(P.r,[H.e3,J.S,J.bi,P.au,H.bp,P.aa,P.M,H.cc,P.a_,H.aU,H.bD,H.bu,H.cP,P.aB,H.aZ,H.bR,H.cw,H.cy,P.dC,P.cX,P.d4,P.a6,P.F,P.bO,P.b4,P.dB,P.O,P.dE,P.a3,P.br,P.du,P.al,P.bh,P.bM,P.d9,P.ck,P.a,P.u,P.y,P.C,P.f,P.aE,W.cf,W.b_,W.ci,P.dn,P.dw,P.bv,F.bs,M.bC,M.bI,M.bj,M.w,S.cV,D.cv,D.D,D.cE,V.aC,V.v,X.cJ])
s(J.S,[J.cn,J.co,J.bA,J.af,J.ar,J.as,H.bH,W.aq,W.bP,W.ch,W.e,W.bT])
s(J.bA,[J.cD,J.aj,J.ag])
t(J.e2,J.af)
s(J.ar,[J.b0,J.by])
s(P.au,[H.bo,W.d6])
s(P.aa,[H.bq,P.ae])
s(P.ae,[H.bm,P.cu,P.ct])
s(P.M,[H.d2,H.I])
s(H.d2,[H.bn,H.bS])
t(H.d5,H.bn)
t(H.d3,H.bS)
t(H.aR,H.d3)
t(P.cA,P.a_)
s(P.cA,[H.aS,H.ah,P.dq])
s(H.aU,[H.cd,H.dU,H.cO,H.cp,H.dN,H.dO,H.dP,P.d_,P.cZ,P.d0,P.d1,P.dD,P.dF,P.dG,P.dJ,P.da,P.di,P.de,P.df,P.dg,P.dc,P.dh,P.db,P.dl,P.dm,P.dk,P.dj,P.cM,P.cN,P.dI,P.dz,P.dy,P.dA,P.cz,P.cB,P.ds,P.dv,W.d8,M.c4,M.c8,M.c9,M.c5,M.c6,M.c7,B.cH,U.dS,U.dR])
s(H.I,[H.b1,H.cx])
s(P.aB,[H.cC,H.cq,H.cT,H.cR,H.cb,H.cG,P.c3,P.bB,P.b2,P.ad,P.cU,P.cS,P.bN,P.ce,P.cg])
s(H.cO,[H.cK,H.aP])
t(H.cW,P.c3)
t(H.bF,H.bH)
t(H.b9,H.bF)
t(H.ba,H.b9)
t(H.bG,H.ba)
t(H.bE,H.bG)
t(P.cY,P.d4)
t(P.dx,P.dE)
t(P.dr,H.b1)
t(P.cs,P.bB)
t(P.cr,P.br)
t(P.dt,P.du)
s(P.bh,[P.d,P.K])
s(P.ad,[P.bK,P.cl])
t(W.N,W.aq)
s(W.N,[W.aX,W.ap,W.aW])
s(W.aX,[W.l,P.m])
s(W.l,[W.c1,W.c2,W.bl,W.aA,W.cj,W.cI])
t(W.aV,W.bP)
t(W.bw,W.aW)
t(W.J,W.e)
t(W.b8,W.J)
t(W.bU,W.bT)
t(W.bQ,W.bU)
t(W.e6,W.d6)
t(W.d7,P.b4)
t(P.P,P.dw)
t(P.Y,P.m)
s(P.Y,[P.a8,P.aF,P.b6])
s(P.a8,[P.aT,P.at,P.aD,P.a0])
t(P.b7,P.b6)
t(P.a4,P.b7)
u(H.bS,P.a3)
u(H.b9,P.a3)
u(H.ba,H.bu)
u(W.bP,W.cf)
u(W.bT,P.a3)
u(W.bU,W.b_)})()
var v={mangledGlobalNames:{K:"int",d:"double",bh:"num",f:"String",al:"bool",y:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.y},{func:1,ret:-1},{func:1,ret:P.d,args:[P.d]},{func:1,args:[,]},{func:1,ret:P.y,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.y,args:[,]},{func:1,ret:P.y,args:[W.J]},{func:1,ret:-1,args:[P.r]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[,]},{func:1,ret:P.y,args:[,P.C]},{func:1,ret:P.y,args:[P.K,,]},{func:1,ret:-1,args:[P.r],opt:[P.C]},{func:1,ret:P.y,args:[,],opt:[P.C]},{func:1,ret:[P.F,,],args:[,]},{func:1,ret:P.y,args:[P.f,,]},{func:1,args:[W.e]},{func:1,ret:[P.u,M.w,P.f]},{func:1,ret:P.y,args:[P.f,P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.d,args:[P.d,[P.a,P.d]]},{func:1,ret:[P.a,P.d],args:[[P.a,P.d],P.d]}],interceptorsByTag:null,leafTags:null};(function constants(){C.e=W.bw.prototype
C.aw=J.S.prototype
C.a=J.af.prototype
C.l=J.by.prototype
C.d=J.b0.prototype
C.m=J.ar.prototype
C.b=J.as.prototype
C.ax=J.ag.prototype
C.o=H.bE.prototype
C.a3=J.cD.prototype
C.aA=P.aD.prototype
C.an=P.a0.prototype
C.aE=P.aF.prototype
C.ao=P.a4.prototype
C.K=J.aj.prototype
C.L=new M.w("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X")
C.M=new M.w("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y")
C.p=new M.w("AxA.PHYS_X_START")
C.q=new M.w("AxA.PHYS_X_WIDTH")
C.r=new M.w("AxA.POSITION")
C.N=new M.w("AxA.STROKE")
C.O=new M.w("AxA.STROKE_WIDTH")
C.P=new M.w("AxA.TEXT_COLOR_X")
C.Q=new M.w("AxA.TEXT_COLOR_Y")
C.h=new M.w("AxA.TICK_LENGTH")
C.R=new M.w("AxA.YLEGENDTEXT_DIRECTION")
C.t=new M.w("AxA.XYGRID_STROKE")
C.k=new M.w("AxA.FONT_SIZE")
C.u=new M.w("AxA.XYGRID_STROKE_WIDTH")
C.v=new M.w("AxA.XYGRID_STROKE_OPACITY")
C.w=new M.w("AxA.XYGRID_STROKE_DASH")
C.D=new M.w("AxA.LABELS_OFFSET_Y")
C.x=new M.w("AxA.LEGENDTEXT")
C.E=new M.w("AxA.LEGENDTEXT_OFFSET_X")
C.F=new M.w("AxA.LEGENDTEXT_LEFT_OFFSET_Y")
C.S=new M.w("AxA.LEGENDTEXT_RIGHT_OFFSET_Y")
C.T=new M.w("AxA.NLABELS_X")
C.U=new M.w("AxA.NLABELS_Y")
C.V=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.ap=function() {
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
C.au=function(getTagFallback) {
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
C.aq=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.ar=function(hooks) {
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
C.at=function(hooks) {
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
C.as=function(hooks) {
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

C.i=new P.cr()
C.av=new P.dn()
C.c=new P.dx()
C.ay=new P.ct(null)
C.az=new P.cu(null)
C.X=new D.D("LegA.BG_COLOR")
C.Y=new D.D("LegA.BG_OPACITY")
C.G=new D.D("LegA.TEXT_COLOR")
C.n=new D.D("LegA.TOP_TITLE")
C.y=new D.D("LegA.SUB_TITLES")
C.Z=new D.D("LegA.BG_WIDTH")
C.a_=new D.D("LegA.BG_HEIGTH")
C.a0=new D.D("LegA.COLORED_RECT_WIDTH")
C.a1=new D.D("LegA.COLORED_RECT_HEIGHT")
C.H=new D.D("LegA.FONT_SIZE")
C.a2=new D.D("LegA.LINESEP")
C.z=new D.D("LegA.X")
C.A=new D.D("LegA.Y")
C.a4=new V.v("PyA.POINT_LIST")
C.a5=new V.v("PyA.POINT_LIST_STROKE")
C.B=new V.v("PyA.REFYMAX")
C.a6=new V.v("PyA.ROTATE")
C.a7=new V.v("PyA.SELECTION_ICON_WIDTH")
C.a8=new V.v("PyA.SELECTION_ICON_OUTSIDE")
C.aB=new V.v("PyA.SHOW_LEGEND")
C.f=new V.v("PyA.STROKE")
C.a9=new V.v("PyA.STROKE_WIDTH")
C.aa=new V.v("PyA.COMPRESSION_LENGTH")
C.aC=new V.v("PyA.STROKE_WIDTH_HILITE")
C.ab=new V.v("PyA.XSCALE")
C.ac=new V.v("PyA.XSHIFT")
C.ad=new V.v("PyA.YIX1")
C.ae=new V.v("PyA.YSCALE")
C.af=new V.v("PyA.YSCALE2")
C.ag=new V.v("PyA.YSHIFT1")
C.ah=new V.v("PyA.YSHIFT2")
C.j=new V.v("PyA.YPOSITION_ZERO")
C.aD=new V.v("PyA.YPOSITION_ZERO_RESET")
C.ai=new V.v("PyA.DRAW_OUTSIDE_Y_VIEWPORT")
C.I=new V.v("PyA.OVERRIDE_IXFIRST")
C.J=new V.v("PyA.OVERRIDE_IXLAST")
C.aj=new V.v("PyA.DRAW_SELECTION_ICON")
C.ak=new V.v("PyA.INSETX")
C.al=new V.v("PyA.INSETY")
C.C=new V.v("PyA.MARKER_TEXT")
C.am=new V.v("PyA.MARKER_FONTSIZE")})();(function staticFields(){$.a7=0
$.aQ=null
$.es=null
$.e8=!1
$.f6=null
$.eZ=null
$.fb=null
$.dL=null
$.dQ=null
$.eg=null
$.aH=null
$.bb=null
$.bc=null
$.e9=!1
$.A=C.c
$.T=[]
$.dW=P.z([C.k,"18",C.L,"50",C.M,"10",C.D,"2",C.x,"",C.E,"20",C.F,"30",C.S,"30",C.T,'{"100":"2", "200":"4", "300":"8", "400":"10", "500":"10", "600":"10", "700":"10"}',C.U,'{"100":"7", "200":"7", "300":"12", "400":"12", "500":"12", "600":"12", "700":"12"}',C.r,"bg",C.N,"black",C.O,"1",C.P,"black",C.Q,"black",C.h,"6",C.R,"bt",C.t,"#A9A9A9",C.u,"1.0",C.v,"0.3",C.w,"0,0"],M.w,P.f)
$.h5=P.z([C.t,"#A9A9A9",C.u,"1.0",C.v,"0.3",C.w,"0,0"],M.w,P.f)
$.eA=P.z([C.X,"lightgrey",C.Y,"0.2",C.Z,"0",C.a_,"100",C.a0,"20",C.a1,"12",C.H,"16",C.a2,"4",C.z,"12",C.A,"12",C.G,"black",C.n,""],D.D,P.f)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"hP","ff",function(){return H.f5("_$dart_dartClosure")})
u($,"hQ","ej",function(){return H.f5("_$dart_js")})
u($,"hU","fg",function(){return H.ab(H.cQ({
toString:function(){return"$receiver$"}}))})
u($,"hV","fh",function(){return H.ab(H.cQ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"hW","fi",function(){return H.ab(H.cQ(null))})
u($,"hX","fj",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"i_","fm",function(){return H.ab(H.cQ(void 0))})
u($,"i0","fn",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hZ","fl",function(){return H.ab(H.eI(null))})
u($,"hY","fk",function(){return H.ab(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"i2","fp",function(){return H.ab(H.eI(void 0))})
u($,"i1","fo",function(){return H.ab(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"i4","ek",function(){return P.h6()})
u($,"hR","dV",function(){return P.z([C.aa,"1024",C.ai,"true",C.aj,"false",C.ak,"16",C.al,"12",C.am,"16",C.B,"null",C.a7,"16",C.a8,"false",C.aB,"true",C.f,"blue",C.a9,"1",C.aC,"2",C.ab,"1.0",C.ac,"0",C.ad,"0.0",C.ae,"1",C.ag,"0",C.ah,"0",C.j,"0.9",C.aD,"0.9"],V.v,P.f)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.S,MediaError:J.S,Navigator:J.S,NavigatorConcurrentHardware:J.S,NavigatorUserMediaError:J.S,OverconstrainedError:J.S,PositionError:J.S,SQLError:J.S,ArrayBufferView:H.bH,Float64Array:H.bE,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.c1,HTMLAreaElement:W.c2,HTMLCanvasElement:W.bl,CDATASection:W.ap,CharacterData:W.ap,Comment:W.ap,ProcessingInstruction:W.ap,Text:W.ap,CSSStyleDeclaration:W.aV,MSStyleCSSProperties:W.aV,CSS2Properties:W.aV,HTMLDivElement:W.aA,XMLDocument:W.aW,Document:W.aW,DOMException:W.ch,Element:W.aX,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,Window:W.aq,DOMWindow:W.aq,EventTarget:W.aq,HTMLFormElement:W.cj,HTMLDocument:W.bw,DocumentFragment:W.N,ShadowRoot:W.N,Attr:W.N,DocumentType:W.N,Node:W.N,HTMLSelectElement:W.cI,TouchEvent:W.b8,CompositionEvent:W.J,FocusEvent:W.J,KeyboardEvent:W.J,MouseEvent:W.J,DragEvent:W.J,PointerEvent:W.J,TextEvent:W.J,WheelEvent:W.J,UIEvent:W.J,NamedNodeMap:W.bQ,MozNamedAttrMap:W.bQ,SVGCircleElement:P.aT,SVGEllipseElement:P.a8,SVGPathElement:P.a8,SVGPolygonElement:P.a8,SVGGeometryElement:P.a8,SVGAElement:P.Y,SVGClipPathElement:P.Y,SVGDefsElement:P.Y,SVGForeignObjectElement:P.Y,SVGGElement:P.Y,SVGImageElement:P.Y,SVGSwitchElement:P.Y,SVGUseElement:P.Y,SVGGraphicsElement:P.Y,SVGLineElement:P.at,SVGPolylineElement:P.aD,SVGRectElement:P.a0,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPatternElement:P.m,SVGRadialGradientElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSymbolElement:P.m,SVGTitleElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGSVGElement:P.aF,SVGTextPathElement:P.b6,SVGTextContentElement:P.b6,SVGTextElement:P.a4,SVGTSpanElement:P.b7,SVGTextPositioningElement:P.b7})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Float64Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGCircleElement:true,SVGEllipseElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGImageElement:true,SVGSwitchElement:true,SVGUseElement:true,SVGGraphicsElement:false,SVGLineElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPatternElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTextElement:true,SVGTSpanElement:true,SVGTextPositioningElement:false})
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.b9.$nativeSuperclassTag="ArrayBufferView"
H.ba.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.bW,[])
else U.bW([])})})()
//# sourceMappingURL=example.dart.js.map
