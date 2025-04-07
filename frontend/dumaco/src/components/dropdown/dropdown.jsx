import Style from  './dropdown.module.css';
import React, { useState } from 'react';

const Dropdown = ({ title = "Dropdown", options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Style.dropdown}>
      <button onClick={toggleDropdown} className={Style.dropdownButton}>
        {title}
      </button>
      {isOpen && (
        <ul className={Style.menu}>
          {options && options.length > 0 ? (
            options.map((option, index) => (
              <li key={index} className={Style.menuItem}>{option}</li>
            ))
          ) : (
            <li className={Style.menuItem}>Geen opties beschikbaar</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
