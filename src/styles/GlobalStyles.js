import { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

import themeList from '../ThemeData/themeList';

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
        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? 'var(--whitesmoke)' : 'var(--gray)'};
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? 'var(--black)' : 'var(--whitesmoke)'};
        transition: 300ms ease;
        font-family: 'Poppins', sans-serif;
    }
   
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    
    ul.themeSwith {
        margin-bottom: 2px;
        padding-left: 10px;
    }

    div.msg {
        text-align: center;
        justify-content: center;
        padding-right: 200px;
    }

    @media (max-width: 992px) {
        div.msg {
            text-align: center;
            justify-content: center;
            padding: 0;            
        }
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
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? 'var(--black)'
                : 'var(--whitesmoke)'} !important;
    }

    .progress_wrapper {
        position: fixed;
        top: 0;
        left: 0;
        max-width: 100vw;
        z-index: 1;
        opacity: 0.9;        
    }

    .progress_bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 10px;
        background-color: #0b5ed7;
        transition: 300ms ease;        
    }

    .hidden {
        display: none;
    }

    .showButton {
        position: fixed;
        background-color: #0b5ed7;
        border-radius: 50%;
        padding: 0.25rem;
        right: -120px;
        bottom: 30px;
        font-size: 50px;
        color: whitesmoke;
        cursor: pointer;
        transform: translateX(-150px);
        animation: slideLeft 1000ms;
        z-index: 1; 
        opacity: 0.9;        
    }

    @keyframes slideLeft {
        0% {
            transform: translateX(-100px);
        }
        100% {
            transform: translateX(-150px);
        }
    }
`;

export default GlobalStyles;
