import React from 'react';
import { array, shape } from 'prop-types';
import { Link, RichText } from 'prismic-reactjs';
import linkResolver from '../../prismic';

import htmlSerializer from '../../htmlSerializer';

import '../../styles/globals.css';

const MySlice = ({ slice }) => (
  <section className="text-center">
    {
      slice.primary.portrait ?
      <img className="rounded-full mx-auto" src={slice.primary.portrait.url} alt={slice.primary.portrait.alt} />
      : <p>Here should be an image</p>
    }
    {
      slice.primary.title ?
      <RichText htmlSerializer={htmlSerializer} render={slice.primary.title}/>
      : <h2 className="text-center">Template slice, update me!</h2>
    }
    {
      slice.primary.slogan ?
      <RichText htmlSerializer={htmlSerializer} render={slice.primary.slogan}/>
      : <h1>Template slice, update me!</h1>
      }
    {
      slice.primary.description ?
      <RichText htmlSerializer={htmlSerializer} render={slice.primary.description}/>
      : <p>start by editing this slice from inside the SliceMachine builder!</p>
    }
    {
      slice.primary.contact ?
      <a className="my-7 rounded-md bg-purple-800 text-white md:py-4 md:px-10" href={Link.url(slice.primary.contact, linkResolver)}>Go to page</a>
      : <button>I'm a button</button>
    }
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
