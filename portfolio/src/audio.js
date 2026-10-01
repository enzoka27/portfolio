// ============ rádio — trilha gerada na hora, em 5/4, pro portfólio ============
// pad + arpejo com delay + mar. Nada de arquivo de áudio.

export function createRadio() {
  const ac = new (window.AudioContext || window.webkitAudioContext)();
  const master = ac.createGain(); master.gain.value = 0;
  const comp = ac.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 3;
  const an = ac.createAnalyser(); an.fftSize = 512; const buf = new Uint8Array(an.fftSize);
  master.connect(comp).connect(an).connect(ac.destination);

  // delay pingue-pongue
  const dl = ac.createDelay(1), dr = ac.createDelay(1), fb = ac.createGain(), dwet = ac.createGain(), dlp = ac.createBiquadFilter();
  const bpm = 92, eighth = 60 / bpm / 2;
  dl.delayTime.value = eighth * 3; dr.delayTime.value = eighth * 2; fb.gain.value = .42; dwet.gain.value = .35; dlp.type = 'lowpass'; dlp.frequency.value = 2600;
  const merger = ac.createChannelMerger(2);
  dl.connect(dlp).connect(dr); dr.connect(fb).connect(dl);
  dl.connect(merger, 0, 0); dr.connect(merger, 0, 1); merger.connect(dwet).connect(master);

  const noiseBuf = (() => { const b = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return b; })();

  // mar: ruído filtrado com ondas lentas
  const sea = ac.createBufferSource(); sea.buffer = noiseBuf; sea.loop = true;
  const seaF = ac.createBiquadFilter(); seaF.type = 'lowpass'; seaF.frequency.value = 500;
  const seaG = ac.createGain(); seaG.gain.value = .0;
  const swell = ac.createOscillator(); swell.frequency.value = .09; const swellG = ac.createGain(); swellG.gain.value = .05;
  swell.connect(swellG).connect(seaG.gain); const swellF = ac.createGain(); swellF.gain.value = 380; swell.connect(swellF).connect(seaF.frequency);
  sea.connect(seaF).connect(seaG).connect(master); sea.start(); swell.start();
  const seaBase = ac.createConstantSource ? ac.createConstantSource() : null;
  if (seaBase) { seaBase.offset.value = .07; seaBase.connect(seaG.gain); seaBase.start(); }

  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
  const CH = [[50, 54, 57, 61, 64], [47, 50, 54, 57, 64], [43, 47, 50, 54, 61], [45, 49, 52, 56, 59]];   // Dmaj9 · Bm11 · Gmaj7#11 · A6/9

  // pad
  const padG = ac.createGain(); padG.gain.value = .0; const padF = ac.createBiquadFilter(); padF.type = 'lowpass'; padF.frequency.value = 900; padF.Q.value = .7;
  padG.connect(padF).connect(master);
  const padLfo = ac.createOscillator(); padLfo.frequency.value = .05; const padLfoG = ac.createGain(); padLfoG.gain.value = 450; padLfo.connect(padLfoG).connect(padF.frequency); padLfo.start();
  function padChord(notes, t, dur) {
    notes.forEach((n, i) => [-6, 6].forEach(det => {
      const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.value = mtof(n - 12 * (i < 2 ? 0 : 1)); o.detune.value = det;
      const g = ac.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.022, t + 1.6); g.gain.setValueAtTime(.022, t + dur - .8); g.gain.linearRampToValueAtTime(0, t + dur + .6);
      o.connect(g).connect(padG); o.start(t); o.stop(t + dur + .7);
    }));
    // sub
    const s = ac.createOscillator(); s.frequency.value = mtof(notes[0] - 24); const sg = ac.createGain();
    sg.gain.setValueAtTime(0, t); sg.gain.linearRampToValueAtTime(.12, t + .4); sg.gain.exponentialRampToValueAtTime(.001, t + dur);
    s.connect(sg).connect(master); s.start(t); s.stop(t + dur + .1);
  }
  function pluck(n, t, v = 1) {
    const o = ac.createOscillator(); o.type = 'triangle'; o.frequency.value = mtof(n);
    const o2 = ac.createOscillator(); o2.type = 'sine'; o2.frequency.value = mtof(n + 12);
    const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(3800, t); f.frequency.exponentialRampToValueAtTime(500, t + .4);
    const g = ac.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.09 * v, t + .005); g.gain.exponentialRampToValueAtTime(.0008, t + .9);
    const g2 = ac.createGain(); g2.gain.value = .25;
    o.connect(f); o2.connect(g2).connect(f); f.connect(g); g.connect(master); g.connect(dl);
    o.start(t); o2.start(t); o.stop(t + 1); o2.stop(t + 1);
  }

  // agendador com lookahead — compasso de 5/4 (10 colcheias)
  const PAT = [0, 2, 4, 1, 3, 2, 4, 0, 3, 1];
  let step = 0, next = 0, bar = 0, timer = null, on = false;
  function schedule() {
    while (next < ac.currentTime + .15) {
      const chord = CH[Math.floor(bar / 2) % 4];
      const s = step % 10;
      if (s === 0 && bar % 2 === 0) padChord(chord, next, eighth * 20);
      const skip = (s === 5 && bar % 3 === 1) || (s === 9 && bar % 2);
      if (!skip) pluck(chord[PAT[s]] + 12 + (s === 7 ? 12 : 0), next, s === 0 ? 1 : .7);
      next += eighth * (s % 2 ? .92 : 1.08);   // swing leve
      step++; if (step % 10 === 0) bar++;
    }
  }

  return {
    start() { ac.resume(); if (!on) { on = true; next = ac.currentTime + .1; timer = setInterval(schedule, 40); } master.gain.setTargetAtTime(.8, ac.currentTime, 1.2); padG.gain.setTargetAtTime(1, ac.currentTime, .5); },
    stop() { on = false; clearInterval(timer); master.gain.setTargetAtTime(0, ac.currentTime, .4); },
    get on() { return on; },
    level() { an.getByteTimeDomainData(buf); let s = 0; for (let i = 0; i < buf.length; i++) { const v = (buf[i] - 128) / 128; s += v * v; } return Math.min(1, Math.sqrt(s / buf.length) * 6); },
    /** troca de estação: chiado de rádio */
    tune() {
      const s = ac.createBufferSource(); s.buffer = noiseBuf; const f = ac.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 4;
      const t = ac.currentTime; f.frequency.setValueAtTime(600, t); f.frequency.exponentialRampToValueAtTime(3200, t + .25);
      const g = ac.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.06, t + .02); g.gain.exponentialRampToValueAtTime(.001, t + .35);
      s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + .4);
    },
    /** clique dos círculos (300 / 100 / 50 / erro) */
    hit(kind) {
      const t = ac.currentTime, f = { 300: 1320, 100: 990, 50: 740, 0: 180 }[kind] || 880;
      const o = ac.createOscillator(); o.type = kind ? 'sine' : 'square'; o.frequency.setValueAtTime(f, t); if (!kind) o.frequency.exponentialRampToValueAtTime(90, t + .2);
      const g = ac.createGain(); g.gain.setValueAtTime(.12, t); g.gain.exponentialRampToValueAtTime(.001, t + (kind ? .18 : .25));
      o.connect(g).connect(master); o.start(t); o.stop(t + .3);
      if (kind) { const s = ac.createBufferSource(); s.buffer = noiseBuf; const hp = ac.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 6000; const ng = ac.createGain(); ng.gain.setValueAtTime(.08, t); ng.gain.exponentialRampToValueAtTime(.001, t + .04); s.connect(hp).connect(ng).connect(master); s.start(t); s.stop(t + .05); }
    },
    splash() { const s = ac.createBufferSource(); s.buffer = noiseBuf; const f = ac.createBiquadFilter(); f.type = 'lowpass'; const t = ac.currentTime; f.frequency.setValueAtTime(2400, t); f.frequency.exponentialRampToValueAtTime(200, t + .8); const g = ac.createGain(); g.gain.setValueAtTime(.12, t); g.gain.exponentialRampToValueAtTime(.001, t + .9); s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + 1); },
  };
}
