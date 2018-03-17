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
      <p><font size="5">My favorite book: <font color="sky blue">Magnus Chase </font></font></p>
      <p><font size="5">My favorite game: <font color="green">Minecraft</font></font></p>
      <p><font size="5">My favorite Super Hero: <font color="red">Spiderman</font> & <font color="purple">Black Panther</font> </font></p>
      
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
            src="https://minecraft.net/static/pages/img/servers/servers-hub-3.3048acef5b82.png"
            style={{
              width: "300px"
            }}
          />
          <img src=" https://i.pinimg.com/originals/49/d7/f9/49d7f9e2d48e5b224851d5338662f253.jpg"
          style={{
            width: "300px"
          }}/>
        </div>
      </section>
    </div>
  );
}
