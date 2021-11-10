import React, { useState } from 'react';
import { Commits } from '..';
import './style.css';

export const Repository = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { name, commits_url, forks, language, stargazers_count, open_issues, watchers } = data

    const toggleExpand = () => setIsExpanded(prevState => !prevState)

    return (
        <div className={isExpanded ? 'container expanded' : 'container'}>
            <h1 onClick={toggleExpand}>{name}</h1>
            <ul className={isExpanded ? "show" : "hide"}>
                <li><Commits url={commits_url} /></li>
                <li>forks: {forks}</li>
                {language && <li>main language: {language}</li>}
                <li>stars: {stargazers_count}</li>
                <li>open issues: {open_issues}</li>
                <li>watchers: {watchers}</li>
            </ul>
        </div>
    )
}