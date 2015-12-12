'use strict';

var http = require('http');
var fs = require('fs');
var stream = require('stream');
var mongoose = require('mongoose');
var utils = require('./functions');
var ObjectId = mongoose.Schema.Types.ObjectId;
var speakerImagePath = "imgs/speakers/";

var speakerSchema = new mongoose.Schema({
    name            : { type : String, default: "" },
    organisation    : { type : String, default: "" },
    bio             : { type : String, default: "" },
    picture         : { type : String, default: "" },
    website         : { type : String, default: "" },
    email           : { type : String, default: "" },
    twitter         : { type : String, default: "" },
    events          : [{ type : ObjectId, ref: "Event" }],
    linkName : { type : String }
});

speakerSchema.pre('save', function (next) {
    this.linkName = utils.makeLinkName(this.name);


    var picture = this.picture.split("/");
    var path = "public/" + speakerImagePath + picture[picture.length - 1];
    var speaker = this;

    http.get(this.picture, function (res) {
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
});

mongoose.model('Speaker', speakerSchema);