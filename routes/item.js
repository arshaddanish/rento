const express = require("express");
const app = express();
const Item = require("../models/item");

app.get("/api/items", async (req, res) => {
  const items = await Item.find({});

  try {
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/items/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);

  try {
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/items/:category", async (req, res) => {
  const items = await Item.findOne({ category: req.params.category });

  try {
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/items/:category/:type", async (req, res) => {
  const items = await Item.findOne({
    category: req.params.category,
    type: req.params.type,
  });

  try {
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/items", async (req, res) => {
  const item = new Item(req.body);

  try {
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/api/items/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  try {
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.delete("/api/items", async (req, res) => {
//   const doc = await Item.deleteMany({});

//   try {
//     res.send(doc);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.delete("/api/items/:id", async (req, res) => {
  const doc = await Item.deleteOne({ _id: req.params.id });

  try {
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
