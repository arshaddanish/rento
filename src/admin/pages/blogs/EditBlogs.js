// import { Button } from "@mui/material";
// import React from "react";
// import "./blogsAdmin.scss";

// export default function BlogsAdmin() {
//   return (
//     <div className="blogs-admin">
//       <div className="title-div">
//         <h2>Blogs</h2>
//         <div className="btn-div">
//           <Button variant="contained">Add Blog</Button>
//           <Button variant="contained">Edit Categories</Button>
//         </div>
//       </div>

//     </div>
//   );
// }

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import apis from "../../../apis";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../../services/imageUrl";
import { thumbnailDate } from "../../../services/thumbnailDate";
import { Button } from "@mui/material";
import "./editBlogs.scss";

export default function EditBlogs({ type }) {
  let { pathname } = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
    fetchBlogCategories();
  }, []);

  const [blogs, setBlogs] = React.useState([]);
  const [filteredBlogs, setFilteredBlogs] = React.useState([]);
  const [blogCategories, setBlogCategories] = React.useState([]);

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
        <div className="dtl">
          <p>{item.category}</p>
          <h3>{item.title}</h3>
          <div className="admin-btns">
            <Button
              variant="contained"
              onClick={() => navigate("/admin/blogs/edit-blog/" + item._id)}
            >
              Edit
            </Button>
            <Button variant="contained" style={{ background: "#e53e3e" }}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }

  function view() {
    return filteredBlogs.map((item, index) => {
      return <Item item={item} key={index} />;
    });
  }

  function renderFilter() {
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
            defaultValue="All"
          >
            <MenuItem value="All">All</MenuItem>
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
    <div className={`edit-blogs view-all`}>
      <div className="title-div">
        <h2></h2>
        {renderFilter()}
      </div>
      <div className="items">{view()}</div>
    </div>
  );
}
