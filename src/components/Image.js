import React from 'react';
import PropTypes from 'prop-types';

Image.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object
};
export default function Image({ src, style }) {
  return (
    <img
      alt=""
      src={src}
      style={{
        width: '100%',
        ...style
      }}
      rel=""
    />
  );
}
