// Controllers dealing with training.

var trainingDate = 'placeholder';

const Template = require('../models/template');
const ExerciseDetail = require('../models/sessionExerciseDetail');
const Exercise = require('../models/sessionExercise');
const Session = require('../models/session');

exports.getIndex = (req, res, next) => {
    //res.sendFile(path.join(appDir + '/views' + '/index.html'));
    res.render('index');
};

// POST request for training date.
// For now, use this way of data sharing. Will use a DB later on.
exports.postTrainingDate = (req, res, next) => {
    trainingDate = req.body.trainDate;
    if (trainingDate == ''){
        trainingDate = 'placeholder';
    }
    res.redirect('/lift');
};

exports.getLift = (req, res, next) => {
    Template.fetchAll(templates => {
        res.render('lift', {
            date : trainingDate,
            temp : templates,
            hasTemp : templates.length > 0
        });
    });
};

exports.postSet = (req, res, next) => {
    var exerciseDetail = new ExerciseDetail(req.body.set, req.body.weight, req.body.rep);
    var exercise = new Exercise(req.body.exerciseName, exerciseDetail);
    exercise.save();

}

