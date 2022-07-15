import React from "react";
import "../style/login.css";

export default function Login() {
  return (
    <>
      <h3>Login</h3>
      <br></br>
      <form className="login-form">
        <div className="loginEl">
          <label for="username">Username</label>
          <input type="text" id="username"></input>
          <label for="password">Password</label>
          <input type="password"></input>
        </div>
        <br></br>
        <button className="login-btn" type="button">
          Login
        </button>
      </form>
    </>
  );
}
