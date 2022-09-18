import React from "react";
import "./subscriptionCard.scss";
import { useNavigate } from "react-router-dom";

let SubscriptionCard = ({ period, price }) => {
  const navigate = useNavigate();
  let subscribe = async () => {
    if (!localStorage.getItem("jwt_token")) {
      alert("Login to subscribe!");
      navigate("/login");
    } else {
      console.log("Hai");
    }
  };
  return (
    <div className="subscriptionCard-main">
      <h1>{price}/-</h1>
      <h3>{period}</h3>
      <button onClick={subscribe}>SUBSCRIBE</button>
    </div>
  );
};

export default SubscriptionCard;
