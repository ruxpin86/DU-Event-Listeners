import React from "react";
import "../style/chat.css";
import { MdClose } from "react-icons/md";

export default function LiveChat() {
  return (
    <div className="chat-frame">
      <div className="title">
        <h1>Live Chat</h1>
        <a href="/main">
          <MdClose />
        </a>
      </div>
    </div>
  );
}
