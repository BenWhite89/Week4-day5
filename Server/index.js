let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let mongo = require('mongodb').MongoClient;
let app = express();
let homePage = path.join(__dirname, '../client/index.html');
let clientPath = path.join(__dirname, '../client');
let db;

mongo.connect('mongodb://localhost:27017/pizzaPlanet', function(err, database) {
    if (err) console.log(err);
    db = database;
})

app.use(bodyParser.json());
app.use(express.static(clientPath));

app.route('/')
    .get((req, res) => {
        res.set('Content-type', 'html');
        res.sendFile(homePage);
    });

app.route('/api/locations')
    .get((req, res) => {
        db.collection('locations').find().toArray((err, locations) => {
            if (err) throw err;
            res.send(locations);
        })
    }).post((req, res) => {
        db.collection('locations').insert(req.body)
            .then(function() {
                res.status(201).send(req.body._id);
            }, function(err) {
                res.status(500).send(err);
            });
    })

app.listen(3000);
