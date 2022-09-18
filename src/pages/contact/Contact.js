import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./contact.scss";
import apis from "../../apis";

const Contact = () => {
  let [formData, setFormData] = useState({});
  const [submitBtn, setSubmitBtn] = useState(0);

  let onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    await apis.post("message", formData);
    alert("Message Sent!");
    setSubmitBtn(0);
  };

  return (
    <div className="contact-main">
      <div className="contact-sub">
        <div className="contact-sub-left">
          <p>Contact Us</p>
          <h1>Leave Us a Message</h1>
          <p className="contact-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporeum dicant partem scripserit, doctus appetere
            interpretaris.
          </p>
          <div className="contact-icons">
            <a href="https://twitter.com/">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.pinterest.com/">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <div className="contact-inputs">
              <TextField
                id="outlined-basic"
                label="Name"
                type="text"
                variant="outlined"
                name="name"
                onChange={onInputChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                email="email"
                name="email"
                onChange={onInputChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="phone"
                type="text"
                onChange={onInputChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                type="text"
                name="subject"
                onChange={onInputChange}
                required
              />
            </div>
            <div>
              <TextField
                style={{ border: "none", outline: "none" }}
                rows={8}
                fullWidth
                multiline
                type="text"
                id="outlined-basic"
                label="Message"
                variant="outlined"
                name="message"
                onChange={onInputChange}
                required
              />
              <Button
                primary
                style={{
                  width: "250px",
                  height: "60px",
                  marginTop: "1rem",
                  backgroundColor: "#0096FF",
                }}
                variant="contained"
                type="submit"
              >
                {submitBtn ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
