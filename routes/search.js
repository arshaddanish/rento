const express = require("express");
const app = express();
const Item = require("../models/item");

app.post("/api/search", async (req, res) => {
  try {
    category = req.body.category;
    location = req.body.location;
    name = req.body.name;

    if (name && location) {
      // console.log("name and location");
      const items = await Item.find({
        category: category,

        $and: [
          { name: { $regex: name, $options: "i" } },
          { location: { $regex: location, $options: "i" } },
        ],
      });
      res.status(200).send(items);
      return;
    }
    
    if (name) {
      // console.log("name");
      const items = await Item.find({
        category: category,
        name: { $regex: name, $options: "i" },
      });
      res.status(200).send(items);
      return;
    }

    if (location) {
      // console.log("location");
      const items = await Item.find({
        category: category,
        location: { $regex: location, $options: "i" },
      });
      res.status(200).send(items);
      return;
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
