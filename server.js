require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const cors = require("cors");
app.use(cors());

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.port || port, () => {
  console.log(`Rento app listening on port ${port}`);
});
