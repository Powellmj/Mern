const mongoose = require("mongoose");
const db = require("./keys_dev").mongoURI;
const User = require("../models/User");
const Group = require("../models/Group");
const Event = require("../models/Event");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Seeded successfully"))
  .catch(err => console.log(err));

new Group({
  title: "absolutely utmost newest Seed",
  desc: "seed desc",
  location: "online",
  organizer: "Seed master"
}).save()
  .then(group => {
    new Event({
      title: "seed event",
      desc: "seed event description",
      location: "soil",
      group_id: group._id,
      event_start: "2020-03-01",
      event_end: new Date("December 15, 2021")
    }).save()
      .then(event => {
        group.events.push(event._id)
        group.save()
      })
  }).then(console.log("done seeding"))


