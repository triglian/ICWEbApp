'use strict';

var mongoose = require('mongoose');


var twitterSchema = new mongoose.Schema({
    tweetId         : { type : Number, required: true },
    text            : { type : String, required: true },
    textId          : { type : String, required: true },
    name            : { type : String, required: true },
    username        : { type : String, required: true },
    profile_image   : { type : String },
    date            : {type: Date, default: new Date()}
});

mongoose.model('Twitter', twitterSchema);