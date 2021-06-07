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
  const [finishDate, setFinishDate] = useState('');

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
  return (
    <div
      className={
        !isChallengeStarted
          ? `${s.todoCard}`
          : `${s.todoCard} ${s.dark}`
      }
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
                    setIsChallengeStarted(false)
                  }
                ></use>
              </svg>
            ) : (
              <svg
                className={s.starCupIcon}
                alt="star blue"
              >
                <use
                  href={`${sprite}#star-blue`}
                  onClick={() =>
                    setIsChallengeStarted(true)
                  }
                ></use>
              </svg>
            )}
          </div>
          {/* Надпись CHALLENGE, EDIT CHALLENGE, CREATE NEW QUEST или EDIT QUEST */}
          <div className={s.operationContainer}>
            {status === 'create' && isChallengeStarted ? (
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
            {status === 'done' || status === 'ready' ? (
              <br
                className={`${s.operation} ${s.hidden}`}
              ></br>
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
          {isChallengeStarted ? (
            <DataTimeChelengeModal />
          ) : (
            <DataTimeModal />
          )}
        </div>

        <div className={s.bottomContainer}>
          {/* Группы карточек */}
          {isGroupActive ? (
            <div
              className={s.groupContainer}
              onClick={() => setIsGroupActive(false)}
            >
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
                  onClick={() => setStatus('ready')}
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
