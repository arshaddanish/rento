import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./account.scss";
import AddToStore from "./add-to-store/AddToStore";
import Store from "./store/Store";
import EditItem from "./edit-item/EditItem";
import BuyerRequests from "./buyer-requests/BuyerRequests";
import SellerRequests from "./seller-requests/SellerRequests";
import Profile from "./profile/Profile";
import apis from "../../apis";
import { httpHeaders } from "../../services/httpHeaders";
import SellerBookings from "./seller-bookings/SellerBookings";
import BuyerBookings from "./buyer-bookings/BuyerBookings";
import SellerTabs from "./SellerTabs";
import BuyerTabs from "./BuyerTabs";

export default function Account() {
  useEffect(() => {
    fetchUserDetails();
  }, []);

  let fetchUserDetails = async () => {
    let { data } = await apis.get("/users/user", httpHeaders("user"));
    setUserData(data);
  };

  let [userData, setUserData] = useState(null);
  let onModeChange = () => {
    setUserData((pd) => ({ ...pd, mode: !pd.mode }));
  };

  if (!userData) return null;

  return (
    <div className="account">
      <div className="account-tabs">
        {userData.mode ? (
          <SellerTabs onModeChange={onModeChange} />
        ) : (
          <BuyerTabs verStatus={userData.verStatus} onModeChange={onModeChange} />
        )}
      </div>
      <div className="account-page">
        <Routes>
          <Route path="/" element={<Profile userData={userData} />} />
          <Route path="/store" element={<Store />} />
          <Route path="/edit-item/:id" element={<EditItem />} />
          <Route path="/add-to-store" element={<AddToStore />} />
          <Route path="/buyer-requests" element={<BuyerRequests />} />
          <Route path="/seller-requests" element={<SellerRequests />} />
          <Route path="/buyer-bookings" element={<BuyerBookings />} />
          <Route path="/seller-bookings" element={<SellerBookings />} />
        </Routes>
      </div>
    </div>
  );
}
