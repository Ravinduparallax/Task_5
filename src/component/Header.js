import React from 'react';
import Parallax_logo from "../Assets/Parallax-logo.png"
import './styles.css';

const Header = () =>{
    return (
        <div className="Main">
            <h5>Welcome to Parallax Technologies</h5>
            <img src={Parallax_logo} alt="Parallax Logo" className="P-img"/>
        </div>
    )
}

export default Header;