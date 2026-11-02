// Procedural Web Audio API sound designer for futuristic UI feedback
let audioCtx = null;
let ambientGain = null;
let ambientOsc1 = null;
let ambientOsc2 = null;
let isAudioEnabled = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleAudio() {
  isAudioEnabled = !isAudioEnabled;
  const ctx = getAudioContext();
  if (!ctx) return false;

  if (isAudioEnabled) {
    startAmbientDrone();
    playChime(660, 880);
  } else {
    stopAmbientDrone();
  }
  return isAudioEnabled;
}

export function getAudioState() {
  return isAudioEnabled;
}

export function playClickSound() {
  if (!isAudioEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, now);
  osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);

  gain.gain.setValueAtTime(0.04, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.06);
}

export function playHoverSound() {
  if (!isAudioEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(440, now);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1200, now);

  gain.gain.setValueAtTime(0.015, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.05);
}

export function playChime(f1 = 523.25, f2 = 783.99) {
  if (!isAudioEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  [f1, f2].forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.06);

    gain.gain.setValueAtTime(0.03, now + idx * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.06);
    osc.stop(now + idx * 0.06 + 0.38);
  });
}

function startAmbientDrone() {
  const ctx = getAudioContext();
  if (!ctx || ambientGain) return;

  try {
    ambientGain = ctx.createGain();
    ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
    ambientGain.gain.linearRampToValueAtTime(0.012, ctx.currentTime + 2);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, ctx.currentTime);

    ambientOsc1 = ctx.createOscillator();
    ambientOsc1.type = 'sawtooth';
    ambientOsc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note

    ambientOsc2 = ctx.createOscillator();
    ambientOsc2.type = 'sine';
    ambientOsc2.frequency.setValueAtTime(110, ctx.currentTime); // A2 note

    ambientOsc1.connect(filter);
    ambientOsc2.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ctx.destination);

    ambientOsc1.start();
    ambientOsc2.start();
  } catch {
    // Audio autostart guard
  }
}

function stopAmbientDrone() {
  if (ambientGain && audioCtx) {
    try {
      ambientGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        if (ambientOsc1) ambientOsc1.stop();
        if (ambientOsc2) ambientOsc2.stop();
        ambientOsc1 = null;
        ambientOsc2 = null;
        ambientGain = null;
      }, 500);
    } catch {
      ambientGain = null;
    }
  }
}
