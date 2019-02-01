// route to handle training
// ***MAIN PAGE***
const express = require('express');
const router = express.Router();
const path = require('path');

const appDir = path.dirname(require.main.filename);

// POST request for training date.
router.post('/date', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// use GET instead of use here, ensures that main page is this exact path.
router.get('/', (req, res, next) => {
    res.sendFile(path.join(appDir + '/index.html'));
});

module.exports = router;