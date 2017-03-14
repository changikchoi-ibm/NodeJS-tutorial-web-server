var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware')


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
