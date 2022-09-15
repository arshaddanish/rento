import React from "react";
import { Route, Routes } from "react-router-dom";
import "./homeAdmin.scss";
import HomeTabs from "./HomeTabs";
import SellerVerification from "./seller-verification/SellerVerification";
import Users from "./users/Users";
import VerificationHistory from "./verification-history/VerificationHistory";

export default function HomeAdmin() {
  return (
    <div className="home-admin">
      <div className="home-tabs">
        <HomeTabs />
      </div>
      <div className="home-page">
        <Routes>
          {/* <Route path="/" element={<H />} /> */}
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
