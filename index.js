const express = require('express');
const http = require('http');
const socket = require('socket.io');

var app = express();
var server = app.listen(1337);
app.use(express.static('public'));

var storedData = null;
var storedTeamNames = null;

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
  console.log("(Overlay) New connection:", socket.id);
  io.of('/overlay').emit('adminVal', storedData);
  socket.on('disconnect', function(){
    console.log("(Overlay) Disconnected:", socket.id);
  })
})

io.of('/hud').on('connection', function(socket) {
  console.log("(HUD) New connection:", socket.id);
  io.of('/hud').emit('adminTeamName', storedTeamNames);
  socket.on('disconnect', function(){
    console.log("(HUD) Disconnected:", socket.id);
  })
})

io.of('/admin').on('connection', function(socket) {
  console.log("(Admin) New connection:", socket.id);

  socket.on('adminUpdate', function(data){
    io.of('/overlay').emit('adminVal', data);
    storedData = data;
  })

  socket.on('adminTeamNameUpdate', function(data){
    console.log("Received team names")
    io.of('/hud').emit('adminTeamName', data);
    storedTeamNames = data;
  })

  socket.on('adminSwitchColours', function(data){
    console.log("Received team names")
    io.of('/overlay').emit('adminSwitch', data);
    io.of('/hud').emit('adminSwitch', data);
  })

  socket.on('disconnect', function(){
    console.log("(Admin) Disconnected:", socket.id);
  })
})




console.log("Server up and running")