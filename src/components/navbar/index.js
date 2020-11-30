import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'><h1>Pizza</h1></NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars className='menu-icon'/>
                </NavIcon>
            </Nav>
        </>
    );
};


export default Navbar;