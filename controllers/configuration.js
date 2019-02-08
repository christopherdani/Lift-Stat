const Template = require('../models/template');

exports.getTemplate = (req, res, next) => {
    //res.sendFile(path.join(appDir + '/views' + '/template.html'));
    res.render('template');
};

exports.postTemplate = (req, res, next) => {
    const template = new Template(req.body.name);
    template.save();
    console.log(req.body.name);
    res.redirect('/lift');
}