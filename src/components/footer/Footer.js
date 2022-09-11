import React from "react";
import "./footer.scss";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";

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
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Account</p>
        </div>
        <div className="newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to get the latest news from Rento.</p>
          <div className="form">
            <TextField
              label="Email"
              variant="filled"
              style={{ background: "white", borderRadius: "10px" }}
              InputProps={{ disableUnderline: true }}
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; Rento 2022</p>
      </div>
    </div>
  );
}
