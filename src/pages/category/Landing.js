import React from "react";
import TextField from "@mui/material/TextField";

export default function Landing({backImg}) {
  return (
    <div className={`landing ${backImg}`}>
      <h1>All In One Rental Market Place !</h1>
      <p>We have what you need from tools to apartments.</p>
      <div className="search-box">
        <div>
          <TextField
            label="Product Name"
            variant="outlined"
            style={{ width: 250 }}
          />
        </div>
        <div>
          <TextField
            label="Location"
            variant="outlined"
            style={{ width: 300 }}
          />
        </div>
        <button className="find-btn">Find</button>
      </div>
    </div>
  );
}