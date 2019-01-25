
//const routes = require('./routes');
const path = require('path');
const express = require('express');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.use('/template', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/template.html'));
});

// accepts array of request handlers
server.use((req, res, next) => {
    
    // next() allows request to continue to the next middleware in line
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(3000);
/*
const http = require('http');
const routes = require('./routes');

http.createServer(routes.handleReq).listen(3000);
*/