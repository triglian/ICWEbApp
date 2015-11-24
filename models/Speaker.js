'use strict';

var mongoose = require('mongoose');
//var SpeakerSchema = require('./Speaker');
//var CommentSchema = require('./Comment');

var speakSchema = new mongoose.Schema({
    name     : { type : String },
    date     : { type : Date },
    place    : { type : String },
    speaker  : { type : String },
    abstract : { type : String },
    kind     : { type : String },
    pdf      : { type : String },
    feedback : { type : Array }
});

mongoose.model('Speaker', speakSchema);