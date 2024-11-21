let http = require("http")

let PORT = 4000;

http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200,('Content-type': 'text/html'));
        res.write("<h1>home</h1>")
        res.end();
    }else if(req.url === "/producto"){
        res.writeHead(200,('Content-type': 'text/html'));
        res.write("<h1>producto</h1>")
        res.end();
    }else if(req.url === "/contacto"){
        res.writeHead(200,('Content-type': 'text/html'));
        res.write("<h1>contacto</h1>")
        res.end();
    }else{
        res.writeHead(200,('Content-type': 'text/html'));
        res.write("<h1>404</h1>")
        res.write("<p>direccion inexistentes</p>")
        res.end();
    }
})