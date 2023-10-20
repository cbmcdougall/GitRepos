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
                <li className="tooltip">
                    <FontAwesomeIcon className="icon" icon={faHistory} />
                    <Commits url={commits_url} />
                    <span className="tooltip-text">commits</span>
                </li>
                <li className="tooltip">
                    <FontAwesomeIcon className="icon" icon={faCodeBranch} />
                    {forks}
                    <span className="tooltip-text">forks</span>
                </li>
                {language &&
                    <li className="tooltip">
                        <FontAwesomeIcon className="icon" icon={faFileCode} />
                        {language}
                        <span className="tooltip-text">main language</span>
                    </li>}
                <li className="tooltip">
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    {stargazers_count}
                    <span className="tooltip-text">stars</span>
                </li>
                <li className="tooltip">
                    <FontAwesomeIcon className="icon" icon={faDotCircle} />
                    {open_issues}
                    <span className="tooltip-text">open issues</span>
                </li>
                <li className="tooltip">
                    <FontAwesomeIcon className="icon" icon={faEye} />
                    {watchers}
                    <span className="tooltip-text">watchers</span>
                </li>
            </ul>
        </div>
    )
}