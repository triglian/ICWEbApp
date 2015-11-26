'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var speakerIds = [];
for (var i = 0; i < 7; i++) {
  speakerIds.push(ObjectId());
}

var events = {
  name : 'Event',
  data : [
    {
      "_id"    : ObjectId(),
      name     : "USI Social Web",
      date     : new Date('Wed Nov 25 2015 08:30:00 GMT+0100 (CET)'),
      place    : "USI auditorium",
      speaker  : speakerIds[1],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      "_id"    : ObjectId(),
      name     : "USI Big Brother",
      date     : new Date('Wed Nov 25 2015 08:40:00 GMT+0100 (CET)'),
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
      date     : new Date('Wed Nov 25 2015 08:50:00 GMT+0100 (CET)'),
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
      date     : new Date('Thurs Nov 26 2015 08:10:10 GMT+0100 (CET)'),
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
      date     : new Date('Thurs Nov 26 2015 09:10:00 GMT+0100 (CET)'),
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
      date     : new Date('Fri Nov 28 2015 10:10:00 GMT+0100 (CET)'),
      place    : "USI auditorium",
      speaker  : speakerIds[6],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    }
  ]
};

var speakers = {
  name : 'Speaker',
  data : [
    {
      "_id"         : speakerIds[1],
      name          : "Marco Calzana",
      organisation  : "USI",
      bio           : "Dummy",
      events        : [events.data[0]._id]
    },
    {
      "_id"         : speakerIds[2],
      name          : "Francesco Zuppichini",
      organisation  : "USI",
      bio           : "Dummy",
      events        : [events.data[1]._id]
    },
    {
      "_id"         : speakerIds[3],
        name        : "Paolo Aurecchia",
      organisation  : "USI",
      bio           : "Dummy",
      events        : [events.data[2]._id]
    },
    {
      "_id"         : speakerIds[4],
      name          : "Alexander North",
      organisation  : "USI",
      bio           : "Dummy",
      events        : [events.data[3]._id]
    },
    {
      "_id"         : speakerIds[5],
      name          : "Luigi Frunzio",
      organisation  : "USI",
      bio           : "Dummy",
      events        : [events.data[4]._id]
    },
    {
      "_id"         : speakerIds[6],
      name          : "Davide Cammarata",
      organisation  : "USI",
      bio           : "Dummy",
      events        : [events.data[5]._id]
    }
  ]
};

var tweets = {
  name : 'Twitter',
  data : [
    {
      "_id"         : ObjectId(),
      name          : "Person0",
      username      : "USI",
      text          : "Dummy",
      profile_image : 'http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png'
    },
    {
      "_id"         : ObjectId(),
      name          : "Person1",
      username      : "USI",
      text          : "Dummy",
      profile_image : 'http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png'
    },
    {
      "_id"         : ObjectId(),
      name          : "Person2",
      username      : "USI",
      text          : "Dummy",
      profile_image : 'http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png'
    },
    {
      "_id"         : ObjectId(),
      name          : "Person3",
      username      : "USI",
      text          : "Dummy",
      profile_image : 'http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png'
    },
    {
      "_id"         : ObjectId(),
      name          : "Person4",
      username      : "USI",
      text          : "Dummy",
      profile_image : 'http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png'
    }
  ]
};
var sponsor = {
  name: 'Sponsor',
  data: [
    {
      "_id"         : ObjectId(),
      logo_url      : "https://www.post.ch/-/media/framework/logos/post.png?la=it&vs=1",
      company_name  : "La Posta Svizzera",
      website       : "https://www.post.ch/"
    },
    {
      "_id"         : ObjectId(),
      logo_url      : "http://www.pardolive.ch/mirror/get.do?q=80&url=http%3A%2F%2Fwww.pardolive.ch%3A80%2Fdam%2Fjcr%3A793f99fb-2aae-4d21-96e4-8e9c56b5b671%2Fsbb_cff_ffs.png",
      company_name  : "FFS",
      website       : "http://www.ffs.ch"
    },
    {
      "_id"         : ObjectId(),
      logo_url      : "http://img.deusm.com/informationweek/2015/09/1322015/logo_420_color_2x.png",
      company_name  : "Google",
      website       : "http://www.google.ch"
    }
  ]
};

var seedData = [];
seedData.push(events);
seedData.push(speakers);
seedData.push(tweets);
seedData.push(sponsor);
module.exports = seedData;
