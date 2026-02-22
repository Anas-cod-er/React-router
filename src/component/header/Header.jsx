import React from "react";  
import { Link, NavLink } from "react-router";
import './Header.css';

const Header = () =>{
    return(
        <div>
        <h3>this is header</h3>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/mobiles">Mobile</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
            <NavLink to="/users">Users</NavLink>
        </nav>
        </div>
    );
};

export default Header;