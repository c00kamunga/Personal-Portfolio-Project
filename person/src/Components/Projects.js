import React, { useState, useEffect } from 'react'
import axios from 'axios';



export default function Projects(props) {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        axios
            .get('https://github.com/c00kamunga?tab=repositories')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            });
    }, [])



    return (
        <div>

        </div>
    )
}
