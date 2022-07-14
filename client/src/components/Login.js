import React from "react";
import "../style/login.css";

export default function Login() {
  return (
    <>
      <h3>Login</h3>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username"></input>
        <label for="password">Password</label>
        <input type="password"></input>
        <button type="button">Login</button>
      </form>
    </>
  );
}
