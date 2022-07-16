import React, { useState, useEffect } from "react";
import "../style/login.css";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { Collapse } from "react-collapse";

export default function Login() {
  const [open, setOpen] = useState(false);

  const [loginFormData, setloginFormData] = useState({
    username: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN_USER);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setloginFormData({ ...loginFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...loginFormData },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setloginFormData({
      username: "",
      password: "",
    });
  };

  console.log(loginFormData);
  return (
    <>
      <h2 onClick={() => setOpen(!open)}>Welcome Back! (Login)</h2>
      <Collapse isOpened={open}>
        <br></br>
        <form className="login-form">
          <div className="loginEl">
            <label for="username">Username</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="username"
              value={loginFormData.username}
            ></input>
            <label for="password">Password</label>
            <input
              onChange={handleInputChange}
              type="password"
              name="password"
              value={loginFormData.password}
            ></input>
          </div>
          <br></br>
          <button
            onClick={handleFormSubmit}
            className="login-btn"
            type="button"
          >
            Login
          </button>
        </form>
      </Collapse>
    </>
  );
}
