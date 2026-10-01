// ============ Enzo Brandão — portfólio ============
// Uma transmissão noturna de Praia Grande: o mar é feito de sinal, e acaba ao amanhecer.
import * as THREE from 'three';
import { BG_VERT, BG_FRAG } from './shaders.js';
import { createWorld, Z } from './world.js';
import { createRadio } from './audio.js';
import { EN, PT_EXTRA } from './i18n.js';
import { createTerminal } from './terminal.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = matchMedia('(pointer: coarse)').matches || innerWidth < 700;
const root = document.documentElement;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const SNAP = location.hash.includes('snap');
const store = { get: k => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch { } } };

/* ---------- idioma ---------- */
const PT = {};
$$('[data-i18n]').forEach(el => { PT[el.dataset.i18n] = el.innerHTML; });
Object.assign(PT, PT_EXTRA, { ...PT });
let lang = store.get('lang') || ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');
const t = k => (lang === 'en' ? EN[k] : PT[k]) ?? PT[k] ?? k;
function setLang(l) {
  lang = l; store.set('lang', l);
  root.lang = l === 'en' ? 'en' : 'pt-BR';
  $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; const v = l === 'en' ? EN[k] : PT[k]; if (v != null) el.innerHTML = v; });
  $('.sound-label').innerHTML = t(soundOn ? 'radioOn' : 'radioOff');
  if (term) term.reset();
  curSec = -1;
}
$('#lang').addEventListener('click', () => setLang(lang === 'en' ? 'pt' : 'en'));

/* ---------- paletas por seção ---------- */
const hex = h => new THREE.Color(h);
const PALS = [
  { z: Z.hero, A: hex(0x04060d), B: hex(0x0e1a3e), C: hex(0xefe9da) },
  { z: Z.sobre, A: hex(0x050812), B: hex(0x12224c), C: hex(0x8fe3ff) },
  { z: Z.hyp, A: hex(0x0a0612), B: hex(0x2a1240), C: hex(0xff7ad9) },
  { z: Z.ccd, A: hex(0x070a10), B: hex(0x1a2640), C: hex(0xffd08a) },
  { z: Z.trinity, A: hex(0x05070f), B: hex(0x15193e), C: hex(0xb7a6ff) },
  { z: Z.ws, A: hex(0x050b0a), B: hex(0x0f2a26), C: hex(0x7dffb8) },
  { z: Z.finpay, A: hex(0x07080c), B: hex(0x1f1d2c), C: hex(0xffd36a) },
  { z: Z.jovi, A: hex(0x0a0710), B: hex(0x2a1638), C: hex(0xffa0e0) },
  { z: Z.breve, A: hex(0x0d0a12), B: hex(0x3a2030), C: hex(0xff8a5a) },
  { z: Z.contato, A: hex(0x2a1430), B: hex(0xe0603a), C: hex(0xffe2b0) },
];
const curA = new THREE.Color(), curB = new THREE.Color(), curC = new THREE.Color();
const envA = new THREE.Color(), envB = new THREE.Color(), envC = new THREE.Color();
function palette(z) {
  let i = 0; while (i < PALS.length - 2 && z < PALS[i + 1].z) i++;
  const a = PALS[i], b = PALS[i + 1], k = clamp((z - a.z) / (b.z - a.z)), e = k * k * (3 - 2 * k);
  curA.copy(a.A).lerp(b.A, e); curB.copy(a.B).lerp(b.B, e); curC.copy(a.C).lerp(b.C, e);
  envA.copy(curA).multiplyScalar(1.5); envB.copy(curB).multiplyScalar(1.7); envC.copy(curC);
}

/* ---------- estado ---------- */
const S = { time: 4, dt: 0, camZ: 10, mouseX: 0, mouseY: 0, vel: 0, level: 0, dawn: 0, mouseSpeed: 0, envA, envB, envC };
const mouse = { x: innerWidth * .5, y: innerHeight * .5 }, sm = { ...mouse }, rp = { ...mouse };
let lastMX = mouse.x, lastMY = mouse.y;
addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

