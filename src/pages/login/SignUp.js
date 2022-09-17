import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";
import handshake from "../../images/handshake.jpg";
import { validateFileSize } from "../../services/validateFileSize";
import { fileUpload } from "../../services/fileUpload";
import apis from "../../apis";

const SignUp = () => {
  const navigate = useNavigate();

  let [formData, setFormData] = useState({});
  let [imgData, setImgData] = useState(null);
  const [submitBtn, setSubmitBtn] = useState(0);

  useEffect(() => {
    myWait();
  }, [imgData]);

  let myWait = async () => {
    if (typeof imgData == "string") {
      let { data } = await apis.post("users", {
        ...formData,
        img: imgData,
      });
      console.log(data);
      localStorage.setItem("jwt_token", data.token);
      navigate("/account");
    }
  };

  let onInputChange = async (e) => {
    if (e.target.name === "profileImg") {
      validateFileSize(e.target.files[0]);
      setImgData(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  let onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitBtn(1);
    let img = await fileUpload(imgData);
    setImgData(img);
  };

  return (
    <div>
      <div className="main-signup">
        <div className="signup-left">
          <img src={handshake} alt="" />
        </div>
        <div></div>
        <div className="login-main">
          <div className="login">
            <h1>Lets get started</h1>
            <p>
              or{" "}
              <Link to="/login">
                <span className="link">Login to your account</span>
              </Link>
            </p>
            <form onSubmit={onFormSubmit} autoComplete="off">
              <input type="hidden" value="prayer" />
              {/* <input placeholder='Name' type="text" name="" id="" /> */}
              <TextField
                fullWidth
                // id="outlined-basic1"
                label="Name"
                type={"text"}
                variant="outlined"
                required
                onChange={onInputChange}
                name="name"
              />
              <div className="gap"></div>
              <TextField
                fullWidth
                // id="outlined-basic1"
                label="Email"
                type={"email"}
                variant="outlined"
                required
                onChange={onInputChange}
                name="email"
              />
              <div className="gap"></div>
              <TextField
                fullWidth
                // id="outlined-basic1"
                label="Phone Number"
                type={"text"}
                variant="outlined"
                required
                onChange={onInputChange}
                name="phone"
              />
              <div className="gap"></div>

              <TextField
                fullWidth
                // id="outlined-basic1"
                multiline
                rows={2}
                label="Address"
                type={"number"}
                variant="outlined"
                required
                onChange={onInputChange}
                name="address"
              />
              <div className="gap"></div>
              {/* <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Date of Birth" 
                  type={"date"}
                  variant="outlined" 
                /> */}
              <TextField
                label="Date of Birth"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                required
                onChange={onInputChange}
                name="dob"
              />
              <div className="gap"></div>
              <FormControl fullWidth>
                <InputLabel id="choose-gender">Gender</InputLabel>
                <Select
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  id="demo-simple-select"
                  label="Categories"
                  labelId="muil1"
                  displayEmpty
                  fullWidth
                  required
                  onChange={onInputChange}
                  name="gender"
                  style={{ textAlign: "left" }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
              <div className="gap"></div>
              <div className="profile-img-field">
                <p>Add Profile Image</p>
                <input
                  type="file"
                  name="profileImg"
                  required
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={onInputChange}
                />
              </div>
              <div className="gap"></div>
              <TextField
                fullWidth
                // id="outlined-basic1"
                label="Password"
                type={"password"}
                variant="outlined"
                required
                onChange={onInputChange}
                name="password"
              />
              <div className="gap"></div>
              {/* <input placeholder='Email' type="email" name="" id="" />
                    <input placeholder='Phone number' type="number" name="" id="" />
                    <input placeholder='House Name' type="text" name="" id="" />
                    <input placeholder='Locality' type="text" name="" id="" />
                    <input placeholder='City' type="text" name="" id="" />
                    <input placeholder='Pincode' type="number" name="" id="" />
                    <input placeholder='Date of Birth' type="date" name="" id="" />
                    <input placeholder='Password' type="password" name="" id="" /> */}
              {/* <button onClick={navigateToHome} type='submit'>Create Account</button> */}

              <Button type="submit" variant="contained">
                Create Account
              </Button>
              <div className="gap"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
