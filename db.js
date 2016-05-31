var dbName = 'testdb';
var encoding = 'base64';

var fs = require('fs');
var nano = require('nano')('http://localhost:5984');

nano.db.create(dbName);
var db = nano.use(dbName);

var attach1 = {
    name: 'image_1',
    data: fs.readFileSync('test_image.jpg').toString(encoding),
    content_type: 'image/jpeg'
};

var attach2 = {
    name: 'image_2',
    data: fs.readFileSync('test_image_2.jpg').toString(encoding),
    content_type: 'image/jpeg'
};

var doc = {
    _id: 'test_id',
    html:  fs.readFileSync('test_html.html').toString()
};

db.multipart.insert(doc, [attach1, attach2], doc._id, function(err){
    if (err)
        console.log('failed: ' + err);
    else
        console.log('succeeded');
});