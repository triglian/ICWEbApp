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
    var comment = checkComment(req.body);
    console.log(comment)
})

function sendMail() {
    var mailOptions = {
        from: 'icwe16cform@gmail.com', // sender address
        to: 'icwe16cform@gmail.com', // list of receivers
        subject: 'Email from contacts form', // Subject line
        text: 'Hello world ✔', // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
}



module.exports = router;