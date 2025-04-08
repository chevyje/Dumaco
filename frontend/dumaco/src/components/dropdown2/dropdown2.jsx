import React, { useState } from 'react';
import Style from './dropdown2.module.css';

function Dropdown2({ title, options, useIcons }) {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleOptionClick = (optionValue) => {
        setSelectedOption(optionValue);
    };

    const selected = options.find(option => option.value === selectedOption);

    return (
        <>
            {title && <label htmlFor="dropdown" className={Style.dropdownLabel}>{title}</label>}
            <div className={Style.dropdownContainer}>
                <div className={Style.selectedOption}>
                    {useIcons && selected?.icon && (
                        <img
                            src={`/icons/${selected.icon}.svg`}
                            alt={selected.icon}
                            className={Style.icon}
                        />
                    )}
                    {selected?.label || selectedOption}
                    <img src={`/icons/chevron-down.svg`} alt={"chevron-down"} className={Style.chevronDown} />
                </div>
                <div className={Style.dropdownOptions}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={Style.option}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {useIcons && option.icon && (
                                <img
                                    src={`/icons/${option.icon}.svg`}
                                    alt={option.icon}
                                    className={Style.icon}
                                />
                            )}
                            {option.label || option.value}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dropdown2;
