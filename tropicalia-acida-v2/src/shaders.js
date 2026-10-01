// ============ shaders ============

/* --- fundo líquido 2D (herdado da v1, afinado pra jornada da v2) --- */
export const BG_VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
export const BG_FRAG = `
precision highp float;
uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;
uniform float uPeak;
uniform float uDawn;
uniform float uScroll;
uniform float uVel;
uniform float uClick;

float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y);
}
float fbm(vec2 p){ float v=0., a=.5; mat2 m=mat2(1.6,1.2,-1.2,1.6); for(int i=0;i<5;i++){ v+=a*noise(p); p=m*p; a*=.5; } return v; }
vec3 pal(float t){
  t = fract(t)*6.;
  vec3 c0=vec3(1.,.18,.53), c1=vec3(1.,.48,.10), c2=vec3(1.,.82,.25), c3=vec3(.10,.76,.60), c4=vec3(.11,.17,.76), c5=vec3(.48,.18,.97);
  vec3 c = mix(c0,c1,clamp(t,0.,1.)); c = mix(c,c2,clamp(t-1.,0.,1.)); c = mix(c,c3,clamp(t-2.,0.,1.));
  c = mix(c,c4,clamp(t-3.,0.,1.)); c = mix(c,c5,clamp(t-4.,0.,1.)); c = mix(c,c0,clamp(t-5.,0.,1.));
  return c;
}
mat2 rot(float a){ float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }
void main(){
  vec2 uv = (gl_FragCoord.xy - .5*uRes)/uRes.y;
  vec2 m  = (uMouse - .5*uRes)/uRes.y;
  float T = uTime;
  vec2 d = uv - m; float r = length(d);
  float sw = exp(-r*3.2)*(1.1 + uClick*2.4);
  uv = m + rot(sw*(.9 + .4*sin(T*.4)))*d;
  uv += normalize(d+1e-4)*sin(r*28. - T*6.)*.02*uClick*exp(-r*2.);
  float a = atan(uv.y,uv.x), rad = length(uv), seg = 6.28318/8.;
  float ka = mod(a + T*.04, seg); ka = abs(ka - seg*.5);
  uv = mix(uv, vec2(cos(ka),sin(ka))*rad, uPeak);
  uv *= 1.35 + .12*sin(T*.17) - uPeak*.25 + uDawn*.4;
  float t = T*.05;
  vec2 q = vec2(fbm(uv+vec2(0.,t)), fbm(uv+vec2(5.2,1.3)-t));
  vec2 w = vec2(fbm(uv+3.*q+vec2(1.7,9.2)+.045*T), fbm(uv+3.*q+vec2(8.3,2.8)-.038*T));
  float f = fbm(uv + 3.4*w + uVel*.004);
  float bands = mix(5.2, 8.5, uPeak) - uDawn*2.5;
  float v = f*bands + length(q)*2.2 + w.x*1.4 - T*.06 + uScroll*4. - 1.2;
  float fv = fract(v);
  float tv = mix(v, floor(v) + smoothstep(.86,1.,fv), .30 + .70*uPeak - .25*uDawn);
  vec3 col = pal(tv/6. + .02);
  float edge = 1. - smoothstep(0.,.045,fv)*smoothstep(1.,.955,fv);
  col = mix(col, vec3(1.,.95,.84), edge*(.12 + .55*uPeak));
  col *= .72 + .55*f + .25*length(w);
  col = mix(col, mix(col, vec3(1.,.93,.84), .58), uDawn);
  vec2 s = gl_FragCoord.xy/uRes - .5;
  col *= 1. - dot(s,s)*(.9 - uDawn*.6);
  col += (hash(gl_FragCoord.xy + fract(T)*100.) - .5)*.05;
  gl_FragColor = vec4(clamp(col,0.,1.),1.);
}`;

