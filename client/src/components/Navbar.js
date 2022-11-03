import React from 'react';
export default function Navbar()
{
    return (
        <ul className = 'navbar'>
            <li className = 'nav-logo'>MedDesk</li> 
            <li className = 'nav-item'>About</li> 
            <li className = 'nav-item'>Help</li>
            <li className = 'nav-item'>Login</li>
            <li className = 'nav-item'>Signup</li> 
        </ul>
    );
}