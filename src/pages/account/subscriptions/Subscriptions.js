import "./subscriptions.scss";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import VerifyPopUp from "./VerifyProfile";
import { httpHeaders } from "../../../services/httpHeaders";
import apis from "../../../apis";
import { useNavigate } from "react-router-dom";

const Subscriptions = ({ userData, onVerifyApply }) => {
  let navigate = useNavigate();
  let { verStatus } = userData;

  let [subscriptions, setSubscriptions] = useState(null);
  useEffect(() => {
    fetchSubscriptions();
  }, []);
  let fetchSubscriptions = async () => {
    let { data } = await apis.get("seller-subscriptions", httpHeaders("user"));
    setSubscriptions(data);
  };

  const [viewForm, setViewForm] = useState(false);

  if (!subscriptions) {
    return null;
  }

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
      <>
        {!subscriptions.subStatus && (
          <div className="subscribe-content">
            Your Subscription is inactive. Subscribe to rent items.{" "}
            <Button
              variant="contained"
              className="verify-btn"
              onClick={() => navigate("/subscribe")}
            >
              Subscribe Now
            </Button>
          </div>
        )}
        {subscriptions.subscriptions[0] && (
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
              {subscriptions.subscriptions.map((e, index) => (
                <div key={e._id} className="reg-data">
                  <div>{e.subDate.substring(0, 10)}</div>
                  <div>{e.endDate.substring(0, 10)}</div>
                  <div>{subscriptions.plans[index].name}</div>
                  <div>Rs. {subscriptions.plans[index].amount}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  function Pending() {
    return <div>Application to verify your account has been submitted.</div>;
  }

  function Rejected() {
    return (
      <div>
        Application to verify your account was rejected.
        <Button
          variant="contained"
          className="verify-btn"
          onClick={() => setViewForm(true)}
        >
          Verify Again
        </Button>
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
      <VerifyPopUp
        trigger={viewForm}
        setTrigger={setViewForm}
        onVerifyApply={onVerifyApply}
      />
    </div>
  );
};

export default Subscriptions;
