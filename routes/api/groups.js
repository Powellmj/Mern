const express = require("express");
const router = express.Router();
const Group = require('../../models/Group');

router.get("/test", (req, res) => res.json({ msg: "This is the groups route" }));

router.get("/", (req, res) => {
  Group.find()
    .then(groups => res.json(groups))
    .catch(err => res.status(404).json({ nogroupsfound: "No groups found" }))
});
const passport = require('passport');
const Group = require('../../models/Group');
const validateGroupInput = require('../../validation/group');

router.get("/test", (req, res) => res.json({ msg: "This is the groups route" }));

router.post("/", 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.body)
    const { errors, isValid } = validateGroupInput(req.body);

    if (!isValid) {
      console.log(errors)
      return res.status(400).json(errors);
    }

    const newGroup = new Group({
      title: req.body.title,
      desc: req.body.desc,
      location: req.body.location,
      owner_id: req.body.owner_id
    });

    newGroup.save().then(group => res.json(group));
  }
);

module.exports = router;