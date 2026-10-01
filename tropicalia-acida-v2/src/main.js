// ============ TROPICÁLIA ÁCIDA VOL. 2 — Hypnotize Nº02 ============
import { BG_VERT, BG_FRAG } from './shaders.js';
import { createWorld } from './world.js';
import { paintPostcard } from './postcards.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };

/* ---------- estado ---------- */
const S = { time: 7, dt: 0, camZ: 9, mouseX: 0, mouseY: 0, peak: 0, dawn: 0, vel: 0, click: 0, tunnel: 0 };
const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
const sm = { ...mouse }, rp = { ...mouse };
addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

/* ---------- cartões-postais ---------- */
$$('[data-card]').forEach(c => paintPostcard(c, +c.dataset.card));

/* ---------- relógio ---------- */
const clock = $('#clock');
const tick = () => { clock.textContent = 'PRAIA GRANDE · ' + new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' }).format(new Date()); };
tick(); setInterval(tick, 15000);

/* ---------- aparecer ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08 });
$$('.reveal').forEach(el => io.observe(el));

/* ---------- cursor ---------- */
const dot = $('.cur-dot'), ring = $('.cur-ring');
document.addEventListener('pointerover', e => document.body.classList.toggle('hovering', !!e.target.closest('button, .polaroid')));

/* ---------- som ---------- */
let ac = null, master, filter, delay, soundOn = false;
const soundBtn = $('#sound');
function initAudio() {
  ac = new (window.AudioContext || window.webkitAudioContext)();
  master = ac.createGain(); master.gain.value = 0;
  filter = ac.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 500; filter.Q.value = 6;
  delay = ac.createDelay(2); delay.delayTime.value = .43;
  const fb = ac.createGain(); fb.gain.value = .4; const wet = ac.createGain(); wet.gain.value = .5;
  filter.connect(master); filter.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(master);
  master.connect(ac.destination);
  // Mi menor com nona — mais escuro e mais fundo que a v1
  [82.41, 123.47, 164.81, 196, 246.94, 293.66, 369.99].forEach((f, i) => {
    const o = ac.createOscillator(); o.type = i % 2 ? 'triangle' : 'sine'; o.frequency.value = f;
    const g = ac.createGain(); const base = .16 / (1 + i * .55); g.gain.value = base;
    const lfo = ac.createOscillator(); lfo.frequency.value = .04 + i * .023;
    const lg = ac.createGain(); lg.gain.value = f * .006; lfo.connect(lg); lg.connect(o.frequency); lfo.start();
    const tr = ac.createOscillator(); tr.frequency.value = .07 + i * .05;
    const tg = ac.createGain(); tg.gain.value = base * .7; tr.connect(tg); tg.connect(g.gain); tr.start();
    o.connect(g); g.connect(filter); o.start();
  });
}
function setSound(on) {
  soundOn = on;
  if (on && !ac) initAudio();
  if (ac) { if (on) ac.resume(); master.gain.cancelScheduledValues(ac.currentTime); master.gain.setTargetAtTime(on ? .55 : 0, ac.currentTime, on ? 1.2 : .25); }
  soundBtn.setAttribute('aria-pressed', on); $('.sound-label').textContent = on ? 'som: on' : 'som: off';
}
const PENTA = [659.25, 739.99, 987.77, 1108.73, 1318.5, 1479.98];
function chime(n = 1) {
  if (!soundOn || !ac) return;
  for (let k = 0; k < n; k++) {
    const t = ac.currentTime + k * .1, o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.value = PENTA[(Math.random() * PENTA.length) | 0] * (Math.random() < .3 ? .5 : 1);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.11, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + 2.2);
    o.connect(g); g.connect(delay); g.connect(master); o.start(t); o.stop(t + 2.4);
  }
}
soundBtn.addEventListener('click', () => setSound(!soundOn));
addEventListener('pointerdown', e => { if (!e.target.closest('button, .polaroid')) { S.click = 1; chime(1); } });

/* ---------- fotos arrastáveis ---------- */
let zTop = 10;
$$('.polaroid').forEach(p => {
  let sx = 0, sy = 0, dx = 0, dy = 0, drag = false;
  p.addEventListener('pointerdown', e => {
    drag = true; p.setPointerCapture(e.pointerId); p.classList.add('dragging'); document.body.classList.add('grabbing');
    p.style.zIndex = ++zTop; sx = e.clientX - dx; sy = e.clientY - dy; chime(1);
  });
  p.addEventListener('pointermove', e => {
    if (!drag) return;
    dx = e.clientX - sx; dy = e.clientY - sy;
    p.style.setProperty('--dx', dx + 'px'); p.style.setProperty('--dy', dy + 'px');
  });
  const end = () => { if (!drag) return; drag = false; p.classList.remove('dragging'); document.body.classList.remove('grabbing'); };
  p.addEventListener('pointerup', end); p.addEventListener('pointercancel', end);
});

/* ---------- fundo líquido (WebGL 1, independente do three) ---------- */
const bgC = $('#bg');
const gl = bgC.getContext('webgl', { antialias: false, alpha: false });
let bgProg = null; const BU = {};
if (gl) {
  const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(o)); return null; } return o; };
  const vs = sh(gl.VERTEX_SHADER, BG_VERT), fs = sh(gl.FRAGMENT_SHADER, BG_FRAG);
  if (vs && fs) {
    bgProg = gl.createProgram(); gl.attachShader(bgProg, vs); gl.attachShader(bgProg, fs); gl.linkProgram(bgProg); gl.useProgram(bgProg);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const l = gl.getAttribLocation(bgProg, 'p'); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0);
    ['uRes', 'uTime', 'uMouse', 'uPeak', 'uDawn', 'uScroll', 'uVel', 'uClick'].forEach(n => BU[n] = gl.getUniformLocation(bgProg, n));
  }
}
if (!bgProg) document.body.classList.add('no-gl');

