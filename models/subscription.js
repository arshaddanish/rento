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
