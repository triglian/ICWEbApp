var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Sponsor = mongoose.model('Sponsor');


router.get("/", function(req, res, next) {
    Sponsor.find({}, {}, function(err, sponsors) {
        if (err) return next(err);
        res.json(sponsors);
    });
});

module.exports = router;