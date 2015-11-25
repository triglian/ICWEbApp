'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Twitter = mongoose.model('Twitter');
var Twit = require('twit')

var T = new Twit({
    consumer_key:         '1wBX4HCHU2JLeDsMSxtLZvg05'
    , consumer_secret:      'q7Vqp1znPiQaa6RQbloUS4rQgb60A7J8PlJEk6teH4a4ykgB2k'
    , access_token:         '4273180175-EYShfZ1TMNb0J89aUHXfVHHJ1Hhoapd1UxCp5wU'
    , access_token_secret:  'bk6ajH0LRp6OoX1PaHS4UHD5FHAqqa1wbKo3cz7kC0SId'
})

var stream = T.stream('statuses/filter', { track: ['icwe','icwe16'] })

stream.on('tweet', function (tweet) {
    addTweet(tweet);
})

function addTweet(tweet){
    var newTweet = new Twitter();
    newTweet.text = tweet.text;
    newTweet.name = tweet.user.name;
    newTweet.username = tweet.user.screen_name;
    newTweet.profile_image = tweet.user.profile_image_url;
    newTweet.save(newTweet);
}

router.get("/", function(req, res, next) {
    Twitter.find({}, {}, function(err, twitters) {
        if (err) return next(err);
        res.json(twitters);
    });
});
module.exports = router;