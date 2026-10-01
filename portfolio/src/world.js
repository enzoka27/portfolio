// ============ o mundo 3D do portfólio: um mar de sinal à noite, até amanhecer ============
import * as THREE from 'three';
import { ENV_VERT, ENV_FRAG, SEA_VERT, SEA_FRAG, ORB_VERT, ORB_FRAG, HALO_VERT, HALO_FRAG } from './shaders.js';
import * as O from './objects.js';
import { N02, N04 } from './thumbs.js';

export const Z = { hero: 10, sobre: -30, hyp: -72, ccd: -112, trinity: -150, ws: -185, finpay: -220, jovi: -255, breve: -290, contato: -322 };

export function createWorld(canvas, { mobile = false, links = [] } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, .1, 95);
  camera.position.set(0, .6, 10);

  /* ---- reflexo ---- */
  const envScene = new THREE.Scene();
  const envU = { uTime: { value: 0 }, uA: { value: new THREE.Color() }, uB: { value: new THREE.Color() }, uC: { value: new THREE.Color() }, uSunDir: { value: new THREE.Vector3(.5, .4, -1) } };
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(50, 48, 24), new THREE.ShaderMaterial({ vertexShader: ENV_VERT, fragmentShader: ENV_FRAG, uniforms: envU, side: THREE.BackSide, depthWrite: false })));
  const cubeRT = new THREE.WebGLCubeRenderTarget(160, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
  const cubeCam = new THREE.CubeCamera(.1, 100, cubeRT); envScene.add(cubeCam);
  scene.environment = cubeRT.texture;

  const rig = new THREE.Group(); scene.add(rig);
  const hemi = new THREE.HemisphereLight(0xdfe8ff, 0x0b1530, .7); scene.add(hemi);
  const key = new THREE.DirectionalLight(0xfff0dc, 2.4); key.position.set(-5, 6, 6);
  const rim = new THREE.DirectionalLight(0x8fe3ff, 2.2); rim.position.set(6, 1, -5);
  rig.add(key, rim, key.target, rim.target);

  /* ---- o mar ---- */
  const step = mobile ? .6 : .4;
  const nx = Math.round(90 / step), nz = Math.round(72 / step);
  const sp = new Float32Array(nx * nz * 3);
  for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) sp.set([(i - nx / 2) * step, 0, 4 - j * step], (i * nz + j) * 3);
  const seaGeo = new THREE.BufferGeometry(); seaGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const rips = [0, 1, 2, 3].map(() => new THREE.Vector4(0, 0, 0, -99));
  const seaU = { uTime: { value: 0 }, uCamZ: { value: 10 }, uRip: { value: rips }, uHover: { value: new THREE.Vector3(0, 0, 0) }, uLevel: { value: 0 }, uScale: { value: 30 }, uMoonX: { value: 9 },
    uColor: { value: new THREE.Color(0x3a5fa8) }, uGlow: { value: new THREE.Color(0xefe9da) }, uFar: { value: 66 } };
  const seaMat = new THREE.ShaderMaterial({ vertexShader: SEA_VERT.replace('floor(uCamZ / .4) * .4', `floor(uCamZ / ${step.toFixed(2)}) * ${step.toFixed(2)}`), fragmentShader: SEA_FRAG, uniforms: seaU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const sea = new THREE.Points(seaGeo, seaMat); sea.position.y = -2.6; sea.frustumCulled = false; scene.add(sea);
  let ripI = 0;
  const seaPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 2.6);

  /* ---- lua e sol ---- */
  const orbGeo = new THREE.SphereGeometry(1, 64, 32);
  const moonU = { uDawn: { value: 0 }, uTime: { value: 0 } }, sunU = { uDawn: { value: 1 }, uTime: { value: 0 } };
  const moon = new THREE.Mesh(orbGeo, new THREE.ShaderMaterial({ vertexShader: ORB_VERT, fragmentShader: ORB_FRAG, uniforms: moonU }));
  const sun = new THREE.Mesh(orbGeo, new THREE.ShaderMaterial({ vertexShader: ORB_VERT, fragmentShader: ORB_FRAG, uniforms: sunU }));
  const haloMat = c => new THREE.ShaderMaterial({ vertexShader: HALO_VERT, fragmentShader: HALO_FRAG, uniforms: { uColor: { value: new THREE.Color(c) }, uAmt: { value: .55 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const moonHalo = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), haloMat(0xbfd4ff)); moonHalo.scale.setScalar(26);
  const sunHalo = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), haloMat(0xff8a4a)); sunHalo.scale.setScalar(60);
  scene.add(moonHalo, moon, sunHalo, sun);

  /* ---- 00 · a fita de sinal ---- */
  const ribbonMat = O.mats.chrome(0xffffff, { side: THREE.DoubleSide, roughness: .08, iridescence: 1, iridescenceIOR: 1.9 });
  const ribbon = O.signalRibbon({ mat: ribbonMat });
  ribbon.mesh.position.set(0, .3, -5); scene.add(ribbon.mesh);
  const ribbon2 = O.signalRibbon({ n: 200, width: .08, mat: new THREE.MeshBasicMaterial({ color: 0xff5b1f, side: THREE.DoubleSide, toneMapped: false }) });
  ribbon2.mesh.position.set(0, .3, -5.4); scene.add(ribbon2.mesh);
  // a fita volta no fim, sob o sol
  const ribbonEnd = O.signalRibbon({ mat: O.mats.chrome(0xffe2b0, { side: THREE.DoubleSide, roughness: .08, iridescence: .8 }) });
  ribbonEnd.mesh.position.set(0, -2.1, Z.contato - 15); scene.add(ribbonEnd.mesh);

  /* ---- 01 · ondas de rádio ---- */
  const radio = O.radioRings(); scene.add(radio.group);

  /* ---- 02 · Hypnotize: quatro telas ---- */
  const loader = new THREE.TextureLoader();
  const screens = [N02, N04].map((src, i) => {
    const t = loader.load(src); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const s = O.screen(t); s.group.userData = { i, hover: 0, bounce: 0, ph: i * 1.7 }; scene.add(s.group); return s;
  });
  const screenPick = screens.map(s => s.face);

  /* ---- 03 · CCD Ensino: janelas de navegador ---- */
  const wins = [0, 1, 2].map(i => { const w = O.browserWindow(7 + i); scene.add(w.group); return w; });

  /* ---- 04..07 · código ---- */
  const tri = O.trinity(); scene.add(tri.group);
  const ws = O.packetStream(); scene.add(ws.group);
  const fin = O.finpayCard(); scene.add(fin.group);
  const jovi = O.lens(); scene.add(jovi.group);
  const ph1 = O.placeholder(0xff5b1f), ph2 = O.placeholder(0x8fe3ff); scene.add(ph1.group, ph2.group);
  const objs = [
    { o: tri, z: Z.trinity - 11, side: 1, bounce: 0, spin: 0 },
    { o: ws, z: Z.ws - 11, side: -1, bounce: 0, spin: 0 },
    { o: fin, z: Z.finpay - 11, side: 1, bounce: 0, spin: 0 },
    { o: jovi, z: Z.jovi - 11, side: -1, bounce: 0, spin: 0 },
  ];
  objs.forEach(it => it.o.pick.forEach(m => m.userData.obj = it));
  const objPick = objs.flatMap(it => it.o.pick);

  /* ---- interação ---- */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), hit = new THREE.Vector3();
  let hovered = null, T0 = 0;
  function pickAt(nx, ny) {
    ndc.set(nx, ny); ray.setFromCamera(ndc, camera);
    const cz = camera.position.z;
    if (Math.abs(cz - Z.hyp) < 22) { const h = ray.intersectObjects(screenPick, false); if (h.length) return { type: 'screen', i: h[0].object.parent.userData.i, g: h[0].object.parent }; }
    if (cz < Z.ccd - 20) { const h = ray.intersectObjects(objPick, false); if (h.length && h[0].distance < 30) return { type: 'obj', it: h[0].object.userData.obj }; }
    return null;
  }
  function click(nx, ny) {
    const p = pickAt(nx, ny);
    if (p && p.type === 'screen') return { type: 'link', href: links[p.i] };
    if (p && p.type === 'obj') { p.it.bounce = 1; p.it.spin += 6; return { type: 'obj' }; }
    // senão: uma pedra no mar
    ndc.set(nx, ny); ray.setFromCamera(ndc, camera);
    if (ray.ray.intersectPlane(seaPlane, hit)) {
      const r = rips[ripI++ % 4]; r.set(hit.x, hit.z, 1, T0);
      radio.pulse();
      return { type: 'sea' };
    }
    return null;
  }

  let portrait = false;
  function resize(w, h) {
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile ? 1.3 : 1.6));
    renderer.setSize(w, h, false);
    portrait = w / h < .8;
    camera.aspect = w / h; camera.fov = portrait ? 60 : 40; camera.updateProjectionMatrix();
    seaU.uScale.value = h * (mobile ? .1 : .075);
    layout();
  }
  // posições que dependem do formato da tela
  function layout() {
    const X = x => portrait ? x * .32 : x, Y = y => portrait ? y * .7 - 1.9 : y;
    radio.group.position.set(X(5.2), Y(-.4), Z.sobre - 14); radio.group.scale.setScalar(portrait ? .5 : .75);
    const grid = [[2.5, 1.0, 0], [5.0, -1.5, -1.8]];
    screens.forEach((s, i) => {
      const [x, y, z] = grid[i];
      s.group.userData.base = portrait ? new THREE.Vector3((i % 2 ? .9 : -.9), -1.2 - i * .9, Z.hyp - 9) : new THREE.Vector3(x, y, Z.hyp - 12 + z);
      s.group.scale.setScalar(portrait ? .62 : 1.1);
    });
    wins.forEach((w, i) => { w.group.position.set(X(-4.6) + i * .55, Y(-.2) + i * .45, Z.ccd - 12 - i * .9); w.group.rotation.set(-.05, .32, .02); w.group.scale.setScalar(portrait ? .55 : 1); });
    objs.forEach(it => { it.o.group.position.set(X(3.7 * it.side), Y(.1), it.z); it.o.group.scale.setScalar(portrait ? .62 : 1); });
    ph1.group.position.set(X(-5.5), Y(.4), Z.breve - 12); ph2.group.position.set(X(5.5), Y(-.4), Z.breve - 13);
    ph1.group.scale.setScalar(portrait ? .5 : 1); ph2.group.scale.setScalar(portrait ? .5 : 1);
    ribbon.mesh.scale.setScalar(portrait ? .5 : 1); ribbon2.mesh.scale.setScalar(portrait ? .5 : 1);
  }

  const culled = [...screens.map(s => s.group), ...wins.map(w => w.group), ...objs.map(it => it.o.group), ph1.group, ph2.group, radio.group];
  let frame = 0, hoverT = 0;
  const tmp = new THREE.Vector3(), horizonP = new THREE.Vector3();
  function update(s) {
    const T = s.time, dt = s.dt, cz = s.camZ; frame++; T0 = T;
    const sway = Math.sin(cz * .04 + T * .12) * .6;
    camera.position.set(sway + s.mouseX * .8, .6 + Math.cos(cz * .03 + T * .1) * .25 - s.mouseY * .4, cz);
    camera.lookAt(sway * .3 + s.mouseX * .2, .1 - s.mouseY * .15, cz - 12);
    camera.rotateZ(Math.sin(T * .17) * .012 + s.vel * .0003);
    rig.position.set(0, 0, cz - 8);

    envU.uTime.value = T; envU.uA.value.copy(s.envA); envU.uB.value.copy(s.envB); envU.uC.value.copy(s.envC);
    const dawn = s.dawn;
    // lua alta à direita; o sol nasce no centro do horizonte
    const mx = portrait ? 12 : 27, my = portrait ? 31 : 16.5;
    moon.position.set(mx, my - dawn * 6, cz - 70); moon.scale.setScalar(2.6 * (1 - dawn * .9));
    moonHalo.position.copy(moon.position).z -= 1; moonHalo.material.uniforms.uAmt.value = .5 * (1 - dawn);
    sun.position.set(portrait ? 12 : 30, -7 + dawn * (portrait ? 5 : 8.6), cz - 80); sun.scale.setScalar(5 * Math.min(1, dawn * 1.5));
    sunHalo.position.copy(sun.position).z -= 1; sunHalo.material.uniforms.uAmt.value = .9 * dawn;
    moonHalo.lookAt(camera.position); sunHalo.lookAt(camera.position);
    envU.uSunDir.value.copy(dawn > .5 ? sun.position : moon.position).sub(camera.position).normalize();
    if (frame % 3 === 0) cubeCam.update(renderer, envScene);
    key.color.setRGB(1, .94 - dawn * .1, .86 - dawn * .3);

    // mar
    seaU.uTime.value = T; seaU.uCamZ.value = cz; seaU.uLevel.value = s.level;
    seaU.uMoonX.value = (dawn > .5 ? 0 : mx) * .9;
    seaU.uColor.value.copy(s.envB).multiplyScalar(2.4).lerp(new THREE.Color(0x5a86d8), .5);
    seaU.uGlow.value.copy(s.envC);
    ndc.set(s.mouseX, -s.mouseY); ray.setFromCamera(ndc, camera);
    if (ray.ray.intersectPlane(seaPlane, hit)) seaU.uHover.value.set(hit.x, hit.z, Math.min(1, .35 + s.mouseSpeed * 2));
    else seaU.uHover.value.z = 0;

    // fitas
    const nearHero = cz > -14;
    ribbon.mesh.visible = ribbon2.mesh.visible = nearHero;
    if (nearHero) { ribbon.update(T, { amp: 1 + s.mouseY * -.3, lvl: s.level }); ribbon2.update(T, { amp: 1.05, lvl: s.level, phase: .6 }); ribbon.mesh.position.x = s.mouseX * -.4; }
    const nearEnd = cz < Z.breve - 10; ribbonEnd.mesh.visible = nearEnd;
    if (nearEnd) ribbonEnd.update(T * .7, { amp: .7, lvl: s.level });

    radio.update(dt, T, s.level);

    // telas: flutuam, viram pro cursor quando ele passa
    if ((hoverT += dt) > .06) { hoverT = 0; const p = pickAt(s.mouseX, -s.mouseY); hovered = p; }
    screens.forEach(sc => {
      const u = sc.group.userData, b = u.base; if (!b) return;
      const on = hovered && hovered.type === 'screen' && hovered.g === sc.group;
      u.hover += ((on ? 1 : 0) - u.hover) * Math.min(1, dt * 6);
      sc.group.position.set(b.x, b.y + Math.sin(T * .7 + u.ph) * .15 + u.hover * .15, b.z + u.hover * 1.2);
      sc.group.rotation.set(Math.sin(T * .5 + u.ph) * .05 - s.mouseY * .1 * u.hover, (portrait ? 0 : -.28) + Math.sin(T * .4 + u.ph) * .08 + s.mouseX * .25 * u.hover, Math.sin(T * .3 + u.ph) * .02);
    });
    wins.forEach((w, i) => { w.group.position.y += Math.sin(T * .8 + i) * .002; w.group.rotation.y = .32 + Math.sin(T * .3 + i) * .06 + s.mouseX * .08; });

    objs.forEach(it => {
      it.bounce = Math.max(0, it.bounce - dt * 1.3); it.spin *= Math.pow(.2, dt);
      const bz = Math.sin(it.bounce * Math.PI * 3) * it.bounce;
      const on = hovered && hovered.type === 'obj' && hovered.it === it;
      const sc = (portrait ? .62 : .86) * (1 + bz * .2 + (on ? .06 : 0));
      it.o.group.scale.setScalar(sc);
      it.o.group.rotation.y = s.mouseX * .3 + it.spin * .1;
    });
    tri.update(T, objs[0].spin * .3);
    ws.update(T, 1 + objs[1].spin * .5 + s.level * 2);
    fin.update(T, objs[2].spin * .2);
    // a lente abre conforme o cursor se aproxima do centro dela
    jovi.group.getWorldPosition(tmp).project(camera);
    const dLens = Math.hypot(tmp.x - s.mouseX, tmp.y + s.mouseY);
    jovi.update(T, Math.min(1, Math.max(0, 1.1 - dLens * 1.1)));
    ph1.update(T, 0); ph2.update(T, 2);

    // só desenha o que está perto da câmera
    culled.forEach(g => { const z = g.userData.cz ?? g.position.z; g.visible = z < cz + 6 && z > cz - 40; });
    renderer.render(scene, camera);
    // horizonte na tela (pro céu do fundo casar com o mar)
    horizonP.set(camera.position.x, camera.position.y, cz - 900).project(camera);
    return { horizon: horizonP.y * .5, hot: !!hovered, hoverScreen: hovered && hovered.type === 'screen' ? hovered.i : -1 };
  }
  return { resize, update, click };
}
