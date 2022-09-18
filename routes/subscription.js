const express = require("express");
const app = express();
const { Subscription, SubscriptionPlan } = require("../models/subscription");
const { userAuth } = require("../middleware/userAuth");
const { adminAuth } = require("../middleware/adminAuth");

app.get("/api/subscriptions", adminAuth, async (req, res) => {
  const subscriptions = await Subscription.find({}).sort({ subDate: -1 });

  try {
    res.send(subscriptions);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/subscriptions", userAuth, async (req, res) => {
  if (req.user.verStatus !== "Verified")
    return res.send("Verify your account to subscribe.");

  const s = await Subscription.find({ sellerId: req.user._id }).sort({
    endDate: -1,
  });

  if (s[0] && s[0].endDate > Date.now())
    return res.send("You already have a subscription.");

  const subscription = new Subscription({
    ...req.body,
    sellerId: req.user._id,
  });

  try {
    await subscription.save();
    res.send(subscription);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/seller-subscriptions", userAuth, async (req, res) => {
  try {
    const s = await Subscription.find({
      sellerId: req.user._id,
    }).sort({
      endDate: -1,
    });

    let status = 0;
    if (s[0] && s[0].endDate > Date.now()) status = 1;

    let plans = [];
    for (let i = 0; i < s.length; i++) {
      let plan = await SubscriptionPlan.findById(s[i].planId);
      plans.push(plan);
    }

    res.send({ subscriptions: s, subStatus: status, plans: plans });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/subscriptions/:id", async (req, res) => {
  const subscription = await Subscription.findById(req.params.id);

  try {
    res.send(subscription);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.delete("/api/subscriptions", async (req, res) => {
//   const doc = await Subscription.deleteMany({});

//   try {
//     res.send(doc);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = app;
