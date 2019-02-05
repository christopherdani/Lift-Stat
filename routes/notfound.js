// 404 handler
const express = require('express');
const router = express.Router();
const path = require('path');

const appDir = require('../util/path');

router.use('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(appDir + '/views' + '/notfound.html'));
});

module.exports = router;