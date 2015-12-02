'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var speakerSchema = new mongoose.Schema({
    name            : { type : String, default: "" },
    organisation    : { type : String, default: "" },
    bio             : { type : String, default: "" },
    picture         : { type : String, default: "" },
    website         : { type : String, default: "" },
    email           : { type : String, default: "" },
    twitter         : { type : String, default: "" },
    events          : [{ type : ObjectId, ref: "Event" }]
});

mongoose.model('Speaker', speakerSchema);