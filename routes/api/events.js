const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require('../../models/Event');
const Group = require('../../models/Group');
const passport = require('passport');
const validateEventInput = require('../../validation/event');

router.get("/test", (req, res) => res.json({ msg: "This is the events route" }));

// use query here since in our api util we are using query
router.get("/", (req, res) => (
  Event.find({ group_id: req.query.group_id })
    .then(events => res.json(events))
));

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
      event_date: req.body.event_date,
      start_time: req.body.start_time,
      end_time: req.body.end_time
    });

    
    newEvent.save().then(event => {
      Group.findById({ group: req.params.group_id })
        .then(group => {
          group.events.push(event)
          group.save().then(() => res.json(event))
        })
      });
  });

module.exports = router;