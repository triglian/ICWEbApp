/** @module models/index.js
 * Loads all models
 */
'use strict';

var mongoose = require('mongoose');

require('./Comment');
require('./Event');
require('./Speaker')

module.exports = {
    'Comment' : mongoose.model('Comment'),
    'Event' : mongoose.model('Event'),
    'Speaker': mongoose.model('Speaker')
};