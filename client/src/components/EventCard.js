import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
export default function EventCard({ data, i }) {
  const [open, setOpen] = useState(false);

  return (
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
  );
}

// {
//   data.map((data, i) => (
//     <div className="card" key={i}>
//       <div className="card-header">
//         <h1>{data.eventTitle}</h1>
//       </div>
//       <div className="card-body">
//         <h2>{data.eventDate}</h2>
//         <p>{data.description}</p>
//         <h2>{data.eventHost}</h2>

//         <h2>{data.eventLocation}</h2>
//       </div>
//     </div>
//   ));
// }
