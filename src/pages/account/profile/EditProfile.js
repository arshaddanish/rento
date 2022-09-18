import React, { useEffect, useState } from "react";
import "./editProfile.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
// import Checkbox from '@mui/material/Checkbox'
import Box from "@mui/material/Box";
import apis from "../../../apis";
import { validateFileSize } from "../../../services/validateFileSize";
import { fileUpload } from "../../../services/fileUpload";
import { httpHeaders } from "../../../services/httpHeaders";

function EditProfile({ trigger, setTrigger, userData, onEditProfile }) {
  let [formData, setFormData] = useState({});
  let [imgData, setImgData] = useState(null);
  const [submitBtn, setSubmitBtn] = useState(0);

  useEffect(() => {
    myWait();
  }, [imgData]);

  let myWait = async () => {
    if (imgData && typeof imgData == "string") {
      let fd = {
        ...formData,
        profileImg: imgData,
      };
      await apis.patch("users/user", fd, httpHeaders("user"));
      onEditProfile(fd);
      setTrigger(false);
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
    setSubmitBtn(1);
    if (imgData) {
      let img = await fileUpload(imgData);
      setImgData(img);
    } else {
      await apis.patch("users/user", formData, httpHeaders("user"));
      onEditProfile(formData);
      setTrigger(false);
    }
  };

  return trigger ? (
    <div className="edit-profile-popup-main">
      <div className="edit-profile-popup">
        <div
          onClick={() => setTrigger(false)}
          className="edit-profile-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="edit-profile-form">
          <form onSubmit={onFormSubmit}>
            <h1>Edit Profile</h1>
            <div className="edit-profile-sub">
              <TextField
                fullWidth
                label="Name"
                type={"text"}
                variant="outlined"
                name="name"
                onChange={onInputChange}
                defaultValue={userData.name}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Email"
                type={"email"}
                variant="outlined"
                name="email"
                onChange={onInputChange}
                defaultValue={userData.email}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                type={"text"}
                variant="outlined"
                name="phone"
                onChange={onInputChange}
                defaultValue={userData.phone}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Address"
                type={"text"}
                variant="outlined"
                name="address"
                onChange={onInputChange}
                defaultValue={userData.address}
                InputLabelProps={{ shrink: true }}
              />
              <FormControl fullWidth>
                <InputLabel id="choose-gender">Gender</InputLabel>
                <Select
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  id="demo-simple-select"
                  label="Gender"
                  labelId="muil1"
                  displayEmpty
                  fullWidth
                  required
                  style={{ textAlign: "left" }}
                  name="gender"
                  onChange={onInputChange}
                  defaultValue={userData.gender}
                  InputLabelProps={{ shrink: true }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Date of Birth"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                name="dob"
                onChange={onInputChange}
              />
              <div className="edit-profile-change-pro-pic">
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  name="profileImg"
                  onChange={onInputChange}
                />
              </div>
              <div></div>
            </div>
            <Box display="flex" justifyContent="center" mt={3}>
              <Button type={"submit"} variant="contained">
                {submitBtn ? "Saving Changes..." : "Save Changes"}
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

export default EditProfile;
