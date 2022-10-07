import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import "./loginAdmin.scss";

export default function LoginAdmin() {
  const navigate = useNavigate();

  let [formData, setFormData] = useState({});
  const [submitBtn, setSubmitBtn] = useState(0);

  let onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    let { data } = await apis.post("admin-login", formData);
    if (typeof data == "string") {
      alert("Invalid Credentials");
      setSubmitBtn(0);
    } else {
      localStorage.setItem("jwt_admin", data.token);
      navigate("/admin");
    }
  };

  return (
    <div className="login-admin">
      {" "}
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={onFormSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username: rento"
          name="username"
          id="username"
          required
          onChange={onInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password: rento"
          name="password"
          id="password"
          required
          onChange={onInputChange}
        />

        <button type="submit">{submitBtn ? "Logging in..." : "Login"}</button>
      </form>
    </div>
  );
}
