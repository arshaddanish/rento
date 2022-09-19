import React, { useEffect, useState } from "react";
import "./sellerRequests.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import { httpHeaders } from "../../../services/httpHeaders";
import FormPopUp from "./FormPopUp";

const SellerRequests = () => {
  let navigate = useNavigate();
  let [customerInfo, setCustomerInfo] = useState(false);
  let [requests, setRequests] = useState();
  useEffect(() => {
    fetchRequests();
  }, []);
  let fetchRequests = async () => {
    let { data } = await apis.get(
      "booking/requests/seller",
      httpHeaders("user")
    );
    // console.log(data);
    setRequests(data);
  };

  let onItemClick = (item) => {
    navigate("/categories/" + item.category.toLowerCase() + "/" + item._id);
  };

  // let onDelete = async (id, id2) => {
  //   await apis.delete("booking/" + id, httpHeaders("user"));
  //   setRequests((pd) => ({
  //     ...pd,
  //     bookings: requests.bookings.filter((item) => item._id !== id),
  //     item_info: requests.item_info.filter((item) => item._id !== id2),
  //   }));
  // };
  const [viewForm, setViewForm] = useState(false);

  let onAccept = async (id) => {
    await apis.patch(
      "booking",
      { status: "Approved", id: id },
      httpHeaders("user")
    );
    navigate("/account/seller-bookings");
  };

  let onReject = async (id, buyerId, itemId) => {
    await apis.patch(
      "booking",
      { status: "Rejected", id: id },
      httpHeaders("user")
    );
    setRequests((pd) => ({
      ...pd,
      bookings: requests.bookings.filter((item) => item._id !== id),
      buyer_info: requests.buyer_info.filter((item) => item._id !== buyerId),
      item_info: requests.item_info.filter((item) => item._id !== itemId),
    }));
  };

  let onCustomerView = async (item) => {
    setViewForm(true);
    setCustomerInfo(item);
  };

  if (!requests) return null;
  return (
    <div className="seller-requests">
      <div className="registration-main2">
        <div>
          <h2 className="reg-heading-main">Requests</h2>
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
          {requests.bookings.map((e, i) => (
            <div key={e._id} className="reg-data">
              <div
                onClick={() => onItemClick(requests.item_info[i])}
                className="item-link"
              >
                {requests.item_info[i].name}
              </div>
              <div
                className="item-link"
                onClick={() => onCustomerView(requests.buyer_info[i])}
              >
                {requests.buyer_info[i].name}
              </div>
              <div>{e.bookingDate.substring(0, 10)}</div>
              <div>{e.pickupDate.substring(0, 10)}</div>
              <div>{e.dropoffDate.substring(0, 10)}</div>
              <div>{e.quantity}</div>
              <div className="reg-btns">
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => onAccept(e._id)}
                >
                  Accept
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() =>
                    onReject(
                      e._id,
                      requests.buyer_info[i]._id,
                      requests.item_info[i]._id
                    )
                  }
                >
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FormPopUp
        trigger={viewForm}
        setTrigger={setViewForm}
        customerInfo={customerInfo}
      />
    </div>
  );
};

export default SellerRequests;
