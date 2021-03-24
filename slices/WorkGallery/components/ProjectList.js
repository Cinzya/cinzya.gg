import React from "react";
import Project from "./Project";

const ProjectList = ({ events }) => {
  return (
    <div className="flex flex-wrap items-stretch">
      {events.map((event, index) => (
        <Project key={index} event={event} />
      ))}
    </div>
  );
};

export default ProjectList;
