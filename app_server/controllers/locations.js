// GET 'Home' page
module.exports.homelist = function(req, res, next){
    res.render('index', { title: 'Home' });
};

// GET 'Location info' page
module.exports.locationInfo = function(req, res, next){
    res.render('index', { title: 'Location Info' });
};

// GET 'Add Review' page
module.exports.addReview = function(req, res, next){
    res.render('index', { title: 'Add Review'});
};