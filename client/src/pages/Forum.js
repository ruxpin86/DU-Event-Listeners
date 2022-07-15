import React from "react";
import "../style/forum.css";
import { MdClose } from "react-icons/md";

export default function Forum() {
  return (
    <div className="forum-frame">
      <div className="title">
        <h1>Forum</h1>
        <a href="/main">
          <MdClose />
        </a>
      </div>
    </div>
  );
}
