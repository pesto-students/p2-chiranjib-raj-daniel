var http = require('http')

http.createServer(function(req,res){
    res.write('<h1>Simple node JS server<h1>');
    res.end();
}).listen(3000, function(){
    console.log("server serving at port 3000")
})