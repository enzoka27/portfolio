// ============ objetos procedurais do portfólio ============
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

export const mats = {
  chrome: (color = 0xffffff, o = {}) => new THREE.MeshPhysicalMaterial({ color, metalness: 1, roughness: .1, iridescence: .7, iridescenceIOR: 1.5, envMapIntensity: 1.5, ...o }),
  candy: (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, metalness: 0, roughness: .25, clearcoat: 1, clearcoatRoughness: .05, ...o }),
  glass: (color = 0xffffff, o = {}) => new THREE.MeshPhysicalMaterial({ color, metalness: 0, roughness: .04, transmission: 1, thickness: .6, ior: 1.45, iridescence: .5, envMapIntensity: 1.4, transparent: true, ...o }),
  matte: (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: .7, metalness: .05, ...o }),
};

/* ---------- a fita de sinal: uma onda iridescente atravessando o título ---------- */
export function signalRibbon({ n = 280, len = 34, width = .42, mat }) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array((n + 1) * 2 * 3), uv = new Float32Array((n + 1) * 2 * 2), idx = [];
  for (let i = 0; i <= n; i++) { uv.set([i / n, 0, i / n, 1], i * 4); if (i < n) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); geo.setIndex(idx);
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false;
  const c = new THREE.Vector3(), t = new THREE.Vector3(), b = new THREE.Vector3(), up = new THREE.Vector3();
  const P = (x, T, amp, lvl, k) => {
    const env = Math.exp(-Math.pow(x / (len * .42), 4));
    return c.set(x, (Math.sin(x * .38 + T * 1.1 + k) * 1.25 + Math.sin(x * 1.25 - T * 1.9 + k * 2) * .35 * (1 + lvl * 2.5) + Math.sin(x * 3.1 + T * 3) * .08 * lvl * 4) * env * amp,
      Math.sin(x * .21 + T * .4 + k) * 1.4);
  };
  function update(T, { amp = 1, lvl = 0, phase = 0 } = {}) {
    for (let i = 0; i <= n; i++) {
      const x = (i / n - .5) * len;
      const p0 = P(x, T, amp, lvl, phase).clone(), p1 = P(x + .05, T, amp, lvl, phase);
      t.copy(p1).sub(p0).normalize();
      const tw = x * .22 + T * .6 + phase;
      up.set(0, Math.cos(tw), Math.sin(tw));
      b.crossVectors(t, up).normalize().cross(t).normalize();
      const w = width * (.35 + .65 * Math.exp(-Math.pow(x / (len * .35), 2)));
      pos.set([p0.x + b.x * w, p0.y + b.y * w, p0.z + b.z * w, p0.x - b.x * w, p0.y - b.y * w, p0.z - b.z * w], i * 6);
    }
    geo.attributes.position.needsUpdate = true; geo.computeVertexNormals();
  }
  return { mesh, update };
}

/* ---------- ondas de rádio: anéis que saem e somem ---------- */
export function radioRings(count = 7) {
  const group = new THREE.Group();
  const rings = [];
  for (let i = 0; i < count; i++) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(1, .018, 8, 160), new THREE.MeshBasicMaterial({ color: 0x8fe3ff, transparent: true, opacity: 0, toneMapped: false, depthWrite: false, blending: THREE.AdditiveBlending }));
    group.add(m); rings.push({ m, age: i / count * 6 });
  }
  const core = new THREE.Mesh(new THREE.SphereGeometry(.42, 48, 24), mats.chrome(0xffffff, { iridescence: 1 }));
  group.add(core);
  const extra = [];
  function pulse() { extra.push({ age: 0 }); }
  function update(dt, T, lvl = 0) {
    rings.forEach(r => {
      r.age = (r.age + dt * (1 + lvl)) % 6;
      const k = r.age / 6; r.m.scale.setScalar(.6 + k * 9); r.m.material.opacity = (1 - k) * .75; r.m.rotation.set(Math.PI / 2 + Math.sin(T * .3) * .15, 0, 0);
    });
    while (extra.length && extra[0].age > 2.4) extra.shift();
    extra.forEach((e, i) => { e.age += dt; });
    // pulsos de clique reaproveitam os primeiros anéis como brilho extra
    const boost = extra.reduce((s, e) => s + Math.max(0, 1 - e.age / 2.4), 0);
    core.scale.setScalar(1 + Math.sin(T * 2) * .04 + boost * .25 + lvl * .3);
    core.rotation.y = T * .4;
  }
  return { group, update, pulse };
}

