import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Commits = ({ url }) => {
    const [commits, setCommits] = useState()

    useEffect(async () => {

        const options = {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        }
        const { data } = await axios.get(url.replace(/{\/sha}$/, ''), options);
        // Mock dataset
        // const data = [{}, {}, {}];
        setCommits(data.length);
    }, [url])

    return (
        <>
            {commits}
        </>
    )
}
