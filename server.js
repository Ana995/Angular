var express = require('express');
var app = express();
const PORT = 9998;

app.use(express.static('./'));
app.use

app.get("/", function (req, res) {
     res.sendFile(__dirname + "/" + "index.html");
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});