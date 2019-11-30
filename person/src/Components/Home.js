import React from 'react'
import styled from 'styled-components';



const StyledHome = styled.div`
    position: relative;
    width: 300px;
    height: 100px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -70px 0 0 -170px;
`




export default function Home() {
    return (
        <StyledHome>
            <p>
                Hi,<br />
                I'm Barinder Joseph,<br />
                An Aspiring Web Developer<br />
            </p>
            <button>Click To Get Started</button>
        </StyledHome>
    )
}



