// route to handle template creations
const express = require('express');
const router = express.Router();
const path = require('path');

const appDir = require('../util/path');

const template = {

};

router.use('/template.html', (req, res, next) => {
    res.sendFile(path.join(appDir + '/views' + '/template.html'));
});

exports.routes = router;
exports.template = template;