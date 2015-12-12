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

function checkComment(obj) {
    if(obj.stars && obj.email && obj.comment) {
        return { stars: obj.stars, email: obj.email, comment: obj.comment };
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
    var comment = checkComment(req.body);
    var id = req.params.eventid;

    if(!comment) {
        res.status(400);
        res.json({
            statusCode: 400,
            message: "Bad request"
        });
    }

    comment = new Comment(comment);

    Event.findById(id, fieldsFilter, function(err, event) {
        if (err) return next(err);

        //var now = Date.now();
        //var evt = new Date(event.date).getTime();
        //var allowed = evt < now && now < evt + 86400000 * 3;
        //if(!allowed) {
        //    res.status(400);
        //    res.json({
        //        statusCode: 400,
        //        message: "Bad request"
        //    });
        //    return;
        //}

        //var i = 0;
        //var found = false;
        //while(i < event.feedback.length && !found) {
        //    if(event.feedback[i] === comment.email) {
        //        found = true;
        //    }
        //    ++i;
        //}
        //if(found) {
        //    res.status(400);
        //    res.json({
        //        statusCode: 400,
        //        message: "Bad request"
        //    });
        //    return;
        //}

        event.feedback.push(comment);

        console.log("Save");
        Event.findByIdAndUpdate({_id: event._id }, { feedback: event.feedback }, function(err, changed) {
            if (err) return next(err);
            if(!changed) {
                res.status(400);
                res.json({
                    statusCode: 400,
                    message: "Bad request"
                });
                return;
            }

            res.status(201);
            res.json({
                statusCode: 201,
                message: "Created"
            });
        });
    })
});

new CronJob('*/10 * * * * *', function() {

    Event.find({}, fieldsFilter).populate("speakers", "email picture name organisation").exec(function (err, event) {
        var actualDate = new Date();
        event.forEach(function(evt) {
            if(+actualDate >= +evt.date){
                var speaker = evt.speakers
                for(var i = 0 ; i < speaker.length;i++) {
                    if(evt.sent == "no") {
                        sendMail(speaker[i].email, [evt.name,evt.id])
                        evt.sent = "yes"
                        //console.log('sending message')
                    }else{
                        //console.log("already sent")
                    }
                }
            }
        })
    })
}, null, true);

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'icwe16cform@gmail.com',
        pass: 'atelierbeats'
    }
});

function sendMail(receiver,event) {
    var mailOptions = {
        from: 'icwe16cform@gmail.com', // sender address
        to: 'icwe16cform@gmail.com', // list of receivers
        subject: 'Your Feedback for '+ event[0] +' is ready', // Subject line
        html: '<b>You can find your feedback at http://localhost:3000/#!events/'+event[1]+'/feedback</b>' // html body
    };
    console.log(mailOptions)
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
    });
}



module.exports = router;