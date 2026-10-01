// ============ objetos 3D — tudo procedural, nenhum modelo externo ============
import * as THREE from 'three';

export const PAL = {
  pink: 0xff2e88, orange: 0xff7a1a, yellow: 0xffd23f, green: 0x19c39a,
  blue: 0x1b2cc1, violet: 0x7b2ff7, cream: 0xfff1d6, red: 0xff3b3b, ink: 0x1a0b2e,
};
const LIST = [PAL.pink, PAL.orange, PAL.yellow, PAL.green, PAL.blue, PAL.violet];
export const pick = (rnd) => LIST[Math.floor(rnd() * LIST.length)];

// pseudo-aleatório com semente (o mundo é igual toda vez)
export function rng(seed = 1) {
  return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

/* ---------- materiais ---------- */
export const mats = {
  chrome: () => new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 1, roughness: .05,
    iridescence: 1, iridescenceIOR: 1.9, iridescenceThicknessRange: [180, 820], envMapIntensity: 1.6,
  }),
  mirror: () => new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: .02, envMapIntensity: 1.4 }),
  candy: (color, extra = {}) => new THREE.MeshPhysicalMaterial({
    color, roughness: .22, metalness: 0, clearcoat: 1, clearcoatRoughness: .06, envMapIntensity: 1.1,
    ...extra,
  }),
  glow: (color) => new THREE.MeshBasicMaterial({ color, toneMapped: false }),
};

/* ---------- flor anos 70 ---------- */
let daisyGeo = null, daisyCenterGeo = null;
export function daisy(petal, center) {
  if (!daisyGeo) {
    const s = new THREE.Shape(), N = 8, steps = 240;
    for (let i = 0; i <= steps; i++) {
      const a = i / steps * Math.PI * 2;
      const r = .5 + .5 * Math.pow(Math.abs(Math.cos(N * a / 2)), .65);
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      i ? s.lineTo(x, y) : s.moveTo(x, y);
    }
    daisyGeo = new THREE.ExtrudeGeometry(s, { depth: .1, bevelEnabled: true, bevelThickness: .09, bevelSize: .07, bevelSegments: 5, curveSegments: 6 });
    daisyGeo.center();
    daisyCenterGeo = new THREE.SphereGeometry(.34, 40, 20);
  }
  const g = new THREE.Group();
  g.add(new THREE.Mesh(daisyGeo, mats.candy(petal)));
  const c = new THREE.Mesh(daisyCenterGeo, mats.candy(center, { roughness: .35 }));
  c.scale.z = .6; c.position.z = .14; g.add(c);
  const c2 = c.clone(); c2.position.z = -.14; g.add(c2);
  return g;
}

/* ---------- espiral psicodélica (nó de toro listrado com luas) ---------- */
export function swirl(color = PAL.pink) {
  const g = new THREE.Group();
  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.05, .3, 220, 36, 2, 3), mats.candy(color));
  g.add(knot);
  const core = new THREE.Mesh(new THREE.SphereGeometry(.42, 40, 20), mats.chrome());
  g.add(core);
  const r = rng(11), dotGeo = new THREE.SphereGeometry(.14, 20, 10);
  for (let i = 0; i < 7; i++) {
    const d = new THREE.Mesh(dotGeo, mats.candy(PAL.cream)), a = i / 7 * Math.PI * 2;
    d.position.set(Math.cos(a) * 1.9, (r() - .5) * .8, Math.sin(a) * 1.9); g.add(d);
  }
  return g;
}

