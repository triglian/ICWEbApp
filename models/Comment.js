//CommentSchema:
//
//Time : Date
//Stars : Number
//Comment : String

'use strict';

var mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({
    comment  : { type : String },
    time     : { type : Date },
    stars    : { type : Number }
});

mongoose.model('Comment', commentSchema);