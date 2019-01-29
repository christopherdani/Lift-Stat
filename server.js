
//const routes = require('./routes');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// body parsing
server.use(bodyParser.urlencoded({extended: true}));

// include js and css files in /public/
server.use(express.static(path.join(__dirname, 'public')));

server.use('/template.html', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/template.html'));
});

server.use('/date', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

server.use((req, res, next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(3000);