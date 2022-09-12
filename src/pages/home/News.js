import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import apis from "../../apis";
import { thumbnailDate } from "../../services/thumbnailDate";
import { imageUrl } from "../../services/imageUrl";
import { useNavigate } from "react-router-dom";

export default function News({ type }) {
  let { pathname } = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/blogs") {
      fetchBlogs3();
    } else {
      fetchBlogs();
      fetchBlogCategories();
    }
  }, []);

  const [blogs, setBlogs] = React.useState([]);
  const [filteredBlogs, setFilteredBlogs] = React.useState([]);
  const [blogCategories, setBlogCategories] = React.useState([]);

  let fetchBlogs3 = async () => {
    let { data } = await apis.get("blogs3");
    setBlogs(data);
    setFilteredBlogs(data);
  };

  let fetchBlogs = async () => {
    let { data } = await apis.get("blogs");
    setBlogs(data);
    setFilteredBlogs(data);
  };

  let fetchBlogCategories = async () => {
    let { data } = await apis.get("blog-categories");
    setBlogCategories(data);
  };

  const handleChange = (event) => {
    if (event.target.value === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter((item) => item.category === event.target.value)
      );
    }
  };

  function Item({ item }) {
    return (
      <div className="item">
        <div className="img-div">
          <img src={imageUrl(item.img)} alt="" />
          <div className="date">
            <p>{thumbnailDate(item.date)}</p>
          </div>
        </div>
        <div className="dtl" onClick={() => navigate("/blogs/" + item._id)}>
          <p>{item.category}</p>
          <h3>{item.title}</h3>
        </div>
      </div>
    );
  }

  function view() {
    return filteredBlogs.map((item, index) => {
      return <Item item={item} key={index} />;
    });
  }

  function renderViewAllBtnOrFilter() {
    if (pathname === "/blogs") {
      return (
        <div className="filter">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              MenuProps={{
                disableScrollLock: true,
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Categories"
              displayEmpty
              onChange={handleChange}
            >
              <MenuItem value="All" defaultChecked>All</MenuItem>
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
      <Link to="/blogs">
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
