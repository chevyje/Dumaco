import Style from "./button.module.css";

function Button({title, triggerFunction, color, icon, textColor, borderColor}) {

    const Icon = "../../../icons/" + icon + ".svg";

    return (
        <div>
            <button
                type="button"
                className={Style.btn}
                onClick={triggerFunction}
                style={{
                    backgroundColor: color,
                    color: textColor ? textColor : "#FFFFFF",
                    border: `1px solid ${borderColor ? borderColor : "#FFFFFF"}`
                }}
            >
                {icon && <img className={Style.btnIcon} src={Icon} alt={"button"}></img>}
                {title}
            </button>
        </div>
        )
}

export default Button;