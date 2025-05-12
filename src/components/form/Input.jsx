import "./Input.css";

const Input = ({ inputId, inputTitle, type, setValue, value }) => {
    return (
        <p className="customInput">
            <label htmlFor={inputId}>{inputTitle}</label>
            {type == "text" && <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required />}
            {type == "email" && <input type="email" value={value} onChange={(e) => setValue(e.target.value)} required />}
            {type != "text" && type != "email" && <textarea value={value} onChange={(e) => setValue(e.target.value)} required />}
        </p>
    );
};

export default Input;
