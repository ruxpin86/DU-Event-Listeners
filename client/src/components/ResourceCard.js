import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
export default function ResourceCard({ data, i }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={[open ? "open" : "", "resources-card"].join(" ")} key={i}>
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
      {/* <h2>
        <a href={data.link} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </h2> */}
      <span>
        {data.create_date} by {data.create}
      </span>
      {/* <div className="hide-box">{open && <p>{data.description}</p>}</div> */}
      <Collapse isOpened={open}>
        <p>{data.description}</p>
      </Collapse>
      {/* {open && <p>{data.description}</p>} */}
      <button className="moreBtn" onClick={() => setOpen(!open)}>
        More
      </button>
    </div>
  );
}
