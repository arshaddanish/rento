import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import image from "../../images/login1.png";
import logo from "../../images/logo.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import apis from "../../apis";

const Login = () => {
  const navigate = useNavigate();

  let [formData, setFormData] = useState({});
  const [submitBtn, setSubmitBtn] = useState(0);

  let onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    let { data } = await apis.post("users-login", formData);
    if (typeof data == "string") {
      alert("Invalid Credentials");
      setSubmitBtn(0);
    } else {
      localStorage.setItem("jwt_token", data.token);
      navigate("/account");
    }
  };

  return (
    <div className="main-login">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div className="login">
          <div>
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>

          <h1>Log In</h1>
          <p>
            or{" "}
            <Link to="/signup">
              <span className="link">Create an account</span>
            </Link>
          </p>
          <form onSubmit={onFormSubmit}>
            <TextField
              fullWidth
              // id="outlined-basic1"
              label="Email"
              name="email"
              type={"email"}
              variant="outlined"
              required
              onChange={onInputChange}
            />
            <div className="gap"></div>
            <TextField
              fullWidth
              // id="outlined-basic"
              label="Password"
              type={"password"}
              name="password"
              variant="outlined"
              required
              onChange={onInputChange}
            />
            {/* <input placeholder='Phone number' type="number" name="" id="" />
                    <input placeholder='Password' type="password" name="" id="" /> */}
            <Link to="/forgot" className="forgot-pass-btn">
              Forgot password?
            </Link>
            <Button type="submit" variant="contained">
              {submitBtn ? "Logging in..." : "Login"}
            </Button>
            {/* <button onClick={navigateToAccount} type='submit'>Login</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
