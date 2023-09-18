import React, { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import styled from 'styled-components';
import ThemeContext from '../contexts/ThemeContext';
import themeList from '../ThemeData/themeList';

const ThemeSwitcherStyles = styled.div`
    label {
        --gap: 5px;
        --size: 20px;
        height: 30px;
        width: 55px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        background-color: #d0e1ff;        
        border-radius: 15px;
        z-index: 1;

        .icon {
            height: var(--size);
            width: var(--size);
            display: flex;
            align-items: center;
            justify-content: center;            
        }

        svg {
            width: 75%;
            color: whitesmoke;
        }
    }

    label::after {
        position: absolute;
        content: '';
        border-radius: 50%;
        transform: translateY(-50%);
        top: 50%;
        left: var(--gap);
        background-color: #0b5ed7;
        height: var(--size);
        width: var(--size);
        z-index: -1;
        transition: 300ms ease left;
    }

    input {
        width: 0;
        height: 0;
        display: none;
        visibility: hidden;
    }

    input:checked + label::after {
        left: calc(100% - var(--size) - var(--gap));
    }  
`;

const ThemeSwitcher = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <ThemeSwitcherStyles>
            <input type="checkbox" id="switcher" onChange={toggleTheme} checked={theme === themeList.dark} />
            <label htmlFor="switcher">
                <div className='icon'>
                    <FiSun />
                </div>
                <div className='icon'>
                    <FiMoon />
                </div>
            </label>
        </ThemeSwitcherStyles>
    )
};

export default ThemeSwitcher;
