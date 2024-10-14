var http = require('http');
var fs = require ('fs');

http.createServer(function (req,res){
    fs.readFile('demo.html',function(err,data){
    res.writeHead(200,{'Content-type':'text/plain'});
    r
    res.write(data);
    return res.end();
    });
}).listen(8080);