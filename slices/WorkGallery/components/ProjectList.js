import React from "react";
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime

const ProjectList = ({ events }) => {
  return (
    <div className="flex flex-wrap">
      {events.map((event) => (
        <Anime
        style={{ width: 100 }}
        _onMouseEnter={[
          {
            target: "#logo",
            
          }
        ]}>          
          <div
            className="w-1/2 flex"
            id="logo"
            style={{ backgroundImage: event.thumbnail.url || "" }}
          >
            <img
              className="w-10/12 h-auto"
              src={event.logo.url}
              alt={event.logo.alt || ""}
            ></img>
            <div className="" id="thumbnail" style={{ display: "none" }}>
              <h3>{event.title[0].text}</h3>
            </div>
          </div>
        </Anime>
      ))}
    </div>
  );
};

export default ProjectList;
