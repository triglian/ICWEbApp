var http = require('http');
var fs = require('fs');
var stream = require('stream');

function makeLinkName(name) {
    return name.replace(/ /g, "-");
}


function cachePdfs(event, done) {
    var pdfPath = "pdfs/";

    if(event.pdf && event.pdf.length > 0) {
        var pdfs = event.pdf;

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
            return done(event);
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
        return done(event);
    }

}


module.exports = {
    makeLinkName: makeLinkName,
    cachePdfs: cachePdfs
};