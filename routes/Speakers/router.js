'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');

var mongoose = require('mongoose');
//var ObjectId = mongoose.Types.ObjectId;
var Speaker = mongoose.model('Speaker');

var config = require("../../config");

//supported methods
router.all('/:speakerid', middleware.supportedMethods('GET, OPTIONS'));
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

var fieldsFilter = { '__v': 0 };

//routes
router.get("/", function(req, res, next) {
    Speaker.find({}, fieldsFilter).populate("events").exec(function(err, speakers) {
        if (err) return next(err);
        res.json(speakers);
    });
});

router.get("/:speakerid", function(req, res, next) {
    Speaker.findById(req.params.speakerid, fieldsFilter).populate("events").exec(function(err, speaker) {
        if (err) return next(err);
        if (!speaker) {
            res.status(404);
            res.json({
                statusCode: 404,
                message: "Not Found"
            });
        }
        else {
            res.json(speaker);
        }
    });
});

module.exports = router;