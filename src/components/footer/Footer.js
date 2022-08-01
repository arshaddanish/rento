import React from "react";
import "./footer.scss";
import { useLocation } from "react-router-dom";

export default function Footer() {
  let { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return <div className="footer">&copy; Rento 2022</div>;
}
