import React, { useState } from "react";
import { Repositories } from "./components";

export const App = () => {
    const [username, setUsername] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInput = e => {
        setUsername(e.target.value)
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="username" id="username" onChange={handleInput} value={username} />
                <button type="submit">Submit</button>
            </form>
            {isSubmitted && <Repositories username={username} />}
        </>
    )
}

// https://api.github.com/users/USERNAME/repos

// name: "", commits_url: url, forks: #, language: "", stargazers_count: #, open_issues: #, watchers: #