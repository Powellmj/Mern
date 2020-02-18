const mongoose = require("mongoose");
const db = require("./keys_dev").mongoURI;
const User = require("../models/User");
const Group = require("../models/Group");
const Event = require("../models/Event");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Seeded successfully"))
  .catch(err => console.log(err));

////////////// GROUPS & EVENTS /////////////////////////

// new Group({
//   title: "Club Hel",
//   desc: "Virtual Reality",
//   location: "The Matrix",
//   organizer: "Neo",
//   picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/Matrix.png"
// }).save()
//   .then(group => {
//     new Event({
//       title: "Meeting the Architect",
//       desc: "Here is you chance to ask the Architect your burning questions",
//       location: "unknown",
//       group_id: group._id,
//       picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/Architect.png",
//       event_start: "2020-03-01",
//       event_end: "2020-03-02"
//     }).save()
//       .then(event => {
//         group.events.push(event._id)
//         group.save()
//       }),
//     new Event({
//       title: "Party at Club Hel",
//       desc: "Free food free drinks",
//       location: "Club Hel",
//       group_id: group._id,
//       picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/club+hel.png",
//       event_start: "2020-03-01",
//       event_end: "2020-03-20"
//     }).save()
//       .then(event => {
//         group.events.push(event._id)
//         group.save()
//       }),
//     new Event({
//       title: "Making a decision",
//       desc: "Your turn to pick a pill",
//       location: "unknown",
//       group_id: group._id,
//       picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/redorblue.jpeg",
//       event_start: "2020-04-01",
//       event_end: "2020-04-01"
//     }).save()
//       .then(event => {
//         group.events.push(event._id)
//         group.save()
//       })
//   })

// new Group({
//   title: "Singles Meetup",
//   desc: "For lonely single people who are ready to mingle",
//   location: "Cleveland, Ohio",
//   organizer: "Bart Simpson",
//   picture: "https://secure.meetupstatic.com/photos/event/d/2/c/c/600_475433964.jpeg"
//   })
//   .save()
//   .then(group => {
//     new Event({
//       title: "Mini golf night",
//       desc: "Come join other single people in this wonderful mini golf event",
//       location: "mini golf court",
//       group_id: group._id,
//       picture_id:
//         "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/mini+golf.jpeg",
//       event_start: "2020-03-01",
//       event_end: "2020-03-02"
//     })
//       .save()
//       .then(event => {
//         group.events.push(event._id);
//         group.save();
//       })
//   });

// new Group({
//   title: "Columbus Baking Club",
//   desc: "We are a group of people who enjoy baking and learning baking from each other",
//   location: "Columbus, Ohio",
//   organizer: "Minnie Mouse",
//   picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/baking.jpg"
//   }).save()
//   .then(group => {
//     new Event({
//       title: "Learn how to make macarons",
//       desc:
//         "This is a rare opportunity to learn how to make macarons with both Italian and French methods. ",
//       location: "Michael's house",
//       group_id: group._id,
//       picture_id:
//         "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/macaron.jpeg",
//       event_start: "2020-03-01",
//       event_end: "2020-03-02"
//     })
//       .save()
//       .then(event => {
//         group.events.push(event._id);
//         group.save();
//       }),
//       new Event({
//         title: "Cake decoration master class",
//         desc: "Come here to learn how to decorate cakes. Our guest master baker will teach you the art of cake decoration, ranging all the way from a galaxy cake to a classic chocolate cake",
//         location: "to be determined",
//         group_id: group._id,
//         picture_id:
//           "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/cakedecor.jpg",
//         event_start: "2020-03-05",
//         event_end: "2020-03-05"
//       })
//         .save()
//         .then(event => {
//           group.events.push(event._id);
//           group.save();
//         })
//   })


