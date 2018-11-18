import React from 'react';
import { css } from 'emotion';
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
      <section>
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
          <font color="gray"> My Favorite Things</font>
        </h2>
        <p>
          <font size="5">
            My favorite food: <font color="black" />
            Pizza
          </font>
        </p>
        <p>
          <font size="5">
            My favorite book: <font color="gray">Magnus Chase </font>
          </font>
        </p>
        <p>
          <font size="5">
            My favorite game: Mine
            <font color="black">craft</font>
          </font>
        </p>

        <h3>
          <font color="purple">My Specialty</font>
        </h3>
        <p>
          <font size="5">
            I love to <font color="sky blue">Ski</font> and I use to go to
            Gonjiam Resort.
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
    </div>
  );
}
