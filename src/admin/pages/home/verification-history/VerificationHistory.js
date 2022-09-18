import React, { useEffect, useState } from "react";
import "./verificationHistory.scss";
import { Button } from "@mui/material";
import FormPopUp from "./FormPopUp";
import apis from "../../../../apis";
import { httpHeaders } from "../../../../services/httpHeaders";
import { useNavigate } from "react-router-dom";

const VerificationHistory = () => {
  let navigate = useNavigate();

  let [requests, setRequests] = useState([]);
  useEffect(() => {
    fetchRequests();
  }, []);
  let fetchRequests = async () => {
    let { data } = await apis.get("verification-history", httpHeaders("admin"));
    setRequests(data);
  };

  const [viewForm, setViewForm] = useState(false);
  let [selectedRequest, setSelectedRequest] = useState(null);
  let onView = (e) => {
    setSelectedRequest(e);
    setViewForm(true);
  };

  return (
    <div className="registration-main1">
      <div>
        <h2 className="reg-heading-main">Verification History</h2>
      </div>
      <div className="reg-details">
        <div className="reg-heading">
          <div>Verification Date</div>
          <div>Name</div>
          <div>Phone No.</div>
          <div>Email</div>
        </div>
        {requests.map((e) => (
          <div key={e.id} className="reg-data">
            <div>{e.verDate.substring(0, 10)}</div>
            <div>{e.name}</div>
            <div>{e.phone}</div>
            <div>{e.email}</div>
            {/* <div className='reg-btns'> */}
            <Button onClick={() => onView(e)} variant="contained">
              View
            </Button>
            {/* <Button color='success' variant="contained">Approve</Button>
                            <Button color='error' variant="contained">Decline</Button> */}
            {/* </div> */}
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

export default VerificationHistory;
