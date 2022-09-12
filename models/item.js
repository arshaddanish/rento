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
  price: {
    type: Number,
  },
  regDate: {
    type: Date,
  },
  manufactureYear: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