/* ---------- tela flutuante (Hypnotize) ---------- */
export function screen(tex, { w = 3.4, h = 2.125 } = {}) {
  const group = new THREE.Group();
  const frame = new THREE.Mesh(new RoundedBoxGeometry(w + .16, h + .16, .1, 4, .06), mats.chrome(0x9aa0b0, { roughness: .18, iridescence: .3 }));
  group.add(frame);
  const glow = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
  const face = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glow); face.position.z = .052; group.add(face);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mats.candy(0x111111)); back.position.z = -.052; back.rotation.y = Math.PI; group.add(back);
  return { group, face, frame };
}

/* ---------- janelas de navegador (trabalho de cliente) ---------- */
export function browserWindow(seed, accent = '#ffd08a') {
  const R = rng(seed);
  const cw = 1024, ch = 680;
  const c = document.createElement('canvas'); c.width = cw; c.height = ch; const x = c.getContext('2d');
  x.fillStyle = '#f4f1ea'; x.fillRect(0, 0, cw, ch);
  x.fillStyle = '#e3ddd1'; x.fillRect(0, 0, cw, 46);
  ['#ff5f57', '#febc2e', '#28c840'].forEach((col, i) => { x.fillStyle = col; x.beginPath(); x.arc(26 + i * 24, 23, 7, 0, 7); x.fill(); });
  x.fillStyle = '#fff'; x.fillRect(120, 12, 520, 22); x.fillStyle = '#9a9384'; x.font = '15px monospace'; x.fillText('https://ccdensino.com.br/', 132, 28);
  // header
  x.fillStyle = '#0f2a44'; x.fillRect(0, 46, cw, 70);
  x.fillStyle = '#fff'; x.fillRect(40, 70, 120, 22);
  for (let i = 0; i < 5; i++) { x.fillStyle = 'rgba(255,255,255,.7)'; x.fillRect(420 + i * 96, 76, 70, 10); }
  x.fillStyle = accent; x.fillRect(cw - 150, 66, 110, 30);
  // hero da página
  const g = x.createLinearGradient(0, 116, cw, 360); g.addColorStop(0, '#173b5e'); g.addColorStop(1, '#2f6f8f');
  x.fillStyle = g; x.fillRect(0, 116, cw, 250);
  x.fillStyle = '#fff'; x.fillRect(60, 170, 420, 34); x.fillRect(60, 214, 340, 34);
  x.fillStyle = 'rgba(255,255,255,.6)'; x.fillRect(60, 268, 380, 10); x.fillRect(60, 286, 300, 10);
  x.fillStyle = accent; x.fillRect(60, 312, 150, 34);
  x.fillStyle = 'rgba(255,255,255,.15)'; x.beginPath(); x.arc(780, 240, 110, 0, 7); x.fill();
  // cards
  for (let i = 0; i < 4; i++) {
    const px = 40 + i * 240; x.fillStyle = '#fff'; x.fillRect(px, 396, 220, 240);
    x.fillStyle = ['#d8e6ef', '#efe2d0', '#dfefe2', '#ece0ef'][(i + (R() * 4 | 0)) % 4]; x.fillRect(px, 396, 220, 110);
    x.fillStyle = '#1b2733'; x.fillRect(px + 16, 524, 150, 14);
    x.fillStyle = '#a7a7a7'; x.fillRect(px + 16, 548, 180, 8); x.fillRect(px + 16, 562, 140, 8);
    x.fillStyle = '#0f2a44'; x.fillRect(px + 16, 590, 100, 26);
  }
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const s = screen(tex, { w: 3.6, h: 2.39 });
  s.frame.material = mats.candy(0xe9e4da, { roughness: .35 });
  return s;
}

