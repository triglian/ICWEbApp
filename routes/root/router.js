'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');


router.all('/', middleware.supportedMethods('GET, OPTIONS'));

/* GET home page. */
router.get('/', function(req, res, next) {
   res.json({})
});

module.exports = router;
