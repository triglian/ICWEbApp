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
    pdf      : { type: Array },
    feedback : { type : [commentSchema], default: [] }
});


eventSchema.pre('save', function (next) {
    if(this.pdf && this.pdf.length > 0) {
        var pdfs = this.pdf;

        var i = 0;
        var pdf = pdfs[i];
        var callback = function(res) {
            var pdfAddress = pdf.split("/");
            var path = "public/" + pdfPath + pdfAddress[pdfAddress.length - 1];

            if (res.statusCode != 200) {
                errorCallback();
            }
            else {
                var data = new stream.Transform();

                res.on('data', function (chunk) {
                    data.push(chunk);
                });

                res.on('end', function () {
                    fs.writeFile(path, data.read(), function () {
                        pdfs[i] = pdfPath + pdfAddress[pdfAddress.length - 1];
                        recall();
                    });
                });
            }
        };
        var errorCallback = function() {
            console.log(pdf + " not found. Removed.");
            pdfs[i] = null;
            recall()
        };
        var cleanup = function() {
            var i;
            while (i = pdfs.indexOf(null) != -1) {
                pdfs.splice(i, 1);
            }
            return next();
        };
        var recall = function() {
            i += 1;
            if( i < pdfs.length) {
                pdf = pdfs[i];
                http.get(pdf, callback).on('error', errorCallback);
            }
            else {
                cleanup();
            }
        };

        http.get(pdf, callback).on('error', errorCallback);
    }
    else {
        return next();
    }
});

function arrayRemove(array, item) {
    console.log("Removing pdfs");
    console.log("Removal done");
}



mongoose.model('Event', eventSchema);
