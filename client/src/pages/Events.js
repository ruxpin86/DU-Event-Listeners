import React, { useState, useEffect } from "react";
import "../style/events.css";
import { MdClose, MdControlPoint } from "react-icons/md";
import EventCard from "../components/EventCard";
import AddEventForm from "../components/AddEventForm";
import useBreakpoint from "../components/tool/useBreakpoint";
import { useQuery } from "@apollo/client";
import { QUERY_EVENT } from "../utils/queries";

export default function Events() {
  const [webAddForm, setOpenForm] = useState(true);
  const [openAddFormPhon, setOpenFormPhon] = useState(false);
  const [allEventsData, setAllData] = useState([]);
  const point = useBreakpoint();
  const { loading, data, error: eventError } = useQuery(QUERY_EVENT);
  const eventsData = data?.getAllEvents || {};
  console.log("eventsData", eventsData);
  if (data) {
    console.log(data);
  }

  useEffect(() => {
    setAllData(eventsData);
  }, []);
  const closeFunc = () => {
    setOpenFormPhon(false);
  };

  const updateData = () => {
    console.log("refresh");
    window.location.reload();
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
          <a href="/main">
            <MdClose />
          </a>
        </div>
      </div>
      <div className="blog-block">
        <div className="left">
          {eventsData.length > 0 ? (
            eventsData.map((data, i) => (
              <div className="card-frame" key={i}>
                <EventCard data={data} i={i} key={i} />
              </div>
            ))
          ) : (
            <h1>Events data is empty!!!</h1>
          )}
        </div>
        {point === "lg"
          ? webAddForm && (
              <div className="right">
                <div className="title">
                  <h2>Add Events</h2>
                </div>
                <AddEventForm updateData={updateData} />
              </div>
            )
          : openAddFormPhon && (
              <div className="right">
                <div className="title">
                  <h2>Add Events</h2>
                  <MdClose className="closeBtn" onClick={closeFunc} />
                </div>
                <AddEventForm updateData={updateData} />
              </div>
            )}
      </div>
    </div>
  );
}
