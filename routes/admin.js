const express = require("express");
const app = express();
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { adminAuth } = require("../middleware/adminAuth");

const generateToken = (id) => {
  return jwt.sign({ _id: id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

app.get("/api/admin", adminAuth, async (req, res) => {
  const admin = await Admin.find({});

  try {
    res.send(admin);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/admin", async (req, res) => {
  try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(req.body.password, salt);
    const admin = new Admin({ ...req.body, password: hashedPassword });
    await admin.save();
    res.json({
      _id: admin._id,
      username: admin.username,
      token: generateToken(admin._id),
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/admin", async (req, res) => {
  try {
    const doc = await Admin.deleteMany({});
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/admin-login", async (req, res) => {
  let { username, password } = req.body;
  try {
    let admin = await Admin.findOne({ username });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
