import React from "react";
import "./navbarAdmin.scss";
import { Link, useLocation } from "react-router-dom";

export default function NavbarAdmin() {
  let { pathname } = useLocation();
  if (pathname.substring(0, 6) !== "/admin" || pathname === "/admin/login") {
    return null;
  }

  return (
    <div className="navbar-admin">
      <div className="container">
        <Link to="/admin">
          <div className="brand">RENTO</div>
        </Link>
        <div className="nav-items">
          <Link to="/admin">
            <p>Home</p>
          </Link>
          <Link to="/admin/blogs">
            <p>Blogs</p>
          </Link>
          <Link to="/admin/messages">
            <p>Messages</p>
          </Link>
          <Link to="/admin/login">
            <p>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
