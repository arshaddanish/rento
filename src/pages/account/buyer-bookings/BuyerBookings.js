import "./buyerBookings.scss";

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import PaymentHistoryBuyer from "./PaymentHistoryBuyer";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import { httpHeaders } from "../../../services/httpHeaders";

const BuyerBookings = () => {
  let navigate = useNavigate();

  let [bookings, setBookings] = useState();
  useEffect(() => {
    fetchBookings();
  }, []);
  let fetchBookings = async () => {
    let { data } = await apis.get("booking/buyer", httpHeaders("user"));
    // console.log(data);
    setBookings(data);
  };

  let onItemClick = (item) => {
    navigate("/categories/" + item.category.toLowerCase() + "/" + item._id);
  };
  const [viewForm, setViewForm] = useState(false);
  if (!bookings) return null;
  return (
    <div className="buyer-requests2">
      <div className="registration-main5">
        <div>
          <h2 className="reg-heading-main">Bookings</h2>
        </div>
        <div className="reg-details">
          <div className="reg-heading">
            <div>Item</div>
            <div>Request Date</div>
            <div>Pick-up Date</div>
            <div>Drop-off Date</div>
            <div>Quantity</div>
          </div>
          {bookings.bookings.map((e, i) => (
            <div key={e._id} className="reg-data">
              <div
                onClick={() => onItemClick(bookings.item_info[i])}
                className="item-link"
              >
                {bookings.item_info[i].name}
              </div>
              <div>{e.bookingDate.substring(0, 10)}</div>
              <div>{e.pickupDate.substring(0, 10)}</div>
              <div>{e.dropoffDate.substring(0, 10)}</div>
              <div>{e.quantity}</div>
              <div className="reg-btns">
                <Button onClick={() => setViewForm(true)} variant="contained" color="success">
                  Payment History
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PaymentHistoryBuyer trigger={viewForm} setTrigger={setViewForm} />
    </div>
  );
};

export default BuyerBookings;
