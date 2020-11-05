import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    background: #ffc500;
    display: grid;
    top: 0;
    bottom: 0;
    transition: 0.3s ease-out;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }

`;

export const CloseIcon = styled(FaTimes)`
    color: #000;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    padding-top: 100px;
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 60px);
    }
`;

export const SideBarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-out;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #e31837;
        transition: 0.2s ease-out; 
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;
`;

export const SideBarRoute = styled(Link)`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: .2s ease-out;
    text-decoration: none;

    &:hover {
        transition: .2s ease-out;
        background: #fff;
        color: #010606;
    }
`