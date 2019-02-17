import React from 'react';
import PropTypes from 'prop-types';

Messages.propTypes = {
  messages: PropTypes.array.isRequired
};

export default function Messages({ messages }) {
  return (
    <div
      style={{
        padding: '1rem 0 2rem 0',
        width: '100%'
      }}
    >
      <div>
        <span style={{ fontSize: '1.5rem' }} color="orange">
          Messages!
        </span>
      </div>
      {messages.map(msg => {
        return (
          <div key={msg.id}>
            {msg.content}{' '}
            <button onClick={() => this.onDelete(msg.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
