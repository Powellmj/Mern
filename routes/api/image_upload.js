const express = require("express");
const router = express.Router();

const upload = require("../../services/file_upload");

const singleUpload = upload.single('image');

router.post('/', (req, res) => {

  singleUpload(req, res, (err) => {

    return res.json({'imageURL': req.file.location});
  });
});