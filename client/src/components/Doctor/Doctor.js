import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './Doctor.css';
import {BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function Doctor()
{
    const [room,setRoom] = useState('');
    return (
        <div>
            <Navbar/>
            <div className='doctor-head'>
                <h1>Enter your unique ID</h1>
                <input className='doctor-id-input' onChange={(event)=>{setRoom(event.target.value)}}></input>
                <Link to = {`/chat?room=${room}&name=doctor`}><BsFillArrowRightCircleFill style={{fontSize:'30px',marginLeft:'20px' ,color:'black'}} /></Link>
            </div>
        </div>
    );
}