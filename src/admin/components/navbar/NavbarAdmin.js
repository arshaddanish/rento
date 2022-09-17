import React from "react";
import "./navbarAdmin.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavbarAdmin() {
  let { pathname } = useLocation();
  let navigate = useNavigate();
  if (
    pathname &&
    (pathname.substring(0, 6) !== "/admin" || pathname === "/admin/login")
  ) {
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
          <span
            onClick={() => {
              localStorage.removeItem("jwt_admin");
              navigate("/admin/login");
            }}
          >
            <p>Logout</p>
          </span>
        </div>
      </div>
    </div>
  );
}
