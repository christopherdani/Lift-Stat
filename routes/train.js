// route to handle training
// ***MAIN PAGE***
const express = require('express');
const router = express.Router();
const path = require('path');

const appDir = require('../util/path');

var trainingDate = null;

// POST request for training date.
// For now, use this way of data sharing.
router.post('/date', (req, res, next) => {
    trainingDate = req.body;
    console.log(trainingDate); 
    res.redirect('/');
});

// use GET instead of use here, ensures that main page is this exact path.
router.get('/', (req, res, next) => {
    //res.sendFile(path.join(appDir + '/views' + '/index.html'));
    res.render('index');
});

exports.routes = router;
exports.date = trainingDate;