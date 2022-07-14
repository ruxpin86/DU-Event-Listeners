import React from "react";
import { Link } from "react-router-dom";
import "../style/main.css";
import Events from "./Events";
import Resources from "./Resources";
import Forum from "./Forum";
import LiveChat from "./LiveChat";

export default function Main() {
  return (
    <div className="home-frame">
      <Link className="text-dark" to="/events">
        <div className="menu-block green">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Events
          </h1>
        </div>
      </Link>
      <Link className="text-dark" to="/resources">
        <div className="menu-block yellow">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Resources
          </h1>
        </div>
      </Link>
      <Link className="text-dark" to="/forum">
        <div className="menu-block pink">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Forum
          </h1>
        </div>
      </Link>
      <Link className="text-dark" to="/live-chat">
        <div className="menu-block purple">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            LiveChat
          </h1>
        </div>
      </Link>
    </div>
  );
}
