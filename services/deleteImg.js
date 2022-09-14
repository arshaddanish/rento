const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

let deleteImg = async (name) => {
  try {
    const doc = await gfs.files.deleteOne({
      filename: name,
    });
    // console.log(doc);
  } catch (error) {
    // console.log(error);
  }
};

module.exports = deleteImg;
