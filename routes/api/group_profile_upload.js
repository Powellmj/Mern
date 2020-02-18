const express = require("express");
const router = express.Router();

const upload = require("../../services/file_upload");

const singleUpload = upload.single('image');

router.patch('/group/:id', (req, res) => {

  singleUpload(req, res, (err) => {

    if (err) {
      return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }

    const filter = { _id: req.params.id };

    Group.findOneAndUpdate(filter, { "$set": { picture: req.file.location }}, { new: true })
      .then(group => res.json(group))
  });
});

router.patch("/event/:id", (req, res) => {
  singleUpload(req, res, err => {
    if (err) {
      return res
        .status(422)
        .send({
          errors: [{ title: "File Upload Error", detail: err.message }]
        });
    }

    const filter = { _id: req.params.id };

    Event.findOneAndUpdate(
      filter,
      { "$set": { picture_id: req.file.location } },
      { new: true }
    ).then(event => res.json(event));
  });
});

module.exports = router;