import "./sellers.scss";
import React, { useState } from "react";
import { Button } from "@mui/material";
import FormPopUp from "./FormPopUp";
import SubscriptionHistory from "./SubscriptionHistory";

const Sellers = () => {
  const registrations = [
    {
      id: 1,
      name: "Albin Vargees",
      dept: "Computer Science Engineering",
      batch: "2011",
      date: "12/09/2021",
    },
    {
      id: 2,
      name: "Sidharth A",
      dept: "Electronics & Communication Engineering",
      batch: "2001",
      date: "12/09/2021",
    },
    {
      id: 3,
      name: "Arshad Danish",
      dept: "Mechanical Engineering",
      batch: "2003",
      date: "12/09/2021",
    },
    {
      id: 4,
      name: "Jyothiradithyan K",
      dept: "Civil Engineering",
      batch: "2007",
      date: "12/09/2021",
    },
    {
      id: 5,
      name: "Rishan KP",
      dept: "Computer Science Engineering",
      batch: "2010",
      date: "12/09/2021",
    },
  ];
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
        {registrations.map((e) => (
          <div key={e.id} className="reg-data">
            <div>{e.name}</div>
            <div>{e.dept}</div>
            <div>{e.batch}</div>
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