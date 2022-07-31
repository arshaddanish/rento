import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">RENTO</div>
      <div className="nav-items">
        <p>Home</p>
        <p>Services</p>
        <p>About</p>
        <p>Contact</p>
        <p>Login</p>
      </div>
    </div>
  );
}
