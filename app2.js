/**
 * Created by V3790154 on 5/31/2016.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "test.html");
    console.log('test button pressed!');
    ///res.send(200,'HElllo')
});

app.listen(3333);