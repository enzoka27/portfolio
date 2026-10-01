// ============ som — VIGIA: zumbido de fluorescente, concreto, servo, obturador ============
// Tudo WebAudio, nenhum arquivo.

export function createSound() {
  const ac = new (window.AudioContext || window.webkitAudioContext)();
  const master = ac.createGain(); master.gain.value = 0;
  const comp = ac.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 4;
  master.connect(comp).connect(ac.destination);

  // reverb de salão de concreto: impulso gerado (ruído com decaimento longo, sem agudos)
  const verb = ac.createConvolver();
  const len = ac.sampleRate * 3.6, ir = ac.createBuffer(2, len, ac.sampleRate);
  for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); let lp = 0; for (let i = 0; i < len; i++) { lp += ((Math.random() * 2 - 1) - lp) * .35; d[i] = lp * Math.pow(1 - i / len, 2.6) * (i < 400 ? i / 400 : 1); } }
  verb.buffer = ir;
  const wet = ac.createGain(); wet.gain.value = .55; verb.connect(wet).connect(master);
  const send = node => { node.connect(master); node.connect(verb); };

  const noiseBuf = (() => { const b = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return b; })();
  const noise = () => { const s = ac.createBufferSource(); s.buffer = noiseBuf; s.loop = true; return s; };

  /* zumbido de lâmpada fluorescente: 120 Hz + harmônicos + estalinhos */
  const humG = ac.createGain(); humG.gain.value = 0; send(humG);
  const hum = ac.createOscillator(); hum.type = 'sawtooth'; hum.frequency.value = 120;
  const humF = ac.createBiquadFilter(); humF.type = 'bandpass'; humF.frequency.value = 480; humF.Q.value = 3;
  const hum2 = ac.createOscillator(); hum2.frequency.value = 60; const h2g = ac.createGain(); h2g.gain.value = .5;
  hum.connect(humF).connect(humG); hum2.connect(h2g).connect(humG);

  /* drone grave do prédio: duas senoides que batem + vento filtrado */
  const droneG = ac.createGain(); droneG.gain.value = 0; send(droneG);
  [41.2, 41.9, 61.7].forEach((f, i) => { const o = ac.createOscillator(); o.frequency.value = f; const g = ac.createGain(); g.gain.value = i === 2 ? .25 : .5; o.connect(g).connect(droneG); o.start(); });
  const wind = noise(), windF = ac.createBiquadFilter(); windF.type = 'lowpass'; windF.frequency.value = 300; windF.Q.value = 2;
  const windG = ac.createGain(); windG.gain.value = .3; wind.connect(windF).connect(windG).connect(droneG); wind.start();
  const lfo = ac.createOscillator(); lfo.frequency.value = .07; const lfoG = ac.createGain(); lfoG.gain.value = 180; lfo.connect(lfoG).connect(windF.frequency); lfo.start();

  /* servo das câmeras: ruído com ressonância metálica, volume = velocidade de giro */
  const servoG = ac.createGain(); servoG.gain.value = 0; send(servoG);
  const sv = noise(), svF = ac.createBiquadFilter(); svF.type = 'bandpass'; svF.frequency.value = 2400; svF.Q.value = 9;
  const svO = ac.createOscillator(); svO.type = 'square'; svO.frequency.value = 95; const svOg = ac.createGain(); svOg.gain.value = .06;
  sv.connect(svF).connect(servoG); svO.connect(svOg).connect(servoG); sv.start(); svO.start();

  /* ronco da laje descendo */
  const rumbleG = ac.createGain(); rumbleG.gain.value = 0; send(rumbleG);
  const rb = noise(), rbF = ac.createBiquadFilter(); rbF.type = 'lowpass'; rbF.frequency.value = 110;
  const rbO = ac.createOscillator(); rbO.frequency.value = 34; const rbOg = ac.createGain(); rbOg.gain.value = .8;
  rb.connect(rbF).connect(rumbleG); rbO.connect(rbOg).connect(rumbleG); rb.start(); rbO.start();
  hum.start(); hum2.start();

  const env = (g, a, peak, d, t = ac.currentTime) => { g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + d); };
  const burst = ({ type = 'highpass', f = 3000, q = 1, peak = .4, a = .002, d = .08, dry = true } = {}) => {
    const s = ac.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = .8 + Math.random() * .4;
    const fl = ac.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
    const g = ac.createGain(); env(g, a, peak, d);
    s.connect(fl).connect(g); dry ? send(g) : g.connect(verb);
    s.start(); s.stop(ac.currentTime + a + d + .05);
  };
  const ping = (f, peak = .15, d = .5, type = 'sine') => {
    const o = ac.createOscillator(); o.type = type; o.frequency.value = f; const g = ac.createGain(); env(g, .003, peak, d);
    o.connect(g); send(g); o.start(); o.stop(ac.currentTime + d + .1);
  };

  let on = false;
  return {
    start() { ac.resume(); on = true; master.gain.setTargetAtTime(.85, ac.currentTime, .8); },
    stop() { on = false; master.gain.setTargetAtTime(0, ac.currentTime, .3); },
    get on() { return on; },
    /** níveis contínuos — chamados todo quadro */
    set({ hum: h = 0, drone: dr = .6, servo = 0, rumble = 0, flicker = 0 }) {
      const t = ac.currentTime;
      humG.gain.setTargetAtTime(h * (.05 + flicker * .08) * (Math.random() < flicker * .3 ? 0 : 1), t, .03);
      droneG.gain.setTargetAtTime(dr * .35, t, .4);
      servoG.gain.setTargetAtTime(Math.min(.22, servo * .05), t, .05);
      svF.frequency.setTargetAtTime(1800 + servo * 600, t, .1);
      rumbleG.gain.setTargetAtTime(rumble * .9, t, .15);
      rbF.frequency.setTargetAtTime(80 + rumble * 160, t, .2);
    },
    shutter() { burst({ f: 4000, peak: .35, d: .03 }); setTimeout(() => burst({ f: 2500, peak: .25, d: .05 }), 70); },
    beep() { ping(1760, .06, .12, 'square'); },
    blind() { burst({ f: 5000, peak: .5, d: .25 }); [2637, 3520, 4186, 3136].forEach((f, i) => setTimeout(() => ping(f * (0.97 + Math.random() * .06), .07, .4), i * 35)); ping(110, .2, .3, 'triangle'); },
    clack() { burst({ type: 'bandpass', f: 900 + Math.random() * 400, q: 3, peak: .35, d: .09 }); ping(180 + Math.random() * 40, .12, .12, 'triangle'); },
    stamp() { burst({ type: 'lowpass', f: 600, peak: .6, d: .18 }); ping(70, .4, .4); },
    crumble() {
      for (let i = 0; i < 40; i++) setTimeout(() => burst({ type: 'bandpass', f: 300 + Math.random() * 2500, q: 2, peak: .15 + Math.random() * .25, d: .05 + Math.random() * .2 }), i * 60 + Math.random() * 80);
      const s = ac.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
      const fl = ac.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.setValueAtTime(3000, ac.currentTime); fl.frequency.exponentialRampToValueAtTime(60, ac.currentTime + 5);
      const g = ac.createGain(); g.gain.setValueAtTime(.5, ac.currentTime); g.gain.exponentialRampToValueAtTime(.001, ac.currentTime + 6);
      s.connect(fl).connect(g); send(g); s.start(); s.stop(ac.currentTime + 6.2);
      ping(41, .5, 4);
    },
  };
}
