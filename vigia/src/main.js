// ============ VIGIA — Hypnotize Nº04 ============
// Um prédio de concreto que presta atenção em você.
// Tudo o que ele observa fica na memória desta aba e é apagado quando você pede (ou quando fecha).
import * as THREE from 'three';
import { BG_VERT, BG_FRAG } from './shaders.js';
import { createWorld, Z } from './world.js';
import { createWatcher, fichaLines, verdict, fmt } from './watcher.js';
import { createSound } from './audio.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = matchMedia('(pointer: coarse)').matches || innerWidth < 700;
const root = document.documentElement;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const SNAP = location.hash.includes('snap');

/* ---------- paletas por cena ---------- */
const hex = h => new THREE.Color(h);
const PALS = [
  { z: 10, A: hex(0x0a0b0d), B: hex(0x2c2e31), C: hex(0xd9f2ee) },        // fachada
  { z: -18, A: hex(0x0c0c0d), B: hex(0x2e2b29), C: hex(0xffb547) },       // vão
  { z: -70, A: hex(0x060708), B: hex(0x1b2124), C: hex(0xd9f2ee) },       // corredor
  { z: -126, A: hex(0x080808), B: hex(0x1c1b1a), C: hex(0xebe6dc) },      // pilar
  { z: -150, A: hex(0x1a120c), B: hex(0x6a543d), C: hex(0xffd59a) },      // curva
  { z: -196, A: hex(0x07090b), B: hex(0x1d252b), C: hex(0x9fe0ff) },      // arquivo
  { z: -236, A: hex(0x0d0505), B: hex(0x2b1210), C: hex(0xff4a36) },      // retrato
  { z: -274, A: hex(0x121212), B: hex(0x4a4947), C: hex(0xffffff) },      // saída
];
const curA = new THREE.Color(), curB = new THREE.Color(), curC = new THREE.Color();
const envA = new THREE.Color(), envB = new THREE.Color(), envC = new THREE.Color(), fog = new THREE.Color();
function palette(z) {
  let i = 0; while (i < PALS.length - 2 && z < PALS[i + 1].z) i++;
  const a = PALS[i], b = PALS[i + 1], t = clamp((z - a.z) / (b.z - a.z)), e = t * t * (3 - 2 * t);
  curA.copy(a.A).lerp(b.A, e); curB.copy(a.B).lerp(b.B, e); curC.copy(a.C).lerp(b.C, e);
  envA.copy(curA).multiplyScalar(1.6); envB.copy(curB).multiplyScalar(1.8); envC.copy(curC);
  fog.copy(curA).lerp(curB, .38);
}

/* ---------- estado ---------- */
const W = createWatcher();
const S = { time: 2, dt: 0, camZ: 10, mouseX: 0, mouseY: 0, vel: 0, hold: false, events: 0, envA, envB, envC, fog };
const mouse = { x: innerWidth * .5, y: innerHeight * .45 }, sm = { ...mouse };
addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
const visitorId = String(Math.floor(10000 + Math.random() * 89999));
$('#fid').textContent = visitorId;

/* ---------- aparecer ---------- */
// observa a seção (e não o elemento): o clip-path do .reveal zera a área e o observer nunca dispararia
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) $$('.reveal', e.target).forEach(r => r.classList.add('in')); }), { rootMargin: '-35% 0px -35% 0px' });
$$('section.s').forEach(el => io.observe(el));

/* ---------- cursor de câmera ---------- */
const xh = $('.xh'), xy = $('#xy');
document.addEventListener('pointerover', e => document.body.classList.toggle('hovering', !!e.target.closest('button')));

/* ---------- som ---------- */
let snd = null, soundOn = false;
const soundBtn = $('#sound');
function setSound(on) {
  soundOn = on;
  if (on && !snd) { try { snd = createSound(); } catch (e) { console.warn(e); } }
  if (snd) on ? snd.start() : snd.stop();
  soundBtn.setAttribute('aria-pressed', on); $('.sound-label').textContent = on ? 'som: on' : 'som: off';
}
soundBtn.addEventListener('click', () => setSound(!soundOn));
const sfx = (k, ...a) => { if (soundOn && snd) snd[k](...a); };

