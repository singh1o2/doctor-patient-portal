import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Chat from './components/Chat/Chat';
import Client from './components/Client/Client';
import Doctor from './components/Doctor/Doctor';

export default function App()
{
    return (
        <Router>
            <Routes>
                <Route path = '/' element = {<Client />}></Route>
                <Route path = '/chat' element = {<Chat/>}></Route>
                <Route path = '/doctor' element = {<Doctor/>}></Route>

            </Routes>
        </Router>
    );
}