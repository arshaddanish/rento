require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// DB connection
mongoose.connect(process.env.DB_URI);
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error: "));
conn.once("open", function () {
  console.log("Connected successfully");
});

// Serve react application
app.get("/", (req, res) => {
  res.send("React App!");
});

// APIs
const BlogRouter = require("./routes/blogs");
app.use(BlogRouter);
const UploadRouter = require("./routes/upload");
app.use(UploadRouter);

// Start server
const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log(`Rento app listening on port ${port}`);
});
