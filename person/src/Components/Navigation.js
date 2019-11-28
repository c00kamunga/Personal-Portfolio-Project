import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <Link to='/Home'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Skills'>Skills</Link>
            <Link to='/Projects'>Projects</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    )
}
