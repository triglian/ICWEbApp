/** @module models/index.js
 * Loads all models
 */
'use strict';

var mongoose = require('mongoose');

require('./Comment');
require('./Event');
require('./Speaker');
require('./Twitter');
require('./Sponsor');

module.exports = {
    'Comment' : mongoose.model('Comment'),
    'Event' : mongoose.model('Event'),
    'Speaker': mongoose.model('Speaker'),
    'Twitter':mongoose.model('Twitter'),
    'Sponsor':mongoose.model('Sponsor')
};