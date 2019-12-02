import React from 'react'
import styled from 'styled-components';



const StyledCards = styled.div`
border: 3px solid black;
margin-top: 1rem;
`





export default function ProjectCards(props) {
    return (
        <StyledCards>
            <h3>Project Name: {props.proj.name}</h3>
            <h3>Url: {props.proj.url}</h3>
        </StyledCards>
    )
}
