// route to handle template creations and fetching templates.
const express = require('express');
const router = express.Router();

const configurationController = require('../controllers/configuration');

router.post('/createTemplate', configurationController.postTemplate);
router.get('/template', configurationController.getTemplateView);
router.post('/getTemplateContents', configurationController.getTemplateContents);


module.exports = router;