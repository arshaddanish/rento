import React, { useEffect, useState } from "react";
import audi from "../../assets/images/vehicles/audi.jpg";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useNavigate, useParams } from "react-router-dom";
import { titleCase } from "../../services/titleCase";
import apis from "../../apis";
import { imageUrl } from "../../services/imageUrl";
import { Button, TextField } from "@mui/material";

export default function Items() {
  let navigate = useNavigate();
  const { category } = useParams();

  let [formData, setFormData] = useState({});
  const [submitBtn, setSubmitBtn] = useState(0);
  const [search, setSearch] = useState(0);

  let onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let onFormSubmit = async (e) => {
    setSearch(1);
    e.preventDefault();
    setSubmitBtn(1);
    let { data } = await apis.post("search", {
      ...formData,
      category: titleCase(category),
    });
    setFiltereredItems(data);
    setSubmitBtn(0);
  };

  useEffect(() => {
    fetchCategoryTypes();
    fetchCategoryItems();
  }, []);

  let [types, setTypes] = useState([]);
  let fetchCategoryTypes = async () => {
    let { data } = await apis.get("categories/" + category);
    setTypes(data.types);
  };

  let [items, setItems] = useState([]);
  let [filteredItems, setFiltereredItems] = useState([]);
  let fetchCategoryItems = async () => {
    let { data } = await apis.get("items-filter/" + category);
    setItems(data);
    setFiltereredItems(data);
  };

  const handleChange = (event) => {
    if (event.target.value === "All") {
      setFiltereredItems(items);
    } else {
      setFiltereredItems(
        items.filter((item) => item.type === event.target.value)
      );
    }
  };

  let clearSearch = () => {
    setSearch(0);
    setFiltereredItems(items);
  };

  function Item({ item }) {
    return (
      <div
        className="item"
        onClick={() => navigate("/categories/" + category + "/" + item._id)}
      >
        <div className="img-div">
          <img src={imageUrl(item.img)} alt="" />
        </div>
        <div className="dtl-box">
          <h3>{item.name}</h3>
          <div className="dtl">
            <p>{item.location}</p>
            <p>
              <span>Rs. {item.price}</span> / day
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`landing ${category}`}>
        <h1>All In One Rental Market Place !</h1>
        <p>We have what you need from tools to apartments.</p>
        <form onSubmit={onFormSubmit}>
          <div className="search-box">
            <div>
              <TextField
                label="Item Name"
                variant="outlined"
                style={{ width: 250 }}
                name="name"
                onChange={onInputChange}
                value={formData.name && formData.name}
              />
            </div>
            <div>
              <TextField
                label="Location"
                variant="outlined"
                style={{ width: 300 }}
                name="location"
                onChange={onInputChange}
                value={formData.location && formData.location}
              />
            </div>
            <button className="find-btn" type="submit">
              {" "}
              {submitBtn ? "Finding..." : "Find"}
            </button>
          </div>
        </form>
      </div>
      <div className="category-items">
        <div className="title-div">
          <h2>{search ? "Search Results" : titleCase(category)}</h2>
          <div className="filter">
            {search ? (
              <Button variant="contained" fullWidth onClick={clearSearch}>
                Clear Search
              </Button>
            ) : (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Type"
                  defaultValue="All"
                  onChange={handleChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  {types.map((item, index) => {
                    return (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          </div>
        </div>
        <div className="items">
          {filteredItems.map((item, index) => {
            return <Item item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
