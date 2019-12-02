import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProjectCards from './ProjectCards';



export default function Projects(props) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = () => {

            axios
                .get('https://api.github.com/users/c00kamunga/repos')
                .then(response => {
                    console.log(response.data)
                    setProjects(response.data)
                })
                .catch(error => {
                    console.error(error)
                });
        }
        getProjects()
    }, [])



    return (
        <>
            <h1>Projects List</h1>
            {
                projects.map((proj) => (
                    <ProjectCards proj={proj} />
                ))

            }
        </>
    )
}
