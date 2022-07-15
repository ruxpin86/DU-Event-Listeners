import React from "react";
import "../style/events.css";
import { MdClose } from "react-icons/md";

export default function Events() {
  return (
    <div className="events-frame">
      <div className="title">
        <h1>Events</h1>
        <a href="/main">
          <MdClose />
        </a>
      </div>
    </div>
  );
}
