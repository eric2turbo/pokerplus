var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// Allows use of body object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.listen(3000);