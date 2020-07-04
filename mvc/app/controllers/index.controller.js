exports.render = function (req, res) {
    var isLoggedIn = false;

    //if name "session" cookie of remember is exist , then pass to isloggin
    if (typeof req.session.remember !== 'undefined') {
        isLoggedIn = req.session.remember;
    }


    res.render('index', {
        title: 'hello world',
        isLoggedIn: isLoggedIn
    });
}