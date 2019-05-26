import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import background from '../img/background.png';
import { css } from 'emotion';

Navbar.propTypes = {
  location: PropTypes.object.isRequired
};

export default function Navbar({ location }) {
  return (
    <div
      className={css`
        background-color: black;
        overflow: hidden;
      `}
    >
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ul
          className={css`
            margin-left: 2rem;
            padding: 0;
            list-style: none;
            display: flex;
            align-items: flex-end;
            font-size: 2.5rem;
            height: 7rem;
            > li {
              display: flex;
              margin-left: 2rem;
              > a {
                color: #6897bb;
              }
              &.active {
                > a {
                  color: red;
                }
              }
            }
          `}
        >
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <img
                alt=""
                src="https://image.flaticon.com/icons/svg/263/263115.svg"
              />{' '}
              <span>Home</span>
            </Link>
          </li>
          <li className={location.pathname === '/About Me' ? 'active' : ''}>
            <Link to="/AboutME">
              <img
                alt=""
                src="https://image.flaticon.com/icons/svg/149/149150.svg"
              />{' '}
              <span>AboutME</span>
            </Link>
          </li>
          <li className={location.pathname === '/Watch' ? 'active' : ''}>
            <Link to="/Watch">
              <img
                alt=""
                src="https://image.flaticon.com/icons/svg/109/109700.svg"
              />{' '}
              <span>Watch</span>
            </Link>
          </li>
          <li className={location.pathname === '/SocialMedia' ? 'active' : ''}>
            <Link to="/SocialMedia">
              <img
                alt=""
                src="https://image.flaticon.com/icons/svg/149/149447.svg"
              />{' '}
              <span color="gray">SocialMedia</span>
            </Link>
          </li>
          <li className={location.pathname === '/AboutME' ? 'active' : ''} />
          <li className={location.pathname === '/Pictures' ? 'active' : ''}>
            <Link to="/Pictures">
              <img
                alt=""
                src="https://image.flaticon.com/icons/svg/149/149092.svg"
              />{' '}
              <span color="gray">Pictures</span>
            </Link>
          </li>
        </ul>
        <button
          style={{
            marginTop: '1rem',
            cursor: 'pointer',
            marginRight: '3rem'
          }}
          onClick={onLogOut}
        >
          <img
            alt=""
            src="https://image.flaticon.com/icons/svg/149/149407.svg"
          />{' '}
          Log Out
        </button>
      </div>
    </div>
  );

  async function onLogOut() {
    localStorage.removeItem('token');
  }
}