/* ---------- mundo ---------- */
let world = null;
try { if (!location.hash.includes('nogl')) world = createWorld($('#world'), { mobile }); } catch (err) { console.error(err); }
$('#eyesT').textContent = world ? world.camCount : 18;

/* ---------- flash de câmera ---------- */
const flashEl = $('#flash');
const flash = () => { flashEl.classList.remove('on'); void flashEl.offsetWidth; flashEl.classList.add('on'); };

/* ---------- segurar / clicar ---------- */
let holdStart = 0;
addEventListener('pointerdown', e => {
  if (e.target.closest('button')) return;
  const hit = world && world.click(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight * 2 - 1));
  if (hit && hit.type === 'camera') { W.blinded++; W.bump(); sfx('blind'); flash();
    const alive = world.camsAlive; say(alive === 0 ? 'todas offline. parabéns. o prédio ainda te vê.' : pick([`câmera offline. sobraram ${alive}.`, `essa você apagou. as outras ${alive} viram.`, 'quebrar a câmera não apaga o que ela já viu.']), 'cam' + alive, 0); return; }
  if (hit && hit.type === 'drawer') { W.touched++; sfx('clack'); return; }
  S.hold = true; holdStart = performance.now(); document.body.classList.add('holding');
});
const release = () => { S.hold = false; document.body.classList.remove('holding'); };
addEventListener('pointerup', release); addEventListener('pointercancel', release); addEventListener('blur', release);

/* ---------- interlúdios palavra por palavra ---------- */
const inters = $$('.inter').map(sec => {
  const p = $('[data-words]', sec);
  const walk = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) { const frag = document.createDocumentFragment(); n.textContent.split(/(\s+)/).forEach(w => { if (!w) return; if (/^\s+$/.test(w)) frag.append(w); else { const sp = document.createElement('span'); sp.className = 'w'; sp.textContent = w; frag.append(sp); } }); n.replaceWith(frag); }
    else walk(n);
  });
  walk(p);
  return { sec, words: $$('.w', p) };
});

/* ---------- a ficha ao vivo ---------- */
const fichaEl = $('#ficha'), fichaDD = [];
fichaLines(W).forEach(([k]) => { const dt = document.createElement('dt'); dt.textContent = k; const dd = document.createElement('dd'); fichaEl.append(dt, dd); fichaDD.push(dd); });
let erased = false;
setTimeout(() => renderFicha(), 0);
function renderFicha() {
  if (erased) return;
  fichaLines(W).forEach(([, v], i) => { const dd = fichaDD[i]; if (dd.textContent !== v) { dd.textContent = v; dd.classList.remove('tick'); void dd.offsetWidth; dd.classList.add('tick'); } });
}

/* ---------- fundo ---------- */
const bgC = $('#bg');
const gl = bgC.getContext('webgl', { antialias: false, alpha: false });
let bgProg = null; const BU = {};
if (gl) {
  const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(o)); return null; } return o; };
  const vs = sh(gl.VERTEX_SHADER, BG_VERT), fs = sh(gl.FRAGMENT_SHADER, BG_FRAG);
  if (vs && fs) {
    bgProg = gl.createProgram(); gl.attachShader(bgProg, vs); gl.attachShader(bgProg, fs); gl.linkProgram(bgProg); gl.useProgram(bgProg);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const l = gl.getAttribLocation(bgProg, 'p'); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0);
    ['uRes', 'uTime', 'uMouse', 'uVel', 'uA', 'uB', 'uC', 'uSpot', 'uSpotAmt', 'uShaft', 'uRec', 'uGlitch', 'uPress'].forEach(n => BU[n] = gl.getUniformLocation(bgProg, n));
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
    if (y <= b.y) { const t = (y - a.y) / Math.max(1, b.y - a.y), e = t * t * t * (t * (t * 6 - 15) + 10); return a.z + (b.z - a.z) * (e * .75 + t * .25); }
  }
  return anchors[anchors.length - 1].z;
}
function resize() {
  bgScale = Math.min(devicePixelRatio || 1, 2) * (innerWidth > 1400 ? .45 : .55);
  bgC.width = Math.round(innerWidth * bgScale); bgC.height = Math.round(innerHeight * bgScale);
  if (bgProg) gl.viewport(0, 0, bgC.width, bgC.height);
  if (world) world.resize(innerWidth, innerHeight);
  computeAnchors();
}
resize(); addEventListener('resize', resize); addEventListener('load', computeAnchors);
document.fonts && document.fonts.ready.then(computeAnchors);

