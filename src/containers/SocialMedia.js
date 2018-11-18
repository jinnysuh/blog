import React from 'react';
import { css } from 'emotion';

export default function Minecraft() {
  return (
    <div>
      <h2>
        <img
          alt=""
          src="https://res.cloudinary.com/teepublic/image/private/s--gfsWHvaH--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1493209189/production/designs/1524888_1.jpg"
        />
      </h2>
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
                  content: '👇🏻 👇🏻 Information down below 👇🏻 👇🏻';
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
            <span style={{ color: 'black' }}>Information down below </span>
          </div>
        </div>
      </div>

      <a href="https://www.youtube.com/channel/UCFckiz3s8f4GTG8v11lk1cA/videos">
        <img
          alt=""
          src="https://d1cm41cmeatikf.cloudfront.net/web/corp/images/YouTube_iOS_App_Logo_2015.png"
          style={{
            width: '200px'
          }}
        />
        <p>Youtube</p>
      </a>

      <a href="https://www.twin-kle.com/users/jinny">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Blue_square_T.PNG"
          width="150px"
        />
        <p>Twinkle</p>
      </a>
      <a href="https://youtu.be/xRMxeqReX8A">
        {' '}
        <p>click here to learn how to use twinkle website!</p>{' '}
      </a>
      <a href="https://hypixel.net/members/jinny2006.1737598/">
        <img
          alt=""
          src="https://pbs.twimg.com/profile_images/892182725960105986/mUnwMuh3.jpg"
          width="150px"
        />
        <p>Hypixel</p>
      </a>
      <p>Discord : https://discord.gg/5DsQab *Join my server!*</p>
    </div>
  );
}
