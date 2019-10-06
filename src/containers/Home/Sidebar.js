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
        {signUpModalShown && (
          <Modal onClick={() => setSignUpModalShown(false)} />
        )}
        <Menu>
          <a className="menu-item" href="/">
            Home
          </a>
          <button
            onClick={() => setSignUpModalShown({ signUpModalShown: true })}
          >
            Sign Up
          </button>
          <button onClick={() => console.log('do something')}>Log in</button>
          <button onClick={() => console.log('do something')}>
            <font size="5">
              <font color="black">Log In</font>
            </font>
          </button>
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
