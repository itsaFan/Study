import cluster from "cluster";
import os from "os";
import http from "http";

//to know if each is two different process
import process from "process";


if(cluster.isPrimary){
    console.info(`this is primary : ${process.pid}`);
    //to make the worker run based on our CPU logical cores
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    //to know which of the workers exit
    cluster.addListener("exit", (worker) => {
        console.info(`Worker - ${worker.id} is exit`)
        //create new worker if any worker exit to repalce them
        cluster.fork();
    })
    // cluster.fork();
    // cluster.fork();
}

if(cluster.isWorker) {
    console.info(`this is worker : ${process.pid}`);

    const server = http.createServer((request, response) => {
        response.write(`Worker, response from process ${process.pid}`);
        response.end();
        process.exit();
    })

    server.listen(3242);

}