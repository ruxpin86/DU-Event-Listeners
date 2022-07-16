import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import "../style/signup.css";
import Auth from "../utils/auth";
import { Collapse } from "react-collapse";

export default function Signup() {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [open, setOpen] = useState(false);

  const [addUser, { error, data }] = useMutation(ADD_USER);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  console.log(userFormData);
  return (
    <>
      <h2 onClick={() => setOpen(!open)}>Create an Account!</h2>
      <Collapse isOpened={open}>
        <br></br>
        <form className="signup-form">
          <div className="signupEl">
            <label for="email">Email</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="email"
            ></input>
            <label for="username">Username</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="username"
            ></input>
            <label for="password">Password</label>
            <input
              onChange={handleInputChange}
              type="password"
              name="password"
            ></input>
          </div>
          <br></br>
          <button
            onClick={handleFormSubmit}
            className="signup-btn"
            type="button"
          >
            Sign Up!
          </button>
        </form>
      </Collapse>
    </>
  );
}
