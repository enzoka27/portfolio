// ============ shaders — portfólio (transmissão noturna) ============

export const NOISE2 = `
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float n21(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
float fbm2(vec2 p){ float v=0., a=.5; mat2 m=mat2(1.6,1.2,-1.2,1.6); for(int i=0;i<5;i++){ v+=a*n21(p); p=m*p; a*=.5; } return v; }
`;

/* --- céu: gradiente, estrelas, nuvens finas e um osciloscópio no horizonte --- */
export const BG_VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
export const BG_FRAG = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uVel;
uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform float uStars; uniform float uHorizon; uniform float uLevel; uniform float uDawn;
${NOISE2}
void main(){
  vec2 uv = (gl_FragCoord.xy - .5*uRes)/uRes.y;
  float T = uTime;
  float hz = uHorizon;                                   // altura do horizonte na tela
  float up = uv.y - hz;
  vec3 col = mix(uB, uA, smoothstep(-.05, .75, up));
  // brilho no horizonte
  col += uC * exp(-abs(up)*7.) * (.18 + uDawn*.9);
  col = mix(col, uB*.55, smoothstep(.0, -.4, up));     // abaixo do horizonte (atrás do mar)
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
  // osciloscópio: a linha do sinal, mexe com o som e com o cursor
  vec2 m = (uMouse - .5*uRes)/uRes.y;
  float wave = sin(uv.x*14. + T*1.6)*.006 + sin(uv.x*41. - T*3.1)*.003*(1.+uLevel*4.) + sin(uv.x*90. + T*7.)*.0015*uLevel*6.;
  wave += exp(-pow((uv.x - m.x)*5., 2.))*.03*sin(uv.x*60. - T*8.);
  float line = exp(-abs(up - .002 - wave)*900.);
  col += uC * line * (.35 + uLevel*.8);
  // um halo leve onde está o cursor
  col += uC * exp(-length(uv - m)*7.) * .05;
  vec2 e = gl_FragCoord.xy/uRes - .5;
  col *= 1. - dot(e,e)*.9;
  col += (h21(gl_FragCoord.xy + fract(uTime)*91.) - .5)*.035;
  gl_FragColor = vec4(clamp(col, 0., 1.), 1.);
}`;

/* --- reflexo: céu noturno com lua (vira sol no fim) --- */
export const ENV_VERT = `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
export const ENV_FRAG = `
precision highp float;
varying vec3 vDir; uniform float uTime; uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform vec3 uSunDir;
${NOISE2}
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
}`;

/* --- o mar de pontos: ondas em coordenadas de mundo, então o mar "anda" com a câmera --- */
export const SEA_VERT = `
uniform float uTime; uniform float uCamZ; uniform vec4 uRip[4]; uniform vec3 uHover; uniform float uLevel; uniform float uScale; uniform float uMoonX;
varying float vB; varying float vD;
float wave(vec2 p){
  float h = sin(p.x*.32 + uTime*.7)*.28 + sin(p.y*.45 - uTime*.9 + p.x*.12)*.32 + sin((p.x+p.y)*.9 + uTime*1.4)*.08;
  h += sin(p.x*1.6 - uTime*2.2)*.03*(1. + uLevel*6.);
  return h;
}
void main(){
  vec3 p = position;
  p.z += floor(uCamZ / .4) * .4;                  // a grade acompanha a câmera em passos (sem tremer)
  float h = wave(p.xz);
  // ondulações dos cliques
  for (int i = 0; i < 4; i++) {
    vec4 r = uRip[i];
    float age = uTime - r.w;
    if (age > 0. && age < 6.) {
      float d = length(p.xz - r.xy);
      float ring = sin((d - age*4.)*2.2) * exp(-abs(d - age*4.)*.8) * exp(-age*.6);
      h += ring * .7 * r.z;
    }
  }
  // o cursor afunda a água
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
}`;
export const SEA_FRAG = `
uniform vec3 uColor; uniform vec3 uGlow; uniform float uFar;
varying float vB; varying float vD;
void main(){
  vec2 c = gl_PointCoord - .5; float r = length(c);
  float a = smoothstep(.5, .1, r) * smoothstep(uFar, uFar*.35, vD) * smoothstep(1.5, 4., vD);
  gl_FragColor = vec4(mix(uColor, uGlow, clamp(vB - .4, 0., 1.)) * vB, a * clamp(vB, .25, 1.));
}`;

/* --- lua/sol: disco com crateras de ruído que vira sol --- */
export const ORB_VERT = `varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
export const ORB_FRAG = `
uniform float uDawn; uniform float uTime; varying vec3 vN; varying vec3 vP;
${NOISE2}
void main(){
  vec3 n = normalize(vP);
  float cr = fbm2(n.xy*3.2 + n.z*2.) ;
  vec3 moon = vec3(.94,.92,.86) * (.78 + .3*cr) - vec3(.12)*smoothstep(.55,.7, fbm2(n.xy*7.));
  float rim = pow(1. - max(0., vN.z), 2.);
  moon *= 1. - rim*.4;
  vec3 sun = mix(vec3(1.,.55,.25), vec3(1.,.92,.7), 1. - rim) * 1.6;
  vec3 col = mix(moon, sun, uDawn);
  gl_FragColor = vec4(col, 1.);
}`;
export const HALO_FRAG = `
uniform vec3 uColor; uniform float uAmt; varying vec2 vUv;
void main(){ float d = length(vUv - .5)*2.; float a = exp(-d*d*4.) * uAmt; gl_FragColor = vec4(uColor*a, a); }`;
export const HALO_VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
