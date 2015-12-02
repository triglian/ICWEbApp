'use strict';
var config = require('../../config');
var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');


router.all('/', middleware.supportedMethods('GET, OPTIONS'));

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile("index.html");
});

/*GET for basic info about the conference */
router.get('/info/', function(req,res,next){
   var info = {
       'url': config.url,
       'title': config.title
   };
    res.json(info)
});
module.exports = router;
