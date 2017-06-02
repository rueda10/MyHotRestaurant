//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var tablejs = require('./tables.js');

//Express app
var app = express();
var PORT = 3000;

//Middleware bodyparser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

//Routing
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
    res.json(tables);
});
app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});
app.get('/api/tables', function(req, res) {
    var tables = tablejs(req.body);
    console.log(tables);
    res.json(tables);
});

//Requests
app.post('/api/tables', function(req, res) {
    var tables = tablejs(req.body);
    console.log(tables);
    res.json(tables);
});

//Start server
app.listen(PORT, function() {
    console.log('Listening to PORT ' + PORT);
})
