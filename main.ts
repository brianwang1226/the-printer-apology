import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology an office printer gives after a bad morning:
// it ate the one document that mattered, printed dozens of copies
// of the wrong page, jammed on the next, and reports back with
// deadpan machine cheer — while the meeting it was printing for
// ended on Tuesday and nobody told it.
const line =
  "Sorry I ate your boarding pass, printed 47 copies of page 1, and jammed on page 2. The meeting ended Tuesday.";

// The gate only accepts one line of 1-120 characters; fail loudly
// instead of submitting a line the judge will never read.
if (line.length < 1 || line.length > 120) {
  throw new Error(`entry line is ${line.length} characters, must be 1-120`);
}
if (line.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
