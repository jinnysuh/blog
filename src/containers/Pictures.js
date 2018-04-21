import React from "react";
import { css } from "emotion";
import Image from "../components/Image";
import image_1 from "../../src/img/Gekpismash.png";
import image_2 from "../../src/img/Gekpizap.png";
import image_3 from "../../src/img/gekpistrange2.png"
import image_4 from "../../src/img/readyplayergekpi.png"
export default function AboutMe() {
  return (
    <div
        style={{ 
            display: "flex",
              flexDirection: "column",

        }}
    >
   <h1> Some drawings by Me, <font color="skyblue">Jinny</font>  
   </h1>
   <Image src={image_1} />
   <Image src={image_2} />
   <Image src={image_3} />
   <Image src={image_4}/>
  </div>
  );
}
