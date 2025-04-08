import Style from './dropdown2.module.css';

function Dropdown2({ title, options }) {
    return (
        <>
        {title && <label htmlFor="dropdown" className={Style.dropdownLabel}>{title}</label>}
            <select name={title} className={Style.dropdownSelect}>
                {options.map((option, index) => (
                    <option key={index} value={option.value} className={"option"}>
                        {option.label || option.value}
                    </option>
                ))}
            </select>
        </>
    );
}


export default Dropdown2;