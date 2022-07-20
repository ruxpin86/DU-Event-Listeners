import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/resources.css";
import { MdClose, MdControlPoint } from "react-icons/md";
import { useForm } from "react-hook-form";
import ResourceCard from "../components/ResourceCard";
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
  const navigate = useNavigate();

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

  const closeFunc = () => {
    setOpenFormPhon(false);
  };

  const updateData = () => {
    console.log("refresh");
    navigate(0);
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
