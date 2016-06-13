var express = require('express');
var app = express();
const PORT = 9998;
var nano = require('nano')('http://localhost:5984');
var db_name = "books";


app.use(express.static('./'));
app.use

app.get("/", function (req, res) {
     res.sendFile(__dirname + "/" + "hello.html");

    });


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});