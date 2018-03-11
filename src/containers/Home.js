import React, { Component } from 'react';
import Popup from './Popup';
import Video from '../components/Video';
import { css } from 'emotion';
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <a href="https://www.youtube.com/channel/UCFckiz3s8f4GTG8v11lk1cA">
          <img
            src="http://www.haytersite.com/static/media/jinnnnyyyyyy.342402ad.png"
            style={{
              width: '550px'
            }}
          />
        </a>
        <div
          className="App-intro"
          style={{
            width: '100%',
            height: '5rem',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '50%'
            }}
          >
            <div
              className={css`
                font-size: 2rem;
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
                  content: 'Welcome to my website!!';
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
              <span style={{ color: 'black' }}>Welcome to my website!!</span>
            </div>
          </div>
        </div>

        <Video videoCode="xB2wfk7XJZw" />
        <p>
          -- Made by{' '}
          <strong>
            <em>Mikey</em>. and <em>Jinny</em>
          </strong>
        </p>

        <p>Hi!I like to read books and play minecraft in rest times.</p>
        <p>
          My favorite kind of book is called{' '}
          <em>'Magnus Chase' writen by Rick Riordan.</em>{' '}
        </p>
        <p>I like computer programming and Im still working on my website!</p>

        <p>{post}</p>
        <input
          value={post}
          onChange={event => this.setState({ post: event.target.value })}
          placeholder="write your username"
          onKeyUp={event => {
            if (event.key === 'Enter') {
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
