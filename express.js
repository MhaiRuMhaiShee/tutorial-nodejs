//express is web framework or node.js
//middleware architecture based from connect
//html template engine
//routing

var express = require('express');
var app = express();

// object in express

//1. application object
// env variable
//app.set(version,1);
//app.get(version)

//app.use([path], callback) middleware all of get post put del will pass by this
//app.route(path).get(callback).post(callback)  chain 2 request in 1 path

//2. request object
// req res next
// req.query is query string >>> google.com/?key1=value&key2=value
// req.params is routing param >>> /param1/param2
// req.body ส่วน body พวก form ใช้ร่วมกับ bodyparser
// req.path now path
// req.host hostname
// req.ip ip of client

//3. response object
// res.status code
// res.set(field, [value]) set http response header
// res.redirect([status], url) also can put status code 
// res.send([body|status], [body]) automatic set content type
// res.json([body|status], [body]) send only json
// res.view(view, [locals], callback) render view


var logger = (req,res,next) =>{
    console.log(req.method , req.url);
    next(); // connect module
};

var helloWorld = (req,res,next) =>{
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
};

var goodBye = (req,res,next) =>{
    // in express no need to specify content type
    res.send("goodbye"); // express will convert to text/hmtl
                        // if send array >> app/json    
                        // buffer >> octet-stream
};

app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodBye);


app.listen(3000);

console.log('Server running at http://localhost:3000')

module.exports = app; //export for further using