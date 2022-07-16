import React, { useState, useCallback, navigate } from "react";
import { Navigate } from "react-router-dom";
import "../style/main.css";
import DelayedLink from "../components/tool/DelayedLink";

export default function Main() {
  const [openEvents, setOpenEvent] = useState(false);
  const [openResource, setOenResource] = useState(false);
  const [openForum, setOpenForum] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [redirectNow, setRedirectNow] = useState(false);
  const openEventsPage = () => {
    setTimeout(() => setRedirectNow(true), 1000);
    setOpenEvent(true);
  };
  const openResourceP = () => {
    setOenResource(true);
  };
  const openForumP = () => {
    setOpenForum(true);
  };
  const openChatPage = () => {
    setOpenChat(true);
  };
  return (
    <div className="home-frame">
      {/* {redirectNow ? (
        // <Navigate to="/events" />
        <Events />
      ) : (
        <div
          className={[openEvents ? "open" : "", "menu-block green"].join(" ")}
        >
          <button
            className="m-0"
            style={{ fontSize: "3rem" }}
            onClick={openEventsPage}
          >
            Events
          </button>
        </div>
      )} */}

      <div className={[openEvents ? "open" : "", "menu-block green"].join(" ")}>
        <DelayedLink delay={700} to="/events">
          <button style={{ fontSize: "3rem" }} onClick={openEventsPage}>
            Events
          </button>
        </DelayedLink>
      </div>
      <div
        className={[openResource ? "open" : "", "menu-block yellow"].join(" ")}
      >
        <DelayedLink delay={700} to="/resources">
          <button style={{ fontSize: "3rem" }} onClick={openResourceP}>
            Resources
          </button>
        </DelayedLink>
      </div>
      <div className={[openForum ? "open" : "", "menu-block pink"].join(" ")}>
        <DelayedLink delay={700} to="/forum">
          <button style={{ fontSize: "3rem" }} onClick={openForumP}>
            Forum
          </button>
        </DelayedLink>
      </div>
      <div className={[openChat ? "open" : "", "menu-block purple"].join(" ")}>
        <DelayedLink delay={700} to="/live-chat">
          <button
            className="m-0"
            style={{ fontSize: "3rem" }}
            onClick={openChatPage}
          >
            LiveChat
          </button>
        </DelayedLink>
      </div>
      <div className="menu-block orange"></div>
    </div>
  );
}
