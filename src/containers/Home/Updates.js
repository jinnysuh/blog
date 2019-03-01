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
          <img
            alt=""
            src="https://image.flaticon.com/icons/svg/813/813322.svg"
            height="30"
          />{' '}
          Updates
        </span>
        <p>Recent Video</p>
        <Video videoCode="0nRNeHLN85o" />
      </div>
    </section>
  );
}
