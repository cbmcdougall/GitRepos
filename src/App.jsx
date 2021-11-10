import React, { useState } from "react";
import { Repositories } from "./components";

export const App = () => {
    const [formData, setFormData] = useState("");
    const [username, setUsername] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInput = e => {
        setFormData(e.target.value)
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(formData);
        setIsSubmitted(true);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="username" id="username" onChange={handleInput} value={formData} />
                <button type="submit">Submit</button>
            </form>
            {isSubmitted && <Repositories username={username} />}
        </>
    )
}