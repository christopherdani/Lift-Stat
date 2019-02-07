exports.getTemplate = (req, res, next) => {
    //res.sendFile(path.join(appDir + '/views' + '/template.html'));
    res.render('template')
};