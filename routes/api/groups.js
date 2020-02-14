const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = require('../../models/Group');
const passport = require('passport');
const validateGroupInput = require('../../validation/group');

router.get("/test", (req, res) => res.json({ msg: "This is the groups route" }));

router.get("/", (req, res) => {
  Group.find()
    .then(groups => res.json(groups))
    .catch(err => res.status(404).json({ nogroupsfound: "No groups found" }))
});

router.get("/:id", (req, res) => {
  Group.findById((req.params.id))
    .then(group => res.json(group))
    .catch(err =>
      res.status(404).json({ nogroupfound: 'No group found with that ID' })
    );
});

router.post("/", 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGroupInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newGroup = new Group({
        title: req.body.title,
        desc: req.body.desc,
        location: req.body.location,
        owner_id: req.body.owner_id,
        organizer: req.body.organizer,
    });

    newGroup.save().then(group => res.json(group));
    return res
  }
);

router.patch("/:id", (req, res) => {
  const filter = { _id: req.params.id }

  Group.findOneAndUpdate(filter, { "$addToSet": { members: (Object.keys(req.body)[0]) }}, { new: true }).then((group) => {
    res.json(group)
  })
    .catch(err => console.log(err))
});

module.exports = router;