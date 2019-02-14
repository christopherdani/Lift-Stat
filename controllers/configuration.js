const Template = require('../models/template');
const Exercise = require('../models/exercise');

exports.getTemplateView = (req, res, next) => {
    //res.sendFile(path.join(appDir + '/views' + '/template.html'));
    res.render('template');
};

exports.postTemplate = (req, res, next) => {
    var exercises = [];
    var exerciseName = undefined;
    var set = undefined;
    var rep = undefined;
    var flag = 0;
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            if (/exercise.*/.test(key) && req.body[key].length != 0){
                exerciseName = req.body[key];
                flag++;
            }
            else if (/set.*/.test(key) && req.body[key].length != 0){
                set = req.body[key];
                flag++;
            }
            else if (/rep.*/.test(key) && req.body[key].length != 0){
                rep = req.body[key];
                flag++;
            }
            if (flag == 3){
                exercises.push(new Exercise(exerciseName, set, rep));
                flag = 0;
                exerciseName = undefined;
                set = undefined;
                rep = undefined;
            }
        }
    }
    const template = new Template(req.body.name, exercises);
    template.save();
    res.redirect('/lift');
};