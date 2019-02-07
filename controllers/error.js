exports.get404 = (req, res, next) => {
    res.status(404);
    res.render('404');
    //res.sendFile(path.join(appDir + '/views' + '/notfound.html'));
};