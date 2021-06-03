import React, { useState } from 'react';

export default function CustomSelect({ value }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <div
          className={`dropdown-round ${value.color}`}
        ></div>
        {value.label}
        <div
          onClick={() => setIsActive(!isActive)}
          className="dropdown-placeholder"
        >
          <div className={`dropdown-round green`}></div>
          {value.label || 'Normal'}
        </div>
        <span
          onClick={() => setIsActive(!isActive)}
          className="arrow-down"
        ></span>
      </div>
      <div
        className={
          isActive
            ? 'dropdown-options active '
            : 'dropdown-options'
        }
      >
        {value.map(item => (
          <div className="dropdown-item" key={item.id}>
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
