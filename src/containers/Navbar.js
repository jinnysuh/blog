import React from 'react';
import { Link } from 'react-router-dom';
import background from '../img/background.png';
export default function Navbar() {
  return (
    <div className="container-fluid">
      <div
        style={{
          background: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          height: '17rem'
        }}
      />
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">
            <div
              style={{
                fontSize: '2.5rem',
                textAlign: 'center',
                color: '#6897BB'
              }}
            >
              <span style={{ color: 'black' }}>{`Jinny's`}</span>{' '}
              <span style={{ color: 'gray' }}>{`Blog`}</span>
            </div>
          </Link>
        </li>
      </ul>

      <ul className="nav navbar-nav">
        <li>
          <Link to="/Watch">
            <div
              style={{
                fontSize: '2rem',
                textAlign: 'center',
                color: '#4f545c'
              }}
            >
              <div>
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/109/109700.svg"
                  height="30"
                />{' '}
                Watch
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/SocialMedia">
            <div
              style={{
                fontSize: '2rem',
                textAlign: 'center',
                color: '#4f545c'
              }}
            >
              <div>
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/149/149447.svg"
                  height="30"
                />{' '}
                SocialMedia
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/AboutME">
            <div
              style={{
                fontSize: '2rem',
                textAlign: 'center',
                color: '#4f545c'
              }}
            >
              <div>
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/149/149150.svg"
                  height="30"
                />
                AboutME
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/Pictures">
            <div
              style={{
                fontSize: '2rem',
                textAlign: 'center',
                color: '#4f545c'
              }}
            >
              <div>
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/149/149092.svg"
                  height="30"
                />{' '}
                Pictures
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
