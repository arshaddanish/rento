const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../models/user");
const Item = require("../models/item");
const Booking = require("../models/bookings");
const { userAuth } = require("../middleware/userAuth");

app.post("/api/booking", userAuth, async (req, res) => {
  const booking = new Booking({ ...req.body, buyerId: req.user._id });
  try {
    await booking.save();
    res.status(201).send(booking);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/api/booking/:id", userAuth, async (req, res) => {
  try {
    const booking = await Booking.deleteOne({
      _id: req.params.id,
      buyerId: req.user._id,
    });
    if (!booking) {
      res.status(404).send();
    }
    res.send(booking);
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
});

app.patch("/api/booking", userAuth, async (req, res) => {
  try {
    var filter = {
      _id: req.body.id,
      sellerId: req.user._id,
    };

    await Booking.updateOne(filter, {
      $set: {
        verStatus: req.body.status,
      },
    });

    res.status(200).send("booking status updated");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/booking/requests/:usertype", userAuth, async (req, res) => {
  try {
    var filter = {};
    var bookings;
    var temp;
    var info = [];

    if (req.params.usertype == "seller") {
      filter = {
        sellerId: req.user._id,
        status: "Pending",
      };

      bookings = await Booking.find(filter).sort({ bookingDate: -1 });

      var itemInfo = [];
      for (var i = 0; i < bookings.length; i++) {
        temp = await User.findOne({ _id: bookings[i].buyerId });
        info[i] = temp;

        temp = await Item.findOne({ _id: bookings[i].itemId });
        itemInfo[i] = temp;
      }

      res
        .status(200)
        .send({ bookings: bookings, buyer_info: info, item_info: itemInfo });

      return;
    }

    filter = {
      buyerId: req.user._id,
    };

    bookings = await Booking.find(filter).sort({ bookingDate: -1 });
    for (var i = 0; i < bookings.length; i++) {
      temp = await Item.findOne({ _id: bookings[i].itemId });
      info[i] = temp;
    }

    res.status(200).send({ bookings: bookings, item_info: info });
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
});

//items approved by seller

app.get("/api/booking/:usertype", userAuth, async (req, res) => {
  try {
    var filter = {};
    var bookings;
    var temp;
    var info = [];
    var itemInfo = [];

    if (req.params.usertype == "seller") {
      filter = {
        sellerId: req.user._id,
        status: "Approved",
      };

      bookings = await Booking.find(filter).sort({ bookingDate: -1 });
      for (var i = 0; i < bookings.length; i++) {
        temp = await User.findOne({ _id: bookings[i].buyerId });
        info[i] = temp;

        temp = await Item.findOne({ _id: bookings[i].itemId });
        itemInfo[i] = temp;
      }

      res
        .status(200)
        .send({ bookings: bookings, buyer_info: info, item_info: itemInfo });

      return;
    }

    filter = {
      buyerId: req.user._id,
      status: "Approved",
    };

    bookings = await Booking.find(filter).sort({ bookingDate: -1 });
    for (var i = 0; i < bookings.length; i++) {
      temp = await User.findOne({ _id: bookings[i].sellerId });
      info[i] = temp;

      temp = await Item.findOne({ _id: bookings[i].itemId });
      itemInfo[i] = temp;
    }

    res
      .status(200)
      .send({ bookings: bookings, seller_info: info, item_info: itemInfo });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
