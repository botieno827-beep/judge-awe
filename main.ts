import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = 'Rain has filled the hollow in a stone. A little moon rests there, whole. Along the garden wall, a snail eases over the moss. The sky fits in the water, and goes on beyond it.';
const output = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(output, { recursive: true, mode: 0o755 });
writeFileSync(join(output, 'entry.txt'), text, { encoding: 'utf8', mode: 0o644 });
