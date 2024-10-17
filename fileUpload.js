var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action = "fileupload" method = "post" encrpte = "multipart/form-data">');
    res.write('<input type = "file" name = "filetoupload"><br>');
    res.write('<input type = "submit">');
    req.swrite('</form>');
    return res.end();
})