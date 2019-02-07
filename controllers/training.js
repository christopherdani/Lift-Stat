// Controllers dealing with training.

var trainingDate = null;

exports.getIndex = (req, res, next) => {
    //res.sendFile(path.join(appDir + '/views' + '/index.html'));
    res.render('index');
};

// POST request for training date.
// For now, use this way of data sharing. Will use a DB later on.
exports.postTrainingDate = (req, res, next) => {
    trainingDate = req.body.trainDate;
    res.redirect('/lift');
};

exports.getLift = (req, res, next) => {
    res.render('lift', {date : trainingDate});
};