import timers from "timers/promises";

// console.info(new Date());
// const name = await timers.setTimeout(5000, "Fanfan");
// console.info(new Date());
// console.info(name);


for await (const startTime of timers.setInterval(1000, new Date())) {
    console.info(`Start time at ${startTime}`);
}