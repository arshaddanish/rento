import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import apis from "../../../../apis";
import "./editPlans.scss";

export default function EditPlans() {
  useEffect(() => {
    fetchSubscriptionPlans();
  }, []);

  const [plans, setPlans] = React.useState([]);

  let fetchSubscriptionPlans = async () => {
    let { data } = await apis.get("subscription-plans");
    setPlans(data);
  };

  function UpdateField({ item, index }) {
    let [formData, setFormData] = useState(item.amount);
    let onChange = (e) => {
      setFormData(e.target.value);
    };

    let onFormSubmit = async (e) => {
      e.preventDefault();
      await apis.patch("subscription-plans/" + item._id, {
        amount: formData,
      });
      alert("Updated Successfully!");
    };

    return (
      <form onSubmit={onFormSubmit}>
        <div className="field">
          <TextField
            id="outlined-basic"
            label={`${item.name} Plan`}
            variant="standard"
            fullWidth
            name="category"
            required
            defaultValue={item.amount}
            InputLabelProps={{ shrink: true }}
            onChange={onChange}
          />
          <Button variant="contained" type="submit">
            Update
          </Button>
        </div>
      </form>
    );
  }

  return (
    <>
      <div className="edit-plans">
        {plans.map((item, index) => {
          return <UpdateField item={item} index={index} key={index} />;
        })}
      </div>
    </>
  );
}
