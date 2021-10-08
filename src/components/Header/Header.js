import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <Link to="/home"> Home </Link>
            <Link to="/register">Resister</Link>
            <Link to="/login">Login</Link>
            <button>Log out</button>
        </div>
    );
};

export default Header;