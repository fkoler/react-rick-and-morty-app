import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-body-primary mb-4">
            <div className="container">

                <button
                    className="navbar-toggler"
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
                            <NavLink activeclassname="active" to="/" className="nav-link">
                                Characters
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/episodes" className="nav-link">
                                Episodes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/locations" className="nav-link">
                                Locations
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
