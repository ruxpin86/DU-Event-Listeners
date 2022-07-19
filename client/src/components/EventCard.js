import React from "react";
export default function EventCard({ data, i }) {
  return (
    <div className="card" key={i}>
      <div className="card-header">
        {data.link ? (
          <h1>
            <a href={data.link} target="_blank">
              {data.eventName}
            </a>
          </h1>
        ) : (
          <h1>{data.eventName}</h1>
        )}
      </div>
      <div className="card-body">
        <h2>{data.eventDate}</h2>
        <p>{data.description}</p>
        <h2>{data.creator}</h2>
        <h2>{data.location}</h2>
      </div>
    </div>
  );
}
