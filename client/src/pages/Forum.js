import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/forum.css";
import { MdClose, MdControlPoint } from "react-icons/md";
import ForumCard from "../components/ForumCard";
import ForumAddPostForm from "../components/ForumAddPostForm";
import ForumAddReplyForm from "../components/ForumAddReplyForm";
import useBreakpoint from "../components/tool/useBreakpoint";
import { useQuery } from "@apollo/client";
import { QUERY_FORUM } from "../utils/queries";

export default function Forum() {
  const [webAddForm, setOpenForm] = useState(true);
  const [openAddFormPhon, setOpenFormPhon] = useState(false);
  const [selectValue, setSelect] = useState("all");
  const [allForumData, setAllData] = useState([]);
  const [newData, setNewdata] = useState([]);
  const point = useBreakpoint();
  const { loading, data, error: forumError } = useQuery(QUERY_FORUM);
  const forumData = data?.getForum || {};
  console.log("forumData", forumData);
  if (data) {
    console.log(data);
  }

  // const data = [
  //   {
  //     topic: "Shoutout",
  //     description:
  //       "Shoutout to Olly for the help on module 21 homework..thanks for helping to get my App deployed to Heroku",
  //     create: "Peter",
  //     create_date: "2022/07/07",
  //   },
  //   {
  //     topic: "projectHelp",
  //     description:
  //       "Has anyone worked with React Animations and have some advice?",
  //     create: "Olly",
  //     create_date: "2022/07/07",
  //   },
  //   {
  //     topic: "classActivities",
  //     description:
  //       "Does anyone have a copy of the MERN mini project that I can take a look at?",
  //     create: "Ted",
  //     create_date: "2022/07/07",
  //   },
  //   {
  //     topic: "random",
  //     description:
  //       "My dog has been sitting staring at me while I code for the last three hours, I think he needs a walk",
  //     create: "Kris",
  //     create_date: "2022/07/07",
  //   },
  //   {
  //     topic: "classActivities",
  //     description: "How are you guys doing on PWAs?  Anyone got those nailed?",
  //     create: "Andy",
  //     create_date: "2022/07/07",
  //   },
  // ];
  useEffect(() => {
    setNewdata(forumData);
  }, []);
  const closeFunc = () => {
    setOpenFormPhon(false);
  };

  const changeSelect = (event) => {
    console.log(event.target.value);
    // setSelect(event.target.value);
    if (forumData.length > 0) {
      switch (event.target.value) {
        case "all":
          setNewdata(forumData);
          break;
        case "classActivities":
          const classActArr = forumData.filter(
            (item) => item.topic === "classActivities"
          );
          setNewdata(classActArr);
          break;
        case "projectHelp":
          const projectHelpArr = forumData.filter(
            (item) => item.topic === "projectHelp"
          );
          setNewdata(projectHelpArr);
          break;
        case "shoutout":
          const shoutoutArr = forumData.filter(
            (item) => item.topic === "shoutout"
          );
          setNewdata(shoutoutArr);
          break;
        case "random":
          const randomArr = forumData.filter((item) => item.topic === "random");
          setNewdata(randomArr);
          break;
        default:
          break;
      }
    }
  };

  const updateData = () => {
    console.log("refresh");
    window.location.reload();
  };

  return (
    <div className="forum-frame">
      <div className="hide">Add Post</div>
      <div className="title">
        <h1>Forum</h1>
        <MdControlPoint
          className="addBtn"
          onClick={() => setOpenFormPhon(!openAddFormPhon)}
        />

        <Link to="/main">
          <MdClose />
        </Link>
      </div>
      <div className="filter">
        <select onChange={changeSelect}>
          <option defaultValue="default" disabled>
            Select Forum Topic
          </option>
          <option value="all">All Topics</option>
          <option value="classActivities">Class Activities</option>
          <option value="projectHelp">Project Help</option>
          <option value="shoutout">Shoutout</option>
          <option value="random">Random</option>
        </select>
      </div>
      <div className="cardFrame">
        {newData.length > 0 ? (
          newData.map((data, i) => <ForumCard data={data} i={i} key={i} />)
        ) : (
          <h1>Forum data is empty!!!</h1>
        )}
        {openAddFormPhon && <ForumAddPostForm updateData={updateData} />}
      </div>
    </div>
  );
}
