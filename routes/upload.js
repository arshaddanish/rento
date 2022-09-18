const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const upload = require("../middleware/upload");

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", function () {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads",
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

app.post("/api/upload", upload.single("img"), (req, res) => {
  res.send(req.file.filename);
});

app.get("/api/upload", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }
    return res.json(files);
  });
});

app.get("/api/upload/:name", (req, res) => {
  gfs.files.findOne({ filename: req.params.name }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    return res.json(file);
  });
});

app.get("/api/image/:name", (req, res) => {
  gfs.files.findOne({ filename: req.params.name }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      const readstream = gridfsBucket.openDownloadStream(file._id);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

// app.delete("/api/upload", async (req, res) => {
//   try {
//     const doc = await gfs.files.deleteMany({
//       $or: [{ contentType: "image/jpeg" }, { contentType: "image/png" }],
//     });
//     res.send(doc);
//   } catch {
//     res.send("An error occured.");
//   }
// });

app.delete("/api/upload/:name", async (req, res) => {
  // console.log(req.params.name);
  try {
    const doc = await gfs.files.deleteOne({
      filename: req.params.name,
    });
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/test-uploads", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }
    res.render("test_upload", { files: files });
  });
});

module.exports = app;
