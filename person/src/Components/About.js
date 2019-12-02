import React from 'react'
import styled from 'styled-components'



const StyledAbout = styled.div`
background-color: top: 0; left: 0; bottom: 0; right: 0;
background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,107,1) 31%, rgba(5,158,168,1) 54%, rgba(2,161,171,1) 74%, rgba(0,212,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,107,1) 31%, rgba(5,158,168,1) 54%, rgba(2,161,171,1) 74%, rgba(0,212,255,1) 100%);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,107,1) 31%, rgba(5,158,168,1) 54%, rgba(2,161,171,1) 74%, rgba(0,212,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);

`



export default function About() {
    return (
        <StyledAbout>
            <h1>About Me</h1>
            <p>
                I am an aspiring web developer working my way to understand the ins and out of programming.
                I have learned things from HTML up to React. Though the path is a tough one, I have not and will
                not give up.
            </p>
        </StyledAbout>
    )
}
