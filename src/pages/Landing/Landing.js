import React, { Component, useState } from 'react';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { CSSTransition } from 'react-transition-group';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import './Landing.css';

export default function Landing() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('sergii@mail.com');
  const [password, setPassword] = useState('12345');

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    console.log(
      '🚀 ~ file: Landing.js ~ line 27 ~ Landing ~ email',
      email,
    );

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <div className="box">
        <div className="logo">Questify</div>
        <h1 className="title">
          Questify will turn your life into <br />
          a thrilling game full of amazing
          <br />
          quests and exciting challenges.
        </h1>
        <div className="input-box">
          <h2 className="appeal">
            Choose your name to sign up or log in
          </h2>
          <input type="text" className="input" />
          <form
            // className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <label>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Ivanov@mail.com"
                onChange={handleEmail}
              />
            </label>

            <label>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={handlePassword}
              />
            </label>

            <button type="submit">Войти</button>
          </form>
          <button className="button">go!</button>
        </div>
      </div>
      <img className="pic1" src={pic1} />
      <img className="pic2" src={pic2} />
    </div>
  );
}
