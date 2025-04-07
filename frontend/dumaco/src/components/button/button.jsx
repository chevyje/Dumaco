import Style from "./button.module.css";

function Button({title, triggerFunction, color, icon}) {

    const Icon = "../../../icons/" + icon + ".svg";

    console.log(Icon);

    return (
        <div>
            <button
                type="button"
                className={Style.btn}
                onClick={triggerFunction}
                style={{ backgroundColor: color }}
            >
                {icon && <img className={Style.btnIcon} src={Icon} alt={"button"}></img>}
                {title}
            </button>
        </div>
        )
}

export default Button;