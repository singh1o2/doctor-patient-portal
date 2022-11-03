import React,{useState} from 'react';
import Navbar from '../Navbar';
import {AiOutlineArrowRight } from 'react-icons/ai';
import DoctorCard from './DoctorCard';
import './Client.css';

const doctors = [{name:'Dr. Sam', title: 'Family Physician', room:'123'},
                 {name:'Dr. Kim', title: 'Cardiologist', room:'561'}]
export default function Client()
{
    const[dropDown,setDropdown]= useState(false);

    return(
        <div>
            <Navbar/>
            <div className='header'>
                <h1 className='header-text'>Welcome to MedDesk</h1>
                <h4 className='header-text'>Solution for all heath needs</h4>
                <button className='header-button' onClick={()=>{setDropdown(true)}}> 
                    <span style={{marginRight:'15px'}}>Get Started</span>  
                    <AiOutlineArrowRight  fontSize = '1.5rem'/>
                </button>
                {
                    dropDown &&
                    <DoctorCard doctors = {doctors}/>

                }
            </div>
        </div>
        
    )
}