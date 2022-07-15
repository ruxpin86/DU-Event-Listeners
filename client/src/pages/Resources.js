import React from "react";
import "../style/resources.css";
import { MdClose } from "react-icons/md";

export default function Resources() {
  return (
    <div className="resources-frame">
      <div className="title">
        <h1>Resources</h1>
        <a href="/main">
          <MdClose />
        </a>
      </div>
    </div>
  );
}
