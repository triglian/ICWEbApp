var config = require('./config');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dustjs = require('adaro');
//var routes = require('./routes/');
//var users = require('./routes/users');

var app = express();

//mongoose setup
var mongoose   = require('mongoose');
mongoose.connect(config.mongoUrl + config.mongoDbName);
require("./models");

// view engine setup
app.engine('dust', dustjs.dust());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dust');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride(
    function(req, res){
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            var method = req.body._method
            delete req.body._method
            return method
        }
    }
));

//app.use('/', routes);
//app.use('/users', users);
//
// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
// error handlers
//
// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function (err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
// production error handler
// no stacktraces leaked to user
//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});

//Add some routes
var routers = require('./routes/routers');
app.use('/events', routers.Events);
app.use('/', routers.root)

module.exports = app;
