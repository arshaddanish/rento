const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  sellerId: {
    type: String,
  },
  plan: {
    type: String,
  },
  subDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
});

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

const SubscriptionPlanSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

const SubscriptionPlan = mongoose.model(
  "SubscriptionPlan",
  SubscriptionPlanSchema
);

module.exports = { Subscription, SubscriptionPlan };
