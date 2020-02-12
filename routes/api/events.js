const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the events route" }));

router.get("/", (req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ noeventsfound: "No events found" }))
});

module.exports = router;