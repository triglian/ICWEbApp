'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');

var mongoose = require('mongoose');
//var ObjectId = mongoose.Types.ObjectId;
var Event = mongoose.model('Event');

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

router.post('/:eventid/comment', function(req, res, next){
    console.log(req.body);
    res.status(200);
    res.json({
        statusCode: 200,
        message: "OK"
    });
});

module.exports = router;