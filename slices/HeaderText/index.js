import React from "react";
import { array, shape } from "prop-types";
import { Link, RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic";

import htmlSerializer from "./../../htmlSerializer";

// import '../../styles/globals.css';

const MySlice = ({ slice }) => (
  <section className="hero text-center">
    {slice.primary.portrait ? (
      <img
        className="rounded-full mx-auto mb-10"
        src={slice.primary.portrait.url}
        alt={slice.primary.portrait.alt}
      />
    ) : (
      <p>Here should be an image</p>
    )}
    <h1 className="text-3xl mb-12">
      {RichText.asText(slice.primary.title) || "Template slice, update me!"}
    </h1>

    <h2 className="text-7xl">
      {RichText.asText(slice.primary.slogan) || "Template slice, update me!"}
    </h2>
    {slice.primary.description ? (
      <RichText
        htmlSerializer={htmlSerializer}
        render={slice.primary.description}
      />
    ) : (
      <p>start by editing this slice from inside the SliceMachine builder!</p>
    )}
    {slice.primary.contact ? (
      <a
        className="my-7 rounded-md bg-purple-800 text-white md:py-4 md:px-10"
        href={Link.url(slice.primary.contact, linkResolver)}
      >
        Go to page
      </a>
    ) : (
      <button>I'm a button</button>
    )}
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
