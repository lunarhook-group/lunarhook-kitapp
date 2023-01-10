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
let UUID;
UUID = (function () {
  'use strict';

  /** @lends UUID */
  function UUID() { }
  UUID.generate = function () {
    let rand = UUID._getRandomInt,
      hex = UUID._hexAligner;

    // ["timeLow", "timeMid", "timeHiAndVersion", "clockSeqHiAndReserved", "clockSeqLow", "node"]
    return (
      hex(rand(32), 8) + // time_low
      '-' +
      hex(rand(16), 4) + // time_mid
      '-' +
      hex(0x4000 | rand(12), 4) + // time_hi_and_version
      '-' +
      hex(0x8000 | rand(14), 4) + // clock_seq_hi_and_reserved clock_seq_low
      '-' +
      hex(rand(48), 12)
    ); // node
  };

  /**
   * Returns an unsigned x-bit random integer.
   * @param {int} x A positive integer ranging from 0 to 53, inclusive.
   * @returns {int} An unsigned x-bit random integer (0 <= f(x) < 2^x).
   */
  UUID._getRandomInt = function (x) {
    if (x < 0) {
      return NaN;
    }
    if (x <= 30) {
      return 0 | (Math.random() * (1 << x));
    }
    if (x <= 53) {
      return (0 | (Math.random() * (1 << 30))) + (0 | (Math.random() * (1 << (x - 30)))) * (1 << 30);
    }

    return NaN;
  };

  /**
   * Returns a function that converts an integer to a zero-filled string.
   * @param {int} radix
   * @returns {function(num&#44; length)}
   */
  UUID._getIntAligner = function (radix) {
    return function (num, length) {
      let str = num.toString(radix),
        i = length - str.length,
        z = '0';

      for (; i > 0; i >>>= 1, z += z) {
        if (i & 1) {
          str = z + str;
        }
      }
      return str;
    };
  };

  UUID._hexAligner = UUID._getIntAligner(16);

  /**
   * Returns UUID string representation.
   * @returns {string} {@link UUID#hexString}.
   */
  UUID.prototype.toString = function () {
    return this.hexString;
  };

  return UUID;
})(UUID);

function GetGuid( chnnel="") {
   //生成guid
  const plumberminiguid = 'plumber-mini-guid'
  const plumberminiguidcreattime = 'plumber-mini-guid-creattime'
  const plumberminiguidchannel = 'plumber-mini-guid-channel'
  //生成默认返回对象
  var jsonObj = {};
  jsonObj.guid = "";
  jsonObj.guidcreattime = "";
  jsonObj.guidchannel = "";
  //检查weixin是否存在guid，有则返回
  try {
    var value = wx.getStorageSync(plumberminiguid)
    if (value) {
      jsonObj.guid = value;
    }
    else{
      //没有guid则生成guid然后返回
      var setguid = UUID.generate()
      try {
        wx.setStorageSync(plumberminiguid, setguid)
        jsonObj.guid = setguid;
      } catch (e) {         jsonObj.guid = "error guid";}
    }
  } catch (e) {}
  
  //检查weixin是否存在guid的创建时间，有则返回
  try {
    var value = wx.getStorageSync(plumberminiguidcreattime)
    if (value) {
      jsonObj.guidcreattime = value;
    }else{
      var setguidcreattime = new Date().getTime()
      try {
        wx.setStorageSync(plumberminiguidcreattime, setguidcreattime)
        jsonObj.guidcreattime = setguidcreattime;
      } catch (e) { jsonObj.guidcreattime = "error guid creattime"}
    }
  } catch (e) {}
  
  //检查weixin是否存在guid的创建渠道，有则返回
  try {
    var value = wx.getStorageSync(plumberminiguidchannel)
    if (value) {
      jsonObj.guidchannel = value;
    }else{
      var setguidchannel = ""==chnnel?"plumber-mini":chnnel
      try {
        wx.setStorageSync(plumberminiguidchannel, setguidchannel)
        jsonObj.guidchannel = setguidchannel;
      } catch (e) { jsonObj.guidchannel = "error guid channel"}
    }
  } catch (e) {}
  
  return jsonObj
}

