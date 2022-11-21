import React, { useEffect,useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {CgProfile} from 'react-icons/cg';

export default function Navbar()
{
    const {currentUser} =React.useContext(AuthContext);

    return (<div>
        <ul className = 'navbar'>
            <li className = 'nav-logo'>MedDesk</li> 
            <li className = 'nav-item nav-main'>About</li> 
            <li className = 'nav-item nav-main'>Help</li>
            <li className = 'nav-item nav-main'>View Log</li>
            <li className = 'nav-item' style={{marginLeft:'80px'}}>{currentUser}</li> 
            <li className = 'nav-item'><CgProfile style={{fontSize:'30px'}}/></li> 
        </ul>
        </div>);
}