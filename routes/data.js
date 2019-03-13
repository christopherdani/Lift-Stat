// route to handle template creations and fetching templates.
const express = require('express');
const router = express.Router();

const viewDataController = require('../controllers/viewData');

router.get('/sessionSummary', viewDataController.getSummary);
router.get('/confirmSession', viewDataController.confirmSession);

module.exports = router;