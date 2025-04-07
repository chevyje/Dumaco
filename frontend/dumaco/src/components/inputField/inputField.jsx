import Style from  "./inputField.module.css";

const InputField = ({title, placeholder, defaultText, fieldId, isLocked}) => {
    return (
        <div className={Style.inputFieldContainer}>
            <div className={Style.formContainer}>
                <form>
                    <div className={Style.inputFieldItem}>
                        <label htmlFor={fieldId}>{title}</label>
                        <input type="text" id={fieldId} name={title} placeholder={placeholder} defaultValue={defaultText} disabled={isLocked} className={isLocked ? "locked" : ""}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InputField;
