import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (submitData) => {
    // console.log("submitdata", submitData);
    // setUserFormData({
    //   username: data.username,
    //   email: data.email,
    //   password: data.password,
    // });
    try {
      const { data } = await addUser({
        variables: { ...submitData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    // setUserFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
  };

  // console.log("userFormData", userFormData);
  return (
    <>
      <h2 className="main-page-form" onClick={() => setOpen(!open)}>
        Create an Account!
      </h2>
      <Collapse isOpened={open}>
        <br></br>
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <p>Email is required</p>}
          <label>Username</label>
          <input {...register("username", { required: true })} />
          {errors.username && <p>Username is required</p>}
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Password is required</p>}
          <Link to="/main">
            <button className="signup-btn" type="submit">
              Login
            </button>
          </Link>
        </form>
      </Collapse>
    </>
  );
}
