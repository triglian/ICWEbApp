'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');

var mongoose = require('mongoose');
//var ObjectId = mongoose.Types.ObjectId;
var Event = mongoose.model('Event');

var config = require("../../config");

//supported methods
router.all('/:talkid', middleware.supportedMethods('GET, OPTIONS'));
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

var fieldsFilter = { '__v': 0 };

//routes
router.get('/', function(req, res, next) {
    Event.find({}, fieldsFilter).populate("speaker", "picture name organisation").exec(function (err, talks) {
        if (err) return next(err);
        res.json(talks);
    });
});

router.get('/:talkid', function(req, res, next) {
    Event.findById(req.params.talkid, fieldsFilter).populate("speaker", "picture name organisation").exec(function(err, talk) {
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

module.exports = router;