// import React, { Component } from 'react'
// import Taro from '@tarojs/taro'
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();
//标准aes需要添加ECB模式和NoPadding模式
CryptoJS.mode.ECB=function(){var a=CryptoJS.lib.BlockCipherMode.extend();a.Encryptor=a.extend({processBlock:function(a,b){this._cipher.encryptBlock(a,b)}});a.Decryptor=a.extend({processBlock:function(a,b){this._cipher.decryptBlock(a,b)}});return a}();
CryptoJS.pad.NoPadding={pad:function(){},unpad:function(){}};


/*
* Fingerprintjs2 2.0.5 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/* global define */
/*
(function (name, context, definition) {
    'use strict'
    if (typeof window !== 'undefined' && typeof define === 'function' && define.amd) 
    { 
      define(definition) 
    } 
    else if (typeof module !== 'undefined' && module.exports) 
    { 
      module.exports = definition() 
    } 
    else if (context.exports) 
    { 
      context.exports = definition() 
    } else { 
      context[name] = definition() 
    }
  })('Fingerprint2', this, function () {
    'use strict'
    */
  class Fingerprint2class extends Component{
    //'use strict'
  /// MurmurHash3 related functions
  
  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // added together as a 64bit int (as an array of two 32bit ints).
  //
  init(){
    var x64Add = function (m, n) {
      m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
      n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
      var o = [0, 0, 0, 0]
      o[3] += m[3] + n[3]
      o[2] += o[3] >>> 16
      o[3] &= 0xffff
      o[2] += m[2] + n[2]
      o[1] += o[2] >>> 16
      o[2] &= 0xffff
      o[1] += m[1] + n[1]
      o[0] += o[1] >>> 16
      o[1] &= 0xffff
      o[0] += m[0] + n[0]
      o[0] &= 0xffff
      return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }
  
  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // multiplied together as a 64bit int (as an array of two 32bit ints).
  //
    var x64Multiply = function (m, n) {
      m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
      n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
      var o = [0, 0, 0, 0]
      o[3] += m[3] * n[3]
      o[2] += o[3] >>> 16
      o[3] &= 0xffff
      o[2] += m[2] * n[3]
      o[1] += o[2] >>> 16
      o[2] &= 0xffff
      o[2] += m[3] * n[2]
      o[1] += o[2] >>> 16
      o[2] &= 0xffff
      o[1] += m[1] * n[3]
      o[0] += o[1] >>> 16
      o[1] &= 0xffff
      o[1] += m[2] * n[2]
      o[0] += o[1] >>> 16
      o[1] &= 0xffff
      o[1] += m[3] * n[1]
      o[0] += o[1] >>> 16
      o[1] &= 0xffff
      o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
      o[0] &= 0xffff
      return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) rotated left by that number of positions.
  //
    var x64Rotl = function (m, n) {
      n %= 64
      if (n === 32) {
        return [m[1], m[0]]
      } else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
      } else {
        n -= 32
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
      }
    }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) shifted left by that number of positions.
  //
    var x64LeftShift = function (m, n) {
      n %= 64
      if (n === 0) {
        return m
      } else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
      } else {
        return [m[1] << (n - 32), 0]
      }
    }
  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // xored together as a 64bit int (as an array of two 32bit ints).
  //
    var x64Xor = function (m, n) {
      return [m[0] ^ n[0], m[1] ^ n[1]]
    }
  //
  // Given a block, returns murmurHash3's final x64 mix of that block.
  // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
  // only place where we need to right shift 64bit ints.)
  //
    var x64Fmix = function (h) {
      h = x64Xor(h, [0, h[0] >>> 1])
      h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
      h = x64Xor(h, [0, h[0] >>> 1])
      h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
      h = x64Xor(h, [0, h[0] >>> 1])
      return h
    }
  
  //
  // Given a string and an optional seed as an int, returns a 128 bit
  // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
  //
    var x64hash128 = function (key, seed) {
      key = key || ''
      seed = seed || 0
      var remainder = key.length % 16
      var bytes = key.length - remainder
      var h1 = [0, seed]
      var h2 = [0, seed]
      var k1 = [0, 0]
      var k2 = [0, 0]
      var c1 = [0x87c37b91, 0x114253d5]
      var c2 = [0x4cf5ad43, 0x2745937f]
      for (var i = 0; i < bytes; i = i + 16) {
        k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
        k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
        k1 = x64Multiply(k1, c1)
        k1 = x64Rotl(k1, 31)
        k1 = x64Multiply(k1, c2)
        h1 = x64Xor(h1, k1)
        h1 = x64Rotl(h1, 27)
        h1 = x64Add(h1, h2)
        h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
        k2 = x64Multiply(k2, c2)
        k2 = x64Rotl(k2, 33)
        k2 = x64Multiply(k2, c1)
        h2 = x64Xor(h2, k2)
        h2 = x64Rotl(h2, 31)
        h2 = x64Add(h2, h1)
        h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
      }
      k1 = [0, 0]
      k2 = [0, 0]
      switch (remainder) {
        case 15:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
        // fallthrough
        case 14:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
        // fallthrough
        case 13:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
        // fallthrough
        case 12:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
        // fallthrough
        case 11:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
        // fallthrough
        case 10:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
        // fallthrough
        case 9:
          k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
          k2 = x64Multiply(k2, c2)
          k2 = x64Rotl(k2, 33)
          k2 = x64Multiply(k2, c1)
          h2 = x64Xor(h2, k2)
        // fallthrough
        case 8:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
        // fallthrough
        case 7:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
        // fallthrough
        case 6:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
        // fallthrough
        case 5:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
        // fallthrough
        case 4:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
        // fallthrough
        case 3:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
        // fallthrough
        case 2:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
        // fallthrough
        case 1:
          k1 = x64Xor(k1, [0, key.charCodeAt(i)])
          k1 = x64Multiply(k1, c1)
          k1 = x64Rotl(k1, 31)
          k1 = x64Multiply(k1, c2)
          h1 = x64Xor(h1, k1)
        // fallthrough
      }
      h1 = x64Xor(h1, [0, key.length])
      h2 = x64Xor(h2, [0, key.length])
      h1 = x64Add(h1, h2)
      h2 = x64Add(h2, h1)
      h1 = x64Fmix(h1)
      h2 = x64Fmix(h2)
      h1 = x64Add(h1, h2)
      h2 = x64Add(h2, h1)
      return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
    }
  
    var defaultOptions = {
      preprocessor: null,
      audio: {
        timeout: 1000,
          // On iOS 11, audio context can only be used in response to user interaction.
          // We require users to explicitly enable audio fingerprinting on iOS 11.
          // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
        excludeIOS11: true
      },
      fonts: {
        swfContainerId: 'fingerprintjs2',
        swfPath: 'flash/compiled/FontList.swf',
        userDefinedFonts: [],
        extendedJsFonts: false
      },
      screen: {
         // To ensure consistent fingerprints when users rotate their mobile devices
        detectScreenOrientation: true
      },
      plugins: {
        sortPluginsFor: [/palemoon/i],
        excludeIE: false
      },
      extraComponents: [],
      excludes: {
        // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
        'enumerateDevices': true,
        // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
        'pixelRatio': true,
        // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
        'doNotTrack': true,
        // uses js fonts already
        'fontsFlash': true
      },
      NOT_AVAILABLE: 'not available',
      ERROR: 'error',
      EXCLUDED: 'excluded'
    }
  
    var each = function (obj, iterator) {
      if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
        obj.forEach(iterator)
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          iterator(obj[i], i, obj)
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator(obj[key], key, obj)
          }
        }
      }
    }
  
    var map = function (obj, iterator) {
      var results = []
      // Not using strict equality so that this acts as a
      // shortcut to checking for `null` and `undefined`.
      if (obj == null) {
        return results
      }
      if (Array.prototype.map && obj.map === Array.prototype.map) { return obj.map(iterator) }
      each(obj, function (value, index, list) {
        results.push(iterator(value, index, list))
      })
      return results
    }
  
    var extendSoft = function (target, source) {
      if (source == null) { return target }
      var value
      var key
      for (key in source) {
        value = source[key]
        if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
          target[key] = value
        }
      }
      return target
    }
  
  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
    var enumerateDevicesKey = function (done, options) {
      if (!isEnumerateDevicesSupported()) {
        return done(options.NOT_AVAILABLE)
      }
      navigator.mediaDevices.enumerateDevices().then(function (devices) {
        done(devices.map(function (device) {
          return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
        }))
      })
        .catch(function (error) {
          done(error)
        })
    }
  
    var isEnumerateDevicesSupported = function () {
      return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
    }
  // Inspired by and based on https://github.com/cozylife/audio-fingerprint
    var audioKey = function (done, options) {
      var audioOptions = options.audio
      if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
          // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
        return done(options.EXCLUDED)
      }
  
      var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext
  
      if (AudioContext == null) {
        return done(options.NOT_AVAILABLE)
      }
  
      var context = new AudioContext(1, 44100, 44100)
  
      var oscillator = context.createOscillator()
      oscillator.type = 'triangle'
      oscillator.frequency.setValueAtTime(10000, context.currentTime)
  
      var compressor = context.createDynamicsCompressor()
      each([
          ['threshold', -50],
          ['knee', 40],
          ['ratio', 12],
          ['reduction', -20],
          ['attack', 0],
          ['release', 0.25]
      ], function (item) {
        if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
          compressor[item[0]].setValueAtTime(item[1], context.currentTime)
        }
      })
  
      oscillator.connect(compressor)
      compressor.connect(context.destination)
      oscillator.start(0)
      context.startRendering()
  
      var audioTimeoutId = setTimeout(function () {
        console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
        context.oncomplete = function () {}
        context = null
        return done('audioTimeout')
      }, audioOptions.timeout)
  
      context.oncomplete = function (event) {
        var fingerprint
        try {
          clearTimeout(audioTimeoutId)
          fingerprint = event.renderedBuffer.getChannelData(0)
              .slice(4500, 5000)
              .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
              .toString()
          oscillator.disconnect()
          compressor.disconnect()
        } catch (error) {
          done(error)
          return
        }
        done(fingerprint)
      }
    }
    var UserAgent = function (done) {
      done(navigator.userAgent)
    }
    var languageKey = function (done, options) {
      done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
    }
    var colorDepthKey = function (done, options) {
      done(window.screen.colorDepth || options.NOT_AVAILABLE)
    }
    var deviceMemoryKey = function (done, options) {
      done(navigator.deviceMemory || options.NOT_AVAILABLE)
    }
    var pixelRatioKey = function (done, options) {
      done(window.devicePixelRatio || options.NOT_AVAILABLE)
    }
    var screenResolutionKey = function (done, options) {
      done(getScreenResolution(options))
    }
    var getScreenResolution = function (options) {
      var resolution = [window.screen.width, window.screen.height]
      if (options.screen.detectScreenOrientation) {
        resolution.sort().reverse()
      }
      return resolution
    }
    var availableScreenResolutionKey = function (done, options) {
      done(getAvailableScreenResolution(options))
    }
    var getAvailableScreenResolution = function (options) {
      if (window.screen.availWidth && window.screen.availHeight) {
        var available = [window.screen.availHeight, window.screen.availWidth]
        if (options.screen.detectScreenOrientation) {
          available.sort().reverse()
        }
        return available
      }
      // headless browsers
      return options.NOT_AVAILABLE
    }
    var timezoneOffset = function (done) {
      done(new Date().getTimezoneOffset())
    }
    var timezone = function (done, options) {
      if (window.Intl && window.Intl.DateTimeFormat) {
        done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
        return
      }
      done(options.NOT_AVAILABLE)
    }
    var sessionStorageKey = function (done, options) {
      done(hasSessionStorage(options))
    }
    var localStorageKey = function (done, options) {
      done(hasLocalStorage(options))
    }
    var indexedDbKey = function (done, options) {
      done(hasIndexedDB(options))
    }
    var addBehaviorKey = function (done) {
        // body might not be defined at this point or removed programmatically
      done(!!(document.body && document.body.addBehavior))
    }
    var openDatabaseKey = function (done) {
      done(!!window.openDatabase)
    }
    var cpuClassKey = function (done, options) {
      done(getNavigatorCpuClass(options))
    }
    var platformKey = function (done, options) {
      done(getNavigatorPlatform(options))
    }
    var doNotTrackKey = function (done, options) {
      done(getDoNotTrack(options))
    }
    var canvasKey = function (done, options) {
      if (isCanvasSupported()) {
        done(getCanvasFp(options))
        return
      }
      done(options.NOT_AVAILABLE)
    }
    var webglKey = function (done, options) {
      if (isWebGlSupported()) {
        done(getWebglFp())
        return
      }
      done(options.NOT_AVAILABLE)
    }
    var webglVendorAndRendererKey = function (done) {
      if (isWebGlSupported()) {
        done(getWebglVendorAndRenderer())
        return
      }
      done()
    }
    var adBlockKey = function (done) {
      done(getAdBlock())
    }
    var hasLiedLanguagesKey = function (done) {
      done(getHasLiedLanguages())
    }
    var hasLiedResolutionKey = function (done) {
      done(getHasLiedResolution())
    }
    var hasLiedOsKey = function (done) {
      done(getHasLiedOs())
    }
    var hasLiedBrowserKey = function (done) {
      done(getHasLiedBrowser())
    }
  // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
    var flashFontsKey = function (done, options) {
      // we do flash if swfobject is loaded
      if (!hasSwfObjectLoaded()) {
        return done('swf object not loaded')
      }
      if (!hasMinFlashInstalled()) {
        return done('flash not installed')
      }
      if (!options.fonts.swfPath) {
        return done('missing options.fonts.swfPath')
      }
      loadSwfAndDetectFonts(function (fonts) {
        done(fonts)
      }, options)
    }
  // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
    var jsFontsKey = function (done, options) {
        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
      var baseFonts = ['monospace', 'sans-serif', 'serif']
  
      var fontList = [
        'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
        'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
        'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
        'Geneva', 'Georgia',
        'Helvetica', 'Helvetica Neue',
        'Impact',
        'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
        'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
        'Palatino', 'Palatino Linotype',
        'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
        'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
        'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
      ]
  
      if (options.fonts.extendedJsFonts) {
        var extendedFontList = [
          'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
          'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
          'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
          'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
          'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
          'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
          'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
          'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
          'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
          'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
          'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
          'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
          'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
          'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
          'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
          'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
          'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
          'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
          'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
          'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
          'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
          'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
          'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
          'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
          'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
          'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
          'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
          'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
          'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
          'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
          'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF']
        fontList = fontList.concat(extendedFontList)
      }
  
      fontList = fontList.concat(options.fonts.userDefinedFonts)
  
        // remove duplicate fonts
      fontList = fontList.filter(function (font, position) {
        return fontList.indexOf(font) === position
      })
  
        // we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
      var testString = 'mmmmmmmmmmlli'
  
        // we test using 72px font size, we may use any size. I guess larger the better.
      var testSize = '72px'
  
      var h = document.getElementsByTagName('body')[0]
  
        // div to load spans for the base fonts
      var baseFontsDiv = document.createElement('div')
  
        // div to load spans for the fonts to detect
      var fontsDiv = document.createElement('div')
  
      var defaultWidth = {}
      var defaultHeight = {}
  
        // creates a span where the fonts will be loaded
      var createSpan = function () {
        var s = document.createElement('span')
          /*
           * We need this css as in some weird browser this
           * span elements shows up for a microSec which creates a
           * bad user experience
           */
        s.style.position = 'absolute'
        s.style.left = '-9999px'
        s.style.fontSize = testSize
  
          // css font reset to reset external styles
        s.style.fontStyle = 'normal'
        s.style.fontWeight = 'normal'
        s.style.letterSpacing = 'normal'
        s.style.lineBreak = 'auto'
        s.style.lineHeight = 'normal'
        s.style.textTransform = 'none'
        s.style.textAlign = 'left'
        s.style.textDecoration = 'none'
        s.style.textShadow = 'none'
        s.style.whiteSpace = 'normal'
        s.style.wordBreak = 'normal'
        s.style.wordSpacing = 'normal'
  
        s.innerHTML = testString
        return s
      }
  
        // creates a span and load the font to detect and a base font for fallback
      var createSpanWithFonts = function (fontToDetect, baseFont) {
        var s = createSpan()
        s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
        return s
      }
  
        // creates spans for the base fonts and adds them to baseFontsDiv
      var initializeBaseFontsSpans = function () {
        var spans = []
        for (var index = 0, length = baseFonts.length; index < length; index++) {
          var s = createSpan()
          s.style.fontFamily = baseFonts[index]
          baseFontsDiv.appendChild(s)
          spans.push(s)
        }
        return spans
      }
  
        // creates spans for the fonts to detect and adds them to fontsDiv
      var initializeFontsSpans = function () {
        var spans = {}
        for (var i = 0, l = fontList.length; i < l; i++) {
          var fontSpans = []
          for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
            var s = createSpanWithFonts(fontList[i], baseFonts[j])
            fontsDiv.appendChild(s)
            fontSpans.push(s)
          }
          spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
        }
        return spans
      }
  
        // checks if a font is available
      var isFontAvailable = function (fontSpans) {
        var detected = false
        for (var i = 0; i < baseFonts.length; i++) {
          detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
          if (detected) {
            return detected
          }
        }
        return detected
      }
  
        // create spans for base fonts
      var baseFontsSpans = initializeBaseFontsSpans()
  
        // add the spans to the DOM
      h.appendChild(baseFontsDiv)
  
        // get the default width for the three base fonts
      for (var index = 0, length = baseFonts.length; index < length; index++) {
        defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
        defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
      }
  
        // create spans for fonts to detect
      var fontsSpans = initializeFontsSpans()
  
        // add all the spans to the DOM
      h.appendChild(fontsDiv)
  
        // check available fonts
      var available = []
      for (var i = 0, l = fontList.length; i < l; i++) {
        if (isFontAvailable(fontsSpans[fontList[i]])) {
          available.push(fontList[i])
        }
      }
  
        // remove spans from DOM
      h.removeChild(fontsDiv)
      h.removeChild(baseFontsDiv)
      done(available)
    }
    var pluginsComponent = function (done, options) {
      if (isIE()) {
        if (!options.plugins.excludeIE) {
          done(getIEPlugins(options))
        } else {
          done(options.EXCLUDED)
        }
      } else {
        done(getRegularPlugins(options))
      }
    }
    var getRegularPlugins = function (options) {
      if (navigator.plugins == null) {
        return options.NOT_AVAILABLE
      }
  
      var plugins = []
        // plugins isn't defined in Node envs.
      for (var i = 0, l = navigator.plugins.length; i < l; i++) {
        if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) }
      }
  
        // sorting plugins only for those user agents, that we know randomize the plugins
        // every time we try to enumerate them
      if (pluginsShouldBeSorted(options)) {
        plugins = plugins.sort(function (a, b) {
          if (a.name > b.name) { return 1 }
          if (a.name < b.name) { return -1 }
          return 0
        })
      }
      return map(plugins, function (p) {
        var mimeTypes = map(p, function (mt) {
          return [mt.type, mt.suffixes]
        })
        return [p.name, p.description, mimeTypes]
      })
    }
    var getIEPlugins = function (options) {
      var result = []
      if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
        var names = [
          'AcroPDF.PDF', // Adobe PDF reader 7+
          'Adodb.Stream',
          'AgControl.AgControl', // Silverlight
          'DevalVRXCtrl.DevalVRXCtrl.1',
          'MacromediaFlashPaper.MacromediaFlashPaper',
          'Msxml2.DOMDocument',
          'Msxml2.XMLHTTP',
          'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
          'QuickTime.QuickTime', // QuickTime
          'QuickTimeCheckObject.QuickTimeCheck.1',
          'RealPlayer',
          'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
          'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
          'Scripting.Dictionary',
          'SWCtl.SWCtl', // ShockWave player
          'Shell.UIHelper',
          'ShockwaveFlash.ShockwaveFlash', // flash plugin
          'Skype.Detection',
          'TDCCtl.TDCCtl',
          'WMPlayer.OCX', // Windows media player
          'rmocx.RealPlayer G2 Control',
          'rmocx.RealPlayer G2 Control.1'
        ]
          // starting to detect plugins in IE
        result = map(names, function (name) {
          try {
              // eslint-disable-next-line no-new
            new window.ActiveXObject(name)
            return name
          } catch (e) {
            return options.ERROR
          }
        })
      } else {
        result.push(options.NOT_AVAILABLE)
      }
      if (navigator.plugins) {
        result = result.concat(getRegularPlugins(options))
      }
      return result
    }
    var pluginsShouldBeSorted = function (options) {
      var should = false
      for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
        var re = options.plugins.sortPluginsFor[i]
        if (navigator.userAgent.match(re)) {
          should = true
          break
        }
      }
      return should
    }
    var touchSupportKey = function (done) {
      done(getTouchSupport())
    }
    var hardwareConcurrencyKey = function (done, options) {
      done(getHardwareConcurrency(options))
    }
    var hasSessionStorage = function (options) {
      try {
        return !!window.sessionStorage
      } catch (e) {
        return options.ERROR // SecurityError when referencing it means it exists
      }
    }
  
  // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
    var hasLocalStorage = function (options) {
      try {
        // return !!window.localStorage
		// 小程序环境无window
		return false
      } catch (e) {
        return options.ERROR // SecurityError when referencing it means it exists
      }
    }
    var hasIndexedDB = function (options) {
      try {
        return !!window.indexedDB
      } catch (e) {
        return options.ERROR // SecurityError when referencing it means it exists
      }
    }
    var getHardwareConcurrency = function (options) {
      if (navigator.hardwareConcurrency) {
        return navigator.hardwareConcurrency
      }
      return options.NOT_AVAILABLE
    }
    var getNavigatorCpuClass = function (options) {
      return navigator.cpuClass || options.NOT_AVAILABLE
    }
    var getNavigatorPlatform = function (options) {
      if (navigator.platform) {
        return navigator.platform
      } else {
        return options.NOT_AVAILABLE
      }
    }
    var getDoNotTrack = function (options) {
      if (navigator.doNotTrack) {
        return navigator.doNotTrack
      } else if (navigator.msDoNotTrack) {
        return navigator.msDoNotTrack
      } else if (window.doNotTrack) {
        return window.doNotTrack
      } else {
        return options.NOT_AVAILABLE
      }
    }
  // This is a crude and primitive touch screen detection.
  // It's not possible to currently reliably detect the  availability of a touch screen
  // with a JS, without actually subscribing to a touch event.
  // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
  // https://github.com/Modernizr/Modernizr/issues/548
  // method returns an array of 3 values:
  // maxTouchPoints, the success or failure of creating a TouchEvent,
  // and the availability of the 'ontouchstart' property
  
    var getTouchSupport = function () {
      var maxTouchPoints = 0
      var touchEvent
      if (typeof navigator.maxTouchPoints !== 'undefined') {
        maxTouchPoints = navigator.maxTouchPoints
      } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
        maxTouchPoints = navigator.msMaxTouchPoints
      }
      try {
        document.createEvent('TouchEvent')
        touchEvent = true
      } catch (_) {
        touchEvent = false
      }
      var touchStart = 'ontouchstart' in window
      return [maxTouchPoints, touchEvent, touchStart]
    }
  // https://www.browserleaks.com/canvas#how-does-it-work
  
    var getCanvasFp = function (options) {
      var result = []
        // Very simple now, need to make it more complex (geo shapes etc)
      var canvas = document.createElement('canvas')
      canvas.width = 2000
      canvas.height = 200
      canvas.style.display = 'inline'
      var ctx = canvas.getContext('2d')
        // detect browser support of canvas winding
        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
      ctx.rect(0, 0, 10, 10)
      ctx.rect(2, 2, 6, 6)
      result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))
  
      ctx.textBaseline = 'alphabetic'
      ctx.fillStyle = '#f60'
      ctx.fillRect(125, 1, 62, 20)
      ctx.fillStyle = '#069'
        // https://github.com/Valve/fingerprintjs2/issues/66
      if (options.dontUseFakeFontInCanvas) {
        ctx.font = '11pt Arial'
      } else {
        ctx.font = '11pt no-real-font-123'
      }
      ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
      ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
      ctx.font = '18pt Arial'
      ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)
  
        // canvas blending
        // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
        // http://jsfiddle.net/NDYV8/16/
      ctx.globalCompositeOperation = 'multiply'
      ctx.fillStyle = 'rgb(255,0,255)'
      ctx.beginPath()
      ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = 'rgb(0,255,255)'
      ctx.beginPath()
      ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = 'rgb(255,255,0)'
      ctx.beginPath()
      ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = 'rgb(255,0,255)'
        // canvas winding
        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // http://jsfiddle.net/NDYV8/19/
      ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
      ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
      ctx.fill('evenodd')
  
      if (canvas.toDataURL) { result.push('canvas fp:' + canvas.toDataURL()) }
      return result
    }
    var getWebglFp = function () {
      var gl
      var fa2s = function (fa) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        return '[' + fa[0] + ', ' + fa[1] + ']'
      }
      var maxAnisotropy = function (gl) {
        var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
        if (ext) {
          var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
          if (anisotropy === 0) {
            anisotropy = 2
          }
          return anisotropy
        } else {
          return null
        }
      }
  
      gl = getWebglCanvas()
      if (!gl) { return null }
        // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
        // First it draws a gradient object with shaders and convers the image to the Base64 string.
        // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
        // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
      var result = []
      var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
      var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
      var vertexPosBuffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
      var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
      vertexPosBuffer.itemSize = 3
      vertexPosBuffer.numItems = 3
      var program = gl.createProgram()
      var vshader = gl.createShader(gl.VERTEX_SHADER)
      gl.shaderSource(vshader, vShaderTemplate)
      gl.compileShader(vshader)
      var fshader = gl.createShader(gl.FRAGMENT_SHADER)
      gl.shaderSource(fshader, fShaderTemplate)
      gl.compileShader(fshader)
      gl.attachShader(program, vshader)
      gl.attachShader(program, fshader)
      gl.linkProgram(program)
      gl.useProgram(program)
      program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
      program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
      gl.enableVertexAttribArray(program.vertexPosArray)
      gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
      gl.uniform2f(program.offsetUniform, 1, 1)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
      try {
        result.push(gl.canvas.toDataURL())
      } catch (e) {
          /* .toDataURL may be absent or broken (blocked by extension) */
      }
      result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
      result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
      result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
      result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
      result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
      result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
      result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
      result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
      result.push('webgl max anisotropy:' + maxAnisotropy(gl))
      result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
      result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
      result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
      result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
      result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
      result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
      result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
      result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
      result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
      result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
      result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
      result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
      result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
      result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
      result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
      result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
      result.push('webgl version:' + gl.getParameter(gl.VERSION))
  
      try {
          // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
        var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
        if (extensionDebugRendererInfo) {
          result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
          result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
        }
      } catch (e) { /* squelch */ }
  
      if (!gl.getShaderPrecisionFormat) {
        return result
      }
  
      each(['FLOAT', 'INT'], function (numType) {
        each(['VERTEX', 'FRAGMENT'], function (shader) {
          each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
            each(['precision', 'rangeMin', 'rangeMax'], function (key) {
              var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
              if (key !== 'precision') {
                key = 'precision ' + key
              }
              var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
              result.push(line)
            })
          })
        })
      })
      return result
    }
    var getWebglVendorAndRenderer = function () {
        /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
      try {
        var glContext = getWebglCanvas()
        var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
        return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
      } catch (e) {
        return null
      }
    }
    var getAdBlock = function () {
      var ads = document.createElement('div')
      ads.innerHTML = '&nbsp;'
      ads.className = 'adsbox'
      var result = false
      try {
          // body may not exist, that's why we need try/catch
        document.body.appendChild(ads)
        result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
        document.body.removeChild(ads)
      } catch (e) {
        result = false
      }
      return result
    }
    var getHasLiedLanguages = function () {
        // We check if navigator.language is equal to the first language of navigator.languages
      if (typeof navigator.languages !== 'undefined') {
        try {
          var firstLanguages = navigator.languages[0].substr(0, 2)
          if (firstLanguages !== navigator.language.substr(0, 2)) {
            return true
          }
        } catch (err) {
          return true
        }
      }
      return false
    }
    var getHasLiedResolution = function () {
      return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    }
    var getHasLiedOs = function () {
      var userAgent = navigator.userAgent.toLowerCase()
      var oscpu = navigator.oscpu
      var platform = navigator.platform.toLowerCase()
      var os
        // We extract the OS from the user agent (respect the order of the if else if statement)
      if (userAgent.indexOf('windows phone') >= 0) {
        os = 'Windows Phone'
      } else if (userAgent.indexOf('win') >= 0) {
        os = 'Windows'
      } else if (userAgent.indexOf('android') >= 0) {
        os = 'Android'
      } else if (userAgent.indexOf('linux') >= 0) {
        os = 'Linux'
      } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
        os = 'iOS'
      } else if (userAgent.indexOf('mac') >= 0) {
        os = 'Mac'
      } else {
        os = 'Other'
      }
        // We detect if the person uses a mobile device
      var mobileDevice = (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0))
  
      if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
        return true
      }
  
        // We compare oscpu with the OS extracted from the UA
      if (typeof oscpu !== 'undefined') {
        oscpu = oscpu.toLowerCase()
        if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
          return true
        } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
          return true
        } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
          return true
        } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
          return true
        }
      }
  
        // We compare platform with the OS extracted from the UA
      if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
        return true
      } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
        return true
      } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
        return true
      } else if ((platform.indexOf('win') === -1 && platform.indexOf('linux') === -1 && platform.indexOf('mac') === -1) !== (os === 'Other')) {
        return true
      }
  
      return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
    }
    var getHasLiedBrowser = function () {
      var userAgent = navigator.userAgent.toLowerCase()
      var productSub = navigator.productSub
  
        // we extract the browser from the user agent (respect the order of the tests)
      var browser
      if (userAgent.indexOf('firefox') >= 0) {
        browser = 'Firefox'
      } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
        browser = 'Opera'
      } else if (userAgent.indexOf('chrome') >= 0) {
        browser = 'Chrome'
      } else if (userAgent.indexOf('safari') >= 0) {
        browser = 'Safari'
      } else if (userAgent.indexOf('trident') >= 0) {
        browser = 'Internet Explorer'
      } else {
        browser = 'Other'
      }
  
      if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
        return true
      }
  
        // eslint-disable-next-line no-eval
      var tempRes = eval.toString().length
      if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
        return true
      } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
        return true
      } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') {
        return true
      }
  
        // We create an error to see how it is handled
      var errFirefox
      try {
          // eslint-disable-next-line no-throw-literal
        throw 'a'
      } catch (err) {
        try {
          err.toSource()
          errFirefox = true
        } catch (errOfErr) {
          errFirefox = false
        }
      }
      return errFirefox && browser !== 'Firefox' && browser !== 'Other'
    }
    var isCanvasSupported = function () {
      var elem = document.createElement('canvas')
      return !!(elem.getContext && elem.getContext('2d'))
    }
    var isWebGlSupported = function () {
        // code taken from Modernizr
      if (!isCanvasSupported()) {
        return false
      }
  
      var glContext = getWebglCanvas()
      return !!window.WebGLRenderingContext && !!glContext
    }
    var isIE = function () {
      if (navigator.appName === 'Microsoft Internet Explorer') {
        return true
      } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
        return true
      }
      return false
    }
    var hasSwfObjectLoaded = function () {
      return typeof window.swfobject !== 'undefined'
    }
    var hasMinFlashInstalled = function () {
      return window.swfobject.hasFlashPlayerVersion('9.0.0')
    }
    var addFlashDivNode = function (options) {
      var node = document.createElement('div')
      node.setAttribute('id', options.fonts.swfContainerId)
      document.body.appendChild(node)
    }
    var loadSwfAndDetectFonts = function (done, options) {
      var hiddenCallback = '___fp_swf_loaded'
      window[hiddenCallback] = function (fonts) {
        done(fonts)
      }
      var id = options.fonts.swfContainerId
      addFlashDivNode()
      var flashvars = { onReady: hiddenCallback }
      var flashparams = { allowScriptAccess: 'always', menu: 'false' }
      window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
    }
    var getWebglCanvas = function () {
      var canvas = document.createElement('canvas')
      var gl = null
      try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      } catch (e) { /* squelch */ }
      if (!gl) { gl = null }
      return gl
    }
  
    var components = [
      //{key: 'userAgent', getData: UserAgent},
      //{key: 'language', getData: languageKey},
      //{key: 'colorDepth', getData: colorDepthKey},
      //{key: 'deviceMemory', getData: deviceMemoryKey},
      //{key: 'pixelRatio', getData: pixelRatioKey},
      //{key: 'hardwareConcurrency', getData: hardwareConcurrencyKey},
      //{key: 'screenResolution', getData: screenResolutionKey},
      //{key: 'availableScreenResolution', getData: availableScreenResolutionKey},
      //{key: 'timezoneOffset', getData: timezoneOffset},
      //{key: 'timezone', getData: timezone},
      //{key: 'sessionStorage', getData: sessionStorageKey},
      //{key: 'localStorage', getData: localStorageKey},
      //{key: 'indexedDb', getData: indexedDbKey},
      //{key: 'addBehavior', getData: addBehaviorKey},
      //{key: 'openDatabase', getData: openDatabaseKey},
      //{key: 'cpuClass', getData: cpuClassKey},
      //{key: 'platform', getData: platformKey},
      //{key: 'doNotTrack', getData: doNotTrackKey},
      //{key: 'plugins', getData: pluginsComponent},
      //{key: 'canvas', getData: canvasKey},
      //{key: 'webgl', getData: webglKey},
      //{key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey},
      //{key: 'adBlock', getData: adBlockKey},
      //{key: 'hasLiedLanguages', getData: hasLiedLanguagesKey},
      //{key: 'hasLiedResolution', getData: hasLiedResolutionKey},
      //{key: 'hasLiedOs', getData: hasLiedOsKey},
      //{key: 'hasLiedBrowser', getData: hasLiedBrowserKey},
      //{key: 'touchSupport', getData: touchSupportKey},
      //{key: 'fonts', getData: jsFontsKey, pauseBefore: true},
      //{key: 'fontsFlash', getData: flashFontsKey, pauseBefore: true},
      //{key: 'audio', getData: audioKey},
      //{key: 'enumerateDevices', getData: enumerateDevicesKey}
    ]
  
    var Fingerprint2 = function (options) {
      throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    }
  
    Fingerprint2.get = function (options, callback) {
      if (!callback) {
        callback = options
        options = {}
      } else if (!options) {
        options = {}
      }
      extendSoft(options, defaultOptions)
      options.components = options.extraComponents.concat(components)
  
      var keys = {
        data: [],
        addPreprocessedComponent: function (key, value) {
          if (typeof options.preprocessor === 'function') {
            value = options.preprocessor(key, value)
          }
          keys.data.push({key: key, value: value})
        }
      }
  
      var i = -1
      var chainComponents = function (alreadyWaited) {
        i += 1
        if (i >= options.components.length) { // on finish
          callback(keys.data)
          return
        }
        var component = options.components[i]
  
        if (options.excludes[component.key]) {
          chainComponents(false) // skip
          return
        }
  
        if (!alreadyWaited && component.pauseBefore) {
          i -= 1
          setTimeout(function () {
            chainComponents(true)
          }, 1)
          return
        }
  
        try {
          component.getData(function (value) {
            keys.addPreprocessedComponent(component.key, value)
            chainComponents(false)
          }, options)
        } catch (error) {
          // main body error
          keys.addPreprocessedComponent(component.key, String(error))
          chainComponents(false)
        }
      }
  
      chainComponents(false)
    }
  
    Fingerprint2.getPromise = function (options) {
      return new Promise(function (resolve, reject) {
        Fingerprint2.get(options, resolve)
      })
    }
  
    Fingerprint2.getV18 = function (options, callback) {
      if (callback == null) {
        callback = options
        options = {}
      }
      return Fingerprint2.get(options, function (components) {
        var newComponents = []
        for (var i = 0; i < components.length; i++) {
          var component = components[i]
          if (component.value === (options.NOT_AVAILABLE || 'not available')) {
            newComponents.push({key: component.key, value: 'unknown'})
          } else if (component.key === 'plugins') {
            newComponents.push({key: 'plugins',
              value: map(component.value, function (p) {
                var mimeTypes = map(p[2], function (mt) {
                  if (mt.join) { return mt.join('~') }
                  return mt
                }).join(',')
                return [p[0], p[1], mimeTypes].join('::')
              })})
          } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) {
            newComponents.push({key: component.key, value: component.value.join('~')})
          } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
            if (component.value) {
              newComponents.push({key: component.key, value: 1})
            } else {
              // skip
              continue
            }
          } else {
            if (component.value) {
              newComponents.push(component.value.join ? {key: component.key, value: component.value.join(';')} : component)
            } else {
              newComponents.push({key: component.key, value: component.value})
            }
          }
        }
        var murmur = x64hash128(map(newComponents, function (component) { return component.value }).join('~~~'), 31)
        callback(murmur, newComponents)
      })
    }
  
    Fingerprint2.x64hash128 = x64hash128
    Fingerprint2.VERSION = '2.0.0'
    return Fingerprint2
  }
  }
