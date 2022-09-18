import './subscriptions.scss'
import React from "react";
import { Button } from "@mui/material";

const Subscriptions = () => {
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
  // const [viewForm, setViewForm] = useState(false);
  return (
    <div className="subscription">
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
    </div>
  );
};

export default Subscriptions;
