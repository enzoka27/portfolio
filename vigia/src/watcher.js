// ============ a testemunha — observa o visitante, guarda só na memória do navegador ============
// Nada aqui é enviado, salvo ou persistido. Fechou a aba, acabou. `erase()` zera tudo antes disso.

const ZONES = [
  ['canto superior esquerdo', 'topo', 'canto superior direito'],
  ['lado esquerdo', 'centro', 'lado direito'],
  ['canto inferior esquerdo', 'pé da tela', 'canto inferior direito'],
];

export function createWatcher() {
  const W = {};
  let lastMove = 0, lastX = null, lastY = null, lastSample = 0;
  let lastScroll = scrollY, dir = 0, hidAt = 0;

  function reset() {
    Object.assign(W, {
      t0: performance.now(), arrived: new Date(),
      dist: 0, clicks: 0, scrolled: 0, reversals: 0, maxSpeed: 0,
      idleNow: 0, idleLongest: 0, hesitations: 0,
      leaves: 0, away: 0,
      heat: new Float32Array(9),
      path: [],                     // pontos normalizados [x, y]
      blinded: 0, held: 0, heldNow: 0, touched: 0,
      keys: 0, selections: 0, lastSel: '', rightClicks: 0, copies: 0, resizes: 0, exits: 0, lastExit: '',
      events: 0,
    });
    lastMove = performance.now();
  }
  reset();
  const bump = () => { W.events++; };
  W.on = () => {};                     // main.js pendura o "operador" aqui
  const emit = (type, data) => { try { W.on(type, data); } catch (e) { } };

  addEventListener('pointermove', e => {
    const now = performance.now();
    if (lastX !== null) W.dist += Math.hypot(e.clientX - lastX, e.clientY - lastY);
    lastX = e.clientX; lastY = e.clientY;
    if (now - lastMove > 2500) { W.hesitations++; bump(); emit('resume', (now - lastMove) / 1000); }
    lastMove = now;
    if (now - lastSample > 40 && W.path.length < 9000) { W.path.push([e.clientX / innerWidth, e.clientY / innerHeight]); lastSample = now; }
  }, { passive: true });
  addEventListener('pointerdown', () => { W.clicks++; bump(); lastMove = performance.now(); });
  addEventListener('scroll', () => {
    const y = scrollY, d = y - lastScroll;
    if (Math.abs(d) > 2) {
      const nd = Math.sign(d);
      if (dir && nd !== dir && nd < 0) { W.reversals++; bump(); emit('reverse', W.reversals); }
      dir = nd; W.scrolled += Math.abs(d);
    }
    lastScroll = y; lastMove = performance.now();
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { hidAt = performance.now(); W.leaves++; bump(); emit('hide'); }
    else if (hidAt) { const d = performance.now() - hidAt; W.away += d; hidAt = 0; emit('show', d / 1000); }
  });
  // teclas: só a contagem, nunca o conteúdo
  addEventListener('keydown', e => { if (e.repeat) return; W.keys++; if (W.keys % 8 === 0) { bump(); emit('keys', W.keys); } });
  addEventListener('contextmenu', () => { W.rightClicks++; bump(); emit('right'); });
  addEventListener('copy', () => { W.copies++; bump(); emit('copy'); });
  document.addEventListener('selectionchange', () => {
    const t = String(getSelection() || '').trim();
    if (t.length > 2 && t !== W.lastSel) { W.lastSel = t; clearTimeout(W._selT); W._selT = setTimeout(() => { W.selections++; bump(); emit('select', t); }, 700); }
  });
  let rsT = 0; addEventListener('resize', () => { clearTimeout(rsT); rsT = setTimeout(() => { W.resizes++; bump(); emit('resize'); }, 500); });
  // saiu do quadro: por qual borda
  document.addEventListener('mouseout', e => {
    if (e.relatedTarget) return;
    const x = e.clientX, y = e.clientY, edges = [[y, 'de cima'], [innerHeight - y, 'de baixo'], [x, 'da esquerda'], [innerWidth - x, 'da direita']];
    edges.sort((a, b) => a[0] - b[0]); W.exits++; W.lastExit = edges[0][1]; bump(); emit('exit', W.lastExit);
  });
  W.device = (() => {
    const c = navigator.hardwareConcurrency, m = navigator.deviceMemory, n = navigator.connection && navigator.connection.effectiveType;
    return { cores: c || 0, mem: m || 0, net: n || '', dark: matchMedia('(prefers-color-scheme: dark)').matches, touch: matchMedia('(pointer: coarse)').matches };
  })();

  // chamado todo quadro
  W.tick = (dt, scrollSpeed) => {
    const now = performance.now();
    W.idleNow = (now - lastMove) / 1000;
    W.idleLongest = Math.max(W.idleLongest, W.idleNow);
    W.maxSpeed = Math.max(W.maxSpeed, Math.abs(scrollSpeed));
    if (lastX !== null && !document.hidden) {
      const cx = Math.min(2, Math.max(0, Math.floor(lastX / innerWidth * 3)));
      const cy = Math.min(2, Math.max(0, Math.floor(lastY / innerHeight * 3)));
      W.heat[cy * 3 + cx] += dt;
    }
  };

  W.favorite = () => {
    let best = 4, v = -1;
    W.heat.forEach((h, i) => { if (h > v) { v = h; best = i; } });
    return ZONES[Math.floor(best / 3)][best % 3];
  };
  W.seconds = () => (performance.now() - W.t0) / 1000;
  W.meters = () => W.dist * 0.0002645833;          // px → metros, a 96 dpi
  W.reset = reset;
  W.bump = bump;
  return W;
}

