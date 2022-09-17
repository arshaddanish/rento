import React from "react";
import "./profile.scss";
// import person from '../../../assets/images/profile/person.png'
import Profile1 from "./Profile1";

const Profile = ({ userData }) => {
  return (
    <div className="profile-main">
      {/* <div className="profile-sub">
            <div className="profile-bold">Photo</div><div className="profile-right"><img className='profile-img' src={person} alt="" /></div>
            <div className="profile-bold">Name</div><div className="profile-right">Sidharth A</div>
            <div className="profile-bold">Phone No.</div><div className="profile-right">9876543210</div>
            <div className="profile-bold">Email</div><div className="profile-right">sidharth.a.satheesh@gmail.com</div>
            <div className="profile-bold">Gender</div><div className="profile-right">Male</div>
            <div className="profile-bold">Date of Birth</div><div className="profile-right">15/09/2001</div>
            <div className="profile-bold">Address</div><div className="profile-right">House Name <br />Street Name <br />City</div>
            <div className="profile-bold sub-status">Subscription Status</div><div className="profile-right sub-status">Active</div>
        </div> */}
      <Profile1 userData={userData} />
    </div>
  );
};

export default Profile;
