import React from "react";
import "./footer.scss";
import { useLocation } from "react-router-dom";

export default function Footer() {
  let { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return <div className="footer">
    <div className="container">
      <div className="contact">
        <h4>RENTO</h4>
      </div>
      <div className="quick-links">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      </div>
      <div className="newsletter">

      </div>
    </div>
  </div>;
}
