import { IncomingMessage } from "http";
import https from "https";

const options = {
  hostname: "eomaloy5e78m1wg.m.pipedream.net",
  port: 443,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept" : "application/json",
  },
}
// const req = https.request(options, IncomingMessage => {
//     Response("data", (data) => {
//         console.info(`Receive data : ${data.toString()}`);
//     })
// })


const dataPerson = JSON.stringify({
    firstName: "itsaFan",
    gender: "male",
  })
  
req.write(dataPerson)
req.end()
