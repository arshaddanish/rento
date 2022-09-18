import "./sellers.scss";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import FormPopUp from "./FormPopUp";
import SubscriptionHistory from "./SubscriptionHistory";
import apis from "../../../../apis";
import { httpHeaders } from "../../../../services/httpHeaders";

const Sellers = () => {
  let [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetchSellers();
  }, []);

  let fetchSellers = async () => {
    let { data } = await apis.get("sellers", httpHeaders("admin"));
    setSellers(data);
  };

  const [viewForm, setViewForm] = useState(false);
  const [viewSubscriptionHistory, setViewSubscriptionHistory] = useState(false);
  return (
    <div className="registration-main4">
      <div>
        <h2 className="reg-heading-main">Sellers</h2>
      </div>
      <div className="reg-details">
        <div className="reg-heading">
          <div>Name</div>
          <div>Phone No.</div>
          <div>Location</div>
        </div>
        {sellers.map((item) => (
          <div key={item._id} className="reg-data">
            <div>{item.name}</div>
            <div>{item.dept}</div>
            <div>{item.batch}</div>
            <div className="reg-btns">
              <Button onClick={() => setViewForm(true)} variant="contained">
                View
              </Button>
              <Button
                color="success"
                variant="contained"
                onClick={() => setViewSubscriptionHistory(true)}
              >
                Subscription History
              </Button>
              {/* <Button color='success' variant="contained">Approve</Button>
                            <Button color='error' variant="contained">Decline</Button> */}
            </div>
          </div>
        ))}
      </div>
      <FormPopUp trigger={viewForm} setTrigger={setViewForm} />
      <SubscriptionHistory
        trigger={viewSubscriptionHistory}
        setTrigger={setViewSubscriptionHistory}
      />
    </div>
  );
};

export default Sellers;
