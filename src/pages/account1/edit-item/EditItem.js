import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import "../add-to-store/addToStore.scss";

import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import { validateFileSize } from "../../../services/validateFileSize";
import { validateMaxFiles } from "../../../services/validateMaxFiles";
import { fileUpload } from "../../../services/fileUpload";
import { titleCase } from "../../../services/titleCase";

const EditItem = () => {
  let navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const [categories, setCategories] = useState([]);

  let fetchCategories = async () => {
    let { data } = await apis.get("categories");
    setCategories(data);
  };

  const [formData, setFormData] = useState({});
  const [imgData, setImgData] = useState(null);
  const [extraImgsData, setExtraImgsData] = useState(null);

  useEffect(() => {
    myWait();
  }, [imgData, extraImgsData]);

  let myWait = async () => {
    if (
      typeof imgData == "string" &&
      (!extraImgsData || typeof extraImgsData[0] == "string")
    ) {
      await apis.post("items", {
        ...formData,
        img: imgData,
        ...(extraImgsData && { extraImgs: extraImgsData }),
      });
      navigate("/");
    }
  };

  let onInputChange = async (e) => {
    if (e.target.name === "img") {
      validateFileSize(e.target.files[0]);
      setImgData(e.target.files[0]);
    } else if (e.target.name === "extraImgs") {
      validateMaxFiles(e.target);
      for (let i = 0; i < e.target.files.length; i++) {
        validateFileSize(e.target.files[i]);
      }
      setExtraImgsData(e.target.files);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const [submitBtn, setSubmitBtn] = useState(0);
  useEffect(() => {}, [submitBtn]);

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    let img = await fileUpload(imgData);
    setImgData(img);
    if (extraImgsData) {
      let extraImgs = [];
      for (let i = 0; i < extraImgsData.length; i++) {
        extraImgs = [...extraImgs, await fileUpload(extraImgsData[i])];
      }
      setExtraImgsData(extraImgs);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="add-product-main">
        <div className="add-product-sub">
          <TextField
            autoComplete="off"
            required
            fullWidth
            label="Item Name"
            variant="outlined"
            name="name"
            onChange={onInputChange}
          />
          <TextField
            autoComplete="off"
            required
            fullWidth
            label="Price Per Day"
            variant="outlined"
            name="price"
            type={"number"}
            onChange={onInputChange}
          />
          <TextField
            autoComplete="off"
            required
            fullWidth
            label="Item Location"
            variant="outlined"
            name="location"
            onChange={onInputChange}
          />
          <TextField
            autoComplete="off"
            required
            fullWidth
            label="Manufacture Year"
            variant="outlined"
            name="manufactureYear"
            type={"number"}
            onChange={onInputChange}
          />
          <FormControl fullWidth>
            <InputLabel id="choose-catogory">Category</InputLabel>
            <Select
              labelId="choose-catogory"
              label="Choose Category"
              required
              name="category"
              onChange={onInputChange}
            >
              {categories.map((item, index) => (
                <MenuItem key={index} value={titleCase(item.category)}>
                  {titleCase(item.category)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="choose-type">Type</InputLabel>
            <Select
              labelId="choose-type"
              label="Choose Type"
              required
              name="type"
              disabled={!formData.category}
              onChange={onInputChange}
            >
              {formData.category &&
                categories
                  .find(
                    (item) => item.category === formData.category.toLowerCase()
                  )
                  .types.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
          <div className="add-product-upload-image">
            Item Image
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={onInputChange}
              name="img"
              required
            />
          </div>
          <div className="add-product-upload-image">
            Extra Images Of Item
            <input
              type="file"
              multiple
              accept="image/png, image/jpeg, image/jpg"
              name="extraImgs"
              onChange={onInputChange}
            />
          </div>
          <TextField
            autoComplete="off"
            required
            fullWidth
            label="Quantity"
            variant="outlined"
            name="quantity"
            type={"number"}
            onChange={onInputChange}
          />
        </div>

        <TextField
          autoComplete="off"
          multiline
          rows={5}
          fullWidth
          id="outlined-basic"
          label="Product Description"
          variant="outlined"
          required
          name="description"
          onChange={onInputChange}
        />
        {/* <div className='add-your-image'>
          <label htmlFor="">Insert product image</label>
          <input type="file" id="myFile" name="filename" />
                </div> */}

        <button type="submit" disabled={submitBtn}>
          {submitBtn ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default EditItem;
