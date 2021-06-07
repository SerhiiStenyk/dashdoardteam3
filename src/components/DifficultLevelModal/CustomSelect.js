import React, { useState } from 'react';

export default function CustomSelect({ options }) {
  const [isActive, setIsActive] = useState(false);

  const [level, setLevel] = useState({
    id: 1,
    level: 'Normal',
    color: 'green',
  });

  const onChoiseLevel = function (value) {
    setLevel(value);
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-input"
        onClick={() => setIsActive(!isActive)}
      >
        {/* <div
          className={`dropdown-round ${options.color}`}
        ></div> */}
        {/* {options.label} */}
        <div className="dropdown-placeholder">
          <div
            className={`dropdown-round ${level.color}`}
          ></div>
          {/* {level.level === 'Easy' && (
            <div
              className={`dropdown-round ${level.color}`}
            ></div>
          )}
          {level.level === 'Hard' && (
            <div
              className={`dropdown-round ${level.color}`}
            ></div>
          )}
          {level.level === 'Normal' && (
            <div
              className={`dropdown-round ${level.color}`}
            ></div>
          )} */}
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
        {options.map(item => (
          <div
            className="dropdown-item"
            key={item.id}
            onClick={() => onChoiseLevel(item)}
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
