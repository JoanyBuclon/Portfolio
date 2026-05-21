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

export function drawLetters(canvas: HTMLCanvasElement, fontFamily: string): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;

  const fontSize = Math.round(Math.max(20, Math.min(32, w * 0.022)));
  ctx.font = `800 italic ${fontSize}px ${fontFamily}`;
  ctx.textBaseline = 'top';

  const charWidth = ctx.measureText('M').width + fontSize * 0.08;
  const rowHeight = fontSize * 1.15;

  const cols = Math.ceil(w / charWidth) + 1;
  const rows = Math.ceil(h / rowHeight) + 1;

  const offsetX = Math.random() * 1000;
  const offsetY = Math.random() * 1000;

  ctx.clearRect(0, 0, w, h);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const n = fbm(col / SCALE + offsetX, row / SCALE + offsetY);
      const g = Math.round(DARK + (LIGHT - DARK) * n);
      const hex = g.toString(16).padStart(2, '0');
      ctx.fillStyle = `#${hex}${hex}${hex}`;
      const ch = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      ctx.fillText(ch, col * charWidth, row * rowHeight);
    }
  }
}
