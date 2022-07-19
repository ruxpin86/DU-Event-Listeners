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
  const [selectValue, setSelect] = useState("all");
  const [newdata, setNewdata] = useState([]);
  const point = useBreakpoint();
  const { loading, data, error: eventError } = useQuery(QUERY_EVENT);
  const eventsData = data?.getAllEvents || {};

  console.log("eventsData", eventsData);
  if (data) {
    console.log(data);
  }
  const eventsDate = [
    {
      creator: "krisd",
      eventName: "poolParty",
      description: "pool party splash",
      location: "denver",
      eventDate: "2022/07/21",
    },
    {
      creator: "olly",
      eventName: "join us",
      description: "yoyoyo",
      location: "denver",
      eventDate: "2022/07/18",
      link: "https://google.com",
    },
  ];

  useEffect(() => {
    setNewdata(data);
  }, []);
  const closeFunc = () => {
    setOpenFormPhon(false);
  };

  console.log("selectValue", selectValue);
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
          {eventsDate.length > 0 ? (
            eventsDate.map((data, i) => (
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
                <AddEventForm />
              </div>
            )
          : openAddFormPhon && (
              <div className="right">
                <div className="title">
                  <h2>Add Events</h2>
                  <MdClose className="closeBtn" onClick={closeFunc} />
                </div>
                <AddEventForm />
              </div>
            )}
      </div>
    </div>
  );
}
