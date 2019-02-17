import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from '../img/background.png';

export default class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
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
                  <img
                    alt=""
                    src="https://image.flaticon.com/icons/svg/263/263115.svg"
                    height="30"
                  />{' '}
                  <font color="sky blue">Home</font>
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
                    <font color="gray">Watch</font>
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
                    <font color="gray">SocialMedia</font>
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
                    <font color="gray">AboutME</font>
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
                    <font color="gray">Pictures</font>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="navigation">
            <li>
              {' '}
              <button
                style={{ marginTop: '1rem' }}
                className="btn btn-default"
                onClick={this.onLogOut}
              >
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
