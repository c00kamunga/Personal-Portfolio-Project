import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const StyledMain = styled.div`
border: 3px solid red;
display: flex;
padding: 3rem;
justify-content: center;
background: rgb(2,0,36);
background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,46,110,1) 9%, rgba(5,158,168,1) 31%, rgba(9,53,121,1) 68%, rgba(9,53,121,1) 68%, rgba(0,212,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,46,110,1) 9%, rgba(5,158,168,1) 31%, rgba(9,53,121,1) 68%, rgba(9,53,121,1) 68%, rgba(0,212,255,1) 100%);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,46,110,1) 9%, rgba(5,158,168,1) 31%, rgba(9,53,121,1) 68%, rgba(9,53,121,1) 68%, rgba(0,212,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
`



const StyledBoxes = styled.div`
font-family: 'Permanent Marker', cursive;
font-size: 2rem;
border: 3px solid black;
padding: 2rem;
margin-left: 2rem;
`






export default function Main() {
    return (
        <StyledMain>
            <StyledBoxes><Link to='/About' style={{textDecoration: 'none'}}>About</Link></StyledBoxes>
            <StyledBoxes><Link to='/Skills' style={{textDecoration: 'none'}}>Skills</Link></StyledBoxes>
            <StyledBoxes><Link to='/Projects' style={{textDecoration: 'none'}}>Projects</Link></StyledBoxes>
            <StyledBoxes><Link to='/Contact' style={{textDecoration: 'none'}}>Contact</Link></StyledBoxes>
        </StyledMain>
    )
}
