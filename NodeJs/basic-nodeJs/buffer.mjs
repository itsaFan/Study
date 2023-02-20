const buffer = Buffer.from("It a Fan");

console.info(buffer)
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());

//Buffer encoding

const bufferEncoding = Buffer.from("it sa Fan", "utf8");

console.info(bufferEncoding.toString());
console.info(bufferEncoding.toString("hex"));