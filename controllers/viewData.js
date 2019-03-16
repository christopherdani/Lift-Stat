const Exercise = require('../models/sessionExercise');
const Utility = require('../util/utlility');
const Pr = require('../models/pr');

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
    var test = new Pr('ayy', '2', '3', '4');
    test.track();
    res.redirect('/');
}