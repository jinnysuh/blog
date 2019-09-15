import React from 'react';
import PropTypes from 'prop-types';

Modal.propTypes = {
  onHide: PropTypes.func.isRequired
};
export default function Modal(props) {
  const onHide = props.onHide;
  return (
    <div
      onClick={() => onHide()}
      style={{
        color: 'red',
        fontSize: 100
      }}
    >
      I am a Modal!
    </div>
  );
}

/*
<div
  style={{
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: 'black'
  }}
>
  <div style={{ color: '#fff', fontSize: '3rem' }}>
    This is a new modal component
  </div>
</div>;
*/
