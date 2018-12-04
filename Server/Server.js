//This section consists of imports of the various Node modules.
var express = require('express');
var fs = require('fs');
var https = require('https');
var mongodb = require('mongodb');
var session = require('express-session');

var app = express();

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, {useNewUrlParser: true}, function(err, db)
{
    if(err)
        throw err;
    //var dbo = db.db("db_SliitInternship");
    console.log("Database created!");
    db.close();
});

var server = app.listen(8080, function()
{
    console.log("SLIIT internship server listening at port %s.", server.address().port);
});

// The section below contains code for setting up a server that uses HTTPS.
/*
const options = {
    key: fs.readFileSync('encryption/key.pem'),
    cert: fs.readFileSync('encryption/cert.pem')
};

https.createServer(options, function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(8080);
*/
