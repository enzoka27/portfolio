// ============ aquecimento: círculos de ritmo (estilo osu!) ============
// Um círculo aparece, o anel de aproximação fecha, você clica no tempo.

export function createCircles(field, { onHit = () => {}, statsEl, t = k => k } = {}) {
  const APPROACH = 950;           // ms até o anel fechar
  let active = false, timer = 0, n = 1, combo = 0, best = 0, hits = 0, total = 0, score = 0;
  const live = new Set();

  function stats() {
    const acc = total ? Math.round(hits / total * 100) : 100;
    statsEl.innerHTML = `${t('combo')} <b>${combo}x</b> · ${t('best')} <b>${best}x</b> · ${t('acc')} <b>${acc}%</b>`;
  }
  function judge(el, kind) {
    const r = el.getBoundingClientRect(), fr = field.getBoundingClientRect();
    const pop = document.createElement('span'); pop.className = 'osu-pop k' + kind; pop.textContent = kind ? kind : '×';
    pop.style.left = (r.left - fr.left + r.width / 2) + 'px'; pop.style.top = (r.top - fr.top + r.height / 2) + 'px';
    field.append(pop); setTimeout(() => pop.remove(), 800);
    total++;
    if (kind) { hits += kind / 300; combo++; best = Math.max(best, combo); score += kind * (1 + combo / 25); }
    else combo = 0;
    stats(); onHit(kind, combo, el);
  }
  function spawn() {
    const el = document.createElement('button');
    el.className = 'osu-c'; el.setAttribute('aria-label', 'círculo');
    el.innerHTML = `<i class="osu-ring"></i><span>${n}</span>`;
    n = n % 9 + 1;
    const w = field.clientWidth, h = field.clientHeight, s = 92;
    el.style.left = (s / 2 + Math.random() * Math.max(10, w - s)) + 'px';
    el.style.top = (s / 2 + Math.random() * Math.max(10, h - s)) + 'px';
    const born = performance.now();
    el._hitAt = born + APPROACH;
    el.style.setProperty('--appr', APPROACH + 'ms');
    field.append(el); live.add(el);
    el.addEventListener('pointerdown', e => {
      e.stopPropagation();
      if (el._done) return; el._done = true;
      const d = Math.abs(performance.now() - el._hitAt);
      const kind = d < 90 ? 300 : d < 170 ? 100 : d < 260 ? 50 : 0;
      judge(el, kind); el.classList.add(kind ? 'hit' : 'miss'); live.delete(el); setTimeout(() => el.remove(), 380);
    });
    setTimeout(() => { if (!el._done) { el._done = true; judge(el, 0); el.classList.add('miss'); live.delete(el); setTimeout(() => el.remove(), 380); } }, APPROACH + 300);
  }
  function loop() { if (!active) return; spawn(); timer = setTimeout(loop, 620 + Math.random() * 520); }
  stats();
  return {
    set(on) { if (on === active) return; active = on; clearTimeout(timer); if (on) loop(); },
    restat: stats,
  };
}
