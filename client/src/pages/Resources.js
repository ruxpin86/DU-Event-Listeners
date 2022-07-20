import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../style/resources.css";
import { MdClose, MdControlPoint } from "react-icons/md";
import { useForm } from "react-hook-form";
import ResourceCard from "../components/ResourceCard";
//creating pacman loading symbol
import PacmanLoader from "react-spinners/PacmanLoader";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_RESOURCES } from "../utils/queries";
import AddResourceForm from "../components/AddResourceForm";
import useBreakpoint from "../components/tool/useBreakpoint";
//need Auth so i can check if user is logged in
import Auth from "../utils/auth";
import PacmanLoader from "react-spinners/PacmanLoader";

const Resources = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const point = useBreakpoint();
  const [openAddFormPhon, setOpenFormPhon] = useState(false);

  const [selectValue, setSelect] = useState("all");
  const [allData, setAllData] = useState([]);
  const [newData, setNewdata] = useState([]);

  //empty array in allResources now
  const { loading, data, error: userError } = useQuery(QUERY_ALL_RESOURCES);
  const allResources = data?.getAllResources || [];
  console.log(allResources);
  useEffect(() => {
    // if (allResources.length > 0) {
    setNewdata(props.allResources);
    // }
  }, [props]);

  //if this is working get data compliled into addResource and boom
  if (userError) {
    console.log(JSON.stringify(userError));
  }
  // if (loading) {
  //   return <PacmanLoader />;
  // }

  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }
  const fakeData = [
    {
      user: "krisd",
      link: "https://medium.com/@MarkPieszak/how-to-delete-all-node-modules-folders-on-your-machine-and-free-up-hd-space-f3954843aeda",
      category: "other",
      title: "How to Delete Node Modules",
      description:
        "This resource highlights how to remove the node_modules when they are taking up too much space on your machine",
    },
    {
      user: "ted",
      link: "https://dev.to/underscorecode/css-selectors-the-full-reference-guide-3cbf",
      category: "frontend",
      title: "CSS Selectors",
      description:
        "This resource highlights some important details on CSS Selectors",
    },
    {
      user: "olly",
      link: "https://flexbox.malven.co/",
      category: "frontend",
      title: "Flexbox Cheat-Sheet",
      description:
        "This resource is quick guide for all the essential knowledge on flexbox",
    },
    {
      user: "andyp",
      link: "https://reactrouter.com/docs/en/v6/getting-started/overview",
      category: "frontend",
      title: "Guide to React Router",
      description: "React router information!",
    },
    {
      user: "pete",
      link: "https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express",
      category: "backend",
      title: "Apollo Server Guide",
      description:
        "This resource highlights how get an Apollo Server up and running on your server side applications.",
    },
  ];

  const closeFunc = () => {
    setOpenFormPhon(false);
  };

  const updateData = () => {
    console.log("refresh");
    window.location.reload();
  };

  const changeSelect = (event) => {
    setSelect(event.target.value);
    if (allResources.length > 0) {
      switch (event.target.value) {
        case "all":
          setNewdata(allResources);
          break;
        case "frontend":
          const frontendArr = allResources.filter(
            (item) => item.category === "frontend"
          );
          setNewdata(frontendArr);
          break;
        case "backend":
          const backendArr = allResources.filter(
            (item) => item.category === "backend"
          );
          setNewdata(backendArr);
          break;
        case "other":
          const otherArr = allResources.filter(
            (item) => item.category === "other"
          );
          setNewdata(otherArr);
          break;
        default:
          break;
      }
    }
  };
  console.log(newData);
  return (
    <div className="resources-frame">
      <div className="title">
        <h1>Resources</h1>
        <div className="icon-frame">
          <MdControlPoint
            className="addBtn"
            onClick={() => setOpenFormPhon(!openAddFormPhon)}
          />
          <Link to="/main">
            <MdClose />
          </Link>
        </div>
      </div>
      <div className="blog-block">
        <div className="left">
          <div className="filter">
            <select onChange={changeSelect} defaultValue="all">
              {/* <option value="all" disabled>
                Select Resources Type
              </option> */}
              <option value="all">All Resources</option>
              <option value="frontend">Front end</option>
              <option value="backend">Back end</option>
              <option value="other">Other</option>
            </select>
          </div>
          {loading ? (
            <PacmanLoader />
          ) : newData ? (
            newData.map((data, i) => <ResourceCard data={data} i={i} key={i} />)
          ) : (
            allResources.map((data, i) => (
              <ResourceCard data={data} i={i} key={i} />
            ))
          )}

          {/* {newData
            ? newData.map((data, i) => (
                <ResourceCard data={data} i={i} key={i} />
              ))
            : allResources.map((data, i) => (
                <ResourceCard data={data} i={i} key={i} />
              ))} */}
        </div>
        {/* <div className="right">
          <h2>Add Resources</h2>
          <AddResourceForm updateData={updateData} />
        </div> */}
        {point === "lg" ? (
          <div className="right">
            <h2>Add Resources</h2>
            <AddResourceForm updateData={updateData} />
          </div>
        ) : (
          openAddFormPhon && (
            <div className={[openAddFormPhon ? "" : "hide", "right"].join(" ")}>
              <div className="title">
                <h2>Add Resources</h2>
                <MdClose className="closeBtn" onClick={closeFunc} />
              </div>
              <AddResourceForm updateData={updateData} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Resources;
