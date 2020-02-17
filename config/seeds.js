const mongoose = require("mongoose");
const db = require("./keys_dev").mongoURI;
const User = require("../models/User");
const Group = require("../models/Group");
const Event = require("../models/Event");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Seeded successfully"))
  .catch(err => console.log(err));

// new User({
//   name: "doctor",
//   email: "doctor@gmail.com",
//   password: "password"
// }).save();

new Group({
  title: "Seed",
  desc: "seed desc",
  location: "online",
  organizer: "Seed master"
}).save();

new Event({
  title: "seed event",
  desc: "seed event description",
  location: "soil",
  
})
