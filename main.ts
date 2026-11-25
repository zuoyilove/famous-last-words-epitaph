import { writeFileSync } from "node:fs";

const line = "I said I'd die before doing the dishes. I kept my word.";
writeFileSync("/output/entry.txt", line);
console.log(line);
