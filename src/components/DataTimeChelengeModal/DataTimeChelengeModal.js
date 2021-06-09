import { useState, useCallback } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import {
  cardsOperations,
  cardsSelectors,
} from '../../redux/cards';

import './DataTimeChelengeModal.scss';
import sprite from '../../sprite.svg';

const time = [
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30',
];

export default function DataTimeChelengeModal({
  setFinichDate,
  setTime,
}) {
  // const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [calendarValue, setCalendarValue] = useState('');
  const [timer, setTimer] = useState('00:00');
  setFinichDate(calendarValue);
  setTime(timer);

  const onCalendarInputChange = function (event) {
    setCalendarValue(event.target.value);
    setIsActive(!isActive);
    // if (calendarValue !== '' && timer !== '') {
    //   // const duplicate = contacts.filter(
    //   //   contact => contact.name === event.target.elements[0].value,
    //   // );
    //   const card = {
    //     title: 'Sergii todo2',
    //     difficulty: 'Easy',
    //     category: 'Stuff',
    //     date: calendarValue,
    //     time: timer,
    //     type: 'Task',
    //   };

    //   // onSubmit(card);
    //   return;
    // }
  };

  const onTimeclick = function (item) {
    setTimer(item);
    setIsActive(!isActive);
  };

  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ][dayOfWeek];
  }
  const DayOfWeek = getDayOfWeek(
    calendarValue || new Date(),
  );
  // console.log(DayOfWeek);
  // console.log(calendarValue);
  // const cards = useSelector(cardsSelectors.getCards);
  // console.log(
  //   '🚀 ~ file: DataTimeChelengeModal.js ~ line 106 ~ DataTimeChelengeModal ~ contacts',
  //   cards,
  // );

  // const onSubmit = useCallback(
  //   ({ title, difficulty, category, date, time, type }) =>
  //     dispatch(
  //       cardsOperations.addCards({
  //         title,
  //         difficulty,
  //         category,
  //         date,
  //         time,
  //         type,
  //       }),
  //     ),
  //   [dispatch],
  // );

  // axios.defaults.baseURL =
  //   'https://questify-backend.goit.global/';
  // axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJlNzUxNDhiYjU0ZjZmMTVhYjU4MmQiLCJzaWQiOiI2MGJmNTAwMDhiYjU0ZjZmMTVhYjU4NjQiLCJpYXQiOjE2MjMxNTA1OTIsImV4cCI6MTYyMzE1NDE5Mn0.2X7yf5I2z64LZ_dbUvwiWOn4L97-5rmd19g44BlpQxM`;

  // const token = {
  //   set(token) {
  //     axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJlNzUxNDhiYjU0ZjZmMTVhYjU4MmQiLCJzaWQiOiI2MGJmNTAwMDhiYjU0ZjZmMTVhYjU4NjQiLCJpYXQiOjE2MjMxNTA1OTIsImV4cCI6MTYyMzE1NDE5Mn0.2X7yf5I2z64LZ_dbUvwiWOn4L97-5rmd19g44BlpQxM`;
  //   },
  //   unset() {
  //     axios.defaults.headers.common.Authorization = '';
  //   },
  // };

  // const addCards = card => dispatch => {
  // const card = { card };
  // console.log(
  //   '🚀 ~ file: cards-operations.js ~ line 38 ~ card',
  //   card,
  // );

  // dispatch(addCardRequest());

  //   axios
  //     .post('/card', { ...card })
  //     .then(({ data }) => data)
  //     .catch(error => error.message);
  // };

  return (
    <>
      <div className="chelenge-timer-container">
        <div
          className="chelenge-timer-input"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="chelenge-timer-placeholder">
            <div>{DayOfWeek}, &nbsp;</div>
            <div>{timer}</div>
            <div>
              <svg className="chelenge-calendar-icon">
                <use href={sprite + '#calendar'}></use>
              </svg>
            </div>
          </div>
        </div>

        <div
          className={
            isActive
              ? 'chelenge-timer-options chelenge-timer-active'
              : 'chelenge-timer-options'
          }
        >
          <input
            className="chelenge-calendar-item-container"
            type="date"
            id="start"
            name="trip-start"
            draggable
            onChange={e => onCalendarInputChange(e)}
            value={calendarValue}
          />
          <div className="chelenge-timer-item-container">
            {time.map(item => (
              <div
                className="chelenge-timer-item"
                key={item}
                onClick={() => onTimeclick(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <button type="submit">Add contact</button>
        </div>
      </div>
    </>
  );
}
