/**
 * Updates db to new seed
 */

'use strict';

var config = require('./config');
var utils = require('./models/functions');

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
            utils.cachePdfs(object, recall);
        }
    };
    var recall = function(event) {
        models["Event"].update({ name: event.name }, {pdf: event.pdf || []}, callback)
    };

    utils.cachePdfs(object, recall);

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