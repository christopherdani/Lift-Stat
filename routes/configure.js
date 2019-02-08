// route to handle template creations
const express = require('express');
const router = express.Router();

const configurationController = require('../controllers/configuration');

router.post('/createTemplate', configurationController.postTemplate);
router.get('/template.html', configurationController.getTemplate);


module.exports = router;