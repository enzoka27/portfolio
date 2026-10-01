// ============ concreto aparente — tudo desenhado em canvas ============
import * as THREE from 'three';

export const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

/* ruído de valor em várias oitavas, desenhado escalando canvases pequenos */
function noiseLayer(ctx, S, R, cells, alpha, dark = true) {
  const c = document.createElement('canvas'); c.width = c.height = cells;
  const x = c.getContext('2d'); const img = x.createImageData(cells, cells);
  for (let i = 0; i < cells * cells; i++) { const v = R() * 255; img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255; }
  x.putImageData(img, 0, 0);
  ctx.save(); ctx.globalAlpha = alpha; ctx.globalCompositeOperation = dark ? 'overlay' : 'soft-light';
  ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(c, 0, 0, S, S); ctx.restore();
}

/**
 * Concreto moldado em tábua (o "concreto aparente" paulista):
 * tábuas horizontais com veio de madeira impresso, juntas, furos de tirante, poros e escorridos.
 * Devolve { map, bump } — o bump é a mesma imagem em cinza, com os furos e juntas fundos.
 */
export function concreteTextures({ seed = 7, size = 1024, planks = 8, tone = 172, warm = 4, holes = true } = {}) {
  const R = rng(seed);
  const S = size;
  const col = document.createElement('canvas'); col.width = col.height = S;
  const c = col.getContext('2d');
  const bmp = document.createElement('canvas'); bmp.width = bmp.height = S;
  const b = bmp.getContext('2d');

  c.fillStyle = `rgb(${tone + warm},${tone + warm * .4},${tone - warm})`; c.fillRect(0, 0, S, S);
  b.fillStyle = '#808080'; b.fillRect(0, 0, S, S);

  // manchas grandes e médias
  noiseLayer(c, S, R, 6, .26); noiseLayer(c, S, R, 18, .24); noiseLayer(c, S, R, 64, .25); noiseLayer(c, S, R, 256, .18);
  noiseLayer(b, S, R, 64, .35); noiseLayer(b, S, R, 256, .4);

  const ph = S / planks;
  for (let p = 0; p < planks; p++) {
    const y0 = p * ph;
    // cada tábua tem um tom levemente diferente
    const shade = (R() - .5) * 26;
    c.fillStyle = shade > 0 ? `rgba(255,250,240,${shade / 255})` : `rgba(20,18,16,${-shade / 255})`;
    c.fillRect(0, y0, S, ph);
    // veio da madeira impresso
    const lines = 18 + (R() * 14 | 0);
    for (let l = 0; l < lines; l++) {
      const yy = y0 + R() * ph, amp = 1 + R() * 5, fr = .004 + R() * .012, phase = R() * 9;
      const a = .025 + R() * .06;
      c.strokeStyle = `rgba(40,36,30,${a})`; b.strokeStyle = `rgba(0,0,0,${a * 1.6})`;
      c.lineWidth = b.lineWidth = .6 + R() * 1.6;
      c.beginPath(); b.beginPath();
      for (let x = 0; x <= S; x += 8) {
        const k = yy + Math.sin(x * fr + phase) * amp + Math.sin(x * fr * 3.1 + phase * 2) * amp * .3;
        x ? (c.lineTo(x, k), b.lineTo(x, k)) : (c.moveTo(x, k), b.moveTo(x, k));
      }
      c.stroke(); b.stroke();
      // nós da madeira
      if (R() < .08) {
        const kx = R() * S;
        c.fillStyle = `rgba(40,34,28,${.08 + R() * .08})`; c.beginPath(); c.ellipse(kx, yy, 6 + R() * 14, 2 + R() * 4, 0, 0, 7); c.fill();
      }
    }
    // junta entre tábuas (rebarba de concreto)
    c.fillStyle = 'rgba(30,28,25,.35)'; c.fillRect(0, y0 - 1, S, 2.5);
    c.fillStyle = 'rgba(255,255,255,.12)'; c.fillRect(0, y0 + 1.5, S, 1.2);
    b.fillStyle = 'rgba(0,0,0,.6)'; b.fillRect(0, y0 - 1, S, 3);
    b.fillStyle = 'rgba(255,255,255,.4)'; b.fillRect(0, y0 + 2, S, 1.5);
  }
  // juntas verticais desencontradas
  for (let p = 0; p < planks; p++) {
    const x = R() * S;
    c.fillStyle = 'rgba(30,28,25,.3)'; c.fillRect(x, p * ph, 2, ph);
    b.fillStyle = 'rgba(0,0,0,.5)'; b.fillRect(x, p * ph, 2, ph);
  }
  // furos de tirante — a assinatura do concreto aparente
  if (holes) {
    const cols = 4, rows = 2;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const x = (i + .5) * S / cols + (R() - .5) * 6, y = (j * 4 + 2) * ph + (R() - .5) * 4, r = S * .011;
      const g = c.createRadialGradient(x, y, 0, x, y, r * 1.9);
      g.addColorStop(0, 'rgba(25,22,20,.95)'); g.addColorStop(.5, 'rgba(60,55,50,.8)'); g.addColorStop(.62, 'rgba(230,225,215,.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g; c.beginPath(); c.arc(x, y, r * 1.9, 0, 7); c.fill();
      const gb = b.createRadialGradient(x, y, 0, x, y, r * 1.9);
      gb.addColorStop(0, '#000'); gb.addColorStop(.55, '#202020'); gb.addColorStop(.7, '#b0b0b0'); gb.addColorStop(1, 'rgba(128,128,128,0)');
      b.fillStyle = gb; b.beginPath(); b.arc(x, y, r * 1.9, 0, 7); b.fill();
    }
  }
  // poros (bolhas de ar)
  for (let i = 0; i < 1600; i++) {
    const x = R() * S, y = R() * S, r = R() < .9 ? .6 + R() * 1.6 : 2 + R() * 3;
    c.fillStyle = `rgba(30,27,24,${.3 + R() * .5})`; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill();
    b.fillStyle = 'rgba(0,0,0,.8)'; b.beginPath(); b.arc(x, y, r, 0, 7); b.fill();
  }
  // escorridos de chuva
  for (let i = 0; i < 26; i++) {
    const x = R() * S, w = 4 + R() * 26, h = S * (.15 + R() * .6), y = R() < .5 ? 0 : R() * S * .5;
    const g = c.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, `rgba(30,28,24,${.12 + R() * .14})`); g.addColorStop(1, 'rgba(30,28,24,0)');
    c.fillStyle = g; c.fillRect(x, y, w, h);
  }

  const map = new THREE.CanvasTexture(col); map.colorSpace = THREE.SRGBColorSpace;
  const bump = new THREE.CanvasTexture(bmp);
  [map, bump].forEach(t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; });
  return { map, bump, canvas: col, bumpCanvas: bmp };
}