/* ---------- mundo 3D ---------- */
let world = null;
try { world = createWorld($('#world')); } catch (err) { console.error(err); }

let bgScale = 1;
function resize() {
  bgScale = Math.min(devicePixelRatio || 1, 2) * (innerWidth > 1400 ? .45 : .55);
  bgC.width = Math.round(innerWidth * bgScale); bgC.height = Math.round(innerHeight * bgScale);
  if (bgProg) gl.viewport(0, 0, bgC.width, bgC.height);
  if (world) world.resize(innerWidth, innerHeight);
  computeAnchors();
}

/* ---------- âncoras: cada seção tem uma profundidade no mundo ---------- */
let anchors = [];
function computeAnchors() {
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  anchors = $$('section[data-z]').map((s, i, all) => {
    let y = s.offsetTop + s.offsetHeight / 2 - innerHeight / 2;
    if (i === 0) y = 0;
    if (i === all.length - 1) y = max;
    return { y: clamp(y, 0, max), z: +s.dataset.z };
  });
}
function zForScroll(y) {
  if (!anchors.length) return 9;
  if (y <= anchors[0].y) return anchors[0].z;
  for (let i = 0; i < anchors.length - 1; i++) {
    const a = anchors[i], b = anchors[i + 1];
    if (y <= b.y) {
      const t = (y - a.y) / Math.max(1, b.y - a.y);
      const e = t * t * t * (t * (t * 6 - 15) + 10);       // smootherstep: a câmera "pousa" em cada cena
      return a.z + (b.z - a.z) * (e * .7 + t * .3);
    }
  }
  return anchors[anchors.length - 1].z;
}
resize();
addEventListener('resize', resize);
addEventListener('load', computeAnchors);
document.fonts && document.fonts.ready.then(computeAnchors);

/* ---------- portal ---------- */
const portal = $('#portal');
setTimeout(() => portal.classList.add('ready'), 600);
$$('[data-enter]').forEach(b => b.addEventListener('click', () => {
  portal.classList.add('gone'); document.body.classList.remove('locked'); document.body.classList.add('started');
  if (b.dataset.enter === 'sound') setSound(true);
  S.click = 1.4; computeAnchors();
}));
$('#again').addEventListener('click', () => {
  S.click = 2; chime(4);
  const start = scrollY, t0 = performance.now(), D = 5200;
  const step = now => { const k = Math.min((now - t0) / D, 1), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; scrollTo(0, start * (1 - e)); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
});

/* ---------- loop ---------- */
const depthEl = $('#depth');
const tunelSec = $('.tunel');
const SNAP = location.hash === '#snap';   // só pra testes
let last = performance.now(), lastY = scrollY, camZ = 9;

function frame(now) {
  const dt = Math.min((now - last) / 1000, .05); last = now; S.dt = dt;
  const y = scrollY, max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  const sp = y / max;
  S.vel += ((y - lastY) / Math.max(dt, .001) * .016 - S.vel) * .12; lastY = y;
  S.click *= Math.pow(.25, dt);
  S.time += dt * (reduce ? .25 : 1) * (1 + Math.min(Math.abs(S.vel) * .02, 2.2));

  camZ = SNAP ? zForScroll(y) : camZ + (zForScroll(y) - camZ) * Math.min(1, dt * 3.2);
  S.camZ = camZ;
  S.tunnel = smooth(-128, -146, camZ) * (1 - smooth(-186, -196, camZ));
  S.peak = S.tunnel;
  S.dawn = smooth(-190, -199, camZ);

  sm.x += (mouse.x - sm.x) * Math.min(1, dt * 2.2); sm.y += (mouse.y - sm.y) * Math.min(1, dt * 2.2);
  rp.x += (mouse.x - rp.x) * Math.min(1, dt * 9); rp.y += (mouse.y - rp.y) * Math.min(1, dt * 9);
  S.mouseX = sm.x / innerWidth * 2 - 1; S.mouseY = sm.y / innerHeight * 2 - 1;
  dot.style.transform = `translate(${mouse.x}px,${mouse.y}px)`;
  ring.style.transform = `translate(${rp.x}px,${rp.y}px)`;

  root.style.setProperty('--p', sp.toFixed(4));
  root.style.setProperty('--mx', S.mouseX.toFixed(3)); root.style.setProperty('--my', S.mouseY.toFixed(3));
  const tr = tunelSec.getBoundingClientRect();
  root.style.setProperty('--tp', clamp(-tr.top / Math.max(1, tr.height - innerHeight)).toFixed(4));
  depthEl.textContent = String(Math.max(0, Math.round((9 - camZ) * 11))).padStart(4, '0');

  if (ac && soundOn) filter.frequency.setTargetAtTime(420 + S.peak * 2600 + Math.min(Math.abs(S.vel) * 20, 900) + S.dawn * 400, ac.currentTime, .4);

  if (bgProg) {
    gl.uniform2f(BU.uRes, bgC.width, bgC.height); gl.uniform1f(BU.uTime, S.time);
    gl.uniform2f(BU.uMouse, sm.x * bgScale, (innerHeight - sm.y) * bgScale);
    gl.uniform1f(BU.uPeak, S.peak); gl.uniform1f(BU.uDawn, S.dawn); gl.uniform1f(BU.uScroll, sp);
    gl.uniform1f(BU.uVel, S.vel); gl.uniform1f(BU.uClick, S.click);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  if (world) world.update(S);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
