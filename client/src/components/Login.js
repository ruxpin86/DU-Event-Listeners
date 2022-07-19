import React, { useState, useEffect } from "react";
import "../style/login.css";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { Collapse } from "react-collapse";

export default function Login() {
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetState = () => {
    setValid(true);
    setEmail("");
    setPassword("");
  };

  const [open, setOpen] = useState(false);

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
    // const emailChange = (event) => {
    //   setEmail(event.target.value);
    // }
    // const passwordChange = (event) => {
    //   setPassword(event.target.value);
    // }

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
      email: "",
      password: "",
    });
  };

  console.log(loginFormData);
  return (
    <>
      <h2 className="main-page-form" onClick={() => setOpen(!open)}>
        Welcome Back! (Login)
      </h2>
      <Collapse isOpened={open}>
        <br></br>
        <form className="login-form">
          <div className="loginEl">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="email"
              value={loginFormData.username}
            ></input>
            <label htmlFor="password">Password</label>
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
          <p>Oops! Please reenter a valid email and password</p>
        </form>
      </Collapse>
    </>
  );
}
