var WTCGL=function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=44)}([function(t,n,r){var e=r(39)("wks"),i=r(8),o=r(1).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){t.exports=!r(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(4),i=r(16);t.exports=r(2)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(12),i=r(26),o=r(19),u=Object.defineProperty;n.f=r(2)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(9),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(37);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports={}},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=!1},function(t,n){var r=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=r)},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(36),i=r(37);t.exports=function(t){return e(i(t))}},function(t,n,r){var e=r(9),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,r){var e=r(7);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(1),i=r(3),o=r(6),u=r(8)("src"),c=Function.toString,s=(""+c).split("toString");r(15).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:s.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(29);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(39)("keys"),i=r(8);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(4).f,i=r(6),o=r(0)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){t.exports=!r(2)&&!r(13)(function(){return 7!=Object.defineProperty(r(27)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(7),i=r(1).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(1),i=r(15),o=r(3),u=r(20),c=r(21),s=function(t,n,r){var f,a,h,l,p=t&s.F,_=t&s.G,v=t&s.S,x=t&s.P,g=t&s.B,y=_?e:v?e[n]||(e[n]={}):(e[n]||{}).prototype,d=_?i:i[n]||(i[n]={}),m=d.prototype||(d.prototype={});for(f in _&&(r=n),r)h=((a=!p&&y&&void 0!==y[f])?y:r)[f],l=g&&a?c(h,e):x&&"function"==typeof h?c(Function.call,h):h,y&&u(y,f,h,t&s.U),d[f]!=h&&o(d,f,l),x&&m[f]!=h&&(m[f]=h)};e.core=i,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){for(var e,i=r(1),o=r(3),u=r(8),c=u("typed_array"),s=u("view"),f=!(!i.ArrayBuffer||!i.DataView),a=f,h=0,l="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");h<9;)(e=i[l[h++]])?(o(e.prototype,c,!0),o(e.prototype,s,!0)):a=!1;t.exports={ABV:f,CONSTR:a,TYPED:c,VIEW:s}},function(t,n,r){var e=r(20);t.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var e=r(9),i=r(5);t.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var e=r(35),i=r(24).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},function(t,n,r){var e=r(6),i=r(17),o=r(38)(!1),u=r(23)("IE_PROTO");t.exports=function(t,n){var r,c=i(t),s=0,f=[];for(r in c)r!=u&&e(c,r)&&f.push(r);for(;n.length>s;)e(c,r=n[s++])&&(~o(f,r)||f.push(r));return f}},function(t,n,r){var e=r(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(17),i=r(5),o=r(18);t.exports=function(t){return function(n,r,u){var c,s=e(n),f=i(s.length),a=o(u,f);if(t&&r!=r){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===r)return t||a||0;return!t&&-1}}},function(t,n,r){var e=r(15),i=r(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){"use strict";var e=r(10),i=r(18),o=r(5);t.exports=function(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),s=u>2?arguments[2]:void 0,f=void 0===s?r:i(s,r);f>c;)n[c++]=t;return n}},function(t,n,r){var e=r(22),i=r(0)("toStringTag"),o="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:o?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){var e=r(12),i=r(50),o=r(24),u=r(23)("IE_PROTO"),c=function(){},s=function(){var t,n=r(27)("iframe"),e=o.length;for(n.style.display="none",r(52).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;e--;)delete s.prototype[o[e]];return s()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=s(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(6),i=r(10),o=r(23)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){"use strict";r.r(n);r(45),r(46);function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var i=function(){function t(n,r,e,i,o,u){if(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.run=this.run.bind(this),this._el=n,this._ctx=this._el.getContext("webgl",{alpha:!0}),this._vertexShader=t.createShaderOfType(this._ctx,this._ctx.VERTEX_SHADER,r),this._fragmentShader=t.createShaderOfType(this._ctx,this._ctx.FRAGMENT_SHADER,e),this._program=this._ctx.createProgram(),this._ctx.attachShader(this._program,this._vertexShader),this._ctx.attachShader(this._program,this._fragmentShader),this._ctx.linkProgram(this._program),!this._ctx.getProgramParameter(this._program,this._ctx.LINK_STATUS))return console.log("Unable to initialize the shader program: "+this._ctx.getProgramInfoLog(this._program)),null;this.initBuffers([-1,1,-1,1,1,-1,-1,-1,-1,1,-1,-1]),this._programInfo={attribs:{vertexPosition:this._ctx.getAttribLocation(this._program,"a_position")},uniforms:{projectionMatrix:this._ctx.getUniformLocation(this._program,"u_projectionMatrix"),modelViewMatrix:this._ctx.getUniformLocation(this._program,"u_modelViewMatrix"),resolution:this._ctx.getUniformLocation(this._program,"u_resolution"),time:this._ctx.getUniformLocation(this._program,"u_time")}},this._ctx.useProgram(this._program),this.pxratio=u,this.resize(i,o)}var n,r,i;return n=t,i=[{key:"createShaderOfType",value:function(t,n,r){var e=t.createShader(n);return t.shaderSource(e,r),t.compileShader(e),t.getShaderParameter(e,t.COMPILE_STATUS)?e:(console.log("An error occurred compiling the shaders: "+t.getShaderInfoLog(e)),t.deleteShader(e),null)}}],(r=[{key:"resize",value:function(t,n){this._el.width=t*this.pxratio,this._el.height=n*this.pxratio,this._size=[t*this.pxratio,n*this.pxratio],this._el.style.width=t+"px",this._el.style.height=n+"px",this._ctx.viewportWidth=t*this.pxratio,this._ctx.viewportHeight=n*this.pxratio,this._ctx.uniform2fv(this._programInfo.uniforms.resolution,this._size),this.initBuffers(this._positions)}},{key:"initBuffers",value:function(t){this._positions=t,this._positionBuffer=this._ctx.createBuffer(),this._ctx.bindBuffer(this._ctx.ARRAY_BUFFER,this._positionBuffer),this._ctx.bufferData(this._ctx.ARRAY_BUFFER,new Float32Array(t),this._ctx.STATIC_DRAW)}},{key:"addUniform",value:function(n,r,e){var i=this._programInfo.uniforms[n];switch(i=this._ctx.getUniformLocation(this._program,"u_".concat(n)),r){case t.TYPE_FLOAT:isNaN(e)||this._ctx.uniform1f(i,e);break;case t.TYPE_V2:e instanceof Array&&2===e.length&&this._ctx.uniform2fv(i,e);break;case t.TYPE_V3:e instanceof Array&&3===e.length&&this._ctx.uniform3fv(i,e);break;case t.TYPE_V4:e instanceof Array&&4===e.length&&this._ctx.uniform4fv(i,e)}return this._programInfo.uniforms[n]=i,i}},{key:"addTexture",value:function(n,r,e){var i=this.textures,o=(i.length,this._ctx.createTexture());return this._ctx.pixelStorei(this._ctx.UNPACK_FLIP_Y_WEBGL,!0),this._ctx.bindTexture(this._ctx.TEXTURE_2D,o),r===t.IMAGETYPE_MIRROR?(this._ctx.texParameteri(this._ctx.TEXTURE_2D,this._ctx.TEXTURE_WRAP_S,this._ctx.MIRRORED_REPEAT),this._ctx.texParameteri(this._ctx.TEXTURE_2D,this._ctx.TEXTURE_WRAP_T,this._ctx.MIRRORED_REPEAT)):r===t.IMAGETYPE_REGULAR&&(this._ctx.texParameteri(this._ctx.TEXTURE_2D,this._ctx.TEXTURE_WRAP_S,this._ctx.CLAMP_TO_EDGE),this._ctx.texParameteri(this._ctx.TEXTURE_2D,this._ctx.TEXTURE_WRAP_T,this._ctx.CLAMP_TO_EDGE)),this._ctx.texParameteri(this._ctx.TEXTURE_2D,this._ctx.TEXTURE_MIN_FILTER,this._ctx.LINEAR),this._ctx.texImage2D(this._ctx.TEXTURE_2D,0,this._ctx.RGBA,this._ctx.RGBA,this._ctx.UNSIGNED_BYTE,e),i.push({name:n,tex:o}),this.textures=i,o}},{key:"updateTexture",value:function(t,n){this._ctx.bindTexture(this._ctx.TEXTURE_2D,t),this._ctx.texImage2D(this._ctx.TEXTURE_2D,0,this._ctx.RGBA,this._ctx.RGBA,this._ctx.UNSIGNED_BYTE,n)}},{key:"initTextures",value:function(){for(var t=0;t<this.textures.length;t++){var n=this.textures[t].name,r=this._programInfo.uniforms[n];r=this._ctx.getUniformLocation(this._program,"u_".concat(n)),this._ctx.uniform1i(r,t),this._ctx.activeTexture(this._ctx["TEXTURE".concat(t)]),this._ctx.bindTexture(this._ctx.TEXTURE_2D,this.textures[t].tex)}}},{key:"run",value:function(t){this.running&&requestAnimationFrame(this.run),this.time=2e-4*t,this._ctx.uniform1f(this._programInfo.uniforms.time,this.time),this.render()}},{key:"render",value:function(){this._ctx.viewport(0,0,this._ctx.viewportWidth,this._ctx.viewportHeight),this.clearing&&(this._ctx.clearColor(1,0,0,0),this._ctx.blendFunc(this._ctx.SRC_ALPHA,this._ctx.ONE_MINUS_SRC_ALPHA),this._ctx.clear(this._ctx.COLOR_BUFFER_BIT)),this._ctx.bindBuffer(this._ctx.ARRAY_BUFFER,this._positionBuffer),this._ctx.vertexAttribPointer(this._programInfo.attribs.vertexPosition,3,this._ctx.FLOAT,!1,0,0),this._ctx.enableVertexAttribArray(this._programInfo.attribs.vertexPosition),this.includePerspectiveMatrix&&this._ctx.uniformMatrix4fv(this._programInfo.uniforms.projectionMatrix,!1,this.perspectiveMatrix),this.includeModelViewMatrix&&this._ctx.uniformMatrix4fv(this._programInfo.uniforms.modelViewMatrix,!1,this.modelViewMatrix),this._ctx.drawArrays(this._ctx.TRIANGLE_STRIP,0,4)}},{key:"time",set:function(t){isNaN(t)||(this._time=t)},get:function(){return this._time||0}},{key:"includePerspectiveMatrix",set:function(t){this._includePerspectiveMatrix=!0===t},get:function(){return!0===this._includePerspectiveMatrix}},{key:"includeModelViewMatrix",set:function(t){this._includeModelViewMatrix=!0===t},get:function(){return!0===this._includeModelViewMatrix}},{key:"textures",set:function(t){t instanceof Array&&(this._textures=t)},get:function(){return this._textures||[]}},{key:"clearing",set:function(t){this._clearing=!0===t},get:function(){return!0===this._clearing}},{key:"running",set:function(t){!this.running&&!0===t&&requestAnimationFrame(this.run),this._running=!0===t},get:function(){return!0===this._running}},{key:"pxratio",set:function(t){t>0&&(this._pxratio=t)},get:function(){return this._pxratio||1}},{key:"perspectiveMatrix",get:function(){var t=45*Math.PI/180,n=this._size.w/this._size.h,r=mat4.create();return mat4.perspective(r,t,n,.1,100),r}},{key:"modelViewMatrix",get:function(){var t=mat4.create();return mat4.translate(t,t,[-0,0,-1]),t}}])&&e(n.prototype,r),i&&e(n,i),t}();i.TYPE_INT=0,i.TYPE_FLOAT=1,i.TYPE_V2=2,i.TYPE_V3=3,i.TYPE_V4=4,i.IMAGETYPE_REGULAR=0,i.IMAGETYPE_TILE=1,i.IMAGETYPE_MIRROR=2,n.default=i},function(t,n,r){var e=r(4).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(2)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){r(47)("Float32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){"use strict";if(r(2)){var e=r(14),i=r(1),o=r(13),u=r(28),c=r(30),s=r(48),f=r(21),a=r(32),h=r(16),l=r(3),p=r(31),_=r(9),v=r(5),x=r(33),g=r(18),y=r(19),d=r(6),m=r(41),E=r(7),T=r(10),b=r(49),w=r(42),A=r(43),P=r(34).f,R=r(53),S=r(8),I=r(0),O=r(54),M=r(38),U=r(58),L=r(59),F=r(11),j=r(64),B=r(65),k=r(40),D=r(66),N=r(4),V=r(67),W=N.f,Y=V.f,G=i.RangeError,C=i.TypeError,X=i.Uint8Array,z=Array.prototype,H=s.ArrayBuffer,q=s.DataView,K=O(0),J=O(2),Q=O(3),Z=O(4),$=O(5),tt=O(6),nt=M(!0),rt=M(!1),et=L.values,it=L.keys,ot=L.entries,ut=z.lastIndexOf,ct=z.reduce,st=z.reduceRight,ft=z.join,at=z.sort,ht=z.slice,lt=z.toString,pt=z.toLocaleString,_t=I("iterator"),vt=I("toStringTag"),xt=S("typed_constructor"),gt=S("def_constructor"),yt=c.CONSTR,dt=c.TYPED,mt=c.VIEW,Et=O(1,function(t,n){return Pt(U(t,t[gt]),n)}),Tt=o(function(){return 1===new X(new Uint16Array([1]).buffer)[0]}),bt=!!X&&!!X.prototype.set&&o(function(){new X(1).set({})}),wt=function(t,n){var r=_(t);if(r<0||r%n)throw G("Wrong offset!");return r},At=function(t){if(E(t)&&dt in t)return t;throw C(t+" is not a typed array!")},Pt=function(t,n){if(!(E(t)&&xt in t))throw C("It is not a typed array constructor!");return new t(n)},Rt=function(t,n){return St(U(t,t[gt]),n)},St=function(t,n){for(var r=0,e=n.length,i=Pt(t,e);e>r;)i[r]=n[r++];return i},It=function(t,n,r){W(t,n,{get:function(){return this._d[r]}})},Ot=function(t){var n,r,e,i,o,u,c=T(t),s=arguments.length,a=s>1?arguments[1]:void 0,h=void 0!==a,l=R(c);if(null!=l&&!b(l)){for(u=l.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(h&&s>2&&(a=f(a,arguments[2],2)),n=0,r=v(c.length),i=Pt(this,r);r>n;n++)i[n]=h?a(c[n],n):c[n];return i},Mt=function(){for(var t=0,n=arguments.length,r=Pt(this,n);n>t;)r[t]=arguments[t++];return r},Ut=!!X&&o(function(){pt.call(new X(1))}),Lt=function(){return pt.apply(Ut?ht.call(At(this)):At(this),arguments)},Ft={copyWithin:function(t,n){return D.call(At(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return Z(At(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return k.apply(At(this),arguments)},filter:function(t){return Rt(this,J(At(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return $(At(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(At(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){K(At(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return rt(At(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(At(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ft.apply(At(this),arguments)},lastIndexOf:function(t){return ut.apply(At(this),arguments)},map:function(t){return Et(At(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ct.apply(At(this),arguments)},reduceRight:function(t){return st.apply(At(this),arguments)},reverse:function(){for(var t,n=At(this).length,r=Math.floor(n/2),e=0;e<r;)t=this[e],this[e++]=this[--n],this[n]=t;return this},some:function(t){return Q(At(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return at.call(At(this),t)},subarray:function(t,n){var r=At(this),e=r.length,i=g(t,e);return new(U(r,r[gt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,v((void 0===n?e:g(n,e))-i))}},jt=function(t,n){return Rt(this,ht.call(At(this),t,n))},Bt=function(t){At(this);var n=wt(arguments[1],1),r=this.length,e=T(t),i=v(e.length),o=0;if(i+n>r)throw G("Wrong length!");for(;o<i;)this[n+o]=e[o++]},kt={entries:function(){return ot.call(At(this))},keys:function(){return it.call(At(this))},values:function(){return et.call(At(this))}},Dt=function(t,n){return E(t)&&t[dt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Nt=function(t,n){return Dt(t,n=y(n,!0))?h(2,t[n]):Y(t,n)},Vt=function(t,n,r){return!(Dt(t,n=y(n,!0))&&E(r)&&d(r,"value"))||d(r,"get")||d(r,"set")||r.configurable||d(r,"writable")&&!r.writable||d(r,"enumerable")&&!r.enumerable?W(t,n,r):(t[n]=r.value,t)};yt||(V.f=Nt,N.f=Vt),u(u.S+u.F*!yt,"Object",{getOwnPropertyDescriptor:Nt,defineProperty:Vt}),o(function(){lt.call({})})&&(lt=pt=function(){return ft.call(this)});var Wt=p({},Ft);p(Wt,kt),l(Wt,_t,kt.values),p(Wt,{slice:jt,set:Bt,constructor:function(){},toString:lt,toLocaleString:Lt}),It(Wt,"buffer","b"),It(Wt,"byteOffset","o"),It(Wt,"byteLength","l"),It(Wt,"length","e"),W(Wt,vt,{get:function(){return this[dt]}}),t.exports=function(t,n,r,s){var f=t+((s=!!s)?"Clamped":"")+"Array",h="get"+t,p="set"+t,_=i[f],g=_||{},y=_&&A(_),d=!_||!c.ABV,T={},b=_&&_.prototype,R=function(t,r){W(t,r,{get:function(){return function(t,r){var e=t._d;return e.v[h](r*n+e.o,Tt)}(this,r)},set:function(t){return function(t,r,e){var i=t._d;s&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[p](r*n+i.o,e,Tt)}(this,r,t)},enumerable:!0})};d?(_=r(function(t,r,e,i){a(t,_,f,"_d");var o,u,c,s,h=0,p=0;if(E(r)){if(!(r instanceof H||"ArrayBuffer"==(s=m(r))||"SharedArrayBuffer"==s))return dt in r?St(_,r):Ot.call(_,r);o=r,p=wt(e,n);var g=r.byteLength;if(void 0===i){if(g%n)throw G("Wrong length!");if((u=g-p)<0)throw G("Wrong length!")}else if((u=v(i)*n)+p>g)throw G("Wrong length!");c=u/n}else c=x(r),o=new H(u=c*n);for(l(t,"_d",{b:o,o:p,l:u,e:c,v:new q(o)});h<c;)R(t,h++)}),b=_.prototype=w(Wt),l(b,"constructor",_)):o(function(){_(1)})&&o(function(){new _(-1)})&&j(function(t){new _,new _(null),new _(1.5),new _(t)},!0)||(_=r(function(t,r,e,i){var o;return a(t,_,f),E(r)?r instanceof H||"ArrayBuffer"==(o=m(r))||"SharedArrayBuffer"==o?void 0!==i?new g(r,wt(e,n),i):void 0!==e?new g(r,wt(e,n)):new g(r):dt in r?St(_,r):Ot.call(_,r):new g(x(r))}),K(y!==Function.prototype?P(g).concat(P(y)):P(g),function(t){t in _||l(_,t,g[t])}),_.prototype=b,e||(b.constructor=_));var S=b[_t],I=!!S&&("values"==S.name||null==S.name),O=kt.values;l(_,xt,!0),l(b,dt,f),l(b,mt,!0),l(b,gt,_),(s?new _(1)[vt]==f:vt in b)||W(b,vt,{get:function(){return f}}),T[f]=_,u(u.G+u.W+u.F*(_!=g),T),u(u.S,f,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o(function(){g.of.call(_,1)}),f,{from:Ot,of:Mt}),"BYTES_PER_ELEMENT"in b||l(b,"BYTES_PER_ELEMENT",n),u(u.P,f,Ft),B(f),u(u.P+u.F*bt,f,{set:Bt}),u(u.P+u.F*!I,f,kt),e||b.toString==lt||(b.toString=lt),u(u.P+u.F*o(function(){new _(1).slice()}),f,{slice:jt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new _([1,2]).toLocaleString()})||!o(function(){b.toLocaleString.call([1,2])})),f,{toLocaleString:Lt}),F[f]=I?S:O,e||I||l(b,_t,O)}}else t.exports=function(){}},function(t,n,r){"use strict";var e=r(1),i=r(2),o=r(14),u=r(30),c=r(3),s=r(31),f=r(13),a=r(32),h=r(9),l=r(5),p=r(33),_=r(34).f,v=r(4).f,x=r(40),g=r(25),y="prototype",d="Wrong index!",m=e.ArrayBuffer,E=e.DataView,T=e.Math,b=e.RangeError,w=e.Infinity,A=m,P=T.abs,R=T.pow,S=T.floor,I=T.log,O=T.LN2,M=i?"_b":"buffer",U=i?"_l":"byteLength",L=i?"_o":"byteOffset";function F(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,s=(1<<c)-1,f=s>>1,a=23===n?R(2,-24)-R(2,-77):0,h=0,l=t<0||0===t&&1/t<0?1:0;for((t=P(t))!=t||t===w?(i=t!=t?1:0,e=s):(e=S(I(t)/O),t*(o=R(2,-e))<1&&(e--,o*=2),(t+=e+f>=1?a/o:a*R(2,1-f))*o>=2&&(e++,o/=2),e+f>=s?(i=0,e=s):e+f>=1?(i=(t*o-1)*R(2,n),e+=f):(i=t*R(2,f-1)*R(2,n),e=0));n>=8;u[h++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[h++]=255&e,e/=256,c-=8);return u[--h]|=128*l,u}function j(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,s=r-1,f=t[s--],a=127&f;for(f>>=7;c>0;a=256*a+t[s],s--,c-=8);for(e=a&(1<<-c)-1,a>>=-c,c+=n;c>0;e=256*e+t[s],s--,c-=8);if(0===a)a=1-u;else{if(a===o)return e?NaN:f?-w:w;e+=R(2,n),a-=u}return(f?-1:1)*e*R(2,a-n)}function B(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function k(t){return[255&t]}function D(t){return[255&t,t>>8&255]}function N(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function V(t){return F(t,52,8)}function W(t){return F(t,23,4)}function Y(t,n,r){v(t[y],n,{get:function(){return this[r]}})}function G(t,n,r,e){var i=p(+r);if(i+n>t[U])throw b(d);var o=t[M]._b,u=i+t[L],c=o.slice(u,u+n);return e?c:c.reverse()}function C(t,n,r,e,i,o){var u=p(+r);if(u+n>t[U])throw b(d);for(var c=t[M]._b,s=u+t[L],f=e(+i),a=0;a<n;a++)c[s+a]=f[o?a:n-a-1]}if(u.ABV){if(!f(function(){m(1)})||!f(function(){new m(-1)})||f(function(){return new m,new m(1.5),new m(NaN),"ArrayBuffer"!=m.name})){for(var X,z=(m=function(t){return a(this,m),new A(p(t))})[y]=A[y],H=_(A),q=0;H.length>q;)(X=H[q++])in m||c(m,X,A[X]);o||(z.constructor=m)}var K=new E(new m(2)),J=E[y].setInt8;K.setInt8(0,2147483648),K.setInt8(1,2147483649),!K.getInt8(0)&&K.getInt8(1)||s(E[y],{setInt8:function(t,n){J.call(this,t,n<<24>>24)},setUint8:function(t,n){J.call(this,t,n<<24>>24)}},!0)}else m=function(t){a(this,m,"ArrayBuffer");var n=p(t);this._b=x.call(new Array(n),0),this[U]=n},E=function(t,n,r){a(this,E,"DataView"),a(t,m,"DataView");var e=t[U],i=h(n);if(i<0||i>e)throw b("Wrong offset!");if(i+(r=void 0===r?e-i:l(r))>e)throw b("Wrong length!");this[M]=t,this[L]=i,this[U]=r},i&&(Y(m,"byteLength","_l"),Y(E,"buffer","_b"),Y(E,"byteLength","_l"),Y(E,"byteOffset","_o")),s(E[y],{getInt8:function(t){return G(this,1,t)[0]<<24>>24},getUint8:function(t){return G(this,1,t)[0]},getInt16:function(t){var n=G(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=G(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return B(G(this,4,t,arguments[1]))},getUint32:function(t){return B(G(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return j(G(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return j(G(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){C(this,1,t,k,n)},setUint8:function(t,n){C(this,1,t,k,n)},setInt16:function(t,n){C(this,2,t,D,n,arguments[2])},setUint16:function(t,n){C(this,2,t,D,n,arguments[2])},setInt32:function(t,n){C(this,4,t,N,n,arguments[2])},setUint32:function(t,n){C(this,4,t,N,n,arguments[2])},setFloat32:function(t,n){C(this,4,t,W,n,arguments[2])},setFloat64:function(t,n){C(this,8,t,V,n,arguments[2])}});g(m,"ArrayBuffer"),g(E,"DataView"),c(E[y],u.VIEW,!0),n.ArrayBuffer=m,n.DataView=E},function(t,n,r){var e=r(11),i=r(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(4),i=r(12),o=r(51);t.exports=r(2)?Object.defineProperties:function(t,n){i(t);for(var r,u=o(n),c=u.length,s=0;c>s;)e.f(t,r=u[s++],n[r]);return t}},function(t,n,r){var e=r(35),i=r(24);t.exports=Object.keys||function(t){return e(t,i)}},function(t,n,r){var e=r(1).document;t.exports=e&&e.documentElement},function(t,n,r){var e=r(41),i=r(0)("iterator"),o=r(11);t.exports=r(15).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(21),i=r(36),o=r(10),u=r(5),c=r(55);t.exports=function(t,n){var r=1==t,s=2==t,f=3==t,a=4==t,h=6==t,l=5==t||h,p=n||c;return function(n,c,_){for(var v,x,g=o(n),y=i(g),d=e(c,_,3),m=u(y.length),E=0,T=r?p(n,m):s?p(n,0):void 0;m>E;E++)if((l||E in y)&&(x=d(v=y[E],E,g),t))if(r)T[E]=x;else if(x)switch(t){case 3:return!0;case 5:return v;case 6:return E;case 2:T.push(v)}else if(a)return!1;return h?-1:f||a?a:T}}},function(t,n,r){var e=r(56);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(7),i=r(57),o=r(0)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){var e=r(22);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(12),i=r(29),o=r(0)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||null==(r=e(u)[o])?n:i(r)}},function(t,n,r){"use strict";var e=r(60),i=r(61),o=r(11),u=r(17);t.exports=r(62)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e=r(0)("unscopables"),i=Array.prototype;null==i[e]&&r(3)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";var e=r(14),i=r(28),o=r(20),u=r(3),c=r(11),s=r(63),f=r(25),a=r(43),h=r(0)("iterator"),l=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,n,r,_,v,x,g){s(r,n,_);var y,d,m,E=function(t){if(!l&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},T=n+" Iterator",b="values"==v,w=!1,A=t.prototype,P=A[h]||A["@@iterator"]||v&&A[v],R=P||E(v),S=v?b?E("entries"):R:void 0,I="Array"==n&&A.entries||P;if(I&&(m=a(I.call(new t)))!==Object.prototype&&m.next&&(f(m,T,!0),e||"function"==typeof m[h]||u(m,h,p)),b&&P&&"values"!==P.name&&(w=!0,R=function(){return P.call(this)}),e&&!g||!l&&!w&&A[h]||u(A,h,R),c[n]=R,c[T]=p,v)if(y={values:b?R:E("values"),keys:x?R:E("keys"),entries:S},g)for(d in y)d in A||o(A,d,y[d]);else i(i.P+i.F*(l||w),n,y);return y}},function(t,n,r){"use strict";var e=r(42),i=r(16),o=r(25),u={};r(3)(u,r(0)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var e=r(0)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(1),i=r(4),o=r(2),u=r(0)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,r){"use strict";var e=r(10),i=r(18),o=r(5);t.exports=[].copyWithin||function(t,n){var r=e(this),u=o(r.length),c=i(t,u),s=i(n,u),f=arguments.length>2?arguments[2]:void 0,a=Math.min((void 0===f?u:i(f,u))-s,u-c),h=1;for(s<c&&c<s+a&&(h=-1,s+=a-1,c+=a-1);a-- >0;)s in r?r[c]=r[s]:delete r[c],c+=h,s+=h;return r}},function(t,n,r){var e=r(68),i=r(16),o=r(17),u=r(19),c=r(6),s=r(26),f=Object.getOwnPropertyDescriptor;n.f=r(2)?f:function(t,n){if(t=o(t),n=u(n,!0),s)try{return f(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n){n.f={}.propertyIsEnumerable}]);
