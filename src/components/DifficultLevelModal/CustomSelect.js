import React, { useState } from 'react';

export default function CustomSelect({ options }) {
  const [isActive, setIsActive] = useState(true);

  const [level, setLevel] = useState(' Normal ');

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
        <div
          className={`dropdown-round ${options.color}`}
        ></div>
        {options.label}
        <div className="dropdown-placeholder">
          {level === 'Easy' && (
            <div className={'dropdown-round teal'}></div>
          )}
          {level === 'Hard' && (
            <div className={'dropdown-round red'}></div>
          )}
          {level === 'Normal' && (
            <div className={'dropdown-round green'}></div>
          )}
          {level}
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
            onClick={() => onChoiseLevel(item.level)}
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
