import "./button.css";

function Button({title, triggerFunction, color, icon}) {

    const Icon = "../../../icons/" + icon + ".svg";

    console.log(Icon);

    return (
        <div className={"button-container"}>
            <button
                type="button"
                className="btn"
                onClick={triggerFunction}
                style={{ backgroundColor: color }}
            >
                {icon && <img className="btn-icon" src={Icon} alt={"button"}></img>}
                {title}
            </button>
        </div>
        )
}

export default Button;