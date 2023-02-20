import net from "net";

const client = net.createConnection( {
    port: 5252, host: "localhost"
});

client.addListener("data", (data) => {
    console.info(`Receive data from server : ${data.toString()}`)
});

setInterval( () => {
    client.write(`${process.argv[2]}\r\n`); //input name 
}, 2000);