'use strict';

var http = require('http');
var fs = require('fs');
var stream = require('stream');
var mongoose = require('mongoose');
var sponsorImagePath = "imgs/sponsors/";


var sponsorSchema = new mongoose.Schema({
    logo_url        : { type : String, required: true },
    company_name    : { type : String, required: true },
    website         : { type : String, required: true }
});


sponsorSchema.pre('save', function (next) {
    var sponsor = this;

    function job() {

        var logo_url = sponsor.logo_url.split("/");
        var path = "public/" + sponsorImagePath + logo_url[logo_url.length - 1];

        http.get(sponsor.logo_url, function (res) {
            if (res.statusCode != 200) {
                console.log(sponsor.logo_url + " not found. Set to default picture.");
                sponsor.logo_url = sponsorImagePath + "default.png";
                return next();
            }

            var data = new stream.Transform();

            res.on('data', function (chunk) {
                data.push(chunk);
            });

            res.on('end', function () {
                fs.writeFile(path, data.read(), function () {
                    sponsor.logo_url = sponsorImagePath + logo_url[logo_url.length - 1];
                    return next();
                });
            });
        }).on('error', function() {
            console.log(sponsor.logo_url + " not found. Set to default picture.");
            sponsor.logo_url = sponsorImagePath + "default.png";
            return next();
        });
    }

    fs.stat("public/imgs/sponsors", function(err, stat) {
        if(err || !stat) {
            fs.mkdir("public/imgs/sponsors", job);
        }
        else {
            job();
        }
    })

});

mongoose.model('Sponsor', sponsorSchema);