/* ---------- relógio ---------- */
const clock = $('#clock');
const tick = () => { clock.textContent = 'PRAIA GRANDE · ' + new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' }).format(new Date()); };
tick(); setInterval(tick, 15000);

/* ---------- aparecer ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
$$('.reveal').forEach(el => io.observe(el));

/* ---------- cursor ---------- */
const dot = $('.cur-dot'), ring = $('.cur-ring');
let domHover = false;
document.addEventListener('pointerover', e => { domHover = !!e.target.closest('a,button'); });

/* ---------- rádio ---------- */
let radio = null, soundOn = false;
const soundBtn = $('#sound');
function setSound(on) {
  soundOn = on;
  if (on && !radio) { try { radio = createRadio(); } catch (e) { console.warn(e); } }
  if (radio) on ? radio.start() : radio.stop();
  soundBtn.setAttribute('aria-pressed', on); $('.sound-label').innerHTML = t(on ? 'radioOn' : 'radioOff');
}
soundBtn.addEventListener('click', () => setSound(!soundOn));
const sfx = (k, ...a) => { if (soundOn && radio) radio[k](...a); };

/* ---------- mundo ---------- */
const LINKS = $$('.num a').map(a => a.getAttribute('href'));
let world = null;
try { if (!location.hash.includes('nogl')) world = createWorld($('#world'), { mobile, links: LINKS }); } catch (err) { console.error(err); }

addEventListener('pointerdown', e => {
  if (e.target.closest('a,button,.term')) return;
  const hit = world && world.click(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight * 2 - 1));
  if (!hit) return;
  if (hit.type === 'link' && hit.href) { window.open(hit.href, '_blank', 'noopener'); }
  if (hit.type === 'sea') sfx('splash');
  if (hit.type === 'obj') sfx('hit', 300);
});

/* ---------- lista do Hypnotize acende a tela correspondente ---------- */
const nums = $$('.num');

/* ---------- círculos ---------- */
/* ---------- terminal ---------- */
const term = createTerminal($('#term'), {
  lang: () => lang,
  projects: [
    { name: 'tropicália ácida (hypnotize)', href: '../tropicalia-acida-v2/index.html' },
    { name: 'vigia (hypnotize)', href: '../vigia/index.html' },
    { name: 'ccd ensino', target: '#trabalho' },
    { name: 'trinity', target: '#codigo' },
    { name: 'websocket minecraft', target: '#websocket' },
    { name: 'finpay', target: '#finpay' },
    { name: 'jovi cam assist', target: '#jovi' },
  ],
  onCmd: () => sfx('hit', 300),
});
new IntersectionObserver((es, ob) => es.forEach(e => { if (e.isIntersecting) { term.boot(); ob.disconnect(); } }), { threshold: .5 }).observe($('#term'));

/* ---------- e-mail: copia ---------- */
const toast = $('#toast');
$('#mail').addEventListener('click', async e => {
  const m = e.currentTarget.dataset.mail;
  try { await navigator.clipboard.writeText(m); toast.textContent = t('copied'); toast.classList.add('on'); setTimeout(() => toast.classList.remove('on'), 2200); }
  catch { location.href = 'mailto:' + m; }
});

/* ---------- fundo ---------- */
const bgC = $('#bg');
const gl = bgC.getContext('webgl', { antialias: false, alpha: false });
let bgProg = null; const BU = {};
if (gl) {
  const sh = (ty, src) => { const o = gl.createShader(ty); gl.shaderSource(o, src); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(o)); return null; } return o; };
  const vs = sh(gl.VERTEX_SHADER, BG_VERT), fs = sh(gl.FRAGMENT_SHADER, BG_FRAG);
  if (vs && fs) {
    bgProg = gl.createProgram(); gl.attachShader(bgProg, vs); gl.attachShader(bgProg, fs); gl.linkProgram(bgProg); gl.useProgram(bgProg);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const l = gl.getAttribLocation(bgProg, 'p'); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0);
    ['uRes', 'uTime', 'uMouse', 'uVel', 'uA', 'uB', 'uC', 'uStars', 'uHorizon', 'uLevel', 'uDawn'].forEach(n => BU[n] = gl.getUniformLocation(bgProg, n));
  }
}

/* ---------- âncoras ---------- */
let anchors = [], bgScale = 1;
const secs = $$('section[data-z]');
function computeAnchors() {
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  anchors = secs.map((s, i, all) => {
    let y = s.offsetTop + s.offsetHeight / 2 - innerHeight / 2;
    if (i === 0) y = 0; if (i === all.length - 1) y = max;
    return { y: clamp(y, 0, max), z: +s.dataset.z };
  });
}
function zForScroll(y) {
  if (!anchors.length) return 10;
  if (y <= anchors[0].y) return anchors[0].z;
  for (let i = 0; i < anchors.length - 1; i++) {
    const a = anchors[i], b = anchors[i + 1];
    if (y <= b.y) { const k = (y - a.y) / Math.max(1, b.y - a.y), e = k * k * k * (k * (k * 6 - 15) + 10); return a.z + (b.z - a.z) * (e * .7 + k * .3); }
  }
  return anchors[anchors.length - 1].z;
}
function resize() {
  bgScale = Math.min(devicePixelRatio || 1, 2) * (innerWidth > 1400 ? .5 : .6);
  bgC.width = Math.round(innerWidth * bgScale); bgC.height = Math.round(innerHeight * bgScale);
  if (bgProg) gl.viewport(0, 0, bgC.width, bgC.height);
  if (world) world.resize(innerWidth, innerHeight);
  computeAnchors();
}
resize(); addEventListener('resize', resize); addEventListener('load', computeAnchors);
document.fonts && document.fonts.ready.then(computeAnchors);


