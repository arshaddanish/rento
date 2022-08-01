import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/signup" || pathname === "/forgot") {
    return null;
  }

  return (
    <div className="navbar">
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
          <Link to="/profile">
            <p>Profile</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
