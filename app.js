const http = require("http");

const hostname = "127.0.0.1";
const port = 4000;


const Serve = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");

    res.end("Hello, World!\n");
});



Serve.listen(port, hostname,() => {
    console.log (`server running at http://${hostname}:${port}/`);
});