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
    console.log("SLIIT internship server listening at port %s.", server.address().port);
});

/*
 * Gets all internships currently available and sends it to the client as a JSON
 * object.
 */
app.post('/get_all_internships', function(req, res)
{
    mongoClient.connect(url, {useNewUrlParser: true}, function(err, db)
    {
        if (err)
            console.log(err);
        var dbo = db.db(dbName);
        dbo.collection("Internships").find({}).toArray(function(err, result)
        {
            if (err)
            {
                console.log(err);
                res.send("Error while getting all internships");
            }
            else
            {
                console.log("Sent all currently-available internships to client.");
                res.send(result);
            }
        });
    });
});

/*
 * Returns a single student as a JSON object. The contents depend on the student ID.
 */
app.post('/get_student', function(req, res)
{
    var sID = parseInt(req.body.SID);
    console.log('Getting student with SID ' + sID);
    if (!isNaN(sID) && typeof sID == 'number')
    {
        mongoClient.connect(url, {useNewUrlParser: true}, function(err, db)
        {
            if (err)
                console.log(err);
            var dbo = db.db(dbName);
            dbo.collection("Students").find({SID: sID}).toArray(function(err, result)
            {
                if (err)
                    console.log(err);
                else
                    res.send(result);
            });
        });
    }
    else
    {
        res.send("The SID sent is not a number.");
    }
});

/*
 * Adds a multiple-choice question to the database.
 */
app.post('/add_mcq', function(req, res)
{
    var qID = parseInt(req.body.QID);
    var questionName = req.body.quesName;
    var possibleAnswers = req.body.posAnswers;
    var ans = req.body.answer;

    if (!isNaN(qID) && typeof qID == 'number')
    {
        mongoClient.connect(url, {useNewUrlParser: true}, function(err, db)
        {
            if (err)
                console.log(err);
            var dbo = db.db(dbName);
            var obj = { QID: qID, question_name: questionName, possible_answers: possibleAnswers, answer: ans };
            dbo.collection("Multiple_Choice_Questions").insertOne(obj, function(err, res)
            {
                if (err)
                {
                    console.log(err);
                    res.send("Error while inserting MCQ");
                }
                else
                {
                    console.log("Inserted MCQ.");
                    res.send("Inserted MCQ");
                }
            });
        });
    }
    else
    {
        res.send("The QID sent is not a number. Question not inserted.");
    }
});

/*
 * Adds a short answer question to the database.
 */
app.post('/add_saq', function(req, res)
{
    var qID = parseInt(req.body.QID);
    var questionName = req.body.quesName;
    var ans = req.body.answer;

    if (!isNaN(qID) && typeof qID == 'number')
    {
        mongoClient.connect(url, {useNewUrlParser: true}, function(err, db)
        {
            if (err)
                console.log(err);
            var dbo = db.db(dbName);
            var obj = { QID: qID, question_name: questionName, answer: ans };
            dbo.collection("Short_Answer_Questions").insertOne(obj, function(err, res)
            {
                if (err)
                {
                    console.log(err);
                    res.send("Error while inserting SAQ");
                }
                else
                {
                    console.log("Inserted SAQ.");
                    res.send("Inserted SAQ");
                }
            });
        });
    }
    else
    {
        res.send("The QID sent is not a number. Question not inserted.");
    }
});

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
