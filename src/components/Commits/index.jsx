import React, { useEffect } from 'react';
import axios from 'axios';

export const Commits = ({ url }) => {

    useEffect(async () => {
        console.log(url.replace(/{\/sha}$/, ''));
        const options = {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        }
        const { data } = await axios.get(url.replace(/{\/sha}$/, ''), options);
        console.log(data.length);
    }, [url])

    return (
        <>
            {commits}
        </>
    )
}

/word/
