import React, { useState } from "react";
import "../style/chat.css";
import { useForm } from "react-hook-form";
import { MdClose, MdOutlineHorizontalRule } from "react-icons/md";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiFolderMusicFill, RiSendPlane2Fill } from "react-icons/ri";
import { BiSmile } from "react-icons/bi";

import Picker from "emoji-picker-react";
export default function LiveChat() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [inputStr, setInputStr] = useState(" ");
  const [showPicker, setShowPicker] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const data = [
    {
      username: "Peter",
      text: "What's upppppp!!!!!!",
    },
    {
      username: "Olly",
      text: "yooooooo",
    },
  ];

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    console.log("inputStr", inputStr);
    setShowPicker(false);
  };
  const onSubmit = (data) => console.log(data);
  return (
    <div className="chat-frame">
      <div className="title">
        <h1>Live Chat</h1>
        <a href="/main">
          <MdClose />
        </a>
      </div>
      <div className="chat-room">
        <div className="header">
          <div className="icons-frame">
            <div className="dot red">
              <MdClose />
            </div>
            <div className="dot yellow">
              <MdOutlineHorizontalRule />
            </div>
            <div className="dot green">
              <TiArrowUnsorted className="expend-icon" />
            </div>
          </div>
          <div className="title">
            <RiFolderMusicFill />
            <p>Kris--Terminal-zsh</p>
          </div>
          <div className="icons-frame right"></div>
        </div>
        <div className="body">
          {data.map((data, i) => (
            <p key={i}>
              {data.username} : {data.text}
            </p>
          ))}
        </div>
        <div className="text-board">
          <div className="top">
            <BiSmile onClick={() => setShowPicker(!showPicker)} />
            {showPicker && <Picker onEmojiClick={onEmojiClick} />}
            {/* {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />} */}
          </div>
          {/* <form>
            <textarea
              value={inputStr}
              onChange={(e) => setInputStr(e.target.value)}
            ></textarea>
          </form> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register("text", { required: true })}
              value={inputStr}
              onChange={(e) => setInputStr(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              <RiSendPlane2Fill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
