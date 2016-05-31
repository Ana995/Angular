var http=require("http");
var express=require("express");
http.createServer(function(request,response){
 //HTTP status 200 :ok
 response.writeHead(200, {'Content-Type' : 'text/plain'});
 //Send the response  body
 response.end('Hello Ana\n');
}).listen(8080);
//Console print message
console.log("Server running at http://127.0.0.1:8080/");