/* ---------- portal ---------- */
const portal = $('#portal');
let started = false, recT0 = 0;
$$('[data-enter]').forEach(b => b.addEventListener('click', () => {
  portal.classList.add('gone'); document.body.classList.remove('locked'); document.body.classList.add('started');
  started = true; recT0 = performance.now(); W.reset(); lastEvents = 0;
  const h = new Date().getHours();
  setTimeout(() => say(`sessão iniciada. visitante nº ${visitorId}.`, 'start', 0), 900);
  setTimeout(() => say(h < 5 ? 'acordado a essa hora? anotado.' : h < 12 ? 'bom dia. a gente já tava acordado.' : h < 18 ? 'boa tarde. pode ficar à vontade. a gente fica também.' : 'boa noite. o prédio nunca dorme.', 'hello', 0), 4200);
  if (b.dataset.enter === 'sound') { setSound(true); setTimeout(() => sfx('beep'), 300); }
  computeAnchors();
}));

/* ---------- o operador ---------- */
// alguém do outro lado do monitor comenta o que você faz. tudo calculado aqui, nada enviado.
const opEl = $('#op'), opT = $('#opT');
const q = []; let opBusy = false, opHide = 0, lastSay = {};
const stamp = () => new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date());
const pick = a => a[Math.floor(Math.random() * a.length)];
function say(text, key = text, cool = 8000) {
  if (!started || erased && key !== 'erase') return;
  const now = performance.now();
  if (lastSay[key] && now - lastSay[key] < cool) return;
  lastSay[key] = now;
  if (q.length > 2) q.shift();
  q.push(text); if (!opBusy) nextSay();
}
function nextSay() {
  const text = q.shift(); if (!text) { opBusy = false; return; }
  opBusy = true; clearTimeout(opHide);
  opEl.classList.add('on'); opT.textContent = '';
  const full = `[${stamp()}] ${text}`; let i = 0;
  const type = () => { opT.textContent = full.slice(0, ++i); if (i < full.length) setTimeout(type, 22); else { if (soundOn && snd) snd.beep(); opHide = setTimeout(() => { opEl.classList.remove('on'); setTimeout(nextSay, 450); }, 2600 + text.length * 25); } };
  type();
}
const CAM_LINES = {
  'CAM 02 · VÃO LIVRE': 'tem gente parada lá embaixo. todo mundo olhando pro chão.',
  'CAM 03 · CORREDOR': 'dezoito câmeras. todas já sabem seu nome.',
  'CAM 05 · A CURVA': 'mil janelas. em algumas tem alguém olhando de volta.',
  'CAM 06 · ARQUIVO': 'cada gaveta é uma coisa que você fez sem perceber.',
  'CAM 07 · RETRATO': 'pronto. a gente terminou o seu retrato.',
  'CAM 08 · SAÍDA': 'a porta tá aberta. sempre esteve.',
};
const realTitle = document.title;
W.on = (type, d) => {
  switch (type) {
    case 'resume': if (d > 3) say(pick([`você parou ${fmt.d(d)} s. tava lendo ou pensando?`, `${fmt.d(d)} s parado. a gente esperou.`, 'voltou a se mexer. anotado.']), 'resume', 12000); break;
    case 'reverse': say(d === 1 ? 'voltou pra cima. esqueceu alguma coisa?' : `voltou atrás de novo. ${d}ª vez.`, 'reverse', 9000); break;
    case 'hide': document.title = 'volta. a gente tá vendo.'; break;
    case 'show': document.title = realTitle; say(`você saiu por ${fmt.d(d)} s. a gente ficou aqui.`, 'show', 2000); break;
    case 'keys': say(`${d} teclas apertadas. a gente não lê o que é. só conta.`, 'keys', 15000); break;
    case 'right': say('botão direito. procurando o código-fonte?', 'right', 10000); break;
    case 'copy': say('copiou. a gente também guardou uma cópia.', 'copy', 6000); break;
    case 'select': say(`você selecionou “${d.length > 28 ? d.slice(0, 28) + '…' : d}”. interessante.`, 'select', 6000); break;
    case 'resize': say('mudou o tamanho da janela. o quadro te acompanha.', 'resize', 10000); break;
    case 'exit': say(`saiu do quadro pela borda ${d}. a gente sabe onde você tá.`, 'exit', 9000); break;
  }
};

