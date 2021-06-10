import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import sprite from '../../sprite.svg';
import s from './DoneBtn.module.css';
import DoneList from './DoneList';
import Container from '../Container/Container';
import axios from 'axios';

// import cards from './example.json';

// надо изменить на глобальную переменную где будет лежать токен авторизации
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJkZmU4MzhiYjU0ZjZmMTVhYjU3ZjAiLCJzaWQiOiI2MGMyNDMyMzhiYjU0ZjZmMTVhYjU5N2EiLCJpYXQiOjE2MjMzNDM5MDcsImV4cCI6MTYyMzM0NzUwN30.h8D47iwlnQh4w7cxmhSB4tT2V2DvP9ZbZj3Gd2nDmOE';
const url = 'https://questify-backend.goit.global/card';

export default function DoneBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => setCards(data.cards))
      .catch(err => console.log(err));
  }, []);

  return (
    // <div className={s.container}>

    <Container>
      <div className={s.head}>
        <button
          className={s.button}
          type="button"
          onClick={toggling}
        >
          DONE
          <svg className={s.icon}>
            {isOpen ? (
              <use href={sprite + '#arrow-down'}></use>
            ) : (
              <use href={sprite + '#arrow-up'}></use>
            )}
          </svg>
        </button>
        <span className={s.dashed}></span>
      </div>
      {isOpen && <DoneList cards={cards} />}
    </Container>

    // </div>
  );
}

// Done.propTypes = {

// };
