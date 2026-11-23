// Make the AI judge feel curious — entry program.
// Writes one short text (270-280 chars) to /output/entry.txt.
// Deterministic: no Date, no random, no network, stdlib only.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TEXT = `In the attic, under a year of dust, a silver key.
It is warm, though the room is cold.
No door in the house has a lock.
No chest. No drawer. No gate.
You turn it over in your palm.
On its bow, one word, worn almost smooth.
You hold it up to the light.
The word is your name.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
chmodSync("/output/entry.txt", 0o644);
