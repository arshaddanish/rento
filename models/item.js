const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  extraImgs: [
    {
      type: String,
    },
  ],
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  sellerId: {
    type: String,
  },
  amt: {
    type: Number,
  },
  date: {
    type: Date,
  },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
