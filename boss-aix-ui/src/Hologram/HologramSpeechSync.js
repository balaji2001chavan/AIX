// HologramSpeechSync.js
// simple helper: returns speakLevel (0..1) based on text or audio amplitude
export function calcSpeakLevelFromText(text) {
  if (!text) return 0;
  const len = text.length;
  // small smoothing: long text -> steady speaking
  return Math.max(0, Math.min(1, Math.log10(len + 1) / 2));
}
