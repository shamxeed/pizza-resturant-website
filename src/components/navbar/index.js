import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'><h1>Pizza</h1></NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};


export default Navbar;