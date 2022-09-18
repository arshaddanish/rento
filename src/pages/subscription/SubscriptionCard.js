import React, { useState } from "react";
import "./subscriptionCard.scss";
import { useNavigate } from "react-router-dom";
import apis from "../../apis";
import { httpHeaders } from "../../services/httpHeaders";

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

let SubscriptionCard = ({ item }) => {
  const navigate = useNavigate();

  const [submitBtn, setSubmitBtn] = useState(0);

  let subscribe = async () => {
    setSubmitBtn(1);
    if (!localStorage.getItem("jwt_token")) {
      alert("Login to subscribe!");
      navigate("/login");
    } else {
      let days = {
        Monthly: 30,
        Quarterly: 120,
        Yearly: 360,
      };
      let { data } = await apis.post(
        "subscriptions",
        {
          planId: item._id,
          subDate: Date.now(),
          endDate: addDays(Date.now(), days[item.name]),
        },
        httpHeaders("user")
      );
      if (typeof data === "string") {
        alert(data);
      }
      navigate("/account/subscriptions");
    }
  };

  return (
    <div className="subscriptionCard-main">
      <h1>{item.amount}/-</h1>
      <h3>{item.name}</h3>
      <button onClick={subscribe}>
        {submitBtn ? "Subscribing..." : "Subscribe"}
      </button>
    </div>
  );
};

export default SubscriptionCard;
