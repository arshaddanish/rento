const express = require("express");
const app = express();
const Category = require("../models/category");
const Item = require("../models/item");
const axios = require("axios").create({ baseUrl: "http://localhost:5000/" });

app.get("/api/categories", async (req, res) => {
  const categories = await Category.find({});

  try {
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/categories/:name", async (req, res) => {
  const category = await Category.findOne({ category: req.params.name });

  try {
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/categories", async (req, res) => {
  const category = new Category(req.body);

  try {
    await category.save();
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/api/categories/:id", async (req, res) => {
  try {
    const oldCategory = await Category.findById(req.params.id);
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    const items = await Item.updateMany(
      { category: oldCategory.category },
      { category: category.category }
    );
    res.send({ category: category, items: items });
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.delete("/api/categories", async (req, res) => {
//   try {
//     const doc = await Category.deleteMany({});
//     await axios.delete("api/items");

//     res.send(doc);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.delete("/api/categories/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    const doc = await Category.deleteOne({ _id: req.params.id });
    const items = await Item.find({ category: category.category });
    items.forEach(async (item, index) => {
      await axios.delete("api/items/" + item._id);
    });

    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
