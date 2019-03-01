import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from '../img/background.png';
import { css } from 'emotion';

export default class Navbar extends Component {
  render() {
    return (
      <div
        className={css`
          background-color: black;
          overflow: hidden;
        `}
      >
        <div>
          <div
            className={css`
              background: url(${background});
              background-size: cover;
              background-position: center top;
              back-position: center top;
              height: 17rem;
              @media (max-width: 1024px) {
                height: 8rem;
              }
            `}
          />
          <ul
            className={css`
              list-style: none;
              display: flex;
              align-items: center;
              > li {
                color: #6897bb;
                display: flex;
              }
            `}
          >
            <li>
              <Link to="/">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/263/263115.svg"
                  height="30"
                />{' '}
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/Watch">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/109/109700.svg"
                />{' '}
                <span>Watch</span>
              </Link>
            </li>
            <li>
              <Link to="/SocialMedia">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/149/149447.svg"
                />{' '}
                <span color="gray">SocialMedia</span>
              </Link>
            </li>
            <li>
              <Link to="/AboutME">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/149/149150.svg"
                />
                <span color="gray">AboutME</span>
              </Link>
            </li>
            <li>
              <Link to="/Pictures">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/149/149092.svg"
                />{' '}
                <span color="gray">Pictures</span>
              </Link>
            </li>
            <li>
              <button style={{ marginTop: '1rem' }} onClick={this.onLogOut}>
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/149/149407.svg"
                />{' '}
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  onLogOut = async() => {
    localStorage.removeItem('token');
    this.setState({
      userId: undefined,
      username: ''
    });
  };
}
