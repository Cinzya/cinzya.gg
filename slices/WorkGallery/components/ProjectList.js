import React from "react";

const ProjectList = ({ events }) => {
  return (
    <div className="flex flex-wrap">
      {events.map((event, index) => (
          <div key={index}
            className="w-1/2 flex justify-center project bg-cover bg-center"
            style={{ backgroundImage: `url(${event.thumbnail.url})` || "" }}
            >
              <img key={index}
                className="logo bg-transparent w-7/12 my-16"
                src={event.logo.url}
                alt={event.logo.alt || ""}
              ></img>
              <div key={index} className="title" style={{ display: "none" }}>
                <h3>{event.title[0].text}</h3>
              </div>
          </div>
      ))}
    </div>
  );
};

export default ProjectList;