/* ---------- cogumelo (fora de uso) ---------- */
export function mushroom(capColor = PAL.pink) {
  const g = new THREE.Group();
  const cap = [];
  for (let i = 0; i <= 24; i++) {
    const a = i / 24 * Math.PI / 2 * 1.04;
    cap.push(new THREE.Vector2(Math.max(.001, Math.sin(a) * 1.45), Math.cos(a) * 1.05));
  }
  cap.push(new THREE.Vector2(1.42, -.12), new THREE.Vector2(1.2, -.2), new THREE.Vector2(.5, -.16), new THREE.Vector2(.001, -.1));
  const capMesh = new THREE.Mesh(new THREE.LatheGeometry(cap, 72), mats.candy(capColor));
  g.add(capMesh);
  const stem = [
    new THREE.Vector2(.001, -2.1), new THREE.Vector2(.5, -2.1), new THREE.Vector2(.56, -1.9), new THREE.Vector2(.42, -1.2),
    new THREE.Vector2(.36, -.6), new THREE.Vector2(.4, -.15), new THREE.Vector2(.001, -.12),
  ];
  g.add(new THREE.Mesh(new THREE.LatheGeometry(stem, 48), mats.candy(PAL.cream)));
  // saia do cogumelo
  const skirt = new THREE.Mesh(new THREE.TorusGeometry(.42, .07, 12, 48), mats.candy(PAL.cream));
  skirt.rotation.x = Math.PI / 2; skirt.position.y = -.75; g.add(skirt);
  // pintinhas
  const dotGeo = new THREE.SphereGeometry(.16, 20, 10), dotMat = mats.candy(PAL.cream);
  const r = rng(7);
  for (let i = 0; i < 16; i++) {
    const a = .25 + r() * 1.1, p = r() * Math.PI * 2;
    const pos = new THREE.Vector3(Math.sin(a) * Math.cos(p) * 1.45, Math.cos(a) * 1.05, Math.sin(a) * Math.sin(p) * 1.45);
    const d = new THREE.Mesh(dotGeo, dotMat);
    d.position.copy(pos);
    d.lookAt(pos.clone().multiply(new THREE.Vector3(2, 3, 2)));
    d.scale.set(1 + r() * .8, 1 + r() * .8, .35);
    g.add(d);
  }
  return g;
}

