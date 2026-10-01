// ============ o mundo 3D — VIGIA ============
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { ENV_VERT, ENV_FRAG, BEAM_VERT, BEAM_FRAG, DUST_VERT, DUST_FRAG, CRUMBLE_VERT, CRUMBLE_FRAG } from './shaders.js';
import { concreteTextures, concreteMat, cbox, rng, labelAtlas } from './concrete.js';

export const Z = { fachada: 10, vao: -18, corredor: -70, inter: -126, curva: -150, arquivo: -196, retrato: -236, saida: -274 };

export function createWorld(canvas, { mobile = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x111111, 16, 64);
  const camera = new THREE.PerspectiveCamera(40, 1, .1, 72);
  camera.position.set(0, 0, 10);
  const R = rng(404);

  /* ---- reflexo: um salão de concreto ---- */
  const envScene = new THREE.Scene();
  const envU = { uTime: { value: 0 }, uA: { value: new THREE.Color() }, uB: { value: new THREE.Color() }, uC: { value: new THREE.Color() } };
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(50, 48, 24), new THREE.ShaderMaterial({ vertexShader: ENV_VERT, fragmentShader: ENV_FRAG, uniforms: envU, side: THREE.BackSide, depthWrite: false })));
  const cubeRT = new THREE.WebGLCubeRenderTarget(128, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
  const cubeCam = new THREE.CubeCamera(.1, 100, cubeRT); envScene.add(cubeCam);
  scene.environment = cubeRT.texture;
  scene.environmentIntensity = .55;

  /* ---- luzes ---- */
  const rig = new THREE.Group(); scene.add(rig);
  const hemi = new THREE.HemisphereLight(0xdfe8ea, 0x2a2622, .55); scene.add(hemi);
  const key = new THREE.DirectionalLight(0xfff2e0, 2.4);
  key.castShadow = true;
  key.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
  Object.assign(key.shadow.camera, { left: -18, right: 18, top: 16, bottom: -12, near: 1, far: 70 });
  key.shadow.bias = -.0006; key.shadow.normalBias = .05;
  const fill = new THREE.DirectionalLight(0x9fd8ff, .5); fill.position.set(8, -2, 6);
  rig.add(key, key.target, fill, fill.target);

  /* ---- materiais ---- */
  const T1 = concreteTextures({ seed: 3, tone: 170 });
  const T2 = concreteTextures({ seed: 11, tone: 150, warm: 6, planks: 6 });
  const T3 = concreteTextures({ seed: 29, tone: 186, warm: 2, planks: 10, holes: false });
  const conc = concreteMat(T1), concDark = concreteMat(T2, { color: 0xb8b2aa }), concLight = concreteMat(T3);
  const red = concreteMat(T2, { color: 0xff3a24, rough: .6, bumpScale: 1.2 });
  const glassDark = new THREE.MeshPhysicalMaterial({ color: 0x14191c, roughness: .08, metalness: .4, clearcoat: 1, envMapIntensity: 1.6 });
  const paint = new THREE.MeshStandardMaterial({ color: 0xdedad2, roughness: .38, metalness: .15 });
  const black = new THREE.MeshStandardMaterial({ color: 0x111214, roughness: .35, metalness: .3 });
  const lensGlass = new THREE.MeshPhysicalMaterial({ color: 0x0a0d12, roughness: .02, metalness: .2, clearcoat: 1, iridescence: 1, iridescenceIOR: 1.6, envMapIntensity: 2.2 });
  const lensBroken = new THREE.MeshStandardMaterial({ color: 0x8a8c90, roughness: .9, metalness: 0, emissive: 0x000000 });

  /* ======================= 00 · A FACHADA ======================= */
  const tower = new THREE.Group(); tower.position.set(6, 0, -13); scene.add(tower);
  { const tb = cbox(8, 40, 5.2, conc, 4, R); tb.position.set(0, 6, -.6); tower.add(tb); }
  const winRows = 22, winCols = 5;
  const winGeo = new THREE.PlaneGeometry(1.25, .9);
  const winMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false, fog: true });
  const windows = new THREE.InstancedMesh(winGeo, winMat, winRows * winCols);
  const dummy = new THREE.Object3D(), wCol = new THREE.Color();
  const winInfo = [];
  for (let r = 0; r < winRows; r++) for (let c = 0; c < winCols; c++) {
    const i = r * winCols + c, y = -12 + r * 1.65, x = -3 + c * 1.5;
    dummy.position.set(x, y, 2.02); dummy.updateMatrix(); windows.setMatrixAt(i, dummy.matrix);
    winInfo.push({ y, x, lit: 0, base: R() < .12 ? .25 + R() * .3 : .02, ph: R() * 6 });
    windows.setColorAt(i, wCol.setScalar(.02));
  }
  tower.add(windows);
  // brises horizontais (as lâminas de concreto entre os andares)
  for (let r = 0; r <= winRows; r++) {
    const fin = cbox(8.4, .38, 1.4, concLight, 4, R); fin.position.set(0, -12.9 + r * 1.65, 2.75); tower.add(fin);
  }
  for (let c = 0; c <= winCols; c++) {          // montantes verticais
    const m = cbox(.26, 40, 1.4, concLight, 4, R); m.position.set(-3.75 + c * 1.5, 6, 2.7); tower.add(m);
  }
  // pódio e bloco vizinho
  
  const ground = cbox(90, 1, 80, concDark, 6, R); ground.position.set(0, -12.5, -20); scene.add(ground);

  // o holofote
  const lampHead = new THREE.Group(); lampHead.position.set(.3, 7.4, -7.4); scene.add(lampHead);
  const lampBody = new THREE.Mesh(new THREE.CylinderGeometry(.42, .55, .9, 32, 1), black); lampBody.rotation.x = Math.PI / 2; lampHead.add(lampBody);
  const lampFace = new THREE.Mesh(new THREE.CircleGeometry(.4, 32), new THREE.MeshBasicMaterial({ color: 0xfff6e8, toneMapped: false })); lampFace.position.z = .46; lampHead.add(lampFace);
  const beamU = { uColor: { value: new THREE.Color(0xe8fbff) }, uAmt: { value: .9 }, uTime: { value: 0 }, uInv: { value: 0 } };
  const beamGeo = new THREE.ConeGeometry(1, 1, 48, 1, true); beamGeo.translate(0, -.5, 0);
  const beam = new THREE.Mesh(beamGeo, new THREE.ShaderMaterial({ vertexShader: BEAM_VERT, fragmentShader: BEAM_FRAG, uniforms: beamU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  scene.add(beam);
  const beamTarget = new THREE.Vector3(0, 0, 0), beamAim = new THREE.Vector3(-2, -3, 2);

  /* ======================= 01 · O VÃO ======================= */
  const vao = new THREE.Group(); vao.position.set(0, 0, -50); scene.add(vao);
  const plaza = cbox(48, 1, 44, concLight, 5, R); plaza.position.set(0, -5.5, 0); vao.add(plaza);
  [[-11, 6], [11, 6], [-11, -6], [11, -6]].forEach(([x, z]) => { const p = cbox(1.7, 12, 1.7, red, 3, R); p.position.set(x, .9, z); vao.add(p); });
  [6, -6].forEach(z => { const b = cbox(24, 2.1, 1.7, red, 3, R); b.position.set(0, 5.85, z); vao.add(b); });
  const slab = new THREE.Group(); vao.add(slab);
  { const bot = cbox(21, .7, 13, conc, 4, R); bot.position.y = 1.15; slab.add(bot);
    const top = cbox(21, .7, 13, conc, 4, R); top.position.y = 3.85; slab.add(top);
    const band = new THREE.Mesh(new THREE.BoxGeometry(20.6, 2, 12.6), glassDark); band.position.y = 2.5; slab.add(band);
    for (let i = 0; i <= 17; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(.08, 2, 12.7), black); m.position.set(-10.2 + i * 1.2, 2.5, 0); slab.add(m); }
    for (let i = 0; i <= 10; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(20.7, 2, .08), black); m.position.set(0, 2.5, -6.25 + i * 1.25); if (i === 0 || i === 10) slab.add(m); }
    [-8, -3, 3, 8].forEach(x => [6, -6].forEach(z => { const h = new THREE.Mesh(new THREE.BoxGeometry(.12, 1.2, .12), black); h.position.set(x, 4.8, z * .99); slab.add(h); })); }
  // gente parada no vão
  const people = [];
  const skin = new THREE.MeshStandardMaterial({ color: 0x2a2826, roughness: .62, metalness: .1 });
  const bodyGeo = new THREE.CapsuleGeometry(.25, .62, 6, 14), legGeo = new THREE.CapsuleGeometry(.085, .72, 4, 8), headGeo = new THREE.SphereGeometry(.15, 16, 12);
  for (let i = 0; i < 16; i++) {
    const g = new THREE.Group();
    const b = new THREE.Mesh(bodyGeo, skin); b.position.y = 1.18; b.scale.set(1.3, 1, .75); b.castShadow = true; g.add(b);
    [-.11, .11].forEach(x => { const l = new THREE.Mesh(legGeo, skin); l.position.set(x, .45, 0); l.castShadow = true; g.add(l); });
    const h = new THREE.Group(); h.position.y = 1.86; g.add(h);
    const hm = new THREE.Mesh(headGeo, skin); hm.castShadow = true; h.add(hm);
    const nose = new THREE.Mesh(new THREE.BoxGeometry(.06, .06, .1), skin); nose.position.z = .16; h.add(nose);
    let x, z; do { x = (R() - .5) * 30; z = (R() - .5) * 26; } while (Math.abs(x) < 2.2 && z > -6);
    g.position.set(x, -5, z); g.rotation.y = R() * 6.28; g.scale.setScalar(1.05 + R() * .2);
    g.userData = { head: h, base: g.rotation.y };
    vao.add(g); people.push(g);
  }
  let press = 0;

  /* ======================= 02 · O CORREDOR ======================= */
  const corr = new THREE.Group(); scene.add(corr);
  const cz0 = -76, cN = 9, cStep = 5.2;
  { const f = cbox(13, .6, 54, concLight, 4, R); f.position.set(0, -3.9, cz0 - 22); corr.add(f);
    const c = cbox(13, .6, 54, conc, 4, R); c.position.set(0, 4.7, cz0 - 22); corr.add(c); }
  const tubes = [];
  const tubeMat = () => new THREE.MeshBasicMaterial({ color: 0xeefffb, toneMapped: false });
  const cams = [];
  for (let i = 0; i < cN; i++) {
    const z = cz0 - i * cStep;
    [-1, 1].forEach(side => {
      const p = cbox(1, 8.6, 1, conc, 4, R); p.position.set(side * 4.7, .4, z); corr.add(p);
      const cam = cctv(); cam.group.position.set(side * 4.15, 2.75, z + .2); cam.group.rotation.y = side > 0 ? Math.PI : 0;
      corr.add(cam.group); cams.push(cam);
    });
    const beamX = cbox(9.4, .7, .7, conc, 4, R); beamX.position.set(0, 4.05, z); corr.add(beamX);
    [-1.6, 1.6].forEach(x => { const t = new THREE.Mesh(new THREE.BoxGeometry(.14, .08, 2.6), tubeMat()); t.position.set(x, 4.35, z - cStep / 2); corr.add(t); tubes.push({ m: t, bad: (i === 3 && x < 0) || (i === 6 && x > 0) }); });
  }
  function cctv() {
    const group = new THREE.Group();
    const arm = new THREE.Mesh(new THREE.BoxGeometry(.6, .1, .1), paint); arm.position.x = .3; group.add(arm);
    const plate = new THREE.Mesh(new THREE.BoxGeometry(.06, .4, .4), paint); group.add(plate);
    const head = new THREE.Group(); head.position.x = .62; group.add(head);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, .25, 10), paint); neck.position.y = .12; head.add(neck);
    const pivot = new THREE.Group(); head.add(pivot);
    const body = new THREE.Mesh(new RoundedBoxGeometry(.44, .38, 1.05, 3, .07), paint); body.position.set(0, -.08, .2); pivot.add(body);
    const hood = new THREE.Mesh(new THREE.BoxGeometry(.54, .045, 1.2), paint); hood.position.set(0, .14, .3); pivot.add(hood);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(.16, .16, .1, 32), black); ring.rotation.x = Math.PI / 2; ring.position.set(0, -.08, .75); pivot.add(ring);
    const lens = new THREE.Mesh(new THREE.SphereGeometry(.13, 32, 16), lensGlass); lens.scale.z = .45; lens.position.set(0, -.08, .8); pivot.add(lens);
    const led = new THREE.Mesh(new THREE.SphereGeometry(.028, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff2b1c, toneMapped: false })); led.position.set(.16, .04, .73); pivot.add(led);
    [body, hood, ring].forEach(m => { m.castShadow = true; m.userData.cam = true; });
    const c = { group, head, pivot, lens, led, body, alive: true, q: new THREE.Quaternion(), sparks: 0 };
    [body, hood, ring, lens].forEach(m => m.userData.camRef = c);
    return c;
  }
  // faíscas quando uma câmera é cegada
  const sparkN = 240, sparkPos = new Float32Array(sparkN * 3), sparkVel = new Float32Array(sparkN * 3), sparkLife = new Float32Array(sparkN);
  const sparkGeo = new THREE.BufferGeometry(); sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
  const sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({ color: 0xffc070, size: .07, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  sparks.frustumCulled = false; scene.add(sparks); let sparkI = 0;
  sparkPos.fill(9999);

  /* ======================= 04 · A CURVA ======================= */
  const curva = new THREE.Group(); curva.position.set(0, 0, -186); scene.add(curva);
  const path = new THREE.CatmullRomCurve3([-22, -15, -8, 0, 8, 15, 22].map((x, i) => new THREE.Vector3(x, 0, [0, -2.2, 1.6, -1.2, 2.4, -.6, -2.8][i])), false, 'catmullrom', .5);
  const CN = 220, pts = path.getSpacedPoints(CN);
  const outward = pts.map((p, i) => { const t = path.getTangentAt(i / CN); return new THREE.Vector3(-t.z, 0, t.x).multiplyScalar(t.x > 0 ? -1 : 1).normalize(); });
  // a parede ondulada com mil janelas
  const yMin = -7, yMax = 13, rowsW = 22;
  const wallGeo = new THREE.BufferGeometry();
  { const pos = [], uv = [], idx = [];
    for (let j = 0; j <= rowsW; j++) for (let i = 0; i <= CN; i++) { const p = pts[i]; pos.push(p.x, yMin + (yMax - yMin) * j / rowsW, p.z); uv.push(i / CN, j / rowsW); }
    for (let j = 0; j < rowsW; j++) for (let i = 0; i < CN; i++) { const a = j * (CN + 1) + i, b = a + 1, c = a + CN + 1, d = c + 1; idx.push(a, b, d, a, d, c); }
    wallGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); wallGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); wallGeo.setIndex(idx); wallGeo.computeVertexNormals(); }
  const winTex = (() => {
    const cw = 2048, ch = 1024, cols = 64, rows = 22;
    const a = document.createElement('canvas'); a.width = cw; a.height = ch; const x = a.getContext('2d');
    const e = document.createElement('canvas'); e.width = cw; e.height = ch; const y = e.getContext('2d');
    x.drawImage(T3.canvas, 0, 0, cw, ch); x.fillStyle = 'rgba(40,38,34,.25)'; x.fillRect(0, 0, cw, ch);
    y.fillStyle = '#000'; y.fillRect(0, 0, cw, ch);
    const ww = cw / cols, wh = ch / rows;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const px = i * ww + ww * .12, py = j * wh + wh * .18, w = ww * .76, h = wh * .62;
      x.fillStyle = '#121518'; x.fillRect(px, py, w, h);
      x.fillStyle = 'rgba(255,255,255,.06)'; x.fillRect(px, py, w, h * .3);
      const r = Math.random();
      if (r < .16) { const warm = Math.random() < .7; y.fillStyle = warm ? `rgba(255,${180 + Math.random() * 40 | 0},${110 + Math.random() * 40 | 0},1)` : 'rgba(170,230,255,1)'; y.fillRect(px, py, w, h);
        y.fillStyle = 'rgba(0,0,0,.55)'; if (Math.random() < .5) y.fillRect(px + w * Math.random() * .6, py, w * .35, h); }
      else if (r < .2) { y.fillStyle = 'rgba(80,140,255,.6)'; y.fillRect(px + w * .3, py + h * .3, w * .4, h * .4); }   // tv ligada
    }
    const m = new THREE.CanvasTexture(a), em = new THREE.CanvasTexture(e);
    m.colorSpace = em.colorSpace = THREE.SRGBColorSpace; m.anisotropy = em.anisotropy = 4;
    return { m, em };
  })();
  const wall = new THREE.Mesh(wallGeo, new THREE.MeshStandardMaterial({ map: winTex.m, emissiveMap: winTex.em, emissive: 0xffffff, emissiveIntensity: 1.25, roughness: .85, side: THREE.DoubleSide }));
  wall.receiveShadow = true; wall.castShadow = true; curva.add(wall);
  // brises: lâminas seguindo a curva, uma por andar
  const brShape = new THREE.Shape();
  pts.forEach((p, i) => { i ? brShape.lineTo(p.x, -p.z) : brShape.moveTo(p.x, -p.z); });
  for (let i = CN; i >= 0; i--) { const p = pts[i], o = outward[i]; brShape.lineTo(p.x + o.x * 1.25, -(p.z + o.z * 1.25)); }
  const brGeo = new THREE.ExtrudeGeometry(brShape, { depth: .24, bevelEnabled: false, curveSegments: 1 });
  brGeo.rotateX(-Math.PI / 2);
  { const uv = brGeo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 4, uv.getY(i) / 4); }
  for (let j = 0; j <= rowsW; j++) {
    const b = new THREE.Mesh(brGeo, concLight); b.position.y = yMin + (yMax - yMin) * j / rowsW - .14;
    b.castShadow = b.receiveShadow = true; curva.add(b);
  }
  const curvaFloor = cbox(70, 1, 30, concDark, 6, R); curvaFloor.position.set(0, -7.6, 10); curva.add(curvaFloor);

  /* ======================= 05 · O ARQUIVO ======================= */
  const arq = new THREE.Group(); arq.position.set(0, -.3, -212); scene.add(arq);
  const DC = 13, DR = 8, cellW = 1.5, cellH = .95;
  const steel = new THREE.MeshStandardMaterial({ color: 0x7e8a86, roughness: .42, metalness: .55 });
  const steelDark = new THREE.MeshStandardMaterial({ color: 0x2a2f30, roughness: .5, metalness: .6 });
  const cab = new THREE.Mesh(new THREE.BoxGeometry(DC * cellW + .3, DR * cellH + .3, 1.6), steelDark); cab.position.z = -.75; cab.receiveShadow = true; arq.add(cab);
  const atlas = labelAtlas(DC * DR, (x, i, s) => {
    x.fillStyle = '#efe9da'; x.fillRect(8, 30, s - 16, s - 60);
    x.strokeStyle = '#2a2a2a'; x.lineWidth = 2; x.strokeRect(12, 34, s - 24, s - 68);
    x.fillStyle = '#1b1b1b'; x.font = 'bold 30px monospace'; x.textAlign = 'center'; x.fillText(String(400 + i * 7).padStart(4, '0'), s / 2, s / 2 + 2);
    x.font = '13px monospace'; x.fillText(['GESTO', 'PAUSA', 'ROLAGEM', 'HORA', 'DÚVIDA', 'RETORNO', 'OLHAR'][i % 7], s / 2, s / 2 + 22);
  });
  const labelMat = new THREE.MeshStandardMaterial({ map: atlas.tex, roughness: .8 });
  const drawers = [];
  const handleGeo = new THREE.BoxGeometry(.5, .07, .09), frontGeo = new THREE.BoxGeometry(cellW - .1, cellH - .1, 1.4);
  for (let r = 0; r < DR; r++) for (let c = 0; c < DC; c++) {
    const i = r * DC + c;
    const g = new THREE.Group(); g.position.set((c - (DC - 1) / 2) * cellW, (r - (DR - 1) / 2) * cellH, 0);
    const box = new THREE.Mesh(frontGeo, steel); box.castShadow = box.receiveShadow = true; box.userData.drawer = i; g.add(box);
    const lg = new THREE.PlaneGeometry(.42, .42); const [u0, v0, u1, v1] = atlas.uv(i);
    lg.attributes.uv.setXY(0, u0, v1); lg.attributes.uv.setXY(1, u1, v1); lg.attributes.uv.setXY(2, u0, v0); lg.attributes.uv.setXY(3, u1, v0);
    const lab = new THREE.Mesh(lg, labelMat); lab.position.set(-.35, .05, .705); lab.userData.drawer = i; g.add(lab);
    const h = new THREE.Mesh(handleGeo, black); h.position.set(.3, -.12, .74); g.add(h);
    arq.add(g);
    drawers.push({ g, open: 0, target: 0, hover: 0, order: R() });
  }
  const drawerOrder = drawers.map((d, i) => i).sort((a, b) => drawers[a].order - drawers[b].order);
  const arqFloor = cbox(40, 1, 24, concDark, 5, R); arqFloor.position.set(0, -4.6, 6); arq.add(arqFloor);
  let openShown = 0;

  /* ======================= 06 · O RETRATO ======================= */
  const ret = new THREE.Group(); ret.position.set(0, -.6, -250); scene.add(ret);
  const plinth = cbox(6, .7, 2.6, concDark, 4, R); plinth.position.y = -3.95; ret.add(plinth);
  const retFloor = cbox(50, 1, 30, conc, 6, R); retFloor.position.set(0, -4.8, 4); ret.add(retFloor);
  const PW = 4.4, PH = 6.4, PD = .8, CW = 704, CH = 1024;
  const pc = document.createElement('canvas'); pc.width = CW; pc.height = CH; const px = pc.getContext('2d');
  const pb = document.createElement('canvas'); pb.width = CW; pb.height = CH; const pbx = pb.getContext('2d');
  const pe = document.createElement('canvas'); pe.width = CW; pe.height = CH; const pex = pe.getContext('2d');
  const portMap = new THREE.CanvasTexture(pc); portMap.colorSpace = THREE.SRGBColorSpace; portMap.anisotropy = 8;
  const portBump = new THREE.CanvasTexture(pb), portEm = new THREE.CanvasTexture(pe); portEm.colorSpace = THREE.SRGBColorSpace;
  const frontMat = new THREE.MeshStandardMaterial({ map: portMap, bumpMap: portBump, bumpScale: 4, emissiveMap: portEm, emissive: 0xffffff, emissiveIntensity: 1.6, roughness: .9 });
  const sideMat = concreteMat(T1);
  const mono = new THREE.Mesh(new THREE.BoxGeometry(PW, PH, PD), [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat]);
  mono.position.y = -.4; mono.castShadow = mono.receiveShadow = true; ret.add(mono);
  const spot = new THREE.SpotLight(0xfff0dc, 60, 22, .45, .7, 1.6); spot.position.set(0, 9, 3); spot.target = mono; ret.add(spot);
  const redGlow = new THREE.PointLight(0xff2b1c, 0, 10, 2); redGlow.position.set(0, -.4, 2.2); ret.add(redGlow);

  function drawPortrait(W, lines, verdictTxt, id) {
    // base: concreto
    px.drawImage(T1.canvas, 0, 0, 512, 744, 0, 0, CW, CH);
    pbx.drawImage(T1.bumpCanvas, 0, 0, 512, 744, 0, 0, CW, CH);
    pex.fillStyle = '#000'; pex.fillRect(0, 0, CW, CH);
    const pad = 60, aw = CW - pad * 2, ah = aw * innerHeight / innerWidth;
    const top = 150;
    // moldura gravada
    pbx.strokeStyle = '#000'; pbx.lineWidth = 6; pbx.strokeRect(pad - 18, top - 18, aw + 36, ah + 36);
    px.strokeStyle = 'rgba(30,26,22,.55)'; px.lineWidth = 3; px.strokeRect(pad - 18, top - 18, aw + 36, ah + 36);
    // calor por zona
    W.heat && (() => { const mx = Math.max(...W.heat, .001); W.heat.forEach((h, i) => { const a = h / mx; px.fillStyle = `rgba(20,16,14,${a * .22})`; px.fillRect(pad + (i % 3) * aw / 3, top + Math.floor(i / 3) * ah / 3, aw / 3, ah / 3); }); })();
    // o caminho do cursor, entalhado
    const P = W.path;
    if (P.length > 1) {
      const draw = (ctx, w, style) => { ctx.strokeStyle = style; ctx.lineWidth = w; ctx.lineCap = ctx.lineJoin = 'round'; ctx.beginPath(); P.forEach(([x, y], i) => { const X = pad + x * aw, Y = top + y * ah; i ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y); }); ctx.stroke(); };
      draw(pbx, 7, '#000'); draw(px, 5, 'rgba(26,20,18,.85)'); draw(px, 1.2, 'rgba(255,240,230,.25)');
      draw(pex, 2.2, 'rgba(255,50,30,.9)');
      const [lx, ly] = P[P.length - 1];
      pex.fillStyle = '#ff3a24'; pex.beginPath(); pex.arc(pad + lx * aw, top + ly * ah, 9, 0, 7); pex.fill();
    }
    // texto carimbado
    const stamp = (txt, y, size, weight = 700, align = 'left', x = pad - 18) => {
      [[pbx, '#000', 0], [px, 'rgba(24,20,18,.82)', 0], [px, 'rgba(255,255,255,.18)', 1.5]].forEach(([ctx, c, o]) => {
        ctx.fillStyle = c; ctx.font = `${weight} ${size}px "IBM Plex Mono", monospace`; ctx.textAlign = align; ctx.fillText(txt, x + o, y + o); });
    };
    stamp(`VISITANTE Nº ${id}`, 92, 34);
    stamp(new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }), 92, 22, 500, 'right', CW - pad + 18);
    let y = top + ah + 70;
    const KEEP = ['tempo aqui', 'cursor andou', 'cliques', 'rolou', 'voltou atrás', 'maior pausa', 'hesitou', 'saiu da aba', 'teclas apertadas', 'câmeras cegadas', 'aguentou o peso'];
    lines.filter(([k]) => KEEP.includes(k)).forEach(([k, v]) => { stamp(k.toUpperCase(), y, 19, 500); stamp(v, y, 19, 700, 'right', CW - pad + 18); y += 30; });
    // veredito
    px.font = 'italic 34px "Instrument Serif", Georgia, serif'; px.fillStyle = 'rgba(20,16,14,.85)'; px.textAlign = 'left';
    const words = verdictTxt.split(' '); let line = '', ly2 = y + 30;
    words.forEach(w => { const t = line ? line + ' ' + w : w; if (px.measureText(t).width > aw + 36) { px.fillText(line, pad - 18, ly2); ly2 += 40; line = w; } else line = t; });
    px.fillText(line, pad - 18, ly2);
    portMap.needsUpdate = portBump.needsUpdate = portEm.needsUpdate = true;
  }

  // o pó
  const crumbleN = mobile ? 7000 : 16000;
  const cg = new THREE.BufferGeometry();
  const cPos = new Float32Array(crumbleN * 3), cVel = new Float32Array(crumbleN * 3), cSeed = new Float32Array(crumbleN), cCol = new Float32Array(crumbleN * 3);
  cg.setAttribute('position', new THREE.BufferAttribute(cPos, 3)); cg.setAttribute('aVel', new THREE.BufferAttribute(cVel, 3));
  cg.setAttribute('aSeed', new THREE.BufferAttribute(cSeed, 1)); cg.setAttribute('aCol', new THREE.BufferAttribute(cCol, 3));
  const crumbleU = { uT: { value: 0 }, uFloor: { value: -3.55 }, uScale: { value: 400 } };
  const crumble = new THREE.Points(cg, new THREE.ShaderMaterial({ vertexShader: CRUMBLE_VERT, fragmentShader: CRUMBLE_FRAG, uniforms: crumbleU, transparent: true, depthWrite: true }));
  crumble.visible = false; crumble.frustumCulled = false; ret.add(crumble);
  let crumbling = -1;
  function shatter() {
    const data = px.getImageData(0, 0, CW, CH).data;
    for (let i = 0; i < crumbleN; i++) {
      const front = Math.random() < .7;
      const u = Math.random(), v = Math.random();
      const x = (u - .5) * PW, y = (v - .5) * PH - .4, z = front ? PD / 2 - Math.random() * .08 : (Math.random() - .5) * PD;
      cPos.set([x, y, z], i * 3);
      const k = (Math.floor((1 - v) * (CH - 1)) * CW + Math.floor(u * (CW - 1))) * 4;
      const g = front ? [data[k] / 255, data[k + 1] / 255, data[k + 2] / 255] : [.55, .53, .5];
      cCol.set(g.map(c => Math.pow(c, 2.2) * 1.4), i * 3);
      cVel.set([x * .35 + (Math.random() - .5) * 1.2, Math.random() * 1.2, (front ? 1 : 0) * Math.random() * 1.6 + (Math.random() - .5) * .6], i * 3);
      cSeed[i] = (1 - v) * .85 + Math.random() * .15;
    }
    cg.attributes.position.needsUpdate = cg.attributes.aVel.needsUpdate = cg.attributes.aSeed.needsUpdate = cg.attributes.aCol.needsUpdate = true;
    mono.visible = false; crumble.visible = true; crumbling = 0;
  }
  function restore() { mono.visible = true; crumble.visible = false; crumbling = -1; crumbleU.uT.value = 0; }

  /* ======================= 07 · A SAÍDA ======================= */
  const sai = new THREE.Group(); sai.position.set(0, 0, -298); scene.add(sai);
  const DW = 3.4, DH = 7.4, dy = -.6;
  [[-(DW / 2 + 5), 0, 10, 16], [DW / 2 + 5, 0, 10, 16]].forEach(([x, , w, h]) => { const b = cbox(w, h, 1.2, concDark, 7, R); b.position.set(x, 2, 0); sai.add(b); });
  { const fig = people[3].clone(); fig.position.set(.2, -4.1, 1.2); fig.rotation.y = Math.PI; fig.scale.setScalar(1.25); sai.add(fig); }
  { const t = cbox(DW, 10 - dy - DH / 2, 1.2, concDark, 7, R); t.position.set(0, (dy + DH / 2 + 10) / 2, 0); sai.add(t);
    const bt = cbox(DW, dy - DH / 2 + 6, 1.2, concDark, 7, R); bt.position.set(0, (dy - DH / 2 - 6) / 2, 0); sai.add(bt); }
  const doorLight = new THREE.Mesh(new THREE.PlaneGeometry(DW + .2, DH + .2), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false, fog: false })); doorLight.position.set(0, dy, -.8); sai.add(doorLight);
  const doorBeamGeo = new THREE.CylinderGeometry(1, 2.6, 1, 4, 1, true); doorBeamGeo.rotateY(Math.PI / 4); doorBeamGeo.translate(0, -.5, 0);
  const doorBeamU = { uColor: { value: new THREE.Color(0xfff8ee) }, uAmt: { value: .8 }, uTime: beamU.uTime, uInv: { value: 1 } };
  const doorBeam = new THREE.Mesh(doorBeamGeo, new THREE.ShaderMaterial({ vertexShader: BEAM_VERT, fragmentShader: BEAM_FRAG, uniforms: doorBeamU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  doorBeam.scale.set(DW * .72, 16, DH * .72); doorBeam.rotation.x = -Math.PI / 2; doorBeam.position.set(0, dy, -.6);
  sai.add(doorBeam);
  const saiFloor = cbox(40, 1, 34, concDark, 7, R); saiFloor.position.set(0, -4.6, 14); sai.add(saiFloor);

  /* ---- poeira pelo caminho todo ---- */
  const dustN = mobile ? 1600 : 3200;
  const dg = new THREE.BufferGeometry(), dp = new Float32Array(dustN * 3), ds = new Float32Array(dustN);
  for (let i = 0; i < dustN; i++) { dp.set([(R() - .5) * 34, (R() - .5) * 16, 14 - R() * 310], i * 3); ds[i] = R(); }
  dg.setAttribute('position', new THREE.BufferAttribute(dp, 3)); dg.setAttribute('aSeed', new THREE.BufferAttribute(ds, 1));
  const dustU = { uTime: { value: 0 }, uScale: { value: 300 }, uColor: { value: new THREE.Color(0xe8e4dc) } };
  const dust = new THREE.Points(dg, new THREE.ShaderMaterial({ vertexShader: DUST_VERT, fragmentShader: DUST_FRAG, uniforms: dustU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  dust.frustumCulled = false; scene.add(dust);

  /* ---- interação ---- */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const camMeshes = []; cams.forEach(c => c.pivot.traverse(o => { if (o.isMesh && o.userData.camRef) camMeshes.push(o); }));
  const drawerMeshes = []; drawers.forEach(d => d.g.traverse(o => { if (o.isMesh && o.userData.drawer !== undefined) drawerMeshes.push(o); }));
  const tmpV = new THREE.Vector3(), tmpQ = new THREE.Quaternion(), tmpO = new THREE.Object3D(), cursorW = new THREE.Vector3();
  function click(nx, ny) {
    ndc.set(nx, ny); ray.setFromCamera(ndc, camera);
    const cz = camera.position.z;
    if (cz < -50 && cz > -130) {
      const h = ray.intersectObjects(camMeshes, false);
      if (h.length && h[0].distance < 40) { const c = h[0].object.userData.camRef; if (c.alive) { c.alive = false; burstSparks(c.lens.getWorldPosition(tmpV)); return { type: 'camera' }; } }
    }
    if (cz < -175 && cz > -225) {
      const h = ray.intersectObjects(drawerMeshes, false);
      if (h.length) { const d = drawers[h[0].object.userData.drawer]; d.target = d.target > .5 ? 0 : 1.15; return { type: 'drawer' }; }
    }
    return null;
  }
  function burstSparks(p) {
    for (let k = 0; k < 60; k++) { const i = sparkI++ % sparkN; sparkPos.set([p.x, p.y, p.z], i * 3); sparkVel.set([(Math.random() - .5) * 4, Math.random() * 3, Math.random() * 3], i * 3); sparkLife[i] = 1; }
  }

  let portrait = false;
  function resize(w, h) {
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile ? 1.25 : 1.5));
    renderer.setSize(w, h, false);
    portrait = w / h < .8;
    camera.aspect = w / h; camera.fov = portrait ? 62 : 40; camera.updateProjectionMatrix();
    tower.position.x = portrait ? 2.6 : 6;
    ret.position.x = portrait ? 0 : 2.8;
    dustU.uScale.value = h * .03; crumbleU.uScale.value = h * .016;
  }

  let frame = 0, hoverT = 0;
  const lookY = new THREE.Vector3();
  function update(s) {
    const T = s.time, dt = s.dt, cz = s.camZ; frame++;
    // câmera: andar pesado, pouca oscilação, empurrada pela pressão da laje
    const shake = press * (s.hold ? 1 : 0) * .05;
    const bob = Math.sin(cz * .5) * .05;
    const under = Math.min(1, Math.max(0, (-20 - cz) / 10)) * Math.min(1, Math.max(0, (cz + 72) / 8));   // debaixo do vão: mais baixo
    let camY = -1.3 * under;
    if (cz < -140 && cz > -165) camY = .6;
    camera.position.set(s.mouseX * .55 + (Math.random() - .5) * shake, camY + bob - s.mouseY * .35 + (Math.random() - .5) * shake, cz);
    lookY.set(s.mouseX * .2, camY - s.mouseY * .12 + under * .6 + (Math.abs(cz - Z.vao) < 6 ? .8 : 0), cz - 12);
    camera.lookAt(lookY);
    camera.rotateZ(Math.sin(T * .2) * .006 + s.vel * .0002);
    rig.position.set(0, 0, cz - 14);

    // o cursor projetado no mundo, a 8 unidades da câmera
    ndc.set(s.mouseX, -s.mouseY); ray.setFromCamera(ndc, camera);
    cursorW.copy(ray.ray.direction).multiplyScalar(9).add(ray.ray.origin);

    envU.uTime.value = T; envU.uA.value.copy(s.envA); envU.uB.value.copy(s.envB); envU.uC.value.copy(s.envC);
    if (frame % 3 === 0) cubeCam.update(renderer, envScene);
    scene.fog.color.copy(s.fog);

    // luz principal: na curva, o sol é seu
    const inCurva = Math.max(0, 1 - Math.abs(cz - Z.curva) / 26);
    const az = s.mouseX * 1.3, el = .35 + (1 - (s.mouseY * .5 + .5)) * .9;
    const sunDir = tmpV.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el) * .6 + .4).normalize();
    const normalDir = new THREE.Vector3(-.5, .85, .45).normalize();
    key.position.copy(normalDir.lerp(sunDir, inCurva)).multiplyScalar(30);
    key.target.position.set(0, 0, 0);
    key.color.setRGB(1, .95 - inCurva * .1, .88 - inCurva * .25);
    const inSaida = Math.max(0, Math.min(1, (-250 - cz) / 18));
    key.intensity = (2.2 + inCurva * 1.6) * (1 - inSaida * .8);
    hemi.intensity = (.55 - inCurva * .25) * (1 - inSaida * .6);

    /* fachada: as janelas acordam onde você está */
    const nearF = cz > -14;
    if (nearF) {
      const wy = cursorW.y + (cursorW.y - camera.position.y) * .6;
      winInfo.forEach((w, i) => {
        const dyw = Math.abs(w.y - wy * 1.6 - 1), dxw = Math.abs(w.x + tower.position.x - cursorW.x * 2.2);
        const tgt = Math.max(w.base * (.75 + .25 * Math.sin(T * .7 + w.ph)), Math.exp(-dyw * dyw * .5) * Math.exp(-dxw * dxw * .09) * 1.4);
        w.lit += (tgt - w.lit) * Math.min(1, dt * (tgt > w.lit ? 6 : 1.2));
        windows.setColorAt(i, wCol.setRGB(w.lit * 1.15, w.lit * 1.05, w.lit * .85));
      });
      windows.instanceColor.needsUpdate = true;
    }
    // holofote mira no cursor (com um atraso de máquina)
    beamTarget.set(cursorW.x * 2.4, cursorW.y * 2.2 - 1, 1.5);
    beamAim.lerp(beamTarget, Math.min(1, dt * 2.2));
    const dir = tmpV.copy(beamAim).sub(lampHead.position); const L = dir.length(); dir.normalize();
    lampHead.lookAt(beamAim);
    beam.position.copy(lampHead.position).addScaledVector(dir, .4);
    beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir);
    beam.scale.set(L * .16, L, L * .16);
    beamU.uTime.value = T; beamU.uAmt.value = nearF ? .9 : 0; beam.visible = nearF;

    /* o vão: segurar = a laje desce */
    const nearV = Math.abs(cz - Z.vao) < 16;
    const pTarget = nearV && s.hold ? 1 : 0;
    const prevPress = press;
    press += (pTarget - press) * Math.min(1, dt * (pTarget ? .45 : 1.6));
    slab.position.y = -press * 3.1 + Math.sin(T * .6) * .02;
    const pressVel = Math.abs(press - prevPress) / Math.max(dt, .001);
    people.forEach((p, i) => {
      const h = p.userData.head;
      if (press > .25) { p.getWorldPosition(tmpV); const a = Math.atan2(camera.position.x - tmpV.x, camera.position.z - tmpV.z) - p.rotation.y; h.rotation.y += (Math.atan2(Math.sin(a), Math.cos(a)) * .9 - h.rotation.y) * Math.min(1, dt * (2 + i * .15)); }
      else h.rotation.y += (Math.sin(T * .2 + i) * .4 - h.rotation.y) * Math.min(1, dt * .8);
    });

    /* o corredor: os olhos te seguem */
    let servo = 0;
    const nearC = cz < -54 && cz > -132;
    if (nearC) {
      cams.forEach(c => {
        const before = tmpQ.copy(c.pivot.quaternion);
        c.pivot.getWorldPosition(tmpO.position);
        if (c.alive) tmpO.lookAt(cursorW); else tmpO.lookAt(tmpO.position.x, tmpO.position.y - 5, tmpO.position.z + (c.group.rotation.y ? -1 : 1));
        // mundo → local do pivô
        c.head.getWorldQuaternion(c.q).invert().multiply(tmpO.quaternion);
        c.pivot.quaternion.slerp(c.q, Math.min(1, dt * (c.alive ? 3.2 : 1.5)));
        servo += before.angleTo(c.pivot.quaternion) / Math.max(dt, .001);
        c.led.material.color.setRGB(c.alive ? (Math.sin(T * 4 + c.group.position.z) > 0 ? 1 : .25) : 0.02, c.alive ? .1 : 0, c.alive ? .05 : 0);
        if (!c.alive && c.lens.material !== lensBroken) c.lens.material = lensBroken;
      });
      tubes.forEach((t, i) => { const on = t.bad ? (Math.random() < .82 ? (Math.sin(T * 13 + i) > -.4 ? 1 : .05) : .02) : 1; t.m.material.color.setScalar(on * 1.5); });
    }
    // faíscas
    for (let i = 0; i < sparkN; i++) if (sparkLife[i] > 0) {
      sparkLife[i] -= dt * 1.4; sparkVel[i * 3 + 1] -= 9.8 * dt;
      sparkPos[i * 3] += sparkVel[i * 3] * dt; sparkPos[i * 3 + 1] += sparkVel[i * 3 + 1] * dt; sparkPos[i * 3 + 2] += sparkVel[i * 3 + 2] * dt;
      if (sparkLife[i] <= 0) sparkPos[i * 3] = 9999;
    }
    sparkGeo.attributes.position.needsUpdate = true;

    /* o arquivo: cada coisa que você faz abre uma gaveta */
    const nearA = Math.abs(cz - Z.arquivo) < 30;
    if (nearA) {
      const want = Math.min(drawers.length, Math.floor(s.events * 1.5) + 3);
      let clack = 0;
      while (openShown < want) { const d = drawers[drawerOrder[openShown++]]; d.target = .55 + Math.random() * .6; clack++; }
      if ((hoverT += dt) > .08) {
        hoverT = 0; drawers.forEach(d => d.hover = 0);
        ndc.set(s.mouseX, -s.mouseY); ray.setFromCamera(ndc, camera);
        const h = ray.intersectObjects(drawerMeshes, false); if (h.length) drawers[h[0].object.userData.drawer].hover = .22;
      }
      drawers.forEach(d => { const t = d.target + d.hover; d.open += (t - d.open) * Math.min(1, dt * 6); d.g.position.z = d.open; });
      s.onClack && clack && s.onClack(clack);
    }

    /* o retrato */
    const nearR = Math.abs(cz - Z.retrato) < 22;
    ret.rotation.y += ((nearR ? s.mouseX * .18 : 0) - ret.rotation.y) * Math.min(1, dt * 1.5);
    redGlow.intensity = nearR && mono.visible ? 2.5 + Math.sin(T * 2) * .8 : 0;
    if (crumbling >= 0) { crumbling += dt; crumbleU.uT.value = crumbling; if (crumbling > 9.5) crumble.visible = false; }

    dustU.uTime.value = T;
    renderer.render(scene, camera);

    // onde o holofote bate (pro fundo acompanhar)
    const spotNDC = nearF ? beamAim.clone().project(camera) : null;
    return { spotNDC, servo: nearC ? servo / cams.length : 0, rumble: nearV ? press * (s.hold ? 1 : .3) + pressVel * .3 : 0, press: nearV ? press : 0, flicker: nearC ? 1 : 0, nearC, nearF };
  }

  return { resize, update, click, drawPortrait, shatter, restore, get camsAlive() { return cams.filter(c => c.alive).length; }, camCount: cams.length,
    resetCams() { cams.forEach(c => { c.alive = true; c.lens.material = lensGlass; }); openShown = 0; drawers.forEach(d => d.target = 0); } };
}