/* ---------- Trinity: três anéis em giroscópio ---------- */
export function trinity() {
  const group = new THREE.Group();
  const cols = [0xff5b1f, 0xb7a6ff, 0xefe9da];
  const rings = cols.map((c, i) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(1.6 - i * .32, .09, 24, 160), mats.chrome(c, { iridescence: .9 }));
    group.add(m); return m;
  });
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(.42, 0), mats.chrome(0xffffff, { iridescence: 1, roughness: .05 }));
  group.add(core);
  // balão de fala flutuando ("/play")
  const bubble = new THREE.Group();
  const shape = new THREE.Shape(); const W = 1.3, H = .62, r = .2;
  shape.moveTo(-W / 2 + r, -H / 2); shape.lineTo(-W / 2 + .5, -H / 2); shape.lineTo(-W / 2 + .3, -H / 2 - .28); shape.lineTo(-W / 2 + .75, -H / 2);
  shape.lineTo(W / 2 - r, -H / 2); shape.quadraticCurveTo(W / 2, -H / 2, W / 2, -H / 2 + r); shape.lineTo(W / 2, H / 2 - r); shape.quadraticCurveTo(W / 2, H / 2, W / 2 - r, H / 2);
  shape.lineTo(-W / 2 + r, H / 2); shape.quadraticCurveTo(-W / 2, H / 2, -W / 2, H / 2 - r); shape.lineTo(-W / 2, -H / 2 + r); shape.quadraticCurveTo(-W / 2, -H / 2, -W / 2 + r, -H / 2);
  const bm = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: .14, bevelEnabled: true, bevelSize: .04, bevelThickness: .04, bevelSegments: 4 }), mats.candy(0x5865f2));
  bubble.add(bm);
  const tc = document.createElement('canvas'); tc.width = 256; tc.height = 128; const tx = tc.getContext('2d');
  tx.fillStyle = '#fff'; tx.font = 'bold 54px monospace'; tx.textAlign = 'center'; tx.textBaseline = 'middle'; tx.fillText('/play', 128, 66);
  const tt = new THREE.CanvasTexture(tc); tt.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Mesh(new THREE.PlaneGeometry(1.1, .55), new THREE.MeshBasicMaterial({ map: tt, transparent: true, toneMapped: false }));
  label.position.z = .2; bubble.add(label);
  bubble.position.set(-1.9, 1.7, .3); bubble.scale.setScalar(.9); group.add(bubble);
  function update(T, spin = 0) {
    rings[0].rotation.set(T * .6 + spin, T * .2, 0);
    rings[1].rotation.set(0, T * .8 + spin * 1.3, T * .3);
    rings[2].rotation.set(T * .5, 0, T * .9 + spin);
    core.rotation.set(T * .7, T, 0);
    bubble.position.y = 1.6 + Math.sin(T * 1.6) * .12; bubble.rotation.y = Math.sin(T * .8) * .3;
  }
  return { group, update, pick: [...rings, core, bm] };
}

/* ---------- WebSocket: dois blocos de voxels trocando pacotes ---------- */
export function packetStream() {
  const group = new THREE.Group();
  const R = rng(19);
  const cube = new THREE.BoxGeometry(.32, .32, .32);
  const mA = mats.candy(0x7dffb8), mB = mats.candy(0xefe9da), mC = mats.chrome(0x7dffb8, { iridescence: .4 });
  const block = (cx, mat) => { const g = new THREE.Group(); for (let x = 0; x < 4; x++) for (let y = 0; y < 4; y++) for (let z = 0; z < 4; z++) { if (R() < .22 && y > 0) continue; const m = new THREE.Mesh(cube, y === 3 ? mA : mat); m.position.set((x - 1.5) * .34, (y - 1.5) * .34, (z - 1.5) * .34); g.add(m); } g.position.x = cx; group.add(g); return g; };
  const server = block(-2.4, mB), game = block(2.4, mats.candy(0x3a7a5a));
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(-2.1, .2, 0), new THREE.Vector3(-1, 1.4, .6), new THREE.Vector3(1, 1.4, -.6), new THREE.Vector3(2.1, .2, 0)]);
  const curve2 = new THREE.CatmullRomCurve3([new THREE.Vector3(2.1, -.2, 0), new THREE.Vector3(1, -1.3, .7), new THREE.Vector3(-1, -1.3, -.5), new THREE.Vector3(-2.1, -.2, 0)]);
  const N = 26;
  const pk = new THREE.InstancedMesh(new THREE.BoxGeometry(.14, .14, .14), mC, N * 2);
  group.add(pk);
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 64, .012, 6), new THREE.MeshBasicMaterial({ color: 0x7dffb8, transparent: true, opacity: .35, toneMapped: false }));
  const tube2 = new THREE.Mesh(new THREE.TubeGeometry(curve2, 64, .012, 6), new THREE.MeshBasicMaterial({ color: 0xefe9da, transparent: true, opacity: .25, toneMapped: false }));
  group.add(tube, tube2);
  const d = new THREE.Object3D(), p = new THREE.Vector3();
  function update(T, speed = 1) {
    for (let i = 0; i < N * 2; i++) {
      const second = i >= N, k = ((i % N) / N + T * .12 * speed * (second ? .8 : 1)) % 1;
      (second ? curve2 : curve).getPointAt(k, p);
      d.position.copy(p); d.rotation.set(T * 2 + i, T * 3 + i, 0); d.scale.setScalar(Math.sin(k * Math.PI) * 1.2 + .1); d.updateMatrix(); pk.setMatrixAt(i, d.matrix);
    }
    pk.instanceMatrix.needsUpdate = true;
    server.rotation.y = T * .3; game.rotation.y = -T * .25; server.position.y = Math.sin(T) * .1; game.position.y = Math.cos(T) * .1;
  }
  return { group, update, pick: [...server.children, ...game.children] };
}

