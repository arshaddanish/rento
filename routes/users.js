const express = require("express");
const app = express();
const User = require("../models/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { userAuth } = require("../middleware/userAuth");
const deleteImg = require("../services/deleteImg");

const generateToken = (id) => {
  return jwt.sign({ _id: id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

app.get("/api/users", async (req, res) => {
  const users = await User.find({});

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  try {
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/users", async (req, res) => {
  try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/users-login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/api/users/:id", async (req, res) => {
  try {
    if (req.body.profileImg && req.body.profileImg !== "") {
      const oldUser = await User.findById(req.params.id);
      await deleteImg(oldUser.profileImg);
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    users.forEach(async (item, index) => {
      if (item.aadharImg) {
        await deleteImg(item.aadharImg);
      }
      if (item.profileImg) {
        await deleteImg(item.profileImg);
      }
    });
    const doc = await User.deleteMany({});
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user.aadharImg) {
      await deleteImg(user.aadharImg);
    }
    if (user.profileImg) {
      await deleteImg(user.profileImg);
    }
    const doc = await User.deleteOne({ _id: req.params.id });
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});
