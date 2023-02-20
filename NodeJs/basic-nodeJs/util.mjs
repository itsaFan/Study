import util from "util"

const name = "itsaFan";

console.info(`Hello ${name}`)
console.info(util.format("Hello %s", name));

const person ={
    firstName: "Fan",
    lastName: "Fan"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : $j", person));