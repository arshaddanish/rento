import React, { useEffect, useState } from "react";
import "./buyers.scss";
import { Button } from "@mui/material";
import FormPopUp from "./FormPopUp";
import apis from "../../../../apis";
import { httpHeaders } from "../../../../services/httpHeaders";

const Buyers = () => {
  let [buyers, setBuyers] = useState([]);
  useEffect(() => {
    fetchBuyers();
  }, []);
  let fetchBuyers = async () => {
    let { data } = await apis.get("buyers", httpHeaders("admin"));
    setBuyers(data);
  };

  let [selectedBuyer, setSelectedBuyer] = useState(null);
  let onView = (e) => {
    setSelectedBuyer(e);
    setViewForm(true);
  };
  const [viewForm, setViewForm] = useState(false);

  return (
    <div className="registration-main3">
      <div>
        <h2 className="reg-heading-main">Buyers</h2>
      </div>
      <div className="reg-details">
        <div className="reg-heading">
          <div>Name</div>
          <div>Phone No.</div>
          <div>Email</div>
          <div>DOB</div>
        </div>
        {buyers.map((e) => (
          <div key={e._id} className="reg-data">
            <div>{e.name}</div>
            <div>{e.phone}</div>
            <div>{e.email}</div>
            <div>{e.dob.substring(0,10)}</div>
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
        selectedBuyer={selectedBuyer}
      />
    </div>
  );
};

export default Buyers;
