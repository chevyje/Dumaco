import "../styling/inputField.css";

const InputField = ({title, placeholder, defaultText, fieldId, isLocked}) => {
    return (
        <div className="inputField-container">
            <div className="form-container">
                <form>
                    <div className="inputField-item">
                        <label htmlFor={fieldId}>{title}</label>
                        <input type="text" id={fieldId} name={title} placeholder={placeholder} defaultValue={defaultText} disabled={isLocked} className={isLocked ? "locked" : ""}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InputField;