/** material de concreto */
export function concreteMat(tex, { color = 0xffffff, rough = .92, bumpScale = 2.2, ...rest } = {}) {
  return new THREE.MeshStandardMaterial({ map: tex.map, bumpMap: tex.bump, bumpScale, roughness: rough, metalness: 0, color, ...rest });
}

/**
 * Caixa com UV em escala de mundo: a textura tem sempre o mesmo tamanho real,
 * não importa se a caixa é um pilar ou uma laje de 70 metros.
 * `unit` = quantos metros uma repetição da textura cobre.
 */
export function cbox(w, h, d, mat, unit = 4, R = Math.random) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];   // px nx py ny pz nz
  for (let f = 0; f < 6; f++) {
    const [du, dv] = dims[f], ou = R(), ov = R();
    for (let v = 0; v < 4; v++) { const i = f * 4 + v; uv.setXY(i, uv.getX(i) * du / unit + ou, uv.getY(i) * dv / unit + ov); }
  }
  const m = new THREE.Mesh(g, mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}

/** textura de etiqueta (gaveta, placa) desenhada em canvas */
export function labelAtlas(n, draw, cell = 128, cols = 16) {
  const rows = Math.ceil(n / cols);
  const c = document.createElement('canvas'); c.width = cols * cell; c.height = rows * cell;
  const x = c.getContext('2d');
  for (let i = 0; i < n; i++) { x.save(); x.translate((i % cols) * cell, Math.floor(i / cols) * cell); draw(x, i, cell); x.restore(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return { tex: t, uv: i => { const u0 = (i % cols) / cols, v1 = 1 - Math.floor(i / cols) / rows; return [u0, v1 - 1 / rows, u0 + 1 / cols, v1]; } };
}
