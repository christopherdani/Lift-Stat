const Exercise = require('../models/sessionExercise');

exports.getSummary = (req, res, next) => {
    Exercise.fetchAll(sessionData => {
        res.render('sessionSummary', {
            summary : sessionData
        });
    });
}