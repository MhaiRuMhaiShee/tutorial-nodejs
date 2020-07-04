exports.login = function (req, res) {


/*
    req.checkBody('email' , 'Invalid email').notEmpty().isEmail();
    req.snitizeBody('email').normalizeEmail();
    var errors = req.validationErrors();
    if(errors){
        res.render('index',{
            title: 'Validation Error ' + JSON.stringify(erros),
            isLoggedIn: false
        });
        return;
    };
*/
    // session Cookie Client site !!
    if(req.body.remember === 'remember') {
        req.session.remember = true;
        req.session.email = req.body.email;
        req.sessionOptions.maxAge = 60000; // session life in millisec!
    }
    
    

    console.log(req.body);
    console.log("Email : " + req.body.email);
    console.log("Password : " + req.body.password);

    res.render('index',{
        title: 'Logged in as ' + req.body.email,
        isLoggedIn: true
    });


};

exports.logout = function (req, res) {
    //clear cookie session
    req.session = null;

    res.render('index',{
        title: 'See you again later.',
        isLoggedIn: false
    });


};