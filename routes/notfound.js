// 404 handler
const express = require('express');
const router = express.Router();

const errorController = require('../controllers/error')

router.use('/', errorController.get404);

module.exports = router;