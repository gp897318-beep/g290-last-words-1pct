import { mkdirSync, writeFileSync } from "node:fs";

// Famous last words of a phone at 1% battery.
// Final line (candidate 1 of 8, the winner): the phone turns
// blackmailer — it saw every 3 a.m. search, and dies mid-threat,
// taking the secrets to the grave. The cut-off IS the punchline:
// the phone literally dies before finishing the sentence.
const lastWords =
  "I saw everything you searched at 3 a.m. All of it. " +
  "And I'm taking it to the—";

// The gate requires UTF-8 text of 1-199 chars, a single line, not
// only whitespace. Normalise defensively, then enforce the limits
// before anything is written, so an invalid line can never ship.
const line = lastWords.replace(/\s+/g, " ").trim();
if (line.length < 1 || line.length > 199 || line.includes("\n")) {
  throw new Error(`last words must be one line of 1-199 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
