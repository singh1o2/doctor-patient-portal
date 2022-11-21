import React, { useRef, useState,useContext } from 'react';
import {Form,Button,Card,Alert} from 'react-bootstrap';
import {AuthContext} from '../../contexts/AuthContext';
export default function App(){
    const email = useRef();
    const password = useRef();

    const [docPress,setDocPress] = useState(false);
    const [custPress,setCustPress] = useState(false);
    const [error,setError] = useState('');
    const {login} = useContext(AuthContext);

    async function handleSubmitCustomer(e){
        e.preventDefault();
        try{
        await login(email.current.value,password.current.value);
        window.location.href="/client";
        }
        catch{
            setError('Incorrect password or Username');
        }
    }

    async function handleSubmitDoctor(e){
        e.preventDefault();
        console.log('Client');
        try{
            await login(email.current.value,password.current.value);
            window.location.href="/doctor";
            }
        catch{
                setError('Incorrect password or Username');
            }
    }
    return(
        <div>
            <Card style = {{width:'300px',margin:'100px auto'}}>
                <Card.Body>
                <Card.Title>Login</Card.Title>
                {error && <Alert variant = 'danger'>{error}</Alert>}
                <Button style={{marginRight:'20px'}} onClick={()=>{setCustPress(true);setDocPress(false);}}>Customer</Button>
                <Button  onClick={()=>{setCustPress(false);setDocPress(true);}}>Doctor</Button>
                {docPress && <Form onSubmit={handleSubmitDoctor}>
                    <Form.Group id = 'email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = 'email' ref = {email}></Form.Control>
                    </Form.Group>
                    <Form.Group id = 'password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = 'password' ref = {password}></Form.Control>
                    </Form.Group>
                    <Button type = 'submit' style={{marginTop:'20px'}}>Login</Button>
                </Form>}

                {custPress && <Form onSubmit={handleSubmitCustomer}>
                    <Form.Group id = 'email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = 'email' ref = {email}></Form.Control>
                    </Form.Group>
                    <Form.Group id = 'password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = 'password' ref = {password}></Form.Control>
                    </Form.Group>
                    <Button type = 'submit'  style={{marginTop:'20px'}}>Login</Button>
                </Form>}
                </Card.Body>
            </Card>
        </div>
    )
}