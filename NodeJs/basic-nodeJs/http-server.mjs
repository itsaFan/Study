import http from "http";


const server = http.createServer((request, response) =>{
    console.info(request.method);
    console.info(request.url);
    // console.table(request.headers);

//test with postman API
    if(request.method == "POST"){
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        })
    } else {
        if(request.url == "/itsaFan"){
            response.write("Hello from Itsafan")
        } else {
            response.write("Hello from HTTP Server");
        }
        response.end();
    }

    // if(request.url == "/itsaFan"){
    //     response.write("Hello from itsaFan")
    // } else {
    //     response.write("Hello from HTTP Server");
    // }
    // response.end();
});

server.listen(4242);