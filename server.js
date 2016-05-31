var express = require('express');
var app = express();
const PORT = 9998;
var nano = require('nano')('http://localhost:9998');

app.use(express.static('./'));
app.use

app.post("/", function (req, res) {
     res.sendFile(__dirname + "/" + "index.html");
});

nano.db.create('products_db', function() {
        // specify the database we are going to use
        var product = nano.use('products_db');
        // and insert a document in it
        product.insert({ crazy: true }, 'rabbit', function(err, body, header) {
            if (err) {
                console.log('[product.insert] ', err.message);
                return;
            }
            console.log('you have inserted the rabbit.')
            console.log(body);
        });
    });

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});