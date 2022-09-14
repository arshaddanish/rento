import { MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect } from "react";
import apis from "../../../apis";
import "./addBlog.scss";

export default function AddBlog() {
  useEffect(() => {
    fetchBlogCategories();
  }, []);

  const [blogCategories, setBlogCategories] = React.useState([]);

  let fetchBlogCategories = async () => {
    let { data } = await apis.get("blog-categories");
    setBlogCategories(data);
  };

  return (
    <div className="add-blog">
      <div className="field">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          fullWidth
          name="title"
        />
      </div>
      <div className="field">
        <TextField
          multiline
          rows={6}
          id="outlined-basic"
          label="Content"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="field half">
        <Select
          MenuProps={{
            disableScrollLock: true,
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Categories"
          displayEmpty
          defaultValue="All"
          fullWidth
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
      </div>
      <div className="field half">
        <p>Image</p>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          name="img"
          required
        />
      </div>

    </div>
  );
}
