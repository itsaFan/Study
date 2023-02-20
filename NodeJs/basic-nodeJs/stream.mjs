import fs from "fs";


//nulis data
const writer = fs.createWriteStream("NodeJs/basic-nodeJs/tempFile/stream.log");

writer.write("itsaFan\n");
writer.write("Test");
writer.end();

//read data
const reader = fs.createReadStream("NodeJs/basic-nodeJs/tempFile/stream.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});