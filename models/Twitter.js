'use strict';

var mongoose = require('mongoose');


var twitterSchema = new mongoose.Schema({
    text            : { type : String },
    name            : { type : String },
    username        : { type : String },
    profile_image   : { type : String },
    date            : {type: Date, default: new Date()}
});

mongoose.model('Twitter', twitterSchema);