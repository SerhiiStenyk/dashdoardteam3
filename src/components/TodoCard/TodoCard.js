import React, { useState } from 'react';
import s from './TodoCard.module.scss';
import sprite from '../../sprite.svg';
import DifficultLevelModal from '../DifficultLevelModal/DifficultLevelModal';
import DataTimeChelengeModal from '../DataTimeChelengeModal/DataTimeChelengeModal';
import DataTimeModal from '../DataTimeModal/DataTimeModal';

export default function CustomSelect() {
  // Состояние выпадающего окна для выбора level
  // eslint-disable-next-line
  const [isActive, setIsActive] = useState(false);

  // Типы level: Easy, Normal, Hard
  // eslint-disable-next-line
  const [difficulty, setDifficulty] = useState(' Normal ');

  // Основное состояние карточки: create, edit, incomplete, done
  const [status, setStatus] = useState('incomplete');

  // Начат chelenge или нет, для изменения фона карточки, звездочка или кубок, и надписи CHALLENGE
  const [isChallengeStarted, setIsChallengeStarted] =
    useState(true);

  // Для внесения (изменения) и отрисовки наименования тудушки
  const [title, setTitle] = useState('Do some thing');

  // Дата начала
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState('');

  // Дата окончания
  // eslint-disable-next-line
  const [finishDate, setFinishDate] = useState('');

  //Группы: STUFF, FAMILY, HEALTH, LEARNING, LEISURE, WORK
  const [category, setCategory] = useState({
    name: 'STUFF',
    color: '#B9C3C8',
  });

  // Состояние выпадающего окна для выбора category
  const [isCategoryActive, setIsCategoryActive] =
    useState(false);

  const categories = [
    { name: 'stuff', color: '#B9C3C8' },
    { name: 'famely', color: '#FFE6D3' },
    { name: 'health', color: '#CDF7FF' },
    { name: 'learning', color: '#FFF6C0' },
    { name: 'leisure', color: '#F8D2FF' },
    { name: 'work', color: '#D3F6CE' },
  ];

  // Внесение значений инпута в стэйт
  const handleChangeInpute = e => {
    setTitle(e.target.value);
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

  // Сделать элемент доступным к редактированию,
  // если карточка находится в сост. 'edit' или 'create'
  const changeState = (func, arg) => {
    if (status === 'edit' || status === 'create') {
      func(arg);
    }
  };

  // ----------------------------------------------------
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
          {' '}
          {/* Иконки кубка и звезды */}
          <div className={s.levelStarCupContainer}>
            <DifficultLevelModal />
            {isChallengeStarted ? (
              <svg className={s.starCupIcon}>
                <use
                  href={`${sprite}#cup-blue`}
                  onClick={() =>
                    setIsChallengeStarted(
                      !isChallengeStarted,
                    )
                  }
                ></use>
              </svg>
            ) : (
              <svg className={s.starCupIcon}>
                <use
                  href={`${sprite}#star-blue`}
                  onClick={() =>
                    setIsChallengeStarted(
                      !isChallengeStarted,
                    )
                  }
                ></use>
              </svg>
            )}
          </div>
          {/* Надпись CHALLENGE, EDIT CHALLENGE, CREATE NEW QUEST или EDIT QUEST */}
          <div className={s.operationContainer}>
            {status === 'create' ? (
              <p className={s.operation}>
                CREATE NEW QUEST
              </p>
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
            {status === 'done' ||
            status === 'incomplete' ? (
              <br
                className={`${s.operation} ${s.hidden}`}
              ></br>
            ) : null}
          </div>
          {/* Инпут или наименование карточки */}
          {status === 'create' || status === 'edit' ? (
            <input
              className={`${s.title} ${s.inline}`}
              name="todo"
              type="text"
              value={title}
              onChange={handleChangeInpute}
            />
          ) : (
            <p
              className={`${s.title} ${
                isChallengeStarted && s.white
              }`}
            >
              {title}
            </p>
          )}
          {/* Дата и время */}
          {isChallengeStarted ? (
            <DataTimeChelengeModal />
          ) : (
            <DataTimeModal />
          )}
        </div>

        <div className={s.bottomContainer}>
          {/* Группы карточек */}
          {isCategoryActive ? (
            <div
              className={s.categoryContainer}
              onClick={() =>
                setIsCategoryActive(!isCategoryActive)
              }
            >
              <ul className={s.categoryList}>
                {categories.map(item => (
                  <li
                    key={item.name}
                    onClick={() => setCategory(item)}
                  >
                    {item.name.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div
            className={`${s.selectedCategoryContainer} ${
              isCategoryActive && s.hidden
            }`}
            onClick={() =>
              changeState(
                setIsCategoryActive,
                !isCategoryActive,
              )
            }
            style={{ backgroundColor: category.color }}
          >
            <p className={s.selectedCategory}>
              {category.name.toUpperCase()}
            </p>
          </div>
          {/* Иконки save, clear, done и кнопка START*/}
          <div className={s.saveClearDoneStartContainer}>
            {status === 'edit' && (
              <>
                <svg
                  className={`${s.saveClearDoneIcon} ${s.saveIcon}`}
                  onClick={() => setStatus('incomplete')}
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
                <div
                  className={s.startButton}
                  onClick={() => setStatus('incomplete')}
                >
                  START
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
