import React from "react";
import "../style/signup.css";

export default function Signup() {
  return (
    <>
      <h3>Signup</h3>
      <form className="signup form">
        <div className="signupEl">
          <label for="email">Email</label>
          <input type="text" id="email"></input>
          <label for="username">Username</label>
          <input type="text" id="username"></input>
          <label for="password">Password</label>
          <input type="password"></input>
          <button type="button">Sign Up!</button>
        </div>
      </form>
    </>
  );
}
