'use strict';

var mongoose = require('mongoose');


var sponsorSchema = new mongoose.Schema({
    logo_url        : { type : String },
    company_name    : { type : String },
    website         : { type : String }
});

mongoose.model('Sponsor', sponsorSchema);