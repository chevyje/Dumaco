import './dropdown.css';
import React, { useState } from 'react';

const Dropdown = ({ title = "Dropdown", options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {title}
      </button>
      {isOpen && (
        <ul className="menu">
          {options && options.length > 0 ? (
            options.map((option, index) => (
              <li key={index} className="menu-item">{option}</li>
            ))
          ) : (
            <li className="menu-item">Geen opties beschikbaar</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
