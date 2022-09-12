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

export default function Items() {
  let navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    fetchCategoryTypes();
    fetchCategoryItems();
  }, []);

  let [types, setTypes] = useState([]);
  let fetchCategoryTypes = async () => {
    let { data } = await apis.get("categories/" + category.toLowerCase());
    setTypes(data.types);
  };

  let [items, setItems] = useState([]);
  let [filteredItems, setFiltereredItems] = useState([]);
  let fetchCategoryItems = async () => {
    let { data } = await apis.get("items-filter/" + category.toLowerCase());
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
    <div className="category-items">
      <div className="title-div">
        <h2>{titleCase(category)}</h2>
        <div className="filter">
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
        </div>
      </div>
      <div className="items">
        {filteredItems.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
