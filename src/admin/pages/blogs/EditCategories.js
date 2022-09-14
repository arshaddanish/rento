import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import MuiDialog from "../../../components/dialog/MuiDialog";
import "./editCategories.scss";

let dialog = {
  title: "Alert!",
  content: "The associated blogs will also be deleted.",
  btnText: "Yes",
  btnColor: "#e53e3e",
};

export default function EditCategories() {
  useEffect(() => {
    fetchBlogCategories();
  }, []);

  const [blogCategories, setBlogCategories] = React.useState([]);

  let fetchBlogCategories = async () => {
    let { data } = await apis.get("blog-categories");
    setBlogCategories(data);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let [deleteId, setDeleteId] = useState(null);
  let onDelete = async () => {
    await apis.delete("blog-categories/" + deleteId);
    handleClose();
    setBlogCategories(blogCategories.filter((item) => item._id !== deleteId));
  };
  let onDeleteBtnClick = (id) => {
    setDeleteId(id);
    handleClickOpen();
  };

  function UpdateField({ item, index }) {
    let navigate = useNavigate();
    let [formData, setFormData] = useState(item.blogCategory);
    let onChange = (e) => {
      setFormData(e.target.value);
    };

    let onFormSubmit = async (e) => {
      e.preventDefault();
      await apis.patch("blog-categories/" + item._id, {
        blogCategory: formData,
      });
      alert("Updated Successfully!");
    };

    return (
      <form onSubmit={onFormSubmit}>
        <div className="field">
          <TextField
            id="outlined-basic"
            label={`Category ${index + 1}`}
            variant="standard"
            fullWidth
            name="category"
            required
            defaultValue={item.blogCategory}
            InputLabelProps={{ shrink: true }}
            onChange={onChange}
          />
          <Button variant="contained" type="submit">
            Update
          </Button>
          <Button
            variant="contained"
            style={{ background: "#e53e3e" }}
            onClick={() => onDeleteBtnClick(item._id)}
          >
            Delete
          </Button>
        </div>
      </form>
    );
  }

  let [addData, setAddData] = useState();

  let onAdd = async (e) => {
    e.preventDefault();
    let {data} = await apis.post("blog-categories", { blogCategory: addData });
    setBlogCategories([...blogCategories, data])
    alert("Added Successfully!");
  };

  return (
    <>
      <div className="edit-categories">
        <form onSubmit={onAdd}>
          <div className="field">
            <TextField
              id="outlined-basic"
              label="New Category"
              variant="standard"
              fullWidth
              name="title"
              required
              onChange={(e) => setAddData(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Add
            </Button>
          </div>
        </form>
        {blogCategories.map((item, index) => {
          return <UpdateField item={item} index={index} key={index} />;
        })}
      </div>
      <MuiDialog
        open={open}
        handleClose={handleClose}
        onDelete={onDelete}
        dialog={dialog}
      />
    </>
  );
}
