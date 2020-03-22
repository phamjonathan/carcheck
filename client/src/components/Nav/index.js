import React from 'react';
// import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h2> Car Check </h2>
            <ul className="nav-Links">

                <Link style= {navStyle} to= "../components/About/">
                <li> About </li>
                </Link>

                <Link style= {navStyle} to= "/Signup">
                <li> Sign Up </li>
                </Link>

                <Link style= {navStyle} to= "/Signin">
                <li> Sign In </li> 
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;