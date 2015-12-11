/**
 * Updates db to new seed
 */

'use strict';

var config = require('./config');

//load model
var mongoose = require('mongoose');
mongoose.connect(config.mongoUrl + config.mongoDbName);
var models = require('./models');


//seedData
var seedData = require('./test/seedData');

/**
 * Recursive function that goes through
 * seedData populating each item of it
 */
var updateModel = function(done){
    var data = seedData[1].data;
    var i = 0;
    var object = data[i];
    delete object._id;

    var callback = function() {
        ++i;
        if(i == data.length) {
            done();
        }
        else {
            var object = data[i];
            delete object._id;
            models["Event"].update({ name: object.name }, {pdf: object.pdf || []}, callback);
        }
    };

    models["Event"].update({ name: object.name }, {pdf: object.pdf || []}, callback)
};

/**
 * This is where everything starts
 */
var seed = function (done){
    updateModel(function() {
        mongoose.connection.close(function(err){
            if(err) return done(err);
            done();
        });
    })

};

seed(function(err){
    if (err) console.log(err);
    console.log("DB updated complete!");
    process.exit();
});