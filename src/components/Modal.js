import React from 'react';
import PropTypes from 'prop-types';

Modal.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default function Modal(props) {
  const onClick = props.onClick;
  return (
    <div onClick={() => onClick()}>
      <textarea rows="4" cols="50" />
    </div>
  );
}
