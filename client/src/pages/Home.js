import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../style/header.css";
import Signup from "../components/Signup";
import Login from "../components/Login";
import "../style/home.css";

export default function Home() {
  return (
    <div className="background">
      <h1 className="welcome">Welcome Alumni & Students!</h1>
      <br></br>
      <form className="main-form">
        <div className="signup">
          <Signup />
        </div>
        <div className="login">
          <Login />
        </div>
      </form>
    </div>
  );
}
