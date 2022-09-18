import React, { useEffect, useState } from "react";
import "./sellerVerification.scss";
import { Button } from "@mui/material";
import FormPopUp from "./FormPopUp";
import apis from "../../../../apis";
import { httpHeaders } from "../../../../services/httpHeaders";
import { useNavigate } from "react-router-dom";

const SellerVerification = () => {
  let navigate = useNavigate();

  let [requests, setRequests] = useState([]);
  useEffect(() => {
    fetchRequests();
  }, []);
  let fetchRequests = async () => {
    let { data } = await apis.get("verification", httpHeaders("admin"));
    setRequests(data);
  };

  const [viewForm, setViewForm] = useState(false);
  let [selectedRequest, setSelectedRequest] = useState(null);
  let onView = (e) => {
    setSelectedRequest(e);
    setViewForm(true);
  };

  let onApprove = async (id) => {
    await apis.patch(
      "verification/" + id,
      { verStatus: "Verified" },
      httpHeaders("admin")
    );
    navigate("/admin/verification-history");
  };

  let onDecline = async (id) => {
    await apis.patch(
      "verification/" + id,
      { verStatus: "Rejected" },
      httpHeaders("admin")
    );
    setRequests(requests.filter((item) => item._id !== id));
  };

  return (
    <div className="registration-main2">
      <div>
        <h2 className="reg-heading-main">Seller Verification</h2>
      </div>
      <div className="reg-details">
        <div className="reg-heading">
          <div>Name</div>
          <div>Phone No.</div>
          <div>Email</div>
          <div>DOB</div>
        </div>
        {requests.map((e) => (
          <div key={e.id} className="reg-data">
            <div>{e.name}</div>
            <div>{e.phone}</div>
            <div>{e.email}</div>
            <div>{e.dob.substring(0, 10)}</div>
            <div className="reg-btns">
              <Button onClick={() => onView(e)} variant="contained">
                View
              </Button>
              <Button
                color="success"
                variant="contained"
                onClick={() => onApprove(e._id)}
              >
                Approve
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={() => onDecline(e._id)}
              >
                Decline
              </Button>
            </div>
          </div>
        ))}
      </div>
      <FormPopUp
        trigger={viewForm}
        setTrigger={setViewForm}
        selectedRequest={selectedRequest}
      />
    </div>
  );
};

export default SellerVerification;
