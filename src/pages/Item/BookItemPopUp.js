import React, { useState } from "react";
import "./bookItemPopUp.scss";
import { TextField, Button } from "@mui/material";
import apis from "../../apis";
import { httpHeaders } from "../../services/httpHeaders";
import { useNavigate } from "react-router-dom";

const BookItemPopUp = ({ trigger, setTrigger, sellerId, itemId, quantity }) => {
  let navigate = useNavigate();
  let [formData, setFormData] = useState({});
  const [submitBtn, setSubmitBtn] = useState(0);

  let onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let onFormSubmit = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("jwt_token")) {
      alert("Login to book item.");
      navigate("/login");
    }
    setSubmitBtn(1);
    await apis.post(
      "booking",
      {
        ...formData,
        sellerId: sellerId,
        itemId: itemId,
      },
      httpHeaders("user")
    );
    navigate("/account/buyer-requests");
    setSubmitBtn(0);
  };

  return trigger ? (
    <div className="book-item-bg">
      <div className="book-item-popup">
        <h1>Enter details</h1>
        <form onSubmit={onFormSubmit}>
          <div className="book-item-popup-sub">
            <TextField
              type={"date"}
              label="Pick Up Date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              name="pickupDate"
              onChange={onInputChange}
              required
            />
            <TextField
              type={"date"}
              label="Drop Off Date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              name="dropoffDate"
              onChange={onInputChange}
              required
            />
            <TextField
              type={"number"}
              label="Quantity"
              variant="outlined"
              name="quantity"
              onChange={onInputChange}
              required
              inputProps={{ maxLength: quantity }}
            />
          </div>
          <div className="book-item-popup-btns">
            <Button onClick={() => setTrigger(false)} variant="outlined">
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              {submitBtn ? "Requesting..." : "Request Booking"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default BookItemPopUp;
