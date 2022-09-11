const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
  },
  category: {
    type: String,
  },
});
const Blog = mongoose.model("Blog", BlogSchema);

const BlogCategorySchema = new mongoose.Schema({
  blogCategory: {
    type: String,
  },
});
const BlogCategory = mongoose.model("BlogCategory", BlogCategorySchema);

module.exports = { Blog, BlogCategory };
