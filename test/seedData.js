'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var speakerIds = [];
for (var i = 0; i < 7; i++) {
  speakerIds.push(ObjectId());
};

var events = {
  name : 'Event',
  data : [
    {
      "_id"    : ObjectId(),
      name     : "USI Social Web",
      date     : new Date(),
      place    : "USI auditorium",
      speaker  : speakerIds[1],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      "_id"          : ObjectId(),
      name     : "USI Big Brother",
      date     : new Date(),
      place    : "USI auditorium",
      speaker  : speakerIds[2],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      "_id"    : ObjectId(),
      name     : "EZ-Stats",
      date     : new Date(),
      place    : "USI auditorium",
      speaker  : speakerIds[3],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      "_id"    : ObjectId(),
      name     : "ASQ-PDF Import",
      date     : new Date(),
      place    : "USI auditorium",
      speaker  : speakerIds[4],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    }
    ,
    {
      "_id"    : ObjectId(),
      name     : "ICWE Mobile Web App",
      date     : new Date(),
      place    : "USI auditorium",
      speaker  : speakerIds[5],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      "_id"    : ObjectId(),
      name     : "Atelier Beats Group Project",
      date     : new Date(),
      place    : "USI auditorium",
      speaker  : speakerIds[6],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    }
  ]
}

var speakers = {
  name : 'Speaker',
  data : [
    {
      "_id"         : speakerIds[1],
      name          : "Marco Calzana",
      organisation  : "USI",
      bio           : "Dummy",
      events        : events.data[0]._id
    },
    {
      "_id"         : speakerIds[2],
      name          : "Francesco Zuppichini",
      organisation  : "USI",
      bio           : "Dummy",
      events        : events.data[1]._id
    },
    {
      "_id"         : speakerIds[3],
        name        : "Paolo Aurecchia",
      organisation  : "USI",
      bio           : "Dummy",
      events        : events.data[2]._id
    },
    {
      "_id"         : speakerIds[4],
      name          : "Alexander North",
      organisation  : "USI",
      bio           : "Dummy",
      events        : events.data[3]._id
    },
    {
      "_id"         : speakerIds[5],
      name          : "Luigi Frunzio",
      organisation  : "USI",
      bio           : "Dummy",
      events        : events.data[4]._id
    },
    {
      "_id"         : speakerIds[6],
      name          : "Davide Cammarata",
      organisation  : "USI",
      bio           : "Dummy",
      events        : events.data[5]._id
    }
  ]
}


var seedData = [];
seedData.push(events);
seedData.push(speakers);

module.exports = seedData;
