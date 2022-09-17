import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import "./homeAdmin.scss";
import HomeTabs from "./HomeTabs";
import SellerVerification from "./seller-verification/SellerVerification";
import Buyers from "./buyers/Buyers";
import VerificationHistory from "./verification-history/VerificationHistory";
import Sellers from "./sellers/Sellers";
import EditPlans from "./subscription-plans/EditPlans";

export default function HomeAdmin() {
  return (
    <div className="home-admin">
      <div className="home-tabs">
        <HomeTabs />
      </div>
      <div className="home-page">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/seller-verification" element={<SellerVerification />} />
          <Route
            path="/verification-history"
            element={<VerificationHistory />}
          />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/subscription-plans" element={<EditPlans />} />
        </Routes>
      </div>
    </div>
  );
}
