import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import URL from '../../constants/URL';
import request from 'axios';
import Dolly from './Dolly';
import Messages from './Messages';
import Updates from './Updates';
import Modal from '../../components/Modal';
import Sidebar from './Sidebar';

export default function Home() {
  const [username, setUsername] = useState('');
  const [loginUsernameInput, setLoginUsernameInput] = useState('');
  const [loginPasswordInput, setLoginPasswordInput] = useState('');
  const [signUpUsernameInput, setSignUpUsernameInput] = useState('');
  const [signUpPasswordInput, setSignUpPasswordInput] = useState('');
  const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [signUpModalShown, setSignUpModalShown] = useState(false);

  useEffect(() => {
    init();
    async function init() {
      const token = localStorage.getItem('token');
      try {
        if (token) {
          const {
            data: { userId, username }
          } = await request.get(`${URL}/users/session`, {
            headers: {
              authorization: token
            }
          });
          setSignUpModalShown({ userId, username });
        }
        const { data: messages } = await request.get(`${URL}/posts`);
        setSignUpModalShown({ messages });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
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
            width: '50%',
            marginTop: '2rem'
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
            <span style={{ color: 'black' }}>
              <font color="black">
                <font size="6">
                  Welcome <font color="gray">{`To Jinny's Website`}</font>
                </font>
              </font>
            </span>
          </div>
        </div>
      </div>
      <Sidebar />
      {signUpModalShown && <div>Modal is Shown!!!</div>}
      <Dolly />
      <Updates />
      <button onClick={() => setSignUpModalShown({ signUpModalShown: true })}>
        Sign Up
      </button>
      <button onClick={() => console.log('do something')}>Log in</button>
      {signUpModalShown && <Modal />}
      {username && (
        <div style={{ marginTop: '1rem' }}>
          <p>Hello {username}!</p>
          <div>
            <input
              placeholder="Write a message!"
              onChange={e =>
                setSignUpModalShown({ messageInput: e.target.value })
              }
              onKeyUp={event => {
                if (event.key === 'Enter') {
                  onSubmitMessage();
                }
              }}
              value={messageInput}
            />
          </div>
        </div>
      )}

      {!username && (
        <div
          className={css`
            display: flex;
            justify-content: center;
          `}
        >
          <section
            className={css`
              display: flex;
              flex-direction: column;
              margin-top: 1rem;
            `}
          >
            <p>
              <img
                alt=""
                src="https://image.flaticon.com/icons/svg/131/131973.svg"
                height="30"
              />{' '}
              <font size="3">Sign In</font>
            </p>
            <input
              value={loginUsernameInput}
              onChange={event => setLoginUsernameInput(event.target.value)}
              placeholder="write your username"
            />
            <input
              value={loginPasswordInput}
              type="password"
              onChange={event => setLoginPasswordInput(event.target.value)}
              placeholder="write your password"
            />
            <button
              className="btn btn-default"
              style={{ marginTop: '1rem' }}
              onClick={onLogIn}
              disabled={loginButtonDisabled()}
            >
              <font size="3">Sign In</font>
            </button>
          </section>

          <section
            className={css`
              display: flex;
              flex-direction: column;
              margin-top: 1rem;
              margin-left: 1rem;
            `}
          >
            <p>
              <img
                alt=""
                src="https://image.flaticon.com/icons/svg/25/25284.svg"
                height="30"
              />{' '}
              <font size="3">Sign Up</font>
            </p>
            <input
              value={signUpUsernameInput}
              onChange={event => setSignUpUsernameInput(event.target.value)}
              placeholder="Write your username"
            />
            <input
              value={signUpPasswordInput}
              type="password"
              onChange={event => setSignUpPasswordInput(event.target.value)}
              placeholder="Write your password"
            />
            <input
              value={signUpPasswordConfirm}
              type="password"
              onChange={event => setSignUpPasswordConfirm(event.target.value)}
              placeholder=" Confirm your password"
            />
            <button
              className="btn btn-default"
              style={{ marginTop: '1rem' }}
              onClick={onSignUp}
              disabled={signUpButtonDisabled()}
            >
              <font size="3">Sign Up</font>
            </button>
          </section>
        </div>
      )}
      <Messages messages={messages} />
    </div>
  );

  async function onSignUp() {
    try {
      const {
        data: { alreadyExists, token }
      } = await request.post(`${URL}/users`, {
        username: signUpUsernameInput,
        password: signUpPasswordInput
      });
      if (alreadyExists) return window.alert('User already exists');
      localStorage.setItem('token', token);
      setUsername(signUpUsernameInput);
    } catch (error) {
      console.error(error);
    }
  }

  async function onLogIn() {
    try {
      const {
        data: { token }
      } = await request.get(
        `${URL}/users?username=${loginUsernameInput}&password=${loginPasswordInput}`
      );
      localStorage.setItem('token', token);
      setUsername(loginUsernameInput);
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmitMessage() {
    const { data } = await request.post(`${URL}/posts`, { post: messageInput });
    setMessageInput('');
    setMessages(messages => messages.concat(data));
  }

  function loginButtonDisabled() {
    let result = false;
    if (!loginUsernameInput || !loginPasswordInput) result = true;
    return result;
  }

  function signUpButtonDisabled() {
    let result = false;
    if (
      !signUpUsernameInput ||
      !signUpPasswordInput ||
      !signUpPasswordConfirm
    ) {
      result = true;
    }
    if (signUpPasswordConfirm !== signUpPasswordInput) result = true;
    return result;
  }
}
