import React, { useRef, useState,useContext } from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import {AuthContext} from '../../contexts/AuthContext';
export default function App(){
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const location = useRef();
    const speciality= useRef();

    const [docPressSign,setDocPressSign] = useState(false);
    const [custPressSign,setCustPressSign] = useState(false);
    const {signup} = useContext(AuthContext);

    async function handleSubmitDoctor(e){
        e.preventDefault()
        await signup(email.current.value,password.current.value);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name.current.value,email:email.current.value,location:location.current.value,speciality:speciality.current.value  })
        };
        await fetch('http://localhost:8080/doctor/create',requestOptions).then(res=>res.json());
        window.location.href="/doctor";
    }

    async function handleSubmitCustomer(e){
        e.preventDefault()
        await signup(email.current.value,password.current.value);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name.current.value,email:email.current.value,location:location.current.value  })
        };
        await fetch('http://localhost:8080/customer/create',requestOptions).then(res=>res.json());
        window.location.href="/client";
    }
    return(
        <div>
            <Card style = {{width:'300px',margin:'100px auto'}}>
                <Card.Body>
                <Card.Title style={{marginTop:'20px'}}  >Sign up</Card.Title>
                <Button style={{marginRight:'20px'}} onClick={()=>{setCustPressSign(true);setDocPressSign(false);}} >Customer</Button>
                <Button onClick={()=>{setCustPressSign(false);setDocPressSign(true);}} >Doctor</Button>
                {docPressSign && <Form onSubmit = {handleSubmitDoctor}>
                    <Form.Group name = 'name' >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type = 'name' ref = {name} ></Form.Control>
                    </Form.Group>

                    <Form.Group name = 'speciality' >
                        <Form.Label>Speciality</Form.Label>
                        <Form.Control type = 'name' ref = {speciality}></Form.Control>
                    </Form.Group>

                    <Form.Group name = 'location' >
                        <Form.Label>Location</Form.Label>
                        <Form.Control type = 'name' ref ={location}></Form.Control>
                    </Form.Group>

                    <Form.Group id = 'email' >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = 'email' ref = {email}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group id = 'password' >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = 'password' ref = {password}></Form.Control>
                    </Form.Group>
                    <Button style={{marginTop:'20px'}} type = 'submit'>Signup</Button>
                </Form>}

                {custPressSign && <Form onSubmit = {handleSubmitCustomer}>
                    <Form.Group name = 'name' >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type = 'name' ref= {name}></Form.Control>
                    </Form.Group>

                    <Form.Group name = 'location' >
                        <Form.Label>Location</Form.Label>
                        <Form.Control type = 'name' ref = {location}></Form.Control>
                    </Form.Group>

                    <Form.Group id = 'email' >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = 'email' ref = {email}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group id = 'password' >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = 'password' ref = {password}></Form.Control>
                    </Form.Group>
                    <Button type = 'submit' style={{marginTop:'20px'}}>Signup</Button>
                </Form>}
                </Card.Body>
            </Card>
        </div>
    )
}