/* ---------- o fantasma: seu cursor repetido 2,5 s depois ---------- */
const ghost = $('#ghost'), trail = [];
const GHOST_DELAY = 2500;
addEventListener('pointermove', e => { trail.push([performance.now(), e.clientX, e.clientY]); if (trail.length > 600) trail.shift(); }, { passive: true });

/* ---------- apagar ---------- */
const eraseBtn = $('#erase'), verdictEl = $('#verdict');
eraseBtn.addEventListener('click', () => {
  if (erased) return;
  say('apagando tudo que a gente viu…', 'erase', 0);
  setTimeout(() => say('pronto. nada aqui. mas você vai lembrar.', 'erase', 0), 3500);
  erased = true; document.body.classList.add('erased');
  sfx('crumble'); flash();
  if (world) world.shatter();
  // a ficha vira tarja preta e depois some
  verdictEl.textContent = '████████ ██ ███████ ████';
  setTimeout(() => { W.reset(); W.path.length = 0; verdictEl.textContent = 'apagado.'; }, 2200);
});
$('#again').addEventListener('click', () => {
  erased = false; document.body.classList.remove('erased');
  W.reset(); if (world) { world.restore(); world.resetCams(); }
  lastPortrait = 0; renderFicha();
  const start = scrollY, t0 = performance.now(), D = 4200;
  const step = now => { const k = Math.min((now - t0) / D, 1), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; scrollTo(0, start * (1 - e)); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
  sfx('beep');
});

/* ---------- loop ---------- */
const tcEl = $('#tc'), heldEl = $('#held'), eyesEl = $('#eyes'), floorEl = $('#floor'), camEl = $('#camname');
const floorLis = $$('.elev-list li');
let last = performance.now(), lastY = scrollY, camZ = 10, fichaT = 0, lastPortrait = 0, lastEvents = 0, rec = 0, curSec = -1, glitch = 0, lastAlive = -1;
function frame(now) {
  const dt = Math.min((now - last) / 1000, .05); last = now; S.dt = dt;
  const y = scrollY;
  const sv = (y - lastY) / Math.max(dt, .001) * .016; S.vel += (sv - S.vel) * .1; lastY = y;
  S.time += dt * (reduce ? .3 : 1);
  camZ = SNAP ? zForScroll(y) : camZ + (zForScroll(y) - camZ) * Math.min(1, dt * 2.2);
  S.camZ = camZ;
  W.tick(dt, S.vel);
  if (S.hold && Math.abs(camZ - Z.vao) < 16) W.held += dt;

  sm.x += (mouse.x - sm.x) * Math.min(1, dt * 4); sm.y += (mouse.y - sm.y) * Math.min(1, dt * 4);
  S.mouseX = sm.x / innerWidth * 2 - 1; S.mouseY = sm.y / innerHeight * 2 - 1;
  xh.style.transform = `translate(${mouse.x}px,${mouse.y}px)`;
  // fantasma
  const tg = now - GHOST_DELAY; while (trail.length > 1 && trail[1][0] <= tg) trail.shift();
  if (trail.length) ghost.style.transform = `translate(${trail[0][1]}px,${trail[0][2]}px)`;
  // rolagem rápida
  if (started && Math.abs(S.vel) > 90) say('devagar. a gente tá anotando.', 'fast', 20000);
  xy.textContent = `x ${String(Math.round(mouse.x)).padStart(4, '0')} · y ${String(Math.round(mouse.y)).padStart(4, '0')}`;

  palette(camZ);
  root.style.setProperty('--mx', S.mouseX.toFixed(3)); root.style.setProperty('--my', S.mouseY.toFixed(3));

  // cada coisa nova observada: obturador + borda vermelha
  S.events = W.events;
  if (W.events > lastEvents) { rec = 1; if (started && !erased) sfx('shutter'); lastEvents = W.events; }
  rec = Math.max(0, rec - dt * 1.4);

  // cena atual
  let idx = 0; anchors.forEach((a, i) => { if (y >= a.y - innerHeight * .5) idx = i; });
  if (idx !== curSec) { curSec = idx; const s = secs[idx]; if (CAM_LINES[s.dataset.cam]) say(CAM_LINES[s.dataset.cam], s.dataset.cam, 30000); camEl.textContent = s.dataset.cam; floorEl.textContent = s.dataset.floor; floorLis.forEach(li => li.classList.toggle('on', li.textContent === s.dataset.floor)); glitch = 1; }
  glitch = Math.max(0, glitch - dt * 2.5);

  let info = null;
  if (world) { S.onClack = n => sfx('clack'); info = world.update(S); }
  if (info && soundOn && snd) snd.set({ hum: info.nearC ? 1 : .25, drone: .7, servo: info.servo, rumble: info.rumble, flicker: info.flicker });
  if (world && world.camsAlive !== lastAlive) { lastAlive = world.camsAlive; eyesEl.textContent = lastAlive; }

  if (started) tcEl.textContent = fmt.clock((now - recT0) / 1000);
  heldEl.textContent = fmt.d(W.held);
  if ((fichaT += dt) > .25) { fichaT = 0; renderFicha(); }

  // o retrato se entalha enquanto você está perto dele
  if (world && !erased && Math.abs(camZ - Z.retrato) < 30 && now - lastPortrait > 600) {
    lastPortrait = now;
    const v = verdict(W); verdictEl.textContent = v;
    world.drawPortrait(W, fichaLines(W), v, visitorId);
  }

  inters.forEach(it => {
    const r = it.sec.getBoundingClientRect(), k = clamp(-r.top / Math.max(1, r.height - innerHeight) * 1.25 + .05);
    it.words.forEach((w, i) => w.classList.toggle('on', k > i / it.words.length));
  });

  if (bgProg) {
    gl.uniform2f(BU.uRes, bgC.width, bgC.height); gl.uniform1f(BU.uTime, S.time);
    gl.uniform2f(BU.uMouse, sm.x * bgScale, (innerHeight - sm.y) * bgScale); gl.uniform1f(BU.uVel, S.vel);
    gl.uniform3f(BU.uA, curA.r, curA.g, curA.b); gl.uniform3f(BU.uB, curB.r, curB.g, curB.b); gl.uniform3f(BU.uC, curC.r, curC.g, curC.b);
    const sp = info && info.spotNDC ? info.spotNDC : null;
    if (sp) gl.uniform2f(BU.uSpot, (sp.x * .5 + .5) * bgC.width, (sp.y * .5 + .5) * bgC.height);
    else gl.uniform2f(BU.uSpot, sm.x * bgScale, (innerHeight - sm.y) * bgScale);
    gl.uniform1f(BU.uSpotAmt, sp ? .55 : .14);
    gl.uniform1f(BU.uShaft, camZ < -140 && camZ > -165 ? 1.4 : .7);
    gl.uniform1f(BU.uRec, rec + (erased ? 0 : 0));
    gl.uniform1f(BU.uGlitch, glitch + (info && info.servo > 3 ? .15 : 0));
    gl.uniform1f(BU.uPress, info ? info.press : 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
