import '../styling/dropdown.css'
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        dropdown
      </button>
      {isOpen && (
        <ul className="menu">
          <li className="menu-item">menu 1</li>
          <li className="menu-item">menu 2</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

