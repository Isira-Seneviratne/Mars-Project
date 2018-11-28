//This section consists of imports of the various Node modules.
var express = require('express');
var fs = require('fs');
var https = require('https');
var mysql = require('mysql');
var session = require('express-session');

var app = express();

var dbCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "db_SliitInternship"
});

dbCon.connect(function(err)
{
    if(err)
        console.log(err);
    else
        console.log("Connected to the SLIIT internship database.");
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
