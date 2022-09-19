const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../models/user");
const Item = require("../models/item");
const {Subscription} = require("../models/subscription");
const { adminAuth } = require("../middleware/adminAuth");

app.get("/api/dashboard", adminAuth, async (req, res) => {
    const userCount = await User.countDocuments();
    const buyerCount = await User.countDocuments({ verStatus:  "Not Verified" });
    const sellerCount = await User.countDocuments({ verStatus:  "Verified" });
    const itemCount = await Item.countDocuments({ status:  1 });

    today = Date.now();

    const activeSellerCount = await Subscription.countDocuments({ endDate : { $gt: today } });

    const subscriptions = await Subscription.aggregate([
        { $match: { _id : { $exists: true } } },
        { $group: { _id: "$planId", count: { $sum: 1 } } },
    ])

    console.log(subscriptions);
});

module.exports = app;
