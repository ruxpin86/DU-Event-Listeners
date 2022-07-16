import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import logo_blue from "../images/logo_blue.svg";
import logo_green from "../images/logo_green.svg";
import logo_red from "../images/logo_red.svg";
import logo_yellow from "../images/logo_yellow.svg";

import "../style/header.css";

// import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    // Auth.logout();
  };

  const [img, setImg] = useState(logo_green);
  const shffle = () => {
    setImg(logo_red);
  };

  return (
    <header className="headerEl">
      <div className="headerDiv">
        <img
          className="logo"
          src={img}
          onMouseEnter={shffle}
          onMouseLeave={(e) => {
            setImg(logo_green);
          }}
        />
        <Link to="/main">
          <h1 className="headerTxt" style={{ fontSize: "3rem" }}>
            DU Event Listeners
          </h1>
        </Link>
        <div>
          {/* {Auth.loggedIn() ? ( */}
          <></>
          {/* ) : ( */}

          {/* <>
            <Link className="btn btn-lg btn-primary m-2" to="/login">
              Logout
            </Link>
          </> */}
          {/* )} */}
        </div>
      </div>
      <div className="logoutBtnDiv">
        <Link to="/">
          <button className="logoutBtn">Logout</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
