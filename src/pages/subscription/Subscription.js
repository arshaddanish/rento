import React, { useEffect, useState } from "react";
import apis from "../../apis";
import "./subscription.scss";
import SubscriptionCard from "./SubscriptionCard";

const Subscription = () => {
  useEffect(() => {
    fetchSubscriptionPlans();
  }, []);

  const [plans, setPlans] = React.useState([]);

  let fetchSubscriptionPlans = async () => {
    let { data } = await apis.get("subscription-plans");
    setPlans(data);
  };

  return (
    <div className="subscribe-main">
      <div className="subscribe-sub">
        {plans.map((item, index) => {
          return (
            <SubscriptionCard
              period={item.name}
              price={item.amount}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Subscription;
