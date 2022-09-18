import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import { fileUpload } from "../../../services/fileUpload";
import { validateFileSize } from "../../../services/validateFileSize";
import "./addBlog.scss";

export default function AddBlog() {
  let navigate = useNavigate();
  useEffect(() => {
    fetchBlogCategories();
  }, []);

  const [blogCategories, setBlogCategories] = React.useState([]);

  let fetchBlogCategories = async () => {
    let { data } = await apis.get("blog-categories");
    setBlogCategories(data);
  };

  let [formData, setFormData] = useState({});
  let [imgData, setImgData] = useState(null);
  const [submitBtn, setSubmitBtn] = useState(0);

  useEffect(() => {
    myWait();
  }, [imgData]);

  let myWait = async () => {
    if (typeof imgData == "string") {
      await apis.post("blogs", {
        ...formData,
        img: imgData,
      });
      navigate("/admin/blogs");
    }
  };

  let onInputChange = async (e) => {
    if (e.target.name === "img") {
      validateFileSize(e.target.files[0]);
      setImgData(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    let img = await fileUpload(imgData);
    setImgData(img);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="add-blog">
        <div className="field">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth
            name="title"
            required
            onChange={onInputChange}
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
            name="content"
            required
            onChange={onInputChange}
          />
        </div>
        <div className="field half">
          <FormControl fullWidth>
            <InputLabel id="muil1">Categories</InputLabel>
            <Select
              MenuProps={{
                disableScrollLock: true,
              }}
              id="demo-simple-select"
              label="Categories"
              labelId="muil1"
              displayEmpty
              fullWidth
              name="category"
              required
              onChange={onInputChange}
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
        <div className="">
          <p>Image</p>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            name="img"
            required
            onChange={onInputChange}
          />
        </div>
        <div className="submit-btn">
          <Button
            variant="contained"
            fullWidth
            style={{ height: "50px" }}
            type="submit"
          >
            {submitBtn ? "Adding..." : "Add Blog"}
          </Button>
        </div>
      </div>
    </form>
  );
}