/* ---------- o olho ---------- */
function eyeTexture() {
  const W = 2048, H = 1024, cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const x = cv.getContext('2d');
  // esclera creme com gradiente
  const sg = x.createLinearGradient(0, 0, 0, H);
  sg.addColorStop(0, '#ffd9ea'); sg.addColorStop(.5, '#fff6e6'); sg.addColorStop(1, '#ffd9ea');
  x.fillStyle = sg; x.fillRect(0, 0, W, H);
  // veias psicodélicas
  const r = rng(11);
  for (let i = 0; i < 70; i++) {
    x.strokeStyle = ['#ff2e88', '#7b2ff7', '#ff7a1a'][i % 3];
    x.globalAlpha = .25 + r() * .35; x.lineWidth = 1 + r() * 3;
    let px = r() * W, py = r() < .5 ? r() * H * .2 : H - r() * H * .2;
    x.beginPath(); x.moveTo(px, py);
    for (let k = 0; k < 6; k++) {
      const nx = px + (W * .25 - px) * .18 + (r() - .5) * 120, ny = py + (H * .5 - py) * .2 + (r() - .5) * 60;
      x.quadraticCurveTo(px + (r() - .5) * 80, py + (r() - .5) * 80, nx, ny); px = nx; py = ny;
    }
    x.stroke();
  }
  x.globalAlpha = 1;
  // íris arco-íris em anéis (fica em u=.25 → olha pra +z)
  const cx = W * .25, cy = H * .5, R = H * .2;
  const rings = ['#7b2ff7', '#1b2cc1', '#19c39a', '#ffd23f', '#ff7a1a', '#ff2e88', '#7b2ff7', '#1b2cc1', '#19c39a', '#ffd23f'];
  rings.forEach((c, i) => {
    x.fillStyle = c; x.beginPath(); x.arc(cx, cy, R * (1 - i * .075), 0, Math.PI * 2); x.fill();
  });
  // raios da íris
  x.save(); x.translate(cx, cy);
  for (let i = 0; i < 90; i++) {
    x.rotate(Math.PI * 2 / 90); x.strokeStyle = i % 2 ? 'rgba(255,241,214,.35)' : 'rgba(26,11,46,.25)'; x.lineWidth = 3;
    x.beginPath(); x.moveTo(R * .3, 0); x.lineTo(R * .98, 0); x.stroke();
  }
  x.restore();
  x.lineWidth = 10; x.strokeStyle = '#1a0b2e'; x.beginPath(); x.arc(cx, cy, R, 0, Math.PI * 2); x.stroke();
  // pupila
  x.fillStyle = '#12061f'; x.beginPath(); x.arc(cx, cy, R * .3, 0, Math.PI * 2); x.fill();
  // brilho
  x.fillStyle = 'rgba(255,255,255,.95)';
  x.beginPath(); x.ellipse(cx - R * .35, cy - R * .38, R * .16, R * .1, -.6, 0, Math.PI * 2); x.fill();
  x.beginPath(); x.arc(cx + R * .32, cy + R * .3, R * .06, 0, Math.PI * 2); x.fill();
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
export function eye() {
  const root = new THREE.Group();
  const ball = new THREE.Mesh(new THREE.SphereGeometry(2.6, 96, 64),
    new THREE.MeshPhysicalMaterial({ map: eyeTexture(), roughness: .12, clearcoat: 1, clearcoatRoughness: .02, envMapIntensity: .9 }));
  root.add(ball);
  // anéis de saturno cromados
  const ringA = new THREE.Mesh(new THREE.TorusGeometry(4.1, .07, 16, 160), mats.chrome());
  const ringB = new THREE.Mesh(new THREE.TorusGeometry(4.8, .045, 16, 160), mats.chrome());
  const ringC = new THREE.Mesh(new THREE.TorusGeometry(3.5, .12, 16, 160), mats.candy(PAL.pink));
  ringA.rotation.set(1.2, .3, 0); ringB.rotation.set(1.4, -.5, 0); ringC.rotation.set(.3, 1.1, 0);
  root.add(ringA, ringB, ringC);
  // luas
  const moons = new THREE.Group();
  const mg = new THREE.SphereGeometry(.28, 32, 16);
  [PAL.yellow, PAL.green, PAL.violet, PAL.orange].forEach((c, i) => {
    const m = new THREE.Mesh(mg, mats.candy(c));
    const a = i / 4 * Math.PI * 2; m.position.set(Math.cos(a) * 4.1, 0, Math.sin(a) * 4.1);
    moons.add(m);
  });
  moons.rotation.copy(ringA.rotation); root.add(moons);
  return { root, ball, rings: [ringA, ringB, ringC], moons };
}

/* ---------- coqueiro ---------- */
let leafGeo = null;
function leafGeometry() {
  if (leafGeo) return leafGeo;
  const g = new THREE.PlaneGeometry(1, 1, 40, 6);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const s = p.getX(i) + .5, w = p.getY(i);
    const width = Math.pow(Math.sin(Math.PI * Math.min(1, s * 1.05)), .7) * .55 * (1 + .12 * Math.sin(s * 60) * (s > .15 ? 1 : 0));
    p.setXYZ(i, s * 3.3, 1.5 * s - 2.7 * s * s, w * width * 2.4);
    // dobra no meio, tipo folha de verdade
    p.setY(i, p.getY(i) - Math.abs(w) * .25 * width);
  }
  g.computeVertexNormals();
  leafGeo = g; return g;
}
export function palm(height = 5, lean = 1, trunkMat, leafMats) {
  const g = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0), new THREE.Vector3(lean * .15, height * .35, 0),
    new THREE.Vector3(lean * .55, height * .7, 0), new THREE.Vector3(lean, height, 0),
  ]);
  const n = 16, up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < n; i++) {
    const t = (i + .5) / n, p = curve.getPoint(t), tan = curve.getTangent(t);
    const r = .32 * (1 - t * .45);
    const tm = Array.isArray(trunkMat) ? trunkMat[i % trunkMat.length] : trunkMat;
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(r * .82, r * 1.08, height / n * 1.05, 18), tm);
    seg.position.copy(p); seg.quaternion.setFromUnitVectors(up, tan); g.add(seg);
  }
  const top = curve.getPoint(1);
  const crown = new THREE.Group(); crown.position.copy(top); g.add(crown);
  const lg = leafGeometry();
  for (let k = 0; k < 9; k++) {
    const leaf = new THREE.Mesh(lg, leafMats[k % leafMats.length]);
    leaf.rotation.y = k / 9 * Math.PI * 2 + (k % 2) * .2;
    leaf.rotation.z = .35 - (k % 3) * .22;
    leaf.scale.setScalar(1.15 + (k % 3) * .15);
    crown.add(leaf);
  }
  // cocos
  const cg = new THREE.SphereGeometry(.2, 20, 12), cm = mats.candy(PAL.orange);
  for (let k = 0; k < 3; k++) { const c = new THREE.Mesh(cg, cm); c.position.set(Math.cos(k * 2.1) * .25, -.2, Math.sin(k * 2.1) * .25); crown.add(c); }
  g.userData.crown = crown;
  return g;
}

