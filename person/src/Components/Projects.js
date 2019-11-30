import React, { useState, useEffect } from 'react'
import axios from 'axios';



export default function Projects(props) {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        axios
            .get('https://api.github.com/users/c00kamunga/repos')
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
