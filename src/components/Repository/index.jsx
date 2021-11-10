import { faCodeBranch, faHistory } from '@fortawesome/free-solid-svg-icons';
import { faFileCode, faEye, faDotCircle, faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Commits } from '..';
import './style.css';

export const Repository = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { name, commits_url, forks, language, stargazers_count, open_issues, watchers } = data

    const toggleExpand = () => setIsExpanded(prevState => !prevState)

    return (
        <div className={`repo-container${isExpanded ? ' expanded' : ''}`}>
            <h1 onClick={toggleExpand}>{name}</h1>
            <ul className={`repodata-container ${isExpanded ? "show" : "hide"}`}>
                <li>
                    <FontAwesomeIcon className="icon" icon={faHistory} />
                    <Commits url={commits_url} />
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faCodeBranch} />
                    {forks}
                </li>
                {language &&
                    <li>
                        <FontAwesomeIcon className="icon" icon={faFileCode} />
                        {language}
                    </li>}
                <li>
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    {stargazers_count}
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faDotCircle} />
                    {open_issues}
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faEye} />
                    {watchers}
                </li>
            </ul>
        </div>
    )
}