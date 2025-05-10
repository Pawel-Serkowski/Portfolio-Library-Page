import "./Button.css";

const Button = ({ link, text, color }) => {
    return (
        <div className="buttonBox">
            <a href={link} className={`customButton ${color ? color : "light"}`}>
                {text}
            </a>
        </div>
    );
};

export default Button;
