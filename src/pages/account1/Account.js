import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import "./homeAdmin.scss";
import HomeTabs from "./HomeTabs";
import SellerVerification from "./seller-verification/SellerVerification";
import Users from "./users/Users";
import VerificationHistory from "./verification-history/VerificationHistory";

export default function Account() {
  return (
    <div className="account">
      <div className="account-tabs">
        <AccountTabs />
      </div>
      <div className="account-page">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/seller-verification" element={<SellerVerification />} />
          <Route
            path="/verification-history"
            element={<VerificationHistory />}
          />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}
