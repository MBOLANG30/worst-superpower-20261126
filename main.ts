// Worst Superpower — make.fun entry.
// Writes the winning one-liner to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The gate requires 1-140 UTF-8 chars, not only whitespace; the line below is 81.
// writeFileSync writes exactly these bytes — no trailing newline is added,
// so entry.txt holds precisely the 81-character line, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can read minds, but only the minds of goldfish, and only while they are asleep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
