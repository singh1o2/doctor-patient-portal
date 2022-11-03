const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods: ['GET','POST']
    }
});

io.on('connection', (socket) => {

  socket.on('join',({name,room},)=>{
    socket.join(room);
    console.log(`${name} has joined the room ${room}`);
  })
  socket.on('disconnect',()=>{
    console.log('disconnected');
  })

  socket.on('send_message',(message)=>{
    socket.to(message.room).emit('receive_message',message);
  })
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});
