import React from "react";
import { Link } from "react-router-dom";
import Style from 

// import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    // Auth.logout();
  };
  return (
    <header className="headerEl">
      <div className="headerDiv">
        <Link to="/main">
          <h1 className="headerTxt" style={{ fontSize: "3rem" }}>
            DU Event Listeners
          </h1>
        </Link>
        <div>
          {/* {Auth.loggedIn() ? ( */}
            <>
              <button className="logoutBtn" onClick={logout}>
                Logout
              </button>
            </>
          {/* ) : ( */}
            {/* <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Logout
              </Link>
            </> */}
          {/* )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
