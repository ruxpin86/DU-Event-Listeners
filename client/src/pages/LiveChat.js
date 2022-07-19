import React, { useState, useEffect, useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import io from "socket.io-client";
import "../style/chat.css";
import { MdClose, MdOutlineHorizontalRule } from "react-icons/md";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiFolderMusicFill, RiSendPlane2Fill } from "react-icons/ri";
import { BiSmile } from "react-icons/bi";
import Picker from "emoji-picker-react";
import { ADD_MESSAGE } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
// import { QUERY_MESSAGES } from "../utils/queries";

//Socket.io Middleware
const socket = io();

//LIVE CHAT / SOCKET.IO
export default function LiveChat() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [inputStr, setInputStr] = useState(" ");
  const [showPicker, setShowPicker] = useState(false);
  const [messageFormData, setMessageFormData] = useState("");
  const [messageArray, setMessageArray] = useState(["yooo"]);
  const msgRef = useRef([]);
  const [trig, setTrig] = useState(false);
  const trigger = () => setTrig((b) => !b);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  //Query Me
  // const { loading, data, error: userError } = useQuery(QUERY_ME);
  // if (userError) {
  //   console.log(JSON.stringify(userError));
  // }
  // const userData = data?.me;
  // const username = userData?.username;
  // console.log(userData);

  //SOCKET.IO
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  //MUTATIONS/QUERIES
  const [addMessage, { error }] = useMutation(ADD_MESSAGE);
  if (error) {
    console.log(JSON.stringify(error));
  }

  useEffect(() => {
    socket.on(
      "connect",
      () => {
        console.log(socket.id);
        setIsConnected(true);
        const onScroll = (e) => {
          setScrollTop(e.target.documentElement.scrollTop);
          setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
      },
      [scrollTop]
    );

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("msg", (msg) => {
      msgRef.current.push(msg);
      trigger();
      console.log("received msg", msg, msgRef.current);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      socket.off("msg");
      // socket.disconnect();
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  //CHECK THIS!!! WE NEED TO ADD A messageFormDataVariable
  const { loading, data, error: userError } = useQuery(QUERY_ME);
  console.log(data);
  if (userError) {
    console.log(JSON.stringify(userError));
  }
  const userData = data?.getMe;
  const username = userData?.username;
  const userId = userData?._id;

  //THIS ONE FOR GRABBING USER MESSAGE
  const userMessage = userData?.messages;
  console.log(userData);
  console.log(userMessage);
  console.log(userId);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setMessageFormData(event.target.value);
  };

  //NEED TO IMPORT USER DATA TO USER IN messageObject

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("submit", messageFormData);
    let messageObject = {
      userID: userId,
      user: username,
      msg: messageFormData,
    };
    socket.emit("msg", messageObject);
    // setMessageArray([...messageArray, messageFormData]);
    msgRef.current.push(messageObject);
    trigger();
    // try {
    const { data } = await addMessage({
      variables: {
        userId: messageObject.userID,
        input: { messages: messageObject.msg },
      },
    });
    // } catch (error) {
    //   console.error(error);
    // }
    // setMessageFormData({
    //   messageInput: "",
    // });
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
          <p>Welcome to LiveChat :D</p>
          {/* <p>Last pong: {lastPong || "=ping"}</p> */}
          {msgRef.current.map((msg) => (
            <div>
              <p>
                {msg.user}: {msg.msg}
              </p>
            </div>
          ))}
        </div>
        <div className="text-board">
          <div className="top">
            <BiSmile onClick={() => setShowPicker(!showPicker)} />
            {showPicker && <Picker onEmojiClick={onEmojiClick} />}
            {/* {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />} */}
          </div>
          <form>
            <textarea
              className="chat-form"
              onChange={handleInputChange}
              value={messageFormData.messageInput}
            ></textarea>
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
