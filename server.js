require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Grid = require("gridfs-stream");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB connection with gfs for file storage
let gfs;
mongoose.connect(process.env.DB_URI);
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error: "));
conn.once("open", function () {
  console.log("Connected successfully");
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Serve react application
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// APIs
const BlogRouter = require("./routes/blogs");
app.use(BlogRouter);

// Start server
const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log(`Rento app listening on port ${port}`);
});
