import React, { useState } from 'react';
import s from './todo-card.module.css';
import sprite from '../../sprite.svg';

export default function CustomSelect() {
  // Состояние выпадающего окна для выбора level
  // eslint-disable-next-line
  const [isActive, setIsActive] = useState(false);

  // Типы level: Easy, Normal, Hard
  // eslint-disable-next-line
  const [level, setLevel] = useState(' Normal ');

  // Основное состояние карточки: create, edit, ready, done
  // eslint-disable-next-line
  const [status, setStatus] = useState('done');

  // Начат chelenge или нет, для изменения фона карточки, звездочка или кубок, и надписи CHALLENGE
  const [isChallengeStarted, setIsChallengeStarted] =
    useState(false);

  // Для внесения (изменения) и отрисовки наименования тудушки
  const [whatToDo, setWhatToDo] = useState('Do some thing');

  // Дата начала
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState('');

  // Дата окончания
  // eslint-disable-next-line
  const [finishDate, setFinichDate] = useState('');

  //Группы: STUFF, FAMILY, HEALTH, LEARNING, LEISURE, WORK
  const [group, setGroup] = useState({
    name: 'STUFF',
    color: 'red',
  });

  // Состояние выпадающего окна для выбора group
  // eslint-disable-next-line
  const [isGroupActive, setIsGroupActive] = useState(false);

  const groups = [
    { name: 'STUFF', color: 'red' },
    { name: 'FAMILY', color: 'blue' },
    { name: 'HEALTH', color: 'green' },
  ];

  const handleChangeInpute = e => {
    setWhatToDo(e.target.value);
  };
  return (
    <div
      className={
        !isChallengeStarted
          ? `${s.todoCard}`
          : `${s.todoCard} ${s.dark}`
      }
    >
      {isChallengeStarted ? (
        <svg alt="cup blue">
          <use
            href={`${sprite}#cup-blue`}
            onClick={() => setIsChallengeStarted(false)}
          ></use>
        </svg>
      ) : (
        <svg alt="star blue">
          <use
            href={`${sprite}#star-blue`}
            onClick={() => setIsChallengeStarted(true)}
          ></use>
        </svg>
      )}
      {isChallengeStarted && <p>CHALLENGE</p>}
      {status === 'create' || status === 'edit' ? (
        <input
          name="todo"
          type="text"
          value={whatToDo}
          onChange={handleChangeInpute}
        />
      ) : (
        <p className={isChallengeStarted && `${s.white}`}>
          {whatToDo}
        </p>
      )}
      <div style={{ backgroundColor: group.color }}>
        {group.name}
      </div>
      <div>
        <ul>
          {groups.map(item => (
            <li
              key={item.name}
              onClick={() => setGroup(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
