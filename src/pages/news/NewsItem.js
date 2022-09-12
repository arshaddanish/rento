import React, { useEffect, useState } from "react";
import apis from "../../apis";
import "./newsItem.scss";
import { Link, useParams } from "react-router-dom";
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
        {/* <p>{blog.content}</p> */}
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vel
          tempora non beatae error nesciunt praesentium fugiat temporibus saepe
          quidem, amet sit sapiente soluta nisi earum commodi delectus quisquam
          quaerat deleniti. Est mollitia voluptatum deserunt facere libero
          corporis nostrum suscipit delectus distinctio, reiciendis vel. Iusto
          recusandae mollitia sed qui explicabo at dicta quae quaerat, adipisci
          dolores saepe esse natus, quas deserunt ut neque ipsum quos!
          Dignissimos, modi eligendi. Praesentium, quisquam aut quis ex quaerat
          accusamus delectus eos fugit vel molestiae doloribus quidem ea! Quis,
          fuga veniam quisquam ullam velit voluptas quos inventore. Tenetur
          officia reprehenderit molestiae dolorem qui? Dolorum, dignissimos?
        </p>
        <Link to="/blogs"><button className="btn-cmn">Back To All Blogs</button></Link>
      </div>
    </div>
  );
}
