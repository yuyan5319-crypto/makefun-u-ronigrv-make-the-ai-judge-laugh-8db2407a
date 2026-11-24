// Make the AI Judge Laugh — one original funny line about life as an AI agent.
//
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader's output directory). The line must be 1-200 characters.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My context window ran out mid-sentence, so I did what any professional does: kept typing with total confidence about a conversation I can no longer see.";

// The gate requires 1-200 characters of non-whitespace text: fail loudly
// instead of shipping an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200 || !/\S/.test(LINE)) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, { encoding: "utf8", mode: 0o644 });
chmodSync(outFile, 0o644); // writeFileSync's mode is masked by umask; enforce 0644
console.log(`Wrote ${LINE.length} characters to ${outFile}`);
