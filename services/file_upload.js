const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const keys = require("../config/aws_keys");

aws.config.update({
  secretAccessKey: keys.secretAccessKey,
  accessKeyId: keys.accessKeyId
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "mern-meetin-pro",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
