import React from 'react';
import { css } from 'emotion';
import Fade from 'react-reveal/Fade';
export default function AboutMe() {
  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <h1>
        About <font color="sky blue">ME</font>
      </h1>
      <Fade left>
        <section>
          <p>
            <font size="20">Portfolio</font>
          </p>
          <h1>
            {' '}
            <font color="black">My Hobbies</font>
          </h1>
          <p>
            <font size="5">
              I like skiing, Programming, Playing Minecraft, and Reading Books
            </font>
          </p>
          <h2>
            {' '}
            <font color="cyan"> My Favorite Subject</font>
          </h2>
          <p>
            <font size="5">
              My favorite subject is science and I like physics the most.Because
              I can learn every force that works to us and physic is applied to
              everything that moves in the world.
            </font>
          </p>

          <h3>
            <font color="orange">
              <font size="5">My Prizes</font>
            </font>
          </h3>
          <p>
            <font size="5">
              1. Science debate contest <font color="brown">bronze medal</font>
              (5th grade) <br />
              2. Science air rocket contest{' '}
              <font color="gray">sliver medal</font>
              (5th grade) <br />
              3. Science experiment contest{' '}
              <font color="gray">sliver medal</font>
              (6th grade)
              <br />
              4. Gonjiam Ski resort ski race contest{' '}
              <font color="brown">bronze medal</font>(6th grade) <br />
              5. Math and Computer science Olympiad(No prize lol)
            </font>
          </p>
          <h4>
            <font color="sky blue">
              <font size="5">My Devices</font>
            </font>
          </h4>
          <p>
            <font size="5">
              1. Macbook Pro 13 inch 2017
              <br />
              2. Airpod 1<br />
              3. Galaxy buds 1 <br />
              4. Logitech mouse G603
              <br />
              5. Logitech gaming mouse G102 <br />
              6. Samsung Galaxy note 4(it sucks)
              <br />
              7. Xiaomi Mi Band 2 <br />
              8. Samsung note book(it sucks too) <br />
              9. Galaxy Watch Active 1<br />
              10. Iphone 7<br/>
              11. Iphone 8+<br/>
              12. Samsung Galaxy Note 10+
            </font>
          </p>
        </section>
        <section
          className={css`
            background: white;
            width: 30%;
            margin-left: 1rem;
            display: flex;
            color: purple;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
          `}
        >
          <div>
            <img
              src="/minecraft_island.png"
              alt=""
              style={{
                width: '370px'
              }}
            />
          </div>
        </section>
      </Fade>
    </div>
  );
}
