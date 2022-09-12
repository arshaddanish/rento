import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormLabel,
  Button,
} from "@mui/material";
import apis from "../../apis";
import { titleCase } from "../../services/titleCase";

const AddProduct = () => {
  useEffect(() => {
    fetchCategories();
  }, []);

  const [categories, setCategories] = useState([]);
  let fetchCategories = async () => {
    let { data } = await apis.get("categories");
    setCategories(data);
  };

  const [formData, setFormData] = useState({});
  const [formImg, setFormImg] = useState();
  const [formExtraImgs, setFormExtraImgs] = useState();
  let onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let onformImgChange = (e) => {
    setFormImg(e.target.files[0]);
  };
  let onformExtraImgsChange = (e) => {
    setFormExtraImgs(e.target.files);
  };
  let onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // await apis.post("items", formData);
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
              defaultValue=""
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
              onChange={onformImgChange}
            />
          </div>
          <div className="add-product-upload-image">
            Extra Images Of Item
            <input
              type="file"
              multiple
              accept="image/png, image/jpeg, image/jpg"
              onChange={onformExtraImgsChange}
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

        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default AddProduct;
