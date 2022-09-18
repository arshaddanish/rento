import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import apis from "../../../apis";
import { fileUpload } from "../../../services/fileUpload";
import { httpHeaders } from "../../../services/httpHeaders";
import { validateFileSize } from "../../../services/validateFileSize";
import "./verifyProfile.scss";

const VerifyPopUp = ({ trigger, setTrigger, onVerifyApply }) => {
  let [imgData, setImgData] = useState(null);
  const [submitBtn, setSubmitBtn] = useState(0);

  useEffect(() => {
    myWait();
  }, [imgData]);

  let myWait = async () => {
    if (typeof imgData == "string") {
      await apis.post(
        "verification",
        {
          aadharImg: imgData,
        },
        httpHeaders("user")
      );
      onVerifyApply();
      setTrigger(false);
    }
  };

  let onInputChange = async (e) => {
    validateFileSize(e.target.files[0]);
    setImgData(e.target.files[0]);
  };

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    let img = await fileUpload(imgData);
    setImgData(img);
  };

  return trigger ? (
    <div className="verify-popup-main">
      <div className="form-popup">
        <div onClick={() => setTrigger(false)} className="form-popup-close-btn">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="form-popup-sub">
          <form onSubmit={onFormSubmit}>
            <p style={{ marginBottom: "0.75rem" }}>Aadhar Image</p>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              name="aadharImg"
              required
              onChange={onInputChange}
            />
            <div className="verify-submit">
              <Button type="submit" variant="contained" fullWidth>
                {submitBtn ? "Submitting..." : "Submit"}{" "}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default VerifyPopUp;
