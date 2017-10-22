var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    app.use(express.static((__dirname, '/../Final')));
});

app.listen(8000);