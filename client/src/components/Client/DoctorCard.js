import React from 'react';
import {BsChatLeftText } from 'react-icons/bs';
import {Link} from 'react-router-dom'; 
export default function DoctorCard(props)
{
    return(
        <div className='cards'>
            {props.doctors.map((doctor)=>{
               return <Card doctor = {doctor}/>
            })}
        </div>
    );
}
function Card(props)
{
    return(
        <div className='doctor-card'>
            <img  className='card-item' style={{gridColumn:'1/3',  marginLeft:'55px'}}src='https://st2.depositphotos.com/1006318/8387/v/450/depositphotos_83877780-stock-illustration-medical-doctor-profile-icon.jpg'></img>
            <h4 className='card-item' style={{gridRow:'2'}}>{props.doctor.firstName}</h4>
            <span className='card-item' style={{gridRow:'3',fontSize:'12px'}}>{props.doctor.speciality} </span>
            <Link  className='card-item card-button' to= {`/chat?room=${props.doctor.email}&name=client`} ><BsChatLeftText style={{marginTop:'5px'}} fontSize = '1.3rem'/></Link>
        </div>
    )
}