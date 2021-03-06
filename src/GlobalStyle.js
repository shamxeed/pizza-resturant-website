import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
    @media screen and (min-width: 800px){
        .menu-icon {
        font-size: 2.5rem;
        margin-left: -10px;
        margin-top: -3px;
    }
    }
`