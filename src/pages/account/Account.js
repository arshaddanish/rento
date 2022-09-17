import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountTabs from "./AccountTabs";
import "./account.scss";
import AddToStore from "./add-to-store/AddToStore";
import Store from "./store/Store";
import EditItem from "./edit-item/EditItem";
import BuyerRequests from "./buyer-requests/BuyerRequests";
import SellerRequests from "./seller-requests/SellerRequests";
import Profile from "./profile/Profile";

export default function Account() {
  return (
    <div className="account">
      <div className="account-tabs">
        <AccountTabs />
      </div>
      <div className="account-page">
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/" element={<Profile />} />
          <Route path="/edit-item/:id" element={<EditItem />} />
          <Route path="/add-to-store" element={<AddToStore />} />
          <Route path="/buyer-requests" element={<BuyerRequests />} />
          <Route path="/seller-requests" element={<SellerRequests />} />
        </Routes>
      </div>
    </div>
  );
}
