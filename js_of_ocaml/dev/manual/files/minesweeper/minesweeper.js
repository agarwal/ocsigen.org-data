// Generated by js_of_ocaml 2.3
(function(c){"use strict";var
aL=254,C=255,aE="x",F='"',I=1073741823,aH=250,aD="sprites/normal.png",aF="jsError",aK="sprites/flag.png",U="input",aG=785140586,D="int_of_string",Y="sprites/bomb.png",aC=982028505,aB=0.001,h="",X=" : file already exists",W="/",aJ="fd ",aI="index out of bounds";function
aS(a,b){throw[0,a,b]}function
ad(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=c.console;b&&b.error&&b.error(a)}var
e=[0];function
ac(a,b){if(!a)return h;if(a&1)return ac(a-1,b)+b;var
c=ac(a>>1,b);return c+c}function
f(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
aU(){aS(e[4],new
f(aI))}f.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){ad('MlString.toJsString: wrong encoding for "'+a+F);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){ad('MlString.toBytes: wrong encoding for "'+this.string+F);var
a=this.string}else{var
a=h,c=this.array,d=c.length;for(var
b=0;b<d;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=ac(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
c=this.bytes;if(c==null)c=this.toBytes();var
b=[],d=this.last;for(var
a=0;a<d;a++)b[a]=c.charCodeAt(a);for(d=this.len;a<d;a++)b[a]=0;this.string=this.bytes=this.fullBytes=null;this.last=this.len;this.array=b;return b},getArray:function(){var
a=this.array;if(!a)a=this.toArray();return a},getLen:function(){var
a=this.len;if(a!==null)return a;this.toBytes();return this.len},toString:function(){var
a=this.string;return a?a:this.toJsString()},valueOf:function(){var
a=this.string;return a?a:this.toJsString()},blitToArray:function(a,b,c,d){var
g=this.array;if(g)if(c<=a)for(var
e=0;e<d;e++)b[c+e]=g[a+e];else
for(var
e=d-1;e>=0;e--)b[c+e]=g[a+e];else{var
f=this.bytes;if(f==null)f=this.toBytes();var
h=this.last-a;if(d<=h)for(var
e=0;e<d;e++)b[c+e]=f.charCodeAt(a+e);else{for(var
e=0;e<h;e++)b[c+e]=f.charCodeAt(a+e);for(;e<d;e++)b[c+e]=0}}},get:function(a){var
c=this.array;if(c)return c[a];var
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)aU();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&C);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&C;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)aU();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
t(a){this.string=a}t.prototype=new
f();function
ab(a,b){aS(a,new
t(b))}function
J(a){ab(e[4],a)}function
aO(){J(aI)}function
bu(a,b){if(b<0||b>=a.length-1)aO();return a[b+1]}function
bv(a,b,c){if(b<0||b>=a.length-1)aO();a[b+1]=c;return 0}function
bw(a,b,c,d,e){if(e===0)return;if(a.array!=null&&c.last==0&&d==0&&e==c.len){c.array=a.array.slice(b,b+e);c.bytes=c.string=null;return}if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e)}function
x(c,b){if(c.fun)return x(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return x(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return x(c,b.concat([a]))}}function
bE(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
bF(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
$(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
f)if(b
instanceof
f){if(a!==b){var
d=a.compare(b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
g=a[0];if(g===aL)g=0;if(g===aH){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
h=b[0];if(h===aL)h=0;if(h===aH){b=b[1];continue}else
if(g!=h)return g<h?-1:1;else
switch(g){case
248:var
d=bF(a[2],b[2]);if(d!=0)return d;break;case
251:J("equal: abstract value");case
C:var
d=bE(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
f||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
i=e.pop();b=e.pop();a=e.pop();if(i+1<a.length)e.push(a,b,i+1);a=a[i];b=b[i]}}function
bx(a,b){return $(a,b,true)}function
aM(a){this.bytes=h;this.len=a}aM.prototype=new
f();function
by(a){if(a<0)J("String.create");return new
aM(a)}function
bV(a){throw[0,a]}function
aT(){bV(e[6])}function
bA(a,b){if(b==0)aT();return a/b|0}function
bC(a,b){return+($(a,b,false)>=0)}function
bU(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
120:case
88:c=16;b+=2;break;case
111:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
aQ(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
G(a){ab(e[3],a)}function
bG(a){var
g=bU(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=aQ(e);if(c<0||c>=d)G(D);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=aQ(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)G(D)}if(f!=a.getLen())G(D);b=h*b;if(d==10&&(b|0)!=b)G(D);return b|0}var
K={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
bH(a){if(!K.all.test(a))return a;return a.replace(K.amp,"&amp;").replace(K.lt,"&lt;").replace(K.quot,"&quot;")}function
bI(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return x(a,b)}}function
bJ(a,b){return+($(a,b,false)<=0)}function
bK(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}function
aN(a){var
b=a.length;this.array=a;this.len=this.last=b}aN.prototype=new
f();var
bL=function(){function
m(a,b){return a+b|0}function
l(a,b,c,d,e,f){b=m(m(b,a),m(d,f));return m(b<<e|b>>>32-e,c)}function
h(a,b,c,d,e,f,g){return l(b&c|~b&d,a,b,e,f,g)}function
i(a,b,c,d,e,f,g){return l(b&d|c&~d,a,b,e,f,g)}function
j(a,b,c,d,e,f,g){return l(b^c^d,a,b,e,f,g)}function
k(a,b,c,d,e,f,g){return l(c^(b|~d),a,b,e,f,g)}function
n(a,b){var
g=b;a[g>>2]|=128<<8*(g&3);for(g=(g&~3)+8;(g&63)<60;g+=4)a[(g>>2)-1]=0;a[(g>>2)-1]=b<<3;a[g>>2]=b>>29&536870911;var
l=[1732584193,4023233417,2562383102,271733878];for(g=0;g<a.length;g+=16){var
c=l[0],d=l[1],e=l[2],f=l[3];c=h(c,d,e,f,a[g+0],7,3614090360);f=h(f,c,d,e,a[g+1],12,3905402710);e=h(e,f,c,d,a[g+2],17,606105819);d=h(d,e,f,c,a[g+3],22,3250441966);c=h(c,d,e,f,a[g+4],7,4118548399);f=h(f,c,d,e,a[g+5],12,1200080426);e=h(e,f,c,d,a[g+6],17,2821735955);d=h(d,e,f,c,a[g+7],22,4249261313);c=h(c,d,e,f,a[g+8],7,1770035416);f=h(f,c,d,e,a[g+9],12,2336552879);e=h(e,f,c,d,a[g+10],17,4294925233);d=h(d,e,f,c,a[g+11],22,2304563134);c=h(c,d,e,f,a[g+12],7,1804603682);f=h(f,c,d,e,a[g+13],12,4254626195);e=h(e,f,c,d,a[g+14],17,2792965006);d=h(d,e,f,c,a[g+15],22,1236535329);c=i(c,d,e,f,a[g+1],5,4129170786);f=i(f,c,d,e,a[g+6],9,3225465664);e=i(e,f,c,d,a[g+11],14,643717713);d=i(d,e,f,c,a[g+0],20,3921069994);c=i(c,d,e,f,a[g+5],5,3593408605);f=i(f,c,d,e,a[g+10],9,38016083);e=i(e,f,c,d,a[g+15],14,3634488961);d=i(d,e,f,c,a[g+4],20,3889429448);c=i(c,d,e,f,a[g+9],5,568446438);f=i(f,c,d,e,a[g+14],9,3275163606);e=i(e,f,c,d,a[g+3],14,4107603335);d=i(d,e,f,c,a[g+8],20,1163531501);c=i(c,d,e,f,a[g+13],5,2850285829);f=i(f,c,d,e,a[g+2],9,4243563512);e=i(e,f,c,d,a[g+7],14,1735328473);d=i(d,e,f,c,a[g+12],20,2368359562);c=j(c,d,e,f,a[g+5],4,4294588738);f=j(f,c,d,e,a[g+8],11,2272392833);e=j(e,f,c,d,a[g+11],16,1839030562);d=j(d,e,f,c,a[g+14],23,4259657740);c=j(c,d,e,f,a[g+1],4,2763975236);f=j(f,c,d,e,a[g+4],11,1272893353);e=j(e,f,c,d,a[g+7],16,4139469664);d=j(d,e,f,c,a[g+10],23,3200236656);c=j(c,d,e,f,a[g+13],4,681279174);f=j(f,c,d,e,a[g+0],11,3936430074);e=j(e,f,c,d,a[g+3],16,3572445317);d=j(d,e,f,c,a[g+6],23,76029189);c=j(c,d,e,f,a[g+9],4,3654602809);f=j(f,c,d,e,a[g+12],11,3873151461);e=j(e,f,c,d,a[g+15],16,530742520);d=j(d,e,f,c,a[g+2],23,3299628645);c=k(c,d,e,f,a[g+0],6,4096336452);f=k(f,c,d,e,a[g+7],10,1126891415);e=k(e,f,c,d,a[g+14],15,2878612391);d=k(d,e,f,c,a[g+5],21,4237533241);c=k(c,d,e,f,a[g+12],6,1700485571);f=k(f,c,d,e,a[g+3],10,2399980690);e=k(e,f,c,d,a[g+10],15,4293915773);d=k(d,e,f,c,a[g+1],21,2240044497);c=k(c,d,e,f,a[g+8],6,1873313359);f=k(f,c,d,e,a[g+15],10,4264355552);e=k(e,f,c,d,a[g+6],15,2734768916);d=k(d,e,f,c,a[g+13],21,1309151649);c=k(c,d,e,f,a[g+4],6,4149444226);f=k(f,c,d,e,a[g+11],10,3174756917);e=k(e,f,c,d,a[g+2],15,718787259);d=k(d,e,f,c,a[g+9],21,3951481745);l[0]=m(c,l[0]);l[1]=m(d,l[1]);l[2]=m(e,l[2]);l[3]=m(f,l[3])}var
o=[];for(var
g=0;g<4;g++)for(var
n=0;n<4;n++)o[g*4+n]=l[g]>>8*n&C;return o}return function(a,b,c){var
h=[];if(a.array){var
f=a.array;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=f[e]|f[e+1]<<8|f[e+2]<<16|f[e+3]<<24}for(;d<c;d++)h[d>>2]|=f[d+b]<<8*(d&3)}else{var
g=a.getFullBytes();for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=g.charCodeAt(e)|g.charCodeAt(e+1)<<8|g.charCodeAt(e+2)<<16|g.charCodeAt(e+3)<<24}for(;d<c;d++)h[d>>2]|=g.charCodeAt(d+b)<<8*(d&3)}return new
aN(n(h,c))}}();function
l(a){ab(e[2],a)}function
bM(a){if(!a.opened)l("Cannot flush a closed channel");if(a.buffer==h)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=h}function
aR(a){a=a
instanceof
f?a.toString():a;l(a+": No such file or directory")}var
bz=W;function
L(a){a=a
instanceof
f?a.toString():a;if(a.charCodeAt(0)!=47)a=bz+a;var
d=a.split(W),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":case
h:if(b.length==0)b.push(h);break;default:b.push(d[c]);break}b.orig=a;return b}function
p(){this.content={}}p.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
N=new
p();N.mk(h,new
p());function
aa(a){var
b=N;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))aR(a.orig);b=b.get(a[c])}return b}function
b1(a){var
c=L(a),b=aa(c);return b
instanceof
p?1:0}function
w(a){this.data=a}w.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
bB(a,b){var
e=L(a),c=N;for(var
g=0;g<e.length-1;g++){var
d=e[g];if(!c.exists(d))c.mk(d,new
p());c=c.get(d);if(!(c
instanceof
p))l(e.orig+X)}var
d=e[e.length-1];if(c.exists(d))l(e.orig+X);if(b
instanceof
p)c.mk(d,b);else
if(b
instanceof
w)c.mk(d,b);else
if(b
instanceof
f)c.mk(d,new
w(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
w(b));else
if(b.toString)c.mk(d,new
w(new
f(b.toString()).getArray()));else
J("caml_fs_register")}function
b0(a){var
b=N,d=L(a),e;for(var
c=0;c<d.length;c++){if(b.auto)e=b.auto;if(!(b.exists&&b.exists(d[c])))return e?e(d.join(W)):0;b=b.get(d[c])}return 1}function
y(a,b,c){if(e.fds===undefined)e.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;e.fds[a]=d;e.fd_last_idx=a;return a}function
b5(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
g=a.toString(),i=L(a);if(d.rdonly&&d.wronly)l(g+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)l(g+" : flags Open_text and Open_binary are not compatible");if(b0(a)){if(b1(a))l(g+" : is a directory");if(d.create&&d.excl)l(g+X);var
h=e.fd_last_idx?e.fd_last_idx:0,f=aa(i);if(d.truncate)f.truncate();return y(h+1,f.content(),d)}else
if(d.create){var
h=e.fd_last_idx?e.fd_last_idx:0;bB(a,[]);var
f=aa(i);return y(h+1,f.content(),d)}else
aR(a)}y(0,[]);y(1,[]);y(2,[]);function
bN(a){var
b=e.fds[a];if(b.flags.wronly)l(aJ+a+" is writeonly");return{data:b,fd:a,opened:true}}function
b4(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=c.console;b&&b.log&&b.log(a)}var
M=new
Array();function
bY(a,b){var
e=new
f(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
bO(a){var
b;switch(a){case
1:b=b4;break;case
2:b=ad;break;default:b=bY}var
d=e.fds[a];if(d.flags.rdonly)l(aJ+a+" is readonly");var
c={data:d,fd:a,opened:true,buffer:h,output:b};M[c.fd]=c;return c}function
bP(){var
a=0;for(var
b
in
M)if(M[b].opened)a=[0,M[b],a];return a}function
bQ(a,b){if(b==0)aT();return a%b}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&65535)*b|0};var
bR=Math.imul;function
bT(a){return new
f(a)}function
bW(a,b){e[a+1]=b}var
aP={};function
bX(a,b){aP[a.toString()]=b;return 0}function
bZ(){return 32}var
bD=new
Date()*aB;function
b2(){return new
Date()*aB-bD}function
bS(a){return aP[a]}function
b3(a){if(a
instanceof
Array)return a;if(c.RangeError&&a
instanceof
c.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,e[9]];if(c.InternalError&&a
instanceof
c.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,e[9]];if(a
instanceof
c.Error)return[0,bS(aF),a];return[0,e[3],new
t(String(a))]}var
d=bu,o=bv,ax=bw,aA=bH,H=bK,ay=bO,_=bQ,Z=bR,b=bT,a=bW,az=bX,bt=b3;function
u(a,b){return a.length==1?a(b):x(a,[b])}var
O=[0,b("Invalid_argument")],ag=[0,b("Assert_failure")],aq=b(U),as=[0,10,10,15];a(11,[0,b("Undefined_recursive_module")]);a(10,ag);a(9,[0,b("Sys_blocked_io")]);a(8,[0,b("Stack_overflow")]);a(7,[0,b("Match_failure")]);a(6,[0,b("Not_found")]);a(5,[0,b("Division_by_zero")]);a(4,[0,b("End_of_file")]);a(3,O);a(2,[0,b("Failure")]);a(1,[0,b("Sys_error")]);a(0,[0,b("Out_of_memory")]);var
aV=b("Pervasives.do_at_exit"),aY=b("Random.int"),aX=b(aE),aZ=[0,987910699,495797812,364182224,414272206,318284740,990407751,383018966,270373319,840823159,24560019,536292337,512266505,189156120,730249596,143776328,51606627,140166561,366354223,1003410265,700563762,981890670,913149062,526082594,1021425055,784300257,667753350,630144451,949649812,48546892,415514493,258888527,511570777,89983870,283659902,308386020,242688715,482270760,865188196,1027664170,207196989,193777847,619708188,671350186,149669678,257044018,87658204,558145612,183450813,28133145,901332182,710253903,510646120,652377910,409934019,801085050],a1=b("Js.Error"),a2=b(aF),a6=b("img"),a5=b("br"),a4=b("div"),bk=b("YOU LOSE"),bh=b(Y),bg=b(aK),be=b("Mode : "),bf=b(Y),bj=b(aD),bi=b("0"),bd=b("YOU WIN"),bc=b("GAME OVER"),a8=b(aK),a9=b(Y),a_=b("sprites/empty.png"),a$=b(".png"),ba=b("sprites/"),bb=b(aD),a7=[0,0,0],bn=[0,b("main.ml"),42,17],bo=b("main"),bp=b("Number of columns"),bq=b("Number of rows"),br=b("Number of mines"),bs=b("nouvelle partie"),bm=b("submit"),bl=b("text");function
z(a,b){return bC(a,b)?a:b}function
P(a,b){var
c=a.getLen(),e=b.getLen(),d=by(c+e|0);ax(a,0,d,0,c);ax(b,0,d,c,e);return d}function
A(a){return b(h+a)}function
Q(a,b){if(a){var
c=a[1];return[0,c,Q(a[2],b)]}return b}bN(0);ay(1);ay(2);function
ae(a){var
b=bP(0);for(;;){if(b){var
c=b[2],d=b[1];try{bM(d)}catch(f){}var
b=c;continue}return 0}}az(aV,ae);function
af(a,b,c){var
e=H(a,[0]),f=a-1|0,g=0;if(!(f<0)){var
d=g;for(;;){e[d+1]=H(b,c);var
h=d+1|0;if(f!==d){var
d=h;continue}break}}return e}function
ah(a){var
b=a,c=0;for(;;){if(b){var
d=[0,b[1],c],b=b[2],c=d;continue}return c}}function
R(a,b){var
c=b;for(;;){if(c){var
d=c[2];u(a,c[1]);var
c=d;continue}return 0}}var
ai=[0,0],aW=bZ(0);function
aj(a){ai[1]=[0,a,ai[1]];return 0}32===aW;var
i=[0,aZ.slice(),0],m=c,ak=null;true;var
q=false,al=m.Array,am=[0,a1];az(a2,[0,am,{}][0+1]);var
a0=undefined;aj(function(a){return a[1]===am?[0,new
t(a[2].toString())]:0});aj(function(a){return a
instanceof
al?0:[0,new
t(a.toString())]});function
an(a){return a}function
g(a,b){a.appendChild(b);return 0}function
r(d){return an(bI(function(a){if(1-(an(a)==ak?1:0)){var
e=u(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=u(d,c);if(!(b|0))c.returnValue=b;return b}))}var
a3=m.document;function
B(a,b){return a?u(b,a[1]):0}function
S(a,b){return a.createElement(b.toString())}function
V(a,b){return S(a,b)}var
ao=[0,aG];function
ap(a,b,c){for(;;){if(0===a)if(0===b)return S(c,aq);var
f=ao[1];if(aG===f){try{var
i=a3.createElement('<input name="x">'),j=i.tagName.toLowerCase()===U?1:0,l=j?i.name===aE?1:0:j,g=l}catch(f){var
g=0}var
k=g?aC:-1003883683;ao[1]=k;continue}if(aC<=f){var
d=new
al();d.push("<",U);B(a,function(a){d.push(' type="',aA(a),F);return 0});B(b,function(a){d.push(' name="',aA(a),F);return 0});d.push(">");return c.createElement(d.join(h))}var
e=S(c,aq);B(a,function(a){return e.type=a});B(b,function(a){return e.name=a});return e}}function
v(a){return V(a,a5)}function
ar(a){return V(a,a6)}m.HTMLElement===a0;function
j(a){return a.toString()}var
s=m.document;function
at(a,b){var
e=a[1]-1|0,g=0;if(!(e<0)){var
c=g;for(;;){var
f=a[2]-1|0,h=0;if(!(f<0)){var
d=h;for(;;){u(b,[0,c,d]);var
j=d+1|0;if(f!==d){var
d=j;continue}break}}var
i=c+1|0;if(e!==c){var
c=i;continue}break}}return 0}function
au(a,b){var
c=b[2],d=b[1],f=0,e=[0,[0,d-1|0,c-1|0],[0,[0,d-1|0,c],[0,[0,d-1|0,c+1|0],[0,[0,d,c-1|0],[0,[0,d,c+1|0],[0,[0,d+1|0,c-1|0],[0,[0,d+1|0,c],[0,[0,d+1|0,c+1|0],0]]]]]]]];for(;;){if(e){var
i=e[2],g=e[1],j=g[2],k=g[1],l=0<=k?1:0;if(l){var
m=k<a[1]?1:0;if(m)var
n=0<=j?1:0,h=n?j<a[2]?1:0:n;else
var
h=m}else
var
h=l;if(h){var
f=[0,g,f],e=i;continue}var
e=i;continue}return ah(f)}}function
E(a,b){var
c=b[3]?a8:b[1]?a9:b[2]?0===b[4]?a_:P(ba,P(A(b[4]),a$)):bb;return a.src=j(c)}function
av(a){var
e=a[3][2]-1|0,g=0;if(!(e<0)){var
b=g;for(;;){var
f=a[3][1]-1|0,h=0;if(!(f<0)){var
c=h;for(;;){E(d(d(a[2],b),c),d(d(a[1],c),b));var
j=c+1|0;if(f!==c){var
c=j;continue}break}}var
i=b+1|0;if(e!==b){var
b=i;continue}break}}return 0}function
aw(a){var
e=a[3][2]-1|0,g=0;if(!(e<0)){var
b=g;for(;;){var
f=a[3][1]-1|0,h=0;if(!(f<0)){var
c=h;for(;;){var
k=d(d(a[2],b),c);k.onclick=r(function(a){m.alert(j(bc));return q});var
l=c+1|0;if(f!==c){var
c=l;continue}break}}var
i=b+1|0;if(e!==b){var
b=i;continue}break}}return 0}function
n(a){return a.toString()}var
k=m.document;function
T(a,b){var
d=k.createDocumentFragment();g(d,k.createTextNode(n(a)));var
c=ap([0,n(bl)],0,k);c.value=n(A(b[1]));c.onchange=r(function(a){try{b[1]=bG(new
t(c.value))}catch(f){f=bt(f);if(f[1]!==O)throw f}c.value=n(A(b[1]));return q});g(d,c);return d}m.onload=r(function(a){var
l=k.getElementById(n(bo));if(l==ak)throw[0,ag,bn];var
ay=[0,15],az=[0,12],aA=[0,10];g(l,T(bp,aA));g(l,v(k));g(l,T(bq,az));g(l,v(k));g(l,T(br,ay));g(l,v(k));function
e(a){var
W=V(k,a4);g(l,W);var
aZ=ay[1],a0=aA[1],am=z(as[1],az[1]),X=z(as[2],a0),an=z(1,aZ),ao=Z(am,X),aN=bJ(ao,an)?ao:an,h=[0,am,X,aN],aj=[0,(b2(0)*1e3|0)%1e5|0],ac=0===aj.length-1?[0,0]:aj,ad=ac.length-1,aF=0;if(!0){var
u=aF;for(;;){o(i[1],u,u);var
aJ=u+1|0;if(54!==u){var
u=aJ;continue}break}}var
S=[0,aX],ae=54+z(55,ad)|0,aG=0;if(!(ae<0)){var
t=aG;for(;;){var
ag=t%55|0,aH=S[1],ab=P(aH,A(d(ac,_(t,ad))));S[1]=bL(ab,0,ab.getLen());var
C=S[1];o(i[1],ag,(d(i[1],ag)^(((C.safeGet(0)+(C.safeGet(1)<<8)|0)+(C.safeGet(2)<<16)|0)+(C.safeGet(3)<<24)|0))&I);var
aI=t+1|0;if(ae!==t){var
t=aI;continue}break}}i[2]=0;var
aO=0,aP=Z(h[2],h[1])-h[3]|0,aQ=0,aR=H(X,[0]);function
al(a){return[0,0,0,0,0]}var
D=Z(h[1],h[2]),w=[0,0],aL=h[3];a:for(;;){var
N=0,M=w[1];for(;;){if(M){var
N=N+1|0,M=M[2];continue}if(N<aL){if(!(I<D))if(0<D)for(;;){i[2]=(i[2]+1|0)%55|0;var
ai=d(i[1],i[2]),T=(d(i[1],(i[2]+24|0)%55|0)+(ai^(ai>>>25|0)&31)|0)&I;o(i[1],i[2],T);var
U=_(T,D);if(((I-D|0)+1|0)<(T-U|0))continue;var
B=w[1];for(;;){if(B){var
aE=B[2],aa=0===bx(B[1],U)?1:0;if(!aa){var
B=aE;continue}var
ak=aa}else
var
ak=0;if(!ak)w[1]=[0,U,w[1]];continue a}}throw[0,O,aY]}var
aK=w[1],aM=al(0),n=af(h[1],h[2],aM);at(h,function(a){var
b=a[2],c=a[1],e=al(0);return o(d(n,c),b,e)});R(function(a){d(d(n,bA(a,h[2])),_(a,h[2]))[1]=1;return 0},aK);at(h,function(a){var
b=a[2],c=a[1];if(d(d(n,c),b)[1])return 0;var
e=[0,0];function
f(a){return d(d(n,a[1]),a[2])[1]?(e[1]++,0):0}R(f,au(h,[0,c,b]));d(d(n,c),b)[4]=e[1];return 0});var
e=[0,n,aR,h,aQ,aP,aO],F=[0,0],p=s.createDocumentFragment();g(p,s.createTextNode(j(be)));var
x=ar(s);g(p,x);x.src=j(bf);x.onclick=r(function(a){if(0===F[1]){F[1]=1;x.src=j(bg)}else{F[1]=0;x.src=j(bh)}return q});g(p,v(s));var
ap=e[3][2]-1|0,aS=0;if(!(ap<0)){var
f=aS;for(;;){var
Y=[0,0],aq=e[3][1]-1|0,aU=0;if(!(aq<0)){var
b=aU;for(;;){var
c=ar(s);Y[1]=[0,c,Y[1]];c.src=j(bj);c.onclick=r(function(f,b,c){return function(a){if(0===F[1]){if(!d(d(e[1],b),f)[2])if(e[6]){if(d(d(e[1],b),f)[3]){e[4]=e[4]-1|0;d(d(e[1],b),f)[3]=0}else{e[4]=e[4]+1|0;d(d(e[1],b),f)[3]=1}E(d(d(e[2],f),b),d(d(e[1],b),f))}else
if(!d(d(e[1],b),f)[3])if(d(d(e[1],b),f)[1]){av(e);aw(e);m.alert(j(bk))}else{var
l=function(a){var
b=a[2],c=a[1];d(d(e[1],c),b)[2]=1;E(d(d(e[2],b),c),d(d(e[1],c),b));e[5]=e[5]-1|0;return 0},i=e[3],n=e[1],g=af(i[1],i[2],0),k=function(a){var
b=a;for(;;){if(b){var
i=b[2],c=b[1],f=c[2],h=c[1],e=d(d(n,h),f);if(!e[1])if(!e[3])if(!e[2])if(!d(d(g,h),f)){var
j=k(i),l=j[2],m=j[1];o(d(g,h),f,1);return 0===e[4]?[0,m,[0,c,l]]:[0,[0,c,m],l]}var
b=i;continue}return a7}},h=function(a){if(a){var
c=a[2],b=a[1];if(0===d(d(n,b[1]),b[2])[4]){var
e=k(au(i,b)),f=e[1];return Q([0,b,f],h(Q(e[2],c)))}return[0,b,h(c)]}return 0};o(d(g,b),f,1);R(l,h([0,[0,b,f],0]));if(0===e[5]){av(e);aw(e);m.alert(j(bd))}}}else{d(d(e[1],b),f)[3]=1-d(d(e[1],b),f)[3];E(c,d(d(e[1],b),f))}return q}}(f,b,c));g(p,c);var
aW=b+1|0;if(aq!==b){var
b=aW;continue}break}}g(p,v(s));var
G=ah(Y[1]);if(G){var
K=0,J=G,aB=G[2],aC=G[1];for(;;){if(J){var
K=K+1|0,J=J[2];continue}var
$=H(K,aC),L=1,y=aB;for(;;){if(y){var
aD=y[2];$[L+1]=y[1];var
L=L+1|0,y=aD;continue}var
ax=$;break}break}}else
var
ax=[0];o(e[2],f,ax);var
aV=f+1|0;if(ap!==f){var
f=aV;continue}break}}var
aT=W.style;aT.lineHeight=j(bi);g(W,p);return q}}}var
c=k.createDocumentFragment(),b=ap([0,n(bm)],0,k);b.value=n(bs);b.onclick=r(e);g(c,b);g(l,c);return q});ae(0);return}(function(){return this}()));
