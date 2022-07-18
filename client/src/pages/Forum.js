import React, { useState, useEffect } from "react";
import "../style/forum.css";
import { MdClose, MdControlPoint } from "react-icons/md";
import ForumCard from "../components/ForumCard";
import ForumAddPostForm from "../components/ForumAddPostForm";
import ForumAddReplyForm from "../components/ForumAddReplyForm";
import useBreakpoint from "../components/tool/useBreakpoint";

export default function Forum() {
  const [webAddForm, setOpenForm] = useState(true);
  const [openAddFormPhon, setOpenFormPhon] = useState(false);
  const [selectValue, setSelect] = useState("all");
  const [newdata, setNewdata] = useState([]);
  const point = useBreakpoint();

  const data = [
    {
      topic: "Shoutout",
      description:
        "Shoutout to Olly for the help on module 21 homework..thanks for helping to get my App deployed to Heroku",
      create: "Peter",
      create_date: "2022/07/07",
    },
    {
      topic: "projectHelp",
      description:
        "Has anyone worked with React Animations and have some advice?",
      create: "Olly",
      create_date: "2022/07/07",
    },
    {
      topic: "classActivities",
      description:
        "Does anyone have a copy of the MERN mini project that I can take a look at?",
      create: "Ted",
      create_date: "2022/07/07",
    },
    {
      topic: "random",
      description:
        "My dog has been sitting staring at me while I code for the last three hours, I think he needs a walk",
      create: "Kris",
      create_date: "2022/07/07",
    },
  ];
  useEffect(() => {
    setNewdata(data);
  }, []);
  const closeFunc = () => {
    setOpenFormPhon(false);
  };

  const changeSelect = (event) => {
    setSelect(event.target.value);
    if (data.length > 0) {
      switch (event.target.value) {
        case "all":
          setNewdata(data);
          break;
        case "classActivities":
          const classActArr = data.filter(
            (item) => item.topic === "classActivities"
          );
          setNewdata(classActArr);
          break;
        case "projectHelp":
          const projectHelpArr = data.filter(
            (item) => item.topic === "projectHelp"
          );
          setNewdata(projectHelpArr);
          break;
        case "Shoutout":
          const shoutoutArr = data.filter((item) => item.topic === "Shoutout");
          setNewdata(shoutoutArr);
          break;
        case "random":
          const randomArr = data.filter((item) => item.topic === "random");
          setNewdata(randomArr);
          break;
        default:
          break;
      }
    }
  };
  console.log("selectValue", selectValue);
  return (
    <div className="forum-frame">
      <div className="title">
        <h1>Forum</h1>
        <a href="/main">
          <MdClose />
        </a>
      </div>
      <div className="filter">
        <select onChange={changeSelect} value={selectValue}>
          <option value="all" disabled>
            Select Forum Topic
          </option>
          <option value="all">All Topics</option>
          <option value="classActivities">Class Activities</option>
          <option value="projectHelp">Project Help</option>
          <option value="shoutout">Shoutout</option>
          <option value="random">Random</option>
        </select>
      </div>
      {newdata.length > 0 ? (
        newdata.map((data, i) => <ForumCard data={data} i={i} key={i} />)
      ) : (
        <h1>Forum data is empty!!!</h1>
      )}
    </div>
  );
}
