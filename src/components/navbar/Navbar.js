import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
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
          <Link to="/">
            <p>Services</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/">
            <p>Contact</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