//   new Group({
//     title: "Chinese cuisine lovers",
//     desc: "We share and learn making different regional Chinese cuisines",
//     location: "Your local Chinese restaurant",
//     organizer: "Chinese Master Chef",
//     picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/chinesefood.jpg"
//   }).save()
//     .then(group => {
//       new Event({
//         title: "Spicy and numbing",
//         desc: "Come to taste test one of the most famous regional Chinese cruisines - Sichuan food",
//         location: "Your local Chinese restaurant",
//         group_id: group._id,
//         picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/sichuanfood.jpg",
//         event_start: "2020-03-15",
//         event_end: "2020-03-16"
//       }).save()
//         .then(event => {
//           group.events.push(event._id)
//           group.save()
//         }),
//       new Event({
//         title: "Chinese meet the Middle East",
//         desc: "An easy gathering event grill up some XinJiang style BBQ",
//         location: "Whetstone Park",
//         group_id: group._id,
//         picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/xinjianbbq.jpg",
//         event_start: "2020-03-05",
//         event_end: "2020-03-06"
//       }).save()
//         .then(event => {
//           group.events.push(event._id)
//           group.save()
//         })
//   })

  // new Group({
  //   title: "Pet Walk",
  //   desc: "Bring your pets to hang out. All types of pets allowed",
  //   location: "At a state park near by",
  //   organizer: "Neo",
  //   picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/petclub.jpg"
  // }).save()
  // .then(group => {
  //   new Event({
  //     title: "Corgi day",
  //     desc: "Bring your stubby legged friend!!",
  //     location: "visible only to members",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/corgi.jpg",
  //     event_start: "2020-03-07",
  //     event_end: "2020-03-07"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     }),
  //   new Event({
  //     title: "Frenchie day",
  //     desc: "Bring your adorable frenchie",
  //     location: "visible only to members",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/frenchie.jpg",
  //     event_start: "2020-03-14",
  //     event_end: "2020-03-14"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     }),
  //   new Event({
  //     title: "Husky day",
  //     desc: "Bring your huskies. Ice will be provided",
  //     location: "visible only to members",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/babyhusky.jpg",
  //     event_start: "2020-03-21",
  //     event_end: "2020-03-21"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     })
  // })


  // new Group({
  //   title: "Ohio Silent Reading",
  //   desc: "For people who want to read together",
  //   location: "Library",
  //   organizer: "Agnes Gru",
  //   picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/agnes+reading.jpg"
  // }).save()
  // .then(group => {
  //   new Event({
  //     title: "Boba Night",
  //     desc: "Silent reading wit delicious boba",
  //     location: "Cafe Bobalicious",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/boba.jpeg",
  //     event_start: "2020-03-10",
  //     event_end: "2020-03-10"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     }),
  //   new Event({
  //     title: "Horror themed book night",
  //     desc: "Come read your horror books at this abandoned haunted hospital",
  //     location: "abandoned haunted hospital",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/horrorbook.jpeg",
  //     event_start: "2020-03-17",
  //     event_end: "2020-03-17"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     })
  // })


  // new Group({
  //   title: "EDM Lovers",
  //   desc:
  //     "We love all sorts of EDM. We have different EDM themed days. main playlist: https://www.youtube.com/watch?v=VIWVfkF2IeI",
  //   location: "Columbus, Ohio",
  //   organizer: "EDM enthusiast",
  //   picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/edm.jpg"
  // })
  //   .save()
  //   .then(group => {
  //     new Event({
  //       title: "First event",
  //       desc: "First time hosting an event",
  //       location: "location TBD",
  //       group_id: group._id,
  //       picture_id:
  //         "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/edm2.jpg",
  //       event_start: "2020-02-20",
  //       event_end: "2020-02-22"
  //     })
  //       .save()
  //       .then(event => {
  //         group.events.push(event._id);
  //         group.save();
  //       }),
  //   new Event({
  //     title: "Silent Disco",
  //     desc: "We are launching our first silent disco event at one of the most epic venues in Downtown Columbus!",
  //     location: "Club Disco",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/silent+disco.jpg",
  //     event_start: "2020-03-01",
  //     event_end: "2020-03-20"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     })
  //   });


  // new Group({
  //   title: "Grandma's Italian Cooking",
  //   desc: "Come learn and taste some homemade Italian food",
  //   location: "Columbus Ohio",
  //   organizer: "Grandson",
  //   picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/pasta.jpg"
  // }).save()
  // .then(group => {
  //   new Event({
  //     title: "Learn the different yet easy to make pastas",
  //     desc: "Local Italian grandmas will teach you how to make different pastas",
  //     location: "Columbus Community Center",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/making+pasta.jpg",
  //     event_start: "2020-03-01",
  //     event_end: "2020-03-01"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     }),
  //   new Event({
  //     title: "Pasta Sauces",
  //     desc: "This meetin will help you master all types of pasta sauces",
  //     location: "Columbus Community Center",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/pasta+sauces.jpg",
  //     event_start: "2020-03-03",
  //     event_end: "2020-03-03"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     }),
  //   new Event({
  //     title: "Cannolis",
  //     desc: "Learn how to make different cannoli flavors from local grandmas",
  //     location: "Columbus Community Center",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/cannoli.jpg",
  //     event_start: "2020-04-01",
  //     event_end: "2020-04-01"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     })
  // })


  // new Group({
  //   title: "Columbus Tabletop Gamers",
  //   desc: "Come to our meetins, bring your own games, and meet like minded people",
  //   location: "Columbus, Ohio",
  //   organizer: "Tabletop master",
  //   picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/tabletop.jpg"
  // }).save()
  // .then(group => {
  //   new Event({
  //     title: "Gambling night",
  //     desc: "We will provide the poker chips",
  //     location: "TBD",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/poker.jpg",
  //     event_start: "2020-03-01",
  //     event_end: "2020-03-02"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     }),
  //   new Event({
  //     title: "BYO Card Games",
  //     desc: "Bring the card games that you want to share with your friends",
  //     location: "1234 Avenue Way, Alexandria, 43001, OH",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/cardgame.jpg",
  //     event_start: "2020-03-10",
  //     event_end: "2020-03-10"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     }),
  //   new Event({
  //     title: "Monopoly night",
  //     desc: "We will have 5 empty monopoly boards ready for a fun night",
  //     location: "1234 Avenue Way, Alexandria, 43001, OH",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/monopoly.jpg",
  //     event_start: "2020-03-15",
  //     event_end: "2020-03-15"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     })
  // })


  // new Group({
  //   title: "Cycling club",
  //   desc: "We love cycling",
  //   location: "Cleveland, Ohio",
  //   organizer: "Shawn",
  //   picture: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/cycling.jpg"
  // }).save()
  // .then(group => {
  //   new Event({
  //     title: "Cycling along the lake",
  //     desc: "We will have our first cycling event along Lake Erie",
  //     location: "Lake Erie",
  //     group_id: group._id,
  //     picture_id: "https://mern-meetin-pro.s3-us-west-1.amazonaws.com/cyclingcoast.jpg",
  //     event_start: "2020-03-24",
  //     event_end: "2020-03-25"
  //   }).save()
  //     .then(event => {
  //       group.events.push(event._id)
  //       group.save()
  //     })
  // })

  /////////////////// POPULATE ATTENDEES AND GROUP MEMBERS ///////////