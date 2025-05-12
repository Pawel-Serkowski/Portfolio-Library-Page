import "./Button.css";

const Button = ({ link, text, color, isLink = false }) => {
    return (
        <div className="buttonBox">
            {isLink && (
                <a href={link} className={`customButton ${color ? color : "light"}`}>
                    {text}
                </a>
            )}
            {!isLink && <button className={`customButton ${color ? color : "light"}`}>{text}</button>}
        </div>
    );
};

export default Button;
