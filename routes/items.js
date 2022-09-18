const express = require("express");
const app = express();
const Item = require("../models/item");
const { Subscription } = require("../models/subscription");
const titleCase = require("../services/titleCase");
const axios = require("axios").create({ baseUrl: "http://localhost:5000/" });
const { userAuth } = require("../middleware/userAuth");
const User = require("../models/user");

let validateActiveSeller = async (id) => {
  let user = await User.findOne({ _id: id, verStatus: "Verified" });
  console.log(user);
  if (!user._id) return "Verify your account to become a seller.";
  let subscriptions = await Subscription.find({ sellerId: id }).sort({
    endDate: -1,
  });
  if (
    !subscriptions[0] ||
    (subscriptions[0] && subscriptions[0].endDate < Date.now())
  )
    return "Subscribe to rent items.";
  return 1;
};

app.get("/api/items", async (req, res) => {
  const items = await Item.find({}).sort({ regDate: -1 });

  try {
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.get("/api/seller-items", async (req, res) => {
//   const items = await Item.find({}).sort({ regDate: -1 });

//   try {
//     res.send(items);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.get("/api/items/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);

  try {
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/items-filter/:category", async (req, res) => {
  const items = await Item.find({
    category: titleCase(req.params.category),
  }).sort({ regDate: -1 });

  try {
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/items-filter/:category/:type", async (req, res) => {
  const items = await Item.find({
    category: titleCase(req.params.category),
    type: req.params.type,
  }).sort({ regDate: -1 });

  try {
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/items", userAuth, async (req, res) => {
  try {
    let valid = validateActiveSeller(req.user._id);
    if (valid !== 1) {
      res.send(valid);
    }
    const item = new Item({ ...req.body, sellerId: req.user._id });
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/api/items/:id", async (req, res) => {
  try {
    let oldItem;
    if (
      (req.body.img && req.body.img !== "") ||
      (req.body.extraImgs && req.body.extraImgs !== [])
    ) {
      oldItem = await Item.findById(req.params.id);
    }
    if (req.body.img && req.body.img !== "") {
      await axios.delete("api/upload/" + oldItem.img);
    }
    if (req.body.extraImgs && req.body.extraImgs !== []) {
      oldItem.extraImgs.forEach(async (item, index) => {
        await axios.delete("api/upload/" + item);
      });
    }

    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.delete("/api/items", async (req, res) => {
//   try {
//     const items = await Item.find({});
//     items.forEach(async (item, index) => {
//       await axios.delete("api/upload/" + item.img);
//       item.extraImgs.forEach(async (item, index) => {
//         await axios.delete("api/upload/" + item);
//       });
//     });

//     const doc = await Item.deleteMany({});
//     res.send(doc);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.delete("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    await axios.delete("api/upload/" + item.img);
    item.extraImgs.forEach(async (item, index) => {
      await axios.delete("api/upload/" + item);
    });

    const doc = await Item.deleteOne({ _id: req.params.id });
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
