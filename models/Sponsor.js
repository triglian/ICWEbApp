'use strict';

var http = require('http');
var fs = require('fs');
var stream = require('stream');
var mongoose = require('mongoose');
var sponsorImagePath = "imgs/sponsors/";


var sponsorSchema = new mongoose.Schema({
    logo_url        : { type : String },
    company_name    : { type : String },
    website         : { type : String }
});


sponsorSchema.pre('save', function (next) {
    var picture = this.picture.split("/");
    var path = "public/" + sponsorImagePath + picture[picture.length - 1];
    var sponsor = this;

    http.get(this.picture, function (res) {
        if (res.statusCode != 200) {
            console.log(sponsor.picture + " not found. Set to default picture.");
            sponsor.picture = sponsorImagePath + "default.png";
            return next();
        }

        var data = new stream.Transform();

        res.on('data', function (chunk) {
            data.push(chunk);
        });

        res.on('end', function () {
            fs.writeFile(path, data.read(), function () {
                sponsor.picture = sponsorImagePath + picture[picture.length - 1];
                return next();
            });
        });
    }).on('error', function() {
        console.log(sponsor.picture + " not found. Set to default picture.");
        sponsor.picture = sponsorImagePath + "default.png";
        return next();
    });
});

mongoose.model('Sponsor', sponsorSchema);