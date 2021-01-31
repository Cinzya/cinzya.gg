import React from 'react';
import { array, shape } from 'prop-types';
import { RichText, Image } from 'prismic-reactjs';

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center',
};

const h2 = {
  color: '#8592e0',
};

const MySlice = ({ slice }) => (
  <section style={section}>
    {/* {
      slice.primary.portrait ?
      <Image render={slice.primary.portrait}/>
      : <p>Here should be an image</p>
    } */}
    {
      slice.primary.title ?
      <RichText render={slice.primary.title}/>
      : <h2 style={h2}>Template slice, update me!</h2>
    }
    {
      slice.primary.slogan ?
      <RichText render={slice.primary.slogan}/>
      : <h1 style={h1}>Template slice, update me!</h1>
      }
    {
      slice.primary.description ?
      <RichText render={slice.primary.description}/>
      : <p>start by editing this slice from inside the SliceMachine builder!</p>
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
