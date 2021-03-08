import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

import ProjectList from "./../../components/ProjectList";

const MySlice = ({ slice }) => (
  <section className="text-center">
    <h2 className="text-2xl">
      {RichText.asText(slice.primary.section) || "Clients I've worked with"}
    </h2>

    <ProjectList events={slice.items} />
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      section: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
