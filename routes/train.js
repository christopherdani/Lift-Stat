// route to handle training
// ***MAIN PAGE***
const express = require('express');
const router = express.Router();

// controllers
const trainController = require('../controllers/training');


router.post('/date', trainController.postTrainingDate);

router.get('/lift', trainController.getLift);

// use GET instead of use here, ensures that main page is this exact path.
router.get('/', trainController.getIndex);

module.exports = router;