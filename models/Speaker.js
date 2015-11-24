'use strict';

var mongoose = require('mongoose');

var speakerSchema = new mongoose.Schema({
    name     : { type : String, default: "" },
    organisation     : { type : String, default: "" },
    bio    : { type : String, default: "" },
    picture  : { type : String, default: "" },
    website : { type : String, default: "" },
    email     : { type : String, default: "" },
    twitter      : { type : String, default: "" },
    events : { type : Array, default : [] }
});

mongoose.model('Speaker', speakerSchema);