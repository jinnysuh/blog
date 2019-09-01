import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Modal from '../../components/Modal';

export default function Sidebar() {
  const [signUpModalShown, setSignUpModalShown] = useState(false);
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div
        style={{
          textAlign: 'center',
          overflow: 'auto'
        }}
      >
        <Menu>
          <a className="menu-item" href="/">
            Home
          </a>
          <button onClick={() => this.setState({ signUpModalShown: true })}>
            Sign Up
          </button>
          <button onClick={() => console.log('do something')}>Log in</button>
          {signUpModalShown && <Modal />}
          <button onClick={() => console.log('do something')}>
            <font size="5">
              <font color="black">Log In</font>
            </font>
          </button>
          {signUpModalShown && <Modal />}
          <button onClick={() => setSignUpModalShown(true)}>
            <font size="5">
              <font color="black">Sign Up</font>
            </font>
          </button>
        </Menu>
      </div>
    </div>
  );
}