var o = new Fingerprint2class()
var Fingerprint2 = o.init()

//*******************************************************************************************************
//*******************************************************************************************************
//***********************************Sohu Plumber WebJssdk***********************************************
//*******************************************************************************************************
//*******************************************************************************************************











































//*******************************************************************************************************
//*******************************************************************************************************
//***********************************Sohu Plumber WebJssdk***********************************************
//*******************************************************************************************************
//*******************************************************************************************************

function guid() {
  //生成guid
  function S4() {
    var d=new Date();
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  //检查weixin是否存在guid，有则返回
  try {
    var value = wx.getStorageSync(plumberminiguid)
    if (value) {
        return value
    }
  } catch (e) {}
  //没有guid则生成guid然后返回
  var setguid = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()).toUpperCase();
  try {
    wx.setStorageSync(plumberminiguid, setguid)
    return setguid
  } catch (e) { }
  return setguid
}

var WebJssdkBase = (function(){
  const plumberminiguid = 'plumber-mini-guid'
  var baseInfo;
  var instantiated;     //匿名函数创建私有变量,判断单体对象是否被创建的句柄
  var fingerprintjs2info = "";
  function initwxbase (){
    try {
      const res = wx.getSystemInfoSync()
      //这里还要同步拿到用户的userinfo，进一步获取user_local_city，user_local_province，user_gender
      //user_wx_openid，user_wx_unionid，拼入res
      return res
    } catch (e) {
      // Do something when catch error
    }
    return null
  }
  async function asyncinit()
  {
    let wxret = await initwxbase()
    var key = {key: 'uid_sid', value: guid()}
    const info = {"type":"msg"}
    baseInfo = JSON.stringify(info)
    baseInfo = JSON.parse(baseInfo)

    if(null!=wxret){//获取微信基本配置
      baseInfo["device_brand"] = wxret["brand"];
      baseInfo["device_model"] = wxret["model"];
      baseInfo["device_platform"] = wxret["platform"];
      baseInfo["device_batterypercent"] = wxret["batteryLevel"];
      baseInfo["device_system"] = wxret["system"];
      baseInfo["user_wx_language"] = wxret["language"];

    }
  }
  function init() {
    return{
      GetBaseInfo:function()
      {
        return baseInfo;
      },
    }
  }
  return {
      getinstance: async function() {
          if (!instantiated) {
            instantiated =  new  init();
            await asyncinit();
          }
          return instantiated;
      }
    }
  }
)()

