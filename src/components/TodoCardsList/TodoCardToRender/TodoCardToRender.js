import React, { useState, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  cardsOperations,
  cardsSelectors,
} from '../../../redux/cards';

import sprite from '../../../sprite.svg';
import DifficultLevelModal from '../../DifficultLevelModal/DifficultLevelModal';

import s from './TodoCardToRender.module.scss';

export default function TodoCardToRender(props) {
  const dispatch = useDispatch();

  // Состояние выпадающего окна для выбора level
  // eslint-disable-next-line
  const [isActive, setIsActive] = useState(false);

  // Типы level: Easy, Normal, Hard
  // eslint-disable-next-line
  const [difficulty, setDifficulty] = useState('Normal');

  // Основное состояние карточки: create, edit, incomplete, done
  const [status, setStatus] = useState('incomplete');

  // Начат chelenge или нет, для изменения фона карточки, звездочка или кубок, и надписи CHALLENGE
  const [isChallengeStarted, setIsChallengeStarted] =
    useState(false);

  const [type, setType] = useState('Challenge');

  // Для внесения (изменения) и отрисовки наименования тудушки
  const [title, setTitle] = useState(
    props.title || 'Do some thing',
  );

  // Дата начала
  // eslint-disable-next-line

  // Дата окончания
  // eslint-disable-next-line
  const [finishDate, setFinishDate] = useState(new Date());
  const [timer, setTime] = useState(props.time || '00:00');

  //Группы: STUFF, FAMILY, HEALTH, LEARNING, LEISURE, WORK
  const [category, setCategory] = useState({
    name: props.category || 'Stuff',
    color: '#B9C3C8',
  });

  // Состояние выпадающего окна для выбора category
  const [isCategoryActive, setIsCategoryActive] =
    useState(false);

  //   const categories = [
  //     { name: 'Stuff', color: '#B9C3C8' },
  //     { name: 'Family', color: '#FFE6D3' },
  //     { name: 'Health', color: '#CDF7FF' },
  //     { name: 'Learning', color: '#FFF6C0' },
  //     { name: 'Leisure', color: '#F8D2FF' },
  //     { name: 'Work', color: '#D3F6CE' },
  //   ];
  // Внесение значений инпута в стэйт
  //   const handleChangeInpute = e => {
  //     setTitle(e.target.value);
  //   };
  const onSetTypeOfTastOrChallenge = function () {
    setIsChallengeStarted(!isChallengeStarted);

    setType(
      (isChallengeStarted && 'Task') ||
        (!isChallengeStarted && 'Chalenge'),
    );
  };

  // Начать редактировать карточку при клике на нее
  const handleEdit = e => {
    if (status !== 'incomplete') {
      return;
    }
    if (e.target.getAttribute('class') === s.starCupIcon) {
      return;
    }
    setStatus('edit');
  };

  const onReadyClick = function () {
    // setStatus('done');
    setStatus('incomplete');
  };

  // Сделать элемент доступным к редактированию,
  // если карточка находится в сост. 'edit' или 'create'
  const changeState = (func, arg) => {
    if (status === 'edit' || status === 'create') {
      func(arg);
    }
  };

  return (
    <div
      className={
        !isChallengeStarted
          ? s.todoCard
          : `${s.todoCard} ${s.dark}`
      }
      onClick={handleEdit}
    >
      <div className={s.mainCardContainer}>
        <div className={s.topContainer}>
          {/* Иконки кубка и звезды */}
          <div className={s.levelStarCupContainer}>
            <div className={s.placeholder}>
              <div
                className={`dropdown-round ${
                  //   (props.difficulty === 'Easy' && s.teal) ||
                  props.difficulty === 'Normal'
                    ? s.green
                    : s.red
                }`}
              ></div>
              {props.difficulty}
            </div>
            {isChallengeStarted ? (
              <svg className={s.starCupIcon}>
                <use
                  href={`${sprite}#cup-blue`}
                  onClick={onSetTypeOfTastOrChallenge}
                ></use>
              </svg>
            ) : (
              <svg className={s.starCupIcon}>
                <use
                  href={`${sprite}#star-blue`}
                  onClick={onSetTypeOfTastOrChallenge}
                ></use>
              </svg>
            )}
          </div>
          {/* Надпись CHALLENGE, EDIT CHALLENGE, CREATE NEW QUEST или EDIT QUEST */}
          <div className={s.operationContainer}></div>

          {/* Инпут или наименование карточки */}
          <p
            className={`${s.title} ${
              isChallengeStarted && s.white
            }`}
          >
            {props.title}
          </p>
          <p className={s.data}>Today, {props.time}</p>
        </div>

        <div className={s.bottomContainer}>
          {/* Группы карточек */}

          <div className={`${s.selectedCategoryContainer}`}>
            <p className={s.selectedCategory}>
              {props.category.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
