const express = require('express');
const http = require('http');
const socket = require('socket.io');

var app = express();
var server = app.listen(1337);
app.use(express.static('public'));

var storedData = null;

app.get('/overlay', (req, res) => {
    //res.sendFile('viewer.html');
    res.sendFile(__dirname + '/public/viewer.html');
})

app.get('/hud', (req, res) => {
  //res.sendFile('viewer.html');
  res.sendFile(__dirname + '/public/hud.html');
})

app.get('/admin', (req, res) => {
    //res.sendFile('admin.html');
    res.sendFile(__dirname + '/public/admin.html');
})

app.get('*', function (request, response) {
  	response.send('404!');
})

// -------------------------------------------------------------------------------------------
// Socket.io
var io = socket(server);

io.of('/overlay').on('connection', function(socket) {
  console.log("(Viewer) New connection:", socket.id);
  io.of('/overlay').emit('adminVal', storedData);
  socket.on('disconnect', function(){
    console.log("(Viewer) Disconnected:", socket.id);
  })
})

io.of('/admin').on('connection', function(socket) {
  console.log("(Admin) New connection:", socket.id);

  socket.on('adminUpdate', function(data){
    io.of('/overlay').emit('adminVal', data);
    storedData = data;
  })

  socket.on('disconnect', function(){
    console.log("(Admin) Disconnected:", socket.id);
  })
})




console.log("Server up and running")