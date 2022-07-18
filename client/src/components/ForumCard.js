import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
export default function ForumCard({ data, i }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={[open ? "open" : "", "forum-card"].join(" ")} key={i}>
      <div className="title">
        <h2>
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </h2>
        <button
          className={[open ? "open" : "", "openBtn"].join(" ")}
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <span>
        {data.create_date} by {data.create}
      </span>
      <p>{data.description}</p>
      <Collapse isOpened={open}>
        <input></input>
      </Collapse>
      <button className="moreBtn" onClick={() => setOpen(!open)}>
        More
      </button>
    </div>
  );
}
