import React from "react";
import { css } from "emotion";
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
      <h1> <font color="orange">My Hobbies</font></h1>
      <p><font size="5">I like skiing, Programming, Playing Minecraft, and Reading Books</font></p>
      <h2> <font color="gray"> My Favorite Things</font></h2>
      <p><font size="5">My favorite food: <font color="orange">Pizza</font></font></p>
      <p><font size="5">My favorite book: <font color="purple">Magnus Chase </font></font></p>
      <p><font size="5">My favorite game: <font color="green">Minecraft</font></font></p>
      <p><font size="5">My favorite Super Hero: <font color="red">Spiderman</font> & Black Panther</font></p>
      <h3><font color="pink">My Specialty</font></h3>
      <p><font size="5">I love to <font color="sky blue">Ski</font> and I use to go to Gonjiam Resort.</font></p>
      <p><font size="5">Also, I am good at making <font color="brown">chocolate</font> muffins.</font></p>
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
            style={{
              width: "250px"
            }}
          />
          <img src="/black_panther.png"
          style={{
            width: "250px"
          }}/>
          <img src="/magnus_chase.png"
               style={{
            width: "500px"
          }}/>
          
        </div>
      </section>
    </div>
  );
}
