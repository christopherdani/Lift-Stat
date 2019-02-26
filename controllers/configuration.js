const Template = require('../models/template');
const Exercise = require('../models/exercise');

exports.getTemplateView = (req, res, next) => {
    //res.sendFile(path.join(appDir + '/views' + '/template.html'));
    res.render('template');
};

// Save the submitted template
exports.postTemplate = (req, res, next) => {
    var exercises = [];
    var exerciseName = undefined;
    var set = undefined;
    var rep = undefined;
    var flag = 0;
    for (var key in req.body) {
        // Ensure that req.body has the property
        if (req.body.hasOwnProperty(key)) {
            // test() checks if the string matches with the pattern supplied
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
            // Only push to the array if we have all 3 flags flipped (ensure that all 3 fields are present.)
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

exports.getTemplateContents = (req, res, next) => {
    Template.fetchContent(req.body.pickedTemplate, temp => {
        res.render('session',{
            template : temp
        });
    });
}