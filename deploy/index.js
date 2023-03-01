const http = require('http');
const server = http.createServer((res,req) =>{
    res.writehead(200,{"content-type":"text/plain"});
    res.end("hello world");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("Server listening on port"));