/* ---------- FinPay: cartão de vidro e moedas ---------- */
export function finpayCard() {
  const group = new THREE.Group();
  const c = document.createElement('canvas'); c.width = 1024; c.height = 640; const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 1024, 640); g.addColorStop(0, '#1a1f2e'); g.addColorStop(.6, '#2c2340'); g.addColorStop(1, '#4a3a1a');
  x.fillStyle = g; x.fillRect(0, 0, 1024, 640);
  x.fillStyle = 'rgba(255,211,106,.12)'; for (let i = 0; i < 12; i++) { x.beginPath(); x.arc(860, 120, 60 + i * 34, 0, 7); x.lineWidth = 2; x.strokeStyle = 'rgba(255,211,106,.12)'; x.stroke(); }
  x.fillStyle = '#ffd36a'; x.font = '900 72px sans-serif'; x.fillText('FinPay', 70, 130);
  const cg = x.createLinearGradient(70, 230, 230, 350); cg.addColorStop(0, '#f3d38a'); cg.addColorStop(1, '#a8823a');
  x.fillStyle = cg; x.fillRect(70, 230, 150, 112); x.strokeStyle = 'rgba(0,0,0,.35)'; x.lineWidth = 3; for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(70, 262 + i * 26); x.lineTo(220, 262 + i * 26); x.stroke(); }
  x.fillStyle = '#efe9da'; x.font = '48px monospace'; x.fillText('5731  ••••  ••••  2026', 70, 470);
  x.font = '28px monospace'; x.fillStyle = 'rgba(239,233,218,.7)'; x.fillText('ENZO B. SIMÕES', 70, 560); x.fillText('ARGON2ID', 760, 560);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  const card = new THREE.Mesh(new RoundedBoxGeometry(3.4, 2.12, .06, 4, .14), [mats.candy(0x2c2340), mats.candy(0x2c2340), mats.candy(0x2c2340), mats.candy(0x2c2340), new THREE.MeshPhysicalMaterial({ map: t, roughness: .25, clearcoat: 1, iridescence: .6, metalness: .2 }), mats.candy(0x1a1f2e)]);
  group.add(card);
  const coinGeo = new THREE.CylinderGeometry(.34, .34, .07, 48);
  const gold = mats.chrome(0xffd36a, { iridescence: .2, roughness: .2 });
  const coins = [];
  for (let i = 0; i < 9; i++) { const m = new THREE.Mesh(coinGeo, gold); group.add(m); coins.push({ m, ph: i * .7, r: 1.6 + (i % 3) * .5 }); }
  function update(T, k = 0) {
    card.rotation.set(-.25 + Math.sin(T * .5) * .1, Math.sin(T * .4) * .5 + k, Math.sin(T * .3) * .06);
    coins.forEach((c, i) => {
      const a = T * .6 + c.ph;
      c.m.position.set(Math.cos(a) * c.r * 1.2, Math.sin(a * 1.3) * .9 - .2, Math.sin(a) * c.r * .6);
      c.m.rotation.set(Math.PI / 2 + T * 2 + i, T * 1.5, 0);
    });
  }
  return { group, update, pick: [card, ...coins.map(c => c.m)] };
}

