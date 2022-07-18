import React, { useState, useEffect } from "react";
import "../style/events.css";
import { MdClose, MdControlPoint } from "react-icons/md";
import EventCard from "../components/EventCard";
import AddEventForm from "../components/AddEventForm";
import useBreakpoint from "../components/tool/useBreakpoint";

export default function Events() {
  const [webAddForm, setOpenForm] = useState(true);
  const [openAddFormPhon, setOpenFormPhon] = useState(false);
  const [selectValue, setSelect] = useState("all");
  const [newdata, setNewdata] = useState([]);
  const point = useBreakpoint();

  const data = [
    {
      eventTitle: "Graduation Pool Party",
      eventDate: "Thursday, July 21st 1230-4pm",
      description:
        "To celebrate gradution, come to a rockin Pool Party at Kris'.  We'll have burgers, dogs, beer, and other refreshements.  Bring your suit to take a dip, or come ready to chill with your fellow classmates and celebrate graduation.  We deserve it!!",
      eventHost: "Kris",
      eventLocation: "3200 W colfax ave denver co",
    },
    {
      eventTitle: "Olly Ice Cream Extravaganza",
      eventDate: "Friday, July 22st 4-6pm",
      description:
        "Come Eat Ice Cream with Olly and Friends at Little Man Ice Cream.  Tons of Flavors and different cones.....WAFFLLLE!!",
      eventHost: "Olly",
      eventLocation: "Little Man Ice Cream Lohi",
    },
    {
      eventTitle: "Olly Ice Cream Extravaganza",
      eventDate: "Friday, July 22st 4-6pm",
      description:
        "Come Eat Ice Cream with Olly and Friends at Little Man Ice Cream.  Tons of Flavors and different cones.....WAFFLLLE!!",
      eventHost: "Olly",
      eventLocation: "Little Man Ice Cream Lohi",
    },
    {
      eventTitle: "Olly Ice Cream Extravaganza",
      eventDate: "Friday, July 22st 4-6pm",
      description:
        "Come Eat Ice Cream with Olly and Friends at Little Man Ice Cream.  Tons of Flavors and different cones.....WAFFLLLE!!",
      eventHost: "Olly",
      eventLocation: "Little Man Ice Cream Lohi",
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
          {newdata.length > 0 ? (
            newdata.map((data, i) => (
              <div className="card-frame">
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


