const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the events route" }));

router.get(`/:group_id/events`, (req, res) => {
  Event.findById(req.body)
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ noeventsfound: "No events found" }))
});

module.exports = router;