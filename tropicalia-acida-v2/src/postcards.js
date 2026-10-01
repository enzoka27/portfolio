// ============ cartões-postais pintados em canvas ============
import { rng } from './objects.js';

const C = { pink: '#ff2e88', orange: '#ff7a1a', yellow: '#ffd23f', green: '#19c39a', blue: '#1b2cc1', violet: '#7b2ff7', cream: '#fff1d6', ink: '#1a0b2e' };

function bands(x, W, H, cols, y0 = 0, y1 = H) {
  const n = cols.length, h = (y1 - y0) / n;
  cols.forEach((c, i) => { x.fillStyle = c; x.fillRect(0, y0 + i * h, W, h + 1); });
}
function stripedSun(x, cx, cy, r, cols, slits = 0) {
  // desenha num canvas à parte pra que as fendas mostrem o céu de trás
  const o = document.createElement('canvas'); o.width = o.height = Math.ceil(r * 2);
  const y = o.getContext('2d');
  y.beginPath(); y.arc(r, r, r, 0, Math.PI * 2); y.clip();
  const g = y.createLinearGradient(0, 0, 0, r * 2);
  cols.forEach((c, i) => g.addColorStop(i / (cols.length - 1), c));
  y.fillStyle = g; y.fillRect(0, 0, r * 2, r * 2);
  for (let i = 0; i < slits; i++) y.clearRect(0, r + r * (.1 + i * .17), r * 2, 3 + i * 3.5);
  x.drawImage(o, cx - r, cy - r);
}
function waves(x, W, y, amp, period, col, phase = 0) {
  x.fillStyle = col; x.beginPath(); x.moveTo(0, 2000);
  for (let px = 0; px <= W; px += 4) x.lineTo(px, y + Math.sin(px / period * Math.PI * 2 + phase) * amp);
  x.lineTo(W, 2000); x.closePath(); x.fill();
}
function palmSilhouette(x, bx, by, h, lean, col, scale = 1) {
  x.save(); x.fillStyle = col; x.strokeStyle = col;
  // tronco
  x.lineWidth = 14 * scale; x.lineCap = 'round';
  x.beginPath(); x.moveTo(bx, by); x.quadraticCurveTo(bx + lean * .2, by - h * .6, bx + lean, by - h); x.stroke();
  const tx = bx + lean, ty = by - h;
  // folhas
  for (let i = 0; i < 8; i++) {
    const a = -Math.PI + i / 7 * Math.PI + (i % 2) * .1;
    const L = (90 + (i % 3) * 25) * scale;
    const ex = tx + Math.cos(a) * L, ey = ty + Math.sin(a) * L * .55 + L * .45;
    x.beginPath(); x.moveTo(tx, ty);
    x.quadraticCurveTo(tx + Math.cos(a) * L * .5, ty + Math.sin(a) * L * .9 - 20 * scale, ex, ey);
    x.quadraticCurveTo(tx + Math.cos(a) * L * .45, ty + Math.sin(a) * L * .55, tx, ty + 6 * scale);
    x.fill();
  }
  x.beginPath(); x.arc(tx, ty + 8 * scale, 10 * scale, 0, Math.PI * 2); x.fill();
  x.restore();
}
function halftone(x, W, H, col = 'rgba(26,11,46,.18)', step = 9) {
  x.save(); x.fillStyle = col;
  for (let y = 0; y < H; y += step) for (let px = (y / step % 2) * step / 2; px < W; px += step) {
    const r = 1.1 + 1.4 * (y / H);
    x.beginPath(); x.arc(px, y, r, 0, Math.PI * 2); x.fill();
  }
  x.restore();
}
function paper(x, W, H) {
  const g = x.createRadialGradient(W / 2, H / 2, W * .2, W / 2, H / 2, W * .75);
  g.addColorStop(0, 'rgba(255,241,214,0)'); g.addColorStop(1, 'rgba(120,40,20,.35)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  const r = rng(3);
  for (let i = 0; i < 1600; i++) { x.fillStyle = `rgba(255,241,214,${r() * .12})`; x.fillRect(r() * W, r() * H, 1.5, 1.5); }
}

const SCENES = [
  // 0 · verão sem fim
  (x, W, H) => {
    bands(x, W, H, [C.violet, C.pink, '#ff4f6d', C.orange, '#ffa53a', C.yellow], 0, H * .62);
    stripedSun(x, W * .5, H * .58, W * .26, [C.yellow, C.orange, C.pink], 5);
    waves(x, W, H * .6, 6, 90, C.blue);
    waves(x, W, H * .68, 8, 70, C.violet, 1);
    waves(x, W, H * .77, 9, 110, C.green, 2);
    waves(x, W, H * .88, 10, 80, C.cream, .5);
    palmSilhouette(x, W * .14, H * .92, H * .55, W * .1, C.ink, 1.1);
    palmSilhouette(x, W * .9, H * .95, H * .4, -W * .07, C.ink, .8);
  },
  // 1 · coqueiro elétrico
  (x, W, H) => {
    const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, C.ink); g.addColorStop(1, C.violet);
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const r = rng(9);
    for (let i = 0; i < 90; i++) { x.fillStyle = r() < .5 ? C.cream : C.yellow; x.beginPath(); x.arc(r() * W, r() * H * .7, r() * 2.2, 0, 7); x.fill(); }
    x.shadowColor = C.green; x.shadowBlur = 40;
    palmSilhouette(x, W * .45, H * 1.02, H * .72, W * .12, C.green, 1.5);
    x.shadowBlur = 0;
    palmSilhouette(x, W * .45, H * 1.02, H * .72, W * .12, '#9dffd9', 1.3);
    waves(x, W, H * .9, 7, 60, C.pink);
  },
  // 2 · duas luas
  (x, W, H) => {
    bands(x, W, H, ['#13093a', C.blue, '#3a1fb8', C.violet, '#a24bff'], 0, H);
    stripedSun(x, W * .3, H * .3, W * .16, [C.cream, C.yellow], 3);
    stripedSun(x, W * .72, H * .22, W * .09, [C.pink, C.orange], 2);
    for (let i = 0; i < 5; i++) waves(x, W, H * (.55 + i * .1), 18 - i * 2, 160 - i * 15, [C.violet, C.pink, C.orange, C.yellow, C.cream][i], i * 1.3);
  },
  // 3 · a onda
  (x, W, H) => {
    x.fillStyle = C.yellow; x.fillRect(0, 0, W, H);
    const cols = [C.blue, C.cream, C.green, C.cream, C.violet, C.cream, C.pink, C.cream];
    for (let i = 0; i < 22; i++) {
      x.strokeStyle = cols[i % cols.length]; x.lineWidth = 16;
      const r = W * (.95 - i * .04);
      x.beginPath(); x.arc(W * .62, H * .66, Math.max(4, r), Math.PI * .95, Math.PI * 2.35); x.stroke();
    }
    stripedSun(x, W * .2, H * .2, W * .1, [C.pink, C.orange], 2);
  },
  // 4 · a ilha
  (x, W, H) => {
    x.fillStyle = C.orange; x.fillRect(0, 0, W, H);
    x.save(); x.translate(W / 2, H * .62);
    for (let i = 0; i < 24; i++) { x.rotate(Math.PI * 2 / 24); x.fillStyle = i % 2 ? C.yellow : C.pink; x.beginPath(); x.moveTo(0, 0); x.lineTo(W, -60); x.lineTo(W, 60); x.fill(); }
    x.restore();
    waves(x, W, H * .64, 4, 50, C.blue);
    waves(x, W, H * .74, 6, 70, C.green, 1);
    x.fillStyle = C.cream; x.beginPath(); x.ellipse(W / 2, H * .66, W * .2, H * .05, 0, Math.PI, 0); x.fill();
    palmSilhouette(x, W * .5, H * .64, H * .3, W * .05, C.ink, .8);
  },
  // 5 · sereia de neon
  (x, W, H) => {
    x.fillStyle = C.violet; x.fillRect(0, 0, W, H);
    const cols = [C.green, C.blue, C.pink, C.yellow, C.cream];
    const s = 46;
    for (let row = -1; row < H / (s * .5) + 1; row++) for (let col = -1; col < W / s + 1; col++) {
      const cx = col * s + (row % 2) * s / 2, cy = row * s * .5;
      x.fillStyle = cols[(row + col * 2 + 50) % cols.length];
      x.beginPath(); x.arc(cx, cy, s * .55, 0, Math.PI); x.fill();
      x.strokeStyle = C.ink; x.lineWidth = 2; x.stroke();
    }
  },
];

export function paintPostcard(canvas, variant) {
  const W = canvas.width = 640, H = canvas.height = 640;
  const x = canvas.getContext('2d');
  SCENES[variant % SCENES.length](x, W, H);
  halftone(x, W, H);
  paper(x, W, H);
}
