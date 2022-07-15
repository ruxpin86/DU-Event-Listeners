import React from "react";
import "../style/events.css";
import { MdClose } from "react-icons/md";

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

export default function Events() {
  return (
    <div className="events-frame">
      <div className="title">
        <h1>Events</h1>
        <button className="createEventBtn">Create Event</button>
        <a href="/main">
          <MdClose />
        </a>
      </div>
      <div className="eventEl">
        {data.map((data, i) => (
          <div className="card" key={i}>
            <div className="card-header">
              <h1>{data.eventTitle}</h1>
            </div>
            <div className="card-body">
              <h2>{data.eventDate}</h2>
              <p>{data.description}</p>
              <h2>{data.eventHost}</h2>

              <h2>{data.eventLocation}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
