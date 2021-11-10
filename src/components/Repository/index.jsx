import React, { useState } from 'react';
import { Commits } from '..';

export const Repository = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { name, commits_url, forks, language, stargazers_count, open_issues, watchers } = data

    const toggleExpand = () => setIsExpanded(prevState => !prevState)

    return (
        <div className={isExpanded ? 'container expanded' : 'container'}>
            <h1 onClick={toggleExpand}>{name}</h1>
            {isExpanded && <ul>
                <li><Commits url={commits_url} /></li>
                <li>{forks}</li>
                {language && <li>{language}</li>}
                <li>{stargazers_count}</li>
                <li>{open_issues}</li>
                <li>{watchers}</li>
            </ul>}
        </div>
    )
}
