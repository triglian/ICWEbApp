/**
 * Created by Giggiux on 05/12/15.
 */
var socketIo = require('socket.io');

var eventBus = require('./eventEmitter');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Twitter = mongoose.model('Twitter');



module.exports = function(httpServer) {
    var io = socketIo(httpServer);
    // Socket.io server

    io.on('connection', function(socket){
        console.log('Connected');

        Twitter.find({}, {}, function(err, twitters) {
            if (err) return next(err);
            socket.emit('initialData', twitters);
        }).sort({date:-1});

    });

    eventBus.on('newTweet', function(data){
        io.emit('newTweet', data);
    });


    eventBus.on('deletedTweet', function(data){
        io.emit('deletedTweet', data);
    })

};