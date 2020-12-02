import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa';

export const Nav = styled.nav `
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 30px;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
        font-size:2rem;
        margin-top: 0;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-125%, 150%);
        font-weight: bold;
    }

    @media screen and (min-width: 800px){
        p {
            transform: translate(-125%, 105%);
            font-size: 2rem;
        }
    }
`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-20%, 15%);
`;