/* --- esfera de ambiente 3D: é ela que o cromo reflete --- */
export const ENV_VERT = `
varying vec3 vDir;
void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
export const ENV_FRAG = `
precision highp float;
varying vec3 vDir;
uniform float uTime;
uniform float uPeak;
uniform float uDawn;
float h3(vec3 p){ p = fract(p*.3183099 + .1); p *= 17.; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float n3(vec3 x){
  vec3 i = floor(x), f = fract(x); f = f*f*(3.-2.*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x), mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x), mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y), f.z);
}
float fbm3(vec3 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=a*n3(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=.5; } return v; }
vec3 pal(float t){
  t = fract(t)*6.;
  vec3 c0=vec3(1.,.18,.53), c1=vec3(1.,.48,.10), c2=vec3(1.,.82,.25), c3=vec3(.10,.76,.60), c4=vec3(.11,.17,.76), c5=vec3(.48,.18,.97);
  vec3 c = mix(c0,c1,clamp(t,0.,1.)); c = mix(c,c2,clamp(t-1.,0.,1.)); c = mix(c,c3,clamp(t-2.,0.,1.));
  c = mix(c,c4,clamp(t-3.,0.,1.)); c = mix(c,c5,clamp(t-4.,0.,1.)); c = mix(c,c0,clamp(t-5.,0.,1.));
  return c;
}
void main(){
  vec3 d = normalize(vDir);
  float T = uTime*.08;
  vec3 q = vec3(fbm3(d*1.6 + vec3(0.,T,0.)), fbm3(d*1.6 + vec3(5.2,1.3,-T)), fbm3(d*1.6 + vec3(-T,2.,7.)));
  float f = fbm3(d*2.2 + q*2.6);
  float v = f*6. + q.x*2. - uTime*.05;
  float fv = fract(v);
  float tv = mix(v, floor(v) + smoothstep(.8,1.,fv), .55 + .45*uPeak);
  vec3 col = pal(tv/6.);
  // faixa de luz creme no "céu" — dá o brilho de estúdio no cromo
  col += vec3(1.,.95,.85) * smoothstep(.55,.95,d.y) * .9;
  col += vec3(1.,.9,.8) * pow(max(0., dot(d, normalize(vec3(-.6,.4,.7)))), 24.) * 3.;
  col = mix(col, mix(col, vec3(1.,.93,.86), .5), uDawn);
  gl_FragColor = vec4(pow(col, vec3(2.2)), 1.);
}`;

/* --- a gota: ruído simplex 3D que deforma a esfera, com normais recalculadas --- */
export const BLOB_HEAD = `
uniform float uTime;
uniform float uAmp;
uniform vec3  uPoke;
uniform float uPokeAmt;
vec4 permute(vec4 x){ return mod(((x*34.)+1.)*x, 289.); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - .85373472095314*r; }
float snoise(vec3 v){
  const vec2 C = vec2(1./6., 1./3.); const vec4 D = vec4(0., .5, 1., 2.);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1. - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + 2.*C.xxx; vec3 x3 = x0 - 1. + 3.*C.xxx;
  i = mod(i, 289.);
  vec4 p = permute(permute(permute(i.z + vec4(0., i1.z, i2.z, 1.)) + i.y + vec4(0., i1.y, i2.y, 1.)) + i.x + vec4(0., i1.x, i2.x, 1.));
  float n_ = 1./7.; vec3 ns = n_*D.wyz - D.xzx;
  vec4 j = p - 49.*floor(p*ns.z*ns.z);
  vec4 x_ = floor(j*ns.z); vec4 y_ = floor(j - 7.*x_);
  vec4 x = x_*ns.x + ns.yyyy; vec4 y = y_*ns.x + ns.yyyy; vec4 h = 1. - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2. + 1.; vec4 s1 = floor(b1)*2. + 1.; vec4 sh = -step(h, vec4(0.));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.); m = m*m;
  return 42.*dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
vec3 displace(vec3 p){
  vec3 n = normalize(p);
  float a = snoise(n*1.05 + vec3(0., uTime*.2, uTime*.12));
  float b = snoise(n*2.3 - vec3(uTime*.25)) * .16;
  float poke = exp(-pow(distance(n, uPoke), 2.) * 7.) * uPokeAmt;
  return p + n * ((a + b) * uAmp + poke);
}
vec3 orthogonal(vec3 v){ return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.) : vec3(0., -v.z, v.y)); }
`;
export const BLOB_NORMAL = `
vec3 dispPos = displace(position);
vec3 tng = orthogonal(normal);
vec3 btg = normalize(cross(normal, tng));
vec3 nA = displace(position + tng*.01);
vec3 nB = displace(position + btg*.01);
vec3 objectNormal = normalize(cross(nA - dispPos, nB - dispPos));
#ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
#endif
`;
