import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom';
import './Chat.css'
import Navbar from '../Navbar';
import {AiOutlineSend } from 'react-icons/ai';


const socket = io('http://localhost:3001');//connect to server 

export default function Chat()
{
    const {search} = useLocation();
    const [name,setName]= useState('');
    const [room,setRoom]= useState('');
    const [message,setMessage] = useState('');
    const [messageList,setMessageList] = useState([]);

    const sendMessage  = async () => {
        if(message!=''){
          await socket.emit('send_message',{room, name,message});
          setMessageList((messageList)=>[...messageList,{room, name,message}]);
          setMessage('');
        }
    };

    useEffect(()=>{
        const {room,name} = queryString.parse(search); 
        console.log(room);
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room});
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    },[search]);//render only when value in array changes

    useEffect(()=>{
        socket.on('receive_message',(data)=>{
            setMessageList((messageList)=>[...messageList,data]);
        })
    },[socket]);
    
    return(
        <div > 
            <Navbar/>
            <div className = "chat-container">
                <div className = "chat-header">
                    <span>{name}</span>
                </div>
                <div className = "chat-body">
                    {messageList.map((message)=>{
                        return <h4>{message.message} - {message.name}</h4>
                    })}
                </div>
                <div className = "chat-footer">
                    <input type = "text" onChange  = {(event)=>{setMessage(event.target.value);}}/>
                    <button className = 'chat-button' type = "submit" onClick = {sendMessage}> <AiOutlineSend /></button>
                </div>
            </div>
        </div>
    )
}