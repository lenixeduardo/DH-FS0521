const http = require('http');

http.createServer((req, res) =>  {
	res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("Meu primeiro servidor!")
}).listen(3000,"localhost")