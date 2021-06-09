import { useState, useCallback } from 'react';

import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import {
  cardsOperations,
  cardsSelectors,
} from '../../redux/cards';

import s from './TodoCard.module.css';
import sprite from '../../sprite.svg';
import DataTimeChelengeModal from '../DataTimeChelengeModal';
import DifficultLevelModal from '../DifficultLevelModal';

export default function CustomSelect() {
  const dispatch = useDispatch();

  // Состояние выпадающего окна для выбора level
  // eslint-disable-next-line
  const [isActive, setIsActive] = useState(false);

  // Типы level: Easy, Normal, Hard
  // eslint-disable-next-line
  const [level, setLevel] = useState('Normal');

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
  const [timer, setTime] = useState('00:00');

  // Дата окончания
  // eslint-disable-next-line
  const [finishDate, setFinichDate] = useState('');

  //Группы: STUFF, FAMILY, HEALTH, LEARNING, LEISURE, WORK
  const [group, setGroup] = useState({
    name: 'STUFF',
    color: '#B9C3C8',
  });

  // Состояние выпадающего окна для выбора group
  // eslint-disable-next-line
  const [isGroupActive, setIsGroupActive] = useState(false);

  const groups = [
    { name: 'STUFF', color: '#B9C3C8' },
    { name: 'FAMILY', color: '#FFE6D3' },
    { name: 'HEALTH', color: '#CDF7FF' },
    { name: 'LEARNING', color: '#FFF6C0' },
    { name: 'LEISURE', color: '#F8D2FF' },
    { name: 'WORK', color: '#D3F6CE' },
  ];

  const handleChangeInpute = e => {
    setWhatToDo(e.target.value);
  };
  const onSubmit = useCallback(
    ({ title, difficulty, category, date, time, type }) =>
      dispatch(
        cardsOperations.addCards({
          title,
          difficulty,
          category,
          date,
          time,
          type,
        }),
      ),
    [dispatch],
  );
  console.log(group.name);

  // if (finishDate !== '' && timer !== '') {
  // const duplicate = contacts.filter(
  //   contact => contact.name === event.target.elements[0].value,
  // );

  const card = {
    title: whatToDo,
    difficulty: level,
    category: group.name,
    date: finishDate,
    time: timer,
    type: 'Challenge',
  };

  // return;
  // }
  const onReadyClick = function (params) {
    setStatus('done');
    console.log(
      '🚀 ~ file: TodoCard.js ~ line 97 ~ CustomSelect ~ card',
      card,
    );

    onSubmit(card);
  };

  return (
    <div
      className={
        !isChallengeStarted
          ? `${s.todoCard}`
          : `${s.todoCard} ${s.dark}`
      }
    >
      <div className={s.mainCardContainer}>
        {/* Иконки кубка и звезды */}
        <div className={s.TopContainer}>
          <DifficultLevelModal difficultlevel={setLevel} />
          {isChallengeStarted ? (
            <svg className={s.starCupIcon}>
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
        </div>
        {/* Надпись CHALLENGE, EDIT CHALLENGE, CREATE NEW QUEST или EDIT QUEST */}
        <div className={s.operationContainer}>
          {status === 'create' && isChallengeStarted ? (
            <p className={s.operation}>CREATE NEW QUEST</p>
          ) : null}
          {status === 'edit' && !isChallengeStarted ? (
            <p className={s.operation}>EDIT QUEST</p>
          ) : null}
          {isChallengeStarted && status !== 'edit' ? (
            <p className={s.operation}>CHALLENGE</p>
          ) : null}
          {isChallengeStarted && status === 'edit' ? (
            <p className={s.operation}>EDIT CHALLENGE</p>
          ) : null}
          {status === 'done' || status === 'ready' ? (
            <p className={`${s.operation} ${s.hidden}`}>
              HIDDEN
            </p>
          ) : null}
        </div>
        {/* Инпут или наименование карточки */}
        {status === 'create' || status === 'edit' ? (
          <input
            className={`${s.whatToDo} ${s.inline}`}
            name="todo"
            type="text"
            value={whatToDo}
            onChange={handleChangeInpute}
          />
        ) : (
          <p
            className={`${s.whatToDo} ${
              isChallengeStarted && s.white
            }`}
          >
            {whatToDo}
          </p>
        )}
        {/* Дата и время */}
        <DataTimeChelengeModal
          setTime={setTime}
          setFinichDate={setFinichDate}
        />

        <div className={s.bottomContainer}>
          {/* Группы карточек */}
          {isGroupActive ? (
            <div onClick={() => setIsGroupActive(false)}>
              <ul className={s.groupList}>
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
              className={s.selectedGroupContainer}
              onClick={() => setIsGroupActive(true)}
              style={{ backgroundColor: group.color }}
            >
              <p className={s.selectedGroup}>
                {group.name}
              </p>
            </div>
          )}

          {/* Иконки save, clear, done и кнопка START*/}

          <div className={s.saveClearDoneStartContainer}>
            {status === 'edit' && (
              <>
                <svg
                  className={`${s.saveClearDoneIcon} ${s.saveIcon}`}
                  alt="diskette save"
                  onClick={onReadyClick}
                >
                  <use
                    href={`${sprite}#diskette-save`}
                  ></use>
                </svg>
                <svg
                  className={`${s.saveClearDoneIcon} ${s.clearIcon}`}
                  alt="cross red"
                >
                  <use
                    href={`${sprite}#cross-red-clear`}
                  ></use>
                </svg>
                <svg
                  className={`${s.saveClearDoneIcon} ${s.doneIcon}`}
                  alt="check mark"
                  onClick={() => setStatus('done')}
                >
                  <use href={`${sprite}#check-mark`}></use>
                </svg>
              </>
            )}
            {status === 'create' && (
              <>
                <svg
                  className={`${s.saveClearDoneIcon} ${s.clearIcon}`}
                  alt="cross red"
                >
                  <use
                    href={`${sprite}#cross-red-clear`}
                  ></use>
                </svg>
                <div className={s.startButton}>START</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
