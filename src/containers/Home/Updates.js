import React from 'react';
import Video from '../../components/Video';
import { css } from 'emotion';

export default function Updates() {
  return (
    <section
      className={css`
        width: 100%;
        display: flex;
        color: black;
        justify-content: center;
      `}
    >
      <div>
        <span
          style={{ color: 'skyblue', fontSize: '3rem', fontWeight: 'bold' }}
        >
          Updates
        </span>
        <p>Recent Video</p>
        <Video videoCode="0nRNeHLN85o" />
      </div>
    </section>
  );
}
