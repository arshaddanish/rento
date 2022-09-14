import React from "react";
import "./loginAdmin.scss";

export default function LoginAdmin() {
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

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