/* ---------- formatação em português ---------- */
const nf1 = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1, minimumFractionDigits: 1 });
const nf0 = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 });
export const fmt = {
  n: v => nf0.format(v), d: v => nf1.format(v),
  time: d => new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(d),
  clock: s => { s = Math.floor(s); return [s / 3600 | 0, (s / 60 | 0) % 60, s % 60].map(v => String(v).padStart(2, '0')).join(':'); },
  vezes: v => v === 1 ? '1 vez' : `${nf0.format(v)} vezes`,
};

/** as linhas da ficha — [rótulo, valor] — recalculadas ao vivo */
export function fichaLines(W) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '?';
  return [
    ['chegada', `${fmt.time(W.arrived)} · ${tz.replace('_', ' ')}`],
    ['tela', `${innerWidth}×${innerHeight} · ${devicePixelRatio || 1}x`],
    ['idioma', navigator.language || '?'],
    ['tempo aqui', fmt.clock(W.seconds())],
    ['cursor andou', `${fmt.d(W.meters())} m`],
    ['cliques', fmt.n(W.clicks)],
    ['rolou', `${fmt.n(W.scrolled)} px`],
    ['voltou atrás', fmt.vezes(W.reversals)],
    ['maior pausa', `${fmt.d(W.idleLongest)} s`],
    ['hesitou', fmt.vezes(W.hesitations)],
    ['saiu da aba', fmt.vezes(W.leaves)],
    ['teclas apertadas', `${fmt.n(W.keys)} (só contadas)`],
    ['texto selecionado', W.selections ? `${fmt.vezes(W.selections)}` : 'nada'],
    ['botão direito', fmt.vezes(W.rightClicks)],
    ['saiu do quadro', W.exits ? `${fmt.vezes(W.exits)} · última pela borda ${W.lastExit}` : 'nunca'],
    ['aparelho', [W.device.cores ? `${W.device.cores} núcleos` : '', W.device.mem ? `~${W.device.mem} GB` : '', W.device.touch ? 'toque' : 'mouse'].filter(Boolean).join(' · ')],
    ['sistema', `tema ${W.device.dark ? 'escuro' : 'claro'}${W.device.net ? ' · rede ' + W.device.net : ''}`],
    ['câmeras cegadas', fmt.n(W.blinded)],
    ['aguentou o peso', `${fmt.d(W.held)} s`],
    ['lugar preferido', W.favorite()],
  ];
}

/** a frase-veredito do laudo, escolhida pelo comportamento */
export function verdict(W) {
  const s = W.seconds();
  if (W.selections >= 2 || W.copies) return 'tenta levar coisas daqui. o prédio percebe quem quer guardar.';
  if (W.exits >= 3) return 'tenta sair pelas bordas. sempre volta pelo meio.';
  if (W.blinded >= 10) return 'resiste a ser visto. apagou os olhos que pôde.';
  if (W.reversals >= 6) return 'volta atrás com frequência. procura o que já passou.';
  if (W.leaves >= 2) return 'vai embora e volta. nunca fica inteiro.';
  if (W.idleLongest > 20) return 'sabe ficar parado. o prédio desconfia disso.';
  if (W.held > 6) return 'aguenta peso por mais tempo que o recomendado.';
  if (W.maxSpeed > 120 || s < 60) return 'passa rápido. como quem tem medo de ser lembrado.';
  if (W.meters() > 25) return 'não para quieto. o cursor andou mais que você.';
  return 'parece calmo. ninguém é calmo assim.';
}
