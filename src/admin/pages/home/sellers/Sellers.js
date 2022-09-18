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
    // console.log(data);
    setSellers(data);
  };

  let [selectedSellerIndex, setSelectedSellerIndex] = useState(null);
  let onView = (i) => {
    setSelectedSellerIndex(i);
    setViewForm(true);
  };

  let onView2 = (i) => {
    setSelectedSellerIndex(i);
    setViewSubscriptionHistory(true);
  };

  const [viewForm, setViewForm] = useState(false);
  const [viewSubscriptionHistory, setViewSubscriptionHistory] = useState(false);

  if (!sellers.sellers) {
    return null;
  }

  return (
    <div className="registration-main4">
      <div>
        <h2 className="reg-heading-main">Sellers</h2>
      </div>
      <div className="reg-details">
        <div className="reg-heading">
          <div>Name</div>
          <div>Phone No.</div>
          <div>Email</div>
          <div>DOB</div>
        </div>
        {sellers.sellers.map((e, index) => (
          <div key={e._id} className="reg-data">
            <div>{e.name}</div>
            <div>{e.phone}</div>
            <div>{e.email}</div>
            <div>{e.dob.substring(0, 10)}</div>
            <div className="reg-btns">
              <Button onClick={() => onView(index)} variant="contained">
                View
              </Button>
              <Button
                color="success"
                variant="contained"
                onClick={() => onView2(index)}
              >
                Subscription History
              </Button>
              {/* <Button color='success' variant="contained">Approve</Button>
                            <Button color='error' variant="contained">Decline</Button> */}
            </div>
          </div>
        ))}
      </div>
      <FormPopUp
        trigger={viewForm}
        setTrigger={setViewForm}
        selectedSeller={sellers.sellers[selectedSellerIndex]}
      />
      <SubscriptionHistory
        trigger={viewSubscriptionHistory}
        setTrigger={setViewSubscriptionHistory}
        selectedSubscriptions={sellers.allSubscriptions[selectedSellerIndex]}
        selectedPlans={sellers.allPlans[selectedSellerIndex]}
      />
    </div>
  );
};

export default Sellers;
