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

  const [open, setOpen] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setloginFormData({ ...loginFormData, [name]: value });
  };

  const onSubmit = async (data) => {
    console.log(data);
    setloginFormData({ email: data.email, password: data.password });
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
      {/* <h2 className="main-page-form">Welcome Back! (Login)</h2> */}
      <Collapse isOpened={open}>
        <br></br>
        {/* <form onSubmit={handleSubmit(handleFormSubmit)} className="login-form">
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
        </form> */}
        {/* <LoginForm /> */}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <p>Email is required</p>}
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Password is required</p>}

          <button className="login-btn" type="submit">
            Login
          </button>
          <input type="submit" />
        </form>
      </Collapse>
    </>
  );
}
