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
var ObjectId = mongoose.Schema.Types.ObjectId;
var commentSchema = require('./Comment');

var eventSchema = new mongoose.Schema({
    name     : { type : String, default: "" },
    date     : { type : Date, default: Date.now() },
    place    : { type : String, default: "" },
    speaker  : { type : ObjectId, ref: "Speaker" },
    abstract : { type : String, default: "" },
    kind     : { type : String, default: "" },
    pdf      : { type : String, default: "" },
    feedback : { type : [commentSchema], default: [] }
});

mongoose.model('Event', eventSchema);
