const mongoose = require("mongoose");
const db = require("./keys_dev").mongoURI;
const User = require("../models/User");
const Group = require("../models/Group");
const Event = require("../models/Event");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Seeded successfully"))
  .catch(err => console.log(err));

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