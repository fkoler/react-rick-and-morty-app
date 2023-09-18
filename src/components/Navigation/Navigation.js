import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import ThemeSwitcher from '../ThemeSwitcher';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary mb-4">
            <div className="container menuContainer">

                <button
                    className="navbar-toggler menuButton"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <style jsx='true'>
                        {`
                            button[aria-expanded="false"] > .close{
                                display: none;
                            }

                            button[aria-expanded="true"] > .open{
                                display: none;
                            }
                        `}
                    </style>
                    <i className="fas fa-bars fw-bold text-primary open"></i>
                    <i className="fas fa-times fw-bold text-primary close"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav fs-5">
                        <li className="nav-item">
                            <NavLink activeclassname="active" to="/" className="nav-link text-dark">
                                Characters
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/episodes" className="nav-link text-dark">
                                Episodes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/locations" className="nav-link text-dark">
                                Locations
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="themeSwith">
                        <ThemeSwitcher />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
