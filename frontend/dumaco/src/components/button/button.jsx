import Style from "./button.module.css";

function Button({
                    title,
                    triggerFunction,
                    color,
                    icon,
                    textColor,
                    borderColor,
                    className,
                    doHover,
                    hoverColor,
                    hoverTextColor,
                    hoverChangeIcon,
                }) {

    const style = {
        '--btn-bg': color,
        '--btn-text': textColor || '#FFFFFF',
        '--btn-border': borderColor || '#FFFFFF',
        '--btn-bg-hover': hoverColor || color,
        '--btn-text-hover': hoverTextColor || textColor || '#FFFFFF',
    };

    return (
        <div>
            <button
                type="button"
                className={`${Style.btn} ${doHover ? Style.hoverable : ''} ${className}`}
                onClick={triggerFunction}
                style={style}
            >
                {icon && (
                    <span className={Style.iconWrapper}>
                        <img className={`${Style.btnIcon} ${Style.defaultIcon}`} src={`../../../icons/${icon}.svg`} alt="button" />
                        {hoverChangeIcon && (
                            <img className={`${Style.btnIcon} ${Style.hoverIcon}`} src={`../../../icons/${hoverChangeIcon}.svg`} alt="hover" />
                        )}
                    </span>
                )}
                {title}
            </button>
        </div>
    );
}

export default Button;
