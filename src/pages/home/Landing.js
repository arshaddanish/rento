import React from "react";
// import TextField from "@mui/material/TextField";

export default function Landing() {
  const screenScroll = ()=>{
    window.scrollBy(0,750);
  }
  return (
    <div className="landing">
      <h1>All In One Rental Market Place !</h1>
      <p>We have what you need from tools to apartments.</p>
      <div className="btn-div"><button onClick={screenScroll} className="find-btn">Explore</button></div>
    </div>
  );
}
