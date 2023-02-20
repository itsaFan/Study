import fs from "fs/promises";

const buffer = await fs.readFile("NodeJs/basic-nodeJs/file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("NodeJs/basic-nodeJs/tempFile/tempt.txt", "Hello NodeJs");