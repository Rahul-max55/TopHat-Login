import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li> <NavLink to="/"> Home </NavLink></li>
                <li> <NavLink to="/login" > Login </NavLink></li>
                <li> <NavLink to="signup" > Signup </NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar