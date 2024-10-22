import React from 'react';
import { NavLink } from 'react-router-dom';
import './demoNavbar.scss'; // Import the CSS file

const DemoNavbar: React.FC = () => {
    return (
        <nav className="demoNavbar">
            <NavLink
                to="/home"
                className={({ isActive, isPending, isTransitioning }) =>
                    isActive ? 'active-link' :
                        isPending ? 'pending-link' :
                            isTransitioning ? 'transitioning-link' : ''
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive, isPending, isTransitioning }) =>
                    isActive ? 'active-link' :
                        isPending ? 'pending-link' :
                            isTransitioning ? 'transitioning-link' : ''
                }
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive, isPending, isTransitioning }) =>
                    isActive ? 'active-link' :
                        isPending ? 'pending-link' :
                            isTransitioning ? 'transitioning-link' : ''
                }
            >
                Contact
            </NavLink>
        </nav>
    );
};

export default DemoNavbar;
