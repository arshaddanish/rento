import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginAdmin.scss";

export default function LoginAdmin() {
  let navigate = useNavigate();
  return (
    <div className="login-admin">
      {" "}
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form autoComplete="off" method="post" action="/admin">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />

        <button type="submit" onClick={() => navigate("/admin")}>
          Log In
        </button>
      </form>
    </div>
  );
}
