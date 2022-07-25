import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import "../style/signup.css";
import Auth from "../utils/auth";
import { Collapse } from "react-collapse";

export default function Signup(props) {
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

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    handleSubmit(async (submitData) => {
      // console.log("submitdata", submitData);
      // setUserFormData({
      //   username: submitData.username,
      //   email: submitData.email,
      //   password: submitData.password,
      // });
      try {
        const { data } = await addUser({
          variables: { ...userFormData },
        });
        console.log(data);
        Auth.login(data.addUser.token);
        navigate("/main");
      } catch (err) {
        console.error(err);
      }

      setUserFormData({
        username: "",
        email: "",
        password: "",
      });
    })(event);
  };

  // console.log("userFormData", userFormData);
  return (
    <>
      <h2 className="main-page-form" onClick={() => setOpen(!open)}>
        Create an Account!
      </h2>
      <Collapse isOpened={open}>
        <br></br>
        <form className="signup-form">
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            onChange={handleInputChange}
          />
          {errors.email && <p>Email is required</p>}
          <label>Username</label>
          <input
            {...register("username", { required: true })}
            onChange={handleInputChange}
          />
          {errors.username && <p>Username is required</p>}
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              },
            })}
            onChange={handleInputChange}
          />
          {errors.password && <p>Password is required</p>}
          {errors.password && errors.password.type === "minLength" && (
            <p>
              Minimum 8 characters, at least 1 letter, 1 number and 1 special
              character(%!#)
            </p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p>
              Minimum 8 characters, at least 1 letter, 1 number and 1 special
              character(%!#)
            </p>
          )}
          <Link to="/main">
            <button className="signup-btn" type="submit" onClick={onSubmit}>
              Signup
            </button>
          </Link>
        </form>
      </Collapse>
    </>
  );
}
