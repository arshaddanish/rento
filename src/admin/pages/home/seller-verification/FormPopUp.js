import React from "react";
import { imageUrl } from "../../../../services/imageUrl";
import "./FormPopUp.scss";

const FormPopUp = ({ trigger, setTrigger, selectedRequest: e }) => {
  return trigger ? (
    <div className="form-popup-main">
      <div className="form-popup">
        <div onClick={() => setTrigger(false)} className="form-popup-close-btn">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="img-box">
          <img src={imageUrl(e.profileImg)} alt="" className="profile-img" />
        </div>
        <div className="form-popup-sub">
          <div className="form-popup-bold">Name</div>
          <div>: {e.name}</div>
          <div className="form-popup-bold">Phone No.</div>
          <div>: {e.phone}</div>
          <div className="form-popup-bold">Email</div>
          <div>: {e.email}</div>
          <div className="form-popup-bold">DOB</div>
          <div>: {e.dob.substring(0, 10)}</div>
          <div className="form-popup-bold">Gender</div>
          <div>: {e.gender}</div>
          <div className="form-popup-bold">Address</div>
          <div>: {e.address}</div>
          <div className="form-popup-bold">Registration Date</div>
          <div>: {e.regDate.substring(0, 10)}</div>
          <div className="form-popup-bold">Aadhar Image</div>
          <div>
            <img src={imageUrl(e.aadharImg)} alt="" className="aadhar-img" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FormPopUp;
