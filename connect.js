var connect = require('connect');
var app = connect(); // create instance


var logger = (req,res,next) =>{
    console.log(req.method , req.url);
    next(); // connect module
};

var helloWorld = (req,res,next) =>{
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
};

var goodBye = (req,res,next) =>{
    res.setHeader('Content-Type','text/plain');
    res.end('goodBye World');
};

app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodBye);


app.listen(3000);

console.log('Server running at http://localhost:3000')