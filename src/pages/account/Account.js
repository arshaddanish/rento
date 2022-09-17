import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AccountTabs from "./AccountTabs";
import "./account.scss";
import AddToStore from "./add-to-store/AddToStore";
import Store from "./store/Store";
import EditItem from "./edit-item/EditItem";
import BuyerRequests from "./buyer-requests/BuyerRequests";
import SellerRequests from "./seller-requests/SellerRequests";
import Profile from "./profile/Profile";
import apis from "../../apis";
import { httpHeaders } from "../../services/httpHeaders";

export default function Account() {
  useEffect(() => {
    fetchUserDetails();
  }, []);

  let fetchUserDetails = async () => {
    let { data } = await apis.get("/users/user", httpHeaders("user"));
    console.log(data);
    setUserData(data);
  };

  let [userData, setUserData] = useState(null);

  if (!userData) return null;

  return (
    <div className="account">
      <div className="account-tabs">
        <AccountTabs />
      </div>
      <div className="account-page">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/store" element={<Store />} />
          <Route path="/edit-item/:id" element={<EditItem />} />
          <Route path="/add-to-store" element={<AddToStore />} />
          <Route path="/buyer-requests" element={<BuyerRequests />} />
          <Route path="/seller-requests" element={<SellerRequests />} />
        </Routes>
      </div>
    </div>
  );
}
