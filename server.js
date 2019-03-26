
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.set('view engine', 'pug');
server.set('views', 'views');

// import routes here
const trainingRoutes = require('./routes/train');
const configureRoutes = require('./routes/configure');
const viewDataRoutes = require('./routes/data');
const notFoundRoutes = require('./routes/notfound');

// db stuff
const mongoConnect = require('./util/database');

// body parsing
server.use(bodyParser.urlencoded({extended: true}));

// include js and css files in /public/
server.use(express.static(path.join(__dirname, 'public')));

// routes
server.use(configureRoutes);
server.use(trainingRoutes);
server.use(viewDataRoutes);

// 404 handler
server.use(notFoundRoutes);

mongoConnect((client) => {
    console.log('Listening at port 3000');
    console.log(client);
    server.listen(3000);
})

