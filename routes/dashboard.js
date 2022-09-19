const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../models/user");
const Item = require("../models/item");
const validateSubscription = require("../services/validateSubscription");
const { Subscription, SubscriptionPlan } = require("../models/subscription");
const { adminAuth } = require("../middleware/adminAuth");

app.get("/api/dashboard", adminAuth, async (req, res) => {
  validateSubscription();
  const userCount = await User.countDocuments();
  const buyerCount = await User.countDocuments({ verStatus: "Not Verified" });
  const sellerCount = await User.countDocuments({ verStatus: "Verified" });
  const itemCount = await Item.countDocuments({ status: 1 });

  var today = Date.now();
  var total = 0;

  const activeSellerCount = await Subscription.countDocuments({
    endDate: { $gt: today },
  });

  const subscriptions = await Subscription.aggregate([
    { $match: { _id: { $exists: true } } },
    { $group: { _id: "$planId", count: { $sum: 1 } } },
  ]);

  for (let i = 0; i < subscriptions.length; i++) {
    const subscription = subscriptions[i];
    const plan = await SubscriptionPlan.findById(subscription._id);
    total = total + subscription.count * plan.amount;
  }

  res.status(200).send({
    userCount: userCount,
    buyerCount: buyerCount,
    sellerCount: sellerCount,
    itemCount: itemCount,
    activeSellerCount: activeSellerCount,
    subscriptionRevenue: total,
  });
});

module.exports = app;
