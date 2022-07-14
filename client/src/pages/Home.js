import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../style/header.css";
import Signup from "../components/Signup";
import Login from "../components/Login";

export default function Home() {
  return (
    <div>
      <h1>Welcome Students!</h1>
      <Link to="/signup"></Link>
    </div>
  );
}
