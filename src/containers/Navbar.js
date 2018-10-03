import React from "react";
import { Link } from "react-router-dom";
import image_5 from "../img/image5.png";
export default function Navbar() {
  return (
    <div className="container-fluid">
      <div
        style={{
          background: `url(${image_5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "17rem"
        }}
      />
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">
            <font size="5.2">
              <font color="skyblue">Jinny's</font>
              <font color="pink"> Blog</font>
            </font>
          </Link>
        </li>
      </ul>

      <ul className="nav navbar-nav">
        <li>
          <Link to="/Game">
            <font size="5.2">
              <font color="gray">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/181/181515.svg"
                  height="30"
                />{" "}
                Game
              </font>
            </font>
          </Link>
        </li>
        <li>
          <Link to="/Watch">
            <font size="5.2">
              <font color="gray">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/185/185983.svg"
                  height="30"
                />{" "}
                Watch
              </font>
            </font>
          </Link>
        </li>
        <li>
          <Link to="/SocialMedia">
            <font size="5.2">
              <font color="gray">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/148/148800.svg"
                  height="30"
                />{" "}
                SocialMedia
              </font>
            </font>
          </Link>
        </li>
        <li>
          <Link to="/AboutME">
            <font size="5.2">
              <font color="gray">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/189/189665.svg"
                  height="30"
                />
                AboutME
              </font>
            </font>
          </Link>
        </li>
        <li>
          <Link to="/Pictures">
            <font size="5.2">
              <font color="gray">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/148/148711.svg"
                  height="30"
                />{" "}
                Pictures
              </font>
            </font>
          </Link>
        </li>
      </ul>
    </div>
  );
}
