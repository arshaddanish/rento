// const express = require("express");
// const { adminAuth } = require("../middleware/adminAuth");
// const Admin = require("../models/admin");
// const { Blog, BlogCategory } = require("../models/blog");
// const Booking = require("../models/bookings");
// const Item = require("../models/item");
// const Message = require("../models/messages");
// const { Subscription } = require("../models/subscription");
// const User = require("../models/user");
// const app = express();

// app.get("/api/clear-db", adminAuth, async (req, res) => {
//   try {
//     await BlogCategory.deleteMany({});
//     await Blog.deleteMany({});
//     await Booking.deleteMany({});
//     await Item.deleteMany({});
//     await Message.deleteMany({});
//     await User.deleteMany({});
//     await Subscription.deleteMany({});
//     res.send("DB Clered. Clear Files!");
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = app;
