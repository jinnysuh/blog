import React from 'react';
import { Link } from 'react-router-dom';
import image_5 from '../img/image5.png';
export default function Navbar() {
  return (
    <div className="container-fluid">
      <div
        style={{
          background: `url(${image_5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '17rem'
        }}
      />
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">
            <font size="5.2">
              <font color="gray">🏠 Home</font>
            </font>
          </Link>
        </li>
      </ul>

      <ul className="nav navbar-nav">
        <li>
          <Link to="/Game">
            <font size="5.2">
              <font color="gray">🎮 Game</font>
            </font>
          </Link>
        </li>
        <li>
          <Link to="/Watch">
            <font size="5.2">
              <font color="gray">🎥 Watch</font>
            </font>
          </Link>
        </li>
        <li>
          <Link to="/SocialMedia">
            <font size="5.2">
              <font color="gray">📋 SocialMedia</font>
            </font>
          </Link>
        </li>
        <li>
          <Link to="/AboutME">
            <font size="5.2">
              <font color="gray">ℹ️ AboutME</font>
            </font>
          </Link>
        </li>
        <li>
          <Link to="/Pictures">
            <font size="5.2">
              <font color="gray">🎨 Pictures</font>
            </font>
          </Link>
        </li>
      </ul>
    </div>
  );
}
