import React from "react";  
import { Link } from "react-router";
import './Header.css';

const Header = () =>{
    return(
        <nav>
            <h3>this is header</h3>
            <Link to="/home">Home</Link>
            <Link to="/mobiles">Mobile</Link>
            <Link to="/laptop">Laptop</Link>
        </nav>
    );
};

export default Header;