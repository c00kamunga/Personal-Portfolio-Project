import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import styled from 'styled-components';


const StyledDrop = styled.div`
text-align: right;
`




export default function Navigation() {

    const [open, setOpen] = useState(false)
    function toggler() {
        setOpen(!open)
    }
    return (
        <StyledDrop>
            <h1>Barinder's Portfolio</h1>
            <Dropdown direction="left" isOpen={open} toggle={toggler}>
                <DropdownToggle className="theButton">
                    <i className="fas fa-bars burgerMenu"></i>
                </DropdownToggle>
                <DropdownMenu className="DropdownMenu">
                    <DropdownItem divider />
                    <DropdownItem><Link to="Home"><div>Home</div></Link></DropdownItem>
                    <DropdownItem><Link to="About"><div>About</div></Link></DropdownItem>
                    <DropdownItem><Link to="Skills"><div>Skills</div></Link></DropdownItem>
                    <DropdownItem><Link to="Projects"><div>Projects</div></Link></DropdownItem>
                    <DropdownItem><Link to="Contact"><div>Contact</div></Link></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </StyledDrop>

    )
}
