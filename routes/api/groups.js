const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Group = require('../../models/Group');

router.get("/test", (req, res) => res.json({ msg: "This is the groups route" }));

router.get('/:id', (req, res) => {
  Group.findById('5e432584119bdd8b935f72a3')
    .then(group => res.json(group))
    .catch(err =>
      res.status(404).json({ nogroupfound: 'No group found with that ID' })
    );
});

router.post('/',
  (req, res) => {

    const newGroup = new Group({
      title: req.body.title,
      desc: req.body.desc,
      location: req.body.location,
      owner: req.body.owner
    });

    newGroup.save().then(group => res.json(group));
  }
);


module.exports = router;