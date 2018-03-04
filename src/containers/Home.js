import React, { Component } from "react";
import Popup from "./Popup";
import Video from "../components/Video";

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
      <div>
        <a href="https://www.youtube.com/channel/UCFckiz3s8f4GTG8v11lk1cA">
          <img
            src="http://www.haytersite.com/static/media/jinnnnyyyyyy.342402ad.png"
            style={{
              width: "550px"
            }}
          />
        </a>
        <p className="App-intro">
          <strong>Welcome to my website!!</strong>
        </p>

        <Video videoCode="xB2wfk7XJZw" />
        <p>
          -- Made by{" "}
          <strong>
            <em>Mikey</em>. and <em>Jinny</em>
          </strong>
        </p>

        <p>Hi!I like to read books and play minecraft in rest times.</p>
        <p>
          My favorite kind of book is called{" "}
          <em>'Magnus Chase' writen by Rick Riordan.</em>{" "}
        </p>
        <p>I like computer programming and Im still working on my website!</p>

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
        <button
          className="btn btn-default"
          onClick={() => this.setState({ popupOn: true })}
        >
          Done
        </button>
      </div>
    );
  }
}
