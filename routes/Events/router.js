'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');

var mongoose = require('mongoose');
//var ObjectId = mongoose.Types.ObjectId;
var Event = mongoose.model('Event');
var Comment = mongoose.model('Comment');


var config = require("../../config");

//supported methods
router.all('/:eventid', middleware.supportedMethods('GET, OPTIONS'));
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

var fieldsFilter = { '__v': 0 };

//routes
router.get('/', function(req, res, next) {
    Event.find({}, fieldsFilter).populate("speakers", "picture name organisation").exec(function (err, talks) {
        if (err) return next(err);
        res.json(talks);
    });
});

router.get('/:eventid', function(req, res, next) {
    Event.findById(req.params.eventid, fieldsFilter).populate("speakers", "picture name organisation").exec(function(err, talk) {
        if (err) return next(err);
        if (!talk) {
            res.status(404);
            res.json({
                statusCode: 404,
                message: "Not Found"
            });
        }
        else {
            res.json(talk);
        }
    });
});

router.get('/:eventid/feedback', function(req, res, next) {
    Event.findById(req.params.eventid, fieldsFilter , function(err, event) {
        if (err) return next(err);
        if (!event) {
            res.status(404);
            res.json({
                statusCode: 404,
                message: "Not Found"
            });
        }
        else {
            res.json(event.feedback);
        }
    })

});

router.post('/:eventid/feedback', function(req, res, next){
    var data = req.body;
    Event.findById(req.params.eventid, fieldsFilter , function(err, event){
        if (err) return next (err);
        if (!event) {
            res.status(404);
            res.json({
                statusCode: 404,
                message: "Not Found"
            });
            return;
        }
        var feed = new Comment();
        feed.email = data.email;
        feed.stars = data.stars;
        feed.comment = data.comment;

        event.feedback.push(feed);
        event.save(onModelSave(res));
    });
});

function onModelSave(res, status, sendItAsResponse){
    var statusCode = status || 204;
    var sendItAsResponse = sendItAsResponse || false;
    return function(err, saved){
        if (err) {
            if (err.name === 'ValidationError'
                || err.name === 'TypeError' ) {
                res.status(400)
                return res.json({
                    statusCode: 400,
                    message: "Bad Request"
                });
            }else{
                return next (err);
            }
        }
        if( sendItAsResponse){
            var obj = saved.toObject();
            delete obj.password;
            delete obj.__v;
            addLinks(obj);
            res.status(statusCode)
            return res.json(obj);
        }else{
            return res.status(statusCode).end();
        }
    }
}
module.exports = router;