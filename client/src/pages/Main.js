import React, { useState, useCallback, navigate } from "react";
import { Link, Navigate } from "react-router-dom";
import "../style/main.css";
import DelayedLink from "../components/tool/DelayedLink";
import Events from "./Events";
import Resources from "./Resources";
import Forum from "./Forum";
import LiveChat from "./LiveChat";

export default function Main() {
  const [openEvents, setOpenEvent] = useState(false);
  const [openResource, setOenResource] = useState(false);
  const [openForum, setOpenForum] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [redirectNow, setRedirectNow] = useState(false);
  // const openEventsPage = () => {
  //   setOpenEvent(true);
  // };
  const openEventsPage = () => {
    setTimeout(() => setRedirectNow(true), 1000);
    setOpenEvent(true);
  };
  const openResourceP = () => {
    // setTimeout(() => {}, 1000);
    setOenResource(true);
  };
  const openForumP = () => {
    // setTimeout(() => {}, 1000);
    setOpenForum(true);
  };
  const openChatPage = () => {
    // setTimeout(() => {}, 1000);
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
          <button
            className="m-0"
            style={{ fontSize: "3rem" }}
            onClick={openEventsPage}
          >
            Events
          </button>
        </DelayedLink>
      </div>

      {/* <Link className="text-dark" to="/resources"> */}
      {/* <div
        className={[openResource ? "open" : "", "menu-block yellow"].join(" ")}
      >
        <button
          className="m-0"
          style={{ fontSize: "3rem" }}
          onClick={openResourceP}
        >
          Resources
        </button>
      </div> */}
      {/* </Link> */}

      <div
        className={[openResource ? "open" : "", "menu-block yellow"].join(" ")}
      >
        <DelayedLink delay={700} to="/resources">
          <button
            className="m-0"
            style={{ fontSize: "3rem" }}
            onClick={openResourceP}
          >
            Resources
          </button>
        </DelayedLink>
      </div>
      {/* <Link className="text-dark" to="/forum"> */}
      {/* <div className={[openForum ? "open" : "", "menu-block pink"].join(" ")}>
        <button
          className="m-0"
          style={{ fontSize: "3rem" }}
          onClick={openForumP}
        >
          Forum
        </button>
      </div> */}
      {/* </Link> */}
      <div className={[openForum ? "open" : "", "menu-block pink"].join(" ")}>
        <DelayedLink delay={700} to="/forum">
          <button
            className="m-0"
            style={{ fontSize: "3rem" }}
            onClick={openForumP}
          >
            Forum
          </button>
        </DelayedLink>
      </div>
      {/* <Link className="text-dark" to="/live-chat"> */}
      {/* <div className={[openChat ? "open" : "", "menu-block purple"].join(" ")}>
        <button
          className="m-0"
          style={{ fontSize: "3rem" }}
          onClick={openChatPage}
        >
          LiveChat
        </button>
      </div> */}
      {/* </Link> */}
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
