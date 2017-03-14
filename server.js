var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication : function (req, res, next){
        console.log('Private route hit!');
        next();
    },
    logger: function (req, res, next) {
        console.log("Request " + new Date().toISOString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);
//every page route 

app.get('/about;', middleware.requireAuthentication, function(req, res){
    res.send('About us!!!!!');''
})

app.get('/about', function(req, res) {
   res.send('This is about me');
});

//console.log(__dirname);
app.use (express.static(__dirname + '/public'));

app.listen(3000);
