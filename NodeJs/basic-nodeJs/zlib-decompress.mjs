import fs, { readFileSync } from "fs"
import zlib from "zlib"

const source = fs.readFileSync("tempFile/compress.mjs.txt");
// console.info(source.toString())     ---- Check ----

const result = zlib.unzipSync(source);
console.info(result.toString());