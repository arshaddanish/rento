const express = require("express");
const app = express();
const {Subscription} = require("../models/subscription");
const {userAuth} = require("../middleware/userAuth");
const {adminAuth} = require("../middleware/adminAuth");

app.get("/api/subscriptions", adminAuth ,async (req, res) => {
  const subscriptions = await Subscription.find({}).sort({ subDate: -1 });

  try {
    res.send(subscriptions);
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

app.get("/api/subscriptions/seller/", userAuth , async (req, res) => {
  const subscriptions = await Subscription.find({sellerId : req.user._id});

  try {
    res.send(subscriptions);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/subscriptions", userAuth , async (req, res) => {

  if (req.user.verStatus != "Verified") 
    return res.status(401).send("User is not verified");
  
  const s = await Subscription.findOne({ sellerId: req.user._id }).sort({ endDate : -1});

    if (s && s.endDate > Date.now()) 
        return res.status(400).send("You already have a subscription");
    
  const subscription = new Subscription(req.body);

  try {
    await subscription.save();
    res.send(subscription);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
