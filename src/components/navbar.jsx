import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Importing the stylesheet

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={{
                        fontWeight: "bold",
                        color: "green" // Changing active link color to green
                    }}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/thankyou" exact activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}>
                        How-To
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Privacyandpolicy" exact activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}>
                        Privacy And Policy
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
