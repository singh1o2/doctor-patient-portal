import React, { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './Doctor.css';
import {AuthContext} from '../../contexts/AuthContext';
import {Button} from 'react-bootstrap';


export default function Doctor()
{
    const {currentUser} =useContext(AuthContext);
    const [status,setStatus] = useState(false);
    const [doctor,setDoctor] = useState('');

    const fetchData =async ()=>{
        await fetch(`http://localhost:8080/doctor/${currentUser}`)
                .then(res =>res.json())
                .then(data=>setDoctor(data));            

    }
    useEffect(()=>{
        console.log('Hi');
        fetchData();
    },[]);

    const handleClick = async () =>{
        setStatus(!status);
        const statusI = status?'N':'Y';
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'status':statusI})
        };
        await fetch(`http://localhost:8080/doctor/update/${currentUser}`,requestOptions).then(res=>res.json());
    }

    return (
        <div>
            <Navbar/>
            <div className='doctor-head'>
                <h1>Welcome {doctor.name}</h1>
                <Button style =  {{margin:'20px auto'}}variant='primary' onClick = {handleClick} >{status?'Go Offline':'Go Online'}</Button>
                <Button style = {{margin:'20px auto',display:'block'}}><Link style ={{color: 'white',textDecoration:'none'}} to = {`/chat?room=${currentUser}&name=doctor`}>Start Chat now</Link></Button>
            </div>
        </div>         
    ); 
    }           
    
                 





              

