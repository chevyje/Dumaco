import "../styling/button.css";

function Button(title, triggerFunction, color, icon) {

    const Icon = "../../icons/" + icon + ".svg";

    return (
        <button
            className="btn"
            onClick={triggerFunction}
            style={{ backgroundColor: color }}
        >
            {icon && <img className="btn-icon" src={Icon} alt={"button"}></img>}
            {title}
        </button>
        )
}

export default Button;