/* ---------- ilha ---------- */
function stripesTexture(cols, rings = true, size = 1024) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const x = cv.getContext('2d');
  if (rings) {
    for (let i = 0; i < 24; i++) {
      x.fillStyle = cols[i % cols.length];
      x.beginPath(); x.arc(size / 2, size / 2, size / 2 * (1 - i / 24), 0, Math.PI * 2); x.fill();
    }
  } else {
    for (let i = 0; i < 32; i++) { x.fillStyle = cols[i % cols.length]; x.fillRect(0, i * size / 32, size, size / 32 + 1); }
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function island() {
  const g = new THREE.Group();
  const sand = new THREE.Mesh(new THREE.SphereGeometry(4, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2), mats.candy(PAL.yellow, { roughness: .5 }));
  sand.scale.set(1.15, .38, 1); g.add(sand);
  const sea = new THREE.Mesh(new THREE.RingGeometry(4.2, 9, 96, 1),
    new THREE.MeshPhysicalMaterial({ map: stripesTexture(['#1b2cc1', '#19c39a', '#7b2ff7', '#19c39a'], true), metalness: .3, roughness: .1, clearcoat: 1 }));
  sea.rotation.x = -Math.PI / 2; sea.position.y = .02; g.add(sea);
  const sea2 = new THREE.Mesh(new THREE.TorusGeometry(4.6, .14, 12, 120), mats.candy(PAL.cream));
  sea2.rotation.x = Math.PI / 2; sea2.position.y = .05; g.add(sea2);
  const trunk = [mats.candy(PAL.orange), mats.candy(PAL.cream)];
  const ds = { side: THREE.DoubleSide };
  const leaves = [mats.candy(PAL.green, ds), mats.candy(PAL.green, ds), mats.candy(PAL.pink, ds), mats.candy(0x0fa37f, ds)];
  const p1 = palm(5.4, 1.4, trunk, leaves); p1.position.set(-.6, 1, .3); p1.rotation.y = .4;
  const p2 = palm(4.2, -1.1, trunk, leaves); p2.position.set(.9, 1, -.5); p2.rotation.y = -.3;
  const p3 = palm(3.2, .8, trunk, leaves); p3.position.set(.3, 1.1, 1.2); p3.rotation.y = 2.2;
  g.add(p1, p2, p3);
  // sol listrado atrás
  const sun = new THREE.Mesh(new THREE.CircleGeometry(6.5, 96),
    new THREE.MeshBasicMaterial({ map: stripesTexture(['#ffd23f', '#ff7a1a', '#ffd23f', '#ff2e88'], true), toneMapped: false, transparent: true }));
  sun.position.set(0, 4.5, -9); g.add(sun);
  g.userData.palms = [p1, p2, p3]; g.userData.sun = sun;
  return g;
}

/* ---------- estrela ---------- */
let starGeo = null;
export function starGeometry() {
  if (starGeo) return starGeo;
  const s = new THREE.Shape();
  for (let i = 0; i <= 10; i++) {
    const a = i / 10 * Math.PI * 2 + Math.PI / 2, r = i % 2 ? .42 : 1;
    i ? s.lineTo(Math.cos(a) * r, Math.sin(a) * r) : s.moveTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  starGeo = new THREE.ExtrudeGeometry(s, { depth: .2, bevelEnabled: true, bevelThickness: .12, bevelSize: .1, bevelSegments: 4 });
  starGeo.center(); return starGeo;
}

/* ---------- túnel de anéis ---------- */
export function tunnel(zStart, zEnd, count = 40) {
  const g = new THREE.Group();
  const geo = new THREE.TorusGeometry(5.6, .3, 24, 140);
  const rings = [];
  for (let i = 0; i < count; i++) {
    const c = LIST[i % LIST.length];
    const m = new THREE.Mesh(geo, mats.candy(c, { emissive: new THREE.Color(c), emissiveIntensity: .35 }));
    m.position.z = zStart + (zEnd - zStart) * i / (count - 1);
    m.userData.i = i; rings.push(m); g.add(m);
  }
  // espiral de estrelinhas dentro
  const sg = starGeometry(), sm = [mats.chrome(), mats.candy(PAL.yellow), mats.candy(PAL.cream)];
  const spiral = new THREE.Group();
  for (let i = 0; i < 70; i++) {
    const t = i / 70, a = t * Math.PI * 14;
    const s = new THREE.Mesh(sg, sm[i % 3]);
    s.position.set(Math.cos(a) * 3.6, Math.sin(a) * 3.6, zStart + (zEnd - zStart) * t);
    s.scale.setScalar(.22 + (i % 4) * .05); s.rotation.set(a, a * .5, 0);
    spiral.add(s);
  }
  g.add(spiral);
  g.userData = { rings, spiral };
  return g;
}
