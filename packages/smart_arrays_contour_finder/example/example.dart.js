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
a[c]=function(){a[c]=function(){H.d1(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bu(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={bk:function bk(){},ax:function ax(){},U:function U(){},ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},a7:function a7(){},
a2:function(a){var u,t=H.d2(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
cO:function(a){return v.types[H.a0(a)]},
dn:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.o(a).$ibl},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.an(a)
if(typeof u!=="string")throw H.f(H.bt(a))
return u},
W:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ag:function(a){return H.cA(a)+H.bs(H.E(a),0,null)},
cA:function(a){var u,t,s,r,q,p,o,n=J.o(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.w||!!n.$iaj){r=C.f(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.a2(t.length>1&&C.d.a5(t,0)===36?C.d.a_(t,1):t)},
n:function(a){throw H.f(H.bt(a))},
d:function(a,b){if(a==null)J.bg(a)
throw H.f(H.am(a,b))},
am:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.A(!0,b,s,null)
u=J.bg(a)
if(!(b<0)){if(typeof u!=="number")return H.n(u)
t=b>=u}else t=!0
if(t)return P.bG(b,a,s,null,u)
return P.bo(b,s)},
bt:function(a){return new P.A(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.aS()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.c4})
u.name=""}else u.toString=H.c4
return u},
c4:function(){return J.an(this.dartException)},
c3:function(a){throw H.f(a)},
d0:function(a){throw H.f(P.a5(a))},
w:function(a){var u,t,s,r,q,p
a=H.cZ(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.b_(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
b0:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
bN:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
bL:function(a,b){return new H.aR(a,b==null?null:b.method)},
bm:function(a,b){var u=b==null,t=u?null:b.method
return new H.aF(a,t,u?null:b.receiver)},
d3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.be(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.x.a9(t,16)&8191)===10)switch(s){case 438:return f.$1(H.bm(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.bL(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.c6()
q=$.c7()
p=$.c8()
o=$.c9()
n=$.cc()
m=$.cd()
l=$.cb()
$.ca()
k=$.cf()
j=$.ce()
i=r.u(u)
if(i!=null)return f.$1(H.bm(H.F(u),i))
else{i=q.u(u)
if(i!=null){i.method="call"
return f.$1(H.bm(H.F(u),i))}else{i=p.u(u)
if(i==null){i=o.u(u)
if(i==null){i=n.u(u)
if(i==null){i=m.u(u)
if(i==null){i=l.u(u)
if(i==null){i=o.u(u)
if(i==null){i=k.u(u)
if(i==null){i=j.u(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.bL(H.F(u),i))}}return f.$1(new H.b3(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ai()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.A(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ai()
return a},
cL:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
cq:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.aX().constructor.prototype):Object.create(new H.N(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.u
if(typeof t!=="number")return t.p()
$.u=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.bE(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.cm(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.bE(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
cm:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.cO,a)
if(typeof a=="function")if(b)return a
else{u=c?H.bD:H.bh
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
cn:function(a,b,c,d){var u=H.bh
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
bE:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cp(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cn(t,!r,u,b)
if(t===0){r=$.u
if(typeof r!=="number")return r.p()
$.u=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.O
return new Function(r+H.e(q==null?$.O=H.aq("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.u
if(typeof r!=="number")return r.p()
$.u=r+1
o+=r
r="return function("+o+"){return this."
q=$.O
return new Function(r+H.e(q==null?$.O=H.aq("self"):q)+"."+H.e(u)+"("+o+");}")()},
co:function(a,b,c,d){var u=H.bh,t=H.bD
switch(b?-1:a){case 0:throw H.f(new H.aU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cp:function(a,b){var u,t,s,r,q,p,o,n=$.O
if(n==null)n=$.O=H.aq("self")
u=$.bC
if(u==null)u=$.bC=H.aq("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.co(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.u
if(typeof u!=="number")return u.p()
$.u=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.u
if(typeof u!=="number")return u.p()
$.u=u+1
return new Function(n+u+"}")()},
bu:function(a,b,c,d,e,f,g){return H.cq(a,b,c,d,!!e,!!f,g)},
bh:function(a){return a.a},
bD:function(a){return a.c},
aq:function(a){var u,t,s,r=new H.N("self","target","receiver","name"),q=J.bI(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.x(a,"String"))},
dl:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.x(a,"double"))},
dp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.x(a,"num"))},
di:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.x(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.x(a,"int"))},
c1:function(a,b){throw H.f(H.x(a,H.a2(H.F(b).substring(2))))},
bY:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.o(a)[b])return a
H.c1(a,b)},
cU:function(a){if(a==null)return a
if(!!J.o(a).$ii)return a
throw H.f(H.x(a,"List<dynamic>"))},
cT:function(a,b){var u
if(a==null)return a
u=J.o(a)
if(!!u.$ii)return a
if(u[b])return a
H.c1(a,b)},
bT:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
bU:function(a,b){var u
if(typeof a=="function")return!0
u=H.bT(J.o(a))
if(u==null)return!1
return H.bP(u,null,b,null)},
bv:function(a,b){var u,t
if(a==null)return a
if($.bq)return a
$.bq=!0
try{if(H.bU(a,b))return a
u=H.bA(b)
t=H.x(a,u)
throw H.f(t)}finally{$.bq=!1}},
x:function(a,b){return new H.b1("TypeError: "+P.bi(a)+": type '"+H.e(H.cH(a))+"' is not a subtype of type '"+b+"'")},
cH:function(a){var u,t=J.o(a)
if(!!t.$iQ){u=H.bT(t)
if(u!=null)return H.bA(u)
return"Closure"}return H.ag(a)},
d1:function(a){throw H.f(new P.av(a))},
bW:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
E:function(a){if(a==null)return
return a.$ti},
dm:function(a,b,c){return H.M(a["$a"+H.e(c)],H.E(b))},
cN:function(a,b,c,d){var u=H.M(a["$a"+H.e(c)],H.E(b))
return u==null?null:u[d]},
bx:function(a,b,c){var u=H.M(a["$a"+H.e(b)],H.E(a))
return u==null?null:u[c]},
m:function(a,b){var u=H.E(a)
return u==null?null:u[b]},
bA:function(a){return H.D(a,null)},
D:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.a2(a[0].name)+H.bs(a,1,b)
if(typeof a=="function")return H.a2(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.cE(a,b)
if('futureOr' in a)return"FutureOr<"+H.D("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
cE:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.q(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.d.p(p,a0[m])
l=u[q]
if(l!=null&&l!==P.l)p+=" extends "+H.D(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.D(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.D(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.D(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.cK(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.F(n[g])
i=i+h+H.D(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
bs:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.X("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.D(p,c)}return"<"+u.h(0)+">"},
M:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cJ:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.E(a)
t=J.o(a)
if(t[b]==null)return!1
return H.bR(H.M(t[d],u),null,c,null)},
a_:function(a,b,c,d){if(a==null)return a
if(H.cJ(a,b,c,d))return a
throw H.f(H.x(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.a2(b.substring(2))+H.bs(c,0,null),v.mangledGlobalNames)))},
bR:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.r(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.r(a[t],b,c[t],d))return!1
return!0},
dj:function(a,b,c){return a.apply(b,H.M(J.o(b)["$a"+H.e(c)],H.E(b)))},
bZ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="l"||a.name==="y"||a===-1||a===-2||H.bZ(u)}return!1},
bS:function(a,b){var u,t
if(a==null)return b==null||b.name==="l"||b.name==="y"||b===-1||b===-2||H.bZ(b)
if(b==null||b===-1||b.name==="l"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bU(a,b)}u=J.o(a).constructor
t=H.E(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.r(u,null,b,null)},
t:function(a,b){if(a!=null&&!H.bS(a,b))throw H.f(H.x(a,H.bA(b)))
return a},
r:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="l"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="l"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.r(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="y")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.r("type" in a?a.type:l,b,s,d)
else if(H.r(a,b,s,d))return!0
else{if(!('$i'+"cs" in t.prototype))return!1
r=t.prototype["$a"+"cs"]
q=H.M(r,u?a.slice(1):l)
return H.r(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.bP(a,b,c,d)
if('func' in a)return c.name==="bF"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.bR(H.M(m,u),b,p,d)},
bP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.r(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.r(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.r(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.r(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.cY(h,b,g,d)},
cY:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.r(c[s],d,a[s],b))return!1}return!0},
dk:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
cV:function(a){var u,t,s,r,q=H.F($.bX.$1(a)),p=$.b8[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bc[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.F($.bQ.$2(a,q))
if(q!=null){p=$.b8[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bc[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bd(u)
$.b8[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bc[q]=u
return u}if(s==="-"){r=H.bd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.c0(a,u)
if(s==="*")throw H.f(P.bO(q))
if(v.leafTags[q]===true){r=H.bd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.c0(a,u)},
c0:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.bz(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bd:function(a){return J.bz(a,!1,null,!!a.$ibl)},
cW:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bd(u)
else return J.bz(u,c,null,null)},
cQ:function(){if(!0===$.by)return
$.by=!0
H.cR()},
cR:function(){var u,t,s,r,q,p,o,n
$.b8=Object.create(null)
$.bc=Object.create(null)
H.cP()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.c2.$1(q)
if(p!=null){o=H.cW(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
cP:function(){var u,t,s,r,q,p,o=C.n()
o=H.L(C.o,H.L(C.p,H.L(C.h,H.L(C.h,H.L(C.q,H.L(C.r,H.L(C.t(C.f),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.bX=new H.b9(r)
$.bQ=new H.ba(q)
$.c2=new H.bb(p)},
L:function(a,b){return a(b)||b},
cZ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
b_:function b_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aR:function aR(a,b){this.a=a
this.b=b},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a){this.a=a},
be:function be(a){this.a=a},
Q:function Q(){},
aZ:function aZ(){},
aX:function aX(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a){this.a=a},
aU:function aU(a){this.a=a},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aJ:function aJ(a,b){this.a=a
this.b=b
this.c=null},
ab:function ab(a,b){this.a=a
this.$ti=b},
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
b9:function b9(a){this.a=a},
ba:function ba(a){this.a=a},
bb:function bb(a){this.a=a},
cD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.am(b,a))},
af:function af(){},
ad:function ad(){},
ae:function ae(){},
aQ:function aQ(){},
Y:function Y(){},
Z:function Z(){},
cK:function(a){return J.cu(a?Object.keys(a):[],null)},
d2:function(a){return v.mangledGlobalNames[a]}},J={
bz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bw:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.by==null){H.cQ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.bO("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.bB()]
if(r!=null)return r
r=H.cV(a)
if(r!=null)return r
if(typeof a=="function")return C.y
u=Object.getPrototypeOf(a)
if(u==null)return C.m
if(u===Object.prototype)return C.m
if(typeof s=="function"){Object.defineProperty(s,$.bB(),{value:C.e,enumerable:false,writable:true,configurable:true})
return C.e}return C.e},
cu:function(a,b){return J.bI(H.c(a,[b]))},
bI:function(a){a.fixed$length=Array
return a},
o:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a8.prototype
return J.aC.prototype}if(typeof a=="string")return J.T.prototype
if(a==null)return J.aD.prototype
if(typeof a=="boolean")return J.aB.prototype
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.l)return a
return J.bw(a)},
bV:function(a){if(typeof a=="string")return J.T.prototype
if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.l)return a
return J.bw(a)},
cM:function(a){if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.l)return a
return J.bw(a)},
a3:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).C(a,b)},
bf:function(a){return J.o(a).gl(a)},
ch:function(a){return J.cM(a).gt(a)},
bg:function(a){return J.bV(a).gi(a)},
an:function(a){return J.o(a).h(a)},
h:function h(){},
aB:function aB(){},
aD:function aD(){},
aa:function aa(){},
aT:function aT(){},
aj:function aj(){},
I:function I(){},
C:function C(a){this.$ti=a},
bj:function bj(a){this.$ti=a},
a4:function a4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a9:function a9(){},
a8:function a8(){},
aC:function aC(){},
T:function T(){}},P={aY:function aY(){},
cv:function(a,b,c){return H.a_(H.cL(a,new H.aE([b,c])),"$ibJ",[b,c],"$abJ")},
ct:function(a,b,c){var u,t
if(P.br(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
C.a.q($.p,a)
try{P.cF(a,u)}finally{if(0>=$.p.length)return H.d($.p,-1)
$.p.pop()}t=P.bM(b,H.cT(u,"$iq"),", ")+c
return t.charCodeAt(0)==0?t:t},
bH:function(a,b,c){var u,t
if(P.br(a))return b+"..."+c
u=new P.X(b)
C.a.q($.p,a)
try{t=u
t.a=P.bM(t.a,a,", ")}finally{if(0>=$.p.length)return H.d($.p,-1)
$.p.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
br:function(a){var u,t
for(u=$.p.length,t=0;t<u;++t)if(a===$.p[t])return!0
return!1},
cF:function(a,b){var u,t,s,r,q,p,o,n=a.gt(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.m())return
u=H.e(n.gn())
C.a.q(b,u)
m+=u.length+2;++l}if(!n.m()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gn();++l
if(!n.m()){if(l<=4){C.a.q(b,H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gn();++l
for(;n.m();r=q,q=p){p=n.gn();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}C.a.q(b,"...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.q(b,o)
C.a.q(b,s)
C.a.q(b,t)},
bK:function(a){var u,t={}
if(P.br(a))return"{...}"
u=new P.X("")
try{C.a.q($.p,a)
u.a+="{"
t.a=!0
a.F(0,new P.aO(t,u))
u.a+="}"}finally{if(0>=$.p.length)return H.d($.p,-1)
$.p.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
V:function V(){},
aN:function aN(){},
aO:function aO(a,b){this.a=a
this.b=b},
J:function J(){},
cG:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.f(H.bt(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.d3(s)
r=String(t)
throw H.f(new P.az(r))}r=P.b7(u)
return r},
b7:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.b5(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.b7(a[u])
return a},
b5:function b5(a,b){this.a=a
this.b=b
this.c=null},
b6:function b6(a){this.a=a},
ar:function ar(){},
a6:function a6(){},
aG:function aG(){},
aH:function aH(a){this.a=a},
cr:function(a){if(a instanceof H.Q)return a.h(0)
return"Instance of '"+H.e(H.ag(a))+"'"},
bM:function(a,b,c){var u=J.ch(b)
if(!u.m())return a
if(c.length===0){do a+=H.e(u.gn())
while(u.m())}else{a+=H.e(u.gn())
for(;u.m();)a=a+c+H.e(u.gn())}return a},
bi:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.an(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cr(a)},
ci:function(a,b,c){return new P.A(!0,a,b,c)},
bo:function(a,b){return new P.ah(null,null,!0,a,b,"Value not in range")},
cB:function(a,b,c,d,e){return new P.ah(b,c,!0,a,d,"Invalid value")},
cC:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.f(P.cB(a,0,null,b,null))},
bG:function(a,b,c,d,e){var u=e==null?J.bg(b):e
return new P.aA(u,!0,a,c,"Index out of range")},
bp:function(a){return new P.b4(a)},
bO:function(a){return new P.b2(a)},
a5:function(a){return new P.as(a)},
al:function al(){},
j:function j(){},
S:function S(){},
aS:function aS(){},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aA:function aA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b4:function b4(a){this.a=a},
b2:function b2(a){this.a=a},
as:function as(a){this.a=a},
ai:function ai(){},
av:function av(a){this.a=a},
az:function az(a){this.a=a},
z:function z(){},
q:function q(){},
i:function i(){},
y:function y(){},
a1:function a1(){},
l:function l(){},
k:function k(){},
X:function X(a){this.a=a},
B:function B(){}},W={b:function b(){},ao:function ao(){},ap:function ap(){},G:function G(){},P:function P(){},R:function R(){},au:function au(){},aw:function aw(){},a:function a(){},H:function H(){},ay:function ay(){},K:function K(){},aV:function aV(){},ak:function ak(){}},M={
cl:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.length
for(u=17976931348623157e292,t=-1,s=null,r=0;r<k;++r){q=E.ck(a[r])
p=q[0]
if(p<u){t=H.a0(q[1])
s=r
u=p}}for(o=-17976931348623157e292,n=-1,m=null,r=0;r<k;++r){q=E.cj(a[r])
l=q[0]
if(l>o){n=H.a0(q[1])
m=r
o=l}}return new M.aP(u,o)},
aP:function aP(a,b){this.a=a
this.b=b}},N={at:function at(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},V={aW:function aW(a,b,c,d,e,f){var _=this
_.a=null
_.b=a
_.f=_.e=_.d=_.c=null
_.r=b
_.x=c
_.y=d
_.z=e
_.Q=null
_.ch=f},v:function v(a){this.b=a}},T={
cw:function(a,b,c,d,e,f){var u=new T.aL(4*Math.log(2),b,c,d,a,e,f)
u.a3(a,b,c,d,e,f)
return u},
cz:function(a,b,c,d,e,f){var u,t,s,r,q,p,o=T.cw(b,c,d,e,null,null),n=a[0],m=a[1],l=new Array(n)
l.fixed$length=Array
u=H.c(l,[P.B])
for(l=[P.j],t=0;t<n;++t){s=new Float64Array(m)
for(r=s.length,q=0;q<m;++q){p=o.Y(H.c([t,q],l))
if(q>=r)return H.d(s,q)
s[q]=p}C.a.j(u,t,s)}return u},
aL:function aL(a,b,c,d,e,f,g){var _=this
_.e=a
_.r=b
_.x=c
_.y=d
_.z=e
_.Q=null
_.ch=0
_.cx=f
_.cy=g},
aI:function aI(){}},B={
cx:function(a,b,c,d,e){var u=new B.aM()
u.a4(a,b,c,d,e,null)
return u},
cy:function(a,b){var u,t,s,r,q,p,o
for(u=a.length,t=b.length,s=0;s<u;++s)for(r=0;r<a[0].length;++r){q=a[s]
if(r>=q.length)return H.d(q,r)
p=q[r]
if(s>=t)return H.d(b,s)
o=b[s]
if(r>=o.length)return H.d(o,r)
q[r]=p+o[r]}return a},
aM:function aM(){this.c=this.b=this.a=null}},E={
cj:function(a){var u,t,s,r,q,p=-17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q>t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]},
ck:function(a){var u,t,s,r,q,p=17976931348623157e292
if(a!=null)for(u=a.length,t=p,s=-1,r=0;r<u;++r){q=a[r]
if(q<t){t=a[r]
s=r}}else{t=p
s=-1}return[t,s]}},U={
c_:function(){var u,t,s,r,q,p,o,n,m,l="absolute",k="transparent",j=B.cx($.d_,$.cg(),$.cI,$.cS,$.cX),i=M.cl(j.a),h=i.a,g=Math.abs(i.b-h)/15,f=new Float64Array(16)
for(u=f.length,t=0;t<16;++t){if(t>=u)return H.d(f,t)
f[t]=(h+t*g)*0.98}s=H.bY(document.getElementById("contour_canvas"),"$iG")
h=s.style
h.position=l
h.backgroundColor=k
h=s.width
r=s.height
q=P.cv([C.j,"rgb(0, 0, 255)",C.k,"rgb(255, 0, 255)",C.b,"true"],V.v,P.k)
p=new V.aW(s,h,r,0,0,q)
p.saa(q)
h=s.style
h.position=l
h.backgroundColor=k
p.a=H.bY((s&&C.v).X(s,"2d"),"$iP")
h=new Array(5)
h.fixed$length=Array
r=[P.j]
h=H.c(h,r)
q=new Array(5)
q.fixed$length=Array
q=H.c(q,[P.z])
o=new Array(5)
o.fixed$length=Array
o=H.c(o,r)
n=new Array(5)
n.fixed$length=Array
r=H.c(n,r)
n=j.a
m=n.length
if(0>=m)return H.d(n,0)
new N.at(h,q,o,r,p).ae(n,0,m-1,0,n[0].length-1,j.c,j.b,u,f)}}
var w=[C,H,J,P,W,M,N,V,T,B,E,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bk.prototype={}
J.h.prototype={
C:function(a,b){return a===b},
gl:function(a){return H.W(a)},
h:function(a){return"Instance of '"+H.e(H.ag(a))+"'"}}
J.aB.prototype={
h:function(a){return String(a)},
gl:function(a){return a?519018:218159},
$ial:1}
J.aD.prototype={
C:function(a,b){return null==b},
h:function(a){return"null"},
gl:function(a){return 0}}
J.aa.prototype={
gl:function(a){return 0},
h:function(a){return String(a)}}
J.aT.prototype={}
J.aj.prototype={}
J.I.prototype={
h:function(a){var u=a[$.c5()]
if(u==null)return this.a2(a)
return"JavaScript function for "+H.e(J.an(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibF:1}
J.C.prototype={
q:function(a,b){H.t(b,H.m(a,0))
if(!!a.fixed$length)H.c3(P.bp("add"))
a.push(b)},
h:function(a){return P.bH(a,"[","]")},
gt:function(a){return new J.a4(a,a.length,[H.m(a,0)])},
gl:function(a){return H.W(a)},
gi:function(a){return a.length},
k:function(a,b){if(b>=a.length||b<0)throw H.f(H.am(a,b))
return a[b]},
j:function(a,b,c){H.t(c,H.m(a,0))
if(!!a.immutable$list)H.c3(P.bp("indexed set"))
if(b>=a.length||b<0)throw H.f(H.am(a,b))
a[b]=c},
$iq:1,
$ii:1}
J.bj.prototype={}
J.a4.prototype={
gn:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.d0(s))
u=t.c
if(u>=r){t.sU(null)
return!1}t.sU(s[u]);++t.c
return!0},
sU:function(a){this.d=H.t(a,H.m(this,0))}}
J.a9.prototype={
G:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.bp(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
a9:function(a,b){var u
if(a>0)u=this.a8(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
a8:function(a,b){return b>31?0:a>>>b},
$ij:1,
$ia1:1}
J.a8.prototype={$iz:1}
J.aC.prototype={}
J.T.prototype={
a5:function(a,b){if(b>=a.length)throw H.f(H.am(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.f(P.ci(b,null,null))
return a+b},
a0:function(a,b,c){c=a.length
if(b>c)throw H.f(P.bo(b,null))
if(c>c)throw H.f(P.bo(c,null))
return a.substring(b,c)},
a_:function(a,b){return this.a0(a,b,null)},
h:function(a){return a},
gl:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gi:function(a){return a.length},
$ik:1}
H.ax.prototype={}
H.U.prototype={
gt:function(a){var u=this
return new H.ac(u,u.gi(u),[H.bx(u,"U",0)])}}
H.ac.prototype={
gn:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=J.bV(s),q=r.gi(s)
if(t.b!==q)throw H.f(P.a5(s))
u=t.c
if(u>=q){t.sR(null)
return!1}t.sR(r.E(s,u));++t.c
return!0},
sR:function(a){this.d=H.t(a,H.m(this,0))}}
H.a7.prototype={}
H.b_.prototype={
u:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.aR.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aF.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.b3.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.be.prototype={
$1:function(a){if(!!J.o(a).$iS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:0}
H.Q.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibF:1,
gah:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aZ.prototype={}
H.aX.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.a2(u)+"'"}}
H.N.prototype={
C:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.N))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gl:function(a){var u,t=this.c
if(t==null)u=H.W(this.a)
else u=typeof t!=="object"?J.bf(t):H.W(t)
return(u^H.W(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ag(u))+"'")}}
H.b1.prototype={
h:function(a){return this.a}}
H.aU.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aE.prototype={
gi:function(a){return this.a},
gB:function(){return new H.ab(this,[H.m(this,0)])},
k:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.L(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.L(r,b)
s=t==null?null:t.b
return s}else return q.af(b)},
af:function(a){var u,t,s=this.d
if(s==null)return
u=this.V(s,J.bf(a)&0x3ffffff)
t=this.W(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s,r,q,p,o=this
H.t(b,H.m(o,0))
H.t(c,H.m(o,1))
if(typeof b==="string"){u=o.b
o.T(u==null?o.b=o.N():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.T(t==null?o.c=o.N():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.N()
r=J.bf(b)&0x3ffffff
q=o.V(s,r)
if(q==null)o.P(s,r,[o.O(b,c)])
else{p=o.W(q,b)
if(p>=0)q[p].b=c
else q.push(o.O(b,c))}}},
F:function(a,b){var u,t,s=this
H.bv(b,{func:1,ret:-1,args:[H.m(s,0),H.m(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.a5(s))
u=u.c}},
T:function(a,b,c){var u,t=this
H.t(b,H.m(t,0))
H.t(c,H.m(t,1))
u=t.L(a,b)
if(u==null)t.P(a,b,t.O(b,c))
else u.b=c},
O:function(a,b){var u=this,t=new H.aJ(H.t(a,H.m(u,0)),H.t(b,H.m(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
W:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a3(a[t].a,b))return t
return-1},
h:function(a){return P.bK(this)},
L:function(a,b){return a[b]},
V:function(a,b){return a[b]},
P:function(a,b,c){a[b]=c},
a6:function(a,b){delete a[b]},
N:function(){var u="<non-identifier-key>",t=Object.create(null)
this.P(t,u,t)
this.a6(t,u)
return t},
$ibJ:1}
H.aJ.prototype={}
H.ab.prototype={
gi:function(a){return this.a.a},
gt:function(a){var u=this.a,t=new H.aK(u,u.r,this.$ti)
t.c=u.e
return t}}
H.aK.prototype={
gn:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.a5(t))
else{t=u.c
if(t==null){u.sS(null)
return!1}else{u.sS(t.a)
u.c=u.c.c
return!0}}},
sS:function(a){this.d=H.t(a,H.m(this,0))}}
H.b9.prototype={
$1:function(a){return this.a(a)},
$S:0}
H.ba.prototype={
$2:function(a,b){return this.a(a,b)},
$S:1}
H.bb.prototype={
$1:function(a){return this.a(H.F(a))}}
H.af.prototype={}
H.ad.prototype={
gi:function(a){return a.length},
$ibl:1,
$abl:function(){}}
H.ae.prototype={
k:function(a,b){H.cD(b,a,a.length)
return a[b]},
$aa7:function(){return[P.j]},
$aV:function(){return[P.j]},
$iq:1,
$aq:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]}}
H.aQ.prototype={$iB:1}
H.Y.prototype={}
H.Z.prototype={}
P.aY.prototype={}
P.V.prototype={
gt:function(a){return new H.ac(a,a.length,[H.cN(this,a,"V",0)])},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
h:function(a){return P.bH(a,"[","]")}}
P.aN.prototype={}
P.aO.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:2}
P.J.prototype={
F:function(a,b){var u,t,s=this
H.bv(b,{func:1,ret:-1,args:[H.bx(s,"J",0),H.bx(s,"J",1)]})
for(u=s.gB(),u=u.gt(u);u.m();){t=u.gn()
b.$2(t,s.k(0,t))}},
gi:function(a){var u=this.gB()
return u.gi(u)},
h:function(a){return P.bK(this)},
$ibn:1}
P.b5.prototype={
k:function(a,b){var u,t=this.b
if(t==null)return this.c.k(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.a7(b):u}},
gi:function(a){return this.b==null?this.c.a:this.D().length},
gB:function(){if(this.b==null){var u=this.c
return new H.ab(u,[H.m(u,0)])}return new P.b6(this)},
F:function(a,b){var u,t,s,r,q=this
H.bv(b,{func:1,ret:-1,args:[P.k,,]})
if(q.b==null)return q.c.F(0,b)
u=q.D()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.b7(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.f(P.a5(q))}},
D:function(){var u=H.cU(this.c)
if(u==null)u=this.c=H.c(Object.keys(this.a),[P.k])
return u},
a7:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.b7(this.a[a])
return this.b[a]=u},
$aJ:function(){return[P.k,null]},
$abn:function(){return[P.k,null]}}
P.b6.prototype={
gi:function(a){var u=this.a
return u.gi(u)},
E:function(a,b){var u=this.a
if(u.b==null)u=u.gB().E(0,b)
else{u=u.D()
if(b<0||b>=u.length)return H.d(u,b)
u=u[b]}return u},
gt:function(a){var u=this.a
if(u.b==null){u=u.gB()
u=u.gt(u)}else{u=u.D()
u=new J.a4(u,u.length,[H.m(u,0)])}return u},
$aU:function(){return[P.k]},
$aq:function(){return[P.k]}}
P.ar.prototype={}
P.a6.prototype={}
P.aG.prototype={
ab:function(a,b,c){var u=P.cG(b,this.gac().a)
return u},
gac:function(){return C.z}}
P.aH.prototype={
$aa6:function(){return[P.k,P.l]}}
P.al.prototype={
gl:function(a){return P.l.prototype.gl.call(this,this)},
h:function(a){return this?"true":"false"}}
P.j.prototype={}
P.S.prototype={}
P.aS.prototype={
h:function(a){return"Throw of null."}}
P.A.prototype={
gK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gJ:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gK()+o+u
if(!q.a)return t
s=q.gJ()
r=P.bi(q.b)
return t+s+": "+r}}
P.ah.prototype={
gK:function(){return"RangeError"},
gJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.aA.prototype={
gK:function(){return"RangeError"},
gJ:function(){var u,t=H.a0(this.b)
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gi:function(a){return this.f}}
P.b4.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b2.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.as.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bi(u)+"."}}
P.ai.prototype={
h:function(a){return"Stack Overflow"},
$iS:1}
P.av.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.az.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException"
return t}}
P.z.prototype={}
P.q.prototype={
gi:function(a){var u,t=this.gt(this)
for(u=0;t.m();)++u
return u},
E:function(a,b){var u,t,s
P.cC(b,"index")
for(u=this.gt(this),t=0;u.m();){s=u.gn()
if(b===t)return s;++t}throw H.f(P.bG(b,this,"index",null,t))},
h:function(a){return P.ct(this,"(",")")}}
P.i.prototype={$iq:1}
P.y.prototype={
gl:function(a){return P.l.prototype.gl.call(this,this)},
h:function(a){return"null"}}
P.a1.prototype={}
P.l.prototype={constructor:P.l,$il:1,
C:function(a,b){return this===b},
gl:function(a){return H.W(this)},
h:function(a){return"Instance of '"+H.e(H.ag(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.X.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.b.prototype={}
W.ao.prototype={
h:function(a){return String(a)}}
W.ap.prototype={
h:function(a){return String(a)}}
W.G.prototype={
X:function(a,b){return a.getContext(b)},
$iG:1}
W.P.prototype={$iP:1}
W.R.prototype={
gi:function(a){return a.length}}
W.au.prototype={}
W.aw.prototype={
h:function(a){return String(a)}}
W.a.prototype={
h:function(a){return a.localName}}
W.H.prototype={}
W.ay.prototype={
gi:function(a){return a.length}}
W.K.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.a1(a):u}}
W.aV.prototype={
gi:function(a){return a.length}}
W.ak.prototype={}
P.B.prototype={$iq:1,
$aq:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]}}
M.aP.prototype={}
N.at.prototype={
ae:function(b6,b7,b8,b9,c0,c1,c2,c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null
H.a_(b6,"$ii",[P.B],"$ai")
u=[0,1,1,0]
t=[0,0,1,1]
s=[P.z]
r=[[P.i,P.z]]
q=[H.c([H.c([0,0,8],s),H.c([0,2,5],s),H.c([7,6,9],s)],r),H.c([H.c([0,3,4],s),H.c([1,3,1],s),H.c([4,3,0],s)],r),H.c([H.c([9,6,7],s),H.c([5,2,0],s),H.c([8,0,0],s)],r)]
for(p=c0-1,s=b8-1,r=c4.length,o=c3-1,n=b4.b,m=b4.e,l=b4.c,k=b4.d,j=b4.a,i=b5,h=i,g=h,f=g,e=f,d=e,c=d,b=c,a=0,a0=0,a1=0,a2=0;p>=b9;--p)for(a3=p+1,a4=b7;a4<=s;a4=b0){a5=b6.length
if(a4>=a5)return H.d(b6,a4)
a6=b6[a4]
a7=a6.length
if(p>=a7)return H.d(a6,p)
a8=a6[p]
if(a3>=a7)return H.d(a6,a3)
a6=a6[a3]
a9=Math.min(a8,a6)
b0=a4+1
if(b0>=a5)return H.d(b6,b0)
a7=b6[b0]
b1=a7.length
if(p>=b1)return H.d(a7,p)
b2=a7[p]
if(a3>=b1)return H.d(a7,a3)
a7=a7[a3]
f=Math.min(a9,Math.min(b2,a7))
g=Math.max(Math.max(a8,a6),Math.max(b2,a7))
if(0>=r)return H.d(c4,0)
if(g>=c4[0]){if(o<0||o>=r)return H.d(c4,o)
a6=f<=c4[o]}else a6=!1
if(a6)for(h=0;h<c3;++h){if(h>=r)return H.d(c4,h)
a6=c4[h]
if(a6>=f&&a6<=g){for(i=4;i>=0;--i){if(i>0){a6=i-1
a7=a4+u[a6]
if(a7>=a5)return H.d(b6,a7)
a7=b6[a7]
a8=p+t[a6]
if(a8>=a7.length)return H.d(a7,a8)
C.a.j(j,i,a7[a8]-c4[h])
a6=a4+u[a6]
if(a6>=c1.length)return H.d(c1,a6)
C.a.j(l,i,c1[a6])
if(a8>=c2.length)return H.d(c2,a8)
C.a.j(k,i,c2[a8])}else{a6=j[1]
a7=j[2]
if(typeof a6!=="number")return a6.p()
if(typeof a7!=="number")return H.n(a7)
a8=j[3]
if(typeof a8!=="number")return H.n(a8)
b1=j[4]
if(typeof b1!=="number")return H.n(b1)
C.a.j(j,0,0.25*(a6+a7+a8+b1))
b1=c1.length
if(a4>=b1)return H.d(c1,a4)
a8=c1[a4]
if(b0>=b1)return H.d(c1,b0)
C.a.j(l,0,0.5*(a8+c1[b0]))
a8=c2.length
if(p>=a8)return H.d(c2,p)
b1=c2[p]
if(a3>=a8)return H.d(c2,a3)
C.a.j(k,0,0.5*(b1+c2[a3]))}a6=j[i]
if(typeof a6!=="number")return a6.ai()
if(a6>0)C.a.j(n,i,1)
else if(a6<0)C.a.j(n,i,-1)
else C.a.j(n,i,0)}for(i=1;i<=4;b3=i+1,b=i,i=b3,c=0){d=i!==4?i+1:1
a6=n[i]
if(typeof a6!=="number")return a6.p();++a6
if(a6<0||a6>=3)return H.d(q,a6)
a6=q[a6]
a7=n[0]
if(typeof a7!=="number")return a7.p();++a7
if(a7<0||a7>=3)return H.d(a6,a7)
a7=a6[a7]
if(d>=5)return H.d(n,d)
a6=n[d]
if(typeof a6!=="number")return a6.p();++a6
if(a6<0||a6>=3)return H.d(a7,a6)
e=a7[a6]
if(e!==0){switch(e){case 1:a=l[i]
a1=k[i]
a0=l[0]
a2=k[0]
break
case 2:a=l[0]
a1=k[0]
a0=l[d]
a2=k[d]
break
case 3:a=l[d]
a1=k[d]
a0=l[i]
a2=k[i]
break
case 4:a=l[i]
a1=k[i]
a0=b4.v(0,d)
a2=b4.w(0,d)
break
case 5:a=l[0]
a1=k[0]
a0=b4.v(d,i)
a2=b4.w(d,i)
break
case 6:a=l[d]
a1=k[d]
a0=b4.v(i,0)
a2=b4.w(i,0)
break
case 7:a=b4.v(i,0)
a1=b4.w(i,0)
a0=b4.v(0,d)
a2=b4.w(0,d)
break
case 8:a=b4.v(0,d)
a1=b4.w(0,d)
a0=b4.v(d,i)
a2=b4.w(d,i)
break
case 9:a=b4.v(d,i)
a1=b4.w(d,i)
a0=b4.v(i,0)
a2=b4.w(i,0)
break
default:break}m.ad(a,a1,a0,a2,c4[h],h)}}}}}},
v:function(a,b){var u,t,s,r=this.a
if(b>=5)return H.d(r,b)
u=r[b]
t=this.c
if(a>=5)return H.d(t,a)
s=t[a]
if(typeof u!=="number")return u.A()
if(typeof s!=="number")return H.n(s)
r=r[a]
t=t[b]
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.n(t)
return(u*s-r*t)/(u-r)},
w:function(a,b){var u,t,s,r=this.a
if(b>=5)return H.d(r,b)
u=r[b]
t=this.d
if(a>=5)return H.d(t,a)
s=t[a]
if(typeof u!=="number")return u.A()
if(typeof s!=="number")return H.n(s)
r=r[a]
t=t[b]
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.n(t)
return(u*s-r*t)/(u-r)}}
V.aW.prototype={
H:function(a){var u=this.r,t=this.y
if(J.a3(this.Q.k(0,C.b),"true")){if(typeof a!=="number")return a.A()
if(typeof u!=="number")return H.n(u)
return C.c.G(a*u)+t}else{if(typeof a!=="number")return a.A()
if(typeof u!=="number")return H.n(u)
return C.c.G(a*u)+t}},
I:function(a){var u=1-a,t=this.x,s=this.z
if(J.a3(this.Q.k(0,C.b),"true")){if(typeof t!=="number")return H.n(t)
return C.c.G(u*t)+s}else{if(typeof t!=="number")return H.n(t)
return C.c.G(u*t)+s}},
ad:function(a,b,c,d,e,f){var u,t,s,r,q,p,o=this
if(J.a3(o.Q.k(0,C.b),"true")){u=o.H(b)
t=o.H(d)
if(typeof a!=="number")return H.n(a)
s=o.I(1-a)
if(typeof c!=="number")return H.n(c)
r=o.I(1-c)}else{u=o.H(a)
t=o.H(c)
if(typeof b!=="number")return H.n(b)
s=o.I(1-b)
if(typeof d!=="number")return H.n(d)
r=o.I(1-d)}if(u===t&&s===r)return
q=o.c
if(q!=null)if(q===u&&o.e===t&&o.d===s&&o.f===r)return
o.c=u
o.e=t
o.d=s
o.f=r
o.a.beginPath()
o.a.moveTo(u,s)
o.a.lineTo(t,r)
o.a.strokeStyle=o.Q.k(0,C.j)
if(o.Q.k(0,C.l)==null||J.a3(o.Q.k(0,C.l),"true")){if(e<0)o.a.strokeStyle=o.Q.k(0,C.k)}else if(o.Q.k(0,C.i)!=null){p=C.u.ab(0,o.Q.k(0,C.i),null)
q=J.o(p)
if(!!q.$ii&&f<q.gi(p))o.a.strokeStyle=q.k(p,f)}q=o.a
q.lineWidth=1
q.stroke()},
saa:function(a){this.Q=H.a_(a,"$ibn",[V.v,P.k],"$abn")},
$id4:1}
V.v.prototype={
h:function(a){return this.b}}
T.aL.prototype={
a3:function(a,b,c,d,e,f){var u,t,s,r,q,p,o,n=this
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
n.sag(H.c(r,[P.j]))
r=n.Q;(r&&C.a).j(r,0,n.z)
for(q=0;q<n.ch;q=p){r=n.Q
p=q+1
if(q>=2)return H.d(u,q);(r&&C.a).j(r,p,u[q])
r=n.Q;(r&&C.a).j(r,p+n.ch,t[q])
r=n.Q
o=n.ch;(r&&C.a).j(r,p+o+o,s[q])}},
Y:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.a_(a,"$ii",[P.j],"$ai")
u=k.ch
if(u!==2)throw H.f("Illegal dimension. Should be "+u)
for(u=k.y,t=k.r,s=k.x,r=1,q=0,p=0;p<k.ch;++p){if(p>=2)return H.d(a,p)
o=(a[p]-t[p])/s[p]
o*=o
n=u[p]
m=k.cy
if(typeof m!=="number")return m.A()
l=n/(1+m*o)
n=1-n
if(n>0.001){m=k.cx
if(typeof m!=="number")return m.aj()
q=n*Math.exp(-m*o)
r*=l+q}else r*=l}return r*k.z},
sag:function(a){this.Q=H.a_(a,"$ii",[P.j],"$ai")}}
T.aI.prototype={}
B.aM.prototype={
a4:function(a,b,c,d,e,f){var u,t,s,r,q,p,o=this,n=a[0],m=a[1],l=new Array(n)
l.fixed$length=Array
o.sM(H.c(l,[P.B]))
o.b=new Float64Array(m)
o.c=new Float64Array(n)
for(u=0;u<6;++u){t=T.cz(a,b[u],c[u],d[u],e[u],f)
if(u===0)o.sM(t)
else o.sM(B.cy(o.a,t))}for(l=o.b,s=m-1,r=o.c,q=n-1,u=0;u<n;++u){if(u>=r.length)return H.d(r,u)
r[u]=u/q
for(p=0;p<m;++p){if(p>=l.length)return H.d(l,p)
l[p]=p/s}}},
sM:function(a){this.a=H.a_(a,"$ii",[P.B],"$ai")}};(function aliases(){var u=J.h.prototype
u.a1=u.h
u=J.aa.prototype
u.a2=u.h})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.l,null)
s(P.l,[H.bk,J.h,J.a4,P.q,H.ac,H.a7,H.b_,P.S,H.Q,P.J,H.aJ,H.aK,P.aY,P.V,P.ar,P.al,P.a1,P.ai,P.az,P.i,P.y,P.k,P.X,W.au,P.B,M.aP,N.at,V.aW,V.v,T.aI,B.aM])
s(J.h,[J.aB,J.aD,J.aa,J.C,J.a9,J.T,H.af,W.H,W.P,W.ak,W.aw])
s(J.aa,[J.aT,J.aj,J.I])
t(J.bj,J.C)
s(J.a9,[J.a8,J.aC])
t(H.ax,P.q)
s(H.ax,[H.U,H.ab])
s(P.S,[H.aR,H.aF,H.b3,H.b1,H.aU,P.aS,P.A,P.b4,P.b2,P.as,P.av])
s(H.Q,[H.be,H.aZ,H.b9,H.ba,H.bb,P.aO])
s(H.aZ,[H.aX,H.N])
t(P.aN,P.J)
s(P.aN,[H.aE,P.b5])
t(H.ad,H.af)
t(H.Y,H.ad)
t(H.Z,H.Y)
t(H.ae,H.Z)
t(H.aQ,H.ae)
t(P.b6,H.U)
t(P.a6,P.aY)
t(P.aG,P.ar)
t(P.aH,P.a6)
s(P.a1,[P.j,P.z])
s(P.A,[P.ah,P.aA])
t(W.K,W.H)
t(W.a,W.K)
t(W.b,W.a)
s(W.b,[W.ao,W.ap,W.G,W.ay,W.aV])
t(W.R,W.ak)
t(T.aL,T.aI)
u(H.Y,P.V)
u(H.Z,H.a7)
u(W.ak,W.au)})()
var v={mangledGlobalNames:{z:"int",j:"double",a1:"num",k:"String",al:"bool",y:"Null",i:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,args:[,]},{func:1,args:[,P.k]},{func:1,ret:P.y,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){C.v=W.G.prototype
C.w=J.h.prototype
C.a=J.C.prototype
C.x=J.a8.prototype
C.c=J.a9.prototype
C.d=J.T.prototype
C.y=J.I.prototype
C.m=J.aT.prototype
C.e=J.aj.prototype
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.n=function() {
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
C.t=function(getTagFallback) {
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
C.o=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.p=function(hooks) {
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
C.r=function(hooks) {
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
C.q=function(hooks) {
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
C.h=function(hooks) { return hooks; }

C.u=new P.aG()
C.i=new V.v("CtourA.LEVEL_COLORS")
C.j=new V.v("CtourA.LEVEL_COLOR_POS")
C.k=new V.v("CtourA.LEVEL_COLOR_NEG")
C.b=new V.v("CtourA.ROTATE")
C.l=new V.v("CtourA.USE_LEVEL_COLORS_POS_NEG")
C.z=new P.aH(null)})();(function staticFields(){$.u=0
$.O=null
$.bC=null
$.bq=!1
$.bX=null
$.bQ=null
$.c2=null
$.b8=null
$.bc=null
$.by=null
$.p=[]
$.d_=H.c([200,300],[P.z])
$.cI=function(){var u=[P.j]
return H.c([H.c([90,50],u),H.c([90,50],u),H.c([130,150],u),H.c([60,130],u),H.c([40,180],u),H.c([70,250],u)],[[P.i,P.j]])}()
$.cS=function(){var u=[P.j]
return H.c([H.c([15,30],u),H.c([40,20],u),H.c([50,30],u),H.c([15,15],u),H.c([30,40],u),H.c([40,40],u)],[[P.i,P.j]])}()
$.cX=function(){var u=[P.j]
return H.c([H.c([0,0],u),H.c([0,0],u),H.c([1,0],u),H.c([0,0.8],u),H.c([1,0],u),H.c([0.5,0.5],u)],[[P.i,P.j]])}()})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"d5","c5",function(){return H.bW("_$dart_dartClosure")})
u($,"d6","bB",function(){return H.bW("_$dart_js")})
u($,"d7","c6",function(){return H.w(H.b0({
toString:function(){return"$receiver$"}}))})
u($,"d8","c7",function(){return H.w(H.b0({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"d9","c8",function(){return H.w(H.b0(null))})
u($,"da","c9",function(){return H.w(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dd","cc",function(){return H.w(H.b0(void 0))})
u($,"de","cd",function(){return H.w(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dc","cb",function(){return H.w(H.bN(null))})
u($,"db","ca",function(){return H.w(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dg","cf",function(){return H.w(H.bN(void 0))})
u($,"df","ce",function(){return H.w(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"dh","cg",function(){return H.c([200,-160,120,-150,120,-130],[P.j])})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.h,CanvasGradient:J.h,CanvasPattern:J.h,DOMError:J.h,ErrorEvent:J.h,Event:J.h,InputEvent:J.h,MediaError:J.h,Navigator:J.h,NavigatorConcurrentHardware:J.h,NavigatorUserMediaError:J.h,OverconstrainedError:J.h,PositionError:J.h,SensorErrorEvent:J.h,SpeechRecognitionError:J.h,WebGLRenderingContext:J.h,WebGL2RenderingContext:J.h,SQLError:J.h,ArrayBufferView:H.af,Float64Array:H.aQ,HTMLAudioElement:W.b,HTMLBRElement:W.b,HTMLBaseElement:W.b,HTMLBodyElement:W.b,HTMLButtonElement:W.b,HTMLContentElement:W.b,HTMLDListElement:W.b,HTMLDataElement:W.b,HTMLDataListElement:W.b,HTMLDetailsElement:W.b,HTMLDialogElement:W.b,HTMLDivElement:W.b,HTMLEmbedElement:W.b,HTMLFieldSetElement:W.b,HTMLHRElement:W.b,HTMLHeadElement:W.b,HTMLHeadingElement:W.b,HTMLHtmlElement:W.b,HTMLIFrameElement:W.b,HTMLImageElement:W.b,HTMLInputElement:W.b,HTMLLIElement:W.b,HTMLLabelElement:W.b,HTMLLegendElement:W.b,HTMLLinkElement:W.b,HTMLMapElement:W.b,HTMLMediaElement:W.b,HTMLMenuElement:W.b,HTMLMetaElement:W.b,HTMLMeterElement:W.b,HTMLModElement:W.b,HTMLOListElement:W.b,HTMLObjectElement:W.b,HTMLOptGroupElement:W.b,HTMLOptionElement:W.b,HTMLOutputElement:W.b,HTMLParagraphElement:W.b,HTMLParamElement:W.b,HTMLPictureElement:W.b,HTMLPreElement:W.b,HTMLProgressElement:W.b,HTMLQuoteElement:W.b,HTMLScriptElement:W.b,HTMLShadowElement:W.b,HTMLSlotElement:W.b,HTMLSourceElement:W.b,HTMLSpanElement:W.b,HTMLStyleElement:W.b,HTMLTableCaptionElement:W.b,HTMLTableCellElement:W.b,HTMLTableDataCellElement:W.b,HTMLTableHeaderCellElement:W.b,HTMLTableColElement:W.b,HTMLTableElement:W.b,HTMLTableRowElement:W.b,HTMLTableSectionElement:W.b,HTMLTemplateElement:W.b,HTMLTextAreaElement:W.b,HTMLTimeElement:W.b,HTMLTitleElement:W.b,HTMLTrackElement:W.b,HTMLUListElement:W.b,HTMLUnknownElement:W.b,HTMLVideoElement:W.b,HTMLDirectoryElement:W.b,HTMLFontElement:W.b,HTMLFrameElement:W.b,HTMLFrameSetElement:W.b,HTMLMarqueeElement:W.b,HTMLElement:W.b,HTMLAnchorElement:W.ao,HTMLAreaElement:W.ap,HTMLCanvasElement:W.G,CanvasRenderingContext2D:W.P,CSSStyleDeclaration:W.R,MSStyleCSSProperties:W.R,CSS2Properties:W.R,DOMException:W.aw,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,Window:W.H,DOMWindow:W.H,EventTarget:W.H,HTMLFormElement:W.ay,Document:W.K,HTMLDocument:W.K,Node:W.K,HTMLSelectElement:W.aV})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float64Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true})
H.ad.$nativeSuperclassTag="ArrayBufferView"
H.Y.$nativeSuperclassTag="ArrayBufferView"
H.Z.$nativeSuperclassTag="ArrayBufferView"
H.ae.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.c_,[])
else U.c_([])})})()
//# sourceMappingURL=example.dart.js.map
