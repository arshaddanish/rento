import React, { useEffect, useState } from "react";
import apis from "../../apis";
import "./newsItem.scss";
import { useParams } from "react-router-dom";
import { imageUrl } from "../../services/imageUrl";
import { newsDate } from "../../services/newsDate";

export default function NewsItem(props) {
  const { id } = useParams();

  useEffect(() => {
    fetchBlog();
  }, []);

  let [blog, setBlog] = useState({});

  let fetchBlog = async () => {
    let { data } = await apis.get("blogs/" + id);
    setBlog(data);
  };

  if (!blog._id) {
    return null;
  }

  return (
    <div className="news-item">
      <div className="item">
        <h2>{blog.title}</h2>
        <p className="date">{newsDate(blog.date)}</p>
        <img src={imageUrl(blog.img)} alt="" />
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
