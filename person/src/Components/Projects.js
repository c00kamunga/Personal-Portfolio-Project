import React, { useState, useEffect } from 'react'
import axios from 'axios';



export default function Projects(props) {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        const id = props.match.params.id;

        axios
            .get(`https://github.com/c00kamunga?tab=repositories`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });

    }, [props.match.params.id])



    return (
        <div>

        </div>
    )
}
