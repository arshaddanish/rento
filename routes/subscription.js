const express = require("express");
const app = express();
const Subscription = require("../models/subscription");
const axios = require("axios").create({ baseUrl: "http://localhost:5000/" });

app.get("/api/subscription", async (req, res) => {
  const subscriptions = await Subscription.find({}).sort({ subDate: -1 });

  try {
    res.send(subscriptions);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/subscription/:id", async (req, res) => {
  const subscription = await Subscription.findById(req.params.id);

  try {
    res.send(subscription);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/subscription/seller/:id", async (req, res) => {
  const subscriptions = await Subscription.find({sellerId : req.params.id});

  try {
    res.send(subscriptions);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/subscription", async (req, res) => {
  const subscription = new Subscription(req.body);

  try {
    await subscription.save();
    res.send(subscription);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
