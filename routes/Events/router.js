'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');

var mongoose = require('mongoose');
//var ObjectId = mongoose.Types.ObjectId;
var Event = mongoose.model('Event');
var Comment = mongoose.model('Comment');
var CronJob = require('cron').CronJob;
var Speaker = mongoose.model('Speaker');


var config = require("../../config");

//supported methods
router.all('/:eventid', middleware.supportedMethods('GET, OPTIONS'));
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

var fieldsFilter = { '__v': 0 };


//utils

function checkComment(req) {
    if(req.body.stars && req.body.comment && req.session._id) {
        return { stars: req.body.stars, comment: req.body.comment, cookie: req.session._id, email: req.body.email };
    }
    else {
        return undefined;
    }
}

//routes
router.get('/', function(req, res, next) {
    Event.find({}, fieldsFilter).populate("speakers", "picture name organisation linkName").exec(function (err, talks) {
        if (err) return next(err);
        res.json(talks);
    });
});

router.get('/:eventid', function(req, res, next) {
    Event.findById(req.params.eventid, fieldsFilter).populate("speakers", "picture name organisation linkName").exec(function(err, talk) {
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
    var comment = checkComment(req);
    var id = req.params.eventid;

    if(!comment) {
        res.status(400);
        res.json({
            statusCode: 400,
            message: "Invalid comment."
        });
        return;
    }

    comment = new Comment(comment);

    Event.findById(id, fieldsFilter, function(err, event) {
        if (err) return next(err);

        var now = Date.now();
        var evt = new Date(event.date).getTime();
        var allowed = evt < now && now < evt + 86400000 * 3;
        if(!allowed) {
            res.status(400);
            res.json({
                statusCode: 400,
                message: "Comments are not allowed at this time."
            });
            return;
        }

        var i = 0;
        var found = false;
        while(i < event.feedback.length && !found) {
            if(event.feedback[i].cookie === comment.cookie) {
                found = true;
            }
            else ++i;
        }
        if(found) {
            event.feedback[i] = comment;
        }
        else {
            event.feedback.push(comment);
        }

        Event.findByIdAndUpdate({_id: event._id }, { feedback: event.feedback }, function(err, changed) {
            if (err) return next(err);
            if(!changed) {
                res.status(404);
                res.json({
                    statusCode: 404,
                    message: "Event not found."
                });
                return;
            }

            res.status(201);
            if(found) {
                res.json({
                    statusCode: 200,
                    message: "Feedback updated."
                });
                return;
            }
            res.json({
                statusCode: 201,
                message: "Feedback submitted."
            });
        });
    })
});
var idSent = [];

//new CronJob('*/10 * * * * *', function() {
//    Event.find({}, fieldsFilter).populate("speakers", "email picture name organisation").exec(function (err, event) {
//        var actualDate = new Date();
//        event.forEach(function(evt) {
//            if(idSent.indexOf(evt.id) == -1){
//                var speaker = evt.speakers;
//                for(var i = 0 ; i < speaker.length;i++) {
//                    if(+actualDate >= +evt.date) {
//                        idSent.push(evt.id)
//                        sendMail(speaker[i].email, [evt.name, evt.id])
//                    }
//                }
//            }
//        })
//    })
//}, null, true);

//var nodemailer = require('nodemailer');
//
//var transporter = nodemailer.createTransport({
//    service: 'Gmail',
//    auth: {
//        user: 'icwe16cform@gmail.com',
//        pass: 'atelierbeats'
//    }
//});
//
//function sendMail(receiver,event) {
//    console.log(event)
//    var mailOptions = {
//        from: 'icwe16cform@gmail.com',
//        to: 'icwe16cform@gmail.com',
//        subject: 'Your Feedback for '+ event[0] +' is ready',
//        html: '<b>You can find your feedback at http://localhost:3000/#!events/'+event[1]+'/feedback</b><p> to be forwarded to '+receiver+'</p>'
//    };
//    transporter.sendMail(mailOptions, function (error, info) {
//        if (error) {
//            return console.log(error);
//        }
//    });
//}



module.exports = router;