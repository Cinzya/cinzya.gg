import React from "react";

const ProjectList = ({ events }) => {
  return (
    <div className="flex flex-wrap">
      {events.map((event) => (
        <div
          className="w-1/2 flex"
          style={{ backgroundImage: event.thumbnail.url || "" }}
        >
          <img
            className="w-10/12 h-auto"
            src={event.logo.url}
            alt={event.logo.alt || ""}
          ></img>
          <div className="" style={{ display: "none" }}>
            <h3>{event.title[0].text}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
