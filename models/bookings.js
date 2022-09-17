const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  sellerId: {
    type: String,
  },
  buyerId: {
    type: String,
  },
  itemId: {
    type: String,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  pickupDate: {
    type: Date,
  },
  dropoffDate: {
    type: Date,
  },
  quantity: {
    type: Number,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
// let status = ["Pending", "Approved", "Rejected"];
