

import React from "react";
import Logo from '../img/airbnb-logo.png';
import './nav-style.css'

export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={Logo} alt='Airbnb Logo' className='logo' />
        </nav>
    )
}



