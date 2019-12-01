import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const StyledMain = styled.div`
border: 3px solid black;
`



const StyledBoxes = styled.div`
border: 3px solid ;
`






export default function Main() {
    return (
        <StyledMain>
            <StyledBoxes><Link to='/About'>About</Link></StyledBoxes>
            <StyledBoxes><Link to='/Skills'>Skills</Link></StyledBoxes>
            <StyledBoxes><Link to='/Projects'>Projects</Link></StyledBoxes>
            <StyledBoxes><Link to='/Contact'>Contact</Link></StyledBoxes>
        </StyledMain>
    )
}
