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
a[c]=function(){a[c]=function(){H.ho(b)}
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
dH:function(a,b,c){if(H.du(a,"$iF",[b],"$aF"))return new H.cW(a,[b,c])
return new H.bf(a,[b,c])},
cd:function(){return new P.bE("No element")},
bg:function bg(a,b){this.a=a
this.$ti=b},
bh:function bh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bi:function bi(a,b){this.a=a
this.$ti=b},
be:function be(a,b){this.a=a
this.$ti=b},
cU:function cU(){},
c3:function c3(a,b){this.a=a
this.$ti=b},
bf:function bf(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b){this.a=a
this.$ti=b},
cV:function cV(){},
aL:function aL(a,b){this.a=a
this.$ti=b},
aM:function aM(a,b){this.a=a
this.$ti=b},
c4:function c4(a,b){this.a=a
this.b=b},
F:function F(){},
aW:function aW(){},
bu:function bu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bm:function bm(){},
bK:function bK(){},
aI:function(a){var u,t=H.hp(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
h9:function(a){return v.types[H.X(a)]},
he:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.G(a).$ibr},
a:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ba(a)
if(typeof u!=="string")throw H.j(H.bN(a))
return u},
aX:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
fB:function(a,b){var u,t
if(typeof a!=="string")H.aH(H.bN(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.b(u,3)
t=H.y(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
fA:function(a){var u,t
if(typeof a!=="string")H.aH(H.bN(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.fd(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bA:function(a){return H.fz(a)+H.dU(H.ar(a),0,null)},
fz:function(a){var u,t,s,r,q,p,o,n=J.G(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.aC||!!n.$iaf){r=C.V(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aI(t.length>1&&C.b.Z(t,0)===36?C.b.b1(t,1):t)},
U:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aH(u,10))>>>0,56320|u&1023)}throw H.j(P.am(a,0,1114111,null,null))},
e:function(a){throw H.j(H.bN(a))},
b:function(a,b){if(a==null)J.S(a)
throw H.j(H.aD(a,b))},
aD:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=H.X(J.S(a))
if(!(b<0)){if(typeof u!=="number")return H.e(u)
t=b>=u}else t=!0
if(t)return P.dK(b,a,s,null,u)
return P.cw(b,s)},
bN:function(a){return new P.ag(!0,a,null,null)},
j:function(a){var u
if(a==null)a=new P.bz()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.eQ})
u.name=""}else u.toString=H.eQ
return u},
eQ:function(){return J.ba(this.dartException)},
aH:function(a){throw H.j(a)},
eP:function(a){throw H.j(P.bl(a))},
a9:function(a){var u,t,s,r,q,p
a=H.eN(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.u([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cI(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
em:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ej:function(a,b){return new H.ct(a,b==null?null:b.method)},
dO:function(a,b){var u=b==null,t=u?null:b.method
return new H.ch(a,t,u?null:b.receiver)},
Y:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.dD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dO(H.a(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ej(H.a(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.eS()
q=$.eT()
p=$.eU()
o=$.eV()
n=$.eY()
m=$.eZ()
l=$.eX()
$.eW()
k=$.f0()
j=$.f_()
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
if(h)return f.$1(H.ej(H.y(u),i))}}return f.$1(new H.cM(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.bD()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.bD()
return a},
as:function(a){var u
if(a==null)return new H.bJ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.bJ(a)},
h5:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
hd:function(a,b,c,d,e,f){H.k(a,"$idJ")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(new P.d_("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hd)
a.$identity=u
return u},
fk:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.cD().constructor.prototype):Object.create(new H.aJ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a5
if(typeof t!=="number")return t.m()
$.a5=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.eb(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.fg(d,e,f)
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
fg:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.h9,a)
if(typeof a=="function")if(b)return a
else{u=c?H.e9:H.dG
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.j("Error in functionType of tearoff")},
fh:function(a,b,c,d){var u=H.dG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
eb:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fj(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.fh(t,!r,u,b)
if(t===0){r=$.a5
if(typeof r!=="number")return r.m()
$.a5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.aK
return new Function(r+H.a(q==null?$.aK=H.c1("self"):q)+";return "+p+"."+H.a(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a5
if(typeof r!=="number")return r.m()
$.a5=r+1
o+=r
r="return function("+o+"){return this."
q=$.aK
return new Function(r+H.a(q==null?$.aK=H.c1("self"):q)+"."+H.a(u)+"("+o+");}")()},
fi:function(a,b,c,d){var u=H.dG,t=H.e9
switch(b?-1:a){case 0:throw H.j(H.fD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fj:function(a,b){var u,t,s,r,q,p,o,n=$.aK
if(n==null)n=$.aK=H.c1("self")
u=$.e8
if(u==null)u=$.e8=H.c1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.fi(s,!q,t,b)
if(s===1){n="return function(){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+");"
u=$.a5
if(typeof u!=="number")return u.m()
$.a5=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+", "+o+");"
u=$.a5
if(typeof u!=="number")return u.m()
$.a5=u+1
return new Function(n+u+"}")()},
dV:function(a,b,c,d,e,f,g){return H.fk(a,b,c,d,!!e,!!f,g)},
dG:function(a){return a.a},
e9:function(a){return a.c},
c1:function(a){var u,t,s,r=new H.aJ("self","target","receiver","name"),q=J.dL(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
dt:function(a){if(a==null)H.fZ("boolean expression must not be null")
return a},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.a4(a,"String"))},
eB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.a4(a,"double"))},
hK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.a4(a,"num"))},
hG:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.a4(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.a4(a,"int"))},
eL:function(a,b){throw H.j(H.a4(a,H.aI(H.y(b).substring(2))))},
hk:function(a,b){throw H.j(H.ea(a,H.aI(H.y(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.eL(a,b)},
eH:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else u=!0
if(u)return a
H.hk(a,b)},
hg:function(a){if(a==null)return a
if(!!J.G(a).$im)return a
throw H.j(H.a4(a,"List<dynamic>"))},
hf:function(a,b){var u
if(a==null)return a
u=J.G(a)
if(!!u.$im)return a
if(u[b])return a
H.eL(a,b)},
eC:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.X(u)]
else return a.$S()}return},
aE:function(a,b){var u
if(typeof a=="function")return!0
u=H.eC(J.G(a))
if(u==null)return!1
return H.er(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.dR)return a
$.dR=!0
try{if(H.aE(a,b))return a
u=H.bP(b)
t=H.a4(a,u)
throw H.j(t)}finally{$.dR=!1}},
dW:function(a,b){if(a!=null&&!H.dv(a,b))H.aH(H.a4(a,H.bP(b)))
return a},
a4:function(a,b){return new H.cK("TypeError: "+P.aS(a)+": type '"+H.a(H.ew(a))+"' is not a subtype of type '"+b+"'")},
ea:function(a,b){return new H.c2("CastError: "+P.aS(a)+": type '"+H.a(H.ew(a))+"' is not a subtype of type '"+b+"'")},
ew:function(a){var u,t=J.G(a)
if(!!t.$iaO){u=H.eC(t)
if(u!=null)return H.bP(u)
return"Closure"}return H.bA(a)},
fZ:function(a){throw H.j(new H.cP(a))},
ho:function(a){throw H.j(new P.c7(a))},
fD:function(a){return new H.cx(a)},
eF:function(a){return v.getIsolateTag(a)},
u:function(a,b){a.$ti=b
return a},
ar:function(a){if(a==null)return
return a.$ti},
hJ:function(a,b,c){return H.aG(a["$a"+H.a(c)],H.ar(b))},
dX:function(a,b,c,d){var u=H.aG(a["$a"+H.a(c)],H.ar(b))
return u==null?null:u[d]},
N:function(a,b,c){var u=H.aG(a["$a"+H.a(b)],H.ar(a))
return u==null?null:u[c]},
d:function(a,b){var u=H.ar(a)
return u==null?null:u[b]},
bP:function(a){return H.ap(a,null)},
ap:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aI(a[0].name)+H.dU(a,1,b)
if(typeof a=="function")return H.aI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.a(b[t])}if('func' in a)return H.fS(a,b)
if('futureOr' in a)return"FutureOr<"+H.ap("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
fS:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.u([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.n(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.b.m(p,a0[m])
l=u[q]
if(l!=null&&l!==P.n)p+=" extends "+H.ap(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.ap(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.ap(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.ap(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.h4(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.y(n[g])
i=i+h+H.ap(d[c],a0)+(" "+H.a(c))}i+="}"}if(t!=null)a0.length=t
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
du:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ar(a)
t=J.G(a)
if(t[b]==null)return!1
return H.ez(H.aG(t[d],u),null,c,null)},
x:function(a,b,c,d){if(a==null)return a
if(H.du(a,b,c,d))return a
throw H.j(H.a4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aI(b.substring(2))+H.dU(c,0,null),v.mangledGlobalNames)))},
ez:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.a1(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.a1(a[t],b,c[t],d))return!1
return!0},
hH:function(a,b,c){return a.apply(b,H.aG(J.G(b)["$a"+H.a(c)],H.ar(b)))},
eI:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="w"||a===-1||a===-2||H.eI(u)}return!1},
dv:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="w"||b===-1||b===-2||H.eI(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aE(a,b)}u=J.G(a).constructor
t=H.ar(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.a1(u,null,b,null)},
R:function(a,b){if(a!=null&&!H.dv(a,b))throw H.j(H.ea(a,H.bP(b)))
return a},
o:function(a,b){if(a!=null&&!H.dv(a,b))throw H.j(H.a4(a,H.bP(b)))
return a},
a1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="n"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="n"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="w")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.a1("type" in a?a.type:l,b,s,d)
else if(H.a1(a,b,s,d))return!0
else{if(!('$i'+"aT" in t.prototype))return!1
r=t.prototype["$a"+"aT"]
q=H.aG(r,u?a.slice(1):l)
return H.a1(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.er(a,b,c,d)
if('func' in a)return c.name==="dJ"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ez(H.aG(m,u),b,p,d)},
er:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.hj(h,b,g,d)},
hj:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.a1(c[s],d,a[s],b))return!1}return!0},
hI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hh:function(a){var u,t,s,r,q=H.y($.eG.$1(a)),p=$.dw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.y($.ey.$2(a,q))
if(q!=null){p=$.dw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dC(u)
$.dw[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.dB[q]=u
return u}if(s==="-"){r=H.dC(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.eK(a,u)
if(s==="*")throw H.j(P.en(q))
if(v.leafTags[q]===true){r=H.dC(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.eK(a,u)},
eK:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.dZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dC:function(a){return J.dZ(a,!1,null,!!a.$ibr)},
hi:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dC(u)
else return J.dZ(u,c,null,null)},
hb:function(){if(!0===$.dY)return
$.dY=!0
H.hc()},
hc:function(){var u,t,s,r,q,p,o,n
$.dw=Object.create(null)
$.dB=Object.create(null)
H.ha()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.eM.$1(q)
if(p!=null){o=H.hi(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ha:function(){var u,t,s,r,q,p,o=C.av()
o=H.aB(C.aw,H.aB(C.ax,H.aB(C.W,H.aB(C.W,H.aB(C.ay,H.aB(C.az,H.aB(C.aA(C.V),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.eG=new H.dy(r)
$.ey=new H.dz(q)
$.eM=new H.dA(p)},
aB:function(a,b){return a(b)||b},
eO:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
h3:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
eN:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hm:function(a,b,c){var u=H.hn(a,b,c)
return u},
hn:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.eN(b),'g'),H.h3(c))},
cI:function cI(a,b,c,d,e,f){var _=this
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
cM:function cM(a){this.a=a},
dD:function dD(a){this.a=a},
bJ:function bJ(a){this.a=a
this.b=null},
aO:function aO(){},
cH:function cH(){},
cD:function cD(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cK:function cK(a){this.a=a},
c2:function c2(a){this.a=a},
cx:function cx(a){this.a=a},
cP:function cP(a){this.a=a},
ae:function ae(a){var _=this
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
dy:function dy(a){this.a=a},
dz:function dz(a){this.a=a},
dA:function dA(a){this.a=a},
eq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.aD(b,a))},
by:function by(){},
bw:function bw(){},
bx:function bx(){},
bv:function bv(){},
b2:function b2(){},
b3:function b3(){},
h4:function(a){return J.fp(a?Object.keys(a):[],null)},
hp:function(a){return v.mangledGlobalNames[a]}},J={
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bO:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.dY==null){H.hb()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.j(P.en("Return interceptor for "+H.a(u(a,q))))}s=a.constructor
r=s==null?null:s[$.e_()]
if(r!=null)return r
r=H.hh(a)
if(r!=null)return r
if(typeof a=="function")return C.aD
u=Object.getPrototypeOf(a)
if(u==null)return C.ab
if(u===Object.prototype)return C.ab
if(typeof s=="function"){Object.defineProperty(s,$.e_(),{value:C.K,enumerable:false,writable:true,configurable:true})
return C.K}return C.K},
fp:function(a,b){return J.dL(H.u(a,[b]))},
dL:function(a){a.fixed$length=Array
return a},
ed:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fq:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.Z(a,b)
if(t!==32&&t!==13&&!J.ed(t))break;++b}return b},
fr:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.aL(a,u)
if(t!==32&&t!==13&&!J.ed(t))break}return b},
G:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aV.prototype
return J.bq.prototype}if(typeof a=="string")return J.ak.prototype
if(a==null)return J.cf.prototype
if(typeof a=="boolean")return J.ce.prototype
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
h6:function(a){if(typeof a=="number")return J.aj.prototype
if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
aq:function(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
aF:function(a){if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
h7:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aV.prototype
return J.aj.prototype}if(a==null)return a
if(!(a instanceof P.n))return J.af.prototype
return a},
eD:function(a){if(typeof a=="number")return J.aj.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.af.prototype
return a},
eE:function(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.af.prototype
return a},
dx:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.n)return a
return J.bO(a)},
h8:function(a){if(a==null)return a
if(!(a instanceof P.n))return J.af.prototype
return a},
f1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.h6(a).m(a,b)},
b9:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).R(a,b)},
C:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.he(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aq(a).h(a,b)},
e1:function(a,b,c){return J.aF(a).j(a,b,c)},
f2:function(a,b,c,d){return J.dx(a).ba(a,b,c,d)},
f3:function(a,b,c,d){return J.dx(a).bk(a,b,c,d)},
f4:function(a,b,c){return J.dx(a).bl(a,b,c)},
bQ:function(a,b,c){return J.dx(a).bm(a,b,c)},
f5:function(a,b){return J.h8(a).w(a,b)},
e2:function(a,b){return J.aF(a).J(a,b)},
f6:function(a,b,c){return J.aF(a).N(a,b,c)},
f7:function(a,b){return J.aF(a).G(a,b)},
f8:function(a){return J.aF(a).ga4(a)},
bR:function(a){return J.G(a).gu(a)},
e3:function(a){return J.aq(a).gt(a)},
f9:function(a){return J.aq(a).gL(a)},
bS:function(a){return J.aF(a).gv(a)},
fa:function(a){return J.aF(a).ga7(a)},
S:function(a){return J.aq(a).gk(a)},
fb:function(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.h7(a).gau(a)},
at:function(a){return J.eD(a).E(a)},
ba:function(a){return J.G(a).i(a)},
fc:function(a,b){return J.eD(a).c4(a,b)},
fd:function(a){return J.eE(a).aV(a)},
O:function O(){},
ce:function ce(){},
cf:function cf(){},
bs:function bs(){},
cu:function cu(){},
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
bq:function bq(){},
ak:function ak(){}},P={
fK:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.h_()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b7(new P.cR(s),1)).observe(u,{childList:true})
return new P.cQ(s,u,t)}else if(self.setImmediate!=null)return P.h0()
return P.h1()},
fL:function(a){self.scheduleImmediate(H.b7(new P.cS(H.l(a,{func:1,ret:-1})),0))},
fM:function(a){self.setImmediate(H.b7(new P.cT(H.l(a,{func:1,ret:-1})),0))},
fN:function(a){H.l(a,{func:1,ret:-1})
P.fQ(0,a)},
fQ:function(a,b){var u=new P.dm()
u.b9(a,b)
return u},
fO:function(a,b){var u,t,s
b.a=1
try{a.aU(new P.d1(b),new P.d2(b),null)}catch(s){u=H.Y(s)
t=H.as(s)
P.hl(new P.d3(b,u,t))}},
ep:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iV")
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
if((g&15)===8)new P.d7(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.d6(u,b,q).$0()}else if((g&2)!==0)new P.d5(h,u,b).$0()
if(l!=null)$.z=l
g=u.b
if(!!J.G(g).$iaT){if(g.a>=4){k=H.k(o.c,"$iaa")
o.c=null
b=o.a2(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.ep(g,o)
return}}j=b.b
k=H.k(j.c,"$iaa")
j.c=null
b=j.a2(k)
g=u.a
p=u.b
if(!g){H.o(p,H.d(j,0))
j.a=4
j.c=p}else{H.k(p,"$iM")
j.a=8
j.c=p}h.a=j
g=j}},
fW:function(a,b){if(H.aE(a,{func:1,args:[P.n,P.B]}))return b.aR(a,null,P.n,P.B)
if(H.aE(a,{func:1,args:[P.n]}))return H.l(a,{func:1,ret:null,args:[P.n]})
throw H.j(P.e4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
fU:function(){var u,t
for(;u=$.aA,u!=null;){$.b5=null
t=u.b
$.aA=t
if(t==null)$.b4=null
u.a.$0()}},
fY:function(){$.dS=!0
try{P.fU()}finally{$.b5=null
$.dS=!1
if($.aA!=null)$.e0().$1(P.eA())}},
ev:function(a){var u=new P.bG(a)
if($.aA==null){$.aA=$.b4=u
if(!$.dS)$.e0().$1(P.eA())}else $.b4=$.b4.b=u},
fX:function(a){var u,t,s=$.aA
if(s==null){P.ev(a)
$.b5=$.b4
return}u=new P.bG(a)
t=$.b5
if(t==null){u.b=s
$.aA=$.b5=u}else{u.b=t.b
$.b5=t.b=u
if(u.b==null)$.b4=u}},
hl:function(a){var u=null,t=$.z
if(C.d===t){P.ds(u,u,C.d,a)
return}P.ds(u,u,t,H.l(t.aK(a),{func:1,ret:-1}))},
b6:function(a,b,c,d,e){var u={}
u.a=d
P.fX(new P.dr(u,e))},
es:function(a,b,c,d,e){var u,t=$.z
if(t===c)return d.$0()
$.z=c
u=t
try{t=d.$0()
return t}finally{$.z=u}},
eu:function(a,b,c,d,e,f,g){var u,t=$.z
if(t===c)return d.$1(e)
$.z=c
u=t
try{t=d.$1(e)
return t}finally{$.z=u}},
et:function(a,b,c,d,e,f,g,h,i){var u,t=$.z
if(t===c)return d.$2(e,f)
$.z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.z=u}},
ds:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.aK(d):c.by(d,-1)
P.ev(d)},
cR:function cR(a){this.a=a},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
dm:function dm(){},
dn:function dn(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
V:function V(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
d0:function d0(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d8:function d8(a){this.a=a},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a){this.a=a
this.b=null},
an:function an(){},
cF:function cF(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
aY:function aY(){},
a8:function a8(){},
M:function M(a,b){this.a=a
this.b=b},
dp:function dp(){},
dr:function dr(a,b){this.a=a
this.b=b},
di:function di(){},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function(a,b){return new H.ae([a,b])},
v:function(a,b,c){return H.x(H.h5(a,new H.ae([b,c])),"$ieh",[b,c],"$aeh")},
ft:function(a,b){return new H.ae([a,b])},
fo:function(a,b,c){var u,t
if(P.dT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.u([],[P.h])
C.a.n($.Q,a)
try{P.fT(a,u)}finally{if(0>=$.Q.length)return H.b($.Q,-1)
$.Q.pop()}t=P.el(b,H.hf(u,"$iI"),", ")+c
return t.charCodeAt(0)==0?t:t},
ec:function(a,b,c){var u,t
if(P.dT(a))return b+"..."+c
u=new P.az(b)
C.a.n($.Q,a)
try{t=u
t.a=P.el(t.a,a,", ")}finally{if(0>=$.Q.length)return H.b($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dT:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
fT:function(a,b){var u,t,s,r,q,p,o,n=a.gv(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.a(n.gq())
C.a.n(b,u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gq();++l
if(!n.p()){if(l<=4){C.a.n(b,H.a(r))
return}t=H.a(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gq();++l
for(;n.p();r=q,q=p){p=n.gq();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}C.a.n(b,"...")
return}}s=H.a(r)
t=H.a(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.n(b,o)
C.a.n(b,s)
C.a.n(b,t)},
a7:function(a,b,c){var u=P.fs(b,c)
a.A(0,new P.cq(u,b,c))
return u},
ei:function(a){var u,t={}
if(P.dT(a))return"{...}"
u=new P.az("")
try{C.a.n($.Q,a)
u.a+="{"
t.a=!0
a.A(0,new P.cs(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.b($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(){},
cr:function cr(){},
cs:function cs(a,b){this.a=a
this.b=b},
Z:function Z(){},
fV:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.j(H.bN(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.Y(s)
r=P.dI(String(t),null)
throw H.j(r)}r=P.dq(u)
return r},
dq:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.db(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.dq(a[u])
return a},
ee:function(a,b,c){return new P.bt(a,b)},
fR:function(a){return a.cj()},
fP:function(a,b,c){var u,t=new P.az(""),s=new P.de(t,[],P.h2())
s.aa(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
db:function db(a,b){this.a=a
this.b=b
this.c=null},
dd:function dd(a){this.a=a},
dc:function dc(a){this.a=a},
bj:function bj(){},
ab:function ab(){},
bt:function bt(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
ci:function ci(){},
cl:function cl(a){this.b=a},
ck:function ck(a){this.a=a},
df:function df(){},
dg:function dg(a,b){this.a=a
this.b=b},
de:function de(a,b,c){this.c=a
this.a=b
this.b=c},
p:function(a){var u=H.fB(a,null)
if(u!=null)return u
throw H.j(P.dI(a,null))},
W:function(a){var u=H.fA(a)
if(u!=null)return u
throw H.j(P.dI("Invalid double",a))},
fn:function(a){if(a instanceof H.aO)return a.i(0)
return"Instance of '"+H.a(H.bA(a))+"'"},
fu:function(a,b,c){var u,t=[c],s=H.u([],t)
for(u=J.bS(a);u.p();)C.a.n(s,H.o(u.gq(),c))
if(b)return s
return H.x(J.dL(s),"$im",t,"$am")},
el:function(a,b,c){var u=J.bS(b)
if(!u.p())return a
if(c.length===0){do a+=H.a(u.gq())
while(u.p())}else{a+=H.a(u.gq())
for(;u.p();)a=a+c+H.a(u.gq())}return a},
aS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ba(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fn(a)},
e4:function(a,b,c){return new P.ag(!0,a,b,c)},
cw:function(a,b){return new P.bB(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.bB(b,c,!0,a,d,"Invalid value")},
fC:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.j(P.am(a,0,null,b,null))},
dK:function(a,b,c,d,e){var u=H.X(e==null?J.S(b):e)
return new P.cc(u,!0,a,c,"Index out of range")},
ao:function(a){return new P.cN(a)},
en:function(a){return new P.cL(a)},
fH:function(a){return new P.bE(a)},
bl:function(a){return new P.c5(a)},
dI:function(a,b){return new P.cb(a,b)},
fv:function(a,b,c,d,e){return new H.aM(a,[b,c,d,e])},
aC:function aC(){},
E:function E(){},
aw:function aw(){},
bV:function bV(){},
bz:function bz(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b,c,d,e,f){var _=this
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
cN:function cN(a){this.a=a},
cL:function cL(a){this.a=a},
bE:function bE(a){this.a=a},
c5:function c5(a){this.a=a},
bD:function bD(){},
c7:function c7(a){this.a=a},
d_:function d_(a){this.a=a},
cb:function cb(a,b){this.a=a
this.b=b},
L:function L(){},
I:function I(){},
m:function m(){},
t:function t(){},
w:function w(){},
b8:function b8(){},
n:function n(){},
B:function B(){},
h:function h(){},
az:function az(a){this.a=a},
da:function(a,b){a=536870911&a+b
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
return new P.a_(a,b,u,H.o(t,e),[e])},
d9:function d9(){},
dh:function dh(){},
a_:function a_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bF:function(){var u=H.k(C.f.F(document,"http://www.w3.org/2000/svg","svg"),"$ii")
u.setAttribute("version","1.1")
return H.k(u,"$ia0")},
aN:function aN(){},
a6:function a6(){},
T:function T(){},
al:function al(){},
ay:function ay(){},
K:function K(){},
i:function i(){},
a0:function a0(){},
aZ:function aZ(){},
a3:function a3(){},
b_:function b_(){},
bn:function bn(){}},W={
dQ:function(a,b,c,d,e){var u=c==null?null:W.ex(new W.cZ(c),W.c)
u=new W.cY(a,b,u,!1,[e])
u.aI()
return u},
ex:function(a,b){var u=$.z
if(u===C.d)return a
return u.bz(a,b)},
f:function f(){},
bT:function bT(){},
bU:function bU(){},
au:function au(){},
ah:function ah(){},
aP:function aP(){},
c6:function c6(){},
av:function av(){},
aQ:function aQ(){},
c8:function c8(){},
aR:function aR(){},
c:function c(){},
ai:function ai(){},
ca:function ca(){},
bo:function bo(){},
J:function J(){},
cz:function cz(){},
b0:function b0(){},
H:function H(){},
bI:function bI(){},
cX:function cX(){},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cY:function cY(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cZ:function cZ(a){this.a=a},
aU:function aU(){},
c9:function c9(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bH:function bH(){},
bL:function bL(){},
bM:function bM(){}},F={
fl:function(a1,a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a5==null)a5=1024
if(a5<=0)a5=a1.length
if(C.c.b_(a5,2)!==0)++a5
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
j=H.u(o,[P.L])
for(m=0;m<s;++m)C.a.j(j,m,u+m)
return new F.bk(p,j)}o=a5*2
j=F.fm(p,o,u)
i=new Float64Array(o)
for(h=0,m=0;o=j.length,m<o;m=f){g=j[m]-u
f=m+2
n=o-1
l=f>n
if(l&&m+1>n)e=C.a.ga7(j)
else if(l){n=m+1
if(n>=o)return H.b(j,n)
e=j[n]-u}else e=j[f]-u
d=new Float64Array(e-g)
for(o=d.length,c=g;c<e;++c){n=c-g
if(c<0||c>=s)return H.b(p,c)
l=p[c]
if(n<0||n>=o)return H.b(d,n)
d[n]=l}b=E.fe(d)
o=b.length
if(0>=o)return H.b(b,0)
C.m.j(i,h,b[0]);++h
if(1>=b.length)return H.b(b,1)
C.m.j(i,h,b[1]);++h}for(s=o-1,a=1,m=0;m<s;m=f){f=m+1
a0=j[f]-j[m]
if(a0>a)a=a0}return new F.bk(i,j)},
fm:function(a,b,c){var u,t,s,r=H.u([],[P.L]),q=a.length,p=q/b
for(u=0;u<b;++u){t=C.l.E(u*p)
C.a.n(r,t+c)
if(t>=q)break}s=r.length
q=q-1+c
if(s<b)C.a.n(r,q)
else C.a.j(r,s-1,q)
return r},
bk:function bk(a,b){this.a=a
this.d=b}},M={
ff:function(a,b,c,d,e,f,g,h,i,j,k){var u=new M.bc(e,i)
u.av(null,a,b,c,d,null,null,e,f,g,h,i,new M.bW(j).$0(),k,{})
return u},
e7:function(a,b){var u,t,s
if(Math.abs(a)<0.000001)return 0.000001
u=C.k.am(Math.log(a)/2.302585092994046)
t=a/Math.pow(10,u)
if(b)if(t<1.5)s=1
else if(t<3)s=2
else s=t<7?5:10
else if(t<=1)s=1
else if(t<=2)s=2
else s=t<=5?5:10
return s*Math.pow(10,u)},
bd:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
if(a>b){u=a
t=b}else{u=b
t=a}s=M.e7(u-t,!1)
if(typeof c!=="number")return c.l()
r=M.e7(s/(c-1),!0)
q=C.k.am(t/r)*r
p=C.k.bB(u/r)
o=Math.max(-C.k.am(Math.log(r)/2.302585092994046),0)
o=o
n=H.u([],[P.h])
for(p=p*r+0.5*r,m=q;m<p;m+=r)C.a.n(n,C.l.c5(m,o))
return n},
bc:function bc(a,b){var _=this
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
eo:function(a,b,c,d,e){var u=new S.cO(c,d,a,b)
u.sbx(0,P.a7($.fJ,M.r,P.h))
if(e!=null)u.b.w(0,e)
u.bA()
return u},
cO:function cO(a,b,c,d){var _=this
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
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},P:function P(a){this.b=a},
ek:function(a,b,c){var u
if(c!=null&&b!=null&&Math.abs(b)>1e-8){if(typeof c!=="number")return H.e(c)
if(typeof b!=="number")return H.e(b)
u=a*c/b}else u=a
return u}},V={
fy:function(a,b,c,d,e,f,g,h,i){var u=new V.ax(H.u([],[P.a6]),d,e,b,c,a,f)
u.b5(a,b,c,d,e,f,g,h,i)
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
_.O=_.bM=_.y2=_.y1=_.x2=null
_.ci=g
_.al=_.a3=_.B=_.P=_.aN=_.aM=null},
q:function q(a){this.b=a}},X={
fE:function(a,b){var u,t,s,r,q,p,o,n=null,m="legend",l=D.D,k=P.h,j=P.a7($.eg,l,k)
j.w(0,a)
if(j.h(0,C.y)==null)return
if(j.h(0,C.E)!=null){u=H.x(J.e2(C.x.ak(0,j.h(0,C.E)),k),"$im",[k],"$am")
t=J.S(u.a)}else{u=n
t=0}s=new H.ae([k,[P.t,D.D,P.h]])
r=P.bF()
q=new D.cm(s,new H.ae([k,P.a3]),new H.ae([k,P.K]),r,t)
q.cy=t
s.j(0,m,P.a7($.eg,l,k))
l=j.gL(j)
if(l)J.f5(s.h(0,m),j)
r.setAttribute("x",H.y(J.C(s.h(0,m),C.G)))
r.setAttribute("y",H.y(J.C(s.h(0,m),C.H)))
q.r=P.p(J.C(s.h(0,m),C.a8))
l=H.y(J.C(s.h(0,m),C.y))
q.db=l
if(l!=null&&l.length!==0)q.aO("TOP_TITLE_ID",l,n)
p=b!=null?P.fu(C.a.b0(b,0,t),!0,k):n
for(o=t-1,l=H.d(u,1),k=p==null;o>=0;--o){s=o+1
if(k)q.at(""+s,H.R(J.C(u.a,o),l),n)
else{s=""+s
r=H.R(J.C(u.a,o),l)
if(o>=p.length)return H.b(p,o)
q.at(s,r,p[o])}}return q},
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
fI:function(a){if(a==="true")return!0
return!1},
ef:function(a){var u=P.h
return H.x(J.f6(C.x.ak(0,a),u,u),"$it",[u,u],"$at")},
A:function(a,b){b.A(0,new B.cy(a))},
cy:function cy(a){this.a=a}},G={
fF:function(a,b,c,d,e){var u=new G.cB()
u.b7(a,b,c,d,e)
return u},
cB:function cB(){this.b=this.a=null}},R={
fG:function(a,b,c,d,e,f){var u=new R.cC()
u.b8(a,b,c,d,e,f)
return u},
cC:function cC(){this.a=null}},E={
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
fe:function(a){var u,t,s,r,q,p,o
for(u=a.length,t=-1,s=-17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q>s){s=q
t=r}}for(p=-1,o=17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q<o){o=q
p=r}}u=[P.E]
if(p<=t)return H.u([o,s],u)
else return H.u([s,o],u)}},U={
eJ:function(){var u,t,s,r,q,p,o,n=G.fF(1000,100,0,8,0).a,m=R.fG(2000,20,0,8,0,0).a,l=document,k=H.eH(l.querySelector("#app_div"),"$iav"),j=H.eH(l.querySelector("#plot_div"),"$iav")
l=j.style
u=H.a(k.clientWidth)+"px"
l.width=u
u=H.a(k.clientHeight)+"px"
l.height=u
l=V.q
u=P.h
t=H.u([P.v([C.i,"0.8"],l,u),P.v([C.i,"0.8"],l,u)],[[P.t,V.q,P.h]])
l=M.r
s=P.v([C.o,"0",C.p,"8",C.w,"Number of periods (2*\u03c0)"],l,u)
r=P.v([C.w,"Function value ('intensity')"],l,u)
l=[u]
q=P.v([C.y,"Example plot using the class 'SimplePlot'",C.E,C.x.bK(H.u(["100 * sin(x) / x"," 20 * sin(x)"],l)),C.G,"45",C.H,"15"],D.D,u)
u=H.u([n,m],[P.bn])
p=H.u([H.u([0,0,1,1],[P.E])],[[P.m,P.E]])
o=new D.cv(j,p)
o.b4(j,!1,p,null)
new X.cA(o,0,u,t,q,s,r,H.u(["blue","red","magenta","green","orange","cyan","lightgreen","crimson","darkred","darkgreen"],l),null).b6(u,t,s,r,q,null,o,0)}}
var w=[C,H,J,P,W,F,M,S,D,V,X,B,G,R,E,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dN.prototype={}
J.O.prototype={
R:function(a,b){return a===b},
gu:function(a){return H.aX(a)},
i:function(a){return"Instance of '"+H.a(H.bA(a))+"'"}}
J.ce.prototype={
i:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$iaC:1}
J.cf.prototype={
R:function(a,b){return null==b},
i:function(a){return"null"},
gu:function(a){return 0}}
J.bs.prototype={
gu:function(a){return 0},
i:function(a){return String(a)}}
J.cu.prototype={}
J.af.prototype={}
J.ad.prototype={
i:function(a){var u=a[$.eR()]
if(u==null)return this.b3(a)
return"JavaScript function for "+H.a(J.ba(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$idJ:1}
J.ac.prototype={
J:function(a,b){return new H.aL(a,[H.d(a,0),b])},
n:function(a,b){H.o(b,H.d(a,0))
if(!!a.fixed$length)H.aH(P.ao("add"))
a.push(b)},
G:function(a,b){H.X(b)
if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
b0:function(a,b,c){var u=a.length
if(b>u)throw H.j(P.am(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.j(P.am(c,b,a.length,"end",null))
if(b===c)return H.u([],[H.d(a,0)])
return H.u(a.slice(b,c),[H.d(a,0)])},
ga4:function(a){if(a.length>0)return a[0]
throw H.j(H.cd())},
ga7:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.j(H.cd())},
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
j:function(a,b,c){H.o(c,H.d(a,0))
if(!!a.immutable$list)H.aH(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.j(H.aD(a,b))
a[b]=c},
$iF:1,
$iI:1,
$im:1}
J.dM.prototype={}
J.bb.prototype={
gq:function(){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.j(H.eP(s))
u=t.c
if(u>=r){t.saB(null)
return!1}t.saB(s[u]);++t.c
return!0},
saB:function(a){this.d=H.o(a,H.d(this,0))},
$ibp:1}
J.aj.prototype={
gaP:function(a){return a===0?1/a<0:a<0},
gau:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
bB:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.j(P.ao(""+a+".ceil()"))},
am:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.j(P.ao(""+a+".floor()"))},
E:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.ao(""+a+".round()"))},
c5:function(a,b){var u
if(b<0||b>20)throw H.j(P.am(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaP(a))return"-"+u
return u},
c4:function(a,b){var u
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
b_:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
V:function(a,b){return(a|0)===a?a/b|0:this.bo(a,b)},
bo:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.j(P.ao("Result of truncating division is "+H.a(u)+": "+H.a(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.bn(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
bn:function(a,b){return b>31?0:a>>>b},
$iE:1,
$ib8:1}
J.aV.prototype={
gau:function(a){var u
if(a>0)u=1
else u=a<0?-1:a
return u},
$iL:1}
J.bq.prototype={}
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
if(b<0)throw H.j(P.cw(b,null))
if(b>c)throw H.j(P.cw(b,null))
if(c>a.length)throw H.j(P.cw(c,null))
return a.substring(b,c)},
b1:function(a,b){return this.T(a,b,null)},
aV:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.Z(r,0)===133){u=J.fq(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aL(r,t)===133?J.fr(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
bC:function(a,b,c){if(c>a.length)throw H.j(P.am(c,0,a.length,null,null))
return H.eO(a,b,c)},
K:function(a,b){return this.bC(a,b,0)},
i:function(a){return a},
gu:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ifw:1,
$ih:1}
H.bg.prototype={
a8:function(a,b,c,d){var u,t
H.l(a,{func:1,ret:-1,args:[H.d(this,1)]})
u=this.a.aQ(null,!0,H.l(c,{func:1,ret:-1}))
t=new H.bh(u,$.z,this.$ti)
u.an(t.gbh())
t.an(a)
t.ao(0,d)
return t},
aQ:function(a,b,c){return this.a8(a,b,c,null)},
J:function(a,b){return new H.bg(this.a,[H.d(this,0),b])},
$aan:function(a,b){return[b]}}
H.bh.prototype={
an:function(a){var u=H.d(this,1)
H.l(a,{func:1,ret:-1,args:[u]})
this.sbf(a==null?null:H.l(a,{func:1,ret:null,args:[u]}))},
ao:function(a,b){var u,t=this
t.a.ao(0,b)
if(b==null)t.d=null
else{u=P.n
if(H.aE(b,{func:1,args:[P.w,P.w]}))t.d=t.b.aR(H.l(b,{func:1,args:[P.n,P.B]}),null,u,P.B)
else t.d=H.l(H.l(b,{func:1,args:[P.n]}),{func:1,ret:null,args:[u]})}},
bi:function(a){var u,t,s,r,q,p,o,n,m=this,l=null
H.o(a,H.d(m,0))
r=m.c
if(r==null)return
u=null
try{u=H.R(a,H.d(m,1))}catch(q){t=H.Y(q)
s=H.as(q)
r=m.d
if(r==null)P.b6(l,l,m.b,t,H.k(s,"$iB"))
else{p=H.aE(r,{func:1,args:[P.w,P.w]})
o=m.b
n=m.d
if(p)o.c1(H.l(n,{func:1,ret:-1,args:[,P.B]}),t,s,l,P.B)
else o.aq(H.l(n,{func:1,ret:-1,args:[,]}),t,l)}return}m.b.aq(r,u,H.d(m,1))},
sbf:function(a){this.c=H.l(a,{func:1,ret:-1,args:[H.d(this,1)]})},
$iaY:1,
$aaY:function(a,b){return[b]}}
H.bi.prototype={
N:function(a,b,c){return new H.bi(this.a,[H.d(this,0),H.d(this,1),b,c])},
$acE:function(a,b,c,d){return[c,d]},
$aa8:function(a,b,c,d){return[c,d]}}
H.be.prototype={
N:function(a,b,c){return new H.be(this.a,[H.d(this,0),H.d(this,1),b,c])},
$acE:function(a,b,c,d){return[c,d]},
$aa8:function(a,b,c,d){return[c,d]},
$aab:function(a,b,c,d){return[c,d]}}
H.cU.prototype={
gv:function(a){return new H.c3(J.bS(this.gI()),this.$ti)},
gk:function(a){return J.S(this.gI())},
gt:function(a){return J.e3(this.gI())},
gL:function(a){return J.f9(this.gI())},
G:function(a,b){H.X(b)
return H.R(J.f7(this.gI(),b),H.d(this,1))},
i:function(a){return J.ba(this.gI())},
$aI:function(a,b){return[b]}}
H.c3.prototype={
p:function(){return this.a.p()},
gq:function(){return H.R(this.a.gq(),H.d(this,1))},
$ibp:1,
$abp:function(a,b){return[b]}}
H.bf.prototype={
J:function(a,b){return H.dH(this.a,H.d(this,0),b)},
gI:function(){return this.a}}
H.cW.prototype={$iF:1,
$aF:function(a,b){return[b]}}
H.cV.prototype={
h:function(a,b){return H.R(J.C(this.a,b),H.d(this,1))},
$iF:1,
$aF:function(a,b){return[b]},
$aa2:function(a,b){return[b]},
$im:1,
$am:function(a,b){return[b]}}
H.aL.prototype={
J:function(a,b){return new H.aL(this.a,[H.d(this,0),b])},
gI:function(){return this.a}}
H.aM.prototype={
N:function(a,b,c){return new H.aM(this.a,[H.d(this,0),H.d(this,1),b,c])},
h:function(a,b){return H.R(this.a.h(0,b),H.d(this,3))},
j:function(a,b,c){var u=this
H.o(b,H.d(u,2))
H.o(c,H.d(u,3))
u.a.j(0,H.R(b,H.d(u,0)),H.R(c,H.d(u,1)))},
w:function(a,b){var u=this,t=H.d(u,2),s=H.d(u,3)
u.a.w(0,new H.aM(H.x(b,"$it",[t,s],"$at"),[t,s,H.d(u,0),H.d(u,1)]))},
A:function(a,b){var u=this
u.a.A(0,new H.c4(u,H.l(b,{func:1,ret:-1,args:[H.d(u,2),H.d(u,3)]})))},
gC:function(){return H.dH(this.a.gC(),H.d(this,0),H.d(this,2))},
gk:function(a){var u=this.a
return u.gk(u)},
gt:function(a){var u=this.a
return u.gt(u)},
$aZ:function(a,b,c,d){return[c,d]},
$at:function(a,b,c,d){return[c,d]}}
H.c4.prototype={
$2:function(a,b){var u=this.a
H.o(a,H.d(u,0))
H.o(b,H.d(u,1))
this.b.$2(H.R(a,H.d(u,2)),H.R(b,H.d(u,3)))},
$S:function(){var u=this.a
return{func:1,ret:P.w,args:[H.d(u,0),H.d(u,1)]}}}
H.F.prototype={}
H.aW.prototype={
gv:function(a){var u=this
return new H.bu(u,u.gk(u),[H.N(u,"aW",0)])},
gt:function(a){return this.gk(this)===0}}
H.bu.prototype={
gq:function(){return this.d},
p:function(){var u,t=this,s=t.a,r=J.aq(s),q=r.gk(s)
if(t.b!==q)throw H.j(P.bl(s))
u=t.c
if(u>=q){t.saw(null)
return!1}t.saw(r.G(s,u));++t.c
return!0},
saw:function(a){this.d=H.o(a,H.d(this,0))},
$ibp:1}
H.bm.prototype={}
H.bK.prototype={}
H.cI.prototype={
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
if(u==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ch.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.a(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.a(t.a)+")"
return s+r+"' on '"+u+"' ("+H.a(t.a)+")"}}
H.cM.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.dD.prototype={
$1:function(a){if(!!J.G(a).$iaw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.bJ.prototype={
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
gce:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cH.prototype={}
H.cD.prototype={
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
else u=typeof t!=="object"?J.bR(t):H.aX(t)
return(u^H.aX(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.bA(u))+"'")}}
H.cK.prototype={
i:function(a){return this.a}}
H.c2.prototype={
i:function(a){return this.a}}
H.cx.prototype={
i:function(a){return"RuntimeError: "+H.a(this.a)}}
H.cP.prototype={
i:function(a){return"Assertion failed: "+P.aS(this.a)}}
H.ae.prototype={
gk:function(a){return this.a},
gt:function(a){return this.a===0},
gL:function(a){return!this.gt(this)},
gC:function(){return new H.co(this,[H.d(this,0)])},
W:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.be(u,a)}else{t=this.bO(a)
return t}},
bO:function(a){var u=this,t=u.d
if(t==null)return!1
return u.a6(u.a0(t,u.a5(a)),a)>=0},
w:function(a,b){H.x(b,"$it",this.$ti,"$at").A(0,new H.cg(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a1(r,b)
s=t==null?null:t.b
return s}else return q.bP(b)},
bP:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.a0(r,s.a5(a))
t=s.a6(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
H.o(b,H.d(s,0))
H.o(c,H.d(s,1))
if(typeof b==="string"){u=s.b
s.ay(u==null?s.b=s.af():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.ay(t==null?s.c=s.af():t,b,c)}else s.bR(b,c)},
bR:function(a,b){var u,t,s,r,q=this
H.o(a,H.d(q,0))
H.o(b,H.d(q,1))
u=q.d
if(u==null)u=q.d=q.af()
t=q.a5(a)
s=q.a0(u,t)
if(s==null)q.ai(u,t,[q.ag(a,b)])
else{r=q.a6(s,a)
if(r>=0)s[r].b=b
else s.push(q.ag(a,b))}},
aS:function(a,b){var u=this.bQ(b)
return u},
bQ:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=q.a5(a)
t=q.a0(p,u)
s=q.a6(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bp(r)
if(t.length===0)q.aC(p,u)
return r.b},
A:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.d(s,0),H.d(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.j(P.bl(s))
u=u.c}},
ay:function(a,b,c){var u,t=this
H.o(b,H.d(t,0))
H.o(c,H.d(t,1))
u=t.a1(a,b)
if(u==null)t.ai(a,b,t.ag(b,c))
else u.b=c},
aE:function(){this.r=this.r+1&67108863},
ag:function(a,b){var u,t=this,s=new H.cn(H.o(a,H.d(t,0)),H.o(b,H.d(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aE()
return s},
bp:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aE()},
a5:function(a){return J.bR(a)&0x3ffffff},
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
be:function(a,b){return this.a1(a,b)!=null},
af:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ai(t,u,t)
this.aC(t,u)
return t},
$ieh:1}
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
if(u.b!==t.r)throw H.j(P.bl(t))
else{t=u.c
if(t==null){u.sax(null)
return!1}else{u.sax(t.a)
u.c=u.c.c
return!0}}},
sax:function(a){this.d=H.o(a,H.d(this,0))},
$ibp:1}
H.dy.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.dz.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dA.prototype={
$1:function(a){return this.a(H.y(a))},
$S:10}
H.by.prototype={}
H.bw.prototype={
gk:function(a){return a.length},
$ibr:1,
$abr:function(){}}
H.bx.prototype={
h:function(a,b){H.eq(b,a,a.length)
return a[b]},
j:function(a,b,c){H.eB(c)
H.eq(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.E]},
$abm:function(){return[P.E]},
$aa2:function(){return[P.E]},
$iI:1,
$aI:function(){return[P.E]},
$im:1,
$am:function(){return[P.E]}}
H.bv.prototype={$ibn:1}
H.b2.prototype={}
H.b3.prototype={}
P.cR.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.cQ.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:11}
P.cS.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cT.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dm.prototype={
b9:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b7(new P.dn(this,b),0),a)
else throw H.j(P.ao("`setTimeout()` not found."))}}
P.dn.prototype={
$0:function(){this.b.$0()},
$S:1}
P.aa.prototype={
bS:function(a){if((this.c&15)!==6)return!0
return this.b.b.ap(H.l(this.d,{func:1,ret:P.aC,args:[P.n]}),a.a,P.aC,P.n)},
bN:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.d(this,1)},r=this.b.b
if(H.aE(u,{func:1,args:[P.n,P.B]}))return H.dW(r.c0(u,a.a,a.b,null,t,P.B),s)
else return H.dW(r.ap(H.l(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.V.prototype={
aU:function(a,b,c){var u,t,s,r=H.d(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.z
if(u!==C.d){H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.fW(b,u)}t=new P.V($.z,[c])
s=b==null?1:3
this.az(new P.aa(t,s,a,b,[r,c]))
return t},
c3:function(a,b){return this.aU(a,null,b)},
az:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iaa")
t.c=a}else{if(s===2){u=H.k(t.c,"$iV")
s=u.a
if(s<4){u.az(a)
return}t.a=s
t.c=u.c}P.ds(null,null,t.b,H.l(new P.d0(t,a),{func:1,ret:-1}))}},
aG:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iaa")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iV")
u=q.a
if(u<4){q.aG(a)
return}p.a=u
p.c=q.c}o.a=p.a2(a)
P.ds(null,null,p.b,H.l(new P.d4(o,p),{func:1,ret:-1}))}},
ah:function(){var u=H.k(this.c,"$iaa")
this.c=null
return this.a2(u)},
a2:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aA:function(a){var u,t,s=this,r=H.d(s,0)
H.dW(a,{futureOr:1,type:r})
u=s.$ti
if(H.du(a,"$iaT",u,"$aaT"))if(H.du(a,"$iV",u,null))P.ep(a,s)
else P.fO(a,s)
else{t=s.ah()
H.o(a,r)
s.a=4
s.c=a
P.b1(s,t)}},
a_:function(a,b){var u,t=this
H.k(b,"$iB")
u=t.ah()
t.a=8
t.c=new P.M(a,b)
P.b1(t,u)},
bd:function(a){return this.a_(a,null)},
$iaT:1}
P.d0.prototype={
$0:function(){P.b1(this.a,this.b)},
$S:0}
P.d4.prototype={
$0:function(){P.b1(this.b,this.a.a)},
$S:0}
P.d1.prototype={
$1:function(a){var u=this.a
u.a=0
u.aA(a)},
$S:6}
P.d2.prototype={
$2:function(a,b){H.k(b,"$iB")
this.a.a_(a,b)},
$1:function(a){return this.$2(a,null)},
$S:13}
P.d3.prototype={
$0:function(){this.a.a_(this.b,this.c)},
$S:0}
P.d7.prototype={
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
return}if(!!J.G(n).$iaT){if(n instanceof P.V&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iM")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.c3(new P.d8(p),null)
s.a=!1}},
$S:1}
P.d8.prototype={
$1:function(a){return this.a},
$S:14}
P.d6.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.d(s,0)
q=H.o(n.c,r)
p=H.d(s,1)
n.a.b=s.b.b.ap(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.Y(o)
t=H.as(o)
s=n.a
s.b=new P.M(u,t)
s.a=!0}},
$S:1}
P.d5.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iM")
r=m.c
if(H.dt(r.bS(u))&&r.e!=null){q=m.b
q.b=r.bN(u)
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
P.bG.prototype={}
P.an.prototype={
gk:function(a){var u={},t=new P.V($.z,[P.L])
u.a=0
this.a8(new P.cF(u,this),!0,new P.cG(u,t),t.gbc())
return t},
J:function(a,b){return new H.bg(this,[H.N(this,"an",0),b])}}
P.cF.prototype={
$1:function(a){H.o(a,H.N(this.b,"an",0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.N(this.b,"an",0)]}}}
P.cG.prototype={
$0:function(){this.b.aA(this.a.a)},
$S:0}
P.aY.prototype={}
P.a8.prototype={
N:function(a,b,c){return new H.bi(this,[H.N(this,"a8",0),H.N(this,"a8",1),b,c])},
$icE:1}
P.M.prototype={
i:function(a){return H.a(this.a)},
$iaw:1}
P.dp.prototype={$ihE:1}
P.dr.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bz():s
s=this.b
if(s==null)throw H.j(t)
u=H.j(t)
u.stack=s.i(0)
throw u},
$S:0}
P.di.prototype={
c2:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.d===$.z){a.$0()
return}P.es(r,r,this,a,-1)}catch(s){u=H.Y(s)
t=H.as(s)
P.b6(r,r,this,u,H.k(t,"$iB"))}},
aq:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.o(b,c)
try{if(C.d===$.z){a.$1(b)
return}P.eu(r,r,this,a,b,-1,c)}catch(s){u=H.Y(s)
t=H.as(s)
P.b6(r,r,this,u,H.k(t,"$iB"))}},
c1:function(a,b,c,d,e){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[d,e]})
H.o(b,d)
H.o(c,e)
try{if(C.d===$.z){a.$2(b,c)
return}P.et(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.Y(s)
t=H.as(s)
P.b6(r,r,this,u,H.k(t,"$iB"))}},
by:function(a,b){return new P.dk(this,H.l(a,{func:1,ret:b}),b)},
aK:function(a){return new P.dj(this,H.l(a,{func:1,ret:-1}))},
bz:function(a,b){return new P.dl(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
aT:function(a,b){H.l(a,{func:1,ret:b})
if($.z===C.d)return a.$0()
return P.es(null,null,this,a,b)},
ap:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.o(b,d)
if($.z===C.d)return a.$1(b)
return P.eu(null,null,this,a,b,c,d)},
c0:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.o(b,e)
H.o(c,f)
if($.z===C.d)return a.$2(b,c)
return P.et(null,null,this,a,b,c,d,e,f)},
aR:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}}
P.dk.prototype={
$0:function(){return this.a.aT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.dj.prototype={
$0:function(){return this.a.c2(this.b)},
$S:1}
P.dl.prototype={
$1:function(a){var u=this.c
return this.a.aq(this.b,H.o(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cq.prototype={
$2:function(a,b){this.a.j(0,H.o(a,this.b),H.o(b,this.c))},
$S:4}
P.a2.prototype={
gv:function(a){return new H.bu(a,this.gk(a),[H.dX(this,a,"a2",0)])},
G:function(a,b){return this.h(a,H.X(b))},
gt:function(a){return this.gk(a)===0},
gL:function(a){return!this.gt(a)},
ga4:function(a){if(this.gk(a)===0)throw H.j(H.cd())
return this.h(a,0)},
ga7:function(a){if(this.gk(a)===0)throw H.j(H.cd())
return this.h(a,this.gk(a)-1)},
J:function(a,b){return new H.aL(a,[H.dX(this,a,"a2",0),b])},
i:function(a){return P.ec(a,"[","]")}}
P.cr.prototype={}
P.cs.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.a(a)
t.a=u+": "
t.a+=H.a(b)},
$S:4}
P.Z.prototype={
N:function(a,b,c){return P.fv(this,H.N(this,"Z",0),H.N(this,"Z",1),b,c)},
A:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.N(s,"Z",0),H.N(s,"Z",1)]})
for(u=J.bS(s.gC());u.p();){t=u.gq()
b.$2(t,s.h(0,t))}},
w:function(a,b){var u,t
H.x(b,"$it",[H.N(this,"Z",0),H.N(this,"Z",1)],"$at")
for(u=b.gC(),u=u.gv(u);u.p();){t=u.gq()
this.j(0,t,b.h(0,t))}},
gk:function(a){return J.S(this.gC())},
gt:function(a){return J.e3(this.gC())},
i:function(a){return P.ei(this)},
$it:1}
P.db.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.bj(b):u}},
gk:function(a){var u
if(this.b==null){u=this.c
u=u.gk(u)}else u=this.U().length
return u},
gt:function(a){return this.gk(this)===0},
gC:function(){if(this.b==null)return this.c.gC()
return new P.dc(this)},
j:function(a,b,c){var u,t,s=this
H.y(b)
if(s.b==null)s.c.j(0,b,c)
else if(s.W(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.br().j(0,b,c)},
w:function(a,b){H.x(b,"$it",[P.h,null],"$at").A(0,new P.dd(this))},
W:function(a){if(this.b==null)return this.c.W(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
A:function(a,b){var u,t,s,r,q=this
H.l(b,{func:1,ret:-1,args:[P.h,,]})
if(q.b==null)return q.c.A(0,b)
u=q.U()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.dq(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.j(P.bl(q))}},
U:function(){var u=H.hg(this.c)
if(u==null)u=this.c=H.u(Object.keys(this.a),[P.h])
return u},
br:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.ft(P.h,null)
t=p.U()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.j(0,q,p.h(0,q))}if(r===0)C.a.n(t,null)
else C.a.sk(t,0)
p.a=p.b=null
return p.c=u},
bj:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.dq(this.a[a])
return this.b[a]=u},
$aZ:function(){return[P.h,null]},
$at:function(){return[P.h,null]}}
P.dd.prototype={
$2:function(a,b){this.a.j(0,H.y(a),b)},
$S:15}
P.dc.prototype={
gk:function(a){var u=this.a
return u.gk(u)},
G:function(a,b){var u
H.X(b)
u=this.a
if(u.b==null)u=u.gC().G(0,b)
else{u=u.U()
if(b<0||b>=u.length)return H.b(u,b)
u=u[b]}return u},
gv:function(a){var u=this.a
if(u.b==null){u=u.gC()
u=u.gv(u)}else{u=u.U()
u=new J.bb(u,u.length,[H.d(u,0)])}return u},
$aF:function(){return[P.h]},
$aaW:function(){return[P.h]},
$aI:function(){return[P.h]}}
P.bj.prototype={}
P.ab.prototype={
N:function(a,b,c){return new H.be(this,[H.N(this,"ab",0),H.N(this,"ab",1),b,c])}}
P.bt.prototype={
i:function(a){var u=P.aS(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.cj.prototype={
i:function(a){return"Cyclic error in JSON stringify"}}
P.ci.prototype={
ak:function(a,b){var u=P.fV(b,this.gbJ().a)
return u},
bK:function(a){var u=P.fP(a,this.gbL().b,null)
return u},
gbL:function(){return C.aF},
gbJ:function(){return C.aE},
$abj:function(){return[P.n,P.h]}}
P.cl.prototype={
$acE:function(){return[P.n,P.h]},
$aa8:function(){return[P.n,P.h]},
$aab:function(){return[P.n,P.h]}}
P.ck.prototype={
$acE:function(){return[P.h,P.n]},
$aa8:function(){return[P.h,P.n]},
$aab:function(){return[P.h,P.n]}}
P.df.prototype={
aX:function(a){var u,t,s,r,q,p,o,n=a.length
for(u=J.eE(a),t=this.c,s=0,r=0;r<n;++r){q=u.Z(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.b.T(a,s,r)
s=r+1
p=t.a+=H.U(92)
switch(q){case 8:t.a=p+H.U(98)
break
case 9:t.a=p+H.U(116)
break
case 10:t.a=p+H.U(110)
break
case 12:t.a=p+H.U(102)
break
case 13:t.a=p+H.U(114)
break
default:p+=H.U(117)
t.a=p
p+=H.U(48)
t.a=p
p+=H.U(48)
t.a=p
o=q>>>4&15
p+=H.U(o<10?48+o:87+o)
t.a=p
o=q&15
t.a=p+H.U(o<10?48+o:87+o)
break}}else if(q===34||q===92){if(r>s)t.a+=C.b.T(a,s,r)
s=r+1
p=t.a+=H.U(92)
t.a=p+H.U(q)}}if(s===0)t.a+=H.a(a)
else if(s<n)t.a+=u.T(a,s,n)},
ac:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.j(new P.cj(a,null))}C.a.n(u,a)},
aa:function(a){var u,t,s,r,q=this
if(q.aW(a))return
q.ac(a)
try{u=q.b.$1(a)
if(!q.aW(u)){s=P.ee(a,null,q.gaF())
throw H.j(s)}s=q.a
if(0>=s.length)return H.b(s,-1)
s.pop()}catch(r){t=H.Y(r)
s=P.ee(a,t,q.gaF())
throw H.j(s)}},
aW:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.l.i(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.aX(a)
u.a+='"'
return!0}else{u=J.G(a)
if(!!u.$im){s.ac(a)
s.c6(a)
u=s.a
if(0>=u.length)return H.b(u,-1)
u.pop()
return!0}else if(!!u.$it){s.ac(a)
t=s.c7(a)
u=s.a
if(0>=u.length)return H.b(u,-1)
u.pop()
return t}else return!1}},
c6:function(a){var u,t,s=this.c
s.a+="["
u=J.aq(a)
if(u.gL(a)){this.aa(u.h(a,0))
for(t=1;t<u.gk(a);++t){s.a+=","
this.aa(u.h(a,t))}}s.a+="]"},
c7:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gt(a)){o.c.a+="{}"
return!0}u=a.gk(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.A(0,new P.dg(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.aX(H.y(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.b(t,p)
o.aa(t[p])}r.a+="}"
return!0}}
P.dg.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.j(u,t.a++,a)
C.a.j(u,t.a++,b)},
$S:4}
P.de.prototype={
gaF:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.aC.prototype={}
P.E.prototype={}
P.aw.prototype={}
P.bV.prototype={
i:function(a){return"Assertion failed"}}
P.bz.prototype={
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
P.bB.prototype={
gae:function(){return"RangeError"},
gad:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.a(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.a(s)
else if(t>s)u=": Not in range "+H.a(s)+".."+H.a(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.a(s)}return u}}
P.cc.prototype={
gae:function(){return"RangeError"},
gad:function(){var u,t=H.X(this.b)
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.a(u)},
gk:function(a){return this.f}}
P.cN.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cL.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bE.prototype={
i:function(a){return"Bad state: "+this.a}}
P.c5.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aS(u)+"."}}
P.bD.prototype={
i:function(a){return"Stack Overflow"},
$iaw:1}
P.c7.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d_.prototype={
i:function(a){return"Exception: "+this.a}}
P.cb.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.a(t):"FormatException",r=this.b
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
H.X(b)
P.fC(b,"index")
for(u=this.gv(this),t=0;u.p();){s=u.gq()
if(b===t)return s;++t}throw H.j(P.dK(b,this,"index",null,t))},
i:function(a){return P.fo(this,"(",")")}}
P.m.prototype={$iF:1,$iI:1}
P.t.prototype={}
P.w.prototype={
gu:function(a){return P.n.prototype.gu.call(this,this)},
i:function(a){return"null"}}
P.b8.prototype={}
P.n.prototype={constructor:P.n,$in:1,
R:function(a,b){return this===b},
gu:function(a){return H.aX(this)},
i:function(a){return"Instance of '"+H.a(H.bA(this))+"'"},
toString:function(){return this.i(this)}}
P.B.prototype={}
P.h.prototype={$ifw:1}
P.az.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iht:1}
W.f.prototype={}
W.bT.prototype={
i:function(a){return String(a)}}
W.bU.prototype={
i:function(a){return String(a)}}
W.au.prototype={$iau:1}
W.ah.prototype={
gk:function(a){return a.length}}
W.aP.prototype={
gk:function(a){return a.length}}
W.c6.prototype={}
W.av.prototype={$iav:1}
W.aQ.prototype={
F:function(a,b,c){var u=a.createElementNS(b,c)
return u}}
W.c8.prototype={
i:function(a){return String(a)}}
W.aR.prototype={
i:function(a){return a.localName},
bm:function(a,b,c){return a.setAttribute(b,c)},
$iaR:1}
W.c.prototype={$ic:1}
W.ai.prototype={
ba:function(a,b,c,d){return a.addEventListener(b,H.b7(H.l(c,{func:1,args:[W.c]}),1),!1)},
bk:function(a,b,c,d){return a.removeEventListener(b,H.b7(H.l(c,{func:1,args:[W.c]}),1),!1)},
$iai:1}
W.ca.prototype={
gk:function(a){return a.length}}
W.bo.prototype={}
W.J.prototype={
a9:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
c_:function(a,b){var u,t
try{u=a.parentNode
J.f4(u,b,a)}catch(t){H.Y(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.b2(a):u},
bw:function(a,b){return a.appendChild(b)},
bl:function(a,b,c){return a.replaceChild(b,c)},
$iJ:1}
W.cz.prototype={
gk:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.H.prototype={$iH:1}
W.bI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.dK(b,a,null,null,null))
return a[b]},
G:function(a,b){H.X(b)
if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.J]},
$ibr:1,
$abr:function(){return[W.J]},
$aa2:function(){return[W.J]},
$iI:1,
$aI:function(){return[W.J]},
$im:1,
$am:function(){return[W.J]},
$aaU:function(){return[W.J]}}
W.cX.prototype={
a8:function(a,b,c,d){var u=H.d(this,0)
H.l(a,{func:1,ret:-1,args:[u]})
H.l(c,{func:1,ret:-1})
return W.dQ(this.a,this.b,a,!1,u)},
aQ:function(a,b,c){return this.a8(a,b,c,null)}}
W.dP.prototype={}
W.cY.prototype={
an:function(a){var u=this
H.l(a,{func:1,ret:-1,args:[H.d(u,0)]})
if(u.b==null)throw H.j(P.fH("Subscription has been canceled."))
u.bq()
u.sbg(W.ex(H.l(a,{func:1,ret:-1,args:[W.c]}),W.c))
u.aI()},
ao:function(a,b){},
aI:function(){var u,t=this.d,s=t!=null
if(s&&!0){u=this.b
u.toString
H.l(t,{func:1,args:[W.c]})
if(s)J.f2(u,this.c,t,!1)}},
bq:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.l(t,{func:1,args:[W.c]})
if(s)J.f3(u,this.c,t,!1)}},
sbg:function(a){this.d=H.l(a,{func:1,args:[W.c]})}}
W.cZ.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ic"))},
$S:16}
W.aU.prototype={
gv:function(a){return new W.c9(a,a.length,[H.dX(this,a,"aU",0)])}}
W.c9.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.b(s,t)
u.saD(s[t])
u.c=t
return!0}u.saD(null)
u.c=s
return!1},
gq:function(){return this.d},
saD:function(a){this.d=H.o(a,H.d(this,0))},
$ibp:1}
W.bH.prototype={}
W.bL.prototype={}
W.bM.prototype={}
P.d9.prototype={
bT:function(){return Math.random()}}
P.dh.prototype={
i:function(a){var u=this
return"Rectangle ("+H.a(u.a)+", "+H.a(u.b)+") "+H.a(u.c)+" x "+H.a(u.d)},
R:function(a,b){var u,t,s,r,q,p,o,n=this
if(b==null)return!1
if(!!J.G(b).$ia_){u=n.a
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
n=C.c.gu(H.o(r+n,u))
r=s.d
if(typeof p!=="number")return p.m()
if(typeof r!=="number")return H.e(r)
u=C.c.gu(H.o(p+r,u))
u=P.da(P.da(P.da(P.da(0,q),o),n),u)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)}}
P.a_.prototype={}
P.aN.prototype={$iaN:1}
P.a6.prototype={$ia6:1}
P.T.prototype={}
P.al.prototype={$ial:1}
P.ay.prototype={$iay:1}
P.K.prototype={$iK:1}
P.i.prototype={$ii:1}
P.a0.prototype={$ia0:1}
P.aZ.prototype={}
P.a3.prototype={$ia3:1}
P.b_.prototype={}
P.bn.prototype={$iF:1,
$aF:function(){return[P.E]},
$iI:1,
$aI:function(){return[P.E]},
$im:1,
$am:function(){return[P.E]}}
F.bk.prototype={}
M.bc.prototype={
av:function(c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="rotate(90) translate(",c7=e1.h(0,C.w),c8=e1.h(0,C.q)
if(J.aq(c8).K(c8,"-"))c4.f=!0
p=!C.b.K(c8,"y")||!1
if(C.b.K(c8,"x2")){p=!1
o=!0}else o=!1
if(c4.r==null)c4.r=0
n=new M.c_(c4,d2,d3,c9,d4,d5)
m=new M.c0(c4,d2,d3,c9,d4,d5)
l=P.h
c4.sbb(0,P.a7($.dF,M.r,l))
c4.e.w(0,e1)
k=B.ef(c4.e.h(0,C.T))
j=B.ef(c4.e.h(0,C.U))
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
f=P.p(c4.e.h(0,C.j))
if(p){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.bd(n.$1(u),n.$1(t),e3.a,c5,!1)
if(J.S(s)>2){e=P.W(J.f8(s))
d=P.W(J.fa(s))
g=u
if(typeof e!=="number")return e.M()
if(typeof g!=="number")return H.e(g)
if(!(e<g)){g=t
if(typeof d!=="number")return d.ab()
if(typeof g!=="number")return H.e(g)
g=d>g}else g=!0
if(g){g=e3.a
if(typeof g!=="number")return g.m()
e3.a=g+1
s=M.bd(n.$1(u),n.$1(t),e3.a,c5,!1)}}g=J.S(s)
c=J.C(s,J.S(s)/2|0)
if(typeof f!=="number")return H.e(f)
g=C.l.E(g*c.length*f*0.6)
if(typeof d7!=="number")return H.e(d7)
if(g>d7){g=e3.a
if(typeof g!=="number")return H.e(g)
e3.a=C.k.E(0.8*g)
s=M.bd(n.$1(u),n.$1(t),e3.a,c5,!1)}b=P.p(c4.e.h(0,C.h))
if(typeof b!=="number")return b.m()
a=b+f+4
g=P.p(c4.e.h(0,C.B))
if(typeof g!=="number")return H.e(g)
a0=a+g
if(C.b.K(c8,"t")){g=P.p(c4.e.h(0,C.h))
if(typeof d8!=="number")return d8.l()
if(typeof g!=="number")return H.e(g)
b=d8-g
a=b-4
g=P.p(c4.e.h(0,C.B))
if(typeof g!=="number")return H.e(g)
a0=a-g
a1=d8}else a1=0
a2=c4.e.h(0,C.P)}else{if(o){if(c4.f){g=c4.r=d0+d1
u=g-d0
t=g-d1}s=M.bd(n.$1(u),n.$1(t),e3.a,c5,!1)}else try{r=d2
q=d3
s=M.bd(D.ek(u,r,q),D.ek(t,r,q),e3.a,c5,!1)}catch(a3){H.Y(a3)
s=H.u(["0.0"],[l])}g=P.p(c4.e.h(0,C.h))
if(typeof d8!=="number")return d8.l()
if(typeof g!=="number")return H.e(g)
b=d8-g
g=P.p(c4.e.h(0,C.A))
if(typeof g!=="number")return H.e(g)
a=b-g
g=P.p(c4.e.h(0,C.C))
if(typeof g!=="number")return H.e(g)
a0=a-g
if(C.b.K(c8,"t")){b=P.p(c4.e.h(0,C.h))
g=P.p(c4.e.h(0,C.A))
if(typeof b!=="number")return b.m()
if(typeof g!=="number")return H.e(g)
a=b+g
g=P.p(c4.e.h(0,C.S))
if(typeof g!=="number")return H.e(g)
a0=a+g
a1=0}else a1=d8
a2=c4.e.h(0,C.Q)}a4=H.u([],[P.L])
c4.a=P.bF()
c4.c=P.p(c4.e.h(0,C.L))
c4.d=P.p(c4.e.h(0,C.M))
for(g=d3!=null,c=d2!=null,a5=c5,a6=a5,a7=a6,a8=a7,a9=a8,b0="middle",b1="0",b2=0;b2<J.S(s);++b2){b3=P.W(J.C(s,b2))
if(!i||o){b4=H.eB(m.$1(b3))
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.l()
if(typeof b4!=="number")return H.e(b4)
b4=b5-b4}b6=J.at(c4.x.$1(b4))}else{if(g&&c){if(typeof b3!=="number")return b3.X()
if(typeof d3!=="number")return H.e(d3)
b7=b3*d2/d3}else b7=b3
if(c4.f){b5=c4.r
if(typeof b5!=="number")return b5.l()
if(typeof b7!=="number")return H.e(b7)
b4=b5-b7}else b4=b7
b6=J.at(c4.x.$1(b4))}if(b6<0)continue
if(typeof d7!=="number")return H.e(d7)
if(b6>d7)continue
C.a.n(a4,b6)
b5=document
b8=b5.createElementNS("http://www.w3.org/2000/svg","text")
b8=H.k(H.k(b8,"$ii"),"$ia3")
if(J.C(s,b2).length>4){if(typeof b3!=="number")return b3.aJ()
b9=Math.abs(b3)>99999}else b9=!1
if(b9){J.e1(s,b2,J.fc(b3,2))
b9=s
c0=J.C(s,b2)
J.e1(b9,b2,H.hm(c0,"e",""))}b8.textContent=J.C(s,b2)
if(p){b9=c4.c
if(typeof b9!=="number")return H.e(b9)
a6=b6+b9
a5=a}else{b9=c4.d
if(typeof b9!=="number")return H.e(b9)
a5=b6+b9
b0=H.eO(c8,"t",0)?"start":"end"
a6=a
b1="-33%"}B.A(b8,P.v(["x",""+a6,"y",""+a5,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.j),"text-anchor",b0,"baseline-shift",b1,"cursor","default"],l,l))
c4.a.appendChild(b8)
if(c4.e.W(C.h)){b9=P.p(c4.e.h(0,C.h))
if(typeof b9!=="number")return b9.ab()
b9=b9>0}else b9=!1
if(b9){c1=b5.createElementNS("http://www.w3.org/2000/svg","line")
c1=H.k(H.k(c1,"$ii"),"$ial")
if(p){b5=c4.c
if(typeof b5!=="number")return H.e(b5)
a7=b6+b5}else{b5=c4.d
if(typeof b5!=="number")return H.e(b5)
a7=b6+b5}if(p)B.A(c1,P.v(["x1",""+a7,"y1",""+a1,"x2",""+a7,"y2",""+b],l,l))
else B.A(c1,P.v(["x1",""+a1,"y1",""+a7,"x2",""+b,"y2",""+a7],l,l))
B.A(c1,P.v(["stroke",c4.e.h(0,C.N),"stroke-width",c4.e.h(0,C.O)],l,l))
c4.a.appendChild(c1)
a8=c1}a9=b8}if(C.b.K(c8,"g")&&d9!=null&&d9>0)if(p)c4.b=S.eo(a4,c5,c5,d9,e1)
else c4.b=S.eo(c5,a4,d9,c5,e1)
if(c7!=null&&C.b.aV(c7).length!==0){a9=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","text"),"$ii"),"$ia3")
a9.textContent=c7
if(p){if(typeof d7!=="number")return d7.H()
i=c4.c
if(typeof i!=="number")return H.e(i)
B.A(a9,P.v(["x",H.a(d7/2+i),"y",""+a0,"fill",a2,"stroke","none","font-size",c4.e.h(0,C.j),"text-anchor","middle","cursor","default"],l,l))}else{c2=P.p(c4.e.h(0,C.C))
if(typeof d7!=="number")return d7.S()
c3="rotate(-90) translate("+H.a(-d7/2)+", "+H.a(c2)+")"
if(J.b9(c4.e.h(0,C.R),"tb")){i=d7/2
g=c6+H.a(i)+", "
if(typeof c2!=="number")return c2.S()
c3=g+-c2+")"
if(C.b.K(c8,"t")){i=c6+H.a(i)+", "
if(typeof d8!=="number")return d8.S()
c3=i+(-d8+C.l.E(d8*0.22))+")"}}B.A(a9,P.v(["x","0","y","0","fill",a2,"stroke","none","font-size",c4.e.h(0,C.j),"text-anchor","middle","transform",c3,"cursor","default"],l,l))}l=W.b0
i={func:1,ret:-1,args:[l]}
W.dQ(a9,"touchstart",H.l(new M.bY(e2),i),!1,l)
W.dQ(a9,"touchmove",H.l(new M.bZ(e2),i),!1,l)
c4.a.appendChild(a9)}},
sbb:function(a,b){this.e=H.x(b,"$it",[M.r,P.h],"$at")}}
M.bW.prototype={
$0:function(){var u=this.a
u.j(0,C.q,J.f1(u.h(0,C.q),"y"))
return u},
$S:17}
M.c_.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.H()
if(typeof p!=="number")return H.e(p)
u=q/p
if(!H.dt(s.e))u=-u
if(o){if(typeof r!=="number")return r.m()
t=r+(a+0.5)*u}else{if(typeof r!=="number")return r.m()
t=r+a*u}return t},
$S:2}
M.c0.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.H()
if(typeof p!=="number")return H.e(p)
u=q/p
if(!H.dt(s.e))u=-u
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
if(typeof u!=="number")return u.ab()
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
S.cO.prototype={
bA:function(){var u,t,s,r,q,p,o,n,m=this,l="stroke-dasharray",k=P.bF(),j=m.e,i=j!=null
if(i)for(u=m.d,t=P.h,s=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.k(H.k(p,"$ii"),"$ial")
if(r>=j.length)return H.b(j,r)
q=""+j[r]
if(r>=j.length)return H.b(j,r)
B.A(p,P.v(["x1",q,"y1","0","x2",""+j[r],"y2",H.a(u),"stroke",m.b.h(0,C.r),"stroke-width",m.b.h(0,C.t),"stroke-opacity",m.b.h(0,C.u),l,m.b.h(0,C.v)],t,t))
k.appendChild(p)
s=p}j=m.f
i=j!=null
if(i)for(u=m.c,t=P.h,o=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.k(H.k(p,"$ii"),"$ial")
if(r>=j.length)return H.b(j,r)
q=""+j[r]
n=H.a(u)
if(r>=j.length)return H.b(j,r)
B.A(p,P.v(["x1","0","y1",q,"x2",n,"y2",""+j[r],"stroke",m.b.h(0,C.r),"stroke-width",m.b.h(0,C.t),"stroke-opacity",m.b.h(0,C.u),l,m.b.h(0,C.v)],t,t))
k.appendChild(p)
o=p}m.a=k},
sbx:function(a,b){this.b=H.x(b,"$it",[M.r,P.h],"$at")}}
D.cm.prototype={
aO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/2000/svg",h="legend",g=j.c,f=document
g.j(0,a,H.k(H.k(C.f.F(f,i,"text"),"$ii"),"$ia3"))
g.h(0,a).textContent=b
u=j.b
j.ch=P.p(J.C(u.h(0,h),C.F))
J.bQ(g.h(0,a),"font-size",H.a(j.ch))
t=g.h(0,a)
s=J.C(u.h(0,h),C.a5)
t.toString
J.bQ(t,"fill",H.y(s))
s=j.ch
t=P.p(J.C(u.h(0,h),C.aa))
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
if(typeof p!=="number")return p.Y()
o=12-C.c.V(p,2)}j.cy=t-1
t=j.z
C.aM.bw(t,g.h(0,a))
J.bQ(g.h(0,a),"x",""+o)
J.bQ(g.h(0,a),"y",H.a(j.e))
if(!s&&q){g=j.e
if(typeof g!=="number")return g.l()
n=H.k(H.k(C.f.F(f,i,"rect"),"$ii"),"$iK")
m=P.p(J.C(u.h(0,h),C.a9))
l=j.r
k=P.p(J.C(u.h(0,h),C.F))
if(typeof k!=="number")return k.Y()
u=C.c.V(k,2)
n.setAttribute("x","6")
n.setAttribute("y",""+(g-r+u))
n.setAttribute("width",H.a(l))
n.setAttribute("height",H.a(m))
n.setAttribute("fill",c)
j.d.j(0,a,n)
t.appendChild(n)}},
at:function(a,b,c){var u,t=this,s=t.c
if(s.W(a)){u=s.h(0,a)
u.textContent=b;(u&&C.au).c_(u,u)}else t.aO(a,b,c)
t.bs(t.e)},
bs:function(a){var u,t,s,r=this,q="legend",p=r.Q
if(p!=null)C.at.a9(p)
r.Q=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","rect"),"$ii"),"$iK")
p=r.b
u=P.p(J.C(p.h(0,q),C.a6))
if(u===0)return
t=P.p(J.C(p.h(0,q),C.a7))
r.Q.setAttribute("x","0")
r.Q.setAttribute("y","0")
s=r.Q
s.toString
s.setAttribute("width",H.a(u))
s=r.Q
s.toString
s.setAttribute("height",H.a(t))
s=r.Q
s.toString
s.setAttribute("fill",H.y(J.C(p.h(0,q),C.a3)))
s=r.Q
s.toString
s.setAttribute("fill-opacity",H.y(J.C(p.h(0,q),C.a4)))
r.z.appendChild(r.Q)}}
D.D.prototype={
i:function(a){return this.b}}
D.cv.prototype={
b4:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=P.h
a1.saj(P.a7($.fx,D.P,a2))
u=P.p(a1.a.h(0,C.X))
t=P.p(a1.a.h(0,C.Y))
s=P.p(a1.a.h(0,C.Z))
r=P.p(a1.a.h(0,C.a_))
q=a1.d
q.length
p=new Array(1)
p.fixed$length=Array
o=[P.a0]
a1.sbH(H.u(p,o))
p=new Array(1)
p.fixed$length=Array
a1.sbW(H.u(p,o))
o=new Array(1)
o.fixed$length=Array
p=[P.K]
a1.sbF(H.u(o,p))
o=new Array(1)
o.fixed$length=Array
a1.sbU(H.u(o,p))
p=new Array(1)
p.fixed$length=Array
o=[[P.a_,P.L]]
a1.sbV(H.u(p,o))
p=new Array(1)
p.fixed$length=Array
a1.sbG(H.u(p,o))
p=new Array(1)
p.fixed$length=Array
a1.sc9(H.u(p,o))
p=new Array(1)
p.fixed$length=Array
a1.scc(H.u(p,o))
o=new Array(1)
o.fixed$length=Array
a1.sbD(H.u(o,[W.au]))
o=P.L
a1.sbI(P.bC(s,s,0,0,o))
n=P.bF()
p=a1.b
m=p.clientWidth
if(typeof m!=="number")return m.l()
m=""+(m-2)
l=p.clientHeight
if(typeof l!=="number")return l.l()
B.A(n,P.v(["width",m,"height",""+(l-2)],a2,a2))
for(k=0;k<1;++k){m=p.clientWidth
l=q[k]
j=l[0]
if(typeof m!=="number")return m.X()
i=C.c.E(m*j)
j=p.clientHeight
h=l[1]
if(typeof j!=="number")return j.X()
g=C.c.E(j*h)
h=l[2]
if(typeof s!=="number")return H.e(s)
f=2*s
if(typeof r!=="number")return H.e(r)
e=2*r
d=C.c.E(m*h-2-f-e)
c=C.c.E(j*l[3]-2-f-e)
e=a1.z;(e&&C.a).j(e,k,P.bC(i,g,d,c,o))
e=a1.Q
f=a1.c
l=f.b
j=a1.z
if(k>=j.length)return H.b(j,k)
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
if(k>=f.length)return H.b(f,k)
f=f[k]
h=f.a
l=f.b
e=f.d
if(typeof l!=="number")return l.m()
if(typeof e!=="number")return H.e(e);(j&&C.a).j(j,k,P.bC(h,l+e,f.c,u,o))
f=a1.cx
e=a1.Q
if(k>=e.length)return H.b(e,k)
e=e[k]
l=e.a
if(typeof l!=="number")return l.l();(f&&C.a).j(f,k,P.bC(l-t,e.b,t,e.d,o))
e=a1.e
l=document
m=l.createElementNS("http://www.w3.org/2000/svg","svg")
H.k(m,"$ii")
m.setAttribute("version","1.1");(e&&C.a).j(e,k,H.k(m,"$ia0"))
m=a1.e
if(k>=m.length)return H.b(m,k)
m=m[k]
j=a1.z
if(k>=j.length)return H.b(j,k)
j=H.a(j[k].a)
h=a1.z
if(k>=h.length)return H.b(h,k)
h=H.a(h[k].b)
f=a1.z
if(k>=f.length)return H.b(f,k)
f=H.a(f[k].c)
e=a1.z
if(k>=e.length)return H.b(e,k)
B.A(m,P.v(["x",j,"y",h,"width",f,"height",H.a(e[k].d)],a2,a2))
e=a1.y
b=l.createElementNS("http://www.w3.org/2000/svg","rect");(e&&C.a).j(e,k,H.k(H.k(b,"$ii"),"$iK"))
a=P.p(a1.a.h(0,C.D))
m=a1.y
if(k>=m.length)return H.b(m,k)
m=m[k]
j=a1.z
if(k>=j.length)return H.b(j,k)
j=j[k].a
if(typeof j!=="number")return j.m()
if(typeof a!=="number")return H.e(a)
j=""+(j+a)
h=a1.z
if(k>=h.length)return H.b(h,k)
h=h[k].b
if(typeof h!=="number")return h.m()
h=""+(h+a)
f=a1.z
if(k>=f.length)return H.b(f,k)
f=f[k].c
e=2*a
if(typeof f!=="number")return f.l()
f=""+(f-e)
a0=a1.z
if(k>=a0.length)return H.b(a0,k)
a0=a0[k].d
if(typeof a0!=="number")return a0.l()
B.A(m,P.v(["x",j,"y",h,"width",f,"height",""+(a0-e),"fill","none","stroke",a1.a.h(0,C.a2),"stroke-width",a1.a.h(0,C.D)],a2,a2))
e=a1.f
m=l.createElementNS("http://www.w3.org/2000/svg","svg")
H.k(m,"$ii")
m.setAttribute("version","1.1");(e&&C.a).j(e,k,H.k(m,"$ia0"))
m=a1.f
if(k>=m.length)return H.b(m,k)
m=m[k]
j=a1.Q
if(k>=j.length)return H.b(j,k)
j=H.a(j[k].a)
h=a1.Q
if(k>=h.length)return H.b(h,k)
h=H.a(h[k].b)
f=a1.Q
if(k>=f.length)return H.b(f,k)
f=H.a(f[k].c)
e=a1.Q
if(k>=e.length)return H.b(e,k)
B.A(m,P.v(["x",j,"y",h,"width",f,"height",H.a(e[k].d)],a2,a2))
e=a1.x
b=l.createElementNS("http://www.w3.org/2000/svg","rect");(e&&C.a).j(e,k,H.k(H.k(b,"$ii"),"$iK"))
m=a1.x
if(k>=m.length)return H.b(m,k)
m=m[k]
l=a1.Q
if(k>=l.length)return H.b(l,k)
l=H.a(l[k].a)
j=a1.Q
if(k>=j.length)return H.b(j,k)
j=H.a(j[k].b)
h=a1.Q
if(k>=h.length)return H.b(h,k)
h=H.a(h[k].c)
f=a1.Q
if(k>=f.length)return H.b(f,k)
B.A(m,P.v(["x",l,"y",j,"width",h,"height",H.a(f[k].d),"fill","none","stroke",a1.a.h(0,C.a0),"stroke-width",a1.a.h(0,C.a1)],a2,a2))
m=p.style
m.position="relative"
m=a1.e
if(k>=m.length)return H.b(m,k)
m=m[k]
l=a1.f
if(k>=l.length)return H.b(l,k)
m.appendChild(l[k])
l=a1.e
if(k>=l.length)return H.b(l,k)
l=l[k]
m=a1.x
if(k>=m.length)return H.b(m,k)
l.appendChild(m[k])
m=a1.r
if(k>=m.length)return H.b(m,k)
m=m[k]
if(m!=null)n.appendChild(m)
m=a1.e
if(k>=m.length)return H.b(m,k)
n.appendChild(m[k])
if(a>0){m=a1.y
if(k>=m.length)return H.b(m,k)
n.appendChild(m[k])}}p.appendChild(n)},
saj:function(a){this.a=H.x(a,"$it",[D.P,P.h],"$at")},
sbI:function(a){this.c=H.x(a,"$ia_",[P.L],"$aa_")},
sbW:function(a){this.e=H.x(a,"$im",[P.a0],"$am")},
sbH:function(a){this.f=H.x(a,"$im",[P.a0],"$am")},
sbD:function(a){this.r=H.x(a,"$im",[W.au],"$am")},
sbF:function(a){this.x=H.x(a,"$im",[P.K],"$am")},
sbU:function(a){this.y=H.x(a,"$im",[P.K],"$am")},
sbV:function(a){this.z=H.x(a,"$im",[[P.a_,P.L]],"$am")},
sbG:function(a){this.Q=H.x(a,"$im",[[P.a_,P.L]],"$am")},
sc9:function(a){this.ch=H.x(a,"$im",[[P.a_,P.L]],"$am")},
scc:function(a){this.cx=H.x(a,"$im",[[P.a_,P.L]],"$am")}}
D.P.prototype={
i:function(a){return this.b}}
V.ax.prototype={
b5:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q=this
q.saj(P.a7($.dE(),V.q,P.h))
if(i!=null)q.a.w(0,i)
if(q.a.h(0,C.I)!=null){q.cy=P.p(q.a.h(0,C.I))
q.a.aS(0,C.I)}if(q.a.h(0,C.J)!=null){q.db=P.p(q.a.h(0,C.J))
q.a.aS(0,C.J)}u=q.cy
if(u==null)u=q.cy=0
t=q.db
if(t==null){t=q.r2.length-1
q.db=t}if(t<=u)t=q.db=u+1
if(u<0||u>q.r2.length-1)q.cy=0
u=q.r2
s=u.length-1
if(t>s||t<0)q.db=s
q.y2=B.fI(q.a.h(0,C.ao))
q.f=P.p(q.a.h(0,C.aq))
q.x=q.r=P.p(q.a.h(0,C.ar))
u=F.fl(u,q.cy,q.db,!1,P.p(q.a.h(0,C.ag)))
q.b=u
u=u.d.length
q.rx=new Float64Array(u)
for(r=0;u=q.b.d,r<u.length;++r){t=q.rx
u=u[r]
u.toString;(t&&C.m).j(t,r,u)}q.aM=E.e6(q.rx)[0]
q.aN=E.e5(q.rx)[0]
q.P=E.e6(q.b.a)[0]
q.B=E.e5(q.b.a)[0]
q.O=P.bF()
q.aZ()},
aZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a.h(0,C.n)==null||J.b9(j.a.h(0,C.n),"null")?j.cx=null:j.cx=P.W(j.a.h(0,C.n))
if(i!=null){u=j.B
if(typeof u!=="number")return u.aJ()
u=Math.abs(u)>0.0001}else u=!1
if(u){u=j.B
if(typeof i!=="number")return i.H()
if(typeof u!=="number")return H.e(u)
t=i/u
i=j.P
if(typeof i!=="number")return H.e(i)
j.P=t*i
j.B=t*u}j.k1=P.p(j.a.h(0,C.ai))
j.k2=P.p(j.a.h(0,C.am))
j.k3=P.p(j.a.h(0,C.an))
j.k4=P.W(j.a.h(0,C.ah))
j.r1=P.W(j.a.h(0,C.ak))
if(j.a.h(0,C.al)!=null){i=j.r1
u=P.W(j.a.h(0,C.al))
if(typeof i!=="number")return i.X()
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
if(o>=s.length)return H.b(s,o)
s=s[o]
n=j.k4
if(typeof n!=="number")return H.e(n)
m=j.b.a
if(o>=m.length)return H.b(m,o)
l=m[o]
q=J.at(j.ar(s*n))
p=J.at(j.as(l))
if(!H.dt(j.y2))if(p<0)p=2
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
if(i!=null)C.aG.a9(i)
j.c=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","polyline"),"$ii"),"$iay")
k=j.a.h(0,C.e)
i=P.p(j.a.h(0,C.af))
j.bM=i
j.x1=!1
j.c.setAttribute("stroke-width",H.a(i))
i=j.ry
if(i!=null){s=P.h
B.A(i,P.v(["stroke",H.a(k),"fill","none"],s,s))}i=j.c
s=j.a.h(0,C.e)
i.toString
i.setAttribute("stroke",H.y(s))
i.setAttribute("fill","none")
i.setAttribute("points",u.charCodeAt(0)==0?u:u)
if(j.a.h(0,C.ac)!=null){i=j.c
u=j.a.h(0,C.ac)
i.toString
i.setAttribute("transform",H.y(u))}j.O.appendChild(j.c)
j.fr=p
if(J.b9(j.a.h(0,C.ap),"true"))j.bv(q,p)
j.bu()
j.bt(q,p)},
ar:function(a){var u,t,s,r,q=this,p=q.aN,o=q.aM
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
aY:function(a){var u,t,s=this,r=s.a3
if(r==null||s.al==null)return
if(typeof r!=="number")return r.aJ()
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
if(typeof r!=="number")return r.S()
u=s.r1
if(typeof u!=="number")return H.e(u)
return-r/u}u=s.al
if(typeof a!=="number")return a.l()
if(typeof u!=="number")return H.e(u)
return-(a-u)/r},
as:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ch,i=P.W(l.a.h(0,C.i))
P.W(l.a.h(0,C.aj))
u=l.r1
if(typeof u!=="number")return H.e(u)
t=1-u
if(typeof i!=="number")return H.e(i)
if(t>i)t=i-0.01
if(typeof j!=="number")return H.e(j)
s=l.r
if(typeof s!=="number")return H.e(s)
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
if(typeof s!=="number")return H.e(s)
q=l.k3
if(typeof q!=="number")return H.e(q)
q=r+u*0+s+q
l.al=q
if(typeof a!=="number")return H.e(a)
k=-u*a+q
try{J.at(k)
u=k
return u}catch(m){H.Y(m)
u=l.z
if(typeof u!=="number")return u.H()
return u/2}},
bv:function(a,b){var u,t,s,r=this,q=r.ry
if(q!=null)C.at.a9(q)
if(a==null){a=r.x2
if(a!=null&&r.y1!=null)b=r.y1
else{a=r.dy
if(a!=null&&r.fr!=null)b=r.fr
else return}}u=P.p(r.a.h(0,C.ad))
if(J.b9(r.a.h(0,C.ae),"true")){q=r.y
t=r.f
if(typeof t!=="number")return t.Y()
t=C.c.V(t,2)
if(typeof q!=="number")return q.l()
if(typeof a!=="number")return a.ab()
t=a>q-t
q=t}else q=!1
if(q){q=r.y
if(typeof q!=="number")return q.l()
if(typeof u!=="number")return H.e(u)
a=q-u}if(typeof a!=="number")return a.m()
r.x2=a+2
if(typeof u!=="number")return u.Y()
q=C.c.V(u,2)
if(typeof b!=="number")return b.l()
r.y1=b-q
s=r.a.h(0,C.e)
q=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","rect"),"$ii"),"$iK")
r.ry=q
t=P.h
B.A(q,P.v(["x",H.a(r.x2),"y",H.a(r.y1),"width",""+u,"height",""+u,"stroke",H.a(s),"fill","white"],t,t))
r.O.appendChild(r.ry)},
bu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.d,b=c.length
if(b!==0){for(u=0;u<c.length;c.length===b||(0,H.eP)(c),++u){t=c[u]
s=t.parentNode
if(s!=null)s.removeChild(t)}C.a.sk(c,0)}r=d.a.h(0,C.aH)
if(r==null||r.length===0)return
b=P.h
q=H.x(J.e2(C.x.ak(0,r),b),"$im",[b],"$am")
t=q.ga4(q)
s=q.a
p=J.aq(s)
if(p.gk(s)<4)return
for(o=t==="POLYLINE_POINT_SHAPE_CIRCLE_EMPTY",n=t==="POLYLINE_POINT_SHAPE_SQUARE_EMPTY",m=H.d(q,1),l=2;l<p.gk(s);l+=2){k=P.W(H.R(p.h(s,l),m))
j=P.W(H.R(p.h(s,l+1),m))
i=J.at(d.ar(k))
h=J.at(d.as(j))
g=d.a.h(0,C.aI)
if(g==null)g=d.a.h(0,C.e)
if(n){f=document.createElementNS("http://www.w3.org/2000/svg","rect")
f=H.k(H.k(f,"$ii"),"$iK")
B.A(f,P.v(["x",H.a(i+18626451505319996e-25),"y",H.a(h+18626451505319996e-25),"width","8","height","8","stroke",H.a(g),"fill","white"],b,b))
e=f}else if(o){f=document.createElementNS("http://www.w3.org/2000/svg","circle")
f=H.k(H.k(f,"$ii"),"$iaN")
B.A(f,P.v(["cx",""+i,"cy",""+h,"r","6","stroke",H.a(g),"fill","white"],b,b))
e=f}else e=null
C.a.n(c,e)
d.O.appendChild(e)}d.a.j(0,C.z,H.R(p.h(s,1),m))},
bt:function(a,b){var u,t,s,r,q=this,p=q.e
if(p!=null)C.au.a9(p)
if(q.a.h(0,C.z)==null||J.S(q.a.h(0,C.z))===0)return
p=H.k(H.k(C.f.F(document,"http://www.w3.org/2000/svg","text"),"$ii"),"$ia3")
q.e=p
p.textContent=H.y(q.a.h(0,C.z))
u=P.p(q.a.h(0,C.as))
p=q.e
if(typeof a!=="number")return a.m()
t=""+(a+8)
if(typeof u!=="number")return u.Y()
s=C.c.V(u,4)
if(typeof b!=="number")return b.m()
r=P.h
B.A(p,P.v(["x",t,"y",""+(b+s),"font-size",""+u,"fill",q.a.h(0,C.e),"stroke","none"],r,r))
q.O.appendChild(q.e)},
saj:function(a){this.a=H.x(a,"$it",[V.q,P.h],"$at")}}
V.q.prototype={
i:function(a){return this.b}}
X.cA.prototype={
b6:function(a,a0,a1,a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
c.bE()
u=c.f
if(0>=u.length)return H.b(u,0)
u=u[0]
t=M.r
s=P.h
r=P.a7($.dF,t,s)
r.w(0,c.z)
c.sc8(r)
r=P.a7($.dF,t,s)
r.w(0,c.Q)
c.scb(r)
t=u.r2.length
q=t-1
if(c.z.h(0,C.o)!=null&&J.S(c.z.h(0,C.o))!==0&&c.z.h(0,C.p)!=null&&J.S(c.z.h(0,C.p))!==0){p=P.W(c.z.h(0,C.o))
q=P.W(c.z.h(0,C.p))}else p=0
o=u.rx
o=(o&&C.m).ga4(o)
n=u.rx
n=(n&&C.m).ga7(n)
m=c.a
l=m.Q
k=c.b
if(k>=l.length)return H.b(l,k)
l=l[k]
j=l.c
i=m.ch
if(k>=i.length)return H.b(i,k)
i=i[k].d
l=l.d
h=u.gca()
g=new M.bc(b,h)
g.av(t,o,n,p,q,!0,b,b,j,i,l,h,c.z,b,{})
c.c=g
h=g.a
l=m.ch
if(k>=l.length)return H.b(l,k)
l=l[k].a
g=g.c
if(typeof l!=="number")return l.l()
if(typeof g!=="number")return H.e(g)
g=""+(l-g)
l=m.ch
if(k>=l.length)return H.b(l,k)
B.A(h,P.v(["x",g,"y",H.a(l[k].b)],s,s))
l=c.c.b.a
g=m.Q
if(k>=g.length)return H.b(g,k)
g=H.a(g[k].a)
h=m.Q
if(k>=h.length)return H.b(h,k)
B.A(l,P.v(["x",g,"y",H.a(h[k].b)],s,s))
f=u.aY(0)
h=m.Q
if(k>=h.length)return H.b(h,k)
e=u.aY(h[k].d)
if(f==null)f=u.P
if(e==null)e=u.B
t=u.r1
if(typeof f!=="number")return f.H()
if(typeof t!=="number")return H.e(t)
if(typeof e!=="number")return e.H()
o=m.Q
if(k>=o.length)return H.b(o,k)
o=o[k]
n=o.d
l=m.cx
if(k>=l.length)return H.b(l,k)
u=M.ff(f/t,e/t,b,b,b,n,l[k].c,o.c,u.gcd(),c.Q,b)
c.d=u
u=u.a
o=m.cx
if(k>=o.length)return H.b(o,k)
o=H.a(o[k].a)
l=m.cx
if(k>=l.length)return H.b(l,k)
l=l[k].b
n=c.d.d
if(typeof l!=="number")return l.l()
if(typeof n!=="number")return H.e(n)
B.A(u,P.v(["x",o,"y",""+(l-n)],s,s))
n=c.d.b.a
l=m.Q
if(k>=l.length)return H.b(l,k)
l=H.a(l[k].a)
o=m.Q
if(k>=o.length)return H.b(o,k)
B.A(n,P.v(["x",l,"y",H.a(o[k].b)],s,s))
c.r=X.fE(c.y,c.cx)
for(d=0;d<2;++d){u=m.f
if(k>=u.length)return H.b(u,k)
u=u[k]
t=c.f
if(d>=t.length)return H.b(t,d)
u.appendChild(t[d].O)}u=m.f
t=u.length
if(k>=t)return H.b(u,k)
u[k].appendChild(c.r.z)
u=m.e
if(k>=u.length)return H.b(u,k)
u[k].appendChild(c.c.a)
u=m.e
if(k>=u.length)return H.b(u,k)
u[k].appendChild(c.d.a)
u=m.e
if(k>=u.length)return H.b(u,k)
u[k].appendChild(c.c.b.a)
m=m.e
if(k>=m.length)return H.b(m,k)
m[k].appendChild(c.d.b.a)},
bE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=new Array(2)
g.fixed$length=Array
h.sbZ(H.u(g,[V.ax]))
if(h.cx==null)h.sbY(h.ch)
for(g=h.e,u=h.a,t=h.b,s=V.q,r=P.h,q=[[P.t,V.q,P.h]],p=0;p<2;++p){if(p===0)o=h.x.length!==2
else o=!1
if(o){o=new Array(2)
o.fixed$length=Array
h.sbX(H.u(o,q))}o=h.x
if(p>=o.length)return H.b(o,p)
n=o[p]
if(n==null){C.a.j(o,p,P.a7($.dE(),s,r))
o=h.x
if(p>=o.length)return H.b(o,p)
o[p].j(0,C.i,"0.8")
o=h.x
if(p>=o.length)return H.b(o,p)
o[p].j(0,C.e,h.cx[p])}else{if(n.h(0,C.i)==null){o=h.x
if(p>=o.length)return H.b(o,p)
o[p].j(0,C.i,"0.8")}o=h.x
if(p>=o.length)return H.b(o,p)
if(o[p].h(0,C.e)==null){o=h.x
if(p>=o.length)return H.b(o,p)
o[p].j(0,C.e,h.cx[p])}m=P.a7($.dE(),s,r)
o=h.x
if(p>=o.length)return H.b(o,p)
m.w(0,o[p])
C.a.j(h.x,p,m)}if(p>0){o=h.x
if(p>=o.length)return H.b(o,p)
o=o[p]
n=h.f
if(0>=n.length)return H.b(n,0)
o.j(0,C.n,H.a(n[0].B))}o=h.f
n=g[p]
l=n.length
k=u.Q
if(t>=k.length)return H.b(k,t)
k=k[t]
j=k.c
k=k.d
i=h.x
if(p>=i.length)return H.b(i,p);(o&&C.a).j(o,p,V.fy(n,0,l-1,j,k,null,null,null,i[p]))}},
sbZ:function(a){this.f=H.x(a,"$im",[V.ax],"$am")},
sbX:function(a){this.x=H.x(a,"$im",[[P.t,V.q,P.h]],"$am")},
sc8:function(a){this.z=H.x(a,"$it",[M.r,P.h],"$at")},
scb:function(a){this.Q=H.x(a,"$it",[M.r,P.h],"$at")},
sbY:function(a){this.cx=H.x(a,"$im",[P.h],"$am")}}
B.cy.prototype={
$2:function(a,b){this.a.setAttribute(H.y(a),H.y(b))
return},
$S:19}
G.cB.prototype={
b7:function(a,b,c,d,e){var u,t,s,r,q,p,o=this,n=6.283185307179586*d
o.b=new Float64Array(a)
o.a=new Float64Array(a)
for(u=Math.abs(c)<0.00001,t=0;t<a;++t){s=t*n/a
if(t===0&&u)r=b
else{q=s+c
r=b*Math.sin(q)/q}p=o.b
if(t>=p.length)return H.b(p,t)
p[t]=s
p=o.a
if(t>=p.length)return H.b(p,t)
p[t]=r+e}}}
R.cC.prototype={
b8:function(a,b,c,d,e,f){var u,t,s,r,q,p=6.283185307179586*d
this.a=new Float64Array(a)
new Float64Array(a)
for(u=e*b,t=0;t<a;++t){s=Math.sin(t*p/a+c)
r=this.a
q=J.fb(2*C.aB.bT()-1)
if(t>=r.length)return H.b(r,t)
r[t]=b*s+f+u*q}}};(function aliases(){var u=J.O.prototype
u.b2=u.i
u=J.bs.prototype
u.b3=u.i})();(function installTearOffs(){var u=hunkHelpers._instance_1u,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff
u(H.bh.prototype,"gbh","bi",8)
t(P,"h_","fL",5)
t(P,"h0","fM",5)
t(P,"h1","fN",5)
s(P,"eA","fY",1)
r(P.V.prototype,"gbc",0,1,null,["$2","$1"],["a_","bd"],12,0)
t(P,"h2","fR",3)
var q
u(q=V.ax.prototype,"gca","ar",2)
u(q,"gcd","as",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.dN,J.O,J.bb,P.an,H.bh,P.a8,P.I,H.c3,P.Z,H.aO,H.bu,H.bm,H.cI,P.aw,H.bJ,H.cn,H.cp,P.dm,P.aa,P.V,P.bG,P.aY,P.M,P.dp,P.a2,P.bj,P.df,P.aC,P.b8,P.bD,P.d_,P.cb,P.m,P.t,P.w,P.B,P.h,P.az,W.c6,W.aU,W.c9,P.d9,P.dh,P.bn,F.bk,M.bc,M.r,S.cO,D.cm,D.D,D.cv,D.P,V.ax,V.q,X.cA,G.cB,R.cC])
s(J.O,[J.ce,J.cf,J.bs,J.ac,J.aj,J.ak,H.by,W.ai,W.bH,W.c8,W.c,W.bL])
s(J.bs,[J.cu,J.af,J.ad])
t(J.dM,J.ac)
s(J.aj,[J.aV,J.bq])
s(P.an,[H.bg,W.cX])
s(P.a8,[H.bi,P.ab])
s(P.ab,[H.be,P.cl,P.ck])
s(P.I,[H.cU,H.F])
s(H.cU,[H.bf,H.bK])
t(H.cW,H.bf)
t(H.cV,H.bK)
t(H.aL,H.cV)
t(P.cr,P.Z)
s(P.cr,[H.aM,H.ae,P.db])
s(H.aO,[H.c4,H.dD,H.cH,H.cg,H.dy,H.dz,H.dA,P.cR,P.cQ,P.cS,P.cT,P.dn,P.d0,P.d4,P.d1,P.d2,P.d3,P.d7,P.d8,P.d6,P.d5,P.cF,P.cG,P.dr,P.dk,P.dj,P.dl,P.cq,P.cs,P.dd,P.dg,W.cZ,M.bW,M.c_,M.c0,M.bX,M.bY,M.bZ,B.cy])
s(H.F,[H.aW,H.co])
s(P.aw,[H.ct,H.ch,H.cM,H.cK,H.c2,H.cx,P.bV,P.bt,P.bz,P.ag,P.cN,P.cL,P.bE,P.c5,P.c7])
s(H.cH,[H.cD,H.aJ])
t(H.cP,P.bV)
t(H.bw,H.by)
t(H.b2,H.bw)
t(H.b3,H.b2)
t(H.bx,H.b3)
t(H.bv,H.bx)
t(P.di,P.dp)
t(P.dc,H.aW)
t(P.cj,P.bt)
t(P.ci,P.bj)
t(P.de,P.df)
s(P.b8,[P.E,P.L])
s(P.ag,[P.bB,P.cc])
t(W.J,W.ai)
s(W.J,[W.aR,W.ah,W.aQ])
s(W.aR,[W.f,P.i])
s(W.f,[W.bT,W.bU,W.au,W.av,W.ca,W.cz])
t(W.aP,W.bH)
t(W.bo,W.aQ)
t(W.H,W.c)
t(W.b0,W.H)
t(W.bM,W.bL)
t(W.bI,W.bM)
t(W.dP,W.cX)
t(W.cY,P.aY)
t(P.a_,P.dh)
t(P.T,P.i)
s(P.T,[P.a6,P.a0,P.aZ])
s(P.a6,[P.aN,P.al,P.ay,P.K])
t(P.b_,P.aZ)
t(P.a3,P.b_)
u(H.bK,P.a2)
u(H.b2,P.a2)
u(H.b3,H.bm)
u(W.bH,W.c6)
u(W.bL,P.a2)
u(W.bM,W.aU)})()
var v={mangledGlobalNames:{L:"int",E:"double",b8:"num",h:"String",aC:"bool",w:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.w},{func:1,ret:-1},{func:1,ret:P.E,args:[P.E]},{func:1,args:[,]},{func:1,ret:P.w,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.w,args:[,]},{func:1,ret:P.w,args:[W.H]},{func:1,ret:-1,args:[P.n]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.n],opt:[P.B]},{func:1,ret:P.w,args:[,],opt:[P.B]},{func:1,ret:[P.V,,],args:[,]},{func:1,ret:P.w,args:[P.h,,]},{func:1,args:[W.c]},{func:1,ret:[P.t,M.r,P.h]},{func:1,ret:P.w,args:[P.h,P.h]},{func:1,ret:-1,args:[P.h,P.h]}],interceptorsByTag:null,leafTags:null};(function constants(){C.f=W.bo.prototype
C.aC=J.O.prototype
C.a=J.ac.prototype
C.k=J.bq.prototype
C.c=J.aV.prototype
C.l=J.aj.prototype
C.b=J.ak.prototype
C.aD=J.ad.prototype
C.m=H.bv.prototype
C.ab=J.cu.prototype
C.aG=P.ay.prototype
C.at=P.K.prototype
C.aM=P.a0.prototype
C.au=P.a3.prototype
C.K=J.af.prototype
C.L=new M.r("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X")
C.M=new M.r("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y")
C.o=new M.r("AxA.PHYS_X_START")
C.p=new M.r("AxA.PHYS_X_WIDTH")
C.q=new M.r("AxA.POSITION")
C.N=new M.r("AxA.STROKE")
C.O=new M.r("AxA.STROKE_WIDTH")
C.P=new M.r("AxA.TEXT_COLOR_X")
C.Q=new M.r("AxA.TEXT_COLOR_Y")
C.h=new M.r("AxA.TICK_LENGTH")
C.R=new M.r("AxA.YLEGENDTEXT_DIRECTION")
C.r=new M.r("AxA.XYGRID_STROKE")
C.j=new M.r("AxA.FONT_SIZE")
C.t=new M.r("AxA.XYGRID_STROKE_WIDTH")
C.u=new M.r("AxA.XYGRID_STROKE_OPACITY")
C.v=new M.r("AxA.XYGRID_STROKE_DASH")
C.A=new M.r("AxA.LABELS_OFFSET_Y")
C.w=new M.r("AxA.LEGENDTEXT")
C.B=new M.r("AxA.LEGENDTEXT_OFFSET_X")
C.C=new M.r("AxA.LEGENDTEXT_LEFT_OFFSET_Y")
C.S=new M.r("AxA.LEGENDTEXT_RIGHT_OFFSET_Y")
C.T=new M.r("AxA.NLABELS_X")
C.U=new M.r("AxA.NLABELS_Y")
C.V=function getTagFallback(o) {
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
C.W=function(hooks) { return hooks; }

C.x=new P.ci()
C.aB=new P.d9()
C.d=new P.di()
C.aE=new P.ck(null)
C.aF=new P.cl(null)
C.X=new D.P("LayA.X_AXIS_AREA_HEIGHT")
C.Y=new D.P("LayA.Y_AXIS_AREA_WIDTH")
C.Z=new D.P("LayA.BORDER_AREA_SIZE")
C.a_=new D.P("LayA.FRAME_SIZE")
C.a0=new D.P("LayA.DATA_AREA_BORDER_COLOR")
C.a1=new D.P("LayA.DATA_AREA_BORDER_WIDTH")
C.a2=new D.P("LayA.PLOT_AREA_BORDER_COLOR")
C.D=new D.P("LayA.PLOT_AREA_BORDER_WIDTH")
C.a3=new D.D("LegA.BG_COLOR")
C.a4=new D.D("LegA.BG_OPACITY")
C.a5=new D.D("LegA.TEXT_COLOR")
C.y=new D.D("LegA.TOP_TITLE")
C.E=new D.D("LegA.SUB_TITLES")
C.a6=new D.D("LegA.BG_WIDTH")
C.a7=new D.D("LegA.BG_HEIGTH")
C.a8=new D.D("LegA.COLORED_RECT_WIDTH")
C.a9=new D.D("LegA.COLORED_RECT_HEIGHT")
C.F=new D.D("LegA.FONT_SIZE")
C.aa=new D.D("LegA.LINESEP")
C.G=new D.D("LegA.X")
C.H=new D.D("LegA.Y")
C.aH=new V.q("PyA.POINT_LIST")
C.aI=new V.q("PyA.POINT_LIST_STROKE")
C.n=new V.q("PyA.REFYMAX")
C.ac=new V.q("PyA.ROTATE")
C.ad=new V.q("PyA.SELECTION_ICON_WIDTH")
C.ae=new V.q("PyA.SELECTION_ICON_OUTSIDE")
C.aJ=new V.q("PyA.SHOW_LEGEND")
C.e=new V.q("PyA.STROKE")
C.af=new V.q("PyA.STROKE_WIDTH")
C.ag=new V.q("PyA.COMPRESSION_LENGTH")
C.aK=new V.q("PyA.STROKE_WIDTH_HILITE")
C.ah=new V.q("PyA.XSCALE")
C.ai=new V.q("PyA.XSHIFT")
C.aj=new V.q("PyA.YIX1")
C.ak=new V.q("PyA.YSCALE")
C.al=new V.q("PyA.YSCALE2")
C.am=new V.q("PyA.YSHIFT1")
C.an=new V.q("PyA.YSHIFT2")
C.i=new V.q("PyA.YPOSITION_ZERO")
C.aL=new V.q("PyA.YPOSITION_ZERO_RESET")
C.ao=new V.q("PyA.DRAW_OUTSIDE_Y_VIEWPORT")
C.I=new V.q("PyA.OVERRIDE_IXFIRST")
C.J=new V.q("PyA.OVERRIDE_IXLAST")
C.ap=new V.q("PyA.DRAW_SELECTION_ICON")
C.aq=new V.q("PyA.INSETX")
C.ar=new V.q("PyA.INSETY")
C.z=new V.q("PyA.MARKER_TEXT")
C.as=new V.q("PyA.MARKER_FONTSIZE")})();(function staticFields(){$.a5=0
$.aK=null
$.e8=null
$.dR=!1
$.eG=null
$.ey=null
$.eM=null
$.dw=null
$.dB=null
$.dY=null
$.aA=null
$.b4=null
$.b5=null
$.dS=!1
$.z=C.d
$.Q=[]
$.dF=P.v([C.j,"18",C.L,"50",C.M,"10",C.A,"2",C.w,"",C.B,"20",C.C,"30",C.S,"30",C.T,'{"100":"2", "200":"4", "300":"8", "400":"10", "500":"10", "600":"10", "700":"10"}',C.U,'{"100":"7", "200":"7", "300":"12", "400":"12", "500":"12", "600":"12", "700":"12"}',C.q,"bg",C.N,"black",C.O,"1",C.P,"black",C.Q,"black",C.h,"6",C.R,"bt",C.r,"#A9A9A9",C.t,"1.0",C.u,"0.3",C.v,"0,0"],M.r,P.h)
$.fJ=P.v([C.r,"#A9A9A9",C.t,"1.0",C.u,"0.3",C.v,"0,0"],M.r,P.h)
$.eg=P.v([C.a3,"lightgrey",C.a4,"0.2",C.a6,"0",C.a7,"100",C.a8,"20",C.a9,"12",C.F,"16",C.aa,"4",C.G,"12",C.H,"12",C.a5,"black",C.y,""],D.D,P.h)
$.fx=P.v([C.X,"70",C.Y,"80",C.Z,"15",C.a_,"0",C.a0,"darkgreen",C.a1,"1",C.a2,"darkgreen",C.D,"0"],D.P,P.h)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"hq","eR",function(){return H.eF("_$dart_dartClosure")})
u($,"hr","e_",function(){return H.eF("_$dart_js")})
u($,"hu","eS",function(){return H.a9(H.cJ({
toString:function(){return"$receiver$"}}))})
u($,"hv","eT",function(){return H.a9(H.cJ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"hw","eU",function(){return H.a9(H.cJ(null))})
u($,"hx","eV",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hA","eY",function(){return H.a9(H.cJ(void 0))})
u($,"hB","eZ",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hz","eX",function(){return H.a9(H.em(null))})
u($,"hy","eW",function(){return H.a9(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"hD","f0",function(){return H.a9(H.em(void 0))})
u($,"hC","f_",function(){return H.a9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"hF","e0",function(){return P.fK()})
u($,"hs","dE",function(){return P.v([C.ag,"1024",C.ao,"true",C.ap,"false",C.aq,"16",C.ar,"12",C.as,"16",C.n,"null",C.ad,"16",C.ae,"false",C.aJ,"true",C.e,"blue",C.af,"1",C.aK,"2",C.ah,"1.0",C.ai,"0",C.aj,"0.0",C.ak,"1",C.am,"0",C.an,"0",C.i,"0.9",C.aL,"0.9"],V.q,P.h)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.O,MediaError:J.O,Navigator:J.O,NavigatorConcurrentHardware:J.O,NavigatorUserMediaError:J.O,OverconstrainedError:J.O,PositionError:J.O,SQLError:J.O,ArrayBufferView:H.by,Float64Array:H.bv,HTMLAudioElement:W.f,HTMLBRElement:W.f,HTMLBaseElement:W.f,HTMLBodyElement:W.f,HTMLButtonElement:W.f,HTMLContentElement:W.f,HTMLDListElement:W.f,HTMLDataElement:W.f,HTMLDataListElement:W.f,HTMLDetailsElement:W.f,HTMLDialogElement:W.f,HTMLEmbedElement:W.f,HTMLFieldSetElement:W.f,HTMLHRElement:W.f,HTMLHeadElement:W.f,HTMLHeadingElement:W.f,HTMLHtmlElement:W.f,HTMLIFrameElement:W.f,HTMLImageElement:W.f,HTMLInputElement:W.f,HTMLLIElement:W.f,HTMLLabelElement:W.f,HTMLLegendElement:W.f,HTMLLinkElement:W.f,HTMLMapElement:W.f,HTMLMediaElement:W.f,HTMLMenuElement:W.f,HTMLMetaElement:W.f,HTMLMeterElement:W.f,HTMLModElement:W.f,HTMLOListElement:W.f,HTMLObjectElement:W.f,HTMLOptGroupElement:W.f,HTMLOptionElement:W.f,HTMLOutputElement:W.f,HTMLParagraphElement:W.f,HTMLParamElement:W.f,HTMLPictureElement:W.f,HTMLPreElement:W.f,HTMLProgressElement:W.f,HTMLQuoteElement:W.f,HTMLScriptElement:W.f,HTMLShadowElement:W.f,HTMLSlotElement:W.f,HTMLSourceElement:W.f,HTMLSpanElement:W.f,HTMLStyleElement:W.f,HTMLTableCaptionElement:W.f,HTMLTableCellElement:W.f,HTMLTableDataCellElement:W.f,HTMLTableHeaderCellElement:W.f,HTMLTableColElement:W.f,HTMLTableElement:W.f,HTMLTableRowElement:W.f,HTMLTableSectionElement:W.f,HTMLTemplateElement:W.f,HTMLTextAreaElement:W.f,HTMLTimeElement:W.f,HTMLTitleElement:W.f,HTMLTrackElement:W.f,HTMLUListElement:W.f,HTMLUnknownElement:W.f,HTMLVideoElement:W.f,HTMLDirectoryElement:W.f,HTMLFontElement:W.f,HTMLFrameElement:W.f,HTMLFrameSetElement:W.f,HTMLMarqueeElement:W.f,HTMLElement:W.f,HTMLAnchorElement:W.bT,HTMLAreaElement:W.bU,HTMLCanvasElement:W.au,CDATASection:W.ah,CharacterData:W.ah,Comment:W.ah,ProcessingInstruction:W.ah,Text:W.ah,CSSStyleDeclaration:W.aP,MSStyleCSSProperties:W.aP,CSS2Properties:W.aP,HTMLDivElement:W.av,XMLDocument:W.aQ,Document:W.aQ,DOMException:W.c8,Element:W.aR,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,WebGLContextEvent:W.c,Event:W.c,InputEvent:W.c,Window:W.ai,DOMWindow:W.ai,EventTarget:W.ai,HTMLFormElement:W.ca,HTMLDocument:W.bo,DocumentFragment:W.J,ShadowRoot:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,HTMLSelectElement:W.cz,TouchEvent:W.b0,CompositionEvent:W.H,FocusEvent:W.H,KeyboardEvent:W.H,MouseEvent:W.H,DragEvent:W.H,PointerEvent:W.H,TextEvent:W.H,WheelEvent:W.H,UIEvent:W.H,NamedNodeMap:W.bI,MozNamedAttrMap:W.bI,SVGCircleElement:P.aN,SVGEllipseElement:P.a6,SVGPathElement:P.a6,SVGPolygonElement:P.a6,SVGGeometryElement:P.a6,SVGAElement:P.T,SVGClipPathElement:P.T,SVGDefsElement:P.T,SVGForeignObjectElement:P.T,SVGGElement:P.T,SVGImageElement:P.T,SVGSwitchElement:P.T,SVGUseElement:P.T,SVGGraphicsElement:P.T,SVGLineElement:P.al,SVGPolylineElement:P.ay,SVGRectElement:P.K,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPatternElement:P.i,SVGRadialGradientElement:P.i,SVGScriptElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSymbolElement:P.i,SVGTitleElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGSVGElement:P.a0,SVGTextPathElement:P.aZ,SVGTextContentElement:P.aZ,SVGTextElement:P.a3,SVGTSpanElement:P.b_,SVGTextPositioningElement:P.b_})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Float64Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGCircleElement:true,SVGEllipseElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGImageElement:true,SVGSwitchElement:true,SVGUseElement:true,SVGGraphicsElement:false,SVGLineElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPatternElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTextElement:true,SVGTSpanElement:true,SVGTextPositioningElement:false})
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.b2.$nativeSuperclassTag="ArrayBufferView"
H.b3.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.eJ,[])
else U.eJ([])})})()
//# sourceMappingURL=example.dart.js.map
