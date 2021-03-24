import React, { Component } from "react";

const ProjectList = ({ events }) => {
  return (
    <div className="flex flex-wrap items-stretch">
      {events.map((event, index) => (
        <div className="w-1/2">
          <div
            key={index}
            className="background m-4 flex justify-center project bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url(${event.thumbnail.url})` || "" }}
          >
            <div className="bg-transparent flex justify-center items-center my-16">
              <img
                key={index}
                className="logo bg-transparent h-auto w-96"
                src={event.logo.url}
                alt={event.logo.alt || ""}
              ></img>
            </div>
            <div key={index} className="title" style={{ display: "none" }}>
              <h3>{event.title[0].text}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
