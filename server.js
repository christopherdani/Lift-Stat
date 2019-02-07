
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.set('view engine', 'pug');
server.set('views', 'views');

// import routes here
const trainingRoutes = require('./routes/train');
const configureRoutes = require('./routes/configure');
const notFoundRoutes = require('./routes/notfound');

// body parsing
server.use(bodyParser.urlencoded({extended: true}));

// include js and css files in /public/
server.use(express.static(path.join(__dirname, 'public')));

// routes
server.use(configureRoutes);
server.use(trainingRoutes);

// 404 handler
server.use(notFoundRoutes);

server.listen(3000);