/* ---------- loop ---------- */
const freqEl = $('#freq'), stEl = $('#station');
let last = performance.now(), lastY = scrollY, camZ = 10, curSec = -1, horizon = 0;

/* ---------- abertura ---------- */
setLang(lang);
setTimeout(() => { $('#tuning').classList.add('gone'); document.body.classList.add('ready'); computeAnchors(); }, SNAP ? 50 : 1450);
function frame(now) {
  const dt = Math.min((now - last) / 1000, .05); last = now; S.dt = dt;
  const y = scrollY, max = Math.max(1, document.documentElement.scrollHeight - innerHeight), p = y / max;
  S.vel += ((y - lastY) / Math.max(dt, .001) * .016 - S.vel) * .1; lastY = y;
  S.time += dt * (reduce ? .3 : 1);
  camZ = SNAP ? zForScroll(y) : camZ + (zForScroll(y) - camZ) * Math.min(1, dt * 2.8);
  S.camZ = camZ;
  S.dawn = clamp((Z.breve + 6 - camZ) / (Z.breve + 6 - Z.contato));
  S.dawn = S.dawn * S.dawn * (3 - 2 * S.dawn);

  const mvx = (mouse.x - lastMX) / Math.max(dt, .001), mvy = (mouse.y - lastMY) / Math.max(dt, .001); lastMX = mouse.x; lastMY = mouse.y;
  S.mouseSpeed += (clamp(Math.hypot(mvx, mvy) / 3000) - S.mouseSpeed) * Math.min(1, dt * 4);
  sm.x += (mouse.x - sm.x) * Math.min(1, dt * 2.2); sm.y += (mouse.y - sm.y) * Math.min(1, dt * 2.2);
  rp.x += (mouse.x - rp.x) * Math.min(1, dt * 9); rp.y += (mouse.y - rp.y) * Math.min(1, dt * 9);
  S.mouseX = sm.x / innerWidth * 2 - 1; S.mouseY = sm.y / innerHeight * 2 - 1;
  dot.style.transform = `translate(${mouse.x}px,${mouse.y}px)`; ring.style.transform = `translate(${rp.x}px,${rp.y}px)`;

  S.level += ((radio && soundOn ? radio.level() : 0) - S.level) * Math.min(1, dt * 10);
  palette(camZ);
  root.style.setProperty('--p', p.toFixed(4));
  root.style.setProperty('--mx', S.mouseX.toFixed(3)); root.style.setProperty('--my', S.mouseY.toFixed(3));

  // estação atual
  let idx = 0; anchors.forEach((a, i) => { if (y >= a.y - innerHeight * .5) idx = i; });
  if (idx !== curSec) {
    if (curSec >= 0) sfx('tune');
    curSec = idx; const s = secs[idx];
    freqEl.textContent = s.dataset.freq; stEl.textContent = lang === 'en' ? s.dataset.stEn : s.dataset.st;
  }

  let info = null;
  if (world) info = world.update(S);
  if (info) horizon += (info.horizon - horizon) * .5;
  document.body.classList.toggle('hovering', domHover || !!(info && info.hot));
  nums.forEach((n, i) => n.classList.toggle('lit', !!info && info.hoverScreen === i));

  if (bgProg) {
    gl.uniform2f(BU.uRes, bgC.width, bgC.height); gl.uniform1f(BU.uTime, S.time);
    gl.uniform2f(BU.uMouse, sm.x * bgScale, (innerHeight - sm.y) * bgScale); gl.uniform1f(BU.uVel, S.vel);
    gl.uniform3f(BU.uA, curA.r, curA.g, curA.b); gl.uniform3f(BU.uB, curB.r, curB.g, curB.b); gl.uniform3f(BU.uC, curC.r, curC.g, curC.b);
    gl.uniform1f(BU.uStars, 1 - S.dawn); gl.uniform1f(BU.uHorizon, world ? horizon : -.08); gl.uniform1f(BU.uLevel, S.level); gl.uniform1f(BU.uDawn, S.dawn);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
