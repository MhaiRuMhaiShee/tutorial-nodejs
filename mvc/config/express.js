var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var validator = require('express-validator');
var cookieSession = require('cookie-session');
var session = require('express-session');

module.exports = function() {

    var app = express();
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else{
        app.use(compression);
    }

    //cookie
    app.use(cookieSession({
        name: 'session',
        keys: ['1stkey','2ndkey']
    }));

    /*
    //session
    app.use(session({
        secret: 'secret_key',
        resave: false,
        saveUninitialized: true //save when first open web

    }))


*/

    //receive post method type urlencode
    app.use(bodyParser.urlencoded({
        extended: true // receive more type like a nested array
    }));
    //receive post method type json
    app.use(bodyParser.json());

    //validator !! run after bodyParser only!
    //app.use(validator());   

    // set jade and views path
    // need one dot work at run tine not compile time
    app.set('views', './app/views');
    app.set('view engine', 'jade')

    //this is routing path
    // require work when compile in runtime 
    // ! need double dot .. for path
    require('../app/routes/index.routes')(app);

    require('../app/routes/user.routes')(app);

    //output compressed ,compact, expanded
    //prefix for cuttung a css when route to css
    //compile sass before static
    
    app.use(sass({
        src: './sass',
        dest: './public/css',
        outputStyle:'compressed',
        prefix: '/css',
        debug: true,
        //indentedSyntax:true  for sass not scss
    }))



    //set static file after route for performance
    app.use(express.static('./public'));
    return app;
}