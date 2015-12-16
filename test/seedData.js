'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;



var program = {
  events: [
    {
      name     : "USI Social Web",
        date     : new Date("Thurs Dec 17 2015 14:50:30 GMT+0100 (CET)"),
        endDate     : new Date("Thurs Dec 17 2015 14:53:30 GMT+0100 (CET)"),
      place    : "USI auditorium",
      speakers  : [
          {
              name          : "Samuel Adolfo Cruz Alegría",
              organisation  : "Web Atelier - Final Project",
              bio           : "Samuel is a nice guy from Mexico",
              website       : "atelier.inf.usi.ch/~cruzas/",
              picture       : "http://i.imgur.com/XYCafWa.jpg",
              twitter       : "@cruzas",
              email         : "cruzas@usi.ch"
          }],
      abstract : "A few years ago, the USI Social Media Board decided to use the major social networks to communicate facts and on events related to the university.For this purpose, a series of official USI profiles were created (Facebook, Twitter, LinkedIn, and YouTube).\n The project intends to implement a web application to create a visual aggregation of all relevant content available on the major social channels with the use of hashtags or keywords.\n The interface will allow the choice of various kinds of layouts and the possibility to integrate the result on web pages. The user can then view on his/her device all posts, photos and videos related to what is being searched and further restrict such content with filters.",
      kind     : "Talk"
    },
    {
      name     : "USI Big Brother",
        date     : new Date("Thurs Dec 17 2015 14:53:30 GMT+0100 (CET)"),
        endDate     : new Date("Thurs Dec 17 2015 14:57:00 GMT+0100 (CET)"),
      place    : "USI auditorium",
        speakers  : [ {
                name          : "Andrea Vicari ",
                organisation  : "Web Atelier - Final Project",
                bio           : "Andrea Vicari was born on March 10th 1995 in Enna, which is a small town in the middle of the Sicily, in the Southern part of Italy. He has been living there for 19 years. After having attended the Liceo Classico in Enna, he finally decided to move to Lugano in order to join the faculty of informatics at USI. The Liceo Classico is school with an emphasy on humanities, so he is not used to scientific subjects but he is really motivated in reaching my aims and do all my best. He has been interested in Informatics since 2004, when my parents first bought me a Personal Computer. He used to spent my days trying to figure out how this incredible machine worked and maybe, some day, be able to create programs all by myself. In his family he is regarded as the one who can do everything with a keyboard and a mouse. He think that they exagerate with their considerations, but he wish that other people, one day, would say the same about him. Finally, after more or less 10 years, he had the possibility to discover this world deeper than before; He tried to do my best to have good results and work in this field that has always interested him.",
                website       : "atelier.inf.usi.ch/~vicara/",
                twitter       : "@vicara",
                picture       : "http://i.imgur.com/NBaWeaq.jpg",
                email         : "vicara@usi.ch"
            }],
      abstract : "USI Big Brother is a project in which We use sensors to measure the levels of volume and light in different parts of the open space, as well as the room temperature.The data is portrayed as graphs in the live feed section of this website as well as being stored in the database for future reference. We use the Web Liquid Streams framework to implement the topology connecting the sensors, the browser and the server all together to relay and store information as well as give visual feedback, as graphs on the browser and as LEDs in the open space.",
      kind     : "Talk"
    },
    {
      name     : "EZ-Stats",
        date     : new Date("Thurs Dec 17 2015 14:43:30 GMT+0100 (CET)"),
        endDate     : new Date("Thurs Dec 17 2015 14:47:00 GMT+0100 (CET)"),
      place    : "USI auditorium",
      abstract : "The Goal of EZ-Stats has created a collaborative framework for visual and numerical data regarding Basketball. The basic idea is to simplify the submission of data after a match.",
      kind     : "Talk",
      pdf      : ["http://ch.mathworks.com/moler/random.pdf", "http://ch.mathworks.com/moler/random.pdfjaflk"],
        speakers  :[{
            name        : "Luca Scibona",
            organisation  : "Web Atelier - Final Project",
            bio           : "He was born in Bologna in 1995. He studied Informatics at USI in the Bachelor course. He currently live in Lugano.His interests are music, football and video games. He also like to play chess and guitar in my free time.",
            website       : "atelier.inf.usi.ch/~scibol",
            twitter       : "@scibol",
            picture       : "http://i.imgur.com/QT5TZ7E.jpg",
            email         : "scibol@usi.ch"
        }
        ]
    },
    {
      name     : "ASQ-PDF Import",
        date     : new Date("Thurs Dec 17 2015 14:47:30 GMT+0100 (CET)"),
        endDate     : new Date("Thurs Dec 17 2015 14:50:30 GMT+0100 (CET)"),
      place    : "USI auditorium",
        speakers  : [
            {
                name          : "Lucas Pennati",
                organisation  : "USI",
                bio           : "Pennati Lucas is currently attending the faculty of Informatics at Universita di Lugano. During his studies he achieved an IB Diploma, with a heavy emphasis on scientific subjects, more specifically Physics and Chemistry. After the IB Diploma, he attended an ETH Preparation Course, again with an emphasis on scientific subjects, this time including Biology.\nIn the past years he has worked on numerous projects, which include an entire script of Calculus written in LaTeX, as well as a simulation system to verify the effectiveness of the new PVP system in Lugano. Both of these projects are open source, and available to download.\n His main areas of focus in Informatics are ways to improve Human‐Machine interaction by using well designed GUIs, as well as embedded computing, in order to be able to completely monitor a persons health. ",
                website       : "atelier.inf.usi.ch/~pennal",
                twitter       : "@pennaL",
                picture       : "http://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png",
                email         : "pennal@usi.ch"
            },
      ],
      abstract : "The idea is to export pdf and beamers slides as HTML slides for use with ASQ. There is basic subset support and basic animation support.",
      kind     : "Talk",
      pdf      : ["http://www.cypherpunks.to/~peter/06_random.pdf"]
    }
    ,
    {
      name     : "ICWE Mobile Web App",
        date     : new Date("Thurs Dec 17 2015 14:40:00 GMT+0100 (CET)"),
        endDate     : new Date("Thurs Dec 17 2015 14:43:30 GMT+0100 (CET)"),
      place    : "USI auditorium",
        speakers  : [{
                name          : "Samuele Decarli",
                organisation  : "Web Atelier - Final Project",
                bio           : "Born in Switzerland in 1993 he has lived there all his life, he has always been curious about many things: informatics, biology, history, philosophy, geographyInformatics has interested him for a long time, mainly because of video games, which he often spend more time modifying rather than playing, and because he like a good, challenging problem to solve, but also because of more serious reasons. Be it as a tool of research or as a science in its own right I think informatics has the wonderful capacity of changing not only the world, but also the way we see it. For example: without algorithms and programs, the idea of DNA and genes encoding instructions to create living things would probably be utterly alien to us.",
                website       : "atelier.inf.usi.ch/~decars/",
                twitter       : "@decars",
                picture       : "http://i.imgur.com/OFrYDPE.jpg",
                email         : "decars@usi.ch"
      }],
      abstract : "The aim of this project is to create a web application for the ICWE 2016 web conference.",
      kind     : "Talk"
    },
    {
      name     : "Atelier Beats Group Project",
        date     : new Date("Thurs Dec 17 2015 14:57:00 GMT+0100 (CET)"),
        endDate     : new Date("Thurs Dec 17 2015 15:00:00 GMT+0100 (CET)"),
      place    : "USI auditorium",
        speakers  : [{
                name          : "Davide Cammarata",
                organisation  : "Web Atelier - Final Project",
                bio           : " Davide Cammarata is a Bachelor student in the Faculty of Informatics at the Università della Svizzera italiana (USI) in Lugano, Switzerlad.",
                website       : "http://atelier.inf.unisi.ch/~cammad",
                twitter       : "@dcamma",
                picture       : "http://i.imgur.com/J8OgvqR.jpg",
                email         : "cammad@usi.ch"
      }],
      abstract : "Atelier Beats Group Project is based on the work done in class, but with many additional features.",
      kind     : "Talk"
    },
      {
          name     : "Introduction",
          date     : new Date("Thurs Dec 17 2015 14:00:00 GMT+0100 (CET)"),
          endDate     : new Date("Thurs Dec 17 2015 14:05:00 GMT+0100 (CET)"),
          place    : "USI auditorium",
          speakers  : [{
              ref: "kai.hormann@usi.ch"
          }],
          abstract : "Small introductions to the event.",
          kind     : "Intro"
      },
      {
          name     : "Programming Fundamentals I",
          date     : new Date("Thurs Dec 17 2015 14:05:00 GMT+0100 (CET)"),
          endDate     : new Date("Thurs Dec 17 2015 14:25:00 GMT+0100 (CET)"),
          place    : "USI auditorium",
          speakers  : [{
              name          : "Nate Nystrom",
              organisation  : "USI - Final Projects",
              bio           : "His research interests include programming languages, compilers, tools, and methodologies for constructing safe, secure, and efficient systems.",
              website       : "www.inf.usi.ch/faculty/nystrom",
              picture       : "http://i.imgur.com/Rtevr9L.jpg",
              email         : "nate.nystrom@usi.ch"
          }],
          abstract : "PF1 final projects presentations",
          kind     : "Intro"
      }
      ,
      {
          name     : "Software Atelier I ",
          date     : new Date("Thurs Dec 17 2015 14:25:00 GMT+0100 (CET)"),
          endDate     : new Date("Thurs Dec 17 2015 14:35:00 GMT+0100 (CET)"),
          place    : "USI auditorium",
          speakers  : [{
              name: "Michele Lanza",
              organisation: "USI - Final Projects",
              bio: "Michele Lanza is professor at the Faculty of Informatics, which he co-founded in 2004. His doctoral dissertation, completed in 2003 at the University of Bern, received the prestigious European Ernst Denert award for best thesis in software engineering of 2003. Prof. Lanza received the Credit Suisse Award for best teaching in 2007 and 2009.\n At the University of Lugano Prof. Lanza leads the REVEAL research group, working in the areas of software visualization, evolution, and analytics. He authored more than peer-reviewed 100 articles and the book 'Object-Oriented Metrics in Practice'.Prof. Lanza is involved in a number of scientific communities, and has served on more than 80 program committees. He is president of CHOOSE (the Swiss Object-Oriented Software Engineering society). He was program co-chair of ICSM (the IEEE International Conference on Software Maintenance) in 2010, of MSR (the Working Conference on Mining Software Repositories) in 2007 and 2008, of VISSOFT (the IEEE Working Conference on Software Visualization) in 2009, of IWPSE (the International Workshop on Principles of Software Evolution) in 2007. He was General Chair of ESUG 2007 (15th International Smalltalk Conference). He is steering committee member of ICSM, MSR, VISSOFT, Softvis, and IWPSE.",
              website: "www.inf.usi.ch/faculty/lanza/",
              picture: "http://www.inf.usi.ch/faculty/lanza/Pictures/comicLanza2.png",
              email: "michele.lanza@usi.ch"
          },
              {
                  name          : "Andrea Mocci",
                  organisation  : "USI - Final Projects",
                  bio           : "He is a Postdoctoral Researcher in the REVEAL group headed by Prof. Dr. Michele Lanza. His general research interests include software behavioral modeling, testing and analysis, lightweight formal methods, program comprehension, software design and mining software repositories. He got my B.Sc., M.Sc. and PhD at Politecnico di Milano, where he has been advised by Prof. Carlo Ghezzi of deepse group.",
                  website       : "www.inf.usi.ch/postdoc/mocci",
                  picture       : "http://www.inf.usi.ch/postdoc/mocci/images/me-fb.jpg",
                  email         : "andrea.mocci@gmail.com"
              }],
          abstract : "Software Atelier final presentation",
          kind     : "Intro"
      },
      {
          name     : "Software Atelier V",
          date     : new Date("Thurs Dec 17 2015 15:00:00 GMT+0100 (CET)"),
          endDate     : new Date("Thurs Dec 17 2015 15:10:00 GMT+0100 (CET)"),
          place    : "USI auditorium",
          speakers  : [{
              ref : "michele.lanza@usi.ch"
          },
              {
                  name          : "Mauro Prevostini",
                  organisation  : "USI - Final Projects",
                  bio           : "Mauro Prevostini received his Master degree in Electrical Engineering at the Swiss Federal Institute of Technology (ETH - Zurich) at the Department of Biomedical Engineering in 1994. Topic of the Thesis: 'On-Line Recognition of Masticatory Muscles Activity with Long-Time EMG Recorder'. Until 1997 he worked as network analyst in the banking domain.From 1997 to 2001 he lead the test and integration team of The Fantastic Corporation, a startup company developing software solutions for the broadband domain. Since October 2001 he is working at the Università della Svizzera italiana (USI) where he managed the project for the creation of the Faculty of Informatics (www.inf.usi.ch) from 2001 to 2004.Since 2004 he is the Program Manager of the Faculty. He is staff member of ALaRI (www.alari.ch) since 2001 supervising Master projects in Embedded Systems Design. He is member of the UMES Programme Committee of the Forum on specification and Design Languages (FDL - www.ecsi.org/fdl) of the European Electronic Chips and Systems design Initiative (ECSI - www.ecsi.org).Since 2005 until 2011 he was committee member of ated-ICT Ticino (www.ict-ticino.ch), the local ICT association.He is also independent consultant working for his own startup company, Dolphin Engineering (www.dolphin-engineering.ch).",
                  website       : "www.inf.usi.ch/prevostini/",
                  picture       : "http://www.inf.usi.ch/prevostini/mauro.jpg",
                  email         : "mauro.prevostini@usi.ch",
                  twitter       : "@prevo01"
              }],
          abstract : "Software Atelier V final presentation",
          kind     : "Intro"
      },
      {
          name     : "Computer Graphics",
          date     : new Date("Thurs Dec 17 2015 15:10:00 GMT+0100 (CET)"),
          endDate     : new Date("Thurs Dec 17 2015 15:30:00 GMT+0100 (CET)"),
          place    : "USI auditorium",
          speakers  : [{
              name          : "Kai Hormann",
              organisation  : "USI - Final Projects",
              bio           : "Kai Hormann is a full professor in the Faculty of Informatics at USI. He received a Ph.D. in computer science from the University of Erlangen in 2002 and spent two years as a postdoctoral research fellow at Caltech in Pasadena and the CNR in Pisa, before joining Clausthal University of Technology as an assistant professor in 2004. During the winter term 2007/2008 he visited Freie Universität Berlin as a BMS substitute professor and came to Lugano as an associate professor in 2009.\n His research interests are focussed on the mathematical foundations of geometry processing algorithms as well as their applications in computer graphics and related fields. In particular, he is working on generalized barycentric coordinates, subdivision of curves and surfaces, barycentric rational interpolation, and dynamic geometry processing.\n Professor Hormann has published over 60 papers in the professional literature and is an associate editor of Computer Aided Geometric Design, Computers & Graphics, and the Dolomites Research Notes on Approximation.",
              website       : "www.inf.usi.ch/hormann/",
              picture       : "http://www.inf.usi.ch/hormann/pictures/me.jpg",
              email         : "kai.hormann@usi.ch"
          }],
          abstract : "Computer Graphics projects presentations",
          kind     : "Intro"
      }
      ,
      {
          name     : "Human-Computer Interaction Design ",
          date     : new Date("Thurs Dec 17 2015 15:30:00 GMT+0100 (CET)"),
          endDate     : new Date("Thurs Dec 17 2015 15:50:00 GMT+0100 (CET)"),
          place    : "USI auditorium",
          speakers  : [{
              name          : "Monica Landoni",
              organisation  : "USI - Final Projects",
              bio           : "Dr Monica Landoni is a senior research fellow at the Faculty of Informatics since January 2007. Previously, she was a lecturer in the Department of Computer and Information Sciences of the University of Strathclyde since 1998 and spent 2005 on a sabbatical position at PARC (formerly Xerox Parc) in Palo Alto, USA. She holds a PhD in Information Science, Department of Information Science, University of Strathclyde, 1997 and a Laurea in Scienze dell´Informazione from Università degli Studi of Milan.",
              website       : "http://usi.to/f7f",
              email         : "monica.landoni@usi.ch",
              picture       : "http://www.ebooklabitalia.com/wp-content/uploads/monica-landoni-100x100.jpg"
          }],
          abstract : "Human-Computer Interaction Design projects presentations",
          kind     : "Intro"
      }
      ,
      {
          name     : "Artificial IntellIgence Cup ",
          date     : new Date("Thurs Dec 17 2015 15:50:00 GMT+0100 (CET)"),
          endDate     : new Date("Thurs Dec 17 2015 15:59:59 GMT+0100 (CET)"),
          place    : "USI auditorium",
          speakers  : [{
              name          : "Luca Gambardella",
              organisation  : "USI - Final Projects",
              bio           : "Luca Maria Gambardella is director of IDSIA, Dalle Molle Institute for Artificial Intelligence in Manno, Lugano. He is Professor at SUPSI and Adjunct Professor at the Informatics Faculty at USI. He teaches the Algorithms course at DTI-SUPSI and the Artificial Intelligence module at the Informatics Faculty at USI. He is responsible of the Intelligent Systems Master Research Unit at SUPSI. His major research interests and publications are in the area of optimisation, simulation, swarm robotics, multi-agent learning, applied to academic and real-world problems. In particular, he has studied and developed influential and frequently cited Ant Colony Optimisation algorithms to solve travelling salesman problems, quadratic assignment problems, sequential ordering problems and vehicle routing problems. In these domains, the best-known solutions for many benchmark instances have been computed. He acts as a guest editor and reviewer for the most important journals in his field. He is leading projects for the Swiss National Science Foundation, Hasler Foundation, Swiss Commission for Technology and Innovation, EU Commission and Industries. He his Chief Scientific Officer of AntOptima, the spin-off company of IDSIA. To date (June 2013) he has published more than 200 publications. According to Google scholar his h-index is 47 and his articles have received more than 22000 citations. Luca Maria Gambardella is president of the Swiss Operations Research Society (SVOR/ASRO) and president of the jury of the Euro Excellence In Practice Award 2015 (EEPA 2015).",
              website       : "http://usi.to/f7f",
              email         : "luca.gambardella@usi.ch",
              picture:      "http://i.imgur.com/BHQRjsL.png"
          }],
          abstract : "Artificial IntellIgence Cup projects presentations",
          kind     : "Intro"
      }
      ,
      {
          name     : "Web Atelier ",
          date     : new Date("Thurs Dec 17 2015 14:35:00 GMT+0100 (CET)"),
          endDate     : new Date("Thurs Dec 17 2015 14:40:00 GMT+0100 (CET)"),
          place    : "USI auditorium",
          speakers  : [{
              name          : "Cesare Pautasso",
              organisation  : "USI - Final Projects",
              bio           : "Cesare Pautasso is associate professor in the Faculty of Informatics at the University of Lugano, Switzerland. Previously he was a researcher at the IBM Zurich Research Lab and a senior researcher at ETH Zurich, where he was awarded his PhD in 2004. His research focuses on building experimental systems to explore the intersection of model-driven software composition techniques, business process modeling languages, and autonomic/Grid computing. Recently he has developed an interest in Web 2.0 Mashups and Architectural Decision Modeling.He is the lead architect of JOpera (www.jopera.org), a powerful rapid service composition tool for Eclipse. His teaching and training activities both in academia and in industry cover advanced topics related to Web Development, Middleware, Service Oriented Architectures and emerging Web services technologies.He is a reviewer for several international funding agencies, including the EU FET-Open program. He is an active member of the ACM and the IEEE Computer Society where he has served on more than 100 program committees. He served as the general chair of the 9th European Conference on Web Services (ECOWS) hosted at USI in 2011.",
              website       : "http://www.pautasso.info",
              email         : "cesare.pautasso@usi.ch",
              picture:      "http://i.imgur.com/itS2UBU.png"
          }],
          abstract : "Web Atelier projects presentations",
          kind     : "Intro"
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

var speakerLinkNames = {};
var eventLinkNames = {};

function makeLinkName(object, names) {
    var name = object.name.replace(/ /g, '-');
    var count = 0;
    while(names[name] !== undefined) {
        console.log(name + " already exists!");
        count += 1;
        name = name.replace(/_[0-9]+$/g, '');
        name += "_" + count;
    }
    names[name] = null;

    return name;
}


program.events.forEach(function (e){
    e.linkName = makeLinkName(e, eventLinkNames);
    e._id = ObjectId();
    for(var i = 0; i < e.speakers.length; i++){
        e.speakers[i].events = [];
        if(!e.speakers[i].ref) {
            var speaker = e.speakers[i];
            speaker._id = ObjectId();
            speaker.events.push(e._id);
            speakers.data.push(speaker);
        }
    }
});
program.events.forEach(function (e) {
    for(var i = 0; i < e.speakers.length; i++) {
        if(e.speakers[i].ref) {
            for (var j = 0; j < speakers.data.length; j++) {
                if (e.speakers[i].ref == speakers.data[j].email) {
                    e.speakers[i] = speakers.data[j]._id;
                    speakers.data[j].events.push(e._id);
                }
            }
        }
    }
        events.data.push(e)
});

speakers.data.forEach(function(s) {
    s.linkName =  makeLinkName(s, speakerLinkNames);
});

var tweets = {
  name : 'Twitter',
  data : [
    {
      "_id"         : ObjectId(),
      "tweetId"     : 1234,
      "textId"      : "1234",
      name          : "Dart",
      username      : "DartV",
      text          : "#USI is doing the finals project presentations #USI",
      profile_image : 'http://nst.sky.it/content/dam/static/contentimages/original/sezioni/cinema/news/2014/01/02/darth-vader.jpeg'
    },
    {
      "_id"         : ObjectId(),
        "tweetId"   : 12344,
        "textId"    : "12344",
      name          : "Person1",
      username      : "USI",
      text          : "Our webApp is.UP()",
      profile_image : 'http://abs.twimg.com/sticky/default_profile_images/default_profile_1_normal.png'
    },
    {
      "_id"         : ObjectId(),
      "tweetId"     : 11234,
      "textId"      : "11234",
      name          : "Yoda",
      username      : "Yoda",
      text          : "Today at #USI we have some nice presentations",
      profile_image : 'http://www.spore.com/static/avatar/225/857/841/Yoda%20as.jpg'
    },
    {
      "_id"         : ObjectId(),
      "tweetId"     : 12234,
      "textId"      : "12234",
      name          : "Person3",
      username      : "USI",
      text          : "#ICWE16 !",
      profile_image : 'http://ecx.images-amazon.com/images/I/5113ZN8zXeL._AC_UL320_SR218,320_.jpg'
    }
  ]
};
var sponsor = {
  name: 'Sponsor',
  data: [
    {
      "_id"         : ObjectId(),
      logo_url      : "http://gelb-bewegt.post.ch/img/img_logo_die_post-de.png",
      company_name  : "La Posta Svizzera",
      website       : "http://www.post.ch/"
    },
    {
      "_id"         : ObjectId(),
      logo_url      : "http://www.ffs.ch/content/sbbshop/it/winterthur/07_eg_ag_sbbberatungundverkauf/_jcr_content/shop/logo.spooler.spoolimage.-1.gif/1302690069821/logo_sbb_reisebuero.gif",
      company_name  : "FFS",
      website       : "http://www.ffs.ch"
    },
    {
      "_id"         : ObjectId(),
      logo_url      : "http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_116x41dp.png",
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
