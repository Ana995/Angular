var express = require('express');
var app = express();
const PORT = 9998;
var nano = require('nano')('http://localhost:5984');
var db_name = "books";


app.use(express.static('./'));
app.use

app.get("/product",function( req,res){
   var products="getproduct.js"; 
});
app.get("/", function (req, res) {
     res.sendFile(__dirname + "/" + "index.html");
     req.insert_doc= function(doc, tried) {
         db.insert(doc,
             function (error, http_body, http_headers) {
                 if (error) {
                     if (error.message === 'no_db_file' && tried < 1) {
                         // create database
                         return nano.db.create(db_name, function () {
                             insert_doc(doc, tried + 1);
                         });
                     }
                     else {
                         return console.log(error);
                     }
                 }
                 console.log(http_body);
             });
     }
    });


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});