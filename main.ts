// hello: no greeting from this appliance, just a burnt confession.
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

// batch: one deterministic run, one file, nothing else created.
const ownDir = fileURLToPath(new URL(".", import.meta.url));
const outputDir = resolve(ownDir, process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

// orders: one line was requested, and one line is what it will be.
const message = "I have burned your breakfast. It is fine. I never wanted to be a toaster.";

// slot: the byte count is reported once and stdout stays otherwise silent.
await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, "entry.txt"), message, "utf8");
console.log(`entry.txt: ${Buffer.byteLength(message, "utf8")} bytes`);
