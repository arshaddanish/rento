const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
  },
  types: [
    {
      type: String,
    },
  ],
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
