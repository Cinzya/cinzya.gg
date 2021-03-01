import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic';

import htmlSerializer from './../../htmlSerializer';

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
    {
      slice.primary.section ?
      <RichText render={slice.primary.section}/>
      : <h2 style={h2}>Clients I've worked with</h2>
    }
    {
      slice.primary.logo && slice.primary.thumbnail ?
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
