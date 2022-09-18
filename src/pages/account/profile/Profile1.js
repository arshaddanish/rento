import React, { useState } from "react";
import "./profile1.scss";
import { Button } from "@mui/material";
// import person from "../../../assets/images/profile/person.png";
import EditProfile from "./EditProfile";
import { imageUrl } from "../../../services/imageUrl";

const Profile1 = ({ userData, onEditProfile }) => {
  const [editProfile, setEditProfile] = useState(false);
  return (
    <div className="profile1-main">
      <div className="profile1-sub">
        <div className="edit-pro-btn">
          <Button onClick={() => setEditProfile(true)} variant="contained">
            Edit Profile
          </Button>
        </div>
        <div className="pro-img">
          <img
            className="pro-img-main"
            src={imageUrl(userData.profileImg)}
            alt=""
          />
        </div>
        <div className="pro-details">
          <div className="pro-sub">
            <div className="pro-bold">Name</div> <div>: {userData.name}</div>
            <div className="pro-bold">Phone No.</div>{" "}
            <div>: {userData.phone}</div>
            <div className="pro-bold">Email</div> <div>: {userData.email}</div>
            <div className="pro-bold">Gender</div>{" "}
            <div>: {userData.gender}</div>
            <div className="pro-bold">Date of Birth</div>{" "}
            <div>: {userData.dob.substring(0, 10)}</div>
            <div className="pro-bold">Address</div>{" "}
            <div>: {userData.address}</div>
          </div>
        </div>
      </div>
      <EditProfile
        trigger={editProfile}
        setTrigger={setEditProfile}
        userData={userData}
        onEditProfile={onEditProfile}
      />
    </div>
  );
};

export default Profile1;
