import os from "os";
import path from "path";
import dns from "dns/promises";

//OS
console.table(os.cpus());
console.table(os.networkInterfaces());
console.info(os.platform());
console.info(os.arch());
console.info(os.totalmem());
console.info(os.hostname());

//path - hanya digunakan untuk meng-ekstrak informasi yang berhubungan dengan sebuah lokasi file.
const file = "/Users/test/test.txt";

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));


const ipAddress = await dns.lookup("www.youtube.com");

console.info(ipAddress.address);
console.info(ipAddress.family);