var WebJssdkBase = (function(){

  var baseInfo;
  var instantiated;     //匿名函数创建私有变量,判断单体对象是否被创建的句柄
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
    var sdk_version = "20220228v3_mini"
    var dev = false
    var uid_uid = ""
    var uid_sid = ""
    //发送地址会根据dev环境自动更换，这里默认是测试
    var plumbersendhttp = "https://c-tessar.test.xdf.cn/plumber/statis/"
    var recommendsendhttp = "https://c-tessar.test.xdf.cn/plumber/recommend/"
    var unioninfohttp =  "https://c-tessar.test.xdf.cn/plumber/unioninfo/"
    var instantiated = undefined;     //匿名函数创建私有变量,判断单体对象是否被创建的句柄
    var routinglist = new Array()
    var setuptime = (new Date()).getTime()
    var httpkey = "swxapktzteyjsali"
    var localinfokey = ""
    var ScrollTick = (new Date()).getTime()
    var connect_guid= ""
    var connect_guidcreattime = ""
    var connect_guidchannel = ""
    var guidGroup = ""
    var recommendqueue = []
    var recommendqueuetime = (new Date()).getTime()
    var recommendtick = 10*1000
    /*
	  if (0) {
      console.log('This browser supports localStorage');
    }else{
      console.log('This browser does NOT support localStorage');
    }
    */
    console.oldLog = console.log;
    console.log = function(...str) {
      if(true==dev){console.oldLog(...str);}
    } 
    function init() {
        return {
          addTodbwithrecommend: function(text,detailinfo,server_action = "recommend")
          {
            if (undefined == detailinfo) { detailinfo = {} }
            dateinfo[index]
            var last = routinglist[routinglist.length-1]
            var session_duration = (new Date().getTime()- last.timestamp) /1000
            var session_edge = last.original + "|" +  text
            const info = {
              "type": "msg", "time_stamp": new Date().getTime(), 
              detail: detailinfo,
              server_action: server_action
              , session_duration:session_duration
              , session_edge: session_edge
              , session_step: last.step
              //, session_sessiontype:"event"
              , appmeta_appname: appmeta_appname
              , appmeta_appver: appmeta_appver
              , uid_uid: uid_uid
              , uid_sid: uid_sid
              , uid_sid_creattime : uid_sid_creattime
              , setup_time_stamp : setuptime
              , sdkversion:sdk_version
              , connect_guid:connect_guid
              , connect_guidcreattime:connect_guidcreattime
              , connect_guidchannel:connect_guidchannel
            }
            var initinfo = JSON.stringify(info)
            instantiated.addTodb(text,detailinfo)
            recommendqueue.push(initinfo)
            //instantiated.sendhttpinfo(initinfo)

            if(curtimestamp - recommendqueuetime>recommendtick )
            {
              recommendqueuetime = curtimestamp
              instantiated.sendhttpinfo(JSON.stringify(recommendqueue),true)
              recommendqueue = []
            }
            //最开始的15秒呢直接发送
            else if((new Date()).getTime()-setuptime<15000){
              recommendqueuetime = curtimestamp
              instantiated.sendhttpinfo(JSON.stringify(recommendqueue),true)
              recommendqueue = []
            }
    
          },
          updaterecommend:function()
          {
            if(recommendqueue.length>0)
            {
              recommendqueuetime = new Date().getTime()
              instantiated.sendhttpinfo(JSON.stringify(recommendqueue),true)
              recommendqueue = []
            }
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
              var srcs = msg;
              var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(srcs), CryptoJS.enc.Utf8.parse(httpkey), {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
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
                 setup_time_stamp: setuptime,
                 server_action: 'routing',
                 uid_uid: uid_uid,
                 uid_sid: uid_sid,
                 sdkversion:sdk_version
                 , connect_guid:connect_guid
                 , connect_guidcreattime:connect_guidcreattime
                 , connect_guidchannel:connect_guidchannel
               }
               var sstr = JSON.stringify(info)
               var checkjson = JSON.parse(sstr)       
               sstr = JSON.stringify(checkjson)
               instantiated.sendhttpinfo(sstr)
               //把所有的推荐数据都发送出去
               instantiated.updaterecommend()
               //oWebJssdkNetwork.sendWebSocketMsg(initinfo)
               //这里要做超级聚合，就是routing清零，但是要把ff首包变成之前的路径聚合
               /**
               var ff= ""
               var detailinfo = Array()
               for(var rr=0;rr<dateinfo.length;rr++)
               {
                  var reg = /([*///0-9a-zA-Z,]+)/g;
                  /*var match = reg.exec(dateinfo[rr].original)
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
               */
               routinglist =  []
               //instantiated.addTodb(ff,detailinfo)
              } catch (err) {    
                console.log(err);
              }
            },
            /*
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
            */
            sendhttpinfo:function(msg, recommend = false){
              const sendhttp = true == recommend ? recommendsendhttp : plumbersendhttp;
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
              oBaseInfo["uid_sid"] = guidGroup.uid_sid
              oBaseInfo["uid_sid_setup"] = guidGroup.guidcreattime
              oBaseInfo["uid_sid_channel"] = guidGroup.guidchannel
              var sstr = JSON.stringify(oBaseInfo)
              var checkjson = JSON.parse(sstr)
              oBaseInfo = JSON.stringify(checkjson)
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
      getinstance: function (appname, appver, unionId, debug="dev") {
        if (!instantiated) {
          dev = debug == "prod" ? false : true
          var pre_fix = "https"
          if(debug=="test")
          {
            plumbersendhttp = pre_fix+"://c-tessar.test.xdf.cn//plumber/statis/"
            recommendsendhttp = pre_fix+"://c-tessar.test.xdf.cn/plumber/recommend/"
            unioninfohttp =  pre_fix+"://c-tessar.test.xdf.cn/plumber/unioninfo/"
          }
          else if(debug=="prod"){
            plumbersendhttp = pre_fix+"://c-tessar.xdf.cn/plumber/statis/"
            recommendsendhttp = pre_fix+"://c-tessar.xdf.cn/plumber/recommend/"
            unioninfohttp =  pre_fix+"://c-tessar.xdf.cn/plumber/unioninfo/"
          }
          else if(debug=="dev"){
            plumbersendhttp = pre_fix+"://lunarhook.picp.vip/plumber/statis/"
            recommendsendhttp = pre_fix+"://lunarhook.picp.vip/plumber/recommend/"
            unioninfohttp =  pre_fix+"://lunarhook.picp.vip/plumber/unioninfo/"
          }
          appmeta_appname = appname != undefined ? appname : ""
          appmeta_appver = appver != undefined ? appver : ""
          uid_uid = unionId || ''
          guidGroup = GetGuid(appmeta_appname)
          uid_sid = guidGroup.guid
          localinfokey = "plumber_" + appmeta_appname
          instantiated = new init();
          instantiated.initWebInfo().then(function (res) {
            // 发送完baseInfo 暴露出去
            instantiated.baseInfo = res
          })
          setInterval(() => {
            instantiated.updaterecommend()
          }, recommendtick);
        }
        return instantiated;
      }
    }
})();


const plumber = webjssdk.getinstance

export default plumber;