/* ---------- JOVI: uma lente com diafragma que abre e fecha ---------- */
export function lens() {
  const group = new THREE.Group();
  const prof = [];
  const add = (r, y) => prof.push(new THREE.Vector2(r, y));
  add(.0, -.9); add(1.15, -.9); add(1.2, -.8); add(1.2, -.5); add(1.28, -.48); add(1.28, -.3); add(1.2, -.28);
  for (let i = 0; i < 14; i++) { add(1.24, -.2 + i * .07); add(1.3, -.17 + i * .07); }    // anel de foco serrilhado
  add(1.2, .82); add(1.25, .95); add(1.08, 1.05); add(.95, 1.02);
  const barrel = new THREE.Mesh(new THREE.LatheGeometry(prof, 96), new THREE.MeshPhysicalMaterial({ color: 0x9a9ca8, roughness: .22, metalness: .9, clearcoat: .6, envMapIntensity: 1.8 }));
  barrel.rotation.x = Math.PI / 2; group.add(barrel);
  const redRing = new THREE.Mesh(new THREE.TorusGeometry(1.22, .03, 8, 96), new THREE.MeshBasicMaterial({ color: 0xff3a6a, toneMapped: false })); redRing.position.z = .7; group.add(redRing);
  const glass = new THREE.Mesh(new THREE.SphereGeometry(1.0, 64, 32, 0, Math.PI * 2, 0, Math.PI * .32), mats.chrome(0x101418, { metalness: .2, roughness: .02, iridescence: 1, iridescenceIOR: 1.8, envMapIntensity: 2.5 }));
  glass.rotation.x = Math.PI / 2; glass.position.z = .3; glass.scale.set(1, .5, 1); group.add(glass);
  // diafragma: 7 lâminas que recuam do centro conforme abre
  const blades = new THREE.Group(); blades.position.z = .86; group.add(blades);
  const bs = new THREE.Shape(); bs.moveTo(0, -.12); bs.quadraticCurveTo(.5, -.2, .95, -.05); bs.lineTo(.95, .32); bs.quadraticCurveTo(.45, .2, 0, .12); bs.lineTo(0, -.12);
  const bg = new THREE.ExtrudeGeometry(bs, { depth: .012, bevelEnabled: false });
  const bmat = new THREE.MeshStandardMaterial({ color: 0x2a2a34, roughness: .25, metalness: .9, side: THREE.DoubleSide, envMapIntensity: 1.6 });
  const bl = [];
  for (let i = 0; i < 7; i++) { const piv = new THREE.Group(); piv.rotation.z = i / 7 * Math.PI * 2; const b = new THREE.Mesh(bg, bmat); b.position.z = i * .003; piv.add(b); blades.add(piv); bl.push(b); }
  function update(T, open = .5) {
    group.rotation.set(Math.sin(T * .4) * .2 - .1, .45 + Math.sin(T * .3) * .25, 0);
    const r0 = .12 + open * .62;
    bl.forEach(b => { b.position.x = r0; b.rotation.z = .55; b.scale.set(Math.max(.2, 1.1 - r0), 1, 1); });
    redRing.rotation.z = T;
  }
  return { group, update, pick: [barrel, glass] };
}

/* ---------- espaço reservado: cubo em wireframe sendo escaneado ---------- */
export function placeholder(color = 0xff5b1f) {
  const group = new THREE.Group();
  const box = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2)), new THREE.LineBasicMaterial({ color, transparent: true, opacity: .9, toneMapped: false }));
  const inner = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(.8, 0)), new THREE.LineBasicMaterial({ color: 0xefe9da, transparent: true, opacity: .5 }));
  const scan = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .12, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  scan.rotation.x = Math.PI / 2;
  group.add(box, inner, scan);
  function update(T, ph = 0) {
    box.rotation.set(T * .3 + ph, T * .4, 0); inner.rotation.set(-T * .5, T * .2 + ph, T * .1);
    scan.position.y = Math.sin(T * 1.4 + ph) * 1.1;
  }
  return { group, update };
}
