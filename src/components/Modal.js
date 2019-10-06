import React from 'react';
import PropTypes from 'prop-types';

Modal.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default function Modal(props) {
  const onClick = props.onClick;
  return (
    <div
      onClick={() => onClick()}
      style={{
        color: 'red',
        fontSize: 100
      }}
    >
      I am a Modal!
      <textarea rows="4" cols="50">
At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
</textarea>
    </div>
  );
}
