import React from "react";
import { Route, Routes } from "react-router-dom";
import "./blogsAdmin.scss";
import BlogsTabs from "./BlogsTabs";
import EditBlogs from "./EditBlogs";

export default function BlogsAdmin() {
  return (
    <div className="blogs-admin">
      <div className="blogs-tabs">
        <BlogsTabs />
      </div>
      <div className="blogs-page">
        <Routes>
          <Route path="/" element={<EditBlogs />} />
        </Routes>
      </div>
    </div>
  );
}
