import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import io from "socket.io-client";
import "../style/chat.css";
import { useForm } from "react-hook-form";
import { MdClose, MdOutlineHorizontalRule } from "react-icons/md";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiFolderMusicFill, RiSendPlane2Fill } from "react-icons/ri";
import { BiSmile } from "react-icons/bi";
import Picker from "emoji-picker-react";
import { ADD_MESSAGE } from "../utils/mutations";
// import { QUERY_MESSAGES } from "../utils/queries";

//Socket.io Middleware
const socket = io();

//LIVE CHAT / SOCKET.IO
export default function LiveChat() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [inputStr, setInputStr] = useState(" ");
  const [showPicker, setShowPicker] = useState(false);
  const [messageFormData, setMessageFormData] = useState({
    messageInput: "",
  });

  //SOCKET.IO
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  //MUTATIONS/QUERIES
  const [addMessage, { error }] = useMutation(ADD_MESSAGE);
  if (error) {
    console.log(JSON.stringify(error));
  }

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const data = [
  //   {
  //     user: "Peter",
  //     body: "What's upppppp!!!!!!",
  //   },
  //   {
  //     user: "Olly",
  //     body: "yooooooo",
  //   },
  // ];

  //CHECK THIS!!! WE NEED TO ADD A messageFormDataVariable

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessageFormData({ ...messageFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addMessage({
        variables: { messageFormData },
      });
    } catch (error) {
      console.error(error);
    }
    setMessageFormData({
      messageInput: "",
    });
  };

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
            <p>Terminal-zsh</p>
          </div>
          <div className="icons-frame right"></div>
        </div>
        <div className="body">
          <p>Connected: {"" + isConnected}</p>
          <p>Last pong: {lastPong || "-"}</p>
          <button onClick={sendPing}>Send ping</button>
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
          <form>
            <textarea
              {...register("body", { required: true })}
              onChange={handleInputChange}
              name="messageInput"
              value={messageFormData.messageInput}
            />
            <button
              onClick={handleFormSubmit}
              className="submit-btn"
              type="submit"
            >
              <RiSendPlane2Fill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
