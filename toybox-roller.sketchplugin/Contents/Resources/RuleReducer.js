!function(t){var r={};function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){Object.defineProperty(r,"__esModule",{value:!0});var n,a=e(1);(n=a)&&n.__esModule;var i=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},o={colors:[],saved:!1};r.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,r=arguments[1];switch(r.type){case"SET_TOKENS":return colors=_.flatten(_.map(r.data.list.colors,function(t){return _.map(t.colors,function(t){return{name:t.name,hex:t.value}})})),i({},t,{colors:colors});case"SET_COLORS":return i({},t,{colors:r.data});case"SET_TYPE":return i({},t,{typography:r.data});case"SAVED":return i({},t,{saved:r.data});case"SET_ERROR_MESSAGE":return i({},t,{errorMsg:r.data});default:return t}}},function(t,r,e){var n;!function(a){var i=/^\s+/,o=/\s+$/,s=0,f=a.round,u=a.min,l=a.max,h=a.random;function c(t,r){if(t=t||"",r=r||{},t instanceof c)return t;if(!(this instanceof c))return new c(t,r);var e=function(t){var r={r:0,g:0,b:0},e=1,n=null,s=null,f=null,h=!1,c=!1;"string"==typeof t&&(t=function(t){t=t.replace(i,"").replace(o,"").toLowerCase();var r,e=!1;if(E[t])t=E[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(r=U.rgb.exec(t))return{r:r[1],g:r[2],b:r[3]};if(r=U.rgba.exec(t))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=U.hsl.exec(t))return{h:r[1],s:r[2],l:r[3]};if(r=U.hsla.exec(t))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=U.hsv.exec(t))return{h:r[1],s:r[2],v:r[3]};if(r=U.hsva.exec(t))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=U.hex8.exec(t))return{r:P(r[1]),g:P(r[2]),b:P(r[3]),a:I(r[4]),format:e?"name":"hex8"};if(r=U.hex6.exec(t))return{r:P(r[1]),g:P(r[2]),b:P(r[3]),format:e?"name":"hex"};if(r=U.hex4.exec(t))return{r:P(r[1]+""+r[1]),g:P(r[2]+""+r[2]),b:P(r[3]+""+r[3]),a:I(r[4]+""+r[4]),format:e?"name":"hex8"};if(r=U.hex3.exec(t))return{r:P(r[1]+""+r[1]),g:P(r[2]+""+r[2]),b:P(r[3]+""+r[3]),format:e?"name":"hex"};return!1}(t));"object"==typeof t&&(B(t.r)&&B(t.g)&&B(t.b)?(g=t.r,d=t.g,b=t.b,r={r:255*T(g,255),g:255*T(d,255),b:255*T(b,255)},h=!0,c="%"===String(t.r).substr(-1)?"prgb":"rgb"):B(t.h)&&B(t.s)&&B(t.v)?(n=L(t.s),s=L(t.v),r=function(t,r,e){t=6*T(t,360),r=T(r,100),e=T(e,100);var n=a.floor(t),i=t-n,o=e*(1-r),s=e*(1-i*r),f=e*(1-(1-i)*r),u=n%6;return{r:255*[e,s,o,o,f,e][u],g:255*[f,e,e,s,o,o][u],b:255*[o,o,f,e,e,s][u]}}(t.h,n,s),h=!0,c="hsv"):B(t.h)&&B(t.s)&&B(t.l)&&(n=L(t.s),f=L(t.l),r=function(t,r,e){var n,a,i;function o(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(t=T(t,360),r=T(r,100),e=T(e,100),0===r)n=a=i=e;else{var s=e<.5?e*(1+r):e+r-e*r,f=2*e-s;n=o(f,s,t+1/3),a=o(f,s,t),i=o(f,s,t-1/3)}return{r:255*n,g:255*a,b:255*i}}(t.h,n,f),h=!0,c="hsl"),t.hasOwnProperty("a")&&(e=t.a));var g,d,b;return e=M(e),{ok:h,format:t.format||c,r:u(255,l(r.r,0)),g:u(255,l(r.g,0)),b:u(255,l(r.b,0)),a:e}}(t);this._originalInput=t,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=f(100*this._a)/100,this._format=r.format||e.format,this._gradientType=r.gradientType,this._r<1&&(this._r=f(this._r)),this._g<1&&(this._g=f(this._g)),this._b<1&&(this._b=f(this._b)),this._ok=e.ok,this._tc_id=s++}function g(t,r,e){t=T(t,255),r=T(r,255),e=T(e,255);var n,a,i=l(t,r,e),o=u(t,r,e),s=(i+o)/2;if(i==o)n=a=0;else{var f=i-o;switch(a=s>.5?f/(2-i-o):f/(i+o),i){case t:n=(r-e)/f+(r<e?6:0);break;case r:n=(e-t)/f+2;break;case e:n=(t-r)/f+4}n/=6}return{h:n,s:a,l:s}}function d(t,r,e){t=T(t,255),r=T(r,255),e=T(e,255);var n,a,i=l(t,r,e),o=u(t,r,e),s=i,f=i-o;if(a=0===i?0:f/i,i==o)n=0;else{switch(i){case t:n=(r-e)/f+(r<e?6:0);break;case r:n=(e-t)/f+2;break;case e:n=(t-r)/f+4}n/=6}return{h:n,s:a,v:s}}function b(t,r,e,n){var a=[q(f(t).toString(16)),q(f(r).toString(16)),q(f(e).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function p(t,r,e,n){return[q(N(n)),q(f(t).toString(16)),q(f(r).toString(16)),q(f(e).toString(16))].join("")}function _(t,r){r=0===r?0:r||10;var e=c(t).toHsl();return e.s-=r/100,e.s=j(e.s),c(e)}function m(t,r){r=0===r?0:r||10;var e=c(t).toHsl();return e.s+=r/100,e.s=j(e.s),c(e)}function v(t){return c(t).desaturate(100)}function y(t,r){r=0===r?0:r||10;var e=c(t).toHsl();return e.l+=r/100,e.l=j(e.l),c(e)}function A(t,r){r=0===r?0:r||10;var e=c(t).toRgb();return e.r=l(0,u(255,e.r-f(-r/100*255))),e.g=l(0,u(255,e.g-f(-r/100*255))),e.b=l(0,u(255,e.b-f(-r/100*255))),c(e)}function x(t,r){r=0===r?0:r||10;var e=c(t).toHsl();return e.l-=r/100,e.l=j(e.l),c(e)}function k(t,r){var e=c(t).toHsl(),n=(e.h+r)%360;return e.h=n<0?360+n:n,c(e)}function w(t){var r=c(t).toHsl();return r.h=(r.h+180)%360,c(r)}function S(t){var r=c(t).toHsl(),e=r.h;return[c(t),c({h:(e+120)%360,s:r.s,l:r.l}),c({h:(e+240)%360,s:r.s,l:r.l})]}function R(t){var r=c(t).toHsl(),e=r.h;return[c(t),c({h:(e+90)%360,s:r.s,l:r.l}),c({h:(e+180)%360,s:r.s,l:r.l}),c({h:(e+270)%360,s:r.s,l:r.l})]}function H(t){var r=c(t).toHsl(),e=r.h;return[c(t),c({h:(e+72)%360,s:r.s,l:r.l}),c({h:(e+216)%360,s:r.s,l:r.l})]}function F(t,r,e){r=r||6,e=e||30;var n=c(t).toHsl(),a=360/e,i=[c(t)];for(n.h=(n.h-(a*r>>1)+720)%360;--r;)n.h=(n.h+a)%360,i.push(c(n));return i}function C(t,r){r=r||6;for(var e=c(t).toHsv(),n=e.h,a=e.s,i=e.v,o=[],s=1/r;r--;)o.push(c({h:n,s:a,v:i})),i=(i+s)%1;return o}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,e,n=this.toRgb();return t=n.r/255,r=n.g/255,e=n.b/255,.2126*(t<=.03928?t/12.92:a.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:a.pow((r+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:a.pow((e+.055)/1.055,2.4))},setAlpha:function(t){return this._a=M(t),this._roundA=f(100*this._a)/100,this},toHsv:function(){var t=d(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=d(this._r,this._g,this._b),r=f(360*t.h),e=f(100*t.s),n=f(100*t.v);return 1==this._a?"hsv("+r+", "+e+"%, "+n+"%)":"hsva("+r+", "+e+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=g(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=g(this._r,this._g,this._b),r=f(360*t.h),e=f(100*t.s),n=f(100*t.l);return 1==this._a?"hsl("+r+", "+e+"%, "+n+"%)":"hsla("+r+", "+e+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return b(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,r,e,n,a){var i=[q(f(t).toString(16)),q(f(r).toString(16)),q(f(e).toString(16)),q(N(n))];if(a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1))return i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0);return i.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:f(this._r),g:f(this._g),b:f(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+f(this._r)+", "+f(this._g)+", "+f(this._b)+")":"rgba("+f(this._r)+", "+f(this._g)+", "+f(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:f(100*T(this._r,255))+"%",g:f(100*T(this._g,255))+"%",b:f(100*T(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+f(100*T(this._r,255))+"%, "+f(100*T(this._g,255))+"%, "+f(100*T(this._b,255))+"%)":"rgba("+f(100*T(this._r,255))+"%, "+f(100*T(this._g,255))+"%, "+f(100*T(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(O[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+p(this._r,this._g,this._b,this._a),e=r,n=this._gradientType?"GradientType = 1, ":"";if(t){var a=c(t);e="#"+p(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+r+",endColorstr="+e+")"},toString:function(t){var r=!!t;t=t||this._format;var e=!1,n=this._a<1&&this._a>=0;return r||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return c(this.toString())},_applyModification:function(t,r){var e=t.apply(null,[this].concat([].slice.call(r)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(y,arguments)},brighten:function(){return this._applyModification(A,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(_,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(v,arguments)},spin:function(){return this._applyModification(k,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(F,arguments)},complement:function(){return this._applyCombination(w,arguments)},monochromatic:function(){return this._applyCombination(C,arguments)},splitcomplement:function(){return this._applyCombination(H,arguments)},triad:function(){return this._applyCombination(S,arguments)},tetrad:function(){return this._applyCombination(R,arguments)}},c.fromRatio=function(t,r){if("object"==typeof t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]="a"===n?t[n]:L(t[n]));t=e}return c(t,r)},c.equals=function(t,r){return!(!t||!r)&&c(t).toRgbString()==c(r).toRgbString()},c.random=function(){return c.fromRatio({r:h(),g:h(),b:h()})},c.mix=function(t,r,e){e=0===e?0:e||50;var n=c(t).toRgb(),a=c(r).toRgb(),i=e/100;return c({r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a})},c.readability=function(t,r){var e=c(t),n=c(r);return(a.max(e.getLuminance(),n.getLuminance())+.05)/(a.min(e.getLuminance(),n.getLuminance())+.05)},c.isReadable=function(t,r,e){var n,a,i=c.readability(t,r);switch(a=!1,(n=function(t){var r,e;r=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase(),e=(t.size||"small").toLowerCase(),"AA"!==r&&"AAA"!==r&&(r="AA");"small"!==e&&"large"!==e&&(e="small");return{level:r,size:e}}(e)).level+n.size){case"AAsmall":case"AAAlarge":a=i>=4.5;break;case"AAlarge":a=i>=3;break;case"AAAsmall":a=i>=7}return a},c.mostReadable=function(t,r,e){var n,a,i,o,s=null,f=0;a=(e=e||{}).includeFallbackColors,i=e.level,o=e.size;for(var u=0;u<r.length;u++)(n=c.readability(t,r[u]))>f&&(f=n,s=c(r[u]));return c.isReadable(t,s,{level:i,size:o})||!a?s:(e.includeFallbackColors=!1,c.mostReadable(t,["#fff","#000"],e))};var E=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},O=c.hexNames=function(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}(E);function M(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function T(t,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var e=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=u(r,l(0,parseFloat(t))),e&&(t=parseInt(t*r,10)/100),a.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function j(t){return u(1,l(0,t))}function P(t){return parseInt(t,16)}function q(t){return 1==t.length?"0"+t:""+t}function L(t){return t<=1&&(t=100*t+"%"),t}function N(t){return a.round(255*parseFloat(t)).toString(16)}function I(t){return P(t)/255}var z,$,D,U=($="[\\s|\\(]+("+(z="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+z+")[,|\\s]+("+z+")\\s*\\)?",D="[\\s|\\(]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")\\s*\\)?",{CSS_UNIT:new RegExp(z),rgb:new RegExp("rgb"+$),rgba:new RegExp("rgba"+D),hsl:new RegExp("hsl"+$),hsla:new RegExp("hsla"+D),hsv:new RegExp("hsv"+$),hsva:new RegExp("hsva"+D),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function B(t){return!!U.CSS_UNIT.exec(t)}void 0!==t&&t.exports?t.exports=c:void 0===(n=function(){return c}.call(r,e,r,t))||(t.exports=n)}(Math)}]);