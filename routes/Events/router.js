'use strict';

var express = require('express')
var router = express.Router();
var middleware =  require('../middleware');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Event = mongoose.model('Event');

var config = require("../../config");


module.exports = router;