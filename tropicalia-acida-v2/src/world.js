// ============ o mundo 3D ============
import * as THREE from 'three';
import { ENV_VERT, ENV_FRAG, BLOB_HEAD, BLOB_NORMAL } from './shaders.js';
import * as O from './objects.js';

export function createWorld(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, .1, 260);
  camera.position.set(0, 0, 9);

  /* ---- ambiente psicodélico que tudo reflete ---- */
  const envScene = new THREE.Scene();
  const envU = { uTime: { value: 0 }, uPeak: { value: 0 }, uDawn: { value: 0 } };
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(50, 64, 32),
    new THREE.ShaderMaterial({ vertexShader: ENV_VERT, fragmentShader: ENV_FRAG, uniforms: envU, side: THREE.BackSide, depthWrite: false })));
  const cubeRT = new THREE.WebGLCubeRenderTarget(256, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
  const cubeCam = new THREE.CubeCamera(.1, 100, cubeRT);
  envScene.add(cubeCam);
  scene.environment = cubeRT.texture;

  /* ---- luzes coloridas pra recorte ---- */
  scene.add(new THREE.HemisphereLight(0xfff1d6, 0x7b2ff7, .6));
  const key = new THREE.DirectionalLight(0xff2e88, 2.2); key.position.set(-6, 4, 6);
  const rim = new THREE.DirectionalLight(0x19c39a, 2.4); rim.position.set(7, -2, -3);
  const top = new THREE.DirectionalLight(0xffd23f, 1.4); top.position.set(0, 8, 2);
  scene.add(key, rim, top);
  // as luzes andam junto com a câmera
  const lightRig = new THREE.Group(); lightRig.add(key, rim, top, key.target, rim.target, top.target); scene.add(lightRig);

  const R = O.rng(42);
  const spinners = [];   // coisas que giram e boiam

  /* ---- 0 · A GOTA ---- */
  const blobU = { uTime: { value: 0 }, uAmp: { value: .26 }, uPoke: { value: new THREE.Vector3(0, 0, 1) }, uPokeAmt: { value: 0 } };
  const blobMat = O.mats.chrome();
  blobMat.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, blobU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\n' + BLOB_HEAD)
      .replace('#include <beginnormal_vertex>', BLOB_NORMAL)
      .replace('#include <begin_vertex>', 'vec3 transformed = dispPos;');
  };
  const blobGeo = new THREE.IcosahedronGeometry(1.75, 42);
  const blob = new THREE.Mesh(blobGeo, blobMat);
  scene.add(blob);
  // satélites da gota
  const orbit = new THREE.Group(); scene.add(orbit);
  const sg = O.starGeometry();
  for (let i = 0; i < 7; i++) {
    const a = i / 7 * Math.PI * 2;
    const m = i % 2 ? new THREE.Mesh(sg, O.mats.candy([O.PAL.yellow, O.PAL.pink, O.PAL.green][i % 3])) :
      new THREE.Mesh(new THREE.SphereGeometry(.18 + R() * .15, 32, 16), O.mats.chrome());
    m.position.set(Math.cos(a) * 3.1, Math.sin(a * 2) * .7, Math.sin(a) * 3.1);
    m.scale.multiplyScalar(i % 2 ? .32 : 1);
    m.userData.spin = .5 + R(); orbit.add(m);
  }

  /* ---- 1 · FLOWER POWER ---- */
  const field = new THREE.Group(); scene.add(field);
  const petals = [O.PAL.cream, O.PAL.pink, O.PAL.yellow, O.PAL.orange, O.PAL.violet, O.PAL.green, O.PAL.cream];
  const centers = [O.PAL.orange, O.PAL.yellow, O.PAL.pink, O.PAL.violet, O.PAL.yellow, O.PAL.pink];
  for (let i = 0; i < 46; i++) {
    const d = O.daisy(petals[i % petals.length], centers[i % centers.length]);
    let x, y;
    do { x = (R() - .5) * 24; y = (R() - .5) * 14; } while ((x / 5.2) ** 2 + (y / 3.6) ** 2 < 1);
    d.position.set(x, y, -18 - R() * 44);
    d.scale.setScalar(.6 + R() * 1.3);
    d.rotation.set(R() * 3, R() * 3, R() * 3);
    d.userData = { spin: (R() - .5) * 1.2, bob: R() * 6, base: d.position.y };
    field.add(d); spinners.push(d);
  }
  const shroom = O.swirl(O.PAL.pink); shroom.position.set(6, -2.2, -44); shroom.scale.setScalar(1.6); shroom.rotation.z = -.18; scene.add(shroom);
  const shroom2 = O.swirl(O.PAL.violet); shroom2.position.set(-6.5, 2.4, -52); shroom2.scale.setScalar(1.1); shroom2.rotation.z = .4; scene.add(shroom2);
  const shroom3 = O.swirl(O.PAL.orange); shroom3.position.set(-6.2, -4.2, -24); shroom3.scale.setScalar(.7); shroom3.rotation.z = .25; scene.add(shroom3);

  /* ---- 2 · O OLHO ---- */
  const E = O.eye(); E.root.position.set(0, 0, -86); scene.add(E.root);

  /* ---- 3 · COQUEIRAL ---- */
  const isl = O.island(); isl.position.set(0, -3.2, -124); isl.rotation.x = .22; scene.add(isl);

  /* ---- 4 · O TÚNEL ---- */
  const tun = O.tunnel(-140, -190, 42); scene.add(tun);

  /* ---- 5 · A VOLTA ---- */
  const blob2 = new THREE.Mesh(blobGeo, blobMat); blob2.position.set(0, 0, -208); blob2.scale.setScalar(1.25); scene.add(blob2);

  /* ---- poeira cósmica: objetos soltos pelo caminho ---- */
  const debris = new THREE.Group(); scene.add(debris);
  const geos = [new THREE.TorusKnotGeometry(.4, .14, 140, 18), new THREE.SphereGeometry(.38, 32, 16), sg,
    new THREE.TorusGeometry(.42, .16, 16, 48), new THREE.OctahedronGeometry(.5, 0), new THREE.CapsuleGeometry(.2, .6, 8, 16)];
  for (let i = 0; i < 70; i++) {
    const kind = i % geos.length;
    const mat = R() < .35 ? O.mats.chrome() : O.mats.candy(O.pick(R));
    const m = new THREE.Mesh(geos[kind], mat);
    let x, y;
    do { x = (R() - .5) * 28; y = (R() - .5) * 16; } while ((x / 5) ** 2 + (y / 3.4) ** 2 < 1);
    m.position.set(x, y, 4 - R() * 214);
    m.scale.setScalar((kind === 2 ? .45 : 1) * (.6 + R() * 1.1));
    m.rotation.set(R() * 6, R() * 6, R() * 6);
    m.userData = { spin: (R() - .5) * 1.6, bob: R() * 6, base: y };
    debris.add(m); spinners.push(m);
  }

  /* ---- interação: cutucar a gota ---- */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), sphere = new THREE.Sphere(new THREE.Vector3(), 1.9), hit = new THREE.Vector3();
  const eyeTarget = new THREE.Vector3(), eyeLook = new THREE.Vector3(0, 0, 10);
  let frame = 0;

  function resize(w, h) {
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w / h < .8 ? 58 : 42;   // celular: lente mais aberta
    camera.updateProjectionMatrix();
  }

  function update(s) {
    // s: { time, dt, camZ, mouseX, mouseY, peak, dawn, vel, click, tunnel }
    const T = s.time;
    frame++;

    // câmera
    const sway = Math.sin(s.camZ * .045) * 1.2;
    camera.position.set(sway + s.mouseX * .9, Math.cos(s.camZ * .037) * .6 - s.mouseY * .6, s.camZ);
    camera.lookAt(sway * .4 + s.mouseX * .2, -s.mouseY * .15, s.camZ - 12);
    camera.rotateZ(s.tunnel * Math.sin(T * .25) * .6 + s.vel * .0006);
    lightRig.position.set(0, 0, s.camZ - 6);

    // ambiente
    envU.uTime.value = T; envU.uPeak.value = s.peak; envU.uDawn.value = s.dawn;
    if (frame % 2 === 0) cubeCam.update(renderer, envScene);

    // gota
    blobU.uTime.value = T;
    blobU.uAmp.value = .22 + Math.min(Math.abs(s.vel) * .004, .25) + s.click * .25;
    ndc.set(s.mouseX, -s.mouseY); ray.setFromCamera(ndc, camera);
    let poke = 0;
    [blob, blob2].forEach(b => {
      sphere.center.copy(b.position); sphere.radius = 1.9 * b.scale.x;
      if (ray.ray.intersectSphere(sphere, hit)) {
        blobU.uPoke.value.copy(hit.sub(b.position).normalize().applyQuaternion(b.quaternion.clone().invert()));
        poke = .55;
      }
    });
    blobU.uPokeAmt.value += (poke - blobU.uPokeAmt.value) * Math.min(1, s.dt * 4);
    blob.rotation.y = T * .12; blob.rotation.x = Math.sin(T * .2) * .3;
    blob2.rotation.y = -T * .1;
    orbit.position.copy(blob.position);
    orbit.rotation.y = T * .25; orbit.rotation.z = Math.sin(T * .3) * .25;
    orbit.children.forEach(o => { o.rotation.x += s.dt * o.userData.spin; o.rotation.y += s.dt * o.userData.spin * .7; });

    // flores, poeira
    spinners.forEach(o => {
      o.rotation.x += s.dt * o.userData.spin * .5;
      o.rotation.y += s.dt * o.userData.spin;
      o.position.y = o.userData.base + Math.sin(T * .6 + o.userData.bob) * .35;
    });
    [shroom, shroom2, shroom3].forEach((m, i) => { m.rotation.y = T * (.25 + i * .1); m.position.y += Math.sin(T * .8 + i) * .004; });

    // o olho segue o cursor
    eyeTarget.set(s.mouseX * 14, -s.mouseY * 9, E.root.position.z + 14);
    eyeLook.lerp(eyeTarget, Math.min(1, s.dt * 5));
    E.ball.lookAt(eyeLook.x, eyeLook.y, eyeLook.z);
    // piscadinha de vez em quando
    const blink = Math.max(0, 1 - Math.abs(((T % 5.3) - 5.1) * 9));
    E.ball.scale.y = 1 - blink * .85;
    E.rings[0].rotation.z = T * .3; E.rings[1].rotation.z = -T * .2; E.rings[2].rotation.y = T * .4;
    E.moons.rotation.y = T * .6;

    // ilha
    isl.rotation.y = Math.sin(T * .15) * .5;
    isl.userData.palms.forEach((p, i) => { p.userData.crown.rotation.z = Math.sin(T * 1.1 + i) * .08; p.userData.crown.rotation.x = Math.cos(T * .9 + i) * .06; });
    isl.userData.sun.rotation.z = T * .1;

    // túnel respira em onda
    tun.userData.rings.forEach(r => {
      const i = r.userData.i;
      const w = Math.sin(T * 2.2 - i * .45);
      r.scale.setScalar(1 + w * .12 + s.peak * .1);
      r.rotation.z = T * .2 + i * .15;
      r.rotation.x = Math.sin(T * .5 + i * .3) * .12;
    });
    tun.userData.spiral.rotation.z = T * .35;

    renderer.render(scene, camera);
  }

  return { resize, update, renderer };
}
