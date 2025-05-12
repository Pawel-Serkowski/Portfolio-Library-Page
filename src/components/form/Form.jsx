import { useState } from "react";

import "./Form.css";
import Input from "./Input";
import Button from "../button/Button";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ name, email, message });
    };

    return (
        <form className="customForm" onSubmit={handleSubmit}>
            <h2>Contact form</h2>
            <Input inputId="name" inputTitle="Your name and surname" value={name} setValue={setName} type="text" />
            <Input inputId="email" inputTitle="Your email" value={email} setValue={setEmail} type="email" />
            <Input inputId="message" inputTitle="Your message" value={message} setValue={setMessage} />
            <Button text="Submit" color="dark" />
        </form>
    );
};

export default Form;
