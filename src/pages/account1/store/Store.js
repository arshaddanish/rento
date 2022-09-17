import React, { useEffect, useState } from "react";
import audi from "../../../assets/images/vehicles/audi.jpg";
import { useNavigate, useParams } from "react-router-dom";
import "./store.scss";
import { Button } from "@mui/material";

export default function Store() {
  let navigate = useNavigate();

  useEffect(() => {}, []);

  function Item({ item }) {
    return (
      <div className="item">
        <div className="img-div" onClick={() => {}}>
          <img src={audi} alt="" />
        </div>
        <div className="dtl-box">
          <h3>name</h3>
          <div className="dtl">
            <p>location</p>
            <p>
              <span>Rs. 1000</span> / day
            </p>
          </div>
          <div className="item-btns">
            <Button
              variant="contained"
              onClick={() => navigate("/account1/edit-item/id")}
            >
              Edit
            </Button>
            <Button variant="contained" style={{ background: "#e53e3e" }}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="store">
      <div className="title-div">
        <h2>Store</h2>
      </div>
      <div className="items">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
