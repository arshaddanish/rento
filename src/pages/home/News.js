import React, { useEffect, useState } from "react";
import mer4 from "../../assets/images/news/mer4.jpg";
import { Link, useLocation } from "react-router-dom";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import apis from "../../apis";
import { thumbnailDate } from "../../services/thumbnailDate";
import { imageUrl } from "../../services/imageUrl";

function Item({ item }) {
  return (
    <div className="item">
      <div className="img-div">
        <img src={imageUrl(item.img)} alt="" />
        <div className="date">
          <p>{thumbnailDate(item.date)}</p>
        </div>
      </div>
      <div className="dtl">
        <p>{item.category}</p>
        <h3>{item.title}</h3>
      </div>
    </div>
  );
}

export default function News({ type }) {
  let { pathname } = useLocation();

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    if (pathname !== "/news") {
      fetchBlogs3();
    } else {
      fetchBlogs();
      fetchBlogCategories();
    }
  }, []);

  const [blogs, setBlogs] = React.useState([]);
  const [blogCategories, setBlogCategories] = React.useState([]);

  let fetchBlogs3 = async () => {
    let { data } = await apis.get("blogs3");
    setBlogs(data);
  };

  let fetchBlogs = async () => {
    let { data } = await apis.get("blogs");
    setBlogs(data);
  };

  let fetchBlogCategories = async () => {
    let { data } = await apis.get("blog-categories");
    setBlogCategories(data);
  };

  function view() {
    return blogs.map((item, index) => {
      return <Item item={item} key={index} />;
    });
  }

  function renderViewAllBtnOrFilter() {
    if (pathname === "/news") {
      return (
        <div className="filter">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              MenuProps={{
                disableScrollLock: true,
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Type"
              onChange={handleChange}
            >
              {blogCategories.map((item, index) => {
                return (
                  <MenuItem value={item.blogCategory} key={index}>
                    {item.blogCategory}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      );
    }
    return (
      <Link to="/news">
        <button>View All</button>
      </Link>
    );
  }

  return (
    <div className={`news ${type}`}>
      <div className="title-div">
        <h2>News & Articles</h2>
        {renderViewAllBtnOrFilter()}
      </div>
      <div className="items">{view()}</div>
    </div>
  );
}

News.defaultProps = {
  type: "home",
};
