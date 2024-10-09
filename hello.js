var http = require('http');
var dt = require('./telltime.js');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write(" the date and time are :"+dt.mydatetime());
    res.end("\n\nhello world");
}).listen(8080);