import {Console} from "console";
import fs from "fs";

const file = fs.createWriteStream("tempFile/app.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello World");
log.error("Hello xD");

const person = {
    name : "itsaFan",
    gender : "Male",
};

log.table(person);
