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

module.exports = Blog;
