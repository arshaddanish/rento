import React from "react";
import audi from "../../assets/images/vehicles/audi.jpg";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

export default function Items() {
  let navigate = useNavigate();

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function Item() {
    return (
      <div className="item" onClick={() => navigate("/category/vehicles/1")}>
        <div className="img-div">
          <img src={audi} alt="" />
        </div>
        <div className="dtl-box">
          <h3>Audi 19</h3>
          <div className="dtl">
            <p>Kannur, Thana.</p>
            <p>
              <span>Rs. 1000</span> / day
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="category-items">
      <div className="title-div">
        <h2>Vehicles</h2>
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
              <MenuItem value={10}>Bike</MenuItem>
              <MenuItem value={20}>Scooter</MenuItem>
              <MenuItem value={30}>Car</MenuItem>
              <MenuItem value={40}>Truck</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="items">
        {Item()}
        {Item()}
        {Item()}
        {Item()}
        {Item()}
        {Item()}
      </div>
    </div>
  );
}
