var config = require('./config');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var dustjs = require('adaro');
var methodOverride = require('method-override');
var cookieSession = require('cookie-session');


var app = express();

//mongoose setup
var mongoose   = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
mongoose.connect(config.mongoUrl + config.mongoDbName);
require("./models");

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

// Cookies
app.set('trust proxy', 1); // trust first proxy
app.use(cookieSession({
    name: 'session',
    secret: 'yufho21eyurht871r23'
}));


app.use(function (req, res, next) {
    req.session._id = req.session._id || new ObjectId();
    next();
});

//Add some routes
var routers = require('./routes/routers');
app.use('/contacts', routers.Contacts);
app.use('/twitter', routers.Twitter);
app.use('/sponsors', routers.Sponsors);
app.use('/events', routers.Events);
app.use('/speakers', routers.Speakers);
app.use('/', routers.root);

module.exports = app;
