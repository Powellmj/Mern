const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const keys = require("../config/keys");

aws.config.update({
  secretAccessKey: keys.secretAccessKey,
  accessKeyId: keys.accessKeyId
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JEPG and PNG"), false);
  }
}

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: "mern-meetin-pro",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
