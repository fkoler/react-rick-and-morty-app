import { createGlobalStyle } from "styled-components";
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

import themeList from "../ThemeData/themeList";

const GlobalStyles = createGlobalStyle`
    :root {
        /* colors */        
        --whitesmoke: #f5f5f5;
        --gray: #1f2428;
        --black: #000000;
    }

    html {
        font-size: 14px;
    }

    body {
        background-color: ${({ theme: { theme } }) => theme === themeList.light ? 'var(--whitesmoke)' : 'var(--gray)'};
        color: ${({ theme: { theme } }) => theme === themeList.light ? 'var(--black)' : 'var(--whitesmoke)'};
        transition: 300ms ease;
        font-family: 'Poppins', sans-serif;
    }
   
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
    }

    
    ul.themeSwith {
        margin-bottom: 2px;
        padding-left: 10px;
    }

    div.msg {
        text-align: center;
        padding-right: 200px;
    }

    @media only screen and (max-width: 992px) {
        .menuContainer {
            width: 50%;
            display: flex;
            flex-direction: column;
        }

        .sc-beyTiQ {
            margin-left: 14px;
        }
    }

    .text-dark {
        color: ${({ theme: { theme } }) => theme === themeList.light ? 'var(--black)' : 'var(--whitesmoke)'} !important;
    }
`;

export default GlobalStyles;
