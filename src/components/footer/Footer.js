import React from "react";
import "./footer.scss";
import { useLocation, Link } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import TextField from "@mui/material/TextField";

export default function Footer() {

  let { pathname } = useLocation();
  if (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot" || 
    pathname === "/resetpass" || 
    pathname.match("/admin")
  ) {
    return null;
  }


  return (
    <div className="footer">
      <div className="container">
        <div className="contact">
          <h4>RENTO</h4>
          <p className="desc">All In One Rental MarketPlace.</p>
          <p>Kannur, Kerala</p>
          <p>rento@gmail.com</p>
          <p></p>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <Link to="/"><p>Home</p></Link>
          <Link to="/about"><p>About</p></Link>
          <Link to="/contact"><p>Contact</p></Link>
          <Link to="/account"><p>Account</p></Link>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; Rento 2022</p>
      </div>
    </div>
  );
}
