//CommentSchema:
//
//Time : Date
//Stars : Number
//Comment : String

'use strict';

var mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({
    email    : { type : String, required: true },
    comment  : { type : String, required: true },
    time     : { type : Date, default: Date.now() },
    stars    : { type : Number, required: true }
});

mongoose.model('Comment', commentSchema);
module.exports = commentSchema;