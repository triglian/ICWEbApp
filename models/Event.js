//Name : String
//Date : Date
//Place: String
//Speaker : SpeakerSchema
//Abstract : String
//Type : String
//PDF : String
//Feedback [CommentSchema]

'use strict';

var http = require('http');
var fs = require('fs');
var stream = require('stream');
var mongoose = require('mongoose');
var pdfPath = "pdfs/";
var commentSchema = require('./Comment');
var ObjectId = mongoose.Schema.Types.ObjectId;

var eventSchema = new mongoose.Schema({
    name     : { type : String, required: true },
    date     : { type : Date, default: Date.now() },
    place    : { type : String, required: true },
    speakers  : [{ type : ObjectId, ref: "Speaker" }],
    abstract : { type : String, required: true },
    kind     : { type : String, default: "" },
    pdf      : { type : String },
    feedback : { type : [commentSchema], default: [] }
});


eventSchema.pre('save', function (next) {
    if(this.pdf) {
        var pdf = this.pdf.split("/");
        var event = this;
        var path = "public/" + pdfPath + pdf[pdf.length - 1];

        http.get(event.pdf, function (res) {
            if (res.statusCode > 200 || res.statusCode <= 400) {
                console.log(event.pdf + " not found. Removed.");
                event.pdf = "";
                return next();
            }

            var data = new stream.Transform();

            res.on('data', function (chunk) {
                data.push(chunk);
            });

            res.on('end', function () {
                fs.writeFile(path, data.read(), function () {
                    event.pdf = pdfPath + pdf[pdf.length - 1];
                    return next();
                });
            });
        }).on('error', function() {
            console.log(event.pdf + " not found. Removed.");
            event.pdf = "";
            return next();
        });
    }
});

mongoose.model('Event', eventSchema);
