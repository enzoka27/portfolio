// ============ shaders — VIGIA ============

export const NOISE2 = `
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float n21(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
float fbm2(vec2 p){ float v=0., a=.5; mat2 m=mat2(1.6,1.2,-1.2,1.6); for(int i=0;i<5;i++){ v+=a*n21(p); p=m*p; a*=.5; } return v; }
`;

/* --- fundo: poeira de obra suspensa, feixes de luz entrando por frestas, monitor de segurança --- */
export const BG_VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
export const BG_FRAG = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uVel;
uniform vec3 uA; uniform vec3 uB; uniform vec3 uC;
uniform vec2 uSpot; uniform float uSpotAmt; uniform float uShaft; uniform float uRec; uniform float uGlitch; uniform float uPress;
${NOISE2}
void main(){
  vec2 fc = gl_FragCoord.xy;
  // glitch: linhas deslocadas, como sinal de câmera fraco
  float band = step(.985 - uGlitch*.25, h21(vec2(floor(fc.y/(6.+uGlitch*20.)), floor(uTime*14.))));
  fc.x += band * (h21(vec2(fc.y, uTime)) - .5) * 60. * (uGlitch + .15);
  vec2 uv = (fc - .5*uRes)/uRes.y;
  float T = uTime*.03;
  // poeira lenta, pesada, que desce
  vec2 p = uv*1.25 + vec2(T*.6, T*.9);
  vec2 q = vec2(fbm2(p + vec2(0., T)), fbm2(p + vec2(5.2, 1.3) - T));
  float f = fbm2(p + 3.*q + uVel*.002);
  vec3 col = mix(uA, uB, smoothstep(.2, 1., f));
  // feixes diagonais de luz (frestas no concreto)
  vec2 sd = normalize(vec2(.42, 1.));
  float s = dot(uv, vec2(sd.y, -sd.x));
  float shafts = pow(n21(vec2(s*7. + T*.4, 0.)), 3.) * smoothstep(-.9, .7, uv.y + uv.x*.3);
  shafts *= .55 + .45*fbm2(uv*3. + vec2(0., -uTime*.05));
  col += uC * shafts * uShaft * .5;
  // a luz que te segue
  vec2 m = (uSpot - .5*uRes)/uRes.y;
  float r = length(uv - m);
  col += uC * exp(-r*r*7.) * uSpotAmt * (.75 + .25*fbm2(uv*6. + uTime*.2));
  col += uC * exp(-r*38.) * uSpotAmt * .25;
  // pressão (a laje descendo): escurece por cima
  col *= 1. - uPress * smoothstep(-.1, .55, uv.y) * .55;
  // gravação: pulso vermelho nas bordas
  vec2 e = gl_FragCoord.xy/uRes - .5;
  float edge = smoothstep(.42, .5, max(abs(e.x), abs(e.y)));
  col = mix(col, vec3(.9,.08,.04), edge * uRec * .5);
  // monitor: linhas de varredura + barra rolando
  col *= .93 + .07*sin(gl_FragCoord.y*1.7);
  col *= 1. - .06*smoothstep(.0, .04, abs(fract(gl_FragCoord.y/uRes.y*.5 - uTime*.07) - .5) - .45);
  col *= 1. - dot(e,e)*1.25;
  col += (h21(gl_FragCoord.xy + fract(uTime)*91.) - .5)*.06;
  gl_FragColor = vec4(clamp(col, 0., 1.), 1.);
}`;

/* --- ambiente refletido: um salão de concreto com lâmpadas fluorescentes --- */
export const ENV_VERT = `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
export const ENV_FRAG = `
precision highp float;
varying vec3 vDir; uniform float uTime; uniform vec3 uA; uniform vec3 uB; uniform vec3 uC;
${NOISE2}
void main(){
  vec3 d = normalize(vDir);
  float u = atan(d.z, d.x), v = d.y;
  vec3 col = mix(uA, uB, smoothstep(-.7, .8, v));
  col *= .8 + .4*fbm2(vec2(u*3., v*5.));
  // tubos fluorescentes no teto
  float tubes = smoothstep(.06, .0, abs(fract(u*1.6) - .5)) * smoothstep(.55, .75, v);
  col += vec3(.9,1.,.98) * tubes * 2.5;
  // uma janela clara
  col += uC * smoothstep(.25,.0, abs(u - .9)) * smoothstep(.45,.1, abs(v - .1)) * 1.8;
  gl_FragColor = vec4(pow(col, vec3(2.2)), 1.);
}`;

/* --- cone de luz volumétrico (o holofote que te procura) --- */
export const BEAM_VERT = `
varying float vAlong; varying vec3 vN; varying vec3 vView; varying vec3 vW;
void main(){
  vAlong = uv.y;
  vec4 w = modelMatrix * vec4(position, 1.);
  vW = w.xyz;
  vN = normalize(normalMatrix * normal);
  vec4 mv = viewMatrix * w; vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;
export const BEAM_FRAG = `
uniform vec3 uColor; uniform float uAmt; uniform float uTime; uniform float uInv;
varying float vAlong; varying vec3 vN; varying vec3 vView; varying vec3 vW;
${NOISE2}
void main(){
  float dv = abs(dot(normalize(vN), normalize(vView)));
  float fres = mix(pow(dv, 1.6), (1. - dv*.7)*.5, uInv);
  float along = pow(vAlong, 1.6);                      // forte na lâmpada, some na ponta
  float dust = .55 + .45*fbm2(vW.xy*1.3 + vec2(0., uTime*.25));
  float a = fres * along * dust * uAmt;
  gl_FragColor = vec4(uColor * a, a);
}`;

/* --- poeira suspensa --- */
export const DUST_VERT = `
attribute float aSeed; uniform float uTime; uniform float uScale; varying float vA;
void main(){
  vec3 p = position;
  p.x += sin(uTime*.13 + aSeed*20.)*.6;
  p.y += mod(-uTime*.08*(.3 + fract(aSeed*7.)) + aSeed*40., 16.) - 8.;
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  vA = (.35 + .65*sin(uTime*1.3 + aSeed*30.)*.5 + .3) * smoothstep(60., 6., -mv.z);
  gl_PointSize = min(18., (1. + fract(aSeed*13.)*2.) * uScale / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
export const DUST_FRAG = `
uniform vec3 uColor; varying float vA;
void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); float a = smoothstep(.5, .0, d) * vA; gl_FragColor = vec4(uColor, a*.42); }`;

/* --- o monólito virando pó --- */
export const CRUMBLE_VERT = `
attribute vec3 aVel; attribute float aSeed; attribute vec3 aCol;
uniform float uT; uniform float uFloor; uniform float uScale;
varying vec3 vCol; varying float vA;
void main(){
  float t = max(0., uT - aSeed*.9);                     // racha de cima pra baixo, não tudo de uma vez
  vec3 p = position + aVel*t + vec3(0., -4.9, 0.)*t*t;
  float landed = step(p.y, uFloor);
  p.y = max(p.y, uFloor + fract(aSeed*91.)*.05);
  p.xz += aVel.xz * landed * .4 * min(t, 2.);           // espalha no chão
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  vCol = aCol;
  vA = 1. - smoothstep(5., 9., uT);
  gl_PointSize = (1.6 + fract(aSeed*37.)*3.4) * (1. - .5*smoothstep(0., 3., t)) * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`;
export const CRUMBLE_FRAG = `
varying vec3 vCol; varying float vA;
void main(){ vec2 c = gl_PointCoord - .5; if (dot(c,c) > .25) discard; gl_FragColor = vec4(vCol, vA); }`;
