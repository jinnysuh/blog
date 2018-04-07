import React, { Component } from "react";
import Popup from "./Popup";
import Video from "../components/Video";
import { css } from "emotion";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      popupOn: false
    };
  }

  render() {
    const { post, popupOn } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
       
        <div
          className="App-intro"
          style={{
            width: "100%",
            height: "5rem",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              position: "relative",
              width: "50%"
            }}
          >
            <div
              className={css`
                font-size: 3.2rem;
                text-align: center;
                font-weight: bold;
                line-height: 1;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                margin: 0;
                text-decoration: none;
                color: #fff;
                &:before,
                &:after {
                  display: block;
                  width: 100%;
                  text-align: center;
                  content: "Welcome To Jinny's Website";
                  position: absolute;
                  top: 0;
                  left: 0;
                  opacity: 0.8;
                }
                &:after {
                  color: #f0f;
                  z-index: -2;
                }
                &:before {
                  color: #0ff;
                  z-index: -1;
                }
                &:hover {
                  &:before {
                    animation: glitch-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                      both infinite;
                  }
                  &:after {
                    animation: glitch-left-2 0.3s
                      cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
                  }
                }
              }
              @keyframes glitch-left {
                0% {
                  transform: translate(0);
                }
                33% {
                  transform: translate(-5px, 3px);
                }
                66% {
                  transform: translate(5px, -3px);
                }
                to {
                  transform: translate(0);
                }
              }
              @keyframes glitch-left-2 {
                0% {
                  transform: translate(0);
                }
                33% {
                  transform: translate(-5px, -3px);
                }
                66% {
                  transform: translate(5px, 2px);
                }
                to {
                  transform: translate(0);
                }
              }
            `}
            >
        
              <span style={{ color: "black" }}>
                <font color="sky blue">
                  <font size="6">Welcome To Jinny's Website</font>
                </font>
              </span>
            </div>
          </div>
        </div>
        <section>
        <a href="https://www.youtube.com/channel/UCFckiz3s8f4GTG8v11lk1cA">
          <img
            src="https://cdn.discordapp.com/attachments/379149212081848322/429546815516311563/jinnyee.png"
            style={{
             height: "200px"
            }}
          />
        </a>
       </section>
        <section
          className={css`
            background: black;
            width: 30%;
            margin-left: 1rem;
            display: flex;
            color: white;
            align-items: left;
            justify-content: left;
            margin-right: 1rem;
          `}
        >
          <div>
            <p>
              - Made by{" "}
              <font size="5">
                <em>Mikey</em>. and <em>Jinny</em>
              </font>
            </p>
            <p>
              <font size="5">
                Hi guys I'm just a ordinary 6-grade kid who really likes
                programming and science. I like to read books or play minecraft
                at free times. Subscribe to my <font color="red">YOU</font>TUBE
                channel!
              </font>
            </p>
          </div>
        </section>

        <p>{post}</p>
        <input
          value={post}
          onChange={event => this.setState({ post: event.target.value })}
          placeholder="write your username"
          onKeyUp={event => {
            if (event.key === "Enter") {
              this.setState({ popupOn: true });
            }
          }}
        />
        <Popup
          show={popupOn}
          onHide={() => this.setState({ popupOn: false })}
          text={post}
        />

        <p>{post}</p>
        <input
          value={post}
          onChange={event => this.setState({ post: event.target.value })}
          placeholder="write your password"
          onKeyUp={event => {
            if (event.key === "Enter") {
              this.setState({ popupOn: true });
            }
          }}
        />
        <Popup
          show={popupOn}
          onHide={() => this.setState({ popupOn: false })}
          text={post}
        />
        <button
          className="btn btn-default"
          onClick={() => this.setState({ popupOn: true })}
        >
          Log In/Sign Up
        </button>
      </div>
    );
  }
}
