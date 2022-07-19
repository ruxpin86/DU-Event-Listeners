import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
export default function ForumCard({ data, i }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={[open ? "open" : "", "forum-card"].join(" ")} key={i}>
      <div className="title">
        <p>{data.description}</p>
        <button
          className={[open ? "open" : "", "openBtn"].join(" ")}
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <span>
        {data.createdAt} by {data.creator}
      </span>

      <Collapse isOpened={open}>
        <form>
          <textarea></textarea>
          <button className="sendBtn submit-btn" type="submit">
            Reply
          </button>
        </form>
      </Collapse>
      {/* <button className="moreBtn" onClick={() => setOpen(!open)}>
        More
      </button> */}
    </div>
  );
}
