import React, { useState } from 'react';
import './DifficultLevelModal.scss';

export default function DifficultLevelModal({
  difficultlevel,
  changeState,
}) {
  const [isActive, setIsActive] = useState(false);

  const [level, setLevel] = useState({
    id: 1,
    level: 'Normal',
    color: 'green',
  });

  difficultlevel(level.level);

  const levels = [
    {
      id: 0,
      level: 'Easy',
      color: 'teal',
    },
    {
      id: 1,
      level: 'Normal',
      color: 'green',
    },
    {
      id: 2,
      level: 'Hard',
      color: 'red',
    },
  ];

  const onChoiseLevel = function (value) {
    setLevel(value);
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-input"
        onClick={() => changeState(setIsActive, !isActive)}
      >
        <div className="dropdown-placeholder">
          <div
            className={`dropdown-round ${level.color}`}
          ></div>
          {level.level}
        </div>
        <span className="arrow-down"></span>
      </div>
      <div
        className={
          isActive
            ? 'dropdown-options dropdown-active '
            : 'dropdown-options'
        }
      >
        {levels.map(item => (
          <div
            className="dropdown-item"
            key={item.id}
            onClick={() => changeState(onChoiseLevel, item)}
          >
            <div
              className={`dropdown-round ${item.color}`}
            ></div>
            {item.level}
          </div>
        ))}
      </div>
    </div>
  );
}
