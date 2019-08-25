import React from 'react';

export default function Modal() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: 'black'
      }}
    >
      This is a new modal component
    </div>
  );
}
