const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require('../../models/Event');
const Group = require('../../models/Group');
const User = require('../../models/User');
const passport = require('passport');
const validateEventInput = require('../../validation/event');

router.get("/test", (req, res) => res.json({ msg: "This is the events route" }));

// use query here since in our api util we are using query
router.get("/", (req, res) => (
  Event.find({ group_id: req.query.group_id })
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ noeventsfound: "No events found" }))
));

router.get("/:id", (req, res) => (
  Event.findById(req.params.id)
    .populate({
      path: 'attendees',
      select: ['name', 'email']
    })
    .then(event => res.json(event))
    .catch(err => res.status(404).json({ noeventfound: "No event found" }))
))

router.post("/",
passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newEvent = new Event({
      title: req.body.title,
      desc: req.body.desc,
      location: req.body.location,
      group_id: req.body.group_id,
      event_start: req.body.event_start,
      event_end: req.body.event_end
    });

    
    newEvent.save().then(event => {
      Group.findById(req.body.group_id)
        .then(group => {
          group.events.push(event)
          group.save().then(() => res.json(event))
        })
      });
});

router.patch("/:id", (req, res) => {
      // add logic later to check if user is a member of group
      const filter = { _id: req.params.id };
      Event.findOneAndUpdate(filter, { "$addToSet": { attendees: (Object.keys(req.body)[0]) }}, { new: true })
      .then(event => {
          res.json(event)
        })
        .catch(err => res.status(400).json({ unabletojoinevent: "Unable join the simulation" }))
    }
);

router.patch("/update/:id", (req, res) => {
  const filter = { _id: req.params.id };
  const update = req.body;
  Event.findOneAndUpdate(filter, update, { new: true })
    .then(event => res.json(event))
    .catch(err => res.status(400).json({ unabletoupdateevent: "Unable to update simulation" }))
})

module.exports = router;