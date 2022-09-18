const express = require("express");
const app = express();
const User = require("../models/user");
const { userAuth } = require("../middleware/userAuth");
const { adminAuth } = require("../middleware/adminAuth");

app.post("/api/verification", userAuth, async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(req.user._id, {
      verStatus: "Pending",
      aadharImg: req.body.aadharImg,
    });
    console.log(update);
    res.status(200).send("Verification request sent");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/api/verification/:id", adminAuth, async (req, res) => {
  var mode = 0;
  if (req.body.verStatus === "Verified") mode = 1;

  try {
    await User.findByIdAndUpdate(req.params.id, {
      $set: { verStatus: req.body.verStatus, mode: mode, verDate: Date.now() },
    });

    res.status(200).send("Verification status updated");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/verification", adminAuth, async (req, res) => {
  try {
    const users = await User.find({ verStatus: "Pending" }).select("-password");
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/verification-history", adminAuth, async (req, res) => {
  try {
    const users = await User.find({ verStatus: "Verified" })
      .select("-password")
      .sort({ verDate: -1 });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
