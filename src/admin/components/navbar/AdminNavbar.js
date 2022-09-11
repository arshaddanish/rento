import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

export default function AdminNavbar() {
  let { pathname } = useLocation();
  if (pathname === "/admin/login" || pathname === "/admin/forgot" || pathname === "/resetpass" || !pathname.match("/admin")) {
    return null;
  }

  return (
    <div className="admin-navbar">
      <div className="container">
        <Link to="/">
          <div className="brand">RENTO</div>
        </Link>
        <div className="nav-items">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
          <Link to="/login">
            <p>Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
