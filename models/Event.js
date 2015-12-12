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
var utils = require('./functions');
var commentSchema = require('./Comment');
var ObjectId = mongoose.Schema.Types.ObjectId;

var eventSchema = new mongoose.Schema({
    name     : { type : String, required: true },
    date     : { type : Date, default: Date.now() },
    place    : { type : String, required: true },
    speakers  : [{ type : ObjectId, ref: "Speaker" }],
    abstract : { type : String, required: true },
    kind     : { type : String, default: "" },
    pdf      : { type: Array, default: [] },
    feedback : { type : [commentSchema], default: [] },
    linkName : { type : String }
});


eventSchema.pre('save', function (next) {
    this.linkName = utils.makeLinkName(this.name);

    utils.cachePdfs(this, next);

});


mongoose.model('Event', eventSchema);
