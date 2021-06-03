import React, { useState } from 'react';

export default function CustomSelect({ value }) {
  const [isActive, setIsActive] = useState(false);

  const [level, setLevel] = useState('');

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-input"
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`dropdown-round ${value.color}`}
        ></div>
        {value.label}
        <div className="dropdown-placeholder">
          <div className={'dropdown-round green'}></div>
          {level || 'Normal'}
        </div>
        <span className="arrow-down"></span>
      </div>
      <div
        className={
          isActive
            ? 'dropdown-options active '
            : 'dropdown-options'
        }
      >
        {value.map(item => (
          <div
            className="dropdown-item"
            key={item.id}
            onClick={() => setLevel(item.label)}
          >
            <div
              className={`dropdown-round ${item.color}`}
            ></div>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
