'use strict';

var mongoose = require('mongoose');


var twitterSchema = new mongoose.Schema({
    text            : { type : String },
    name            : { type : String },
    username        : { type : String },
    profile_image   : { type : String }
});

mongoose.model('Twitter', twitterSchema);