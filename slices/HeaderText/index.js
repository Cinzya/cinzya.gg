import React from "react";
import { array, shape } from "prop-types";
import { Link, RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic";

import htmlSerializer from "./../../htmlSerializer";
import { Divider } from "theme-ui";

// import '../../styles/globals.css';

const MySlice = ({ slice }) => (
  <section className="hero text-center container mx-auto">
    {slice.primary.portrait ? (
      <img
        className="rounded-full mx-auto mb-10"
        src={slice.primary.portrait.url}
        alt={slice.primary.portrait.alt}
      />
    ) : (
      <p>Here should be an image</p>
    )}
    <h1 className="text-2xl mb-10 font-semibold">
      {RichText.asText(slice.primary.title) || "Template slice, update me!"}
    </h1>

    <h2 className="text-7xl mb-16 font-black leading-tight">
      {RichText.asText(slice.primary.slogan) || "Template slice, update me!"}
    </h2>
    {slice.primary.description ? (
      <div className="w-2/3 mx-auto text-lg text-gray-300 leading-loose">
        <RichText
          htmlSerializer={htmlSerializer}
          render={slice.primary.description}
        />
      </div>
    ) : (
      <p>start by editing this slice from inside the SliceMachine builder!</p>
    )}
    {slice.primary.contact ? (
      <a
        className="rounded-full font-bold my-16 hover:bg-gray-400 text-xs uppercase bg-white text-black inline-block w-32 h-11 leading-10"
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
