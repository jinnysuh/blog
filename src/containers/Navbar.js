import React from "react";
import { Link } from "react-router-dom";

const playButton =
  "data:image/png;base64,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";
const socialMedia =
  "https://image.freepik.com/free-vector/social-media-icons-with-watercolor-design_1379-864.jpg";
export default function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        

        <ul className="nav navbar-nav">
          <li>
            <img
              src="https://jb-associates.leapwp.com.au/wp-content/uploads/sites/563/2017/05/are-you-looking-at-building-or-buying-a-new-home-1.png"
              width="40px"
            />
            <Link to="/">Home</Link>
          </li>
          </ul>
     
      
        <ul className="nav navbar-nav">
          <li>
            <img
              src="https://previews.123rf.com/images/konstantinks/konstantinks1507/konstantinks150700293/42317771-Video-game-icon-isolated-on-white-background-Vector-illustration--Stock-Vector.jpg"
              width="40px"
            />
            <Link to="/Game">Game</Link>
          </li>
          <li>
            <img src={playButton} width="40" />
            <Link to="/Watch">Watch</Link>
          </li>
          <li>
            <img src={socialMedia} width="40" />
            <Link to="/SocialMedia">SocialMedia</Link>
          </li>
          <li>
            <img
              src="https://cdn4.iconfinder.com/data/icons/clouds/512/MobileMe_512x512.png"
              width="40px"
            />
            <Link to="/AboutME">AboutME</Link>
          </li>
          <li>
            <img
              src="http://getmespark.com/wp-content/uploads/welcome_thumb_tacks_1600_clr_9661.png"
              width="300px"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
