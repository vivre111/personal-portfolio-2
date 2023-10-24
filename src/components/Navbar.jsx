import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header class="header">
            <div class="left">
                <Link to="/">Home</Link>
            </div>
            <div class="mid">
                <ul class="navbar">

                    <li>
                        <Link to="/Research">Research</Link>
                    </li>
                    <li>
                        <Link to="/LabMembers">Lab Members</Link>
                    </li>
                    <li>
                        <Link to="/Publications">Publications</Link>
                    </li>

                    <li>
                        <Link to="/News">News</Link>
                    </li>
                    <li>
                        <Link to="/Opportunities">Opportunities</Link>
                    </li>
                    <li>
                        <Link to="/Funding">Funding</Link>
                    </li>
                </ul>

            </div>
            <div class="right">
                <Link to="/Contact">Contact</Link>
            </div>

        </header>
    );
}
export default Navbar;