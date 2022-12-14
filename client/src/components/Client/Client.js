import React,{useState,useEffect} from 'react';
import Navbar from '../Navbar';
import {AiOutlineArrowRight } from 'react-icons/ai';
import DoctorCard from './DoctorCard';
import './Client.css';
import SimpleMap from './Map';

export default function Client()
{
    const[dropDown,setDropdown]= useState(false);
    const[doctors,setDoctors] = useState([]);
    
    const fetchData = async()=>{
        await fetch('http://localhost:8080/doctor/all')
        .then(res =>res.json())
        .then(data=>setDoctors(data));
    }
    useEffect( ()=>{
               fetchData();
                    },[]);
    
    return(
        
        <div className='App'>
            <Navbar/>
            
                <h1 className='header-text'>Welcome to MedDesk</h1>
                <h4 className='header-text'>Solution for all heath needs</h4>
                <button className='header-button' onClick={()=>{setDropdown(true)}}> 
                    <span style={{marginRight:'15px'}}>Get Started</span>  
                    <AiOutlineArrowRight  fontSize = '1.5rem'/>
                </button>
                <br/>
                <SimpleMap xoomLever={10}/>
                {
                    dropDown &&
                    <DoctorCard doctors = {doctors}/>

                }
            
        </div>
        
        
    )
}