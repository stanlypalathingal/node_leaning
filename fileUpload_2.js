var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


http.createServer(function(req,res) {
    if(req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files) {
        if (err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Error in parsing file');
            return res.end();
        }
        files = files.fileupload[0];

        var oldpath = files.filepath;
        console.log(oldpath)

        var newpath = ("/Users/stanlywilsonsac/Library/CloudStorage/OneDrive-Personal/Programing/node_leaning/"
                        +files.originalFilename);   

        if (!oldpath){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Error in uploading file');
            return res.end();
        }   

        fs.rename(oldpath,newpath,function(err){
            if(err) throw err;
                res.write('File uploaded');
                console.log(newpath);
                res.end();
        });
    });
} else{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action = "fileupload" method= "post" enctype= "multipart/form-data">');
    res.write('<input type = "file" name = "fileupload"><br>');
    res.write('<input type = "submit">');
    res.write('</form>');
    return res.end();
    }
}).listen(8080);