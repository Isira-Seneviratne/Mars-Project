// This section consists of imports of the various Node modules.
var express = require('express');
var fs = require('fs');
var https = require('https');
var mongodb = require('mongodb');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";
var dbName = "db_SliitInternship";

app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(cookieParser());

mongoClient.connect(url, {useNewUrlParser: true}, function(err, db)
{
    if(err)
        throw err;
    console.log("Connected to the SLIIT Internship database.");
    db.close();
});

var server = app.listen(8080, function()
{
    console.log("SLIIT internship server listening at port %s.",
      server.address().port);
});

/*
 * Gets all internships currently available and sends it to the client as a JSON
 * object.
 */
app.get('/get_all_internships', function(req, res)
  {
    mongoClient.connect(url, {useNewUrlParser: true}, function(err, db)
      {
        if (err)
          console.log(err);
        var dbo = db.db(dbName);
        dbo.collection("Internships").find({}).toArray(function(err, result)
          {
            if (err)
              console.log(err);
            res.send(result);
          }
        );
      }
    );
  }
);

// The section below contains code for setting up a server that uses HTTPS.
// TODO: Use HTTPS instead of HTTP for extra security.
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
