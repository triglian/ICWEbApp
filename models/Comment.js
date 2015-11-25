//CommentSchema:
//
//Time : Date
//Stars : Number
//Comment : String

'use strict';

var mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({
    comment  : { type : String, default: "" },
    time     : { type : Date, default: Date.now() },
    stars    : { type : Number, default: 0 }
});

mongoose.model('Comment', commentSchema);
module.exports = commentSchema;