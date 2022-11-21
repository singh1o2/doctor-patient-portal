import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Chat from './components/Chat/Chat';
import Client from './components/Client/Client';
import Doctor from './components/Doctor/Doctor';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

import { AuthProvider } from './contexts/AuthContext';

export default function App()
{
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path = '/' element = {<div><Login /><Signup/></div>}></Route>
                    <Route path = '/client' element = {<Client />}></Route>
                    <Route path = '/chat' element = {<Chat/>}></Route>
                    <Route path = '/doctor' element = {<Doctor/>}></Route>
                </Routes>
            </Router>
        </AuthProvider>

    );
}