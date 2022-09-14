import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./AddBlog";
import "./blogsAdmin.scss";
import BlogsTabs from "./BlogsTabs";
import EditBlogs from "./EditBlogs";
import EditOneBlog from "./EditOneBlog";

export default function BlogsAdmin() {
  return (
    <div className="blogs-admin">
      <div className="blogs-tabs">
        <BlogsTabs />
      </div>
      <div className="blogs-page">
        <Routes>
          <Route path="/" element={<EditBlogs />} />
          <Route path="/edit-blog/:id" element={<EditOneBlog />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </div>
    </div>
  );
}
