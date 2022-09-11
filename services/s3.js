require("dotenv").config();
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.S3_BUCKET;
const region = process.env.S3_REGION;
const accessKeyId = process.env.S3_ACCESS_KEY;
const secretAccessKey = process.env.S3_ACCESS_SECRET;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
    ACL: 'public-read',
    ContentType: file.mimetype,
    ContentDisposition: 'inline',
  };

  return s3.upload(uploadParams).promise();
}

function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}

function deleteFile(fileKey) {
  const deleteParams = {
    Bucket: bucketName,
    Key: fileKey,
  };
  return s3.deleteObject(deleteParams).promise();
}

module.exports = { upload, unlinkFile, uploadFile, getFileStream, deleteFile };
