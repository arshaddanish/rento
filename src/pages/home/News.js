import React from "react";
import mer4 from "../../assets/images/news/mer4.jpg";
import { Link, useLocation } from "react-router-dom";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function Item() {
  return (
    <div className="item">
      <div className="img-div">
        <img src={mer4} alt="" />
        <div className="date">
          <p>19 Oct</p>
        </div>
      </div>
      <div className="dtl">
        <p>Car Lifestyle</p>
        <h3>How to use Map in Audi A6 luxury?</h3>
      </div>
    </div>
  );
}

export default function News({ type }) {
  let { pathname } = useLocation();

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function viewAll() {
    return (
      <>
        {Item()}
        {Item()}
        {Item()}
      </>
    );
  }

  function renderViewAllBtnOrFilter() {
    if (pathname === "/news") {
      return (
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
              <MenuItem value={10}>Car Lifestyle</MenuItem>
              <MenuItem value={20}>Real Estate</MenuItem>
              <MenuItem value={30}>Hot Vehicles</MenuItem>
              <MenuItem value={40}>Trending Machines</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
    }
    return (
      <Link to="/news">
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
      <div className="items">
        {Item()}
        {Item()}
        {Item()}
        {pathname === "/news" && viewAll()}
      </div>
    </div>
  );
}

News.defaultProps = {
  type: "home",
};
