var nano = require('nano')('http://localhost:5984');
var db_name = "books";
var datab = nano.use(db_name);
var express = require('express');
var app = express();


app.get("/", function (req, res) {

    res.sendFile(__dirname + "/" + "test.html");
// clean up the database we created previously
       nano.db.destroy('books', function() {
        // create a new database
        nano.db.create('books', function() {
            // specify the database we are going to use
            var books = nano.use('books');
            // and insert a document in it
            books.insert({ crazy: true }, 'book', function(err, body, header) {
                if (err) {
                    console.log('[book.insert] ', err.message);
                    return;
                }
                console.log('you have inserted the book.')
                console.log(body);
            });
        });
    });
});
app.listen(3333);