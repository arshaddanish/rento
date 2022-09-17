import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountTabs from "./AccountTabs";
import "./account.scss";
import AddToStore from "./add-to-store/AddToStore";

export default function Account1() {
  return (
    <div className="account">
      <div className="account-tabs">
        <AccountTabs />
      </div>
      <div className="account-page">
        <Routes>
          <Route path="/add-to-store" element={<AddToStore />} />
        </Routes>
      </div>
    </div>
  );
}
