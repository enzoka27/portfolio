(()=>{var jh=0,Jc=1,Kh=2;var yr=1,Yh=2,ms=3,ai=0,Ot=1,Ft=2,Rn=0,gs=1,Wn=2,Zc=3,Qc=4,Jh=5;var Ei=100,Zh=101,Qh=102,$h=103,eu=104,tu=200,nu=201,iu=202,su=203,$c=204,el=205,ru=206,au=207,ou=208,cu=209,lu=210,hu=211,uu=212,du=213,fu=214,Sa=0,Ma=1,Aa=2,Ji=3,ba=4,Ta=5,_a=6,wa=7,tl=0,pu=1,mu=2,xn=0,nl=1,il=2,sl=3,Sr=4,rl=5,al=6,ol=7;var cl=300,oi=301,Pi=302,ao=303,oo=304,Mr=306,Ea=1e3,An=1001,Pa=1002,Nt=1003,gu=1004;var Ar=1005;var Lt=1006,co=1007;var Cn=1008;var Jt=1009,ll=1010,hl=1011,xs=1012,lo=1013,vn=1014,cn=1015,sn=1016,ho=1017,uo=1018,vs=1020,ul=35902,dl=35899,fl=1021,pl=1022,ln=1023,bn=1026,ci=1027,fo=1028,po=1029,li=1030,mo=1031;var go=1033,br=33776,Tr=33777,_r=33778,wr=33779,xo=35840,vo=35841,yo=35842,So=35843,Mo=36196,Ao=37492,bo=37496,To=37488,_o=37489,Er=37490,wo=37491,Eo=37808,Po=37809,Ro=37810,Co=37811,Io=37812,Uo=37813,Do=37814,No=37815,Lo=37816,Oo=37817,Fo=37818,Vo=37819,Bo=37820,zo=37821,ko=36492,Ho=36494,Go=36495,Wo=36283,qo=36284,Pr=36285,Xo=36286;var ks=2300,Ra=2301,ga=2302,Vc=2303,Bc=2400,zc=2401,kc=2402;var xu=3200;var jo=0,vu=1,qn="",Et="srgb",Hs="srgb-linear",Gs="linear",ct="srgb";var xa=7680;var yu=519,Su=512,Mu=513,Au=514,Ko=515,bu=516,Tu=517,Yo=518,_u=519,wu=35044;var ml="300 es",gn=2e3,Zi=2001;function of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eu(){let i=Qi("canvas");return i.style.display="block",i}var lh={},$i=null;function gl(...i){let e="THREE."+i.shift();$i?$i("log",e,...i):console.log(e,...i)}function Pu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Pu(i);let e="THREE."+i.shift();if($i)$i("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Pu(i);let e="THREE."+i.shift();if($i)$i("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function vi(...i){let e=i.join(" ");e in lh||(lh[e]=!0,He(...i))}function Ru(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Cu={[Sa]:Ma,[Aa]:_a,[ba]:wa,[Ji]:Ta,[Ma]:Sa,[_a]:Aa,[wa]:ba,[Ta]:Ji},Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var va=Math.PI/180,Ca=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function lf(i,e){return(i%e+e)%e}function uc(i,e,t){return(1-t)*i+t*e}function Cs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Al=class Al{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Al.prototype.isVector2=!0;var de=Al,_n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),_=Math.sin(M);p=Math.sin(p*M)/_,o=Math.sin(o*M)/_,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+x*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+x*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bl=class bl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bl.prototype.isVector3=!0;var R=bl,dc=new R,hh=new _n,Tl=class Tl{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],_=s[4],S=s[7],b=s[2],T=s[5],P=s[8];return r[0]=a*x+o*M+c*b,r[3]=a*m+o*_+c*T,r[6]=a*p+o*S+c*P,r[1]=l*x+h*M+d*b,r[4]=l*m+h*_+d*T,r[7]=l*p+h*S+d*P,r[2]=u*x+f*M+g*b,r[5]=u*m+f*_+g*T,r[8]=u*p+f*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(e,t)),this}rotate(e){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tl.prototype.isMatrix3=!0;var je=Tl,fc=new je,uh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}var tt=hf();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,Ia=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Qi("canvas")),Ni.width=e.width,Ni.height=e.height;let s=Ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},uf=0,es=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pc(s[a].image)):r.push(pc(s[a]))}else r=pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var df=0,mc=new R,Ht=class i extends Tn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=An,s=An,r=Lt,a=Cn,o=ln,c=Jt,l=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=ys(),this.name="",this.source=new es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=cl;Ht.DEFAULT_ANISOTROPY=1;var _l=class _l{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,S=(f+1)/2,b=(p+1)/2,T=(h+u)/4,P=(d+x)/4,v=(g+m)/4;return _>S&&_>b?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=P/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_l.prototype.isVector4=!0;var gt=_l,Ua=class extends Tn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ht(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new es(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Ua{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ws=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ro=class ro{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ro().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ff,e,pf)}lookAt(e,t,n){let s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Zn.crossVectors(n,Zt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Zn.crossVectors(n,Zt)),Zn.normalize(),kr.crossVectors(Zt,Zn),s[0]=Zn.x,s[4]=kr.x,s[8]=Zt.x,s[1]=Zn.y,s[5]=kr.y,s[9]=Zt.y,s[2]=Zn.z,s[6]=kr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],S=n[11],b=n[15],T=s[0],P=s[4],v=s[8],w=s[12],C=s[1],L=s[5],F=s[9],H=s[13],N=s[2],z=s[6],j=s[10],J=s[14],ie=s[3],Z=s[7],X=s[11],V=s[15];return r[0]=a*T+o*C+c*N+l*ie,r[4]=a*P+o*L+c*z+l*Z,r[8]=a*v+o*F+c*j+l*X,r[12]=a*w+o*H+c*J+l*V,r[1]=h*T+d*C+u*N+f*ie,r[5]=h*P+d*L+u*z+f*Z,r[9]=h*v+d*F+u*j+f*X,r[13]=h*w+d*H+u*J+f*V,r[2]=g*T+x*C+m*N+p*ie,r[6]=g*P+x*L+m*z+p*Z,r[10]=g*v+x*F+m*j+p*X,r[14]=g*w+x*H+m*J+p*V,r[3]=M*T+_*C+S*N+b*ie,r[7]=M*P+_*L+S*z+b*Z,r[11]=M*v+_*F+S*j+b*X,r[15]=M*w+_*H+S*J+b*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=c*f-l*u,_=o*f-l*d,S=o*u-c*d,b=a*f-l*h,T=a*u-c*h,P=a*d-o*h;return t*(x*M-m*_+p*S)-n*(g*M-m*b+p*T)+s*(g*_-x*b+p*P)-r*(g*S-x*T+m*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=t*o-n*a,_=t*c-s*a,S=t*l-r*a,b=n*c-s*o,T=n*l-r*o,P=s*l-r*c,v=h*x-d*g,w=h*m-u*g,C=h*p-f*g,L=d*m-u*x,F=d*p-f*x,H=u*p-f*m,N=M*H-_*F+S*L+b*C-T*w+P*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/N;return e[0]=(o*H-c*F+l*L)*z,e[1]=(s*F-n*H-r*L)*z,e[2]=(x*P-m*T+p*b)*z,e[3]=(u*T-d*P-f*b)*z,e[4]=(c*C-a*H-l*w)*z,e[5]=(t*H-s*C+r*w)*z,e[6]=(m*S-g*P-p*_)*z,e[7]=(h*P-u*S+f*_)*z,e[8]=(a*F-o*C+l*v)*z,e[9]=(n*C-t*F-r*v)*z,e[10]=(g*T-x*S+p*M)*z,e[11]=(d*S-h*T-f*M)*z,e[12]=(o*w-a*L-c*v)*z,e[13]=(t*L-n*w+s*v)*z,e[14]=(x*_-g*b-m*M)*z,e[15]=(h*b-d*_+u*M)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,M=c*l,_=c*h,S=c*d,b=n.x,T=n.y,P=n.z;return s[0]=(1-(x+p))*b,s[1]=(f+S)*b,s[2]=(g-_)*b,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(u+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+_)*P,s[9]=(m-M)*P,s[10]=(1-(u+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Li.set(s[0],s[1],s[2]).length(),o=Li.set(s[4],s[5],s[6]).length(),c=Li.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);let l=1/a,h=1/o,d=1/c;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=gn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===gn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Zi)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===gn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Zi)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ro.prototype.isMatrix4=!0;var lt=ro,Li=new R,fn=new lt,ff=new R(0,0,0),pf=new R(1,1,1),Zn=new R,kr=new R,Zt=new R,fh=new lt,ph=new _n,kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ph.setFromEuler(this),this.setFromQuaternion(ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mf=0,mh=new R,Oi=new _n,Nn=new lt,Hr=new R,Is=new R,gf=new R,xf=new _n,gh=new R(1,0,0),xh=new R(0,1,0),vh=new R(0,0,1),yh={type:"added"},vf={type:"removed"},Fi={type:"childadded",child:null},gc={type:"childremoved",child:null},Pt=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new kn,n=new _n,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(xh,e)}rotateZ(e){return this.rotateOnAxis(vh,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(xh,e)}translateZ(e){return this.translateOnAxis(vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Is,Hr,this.up):Nn.lookAt(Hr,Is,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pt.DEFAULT_UP=new R(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yf={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=lf(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xc(a,r,e+1/3),this.g=xc(a,r,e),this.b=xc(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return tt.workingToColorSpace(zt.copy(this),e),Math.round(Qe(zt.r*255,0,255))*65536+Math.round(Qe(zt.g*255,0,255))*256+Math.round(Qe(zt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(zt.copy(this),t);let n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Et){tt.workingToColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,s=zt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Gr);let n=uc(Qn.h,Gr.h,t),s=uc(Qn.s,Gr.s,t),r=uc(Qn.l,Gr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ne;Ne.NAMES=Iu;var is=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pn=new R,Ln=new R,vc=new R,On=new R,Vi=new R,Bi=new R,Sh=new R,yc=new R,Sc=new R,Mc=new R,Ac=new gt,bc=new gt,Tc=new gt,Bn=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),Ln.subVectors(n,t),vc.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(Ln),c=pn.dot(vc),l=Ln.dot(Ln),h=Ln.dot(vc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ac.setScalar(0),bc.setScalar(0),Tc.setScalar(0),Ac.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),Tc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ac,r.x),a.addScaledVector(bc,r.y),a.addScaledVector(Tc,r.z),a}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),Ln.subVectors(e,t),pn.cross(Ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),pn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Bi.subVectors(r,n),yc.subVectors(e,n);let c=Vi.dot(yc),l=Bi.dot(yc);if(c<=0&&l<=0)return t.copy(n);Sc.subVectors(e,s);let h=Vi.dot(Sc),d=Bi.dot(Sc);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Vi,a);Mc.subVectors(e,r);let f=Vi.dot(Mc),g=Bi.dot(Mc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Bi,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Sh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Sh,o);let p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Vi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),qr.subVectors(this.max,Us),zi.subVectors(e.a,Us),ki.subVectors(e.b,Us),Hi.subVectors(e.c,Us),$n.subVectors(ki,zi),ei.subVectors(Hi,ki),fi.subVectors(zi,Hi);let t=[0,-$n.z,$n.y,0,-ei.z,ei.y,0,-fi.z,fi.y,$n.z,0,-$n.x,ei.z,0,-ei.x,fi.z,0,-fi.x,-$n.y,$n.x,0,-ei.y,ei.x,0,-fi.y,fi.x,0];return!_c(t,zi,ki,Hi,qr)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,zi,ki,Hi,qr))?!1:(Xr.crossVectors($n,ei),t=[Xr.x,Xr.y,Xr.z],_c(t,zi,ki,Hi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new R,new R,new R,new R,new R,new R,new R,new R],mn=new R,Wr=new wn,zi=new R,ki=new R,Hi=new R,$n=new R,ei=new R,fi=new R,Us=new R,qr=new R,Xr=new R,pi=new R;function _c(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);let o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=e.dot(pi),l=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var wt=new R,jr=new de,Sf=0,Dt=class extends Tn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qs=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xs=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mf=new wn,Ds=new R,wc=new R,En=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);let t=Ds.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(wc)),this.expandByPoint(Ds.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Af=0,an=new lt,Ec=new Pt,Gi=new R,Qt=new wn,Ns=new wn,Ut=new R,yt=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?Xs:qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(Qt.min,Ns.min),Qt.expandByPoint(Ut),Ut.addVectors(Qt.max,Ns.max),Qt.expandByPoint(Ut)):(Qt.expandByPoint(Ns.min),Qt.expandByPoint(Ns.max))}Qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ut.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(e,l),Ut.add(Gi)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new R,c[v]=new R;let l=new R,h=new R,d=new R,u=new de,f=new de,g=new de,x=new R,m=new R;function p(v,w,C){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[v].add(x),o[w].add(x),o[C].add(x),c[v].add(m),c[w].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,w=M.length;v<w;++v){let C=M[v],L=C.start,F=C.count;for(let H=L,N=L+F;H<N;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new R,S=new R,b=new R,T=new R;function P(v){b.fromBufferAttribute(s,v),T.copy(b);let w=o[v];_.copy(w),_.sub(b.multiplyScalar(b.dot(w))).normalize(),S.crossVectors(T,w);let L=S.dot(c[v])<0?-1:1;a.setXYZW(v,_.x,_.y,_.z,L)}for(let v=0,w=M.length;v<w;++v){let C=M[v],L=C.start,F=C.count;for(let H=L,N=L+F;H<N;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Dt(u,h,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Pc=new R,bf=new R,Tf=new je,$t=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pc.subVectors(n,t).cross(bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tf.getNormalMatrix(e),s=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_f=0,Pn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=gs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=el,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $t().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Vn=new R,Rc=new R,Kr=new R,Yr=new R,yi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rc.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(Rc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=Yr.dot(this.direction),c=-Yr.dot(Kr),l=Yr.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rc).addScaledVector(Kr,u),f}intersectSphere(e,t){if(e.radius<0)return null;Vn.subVectors(e.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,_=n.z-a.z,S=Math.abs(c),b=Math.abs(l),T=Math.abs(h),P,v,w,C,L,F,H,N,z,j,J,ie;if(S>=b&&S>=T?(w=c,F=d,z=g,ie=p,c>=0?(P=l,v=h,C=u,L=f,H=x,N=m,j=M,J=_):(P=h,v=l,C=f,L=u,H=m,N=x,j=_,J=M)):b>=T?(w=l,F=u,z=x,ie=M,l>=0?(P=h,v=c,C=f,L=d,H=m,N=g,j=_,J=p):(P=c,v=h,C=d,L=f,H=g,N=m,j=p,J=_)):(w=h,F=f,z=m,ie=_,h>=0?(P=c,v=l,C=d,L=u,H=g,N=x,j=p,J=M):(P=l,v=c,C=u,L=d,H=x,N=g,j=M,J=p)),w===0)return null;let Z=P/w,X=v/w,V=1/w,he=C-Z*F,le=L-X*F,qe=H-Z*z,Ve=N-X*z,Ge=j-Z*ie,Y=J-X*ie,ee=Ge*Ve-Y*qe,fe=he*Y-le*Ge,Be=qe*le-Ve*he;if(s){if(ee<0||fe<0||Be<0)return null}else if((ee<0||fe<0||Be<0)&&(ee>0||fe>0||Be>0))return null;let Se=ee+fe+Be;if(Se===0)return null;let Le=V*(ee*F+fe*z+Be*ie);return(Se>0?Le<0:Le>0)?null:this.at(Le/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mh=new lt,mi=new yi,Jr=new En,Ah=new R,Zr=new R,Qr=new R,$r=new R,Cc=new R,ea=new R,bh=new R,ta=new R,Ke=class extends Pt{constructor(e=new yt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Cc.fromBufferAttribute(d,e),a?ea.addScaledVector(Cc,h):ea.addScaledVector(Cc.sub(t),h))}t.add(ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(Jr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Jr,Ah)===null||mi.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Mh.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Mh),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,b=_;S<b;S+=3){let T=o.getX(S),P=o.getX(S+1),v=o.getX(S+2);s=na(this,p,e,n,l,h,d,T,P,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);s=na(this,a,e,n,l,h,d,M,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,b=_;S<b;S+=3){let T=S,P=S+1,v=S+2;s=na(this,p,e,n,l,h,d,T,P,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,_=m+1,S=m+2;s=na(this,a,e,n,l,h,d,M,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function wf(i,e,t,n,s,r,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ai,o),c===null)return null;ta.copy(o),ta.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ta);return l<t.near||l>t.far?null:{distance:l,point:ta.clone(),object:i}}function na(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Zr),i.getVertexPosition(c,Qr),i.getVertexPosition(l,$r);let h=wf(i,e,t,n,Zr,Qr,$r,bh);if(h){let d=new R;Bn.getBarycoord(bh,Zr,Qr,$r,d),s&&(h.uv=Bn.getInterpolatedAttribute(s,o,c,l,d,new de)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,o,c,l,d,new de)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new R,materialIndex:0};Bn.getNormal(Zr,Qr,$r,u.normal),h.face=u,h.barycoord=d}return h}var js=class extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,h=Nt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ks=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wi=new lt,Th=new lt,ia=[],_h=new wn,Ef=new lt,Ls=new Ke,Os=new En,Ys=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ef)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),_h.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(_h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Os.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),Th.multiplyMatrices(n,Wi),Ls.matrixWorld=Th,Ls.raycast(e,ia);for(let a=0,o=ia.length;a<o;a++){let c=ia[a];c.instanceId=r,c.object=this,t.push(c)}ia.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new js(new Float32Array(s*this.count),s,this.count,fo,cn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gi=new En,Pf=new de(.5,.5),sa=new R,ss=class{constructor(e=new $t,t=new $t,n=new $t,s=new $t,r=new $t,a=new $t){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],_=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-a,f-h,p-g,b-M).normalize(),s[1].setComponents(l+a,f+h,p+g,b+M).normalize(),s[2].setComponents(l+o,f+d,p+x,b+_).normalize(),s[3].setComponents(l-o,f-d,p-x,b-_).normalize(),n)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,f-u,p-m,b-S).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-S).normalize(),t===gn)s[5].setComponents(l+c,f+u,p+m,b+S).normalize();else if(t===Zi)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);let t=Pf.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(sa.x=s.normal.x>0?e.max.x:e.min.x,sa.y=s.normal.y>0?e.max.y:e.min.y,sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Si=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Na=new R,La=new R,wh=new lt,Fs=new yi,ra=new En,Ic=new R,Eh=new R,Oa=class extends Pt{constructor(e=new yt,t=new Si){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Na.fromBufferAttribute(t,s-1),La.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Na.distanceTo(La);e.setAttribute("lineDistance",new nt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;wh.copy(s).invert(),Fs.copy(e.ray).applyMatrix4(wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),M=h.getX(x+1),_=aa(this,e,Fs,c,p,M,x);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=aa(this,e,Fs,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=aa(this,e,Fs,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=aa(this,e,Fs,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function aa(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Na.fromBufferAttribute(o,s),La.fromBufferAttribute(o,r),t.distanceSqToSegment(Na,La,Ic,Eh)>n)return;Ic.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ic);if(!(l<e.near||l>e.far))return{distance:l,point:Eh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ph=new R,Rh=new R,rs=class extends Oa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ph.fromBufferAttribute(t,s),Rh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ph.distanceTo(Rh);e.setAttribute("lineDistance",new nt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fa=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ch=new lt,Hc=new yi,oa=new En,ca=new R,Js=class extends Pt{constructor(e=new yt,t=new Fa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Ch.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,x=f;g<x;g++){let m=l.getX(g);ca.fromBufferAttribute(d,m),Ih(ca,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)ca.fromBufferAttribute(d,g),Ih(ca,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ih(i,e,t,n,s,r,a){let o=Hc.distanceSqToPoint(i);if(o<t){let c=new R;Hc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zs=class extends Ht{constructor(e=[],t=oi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mi=class extends Ht{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends Ht{constructor(e,t,n=vn,s,r,a,o=Nt,c=Nt,l,h=bn,d=1){if(h!==bn&&h!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Va=class extends ni{constructor(e,t=vn,n=oi,s,r,a=Nt,o=Nt,c,l=bn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qs=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},on=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function g(x,m,p,M,_,S,b,T,P,v,w){let C=S/P,L=b/v,F=S/2,H=b/2,N=T/2,z=P+1,j=v+1,J=0,ie=0,Z=new R;for(let X=0;X<j;X++){let V=X*L-H;for(let he=0;he<z;he++){let le=he*C-F;Z[x]=le*M,Z[m]=V*_,Z[p]=N,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(he/P),d.push(1-X/v),J+=1}}for(let X=0;X<v;X++)for(let V=0;V<P;V++){let he=u+V+z*X,le=u+V+z*(X+1),qe=u+(V+1)+z*(X+1),Ve=u+(V+1)+z*X;c.push(he,le,Ve),c.push(le,qe,Ve),ie+=6}o.addGroup(f,ie,w),f+=ie,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $s=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function M(){let S=new R,b=new R,T=0,P=(t-e)/n;for(let v=0;v<=r;v++){let w=[],C=v/r,L=C*(t-e)+e;for(let F=0;F<=s;F++){let H=F/s,N=H*c+o,z=Math.sin(N),j=Math.cos(N);b.x=L*z,b.y=-C*n+m,b.z=L*j,d.push(b.x,b.y,b.z),S.set(z,P,j).normalize(),u.push(S.x,S.y,S.z),f.push(H,1-C),w.push(g++)}x.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let C=x[w][v],L=x[w+1][v],F=x[w+1][v+1],H=x[w][v+1];(e>0||w!==0)&&(h.push(C,L,H),T+=3),(t>0||w!==r-1)&&(h.push(L,F,H),T+=3)}l.addGroup(p,T,0),p+=T}function _(S){let b=g,T=new de,P=new R,v=0,w=S===!0?e:t,C=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;let L=g;for(let F=0;F<=s;F++){let N=F/s*c+o,z=Math.cos(N),j=Math.sin(N);P.x=w*j,P.y=m*C,P.z=w*z,d.push(P.x,P.y,P.z),u.push(0,C,0),T.x=z*.5+.5,T.y=j*.5*C+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){let H=b+F,N=L+F;S===!0?h.push(N,N+1,H):h.push(N+1,N,H),v+=3}l.addGroup(p,v,S===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var er=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new R,S=new R,b=new R;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],S),f(t[T+2],b),c(_,S,b,M)}function c(M,_,S,b){let T=b+1,P=[];for(let v=0;v<=T;v++){P[v]=[];let w=M.clone().lerp(S,v/T),C=_.clone().lerp(S,v/T),L=T-v;for(let F=0;F<=L;F++)F===0&&v===T?P[v][F]=w:P[v][F]=w.clone().lerp(C,F/L)}for(let v=0;v<T;v++)for(let w=0;w<2*(T-v)-1;w++){let C=Math.floor(w/2);w%2===0?(u(P[v][C+1]),u(P[v+1][C]),u(P[v][C])):(u(P[v][C+1]),u(P[v+1][C+1]),u(P[v+1][C]))}}function l(M){let _=new R;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(M),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function h(){let M=new R;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let S=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(S,1-b)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let _=a[M+0],S=a[M+2],b=a[M+4],T=Math.max(_,S,b),P=Math.min(_,S,b);T>.9&&P<.1&&(_<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,_){let S=M*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function g(){let M=new R,_=new R,S=new R,b=new R,T=new de,P=new de,v=new de;for(let w=0,C=0;w<r.length;w+=9,C+=6){M.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),T.set(a[C+0],a[C+1]),P.set(a[C+2],a[C+3]),v.set(a[C+4],a[C+5]),b.copy(M).add(_).add(S).divideScalar(3);let L=m(b);x(T,C+0,M,L),x(P,C+2,_,L),x(v,C+4,S,L)}}function x(M,_,S,b){b<0&&M.x===1&&(a[_]=M.x-1),S.x===0&&S.z===0&&(a[_]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var la=new R,ha=new R,Uc=new R,ua=new Bn,as=class extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(va*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:p}=ua;if(x.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),ua.getNormal(Uc),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let _=(M+1)%3,S=d[M],b=d[_],T=ua[h[M]],P=ua[h[_]],v=`${S}_${b}`,w=`${b}_${S}`;w in u&&u[w]?(Uc.dot(u[w].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(P.x,P.y,P.z)),u[w]=null):v in u||(u[v]={index0:l[M],index1:l[_],normal:Uc.clone()})}}for(let g in u)if(u[g]){let{index0:x,index1:m}=u[g];la.fromBufferAttribute(o,x),ha.fromBufferAttribute(o,m),f.push(la.x,la.y,la.z),f.push(ha.x,ha.y,ha.z)}this.setAttribute("position",new nt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new de:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],a=[],o=new R,c=new lt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},os=class extends en{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ba=class extends os{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Uh=new R,Dh=new R,Dc=new xl,Nc=new xl,Lc=new xl,Ai=class extends en{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Dh.subVectors(s[0],s[1]).add(s[0]),l=Dh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Uh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Dc.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,x,m),Nc.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,x,m),Lc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Nc.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Lc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Dc.calc(c),Nc.calc(c),Lc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Rf(i,e){let t=1-i;return t*t*e}function Cf(i,e){return 2*(1-i)*i*e}function If(i,e){return i*i*e}function Bs(i,e,t,n){return Rf(i,e)+Cf(i,t)+If(i,n)}function Uf(i,e){let t=1-i;return t*t*t*e}function Df(i,e){let t=1-i;return 3*t*t*i*e}function Nf(i,e){return 3*(1-i)*i*i*e}function Lf(i,e){return i*i*i*e}function zs(i,e,t,n,s){return Uf(i,e)+Df(i,t)+Nf(i,n)+Lf(i,s)}var tr=class extends en{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,s.x,r.x,a.x,o.x),zs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends en{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,s.x,r.x,a.x,o.x),zs(e,s.y,r.y,a.y,o.y),zs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nr=class extends en{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends en{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ir=class extends en{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(e,s.x,r.x,a.x),Bs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sr=class extends en{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(e,s.x,r.x,a.x),Bs(e,s.y,r.y,a.y),Bs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rr=class extends en{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Nh(o,c.x,l.x,h.x,d.x),Nh(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Ha=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:Ai,CubicBezierCurve:tr,CubicBezierCurve3:za,EllipseCurve:os,LineCurve:nr,LineCurve3:ka,QuadraticBezierCurve:ir,QuadraticBezierCurve3:sr,SplineCurve:rr}),Ga=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ha[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ha[s.type]().fromJSON(s))}return this}},ar=class extends Ga{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new nr(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ir(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new tr(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new rr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new os(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bi=class extends ar{constructor(e){super(e),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ar().fromJSON(s))}return this}};function Of(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Uu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=kf(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return or(r,a,t,o,c,l,0),a}function Uu(i,e,t,n,s){let r;if(s===Qf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Lh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Lh(a/n|0,i[a],i[a+1],r);return r&&cs(r,r.next)&&(lr(r),r=r.next),r}function Ti(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(cs(t,t.next)||Mt(t.prev,t,t.next)===0)){if(lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function or(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Xf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Vf(i,n,s,r):Ff(i)){e.push(c.i,i.i,l.i),lr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Bf(Ti(i),e),or(i,e,t,n,s,r,2)):a===2&&zf(i,e,t,n,s,r):or(Ti(i),e,t,n,s,r,1);break}}}function Ff(i){let e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Vs(s,o,r,c,a,l,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Mt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),x=Math.max(o,c,l),m=Math.max(h,d,u),p=Gc(f,g,e,t,n),M=Gc(x,m,e,t,n),_=i.prevZ,S=i.nextZ;for(;_&&_.z>=p&&S&&S.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Vs(o,h,c,d,l,u,_.x,_.y)&&Mt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Vs(o,h,c,d,l,u,S.x,S.y)&&Mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Vs(o,h,c,d,l,u,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=M;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Vs(o,h,c,d,l,u,S.x,S.y)&&Mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Bf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!cs(n,s)&&Nu(n,t,t.next,s)&&cr(n,s)&&cr(s,n)&&(e.push(n.i,t.i,s.i),lr(t),lr(t.next),t=i=s),t=t.next}while(t!==i);return Ti(t)}function zf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yf(a,o)){let c=Lu(a,o);a=Ti(a,a.next),c=Ti(c,c.next),or(a,e,t,n,s,r,0),or(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function kf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Uu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Kf(l))}s.sort(Hf);for(let r=0;r<s.length;r++)t=Gf(s[r],t);return t}function Hf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Gf(i,e){let t=Wf(i,e);if(!t)return e;let n=Lu(t,i);return Ti(n,n.next),Ti(t,t.next)}function Wf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(cs(i,t))return t;do{if(cs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Du(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);cr(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&qf(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function qf(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function Xf(i,e,t,n){let s=i;do s.z===0&&(s.z=Gc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jf(s)}function jf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Gc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Kf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Du(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Vs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Du(i,e,t,n,s,r,a,o)}function Yf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Jf(i,e)&&(cr(i,e)&&cr(e,i)&&Zf(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||cs(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function cs(i,e){return i.x===e.x&&i.y===e.y}function Nu(i,e,t,n){let s=fa(Mt(i,e,t)),r=fa(Mt(i,e,n)),a=fa(Mt(t,n,i)),o=fa(Mt(t,n,e));return!!(s!==r&&a!==o||s===0&&da(i,t,e)||r===0&&da(i,n,e)||a===0&&da(t,i,n)||o===0&&da(t,e,n))}function da(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fa(i){return i>0?1:i<0?-1:0}function Jf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function cr(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function Zf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Lu(i,e){let t=Wc(i.i,i.x,i.y),n=Wc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lh(i,e,t,n){let s=Wc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var qc=class{static triangulate(e,t,n=2){return Of(e,t,n)}},xi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Oh(e),Fh(n,e);let a=e.length;t.forEach(Oh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Fh(n,t[c]);let o=qc.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Oh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ls=class i extends yt{constructor(e=new bi([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:$f,_,S=!1,b,T,P,v;if(p){_=p.getSpacedPoints(h),S=!0,u=!1;let ne=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,ne),T=new R,P=new R,v=new R}u||(m=0,f=0,g=0,x=0);let w=o.extractPoints(l),C=w.shape,L=w.holes;if(!xi.isClockWise(C)){C=C.reverse();for(let ne=0,se=L.length;ne<se;ne++){let ce=L[ne];xi.isClockWise(ce)&&(L[ne]=ce.reverse())}}function H(ne){let ce=10000000000000001e-36,oe=ne[0];for(let me=1;me<=ne.length;me++){let ze=me%ne.length,Oe=ne[ze],Te=Oe.x-oe.x,Xe=Oe.y-oe.y,U=Te*Te+Xe*Xe,st=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(oe.x),Math.abs(oe.y)),Ye=ce*st*st;if(U<=Ye){ne.splice(ze,1),me--;continue}oe=Oe}}H(C),L.forEach(H);let N=L.length,z=C;for(let ne=0;ne<N;ne++){let se=L[ne];C=C.concat(se)}function j(ne,se,ce){return se||We("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(se,ce)}let J=C.length;function ie(ne,se,ce){let oe,me,ze,Oe=ne.x-se.x,Te=ne.y-se.y,Xe=ce.x-ne.x,U=ce.y-ne.y,st=Oe*Oe+Te*Te,Ye=Oe*U-Te*Xe;if(Math.abs(Ye)>Number.EPSILON){let E=Math.sqrt(st),y=Math.sqrt(Xe*Xe+U*U),B=se.x-Te/E,q=se.y+Oe/E,D=ce.x-U/y,Q=ce.y+Xe/y,ae=((D-B)*U-(Q-q)*Xe)/(Oe*U-Te*Xe);oe=B+Oe*ae-ne.x,me=q+Te*ae-ne.y;let k=oe*oe+me*me;if(k<=2)return new de(oe,me);ze=Math.sqrt(k/2)}else{let E=!1;Oe>Number.EPSILON?Xe>Number.EPSILON&&(E=!0):Oe<-Number.EPSILON?Xe<-Number.EPSILON&&(E=!0):Math.sign(Te)===Math.sign(U)&&(E=!0),E?(oe=-Te,me=Oe,ze=Math.sqrt(st)):(oe=Oe,me=Te,ze=Math.sqrt(st/2))}return new de(oe/ze,me/ze)}let Z=[];for(let ne=0,se=z.length,ce=se-1,oe=ne+1;ne<se;ne++,ce++,oe++)ce===se&&(ce=0),oe===se&&(oe=0),Z[ne]=ie(z[ne],z[ce],z[oe]);let X=[],V,he=Z.concat();for(let ne=0,se=N;ne<se;ne++){let ce=L[ne];V=[];for(let oe=0,me=ce.length,ze=me-1,Oe=oe+1;oe<me;oe++,ze++,Oe++)ze===me&&(ze=0),Oe===me&&(Oe=0),V[oe]=ie(ce[oe],ce[ze],ce[Oe]);X.push(V),he=he.concat(V)}let le;if(m===0)le=xi.triangulateShape(z,L);else{let ne=[],se=[];for(let ce=0;ce<m;ce++){let oe=ce/m,me=f*Math.cos(oe*Math.PI/2),ze=g*Math.sin(oe*Math.PI/2)+x;for(let Oe=0,Te=z.length;Oe<Te;Oe++){let Xe=j(z[Oe],Z[Oe],ze);fe(Xe.x,Xe.y,-me),oe===0&&ne.push(Xe)}for(let Oe=0,Te=N;Oe<Te;Oe++){let Xe=L[Oe];V=X[Oe];let U=[];for(let st=0,Ye=Xe.length;st<Ye;st++){let E=j(Xe[st],V[st],ze);fe(E.x,E.y,-me),oe===0&&U.push(E)}oe===0&&se.push(U)}}le=xi.triangulateShape(ne,se)}let qe=le.length,Ve=g+x;for(let ne=0;ne<J;ne++){let se=u?j(C[ne],he[ne],Ve):C[ne];S?(P.copy(b.normals[0]).multiplyScalar(se.x),T.copy(b.binormals[0]).multiplyScalar(se.y),v.copy(_[0]).add(P).add(T),fe(v.x,v.y,v.z)):fe(se.x,se.y,0)}for(let ne=1;ne<=h;ne++)for(let se=0;se<J;se++){let ce=u?j(C[se],he[se],Ve):C[se];S?(P.copy(b.normals[ne]).multiplyScalar(ce.x),T.copy(b.binormals[ne]).multiplyScalar(ce.y),v.copy(_[ne]).add(P).add(T),fe(v.x,v.y,v.z)):fe(ce.x,ce.y,d/h*ne)}for(let ne=m-1;ne>=0;ne--){let se=ne/m,ce=f*Math.cos(se*Math.PI/2),oe=g*Math.sin(se*Math.PI/2)+x;for(let me=0,ze=z.length;me<ze;me++){let Oe=j(z[me],Z[me],oe);fe(Oe.x,Oe.y,d+ce)}for(let me=0,ze=L.length;me<ze;me++){let Oe=L[me];V=X[me];for(let Te=0,Xe=Oe.length;Te<Xe;Te++){let U=j(Oe[Te],V[Te],oe);S?fe(U.x,U.y+_[h-1].y,_[h-1].x+ce):fe(U.x,U.y,d+ce)}}}Ge(),Y();function Ge(){let ne=s.length/3;if(u){let se=0,ce=J*se;for(let oe=0;oe<qe;oe++){let me=le[oe];Be(me[2]+ce,me[1]+ce,me[0]+ce)}se=h+m*2,ce=J*se;for(let oe=0;oe<qe;oe++){let me=le[oe];Be(me[0]+ce,me[1]+ce,me[2]+ce)}}else{for(let se=0;se<qe;se++){let ce=le[se];Be(ce[2],ce[1],ce[0])}for(let se=0;se<qe;se++){let ce=le[se];Be(ce[0]+J*h,ce[1]+J*h,ce[2]+J*h)}}n.addGroup(ne,s.length/3-ne,0)}function Y(){let ne=s.length/3,se=0;ee(z,se),se+=z.length;for(let ce=0,oe=L.length;ce<oe;ce++){let me=L[ce];ee(me,se),se+=me.length}n.addGroup(ne,s.length/3-ne,1)}function ee(ne,se){let ce=ne.length;for(;--ce>=0;){let oe=ce,me=ce-1;me<0&&(me=ne.length-1);for(let ze=0,Oe=h+m*2;ze<Oe;ze++){let Te=J*ze,Xe=J*(ze+1),U=se+oe+Te,st=se+me+Te,Ye=se+me+Xe,E=se+oe+Xe;Se(U,st,Ye,E)}}}function fe(ne,se,ce){c.push(ne),c.push(se),c.push(ce)}function Be(ne,se,ce){Le(ne),Le(se),Le(ce);let oe=s.length/3,me=M.generateTopUV(n,s,oe-3,oe-2,oe-1);rt(me[0]),rt(me[1]),rt(me[2])}function Se(ne,se,ce,oe){Le(ne),Le(se),Le(oe),Le(se),Le(ce),Le(oe);let me=s.length/3,ze=M.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);rt(ze[0]),rt(ze[1]),rt(ze[3]),rt(ze[1]),rt(ze[2]),rt(ze[3])}function Le(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function rt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ep(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ha[s.type]().fromJSON(s)),new i(n,e.options)}},$f={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new de(r,a),new de(o,c),new de(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new de(a,1-c),new de(l,1-d),new de(u,1-g),new de(x,1-p)]:[new de(o,1-c),new de(h,1-d),new de(f,1-g),new de(m,1-p)]}};function ep(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var hr=class i extends er{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ur=class i extends yt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new R,u=new de,f=new R,g=new R,x=new R,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=t;M++){let _=n+M*h*s,S=Math.sin(_),b=Math.cos(_);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*S,d.y=e[T].y,d.z=e[T].x*b,a.push(d.x,d.y,d.z),u.x=M/t,u.y=T/(e.length-1),o.push(u.x,u.y);let P=c[3*T+0]*S,v=c[3*T+1],w=c[3*T+0]*b;l.push(P,v,w)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let S=_+M*e.length,b=S,T=S+e.length,P=S+e.length+1,v=S+1;r.push(b,T,v),r.push(P,v,T)}this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},dr=class i extends er{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},tn=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let _=0;_<l;_++){let S=_*d-r;g.push(S,-M,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let _=M+l*p,S=M+l*(p+1),b=M+1+l*(p+1),T=M+1+l*p;f.push(_,S,T),f.push(S,b,T)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Hn=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new R,u=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],_=p/n,S=a+_*o,b=e*Math.cos(S),T=Math.sqrt(e*e-b*b),P=0;p===0&&a===0?P=.5/t:p===n&&c===Math.PI&&(P=-.5/t);for(let v=0;v<=t;v++){let w=v/t,C=s+w*r;d.x=-T*Math.cos(C),d.y=b,d.z=T*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(w+P,1-_),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let _=h[p][M+1],S=h[p][M],b=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(_,S,T),(p!==n-1||c<Math.PI)&&f.push(S,b,T)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _i=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new R,f=new R,g=new R;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,_=(s+1)*(x-1)+m,S=(s+1)*x+m;c.push(p,M,S),c.push(M,_,S)}this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var hs=class i extends yt{constructor(e=new sr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,c=new R,l=new de,h=new R,d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),M(),p()}function m(_){h=e.getPointAt(_/t,h);let S=a.normals[_],b=a.binormals[_];for(let T=0;T<=s;T++){let P=T/s*Math.PI*2,v=Math.sin(P),w=-Math.cos(P);c.x=w*S.x+v*b.x,c.y=w*S.y+v*b.y,c.z=w*S.z+v*b.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let S=1;S<=s;S++){let b=(s+1)*(_-1)+(S-1),T=(s+1)*_+(S-1),P=(s+1)*_+S,v=(s+1)*(_-1)+S;g.push(b,T,v),g.push(T,P,v)}}function M(){for(let _=0;_<=t;_++)for(let S=0;S<=s;S++)l.x=_/t,l.y=S/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ha[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ri(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Vh(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=Ri(i[t]);for(let s in n)e[s]=n[s]}return e}function Vh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Ou={clone:Ri,merge:Gt},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new de().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wa=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wi=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends wi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qa=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xa=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Oc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ja=class extends ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zc:r=e,o=2*t-n;break;case kc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zc:a=e,c=2*n-t;break;case kc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,S=f*m-f*x;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+M*a[l+b]+_*a[c+b]+S*a[d+b];return r}},Ka=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Ya=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ja=class extends ii{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=f*u+g*2,M=d[p],_=d[p+1],S=e*u+g*2,b=h[S],T=h[S+1],P=rp(n,t,M,b,s);r[g]=Fu(P,x,_,T,m)}return r}};function Fu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Fu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=sp(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Oc(e.settings)&&(n.settings={inTangents:qi(e.settings.inTangents,Array),outTangents:qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break;case Vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return ga;case this.InterpolantFactoryMethodBezier:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Oc(this.settings)&&(Bh(this.settings.inTangents,e),Bh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){We("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&cf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Oc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Ra;var si=class extends nn{constructor(e,t,n){super(e,t,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=ks;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="color";var Qa=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Qa.prototype.ValueTypeName="number";var $a=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)_n.slerpFlat(r,0,a,l-o,a,l,c);return r}},fr=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends nn{constructor(e,t,n){super(e,t,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=ks;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="vector";var ya={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(zh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!zh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function zh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var to=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vu=new to,us=class{constructor(e){this.manager=e!==void 0?e:Vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};us.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xi=new WeakMap,no=class extends us{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ya.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Xi.get(a);d===void 0&&(d=[],Xi.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Qi("img");function c(){h(),t&&t(this);let d=Xi.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Xi.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),ya.remove(`image:${e}`);let u=Xi.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Xi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ya.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var pr=class extends us{constructor(e){super(e)}load(e,t,n,s){let r=new Ht,a=new no(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},mr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gr=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fc=new lt,kh=new R,Hh=new R,io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Zi||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pa=new R,ma=new _n,Mn=new R,xr=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pa,ma,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pa,ma,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new R,Gh=new de,Wh=new de,kt=class extends xr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Wh),t.subVectors(Wh,Gh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ds=class extends xr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xc=class extends io{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ji=-90,Ki=1,ps=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(ji,Ki,e,t);s.layers=this.layers,this.add(s);let r=new kt(ji,Ki,e,t);r.layers=this.layers,this.add(r);let a=new kt(ji,Ki,e,t);a.layers=this.layers,this.add(a);let o=new kt(ji,Ki,e,t);o.layers=this.layers,this.add(o);let c=new kt(ji,Ki,e,t);c.layers=this.layers,this.add(c);let l=new kt(ji,Ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},so=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yl="\\[\\]\\.:\\/",ap=new RegExp("["+yl+"]","g"),Sl="[^"+yl+"]",op="[^"+yl.replace("\\.","")+"]",cp=/((?:WC+[\/:])*)/.source.replace("WC",Sl),lp=/(WCOD+)?/.source.replace("WCOD",op),hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),dp=new RegExp("^"+cp+lp+hp+up+"$"),fp=["material","materials","bones","map"],jc=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ap,"")}static parseTrackName(e){let t=dp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=jc;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xv=new Float32Array(1);var qh=new lt,vr=class{constructor(e,t,n=0,s=1/0){this.ray=new yi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(e,t=!0,n=[]){return Kc(e,this,n,t),n.sort(Xh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kc(e[s],this,n,t);return n.sort(Xh),n}};function Xh(i,e){return i.distance-e.distance}function Kc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Kc(r[a],e,t,!0)}}var wl=class wl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};wl.prototype.isMatrix2=!0;var Yc=wl;function Ml(i,e,t,n){let s=pp(n);switch(t){case fl:return i*e;case fo:return i*e/s.components*s.byteLength;case po:return i*e/s.components*s.byteLength;case li:return i*e*2/s.components*s.byteLength;case mo:return i*e*2/s.components*s.byteLength;case pl:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case go:return i*e*4/s.components*s.byteLength;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _r:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:case So:return Math.max(i,16)*Math.max(e,8)/4;case xo:case yo:return Math.max(i,8)*Math.max(e,8)/2;case Mo:case Ao:case To:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bo:case Er:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ko:case Ho:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pr:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pp(i){switch(i){case Jt:case ll:return{byteLength:1,components:1};case xs:case hl:case sn:return{byteLength:2,components:1};case ho:case uo:return{byteLength:2,components:4};case vn:case lo:case cn:return{byteLength:4,components:1};case ul:case dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ad(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gp(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ng=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:xp,alphahash_pars_fragment:vp,alphamap_fragment:yp,alphamap_pars_fragment:Sp,alphatest_fragment:Mp,alphatest_pars_fragment:Ap,aomap_fragment:bp,aomap_pars_fragment:Tp,batching_pars_vertex:_p,batching_vertex:wp,begin_vertex:Ep,beginnormal_vertex:Pp,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Dp,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Lp,color_fragment:Op,color_pars_fragment:Fp,color_pars_vertex:Vp,color_vertex:Bp,common:zp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Wp,emissivemap_fragment:qp,emissivemap_pars_fragment:Xp,colorspace_fragment:jp,colorspace_pars_fragment:Kp,envmap_fragment:Yp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Zp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:lm,envmap_vertex:$p,fog_vertex:em,fog_pars_vertex:tm,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:om,lights_pars_begin:cm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:xm,lights_fragment_end:vm,lightprobes_pars_fragment:ym,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:bm,map_fragment:Tm,map_pars_fragment:_m,map_particle_fragment:wm,map_particle_pars_fragment:Em,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Cm,morphcolor_vertex:Im,morphnormal_vertex:Um,morphtarget_pars_vertex:Dm,morphtarget_vertex:Nm,normal_fragment_begin:Lm,normal_fragment_maps:Om,normal_pars_fragment:Fm,normal_pars_vertex:Vm,normal_vertex:Bm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:qm,packing:Xm,premultiplied_alpha_fragment:jm,project_vertex:Km,dithering_fragment:Ym,dithering_pars_fragment:Jm,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:eg,shadowmap_vertex:tg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:ag,specularmap_fragment:og,specularmap_pars_fragment:cg,tonemapping_fragment:lg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:xg,background_frag:vg,backgroundCube_vert:yg,backgroundCube_frag:Sg,cube_vert:Mg,cube_frag:Ag,depth_vert:bg,depth_frag:Tg,distance_vert:_g,distance_frag:wg,equirect_vert:Eg,equirect_frag:Pg,linedashed_vert:Rg,linedashed_frag:Cg,meshbasic_vert:Ig,meshbasic_frag:Ug,meshlambert_vert:Dg,meshlambert_frag:Ng,meshmatcap_vert:Lg,meshmatcap_frag:Og,meshnormal_vert:Fg,meshnormal_frag:Vg,meshphong_vert:Bg,meshphong_frag:zg,meshphysical_vert:kg,meshphysical_frag:Hg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:qg,points_frag:Xg,shadow_vert:jg,shadow_frag:Kg,sprite_vert:Yg,sprite_frag:Jg},ye={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Un={basic:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Gt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Gt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Gt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Gt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Gt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Gt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Gt([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Gt([ye.lights,ye.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Un.physical={uniforms:Gt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Jo={r:0,b:0,g:0},Zg=new lt,od=new je;od.set(-1,0,0,0,1,0,0,0,1);function Qg(i,e,t,n,s,r){let a=new Ne(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let _=M.isScene===!0?M.background:null;if(_&&_.isTexture){let S=M.backgroundBlurriness>0;_=e.get(_,S)}return _}function g(M){let _=!1,S=f(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),_=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,_){let S=f(_);S&&(S.isCubeTexture||S.mapping===Mr)?(l===void 0&&(l=new Ke(new on(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ri(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(_.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(od),l.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ke(new tn(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ri(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,_){M.getRGB(Jo,vl(i)),t.buffers.color.setClear(Jo.r,Jo.g,Jo.b,_,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),o=_,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:x,dispose:p}}function $g(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,F,H,N,z){let j=!1,J=d(L,N,H,F);r!==J&&(r=J,l(r.object)),j=f(L,N,H,z),j&&g(L,N,H,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(L,F,H,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,F,H,N){let z=N.wireframe===!0,j=n[F.id];j===void 0&&(j={},n[F.id]=j);let J=L.isInstancedMesh===!0?L.id:0,ie=j[J];ie===void 0&&(ie={},j[J]=ie);let Z=ie[H.id];Z===void 0&&(Z={},ie[H.id]=Z);let X=Z[z];return X===void 0&&(X=u(c()),Z[z]=X),X}function u(L){let F=[],H=[],N=[];for(let z=0;z<t;z++)F[z]=0,H[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,F,H,N){let z=r.attributes,j=F.attributes,J=0,ie=H.getAttributes();for(let Z in ie)if(ie[Z].location>=0){let V=z[Z],he=j[Z];if(he===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),V===void 0||V.attribute!==he||he&&V.data!==he.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function g(L,F,H,N){let z={},j=F.attributes,J=0,ie=H.getAttributes();for(let Z in ie)if(ie[Z].location>=0){let V=j[Z];V===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));let he={};he.attribute=V,V&&V.data&&(he.data=V.data),z[Z]=he,J++}r.attributes=z,r.attributesNum=J,r.index=N}function x(){let L=r.newAttributes;for(let F=0,H=L.length;F<H;F++)L[F]=0}function m(L){p(L,0)}function p(L,F){let H=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;H[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),z[L]!==F&&(i.vertexAttribDivisor(L,F),z[L]=F)}function M(){let L=r.newAttributes,F=r.enabledAttributes;for(let H=0,N=F.length;H<N;H++)F[H]!==L[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function _(L,F,H,N,z,j,J){J===!0?i.vertexAttribIPointer(L,F,H,z,j):i.vertexAttribPointer(L,F,H,N,z,j)}function S(L,F,H,N){x();let z=N.attributes,j=H.getAttributes(),J=F.defaultAttributeValues;for(let ie in j){let Z=j[ie];if(Z.location>=0){let X=z[ie];if(X===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let V=X.normalized,he=X.itemSize,le=e.get(X);if(le===void 0)continue;let qe=le.buffer,Ve=le.type,Ge=le.bytesPerElement,Y=Ve===i.INT||Ve===i.UNSIGNED_INT||X.gpuType===lo;if(X.isInterleavedBufferAttribute){let ee=X.data,fe=ee.stride,Be=X.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)p(Z.location+Se,ee.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<Z.locationSize;Se++)m(Z.location+Se);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Se=0;Se<Z.locationSize;Se++)_(Z.location+Se,he/Z.locationSize,Ve,V,fe*Ge,(Be+he/Z.locationSize*Se)*Ge,Y)}else{if(X.isInstancedBufferAttribute){for(let ee=0;ee<Z.locationSize;ee++)p(Z.location+ee,X.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ee=0;ee<Z.locationSize;ee++)m(Z.location+ee);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ee=0;ee<Z.locationSize;ee++)_(Z.location+ee,he/Z.locationSize,Ve,V,he*Ge,he/Z.locationSize*ee*Ge,Y)}}else if(J!==void 0){let V=J[ie];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(Z.location,V);break;case 3:i.vertexAttrib3fv(Z.location,V);break;case 4:i.vertexAttrib4fv(Z.location,V);break;default:i.vertexAttrib1fv(Z.location,V)}}}}M()}function b(){w();for(let L in n){let F=n[L];for(let H in F){let N=F[H];for(let z in N){let j=N[z];for(let J in j)h(j[J].object),delete j[J];delete N[z]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let H in F){let N=F[H];for(let z in N){let j=N[z];for(let J in j)h(j[J].object),delete j[J];delete N[z]}}delete n[L.id]}function P(L){for(let F in n){let H=n[F];for(let N in H){let z=H[N];if(z[L.id]===void 0)continue;let j=z[L.id];for(let J in j)h(j[J].object),delete j[J];delete z[L.id]}}}function v(L){for(let F in n){let H=n[F],N=L.isInstancedMesh===!0?L.id:0,z=H[N];if(z!==void 0){for(let j in z){let J=z[j];for(let ie in J)h(J[ie].object),delete J[ie];delete z[j]}delete H[N],Object.keys(H).length===0&&delete n[F]}}}function w(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function e0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function t0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Jt&&P!==cn&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(He("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:S,maxSamples:b,samples:T}}function n0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new $t,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,_=M*4,S=p.clippingState||null;c.value=S,S=h(g,u,_,f);for(let b=0;b!==_;++b)S[b]=t[b];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=f;_!==x;++_,S+=4)a.copy(d[_]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ms=4,i0=6,s0=20,r0=256,Rr=new ds,Bu=new Ne,El=null,Pl=0,Rl=0,Cl=!1,a0=new R,Ci=new R,Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=a0}=r;El=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Pl,Rl),this._renderer.xr.enabled=Cl,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:sn,format:ln,colorSpace:Hs,depthBuffer:!1},s=zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o0(r)),this._blurMaterial=l0(r,e,t),this._ggxMaterial=c0(r,e,t)}return s}_compileMaterial(e){let t=new Ke(new yt,e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,n,s,r){let c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Bu),d.toneMapping=xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new on,new jt({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Bu),p=!0);for(let _=0;_<6;_++){let S=_%3;S===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):S===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let b=this._cubeSize;Ss(s,S*b,_>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===oi||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ss(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Rr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ms?n-g+Ms:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Ss(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Rr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ss(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Rr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ms?s-this._lodMax+Ms:0),u=4*(this._cubeSize-h);Ss(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,Rr)}};function o0(i){let e=[],t=[],n=i,s=i-Ms+1+i0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,_=p>2?0:-1,S=[M,_,0,M+2/3,_,0,M+2/3,_+1,0,M,_,0,M+2/3,_+1,0,M,_+1,0];g.set(S,f*u*p);for(let b=0;b<u;b++){let T=h[b*2]*2-1,P=h[b*2+1]*2-1;p===0?Ci.set(1,P,T):p===1?Ci.set(-T,1,-P):p===2?Ci.set(-T,P,1):p===3?Ci.set(-1,P,-T):p===4?Ci.set(-T,-1,P):Ci.set(T,P,-1),Ci.toArray(x,(p*u+b)*f)}}let m=new yt;m.setAttribute("position",new Dt(g,f)),m.setAttribute("outputDirection",new Dt(x,f)),t.push(new Ke(m,null)),n>Ms&&n--}return{lodMeshes:t,sizeLods:e}}function zu(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c0(i,e,t){return new Rt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function l0(i,e,t){return new Rt({name:"SphericalGaussianBlur",defines:{SAMPLES:s0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ku(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Hu(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bs=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new on(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Rn});r.uniforms.tEquirect.value=t;let a=new Ke(s,r),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Lt),new ps(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function h0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ao||f===oo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new bs(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===ao||f===oo,x=f===oi||f===Pi;if(g||x){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Qo(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Qo(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===ao?u.mapping=oi:f===oo&&(u.mapping=Pi),u}function c(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function u0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vi("WebGLRenderer: "+n+" extension not supported."),s}}}function d0(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let _=0,S=M.length;_<S;_+=3){let b=M[_+0],T=M[_+1],P=M[_+2];u.push(b,T,T,P,P,b)}}else{let M=g.array;x=g.version;for(let _=0,S=M.length/3-1;_<S;_+=3){let b=_+0,T=_+1,P=_+2;u.push(b,T,T,P,P,b)}}let m=new(g.count>=65535?Xs:qs)(u,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function f0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function p0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m0(i,e,t){let n=new WeakMap,s=new gt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let S=o.attributes.position.count*_,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let T=new Float32Array(S*b*4*d),P=new Ws(T,S,b,d);P.type=cn,P.needsUpdate=!0;let v=_*4;for(let C=0;C<d;C++){let L=m[C],F=p[C],H=M[C],N=S*b*4*C;for(let z=0;z<L.count;z++){let j=z*v;f===!0&&(s.fromBufferAttribute(L,z),T[N+j+0]=s.x,T[N+j+1]=s.y,T[N+j+2]=s.z,T[N+j+3]=0),g===!0&&(s.fromBufferAttribute(F,z),T[N+j+4]=s.x,T[N+j+5]=s.y,T[N+j+6]=s.z,T[N+j+7]=0),x===!0&&(s.fromBufferAttribute(H,z),T[N+j+8]=s.x,T[N+j+9]=s.y,T[N+j+10]=s.z,T[N+j+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new de(S,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function g0(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var x0={[nl]:"LINEAR_TONE_MAPPING",[il]:"REINHARD_TONE_MAPPING",[sl]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[al]:"AGX_TONE_MAPPING",[ol]:"NEUTRAL_TONE_MAPPING",[rl]:"CUSTOM_TONE_MAPPING"};function v0(i,e,t,n,s,r){let a=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new yt;l.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nt([0,2,0,0,2,0],2));let h=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ke(l,h),u=new ds(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,M=[],_=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let T=0;T<M.length;T++){let P=M[T];P.setSize&&P.setSize(S,b)}},this.setEffects=function(S){M=S,_=M.length>0&&M[0].isRenderPass===!0;let b=a.width,T=a.height;M.length>0&&o===null&&(o=new Yt(b,T,{type:sn,depthBuffer:!1,stencilBuffer:!1}),c=new Yt(b,T,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<M.length;P++){let v=M[P];v.setSize&&v.setSize(b,T)}},this.begin=function(S,b){if(x||S.toneMapping===xn&&M.length===0)return!1;if(p=b,b!==null){let T=b.width,P=b.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return _===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=xn,!0},this.hasRenderPass=function(){return _},this.end=function(S,b){S.toneMapping=m,x=!0;let T=a,P=o;for(let v=0;v<M.length;v++){let w=M[v];w.enabled!==!1&&(w.render(S,P,T,b),w.needsSwap!==!1&&(T=P,P=P===o?c:o))}if(f!==S.outputColorSpace||g!==S.toneMapping){f=S.outputColorSpace,g=S.toneMapping,h.defines={},tt.getTransfer(f)===ct&&(h.defines.SRGB_TRANSFER="");let v=x0[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(p),S.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var cd=new Ht,Dl=new ni(1,1),ld=new Ws,hd=new Da,ud=new Zs,Gu=[],Wu=[],qu=new Float32Array(16),Xu=new Float32Array(9),ju=new Float32Array(4);function Ts(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gu[s];if(r===void 0&&(r=new Float32Array(s),Gu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tc(i,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function M0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function b0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),It(t,n)}}function T0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;Xu.set(n),i.uniformMatrix3fv(this.addr,!1,Xu),It(t,n)}}function _0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),It(t,n)}}function w0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function C0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function N0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=t.isReversedDepthBuffer()?Yo:Ko,r=Dl):r=cd,t.setTexture2D(e||r,s)}function L0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hd,s)}function O0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ud,s)}function F0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ld,s)}function V0(i){switch(i){case 5126:return y0;case 35664:return S0;case 35665:return M0;case 35666:return A0;case 35674:return b0;case 35675:return T0;case 35676:return _0;case 5124:case 35670:return w0;case 35667:case 35671:return E0;case 35668:case 35672:return P0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return I0;case 36295:return U0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return F0}}function B0(i,e){i.uniform1fv(this.addr,e)}function z0(i,e){let t=Ts(e,this.size,2);i.uniform2fv(this.addr,t)}function k0(i,e){let t=Ts(e,this.size,3);i.uniform3fv(this.addr,t)}function H0(i,e){let t=Ts(e,this.size,4);i.uniform4fv(this.addr,t)}function G0(i,e){let t=Ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W0(i,e){let t=Ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function q0(i,e){let t=Ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function X0(i,e){i.uniform1iv(this.addr,e)}function j0(i,e){i.uniform2iv(this.addr,e)}function K0(i,e){i.uniform3iv(this.addr,e)}function Y0(i,e){i.uniform4iv(this.addr,e)}function J0(i,e){i.uniform1uiv(this.addr,e)}function Z0(i,e){i.uniform2uiv(this.addr,e)}function Q0(i,e){i.uniform3uiv(this.addr,e)}function $0(i,e){i.uniform4uiv(this.addr,e)}function ex(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),It(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dl:a=cd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function tx(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hd,r[a])}function nx(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ud,r[a])}function ix(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ld,r[a])}function sx(i){switch(i){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return H0;case 35674:return G0;case 35675:return W0;case 35676:return q0;case 5124:case 35670:return X0;case 35667:case 35671:return j0;case 35668:case 35672:return K0;case 35669:case 35673:return Y0;case 5125:return J0;case 36294:return Z0;case 36295:return Q0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}var Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=V0(t.type)}},Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}},Ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function rx(i,e,t){let n=i.name,s=n.length;for(Il.lastIndex=0;;){let r=Il.exec(n),a=Il.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ku(t,l===void 0?new Nl(o,i,e):new Ll(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ol(o),Ku(t,d)),t=d}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);rx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ax=37297,ox=0;function cx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ju=new je;function lx(i){tt._getMatrix(Ju,tt.workingColorSpace,i);let e=`mat3( ${Ju.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+cx(i.getShaderSource(e),o)}else return r}function hx(i,e){let t=lx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ux={[nl]:"Linear",[il]:"Reinhard",[sl]:"Cineon",[Sr]:"ACESFilmic",[al]:"AgX",[ol]:"Neutral",[rl]:"Custom"};function dx(i,e){let t=ux[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zo=new R;function fx(){tt.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function mx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ir(i){return i!==""}function Qu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(i){return i.replace(xx,yx)}var vx=new Map;function yx(i,e){let t=Ze[e];if(t===void 0){let n=vx.get(e);if(n!==void 0)t=Ze[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fl(t)}var Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(i){return i.replace(Sx,Mx)}function Mx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ax={[yr]:"SHADOWMAP_TYPE_PCF",[ms]:"SHADOWMAP_TYPE_VSM"};function bx(i){return Ax[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tx={[oi]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE_UV"};function _x(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Tx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wx={[Pi]:"ENVMAP_MODE_REFRACTION"};function Ex(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Px={[tl]:"ENVMAP_BLENDING_MULTIPLY",[pu]:"ENVMAP_BLENDING_MIX",[mu]:"ENVMAP_BLENDING_ADD"};function Rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Px[i.combine]||"ENVMAP_BLENDING_NONE"}function Cx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ix(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=bx(t),l=_x(t),h=Ex(t),d=Rx(t),u=Cx(t),f=px(t),g=mx(r),x=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==xn?dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,hx("linearToOutputTexel",t.outputColorSpace),fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Fl(a),a=Qu(a,t),a=$u(a,t),o=Fl(o),o=Qu(o,t),o=$u(o,t),a=ed(a),o=ed(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+m+a,S=M+p+o,b=Yu(s,s.VERTEX_SHADER,_),T=Yu(s,s.FRAGMENT_SHADER,S);s.attachShader(x,b),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(L){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(T)||"",z=F.trim(),j=H.trim(),J=N.trim(),ie=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,T);else{let X=Zu(s,b,"vertex"),V=Zu(s,T,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+X+`
`+V)}else z!==""?He("WebGLProgram: Program Info Log:",z):(j===""||J==="")&&(Z=!1);Z&&(L.diagnostics={runnable:ie,programLog:z,vertexShader:{log:j,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(T),v=new As(s,x),w=gx(s,x)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,ax)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ox++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}var Ux=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bl(e),t.set(e,n)),n}},Bl=class{constructor(e){this.id=Ux++,this.code=e,this.usedTimes=0}};function Dx(i){return i===li||i===Er||i===Pr}function Nx(i,e,t,n,s,r){let a=new ts,o=new Vl,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,w,C,L,F,H){let N=L.fog,z=F.geometry,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||j,J),Z=ie&&ie.mapping===Mr?ie.image.height:null,X=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let V=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=V!==void 0?V.length:0,le=0;z.morphAttributes.position!==void 0&&(le=1),z.morphAttributes.normal!==void 0&&(le=2),z.morphAttributes.color!==void 0&&(le=3);let qe,Ve,Ge,Y;if(X){let pt=Un[X];qe=pt.vertexShader,Ve=pt.fragmentShader}else{qe=v.vertexShader,Ve=v.fragmentShader;let pt=o.getVertexShaderStage(v),at=o.getFragmentShaderStage(v);o.update(v,pt,at),Ge=pt.id,Y=at.id}let ee=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Le=!!v.map,rt=!!v.matcap,ne=!!ie,se=!!v.aoMap,ce=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,me=!!v.normalMap,ze=!!v.displacementMap,Oe=!!v.emissiveMap,Te=!!v.metalnessMap,Xe=!!v.roughnessMap,U=v.anisotropy>0,st=v.clearcoat>0,Ye=v.dispersion>0,E=v.retroreflectivity>0,y=v.iridescence>0,B=v.sheen>0,q=v.transmission>0,D=U&&!!v.anisotropyMap,Q=st&&!!v.clearcoatMap,ae=st&&!!v.clearcoatNormalMap,k=st&&!!v.clearcoatRoughnessMap,$=y&&!!v.iridescenceMap,ue=y&&!!v.iridescenceThicknessMap,Pe=B&&!!v.sheenColorMap,xe=B&&!!v.sheenRoughnessMap,ge=!!v.specularMap,Ie=!!v.specularColorMap,ke=!!v.specularIntensityMap,Ee=q&&!!v.transmissionMap,I=q&&!!v.thicknessMap,pe=!!v.gradientMap,te=!!v.alphaMap,ve=v.alphaTest>0,be=!!v.alphaHash,re=!!v.extensions,Fe=xn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Ue={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:Ve,defines:v.defines,customVertexShaderID:Ge,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Le,matcap:rt,envMap:ne,envMapMode:ne&&ie.mapping,envMapCubeUVHeight:Z,aoMap:se,lightMap:ce,bumpMap:oe,normalMap:me,displacementMap:ze,emissiveMap:Oe,normalMapObjectSpace:me&&v.normalMapType===vu,normalMapTangentSpace:me&&v.normalMapType===jo,packedNormalMap:me&&v.normalMapType===jo&&Dx(v.normalMap.format),metalnessMap:Te,roughnessMap:Xe,anisotropy:U,anisotropyMap:D,clearcoat:st,clearcoatMap:Q,clearcoatNormalMap:ae,clearcoatRoughnessMap:k,dispersion:Ye,retroreflection:E,iridescence:y,iridescenceMap:$,iridescenceThicknessMap:ue,sheen:B,sheenColorMap:Pe,sheenRoughnessMap:xe,specularMap:ge,specularColorMap:Ie,specularIntensityMap:ke,transmission:q,transmissionMap:Ee,thicknessMap:I,gradientMap:pe,opaque:v.transparent===!1&&v.blending===gs&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:be,combine:v.combine,mapUv:Le&&g(v.map.channel),aoMapUv:se&&g(v.aoMap.channel),lightMapUv:ce&&g(v.lightMap.channel),bumpMapUv:oe&&g(v.bumpMap.channel),normalMapUv:me&&g(v.normalMap.channel),displacementMapUv:ze&&g(v.displacementMap.channel),emissiveMapUv:Oe&&g(v.emissiveMap.channel),metalnessMapUv:Te&&g(v.metalnessMap.channel),roughnessMapUv:Xe&&g(v.roughnessMap.channel),anisotropyMapUv:D&&g(v.anisotropyMap.channel),clearcoatMapUv:Q&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(v.sheenRoughnessMap.channel),specularMapUv:ge&&g(v.specularMap.channel),specularColorMapUv:Ie&&g(v.specularColorMap.channel),specularIntensityMapUv:ke&&g(v.specularIntensityMap.channel),transmissionMapUv:Ee&&g(v.transmissionMap.channel),thicknessMapUv:I&&g(v.thicknessMap.channel),alphaMapUv:te&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(me||U),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Le||te),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:le,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Le&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:Oe&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ft,flipSided:v.side===Ot,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(w,v),M(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){let w=f[v.type],C;if(w){let L=Un[w];C=Ou.clone(L.uniforms)}else C=v.uniforms;return C}function S(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Ix(i,w,v,s),l.push(C),h.set(w,C)),C}function b(v){if(--v.usedTimes===0){let w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:_,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:P}}function Lx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ox(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function id(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,f,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);let _=o(u,f,g,x,m,p);g.transmission>0?n.push(_):g.transparent===!0?s.push(_):t.push(_)}function l(u,f,g,x,m,p){let M=o(u,f,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||Ox),n.length>1&&n.sort(f||nd),s.length>1&&s.sort(f||nd)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Fx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new id,i.set(n,[a])):s>=r.length?(a=new id,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Ne};break;case"SpotLight":t={position:new R,direction:new R,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Bx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var zx=0;function kx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hx(i){let e=new Vx,t=Bx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new lt,a=new lt;function o(l){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,_=0,S=0,b=0,T=0,P=0,v=0,w=0,C=0;l.sort(kx);for(let F=0,H=l.length;F<H;F++){let N=l[F],z=N.color,j=N.intensity,J=N.distance,ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===li?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=z.r*j,d+=z.g*j,u+=z.b*j;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],j);C++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let X=N.shadow,V=t.get(N);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=ie;let he=X.getViewportCount();for(let le=0;le<he;le++)n.sunShadowMatrix[x+le]=X.getMatrix(le),n.sunShadowCascade[x+le]=X._cascadeData[le];x+=he,g++}n.sun[f]=Z,f++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let X=N.shadow,V=t.get(N);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=Z,m++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(z).multiplyScalar(j),Z.distance=J,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[M]=Z;let X=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,X.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[M]=X.matrix,N.castShadow){let V=t.get(N);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=ie,P++}M++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy(z).multiplyScalar(j),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=Z,_++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let X=N.shadow,V=t.get(N);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=N.shadow.matrix,T++}n.point[p]=Z,p++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(j),Z.groundColor.copy(N.groundColor).multiplyScalar(j),n.hemi[S]=Z,S++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==_||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==P||L.numSpotMaps!==v||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=_,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=_,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=P,L.numSpotMaps=v,L.numLightProbes=C,n.version=zx++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let M=0,_=l.length;M<_;M++){let S=l[M];if(S.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(S.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function sd(i){let e=new Hx(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Gx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sd(i),e.set(s,[o])):r>=a.length?(o=new sd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],jx=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],rd=new lt,Cr=new R,Ul=new R;function Kx(i,e,t){let n=new ss,s=new de,r=new de,a=new gt,o=new qa,c=new Xa,l={},h=t.maxTextureSize,d={[ai]:Ot,[Ot]:ai,[Ft]:Ft},u=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Wx,fragmentShader:qx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ke(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yr;let p=this.type;this.render=function(T,P,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Yh&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yr);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Rn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=p!==this.type;H&&P.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=T.length;N<z;N++){let j=T[N],J=j.shadow;if(J===void 0){He("WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ie=J.getFrameExtents();s.multiply(ie),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,J.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Z,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ms){if(j.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Yt(s.x,s.y,{format:li,type:sn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),J.map.texture.name=j.name+".shadowMap",J.map.depthTexture=new ni(s.x,s.y,cn),J.map.depthTexture.name=j.name+".shadowMapDepth",J.map.depthTexture.format=bn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Nt,J.map.depthTexture.magFilter=Nt}else j.isPointLight?(J.map=new bs(s.x),J.map.depthTexture=new Va(s.x,vn)):(J.map=new Yt(s.x,s.y),J.map.depthTexture=new ni(s.x,s.y,vn)),J.map.depthTexture.name=j.name+".shadowMap",J.map.depthTexture.format=bn,this.type===yr?(J.map.depthTexture.compareFunction=Z?Yo:Ko,J.map.depthTexture.minFilter=Lt,J.map.depthTexture.magFilter=Lt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Nt,J.map.depthTexture.magFilter=Nt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let X=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();j.isPointLight!==!0&&J.updateMatrices(j,v);for(let V=0;V<X;V++){let he=J.getCamera(V);if(j.isPointLight){let le=J.camera,qe=J.matrix,Ve=j.distance||le.far;Ve!==le.far&&(le.far=Ve,le.updateProjectionMatrix()),Cr.setFromMatrixPosition(j.matrixWorld),le.position.copy(Cr),Ul.copy(le.position),Ul.add(Xx[V]),le.up.copy(jx[V]),le.lookAt(Ul),le.updateMatrixWorld(),qe.makeTranslation(-Cr.x,-Cr.y,-Cr.z),rd.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),J._frustum.setFromProjectionMatrix(rd,le.coordinateSystem,le.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,V),i.clear();else{V===0&&(i.setRenderTarget(J.map),i.clear());let le=J.getViewport(V);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),F.viewport(a)}n=J.getFrustum(V),S(P,v,he,j,this.type)}J.isPointLightShadow!==!0&&this.type===ms&&M(J,v),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,L)};function M(T,P){let v=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Yt(s.x,s.y,{format:li,type:sn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,v,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,v,f,x,null)}function _(T,P,v,w){let C=null,L=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=v.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=C.uuid,H=P.uuid,N=l[F];N===void 0&&(N={},l[F]=N);let z=N[H];z===void 0&&(z=C.clone(),N[H]=z,P.addEventListener("dispose",b)),C=z}if(C.visible=P.visible,C.wireframe=P.wireframe,w===ms?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:d[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=v}return C}function S(T,P,v,w,C){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ms)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let H=e.update(T),N=T.material;if(Array.isArray(N)){let z=H.groups;for(let j=0,J=z.length;j<J;j++){let ie=z[j],Z=N[ie.materialIndex];if(Z&&Z.visible){let X=_(T,Z,w,C);T.onBeforeShadow(i,T,P,v,H,X,ie),i.renderBufferDirect(v,null,H,X,T,ie),T.onAfterShadow(i,T,P,v,H,X,ie)}}}else if(N.visible){let z=_(T,N,w,C);T.onBeforeShadow(i,T,P,v,H,z,null),i.renderBufferDirect(v,null,H,z,T,null),T.onAfterShadow(i,T,P,v,H,z,null)}}let F=T.children;for(let H=0,N=F.length;H<N;H++)S(F[H],P,v,w,C)}function b(T){T.target.removeEventListener("dispose",b);for(let v in l){let w=l[v],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Yx(i,e){function t(){let I=!1,pe=new gt,te=null,ve=new gt(0,0,0,0);return{setMask:function(be){te!==be&&!I&&(i.colorMask(be,be,be,be),te=be)},setLocked:function(be){I=be},setClear:function(be,re,Fe,Ue,pt){pt===!0&&(be*=Ue,re*=Ue,Fe*=Ue),pe.set(be,re,Fe,Ue),ve.equals(pe)===!1&&(i.clearColor(be,re,Fe,Ue),ve.copy(pe))},reset:function(){I=!1,te=null,ve.set(-1,0,0,0)}}}function n(){let I=!1,pe=!1,te=null,ve=null,be=null;return{setReversed:function(re){if(pe!==re){let Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),pe=re;let Ue=be;be=null,this.setClear(Ue)}},getReversed:function(){return pe},setTest:function(re){re?ee(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(re){te!==re&&!I&&(i.depthMask(re),te=re)},setFunc:function(re){if(pe&&(re=Cu[re]),ve!==re){switch(re){case Sa:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=re}},setLocked:function(re){I=re},setClear:function(re){be!==re&&(be=re,pe&&(re=1-re),i.clearDepth(re))},reset:function(){I=!1,te=null,ve=null,be=null,pe=!1}}}function s(){let I=!1,pe=null,te=null,ve=null,be=null,re=null,Fe=null,Ue=null,pt=null;return{setTest:function(at){I||(at?ee(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(at){pe!==at&&!I&&(i.stencilMask(at),pe=at)},setFunc:function(at,dn,yn){(te!==at||ve!==dn||be!==yn)&&(i.stencilFunc(at,dn,yn),te=at,ve=dn,be=yn)},setOp:function(at,dn,yn){(re!==at||Fe!==dn||Ue!==yn)&&(i.stencilOp(at,dn,yn),re=at,Fe=dn,Ue=yn)},setLocked:function(at){I=at},setClear:function(at){pt!==at&&(i.clearStencil(at),pt=at)},reset:function(){I=!1,pe=null,te=null,ve=null,be=null,re=null,Fe=null,Ue=null,pt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,_=null,S=null,b=null,T=null,P=null,v=new Ne(0,0,0),w=0,C=!1,L=null,F=null,H=null,N=null,z=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ie=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=ie>=1):Z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=ie>=2);let X=null,V={},he=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),qe=new gt().fromArray(he),Ve=new gt().fromArray(le);function Ge(I,pe,te,ve){let be=new Uint8Array(4),re=i.createTexture();i.bindTexture(I,re),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<te;Fe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(pe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return re}let Y={};Y[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Ji),oe(!1),me(Jc),ee(i.CULL_FACE),se(Rn);function ee(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function fe(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Be(I,pe){return u[I]!==pe?(i.bindFramebuffer(I,pe),u[I]=pe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Se(I,pe){let te=g,ve=!1;if(I){te=f.get(pe),te===void 0&&(te=[],f.set(pe,te));let be=I.textures;if(te.length!==be.length||te[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Fe=be.length;re<Fe;re++)te[re]=i.COLOR_ATTACHMENT0+re;te.length=be.length,ve=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ve=!0);ve&&i.drawBuffers(te)}function Le(I){return x!==I?(i.useProgram(I),x=I,!0):!1}let rt={[Ei]:i.FUNC_ADD,[Zh]:i.FUNC_SUBTRACT,[Qh]:i.FUNC_REVERSE_SUBTRACT};rt[$h]=i.MIN,rt[eu]=i.MAX;let ne={[tu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[$c]:i.SRC_ALPHA,[lu]:i.SRC_ALPHA_SATURATE,[ou]:i.DST_COLOR,[ru]:i.DST_ALPHA,[su]:i.ONE_MINUS_SRC_COLOR,[el]:i.ONE_MINUS_SRC_ALPHA,[cu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[fu]:i.ONE_MINUS_CONSTANT_ALPHA};function se(I,pe,te,ve,be,re,Fe,Ue,pt,at){if(I===Rn){m===!0&&(fe(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),I!==Jh){if(I!==p||at!==C){if((M!==Ei||b!==Ei)&&(i.blendEquation(i.FUNC_ADD),M=Ei,b=Ei),at)switch(I){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",I);break}else switch(I){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",I);break}_=null,S=null,T=null,P=null,v.set(0,0,0),w=0,p=I,C=at}return}be=be||pe,re=re||te,Fe=Fe||ve,(pe!==M||be!==b)&&(i.blendEquationSeparate(rt[pe],rt[be]),M=pe,b=be),(te!==_||ve!==S||re!==T||Fe!==P)&&(i.blendFuncSeparate(ne[te],ne[ve],ne[re],ne[Fe]),_=te,S=ve,T=re,P=Fe),(Ue.equals(v)===!1||pt!==w)&&(i.blendColor(Ue.r,Ue.g,Ue.b,pt),v.copy(Ue),w=pt),p=I,C=!1}function ce(I,pe){I.side===Ft?fe(i.CULL_FACE):ee(i.CULL_FACE);let te=I.side===Ot;pe&&(te=!te),oe(te),I.blending===gs&&I.transparent===!1?se(Rn):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ve=I.stencilWrite;o.setTest(ve),ve&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function me(I){I!==jh?(ee(i.CULL_FACE),I!==F&&(I===Jc?i.cullFace(i.BACK):I===Kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),F=I}function ze(I){I!==H&&(J&&i.lineWidth(I),H=I)}function Oe(I,pe,te){I?(ee(i.POLYGON_OFFSET_FILL),(N!==pe||z!==te)&&(N=pe,z=te,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,te))):fe(i.POLYGON_OFFSET_FILL)}function Te(I){I?ee(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function Xe(I){I===void 0&&(I=i.TEXTURE0+j-1),X!==I&&(i.activeTexture(I),X=I)}function U(I,pe,te){te===void 0&&(X===null?te=i.TEXTURE0+j-1:te=X);let ve=V[te];ve===void 0&&(ve={type:void 0,texture:void 0},V[te]=ve),(ve.type!==I||ve.texture!==pe)&&(X!==te&&(i.activeTexture(te),X=te),i.bindTexture(I,pe||Y[I]),ve.type=I,ve.texture=pe)}function st(){let I=V[X];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function y(){try{i.texSubImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function B(){try{i.texSubImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function D(){try{i.compressedTexSubImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function Q(){try{i.texStorage2D(...arguments)}catch(I){We("WebGLState:",I)}}function ae(){try{i.texStorage3D(...arguments)}catch(I){We("WebGLState:",I)}}function k(){try{i.texImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function $(){try{i.texImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function ue(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function Pe(I,pe){d[I]!==pe&&(i.pixelStorei(I,pe),d[I]=pe)}function xe(I){qe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),qe.copy(I))}function ge(I){Ve.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function Ie(I,pe){let te=l.get(pe);te===void 0&&(te=new WeakMap,l.set(pe,te));let ve=te.get(I);ve===void 0&&(ve=i.getUniformBlockIndex(pe,I.name),te.set(I,ve))}function ke(I,pe){let ve=l.get(pe).get(I);c.get(pe)!==ve&&(i.uniformBlockBinding(pe,ve,I.__bindingPointIndex),c.set(pe,ve))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,V={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,_=null,S=null,b=null,T=null,P=null,v=new Ne(0,0,0),w=0,C=!1,L=null,F=null,H=null,N=null,z=null,qe.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:fe,bindFramebuffer:Be,drawBuffers:Se,useProgram:Le,setBlending:se,setMaterial:ce,setFlipSided:oe,setCullFace:me,setLineWidth:ze,setPolygonOffset:Oe,setScissorTest:Te,activeTexture:Xe,bindTexture:U,unbindTexture:st,compressedTexImage2D:Ye,compressedTexImage3D:E,texImage2D:k,texImage3D:$,pixelStorei:Pe,getParameter:ue,updateUBOMapping:Ie,uniformBlockBinding:ke,texStorage2D:Q,texStorage3D:ae,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:D,scissor:xe,viewport:ge,reset:Ee}}function Jx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,y){return g?new OffscreenCanvas(E,y):Qi("canvas")}function m(E,y,B){let q=1,D=Ye(E);if((D.width>B||D.height>B)&&(q=B/Math.max(D.width,D.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Q=Math.floor(q*D.width),ae=Math.floor(q*D.height);u===void 0&&(u=x(Q,ae));let k=y?x(Q,ae):u;return k.width=Q,k.height=ae,k.getContext("2d").drawImage(E,0,0,Q,ae),He("WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Q+"x"+ae+")."),k}else return"data"in E&&He("WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,y,B,q,D,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae;q&&(ae=e.get("EXT_texture_norm16"),ae||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=y;if(y===i.RED&&(B===i.FLOAT&&(k=i.R32F),B===i.HALF_FLOAT&&(k=i.R16F),B===i.UNSIGNED_BYTE&&(k=i.R8),B===i.UNSIGNED_SHORT&&ae&&(k=ae.R16_EXT),B===i.SHORT&&ae&&(k=ae.R16_SNORM_EXT)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.R8UI),B===i.UNSIGNED_SHORT&&(k=i.R16UI),B===i.UNSIGNED_INT&&(k=i.R32UI),B===i.BYTE&&(k=i.R8I),B===i.SHORT&&(k=i.R16I),B===i.INT&&(k=i.R32I)),y===i.RG&&(B===i.FLOAT&&(k=i.RG32F),B===i.HALF_FLOAT&&(k=i.RG16F),B===i.UNSIGNED_BYTE&&(k=i.RG8),B===i.UNSIGNED_SHORT&&ae&&(k=ae.RG16_EXT),B===i.SHORT&&ae&&(k=ae.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RG8UI),B===i.UNSIGNED_SHORT&&(k=i.RG16UI),B===i.UNSIGNED_INT&&(k=i.RG32UI),B===i.BYTE&&(k=i.RG8I),B===i.SHORT&&(k=i.RG16I),B===i.INT&&(k=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RGB8UI),B===i.UNSIGNED_SHORT&&(k=i.RGB16UI),B===i.UNSIGNED_INT&&(k=i.RGB32UI),B===i.BYTE&&(k=i.RGB8I),B===i.SHORT&&(k=i.RGB16I),B===i.INT&&(k=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),B===i.UNSIGNED_INT&&(k=i.RGBA32UI),B===i.BYTE&&(k=i.RGBA8I),B===i.SHORT&&(k=i.RGBA16I),B===i.INT&&(k=i.RGBA32I)),y===i.RGB&&(B===i.UNSIGNED_SHORT&&ae&&(k=ae.RGB16_EXT),B===i.SHORT&&ae&&(k=ae.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),y===i.RGBA){let $=Q?Gs:tt.getTransfer(D);B===i.FLOAT&&(k=i.RGBA32F),B===i.HALF_FLOAT&&(k=i.RGBA16F),B===i.UNSIGNED_BYTE&&(k=$===ct?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ae&&(k=ae.RGBA16_EXT),B===i.SHORT&&ae&&(k=ae.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function b(E,y){let B;return E?y===null||y===vn||y===vs?B=i.DEPTH24_STENCIL8:y===cn?B=i.DEPTH32F_STENCIL8:y===xs&&(B=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vn||y===vs?B=i.DEPTH_COMPONENT24:y===cn?B=i.DEPTH_COMPONENT32F:y===xs&&(B=i.DEPTH_COMPONENT16),B}function T(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==Lt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function P(E){let y=E.target;y.removeEventListener("dispose",P),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(E){let y=E.target;y.removeEventListener("dispose",v),L(y)}function w(E){let y=n.get(E);if(y.__webglInit===void 0)return;let B=E.source,q=f.get(B);if(q){let D=q[y.__cacheKey];D.usedTimes--,D.usedTimes===0&&C(E),Object.keys(q).length===0&&f.delete(B)}n.remove(E)}function C(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let B=E.source,q=f.get(B);delete q[y.__cacheKey],a.memory.textures--}function L(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let D=0;D<y.__webglFramebuffer[q].length;D++)i.deleteFramebuffer(y.__webglFramebuffer[q][D]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=E.textures;for(let q=0,D=B.length;q<D;q++){let Q=n.get(B[q]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(E)}let F=0;function H(){F=0}function N(){return F}function z(E){F=E}function j(){let E=F;return E>=s.maxTextures&&He("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function J(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function ie(E,y){let B=n.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let q=E.image;if(q===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(B,E,y);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function Z(E,y){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){fe(B,E,y);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function X(E,y){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){fe(B,E,y);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function V(E,y){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Be(B,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}let he={[Ea]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},le={[Nt]:i.NEAREST,[gu]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},qe={[Su]:i.NEVER,[_u]:i.ALWAYS,[Mu]:i.LESS,[Ko]:i.LEQUAL,[Au]:i.EQUAL,[Yo]:i.GEQUAL,[bu]:i.GREATER,[Tu]:i.NOTEQUAL};function Ve(E,y){if(y.type===cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Lt||y.magFilter===co||y.magFilter===Ar||y.magFilter===Cn||y.minFilter===Lt||y.minFilter===co||y.minFilter===Ar||y.minFilter===Cn)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,he[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,he[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,he[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,le[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,qe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nt||y.minFilter!==Ar&&y.minFilter!==Cn||y.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ge(E,y){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",P));let q=y.source,D=f.get(q);D===void 0&&(D={},f.set(q,D));let Q=J(y);if(Q!==E.__cacheKey){D[Q]===void 0&&(D[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),D[Q].usedTimes++;let ae=D[E.__cacheKey];ae!==void 0&&(D[E.__cacheKey].usedTimes--,ae.usedTimes===0&&C(y)),E.__cacheKey=Q,E.__webglTexture=D[Q].texture}return B}function Y(E,y,B){return Math.floor(Math.floor(E/B)/y)}function ee(E,y,B,q){let Q=E.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,B,q,y.data);else{Q.sort((Pe,xe)=>Pe.start-xe.start);let ae=0;for(let Pe=1;Pe<Q.length;Pe++){let xe=Q[ae],ge=Q[Pe],Ie=xe.start+xe.count,ke=Y(ge.start,y.width,4),Ee=Y(xe.start,y.width,4);ge.start<=Ie+1&&ke===Ee&&Y(ge.start+ge.count-1,y.width,4)===ke?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++ae,Q[ae]=ge)}Q.length=ae+1;let k=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Pe=0,xe=Q.length;Pe<xe;Pe++){let ge=Q[Pe],Ie=Math.floor(ge.start/4),ke=Math.ceil(ge.count/4),Ee=Ie%y.width,I=Math.floor(Ie/y.width),pe=ke,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ee,I,pe,te,B,q,y.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,k),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function fe(E,y,B){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);let D=Ge(E,y),Q=y.source;t.bindTexture(q,E.__webglTexture,i.TEXTURE0+B);let ae=n.get(Q);if(Q.version!==ae.__version||D===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let te=tt.getPrimaries(tt.workingColorSpace),ve=y.colorSpace===qn?null:tt.getPrimaries(y.colorSpace),be=y.colorSpace===qn||te===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let $=m(y.image,!1,s.maxTextureSize);$=st(y,$);let ue=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type),xe=S(y.internalFormat,ue,Pe,y.normalized,y.colorSpace,y.isVideoTexture);Ve(q,y);let ge,Ie=y.mipmaps,ke=y.isVideoTexture!==!0,Ee=ae.__version===void 0||D===!0,I=Q.dataReady,pe=T(y,$);if(y.isDepthTexture)xe=b(y.format===ci,y.type),Ee&&(ke?t.texStorage2D(i.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,ue,Pe,null));else if(y.isDataTexture)if(Ie.length>0){ke&&Ee&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Ie[0].width,Ie[0].height);for(let te=0,ve=Ie.length;te<ve;te++)ge=Ie[te],ke?I&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,ue,Pe,ge.data):t.texImage2D(i.TEXTURE_2D,te,xe,ge.width,ge.height,0,ue,Pe,ge.data);y.generateMipmaps=!1}else ke?(Ee&&t.texStorage2D(i.TEXTURE_2D,pe,xe,$.width,$.height),I&&ee(y,$,ue,Pe)):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,ue,Pe,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,xe,Ie[0].width,Ie[0].height,$.depth);for(let te=0,ve=Ie.length;te<ve;te++)if(ge=Ie[te],y.format!==ln)if(ue!==null)if(ke){if(I)if(y.layerUpdates.size>0){let be=Ml(ge.width,ge.height,y.format,y.type);for(let re of y.layerUpdates){let Fe=ge.data.subarray(re*be/ge.data.BYTES_PER_ELEMENT,(re+1)*be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,re,ge.width,ge.height,1,ue,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,$.depth,ue,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,xe,ge.width,ge.height,$.depth,0,ge.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,$.depth,ue,Pe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,xe,ge.width,ge.height,$.depth,0,ue,Pe,ge.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ke&&Ee&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Ie[0].width,Ie[0].height);for(let te=0,ve=Ie.length;te<ve;te++)ge=Ie[te],y.format!==ln?ue!==null?ke?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,ue,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,te,xe,ge.width,ge.height,0,ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,ue,Pe,ge.data):t.texImage2D(i.TEXTURE_2D,te,xe,ge.width,ge.height,0,ue,Pe,ge.data)}else if(y.isDataArrayTexture)if(ke){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,xe,$.width,$.height,$.depth),I)if(y.layerUpdates.size>0){let te=Ml($.width,$.height,y.format,y.type);for(let ve of y.layerUpdates){let be=$.data.subarray(ve*te/$.data.BYTES_PER_ELEMENT,(ve+1)*te/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,$.width,$.height,1,ue,Pe,be)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ue,Pe,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,ue,Pe,$.data);else if(y.isData3DTexture)ke?(Ee&&t.texStorage3D(i.TEXTURE_3D,pe,xe,$.width,$.height,$.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ue,Pe,$.data)):t.texImage3D(i.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,ue,Pe,$.data);else if(y.isFramebufferTexture){if(Ee)if(ke)t.texStorage2D(i.TEXTURE_2D,pe,xe,$.width,$.height);else{let te=$.width,ve=$.height;for(let be=0;be<pe;be++)t.texImage2D(i.TEXTURE_2D,be,xe,te,ve,0,ue,Pe,null),te>>=1,ve>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),$.parentNode!==te){te.appendChild($),d.add(y),te.onpaint=ve=>{let be=ve.changedElements;for(let re of d)be.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let be=i.RGBA,re=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,re,Fe,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(ke&&Ee){let te=Ye(Ie[0]);t.texStorage2D(i.TEXTURE_2D,pe,xe,te.width,te.height)}for(let te=0,ve=Ie.length;te<ve;te++)ge=Ie[te],ke?I&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue,Pe,ge):t.texImage2D(i.TEXTURE_2D,te,xe,ue,Pe,ge);y.generateMipmaps=!1}else if(ke){if(Ee){let te=Ye($);t.texStorage2D(i.TEXTURE_2D,pe,xe,te.width,te.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Pe,$)}else t.texImage2D(i.TEXTURE_2D,0,xe,ue,Pe,$);p(y)&&M(q),ae.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Be(E,y,B){if(y.image.length!==6)return;let q=Ge(E,y),D=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let Q=n.get(D);if(D.version!==Q.__version||q===!0){t.activeTexture(i.TEXTURE0+B);let ae=tt.getPrimaries(tt.workingColorSpace),k=y.colorSpace===qn?null:tt.getPrimaries(y.colorSpace),$=y.colorSpace===qn||ae===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ue=y.isCompressedTexture||y.image[0].isCompressedTexture,Pe=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let re=0;re<6;re++)!ue&&!Pe?xe[re]=m(y.image[re],!0,s.maxCubemapSize):xe[re]=Pe?y.image[re].image:y.image[re],xe[re]=st(y,xe[re]);let ge=xe[0],Ie=r.convert(y.format,y.colorSpace),ke=r.convert(y.type),Ee=S(y.internalFormat,Ie,ke,y.normalized,y.colorSpace),I=y.isVideoTexture!==!0,pe=Q.__version===void 0||q===!0,te=D.dataReady,ve=T(y,ge);Ve(i.TEXTURE_CUBE_MAP,y);let be;if(ue){I&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ee,ge.width,ge.height);for(let re=0;re<6;re++){be=xe[re].mipmaps;for(let Fe=0;Fe<be.length;Fe++){let Ue=be[Fe];y.format!==ln?Ie!==null?I?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Ue.width,Ue.height,Ie,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Ee,Ue.width,Ue.height,0,Ue.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Ue.width,Ue.height,Ie,ke,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Ee,Ue.width,Ue.height,0,Ie,ke,Ue.data)}}}else{if(be=y.mipmaps,I&&pe){be.length>0&&ve++;let re=Ye(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ee,re.width,re.height)}for(let re=0;re<6;re++)if(Pe){I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,xe[re].width,xe[re].height,Ie,ke,xe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ee,xe[re].width,xe[re].height,0,Ie,ke,xe[re].data);for(let Fe=0;Fe<be.length;Fe++){let pt=be[Fe].image[re].image;I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,pt.width,pt.height,Ie,ke,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Ee,pt.width,pt.height,0,Ie,ke,pt.data)}}else{I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ie,ke,xe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ee,Ie,ke,xe[re]);for(let Fe=0;Fe<be.length;Fe++){let Ue=be[Fe];I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,Ie,ke,Ue.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Ee,Ie,ke,Ue.image[re])}}}p(y)&&M(i.TEXTURE_CUBE_MAP),Q.__version=D.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Se(E,y,B,q,D,Q){let ae=r.convert(B.format,B.colorSpace),k=r.convert(B.type),$=S(B.internalFormat,ae,k,B.normalized,B.colorSpace),ue=n.get(y),Pe=n.get(B);if(Pe.__renderTarget=y,!ue.__hasExternalTextures){let xe=Math.max(1,y.width>>Q),ge=Math.max(1,y.height>>Q);D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?t.texImage3D(D,Q,$,xe,ge,y.depth,0,ae,k,null):t.texImage2D(D,Q,$,xe,ge,0,ae,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,D,Pe.__webglTexture,0,Te(y)):(D===i.TEXTURE_2D||D>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,D,Pe.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(E,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let q=y.depthTexture,D=q&&q.isDepthTexture?q.type:null,Q=b(y.stencilBuffer,D),ae=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(y),Q,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(y),Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,E)}else{let q=y.textures;for(let D=0;D<q.length;D++){let Q=q[D],ae=r.convert(Q.format,Q.colorSpace),k=r.convert(Q.type),$=S(Q.internalFormat,ae,k,Q.normalized,Q.colorSpace);Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(y),$,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(y),$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(E,y,B){let q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let D=n.get(y.depthTexture);if(D.__renderTarget=y,(!D.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(D.__webglInit===void 0&&(D.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),D.__webglTexture===void 0){D.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,y.depthTexture);let ue=r.convert(y.depthTexture.format),Pe=r.convert(y.depthTexture.type),xe;y.depthTexture.format===bn?xe=i.DEPTH_COMPONENT24:y.depthTexture.format===ci&&(xe=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,y.width,y.height,0,ue,Pe,null)}}else ie(y.depthTexture,0);let Q=D.__webglTexture,ae=Te(y),k=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,$=y.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===bn)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,k,Q,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,$,k,Q,0);else if(y.depthTexture.format===ci)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,k,Q,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,$,k,Q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(E){let y=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let D=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",D)};q.addEventListener("dispose",D),y.__depthDisposeCallback=D}y.__boundDepthTexture=q}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)rt(y.__webglFramebuffer[q],E,q);else{let q=E.texture.mipmaps;q&&q.length>0?rt(y.__webglFramebuffer[0],E,0):rt(y.__webglFramebuffer,E,0)}else if(B){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),Le(y.__webglDepthbuffer[q],E,!1);else{let D=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,Q)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Le(y.__webglDepthbuffer,E,!1);else{let D=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(E,y,B){let q=n.get(E);y!==void 0&&Se(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ne(E)}function ce(E){let y=E.texture,B=n.get(E),q=n.get(y);E.addEventListener("dispose",v);let D=E.textures,Q=E.isWebGLCubeRenderTarget===!0,ae=D.length>1;if(ae||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,a.memory.textures++),Q){B.__webglFramebuffer=[];for(let k=0;k<6;k++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[k]=[];for(let $=0;$<y.mipmaps.length;$++)B.__webglFramebuffer[k][$]=i.createFramebuffer()}else B.__webglFramebuffer[k]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let k=0;k<y.mipmaps.length;k++)B.__webglFramebuffer[k]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ae)for(let k=0,$=D.length;k<$;k++){let ue=n.get(D[k]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Xe(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let k=0;k<D.length;k++){let $=D[k];B.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[k]);let ue=r.convert($.format,$.colorSpace),Pe=r.convert($.type),xe=S($.internalFormat,ue,Pe,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),ge=Te(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,B.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,y);for(let k=0;k<6;k++)if(y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)Se(B.__webglFramebuffer[k][$],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$);else Se(B.__webglFramebuffer[k],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);p(y)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let k=0,$=D.length;k<$;k++){let ue=D[k],Pe=n.get(ue),xe=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(xe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Pe.__webglTexture),Ve(xe,ue),Se(B.__webglFramebuffer,E,ue,i.COLOR_ATTACHMENT0+k,xe,0),p(ue)&&M(xe)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(k=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,q.__webglTexture),Ve(k,y),y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)Se(B.__webglFramebuffer[$],E,y,i.COLOR_ATTACHMENT0,k,$);else Se(B.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,k,0);p(y)&&M(k),t.unbindTexture()}E.depthBuffer&&ne(E)}function oe(E){let y=E.textures;for(let B=0,q=y.length;B<q;B++){let D=y[B];if(p(D)){let Q=_(E),ae=n.get(D).__webglTexture;t.bindTexture(Q,ae),M(Q),t.unbindTexture()}}}let me=[],ze=[];function Oe(E){if(E.samples>0){if(Xe(E)===!1){let y=E.textures,B=E.width,q=E.height,D=i.COLOR_BUFFER_BIT,Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(E),k=y.length>1;if(k)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let $=E.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(D|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(D|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);let Pe=n.get(y[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,D,i.NEAREST),c===!0&&(me.length=0,ze.length=0,me.push(i.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(me.push(Q),ze.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);let Pe=n.get(y[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Te(E){return Math.min(s.maxSamples,E.samples)}function Xe(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function st(E,y){let B=E.colorSpace,q=E.format,D=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Hs&&B!==qn&&(tt.getTransfer(B)===ct?(q!==ln||D!==Jt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",B)),y}function Ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=ie,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=se,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zx(i,e){function t(n,s=qn){let r,a=tt.getTransfer(s);if(n===Jt)return i.UNSIGNED_BYTE;if(n===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ll)return i.BYTE;if(n===hl)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===fl)return i.ALPHA;if(n===pl)return i.RGB;if(n===ln)return i.RGBA;if(n===bn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===fo)return i.RED;if(n===po)return i.RED_INTEGER;if(n===li)return i.RG;if(n===mo)return i.RG_INTEGER;if(n===go)return i.RGBA_INTEGER;if(n===br||n===Tr||n===_r||n===wr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===vo||n===yo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===Ao||n===bo||n===To||n===_o||n===Er||n===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===Ao)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return r.COMPRESSED_R11_EAC;if(n===_o)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Er)return r.COMPRESSED_RG11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===Po||n===Ro||n===Co||n===Io||n===Uo||n===Do||n===No||n===Lo||n===Oo||n===Fo||n===Vo||n===Bo||n===zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Ho||n===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===qo||n===Pr||n===Xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rt({vertexShader:Qx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kl=class extends Tn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new zl,p={},M=t.getContextAttributes(),_=null,S=null,b=[],T=[],P=new de,v=null,w=null,C=new kt;C.viewport=new gt;let L=new kt;L.viewport=new gt;let F=[C,L],H=new so,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=b[Y];return ee===void 0&&(ee=new ns,b[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=b[Y];return ee===void 0&&(ee=new ns,b[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=b[Y];return ee===void 0&&(ee=new ns,b[Y]=ee),ee.getHandSpace()};function j(Y){let ee=T.indexOf(Y.inputSource);if(ee===-1)return;let fe=b[ee];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,l||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<b.length;Y++){let ee=T[Y];ee!==null&&(T[Y]=null,b[Y].disconnect(ee))}N=null,z=null,m.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(_),f=null,u=null,d=null,s=null,S=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Be=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?ci:bn,Be=M.stencil?vs:vn);let Le={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Yt(u.textureWidth,u.textureHeight,{format:ln,type:Jt,depthTexture:new ni(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let fe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Yt(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Y){for(let ee=0;ee<Y.removed.length;ee++){let fe=Y.removed[ee],Be=T.indexOf(fe);Be>=0&&(T[Be]=null,b[Be].disconnect(fe))}for(let ee=0;ee<Y.added.length;ee++){let fe=Y.added[ee],Be=T.indexOf(fe);if(Be===-1){for(let Le=0;Le<b.length;Le++)if(Le>=T.length){T.push(fe),Be=Le;break}else if(T[Le]===null){T[Le]=fe,Be=Le;break}if(Be===-1)break}let Se=b[Be];Se&&Se.connect(fe)}}let Z=new R,X=new R;function V(Y,ee,fe){Z.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);let Be=Z.distanceTo(X),Se=ee.projectionMatrix.elements,Le=fe.projectionMatrix.elements,rt=Se[14]/(Se[10]-1),ne=Se[14]/(Se[10]+1),se=(Se[9]+1)/Se[5],ce=(Se[9]-1)/Se[5],oe=(Se[8]-1)/Se[0],me=(Le[8]+1)/Le[0],ze=rt*oe,Oe=rt*me,Te=Be/(-oe+me),Xe=Te*-oe;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Xe),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let U=rt+Te,st=ne+Te,Ye=ze-Xe,E=Oe+(Be-Xe),y=se*ne/st*U,B=ce*ne/st*U;Y.projectionMatrix.makePerspective(Ye,E,y,B,U,st),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ee=Y.near,fe=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),H.near=L.near=C.near=ee,H.far=L.far=C.far=fe,(N!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,z=H.far),H.layers.mask=Y.layers.mask|6,C.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let Be=Y.parent,Se=H.cameras;he(H,Be);for(let Le=0;Le<Se.length;Le++)he(Se[Le],Be);Se.length===2?V(H,C,L):H.projectionMatrix.copy(C.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),le(Y,H,Be)};function le(Y,ee,fe){fe===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ca*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let qe=null;function Ve(Y,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Be=!1;fe.length!==H.cameras.length&&(H.cameras.length=0,Be=!0);for(let ne=0;ne<fe.length;ne++){let se=fe[ne],ce=null;if(f!==null)ce=f.getViewport(se);else{let me=d.getViewSubImage(u,se);ce=me.viewport,ne===0&&(e.setRenderTargetTextures(S,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(S))}let oe=F[ne];oe===void 0&&(oe=new kt,oe.layers.enable(ne),oe.viewport=new gt,F[ne]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ce.x,ce.y,ce.width,ce.height),ne===0&&(H.matrix.copy(oe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Be===!0&&H.cameras.push(oe)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ne=d.getDepthInformation(fe[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ne=0;ne<fe.length;ne++){let se=fe[ne].camera;if(se){let ce=p[se];ce||(ce=new Qs,p[se]=ce);let oe=d.getCameraImage(se);ce.sourceTexture=oe}}}}for(let fe=0;fe<b.length;fe++){let Be=T[fe],Se=b[fe];Be!==null&&Se!==void 0&&Se.update(Be,ee,l||a)}qe&&qe(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let Ge=new ad;Ge.setAnimationLoop(Ve),this.setAnimationLoop=function(Y){qe=Y},this.dispose=function(){}}},ev=new lt,dd=new je;dd.set(-1,0,0,0,1,0,0,0,1);function tv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),_=M.envMap,S=M.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(ev.makeRotationFromEuler(S)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let T=b.program;n.uniformBlockBinding(S,T)}function l(S,b){let T=s[S.id];T===void 0&&(m(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",M));let P=b.program;n.updateUBOMapping(S,P);let v=e.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function h(S){let b=d();S.__bindingPointIndex=b;let T=i.createBuffer(),P=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let b=s[S.id],T=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,w=T.length;v<w;v++){let C=T[v];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)f(C[L],v,L,P);else f(C,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,b,T,P){if(x(S,b,T,P)===!0){let v=S.__offset,w=S.value;if(Array.isArray(w)){let C=0;for(let L=0;L<w.length;L++){let F=w[L],H=p(F);g(F,S.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,b,T){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,T)}function x(S,b,T,P){let v=S.value,w=b+"_"+T;if(P[w]===void 0)return typeof v=="number"||typeof v=="boolean"?P[w]=v:ArrayBuffer.isView(v)?P[w]=v.slice():P[w]=v.clone(),!0;{let C=P[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return P[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(S){let b=S.uniforms,T=0,P=16;for(let w=0,C=b.length;w<C;w++){let L=Array.isArray(b[w])?b[w]:[b[w]];for(let F=0,H=L.length;F<H;F++){let N=L[F],z=Array.isArray(N.value)?N.value:[N.value];for(let j=0,J=z.length;j<J;j++){let ie=z[j],Z=p(ie),X=T%P,V=X%Z.boundary,he=X+V;T+=V,he!==0&&P-he<Z.storage&&(T+=P-he),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=Z.storage}}}let v=T%P;return v>0&&(T+=P-v),S.__size=T,S.__cache={},this}function p(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):He("WebGLRenderer: Unsupported uniform value type.",S),b}function M(S){let b=S.target;b.removeEventListener("dispose",M);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function _(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:_}}var iv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),In=null;function sv(){return In===null&&(In=new js(iv,16,16,li,sn),In.name="DFG_LUT",In.minFilter=Lt,In.magFilter=Lt,In.wrapS=An,In.wrapT=An,In.generateMipmaps=!1,In.needsUpdate=!0),In}var $o=class{constructor(e={}){let{canvas:t=Eu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Jt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([go,mo,po]),p=new Set([Jt,vn,xs,vs,ho,uo]),M=new Uint32Array(4),_=new Int32Array(4),S=new R,b=null,T=null,P=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,F=null,H=null,N=null,z=null;this._outputColorSpace=Et;let j=0,J=0,ie=null,Z=-1,X=null,V=new gt,he=new gt,le=null,qe=new Ne(0),Ve=0,Ge=t.width,Y=t.height,ee=1,fe=null,Be=null,Se=new gt(0,0,Ge,Y),Le=new gt(0,0,Ge,Y),rt=!1,ne=new ss,se=!1,ce=!1,oe=new lt,me=new R,ze=new gt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Xe(){return ie===null?ee:1}let U=n;function st(A,O){return t.getContext(A,O)}let Ye,E,y,B,q,D,Q,ae,k,$,ue,Pe,xe,ge,Ie,ke,Ee,I,pe,te,ve,be,re;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",dn,!1),U===null){let O="webgl2";if(U=st(O,A),U===null)throw st(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(A){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),We("WebGLRenderer: "+A.message),A}function Fe(){Ye=new u0(U),Ye.init(),ve=new Zx(U,Ye),E=new t0(U,Ye,e,ve),y=new Yx(U,Ye),E.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),H=U.createFramebuffer(),N=U.createFramebuffer(),z=U.createFramebuffer(),B=new p0(U),q=new Lx,D=new Jx(U,Ye,y,q,E,ve,B),Q=new h0(C),ae=new gp(U),be=new $g(U,ae),k=new d0(U,ae,B,be),$=new g0(U,k,ae,be,B),I=new m0(U,E,D),Ie=new n0(q),ue=new Nx(C,Q,Ye,E,be,Ie),Pe=new tv(C,q),xe=new Fx,ge=new Gx(Ye),Ee=new Qg(C,Q,y,$,g,c),ke=new Kx(C,$,E),re=new nv(U,B,E,y),pe=new e0(U,Ye,B),te=new f0(U,Ye,B),B.programs=ue.programs,C.capabilities=E,C.extensions=Ye,C.properties=q,C.renderLists=xe,C.shadowMap=ke,C.state=y,C.info=B}x!==Jt&&(w=new v0(x,t.width,t.height,o,s,r));let Ue=new kl(C,U);this.xr=Ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(Ge,Y,!1))},this.getSize=function(A){return A.set(Ge,Y)},this.setSize=function(A,O,K=!0){if(Ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=A,Y=O,t.width=Math.floor(A*ee),t.height=Math.floor(O*ee),K===!0&&(t.style.width=A+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(Ge*ee,Y*ee).floor()},this.setDrawingBufferSize=function(A,O,K){Ge=A,Y=O,ee=K,t.width=Math.floor(A*K),t.height=Math.floor(O*K),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(x===Jt){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,O,K,G){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,O,K,G),y.viewport(V.copy(Se).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(Le)},this.setScissor=function(A,O,K,G){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,O,K,G),y.scissor(he.copy(Le).multiplyScalar(ee).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(A){y.setScissorTest(rt=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,K=!0){let G=0;if(A){let W=!1;if(ie!==null){let Ae=ie.texture.format;W=m.has(Ae)}if(W){let Ae=ie.texture.type,we=p.has(Ae),Me=Ee.getClearColor(),Re=Ee.getClearAlpha(),De=Me.r,Je=Me.g,et=Me.b;we?(M[0]=De,M[1]=Je,M[2]=et,M[3]=Re,U.clearBufferuiv(U.COLOR,0,M)):(_[0]=De,_[1]=Je,_[2]=et,_[3]=Re,U.clearBufferiv(U.COLOR,0,_))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),Ee.dispose(),xe.dispose(),ge.dispose(),q.dispose(),Q.dispose(),$.dispose(),be.dispose(),re.dispose(),ue.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",eh),Ue.removeEventListener("sessionend",th),di.stop()};function pt(A){A.preventDefault(),gl("WebGLRenderer: Context Lost."),L=!0}function at(){gl("WebGLRenderer: Context Restored."),L=!1;let A=B.autoReset,O=ke.enabled,K=ke.autoUpdate,G=ke.needsUpdate,W=ke.type;Fe(),B.autoReset=A,ke.enabled=O,ke.autoUpdate=K,ke.needsUpdate=G,ke.type=W}function dn(A){We("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yn(A){let O=A.target;O.removeEventListener("dispose",yn),$d(O)}function $d(A){ef(A),q.remove(A)}function ef(A){let O=q.get(A).programs;O!==void 0&&(O.forEach(function(K){ue.releaseProgram(K)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,K,G,W,Ae){O===null&&(O=Oe);let we=W.isMesh&&W.matrixWorld.determinantAffine()<0,Me=sf(A,O,K,G,W);y.setMaterial(G,we);let Re=K.index,De=1;if(G.wireframe===!0){if(Re=k.getWireframeAttribute(K),Re===void 0)return;De=2}let Je=K.drawRange,et=K.attributes.position,Ce=Je.start*De,ot=(Je.start+Je.count)*De;Ae!==null&&(Ce=Math.max(Ce,Ae.start*De),ot=Math.min(ot,(Ae.start+Ae.count)*De)),Re!==null?(Ce=Math.max(Ce,0),ot=Math.min(ot,Re.count)):et!=null&&(Ce=Math.max(Ce,0),ot=Math.min(ot,et.count));let _t=ot-Ce;if(_t<0||_t===1/0)return;be.setup(W,G,Me,K,Re);let xt,ft=pe;if(Re!==null&&(xt=ae.get(Re),ft=te,ft.setIndex(xt)),W.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*Xe()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(W.isLine){let Vt=G.linewidth;Vt===void 0&&(Vt=1),y.setLineWidth(Vt*Xe()),W.isLineSegments?ft.setMode(U.LINES):W.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else W.isPoints?ft.setMode(U.POINTS):W.isSprite&&ft.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Vt=W._multiDrawStarts,_e=W._multiDrawCounts,Xt=W._multiDrawCount,it=Re?ae.get(Re).bytesPerElement:1,rn=q.get(G).currentProgram.getUniforms();for(let Sn=0;Sn<Xt;Sn++)rn.setValue(U,"_gl_DrawID",Sn),ft.render(Vt[Sn]/it,_e[Sn])}else if(W.isInstancedMesh)ft.renderInstances(Ce,_t,W.count);else if(K.isInstancedBufferGeometry){let Vt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_e=Math.min(K.instanceCount,Vt);ft.renderInstances(Ce,_t,_e)}else ft.render(Ce,_t)};function $l(A,O,K,G){F!==null&&A.isNodeMaterial&&F.setObject(G,A),se===!0&&Ie.setState(A,K,!1),A.transparent===!0&&A.side===Ft&&A.forceSinglePass===!1?(A.side=Ot,A.needsUpdate=!0,zr(A,O,G),A.side=ai,A.needsUpdate=!0,zr(A,O,G),A.side=Ft):zr(A,O,G)}this.compile=function(A,O,K=null){K===null&&(K=A),F!==null&&F.renderStart(A,O,K),T=ge.get(K),T.init(O),v.push(T),K.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),A!==K&&A.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ce=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,ce),se===!0&&Ie.setGlobalState(this.clippingPlanes,O),F!==null&&ke.render(T.state.shadowsArray,K,O);let G=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let we=0;we<Ae.length;we++){let Me=Ae[we];$l(Me,K,O,W),G.add(Me)}else $l(Ae,K,O,W),G.add(Ae)}),T=v.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(A,O,K=null){let G=this.compile(A,O,K);return new Promise(W=>{function Ae(){if(G.forEach(function(we){let Re=q.get(we).currentProgram;(Re===void 0||Re.isReady())&&G.delete(we)}),G.size===0){W(A);return}setTimeout(Ae,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let lc=null;function tf(A){lc&&lc(A)}function eh(){di.stop()}function th(){di.start()}let di=new ad;di.setAnimationLoop(tf),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(A){lc=A,Ue.setAnimationLoop(A),A===null?di.stop():di.start()},Ue.addEventListener("sessionstart",eh),Ue.addEventListener("sessionend",th),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(A,O);let K=Ue.enabled===!0&&Ue.isPresenting===!0,G=w!==null&&(ie===null||K)&&w.begin(C,ie);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(O),O=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,O,ie),T=ge.get(A,v.length),T.init(O),T.state.textureUnits=D.getTextureUnits(),v.push(T),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ne.setFromProjectionMatrix(oe,gn,O.reversedDepth),ce=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,ce),b=xe.get(A,P.length),b.init(),P.push(b),Ue.enabled===!0&&Ue.isPresenting===!0){let we=C.xr.getDepthSensingMesh();we!==null&&hc(we,O,-1/0,C.sortObjects)}hc(A,O,0,C.sortObjects),b.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(fe,Be),Te=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Te&&Ee.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ie.beginShadows();let W=T.state.shadowsArray;if(ke.render(W,A,O),se===!0&&Ie.endShadows(),(G&&w.hasRenderPass())===!1){let we=b.opaque,Me=b.transmissive;if(T.setupLights(),O.isArrayCamera){let Re=O.cameras;if(Me.length>0)for(let De=0,Je=Re.length;De<Je;De++){let et=Re[De];ih(we,Me,A,et)}Te&&Ee.render(A);for(let De=0,Je=Re.length;De<Je;De++){let et=Re[De];nh(b,A,et,et.viewport)}}else Me.length>0&&ih(we,Me,A,O),Te&&Ee.render(A),nh(b,A,O)}ie!==null&&J===0&&(D.updateMultisampleRenderTarget(ie),D.updateRenderTargetMipmap(ie)),G&&w.end(C),A.isScene===!0&&A.onAfterRender(C,A,O),be.resetDefaultState(),Z=-1,X=null,v.pop(),v.length>0?(T=v[v.length-1],D.setTextureUnits(T.state.textureUnits),se===!0&&Ie.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,F!==null&&F.renderEnd()};function hc(A,O,K,G){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ne)){G&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);let we=$.update(A),Me=A.material;Me.visible&&b.push(A,we,Me,K,ze.z,null,O)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ne))){let we=$.update(A),Me=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ze.copy(we.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Me)){let Re=we.groups;for(let De=0,Je=Re.length;De<Je;De++){let et=Re[De],Ce=Me[et.materialIndex];Ce&&Ce.visible&&b.push(A,we,Ce,K,ze.z,et,O)}}else Me.visible&&b.push(A,we,Me,K,ze.z,null,O)}}let Ae=A.children;for(let we=0,Me=Ae.length;we<Me;we++)hc(Ae[we],O,K,G)}function nh(A,O,K,G){let{opaque:W,transmissive:Ae,transparent:we}=A;T.setupLightsView(K),se===!0&&Ie.setGlobalState(C.clippingPlanes,K),G&&y.viewport(V.copy(G)),W.length>0&&Br(W,O,K),Ae.length>0&&Br(Ae,O,K),we.length>0&&Br(we,O,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ih(A,O,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Ce=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Yt(1,1,{generateMipmaps:!0,type:Ce?sn:Jt,minFilter:Cn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let Ae=T.state.transmissionRenderTarget[G.id],we=G.viewport||V;Ae.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);let Me=C.getRenderTarget(),Re=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(Ae),C.getClearColor(qe),Ve=C.getClearAlpha(),Ve<1&&C.setClearColor(16777215,.5),C.clear(),Te&&Ee.render(K);let Je=C.toneMapping;C.toneMapping=xn;let et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),se===!0&&Ie.setGlobalState(C.clippingPlanes,G),Br(A,K,G),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ot=0,_t=O.length;ot<_t;ot++){let xt=O[ot],{object:ft,geometry:Vt,material:_e,group:Xt}=xt;if(_e.side===Ft&&ft.layers.test(G.layers)){let it=_e.side;_e.side=Ot,_e.needsUpdate=!0,sh(ft,K,G,Vt,_e,Xt),_e.side=it,_e.needsUpdate=!0,Ce=!0}}Ce===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Me,Re,De),C.setClearColor(qe,Ve),et!==void 0&&(G.viewport=et),C.toneMapping=Je}function Br(A,O,K){let G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ae=A.length;W<Ae;W++){let we=A[W],{object:Me,geometry:Re,group:De}=we,Je=we.material;Je.allowOverride===!0&&G!==null&&(Je=G),Me.layers.test(K.layers)&&sh(Me,O,K,Re,Je,De)}}function sh(A,O,K,G,W,Ae){F!==null&&W.isNodeMaterial&&F.setObject(A,W),A.onBeforeRender(C,O,K,G,W,Ae),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,O,K,G,A,Ae),W.transparent===!0&&W.side===Ft&&W.forceSinglePass===!1?(W.side=Ot,W.needsUpdate=!0,C.renderBufferDirect(K,O,G,W,A,Ae),W.side=ai,W.needsUpdate=!0,C.renderBufferDirect(K,O,G,W,A,Ae),W.side=Ft):C.renderBufferDirect(K,O,G,W,A,Ae),A.onAfterRender(C,O,K,G,W,Ae)}function zr(A,O,K){O.isScene!==!0&&(O=Oe);let G=q.get(A),W=T.state.lights,Ae=T.state.shadowsArray,we=W.state.version,Me=ue.getParameters(A,W.state,Ae,O,K,T.state.lightProbeGridArray),Re=ue.getProgramCacheKey(Me),De=G.programs;G.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;G.envMap=Q.get(A.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",yn),De=new Map,G.programs=De);let et=De.get(Re);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===we)return ah(A,Me),et}else Me.uniforms=ue.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,K,Me),A.onBeforeCompile(Me,C),et=ue.acquireProgram(Me,Re),De.set(Re,et),G.uniforms=Me.uniforms;let Ce=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=Ie.uniform),ah(A,Me),G.needsLights=af(A),G.lightsStateVersion=we,G.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.sunLights.value=W.state.sun,Ce.sunLightShadows.value=W.state.sunShadow,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.sunShadowMatrix.value=W.state.sunShadowMatrix,Ce.sunShadowCascade.value=W.state.sunShadowCascade,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=et,G.uniformsList=null,et}function rh(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=As.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function ah(A,O){let K=q.get(A);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function nf(A,O){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let K=0,G=A.length;K<G;K++){let W=A[K];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function sf(A,O,K,G,W){O.isScene!==!0&&(O=Oe),D.resetTextureUnits();let Ae=O.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Me=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:tt.workingColorSpace,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=Q.get(G.envMap||we,Re),Je=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,et=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,_t=!!K.morphAttributes.color,xt=xn;G.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(xt=C.toneMapping);let ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Vt=ft!==void 0?ft.length:0,_e=q.get(G),Xt=T.state.lights;if(se===!0&&(ce===!0||A!==X)){let mt=A===X&&G.id===Z;Ie.setState(G,A,mt)}let it=!1;G.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Xt.state.version||_e.outputColorSpace!==Me||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==De||G.fog===!0&&_e.fog!==Ae||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ie.numPlanes||_e.numIntersection!==Ie.numIntersection)||_e.vertexAlphas!==Je||_e.vertexTangents!==et||_e.morphTargets!==Ce||_e.morphNormals!==ot||_e.morphColors!==_t||_e.toneMapping!==xt||_e.morphTargetsCount!==Vt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,_e.__version=G.version);let rn=_e.currentProgram;it===!0&&(rn=zr(G,O,W),F&&G.isNodeMaterial&&F.onUpdateProgram(G,rn,_e));let Sn=!1,Kn=!1,Ui=!1,ut=rn.getUniforms(),At=_e.uniforms;if(y.useProgram(rn.program)&&(Sn=!0,Kn=!0,Ui=!0),G.id!==Z&&(Z=G.id,Kn=!0),_e.needsLights){let mt=nf(T.state.lightProbeGridArray,W);_e.lightProbeGrid!==mt&&(_e.lightProbeGrid=mt,Kn=!0)}if(Sn||X!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",A.projectionMatrix),ut.setValue(U,"viewMatrix",A.matrixWorldInverse);let Jn=ut.map.cameraPosition;Jn!==void 0&&Jn.setValue(U,me.setFromMatrixPosition(A.matrixWorld)),E.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,Kn=!0,Ui=!0)}if(_e.needsLights&&(Xt.state.sunShadowMap.length>0&&ut.setValue(U,"sunShadowMap",Xt.state.sunShadowMap,D),Xt.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",Xt.state.directionalShadowMap,D),Xt.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",Xt.state.spotShadowMap,D),Xt.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",Xt.state.pointShadowMap,D)),W.isSkinnedMesh){ut.setOptional(U,W,"bindMatrix"),ut.setOptional(U,W,"bindMatrixInverse");let mt=W.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ut.setValue(U,"boneTexture",mt.boneTexture,D))}W.isBatchedMesh&&(ut.setOptional(U,W,"batchingTexture"),ut.setValue(U,"batchingTexture",W._matricesTexture,D),ut.setOptional(U,W,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",W._indirectTexture,D),ut.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",W._colorsTexture,D));let Yn=K.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&I.update(W,K,rn),(Kn||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,ut.setValue(U,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(At.envMapIntensity.value=O.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=sv()),Kn){if(ut.setValue(U,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&rf(At,Ui),Ae&&G.fog===!0&&Pe.refreshFogUniforms(At,Ae),Pe.refreshMaterialUniforms(At,G,ee,Y,T.state.transmissionRenderTarget[A.id]),_e.needsLights&&_e.lightProbeGrid){let mt=_e.lightProbeGrid;At.probesSH.value=mt.texture,At.probesMin.value.copy(mt.boundingBox.min),At.probesMax.value.copy(mt.boundingBox.max),At.probesResolution.value.copy(mt.resolution)}As.upload(U,rh(_e),At,D)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(As.upload(U,rh(_e),At,D),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(U,"center",W.center),ut.setValue(U,"modelViewMatrix",W.modelViewMatrix),ut.setValue(U,"normalMatrix",W.normalMatrix),ut.setValue(U,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let mt=G.uniformsGroups;for(let Jn=0,Di=mt.length;Jn<Di;Jn++){let ch=mt[Jn];re.update(ch,rn),re.bind(ch,rn)}}return rn}function rf(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function af(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(A,O,K){let G=q.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=O,q.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let K=q.get(A);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,K=0){ie=A,j=O,J=K;let G=null,W=!1,Ae=!1;if(A){let Me=q.get(A);if(Me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,Me.__webglFramebuffer),V.copy(A.viewport),he.copy(A.scissor),le=A.scissorTest,y.viewport(V),y.scissor(he),y.setScissorTest(le),Z=-1;return}else if(Me.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Me.__hasExternalTextures)D.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Je=A.depthTexture;if(Me.__boundDepthTexture!==Je){if(Je!==null&&q.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}let Re=A.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Ae=!0);let De=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[O])?G=De[O][K]:G=De[O],W=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?G=q.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[K]:G=De,V.copy(A.viewport),he.copy(A.scissor),le=A.scissorTest}else V.copy(Se).multiplyScalar(ee).floor(),he.copy(Le).multiplyScalar(ee).floor(),le=rt;if(K!==0&&(G=H),y.bindFramebuffer(U.FRAMEBUFFER,G)&&y.drawBuffers(A,G),y.viewport(V),y.scissor(he),y.setScissorTest(le),W){let Me=q.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,K)}else if(Ae){let Me=O;for(let Re=0;Re<A.textures.length;Re++){let De=q.get(A.textures[Re]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Re,De.__webglTexture,K,Me)}}else if(A!==null&&K!==0){let Me=q.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,K)}Z=-1};function oh(A){let O=q.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=E.textureFormatReadable(A.format),O.__typeReadable=E.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,K,G,W,Ae,we,Me=0){if(!(A&&A.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){y.bindFramebuffer(U.FRAMEBUFFER,Re);try{let De=A.textures[Me],Je=De.format,et=De.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ce=oh(De);if(Ce.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-G&&K>=0&&K<=A.height-W&&U.readPixels(O,K,G,W,ve.convert(Je),ve.convert(et),Ae)}finally{let De=ie!==null?q.get(ie).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,O,K,G,W,Ae,we,Me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(O>=0&&O<=A.width-G&&K>=0&&K<=A.height-W){y.bindFramebuffer(U.FRAMEBUFFER,Re);let De=A.textures[Me],Je=De.format,et=De.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ce=oh(De);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),U.readPixels(O,K,G,W,ve.convert(Je),ve.convert(et),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let _t=ie!==null?q.get(ie).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,_t);let xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ru(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ot),U.deleteSync(xt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,K=0){let G=Math.pow(2,-K),W=Math.floor(A.image.width*G),Ae=Math.floor(A.image.height*G),we=O!==null?O.x:0,Me=O!==null?O.y:0;D.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,we,Me,W,Ae),y.unbindTexture()},this.copyTextureToTexture=function(A,O,K=null,G=null,W=0,Ae=0){let we,Me,Re,De,Je,et,Ce,ot,_t,xt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(K!==null)we=K.max.x-K.min.x,Me=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,De=K.min.x,Je=K.min.y,et=K.isBox3?K.min.z:0;else{let At=Math.pow(2,-W);we=Math.floor(xt.width*At),Me=Math.floor(xt.height*At),A.isDataArrayTexture?Re=xt.depth:A.isData3DTexture?Re=Math.floor(xt.depth*At):Re=1,De=0,Je=0,et=0}G!==null?(Ce=G.x,ot=G.y,_t=G.z):(Ce=0,ot=0,_t=0);let ft=ve.convert(O.format),Vt=ve.convert(O.type),_e;O.isData3DTexture?(D.setTexture3D(O,0),_e=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),_e=U.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),_e=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Xt=y.getParameter(U.UNPACK_ROW_LENGTH),it=y.getParameter(U.UNPACK_IMAGE_HEIGHT),rn=y.getParameter(U.UNPACK_SKIP_PIXELS),Sn=y.getParameter(U.UNPACK_SKIP_ROWS),Kn=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,De),y.pixelStorei(U.UNPACK_SKIP_ROWS,Je),y.pixelStorei(U.UNPACK_SKIP_IMAGES,et);let Ui=A.isDataArrayTexture||A.isData3DTexture,ut=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let At=q.get(A),Yn=q.get(O),mt=q.get(At.__renderTarget),Jn=q.get(Yn.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Di=0;Di<Re;Di++)Ui&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(A).__webglTexture,W,et+Di),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(O).__webglTexture,Ae,_t+Di)),U.blitFramebuffer(De,Je,we,Me,Ce,ot,we,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||q.has(A)){let At=q.get(A),Yn=q.get(O);y.bindFramebuffer(U.READ_FRAMEBUFFER,N),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let mt=0;mt<Re;mt++)Ui?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,W,et+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,W),ut?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yn.__webglTexture,Ae,_t+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yn.__webglTexture,Ae),W!==0?U.blitFramebuffer(De,Je,we,Me,Ce,ot,we,Me,U.COLOR_BUFFER_BIT,U.NEAREST):ut?U.copyTexSubImage3D(_e,Ae,Ce,ot,_t+mt,De,Je,we,Me):U.copyTexSubImage2D(_e,Ae,Ce,ot,De,Je,we,Me);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ut?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(_e,Ae,Ce,ot,_t,we,Me,Re,ft,Vt,xt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(_e,Ae,Ce,ot,_t,we,Me,Re,ft,xt.data):U.texSubImage3D(_e,Ae,Ce,ot,_t,we,Me,Re,ft,Vt,xt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,Ce,ot,we,Me,ft,Vt,xt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,Ce,ot,xt.width,xt.height,ft,xt.data):U.texSubImage2D(U.TEXTURE_2D,Ae,Ce,ot,we,Me,ft,Vt,xt);y.pixelStorei(U.UNPACK_ROW_LENGTH,Xt),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),y.pixelStorei(U.UNPACK_SKIP_PIXELS,rn),y.pixelStorei(U.UNPACK_SKIP_ROWS,Sn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Kn),Ae===0&&O.generateMipmaps&&U.generateMipmap(_e),y.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){j=0,J=0,ie=null,y.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var Gl=`
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float n21(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
float fbm2(vec2 p){ float v=0., a=.5; mat2 m=mat2(1.6,1.2,-1.2,1.6); for(int i=0;i<5;i++){ v+=a*n21(p); p=m*p; a*=.5; } return v; }
`,fd="attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }",pd=`
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uVel;
uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform float uStars; uniform float uHorizon; uniform float uLevel; uniform float uDawn;
${Gl}
void main(){
  vec2 uv = (gl_FragCoord.xy - .5*uRes)/uRes.y;
  float T = uTime;
  float hz = uHorizon;                                   // altura do horizonte na tela
  float up = uv.y - hz;
  vec3 col = mix(uB, uA, smoothstep(-.05, .75, up));
  // brilho no horizonte
  col += uC * exp(-abs(up)*7.) * (.18 + uDawn*.9);
  col = mix(col, uB*.55, smoothstep(.0, -.4, up));     // abaixo do horizonte (atr\xE1s do mar)
  // nuvens finas
  vec2 cp = vec2(uv.x*.9 + T*.006, up*3.2);
  float cl = fbm2(cp*2. + fbm2(cp*3. - T*.01));
  col = mix(col, uC*.6 + uB*.4, smoothstep(.55, .85, cl) * .22 * smoothstep(-.02, .2, up));
  // estrelas
  vec2 sg = gl_FragCoord.xy/2.2;
  float st = h21(floor(sg));
  float tw = .55 + .45*sin(T*2. + st*60.);
  float star = step(.9965, st) * tw * smoothstep(.02, .25, up) * uStars;
  col += vec3(.95,.97,1.) * star;
  // oscilosc\xF3pio: a linha do sinal, mexe com o som e com o cursor
  vec2 m = (uMouse - .5*uRes)/uRes.y;
  float wave = sin(uv.x*14. + T*1.6)*.006 + sin(uv.x*41. - T*3.1)*.003*(1.+uLevel*4.) + sin(uv.x*90. + T*7.)*.0015*uLevel*6.;
  wave += exp(-pow((uv.x - m.x)*5., 2.))*.03*sin(uv.x*60. - T*8.);
  float line = exp(-abs(up - .002 - wave)*900.);
  col += uC * line * (.35 + uLevel*.8);
  // um halo leve onde est\xE1 o cursor
  col += uC * exp(-length(uv - m)*7.) * .05;
  vec2 e = gl_FragCoord.xy/uRes - .5;
  col *= 1. - dot(e,e)*.9;
  col += (h21(gl_FragCoord.xy + fract(uTime)*91.) - .5)*.035;
  gl_FragColor = vec4(clamp(col, 0., 1.), 1.);
}`,md="varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",gd=`
precision highp float;
varying vec3 vDir; uniform float uTime; uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform vec3 uSunDir;
${Gl}
void main(){
  vec3 d = normalize(vDir);
  float v = d.y;
  vec3 col = mix(uB*1.4, uA, smoothstep(-.1, .7, v));
  col = mix(col, uB*.4, smoothstep(0., -.5, v));
  col += uC * exp(-abs(v)*10.) * .8;                       // linha do horizonte
  float s = max(0., dot(d, normalize(uSunDir)));
  col += uC * (pow(s, 400.)*14. + pow(s, 12.)*.6);          // lua / sol
  float u = atan(d.z, d.x);
  col += vec3(1.) * smoothstep(.1,.0, abs(v - .35)) * smoothstep(.5,.2, abs(u + 1.4)) * .9;   // softbox
  gl_FragColor = vec4(pow(col, vec3(2.2)), 1.);
}`,xd=`
uniform float uTime; uniform float uCamZ; uniform vec4 uRip[4]; uniform vec3 uHover; uniform float uLevel; uniform float uScale; uniform float uMoonX;
varying float vB; varying float vD;
float wave(vec2 p){
  float h = sin(p.x*.32 + uTime*.7)*.28 + sin(p.y*.45 - uTime*.9 + p.x*.12)*.32 + sin((p.x+p.y)*.9 + uTime*1.4)*.08;
  h += sin(p.x*1.6 - uTime*2.2)*.03*(1. + uLevel*6.);
  return h;
}
void main(){
  vec3 p = position;
  p.z += floor(uCamZ / .4) * .4;                  // a grade acompanha a c\xE2mera em passos (sem tremer)
  float h = wave(p.xz);
  // ondula\xE7\xF5es dos cliques
  for (int i = 0; i < 4; i++) {
    vec4 r = uRip[i];
    float age = uTime - r.w;
    if (age > 0. && age < 6.) {
      float d = length(p.xz - r.xy);
      float ring = sin((d - age*4.)*2.2) * exp(-abs(d - age*4.)*.8) * exp(-age*.6);
      h += ring * .7 * r.z;
    }
  }
  // o cursor afunda a \xE1gua
  float hd = length(p.xz - uHover.xy);
  h -= exp(-hd*hd*.25) * .5 * uHover.z;
  p.y += h;
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  float dist = -mv.z;
  vD = dist;
  // brilho: cristas + caminho da lua
  float crest = smoothstep(.1, .6, h);
  float path = exp(-pow(p.x - uMoonX * dist * .06, 2.) * .08) * smoothstep(8., 40., dist);
  vB = .42 + crest*.75 + path*.9*(.5 + .5*sin(uTime*3. + p.x*3. + p.z*2.));
  gl_PointSize = max(1., uScale * (1. + crest) / dist);
  gl_Position = projectionMatrix * mv;
}`,vd=`
uniform vec3 uColor; uniform vec3 uGlow; uniform float uFar;
varying float vB; varying float vD;
void main(){
  vec2 c = gl_PointCoord - .5; float r = length(c);
  float a = smoothstep(.5, .1, r) * smoothstep(uFar, uFar*.35, vD) * smoothstep(1.5, 4., vD);
  gl_FragColor = vec4(mix(uColor, uGlow, clamp(vB - .4, 0., 1.)) * vB, a * clamp(vB, .25, 1.));
}`,Wl="varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",ql=`
uniform float uDawn; uniform float uTime; varying vec3 vN; varying vec3 vP;
${Gl}
void main(){
  vec3 n = normalize(vP);
  float cr = fbm2(n.xy*3.2 + n.z*2.) ;
  vec3 moon = vec3(.94,.92,.86) * (.78 + .3*cr) - vec3(.12)*smoothstep(.55,.7, fbm2(n.xy*7.));
  float rim = pow(1. - max(0., vN.z), 2.);
  moon *= 1. - rim*.4;
  vec3 sun = mix(vec3(1.,.55,.25), vec3(1.,.92,.7), 1. - rim) * 1.6;
  vec3 col = mix(moon, sun, uDawn);
  gl_FragColor = vec4(col, 1.);
}`,yd=`
uniform vec3 uColor; uniform float uAmt; varying vec2 vUv;
void main(){ float d = length(vUv - .5)*2.; float a = exp(-d*d*4.) * uAmt; gl_FragColor = vec4(uColor*a, a); }`,Sd="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }";var Ur=new R;function hn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ur.copy(e),Ur[n]=0,Ur.normalize();let l=.5*a/(a+o),h=1-Ur.angleTo(i)/c;return Math.sign(Ur[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Dr=class i extends on{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new R,l=new R,h=new R(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new R,m=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[M+0]=hn(x,l,"z","y",r,n),f[M+1]=1-hn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[M+0]=1-hn(x,l,"z","y",r,n),f[M+1]=1-hn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[M+0]=1-hn(x,l,"x","z",r,e),f[M+1]=hn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[M+0]=1-hn(x,l,"x","z",r,e),f[M+1]=1-hn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[M+0]=1-hn(x,l,"x","y",r,e),f[M+1]=1-hn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[M+0]=hn(x,l,"x","y",r,e),f[M+1]=1-hn(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Md=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},Tt={chrome:(i=16777215,e={})=>new Gn({color:i,metalness:1,roughness:.1,iridescence:.7,iridescenceIOR:1.5,envMapIntensity:1.5,...e}),candy:(i,e={})=>new Gn({color:i,metalness:0,roughness:.25,clearcoat:1,clearcoatRoughness:.05,...e}),glass:(i=16777215,e={})=>new Gn({color:i,metalness:0,roughness:.04,transmission:1,thickness:.6,ior:1.45,iridescence:.5,envMapIntensity:1.4,transparent:!0,...e}),matte:(i,e={})=>new wi({color:i,roughness:.7,metalness:.05,...e})};function nc({n:i=280,len:e=34,width:t=.42,mat:n}){let s=new yt,r=new Float32Array((i+1)*2*3),a=new Float32Array((i+1)*2*2),o=[];for(let x=0;x<=i;x++)if(a.set([x/i,0,x/i,1],x*4),x<i){let m=x*2;o.push(m,m+1,m+2,m+1,m+3,m+2)}s.setAttribute("position",new Dt(r,3)),s.setAttribute("uv",new Dt(a,2)),s.setIndex(o);let c=new Ke(s,n);c.frustumCulled=!1;let l=new R,h=new R,d=new R,u=new R,f=(x,m,p,M,_)=>{let S=Math.exp(-Math.pow(x/(e*.42),4));return l.set(x,(Math.sin(x*.38+m*1.1+_)*1.25+Math.sin(x*1.25-m*1.9+_*2)*.35*(1+M*2.5)+Math.sin(x*3.1+m*3)*.08*M*4)*S*p,Math.sin(x*.21+m*.4+_)*1.4)};function g(x,{amp:m=1,lvl:p=0,phase:M=0}={}){for(let _=0;_<=i;_++){let S=(_/i-.5)*e,b=f(S,x,m,p,M).clone(),T=f(S+.05,x,m,p,M);h.copy(T).sub(b).normalize();let P=S*.22+x*.6+M;u.set(0,Math.cos(P),Math.sin(P)),d.crossVectors(h,u).normalize().cross(h).normalize();let v=t*(.35+.65*Math.exp(-Math.pow(S/(e*.35),2)));r.set([b.x+d.x*v,b.y+d.y*v,b.z+d.z*v,b.x-d.x*v,b.y-d.y*v,b.z-d.z*v],_*6)}s.attributes.position.needsUpdate=!0,s.computeVertexNormals()}return{mesh:c,update:g}}function Ad(i=7){let e=new bt,t=[];for(let o=0;o<i;o++){let c=new Ke(new _i(1,.018,8,160),new jt({color:9430015,transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1,blending:Wn}));e.add(c),t.push({m:c,age:o/i*6})}let n=new Ke(new Hn(.42,48,24),Tt.chrome(16777215,{iridescence:1}));e.add(n);let s=[];function r(){s.push({age:0})}function a(o,c,l=0){for(t.forEach(d=>{d.age=(d.age+o*(1+l))%6;let u=d.age/6;d.m.scale.setScalar(.6+u*9),d.m.material.opacity=(1-u)*.75,d.m.rotation.set(Math.PI/2+Math.sin(c*.3)*.15,0,0)});s.length&&s[0].age>2.4;)s.shift();s.forEach((d,u)=>{d.age+=o});let h=s.reduce((d,u)=>d+Math.max(0,1-u.age/2.4),0);n.scale.setScalar(1+Math.sin(c*2)*.04+h*.25+l*.3),n.rotation.y=c*.4}return{group:e,update:a,pulse:r}}function Xl(i,{w:e=3.4,h:t=2.125}={}){let n=new bt,s=new Ke(new Dr(e+.16,t+.16,.1,4,.06),Tt.chrome(10133680,{roughness:.18,iridescence:.3}));n.add(s);let r=new jt({map:i,toneMapped:!1}),a=new Ke(new tn(e,t),r);a.position.z=.052,n.add(a);let o=new Ke(new tn(e,t),Tt.candy(1118481));return o.position.z=-.052,o.rotation.y=Math.PI,n.add(o),{group:n,face:a,frame:s}}function bd(i,e="#ffd08a"){let t=Md(i),n=1024,s=680,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d");a.fillStyle="#f4f1ea",a.fillRect(0,0,n,s),a.fillStyle="#e3ddd1",a.fillRect(0,0,n,46),["#ff5f57","#febc2e","#28c840"].forEach((h,d)=>{a.fillStyle=h,a.beginPath(),a.arc(26+d*24,23,7,0,7),a.fill()}),a.fillStyle="#fff",a.fillRect(120,12,520,22),a.fillStyle="#9a9384",a.font="15px monospace",a.fillText("https://ccdensino.com.br/",132,28),a.fillStyle="#0f2a44",a.fillRect(0,46,n,70),a.fillStyle="#fff",a.fillRect(40,70,120,22);for(let h=0;h<5;h++)a.fillStyle="rgba(255,255,255,.7)",a.fillRect(420+h*96,76,70,10);a.fillStyle=e,a.fillRect(n-150,66,110,30);let o=a.createLinearGradient(0,116,n,360);o.addColorStop(0,"#173b5e"),o.addColorStop(1,"#2f6f8f"),a.fillStyle=o,a.fillRect(0,116,n,250),a.fillStyle="#fff",a.fillRect(60,170,420,34),a.fillRect(60,214,340,34),a.fillStyle="rgba(255,255,255,.6)",a.fillRect(60,268,380,10),a.fillRect(60,286,300,10),a.fillStyle=e,a.fillRect(60,312,150,34),a.fillStyle="rgba(255,255,255,.15)",a.beginPath(),a.arc(780,240,110,0,7),a.fill();for(let h=0;h<4;h++){let d=40+h*240;a.fillStyle="#fff",a.fillRect(d,396,220,240),a.fillStyle=["#d8e6ef","#efe2d0","#dfefe2","#ece0ef"][(h+(t()*4|0))%4],a.fillRect(d,396,220,110),a.fillStyle="#1b2733",a.fillRect(d+16,524,150,14),a.fillStyle="#a7a7a7",a.fillRect(d+16,548,180,8),a.fillRect(d+16,562,140,8),a.fillStyle="#0f2a44",a.fillRect(d+16,590,100,26)}let c=new Mi(r);c.colorSpace=Et,c.anisotropy=4;let l=Xl(c,{w:3.6,h:2.39});return l.frame.material=Tt.candy(15328474,{roughness:.35}),l}function Td(){let i=new bt,t=[16735007,12035839,15722970].map((x,m)=>{let p=new Ke(new _i(1.6-m*.32,.09,24,160),Tt.chrome(x,{iridescence:.9}));return i.add(p),p}),n=new Ke(new dr(.42,0),Tt.chrome(16777215,{iridescence:1,roughness:.05}));i.add(n);let s=new bt,r=new bi,a=1.3,o=.62,c=.2;r.moveTo(-a/2+c,-o/2),r.lineTo(-a/2+.5,-o/2),r.lineTo(-a/2+.3,-o/2-.28),r.lineTo(-a/2+.75,-o/2),r.lineTo(a/2-c,-o/2),r.quadraticCurveTo(a/2,-o/2,a/2,-o/2+c),r.lineTo(a/2,o/2-c),r.quadraticCurveTo(a/2,o/2,a/2-c,o/2),r.lineTo(-a/2+c,o/2),r.quadraticCurveTo(-a/2,o/2,-a/2,o/2-c),r.lineTo(-a/2,-o/2+c),r.quadraticCurveTo(-a/2,-o/2,-a/2+c,-o/2);let l=new Ke(new ls(r,{depth:.14,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:4}),Tt.candy(5793266));s.add(l);let h=document.createElement("canvas");h.width=256,h.height=128;let d=h.getContext("2d");d.fillStyle="#fff",d.font="bold 54px monospace",d.textAlign="center",d.textBaseline="middle",d.fillText("/play",128,66);let u=new Mi(h);u.colorSpace=Et;let f=new Ke(new tn(1.1,.55),new jt({map:u,transparent:!0,toneMapped:!1}));f.position.z=.2,s.add(f),s.position.set(-1.9,1.7,.3),s.scale.setScalar(.9),i.add(s);function g(x,m=0){t[0].rotation.set(x*.6+m,x*.2,0),t[1].rotation.set(0,x*.8+m*1.3,x*.3),t[2].rotation.set(x*.5,0,x*.9+m),n.rotation.set(x*.7,x,0),s.position.y=1.6+Math.sin(x*1.6)*.12,s.rotation.y=Math.sin(x*.8)*.3}return{group:i,update:g,pick:[...t,n,l]}}function _d(){let i=new bt,e=Md(19),t=new on(.32,.32,.32),n=Tt.candy(8257464),s=Tt.candy(15722970),r=Tt.chrome(8257464,{iridescence:.4}),a=(M,_)=>{let S=new bt;for(let b=0;b<4;b++)for(let T=0;T<4;T++)for(let P=0;P<4;P++){if(e()<.22&&T>0)continue;let v=new Ke(t,T===3?n:_);v.position.set((b-1.5)*.34,(T-1.5)*.34,(P-1.5)*.34),S.add(v)}return S.position.x=M,i.add(S),S},o=a(-2.4,s),c=a(2.4,Tt.candy(3832410)),l=new Ai([new R(-2.1,.2,0),new R(-1,1.4,.6),new R(1,1.4,-.6),new R(2.1,.2,0)]),h=new Ai([new R(2.1,-.2,0),new R(1,-1.3,.7),new R(-1,-1.3,-.5),new R(-2.1,-.2,0)]),d=26,u=new Ys(new on(.14,.14,.14),r,d*2);i.add(u);let f=new Ke(new hs(l,64,.012,6),new jt({color:8257464,transparent:!0,opacity:.35,toneMapped:!1})),g=new Ke(new hs(h,64,.012,6),new jt({color:15722970,transparent:!0,opacity:.25,toneMapped:!1}));i.add(f,g);let x=new Pt,m=new R;function p(M,_=1){for(let S=0;S<d*2;S++){let b=S>=d,T=(S%d/d+M*.12*_*(b?.8:1))%1;(b?h:l).getPointAt(T,m),x.position.copy(m),x.rotation.set(M*2+S,M*3+S,0),x.scale.setScalar(Math.sin(T*Math.PI)*1.2+.1),x.updateMatrix(),u.setMatrixAt(S,x.matrix)}u.instanceMatrix.needsUpdate=!0,o.rotation.y=M*.3,c.rotation.y=-M*.25,o.position.y=Math.sin(M)*.1,c.position.y=Math.cos(M)*.1}return{group:i,update:p,pick:[...o.children,...c.children]}}function wd(){let i=new bt,e=document.createElement("canvas");e.width=1024,e.height=640;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,1024,640);n.addColorStop(0,"#1a1f2e"),n.addColorStop(.6,"#2c2340"),n.addColorStop(1,"#4a3a1a"),t.fillStyle=n,t.fillRect(0,0,1024,640),t.fillStyle="rgba(255,211,106,.12)";for(let d=0;d<12;d++)t.beginPath(),t.arc(860,120,60+d*34,0,7),t.lineWidth=2,t.strokeStyle="rgba(255,211,106,.12)",t.stroke();t.fillStyle="#ffd36a",t.font="900 72px sans-serif",t.fillText("FinPay",70,130);let s=t.createLinearGradient(70,230,230,350);s.addColorStop(0,"#f3d38a"),s.addColorStop(1,"#a8823a"),t.fillStyle=s,t.fillRect(70,230,150,112),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=3;for(let d=0;d<3;d++)t.beginPath(),t.moveTo(70,262+d*26),t.lineTo(220,262+d*26),t.stroke();t.fillStyle="#efe9da",t.font="48px monospace",t.fillText("5731  \u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  2026",70,470),t.font="28px monospace",t.fillStyle="rgba(239,233,218,.7)",t.fillText("ENZO B. SIM\xD5ES",70,560),t.fillText("ARGON2ID",760,560);let r=new Mi(e);r.colorSpace=Et,r.anisotropy=4;let a=new Ke(new Dr(3.4,2.12,.06,4,.14),[Tt.candy(2892608),Tt.candy(2892608),Tt.candy(2892608),Tt.candy(2892608),new Gn({map:r,roughness:.25,clearcoat:1,iridescence:.6,metalness:.2}),Tt.candy(1711918)]);i.add(a);let o=new $s(.34,.34,.07,48),c=Tt.chrome(16765802,{iridescence:.2,roughness:.2}),l=[];for(let d=0;d<9;d++){let u=new Ke(o,c);i.add(u),l.push({m:u,ph:d*.7,r:1.6+d%3*.5})}function h(d,u=0){a.rotation.set(-.25+Math.sin(d*.5)*.1,Math.sin(d*.4)*.5+u,Math.sin(d*.3)*.06),l.forEach((f,g)=>{let x=d*.6+f.ph;f.m.position.set(Math.cos(x)*f.r*1.2,Math.sin(x*1.3)*.9-.2,Math.sin(x)*f.r*.6),f.m.rotation.set(Math.PI/2+d*2+g,d*1.5,0)})}return{group:i,update:h,pick:[a,...l.map(d=>d.m)]}}function Ed(){let i=new bt,e=[],t=(u,f)=>e.push(new de(u,f));t(0,-.9),t(1.15,-.9),t(1.2,-.8),t(1.2,-.5),t(1.28,-.48),t(1.28,-.3),t(1.2,-.28);for(let u=0;u<14;u++)t(1.24,-.2+u*.07),t(1.3,-.17+u*.07);t(1.2,.82),t(1.25,.95),t(1.08,1.05),t(.95,1.02);let n=new Ke(new ur(e,96),new Gn({color:10132648,roughness:.22,metalness:.9,clearcoat:.6,envMapIntensity:1.8}));n.rotation.x=Math.PI/2,i.add(n);let s=new Ke(new _i(1.22,.03,8,96),new jt({color:16726634,toneMapped:!1}));s.position.z=.7,i.add(s);let r=new Ke(new Hn(1,64,32,0,Math.PI*2,0,Math.PI*.32),Tt.chrome(1053720,{metalness:.2,roughness:.02,iridescence:1,iridescenceIOR:1.8,envMapIntensity:2.5}));r.rotation.x=Math.PI/2,r.position.z=.3,r.scale.set(1,.5,1),i.add(r);let a=new bt;a.position.z=.86,i.add(a);let o=new bi;o.moveTo(0,-.12),o.quadraticCurveTo(.5,-.2,.95,-.05),o.lineTo(.95,.32),o.quadraticCurveTo(.45,.2,0,.12),o.lineTo(0,-.12);let c=new ls(o,{depth:.012,bevelEnabled:!1}),l=new wi({color:2763316,roughness:.25,metalness:.9,side:Ft,envMapIntensity:1.6}),h=[];for(let u=0;u<7;u++){let f=new bt;f.rotation.z=u/7*Math.PI*2;let g=new Ke(c,l);g.position.z=u*.003,f.add(g),a.add(f),h.push(g)}function d(u,f=.5){i.rotation.set(Math.sin(u*.4)*.2-.1,.45+Math.sin(u*.3)*.25,0);let g=.12+f*.62;h.forEach(x=>{x.position.x=g,x.rotation.z=.55,x.scale.set(Math.max(.2,1.1-g),1,1)}),s.rotation.z=u}return{group:i,update:d,pick:[n,r]}}function jl(i=16735007){let e=new bt,t=new rs(new as(new on(2,2,2)),new Si({color:i,transparent:!0,opacity:.9,toneMapped:!1})),n=new rs(new as(new hr(.8,0)),new Si({color:15722970,transparent:!0,opacity:.5})),s=new Ke(new tn(2.6,2.6),new jt({color:i,transparent:!0,opacity:.12,side:Ft,blending:Wn,depthWrite:!1,toneMapped:!1}));s.rotation.x=Math.PI/2,e.add(t,n,s);function r(a,o=0){t.rotation.set(a*.3+o,a*.4,0),n.rotation.set(-a*.5,a*.2+o,a*.1),s.position.y=Math.sin(a*1.4+o)*1.1}return{group:e,update:r}}var Pd="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBUODAsLDBkSEw8VHhsgHx4bHR0hJTApISMtJB0dKjkqLTEzNjY2ICg7Pzo0PjA1NjP/2wBDAQkJCQwLDBgODhgzIh0iMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP/wAARCAFAAgADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCO6TK5xVAjH9K2WQPFxWa/7tmwAc+vavlVa57NFvlsMtkV5gDG8gVWcon3nCgnA9zivRtP8M6H4q8KW93p1u1m8yBkkMYJB7gjuM+9edid0YOmAQcjFbvh3U/7OYx28Uk1luWZ7MNl1cZyU6cHJP8APtXtZa8O4um7c97q/VdtTgzFVYP2rvypdOjvvp/WhDP4F1aESRSoizRngMwCS+6E/wAjiufe2ns5Wt7mJ4pUPzJINrD8K9Ht57bUF+wag2UjRhC5jyfnO4Pk9GHTB/A81uz6PpmrWaWt0FuIkUCKVRtli47eo/P6UsVhYTk+Rcr7dP69NuyJweYtRtKXNHv1PHwOBSBfmxiul1/wld6EfORhc2JOFnTt7MOx/SsJVw2a8epCVOXLJWZ7VOpGa5ou41gOBiopUJAA6Z5q2wyfwqFlBZsVmmaIiWNS2cdKlAx1pAvzcdKVuJUx0NWnoO2pas+GxjFbkYHlLgVhWvyyjmuhh2mJckcdawvaVzkxcW42QhBRM81XClmzV0gSp8v5VVmlW3HYt6eldNGtGEW+p49bC1KtRQRIAsa7m/L1qnLKWY9s8UwyNIckk5pyofWuWc3N3Z7GHw0aMbIkgjDMABVx/kAVegot49kZcilxuJNdGEp3bmzzM1xG1KIwLTwPapPLwue1KkeWwK65TW55UYO9hoTPbFPWLB6VP5fGKUIQOlcjrNndHDpWIiuPWm7c1Mw49qAvFKL0uOa1sMWPJ+7U20IvQ59KaYBIy5yNpOPyxUf9mrt2mWQqF28nk8561nPllvK3yOmhHl1sSCLnc4yewpwYeuffFQta5k4cj5t/TpwBj9KYtkRCYxKxUrt5GT35/WsbQWil+B1pSlqy3leBkHNRyR8nI/KmxW5SR23sdxBwei/SoWs9q7BK7DaVywBIz/8ArrWglKXxHNi+WEbCEZOAPoKeiBKj+xkknzWHzBsD2qYrXfKzVkzx0uV8wxmPbNRMMn1qbbmnrbse1OLhTV2RJVKzsiqBgYIpRk9Aat+WimlEZx0wPesZ4yGyR008vq2vJ2KvlMfanCE+hP4VZ+Vfcj2oJZulZuvOWysjVYalHd3ZCYgp5xmlVU28jNKxRCAxLH060AbhnZgepNYuom97nVGhNK9rLzGFQajKVMzRIuWI496qS6hbR+h+ldNGjVqfDFs4sRXoU/jmhWXnpTGTsMZ+tVpNVjJwEPtxVZtS5/1f616tLL8Q1qrHj1cxoJ+67l5lIXoDj3qMlh/BxUMeoRH7yEe4qdbq0kGPM25pyoVae8GyI4inU2nb+vQjJB4KVBJHGeSh+oq78h+5KrfjSMrD+H8qcJuL0JnT51r+RjylFOFP51Tllfna1bc8aFTlecelZc0IPKr/APXr18NVUlseXUhySsUvMkbqc/WnxeW/ysdp9e1PaNgSMVGyGutpPYi6ZI0Mie49ahbIPI596kiuXjAUgFRU/nRsPw7isnzxequa8kLX5vwKL8jNQjOTV13UTeYqj6etNMxI2mNemKtN9ioqGvvfgVDtqNiCMfzq8ZyX3bE65xVGQEEnHWqgm90U4wT92VyHPP8A9elCjII9afHIEG3bn5wwJ4xipY5SrltoJII+uauaa2RpaOmpX2lh7VGVIGMnirjszkZA4AFQyDJwDyazTZmnrY6q2bKlao3ibX9qvW4IcVHqKDANfAXP0eGlQy+gxSxuUcMrFWHQg4IpTjbuzSBe/aruddjotP8AEhjUR3Q5X7s6rnH1XuKmtNf/ALNDNfWbi0lkLGW1DSw5J7c5T3HT6VzBHtVq0uri0JkglaNj1weD9R0Nd+Gx6ppxqx5k/Oz+T/zTPKxWUwqe9SfK/wAPu/r0O6kkuL+1mjtdRha1lT93N5oY+6sv8Q9+orz2JyHkhMscrQsVZ06GtPUL9dW01rSeBYHJyLi0Iif3zx0Pesuw06GwtzFEWOW3MznJY+9deJxmFrYJpu87qytt3bl5rp31sYYHA4qhibyfu9fP/KzLQGeo5NR5G5sVKQEXPpUSjGTivAPeSGkc9PakKn5D2BqQLnmnD72AapModEMOMdvStZZCEwOtZca45Hf0q2rkjjrWUtWRKNydrpo1OCc1TZmkck8k1M6HaDg8UscXOf51OiCKSHRpgc1Yhj8yQADjoKaFJOB0rRtIvLjMnr0pK8nZGdaoqcHJhIMYRe1CLS7MtmpkXHNeo7U6aij5ROVaq5saVHT86lijyeaUJnFSqf3mxeR3riq1bRsejh6HNK42QqnzEfQURP5nB/DFQXBLS4B4FTQIQu6uXmcmel7KMKbbEK9qAP8A69SEck4pQuetdN9DzGrsRV5+tOblsY4pcbRQFx8ueT1rGTsrnRTTk+VDIlLMT+tSkYGAMmnHbGMDrURLMfbNZxpOWvQ1qYiMXZDSQq4ByT1qPZzyetTbBjmmkV2U0oqyPPrSc3zSIsZJ4pfKzyeOOtS4Ea7m/AVAzPI+1ASaipiOV2ib0MF7Vc09gZ0jHyjJ+lMVnfndhe5NSi2I5fkmneVn8P0rOMHN3mzedaFFctGN2NQLEDk5P0pN2c8Yp4hLHgj8TTvJCdWz9K3iqUdmcVSdebvJWI8Z9aHGFwGxxzT2O3oMD3qq8ij7zflWsMO6r8jCeLWHV+ohdI/uj8TVG4vwnGcmrZcOMrEze+KrSQCXINsx9yMV6+Ew9Gk/eieFjcZXr6qf5mRLcvKepqA9TnNbP9nKx/1TilOlf3U/OvYWLoQVr2PH+r1pa8rZiGkxk4HStr+y5f7i0v8AZkvX5R9Kf16h/MhrCYj+R/cYyxMTwORUyWwx8+a0Tp03bB/GmGynHGDR9bpS2khewqx3gykYUHQEH60ASLzHK4PpmrRtZB/CTTHhdCSY249Kr2kJaXTFyzjraxX+1zqcMAw6cio3nRskoVPcAVO+1hlh+PpTPJVgeciqjThF3SsNzk9G7lAsc9TTCT2FX3tVPQ4qFrboAwrZSiTsUmXPUUzaR0//AF1oJCVJ3Lu9x2oaBM5K4/Gn7VIfPYzjux0qLn1NX5YQv09agMQbjpVxmmaKRW3kdBRw454NPZeQDTNpHTOauyL0GGL2z6UFCq8VJtPUjGO9KMEfNUNsOZkIz0OadEo+0x8d81JsBwegqS1j86f2ArKpJKLZUXd6HQpHtfGOaW7V/LcJEJCVGcjoM1bSLe4xncTgADqa66DwPDNApvbqdZGX5khIUD2zzmvhKNGdR+6j9E9rFNNnnBaffMTbRkkPlMD5emcU9Ema6mItl3bTmP8Au8DJ/lXqFv4I0O3dnMEszMMMZZmOfyxWmmiaXEcpp9sDjGfLGT+Ndqwc3uy3jIdEeIEA/wAQqxBayythY3IHXCk4r21NPso23R2dup9ViUf0qyBjpx9KFgH1l+Anju0Tw+azmUjMMg7k7DxURGzrxXuuajaCFzloo2PqUBpPL/734Asd3ieFthjgEfnQ2MdRnpXuLWVo33rWA/WJf8KZ/Zmn/wDPja/9+V/wpf2e/wCYpY9fyniYXA5P40CMk4x1r2caJpQORptpn/riK4fxvp9hplzaG1hELTBi6p93gjnHbrUSwFVL3dWdGHxHt6ihGOrOX2bVBA6Utsm6bGeprrfBVpp15NcpdQpNMAGjDjI29+PXOK65vD2juwb+zrdSO6Lt/lWVLBzqQ5k0TVxapycGjzaaPCKvfvUY44r0hvC2kMSTbN/38b/Gm/8ACJ6NnP2Zv+/rf40f2bW7r+vkZrGU+zPP4Yy7gYrTkAXagGABiuwTwzpUZysDAjofMalHhzTt2Skh+shrSjgKkJ80rHFjq3tocsDj4os1P5ZH412UekWEYAW2Q49cmh9KsnBHkBfdTirqYOrJ3ujnpU4wVji5H8sYH3vWnQIQjOeuOK0NV0KS0dZonMkBbB3dU+tVccCMDr/KvIq0505NVNz1IuHKlDqV44CzZIwKmwFXA6VPt2pxUDc06UOpzYms3oMA6e9PAwMmrdhp8t7IVUbVH3nPQVvQ6HZxrh1aU+rH+gruhhalXWOxyw7s5YnjcfwHrVmCzuHBdIJGLDsvFdXHZ20WNlvGpHQ7anraOWXd5yN1V5Ycsdzi5LOeFcywuueclahxjGDXdVWlsLSckyQISe4GD+lXLL39mRgcaePXNMJAPA3N6CunufD9vIhEMjxH0zkVzM6PbTvAy7WTgiuaeFrp8q0XcUqlGilOpq+w3yWkJMjAZ7CnIixrgdaQbsc/lXS6HaQm1Mrxq0pYg7hnAqKeBUpcty44+dXRaI59gwICDLHue1J5QXBkYsfTtXbG3gPWGP8A75FH2eA9YY/++BW39lyvrI29taNoqxxPP8IGPQUeWxB4xXbiKMdI0GPRRTiqkcqPyrdYBpaS/D/gnM1zO8mcE0UeMO4JHYGlAhj+4oJ9a7ryo/8Anmn/AHyKjks7aUYe3ib6oKmeBryVvafgaU4YaDvyXZwjycjk0quw6HIrqLrw3ZzAmDdC/bByv5VgX+kXtiCzqGi/vocj8e4rzK2DrUtWrruj1KdWlU0RX8zgghacHhYYLKp+tQLDxkjP1re8PQ2UjyxzQI0/3l3DIx7VGHUqtRQUrCrUKUYuTiY5VTwsqn8aQxkEdD+Ndw1hZsctaQE/9cxSrZ2qjC20IH+4K9aOCqr7S+48uUKL2ucGYyDzTCgr0PyYsY8tMem0VG1nasMNbRH/AIAK3WFmupzTw6ex51IB2qu7lOduR9K6rxLDpulQQzsBCXfbtUE54z0rGQwzxiSIhkYcEd6UqkqPxwuu/Q5a2V1uRVE7J9baHP3SwycjKt0PHWs8h4HOf/1iuqmghK/NGDmsi8ijhAODtPqM17GCxkZrksz5vGYSdJ8zafoUFZZBxwfSgrnpTlWJjlDj6cU5lfhlOa75JXPOauRFSO4/Cg4bH5U/BwcjHYipUtw67g3btUSlGC1NKab91IplRg5GfUVWkgxyoyK0ZYJE5xkeoqIjHUYpwqLeLCzhozNkUMOKi8sYrV8gScgZ9ccVWlt+uzI9RW0KqehonoU1wDtbvSFBs/mKtW9lNe3KW1tE0k7nCovU10E/w+1qG0Mwa1kcDJiSQ7vwyMGidWnB+9Kx0UsPVqpuEWzksAA8D6U6KUoSyHB6UOCpIYYYcFSMGos7Xz2NaOCkrEK56T4btXuNatflysZ3sewA/wAivRqwvC1gltpa3JH724G7PovYf1rdr5XCU3Cnr1Pu5O7uFc/eeNNFspmiM8kzqcHyU3DP16Vj+L/FqxpNpensGdhtmmB4Ud1X39T2rG8J6Kl1q1u1wu4J+9KnoAOn64rsk6dKKdTrol3PZw2WQVB18TdLoluemwS+fBHLsePeoba4wwz61JRRUHivcKKKyPEurJpGizy7h50imOFc8lj/AIdacU5OyLpU5VZqEd2UdO8badf6gLN45Ld2YqjOQVY59R0zXS14rpkAYtI65UDAJ9a9c0eaefS4WuQRMBtbPfHes6lel9YdCO6PWzbAUsM06Wxerzb4hXST6zb20ZDNBFh8dixzj8sfnXpNeSa06XHjK8aM7l888/QY/mK6KclTUqj+ymx5FBPEOb+ym/0NvwfZv/a0Eg/5YRHeR7jGPzr0CsDwlbeVpTTEENNITkjsOB/Wt+vPwUWqXNLeWv3nHmNT2mIk100CiimTf6iT/cP8q6zhRkHxdoIfYdRjBzg5VuP0rWhniuYVmgkWSJxlXQ5BFeK2MKTzMsgJAXI5xXo3g23ktLWSMMPs8gEiLkkqehqa9ejSrKhrzfge5mOV0cNT5oSd/M6iiiiqPDGSxrNE0bjKsMGuKvAbK/mtWfMi4PPdT0IruK4Px4Daarp18pA3I0bD1AOf61y4rBLExsviW3+R35bD2lb2fdfitSck7Bnrin2llLdy+XEv+8x6LUNqxvVjaM5LEKQOxrs7e3S1gWKMYA6n1PrXm4LDqqt9EcVeMvatSVrCWtslpbrCnQdT6n1qaiivbSSVkSFcN4r8YTWt2bDS5VVk4mmABIb+6Pp3rd8Was2k6HI8ThbiU+XFzyM9SPoK8xsLUTEzS/MueAe59a0c6dCk61XZfiz3sowMJp4iqrpbLuzuPBniO+1O4mtNQYyNs3xS7MdOoOK7KuR8JWLrctdtgKYyEH4jmuurmoYn6zH2nLY4My9n9Yfs1ZeQVi+IbHzLRryGLfNCMsoHLr3x7jrW1RWrSejPPcYy0kro4e2kt2txPHIsgbow6VoaLqGzURCeI5ePx7VzOtouk+Lp4LUbIZdshj7AsMnFbmlWTXd5bsmRGQJCfTB6fnXiYijVoYuKTvfVeh7M8DQw9FSXwyV1fz/U7KiiivcPHCqN3rWmWE3k3d9DDLgHY7c4Per1eU+NJlu/FUyQncUVIjj+8Bz/ADrSlBSb5nZHoZbg44uq4SdklfQ9Ah8TaJPMIo9SgLk4AJIz+JFa1eX6dpH2tikSRrtABYr3r0u2h+z2sUO4t5aBcnvgVw0MXDESagmku48fhaOHaVOTfqS02SNJY2jcZRgQw9RTqK6jztjz9w9neT6fOcywngn+ND91vy6+9aegun9qxjvtYD8qyvGF0o8W2qx/fjgCvg+pJA/L+dbHhy1L3v2gj92iZVvUn/JrxK+FVLGw5NpWf+f5HvYhf7Mqj05kdVRRRXtnghVLVdUt9HsJLu5Pyrwqjq7dgKu1wPxIlO/Tod3GHcr+QzWlKHPNRZ14DDrEYiNOWz/TU5zUr+98SagbibCxrwij7sY9B6mtnTLWVLUlQ3kIMDPrUOk2S3EscJGI1XLY9K19ZvksbMQRELKwwqgdBXgV8ZWxuIjRpqyT0X6s9TPMZQw+FcJK0Yr/AIa3myrIvHrWPqW4KVCEirNvrVm00dpc3Mcd3J9xG43j27VomIHjAxXfSlPBVEqsf+D5o+Cr0ljaSnTdkziJEIJIyPakWdx3Oa62axhlzlBk1j3WjOpLRkMPTvXv4fMqFbSWnqeLWwNWlurryKC3Y/jXNXYGVsNGfwrNltZoid8bD8KSGVoSCM4rpqUI1I3gzlXuu5tbs/Wo3hR+cYpYJluFyvDCnSBlG5evpXjuLhK2zO/mU43eqIhEAf8A61Q3MAZSwHPtVmORXGe9NkIXr+VNSnGfmHLTlDTY0vBKIurzsVHmeTgH2zzXoT8x1594WdV1sY/jjYfyr0EkeVz0rjxrcqjb7H0eUf7ql2bPEfEURg8RaimDjz2I/Hn+tZh+bn+ldJ4xi8vxPdkcbwr/AJqP8K58pj8a+mws+ahB+S/I+cxK5a812b/M9a0jxRa6bpscF/5iqh2o6pkY9xVLX/HUNxZSWulrMrSDDTsNuB3wOufesh41kRgQCp6gis1orOO6ETxkDP3snA/CvksLmFKnD96m2ux+mZbDCcy9qnzLXyKtnAZ514+RTljXe+EImbU5ZR91YiD7kkVnWmlWzRhheQ+X1xH/APXrqtAht1DtalTGnykqc5b61yTxk8bi4SUfdX9anZmeY0qkHCL1Zt0UUV7J80FeXeN7iW68UNbOSI4VREH1GSfxz+leo15V4ncXHjW4HZGVfyUVrTlyKU+ybPayJL6xKXaL/Qu6LaxvdqpX5Il3AfyrXm8SvpGoeQ0PmwFAzKDhgfUVW0RFjtprhzgE4z7Dk1xfinWTHb3N1nEkp2RD9P0FeJkGFnisW3v0+b/pni8U4+dKUKdJ++2vuW52WqfEKOS0aPTLeVJXGPNlx8nuAOprldLhLM0rZ3Mdqk9/U1i+E3hvLSK2n3NcbysYJ++Owr0PSdFma/g86MJEjg7fXHavRzyo8LJ4JRabe76ry73/AOAfVYXEYSnheakrXV339DuLWBbW0igT7saBRUtFFaJJKyPlm23dhSHGDu+7jn6UtI6q6MjgMrDBB7imI8X09d19L5QLJzgj0zxXpvhqCaOwRpUKDaQAwwetbEUEUCBIoo41HQIoAFSVhXw6q4lV29uh6uOzP60uVRt8woorC1nxZpuj7o2Zp7kdIYx/MngV0xi5OyPOpUalaXLTV2bjsqIzuQFUEknsBXkfiDWpPEWrKVBW3Q7IV9s9T7mpNY8V6lrv+jqBBbsf9TEfvf7x7/yp+g6KbjUIYScu5+Yj+Be9OtWjhI6/G9kfTYDArAxdat8VtPI6rwjpjIhvXJCY2Rqf4sd66ymxxpFGscahUUYUDsKdXLh6Kow5Vv19T5zE13XqObCiiq93draoMkb2B27umR610JXOaUlFXZ5d4x1OTUPEE0ZP7q2YxRr9Op/E/wAqn0+0Ek0Nsv3ScHHp3rLhs7m81aYSIDKJCZB2zn+VdvpnhizRTJqG66kbnDkqq/RQf55qcwwcsVy04u0Y7+vl/wAP1PpcfmuHwdOGHp6yS6bK63b89zd0qNV34GNoCge1aVcFq9za6LdxweGppv7UJG6xiYyRFc/xhj8nsQQfauytf7QmgR7gQQSEDciZfB+vFVRy+WGoRje+/k/u1+8+W+tqrN3Wv3luiqN1eTWEZlmhM8K8u0Cncg9dvcfTn2qzb3Vvd20d1bzJLA67lkQ5Uj1zVSpyirtaFxmpOy3PMden+2+Mrx15WE7B/wABGP55r0PRrM2WmQxsP3hUFvb2rzfSSNT8WSOoO2e4Lc9cFs/yr1iuerTvinJ/ZSS/Nn0GcSdOFOguiQUUUVqeEUdZvW07Rry8T78URK/XoP1NeT6chkeW4kJaQnqfU8k12/j7VlttMXTUP7255f2QH+p/ka5XSbGWQRwIpMshzj0rnzGp7LBtXs5O3yPqMqp+ywkqktOZ/gv6Z3Og2SRLGo/hXex9Sa3ywGM1T0+0NtF85+YgDHoBT7qWNSA8m0gZwBmsMvprD0L1dL6u/wCB89iJurUbWpKk6NCspYBT3J98VLkYznisMy5s7eAAjYvzfWm+dJ5Zj3nYe1YVs2p06soxV0tmEMO3FN7nGeKbaVPFRuz80M8g8th7AAiu+8PQiHQ7UbSCy7zn1JrKu7SK8gMUo4zkHup9RWlBeSb4YxtWMYXaB26VnTzWNWpGVVapW09T0sXWdbDwpr7P6bGtRRRXtHjBXlfiu5/tLxbJGrBo4cRDByBjlv1zXXeM9dl0jTkhtjtubnIDjqijqR79q4LTLclfN6vIcDNKvW+rYeVV7vRep9Hk2GdOLxMuui/zOn0aNYbea7k4XGB9Bya4zxF4hW1driUGSeUny489B/QCuy1hhY6PHaKfmfC/1NePaxONT8QMgJMUZ8sfQdf1zWvB+WxrylWmtP0X+b/I+Jz+q8fmEcMvhjq/V6Jfd+ZDuu9VvheXBwAQRxgYHYV6zo+qPqVgLi5jVGZiBtzgjPWuR0HSE1B3km/1EeBtBxuPp9K69EEKqiIFReAo6CunjLH4S8cJSX7yHXok1t89D6HA5dTpU+W2hdkhbG9G3LVZXAfDj86ljmZDx909RT5Y1nXemAfSvk8Ni1L3Kn3nm4/LJ0/3lHVLoI8UTR5KZB61kX2jRzKZLf5XHUVqQscmNjgnio2ZopCO/pVLFYjBVvdlp+YU8HhcxoaxtL8UcgPMtpiMlGB6GtGC+WTiThq0NVsFu4fPjUBwOgrmWDq205GD1r7DD1aOY0VNb/kfG4rDVcDWdOX/AA5sPACd8ZqCSRmXaw5Heq0V26cE1O8i3CdcOP1pexlB+9qu5zSlFp20/Ik03UBpuoRXLchcg464PFdXJ4rtPJBWcMD6ckfhXAOCpIPWozyelTiMtp4hqTbR34DM6mEg4JXW5p38i63rFxPyiABVHU4HAzWNtwSp5wcVIpZScEjg8g03GBnjmuulSlTdk/dsrLtYnEYinVpxajad227732+47LP7sZ7isi/XF3nrkAitcjkAdjWfqaDcjj0r4FqyR9/hJqVZ2JooTLGI1Tcx+6B1J7CvStCsG03Rre3kVVmC7pQpz8x5PP6fhXI+E7UXV/DJtysXzk/Tp+td/Xq5dKfsWntfQ5cVQpfWPape9a1/IKKKK7iCK4nS1tpbiQ4SJC7fQDNePWsr3upXF5L992Lt9WNegeOr8Wnh5oBnfdMIx9Byf8+9cHpcR8knHMjcfyrLGz9lgpy6y0/r8T6bJqXJh51X9p2+S/r8DqZP9G8Mtk4LRn/x4/8A168i8YTb7+CAHPlx5I9CT/gK9a8Qjy9Jijz0dR+QNeN6uM+KJQ/I81fywMV6nBFFNOfq/wAkfBZpL2+bpPpH83/wTX0aEC8to+yDP5CvVfBssk19KJZpG2RfKrNkdRXm+hRB7iSU4ygwPxr1bwdYCKykvm+9Odq+yj/E/wAqjiWt7bOIwj9iKT/P9UfT1IRWH1+R01FFFcZ54Vz934z0azuZLeSWZpI3KOEiJAI962L67SwsLi7f7sMZc++BXjlnH9ruZZphvJJZs9yTmqcoU6UqtTZHr5XgKeJU51b2XY9b0vWrDWY2eyn3lPvIRtZfqDWhXH+DdMFtdT3Xk+XuiCqf7wJz/SuwrGlWhWgpwTs+5xYylTpVnCm7oKoaxpUGsadLazKNxH7t8co3Yir9FaptO6OeE5QkpRdmjyS2sVt22KpaXOCcc59q63w5pslvfpPNw5UgJ6AjvWS1/FpPivULN4wYmmLIw5KZGSPpzW1BqccltJPA5ChtmcYYn2rwa2HxMcYnO8tnfy6f5WPezPGuEEpO3OrrzVv06nUPIkaF3dVVepJ4FUV1Jp2Is7SWZR/y0ZhGp+meT+Vc7Lcmbahk3FzvIz8o9/8A69dTZhBboUIKkdRX0dKHuKU1ufJfWHObjDZFdrrVFBP9lRt7LdjP6rWJrdzqlyIcaBebEDb/AC3jds8YxhvrXWEDqKaQc9eK2UYp35V+P+Y5NyTTd7+hwvh1r2bU72XUNCubFCw8ktGBkDjkZPNXNX1G+e4ewsYvKYpzcSr8q/411/IxWbqGmm7YNGwRx/FWkp80nJJL8jjqYeShyxb3+duxzPhXTLawutsZeaXmW4uJPvSue59PYdq7uIjaPeufsLVNKeXz3Ubjwc5J+tasF4kxIjzgdaicnKTbd/Pua4b3IpS37FmVc4YdRXm3iPUX8G6s8NlMq2+pI5Nv1EbnguoHTOfpXozs23IxmvI/GOka5qXiORpNOGo2rKoi2MitF6gZ55rqwHs51HCo7Rt10v8Af23Ixs5U1GcPiT0/r9Opb8CQm416OSNlZY8kkHPQV6ZeXUdpAzySxxkDjewXP515N4V8GanpGqvd3GhzTWUoxJbvMm8HsRhsH8TXolrNo1lMok08abK3RriALk/7/I/Ws8VhKUa0pU58yeulu227PRxGbVsY1OtFRdrdV+f+bLMGr+cAYba5uBj70ceFz/vNgVYWXUJOlpDEP+mk24/ko/rV8AEBs5BGQeuaN4rmcYdjO8urOb1LwvDql4Ly8w820KArOFAHaqt1O/hqJpodJj2AfNLG5kJ9jnBWupluUiUknpXL+I5ZL20X7MWSZHDKR/I+oPQ0oSoOpH2iTttfoXXxmIhStzNpdOhqxeI9LleFTcrH5yqyGT5Qc9Bz35qhFO9wjO+MiRgc9c1w2o2VvHrNpd+XIbe6XckYOVSRRnB9Bx2967SyuBdWccypsyMFfQ9xXk59KnSpQVLXmTvfpr/mnrsd+DXtKXtFtexYooor5I6woBIII6iiigDSs7uaaTy2AYYyW6Yq/WbpsyKWiIAZjkH19q0q+sy6bnQTlK7/AC8jgrK09EeY+PbuS48QLakYS3jUL7luSf8APpTtGtQ13DH/AAxjcfw/+vS/EIRjX4Cn+sNuN/5nFWNCBN6xP/PM5/Soz2TVGkltr+h9VGVsvhy6aEfiZ83Vumeik4+p/wDrV4/bf8hmXHTc/wDOvVvET/8AE0fJ4VB36cZryXTvm1AkdMMa+34Pp8mFXovxuz8yw03UzatL+8l92n6HpPhUY02TpzKf5Ct04IOawfD2+30xGZeJGLD6dP6VuI4fkV+e8QTU80ryX8z/AA0P0GnFqmhVGCR2NSxko3cUwrmnBgRjPNeOElcuTh41AgJSQAbyvUn0z6VAt48g2TBZMf3xn9etXQBJf4JwJMfkRmqlzbwiTIdoj6OuR+Y/wr2MPP2ydKfTY+Xx1OeFqKtS67oUfZSrDYyE/wBw5H5H/Guev9Lthdg/bAqysAoERJyTjntj8a2WjkRwuAxIBBQ5yPWqV3D5rxEdVkU/qK9PLebDVrdGeRmdVYqnzSXvI5h4trtG3BUkflUYLIwB4Pb3q5cAG8mGf+WjfzNQTRlOvIr6pO+jPl+tiN5DJ1ABHp3qFuD+NP4B6cUmD1AqkrbFIYORz6Gme1SbTk46UwDPGeaDTodgoyc1V1Nf3St61dCjGKhvIXuFhhiUvI77VUdSa/PKuqVj9DwL5atmdf4ItTFohnYYMznB/wBkcfzzXTVT0qzOn6VbWjHLRRgMffvVyvboQ5KaiTVlzTbCiijpWpB5x4+vhd6vb6fEMm3HzH/abHH4DH507QbFS4cjKQgAe5rBWVr/AFq6vHGC0jPj0JPFdfpy/Z9HMnQkM/8An8q8jPKrc4YePT83/X4n1mKthMJGmui1/NnK+KtcEaTXB5ih+WJP7zdP1P6V5tarLfXz3kxyd24n1PpXSeLm/wCJTGO7TD+RrH0iPfbRIP43x+uK/TsgwtLDYW8Va35L+rn5pkcfrdWWIqayk2/u2R1Oi27RWzTtwJDwPYd69h0GEwaFZo3Ux7vz5/rXDaJocmpXKxqhS1Qje+Og9B716SqhFCqMKowB6CvgPrE8bi6uMkrc23p0/BI+uxkkoxpoWiiiug4DnfG90tt4YnQn5p2WNR685P6CuC0e38xUHeV8fh0r0Dxhpjan4flEYJmgPmoB3x1H5ZriNCBL2eOu8H9a5M1ny4Ky6y1+7/gH02VzisDLlet9fuPSNLjVLYkDqcfgKvVk6beIt19jY/M6GRfwIB/nWtSwFvq0LLofOVZJ1Ja7BRRRXYQeQa5vTxfel87vtJ/Lt+lVdY10aFD58kQ2kFY1Bw0rf0AHGfevQ/EHhW31G8/tNZzDMiZcbcq+P5HFeU/E1Iks7WHI81WXYO54Jb+Yr0suoU8TmFPnWlrf16fr5GnEePp4jC0KMN9L+Vl09dduhzuoeONcvSRA4tEPXyz8x/H/AArovBHxL1ezvEsNRL30DnahyN6n69/pXAlQLbYFO4cnjil0O5NprdpLkqVlXP58197Wy/DToOnyLy/4fc+f9j7Gyjoz6ysbyK7tUmQkow4JFWtqt0IpsMURsUEagR7RgD0rnb1tTtJi9nOkqZ/1Uox+o6V8Aqak3Z29T0HLljdnRlKY5CRknoBVDS9Wa6QpNBJDKOGVhn9e9JrWoLa2UuIpZpWQhIo1yzHtS5J83LYTa5bo5zU9QhAa6up1iQthS7bQB61sWmsabHZiWKUvF/FNtO3P1rgtI8J6pqXiBdS8SsiwW75itFJKA+pz1xW78QPF9toXhuW2tQgnmXZEu3gepx7V3LBRdSNKD5pPtsvL5HHR5knOWhsT+KtOuocWN1FMc4dlbhPr71BYOZb2L94JBJypFeV+DbG4tdMe8lRt93KWG/qQO/8AOtnTvGsFr4ht7G3hluXBxiPoM8/4fnV1cBJVZQoPmUb/ANfecCxcqlflktux7LGgxillgjliaN1VkYYKsAQR7g1l6jqM2l6ZHcPCXkcgbAQDkn3qvJqU5B5CjH4k142IrKhFSl/Vj3qa5nypFa8t08MKLjTpvJt2cB7N2JhOf7veM/Tj2rYt76O8tjLFlSp2vG33kb0P+eawZkluTKsu1lbhd3PbrWFo2sXOlmO6v2BgjuGsrmUdHjyfLlPuDwfYmiFV4uLtv+d9v8vW3Q53P2FXX4X+m/8AmdRe3BO7LYA6mqFnMbiAu38ROPpnipdRFveF44LlTu5+UgnH+HvUVrF9njWP+739a82rTUISUviv+BrzznWVvht+P/DGU1o1zDd2BIWWCXzYGPoeR+Gcg/WtuyiEFnHECcDnBIOCeccVm6lZajNKs+nKBNGMqx6OO6n8P1q/b6NNLFFdebLbzjBZA2QwHYjuKrGZfLGUVVjJL/Pr8rq/qLB4ueGbpcrcb/8ADP7tPkW6KQkAZJwKWvjj6IKKKnhtJZ13IBtzjJNXTpzqS5YK7E2krslsYoXbc7ZYHha0LqcWtpNcFSwijZyo6nAzWJHM1tqjW7wOzIu4EAkN6EVL4h1QWmhXzeU2/wAnaMjjLcfjjNfYYKhGFKKjG19/XqcSTqV1Bu92rfM8ze5m1rV5Ly5OWc72A6AdgPaus01VsdOlvpf4hkD2H+JrA0PTXmYL0L8sf7q1f8SanBBAbVWCwwDdKfTA6VxYqLzHMFRhrGOny6/jp9x63EuZwwWGahvsl59P67I4fxdrUrO1rG2Z7jmUjsp6AfX+VUtD0Z55VhjHztzI/ZRWXHK2o61NdkHBYsAew6AV6N4WtcaQ020ZkkPPcgcf41+h5jif7EyrnpJc2iXq/wDJbeh83kGAjGPPP4nq359f8jQihS3hSBR+7Rdq+tBjZeVNTsuOGFIAMe3evx6U5Tk5Sd2z7FaIZHKeAwxU27OO3pTXiBGaiRzkD3qRNJl9JVZFSQkFfuuOcfUdxVtnM8OZlWZenmIeR+P+IrMUnt+dOSR7eQSxkqcc47itqdVwaZxYjDRqxcWXYirXKLGWysRQE8HO01BucuFuI3l2kMMD5xj+n1qbdDOodl2nu0Y/mP8ACpWllQRZlLxlxhg3Xn/PFessVZc62Pm3gm5Ok9GvxOM1C3dbh5NuFclvpmoFxLGY2+8Ohrp7qOK4d0X+8eD9a566tWhclR9DX0eAx8MTHlvqj5TMcuq4Od5LRmc0LKSvXPTFQtlQa1oWST5XGG9RUF3bBCWwCO9ejGvaXK9zhgr6vYzU68+lSAjuMU3HznOB1p2OBnpW09S5Wsdgu1h8pBOK6rw5HYR2olZ4vteTnew3KPavP47h1ORSvI08mTzwRX55RrunK7Vz9Q+pK+jsery6nYQnEt9bIf8AalUf1qo/iXRI87tUtuPR8/yry/8AscKFZpRg9gvNWYtLjYfJA8nvya9irmGDp/ab9F/mehDKcK483tG15K35noR8XaCv/MSiP0Vj/SmN4y0FU3fbw3ssbE/yrhv7FP8Az5P/AN8mnLoLt0sm/Hisf7WwnaX4f5lf2ZgVvJ/ev8irNf293r1xNaWxgt5zkJ3B9fbPpXQaxeJb6ZDbwdJkwG9FrNTRZ7c7ktGBPcc1eudJkn0IrL8s0e5kHcKeorjli8NXzCFRq0dN+/Rv8Dk4kUqmAksM9Urd211+djybXL86xqK21vzDESA3qe5+ldZ4J0G3vL+FrqTy7SE4BPG5q4rTojb3txC4xInynPsa9M0AqNHtivTBz9cnNfpueVXgstUKP2vdv5O7f3/qfM4KMMJhYyp9dD01LnT7WFYkuLaKNeAvmKMfrUqXdtLjy7mF89NsgP8AWvM77SoLwNcBSsv8W3v71ktpWPuSjPutfCwxmFSUZy5X6H0+Ey/D4ukqkarv6f8ABPaByMjkUV41Eup2v/HvdyJ/uTEVY+2a86gNqU4H/XY/0rf2uGtf2qNXkT6VUeu49uK4DSobYatepC6sttIypg8dTzWCRqU67JtTuXU9V8xjn9at6ZpNzbzeZbJIHIwXbgYry8xr4SpRcVO76WX+ZvSwCw1OadTV/cPl8UWumeI7fULxsWol8gEfwqcjd9O5r0uC4huohLbypLGejI2RXhPxD0O7sxazJ+8swSCR1Vj6+3vSeHIp5HNss0iokeSyuQc/1r6mOCw0srji6M/ditfRafefI5JhakpVIYl2m5XfXV/pZaHvmD6H8qa7LGpZ2CqOpY4AryGa11OBsC8nHHG6Rhx+dU3tL2XiR2cf7UhNeTCvhJK6qr8vzPqYZHF6+1VvT/gnpOr+KNOi/wBAgnWe4mYR4jOQmeCSen4V5F8SE8y9sWzy0si/+g/4VuWVh5FxFLIwJRwwC9Otc58Q58a7aRNnbGHkP4sP8K9vh6rRq49Ki78qd/uPBz3BU8NiKEabune79DkmVl1KVSrGBCEdwOFzxn86bJpV8UmuobWR4rdwHkUZxnpXWeGntWOopM0YMkw27iPm+Udq3fBsMJm1OwVisUc3yk84HIx+fFfWYrM5YdTfL8NvmtLng4jGSlVq0Yx1jLR+V7fnax6t4M1NdW8F6beBgS8ADH3HB/lVeWa3a+P+kbWz6HFcd4S1rQfBlpc2Wpa9GokneSGA5IjQnpgAnP1rp7b4ieDrxtkWs2uf+misg/UV8vVozVSUqcG4vZ2e33HVCtGcE72OqtkTygQQeOtSO8UI3MQPeqSPBd2vm2dyoVx8ksTBl+voa4nxHpPiE3C3Nvq8kjR8/ZWQCOUZ7Y5Ddeprgbhf3pcvrf8AQ1qTlGN4xuXfFmrywhvJUqCp2OO7Yrx/SLa68T+JI3u389LYDcSdwd+f0zk/gK7fxXqUc/hD7dExwu5cHgqxBGD6EGqngiwXRvD63Lrie5OUB6hfX8gK9PA4mdDL51GrVG+Veut/wPIxDvVm+b3Xa3o1d/5erRreJpE03wxMY1CzJFsjI7DGSfyz+JrlPgvpg1DxbcX00YdbaInc3PzEjGPyq38RtVEOmxwL8zXEe3I6LkjOff8AxrpvghphtvDdzeuuGuJePdQP8c1tglLD5ROct5v/AIf9TbDqM6zaWisl8v6/A3vFmok+KNI0mPklXuJB6BeFz+J/Sq4vUbUGt1Us6jLN6e361Fc2zXHjfVNUblIoY7aIfhuY/mRU8NkkEkk0Zy8r5YmvmMwnR51F7qKXzev4XR3RVVy5obX19ErfiySdWeBlaQqD1x6egqhq+jiHT3tV2t54WUx+3QitSxjGpSOm4Kse4kdzg4FZ2nQ3t7cXd3c5RIM4Z+nsBWmCoThScno0729DixlSNSaile+l/wAzn5NPudAVH89rqzh+9IozJbe+B95fUde9d3pCW+o2UdyrqwYZyrZU+4PpXMW2hlLtdSiu5ku5smX5spIv8IK9Px61Lo06abfTm03QrkebZEfLn+8npn+nauidSniFab5mutret169du9nuUm6DT5bJ9L/ANfNb9rndrbxxphQKawAFQQ6hbzquyUZIztzzUF7fpGhCH5sZAHWpbjSVmd7kpLmRk+Ibu5t7UrZxQyN2RiBmqVvrttFpkF5fJNGjHZIqruZG9D+PFVNSmSzgkvbyYtMQWVc8Ljkn6CuR0wXsXhJ31KVzNqF0Jgr/wDLOPcDnHbrVVMFQxtCPMlaMkl53ve3kt/kcmHx06OJTnotL97N/n+Vz0RvFPhydFAuJIWx1MLcfWtOy8Q6I8SRRalb5x0Y7efxrzNtICEqZWDA45Won0tx92RT9RivKp1crU+aErN+T/yP0SWU4Waspv8Ar5HrlxCLrbcWsiuw6FWBH1rI8Q6fEmgajLdzhz5P7tmGNrZBAH4gV53DHqNk2+2kkjPrFJinXdzq9+Fju5rmZV6B2yBXoQqUXZxqq3qjnp5EoVo1FUVk0/PQ6XwxKsschHUov6da5TxXbu9nqcY+8pZvyOa3dCLWE8KdS52sPrWH4582xtb7cpHnPhW9Qx/yK8/h1wWZSjTejat8mfMcZUZe1ozgtOb+vyOE0hwJJE9QDXqnhWUT6FGi/eiZlI/HP9a8v0mH5Hlxyx2rXrehWB07SoomGJG+eT/eP+cV9VxzVpRy+FOXxOV18k7/AJ/ij0MrUlTVyy4AOGGR61C8ZTkHI9auOAwqDBU7TyDX5Qj2YyI0ORjtUEq4fOP0qd1MZyPunoaUp5qZ7imUmPiREhErjeWzsToPcmnC4OCDFDj08sU5oWaZY8hVjiXJPQDAJ/U0vkRlTtuEz/tAj+lbPmWiMW09xsM0SvtePy890yR+R/xq2oEHBUSQuQykHjI7/wD1qz57aVMPt3IP4kOR+Y6VasZfNVrc/wAQyn+8P84rWnOSfK1ucWKoqS547oz7hGEzN3JyeKhuofOtyw+8o5rRnQv84HB61GsRC8jg8U8NXlQrKa6GGNoU8ZhnB9Vp6nJn5J/Q1LesRErdcjmpdQh2TMB+FVS/m25Q8lOlffwaqKNRH5e04OUJFAvgnNN8wOpB4/CnOnNRBCDk13Wi0Xo4o6pLRAuGP5U5bQZzuqUHNPDY9K/OXSR+jLGT7jmACAdhV1vEcUPyC2fIHZgBVBmzx+VUL+zj1C1ltpSyo4xlTgj3FdmGw1CpJKutPyPLxeKrxX7ifK35XNweJ48fNauPowNB8TxY4tXJ92FeUat4budNlQJeGRHBKlsrWWbO/Q8Fj/uyV9fQ4PwFemqtOV4v1/zOZTzZxuqt1/hR7T/wlCj/AJdD/wB/P/rVXuvE5lhZIo0i3DBZnBxXjZtr0nBWU/VqBp90f+Wf5sK6ocF4OMlL/P8AzIks1qRcXVevaKNjVLuzOv77Zg25NsjryC1eiadCkOm28cbZXYDn1zzXllrprxyrJMVAU5CjmvSPDscsekoZCcMxZAewrfiPD+zwNNc2kXt30/Q3WHnQwcYSeifU1422n3FWUuPskbMIFlQ/NjuDVUdcDr9amRyvBHFfnuJw8alnY0wWLlRvG+jIG8Qqf+XCL8T/APWpv/CQ2qH95YQqP94D+YrK8SeGLjW3il0+88iVAVZGYhWH4V53Nod3FM0d0xR1OCGBP86+jyjIstzKndaSW8dbr8Vf1M+XNuf3MRddHyxPUpPGunW4OxbWP/tqP6CqE/xFtwfluYR/uRs1cJbeHzK2Ehnmb0VDWrH4PumGfsAXP99wP6160uHckwn8aaXrJfrc3+o5lW+Ou/lZfkjSv/G1lepi4uHmUZwgiwKzPDGtwHXJoinlRz5EWe3PANNk8HXK/wDLkT/uSA/1qmuk/YZuYJUkxxvBr0KOAyyvhqmFw9VNSVtGnbrey8zTA5ZiMHiPbOTbe923f8D1WOeVYtq7GX+44yKYl7o08jxzwiCZDh1HY/hVPRDcNpMLXWfNI79cds1HrWg22sQ5bMVygxHOhIYexI6ivyynQw1LFSw2Jfuptc0elna/mvx7dj3cVTxMkqmGnyy7PZ/k0/n6m3C+ixHeksJI7s2f515j8UTGuo2ssfLknDdiuAf5mkudL8Sac4RbudlJwrEb1P4/41qa1pNvq+uQtdStOkMSIYVGBnAzk++K+8yTLKGV4lYiFXnhJPbXb/hz5LNcXi04fW0lZ6WvfZ9/kch4a0m21rUxHKszuw52JnBruNM8F3unC4Frq80U0ylCyAFguc8E9/epdTe70MxRaNZQ4RBm38wIqD8uST1/Cr6avqFvJp894VQ3EmwxHnaCTjpx2HNeljcwxNePNSsotaJ2b012/r1PNlilKb5rrXW39XWpyQ+FOqX2oMIbwFWyfMnUkk+9ST/B3xNaEXFtJayyKchYXKn8N3+Nez6HCHSS4I++3FbOw1zRz3G2V2ttrHoUsKpR95t/dt9x4Skmv+HrcK0U2nXHcuGjjY/VcitWw+KOoWe2HX9M8+A/8t4iD+ORwfyFevSQJKhSSNXU9QwyDXOXnw/8M3zs8mkxxs3JMLNHn8FIFQsZh6t1iKd79v8Ah1+plTwFXDyvRnp2f9W/A47XfEvhHV/Dl7Y2811C17Ikkm223MCCMnJOASB1zXKr4ntLzWbe1kjvZ03BYoYCFz2AwD+PWvTl+FnhJWBOnSNjs07kfzrc0vwtoujHOnaXbwNjG9U+b8zzVrFYOlT5acZPtdpW6brXoi62DlXac+n9bWMSPwVp+o26pf2Y8lvm8pjuPT1rotJ0Oz0W2a306PyIT/ApJA/Or6g5p46V5bq1OTkcnb1OyjQp0/hRjHRRbo5id2ZmLNvOSxPfNY85eySRpCAxJKK3TgdK6x5sEgCs/VNLg1azktrgHZIMNjg4rllg41KnPPruaTbULQOL8OC+nMt/qECwSTMZIkV8kITxnt0xWhHrbarPcaYZECWjDeq8M2c4yP60utLdaDp8k8MfmxRpgbs4jx0Jx2rnLDxNDNNbXl5aNCQAJHtf3gZc9D3I9u1dP1fEVnOSWj0VnovlvtoeQ6tGhywk7O+vnfzOtCLcBX+cAE4AOM+9R6lpv2u3DRkJdxAmNyMhh3U+oNb2m3el6laiaxlili7tGc4+o6j8asS2kbgFcZHSuClQq4epzdun9fievKMKtPvc4TykvNOhuYt8VzExbyw3O4DDp75Gf0NW7HUbe7soZLFzc+YoKk9vqadsS01W8hkGEH74e3Yn+VYeg3D6Xd32lLAZN03mWUo5WSOT5gPwyfrW86cqsZx1bjZpeT3+66/E82E1T5ZNqK2fy7Luy5q9nHeXEdpcMHLDzbgjosa8hfxOPyqteQm/0+aaMApsOOf4R6VmeLLtnuV8P2M5e8uxuvrhefLiHUD69P8AIq/p++VktVG3IESL6Z4/lz+FejDD1KNGEm9f07/PZeSuebXlGdTlt8X/AAy/z9fkdGA1tDBKVjPmxg4znsO9Y934iNowF1a28YJIUyMBn6ZrsJrS3MKQhgygAADrgVyHjHwpa6vZK3lSq0ClkdGBOT2wfXFfNUcDhvrLqVEnSe9r3j8u3fsvQ+srVa1anGlGo4VO+ln63/AamuafOPmsI2942Bpxv9IxkWUufT/JryBtKniYhJQGHUcqRSm21JhtM7kHsZjX1s+CMI3eL0+f+Zye1zqGiq3/AO3f8j1d/E2l2BytvDEw6GSUA1z+u+LtM1KMpcyRSxhSBFGpbOfeuIj0kk5llA/3eTVyDTICwRImlc9ByxP4Cu7CcJ4LCzVRXuuv/D3Iq4LMMZHlxFVtfJfkrljwjd2n9s2kV2u23SXcSTwBnjP44r2OeEqdw5B6GvMbLwrqk5Cxae0KHq8g2AfnXqltEsFnFb5LLGgQE9TgYr5rjeWHrVKUqdRSkk00ndLz8m/xse7hpOhFRk7lIiom+nFXZYCnI5WqzrnNfA7bnqwmpK6IyARgjrUO0xyexqT2xSsMc9qC72LU0gjmY7VO5FBDdOgNRsbdlPDxn2O4fkeadNGJWD+ZEAVGNzewqu8EyLkoWX+8vzD8xW8ua70ujKNrLUQxOrBredS3s21v1qaON0uraZ4jG5k2sMYB6cj86pP83pU1kGeeIc7Qw/DmnGa2sKa01HsSk7r2BI/WnMc4pZQPtEh7bj/OoSSK66sYyeh4NGcqejMfU0+YN6GsR8xzHHSt+/8AunNYVwMyn86+wyyX7hXPicwp3xMuXqV3HzdOcVA3Xmp2OXOarSttHBr1YK5zKLWjOsDdOafkHFVtxjODnHalEhIwK+O9g76H1H1lW13JXkzhQKVRx/jUaZOTUoPeraSVkZRbk+ZjnhjkXbIiuvcMAaqyaTp743WkY91GP5VdDA4owCfT2oo4itS+CbXo2jqc3Fe4zMPhvTnOQsqj0ElOXw7psZ5idv8Aec1rRDilI4IrX+2Mc3y+2lb1Z0OrV9nfmZRj0yxiI2WkIPuuf51e6fl2qI8MCaeDk1NSpUq2c5N+rueZKpKTfM7kioSpbHA6kdqteXsgDMPmfp9Kl01f3UjY4Jxg1JexP5qgD5dowa2pUVyqT3Jm2loVUBzkdulWBg4YgEehHSoe/HQdKmiYZwehrxcVLmm3E9bCJwik2I6b5sDgN6VWljKsQRyKvjbvUdetJNGJk3LjcB09a8pq92j6CFXl5YyMsrkHA6VA4/ec1dCcntVeWJmceWpYjsozTpwnUlywTb8jtU0t2TRH5BUwQkUzTraW8z5Y4DbSff0rcXTI4Yj5kpLAdMYrojl2Jkm+S3rp+ZzVcXSg7ORgXPmpaukR2ySfICO2etZtj4eAv4ZcsbZCSQed7ZzuJ+tb0oDTsFGFQdfc8VxLeMZz4p+x2UXnW8bbHw23bjjjtx3zX1uS4bEfVnToLW12/X/gbHxmZ1I4jF+0nqlt6Ld6+f6HR3elmS7+0PEDgEBvTJ//AFVT8UMlpY3N9PEWitUDBQPvEHA/Wt+1uobuR4gSsyYLxN1x2PuPcVh+NrafUNCmtbfO6SZY2wM8cf0Na4LETliqdKrpb8m1/Vznq4Oj7Jzi9G1+v+Z2ugaiV8K2eoXdvJao0IYq3JAPOeK049UtZo1dJUKkZBz1rz1Nfur7wnFpU/nI8kXlRShRH5qgDkEng47HBqPS213TbOOKcSXEaqAvnRjcB7lSQa3xELKTg0pXeje68v8Agm8MbCPKkm426Lb1PS1vYH+7Ih+jVIJkPf8AWvOZvEU8Kf8AHgHfsvmhSfzxVa08S6zqeoLY2ei3FsxfBnkcbQvrxWNKhip6uCS78y/zNVmGHlpGV32tb8z1EMrdDTiPQ1haWmrW2ftxSVezqu0j2I/rW2rgiqnDlfc6oS5lqrDqSlzSFgOtQWVnG2TJHuaUEGpmKkYNRlM+hrRTT3JlFjHWOVSjYIPBB7155r3gOW0le90BlVWO6Syc/IfdD/CfbpXoZi/2f1pHGEwf1ralWlSd4Pfp0ZzYjDwrQ5Zo8UiluLS980ieyuU6yRttdfr6j2ORW7o/xOuVuxZ6jatdRnhbuGIoT9VPB/A1qeILvT1vvJvI/IYnCSuPkJ9N3asxtIgf96qS4PRlckV3yrUnH99Dfb/gM+fjHEYSbjTldGwbiwu9VbU4JHlM0YiYHoq5z07c1yUuuT+GftemPaec9uALGXqzI+doz1wDkfpXY6Xb28MWQv7w9WK4JrI8XWsVvHZ6qYgxtJNjf7jcfocGvLw+KpTxnspxbTsl01W3+XzPTlTqvDe2k03vZfL+vIyNC0s2ME17evvvbk75nJ/JfoP88YrY8P291c3Z1W3WP7PgiEPndIvdlHv0BPbJ71z2kzSeIb6O4vYnj0ZWyITw1wM9W9E74/ir0mSLyWDR42joB0FYZ/mVbBy5VrJ79ku3r+S0326cuyd1LVMTeLavH/P/ACQwajLKzGCyk+Q/N5o2Z9h61UuIbq6cXEkckHGPKL5B9zjvU17qkdve2luzAG4ViMnvwB/WrsE6yICCGHfHQ14mLxOKqYVTSSjL7/6Z6dLBLD1I1auq6drnPXFjbz5+02sTnuzIDUSaTpanD6dbEevliuh1LZFZySRQGSUD5EXuaxreLzbUPOQrsMv/ABMPp2FcuCp4mVJzdf2cFpu9fRI91VozWkbly20zSlQAababf+uKmr0UFnb7Ut4oYs8ARoFP6VjR3ohDR24MhHBbOcfU/wCFWLU5mEkr7iOdo6f/AF656tWpFONWo5erf6/8AiVHmV0aRjJY4/OmEFTUrjzFDK3IqkZmWQkkkHqBXH7TujBYfmTs9SYMR/8AXqGaMHLKOO49KmfDZKkEGo8lTntWjgprQxhVlRlqUXXB4pB8y/Sp548HI6GolHJyeK53oevGSkroSWN4ot524OM4OcZ5GaqiR0YFCyn1BxWhcOyTMUYqdq5x34HUVV81GOHgQ57odh/w/Stmop2TsEW7C/aXc4mRJc93Xn8xzU9iYnJ8seUysCVdsjGexNQMLf8AhlKH0kX+o/wpbW2kaV/mi2twP3gwTWlPm5lfUwxCTpSsEr5Z2HQkkfnUBck8VKQRuDcYJ4qtv2mvUhTTufLTqtNXKOoSDGKxpiG2t3PFaF7kznnjtWYCNhz26V9VgafJSVj5LF1HOtJspyttc/SqcsmQamuWw5Psaznl+bk8V7dGnfU0pQvFM9DeMSjcuPpUKx7c0RyshzU4ZJu2G9PWvzTD4pxXLLY+4xuXKT9pBakS+meMVIo46UqoQalCj1/CuqdZI82nh3Lcaq57c05UINKPlOadnPUYrJzk9jdU4LfcWOlcU1SAaew+XIxUbTKtemROCOfzoXLsAoyT0HrTsj60Q7opQ6HBHcDOK76ck1Zs8urB810bI8vT7LMpwF5Y+9Zo14XUoi+ysy9AynJI9xUmpT/6NDb7ixKhnLdT6ZqvaxrGhIUAn9a9GpUjRpc1jC8qtb2adkty0pPTNSCouBg1ID7mvnZ6u57cHZWJlY4OQM+tCM3nRxrzJIcIo6mmLnqKxFuID8SdJivfOW2gtnkBUkKZWOFzj6EfjXVluBjiqsoy0STb+Q69eUVF3Otn0K9aPzENtu/uMWGfxwcflWbo9nbz+dFeTzC5gc+fb48vr0yc/MvoRxU3/CVYuLqJ5jDi7MMW8Ag5+707HB69MVh6tYtLqFtHNHvt5rrYvzEFgyMXU+oBVT6V7WHjSwnPGEXHS911S10u/wDLv0F9dqTcUp3TdvQ3z4i0+GSSz08JL5XDeSBsX2JHU1El/JcTbpMADgKOmKqRWMVrGIYIliReiqMCpFiKNnBFfLY/MZYiTULqP4/P/L/hz36GEpwj72rKHizVBo2h3dxkb9u2P3dulef6Foc/9mSzoIGmmTc8kib/AJG5II75rrfGlslzZWX2ggQLcb5M9NoQ5rM0++a0EkNwvkR3E7JEWGAVXAUD684r7/JpuGWxlT+KVm/l0/NnwecNQrumn1/4b8dzp9INlNbI1vMBNbj5kk4eLPUEHnaferb29/eI62GnyyghTvZljQMp9WOTxxwOwrl9R1GDSNT0lhavcXFy2yNY1G5hxzk/y/wr1lLuC0t4PPX7P5uFRH4OfT61xVcJyzVd6p3tfyeu3S6/rW/VgpOpR9m1ZdfPTfy/r5eeeJVvtO0FnfSpYPs7B42aRZIiR2JU8fUiufh+J6Q+XFf6dcx4HMsOCP8AvnivYLy7tzbybWRiykbSMg+xFeOeI/D9rNFDfKDZsZDDOiAMsbHlSR3U9PxHvXTg4ZdiY+xxEL66NN3Tfzv089TZ2wtX2ibWnS2y8tn+DR0j+JtK1fSv9HC3gcD93JEDu9iD0os9Wn8PSQW9xppXzCxgEL70QDkgnsK5/wAFeERb3zapexxMoBEBUFVx/eIPX8eK1Nbhk1W6hlju5reO3kyBF/GB1B9sVm8LhKVd4Wk+aC1bd9+i0/HQ4cTiKift1PV6R0tp1dn+B6RoXibTtegP2aUeYh2vG3DKR7VpvD/EtfNMuvXWh+KXuLABbfzFLLGch8jrjsevTrivffCnii18R6YJopFaRPlcA98ZrrxuXyw8VUj8L/D1O7C4l1YpTVm1f1F1DX7XTXWO6kEbMQq5HUmkOrBo1dFLFvwwKxPHF1DDf6ZbyMB9puAOoGAASc1cygTPYDjFeLmFT2NODgviv/kdNK86sk3orFw6hJ3GKkj1L1rKiuY5iQitgdyMU+RvLXIXP4V4s69Wk/eO2mo1dYO5qPqoUcKD9TVSTU3nHyMNvqKoXCSXNoVjPluw705IhEoHYDAHSt/rLnTTvqYSjONRxtoQz2iSu7eT5rP13NxWQdGuIWJijaJf+neXGPwrV+0T3LEWzKkSnBlIzk+wq5GrCJdzlm7k962ji6+HVm1r0d2/8jilg6GKd0mvNWS/zZzi64NOuo7LUXdVl4iuZE2qG7Kx7Z7GtDXlW48OXaOn34sYPODUmuWVvqOiXdrdoWhkjIJHVfQj6HBrH0+aV/C91azuZHt12hz1K+9dNNU6yhiIKzjJXXTpqv1XzMakpYdSw8pXvGVv8h+g2Ru7C0m+4s0KsGYDHI7AV2HliNBH1AUDJ78Vzfhof8Uxpg7i2T+VdJA/nwjONwr53MsdUrYqcJ7JtL7z6ms51aMJt6pI5LxekCzWchkZZIFaQEdxkcfzNXLe4Syh+yxT+ftGVcLySecYFV/HFsJdIjnVCZIpQM/7J6j9BVvw+tkkM62hkOSruXfcckdPYe1e23B5RT5fstr8b/qW6jng+eavZ/L+tSzEl7dooZRCuOS/X8h/WsK+8La3dXJRdUgjtCeNqnOPp/8AXrq0yDtxmp+wOK8eni6uEqc8Ervuk/uv1OKGLnVVtvQzLPSbew02O0RmfYOZG6k/57VWlgkgbPUdiK2pSqoXdlVQCSScACqFpdNqaGXTbWS6t+0xISN/91j976gY96xWHrY6UqiTcur/AM3sVTxssK+WWse3UZDMzJlDhvSo3Y/exg96kkiuLaTdNYywJ/e3q6/mD/SnzAMAxx8w4Irir4arh5ctSNj0qWIpVXeD/wAyOGQA9cqRUzgEZB4qgmUmKGryoycnGD+lRCbiycTRjL1GMpaNgeo5qrjBxV7GxsnkVXmQIwI6VVVa3Iwk7LkYyR4XfcZSu5RwEzjjHNQrbFz+6kjk9gcH8jTrhIYn2MZA2AS4wRyM9P8A69JHEDllZHTuVPT6g9Ktrujr2WjKV0kizhXVkPowxV61hELIT94sP51AZ5op1CyMFJ5UnI/I8VdMkbSAyBYyGBDqvBGehFa0KcZyWpyY6vKnTSXUrS8zSj/aP86oMSD6VeJDSswHBJP51QlOGYd69egk5M+UxTfKmVLmPeuRyw5FYcwIkI/KuhJzzxxWVfw4YsOD1r38DVs+Rnz+Mhrzow7hCdwI5waxJG2uc10EyZGfasm7tS4LKOf519Lhai2ZWHmrJM9ANuT905+lMXdEwJ7dqnX34qThvQg9jX5RKn2P0KGJf2kKOQCBx1oDA9zmgRiMhhkew6Gl4JzxWkH3OWrFX91i9TyKQqR0P1p45pcdjWkZtHPOmpEQbaevFTA5HSopBg8DinxkY5raolKKkjmpScZuEg6NSqc0MMikH61UXzIznHlkNlEks5cjqfXoKsqNqgelRg9M08EVrWrzqpJ9DGjQhSk2upKvI9KeOCBmo1/WpD0NcT3sdyWlx6ntVe50+3vLiGWaJJDGed38Q5wPcZNSg5HHWpVPQn8cVVOrOhPng7MHCFWPJNXRzch8SeZ9lg0u1+yIx2yySAMBngnPU444zWla2l7casNRv3UeQpS2hA6ZGGc+56AemfXA2V9ulIyYIIrrq5vKrFwUIxumrq99d929yVgY0rTi29vw2+4mjImZVHLHgVJK8Yl8pFGF4Jz371Xg2ecu/cVzyF6n2qn5dx/abyNgQqmI13EnJ65rjoYWm4zk+x3RxEpR952t+I3WI47m0MMqgq7lQCOoIwf51VbSLXWfDS2UqAfLgMvDKw6EH14FSap5kk9sAPlznj2GTS6DKQs8DEHDkrXvU+elgozpuzi09PuPn3ONTHOM1pJNfkzjdba8tfHmkPHCbhdPjRwucE9iT+Q/Ou58UeImvrHSriwaHBuEkKu4/eLzlR7/AOFUdUsoNSvfIePaxA+fowKncpGOTWXqGsaT4XvYmSEtA8W0xwAMiuDxnPC9/wDIr1liHiadKEIXlFbd169L9CeaalKnF2i3a/W973t5dTdh1y1utUjscSB2hWeN1+7g9AT2PsetZviHT1ijv7tW2fafIjKu4O5xIMHH0IGfas2y8ZWGq6jH9mjRrlWHmYY4/AY5/wAmi4vG8TajJJvSGx08kowPMsvQD3A6n3wOxrGjgKmGrqTi4RSV7u+t7r72l+YqmKVSnKMtZJ9raW63t0N7Ub1y7wQDCDhm7ewrmfEWrNpOizvEAZcbYwfc4z+tbtjIuqWKocLcovH+0P8AEVieIdDbUtLnjyRIqc8dDnINdGAjRp1Y06isk1f/AD+f/APMrylUkqr1i/y6r5f8E8tt4J7m/WCKVfOnySW4G7Ofzr1Hwus3h3VGuUcBJ1Xci8AHPI+mc49jXPaL4VFtqEbNKZd68ZHQgggitm/vhDrSabImFntmaKTvvUnj8q+hzDFLES9lT1Vtf6+Q6+LlVqJ0dFHb82b3xOWa8023uIkdntZVlXyxls56Vs6XqcGoadbSRNkyoDjFc9a+J4bzwfBd3Ks8vkjziByMdWx+FWNAurSPVIreJhiaFpIfQjvj8818pXoVXg3TrR96m5Wffv8A5npLFL64vZu6nZO/Ty/ruXNW8UWWiv5TkEjgknHPpVGTxqoiVpIo4Ec4Uy55/Cue8TXenaHdvPdKst6WOxepP+A964tm1PxLeCQW7yheFVRtjQfU16mCyHC1qSqTWnWT6+iMI4rGVJt8/JFemnp1Pa/D+vxa9YNc2+DhivIx0qzqcrrZqm7DysEJHb1rmfBtr/YFlHb3EiZlJZ2BwNx54/lXQaq6XNoHt5FkMbgsFOSB9K+dxOHo0cx5aa9y+n9ep6Cryq4Kck27XXyvv9xfiEaxLHHjaowBU6/dFYdqk4nGFYMOSDxxWqsrF12oWQjlgehrixeGcXo79TowWLU46xt0JyAQQwyCMEGsO8sIrTT7+WOUCPyirhjzkcj68A1t5Hrj69q4nxXqUWoXVrpVkxZ5SfMYHgRDG4/jgD3zWmVKTqu+kN5PoktbsvHUo1uWC+Nuy766P8NzW8MXQl0aziPyyRxBSv0GM10Vu/lz47GuTsbi302SOS4cJEFIA7tx2Hetyz1K1v8A5rWXdt6jGDXzuLo1ak54iMGoNt/ez6zEU4U3yLbY1L23S5hkgk5jlUg+1ZtjpyaLYyhX813k3M5QKTnA7elazfPAGB6VXbbIjI4yGGDW+Fry5En8N1dHgV5yhenfR6kEU8s8rxszqgZg6wNtZO4OD94Y/wA9qsafIslqq+d5roSjPt25I9R2PtTGjaQrudcKu3KoFYj3Yc1JBBFbqwjU5c5Zick8Y/lXoZhiaFWioR306HPh1KM7mF4rklMfk+UstrAvn3ERP+t67UPqMjOO/Fa/gLXZtf8ADEd+LFYIkyiKJM7tv4DFZXia0e9tLq3G5ftUSorqCcEEg9PQMDWR4aTU/ClpNbxJIbEybcNJzuJADKuOnPI6/Wvcyz2H9m2Vue+i2v362vd2+VjixFX2eKcpXt+S1O5udWt7/THPlOEkU55wR+I7isOzn3TXFhISZYArByMBwR1H5HPuD61lx2WpaTawQ2ssYX7SGZMlwqkksvI7kjHpzW+qRtel8t5qoARjgKc4/rXnZioypTTkpRd3Hys1b/Lc6MLXl7WMrNSVk/ncpynEiMOvSrkdwrL83XGPrUmmQJLqrxSIrpGpYhhkDsKoakY7XU5o4gFQHhQcjpXzcsJUp0I1ntI+n54Vp+z6rUuRuGG09e1EqhoiO46VTjnBIPSrZcNH6MRWCl7rTM6lJxmpRK9zEZIYkwPMC5JJxheoz+HNVBIkKkQkuzYDORgY64A/Dqa05srNI+AVx0PcEf4Vni3VifIcMD/Axww/x/CtHu0t9johK61E2hpGKhTKV/dh+hP+OOlKlz5qENGomQZZcY3AdeOxHpTHjdY8PGwI7EGpXylxbTMP3hALZHJ5xz9RVQelmROMZaPUYsm7ogI9qqXSbZD71ddkiZogCNrEfrUUiCRMqwPsa6cHW9nU95nkZlhnVp2jHYy2yGqpegNGCTgg1clYBsGsq9ZlEmc4yCK+pwsOaaPisRPkWhmSnDEfXiq5UEetSyt/I1Ap5A/nX0EFZaHJq43O1PTrT1PApu4OgbigHnP86/OFqj7+ScZWZYzlMGo8HnmpE5UU1lwaUJa2CrDRMaCPQ1KCDjNVmyGz2qSN+MdK6JUrxujjhWtPlZOU3L05qBSVbk1YVj1pksY+8opUJ29yWzDE0rrnhuhx5XNM69qYrbfpTs85rZQcWc8qimr9R1PHX2po6dacOT3obsJK5IM8VMOnrUK8cVIvHaueZ0w7DlHP9acOGpo4OalByKmTKjEniPzD3qYrnr3qqpwcVaQ7sAA5NcrWp2watZkJVoyGX6gjtTP4s5OfU1bkhmjj8xkyv6iqhdM8ED610RlKOkkc1Sn/ACkc9utwEyWVkO5WX/PSo/Khtn3RxkEckRDJ/Lv+FThwOgPXHHenFPMcxMmWHOG4x/hXXRxNSC5dXE5nQpyfM1r3Mq9ubO9CqbtIpFOV8zKMD+NVbS1kMcnnz2uoOSxD/KWYdgwX731PNbaSyGWeLyVIiHy72yXO0kgfTFVZ7+2tVlZwIHjVy4WLLKylQenUZccjjrXsUqtbl5KdP01T8+iujklhIzm5Oe/k+mmzujA1+3W38O3F7YQQxI1sXVIYhGHHXDY5I68Zwa8/8JknWokLj5iXkXIAK4Ixjvn26Yr1jUbyzdY7Ca4DNdNJAVK9SMDj069+oOa4fU9JttP02H/RYEuLO4Blu4ItrFVUjg9SAcZ9eTxX0mUYprDzo1Y2lLb01XzMcUoUYVFzXbVl92tl08vXyOm8hbIo8DYjPKEdj6Vel1D7XZMmwCYjDH1HrXnK+Mroyxxs8ISNwkmFJVznqD24wa7FYnEbMr5BGQPSs8VgJUnGVbfozx5e1w8bJWU1t/X9WH2CbNSt07g1l+JNP882NwhxJb3aEEf3WOCKxrfxJeW3iRjdIFgjkMYwpLZONpPsa29Z1WCK6srAtma6mVlHooPX9MV0/V69GvGXdf53/Ay9nOnBJrfVejX/AANTTe0OlzaddhENtMfKkQjjkZH8iPxrpING0+ERSQwBDH80R/uZGOPwNU9W40C3x13xY/MZrVJ2RKB0BUfhivlMZiqtSEGnZtyXql3++x9BgsNSpykmk0lF+jZxV/otrLqR1ARebO+A0kihsf4VdiiijwNhkI7AYFb955YQqVwv3jj/AD1rmNX1NtPtmdLaWd/4YYVz+dethsRUxUYxt5I8bFYZUamruaemwuJEvpUzkjbtYfKD0Fbt1F5sRZRideY27g/4eorzbTrjXZ7i3u7mQWVmF4t2TLH8R/WumfxBJDakbtzEFVCxks309TXHj8uqynFxabXRfkepg8ZCjzQknZ9d/wCvQ2mkme3jnjCKzRgvk4AyM1UGr22nwjdIZpcnIXuT7VwGtePnhH2WP99KMKIY2+WPsFLDqfYZ+tXWggudDjbXLdRMMSSRLklTn5VHfceBj3xXbDJZxoxWJ2b2W7/VnPXx041faUU1fRX1fyRa8QeMS1q7pmO2zsG05aVv7q/1Pb68VZ8MeGL0xtqF6PLubsBmLD7i/wAKAe3860dF8BSpNFrutxxiSJM29iMbLRR0z2LD8ga0tQ1+KFWjtCJJOm/+Ef415Wb1nKKy/AQ0+0+npft3fV7aLX18DOnl6eNxcvfe19/ku/5FO60620y8+1NqdwrmMp5SAbsH+6T93nvWTd22tpZ/adD0u5MmAsPkx5x/tHPX39arXl4kSSXF1NgYJZmPJr1bQLxdR8PadeKu0TW6OF9OK3oYeWFpxnU9/prt6W6/M44Y6tnNZyk3GEGmrdX5vy8jm/C+p39/ZJHqWl3lldhfm8yBlRj7H+hrWkt33cRt/wB81v0V5NXL6LqudL3U+m6+R7tR+0ilIwVtpyeInx9Kka3mAz5T4x6VtVzPiHxjb6LMbWCL7RdgZYZwqfX39qX9mKo7Ju5eFwtSrPkpK7FnhWaLYxZSDkMOCpHQiuW1rw7dahayQfaLkHfvje3kwFbB/gJGBz2P5UmmeJ7271Mi9MbRSElmVceX+Xb611CyI6CSNgynoRWUauIyytaLV9+4Zhls6MlGsr+hxWi+GNdtWxcXgc79yyP8u3/gIJ3H6muuCR6dCF3PI7Nyzn5pG9T/AJ4q0Cc84rP1WOWUQeUQJGlCqP8AeOKdTH1syxMYV7JN7JWMcFg8PSnfa71NXTYDDa3t4ZASzk5IxkKOg9s5rGubC7u2E0VvK5cbshTWlqC3duLTSoY/M+0Nt3A8bByxPpn+tdIihEVB0UACuzHYONfljeyj/wAMdlHEOk3NLVnFQ6TqZAJs5PxwDVyOxvlkG+1kAHU4yK6uiuF5RS/mf4GksdOW6RzFxazSR58qTegwRtPIrLlgYLuKn6EYxXaXl7Bp9q9zcybIkGSe59gO5rgbTxU+q6w8N3boscmREF+Vlx0B9azr5RJU5VIPY6sIq1WEpxjpHctCSaOLCyOPTDGiBd8wZ8lUO9yfQVPL9naTaPN4HTj+dI/MWxQEQnOAeT9TXkx03Y5TRCDySVG5zk/jUblAw29uoFLMWCkLy33QB1rp9G0ZLKFZZ1D3Lckkfc9hXVRw0q0uVdN2cqqJJzk99EjjLnQ9VuX3WlrKV9SAB+tQN4e1p4GWXTZN3QEFTn9a9Ror6inNwgo226nzdTKKU5uXM9fuPFpPDOtxrufS7jBOB8uax7i2mtZWjnheJx1V12n9a98n+4v/AF0X/wBCFRX+nWep25gvbdJoz2Ycj3B7Gu+GYtP3kYTyWPL7ktfM8zgfA2HoamHvVOI75QBVrPOc18TTPp8UkmixGxHB6U5mycVX3YyDShsmtFT1uckqunKPbB703GDwPpTwppGU4yBW9OS2OSrBvWw9GyOTzUykEY7GqiHBFWk5Hp71nXjZ3Rph5uSsyJ1KsaQEetTuu7g9arlCD3roo1FUjZ7nHiKTpSutiQe3504H1/MVXEm3ipVbPP8AOrlTa3M4VYvYnBOPWpAfeq4PNSqa5pxsdcJXJhg96cOPrTFPvUgPHFc7bR0pJjwfWp4bqS3YmMKTjHIqAH15+tBGTmpjK0k0aWsrlxrpEnaN5AUUjacsxIzz+OM8Uz7batCqGMgFSDhAMHdnr9KihYRyLIo5HanTTpNIMxfN67f512rEJrRF2TVx0kkwAl8iQI27ktgEEnB478/pVqwtJppHumjRVYKAuMgkYwf0pgvJ5F8sgPnj0reiMdxbqM524zjjBFdGH5alS99F0M5QscXq872F9Og3fO4JOcKAwKk4x/X0rD8U2Be0bUYX8+88vZGhwSy/3eexrrPFFosLR3PLIVKvu5wP/rHFebPp0k4jF9PKZIJnMDJKQpTPykgd8cGvpMDTU5KopW5d+t12/wA/U+ZzGtKlKdOWqeq/rr2NS20e6jtYtRlvDa3DREJFFjAyOSfpVPStdt9YE9pKGWZFyDJyZFxjd/j+B9abrmrJbaDIvmfv5MRhSecdwPwrjdOuZLfxHYXJjMRjMO4H0Py8/UHpXt4fAOtRnOfxa8vTbp6feYYenTqQstrPr1Svf+v+CZdzaH7ctjGoR5JNpUDGCTg8dsV621zb2GkKbpwohjALH2FaI0exYm8igjSYZzlAcHpwa4zx9etZ6YtuUO+5BUY6DHWoljlmtWnSirWevfzHjHUqTirWVtLa/M5abUk1bVJ3jVo1lwI3HUbeQfzrrbdLbU7Ky1a5RTcRW7GPnHI4/nzXndu5gXzMkbASMdzXZ6RO934bdVhaMKvkwhupGOv5k17OY0FCnHk0tp8tjbNFGnhqMUtY3V/Lt99zodP1HUdft9Lj8to4gomkHckghR9Op/Ku8cLDahmJ/dgE++BXP6RafZrm2hiH+phGfyrc1CTy7GRj97GK/Pc1nGpiIU6aSjf82dOW3jRq1Zb2t8ktDPa8W4vguzcoXhf9qrU+mxvbuAuZGHX37mqOjRB5TIRnb/P/APWT+VaGq3gs7JsNiRhgetZ13KFeFGh5Bh1Gphp18R1v/X+RyepXtrZsIhIPPVWZ2f7kKjqzfpx3JxXnmt+KptQkaz00vFA/yPO5xLP9T/Cv+yPxzTvF2rCWRrG3f5SwaZgfvkdB9Bz+OTXW+BPh/YS6ZBq+rxC5knG+GBvuIvYsO5PXHSvtV9WyzDLFYm7b2Xd+n+e3qceAwvtfetq/wGeHPDuk+H7aC7kEmqatcLmD7MoMcPbIZuB/vH8BXV+FNKk/4TFX1RIXaO3aW2iUlhDIGALZP3mw33scdsU++0XTtNma/s7SOG4ldRIUyAwHQY6Dp2qXRpyPiNBB1BtbiT8MpXgU8bVxSnVk7uSlq+iXRdEvTfXu0ds0o4uEEtrfinc9AmiE0EkTYw6lTn3GK8G10azZ+dDasoa2JWZVXL8cZFe8yypBC80hwkalm+gGTXj0NzJf6tdXr/ekZnP4niuGlinhYSrWTUej2fkfWYTK6GYUqka8bpWafZ/1uvQ88a0vrxxJcysT6yNk1798OormDwPp8dw27bu8o4/5Z7jt/rXKP4WsU1dZCGbzgHS3wNoPce4z2r0+3iEFtFCAFCIFwBgDAr0cwz3DY+lGlh4uys7tW76L9XscP1WlQj7m+xLRRRXjiILy6jsbKe6l+5Chc++O1eNHzdV1Ca4kOGkcyOfTJ6V6r4oCN4X1IOcDySc++Rj9a8503S76O3a6e2cQuoYMfT1x1xRWrOhhZ1IP3tkfSZK4UqM6jdm3YsW1sSVhgjyT0ArqbS1+y2kcROWHJPuags0h0zTvOmwjEbnPf2Fc/qOtTXE3mI7QRR5K4OPxNfOYHB18bUclt1b7nh8QZ5Qw8eSerey6+v8AW51+MdetU5blbfULZ3ydmWAx0J4BrM8O+K7DxFE6QO4uIVBkSRcEjpuHqKn1NnWaMgBlYFef4T6/yrvwOGqYfHeyrRtJX39P8jhrz5qPNCVvX8vnt6m2ty95qcJQ/dYAY/WuhrD0CHJlkeAQsmECAgge/wCNblehCLUpN9WxYduUFJ9QooorQ3OX8eC5TQ457aZ4xFKPM2NjIPH864TT7q8lmV5JPNjjOf3wD8+xPI/Ouw8bagJprTQ0fb5zB5mHUD+ED3J/pWTpWm207rArTRBBl1kUH8Mjv+FZY/FPD4XlXxS/LqfU4CSo4Je0W93t0NCwkW6jd3hddpwWQ5H5H/Gp0WJpMCfOTgDYc/j2p15dwaXGsESB5SuUijGc+5rnLDW0TV7e0u7hfNncCOPHzFs9MD+teNhMBiK1OVRQ2+9+iR8rjc0w6xcaEXq+2tvU6zQrETXzzyAEQHj03f8A1q6eq1jaCzt/L4LMxZiO5JrJ8W642i6WPIIF1OSkef4R3b8P5mvYwlBxiordm1GlOvUjThuxureMdN0i7Nq4lnmX74iAwvsST1q9DrtrdafBe2iS3EUsgjIRfmQ98j2ryqzsxMvnTEtuOQCevua9S8O6Wuk6SkQUK8h8xwOxI6flWrr0XUdKF247vp6Hq5jgcNhaKUW+f8+5bSf7TYwTmJ4jIUby5Bhl5HB96t1FcfcX/rov/oQqWmeIeUJtQYQH604Nk1Arc5qQHP0rxVTUdDGdaU9WDOc8VJETn0qFhnt+dSRnGPWulpclkcKb9pdl5Wzj0qTjjvUCHODmp41aU7VGT7V5jWtj2Iu6GGME5FPXjg81Ophhb5cSNnOe2COhojcR71CqQ4wdwz+XpTnOytJhTo3d4oYxBA9aTCv16/zqZSgUK0YIzkkdajaIjLqMoO/bmiKurpimrOzRXkh6kc1EvBxV0MCBuH41DLH3H511UsQ/gkedXwaX7yA0MfrTw34GoM4GCKcGFbuFzmjOxZVqlU++aqI+Dgmplf1/KuedNo6adVMshvanBs1EJMinAjFczgdcahIDg8VKpB4xk9qhAB9qs2IBvYFY4BcVNuaSRpC6NNNEYsjPNhcfMoHOa0rW2W1h8tWZuclm6mp6K+gp0YU/hQNt7lDWLUXemyxkZ46e3evIWKaVa2lveXAUyTGON25z1xn0r20jIwelcD4j8KrcrNbTKjWjvvjJH3ec4z2IPf0Nelgq8KUmqj912v8Aj/meNm2DdZRnFXt2OXkhCttkjQkdDkViazpccEb3kSjz1ImlTdksowM/hgV2i6JGExIvTpn+hrIOji28Qrfys5XyDDtPI5Of8a9fC42CneMtvx8j56lCrhqiqNW/rZnU2rM1gk8a796hwvqD94Vx/wARtNFzpkNyhyEkDr+PB/nW/Fe3OnahBaiF5rOWTYrgY8oHufatLU9P+2QMAwDK27lcgeoI7g9D+deFRxLwGOhVl8L1+Xme/Rh9Ywy5F70GtP8Ag9nrY8Mi0i6vAscCCRVdTLtPABPTPTsa9H0pLYT7Tgx2+AVXpnGcfyrTuNBuHurR7RhbQLnfCoBUgjHT2POaoXOjafo2o2UKai0SKZHuDO453AfMST6/h9K+jxOa08alFPo7Ja273+7T1PMxqrVqntZRslZJP/g2v32Oq0dMrJO3LyHJP9KmvXhkgdnYBYyepwM4rlNW8YWNhb/Z7adY4sY+0M3Leuxep+uMemaxre+XU2jiMdwUk/1ULf6yX1wg5Vfc8mvBpZVWrTeJqXiune39dOnU6quNVCisPBc3d9L+Xc7Wz1SwttP+0K4EW3cWByCPX8a898XeLZC7Ro2Lmb7qg/6pD0J9Cew/GrHiXWvsEcelQIs9/uHl2cQ3CNuxcDqR2QdO9Z3h/wANzm8a9vEa5vCxZ3b5kjPfn+J/foPc9PcwGAw+Hvi6vXa/X/gefXpc5KtWcqUY1dEtltdnManod3ZWttdT8famKoh+9nHp2r35h/Zek20MWMQokX5DH9K858R2n2zxD4c05MkPcFiDzwCuf5GvTbqNTasrIX5zgHB61x8QY328MMqnVt28r2R6GBdSWHnJaO242WNL20RmOACGqLSLARfEEvwTb6YVJ/3nXH6LVmIAWqiRVjUDJGeAKd4OgaWbUtTZi6TSCGFz/EiZyR7bmI/4DXiYGbjGrbZbfPQ7nC9anK2rWvyXb5mxr9zHaaBfTSfd8llA9SRgD8zXlujxMQePvMFHvXZ/EV2GkWiA4VrjkZ64U4rn/D6qZrQEccn8ea5M0n7PBWX2n+Wv6H3GWR9lgZVP5n+R2en6esurrduoKwRbY89mJ6/lW9VTTlxa57ljVujAprDQT7HzMoRjUk11dw7cVVW4kB5UOPQcEf41aqhINsrD0NaVZuFmgSuVb5P7UkWGRSLONgzIwx5zDoD/ALI/U+wplyAzuCOOmKuDrVW5jZCztjb1z7V5+LqTqQb7Gyle0eiOU8Tyt5kEOflwWI9+leY+KNXkad9PhO2NceYQeWPp9K6/xNrKxC5vScgfJCPU9v8AGvOrKE3lw8853fNlif4mPNfdcL5c4UIua2/N6/gfI0qf9oZjUrrVXsvl1/U0/DV5eaO8t3bFUklXYCyA/LnPf1r1zJvdNgmYBZWjV+nAJHPFcroHhRJ4Y73UM7GwyQdMj1b/AArsJDllijXJ4CqBXk8S47C1sVBYZe/Fvmkvyv1t9x9DiI04UfZrU3PDkezT3O4sxfkk+1bFU9NtDZ2axufnJ3N9auV58L8qvuOjHlpqIVWv76HTbCa8uCRFEu446n0A+pqzXM+PJAnhh1OcyTIo/PP9K0hHmkkdmFpKtXhTezaOK+2HXb+S51BcEPuSRByg7IR3UfmK63To3gtHuborKpGRIOu0ep6/nXG6Wha3AHV34/lXVazdNY6aEico7YRSPQda8PGzlicd7BbXsv1Paz3EwwlCUloop6enb1Zy+sawft0ctqXM80TxxlsA7vLcjHvnAFafwqsbu8t7rWdYEk13HKYbd7hP3kYx8+CRnknGO2K4i9CeLfEsOiJbuJt2xJ7cDAPVmdDxgeoIPHevddI02LR9JtdPid3SCMLvcksx7k5r7jFcmEwcaSVpSt8l/wAHa3qfCZTQfJ7We8nf7y7XlHjO/lvvEc0LcR2x8qMD9T+Jr0PXNctdDszNMQ0rA+VEDy5/oPU15TH5uo6jJdTcl5DI59yc4rx4TVGEq09kj7vIsO4ylXktErI39HtRLfW8WMomCfwr0uuM8MWhabziPvNgfQda7OvCylNqc31f9fmcWa1Oesl2Ip/uL/10X/0IVLUU/wBxf+ui/wDoQqWvXPLPHo2yKmX3qmhxzVlWz+NebONnc86nK6sTDkdaACfwpoPFLkZ680o3CdtyxE3PXk1ebMKCPozcnIIIrMjy8gUEZJ9cVaLPvKyMSw465rCrC2qOmhU0sywFGcA8inkEr1+tQo/U96ljy4YDnAya4JRdnc9KMoqS5RY5OMHqO9S4DDBbaD364qi52SEVYhcsvNZxdmdFWCcbjpUMT4+baRkZGM0isAMHkVJcA7Ec5yRnls5/wqvnAx+NdjSZ5msWJNEB0PHY1Dgg+1Wg4Aw3IPeopIscjpXRRrNe7I48Rh0/fiRjoeaej8etRd6cM9e9dmjWp5tnF3RZVuOKlB6YNUw+3jpU6yVzVaTWqOyjVT0ZaB5zV3T2330CEjBcfpWarelWbOTbeQnoRIv865VH302up3wnbZnaUUUV9AaBXPeM9U/s3QmVGxPcNsjI6r3J/Afzroa8/wDiNk3mmofu7H/PIrSlFOaTO/LKMa2KhGW2/wB2pX0m/uJ4445kDSSdgOCPcdvw49quMbBLgee3kyLzskbAP09fwqPQUH2iVsDKoAKp69dSNqLwnBiUAbGUFT3zg15GW4qpicRKGy1emlv8zzOJo4bBr2sY9Vpa6u9fl/WhYOp3Mt+q6fHHPAvyuW4Dn/ZP507XNZfR5bLybaS5aaUq0UZy5GM9Pb16V53D471eO7NraRWqR+YVXMRLBc+5r0bTvC2tah5d3c3UdlDcJmRMFp8HtnoPp29K+kxOU/V5wqV4rks1vq9OtvzX+RhllKU6cpValrtP/gIsXKxXECtEzFH5VUfYwP8AsnsfY8VzGo+CItebzZbmQTqMLK4JYjORuU9CPY4rur3TxatHHxtAG0+oFZGualPp1g1xbweZgHd6j04rxcvx2IpVVSw75Z362/r/AD89B4yhTi3Xnsuqve39fh2OFX4Th9QT7Vq7SKeX2R4Y/n0rpLvQRoujy2WiPHpkbria/k+aQ59+pPpVPxL4xn0bRopvs6y3UoAWUABVY+34Vzmha1d+I5XudUvTLLC2I4BhVTjrgfzr6WFPN8XD2+KmvZxeitv52Wj+enkeRicVho0eaim33f5f529LmrpWiWGljFokjM/+sml/103rk/wKfQcnua6SG5WGCc+WiBYiEVRgD2rMjdV6dar6vqEVtpeXYq0jEsR/DGoyx/p9SKdWEsRNKV22ePCvUcua+pQtPNvPGi3saGRNMtxlVI3FnJ6AnniuqOuXcvyC1dH90INa/wAO9Eax8Krc30K/a9Sc3UqsoO0H7i/guPzNddHDFD/qo0T/AHFA/lXLj6tKdblcVLk0Xy3/ABufQ4fL6kaUUpuOmtjh4NB1XW9qXjy2diSDIc4klHoo/hHua6PQyPLEEcaRwWyeXEiDGFJ4/QCtG9uI7SxuLmZtsUUbO7YzgAZNc3qWuQ6h4LutZ0WcmGcKqS7Cp2g7TgHoetcrc6kPdVo3tptd9zvwmCj7aNOL1el2c74y1VdY1mKytnDQ22VLDoWP3j+GMVe0C0AYzAfKg2J9a5jS0XbI/wDEDj6CvQdDttkVsnr87fzr53OKrq144aOy0+bPtcby4XDqjDZf8OzobePyoETuBz9akoor14RUIqK2R8m3d3Gu4jQsaoklmJPU1Le21zOVMF0sWOzRbh/MVi311Lo95ZR3l7FL9qk2BFh24H97O48Zx+dZVac6mxpSg5y5Yq7NSo5LuCJSJXXb6UlyQIGB78Vyuo2s13fQWNkrGWQFmYscAdOfQVyUVz1VBOxz4uuqFJzav5d76HKfEmwsvsKXFhd26osm6S3dtremUB6/SuW0LT5rnyLaNCXmbP0Hr+Ve46b4J0WxnN3NaR3l6wAM1wofbjsoPAH61q6hLaaZpdxcyRRrFFGTgIBn0H4mvscJnLwmH9jTXNLo3pq/LW/4GeBw/s5XjCzfRd2c1xHGoU8AYH0qxpCiXVYiwzjJ/IVz2lanJqEDCZVEiHtxn8K7HQLbaj3DDr8q/wBa+Mp0JU63JLe+ppiMPUp4h0qi+E26KKK9Q0CuJ+I1wosrG23fM0rOV9gMZ/Wu2ryLUr1td8RT3EhJiUkRr6IDgD+v41cJqmnVltFXPXyWg54j2j2hr/kXdBizPaLt6DcQfpmjxdfpbuzsfkt4ix57n/IrZ0a3SK0NyRl2zj2Arhdf8zUmt43JxdXsSSf7pbpXmcP0Fise6stl+v8AwLnicX4pVXDDL7b19E9fxaOq+FnhSSxtH8Q6gv8Apt8uYlPVIzzn6t/LFej0iosahEUKq8AAYAArM1vXbbQbeKa5jlcSMVURgdQM9zXs4mvPFVnN7v8ALsaYeg3anTV2VdR8I6bqt693dyXTSv6S4Cj0AxwKYngzTIkCRvcKo7bwf6Vnr8RdOLANZXajucqcfrWlpfi/TdWvI7SBLhZnzgPGMcDPXNY1qEqkeWorpHrThmVKGvMor7ka1rYw2YAizgLtGewqzRVa9slvokjaWWMK4fMbYJx2rGnThTXLBWR5UpOTuyS4+4v/AF0X/wBCFS1BbWy29pFb7mkWMABn6nHSodXv00zSbm7dgDGh257t2H51old2Q4Qc5KMd2eTkcAgfXmnxngH0pmefrQflHtXkwlzKzOKpDlfMiyD0oY4+aq6zBfelM6nIH5VrGnK5zTqwa3LKsCwyM1ZlwsqlfuEDBC4z9KzwwyOetWYX86TbNcbFRTtLAkcDgfjVSp3ViKdXUtBh1q1bSoiShwxLLhSD05zzVFXLLVhDhC3U15k3yHsUVztWHzpvAcdRSWztkpgn0FPDgrnt6VJCqoxlBBOfuk4P1FckfiPRu3Bpi3LYKJlDgclRz+NQZxzxTp2LNuY5P0qLJrsWup5c3qPznGTTg2OCOKjGM80oIptIhN9B7RBwdtQlWU81JnDcH8KkyGHzct9KuNWUPNGc6EKnkysenNOUnjnNSFfWoioRsetdcKqmrHn1aLpu7JlbtU0cm1lcdiDmq4wRkU4H5v6VjOKb0OinNrc9EVg6hwchhkGlrndA1XpZTtz/AMsmP8q6KvUpzU43O+MlJXQVyvj6ySfQRdYPmW0gKkejcH+ldVUc8EVzA8M0ayROMMjDIIrWEuWSZ04Wu6FaNTszzzw+7tcoT/FF81Z/iq4Ftd3U4GTHEDj1OOP6V6Bb+HLG0mMkBlQFdu3dkAfjzUsOhafDeNd+T5k5OQ8h3bfoOgrzstw8sNipVZr3ey9UYcQxWZRjCnorpu/bX/M86+HPw8mgnj1/W4tsv37a2bqCf43HY+g/OvV6K4zxZ4uit4HsNNmD3D5WSVDkRjuAe5/lXuYjEVsbV5pf8BI1wWCnWkqVJf13Zk6hr/23xkHDn7JBuhTaeCO5/E/yFdBBA19IscZGCPmPUYrlfDvha/1DbdlBDAR8jyd/cDqa9F0vTItLtREjF2P3nbqf/rV42Nw3tsUnHSMUtfvPYzT2FLlp0ndpWt/XUwr/AMC6beWv2d4I54c5EcxPy/QjpXE6v8N9G0hDdyLeWKswQSQXAkAJ9iM17DXAfEL7U97YQni1ZTtx3fPOfwxXsYfF16btGo0uur/J3X4HiYLK8Piq6pSSSe9tDiIPDU0bb7XxVM9uxxte2Lt9APWtr/hEb3UpoIJkk+ygqCZSqvLz3UcKuecckkDPTFa2h2SNMDj93CAQPU9q6630yZ7yG4klMcUXzCNern39q8pZ9jsZV9nTdl/NZJ2+SWr/AOG7jxGUYLA1VUhDma2v/XTc1Yo1hhSJfuooUfQDFPoorpIbuBAIIIBB6g1zfjSRLPwpNFGiKsjrGFUAAZOTgfhXSVz/AI1tGuvDFwVPMJWXHqB1/nWlJ++rnVgeX61T5u6/M860sfupG9TXpWjEAw/9chj8hXEaJpsl08NuiEk/M5A6CvRbKx+zkOxGQMBR0FfPzU8Tj3VgvdT39ND2c5rQb5b6l2iiivcPnArzDx5M0vidYlJzFEij2J54/MV6fXK3fgtb/WZtRuNQfMj7gixjgdAMk9hWlOfJeXW2nqenlVelh6zqVHbTT1JUvPtdjbyZ5K/N/vdDWrpunrbs9y4/fSqF57KO365punaHa6chCl5WJyTJ/QVpV5uFw84PnqbnDiPZyn7u17oK4b4i30iRWdipxHJmV/fHAH867mvP/iPLGbnT4QQZVR2YegJGP5GvUw6vUR3ZPFSxkLq+/wCRhadH5UEZT7zENn3r1Wxt/stnHD3AyfrXnvh3RrzUraCRE2QA8yPwOD29a9KrysNTmsRVnPu/zN86nGVVJO7V7hRRRXeeKMlOIZD6If5V4xpYzNIf9n+te0tgI2emDmvHtHtnnnYRgkyvsQevNZYuSjg6nnZfifQ5JJKnVv5fqddbyCy0MSvzhC2Pr0FZnhvw++qajbXk6Ys7WUS8/wDLRx90D2B5P0rsk0O2e3iiuV81Ux8mflOPX1rTREjRURQqKMBVGABWOVU54WlJvSUvwX+e58tmFD63jY1pP3YXsu7f6bDq81+IGpC51WKxQ5W1X5/99sfyGK9KHWvG7+I3XiW+3g4+0OWyMcZr0aU401KpPaKufR5FTi68qkvsr8ySC1ha2j3xKSVGcitDRbUW+uWc9ujh1lAwvQg8H9M1paLZrg3Ug4XhB/M11ekQSeV9oniEbP8AcQ9Qvqfc181hauKr1m4SaV9ddNfI6sbmcacnS3umadFFFe+fNBXnPxEvJm1K3s937lIhJtB6sSRk/gK9Grzj4gWM41iC7IzbyxrGrD+FhnIP55rfDtKd2etknL9bXN2djnlcY9aBJzj86iBpD7fWvChFXszwqsnZNCXKnbuQkAdQKpCVo23Kdy9xWh1XGKpvbhWLRng9RXs4KtHl5Jnz+Ow75+eBbgnEqgg1bVgOaxULJIHUEc/MK0opARnNTiaKjrHYnC1ubR7mxbXW2MRtGjIuTg9yfU1bR7cggKw4Hfv3rJiIIqxG3zeleJiFe59HhZWsaazpCGMUYPzEjPoR0qASnrgCo94zjvUbAqwPY1ywSlodtWU46lhn4x60zIHXpUIkGOTTt3txWyhY5HO7JfSl3cfzpgZSOeKCeeKCdiT37U4MQcVGDj1pcjvUstakuR+dMdCcEdaTOO3FPDDFKMpQegTpxqKzGqwAAP40/A7dKX5Wz607ywD+FW6qepEaDWm5ESytx2rWtfEGoW6KjCK5UdpCVb/vr/EVRVRnBp+welXHFyh8JdLDunLmT+RqDxtBGcXWm3kR9U2uP5ilHjzRc4b7Un+9B/8AXrLVUxiRA6HqpqD+zra4cpDcbJR1ilHP/wBetlmcldyp3S7P/hz16P1CVlVXK356P0vf7jZbx/ooB2i6b6RY/rWbd/EdNuLLT2Lf3pn4H4D/ABrOm0GZW5tkk91xTY9IuA2Esyp/3QK0WdYdK6g7+p6lPB5fHW1/VlG71nW9bytxcukJ6og2J+Q60WelK0qpGhlkPTPatyHQpnwZpFQeg5Na9taQWUZEYx/eZjya87FZvWr+7H3V2X6s1q46nShy0kkvLYml8W2GmvDa38csUnlqcxpuT0479qlXxnoDLn7dt9mjYH+Vcfrt/Fe3KRpteGLvjqaz4La1uZJI4IkkkjALqnJXPTI7V7Kruhh4TrwldrW369j5/LsRlePqTpRk1KL7rXzV+nT/AIc9AbxnoCjP28H6Rsf6VyvinxXaaobaCzjZ4opPMaR12knGMAVn/wBjhulm/wCCmkGiYYH7JN+INZrNsE001L8P8z38PgsFQmppttd2jqdFe1tLGKeZwsZbdIx7HOB/SuqF3bFA4uIdp7+YMVwUFheT6dcWxUxg4Zd4xkjtXBareSaf4hWxvYTFE5UeZ6fh9aeQYaNenOMH7yu7dbJL7/kfO4qpH+0vY13y02tJWv719vu/I95N7aAZN1AB/wBdV/xpjanp6/evrUf9tl/xryi00aO7QPAHnU8bkxitGPwsx626L/vPRVzLC05OL5rryt+bR6jyvDR3q/gv8z0J9Z0uNSzajaBR385a5Dxl4ptrizGnadOswkOZpE6YHIUHvnvWf/wibZ/1cQ+jmj/hF3XGIYm/4HSjnGDi72k/u/zNsNhMFRqKo5tteh0PhbUtOt9GeWVxC4+eV2Hbt+FbUPiDR5/9XqVqfrIB/OuUstHlQSibaqtGUCg568Vykunwx3bWjThbhf8AlmeSfcetZ5di6MqclPRR2sr6ef6s5p0MJWxThObTlqnpb09e3lfseyJPDKAY5Y3B/uuDUleLf2ZIpykygj0BFPFjcHrdt+DNXb9bwe/tfwZs8jp9Kv4f8E9mJAGSQB6mqV1rGm2X/Hzf28Z9DICfyFeVppN1KMedM4PYBjViHw3KxyYJmz6/LWUswwUft39E/wBSVlFCPx1fwt+bO7k8Z6DF/wAv2/nHyRsf6VVk8faKv3BdSf7sWP5mucg8NOGGYYkGeSzZNaS+HYQg/wBICtz0Tj2rneb4f7EW/Vpf5jeEy+G7b+f+SC6+Ig2lbPTJCx6GZsD8hXIXJvdXv5Lq6Lb5DlmIwAPQCuvTQF2/Pc857L2qaDQ7WP5pHaRgOh4BNZSzySj+7gk/W/8AkdVGvhMLd0Y6/N/mWbTxTp+m6Vaxz21xDGiCNWSPcpx71ZXxvoLED7W657tC2KqalJFa6TKwIUhNqrjjPQVytnZWd8yxtETKckqgwcY610YTFylh/aVYNpbtNfijxlWyyWJ9hWbjN6rXe7fdb/md/F4o0Ob7upwD2clf51ZTWdLkXcuo2hH/AF2WvPD4ctwvzLdK2BgBSR157VAugRF5Mx3BUZ2kqef0rV5jgrX5n+B3vK8I/hm/wPSptW0sW7tLqFqIiCCfNU8V574UuIE1mBAT5ccrYJHVecGg+GYGfCRXABbhiMcY+nrmrGn6E8Of3ckT7gQxPUfWubF47DTpcsG3K6ava2nzN6NDD0KM4qbfN/wf8ztbvxDpFixS4v4UcdUBJYfgKzX8d6GjYEs7+6wn+tc94g0i1Uz6g7NuI4UZ+ZqyNOt9M1m3kl0pJZxHJtfcpXbkZAOe9dscTS+rLEOMmurWyfb/AC7nmYOGX1ZulUclNdLr715fj5HeJ430F+t26cZ+aJq43X9X02411ruwDNHLGPObbtyw7gH2600+G5D/AMuso+jVH/wjsgPNvP8ASsJZll9SDjLms/67ntYbDYLDzc4SfbdHXaFd2y2MExIMSKdx6496vXPjDQ7ZNxvN5IyFjQkmuf03TJ0jmSTdDE8ZTb3Pv+Feaare3CeKUtd7C1hxvwPvr3P9KvhzDLFe0pw6a+dv8z5rHVI08yp05K9OV7tb/wBa6np1z8R0DEWunMy9mlkxn8BUKfEibP7zTIyP9mUj+lY0ekrNbx3CWbmORQynB5BpjaVGTjyHB9Bmh5tg4ycZQkmv67n00MHlzWkL/N/5nRp8SIcDfpkgPfbKP8Kxtf8AF02uRx2sVsIIA4YgtuZiOnPaq66JvHy2sxz3ANPj0V4HDi1mz2yCcUnnGCSbjF3/AK8y6eHwFGfPCOq21/4JiI4I4PFSdjVVWC8Z4p5mSJC7ttAGSa5XF30PhYvmVmTqeMZ/CqjzhJ/L71XbV4QSRFIR65FZ76jH9qMuyTr04r0sJRu3zdjzcdGfKlHubuRQZfLYMOhPIrMGrxEcxSfmKQ6mkmBscflXTTp6+9scFSE7e6tToopeMVbWQAda5+DVIPlVldB/ePNaykY4IrzK9FXPUoVJwSuXvtGBz1pDcBuCeKphuPSmluOawjhoms8ZNIu71JwfwpwPTms4TNjrUglPY1q8KznjjYvdGkDjvShvzrOWZxxmpknYdaxlhpI6IYuDL24Glz261UE2ev4U/wA44rB0ZI6FXiyfJpwfHeq/mUu8UezfUXtV0LAf0608P7mq6sKeCO/Ws5QsaxqXLAc+uTTxI1Vw3vTx7Vk1Y3TuTeYR3rJ16K7ZYb2xTzJoch4gcGRPY9iDyPxrS3CkyM8VthcRLD1VUir26PZ+RnXpQrU3TmrpnPWXxCEA8q73xsONtzGcj8RWxD42guABCbZz7S/0qHU9KtdUhKzIBJj5ZMcj/GuC1PwjdWrlo0JXsyAsv+Ir6zBYPJMze3s59m/y2v8AmcEsJi4RtQry9HZ/n/mejyeKLjYSI4EHqSTXO6r4ugGRc3vmkH/VRc/oOK4FtPvPu/eA/wBulj0qZj85VB+dfQYXhbCUJcyX4fq7nBPL8diPdr1JSXbZf5GlfeKby6Jis08hDwCOXP49qseHb3UtBu3uYLjDS4EsTDcH57+/0punaO8kgW1geVzwXx0/HoK7TSNCj05hPclXuR93+6n09T71pmuNyzLcNKnVipN/Y3b9fLzfy1Pay/KqeG1Ss/L/AD6l268ZvYCAXqQ2zTLuRZQwJH9KgHjyGQfJdWQx/tH+pqTVra01Oye3uYkc4+Rn6qfUVwc3hZ1J/cNgd0fINfJZPhsmx1NuslTmujas+1r/AIkYjLcdd+yryt8v8jtz4ukkXK39qAe6la4/xPr1tdRiNJFuZzIHaTqFx7+vasxvDj84WUfVQaE8PsCNyzN7bcV9VgssyzCVFUp1I/JxR56ybGSqRlVnKVtVd6XOy8NavLbaXttp8eYS7IwB2k0zVvGV5YS7JBduCMh0wqn8ax7KznimjYL5apjr6elajF5sqOB3Jr5bNZ4TCZlKquWtGer2um+nMr/1959HiMsWNguaUotdm0n8roz/APhYMmc7bzP/AF2qxD8QFPDTXsfucN/Wq8uhozZTyyOuGWqU3h8jn7KrD1jr6CgsgxSSjKKb6PR/ieNPh6cfhm/vf/BOlh8fxY/5CRHHSSL/AOtWTqviWylxeRXQlv4nEsLKpyHH4dMcH2rJGiAnAs5SfoatQ+GpJT8tmi/77Yro/s7KMHLndSMfnFXXb0MlkWIlKLlVk+V3V23+h2uieNrLWIczacFmUZYIAw98ZrYXX7BB8lq4+iKK4zS/DN3FdROJI4FRsnyzzRr/AIRy0l9pr3SyM+6SNJOOepA+vavlMTl2Q1McqVGdoy7NtJ9m2+vr+h6eKhmKV6VVejR1k3iaXkQ2wUernP8AKq3/AAkN/nOIvpsrzOTTLxfllubsD0YNTE0m8zujuLj6hWr34cJYOEdOX8/zZ4tTB5xN3dZ/Ky/JnqB8RXxGNsQP+6f8ary63fv965KD/ZAFefLo2ssNomvMHoNr1ZtfDGp+YzlZmLIyHzG28MMHvUf2Bl9HWU4L7v1ZhLL8znpUxDS9f+CdrB4i8nIku977+vmj06VatvE1xGuGaKbOCC2M4/CuZ/4R7VpJRct5IbKkjzMAkKVBIHfDGq/9galaxiNEQqEVOJM5CsWHX3J6VjLAZTVdvawv8jaOV4ylZxxDX9ep0mp+IIJkJu3jQIrnBYYGehx7VxD+LpU8TRajaQSx28IKxwDknK4JPrnrTn0e7hubid7eYNOpDcZwD6Y+n+OauxSXwTYtrkb9/KHOdu3rn0r2cJl2DoU2k4yi1bdW137l4fLJwq+2q1FKXd2O2s/F0k1pE5t43cou4g4578Us/i7y1bcsEfBwXYcc8d65m2hnMLLcbIw0apgEk8d+vH0rnbnS5rK9uWEqyLcoVJaLPB6gc8V49PJMsr4iVKnb7vye2hM1ip13TpYltei/PqddceP4REEF7mTJyYYt2fbpTI/iPbC5iJkuPL43K0P3q5W1VrW2WBQWRSxG4d2UqensalSORpY5BbF3jZHQ7W42jA6dsV6v+reXwVnBfh/kdCyzErV15X/xHUXXjXTLuFmnlLgKSq7SNpz2GOfSsPQPEjxapdLpdv8AZhcXHmMjgEbfTHY1QXT7wLtSO4xsKAEMQAXDn9anisrz7a1wYnWd33tIVxVxy7AUaM6V42aejat5aeupWGwM6FV1ZVLtrdtdjtz4ivs/fiHttqVPEt2B80UT++CK851uwjuL4yh2R2A3Y5BrO/syQDCXTgfj/jXl4XhrB4uipxSXy/4J5uFo5lWjz0sQ3bTX/gs9Wn8RXcsTIkaR5GCwyTXA65d251e3hVlLiNlcjtk8D+f51j/2bMf+Xtz+f+NLDpkcUiu8u4qc4xgV7OWZFRy+pz02l/XqdVDAY361CvXqczjtey/U9E8OeM3+yrZ3MCs8KhUcPgsPp7VtP4qUDi2wf9qQV5VIF3ZUjPcCqklrFJIXcuAeuGrwcRw3gJYmXPpfXS9tfmrGdfFY6nWdL29l6J/iel3njdYs7rq1h9gdxrOPxDjBI/tAn6Qf/WrhltbFeNrE+5p/2exbjy8fnXo0uHMpiuV2f3frcaw9WbvPFu/lKx0IJyKivlaW0OwMSpDEY6inqe4PNSBgBXw97NHoxVtTIQWpiBeWUSY5AjBGfrmkjurSGGNZbQSOrsWbjkEdOa1wI2+Zo0+pUVJ5ULLzFH/3wK6IYpQewpw9otDBuLy1nSJYbQQMkQViDne2eW/KrFpdW8UCK9qsjhiSWxg5BA9/T8qlu7f7O4kRVKE8jaOKltpYpAMIh/4CK9FtTp88NjyPb+zqcs1qVpJVlMSxwhSqBSF6sfWt+33R20aN95VA/GoIWTkqqKfYYqZWx1rz5tvSx1SqKS0JtxNLu6UwOMCnBhWSeuxLjdbjT1zzSEkc9qUnke9ITla3jI5J0x8Um4dasK4PWqDKyncvDenrU0dwpYBhtPoaVWnfWI6NXlfLLRl4EGlHXvUKPnHPNSq/NcEm0erCMZEgB/DHpTgCaZuJHFLluPWsnJmqpxXQlA755p64HWoAST1pQcfeOKzk+7NYRbekSyGA7mnbx36VU3j/AGjQZ1ABx+tYtw7nVGnVf2S9vQ9aaWHaqRvAD0GfrSfbvZajmRr9XqNF4Nnk0qt04qiL0/7OcU77a49BQ6go4SSJLmwsJgZLi2jZvXbg/pVJbDTY3LR2Mef9slv51LJO8h5b6VCzHPpW8cwxcY8kaskuyk7fmdlOkorUtG7aNNqlUUdFUYFV3vc5yxOfSqsjIv3myfrUJnxwoxjua5OW+rOiMEWWuWOMDHuarvLnqxNQmQ5Gc8+tKEd24qrWNEkhxct/hScgZIqdIQnJ/wD1U15VGVQZPrR6D5uwzOR0xmnqegA5pERm56D19amXEZCqOT61TlYAVQoGTk1MowMn8qaqkHJ60uecf5FZPUVx4JY+2auQxgLx1qvEpPAFXogcbRUMznMtQkBeBx3PrSvLkgDpULy+WAgqASEtzXXSw7aueJiMWuayLRfPXt2pPM2niq7zheB+dQiXOa2hh3JXZyzxUYuyLU83GM81FGdzYqAyEtU9vwT9K2lBUqZzwm61Unkk2rnv0Aqq756miVyXx6cVVnmEcRbPSlh6Tdkt2XiqyV29kQ3dwFYLnmq6z4QFjz7VntMzS727nAqOefqFz9a+mhg0oqJ8pPETlNyLzTF2OTtUdqckmXA3cEVimdy2MmrdtKWYbjyDWtTD8sSE5KV2bC8kZ6VLu96pS3Cwx7ifp71SOos7BVGST615Sw1Srqtj1ViIUlbqbRl5qtLKQrHjFRhzsGeDVe8mKwn34rKjQ99I6KuJ9xtmReNFLNgykEk844pu2ABR5xIJHUY+tVZSWk5PemO+1q+qjBqKSZ50Z6WSX4/5mkph8rBlxnGeOnrWftgF3EHctESDJjsM8/pUfmkPg96idvm/rVQptN67jg0n8KNsnRxk5AHmDpu6cZx7daq3racbR/szfv8AzOMbunfr2/Ws0vhTUZb5Rk1EcPytPmf3nU6/MmuRL5E8whjdBDKZAVBJIxg+lMyeuarFjmjzMGujlaRlKN3c/9k=";var Rd="data:image/jpeg;base64,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";var dt={hero:10,sobre:-30,hyp:-72,ccd:-112,trinity:-150,ws:-185,finpay:-220,jovi:-255,breve:-290,contato:-322};function Cd(i,{mobile:e=!1,links:t=[]}={}){let n=new $o({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});n.setClearColor(0,0),n.outputColorSpace=Et,n.toneMapping=Sr,n.toneMappingExposure=1.05;let s=new is,r=new kt(40,1,.1,95);r.position.set(0,.6,10);let a=new is,o={uTime:{value:0},uA:{value:new Ne},uB:{value:new Ne},uC:{value:new Ne},uSunDir:{value:new R(.5,.4,-1)}};a.add(new Ke(new Hn(50,48,24),new Rt({vertexShader:md,fragmentShader:gd,uniforms:o,side:Ot,depthWrite:!1})));let c=new bs(160,{type:sn,generateMipmaps:!0,minFilter:Cn}),l=new ps(.1,100,c);a.add(l),s.environment=c.texture;let h=new bt;s.add(h);let d=new gr(14674175,726320,.7);s.add(d);let u=new fs(16773340,2.4);u.position.set(-5,6,6);let f=new fs(9430015,2.2);f.position.set(6,1,-5),h.add(u,f,u.target,f.target);let g=e?.6:.4,x=Math.round(90/g),m=Math.round(72/g),p=new Float32Array(x*m*3);for(let D=0;D<x;D++)for(let Q=0;Q<m;Q++)p.set([(D-x/2)*g,0,4-Q*g],(D*m+Q)*3);let M=new yt;M.setAttribute("position",new Dt(p,3));let _=[0,1,2,3].map(()=>new gt(0,0,0,-99)),S={uTime:{value:0},uCamZ:{value:10},uRip:{value:_},uHover:{value:new R(0,0,0)},uLevel:{value:0},uScale:{value:30},uMoonX:{value:9},uColor:{value:new Ne(3825576)},uGlow:{value:new Ne(15722970)},uFar:{value:66}},b=new Rt({vertexShader:xd.replace("floor(uCamZ / .4) * .4",`floor(uCamZ / ${g.toFixed(2)}) * ${g.toFixed(2)}`),fragmentShader:vd,uniforms:S,transparent:!0,depthWrite:!1,blending:Wn}),T=new Js(M,b);T.position.y=-2.6,T.frustumCulled=!1,s.add(T);let P=0,v=new $t(new R(0,1,0),2.6),w=new Hn(1,64,32),C={uDawn:{value:0},uTime:{value:0}},L={uDawn:{value:1},uTime:{value:0}},F=new Ke(w,new Rt({vertexShader:Wl,fragmentShader:ql,uniforms:C})),H=new Ke(w,new Rt({vertexShader:Wl,fragmentShader:ql,uniforms:L})),N=D=>new Rt({vertexShader:Sd,fragmentShader:yd,uniforms:{uColor:{value:new Ne(D)},uAmt:{value:.55}},transparent:!0,depthWrite:!1,blending:Wn}),z=new Ke(new tn(1,1),N(12571903));z.scale.setScalar(26);let j=new Ke(new tn(1,1),N(16747082));j.scale.setScalar(60),s.add(z,F,j,H);let J=Tt.chrome(16777215,{side:Ft,roughness:.08,iridescence:1,iridescenceIOR:1.9}),ie=nc({mat:J});ie.mesh.position.set(0,.3,-5),s.add(ie.mesh);let Z=nc({n:200,width:.08,mat:new jt({color:16735007,side:Ft,toneMapped:!1})});Z.mesh.position.set(0,.3,-5.4),s.add(Z.mesh);let X=nc({mat:Tt.chrome(16769712,{side:Ft,roughness:.08,iridescence:.8})});X.mesh.position.set(0,-2.1,dt.contato-15),s.add(X.mesh);let V=Ad();s.add(V.group);let he=new pr,le=[Pd,Rd].map((D,Q)=>{let ae=he.load(D);ae.colorSpace=Et,ae.anisotropy=8;let k=Xl(ae);return k.group.userData={i:Q,hover:0,bounce:0,ph:Q*1.7},s.add(k.group),k}),qe=le.map(D=>D.face),Ve=[0,1,2].map(D=>{let Q=bd(7+D);return s.add(Q.group),Q}),Ge=Td();s.add(Ge.group);let Y=_d();s.add(Y.group);let ee=wd();s.add(ee.group);let fe=Ed();s.add(fe.group);let Be=jl(16735007),Se=jl(9430015);s.add(Be.group,Se.group);let Le=[{o:Ge,z:dt.trinity-11,side:1,bounce:0,spin:0},{o:Y,z:dt.ws-11,side:-1,bounce:0,spin:0},{o:ee,z:dt.finpay-11,side:1,bounce:0,spin:0},{o:fe,z:dt.jovi-11,side:-1,bounce:0,spin:0}];Le.forEach(D=>D.o.pick.forEach(Q=>Q.userData.obj=D));let rt=Le.flatMap(D=>D.o.pick),ne=new vr,se=new de,ce=new R,oe=null,me=0;function ze(D,Q){se.set(D,Q),ne.setFromCamera(se,r);let ae=r.position.z;if(Math.abs(ae-dt.hyp)<22){let k=ne.intersectObjects(qe,!1);if(k.length)return{type:"screen",i:k[0].object.parent.userData.i,g:k[0].object.parent}}if(ae<dt.ccd-20){let k=ne.intersectObjects(rt,!1);if(k.length&&k[0].distance<30)return{type:"obj",it:k[0].object.userData.obj}}return null}function Oe(D,Q){let ae=ze(D,Q);return ae&&ae.type==="screen"?{type:"link",href:t[ae.i]}:ae&&ae.type==="obj"?(ae.it.bounce=1,ae.it.spin+=6,{type:"obj"}):(se.set(D,Q),ne.setFromCamera(se,r),ne.ray.intersectPlane(v,ce)?(_[P++%4].set(ce.x,ce.z,1,me),V.pulse(),{type:"sea"}):null)}let Te=!1;function Xe(D,Q){n.setPixelRatio(Math.min(devicePixelRatio||1,e?1.3:1.6)),n.setSize(D,Q,!1),Te=D/Q<.8,r.aspect=D/Q,r.fov=Te?60:40,r.updateProjectionMatrix(),S.uScale.value=Q*(e?.1:.075),U()}function U(){let D=k=>Te?k*.32:k,Q=k=>Te?k*.7-1.9:k;V.group.position.set(D(5.2),Q(-.4),dt.sobre-14),V.group.scale.setScalar(Te?.5:.75);let ae=[[2.5,1,0],[5,-1.5,-1.8]];le.forEach((k,$)=>{let[ue,Pe,xe]=ae[$];k.group.userData.base=Te?new R($%2?.9:-.9,-1.2-$*.9,dt.hyp-9):new R(ue,Pe,dt.hyp-12+xe),k.group.scale.setScalar(Te?.62:1.1)}),Ve.forEach((k,$)=>{k.group.position.set(D(-4.6)+$*.55,Q(-.2)+$*.45,dt.ccd-12-$*.9),k.group.rotation.set(-.05,.32,.02),k.group.scale.setScalar(Te?.55:1)}),Le.forEach(k=>{k.o.group.position.set(D(3.7*k.side),Q(.1),k.z),k.o.group.scale.setScalar(Te?.62:1)}),Be.group.position.set(D(-5.5),Q(.4),dt.breve-12),Se.group.position.set(D(5.5),Q(-.4),dt.breve-13),Be.group.scale.setScalar(Te?.5:1),Se.group.scale.setScalar(Te?.5:1),ie.mesh.scale.setScalar(Te?.5:1),Z.mesh.scale.setScalar(Te?.5:1)}let st=[...le.map(D=>D.group),...Ve.map(D=>D.group),...Le.map(D=>D.o.group),Be.group,Se.group,V.group],Ye=0,E=0,y=new R,B=new R;function q(D){let Q=D.time,ae=D.dt,k=D.camZ;Ye++,me=Q;let $=Math.sin(k*.04+Q*.12)*.6;r.position.set($+D.mouseX*.8,.6+Math.cos(k*.03+Q*.1)*.25-D.mouseY*.4,k),r.lookAt($*.3+D.mouseX*.2,.1-D.mouseY*.15,k-12),r.rotateZ(Math.sin(Q*.17)*.012+D.vel*3e-4),h.position.set(0,0,k-8),o.uTime.value=Q,o.uA.value.copy(D.envA),o.uB.value.copy(D.envB),o.uC.value.copy(D.envC);let ue=D.dawn,Pe=Te?12:27,xe=Te?31:16.5;F.position.set(Pe,xe-ue*6,k-70),F.scale.setScalar(2.6*(1-ue*.9)),z.position.copy(F.position).z-=1,z.material.uniforms.uAmt.value=.5*(1-ue),H.position.set(Te?12:30,-7+ue*(Te?5:8.6),k-80),H.scale.setScalar(5*Math.min(1,ue*1.5)),j.position.copy(H.position).z-=1,j.material.uniforms.uAmt.value=.9*ue,z.lookAt(r.position),j.lookAt(r.position),o.uSunDir.value.copy(ue>.5?H.position:F.position).sub(r.position).normalize(),Ye%3===0&&l.update(n,a),u.color.setRGB(1,.94-ue*.1,.86-ue*.3),S.uTime.value=Q,S.uCamZ.value=k,S.uLevel.value=D.level,S.uMoonX.value=(ue>.5?0:Pe)*.9,S.uColor.value.copy(D.envB).multiplyScalar(2.4).lerp(new Ne(5932760),.5),S.uGlow.value.copy(D.envC),se.set(D.mouseX,-D.mouseY),ne.setFromCamera(se,r),ne.ray.intersectPlane(v,ce)?S.uHover.value.set(ce.x,ce.z,Math.min(1,.35+D.mouseSpeed*2)):S.uHover.value.z=0;let ge=k>-14;ie.mesh.visible=Z.mesh.visible=ge,ge&&(ie.update(Q,{amp:1+D.mouseY*-.3,lvl:D.level}),Z.update(Q,{amp:1.05,lvl:D.level,phase:.6}),ie.mesh.position.x=D.mouseX*-.4);let Ie=k<dt.breve-10;X.mesh.visible=Ie,Ie&&X.update(Q*.7,{amp:.7,lvl:D.level}),V.update(ae,Q,D.level),(E+=ae)>.06&&(E=0,oe=ze(D.mouseX,-D.mouseY)),le.forEach(Ee=>{let I=Ee.group.userData,pe=I.base;if(!pe)return;let te=oe&&oe.type==="screen"&&oe.g===Ee.group;I.hover+=((te?1:0)-I.hover)*Math.min(1,ae*6),Ee.group.position.set(pe.x,pe.y+Math.sin(Q*.7+I.ph)*.15+I.hover*.15,pe.z+I.hover*1.2),Ee.group.rotation.set(Math.sin(Q*.5+I.ph)*.05-D.mouseY*.1*I.hover,(Te?0:-.28)+Math.sin(Q*.4+I.ph)*.08+D.mouseX*.25*I.hover,Math.sin(Q*.3+I.ph)*.02)}),Ve.forEach((Ee,I)=>{Ee.group.position.y+=Math.sin(Q*.8+I)*.002,Ee.group.rotation.y=.32+Math.sin(Q*.3+I)*.06+D.mouseX*.08}),Le.forEach(Ee=>{Ee.bounce=Math.max(0,Ee.bounce-ae*1.3),Ee.spin*=Math.pow(.2,ae);let I=Math.sin(Ee.bounce*Math.PI*3)*Ee.bounce,pe=oe&&oe.type==="obj"&&oe.it===Ee,te=(Te?.62:.86)*(1+I*.2+(pe?.06:0));Ee.o.group.scale.setScalar(te),Ee.o.group.rotation.y=D.mouseX*.3+Ee.spin*.1}),Ge.update(Q,Le[0].spin*.3),Y.update(Q,1+Le[1].spin*.5+D.level*2),ee.update(Q,Le[2].spin*.2),fe.group.getWorldPosition(y).project(r);let ke=Math.hypot(y.x-D.mouseX,y.y+D.mouseY);return fe.update(Q,Math.min(1,Math.max(0,1.1-ke*1.1))),Be.update(Q,0),Se.update(Q,2),st.forEach(Ee=>{let I=Ee.userData.cz??Ee.position.z;Ee.visible=I<k+6&&I>k-40}),n.render(s,r),B.set(r.position.x,r.position.y,k-900).project(r),{horizon:B.y*.5,hot:!!oe,hoverScreen:oe&&oe.type==="screen"?oe.i:-1}}return{resize:Xe,update:q,click:Oe}}function Id(){let i=new(window.AudioContext||window.webkitAudioContext),e=i.createGain();e.gain.value=0;let t=i.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=3;let n=i.createAnalyser();n.fftSize=512;let s=new Uint8Array(n.fftSize);e.connect(t).connect(n).connect(i.destination);let r=i.createDelay(1),a=i.createDelay(1),o=i.createGain(),c=i.createGain(),l=i.createBiquadFilter(),h=92,d=60/h/2;r.delayTime.value=d*3,a.delayTime.value=d*2,o.gain.value=.42,c.gain.value=.35,l.type="lowpass",l.frequency.value=2600;let u=i.createChannelMerger(2);r.connect(l).connect(a),a.connect(o).connect(r),r.connect(u,0,0),a.connect(u,0,1),u.connect(c).connect(e);let f=(()=>{let X=i.createBuffer(1,i.sampleRate*2,i.sampleRate),V=X.getChannelData(0);for(let he=0;he<V.length;he++)V[he]=Math.random()*2-1;return X})(),g=i.createBufferSource();g.buffer=f,g.loop=!0;let x=i.createBiquadFilter();x.type="lowpass",x.frequency.value=500;let m=i.createGain();m.gain.value=0;let p=i.createOscillator();p.frequency.value=.09;let M=i.createGain();M.gain.value=.05,p.connect(M).connect(m.gain);let _=i.createGain();_.gain.value=380,p.connect(_).connect(x.frequency),g.connect(x).connect(m).connect(e),g.start(),p.start();let S=i.createConstantSource?i.createConstantSource():null;S&&(S.offset.value=.07,S.connect(m.gain),S.start());let b=X=>440*Math.pow(2,(X-69)/12),T=[[50,54,57,61,64],[47,50,54,57,64],[43,47,50,54,61],[45,49,52,56,59]],P=i.createGain();P.gain.value=0;let v=i.createBiquadFilter();v.type="lowpass",v.frequency.value=900,v.Q.value=.7,P.connect(v).connect(e);let w=i.createOscillator();w.frequency.value=.05;let C=i.createGain();C.gain.value=450,w.connect(C).connect(v.frequency),w.start();function L(X,V,he){X.forEach((Ve,Ge)=>[-6,6].forEach(Y=>{let ee=i.createOscillator();ee.type="sawtooth",ee.frequency.value=b(Ve-12*(Ge<2?0:1)),ee.detune.value=Y;let fe=i.createGain();fe.gain.setValueAtTime(0,V),fe.gain.linearRampToValueAtTime(.022,V+1.6),fe.gain.setValueAtTime(.022,V+he-.8),fe.gain.linearRampToValueAtTime(0,V+he+.6),ee.connect(fe).connect(P),ee.start(V),ee.stop(V+he+.7)}));let le=i.createOscillator();le.frequency.value=b(X[0]-24);let qe=i.createGain();qe.gain.setValueAtTime(0,V),qe.gain.linearRampToValueAtTime(.12,V+.4),qe.gain.exponentialRampToValueAtTime(.001,V+he),le.connect(qe).connect(e),le.start(V),le.stop(V+he+.1)}function F(X,V,he=1){let le=i.createOscillator();le.type="triangle",le.frequency.value=b(X);let qe=i.createOscillator();qe.type="sine",qe.frequency.value=b(X+12);let Ve=i.createBiquadFilter();Ve.type="lowpass",Ve.frequency.setValueAtTime(3800,V),Ve.frequency.exponentialRampToValueAtTime(500,V+.4);let Ge=i.createGain();Ge.gain.setValueAtTime(0,V),Ge.gain.linearRampToValueAtTime(.09*he,V+.005),Ge.gain.exponentialRampToValueAtTime(8e-4,V+.9);let Y=i.createGain();Y.gain.value=.25,le.connect(Ve),qe.connect(Y).connect(Ve),Ve.connect(Ge),Ge.connect(e),Ge.connect(r),le.start(V),qe.start(V),le.stop(V+1),qe.stop(V+1)}let H=[0,2,4,1,3,2,4,0,3,1],N=0,z=0,j=0,J=null,ie=!1;function Z(){for(;z<i.currentTime+.15;){let X=T[Math.floor(j/2)%4],V=N%10;V===0&&j%2===0&&L(X,z,d*20),V===5&&j%3===1||V===9&&j%2||F(X[H[V]]+12+(V===7?12:0),z,V===0?1:.7),z+=d*(V%2?.92:1.08),N++,N%10===0&&j++}}return{start(){i.resume(),ie||(ie=!0,z=i.currentTime+.1,J=setInterval(Z,40)),e.gain.setTargetAtTime(.8,i.currentTime,1.2),P.gain.setTargetAtTime(1,i.currentTime,.5)},stop(){ie=!1,clearInterval(J),e.gain.setTargetAtTime(0,i.currentTime,.4)},get on(){return ie},level(){n.getByteTimeDomainData(s);let X=0;for(let V=0;V<s.length;V++){let he=(s[V]-128)/128;X+=he*he}return Math.min(1,Math.sqrt(X/s.length)*6)},tune(){let X=i.createBufferSource();X.buffer=f;let V=i.createBiquadFilter();V.type="bandpass",V.Q.value=4;let he=i.currentTime;V.frequency.setValueAtTime(600,he),V.frequency.exponentialRampToValueAtTime(3200,he+.25);let le=i.createGain();le.gain.setValueAtTime(0,he),le.gain.linearRampToValueAtTime(.06,he+.02),le.gain.exponentialRampToValueAtTime(.001,he+.35),X.connect(V).connect(le).connect(e),X.start(he),X.stop(he+.4)},hit(X){let V=i.currentTime,he={300:1320,100:990,50:740,0:180}[X]||880,le=i.createOscillator();le.type=X?"sine":"square",le.frequency.setValueAtTime(he,V),X||le.frequency.exponentialRampToValueAtTime(90,V+.2);let qe=i.createGain();if(qe.gain.setValueAtTime(.12,V),qe.gain.exponentialRampToValueAtTime(.001,V+(X?.18:.25)),le.connect(qe).connect(e),le.start(V),le.stop(V+.3),X){let Ve=i.createBufferSource();Ve.buffer=f;let Ge=i.createBiquadFilter();Ge.type="highpass",Ge.frequency.value=6e3;let Y=i.createGain();Y.gain.setValueAtTime(.08,V),Y.gain.exponentialRampToValueAtTime(.001,V+.04),Ve.connect(Ge).connect(Y).connect(e),Ve.start(V),Ve.stop(V+.05)}},splash(){let X=i.createBufferSource();X.buffer=f;let V=i.createBiquadFilter();V.type="lowpass";let he=i.currentTime;V.frequency.setValueAtTime(2400,he),V.frequency.exponentialRampToValueAtTime(200,he+.8);let le=i.createGain();le.gain.setValueAtTime(.12,he),le.gain.exponentialRampToValueAtTime(.001,he+.9),X.connect(V).connect(le).connect(e),X.start(he),X.stop(he+1)}}}var Kl={tuning:"tuning in",nav1:"hypnotize",nav2:"client",nav3:"code",nav4:"contact",radioOff:"radio: off",radioOn:"radio: on",status:"open to internships & junior roles",role:"full-stack developer \xB7 Praia Grande, Brazil",tagline:"I build websites people <em>send to their friends.</em>",cta1:"see the work \u2193",cta2:"get in touch",heroNote:"click the sea.<br>it answers.",aboutAct:"01 \xB7 who\u2019s on air",aboutBig:"I\u2019m Enzo. <em>I like things that are well made</em> and have personality, from the code to the last pixel.",aboutP:"I started out hacking on Discord bots and Minecraft servers. Now I study Systems Analysis and Development at FIAP while picking up some freelance work. I like understanding things from the inside, and I like it when the result makes someone stop scrolling.",f1:"Systems Dev \xB7 FIAP",f2:"freelance",f3:"fluent English",f7:"security-curious: OWASP, Burp",f8:"Linux Fundamentals \xB7 FIAP",stackK:"stack",osuK:"warm-up: hit the circles on time",combo:"combo",best:"best",acc:"acc",hypAct:"02 \xB7 lab \xB7 art websites",hypP:"My collection of art websites. None of them sells anything. Each one is a whole world made only with code: 3D models, textures, shaders and sound generated live, zero downloaded assets. Opens with a double-click and works offline.",n1:"70s Brazilian psychedelia in 2D shaders and CSS: liquid paint, melting letters, a chord drone.",n2:"70s Brazilian psychedelia turned into a 3D world: a liquid chrome drop, an eye that follows your cursor, a tunnel of rings.",n3:"A site about slowing down: 13 scenes, paper that actually burns in the shader, a marching-cubes lava lamp, lo-fi generated live.",n4:"A brutalist building that watches you: an operator comments on every pause, a ghost retraces your cursor, and at the end it carves your portrait into concrete and lets you erase it all. Nothing leaves the browser.",novo:"new",hypHint:"hover the screens \xB7 click to open",ccdAct:"03 \xB7 client work",ccdMeta:"freelance via MWMKT agency \xB7 2026 \xB7 live",ccdP:"A refresh of the website of a medical continuing-education school, without switching platforms: new pages hand-written in HTML/CSS inside their existing WordPress/Elementor, a new site-wide header and footer, and redesigned course-schedule popups.",ccd1:"5 new pages + global header and footer",ccd2:"zero-downtime publishing: slug swap, old version kept as a draft",ccd3:"WP Rocket and Cloudflare cache purged on every deploy",ccd4:"learned WordPress from scratch during the project",live:"see it live \u2197",triAct:"04 \xB7 code \xB7 Discord bot",triP:"A Discord music bot in Node.js that searches and plays audio from YouTube. The good part was the debugging: an interaction expiring before the reply (fixed by moving <code>deferReply</code> earlier) and a crash inside the yt-dlp library itself, caused by deprecated flags mixing stdout and stderr. I rewrote the parser and kept the fix with <code>patch-package</code>.",wsAct:"05 \xB7 code \xB7 real-time",wsP:"A WebSocket server that connects to Minecraft Bedrock and listens to the in-game chat live. Every session becomes a timestamped log, and when the server shuts down (Ctrl+C, SIGTERM or a crash) it saves everything and posts a summary to Discord via webhook.",finAct:"06 \xB7 FIAP",wip:"in progress",finP:"A personal finance app I\u2019m building in phases at college, from requirements to code: user stories validated with INVEST, UML use cases, an Oracle data model, Java classes with inheritance and polymorphism, and a Tailwind v4 landing page. Passwords hashed with Argon2id, atomic transfers.",joviAct:"07 \xB7 FIAP \xD7 JOVI (Vivo) \xB7 challenge",joviP:"The brief: reinvent the smartphone camera experience, 100% web and mobile-first. Our answer was a camera that thinks before you do, with modes that suggest the right settings from the scene\u2019s context. Team of 5: an 8-entity data model, a 6-screen Figma prototype and a Tailwind front-end.",joviHint:"bring your cursor close to the lens",breveAct:"08 \xB7 recording",slot1:"open slot",slot2:"open slot",slotP:"A new project is about to go on air. If you made it this far, check back soon.",slotP2:"Something is being built here. No name yet.",endAct:"09 \xB7 end of transmission",endBig:"let\u2019s build something <em>nobody forgets?</em>",endP:"I\u2019m looking for an internship or junior developer role: front-end, full-stack or creative. And I\u2019m still taking freelance work.",foot1:"handmade in Praia Grande \xB7 Three.js, GLSL and WebAudio, no template",copied:"e-mail copied \u2713"},Ud={radioOn:"r\xE1dio: on",radioOff:"r\xE1dio: off",combo:"combo",best:"recorde",acc:"precis\xE3o",copied:"e-mail copiado \u2713"};var Dd={pt:{hello:"bem-vindo. digite <b>help</b> pra ver os comandos.",help:["<b>whoami</b>     quem \xE9 o enzo","<b>ls</b>         lista os projetos","<b>open</b> n     abre o projeto n","<b>stack</b>      com o que eu trabalho","<b>contato</b>    como falar comigo","<b>sudo contratar</b>","<b>clear</b>      limpa a tela"],whoami:"enzo brand\xE3o \xB7 dev full-stack \xB7 praia grande, sp<br>estudante de ADS na FIAP \xB7 freelance \xB7 ingl\xEAs fluente",stack:"front: html, css, tailwind, javascript, typescript, three.js, glsl<br>back: node.js, java, python, sql/oracle<br>outros: wordpress/elementor, git, linux",lsHead:"projetos/",openUsage:"uso: open 1",opening:i=>`abrindo ${i}\u2026`,contato:"e-mail: enzobtsimoes@gmail.com<br>linkedin: linkedin.com/in/enzo-brandao-simoes<br>github: github.com/enzoka27",hire:'senha do sudo: ********<br><span class="ok">permiss\xE3o concedida.</span> e-mail copiado. me manda uma mensagem :)',hireFail:"permiss\xE3o concedida. e-mail: enzobtsimoes@gmail.com",passwd:"boa tentativa. o OWASP A01 mandou um abra\xE7o.",nmap:"PORT     STATE   SERVICE<br>443/tcp  open    portfolio<br>22/tcp   closed  ssh (boa tentativa)",rm:"nada \xE9 apagado aqui. isso \xE9 coisa do <b>vigia</b>.",exit:"n\xE3o tem sa\xEDda. mas tem contato: digite <b>contato</b>.",notFound:i=>`comando n\xE3o encontrado: ${i}. tenta <b>help</b>.`,pwd:"/home/enzo/praia-grande"},en:{hello:"welcome. type <b>help</b> to see the commands.",help:["<b>whoami</b>     who enzo is","<b>ls</b>         list projects","<b>open</b> n     open project n","<b>stack</b>      what I work with","<b>contact</b>    how to reach me","<b>sudo hire</b>","<b>clear</b>      clear the screen"],whoami:"enzo brand\xE3o \xB7 full-stack dev \xB7 praia grande, brazil<br>Systems Dev student at FIAP \xB7 freelance \xB7 fluent English",stack:"front: html, css, tailwind, javascript, typescript, three.js, glsl<br>back: node.js, java, python, sql/oracle<br>other: wordpress/elementor, git, linux",lsHead:"projects/",openUsage:"usage: open 1",opening:i=>`opening ${i}\u2026`,contato:"e-mail: enzobtsimoes@gmail.com<br>linkedin: linkedin.com/in/enzo-brandao-simoes<br>github: github.com/enzoka27",hire:'sudo password: ********<br><span class="ok">permission granted.</span> e-mail copied. send me a message :)',hireFail:"permission granted. e-mail: enzobtsimoes@gmail.com",passwd:"nice try. OWASP A01 says hi.",nmap:"PORT     STATE   SERVICE<br>443/tcp  open    portfolio<br>22/tcp   closed  ssh (nice try)",rm:"nothing gets deleted here. that\u2019s <b>vigia</b>\u2019s job.",exit:"there\u2019s no exit. there\u2019s a contact though: type <b>contact</b>.",notFound:i=>`command not found: ${i}. try <b>help</b>.`,pwd:"/home/enzo/praia-grande"}};function Nd(i,{lang:e,projects:t,onCmd:n=()=>{}}){let s=i.querySelector(".term-out"),r=i.querySelector(".term-in"),a=[],o=0,c=()=>Dd[e()]||Dd.pt,l=x=>x.replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[m]),h=(x,m="")=>{let p=document.createElement("p");p.className=m,p.innerHTML=x,s.append(p),s.scrollTop=s.scrollHeight},d=x=>{let m=document.querySelector(x);m&&m.scrollIntoView({behavior:"smooth",block:"center"})};function u(x){let m=x.trim();if(!m)return;h(`<span class="pr">enzo@pg:~$</span> ${l(m)}`,"cmd"),a.push(m),o=a.length;let[p,...M]=m.toLowerCase().split(/\s+/),_=c();switch(n(p),p){case"help":case"ajuda":case"?":_.help.forEach(S=>h(S));break;case"whoami":case"sobre":case"about":h(_.whoami);break;case"stack":h(_.stack);break;case"ls":case"projetos":case"projects":h(_.lsHead),t.forEach((S,b)=>h(`  ${b+1}  ${l(S.name)}`));break;case"open":case"abrir":case"cd":{let S=parseInt(M[0],10),b=t[S-1];if(!b){h(_.openUsage);break}h(_.opening(l(b.name))),setTimeout(()=>{b.href?window.open(b.href,"_blank","noopener"):b.target&&d(b.target)},350);break}case"contato":case"contact":h(_.contato);break;case"sudo":/contratar|hire/.test(M.join(" "))?navigator.clipboard?navigator.clipboard.writeText("enzobtsimoes@gmail.com").then(()=>h(_.hire),()=>h(_.hireFail)):h(_.hireFail):h(_.notFound("sudo "+l(M.join(" "))));break;case"cat":h(M.join(" ").includes("passwd")?_.passwd:_.notFound("cat "+l(M.join(" "))));break;case"nmap":h(_.nmap);break;case"rm":h(_.rm);break;case"exit":case"sair":case"quit":h(_.exit);break;case"pwd":h(_.pwd);break;case"date":h(new Date().toLocaleString(e()==="en"?"en-US":"pt-BR"));break;case"echo":h(l(m.slice(5)));break;case"clear":case"cls":s.innerHTML="";break;default:h(_.notFound(l(p)))}}r.addEventListener("keydown",x=>{x.key==="Enter"?(u(r.value),r.value=""):x.key==="ArrowUp"?(o>0&&(r.value=a[--o]),x.preventDefault()):x.key==="ArrowDown"&&(r.value=o<a.length-1?a[++o]:(o=a.length,""),x.preventDefault())}),i.addEventListener("pointerdown",()=>setTimeout(()=>r.focus({preventScroll:!0}),0));let f=!1;function g(){if(f)return;f=!0,h(c().hello,"dim");let x="whoami",m=0,p=()=>{r.value=x.slice(0,++m),m<x.length?setTimeout(p,110):setTimeout(()=>{u(x),r.value=""},300)};setTimeout(p,700)}return{boot:g,reset(){f&&(s.innerHTML="",f=!1,g())}}}var qt=(i,e=document)=>e.querySelector(i),Ps=(i,e=document)=>[...e.querySelectorAll(i)],av=matchMedia("(prefers-reduced-motion: reduce)").matches,ov=matchMedia("(pointer: coarse)").matches||innerWidth<700,sc=document.documentElement,ac=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),zd=location.hash.includes("snap"),kd={get:i=>{try{return localStorage.getItem(i)}catch{return null}},set:(i,e)=>{try{localStorage.setItem(i,e)}catch{}}},Es={};Ps("[data-i18n]").forEach(i=>{Es[i.dataset.i18n]=i.innerHTML});Object.assign(Es,Ud,{...Es});var Rs=kd.get("lang")||((navigator.language||"pt").toLowerCase().startsWith("pt")?"pt":"en"),Ql=i=>(Rs==="en"?Kl[i]:Es[i])??Es[i]??i;function Hd(i){Rs=i,kd.set("lang",i),sc.lang=i==="en"?"en":"pt-BR",Ps("[data-i18n]").forEach(e=>{let t=e.dataset.i18n,n=i==="en"?Kl[t]:Es[t];n!=null&&(e.innerHTML=n)}),qt(".sound-label").innerHTML=Ql(Vr?"radioOn":"radioOff"),Zl&&Zl.reset(),rc=-1}qt("#lang").addEventListener("click",()=>Hd(Rs==="en"?"pt":"en"));var ht=i=>new Ne(i),ic=[{z:dt.hero,A:ht(263693),B:ht(924222),C:ht(15722970)},{z:dt.sobre,A:ht(329746),B:ht(1188428),C:ht(9430015)},{z:dt.hyp,A:ht(656914),B:ht(2757184),C:ht(16743129)},{z:dt.ccd,A:ht(461328),B:ht(1713728),C:ht(16765066)},{z:dt.trinity,A:ht(329487),B:ht(1382718),C:ht(12035839)},{z:dt.ws,A:ht(330506),B:ht(993830),C:ht(8257464)},{z:dt.finpay,A:ht(460812),B:ht(2039084),C:ht(16765802)},{z:dt.jovi,A:ht(657168),B:ht(2758200),C:ht(16752864)},{z:dt.breve,A:ht(854546),B:ht(3809328),C:ht(16747098)},{z:dt.contato,A:ht(2757680),B:ht(14704698),C:ht(16769712)}],Nr=new Ne,Lr=new Ne,Or=new Ne,Gd=new Ne,Wd=new Ne,qd=new Ne;function cv(i){let e=0;for(;e<ic.length-2&&i<ic[e+1].z;)e++;let t=ic[e],n=ic[e+1],s=ac((i-t.z)/(n.z-t.z)),r=s*s*(3-2*s);Nr.copy(t.A).lerp(n.A,r),Lr.copy(t.B).lerp(n.B,r),Or.copy(t.C).lerp(n.C,r),Gd.copy(Nr).multiplyScalar(1.5),Wd.copy(Lr).multiplyScalar(1.7),qd.copy(Or)}var St={time:4,dt:0,camZ:10,mouseX:0,mouseY:0,vel:0,level:0,dawn:0,mouseSpeed:0,envA:Gd,envB:Wd,envC:qd},Wt={x:innerWidth*.5,y:innerHeight*.5},hi={...Wt},_s={...Wt},Ld=Wt.x,Od=Wt.y;addEventListener("pointermove",i=>{Wt.x=i.clientX,Wt.y=i.clientY},{passive:!0});var lv=qt("#clock"),Xd=()=>{lv.textContent="PRAIA GRANDE \xB7 "+new Intl.DateTimeFormat("pt-BR",{timeZone:"America/Sao_Paulo",hour:"2-digit",minute:"2-digit"}).format(new Date)};Xd();setInterval(Xd,15e3);var jd=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),jd.unobserve(e.target))}),{threshold:.12});Ps(".reveal").forEach(i=>jd.observe(i));var hv=qt(".cur-dot"),uv=qt(".cur-ring"),Kd=!1;document.addEventListener("pointerover",i=>{Kd=!!i.target.closest("a,button")});var jn=null,Vr=!1,Yd=qt("#sound");function dv(i){if(Vr=i,i&&!jn)try{jn=Id()}catch(e){console.warn(e)}jn&&(i?jn.start():jn.stop()),Yd.setAttribute("aria-pressed",i),qt(".sound-label").innerHTML=Ql(i?"radioOn":"radioOff")}Yd.addEventListener("click",()=>dv(!Vr));var oc=(i,...e)=>{Vr&&jn&&jn[i](...e)},fv=Ps(".num a").map(i=>i.getAttribute("href")),ui=null;try{location.hash.includes("nogl")||(ui=Cd(qt("#world"),{mobile:ov,links:fv}))}catch(i){console.error(i)}addEventListener("pointerdown",i=>{if(i.target.closest("a,button,.term"))return;let e=ui&&ui.click(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight*2-1));e&&(e.type==="link"&&e.href&&window.open(e.href,"_blank","noopener"),e.type==="sea"&&oc("splash"),e.type==="obj"&&oc("hit",300))});var pv=Ps(".num"),Zl=Nd(qt("#term"),{lang:()=>Rs,projects:[{name:"tropic\xE1lia \xE1cida (hypnotize)",href:"hypnotize/tropicalia-acida/index.html"},{name:"vigia (hypnotize)",href:"hypnotize/vigia/index.html"},{name:"ccd ensino",target:"#trabalho"},{name:"trinity",target:"#codigo"},{name:"websocket minecraft",target:"#websocket"},{name:"finpay",target:"#finpay"},{name:"jovi cam assist",target:"#jovi"}],onCmd:()=>oc("hit",300)});new IntersectionObserver((i,e)=>i.forEach(t=>{t.isIntersecting&&(Zl.boot(),e.disconnect())}),{threshold:.5}).observe(qt("#term"));var Yl=qt("#toast");qt("#mail").addEventListener("click",async i=>{let e=i.currentTarget.dataset.mail;try{await navigator.clipboard.writeText(e),Yl.textContent=Ql("copied"),Yl.classList.add("on"),setTimeout(()=>Yl.classList.remove("on"),2200)}catch{location.href="mailto:"+e}});var Ii=qt("#bg"),$e=Ii.getContext("webgl",{antialias:!1,alpha:!1}),Xn=null,un={};if($e){let i=(n,s)=>{let r=$e.createShader(n);return $e.shaderSource(r,s),$e.compileShader(r),$e.getShaderParameter(r,$e.COMPILE_STATUS)?r:(console.error($e.getShaderInfoLog(r)),null)},e=i($e.VERTEX_SHADER,fd),t=i($e.FRAGMENT_SHADER,pd);if(e&&t){Xn=$e.createProgram(),$e.attachShader(Xn,e),$e.attachShader(Xn,t),$e.linkProgram(Xn),$e.useProgram(Xn),$e.bindBuffer($e.ARRAY_BUFFER,$e.createBuffer()),$e.bufferData($e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),$e.STATIC_DRAW);let n=$e.getAttribLocation(Xn,"p");$e.enableVertexAttribArray(n),$e.vertexAttribPointer(n,2,$e.FLOAT,!1,0,0),["uRes","uTime","uMouse","uVel","uA","uB","uC","uStars","uHorizon","uLevel","uDawn"].forEach(s=>un[s]=$e.getUniformLocation(Xn,s))}}var Dn=[],Fr=1,Jd=Ps("section[data-z]");function cc(){let i=Math.max(1,document.documentElement.scrollHeight-innerHeight);Dn=Jd.map((e,t,n)=>{let s=e.offsetTop+e.offsetHeight/2-innerHeight/2;return t===0&&(s=0),t===n.length-1&&(s=i),{y:ac(s,0,i),z:+e.dataset.z}})}function Fd(i){if(!Dn.length)return 10;if(i<=Dn[0].y)return Dn[0].z;for(let e=0;e<Dn.length-1;e++){let t=Dn[e],n=Dn[e+1];if(i<=n.y){let s=(i-t.y)/Math.max(1,n.y-t.y),r=s*s*s*(s*(s*6-15)+10);return t.z+(n.z-t.z)*(r*.7+s*.3)}}return Dn[Dn.length-1].z}function Zd(){Fr=Math.min(devicePixelRatio||1,2)*(innerWidth>1400?.5:.6),Ii.width=Math.round(innerWidth*Fr),Ii.height=Math.round(innerHeight*Fr),Xn&&$e.viewport(0,0,Ii.width,Ii.height),ui&&ui.resize(innerWidth,innerHeight),cc()}Zd();addEventListener("resize",Zd);addEventListener("load",cc);document.fonts&&document.fonts.ready.then(cc);var mv=qt("#freq"),gv=qt("#station"),Vd=performance.now(),Bd=scrollY,ws=10,rc=-1,Jl=0;Hd(Rs);setTimeout(()=>{qt("#tuning").classList.add("gone"),document.body.classList.add("ready"),cc()},zd?50:1450);function Qd(i){let e=Math.min((i-Vd)/1e3,.05);Vd=i,St.dt=e;let t=scrollY,n=Math.max(1,document.documentElement.scrollHeight-innerHeight),s=t/n;St.vel+=((t-Bd)/Math.max(e,.001)*.016-St.vel)*.1,Bd=t,St.time+=e*(av?.3:1),ws=zd?Fd(t):ws+(Fd(t)-ws)*Math.min(1,e*2.8),St.camZ=ws,St.dawn=ac((dt.breve+6-ws)/(dt.breve+6-dt.contato)),St.dawn=St.dawn*St.dawn*(3-2*St.dawn);let r=(Wt.x-Ld)/Math.max(e,.001),a=(Wt.y-Od)/Math.max(e,.001);Ld=Wt.x,Od=Wt.y,St.mouseSpeed+=(ac(Math.hypot(r,a)/3e3)-St.mouseSpeed)*Math.min(1,e*4),hi.x+=(Wt.x-hi.x)*Math.min(1,e*2.2),hi.y+=(Wt.y-hi.y)*Math.min(1,e*2.2),_s.x+=(Wt.x-_s.x)*Math.min(1,e*9),_s.y+=(Wt.y-_s.y)*Math.min(1,e*9),St.mouseX=hi.x/innerWidth*2-1,St.mouseY=hi.y/innerHeight*2-1,hv.style.transform=`translate(${Wt.x}px,${Wt.y}px)`,uv.style.transform=`translate(${_s.x}px,${_s.y}px)`,St.level+=((jn&&Vr?jn.level():0)-St.level)*Math.min(1,e*10),cv(ws),sc.style.setProperty("--p",s.toFixed(4)),sc.style.setProperty("--mx",St.mouseX.toFixed(3)),sc.style.setProperty("--my",St.mouseY.toFixed(3));let o=0;if(Dn.forEach((l,h)=>{t>=l.y-innerHeight*.5&&(o=h)}),o!==rc){rc>=0&&oc("tune"),rc=o;let l=Jd[o];mv.textContent=l.dataset.freq,gv.textContent=Rs==="en"?l.dataset.stEn:l.dataset.st}let c=null;ui&&(c=ui.update(St)),c&&(Jl+=(c.horizon-Jl)*.5),document.body.classList.toggle("hovering",Kd||!!(c&&c.hot)),pv.forEach((l,h)=>l.classList.toggle("lit",!!c&&c.hoverScreen===h)),Xn&&($e.uniform2f(un.uRes,Ii.width,Ii.height),$e.uniform1f(un.uTime,St.time),$e.uniform2f(un.uMouse,hi.x*Fr,(innerHeight-hi.y)*Fr),$e.uniform1f(un.uVel,St.vel),$e.uniform3f(un.uA,Nr.r,Nr.g,Nr.b),$e.uniform3f(un.uB,Lr.r,Lr.g,Lr.b),$e.uniform3f(un.uC,Or.r,Or.g,Or.b),$e.uniform1f(un.uStars,1-St.dawn),$e.uniform1f(un.uHorizon,ui?Jl:-.08),$e.uniform1f(un.uLevel,St.level),$e.uniform1f(un.uDawn,St.dawn),$e.drawArrays($e.TRIANGLES,0,3)),requestAnimationFrame(Qd)}requestAnimationFrame(Qd);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
