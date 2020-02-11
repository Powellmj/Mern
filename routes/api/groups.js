const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the groups route" }));

router.get("/", (req, res) => {
  Group.find()
    .then(groups => res.json(groups))
    .catch(err => res.status(404).json({ nogroupsfound: "No groups found" }))
});

module.exports = router;