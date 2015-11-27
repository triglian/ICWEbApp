'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;



var program = {
  events: [
    {
      name     : "USI Social Web",
      date     : new Date('Wed Nov 25 2015 08:30:00 GMT+0100 (CET)'),
      place    : "USI auditorium",
      speakers  : [{
                name          : "Marco Calzana",
                organisation  : "USI",
                bio           : "Curabitur eu odio nec massa elementum ultrices egestas a sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et ipsum ut nisl efficitur congue. Praesent elementum, ligula quis euismod maximus, tellus ipsum dignissim lacus, at tincidunt erat diam quis tortor. Suspendisse non neque interdum, tincidunt dolor vel, pharetra libero. Phasellus accumsan mattis viverra. Mauris velit lorem, tempor nec ipsum at, condimentum finibus ligula. Fusce sollicitudin, eros eget porta consequat, enim ipsum pretium ligula, non iaculis ipsum massa in velit. Proin nulla enim, euismod elementum sem id, congue sagittis purus. Praesent sem augue, fringilla eu sodales quis, dapibus vitae nisl.In lacus est, lobortis nec suscipit a, imperdiet nec libero. Nulla a nibh tincidunt, placerat justo nec, maximus ante. Cras eget mi augue. Vestibulum blandit interdum velit, vitae egestas nisl euismod quis. In vitae velit sit amet odio suscipit finibus sit amet quis urna. Aenean feugiat erat quis varius cursus. Sed convallis sem eget nisl malesuada imperdiet. Cras vitae mauris enim. Curabitur tristique efficitur orci, vitae rutrum diam finibus vel.",
                website       : "www.marcocalzana.ch",
                twitter       : "@marcoRocket",
                picture       : "http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                email         : "marco@marco.ch"
      }],
      abstract : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec neque tempor velit sollicitudin dignissim. Morbi sem velit, finibus et nulla id, tempor hendrerit enim. Maecenas sit amet dolor tincidunt, aliquet orci et, bibendum mi. In placerat suscipit risus a dictum. Cras ut tortor mauris. Proin arcu odio, ornare sit amet mattis faucibus, laoreet sed eros. Sed at neque elementum, viverra nunc quis, rutrum massa. Vivamus dictum sollicitudin laoreet. Sed ornare mollis nisl, sit amet porttitor est eleifend eu. Vestibulum pellentesque, dui vel semper eleifend, magna ligula ultrices nunc, in dignissim metus libero ut libero. Vivamus fermentum, ipsum ut tincidunt tristique, ligula sapien efficitur tellus, vitae euismod tellus risus in eros. Curabitur eget purus tincidunt dolor malesuada sagittis. Proin massa urna, pretium et bibendum a, pulvinar sit amet sapien. Nunc fringilla vitae enim non tempus.",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      name     : "USI Big Brother",
      date     : new Date('Wed Nov 25 2015 08:40:00 GMT+0100 (CET)'),
      place    : "USI auditorium",
        speakers  : [{
                name          : "Francesco Zuppichini",
                organisation  : "USI",
                bio           : "In lacus est, lobortis nec suscipit a, imperdiet nec libero. Nulla a nibh tincidunt, placerat justo nec, maximus ante. Cras eget mi augue. Vestibulum blandit interdum velit, vitae egestas nisl euismod quis. In vitae velit sit amet odio suscipit finibus sit amet quis urna. Aenean feugiat erat quis varius cursus",
                website       : "www.fz.ch",
                twitter       : "@fz",
                picture       : "http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                email         : "Zuppi@usi.ch"
      }],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      name     : "EZ-Stats",
      date     : new Date('Wed Nov 25 2015 08:50:00 GMT+0100 (CET)'),
      place    : "USI auditorium",
      abstract : "Curabitur eu odio nec massa elementum ultrices egestas a sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et ipsum ut nisl efficitur congue. Praesent elementum, ligula quis euismod maximus, tellus ipsum dignissim lacus, at tincidunt erat diam quis tortor.",
      kind     : "Talk",
      pdf      : "no pdf",
        speakers  :[{
                name        : "Paolo Aurecchia",
                organisation  : "USI",
                bio           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec neque tempor velit sollicitudin dignissim. Morbi sem velit, finibus et nulla id, tempor hendrerit enim. Maecenas sit amet dolor tincidunt, aliquet orci et, bibendum mi. In placerat suscipit risus a dictum. Cras ut tortor mauris. Proin arcu odio, ornare sit amet mattis faucibus, laoreet sed eros. Sed at neque elementum, viverra nunc quis, rutrum massa. Vivamus dictum sollicitudin laoreet. Sed ornare mollis nisl, sit amet porttitor est eleifend eu. Vestibulum pellentesque, dui vel semper eleifend, magna ligula ultrices nunc, in dignissim metus libero ut libero. Vivamus fermentum, ipsum ut tincidunt tristique, ligula sapien efficitur tellus, vitae euismod tellus risus in eros. Curabitur eget purus tincidunt dolor malesuada sagittis. Proin massa urna, pretium et bibendum a, pulvinar sit amet sapien. Nunc fringilla vitae enim non tempus.",
                website       : "www.paoloau.ch",
                twitter       : "@paoloau",
                picture       : "http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png"
      }],
      feedback : []
    },
    {
      name     : "ASQ-PDF Import",
      date     : new Date('Thurs Nov 26 2015 08:10:10 GMT+0100 (CET)'),
      place    : "USI auditorium",
        speakers  : [{
                name          : "Alexander North",
                organisation  : "USI",
                bio           : "Mauris velit lorem, tempor nec ipsum at, condimentum finibus ligula. ",
                website       : "www.an.ch",
                twitter       : "@nortAlexander",
                picture       : "http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                email         : "north@usi.ch"
      },
          {
              ref : "Luigi Frunzio"
          }
      ],
      abstract : "Fusce sollicitudin, eros eget porta consequat, enim ipsum pretium ligula, non iaculis ipsum massa in velit. Proin nulla enim, euismod elementum sem id, congue sagittis purus. Praesent sem augue, fringilla eu sodales quis, dapibus vitae nisl.",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    }
    ,
    {
      name     : "ICWE Mobile Web App",
      date     : new Date('Thurs Nov 26 2015 09:10:00 GMT+0100 (CET)'),
      place    : "USI auditorium",
        speakers  : [{
                name          : "Luigi Frunzio",
                organisation  : "USI",
                bio           : "Dummy",
                website       : "www.luigifrunzio.ch",
                twitter       : "@luigifrunzio",
                picture       : "http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png"
      }],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      name     : "Atelier Beats Group Project",
      date     : new Date('Fri Nov 28 2015 10:10:00 GMT+0100 (CET)'),
      place    : "USI auditorium",
        speakers  : [{
                name          : "Davide Cammarata",
                organisation  : "USI",
                bio           : "Fusce ultricies massa id elit scelerisque rhoncus. Vivamus mollis laoreet nunc ut volutpat. Duis vestibulum eros velit, id scelerisque tortor porta ac. Vivamus sit amet elementum enim. Etiam sed lectus pulvinar, placerat massa at, vehicula tortor. Pellentesque faucibus felis velit, ac vehicula est posuere a. Phasellus a neque at elit condimentum condimentum volutpat eget velit. Etiam commodo nulla lorem, ac varius lacus aliquam ut. Nunc sed massa nec erat pulvinar aliquam. Vivamus ornare dui at pulvinar pellentesque. Aliquam a viverra nulla.",
                website       : "www.cammarata.ch",
                twitter       : "@dcamma",
                picture       : "http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                email         : "camma@usi.ch"
      }],
      abstract : "Dummy Dummy",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    },
    {
      name     : "Atelier Beats Group Project",
      date     : new Date('Fri Nov 29 2015 10:10:00 GMT+0100 (CET)'),
      place    : "USI auditorium",
        speakers  : [{
                ref: "Davide Cammarata"},
                {ref: "Marco Calzana"}
      ],
      abstract : "Fusce ultricies massa id elit scelerisque rhoncus. Vivamus mollis laoreet nunc ut volutpat. Duis vestibulum eros velit, id scelerisque tortor porta ac. Vivamus sit amet elementum enim. Etiam sed lectus pulvinar, placerat massa at, vehicula tortor. Pellentesque faucibus felis velit, ac vehicula est posuere a. Phasellus a neque at elit condimentum condimentum volutpat eget velit. Etiam commodo nulla lorem, ac varius lacus aliquam ut. Nunc sed massa nec erat pulvinar aliquam. Vivamus ornare dui at pulvinar pellentesque. Aliquam a viverra nulla.",
      kind     : "Talk",
      pdf      : "no pdf",
      feedback : []
    }
  ]
};


var events = {
  name : 'Event',
  data : []
};

var speakers = {
  name : 'Speaker',
  data : []
};

program.events.forEach(function (e){
    e._id = ObjectId();
    for(var i = 0; i < e.speakers.length; i++){
        if(!e.speakers[i].ref) {
            var speaker = e.speakers[i];
            speaker._id = ObjectId();
            speaker.events = [e._id];
            speakers.data.push(speaker);
        }
    }
});
program.events.forEach(function (e){
    e._id = ObjectId();
    for(var i = 0; i < e.speakers.length; i++){
        if(e.speakers[i].ref) {
            for (var j = 0; j < speakers.data.length; j++) {
                if (e.speakers[i].ref == speakers.data[j].name) {
                    e.speakers[i] = speakers.data[j]._id
                    speakers.data[j].events.push(e._id);
                }
            }
        }
    }
    events.data.push(e)
});

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
seedData.push(speakers);
seedData.push(events);
seedData.push(tweets);
seedData.push(sponsor);
module.exports = seedData;
