'use strict';
var config = require('../../config')
var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'icwe16cform@gmail.com',
        pass: 'atelierbeats'
    }
});

router.post('/', function(req, res, next) {
    var comment = req.body;
    sendMail(comment)
})

function sendMail(obj) {
    var info = obj.name.split(',')
    var email =  info[1]
    var name = info[0]
    var mailOptions = {
        from: 'icwe16cform@gmail.com', // sender address
        to: 'icwe16cform@gmail.com', // list of receivers
        subject: ''+ name +' has contacted you on ICWE WebApp', // Subject line
        html: '<b>From</b><p>'+email+'</p><b>Comment</b><p>'+obj.comment+'</p>' // html body
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
    });
}



module.exports = router;