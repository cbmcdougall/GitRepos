import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Repository } from '..';
import './style.css'

export const Repositories = ({ username }) => {
    const [repoData, setRepoData] = useState([]);

    useEffect(() => {
        let cancelRequest = false;
        const getRepos = async () => {
            const options = {
                headers: {
                    Accept: "application/vnd.github.v3+json"
                }
            }
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, options);
            // Mock data to prevent api limit rate
            // const data = [
            //     { name: "Test Repo", commits_url: "", forks: 2, language: "JavaScript", stargazers_count: 1, open_issues: 3, watchers: 5 },
            //     { name: "Test Repo", commits_url: "", forks: 2, language: "JavaScript", stargazers_count: 1, open_issues: 3, watchers: 5 },
            //     { name: "Test Repo", commits_url: "", forks: 2, language: "JavaScript", stargazers_count: 1, open_issues: 3, watchers: 5 },
            //     { name: "Test Repo", commits_url: "", forks: 2, language: "JavaScript", stargazers_count: 1, open_issues: 3, watchers: 5 },
            //     { name: "Test Repo", commits_url: "", forks: 2, language: "JavaScript", stargazers_count: 1, open_issues: 3, watchers: 5 },
            //     { name: "fp_study_notes_connecting_APIs_to_databases", commits_url: "", forks: 1, language: "JavaScript", stargazers_count: 0, open_issues: 2, watchers: 0 },
            //     { name: "Test Repo", commits_url: "", forks: 0, language: "JavaScript", stargazers_count: 3, open_issues: 0, watchers: 10 }
            // ]
            if (cancelRequest) return;
            setRepoData(data);
        }

        getRepos();

        return () => cancelRequest = true;
    }, [username])

    const renderRepo = () => repoData.map((r, i) => <Repository key={i} data={r} />)

    return (
        <div className="repositories-container">
            {renderRepo()}
        </div>
    )
}
