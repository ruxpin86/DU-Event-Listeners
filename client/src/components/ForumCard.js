import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
import { ADD_TO_REPLY } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function ForumCard({ data, i }) {
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState("");
  const [addReply, { error }] = useMutation(ADD_TO_REPLY);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const handleChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    setReview(event.target.value);
  };

  const submitReview = async (event) => {
    event.preventDefault();
    console.log(review);
    console.log({ input: { reply: review, forumId: data._id } });
    try {
      const newReply = await addReply({
        variables: {
          input: { reply: review, forumId: data._id },
        },
      });
      console.log(newReply);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={[open ? "open" : "", "forum-card"].join(" ")} key={i}>
      <div className="title">
        <p className="descrip">"{data.description}"</p>
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
          <textarea onChange={handleChange}></textarea>
          <button
            className="sendBtn submit-btn"
            type="submit"
            onClick={submitReview}
          >
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
