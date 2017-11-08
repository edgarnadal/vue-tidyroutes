/*!
 *  Vue TidyRoutes plugin v0.1.2
 * 
 *  ... 
 *  @author undefined <undefined>
 *  https://github.com/edgarnadal/vue-tidyroutes#readme
 *  Released under the MIT License.
 */
!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("TidyRoutes",[],factory):"object"==typeof exports?exports.TidyRoutes=factory():root.TidyRoutes=factory()}(this,function(){/******/
return function(modules){/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
exports:{},/******/
id:moduleId,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([/* 0 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _assign=__webpack_require__(1),_assign2=_interopRequireDefault(_assign),_map=__webpack_require__(38),_map2=_interopRequireDefault(_map),_classCallCheck2=__webpack_require__(82),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(83),_createClass3=_interopRequireDefault(_createClass2),_route=__webpack_require__(87),_route2=_interopRequireDefault(_route),__tidyRoutesInstance=null,TidyRoutes=function(){function TidyRoutes(){return(0,_classCallCheck3.default)(this,TidyRoutes),__tidyRoutesInstance||(this.routes=new _map2.default,__tidyRoutesInstance=this),__tidyRoutesInstance}return(0,_createClass3.default)(TidyRoutes,[{key:"export",value:function(){var _this=this,routes=[];return this.routes.forEach(function(option,path){var route=_this.routes.get(path),options=route.options;options.children=[];for(var _path in route.children){var child=route.children[_path];options.children.push((0,_assign2.default)({path:_path},child))}routes.push((0,_assign2.default)({path:path},options))}),routes}},{key:"route",value:function route(path,options){if(this.routes.has(path))return this.routes.get(path);var route=new _route2.default(path,options);return this.routes.set(path,route),route}}]),TidyRoutes}();exports.default=new TidyRoutes},/* 1 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(2),__esModule:!0}},/* 2 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(3),module.exports=__webpack_require__(6).Object.assign},/* 3 */
/***/
function(module,exports,__webpack_require__){
// 19.1.3.1 Object.assign(target, source)
var $export=__webpack_require__(4);$export($export.S+$export.F,"Object",{assign:__webpack_require__(19)})},/* 4 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(5),core=__webpack_require__(6),ctx=__webpack_require__(7),hide=__webpack_require__(9),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)
// contains in native
own=!IS_FORCED&&target&&void 0!==target[key],own&&key in exports||(
// export native or passed
out=own?target[key]:source[key],
// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
IS_PROTO&&((exports.virtual||(exports.virtual={}))[key]=out,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
type&$export.R&&expProto&&!expProto[key]&&hide(expProto,key,out)))};
// type bitmap
$export.F=1,// forced
$export.G=2,// global
$export.S=4,// static
$export.P=8,// proto
$export.B=16,// bind
$export.W=32,// wrap
$export.U=64,// safe
$export.R=128,// real proto method for `library`
module.exports=$export},/* 5 */
/***/
function(module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},/* 6 */
/***/
function(module,exports){var core=module.exports={version:"2.5.1"};"number"==typeof __e&&(__e=core)},/* 7 */
/***/
function(module,exports,__webpack_require__){
// optional / simple context binding
var aFunction=__webpack_require__(8);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},/* 8 */
/***/
function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},/* 9 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(10),createDesc=__webpack_require__(18);module.exports=__webpack_require__(14)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},/* 10 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(11),IE8_DOM_DEFINE=__webpack_require__(13),toPrimitive=__webpack_require__(17),dP=Object.defineProperty;exports.f=__webpack_require__(14)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},/* 11 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(12);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},/* 12 */
/***/
function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},/* 13 */
/***/
function(module,exports,__webpack_require__){module.exports=!__webpack_require__(14)&&!__webpack_require__(15)(function(){return 7!=Object.defineProperty(__webpack_require__(16)("div"),"a",{get:function(){return 7}}).a})},/* 14 */
/***/
function(module,exports,__webpack_require__){
// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 15 */
/***/
function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},/* 16 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(12),document=__webpack_require__(5).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},/* 17 */
/***/
function(module,exports,__webpack_require__){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},/* 18 */
/***/
function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},/* 19 */
/***/
function(module,exports,__webpack_require__){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys=__webpack_require__(20),gOPS=__webpack_require__(35),pIE=__webpack_require__(36),toObject=__webpack_require__(37),IObject=__webpack_require__(24),$assign=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||__webpack_require__(15)(function(){var A={},B={},S=Symbol(),K="abcdefghijklmnopqrst";return A[S]=7,K.split("").forEach(function(k){B[k]=k}),7!=$assign({},A)[S]||Object.keys($assign({},B)).join("")!=K})?function(target,source){for(// eslint-disable-line no-unused-vars
var T=toObject(target),aLen=arguments.length,index=1,getSymbols=gOPS.f,isEnum=pIE.f;aLen>index;)for(var key,S=IObject(arguments[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0;length>j;)isEnum.call(S,key=keys[j++])&&(T[key]=S[key]);return T}:$assign},/* 20 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(21),enumBugKeys=__webpack_require__(34);module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},/* 21 */
/***/
function(module,exports,__webpack_require__){var has=__webpack_require__(22),toIObject=__webpack_require__(23),arrayIndexOf=__webpack_require__(27)(!1),IE_PROTO=__webpack_require__(31)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);
// Don't enum bug & hidden keys
for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},/* 22 */
/***/
function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},/* 23 */
/***/
function(module,exports,__webpack_require__){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(24),defined=__webpack_require__(26);module.exports=function(it){return IObject(defined(it))}},/* 24 */
/***/
function(module,exports,__webpack_require__){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},/* 25 */
/***/
function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},/* 26 */
/***/
function(module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},/* 27 */
/***/
function(module,exports,__webpack_require__){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(23),toLength=__webpack_require__(28),toAbsoluteIndex=__webpack_require__(30);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toAbsoluteIndex(fromIndex,length);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el){for(;length>index;)
// eslint-disable-next-line no-self-compare
if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},/* 28 */
/***/
function(module,exports,__webpack_require__){
// 7.1.15 ToLength
var toInteger=__webpack_require__(29),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},/* 29 */
/***/
function(module,exports){
// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},/* 30 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(29),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},/* 31 */
/***/
function(module,exports,__webpack_require__){var shared=__webpack_require__(32)("keys"),uid=__webpack_require__(33);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},/* 32 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(5),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},/* 33 */
/***/
function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},/* 34 */
/***/
function(module,exports){
// IE 8- don't enum bug keys
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 35 */
/***/
function(module,exports){exports.f=Object.getOwnPropertySymbols},/* 36 */
/***/
function(module,exports){exports.f={}.propertyIsEnumerable},/* 37 */
/***/
function(module,exports,__webpack_require__){
// 7.1.13 ToObject(argument)
var defined=__webpack_require__(26);module.exports=function(it){return Object(defined(it))}},/* 38 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(39),__esModule:!0}},/* 39 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(40),__webpack_require__(41),__webpack_require__(54),__webpack_require__(58),__webpack_require__(75),__webpack_require__(78),__webpack_require__(80),module.exports=__webpack_require__(6).Map},/* 40 */
/***/
function(module,exports){},/* 41 */
/***/
function(module,exports,__webpack_require__){"use strict";var $at=__webpack_require__(42)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(43)(String,"String",function(iterated){this._t=String(iterated),// target
this._i=0},function(){var point,O=this._t,index=this._i;return index>=O.length?{value:void 0,done:!0}:(point=$at(O,index),this._i+=point.length,{value:point,done:!1})})},/* 42 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(29),defined=__webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){return function(that,pos){var a,b,s=String(defined(that)),i=toInteger(pos),l=s.length;return i<0||i>=l?TO_STRING?"":void 0:(a=s.charCodeAt(i),a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536)}}},/* 43 */
/***/
function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(44),$export=__webpack_require__(4),redefine=__webpack_require__(45),hide=__webpack_require__(9),has=__webpack_require__(22),Iterators=__webpack_require__(46),$iterCreate=__webpack_require__(47),setToStringTag=__webpack_require__(51),getPrototypeOf=__webpack_require__(53),ITERATOR=__webpack_require__(52)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var methods,key,IteratorPrototype,getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function(){return new Constructor(this,kind)};case VALUES:return function(){return new Constructor(this,kind)}}return function(){return new Constructor(this,kind)}},TAG=NAME+" Iterator",DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=!1,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?DEF_VALUES?getMethod("entries"):$default:void 0,$anyNative="Array"==NAME?proto.entries||$native:$native;if(
// Fix native
$anyNative&&(IteratorPrototype=getPrototypeOf($anyNative.call(new Base)),IteratorPrototype!==Object.prototype&&IteratorPrototype.next&&(
// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,!0),
// fix for some old engines
LIBRARY||has(IteratorPrototype,ITERATOR)||hide(IteratorPrototype,ITERATOR,returnThis))),
// fix Array#{values, @@iterator}.name in V8 / FF
DEF_VALUES&&$native&&$native.name!==VALUES&&(VALUES_BUG=!0,$default=function(){return $native.call(this)}),
// Define iterator
LIBRARY&&!FORCED||!BUGGY&&!VALUES_BUG&&proto[ITERATOR]||hide(proto,ITERATOR,$default),
// Plug for library
Iterators[NAME]=$default,Iterators[TAG]=returnThis,DEFAULT)if(methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries},FORCED)for(key in methods)key in proto||redefine(proto,key,methods[key]);else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);return methods}},/* 44 */
/***/
function(module,exports){module.exports=!0},/* 45 */
/***/
function(module,exports,__webpack_require__){module.exports=__webpack_require__(9)},/* 46 */
/***/
function(module,exports){module.exports={}},/* 47 */
/***/
function(module,exports,__webpack_require__){"use strict";var create=__webpack_require__(48),descriptor=__webpack_require__(18),setToStringTag=__webpack_require__(51),IteratorPrototype={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype,__webpack_require__(52)("iterator"),function(){return this}),module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)}),setToStringTag(Constructor,NAME+" Iterator")}},/* 48 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(11),dPs=__webpack_require__(49),enumBugKeys=__webpack_require__(34),IE_PROTO=__webpack_require__(31)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){
// Thrash, waste and sodomy: IE GC bug
var iframeDocument,iframe=__webpack_require__(16)("iframe"),i=enumBugKeys.length,lt="<",gt=">";for(iframe.style.display="none",__webpack_require__(50).appendChild(iframe),iframe.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document,iframeDocument.open(),iframeDocument.write(lt+"script"+gt+"document.F=Object"+lt+"/script"+gt),iframeDocument.close(),createDict=iframeDocument.F;i--;)delete createDict[PROTOTYPE][enumBugKeys[i]];return createDict()};module.exports=Object.create||function(O,Properties){var result;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==O?(Empty[PROTOTYPE]=anObject(O),result=new Empty,Empty[PROTOTYPE]=null,result[IE_PROTO]=O):result=createDict(),void 0===Properties?result:dPs(result,Properties)}},/* 49 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(10),anObject=__webpack_require__(11),getKeys=__webpack_require__(20);module.exports=__webpack_require__(14)?Object.defineProperties:function(O,Properties){anObject(O);for(var P,keys=getKeys(Properties),length=keys.length,i=0;length>i;)dP.f(O,P=keys[i++],Properties[P]);return O}},/* 50 */
/***/
function(module,exports,__webpack_require__){var document=__webpack_require__(5).document;module.exports=document&&document.documentElement},/* 51 */
/***/
function(module,exports,__webpack_require__){var def=__webpack_require__(10).f,has=__webpack_require__(22),TAG=__webpack_require__(52)("toStringTag");module.exports=function(it,tag,stat){it&&!has(it=stat?it:it.prototype,TAG)&&def(it,TAG,{configurable:!0,value:tag})}},/* 52 */
/***/
function(module,exports,__webpack_require__){var store=__webpack_require__(32)("wks"),uid=__webpack_require__(33),Symbol=__webpack_require__(5).Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&Symbol[name]||(USE_SYMBOL?Symbol:uid)("Symbol."+name))};$exports.store=store},/* 53 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(22),toObject=__webpack_require__(37),IE_PROTO=__webpack_require__(31)("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){return O=toObject(O),has(O,IE_PROTO)?O[IE_PROTO]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectProto:null}},/* 54 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(55);for(var global=__webpack_require__(5),hide=__webpack_require__(9),Iterators=__webpack_require__(46),TO_STRING_TAG=__webpack_require__(52)("toStringTag"),DOMIterables="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i],Collection=global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&hide(proto,TO_STRING_TAG,NAME),Iterators[NAME]=Iterators.Array}},/* 55 */
/***/
function(module,exports,__webpack_require__){"use strict";var addToUnscopables=__webpack_require__(56),step=__webpack_require__(57),Iterators=__webpack_require__(46),toIObject=__webpack_require__(23);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=__webpack_require__(43)(Array,"Array",function(iterated,kind){this._t=toIObject(iterated),// target
this._i=0,// next index
this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++;return!O||index>=O.length?(this._t=void 0,step(1)):"keys"==kind?step(0,index):"values"==kind?step(0,O[index]):step(0,[index,O[index]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array,addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries")},/* 56 */
/***/
function(module,exports){module.exports=function(){}},/* 57 */
/***/
function(module,exports){module.exports=function(done,value){return{value:value,done:!!done}}},/* 58 */
/***/
function(module,exports,__webpack_require__){"use strict";var strong=__webpack_require__(59),validate=__webpack_require__(69),MAP="Map";
// 23.1 Map Objects
module.exports=__webpack_require__(70)(MAP,function(get){return function(){return get(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.1.3.6 Map.prototype.get(key)
get:function(key){var entry=strong.getEntry(validate(this,MAP),key);return entry&&entry.v},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(key,value){return strong.def(validate(this,MAP),0===key?0:key,value)}},strong,!0)},/* 59 */
/***/
function(module,exports,__webpack_require__){"use strict";var dP=__webpack_require__(10).f,create=__webpack_require__(48),redefineAll=__webpack_require__(60),ctx=__webpack_require__(7),anInstance=__webpack_require__(61),forOf=__webpack_require__(62),$iterDefine=__webpack_require__(43),step=__webpack_require__(57),setSpecies=__webpack_require__(67),DESCRIPTORS=__webpack_require__(14),fastKey=__webpack_require__(68).fastKey,validate=__webpack_require__(69),SIZE=DESCRIPTORS?"_s":"size",getEntry=function(that,key){
// fast case
var entry,index=fastKey(key);if("F"!==index)return that._i[index];
// frozen object case
for(entry=that._f;entry;entry=entry.n)if(entry.k==key)return entry};module.exports={getConstructor:function(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){anInstance(that,C,NAME,"_i"),that._t=NAME,// collection type
that._i=create(null),// index
that._f=void 0,// first entry
that._l=void 0,// last entry
that[SIZE]=0,// size
void 0!=iterable&&forOf(iterable,IS_MAP,that[ADDER],that)});return redefineAll(C.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var that=validate(this,NAME),data=that._i,entry=that._f;entry;entry=entry.n)entry.r=!0,entry.p&&(entry.p=entry.p.n=void 0),delete data[entry.i];that._f=that._l=void 0,that[SIZE]=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(key){var that=validate(this,NAME),entry=getEntry(that,key);if(entry){var next=entry.n,prev=entry.p;delete that._i[entry.i],entry.r=!0,prev&&(prev.n=next),next&&(next.p=prev),that._f==entry&&(that._f=next),that._l==entry&&(that._l=prev),that[SIZE]--}return!!entry},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(callbackfn){validate(this,NAME);for(var entry,f=ctx(callbackfn,arguments.length>1?arguments[1]:void 0,3);entry=entry?entry.n:this._f;)
// revert to the last existing entry
for(f(entry.v,entry.k,this);entry&&entry.r;)entry=entry.p},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(key){return!!getEntry(validate(this,NAME),key)}}),DESCRIPTORS&&dP(C.prototype,"size",{get:function(){return validate(this,NAME)[SIZE]}}),C},def:function(that,key,value){var prev,index,entry=getEntry(that,key);
// change existing entry
// add to index
return entry?entry.v=value:(that._l=entry={i:index=fastKey(key,!0),// <- index
k:key,// <- key
v:value,// <- value
p:prev=that._l,// <- previous entry
n:void 0,// <- next entry
r:!1},that._f||(that._f=entry),prev&&(prev.n=entry),that[SIZE]++,"F"!==index&&(that._i[index]=entry)),that},getEntry:getEntry,setStrong:function(C,NAME,IS_MAP){
// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
$iterDefine(C,NAME,function(iterated,kind){this._t=validate(iterated,NAME),// target
this._k=kind,// kind
this._l=void 0},function(){
// revert to the last existing entry
for(var that=this,kind=that._k,entry=that._l;entry&&entry.r;)entry=entry.p;
// get next entry
// get next entry
// return step by kind
// or finish the iteration
return that._t&&(that._l=entry=entry?entry.n:that._t._f)?"keys"==kind?step(0,entry.k):"values"==kind?step(0,entry.v):step(0,[entry.k,entry.v]):(that._t=void 0,step(1))},IS_MAP?"entries":"values",!IS_MAP,!0),
// add [@@species], 23.1.2.2, 23.2.2.2
setSpecies(NAME)}}},/* 60 */
/***/
function(module,exports,__webpack_require__){var hide=__webpack_require__(9);module.exports=function(target,src,safe){for(var key in src)safe&&target[key]?target[key]=src[key]:hide(target,key,src[key]);return target}},/* 61 */
/***/
function(module,exports){module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||void 0!==forbiddenField&&forbiddenField in it)throw TypeError(name+": incorrect invocation!");return it}},/* 62 */
/***/
function(module,exports,__webpack_require__){var ctx=__webpack_require__(7),call=__webpack_require__(63),isArrayIter=__webpack_require__(64),anObject=__webpack_require__(11),toLength=__webpack_require__(28),getIterFn=__webpack_require__(65),BREAK={},RETURN={},exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var length,step,iterator,result,iterFn=ITERATOR?function(){return iterable}:getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0;if("function"!=typeof iterFn)throw TypeError(iterable+" is not iterable!");
// fast case for arrays with default iterator
if(isArrayIter(iterFn)){for(length=toLength(iterable.length);length>index;index++)if(result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]),result===BREAK||result===RETURN)return result}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;)if(result=call(iterator,f,step.value,entries),result===BREAK||result===RETURN)return result};exports.BREAK=BREAK,exports.RETURN=RETURN},/* 63 */
/***/
function(module,exports,__webpack_require__){
// call something on iterator step with safe closing on error
var anObject=__webpack_require__(11);module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value)}catch(e){var ret=iterator.return;throw void 0!==ret&&anObject(ret.call(iterator)),e}}},/* 64 */
/***/
function(module,exports,__webpack_require__){
// check on default Array iterator
var Iterators=__webpack_require__(46),ITERATOR=__webpack_require__(52)("iterator"),ArrayProto=Array.prototype;module.exports=function(it){return void 0!==it&&(Iterators.Array===it||ArrayProto[ITERATOR]===it)}},/* 65 */
/***/
function(module,exports,__webpack_require__){var classof=__webpack_require__(66),ITERATOR=__webpack_require__(52)("iterator"),Iterators=__webpack_require__(46);module.exports=__webpack_require__(6).getIteratorMethod=function(it){if(void 0!=it)return it[ITERATOR]||it["@@iterator"]||Iterators[classof(it)]}},/* 66 */
/***/
function(module,exports,__webpack_require__){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(25),TAG=__webpack_require__(52)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(it,key){try{return it[key]}catch(e){}};module.exports=function(it){var O,T,B;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(T=tryGet(O=Object(it),TAG))?T:ARG?cof(O):"Object"==(B=cof(O))&&"function"==typeof O.callee?"Arguments":B}},/* 67 */
/***/
function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(5),core=__webpack_require__(6),dP=__webpack_require__(10),DESCRIPTORS=__webpack_require__(14),SPECIES=__webpack_require__(52)("species");module.exports=function(KEY){var C="function"==typeof core[KEY]?core[KEY]:global[KEY];DESCRIPTORS&&C&&!C[SPECIES]&&dP.f(C,SPECIES,{configurable:!0,get:function(){return this}})}},/* 68 */
/***/
function(module,exports,__webpack_require__){var META=__webpack_require__(33)("meta"),isObject=__webpack_require__(12),has=__webpack_require__(22),setDesc=__webpack_require__(10).f,id=0,isExtensible=Object.isExtensible||function(){return!0},FREEZE=!__webpack_require__(15)(function(){return isExtensible(Object.preventExtensions({}))}),setMeta=function(it){setDesc(it,META,{value:{i:"O"+ ++id,// object ID
w:{}}})},fastKey=function(it,create){
// return primitive with prefix
if(!isObject(it))return"symbol"==typeof it?it:("string"==typeof it?"S":"P")+it;if(!has(it,META)){
// can't set metadata to uncaught frozen object
if(!isExtensible(it))return"F";
// not necessary to add metadata
if(!create)return"E";
// add missing metadata
setMeta(it)}return it[META].i},getWeak=function(it,create){if(!has(it,META)){
// can't set metadata to uncaught frozen object
if(!isExtensible(it))return!0;
// not necessary to add metadata
if(!create)return!1;
// add missing metadata
setMeta(it)}return it[META].w},onFreeze=function(it){return FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META)&&setMeta(it),it},meta=module.exports={KEY:META,NEED:!1,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze}},/* 69 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(12);module.exports=function(it,TYPE){if(!isObject(it)||it._t!==TYPE)throw TypeError("Incompatible receiver, "+TYPE+" required!");return it}},/* 70 */
/***/
function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(5),$export=__webpack_require__(4),meta=__webpack_require__(68),fails=__webpack_require__(15),hide=__webpack_require__(9),redefineAll=__webpack_require__(60),forOf=__webpack_require__(62),anInstance=__webpack_require__(61),isObject=__webpack_require__(12),setToStringTag=__webpack_require__(51),dP=__webpack_require__(10).f,each=__webpack_require__(71)(0),DESCRIPTORS=__webpack_require__(14);module.exports=function(NAME,wrapper,methods,common,IS_MAP,IS_WEAK){var Base=global[NAME],C=Base,ADDER=IS_MAP?"set":"add",proto=C&&C.prototype,O={};
// create collection constructor
return DESCRIPTORS&&"function"==typeof C&&(IS_WEAK||proto.forEach&&!fails(function(){(new C).entries().next()}))?(C=wrapper(function(target,iterable){anInstance(target,C,NAME,"_c"),target._c=new Base,void 0!=iterable&&forOf(iterable,IS_MAP,target[ADDER],target)}),each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(KEY){var IS_ADDER="add"==KEY||"set"==KEY;KEY in proto&&(!IS_WEAK||"clear"!=KEY)&&hide(C.prototype,KEY,function(a,b){if(anInstance(this,C,KEY),!IS_ADDER&&IS_WEAK&&!isObject(a))return"get"==KEY&&void 0;var result=this._c[KEY](0===a?0:a,b);return IS_ADDER?this:result})}),IS_WEAK||dP(C.prototype,"size",{get:function(){return this._c.size}})):(C=common.getConstructor(wrapper,NAME,IS_MAP,ADDER),redefineAll(C.prototype,methods),meta.NEED=!0),setToStringTag(C,NAME),O[NAME]=C,$export($export.G+$export.W+$export.F,O),IS_WEAK||common.setStrong(C,NAME,IS_MAP),C}},/* 71 */
/***/
function(module,exports,__webpack_require__){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx=__webpack_require__(7),IObject=__webpack_require__(24),toObject=__webpack_require__(37),toLength=__webpack_require__(28),asc=__webpack_require__(72);module.exports=function(TYPE,$create){var IS_MAP=1==TYPE,IS_FILTER=2==TYPE,IS_SOME=3==TYPE,IS_EVERY=4==TYPE,IS_FIND_INDEX=6==TYPE,NO_HOLES=5==TYPE||IS_FIND_INDEX,create=$create||asc;return function($this,callbackfn,that){for(var val,res,O=toObject($this),self=IObject(O),f=ctx(callbackfn,that,3),length=toLength(self.length),index=0,result=IS_MAP?create($this,length):IS_FILTER?create($this,0):void 0;length>index;index++)if((NO_HOLES||index in self)&&(val=self[index],res=f(val,index,O),TYPE))if(IS_MAP)result[index]=res;else if(res)switch(TYPE){case 3:return!0;// some
case 5:return val;// find
case 6:return index;// findIndex
case 2:result.push(val)}else if(IS_EVERY)return!1;return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result}}},/* 72 */
/***/
function(module,exports,__webpack_require__){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor=__webpack_require__(73);module.exports=function(original,length){return new(speciesConstructor(original))(length)}},/* 73 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(12),isArray=__webpack_require__(74),SPECIES=__webpack_require__(52)("species");module.exports=function(original){var C;
// cross-realm fallback
return isArray(original)&&(C=original.constructor,"function"!=typeof C||C!==Array&&!isArray(C.prototype)||(C=void 0),isObject(C)&&(C=C[SPECIES],null===C&&(C=void 0))),void 0===C?Array:C}},/* 74 */
/***/
function(module,exports,__webpack_require__){
// 7.2.2 IsArray(argument)
var cof=__webpack_require__(25);module.exports=Array.isArray||function(arg){return"Array"==cof(arg)}},/* 75 */
/***/
function(module,exports,__webpack_require__){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export=__webpack_require__(4);$export($export.P+$export.R,"Map",{toJSON:__webpack_require__(76)("Map")})},/* 76 */
/***/
function(module,exports,__webpack_require__){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof=__webpack_require__(66),from=__webpack_require__(77);module.exports=function(NAME){return function(){if(classof(this)!=NAME)throw TypeError(NAME+"#toJSON isn't generic");return from(this)}}},/* 77 */
/***/
function(module,exports,__webpack_require__){var forOf=__webpack_require__(62);module.exports=function(iter,ITERATOR){var result=[];return forOf(iter,!1,result.push,result,ITERATOR),result}},/* 78 */
/***/
function(module,exports,__webpack_require__){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(79)("Map")},/* 79 */
/***/
function(module,exports,__webpack_require__){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var $export=__webpack_require__(4);module.exports=function(COLLECTION){$export($export.S,COLLECTION,{of:function(){for(var length=arguments.length,A=Array(length);length--;)A[length]=arguments[length];return new this(A)}})}},/* 80 */
/***/
function(module,exports,__webpack_require__){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(81)("Map")},/* 81 */
/***/
function(module,exports,__webpack_require__){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var $export=__webpack_require__(4),aFunction=__webpack_require__(8),ctx=__webpack_require__(7),forOf=__webpack_require__(62);module.exports=function(COLLECTION){$export($export.S,COLLECTION,{from:function(source){var mapping,A,n,cb,mapFn=arguments[1];return aFunction(this),mapping=void 0!==mapFn,mapping&&aFunction(mapFn),void 0==source?new this:(A=[],mapping?(n=0,cb=ctx(mapFn,arguments[2],2),forOf(source,!1,function(nextItem){A.push(cb(nextItem,n++))})):forOf(source,!1,A.push,A),new this(A))}})}},/* 82 */
/***/
function(module,exports){"use strict";exports.__esModule=!0,exports.default=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}},/* 83 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _defineProperty=__webpack_require__(84),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),(0,_defineProperty2.default)(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}()},/* 84 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(85),__esModule:!0}},/* 85 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(86);var $Object=__webpack_require__(6).Object;module.exports=function(it,key,desc){return $Object.defineProperty(it,key,desc)}},/* 86 */
/***/
function(module,exports,__webpack_require__){var $export=__webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(14),"Object",{defineProperty:__webpack_require__(10).f})},/* 87 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__(82),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(83),_createClass3=_interopRequireDefault(_createClass2),Route=function(){function Route(path,options){if((0,_classCallCheck3.default)(this,Route),this.path=path,this.options=options,this.children={},options.hasOwnProperty("children")){for(var _path in options.children)this.child(_path,options.children[_path]);delete options.children}}return(0,_createClass3.default)(Route,[{key:"child",value:function(path,options){return this.children[path]=options,this}}]),Route}();exports.default=Route}])});