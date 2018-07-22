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
   <h2><font color="cyan">Gekpi smash</font></h2>
   <Image src={image_2} />
   <h3><font color="green">Gekpi zap</font></h3>
   <Image src={image_3} />
   <h4><font color="purple">Gekpi strange</font></h4>
   <Image src={image_4}/>
   <h5><font color="red">Ready Player Gekpi</font></h5>

  </div>
  
  );
}
