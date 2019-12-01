import React from 'react'
import styled from 'styled-components';



const StyledHome = styled.div`
margin: auto;
position: absolute;
top: 0; left: 0; bottom: 0; right: 0;
background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,107,1) 31%, rgba(5,158,168,1) 54%, rgba(2,161,171,1) 74%, rgba(0,212,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,107,1) 31%, rgba(5,158,168,1) 54%, rgba(2,161,171,1) 74%, rgba(0,212,255,1) 100%);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,107,1) 31%, rgba(5,158,168,1) 54%, rgba(2,161,171,1) 74%, rgba(0,212,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
    `

const StyledPara = styled.p`
font-family: 'Permanent Marker', cursive;
font-size: 80px;
`


const StyledButton = styled.button`
border: none;
padding: 15px 32px
text-align: center;
text-decoration: none;
`





export default function Home() {
    return (
        <StyledHome>
            <StyledPara>
                Hi,<br />
                I'm Barinder Joseph,<br />
                An Aspiring Web Developer<br />
            </StyledPara>
            <StyledButton button>Click To Get Started</StyledButton>
        </StyledHome>
    )
}



