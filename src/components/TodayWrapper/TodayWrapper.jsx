// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  cardsOperations,
  cardsSelectors,
} from '../../redux/cards';
// import PropTypes from 'prop-types';
import s from './TodayWrapper.module.css';
// import axios from 'axios';
import TodoCard from '../TodoCard/TodoCard';
// import TodoCardToRender from '../../TodoCardToRender/TodoCardToRender';

// надо изменить на глобальную переменную где будет лежать токен авторизации
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJlNzUxNDhiYjU0ZjZmMTVhYjU4MmQiLCJzaWQiOiI2MGMzMWFmNjhiYjU0ZjZmMTVhYjU5YmMiLCJpYXQiOjE2MjMzOTkxNTgsImV4cCI6MTYyMzQwMjc1OH0.B7p9cz1Jb34AHWGFIIJjJchM5HrAs9CJzcGX5AoawsQ';
// const url = 'https://questify-backend.goit.global/card';

export default function TodayWrapper() {
  const dispatch = useDispatch();
  // const [cards, setCards] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get(url, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then(({ data }) => setCards(data.cards))
  //       .catch(err => console.log(err));
  //   }, []);
  const cards = useSelector(cardsSelectors.getCards);
  console.log(
    '🚀 ~ file: TodoCardsList.js ~ line 20 ~ ContactList ~ cards',
    cards.cards,
  );

  const today = new Date();
  const dateToCompar = `${today.getFullYear()}-${
    today.getMonth() < 9
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1
  }-${
    today.getDate() < 10
      ? `0${today.getDate()}`
      : today.getDate()
  }`;

  const filteredCards = cards.cards.filter(
    ({ status, date }) =>
      status !== 'Complete' && date === dateToCompar,
  );
  console.log(filteredCards);

  return (
    <div className={s.container}>
      <h2 className={s.dayTitle}>TODAY</h2>

      <ul className={s.list}>
        {filteredCards.map(
          ({
            difficulty,
            title,
            date,
            time,
            category,
            status,
            type,
            _id,
          }) => (
            <TodoCard
              key={_id}
              id={_id}
              category={category}
              date={date}
              difficulty={difficulty}
              status={status}
              time={time}
              title={title}
              type={type}
            />
            // <TodoCardToRender
            //   key={_id}
            //   id={_id}
            //   category={category}
            //   date={date}
            //   difficulty={difficulty}
            //   status={status}
            //   time={time}
            //   title={title}
            //   type={type}
            // />

            // <li key={_id}>
            //   <ul>
            //     <li>{title}</li>
            //     <li>{category}</li>
            //     <li>{difficulty}</li>
            //     <li>
            //       {date}, {time}
            //     </li>
            //   </ul>
            // </li>
          ),
        )}
      </ul>
    </div>
  );
}
