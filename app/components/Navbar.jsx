import React from 'react';
import {Link} from 'react-router-dom';
const image = '../../images/SchoolLogo.jpg';

const Navbar = () => {
        return (
            <nav className="navbar">
                <div className="navbar-child">
                    <img className="school-logo" src={image} />
                </div>
                <div className="navbar-child">
                    <Link className="navbar-link" to="/">Home</Link>
                    <Link className="navbar-link" to="/campuses">Campuses</Link>
                    <Link className="navbar-link" to="/students">Students</Link>
                </div>
            </nav>
        )
}

export default Navbar;
