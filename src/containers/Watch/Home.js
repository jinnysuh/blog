import React from 'react';
import Video from '../../components/Video';
import Fade from 'react-reveal/Fade';
export default function Home() {
  return (
    <div>
      <h1>
        <font color="Black">Pivot animations</font>
        <font color="gray"> By </font> <font color="gray">Me!</font>
      </h1>
      <Video videoCode="Q1JEWV5esDo" />
      <h2>
        <strong>
          <font color="purple">MY INTRO!</font>
        </strong>
      </h2>
      <div>
        <Video videoCode="0nRNeHLN85o" />
      </div>
      <div>
        <Video videoCode="ZeEo65V327I" />
      </div>
      <div>
        <Video videoCode="kfYSa_sO9KM" />
      </div>
      <p> © Copyright Jinny2006 All Rights Reserved.</p>
    </div>
  );
}
