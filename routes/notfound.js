// 404 handler
const express = require('express');
const router = express.Router();
const path = require('path');

const appDir = path.dirname(require.main.filename);

router.use('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(appDir + '/notfound.html'));
});

module.exports = router;