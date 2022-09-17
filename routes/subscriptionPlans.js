const express = require("express");
const app = express();
const { SubscriptionPlan } = require("../models/subscription");

app.get("/api/subscription-plans", async (req, res) => {
  const plans = await SubscriptionPlan.find({});

  try {
    res.send(plans);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/subscription-plans", async (req, res) => {
  const plan = new SubscriptionPlan(req.body);

  try {
    await plan.save();
    res.send(plan);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/api/subscription-plans/:id", async (req, res) => {
  try {
    const plan = await SubscriptionPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(plan);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/subscription-plans/:id", async (req, res) => {
  try {
    const doc = await SubscriptionPlan.deleteOne({ _id: req.params.id });
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
