import React from "react";  
import { Link } from "react-router";
import './Header.css';

const Header = () =>{
    return(
        <div>
            <h3>this is header</h3>
            <Link to="/Home">Home</Link>
            <Link to="/Mobiles">Mobile</Link>
            <Link to="/Laptop">Laptop</Link>
        </div>
    );
};

export default Header;