import { readFileSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const RANGE_ONLY = process.argv.includes('--range-only');

const DATA_FILES = ['src/data/timeline.ts', 'src/data/skills.ts'];

const TEMPLATE_FILES = [
  'src/pages/index.astro',
  'src/pages/about.astro',
  'src/pages/404.astro',
  'src/components/HeaderComponent.astro',
  'src/components/TimelineComponent.astro',
  'src/components/SkillCardComponent.astro',
  'src/components/ScrollArrowComponent.astro',
  'src/components/AnchorComponent.astro',
  'src/layouts/Layout.astro',
];

const chars = new Set();

function addChars(text) {
  for (const ch of text) {
    const cp = ch.codePointAt(0);
    if (cp >= 0x20 && cp !== 0x7F) chars.add(ch);
  }
}

for (const rel of DATA_FILES) {
  const content = readFileSync(join(ROOT, rel), 'utf8');
  for (const [, str] of content.matchAll(/['"`]([\s\S]*?)['"`]/g)) addChars(str);
}

for (const rel of TEMPLATE_FILES) {
  const content = readFileSync(join(ROOT, rel), 'utf8');
  for (const [, str] of content.matchAll(/>([^<>{]+)</g)) addChars(str.trim());
  for (const [, str] of content.matchAll(/['"]([^'"]{2,})['"]/g)) addChars(str);
}

const allCps = [...chars].map(c => c.codePointAt(0)).sort((a, b) => a - b);
const ranges = [];
let start = allCps[0], end = allCps[0];
for (let i = 1; i < allCps.length; i++) {
  if (allCps[i] <= end + 2) {
    end = allCps[i];
  } else {
    ranges.push(start === end
      ? `U+${start.toString(16).toUpperCase().padStart(4, '0')}`
      : `U+${start.toString(16).toUpperCase().padStart(4, '0')}-${end.toString(16).toUpperCase().padStart(4, '0')}`);
    start = end = allCps[i];
  }
}
ranges.push(start === end
  ? `U+${start.toString(16).toUpperCase().padStart(4, '0')}`
  : `U+${start.toString(16).toUpperCase().padStart(4, '0')}-${end.toString(16).toUpperCase().padStart(4, '0')}`);

const rangeStr = ranges.join(',');

if (RANGE_ONLY) {
  process.stdout.write(rangeStr + '\n');
} else {
  const ascii = [...chars].filter(c => c.codePointAt(0) <= 0x7E).sort();
  const nonAscii = [...chars].filter(c => c.codePointAt(0) > 0x7E).sort((a, b) => a.codePointAt(0) - b.codePointAt(0));

  console.log('\n=== ASCII printable chars found ===');
  console.log(ascii.join(''));
  console.log('\n=== Non-ASCII chars found ===');
  if (nonAscii.length === 0) {
    console.log('(none)');
  } else {
    for (const c of nonAscii) {
      console.log(`  U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}  ${c}  (${c.codePointAt(0)})`);
    }
  }
  console.log('\n=== Unicode range ===');
  console.log(rangeStr);
  console.log(`\nTotal: ${chars.size} unique chars`);
}
