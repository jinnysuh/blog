import React, { Component } from 'react';
import { css } from 'emotion';
import URL from '../../constants/URL';
import request from 'axios';
import Dolly from './Dolly';
import Messages from './Messages';
import Updates from './Updates';

export default class Home extends Component {
  state = {
    userId: undefined,
    username: '',
    loginUsernameInput: '',
    loginPasswordInput: '',
    signUpUsernameInput: '',
    signUpPasswordInput: '',
    signUpPasswordConfirm: '',
    messageInput: '',
    messages: []
  };
  async componentDidMount() {
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
        this.setState({ userId, username });
      }
      const { data: messages } = await request.get(`${URL}/posts`);
      this.setState({ messages });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {
      messages,
      username,
      loginUsernameInput,
      loginPasswordInput,
      messageInput,
      signUpUsernameInput,
      signUpPasswordInput,
      signUpPasswordConfirm
    } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
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
              width: '50%'
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
        <Dolly />
        <Updates />
        <div style={{ paddingBottom: '3rem' }}>
          {username && (
            <div style={{ marginTop: '1rem' }}>
              <p>Hello {username}</p>
              <div>
                <input
                  placeholder="Write a message!"
                  onChange={e =>
                    this.setState({ messageInput: e.target.value })
                  }
                  onKeyUp={event => {
                    if (event.key === 'Enter') {
                      this.onSubmitMessage();
                    }
                  }}
                  value={messageInput}
                />
              </div>
            </div>
          )}
        </div>
        {!username && (
          <div
            className={css`
              display: flex;
            `}
          >
            <section
              className={css`
                display: flex;
                flex-direction: column;
                margin-top: 1rem;
              `}
            >
              <p><img
                    alt=""
                    src="https://image.flaticon.com/icons/svg/131/131973.svg"
                    height="30"
              />{' '}Sign In</p>
              <input
                value={loginUsernameInput}
                onChange={event =>
                  this.setState({ loginUsernameInput: event.target.value })
                }
                placeholder="write your username"
              />
              <input
                value={loginPasswordInput}
                type="password"
                onChange={event =>
                  this.setState({ loginPasswordInput: event.target.value })
                }
                placeholder="write your password"
              />
              <button
                className="btn btn-default"
                style={{ marginTop: '1rem' }}
                onClick={this.onLogIn}
                disabled={this.loginButtonDisabled()}
              >
                Sign In
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
                Sign Up
              </p>
              <input
                value={signUpUsernameInput}
                onChange={event =>
                  this.setState({ signUpUsernameInput: event.target.value })
                }
                placeholder="Write your username"
              />
              <input
                value={signUpPasswordInput}
                type="password"
                onChange={event =>
                  this.setState({ signUpPasswordInput: event.target.value })
                }
                placeholder="Write your password"
              />
              <input
                value={signUpPasswordConfirm}
                type="password"
                onChange={event =>
                  this.setState({ signUpPasswordConfirm: event.target.value })
                }
                placeholder=" Confirm your password"
              />
              <button
                className="btn btn-default"
                style={{ marginTop: '1rem' }}
                onClick={this.onSignUp}
                disabled={this.signUpButtonDisabled()}
              >
                Sign Up
              </button>
            </section>
          </div>
        )}
        <Messages messages={messages} />
      </div>
    );
  }

  onDelete = async postId => {
    await request.delete(`${URL}/posts?id=${postId}`);
    this.setState(state => ({
      messages: state.messages.filter(msg => msg.id !== postId)
    }));
  };

  onSignUp = async() => {
    const { signUpUsernameInput, signUpPasswordInput } = this.state;
    try {
      const {
        data: { alreadyExists, token, userId }
      } = await request.post(`${URL}/users`, {
        username: signUpUsernameInput,
        password: signUpPasswordInput
      });
      if (alreadyExists) return window.alert('User already exists');
      localStorage.setItem('token', token);
      this.setState({
        userId,
        username: signUpUsernameInput
      });
    } catch (error) {
      console.error(error);
    }
  };

  onLogIn = async() => {
    const { loginUsernameInput, loginPasswordInput } = this.state;
    try {
      const {
        data: { token, userId }
      } = await request.get(
        `${URL}/users?username=${loginUsernameInput}&password=${loginPasswordInput}`
      );
      localStorage.setItem('token', token);
      this.setState({
        userId,
        username: loginUsernameInput
      });
    } catch (error) {
      console.error(error);
    }
  };

  onSubmitMessage = async() => {
    const { messageInput } = this.state;
    const { data } = await request.post(`${URL}/posts`, { post: messageInput });
    this.setState(state => ({
      messageInput: '',
      messages: state.messages.concat(data)
    }));
  };

  loginButtonDisabled = () => {
    const { loginUsernameInput, loginPasswordInput } = this.state;
    let result = false;
    if (!loginUsernameInput || !loginPasswordInput) result = true;
    return result;
  };

  signUpButtonDisabled = () => {
    const {
      signUpUsernameInput,
      signUpPasswordInput,
      signUpPasswordConfirm
    } = this.state;
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
  };
}
