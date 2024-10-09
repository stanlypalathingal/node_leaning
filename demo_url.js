var http = require('http');
var dt = require('./telltime.js');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write(req.url); // this will print the url in the browser
    res.end("\n\nhello world");
}).listen(8080);