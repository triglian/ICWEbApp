//Name : String
//Date : Date
//Place: String
//Speaker : SpeakerSchema
//Abstract : String
//Type : String
//PDF : String
//Feedback [CommentSchema]

'use strict';

var mongoose = require('mongoose');
var SpeakerSchema = require('./Speaker');
var CommentSchema = require('./Comment');



var eventSchema = new mongoose.Schema({
    name     : { type : String },
    date     : { type : Date },
    place    : { type : String },
    speaker  : { type : SpeakerSchema },
    abstract : { type : String },
    kind     : { type : String },
    pdf      : { type : String },
    feedback : { type : [CommentSchema]}
});

mongoose.model('Event', eventSchema);
