import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "../style/events.css";
import { MdClose, MdControlPoint } from "react-icons/md";
import EventCard from "../components/EventCard";
import AddEventForm from "../components/AddEventForm";
import useBreakpoint from "../components/tool/useBreakpoint";
import { useQuery } from "@apollo/client";
import { QUERY_EVENT } from "../utils/queries";
import Auth from "../utils/auth";
import PacmanLoader from "react-spinners/PacmanLoader";
export default function Events() {
  const [webAddForm, setOpenForm] = useState(true);
  const [openAddFormPhon, setOpenFormPhon] = useState(false);
  const [allEventsData, setAllData] = useState([]);
  const point = useBreakpoint();
  const { loading, data, error: eventError } = useQuery(QUERY_EVENT);
  const eventsData = data?.getAllEvents || {};
  console.log("eventsData", eventsData);
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (data) {
    console.log(data);
  }

  useEffect(() => {
    setAllData(eventsData);
  }, []);

  // if (!token) {
  //   window.location.href = "/";
  // }

  const closeFunc = () => {
    setOpenFormPhon(false);
  };

  const navigate = useNavigate();

  const updateData = () => {
    console.log("refresh");
    navigate(0);
  };

  return (
    <div className="events-frame">
      <div className="title">
        <h1>Events</h1>
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
          {loading ? (
            <PacmanLoader />
          ) : eventsData.length > 0 ? (
            eventsData.map((data, i) => (
              <div className="card-frame" key={i}>
                <EventCard data={data} i={i} key={i} />
              </div>
            ))
          ) : (
            <h1>Events data is empty!!!</h1>
          )}
        </div>
        {point === "lg" ? (
          <div className="right">
            <div className="title">
              <h2>Add Events</h2>
            </div>
            <AddEventForm updateData={updateData} />
          </div>
        ) : (
          openAddFormPhon && (
            <div className={[openAddFormPhon ? "" : "hide", "right"].join(" ")}>
              <div className="title">
                <h2>Add Events</h2>
                <MdClose className="closeBtn" onClick={closeFunc} />
              </div>
              <AddEventForm updateData={updateData} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
