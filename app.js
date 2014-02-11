
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var rock = require('./rock');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/404',routes.notFound);
app.get('/users', user.list);
app.get('/make',function(req,res,next){
    var origin = req.query.url;
    if(typeof origin === "undefined") res.end("") && next();
    res.end(rock.sendIn(origin));
});
app.get('/go/:id',function(req,res,next){
    var id = req.params.id;
    if(typeof id === 'undefined') res.render('found') && next();
    rock.sendOut(id,req,res);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