var webjssdk = (function() {
    var appmeta_appname
    var appmeta_appver
    var sdk_version = 0.2
    var dev = false
    var uid_uid = ""
	  var uid_sid = guid()
    var sendhttp = "https://lunarhook.picp.vip/plumber/statis/"
    //var sendhttp = "https://c-tessar.xdf.cn/plumber/statis/"
    var instantiated = undefined;     //匿名函数创建私有变量,判断单体对象是否被创建的句柄
    var routinglist = new Array()
    var httpkey = "swxapktzteyjsali"
    var localinfokey = ""
    var ScrollTick = (new Date()).getTime()
	  // 小程序环境无window
	  if (0) {
      localdb = true
      console.log('This browser supports localStorage');
    }else{
      console.log('This browser does NOT support localStorage');
    }
    console.oldLog = console.log;
    console.log = function(...str) {
      if(true==dev){console.oldLog(...str);}
    } 
    function init() {
        return {
          find: function (list, f) {
            return list.filter(f)[0]
          },
          deepCopyV: function (obj, cache) {
            if (cache === void 0) cache = []

            if (obj === null || typeof obj !== 'object') {
              return obj;
          }
    
            const objType = Object.prototype.toString.call(obj).slice(8, -1);

            // 考虑 正则对象的copy
            if (objType === 'RegExp') {
                return new RegExp(obj);
            }
        
            // 考虑 Date 实例 copy
            if (objType === 'Date') {
                return new Date(obj);
            }
        
            // 考虑 Error 实例 copy
            if (objType === 'Error') {
                return new Error(obj);
            }
    
            // if obj is hit, it is in circular structure
            var hit = instantiated.find(cache, function (c) { return c.original === obj })
            if (hit) {
              return hit.copy
            }
    
            var copy = Array.isArray(obj) ? [] : {}
            // put the copy into cache at first
            // because we want to refer it in recursive deepCopy
            cache.push({
              original: obj,
              copy: copy
            })
    
            Object.keys(obj).forEach(function (key) {
              copy[key] = instantiated.deepCopyV(obj[key], cache)
            })
    
            return copy
          },
          addTodbwithsend: function(text,detailinfo)
          {
            dateinfo[index]
            var last = routinglist[routinglist.length-1]
            var session_duration = (new Date().getTime()- last.timestamp) /1000
            var session_edge = last.original + "|" +  text
            const info = {
              "type": "msg", "time_stamp": new Date().getTime(), event: detailinfo,
              server_action: 'session'
              , session_duration:session_duration
              , session_edge: session_edge
              , session_step: last.step
              , session_sessiontype:"event"
              , appmeta_appname: appmeta_appname
              , appmeta_appver: appmeta_appver
              , uid_uid: uid_uid
              , uid_sid: uid_sid
            }
            var initinfo = JSON.stringify(info)
            instantiated.addTodb(text,detailinfo)
            instantiated.sendhttpinfo(initinfo)
    
          },
          addTodb: function (text, detailinfo) {
            /*
            对于滚动事件，1500ms内只记录一次，最终做长路径判断的时候，对回文的处理需要排除这些用户附加行为
            类似的还包括pull刷新，showModal，等event事件
            */
            //var detail =instantiated.deepCopyV(detailinfo)
            var detail = ""
            if(undefined!=detailinfo)
            {
             detail = JSON.parse(JSON.stringify(detailinfo))
            }
           var testScroll = -1 == text.toLowerCase().indexOf("scroll") ? false : true;
           var curtime = (new Date()).getTime()
           if (true == testScroll && curtime - ScrollTick > 1500) {
             ScrollTick = curtime
           }
           else if (true == testScroll && curtime - ScrollTick < 1500) {
             return
           }
           //滚动判断结束
            console.log(text, detail)
            var todo = {
              _id: new Date().toISOString(),
              routing: text,
              timestamp: (new Date()).getTime(),
              detail: detail
            };
            try {
              routinglist.push(todo)
            } catch (err) {
              console.log(err);
            }
          },
          initWebInfo:function()
          {
            return instantiated.sendbaseinfo()
          },
          encrypthttp:function(msg){
            var srcs = msg;
            var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(srcs), CryptoJS.enc.Utf8.parse(httpkey), {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
            return encrypted.toString();
          },
          encrypt:function  (msg) {
              var key = tokenstr;
              var srcs = msg;
              var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(srcs), CryptoJS.enc.Utf8.parse(key), {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
              return encrypted.toString();
              /* 服务器测试用加解密
              console.log("encrypt",encrypted.toString(),key,srcs)
              var xx = CryptoJS.enc.Utf8.parse(encrypted.toString())
              var Base64 = CryptoJS.enc.Base64.stringify(xx)
              console.log("enbase64",Base64.toString())
              var DeBase64 = CryptoJS.enc.Base64.parse(Base64.toString());
              DeBase64 = DeBase64.toString(CryptoJS.enc.Utf8);
              console.log("debase64",DeBase64.toString())   
              var decrypt = CryptoJS.AES.decrypt(DeBase64.toString(), CryptoJS.enc.Utf8.parse(key), {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
              console.log("decrypt",decrypt.toString(CryptoJS.enc.Utf8))  
              return encrypted.toString();
              */
          },
            currentTimeString:function() {
                var d = new Date();
                return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + " - ";
            },
            /*
            sendevent: async function () {
              try {
                var dateinfo = new Array()
                for (index = 0; index < routinglist.length; index++) {
                  dateinfo[index] = routinglist[index]
                  dateinfo[index].step = index
                }
                dateinfo.reverse()
                var subindex = dateinfo.length - 3
                dateinfo = dateinfo.slice(subindex >= 0 ? subindex : 0, dateinfo.length)
                for (index = 1; index < dateinfo.length; index++) {
                  dateinfo[index].duration = (dateinfo[index].timestamp - dateinfo[index - 1].timestamp) / 1000
                  dateinfo[index].original = dateinfo[index - 1].routing
                  dateinfo[index].edge = dateinfo[index].original + "|" + dateinfo[index].routing
                }
                dateinfo.splice(0, 1)
                const info = {
                  "type": "msg", "time_stamp": new Date().getTime(), routing_stack: dateinfo,
                  server_action: 'event'
                  , uid_uid: uid_uid
                  , uid_sid: uid_sid
                }
                var initinfo = JSON.stringify(info)
                //initinfo.userAgent = fingerprintjs2info.UserAgent()
                instantiated.sendhttpinfo(initinfo)
                //oWebJssdkNetwork.sendWebSocketMsg(initinfo)
              } catch (err) {
                console.log(err);
              }
            },
            */
            sendRouting: function(){
              try {
                
               var dateinfo = new Array()
               for(var index = 0 ;index<routinglist.length;index++)
               {
                 dateinfo[index] = routinglist[index]
                 dateinfo[index].step = index//routinglist.length-index
                 if(""==dateinfo[index].detail)
                 {
                    delete dateinfo[index].detail;
                 }
                 delete dateinfo[index]._id;
                 delete dateinfo[index]._rev;
               }
               
               for(index = 1 ;index<dateinfo.length;index++)
               {
                   dateinfo[index].duration = (dateinfo[index].timestamp - dateinfo[index-1].timestamp)/1000
                   dateinfo[index].original = dateinfo[index-1].routing
                   dateinfo[index].edge =  dateinfo[index].original + "|" +dateinfo[index].routing
               }
               //考虑0号节点的用途其实不大，不能形成边，但是在长路径中可以携带detail，因此不再删除0号节点
               //dateinfo.splice(0,1)
               //const user = JSON.parse(uni.getStorageSync('userInfo') || "{}")
               //const localUser = JSON.parse(uni.getStorageSync('LocalUserInfo') || "{}")
               const info = {
                 type: 'msg',
                 time_stamp: new Date().getTime(),
                 routing_stack: dateinfo,
                 appmeta_appname: appmeta_appname,
                 appmeta_appver: appmeta_appver,
                 server_action: 'routing',
                 uid_uid: uid_uid,
                 uid_sid: uid_sid,
               }
               var sstr = JSON.stringify(info)
               var checkjson = JSON.parse(sstr)       
               sstr = JSON.stringify(checkjson)
               instantiated.sendhttpinfo(sstr)
               //oWebJssdkNetwork.sendWebSocketMsg(initinfo)
               //这里要做超级聚合，就是routing清零，但是要把ff首包变成之前的路径聚合
               var ff= ""
               var detailinfo = Array()
               for(var rr=0;rr<dateinfo.length;rr++)
               {
                  var reg = /([*/0-9a-zA-Z,]+)/g;
                  var match = reg.exec(dateinfo[rr].original)
                  var d = dateinfo[rr].detail
                  if(undefined!=d)
                  { 
                    //d.routing = JSON.parse(JSON.stringify(dateinfo[rr]));
                    //detailinfo.push(JSON.parse(JSON.stringify(dateinfo[rr])))
                  }
                  if(undefined!=match[1] && 'undefined'!=match[1])
                  {
                    ff = ((""==ff||undefined==ff)?"":ff+",")+match[1]
                  }
               }
               if(""!=ff && undefined!=ff)
               {
                ff=ff+",bg"
               }
               routinglist =  []
               instantiated.addTodb(ff,detailinfo)
              } catch (err) {    
                console.log(err);
              }
            },
            createCORSRequest:function (method, url) {
              let xhr = xhr = new XMLHttpRequest();
              if ("withCredentials" in xhr) {// XHR for Chrome/Firefox/Opera/Safari.
                xhr.open(method, url, true);
              }
              else if (typeof XDomainRequest != "undefined") {// XDomainRequest for IE.
                xhr = new XDomainRequest();
                xhr.open(method, url);
              }
              else// CORS not supported.
              {
                xhr = null;
              }
              return xhr;
            },
            sendhttpinfo:function(msg){
              var r = JSON.parse(msg)
              r.time_stamp = (new Date()).getTime()
              msg = JSON.stringify(r)
              var codemsg = instantiated.encrypthttp(msg)
              //var codemsg = msg
              // Taro.request({
              wx.request({
                url: sendhttp, //仅为示例，并非真实的接口地址
                data: codemsg,
                method:'POST',
                header: {
                  'content-type': 'application/json', // 默认值
                  'Encrypt-Type':'AES,AES/ECB/PKCS7Padding,noType'
                },
                success: function (res) {
                  console.log("sendhttpinforet:",res,"sendhttpinfo:",msg)
                }
              })
            },
            sendbaseinfo:async function(){
              var oWebJssdkBase = await WebJssdkBase.getinstance();
              var oBaseInfo = oWebJssdkBase.GetBaseInfo();
              //这里会导致极少的用户没有保存uid_sid就发送routing了
              uid_sid = oBaseInfo.uid_sid

              oBaseInfo["appmeta_appname"] = appmeta_appname
              oBaseInfo["appmeta_appver"] = appmeta_appver

              oBaseInfo["server_action"] = "setup"
              oBaseInfo["uid_uid"] = uid_uid
              var sstr = JSON.stringify(oBaseInfo)
              var checkjson = JSON.parse(sstr)
              oBaseInfo = JSON.stringify(checkjson)
			        console.log(oBaseInfo)
              instantiated.updateWebDAU(oBaseInfo)
              // 添加baseInfo，暴露出去
              return {
                baseInfo: checkjson
              }
            },
            updateWebDAU:function(sendbaseinfo){
              instantiated.sendhttpinfo(sendbaseinfo)
            },
            updatehistory:function(doc)
            {
              localinfo.put({_id: localinfokey,_rev: doc._rev,timestamp:(new Date()).getTime()})
            },
            rounting:function(eventname,send)
            {
              instantiated.addTodb(eventname)
              if(true==send && "bg"==eventname)
              {
                instantiated.sendRouting()
              }
            },
          }
        }
    return {
      getinstance: function (appname, appver, unionId, debug) {
        if (!instantiated) {
          dev = debug == false ? false : true
          if(true==dev)
          {
            sendhttp = "https://lunarhook.picp.vip/plumber/statis/"
          }
          else{
            sendhttp = "https://c-tessar.xdf.cn/plumber/statis"
          }
          appmeta_appname = appname != undefined ? appname : ""
          appmeta_appver = appver != undefined ? appver : ""
          uid_uid = unionId || ''
          localinfokey = "plumber_" + appmeta_appname
          instantiated = new init();
          instantiated.initWebInfo().then(function (res) {
            // 发送完baseInfo 暴露出去
            instantiated.baseInfo = res
          })
        }
        return instantiated;
      }
    }
})();
/*
webjssdk.getinstance("pintuan-mini",1.0)
webjssdk.getinstance().addTodb("ff")
const plumbertrace = (s, ss) => {
  if (true === ss) {
    webjssdk.getinstance().rounting('bg',true)
  } else {
    webjssdk.getinstance().addTodb(s)
  }
}
*/

const plumber = webjssdk.getinstance

export default plumber;
