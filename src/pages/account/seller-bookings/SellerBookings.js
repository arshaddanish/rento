import React, { useEffect, useState } from "react";
import "./sellerBookings.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import { httpHeaders } from "../../../services/httpHeaders";

const SellerBookings = () => {
  let navigate = useNavigate();

  let [bookings, setBookings] = useState();
  useEffect(() => {
    fetchBookings();
  }, []);
  let fetchBookings = async () => {
    let { data } = await apis.get("booking/seller", httpHeaders("user"));
    // console.log(data);
    setBookings(data);
  };

  let onItemClick = (item) => {
    navigate("/categories/" + item.category.toLowerCase() + "/" + item._id);
  };

  const [viewForm, setViewForm] = useState(false);

  if (!bookings) return null;
  return (
    <div className="seller-bookings1">
      <div className="registration-main2">
        <div>
          <h2 className="reg-heading-main">Bookings</h2>
        </div>
        <div className="reg-details">
          <div className="reg-heading">
            <div>Item</div>
            <div>Customer</div>
            <div>Request Date</div>
            <div>Pick-up Date</div>
            <div>Drop-off Date</div>
            <div>Quantity</div>
          </div>
          {bookings.bookings.map((e, i) => (
            <div key={e.id} className="reg-data">
              <div
                onClick={() => onItemClick(bookings.item_info[i])}
                className="item-link"
              >
                {bookings.item_info[i].name}
              </div>
              <div className="item-link">{bookings.buyer_info[i].name}</div>
              <div>{e.bookingDate.substring(0, 10)}</div>
              <div>{e.pickupDate.substring(0, 10)}</div>
              <div>{e.dropoffDate.substring(0, 10)}</div>
              <div>{e.quantity}</div>
              <div className="reg-btns">
                <Button
                  size="small"
                  color="success"
                  onClick={() => setViewForm(true)}
                  variant="contained"
                >
                  Payment History
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerBookings;
