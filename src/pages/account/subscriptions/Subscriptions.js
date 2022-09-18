import "./subscriptions.scss";
import React, { useState } from "react";
import { Button } from "@mui/material";
import VerifyPopUp from "./VerifyProfile";

const Subscriptions = ({ userData, onVerifyApply }) => {
  let { verStatus } = userData;
  const registrations = [
    {
      id: 1,
      name: "15/09/2022",
      dept: "Quarterly",
      batch: "799",
    },
    {
      id: 2,
      name: "21/10/2021",
      dept: "Yealy",
      batch: "999",
    },
    {
      id: 3,
      name: "03/05/2022",
      dept: "Quarterly",
      batch: "799",
    },
    {
      id: 4,
      name: "03/05/2022",
      dept: "Monthly",
      batch: "499",
    },
    {
      id: 5,
      name: "03/05/2022",
      dept: "Yearly",
      batch: "999",
    },
  ];

  const [viewForm, setViewForm] = useState(false);

  function NotVerified() {
    return (
      <div>
        Verify your profile to become a seller.
        <Button
          variant="contained"
          className="verify-btn"
          onClick={() => setViewForm(true)}
        >
          Verify Now
        </Button>
      </div>
    );
  }

  function Verified() {
    return (
      <div className="subscription-main">
        <div>
          <h2 className="reg-heading-main">Subscription History</h2>
        </div>
        <div className="reg-details">
          <div className="reg-heading">
            <div>Subscription Date</div>
            <div>End Date</div>
            <div>Plan</div>
            <div>Amount</div>
          </div>
          {registrations.map((e) => (
            <div key={e.id} className="reg-data">
              <div>{e.name}</div>
              <div>{e.name}</div>
              <div>{e.dept}</div>
              <div>Rs. {e.batch}/-</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Pending() {
    return <div>Application to verify your account has been submitted.</div>;
  }

  function Rejected() {
    return (
      <div>
        Application to verify your account was rejected.
        <Button variant="contained">Verify Again</Button>
      </div>
    );
  }

  return (
    <div className="subscription">
      <div className="ver-status">
        {verStatus === "Not verified" && <NotVerified />}
        {verStatus === "Pending" && <Pending />}
        {verStatus === "Verified" && <Verified />}
        {verStatus === "Rejected" && <Rejected />}
      </div>
      <VerifyPopUp trigger={viewForm} setTrigger={setViewForm} onVerifyApply={onVerifyApply} />
    </div>
  );
};

export default Subscriptions;
