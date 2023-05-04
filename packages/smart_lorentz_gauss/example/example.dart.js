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
a[c]=function(){a[c]=function(){H.hi(b)}
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
if(w[u][a])return w[u][a]}}var C={},H={dI:function dI(){},
dC:function(a,b,c){if(H.dp(a,"$iF",[b],"$aF"))return new H.cS(a,[b,c])
return new H.bc(a,[b,c])},
ca:function(){return new P.bC("No element")},
bd:function bd(a,b){this.a=a
this.$ti=b},
be:function be(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bf:function bf(a,b){this.a=a
this.$ti=b},
bb:function bb(a,b){this.a=a
this.$ti=b},
cQ:function cQ(){},
c0:function c0(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b){this.a=a
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
F:function F(){},
aT:function aT(){},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bj:function bj(){},
bH:function bH(){},
aG:function(a){var u,t=H.hj(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
h3:function(a){return v.types[H.W(a)]},
h8:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.G(a).$ibp},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b8(a)
if(typeof u!=="string")throw H.h(H.bK(a))
return u},
aU:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
fx:function(a,b){var u,t
if(typeof a!=="string")H.aF(H.bK(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.l(u,3)
t=H.x(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
fw:function(a){var u,t
if(typeof a!=="string")H.aF(H.bK(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.fa(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
by:function(a){return H.fv(a)+H.dQ(H.ao(a),0,null)},
fv:function(a){var u,t,s,r,q,p,o,n=J.G(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.at||!!n.$iak){r=C.U(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aG(t.length>1&&C.b.Y(t,0)===36?C.b.b0(t,1):t)},
T:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aG(u,10))>>>0,56320|u&1023)}throw H.h(P.ai(a,0,1114111,null,null))},
i:function(a){throw H.h(H.bK(a))},
l:function(a,b){if(a==null)J.R(a)
throw H.h(H.aB(a,b))},
aB:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,s,null)
u=H.W(J.R(a))
if(!(b<0)){if(typeof u!=="number")return H.i(u)
t=b>=u}else t=!0
if(t)return P.dF(b,a,s,null,u)
return P.cu(b,s)},
bK:function(a){return new P.ad(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.bx()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.eN})
u.name=""}else u.toString=H.eN
return u},
eN:function(){return J.b8(this.dartException)},
aF:function(a){throw H.h(a)},
eM:function(a){throw H.h(P.bi(a))},
a6:function(a){var u,t,s,r,q,p
a=H.eL(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.r([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ek:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
eh:function(a,b){return new H.cs(a,b==null?null:b.method)},
dJ:function(a,b){var u=b==null,t=u?null:b.method
return new H.ce(a,t,u?null:b.receiver)},
X:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.dy(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aG(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dJ(H.b(u)+" (Error "+s+")",g))
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
if(i!=null)return f.$1(H.dJ(H.x(u),i))
else{i=q.D(u)
if(i!=null){i.method="call"
return f.$1(H.dJ(H.x(u),i))}else{i=p.D(u)
if(i==null){i=o.D(u)
if(i==null){i=n.D(u)
if(i==null){i=m.D(u)
if(i==null){i=l.D(u)
if(i==null){i=o.D(u)
if(i==null){i=k.D(u)
if(i==null){i=j.D(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.eh(H.x(u),i))}}return f.$1(new H.cI(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.bB()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ad(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.bB()
return a},
ap:function(a){var u
if(a==null)return new H.bG(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.bG(a)},
h0:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
h7:function(a,b,c,d,e,f){H.j(a,"$idE")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.cW("Unsupported number of arguments for wrapped closure"))},
b5:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.h7)
a.$identity=u
return u},
fh:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.cz().constructor.prototype):Object.create(new H.aH(m,m,m,m).constructor.prototype)
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
s=l}r=H.fd(d,e,f)
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
fd:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.h3,a)
if(typeof a=="function")if(b)return a
else{u=c?H.e7:H.dB
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
fe:function(a,b,c,d){var u=H.dB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
e9:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fg(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.fe(t,!r,u,b)
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
ff:function(a,b,c,d){var u=H.dB,t=H.e7
switch(b?-1:a){case 0:throw H.h(H.fz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fg:function(a,b){var u,t,s,r,q,p,o,n=$.aI
if(n==null)n=$.aI=H.bZ("self")
u=$.e6
if(u==null)u=$.e6=H.bZ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ff(s,!q,t,b)
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
dR:function(a,b,c,d,e,f,g){return H.fh(a,b,c,d,!!e,!!f,g)},
dB:function(a){return a.a},
e7:function(a){return a.c},
bZ:function(a){var u,t,s,r=new H.aH("self","target","receiver","name"),q=J.dG(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
dn:function(a){if(a==null)H.fU("boolean expression must not be null")
return a},
x:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a2(a,"String"))},
ez:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"double"))},
hE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"num"))},
hA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a2(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a2(a,"int"))},
eJ:function(a,b){throw H.h(H.a2(a,H.aG(H.x(b).substring(2))))},
he:function(a,b){throw H.h(H.e8(a,H.aG(H.x(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.eJ(a,b)},
eF:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else u=!0
if(u)return a
H.he(a,b)},
ha:function(a){if(a==null)return a
if(!!J.G(a).$iu)return a
throw H.h(H.a2(a,"List<dynamic>"))},
h9:function(a,b){var u
if(a==null)return a
u=J.G(a)
if(!!u.$iu)return a
if(u[b])return a
H.eJ(a,b)},
eA:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.W(u)]
else return a.$S()}return},
aC:function(a,b){var u
if(typeof a=="function")return!0
u=H.eA(J.G(a))
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
dS:function(a,b){if(a!=null&&!H.dq(a,b))H.aF(H.a2(a,H.bM(b)))
return a},
a2:function(a,b){return new H.cG("TypeError: "+P.aQ(a)+": type '"+H.b(H.eu(a))+"' is not a subtype of type '"+b+"'")},
e8:function(a,b){return new H.c_("CastError: "+P.aQ(a)+": type '"+H.b(H.eu(a))+"' is not a subtype of type '"+b+"'")},
eu:function(a){var u,t=J.G(a)
if(!!t.$iaM){u=H.eA(t)
if(u!=null)return H.bM(u)
return"Closure"}return H.by(a)},
fU:function(a){throw H.h(new H.cL(a))},
hi:function(a){throw H.h(new P.c4(a))},
fz:function(a){return new H.cv(a)},
eD:function(a){return v.getIsolateTag(a)},
r:function(a,b){a.$ti=b
return a},
ao:function(a){if(a==null)return
return a.$ti},
hD:function(a,b,c){return H.aE(a["$a"+H.b(c)],H.ao(b))},
dT:function(a,b,c,d){var u=H.aE(a["$a"+H.b(c)],H.ao(b))
return u==null?null:u[d]},
M:function(a,b,c){var u=H.aE(a["$a"+H.b(b)],H.ao(a))
return u==null?null:u[c]},
c:function(a,b){var u=H.ao(a)
return u==null?null:u[b]},
bM:function(a){return H.am(a,null)},
am:function(a,b){var u,t
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
return H.b(b[t])}if('func' in a)return H.fN(a,b)
if('futureOr' in a)return"FutureOr<"+H.am("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
fN:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.r([],[P.e])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.l(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.l(a0,m)
p=C.b.n(p,a0[m])
l=u[q]
if(l!=null&&l!==P.m)p+=" extends "+H.am(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.am(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.am(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.am(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.h_(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.x(n[g])
i=i+h+H.am(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
dQ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.am(p,c)}return"<"+u.i(0)+">"},
aE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dp:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ao(a)
t=J.G(a)
if(t[b]==null)return!1
return H.ex(H.aE(t[d],u),null,c,null)},
z:function(a,b,c,d){if(a==null)return a
if(H.dp(a,b,c,d))return a
throw H.h(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(2))+H.dQ(c,0,null),v.mangledGlobalNames)))},
ex:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.a_(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.a_(a[t],b,c[t],d))return!1
return!0},
hB:function(a,b,c){return a.apply(b,H.aE(J.G(b)["$a"+H.b(c)],H.ao(b)))},
eG:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="m"||a.name==="w"||a===-1||a===-2||H.eG(u)}return!1},
dq:function(a,b){var u,t
if(a==null)return b==null||b.name==="m"||b.name==="w"||b===-1||b===-2||H.eG(b)
if(b==null||b===-1||b.name==="m"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aC(a,b)}u=J.G(a).constructor
t=H.ao(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.a_(u,null,b,null)},
Q:function(a,b){if(a!=null&&!H.dq(a,b))throw H.h(H.e8(a,H.bM(b)))
return a},
n:function(a,b){if(a!=null&&!H.dq(a,b))throw H.h(H.a2(a,H.bM(b)))
return a},
a_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="m"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="m"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a_(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="w")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.a_("type" in a?a.type:l,b,s,d)
else if(H.a_(a,b,s,d))return!0
else{if(!('$i'+"aR" in t.prototype))return!1
r=t.prototype["$a"+"aR"]
q=H.aE(r,u?a.slice(1):l)
return H.a_(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.ep(a,b,c,d)
if('func' in a)return c.name==="dE"
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
return H.hd(h,b,g,d)},
hd:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.a_(c[s],d,a[s],b))return!1}return!0},
hC:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hb:function(a){var u,t,s,r,q=H.x($.eE.$1(a)),p=$.dr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dw[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.x($.ew.$2(a,q))
if(q!=null){p=$.dr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dw[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dx(u)
$.dr[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.dw[q]=u
return u}if(s==="-"){r=H.dx(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.eI(a,u)
if(s==="*")throw H.h(P.el(q))
if(v.leafTags[q]===true){r=H.dx(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.eI(a,u)},
eI:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.dV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dx:function(a){return J.dV(a,!1,null,!!a.$ibp)},
hc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dx(u)
else return J.dV(u,c,null,null)},
h5:function(){if(!0===$.dU)return
$.dU=!0
H.h6()},
h6:function(){var u,t,s,r,q,p,o,n
$.dr=Object.create(null)
$.dw=Object.create(null)
H.h4()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.eK.$1(q)
if(p!=null){o=H.hc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
h4:function(){var u,t,s,r,q,p,o=C.an()
o=H.az(C.ao,H.az(C.ap,H.az(C.V,H.az(C.V,H.az(C.aq,H.az(C.ar,H.az(C.as(C.U),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.eE=new H.dt(r)
$.ew=new H.du(q)
$.eK=new H.dv(p)},
az:function(a,b){return a(b)||b},
dW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
fZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
eL:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hg:function(a,b,c){var u=H.hh(a,b,c)
return u},
hh:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.eL(b),'g'),H.fZ(c))},
cE:function cE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cs:function cs(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.a=a},
dy:function dy(a){this.a=a},
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
cv:function cv(a){this.a=a},
cL:function cL(a){this.a=a},
ab:function ab(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cd:function cd(a){this.a=a},
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function cm(a,b){this.a=a
this.$ti=b},
cn:function cn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
eo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.aB(b,a))},
bw:function bw(){},
bu:function bu(){},
bv:function bv(){},
bt:function bt(){},
b0:function b0(){},
b1:function b1(){},
h_:function(a){return J.fm(a?Object.keys(a):[],null)},
hj:function(a){return v.mangledGlobalNames[a]}},J={
dV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bL:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.dU==null){H.h5()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.el("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.dX()]
if(r!=null)return r
r=H.hb(a)
if(r!=null)return r
if(typeof a=="function")return C.au
u=Object.getPrototypeOf(a)
if(u==null)return C.a3
if(u===Object.prototype)return C.a3
if(typeof s=="function"){Object.defineProperty(s,$.dX(),{value:C.J,enumerable:false,writable:true,configurable:true})
return C.J}return C.J},
fm:function(a,b){return J.dG(H.r(a,[b]))},
dG:function(a){a.fixed$length=Array
return a},
eb:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fn:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.Y(a,b)
if(t!==32&&t!==13&&!J.eb(t))break;++b}return b},
fo:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.aK(a,u)
if(t!==32&&t!==13&&!J.eb(t))break}return b},
G:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bo.prototype
return J.bn.prototype}if(typeof a=="string")return J.ag.prototype
if(a==null)return J.cc.prototype
if(typeof a=="boolean")return J.cb.prototype
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof P.m)return a
return J.bL(a)},
h1:function(a){if(typeof a=="number")return J.at.prototype
if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof P.m)return a
return J.bL(a)},
an:function(a){if(typeof a=="string")return J.ag.prototype
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
eB:function(a){if(typeof a=="number")return J.at.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.ak.prototype
return a},
eC:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.ak.prototype
return a},
ds:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof P.m)return a
return J.bL(a)},
h2:function(a){if(a==null)return a
if(!(a instanceof P.m))return J.ak.prototype
return a},
eZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.h1(a).n(a,b)},
b7:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).N(a,b)},
C:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.an(a).h(a,b)},
dZ:function(a,b,c){return J.aD(a).j(a,b,c)},
f_:function(a,b,c,d){return J.ds(a).b7(a,b,c,d)},
f0:function(a,b,c,d){return J.ds(a).bh(a,b,c,d)},
f1:function(a,b,c){return J.ds(a).bi(a,b,c)},
bN:function(a,b,c){return J.ds(a).bj(a,b,c)},
f2:function(a,b){return J.h2(a).w(a,b)},
e_:function(a,b){return J.aD(a).H(a,b)},
f3:function(a,b,c){return J.aD(a).J(a,b,c)},
f4:function(a,b){return J.an(a).S(a,b)},
f5:function(a,b){return J.aD(a).F(a,b)},
f6:function(a){return J.aD(a).ga3(a)},
e0:function(a){return J.G(a).gq(a)},
e1:function(a){return J.an(a).gt(a)},
f7:function(a){return J.an(a).gI(a)},
bO:function(a){return J.aD(a).gu(a)},
f8:function(a){return J.aD(a).ga6(a)},
R:function(a){return J.an(a).gk(a)},
aq:function(a){return J.eB(a).U(a)},
b8:function(a){return J.G(a).i(a)},
f9:function(a,b){return J.eB(a).bY(a,b)},
fa:function(a){return J.eC(a).aU(a)},
O:function O(){},
cb:function cb(){},
cc:function cc(){},
bq:function bq(){},
ct:function ct(){},
ak:function ak(){},
aa:function aa(){},
a9:function a9(a){this.$ti=a},
dH:function dH(a){this.$ti=a},
b9:function b9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(){},
bo:function bo(){},
bn:function bn(){},
ag:function ag(){}},P={
fF:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.fV()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b5(new P.cN(s),1)).observe(u,{childList:true})
return new P.cM(s,u,t)}else if(self.setImmediate!=null)return P.fW()
return P.fX()},
fG:function(a){self.scheduleImmediate(H.b5(new P.cO(H.k(a,{func:1,ret:-1})),0))},
fH:function(a){self.setImmediate(H.b5(new P.cP(H.k(a,{func:1,ret:-1})),0))},
fI:function(a){H.k(a,{func:1,ret:-1})
P.fL(0,a)},
fL:function(a,b){var u=new P.dh()
u.b6(a,b)
return u},
fJ:function(a,b){var u,t,s
b.a=1
try{a.aT(new P.cY(b),new P.cZ(b),null)}catch(s){u=H.X(s)
t=H.ap(s)
P.hf(new P.d_(b,u,t))}},
en:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iU")
if(u>=4){t=b.ah()
b.a=a.a
b.c=a.c
P.b_(b,t)}else{t=H.j(b.c,"$ia7")
b.a=2
b.c=a
a.aF(t)}},
b_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iK")
P.b4(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b_(h.a,b)}g=h.a
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
P.b4(i,i,g.b,q.a,q.b)
return}l=$.y
if(l!==n)$.y=n
else l=i
g=b.c
if((g&15)===8)new P.d3(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.d2(u,b,q).$0()}else if((g&2)!==0)new P.d1(h,u,b).$0()
if(l!=null)$.y=l
g=u.b
if(!!J.G(g).$iaR){if(g.a>=4){k=H.j(o.c,"$ia7")
o.c=null
b=o.a1(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.en(g,o)
return}}j=b.b
k=H.j(j.c,"$ia7")
j.c=null
b=j.a1(k)
g=u.a
p=u.b
if(!g){H.n(p,H.c(j,0))
j.a=4
j.c=p}else{H.j(p,"$iK")
j.a=8
j.c=p}h.a=j
g=j}},
fR:function(a,b){if(H.aC(a,{func:1,args:[P.m,P.A]}))return b.aQ(a,null,P.m,P.A)
if(H.aC(a,{func:1,args:[P.m]}))return H.k(a,{func:1,ret:null,args:[P.m]})
throw H.h(P.e2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
fP:function(){var u,t
for(;u=$.ay,u!=null;){$.b3=null
t=u.b
$.ay=t
if(t==null)$.b2=null
u.a.$0()}},
fT:function(){$.dO=!0
try{P.fP()}finally{$.b3=null
$.dO=!1
if($.ay!=null)$.dY().$1(P.ey())}},
et:function(a){var u=new P.bD(a)
if($.ay==null){$.ay=$.b2=u
if(!$.dO)$.dY().$1(P.ey())}else $.b2=$.b2.b=u},
fS:function(a){var u,t,s=$.ay
if(s==null){P.et(a)
$.b3=$.b2
return}u=new P.bD(a)
t=$.b3
if(t==null){u.b=s
$.ay=$.b3=u}else{u.b=t.b
$.b3=t.b=u
if(u.b==null)$.b2=u}},
hf:function(a){var u=null,t=$.y
if(C.c===t){P.dm(u,u,C.c,a)
return}P.dm(u,u,t,H.k(t.aJ(a),{func:1,ret:-1}))},
b4:function(a,b,c,d,e){var u={}
u.a=d
P.fS(new P.dl(u,e))},
eq:function(a,b,c,d,e){var u,t=$.y
if(t===c)return d.$0()
$.y=c
u=t
try{t=d.$0()
return t}finally{$.y=u}},
es:function(a,b,c,d,e,f,g){var u,t=$.y
if(t===c)return d.$1(e)
$.y=c
u=t
try{t=d.$1(e)
return t}finally{$.y=u}},
er:function(a,b,c,d,e,f,g,h,i){var u,t=$.y
if(t===c)return d.$2(e,f)
$.y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.y=u}},
dm:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.aJ(d):c.bw(d,-1)
P.et(d)},
cN:function cN(a){this.a=a},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
dh:function dh(){},
di:function di(a,b){this.a=a
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
aj:function aj(){},
cB:function cB(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
aV:function aV(){},
a5:function a5(){},
K:function K(a,b){this.a=a
this.b=b},
dj:function dj(){},
dl:function dl(a,b){this.a=a
this.b=b},
dd:function dd(){},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b){this.a=a
this.b=b},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function(a,b){return new H.ab([a,b])},
v:function(a,b,c){return H.z(H.h0(a,new H.ab([b,c])),"$ief",[b,c],"$aef")},
fq:function(a,b){return new H.ab([a,b])},
fl:function(a,b,c){var u,t
if(P.dP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.r([],[P.e])
C.a.l($.P,a)
try{P.fO(a,u)}finally{if(0>=$.P.length)return H.l($.P,-1)
$.P.pop()}t=P.ej(b,H.h9(u,"$iI"),", ")+c
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
fO:function(a,b){var u,t,s,r,q,p,o,n=a.gu(a),m=0,l=0
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
ac:function(a,b,c){var u=P.fp(b,c)
a.A(0,new P.co(u,b,c))
return u},
eg:function(a){var u,t={}
if(P.dP(a))return"{...}"
u=new P.aw("")
try{C.a.l($.P,a)
u.a+="{"
t.a=!0
a.A(0,new P.cr(t,u))
u.a+="}"}finally{if(0>=$.P.length)return H.l($.P,-1)
$.P.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(){},
cq:function cq(){},
cr:function cr(a,b){this.a=a
this.b=b},
Y:function Y(){},
fQ:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.h(H.bK(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.X(s)
r=P.dD(String(t),null)
throw H.h(r)}r=P.dk(u)
return r},
dk:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.d6(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.dk(a[u])
return a},
ec:function(a,b,c){return new P.br(a,b)},
fM:function(a){return a.c9()},
fK:function(a,b,c){var u,t=new P.aw(""),s=new P.d9(t,[],P.fY())
s.a9(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
d6:function d6(a,b){this.a=a
this.b=b
this.c=null},
d8:function d8(a){this.a=a},
d7:function d7(a){this.a=a},
bg:function bg(){},
a8:function a8(){},
br:function br(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.a=a
this.b=b},
cf:function cf(){},
ci:function ci(a){this.b=a},
ch:function ch(a){this.a=a},
da:function da(){},
db:function db(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){this.c=a
this.a=b
this.b=c},
q:function(a){var u=H.fx(a,null)
if(u!=null)return u
throw H.h(P.dD(a,null))},
V:function(a){var u=H.fw(a)
if(u!=null)return u
throw H.h(P.dD("Invalid double",a))},
fk:function(a){if(a instanceof H.aM)return a.i(0)
return"Instance of '"+H.b(H.by(a))+"'"},
fr:function(a,b,c){var u,t=[c],s=H.r([],t)
for(u=J.bO(a);u.m();)C.a.l(s,H.n(u.gp(),c))
if(b)return s
return H.z(J.dG(s),"$iu",t,"$au")},
ej:function(a,b,c){var u=J.bO(b)
if(!u.m())return a
if(c.length===0){do a+=H.b(u.gp())
while(u.m())}else{a+=H.b(u.gp())
for(;u.m();)a=a+c+H.b(u.gp())}return a},
aQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fk(a)},
e2:function(a,b,c){return new P.ad(!0,a,b,c)},
cu:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
fy:function(a,b){if(typeof a!=="number")return a.V()
if(a<0)throw H.h(P.ai(a,0,null,b,null))},
dF:function(a,b,c,d,e){var u=H.W(e==null?J.R(b):e)
return new P.c9(u,!0,a,c,"Index out of range")},
al:function(a){return new P.cJ(a)},
el:function(a){return new P.cH(a)},
fC:function(a){return new P.bC(a)},
bi:function(a){return new P.c2(a)},
dD:function(a,b){return new P.c8(a,b)},
fs:function(a,b,c,d,e){return new H.aK(a,[b,c,d,e])},
aA:function aA(){},
B:function B(){},
as:function as(){},
bR:function bR(){},
bx:function bx(){},
ad:function ad(a,b,c,d){var _=this
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
u:function u(){},
t:function t(){},
w:function w(){},
b6:function b6(){},
m:function m(){},
A:function A(){},
e:function e(){},
aw:function aw(a){this.a=a},
d5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bA:function(a,b,c,d,e){var u=H.n(c<0?-c*0:c,e)
return new P.L(a,b,u,H.n(d<0?-d*0:d,e),[e])},
dc:function dc(){},
L:function L(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function(){var u=H.j(C.e.E(document,"http://www.w3.org/2000/svg","svg"),"$if")
u.setAttribute("version","1.1")
return H.j(u,"$iax")},
aL:function aL(){},
a4:function a4(){},
S:function S(){},
ah:function ah(){},
av:function av(){},
Z:function Z(){},
f:function f(){},
ax:function ax(){},
aX:function aX(){},
a1:function a1(){},
aY:function aY(){},
bk:function bk(){}},W={
dM:function(a,b,c,d,e){var u=c==null?null:W.ev(new W.cV(c),W.a)
u=new W.cU(a,b,u,!1,[e])
u.aH()
return u},
ev:function(a,b){var u=$.y
if(u===C.c)return a
return u.bx(a,b)},
d:function d(){},
bP:function bP(){},
bQ:function bQ(){},
ae:function ae(){},
aN:function aN(){},
c3:function c3(){},
ar:function ar(){},
aO:function aO(){},
c5:function c5(){},
aP:function aP(){},
a:function a(){},
af:function af(){},
c7:function c7(){},
bl:function bl(){},
J:function J(){},
cx:function cx(){},
aZ:function aZ(){},
H:function H(){},
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
fi:function(a1,a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=H.r(o,[P.N])
for(m=0;m<s;++m)C.a.j(j,m,u+m)
return new F.bh(p,j)}o=a5*2
j=F.fj(p,o,u)
i=new Float64Array(o)
for(h=0,m=0;o=j.length,m<o;m=f){g=j[m]-u
f=m+2
n=o-1
l=f>n
if(l&&m+1>n)e=C.a.ga6(j)
else if(l){n=m+1
if(n>=o)return H.l(j,n)
e=j[n]-u}else e=j[f]-u
d=new Float64Array(e-g)
for(o=d.length,c=g;c<e;++c){n=c-g
if(c<0||c>=s)return H.l(p,c)
l=p[c]
if(n<0||n>=o)return H.l(d,n)
d[n]=l}b=E.fb(d)
o=b.length
if(0>=o)return H.l(b,0)
C.m.j(i,h,b[0]);++h
if(1>=b.length)return H.l(b,1)
C.m.j(i,h,b[1]);++h}for(s=o-1,a=1,m=0;m<s;m=f){f=m+1
a0=j[f]-j[m]
if(a0>a)a=a0}return new F.bh(i,j)},
fj:function(a,b,c){var u,t,s,r=H.r([],[P.N]),q=a.length,p=q/b
for(u=0;u<b;++u){t=C.l.U(u*p)
C.a.l(r,t+c)
if(t>=q)break}s=r.length
q=q-1+c
if(s<b)C.a.l(r,q)
else C.a.j(r,s-1,q)
return r},
bh:function bh(a,b){this.a=a
this.d=b}},M={
fc:function(a,b,c,d,e,f,g,h,i,j,k){var u=new M.ba(e,i)
u.au(null,a,b,c,d,null,null,!1,e,f,g,h,i,new M.bS(j).$0(),k,{})
return u},
e5:function(a,b){var u,t,s
if(Math.abs(a)<0.000001)return 0.000001
u=C.k.al(Math.log(a)/2.302585092994046)
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
q=C.k.al(t/r)*r
p=C.k.bz(u/r)
o=Math.max(-C.k.al(Math.log(r)/2.302585092994046),0)
o=o
n=H.r([],[P.e])
for(p=p*r+0.5*r,m=q;m<p;m+=r)C.a.l(n,C.l.bZ(m,o))
return n},
ba:function ba(a,b){var _=this
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
u.sbv(0,P.ac($.fE,M.p,P.e))
if(e!=null)u.b.w(0,e)
u.by()
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
_.db=_.cy=null},D:function D(a){this.b=a},
ei:function(a,b,c){var u
if(c!=null&&b!=null&&Math.abs(b)>1e-8){if(typeof c!=="number")return H.i(c)
if(typeof b!=="number")return H.i(b)
u=a*c/b}else u=a
return u}},V={
fu:function(a,b,c,d,e,f,g,h,i){var u=new V.au(H.r([],[P.a4]),d,e,b,c,a,f)
u.b4(a,b,c,d,e,f,g,h,i)
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
_.K=_.bH=_.y2=_.y1=_.x2=null
_.c8=g
_.ak=_.a2=_.B=_.L=_.aM=_.aL=null},
o:function o(a){this.b=a}},X={
fA:function(a,b,c,d,e,f,g){var u=new X.cy(b,a,c,f,d,e,H.r(["blue","red","magenta","green","orange","cyan","lightgreen","crimson","darkred","darkgreen"],[P.e]),g)
u.b5(a,b,c,d,e,f,g)
return u},
fB:function(a,b){var u,t,s,r,q,p,o,n=null,m="legend",l=D.D,k=P.e,j=P.ac($.ee,l,k)
j.w(0,a)
if(j.h(0,C.y)==null)return
if(j.h(0,C.D)!=null){u=H.z(J.e_(C.x.aj(0,j.h(0,C.D)),k),"$iu",[k],"$au")
t=J.R(u.a)}else{u=n
t=0}s=new H.ab([k,[P.t,D.D,P.e]])
r=P.aW()
q=new D.cj(s,new H.ab([k,P.a1]),new H.ab([k,P.Z]),r,t)
q.cy=t
s.j(0,m,P.ac($.ee,l,k))
l=j.gI(j)
if(l)J.f2(s.h(0,m),j)
r.setAttribute("x",H.x(J.C(s.h(0,m),C.F)))
r.setAttribute("y",H.x(J.C(s.h(0,m),C.G)))
q.r=P.q(J.C(s.h(0,m),C.a0))
l=H.x(J.C(s.h(0,m),C.y))
q.db=l
if(l!=null&&l.length!==0)q.aN("TOP_TITLE_ID",l,n)
p=b!=null?P.fr(C.a.b_(b,0,t),!0,k):n
for(o=t-1,l=H.c(u,1),k=p==null;o>=0;--o){s=o+1
if(k)q.at(""+s,H.Q(J.C(u.a,o),l),n)
else{s=""+s
r=H.Q(J.C(u.a,o),l)
if(o>=p.length)return H.l(p,o)
q.at(s,r,p[o])}}return q},
cy:function cy(a,b,c,d,e,f,g,h){var _=this
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
fD:function(a){if(a==="true")return!0
return!1},
ed:function(a){var u=P.e
return H.z(J.f3(C.x.aj(0,a),u,u),"$it",[u,u],"$at")},
E:function(a,b){b.A(0,new B.cw(a))},
cw:function cw(a){this.a=a}},T={
dK:function(a,b,c,d){var u=new T.cp(4*Math.log(2),b,c,d,a)
u.b3(a,b,c,d,null,null)
return u},
cp:function cp(a,b,c,d,e){var _=this
_.e=a
_.r=b
_.x=c
_.y=d
_.z=e
_.Q=null
_.ch=0
_.cy=_.cx=null},
ck:function ck(){}},E={
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
fb:function(a){var u,t,s,r,q,p,o
for(u=a.length,t=-1,s=-17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q>s){s=q
t=r}}for(p=-1,o=17976931348623157e292,r=0;r<u;++r){q=a[r]
if(q<o){o=q
p=r}}u=[P.B]
if(p<=t)return H.r([o,s],u)
else return H.r([s,o],u)}},U={
eH:function(){var u,t,s,r=[100,100,100],q=[120,120,120],p=[15,15,15],o=new Float64Array(200),n=new Float64Array(200),m=new Float64Array(200),l=[P.B],k=T.dK(r[0],H.r([q[0]],l),H.r([p[0]],l),H.r([0],l)),j=r[1],i=q[1],h=H.r([i],l),g=p[1],f=T.dK(j,h,H.r([g],l),H.r([1],l)),e=T.dK(j,H.r([i],l),H.r([g],l),H.r([0.5],l))
for(j=o.length,i=n.length,h=m.length,u=0;u<200;++u){g=k.aa(H.r([u],l))
if(u>=j)return H.l(o,u)
o[u]=g
g=f.aa(H.r([u],l))
if(u>=i)return H.l(n,u)
n[u]=g
g=e.aa(H.r([u],l))
if(u>=h)return H.l(m,u)
m[u]=g}l=H.r([o,n,m],[P.bk])
j=document
t=H.eF(j.querySelector("#app_div"),"$iar")
s=H.eF(j.querySelector("#plot_div"),"$iar")
j=s.style
i=H.b(t.clientWidth)+"px"
j.width=i
i=H.b(t.clientHeight)+"px"
j.height=i
j=V.o
i=P.e
h=M.p
X.fA(l,s,H.r([P.v([C.h,"0.8"],j,i),P.v([C.h,"0.8"],j,i),P.v([C.h,"0.8"],j,i)],[[P.t,V.o,P.e]]),P.v([C.o,"0",C.p,"200",C.w,"Number of points"],h,i),P.v([C.w,"Function value"],h,i),P.v([C.y,"Lorentz / Gauss line shapes",C.D,C.x.bF(H.r(["Pure Lorentzian"," Pure Gaussian"," Mixed 50% / 50%"],[i])),C.F,"45",C.G,"15"],D.D,i),null)}}
var w=[C,H,J,P,W,F,M,S,D,V,X,B,T,E,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dI.prototype={}
J.O.prototype={
N:function(a,b){return a===b},
gq:function(a){return H.aU(a)},
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
J.ct.prototype={}
J.ak.prototype={}
J.aa.prototype={
i:function(a){var u=a[$.eO()]
if(u==null)return this.b2(a)
return"JavaScript function for "+H.b(J.b8(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$idE:1}
J.a9.prototype={
H:function(a,b){return new H.aJ(a,[H.c(a,0),b])},
l:function(a,b){H.n(b,H.c(a,0))
if(!!a.fixed$length)H.aF(P.al("add"))
a.push(b)},
F:function(a,b){H.W(b)
if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
b_:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.ai(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.ai(c,b,a.length,"end",null))
if(b===c)return H.r([],[H.c(a,0)])
return H.r(a.slice(b,c),[H.c(a,0)])},
ga3:function(a){if(a.length>0)return a[0]
throw H.h(H.ca())},
ga6:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.ca())},
gt:function(a){return a.length===0},
gI:function(a){return a.length!==0},
i:function(a){return P.ea(a,"[","]")},
gu:function(a){return new J.b9(a,a.length,[H.c(a,0)])},
gq:function(a){return H.aU(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.aF(P.al("set length"))
if(b<0)throw H.h(P.ai(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.h(H.aB(a,b))
return a[b]},
j:function(a,b,c){H.n(c,H.c(a,0))
if(!!a.immutable$list)H.aF(P.al("indexed set"))
if(b>=a.length||b<0)throw H.h(H.aB(a,b))
a[b]=c},
$iF:1,
$iI:1,
$iu:1}
J.dH.prototype={}
J.b9.prototype={
gp:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.eM(s))
u=t.c
if(u>=r){t.saA(null)
return!1}t.saA(s[u]);++t.c
return!0},
saA:function(a){this.d=H.n(a,H.c(this,0))},
$ibm:1}
J.at.prototype={
gaO:function(a){return a===0?1/a<0:a<0},
bz:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.h(P.al(""+a+".ceil()"))},
al:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.al(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.al(""+a+".round()"))},
bZ:function(a,b){var u
if(b<0||b>20)throw H.h(P.ai(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaO(a))return"-"+u
return u},
bY:function(a,b){var u
if(b>20)throw H.h(P.ai(b,0,20,"fractionDigits",null))
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
R:function(a,b){return(a|0)===a?a/b|0:this.bl(a,b)},
bl:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.al("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
aG:function(a,b){var u
if(a>0)u=this.bk(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
bk:function(a,b){return b>31?0:a>>>b},
$iB:1,
$ib6:1}
J.bo.prototype={$iN:1}
J.bn.prototype={}
J.ag.prototype={
aK:function(a,b){if(b<0)throw H.h(H.aB(a,b))
if(b>=a.length)H.aF(H.aB(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(b>=a.length)throw H.h(H.aB(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.x(b)
if(typeof b!=="string")throw H.h(P.e2(b,null,null))
return a+b},
O:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cu(b,null))
if(b>c)throw H.h(P.cu(b,null))
if(c>a.length)throw H.h(P.cu(c,null))
return a.substring(b,c)},
b0:function(a,b){return this.O(a,b,null)},
aU:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.Y(r,0)===133){u=J.fn(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aK(r,t)===133?J.fo(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
bA:function(a,b,c){if(c>a.length)throw H.h(P.ai(c,0,a.length,null,null))
return H.dW(a,b,c)},
S:function(a,b){return this.bA(a,b,0)},
i:function(a){return a},
gq:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ift:1,
$ie:1}
H.bd.prototype={
a7:function(a,b,c,d){var u,t
H.k(a,{func:1,ret:-1,args:[H.c(this,1)]})
u=this.a.aP(null,!0,H.k(c,{func:1,ret:-1}))
t=new H.be(u,$.y,this.$ti)
u.am(t.gbe())
t.am(a)
t.an(0,d)
return t},
aP:function(a,b,c){return this.a7(a,b,c,null)},
H:function(a,b){return new H.bd(this.a,[H.c(this,0),b])},
$aaj:function(a,b){return[b]}}
H.be.prototype={
am:function(a){var u=H.c(this,1)
H.k(a,{func:1,ret:-1,args:[u]})
this.sbc(a==null?null:H.k(a,{func:1,ret:null,args:[u]}))},
an:function(a,b){var u,t=this
t.a.an(0,b)
if(b==null)t.d=null
else{u=P.m
if(H.aC(b,{func:1,args:[P.w,P.w]}))t.d=t.b.aQ(H.k(b,{func:1,args:[P.m,P.A]}),null,u,P.A)
else t.d=H.k(H.k(b,{func:1,args:[P.m]}),{func:1,ret:null,args:[u]})}},
bf:function(a){var u,t,s,r,q,p,o,n,m=this,l=null
H.n(a,H.c(m,0))
r=m.c
if(r==null)return
u=null
try{u=H.Q(a,H.c(m,1))}catch(q){t=H.X(q)
s=H.ap(q)
r=m.d
if(r==null)P.b4(l,l,m.b,t,H.j(s,"$iA"))
else{p=H.aC(r,{func:1,args:[P.w,P.w]})
o=m.b
n=m.d
if(p)o.bV(H.k(n,{func:1,ret:-1,args:[,P.A]}),t,s,l,P.A)
else o.ap(H.k(n,{func:1,ret:-1,args:[,]}),t,l)}return}m.b.ap(r,u,H.c(m,1))},
sbc:function(a){this.c=H.k(a,{func:1,ret:-1,args:[H.c(this,1)]})},
$iaV:1,
$aaV:function(a,b){return[b]}}
H.bf.prototype={
J:function(a,b,c){return new H.bf(this.a,[H.c(this,0),H.c(this,1),b,c])},
$acA:function(a,b,c,d){return[c,d]},
$aa5:function(a,b,c,d){return[c,d]}}
H.bb.prototype={
J:function(a,b,c){return new H.bb(this.a,[H.c(this,0),H.c(this,1),b,c])},
$acA:function(a,b,c,d){return[c,d]},
$aa5:function(a,b,c,d){return[c,d]},
$aa8:function(a,b,c,d){return[c,d]}}
H.cQ.prototype={
gu:function(a){return new H.c0(J.bO(this.gG()),this.$ti)},
gk:function(a){return J.R(this.gG())},
gt:function(a){return J.e1(this.gG())},
gI:function(a){return J.f7(this.gG())},
F:function(a,b){H.W(b)
return H.Q(J.f5(this.gG(),b),H.c(this,1))},
i:function(a){return J.b8(this.gG())},
$aI:function(a,b){return[b]}}
H.c0.prototype={
m:function(){return this.a.m()},
gp:function(){return H.Q(this.a.gp(),H.c(this,1))},
$ibm:1,
$abm:function(a,b){return[b]}}
H.bc.prototype={
H:function(a,b){return H.dC(this.a,H.c(this,0),b)},
gG:function(){return this.a}}
H.cS.prototype={$iF:1,
$aF:function(a,b){return[b]}}
H.cR.prototype={
h:function(a,b){return H.Q(J.C(this.a,b),H.c(this,1))},
$iF:1,
$aF:function(a,b){return[b]},
$aa0:function(a,b){return[b]},
$iu:1,
$au:function(a,b){return[b]}}
H.aJ.prototype={
H:function(a,b){return new H.aJ(this.a,[H.c(this,0),b])},
gG:function(){return this.a}}
H.aK.prototype={
J:function(a,b,c){return new H.aK(this.a,[H.c(this,0),H.c(this,1),b,c])},
h:function(a,b){return H.Q(this.a.h(0,b),H.c(this,3))},
j:function(a,b,c){var u=this
H.n(b,H.c(u,2))
H.n(c,H.c(u,3))
u.a.j(0,H.Q(b,H.c(u,0)),H.Q(c,H.c(u,1)))},
w:function(a,b){var u=this,t=H.c(u,2),s=H.c(u,3)
u.a.w(0,new H.aK(H.z(b,"$it",[t,s],"$at"),[t,s,H.c(u,0),H.c(u,1)]))},
A:function(a,b){var u=this
u.a.A(0,new H.c1(u,H.k(b,{func:1,ret:-1,args:[H.c(u,2),H.c(u,3)]})))},
gC:function(){return H.dC(this.a.gC(),H.c(this,0),H.c(this,2))},
gk:function(a){var u=this.a
return u.gk(u)},
gt:function(a){var u=this.a
return u.gt(u)},
$aY:function(a,b,c,d){return[c,d]},
$at:function(a,b,c,d){return[c,d]}}
H.c1.prototype={
$2:function(a,b){var u=this.a
H.n(a,H.c(u,0))
H.n(b,H.c(u,1))
this.b.$2(H.Q(a,H.c(u,2)),H.Q(b,H.c(u,3)))},
$S:function(){var u=this.a
return{func:1,ret:P.w,args:[H.c(u,0),H.c(u,1)]}}}
H.F.prototype={}
H.aT.prototype={
gu:function(a){var u=this
return new H.bs(u,u.gk(u),[H.M(u,"aT",0)])},
gt:function(a){return this.gk(this)===0}}
H.bs.prototype={
gp:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=J.an(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.bi(s))
u=t.c
if(u>=q){t.sav(null)
return!1}t.sav(r.F(s,u));++t.c
return!0},
sav:function(a){this.d=H.n(a,H.c(this,0))},
$ibm:1}
H.bj.prototype={}
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
H.cs.prototype={
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
H.dy.prototype={
$1:function(a){if(!!J.G(a).$ias)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.bG.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iA:1}
H.aM.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$idE:1,
gc7:function(){return this},
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
if(t==null)u=H.aU(this.a)
else u=typeof t!=="object"?J.e0(t):H.aU(t)
return(u^H.aU(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.by(u))+"'")}}
H.cG.prototype={
i:function(a){return this.a}}
H.c_.prototype={
i:function(a){return this.a}}
H.cv.prototype={
i:function(a){return"RuntimeError: "+H.b(this.a)}}
H.cL.prototype={
i:function(a){return"Assertion failed: "+P.aQ(this.a)}}
H.ab.prototype={
gk:function(a){return this.a},
gt:function(a){return this.a===0},
gI:function(a){return!this.gt(this)},
gC:function(){return new H.cm(this,[H.c(this,0)])},
T:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.bb(u,a)}else{t=this.bJ(a)
return t}},
bJ:function(a){var u=this,t=u.d
if(t==null)return!1
return u.a5(u.a_(t,u.a4(a)),a)>=0},
w:function(a,b){H.z(b,"$it",this.$ti,"$at").A(0,new H.cd(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a0(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a0(r,b)
s=t==null?null:t.b
return s}else return q.bK(b)},
bK:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.a_(r,s.a4(a))
t=s.a5(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
H.n(b,H.c(s,0))
H.n(c,H.c(s,1))
if(typeof b==="string"){u=s.b
s.ax(u==null?s.b=s.af():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.ax(t==null?s.c=s.af():t,b,c)}else s.bM(b,c)},
bM:function(a,b){var u,t,s,r,q=this
H.n(a,H.c(q,0))
H.n(b,H.c(q,1))
u=q.d
if(u==null)u=q.d=q.af()
t=q.a4(a)
s=q.a_(u,t)
if(s==null)q.ai(u,t,[q.ag(a,b)])
else{r=q.a5(s,a)
if(r>=0)s[r].b=b
else s.push(q.ag(a,b))}},
aR:function(a,b){var u=this.bL(b)
return u},
bL:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=q.a4(a)
t=q.a_(p,u)
s=q.a5(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bm(r)
if(t.length===0)q.aB(p,u)
return r.b},
A:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.c(s,0),H.c(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bi(s))
u=u.c}},
ax:function(a,b,c){var u,t=this
H.n(b,H.c(t,0))
H.n(c,H.c(t,1))
u=t.a0(a,b)
if(u==null)t.ai(a,b,t.ag(b,c))
else u.b=c},
aD:function(){this.r=this.r+1&67108863},
ag:function(a,b){var u,t=this,s=new H.cl(H.n(a,H.c(t,0)),H.n(b,H.c(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aD()
return s},
bm:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aD()},
a4:function(a){return J.e0(a)&0x3ffffff},
a5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.b7(a[t].a,b))return t
return-1},
i:function(a){return P.eg(this)},
a0:function(a,b){return a[b]},
a_:function(a,b){return a[b]},
ai:function(a,b,c){a[b]=c},
aB:function(a,b){delete a[b]},
bb:function(a,b){return this.a0(a,b)!=null},
af:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ai(t,u,t)
this.aB(t,u)
return t},
$ief:1}
H.cd.prototype={
$2:function(a,b){var u=this.a
u.j(0,H.n(a,H.c(u,0)),H.n(b,H.c(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.w,args:[H.c(u,0),H.c(u,1)]}}}
H.cl.prototype={}
H.cm.prototype={
gk:function(a){return this.a.a},
gt:function(a){return this.a.a===0},
gu:function(a){var u=this.a,t=new H.cn(u,u.r,this.$ti)
t.c=u.e
return t}}
H.cn.prototype={
gp:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bi(t))
else{t=u.c
if(t==null){u.saw(null)
return!1}else{u.saw(t.a)
u.c=u.c.c
return!0}}},
saw:function(a){this.d=H.n(a,H.c(this,0))},
$ibm:1}
H.dt.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.du.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dv.prototype={
$1:function(a){return this.a(H.x(a))},
$S:10}
H.bw.prototype={}
H.bu.prototype={
gk:function(a){return a.length},
$ibp:1,
$abp:function(){}}
H.bv.prototype={
h:function(a,b){H.eo(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ez(c)
H.eo(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.B]},
$abj:function(){return[P.B]},
$aa0:function(){return[P.B]},
$iI:1,
$aI:function(){return[P.B]},
$iu:1,
$au:function(){return[P.B]}}
H.bt.prototype={$ibk:1}
H.b0.prototype={}
H.b1.prototype={}
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
P.dh.prototype={
b6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b5(new P.di(this,b),0),a)
else throw H.h(P.al("`setTimeout()` not found."))}}
P.di.prototype={
$0:function(){this.b.$0()},
$S:1}
P.a7.prototype={
bN:function(a){if((this.c&15)!==6)return!0
return this.b.b.ao(H.k(this.d,{func:1,ret:P.aA,args:[P.m]}),a.a,P.aA,P.m)},
bI:function(a){var u=this.e,t=P.m,s={futureOr:1,type:H.c(this,1)},r=this.b.b
if(H.aC(u,{func:1,args:[P.m,P.A]}))return H.dS(r.bU(u,a.a,a.b,null,t,P.A),s)
else return H.dS(r.ao(H.k(u,{func:1,args:[P.m]}),a.a,null,t),s)}}
P.U.prototype={
aT:function(a,b,c){var u,t,s,r=H.c(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.y
if(u!==C.c){H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.fR(b,u)}t=new P.U($.y,[c])
s=b==null?1:3
this.ay(new P.a7(t,s,a,b,[r,c]))
return t},
bX:function(a,b){return this.aT(a,null,b)},
ay:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ia7")
t.c=a}else{if(s===2){u=H.j(t.c,"$iU")
s=u.a
if(s<4){u.ay(a)
return}t.a=s
t.c=u.c}P.dm(null,null,t.b,H.k(new P.cX(t,a),{func:1,ret:-1}))}},
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
p.c=q.c}o.a=p.a1(a)
P.dm(null,null,p.b,H.k(new P.d0(o,p),{func:1,ret:-1}))}},
ah:function(){var u=H.j(this.c,"$ia7")
this.c=null
return this.a1(u)},
a1:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
az:function(a){var u,t,s=this,r=H.c(s,0)
H.dS(a,{futureOr:1,type:r})
u=s.$ti
if(H.dp(a,"$iaR",u,"$aaR"))if(H.dp(a,"$iU",u,null))P.en(a,s)
else P.fJ(a,s)
else{t=s.ah()
H.n(a,r)
s.a=4
s.c=a
P.b_(s,t)}},
Z:function(a,b){var u,t=this
H.j(b,"$iA")
u=t.ah()
t.a=8
t.c=new P.K(a,b)
P.b_(t,u)},
ba:function(a){return this.Z(a,null)},
$iaR:1}
P.cX.prototype={
$0:function(){P.b_(this.a,this.b)},
$S:0}
P.d0.prototype={
$0:function(){P.b_(this.b,this.a.a)},
$S:0}
P.cY.prototype={
$1:function(a){var u=this.a
u.a=0
u.az(a)},
$S:6}
P.cZ.prototype={
$2:function(a,b){H.j(b,"$iA")
this.a.Z(a,b)},
$1:function(a){return this.$2(a,null)},
$S:13}
P.d_.prototype={
$0:function(){this.a.Z(this.b,this.c)},
$S:0}
P.d3.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.aS(H.k(s.d,{func:1}),null)}catch(r){u=H.X(r)
t=H.ap(r)
if(o.d){s=H.j(o.a.a.c,"$iK").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iK")
else q.b=new P.K(u,t)
q.a=!0
return}if(!!J.G(n).$iaR){if(n instanceof P.U&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iK")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.bX(new P.d4(p),null)
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
n.a.b=s.b.b.ao(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.X(o)
t=H.ap(o)
s=n.a
s.b=new P.K(u,t)
s.a=!0}},
$S:1}
P.d1.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iK")
r=m.c
if(H.dn(r.bN(u))&&r.e!=null){q=m.b
q.b=r.bI(u)
q.a=!1}}catch(p){t=H.X(p)
s=H.ap(p)
r=H.j(m.a.a.c,"$iK")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.K(t,s)
n.a=!0}},
$S:1}
P.bD.prototype={}
P.aj.prototype={
gk:function(a){var u={},t=new P.U($.y,[P.N])
u.a=0
this.a7(new P.cB(u,this),!0,new P.cC(u,t),t.gb9())
return t},
H:function(a,b){return new H.bd(this,[H.M(this,"aj",0),b])}}
P.cB.prototype={
$1:function(a){H.n(a,H.M(this.b,"aj",0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.M(this.b,"aj",0)]}}}
P.cC.prototype={
$0:function(){this.b.az(this.a.a)},
$S:0}
P.aV.prototype={}
P.a5.prototype={
J:function(a,b,c){return new H.bf(this,[H.M(this,"a5",0),H.M(this,"a5",1),b,c])},
$icA:1}
P.K.prototype={
i:function(a){return H.b(this.a)},
$ias:1}
P.dj.prototype={$ihy:1}
P.dl.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bx():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:0}
P.dd.prototype={
bW:function(a){var u,t,s,r=null
H.k(a,{func:1,ret:-1})
try{if(C.c===$.y){a.$0()
return}P.eq(r,r,this,a,-1)}catch(s){u=H.X(s)
t=H.ap(s)
P.b4(r,r,this,u,H.j(t,"$iA"))}},
ap:function(a,b,c){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.c===$.y){a.$1(b)
return}P.es(r,r,this,a,b,-1,c)}catch(s){u=H.X(s)
t=H.ap(s)
P.b4(r,r,this,u,H.j(t,"$iA"))}},
bV:function(a,b,c,d,e){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[d,e]})
H.n(b,d)
H.n(c,e)
try{if(C.c===$.y){a.$2(b,c)
return}P.er(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.X(s)
t=H.ap(s)
P.b4(r,r,this,u,H.j(t,"$iA"))}},
bw:function(a,b){return new P.df(this,H.k(a,{func:1,ret:b}),b)},
aJ:function(a){return new P.de(this,H.k(a,{func:1,ret:-1}))},
bx:function(a,b){return new P.dg(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
aS:function(a,b){H.k(a,{func:1,ret:b})
if($.y===C.c)return a.$0()
return P.eq(null,null,this,a,b)},
ao:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.y===C.c)return a.$1(b)
return P.es(null,null,this,a,b,c,d)},
bU:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.y===C.c)return a.$2(b,c)
return P.er(null,null,this,a,b,c,d,e,f)},
aQ:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}}
P.df.prototype={
$0:function(){return this.a.aS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.de.prototype={
$0:function(){return this.a.bW(this.b)},
$S:1}
P.dg.prototype={
$1:function(a){var u=this.c
return this.a.ap(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.co.prototype={
$2:function(a,b){this.a.j(0,H.n(a,this.b),H.n(b,this.c))},
$S:4}
P.a0.prototype={
gu:function(a){return new H.bs(a,this.gk(a),[H.dT(this,a,"a0",0)])},
F:function(a,b){return this.h(a,H.W(b))},
gt:function(a){return this.gk(a)===0},
gI:function(a){return!this.gt(a)},
ga3:function(a){if(this.gk(a)===0)throw H.h(H.ca())
return this.h(a,0)},
ga6:function(a){if(this.gk(a)===0)throw H.h(H.ca())
return this.h(a,this.gk(a)-1)},
H:function(a,b){return new H.aJ(a,[H.dT(this,a,"a0",0),b])},
i:function(a){return P.ea(a,"[","]")}}
P.cq.prototype={}
P.cr.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:4}
P.Y.prototype={
J:function(a,b,c){return P.fs(this,H.M(this,"Y",0),H.M(this,"Y",1),b,c)},
A:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.M(s,"Y",0),H.M(s,"Y",1)]})
for(u=J.bO(s.gC());u.m();){t=u.gp()
b.$2(t,s.h(0,t))}},
w:function(a,b){var u,t
H.z(b,"$it",[H.M(this,"Y",0),H.M(this,"Y",1)],"$at")
for(u=b.gC(),u=u.gu(u);u.m();){t=u.gp()
this.j(0,t,b.h(0,t))}},
gk:function(a){return J.R(this.gC())},
gt:function(a){return J.e1(this.gC())},
i:function(a){return P.eg(this)},
$it:1}
P.d6.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.bg(b):u}},
gk:function(a){var u
if(this.b==null){u=this.c
u=u.gk(u)}else u=this.P().length
return u},
gt:function(a){return this.gk(this)===0},
gC:function(){if(this.b==null)return this.c.gC()
return new P.d7(this)},
j:function(a,b,c){var u,t,s=this
H.x(b)
if(s.b==null)s.c.j(0,b,c)
else if(s.T(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.bo().j(0,b,c)},
w:function(a,b){H.z(b,"$it",[P.e,null],"$at").A(0,new P.d8(this))},
T:function(a){if(this.b==null)return this.c.T(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
A:function(a,b){var u,t,s,r,q=this
H.k(b,{func:1,ret:-1,args:[P.e,,]})
if(q.b==null)return q.c.A(0,b)
u=q.P()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.dk(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.h(P.bi(q))}},
P:function(){var u=H.ha(this.c)
if(u==null)u=this.c=H.r(Object.keys(this.a),[P.e])
return u},
bo:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.fq(P.e,null)
t=p.P()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.j(0,q,p.h(0,q))}if(r===0)C.a.l(t,null)
else C.a.sk(t,0)
p.a=p.b=null
return p.c=u},
bg:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.dk(this.a[a])
return this.b[a]=u},
$aY:function(){return[P.e,null]},
$at:function(){return[P.e,null]}}
P.d8.prototype={
$2:function(a,b){this.a.j(0,H.x(a),b)},
$S:15}
P.d7.prototype={
gk:function(a){var u=this.a
return u.gk(u)},
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
u=new J.b9(u,u.length,[H.c(u,0)])}return u},
$aF:function(){return[P.e]},
$aaT:function(){return[P.e]},
$aI:function(){return[P.e]}}
P.bg.prototype={}
P.a8.prototype={
J:function(a,b,c){return new H.bb(this,[H.M(this,"a8",0),H.M(this,"a8",1),b,c])}}
P.br.prototype={
i:function(a){var u=P.aQ(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.cg.prototype={
i:function(a){return"Cyclic error in JSON stringify"}}
P.cf.prototype={
aj:function(a,b){var u=P.fQ(b,this.gbE().a)
return u},
bF:function(a){var u=P.fK(a,this.gbG().b,null)
return u},
gbG:function(){return C.aw},
gbE:function(){return C.av},
$abg:function(){return[P.m,P.e]}}
P.ci.prototype={
$acA:function(){return[P.m,P.e]},
$aa5:function(){return[P.m,P.e]},
$aa8:function(){return[P.m,P.e]}}
P.ch.prototype={
$acA:function(){return[P.e,P.m]},
$aa5:function(){return[P.e,P.m]},
$aa8:function(){return[P.e,P.m]}}
P.da.prototype={
aW:function(a){var u,t,s,r,q,p,o,n=a.length
for(u=J.eC(a),t=this.c,s=0,r=0;r<n;++r){q=u.Y(a,r)
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
ac:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.h(new P.cg(a,null))}C.a.l(u,a)},
a9:function(a){var u,t,s,r,q=this
if(q.aV(a))return
q.ac(a)
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
return!0}else{u=J.G(a)
if(!!u.$iu){s.ac(a)
s.c_(a)
u=s.a
if(0>=u.length)return H.l(u,-1)
u.pop()
return!0}else if(!!u.$it){s.ac(a)
t=s.c0(a)
u=s.a
if(0>=u.length)return H.l(u,-1)
u.pop()
return t}else return!1}},
c_:function(a){var u,t,s=this.c
s.a+="["
u=J.an(a)
if(u.gI(a)){this.a9(u.h(a,0))
for(t=1;t<u.gk(a);++t){s.a+=","
this.a9(u.h(a,t))}}s.a+="]"},
c0:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gt(a)){o.c.a+="{}"
return!0}u=a.gk(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.A(0,new P.db(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.aW(H.x(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.l(t,p)
o.a9(t[p])}r.a+="}"
return!0}}
P.db.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.j(u,t.a++,a)
C.a.j(u,t.a++,b)},
$S:4}
P.d9.prototype={
gaE:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.aA.prototype={}
P.B.prototype={}
P.as.prototype={}
P.bR.prototype={
i:function(a){return"Assertion failed"}}
P.bx.prototype={
i:function(a){return"Throw of null."}}
P.ad.prototype={
gae:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gad:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gae()+o+u
if(!q.a)return t
s=q.gad()
r=P.aQ(q.b)
return t+s+": "+r}}
P.bz.prototype={
gae:function(){return"RangeError"},
gad:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.c9.prototype={
gae:function(){return"RangeError"},
gad:function(){var u,t=H.W(this.b)
if(typeof t!=="number")return t.V()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gk:function(a){return this.f}}
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
$ias:1}
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
H:function(a,b){return H.dC(this,H.M(this,"I",0),b)},
gk:function(a){var u,t=this.gu(this)
for(u=0;t.m();)++u
return u},
gt:function(a){return!this.gu(this).m()},
gI:function(a){return!this.gt(this)},
F:function(a,b){var u,t,s
H.W(b)
P.fy(b,"index")
for(u=this.gu(this),t=0;u.m();){s=u.gp()
if(b===t)return s;++t}throw H.h(P.dF(b,this,"index",null,t))},
i:function(a){return P.fl(this,"(",")")}}
P.u.prototype={$iF:1,$iI:1}
P.t.prototype={}
P.w.prototype={
gq:function(a){return P.m.prototype.gq.call(this,this)},
i:function(a){return"null"}}
P.b6.prototype={}
P.m.prototype={constructor:P.m,$im:1,
N:function(a,b){return this===b},
gq:function(a){return H.aU(this)},
i:function(a){return"Instance of '"+H.b(H.by(this))+"'"},
toString:function(){return this.i(this)}}
P.A.prototype={}
P.e.prototype={$ift:1}
P.aw.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ihn:1}
W.d.prototype={}
W.bP.prototype={
i:function(a){return String(a)}}
W.bQ.prototype={
i:function(a){return String(a)}}
W.ae.prototype={
gk:function(a){return a.length}}
W.aN.prototype={
gk:function(a){return a.length}}
W.c3.prototype={}
W.ar.prototype={$iar:1}
W.aO.prototype={
E:function(a,b,c){var u=a.createElementNS(b,c)
return u}}
W.c5.prototype={
i:function(a){return String(a)}}
W.aP.prototype={
i:function(a){return a.localName},
bj:function(a,b,c){return a.setAttribute(b,c)},
$iaP:1}
W.a.prototype={$ia:1}
W.af.prototype={
b7:function(a,b,c,d){return a.addEventListener(b,H.b5(H.k(c,{func:1,args:[W.a]}),1),!1)},
bh:function(a,b,c,d){return a.removeEventListener(b,H.b5(H.k(c,{func:1,args:[W.a]}),1),!1)},
$iaf:1}
W.c7.prototype={
gk:function(a){return a.length}}
W.bl.prototype={}
W.J.prototype={
a8:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
bT:function(a,b){var u,t
try{u=a.parentNode
J.f1(u,b,a)}catch(t){H.X(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.b1(a):u},
bt:function(a,b){return a.appendChild(b)},
bi:function(a,b,c){return a.replaceChild(b,c)},
$iJ:1}
W.cx.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.H.prototype={$iH:1}
W.bF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.dF(b,a,null,null,null))
return a[b]},
F:function(a,b){H.W(b)
if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.J]},
$ibp:1,
$abp:function(){return[W.J]},
$aa0:function(){return[W.J]},
$iI:1,
$aI:function(){return[W.J]},
$iu:1,
$au:function(){return[W.J]},
$aaS:function(){return[W.J]}}
W.cT.prototype={
a7:function(a,b,c,d){var u=H.c(this,0)
H.k(a,{func:1,ret:-1,args:[u]})
H.k(c,{func:1,ret:-1})
return W.dM(this.a,this.b,a,!1,u)},
aP:function(a,b,c){return this.a7(a,b,c,null)}}
W.dL.prototype={}
W.cU.prototype={
am:function(a){var u=this
H.k(a,{func:1,ret:-1,args:[H.c(u,0)]})
if(u.b==null)throw H.h(P.fC("Subscription has been canceled."))
u.bn()
u.sbd(W.ev(H.k(a,{func:1,ret:-1,args:[W.a]}),W.a))
u.aH()},
an:function(a,b){},
aH:function(){var u,t=this.d,s=t!=null
if(s&&!0){u=this.b
u.toString
H.k(t,{func:1,args:[W.a]})
if(s)J.f_(u,this.c,t,!1)}},
bn:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.k(t,{func:1,args:[W.a]})
if(s)J.f0(u,this.c,t,!1)}},
sbd:function(a){this.d=H.k(a,{func:1,args:[W.a]})}}
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
$ibm:1}
W.bE.prototype={}
W.bI.prototype={}
W.bJ.prototype={}
P.dc.prototype={
i:function(a){var u=this
return"Rectangle ("+u.a+", "+u.b+") "+u.c+" x "+u.d},
N:function(a,b){var u,t,s,r,q,p,o=this
if(b==null)return!1
if(!!J.G(b).$iL){u=o.a
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
o=P.d5(P.d5(P.d5(P.d5(0,r),p),s),o)
u=536870911&o+((67108863&o)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)}}
P.L.prototype={}
P.aL.prototype={$iaL:1}
P.a4.prototype={$ia4:1}
P.S.prototype={}
P.ah.prototype={$iah:1}
P.av.prototype={$iav:1}
P.Z.prototype={$iZ:1}
P.f.prototype={$if:1}
P.ax.prototype={$iax:1}
P.aX.prototype={}
P.a1.prototype={$ia1:1}
P.aY.prototype={}
P.bk.prototype={$iF:1,
$aF:function(){return[P.B]},
$iI:1,
$aI:function(){return[P.B]},
$iu:1,
$au:function(){return[P.B]}}
F.bh.prototype={}
M.ba.prototype={
au:function(c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5="rotate(90) translate(",c6=e1.h(0,C.w),c7=e1.h(0,C.q)
if(J.f4(c7,"-"))c3.f=!0
if(C.b.S(c7,"y"))p=!1
else p=!0
if(c3.r==null)c3.r=0
o=new M.bX(c3,d1,d2,c8,d3,d4)
n=new M.bY(c3,d1,d2,c8,d3,d4)
m=P.e
c3.sb8(0,P.ac($.dA,M.p,m))
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
if(typeof e!=="number")return e.as()
if(typeof h!=="number")return H.i(h)
h=e>h}else h=!0
if(h){h=e3.a
if(typeof h!=="number")return h.n()
e3.a=h+1
s=M.bW(o.$1(u),o.$1(t),e3.a,c4,!1)}}h=J.R(s)
d=J.C(s,J.R(s)/2|0)
if(typeof g!=="number")return H.i(g)
if(C.l.U(h*d.length*g*0.6)>d7){h=e3.a
if(typeof h!=="number")return H.i(h)
e3.a=C.k.U(0.8*h)
s=M.bW(o.$1(u),o.$1(t),e3.a,c4,!1)}c=P.q(c3.e.h(0,C.i))
if(typeof c!=="number")return c.n()
b=c+g+4
h=P.q(c3.e.h(0,C.B))
if(typeof h!=="number")return H.i(h)
a=b+h
if(C.b.S(c7,"t")){h=P.q(c3.e.h(0,C.i))
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
s=H.r(["0.0"],[m])}h=P.q(c3.e.h(0,C.i))
if(typeof h!=="number")return H.i(h)
c=d8-h
h=P.q(c3.e.h(0,C.A))
if(typeof h!=="number")return H.i(h)
b=c-h
h=P.q(c3.e.h(0,C.C))
if(typeof h!=="number")return H.i(h)
a=b-h
if(C.b.S(c7,"t")){c=P.q(c3.e.h(0,C.i))
h=P.q(c3.e.h(0,C.A))
if(typeof c!=="number")return c.n()
if(typeof h!=="number")return H.i(h)
b=c+h
h=P.q(c3.e.h(0,C.R))
if(typeof h!=="number")return H.i(h)
a=b+h
a0=0}else a0=d8
a1=c3.e.h(0,C.P)}a3=H.r([],[P.N])
c3.a=P.aW()
c3.c=P.q(c3.e.h(0,C.K))
c3.d=P.q(c3.e.h(0,C.L))
for(h=d2!=null,d=d1!=null,a4=c4,a5=a4,a6=a5,a7=a6,a8=a7,a9="middle",b0="0",b1=0;b1<J.R(s);++b1){b2=P.V(J.C(s,b1))
if(!j||!1){b3=H.ez(n.$1(b2))
if(c3.f){b4=c3.r
if(typeof b4!=="number")return b4.v()
if(typeof b3!=="number")return H.i(b3)
b3=b4-b3}b5=J.aq(c3.x.$1(b3))}else{if(h&&d){if(typeof b2!=="number")return b2.ab()
if(typeof d2!=="number")return H.i(d2)
b6=b2*d1/d2}else b6=b2
if(c3.f){b4=c3.r
if(typeof b4!=="number")return b4.v()
if(typeof b6!=="number")return H.i(b6)
b3=b4-b6}else b3=b6
b5=J.aq(c3.x.$1(b3))}C.a.l(a3,b5)
if(b5<0)continue
if(b5>d7)continue
b4=document
b7=b4.createElementNS("http://www.w3.org/2000/svg","text")
b7=H.j(H.j(b7,"$if"),"$ia1")
if(J.C(s,b1).length>4){if(typeof b2!=="number")return b2.aI()
b8=Math.abs(b2)>99999}else b8=!1
if(b8){J.dZ(s,b1,J.f9(b2,2))
b8=s
b9=J.C(s,b1)
J.dZ(b8,b1,H.hg(b9,"e",""))}b7.textContent=J.C(s,b1)
if(p){b8=c3.c
if(typeof b8!=="number")return H.i(b8)
a5=b5+b8
a4=b}else{b8=c3.d
if(typeof b8!=="number")return H.i(b8)
a4=b5+b8
a9=H.dW(c7,"t",0)?"start":"end"
a5=b
b0="-33%"}B.E(b7,P.v(["x",""+a5,"y",""+a4,"fill",a1,"stroke","none","font-size",c3.e.h(0,C.j),"text-anchor",a9,"baseline-shift",b0,"cursor","default"],m,m))
c3.a.appendChild(b7)
if(c3.e.T(C.i)){b8=P.q(c3.e.h(0,C.i))
if(typeof b8!=="number")return b8.as()
b8=b8>0}else b8=!1
if(b8){c0=b4.createElementNS("http://www.w3.org/2000/svg","line")
c0=H.j(H.j(c0,"$if"),"$iah")
if(p){b4=c3.c
if(typeof b4!=="number")return H.i(b4)
a6=b5+b4}else{b4=c3.d
if(typeof b4!=="number")return H.i(b4)
a6=b5+b4}if(p)B.E(c0,P.v(["x1",""+a6,"y1",""+a0,"x2",""+a6,"y2",""+c],m,m))
else B.E(c0,P.v(["x1",""+a0,"y1",""+a6,"x2",""+c,"y2",""+a6],m,m))
B.E(c0,P.v(["stroke",c3.e.h(0,C.M),"stroke-width",c3.e.h(0,C.N)],m,m))
c3.a.appendChild(c0)
a7=c0}if(H.dW(c7,"g",0))b4=d9>0
else b4=!1
if(b4)if(p)c3.b=S.em(a3,c4,c4,d9,e1)
else c3.b=S.em(c4,a3,d9,c4,e1)
a8=b7}if(c6!=null&&C.b.aU(c6).length!==0){a8=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","text"),"$if"),"$ia1")
a8.textContent=c6
if(p){j=c3.c
if(typeof j!=="number")return H.i(j)
B.E(a8,P.v(["x",H.b(d7/2+j),"y",""+a,"fill",a1,"stroke","none","font-size",c3.e.h(0,C.j),"text-anchor","middle","cursor","default"],m,m))}else{c1=P.q(c3.e.h(0,C.C))
c2="rotate(-90) translate("+H.b(-d7/2)+", "+H.b(c1)+")"
if(J.b7(c3.e.h(0,C.Q),"tb")){j=d7/2
h=c5+H.b(j)+", "
if(typeof c1!=="number")return c1.W()
c2=h+-c1+")"
if(C.b.S(c7,"t"))c2=c5+H.b(j)+", "+(-d8+C.l.U(d8*0.22))+")"}B.E(a8,P.v(["x","0","y","0","fill",a1,"stroke","none","font-size",c3.e.h(0,C.j),"text-anchor","middle","transform",c2,"cursor","default"],m,m))}m=W.aZ
j={func:1,ret:-1,args:[m]}
W.dM(a8,"touchstart",H.k(new M.bU(e2),j),!1,m)
W.dM(a8,"touchmove",H.k(new M.bV(e2),j),!1,m)
c3.a.appendChild(a8)}},
sb8:function(a,b){this.e=H.z(b,"$it",[M.p,P.e],"$at")}}
M.bS.prototype={
$0:function(){var u=this.a
u.j(0,C.q,J.eZ(u.h(0,C.q),"y"))
return u},
$S:17}
M.bX.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.M()
if(typeof p!=="number")return H.i(p)
u=q/p
if(!H.dn(s.e))u=-u
if(o){if(typeof r!=="number")return r.n()
t=r+(a+0.5)*u}else{if(typeof r!=="number")return r.n()
t=r+a*u}return t},
$S:2}
M.bY.prototype={
$1:function(a){var u,t,s=this,r=s.b,q=s.c,p=s.d,o=s.a.f
if(typeof q!=="number")return q.M()
if(typeof p!=="number")return H.i(p)
u=q/p
if(!H.dn(s.e))u=-u
if(o){if(typeof a!=="number")return a.v()
if(typeof r!=="number")return H.i(r)
t=(a-r)/u-0.5}else{if(typeof a!=="number")return a.v()
if(typeof r!=="number")return H.i(r)
t=(a-r)/u}return t},
$S:2}
M.bT.prototype={
$2:function(a,b){var u
H.x(a)
H.x(b)
u=P.q(a)
if(typeof u!=="number")return H.i(u)
if(this.b>u){this.a.a=P.q(b)
return}},
$S:18}
M.bU.prototype={
$1:function(a){H.j(a,"$iH").preventDefault()},
$S:7}
M.bV.prototype={
$1:function(a){H.j(a,"$iH").preventDefault()},
$S:7}
M.p.prototype={
i:function(a){return this.b}}
S.cK.prototype={
by:function(){var u,t,s,r,q,p,o,n,m=this,l="stroke-dasharray",k=P.aW(),j=m.e,i=j!=null
if(i)for(u=m.d,t=P.e,s=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.j(H.j(p,"$if"),"$iah")
if(r>=j.length)return H.l(j,r)
q=""+j[r]
if(r>=j.length)return H.l(j,r)
B.E(p,P.v(["x1",q,"y1","0","x2",""+j[r],"y2",H.b(u),"stroke",m.b.h(0,C.r),"stroke-width",m.b.h(0,C.t),"stroke-opacity",m.b.h(0,C.u),l,m.b.h(0,C.v)],t,t))
k.appendChild(p)
s=p}j=m.f
i=j!=null
if(i)for(u=m.c,t=P.e,o=null,r=0;q=j.length,r<q;++r)if(i&&q!==0){p=document.createElementNS("http://www.w3.org/2000/svg","line")
p=H.j(H.j(p,"$if"),"$iah")
if(r>=j.length)return H.l(j,r)
q=""+j[r]
n=H.b(u)
if(r>=j.length)return H.l(j,r)
B.E(p,P.v(["x1","0","y1",q,"x2",n,"y2",""+j[r],"stroke",m.b.h(0,C.r),"stroke-width",m.b.h(0,C.t),"stroke-opacity",m.b.h(0,C.u),l,m.b.h(0,C.v)],t,t))
k.appendChild(p)
o=p}m.a=k},
sbv:function(a,b){this.b=H.z(b,"$it",[M.p,P.e],"$at")}}
D.cj.prototype={
aN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/2000/svg",h="legend",g=j.c,f=document
g.j(0,a,H.j(H.j(C.e.E(f,i,"text"),"$if"),"$ia1"))
g.h(0,a).textContent=b
u=j.b
j.ch=P.q(J.C(u.h(0,h),C.E))
J.bN(g.h(0,a),"font-size",H.b(j.ch))
t=g.h(0,a)
s=J.C(u.h(0,h),C.Y)
t.toString
J.bN(t,"fill",H.x(s))
s=j.ch
t=P.q(J.C(u.h(0,h),C.a2))
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
if(typeof p!=="number")return p.X()
o=12-C.d.R(p,2)}j.cy=t-1
t=j.z
C.aD.bt(t,g.h(0,a))
J.bN(g.h(0,a),"x",""+o)
J.bN(g.h(0,a),"y",H.b(j.e))
if(!s&&q){g=j.e
if(typeof g!=="number")return g.v()
n=H.j(H.j(C.e.E(f,i,"rect"),"$if"),"$iZ")
m=P.q(J.C(u.h(0,h),C.a1))
l=j.r
k=P.q(J.C(u.h(0,h),C.E))
if(typeof k!=="number")return k.X()
u=C.d.R(k,2)
n.setAttribute("x","6")
n.setAttribute("y",""+(g-r+u))
n.setAttribute("width",H.b(l))
n.setAttribute("height",H.b(m))
n.setAttribute("fill",c)
j.d.j(0,a,n)
t.appendChild(n)}},
at:function(a,b,c){var u,t=this,s=t.c
if(s.T(a)){u=s.h(0,a)
u.textContent=b;(u&&C.am).bT(u,u)}else t.aN(a,b,c)
t.bp(t.e)},
bp:function(a){var u,t,s,r=this,q="legend",p=r.Q
if(p!=null)C.al.a8(p)
r.Q=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","rect"),"$if"),"$iZ")
p=r.b
u=P.q(J.C(p.h(0,q),C.Z))
if(u===0)return
t=P.q(J.C(p.h(0,q),C.a_))
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
s.setAttribute("fill",H.x(J.C(p.h(0,q),C.W)))
s=r.Q
s.toString
s.setAttribute("fill-opacity",H.x(J.C(p.h(0,q),C.X)))
r.z.appendChild(r.Q)}}
D.D.prototype={
i:function(a){return this.b}}
V.au.prototype={
b4:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q=this
q.sbu(P.ac($.dz(),V.o,P.e))
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
q.y2=B.fD(q.a.h(0,C.ag))
q.f=P.q(q.a.h(0,C.ai))
q.x=q.r=P.q(q.a.h(0,C.aj))
u=F.fi(u,q.cy,q.db,!1,P.q(q.a.h(0,C.a8)))
q.b=u
u=u.d.length
q.rx=new Float64Array(u)
for(r=0;u=q.b.d,r<u.length;++r){t=q.rx
u=u[r]
u.toString;(t&&C.m).j(t,r,u)}q.aL=E.e4(q.rx)[0]
q.aM=E.e3(q.rx)[0]
q.L=E.e4(q.b.a)[0]
q.B=E.e3(q.b.a)[0]
q.K=P.aW()
q.aY()},
aY:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a.h(0,C.n)==null||J.b7(j.a.h(0,C.n),"null")?j.cx=null:j.cx=P.V(j.a.h(0,C.n))
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
if(typeof i!=="number")return i.ab()
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
r=J.aq(j.aq(o*n))
q=J.aq(j.ar(l))
if(!H.dn(j.y2))if(q<0)q=2
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
if(i!=null)C.ax.a8(i)
j.c=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","polyline"),"$if"),"$iav")
k=j.a.h(0,C.f)
i=P.q(j.a.h(0,C.a7))
j.bH=i
j.x1=!1
j.c.setAttribute("stroke-width",H.b(i))
i=j.ry
if(i!=null){o=P.e
B.E(i,P.v(["stroke",H.b(k),"fill","none"],o,o))}i=j.c
o=j.a.h(0,C.f)
i.toString
i.setAttribute("stroke",H.x(o))
i.setAttribute("fill","none")
i.setAttribute("points",u.charCodeAt(0)==0?u:u)
if(j.a.h(0,C.a4)!=null){i=j.c
u=j.a.h(0,C.a4)
i.toString
i.setAttribute("transform",H.x(u))}j.K.appendChild(j.c)
j.fr=q
if(J.b7(j.a.h(0,C.ah),"true"))j.bs(r,q)
j.br()
j.bq(r,q)},
aq:function(a){var u,t,s,r,q=this,p=q.aM,o=q.aL
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
aX:function(a){var u,t=this,s=t.a2
if(s==null||t.ak==null)return
if(typeof s!=="number")return s.aI()
u=Math.abs(s)<1e-10
if(u&&a<=0){s=t.B
u=t.r1
if(typeof s!=="number")return s.M()
if(typeof u!=="number")return H.i(u)
return s/u}if(u&&a>=t.z){s=t.B
if(typeof s!=="number")return s.W()
u=t.r1
if(typeof u!=="number")return H.i(u)
return-s/u}u=t.ak
if(typeof u!=="number")return H.i(u)
return-(a-u)/s},
ar:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ch,i=P.V(l.a.h(0,C.h))
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
if(p){if(typeof a!=="number")return a.W()
a=-a
if(typeof o!=="number")return o.W()
n=l.B=-q
l.L=-o
o=n}if(typeof o!=="number")return o.v()
q=o-0
p=Math.abs(q)<0.000001
if(p){if(typeof a!=="number")return a.ab()
u=a*Math.abs(u)<0.000001}else u=!1
if(u)u=l.a2=0
else if(p){l.a2=0
u=0}else{u=-(t*j+s-r)/q
l.a2=u}s=l.k2
if(typeof s!=="number")return H.i(s)
q=l.k3
if(typeof q!=="number")return H.i(q)
q=r+u*0+s+q
l.ak=q
if(typeof a!=="number")return H.i(a)
k=-u*a+q
try{J.aq(k)
u=k
return u}catch(m){H.X(m)
return l.z/2}},
bs:function(a,b){var u,t,s,r=this,q=r.ry
if(q!=null)C.al.a8(q)
if(a==null){a=r.x2
if(a!=null&&r.y1!=null)b=r.y1
else{a=r.dy
if(a!=null&&r.fr!=null)b=r.fr
else return}}u=P.q(r.a.h(0,C.a5))
if(J.b7(r.a.h(0,C.a6),"true")){q=r.f
if(typeof q!=="number")return q.X()
q=C.d.R(q,2)
if(typeof a!=="number")return a.as()
q=a>r.y-q}else q=!1
if(q){if(typeof u!=="number")return H.i(u)
a=r.y-u}if(typeof a!=="number")return a.n()
r.x2=a+2
if(typeof u!=="number")return u.X()
q=C.d.R(u,2)
if(typeof b!=="number")return b.v()
r.y1=b-q
t=r.a.h(0,C.f)
q=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","rect"),"$if"),"$iZ")
r.ry=q
s=P.e
B.E(q,P.v(["x",H.b(r.x2),"y",H.b(r.y1),"width",""+u,"height",""+u,"stroke",H.b(t),"fill","white"],s,s))
r.K.appendChild(r.ry)},
br:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.d,b=c.length
if(b!==0){for(u=0;u<c.length;c.length===b||(0,H.eM)(c),++u){t=c[u]
s=t.parentNode
if(s!=null)s.removeChild(t)}C.a.sk(c,0)}r=d.a.h(0,C.ay)
if(r==null||r.length===0)return
b=P.e
q=H.z(J.e_(C.x.aj(0,r),b),"$iu",[b],"$au")
t=q.ga3(q)
s=q.a
p=J.an(s)
if(p.gk(s)<4)return
for(o=t==="POLYLINE_POINT_SHAPE_CIRCLE_EMPTY",n=t==="POLYLINE_POINT_SHAPE_SQUARE_EMPTY",m=H.c(q,1),l=2;l<p.gk(s);l+=2){k=P.V(H.Q(p.h(s,l),m))
j=P.V(H.Q(p.h(s,l+1),m))
i=J.aq(d.aq(k))
h=J.aq(d.ar(j))
g=d.a.h(0,C.az)
if(g==null)g=d.a.h(0,C.f)
if(n){f=document.createElementNS("http://www.w3.org/2000/svg","rect")
f=H.j(H.j(f,"$if"),"$iZ")
B.E(f,P.v(["x",H.b(i+18626451505319996e-25),"y",H.b(h+18626451505319996e-25),"width","8","height","8","stroke",H.b(g),"fill","white"],b,b))
e=f}else if(o){f=document.createElementNS("http://www.w3.org/2000/svg","circle")
f=H.j(H.j(f,"$if"),"$iaL")
B.E(f,P.v(["cx",""+i,"cy",""+h,"r","6","stroke",H.b(g),"fill","white"],b,b))
e=f}else e=null
C.a.l(c,e)
d.K.appendChild(e)}d.a.j(0,C.z,H.Q(p.h(s,1),m))},
bq:function(a,b){var u,t,s,r,q=this,p=q.e
if(p!=null)C.am.a8(p)
if(q.a.h(0,C.z)==null||J.R(q.a.h(0,C.z))===0)return
p=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","text"),"$if"),"$ia1")
q.e=p
p.textContent=H.x(q.a.h(0,C.z))
u=P.q(q.a.h(0,C.ak))
p=q.e
if(typeof a!=="number")return a.n()
t=""+(a+8)
if(typeof u!=="number")return u.X()
s=C.d.R(u,4)
if(typeof b!=="number")return b.n()
r=P.e
B.E(p,P.v(["x",t,"y",""+(b+s),"font-size",""+u,"fill",q.a.h(0,C.f),"stroke","none"],r,r))
q.K.appendChild(q.e)},
sbu:function(a){this.a=H.z(a,"$it",[V.o,P.e],"$at")}}
V.o.prototype={
i:function(a){return this.b}}
X.cy.prototype={
b5:function(a,b,c,a0,a1,a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a,d=e.clientWidth
if(typeof d!=="number")return d.v()
u=e.clientHeight
if(typeof u!=="number")return u.v()
t=P.N
g.sbP(P.bA(15,15,d-30,u-30,t))
g.sbD(P.bA(15,15,0,0,t))
u=g.y
d=u.b
s=g.e
g.sbC(P.bA(80,d,s.c-80-u.a,s.d-70,t))
s=g.f
g.sc2(P.bA(s.a,s.b+s.d,s.c,70,t))
s=g.f
g.sc5(P.bA(s.a-80,s.b,80,s.d,t))
t=P.aW()
g.b=t
s=P.e
B.E(t,P.v(["width",""+g.e.c,"height",""+g.e.d],s,s))
t=P.aW()
g.c=t
B.E(t,P.v(["x",""+g.f.a,"y",""+g.f.b,"width",""+g.f.c,"height",""+g.f.d],s,s))
t=H.j(H.j(C.e.E(document,"http://www.w3.org/2000/svg","rect"),"$if"),"$iZ")
g.d=t
B.E(t,P.v(["x",""+g.f.a,"y",""+g.f.b,"width",""+g.f.c,"height",""+g.f.d,"fill","none","stroke","darkgreen","stroke-width","2"],s,s))
e.appendChild(g.b)
g.b.appendChild(g.c)
g.b.appendChild(g.d)
g.bB()
e=g.cx
if(0>=e.length)return H.l(e,0)
e=e[0]
d=M.p
r=P.ac($.dA,d,s)
r.w(0,g.dy)
g.sc1(r)
r=P.ac($.dA,d,s)
r.w(0,g.fr)
g.sc4(r)
d=e.r2.length
q=d-1
if(g.dy.h(0,C.o)!=null&&J.R(g.dy.h(0,C.o))!==0&&g.dy.h(0,C.p)!=null&&J.R(g.dy.h(0,C.p))!==0){p=P.V(g.dy.h(0,C.o))
q=P.V(g.dy.h(0,C.p))}else p=0
u=e.rx
u=(u&&C.m).ga3(u)
t=e.rx
t=(t&&C.m).ga6(t)
o=g.f
n=o.c
m=g.r.d
o=o.d
l=e.gc3()
k=new M.ba(f,l)
k.au(d,u,t,p,q,!0,f,!1,f,n,m,o,l,g.dy,f,{})
g.z=k
l=k.a
o=g.r.a
k=k.c
if(typeof k!=="number")return H.i(k)
B.E(l,P.v(["x",""+(o-k),"y",""+g.r.b],s,s))
B.E(g.z.b.a,P.v(["x",""+g.f.a,"y",""+g.f.b],s,s))
j=e.aX(0)
i=e.aX(g.f.d)
if(j==null)j=e.L
if(i==null)i=e.B
d=e.r1
if(typeof j!=="number")return j.M()
if(typeof d!=="number")return H.i(d)
if(typeof i!=="number")return i.M()
u=g.f
e=M.fc(j/d,i/d,f,f,f,u.d,g.x.c,u.c,e.gc6(),g.fr,f)
g.Q=e
e=e.a
u=""+g.x.a
d=g.x.b
t=g.Q.d
if(typeof t!=="number")return H.i(t)
B.E(e,P.v(["x",u,"y",""+(d-t)],s,s))
B.E(g.Q.b.a,P.v(["x",""+g.f.a,"y",""+g.f.b],s,s))
g.cy=X.fB(g.dx,g.fy)
for(h=0;h<3;++h){e=g.c
d=g.cx
if(h>=d.length)return H.l(d,h)
e.appendChild(d[h].K)}g.c.appendChild(g.cy.z)
g.b.appendChild(g.z.a)
g.b.appendChild(g.Q.a)
g.b.appendChild(g.z.b.a)
g.b.appendChild(g.Q.b.a)},
bB:function(){var u,t,s,r,q,p,o,n,m,l,k=this,j=new Array(3)
j.fixed$length=Array
k.sbS(H.r(j,[V.au]))
if(k.fy==null)k.sbR(k.fx)
for(j=k.ch,u=V.o,t=P.e,s=[[P.t,V.o,P.e]],r=0;r<3;++r){if(r===0)q=k.db.length!==3
else q=!1
if(q){q=new Array(3)
q.fixed$length=Array
k.sbQ(H.r(q,s))}q=k.db
if(r>=q.length)return H.l(q,r)
p=q[r]
if(p==null){C.a.j(q,r,P.ac($.dz(),u,t))
q=k.db
if(r>=q.length)return H.l(q,r)
q[r].j(0,C.h,"0.8")
q=k.db
if(r>=q.length)return H.l(q,r)
q[r].j(0,C.f,k.fy[r])}else{if(p.h(0,C.h)==null){q=k.db
if(r>=q.length)return H.l(q,r)
q[r].j(0,C.h,"0.8")}q=k.db
if(r>=q.length)return H.l(q,r)
if(q[r].h(0,C.f)==null){q=k.db
if(r>=q.length)return H.l(q,r)
q[r].j(0,C.f,k.fy[r])}o=P.ac($.dz(),u,t)
q=k.db
if(r>=q.length)return H.l(q,r)
o.w(0,q[r])
C.a.j(k.db,r,o)}if(r>0){q=k.db
if(r>=q.length)return H.l(q,r)
q=q[r]
p=k.cx
if(0>=p.length)return H.l(p,0)
q.j(0,C.n,H.b(p[0].B))}q=k.cx
p=j[r]
n=k.f
m=n.c
n=n.d
l=k.db
if(r>=l.length)return H.l(l,r);(q&&C.a).j(q,r,V.fu(p,0,p.length-1,m,n,null,null,null,l[r]))}},
sbP:function(a){this.e=H.z(a,"$iL",[P.N],"$aL")},
sbC:function(a){this.f=H.z(a,"$iL",[P.N],"$aL")},
sc2:function(a){this.r=H.z(a,"$iL",[P.N],"$aL")},
sc5:function(a){this.x=H.z(a,"$iL",[P.N],"$aL")},
sbD:function(a){this.y=H.z(a,"$iL",[P.N],"$aL")},
sbS:function(a){this.cx=H.z(a,"$iu",[V.au],"$au")},
sbQ:function(a){this.db=H.z(a,"$iu",[[P.t,V.o,P.e]],"$au")},
sc1:function(a){this.dy=H.z(a,"$it",[M.p,P.e],"$at")},
sc4:function(a){this.fr=H.z(a,"$it",[M.p,P.e],"$at")},
sbR:function(a){this.fy=H.z(a,"$iu",[P.e],"$au")}}
B.cw.prototype={
$2:function(a,b){this.a.setAttribute(H.x(a),H.x(b))
return},
$S:19}
T.cp.prototype={
b3:function(a,b,c,d,e,f){var u,t,s,r,q,p,o,n=this
if(n.cx==null)n.cx=n.e
if(n.cy==null)n.cy=4
u=n.r
u.length
n.ch=1
t=n.x
t.length
s=n.y
s.length
r=new Array(4)
r.fixed$length=Array
n.sbO(H.r(r,[P.B]))
r=n.Q;(r&&C.a).j(r,0,n.z)
for(q=0;q<n.ch;q=p){r=n.Q
p=q+1
if(q>=1)return H.l(u,q);(r&&C.a).j(r,p,u[q])
r=n.Q;(r&&C.a).j(r,p+n.ch,t[q])
r=n.Q
o=n.ch;(r&&C.a).j(r,p+o+o,s[q])}},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.z(a,"$iu",[P.B],"$au")
u=k.ch
if(u!==1)throw H.h("Illegal dimension. Should be "+u)
for(u=k.y,t=k.r,s=k.x,r=1,q=0,p=0;p<k.ch;++p){if(p>=1)return H.l(a,p)
o=(a[p]-t[p])/s[p]
o*=o
n=u[p]
m=k.cy
if(typeof m!=="number")return m.ab()
l=n/(1+m*o)
n=1-n
if(n>0.001){m=k.cx
if(typeof m!=="number")return m.W()
q=n*Math.exp(-m*o)
r*=l+q}else r*=l}return r*k.z},
sbO:function(a){this.Q=H.z(a,"$iu",[P.B],"$au")}}
T.ck.prototype={};(function aliases(){var u=J.O.prototype
u.b1=u.i
u=J.bq.prototype
u.b2=u.i})();(function installTearOffs(){var u=hunkHelpers._instance_1u,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff
u(H.be.prototype,"gbe","bf",8)
t(P,"fV","fG",5)
t(P,"fW","fH",5)
t(P,"fX","fI",5)
s(P,"ey","fT",1)
r(P.U.prototype,"gb9",0,1,null,["$2","$1"],["Z","ba"],12,0)
t(P,"fY","fM",3)
var q
u(q=V.au.prototype,"gc3","aq",2)
u(q,"gc6","ar",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.m,null)
s(P.m,[H.dI,J.O,J.b9,P.aj,H.be,P.a5,P.I,H.c0,P.Y,H.aM,H.bs,H.bj,H.cE,P.as,H.bG,H.cl,H.cn,P.dh,P.a7,P.U,P.bD,P.aV,P.K,P.dj,P.a0,P.bg,P.da,P.aA,P.b6,P.bB,P.cW,P.c8,P.u,P.t,P.w,P.A,P.e,P.aw,W.c3,W.aS,W.c6,P.dc,P.bk,F.bh,M.ba,M.p,S.cK,D.cj,D.D,V.au,V.o,X.cy,T.ck])
s(J.O,[J.cb,J.cc,J.bq,J.a9,J.at,J.ag,H.bw,W.af,W.bE,W.c5,W.a,W.bI])
s(J.bq,[J.ct,J.ak,J.aa])
t(J.dH,J.a9)
s(J.at,[J.bo,J.bn])
s(P.aj,[H.bd,W.cT])
s(P.a5,[H.bf,P.a8])
s(P.a8,[H.bb,P.ci,P.ch])
s(P.I,[H.cQ,H.F])
s(H.cQ,[H.bc,H.bH])
t(H.cS,H.bc)
t(H.cR,H.bH)
t(H.aJ,H.cR)
t(P.cq,P.Y)
s(P.cq,[H.aK,H.ab,P.d6])
s(H.aM,[H.c1,H.dy,H.cD,H.cd,H.dt,H.du,H.dv,P.cN,P.cM,P.cO,P.cP,P.di,P.cX,P.d0,P.cY,P.cZ,P.d_,P.d3,P.d4,P.d2,P.d1,P.cB,P.cC,P.dl,P.df,P.de,P.dg,P.co,P.cr,P.d8,P.db,W.cV,M.bS,M.bX,M.bY,M.bT,M.bU,M.bV,B.cw])
s(H.F,[H.aT,H.cm])
s(P.as,[H.cs,H.ce,H.cI,H.cG,H.c_,H.cv,P.bR,P.br,P.bx,P.ad,P.cJ,P.cH,P.bC,P.c2,P.c4])
s(H.cD,[H.cz,H.aH])
t(H.cL,P.bR)
t(H.bu,H.bw)
t(H.b0,H.bu)
t(H.b1,H.b0)
t(H.bv,H.b1)
t(H.bt,H.bv)
t(P.dd,P.dj)
t(P.d7,H.aT)
t(P.cg,P.br)
t(P.cf,P.bg)
t(P.d9,P.da)
s(P.b6,[P.B,P.N])
s(P.ad,[P.bz,P.c9])
t(W.J,W.af)
s(W.J,[W.aP,W.ae,W.aO])
s(W.aP,[W.d,P.f])
s(W.d,[W.bP,W.bQ,W.ar,W.c7,W.cx])
t(W.aN,W.bE)
t(W.bl,W.aO)
t(W.H,W.a)
t(W.aZ,W.H)
t(W.bJ,W.bI)
t(W.bF,W.bJ)
t(W.dL,W.cT)
t(W.cU,P.aV)
t(P.L,P.dc)
t(P.S,P.f)
s(P.S,[P.a4,P.ax,P.aX])
s(P.a4,[P.aL,P.ah,P.av,P.Z])
t(P.aY,P.aX)
t(P.a1,P.aY)
t(T.cp,T.ck)
u(H.bH,P.a0)
u(H.b0,P.a0)
u(H.b1,H.bj)
u(W.bE,W.c3)
u(W.bI,P.a0)
u(W.bJ,W.aS)})()
var v={mangledGlobalNames:{N:"int",B:"double",b6:"num",e:"String",aA:"bool",w:"Null",u:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.w},{func:1,ret:-1},{func:1,ret:P.B,args:[P.B]},{func:1,args:[,]},{func:1,ret:P.w,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.w,args:[,]},{func:1,ret:P.w,args:[W.H]},{func:1,ret:-1,args:[P.m]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.m],opt:[P.A]},{func:1,ret:P.w,args:[,],opt:[P.A]},{func:1,ret:[P.U,,],args:[,]},{func:1,ret:P.w,args:[P.e,,]},{func:1,args:[W.a]},{func:1,ret:[P.t,M.p,P.e]},{func:1,ret:P.w,args:[P.e,P.e]},{func:1,ret:-1,args:[P.e,P.e]}],interceptorsByTag:null,leafTags:null};(function constants(){C.e=W.bl.prototype
C.at=J.O.prototype
C.a=J.a9.prototype
C.k=J.bn.prototype
C.d=J.bo.prototype
C.l=J.at.prototype
C.b=J.ag.prototype
C.au=J.aa.prototype
C.m=H.bt.prototype
C.a3=J.ct.prototype
C.ax=P.av.prototype
C.al=P.Z.prototype
C.aD=P.ax.prototype
C.am=P.a1.prototype
C.J=J.ak.prototype
C.K=new M.p("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X")
C.L=new M.p("AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y")
C.o=new M.p("AxA.PHYS_X_START")
C.p=new M.p("AxA.PHYS_X_WIDTH")
C.q=new M.p("AxA.POSITION")
C.M=new M.p("AxA.STROKE")
C.N=new M.p("AxA.STROKE_WIDTH")
C.O=new M.p("AxA.TEXT_COLOR_X")
C.P=new M.p("AxA.TEXT_COLOR_Y")
C.i=new M.p("AxA.TICK_LENGTH")
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
C.c=new P.dd()
C.av=new P.ch(null)
C.aw=new P.ci(null)
C.W=new D.D("LegA.BG_COLOR")
C.X=new D.D("LegA.BG_OPACITY")
C.Y=new D.D("LegA.TEXT_COLOR")
C.y=new D.D("LegA.TOP_TITLE")
C.D=new D.D("LegA.SUB_TITLES")
C.Z=new D.D("LegA.BG_WIDTH")
C.a_=new D.D("LegA.BG_HEIGTH")
C.a0=new D.D("LegA.COLORED_RECT_WIDTH")
C.a1=new D.D("LegA.COLORED_RECT_HEIGHT")
C.E=new D.D("LegA.FONT_SIZE")
C.a2=new D.D("LegA.LINESEP")
C.F=new D.D("LegA.X")
C.G=new D.D("LegA.Y")
C.ay=new V.o("PyA.POINT_LIST")
C.az=new V.o("PyA.POINT_LIST_STROKE")
C.n=new V.o("PyA.REFYMAX")
C.a4=new V.o("PyA.ROTATE")
C.a5=new V.o("PyA.SELECTION_ICON_WIDTH")
C.a6=new V.o("PyA.SELECTION_ICON_OUTSIDE")
C.aA=new V.o("PyA.SHOW_LEGEND")
C.f=new V.o("PyA.STROKE")
C.a7=new V.o("PyA.STROKE_WIDTH")
C.a8=new V.o("PyA.COMPRESSION_LENGTH")
C.aB=new V.o("PyA.STROKE_WIDTH_HILITE")
C.a9=new V.o("PyA.XSCALE")
C.aa=new V.o("PyA.XSHIFT")
C.ab=new V.o("PyA.YIX1")
C.ac=new V.o("PyA.YSCALE")
C.ad=new V.o("PyA.YSCALE2")
C.ae=new V.o("PyA.YSHIFT1")
C.af=new V.o("PyA.YSHIFT2")
C.h=new V.o("PyA.YPOSITION_ZERO")
C.aC=new V.o("PyA.YPOSITION_ZERO_RESET")
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
$.dr=null
$.dw=null
$.dU=null
$.ay=null
$.b2=null
$.b3=null
$.dO=!1
$.y=C.c
$.P=[]
$.dA=P.v([C.j,"18",C.K,"50",C.L,"10",C.A,"2",C.w,"",C.B,"20",C.C,"30",C.R,"30",C.S,'{"100":"2", "200":"4", "300":"8", "400":"10", "500":"10", "600":"10", "700":"10"}',C.T,'{"100":"7", "200":"7", "300":"12", "400":"12", "500":"12", "600":"12", "700":"12"}',C.q,"bg",C.M,"black",C.N,"1",C.O,"black",C.P,"black",C.i,"6",C.Q,"bt",C.r,"#A9A9A9",C.t,"1.0",C.u,"0.3",C.v,"0,0"],M.p,P.e)
$.fE=P.v([C.r,"#A9A9A9",C.t,"1.0",C.u,"0.3",C.v,"0,0"],M.p,P.e)
$.ee=P.v([C.W,"lightgrey",C.X,"0.2",C.Z,"0",C.a_,"100",C.a0,"20",C.a1,"12",C.E,"16",C.a2,"4",C.F,"12",C.G,"12",C.Y,"black",C.y,""],D.D,P.e)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"hk","eO",function(){return H.eD("_$dart_dartClosure")})
u($,"hl","dX",function(){return H.eD("_$dart_js")})
u($,"ho","eP",function(){return H.a6(H.cF({
toString:function(){return"$receiver$"}}))})
u($,"hp","eQ",function(){return H.a6(H.cF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"hq","eR",function(){return H.a6(H.cF(null))})
u($,"hr","eS",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hu","eV",function(){return H.a6(H.cF(void 0))})
u($,"hv","eW",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ht","eU",function(){return H.a6(H.ek(null))})
u($,"hs","eT",function(){return H.a6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"hx","eY",function(){return H.a6(H.ek(void 0))})
u($,"hw","eX",function(){return H.a6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"hz","dY",function(){return P.fF()})
u($,"hm","dz",function(){return P.v([C.a8,"1024",C.ag,"true",C.ah,"false",C.ai,"16",C.aj,"12",C.ak,"16",C.n,"null",C.a5,"16",C.a6,"false",C.aA,"true",C.f,"blue",C.a7,"1",C.aB,"2",C.a9,"1.0",C.aa,"0",C.ab,"0.0",C.ac,"1",C.ae,"0",C.af,"0",C.h,"0.9",C.aC,"0.9"],V.o,P.e)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.O,MediaError:J.O,Navigator:J.O,NavigatorConcurrentHardware:J.O,NavigatorUserMediaError:J.O,OverconstrainedError:J.O,PositionError:J.O,SQLError:J.O,ArrayBufferView:H.bw,Float64Array:H.bt,HTMLAudioElement:W.d,HTMLBRElement:W.d,HTMLBaseElement:W.d,HTMLBodyElement:W.d,HTMLButtonElement:W.d,HTMLCanvasElement:W.d,HTMLContentElement:W.d,HTMLDListElement:W.d,HTMLDataElement:W.d,HTMLDataListElement:W.d,HTMLDetailsElement:W.d,HTMLDialogElement:W.d,HTMLEmbedElement:W.d,HTMLFieldSetElement:W.d,HTMLHRElement:W.d,HTMLHeadElement:W.d,HTMLHeadingElement:W.d,HTMLHtmlElement:W.d,HTMLIFrameElement:W.d,HTMLImageElement:W.d,HTMLInputElement:W.d,HTMLLIElement:W.d,HTMLLabelElement:W.d,HTMLLegendElement:W.d,HTMLLinkElement:W.d,HTMLMapElement:W.d,HTMLMediaElement:W.d,HTMLMenuElement:W.d,HTMLMetaElement:W.d,HTMLMeterElement:W.d,HTMLModElement:W.d,HTMLOListElement:W.d,HTMLObjectElement:W.d,HTMLOptGroupElement:W.d,HTMLOptionElement:W.d,HTMLOutputElement:W.d,HTMLParagraphElement:W.d,HTMLParamElement:W.d,HTMLPictureElement:W.d,HTMLPreElement:W.d,HTMLProgressElement:W.d,HTMLQuoteElement:W.d,HTMLScriptElement:W.d,HTMLShadowElement:W.d,HTMLSlotElement:W.d,HTMLSourceElement:W.d,HTMLSpanElement:W.d,HTMLStyleElement:W.d,HTMLTableCaptionElement:W.d,HTMLTableCellElement:W.d,HTMLTableDataCellElement:W.d,HTMLTableHeaderCellElement:W.d,HTMLTableColElement:W.d,HTMLTableElement:W.d,HTMLTableRowElement:W.d,HTMLTableSectionElement:W.d,HTMLTemplateElement:W.d,HTMLTextAreaElement:W.d,HTMLTimeElement:W.d,HTMLTitleElement:W.d,HTMLTrackElement:W.d,HTMLUListElement:W.d,HTMLUnknownElement:W.d,HTMLVideoElement:W.d,HTMLDirectoryElement:W.d,HTMLFontElement:W.d,HTMLFrameElement:W.d,HTMLFrameSetElement:W.d,HTMLMarqueeElement:W.d,HTMLElement:W.d,HTMLAnchorElement:W.bP,HTMLAreaElement:W.bQ,CDATASection:W.ae,CharacterData:W.ae,Comment:W.ae,ProcessingInstruction:W.ae,Text:W.ae,CSSStyleDeclaration:W.aN,MSStyleCSSProperties:W.aN,CSS2Properties:W.aN,HTMLDivElement:W.ar,XMLDocument:W.aO,Document:W.aO,DOMException:W.c5,Element:W.aP,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,Window:W.af,DOMWindow:W.af,EventTarget:W.af,HTMLFormElement:W.c7,HTMLDocument:W.bl,DocumentFragment:W.J,ShadowRoot:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,HTMLSelectElement:W.cx,TouchEvent:W.aZ,CompositionEvent:W.H,FocusEvent:W.H,KeyboardEvent:W.H,MouseEvent:W.H,DragEvent:W.H,PointerEvent:W.H,TextEvent:W.H,WheelEvent:W.H,UIEvent:W.H,NamedNodeMap:W.bF,MozNamedAttrMap:W.bF,SVGCircleElement:P.aL,SVGEllipseElement:P.a4,SVGPathElement:P.a4,SVGPolygonElement:P.a4,SVGGeometryElement:P.a4,SVGAElement:P.S,SVGClipPathElement:P.S,SVGDefsElement:P.S,SVGForeignObjectElement:P.S,SVGGElement:P.S,SVGImageElement:P.S,SVGSwitchElement:P.S,SVGUseElement:P.S,SVGGraphicsElement:P.S,SVGLineElement:P.ah,SVGPolylineElement:P.av,SVGRectElement:P.Z,SVGAnimateElement:P.f,SVGAnimateMotionElement:P.f,SVGAnimateTransformElement:P.f,SVGAnimationElement:P.f,SVGDescElement:P.f,SVGDiscardElement:P.f,SVGFEBlendElement:P.f,SVGFEColorMatrixElement:P.f,SVGFEComponentTransferElement:P.f,SVGFECompositeElement:P.f,SVGFEConvolveMatrixElement:P.f,SVGFEDiffuseLightingElement:P.f,SVGFEDisplacementMapElement:P.f,SVGFEDistantLightElement:P.f,SVGFEFloodElement:P.f,SVGFEFuncAElement:P.f,SVGFEFuncBElement:P.f,SVGFEFuncGElement:P.f,SVGFEFuncRElement:P.f,SVGFEGaussianBlurElement:P.f,SVGFEImageElement:P.f,SVGFEMergeElement:P.f,SVGFEMergeNodeElement:P.f,SVGFEMorphologyElement:P.f,SVGFEOffsetElement:P.f,SVGFEPointLightElement:P.f,SVGFESpecularLightingElement:P.f,SVGFESpotLightElement:P.f,SVGFETileElement:P.f,SVGFETurbulenceElement:P.f,SVGFilterElement:P.f,SVGLinearGradientElement:P.f,SVGMarkerElement:P.f,SVGMaskElement:P.f,SVGMetadataElement:P.f,SVGPatternElement:P.f,SVGRadialGradientElement:P.f,SVGScriptElement:P.f,SVGSetElement:P.f,SVGStopElement:P.f,SVGStyleElement:P.f,SVGSymbolElement:P.f,SVGTitleElement:P.f,SVGViewElement:P.f,SVGGradientElement:P.f,SVGComponentTransferFunctionElement:P.f,SVGFEDropShadowElement:P.f,SVGMPathElement:P.f,SVGElement:P.f,SVGSVGElement:P.ax,SVGTextPathElement:P.aX,SVGTextContentElement:P.aX,SVGTextElement:P.a1,SVGTSpanElement:P.aY,SVGTextPositioningElement:P.aY})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Float64Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGCircleElement:true,SVGEllipseElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGImageElement:true,SVGSwitchElement:true,SVGUseElement:true,SVGGraphicsElement:false,SVGLineElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPatternElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTextElement:true,SVGTSpanElement:true,SVGTextPositioningElement:false})
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.b0.$nativeSuperclassTag="ArrayBufferView"
H.b1.$nativeSuperclassTag="ArrayBufferView"
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
