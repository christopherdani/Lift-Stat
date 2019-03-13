const Exercise = require('../models/sessionExercise');
const Utility = require('../util/utlility')

exports.getSummary = (req, res, next) => {    
    Exercise.fetchAll(sessionData => {
        res.render('sessionSummary', {
            summary : sessionData
        });
    });
}

exports.confirmSession = (req, res, next) => {
    console.log('Session confirmed, deleting duringSession.json');
    Utility.deleteFile(Utility.duringSessionFilePath);
    res.redirect('/');
}