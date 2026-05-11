const TOTAL = 7000;
const COLS = 120;
const SCALE = 8;
const OCTAVES = 3;
const LIGHT = 130;
const DARK = 10;
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function hash(x: number, y: number): number {
  const h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return h - Math.floor(h);
}
function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
function noise(x: number, y: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const v00 = hash(xi, yi);
  const v10 = hash(xi + 1, yi);
  const v01 = hash(xi, yi + 1);
  const v11 = hash(xi + 1, yi + 1);
  const u = fade(xf);
  const v = fade(yf);
  return lerp(lerp(v00, v10, u), lerp(v01, v11, u), v);
}
function fbm(x: number, y: number): number {
  let total = 0;
  let amp = 1;
  let freq = 1;
  let max = 0;
  for (let i = 0; i < OCTAVES; i++) {
    total += noise(x * freq, y * freq) * amp;
    max += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return total / max;
}
function toHex(n: number): string {
  return n.toString(16).padStart(2, '0');
}

export function generateLettersHtml(): string {
  const offsetX = Math.random() * 1000;
  const offsetY = Math.random() * 1000;
  let html = '';
  for (let i = 0; i < TOTAL; i++) {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const n = fbm(col / SCALE + offsetX, row / SCALE + offsetY);
    const g = Math.round(DARK + (LIGHT - DARK) * n);
    const c = toHex(g);
    const ch = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    html += `<span style="color:#${c}${c}${c}">${ch}</span>`;
  }
  return html;
}
