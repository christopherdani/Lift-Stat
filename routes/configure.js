// route to handle template creations
const express = require('express');
const router = express.Router();
const path = require('path');

const appDir = path.dirname(require.main.filename);

router.use('/template.html', (req, res, next) => {
    res.sendFile(path.join(appDir + '/template.html'));
});

module.exports = router;