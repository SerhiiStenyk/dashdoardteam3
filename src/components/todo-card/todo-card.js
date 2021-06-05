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
  const [status, setStatus] = useState('edit');

  // Начат chelenge или нет, для изменения фона карточки, звездочка или кубок, и надписи CHALLENGE
  const [isChallengeStarted, setIsChallengeStarted] =
    useState(true);

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
      {/* Иконки кубка и звезды */}
      {isChallengeStarted ? (
        <svg className={s.starCupIcon} alt="cup blue">
          <use
            href={`${sprite}#cup-blue`}
            onClick={() => setIsChallengeStarted(false)}
          ></use>
        </svg>
      ) : (
        <svg className={s.starCupIcon} alt="star blue">
          <use
            href={`${sprite}#star-blue`}
            onClick={() => setIsChallengeStarted(true)}
          ></use>
        </svg>
      )}
      {/* Надпись CHALLENGE, EDIT CHALLENGE, CREATE NEW QUEST или EDIT QUEST */}
      {status === 'create' && <p>CREATE NEW QUEST</p>}
      {status === 'edit' && !isChallengeStarted ? (
        <p>EDIT QUEST</p>
      ) : null}
      {isChallengeStarted && status !== 'edit' ? (
        <p>CHALLENGE</p>
      ) : null}
      {isChallengeStarted && status === 'edit' ? (
        <p>EDIT CHALLENGE</p>
      ) : null}
      {/* Инпут или наименование карточки */}
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
      {/* Группы карточек */}
      {isGroupActive ? (
        <div onClick={() => setIsGroupActive(false)}>
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
      ) : (
        <div
          onClick={() => setIsGroupActive(true)}
          style={{ backgroundColor: group.color }}
        >
          {group.name}
        </div>
      )}

      {/* Иконки save, clear, done и кнопка START*/}
      <div className={s.saveClearDoneCon}>
        <svg
          className={s.saveClearDoneIcon}
          alt="diskette save"
          onClick={() => setStatus('ready')}
        >
          <use href={`${sprite}#diskette-save`}></use>
        </svg>
        <svg
          className={s.saveClearDoneIcon}
          alt="cross red"
        >
          <use href={`${sprite}#cross-red-clear`}></use>
        </svg>
        <svg
          className={s.saveClearDoneIcon}
          alt="check mark"
          onClick={() => setStatus('done')}
        >
          <use href={`${sprite}#check-mark`}></use>
        </svg>
        <div>START</div>
      </div>
    </div>
  );
}
