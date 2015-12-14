'use strict';

var http = require('http');
var fs = require('fs');
var stream = require('stream');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var speakerImagePath = "imgs/speakers/";

var speakerSchema = new mongoose.Schema({
    name            : { type : String, required: true },
    organisation    : { type : String, default: "" },
    bio             : { type : String, required: true },
    picture         : { type : String, default: "imgs/speakers/default_profile_1_normal.png" },
    website         : { type : String, default: "" },
    email           : { type : String, required: true },
    twitter         : { type : String, default: "" },
    events          : [{ type : ObjectId, ref: "Event" }],
    linkName : { type : String, required: true }
});

speakerSchema.pre('save', function (next) {
    var speaker = this;

    function job() {

        var picture = speaker.picture.split("/");
        var path = "public/" + speakerImagePath + picture[picture.length - 1];

        http.get(speaker.picture, function (res) {
            if (res.statusCode != 200) {
                console.log(speaker.picture + " not found. Set to default picture.");
                speaker.picture = speakerImagePath + "default.png";
                return next();
            }

            var data = new stream.Transform();

            res.on('data', function (chunk) {
                data.push(chunk);
            });

            res.on('end', function () {
                fs.writeFile(path, data.read(), function () {
                    speaker.picture = speakerImagePath + picture[picture.length - 1];
                    return next();
                });
            });
        }).on('error', function() {
            console.log(speaker.picture + " not found. Set to default picture.");
            speaker.picture = speakerImagePath + "default.png";
            return next();
        });
    }

    fs.stat("public/imgs/speakers", function(err, stat) {
        if(err || !stat) {
            fs.mkdir("public/imgs/speakers", job);
        }
        else {
            job();
        }
    })

});

mongoose.model('Speaker', speakerSchema);