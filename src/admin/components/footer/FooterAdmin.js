import React from "react";
import "./footerAdmin.scss";
import { useLocation } from "react-router-dom";

export default function FooterAdmin() {
  let { pathname } = useLocation();
  if (pathname.substring(0, 6) !== "/admin" || pathname === "/admin/login") {
    return null;
  }

  return (
    <div className="footer-admin">
      <div className="copyright">
        <p>&copy; Rento 2022</p>
      </div>
    </div>
  );
}
