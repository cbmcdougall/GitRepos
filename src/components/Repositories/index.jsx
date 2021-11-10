import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Repository } from '..';

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
            console.log(data);
            if (cancelRequest) return;
            setRepoData(data);
        }

        getRepos();

        return () => cancelRequest = true;
    }, [username])

    const renderRepo = () => repoData.map((r, i) => <Repository key={i} data={r} />)

    return (
        <div>
            {renderRepo()}
        </div>
    )
}
